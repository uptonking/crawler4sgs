! function(t) {
    function e(o) {
        if (n[o]) return n[o].exports;
        var r = n[o] = {
            "i": o,
            "l": !1,
            "exports": {}
        };
        return t[o].call(r.exports, r, r.exports, e), r.l = !0, r.exports
    }
    var n = {};
    e.m = t, e.c = n, e.i = function(t) {
        return t
    }, e.d = function(t, n, o) {
        e.o(t, n) || Object.defineProperty(t, n, {
            "configurable": !1,
            "enumerable": !0,
            "get": o
        })
    }, e.n = function(t) {
        var n = t && t.__esModule ? function() {
            return t["default"]
        } : function() {
            return t
        };
        return e.d(n, "a", n), n
    }, e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "./assets/", e(e.s = 91)
}([function(t, e, n) {
    var o = n(47).filename.split(".")[0],
        r = {
            "addEvent": function(t, e, n) {
                e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent ? e.attachEvent("on" + t, n) : e[
                    t] = n
            },
            "timestamp": function() {
                return (new Date).getTime().toString(16)
            },
            "error": function(t) {
                window.console ? console.error(t) : alert(t)
            },
            "warn": function(t) {
                window.console ? console.warn(t) : alert(t)
            },
            "closeSocketIO": function() {
                this.socket && this.socket.close(), this.socketTimer && clearTimeout(this.socketTimer)
            },
            "ver": function i(t) {
                for (var e in this) "string" == typeof this[e] ? this[e] = this[e].replace(/id="\w+/g, function(e) {
                    return e + "_" + t
                }) : this[e].constructor === Object && i.call(this[e], t)
            },
            "__preventDefault": function() {
                return this.preventDefault ? this.preventDefault() : this.returnValue = !1
            },
            "componentPath": function() {
                for (var t = new RegExp(o, "ig"), e = Array.prototype.slice.call(document.scripts, 0), n = e.length; n--;)
                    if (t.test(e[n].src)) return e[n].src.slice(0, e[n].src.lastIndexOf("/") + 1)
            },
            "once": function(t, e) {
                var n;
                return function() {
                    return t && (n = t.apply(e || this, arguments), t = null), n
                }
            },
            "isPhone": function(t) {
                var e = new Array;
                e.push(/^14[57]\d{8}$/), e.push(/^15[012356789]\d{8}$/), e.push(/^13[0-9]\d{8}$/), e.push(
                    /^18[012456789]\d{8}$/);
                for (var n = !1, o = e.length; o--;)
                    if (e[o].test(t)) {
                        n = !0;
                        break
                    }
                return n
            },
            "setCookie": function(t, e, n) {
                var o = r.getsec(n),
                    i = new Date;
                i.setTime(i.getTime() + 1 * o), document.cookie = t + "=" + escape(e) + ";expires=" + i.toGMTString()
            },
            "getsec": function(t) {
                var e = 1 * t.substring(1, t.length),
                    n = t.substring(0, 1);
                return "s" == n ? 1e3 * e : "h" == n ? 60 * e * 60 * 1e3 : "d" == n ? 24 * e * 60 * 60 * 1e3 : void 0
            },
            "getCookie": function(t) {
                var e = new RegExp("(?:^| )" + t + "(?:(?:=([^;]*))|;|$)"),
                    n = String(document.cookie).match(e);
                return n ? decodeURIComponent(n[1]) : ""
            },
            "delCookie": function(t) {
                var e = new Date;
                e.setTime(e.getTime() - 1);
                var n = r.getCookie(t);
                null != n && (document.cookie = t + "=" + n + ";expires=" + e.toGMTString())
            },
            "template": function(t) {
                var e = new RegExp("/\\*([\\S\\s]*)\\*/", "mg");
                t = t.toString().replace(/[\r\n]/g, "").replace(/(<[^>]*>|{|\/\*|\*\/)\s+/g, "$1");
                for (var n = t.match(e) || [], o = [], r = n.length; r--;) o.push(n[r].replace(e, "$1"));
                return o.join("")
            },
            "getIDs": function(t) {
                var e, n = new RegExp('id="(\\w+)', "ig"),
                    o = {};
                return function r(t) {
                    for (var i in t)
                        if (t[i].constructor === String)
                            for (; null !== (e = n.exec(t[i]));) o[i] ||
                                (o[i] = new Array), o[i].push(e[1]);
                        else t[i].constructor === Object && r(t[i])
                }(t), o
            },
            "checkID": function(t, e, n) {
                var o = !0,
                    i = r.getIDs(t);
                for (var s in i) e[s].forEach(function(t, e, a) {
                    i[s].includes(t) || (r.error((n ? "请在ID值为：'" + n + "'的中实例中" : "") + "检查自定义模板：'" + s +
                        "'中是否正确绑定'ID'值为：" + t + "的元素，如未正确绑定将影响实例生成！"), o = !1)
                });
                return o
            }
        };
    t.exports = r
}, function(t, e, n) {
    var o = n(37)("wks"),
        r = n(28),
        i = n(2).Symbol,
        s = "function" == typeof i;
    (t.exports = function(t) {
        return o[t] || (o[t] = s && i[t] || (s ? i : r)("Symbol." + t))
    }).store = o
}, function(t, e) {
    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self &&
        self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, function(t, e) {
    var n = t.exports = {
        "version": "2.4.0"
    };
    "number" == typeof __e && (__e = n)
}, function(t, e, n) {
    var o = n(2),
        r = n(3),
        i = n(7),
        s = n(14),
        a = n(9),
        c = function(t, e, n) {
            var u, d, l, f, p = t & c.F,
                h = t & c.G,
                _ = t & c.S,
                v = t & c.P,
                m = t & c.B,
                b = h ? o : _ ? o[e] || (o[e] = {}) : (o[e] || {})["prototype"],
                g = h ? r : r[e] || (r[e] = {}),
                y = g["prototype"] || (g["prototype"] = {});
            h && (n = e);
            for (u in n) d = !p && b && void 0 !== b[u], l = (d ? b : n)[u], f = m && d ? a(l, o) : v && "function" ==
                typeof l ? a(Function.call, l) : l, b && s(b, u, l, t & c.U), g[u] != l && i(g, u, f), v && y[u] !=
                l && (y[u] = l)
        };
    o.core = r, c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, t.exports = c
}, function(t, e, n) {
    var o = n(8);
    t.exports = function(t) {
        if (!o(t)) throw TypeError(t + " is not an object!");
        return t
    }
}, function(t, e) {
    var n = {}.toString;
    t.exports = function(t) {
        return n.call(t).slice(8, -1)
    }
}, function(t, e, n) {
    var o = n(16),
        r = n(36);
    t.exports = n(10) ? function(t, e, n) {
        return o.f(t, e, r(1, n))
    } : function(t, e, n) {
        return t[e] = n, t
    }
}, function(t, e) {
    t.exports = function(t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }
}, function(t, e, n) {
    var o = n(15);
    t.exports = function(t, e, n) {
        if (o(t), void 0 === e) return t;
        switch (n) {
            case 1:
                return function(n) {
                    return t.call(e, n)
                };
            case 2:
                return function(n, o) {
                    return t.call(e, n, o)
                };
            case 3:
                return function(n, o, r) {
                    return t.call(e, n, o, r)
                }
        }
        return function() {
            return t.apply(e, arguments)
        }
    }
}, function(t, e, n) {
    t.exports = !n(11)(function() {
        return 7 != Object.defineProperty({}, "a", {
            "get": function() {
                return 7
            }
        }).a
    })
}, function(t, e) {
    t.exports = function(t) {
        try {
            return !!t()
        } catch (e) {
            return !0
        }
    }
}, function(t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function(t, e) {
        return n.call(t, e)
    }
}, function(t, e) {
    t.exports = {}
}, function(t, e, n) {
    var o = n(2),
        r = n(7),
        i = n(12),
        s = n(28)("src"),
        a = Function["toString"],
        c = ("" + a).split("toString");
    n(3).inspectSource = function(t) {
        return a.call(t)
    }, (t.exports = function(t, e, n, a) {
        var u = "function" == typeof n;
        u && (i(n, "name") || r(n, "name", e)), t[e] !== n && (u && (i(n, s) || r(n, s, t[e] ? "" + t[e] : c.join(
            String(e)))), t === o ? t[e] = n : a ? t[e] ? t[e] = n : r(t, e, n) : (delete t[e], r(t, e, n)))
    })(Function.prototype, "toString", function() {
        return "function" == typeof this && this[s] || a.call(this)
    })
}, function(t, e) {
    t.exports = function(t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t
    }
}, function(t, e, n) {
    var o = n(5),
        r = n(54),
        i = n(74),
        s = Object.defineProperty;
    e.f = n(10) ? Object.defineProperty : function(t, e, n) {
        if (o(t), e = i(e, !0), o(n), r) try {
            return s(t, e, n)
        } catch (a) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (t[e] = n.value), t
    }
}, function(t, e, n) {
    var o = n(25),
        r = Math.min;
    t.exports = function(t) {
        return t > 0 ? r(o(t), 9007199254740991) : 0
    }
}, function(t, e, n) {
    var o = n(6),
        r = n(1)("toStringTag"),
        i = "Arguments" == o(function() {
            return arguments
        }()),
        s = function(t, e) {
            try {
                return t[e]
            } catch (n) {}
        };
    t.exports = function(t) {
        var e, n, a;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = s(e = Object(t), r)) ? n :
            i ? o(e) : "Object" == (a = o(e)) && "function" == typeof e.callee ? "Arguments" : a
    }
}, function(t, e) {
    t.exports = function(t) {
        if (void 0 == t) throw TypeError("Can't call method on  " + t);
        return t
    }
}, function(t, e, n) {
    var o = n(8),
        r = n(2).document,
        i = o(r) && o(r.createElement);
    t.exports = function(t) {
        return i ? r.createElement(t) : {}
    }
}, function(t, e, n) {
    t.exports = n(2).document && document.documentElement
}, function(t, e, n) {
    var o = n(6);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
        return "String" == o(t) ? t.split("") : Object(t)
    }
}, function(t, e, n) {
    var o = n(16).f,
        r = n(12),
        i = n(1)("toStringTag");
    t.exports = function(t, e, n) {
        t && !r(t = n ? t : t.prototype, i) && o(t, i, {
            "configurable": !0,
            "value": e
        })
    }
}, function(t, e, n) {
    var o = n(37)("keys"),
        r = n(28);
    t.exports = function(t) {
        return o[t] || (o[t] = r(t))
    }
}, function(t, e) {
    var n = Math.ceil,
        o = Math.floor;
    t.exports = function(t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? o : n)(t)
    }
}, function(t, e, n) {
    var o = n(22),
        r = n(19);
    t.exports = function(t) {
        return o(r(t))
    }
}, function(t, e, n) {
    var o = n(19);
    t.exports = function(t) {
        return Object(o(t))
    }
}, function(t, e) {
    var n = 0,
        o = Math.random();
    t.exports = function(t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + o).toString(36))
    }
}, function(t, e, n) {
    var o = n(1)("unscopables"),
        r = Array.prototype;
    void 0 == r[o] && n(7)(r, o, {}), t.exports = function(t) {
        r[o][t] = !0
    }
}, function(t, e, n) {
    var o = n(26),
        r = n(17),
        i = n(39);
    t.exports = function(t) {
        return function(e, n, s) {
            var a, c = o(e),
                u = r(c.length),
                d = i(s, u);
            if (t && n != n) {
                for (; u > d;)
                    if ((a = c[d++]) != a) return !0
            } else
                for (; u > d; d++)
                    if ((t || d in c) && c[d] === n) return t || d || 0; return !t && -1
        }
    }
}, function(t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
        ",")
}, function(t, e) {
    t.exports = function(t, e, n) {
        var o = void 0 === n;
        switch (e.length) {
            case 0:
                return o ? t() : t.call(n);
            case 1:
                return o ? t(e[0]) : t.call(n, e[0]);
            case 2:
                return o ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
            case 3:
                return o ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
            case 4:
                return o ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3])
        }
        return t.apply(n, e)
    }
}, function(t, e, n) {
    "use strict";
    var o = n(34),
        r = n(4),
        i = n(14),
        s = n(7),
        a = n(12),
        c = n(13),
        u = n(58),
        d = n(23),
        l = n(66),
        f = n(1)("iterator"),
        p = !([].keys && "next" in [].keys()),
        h = function() {
            return this
        };
    t.exports = function(t, e, n, _, v, m, b) {
        u(n, e, _);
        var g, y, x, C = function(t) {
                if (!p && t in T) return T[t];
                switch (t) {
                    case "keys":
                    case "values":
                        return function() {
                            return new n(this, t)
                        }
                }
                return function() {
                    return new n(this, t)
                }
            },
            w = e + " Iterator",
            I = "values" == v,
            k = !1,
            T = t.prototype,
            D = T[f] || T["@@iterator"] || v && T[v],
            S = D || C(v),
            E = v ? I ? C("entries") : S : void 0,
            j = "Array" == e ? T.entries || D : D;
        if (j && (x = l(j.call(new t))) !== Object.prototype && (d(x, w, !0), o || a(x, f) || s(x, f, h)), I && D &&
            "values" !== D.name && (k = !0, S = function() {
                return D.call(this)
            }), o && !b || !p && !k && T[f] || s(T, f, S), c[e] = S, c[w] = h, v)
            if (g = {
                    "values": I ? S : C("values"),
                    "keys": m ? S : C("keys"),
                    "entries": E
                }, b)
                for (y in g) y in T || i(T, y, g[y]);
            else r(r.P + r.F * (p || k), e, g);
        return g
    }
}, function(t, e) {
    t.exports = !1
}, function(t, e, n) {
    var o = n(67),
        r = n(31);
    t.exports = Object.keys || function(t) {
        return o(t, r)
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return {
            "enumerable": !(1 & t),
            "configurable": !(2 & t),
            "writable": !(4 & t),
            "value": e
        }
    }
}, function(t, e, n) {
    var o = n(2),
        r = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
    t.exports = function(t) {
        return r[t] || (r[t] = {})
    }
}, function(t, e, n) {
    var o, r, i, s = n(9),
        a = n(32),
        c = n(21),
        u = n(20),
        d = n(2),
        l = d.process,
        f = d.setImmediate,
        p = d.clearImmediate,
        h = d.MessageChannel,
        _ = 0,
        v = {},
        m = function() {
            var t = +this;
            if (v.hasOwnProperty(t)) {
                var e = v[t];
                delete v[t], e()
            }
        },
        b = function(t) {
            m.call(t.data)
        };
    f && p || (f = function(t) {
            for (var e = [], n = 1; arguments.length > n;) e.push(arguments[n++]);
            return v[++_] = function() {
                a("function" == typeof t ? t : Function(t), e)
            }, o(_), _
        }, p = function(t) {
            delete v[t]
        }, "process" == n(6)(l) ? o = function(t) {
            l.nextTick(s(m, t, 1))
        } : h ? (r = new h, i = r.port2, r.port1.onmessage = b, o = s(i.postMessage, i, 1)) : d.addEventListener &&
        "function" == typeof postMessage && !d.importScripts ? (o = function(t) {
            d.postMessage(t + "", "*")
        }, d.addEventListener("message", b, !1)) : o = "onreadystatechange" in u("script") ? function(t) {
            c.appendChild(u("script"))["onreadystatechange"] = function() {
                c.removeChild(this), m.call(t)
            }
        } : function(t) {
            setTimeout(s(m, t, 1), 0)
        }), t.exports = {
        "set": f,
        "clear": p
    }
}, function(t, e, n) {
    var o = n(25),
        r = Math.max,
        i = Math.min;
    t.exports = function(t, e) {
        return t = o(t), t < 0 ? r(t + e, 0) : i(t, e)
    }
}, function(t, e, n) {
    n(76), t.exports = n(3).Array.forEach
}, function(t, e, n) {
    n(84), t.exports = n(3).Array.includes
}, function(t, e, n) {
    n(78), t.exports = n(3).Array.slice
}, function(t, e, n) {
    n(79), t.exports = n(3).Function.bind
}, function(t, e, n) {
    n(80), t.exports = n(3).Object.assign
}, function(t, e, n) {
    n(81), n(83), n(85), n(82), t.exports = n(3).Promise
}, function(t, e, n) {
    var o = n(88),
        r = n(89),
        i = n(0).once,
        s = [],
        a = [],
        c = [],
        u = i(function() {
            if (!window["io"]) {
                var t = o("need/socket.io-1.3.7.js");
                a.push(t)
            }
        }),
        d = i(function() {
            if (!$("document").placeholder) {
                var t = o("need/placeholder.js");
                c.push(t)
            }
        });

    // 初始化登录方法
    // 2个输入参数：dom元素id、登录请求配置
    window.ykLogin = function(t, e) {

            var n = s.push({
                "tag": t,
                "params": e,
                "instantiation": {}
            });

            return /扫码登录/g.test(e.loginWays) && u(),
                Promise.all(a).then(function() {
                    d(),
                        Promise.all(c).then(function() {
                            s[n - 1].instantiation = new r(s[n - 1].tag, s[n - 1].params)
                        })
                }), s[n - 1]
        },

        window.ykLogin.utils = r.utils,
        function() {
            var t = o("need/sdk_default_style.css");
            if (!window["jQuery"]) {
                var e = o("need/jquery-1.9.1.min.js");
                a.push(e)
            }
            a.push(t)
        }()
}, function(t, e, n) {
    (function(e) {
        var o = n(86);
        t.exports = {
            "path": o.join(e, "dist/assets"),
            "publicPath": "./assets/",
            "chunkFilename": "[name].min.js",
            "filename": "dobest_login_jssdk.min.js"
        }
    }).call(e, "/")
}, function(t, e) {
    t.exports = function(t, e, n, o) {
        if (!(t instanceof e) || void 0 !== o && o in t) throw TypeError(n + ": incorrect invocation!");
        return t
    }
}, function(t, e, n) {
    var o = n(9),
        r = n(22),
        i = n(27),
        s = n(17),
        a = n(51);
    t.exports = function(t, e) {
        var n = 1 == t,
            c = 2 == t,
            u = 3 == t,
            d = 4 == t,
            l = 6 == t,
            f = 5 == t || l,
            p = e || a;
        return function(e, a, h) {
            for (var _, v, m = i(e), b = r(m), g = o(a, h, 3), y = s(b.length), x = 0, C = n ? p(e, y) : c ? p(e, 0) :
                    void 0; y > x; x++)
                if ((f || x in b) && (_ = b[x], v = g(_, x, m), t))
                    if (n) C[x] = v;
                    else if (v) switch (t) {
                    case 3:
                        return !0;
                    case 5:
                        return _;
                    case 6:
                        return x;
                    case 2:
                        C.push(_)
                } else if (d) return !1;
            return l ? -1 : u || d ? d : C
        }
    }
}, function(t, e, n) {
    var o = n(8),
        r = n(56),
        i = n(1)("species");
    t.exports = function(t) {
        var e;
        return r(t) && (e = t.constructor, "function" != typeof e || e !== Array && !r(e.prototype) || (e = void 0),
            o(e) && null === (e = e[i]) && (e = void 0)), void 0 === e ? Array : e
    }
}, function(t, e, n) {
    var o = n(50);
    t.exports = function(t, e) {
        return new(o(t))(e)
    }
}, function(t, e, n) {
    "use strict";
    var o = n(15),
        r = n(8),
        i = n(32),
        s = [].slice,
        a = {},
        c = function(t, e, n) {
            if (!(e in a)) {
                for (var o = [], r = 0; r < e; r++) o[r] = "a[" + r + "]";
                a[e] = Function("F,a", "return new F(" + o.join(",") + ")")
            }
            return a[e](t, n)
        };
    t.exports = Function.bind || function(t) {
        var e = o(this),
            n = s.call(arguments, 1),
            a = function() {
                var o = n.concat(s.call(arguments));
                return this instanceof a ? c(e, o.length, o) : i(e, o, t)
            };
        return r(e.prototype) && (a.prototype = e.prototype), a
    }
}, function(t, e, n) {
    var o = n(9),
        r = n(57),
        i = n(55),
        s = n(5),
        a = n(17),
        c = n(75),
        u = {},
        d = {},
        e = t.exports = function(t, e, n, l, f) {
            var p, h, _, v, m = f ? function() {
                    return t
                } : c(t),
                b = o(n, l, e ? 2 : 1),
                g = 0;
            if ("function" != typeof m) throw TypeError(t + " is not iterable!");
            if (i(m)) {
                for (p = a(t.length); p > g; g++)
                    if ((v = e ? b(s(h = t[g])[0], h[1]) : b(t[g])) === u || v === d)
                        return v
            } else
                for (_ = m.call(t); !(h = _.next()).done;)
                    if ((v = r(_, b, h.value, e)) === u || v === d) return v
        };
    e.BREAK = u, e.RETURN = d
}, function(t, e, n) {
    t.exports = !n(10) && !n(11)(function() {
        return 7 != Object.defineProperty(n(20)("div"), "a", {
            "get": function() {
                return 7
            }
        }).a
    })
}, function(t, e, n) {
    var o = n(13),
        r = n(1)("iterator"),
        i = Array.prototype;
    t.exports = function(t) {
        return void 0 !== t && (o.Array === t || i[r] === t)
    }
}, function(t, e, n) {
    var o = n(6);
    t.exports = Array.isArray || function(t) {
        return "Array" == o(t)
    }
}, function(t, e, n) {
    var o = n(5);
    t.exports = function(t, e, n, r) {
        try {
            return r ? e(o(n)[0], n[1]) : e(n)
        } catch (s) {
            var i = t["return"];
            throw void 0 !== i && o(i.call(t)), s
        }
    }
}, function(t, e, n) {
    "use strict";
    var o = n(63),
        r = n(36),
        i = n(23),
        s = {};
    n(7)(s, n(1)("iterator"), function() {
        return this
    }), t.exports = function(t, e, n) {
        t.prototype = o(s, {
            "next": r(1, n)
        }), i(t, e + " Iterator")
    }
}, function(t, e, n) {
    var o = n(1)("iterator"),
        r = !1;
    try {
        var i = [7][o]();
        i["return"] = function() {
            r = !0
        }, Array.from(i, function() {
            throw 2
        })
    } catch (s) {}
    t.exports = function(t, e) {
        if (!e && !r) return !1;
        var n = !1;
        try {
            var i = [7],
                s = i[o]();
            s.next = function() {
                return {
                    "done": n = !0
                }
            }, i[o] = function() {
                return s
            }, t(i)
        } catch (s) {}
        return n
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return {
            "value": e,
            "done": !!t
        }
    }
}, function(t, e, n) {
    var o = n(2),
        r = n(38).set,
        i = o.MutationObserver || o.WebKitMutationObserver,
        s = o.process,
        a = o.Promise,
        c = "process" == n(6)(s);
    t.exports = function() {
        var t, e, n, u = function() {
            var o, r;
            for (c && (o = s.domain) && o.exit(); t;) {
                r = t.fn, t = t.next;
                try {
                    r()
                } catch (i) {
                    throw t ? n() : e = void 0, i
                }
            }
            e = void 0, o && o.enter()
        };
        if (c) n = function() {
            s.nextTick(u)
        };
        else if (i) {
            var d = !0,
                l = document.createTextNode("");
            new i(u).observe(l, {
                "characterData": !0
            }), n = function() {
                l.data = d = !d
            }
        } else if (a && a.resolve) {
            var f = a.resolve();
            n = function() {
                f.then(u)
            }
        } else n = function() {
            r.call(o, u)
        };
        return function(o) {
            var r = {
                "fn": o,
                "next": void 0
            };
            e && (e.next = r), t || (t = r, n()), e = r
        }
    }
}, function(t, e, n) {
    "use strict";
    var o = n(35),
        r = n(65),
        i = n(68),
        s = n(27),
        a = n(22),
        c = Object.assign;
    t.exports = !c || n(11)(function() {
        var t = {},
            e = {},
            n = Symbol(),
            o = "abcdefghijklmnopqrst";
        return t[n] = 7, o.split("").forEach(function(t) {
            e[t] = t
        }), 7 != c({}, t)[n] || Object.keys(c({}, e)).join("") != o
    }) ? function(t, e) {
        for (var n = s(t), c = arguments.length, u = 1, d = r.f, l = i.f; c > u;)
            for (var f, p = a(arguments[u++]),
                    h = d ? o(p).concat(d(p)) : o(p), _ = h.length, v = 0; _ > v;) l.call(p, f = h[v++]) && (n[f] =
                p[f]);
        return n
    } : c
}, function(t, e, n) {
    var o = n(5),
        r = n(64),
        i = n(31),
        s = n(24)("IE_PROTO"),
        a = function() {},
        c = function() {
            var t, e = n(20)("iframe"),
                o = i.length;
            for (e.style.display = "none", n(21).appendChild(e), e.src = "javascript:", t = e.contentWindow.document,
                t.open(), t.write("<script>document.F=Object<\/script>"), t.close(), c = t.F; o--;) delete c[
                "prototype"][i[o]];
            return c()
        };
    t.exports = Object.create || function(t, e) {
        var n;
        return null !== t ? (a["prototype"] = o(t), n = new a, a["prototype"] = null, n[s] = t) : n = c(), void 0 ===
            e ? n : r(n, e)
    }
}, function(t, e, n) {
    var o = n(16),
        r = n(5),
        i = n(35);
    t.exports = n(10) ? Object.defineProperties : function(t, e) {
        r(t);
        for (var n, s = i(e), a = s.length, c = 0; a > c;) o.f(t, n = s[c++], e[n]);
        return t
    }
}, function(t, e) {
    e.f = Object.getOwnPropertySymbols
}, function(t, e, n) {
    var o = n(12),
        r = n(27),
        i = n(24)("IE_PROTO"),
        s = Object.prototype;
    t.exports = Object.getPrototypeOf || function(t) {
        return t = r(t), o(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor
            .prototype : t instanceof Object ? s : null
    }
}, function(t, e, n) {
    var o = n(12),
        r = n(26),
        i = n(30)(!1),
        s = n(24)("IE_PROTO");
    t.exports = function(t, e) {
        var n, a = r(t),
            c = 0,
            u = [];
        for (n in a) n != s && o(a, n) && u.push(n);
        for (; e.length > c;) o(a, n = e[c++]) && (~i(u, n) || u.push(n));
        return u
    }
}, function(t, e) {
    e.f = {}.propertyIsEnumerable
}, function(t, e, n) {
    var o = n(14);
    t.exports = function(t, e, n) {
        for (var r in e) o(t, r, e[r], n);
        return t
    }
}, function(t, e, n) {
    "use strict";
    var o = n(2),
        r = n(16),
        i = n(10),
        s = n(1)("species");
    t.exports = function(t) {
        var e = o[t];
        i && e && !e[s] && r.f(e, s, {
            "configurable": !0,
            "get": function() {
                return this
            }
        })
    }
}, function(t, e, n) {
    var o = n(5),
        r = n(15),
        i = n(1)("species");
    t.exports = function(t, e) {
        var n, s = o(t).constructor;
        return void 0 === s || void 0 == (n = o(s)[i]) ? e : r(n)
    }
}, function(t, e, n) {
    var o = n(11);
    t.exports = function(t, e) {
        return !!t && o(function() {
            e ? t.call(null, function() {}, 1) : t.call(null)
        })
    }
}, function(t, e, n) {
    var o = n(25),
        r = n(19);
    t.exports = function(t) {
        return function(e, n) {
            var i, s, a = String(r(e)),
                c = o(n),
                u = a.length;
            return c < 0 || c >= u ? t ? "" : void 0 : (i = a.charCodeAt(c), i < 55296 || i > 56319 || c + 1 === u ||
                (s = a.charCodeAt(c + 1)) < 56320 || s > 57343 ? t ? a.charAt(c) : i : t ? a.slice(c, c + 2) : s -
                56320 + (i - 55296 << 10) + 65536)
        }
    }
}, function(t, e, n) {
    var o = n(8);
    t.exports = function(t, e) {
        if (!o(t)) return t;
        var n, r;
        if (e && "function" == typeof(n = t.toString) && !o(r = n.call(t))) return r;
        if ("function" == typeof(n = t.valueOf) && !o(r = n.call(t))) return r;
        if (!e && "function" == typeof(n = t.toString) && !o(r = n.call(t))) return r;
        throw TypeError("Can't convert object to primitive value")
    }
}, function(t, e, n) {
    var o = n(18),
        r = n(1)("iterator"),
        i = n(13);
    t.exports = n(3).getIteratorMethod = function(t) {
        if (void 0 != t) return t[r] || t["@@iterator"] || i[o(t)]
    }
}, function(t, e, n) {
    "use strict";
    var o = n(4),
        r = n(49)(0),
        i = n(72)([].forEach, !0);
    o(o.P + o.F * !i, "Array", {
        "forEach": function(t) {
            return r(this, t, arguments[1])
        }
    })
}, function(t, e, n) {
    "use strict";
    var o = n(29),
        r = n(60),
        i = n(13),
        s = n(26);
    t.exports = n(33)(Array, "Array", function(t, e) {
        this._t = s(t), this._i = 0, this._k = e
    }, function() {
        var t = this._t,
            e = this._k,
            n = this._i++;
        return !t || n >= t.length ? (this._t = void 0, r(1)) : "keys" == e ? r(0, n) : "values" == e ? r(0, t[n]) :
            r(0, [n, t[n]])
    }, "values"), i.Arguments = i.Array, o("keys"), o("values"), o("entries")
}, function(t, e, n) {
    "use strict";
    var o = n(4),
        r = n(21),
        i = n(6),
        s = n(39),
        a = n(17),
        c = [].slice;
    o(o.P + o.F * n(11)(function() {
        r && c.call(r)
    }), "Array", {
        "slice": function(t, e) {
            var n = a(this.length),
                o = i(this);
            if (e = void 0 === e ? n : e, "Array" == o) return c.call(this, t, e);
            for (var r = s(t, n), u = s(e, n), d = a(u - r), l = Array(d), f = 0; f < d; f++) l[f] = "String" == o ?
                this.charAt(r + f) : this[r + f];
            return l
        }
    })
}, function(t, e, n) {
    var o = n(4);
    o(o.P, "Function", {
        "bind": n(52)
    })
}, function(t, e, n) {
    var o = n(4);
    o(o.S + o.F, "Object", {
        "assign": n(62)
    })
}, function(t, e, n) {
    "use strict";
    var o = n(18),
        r = {};
    r[n(1)("toStringTag")] = "z", r + "" != "[object z]" && n(14)(Object.prototype, "toString", function() {
        return "[object " + o(this) + "]"
    }, !0)
}, function(t, e, n) {
    "use strict";
    var o, r, i, s = n(34),
        a = n(2),
        c = n(9),
        u = n(18),
        d = n(4),
        l = n(8),
        f = n(15),
        p = n(48),
        h = n(53),
        _ = n(71),
        v = n(38).set,
        m = n(61)(),
        b = a.TypeError,
        g = a.process,
        y = a["Promise"],
        g = a.process,
        x = "process" == u(g),
        C = function() {},
        w = !! function() {
            try {
                var t = y.resolve(1),
                    e = (t.constructor = {})[n(1)("species")] = function(t) {
                        t(C, C)
                    };
                return (x || "function" == typeof PromiseRejectionEvent) && t.then(C) instanceof e
            } catch (o) {}
        }(),
        I = function(t, e) {
            return t === e || t === y && e === i
        },
        k = function(t) {
            var e;
            return !(!l(t) || "function" != typeof(e = t.then)) && e
        },
        T = function(t) {
            return I(y, t) ? new D(t) : new r(t)
        },
        D = r = function(t) {
            var e, n;
            this.promise = new t(function(t, o) {
                if (void 0 !== e || void 0 !== n) throw b("Bad Promise constructor");
                e = t, n = o
            }), this.resolve = f(e), this.reject = f(n)
        },
        S = function(t) {
            try {
                t()
            } catch (e) {
                return {
                    "error": e
                }
            }
        },
        E = function(t, e) {
            if (!t._n) {
                t._n = !0;
                var n = t._c;
                m(function() {
                    for (var o = t._v, r = 1 == t._s, i = 0; n.length > i;) ! function(e) {
                        var n, i, s = r ? e.ok : e.fail,
                            a = e.resolve,
                            c = e.reject,
                            u = e.domain;
                        try {
                            s ? (r || (2 == t._h && L(t), t._h = 1), !0 === s ? n = o : (u && u.enter(), n = s(o),
                                u && u.exit()), n === e.promise ? c(b("Promise-chain cycle")) : (i = k(n)) ? i.call(
                                n, a, c) : a(n)) : c(o)
                        } catch (d) {
                            c(d)
                        }
                    }(n[i++]);
                    t._c = [], t._n = !1, e && !t._h && j(t)
                })
            }
        },
        j = function(t) {
            v.call(a, function() {
                var e, n, o, r = t._v;
                if ($(t) && (e = S(function() {
                        x ? g.emit("unhandledRejection", r, t) : (n = a.onunhandledrejection) ? n({
                            "promise": t,
                            "reason": r
                        }) : (o = a.console) && o.error && o.error("Unhandled promise rejection", r)
                    }), t._h = x || $(t) ? 2 : 1), t._a = void 0, e) throw e.error
            })
        },
        $ = function(t) {
            if (1 == t._h) return !1;
            for (var e, n = t._a || t._c, o = 0; n.length > o;)
                if (e = n[o++], e.fail || !$(e.promise)) return !1;
            return !0
        },
        L = function(t) {
            v.call(a, function() {
                var e;
                x ? g.emit("rejectionHandled", t) : (e = a.onrejectionhandled) && e({
                    "promise": t,
                    "reason": t._v
                })
            })
        },
        O = function(t) {
            var e = this;
            e._d || (e._d = !0, e = e._w || e, e._v = t, e._s = 2, e._a || (e._a = e._c.slice()), E(e, !0))
        },
        A = function(t) {
            var e, n = this;
            if (!n._d) {
                n._d = !0, n = n._w || n;
                try {
                    if (n === t) throw b("Promise can't be resolved itself");
                    (e = k(t)) ? m(function() {
                        var o = {
                            "_w": n,
                            "_d": !1
                        };
                        try {
                            e.call(t, c(A, o, 1), c(O, o, 1))
                        } catch (r) {
                            O.call(o, r)
                        }
                    }): (n._v = t, n._s = 1, E(n, !1))
                } catch (o) {
                    O.call({
                        "_w": n,
                        "_d": !1
                    }, o)
                }
            }
        };
    w || (y = function(t) {
        p(this, y, "Promise", "_h"), f(t), o.call(this);
        try {
            t(c(A, this, 1), c(O, this, 1))
        } catch (e) {
            O.call(this, e)
        }
    }, o = function(t) {
        this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
    }, o.prototype = n(69)(y.prototype, {
        "then": function(t, e) {
            var n = T(_(this, y));
            return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, n.domain = x ? g.domain :
                void 0, this._c.push(n), this._a && this._a.push(n), this._s && E(this, !1), n.promise
        },
        "catch": function(t) {
            return this.then(void 0, t)
        }
    }), D = function() {
        var t = new o;
        this.promise = t, this.resolve = c(A, t, 1), this.reject = c(O, t, 1)
    }), d(d.G + d.W + d.F * !w, {
        "Promise": y
    }), n(23)(y, "Promise"), n(70)("Promise"), i = n(3)["Promise"], d(d.S + d.F * !w, "Promise", {
        "reject": function(t) {
            var e = T(this);
            return (0, e.reject)(t), e.promise
        }
    }), d(d.S + d.F * (s || !w), "Promise", {
        "resolve": function(t) {
            if (t instanceof y && I(t.constructor, this)) return t;
            var e = T(this);
            return (0, e.resolve)(t), e.promise
        }
    }), d(d.S + d.F * !(w && n(59)(function(t) {
        y.all(t)["catch"](C)
    })), "Promise", {
        "all": function(t) {
            var e = this,
                n = T(e),
                o = n.resolve,
                r = n.reject,
                i = S(function() {
                    var n = [],
                        i = 0,
                        s = 1;
                    h(t, !1, function(t) {
                        var a = i++,
                            c = !1;
                        n.push(void 0), s++, e.resolve(t).then(function(t) {
                            c || (c = !0, n[a] = t, --s || o(n))
                        }, r)
                    }), --s || o(n)
                });
            return i && r(i.error), n.promise
        },
        "race": function(t) {
            var e = this,
                n = T(e),
                o = n.reject,
                r = S(function() {
                    h(t, !1, function(t) {
                        e.resolve(t).then(n.resolve, o)
                    })
                });
            return r && o(r.error), n.promise
        }
    })
}, function(t, e, n) {
    "use strict";
    var o = n(73)(!0);
    n(33)(String, "String", function(t) {
        this._t = String(t), this._i = 0
    }, function() {
        var t, e = this._t,
            n = this._i;
        return n >= e.length ? {
            "value": void 0,
            "done": !0
        } : (t = o(e, n), this._i += t.length, {
            "value": t,
            "done": !1
        })
    })
}, function(t, e, n) {
    "use strict";
    var o = n(4),
        r = n(30)(!0);
    o(o.P, "Array", {
        "includes": function(t) {
            return r(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), n(29)("includes")
}, function(t, e, n) {
    for (var o = n(77), r = n(14), i = n(2), s = n(7), a = n(13), c = n(1), u = c("iterator"), d = c("toStringTag"),
            l = a.Array, f = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], p = 0; p <
        5; p++) {
        var h, _ = f[p],
            v = i[_],
            m = v && v.prototype;
        if (m) {
            m[u] || s(m, u, l), m[d] || s(m, d, _), a[_] = l;
            for (h in o) m[h] || r(m, h, o[h], !0)
        }
    }
}, function(t, e, n) {
    (function(t) {
        function n(t, e) {
            for (var n = 0, o = t.length - 1; o >= 0; o--) {
                var r = t[o];
                "." === r ? t.splice(o, 1) : ".." === r ? (t.splice(o, 1), n++) : n && (t.splice(o, 1), n--)
            }
            if (e)
                for (; n--; n) t.unshift("..");
            return t
        }

        function o(t, e) {
            if (t.filter) return t.filter(e);
            for (var n = [], o = 0; o < t.length; o++) e(t[o], o, t) && n.push(t[o]);
            return n
        }
        var r = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,
            i = function(t) {
                return r.exec(t).slice(1)
            };
        e.resolve = function() {
            for (var e = "", r = !1, i = arguments.length - 1; i >= -1 && !r; i--) {
                var s = i >= 0 ? arguments[i] : t.cwd();
                if ("string" != typeof s) throw new TypeError("Arguments to path.resolve must be strings");
                s && (e = s + "/" + e, r = "/" === s.charAt(0))
            }
            return e = n(o(e.split("/"), function(t) {
                return !!t
            }), !r).join("/"), (r ? "/" : "") + e || "."
        }, e.normalize = function(t) {
            var r = e.isAbsolute(t),
                i = "/" === s(t, -1);
            return t = n(o(t.split("/"), function(t) {
                return !!t
            }), !r).join("/"), t || r || (t = "."), t && i && (t += "/"), (r ? "/" : "") + t
        }, e.isAbsolute = function(t) {
            return "/" === t.charAt(0)
        }, e.join = function() {
            var t = Array.prototype.slice.call(arguments, 0);
            return e.normalize(o(t, function(t, e) {
                if ("string" != typeof t) throw new TypeError("Arguments to path.join must be strings");
                return t
            }).join("/"))
        }, e.relative = function(t, n) {
            function o(t) {
                for (var e = 0; e < t.length && "" === t[e]; e++);
                for (var n = t.length - 1; n >= 0 && "" === t[n]; n--);
                return e > n ? [] : t.slice(e, n - e + 1)
            }
            t = e.resolve(t).substr(1), n = e.resolve(n).substr(1);
            for (var r = o(t.split("/")), i = o(n.split("/")), s = Math.min(r.length, i.length), a = s, c = 0; c <
                s; c++)
                if (r[c] !== i[c]) {
                    a = c;
                    break
                }
            for (var u = [], c = a; c < r.length; c++) u.push("..");
            return u = u.concat(i.slice(a)), u.join("/")
        }, e.sep = "/", e.delimiter = ":", e.dirname = function(t) {
            var e = i(t),
                n = e[0],
                o = e[1];
            return n || o ? (o && (o = o.substr(0, o.length - 1)), n + o) : "."
        }, e.basename = function(t, e) {
            var n = i(t)[2];
            return e && n.substr(-1 * e.length) === e && (n = n.substr(0, n.length - e.length)), n
        }, e.extname = function(t) {
            return i(t)[3]
        };
        var s = "b" === "ab".substr(-1) ? function(t, e, n) {
            return t.substr(e, n)
        } : function(t, e, n) {
            return e < 0 && (e = t.length + e), t.substr(e, n)
        }
    }).call(e, n(87))
}, function(t, e) {
    function n() {
        throw new Error("setTimeout has not been defined")
    }

    function o() {
        throw new Error("clearTimeout has not been defined")
    }

    function r(t) {
        if (d === setTimeout) return setTimeout(t, 0);
        if ((d === n || !d) && setTimeout) return d = setTimeout, setTimeout(t, 0);
        try {
            return d(t, 0)
        } catch (e) {
            try {
                return d.call(null, t, 0)
            } catch (e) {
                return d.call(this, t, 0)
            }
        }
    }

    function i(t) {
        if (l === clearTimeout) return clearTimeout(t);
        if ((l === o || !l) && clearTimeout) return l = clearTimeout, clearTimeout(t);
        try {
            return l(t)
        } catch (e) {
            try {
                return l.call(null, t)
            } catch (e) {
                return l.call(this, t)
            }
        }
    }

    function s() {
        _ && p && (_ = !1, p.length ? h = p.concat(h) : v = -1, h.length && a())
    }

    function a() {
        if (!_) {
            var t = r(s);
            _ = !0;
            for (var e = h.length; e;) {
                for (p = h, h = []; ++v < e;) p && p[v].run();
                v = -1, e = h.length
            }
            p = null, _ = !1, i(t)
        }
    }

    function c(t, e) {
        this.fun = t, this.array = e
    }

    function u() {}
    var d, l, f = t.exports = {};
    ! function() {
        try {
            d = "function" == typeof setTimeout ? setTimeout : n
        } catch (t) {
            d = n
        }
        try {
            l = "function" == typeof clearTimeout ? clearTimeout : o
        } catch (t) {
            l = o
        }
    }();
    var p, h = [],
        _ = !1,
        v = -1;
    f.nextTick = function(t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            h.push(new c(t, e)), 1 !== h.length || _ || r(a)
        }, c.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", f.versions = {}, f.on = u, f.addListener =
        u, f.once = u, f.off = u, f.removeListener = u, f.removeAllListeners = u, f.emit = u, f.binding = function(
            t) {
            throw new Error("process.binding is not supported")
        }, f.cwd = function() {
            return "/"
        }, f.chdir = function(t) {
            throw new Error("process.chdir is not supported")
        }, f.umask = function() {
            return 0
        }
}, function(t, e, n) {
    var o = n(0).componentPath(),
        r = function(t) {
            var e = document.createElement("script");
            if (e.type = "text/javascript", e.src = o + t, "" !== e.src) return document.getElementsByTagName(
                "head")[0].appendChild(e), e
        },
        i = function(t, e) {
            t.readyState ? t.attachEvent("onreadystatechange", function() {
                "loaded" !== t.readyState && "complete" !== t.readyState || e()
            }) : t.addEventListener("load", e)
        },
        s = function(t) {
            var e = document.createElement("link");
            e.rel = "stylesheet", e.href = o + t, e.type = "text/css";
            for (var n = Array.prototype.slice.call(document.getElementsByTagName("link"), 0), r = n.length; r--;)
                if (n[r].href === e.href) return !1;
            n.unshift(e);
            for (var i = n.length; i--;)
                if (/reset/gi.test(n[i].href)) {
                    var s = n[i];
                    n.splice(i, 1), n.unshift(s)
                }
            for (var a = 0, c = n.length; a < c; a++) document.getElementsByTagName("head")[0].appendChild(n[a]);
            return e
        },
        a = function(t, e) {
            t ? t.attachEvent ? t.attachEvent("onload", e) : setTimeout(function() {
                c(t, e)
            }, 0) : e()
        },
        c = function(t, e) {
            if (!e.isCalled) {
                var n = !1;
                if (/webkit/i.test(navigator.userAgent)) t["sheet"] && (n = !0);
                else if (t["sheet"]) try {
                    t["sheet"].cssRules && (n = !0)
                } catch (o) {
                    1e3 === o.code && (n = !0)
                }
                n ? setTimeout(function() {
                    e()
                }, 1) : setTimeout(function() {
                    c(t, e)
                }, 1)
            }
        };
    t.exports = function(t) {
        var e = null;
        return /\.css/gi.test(t) ? (e = s(t), new Promise(function(t, n) {
            a(e, function() {
                t()
            })
        })) : /\.js/gi.test(t) ? (e = r(t), new Promise(function(t, n) {
            i(e, function() {
                t()
            })
        })) : void 0
    }
}, function(t, e, n) {

    function o(t, e) {
        if (this.template = e.appTemplate, "string" != typeof t) return r("首参数必须为字符串，且为实例绑定的容器ID"), !1;
        if (!/^#/g.test(t)) return r("您必须为绑定的ID：" + t + "加上 # 号前缀"), !1;
        if (!e.appId || e.appId.constructor !== Number) return r("ID：" + t + " 的实例缺少必填参数 'appId', 且必须数字"), !1;
        if (!e.serviceUrl || !/http/gi.test(e.serviceUrl)) return r("ID：" + t + " 的实例缺少必填参数 'serviceUrl', 且必须是一个有效网址"), !1;
        if (!e.loginSuccessCallBack || e.loginSuccessCallBack.constructor !== Function) return r("ID：" + t + " 的实例缺少必填参数 'loginSuccessCallBack', 且必须是一个方法函数"), !1;
        if (!e.loginWays) return r("ID：" + t + " 的实例缺少必填参数 'loginWays'"), !1;
        if (e.appTemplate && !p(this.template instanceof Function ? this.template() : this.template, h(_), t)) return !1;
        if (e.extra && e.extra.constructor === Object) {
            var n = Object.assign({}, o.common.formParams, e);
            for (_key in e.extra)
                if (n[_key]) return r("extra[" + _key + "] 为保留参数名，请更换您的参数名"), !1
        }
        var i = c(),
            s = Object.assign({}, _, this.template instanceof Function ? this.template() : this.template);
        for (var d in s) s[d].constructor === Object && (s[d] = Object.assign({}, _[d], s[d]));

        a.call(s, i), this.loginContainer = t, this.appTemplate = s, this.loginSuccessCallBack = e.loginSuccessCallBack,
            this.__tempID = i, this.debug = e.debug, this.current_guid = null, this.autoLoginFlag = 0, this.socketFlag = !
            1, this.__params = e, this.__params.loginWays = this.__params.loginWays || "密码登录", this.__params.showTabs =
            void 0 === this.__params.showTabs || this.__params.showTabs, this.__params.smslogintype = this.__params
            .smslogintype || 3, this.__params.ssoLogin = this.__params.ssoLogin || !1, this.currentLoginWay =
            "staticLoginEnter", this.loginWarysArr = this.__params.loginWays.split("|"), this.currentTabIndex = 0,
            this.initTab();
        var l = this;
        u("keyup", document.getElementById(t.slice(1)), function(t) {
            switch (t.keyCode) {
                case 13:
                case 108:
                    l.currentLoginWay && l[l.currentLoginWay]()
            }
        })
    }

    var r = n(0).error,
        i = n(0).warn,
        s = n(0).closeSocketIO,
        a = n(0).ver,
        c = n(0).timestamp,
        u = n(0).addEvent,
        d = n(0).__preventDefault,
        l = n(0).isPhone,
        f = n(0).template,
        p = n(0).checkID,
        h = n(0).getIDs,
        _ = n(90),
        v = n(0).setCookie,
        m = n(0).getCookie,
        b = n(0).delCookie;
    o.common = {
        "formParams": {
            "authenSource": 2,
            "locale": "zh_CN",
            "productId": 8,
            "productVersion": "v5",
            "version": 21,
            "tag": 20,
            "frameType": 3
        },
        "_CONST": {
            "APIURL": "https:" === document.location.protocol ? "https://cas.dobest.cn/authen/" : "https://cas.dobest.cn/authen/",
            "QRCODEINIT": "https://anysdktest.dobest.cn/v1/wechat/qrcode",
            "QRCODEQUERY": "https://anysdktest.dobest.cn/v1/wechat/queryQr"
        },
        "flags": {
            "hasSSOLOGIN": !1,
            "hasAUTOLOGIN": !1,
            "isSupportCookies": navigator.cookieEnabled
        }
    }, o.prototype = {
        "transformTemplate": f,


        // 发送请求，如用户登录请求
        // 6个输入参数为：登录方式名称、请求参数、url、响应、错误处理、s
        "ajaxHps": function(t, e, n, r, i, s) {
            var a = this;
            if (!o.common.flags.isSupportCookies) return void alert("浏览器cookie被禁用，请开启后再登录。");
            i = i || function(e, n, o) {
                    if (t.indexOf("checkAccountType") > -1 || t.indexOf("ssoLogin") > -1) switch (n) {
                        case "error":
                        case "parsererror":
                            a.showError("对不起，本地网络异常请确认")
                    } else switch (n) {
                        case "timeout":
                            a.showError("对不起，网络超时请重试");
                            break;
                        case "parsererror":
                            a.showError("对不起服务端返回数据格式错误，请稍后再试")
                    }
                },
                s = "number" == typeof s ? s : 5e3;

            var c = {
                "type": "GET",
                "crossDomain": !0,
                "url": n,
                "cache": !1,
                "data": e,
                "dataType": "jsonp",
                // 指定回调函数名称
                "jsonpCallback": t,
                "jsonp": "callback",
                "success": r,
                "error": i,
                "timeout": s,
                "complete": function(t, e) {}
            };

            // 使用jquery发送ajax
            return "random" == t && delete c.jsonpCallback, $.ajax(c)
        },


        "initTab": function() {
            if ($(this.loginContainer).attr("data-tempid")) return r("当前容器已经存在一个ID为：" + this.__tempID +
                "的实例，请为需要新增的实例选择一个新的目标容器"), !1;
            var t = this,
                e = this.__params.showTabs ?
                '<div class="dobest_container"><div class="dobest_tabhd"><ul></ul></div><div class="dobest_tabCon"></div></div>' :
                "";
            if ($(this.loginContainer).append(e), this.__params.showTabs) $.each(this.loginWarysArr, function(e, n) {
                    var o = 0 == e ? "dobest_tab_active" : "";
                    $('<li><a href="#" class="' + o + '">' + n + "</a></li>").appendTo($(t.loginContainer +
                        " .dobest_tabhd").find("ul"))
                }), $('<div class="dobest_content"></div>').appendTo($(t.loginContainer + " .dobest_tabCon")), this
                .tabTitle = $(this.loginContainer).find(".dobest_tabhd ul li"), this.tabContent = $(this.loginContainer)
                .find(".dobest_tabCon .dobest_content"), this.tabContent.show(), this.tabTitle.on("click", function(
                    e) {
                    d.call(e);
                    var n = $(this).index();
                    switch ($(this).find("a").addClass("dobest_tab_active"), $(this).siblings().find("a").removeClass(
                        "dobest_tab_active"), $(this).find("a").html()) {
                        case "密码登录":
                            t.staticLogin(n), t.currentTabIndex = n, clearInterval(t.pollingQuery);
                            break;
                        case "短信登录":
                            t.smsLogin(n), clearInterval(t.pollingQuery);
                            break;
                        case "扫码登录":
                            t.qrcodeLogin(n)
                    }
                    t.hideError()
                }), this.tabTitle.first().trigger("click");
            else {
                switch (this.loginWarysArr[0]) {
                    case "密码登录":
                        t.staticLogin();
                        break;
                    case "短信登录":
                        t.smsLogin();
                        break;
                    case "扫码登录":
                        t.qrcodeLogin()
                }
                this.loginWarysArr.length > 1 && i("ID为：" + this.__tempID +
                    "的实例的showTabs参数值为false的时候，只支持loginWays的第一个选项")
            }
            m("CAS_AUTO_LOGIN") && !o.common.flags.hasAUTOLOGIN && this.autoLogin(), this.__params.ssoLogin && !o.common
                .flags.hasSSOLOGIN && !o.common.flags.hasAUTOLOGIN && this.ssoLogin(), this.__params.autologin &&
                this.__params.autologin.call(this)
        },
        "initView": function(t, e, n) {
            var n = n || this.currentTabIndex;
            this.__params.showTabs ? ($(this.loginContainer).find(".dobest_tabCon .dobest_content").empty(), e ? $(
                this.loginContainer).find(".dobest_tabCon .dobest_content").append(this.appTemplate[t][e]) : $(this
                .loginContainer).find(".dobest_tabCon .dobest_content").append(this.appTemplate[t])) : ($(this.loginContainer)
                .empty(), e ? $(this.loginContainer).append(this.appTemplate[t][e]) : $(this.loginContainer).append(
                    this.appTemplate[t])), $(this.loginContainer).attr("data-tempID", this.__tempID), $(
                "input, textarea").placeholder()
        },
        "hideError": function(t) {
            var e = "#dobest_error_" + this.__tempID;
            $(e).hide()
        },
        "showError": function(t) {
            var e = "#dobest_error_" + this.__tempID,
                n = "#dobest_error_txt_" + this.__tempID;
            $(e).show(), $(n).html(t)
        },
        "handlerResponse": function(t) {
            var e = this;
            this.debug && (t = this.handlerTest());
            var n = t["return_code"],
                o = (t["return_message"], t["data"] || {}),
                r = o["nextAction"],
                i = o["checkCodeUrl"],
                s = o["deviceType"],
                a = o["challenge"];
            if (this.current_guid = o["guid"], 0 == n)
                if (0 == r) {
                    var c = o["ticket"];
                    if (c && c.length > 0)
                        return void(1 === e.autoLoginFlag ? (e.deviceCallback(c, o), v("CAS_AUTO_LOGIN", c, "d30")) : e.deviceCallback(c, o))
                } else if (19 == r) e.dynamicLogin("token");
            else if (8 == r && i) e.yzmLogin(i);
            else if (a && a.length > 0) {
                var u = null;
                13 == r ? u = 3 == s ? "A8" : "ekey" : 18 == r && (u = "ecard"), e.dynamicLogin(u, a)
            } else e.showError(o.failReason);
            else 10332124 === Math.abs(o.mappedErrorCode) && e.changeCode(o.checkCodeUrl, "#dobest_cannse_" + e.__tempID),
                10332103 !== Math.abs(o.mappedErrorCode) && 10901142 !== Math.abs(o.mappedErrorCode) || (e.staticLogin(),
                    $("#dobest_inputUserId_" + this.__tempID).val(e.__userCache)), 10515101 === Math.abs(o.mappedErrorCode) &&
                b("CAS_AUTO_LOGIN"), e.showError(o.failReason)
        },
        "handlerTest": function() {
            var t = this.debug;
            return t && t["sms"] ? {
                "return_code": 0,
                "return_message": "",
                "data": {
                    "appId": 201,
                    "areaId": 0,
                    "nextAction": 20,
                    "checkCodeUrl": "http://captcha.sdo.cn/fcgi-bin/show_img.fcgi?appid=125&session_key=fMs1It4Z0N2zCYmB&gameid=201&areaid=0",
                    "guid": "999518C87C0D44D29D22B5837EE61F09unilinuxmc",
                    "isNeedFullInfo": 0
                }
            } : t && t["yzm"] ? {
                "return_code": 0,
                "return_message": "",
                "data": {
                    "appId": 201,
                    "areaId": 0,
                    "nextAction": 8,
                    "checkCodeUrl": "http://captcha.sdo.cn/fcgi-bin/show_img.fcgi?appid=125&session_key=fMs1It4Z0N2zCYmB&gameid=201&areaid=0",
                    "guid": "999518C87C0D44D29D22B5837EE61F09unilinuxmc",
                    "isNeedFullInfo": 0
                }
            } : t && t["token"] ? {
                "return_code": 0,
                "return_message": "",
                "data": {
                    "appId": 299,
                    "areaId": 1,
                    "deviceType": 9,
                    "guid": "B16A9432805342B093C14CA9D536D2EDunilinuxmc",
                    "nextAction": 19,
                    "sndaId": "210002269369"
                }
            } : t && t["ekey"] ? {
                "return_code": 0,
                "return_message": "",
                "data": {
                    "appId": 201,
                    "areaId": 0,
                    "challenge": "1357",
                    "deviceDisplayType": "X6",
                    "deviceType": 1,
                    "guid": "9C6D72BF26554ED5BD94CBC42493DD9Funilinuxmc",
                    "nextAction": 13,
                    "sndaId": "3103101405"
                }
            } : t && t["A8"] ? {
                "return_code": 0,
                "return_message": "",
                "data": {
                    "appId": 201,
                    "areaId": 0,
                    "challenge": "2468",
                    "deviceDisplayType": "X6",
                    "deviceType": 1,
                    "guid": "9C6D72BF26554ED5BD94CBC42493DD9Funilinuxmc",
                    "nextAction": 13,
                    "sndaId": "3103101405"
                }
            } : t && t["ecard"] ? {
                "return_code": 0,
                "return_message": "",
                "data": {
                    "appId": 201,
                    "areaId": 0,
                    "challenge": "C8|D5|G8",
                    "deviceDisplayType": "X6",
                    "deviceType": 1,
                    "guid": "9C6D72BF26554ED5BD94CBC42493DD9Funilinuxmc",
                    "nextAction": 18,
                    "sndaId": "3103101405"
                }
            } : void 0
        },
        "autoLogin": function() {
            o.common.flags.hasAUTOLOGIN = !0;
            var t = this;
            this.autoLoginModel(function(e) {
                t.handlerResponse(e)
            })
        },

        // 
        "ssoLogin": function() {
            o.common.flags.hasSSOLOGIN = !0;
            var t = this,
                e = this.buildCommonParam(),
                n = o.common._CONST.APIURL + "ssoLogin.jsonp";
            this.ajaxHps("ssoLogin_JSONPMethod", e, n, function(e) {
                0 === e.return_code && t.handlerResponse(e)
            })
        },
        "skipLogin": function(t) {
            var e = this.__params.serviceUrl;
            e += (e.indexOf("?") > -1 ? "&ticket=" : "?ticket=") + t.data.ticket, setTimeout(function() {
                window.location = e
            }, 500)
        },
        "staticLogin": function(t) {
            this.repeatCount = (new Date).getTime();
            var e = this;
            e.mobileMask = null, this.initView("staticTpl", null, t), this.currentLoginWay = "staticLoginEnter", s.call(this);
            var n = "#dobest_inputUserId_" + this.__tempID,
                o = "#dobest_loginBtn_" + this.__tempID;
            $(".dobest_login_form input").on("focus", function() {
                    $(this).parents(".dobest_field").addClass("dobest_input_focus").siblings(".dobest_field").removeClass("dobest_input_focus")
                }),
                $(n).on("blur", function(t) {
                    t.currentTarget.value = t.currentTarget.value.replace(/^\s+/gi, "")
                }),

                // 点击登录按钮
                $(o).on("click", function(t) {

                    d.call(t), e.staticLoginEnter()
                })
        },

        /// 发送登录请求入口 
        "staticLoginEnter": function() {
            var t = this,
                e = this,
                n = "#dobest_inputUserId_" + this.__tempID,
                o = "#dobest_password_" + this.__tempID,
                r = (this.__tempID, this.__tempID, "#dobest_autoLogin_" + this.__tempID),
                //用户名
                i = $(n).val(),
                //密码
                s = $(o).val();
            this.__userCache = i;
            var a = (new Date).getTime() - this.repeatCount;
            return "" == i ? void e.showError("请输入手机/邮箱/个性账号") : "" == s ? void e.showError("请输入密码") : a < 2e3 ?
                void e.showError("请勿连续点击登录按钮，间隔一段时间再试！") : (this.repeatCount = (new Date).getTime(), this.autoLoginFlag =
                    $(r).prop("checked") ? 1 : 0,
                    $(t).html("验证中..."),

                    // 这里登录
                    this.staticModel(i, s, this.autoLoginFlag, function(n) {
                        $(t).html("登录"),
                            e.handlerResponse(n)
                    }), !1)
        },
        "smsLogin": function(t) {
            var e = this;
            this.initView("smsTpl", null, t), this.currentLoginWay = "smsLoginEnter", s.call(this), this.mobileMask =
                null, this.userPhone = null, this.checkCode = null, this.checkCodeSessionKey = null, this.isSendSmsCode = !
                1, this.count = 60, this.isYzmActive = 0, this.text = "", this.imgCodeRisk = null;
            var n = "#dobest_sms_userId_" + this.__tempID,
                o = "#dobest_sms_yzmcode_" + this.__tempID,
                r = (this.__tempID, "#dobestSmsLogin_" + this.__tempID),
                i = (this.__tempID, "#dobest_getSmsCaptcha_" + this.__tempID);
            this.__tempID;
            $(i).on("click", function(t) {
                d.call(t);
                var r = $(n).val();
                if ("" == r) return void e.showError("账号不能为空");
                if (e.mobileMask) {
                    var i = $(o);
                    if (i.length > 0) {
                        if ("" == i.val()) return void e.showError("图片验证码不能为空");
                        e.sendSmsCode(r, i.val())
                    } else e.sendSmsCode(r)
                } else if (l(r)) {
                    var i = $(o);
                    if (i.length > 0) {
                        if ("" == i.val()) return void e.showError("图片验证码不能为空");
                        e.sendSmsCode(r, i.val(), 1)
                    } else e.sendSmsCode(r, null, 1)
                } else e.checkAccountModel(r, function(t) {
                    var n = t.data.existing,
                        i = t.data.mobileMask;
                    if (!(1 == t.data.type || 1 == n && i)) return void e.showError("该账号不存在，请确认！");
                    e.mobileMask = i;
                    var s = $(o);
                    if (s.length > 0) {
                        if ("" == s.val()) return void e.showError("图片验证码不能为空");
                        e.sendSmsCode(r, s.val())
                    } else e.sendSmsCode(r)
                })
            }), $(r).on("click", function(t) {
                d.call(t), e.smsLoginEnter()
            })
        },
        "smsLoginEnter": function() {
            var t = "#dobest_sms_userId_" + this.__tempID,
                e = "#dobest_sms_yzmcode_" + this.__tempID,
                n = (this.__tempID, this.__tempID, "#dobest_sms_code_" + this.__tempID),
                o = (this.__tempID, this.__tempID, this),
                r = $(t).val(),
                i = $(n).val();
            return "" == r ? void o.showError("账号不能为空") : "" == i ? void o.showError("验证码不能为空") : !o.isSendSmsCode ||
                $(e).length && "" == $(e).val() ? void o.showError("请先发送验证码") : void o.checkSmsCodeModel(r, i, o.checkCodeSessionKey, function(
                    t) {
                    o.handlerResponse(t)
                })
        },
        "sendSmsCode": function(t, e, n) {
            var o = this,
                r = "#dobest_yzmimg_" + this.__tempID,
                i = "dobest_sms_yzmcode_" + this.__tempID,
                s = "dobest_changeImgCode_" + this.__tempID,
                a = "dobest_sms_cantsee_" + this.__tempID;
            1 != this.isYzmActive && (e = e || null, this.sendSmsModel(t, e, function(e) {
                var c = e["return_code"],
                    u = (e["return_message"], e["data"] || {}),
                    l = u["nextAction"],
                    f = u["checkCodeUrl"],
                    p = u["checkCodeSessionKey"];
                o.current_guid = u["guid"];
                var h = u.failReason || "";
                if (o.isSendSmsCode = !0, 0 != c) return o.timer && clearInterval(o.timer), $(r).children().remove(),
                    $(i).remove(), void o.showError(h);
                if (20 == l && f) {
                    o.timer && clearInterval(o.timer), o.imgCodeRisk = f, "" != h && o.showError(h);
                    $("#" + s).length > 0 ? o.changeImgCode(f) : $(r).html(
                        '<div class="yzm_field_wrap"><div class="yzm_input_field"><input type="text" class="dobest_sms_input" placeholder="请输入验证码" maxlength="6" id="' +
                        i + '" /><span class="dobest_yzm_icon"></span></div><div id="' + s +
                        '" class="dobest_changeImgCode"><span class="yzm_img_wrap"><img src="' + f +
                        '" /></span><i>看不清?</i><a href="javascript:;" id="' + a + '">换一张</a></div></div>'), $("#" +
                        a).on("click", function(t) {
                        d.call(t), o.changeImgCode(o.imgCodeRisk)
                    })
                } else {
                    o.timerCounter(), o.hideError();
                    var _ = 1 == n ? t : o.mobileMask;
                    $(o.loginContainer + " .dobest_sms_info").html("已向手机号" + _ + "发送短信，请查收").hide(), o.checkCodeSessionKey =
                        p, $(r).children().remove(), $(i).remove(), o.isYzmActive = 1
                }
            }))
        },
        "changeImgCode": function(t) {
            var e = "dobest_changeImgCode_" + this.__tempID,
                t = t + "&t=" + +(new Date).getTime();
            $("#" + e).find("img").prop("src", t)
        },
        "timerCounter": function() {
            var t = this,
                e = "#dobest_getSmsCaptcha_" + this.__tempID;
            this.timer = setInterval(function() {
                t.isYzmActive = 1, --t.count, t.text = t.count + "s后可重发", $(e).html(t.text), $(t.loginContainer +
                    " .dobest_sms_info").show(), t.btnFlag = !1, t.count <= 0 && (clearInterval(t.timer), t.isYzmActive =
                    0, t.count = 60, $(e).html("重新发送"), t.btnFlag = !0, $(t.loginContainer + " .dobest_sms_info").hide())
            }, 1e3)
        },
        "changeCode": function(t, e) {
            var t = t + "&t=" + +(new Date).getTime();
            $(e).html("<img src = '" + t + "'/>")
        },
        "yzmLogin": function(t) {
            var e = this;
            this.initView("yzmTpl"), this.currentLoginWay = "yzmLoginEnter", s.call(this);
            var n = "#dobest_cannse_" + this.__tempID,
                o = "#dobest_de_btn_" + this.__tempID,
                r = (this.__tempID, "#dobest_btn_cancel_" + this.__tempID),
                i = function(t) {
                    var t = t + "&t=" + +(new Date).getTime();
                    $(n).html("<img src = '" + t + "'/>")
                };
            $(n).on("click", function(e) {
                d.call(e), i(t)
            });
            var a = t + "&t=" + +(new Date).getTime();
            $(n).html("<img src = '" + a + "'/>"), $(o).on("click", function(t) {
                d.call(t), e.yzmLoginEnter()
            }), $(r).on("click", function(t) {
                d.call(t), e.staticLogin()
            })
        },
        "yzmLoginEnter": function() {
            var t = this,
                e = (this.__tempID, this.__tempID, "#dobest_yzm_code_" + this.__tempID),
                n = $(e).val();
            n && n.length > 0 ? t.yzmModel(n, function(e) {
                t.handlerResponse(e)
            }) : t.showError("请输入验证码")
        },
        "qrPolling": function() {
            var t = this,
                e = {
                    "qrid": this.qrId
                };
            this.ajaxHps("random", e, o.common._CONST.QRCODEQUERY, function(e) {
                switch (e.code) {
                    case 0:
                        clearInterval(t.pollingQuery), t.deviceCallback(e.data.ticket);
                        break;
                    case -3:
                        clearInterval(t.pollingQuery), t.qrcodeLogin(t.currentTabIndex)
                }
            })
        },
        "qrcodeLogin": function(t) {
            this.currentTabIndex = t, console.log(this.currentTabIndex);
            var e = this;
            this.initView("qrcodeTpl", null, t), this.ajaxHps("random", null, o.common._CONST.QRCODEINIT, function(
                t) {
                0 === t.code ? (e.qrId = t.data.qrid, e.qrPicUrl = t.data.url, $(e.loginContainer).find(
                        ".dobest_tabCon .dobest_content").find(".loading-pic").hide(), $(e.loginContainer).find(
                        ".dobest_tabCon .dobest_content").find("img").attr("src", e.qrPicUrl).show(), e.pollingQuery =
                    setInterval(e.qrPolling.bind(e), 1e3)) : e.showError("接口错误，请刷新页面重新获取二维码")
            })
        },
        "dynamicLogin": function(t, e) {
            var n = this;
            this.initView("dynamicTpl", t), this.currentLoginWay = t + "Enter", s.call(this);
            var o = "#dobest_btn_login_" + this.__tempID,
                r = "#dobest_btn_cancel_" + this.__tempID;
            this.type = t, e && this.renderParam(e), $(o).on("click", function(t) {
                d.call(t), n.authen()
            }), $(r).on("click", function(t) {
                d.call(t), n.staticLogin()
            })
        },
        "authen": function() {
            var t = this,
                e = t.type,
                n = (this.params, []),
                o = "#dobest_token_param_value_" + this.__tempID,
                r = "#dobest_a8_param_value_" + this.__tempID,
                i = !0;
            if ("token" == e) {
                var s = $(o).val();
                s && s.length > 0 ? n = s : i = !1
            } else if ("A8" == e) {
                var s = $(r).val();
                s && s.length > 0 ? n = s : i = !1
            } else {
                var a = $("#dobest_card_list_" + this.__tempID).find(".dobest_text");
                $.each(a, function(t, e) {
                    var o = $(e).val();
                    o && o.length > 0 ? n.push(o) : i = !1
                })
            }
            if (!i) switch (e) {
                case "ekey":
                    return void this.showError("请输入密保信息");
                case "ecard":
                    return void this.showError("请输入安全卡信息");
                case "A8":
                    return void this.showError("请输入密宝密码");
                case "token":
                    return void this.showError("请输入手机令牌app中的动态码")
            }
            var c = null,
                u = null;
            "ekey" == e ? (c = 1, u = n.join("")) : "ecard" == e ? (c = 2, u = n.join("|")) : "A8" == e ? (c = 1, u =
                n) : "token" == e && (c = 5, u = n), t.dynamicModel(u, c, function(e) {
                t.handlerResponse(e)
            })
        },
        "renderParam": function(t) {
            var e = this.type,
                n = "#dobest_a8_param_value_" + this.__tempID;
            if ("A8" == e) return void $(n).html(t);
            var o = $("#dobest_card_list_" + this.__tempID);
            o.empty(), "ecard" == e ? (t = t.split("|"), $.each(t, function(t, e) {
                var n = $("<li></li>").appendTo(o);
                $("<span>" + e + "</span>").appendTo(n), $('<input type="tel" class="dobest_text">').appendTo(n)
            })) : "ekey" == e && (t = t.split(""), $.each(t, function(t, e) {
                var n = $("<li></li>").appendTo(o);
                $("<span>第" + e + "位</span>").appendTo(n), $('<input type="tel" class="dobest_text">').appendTo(n)
            })), this.params = t, o.find(".dobest_text").bind("focus", function() {
                $(this).parent().addClass("dobest_cur")
            }).bind("blur", function() {
                $(this).parent().removeClass("dobest_cur");
                var t = $(this).val();
                t && t.length > 0 ? $(this).parent().addClass("dobest_complete") : $(this).parent().removeClass(
                    "dobest_complete")
            }).bind("keyup", function(t) {
                var n = 1;
                "ecard" == e && (n = 2);
                var o = $(this).val();
                o.length > n && $(this).val(o.substr(0, n))
            })
        },
        "deviceCallback": function(t, e) {
            this.loginSuccessCallBack(t, e)
        },

        /// 普通登录 
        // 5个输入参数：用户名、密码、自动登录标志、响应、错误
        "staticModel": function(t, e, n, r, i) {
            var s = this.buildCommonParam();
            this.current_guid = null, this.current_guid && (s["guid"] = this.current_guid), s["inputUserId"] = t, s["password"] = e, s["autoLoginFlag"] = n;

            //实例
            // https://cas.dobest.cn/authen/staticLogin.jsonp?callback=staticLogin_JSONPMethod&authenSource=2&locale=zh_CN&productId=8&productVersion=v5&version=21&tag=20&frameType=3&appId=485&serviceUrl=http%3A%2F%2Fwww.sanguosha.com&areaId=0&inputUserId=837276086%40qq.com&password=qwertyuiop&autoLoginFlag=0&_=1545015720737
            var a = o.common._CONST.APIURL + "staticLogin.jsonp";

            // 发送请求
            this.ajaxHps("staticLogin_JSONPMethod", s, a, r, i)
        },
        "yzmModel": function(t, e) {
            var n = this.buildCommonParam();
            this.current_guid && (n["guid"] = this.current_guid), n["password"] = t;
            var r = o.common._CONST.APIURL + "checkCodeLogin.jsonp";
            this.ajaxHps("checkCodeLogin_JSONPMethod", n, r, e)
        },
        "dynamicModel": function(t, e, n) {
            var r = this.buildCommonParam();
            this.current_guid && (r["guid"] = this.current_guid), r["password"] = t, r["loginType"] = e;
            var i = o.common._CONST.APIURL + "dynamicLogin.jsonp";
            this.ajaxHps("dynamicLogin_JSONPMethod", r, i, n)
        },
        "checkAccountModel": function(t, e) {
            var n = this.buildCommonParam();
            n["statistics1"] && delete n["statistics1"], n["statistics2"] && delete n["statistics2"], n[
                "inputUserId"] = t;
            var r = o.common._CONST.APIURL + "checkAccountType.jsonp";
            this.ajaxHps("checkAccountType_JSONPMethod", n, r, e)
        },
        "sendSmsModel": function(t, e, n) {
            var r = this.buildCommonParam();
            r["statistics1"] && delete r["statistics1"], r["statistics2"] && delete r["statistics2"], this.__params
                .statistics2 && (r["statistics2"] = this.__params.statistics2), e && (r["GraphCode"] = e), this.current_guid &&
                (r["guid"] = this.current_guid), r["inputUserId"] = t, r["type"] = this.__params.smslogintype;
            var i = o.common._CONST.APIURL + "sendCode4login.jsonp";
            this.ajaxHps("sendCode4login_JSONPMethod", r, i, n)
        },
        "checkSmsCodeModel": function(t, e, n, r) {
            var i = this.buildCommonParam();
            this.current_guid && (i["guid"] = this.current_guid), i["inputUserId"] = t, i["checkCode"] = e, i[
                "checkCodeSessionKey"] = n;
            var s = o.common._CONST.APIURL + "loginByPhoneCode.jsonp";
            this.ajaxHps("loginByPhoneCode_JSONPMethod", i, s, r)
        },
        "autoLoginModel": function(t, e) {
            var n = this;
            "function" == typeof t && (e = t);
            var r = this.buildCommonParam();
            if (r["notgt"] = 1, this.current_guid && (r["guid"] = this.current_guid), "object" == typeof t)
                for (
                    var i in t) r[i] = t[i];
            var s = o.common._CONST.APIURL + "autoLogin.jsonp";
            e = arguments.length > 0 ? e : function(t) {
                n.handlerResponse(t)
            }, this.ajaxHps("autoLogin_JSONPMethod", r, s, e)
        },
        "buildCommonParam": function() {
            var t = {};
            for (var e in o.common.formParams) t[e] = o.common.formParams[e];
            t["appId"] = this.__params.appId, t["serviceUrl"] = this.__params.serviceUrl;
            for (_key in this.__params.extra) t[_key] = this.__params.extra[_key];
            return t["areaId"] = this.__params.areaId ? this.__params.areaId : 0, t
        },
        "hide": function() {
            return $(this.loginContainer).hide(), this
        },
        "show": function() {
            return $(this.loginContainer).show(), this
        }
    }, t.exports = o
}, function(t, e) {
    t.exports = {

        "staticTpl": "".concat('<div class="dobest_login_form">',
            '<div class="dobest_error" id="dobest_error"><i class="dobest_icon_alert"></i><span class="dobest_error_txt" id="dobest_error_txt"></span></div>',
            '<div class="dobest_field dobest_username dobest_input_focus">',
            '<input type="text" class="dobest_input" id="dobest_inputUserId" placeholder="手机/邮箱/个性账号" />',
            '<span class="dobest_user_icon"></span>', "</div>", '<div class="dobest_field dobest_pwd">',
            '<input type="password" class="dobest_input" id="dobest_password" placeholder="静态密码/动态密码">',
            '<span class="dobest_pwd_icon"></span>', "</div>",
            '<div class="dobest_extra"><label><input type="checkbox" name="autoLogin" id="dobest_autoLogin" /> 自动登录</label></div>',
            '<div class="dobest_field_btn">', '<a class="dobest_de_btn" href="#" id="dobest_loginBtn">登录</a>',
            "</div>", "</div>"),

        "yzmTpl": "".concat('<div class="dobest_login_form">',
            '<div class="dobest_error" id="dobest_error"><i class="dobest_icon_alert"></i><span class="dobest_error_txt" id="dobest_error_txt"></span></div>',
            '<div class="dobest_field dobest_yzm">',
            '<input type="text" class="dobest_input" id="dobest_yzm_code" placeholder="验证码">',
            '<span class="dobest_yzm_icon"></span>', "</div>", '<div class="dobest_yzm_box" id="dobest_cannse">',
            '<span class="dobest_yzm_con"></span><a href="javascript:;" class="dobest_color_blue">看不清</a>',
            "</div>", '<div class="dobest_field_btn">',
            '<a class="dobest_btn_blue dobest_btn_login" href="#" id="dobest_de_btn">登录</a>',
            '<a class="dobest_btn_gray dobest_btn_cancel" href="#" id="dobest_btn_cancel">取消</a>', "</div>",
            "</div>"),
        "qrcodeTpl": "".concat('<div class="dobest_login_form">',
            '<div class="dobest_error" id="dobest_error"><i class="dobest_icon_alert"></i><span class="dobest_error_txt" id="dobest_error_txt"></span></div>',
            '<p class="dobest_qrcode_tips">打开 <em>微信</em> 扫一扫登录</p>', '<div class="dobest_qrcode">',
            '<div class="qrcode_container">', '<div class="QRcode_pic_wrap">', '<div class="loading-pic"></div>',
            '<img src="" alt="qrcode" style="display:none;" class="QRcode_pic" />', "</div>",
            '<span class="example"></span>', "</div>", '<div class="dobest_qrcode_mask"></div>',
            '<div class="dobest_qrcode_mask_box">二维码已失效，',
            '<a href="javascript:;" id="reloadQrcode" class="reloadQrcode">重新获取</a>', "</div>", "</div>", "</div>"),
        "smsTpl": "".concat('<div class="dobest_login_form">',
            '<div class="dobest_error" id="dobest_error"><i class="dobest_icon_alert"></i><span class="dobest_error_txt" id="dobest_error_txt"></span></div>',
            '<div class="dobest_field dobest_username dobest_input_focus">',
            '<input type="text" class="dobest_input" id="dobest_sms_userId" placeholder="手机/邮箱/个性账号">',
            '<span class="dobest_user_icon"></span>', "</div>",
            '<div class="dobest_yzmimg" id="dobest_yzmimg"></div>', '<div class="dobest_sms_filed">',
            '<div class="dobest_field dobest_pwd">',
            '<input type="text" class="dobest_input" maxlength="6" id="dobest_sms_code" />',
            '<span class="dobest_pwd_icon"></span>',
            '<a href="#" class="dobest_getsms_code" id="dobest_getSmsCaptcha">获取验证码</a>', "</div>", "</div>",
            '<div class="dobest_field_btn">', '<a class="dobest_de_btn" href="#" id="dobestSmsLogin">登录</a>',
            "</div>", "</div>"),
        "dynamicTpl": {
            "token": "".concat('<div class="dobest_lg_main dobest_lg_main_high_token">',
                '<div class="dobest_acc_box dobest_acc_box_cur">', '<div class="dobest_card_box">',
                '<div class="dobest_card_token">',
                '<div class="dobest_error" id="dobest_error"><i class="dobest_icon_alert"></i><span class="dobest_error_txt" id="dobest_error_txt"></span></div>',
                "<h3>请输入手机令牌的动态码：</h3>",
                '<p class="dobest_token_input"><input type="tel" class="dobest_input_token" maxlength="6" id="dobest_token_param_value" /></p>',
                "</div>", "</div>", "</div>", '<div class="dobest_btns">',
                '<a href="#" class="dobest_btn_blue dobest_btn_login" id="dobest_btn_login">登&nbsp;录</a>',
                '<a href="#" class="dobest_btn_gray dobest_btn_cancel" id="dobest_btn_cancel">取&nbsp;消</a>',
                "</div>", "</div>"),
            "ekey": "".concat('<div class="dobest_lg_main dobest_lg_main_high">',
                '<div class="dobest_acc_box dobest_acc_box_cur">', '<div class="dobest_card_box">',
                '<div class="dobest_card3 dobest_card4">',
                '<div class="dobest_error" id="dobest_error"><i class="dobest_icon_alert"></i><span class="dobest_error_txt" id="dobest_error_txt"></span></div>',
                "<h3>请依次输入密宝对应位置上的数字：</h3>", '<ul class="dobest_card_list" id="dobest_card_list"></ul>', "</div>",
                "</div>", "</div>", '<div class="dobest_btns">',
                '<a href="#" class="dobest_btn_blue dobest_btn_login" id="dobest_btn_login">登&nbsp;录</a>',
                '<a href="#" class="dobest_btn_gray dobest_btn_cancel" id="dobest_btn_cancel">取消</a>', "</div>",
                "</div>"),
            "A8": "".concat('<div class="dobest_lg_main dobest_lg_main_input">',
                '<div class="dobest_acc_box dobest_acc_box_cur">', '<div class="dobest_input_box">',
                '<div class="dobest_error" id="dobest_error"><i class="dobest_icon_alert"></i><span class="dobest_error_txt" id="dobest_error_txt"></span></div>',
                '<p>请将您的挑战码<span class="dobest_color_red" id="a8_param"></span>输入密宝，然后依次填写密宝输出的密码</p>',
                '<input type="tel" class="dobest_input" id="dobest_a8_param_value">', "</div>", "</div>",
                '<div class="dobest_btns">',
                '<a href="#" class="dobest_btn_blue dobest_btn_login"  id="dobest_btn_login">登&nbsp;录</a>',
                '<a href="#" class="dobest_btn_gray dobest_btn_cancel" id="dobest_btn_cancel">取消</a>', "</div>",
                "</div>"),
            "ecard": "".concat('<div class="dobest_lg_main dobest_lg_main_high">',
                '<div class="dobest_acc_box dobest_acc_box_cur">', '<div class="dobest_card_box">',
                '<div class="dobest_card3">',
                '<div class="dobest_error" id="dobest_error"><i class="dobest_icon_alert"></i><span class="dobest_error_txt" id="dobest_error_txt"></span></div>',
                "<h3>请输入安全卡3个坐标上对应的数字：</h3>", '<ul class="dobest_card_list" id="dobest_card_list"></ul>', "</div>",
                "</div>", "</div>", '<div class="dobest_btns">',
                '<a href="#" class="dobest_btn_blue dobest_btn_login"  id="dobest_btn_login">登&nbsp;录</a>',
                '<a href="#" class="dobest_btn_gray dobest_btn_cancel" id="dobest_btn_cancel">取消</a>', "</div>",
                "</div>")
        }
    }
}, function(t, e, n) {
    n(45), n(43), n(40), n(42), n(41), n(44), t.exports = n(46)
}]);