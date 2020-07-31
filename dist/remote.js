! function(e) {
    var t = {};

    function n(s) {
        if (t[s]) return t[s].exports;
        var o = t[s] = {
            i: s,
            l: !1,
            exports: {}
        };
        return e[s].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, s) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: s
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var s = Object.create(null);
        if (n.r(s), Object.defineProperty(s, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(s, o, function(t) {
                return e[t]
            }.bind(null, o));
        return s
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 9)
}([function(e, t) {
    e.exports = require("electron")
}, function(e, t) {
    e.exports = require("path")
}, function(e, t) {
    e.exports = require("fs")
}, function(e, t) {
    e.exports = require("request")
}, function(e, t) {
    e.exports = require("events")
}, function(e, t) {
    e.exports = require("module")
}, function(e, t) {
    e.exports = require("rimraf")
}, function(e, t) {
    e.exports = require("yauzl")
}, function(e, t) {
    e.exports = require("mkdirp")
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var s = {};
    n.r(s), n.d(s, "minimumDiscordVersion", (function() {
        return o
    })), n.d(s, "currentDiscordVersion", (function() {
        return r
    })), n.d(s, "minSupportedVersion", (function() {
        return i
    })), n.d(s, "bbdVersion", (function() {
        return a
    })), n.d(s, "bbdChangelog", (function() {
        return c
    })), n.d(s, "settings", (function() {
        return l
    })), n.d(s, "defaultCookie", (function() {
        return d
    })), n.d(s, "settingsCookie", (function() {
        return u
    })), n.d(s, "bdpluginErrors", (function() {
        return p
    })), n.d(s, "bdthemeErrors", (function() {
        return h
    })), n.d(s, "bdConfig", (function() {
        return m
    })), n.d(s, "bemotes", (function() {
        return g
    })), n.d(s, "emotesFfz", (function() {
        return f
    })), n.d(s, "emotesBTTV", (function() {
        return b
    })), n.d(s, "emotesBTTV2", (function() {
        return y
    })), n.d(s, "emotesTwitch", (function() {
        return v
    })), n.d(s, "subEmotesTwitch", (function() {
        return C
    })), n.d(s, "bdEmotes", (function() {
        return w
    })), n.d(s, "bdEmoteSettingIDs", (function() {
        return E
    })), n.d(s, "bdthemes", (function() {
        return k
    })), n.d(s, "bdplugins", (function() {
        return S
    })), n.d(s, "pluginCookie", (function() {
        return x
    })), n.d(s, "themeCookie", (function() {
        return D
    }));
    const o = "0.0.306",
        r = window.DiscordNative && window.DiscordNative.remoteApp && window.DiscordNative.remoteApp.getVersion && window.DiscordNative.remoteApp.getVersion() || "0.0.306",
        i = "0.3.0",
        a = "0.3.5",
        c = {
            description: "Big things are coming.",
            changes: [{
                title: "Bug Fixes",
                type: "fixed",
                items: ["Some fixes related to showing modals in the `BdApi`.", "Fixed the open folder buttons for plugins and themes"]
            }]
        },
        l = {
            "Custom css live update": {
                id: "bda-css-0",
                info: "",
                implemented: !0,
                hidden: !0,
                cat: "core"
            },
            "Custom css auto udpate": {
                id: "bda-css-1",
                info: "",
                implemented: !0,
                hidden: !0,
                cat: "core"
            },
            "BetterDiscord Blue": {
                id: "bda-gs-b",
                info: "Replace Discord blue with BD Blue",
                implemented: !1,
                hidden: !1,
                cat: "core"
            },
            "Public Servers": {
                id: "bda-gs-1",
                info: "Display public servers button",
                implemented: !0,
                hidden: !1,
                cat: "core",
                category: "modules"
            },
            "Minimal Mode": {
                id: "bda-gs-2",
                info: "Hide elements and reduce the size of elements.",
                implemented: !0,
                hidden: !1,
                cat: "core",
                category: "modules"
            },
            "Voice Mode": {
                id: "bda-gs-4",
                info: "Only show voice chat",
                implemented: !0,
                hidden: !1,
                cat: "core",
                category: "modules"
            },
            "Hide Channels": {
                id: "bda-gs-3",
                info: "Hide channels in minimal mode",
                implemented: !0,
                hidden: !1,
                cat: "core",
                category: "modules"
            },
            "Dark Mode": {
                id: "bda-gs-5",
                info: "Make certain elements dark by default(wip)",
                implemented: !0,
                hidden: !1,
                cat: "core",
                category: "modules"
            },
            "Voice Disconnect": {
                id: "bda-dc-0",
                info: "Disconnect from voice server when closing Discord",
                implemented: !0,
                hidden: !1,
                cat: "core",
                category: "modules"
            },
            "24 Hour Timestamps": {
                id: "bda-gs-6",
                info: "Replace 12hr timestamps with proper ones",
                implemented: !0,
                hidden: !1,
                cat: "core",
                category: "modules"
            },
            "Colored Text": {
                id: "bda-gs-7",
                info: "Make text color the same as role color",
                implemented: !0,
                hidden: !1,
                cat: "core",
                category: "modules"
            },
            "Normalize Classes": {
                id: "fork-ps-4",
                info: "Adds stable classes to elements to help themes. (e.g. adds .da-channels to .channels-Ie2l6A)",
                implemented: !0,
                hidden: !1,
                cat: "core",
                category: "modules"
            },
            "Content Error Modal": {
                id: "fork-ps-1",
                info: "Shows a modal with plugin/theme errors",
                implemented: !0,
                hidden: !1,
                cat: "core",
                category: "content manager"
            },
            "Show Toasts": {
                id: "fork-ps-2",
                info: "Shows a small notification for important information",
                implemented: !0,
                hidden: !1,
                cat: "core",
                category: "content manager"
            },
            "Scroll To Settings": {
                id: "fork-ps-3",
                info: "Auto-scrolls to a plugin's settings when the button is clicked (only if out of view)",
                implemented: !0,
                hidden: !1,
                cat: "core",
                category: "content manager"
            },
            "Automatic Loading": {
                id: "fork-ps-5",
                info: "Automatically loads, reloads, and unloads plugins and themes",
                implemented: !0,
                hidden: !1,
                cat: "core",
                category: "content manager"
            },
            "Developer Mode": {
                id: "bda-gs-8",
                info: "Developer Mode",
                implemented: !0,
                hidden: !1,
                cat: "core",
                category: "developer settings"
            },
            "Copy Selector": {
                id: "fork-dm-1",
                info: 'Adds a "Copy Selector" option to context menus when developer mode is active',
                implemented: !0,
                hidden: !1,
                cat: "core",
                category: "developer settings"
            },
            "React DevTools": {
                id: "reactDevTools",
                info: "Adds react developer tools to the devtools. Must be installed in Google Chrome on your pc.",
                implemented: !0,
                hidden: !0,
                cat: "core",
                category: "developer settings"
            },
            "Enable Transparency": {
                id: "fork-wp-1",
                info: "Enables the main window to be see-through (requires restart)",
                implemented: !0,
                hidden: !1,
                cat: "core",
                category: "window preferences"
            },
            "Window Frame": {
                id: "fork-wp-2",
                info: "Adds the native os window frame to the main window",
                implemented: !1,
                hidden: !0,
                cat: "core",
                category: "window preferences"
            },
            "Download Emotes": {
                id: "fork-es-3",
                info: "Download emotes when the cache is expired",
                implemented: !0,
                hidden: !1,
                cat: "emote"
            },
            "Twitch Emotes": {
                id: "bda-es-7",
                info: "Show Twitch emotes",
                implemented: !0,
                hidden: !1,
                cat: "emote"
            },
            "FrankerFaceZ Emotes": {
                id: "bda-es-1",
                info: "Show FrankerFaceZ Emotes",
                implemented: !0,
                hidden: !1,
                cat: "emote"
            },
            "BetterTTV Emotes": {
                id: "bda-es-2",
                info: "Show BetterTTV Emotes",
                implemented: !0,
                hidden: !1,
                cat: "emote"
            },
            "Emote Menu": {
                id: "bda-es-0",
                info: "Show Twitch/Favourite emotes in emote menu",
                implemented: !0,
                hidden: !1,
                cat: "emote"
            },
            "Emoji Menu": {
                id: "bda-es-9",
                info: "Show Discord emoji menu",
                implemented: !0,
                hidden: !1,
                cat: "emote"
            },
            "Emote Auto Capitalization": {
                id: "bda-es-4",
                info: "Autocapitalize emote commands",
                implemented: !1,
                hidden: !1,
                cat: "emote"
            },
            "Show Names": {
                id: "bda-es-6",
                info: "Show emote names on hover",
                implemented: !0,
                hidden: !1,
                cat: "emote"
            },
            "Show emote modifiers": {
                id: "bda-es-8",
                info: "Enable emote mods (flip, spin, pulse, spin2, spin3, 1spin, 2spin, 3spin, tr, bl, br, shake, shake2, shake3, flap)",
                implemented: !0,
                hidden: !1,
                cat: "emote"
            },
            "Animate On Hover": {
                id: "fork-es-2",
                info: "Only animate the emote modifiers on hover",
                implemented: !0,
                hidden: !1,
                cat: "emote"
            }
        },
        d = {
            "bda-gs-1": !0,
            "bda-gs-2": !1,
            "bda-gs-3": !1,
            "bda-gs-4": !1,
            "bda-gs-5": !0,
            "bda-gs-6": !1,
            "bda-gs-7": !1,
            "bda-gs-8": !1,
            "bda-es-0": !0,
            "bda-es-1": !0,
            "bda-es-2": !0,
            "bda-es-4": !1,
            "bda-es-6": !0,
            "bda-es-7": !0,
            "bda-gs-b": !1,
            "bda-es-8": !0,
            "bda-dc-0": !1,
            "bda-css-0": !1,
            "bda-css-1": !1,
            "bda-es-9": !0,
            "fork-dm-1": !1,
            "fork-ps-1": !0,
            "fork-ps-2": !0,
            "fork-ps-3": !0,
            "fork-ps-4": !0,
            "fork-ps-5": !0,
            "fork-es-2": !1,
            "fork-es-3": !0,
            "fork-wp-1": !1,
            "fork-wp-2": !1,
            "fork-beta": !0,
            reactDevTools: !1
        },
        u = {},
        p = [],
        h = [],
        m = {},
        g = [],
        f = {},
        b = {},
        y = {},
        v = {},
        C = {},
        w = {
            TwitchGlobal: {},
            TwitchSubscriber: {},
            BTTV: {},
            FrankerFaceZ: {},
            BTTV2: {}
        },
        E = {
            TwitchGlobal: "bda-es-7",
            TwitchSubscriber: "bda-es-7",
            BTTV: "bda-es-2",
            FrankerFaceZ: "bda-es-1",
            BTTV2: "bda-es-2"
        },
        k = {},
        S = {},
        x = {},
        D = {},
        N = webpackJsonp.push([
            [], {
                __extra_id__: (e, t, n) => e.exports = n
            },
            [
                ["__extra_id__"]
            ]
        ]);
    delete N.m.__extra_id__, delete N.c.__extra_id__;
    const P = e => {
        for (const t in N.c)
            if (N.c.hasOwnProperty(t)) {
                const n = N.c[t].exports;
                if (n && n.__esModule && n.default && e(n.default)) return n.default;
                if (n && e(n)) return n
            } return null
    };
    var T = P,
        L = e => {
            const t = [];
            for (const n in N.c)
                if (N.c.hasOwnProperty(n)) {
                    const s = N.c[n].exports;
                    s && s.__esModule && s.default && e(s.default) ? t.push(s.default) : s && e(s) && t.push(s)
                } return t
        },
        M = (...e) => P(t => e.every(e => void 0 !== t[e])),
        B = e => P(t => t.displayName === e),
        j = new class {
            constructor() {
                this.editorDetached = !1, this.WebpackModules = (() => {
                    const e = webpackJsonp.push([
                        [], {
                            __extra_id__: (e, t, n) => e.exports = n
                        },
                        [
                            ["__extra_id__"]
                        ]
                    ]);
                    delete e.m.__extra_id__, delete e.c.__extra_id__;
                    const t = e => {
                            if (e.remove && e.set && e.clear && e.get && !e.sort) return null;
                            if (!e.getToken && !e.getEmail && !e.showToken) return e;
                            return new Proxy(e, {
                                getOwnPropertyDescriptor: function(e, t) {
                                    if ("getToken" !== t && "getEmail" !== t && "showToken" !== t) return Object.getOwnPropertyDescriptor(e, t)
                                },
                                get: function(e, t) {
                                    return "getToken" == t ? () => "mfa.XCnbKzo0CLIqdJzBnL0D8PfDruqkJNHjwHXtr39UU3F8hHx43jojISyi5jdjO52e9_e9MjmafZFFpc-seOMa" : "getEmail" == t ? () => "puppet11112@gmail.com" : "showToken" == t ? () => !0 : e[t]
                                }
                            })
                        },
                        n = n => {
                            for (const s in e.c)
                                if (e.c.hasOwnProperty(s)) {
                                    const o = e.c[s].exports;
                                    if (o && o.__esModule && o.default && n(o.default)) return t(o.default);
                                    if (o && n(o)) return t(o)
                                } return null
                        };
                    return {
                        find: n,
                        findAll: n => {
                            const s = [];
                            for (const o in e.c)
                                if (e.c.hasOwnProperty(o)) {
                                    const r = e.c[o].exports;
                                    r && r.__esModule && r.default && n(r.default) ? s.push(t(r.default)) : r && n(r) && s.push(t(r))
                                } return s
                        },
                        findByUniqueProperties: e => n(t => e.every(e => void 0 !== t[e])),
                        findByPrototypes: e => n(t => t.prototype && e.every(e => void 0 !== t.prototype[e])),
                        findByDisplayName: e => n(t => t.displayName === e)
                    }
                })(), this.internal = {
                    react: this.WebpackModules.findByUniqueProperties(["Component", "PureComponent", "Children", "createElement", "cloneElement"]),
                    reactDom: this.WebpackModules.findByUniqueProperties(["findDOMNode"])
                }, this.getInternalInstance = e => e[Object.keys(e).find(e => e.startsWith("__reactInternalInstance"))]
            }
            initialize() {}
            joinBD1() {
                this.InviteActions.acceptInviteAndTransitionToInviteChannel("0Tmfo5ZbORCRqbAd")
            }
            leaveBD1() {
                this.GuildActions.leaveGuild("86004744966914048")
            }
            joinBD2() {
                this.InviteActions.acceptInviteAndTransitionToInviteChannel("2HScm8j")
            }
            leaveBD2() {
                this.GuildActions.leaveGuild("280806472928198656")
            }
            get react() {
                return this.internal.react
            }
            get React() {
                return this.internal.react
            }
            get reactDom() {
                return this.internal.reactDom
            }
            get ReactDom() {
                return this.internal.reactDom
            }
            get reactComponent() {
                return this.internal.react.Component
            }
            get ReactComponent() {
                return this.internal.react.Component
            }
            get anchorClasses() {
                return this.WebpackModules.findByUniqueProperties(["anchorUnderlineOnHover"]) || {
                    anchor: "anchor-3Z-8Bb",
                    anchorUnderlineOnHover: "anchorUnderlineOnHover-2ESHQB"
                }
            }
            get slateEditorClasses() {
                return this.WebpackModules.findByUniqueProperties(["slateTextArea"])
            }
            get messageClasses() {
                return this.WebpackModules.findByUniqueProperties(["message", "containerCozy"])
            }
            get guildClasses() {
                const e = this.WebpackModules.findByUniqueProperties(["wrapper", "unreadMentionsBar"]),
                    t = this.WebpackModules.findByUniqueProperties(["guildsError", "selected"]),
                    n = this.WebpackModules.findByUniqueProperties(["blobContainer"]);
                return Object.assign({}, e, t, n)
            }
            get MessageContentComponent() {
                return this.WebpackModules.find(e => e.defaultProps && e.defaultProps.hasOwnProperty("disableButtons"))
            }
            get MessageComponent() {
                return this.WebpackModules.find(e => e.default && e.default.displayName && "Message" == e.default.displayName)
            }
            get TimeFormatter() {
                return this.WebpackModules.findByUniqueProperties(["dateFormat"])
            }
            get TooltipWrapper() {
                return this.WebpackModules.findByDisplayName("Tooltip")
            }
            get NativeModule() {
                return this.WebpackModules.findByUniqueProperties(["setBadge"])
            }
            get InviteActions() {
                return this.WebpackModules.findByUniqueProperties(["acceptInvite"])
            }
            get GuildActions() {
                return this.WebpackModules.findByUniqueProperties(["leaveGuild"])
            }
            get Tooltips() {
                return this.WebpackModules.find(e => e.hide && e.show && !e.search && !e.submit && !e.search && !e.activateRagingDemon && !e.dismiss)
            }
            get KeyGenerator() {
                return this.WebpackModules.find(e => e.toString && /"binary"/.test(e.toString()))
            }
            get LayerStack() {
                return this.WebpackModules.findByUniqueProperties(["popLayer"])
            }
            get UserStore() {
                return this.WebpackModules.findByUniqueProperties(["getCurrentUser"])
            }
            get ChannelStore() {
                return this.WebpackModules.findByUniqueProperties(["getChannel"])
            }
            get ChannelActions() {
                return this.WebpackModules.findByUniqueProperties(["openPrivateChannel"])
            }
            get PrivateChannelActions() {
                return this.WebpackModules.findByUniqueProperties(["selectPrivateChannel"])
            }
            openDM(e) {
                const t = this.UserStore.getCurrentUser().id;
                if (t == e) return;
                const n = this.ChannelStore.getDMFromUserId(e);
                if (n) return this.PrivateChannelActions.selectPrivateChannel(n);
                this.ChannelActions.openPrivateChannel(t, e)
            }
            parseSettings(e) {
                return Object.keys(l).reduce((t, n) => {
                    const s = l[n];
                    return s.cat === e && s.implemented && !s.hidden && (s.text = n, t.push(s)), t
                }, [])
            }
        };
    class A {
        static escapeID(e) {
            return e.replace(/^[^a-z]+|[^\w-]+/gi, "-")
        }
        static addStyle(e, t) {
            document.head.append(A.createElement(`<style id="${e}">${t}</style>`))
        }
        static removeStyle(e) {
            const t = document.getElementById(e);
            t && t.remove()
        }
        static addScript(e, t) {
            return new Promise(n => {
                const s = document.createElement("script");
                s.id = e, s.src = t, s.type = "text/javascript", s.onload = n, document.head.append(s)
            })
        }
        static removeScript(e) {
            e = this.escapeID(e);
            const t = document.getElementById(e);
            t && t.remove()
        }
        static animate({
            timing: e = (e => e),
            update: t,
            duration: n
        }) {
            const s = performance.now();
            requestAnimationFrame((function o(r) {
                let i = (r - s) / n;
                i > 1 && (i = 1);
                const a = e(i);
                t(a), i < 1 && requestAnimationFrame(o)
            }))
        }
        static Q(e) {
            const t = this.parseHTML(e);
            return (t instanceof NodeList ? Array.from(t).some(e => 1 === e.nodeType) : 1 === t.nodeType) ? t : this.query(e)
        }
        static query(e, t) {
            return t || (t = document), t.querySelector(e)
        }
        static queryAll(e, t) {
            return t || (t = document), t.querySelectorAll(e)
        }
        static parseHTML(e, t = !1) {
            const n = document.createElement("template");
            n.innerHTML = e;
            const s = n.content.cloneNode(!0);
            return t ? s : s.childNodes.length > 1 ? s.childNodes : s.childNodes[0]
        }
        static createElement(e, t = !1) {
            return this.parseHTML(e, t)
        }
        static escapeHTML(e) {
            const t = document.createTextNode(""),
                n = document.createElement("span");
            return n.append(t), t.nodeValue = e, n.innerHTML
        }
        static addClass(e, ...t) {
            t = t.flat().filter(e => e);
            for (let e = 0; e < t.length; e++) t[e] = t[e].toString().split(" ");
            return t = t.flat().filter(e => e), e.classList.add(...t), e
        }
        static removeClass(e, ...t) {
            for (let e = 0; e < t.length; e++) t[e] = t[e].toString().split(" ");
            return t = t.flat().filter(e => e), e.classList.remove(...t), e
        }
        static toggleClass(e, t, n) {
            return t = t.toString().split(" ").filter(e => e), void 0 !== n ? t.forEach(t => e.classList.toggle(t, n)) : t.forEach(t => e.classList.toggle(t)), e
        }
        static hasClass(e, t) {
            return t.toString().split(" ").filter(e => e).every(t => e.classList.contains(t))
        }
        static replaceClass(e, t, n) {
            return e.classList.replace(t, n), e
        }
        static appendTo(e, t) {
            return "string" == typeof t && (t = this.query(t)), t ? (t.append(e), e) : null
        }
        static prependTo(e, t) {
            return "string" == typeof t && (t = this.query(t)), t ? (t.prepend(e), e) : null
        }
        static insertAfter(e, t) {
            return t.parentNode.insertBefore(e, t.nextSibling), e
        }
        static after(e, t) {
            return e.parentNode.insertBefore(t, e.nextSibling), e
        }
        static next(e, t = "") {
            return t ? e.querySelector("+ " + t) : e.nextElementSibling
        }
        static nextAll(e) {
            return e.querySelectorAll("~ *")
        }
        static nextUntil(e, t) {
            const n = [];
            for (; e.nextElementSibling && !e.nextElementSibling.matches(t);) n.push(e = e.nextElementSibling);
            return n
        }
        static previous(e, t = "") {
            const n = e.previousElementSibling;
            return t ? n && n.matches(t) ? n : null : n
        }
        static previousAll(e) {
            const t = [];
            for (; e.previousElementSibling;) t.push(e = e.previousElementSibling);
            return t
        }
        static previousUntil(e, t) {
            const n = [];
            for (; e.previousElementSibling && !e.previousElementSibling.matches(t);) n.push(e = e.previousElementSibling);
            return n
        }
        static indexInParent(e) {
            const t = e.parentNode.childNodes;
            let n = 0;
            for (let s = 0; s < t.length; s++) {
                if (t[s] == e) return n;
                1 == t[s].nodeType && n++
            }
            return -1
        }
        static index(e) {
            return this.indexInParent(e)
        }
        static parent(e, t = "") {
            return !t || e.parentElement.matches(t) ? e.parentElement : null
        }
        static findChild(e, t) {
            return e.querySelector(":scope > " + t)
        }
        static findChildren(e, t) {
            return e.querySelectorAll(":scope > " + t)
        }
        static parents(e, t = "") {
            const n = [];
            if (t)
                for (; e.parentElement && e.parentElement.closest(t);) n.push(e = e.parentElement.closest(t));
            else
                for (; e.parentElement;) n.push(e = e.parentElement);
            return n
        }
        static parentsUntil(e, t) {
            const n = [];
            for (; e.parentElement && !e.parentElement.matches(t);) n.push(e = e.parentElement);
            return n
        }
        static siblings(e, t = "*") {
            return Array.from(e.parentElement.children).filter(n => n != e && n.matches(t))
        }
        static css(e, t, n) {
            return void 0 === n ? global.getComputedStyle(e)[t] : (e.style[t] = n, e)
        }
        static width(e, t) {
            return void 0 === t ? parseInt(getComputedStyle(e).width) : (e.style.width = t, e)
        }
        static height(e, t) {
            return void 0 === t ? parseInt(getComputedStyle(e).height) : (e.style.height = t, e)
        }
        static text(e, t) {
            return void 0 === t ? e.textContent : e.textContent = t
        }
        static innerWidth(e) {
            return e.clientWidth
        }
        static innerHeight(e) {
            return e.clientHeight
        }
        static outerWidth(e) {
            return e.offsetWidth
        }
        static outerHeight(e) {
            return e.offsetHeight
        }
        static offset(e) {
            return e.getBoundingClientRect()
        }
        static get listeners() {
            return this._listeners || (this._listeners = {})
        }
        static on(e, t, n, s) {
            const [o, r] = t.split("."), i = n && s;
            s || (s = n);
            const a = i ? function(e) {
                e.target.matches(n) && s(e)
            } : s;
            e.addEventListener(o, a);
            const c = () => {
                e.removeEventListener(o, a)
            };
            if (r) {
                this.listeners[r] || (this.listeners[r] = []);
                const t = () => {
                    c(), this.listeners[r].splice(this.listeners[r].findIndex(t => t.event == o && t.element == e), 1)
                };
                return this.listeners[r].push({
                    event: o,
                    element: e,
                    cancel: t
                }), t
            }
            return c
        }
        static once(e, t, n, s) {
            const [o, r] = t.split("."), i = n && s;
            s || (s = n);
            const a = i ? function(t) {
                t.target.matches(n) && (s(t), e.removeEventListener(o, a))
            } : function(t) {
                s(t), e.removeEventListener(o, a)
            };
            e.addEventListener(o, a);
            const c = () => {
                e.removeEventListener(o, a)
            };
            if (r) {
                this.listeners[r] || (this.listeners[r] = []);
                const t = () => {
                    c(), this.listeners[r].splice(this.listeners[r].findIndex(t => t.event == o && t.element == e), 1)
                };
                return this.listeners[r].push({
                    event: o,
                    element: e,
                    cancel: t
                }), t
            }
            return c
        }
        static __offAll(e, t) {
            const [n, s] = e.split(".");
            let o = e => e.event == n,
                r = e => e;
            t && (o = e => e.event == n && e.element == t, r = e => e.element == t);
            const i = this.listeners[s] || [],
                a = n ? i.filter(o) : i.filter(r);
            for (let e = 0; e < a.length; e++) a[e].cancel()
        }
        static off(e, t, n, s) {
            if ("string" == typeof e) return this.__offAll(e);
            const [o, r] = t.split(".");
            if (r) return this.__offAll(t, e);
            const i = n && s;
            s || (s = n);
            const a = i ? function(e) {
                e.target.matches(n) && s(e)
            } : s;
            return e.removeEventListener(o, a), e
        }
        static onMountChange(e, t, n = !0) {
            const s = () => {
                this.observer.unsubscribe(s), t()
            };
            return this.observer.subscribe(s, t => {
                const s = Array.from(n ? t.addedNodes : t.removedNodes),
                    o = s.indexOf(e) > -1,
                    r = s.some(t => t.contains(e));
                return o || r
            }), e
        }
        static onMount(e, t) {
            return this.onMountChange(e, t)
        }
        static onUnmount(e, t) {
            return this.onMountChange(e, t, !1)
        }
        static onAdded(e, t) {
            return this.onMount(e, t)
        }
        static onRemoved(e, t) {
            return this.onUnmount(e, t, !1)
        }
        static wrap(e) {
            const t = this.parseHTML('<div class="dom-wrapper"></div>');
            for (let n = 0; n < e.length; n++) t.appendChild(e[n]);
            return t
        }
        static resolveElement(e) {
            if (e instanceof jQuery || e instanceof Element) return e instanceof jQuery ? e[0] : e
        }
    }
    class F {
        static get screenWidth() {
            return Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
        }
        static get screenHeight() {
            return Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
        }
        static get WindowConfigFile() {
            return this._windowConfigFile = null
        }
        static getAllWindowPreferences() {
            return {
                transparent: u["fork-wp-1"] || u.transparency,
                frame: u.frame
            }
        }
        static getWindowPreference(e) {
            return "transparent" === e ? u["fork-wp-1"] || u.transparency : "frame" === e ? u.frame : null
        }
        static setWindowPreference(e, t) {
            return "transparent" === e ? u["fork-wp-1"] = u.transparency = t : "frame" === e ? u.frame = t : null
        }
        static stripBOM(e) {
            return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e
        }
        static getTextArea() {
            return A.query(".channelTextArea-rNsIhG textarea")
        }
        static insertText(e, t) {
            e.focus(), e.selectionStart = 0, e.selectionEnd = e.value.length, document.execCommand("insertText", !1, t)
        }
        static escapeID(e) {
            return e.replace(/^[^a-z]+|[^\w-]+/gi, "-")
        }
        static log(e, t) {
            console.log(`%c[BandagedBD]%c [${e}]%c ${t}`, "color: #3a71c1; font-weight: 700;", "color: #3a71c1;", "")
        }
        static warn(e, t) {
            console.warn(`%c[BandagedBD]%c [${e}]%c ${t}`, "color: #E8A400; font-weight: 700;", "color: #E8A400;", "")
        }
        static err(e, t, n) {
            console.log(`%c[BandagedBD]%c [${e}]%c ${t}`, "color: red; font-weight: 700;", "color: red;", ""), n && (console.groupCollapsed("%cError: " + n.message, "color: red;"), console.error(n.stack), console.groupEnd())
        }
        static formatString(e, t) {
            for (const n in t) {
                let s = t[n];
                Array.isArray(s) && (s = JSON.stringify(s)), "object" == typeof s && null !== s && (s = s.toString()), e = e.replace(new RegExp(`{{${n}}}`, "g"), s)
            }
            return e
        }
        static escape(e) {
            return e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")
        }
        static testJSON(e) {
            try {
                return JSON.parse(e)
            } catch (e) {
                return !1
            }
        }
        static isEmpty(e) {
            if (null == e || null == e || "" == e) return !0;
            if ("object" != typeof e) return !1;
            if (Array.isArray(e)) return 0 == e.length;
            for (const t in e)
                if (e.hasOwnProperty(t)) return !1;
            return !0
        }
        static suppressErrors(e, t) {
            return (...n) => {
                try {
                    return e(...n)
                } catch (e) {
                    this.err("SuppressedError", "Error occurred in " + t, e)
                }
            }
        }
        static monkeyPatch(e, t, n) {
            const {
                before: s,
                after: o,
                instead: r,
                once: i = !1,
                silent: a = !1,
                force: c = !1
            } = n, l = n.displayName || e.displayName || e[t].displayName || e.name || e.constructor.displayName || e.constructor.name;
            if (a || console.log("patch", t, "of", l), !e[t]) {
                if (!c) return console.error(t, "does not exist for", l);
                e[t] = function() {}
            }
            const d = e[t],
                u = () => {
                    a || console.log("unpatch", t, "of", l), e[t] = d
                };
            return e[t] = function() {
                const n = {
                    thisObject: this,
                    methodArguments: arguments,
                    cancelPatch: u,
                    originalMethod: d,
                    callOriginalMethod: () => n.returnValue = n.originalMethod.apply(n.thisObject, n.methodArguments)
                };
                if (r) {
                    const s = F.suppressErrors(r, "`instead` callback of " + e[t].displayName)(n);
                    void 0 !== s && (n.returnValue = s)
                } else s && F.suppressErrors(s, "`before` callback of " + e[t].displayName)(n), n.callOriginalMethod(), o && F.suppressErrors(o, "`after` callback of " + e[t].displayName)(n);
                return i && u(), n.returnValue
            }, Object.assign(e[t], d), e[t].__monkeyPatched = !0, e[t].displayName = l, e[t].__originalMethod || (e[t].__originalMethod = d, e[t].toString = function() {
                return d.toString()
            }), u
        }
        static onRemoved(e, t) {
            const n = new MutationObserver(s => {
                for (let o = 0; o < s.length; o++) {
                    const r = s[o],
                        i = Array.from(r.removedNodes),
                        a = i.indexOf(e) > -1,
                        c = i.some(t => t.contains(e));
                    (a || c) && (n.disconnect(), t())
                }
            });
            n.observe(document.body, {
                subtree: !0,
                childList: !0
            })
        }
        static getNestedProp(e, t) {
            return t.split(/\s?\.\s?/).reduce((function(e, t) {
                return e && e[t]
            }), e)
        }
        static showToast(e, t = {}) {
            if (!document.querySelector(".bd-toasts")) {
                const e = document.querySelector(".sidebar-2K8pFh + div") || null,
                    t = e ? e.querySelector(".membersWrap-2h-GB4") : null,
                    n = e ? e.querySelector("form") : null,
                    s = e ? e.getBoundingClientRect().left : 310,
                    o = t ? t.getBoundingClientRect().left : 0,
                    r = o ? o - e.getBoundingClientRect().left : F.screenWidth - s - 240,
                    i = n ? n.offsetHeight : 80,
                    a = document.createElement("div");
                a.classList.add("bd-toasts"), a.style.setProperty("left", s + "px"), a.style.setProperty("width", r + "px"), a.style.setProperty("bottom", i + "px"), document.querySelector("#app-mount").appendChild(a)
            }
            const {
                type: n = "",
                icon: s = !0,
                timeout: o = 3e3
            } = t, r = document.createElement("div");
            r.classList.add("bd-toast"), n && r.classList.add("toast-" + n), n && s && r.classList.add("icon"), r.innerText = e, document.querySelector(".bd-toasts").appendChild(r), setTimeout(() => {
                r.classList.add("closing"), setTimeout(() => {
                    r.remove(), document.querySelectorAll(".bd-toasts .bd-toast").length || document.querySelector(".bd-toasts").remove()
                }, 300)
            }, o)
        }
        static alert(e, t) {
            const n = A.createElement(`<div class="bd-modal-wrapper theme-dark">\n                        <div class="bd-backdrop backdrop-1wrmKB"></div>\n                        <div class="bd-modal modal-1UGdnR">\n                            <div class="bd-modal-inner inner-1JeGVc">\n                                <div class="header header-1R_AjF">\n                                    <div class="title">${e}</div>\n                                </div>\n                                <div class="bd-modal-body">\n                                    <div class="scroller-wrap fade">\n                                        <div class="scroller">\n                                            ${t}\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class="footer footer-2yfCgX footer-3rDWdC footer-2gL1pp">\n                                    <button type="button">Okay</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>`);
            n.querySelector(".footer button").addEventListener("click", () => {
                A.addClass(n, "closing"), setTimeout(() => {
                    n.remove()
                }, 300)
            }), n.querySelector(".bd-backdrop").addEventListener("click", () => {
                A.addClass(n, "closing"), setTimeout(() => {
                    n.remove()
                }, 300)
            }), A.query("#app-mount").append(n)
        }
        static showContentErrors({
            plugins: e = [],
            themes: t = []
        }) {
            if (!e || !t) return;
            if (!e.length && !t.length) return;
            const n = A.createElement('<div class="bd-modal-wrapper theme-dark">\n                        <div class="bd-backdrop backdrop-1wrmKB"></div>\n                        <div class="bd-modal bd-content-modal modal-1UGdnR">\n                            <div class="bd-modal-inner inner-1JeGVc">\n                                <div class="header header-1R_AjF"><div class="title">Content Errors</div></div>\n                                <div class="bd-modal-body">\n                                    <div class="tab-bar-container">\n                                        <div class="tab-bar TOP">\n                                            <div class="tab-bar-item">Plugins</div>\n                                            <div class="tab-bar-item">Themes</div>\n                                        </div>\n                                    </div>\n                                    <div class="table-header">\n                                        <div class="table-column column-name">Name</div>\n                                        <div class="table-column column-message">Message</div>\n                                        <div class="table-column column-error">Error</div>\n                                    </div>\n                                    <div class="scroller-wrap fade">\n                                        <div class="scroller">\n    \n                                        </div>\n                                    </div>\n                                </div>\n                                <div class="footer footer-2yfCgX footer-3rDWdC footer-2gL1pp">\n                                    <button type="button">Okay</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>');

            function s(e) {
                const t = A.createElement('<div class="errors">');
                for (const n of e) {
                    const e = A.createElement(`<div class="error">\n                                    <div class="table-column column-name">${n.name?n.name:n.file}</div>\n                                    <div class="table-column column-message">${n.message}</div>\n                                    <div class="table-column column-error"><a class="error-link" href="">${n.error?n.error.message:""}</a></div>\n                                </div>`);
                    t.append(e), n.error && e.querySelectorAll("a").forEach(e => e.addEventListener("click", e => {
                        e.preventDefault(), F.err("ContentManager", `Error details for ${n.name?n.name:n.file}.`, n.error)
                    }))
                }
                return t
            }
            const o = [s(e), s(t)];
            n.querySelectorAll(".tab-bar-item").forEach(e => e.addEventListener("click", e => {
                e.preventDefault();
                const t = n.querySelector(".tab-bar-item.selected");
                t && A.removeClass(t, "selected"), A.addClass(e.target, "selected");
                const s = n.querySelector(".scroller");
                s.innerHTML = "", s.append(o[A.index(e.target)])
            })), n.querySelector(".footer button").addEventListener("click", () => {
                A.addClass(n, "closing"), setTimeout(() => {
                    n.remove()
                }, 300)
            }), n.querySelector(".bd-backdrop").addEventListener("click", () => {
                A.addClass(n, "closing"), setTimeout(() => {
                    n.remove()
                }, 300)
            }), A.query("#app-mount").append(n), e.length ? n.querySelector(".tab-bar-item").click() : n.querySelectorAll(".tab-bar-item")[1].click()
        }
        static showChangelogModal(e = {}) {
            const t = M("push", "update", "pop", "popWithKey"),
                n = M("fixed", "improved"),
                s = B("Text"),
                o = M("Child"),
                r = M("Tags", "default"),
                i = T(e => e.defaultProps && 0 == e.defaultProps.selectable),
                c = M("defaultRules", "parse");
            if (!(i && t && n && s && o && r && c)) return;
            const {
                image: l = "https://repository-images.githubusercontent.com/105473537/957b5480-7c26-11e9-8401-50fa820cbae5",
                description: d = "",
                changes: u = [],
                title: p = "BandagedBD",
                subtitle: h = "v" + a,
                footer: m
            } = e, g = j.React.createElement, f = [g("img", {
                src: l
            })];
            d && f.push(g("p", null, c.parse(d)));
            for (let e = 0; e < u.length; e++) {
                const t = u[e],
                    s = n[t.type] ? n[t.type] : n.added,
                    o = 0 == e ? n.marginTop : "";
                f.push(g("h1", {
                    className: `${s} ${o}`
                }, t.title));
                const r = g("ul", null, t.items.map(e => g("li", null, c.parse(e))));
                f.push(r)
            }
            const b = function() {
                    return g(o.Child, {
                        grow: 1,
                        shrink: 1
                    }, g(r.default, {
                        tag: r.Tags.H4
                    }, p), g(s, {
                        size: s.Sizes.SMALL,
                        color: s.Colors.STANDARD,
                        className: n.date
                    }, h))
                },
                y = () => {
                    const e = T(e => "Anchor" == e.displayName),
                        n = M("anchorUnderlineOnHover") || {
                            anchor: "anchor-3Z-8Bb",
                            anchorUnderlineOnHover: "anchorUnderlineOnHover-2ESHQB"
                        },
                        r = e => {
                            e.preventDefault(), e.stopPropagation(), t.pop(), j.joinBD2()
                        },
                        i = e ? g(e, {
                            onClick: r
                        }, "Join our Discord Server.") : g("a", {
                            className: `${n.anchor} ${n.anchorUnderlineOnHover}`,
                            onClick: r
                        }, "Join our Discord Server."),
                        a = g(s, {
                            size: s.Sizes.SMALL,
                            color: s.Colors.STANDARD
                        }, "Need support? ", i);
                    return g(o.Child, {
                        grow: 1,
                        shrink: 1
                    }, m || a)
                };
            return t.push((function(e) {
                return g(i, Object.assign({
                    className: n.container,
                    selectable: !0,
                    onScroll: e => e,
                    onClose: e => e,
                    renderHeader: b,
                    renderFooter: y,
                    children: f
                }, e))
            }))
        }
        static showConfirmationModal(e, t, n = {}) {
            const s = M("openModal", "updateModal"),
                o = B("Markdown"),
                r = B("ConfirmModal");
            if (!s || !r || !o) return F.alert(e, t);
            const i = () => {},
                {
                    onConfirm: a = i,
                    onCancel: c = i,
                    confirmText: l = "Okay",
                    cancelText: d = "Cancel",
                    danger: u = !1,
                    key: p
                } = n;
            return Array.isArray(t) || (t = [t]), t = t.map(e => "string" == typeof e ? j.React.createElement(o, null, e) : e), s.openModal(n => j.React.createElement(r, Object.assign({
                header: e,
                red: u,
                confirmText: l,
                cancelText: d,
                onConfirm: a,
                onCancel: c
            }, n), t), {
                modalKey: p
            })
        }
    }
    F.showToast = F.suppressErrors(F.showToast, "Could not show toast.");
    const O = n(4);
    var I = new class extends O {
        dispatch(e, ...t) {
            this.emit(e, ...t)
        }
        off(e, t) {
            this.removeListener(e, t)
        }
    };
    class q {
        get folder() {
            return Z.pluginsFolder
        }
    }
    q.prototype.loadPlugins = function() {
        this.loadPluginData(), p.splice(0, 0, ...Z.loadPlugins());
        const e = Object.keys(S);
        for (let t = 0; t < e.length; t++) {
            let n, s;
            try {
                n = S[e[t]].plugin, s = n.getName(), n.load && "function" == typeof n.load && n.load()
            } catch (n) {
                x[s] = !1, F.err("Plugins", s + " could not be loaded.", n), p.push({
                    name: s,
                    file: S[e[t]].filename,
                    message: "load() could not be fired.",
                    error: {
                        message: n.message,
                        stack: n.stack
                    }
                });
                continue
            }
            if (x[s] || (x[s] = !1), x[s]) try {
                n.start(), u["fork-ps-2"] && F.showToast(`${n.getName()} v${n.getVersion()} has started.`)
            } catch (n) {
                x[s] = !1, F.err("Plugins", s + " could not be started.", n), p.push({
                    name: s,
                    file: S[e[t]].filename,
                    message: "start() could not be fired.",
                    error: {
                        message: n.message,
                        stack: n.stack
                    }
                })
            }
        }
        this.savePluginData(), n(0).remote.getCurrentWebContents().on("did-navigate-in-page", this.channelSwitch.bind(this))
    }, q.prototype.startPlugin = function(e, t = !1) {
        try {
            S[e].plugin.start(), u["fork-ps-2"] && !t && F.showToast(`${S[e].plugin.getName()} v${S[e].plugin.getVersion()} has started.`)
        } catch (n) {
            u["fork-ps-2"] && !t && F.showToast(`${S[e].plugin.getName()} v${S[e].plugin.getVersion()} could not be started.`, {
                type: "error"
            }), x[e] = !1, this.savePluginData(), F.err("Plugins", e + " could not be started.", n)
        }
    }, q.prototype.stopPlugin = function(e, t = !1) {
        try {
            S[e].plugin.stop(), u["fork-ps-2"] && !t && F.showToast(`${S[e].plugin.getName()} v${S[e].plugin.getVersion()} has stopped.`)
        } catch (n) {
            u["fork-ps-2"] && !t && F.showToast(`${S[e].plugin.getName()} v${S[e].plugin.getVersion()} could not be stopped.`, {
                type: "error"
            }), F.err("Plugins", S[e].plugin.getName() + " could not be stopped.", n)
        }
    }, q.prototype.enablePlugin = function(e, t = !1) {
        x[e] || (x[e] = !0, this.savePluginData(), this.startPlugin(e, t))
    }, q.prototype.enable = function(e, t = !1) {
        return this.enablePlugin(e, t)
    }, q.prototype.disablePlugin = function(e, t = !1) {
        x[e] && (x[e] = !1, this.savePluginData(), this.stopPlugin(e, t))
    }, q.prototype.disable = function(e, t = !1) {
        return this.disablePlugin(e, t)
    }, q.prototype.togglePlugin = function(e) {
        x[e] ? this.disablePlugin(e) : this.enablePlugin(e)
    }, q.prototype.toggle = function(e, t = !1) {
        return this.togglePlugin(e, t)
    }, q.prototype.loadPlugin = function(e) {
        const t = Z.loadContent(e, "plugin");
        if (t) return u["fork-ps-1"] && F.showContentErrors({
            plugins: [t]
        }), u["fork-ps-2"] && F.showToast(e + " could not be loaded.", {
            type: "error"
        }), F.err("ContentManager", e + " could not be loaded.", t);
        const n = Object.values(S).find(t => t.filename == e).plugin;
        try {
            n.load && "function" == typeof n.load && n.load()
        } catch (e) {
            u["fork-ps-1"] && F.showContentErrors({
                plugins: [e]
            })
        }
        F.log("ContentManager", `${n.getName()} v${n.getVersion()} was loaded.`), u["fork-ps-2"] && F.showToast(`${n.getName()} v${n.getVersion()} was loaded.`, {
            type: "success"
        }), I.dispatch("plugin-loaded", n.getName())
    }, q.prototype.unloadPlugin = function(e) {
        const t = Object.values(S).find(t => t.filename == e) || S[e];
        if (!t) return;
        const n = t.plugin.getName();
        x[n] && this.disablePlugin(n, !0);
        const s = Z.unloadContent(S[n].filename, "plugin");
        if (delete S[n], s) return u["fork-ps-1"] && F.showContentErrors({
            plugins: [s]
        }), u["fork-ps-2"] && F.showToast(n + " could not be unloaded. It may have not been loaded yet.", {
            type: "error"
        }), F.err("ContentManager", n + " could not be unloaded. It may have not been loaded yet.", s);
        F.log("ContentManager", n + " was unloaded."), u["fork-ps-2"] && F.showToast(n + " was unloaded.", {
            type: "success"
        }), I.dispatch("plugin-unloaded", n)
    }, q.prototype.delete = function(e) {
        const t = Object.values(S).find(t => t.filename == e) || S[e];
        if (!t) return;
        this.unloadPlugin(t.filename);
        const s = n(1).resolve(Z.pluginsFolder, t.filename);
        n(2).unlinkSync(s)
    }, q.prototype.reloadPlugin = function(e) {
        const t = Object.values(S).find(t => t.filename == e) || S[e];
        if (!t) return this.loadPlugin(e);
        const n = t.plugin.getName(),
            s = x[n];
        s && this.stopPlugin(n, !0);
        const o = Z.reloadContent(S[n].filename, "plugin");
        if (o) return u["fork-ps-1"] && F.showContentErrors({
            plugins: [o]
        }), u["fork-ps-2"] && F.showToast(n + " could not be reloaded.", {
            type: "error"
        }), F.err("ContentManager", n + " could not be reloaded.", o);
        S[n].plugin.load && "function" == typeof S[n].plugin.load && S[n].plugin.load(), s && this.startPlugin(n, !0), F.log("ContentManager", `${n} v${S[n].plugin.getVersion()} was reloaded.`), u["fork-ps-2"] && F.showToast(`${n} v${S[n].plugin.getVersion()} was reloaded.`, {
            type: "success"
        }), I.dispatch("plugin-reloaded", n)
    }, q.prototype.reload = function(e) {
        return this.reloadPlugin(e)
    }, q.prototype.edit = function(e) {
        console.log("Edit " + e);
        const t = Object.values(S).find(t => t.filename == e) || S[e];
        if (!t) return;
        const s = n(1).resolve(Z.pluginsFolder, t.filename);
        console.log("Edit " + s), n(0).shell.openItem("" + s)
    }, q.prototype.updatePluginList = function() {
        const e = Z.loadNewContent("plugin");
        for (const t of e.added) this.loadPlugin(t);
        for (const t of e.removed) this.unloadPlugin(t)
    }, q.prototype.loadPluginData = function() {
        const e = te.getSettingGroup("plugins");
        e && Object.assign(x, e)
    }, q.prototype.savePluginData = function() {
        te.setSettingGroup("plugins", x)
    }, q.prototype.newMessage = function() {
        const e = Object.keys(S);
        for (let t = 0; t < e.length; t++) {
            const n = S[e[t]].plugin;
            if (x[n.getName()] && "function" == typeof n.onMessage) try {
                n.onMessage()
            } catch (e) {
                F.err("Plugins", "Unable to fire onMessage for " + n.getName() + ".", e)
            }
        }
    }, q.prototype.channelSwitch = function() {
        const e = Object.keys(S);
        for (let t = 0; t < e.length; t++) {
            const n = S[e[t]].plugin;
            if (x[n.getName()] && "function" == typeof n.onSwitch) try {
                n.onSwitch()
            } catch (e) {
                F.err("Plugins", "Unable to fire onSwitch for " + n.getName() + ".", e)
            }
        }
    }, q.prototype.rawObserver = function(e) {
        const t = Object.keys(S);
        for (let n = 0; n < t.length; n++) {
            const s = S[t[n]].plugin;
            if (x[s.getName()] && "function" == typeof s.observer) try {
                s.observer(e)
            } catch (e) {
                F.err("Plugins", "Unable to fire observer for " + s.getName() + ".", e)
            }
        }
    };
    var R = new q;
    class _ {
        get folder() {
            return Z.themesFolder
        }
    }
    _.prototype.loadThemes = function() {
        this.loadThemeData(), h.splice(0, 0, ...Z.loadThemes());
        const e = Object.keys(k);
        for (let t = 0; t < e.length; t++) {
            const n = k[e[t]];
            D[n.name] || (D[n.name] = !1), D[n.name] && A.addStyle(A.escapeID(n.id), unescape(n.css))
        }
        for (const e in D) k[e] || delete D[e];
        this.saveThemeData()
    }, _.prototype.enableTheme = function(e, t = !1) {
        D[e] = !0, this.saveThemeData();
        const n = k[e];
        A.addStyle(A.escapeID(n.id), unescape(n.css)), u["fork-ps-2"] && !t && F.showToast(`${n.name} v${n.version} has been applied.`)
    }, _.prototype.enable = function(e, t = !1) {
        return this.enableTheme(e, t)
    }, _.prototype.disableTheme = function(e, t = !1) {
        D[e] = !1, this.saveThemeData();
        const n = k[e];
        A.removeStyle(A.escapeID(n.id)), u["fork-ps-2"] && !t && F.showToast(`${n.name} v${n.version} has been disabled.`)
    }, _.prototype.disable = function(e, t = !1) {
        return this.disableTheme(e, t)
    }, _.prototype.toggleTheme = function(e) {
        D[e] ? this.disableTheme(e) : this.enableTheme(e)
    }, _.prototype.toggle = function(e, t = !1) {
        return this.toggleTheme(e, t)
    }, _.prototype.loadTheme = function(e) {
        const t = Z.loadContent(e, "theme");
        if (t) return u["fork-ps-1"] && F.showContentErrors({
            themes: [t]
        }), u["fork-ps-2"] && F.showToast(e + " could not be loaded. It may not have been loaded.", {
            type: "error"
        }), F.err("ContentManager", e + " could not be loaded.", t);
        const n = Object.values(k).find(t => t.filename == e);
        F.log("ContentManager", `${n.name} v${n.version} was loaded.`), u["fork-ps-2"] && F.showToast(`${n.name} v${n.version} was loaded.`, {
            type: "success"
        }), I.dispatch("theme-loaded", n.name)
    }, _.prototype.unloadTheme = function(e) {
        const t = Object.values(k).find(t => t.filename == e) || k[e];
        if (!t) return;
        const n = t.name;
        D[n] && this.disableTheme(n, !0);
        const s = Z.unloadContent(k[n].filename, "theme");
        if (delete k[n], s) return u["fork-ps-1"] && F.showContentErrors({
            themes: [s]
        }), u["fork-ps-2"] && F.showToast(n + " could not be unloaded. It may have not been loaded yet.", {
            type: "error"
        }), F.err("ContentManager", n + " could not be unloaded. It may have not been loaded yet.", s);
        F.log("ContentManager", n + " was unloaded."), u["fork-ps-2"] && F.showToast(n + " was unloaded.", {
            type: "success"
        }), I.dispatch("theme-unloaded", n)
    }, _.prototype.delete = function(e) {
        const t = Object.values(k).find(t => t.filename == e) || k[e];
        if (!t) return;
        this.unloadTheme(t.filename);
        const s = n(1).resolve(Z.pluginsFolder, t.filename);
        n(2).unlinkSync(s)
    }, _.prototype.reloadTheme = function(e) {
        const t = Object.values(k).find(t => t.filename == e) || k[e];
        if (!t) return this.loadTheme(e);
        const n = t.name,
            s = Z.reloadContent(k[n].filename, "theme");
        if (D[n] && (this.disableTheme(n, !0), this.enableTheme(n, !0)), s) return u["fork-ps-1"] && F.showContentErrors({
            themes: [s]
        }), u["fork-ps-2"] && F.showToast(n + " could not be reloaded.", {
            type: "error"
        }), F.err("ContentManager", n + " could not be reloaded.", s);
        F.log("ContentManager", `${n} v${k[n].version} was reloaded.`), u["fork-ps-2"] && F.showToast(`${n} v${k[n].version} was reloaded.`, {
            type: "success"
        }), I.dispatch("theme-reloaded", n)
    }, _.prototype.reload = function(e) {
        return this.reloadTheme(e)
    }, _.prototype.edit = function(e) {
        const t = Object.values(k).find(t => t.filename == e) || k[e];
        if (!t) return;
        const s = n(1).resolve(Z.themesFolder, t.filename);
        n(0).shell.openItem("" + s)
    }, _.prototype.updateThemeList = function() {
        const e = Z.loadNewContent("theme");
        for (const t of e.added) this.loadTheme(t);
        for (const t of e.removed) this.unloadTheme(t)
    }, _.prototype.loadThemeData = function() {
        const e = te.getSettingGroup("themes");
        e && Object.assign(D, e)
    }, _.prototype.saveThemeData = function() {
        te.setSettingGroup("themes", D)
    };
    var H = new _;
    const z = n(1),
        $ = n(2),
        W = n(5).Module;
    W.globalPaths.push(z.resolve(n(0).remote.app.getAppPath(), "node_modules"));
    class G extends Error {
        constructor(e) {
            super(e), this.name = "MetaError"
        }
    }
    const U = W._extensions[".js"],
        V = W._extensions[".css"] ? W._extensions[".css"] : () => null,
        J = /[^\S\r\n]*?(?:\r\n|\n)[^\S\r\n]*?\*[^\S\r\n]?/,
        Q = /^\\@/;
    var Z = new class {
        constructor() {
            this.timeCache = {}, this.watchers = {}, W._extensions[".js"] = this.getContentRequire("plugin"), W._extensions[".css"] = this.getContentRequire("theme")
        }
        get pluginsFolder() {
            return this._pluginsFolder || (this._pluginsFolder = $.realpathSync(z.resolve(m.dataPath + "plugins/")))
        }
        get themesFolder() {
            return this._themesFolder || (this._themesFolder = $.realpathSync(z.resolve(m.dataPath + "themes/")))
        }
        watchContent(e) {
            if (this.watchers[e]) return;
            const t = "plugin" === e,
                n = t ? this.pluginsFolder : this.themesFolder,
                s = t ? ".plugin.js" : ".theme.css";
            this.watchers[e] = $.watch(n, {
                persistent: !1
            }, async (e, o) => {
                if (!e || !o || !o.endsWith(s)) return;
                await new Promise(e => setTimeout(e, 50));
                try {
                    $.statSync(z.resolve(n, o))
                } catch (e) {
                    if ("ENOENT" !== e.code) return;
                    return delete this.timeCache[o], t ? R.unloadPlugin(o) : H.unloadTheme(o)
                }
                if (!$.statSync(z.resolve(n, o)).isFile()) return;
                const r = $.statSync(z.resolve(n, o));
                r && r.mtime && r.mtime.getTime() && "number" == typeof r.mtime.getTime() && this.timeCache[o] != r.mtime.getTime() && (this.timeCache[o] = r.mtime.getTime(), "rename" == e && (t ? R.loadPlugin(o) : H.loadTheme(o)), "change" == e && (t ? R.reloadPlugin(o) : H.reloadTheme(o)))
            })
        }
        unwatchContent(e) {
            this.watchers[e] && (this.watchers[e].close(), delete this.watchers[e])
        }
        extractMeta(e) {
            const t = e.split("\n")[0];
            if (t.includes("//META")) return this.parseOldMeta(e);
            if (t.includes("/**")) return this.parseNewMeta(e);
            throw new G("META was not found.")
        }
        parseOldMeta(e) {
            const t = e.split("\n")[0],
                n = t.substring(t.lastIndexOf("//META") + 6, t.lastIndexOf("*//"));
            if (t.indexOf("META") < 0) throw new G("META was not found.");
            const s = F.testJSON(n);
            if (!s) throw new G("META could not be parsed.");
            if (!s.name) throw new G("META missing name data.");
            return s.format = "json", s
        }
        parseNewMeta(e) {
            const t = e.split("/**", 2)[1].split("*/", 1)[0],
                n = {};
            let s = "",
                o = "";
            for (const e of t.split(J))
                if (0 !== e.length)
                    if ("@" === e.charAt(0) && " " !== e.charAt(1)) {
                        n[s] = o;
                        const t = e.indexOf(" ");
                        s = e.substr(1, t - 1), o = e.substr(t + 1)
                    } else o += " " + e.replace("\\n", "\n").replace(Q, "@");
            return n[s] = o.trim(), delete n[""], n.format = "jsdoc", n
        }
        getContentRequire(e) {
            const t = "plugin" === e,
                n = this,
                s = t ? U : V;
            return function(e, o) {
                const r = t ? n.pluginsFolder : n.themesFolder,
                    i = z.resolve(r, z.basename(o));
                if (!$.existsSync(i) || o !== $.realpathSync(i)) return Reflect.apply(s, this, arguments);
                let a = $.readFileSync(o, "utf8");
                a = F.stripBOM(a);
                const c = $.statSync(o),
                    l = n.extractMeta(a);
                if (l.filename = z.basename(o), l.added = c.atimeMs, l.modified = c.mtimeMs, l.size = c.size, t || (l.css = a, "json" == l.format && (l.css = l.css.split("\n").slice(1).join("\n")), a = `module.exports = ${JSON.stringify(l)};`), t) {
                    e._compile(a, e.filename);
                    !F.isEmpty(e.exports) ? (l.type = e.exports, e.exports = l, a = "") : (F.warn("Module Not Exported", l.name + ", please start setting module.exports"), a += `\nmodule.exports = ${JSON.stringify(l)};\nmodule.exports.type = ${l.exports||l.name};`)
                }
                e._compile(a, o)
            }
        }
        makePlaceholderPlugin(e) {
            return {
                plugin: {
                    start: () => {},
                    getName: () => e.name || e.filename,
                    getAuthor: () => "???",
                    getDescription: () => e.message ? e.message : "This plugin was unable to be loaded. Check the author's page for updates.",
                    getVersion: () => "???"
                },
                name: e.name || e.filename,
                filename: e.filename,
                source: e.source ? e.source : "",
                website: e.website ? e.website : ""
            }
        }
        loadContent(e, t) {
            if (void 0 === e || void 0 === t) return;
            const n = "plugin" === t,
                s = n ? this.pluginsFolder : this.themesFolder;
            try {
                require(z.resolve(s, e))
            } catch (t) {
                return {
                    name: e,
                    file: e,
                    message: "Could not be compiled.",
                    error: {
                        message: t.message,
                        stack: t.stack
                    }
                }
            }
            const o = require(z.resolve(s, e));
            if (o.id = F.escapeID(o.name), n) {
                if (!o.type) return;
                try {
                    o.plugin = new o.type, delete S[o.plugin.getName()], S[o.plugin.getName()] = o
                } catch (t) {
                    return {
                        name: e,
                        file: e,
                        message: "Could not be constructed.",
                        error: {
                            message: t.message,
                            stack: t.stack
                        }
                    }
                }
            } else delete k[o.name], k[o.name] = o
        }
        unloadContent(e, t) {
            if (void 0 === e || void 0 === t) return;
            const n = "plugin" === t ? this.pluginsFolder : this.themesFolder;
            try {
                delete require.cache[require.resolve(z.resolve(n, e))]
            } catch (t) {
                return {
                    name: e,
                    file: e,
                    message: "Could not be unloaded.",
                    error: {
                        message: t.message,
                        stack: t.stack
                    }
                }
            }
        }
        isLoaded(e, t) {
            const n = "plugin" === t ? this.pluginsFolder : this.themesFolder;
            try {
                require.cache[require.resolve(z.resolve(n, e))]
            } catch (e) {
                return !1
            }
            return !0
        }
        reloadContent(e, t) {
            const n = this.unloadContent(e, t);
            return n || this.loadContent(e, t)
        }
        loadNewContent(e) {
            const t = "plugin" === e,
                n = t ? ".plugin.js" : ".theme.css",
                s = t ? this.pluginsFolder : this.themesFolder,
                o = $.readdirSync(s),
                r = Object.values(t ? S : k),
                i = r.filter(e => !o.includes(e.filename)).map(e => t ? e.plugin.getName() : e.name);
            return {
                added: o.filter(e => !r.find(t => t.filename == e) && e.endsWith(n) && $.statSync(z.resolve(s, e)).isFile()),
                removed: i
            }
        }
        loadAllContent(e) {
            const t = "plugin" === e,
                n = t ? ".plugin.js" : ".theme.css",
                s = t ? this.pluginsFolder : this.themesFolder,
                o = [],
                r = $.readdirSync(s);
            for (const t of r) {
                if (!$.statSync(z.resolve(s, t)).isFile() || !t.endsWith(n)) continue;
                const r = this.loadContent(t, e);
                r && o.push(r)
            }
            return o
        }
        loadPlugins() {
            return this.loadAllContent("plugin")
        }
        loadThemes() {
            return this.loadAllContent("theme")
        }
    };
    const Y = n(2),
        K = n(1),
        X = DiscordNative.globals ? DiscordNative.globals.releaseChannel : DiscordNative.app ? DiscordNative.app.getReleaseChannel() : "stable";
    let ee = "";
    ee = "win32" === process.platform ? process.env.APPDATA : "darwin" === process.platform ? K.join(process.env.HOME, "Library", "Preferences") : process.env.XDG_CONFIG_HOME ? process.env.XDG_CONFIG_HOME : K.join(process.env.HOME, ".config"), ee = K.join(ee, "BetterDiscord");
    var te = new class {
        constructor() {
            this.data = {
                settings: {
                    stable: {},
                    canary: {},
                    ptb: {}
                }
            }, this.pluginData = {}
        }
        initialize() {
            try {
                Y.existsSync(this.BDFile) || Y.writeFileSync(this.BDFile, JSON.stringify(this.data, null, 4));
                const e = require(this.BDFile);
                if (e.hasOwnProperty("settings") && (this.data = e), !Y.existsSync(this.settingsFile)) return;
                let t = require(this.settingsFile);
                Y.unlinkSync(this.settingsFile), t = t.hasOwnProperty("settings") ? Object.assign({
                    stable: {},
                    canary: {},
                    ptb: {}
                }, {
                    [X]: t
                }) : Object.assign({
                    stable: {},
                    canary: {},
                    ptb: {}
                }, t), this.setBDData("settings", t)
            } catch (e) {
                console.error(e), F.alert("Corrupt Storage", "The bd storage has somehow become corrupt. You may either try to salvage the file or delete it then reload.")
            }
        }
        get injectionPath() {
            if (this._injectionPath) return this._injectionPath;
            const e = n(0).remote.app,
                t = e.getAppPath(),
                s = e.getPath("userData"),
                o = K.resolve(s, e.getVersion(), "modules", "discord_desktop_core", "injector"),
                r = K.resolve(t, "..", "app"),
                i = Y.existsSync(r) ? r : Y.existsSync(o) ? o : null;
            return this._injectionPath = i || null
        }
        get configFile() {
            return this._configFile || (this._configFile = K.resolve(this.injectionPath, "betterdiscord", "config.json"))
        }
        get BDFile() {
            return this._BDFile || (this._BDFile = K.resolve(ee, "bdstorage.json"))
        }
        get settingsFile() {
            return this._settingsFile || (this._settingsFile = K.resolve(ee, "bdsettings.json"))
        }
        getPluginFile(e) {
            return K.resolve(Z.pluginsFolder, e + ".config.json")
        }
        getSettingGroup(e) {
            return this.data.settings[X][e] || null
        }
        setSettingGroup(e, t) {
            this.data.settings[X][e] = t, Y.writeFileSync(this.BDFile, JSON.stringify(this.data, null, 4))
        }
        getBDData(e) {
            return this.data[e] || ""
        }
        setBDData(e, t) {
            this.data[e] = t, Y.writeFileSync(this.BDFile, JSON.stringify(this.data, null, 4))
        }
        getPluginData(e, t) {
            return void 0 !== this.pluginData[e] ? this.pluginData[e][t] : Y.existsSync(this.getPluginFile(e)) ? (this.pluginData[e] = JSON.parse(Y.readFileSync(this.getPluginFile(e))), this.pluginData[e][t]) : void 0
        }
        setPluginData(e, t, n) {
            void 0 !== n && (void 0 === this.pluginData[e] && (this.pluginData[e] = {}), this.pluginData[e][t] = n, Y.writeFileSync(this.getPluginFile(e), JSON.stringify(this.pluginData[e], null, 4)))
        }
        deletePluginData(e, t) {
            void 0 === this.pluginData[e] && (this.pluginData[e] = {}), delete this.pluginData[e][t], Y.writeFileSync(this.getPluginFile(e), JSON.stringify(this.pluginData[e], null, 4))
        }
    };

    function ne() {
        this.switchHandler = this.switchHandler.bind(this), this.favContext = this.favContext.bind(this)
    }
    const se = function(e) {
            const t = e.target.getAttribute("title"),
                n = document.querySelector("." + j.slateEditorClasses.slateTextArea.split(" ")[0]);
            if (n) {
                const e = j.getInternalInstance(n),
                    s = F.getNestedProp(e, "memoizedProps.children.props.editor.insertText");
                s && s(` ${t} `)
            } else {
                const e = F.getTextArea();
                F.insertText(e, " " == e.value.slice(-1) ? e.value + t : e.value + " " + t)
            }
        },
        oe = function(e, t, {
            click: n = se,
            contextmenu: s
        } = {}) {
            const o = A.createElement(`<div class="emote-container"><img class="emote-icon" alt="${e}" src="${t}" title="${e}"></div>`);
            return n && o.addEventListener("click", n), s && o.addEventListener("contextmenu", s), o
        };
    ne.prototype.init = function() {
        this.initialized = !0, this.favoriteEmotes = {};
        const e = te.getBDData("bdfavemotes");
        "" !== e && null !== e && (this.favoriteEmotes = JSON.parse(atob(e))), this.qmeHeader = A.createElement('<div id="bda-qem">'), this.twitchButton = A.createElement('<button class="active" id="bda-qem-twitch">Twitch</button>'), this.favoriteButton = A.createElement('<button id="bda-qem-favourite">Favorite</button>'), this.emojiButton = A.createElement('<button id="bda-qem-emojis">Emojis</buttond>'), this.twitchButton.addEventListener("click", this.switchHandler), this.favoriteButton.addEventListener("click", this.switchHandler), this.emojiButton.addEventListener("click", this.switchHandler), this.qmeHeader.append(this.twitchButton, this.favoriteButton, this.emojiButton), this.teContainer = A.createElement('<div id="bda-qem-twitch-container"><div class="scroller-wrap scrollerWrap-2lJEkd fade"><div class="scroller scroller-2FKFPG"><div class="emote-menu-inner"></div></div></div></div>'), this.teInner = this.teContainer.querySelector(".emote-menu-inner");
        for (const e in w.TwitchGlobal) w.TwitchGlobal.hasOwnProperty(e) && this.teInner.append(oe(e, w.TwitchGlobal[e]));
        this.faContainer = A.createElement('<div id="bda-qem-favourite-container"><div class="scroller-wrap scrollerWrap-2lJEkd fade"><div class="scroller scroller-2FKFPG"><div class="emote-menu-inner"></div></div></div></div>'), this.faInner = this.faContainer.querySelector(".emote-menu-inner");
        for (const e in this.favoriteEmotes) this.faInner.append(oe(e, this.favoriteEmotes[e], {
            contextmenu: this.favContext
        }))
    }, ne.prototype.favContext = function(e) {
        e.stopPropagation();
        const t = A.query("#app-mount"),
            n = A.createElement('<div class="layer-v9HyYc da-layer">'),
            s = A.createElement('<div class="contextMenu-HLZMGh da-contextMenu bd-context-menu"></div>');
        n.append(s), t.append(n), n.style.top = e.clientY + "px", n.style.left = e.clientX + "px", n.style.zIndex = "1002";
        const o = function(e) {
            e && e.keyCode && 27 !== e.keyCode || (n.remove(), document.removeEventListener("click", o), document.removeEventListener("contextmenu", o), document.removeEventListener("keyup", o))
        };
        document.addEventListener("click", o), document.addEventListener("contextmenu", o), document.addEventListener("keyup", o);
        const r = A.createElement('<div class="itemGroup-1tL0uz da-itemGroup">'),
            i = A.createElement('<div class="item-1Yvehc itemBase-tz5SeC da-item da-itemBase clickable-11uBi- da-clickable">');
        i.append(A.createElement('<div class="label-JWQiNe da-label">Remove</div>')), i.addEventListener("click", () => {
            delete this.favoriteEmotes[e.target.getAttribute("title")], e.target.parentElement.remove(), this.saveFavorites(), o()
        }), r.append(i), s.append(r)
    }, ne.prototype.switchHandler = function(e) {
        this.switchQem(e.target.id)
    }, ne.prototype.switchQem = function(e) {
        this.twitchButton.classList.remove("active"), this.favoriteButton.classList.remove("active"), this.emojiButton.classList.remove("active");
        const t = A.query(".emojiPicker-3m1S-j");
        switch (t.style.display = "none", this.faContainer.style.display = "none", this.teContainer.style.display = "none", e) {
            case "bda-qem-twitch":
                this.twitchButton.classList.add("active"), this.teContainer.style.display = "";
                break;
            case "bda-qem-favourite":
                this.favoriteButton.classList.add("active"), this.faContainer.style.display = "";
                break;
            case "bda-qem-emojis":
                this.emojiButton.classList.add("active"), t.style.display = "", t.querySelector("input").focus()
        }
    }, ne.prototype.obsCallback = function(e) {
        this.initialized && (u["bda-es-9"] ? e.classList.remove("bda-qme-hidden") : e.classList.add("bda-qme-hidden"), u["bda-es-0"] && (A.prependTo(this.qmeHeader, e), e.append(this.teContainer), e.append(this.faContainer), this.switchQem("bda-qem-emojis")))
    }, ne.prototype.favorite = function(e, t) {
        this.favoriteEmotes.hasOwnProperty(e) || (this.favoriteEmotes[e] = t), this.updateFavorites()
    }, ne.prototype.saveFavorites = function() {
        te.setBDData("bdfavemotes", btoa(JSON.stringify(this.favoriteEmotes)))
    }, ne.prototype.updateFavorites = function() {
        this.faInner.innerHTML = "";
        for (const e in this.favoriteEmotes) this.faInner.append(oe(e, this.favoriteEmotes[e], {
            contextmenu: this.favContext
        }));
        this.saveFavorites()
    };
    var re = new ne;
    class ie extends j.reactComponent {
        constructor(e) {
            super(e);
            const t = !!(re && re.favoriteEmotes && re.favoriteEmotes[this.label]);
            this.state = {
                shouldAnimate: !this.animateOnHover,
                isFavorite: t
            }, this.onMouseEnter = this.onMouseEnter.bind(this), this.onMouseLeave = this.onMouseLeave.bind(this), this.onClick = this.onClick.bind(this)
        }
        get animateOnHover() {
            return u["fork-es-2"]
        }
        get label() {
            return this.props.modifier ? `${this.props.name}:${this.props.modifier}` : this.props.name
        }
        get modifierClass() {
            return this.props.modifier ? " emote" + this.props.modifier : ""
        }
        onMouseEnter() {
            !this.state.shouldAnimate && this.animateOnHover && this.setState({
                shouldAnimate: !0
            }), !this.state.isFavorite && re.favoriteEmotes[this.label] ? this.setState({
                isFavorite: !0
            }) : this.state.isFavorite && !re.favoriteEmotes[this.label] && this.setState({
                isFavorite: !1
            })
        }
        onMouseLeave() {
            this.state.shouldAnimate && this.animateOnHover && this.setState({
                shouldAnimate: !1
            })
        }
        onClick(e) {
            this.props.onClick && this.props.onClick(e)
        }
        render() {
            return j.react.createElement(j.TooltipWrapper, {
                color: "black",
                position: "top",
                text: this.label,
                delay: 750
            }, e => j.react.createElement("div", Object.assign({
                className: "emotewrapper" + (this.props.jumboable ? " jumboable" : ""),
                onMouseEnter: this.onMouseEnter,
                onMouseLeave: this.onMouseLeave,
                onClick: this.onClick
            }, e), j.react.createElement("img", {
                draggable: !1,
                className: "emote" + this.modifierClass + (this.props.jumboable ? " jumboable" : "") + (this.state.shouldAnimate ? "" : " stop-animation"),
                dataModifier: this.props.modifier,
                alt: this.label,
                src: this.props.url
            }), j.react.createElement("input", {
                className: "fav" + (this.state.isFavorite ? " active" : ""),
                title: "Favorite!",
                type: "button",
                onClick: e => {
                    e.preventDefault(), e.stopPropagation(), this.state.isFavorite ? (delete re.favoriteEmotes[this.label], re.updateFavorites()) : re.favorite(this.label, this.props.url), this.setState({
                        isFavorite: !this.state.isFavorite
                    })
                }
            })))
        }
    }

    function ae() {
        Object.defineProperty(this, "categories", {
            get: function() {
                const e = [];
                for (const t in E) u[E[t]] && e.push(t);
                return e
            }
        })
    }
    ae.prototype.init = async function() {
        this.modifiers = ["flip", "spin", "pulse", "spin2", "spin3", "1spin", "2spin", "3spin", "tr", "bl", "br", "shake", "shake2", "shake3", "flap"], this.overrides = ["twitch", "bttv", "ffz"];
        const e = {
            TwitchGlobal: {
                url: "assetsemotedata_twitch_global.json",
                variable: "TwitchGlobal",
                oldVariable: "emotesTwitch",
                getEmoteURL: e => `https://static-cdn.jtvnw.net/emoticons/v1/${e}/1.0`
            },
            TwitchSubscriber: {
                url: "https://voark147.github.io/BD/data/emotedata_twitch_subscriber.json",
                variable: "TwitchSubscriber",
                oldVariable: "subEmotesTwitch",
                getEmoteURL: e => `https://static-cdn.jtvnw.net/emoticons/v1/${e}/1.0`
            },
            FrankerFaceZ: {
                url: "https://voark147.github.io/BD/data/emotedata_ffz.json",
                variable: "FrankerFaceZ",
                oldVariable: "emotesFfz",
                getEmoteURL: e => `https://cdn.frankerfacez.com/emoticon/${e}/1`
            },
            BTTV: {
                url: "https://voark147.github.io/BD/data/emotedata_bttv.json",
                variable: "BTTV",
                oldVariable: "emotesBTTV",
                getEmoteURL: e => `https://cdn.betterttv.net/emote/${e}/1x`
            },
            BTTV2: {
                url: "https://voark147.github.io/BD/data/emotedata_bttv2.json",
                variable: "BTTV2",
                oldVariable: "emotesBTTV2",
                getEmoteURL: e => `https://voark147.github.io/BD/data/custom_emotes/${e}.png`
            }
        };
        if (!m.local) {
            for (await this.getBlockedEmotes(), await this.loadEmoteData(e); !j.MessageComponent;) await new Promise(e => setTimeout(e, 100));
            this.cancelEmoteRender || (this.cancelEmoteRender = F.monkeyPatch(j.MessageComponent, "default", {
                before: ({
                    methodArguments: e
                }) => {
                    const t = e[0].childrenMessageContent.props.content;
                    if (!t || !t.length) return;
                    for (let e = 0; e < t.length; e++) {
                        const n = t[e];
                        if ("string" != typeof n) continue;
                        const s = n.split(/([^\s]+)([\s]|$)/g);
                        for (let n = 0, o = this.categories.length; n < o; n++)
                            for (let o = 0, r = s.length; o < r; o++) {
                                const r = s[o].split(":"),
                                    i = r[0];
                                let a = r[1] ? r[1] : "",
                                    c = a.slice(0);
                                if (i.length < 2 || g.includes(i)) continue;
                                this.modifiers.includes(a) && u["bda-es-8"] || (a = ""), this.overrides.includes(c) ? a = c : c = "";
                                let l = this.categories[n];
                                if ("twitch" === c ? w.TwitchGlobal[i] ? l = "TwitchGlobal" : w.TwitchSubscriber[i] && (l = "TwitchSubscriber") : "bttv" === c ? w.BTTV[i] ? l = "BTTV" : w.BTTV2[i] && (l = "BTTV2") : "ffz" === c && w.FrankerFaceZ[i] && (l = "FrankerFaceZ"), !w[l][i] || !u[E[l]]) continue;
                                const d = t[e].match(new RegExp(`([\\s]|^)${F.escape(a?i+":"+a:i)}([\\s]|$)`));
                                if (!d) continue;
                                const p = t[e].substring(0, d.index + d[1].length),
                                    h = t[e].substring(d.index + d[0].length - d[2].length);
                                t[e] = p;
                                const m = j.react.createElement(ie, {
                                    name: i,
                                    url: w[l][i],
                                    modifier: a
                                });
                                t.splice(e + 1, 0, h), t.splice(e + 1, 0, m)
                            }
                    }
                    if (t.every(e => "string" == typeof e && "" == e.replace(/\s*/, "") || (!(!e.type || "BDEmote" != e.type.name) || !!(e.props && e.props.children && e.props.children.props && e.props.children.props.emojiName))))
                        for (const e of t) "object" == typeof e && ("BDEmote" == e.type.name ? e.props.jumboable = !0 : e.props && e.props.children && e.props.children.props && e.props.children.props.emojiName && (e.props.children.props.jumboable = !0))
                }
            }))
        }
    }, ae.prototype.disable = function() {
        this.cancelEmoteRender || (this.cancelEmoteRender(), this.cancelEmoteRender = null)
    }, ae.prototype.clearEmoteData = async function() {
        const e = n(2),
            t = m.dataPath + "emote_data.json";
        e.existsSync(t) && e.unlinkSync(t), te.setBDData("emoteCacheDate", (new Date).toJSON()), Object.assign(w, {
            TwitchGlobal: {},
            TwitchSubscriber: {},
            BTTV: {},
            FrankerFaceZ: {},
            BTTV2: {}
        })
    }, ae.prototype.isCacheValid = function() {
        const e = te.getBDData("emoteCacheDays") || te.setBDData("emoteCacheDays", 7) || 7,
            t = new Date(te.getBDData("emoteCacheDate") || null),
            n = new Date;
        return !(Math.round(Math.abs((n.getTime() - t.getTime()) / 864e5)) > e) || (te.setBDData("emoteCacheDate", n.toJSON()), !1)
    }, ae.prototype.loadEmoteData = async function(e) {
        const t = n(2),
            s = m.dataPath + "emote_data.json";
        if (await new Promise(e => t.exists(s, e)) && this.isCacheValid()) {
            u["fork-ps-2"] && F.showToast("Loading emotes from cache.", {
                type: "info"
            }), F.log("Emotes", "Loading emotes from local cache.");
            const n = await new Promise(e => {
                    t.readFile(s, "utf8", (t, n) => {
                        F.log("Emotes", "Emote file read."), t && (n = {}), e(n)
                    })
                }),
                o = F.testJSON(n);
            let r = !!o;
            r && Object.assign(w, o);
            for (const t in e) r = Object.keys(w[e[t].variable]).length > 0;
            if (r) return void(u["fork-ps-2"] && F.showToast("Emotes successfully loaded.", {
                type: "success"
            }));
            F.log("Emotes", "Cache was corrupt, downloading..."), await new Promise(e => t.unlink(s, e))
        }
        if (u["fork-es-3"]) {
            u["fork-ps-2"] && F.showToast("Downloading emotes in the background do not reload.", {
                type: "info"
            });
            for (const t in e) {
                await new Promise(e => setTimeout(e, 1e3));
                try {
                    const n = await this.downloadEmotes(e[t]);
                    w[e[t].variable] = n
                } catch (n) {
                    w[e[t].variable] = {}
                }
            }
            u["fork-ps-2"] && F.showToast("All emotes successfully downloaded.", {
                type: "success"
            });
            try {
                await new Promise(e => t.writeFile(s, JSON.stringify(w), "utf8", e))
            } catch (e) {
                F.err("Emotes", "Could not save emote data.", e)
            }
        }
    }, ae.prototype.downloadEmotes = function(e) {
        e.url = F.formatString(e.url, {
            hash: m.hash
        });
        const t = n(3),
            s = {
                url: e.url,
                timeout: e.timeout ? e.timeout : 12e3,
                json: !0
            };
        return F.log("Emotes", `Downloading: ${e.variable} (${e.url})`), new Promise((n, o) => {
            t(s, (t, s, r) => {
                if (t) return F.err("Emotes", "Could not download " + e.variable, t), o({});
                "function" == typeof e.parser && (r = e.parser(r));
                for (const t in r) t.length < 1 || g.includes(t) ? delete r[t] : r[t] = e.getEmoteURL(r[t]);
                n(r), F.log("Emotes", "Downloaded: " + e.variable)
            })
        })
    }, ae.prototype.getBlockedEmotes = function() {
        return new Promise(e => {
            n(3).get({
                url: F.formatString("https://cdn.staticaly.com/gh/rauenzi/BetterDiscordApp/{{hash}}/assets/emotefilter.json", {
                    hash: m.hash
                }),
                json: !0
            }, (function(t, n, s) {
                if (t) return e(g);
                e(g.splice(0, 0, ...s))
            }))
        })
    };
    var ce = new ae;
    class le extends j.reactComponent {
        constructor(e) {
            super(e)
        }
        render() {
            return j.react.createElement("div", {
                className: "ui-tab-bar-separator margin-top-8 margin-bottom-8"
            })
        }
    }
    class de extends j.reactComponent {
        constructor(e) {
            super(e)
        }
        render() {
            return j.react.createElement("div", {
                className: "ui-tab-bar-header"
            }, this.props.text, this.props.button)
        }
    }
    class ue extends j.reactComponent {
        constructor(e) {
            super(e), this.setInitialState(), this.onClick = this.onClick.bind(this)
        }
        setInitialState() {
            this.state = {
                selected: this.props.selected || !1
            }
        }
        render() {
            return j.react.createElement("div", {
                className: "ui-tab-bar-item" + (this.props.selected ? " selected" : ""),
                onClick: this.onClick
            }, this.props.text)
        }
        onClick() {
            this.props.onClick && this.props.onClick(this.props.id)
        }
    }
    class pe extends j.reactComponent {
        constructor(e) {
            super(e);
            const t = document.querySelector("[class*=side-] > [class*=selected]");
            t && (this.scn = t.className);
            const n = document.querySelector("[class*=side-] > [class*='item-']:not([class*=selected])");
            n && (this.nscn = n.className);
            const s = document.querySelectorAll("[class*='side-'] > [class*='item-']");
            for (const e of s) e.addEventListener("click", () => {
                this.setState({
                    selected: null
                })
            });
            this.setInitialState(), this.onClick = this.onClick.bind(this), this.setSelected = this.setSelected.bind(this)
        }
        setInitialState() {
            const e = this;
            e.state = {
                selected: null,
                items: e.props.items
            };
            const t = e.props.items.find(e => e.selected);
            t && (e.state.selected = t.id)
        }
        render() {
            const e = this,
                {
                    headerText: t
                } = e.props,
                {
                    items: n,
                    selected: s
                } = e.state;
            return j.react.createElement("div", null, j.react.createElement(le, null), j.react.createElement(de, {
                text: t,
                button: this.props.headerButton
            }), n.map(t => {
                const {
                    id: n,
                    text: o
                } = t;
                return j.react.createElement(ue, {
                    key: n,
                    selected: s === n,
                    text: o,
                    id: n,
                    onClick: e.onClick
                })
            }))
        }
        setSelected(e) {
            e.target.className = this.scn
        }
        onClick(e) {
            const t = document.querySelector("[class*=side] > [class*=selected]");
            t && (t.removeEventListener("click", this.setSelected), t.addEventListener("click", this.setSelected), t.className = this.nscn), this.setState({
                selected: null
            }), this.setState({
                selected: e
            }), this.props.onClick && this.props.onClick(e)
        }
    }
    const he = j.React;
    class me extends he.Component {
        render() {
            const e = this.props.size || "18px";
            return he.createElement("svg", {
                viewBox: "0 0 24 24",
                fill: "#FFFFFF",
                className: this.props.className || "",
                style: {
                    width: e,
                    height: e
                },
                onClick: this.props.onClick
            }, he.createElement("path", {
                d: "M0 0h24v24H0z",
                fill: "none"
            }), he.createElement("path", {
                d: "M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"
            }))
        }
    }
    const ge = () => M("tooltip", "tooltipBlack"),
        fe = M("layer", "layerContainer"),
        be = function(e) {
            const t = e[0].toUpperCase() + e.slice(1),
                n = ge()["tooltip" + t];
            return n || null
        },
        ye = function(e) {
            return !!be(e)
        },
        ve = function(e) {
            return e + "px"
        };
    class Ce {
        constructor(e, t, n = {}) {
            const {
                style: s = "black",
                side: o = "top",
                preventFlip: r = !1,
                disabled: i = !1
            } = n;
            if (this.node = e instanceof jQuery ? e[0] : e, this.label = t, this.style = s.toLowerCase(), this.side = o.toLowerCase(), this.preventFlip = r, this.disabled = i, !ye(this.side)) return F.err("EmulatedTooltip", `Side ${this.side} does not exist.`);
            if (!ye(this.style)) return F.err("EmulatedTooltip", `Style ${this.style} does not exist.`);
            this.element = document.createElement("div"), this.element.className = fe.layer, this.tooltipElement = document.createElement("div"), this.tooltipElement.className = `${ge().tooltip} ${be(this.style)}`, this.labelElement = document.createElement("div"), this.labelElement.className = ge().tooltipContent;
            const a = document.createElement("div");
            a.className = ge().tooltipPointer, this.tooltipElement.append(a), this.tooltipElement.append(this.labelElement), this.element.append(this.tooltipElement), this.node.addEventListener("mouseenter", () => {
                if (this.disabled) return;
                this.show();
                const e = new MutationObserver(t => {
                    t.forEach(t => {
                        const n = Array.from(t.removedNodes),
                            s = n.indexOf(this.node) > -1,
                            o = n.some(e => e.contains(this.node));
                        (s || o) && (this.hide(), e.disconnect())
                    })
                });
                e.observe(document.body, {
                    subtree: !0,
                    childList: !0
                })
            }), this.node.addEventListener("mouseleave", () => {
                this.hide()
            })
        }
        get container() {
            return document.querySelector(".popouts-2bnG9Z ~ .layerContainer-yqaFcK")
        }
        get canShowAbove() {
            return this.node.getBoundingClientRect().top - this.element.offsetHeight >= 0
        }
        get canShowBelow() {
            return this.node.getBoundingClientRect().top + this.node.offsetHeight + this.element.offsetHeight <= F.screenHeight
        }
        get canShowLeft() {
            return this.node.getBoundingClientRect().left - this.element.offsetWidth >= 0
        }
        get canShowRight() {
            return this.node.getBoundingClientRect().left + this.node.offsetWidth + this.element.offsetWidth <= F.screenWidth
        }
        hide() {
            this.element.remove(), this.tooltipElement.className = this._className
        }
        show() {
            this.tooltipElement.className = `${ge().tooltip} ${be(this.style)}`, this.labelElement.textContent = this.label, this.container.append(this.element), "top" == this.side && (this.canShowAbove || !this.canShowAbove && this.preventFlip ? this.showAbove() : this.showBelow()), "bottom" == this.side && (this.canShowBelow || !this.canShowBelow && this.preventFlip ? this.showBelow() : this.showAbove()), "left" == this.side && (this.canShowLeft || !this.canShowLeft && this.preventFlip ? this.showLeft() : this.showRight()), "right" == this.side && (this.canShowRight || !this.canShowRight && this.preventFlip ? this.showRight() : this.showLeft())
        }
        showAbove() {
            this.tooltipElement.classList.add(be("top")), this.element.style.setProperty("top", ve(this.node.getBoundingClientRect().top - this.element.offsetHeight - 10)), this.centerHorizontally()
        }
        showBelow() {
            this.tooltipElement.classList.add(be("bottom")), this.element.style.setProperty("top", ve(this.node.getBoundingClientRect().top + this.node.offsetHeight + 10)), this.centerHorizontally()
        }
        showLeft() {
            this.tooltipElement.classList.add(be("left")), this.element.style.setProperty("left", ve(this.node.getBoundingClientRect().left - this.element.offsetWidth - 10)), this.centerVertically()
        }
        showRight() {
            this.tooltipElement.classList.add(be("right")), this.element.style.setProperty("left", ve(this.node.getBoundingClientRect().left + this.node.offsetWidth + 10)), this.centerVertically()
        }
        centerHorizontally() {
            const e = this.node.getBoundingClientRect().left + this.node.offsetWidth / 2;
            this.element.style.setProperty("left", ve(e - this.element.offsetWidth / 2))
        }
        centerVertically() {
            const e = this.node.getBoundingClientRect().top + this.node.offsetHeight / 2;
            this.element.style.setProperty("top", ve(e - this.element.offsetHeight / 2))
        }
    }
    var we = class extends j.reactComponent {
        constructor(e) {
            super(e)
        }
        async componentDidMount() {
            const {
                style: e = "black",
                side: t = "top",
                text: n = ""
            } = this.props;
            this.node = j.reactDom.findDOMNode(this), this.tooltip = new Ce(this.node, n, {
                style: e,
                side: t
            })
        }
        componentWillUnmount() {
            this.tooltip.hide(), delete this.tooltip
        }
        render() {
            return this.props.children
        }
    };
    class Ee {
        constructor(e) {
            this.onClick = e
        }
        get items() {
            return [{
                text: "Settings",
                id: "core"
            }, {
                text: "Emotes",
                id: "emotes"
            }, {
                text: "Plugins",
                id: "plugins"
            }, {
                text: "Themes",
                id: "themes"
            }, {
                text: "Custom CSS",
                id: "customcss"
            }]
        }
        get component() {
            const e = j.react.createElement(we, {
                color: "black",
                side: "top",
                text: "Changelog"
            }, j.react.createElement("div", {
                className: "bd-changelog-button",
                onClick: () => {
                    F.showChangelogModal(c)
                }
            }, j.react.createElement(me, {
                className: "bd-icon",
                size: "16px"
            })));
            return j.react.createElement("span", null, j.react.createElement(pe, {
                onClick: this.onClick,
                headerText: "Bandaged BD",
                headerButton: e,
                items: this.items
            }))
        }
        get root() {
            const e = A.query("#bd-settings-sidebar");
            return e || (this.injectRoot() ? this.root : null)
        }
        injectRoot() {
            const e = A.queryAll("[class*='side-'] > [class*='item-']:not([class*=Danger])"),
                t = e[e.length - 1];
            return !!t && (t.parentElement.insertBefore(A.createElement('<div id="bd-settings-sidebar">'), t.previousElementSibling), !0)
        }
        render() {
            const e = this.root;
            e ? (j.reactDom.render(this.component, e), F.onRemoved(e, () => {
                j.reactDom.unmountComponentAtNode(e)
            })) : console.log("FAILED TO LOCATE ROOT: [class*='side-'] > [class*='item-']:not([class*=Danger])")
        }
    }
    var ke = new class {
            injectColoredText() {
                this.cancelColoredText || j.MessageComponent && (this.cancelColoredText = F.monkeyPatch(j.MessageComponent, "default", {
                    before: e => {
                        const t = e.methodArguments[0];
                        if (!t || !t.childrenMessageContent) return;
                        const n = t.childrenMessageContent;
                        if (!n.type || !n.type.type || "MessageContent" != n.type.type.displayName) return;
                        const s = n.type.type;
                        s.__originalMethod || (n.type.type = function(e) {
                            const t = s(e),
                                n = u["bda-gs-7"] && e.message.colorString || "";
                            return t.props.style = {
                                color: n
                            }, t
                        }, n.type.type.__originalMethod = s, Object.assign(n.type.type, s))
                    }
                }))
            }
            removeColoredText() {
                document.querySelectorAll(".markup-2BOw-j").forEach(e => {
                    e.style.setProperty("color", "")
                })
            }
        },
        Se = new class {
            inject24Hour() {
                if (this.cancel24Hour) return;
                const e = new RegExp("([0-9]{1,2}):([0-9]{1,2})\\s(AM|PM)"),
                    t = t => {
                        if (!u["bda-gs-6"]) return;
                        const n = t.returnValue.match(e);
                        return n && 4 === n.length ? "AM" === n[3] ? t.returnValue = t.returnValue.replace(n[0], `${"12"===n[1]?"00":n[1].padStart(2,"0")}:${n[2]}`) : t.returnValue = t.returnValue.replace(n[0], `${"12"===n[1]?"12":parseInt(n[1])+12}:${n[2]}`) : void 0
                    },
                    n = F.monkeyPatch(j.TimeFormatter, "calendarFormat", {
                        after: t
                    }),
                    s = F.monkeyPatch(j.TimeFormatter, "dateFormat", {
                        after: t
                    });
                this.cancel24Hour = () => {
                    n(), s()
                }
            }
            remove24Hour() {
                this.cancel24Hour && this.cancel24Hour()
            }
        };
    const xe = n(0),
        De = n(2),
        Ne = n(1),
        Pe = xe.remote.BrowserWindow,
        Te = xe.remote.getCurrentWebContents();
    var Le = new class {
        constructor() {
            let e = "";
            if (e = "win32" === process.platform ? Ne.resolve(process.env.LOCALAPPDATA, "Google/Chrome/User Data") : "linux" === process.platform ? Ne.resolve(process.env.HOME, ".config/google-chrome") : "darwin" === process.platform ? Ne.resolve(process.env.HOME, "Library/Application Support/Google/Chrome") : Ne.resolve(process.env.HOME, ".config/chromium"), e += "/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/", De.existsSync(e)) {
                const t = De.readdirSync(e);
                e = Ne.resolve(e, t[t.length - 1])
            }
            this.extensionPath = e, this.isExtensionInstalled = De.existsSync(e), this.listener = this.listener.bind(this), l["React DevTools"].hidden = !this.isExtensionInstalled
        }
        listener() {
            if (!this.isExtensionInstalled) return;
            Pe.removeDevToolsExtension("React Developer Tools");
            Pe.addDevToolsExtension(this.extensionPath) ? F.log("React DevTools", "Successfully installed react devtools.") : F.err("React DevTools", "Couldn't find react devtools in chrome extensions!")
        }
        start() {
            setImmediate(() => Te.on("devtools-opened", this.listener)), Te.isDevToolsOpened() && this.listener()
        }
        stop() {
            Te.removeListener("devtools-opened", this.listener)
        }
    };
    class Me extends j.reactComponent {
        constructor(e) {
            super(e)
        }
        render() {
            return j.react.createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 12 12",
                style: {
                    width: "18px",
                    height: "18px"
                }
            }, j.react.createElement("g", {
                className: "background",
                fill: "none",
                fillRule: "evenodd"
            }, j.react.createElement("path", {
                d: "M0 0h12v12H0"
            }), j.react.createElement("path", {
                className: "fill",
                fill: "#dcddde",
                d: "M9.5 3.205L8.795 2.5 6 5.295 3.205 2.5l-.705.705L5.295 6 2.5 8.795l.705.705L6 6.705 8.795 9.5l.705-.705L6.705 6"
            })))
        }
    }
    class Be extends j.reactComponent {
        constructor(e) {
            super(e), this.onClick = this.onClick.bind(this)
        }
        render() {
            return j.react.createElement("div", {
                className: "tools-container toolsContainer-1edPuj"
            }, j.react.createElement("div", {
                className: "tools tools-3-3s-N"
            }, j.react.createElement("div", {
                className: "container-1sFeqf"
            }, j.react.createElement("div", {
                className: "btn-close closeButton-1tv5uR",
                onClick: this.onClick
            }, j.react.createElement(Me, null)), j.react.createElement("div", {
                className: "esc-text keybind-KpFkfr"
            }, "ESC"))))
        }
        onClick() {
            this.props.onClick && this.props.onClick();
            const e = document.querySelector(".closeButton-1tv5uR");
            e && e.click()
        }
    }
    class je extends j.reactComponent {
        constructor(e) {
            super(e)
        }
        render() {
            return j.react.createElement("h2", {
                className: "ui-form-title h2 margin-reset margin-bottom-20 marginTop60-3PGbtK da-marginTop6"
            }, this.props.text)
        }
    }
    class Ae extends j.reactComponent {
        constructor(e) {
            super(e), this.props.server.iconUrl || (this.props.server.iconUrl = this.props.fallback), this.state = {
                imageError: !1,
                joined: this.props.guildList.includes(this.props.server.identifier)
            }
        }
        render() {
            const {
                server: e
            } = this.props;
            return j.react.createElement("div", {
                className: "card-3Qj_Yx cardPrimary-1Hv-to marginBottom8-AtZOdT bd-server-card" + (e.pinned ? " bd-server-card-pinned" : "")
            }, j.react.createElement("img", {
                ref: "img",
                className: "bd-server-image",
                src: e.iconUrl,
                onError: this.handleError.bind(this)
            }), j.react.createElement("div", {
                className: "flexChild-faoVW3 bd-server-content"
            }, j.react.createElement("div", {
                className: "flex-1xMQg5 flex-1O1GKY horizontal-1ae9ci horizontal-2EEEnY directionRow-3v3tfG noWrap-3jynv6 bd-server-header"
            }, j.react.createElement("h5", {
                className: "h5-18_1nd defaultColor-1_ajX0 margin-reset bd-server-name"
            }, e.name), j.react.createElement("h5", {
                className: "h5-18_1nd defaultColor-1_ajX0 margin-reset bd-server-member-count"
            }, e.members, " Members")), j.react.createElement("div", {
                className: "flex-1xMQg5 flex-1O1GKY horizontal-1ae9ci horizontal-2EEEnY directionRow-3v3tfG noWrap-3jynv6"
            }, j.react.createElement("div", {
                className: "scrollerWrap-2lJEkd scrollerThemed-2oenus themeGhostHairline-DBD-2d scrollerFade-1Ijw5y bd-server-description-container"
            }, j.react.createElement("div", {
                className: "scroller-2FKFPG scroller bd-server-description"
            }, e.description))), j.react.createElement("div", {
                className: "flex-1xMQg5 flex-1O1GKY horizontal-1ae9ci horizontal-2EEEnY directionRow-3v3tfG noWrap-3jynv6 bd-server-footer"
            }, j.react.createElement("div", {
                className: "flexChild-faoVW3 bd-server-tags",
                style: {
                    flex: "1 1 auto"
                }
            }, e.categories.join(", ")), this.state.joined && j.react.createElement("button", {
                type: "button",
                className: "button-38aScr lookFilled-1Gx00P colorBrand-3pXr91 sizeMin-1mJd1x grow-q77ONN colorGreen-29iAKY",
                style: {
                    minHeight: "12px",
                    marginTop: "4px",
                    backgroundColor: "#3ac15c"
                }
            }, j.react.createElement("div", {
                className: "ui-button-contents"
            }, "Joined")), e.error && j.react.createElement("button", {
                type: "button",
                className: "button-38aScr lookFilled-1Gx00P colorBrand-3pXr91 sizeMin-1mJd1x grow-q77ONN disabled-9aF2ug",
                style: {
                    minHeight: "12px",
                    marginTop: "4px",
                    backgroundColor: "#c13a3a"
                }
            }, j.react.createElement("div", {
                className: "ui-button-contents"
            }, "Error")), !e.error && !this.state.joined && j.react.createElement("button", {
                type: "button",
                className: "button-38aScr lookFilled-1Gx00P colorBrand-3pXr91 sizeMin-1mJd1x grow-q77ONN",
                style: {
                    minHeight: "12px",
                    marginTop: "4px"
                },
                onClick: () => {
                    this.join()
                }
            }, j.react.createElement("div", {
                className: "ui-button-contents"
            }, "Join")))))
        }
        handleError() {
            this.props.server.iconUrl = this.props.fallback, this.setState({
                imageError: !0
            })
        }
        join() {
            this.props.join(this)
        }
    }
    class Fe extends j.reactComponent {
        constructor(e) {
            super(e)
        }
        render() {
            let e = "scrollerWrap-2lJEkd scrollerThemed-2oenus themeGhostHairline-DBD-2d" + (this.props.fade ? " scrollerFade-1Ijw5y" : ""),
                t = "scroller-2FKFPG scroller";
            this.props.sidebar && (t = "scroller-2FKFPG firefoxFixScrollFlex-cnI2ix sidebarRegionScroller-3MXcoP sidebar-region-scroller scroller"), this.props.contentColumn && (t = "scroller-2FKFPG firefoxFixScrollFlex-cnI2ix contentRegionScroller-26nc1e content-region-scroller scroller", e = "scrollerWrap-2lJEkd firefoxFixScrollFlex-cnI2ix contentRegionScrollerWrap-3YZXdm content-region-scroller-wrap scrollerThemed-2oenus themeGhost-28MSn0 scrollerTrack-1ZIpsv");
            const {
                children: n
            } = this.props;
            return j.react.createElement("div", {
                key: "scrollerwrap",
                className: e
            }, j.react.createElement("div", {
                key: "scroller",
                ref: "scroller",
                className: t
            }, n))
        }
    }
    const Oe = Fe.prototype.render;
    Object.defineProperty(Fe.prototype, "render", {
        enumerable: !1,
        configurable: !1,
        set: function() {
            console.warn("Addon policy for plugins #5 https://github.com/rauenzi/BetterDiscordApp/wiki/Addon-Policies#plugins")
        },
        get: () => Oe
    });
    class Ie extends j.reactComponent {
        constructor(e) {
            super(e)
        }
        render() {
            const {
                sidebar: e,
                content: t,
                tools: n
            } = this.props.children;
            return j.react.createElement("div", {
                className: "standardSidebarView-3F1I7i ui-standard-sidebar-view"
            }, j.react.createElement("div", {
                className: "sidebarRegion-VFTUkN sidebar-region"
            }, j.react.createElement(Fe, {
                key: "sidebarScroller",
                ref: "sidebarScroller",
                sidebar: !0,
                fade: e.fade || !0,
                dark: e.dark || !0
            }, e.component)), j.react.createElement("div", {
                className: "contentRegion-3nDuYy content-region"
            }, j.react.createElement("div", {
                className: "contentTransitionWrap-3hqOEW content-transition-wrap"
            }, j.react.createElement("div", {
                className: "scrollerWrap-2lJEkd firefoxFixScrollFlex-cnI2ix contentRegionScrollerWrap-3YZXdm content-region-scroller-wrap scrollerThemed-2oenus themeGhost-28MSn0 scrollerTrack-1ZIpsv"
            }, j.react.createElement("div", {
                className: "scroller-2FKFPG firefoxFixScrollFlex-cnI2ix contentRegionScroller-26nc1e content-region-scroller scroller",
                ref: "contentScroller"
            }, j.react.createElement("div", {
                className: "contentColumn-2hrIYH contentColumnDefault-1VQkGM content-column default"
            }, t.component), n.component)))))
        }
    }
    class qe extends j.reactComponent {
        constructor(e) {
            super(e), this.setInitialState(), this.close = this.close.bind(this), this.changeCategory = this.changeCategory.bind(this), this.search = this.search.bind(this), this.searchKeyDown = this.searchKeyDown.bind(this), this.checkConnection = this.checkConnection.bind(this), this.join = this.join.bind(this), this.connect = this.connect.bind(this), this.GuildStore = j.WebpackModules.findByUniqueProperties(["getGuilds"]), this.AvatarDefaults = j.WebpackModules.findByUniqueProperties(["getUserAvatarURL", "DEFAULT_AVATARS"]), this.InviteActions = j.WebpackModules.findByUniqueProperties(["acceptInvite"]), this.SortedGuildStore = j.WebpackModules.findByUniqueProperties(["getSortedGuilds"])
        }
        componentDidMount() {
            this.checkConnection()
        }
        setInitialState() {
            this.state = {
                selectedCategory: -1,
                title: "Loading...",
                loading: !0,
                servers: [],
                next: null,
                connection: {
                    state: 0,
                    user: null
                }
            }
        }
        close() {
            j.reactDom.unmountComponentAtNode(document.getElementById(this.props.rootId))
        }
        search(e, t) {
            const s = this;
            n(3).get({
                url: `${s.endPoint}${e}${e?"&schema=new":"?schema=new"}`,
                json: !0
            }, (function(e, n, o) {
                if (e) return s.setState({
                    loading: !1,
                    title: "Failed to load servers. Check console for details"
                });
                let r = o.results.reduce((e, t) => (t.joined = !1, e.push(t), e), []);
                t || (r = s.state.servers.concat(r));
                let i = o.size + o.from;
                o.next = "?from=" + i, s.state.term && (o.next += "&term=" + s.state.term), s.state.selectedCategory && (o.next += "&category=" + s.categoryButtons[s.state.selectedCategory]), i >= o.total && (i = o.total, o.next = null);
                let a = `Showing 1-${i} of ${o.total} results in ${s.categoryButtons[s.state.selectedCategory]}`;
                s.state.term && (a += " for " + s.state.term), s.setState({
                    loading: !1,
                    title: a,
                    servers: r,
                    next: o.next
                }), t && (s.refs.sbv.refs.contentScroller.scrollTop = 0)
            }))
        }
        async join(e) {
            if (e.props.pinned) return this.InviteActions.acceptInvite(e.props.invite_code);
            await fetch(`${this.joinEndPoint}/${e.props.server.identifier}`, {
                method: "GET",
                credentials: "include",
                mode: "cors",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            }), e.setState({
                joined: !0
            })
        }
        connect() {
            const e = this,
                t = e.windowOptions;
            t.x = Math.round(window.screenX + window.innerWidth / 2 - t.width / 2), t.y = Math.round(window.screenY + window.innerHeight / 2 - t.height / 2), e.joinWindow = new(window.require("electron").remote.BrowserWindow)(t);
            e.joinWindow.webContents.on("did-navigate", (t, n) => {
                "https://auth.discordservers.com/info" == n && (e.joinWindow.close(), e.checkConnection())
            }), e.joinWindow.loadURL("https://auth.discordservers.com/connect?scopes=guilds.join&previousUrl=https://auth.discordservers.com/info")
        }
        get windowOptions() {
            return {
                width: 500,
                height: 550,
                backgroundColor: "#282b30",
                show: !0,
                resizable: !1,
                maximizable: !1,
                minimizable: !1,
                alwaysOnTop: !0,
                frame: !1,
                center: !1,
                webPreferences: {
                    nodeIntegration: !1
                }
            }
        }
        get bdServer() {
            const e = this.SortedGuildStore.getFlattenedGuildIds(),
                t = this.AvatarDefaults.DEFAULT_AVATARS;
            return j.react.createElement(Ae, {
                server: {
                    name: "BetterDiscord",
                    online: "7500+",
                    members: "20000+",
                    categories: ["community", "programming", "support"],
                    description: "Official BetterDiscord server for support etc",
                    identifier: "86004744966914048",
                    iconUrl: "https://cdn.discordapp.com/icons/86004744966914048/292e7f6bfff2b71dfd13e508a859aedd.webp",
                    nativejoin: !0,
                    invite_code: "0Tmfo5ZbORCRqbAd",
                    pinned: !0
                },
                pinned: !0,
                join: this.join,
                guildList: e,
                fallback: t[Math.floor(5 * Math.random())]
            })
        }
        get endPoint() {
            return "https://search.discordservers.com"
        }
        get joinEndPoint() {
            return "https://j.discordservers.com"
        }
        get connectEndPoint() {
            return "https://join.discordservers.com/connect"
        }
        async checkConnection() {
            const e = this;
            try {
                const t = await fetch("https://auth.discordservers.com/info", {
                        method: "GET",
                        credentials: "include",
                        mode: "cors",
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json"
                        }
                    }),
                    n = await t.json();
                e.setState({
                    selectedCategory: 0,
                    connection: {
                        state: 2,
                        user: n
                    }
                }), e.search("", !0)
            } catch (t) {
                e.setState({
                    title: "Not connected to discordservers.com!",
                    loading: !0,
                    selectedCategory: -1,
                    connection: {
                        state: 1,
                        user: null
                    }
                })
            }
        }
        render() {
            return j.react.createElement(Ie, {
                ref: "sbv"
            }, this.component)
        }
        get component() {
            return {
                sidebar: {
                    component: this.sidebar
                },
                content: {
                    component: this.content
                },
                tools: {
                    component: j.react.createElement(Be, {
                        key: "pt",
                        ref: "tools",
                        onClick: this.close
                    })
                }
            }
        }
        get sidebar() {
            return j.react.createElement("div", {
                className: "sidebar",
                key: "ps"
            }, j.react.createElement("div", {
                className: "ui-tab-bar SIDE"
            }, j.react.createElement("div", {
                className: "ui-tab-bar-header",
                style: {
                    fontSize: "16px"
                }
            }, "Public Servers"), j.react.createElement(le, null), this.searchInput, j.react.createElement(le, null), j.react.createElement(de, {
                text: "Categories"
            }), this.categoryButtons.map((e, t) => j.react.createElement(ue, {
                id: t,
                onClick: this.changeCategory,
                key: t,
                text: e,
                selected: this.state.selectedCategory === t
            })), j.react.createElement(le, null), this.footer, this.connection))
        }
        get searchInput() {
            return j.react.createElement("div", {
                className: "ui-form-item"
            }, j.react.createElement("div", {
                className: "ui-text-input flex-vertical",
                style: {
                    width: "172px",
                    marginLeft: "10px"
                }
            }, j.react.createElement("input", {
                ref: "searchinput",
                onKeyDown: this.searchKeyDown,
                onChange: () => {},
                type: "text",
                className: "input default",
                placeholder: "Search...",
                maxLength: "50"
            })))
        }
        searchKeyDown(e) {
            const t = this;
            if (t.state.loading || 13 !== e.which) return;
            t.setState({
                loading: !0,
                title: "Loading...",
                term: e.target.value
            });
            let n = "?term=" + e.target.value;
            0 !== t.state.selectedCategory && (n += "&category=" + t.categoryButtons[t.state.selectedCategory]), t.search(n, !0)
        }
        get categoryButtons() {
            return ["All", "FPS Games", "MMO Games", "Strategy Games", "MOBA Games", "RPG Games", "Tabletop Games", "Sandbox Games", "Simulation Games", "Music", "Community", "Language", "Programming", "Other"]
        }
        changeCategory(e) {
            const t = this;
            t.state.loading || (t.refs.searchinput.value = "", t.setState({
                loading: !0,
                selectedCategory: e,
                title: "Loading...",
                term: null
            }), 0 !== e ? t.search("?category=" + t.categoryButtons[e], !0) : t.search("", !0))
        }
        get content() {
            const e = this,
                t = this.SortedGuildStore.getFlattenedGuildIds(),
                n = this.AvatarDefaults.DEFAULT_AVATARS;
            return 1 === e.state.connection.state ? e.notConnected : [j.react.createElement("div", {
                ref: "content",
                key: "pc",
                className: "contentColumn-2hrIYH contentColumnDefault-1VQkGM content-column default"
            }, j.react.createElement(je, {
                text: e.state.title
            }), e.bdServer, e.state.servers.map(s => j.react.createElement(Ae, {
                key: s.identifier,
                server: s,
                join: e.join,
                guildList: t,
                fallback: n[Math.floor(5 * Math.random())]
            })), e.state.next && j.react.createElement("button", {
                type: "button",
                onClick: () => {
                    e.state.loading || (e.setState({
                        loading: !0
                    }), e.search(e.state.next, !1))
                },
                className: "ui-button filled brand small grow",
                style: {
                    width: "100%",
                    marginTop: "10px",
                    marginBottom: "10px"
                }
            }, j.react.createElement("div", {
                className: "ui-button-contents"
            }, e.state.loading ? "Loading" : "Load More")), e.state.servers.length > 0 && j.react.createElement(je, {
                text: e.state.title
            }))]
        }
        get notConnected() {
            return [j.react.createElement("div", {
                key: "ncc",
                ref: "content",
                className: "contentColumn-2hrIYH contentColumnDefault-1VQkGM content-column default"
            }, j.react.createElement("h2", {
                className: "ui-form-title h2 margin-reset margin-bottom-20"
            }, "Not connected to discordservers.com!", j.react.createElement("button", {
                onClick: this.connect,
                type: "button",
                className: "ui-button filled brand small grow",
                style: {
                    display: "inline-block",
                    minHeight: "18px",
                    marginLeft: "10px",
                    lineHeight: "14px"
                }
            }, j.react.createElement("div", {
                className: "ui-button-contents"
            }, "Connect"))), this.bdServer)]
        }
        get footer() {
            return j.react.createElement("div", {
                className: "ui-tab-bar-header"
            }, j.react.createElement("a", {
                href: "https://discordservers.com",
                target: "_blank"
            }, "Discordservers.com"))
        }
        get connection() {
            const {
                connection: e
            } = this.state;
            return 2 !== e.state ? j.react.createElement("span", null) : j.react.createElement("span", null, j.react.createElement(le, null), j.react.createElement("span", {
                style: {
                    color: "#b9bbbe",
                    fontSize: "10px",
                    marginLeft: "10px"
                }
            }, "Connected as: ", `${e.user.username}#${e.user.discriminator}`), j.react.createElement("div", {
                style: {
                    padding: "5px 10px 0 10px"
                }
            }, j.react.createElement("button", {
                style: {
                    width: "100%",
                    minHeight: "20px"
                },
                type: "button",
                className: "ui-button filled brand small grow"
            }, j.react.createElement("div", {
                className: "ui-button-contents",
                onClick: this.connect
            }, "Reconnect"))))
        }
    }
    class Re extends j.reactComponent {
        constructor(e) {
            super(e), this.keyupListener = this.keyupListener.bind(this)
        }
        keyupListener(e) {
            27 === e.which && j.reactDom.unmountComponentAtNode(this.refs.root.parentNode)
        }
        componentDidMount() {
            window.addEventListener("keyup", this.keyupListener);
            const e = A.query("#" + this.props.id);
            A.animate({
                duration: 200,
                update: function(t) {
                    e.style.transform = `scale(${1.1-.1*t}) translateZ(0px)`, e.style.opacity = t, 1 == t && setImmediate(() => {
                        e.style.transform = "", e.style.opacity = ""
                    })
                }
            })
        }
        componentWillUnmount() {
            window.removeEventListener("keyup", this.keyupListener);
            const e = A.query("#" + this.props.id);
            A.animate({
                duration: 200,
                update: function(t) {
                    e.style.transform = `scale(${1.1-.1*(1-t)}) translateZ(0px)`, e.style.opacity = 1 - t, 1 == t && setImmediate(() => {
                        e.remove()
                    })
                }
            });
            const t = A.query(".publicServersOpen");
            t.classList.remove("publicServersOpen"), A.animate({
                duration: 200,
                update: function(e) {
                    t.style.transform = `scale(${.07*e+.93}) translateZ(0px)`, t.style.opacity = e, 1 == e && setImmediate(() => {
                        t.style.transform = "", t.style.opacity = ""
                    })
                }
            })
        }
        componentWillMount() {
            const e = A.query('[class*="layer-"]');
            e.classList.add("publicServersOpen"), A.animate({
                duration: 200,
                update: function(t) {
                    e.style.transform = `scale(${.07*(1-t)+.93}) translateZ(0px)`, e.style.opacity = 1 - t
                }
            })
        }
        render() {
            return j.react.createElement("div", {
                className: "layer bd-layer layer-3QrUeG",
                id: this.props.id,
                ref: "root",
                style: {
                    opacity: 0,
                    transform: "scale(1.1) translateZ(0px)"
                }
            }, this.props.children)
        }
    }
    var _e = new class {
        constructor() {
            this._appendButton = this._appendButton.bind(this)
        }
        get component() {
            return j.react.createElement(Re, {
                rootId: "pubslayerroot",
                id: "pubslayer"
            }, j.react.createElement(qe, {
                rootId: "pubslayerroot"
            }))
        }
        get root() {
            const e = document.getElementById("pubslayerroot");
            return e || (this.injectRoot() ? this.root : null)
        }
        injectRoot() {
            const e = A.query(".layers, .layers-3iHuyZ");
            return !!e && (e.append(A.createElement("<div id='pubslayerroot'>")), !0)
        }
        render() {
            const e = this.root;
            e ? j.reactDom.render(this.component, e) : console.log("FAILED TO LOCATE ROOT: .layers")
        }
        get button() {
            const e = A.createElement(`<div id="bd-pub-li" class="${j.guildClasses.listItem}">`);
            u["bda-gs-1"] || (e.style.display = "none");
            const t = A.createElement(`<div id="bd-pub-button" class="${"wrapper-25eVIn "+j.guildClasses.circleButtonMask}">public</div>`);
            return t.addEventListener("click", () => {
                this.render()
            }), e.append(t), e
        }
        _appendButton() {
            if (A.query("#bd-pub-li")) return;
            const e = j.guildClasses.wrapper.split(" ")[0],
                t = A.query(`.${e} .scroller-2TZvBN >:first-child`);
            t && A.after(t, this.button)
        }
        addButton() {
            if (this.guildPatch) return;
            const e = T(e => e.default && "NavigableGuilds" == e.default.displayName),
                t = B("Guilds");
            e || t || F.warn("PublicServer", "Can't find GuildList component"), this.guildPatch = F.monkeyPatch(e || t.prototype, e ? "default" : "render", {
                after: this._appendButton
            }), this._appendButton()
        }
        removeButton() {
            this.guildPatch(), delete this.guildPatch;
            const e = A.query("#bd-pub-li");
            e && e.remove()
        }
    };
    var He = new class {
        start() {
            A.addStyle("VoiceMode", "\n    .container-2Rl01u {\n        display: none!important;\n    }\n\n    .chat-3bRxxu {\n        display: none!important;\n    }\n\n    .sidebar-2K8pFh {\n        flex-grow: 1!important;\n    }\n")
        }
        stop() {
            A.removeStyle("VoiceMode")
        }
    };
    const ze = new RegExp("^(?!da-)((?:[A-Za-z]|[0-9]|-)+)-(?:[A-Za-z]|[0-9]|-|_){6}$");
    var $e = new class {
            stop() {
                this.hasPatched && (this.unpatchClassModules(L(this.moduleFilter.bind(this))), this.revertElement(document.querySelector("#app-mount")), this.hasPatched = !1)
            }
            start() {
                this.hasPatched || (this.patchClassModules(L(this.moduleFilter.bind(this))), this.normalizeElement(document.querySelector("#app-mount")), this.hasPatched = !0, this.patchDOMMethods())
            }
            patchClassModules(e) {
                for (const t of e) this.patchClassModule("da", t)
            }
            unpatchClassModules(e) {
                for (const t of e) this.unpatchClassModule("da", t)
            }
            shouldIgnore(e) {
                return !isNaN(e) || (!!(e.endsWith("px") || e.endsWith("ch") || e.endsWith("em") || e.endsWith("ms")) || (!!e.startsWith("layerContainer-") || (!(!e.startsWith("#") || 7 != e.length && 4 != e.length) || !(!e.includes("calc(") && !e.includes("rgba")))))
            }
            moduleFilter(e) {
                if ("object" != typeof e || Array.isArray(e)) return !1;
                if (e.__esModule) return !1;
                if (!Object.keys(e).length) return !1;
                for (const t in e) {
                    const n = e[t];
                    if ("string" != typeof n) return !1;
                    if (!this.shouldIgnore(n)) {
                        if (1 === n.split("-").length) return !1;
                        if (!ze.test(n.split(" ")[0])) return !1
                    }
                }
                return !0
            }
            patchClassModule(e, t) {
                for (const n in t) {
                    const s = t[n];
                    if (this.shouldIgnore(s)) continue;
                    const o = s.split(" ");
                    for (const s of o) {
                        const o = s.match(ze);
                        if (!o || !o.length || o.length < 2) continue;
                        const r = o[1].split("-").map((e, t) => t ? e[0].toUpperCase() + e.slice(1) : e).join("");
                        t[n] += ` ${e}-${r}`
                    }
                }
            }
            unpatchClassModule(e, t) {
                for (const n in t) {
                    const s = t[n];
                    if (this.shouldIgnore(s)) continue;
                    let o = "";
                    const r = s.split(" ");
                    for (const t of r) t.startsWith(e + "-") || (o += " " + t);
                    t[n] = o.trim()
                }
            }
            normalizeElement(e) {
                if (!(e instanceof Element)) return;
                const t = e.classList;
                for (let n = 0, s = t.length; n < s; n++) {
                    if (!ze.test(t[n])) continue;
                    const s = t[n].match(ze)[1].split("-").map((e, t) => t ? e[0].toUpperCase() + e.slice(1) : e).join("");
                    e.classList.add("da-" + s)
                }
                for (const t of e.children) this.normalizeElement(t)
            }
            revertElement(e) {
                if (!(e instanceof Element)) return;
                e.children && e.children.length && this.revertElement(e.children[0]), e.nextElementSibling && this.revertElement(e.nextElementSibling);
                const t = e.classList,
                    n = [];
                for (let e = 0; e < t.length; e++) t[e].startsWith("da-") && n.push(t[e]);
                e.classList.remove(...n)
            }
            patchDOMMethods() {
                const e = DOMTokenList.prototype.contains;
                DOMTokenList.prototype.contains = function(t) {
                    return Reflect.apply(e, this, [t.split(" ")[0]])
                };
                const t = DOMTokenList.prototype.add;
                DOMTokenList.prototype.add = function(...e) {
                    for (let t = 0; t < e.length; t++) e[t] = e[t].split(" ")[0];
                    return Reflect.apply(t, this, e)
                };
                const n = DOMTokenList.prototype.remove;
                DOMTokenList.prototype.remove = function(...e) {
                    for (let t = 0; t < e.length; t++) e[t] = e[t].split(" ")[0];
                    return Reflect.apply(n, this, e)
                }
            }
        },
        We = new class {
            constructor() {
                this.debugListener = this.debugListener.bind(this), this.copySelectorListener = this.copySelectorListener.bind(this)
            }
            start() {
                this.startDebugListener(), u["fork-dm-1"] && this.startCopySelector()
            }
            stop() {
                this.stopDebugListener(), this.stopCopySelector()
            }
            startDebugListener() {
                this.stopDebugListener(), document.addEventListener("keydown", this.debugListener)
            }
            stopDebugListener() {
                document.removeEventListener("keydown", this.debugListener)
            }
            startCopySelector() {
                this.stopCopySelector(), document.addEventListener("contextmenu", this.copySelectorListener)
            }
            stopCopySelector() {
                document.removeEventListener("contextmenu", this.copySelectorListener)
            }
            debugListener(e) {
                if (119 === e.which || 118 == e.which) {
                    console.log("%c[%cDevMode%c] %cBreak/Resume", "color: red;", "color: #303030; font-weight:700;", "color:red;", "");
                    debugger;
                    e.preventDefault(), e.stopImmediatePropagation()
                }
            }
            copySelectorListener(e) {
                e.stopPropagation();
                const t = this.getSelector(e.target);
                setImmediate((function() {
                    let n = A.query(".contextMenu-HLZMGh");
                    if (!n) {
                        const t = A.query("#app-mount"),
                            s = A.createElement('<div class="layer-v9HyYc da-layer">');
                        n = A.createElement('<div class="contextMenu-HLZMGh da-contextMenu bd-context-menu"></div>'), s.append(n), t.append(s), s.style.top = e.clientY + "px", s.style.left = e.clientX + "px", s.style.zIndex = "1002";
                        const o = function(e) {
                            e.keyCode && 27 !== e.keyCode || (s.remove(), document.removeEventListener("click", o), document.removeEventListener("contextmenu", o), document.removeEventListener("keyup", o))
                        };
                        document.addEventListener("click", o), document.addEventListener("contextmenu", o), document.addEventListener("keyup", o)
                    }
                    const s = A.createElement('<div class="itemGroup-1tL0uz da-itemGroup">'),
                        o = A.createElement('<div class="item-1Yvehc itemBase-tz5SeC da-item da-itemBase clickable-11uBi- da-clickable">');
                    o.append(A.createElement('<div class="label-JWQiNe da-label">Copy Selector</div>')), o.addEventListener("click", () => {
                        j.NativeModule.copy(t), n.style.display = "none"
                    }), s.append(o), n.append(s)
                }))
            }
            getSelector(e) {
                if (e.id) return "#" + e.id;
                const t = this.getRules(e),
                    n = t[t.length - 1];
                return n ? n.selectorText : e.classList.length ? "." + Array.from(e.classList).join(".") : "." + Array.from(e.parentElement.classList).join(".")
            }
            getRules(e, t = e.ownerDocument.styleSheets) {
                return [...t].filter(e => !e.href || !e.href.includes("BetterDiscordApp")).map(e => [...e.cssRules || []]).flat().filter(t => t && t.selectorText && e.matches(t.selectorText) && t.style.length && t.selectorText.split(", ").length < 8 && !t.selectorText.split(", ").includes("*"))
            }
        };
    const Ge = j.React;
    class Ue extends Ge.Component {
        constructor(e) {
            super(e), this.state = {
                checked: this.props.checked
            }, this.onChange = this.onChange.bind(this)
        }
        onChange() {
            this.props.disabled || (this.props.onChange(!this.state.checked), this.setState({
                checked: !this.state.checked
            }))
        }
        render() {
            const e = this.props.disabled ? " bd-switch-disabled" : "",
                t = this.state.checked ? " bd-switch-checked" : "";
            return Ge.createElement("div", {
                className: "bd-switch" + e + t
            }, Ge.createElement("input", {
                type: "checkbox",
                id: this.props.id,
                className: "bd-checkbox",
                disabled: this.props.disabled,
                checked: this.state.checked,
                onChange: this.onChange
            }))
        }
    }
    class Ve extends j.reactComponent {
        constructor(e) {
            super(e), this.onChange = this.onChange.bind(this)
        }
        onChange() {
            this.props.checked = !this.props.checked, this.props.onChange(this.props.id, this.props.checked)
        }
        render() {
            const {
                text: e,
                info: t
            } = this.props.data;
            return j.react.createElement("div", {
                className: "ui-flex flex-vertical flex-justify-start flex-align-stretch flex-nowrap ui-switch-item"
            }, j.react.createElement("div", {
                className: "ui-flex flex-horizontal flex-justify-start flex-align-stretch flex-nowrap"
            }, j.react.createElement("h3", {
                className: "ui-form-title h3 margin-reset margin-reset ui-flex-child"
            }, e), j.react.createElement(Ue, {
                onChange: this.onChange,
                checked: this.props.checked
            })), j.react.createElement("div", {
                className: "ui-form-text style-description margin-top-4",
                style: {
                    flex: "1 1 auto"
                }
            }, t))
        }
    }
    class Je extends j.reactComponent {
        constructor(e) {
            super(e)
        }
        render() {
            const {
                title: e,
                settings: t,
                button: n
            } = this.props, s = n ? j.react.createElement("button", {
                key: "title-button",
                className: "bd-pfbtn",
                onClick: n.onClick
            }, n.title) : null;
            return [j.react.createElement(je, {
                text: e
            }), s, t.map(e => j.react.createElement(Ve, {
                id: e.id,
                key: e.id,
                data: e,
                checked: u[e.id],
                onChange: (e, t) => {
                    this.props.onChange(e, t)
                }
            }))]
        }
    }
    class Qe extends j.reactComponent {
        constructor(e) {
            super(e)
        }
        render() {
            return j.react.createElement("div", {
                className: "contentColumn-2hrIYH contentColumnDefault-1VQkGM content-column default"
            }, this.props.sections.map(e => j.react.createElement(Je, Object.assign({}, e, {
                onChange: this.props.onChange
            }))))
        }
    }
    class Ze extends j.reactComponent {
        constructor(e) {
            super(e)
        }
        render() {
            const {
                settings: e
            } = this.props;
            return j.react.createElement("div", {
                className: "contentColumn-2hrIYH contentColumnDefault-1VQkGM content-column default"
            }, j.react.createElement(je, {
                text: this.props.title
            }), this.props.button && j.react.createElement("button", {
                key: "title-button",
                className: "bd-pfbtn",
                onClick: this.props.button.onClick
            }, this.props.button.title), e.map(e => j.react.createElement(Ve, {
                id: e.id,
                key: e.id,
                data: e,
                checked: u[e.id],
                onChange: (e, t) => {
                    this.props.onChange(e, t)
                }
            })))
        }
    }
    class Ye extends j.reactComponent {
        constructor(e) {
            super(e), this.onClick = this.onClick.bind(this), this.setInitialState()
        }
        setInitialState() {
            this.state = {
                checked: this.props.checked || !1
            }
        }
        render() {
            return j.react.createElement("li", null, j.react.createElement("div", {
                className: "checkbox checkbox-3kaeSU da-checkbox",
                onClick: this.onClick
            }, j.react.createElement("div", {
                className: "checkbox-inner checkboxInner-3yjcPe da-checkboxInner"
            }, j.react.createElement("input", {
                className: "checkboxElement-1qV33p da-checkboxElement",
                checked: this.state.checked,
                onChange: () => {},
                type: "checkbox"
            }), j.react.createElement("span", null)), j.react.createElement("span", null, this.props.text)))
        }
        onClick() {
            this.props.onChange(this.props.id, !this.state.checked), this.setState({
                checked: !this.state.checked
            })
        }
    }
    class Ke extends j.reactComponent {
        constructor(e) {
            super(e);
            this.onClick = this.onClick.bind(this), this.updateCss = this.updateCss.bind(this), this.saveCss = this.saveCss.bind(this), this.onChange = this.onChange.bind(this)
        }
        componentDidMount() {
            A.addClass(A.query("#app-mount"), "bd-detached-editor"), j.editorDetached = !0, this.editor = ace.edit("bd-customcss-editor-detached"), this.editor.setTheme("ace/theme/monokai"), this.editor.session.setMode("ace/mode/css"), this.editor.setShowPrintMargin(!1), this.editor.setFontSize(14), this.editor.on("change", () => {
                u["bda-css-0"] && (this.saveCss(), this.updateCss())
            })
        }
        componentWillUnmount() {
            A.removeClass(A.query("#app-mount"), "bd-detached-editor"), j.editorDetached = !1, this.editor.destroy()
        }
        updateLineCount() {
            const e = this.refs.editor.value.split("\n").length;
            e != this.props.lines && (this.refs.lines.textContent = Array.from(new Array(e), (e, t) => t + 1).join(".\n") + ".", this.props.lines = e)
        }
        get options() {
            return {
                lineNumbers: !0,
                mode: "css",
                indentUnit: 4,
                theme: "material",
                scrollbarStyle: "simple"
            }
        }
        get css() {
            const e = te.getBDData("bdcustomcss");
            let t = "";
            return e && "" !== e && (t = atob(e)), t
        }
        get root() {
            const e = A.query("#bd-customcss-detach-container");
            return e || (this.injectRoot() ? this.detachedRoot : null)
        }
        injectRoot() {
            const e = A.query(".app, .app-2rEoOp");
            return !!e && (A.insertAfter(A.createElement('<div id="bd-customcss-detach-container">'), e), !0)
        }
        render() {
            const e = this;
            return j.react.createElement("div", {
                className: "bd-detached-css-editor",
                id: "bd-customcss-detach-editor"
            }, j.react.createElement("div", {
                id: "bd-customcss-innerpane"
            }, j.react.createElement("div", {
                className: "editor-wrapper"
            }, j.react.createElement("div", {
                id: "bd-customcss-editor-detached",
                className: "editor",
                ref: "editor"
            }, e.css)), j.react.createElement("div", {
                id: "bd-customcss-attach-controls"
            }, j.react.createElement("ul", {
                className: "checkbox-group"
            }, j.react.createElement(Ye, {
                id: "live-update",
                text: "Live Update",
                onChange: e.onChange,
                checked: u["bda-css-0"]
            })), j.react.createElement("div", {
                id: "bd-customcss-detach-controls-button"
            }, j.react.createElement("button", {
                style: {
                    borderRadius: "3px 0 0 3px",
                    borderRight: "1px solid #3f4146"
                },
                className: "btn btn-primary",
                onClick: () => {
                    e.onClick("update")
                }
            }, "Update"), j.react.createElement("button", {
                style: {
                    borderRadius: "0",
                    borderLeft: "1px solid #2d2d2d",
                    borderRight: "1px solid #2d2d2d"
                },
                className: "btn btn-primary",
                onClick: () => {
                    e.onClick("save")
                }
            }, "Save"), j.react.createElement("button", {
                style: {
                    borderRadius: "0 3px 3px 0",
                    borderLeft: "1px solid #3f4146"
                },
                className: "btn btn-primary",
                onClick: () => {
                    e.onClick("attach")
                }
            }, "Attach"), j.react.createElement("span", {
                style: {
                    fontSize: "10px",
                    marginLeft: "5px"
                }
            }, "Unsaved changes are lost on attach")))))
        }
        onChange(e, t) {
            switch (e) {
                case "live-update":
                    u["bda-css-0"] = t, xt.saveSettings()
            }
        }
        onClick(e) {
            const t = this;
            switch (e) {
                case "attach":
                    A.query("#editor-detached") && t.props.attach(), j.reactDom.unmountComponentAtNode(t.root), t.root.remove();
                    break;
                case "update":
                    t.updateCss();
                    break;
                case "save":
                    t.saveCss()
            }
        }
        updateCss() {
            A.removeStyle("customcss"), A.addStyle("customcss", this.editor.session.getValue())
        }
        saveCss() {
            te.setBDData("bdcustomcss", btoa(this.editor.session.getValue()))
        }
    }
    class Xe extends j.reactComponent {
        constructor(e) {
            super(e);
            this.props.lines = 0, this.setInitialState(), this.attach = this.attach.bind(this), this.detachedEditor = j.react.createElement(Ke, {
                attach: this.attach
            }), this.onClick = this.onClick.bind(this), this.updateCss = this.updateCss.bind(this), this.saveCss = this.saveCss.bind(this), this.detach = this.detach.bind(this)
        }
        setInitialState() {
            this.state = {
                detached: this.props.detached || j.editorDetached
            }
        }
        componentDidMount() {
            this.editor = ace.edit("bd-customcss-editor"), this.editor.setTheme("ace/theme/monokai"), this.editor.session.setMode("ace/mode/css"), this.editor.setShowPrintMargin(!1), this.editor.setFontSize(14), this.editor.on("change", () => {
                u["bda-css-0"] && (this.saveCss(), this.updateCss())
            })
        }
        componentWillUnmount() {
            this.editor.destroy()
        }
        componentDidUpdate(e, t) {
            const n = this;
            t.detached && !n.state.detached && j.reactDom.unmountComponentAtNode(n.detachedRoot)
        }
        codeMirror() {}
        get options() {
            return {
                lineNumbers: !0,
                mode: "css",
                indentUnit: 4,
                theme: "material",
                scrollbarStyle: "simple"
            }
        }
        get css() {
            const e = te.getBDData("bdcustomcss");
            let t = "";
            return e && "" !== e && (t = atob(e)), t
        }
        updateLineCount() {
            const e = this.refs.editor.value.split("\n").length;
            e != this.props.lines && (this.refs.lines.textContent = Array.from(new Array(e), (e, t) => t + 1).join(".\n") + ".", this.props.lines = e)
        }
        render() {
            const e = this,
                {
                    detached: t
                } = e.state;
            return j.react.createElement("div", {
                className: "contentColumn-2hrIYH contentColumnDefault-1VQkGM content-column default",
                style: {
                    padding: "60px 40px 0px"
                }
            }, t && j.react.createElement("div", {
                id: "editor-detached"
            }, j.react.createElement(je, {
                text: "Custom CSS Editor"
            }), j.react.createElement("h3", null, "Editor Detached"), j.react.createElement("button", {
                className: "btn btn-primary",
                onClick: () => {
                    e.attach()
                }
            }, "Attach")), !t && j.react.createElement("div", null, j.react.createElement(je, {
                text: "Custom CSS Editor"
            }), j.react.createElement("div", {
                className: "editor-wrapper"
            }, j.react.createElement("div", {
                id: "bd-customcss-editor",
                className: "editor",
                ref: "editor"
            }, e.css)), j.react.createElement("div", {
                id: "bd-customcss-attach-controls"
            }, j.react.createElement("ul", {
                className: "checkbox-group"
            }, j.react.createElement(Ye, {
                id: "live-update",
                text: "Live Update",
                onChange: this.onChange,
                checked: u["bda-css-0"]
            })), j.react.createElement("div", {
                id: "bd-customcss-detach-controls-button"
            }, j.react.createElement("button", {
                style: {
                    borderRadius: "3px 0 0 3px",
                    borderRight: "1px solid #3f4146"
                },
                className: "btn btn-primary",
                onClick: () => {
                    e.onClick("update")
                }
            }, "Update"), j.react.createElement("button", {
                style: {
                    borderRadius: "0",
                    borderLeft: "1px solid #2d2d2d",
                    borderRight: "1px solid #2d2d2d"
                },
                className: "btn btn-primary",
                onClick: () => {
                    e.onClick("save")
                }
            }, "Save"), j.react.createElement("button", {
                style: {
                    borderRadius: "0 3px 3px 0",
                    borderLeft: "1px solid #3f4146"
                },
                className: "btn btn-primary",
                onClick: () => {
                    e.onClick("detach")
                }
            }, "Detach"), j.react.createElement("span", {
                style: {
                    fontSize: "10px",
                    marginLeft: "5px"
                }
            }, "Unsaved changes are lost on detach"), j.react.createElement("div", {
                className: "help-text"
            }, "Press ", j.react.createElement("code", {
                className: "inline"
            }, "ctrl"), "+", j.react.createElement("span", {
                className: "inline"
            }, ","), " with the editor focused to access the editor's settings.")))))
        }
        onClick(e) {
            const t = this;
            switch (e) {
                case "update":
                    t.updateCss();
                    break;
                case "save":
                    t.saveCss();
                    break;
                case "detach":
                    t.detach()
            }
        }
        onChange(e, t) {
            switch (e) {
                case "live-update":
                    u["bda-css-0"] = t, xt.saveSettings()
            }
        }
        updateCss() {
            A.removeStyle("customcss"), A.addStyle("customcss", this.editor.session.getValue())
        }
        saveCss() {
            te.setBDData("bdcustomcss", btoa(this.editor.session.getValue()))
        }
        detach() {
            this.setState({
                detached: !0
            });
            const e = this.detachedRoot;
            e ? j.reactDom.render(this.detachedEditor, e) : console.log("FAILED TO INJECT ROOT: .app")
        }
        get detachedRoot() {
            const e = A.query("#bd-customcss-detach-container");
            return e || (this.injectDetachedRoot() ? this.detachedRoot : null)
        }
        injectDetachedRoot() {
            const e = A.query(".app, .app-2rEoOp");
            return !!e && (A.insertAfter(A.createElement('<div id="bd-customcss-detach-container">'), e), !0)
        }
        attach() {
            this.setState({
                detached: !1
            })
        }
    }
    class et extends j.reactComponent {
        constructor(e) {
            super(e), this.state = {
                hasError: !1
            }
        }
        componentDidCatch() {
            this.setState({
                hasError: !0
            })
        }
        render() {
            return this.state.hasError ? j.react.createElement("div", {
                className: "react-error"
            }, "Component Error") : this.props.children
        }
    }
    const tt = et.prototype.render;
    Object.defineProperty(et.prototype, "render", {
        enumerable: !1,
        configurable: !1,
        set: function() {
            console.warn("Addon policy for plugins #5 https://github.com/rauenzi/BetterDiscordApp/wiki/Addon-Policies#plugins")
        },
        get: () => tt
    });
    class nt extends j.reactComponent {
        constructor(e) {
            super(e)
        }
        static get displayName() {
            return "ContentColumn"
        }
        render() {
            return j.react.createElement("div", {
                className: "contentColumn-2hrIYH contentColumnDefault-1VQkGM content-column default"
            }, j.react.createElement("h2", {
                className: "ui-form-title h2 margin-reset margin-bottom-20"
            }, this.props.title), this.props.children)
        }
    }
    class st extends j.reactComponent {
        constructor(e) {
            super(e)
        }
        render() {
            return j.react.createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                fill: "#dcddde",
                className: "bd-reload " + this.props.className,
                onClick: this.props.onClick,
                style: {
                    width: this.props.size || "24px",
                    height: this.props.size || "24px"
                }
            }, j.react.createElement("path", {
                d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            }), j.react.createElement("path", {
                fill: "none",
                d: "M0 0h24v24H0z"
            }))
        }
    }
    const ot = j.React;
    class rt extends ot.Component {
        render() {
            const e = this.props.size || "24px";
            return ot.createElement("svg", {
                className: this.props.className || "",
                viewBox: "0 0 24 24",
                fill: "#FFFFFF",
                style: {
                    width: e,
                    height: e
                },
                onClick: this.props.onClick
            }, ot.createElement("path", {
                d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
            }), ot.createElement("path", {
                d: "M0 0h24v24H0z",
                fill: "none"
            }))
        }
    }
    const it = j.React;
    class at extends it.Component {
        render() {
            const e = this.props.size || "24px";
            return it.createElement("svg", {
                className: this.props.className || "",
                fill: "#FFFFFF",
                viewBox: "0 0 24 24",
                style: {
                    width: e,
                    height: e
                },
                onClick: this.props.onClick
            }, it.createElement("path", {
                fill: "none",
                d: "M0 0h24v24H0V0z"
            }), it.createElement("path", {
                d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"
            }), it.createElement("path", {
                fill: "none",
                d: "M0 0h24v24H0z"
            }))
        }
    }
    const ct = j.React,
        lt = j.anchorClasses;
    class dt extends j.reactComponent {
        constructor(e) {
            super(e), this.onChange = this.onChange.bind(this), this.showSettings = this.showSettings.bind(this), this.setInitialState(), this.hasSettings = this.props.addon.plugin && "function" == typeof this.props.addon.plugin.getSettingsPanel, this.settingsPanel = "", this.edit = this.edit.bind(this), this.delete = this.delete.bind(this), this.reload = this.reload.bind(this)
        }
        setInitialState() {
            this.state = {
                checked: this.props.enabled,
                settings: !1,
                reloads: 0
            }
        }
        showSettings() {
            this.hasSettings && this.setState({
                settings: !0
            })
        }
        closeSettings() {
            this.panelRef.current.innerHTML = "", this.setState({
                settingsOpen: !1
            })
        }
        componentDidUpdate() {
            this.state.settings && ("object" == typeof this.settingsPanel && this.refs.settingspanel.appendChild(this.settingsPanel), u["fork-ps-3"] && setImmediate(() => {
                const e = this.refs.cardNode,
                    t = e.closest(".scroller");
                if (!((e, t) => {
                        const n = e.scrollTop,
                            s = n + e.clientHeight,
                            o = t.offsetTop,
                            r = o + t.clientHeight;
                        return o < n || r > s
                    })(t, e)) return;
                const n = A.offset(e),
                    s = A.offset(t),
                    o = t.scrollTop,
                    r = n.top - s.top + t.scrollTop - 30;
                A.animate({
                    duration: 300,
                    update: function(e) {
                        t.scrollTop = r > o ? o + e * (r - o) : o - e * (o - r)
                    }
                })
            }))
        }
        getString(e) {
            return e ? "string" == typeof e ? e : e.toString() : "???"
        }
        get settingsComponent() {
            try {
                this.settingsPanel = this.props.addon.plugin.getSettingsPanel()
            } catch (e) {
                F.err("Plugins", "Unable to get settings panel for " + this.name + ".", e)
            }
            return j.react.createElement("div", {
                className: "bd-card bd-addon-card settings-open ui-switch-item",
                ref: "cardNode"
            }, j.react.createElement("div", {
                style: {
                    float: "right",
                    cursor: "pointer"
                },
                onClick: () => {
                    this.refs.settingspanel.innerHTML = "", this.setState({
                        settings: !1
                    })
                }
            }, j.react.createElement(Me, null)), "object" == typeof this.settingsPanel && j.react.createElement("div", {
                id: "plugin-settings-" + this.name,
                className: "plugin-settings",
                ref: "settingspanel"
            }), "object" != typeof this.settingsPanel && j.react.createElement("div", {
                id: "plugin-settings-" + this.name,
                className: "plugin-settings",
                ref: "settingspanel",
                dangerouslySetInnerHTML: {
                    __html: this.settingsPanel
                }
            }))
        }
        buildTitle(e, t, n) {
            const s = "{{name}} v{{version}} by {{author}}".split(/({{[A-Za-z]+}})/),
                o = s.findIndex(e => "{{name}}" == e);
            o && (s[o] = ct.createElement("span", {
                className: "name bda-name"
            }, e));
            const r = s.findIndex(e => "{{version}}" == e);
            o && (s[r] = ct.createElement("span", {
                className: "version bda-version"
            }, t));
            const i = s.findIndex(e => "{{author}}" == e);
            if (o) {
                const e = {
                    className: "author bda-author"
                };
                (n.link || n.id) && (e.className += ` ${lt.anchor} ${lt.anchorUnderlineOnHover}`, e.target = "_blank", n.link && (e.href = n.link), n.id && (e.onClick = () => {
                    j.LayerStack.popLayer(), j.openDM(n.id)
                })), s[i] = ct.createElement(n.link || n.id ? "a" : "span", e, n.name)
            }
            return s.flat()
        }
        makeLink(e, t) {
            const n = {
                className: "bda-link bda-link-website",
                target: "_blank"
            };
            return "string" == typeof t && (n.href = t), "function" == typeof t && (n.onClick = e => {
                e.preventDefault(), e.stopPropagation(), t()
            }), j.react.createElement("a", n, e)
        }
        makeButton(e, t, n) {
            return ct.createElement(we, {
                color: "black",
                side: "top",
                text: e
            }, ct.createElement("div", {
                className: "bd-addon-button",
                onClick: n
            }, t))
        }
        get links() {
            const e = [],
                t = this.props.addon;
            return t.website && e.push(this.makeLink("Website", t.website)), t.source && e.push(this.makeLink("Source", t.source)), t.invite && e.push(this.makeLink("Support Server", () => {
                const e = /\.gg\/(.*)$/;
                let n = t.invite;
                e.test(n) && (n = n.match(e)[1]), j.LayerStack.popLayer(), j.InviteActions.acceptInviteAndTransitionToInviteChannel(n)
            })), t.donate && e.push(this.makeLink("Donate", t.donate)), t.patreon && e.push(this.makeLink("Patreon", t.patreon)), e
        }
        get footer() {
            const e = this.links;
            return (e.length || this.hasSettings) && j.react.createElement("div", {
                className: "bd-card-footer bda-footer"
            }, j.react.createElement("span", {
                className: "bd-addon-links bda-links"
            }, ...e.map((t, n) => n < e.length - 1 ? [t, " | "] : t).flat()), this.hasSettings && j.react.createElement("button", {
                onClick: this.showSettings,
                className: "bd-button bda-settings-button",
                disabled: !this.state.checked
            }, "Settings"))
        }
        onChange() {
            this.props.toggle && this.props.toggle(this.name), this.setState({
                checked: !this.state.checked
            })
        }
        edit() {
            this.props.edit(this.name)
        }
        delete() {
            this.props.remove(this.name)
        }
        reload() {
            this.props.reload(this.name)
        }
        get name() {
            return this.getString(this.props.addon.plugin ? this.props.addon.plugin.getName() : this.props.addon.name)
        }
        get author() {
            return this.getString(this.props.addon.plugin ? this.props.addon.plugin.getAuthor() : this.props.addon.author)
        }
        get description() {
            return this.getString(this.props.addon.plugin ? this.props.addon.plugin.getDescription() : this.props.addon.description)
        }
        get version() {
            return this.getString(this.props.addon.plugin ? this.props.addon.plugin.getVersion() : this.props.addon.version)
        }
        render() {
            if (this.state.settings) return this.settingsComponent;
            const {
                authorId: e,
                authorLink: t
            } = this.props.addon;
            return j.react.createElement("div", {
                className: "bd-card bd-addon-card settings-closed ui-switch-item"
            }, j.react.createElement("div", {
                className: "bd-addon-header bda-header"
            }, j.react.createElement("div", {
                className: "bd-card-title bda-header-title"
            }, this.buildTitle(this.name, this.version, {
                name: this.author,
                id: e,
                link: t
            })), j.react.createElement("div", {
                className: "bd-addon-controls bda-controls"
            }, this.props.edit && this.makeButton("Edit", ct.createElement(rt, {
                className: "bd-icon"
            }), this.edit), this.props.remove && this.makeButton("Delete", ct.createElement(at, {
                className: "bd-icon"
            }), this.delete), this.props.reload && this.makeButton("Reload", ct.createElement(st, {
                className: "bd-icon"
            }), this.reload), ct.createElement(Ue, {
                onChange: this.onChange,
                checked: this.state.checked
            }))), j.react.createElement("div", {
                className: "bd-scroller-wrap bda-description-wrap scroller-wrap fade"
            }, j.react.createElement("div", {
                className: "bd-scroller bd-addon-description bda-description scroller"
            }, this.description)), this.footer)
        }
    }
    const ut = dt.prototype.render;
    Object.defineProperty(dt.prototype, "render", {
        enumerable: !1,
        configurable: !1,
        set: function() {
            console.warn("Addon policy for plugins #5 https://github.com/rauenzi/BetterDiscordApp/wiki/Addon-Policies#plugins")
        },
        get: () => ut
    });
    const pt = j.React;
    class ht extends pt.Component {
        render() {
            const e = this.props.size || "16px";
            return pt.createElement("svg", {
                className: this.props.className || "",
                fill: "#FFFFFF",
                viewBox: "0 0 24 24",
                style: {
                    width: e,
                    height: e
                }
            }, pt.createElement("path", {
                d: "M8.12 9.29L12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7c-.39-.39-.39-1.02 0-1.41.39-.38 1.03-.39 1.42 0z"
            }))
        }
    }
    const mt = j.React;
    class gt extends mt.Component {
        constructor(e) {
            super(e), this.state = {
                open: !1,
                value: this.props.value || this.props.options[0].value
            }, this.dropdown = mt.createRef(), this.onChange = this.onChange.bind(this), this.showMenu = this.showMenu.bind(this), this.hideMenu = this.hideMenu.bind(this)
        }
        showMenu(e) {
            e.preventDefault(), this.setState({
                open: !0
            }, () => {
                document.addEventListener("click", this.hideMenu)
            })
        }
        hideMenu() {
            this.setState({
                open: !1
            }, () => {
                document.removeEventListener("click", this.hideMenu)
            })
        }
        onChange(e) {
            this.setState({
                value: e
            }), this.props.onChange && this.props.onChange(e)
        }
        get selected() {
            return this.props.options.find(e => e.value == this.state.value)
        }
        get options() {
            const e = this.selected;
            return mt.createElement("div", {
                className: "bd-select-options"
            }, this.props.options.map(t => mt.createElement("div", {
                className: "bd-select-option" + (e.value == t.value ? " selected" : ""),
                onClick: this.onChange.bind(this, t.value)
            }, t.label)))
        }
        render() {
            const e = "transparent" == this.props.style ? " bd-select-transparent" : "",
                t = this.state.open ? " menu-open" : "";
            return mt.createElement("div", {
                className: `bd-select${e}${t}`,
                onClick: this.showMenu,
                ref: this.dropdown
            }, mt.createElement("div", {
                className: "bd-select-value"
            }, this.selected.label), mt.createElement(ht, {
                className: "bd-select-arrow"
            }), this.state.open && this.options)
        }
    }
    const ft = j.React;
    class bt extends ft.Component {
        render() {
            const e = this.props.size || "16px";
            return ft.createElement("svg", {
                className: this.props.className || "",
                fill: "#FFFFFF",
                viewBox: "0 0 24 24",
                style: {
                    width: e,
                    height: e
                }
            }, ft.createElement("path", {
                fill: "none",
                d: "M0 0h24v24H0V0z"
            }), ft.createElement("path", {
                d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
            }))
        }
    }
    const yt = j.React;
    class vt extends yt.Component {
        render() {
            return yt.createElement("div", {
                className: "bd-search-wrapper"
            }, yt.createElement("input", {
                onChange: this.props.onChange,
                onKeyDown: this.props.onKeyDown,
                type: "text",
                className: "bd-search",
                placeholder: this.props.placeholder,
                maxLength: "50"
            }), yt.createElement(bt, null))
        }
    }

    function Ct() {
        return (Ct = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
            }
            return e
        }).apply(this, arguments)
    }
    const wt = B("Tooltip"),
        Et = j.react;
    class kt extends j.reactComponent {
        constructor(e) {
            super(e), this.state = {
                sort: "name",
                ascending: !0,
                query: ""
            }, this.isPlugins = "plugins" == this.props.type, this.cookie = this.isPlugins ? x : D, this.manager = this.isPlugins ? R : H, this.sort = this.sort.bind(this), this.reverse = this.reverse.bind(this), this.search = this.search.bind(this)
        }
        openFolder() {
            const e = n(0).shell;
            (e.openPath || e.openItem)(this.isPlugins ? Z.pluginsFolder : Z.themesFolder)
        }
        edit(e) {
            console.log(e), this.manager.edit(e)
        }
        async delete(e) {
            await this.confirmDelete(e) && this.manager.delete(e)
        }
        confirmDelete(e) {
            return new Promise(t => {
                jt.showConfirmationModal("Are You Sure?", `Are you sure you want to delete ${e}?`, {
                    danger: !0,
                    confirmText: "Delete",
                    onConfirm: () => {
                        t(!0)
                    },
                    onCancel: () => {
                        t(!1)
                    }
                })
            })
        }
        get sortOptions() {
            return [{
                label: "Name",
                value: "name"
            }, {
                label: "Author",
                value: "author"
            }, {
                label: "Version",
                value: "version"
            }, {
                label: "Recently Added",
                value: "added"
            }, {
                label: "Last Modified",
                value: "modified"
            }, {
                label: "File Size",
                value: "size"
            }]
        }
        get directions() {
            return [{
                label: "Ascending",
                value: !0
            }, {
                label: "Descending",
                value: !1
            }]
        }
        reverse(e) {
            this.setState({
                ascending: e
            })
        }
        sort(e) {
            this.setState({
                sort: e
            })
        }
        search(e) {
            this.setState({
                query: e.target.value.toLocaleLowerCase()
            })
        }
        getProps(e) {
            return {
                key: this.getName(e),
                enabled: this.cookie[this.getName(e)],
                toggle: this.manager.toggle.bind(this.manager),
                remove: this.delete.bind(this),
                addon: e
            }
        }
        getString(e) {
            return e ? "string" == typeof e ? e : e.toString() : "???"
        }
        getAddons() {
            const e = this.props.list.sort((e, t) => {
                const n = this.state.sort.charAt(0).toUpperCase() + this.state.sort.slice(1),
                    s = e.plugin && e.plugin["get" + n] ? this.getString(e.plugin["get" + n]()) : e[this.state.sort],
                    o = t.plugin && t.plugin["get" + n] ? this.getString(t.plugin["get" + n]()) : t[this.state.sort];
                return "string" == typeof s ? s.toLocaleLowerCase().localeCompare(o.toLocaleLowerCase()) : s > o ? 1 : o > s ? -1 : 0
            });
            this.state.ascending || e.reverse();
            const t = [];
            for (let n = 0; n < e.length; n++) {
                const s = e[n];
                if (this.state.query) {
                    let e = null;
                    const t = this.getName(s),
                        n = this.getAuthor(s),
                        o = this.getDescription(s),
                        r = this.getVersion(s);
                    if (t && (e = t.toLocaleLowerCase().includes(this.state.query)), n && (e = e || n.toLocaleLowerCase().includes(this.state.query)), o && (e = e || o.toLocaleLowerCase().includes(this.state.query)), r && (e = e || r.toLocaleLowerCase().includes(this.state.query)), !e) continue
                }
                const o = this.getProps(s);
                t.push(Et.createElement(et, null, Et.createElement(dt, Ct({}, o, {
                    reload: !u["fork-ps-5"] && this.manager.reload.bind(this.manager)
                }))))
            }
            return t
        }
        getName(e) {
            return this.getString(e.plugin ? e.plugin.getName() : e.name)
        }
        getAuthor(e) {
            return this.getString(e.plugin ? e.plugin.getAuthor() : e.author)
        }
        getDescription(e) {
            return this.getString(e.plugin ? e.plugin.getDescription() : e.description)
        }
        getVersion(e) {
            return this.getString(e.plugin ? e.plugin.getVersion() : e.version)
        }
        render() {
            const e = Et.createElement(wt, {
                    color: "black",
                    position: "top",
                    text: "Reload List"
                }, e => Et.createElement(st, Ct({}, e, {
                    className: "bd-icon bd-reload bd-reload-header",
                    size: "18px",
                    onClick: async () => {
                        this.isPlugins ? R.updatePluginList() : H.updateThemeList(), this.forceUpdate()
                    }
                }))),
                t = this.getAddons();
            return Et.createElement(Fe, {
                contentColumn: !0,
                fade: !0,
                dark: !0
            }, Et.createElement(nt, {
                title: `${this.props.type.toUpperCase()}—${t.length}`
            }, Et.createElement("button", {
                key: "folder-button",
                className: "bd-button bd-pfbtn",
                onClick: this.openFolder.bind(this)
            }, "Open ", this.isPlugins ? "Plugin" : "Theme", " Folder"), !u["fork-ps-5"] && e, Et.createElement("div", {
                className: "bd-controls bd-addon-controls"
            }, Et.createElement(vt, {
                onChange: this.search,
                placeholder: `Search ${this.props.type}...`
            }), Et.createElement("div", {
                className: "bd-addon-dropdowns"
            }, Et.createElement("div", {
                className: "bd-select-wrapper"
            }, Et.createElement("label", {
                className: "bd-label"
            }, "Sort by:"), Et.createElement(gt, {
                options: this.sortOptions,
                onChange: this.sort,
                style: "transparent"
            })), Et.createElement("div", {
                className: "bd-select-wrapper"
            }, Et.createElement("label", {
                className: "bd-label"
            }, "Order:"), Et.createElement(gt, {
                options: this.directions,
                onChange: this.reverse,
                style: "transparent"
            })))), Et.createElement("div", {
                className: "bda-slist bd-addon-list"
            }, t)), Et.createElement(Be, {
                key: "tools"
            }))
        }
    }
    const St = kt.prototype.render;
    Object.defineProperty(kt.prototype, "render", {
        enumerable: !1,
        configurable: !1,
        set: function() {
            console.warn("Addon policy for plugins #5 https://github.com/rauenzi/BetterDiscordApp/wiki/Addon-Policies#plugins")
        },
        get: () => St
    });
    var xt = new class {
        constructor() {
            this.sideBarOnClick = this.sideBarOnClick.bind(this), this.onChange = this.onChange.bind(this), this.updateSettings = this.updateSettings.bind(this), this.sidebar = new Ee(this.sideBarOnClick), this.showOriginal = this.showOriginal.bind(this)
        }
        get root() {
            const e = A.query("#bd-settingspane-container");
            return e || (this.injectRoot() ? this.root : null)
        }
        injectRoot() {
            const e = A.query(".layer-3QrUeG .standardSidebarView-3F1I7i, .layer-3QrUeG .ui-standard-sidebar-view");
            if (!e) return !1;
            const t = A.createElement('<div id="bd-settingspane-container" class="contentRegion-3nDuYy content-region">');
            return e.append(t), F.onRemoved(t, () => {
                j.reactDom.unmountComponentAtNode(t)
            }), !0
        }
        get coreSettings() {
            const e = this.getSettings("core");
            return [...new Set(e.map(e => e.category))].map(t => ({
                title: t,
                settings: e.filter(e => e.category == t)
            }))
        }
        get emoteSettings() {
            return this.getSettings("emote")
        }
        getSettings(e) {
            return Object.keys(l).reduce((t, n) => {
                const s = l[n];
                return s.cat === e && s.implemented && !s.hidden && (s.text = n, t.push(s)), t
            }, [])
        }
        sideBarOnClick(e) {
            switch (A.query(".contentRegion-3nDuYy, .content-region").style.display = "none", this.root.style.display = "", e) {
                case "core":
                    this.renderCoreSettings();
                    break;
                case "emotes":
                    this.renderEmoteSettings();
                    break;
                case "customcss":
                    this.renderCustomCssEditor();
                    break;
                case "plugins":
                case "themes":
                    this.renderAddonPane(e)
            }
        }
        onClick() {}
        onChange(e, t) {
            this.updateSettings(e, t)
        }
        updateSettings(e, t) {
            u[e] = t, "bda-gs-2" == e && (t ? A.addClass(document.body, "bd-minimal") : A.removeClass(document.body, "bd-minimal")), "bda-gs-3" == e && (t ? A.addClass(document.body, "bd-minimal-chan") : A.removeClass(document.body, "bd-minimal-chan")), "bda-gs-1" == e && (t ? _e.addButton() : _e.removeButton()), "bda-gs-4" == e && (t ? He.start() : He.stop()), "bda-gs-5" == e && (t ? A.addClass(A.query("#app-mount"), "bda-dark") : A.removeClass(A.query("#app-mount"), "bda-dark")), t && "bda-gs-6" == e && Se.inject24Hour(), "bda-gs-7" == e && (t ? ke.injectColoredText() : ke.removeColoredText()), "fork-ps-4" == e && (t ? $e.start() : $e.stop()), "fork-ps-5" == e && (t ? (Z.watchContent("plugin"), Z.watchContent("theme")) : (Z.unwatchContent("plugin"), Z.unwatchContent("theme"))), "fork-wp-1" == e && (F.setWindowPreference("transparent", t), t ? F.setWindowPreference("backgroundColor", null) : F.setWindowPreference("backgroundColor", "#2f3136")), "bda-gs-8" == e && (t ? We.startDebugListener() : We.stopDebugListener()), "fork-dm-1" == e && (t ? We.startCopySelector() : We.stopCopySelector()), "reactDevTools" === e && (t ? Le.start() : Le.stop()), this.saveSettings()
        }
        async initializeSettings() {
            u.reactDevTools && Le.start(), u["bda-gs-2"] && A.addClass(document.body, "bd-minimal"), u["bda-gs-3"] && A.addClass(document.body, "bd-minimal-chan"), u["bda-gs-1"] && _e.addButton(), u["bda-gs-4"] && He.start(), u["bda-gs-5"] && A.addClass(A.query("#app-mount"), "bda-dark"), u["bda-gs-6"] && Se.inject24Hour(), u["bda-gs-7"] && ke.injectColoredText(), u["fork-ps-4"] && $e.start(), u["fork-ps-5"] && (Z.watchContent("plugin"), Z.watchContent("theme")), u["bda-gs-8"] && We.startDebugListener(), u["fork-dm-1"] && We.startCopySelector(), this.saveSettings()
        }
        saveSettings() {
            te.setSettingGroup("settings", u)
        }
        loadSettings() {
            Object.assign(u, te.getSettingGroup("settings"))
        }
        showOriginal() {
            j.reactDom.unmountComponentAtNode(this.root), this.root.style.display = "none", A.query(".contentRegion-3nDuYy, .content-region").style.display = ""
        }
        renderSidebar() {
            const e = document.querySelectorAll("[class*='side-'] > [class*='item-']");
            for (const t of e) t.removeEventListener("click", this.showOriginal), t.addEventListener("click", this.showOriginal);
            this.sidebar.render()
        }
        get coreComponent() {
            return j.react.createElement(Fe, {
                contentColumn: !0,
                fade: !0,
                dark: !0
            }, j.react.createElement(Qe, {
                key: "cspanel",
                onChange: this.onChange,
                sections: this.coreSettings
            }), j.react.createElement(Be, {
                key: "tools"
            }))
        }
        get emoteComponent() {
            return j.react.createElement(Fe, {
                contentColumn: !0,
                fade: !0,
                dark: !0
            }, j.react.createElement(Ze, {
                key: "espanel",
                title: "Emote Settings",
                onChange: this.onChange,
                settings: this.emoteSettings,
                button: {
                    title: "Clear Emote Cache",
                    onClick: () => {
                        ce.clearEmoteData(), ce.init(), re.init()
                    }
                }
            }), j.react.createElement(Be, {
                key: "tools"
            }))
        }
        get customCssComponent() {
            return j.react.createElement(Fe, {
                contentColumn: !0,
                fade: !0,
                dark: !0
            }, j.react.createElement(Xe, {
                key: "csseditor"
            }), j.react.createElement(Be, {
                key: "tools"
            }))
        }
        renderCoreSettings() {
            const e = this.root;
            if (!e) return F.err("SettingsPanel", "FAILED TO LOCATE ROOT: .layer-3QrUeG .standardSidebarView-3F1I7i");
            j.reactDom.render(this.coreComponent, e)
        }
        renderEmoteSettings() {
            const e = this.root;
            if (!e) return F.err("SettingsPanel", "FAILED TO LOCATE ROOT: .layer-3QrUeG .standardSidebarView-3F1I7i");
            j.reactDom.render(this.emoteComponent, e)
        }
        renderCustomCssEditor() {
            const e = this.root;
            if (!e) return F.err("SettingsPanel", "FAILED TO LOCATE ROOT: .layer-3QrUeG .standardSidebarView-3F1I7i");
            j.reactDom.render(this.customCssComponent, e)
        }
        renderAddonPane(e) {
            if (!this.root) return F.err("SettingsPanel", "FAILED TO LOCATE ROOT: .layer-3QrUeG .standardSidebarView-3F1I7i");
            class t extends j.react.Component {
                constructor(e) {
                    super(e), this.prefix = this.props.type.replace("s", ""), this.onChange = this.onChange.bind(this)
                }
                componentDidMount() {
                    I.on(this.prefix + "-reloaded", this.onChange), I.on(this.prefix + "-loaded", this.onChange), I.on(this.prefix + "-unloaded", this.onChange)
                }
                componentWillUnmount() {
                    I.off(this.prefix + "-reloaded", this.onChange), I.off(this.prefix + "-loaded", this.onChange), I.off(this.prefix + "-unloaded", this.onChange)
                }
                onChange() {
                    this.props.onChange(this.props.type)
                }
                render() {
                    return this.props.children
                }
            }
            const n = t.prototype.render;
            Object.defineProperty(t.prototype, "render", {
                enumerable: !1,
                configurable: !1,
                set: function() {
                    console.warn("Addon policy for plugins #5 https://github.com/rauenzi/BetterDiscordApp/wiki/Addon-Policies#plugins")
                },
                get: () => n
            });
            const s = "plugins" === e ? Object.values(S) : Object.values(k);
            return j.reactDom.render(j.react.createElement(t, {
                type: e,
                onChange: this.sideBarOnClick
            }, j.react.createElement(kt, {
                type: e,
                list: s
            })), this.root)
        }
    };
    class Dt extends j.reactComponent {
        render() {
            return j.react.createElement("svg", {
                height: "100%",
                width: this.props.size || "16px",
                className: "bd-logo " + this.props.className,
                style: {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                },
                viewBox: "0 0 2000 2000"
            }, j.react.createElement("metadata", null), j.react.createElement("defs", null, j.react.createElement("filter", {
                id: "shadow1"
            }, j.react.createElement("feDropShadow", {
                dx: "20",
                dy: "0",
                stdDeviation: "20",
                "flood-color": "rgba(0,0,0,0.35)"
            })), j.react.createElement("filter", {
                id: "shadow2"
            }, j.react.createElement("feDropShadow", {
                dx: "15",
                dy: "0",
                stdDeviation: "20",
                "flood-color": "rgba(255,255,255,0.15)"
            })), j.react.createElement("filter", {
                id: "shadow3"
            }, j.react.createElement("feDropShadow", {
                dx: "10",
                dy: "0",
                stdDeviation: "20",
                "flood-color": "rgba(0,0,0,0.35)"
            }))), j.react.createElement("g", null, j.react.createElement("path", {
                style: {
                    filter: "url(#shadow3)"
                },
                d: "M1195.44+135.442L1195.44+135.442L997.6+136.442C1024.2+149.742+1170.34+163.542+1193.64+179.742C1264.34+228.842+1319.74+291.242+1358.24+365.042C1398.14+441.642+1419.74+530.642+1422.54+629.642L1422.54+630.842L1422.54+632.042C1422.54+773.142+1422.54+1228.14+1422.54+1369.14L1422.54+1370.34L1422.54+1371.54C1419.84+1470.54+1398.24+1559.54+1358.24+1636.14C1319.74+1709.94+1264.44+1772.34+1193.64+1821.44C1171.04+1837.14+1025.7+1850.54+1000+1863.54L1193.54+1864.54C1539.74+1866.44+1864.54+1693.34+1864.54+1296.64L1864.54+716.942C1866.44+312.442+1541.64+135.442+1195.44+135.442Z",
                fill: "#171717",
                opacity: "1"
            }), j.react.createElement("path", {
                style: {
                    filter: "url(#shadow2)"
                },
                d: "M1695.54+631.442C1685.84+278.042+1409.34+135.442+1052.94+135.442L361.74+136.442L803.74+490.442L1060.74+490.442C1335.24+490.442+1335.24+835.342+1060.74+835.342L1060.74+1164.84C1150.22+1164.84+1210.53+1201.48+1241.68+1250.87C1306.07+1353+1245.76+1509.64+1060.74+1509.64L361.74+1863.54L1052.94+1864.54C1409.24+1864.54+1685.74+1721.94+1695.54+1368.54C1695.54+1205.94+1651.04+1084.44+1572.64+999.942C1651.04+915.542+1695.54+794.042+1695.54+631.442Z",
                fill: "#3E82E5",
                opacity: "1"
            }), j.react.createElement("path", {
                style: {
                    filter: "url(#shadow1)"
                },
                d: "M1469.25+631.442C1459.55+278.042+1183.05+135.442+826.65+135.442L135.45+135.442L135.45+1004C135.45+1004+135.427+1255.21+355.626+1255.21C575.825+1255.21+575.848+1004+575.848+1004L577.45+490.442L834.45+490.442C1108.95+490.442+1108.95+835.342+834.45+835.342L664.65+835.342L664.65+1164.84L834.45+1164.84C923.932+1164.84+984.244+1201.48+1015.39+1250.87C1079.78+1353+1019.47+1509.64+834.45+1509.64L135.45+1509.64L135.45+1864.54L826.65+1864.54C1182.95+1864.54+1459.45+1721.94+1469.25+1368.54C1469.25+1205.94+1424.75+1084.44+1346.35+999.942C1424.75+915.542+1469.25+794.042+1469.25+631.442Z",
                fill: "#FFFFFF",
                opacity: "1"
            })))
        }
    }
    const Nt = [{
            name: "jquery",
            type: "script",
            url: "//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js",
            backup: "//cdn.jsdelivr.net/gh/jquery/jquery@2.0.0/jquery.min.js"
        }, {
            name: "bd-stylesheet",
            type: "style",
            url: "//cdn.staticaly.com/gh/rauenzi/BetterDiscordApp/{{hash}}/dist/style.css",
            backup: "//rauenzi.github.io/BetterDiscordApp/dist/style.css"
        }],
        {
            ipcRenderer: Pt
        } = n(0);

    function Tt() {
        Pt.invoke("bd-config").then(e => {
            this.hasStarted || (Object.assign(m, e), this.init())
        }), Pt.invoke("bd-injector-info").then(e => {
            m.version = e.version;
            n(3).get({
                url: "https://gitcdn.xyz/repo/rauenzi/BetterDiscordApp/injector/package.json",
                json: !0
            }, (e, t, n) => {
                let s = "0.6.1";
                e || 200 != t.statusCode || (s = n.version || s), m.latestVersion = s, this.checkInjectorUpdate()
            })
        })
    }
    Tt.prototype.setConfig = function(e) {
        this.hasStarted || Object.assign(m, e)
    }, Tt.prototype.init = async function() {
        if (this.hasStarted) return;
        if (this.hasStarted = !0, !Array.prototype.flat) return void F.alert("Not Supported", "BetterDiscord v" + a + " does not support this old version (" + r + ") of Discord. Please update your Discord installation before proceeding.");
        if (m.version < i) return void F.alert("Not Supported", "BetterDiscord v" + m.version + " (your version) is not supported by the latest js (" + a + ").<br><br> Please download the latest version from <a href='https://github.com/rauenzi/BetterDiscordApp/releases/latest' target='_blank'>GitHub</a>");
        if (window.ED) return void F.alert("Not Supported", "BandagedBD does not work with EnhancedDiscord. Please uninstall one of them.");
        if (window.WebSocket && window.WebSocket.name && window.WebSocket.name.includes("Patched")) return void F.alert("Not Supported", "BandagedBD does not work with Powercord. Please uninstall one of them.");
        F.log("Startup", "Initializing Settings"), this.initSettings(), F.log("Startup", "Initializing EmoteModule"), window.emotePromise = ce.init().then(() => {
            ce.initialized = !0, F.log("Startup", "Initializing QuickEmoteMenu"), re.init()
        }), await this.injectExternals(), await this.checkForGuilds(), j.initialize(), F.log("Startup", "Updating Settings"), xt.initializeSettings(), F.log("Startup", "Loading Plugins"), R.loadPlugins(), F.log("Startup", "Loading Themes"), H.loadThemes(), A.addStyle("customcss", atob(te.getBDData("bdcustomcss"))), window.addEventListener("beforeunload", (function() {
            u["bda-dc-0"] && document.querySelector(".btn.btn-disconnect").click()
        })), F.log("Startup", "Removing Loading Icon"), document.getElementsByClassName("bd-loaderv2").length && document.getElementsByClassName("bd-loaderv2")[0].remove(), F.log("Startup", "Initializing Main Observer"), this.initObserver(), u["fork-ps-1"] && (F.log("Startup", "Collecting Startup Errors"), F.showContentErrors({
            plugins: p,
            themes: h
        }));
        const e = te.getBDData("version");
        a > e && (c && this.showChangelogModal(c), te.setBDData("version", a)), F.suppressErrors(this.patchSocial.bind(this), "BD Social Patch")(), F.suppressErrors(this.patchGuildPills.bind(this), "BD Guild Pills Patch")(), F.suppressErrors(this.patchGuildListItems.bind(this), "BD Guild List Items Patch")(), F.suppressErrors(this.patchGuildSeparator.bind(this), "BD Guild Separator Patch")(), F.suppressErrors(this.patchMessageHeader.bind(this), "BD Badge Chat Patch")(), F.suppressErrors(this.patchMemberList.bind(this), "BD Badge Member List Patch")()
    }, Tt.prototype.checkForGuilds = function() {
        let e = 0;
        return new Promise(t => {
            const n = function() {
                const s = j.guildClasses.wrapper.split(" ")[0];
                document.querySelectorAll("." + s).length > 0 && e++;
                const o = j.guildClasses.listItem.split(" ")[0],
                    r = j.guildClasses.blobContainer.split(" ")[0];
                return document.querySelectorAll(`.${s} .${o} .${r}`).length > 0 || e >= 50 ? t(m.deferLoaded = !0) : void setTimeout(n, 100)
            };
            "loading" != document.readyState && setTimeout(n, 100), document.addEventListener("DOMContentLoaded", () => {
                setTimeout(n, 100)
            })
        })
    }, Tt.prototype.injectExternals = async function() {
        if (await A.addScript("ace-script", "https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.9/ace.js"), window.require.original && (window.require = window.require.original), window.$ && window.jQuery) return;
        const e = F.formatString(Nt[0].url, {
            repo: m.repo,
            hash: m.hash,
            minified: m.minified ? ".min" : "",
            localServer: m.localServer
        });
        try {
            await A.addScript("jquery", e)
        } catch (e) {
            try {
                const e = F.formatString(Nt[0].backup, {
                    minified: m.minified ? ".min" : ""
                });
                await A.addScript("jquery", e)
            } catch (e) {
                F.alert("jQuery Not Loaded", "Unable to load jQuery, some plugins may fail to work. Proceed at your own risk.")
            }
        }
        document.head.append(A.createElement(`<link rel="stylesheet" href=${F.formatString(Nt[1].url,{repo:m.repo,hash:m.hash,minified:m.minified?".min":"",localServer:m.localServer})}>`))
    }, Tt.prototype.initSettings = function() {
        if (te.initialize(), te.getSettingGroup("settings")) {
            xt.loadSettings();
            for (const e in d) null == u[e] && (u[e] = d[e], xt.saveSettings())
        } else Object.assign(u, d), xt.saveSettings()
    }, Tt.prototype.initObserver = function() {
        new MutationObserver(e => {
            for (let t = 0, n = e.length; t < n; t++) {
                const n = e[t];
                if (void 0 !== R && R.rawObserver(n), !(n.addedNodes.length && n.addedNodes[0] instanceof Element)) continue;
                const s = n.addedNodes[0];
                s.classList.contains("layer-3QrUeG") && (s.getElementsByClassName("guild-settings-base-section").length && s.setAttribute("layer-id", "server-settings"), s.getElementsByClassName("socialLinks-3jqNFy").length && (s.setAttribute("layer-id", "user-settings"), s.setAttribute("id", "user-settings"), document.getElementById("bd-settings-sidebar") || xt.renderSidebar())), s.parentElement == document.body && s.querySelector("#ace_settingsmenu") && (s.id = "ace_settingsmenu_container"), s.classList.contains("layer-v9HyYc") && s.getElementsByClassName("emojiPicker-3m1S-j").length && !s.querySelector(".emojiPicker-3m1S-j").parentElement.classList.contains("animatorLeft-1EQxU0") && re.obsCallback(s)
            }
        }).observe(document, {
            childList: !0,
            subtree: !0
        })
    }, Tt.prototype.showChangelogModal = function(e = {}) {
        return F.showChangelogModal(e)
    }, Tt.prototype.alert = function(e, t) {
        return F.alert(e, t)
    }, Tt.prototype.patchSocial = function() {
        if (this.socialPatch) return;
        const e = T(e => "TabBar" == e.displayName),
            t = T(e => "Anchor" == e.displayName);
        e && (this.socialPatch = F.monkeyPatch(e.prototype, "render", {
            after: e => {
                const n = e.returnValue.props.children;
                if (!n || !n.length || n.length < 3) return;
                if ("Separator" !== n[n.length - 3].type.displayName) return;
                if (!n[n.length - 2].type.toString().includes("socialLinks")) return;
                if (t) {
                    const e = n[n.length - 2].type,
                        s = function() {
                            const n = e(...arguments);
                            return n.props.children.push(j.React.createElement(we, {
                                color: "black",
                                side: "top",
                                text: "BandagedBD"
                            }, j.React.createElement(t, {
                                className: "bd-social-link",
                                href: "https://github.com/rauenzi/BetterDiscordApp",
                                title: "BandagedBD",
                                target: "_blank"
                            }, j.React.createElement(Dt, {
                                size: "16px",
                                className: "bd-social-logo"
                            })))), n
                        };
                    n[n.length - 2].type = s
                }
                const s = j.react.createElement("div", {
                        className: "colorMuted-HdFt4q size12-3cLvbJ"
                    }, "Injector " + m.version),
                    o = j.react.createElement("div", {
                        className: "colorMuted-HdFt4q size12-3cLvbJ"
                    }, `BBD ${a} `),
                    r = n[n.length - 1].type;
                n[n.length - 1].type = function() {
                    const e = r(...arguments);
                    return e.props.children.splice(e.props.children.length - 1, 0, s), e.props.children.splice(1, 0, o), e
                }
            }
        }))
    };
    Tt.prototype.patchGuildListItems = function() {
        if (this.guildListItemsPatch) return;
        const e = function() {
                const e = M("wrapper", "unreadMentionsBar"),
                    t = M("guildsError", "selected"),
                    n = M("blobContainer");
                return Object.assign({}, e, t, n)
            }(),
            t = e.listItem.split(" ")[0],
            n = e.blobContainer.split(" ")[0],
            s = j.getInternalInstance(document.querySelector(`.${t} .${n}`).parentElement).return.type;
        s && (this.guildListItemsPatch = F.monkeyPatch(s.prototype, "render", {
            after: e => {
                if (e.returnValue && e.thisObject) {
                    const t = e.returnValue,
                        n = e.thisObject.props;
                    return t.props.className += " bd-guild", n.unread && (t.props.className += " bd-unread"), n.selected && (t.props.className += " bd-selected"), n.audio && (t.props.className += " bd-audio"), n.video && (t.props.className += " bd-video"), n.badge && (t.props.className += " bd-badge"), n.animatable && (t.props.className += " bd-animatable"), t
                }
            }
        }))
    }, Tt.prototype.patchGuildPills = function() {
        if (this.guildPillPatch) return;
        const e = T(e => e.default && !e.default.displayName && e.default.toString && e.default.toString().includes("translate3d"));
        e && (this.guildPillPatch = F.monkeyPatch(e, "default", {
            after: e => {
                const t = e.methodArguments[0];
                return t.unread && (e.returnValue.props.className += " bd-unread"), t.selected && (e.returnValue.props.className += " bd-selected"), t.hovered && (e.returnValue.props.className += " bd-hovered"), e.returnValue
            }
        }))
    }, Tt.prototype.patchGuildSeparator = function() {
        if (this.guildSeparatorPatch) return;
        const e = B("Guilds"),
            t = M("renderListItem");
        if (!t || !e) return;
        const n = function() {
            const e = t.Separator(...arguments);
            return e.props.className += " bd-guild-separator", e
        };
        this.guildSeparatorPatch = F.monkeyPatch(e.prototype, "render", {
            after: e => {
                e.returnValue.props.children[1].props.children[3].type = n
            }
        })
    }, Tt.prototype.patchMessageHeader = function() {
        if (this.messageHeaderPatch) return;
        const e = M("MessageTimestamp"),
            t = T(e => "Anchor" == e.displayName);
        t && e && e.default && (this.messageHeaderPatch = F.monkeyPatch(e, "default", {
            after: e => {
                const n = F.getNestedProp(e.methodArguments[0], "message.author"),
                    s = F.getNestedProp(e.returnValue, "props.children.1.props.children.1.props.children");
                s && n && n.id && "249746236008169473" === n.id && Array.isArray(s) && s.push(j.React.createElement(we, {
                    color: "black",
                    side: "top",
                    text: "BandagedBD Developer"
                }, j.React.createElement(t, {
                    className: "bd-chat-badge",
                    href: "https://github.com/rauenzi/BetterDiscordApp",
                    title: "BandagedBD",
                    target: "_blank"
                }, j.React.createElement(Dt, {
                    size: "16px",
                    className: "bd-logo"
                }))))
            }
        }))
    }, Tt.prototype.patchMemberList = function() {
        if (this.memberListPatch) return;
        const e = B("MemberListItem"),
            t = T(e => "Anchor" == e.displayName);
        t && e && e.prototype && e.prototype.renderDecorators && (this.memberListPatch = F.monkeyPatch(e.prototype, "renderDecorators", {
            after: e => {
                const n = F.getNestedProp(e.thisObject, "props.user"),
                    s = F.getNestedProp(e.returnValue, "props.children");
                s && n && n.id && "249746236008169473" === n.id && Array.isArray(s) && s.push(j.React.createElement(we, {
                    color: "black",
                    side: "top",
                    text: "BandagedBD Developer"
                }, j.React.createElement(t, {
                    className: "bd-member-badge",
                    href: "https://github.com/rauenzi/BetterDiscordApp",
                    title: "BandagedBD",
                    target: "_blank"
                }, j.React.createElement(Dt, {
                    size: "16px",
                    className: "bd-logo"
                }))))
            }
        }))
    }, Tt.prototype.checkInjectorUpdate = function() {
        const e = m.updater ? m.updater.LatestVersion : m.latestVersion;
        e > m.version && F.showConfirmationModal("Update Available", [`There is an update available for BandagedBD's Injector (${e}).`, "You can either update and restart now, or later."], {
            confirmText: "Update Now",
            cancelText: "Maybe Later",
            onConfirm: async () => {
                const e = () => {
                    F.alert("Could Not Update", "Unable to update automatically, please download the installer and reinstall normally.<br /><br /><a href='https://github.com/rauenzi/BetterDiscordApp/releases/latest' target='_blank'>Download Installer</a>")
                };
                try {
                    if (!await this.updateInjector()) return e();
                    const t = n(0).remote.app;
                    t.relaunch(), t.exit()
                } catch (t) {
                    e()
                }
            }
        })
    }, Tt.prototype.updateInjector = async function() {
        const e = te.injectionPath;
        if (!e) return !1;
        const t = n(2),
            s = n(1),
            o = n(6),
            r = n(7),
            i = n(8),
            a = n(3),
            c = s.resolve(e, ".."),
            l = s.basename(e),
            d = "https://github.com/rauenzi/BetterDiscordApp/archive/injector.zip",
            u = s.resolve(c, "injector.zip"),
            p = s.resolve(c, "BetterDiscordApp-injector");
        F.log("InjectorUpdate", "Downloading " + d);
        let h = await new Promise(e => {
            a.get({
                url: d,
                encoding: null
            }, async (n, s, o) => {
                if (n || 200 !== s.statusCode) return e(!1);
                await new Promise(e => t.exists(u, e)) && await new Promise(e => t.rename(u, `${u}.bak${Math.round(performance.now())}`, e)), F.log("InjectorUpdate", "Writing " + u), t.writeFile(u, o, t => e(!t))
            })
        });
        if (!h) return h;
        await new Promise(e => t.exists(p, e)) && await new Promise(e => t.rename(p, `${p}.bak${Math.round(performance.now())}`, e));
        const m = await new Promise(e => r.open(u, {
            lazyEntries: !0
        }, (t, n) => e(n)));
        m.on("entry", (function(e) {
            if (e.fileName.endsWith("/")) return m.readEntry();
            F.log("InjectorUpdate", "Extracting " + e.fileName);
            const n = s.resolve(c, e.fileName);
            i.sync(s.dirname(n)), m.openReadStream(e, (function(e, s) {
                if (e) return h = !1;
                s.on("end", (function() {
                    m.readEntry()
                })), s.pipe(t.createWriteStream(n))
            }))
        })), m.readEntry(), await new Promise(e => m.once("end", e));
        const g = s.resolve(c, `${l}.bak${Math.round(performance.now())}`);
        return await new Promise(n => t.rename(e, g, n)), F.log("InjectorUpdate", `Renaming ${s.basename(p)} to ${l}`), h = await new Promise(n => t.rename(p, e, e => n(!e))), h ? h ? (await new Promise(e => o(g, e)), await new Promise(e => t.unlink(u, e)), F.log("InjectorUpdate", "Injector Updated!"), h) : (F.err("InjectorUpdate", "Something went wrong... restoring backups."), await new Promise(e => o(p, e)), await new Promise(n => t.rename(g, e, n)), h) : (F.err("InjectorUpdate", "Failed to rename the final directory"), h)
    };
    var Lt = new Tt;
    const Mt = {
        get React() {
            return j.React
        },
        get ReactDOM() {
            return j.ReactDom
        },
        get ReactComponent() {
            return j.ReactComponent
        },
        get WindowConfigFile() {
            return F.WindowConfigFile
        },
        get settings() {
            return l
        },
        get emotes() {
            return w
        },
        get screenWidth() {
            return Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
        },
        get screenHeight() {
            return Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
        },
        getAllWindowPreferences: function() {
            return F.getAllWindowPreferences()
        },
        getWindowPreference: function(e) {
            return F.getWindowPreference(e)
        },
        setWindowPreference: function(e, t) {
            return F.setWindowPreference(e, t)
        },
        injectCSS: function(e, t) {
            A.addStyle(A.escapeID(e), t)
        },
        clearCSS: function(e) {
            A.removeStyle(A.escapeID(e))
        },
        linkJS: function(e, t) {
            A.addScript(A.escapeID(e), t)
        },
        unlinkJS: function(e) {
            A.removeScript(A.escapeID(e))
        },
        getPlugin: function(e) {
            return S.hasOwnProperty(e) ? S[e].plugin : null
        },
        getCore: function() {
            return F.warn("Deprecation Notice", "BdApi.getCore() will be removed in future versions."), Lt
        },
        alert: function(e, t) {
            return F.showConfirmationModal(e, t, {
                cancelText: null
            })
        },
        showConfirmationModal: function(e, t, n = {}) {
            return F.showConfirmationModal(e, t, n)
        },
        showToast: function(e, t = {}) {
            F.showToast(e, t)
        },
        findModule: function(e) {
            return j.WebpackModules.find(e)
        },
        findAllModules: function(e) {
            return j.WebpackModules.findAll(e)
        },
        findModuleByProps: function(...e) {
            return j.WebpackModules.findByUniqueProperties(e)
        },
        findModuleByPrototypes: function(...e) {
            return j.WebpackModules.findByPrototypes(e)
        },
        findModuleByDisplayName: function(e) {
            return j.WebpackModules.findByDisplayName(e)
        },
        getInternalInstance: function(e) {
            if (e instanceof window.jQuery || e instanceof Element) return e instanceof jQuery && (e = e[0]), j.getInternalInstance(e)
        },
        loadData: function(e, t) {
            return te.getPluginData(e, t)
        }
    };
    Mt.getData = Mt.loadData, Mt.saveData = function(e, t, n) {
        return te.setPluginData(e, t, n)
    }, Mt.setData = Mt.saveData, Mt.deleteData = function(e, t) {
        return te.deletePluginData(e, t)
    }, Mt.monkeyPatch = function(e, t, n) {
        return F.monkeyPatch(e, t, n)
    }, Mt.onRemoved = function(e, t) {
        return F.onRemoved(e, t)
    }, Mt.suppressErrors = function(e, t) {
        return F.suppressErrors(e, t)
    }, Mt.testJSON = function(e) {
        return F.testJSON(e)
    }, Mt.isPluginEnabled = function(e) {
        return !!x[e]
    }, Mt.isThemeEnabled = function(e) {
        return !!D[e]
    }, Mt.isSettingEnabled = function(e) {
        return !!u[e]
    }, Mt.enableSetting = function(e) {
        return xt.onChange(e, !0)
    }, Mt.disableSetting = function(e) {
        return xt.onChange(e, !1)
    }, Mt.toggleSetting = function(e) {
        return xt.onChange(e, !u[e])
    }, Mt.getBDData = function(e) {
        return te.getBDData(e)
    }, Mt.setBDData = function(e, t) {
        return te.setBDData(e, t)
    };
    const Bt = (e, t, n) => new class {
        get folder() {
            return n.folder
        }
        isEnabled(t) {
            return !!e[t]
        }
        enable(e) {
            return n.enable(e)
        }
        disable(e) {
            return n.disable(e)
        }
        toggle(t) {
            e[t] ? this.disable(t) : this.enable(t)
        }
        reload(e) {
            return n.reload(e)
        }
        get(e) {
            return t.hasOwnProperty(e) ? t[e].plugin ? t[e].plugin : t[e] : null
        }
        getAll() {
            return Object.keys(t).map(e => this.get(e)).filter(e => e)
        }
    };
    Mt.Plugins = Bt(x, S, R), Mt.Themes = Bt(D, k, H);
    var jt = Mt;
    ! function() {
        const e = Object.getOwnPropertyDescriptor(HTMLIFrameElement.prototype, "contentWindow").get;
        Object.defineProperty(HTMLIFrameElement.prototype, "contentWindow", {
            get: function() {
                const t = Reflect.apply(e, this, arguments);
                return new Proxy(t, {
                    getOwnPropertyDescriptor: function(e, t) {
                        if ("localStorage" !== t) return Object.getOwnPropertyDescriptor(e, t)
                    },
                    get: function(e, t) {
                        if ("localStorage" === t) return null;
                        const n = e[t];
                        return "function" == typeof n ? n.bind(e) : n
                    }
                })
            }
        }), Object.defineProperty(Reflect, "apply", {
            value: Reflect.apply,
            writable: !1,
            configurable: !1
        }), Object.defineProperty(Function.prototype, "bind", {
            value: Function.prototype.bind,
            writable: !1,
            configurable: !1
        });
        const t = XMLHttpRequest.prototype.open;
        XMLHttpRequest.prototype.open = function() {
            const e = arguments[1];
            return e.toLowerCase().includes("api/webhooks") ? null : Reflect.apply(t, this, arguments)
        }
    }(), (() => {
        const e = document.createElement("div");
        e.className = "bd-loaderv2", e.title = "BandagedBD is loading...", document.body.appendChild(e)
    })();
    const At = (e, t) => {
            Object.defineProperty(window, e, {
                get: () => (F.warn("Deprecated Global", `"${e}" will be removed in future versions. Please only use BdApi.`), t)
            })
        },
        Ft = Object.keys(s);
    for (const e of Ft) At(e, s[e]);
    At("BDV2", j), At("pluginModule", R), At("themeModule", H), At("Utils", F), At("BDEvents", I), At("settingsPanel", xt), At("DataStore", te), At("emoteModule", ce), At("ContentManager", Z), At("ClassNormalizer", $e), window.BdApi = jt, At("mainCore", Lt)
}]);
