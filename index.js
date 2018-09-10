window.Player = function (e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var i = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    return n.m = e, n.c = t, n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) n.d(r, i, function (t) {
                return e[t]
            }.bind(null, i));
        return r
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 6)
}([function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        i = u(n(8)),
        o = u(n(3)),
        a = u(n(25)),
        s = u(n(4)),
        l = n(5);

    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function c(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    var p = function (e) {
        function t(e) {
            ! function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var n = c(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            if (n.config = o.default.deepCopy({
                    width: 600,
                    height: 337.5,
                    ignores: [],
                    whitelist: [],
                    lang: (document.documentElement.getAttribute("lang") || navigator.language || "zh-cn").toLocaleLowerCase(),
                    inactive: 3e3,
                    volume: .6,
                    controls: !0,
                    controlsList: ["nodownload"]
                }, e), n.version = l.version, n.userTimer = null, n.waitTimer = null, n.history = [], n.root = o.default.findDom(document, "#" + n.config.id), n.controls = o.default.createDom("xg-controls", "", {
                    unselectable: "on",
                    onselectstart: "return false"
                }, "xgplayer-controls"), !n.root) {
                var r = n.config.el;
                if (!r || 1 !== r.nodeType) return n.emit("error", new s.default("use", n.config.vid, {
                    line: 32,
                    handle: "Constructor",
                    msg: "container id can't be empty"
                })), !1, c(n, !1);
                n.root = r
            }
            if (n.rootBackup = o.default.copyDom(n.root), o.default.addClass(n.root, "xgplayer xgplayer-" + a.default.device + " xgplayer-nostart " + (n.config.controls ? "" : "no-controls")), n.root.appendChild(n.controls), n.root.style.width = n.config.width + "px", n.root.style.height = n.config.height + "px", t.plugins) {
                var i = n.config.ignores;
                Object.keys(t.plugins).forEach(function (e) {
                    var r = t.plugins[e];
                    i.some(function (t) {
                        return e === t
                    }) || (["pc", "tablet", "mobile"].some(function (t) {
                        return t === e
                    }) ? e === a.default.device && r.call(n, n) : r.call(n, n))
                })
            }
            n.ev.forEach(function (e) {
                var t = Object.keys(e)[0],
                    r = n[e[t]];
                r && n.on(t, r)
            }), ["focus", "blur"].forEach(function (e) {
                n.on(e, n["on" + e.charAt(0).toUpperCase() + e.slice(1)])
            });
            var u = n;
            return n.root.addEventListener("mousemove", function () {
                u.onFocus()
            }), setTimeout(function () {
                n.emit("ready")
            }, 0), e.autoplay && n.start(), n
        }
        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, i.default), r(t, [{
            key: "start",
            value: function () {
                var e = this,
                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.config.url,
                    n = this.root,
                    r = this;
                "String" === o.default.typeOf(t) ? this.video.src = t : t.forEach(function (t) {
                    e.video.appendChild(o.default.createDom("source", "", {
                        src: "" + t.src,
                        type: "" + (t.type || "")
                    }))
                }), r.config.autoplay && this.video.addEventListener("canplay", function e() {
                    r.video.play().then(function () {}), r.video.removeEventListener("canplay", e)
                }), n.insertBefore(this.video, n.firstChild), r.userTimer = setTimeout(function () {
                    r.emit("blur")
                }, r.config.inactive), setTimeout(function () {
                    e.emit("complete")
                }, 1)
            }
        }, {
            key: "reload",
            value: function () {
                this.video.load(), this.once("loadeddata", function () {
                    this.play()
                })
            }
        }, {
            key: "destroy",
            value: function () {
                var e = this,
                    t = this.root.parentNode;
                for (var n in this._interval) clearInterval(this._interval[n]), this._interval[n] = null;
                if (this.ev.forEach(function (t) {
                        var n = Object.keys(t)[0],
                            r = e[t[n]];
                        r && e.off(n, r)
                    }), ["focus", "blur"].forEach(function (t) {
                        e.off(t, e["on" + t.charAt(0).toUpperCase() + t.slice(1)])
                    }), this.paused)
                    for (var r in this.emit("destroy"), this.root.id = this.root.id + "_del", t.insertBefore(this.rootBackup, this.root), t.removeChild(this.root), this) "config" !== r && delete this[r];
                else this.pause(), this.once("pause", function () {
                    for (var n in e.emit("destroy"), e.root.id = e.root.id + "_del", t.insertBefore(e.rootBackup, e.root), t.removeChild(e.root), e) "config" !== n && delete e[n]
                })
            }
        }, {
            key: "replay",
            value: function () {
                var e = this._replay;
                o.default.removeClass(this.root, "xgplayer-ended"), e && e instanceof Function ? e() : (this.currentTime = 0, this.play())
            }
        }, {
            key: "onFocus",
            value: function () {
                var e = this;
                o.default.removeClass(this.root, "xgplayer-inactive"), e.userTimer && clearTimeout(e.userTimer), e.userTimer = setTimeout(function () {
                    e.emit("blur")
                }, e.config.inactive)
            }
        }, {
            key: "onBlur",
            value: function () {
                this.paused || this.ended || o.default.addClass(this.root, "xgplayer-inactive")
            }
        }, {
            key: "onPlay",
            value: function () {
                o.default.addClass(this.root, "xgplayer-playing"), o.default.removeClass(this.root, "xgplayer-pause")
            }
        }, {
            key: "onPause",
            value: function () {
                o.default.addClass(this.root, "xgplayer-pause"), this.userTimer && clearTimeout(this.userTimer), this.emit("focus")
            }
        }, {
            key: "onEnded",
            value: function () {
                o.default.addClass(this.root, "xgplayer-ended"), o.default.removeClass(this.root, "xgplayer-playing")
            }
        }, {
            key: "onSeeking",
            value: function () {}
        }, {
            key: "onSeeked",
            value: function () {
                this.waitTimer && clearTimeout(this.waitTimer), o.default.removeClass(this.root, "xgplayer-isloading")
            }
        }, {
            key: "onWaiting",
            value: function () {
                var e = this;
                e.waitTimer && clearTimeout(e.waitTimer), e.waitTimer = setTimeout(function () {
                    o.default.addClass(e.root, "xgplayer-isloading")
                }, 500)
            }
        }, {
            key: "onPlaying",
            value: function () {
                this.waitTimer && clearTimeout(this.waitTimer), o.default.removeClass(this.root, "xgplayer-isloading xgplayer-nostart xgplayer-pause xgplayer-ended xgplayer-is-error xgplayer-replay"), o.default.addClass(this.root, "xgplayer-playing")
            }
        }], [{
            key: "install",
            value: function (e, n) {
                t.plugins || (t.plugins = {}), t.plugins[e] = n
            }
        }]), t
    }();
    p.util = o.default, p.sniffer = a.default, p.Errors = s.default, t.default = p, e.exports = t.default
}, function (e, t, n) {
    "use strict";
    var r = n(17)();
    e.exports = function (e) {
        return e !== r && null !== e
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        i = function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(n(27));
    n(28);
    var o = function () {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            ! function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.from = t.from, this.to = t.to, this.easing = t.easing || function (e) {
                return e * e
            }, this.duration = t.duration || 150, this.curPath = "", this.progress = t.progress, this.state = 0
        }
        return r(e, [{
            key: "animate",
            value: function () {
                var e = this,
                    t = new Date,
                    n = e.duration,
                    r = null,
                    i = e.path2shapes(e.from),
                    o = e.path2shapes(e.to),
                    a = e._preprocessing(i, o);
                e.state = 1;
                ! function i() {
                    var s = new Date - t;
                    if (s >= n || 2 === e.state) return r = o, e.progress(r, 1), window.cancelAnimationFrame(e.tickId), void(e.state = 0);
                    var l = e.easing(s / n);
                    r = e._lerp(a[0], a[1], l), e.progress(r, l), e.tickId = window.requestAnimationFrame(i)
                }()
            }
        }, {
            key: "toSVGString",
            value: function (e) {
                return e.map(function (e) {
                    return e.forEach(function (e, t) {
                        t ? e.splice(0, 2, "C") : (e.splice(2, 0, "C"), e.unshift("M"))
                    }), e.map(function (e) {
                        return e.join(" ")
                    }).join("")
                }).join("")
            }
        }, {
            key: "start",
            value: function () {
                self.animate()
            }
        }, {
            key: "stop",
            value: function () {
                0 !== this.state && (this.state = 2), window.cancelAnimationFrame(self.tickId), this.state = 0
            }
        }, {
            key: "reverse",
            value: function () {
                0 !== this.state && this.stop();
                var e = this.from;
                this.from = this.to, this.to = e, this.animate()
            }
        }, {
            key: "reset",
            value: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.from;
                0 !== this.state && this.stop(), this.from = t, this.to = e, this.animate()
            }
        }]), e
    }();
    for (var a in i.default) i.default[a] instanceof Function && !o.prototype[a] && (o.prototype[a] = i.default[a]);
    t.default = o, e.exports = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = {
        createDom: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "div",
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
                i = document.createElement(e);
            return i.className = r, i.innerHTML = t, Object.keys(n).forEach(function (t) {
                var r = t,
                    o = n[t];
                "video" === e || "audio" === e ? o && i.setAttribute(r, o) : i.setAttribute(r, o)
            }), i
        },
        hasClass: function (e, t) {
            return e.classList ? Array.prototype.some.call(e.classList, function (e) {
                return e === t
            }) : !!e.className.match(new RegExp("(\\s|^)" + t + "(\\s|$)"))
        },
        addClass: function (e, t) {
            e.classList ? t.replace(/(^\s+|\s+$)/g, "").split(/\s+/g).forEach(function (t) {
                t && e.classList.add(t)
            }) : r.hasClass(e, t) || (e.className += " " + t)
        },
        removeClass: function (e, t) {
            e.classList ? t.split(/\s+/g).forEach(function (t) {
                e.classList.remove(t)
            }) : r.hasClass(e, t) && t.split(/\s+/g).forEach(function (t) {
                var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
                e.className = e.className.replace(n, " ")
            })
        },
        toggleClass: function (e, t) {
            t.split(/\s+/g).forEach(function (t) {
                r.hasClass(e, t) ? r.removeClass(e, t) : r.addClass(e, t)
            })
        },
        findDom: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
                t = arguments[1];
            return e.querySelector(t)
        },
        padStart: function (e, t, n) {
            for (var r = String(n), i = t >> 0, o = Math.ceil(i / r.length), a = [], s = String(e); o--;) a.push(r);
            return a.join("").substring(0, i - s.length) + s
        },
        format: function (e) {
            if (window.isNaN(e)) return "";
            var t = r.padStart(Math.floor(e / 3600), 2, 0),
                n = r.padStart(Math.floor((e - 3600 * t) / 60), 2, 0),
                i = r.padStart(Math.floor(e - 3600 * t - 60 * n), 2, 0);
            return ("00" === t ? [n, i] : [t, n, i]).join(":")
        },
        event: function (e) {
            if (e.touches) {
                var t = e.touches[0] || e.changedTouches[0];
                e.clientX = t.clientX || 0, e.clientY = t.clientY || 0, e.offsetX = t.pageX - t.target.offsetLeft, e.offsetY = t.pageY - t.target.offsetTop
            }
            e._target = e.target || e.srcElement
        },
        typeOf: function (e) {
            return Object.prototype.toString.call(e).match(/([^\s.*]+)(?=]$)/g)[0]
        },
        deepCopy: function (e, t) {
            if ("Object" === r.typeOf(t) && "Object" === r.typeOf(e)) return Object.keys(t).forEach(function (n) {
                "Object" !== r.typeOf(t[n]) || t[n] instanceof Node ? "Array" === r.typeOf(t[n]) ? e[n] = "Array" === r.typeOf(e[n]) ? e[n].concat(t[n]) : [] : e[n] = t[n] : e[n] ? r.deepCopy(e[n], t[n]) : e[n] = t[n]
            }), e
        },
        getBgImage: function (e) {
            var t = document.createElement("a"),
                n = (e.currentStyle || window.getComputedStyle(e, null)).backgroundImage;
            return t.href = n.replace(/url\("|"\)/g, ""), t.href
        },
        copyDom: function (e) {
            if (e && 1 === e.nodeType) {
                var t = document.createElement(e.tagName);
                return Array.prototype.forEach.call(e.attributes, function (e) {
                    t.setAttribute(e.name, e.value)
                }), t
            }
            return ""
        },
        setInterval: function (e, t, n, r) {
            e._interval[t] || (e._interval[t] = setInterval(n.bind(e), r))
        },
        clearInterval: function (e, t) {
            clearInterval(e._interval[t]), e._interval[t] = null
        }
    };
    t.default = r, e.exports = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(5);
    var i = {
        network: {
            code: 1,
            msg: "视频下载错误",
            remark: "只要视频下载错误就使用此类型，无论是video本身的超时还是xhr的分段请求超时或者资源不存在"
        },
        mse: {
            code: 2,
            msg: "流追加错误",
            remark: "追加流的时候如果类型不对、无法被正确解码则会触发此类错误"
        },
        parse: {
            code: 3,
            msg: "解析错误",
            remark: "mp4、hls、flv我们都是使用js进行格式解析，如果解析失败则会触发此类错误"
        },
        format: {
            code: 4,
            msg: "格式错误",
            remark: "如果浏览器不支持的格式导致播放错误"
        },
        decoder: {
            code: 5,
            msg: "解码错误",
            remark: "浏览器解码异常会抛出此类型错误"
        },
        runtime: {
            code: 6,
            msg: "语法错误",
            remark: "播放器语法错误"
        },
        timeout: {
            code: 7,
            msg: "播放超时",
            remark: "播放过程中无法正常请求下一个分段导致播放中断"
        },
        other: {
            code: 8,
            msg: "其他错误",
            remark: "不可知的错误或被忽略的错误类型"
        }
    };
    t.default = function e(t, n, o, a, s, l, u, c) {
        var p = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : {
            line: "",
            handle: "",
            msg: "",
            version: ""
        };
        ! function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e);
        var d = {};
        return d.playerVersion = r.version, d.errorType = t, d.domain = document.domain, d.duration = o, d.currentTime = n, d.networkState = a, d.readyState = s, d.currentSrc = u, d.src = l, d.ended = c, d.errd = p, d.ex = (i[t] || {}).msg, d
    }, e.exports = t.default
}, function (e) {
    e.exports = {
        name: "xgplayer",
        version: "1.1.0-beta",
        description: "video player",
        main: "./dist/index.js",
        scripts: {
            prepare: "npm run build",
            build: "webpack --progress --display-chunks -p",
            watch: "webpack --progress --display-chunks -p --watch"
        },
        keywords: ["video", "player"],
        babel: {
            presets: ["es2015"],
            plugins: ["add-module-exports", "babel-plugin-bulk-import"]
        },
        repository: {
            type: "git",
            url: "git+https://github.com/bytedance/xgplayer.git"
        },
        author: "yinguohui@bytedance.com",
        license: "MIT",
        dependencies: {
            "babel-plugin-add-module-exports": "^0.2.1",
            deepmerge: "^1.5.0",
            draggabilly: "^2.2.0",
            "event-emitter": "^0.3.5",
            pasition: "^1.0.1",
            "request-frame": "^1.5.3"
        },
        browserslist: ["> 5%", "IE 9", "iOS 7", "Firefox > 20"],
        devDependencies: {
            "babel-loader": "^7.1.4",
            "babel-plugin-bulk-import": "^1.0.2",
            "babel-plugin-transform-object-rest-spread": "^6.26.0",
            "babel-plugin-transform-runtime": "^6.23.0",
            "babel-preset-es2015": "^6.24.1",
            "core-js": "^2.5.4",
            "css-loader": "^0.28.11",
            "json-loader": "^0.5.7",
            "node-sass": "^4.8.3",
            "postcss-cssnext": "^3.1.0",
            "postcss-loader": "^2.1.5",
            "sass-loader": "^6.0.7",
            "style-loader": "^0.20.3",
            sugarss: "^1.0.1",
            webpack: "^4.8.1",
            "webpack-cli": "^2.1.3",
            zlib: "^1.0.5"
        }
    }
}, function (e, t, n) {
    e.exports = n(7)
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = k(n(0)),
        i = k(n(26)),
        o = k(n(29)),
        a = k(n(30)),
        s = k(n(31)),
        l = k(n(32)),
        u = k(n(33)),
        c = k(n(34)),
        p = k(n(35)),
        d = k(n(36)),
        f = k(n(42)),
        h = k(n(43)),
        g = k(n(44)),
        y = k(n(47)),
        v = k(n(48)),
        m = k(n(49)),
        x = k(n(50)),
        b = k(n(51)),
        w = k(n(52));

    function k(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    n(53);
    var E = {};

    function _(e, t, n) {
        var r = e;
        t.map(function (e, i) {
            r[e] = i == t.length - 1 ? n : r[e] || {}, r = r[e]
        })
    }
    _(E, ["control", "definition"], w.default), _(E, ["control", "error"], b.default), _(E, ["control", "flex"], x.default), _(E, ["control", "fullscreen"], m.default), _(E, ["control", "i18n"], v.default), _(E, ["control", "loading"], y.default), _(E, ["control", "makeBullet"], g.default), _(E, ["control", "mobile"], h.default), _(E, ["control", "pc"], f.default), _(E, ["control", "pip"], d.default), _(E, ["control", "play"], p.default), _(E, ["control", "playbackRate"], c.default), _(E, ["control", "poster"], u.default), _(E, ["control", "progress"], l.default), _(E, ["control", "replay"], s.default), _(E, ["control", "textTrack"], a.default), _(E, ["control", "time"], o.default), _(E, ["control", "volume"], i.default), t.default = r.default, e.exports = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        i = s(n(9)),
        o = s(n(3)),
        a = s(n(4));

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var l = function () {
        function e(t) {
            var n = this;
            ! function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this._hasStart = !1;
            var r = {
                controls: !1,
                autoplay: t.autoplay,
                playsinline: t.playsinline,
                "webkit-playsinline": t.playsinline,
                "x5-video-player-type": t["x5-video-player-type"],
                "x5-video-player-fullscreen": t["x5-video-player-fullscreen"],
                "x5-video-orientation": t["x5-video-orientation"],
                airplay: t.airplay,
                "webkit-airplay": t.airplay,
                tabindex: 2,
                mediaType: t.mediaType || "video"
            };
            t.loop && (r.loop = "loop");
            var s = "";
            if (t.textTrack && Array.isArray(t.textTrack) && (navigator.userAgent.indexOf("Chrome") > -1 || navigator.userAgent.indexOf("Firefox") > -1) && (t.textTrack.some(function (e) {
                    if (e.src && e.label && e.default) return s += '<track src="' + e.src + '" ', e.kind && (s += 'kind="' + e.kind + '" '), s += 'label="' + e.label + '" ', e.srclang && (s += 'srclang="' + e.srclang + '" '), s += (e.default ? "default" : "") + ">", !0
                }), r.crossorigin = "anonymous"), t.textTrackStyle) {
                var l = document.createElement("style");
                document.head.appendChild(l);
                var u = "";
                for (var c in t.textTrackStyle) u += c + ": " + t.textTrackStyle[c] + ";";
                var p = t.id ? "#" + t.id : t.el.id ? "#" + t.el.id : "." + t.el.className;
                l.sheet.insertRule ? l.sheet.insertRule(p + " video::cue { " + u + " }", 0) : l.sheet.addRule && l.sheet.addRule(p + " video::cue", u)
            }
            this.video = o.default.createDom(r.mediaType, s, r, ""), t.autoplay && (this.video.autoplay = !0, this.video.muted = !0), this.ev = ["play", "playing", "pause", "ended", "error", "seeking", "seeked", "timeupdate", "waiting", "canplay", "canplaythrough", "durationchange", "volumechange", "loadeddata"].map(function (e) {
                return function (e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }({}, e, "on" + e.charAt(0).toUpperCase() + e.slice(1))
            }), (0, i.default)(this), this._interval = {};
            var d = "0,0";
            this.ev.forEach(function (e) {
                var t = n,
                    r = Object.keys(e)[0];
                t.video.addEventListener(r, function () {
                    "play" === r && (t.hasStart = !0), "error" === r ? t.video.error && t.emit(r, new a.default("other", t.currentTime, t.duration, t.networkState, t.readyState, t.currentSrc, t.src, t.ended, {
                        line: 41,
                        msg: t.error,
                        handle: "Constructor"
                    })) : t.emit(r, t), t.hasOwnProperty("_interval") && (["ended", "error", "timeupdate"].indexOf(r) < 0 ? o.default.setInterval(t, "bufferedChange", function () {
                        for (var e = [], t = 0, n = this.video.buffered.length; t < n; t++) e.push([this.video.buffered.start(t), this.video.buffered.end(t)]);
                        e.toString() !== d && (d = e.toString(), this.emit("bufferedChange", e))
                    }, 200) : "timeupdate" !== r && o.default.clearInterval(t, "bufferedChange"))
                }, !1)
            })
        }
        return r(e, [{
            key: "play",
            value: function () {
                this.video.play()
            }
        }, {
            key: "pause",
            value: function () {
                this.video.pause()
            }
        }, {
            key: "canPlayType",
            value: function () {
                this.video.canPlayType()
            }
        }, {
            key: "getBufferedRange",
            value: function () {
                var e = [0, 0],
                    t = this.video,
                    n = t.buffered,
                    r = t.currentTime;
                if (n)
                    for (var i = 0, o = n.length; i < o && (e[0] = n.start(i), e[1] = n.end(i), !(e[0] <= r && r <= e[1])); i++);
                return e[0] - r <= 0 && r - e[1] <= 0 ? e : [0, 0]
            }
        }, {
            key: "hasStart",
            get: function () {
                return this._hasStart
            },
            set: function (e) {
                "boolean" != typeof e || !0 !== e || this._hasStart || (this._hasStart = !0, this.emit("hasstart"))
            }
        }, {
            key: "autoplay",
            set: function (e) {
                this.video.autoplay = e
            },
            get: function () {
                return this.video.autoplay
            }
        }, {
            key: "buffered",
            get: function () {
                return this.video.buffered
            }
        }, {
            key: "crossOrigin",
            get: function () {
                return this.video.crossOrigin
            },
            set: function (e) {
                this.video.crossOrigin = e
            }
        }, {
            key: "currentSrc",
            get: function () {
                return this.video.currentSrc
            },
            set: function (e) {
                this.video.currentSrc = e
            }
        }, {
            key: "currentTime",
            get: function () {
                return this.video.currentTime
            },
            set: function (e) {
                this.video.currentTime = e
            }
        }, {
            key: "defaultMuted",
            get: function () {
                return this.video.defaultMuted
            },
            set: function (e) {
                this.video.defaultMuted = e
            }
        }, {
            key: "duration",
            get: function () {
                return this.video.duration
            }
        }, {
            key: "ended",
            get: function () {
                return this.video.ended
            }
        }, {
            key: "error",
            get: function () {
                var e = this.video.error;
                if (!e) return null;
                var t = [{
                    en: "MEDIA_ERR_ABORTED",
                    cn: "取回过程被用户中止"
                }, {
                    en: "MEDIA_ERR_NETWORK",
                    cn: "当下载时发生错误"
                }, {
                    en: "MEDIA_ERR_DECODE",
                    cn: "当解码时发生错误"
                }, {
                    en: "MEDIA_ERR_SRC_NOT_SUPPORTED",
                    cn: "不支持音频/视频"
                }];
                return this.lang ? this.lang[t[e.code - 1].en] : t[e.code - 1].en
            }
        }, {
            key: "loop",
            get: function () {
                return this.video.loop
            },
            set: function (e) {
                this.video.loop = e
            }
        }, {
            key: "muted",
            get: function () {
                return this.video.muted
            },
            set: function (e) {
                this.video.muted = e
            }
        }, {
            key: "networkState",
            get: function () {
                var e = [{
                    en: "NETWORK_EMPTY",
                    cn: "音频/视频尚未初始化"
                }, {
                    en: "NETWORK_IDLE",
                    cn: "音频/视频是活动的且已选取资源，但并未使用网络"
                }, {
                    en: "NETWORK_LOADING",
                    cn: "浏览器正在下载数据"
                }, {
                    en: "NETWORK_NO_SOURCE",
                    cn: "未找到音频/视频来源"
                }];
                return this.lang ? this.lang[e[this.video.networkState].en] : e[this.video.networkState].en
            }
        }, {
            key: "paused",
            get: function () {
                return this.video.paused
            }
        }, {
            key: "playbackRate",
            get: function () {
                return this.video.playbackRate
            },
            set: function (e) {
                this.video.playbackRate = e
            }
        }, {
            key: "played",
            get: function () {
                return this.video.played
            }
        }, {
            key: "preload",
            get: function () {
                return this.video.preload
            },
            set: function (e) {
                this.video.preload = e
            }
        }, {
            key: "readyState",
            get: function () {
                var e = [{
                    en: "HAVE_NOTHING",
                    cn: "没有关于音频/视频是否就绪的信息"
                }, {
                    en: "HAVE_METADATA",
                    cn: "关于音频/视频就绪的元数据"
                }, {
                    en: "HAVE_CURRENT_DATA",
                    cn: "关于当前播放位置的数据是可用的，但没有足够的数据来播放下一帧/毫秒"
                }, {
                    en: "HAVE_FUTURE_DATA",
                    cn: "当前及至少下一帧的数据是可用的"
                }, {
                    en: "HAVE_ENOUGH_DATA",
                    cn: "可用数据足以开始播放"
                }];
                return this.lang ? this.lang[e[this.video.readyState].en] : e[this.video.readyState]
            }
        }, {
            key: "seekable",
            get: function () {
                return this.video.seekable
            }
        }, {
            key: "seeking",
            get: function () {
                return this.video.seeking
            }
        }, {
            key: "src",
            get: function () {
                return this.video.src
            },
            set: function (e) {
                this.video.src = e
            }
        }, {
            key: "volume",
            get: function () {
                return this.video.volume
            },
            set: function (e) {
                this.video.volume = e
            }
        }, {
            key: "fullscreen",
            get: function () {
                return o.default.hasClass(this.root, "xgplayer-is-fullscreen")
            }
        }, {
            key: "bullet",
            get: function () {
                return !!o.default.findDom(this.root, "xg-bullet") && o.default.hasClass(o.default.findDom(this.root, "xg-bullet"), "xgplayer-has-bullet")
            }
        }, {
            key: "textTrack",
            get: function () {
                return o.default.hasClass(this.root, "xgplayer-is-textTrack")
            }
        }, {
            key: "pip",
            get: function () {
                return o.default.hasClass(this.root, "xgplayer-pip-active")
            }
        }]), e
    }();
    t.default = l, e.exports = t.default
}, function (e, t, n) {
    "use strict";
    var r, i, o, a, s, l, u, c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        p = n(10),
        d = n(24),
        f = Function.prototype.apply,
        h = Function.prototype.call,
        g = Object.create,
        y = Object.defineProperty,
        v = Object.defineProperties,
        m = Object.prototype.hasOwnProperty,
        x = {
            configurable: !0,
            enumerable: !1,
            writable: !0
        };
    s = {
        on: r = function (e, t) {
            var n;
            return d(t), m.call(this, "__ee__") ? n = this.__ee__ : (n = x.value = g(null), y(this, "__ee__", x), x.value = null), n[e] ? "object" === c(n[e]) ? n[e].push(t) : n[e] = [n[e], t] : n[e] = t, this
        },
        once: i = function (e, t) {
            var n, i;
            return d(t), i = this, r.call(this, e, n = function () {
                o.call(i, e, n), f.call(t, this, arguments)
            }), n.__eeOnceListener__ = t, this
        },
        off: o = function (e, t) {
            var n, r, i, o;
            if (d(t), !m.call(this, "__ee__")) return this;
            if (!(n = this.__ee__)[e]) return this;
            if ("object" === (void 0 === (r = n[e]) ? "undefined" : c(r)))
                for (o = 0; i = r[o]; ++o) i !== t && i.__eeOnceListener__ !== t || (2 === r.length ? n[e] = r[o ? 0 : 1] : r.splice(o, 1));
            else r !== t && r.__eeOnceListener__ !== t || delete n[e];
            return this
        },
        emit: a = function (e) {
            var t, n, r, i, o;
            if (m.call(this, "__ee__") && (i = this.__ee__[e]))
                if ("object" === (void 0 === i ? "undefined" : c(i))) {
                    for (n = arguments.length, o = new Array(n - 1), t = 1; t < n; ++t) o[t - 1] = arguments[t];
                    for (i = i.slice(), t = 0; r = i[t]; ++t) f.call(r, this, o)
                } else switch (arguments.length) {
                    case 1:
                        h.call(i, this);
                        break;
                    case 2:
                        h.call(i, this, arguments[1]);
                        break;
                    case 3:
                        h.call(i, this, arguments[1], arguments[2]);
                        break;
                    default:
                        for (n = arguments.length, o = new Array(n - 1), t = 1; t < n; ++t) o[t - 1] = arguments[t];
                        f.call(i, this, o)
                }
        }
    }, l = {
        on: p(r),
        once: p(i),
        off: p(o),
        emit: p(a)
    }, u = v({}, l), e.exports = t = function (e) {
        return null == e ? g(u) : v(Object(e), l)
    }, t.methods = s
}, function (e, t, n) {
    "use strict";
    var r = n(11),
        i = n(19),
        o = n(20),
        a = n(21);
    (e.exports = function (e, t) {
        var n, o, s, l, u;
        return arguments.length < 2 || "string" != typeof e ? (l = t, t = e, e = null) : l = arguments[2], null == e ? (n = s = !0, o = !1) : (n = a.call(e, "c"), o = a.call(e, "e"), s = a.call(e, "w")), u = {
            value: t,
            configurable: n,
            enumerable: o,
            writable: s
        }, l ? r(i(l), u) : u
    }).gs = function (e, t, n) {
        var s, l, u, c;
        return "string" != typeof e ? (u = n, n = t, t = e, e = null) : u = arguments[3], null == t ? t = void 0 : o(t) ? null == n ? n = void 0 : o(n) || (u = n, n = void 0) : (u = t, t = n = void 0), null == e ? (s = !0, l = !1) : (s = a.call(e, "c"), l = a.call(e, "e")), c = {
            get: t,
            set: n,
            configurable: s,
            enumerable: l
        }, u ? r(i(u), c) : c
    }
}, function (e, t, n) {
    "use strict";
    e.exports = n(12)() ? Object.assign : n(13)
}, function (e, t, n) {
    "use strict";
    e.exports = function () {
        var e, t = Object.assign;
        return "function" == typeof t && (t(e = {
            foo: "raz"
        }, {
            bar: "dwa"
        }, {
            trzy: "trzy"
        }), e.foo + e.bar + e.trzy === "razdwatrzy")
    }
}, function (e, t, n) {
    "use strict";
    var r = n(14),
        i = n(18),
        o = Math.max;
    e.exports = function (e, t) {
        var n, a, s, l = o(arguments.length, 2);
        for (e = Object(i(e)), s = function (r) {
                try {
                    e[r] = t[r]
                } catch (e) {
                    n || (n = e)
                }
            }, a = 1; a < l; ++a) t = arguments[a], r(t).forEach(s);
        if (void 0 !== n) throw n;
        return e
    }
}, function (e, t, n) {
    "use strict";
    e.exports = n(15)() ? Object.keys : n(16)
}, function (e, t, n) {
    "use strict";
    e.exports = function () {
        try {
            return Object.keys("primitive"), !0
        } catch (e) {
            return !1
        }
    }
}, function (e, t, n) {
    "use strict";
    var r = n(1),
        i = Object.keys;
    e.exports = function (e) {
        return i(r(e) ? Object(e) : e)
    }
}, function (e, t, n) {
    "use strict";
    e.exports = function () {}
}, function (e, t, n) {
    "use strict";
    var r = n(1);
    e.exports = function (e) {
        if (!r(e)) throw new TypeError("Cannot use null or undefined");
        return e
    }
}, function (e, t, n) {
    "use strict";
    var r = n(1),
        i = Array.prototype.forEach,
        o = Object.create;
    e.exports = function (e) {
        var t = o(null);
        return i.call(arguments, function (e) {
            r(e) && function (e, t) {
                var n;
                for (n in e) t[n] = e[n]
            }(Object(e), t)
        }), t
    }
}, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        return "function" == typeof e
    }
}, function (e, t, n) {
    "use strict";
    e.exports = n(22)() ? String.prototype.contains : n(23)
}, function (e, t, n) {
    "use strict";
    var r = "razdwatrzy";
    e.exports = function () {
        return "function" == typeof r.contains && (!0 === r.contains("dwa") && !1 === r.contains("foo"))
    }
}, function (e, t, n) {
    "use strict";
    var r = String.prototype.indexOf;
    e.exports = function (e) {
        return r.call(this, e, arguments[1]) > -1
    }
}, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        if ("function" != typeof e) throw new TypeError(e + " is not a function");
        return e
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = {
        get device() {
            var e = r.os;
            return e.isPc ? "pc" : e.isTablet ? "tablet" : "mobile"
        },
        get browser() {
            var e = navigator.userAgent.toLowerCase(),
                t = {
                    ie: /rv:([\d.]+)\) like gecko/,
                    firfox: /firefox\/([\d.]+)/,
                    chrome: /chrome\/([\d.]+)/,
                    opera: /opera.([\d.]+)/,
                    safari: /version\/([\d.]+).*safari/
                };
            return [].concat(Object.keys(t).filter(function (n) {
                return t[n].test(e)
            }))[0]
        },
        get os() {
            var e = navigator.userAgent,
                t = /(?:Windows Phone)/.test(e),
                n = /(?:SymbianOS)/.test(e) || t,
                r = /(?:Android)/.test(e),
                i = /(?:Firefox)/.test(e),
                o = /(?:iPad|PlayBook)/.test(e) || r && !/(?:Mobile)/.test(e) || i && /(?:Tablet)/.test(e),
                a = /(?:iPhone)/.test(e) && !o;
            return {
                isTablet: o,
                isPhone: a,
                isAndroid: r,
                isPc: !a && !r && !n,
                isSymbian: n,
                isWindowsPhone: t,
                isFireFox: i
            }
        }
    };
    t.default = r, e.exports = t.default
}, function (e, t, n) {
    "use strict";
    var r = o(n(0)),
        i = o(n(2));

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    r.default.install("volume", function () {
        var e = this,
            t = r.default.util;
        if ("mobile" !== r.default.sniffer.device) {
            e.config.volume = e.config.autoplay ? 0 : e.config.volume;
            var n = e.config.volume,
                o = {
                    muted: "M920.4 439.808l-108.544-109.056-72.704 72.704 109.568 108.544-109.056 108.544 72.704 72.704 108.032-109.568 108.544 109.056 72.704-72.704-109.568-108.032 109.056-108.544-72.704-72.704-108.032 109.568z",
                    small: "M795.648 693.248l-72.704-72.704c27.756-27.789 44.921-66.162 44.921-108.544s-17.165-80.755-44.922-108.546l0.002 0.002 72.704-72.704c46.713 46.235 75.639 110.363 75.639 181.248s-28.926 135.013-75.617 181.227l-0.021 0.021zM795.648 693.248l-72.704-72.704c27.756-27.789 44.921-66.162 44.921-108.544s-17.165-80.755-44.922-108.546l0.002 0.002 72.704-72.704c46.713 46.235 75.639 110.363 75.639 181.248s-28.926 135.013-75.617 181.227l-0.021 0.021z",
                    large: "M940.632 837.632l-72.192-72.192c65.114-64.745 105.412-154.386 105.412-253.44s-40.299-188.695-105.396-253.424l-0.016-0.016 72.192-72.192c83.639 83.197 135.401 198.37 135.401 325.632s-51.762 242.434-135.381 325.612l-0.020 0.020zM795.648 693.248l-72.704-72.704c27.756-27.789 44.921-66.162 44.921-108.544s-17.165-80.755-44.922-108.546l0.002 0.002 72.704-72.704c46.713 46.235 75.639 110.363 75.639 181.248s-28.926 135.013-75.617 181.227l-0.021 0.021z"
                },
                a = function (e) {
                    return 0 === e ? "muted" : e < .5 ? "small" : "large"
                },
                s = o[a(n)],
                l = o[a(n)],
                u = t.createDom("xg-volume", '<xg-icon class="xgplayer-icon">\n                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">\n                                                        <path transform="scale(0.0220625 0.0220625)" d="M358.4 358.4h-204.8v307.2h204.8l256 256v-819.2l-256 256z"></path>\n                                                        <path transform="scale(0.0220625 0.0220625)" d="' + l + '"></path>\n                                                    </svg>\n                                                </xg-icon>\n                                                <xg-slider class="xgplayer-slider xgplayer-none" tabindex="2">\n                                                    <xg-bar class="xgplayer-bar">\n                                                        <xg-drag class="xgplayer-drag"></xg-drag>\n                                                    </xg-bar>\n                                                </xg-slider>', {}, "xgplayer-volume");
            e.controls.appendChild(u);
            var c = void 0,
                p = u.querySelector(".xgplayer-slider"),
                d = u.querySelector(".xgplayer-bar"),
                f = u.querySelector(".xgplayer-drag"),
                h = u.querySelector(".xgplayer-icon");
            f.style.height = 100 * e.config.volume + "%";
            var g = u.querySelectorAll("path")[1],
                y = new i.default({
                    progress: function (e, t) {
                        var n = y.toSVGString(e);
                        g.setAttribute("d", n), s = n
                    },
                    from: s,
                    to: o.large
                }),
                v = null;
            p.volume = e.config.volume, ["touchend", "mousedown"].forEach(function (n) {
                d.addEventListener(n, function (n) {
                    n.preventDefault(), n.stopPropagation(), e.video.muted = !1, p.focus(), t.event(n), c = d.getBoundingClientRect().height, n.clientX;
                    var r = n.clientY,
                        i = f.getBoundingClientRect().height,
                        o = !1,
                        a = function (n) {
                            n.preventDefault(), n.stopPropagation(), t.event(n), o = !0;
                            var a = i - n.clientY + r,
                                s = a / c;
                            f.style.height = a + "px", e.volume = Math.max(Math.min(s, 1), .01)
                        },
                        s = function n(r) {
                            if (r.preventDefault(), r.stopPropagation(), t.event(r), window.removeEventListener("mousemove", a), window.removeEventListener("touchmove", a), window.removeEventListener("mouseup", n), window.removeEventListener("touchend", n), v || (v = d.getBoundingClientRect()), !o) {
                                var i = v.height - (r.clientY - v.top),
                                    s = i / v.height;
                                f.style.height = i + "px", s <= 0 && (e.volume > 0 ? f.volume = e.video.volume : s = f.volume), e.volume = Math.max(Math.min(s, 1), .01)
                            }
                            p.volume = e.volume, o = !1
                        };
                    return window.addEventListener("mousemove", a), window.addEventListener("touchmove", a), window.addEventListener("mouseup", s), window.addEventListener("touchend", s), !1
                })
            }), ["touchend", "mousedown"].forEach(function (n) {
                h.addEventListener(n, function (n) {
                    n.preventDefault(), n.stopPropagation(), e.video.muted = !1, t.hasClass(p, "xgplayer-none") ? (t.removeClass(p, "xgplayer-none"), p.focus()) : 0 === e.volume ? e.volume = p.volume : e.volume = 0
                })
            }), p.addEventListener("blur", function (e) {
                e.preventDefault(), e.stopPropagation(), t.addClass(p, "xgplayer-none")
            });
            var m = null;
            e.on("volumechange", function () {
                m && clearTimeout(m), m = setTimeout(function () {
                    y.reset(o[a(e.volume)], s), s = o[a[e.volume]], c || (c = d.getBoundingClientRect().height || 76), f.style.height = e.volume * c + "px"
                }, 50)
            }), e.once("canplay", function () {
                e.config.autoplay ? e.volume = 0 : e.volume = e.config.volume
            }), e.once("destroy", function () {
                u = null, f = null
            })
        }
    })
}, function (e, t, n) {
    "use strict";
    var r, i, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    ! function (a, s) {
        "object" === o(t) && void 0 !== e ? e.exports = s() : void 0 === (i = "function" == typeof (r = s) ? r.call(t, n, t, e) : r) || (e.exports = i)
    }(0, function () {
        var e = function () {
                return function (e, t) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e)) return function (e, t) {
                        var n = [],
                            r = !0,
                            i = !1,
                            o = void 0;
                        try {
                            for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                        } catch (e) {
                            i = !0, o = e
                        } finally {
                            try {
                                !r && s.return && s.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                        return n
                    }(e, t);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            t = 2 * Math.PI,
            n = function (e, t, n, r, i, o, a) {
                var s = e.x,
                    l = e.y;
                return {
                    x: r * (s *= t) - i * (l *= n) + o,
                    y: i * s + r * l + a
                }
            },
            r = function (e, t) {
                var n = 4 / 3 * Math.tan(t / 4),
                    r = Math.cos(e),
                    i = Math.sin(e),
                    o = Math.cos(e + t),
                    a = Math.sin(e + t);
                return [{
                    x: r - i * n,
                    y: i + r * n
                }, {
                    x: o + a * n,
                    y: a - o * n
                }, {
                    x: o,
                    y: a
                }]
            },
            i = function (e, t, n, r) {
                var i = e * r - t * n < 0 ? -1 : 1,
                    o = (e * n + t * r) / (Math.sqrt(e * e + t * t) * Math.sqrt(e * e + t * t));
                return o > 1 && (o = 1), o < -1 && (o = -1), i * Math.acos(o)
            },
            o = function (o) {
                var a = o.px,
                    s = o.py,
                    l = o.cx,
                    u = o.cy,
                    c = o.rx,
                    p = o.ry,
                    d = o.xAxisRotation,
                    f = void 0 === d ? 0 : d,
                    h = o.largeArcFlag,
                    g = void 0 === h ? 0 : h,
                    y = o.sweepFlag,
                    v = void 0 === y ? 0 : y,
                    m = [];
                if (0 === c || 0 === p) return [];
                var x = Math.sin(f * t / 360),
                    b = Math.cos(f * t / 360),
                    w = b * (a - l) / 2 + x * (s - u) / 2,
                    k = -x * (a - l) / 2 + b * (s - u) / 2;
                if (0 === w && 0 === k) return [];
                c = Math.abs(c), p = Math.abs(p);
                var E = Math.pow(w, 2) / Math.pow(c, 2) + Math.pow(k, 2) / Math.pow(p, 2);
                E > 1 && (c *= Math.sqrt(E), p *= Math.sqrt(E));
                var _ = function (e, n, r, o, a, s, l, u, c, p, d, f) {
                        var h = Math.pow(a, 2),
                            g = Math.pow(s, 2),
                            y = Math.pow(d, 2),
                            v = Math.pow(f, 2),
                            m = h * g - h * v - g * y;
                        m < 0 && (m = 0), m /= h * v + g * y;
                        var x = (m = Math.sqrt(m) * (l === u ? -1 : 1)) * a / s * f,
                            b = m * -s / a * d,
                            w = p * x - c * b + (e + r) / 2,
                            k = c * x + p * b + (n + o) / 2,
                            E = (d - x) / a,
                            _ = (f - b) / s,
                            C = (-d - x) / a,
                            T = (-f - b) / s,
                            S = i(1, 0, E, _),
                            M = i(E, _, C, T);
                        return 0 === u && M > 0 && (M -= t), 1 === u && M < 0 && (M += t), [w, k, S, M]
                    }(a, s, l, u, c, p, g, v, x, b, w, k),
                    C = e(_, 4),
                    T = C[0],
                    S = C[1],
                    M = C[2],
                    L = C[3],
                    R = Math.max(Math.ceil(Math.abs(L) / (t / 4)), 1);
                L /= R;
                for (var A = 0; A < R; A++) m.push(r(M, L)), M += L;
                return m.map(function (e) {
                    var t = n(e[0], c, p, b, x, T, S),
                        r = t.x,
                        i = t.y,
                        o = n(e[1], c, p, b, x, T, S),
                        a = o.x,
                        s = o.y,
                        l = n(e[2], c, p, b, x, T, S);
                    return {
                        x1: r,
                        y1: i,
                        x2: a,
                        y2: s,
                        x: l.x,
                        y: l.y
                    }
                })
            },
            a = {
                a: 7,
                c: 6,
                h: 1,
                l: 2,
                m: 2,
                q: 4,
                s: 4,
                t: 2,
                v: 1,
                z: 0
            },
            s = /([astvzqmhlc])([^astvzqmhlc]*)/gi;
        var l = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi;

        function u(e) {
            var t = e[0][0],
                n = e[0][1],
                r = t,
                i = n;
            return e.forEach(function (e) {
                var o = e[0],
                    a = e[2],
                    s = e[4],
                    l = e[6],
                    u = e[1],
                    c = e[3],
                    p = e[5],
                    d = e[7];
                t = Math.min(t, o, a, s, l), n = Math.min(n, u, c, p, d), r = Math.max(r, o, a, s, l), i = Math.max(i, u, c, p, d)
            }), [t, n, r, i]
        }

        function c(e, t) {
            var n = [];
            (function (e) {
                for (var t = [], n = 0; n < e; n++) {
                    for (var r = [], i = 0; i < e; i++) {
                        var o = i + n;
                        o > e - 1 && (o -= e), r[o] = i
                    }
                    t.push(r)
                }
                return t
            })(e.length).forEach(function (r) {
                var i = 0,
                    o = 0;
                r.forEach(function (n) {
                    i += function (e, t) {
                        var n = e[0],
                            r = e[2],
                            i = e[4],
                            o = e[6],
                            a = e[1],
                            s = e[3],
                            l = e[5],
                            u = e[7],
                            c = t[0],
                            p = t[2],
                            d = t[4],
                            f = t[6],
                            h = t[1],
                            g = t[3],
                            y = t[5],
                            v = t[7];
                        return Math.sqrt(Math.pow(c - n, 2) + Math.pow(h - a, 2)) + Math.sqrt(Math.pow(p - r, 2) + Math.pow(g - s, 2)) + Math.sqrt(Math.pow(d - i, 2) + Math.pow(y - l, 2)) + Math.sqrt(Math.pow(f - o, 2) + Math.pow(v - u, 2))
                    }(e[n], t[o++])
                }), n.push({
                    index: r,
                    distance: i
                })
            }), n.sort(function (e, t) {
                return e.distance - t.distance
            });
            var r = [];
            return n[0].index.forEach(function (t) {
                r.push(e[t])
            }), r
        }

        function p(e, t) {
            var n = [];
            (function (e) {
                for (var t = [], n = 0; n < e; n++) t.push(n);
                return function (e) {
                    var t = [],
                        n = [];
                    return function e(r) {
                        var i, o;
                        for (i = 0; i < r.length; i++) o = r.splice(i, 1)[0], n.push(o), 0 == r.length && t.push(n.slice()), e(r), r.splice(i, 0, o), n.pop();
                        return t
                    }(e)
                }(t)
            })(e.length).forEach(function (r) {
                var i = 0;
                r.forEach(function (n) {
                    i += function (e, t) {
                        return Math.sqrt(Math.pow(e[0] - t[0], 2) + Math.pow(e[1] - t[1], 2)) + Math.sqrt(Math.pow(e[2] - t[2], 2) + Math.pow(e[3] - t[3], 2))
                    }(u(e[n]), u(t[n]))
                }), n.push({
                    index: r,
                    distance: i
                })
            }), n.sort(function (e, t) {
                return e.distance - t.distance
            });
            var r = [];
            return n[0].index.forEach(function (t) {
                r.push(e[t])
            }), r
        }
        var d = {};

        function f(e, t, n, r, i, o, a, s, l) {
            return {
                left: h(e, t, n, r, i, o, a, s, l),
                right: h(a, s, i, o, n, r, e, t, 1 - l, !0)
            }
        }

        function h(e, t, n, r, i, o, a, s, l, u) {
            var c = (n - e) * l + e,
                p = (r - t) * l + t,
                d = (i - n) * l + n,
                f = (o - r) * l + r,
                h = (d - c) * l + c,
                g = (f - p) * l + p,
                y = (((a - i) * l + i - d) * l + d - h) * l + h,
                v = (((s - o) * l + o - f) * l + f - g) * l + g;
            return u ? [y, v, h, g, c, p, e, t] : [e, t, c, p, h, g, y, v]
        }
        return d.parser = function (e) {
            var t = [];
            return e.replace(s, function (e, n, r) {
                var i = n.toLowerCase();
                for (r = function (e) {
                        var t = e.match(l);
                        return t ? t.map(Number) : []
                    }(r), "m" == i && r.length > 2 && (t.push([n].concat(r.splice(0, 2))), i = "l", n = "m" == n ? "l" : "L");;) {
                    if (r.length == a[i]) return r.unshift(n), t.push(r);
                    if (r.length < a[i]) throw new Error("malformed path data");
                    t.push([n].concat(r.splice(0, a[i])))
                }
            }), t
        }, d.lerpCurve = function (e, t, n) {
            return d.lerpPoints(e[0], e[1], t[0], t[1], n).concat(d.lerpPoints(e[2], e[3], t[2], t[3], n)).concat(d.lerpPoints(e[4], e[5], t[4], t[5], n)).concat(d.lerpPoints(e[6], e[7], t[6], t[7], n))
        }, d.lerpPoints = function (e, t, n, r, i) {
            return [e + (n - e) * i, t + (r - t) * i]
        }, d.q2b = function (e, t, n, r, i, o) {
            return [e, t, (e + 2 * n) / 3, (t + 2 * r) / 3, (i + 2 * n) / 3, (o + 2 * r) / 3, i, o]
        }, d.path2shapes = function (e) {
            for (var t = d.parser(e), n = 0, r = 0, i = 0, a = t.length, s = [], l = null, u = void 0, c = void 0, p = void 0, f = void 0, h = void 0, g = void 0, y = void 0; i < a; i++) {
                var v = t[i],
                    m = v[0],
                    x = t[i - 1];
                switch (m) {
                    case "m":
                        s[h = s.length] = [], l = s[h], n += v[1], r += v[2];
                        break;
                    case "M":
                        s[h = s.length] = [], l = s[h], n = v[1], r = v[2];
                        break;
                    case "l":
                        l.push([n, r, n, r, n, r, n + v[1], r + v[2]]), n += v[1], r += v[2];
                        break;
                    case "L":
                        l.push([n, r, v[1], v[2], v[1], v[2], v[1], v[2]]), n = v[1], r = v[2];
                        break;
                    case "h":
                        l.push([n, r, n, r, n, r, n + v[1], r]), n += v[1];
                        break;
                    case "H":
                        l.push([n, r, v[1], r, v[1], r, v[1], r]), n = v[1];
                        break;
                    case "v":
                        l.push([n, r, n, r, n, r, n, r + v[1]]), r += v[1];
                        break;
                    case "V":
                        l.push([n, r, n, v[1], n, v[1], n, v[1]]), r = v[1];
                        break;
                    case "C":
                        l.push([n, r, v[1], v[2], v[3], v[4], v[5], v[6]]), n = v[5], r = v[6];
                        break;
                    case "S":
                        "C" === x[0] || "c" === x[0] ? l.push([n, r, n + x[5] - x[3], r + x[6] - x[4], v[1], v[2], v[3], v[4]]) : "S" !== x[0] && "s" !== x[0] || l.push([n, r, n + x[3] - x[1], r + x[4] - x[2], v[1], v[2], v[3], v[4]]), n = v[3], r = v[4];
                        break;
                    case "c":
                        l.push([n, r, n + v[1], r + v[2], n + v[3], r + v[4], n + v[5], r + v[6]]), n += v[5], r += v[6];
                        break;
                    case "s":
                        "C" === x[0] || "c" === x[0] ? l.push([n, r, n + x[5] - x[3], r + x[6] - x[4], n + v[1], r + v[2], n + v[3], r + v[4]]) : "S" !== x[0] && "s" !== x[0] || l.push([n, r, n + x[3] - x[1], r + x[4] - x[2], n + v[1], r + v[2], n + v[3], r + v[4]]), n += v[3], r += v[4];
                        break;
                    case "a":
                        y = (g = o({
                            rx: v[1],
                            ry: v[2],
                            px: n,
                            py: r,
                            xAxisRotation: v[3],
                            largeArcFlag: v[4],
                            sweepFlag: v[5],
                            cx: n + v[6],
                            cy: n + v[7]
                        }))[g.length - 1], g.forEach(function (e, t) {
                            0 === t ? l.push([n, r, e.x1, e.y1, e.x2, e.y2, e.x, e.y]) : l.push([g[t - 1].x, g[t - 1].y, e.x1, e.y1, e.x2, e.y2, e.x, e.y])
                        }), n = y.x, r = y.y;
                        break;
                    case "A":
                        y = (g = o({
                            rx: v[1],
                            ry: v[2],
                            px: n,
                            py: r,
                            xAxisRotation: v[3],
                            largeArcFlag: v[4],
                            sweepFlag: v[5],
                            cx: v[6],
                            cy: v[7]
                        }))[g.length - 1], g.forEach(function (e, t) {
                            0 === t ? l.push([n, r, e.x1, e.y1, e.x2, e.y2, e.x, e.y]) : l.push([g[t - 1].x, g[t - 1].y, e.x1, e.y1, e.x2, e.y2, e.x, e.y])
                        }), n = y.x, r = y.y;
                        break;
                    case "Q":
                        l.push(d.q2b(n, r, v[1], v[2], v[3], v[4])), n = v[3], r = v[4];
                        break;
                    case "q":
                        l.push(d.q2b(n, r, n + v[1], r + v[2], v[3] + n, v[4] + r)), n += v[3], r += v[4];
                        break;
                    case "T":
                        "Q" === x[0] || "q" === x[0] ? (p = n + x[3] - x[1], f = r + x[4] - x[2], l.push(d.q2b(n, r, p, f, v[1], v[2]))) : "T" !== x[0] && "t" !== x[0] || (l.push(d.q2b(n, r, n + n - p, r + r - f, v[1], v[2])), p = n + n - p, f = r + r - f), n = v[1], r = v[2];
                        break;
                    case "t":
                        "Q" === x[0] || "q" === x[0] ? (p = n + x[3] - x[1], f = r + x[4] - x[2], l.push(d.q2b(n, r, p, f, n + v[1], r + v[2]))) : "T" !== x[0] && "t" !== x[0] || (l.push(d.q2b(n, r, n + n - p, r + r - f, n + v[1], r + v[2])), p = n + n - p, f = r + r - f), n += v[1], r += v[2];
                        break;
                    case "Z":
                    case "z":
                        u = l[0][0], c = l[0][1], l.push([n, r, u, c, u, c, u, c])
                }
            }
            return s
        }, d._upCurves = function (e, t) {
            for (var n = 0, r = 0, i = e.length; n < t; n++) e.push(e[r].slice(0)), ++r > i - 1 && (r -= i)
        }, d._splitCurves = function (e, t) {
            for (var n = 0, r = 0; n < t; n++) {
                var i = e[r],
                    o = f(i[0], i[1], i[2], i[3], i[4], i[5], i[6], i[7], .5);
                e.splice(r, 1), e.splice(r, 0, o.left, o.right), (r += 2) >= e.length - 1 && (r = 0)
            }
        }, d._upShapes = function (e, t) {
            for (var n = function (t) {
                    var n = [];
                    e[e.length - 1].forEach(function (e) {
                        n.push(e.slice(0))
                    }), e.push(n)
                }, r = 0; r < t; r++) n()
        }, d._subShapes = function (e, t, n) {
            for (var r = function (e) {
                    var n = t[t.length - 1],
                        r = [],
                        i = n[0][0],
                        o = n[0][1];
                    n.forEach(function () {
                        r.push([i, o, i, o, i, o, i, o])
                    }), t.push(r)
                }, i = 0; i < n; i++) r()
        }, d.lerp = function (e, t, n) {
            return d._lerp(d.path2shapes(e), d.path2shapes(t), n)
        }, d.MIM_CURVES_COUNT = 100, d._preprocessing = function (e, t) {
            var n = e.length,
                r = t.length,
                i = JSON.parse(JSON.stringify(e)),
                o = JSON.parse(JSON.stringify(t));
            return n > r ? d._subShapes(i, o, n - r) : n < r && d._upShapes(i, r - n), (i = p(i, o)).forEach(function (e, t) {
                var n = e.length,
                    r = o[t].length;
                n > r ? n < d.MIM_CURVES_COUNT ? (d._splitCurves(e, d.MIM_CURVES_COUNT - n), d._splitCurves(o[t], d.MIM_CURVES_COUNT - r)) : d._splitCurves(o[t], n - r) : n < r && (r < d.MIM_CURVES_COUNT ? (d._splitCurves(e, d.MIM_CURVES_COUNT - n), d._splitCurves(o[t], d.MIM_CURVES_COUNT - r)) : d._splitCurves(e, r - n))
            }), i.forEach(function (e, t) {
                i[t] = c(e, o[t])
            }), [i, o]
        }, d._lerp = function (e, t, n) {
            var r = [];
            return e.forEach(function (e, i) {
                var o = [];
                e.forEach(function (e, r) {
                    o.push(d.lerpCurve(e, t[i][r], n))
                }), r.push(o)
            }), r
        }, d.animate = function (e) {
            var t = d.path2shapes(e.from),
                n = d.path2shapes(e.to),
                r = d._preprocessing(t, n),
                i = new Date,
                o = e.end || function () {},
                a = e.progress || function () {},
                s = e.begin || function () {},
                l = e.easing || function (e) {
                    return e
                },
                u = null,
                c = null,
                p = e.time;
            s(t);
            ! function e() {
                var t = new Date - i;
                if (t >= p) return a(c = n, 1), o(c), void cancelAnimationFrame(u);
                var s = l(t / p);
                c = d._lerp(r[0], r[1], s), a(c, s), u = requestAnimationFrame(e)
            }()
        }, d
    })
}, function (e, t, n) {
    "use strict";
    ! function () {
        for (var e = 0, t = ["webkit", "moz"], n = 0; n < t.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[t[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[n] + "CancelAnimationFrame"] || window[t[n] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function (t, n) {
            var r = (new Date).getTime(),
                i = Math.max(0, 16 - (r - e)),
                o = window.setTimeout(function () {
                    t(r + i)
                }, i);
            return e = r + i, o
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (e) {
            clearTimeout(e)
        })
    }()
}, function (e, t, n) {
    "use strict";
    var r = function (e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(n(0));
    r.default.install("time", function () {
        var e = this,
            t = r.default.util,
            n = t.format,
            i = t.createDom("xg-time", "<span>" + (e.currentTime || n(0)) + "</span><em>" + (e.duration || n(0)) + "</em>", {}, "xgplayer-time");
        e.controls.appendChild(i);
        var o = function () {
            i.innerHTML = "<span>" + n(e.currentTime || 0) + "</span><em>" + n(e.duration)
        };
        e.on("durationchange", o), e.on("timeupdate", o), e.once("destroy", function () {
            e.off("durationchange", o), e.off("timeupdate", o), i = null
        })
    })
}, function (e, t, n) {
    "use strict";
    var r = function (e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(n(0));
    r.default.install("textTrack", function () {
        if (-1 !== navigator.userAgent.indexOf("Chrome")) {
            var e = this,
                t = r.default.util,
                n = (r.default.sniffer, t.createDom("xg-textTrack", "", {
                    tabindex: 7
                }, "xgplayer-textTrack")),
                i = e.controls,
                o = e.config.textTrack;
            o && Array.isArray(o) && o.length > 1 && (t.addClass(e.root, "xgplayer-is-textTrack"), e.on("canplay", function () {
                var t = ["<ul>"];
                t.push("<li class=''}'>关闭</li>"), o.forEach(function (e) {
                    t.push("<li class='" + (e.default ? "textTrack" : "") + "'>" + e.label + "</li>")
                });
                var r = e.config.lang && "zh-cn" === e.config.lang ? "字幕" : "Caption";
                t.push('</ul><p class="name"><em>' + r + "</em></p>");
                var a = i.querySelector(".xgplayer-textTrack");
                a ? a.innerHTML = t.join("") : (n.innerHTML = t.join(""), i.appendChild(n))
            })), ["touchstart", "click"].forEach(function (r) {
                n.addEventListener(r, function (r) {
                    r.preventDefault(), r.stopPropagation();
                    var i = r.target || r.srcElement;
                    if (i && "li" === i.tagName.toLocaleLowerCase()) {
                        Array.prototype.forEach.call(i.parentNode.childNodes, function (e) {
                            t.removeClass(e, "textTrack")
                        }), t.addClass(i, "textTrack");
                        var a = e.root.getElementsByTagName("Track");
                        "关闭" === i.innerHTML ? (a[0].track.mode = "hidden", t.removeClass(e.root, "xgplayer-is-textTrack")) : (t.hasClass(e.root, "xgplayer-is-textTrack") || t.addClass(e.root, "xgplayer-is-textTrack"), a[0].track.mode = "showing", o.some(function (e) {
                            if (e.label === i.innerHTML) return a[0].src = e.src, e.kind && (a[0].kind = e.kind), a[0].label = e.label, e.srclang && (a[0].srclang = e.srclang), !0
                        }), e.emit("textTrackChange", i.innerHTML))
                    } else !i || "p" !== i.tagName.toLocaleLowerCase() && "em" !== i.tagName.toLocaleLowerCase() || (t.addClass(n, "xgplayer-textTrack-active"), n.focus())
                }, !1)
            }), n.addEventListener("blur", function (e) {
                e.preventDefault(), e.stopPropagation(), t.removeClass(n, "xgplayer-textTrack-active")
            }), e.once("destroy", function () {
                n = null
            })
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = function (e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(n(0));
    r.default.install("replay", function () {
        var e = this,
            t = r.default.util,
            n = e.config.centerBtn ? e.config.centerBtn : {},
            i = n.replayPath ? n.replayPath : "M8.22708362,13.8757234 L11.2677371,12.6472196 C11.7798067,12.4403301 12.3626381,12.6877273 12.5695276,13.1997969 L12.9441342,14.1269807 C13.1510237,14.6390502 12.9036264,15.2218816 12.3915569,15.4287712 L6.8284538,17.6764107 L5.90126995,18.0510173 C5.38920044,18.2579068 4.80636901,18.0105096 4.5994795,17.49844 L1.97723335,11.0081531 C1.77034384,10.4960836 2.0177411,9.91325213 2.52981061,9.70636262 L3.45699446,9.33175602 C3.96906396,9.12486652 4.5518954,9.37226378 4.75878491,9.88433329 L5.67885163,12.1615783 C7.99551726,6.6766934 13.3983951,3 19.5,3 C27.7842712,3 34.5,9.71572875 34.5,18 C34.5,26.2842712 27.7842712,33 19.5,33 C15.4573596,33 11.6658607,31.3912946 8.87004692,28.5831991 C8.28554571,27.9961303 8.28762719,27.0463851 8.87469603,26.4618839 C9.46176488,25.8773827 10.4115101,25.8794641 10.9960113,26.466533 C13.2344327,28.7147875 16.263503,30 19.5,30 C26.127417,30 31.5,24.627417 31.5,18 C31.5,11.372583 26.127417,6 19.5,6 C14.4183772,6 9.94214483,9.18783811 8.22708362,13.8757234 Z",
            o = t.createDom("xg-replay", '\n    <svg class="xgplayer-replay-svg" xmlns="http://www.w3.org/2000/svg" width="78" height="78" viewbox="0 0 78 78">\n      <path d="' + i + '"></path>\n    </svg>\n    <xg-replay-txt class="xgplayer-replay-txt">重播</xg-replay-txt>\n    ', {}, "xgplayer-replay"),
            a = e.root,
            s = o.querySelector(".xgplayer-replay-svg");
        a.appendChild(o), e.on("ended", function () {
            o.querySelector(".xgplayer-replay-txt").textContent = e.lang.REPLAY;
            var n = o.querySelector("path"),
                r = window.getComputedStyle(n).getPropertyValue("transform");
            "none" !== r && n.setAttribute("transform", r), e.config.loop || t.addClass(a, "replay")
        }), s.addEventListener("click", function (n) {
            n.preventDefault(), t.removeClass(a, "replay"), e.replay()
        }), e.once("destroy", function () {
            s = null
        })
    })
}, function (e, t, n) {
    "use strict";
    var r = function (e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(n(0));
    var i;
    i = function () {
        var e = this,
            t = r.default.util,
            n = t.createDom("xg-progress", '<xg-outer class="xgplayer-progress-outer"><xg-cache class="xgplayer-progress-cache"></xg-cache><xg-played class="xgplayer-progress-played"></xgplayer-played><xg-point class="xgplayer-progress-point xgplayer-tips"></xg-point><xg-thumbnail class="xgplayer-progress-thumbnail xgplayer-tips"></xg-thumbnail></xg-outer>', {
                tabindex: 1
            }, "xgplayer-progress"),
            i = void 0;
        e.controls.appendChild(n);
        var o = n.querySelector(".xgplayer-progress-played"),
            a = n.querySelector(".xgplayer-progress-cache"),
            s = n.querySelector(".xgplayer-progress-point"),
            l = n.querySelector(".xgplayer-progress-thumbnail"),
            u = 0,
            c = 0,
            p = 0,
            d = 0,
            f = 0,
            h = 0,
            g = [];
        e.config.thumbnail && (u = e.config.thumbnail.pic_num, c = e.config.thumbnail.width, p = e.config.thumbnail.height, d = e.config.thumbnail.col, f = e.config.thumbnail.row, g = e.config.thumbnail.urls, l.style.width = c + "px", l.style.height = p + "px"), ["touchstart", "mousedown"].forEach(function (r) {
            n.addEventListener(r, function (r) {
                if (r.preventDefault(), r.stopPropagation(), t.event(r), r._target === s || e.ended) return !1;
                n.focus(), i = n.getBoundingClientRect().width;
                var a = o.getBoundingClientRect().left,
                    l = !1,
                    u = function (n) {
                        n.preventDefault(), n.stopPropagation(), t.event(n), l = !0;
                        var r = n.clientX - a,
                            s = r / i * e.duration;
                        o.style.width = 100 * r / i + "%", e.currentTime = Number(s).toFixed(1)
                    },
                    c = function r(s) {
                        if (s.preventDefault(), s.stopPropagation(), t.event(s), window.removeEventListener("mousemove", u), window.removeEventListener("touchmove", u), window.removeEventListener("mouseup", r), window.removeEventListener("touchend", r), n.blur(), !l) {
                            var c = s.clientX - a,
                                p = c / i * e.duration;
                            o.style.width = 100 * c / i + "%", e.currentTime = Number(p).toFixed(1)
                        }
                        l = !1
                    };
                return window.addEventListener("mousemove", u), window.addEventListener("touchmove", u), window.addEventListener("mouseup", c), window.addEventListener("touchend", c), !1
            })
        }), n.addEventListener("mouseenter", function (r) {
            if (e.ended) return !1;
            var i = n.getBoundingClientRect().left,
                o = n.getBoundingClientRect().width,
                a = function (n) {
                    var r = (n.clientX - i) / o * e.duration;
                    s.textContent = t.format(r);
                    var a = s.getBoundingClientRect().width;
                    if (e.config.thumbnail) {
                        h = e.duration / u;
                        var y = Math.floor(r / h);
                        l.style.backgroundImage = "url(" + g[Math.ceil((y + 1) / (d * f)) - 1] + ")";
                        var v = y + 1 - d * f * (Math.ceil((y + 1) / (d * f)) - 1),
                            m = Math.ceil(v / f) - 1,
                            x = v - m * f - 1;
                        l.style["background-position"] = "-" + x * c + "px -" + m * p + "px";
                        var b = n.clientX - i - c / 2;
                        b = (b = b > 0 ? b : 0) < o - c ? b : o - c, l.style.left = b + "px", l.style.top = -10 - p + "px", l.style.display = "block", s.style.left = b + c / 2 - a / 2 + "px"
                    } else {
                        var w = n.clientX - i - a / 2;
                        w = (w = w > 0 ? w : 0) > o - a ? o - a : w, s.style.left = w + "px"
                    }
                    s.style.display = "block"
                },
                y = function (e) {
                    a(e)
                };
            n.addEventListener("mousemove", y, !1), n.addEventListener("mouseleave", function e(t) {
                n.removeEventListener("mousemove", y, !1), n.removeEventListener("mouseleave", e, !1), a(t), s.style.display = "none", l.style.display = "none"
            }, !1), a(r)
        }, !1);
        var y = function () {
            !i && n && (i = n.getBoundingClientRect().width), o.style.width = 100 * e.currentTime / e.duration + "%"
        };
        e.on("timeupdate", y);
        var v = function () {
                var t = e.buffered;
                if (t && t.length > 0) {
                    var n = t.end(t.length - 1);
                    a.style.width = n / e.duration * 100 + "%"
                }
            },
            m = ["cacheupdate", "ended", "timeupdate"];
        m.forEach(function (t) {
            e.on(t, v)
        }), e.once("destroy", function () {
            m.forEach(function (t) {
                e.off(t, v)
            }), e.off("timeupdate", y), n = null, o = null, s = null, l = null, a = null
        })
    }, r.default.install("progress", i)
}, function (e, t, n) {
    "use strict";
    var r = function (e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(n(0));
    r.default.install("poster", function () {
        var e = r.default.util.createDom("xg-poster", "", {}, "xgplayer-poster"),
            t = this.root;
        this.config.poster && (e.style.backgroundImage = "url(" + this.config.poster + ")", t.appendChild(e)), this.on("play", function () {
            e.style.display = "none"
        }), this.once("destroy", function () {
            e = null
        })
    })
}, function (e, t, n) {
    "use strict";
    var r = function (e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(n(0));
    r.default.install("playbackRate", function () {
        var e = this,
            t = r.default.util,
            n = 0,
            i = [];
        if (!e.config.playbackRate) return !1;
        e.config.playbackRate.sort(function (e, t) {
            return e - t
        }), e.config.playbackRate.forEach(function (e, t) {
            1 !== e && "1" !== e || (n = t), i.push(e + "x")
        });
        var o = e.config.lang && "zh-cn" === e.config.lang ? "倍速" : "Speed",
            a = t.createDom("xg-playback", '<p class="name"><span>1x</span></p>', {}, "xgplayer-playback"),
            s = e.controls,
            l = t.createDom("xg-tips", o, {}, "xgplayer-tips");
        a.appendChild(l), s.appendChild(a), ["touchstart", "click"].forEach(function (t) {
            a.addEventListener(t, function (t) {
                t.preventDefault(), t.stopPropagation();
                var r = t.target || t.srcElement;
                (r && "p" === r.tagName.toLocaleLowerCase() || "span" === r.tagName.toLocaleLowerCase()) && (n = n + 1 === i.length ? 0 : n + 1, a.querySelector("p").innerHTML = "<span>" + i[n] + "</span>", e.video.playbackRate = 1 * i[n].replace(/x$/g, ""))
            }, !1)
        }), a.addEventListener("mouseenter", function (t) {
            t.preventDefault(), t.stopPropagation(), l.style.left = "50%";
            var n = l.getBoundingClientRect(),
                r = e.root.getBoundingClientRect();
            n.right > r.right && (l.style.left = -n.right + r.right + 16 + "px")
        }), e.once("destroy", function () {
            a = null
        })
    })
}, function (e, t, n) {
    "use strict";
    var r = o(n(0)),
        i = o(n(2));

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    r.default.install("play", function () {
        var e = this,
            t = e.controls,
            n = r.default.util,
            o = e.config.iconScale || .0320625,
            a = "M576,363L810,512L576,661zM342,214L576,363L576,661L342,810z",
            s = "M598,214h170v596h-170v-596zM256 810v-596h170v596h-170z",
            l = n.createDom("xg-play", '<xg-icon class="xgplayer-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">\n            <path transform="scale(' + o + " " + o + ')" d="' + a + '"></path>\n        </svg></xg-icon>'),
            u = e.config.lang && "zh-cn" === e.config.lang ? "播放" : "Play",
            c = e.config.lang && "zh-cn" === e.config.lang ? "暂停" : "Pause",
            p = n.createDom("xg-tips", u, {}, "xgplayer-tips"),
            d = l.querySelector("path");
        l.appendChild(p);
        var f = new i.default({
            progress: function (e, t) {
                d.setAttribute("d", f.toSVGString(e))
            },
            from: s,
            to: a
        });
        l.className = "xgplayer-play", t.appendChild(l), ["click", "touchstart"].forEach(function (t) {
            l.addEventListener(t, function (t) {
                t.preventDefault(), t.stopPropagation(), e.ended || (e.paused ? e.play() : e.pause())
            }, !1)
        }), e.on("play", function () {
            p.textContent = c, f.to !== s && f.reset(s, a)
        }), e.on("pause", function () {
            p.textContent = u, f.to !== a && f.reset(a, s)
        }), e.once("destroy", function () {
            l = null
        })
    })
}, function (e, t, n) {
    "use strict";
    var r = o(n(0)),
        i = o(n(37));

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    r.default.install("pip", function () {
        var e = this,
            t = r.default.util;
        if (e.config.pip) {
            var n = t.createDom("xg-pip", '<p class="name"><span>画中画</span></p>', {
                    tabindex: 9
                }, "xgplayer-pip"),
                o = t.createDom("xg-pip-lay", "<div></div>", {}, "xgplayer-pip-lay"),
                a = t.createDom("xg-pip-drag", '<div class="drag-handle"><span>点击按住可拖动视频</span></div>', {
                    tabindex: 9
                }, "xgplayer-pip-drag"),
                s = e.controls,
                l = e.root;
            s.appendChild(n), l.appendChild(a), l.appendChild(o), new i.default(".xgplayer", {
                handle: ".drag-handle"
            });
            var u = function (e) {
                t.removeClass(e, "xgplayer-pip-active")
            };
            ["click", "touchstart"].forEach(function (r) {
                n.addEventListener(r, function (n) {
                    n.preventDefault(), n.stopPropagation(), t.hasClass(l, "xgplayer-pip-active") ? u(l) : function (n) {
                        var r = e.root.getBoundingClientRect(),
                            i = r.top,
                            a = r.left;
                        t.addClass(n, "xgplayer-pip-active"), e.root.style.right = 0, e.root.style.bottom = "200px", e.root.style.top = "", e.root.style.left = "", ["click", "touchstart"].forEach(function (t) {
                            o.addEventListener(t, function (t) {
                                t.preventDefault(), t.stopPropagation(), u(l), e.root.style.top = i + "px", e.root.style.left = a + "px"
                            })
                        })
                    }(l)
                })
            })
        }
    })
}, function (e, t, n) {
    "use strict";
    var r, i;
    "function" == typeof Symbol && Symbol.iterator;
    /*!
     * Draggabilly v2.2.0
     * Make that shiz draggable
     * https://draggabilly.desandro.com
     * MIT license
     */
    ! function (o, a) {
        r = [n(38), n(39)], void 0 === (i = function (e, t) {
            return function (e, t, n) {
                function r(e, t) {
                    for (var n in t) e[n] = t[n];
                    return e
                }
                var i = e.jQuery;

                function o(e, t) {
                    this.element = "string" == typeof e ? document.querySelector(e) : e, i && (this.$element = i(this.element)), this.options = r({}, this.constructor.defaults), this.option(t), this._create()
                }
                var a = o.prototype = Object.create(n.prototype);
                o.defaults = {}, a.option = function (e) {
                    r(this.options, e)
                };
                var s = {
                    relative: !0,
                    absolute: !0,
                    fixed: !0
                };

                function l(e, t, n) {
                    return n = n || "round", t ? Math[n](e / t) * t : e
                }
                a._create = function () {
                    this.position = {}, this._getPosition(), this.startPoint = {
                        x: 0,
                        y: 0
                    }, this.dragPoint = {
                        x: 0,
                        y: 0
                    }, this.startPosition = r({}, this.position);
                    var e = getComputedStyle(this.element);
                    s[e.position] || (this.element.style.position = "relative"), this.on("pointerDown", this.onPointerDown), this.on("pointerMove", this.onPointerMove), this.on("pointerUp", this.onPointerUp), this.enable(), this.setHandles()
                }, a.setHandles = function () {
                    this.handles = this.options.handle ? this.element.querySelectorAll(this.options.handle) : [this.element], this.bindHandles()
                }, a.dispatchEvent = function (e, t, n) {
                    var r = [t].concat(n);
                    this.emitEvent(e, r), this.dispatchJQueryEvent(e, t, n)
                }, a.dispatchJQueryEvent = function (t, n, r) {
                    var i = e.jQuery;
                    if (i && this.$element) {
                        var o = i.Event(n);
                        o.type = t, this.$element.trigger(o, r)
                    }
                }, a._getPosition = function () {
                    var e = getComputedStyle(this.element),
                        t = this._getPositionCoord(e.left, "width"),
                        n = this._getPositionCoord(e.top, "height");
                    this.position.x = isNaN(t) ? 0 : t, this.position.y = isNaN(n) ? 0 : n, this._addTransformPosition(e)
                }, a._getPositionCoord = function (e, n) {
                    if (-1 != e.indexOf("%")) {
                        var r = t(this.element.parentNode);
                        return r ? parseFloat(e) / 100 * r[n] : 0
                    }
                    return parseInt(e, 10)
                }, a._addTransformPosition = function (e) {
                    var t = e.transform;
                    if (0 === t.indexOf("matrix")) {
                        var n = t.split(","),
                            r = 0 === t.indexOf("matrix3d") ? 12 : 4,
                            i = parseInt(n[r], 10),
                            o = parseInt(n[r + 1], 10);
                        this.position.x += i, this.position.y += o
                    }
                }, a.onPointerDown = function (e, t) {
                    this.element.classList.add("is-pointer-down"), this.dispatchJQueryEvent("pointerDown", e, [t])
                }, a.dragStart = function (e, t) {
                    this.isEnabled && (this._getPosition(), this.measureContainment(), this.startPosition.x = this.position.x, this.startPosition.y = this.position.y, this.setLeftTop(), this.dragPoint.x = 0, this.dragPoint.y = 0, this.element.classList.add("is-dragging"), this.dispatchEvent("dragStart", e, [t]), this.animate())
                }, a.measureContainment = function () {
                    var e = this.getContainer();
                    if (e) {
                        var n = t(this.element),
                            r = t(e),
                            i = this.element.getBoundingClientRect(),
                            o = e.getBoundingClientRect(),
                            a = r.borderLeftWidth + r.borderRightWidth,
                            s = r.borderTopWidth + r.borderBottomWidth,
                            l = this.relativeStartPosition = {
                                x: i.left - (o.left + r.borderLeftWidth),
                                y: i.top - (o.top + r.borderTopWidth)
                            };
                        this.containSize = {
                            width: r.width - a - l.x - n.width,
                            height: r.height - s - l.y - n.height
                        }
                    }
                }, a.getContainer = function () {
                    var e = this.options.containment;
                    if (e) return e instanceof HTMLElement ? e : "string" == typeof e ? document.querySelector(e) : this.element.parentNode
                }, a.onPointerMove = function (e, t, n) {
                    this.dispatchJQueryEvent("pointerMove", e, [t, n])
                }, a.dragMove = function (e, t, n) {
                    if (this.isEnabled) {
                        var r = n.x,
                            i = n.y,
                            o = this.options.grid,
                            a = o && o[0],
                            s = o && o[1];
                        r = l(r, a), i = l(i, s), r = this.containDrag("x", r, a), i = this.containDrag("y", i, s), r = "y" == this.options.axis ? 0 : r, i = "x" == this.options.axis ? 0 : i, this.position.x = this.startPosition.x + r, this.position.y = this.startPosition.y + i, this.dragPoint.x = r, this.dragPoint.y = i, this.dispatchEvent("dragMove", e, [t, n])
                    }
                }, a.containDrag = function (e, t, n) {
                    if (!this.options.containment) return t;
                    var r = "x" == e ? "width" : "height",
                        i = l(-this.relativeStartPosition[e], n, "ceil"),
                        o = this.containSize[r];
                    return o = l(o, n, "floor"), Math.max(i, Math.min(o, t))
                }, a.onPointerUp = function (e, t) {
                    this.element.classList.remove("is-pointer-down"), this.dispatchJQueryEvent("pointerUp", e, [t])
                }, a.dragEnd = function (e, t) {
                    this.isEnabled && (this.element.style.transform = "", this.setLeftTop(), this.element.classList.remove("is-dragging"), this.dispatchEvent("dragEnd", e, [t]))
                }, a.animate = function () {
                    if (this.isDragging) {
                        this.positionDrag();
                        var e = this;
                        requestAnimationFrame(function () {
                            e.animate()
                        })
                    }
                }, a.setLeftTop = function () {
                    this.element.style.left = this.position.x + "px", this.element.style.top = this.position.y + "px"
                }, a.positionDrag = function () {
                    this.element.style.transform = "translate3d( " + this.dragPoint.x + "px, " + this.dragPoint.y + "px, 0)"
                }, a.staticClick = function (e, t) {
                    this.dispatchEvent("staticClick", e, [t])
                }, a.setPosition = function (e, t) {
                    this.position.x = e, this.position.y = t, this.setLeftTop()
                }, a.enable = function () {
                    this.isEnabled = !0
                }, a.disable = function () {
                    this.isEnabled = !1, this.isDragging && this.dragEnd()
                }, a.destroy = function () {
                    this.disable(), this.element.style.transform = "", this.element.style.left = "", this.element.style.top = "", this.element.style.position = "", this.unbindHandles(), this.$element && this.$element.removeData("draggabilly")
                }, a._init = function () {}, i && i.bridget && i.bridget("draggabilly", o);
                return o
            }(o, e, t)
        }.apply(t, r)) || (e.exports = i)
    }(window)
}, function (e, t, n) {
    "use strict";
    var r, i, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    window, void 0 === (i = "function" == typeof (r = function () {
        function e(e) {
            var t = parseFloat(e),
                n = -1 == e.indexOf("%") && !isNaN(t);
            return n && t
        }
        var t = "undefined" == typeof console ? function () {} : function (e) {
                console.error(e)
            },
            n = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
            r = n.length;

        function i(e) {
            var n = getComputedStyle(e);
            return n || t("Style returned " + n + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), n
        }
        var a, s = !1;

        function l(t) {
            if (function () {
                    if (!s) {
                        s = !0;
                        var t = document.createElement("div");
                        t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style.boxSizing = "border-box";
                        var n = document.body || document.documentElement;
                        n.appendChild(t);
                        var r = i(t);
                        a = 200 == Math.round(e(r.width)), l.isBoxSizeOuter = a, n.removeChild(t)
                    }
                }(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == (void 0 === t ? "undefined" : o(t)) && t.nodeType) {
                var u = i(t);
                if ("none" == u.display) return function () {
                    for (var e = {
                            width: 0,
                            height: 0,
                            innerWidth: 0,
                            innerHeight: 0,
                            outerWidth: 0,
                            outerHeight: 0
                        }, t = 0; t < r; t++) {
                        var i = n[t];
                        e[i] = 0
                    }
                    return e
                }();
                var c = {};
                c.width = t.offsetWidth, c.height = t.offsetHeight;
                for (var p = c.isBorderBox = "border-box" == u.boxSizing, d = 0; d < r; d++) {
                    var f = n[d],
                        h = u[f],
                        g = parseFloat(h);
                    c[f] = isNaN(g) ? 0 : g
                }
                var y = c.paddingLeft + c.paddingRight,
                    v = c.paddingTop + c.paddingBottom,
                    m = c.marginLeft + c.marginRight,
                    x = c.marginTop + c.marginBottom,
                    b = c.borderLeftWidth + c.borderRightWidth,
                    w = c.borderTopWidth + c.borderBottomWidth,
                    k = p && a,
                    E = e(u.width);
                !1 !== E && (c.width = E + (k ? 0 : y + b));
                var _ = e(u.height);
                return !1 !== _ && (c.height = _ + (k ? 0 : v + w)), c.innerWidth = c.width - (y + b), c.innerHeight = c.height - (v + w), c.outerWidth = c.width + m, c.outerHeight = c.height + x, c
            }
        }
        return l
    }) ? r.call(t, n, t, e) : r) || (e.exports = i)
}, function (e, t, n) {
    "use strict";
    var r, i;
    "function" == typeof Symbol && Symbol.iterator;
    /*!
     * Unidragger v2.3.0
     * Draggable base class
     * MIT license
     */
    ! function (o, a) {
        r = [n(40)], void 0 === (i = function (e) {
            return function (e, t) {
                function n() {}
                var r = n.prototype = Object.create(t.prototype);
                r.bindHandles = function () {
                    this._bindHandles(!0)
                }, r.unbindHandles = function () {
                    this._bindHandles(!1)
                }, r._bindHandles = function (t) {
                    for (var n = (t = void 0 === t || t) ? "addEventListener" : "removeEventListener", r = t ? this._touchActionValue : "", i = 0; i < this.handles.length; i++) {
                        var o = this.handles[i];
                        this._bindStartEvent(o, t), o[n]("click", this), e.PointerEvent && (o.style.touchAction = r)
                    }
                }, r._touchActionValue = "none", r.pointerDown = function (e, t) {
                    var n = this.okayPointerDown(e);
                    n && (this.pointerDownPointer = t, e.preventDefault(), this.pointerDownBlur(), this._bindPostStartEvents(e), this.emitEvent("pointerDown", [e, t]))
                };
                var i = {
                        TEXTAREA: !0,
                        INPUT: !0,
                        SELECT: !0,
                        OPTION: !0
                    },
                    o = {
                        radio: !0,
                        checkbox: !0,
                        button: !0,
                        submit: !0,
                        image: !0,
                        file: !0
                    };
                return r.okayPointerDown = function (e) {
                    var t = i[e.target.nodeName],
                        n = o[e.target.type],
                        r = !t || n;
                    return r || this._pointerReset(), r
                }, r.pointerDownBlur = function () {
                    var e = document.activeElement;
                    e && e.blur && e != document.body && e.blur()
                }, r.pointerMove = function (e, t) {
                    var n = this._dragPointerMove(e, t);
                    this.emitEvent("pointerMove", [e, t, n]), this._dragMove(e, t, n)
                }, r._dragPointerMove = function (e, t) {
                    var n = {
                        x: t.pageX - this.pointerDownPointer.pageX,
                        y: t.pageY - this.pointerDownPointer.pageY
                    };
                    return !this.isDragging && this.hasDragStarted(n) && this._dragStart(e, t), n
                }, r.hasDragStarted = function (e) {
                    return Math.abs(e.x) > 3 || Math.abs(e.y) > 3
                }, r.pointerUp = function (e, t) {
                    this.emitEvent("pointerUp", [e, t]), this._dragPointerUp(e, t)
                }, r._dragPointerUp = function (e, t) {
                    this.isDragging ? this._dragEnd(e, t) : this._staticClick(e, t)
                }, r._dragStart = function (e, t) {
                    this.isDragging = !0, this.isPreventingClicks = !0, this.dragStart(e, t)
                }, r.dragStart = function (e, t) {
                    this.emitEvent("dragStart", [e, t])
                }, r._dragMove = function (e, t, n) {
                    this.isDragging && this.dragMove(e, t, n)
                }, r.dragMove = function (e, t, n) {
                    e.preventDefault(), this.emitEvent("dragMove", [e, t, n])
                }, r._dragEnd = function (e, t) {
                    this.isDragging = !1, setTimeout(function () {
                        delete this.isPreventingClicks
                    }.bind(this)), this.dragEnd(e, t)
                }, r.dragEnd = function (e, t) {
                    this.emitEvent("dragEnd", [e, t])
                }, r.onclick = function (e) {
                    this.isPreventingClicks && e.preventDefault()
                }, r._staticClick = function (e, t) {
                    this.isIgnoringMouseUp && "mouseup" == e.type || (this.staticClick(e, t), "mouseup" != e.type && (this.isIgnoringMouseUp = !0, setTimeout(function () {
                        delete this.isIgnoringMouseUp
                    }.bind(this), 400)))
                }, r.staticClick = function (e, t) {
                    this.emitEvent("staticClick", [e, t])
                }, n.getPointerPoint = t.getPointerPoint, n
            }(o, e)
        }.apply(t, r)) || (e.exports = i)
    }(window)
}, function (e, t, n) {
    "use strict";
    var r, i;
    "function" == typeof Symbol && Symbol.iterator;
    /*!
     * Unipointer v2.3.0
     * base class for doing one thing with pointer event
     * MIT license
     */
    ! function (o, a) {
        r = [n(41)], void 0 === (i = function (e) {
            return function (e, t) {
                function n() {}
                var r = n.prototype = Object.create(t.prototype);
                r.bindStartEvent = function (e) {
                    this._bindStartEvent(e, !0)
                }, r.unbindStartEvent = function (e) {
                    this._bindStartEvent(e, !1)
                }, r._bindStartEvent = function (t, n) {
                    var r = (n = void 0 === n || n) ? "addEventListener" : "removeEventListener",
                        i = "mousedown";
                    e.PointerEvent ? i = "pointerdown" : "ontouchstart" in e && (i = "touchstart"), t[r](i, this)
                }, r.handleEvent = function (e) {
                    var t = "on" + e.type;
                    this[t] && this[t](e)
                }, r.getTouch = function (e) {
                    for (var t = 0; t < e.length; t++) {
                        var n = e[t];
                        if (n.identifier == this.pointerIdentifier) return n
                    }
                }, r.onmousedown = function (e) {
                    var t = e.button;
                    t && 0 !== t && 1 !== t || this._pointerDown(e, e)
                }, r.ontouchstart = function (e) {
                    this._pointerDown(e, e.changedTouches[0])
                }, r.onpointerdown = function (e) {
                    this._pointerDown(e, e)
                }, r._pointerDown = function (e, t) {
                    e.button || this.isPointerDown || (this.isPointerDown = !0, this.pointerIdentifier = void 0 !== t.pointerId ? t.pointerId : t.identifier, this.pointerDown(e, t))
                }, r.pointerDown = function (e, t) {
                    this._bindPostStartEvents(e), this.emitEvent("pointerDown", [e, t])
                };
                var i = {
                    mousedown: ["mousemove", "mouseup"],
                    touchstart: ["touchmove", "touchend", "touchcancel"],
                    pointerdown: ["pointermove", "pointerup", "pointercancel"]
                };
                return r._bindPostStartEvents = function (t) {
                    if (t) {
                        var n = i[t.type];
                        n.forEach(function (t) {
                            e.addEventListener(t, this)
                        }, this), this._boundPointerEvents = n
                    }
                }, r._unbindPostStartEvents = function () {
                    this._boundPointerEvents && (this._boundPointerEvents.forEach(function (t) {
                        e.removeEventListener(t, this)
                    }, this), delete this._boundPointerEvents)
                }, r.onmousemove = function (e) {
                    this._pointerMove(e, e)
                }, r.onpointermove = function (e) {
                    e.pointerId == this.pointerIdentifier && this._pointerMove(e, e)
                }, r.ontouchmove = function (e) {
                    var t = this.getTouch(e.changedTouches);
                    t && this._pointerMove(e, t)
                }, r._pointerMove = function (e, t) {
                    this.pointerMove(e, t)
                }, r.pointerMove = function (e, t) {
                    this.emitEvent("pointerMove", [e, t])
                }, r.onmouseup = function (e) {
                    this._pointerUp(e, e)
                }, r.onpointerup = function (e) {
                    e.pointerId == this.pointerIdentifier && this._pointerUp(e, e)
                }, r.ontouchend = function (e) {
                    var t = this.getTouch(e.changedTouches);
                    t && this._pointerUp(e, t)
                }, r._pointerUp = function (e, t) {
                    this._pointerDone(), this.pointerUp(e, t)
                }, r.pointerUp = function (e, t) {
                    this.emitEvent("pointerUp", [e, t])
                }, r._pointerDone = function () {
                    this._pointerReset(), this._unbindPostStartEvents(), this.pointerDone()
                }, r._pointerReset = function () {
                    this.isPointerDown = !1, delete this.pointerIdentifier
                }, r.pointerDone = function () {}, r.onpointercancel = function (e) {
                    e.pointerId == this.pointerIdentifier && this._pointerCancel(e, e)
                }, r.ontouchcancel = function (e) {
                    var t = this.getTouch(e.changedTouches);
                    t && this._pointerCancel(e, t)
                }, r._pointerCancel = function (e, t) {
                    this._pointerDone(), this.pointerCancel(e, t)
                }, r.pointerCancel = function (e, t) {
                    this.emitEvent("pointerCancel", [e, t])
                }, n.getPointerPoint = function (e) {
                    return {
                        x: e.pageX,
                        y: e.pageY
                    }
                }, n
            }(o, e)
        }.apply(t, r)) || (e.exports = i)
    }(window)
}, function (e, t, n) {
    "use strict";
    var r, i;
    "function" == typeof Symbol && Symbol.iterator;
    "undefined" != typeof window && window, void 0 === (i = "function" == typeof (r = function () {
        function e() {}
        var t = e.prototype;
        return t.on = function (e, t) {
            if (e && t) {
                var n = this._events = this._events || {},
                    r = n[e] = n[e] || [];
                return -1 == r.indexOf(t) && r.push(t), this
            }
        }, t.once = function (e, t) {
            if (e && t) {
                this.on(e, t);
                var n = this._onceEvents = this._onceEvents || {};
                return (n[e] = n[e] || {})[t] = !0, this
            }
        }, t.off = function (e, t) {
            var n = this._events && this._events[e];
            if (n && n.length) {
                var r = n.indexOf(t);
                return -1 != r && n.splice(r, 1), this
            }
        }, t.emitEvent = function (e, t) {
            var n = this._events && this._events[e];
            if (n && n.length) {
                n = n.slice(0), t = t || [];
                for (var r = this._onceEvents && this._onceEvents[e], i = 0; i < n.length; i++) {
                    var o = n[i];
                    r && r[o] && (this.off(e, o), delete r[o]), o.apply(this, t)
                }
                return this
            }
        }, t.allOff = function () {
            delete this._events, delete this._onceEvents
        }, e
    }) ? r.call(t, n, t, e) : r) || (e.exports = i)
}, function (e, t, n) {
    "use strict";
    var r = function (e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(n(0));
    r.default.install("pc", function () {
        var e = this,
            t = r.default.util,
            n = e.controls,
            i = e.root,
            o = 0,
            a = void 0,
            s = e.config.centerBtn ? e.config.centerBtn : {},
            l = {
                pause: s.pausePath ? s.pausePath : "M576,363L810,512L576,661zM342,214L576,363L576,661L342,810z",
                play: s.playPath ? s.playPath : "M598,214h170v596h-170v-596zM256 810v-596h170v596h-170z"
            },
            u = t.createDom("xg-start", '\n        <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">\n            <path transform="scale(0.04,0.04)" d="' + l.pause + '"></path>\n        </svg>', {}, "xgplayer-start"),
            c = t.createDom("xg-enter", '<xg-enter-logo class="xgplayer-enter-logo"></xg-enter-logo><xg-enter-tips class="xgplayer-enter-tips"></xg-player-tips>', {}, "xgplayer-enter"),
            p = c.querySelector(".xgplayer-enter-logo");
        i.appendChild(u), i.appendChild(c);
        var d = u.querySelector("path"),
            f = c.querySelector(".xgplayer-enter-tips"),
            h = new Image;
        h.onload = function () {
            f.style.display = "block"
        }, e.config.enterLogo && e.config.enterLogo.url && e.config.enterLogo.width && e.config.enterLogo.height ? (h.src = e.config.enterLogo.url, p.style.backgroundImage = 'url("' + e.config.enterLogo.url + '")', p.style.width = e.config.enterLogo.width + "px", p.style.height = e.config.enterLogo.height + "px", p.style.backgroundSize = e.config.enterLogo.width + "px " + e.config.enterLogo.height + "px", p.style.margin = "-" + e.config.enterLogo.height / 2 + "px auto auto -" + e.config.enterLogo.width / 2 + "px", f.style.margin = e.config.enterLogo.height - 6 + "px auto auto -62px") : h.src = t.getBgImage(p), e.config.enterTips && e.config.enterTips.background && (f.style.background = "" + e.config.enterTips.background), e.config.enterBg && (e.config.enterBg.url ? c.style.backgroundImage = 'url("' + e.config.enterBg.url + '")' : e.config.enterBg.color && (c.style.background = e.config.enterBg.color)), ["click", "touchstart"].forEach(function (n) {
            u.addEventListener(n, function (n) {
                n.preventDefault(), n.stopPropagation(), e.config.url && (t.hasClass(i, "xgplayer-nostart") ? (t.removeClass(i, "xgplayer-nostart"), t.addClass(i, "xgplayer-is-enter"), i.querySelector("video") || e.start(), e.on("canplay", function () {
                    t.removeClass(i, "xgplayer-is-enter")
                }), e.once("playing", function () {
                    t.removeClass(i, "xgplayer-is-enter")
                }), e.play(), setTimeout(function () {
                    e.play()
                }, 10)) : e.paused && (t.removeClass(i, "xgplayer-nostart xgplayer-isloading"), setTimeout(function () {
                    e.play()
                }, 10)))
            })
        }), u.addEventListener("animationend", function (e) {
            e.preventDefault(), t.removeClass(u, "xgplayer-start-interact"), u.style.display = "none"
        }), e.on("play", function () {
            d.setAttribute("d", l.pause), u.style.display = "inline-block", t.addClass(u, "xgplayer-start-interact")
        }), e.on("pause", function () {
            d.setAttribute("d", l.play), u.style.display = "inline-block", t.addClass(u, "xgplayer-start-interact")
        }), e.video.addEventListener("click", function (n) {
            n.preventDefault(), n.stopPropagation(), document.activeElement === e.video ? (o++, a && clearTimeout(a), 1 === o ? a = setTimeout(function () {
                if (t.hasClass(e.root, "xgplayer-nostart")) return !1;
                e.ended || (e.paused ? e.play() : e.pause()), o = 0
            }, 200) : o = 0) : e.video.focus()
        }, !1), e.video.addEventListener("dblclick", function (t) {
            if (t.preventDefault(), t.stopPropagation(), document.activeElement === e.video) {
                var r = n.querySelector(".xgplayer-fullscreen");
                if (r) {
                    var i = void 0;
                    document.createEvent ? (i = document.createEvent("Event")).initEvent("click", !0, !0) : i = new Event("click"), r.dispatchEvent(i)
                }
            } else e.video.focus()
        }, !1), i.addEventListener("mouseenter", function (t) {
            e.emit("focus", e)
        }, !1), i.addEventListener("mouseleave", function (t) {
            e.emit("blur", e)
        }, !1), n.addEventListener("mouseenter", function (t) {
            e.userTimer && clearTimeout(e.userTimer)
        }, !1), n.addEventListener("mouseleave", function (t) {
            e.emit("focus", e)
        }, !1)
    })
}, function (e, t, n) {
    "use strict";
    var r = o(n(0)),
        i = o(n(2));

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    r.default.install("mobile", function () {
        var e = this,
            t = r.default.util,
            n = e.root,
            o = function (e) {
                var t = r.default.util;
                return e.some(function (e) {
                    return "Function" === t.typeOf(e) ? e.call(navigator.userAgent) : "RegExp" === t.typeOf(e) ? e.test(navigator.userAgent) : "String" === t.typeOf(e) && navigator.userAgent.indexOf(e) > -1
                })
            }(e.config.whitelist);
        e.mobilePass = o;
        var a = e.config.centerBtn ? e.config.centerBtn : {},
            s = {
                pause: a.pausePath ? a.pausePath : "M576,363L810,512L576,661zM342,214L576,363L576,661L342,810z",
                play: a.playPath ? a.playPath : "M598,214h170v596h-170v-596zM256 810v-596h170v596h-170z"
            },
            l = t.createDom("xg-start", '\n        <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">\n            <path transform="scale(0.04,0.04)" d="' + s.pause + '"></path>\n        </svg>', {}, "xgplayer-start"),
            u = t.createDom("xg-enter", '<xg-enter-logo class="xgplayer-enter-logo"></xg-enter-logo><xg-enter-tips class="xgplayer-enter-tips"></xg-player-tips>', {}, "xgplayer-enter"),
            c = u.querySelector(".xgplayer-enter-logo");
        n.appendChild(l), n.appendChild(u);
        var p = l.querySelector("path"),
            d = new Image,
            f = new i.default({
                from: s.play,
                to: s.pause,
                progress: function (e, t) {
                    p.setAttribute("d", f.toSVGString(e))
                }
            });
        if (u.querySelector(".xgplayer-enter-tips").style.display = "block", e.start(), o) {
            e.config.enterLogo ? (d.src = e.config.enterLogo, c.style.backgroundImage = 'url("' + e.config.enterLogo + '")') : d.src = t.getBgImage(c), e.video.addEventListener("touchstart", function (t) {
                t.preventDefault(), e.emit("focus")
            }, !1), l.addEventListener("touchend", function (r) {
                r.preventDefault(), t.hasClass(n, "xgplayer-nostart") ? (t.removeClass(n, "xgplayer-nostart"), t.addClass(n, "xgplayer-is-enter"), e.on("canplay", function () {
                    t.removeClass(n, "xgplayer-is-enter")
                }), e.once("playing", function () {
                    t.removeClass(n, "xgplayer-is-enter")
                }), e.play()) : e.paused ? e.play() : e.pause()
            }), e.on("play", function () {
                f.reset(s.play, s.pause)
            }), e.on("pause", function () {
                f.reset(s.pause, s.play)
            }), e.config.volume = e.config.autoplay ? 0 : null !== e.config.volume ? e.config.volume : 1;
            var h = 0 !== e.config.volume && 1 !== e.config.volume ? 1 : e.config.volume;
            0 === h && (e.video.muted = !0);
            var g = {
                    muted: "M920.4 439.808l-108.544-109.056-72.704 72.704 109.568 108.544-109.056 108.544 72.704 72.704 108.032-109.568 108.544 109.056 72.704-72.704-109.568-108.032 109.056-108.544-72.704-72.704-108.032 109.568z",
                    large: "M940.632 837.632l-72.192-72.192c65.114-64.745 105.412-154.386 105.412-253.44s-40.299-188.695-105.396-253.424l-0.016-0.016 72.192-72.192c83.639 83.197 135.401 198.37 135.401 325.632s-51.762 242.434-135.381 325.612l-0.020 0.020zM795.648 693.248l-72.704-72.704c27.756-27.789 44.921-66.162 44.921-108.544s-17.165-80.755-44.922-108.546l0.002 0.002 72.704-72.704c46.713 46.235 75.639 110.363 75.639 181.248s-28.926 135.013-75.617 181.227l-0.021 0.021z"
                },
                y = function (e) {
                    return 0 === e ? "muted" : "large"
                },
                v = g[y(h)],
                m = g[y(h)],
                x = t.createDom("xg-volume", '<xg-icon class="xgplayer-icon">\n                                                      <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">\n                                                          <path transform="scale(0.0220625 0.0220625)" d="M358.4 358.4h-204.8v307.2h204.8l256 256v-819.2l-256 256z"></path>\n                                                          <path transform="scale(0.0220625 0.0220625)" d="' + m + '"></path>\n                                                      </svg>\n                                                  </xg-icon>', {}, "xgplayer-volume");
            e.controls.appendChild(x);
            var b = x.querySelector(".xgplayer-icon"),
                w = x.querySelectorAll("path")[1],
                k = new i.default({
                    progress: function (e, t) {
                        var n = f.toSVGString(e);
                        w.setAttribute("d", n), v = n
                    },
                    from: v,
                    to: g.large
                });
            ["touchend", "mousedown"].forEach(function (t) {
                b.addEventListener(t, function (t) {
                    t.preventDefault(), t.stopPropagation(), e.video.muted ? (e.video.muted = !1, e.volume = 1, k.reset(g.large, g.muted), v = g.large) : (e.volume = 0, e.video.muted = !0, k.reset(g.muted, g.large), v = g.muted)
                })
            }), e.once("destroy", function () {
                x = null
            })
        } else t.addClass(n, "xgplayer-mobile-npassed"), e.once("ready", function () {
            e.video.controls = e.config.controls, e.video.controlsList = e.config.controlsList.join(" "), e.config.poster && (e.video.poster = e.config.poster)
        });
        e.config.debug && function (e) {
            var t = {};
            Object.assign(t, {
                host: "127.0.0.1",
                port: 9090
            }, e);
            var n = document.createElement("script"),
                r = document.createElement("h4");
            r.style.cssText = "position:fixed;bottom:0;padding:10px;width:100%;background-color:#fff;text-align:center", r.textContent = "weinre --boundHost " + t.host + " --httpPort " + t.port + "\r\n 启动服务后，刷新页面", n.anonymous = !0, n.async = !0, n.src = "http://" + t.host + ":" + t.port + "/target/target-script-min.js#anonymous", n.onload = function () {
                r.parentNode.removeChild(r)
            }, document.body.appendChild(n), document.body.appendChild(r)
        }(e.config.debug)
    })
}, function (e, t, n) {
    "use strict";
    var r = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        i = s(n(0)),
        o = s(n(45)),
        a = s(n(46));

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function l(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var u = function () {
            function e(t) {
                l(this, e), this.player = t, this.reset();
                var n = this;
                this.player.on("bullet_remove", function (e) {
                    n.removeBullet(e.bullet)
                }), ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"].forEach(function (e) {
                    document.addEventListener(e, n.resize.bind(n))
                })
            }
            return r(e, [{
                key: "resize",
                value: function () {
                    var e = this.player.root,
                        t = this;
                    setTimeout(function () {
                        var n = e.querySelector(".xgplayer-bullet"),
                            r = n.getBoundingClientRect();
                        t.width = r.width, t.height = r.height, t.container = n;
                        for (var i = /mobile/gi.test(navigator.userAgent) ? 10 : 12, o = Math.floor(t.height / i), a = [], s = 0; s < o; s++) a[s] = {
                            id: s,
                            queue: [],
                            step: 99999,
                            surplus: 0
                        };
                        if (t.channels && t.channels.length <= a.length)
                            for (var l = function (e) {
                                    a[e] = {
                                        id: e,
                                        queue: [],
                                        step: t.channels[e].step,
                                        surplus: t.channels[e].surplus
                                    }, t.channels[e].queue.forEach(function (t) {
                                        return a[e].queue.push(t)
                                    })
                                }, u = 0; u < t.channels.length; u++) l(u);
                        else if (t.channels && t.channels.length > a.length) {
                            for (var c = function (e) {
                                    a[e] = {
                                        id: e,
                                        queue: [],
                                        step: t.channels[e].step,
                                        surplus: t.channels[e].surplus
                                    }, t.channels[e].queue.forEach(function (t) {
                                        return a[e].queue.push(t)
                                    })
                                }, p = 0; p < a.length; p++) c(p);
                            for (var d = a.length; d < t.channels.length; d++) t.channels[d].queue.forEach(function (e) {
                                return e.remove()
                            })
                        }
                        t.channels = a, t.channelHeight = i
                    }, 10)
                }
            }, {
                key: "addBullet",
                value: function (e) {
                    var t = this.width,
                        n = this.channels,
                        r = this.channelHeight,
                        i = Math.ceil(e.height / r);
                    if (i > n.length) return {
                        result: !1,
                        message: "exceed channels.length, occupy=" + i + ",channelsSize=" + n.length
                    };
                    for (var o = !0, a = void 0, s = -1, l = 0, u = n.length; l < u; l++)
                        if (n[l].queue.some(function (t) {
                                return t.id === e.id
                            })) return {
                            result: !1,
                            message: "exsited, channelOrder=" + l + ",danmaku_id=" + e.id
                        };
                    for (var c = 0, p = n.length - i; c <= p; c++) {
                        o = !0;
                        for (var d = c; d < c + i; d++)
                            if ((a = n[d]).step < e.step || a.surplus < 0) {
                                o = !1;
                                break
                            }
                        if (o) {
                            s = c;
                            break
                        }
                    }
                    if (-1 !== s) {
                        for (var f = s, h = s + i; f < h; f++)(a = n[f]).queue.unshift(e), a.step = e.step, a.surplus -= e.width;
                        return e.channel_id = [s, i], e.top = s * r, e.left = t, {
                            result: e,
                            message: "success"
                        }
                    }
                    return {
                        result: !1,
                        message: "no step or surplus will right"
                    }
                }
            }, {
                key: "removeBullet",
                value: function (e) {
                    for (var t = this.channels, n = e.channel_id, r = void 0, i = n[0], o = n[0] + n[1]; i < o; i++)
                        if (r = t[i]) {
                            var a = -1;
                            r.queue.some(function (t, n) {
                                if (t.id === e.id) return a = n, !0
                            }), a > -1 && (r.queue.splice(a, 1), 0 === a && (r.step = 9999, r.surplus = 0))
                        }
                }
            }, {
                key: "update",
                value: function () {
                    var e = this.channels,
                        t = this.width;
                    e.forEach(function (e) {
                        var n = e.queue[0];
                        n ? e.surplus = t - n.left - n.width : (e.step = 9999, e.surplus = 0)
                    })
                }
            }, {
                key: "reset",
                value: function () {
                    var e = this.player.root,
                        t = this;
                    setTimeout(function () {
                        var n = e.querySelector(".xgplayer-bullet"),
                            r = n.getBoundingClientRect();
                        t.width = r.width, t.height = r.height, t.container = n;
                        for (var i = /mobile/gi.test(navigator.userAgent) ? 10 : 12, o = Math.floor(t.height / i), a = [], s = 0; s < o; s++) a[s] = {
                            id: s,
                            queue: [],
                            step: 99999,
                            surplus: 0
                        };
                        t.channels = a, t.channelHeight = i
                    }, 200)
                }
            }, {
                key: "resetWithCb",
                value: function (e) {
                    var t = this.player.root.querySelector(".xgplayer-bullet"),
                        n = t.getBoundingClientRect();
                    this.width = n.width, this.height = n.height, this.container = t;
                    for (var r = /mobile/gi.test(navigator.userAgent) ? 10 : 12, i = Math.floor(this.height / r), o = [], a = 0; a < i; a++) o[a] = {
                        id: a,
                        queue: [],
                        step: 99999,
                        surplus: 0
                    };
                    this.channels = o, this.channelHeight = r, e && e(!0)
                }
            }]), e
        }(),
        c = function () {
            function e(t, n, r) {
                l(this, e), this.player = t, this.duration = r.duration, this.id = r.id, this.container = n, this.start = r.start;
                var i = document.createElement("span");
                i.textContent = r.txt, i.style.color = r.color, i.style.fontSize = r.scale + "em", this.el = i, this.width = r.width, this.height = r.height, this.status = "waiting";
                var o = this.player.root.getBoundingClientRect();
                this.left = o.width, this.step = (o.width + this.width) / this.duration / 60, this.end = -this.width
            }
            return r(e, [{
                key: "attach",
                value: function () {
                    this.container.appendChild(this.el)
                }
            }, {
                key: "reset",
                value: function () {
                    var e = this.el;
                    e.style.left = this.left + "px", e.style.top = this.top + "px"
                }
            }, {
                key: "move",
                value: function () {
                    this.left -= this.step, this.el.style.left = this.left + "px", this.left <= this.end && (this.status = "end", this.remove())
                }
            }, {
                key: "remove",
                value: function () {
                    this.el && (this.el.parentNode.removeChild(this.el), this.el = null, this.player.emit("bullet_remove", {
                        bullet: this
                    }))
                }
            }]), e
        }(),
        p = function () {
            function e(t, n) {
                l(this, e), this.player = t;
                var r = this.player.root;
                this.container = r.querySelector(".xgplayer-bullet"), this.channel = new u(t), this.queue = [], this.timer = null, this.retryTimer = null, this.interval = 2e3, this.status = "idle", this.options = (0, a.default)({
                    type: "json",
                    dataMap: function (e) {
                        return e.length > 0 ? e.map(function (e) {
                            return {
                                id: e.danmaku_id,
                                txt: e.text.slice(0, 40),
                                duration: 1 * e.duration,
                                color: e.text_color.replace("0x", "#"),
                                scale: 1 * e.text_scale,
                                start: 1 * e.offset_time
                            }
                        }) : []
                    }
                }, n), t.on("dataIncoming", this.dataHandle.bind(this)), t.on("seeked", this.seekHandle.bind(this)), t.on("bullet_remove", this.updateQueue.bind(this)), t.on("ended", this.stop.bind(this)), t.on("pause", this.pause.bind(this)), t.on("play", this.play.bind(this))
            }
            return r(e, [{
                key: "updateQueue",
                value: function (e) {
                    var t = this;
                    t.queue.some(function (n, r) {
                        if (n.id === e.bullet.id) return t.queue.splice(r, 1), !0
                    })
                }
            }, {
                key: "init",
                value: function () {
                    var e = this;
                    if (e.data) return e.player.paused ? void(e.status = "paused") : e.player.ended ? void(e.status = "ended") : (e.readData(), e.retryTimer = setInterval(function () {
                        e.readData(), e.dataHandle()
                    }, e.interval - 1e3), void e.player.emit("dataIncoming"));
                    fetch(e.options.url, {
                        method: e.options.method,
                        headers: {
                            Accept: "application/json"
                        }
                    }).then(function (t) {
                        t.ok && t.json().then(function (t) {
                            var n = e.options.dataMap.call(null, t.data);
                            if (n.length) {
                                e.data = n;
                                var r = document.createElement("span");
                                r.style.padding = e.options.padding + "||'0px'", r.style.position = "absolute", r.style.left = "-99999px", document.body.appendChild(r);
                                var i = void 0;
                                if (e.data.forEach(function (e) {
                                        r.textContent = e.txt, r.style.fontSize = 20 * e.scale + "px", i = r.getBoundingClientRect(), e.width = i.width, e.height = i.height
                                    }), e.data.sort(function (e, t) {
                                        return e.start - t.start
                                    }), document.body.removeChild(r), e.player.paused) return void(e.status = "paused");
                                if (e.player.ended) return void(e.status = "ended");
                                e.readData(), e.retryTimer = setInterval(function () {
                                    e.readData(), e.dataHandle()
                                }, e.interval - 1e3), e.player.emit("dataIncoming")
                            }
                        })
                    }).catch(function (e) {
                        console.log("Fetch错误:" + e)
                    })
                }
            }, {
                key: "start",
                value: function () {
                    this.status = "playing", this.channel.reset(), this.init()
                }
            }, {
                key: "stop",
                value: function () {
                    this.status = "closed", clearTimeout(this.retryTimer), (0, o.default)("cancel")(this.timer), this.queue.length = 0, this.container.innerHTML = ""
                }
            }, {
                key: "play",
                value: function () {
                    var e = this,
                        t = i.default.util;
                    "idle" === e.status || "ended" === e.status ? t.hasClass(e.container, "xgplayer-has-bullet") && e.start() : "paused" === e.status && t.hasClass(e.container, "xgplayer-has-bullet") && (e.status = "playing", e.dataHandle(), e.retryTimer = setInterval(function () {
                        e.readData(), e.dataHandle()
                    }, e.interval - 1e3))
                }
            }, {
                key: "pause",
                value: function () {
                    "playing" === this.status ? (this.status = "paused", clearTimeout(this.retryTimer), (0, o.default)("cancel")(this.timer)) : "ended" === this.status && this.stop()
                }
            }, {
                key: "dataHandle",
                value: function () {
                    var e = (0, o.default)("cancel");
                    if (e(this.timer), this.queue.length) {
                        this.queue.forEach(function (e) {
                            "waiting" !== e.status && "start" !== e.status || (e.status = "start", e.move())
                        });
                        var t = (0, o.default)("request");
                        this.timer = t(this.dataHandle.bind(this))
                    } else e(this.timer)
                }
            }, {
                key: "readData",
                value: function () {
                    var e = this,
                        t = this.player,
                        n = this.formatTime(t.currentTime),
                        r = void 0,
                        i = e.interval,
                        o = e.channel,
                        a = e.container,
                        s = e.data.filter(function (e) {
                            return e.start <= n && n <= e.start + i
                        });
                    s.length > 0 && s.forEach(function (n) {
                        r = new c(t, a, n), o.addBullet(r).result && (e.queue.push(r), r.reset(), r.attach())
                    })
                }
            }, {
                key: "seekHandle",
                value: function () {
                    i.default.util;
                    this.stop(), this.player.paused ? this.status = "idle" : (this.status = "playing", this.channel.resetWithCb(), this.init())
                }
            }, {
                key: "formatTime",
                value: function (e) {
                    var t = Math.floor(e);
                    return 1e3 * t + (e - t)
                }
            }]), e
        }(),
        d = function () {
            function e(t, n) {
                l(this, e);
                var r = this;
                this.player = t, this.el_ = this.createEl(), this.onceFlag = !1;
                ["click", "touchstart"].forEach(function (e) {
                    r.el_.addEventListener(e, function (e) {
                        e.preventDefault(), e.stopPropagation(), r.onClick()
                    }, !1)
                }), this.main = new p(t, n), "on" === n.switch && this.player.once("play", function () {
                    r.onChange(!0)
                })
            }
            return r(e, [{
                key: "createEl",
                value: function () {
                    return i.default.util.createDom("xg-bullet-btn", '<span class="txt">弹</span>', {}, "xgplayer-bullet-btn " + ("on" === this.player.config.bullet.switch ? "xgplayer-bullet-btn-active" : ""))
                }
            }, {
                key: "onClick",
                value: function () {
                    var e = this,
                        t = i.default.util;
                    t.toggleClass(e.el_, "xgplayer-bullet-btn-active");
                    var n = !!t.hasClass(e.el_, "xgplayer-bullet-btn-active");

                    function r() {
                        e.onceFlag = !1, e.main.channel.resetWithCb(e.onChange.bind(e))
                    }
                    n ? e.player.paused || e.player.ended ? this.onceFlag || (this.onceFlag = !0, this.player.once("play", r)) : r() : (this.player.off("play", r), this.onChange(n))
                }
            }, {
                key: "onChange",
                value: function (e) {
                    var t = i.default.util,
                        n = this.player.root.querySelector(".xgplayer-bullet");
                    e ? (t.addClass(n, "xgplayer-has-bullet"), this.main.start()) : (t.removeClass(n, "xgplayer-has-bullet"), this.main.stop())
                }
            }]), e
        }();
    i.default.install("makeBullet", function () {
        var e = this,
            t = i.default.util;
        if (e.config.bullet) {
            var n = t.createDom("xg-bullet", "", {}, "xgplayer-bullet");
            e.root.appendChild(n);
            var r = new d(e, e.config.bullet);
            ["touchstart", "click"].forEach(function (t) {
                n.addEventListener(t, function (t) {
                    t.preventDefault(), t.stopPropagation(), e.paused ? e.play() : e.pause()
                }, !1)
            }), e.controls.appendChild(r.el_)
        }
    })
}, function (e, t, n) {
    "use strict";
    var r, i, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    /**
     * request-frame - requestAnimationFrame & cancelAnimationFrame polyfill for optimal cross-browser development.
     * @version v1.5.3
     * @license MIT
     * Copyright Julien Etienne 2015 All Rights Reserved.
     */
    ! function (a, s) {
        "object" === o(t) && void 0 !== e ? e.exports = s() : void 0 === (i = "function" == typeof (r = s) ? r.call(t, n, t, e) : r) || (e.exports = i)
    }(0, function () {
        return function (e) {
            var t, n, r, i = ["moz", "webkit"],
                o = "AnimationFrame",
                a = "Request" + o,
                s = window.mozRequestAnimationFrame,
                l = window.mozCancelAnimationFrame,
                u = s && !l,
                c = 0;

            function p() {
                var e = window.webkitRequestAnimationFrame,
                    t = window.requestAnimationFrame,
                    n = screen.width <= 768,
                    r = !(e && t),
                    i = !window.performance;
                return function (e, t, n, r) {
                    return !!e && function (e, t, n) {
                        return !(!e && !t || (console.warn(n), 0))
                    }(n, r, t)
                }(r && n && i, "setTimeout is being used as a substitiue for \n            requestAnimationFrame due to a bug within iOS 6 builds", e, t)
            }

            function d(e) {
                clearTimeout(e)
            }

            function f(e) {
                var t = Date.now(),
                    n = Math.max(c + 16, t);
                return setTimeout(function () {
                    e(c = n)
                }, n - t)
            }

            function h() {
                return Array.prototype.filter ? (t = window["request" + o] || window[i.filter(function (e) {
                    if (void 0 !== window[e + a]) return e
                }) + a] || f, p() ? f : t) : f
            }

            function g() {
                var e = [];
                return Array.prototype.map ? (i.map(function (t) {
                    return ["Cancel", "CancelRequest"].map(function (n) {
                        e.push(t + n + o)
                    })
                }), n = window["cancel" + o] || function (e, t) {
                    for (var n = void 0; t < e.length; t++)
                        if (window[e[t]]) {
                            n = window[e[t]];
                            break
                        }
                    return n
                }(e, 0) || d, p() ? d : n) : d
            }
            switch (Date.now || (Date.now = function () {
                return (new Date).getTime()
            }), e) {
                case "request":
                case "":
                    r = u ? f : h();
                    break;
                case "cancel":
                    r = g();
                    break;
                case "native":
                    u ? (window.requestAnimationFrame = f, window.cancelAnimationFrame = d) : (window.requestAnimationFrame = h(), window.cancelAnimationFrame = g());
                    break;
                default:
                    throw new Error("RequestFrame parameter is not a type.")
            }
            return r
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        i = function (e) {
            return function (e) {
                return !!e && "object" === (void 0 === e ? "undefined" : r(e))
            }(e) && ! function (e) {
                var t = Object.prototype.toString.call(e);
                return "[object RegExp]" === t || "[object Date]" === t || function (e) {
                    return e.$$typeof === o
                }(e)
            }(e)
        };
    var o = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

    function a(e, t) {
        return t && !0 === t.clone && i(e) ? l(function (e) {
            return Array.isArray(e) ? [] : {}
        }(e), e, t) : e
    }

    function s(e, t, n) {
        var r = e.slice();
        return t.forEach(function (t, o) {
            void 0 === r[o] ? r[o] = a(t, n) : i(t) ? r[o] = l(e[o], t, n) : -1 === e.indexOf(t) && r.push(a(t, n))
        }), r
    }

    function l(e, t, n) {
        var r = Array.isArray(t);
        return r === Array.isArray(e) ? r ? ((n || {
            arrayMerge: s
        }).arrayMerge || s)(e, t, n) : function (e, t, n) {
            var r = {};
            return i(e) && Object.keys(e).forEach(function (t) {
                r[t] = a(e[t], n)
            }), Object.keys(t).forEach(function (o) {
                i(t[o]) && e[o] ? r[o] = l(e[o], t[o], n) : r[o] = a(t[o], n)
            }), r
        }(e, t, n) : a(t, n)
    }
    l.all = function (e, t) {
        if (!Array.isArray(e) || e.length < 2) throw new Error("first argument should be an array with at least two elements");
        return e.reduce(function (e, n) {
            return l(e, n, t)
        })
    };
    var u = l;
    e.exports = u
}, function (e, t, n) {
    "use strict";
    var r = function (e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(n(0));
    r.default.install("loading", function () {
        var e = r.default.util.createDom("xg-loading", '\n    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewbox="0 0 100 100">\n      <path d="M100,50A50,50,0,1,1,50,0"></path>\n    </svg>\n    ', {}, "xgplayer-loading");
        this.root.appendChild(e), this.once("destroy", function () {
            e = null
        })
    })
}, function (e, t, n) {
    "use strict";
    (function (e) {
        return e && e.__esModule ? e : {
            default: e
        }
    })(n(0)).default.install("i18n", function () {
        var e = this,
            t = {},
            n = e.constructor.util;
        t.en = {
            HAVE_NOTHING: "There is no information on whether audio/video is ready",
            HAVE_METADATA: "audio/video metadata is ready ",
            HAVE_CURRENT_DATA: "Data about the current play location is available, but there is not enough data to play the next frame/millisecond",
            HAVE_FUTURE_DATA: "Current and at least one frame of data is available",
            HAVE_ENOUGH_DATA: "The available data is sufficient to start playing",
            NETWORK_EMPTY: "Audio/video has not been initialized",
            NETWORK_IDLE: "Audio/video is active and has been selected for resources, but no network is used",
            NETWORK_LOADING: "The browser is downloading the data",
            NETWORK_NO_SOURCE: "No audio/video source was found",
            MEDIA_ERR_ABORTED: "The fetch process is aborted by the user",
            MEDIA_ERR_NETWORK: "An error occurred while downloading",
            MEDIA_ERR_DECODE: "An error occurred while decoding",
            MEDIA_ERR_SRC_NOT_SUPPORTED: "Audio/video is not supported",
            REPLAY: "Replay",
            ERROR: "network is offline"
        }, t["zh-cn"] = {
            HAVE_NOTHING: "没有关于音频/视频是否就绪的信息",
            HAVE_METADATA: "音频/视频的元数据已就绪",
            HAVE_CURRENT_DATA: "关于当前播放位置的数据是可用的，但没有足够的数据来播放下一帧/毫秒",
            HAVE_FUTURE_DATA: "当前及至少下一帧的数据是可用的",
            HAVE_ENOUGH_DATA: "可用数据足以开始播放",
            NETWORK_EMPTY: "音频/视频尚未初始化",
            NETWORK_IDLE: "音频/视频是活动的且已选取资源，但并未使用网络",
            NETWORK_LOADING: "浏览器正在下载数据",
            NETWORK_NO_SOURCE: "未找到音频/视频来源",
            MEDIA_ERR_ABORTED: "取回过程被用户中止",
            MEDIA_ERR_NETWORK: "当下载时发生错误",
            MEDIA_ERR_DECODE: "当解码时发生错误",
            MEDIA_ERR_SRC_NOT_SUPPORTED: "不支持的音频/视频格式",
            REPLAY: "重播",
            ERROR: "网络连接似乎出现了问题"
        }, Object.defineProperty(e, "lang", {
            get: function () {
                return t[e.config.lang] || t.en
            },
            set: function (e) {
                "Object" === n.typeOf(e) && Object.keys(e).forEach(function (n) {
                    t[n] = e[n]
                })
            }
        })
    })
}, function (e, t, n) {
    "use strict";
    var r = function (e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(n(0));
    r.default.install("fullscreen", function () {
        var e = r.default.util,
            t = "M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z",
            n = "M598 214h212v212h-84v-128h-128v-84zM726 726v-128h84v212h-212v-84h128zM214 426v-212h212v84h-128v128h-84zM298 598v128h128v84h-212v-212h84z",
            i = e.createDom("xg-fullscreen", '<xg-icon class="xgplayer-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">\n            <path transform="scale(0.03 0.03)" d="' + n + '"></path>\n        </svg></xg-icon>', {}, "xgplayer-fullscreen"),
            o = this.config.lang && "zh-cn" === this.config.lang ? "全屏" : "Full screen",
            a = this.config.lang && "zh-cn" === this.config.lang ? "退出全屏" : "Exit full screen",
            s = this.controls,
            l = this.root,
            u = e.createDom("xg-tips", o, {}, "xgplayer-tips"),
            c = i.querySelector("path");
        i.appendChild(u);
        s.appendChild(i), ["click", "touchstart"].forEach(function (r) {
            i.addEventListener(r, function (r) {
                r.preventDefault(), r.stopPropagation(), e.hasClass(l, "xgplayer-fullscreen-active") || e.hasClass(l, "xgplayer-is-fullscreen") ? function (t) {
                    var r = document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled;
                    c.setAttribute("d", n), u.textContent = o, r ? document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen() : e.removeClass(t, "xgplayer-fullscreen-active")
                }(l) : function (n) {
                    var r = document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled;
                    c.setAttribute("d", t), u.textContent = a, r ? n.requestFullscreen ? n.requestFullscreen() : n.mozRequestFullScreen ? n.mozRequestFullScreen() : n.webkitRequestFullScreen ? n.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT) : n.msRequestFullscreen ? n.msRequestFullscreen() : e.addClass(n, "xgplayer-fullscreen-active") : e.addClass(n, "xgplayer-fullscreen-active")
                }(l)
            })
        });
        var p = function (r) {
            var i = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
            i && i === l ? (e.addClass(l, "xgplayer-is-fullscreen"), c.setAttribute("d", t), u.textContent = a) : (e.removeClass(l, "xgplayer-is-fullscreen"), c.setAttribute("d", n), u.textContent = o)
        };
        i.addEventListener("mouseenter", function (e) {
            e.preventDefault(), e.stopPropagation(), u.style.left = "50%";
            var t = u.getBoundingClientRect(),
                n = l.getBoundingClientRect();
            t.right > n.right && (u.style.left = -t.right + n.right + 16 + "px")
        }), ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"].forEach(function (e) {
            document.addEventListener(e, p)
        }), this.once("destroy", function () {
            ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"].forEach(function (e) {
                document.removeEventListener(e, p)
            }), i = null
        })
    })
}, function (e, t, n) {
    "use strict";
    var r = function (e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(n(0));
    r.default.install("__flex__", function () {
        var e = r.default.util.createDom("xg-placeholder", "", {}, "xgplayer-placeholder");
        this.controls.appendChild(e)
    })
}, function (e, t, n) {
    "use strict";
    var r = function (e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(n(0));
    r.default.install("error", function () {
        var e = this,
            t = r.default.util,
            n = t.createDom("xg-error", '<em class="xgplayer-error-text">请<span class="xgplayer-error-refresh">刷新</span>试试</em>', {}, "xgplayer-error");
        e.root.appendChild(n);
        var i = n.querySelector(".xgplayer-error-text"),
            o = n.querySelector(".xgplayer-error-refresh");
        e.on("error", function () {
            e.controls.style.display = "none", e.config.lang && "zh-cn" === e.config.lang ? i.innerHTML = (e.lang[e.video.error.message] || e.lang.ERROR) + '，请<span class="xgplayer-error-refresh">刷新</span>试试' : i.innerHTML = (e.lang[e.video.error.message] || e.lang.ERROR) + '，please try to <span class="xgplayer-error-refresh">refresh</span>', t.addClass(e.root, "xgplayer-is-error"), o = n.querySelector(".xgplayer-error-refresh")
        }), ["touchstart", "click"].forEach(function (t) {
            o.addEventListener(t, function (t) {
                e.controls.style.display = "flex", e.reload()
            })
        }), e.once("destroy", function () {
            o = null, n = null
        })
    })
}, function (e, t, n) {
    "use strict";
    var r = function (e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(n(0));
    r.default.install("definition", function () {
        var e = this,
            t = r.default.util,
            n = r.default.sniffer,
            i = t.createDom("xg-definition", "", {
                tabindex: 3
            }, "xgplayer-definition"),
            o = e.controls;
        "mobile" !== n.device && (e.on("resourceReady", function (n) {
            n && n instanceof Array && n.length > 1 && (t.addClass(e.root, "xgplayer-is-definition"), e.on("canplay", function () {
                var t = ["<ul>"],
                    r = e.config.url,
                    a = document.createElement("a");
                e.switchURL ? ["mp4", "hls", "flv"].every(function (t) {
                    return !e[t] || (a.href = e[t].url, r = a.href, !1)
                }) : r = e.currentSrc || e.src, n.forEach(function (e) {
                    a.href = e.url, t.push("<li url='" + e.url + "' cname='" + e.name + "' class='" + (a.href === r ? "definition" : "") + "'>" + e.name + "</li>")
                });
                var s = n.filter(function (e) {
                    return a.href = e.url, a.href === r
                });
                t.push('</ul><p class="name"><em>' + (s[0] || {
                    name: ""
                }).name + "</em></p>");
                var l = o.querySelector(".xgplayer-definition"),
                    u = e.config.lang && "zh-cn" === e.config.lang ? "清晰度" : "Quality";
                l ? l.innerHTML = '<xg-tips class="xgplayer-tips">' + u + "</xg-tips>" + t.join("") : (i.innerHTML = '<xg-tips class="xgplayer-tips">' + u + "</xg-tips>" + t.join(""), o.appendChild(i))
            }))
        }), ["touchstart", "click"].forEach(function (n) {
            i.addEventListener(n, function (n) {
                n.preventDefault(), n.stopPropagation();
                var r = n.target || n.srcElement,
                    o = document.createElement("a");
                if (r && "li" === r.tagName.toLocaleLowerCase()) {
                    if (Array.prototype.forEach.call(r.parentNode.childNodes, function (e) {
                            t.removeClass(e, "definition")
                        }), t.addClass(r, "definition"), r.parentNode.nextSibling.innerHTML = "<em>" + r.getAttribute("cname") + "</em>", o.href = r.getAttribute("url"), e.switchURL) {
                        var a = document.createElement("a");
                        ["mp4", "hls", "flv"].every(function (t) {
                            return !e[t] || (a = e[t].url, !1)
                        }), a.href === o.href || e.ended || e.switchURL(o.href)
                    } else if (o.href !== e.currentSrc) {
                        var s = e.currentTime,
                            l = e.paused;
                        e.ended || (e.src = o.href, e.once("canplay", function () {
                            e.currentTime = s, l || e.play()
                        }))
                    }
                    e.emit("definitionchange", o.href)
                } else !r || "p" !== r.tagName.toLocaleLowerCase() && "em" !== r.tagName.toLocaleLowerCase() || (t.addClass(i, "xgplayer-definition-active"), i.focus())
            }, !1)
        }), i.addEventListener("blur", function (e) {
            e.preventDefault(), e.stopPropagation(), t.removeClass(i, "xgplayer-definition-active")
        }), i.addEventListener("mouseenter", function (t) {
            t.preventDefault(), t.stopPropagation();
            var n = i.querySelector(".xgplayer-tips");
            n.style.left = "50%";
            var r = n.getBoundingClientRect(),
                o = e.root.getBoundingClientRect();
            r.right > o.right && (n.style.left = -r.right + o.right + 16 + "px")
        }), e.once("destroy", function () {
            i = null
        }))
    })
}, function (e, t, n) {
    var r = n(54);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]);
    var i = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(56)(r, i);
    r.locals && (e.exports = r.locals)
}, function (e, t, n) {
    (e.exports = n(55)(!1)).push([e.i, '@-webkit-keyframes playPause{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}99%{-webkit-transform:scale(1.3);transform:scale(1.3);opacity:0}to{-webkit-transform:scale(0);transform:scale(0);opacity:0}}@keyframes playPause{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}99%{-webkit-transform:scale(1.3);transform:scale(1.3);opacity:0}to{-webkit-transform:scale(0);transform:scale(0);opacity:0}}@-webkit-keyframes loadingRotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loadingRotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes loadingDashOffset{0%{stroke-dashoffset:236}to{stroke-dashoffset:0}}@keyframes loadingDashOffset{0%{stroke-dashoffset:236}to{stroke-dashoffset:0}}@-webkit-keyframes enterTips{0%{opacity:0;left:0;width:3px}50%{opacity:1;left:50%;width:5px}to{opacity:0;left:100%;width:3px}}@keyframes enterTips{0%{opacity:0;left:0;width:3px}50%{opacity:1;left:50%;width:5px}to{opacity:0;left:100%;width:3px}}.xgplayer{background:rgba(0,0,0,.26);width:100%;height:100%;position:relative}.xgplayer *{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}.xgplayer.xgplayer-is-fullscreen{width:100%!important;height:100%!important;z-index:9999}.xgplayer video{width:100%;height:100%;outline:none}.xgplayer-icon{display:block;width:40px;height:40px;overflow:hidden;fill:#fff}.xgplayer-controls{display:-webkit-flex;display:-moz-box;display:flex;position:absolute;bottom:0;left:0;right:0;height:40px;background-image:linear-gradient(-1deg,rgba(0,0,0,.3),transparent);z-index:10}.xgplayer-inactive .xgplayer-controls,.xgplayer-is-live .xgplayer-controls>*,.xgplayer-nostart .xgplayer-controls{display:none}.xgplayer-is-live .xgplayer-controls .xgplayer-fullscreen,.xgplayer-is-live .xgplayer-controls .xgplayer-live,.xgplayer-is-live .xgplayer-controls .xgplayer-placeholder,.xgplayer-is-live .xgplayer-controls .xgplayer-play,.xgplayer-is-live .xgplayer-controls .xgplayer-volume{display:block}.xgplayer-progress{display:block;position:absolute;height:20px;line-height:20px;left:0;right:0;outline:none;top:-10px;z-index:15}.xgplayer-progress-outer{background:hsla(0,0%,100%,.3);display:block;height:3px;line-height:3px;margin-top:8.5px;width:100%;position:relative;cursor:pointer}.xgplayer-progress-cache,.xgplayer-progress-played{display:block;height:100%;line-height:1;position:absolute;left:0;top:0}.xgplayer-progress-cache{width:0;background:hsla(0,0%,100%,.5)}.xgplayer-progress-played{display:block;width:0;background-image:linear-gradient(-90deg,#fa1f41,#e31106);border-radius:0 1.5px 1.5px 0}.xgplayer-progress-played:after{content:" ";display:none;position:absolute;right:-4px;top:-4px;width:14px;height:14px;border-radius:50%;background:#fff;box-shadow:0 0 2px 0 rgba(0,0,0,.26)}.xgplayer-progress-point{position:absolute}.xgplayer-progress-point.xgplayer-tips{margin-left:0;top:-25px;display:none;z-index:100}.xgplayer-progress-thumbnail{position:absolute;-moz-box-sizing:border-box;box-sizing:border-box}.xgplayer-progress-thumbnail.xgplayer-tips{margin-left:0;display:none;z-index:99}.xgplayer-progress:focus .xgplayer-progress-outer,.xgplayer-progress:hover .xgplayer-progress-outer{height:6px;margin-top:7px}.xgplayer-progress:focus .xgplayer-progress-played:after,.xgplayer-progress:hover .xgplayer-progress-played:after{display:block}.xgplayer-play{position:relative;-webkit-order:0;-moz-box-ordinal-group:1;order:0;display:block;cursor:pointer}.xgplayer-play .xgplayer-icon{margin-top:3px}.xgplayer-play:hover .xgplayer-tips{display:block}.xgplayer-time{-webkit-order:2;-moz-box-ordinal-group:3;order:2;font-family:ArialMT;font-size:13px;color:#fff;line-height:40px;display:inline-block}.xgplayer-time span:after{content:"/";display:inline-block;padding:0 3px}.xgplayer-time em{color:hsla(0,0%,100%,.5)}.xgplayer-tips{background:rgba(0,0,0,.54);border-radius:1px;display:none;position:absolute;font-family:PingFangSC-Regular;font-size:11px;color:#fff;padding:2px 4px;text-align:center;top:-30px;left:50%;margin-left:-16px;width:auto;white-space:nowrap}.xgplayer-volume{outline:none;-webkit-order:4;-moz-box-ordinal-group:5;order:4;display:inline-block;position:relative;cursor:pointer}.xgplayer-volume .xgplayer-icon{margin-top:8px}.xgplayer-slider{height:88px;background:rgba(0,0,0,.54);border-radius:1px;bottom:50px;outline:none}.xgplayer-slider,.xgplayer-slider:after{display:block;position:absolute;width:28px;left:0}.xgplayer-slider:after{content:" ";height:15px;bottom:-15px;z-index:20}.xgplayer-bar,.xgplayer-drag{display:block;position:absolute;bottom:6px;left:12px;background:hsla(0,0%,100%,.3);border-radius:100px;width:4px;height:76px;outline:none}.xgplayer-drag{bottom:0;left:0;background:#fa1f41;max-height:76px}.xgplayer-drag:after{content:" ";display:inline-block;width:8px;height:8px;background:#fff;box-shadow:0 0 5px 0 rgba(0,0,0,.26);position:absolute;border-radius:50%;left:-2px;top:-6px}.xgplayer-placeholder{-webkit-flex:1;-moz-box-flex:1;flex:1;-webkit-order:3;-moz-box-ordinal-group:4;order:3;display:block}.xgplayer-start{border-radius:50%;display:inline-block;width:70px;height:70px;background:hsla(0,0%,100%,.3);overflow:hidden;text-align:center;line-height:70px;vertical-align:middle;position:absolute;left:50%;top:50%;z-index:1000;margin:-55px auto auto -35px;cursor:pointer}.xgplayer-inactive .xgplayer-start,.xgplayer-nostart .xgplayer-start{margin:-35px auto auto -35px}.xgplayer-start svg{fill:hsla(0,0%,100%,.7);margin:14px}.xgplayer-start.xgplayer-start-interact{-webkit-animation:playPause .4s ease-out forwards;animation:playPause .4s ease-out forwards}.xgplayer-start:hover{background:hsla(0,0%,100%,.5)}.xgplayer-start:hover svg{fill:hsla(0,0%,100%,.6)}.xgplayer-textTrack{-webkit-order:7;-moz-box-ordinal-group:8;order:7;width:60px;position:relative;outline:none;display:block;cursor:pointer;margin-left:10px;margin-top:9px;margin-bottom:11px}.xgplayer-textTrack.xgplayer-textTrack-active ul{display:block}.xgplayer-textTrack ul{display:none;list-style:none;width:78px;background:rgba(0,0,0,.54);border-radius:1px;position:absolute;bottom:30px;left:0;text-align:center;white-space:nowrap;margin-left:-10px;z-index:26}.xgplayer-textTrack ul li{opacity:.7;font-family:PingFangSC-Regular;font-size:11px;color:hsla(0,0%,100%,.8);padding:6px 13px}.xgplayer-textTrack ul li.textTrack{color:#fff;opacity:1}.xgplayer-textTrack ul:after{content:" ";display:inline-block;height:30px;width:100%;position:absolute;bottom:-20px;left:0}.xgplayer-textTrack .name{text-align:center;font-family:PingFangSC-Regular;font-size:13px;line-height:20px;height:20px;color:hsla(0,0%,100%,.8)}.xgplayer-textTrack .name em{width:60px;height:20px;line-height:20px;background:rgba(0,0,0,.38);border-radius:10px;display:inline-block;vertical-align:middle}.xgplayer-definition{-webkit-order:5;-moz-box-ordinal-group:6;order:5;width:60px;position:relative;outline:none;display:none;cursor:pointer;margin-left:10px;margin-top:9px;margin-bottom:11px}.xgplayer-definition .xgplayer-tips{margin-left:-20px}.xgplayer-definition:hover .xgplayer-tips{display:block;top:-40px}.xgplayer-definition.xgplayer-definition-active ul{display:block}.xgplayer-definition.xgplayer-definition-active .xgplayer-tips{display:none}.xgplayer-definition ul{display:none;list-style:none;width:78px;background:rgba(0,0,0,.54);border-radius:1px;position:absolute;bottom:30px;left:0;text-align:center;white-space:nowrap;margin-left:-10px;z-index:26}.xgplayer-definition ul li{opacity:.7;font-family:PingFangSC-Regular;font-size:11px;color:hsla(0,0%,100%,.8);padding:6px 13px}.xgplayer-definition ul li.definition{color:#fff;opacity:1}.xgplayer-definition ul:after{content:" ";display:inline-block;height:30px;width:100%;position:absolute;bottom:-20px;left:0}.xgplayer-definition .name{text-align:center;font-family:PingFangSC-Regular;font-size:13px;line-height:20px;height:20px;color:hsla(0,0%,100%,.8)}.xgplayer-definition .name em{width:60px;height:20px;line-height:20px;background:rgba(0,0,0,.38);border-radius:10px;display:inline-block;vertical-align:middle}.xgplayer-is-definition .xgplayer-definition{display:block}.xgplayer-playback{-webkit-order:8;-moz-box-ordinal-group:9;order:8;position:relative;outline:none;display:block;cursor:pointer;margin-left:10px;margin-top:9px;margin-bottom:11px;height:20px}.xgplayer-playback .name{text-align:center;font-family:PingFangSC-Regular;font-size:13px;line-height:20px;height:20px;color:hsla(0,0%,100%,.8)}.xgplayer-playback .name span{width:40px;height:20px;line-height:20px;background:rgba(0,0,0,.38);border-radius:10px;display:inline-block;vertical-align:middle}.xgplayer-playback:hover .xgplayer-tips{display:block;top:-40px}.xgplayer-pip{-webkit-order:9;-moz-box-ordinal-group:10;order:9;position:relative;outline:none;display:block;cursor:pointer;margin-left:10px;margin-top:9px;margin-bottom:11px;height:20px}.xgplayer-pip .name{text-align:center;font-family:PingFangSC-Regular;font-size:13px;line-height:20px;height:20px;color:hsla(0,0%,100%,.8)}.xgplayer-pip .name span{width:60px;height:20px;line-height:20px;background:rgba(0,0,0,.38);border-radius:10px;display:inline-block;vertical-align:middle}.xgplayer.xgplayer-pip-active{position:fixed!important;right:0;bottom:200px;width:320px!important;height:180px!important;z-index:999!important}.xgplayer.xgplayer-pip-active .xgplayer-controls,.xgplayer.xgplayer-pip-active xg-bullet{display:none}.xgplayer.xgplayer-pip-active .xgplayer-pip-lay{display:block}.xgplayer-pip-lay{position:absolute;top:26px;left:0;z-index:1450;cursor:pointer;background-color:transparent;display:none}.xgplayer-pip-lay,.xgplayer-pip-lay div{width:100%;height:100%}.xgplayer-pip-drag{cursor:move;position:absolute;top:0;left:0;width:100%;height:26px;line-height:26px;background-image:linear-gradient(rgba(0,0,0,.3),transparent);z-index:1500;display:none}.xgplayer.xgplayer-pip-active .xgplayer-pip-drag{display:-webkit-flex;display:-moz-box;display:flex}.xgplayer.xgplayer-inactive .xgplayer-pip-drag{display:none}.xgplayer-fullscreen{-webkit-order:10;-moz-box-ordinal-group:11;order:10;position:relative;display:inline-block;cursor:pointer}.xgplayer-fullscreen .xgplayer-icon{margin:4px -4px 0 0}.xgplayer-fullscreen:hover .xgplayer-tips{display:block}.xgplayer.xgplayer-fullscreen-active{position:fixed!important;left:0!important;top:0!important;width:100%!important;height:100%!important;z-index:99999!important}.xgplayer-bullet-btn{width:32px;height:20px;border-radius:100px;background-color:#ccc;-moz-box-sizing:border-box;box-sizing:border-box;outline:none;cursor:pointer;-webkit-order:6;-moz-box-ordinal-group:7;order:6;z-index:26;position:relative;text-align:center;margin:10px auto}.xgplayer-bullet-btn.xgplayer-bullet-btn-active{padding-left:12px;background-color:#f85959}.xgplayer-bullet-btn span.txt{width:20px;height:20px;line-height:20px;text-align:center;display:block;border-radius:100px;background-color:#fff;box-shadow:-2px 0 0 0 rgba(0,0,0,.04);font-family:PingFangSC;font-size:10px;font-weight:500;color:#f44336}.xgplayer-bullet{display:none;top:0;left:0;right:0;bottom:3em;overflow:hidden;outline:none}.xgplayer-bullet,.xgplayer-bullet span{position:absolute;z-index:9;cursor:pointer}.xgplayer-bullet span{padding:5px;white-space:nowrap}.xgplayer-has-bullet{display:block}.xgplayer-loading{display:none;width:100px;height:100px;overflow:hidden;-webkit-transform:scale(.7);-ms-transform:scale(.7);transform:scale(.7);position:absolute;left:50%;top:50%;margin:-70px auto auto -50px}.xgplayer-loading svg{border-radius:50%;-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-animation:loadingRotate 1s linear infinite;animation:loadingRotate 1s linear infinite}.xgplayer-loading svg path{stroke:#ddd;stroke-dasharray:236;-webkit-animation:loadingDashOffset 2s linear infinite;animation:loadingDashOffset 2s linear infinite;animation-direction:alternate-reverse;fill:none;stroke-width:12px}.xgplayer-nostart .xgplayer-loading{display:none}.xgplayer-isloading .xgplayer-loading{display:block}.xgplayer-replay{position:absolute;left:0;top:0;width:100%;height:100%;z-index:500;display:none;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;background:rgba(0,0,0,.54);-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;flex-direction:column}.xgplayer-replay svg{background:rgba(0,0,0,.58);border-radius:100%;cursor:pointer}.xgplayer-replay svg path{-webkit-transform:translate(20px,21px);-ms-transform:translate(20px,21px);transform:translate(20px,21px);fill:#ddd}.xgplayer-replay svg:hover{background:rgba(0,0,0,.38)}.xgplayer-replay svg:hover path{fill:#fff}.xgplayer-replay .xgplayer-replay-txt{display:inline-block;font-family:PingFangSC-Regular;font-size:14px;color:#fff;line-height:34px;cursor:pointer}.xgplayer.xgplayer-ended .xgplayer-controls{display:none}.xgplayer.xgplayer-ended .xgplayer-replay{display:-webkit-flex;display:-moz-box;display:flex}.xgplayer-enter{display:none;position:absolute;left:0;top:0;width:100%;height:100%;background:url("https://s2.pstatp.com/cdn/expire-1-M/byted-player-images/1.0.0/xg-bg.svg") no-repeat 50%/cover;z-index:1100}.xgplayer-enter .xgplayer-enter-logo{display:block;position:absolute;left:50%;top:50%;width:130px;height:38px;margin:-19px auto auto -69px;background:url("https://i.loli.net/2018/09/10/5b95c052a7882.png") no-repeat 50%/cover}.xgplayer-enter .xgplayer-enter-tips{display:none;position:absolute;left:50%;top:50%;width:120px;height:1px;background:linear-gradient(90deg,#000,red,red,red,#000);margin:32px auto auto -62px}.xgplayer-enter .xgplayer-enter-tips:before{content:" ";display:block;width:5px;height:1px;border-radius:50%;position:absolute;left:0;top:0;-webkit-animation:enterTips 1.6s linear infinite;animation:enterTips 1.6s linear infinite;background:#fff}.xgplayer-is-enter .xgplayer-enter{display:block}.xgplayer-poster{position:absolute;left:0;top:0;width:100%;height:100%;z-index:100;background-size:cover}.xgplayer-live{display:block;font-size:12px;color:#fff;line-height:40px;-webkit-order:1;-moz-box-ordinal-group:2;order:1}.xgplayer .xgplayer-none{display:none}.xgplayer-error{background:#000;display:none;position:absolute;left:0;top:0;width:100%;height:100%;z-index:1200;font-family:PingFangSC-Regular;font-size:14px;color:#fff;text-align:center;line-height:100%;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;-webkit-align-items:center;-moz-box-align:center;align-items:center}.xgplayer-error .xgplayer-error-refresh{color:#fa1f41;padding:0 3px;cursor:pointer}.xgplayer-is-error .xgplayer-error{display:-webkit-flex;display:-moz-box;display:flex}.xgplayer-error .xgplayer-error-text{line-height:18px;margin:auto 6px}.xgplayer-mobile.xgplayer-ended .xgplayer-start,.xgplayer-mobile.xgplayer-inactive .xgplayer-start{display:none}.xgplayer-mobile .xgplayer-start{width:60px;height:60px;line-height:60px;display:none;margin:-50px auto auto -30px}.xgplayer-mobile .xgplayer-start svg{margin:10px}.xgplayer-mobile.xgplayer-nostart .xgplayer-start{margin:-30px auto auto -30px;display:block}.xgplayer-mobile .xgplayer-loading{-webkit-transform:scale(.5);-ms-transform:scale(.5);transform:scale(.5)}.xgplayer-mobile.xgplayer-mobile-npassed .xgplayer-controls,.xgplayer-mobile.xgplayer-mobile-npassed .xgplayer-poster,.xgplayer-mobile.xgplayer-mobile-npassed .xgplayer-start{display:none}', ""])
}, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        var t = [];
        return t.toString = function () {
            return this.map(function (t) {
                var n = function (e, t) {
                    var n = e[1] || "",
                        r = e[3];
                    if (!r) return n;
                    if (t && "function" == typeof btoa) {
                        var i = function (e) {
                                return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + " */"
                            }(r),
                            o = r.sources.map(function (e) {
                                return "/*# sourceURL=" + r.sourceRoot + e + " */"
                            });
                        return [n].concat(o).concat([i]).join("\n")
                    }
                    return [n].join("\n")
                }(t, e);
                return t[2] ? "@media " + t[2] + "{" + n + "}" : n
            }).join("")
        }, t.i = function (e, n) {
            "string" == typeof e && (e = [
                [null, e, ""]
            ]);
            for (var r = {}, i = 0; i < this.length; i++) {
                var o = this[i][0];
                "number" == typeof o && (r[o] = !0)
            }
            for (i = 0; i < e.length; i++) {
                var a = e[i];
                "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), t.push(a))
            }
        }, t
    }
}, function (e, t, n) {
    var r = {},
        i = function (e) {
            var t;
            return function () {
                return void 0 === t && (t = e.apply(this, arguments)), t
            }
        }(function () {
            return window && document && document.all && !window.atob
        }),
        o = function (e) {
            var t = {};
            return function (e) {
                if ("function" == typeof e) return e();
                if (void 0 === t[e]) {
                    var n = function (e) {
                        return document.querySelector(e)
                    }.call(this, e);
                    if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                        n = n.contentDocument.head
                    } catch (e) {
                        n = null
                    }
                    t[e] = n
                }
                return t[e]
            }
        }(),
        a = null,
        s = 0,
        l = [],
        u = n(57);

    function c(e, t) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n],
                o = r[i.id];
            if (o) {
                o.refs++;
                for (var a = 0; a < o.parts.length; a++) o.parts[a](i.parts[a]);
                for (; a < i.parts.length; a++) o.parts.push(y(i.parts[a], t))
            } else {
                var s = [];
                for (a = 0; a < i.parts.length; a++) s.push(y(i.parts[a], t));
                r[i.id] = {
                    id: i.id,
                    refs: 1,
                    parts: s
                }
            }
        }
    }

    function p(e, t) {
        for (var n = [], r = {}, i = 0; i < e.length; i++) {
            var o = e[i],
                a = t.base ? o[0] + t.base : o[0],
                s = {
                    css: o[1],
                    media: o[2],
                    sourceMap: o[3]
                };
            r[a] ? r[a].parts.push(s) : n.push(r[a] = {
                id: a,
                parts: [s]
            })
        }
        return n
    }

    function d(e, t) {
        var n = o(e.insertInto);
        if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var r = l[l.length - 1];
        if ("top" === e.insertAt) r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), l.push(t);
        else if ("bottom" === e.insertAt) n.appendChild(t);
        else {
            if ("object" != typeof e.insertAt || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var i = o(e.insertInto + " " + e.insertAt.before);
            n.insertBefore(t, i)
        }
    }

    function f(e) {
        if (null === e.parentNode) return !1;
        e.parentNode.removeChild(e);
        var t = l.indexOf(e);
        t >= 0 && l.splice(t, 1)
    }

    function h(e) {
        var t = document.createElement("style");
        return e.attrs.type = "text/css", g(t, e.attrs), d(e, t), t
    }

    function g(e, t) {
        Object.keys(t).forEach(function (n) {
            e.setAttribute(n, t[n])
        })
    }

    function y(e, t) {
        var n, r, i, o;
        if (t.transform && e.css) {
            if (!(o = t.transform(e.css))) return function () {};
            e.css = o
        }
        if (t.singleton) {
            var l = s++;
            n = a || (a = h(t)), r = m.bind(null, n, l, !1), i = m.bind(null, n, l, !0)
        } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function (e) {
            var t = document.createElement("link");
            return e.attrs.type = "text/css", e.attrs.rel = "stylesheet", g(t, e.attrs), d(e, t), t
        }(t), r = function (e, t, n) {
            var r = n.css,
                i = n.sourceMap,
                o = void 0 === t.convertToAbsoluteUrls && i;
            (t.convertToAbsoluteUrls || o) && (r = u(r));
            i && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
            var a = new Blob([r], {
                    type: "text/css"
                }),
                s = e.href;
            e.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s)
        }.bind(null, n, t), i = function () {
            f(n), n.href && URL.revokeObjectURL(n.href)
        }) : (n = h(t), r = function (e, t) {
            var n = t.css,
                r = t.media;
            r && e.setAttribute("media", r);
            if (e.styleSheet) e.styleSheet.cssText = n;
            else {
                for (; e.firstChild;) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n))
            }
        }.bind(null, n), i = function () {
            f(n)
        });
        return r(e),
            function (t) {
                if (t) {
                    if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                    r(e = t)
                } else i()
            }
    }
    e.exports = function (e, t) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        (t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || "boolean" == typeof t.singleton || (t.singleton = i()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
        var n = p(e, t);
        return c(n, t),
            function (e) {
                for (var i = [], o = 0; o < n.length; o++) {
                    var a = n[o];
                    (s = r[a.id]).refs--, i.push(s)
                }
                e && c(p(e, t), t);
                for (o = 0; o < i.length; o++) {
                    var s;
                    if (0 === (s = i[o]).refs) {
                        for (var l = 0; l < s.parts.length; l++) s.parts[l]();
                        delete r[s.id]
                    }
                }
            }
    };
    var v = function () {
        var e = [];
        return function (t, n) {
            return e[t] = n, e.filter(Boolean).join("\n")
        }
    }();

    function m(e, t, n, r) {
        var i = n ? "" : r.css;
        if (e.styleSheet) e.styleSheet.cssText = v(t, i);
        else {
            var o = document.createTextNode(i),
                a = e.childNodes;
            a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(o, a[t]) : e.appendChild(o)
        }
    }
}, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        var t = "undefined" != typeof window && window.location;
        if (!t) throw new Error("fixUrls requires window.location");
        if (!e || "string" != typeof e) return e;
        var n = t.protocol + "//" + t.host,
            r = n + t.pathname.replace(/\/[^\/]*$/, "/");
        return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (e, t) {
            var i, o = t.trim().replace(/^"(.*)"$/, function (e, t) {
                return t
            }).replace(/^'(.*)'$/, function (e, t) {
                return t
            });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o) ? e : (i = 0 === o.indexOf("//") ? o : 0 === o.indexOf("/") ? n + o : r + o.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")")
        })
    }
}]);