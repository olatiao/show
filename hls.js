! function (e) {
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
    n.m = e, n.c = t, n.d = function (e, t, r) {
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
    var r, i, a, o, u, s, f, c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        d = n(10),
        l = n(24),
        h = Function.prototype.apply,
        p = Function.prototype.call,
        v = Object.create,
        y = Object.defineProperty,
        b = Object.defineProperties,
        w = Object.prototype.hasOwnProperty,
        m = {
            configurable: !0,
            enumerable: !1,
            writable: !0
        };
    u = {
        on: r = function (e, t) {
            var n;
            return l(t), w.call(this, "__ee__") ? n = this.__ee__ : (n = m.value = v(null), y(this, "__ee__", m), m.value = null), n[e] ? "object" === c(n[e]) ? n[e].push(t) : n[e] = [n[e], t] : n[e] = t, this
        },
        once: i = function (e, t) {
            var n, i;
            return l(t), i = this, r.call(this, e, n = function () {
                a.call(i, e, n), h.call(t, this, arguments)
            }), n.__eeOnceListener__ = t, this
        },
        off: a = function (e, t) {
            var n, r, i, a;
            if (l(t), !w.call(this, "__ee__")) return this;
            if (!(n = this.__ee__)[e]) return this;
            if ("object" === (void 0 === (r = n[e]) ? "undefined" : c(r)))
                for (a = 0; i = r[a]; ++a) i !== t && i.__eeOnceListener__ !== t || (2 === r.length ? n[e] = r[a ? 0 : 1] : r.splice(a, 1));
            else r !== t && r.__eeOnceListener__ !== t || delete n[e];
            return this
        },
        emit: o = function (e) {
            var t, n, r, i, a;
            if (w.call(this, "__ee__") && (i = this.__ee__[e]))
                if ("object" === (void 0 === i ? "undefined" : c(i))) {
                    for (n = arguments.length, a = new Array(n - 1), t = 1; t < n; ++t) a[t - 1] = arguments[t];
                    for (i = i.slice(), t = 0; r = i[t]; ++t) h.call(r, this, a)
                } else switch (arguments.length) {
                    case 1:
                        p.call(i, this);
                        break;
                    case 2:
                        p.call(i, this, arguments[1]);
                        break;
                    case 3:
                        p.call(i, this, arguments[1], arguments[2]);
                        break;
                    default:
                        for (n = arguments.length, a = new Array(n - 1), t = 1; t < n; ++t) a[t - 1] = arguments[t];
                        h.call(i, this, a)
                }
        }
    }, s = {
        on: d(r),
        once: d(i),
        off: d(a),
        emit: d(o)
    }, f = b({}, s), e.exports = t = function (e) {
        return null == e ? v(f) : b(Object(e), s)
    }, t.methods = u
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
        i = u(n(3)),
        a = u(n(29)),
        o = u(n(30));

    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var s = {
            1: ["video", "MPEG-1"],
            2: ["video", "MPEG-2"],
            27: ["video", "AVC.H264"],
            234: ["video", "VC-1"],
            3: ["audio", "MPEG-1"],
            4: ["audio", "MPEG-2"],
            15: ["audio", "MPEG-2.AAC"],
            17: ["audio", "MPEG-4.AAC"],
            128: ["audio", "LPCM"],
            129: ["audio", "AC3"],
            6: ["audio", "AC3"],
            130: ["audio", "DTS"],
            131: ["audio", "Dolby TrueHD"],
            132: ["audio", "AC3-Plus"],
            133: ["audio", "DTS-HD"],
            134: ["audio", "DTS-MA"],
            161: ["audio", "AC3-Plus-SEC"],
            162: ["audio", "DTS-HD-SEC"]
        },
        f = function () {
            function e(t) {
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var n = new a.default(t);
                this.header = new e.Header(n), this.body = new e.Payload(n, this)
            }
            return r(e, null, [{
                key: "Header",
                value: function (e) {
                    this.sync = e.readUint8();
                    var t = e.readUint16();
                    this.error = t >>> 15, this.payload = t >>> 14 & 1, this.priority = t >>> 13 & 1, this.pid = 8191 & t, t = e.readUint8(), this.scrambling = t >> 6 & 3, this.adaptation = t >> 4 & 3, this.continuity = 15 & t, this.packet = 0 === this.pid ? "PAT" : "MEDIA"
                }
            }, {
                key: "Payload",
                value: function (t, n) {
                    var r = n.header.pid,
                        i = void 0;
                    switch (r) {
                        case 0:
                            i = new e.PAT(t);
                            break;
                        case 1:
                            i = new e.CAT(t);
                            break;
                        case 2:
                            i = new e.TSDT(t);
                            break;
                        case 8191:
                            i = !1;
                            break;
                        default:
                            if (e.PATSpace.some(function (e) {
                                    return e.pid === r
                                })) i = new e.PMT(t, n);
                            else {
                                var a = e.PMTSpace ? e.PMTSpace.filter(function (e) {
                                    return e.pid === r
                                }) : [];
                                i = !!a.length && new e.Media(t, n, s[a[0].streamType][0])
                            }
                    }
                    return i
                }
            }, {
                key: "PAT",
                value: function (t) {
                    var n = t.readUint8();
                    t.skip(n), n = t.readUint8(), this.tabelID = n, n = t.readUint16(), this.error = n >>> 7, this.zero = n >>> 6 & 1, this.sectionLength = 4095 & n, this.streamID = t.readUint16(), this.current = 1 & t.readUint8(), this.sectionNumber = t.readUint8(), this.lastSectionNumber = t.readUint8();
                    for (var r = (this.sectionLength - 9) / 4, i = [], a = 0; a < r; a++) {
                        var o = t.readUint16(),
                            u = 8191 & t.readUint16();
                        i.push({
                            program: o,
                            pid: u,
                            type: 0 === o ? "network" : "mapPID"
                        })
                    }
                    this.list = i, e.PATSpace = e.PATSpace.concat(i), this.program = t.readUint16(), this.pid = 8191 & t.readUint16(), t.dataview.byteLength - t.position >= 4 && (this.crc32 = t.readUint32())
                }
            }, {
                key: "PMT",
                value: function (t, n) {
                    var r = this;
                    n.header.packet = "PMT";
                    var i = t.readUint8();
                    t.skip(i), i = t.readUint8(), this.tableID = i, i = t.readUint16(), this.sectionLength = 4095 & i, this.program = t.readUint16(), this.current = 1 & t.readUint8(), this.order = t.readUint8(), this.lastOrder = t.readUint8(), this.PCR_PID = 8191 & t.readUint16(), this.programLength = 4095 & t.readUint16();
                    for (var a = (this.sectionLength - 13) / 5, o = [], u = 0; u < a; u++) o.push({
                        streamType: t.readUint8(),
                        pid: 8191 & t.readUint16(),
                        es: 4095 & t.readUint16()
                    });
                    this.list = o, e.PMTSpace || (e.PMTSpace = []), e.PMTSpace = e.PMTSpace.concat(o.map(function (e) {
                        return {
                            pid: e.pid,
                            es: e.es,
                            streamType: e.streamType,
                            program: r.program
                        }
                    })), t.dataview.byteLength - t.position >= 4 && (this.crc32 = t.readUint32())
                }
            }, {
                key: "Media",
                value: function (e, t, n) {
                    var r = t.header;
                    if (this.start = e.position, this.type = n, 3 === r.adaptation && (this.adaptationLength = e.readUint8(), this.adaptationLength > 0)) {
                        var i = e.readUint8();
                        this.discontinue = i >>> 7, this.access = i >>> 6 & 1, this.priority = i >>> 5 & 1, this.PCR = i >>> 4 & 1, this.OPCR = i >>> 3 & 1, this.splicePoint = i >>> 2 & 1, this.transportPrivate = i >>> 1 & 1, this.adaptationField = 1 & i;
                        var o = e.position;
                        if (1 === this.PCR && (this.programClockBase = e.readUint32() << 1, i = e.readUint16(), this.programClockBase |= i >>> 15, this.programClockExtension = 511 & i), 1 === this.OPCR && (this.originProgramClockBase = e.readUint32() << 1, i = e.readUint16(), this.originProgramClockBase += i >>> 15, this.originProgramClockExtension = 511 & i), 1 === this.splicePoint && (this.spliceCountdown = e.readUint8()), 1 === this.transportPrivate)
                            for (var u = e.readUint8(), s = [], f = 0; f < u; f++) s.push(e.readUint8());
                        if (1 === this.adaptationField) {
                            var c = e.readUint8(),
                                d = e.readUint8(),
                                l = e.position,
                                h = d >>> 6 & 1,
                                p = d >>> 5 & 1;
                            1 === d >>> 7 && (d = e.readUint16(), this.ltwValid = d >>> 15, this.ltwOffset = 61439 & d), 1 === h && (d = e.readUint24(), this.piecewiseRate = 4194303 & d), 1 === p && (d = e.readInt8(), this.spliceType = d >>> 4, this.dtsNextAU1 = d >>> 1 & 7, this.marker1 = 1 & d, d = e.readUint16(), this.dtsNextAU2 = d >>> 1, this.marker2 = 1 & d, d = e.readUint16(), this.dtsNextAU3 = d), e.skip(c - 1 - (e.position - l))
                        }
                        var v = this.adaptationLength - 1 - (e.position - o);
                        e.skip(v)
                    }
                    this.buffer = new a.default(e.buffer.slice(e.position))
                }
            }, {
                key: "PES",
                value: function (t) {
                    var n = t[0],
                        r = n.body.buffer,
                        i = r.readUint24();
                    if (this.header = n.header, 1 !== i) throw new Error("this is not pes packet");
                    var a = r.readUint8();
                    a >= 224 && a <= 239 && (this.type = "video"), a >= 192 && a <= 223 && (this.type = "audio");
                    var o = r.readUint16();
                    if (this.packetLength = o, "video" !== this.type && "audio" !== this.type) throw new Error("format is not supported");
                    var u = r.readUint8();
                    if (2 !== u >>> 6) throw new Error("error when parse pes header");
                    u = r.readUint8(), this.ptsDTSFlag = u >>> 6, this.escrFlag = u >>> 5 & 1, this.esRateFlag = u >>> 4 & 1, this.dsmFlag = u >>> 3 & 1, this.additionalFlag = u >>> 2 & 1, this.crcFlag = u >>> 1 & 1, this.extensionFlag = 1 & u, this.pesHeaderLength = r.readUint8();
                    var s = this.pesHeaderLength;
                    if (2 === this.ptsDTSFlag) {
                        var f = [];
                        u = r.readUint8(), f.push(u >>> 1 & 7), u = r.readUint16(), f.push(u >>> 1), u = r.readUint16(), f.push(u >>> 1), this.pts = f[0] << 30 | f[1] << 15 | f[2], s -= 5, "video" === this.type && (this.dts = this.pts)
                    }
                    if (3 === this.ptsDTSFlag) {
                        var c = [];
                        u = r.readUint8(), c.push(u >>> 1 & 7), u = r.readUint16(), c.push(u >>> 1), u = r.readUint16(), c.push(u >>> 1), this.pts = c[0] << 30 | c[1] << 15 | c[2];
                        var d = [];
                        u = r.readUint8(), d.push(u >>> 1 & 7), u = r.readUint16(), d.push(u >>> 1), u = r.readUint16(), d.push(u >>> 1), this.dts = d[0] << 30 | d[1] << 15 | d[2], s -= 10
                    }
                    if (1 === this.escrFlag) {
                        var l = [],
                            h = [];
                        u = r.readUint8(), l.push(u >>> 3 & 7), l.push(3 & u), u = r.readUint16(), l.push(u >>> 13), l.push(3 & u), u = r.readUint16(), l.push(u >>> 13), h.push(3 & u), u = r.readUint8(), h.push(u >>> 1), this.escr = 300 * (l[0] << 30 | l[1] << 28 | l[2] << 15 | l[3] << 13 | l[4]) + (h[0] << 7 | h[1]), s -= 6
                    }
                    if (1 === this.esRateFlag && (u = r.readUint24(), this.esRate = u >>> 1 & 4194303, s -= 3), 1 === this.dsmFlag) throw new Error("not support DSM_trick_mode");
                    if (1 === this.additionalFlag && (u = r.readUint8(), this.additionalCopyInfo = 127 & u, s -= 1), 1 === this.crcFlag && (this.pesCRC = r.readUint16(), s -= 2), 1 === this.extensionFlag) throw new Error("not support extension");
                    s > 0 && r.skip(s), this.ES = new e.ES(r, this.type, t.slice(1))
                }
            }, {
                key: "ES",
                value: function (t, n, r) {
                    var a = void 0;
                    if ("video" === n) {
                        if (1 !== (a = t.readUint32()) && (t.back(4), 1 !== (a = t.readUint24()))) throw new Error("h264 nal header parse failed");
                        t.skip(2), this.sps = function (e) {
                            var t = [],
                                n = void 0,
                                r = !0,
                                i = !1;
                            if (1 === e.readUint32())
                                do {
                                    if (n = e.readUint8(), !i) {
                                        if (7 != (31 & n)) {
                                            r = !1, e.back(5);
                                            break
                                        }
                                        i = !0
                                    }
                                    0 !== n ? t.push(n) : 1 === (n = e.readUint24()) ? (r = !1, e.back(4)) : (e.back(4), t.push(e.readUint8()))
                                } while (r);
                            else e.back(4);
                            return t
                        }(t), this.pps = function (e) {
                            var t = [],
                                n = void 0,
                                r = !0,
                                i = !1;
                            if (1 === e.readUint32())
                                do {
                                    if (n = e.readUint8(), !i) {
                                        if (8 != (31 & n)) {
                                            r = !1, e.back(5);
                                            break
                                        }
                                        i = !0
                                    }
                                    0 !== n ? t.push(n) : 1 === (n = e.readUint16()) ? (r = !1, e.back(3)) : (e.back(3), t.push(e.readUint8()))
                                } while (r);
                            else e.back(4);
                            return t
                        }(t);
                        var u = void 0;
                        if (this.sps.length ? (this.info = new o.default(new Uint8Array(this.sps)).readSPS(), u = t.readUint24()) : 0 === (u = t.readUint24()) && (u = t.readUint8()), 1 !== u) throw new Error("h264 convert to avcc error");
                        var s = e.Merge(t, r);
                        this.buffer = (0, i.default)(Uint8Array, t.writeUint32(s.byteLength), s)
                    } else {
                        if ("audio" !== n) throw "ES " + n + " is not supported";
                        if ((a = t.readUint16()) >>> 4 != 4095) throw new Error("aac ES parse Error");
                        this.id = 0 == (a >>> 3 & 1) ? "MPEG-4" : "MPEG-2", this.layer = a >>> 1 & 3, this.absent = 1 & a, a = t.readUint16(), this.audioObjectType = 1 + (a >>> 14 & 3), this.profile = this.audioObjectType - 1, this.frequencyIndex = a >>> 10 & 15, this.frequence = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350][this.frequencyIndex], this.channel = a >>> 6 & 7, this.frameLength = (3 & a) << 11 | t.readUint16() >>> 5, this.audioConfig = e.getAudioConfig(this.audioObjectType, this.channel, this.frequencyIndex), t.skip(1), this.buffer = e.Merge(t, r)
                    }
                }
            }, {
                key: "TSDT",
                value: function () {
                    return {}
                }
            }, {
                key: "CAT",
                value: function (e, t) {
                    this.tableID = e.readUint8();
                    var n = e.readUint16();
                    this.sectionIndicator = n >>> 7, this.sectionLength = 4095 & n, e.skip(2), n = e.readUint8(), this.version = n >>> 3, this.currentNextIndicator = 1 & n, this.sectionNumber = e.readUint8(), this.lastSectionNumber = e.readUint8();
                    for (var r = (this.sectionLength - 9) / 4, i = [], a = 0; a < r; a++) i.push({});
                    this.crc32 = e.readUint32()
                }
            }, {
                key: "Merge",
                value: function (e, t) {
                    var n = e.length - e.position,
                        r = void 0,
                        i = n;
                    return t.forEach(function (e) {
                        n += e.body.buffer.length
                    }), (r = new Uint8Array(n)).set(new Uint8Array(e.buffer, e.position), 0), t.forEach(function (t) {
                        e = t.body.buffer, r.set(new Uint8Array(e.buffer, e.position), i), i += e.length - e.position
                    }), r
                }
            }, {
                key: "getAudioConfig",
                value: function (e, t, n) {
                    var r = navigator.userAgent.toLowerCase(),
                        i = void 0,
                        a = void 0;
                    return /firefox/i.test(r) ? n >= 6 ? (e = 5, i = new Array(4), a = n - 3) : (e = 2, i = new Array(2), a = n) : -1 !== r.indexOf("android") ? (e = 2, i = new Array(2), a = n) : (e = 5, i = new Array(4), n >= 6 ? a = n - 3 : (1 === t && (e = 2, i = new Array(2)), a = n)), i[0] = e << 3, i[0] |= (14 & n) >> 1, i[1] = (1 & n) << 7, i[1] |= t << 3, 5 === e && (i[1] |= (14 & a) >> 1, i[2] = (1 & a) << 7, i[2] |= 8, i[3] = 0), i
                }
            }]), e
        }();
    f.PATSpace = [], t.default = f, e.exports = t.default
}, function (e, t, n) {
    "use strict";
    var r = function (e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(n(28));
    e.exports = r.default
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
        }(n(3));
    var a = function () {
        function e() {
            ! function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.buffer = new Uint8Array(0)
        }
        return r(e, [{
            key: "write",
            value: function () {
                for (var e = this, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                n.forEach(function (t) {
                    t ? e.buffer = (0, i.default)(Uint8Array, e.buffer, t) : window.console.error(t)
                })
            }
        }], [{
            key: "writeUint32",
            value: function (e) {
                return new Uint8Array([e >> 24, e >> 16 & 255, e >> 8 & 255, 255 & e])
            }
        }]), e
    }();
    t.default = a, e.exports = t.default
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
        }(n(0));
    var a = function () {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'video/mp4; codecs="avc1.64001E, mp4a.40.5"';
            ! function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var n = this;
            (0, i.default)(this), this.codecs = t, this.mediaSource = new window.MediaSource, this.url = window.URL.createObjectURL(this.mediaSource), this.queue = [], this.mediaSource.addEventListener("sourceopen", function () {
                n.sourceBuffer = n.mediaSource.addSourceBuffer(n.codecs), n.sourceBuffer.addEventListener("error", function (e) {
                    n.emit("error", {
                        type: "sourceBuffer",
                        error: e
                    })
                }), n.sourceBuffer.addEventListener("updateend", function (e) {
                    n.emit("updateend");
                    var t = n.queue.shift();
                    t && n.sourceBuffer.appendBuffer(t)
                }), n.emit("sourceopen"), n.sourceBuffer.addEventListener("error", function (e) {
                    n.emit("error", {
                        type: "mediaSource",
                        error: e
                    })
                })
            }), this.mediaSource.addEventListener("sourceclose", function () {
                n.emit("sourceclose")
            })
        }
        return r(e, [{
            key: "appendBuffer",
            value: function (e) {
                var t = this.sourceBuffer;
                return !1 === t.updating && "open" === this.state ? (t.appendBuffer(e), !0) : (this.queue.push(e), !1)
            }
        }, {
            key: "removeBuffer",
            value: function (e, t) {
                this.sourceBuffer.remove(e, t)
            }
        }, {
            key: "endOfStream",
            value: function () {
                "open" === this.mediaSource.readyState && this.mediaSource.endOfStream()
            }
        }, {
            key: "state",
            get: function () {
                return this.mediaSource.readyState
            }
        }, {
            key: "duration",
            get: function () {
                return this.mediaSource.duration
            },
            set: function (e) {
                this.mediaSource.duration = e
            }
        }], [{
            key: "isSupported",
            value: function (e) {
                return window.MediaSource && window.MediaSource.isTypeSupported(e)
            }
        }]), e
    }();
    t.default = a, e.exports = t.default
}, function (e, t, n) {
    e.exports = n(7)
}, function (e, t, n) {
    "use strict";
    var r = o(n(8)),
        i = o(n(9)),
        a = o(n(5));

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    r.default.install("hlsplayer", function () {
        var e = this,
            t = r.default.sniffer,
            n = r.default.util,
            o = e.config.preloadTime || 15;
        if (["chrome", "firfox", "safari"].some(function (e) {
                return e === t.browser
            }) && a.default.isSupported('video/mp4; codecs="avc1.64001E, mp4a.40.5"')) {
            var u = e.start,
                s = void 0;
            Object.defineProperty(e, "src", {
                get: function () {
                    return e.currentSrc
                },
                set: function (t) {
                    e.config.url = t, e.paused ? e.start(t) : (e.pause(), e.once("pause", function () {
                        e.start(t)
                    }), e.once("canplay", function () {
                        e.play()
                    })), e.once("canplay", function () {
                        e.currentTime = 0
                    })
                },
                configurable: !0
            }), e.start = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e.config.url;
                t && (s = new i.default(t), e.mse = s.mse, e.hls = s, e.download = function () {
                    s.download()
                }, s.m3u8.once("ready", function () {
                    if ("live" === s.type) {
                        n.addClass(e.root, "xgplayer-is-live");
                        var t = n.createDom("xg-live", "正在直播", {}, "xgplayer-live");
                        e.controls.appendChild(t);
                        var r = setInterval(function () {
                            if (e.paused && e.buffered.length)
                                for (var t = 0, n = e.buffered.length; t < n; t++)
                                    if (e.buffered.start(t) > e.currentTime) {
                                        e.currentTime = e.buffered.start(t), clearInterval(r);
                                        break
                                    }
                        }, 200)
                    } else clearTimeout(s.m3u8.timer)
                }), u.call(e, s.mse.url))
            };
            var f = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e.currentTime,
                    n = e.getBufferedRange();
                t < n[1] ? "vod" === s.type && n[1] - t < o && s.seek(n[1] + 1) : s.seek(t)
            };
            e.on("timeupdate", function () {
                f(e.currentTime + 1),
                    function (e, t) {
                        if ("vod" === t.type && e.duration - e.currentTime < 2) {
                            var n = e.getBufferedRange();
                            e.currentTime - n[1] < .1 && e.mse.endOfStream()
                        }
                    }(e, s)
            }), e.on("seeking", function () {
                f()
            }), e.on("waiting", function () {
                if ("live" === s.type) {
                    for (var t = e.buffered, n = t.length, r = e.currentTime, i = 0; i < n; i++)
                        if (t.start(i) > r) {
                            e.currentTime = t.start(i) + .1;
                            break
                        }
                } else s.seek()
            }), e.once("destroy", function () {
                clearTimeout(s.m3u8.timer)
            })
        }
    })
}, function (e, t) {
    e.exports = Player
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
        i = l(n(0)),
        a = l(n(25)),
        o = l(n(27)),
        u = l(n(2)),
        s = l(n(4)),
        f = l(n(31)),
        c = l(n(32)),
        d = l(n(5));

    function l(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var h = function () {
        function e(t) {
            ! function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), (0, i.default)(this);
            var n = new d.default;
            this.mse = n, this.url = t, this.init(t), this.inited = !1, this.cache = new s.default
        }
        return r(e, [{
            key: "init",
            value: function (e) {
                var t = this,
                    n = new a.default(e),
                    r = this;
                n.once("ready", function () {
                    t.type = n.type, "vod" === r.type ? r.seek(0) : (r.seeker && clearInterval(r.seeker), t.once("end", function () {
                        r.seeker && clearInterval(r.seeker)
                    }), r.seek(), r.seeker = setInterval(function () {
                        r.seek()
                    }, 2e3))
                }), n.once("end", function () {
                    "live" === t.type && t.mse.endOfStream()
                }), this.m3u8 = n
            }
        }, {
            key: "seek",
            value: function (e) {
                var t = this,
                    n = this.m3u8.seek(e);
                if (n.length && !n[0].downloaded) new c.default(n[0].url, function (e) {
                    var r = new o.default(e);
                    t.parse(r);
                    var i = n[0].url;
                    t.m3u8.segments.every(function (e) {
                        return e.url !== i || (e.downloaded = !0, !1)
                    })
                })
            }
        }, {
            key: "parse",
            value: function (e, t) {
                var n = [],
                    r = [],
                    i = [],
                    a = this;
                e.pes.forEach(function (e) {
                    var t = new u.default.PES(e);
                    n.push(t), "video" === t.type && r.push(t), "audio" === t.type && i.push(t)
                }), r.some(function (e) {
                    if (e.ES.sps.length) {
                        var t = e.ES,
                            n = i[0].ES,
                            r = 0;
                        return a.m3u8.segments.forEach(function (e) {
                            r += 1 * e.duration
                        }), a.meta = {
                            sps: t.sps,
                            pps: t.pps,
                            width: t.info.width,
                            height: t.info.height,
                            pixelRatio: t.info.pixelRatio,
                            channelCount: n.channel,
                            timescale: n.frequence,
                            samplerate: n.frequence,
                            profile: n.profile,
                            duration: r,
                            audioConfig: i[0].ES.audioConfig
                        }, !1
                    }
                }), a.videoSamples = r, a.audioSamples = i, a.meta ? (void 0 === a.startDTS && (a.startDTS = Math.min(r[0].dts, i[0].pts)), a.initSegment(a.meta)) : a.seek()
            }
        }, {
            key: "initSegment",
            value: function (e) {
                if (!this.inited) {
                    var t = new s.default;
                    t.write(f.default.ftyp()), t.write(f.default.moov(e)), this.mse.appendBuffer(t.buffer), this.inited = !0, this.cache.write(t.buffer)
                }
                this.createVideoFragment(), this.createAudioFragment()
            }
        }, {
            key: "addFragment",
            value: function (e) {
                var t = this,
                    n = new s.default;
                n.write(f.default.moof(e)), n.write(f.default.mdat(e)), this.mse.appendBuffer(n.buffer), this.cache.write(n.buffer), this.mse.once("updateend", function () {
                    t.update()
                })
            }
        }, {
            key: "createVideoFragment",
            value: function () {
                var e, t, n = this.videoSamples,
                    r = n.length,
                    i = (n[r - 1].dts - n[0].dts) / r;
                t = this.startDTS, e = n.map(function (e, t) {
                    var a = void 0;
                    return a = t + 1 === r ? i : n[t + 1].dts - e.dts, {
                        size: e.ES.buffer.byteLength,
                        duration: a,
                        offset: e.pts - e.dts,
                        buffer: e.ES.buffer,
                        key: !!e.ES.pps.length
                    }
                }), this.addFragment({
                    id: 1,
                    time: n[0].dts - t,
                    firstFlags: 33554432,
                    flags: 3841,
                    samples: e
                })
            }
        }, {
            key: "createAudioFragment",
            value: function () {
                var e, t = this.audioSamples,
                    n = t.length,
                    r = this.startDTS || 0,
                    i = void 0;
                e = t.map(function (e, r) {
                    return i = r + 1 === n ? (t[n - 1].pts - t[0].pts) / n : t[r + 1].pts - e.pts, {
                        size: e.ES.buffer.byteLength,
                        duration: i,
                        offset: 0,
                        buffer: e.ES.buffer,
                        key: !0
                    }
                }), this.addFragment({
                    id: 2,
                    time: t[0].pts - r,
                    firstFlags: 0,
                    flags: 1793,
                    samples: e
                })
            }
        }, {
            key: "reset",
            value: function () {
                this.init(this.url)
            }
        }, {
            key: "update",
            value: function () {
                for (var e = this.mse.sourceBuffer, t = this.m3u8.segments, n = e.buffered, r = void 0, i = void 0, a = 0, o = n.length; a < o; a++) {
                    r = n.start(a), i = n.end(a);
                    for (var u, s = 0, f = t.length; s < f; s++)(u = t[a]).start >= r && u.end <= i && (u.downloaded = !0)
                }
            }
        }]), e
    }();
    t.default = h, e.exports = t.default
}, function (e, t, n) {
    "use strict";
    var r = n(11),
        i = n(19),
        a = n(20),
        o = n(21);
    (e.exports = function (e, t) {
        var n, a, u, s, f;
        return arguments.length < 2 || "string" != typeof e ? (s = t, t = e, e = null) : s = arguments[2], null == e ? (n = u = !0, a = !1) : (n = o.call(e, "c"), a = o.call(e, "e"), u = o.call(e, "w")), f = {
            value: t,
            configurable: n,
            enumerable: a,
            writable: u
        }, s ? r(i(s), f) : f
    }).gs = function (e, t, n) {
        var u, s, f, c;
        return "string" != typeof e ? (f = n, n = t, t = e, e = null) : f = arguments[3], null == t ? t = void 0 : a(t) ? null == n ? n = void 0 : a(n) || (f = n, n = void 0) : (f = t, t = n = void 0), null == e ? (u = !0, s = !1) : (u = o.call(e, "c"), s = o.call(e, "e")), c = {
            get: t,
            set: n,
            configurable: u,
            enumerable: s
        }, f ? r(i(f), c) : c
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
        a = Math.max;
    e.exports = function (e, t) {
        var n, o, u, s = a(arguments.length, 2);
        for (e = Object(i(e)), u = function (r) {
                try {
                    e[r] = t[r]
                } catch (e) {
                    n || (n = e)
                }
            }, o = 1; o < s; ++o) t = arguments[o], r(t).forEach(u);
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
        a = Object.create;
    e.exports = function (e) {
        var t = a(null);
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
        i = o(n(0)),
        a = o(n(26));

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var u = function () {
        function e(t) {
            ! function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.url = t, this.segments = [], this.retryMax = 10, this.retry = 0, this.type = "live", this.isEnd = !1, this.timer = null, this.rangeDuration = 2e3, this.duration = 0, this.init(t), (0, i.default)(this)
        }
        return r(e, [{
            key: "fetch",
            value: function (t) {
                var n = {
                        TYPE: "LIVE",
                        ENDLIST: ""
                    },
                    r = [];
                return new Promise(function (i, o) {
                    new a.default({
                        type: "",
                        url: t
                    }).then(function (a) {
                        var u = a.responseText;
                        if (u) {
                            var s = u.substring(0, u.indexOf("#EXTINF")),
                                f = u.substring(u.lastIndexOf("#EXTINF")),
                                c = e.Tag,
                                d = new RegExp(c.EXTINF.source);
                            Object.keys(c).forEach(function (e) {
                                "EXTINF" !== e && (c[e].test(s) || c[e].test(f)) && (n[e] = RegExp.$2 ? [RegExp.$1, RegExp.$2] : RegExp.$1 || !0)
                            }), u.match(c.EXTINF).forEach(function (n, i) {
                                if (d.test(n)) {
                                    var a = 1 * RegExp.$1,
                                        o = RegExp.$2,
                                        u = e.resolve(t, o);
                                    r.push({
                                        idx: i,
                                        duration: a,
                                        title: o,
                                        downloaded: !1,
                                        url: u
                                    })
                                }
                            }), 1 * n.SEQUENCE == 0 && n.ENDLIST && (n.TYPE = "VOD"), i({
                                meta: n,
                                segments: r
                            })
                        } else o(new Error("parse error"))
                    }).catch(function (e) {
                        o(e)
                    })
                })
            }
        }, {
            key: "init",
            value: function (e) {
                var t = this,
                    n = t.segments;
                this.fetch(e).then(function (e) {
                    t.type = e.meta.TYPE.toLocaleLowerCase(), t.isEnd = e.meta.ENDLIST, e.segments.forEach(function (e) {
                        n.push(e)
                    }), t.emit("ready")
                }, function () {
                    n.length = 0, t.retry++, t.retry < t.retryMax && t.init(e)
                })
            }
        }, {
            key: "seek",
            value: function (e) {
                var t = this.segments,
                    n = void 0;
                if ("vod" === this.type || void 0 !== e) {
                    if (void 0 === t[0].start)
                        for (var r, i = 0, a = 0, o = t.length; a < o; a++)(r = t[a]).start = i, i += r.duration, r.end = i;
                    n = t.filter(function (t) {
                        return t.start <= e && e < t.end && !t.downloaded
                    })
                } else n = t.filter(function (e) {
                    return !e.downloaded
                }), "live" === this.type && t.filter(function (e) {
                    return !e.downloaded
                }).length < 3 && this.update(1);
                return n
            }
        }, {
            key: "reset",
            value: function () {
                this.segments.length = 0, this.isEnd = !1, this.type = "live", this.timer && (clearInterval(this.timer), this.timer = null), this.init(this.url)
            }
        }, {
            key: "update",
            value: function (e) {
                var t = this,
                    n = t.url,
                    r = t.segments;
                t.timer && clearTimeout(t.timer), t.timer = setTimeout(function () {
                    var e = 0;
                    t.fetch(n).then(function (n) {
                        n.segments.forEach(function (t) {
                            r.some(function (e) {
                                return t.url === e.url
                            }) || (e++, r.push(t))
                        }), e <= 0 && t.update()
                    }, function () {
                        t.retry++, t.retry < t.retryMax ? t.update() : t.emit("end")
                    })
                }, e ? 0 : t.rangeDuration)
            }
        }], [{
            key: "resolve",
            value: function (e, t) {
                var n = [],
                    r = document.createElement("a");
                r.href = e;
                var i = t,
                    a = r.pathname.replace(/^\/+/, "").split("/"),
                    o = i.split("/");
                a.pop();
                return function e() {
                    switch (o[0]) {
                        case "":
                            n = o.slice(1);
                            break;
                        case ".":
                            n = a.concat(o.slice(1));
                            break;
                        case "..":
                            if (o.shift(), !a.length) throw new Error("path in invalid");
                            a.pop(), e();
                            break;
                        default:
                            n = a.concat(o)
                    }
                }(), n = n.length ? r.protocol + "//" + r.host + "/" + n.join("/") : i.href
            }
        }]), e
    }();
    u.Tag = {
        EXTM3U: /^#EXTM3U/,
        TYPE: /#EXT-X-PLAYLIST-TYPE:(\w+)/,
        EXTINF: /#EXTINF:(\d+\.?\d*)(?:,(?:[^\r|\n]*)(?:\r|\n)*)(.*(?!#))/g,
        DURATION: /#EXT-X-TARGETDURATION:(\d+\.?\d*)/,
        SEQUENCE: /#EXT-X-MEDIA-SEQUENCE:(\d+)/,
        ENDLIST: /#EXT-X-ENDLIST/,
        VERSION: /#EXT-X-VERSION:(\d+)/,
        STREAM: /#EXT-X-STREAM-INF:(\w+=\w+)+/
    }, t.default = u, e.exports = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.default = function e() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = t.url,
            r = t.method,
            i = void 0 === r ? "GET" : r,
            a = t.type,
            o = void 0 === a ? "arraybuffer" : a,
            u = t.data,
            s = void 0 === u ? {} : u;
        return function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), new Promise(function (e, t) {
            var r = new window.XMLHttpRequest,
                a = i.toUpperCase(),
                u = [];
            for (var f in o && (r.responseType = o), s) u.push("k=" + s[f]);
            if ("GET" === a) r.open(a, n + "?" + u.join("&")), r.send();
            else {
                if ("post" !== a) throw new Error("xhr " + a + " is not supported");
                r.open(a, n), r.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), r.send(u.join("&"))
            }
            r.onload = function () {
                200 === r.status || 206 === r.status ? e(r) : t(r)
            }, r.onerror = function () {
                t(r)
            }
        })
    }, e.exports = t.default
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
        }(n(2));
    var a = function () {
        function e(t) {
            ! function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.buffer = t, this.ts = [];
            for (var n = 0, r = this.buffer.byteLength; n < r;) this.ts.push(new i.default(this.buffer.slice(n, n + 188), n / 188)), n += 188;
            delete this.buffer
        }
        return r(e, [{
            key: "pat",
            get: function () {
                return this.ts.filter(function (e) {
                    return 0 === e.header.pid
                })
            }
        }, {
            key: "pmt",
            get: function () {
                var e = [];
                return this.pat.forEach(function (t) {
                    t.body.list.filter(function (t) {
                        e.push(t.pid)
                    })
                }), this.ts.filter(function (t) {
                    return e.some(function (e) {
                        return e === t.header.pid
                    })
                })
            }
        }, {
            key: "pes",
            get: function () {
                var e = [],
                    t = [];
                this.pmt.forEach(function (t) {
                    e = e.concat(t.body.list.map(function (e) {
                        return e.pid
                    }))
                });
                for (var n = this.ts, r = n.length, i = void 0, a = [], o = [], u = 0; u < r; u++) i = n[u], e.indexOf(i.header.pid) > -1 && ("video" === i.body.type ? 1 === i.header.payload ? ((a = []).push(i), t.push(a)) : 0 === a.length ? t.push([i]) : a.push(i) : "audio" === i.body.type && (1 === i.header.payload ? ((o = []).push(i), t.push(o)) : 0 === o.length ? t.push([i]) : o.push(i)));
                return t
            }
        }]), e
    }();
    t.default = a, e.exports = t.default
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function (e) {
        for (var t = 0, n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
        var a = !0,
            o = !1,
            u = void 0;
        try {
            for (var s, f = r[Symbol.iterator](); !(a = (s = f.next()).done); a = !0) {
                t += s.value.length
            }
        } catch (e) {
            o = !0, u = e
        } finally {
            try {
                !a && f.return && f.return()
            } finally {
                if (o) throw u
            }
        }
        var c = new e(t),
            d = 0,
            l = !0,
            h = !1,
            p = void 0;
        try {
            for (var v, y = r[Symbol.iterator](); !(l = (v = y.next()).done); l = !0) {
                var b = v.value;
                c.set(b, d), d += b.length
            }
        } catch (e) {
            h = !0, p = e
        } finally {
            try {
                !l && y.return && y.return()
            } finally {
                if (h) throw p
            }
        }
        return c
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
    }();
    var i = function () {
        function e(t) {
            if (function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), !(t instanceof ArrayBuffer)) throw new Error("data is invalid");
            this.buffer = t, this.dataview = new DataView(t), this.dataview.position = 0
        }
        return r(e, [{
            key: "back",
            value: function (e) {
                this.position -= e
            }
        }, {
            key: "skip",
            value: function (t) {
                for (var n = Math.floor(t / 4), r = t % 4, i = 0; i < n; i++) e.readByte(this.dataview, 4);
                r > 0 && e.readByte(this.dataview, r)
            }
        }, {
            key: "readUint8",
            value: function () {
                return e.readByte(this.dataview, 1)
            }
        }, {
            key: "readUint16",
            value: function () {
                return e.readByte(this.dataview, 2)
            }
        }, {
            key: "readUint24",
            value: function () {
                return e.readByte(this.dataview, 3)
            }
        }, {
            key: "readUint32",
            value: function () {
                return e.readByte(this.dataview, 4)
            }
        }, {
            key: "readUint64",
            value: function () {
                return e.readByte(this.dataview, 8)
            }
        }, {
            key: "readInt8",
            value: function () {
                return e.readByte(this.dataview, 1, !0)
            }
        }, {
            key: "readInt16",
            value: function () {
                return e.readByte(this.dataview, 2, !0)
            }
        }, {
            key: "readInt32",
            value: function () {
                return e.readByte(this.dataview, 4, !0)
            }
        }, {
            key: "writeUint32",
            value: function (e) {
                return new Uint8Array([e >>> 24 & 255, e >>> 16 & 255, e >>> 8 & 255, 255 & e])
            }
        }, {
            key: "length",
            get: function () {
                return this.buffer.byteLength
            }
        }, {
            key: "position",
            set: function (e) {
                this.dataview.position = e
            },
            get: function () {
                return this.dataview.position
            }
        }], [{
            key: "readByte",
            value: function (e, t, n) {
                var r = void 0;
                switch (t) {
                    case 1:
                        r = n ? e.getInt8(e.position) : e.getUint8(e.position);
                        break;
                    case 2:
                        r = n ? e.getInt16(e.position) : e.getUint16(e.position);
                        break;
                    case 3:
                        if (n) throw "not supported for readByte 3";
                        r = e.getUint8(e.position) << 16, r |= e.getUint8(e.position + 1) << 8, r |= e.getUint8(e.position + 2);
                        break;
                    case 4:
                        r = n ? e.getInt32(e.position) : e.getUint32(e.position);
                        break;
                    case 8:
                        if (n) throw "not supported for readBody 8";
                        r = e.getUint32(e.position) << 32, r |= e.getUint32(e.position + 4);
                        break;
                    default:
                        r = ""
                }
                return e.position += t, r
            }
        }]), e
    }();
    t.default = i, e.exports = t.default
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
    }();
    var i = function () {
        function e(t) {
            ! function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.data = t, this.bytesAvailable = t.byteLength, this.word = 0, this.bitsAvailable = 0
        }
        return r(e, [{
            key: "loadWord",
            value: function () {
                var e = this.data,
                    t = this.bytesAvailable,
                    n = e.byteLength - t,
                    r = new Uint8Array(4),
                    i = Math.min(4, t);
                if (0 === i) throw new Error("no bytes available");
                r.set(e.subarray(n, n + i)), this.word = new DataView(r.buffer).getUint32(0), this.bitsAvailable = 8 * i, this.bytesAvailable -= i
            }
        }, {
            key: "skipBits",
            value: function (e) {
                var t;
                this.bitsAvailable > e ? (this.word <<= e, this.bitsAvailable -= e) : (e -= this.bitsAvailable, e -= (t = e >> 3) >> 3, this.bytesAvailable -= t, this.loadWord(), this.word <<= e, this.bitsAvailable -= e)
            }
        }, {
            key: "readBits",
            value: function (e) {
                var t = Math.min(this.bitsAvailable, e),
                    n = this.word >>> 32 - t;
                return e > 32 && window.console.error("Cannot read more than 32 bits at a time"), this.bitsAvailable -= t, this.bitsAvailable > 0 ? this.word <<= t : this.bytesAvailable > 0 && this.loadWord(), (t = e - t) > 0 && this.bitsAvailable ? n << t | this.readBits(t) : n
            }
        }, {
            key: "skipLZ",
            value: function () {
                var e;
                for (e = 0; e < this.bitsAvailable; ++e)
                    if (0 != (this.word & 2147483648 >>> e)) return this.word <<= e, this.bitsAvailable -= e, e;
                return this.loadWord(), e + this.skipLZ()
            }
        }, {
            key: "skipUEG",
            value: function () {
                this.skipBits(1 + this.skipLZ())
            }
        }, {
            key: "skipEG",
            value: function () {
                this.skipBits(1 + this.skipLZ())
            }
        }, {
            key: "readUEG",
            value: function () {
                var e = this.skipLZ();
                return this.readBits(e + 1) - 1
            }
        }, {
            key: "readEG",
            value: function () {
                var e = this.readUEG();
                return 1 & e ? 1 + e >>> 1 : -1 * (e >>> 1)
            }
        }, {
            key: "readBoolean",
            value: function () {
                return 1 === this.readBits(1)
            }
        }, {
            key: "readUByte",
            value: function () {
                return this.readBits(8)
            }
        }, {
            key: "readUShort",
            value: function () {
                return this.readBits(16)
            }
        }, {
            key: "readUInt",
            value: function () {
                return this.readBits(32)
            }
        }, {
            key: "skipScalingList",
            value: function (e) {
                var t, n = 8,
                    r = 8;
                for (t = 0; t < e; t++) 0 !== r && (r = (n + this.readEG() + 256) % 256), n = 0 === r ? n : r
            }
        }, {
            key: "readSPS",
            value: function () {
                var e, t, n, r, i, a, o, u = 0,
                    s = 0,
                    f = 0,
                    c = 0,
                    d = this.readUByte.bind(this),
                    l = this.readBits.bind(this),
                    h = this.readUEG.bind(this),
                    p = this.readBoolean.bind(this),
                    v = this.skipBits.bind(this),
                    y = this.skipEG.bind(this),
                    b = this.skipUEG.bind(this),
                    w = this.skipScalingList.bind(this);
                if (d(), e = d(), l(5), v(3), d(), b(), 100 === e || 110 === e || 122 === e || 244 === e || 44 === e || 83 === e || 86 === e || 118 === e || 128 === e) {
                    var m = h();
                    if (3 === m && v(1), b(), b(), v(1), p())
                        for (a = 3 !== m ? 8 : 12, o = 0; o < a; o++) p() && w(o < 6 ? 16 : 64)
                }
                b();
                var g = h();
                if (0 === g) h();
                else if (1 === g)
                    for (v(1), y(), y(), t = h(), o = 0; o < t; o++) y();
                b(), v(1), n = h(), r = h(), 0 === (i = l(1)) && v(1), v(1), p() && (u = h(), s = h(), f = h(), c = h());
                var k = [1, 1];
                if (p() && p()) switch (d()) {
                    case 1:
                        k = [1, 1];
                        break;
                    case 2:
                        k = [12, 11];
                        break;
                    case 3:
                        k = [10, 11];
                        break;
                    case 4:
                        k = [16, 11];
                        break;
                    case 5:
                        k = [40, 33];
                        break;
                    case 6:
                        k = [24, 11];
                        break;
                    case 7:
                        k = [20, 11];
                        break;
                    case 8:
                        k = [32, 11];
                        break;
                    case 9:
                        k = [80, 33];
                        break;
                    case 10:
                        k = [18, 11];
                        break;
                    case 11:
                        k = [15, 11];
                        break;
                    case 12:
                        k = [64, 33];
                        break;
                    case 13:
                        k = [160, 99];
                        break;
                    case 14:
                        k = [4, 3];
                        break;
                    case 15:
                        k = [3, 2];
                        break;
                    case 16:
                        k = [2, 1];
                        break;
                    case 255:
                        k = [d() << 8 | d(), d() << 8 | d()]
                }
                return {
                    width: Math.ceil(16 * (n + 1) - 2 * u - 2 * s),
                    height: (2 - i) * (r + 1) * 16 - (i ? 2 : 4) * (f + c),
                    pixelRatio: k
                }
            }
        }, {
            key: "readSliceType",
            value: function () {
                return this.readUByte(), this.readUEG(), this.readUEG()
            }
        }]), e
    }();
    t.default = i, e.exports = t.default
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
        }(n(4));
    var a = Math.pow(2, 32) - 1,
        o = function () {
            function e() {
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            return r(e, null, [{
                key: "type",
                value: function (e) {
                    return new Uint8Array([e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)])
                }
            }, {
                key: "size",
                value: function (e) {
                    return i.default.writeUint32(e)
                }
            }, {
                key: "extension",
                value: function (e, t) {
                    return new Uint8Array([e, t >> 16 & 255, t >> 8 & 255, 255 & t])
                }
            }, {
                key: "ftyp",
                value: function () {
                    var t = new i.default;
                    return t.write(e.size(24), e.type("ftyp"), new Uint8Array([105, 115, 111, 109, 0, 0, 0, 1, 105, 115, 111, 109, 97, 118, 99, 49])), t.buffer
                }
            }, {
                key: "moov",
                value: function (t) {
                    var n = new i.default,
                        r = 8,
                        a = e.mvhd(t.duration),
                        o = e.videoTrak(t),
                        u = e.audioTrak(t),
                        s = e.mvex(t.duration);
                    return [a, o, u, s].forEach(function (e) {
                        r += e.byteLength
                    }), n.write(e.size(r), e.type("moov"), a, o, u, s), n.buffer
                }
            }, {
                key: "mvhd",
                value: function (t) {
                    var n = new i.default;
                    t *= 9e4;
                    var r = Math.floor(t / (a + 1)),
                        o = Math.floor(t % (a + 1)),
                        u = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, 0, 1, 95, 144, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, o >> 24, o >> 16 & 255, o >> 8 & 255, 255 & o, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
                    return n.write(e.size(8 + u.length), e.type("mvhd"), new Uint8Array(u)), n.buffer
                }
            }, {
                key: "videoTrak",
                value: function (t) {
                    var n = new i.default,
                        r = 8,
                        a = e.tkhd({
                            id: 1,
                            duration: t.duration,
                            timescale: 9e4,
                            width: t.width,
                            height: t.height,
                            type: "video"
                        }),
                        o = e.mdia({
                            type: "video",
                            timescale: 9e4,
                            duration: t.duration,
                            sps: t.sps,
                            pps: t.pps,
                            pixelRatio: t.pixelRatio,
                            width: t.width,
                            height: t.height
                        });
                    return [a, o].forEach(function (e) {
                        r += e.byteLength
                    }), n.write(e.size(r), e.type("trak"), a, o), n.buffer
                }
            }, {
                key: "audioTrak",
                value: function (t) {
                    var n = new i.default,
                        r = 8,
                        a = e.tkhd({
                            id: 2,
                            duration: t.duration,
                            timescale: 9e4,
                            width: 0,
                            height: 0,
                            type: "audio"
                        }),
                        o = e.mdia({
                            type: "audio",
                            timescale: 9e4,
                            duration: t.duration,
                            channelCount: t.channelCount,
                            samplerate: t.samplerate,
                            audioConfig: t.audioConfig
                        });
                    return [a, o].forEach(function (e) {
                        r += e.byteLength
                    }), n.write(e.size(r), e.type("trak"), a, o), n.buffer
                }
            }, {
                key: "tkhd",
                value: function (t) {
                    var n = new i.default,
                        r = t.id,
                        o = t.duration * t.timescale,
                        u = t.width,
                        s = t.height,
                        f = t.type,
                        c = Math.floor(o / (a + 1)),
                        d = Math.floor(o % (a + 1)),
                        l = new Uint8Array([1, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 0, 0, 0, c >> 24, c >> 16 & 255, c >> 8 & 255, 255 & c, d >> 24, d >> 16 & 255, d >> 8 & 255, 255 & d, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "video" === f ? 1 : 0, "audio" === f ? 1 : 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, u >> 8 & 255, 255 & u, 0, 0, s >> 8 & 255, 255 & s, 0, 0]);
                    return n.write(e.size(8 + l.byteLength), e.type("tkhd"), l), n.buffer
                }
            }, {
                key: "edts",
                value: function (t) {
                    var n = new i.default,
                        r = t.duration,
                        a = t.mediaTime;
                    return n.write(e.size(36), e.type("edts")), n.write(e.size(28), e.type("elst")), n.write(new Uint8Array([0, 0, 0, 1, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, 255 & a, 0, 0, 0, 1])), n.buffer
                }
            }, {
                key: "mdia",
                value: function (t) {
                    var n = new i.default,
                        r = 8,
                        a = e.mdhd(t.timescale),
                        o = e.hdlr(t.type),
                        u = e.minf(t);
                    return [a, o, u].forEach(function (e) {
                        r += e.byteLength
                    }), n.write(e.size(r), e.type("mdia"), a, o, u), n.buffer
                }
            }, {
                key: "mdhd",
                value: function (t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        r = new i.default;
                    n *= t;
                    var o = Math.floor(n / (a + 1)),
                        u = Math.floor(n % (a + 1)),
                        s = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, o >> 24, o >> 16 & 255, o >> 8 & 255, 255 & o, u >> 24, u >> 16 & 255, u >> 8 & 255, 255 & u, 85, 196, 0, 0]);
                    return r.write(e.size(12 + s.byteLength), e.type("mdhd"), e.extension(1, 0), s), r.buffer
                }
            }, {
                key: "hdlr",
                value: function (t) {
                    var n = new i.default,
                        r = [0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0];
                    return "audio" === t && (r.splice.apply(r, [8, 4].concat([115, 111, 117, 110])), r.splice.apply(r, [24, 13].concat([83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]))), n.write(e.size(8 + r.length), e.type("hdlr"), new Uint8Array(r)), n.buffer
                }
            }, {
                key: "minf",
                value: function (t) {
                    var n = new i.default,
                        r = 8,
                        a = "video" === t.type ? e.vmhd() : e.smhd(),
                        o = e.dinf(),
                        u = e.stbl(t);
                    return [a, o, u].forEach(function (e) {
                        r += e.byteLength
                    }), n.write(e.size(r), e.type("minf"), a, o, u), n.buffer
                }
            }, {
                key: "vmhd",
                value: function () {
                    var t = new i.default;
                    return t.write(e.size(20), e.type("vmhd"), new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0])), t.buffer
                }
            }, {
                key: "smhd",
                value: function () {
                    var t = new i.default;
                    return t.write(e.size(16), e.type("smhd"), new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0])), t.buffer
                }
            }, {
                key: "dinf",
                value: function () {
                    var t = new i.default;
                    return t.write(e.size(36), e.type("dinf"), e.size(28), e.type("dref"), new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1])), t.buffer
                }
            }, {
                key: "stbl",
                value: function (t) {
                    var n = new i.default,
                        r = 8,
                        a = e.stsd(t),
                        o = e.stts(),
                        u = e.stsc(),
                        s = e.stsz(),
                        f = e.stco();
                    return [a, o, u, s, f].forEach(function (e) {
                        r += e.byteLength
                    }), n.write(e.size(r), e.type("stbl"), a, o, u, s, f), n.buffer
                }
            }, {
                key: "stsd",
                value: function (t) {
                    var n = new i.default,
                        r = void 0;
                    return r = "audio" === t.type ? e.mp4a(t) : e.avc1(t), n.write(e.size(16 + r.byteLength), e.type("stsd"), e.extension(0, 0), new Uint8Array([0, 0, 0, 1]), r), n.buffer
                }
            }, {
                key: "mp4a",
                value: function (t) {
                    var n = new i.default,
                        r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.channelCount, 0, 16, 0, 0, 0, 0, t.samplerate >> 8 & 255, 255 & t.samplerate, 0, 0]),
                        a = e.esds(t.audioConfig);
                    return n.write(e.size(8 + r.byteLength + a.byteLength), e.type("mp4a"), r, a), n.buffer
                }
            }, {
                key: "esds",
                value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [43, 146, 8, 0],
                        n = t.length,
                        r = new i.default,
                        a = new Uint8Array([0, 0, 0, 0, 3, 23 + n, 0, 1, 0, 4, 15 + n, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([n]).concat(t).concat([6, 1, 2]));
                    return r.write(e.size(8 + a.byteLength), e.type("esds"), a), r.buffer
                }
            }, {
                key: "avc1",
                value: function (t) {
                    var n = new i.default,
                        r = t.sps,
                        a = t.pps,
                        o = t.width,
                        u = t.height,
                        s = t.pixelRatio[0],
                        f = t.pixelRatio[1],
                        c = new Uint8Array([1, r[1], r[2], r[3], 255, 225].concat([r.length >>> 8 & 255, 255 & r.length]).concat(r).concat(1).concat([a.length >>> 8 & 255, 255 & a.length]).concat(a)),
                        d = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, o >> 8 & 255, 255 & o, u >> 8 & 255, 255 & u, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]),
                        l = new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192]),
                        h = new Uint8Array([s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s, f >> 24, f >> 16 & 255, f >> 8 & 255, 255 & f]);
                    return n.write(e.size(40 + d.byteLength + c.byteLength + l.byteLength), e.type("avc1"), d, e.size(8 + c.byteLength), e.type("avcC"), c, e.size(20), e.type("btrt"), l, e.size(16), e.type("pasp"), h), n.buffer
                }
            }, {
                key: "stts",
                value: function () {
                    var t = new i.default,
                        n = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
                    return t.write(e.size(16), e.type("stts"), n), t.buffer
                }
            }, {
                key: "stsc",
                value: function () {
                    var t = new i.default,
                        n = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
                    return t.write(e.size(16), e.type("stsc"), n), t.buffer
                }
            }, {
                key: "stco",
                value: function () {
                    var t = new i.default,
                        n = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
                    return t.write(e.size(16), e.type("stco"), n), t.buffer
                }
            }, {
                key: "stsz",
                value: function () {
                    var t = new i.default,
                        n = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                    return t.write(e.size(20), e.type("stsz"), n), t.buffer
                }
            }, {
                key: "mvex",
                value: function (t) {
                    var n = new i.default,
                        r = i.default.writeUint32(9e4 * t);
                    return n.write(e.size(88), e.type("mvex"), e.size(16), e.type("mehd"), e.extension(0, 0), r, e.trex(1), e.trex(2)), n.buffer
                }
            }, {
                key: "trex",
                value: function (t) {
                    var n = new i.default,
                        r = new Uint8Array([0, 0, 0, 0, t >> 24, t >> 16 & 255, t >> 8 & 255, 255 & t, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]);
                    return n.write(e.size(8 + r.byteLength), e.type("trex"), r), n.buffer
                }
            }, {
                key: "moof",
                value: function (t) {
                    var n = new i.default,
                        r = 8,
                        a = e.mfhd(),
                        o = e.traf(t);
                    return [a, o].forEach(function (e) {
                        r += e.byteLength
                    }), n.write(e.size(r), e.type("moof"), a, o), n.buffer
                }
            }, {
                key: "mfhd",
                value: function () {
                    var t = new i.default,
                        n = i.default.writeUint32(e.sequence);
                    return e.sequence += 1, t.write(e.size(16), e.type("mfhd"), e.extension(0, 0), n), t.buffer
                }
            }, {
                key: "traf",
                value: function (t) {
                    var n = new i.default,
                        r = 8,
                        a = e.tfhd(t.id),
                        o = e.tfdt(t.time),
                        u = e.sdtp(t),
                        s = e.trun(t, u.byteLength);
                    return [a, o, u, s].forEach(function (e) {
                        r += e.byteLength
                    }), n.write(e.size(r), e.type("traf"), a, o, u, s), n.buffer
                }
            }, {
                key: "tfhd",
                value: function (t) {
                    var n = new i.default,
                        r = i.default.writeUint32(t);
                    return n.write(e.size(16), e.type("tfhd"), e.extension(0, 0), r), n.buffer
                }
            }, {
                key: "tfdt",
                value: function (t) {
                    var n = new i.default,
                        r = Math.floor(t / (a + 1)),
                        o = Math.floor(t % (a + 1));
                    return n.write(e.size(20), e.type("tfdt"), e.extension(1, 0), i.default.writeUint32(r), i.default.writeUint32(o)), n.buffer
                }
            }, {
                key: "trun",
                value: function (t, n) {
                    var r = t.id,
                        a = 1 === r ? 16 : 12,
                        o = new i.default,
                        u = i.default.writeUint32(t.samples.length),
                        s = i.default.writeUint32(96 + a * t.samples.length + n);
                    return o.write(e.size(20 + a * t.samples.length), e.type("trun"), e.extension(0, t.flags), u, s), t.samples.forEach(function (e, t) {
                        o.write(i.default.writeUint32(e.duration)), o.write(i.default.writeUint32(e.size)), 1 === r ? (o.write(i.default.writeUint32(e.key ? 33554432 : 16842752)), o.write(i.default.writeUint32(e.offset))) : o.write(i.default.writeUint32(16777216))
                    }), o.buffer
                }
            }, {
                key: "sdtp",
                value: function (t) {
                    var n = new i.default;
                    return n.write(e.size(12 + t.samples.length), e.type("sdtp"), e.extension(0, 0)), t.samples.forEach(function (e) {
                        n.write(new Uint8Array(1 === t.id ? [e.key ? 32 : 16] : [16]))
                    }), n.buffer
                }
            }, {
                key: "mdat",
                value: function (t) {
                    var n = new i.default,
                        r = 8;
                    return t.samples.forEach(function (e) {
                        r += e.size
                    }), n.write(e.size(r), e.type("mdat")), t.samples.forEach(function (e) {
                        n.write(e.buffer)
                    }), n.buffer
                }
            }]), e
        }();
    o.sequence = 1, t.default = o, e.exports = t.default
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
    }();
    var i = function () {
        function e(t, n) {
            if (function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.url = t, this.on = !1, !e.queue.some(function (e) {
                    return e.url === t
                })) {
                var r = new XMLHttpRequest;
                r.target = this, r.responseType = "arraybuffer", r.open("get", t), r.onload = function () {
                    200 !== r.status && 206 !== r.status || n && n instanceof Function && n(r.response), r.target.remove()
                }, r.onerror = function () {
                    r.target.remove()
                }, r.onabort = function () {
                    r.target.remove()
                }, this.xhr = r, e.queue.push(this), this.update()
            }
        }
        return r(e, [{
            key: "cancel",
            value: function () {
                this.xhr.abort()
            }
        }, {
            key: "remove",
            value: function () {
                var t = this;
                e.queue.filter(function (n, r) {
                    return n.url === t.url && (e.queue.splice(r, 1), !0)
                }), this.update()
            }
        }, {
            key: "update",
            value: function () {
                var t = e.queue,
                    n = t.filter(function (e) {
                        return e.on
                    }),
                    r = t.filter(function (e) {
                        return !e.on
                    }),
                    i = e.limit - n.length;
                r.forEach(function (e, t) {
                    t < i && e.run()
                })
            }
        }, {
            key: "run",
            value: function () {
                1 === this.xhr.readyState ? (this.on = !0, this.xhr.send()) : this.remove()
            }
        }], [{
            key: "clear",
            value: function () {
                e.queue.forEach(function (e) {
                    e.on && e.cancel()
                }), e.queue.length = 0
            }
        }]), e
    }();
    i.queue = [], i.limit = 2, window.Task = i, t.default = i, e.exports = t.default
}]);