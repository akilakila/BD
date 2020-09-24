const path = require("path");
const fs = require("fs");
const electron = require("electron");
const config = require("./config");
const Logger = require("./logger");

const Module = require("module").Module;
Module.globalPaths.push(path.resolve(electron.remote.app.getAppPath(), "..", "app.asar", "node_modules"));

// Cause DiscordNative to get put in global
electron.contextBridge.exposeInMainWorld = (key, val) => window[key] = val;

// Define script injector
const injectScript = url => new Promise(resolve => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    script.src = url;
    document.body.appendChild(script);
});

const linkStyle = url => new Promise(resolve => {
    const script = document.createElement("link");
    script.rel = "stylesheet";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    script.href = url;
    document.body.appendChild(script);
});

const testJSON = function(data) {
    try {return JSON.parse(data);}
    catch (error) {return false;}
}

const getFile = function(url) {
    const request = require("request").defaults({headers: {"User-Agent": "BetterDiscord"}});
    return new Promise(resolve => {
        request.get(url, function(error, response, body) {
            if (error || response.statusCode !== 200) return resolve(null);
            resolve(body);
        });
    });
}

const getCommitHash = async function() {
    const url = "https://api.github.com/repos/rauenzi/BetterDiscordApp/commits/gh-pages";
    Logger.log("Getting hash from: " + url);
    const data = await getFile(url);
    const parsed = testJSON(data);
    if (!parsed) return null;
    return parsed.sha;
}

const loadResource = async function(base, backup, injector) {
    Logger.log(`Loading Resource (${base})`);
    let success = await injector(base);
    if (success) return Logger.log(`Successfully loaded (${base})`);
    Logger.warn(`Could not load ${base}. Using backup ${backup}`);
    success = await injector(backup);
    if (success) return Logger.log(`Successfully loaded (${backup})`);
    Logger.err(`Could not load backup ${backup}. Giving up.`);
}

// Setup in renderer context
const currentWindow = electron.remote.getCurrentWindow();
currentWindow.webContents.on("dom-ready", async () => {
    while (!window.webpackJsonp || window.webpackJsonp.flat().flat().length <= 6000) await new Promise(r => setTimeout(r, 100));
    if (config.local && config.localPath && fs.existsSync(config.localPath)) {
        const localRemote = path.resolve(config.localPath, "remote.js");
        Logger.log(`Loading Local Remote (${localRemote})`);
        return require(localRemote);
    }


    const hash = await getCommitHash();
    Object.assign(config, {hash});
    fs.writeFileSync(__dirname + "/config.json", JSON.stringify(config, null, 4));
    const baseUrl = `//voark.github.io/BD/dist/remote.js`;
	//const baseUrl = "http://127.0.0.1:5500/BD/dist/remote.js";
    const backupUrl = "https://rauenzi.github.io/BetterDiscordApp/dist/index.min.js";

    await loadResource(baseUrl, backupUrl, injectScript);
});

// Load Discord's original preload
if (currentWindow.__originalPreload) require(currentWindow.__originalPreload);
