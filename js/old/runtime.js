/*
 * Copyright 2013 Google Inc.
 *
 * Swiffy runtime version 5.4.0
 *
 * In addition to the Google Terms of Service (http://www.google.com/accounts/TOS),
 * Google grants you and the Google Swiffy end users a personal, worldwide,
 * royalty-free, non-assignable and non-exclusive license to use the Google Swiffy
 * runtime to host it for Google Swiffy end users and to use it in connection with
 * the Google Swiffy service.
 */
(function () {
    var aa = unescape,
        ba = encodeURIComponent,
        ca = window,
        f = Object,
        g = document,
        da = isNaN,
        l = Math,
        m = Array,
        p = Number,
        ea = navigator,
        fa = Error,
        ga = Boolean,
        ha = parseInt,
        ia = parseFloat,
        q = String,
        ja = isFinite,
        ka = decodeURIComponent,
        la = RegExp;

    function ma(a, b) {
        return a.onload = b
    }

    function na(a, b) {
        return a.width = b
    }

    function oa(a, b) {
        return a.replace = b
    }

    function pa(a, b) {
        return a.data = b
    }

    function qa(a, b) {
        return a.leading = b
    }

    function ra(a, b) {
        return a.concat = b
    }

    function sa(a, b) {
        return a.definition = b
    }

    function ta(a, b) {
        return a.status = b
    }

    function ua(a, b) {
        return a.send = b
    }

    function wa(a, b) {
        return a.remove = b
    }

    function xa(a, b) {
        return a.keyCode = b
    }

    function ya(a, b) {
        return a.copy = b
    }

    function za(a, b) {
        return a.depth = b
    }

    function Aa(a, b) {
        return a.namespaces = b
    }

    function Ba(a, b) {
        return a.method = b
    }

    function Ca(a, b) {
        return a.clear = b
    }

    function Da(a, b) {
        return a.rightMargin = b
    }

    function Ea(a, b) {
        return a.offset = b
    }

    function Fa(a, b) {
        return a.bounds = b
    }

    function Ga(a, b) {
        return a.nextSibling = b
    }

    function Ha(a, b) {
        return a.fillStyle = b
    }

    function Ia(a, b) {
        return a.toString = b
    }

    function Ja(a, b) {
        return a.altKey = b
    }

    function Ka(a, b) {
        return a.position = b
    }

    function La(a, b) {
        return a.clip = b
    }

    function Ma(a, b) {
        return a.size = b
    }

    function Na(a, b) {
        return a.angle = b
    }

    function Oa(a, b) {
        return a.next = b
    }

    function Pa(a, b) {
        return a.from = b
    }

    function Qa(a, b) {
        return a.callee = b
    }

    function Ra(a, b) {
        return a.globalCompositeOperation = b
    }

    function Sa(a, b) {
        return a.close = b
    }

    function Ta(a, b) {
        return a.globalAlpha = b
    }

    function Ua(a, b) {
        return a.start = b
    }

    function Va(a, b) {
        return a.returnValue = b
    }

    function Wa(a, b) {
        return a.contains = b
    }

    function Xa(a, b) {
        return a.apply = b
    }

    function Ya(a, b) {
        return a.distance = b
    }

    function Za(a, b) {
        return a.height = b
    }

    function $a(a, b) {
        return a.leftMargin = b
    }

    function ab(a, b) {
        return a.font = b
    }

    function bb(a, b) {
        return a.indent = b
    }

    function cb(a, b) {
        return a.valueOf = b
    }

    function db(a, b) {
        return a.text = b
    }

    function eb(a, b) {
        return a.matrix = b
    }

    function fb(a, b) {
        return a.load = b
    }

    function gb(a, b) {
        return a.value = b
    }

    function hb(a, b) {
        return a.italic = b
    }

    function ib(a, b) {
        return a.color = b
    }

    function jb(a, b) {
        return a.currentTarget = b
    }

    function kb(a, b) {
        return a.left = b
    }

    function lb(a, b) {
        return a.blendmode = b
    }

    function mb(a, b) {
        return a.play = b
    }

    function nb(a, b) {
        return a.type = b
    }

    function ob(a, b) {
        return a.webkitTransform = b
    }

    function pb(a, b) {
        return a.name = b
    }

    function qb(a, b) {
        return a.letterSpacing = b
    }

    function rb(a, b) {
        return a.stop = b
    }

    function sb(a, b) {
        return a.bold = b
    }

    function tb(a, b) {
        return a.length = b
    }

    function ub(a, b) {
        return a.prototype = b
    }

    function vb(a, b) {
        return a.complete = b
    }

    function wb(a, b) {
        return a.actions = b
    }

    function xb(a, b) {
        return a.ctrlKey = b
    }

    function yb(a, b) {
        return a.pointerEvents = b
    }

    function zb(a, b) {
        return a.alpha = b
    }

    function Ab(a, b) {
        return a.target = b
    }

    function Bb(a, b) {
        return a.call = b
    }

    function Cb(a, b) {
        return a.loaded = b
    }

    function Db(a, b) {
        return a.shiftKey = b
    }

    function Eb(a, b) {
        return a.filters = b
    }

    function Fb(a, b) {
        return a.normalize = b
    }

    function Gb(a, b) {
        return a.update = b
    }

    function Hb(a, b) {
        return a.transform = b
    }

    function Ib(a, b) {
        return a.quality = b
    }
    var r = "appendChild",
        Jb = "slot",
        Kb = "filter",
        Lb = "kind",
        Mb = "ascent",
        Nb = "getParent",
        Ob = "getOwnPropertyNames",
        Pb = "shift",
        Qb = "hideObject",
        Rb = "POSITIVE_INFINITY",
        Sb = "exec",
        Tb = "width",
        Ub = "expand",
        Wb = "replace",
        Xb = "toFixed",
        s = "data",
        Yb = "ceil",
        Zb = "leading",
        $b = "floor",
        ac = "bias",
        bc = "concat",
        cc = "charAt",
        dc = "preventDefault",
        ec = "trim",
        fc = "dispatchEvent",
        gc = "ratio",
        hc = "setTransform",
        ic = "preserveAlpha",
        jc = "interfaces",
        t = "definition",
        kc = "knockout",
        lc = "match",
        mc = "toDataURL",
        v = "format",
        nc = "status",
        oc = "getName",
        pc = "charCode",
        qc = "remove",
        rc = "fillstyles",
        sc = "createElement",
        w = "defineProperty",
        tc = "keyCode",
        uc = "firstChild",
        vc = "byteLength",
        wc = "sound",
        xc = "forEach",
        yc = "localName",
        zc = "states",
        Ac = "variables",
        x = "setAttribute",
        Bc = "copy",
        Cc = "depth",
        Dc = "namespaces",
        Ec = "method",
        Fc = "childNodes",
        Gc = "stroke",
        Hc = "rightMargin",
        Ic = "bind",
        Jc = "emSquareSize",
        Kc = "offset",
        Lc = "bounds",
        Mc = "code",
        Nc = "nextSibling",
        Oc = "tags",
        Pc = "getPrototypeOf",
        Qc = "substr",
        Rc = "fill",
        Sc = "toString",
        Tc = "altKey",
        Uc = "gradient",
        Vc = "doubles",
        Wc = "propertyIsEnumerable",
        Xc =
            "position",
        Yc = "create",
        Zc = "clip",
        $c = "cancelable",
        ad = "result",
        bd = "size",
        cd = "index",
        dd = "inner",
        fd = "angle",
        z = "createElementNS",
        gd = "next",
        hd = "split",
        id = "constructor",
        jd = "from",
        kd = "stopPropagation",
        ld = "userAgent",
        md = "multiline",
        nd = "buffer",
        od = "save",
        pd = "glyphs",
        qd = "frameCount",
        rd = "hasOwnProperty",
        A = "style",
        sd = "methods",
        td = "configurable",
        ud = "parent",
        vd = "getOwnPropertyDescriptor",
        wd = "globalAlpha",
        xd = "isEnabled",
        yd = "mask",
        zd = "random",
        Ad = "multiply",
        Bd = "init",
        Cd = "bottom",
        Dd = "fireEvent",
        Ed = "removeNode",
        Fd = "paths",
        Gd = "trackAsMenu",
        Hd = "restore",
        Id = "contains",
        B = "apply",
        Kd = "distance",
        Ld = "reset",
        Md = "fillRect",
        Nd = "attributes",
        Od = "removeAttribute",
        Pd = "bubbles",
        Qd = "canvas",
        Rd = "height",
        Sd = "leftMargin",
        Td = "right",
        D = "push",
        Ud = "object",
        Vd = "font",
        Wd = "indent",
        Xd = "valueOf",
        Yd = "mode",
        Zd = "open",
        $d = "test",
        ae = "replaceChild",
        be = "strings",
        ce = "text",
        de = "round",
        ee = "slice",
        fe = "matrix",
        ge = "nodeType",
        he = "setCapture",
        ie = "events",
        je = "miter",
        ke = "value",
        le = "italic",
        me = "setAttributeNS",
        ne = "button",
        oe = "fixed",
        pe = "indexOf",
        qe = "defineProperties",
        re = "color",
        se = "capture",
        te = "nodeName",
        ue = "writable",
        ve = "backgroundColor",
        we = "stops",
        xe = "linestyles",
        ye = "fromCharCode",
        ze = "clearRect",
        Ae = "beginPath",
        Be = "sounds",
        Ce = "blendmode",
        De = "children",
        Ee = "scaleRect",
        Fe = "sqrt",
        Ge = "play",
        He = "path",
        Ie = "getContext",
        E = "type",
        Je = "translate",
        Ke = "matrixX",
        Le = "matrixY",
        F = "name",
        Me = "letterSpacing",
        Ne = "visible",
        Oe = "keys",
        Pe = "clientX",
        Qe = "releaseCapture",
        Re = "clientY",
        Se = "stop",
        Te = "bold",
        G = "length",
        H = "prototype",
        Ue = "descent",
        Ve = "complete",
        We = "actions",
        Xe = "variable",
        Ye = "clamp",
        Ze = "multinames",
        $e = "ctrlKey",
        af = "traits",
        bf = "drawImage",
        cf = "divisor",
        df = "rect",
        ef = "records",
        ff = "alpha",
        gf = "body",
        hf = "removeChild",
        jf = "target",
        I = "call",
        kf = "line",
        lf = "lastIndexOf",
        mf = "getAttribute",
        nf = "strength",
        of = "NEGATIVE_INFINITY",
        pf = "charCodeAt",
        qf = "colortransform",
        rf = "substring",
        sf = "advance",
        tf = "every",
        uf = "shiftKey",
        vf = "filters",
        wf = "navigator",
        xf = "parentNode",
        yf = "align",
        zf = "toUpperCase",
        Af = "splice",
        Bf = "byteOffset",
        Cf = "join",
        Df = "isCaptured",
        Ef = "transform",
        Ff = "quality",
        Gf = "toLowerCase",
        K, Hf = this,
        If = function (a, b, c) {
            a = a[hd](".");
            c = c || Hf;
            a[0] in c || !c.execScript || c.execScript("var " + a[0]);
            for (var d; a[G] && (d = a[Pb]());) a[G] || void 0 === b ? c = c[d] ? c[d] : c[d] = {} : c[d] = b
        }, Jf = function (a) {
            a.la = function () {
                return a.qq ? a.qq : a.qq = new a
            }
        }, Kf = function (a) {
            var b = typeof a;
            if ("object" == b)
                if (a) {
                    if (a instanceof m) return "array";
                    if (a instanceof f) return b;
                    var c = f[H][Sc][I](a);
                    if ("[object Window]" == c) return "object";
                    if ("[object Array]" == c || "number" == typeof a[G] && "undefined" != typeof a[Af] && "undefined" != typeof a[Wc] && !a[Wc]("splice")) return "array";
                    if ("[object Function]" == c || "undefined" != typeof a[I] && "undefined" != typeof a[Wc] && !a[Wc]("call")) return "function"
                } else return "null";
                else if ("function" == b && "undefined" == typeof a[I]) return "object";
            return b
        }, L = function (a) {
            return void 0 !== a
        }, Lf = function (a) {
            return "array" == Kf(a)
        }, Mf = function (a) {
            var b = Kf(a);
            return "array" == b || "object" == b && "number" == typeof a[G]
        }, Nf = function (a) {
            return "string" == typeof a
        }, Of = function (a) {
            return "boolean" == typeof a
        }, Pf = function (a) {
            return "number" == typeof a
        }, M = function (a) {
            return "function" ==
                Kf(a)
        }, Qf = function (a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        }, Rf = "closure_uid_" + (1E9 * l[zd]() >>> 0),
        Sf = 0,
        Tf = function (a, b, c) {
            return a[I][B](a[Ic], arguments)
        }, Uf = function (a, b, c) {
            if (!a) throw fa();
            if (2 < arguments[G]) {
                var d = m[H][ee][I](arguments, 2);
                return function () {
                    var c = m[H][ee][I](arguments);
                    m[H].unshift[B](c, d);
                    return a[B](b, c)
                }
            }
            return function () {
                return a[B](b, arguments)
            }
        }, Vf = function (a, b, c) {
            Vf = Function[H][Ic] && -1 != Function[H][Ic][Sc]()[pe]("native code") ? Tf : Uf;
            return Vf[B](null, arguments)
        },
        Wf = function (a, b) {
            var c = m[H][ee][I](arguments, 1);
            return function () {
                var b = c[ee]();
                b[D][B](b, arguments);
                return a[B](this, b)
            }
        }, N = function (a, b) {
            function c() {}
            ub(c, b[H]);
            a.i = b[H];
            ub(a, new c);
            a[H].constructor = a
        };
    var bg = function (a, b) {
        if (b) return a[Wb](Xf, "&amp;")[Wb](Yf, "&lt;")[Wb](Zf, "&gt;")[Wb]($f, "&quot;");
        if (!ag[$d](a)) return a; - 1 != a[pe]("&") && (a = a[Wb](Xf, "&amp;")); - 1 != a[pe]("<") && (a = a[Wb](Yf, "&lt;")); - 1 != a[pe](">") && (a = a[Wb](Zf, "&gt;")); - 1 != a[pe]('"') && (a = a[Wb]($f, "&quot;"));
        return a
    }, Xf = /&/g,
        Yf = /</g,
        Zf = />/g,
        $f = /\"/g,
        ag = /[&<>\"]/,
        cg = {
            "\x00": "\\0",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\x0B",
            '"': '\\"',
            "\\": "\\\\"
        }, dg = {
            "'": "\\'"
        }, eg = function (a) {
            a = q(a);
            if (a.quote) return a.quote();
            for (var b = ['"'], c = 0; c < a[G]; c++) {
                var d = a[cc](c),
                    e = d[pf](0),
                    h = b,
                    k = c + 1,
                    n;
                if (!(n = cg[d])) {
                    if (!(31 < e && 127 > e))
                        if (d in dg) d = dg[d];
                        else if (d in cg) d = dg[d] = cg[d];
                    else {
                        e = d;
                        n = d[pf](0);
                        if (31 < n && 127 > n) e = d;
                        else {
                            if (256 > n) {
                                if (e = "\\x", 16 > n || 256 < n) e += "0"
                            } else e = "\\u", 4096 > n && (e += "0");
                            e += n[Sc](16)[zf]()
                        }
                        d = dg[d] = e
                    }
                    n = d
                }
                h[k] = n
            }
            b[D]('"');
            return b[Cf]("")
        };
    var fg = m[H],
        gg = fg[pe] ? function (a, b, c) {
            return fg[pe][I](a, b, c)
        } : function (a, b, c) {
            c = null == c ? 0 : 0 > c ? l.max(0, a[G] + c) : c;
            if (Nf(a)) return Nf(b) && 1 == b[G] ? a[pe](b, c) : -1;
            for (; c < a[G]; c++)
                if (c in a && a[c] === b) return c;
            return -1
        }, hg = fg[xc] ? function (a, b, c) {
            fg[xc][I](a, b, c)
        } : function (a, b, c) {
            for (var d = a[G], e = Nf(a) ? a[hd]("") : a, h = 0; h < d; h++) h in e && b[I](c, e[h], h, a)
        }, ig = fg.map ? function (a, b, c) {
            return fg.map[I](a, b, c)
        } : function (a, b, c) {
            for (var d = a[G], e = m(d), h = Nf(a) ? a[hd]("") : a, k = 0; k < d; k++) k in h && (e[k] = b[I](c, h[k], k, a));
            return e
        },
        jg = fg[tf] ? function (a, b, c) {
            return fg[tf][I](a, b, c)
        } : function (a, b, c) {
            for (var d = a[G], e = Nf(a) ? a[hd]("") : a, h = 0; h < d; h++)
                if (h in e && !b[I](c, e[h], h, a)) return !1;
            return !0
        }, kg = function (a, b) {
            var c = gg(a, b),
                d;
            (d = 0 <= c) && fg[Af][I](a, c, 1);
            return d
        }, lg = function (a, b, c) {
            t: {
                for (var d = a[G], e = Nf(a) ? a[hd]("") : a, h = 0; h < d; h++)
                    if (h in e && b[I](c, e[h], h, a)) {
                        b = h;
                        break t
                    }
                b = -1
            }
            return 0 <= b ? (fg[Af][I](a, b, 1), !0) : !1
        }, mg = function (a) {
            return fg[bc][B](fg, arguments)
        }, ng = function (a) {
            var b = a[G];
            if (0 < b) {
                for (var c = m(b), d = 0; d < b; d++) c[d] = a[d];
                return c
            }
            return []
        }, og = function (a, b, c) {
            return 2 >= arguments[G] ? fg[ee][I](a, b) : fg[ee][I](a, b, c)
        }, pg = function (a, b, c, d, e) {
            for (var h = 0, k = a[G], n; h < k;) {
                var u = h + k >> 1,
                    y;
                y = c ? b[I](e, a[u], u, a) : b(d, a[u]);
                0 < y ? h = u + 1 : (k = u, n = !y)
            }
            return n ? h : ~h
        }, qg = function (a, b) {
            return a > b ? 1 : a < b ? -1 : 0
        };
    var rg = function (a) {
        return a
    };
    var sg = function (a, b, c) {
        for (var d in a) b[I](c, a[d], d, a)
    }, tg = function (a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = a[d];
            return b
        }, ug = function (a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = d;
            return b
        }, vg = function (a) {
            var b = Kf(a);
            if ("object" == b || "array" == b) {
                if (a.J) return a.J();
                var b = "array" == b ? [] : {}, c;
                for (c in a) b[c] = vg(a[c]);
                return b
            }
            return a
        }, wg = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        xg = function (a, b) {
            for (var c, d, e = 1; e < arguments[G]; e++) {
                d = arguments[e];
                for (c in d) a[c] = d[c];
                for (var h = 0; h < wg[G]; h++) c = wg[h], f[H][rd][I](d, c) && (a[c] = d[c])
            }
        };
    var yg, zg, Ag, Bg, Cg, Dg = function () {
            return Hf[wf] ? Hf[wf][ld] : null
        };
    Cg = Bg = Ag = zg = yg = !1;
    var Eg;
    if (Eg = Dg()) {
        var Fg = Hf[wf];
        yg = 0 == Eg[lf]("Opera", 0);
        zg = !yg && (-1 != Eg[pe]("MSIE") || -1 != Eg[pe]("Trident"));
        Bg = (Ag = !yg && -1 != Eg[pe]("WebKit")) && -1 != Eg[pe]("Mobile");
        Cg = !yg && !Ag && !zg && "Gecko" == Fg.product
    }
    var Gg = yg,
        Hg = zg,
        Ig = Cg,
        Jg = Ag,
        Kg = Bg,
        Lg = Hf[wf],
        Mg = -1 != (Lg && Lg.platform || "")[pe]("Mac"),
        Ng = function () {
            var a = Hf.document;
            return a ? a.documentMode : void 0
        }, Og;
    t: {
        var Pg = "",
            Qg;
        if (Gg && Hf.opera) var Rg = Hf.opera.version,
        Pg = "function" == typeof Rg ? Rg() : Rg;
        else if (Ig ? Qg = /rv\:([^\);]+)(\)|;)/ : Hg ? Qg = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : Jg && (Qg = /WebKit\/(\S+)/), Qg) var Sg = Qg[Sb](Dg()),
        Pg = Sg ? Sg[1] : "";
        if (Hg) {
            var Tg = Ng();
            if (Tg > ia(Pg)) {
                Og = q(Tg);
                break t
            }
        }
        Og = Pg
    }
    var Ug = Og,
        Vg = {}, Wg = function (a) {
            var b;
            if (!(b = Vg[a])) {
                b = 0;
                for (var c = q(Ug)[Wb](/^[\s\xa0]+|[\s\xa0]+$/g, "")[hd]("."), d = q(a)[Wb](/^[\s\xa0]+|[\s\xa0]+$/g, "")[hd]("."), e = l.max(c[G], d[G]), h = 0; 0 == b && h < e; h++) {
                    var k = c[h] || "",
                        n = d[h] || "",
                        u = la("(\\d*)(\\D*)", "g"),
                        y = la("(\\d*)(\\D*)", "g");
                    do {
                        var C = u[Sb](k) || ["", "", ""],
                            J = y[Sb](n) || ["", "", ""];
                        if (0 == C[0][G] && 0 == J[0][G]) break;
                        b = ((0 == C[1][G] ? 0 : ha(C[1], 10)) < (0 == J[1][G] ? 0 : ha(J[1], 10)) ? -1 : (0 == C[1][G] ? 0 : ha(C[1], 10)) > (0 == J[1][G] ? 0 : ha(J[1], 10)) ? 1 : 0) || ((0 == C[2][G]) < (0 == J[2][G]) ? -1 : (0 == C[2][G]) > (0 == J[2][G]) ? 1 : 0) || (C[2] < J[2] ? -1 : C[2] > J[2] ? 1 : 0)
                    } while (0 == b)
                }
                b = Vg[a] = 0 <= b
            }
            return b
        }, Xg = Hf.document,
        Yg = Xg && Hg ? Ng() || ("CSS1Compat" == Xg.compatMode ? ha(Ug, 10) : 5) : void 0;
    var Zg = !Hg || Hg && 9 <= Yg;
    !Ig && !Hg || Hg && Hg && 9 <= Yg || Ig && Wg("1.9.1");
    Hg && Wg("9");
    var ah = function (a, b) {
        var c;
        c = a.className;
        c = Nf(c) && c[lc](/\S+/g) || [];
        for (var d = og(arguments, 1), e = c[G] + d[G], h = c, k = 0; k < d[G]; k++) 0 <= gg(h, d[k]) || h[D](d[k]);
        a.className = c[Cf](" ");
        return c[G] == e
    };
    var ch = function (a, b) {
        sg(b, function (b, d) {
            "style" == d ? a[A].cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in bh ? a[x](bh[d], b) : 0 == d[lf]("aria-", 0) || 0 == d[lf]("data-", 0) ? a[x](d, b) : a[d] = b
        })
    }, bh = {
            cellpadding: "cellPadding",
            cellspacing: "cellSpacing",
            colspan: "colSpan",
            frameborder: "frameBorder",
            height: "height",
            maxlength: "maxLength",
            role: "role",
            rowspan: "rowSpan",
            type: "type",
            usemap: "useMap",
            valign: "vAlign",
            width: "width"
        }, eh = function (a, b, c) {
            var d = arguments,
                e = d[0],
                h = d[1];
            if (!Zg && h && (h[F] || h[E])) {
                e = ["<",
                    e
                ];
                h[F] && e[D](' name="', bg(h[F]), '"');
                if (h[E]) {
                    e[D](' type="', bg(h[E]), '"');
                    var k = {};
                    xg(k, h);
                    delete k[E];
                    h = k
                }
                e[D](">");
                e = e[Cf]("")
            }
            e = g[sc](e);
            h && (Nf(h) ? e.className = h : Lf(h) ? ah[B](null, [e][bc](h)) : ch(e, h));
            2 < d[G] && dh(g, e, d, 2);
            return e
        }, dh = function (a, b, c, d) {
            function e(c) {
                c && b[r](Nf(c) ? a.createTextNode(c) : c)
            }
            for (; d < c[G]; d++) {
                var h = c[d];
                !Mf(h) || Qf(h) && 0 < h[ge] ? e(h) : hg(fh(h) ? ng(h) : h, e)
            }
        }, gh = function (a) {
            for (var b; b = a[uc];) a[hf](b)
        }, hh = function (a) {
            return a && a[xf] ? a[xf][hf](a) : null
        }, ih = function (a, b) {
            var c =
                b[xf];
            c && c[ae](a, b)
        }, fh = function (a) {
            if (a && "number" == typeof a[G]) {
                if (Qf(a)) return "function" == typeof a.item || "string" == typeof a.item;
                if (M(a)) return "function" == typeof a.item
            }
            return !1
        };
    var jh = function (a) {
        jh[" "](a);
        return a
    };
    jh[" "] = function () {};
    var kh = !Hg || Hg && 9 <= Yg,
        lh = Hg && !Wg("9");
    !Jg || Wg("528");
    Ig && Wg("1.9b") || Hg && Wg("8") || Gg && Wg("9.5") || Jg && Wg("528");
    Ig && !Wg("8") || Hg && Wg("9");
    var mh = function () {};
    mh[H].Gq = !1;
    mh[H].Tm = function () {
        this.Gq || (this.Gq = !0, this.zf())
    };
    mh[H].zf = function () {
        if (this.br)
            for (; this.br[G];) this.br[Pb]()()
    };
    var nh = function (a, b) {
        nb(this, a);
        Ab(this, b);
        jb(this, this[jf])
    };
    K = nh[H];
    K.zf = function () {};
    K.Tm = function () {};
    K.Ge = !1;
    K.defaultPrevented = !1;
    K.ff = !0;
    K.stopPropagation = function () {
        this.Ge = !0
    };
    K.preventDefault = function () {
        this.defaultPrevented = !0;
        this.ff = !1
    };
    var oh = function (a, b) {
        a && this[Bd](a, b)
    };
    N(oh, nh);
    K = oh[H];
    Ab(K, null);
    K.relatedTarget = null;
    K.offsetX = 0;
    K.offsetY = 0;
    K.clientX = 0;
    K.clientY = 0;
    K.screenX = 0;
    K.screenY = 0;
    K.button = 0;
    xa(K, 0);
    K.charCode = 0;
    xb(K, !1);
    Ja(K, !1);
    Db(K, !1);
    K.metaKey = !1;
    K.he = null;
    K.init = function (a, b) {
        var c = nb(this, a[E]);
        nh[I](this, c);
        Ab(this, a[jf] || a.srcElement);
        jb(this, b);
        var d = a.relatedTarget;
        if (d) {
            if (Ig) {
                var e;
                t: {
                    try {
                        jh(d[te]);
                        e = !0;
                        break t
                    } catch (h) {}
                    e = !1
                }
                e || (d = null)
            }
        } else "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
        this.relatedTarget = d;
        this.offsetX = Jg || void 0 !== a.offsetX ? a.offsetX : a.layerX;
        this.offsetY = Jg || void 0 !== a.offsetY ? a.offsetY : a.layerY;
        this.clientX = void 0 !== a[Pe] ? a[Pe] : a.pageX;
        this.clientY = void 0 !== a[Re] ? a[Re] : a.pageY;
        this.screenX = a.screenX || 0;
        this.screenY = a.screenY || 0;
        this.button = a[ne];
        xa(this, a[tc] || 0);
        this.charCode = a[pc] || ("keypress" == c ? a[tc] : 0);
        xb(this, a[$e]);
        Ja(this, a[Tc]);
        Db(this, a[uf]);
        this.metaKey = a.metaKey;
        this.state = a.state;
        this.he = a;
        a.defaultPrevented && this[dc]();
        delete this.Ge
    };
    K.stopPropagation = function () {
        oh.i[kd][I](this);
        this.he[kd] ? this.he[kd]() : this.he.cancelBubble = !0
    };
    K.preventDefault = function () {
        oh.i[dc][I](this);
        var a = this.he;
        if (a[dc]) a[dc]();
        else if (Va(a, !1), lh) try {
            (a[$e] || 112 <= a[tc] && 123 >= a[tc]) && xa(a, -1)
        } catch (b) {}
    };
    K.zf = function () {};
    var ph = "closure_listenable_" + (1E6 * l[zd]() | 0),
        qh = function (a) {
            try {
                return !(!a || !a[ph])
            } catch (b) {
                return !1
            }
        }, rh = 0;
    var sh = function (a, b, c, d, e, h) {
        this.ad = a;
        this.Hj = b;
        this.src = c;
        nb(this, d);
        this.capture = !! e;
        this.zj = h;
        this.key = ++rh;
        this.Kg = this.yj = !1
    };
    sh[H].Kj = function () {
        this.Kg = !0;
        this.zj = this.src = this.Hj = this.ad = null
    };
    var th = function (a) {
        this.src = a;
        this.vb = {};
        this.di = 0
    };
    K = th[H];
    K.add = function (a, b, c, d, e) {
        var h = this.vb[a];
        h || (h = this.vb[a] = [], this.di++);
        var k = uh(h, b, d, e); - 1 < k ? (a = h[k], c || (a.yj = !1)) : (a = new sh(b, null, this.src, a, !! d, e), a.yj = c, h[D](a));
        return a
    };
    wa(K, function (a, b, c, d) {
        if (!(a in this.vb)) return !1;
        var e = this.vb[a];
        b = uh(e, b, c, d);
        return -1 < b ? (e[b].Kj(), fg[Af][I](e, b, 1), 0 == e[G] && (delete this.vb[a], this.di--), !0) : !1
    });
    K.cq = function (a) {
        var b = a[E];
        if (!(b in this.vb)) return !1;
        var c = kg(this.vb[b], a);
        c && (a.Kj(), 0 == this.vb[b][G] && (delete this.vb[b], this.di--));
        return c
    };
    K.Iq = function (a) {
        var b = 0,
            c;
        for (c in this.vb)
            if (!a || c == a) {
                for (var d = this.vb[c], e = 0; e < d[G]; e++)++b, d[e].Kj();
                delete this.vb[c];
                this.di--
            }
        return b
    };
    K.Lm = function (a, b, c, d) {
        a = this.vb[a];
        var e = -1;
        a && (e = uh(a, b, c, d));
        return -1 < e ? a[e] : null
    };
    var uh = function (a, b, c, d) {
        for (var e = 0; e < a[G]; ++e) {
            var h = a[e];
            if (!h.Kg && h.ad == b && h[se] == !! c && h.zj == d) return e
        }
        return -1
    };
    var vh = "closure_lm_" + (1E6 * l[zd]() | 0),
        wh = {}, xh = 0,
        yh = function (a, b, c, d, e) {
            if (Lf(b)) {
                for (var h = 0; h < b[G]; h++) yh(a, b[h], c, d, e);
                return null
            }
            c = zh(c);
            if (qh(a)) a = a.Yt(b, c, d, e);
            else {
                if (!b) throw fa("Invalid event type");
                var h = !! d,
                    k = Ah(a);
                k || (a[vh] = k = new th(a));
                c = k.add(b, c, !1, d, e);
                c.Hj || (d = Bh(), c.Hj = d, d.src = a, d.ad = c, a.addEventListener ? a.addEventListener(b, d, h) : a.attachEvent(b in wh ? wh[b] : wh[b] = "on" + b, d), xh++);
                a = c
            }
            return a
        }, Bh = function () {
            var a = Ch,
                b = kh ? function (c) {
                    return a[I](b.src, b.ad, c)
                } : function (c) {
                    c = a[I](b.src,
                        b.ad, c);
                    if (!c) return c
                };
            return b
        }, Dh = function (a, b, c, d, e) {
            if (Lf(b)) {
                for (var h = 0; h < b[G]; h++) Dh(a, b[h], c, d, e);
                return null
            }
            c = zh(c);
            if (qh(a)) return a.Iu(b, c, d, e);
            if (!a) return !1;
            if (a = Ah(a))
                if (b = a.Lm(b, c, !! d, e)) return Eh(b);
            return !1
        }, Eh = function (a) {
            if (Pf(a) || !a || a.Kg) return !1;
            var b = a.src;
            if (qh(b)) return b.mp(a);
            var c = a[E],
                d = a.Hj;
            b.removeEventListener ? b.removeEventListener(c, d, a[se]) : b.detachEvent && b.detachEvent(c in wh ? wh[c] : wh[c] = "on" + c, d);
            xh--;
            (c = Ah(b)) ? (c.cq(a), 0 == c.di && (c.src = null, b[vh] = null)) : a.Kj();
            return !0
        }, Fh = function (a, b) {
            if (!a) return 0;
            if (qh(a)) return a.kp(b);
            var c = Ah(a);
            if (!c) return 0;
            var d = 0,
                e;
            for (e in c.vb)
                if (!b || e == b)
                    for (var h = ng(c.vb[e]), k = 0; k < h[G]; ++k) Eh(h[k]) && ++d;
            return d
        }, Hh = function (a, b, c, d) {
            var e = 1;
            if (a = Ah(a))
                if (b = a.vb[b])
                    for (b = ng(b), a = 0; a < b[G]; a++) {
                        var h = b[a];
                        h && h[se] == c && !h.Kg && (e &= !1 !== Gh(h, d))
                    }
                return ga(e)
        }, Gh = function (a, b) {
            var c = a.ad,
                d = a.zj || a.src;
            a.yj && Eh(a);
            return c[I](d, b)
        }, Ch = function (a, b) {
            if (a.Kg) return !0;
            if (!kh) {
                var c;
                if (!(c = b)) t: {
                    c = ["window", "event"];
                    for (var d = Hf,
                            e; e = c[Pb]();)
                        if (null != d[e]) d = d[e];
                        else {
                            c = null;
                            break t
                        }
                    c = d
                }
                e = c;
                c = new oh(e, this);
                d = !0;
                if (!(0 > e[tc] || void 0 != e.returnValue)) {
                    t: {
                        var h = !1;
                        if (0 == e[tc]) try {
                            xa(e, -1);
                            break t
                        } catch (k) {
                            h = !0
                        }(h || void 0 == e.returnValue) && Va(e, !0)
                    }
                    e = [];
                    for (h = c.currentTarget; h; h = h[xf]) e[D](h);
                    for (var h = a[E], n = e[G] - 1; !c.Ge && 0 <= n; n--) jb(c, e[n]), d &= Hh(e[n], h, !0, c);
                    for (n = 0; !c.Ge && n < e[G]; n++) jb(c, e[n]), d &= Hh(e[n], h, !1, c)
                }
                return d
            }
            return Gh(a, new oh(b, this))
        }, Ah = function (a) {
            a = a[vh];
            return a instanceof th ? a : null
        }, Ih = "__closure_events_fn_" +
            (1E9 * l[zd]() >>> 0),
        zh = function (a) {
            return M(a) ? a : a[Ih] || (a[Ih] = function (b) {
                return a.handleEvent(b)
            })
        };
    var Jh = function () {
        this.xf = new th(this);
        this.Jt = this
    };
    N(Jh, mh);
    Jh[H][ph] = !0;
    K = Jh[H];
    K.am = null;
    K.addEventListener = function (a, b, c, d) {
        yh(this, a, b, c, d)
    };
    K.removeEventListener = function (a, b, c, d) {
        Dh(this, a, b, c, d)
    };
    K.dispatchEvent = function (a) {
        var b, c = this.am;
        if (c)
            for (b = []; c; c = c.am) b[D](c);
        var c = this.Jt,
            d = a[E] || a;
        if (Nf(a)) a = new nh(a, c);
        else if (a instanceof nh) Ab(a, a[jf] || c);
        else {
            var e = a;
            a = new nh(d, c);
            xg(a, e)
        }
        var e = !0,
            h;
        if (b)
            for (var k = b[G] - 1; !a.Ge && 0 <= k; k--) h = jb(a, b[k]), e = h.Zj(d, !0, a) && e;
        a.Ge || (h = jb(a, c), e = h.Zj(d, !0, a) && e, a.Ge || (e = h.Zj(d, !1, a) && e));
        if (b)
            for (k = 0; !a.Ge && k < b[G]; k++) h = jb(a, b[k]), e = h.Zj(d, !1, a) && e;
        return e
    };
    K.zf = function () {
        Jh.i.zf[I](this);
        this.kp();
        this.am = null
    };
    K.Yt = function (a, b, c, d) {
        return this.xf.add(q(a), b, !1, c, d)
    };
    K.Iu = function (a, b, c, d) {
        return this.xf[qc](q(a), b, c, d)
    };
    K.mp = function (a) {
        return this.xf.cq(a)
    };
    K.kp = function (a) {
        return this.xf ? this.xf.Iq(a) : 0
    };
    K.Zj = function (a, b, c) {
        a = this.xf.vb[q(a)];
        if (!a) return !0;
        a = ng(a);
        for (var d = !0, e = 0; e < a[G]; ++e) {
            var h = a[e];
            if (h && !h.Kg && h[se] == b) {
                var k = h.ad,
                    n = h.zj || h.src;
                h.yj && this.mp(h);
                d = !1 !== k[I](n, c) && d
            }
        }
        return d && !1 != c.ff
    };
    K.Lm = function (a, b, c, d) {
        return this.xf.Lm(q(a), b, c, d)
    };
    var Mh = function (a, b, c, d, e) {
        if (!(Hg || Jg && Wg("525"))) return !0;
        if (Mg && e) return Kh(a);
        if (e && !d) return !1;
        Pf(b) && (b = Lh(b));
        if (!c && (17 == b || 18 == b || Mg && 91 == b)) return !1;
        if (Jg && d && c) switch (a) {
        case 220:
        case 219:
        case 221:
        case 192:
        case 186:
        case 189:
        case 187:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
            return !1
        }
        if (Hg && d && b == a) return !1;
        switch (a) {
        case 13:
            return !(Hg && Hg && 9 <= Yg);
        case 27:
            return !Jg
        }
        return Kh(a)
    }, Kh = function (a) {
            if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || Jg && 0 == a) return !0;
            switch (a) {
            case 32:
            case 63:
            case 107:
            case 109:
            case 110:
            case 111:
            case 186:
            case 59:
            case 189:
            case 187:
            case 61:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
            case 219:
            case 220:
            case 221:
                return !0;
            default:
                return !1
            }
        }, Lh = function (a) {
            if (Ig) a = Nh(a);
            else if (Mg && Jg) t: switch (a) {
            case 93:
                a = 91;
                break t
            }
            return a
        }, Nh = function (a) {
            switch (a) {
            case 61:
                return 187;
            case 59:
                return 186;
            case 173:
                return 189;
            case 224:
                return 91;
            case 0:
                return 224;
            default:
                return a
            }
        };
    var Oh = function (a, b) {
        Jh[I](this);
        a && this.Jg(a, b)
    };
    N(Oh, Jh);
    K = Oh[H];
    K.fi = null;
    K.Lj = null;
    K.km = null;
    K.Mj = null;
    K.lc = -1;
    K.Ee = -1;
    K.tm = !1;
    var Ph = {
        3: 13,
        12: 144,
        63232: 38,
        63233: 40,
        63234: 37,
        63235: 39,
        63236: 112,
        63237: 113,
        63238: 114,
        63239: 115,
        63240: 116,
        63241: 117,
        63242: 118,
        63243: 119,
        63244: 120,
        63245: 121,
        63246: 122,
        63247: 123,
        63248: 44,
        63272: 46,
        63273: 36,
        63275: 35,
        63276: 33,
        63277: 34,
        63289: 144,
        63302: 45
    }, Qh = {
            Up: 38,
            Down: 40,
            Left: 37,
            Right: 39,
            Enter: 13,
            F1: 112,
            F2: 113,
            F3: 114,
            F4: 115,
            F5: 116,
            F6: 117,
            F7: 118,
            F8: 119,
            F9: 120,
            F10: 121,
            F11: 122,
            F12: 123,
            "U+007F": 46,
            Home: 36,
            End: 35,
            PageUp: 33,
            PageDown: 34,
            Insert: 45
        }, Rh = Hg || Jg && Wg("525"),
        Sh = Mg && Ig;
    K = Oh[H];
    K.Lt = function (a) {
        Jg && (17 == this.lc && !a[$e] || 18 == this.lc && !a[Tc] || Mg && 91 == this.lc && !a.metaKey) && (this.Ee = this.lc = -1); - 1 == this.lc && (a[$e] && 17 != a[tc] ? this.lc = 17 : a[Tc] && 18 != a[tc] ? this.lc = 18 : a.metaKey && 91 != a[tc] && (this.lc = 91));
        Rh && !Mh(a[tc], this.lc, a[uf], a[$e], a[Tc]) ? this.handleEvent(a) : (this.Ee = Lh(a[tc]), Sh && (this.tm = a[Tc]))
    };
    K.Hu = function () {
        this.Ee = this.lc = -1
    };
    K.Mt = function (a) {
        this.Hu();
        this.tm = a[Tc]
    };
    K.handleEvent = function (a) {
        var b = a.he,
            c, d, e = b[Tc];
        Hg && "keypress" == a[E] ? (c = this.Ee, d = 13 != c && 27 != c ? b[tc] : 0) : Jg && "keypress" == a[E] ? (c = this.Ee, d = 0 <= b[pc] && 63232 > b[pc] && Kh(c) ? b[pc] : 0) : Gg ? (c = this.Ee, d = Kh(c) ? b[tc] : 0) : (c = b[tc] || this.Ee, d = b[pc] || 0, Sh && (e = this.tm), Mg && 63 == d && 224 == c && (c = 191));
        var h = c = Lh(c),
            k = b.keyIdentifier;
        c ? 63232 <= c && c in Ph ? h = Ph[c] : 25 == c && a[uf] && (h = 9) : k && k in Qh && (h = Qh[k]);
        a = h == this.lc;
        this.lc = h;
        b = new Th(h, d, a, b);
        Ja(b, e);
        this[fc](b)
    };
    K.Jg = function (a, b) {
        this.Mj && this.detach();
        this.fi = a;
        this.Lj = yh(this.fi, "keypress", this, b);
        this.km = yh(this.fi, "keydown", this.Lt, b, this);
        this.Mj = yh(this.fi, "keyup", this.Mt, b, this)
    };
    K.detach = function () {
        this.Lj && (Eh(this.Lj), Eh(this.km), Eh(this.Mj), this.Mj = this.km = this.Lj = null);
        this.fi = null;
        this.Ee = this.lc = -1
    };
    K.zf = function () {
        Oh.i.zf[I](this);
        this.detach()
    };
    var Th = function (a, b, c, d) {
        d && this[Bd](d, void 0);
        nb(this, "key");
        xa(this, a);
        this.charCode = b;
        this.repeat = c
    };
    N(Th, oh);
    var Uh = function () {};
    Jf(Uh);
    Uh[H].zv = 0;
    Uh[H].ma = function () {
        return ":" + (this.zv++)[Sc](36)
    };
    var Vh = "StopIteration" in Hf ? Hf.StopIteration : fa("StopIteration"),
        Wh = function () {};
    Oa(Wh[H], function () {
        throw Vh;
    });
    Wh[H].Am = function () {
        return this
    };
    var Xh = function (a, b) {
        this.ia = {};
        this.Ha = [];
        this.vj = this.Oa = 0;
        var c = arguments[G];
        if (1 < c) {
            if (c % 2) throw fa("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else a && this.Uh(a)
    };
    K = Xh[H];
    K.Yc = function () {
        return this.Oa
    };
    K.kc = function () {
        this.Yh();
        for (var a = [], b = 0; b < this.Ha[G]; b++) a[D](this.ia[this.Ha[b]]);
        return a
    };
    K.Bf = function () {
        this.Yh();
        return this.Ha[bc]()
    };
    K.Ud = function (a) {
        return Yh(this.ia, a)
    };
    K.Km = function (a) {
        for (var b = 0; b < this.Ha[G]; b++) {
            var c = this.Ha[b];
            if (Yh(this.ia, c) && this.ia[c] == a) return !0
        }
        return !1
    };
    K.Ld = function (a, b) {
        if (this === a) return !0;
        if (this.Oa != a.Yc()) return !1;
        var c = b || Zh;
        this.Yh();
        for (var d, e = 0; d = this.Ha[e]; e++)
            if (!c(this.get(d), a.get(d))) return !1;
        return !0
    };
    var Zh = function (a, b) {
        return a === b
    };
    K = Xh[H];
    K.Ua = function () {
        return 0 == this.Oa
    };
    wa(K, function (a) {
        return Yh(this.ia, a) ? (delete this.ia[a], this.Oa--, this.vj++, this.Ha[G] > 2 * this.Oa && this.Yh(), !0) : !1
    });
    K.Yh = function () {
        if (this.Oa != this.Ha[G]) {
            for (var a = 0, b = 0; a < this.Ha[G];) {
                var c = this.Ha[a];
                Yh(this.ia, c) && (this.Ha[b++] = c);
                a++
            }
            tb(this.Ha, b)
        }
        if (this.Oa != this.Ha[G]) {
            for (var d = {}, b = a = 0; a < this.Ha[G];) c = this.Ha[a], Yh(d, c) || (this.Ha[b++] = c, d[c] = 1), a++;
            tb(this.Ha, b)
        }
    };
    K.get = function (a, b) {
        return Yh(this.ia, a) ? this.ia[a] : b
    };
    K.set = function (a, b) {
        Yh(this.ia, a) || (this.Oa++, this.Ha[D](a), this.vj++);
        this.ia[a] = b
    };
    K.Uh = function (a) {
        var b;
        a instanceof Xh ? (b = a.Bf(), a = a.kc()) : (b = ug(a), a = tg(a));
        for (var c = 0; c < b[G]; c++) this.set(b[c], a[c])
    };
    K.J = function () {
        return new Xh(this)
    };
    K.Am = function (a) {
        this.Yh();
        var b = 0,
            c = this.Ha,
            d = this.ia,
            e = this.vj,
            h = this,
            k = new Wh;
        Oa(k, function () {
            for (;;) {
                if (e != h.vj) throw fa("The map has changed since the iterator was created");
                if (b >= c[G]) throw Vh;
                var k = c[b++];
                return a ? k : d[k]
            }
        });
        return k
    };
    var Yh = function (a, b) {
        return f[H][rd][I](a, b)
    };
    var $h = function (a) {
        if ("function" == typeof a.Yc) a = a.Yc();
        else if (Mf(a) || Nf(a)) a = a[G];
        else {
            var b = 0,
                c;
            for (c in a) b++;
            a = b
        }
        return a
    }, ai = function (a) {
            if ("function" == typeof a.kc) return a.kc();
            if (Nf(a)) return a[hd]("");
            if (Mf(a)) {
                for (var b = [], c = a[G], d = 0; d < c; d++) b[D](a[d]);
                return b
            }
            return tg(a)
        }, bi = function (a, b, c) {
            if ("function" == typeof a[tf]) return a[tf](b, c);
            if (Mf(a) || Nf(a)) return jg(a, b, c);
            var d;
            if ("function" == typeof a.Bf) d = a.Bf();
            else if ("function" != typeof a.kc)
                if (Mf(a) || Nf(a)) {
                    d = [];
                    for (var e = a[G], h = 0; h < e; h++) d[D](h)
                } else d =
                    ug(a);
                else d = void 0;
            for (var e = ai(a), h = e[G], k = 0; k < h; k++)
                if (!b[I](c, e[k], d && d[k], a)) return !1;
            return !0
        };
    var ci = function (a, b, c) {
        this.xe = a || null;
        this.xu = !! c
    };
    K = ci[H];
    K.Ae = function () {
        if (!this.Xa && (this.Xa = new Xh, this.Oa = 0, this.xe))
            for (var a = this.xe[hd]("&"), b = 0; b < a[G]; b++) {
                var c = a[b][pe]("="),
                    d = null,
                    e = null;
                0 <= c ? (d = a[b][rf](0, c), e = a[b][rf](c + 1)) : d = a[b];
                d = ka(d[Wb](/\+/g, " "));
                d = this.uf(d);
                this.add(d, e ? ka(e[Wb](/\+/g, " ")) : "")
            }
    };
    K.Xa = null;
    K.Oa = null;
    K.Yc = function () {
        this.Ae();
        return this.Oa
    };
    K.add = function (a, b) {
        this.Ae();
        this.xj();
        a = this.uf(a);
        var c = this.Xa.get(a);
        c || this.Xa.set(a, c = []);
        c[D](b);
        this.Oa++;
        return this
    };
    wa(K, function (a) {
        this.Ae();
        a = this.uf(a);
        return this.Xa.Ud(a) ? (this.xj(), this.Oa -= this.Xa.get(a)[G], this.Xa[qc](a)) : !1
    });
    K.Ua = function () {
        this.Ae();
        return 0 == this.Oa
    };
    K.Ud = function (a) {
        this.Ae();
        a = this.uf(a);
        return this.Xa.Ud(a)
    };
    K.Km = function (a) {
        var b = this.kc();
        return 0 <= gg(b, a)
    };
    K.Bf = function () {
        this.Ae();
        for (var a = this.Xa.kc(), b = this.Xa.Bf(), c = [], d = 0; d < b[G]; d++)
            for (var e = a[d], h = 0; h < e[G]; h++) c[D](b[d]);
        return c
    };
    K.kc = function (a) {
        this.Ae();
        var b = [];
        if (Nf(a)) this.Ud(a) && (b = mg(b, this.Xa.get(this.uf(a))));
        else {
            a = this.Xa.kc();
            for (var c = 0; c < a[G]; c++) b = mg(b, a[c])
        }
        return b
    };
    K.set = function (a, b) {
        this.Ae();
        this.xj();
        a = this.uf(a);
        this.Ud(a) && (this.Oa -= this.Xa.get(a)[G]);
        this.Xa.set(a, [b]);
        this.Oa++;
        return this
    };
    K.get = function (a, b) {
        var c = a ? this.kc(a) : [];
        return 0 < c[G] ? q(c[0]) : b
    };
    K.Yv = function (a, b) {
        this[qc](a);
        0 < b[G] && (this.xj(), this.Xa.set(this.uf(a), ng(b)), this.Oa += b[G])
    };
    Ia(K, function () {
        if (this.xe) return this.xe;
        if (!this.Xa) return "";
        for (var a = [], b = this.Xa.Bf(), c = 0; c < b[G]; c++)
            for (var d = b[c], e = ba(q(d)), d = this.kc(d), h = 0; h < d[G]; h++) {
                var k = e;
                "" !== d[h] && (k += "=" + ba(q(d[h])));
                a[D](k)
            }
        return this.xe = a[Cf]("&")
    });
    K.xj = function () {
        this.xe = null
    };
    K.J = function () {
        var a = new ci;
        a.xe = this.xe;
        this.Xa && (a.Xa = this.Xa.J(), a.Oa = this.Oa);
        return a
    };
    K.uf = function (a) {
        a = q(a);
        this.xu && (a = a[Gf]());
        return a
    };
    var di = function (a) {
        this.ia = new Xh;
        a && this.Uh(a)
    }, ei = function (a) {
            var b = typeof a;
            return "object" == b && a || "function" == b ? "o" + (a[Rf] || (a[Rf] = ++Sf)) : b[Qc](0, 1) + a
        };
    K = di[H];
    K.Yc = function () {
        return this.ia.Yc()
    };
    K.add = function (a) {
        this.ia.set(ei(a), a)
    };
    K.Uh = function (a) {
        a = ai(a);
        for (var b = a[G], c = 0; c < b; c++) this.add(a[c])
    };
    K.Iq = function (a) {
        a = ai(a);
        for (var b = a[G], c = 0; c < b; c++) this[qc](a[c])
    };
    wa(K, function (a) {
        return this.ia[qc](ei(a))
    });
    K.Ua = function () {
        return this.ia.Ua()
    };
    Wa(K, function (a) {
        return this.ia.Ud(ei(a))
    });
    K.kc = function () {
        return this.ia.kc()
    };
    K.J = function () {
        return new di(this)
    };
    K.Ld = function (a) {
        return this.Yc() == $h(a) && this.pu(a)
    };
    K.pu = function (a) {
        var b = $h(a);
        if (this.Yc() > b) return !1;
        !(a instanceof di) && 5 < b && (a = new di(a));
        return bi(this, function (b) {
            if ("function" == typeof a[Id]) b = a[Id](b);
            else if ("function" == typeof a.Km) b = a.Km(b);
            else if (Mf(a) || Nf(a)) b = 0 <= gg(a, b);
            else t: {
                var d = a,
                    e;
                for (e in d)
                    if (d[e] == b) {
                        b = !0;
                        break t
                    }
                b = !1
            }
            return b
        })
    };
    K.Am = function () {
        return this.ia.Am(!1)
    };
    var fi = null,
        gi = null,
        hi = Ig || Jg || Gg || "function" == typeof Hf.atob,
        ii = function () {
            if (!fi) {
                fi = {};
                gi = {};
                for (var a = 0; 65 > a; a++) fi[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [cc](a), gi[fi[a]] = a
            }
        };
    var ji = function (a) {
        a = q(a);
        if (/^\s*$/ [$d](a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/ [$d](a[Wb](/\\["\\\/bfnrtu]/g, "@")[Wb](/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]")[Wb](/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
            return eval("(" + a + ")")
        } catch (b) {}
        throw fa("Invalid JSON string: " + a);
    };
    var li = function (a, b) {
        this.pp = a || null;
        this.Fc = !! b;
        this.ia = new Xh;
        this.Pa = new ki("", void 0);
        Oa(this.Pa, this.Pa.Hc = this.Pa)
    };
    K = li[H];
    K.lq = function (a) {
        (a = this.ia.get(a)) && this.Fc && (a[qc](), this.Tp(a));
        return a
    };
    K.get = function (a, b) {
        var c = this.lq(a);
        return c ? c[ke] : b
    };
    K.set = function (a, b) {
        var c = this.lq(a);
        c ? gb(c, b) : (c = new ki(a, b), this.ia.set(a, c), this.Tp(c))
    };
    K.shift = function () {
        return this.dq(this.Pa[gd])
    };
    K.pop = function () {
        return this.dq(this.Pa.Hc)
    };
    wa(K, function (a) {
        return (a = this.ia.get(a)) ? (this[Ed](a), !0) : !1
    });
    K.removeNode = function (a) {
        a[qc]();
        this.ia[qc](a.key)
    };
    K.Yc = function () {
        return this.ia.Yc()
    };
    K.Ua = function () {
        return this.ia.Ua()
    };
    K.Bf = function () {
        return this.map(function (a, b) {
            return b
        })
    };
    K.kc = function () {
        return this.map(function (a) {
            return a
        })
    };
    Wa(K, function (a) {
        return this.some(function (b) {
            return b == a
        })
    });
    K.Ud = function (a) {
        return this.ia.Ud(a)
    };
    K.forEach = function (a, b) {
        for (var c = this.Pa[gd]; c != this.Pa; c = c[gd]) a[I](b, c[ke], c.key, this)
    };
    K.map = function (a, b) {
        for (var c = [], d = this.Pa[gd]; d != this.Pa; d = d[gd]) c[D](a[I](b, d[ke], d.key, this));
        return c
    };
    K.some = function (a, b) {
        for (var c = this.Pa[gd]; c != this.Pa; c = c[gd])
            if (a[I](b, c[ke], c.key, this)) return !0;
        return !1
    };
    K.every = function (a, b) {
        for (var c = this.Pa[gd]; c != this.Pa; c = c[gd])
            if (!a[I](b, c[ke], c.key, this)) return !1;
        return !0
    };
    K.Tp = function (a) {
        this.Fc ? (Oa(a, this.Pa[gd]), a.Hc = this.Pa, Oa(this.Pa, a), a[gd].Hc = a) : (a.Hc = this.Pa.Hc, Oa(a, this.Pa), this.Pa.Hc = a, Oa(a.Hc, a));
        null != this.pp && this.jt(this.pp)
    };
    K.jt = function (a) {
        for (var b = this.ia.Yc(); b > a; b--) this[Ed](this.Fc ? this.Pa.Hc : this.Pa[gd])
    };
    K.dq = function (a) {
        this.Pa != a && this[Ed](a);
        return a[ke]
    };
    var ki = function (a, b) {
        this.key = a;
        gb(this, b)
    };
    wa(ki[H], function () {
        Oa(this.Hc, this[gd]);
        this[gd].Hc = this.Hc;
        delete this.Hc;
        delete this[gd]
    });
    var mi = /iPhone|iPod/,
        ni = function (a, b, c, d) {
            return a << 21 | b << 14 | c << 7 | d
        }, oi = /OS (\d)_(\d)(?:_(\d))?/;
    var pi = {
        normal: 0,
        layer: 1,
        multiply: 2,
        screen: 3,
        lighten: 4,
        darken: 5,
        difference: 6,
        add: 7,
        subtract: 8,
        invert: 9,
        alpha: 10,
        erase: 11,
        overlay: 12,
        hardlight: 13
    }, qi = "normal layer multiply screen lighten darken difference add subtract invert alpha erase overlay hardlight".split(" ");
    f[w] && !f[qe] && (f.defineProperties = function (a, b) {
        for (var c in b) f[w](a, c, b[c])
    });
    var ri = function (a, b) {
        this.x = a;
        this.y = b
    };
    ri[H].u = function (a) {
        var b = this.x * a.s + this.y * a.l + a.k;
        this.x = this.x * a.p + this.y * a.n + a.j;
        this.y = b
    };
    ri[H].J = function () {
        return new ri(this.x, this.y)
    };
    var si = function (a, b, c, d, e, h) {
        this.p = a;
        this.s = b;
        this.n = c;
        this.l = d;
        this.j = e;
        this.k = h
    }, ti = new si(1, 0, 0, 1, 0, 0),
        ui = new si(20, 0, 0, 20, 0, 0);
    K = si[H];
    K.oc = function () {
        var a = this.p * this.l - this.s * this.n;
        return new si(this.l / a, -this.s / a, -this.n / a, this.p / a, (this.n * this.k - this.l * this.j) / a, (this.s * this.j - this.p * this.k) / a)
    };
    K.vr = function () {
        return 0 != this.p * this.l - this.s * this.n
    };
    K.multiply = function (a) {
        return new si(this.p * a.p + this.s * a.n, this.p * a.s + this.s * a.l, this.n * a.p + this.l * a.n, this.n * a.s + this.l * a.l, this.j * a.p + this.k * a.n + a.j, this.j * a.s + this.k * a.l + a.k)
    };
    K.cr = function (a, b) {
        return new si(this.p * a, this.s * a, this.n * b, this.l * b, this.j, this.k)
    };
    K.Wg = function (a) {
        var b = l.cos(a);
        a = l.sin(a);
        return new si(this.p * b + this.s * a, this.s * b - this.p * a, this.n * b + this.l * a, this.l * b - this.n * a, this.j * b + this.k * a, this.k * b - this.j * a)
    };
    K.je = function (a, b) {
        return new si(this.p * a, this.s * b, this.n * a, this.l * b, this.j * a, this.k * b)
    };
    K.Bd = function () {
        return l[Fe](this.p * this.p + this.s * this.s)
    };
    K.ae = function () {
        return l[Fe](this.n * this.n + this.l * this.l)
    };
    K.translate = function (a, b) {
        return new si(this.p, this.s, this.n, this.l, this.j + a, this.k + b)
    };
    K.hd = function (a, b) {
        return new si(this.p, this.s, this.n, this.l, a, b)
    };
    Ia(K, function () {
        return "matrix(" + this.p + "," + this.s + "," + this.n + "," + this.l + "," + this.j + "," + this.k + ")"
    });
    K.vn = function () {
        var a = this.Bd(),
            b = this.ae();
        if (!a || !b) return {
            Kd: 1,
            Ue: 1,
            angle: 0,
            n: 0,
            l: 1
        };
        var c = this.p / a,
            d = this.s / a;
        return {
            Kd: a,
            Ue: b,
            angle: -l.atan2(this.s, this.p),
            n: (c * this.n + d * this.l) / a,
            l: (c * this.l - d * this.n) / b
        }
    };
    K.Ld = function (a) {
        return a == this ? !0 : a ? this.p == a.p && this.s == a.s && this.n == a.n && this.l == a.l && this.j == a.j && this.k == a.k : !1
    };
    K.Za = function (a) {
        a[Ef](this.p, this.s, this.n, this.l, this.j, this.k)
    };
    var vi = function (a, b, c, d, e, h, k, n) {
        this.Y = a;
        this.T = b;
        this.X = c;
        this.S = d;
        this.W = e;
        this.Q = h;
        this.O = k;
        this.U = n
    }, wi = new vi(1, 0, 1, 0, 1, 0, 1, 0);
    K = vi[H];
    K.Sl = function (a) {
        return new vi(this.Y * a.Y, this.Y * a.T + this.T, this.X * a.X, this.X * a.S + this.S, this.W * a.W, this.W * a.Q + this.Q, this.O * a.O, this.O * a.U + this.U)
    };
    Xa(K, function (a) {
        return new xi(a.ng * this.Y + this.T, a.mg * this.X + this.S, a.lg * this.W + this.Q, this.Zg(a.Se))
    });
    K.Zg = function (a) {
        return this.O * a + this.U / 255
    };
    K.Ld = function (a) {
        return null != a && this.Y == a.Y && this.T == a.T && this.X == a.X && this.S == a.S && this.W == a.W && this.Q == a.Q && this.O == a.O && this.U == a.U
    };
    K.ok = function () {
        return 1 == this.Y && 0 == this.T && 1 == this.X && 0 == this.S && 1 == this.W && 0 == this.Q && 0 == this.U
    };
    var yi = function (a, b, c, d) {
        this.c = a;
        this.d = b;
        this.F = c;
        this.D = d;
        this.Ua() && this[Ld]()
    };
    K = yi[H];
    K.reset = function () {
        this.c = p[Rb];
        this.d = p[Rb];
        this.F = p[of];
        this.D = p[of]
    };
    K.J = function () {
        return new yi(this.c, this.d, this.F, this.D)
    };
    K.expand = function (a, b) {
        this.sg(a, b, 0)
    };
    K.sg = function (a, b, c) {
        this.c = l.min(this.c, a - c);
        this.F = l.max(this.F, a + c);
        this.d = l.min(this.d, b - c);
        this.D = l.max(this.D, b + c)
    };
    K.$m = function () {
        this.c = l[$b](this.c);
        this.d = l[$b](this.d);
        this.F = l[Yb](this.F);
        this.D = l[Yb](this.D)
    };
    K.add = function (a) {
        this.d += a.d;
        this.D += a.D;
        this.c += a.c;
        this.F += a.F
    };
    K.u = function (a) {
        if (!this.Ua()) {
            var b = new ri(this.c, this.d),
                c = this.F - this.c,
                d = this.D - this.d;
            this[Ld]();
            b.u(a);
            var e = c * a.s,
                c = c * a.p,
                h = d * a.n;
            a = d * a.l;
            this[Ub](b.x, b.y);
            this[Ub](b.x + c, b.y + e);
            this[Ub](b.x + h, b.y + a);
            this[Ub](b.x + c + h, b.y + e + a)
        }
    };
    K.dn = function (a) {
        return this.F >= a.c && a.F >= this.c && this.D >= a.d && a.D >= this.d
    };
    K.np = function (a) {
        return a.c >= this.c && a.F <= this.F && a.d >= this.d && a.D <= this.D
    };
    K.Ld = function (a) {
        return a.c == this.c && a.F == this.F && a.d == this.d && a.D == this.D
    };
    Wa(K, function (a, b) {
        return a >= this.c && a <= this.F && b >= this.d && b <= this.D
    });
    K.dd = function (a) {
        this.c = l.min(this.c, a.c);
        this.F = l.max(this.F, a.F);
        this.d = l.min(this.d, a.d);
        this.D = l.max(this.D, a.D)
    };
    K.ik = function (a) {
        this.c = l.max(this.c, a.c);
        this.F = l.min(this.F, a.F);
        this.d = l.max(this.d, a.d);
        this.D = l.min(this.D, a.D);
        this.Ua() && this[Ld]()
    };
    K.Ua = function () {
        return !(this.c <= this.F && this.d <= this.D)
    };
    K.Ir = function () {
        return new yi(-this.F, -this.D, -this.c, -this.d)
    };
    na(K, function () {
        return l.max(this.F - this.c, 0)
    });
    Za(K, function () {
        return l.max(this.D - this.d, 0)
    });
    var zi = function (a) {
        return new yi(a.xmin, a.ymin, a.xmax, a.ymax)
    };
    Ia(yi[H], function () {
        return "" + this.c + " " + this.d + " " + this[Tb]() + " " + this[Rd]()
    });
    yi[H].Jc = function (a) {
        this.Ua() ? (a[x]("x", 0), a[x]("y", 0), a[x]("width", 0), a[x]("height", 0)) : (a[x]("x", this.c), a[x]("y", this.d), a[x]("width", this.F - this.c), a[x]("height", this.D - this.d))
    };
    var Ai = function (a) {
        this.ca = a ? a : [];
        this.qm = this.im = this.jm = null
    }, Bi = {
            0: 1,
            1: 1,
            2: 2,
            3: 0
        }, Ci = {
            0: "M",
            1: "L",
            2: "Q",
            3: "Z"
        };
    K = Ai[H];
    Ia(K, function () {
        if (!this.qm) {
            for (var a = this.ca[ee](0), b = 0, c = a[G]; b < c;) {
                var d = a[b];
                a[b++] = Ci[d];
                b += 2 * Bi[d]
            }
            this.qm = c ? a[Cf](" ") : "M 0 0"
        }
        return this.qm
    });
    K.hl = function (a) {
        for (var b = this.ca, c = 0, d = b[G], e = m(d); c < d;) {
            var h = b[c];
            e[c] = Ci[h];
            ++c;
            for (h = Bi[h]; 0 < h; --h) {
                var k = b[c + 0],
                    n = b[c + 1];
                e[c + 0] = k * a.p + n * a.n + a.j;
                e[c + 1] = k * a.s + n * a.l + a.k;
                c += 2
            }
        }
        return e[Cf](" ")
    };
    K.ne = function (a, b) {
        for (var c = 0; c < b[G];) switch (b[c++]) {
        case 0:
            a.moveTo(b[c++], b[c++]);
            break;
        case 2:
            a.quadraticCurveTo(b[c++], b[c++], b[c++], b[c++]);
            break;
        case 1:
            a.lineTo(b[c++], b[c++]);
            break;
        case 3:
            a.closePath()
        }
    };
    K.u = function (a) {
        if (a == ti) return this;
        for (var b = 0, c = this.ca[G], d = m(c); b < c;) {
            var e = this.ca[b];
            d[b++] = e;
            for (var h = 0; h < Bi[e]; h++) {
                var k = this.ca[b],
                    n = this.ca[b + 1];
                d[b] = k * a.p + n * a.n + a.j;
                d[b + 1] = k * a.s + n * a.l + a.k;
                b += 2
            }
        }
        return new Ai(d)
    };
    ra(K, function (a) {
        return new Ai(this.ca[bc](a.ca))
    });
    K.It = function () {
        var a = this.ca;
        if (13 != a[G] && 16 != a[G] || 0 != a[0] || 1 != a[3] || 1 != a[6] || 1 != a[9] || 3 != a[a[G] - 1]) return !1;
        var b = a[1],
            c = a[2],
            d = a[4],
            e = a[5],
            h = a[7],
            k = a[8],
            n = a[10],
            u = a[11];
        if (!(c == e && d == h && k == u && b == n || b == d && e == k && h == n && c == u)) return !1;
        if (16 == a[G]) {
            if (1 != a[12]) return !1;
            d = a[14];
            if (b != a[13] || c != d) return !1
        }
        return !0
    };
    K.Wr = function () {
        if (this.It()) {
            var a = new yi;
            a[Ub](this.ca[1], this.ca[2]);
            a[Ub](this.ca[7], this.ca[8]);
            return a
        }
        return null
    };
    K.Ua = function () {
        for (var a = 0; a < this.ca[G];) {
            var b = this.ca[a++];
            switch (b) {
            case 0:
            case 3:
                break;
            case 1:
            case 2:
                return !1;
            default:
                return !1
            }
            a += 2 * Bi[b]
        }
        return !0
    };
    K.Sq = function () {
        for (var a = [], b = 0; b < this.ca[G];) {
            var c = this.ca[b++];
            3 != c && a[D](c);
            for (var d = 0; d < 2 * Bi[c]; d++) a[D](this.ca[b++])
        }
        return new Ai(a)
    };
    var Ei = function (a) {
        for (var b = [], c = 0, d = Di(function () {
                return a[pf](c++)
            }), e = 0, h = 0; c < a[G];) {
            var k = d();
            b[D](k);
            switch (k) {
            case 0:
            case 1:
                e += d();
                h += d();
                b[D](e);
                b[D](h);
                break;
            case 2:
                var k = e + d(),
                    n = h + d(),
                    e = e + d(),
                    h = h + d();
                b[D](k);
                b[D](n);
                b[D](e);
                b[D](h)
            }
        }
        return new Ai(b)
    };
    Ai[H].rm = function (a, b, c, d, e) {
        if (void 0 !== c) {
            c = a - c;
            d = b - d;
            var h = 10 * l.max(l.abs(c), l.abs(d));
            c = a - c / h;
            d = b - d / h;
            e[D](0);
            e[D](a);
            e[D](b);
            e[D](1);
            e[D](c);
            e[D](d);
            e[D](1);
            e[D](a);
            e[D](b)
        }
    };
    Ai[H].Uo = function () {
        this.jm || this.Eq();
        return this.jm
    };
    Ai[H].To = function () {
        this.im || this.Eq();
        return this.im
    };
    Ai[H].Eq = function () {
        for (var a = [], b = [], c, d, e, h, k = this.ca, n = 0; n < k[G];) {
            var u = void 0 === e,
                y = k[n++];
            0 == y ? (this.rm(c, d, e, h, b), c = k[n++], d = k[n++], e = h = void 0) : 3 == y ? c = d = e = h = void 0 : (e = c, h = d, c = k[n++], d = k[n++], u && this.rm(e, h, c, d, a), 2 == y && (e = c, h = d, c = k[n++], d = k[n++]))
        }
        this.rm(c, d, e, h, b);
        this.jm = new Ai(a);
        this.im = new Ai(b)
    };
    var Fi, xi = function (a, b, c, d) {
            this.ng = a;
            this.mg = b;
            this.lg = c;
            this.Se = d
        };
    Ia(xi[H], function () {
        return "rgb(" + this.ng[Xb]() + "," + this.mg[Xb]() + "," + this.lg[Xb]() + ")"
    });
    xi[H].Lc = function () {
        return "rgba(" + this.ng[Xb]() + "," + this.mg[Xb]() + "," + this.lg[Xb]() + "," + this.Se[Xb](3) + ")"
    };
    var Gi = function (a) {
        var b = 0,
            c = Di(function () {
                return a[pf](b++)
            });
        return new si(c() / 65536 + 1, c() / 65536, c() / 65536, c() / 65536 + 1, c(), c())
    }, Ii = function (a) {
            for (var b = [], c = 0, d = Hi(function () {
                    return a[pf](c++)
                }), e = 0; c < a[G];) e += ha(d(), 10), b[D](e);
            return b
        }, Hi = function (a) {
            return function () {
                var b = a();
                if (58 == b) return 0;
                for (var c = ""; 48 <= b && 57 >= b;) c += q[ye](b), b = a();
                return (97 <= b ? b - 96 : -(b - 64)) + c
            }
        }, Di = function (a) {
            var b = Hi(a);
            return function () {
                return ha(b(), 10)
            }
        }, Ji = function (a) {
            a = p(a);
            return ja(a) ? a : 0
        }, Ki = function (a) {
            var b =
                0,
                c = Di(function () {
                    return a[pf](b++)
                });
            return new vi((c() + 256) / 256, c(), (c() + 256) / 256, c(), (c() + 256) / 256, c(), (c() + 256) / 256, c())
        }, Li = function (a, b) {
            var c = a,
                d = c & 255,
                c = c >> 8,
                e = c & 255,
                c = c >> 8,
                h = c & 255,
                c = c >> 8 & 255,
                c = c / 255;
            b && (h = h * b.Y + b.T, e = e * b.X + b.S, d = d * b.W + b.Q, c = c * b.O + b.U / 255);
            return new xi(h, e, d, c)
        }, Mi = function (a) {
            a = a[Wb](/^ *rgb *\( *([^,]+) *, *([^,]+) *, *([^,]+) *\) *$/, function (a, c, d, e) {
                return (c << 16) + (d << 8) + (e << 0)
            });
            a = a[Wb](/^ *#([0-9a-fA-F]+) *$/, function (a, c) {
                var d = ha(c, 16);
                return 4278190080 | d
            });
            return a |
                0
        }, Ni = function (a, b) {
            L(b) || (b = 100);
            return a & 16777215 | (2.55 * b & 255) << 24
        }, Oi = function (a, b) {
            var c = new ri(20 * b.x, 20 * b.y);
            c.u(a);
            c.x /= 20;
            c.y /= 20;
            return c
        }, Pi = function (a, b, c) {
            return a + (b - a) * c
        }, Qi = function (a) {
            a = q(a)[ec]();
            return "0" == a[cc](0) && "x" != a[cc](1)[Gf]()
        }, Ri = function (a) {
            a[x]("opacity", 0)
        }, Si = function (a) {
            if (!Fi) {
                var b = function (a) {
                    ca.setTimeout(a, 1E3 / 60)
                };
                Fi = /iPhone|iPod|iPad/ [$d](ea[ld]) ? b : ca.requestAnimationFrame || ca.webkitRequestAnimationFrame || ca.mozRequestAnimationFrame || ca.oRequestAnimationFrame ||
                    ca.msRequestAnimationFrame || b
            }
            Fi[I](ca, a)
        }, Ui = function (a, b) {
            var c;
            if (Nf(a)) c = a;
            else {
                c = new ci;
                if (a)
                    for (var d in a) {
                        var e = a[d];
                        "$" == d[cc](0) || e instanceof Ti || (Lf(e) || (e = [e]), c.Yv(d, e))
                    }
                c = c[Sc]()
            } if (!b) return c;
            if (!c) return b;
            d = b[pe]("?");
            return b = -1 != d ? b[ee](0, d + 1) + c + "&" + b[ee](d + 1) : b + ("?" + c)
        }, Wi = function (a) {
            var b = a.internedStrings;
            b && (delete a.internedStrings, Vi(a, b))
        }, Vi = function (a, b) {
            for (var c in a) {
                var d = a[c];
                "string" == typeof d && "#" == d[cc](0) ? a[c] = b[d[Qc](1)] : d instanceof f && Vi(d, b)
            }
        }, Xi = function (a) {
            a =
                a[Wb](/\+/g, " ");
            try {
                return ka(a)
            } catch (b) {
                for (var c = "", d = 0, e = d; e < a[G]; d = e) {
                    e = a[pe]("%", d);
                    if (0 > e) break;
                    for (var c = c + a[rf](d, e), h = d = 0; e < a[G];) {
                        var k = a[pf](e++);
                        if (37 === k) {
                            if (!/[0-9a-fA-F]/ [$d](a[cc](e)) || !/[0-9a-fA-F]/ [$d](a[cc](++e)))
                                if (0 < h) continue;
                                else break;
                            k = ha(a[Qc](++e - 2, 2), 16)
                        }
                        if (0 < h) d = (d << 6) + (k & 63), h--;
                        else if (192 === (k & 192)) {
                            for (; k & 64;) k <<= 1, h++;
                            d = (k & 127) >> h
                        } else d = k; if (0 === h) {
                            c += q[ye](d);
                            break
                        }
                    }
                }
                return c + a[rf](d)
            }
        }, Zi = function (a) {
            var b = a[pe]("?"),
                c = a[pe]("#");
            return 0 <= b && (0 > c || c > b) ? Yi(a[rf](b +
                1)) : {}
        }, Yi = function (a, b) {
            var c = {};
            if (a)
                for (var d = a[hd]("&"), e = 0; e < d[G]; e++) {
                    var h = d[e],
                        k = h[pe]("="),
                        n = 0 <= k ? h[rf](0, k) : h;
                    if (n || b) h = 0 <= k ? h[rf](k + 1) : "", n = Xi(n), h = Xi(h), n in c || (c[n] = []), c[n][D](h)
                }
            return c
        }, $i = function (a, b, c, d) {
            var e = g[z]("http://www.w3.org/2000/svg", "feComposite");
            L(b) && e[x]("in", b);
            L(c) && e[x]("in2", c);
            e[x]("operator", a);
            L(d) && e[x]("result", d);
            return e
        }, aj = function (a, b, c, d, e, h, k) {
            var n = g[z]("http://www.w3.org/2000/svg", "feComposite");
            L(e) && n[x]("in", e);
            L(h) && n[x]("in2", h);
            n[x]("operator",
                "arithmetic");
            n[x]("k1", a);
            n[x]("k2", b);
            n[x]("k3", c);
            n[x]("k4", d);
            L(k) && n[x]("result", k);
            return n
        }, bj = function (a, b, c, d, e, h) {
            var k = g[z]("http://www.w3.org/2000/svg", "feComponentTransfer"),
                n;
            if (1 != c || 0 != d) n = g[z]("http://www.w3.org/2000/svg", "feFuncA"), n[x]("type", "linear"), n[x]("slope", c), n[x]("intercept", d), k[r](n);
            if (1 != a || 0 != b)
                for (c = ["feFuncR", "feFuncG", "feFuncB"], d = 0; 3 > d; ++d) n = g[z]("http://www.w3.org/2000/svg", c[d]), n[x]("type", "linear"), n[x]("slope", a), n[x]("intercept", b), k[r](n);
            L(e) && k[x]("in",
                e);
            L(h) && k[x]("result", h);
            return k
        };
    var dj = function (a) {
        this.gq = a || ":" + (cj++)[Sc](36)
    }, cj = 0,
        ej = new dj,
        fj = {};
    dj[H].Ju = 0;
    dj[H].xk = function () {
        return this.gq + "-" + (this.Ju++)[Sc](36)
    };
    var gj = function () {
        this.fm = [];
        this.Te = {};
        this.Lb = g[z]("http://www.w3.org/2000/svg", "defs")
    }, hj = function (a, b) {
            this.id = a;
            this.Fj = b
        };
    hj[H].tk = function () {
        return !!this.Fj
    };
    hj[H].get = function () {
        return this.Fj
    };
    gj[H].ue = function (a) {
        var b = this.fm[a];
        b || (b = new hj(a, null), this.fm[a] = b);
        return b
    };
    gj[H].nq = function (a, b) {
        this.ue(a).Fj = b
    };
    gj[H].Pt = function (a, b) {
        for (var c = this.fm, d = 0; d < c[G]; d++)
            if (c[d] && c[d].Fj) {
                var e = c[d].get().ea(a);
                e && this.Lb[r](e)
            }
        b && a.Bp(b);
        a.Dp()
    };
    var ij = 1,
        jj = function (a, b) {
            ub(a, f[Yc](b[H]));
            a[H].constructor = a
        }, kj = function (a, b, c) {
            c && jj(a, c);
            a[H] ? (c = a[H].__swiffy_as2_classdef || null, f[w](a[H], "__swiffy_as2_classdef", {
                value: a
            })) : c = f;
            f[w](a, "__swiffy_as2_typeid", {
                value: ij++
            });
            f[w](a, "__swiffy_as2_baseclass", {
                value: c
            });
            f[w](a, "__swiffy_as2_name", {
                value: b
            })
        };
    kj(f, "Object");
    var lj = function (a, b, c, d) {
        if (Qf(a)) {
            b = null == b ? f[Ob](a) : Nf(b) ? b[hd](",") : b;
            var e = {};
            d & 4 && (e.writable = !0);
            d & 2 && (e.configurable = !0);
            d & 1 && (e.enumerable = !0);
            c & 4 && (e.writable = !1);
            c & 2 && (e.configurable = !1);
            c & 1 && (e.enumerable = !1);
            for (c = 0; c < b[G]; ++c)(d = f[vd](a, b[c])) && d[td] && f[w](a, b[c], e)
        }
    }, mj = function () {};
    cb(mj[H], function () {});
    var nj = function (a) {
        return null != a ? f(a) : new mj
    }, oj = function (a) {
            return null != a ? f(a) : f[Yc](nj[H])
        }, pj = {};
    nj.registerClass = function (a, b) {
        if (2 > arguments[G]) return !1;
        pj[a] = b;
        return !0
    };
    lj(nj, null, 3);
    var qj = function (a) {
        f[w](this, "__swiffy_vm", {
            value: a
        })
    };
    kj(qj, "AsBroadcaster");
    var rj = function (a, b) {
        for (var c = m[H][ee][I](arguments, 2), d = 0; d < this._listeners[G]; ++d) {
            var e = this._listeners[d];
            if (null != e) {
                var h = e[a.B(e, b)];
                M(h) && h[B](e, c)
            }
        }
        return 0 < this._listeners[G] ? !0 : void 0
    }, sj = function (a) {
            null != a ? kg(this._listeners, a) : lg(this._listeners, function (a) {
                return null == a
            });
            this._listeners[D](a);
            return !0
        }, tj = function (a) {
            return kg(this._listeners, a)
        };
    qj[H].initialize = function (a) {
        a._listeners = [];
        a.addListener = sj;
        a.broadcastMessage = Wf(rj, this.__swiffy_vm);
        a.removeListener = tj;
        lj(a, ["addListener", "broadcastMessage", "removeListener", "_listeners"], 3)
    };
    lj(qj[H], null, 3);
    var uj = {
        Va: function () {
            return 0
        }
    }, wj = function (a, b, c) {
            return 1 == a[G] ? new vj(c(a[0])) : new b(c(a[0]), c(a[1]))
        }, vj = function (a) {
            gb(this, a)
        };
    vj[H].df = !0;
    vj[H].Da = function () {
        return this[ke]
    };
    var xj = function (a, b) {
        Pa(this, a);
        this.to = b
    };
    xj[H].df = !1;
    xj[H].Da = function (a) {
        return Pi(this[jd], this.to, a.Va())
    };
    var yj = function (a) {
        return wj(a, xj, rg)
    }, zj = function (a, b) {
            Pa(this, a);
            this.to = b
        };
    zj[H].df = !1;
    zj[H].Da = function (a) {
        var b = this[jd],
            c = this.to;
        a = a.Va();
        return new si(Pi(b.p, c.p, a), Pi(b.s, c.s, a), Pi(b.n, c.n, a), Pi(b.l, c.l, a), Pi(b.j, c.j, a), Pi(b.k, c.k, a))
    };
    var Aj = function (a, b) {
        return wj(a, zj, function (a) {
            return Gi(a).cr(b, b)
        })
    }, Bj = function (a, b) {
            Pa(this, a);
            this.to = b
        };
    Bj[H].df = !1;
    Bj[H].Da = function (a) {
        var b = this[jd],
            c = this.to;
        a = a.Va();
        return new xi(Pi(b.ng, c.ng, a), Pi(b.mg, c.mg, a), Pi(b.lg, c.lg, a), Pi(b.Se, c.Se, a))
    };
    var Cj = function (a, b) {
        Pa(this, a);
        this.to = b;
        this.gt = a.Sq();
        this.ht = b.Sq()
    };
    Cj[H].df = !1;
    Cj[H].Da = function (a) {
        a = a.Va();
        if (0 == a) return this[jd];
        if (1 == a) return this.to;
        for (var b = [], c = 0, d = this.gt.ca, e = this.ht.ca; c < d[G];) {
            var h = d[c++];
            b[D](h);
            for (var k = 0; k < 2 * Bi[h]; k++) b[D](Pi(d[c], e[c++], a))
        }
        return new Ai(b)
    };
    var Dj;
    if (Dj = -1 != ea[ld][pe]("iPad") || mi[$d](ea[ld])) {
        var Ej = oi[Sb](ea[ld]) || [];
        Ej[Pb]();
        Dj = ni[B](null, Ej) < ni(6)
    }
    var Fj = Dj,
        Gj = [null, "reflect", "repeat"],
        Hj = [null, "linearRGB"],
        Ij = function (a, b) {
            ib(this, wj(b[re], Bj, Li))
        };
    K = Ij[H];
    K.vc = function () {
        return null
    };
    K.kf = function (a, b, c, d, e, h) {
        a[x](d, h, this[re], Jj);
        return d
    };
    K.mj = !1;
    K.Db = !0;
    K.Za = function (a, b, c, d) {
        (b = this[re].Da(b)) && d && (b = d[B](b));
        Ha(a, b.Lc());
        a[Rc]();
        return !0
    };
    var Kj = function (a, b, c, d, e, h) {
        d[x](h, "url(#" + e.id + ")");
        return d
    }, Lj = function (a, b) {
            b[Ef] && Hb(this, Aj(b[Ef], 16384));
            this.stops = [];
            if (b[Uc][we])
                for (var c = 0; c < b[Uc][we][G]; c++) {
                    var d = b[Uc][we][c];
                    this[we][c] = {
                        color: wj(d[re], Bj, Li),
                        offset: yj(d[Kc].map(function (a) {
                            return a / 255
                        }))
                    }
                }
            this.Gi = Gj[b[Uc].spread];
            this.Hp = Hj[b[Uc].interpolation]
        };
    K = Lj[H];
    K.Rq = function (a, b) {
        a[x]("gradientUnits", "userSpaceOnUse");
        this[Ef] ? b[x](a, "gradientTransform", this[Ef], Mj) : a[x]("gradientTransform", "scale(16384)");
        for (var c = 0; c < this[we][G]; c++) a[r](Nj(this[we][c], b));
        this.Gi && a[x]("spreadMethod", this.Gi);
        this.Hp && a[x]("color-interpolation", this.Hp);
        a.id = Uh.la().ma();
        return a
    };
    K.kf = Kj;
    K.vc = function () {};
    K.Za = function () {};
    K.mj = !1;
    K.Db = !1;
    var Oj = function (a, b) {
        Lj[I](this, a, b)
    };
    N(Oj, Lj);
    Oj[H].vc = function (a, b) {
        var c = g[z]("http://www.w3.org/2000/svg", "linearGradient");
        c[x]("x1", -1);
        c[x]("x2", 1);
        c[x]("y1", 0);
        c[x]("y2", 0);
        return this.Rq(c, b)
    };
    Oj[H].Za = function (a, b, c, d) {
        if (this.Gi) return !1;
        this[Ef] ? (c = this[Ef].Da(b), a[Ef](c.p, c.s, c.n, c.l, c.j, c.k)) : a.scale(16384, 16384);
        c = a.createLinearGradient(-1, 0, 1, 0);
        for (var e = this[we], h = 0; h < e[G]; h++) {
            var k = e[h][re].Da(b);
            k && d && (k = d[B](k));
            c.addColorStop(e[h][Kc].Da(b), k.Lc())
        }
        Ha(a, c);
        a[Rc]();
        return !0
    };
    Oj[H].Db = !1;
    var Pj = function (a, b) {
        Lj[I](this, a, b);
        b[Uc].f && (this.Ni = yj(b[Uc].f))
    };
    N(Pj, Lj);
    Pj[H].vc = function (a, b) {
        var c = g[z]("http://www.w3.org/2000/svg", "radialGradient");
        c[x]("r", 1);
        c[x]("cx", 0);
        c[x]("cy", 0);
        this.Ni && b[x](c, "fx", this.Ni, Mj);
        return this.Rq(c, b)
    };
    Pj[H].Za = function (a, b, c, d) {
        if (this.Gi) return !1;
        this[Ef] ? (c = this[Ef].Da(b), a[Ef](c.p, c.s, c.n, c.l, c.j, c.k)) : a.scale(16384, 16384);
        c = 0;
        this.Ni && (c = this.Ni.Da(b));
        c = a.createRadialGradient(c, 0, 0, 0, 0, 1);
        for (var e = this[we], h = 0; h < e[G]; h++) {
            var k = e[h][re].Da(b);
            k && d && (k = d[B](k));
            c.addColorStop(e[h][Kc].Da(b), k.Lc())
        }
        Ha(a, c);
        a[Rc]();
        return !0
    };
    Pj[H].Db = !1;
    var Rj = function (a, b) {
        this.bl = "";
        var c = a.ue(b.bitmap).get();
        c instanceof Qj && (this.fd = c);
        Hb(this, b[Ef] ? Gi(b[Ef]) : ui)
    };
    K = Rj[H];
    K.vc = function () {
        this.bl || (this.bl = this.fd ? "#" + this.fd.Do : "missing");
        return null
    };
    K.kf = function (a, b, c, d, e) {
        null == e ? (c = g[z]("http://www.w3.org/2000/svg", "use"), c[me]("http://www.w3.org/1999/xlink", "xlink:href", this.bl)) : c = e;
        this[Ef] && c[x]("transform", this[Ef][Sc]());
        a = g[z]("http://www.w3.org/2000/svg", "g");
        a[r](c);
        var h;
        b[s].df && (h = b[s].Da(uj).Wr());
        if (h && this.fd) {
            var k;
            if (null == e) e = new ri(0, 0), k = new ri(this.fd[Tb], this.fd[Rd]);
            else {
                b = p(e[mf]("x"));
                c = p(e[mf]("y"));
                var n = p(e[mf]("width"));
                k = p(e[mf]("height"));
                e = new ri(b, c);
                k = new ri(b + n, c + k)
            }
            this[Ef] && (e.u(this[Ef]), k.u(this[Ef]));
            b = l[de](e.x);
            c = l[de](e.y);
            n = l[de](k.x - e.x);
            k = l[de](k.y - e.y);
            0 > n && (b += n, n = -n);
            0 > k && (c += k, k = -k);
            if (h.c == b && h.d == c && h[Tb]() == n && h[Rd]() == k) return a
        }
        h = g[z]("http://www.w3.org/2000/svg", "clipPath");
        h.id = Uh.la().ma();
        h[r](d);
        a[r](h);
        a[x]("clip-path", "url(#" + h.id + ")");
        return a
    };
    K.mj = !0;
    K.Za = function (a, b, c, d) {
        d && Ta(a, d.Zg(a[wd]));
        this[Ef] && (b = this[Ef], a[Ef](b.p, b.s, b.n, b.l, b.j, b.k));
        a[Zc]();
        a[bf](this.fd.rc, 0, 0);
        return !0
    };
    K.Db = !1;
    var Sj = function (a, b) {
        Rj[I](this, a, b)
    };
    N(Sj, Rj);
    Sj[H].vc = function (a, b) {
        Sj.i.vc[I](this, a, b);
        var c = this.fd;
        if (!c) return null;
        var d = this[Ef],
            e = g[z]("http://www.w3.org/2000/svg", "pattern");
        e[x]("width", c[Tb]);
        e[x]("height", c[Rd]);
        e[x]("patternUnits", "userSpaceOnUse");
        var h = g[z]("http://www.w3.org/2000/svg", "use");
        h[me]("http://www.w3.org/1999/xlink", "xlink:href", "#" + c.Do);
        e[r](h);
        e[x]("patternTransform", d[Sc]());
        e.id = Uh.la().ma();
        return e
    };
    Sj[H].kf = function (a, b, c, d, e, h) {
        Kj(a, b, c, d, e, h);
        a = g[z]("http://www.w3.org/2000/svg", "g");
        a[r](d);
        return a
    };
    Sj[H].Za = function (a, b, c, d) {
        d && Ta(a, d.Zg(a[wd]));
        b = a.createPattern(this.fd.rc, "repeat");
        this[Ef] && (c = this[Ef], a[Ef](c.p, c.s, c.n, c.l, c.j, c.k));
        Ha(a, b);
        a[Rc]();
        return !0
    };
    Sj[H].Db = !1;
    var Tj = function (a, b) {
        Rj[I](this, a, b)
    };
    N(Tj, Rj);
    Tj[H].vc = function (a, b) {
        Tj.i.vc[I](this, a, b);
        if (!this.fd) return null;
        var c = this[Ef],
            d = this.fd,
            e = a[0].J();
        e.u(c.oc());
        var h = e[Tb](),
            k = e[Rd](),
            c = g[sc]("canvas");
        c[x]("width", h);
        c[x]("height", k);
        var n = g[z]("http://www.w3.org/2000/svg", "image");
        n[x]("width", h);
        n[x]("height", k);
        n[x]("x", e.c);
        n[x]("y", e.d);
        var u = c[Ie]("2d");
        u[df](0, 0, h, k);
        u[Je](-e.c, -e.d);
        d = u.createPattern(d.rc, "repeat");
        Ha(u, d);
        u[Rc]();
        n[me]("http://www.w3.org/1999/xlink", "xlink:href", c[mc]("image/png"));
        n.id = Uh.la().ma();
        return n
    };
    var Nj = function (a, b) {
        var c = g[z]("http://www.w3.org/2000/svg", "stop");
        b[x](c, "offset", a[Kc], Mj);
        b[x](c, "stop-color", a[re], Jj);
        return c
    }, Uj = [null, Ij, Oj, Pj, Pj, Fj ? Tj : Sj, Rj],
        Vj = function (a, b) {
            var c = Uj[b[E]];
            return c ? new c(a, b) : null
        };
    var Wj = ["round", "butt", "square"],
        Xj = ["round", "none", "square"],
        Yj = ["round", "bevel", "miter"],
        Zj = function (a, b) {
            b[Rc] ? this.fill = Vj(a, b[Rc]) : ib(this, wj(b[re], Bj, Li));
            var c = b.cap | 0,
                d = L(b.ecap) ? b.ecap : c;
            this.Hg = Wj[c];
            this.qj = Wj[d];
            this.So = Yj[b.joint | 0];
            b[je] && (this.miter = b[je]);
            na(this, yj(b[Tb]))
        }, ak = function (a, b) {
            return b ? new Zj(a, b) : null
        };
    K = Zj[H];
    K.vc = function (a, b) {
        return this[Rc] ? this[Rc].vc(a, b) : null
    };
    K.mj = !1;
    K.Db = !1;
    K.kq = function (a, b, c, d, e) {
        "butt" != d && (b = g[z]("http://www.w3.org/2000/svg", "path"), b[x]("stroke-linecap", d), b[x]("stroke-linejoin", "bevel"), a[r](b), c.Qu(b, e))
    };
    K.kf = function (a, b, c, d, e, h) {
        if (this.Hg == this.qj) d[x]("stroke-linecap", this.Hg);
        else {
            var k = g[z]("http://www.w3.org/2000/svg", "g");
            this.kq(k, a, c, this.Hg, function (a) {
                return a.Uo()
            });
            this.kq(k, a, c, this.qj, function (a) {
                return a.To()
            });
            k[r](d);
            d = k
        }
        a[x](d, "stroke-width", this[Tb], bk);
        d[x]("stroke-linejoin", this.So);
        null != this[je] && d[x]("stroke-miterlimit", this[je]);
        if (this[Rc]) return this[Rc].kf(a, b, c, d, e, h);
        a[x](d, h, this[re], Jj);
        return d
    };
    K.Za = function (a, b, c, d, e) {
        if (this[Rc]) return !1;
        var h = this.Hg != this.qj;
        a.lineCap = h ? "butt" : this.Hg;
        a.lineJoin = this.So;
        null != this[je] && (a.miterLimit = this[je]);
        e = l.max(e.Bd(), e.ae());
        e = l.max(this[Tb].Da(b), 20 / e);
        a.lineWidth = e;
        (b = this[re].Da(b)) && d && (b = d[B](b));
        a.strokeStyle = b.Lc();
        a[Gc]();
        h && (a.lineJoin = "bevel", a[Ae](), a.lineCap = this.Hg, c.ne(a, c.Uo().ca), a[Gc](), a[Ae](), a.lineCap = this.qj, c.ne(a, c.To().ca), a[Gc]());
        return !0
    };
    var ck = function (a, b, c) {
        this.Qa = a ? a : new yi;
        this.tb = b;
        this.ic = c
    };
    K = ck[H];
    K.dd = function (a) {
        this.tb ? a.tb ? this.tb.dd(a.tb) : this.tb.dd(a.Qa) : a.tb && (this.tb = this.Qa.J(), this.tb.dd(a.tb));
        this.Qa.dd(a.Qa);
        this.Tn(a.ic, !0)
    };
    K.Tn = function (a, b) {
        a && !this.Qa.np(a) ? (this.ic || (this.ic = this.Qa.J()), this.ic.dd(a)) : b && this.ic && this.Qa.np(this.ic) && (this.ic = void 0)
    };
    K.u = function (a) {
        this.tb && this.tb.u(a);
        this.ic && this.ic.u(a);
        this.Qa.u(a)
    };
    K.J = function () {
        return new ck(this.Qa.J(), this.tb ? this.tb.J() : void 0, this.ic ? this.ic.J() : void 0)
    };
    K.cd = function () {
        return this.tb ? this.tb : this.Qa
    };
    K.$g = function () {
        return this.ic ? this.ic : this.Qa
    };
    K.us = function (a) {
        this.tb || (this.tb = this.Qa.J());
        this.Qa = a
    };
    var dk = function (a, b) {
        nb(this, a);
        this.gf = b || null
    }, ek = {
            sw: 1,
            qw: 2,
            yw: 4,
            uw: 8,
            vw: 16,
            Gw: 32,
            ow: 64,
            tw: 128,
            Ew: 256,
            Fw: 512,
            Bw: 1024,
            Aw: 2048,
            zw: 4096,
            lw: 8192,
            nw: 16384,
            kw: 32768,
            mw: 65536,
            pw: 131072,
            iw: 262144,
            hw: 524288,
            rw: 1048576,
            gw: 2097152,
            ww: 4194304,
            xw: 8388608,
            ew: 16777216,
            jw: 33554432,
            Dw: 67108864,
            fw: 134217728,
            Cw: 268435456
        };
    var fk = function () {
        this.Xq = [];
        this.Yq = null
    };
    fk[H].Dd = function (a) {
        return new(this.Xq[gk(a[id])])(a)
    };
    fk[H].Nr = function (a) {
        return new this.Yq(a)
    };
    fk[H].e = function (a, b) {
        this.Xq[gk(a)] = b
    };
    fk[H].hk = function (a) {
        this.Yq = a
    };
    var hk = [],
        gk = function (a) {
            L(a.fr) || (a.fr = hk[G], hk[D](a));
            return a.fr
        };
    var ik = function (a) {
        this.Fc = this.we = this.oa = null;
        this.Gg = 0;
        this.t = a || null;
        this.Vh = []
    };
    K = ik[H];
    K.Yj = function (a) {
        if (!this.oa || this.oa[Cc] > a) return this.Fc = null;
        var b = this.oa;
        this.Fc && a >= this.Fc[Cc] && (b = this.Fc);
        for (; b[Nc] && !(b[Nc][Cc] >= a);) b = b[Nc];
        b[Nc] && b[Nc][Cc] == a && (b = b[Nc]);
        return this.Fc = b
    };
    K.wj = function (a, b) {
        this.Cq(a, this.Yj(b));
        za(a, b)
    };
    K.Cq = function (a, b) {
        b ? (b[Nc] ? b[Nc].zc = a : this.we = a, a.zc = b, Ga(a, b[Nc]), Ga(b, a)) : (this.oa && (this.oa.zc = a, Ga(a, this.oa)), this.oa = a, this.we || (this.we = a));
        a.gd || ++this.Gg
    };
    K.Pg = function (a) {
        this.Fc === a && (this.Fc = this.Fc[Nc]);
        a.zc ? Ga(a.zc, a[Nc]) : this.oa = a[Nc];
        a[Nc] ? a[Nc].zc = a.zc : this.we = a.zc;
        Ga(a, null);
        a.zc = null;
        za(a, void 0);
        a.gd || --this.Gg
    };
    K.wk = function (a, b) {
        this.wj(a, b);
        jk(this.t, a)
    };
    K.qn = function (a) {
        return (a = this.Qc(a)) ? this.Hl(a) : null
    };
    K.Hl = function (a) {
        this.Pg(a);
        a.Ut(32) ? this.Vh[D](a) : this.nm(a);
        return a
    };
    K.is = function (a) {
        for (var b = this.oa; b;) {
            var c = b,
                b = b[Nc];
            c.gd || a(c) || this.Hl(c)
        }
    };
    K.Qc = function (a) {
        var b = this.Yj(a);
        return b && b[Cc] == a ? b : null
    };
    K.forEach = function (a) {
        for (var b = this.oa; b;) {
            if (a(b)) return !0;
            b = b[Nc]
        }
        return !1
    };
    K.qt = function (a) {
        for (var b = this.we; b;) {
            if (a(b)) return !0;
            b = b.zc
        }
        return !1
    };
    K.Vp = function (a) {
        for (var b = this.oa; b;) {
            if (b[oc]() == a) return b;
            b = b[Nc]
        }
        return null
    };
    K.rt = function () {
        return this.we ? l.max(0, this.we[Cc] + 1) : 0
    };
    K.nm = function (a) {
        kk(this.t, a);
        a.g();
        za(a, void 0)
    };
    K.g = function () {
        for (; this.oa;) {
            var a = this.oa;
            this.Pg(a);
            this.nm(a)
        }
    };
    K.ke = function () {
        for (var a = this.oa; a;) a.ke(), a = a[Nc]
    };
    K.it = function () {
        if (0 < this.Vh[G]) {
            for (var a = 0; a < this.Vh[G]; a++) this.nm(this.Vh[a]);
            this.Vh = []
        }
    };
    K.hs = function (a) {
        this.t = a.t;
        for (a = this.oa; a;) jk(this.t, a), a = a[Nc]
    };
    K.cm = function (a, b) {
        this.t && (kk(this.t, a), b && jk(this.t, a, b))
    };
    K.Xl = function (a, b) {
        b < a && (b = a = b);
        var c = this.Yj(a),
            d = this.Yj(b);
        c && c[Cc] == a ? this.Pg(c) : c = null;
        d && d[Cc] == b ? this.Pg(d) : d = null;
        c && this.wj(c, b);
        d && this.wj(d, a)
    };
    K.Fs = function (a) {
        var b = l.min(-16384, this.oa[Cc]) - 1;
        this.Pg(a);
        this.wj(a, b)
    };
    K.Jj = function () {
        return this.Gg
    };
    K.tf = function (a) {
        if (0 > a || a >= this.Gg) return null;
        if (a <= this.Gg - a) {
            for (var b = this.oa; 1 <= a;) b = b[Nc], b.gd || --a;
            for (; b.gd;) b = b[Nc]
        } else {
            b = this.we;
            for (a = this.Gg - 1 - a; 1 <= a;) b = b.zc, b.gd || --a;
            for (; b.gd;) b = b.zc
        }
        return b
    };
    K.Rg = function (a) {
        for (var b = 0, c = this.oa; c; c = c[Nc]) {
            if (c == a) return b;
            c.gd || ++b
        }
    };
    K.qf = function (a, b) {
        var c = this.tf(b - 1);
        za(a, NaN);
        this.Cq(a, c)
    };
    K.Nh = function (a) {
        this.Pg(a)
    };
    var jk = function (a, b, c) {
        if (a && (c = L(c) ? c : b[oc]())) {
            var d = b.a.$();
            b = b.sa() ? b.t : a;
            d.Kn(a, c, b, !0)
        }
    }, kk = function (a, b) {
            if (a) {
                var c = b[oc]();
                if (c) {
                    var d = b.a.$(),
                        e = b.sa() ? b.t : a;
                    d.Ln(a, c, e)
                }
            }
        };
    ik[H].Db = function () {
        for (var a = this.oa; a;) {
            if (!a.Db()) return !1;
            a = a[Nc]
        }
        return !0
    };
    var lk = function (a, b, c) {
        this.a = a;
        sa(this, b);
        this.t = c || this.Aa();
        f[w](this.t, "__swiffy_d", {
            value: this
        });
        f[w](this.t, "__swiffy_child_ref", {
            value: {}
        })
    };
    lk[H].ea = function (a, b) {
        this.a.$().yo(this, a, b)
    };
    lk[H].wh = function () {};
    lk[H].xg = function () {};
    var mk = function () {
        var a = g[sc]("canvas");
        na(a, 1);
        Za(a, 1);
        this.wd = a[Ie]("2d");
        this.wd[Ef](0.05, 0, 0, 0.05, 0, 0);
        this.wd[od]();
        this.Ol = !1
    };
    mk[H].Xo = function (a, b, c) {
        this.Ol && (this.wd[hc](1, 0, 0, 1, 0, 0), this.wd[ze](0, 0, 1, 1), this.wd[Hd](), this.wd[od](), this.Ol = !1);
        this.wd[Je](-b, -c);
        a[Nb]() && a[Nb]().na().Za(this.wd);
        a = nk.Dd(a);
        b = !1;
        a.Vb(this.wd, 8) && (this.Ol = !0, b = 0 < this.wd.getImageData(0, 0, 1, 1)[s][3]);
        a.g();
        return b
    };
    var ok = function (a, b, c) {
        lk[I](this, a, b, c);
        this.Wi = void 0;
        za(this, void 0);
        this.$e = "";
        this.ha = null;
        Ga(this, null);
        this.zc = null;
        this.wi = this.N = 0;
        this.xa = 31;
        this.Ca = [];
        this.Nk = null;
        this.$d = !0;
        this.Dn = 0;
        this.si = void 0;
        this.Nc = ti;
        this.Rf = null;
        this.xb = wi;
        this.r(4);
        this.r(4096);
        this.wn = this.zn = null;
        this.Hk = this.xb;
        this.Gk = wi;
        this.Cn = !1;
        this.Di = null;
        this.ui = !1;
        this.Od = null;
        this.gd = !1;
        this.pd = this.Ek = null;
        this.Kf = this.Kk = !1
    };
    N(ok, lk);
    K = ok[H];
    K.kj = function (a) {
        this.Kf = a;
        this.r(1048576);
        this.jj(function (b) {
            b.kj(a)
        })
    };
    K.Jl = function (a) {
        !a && this.xa & 16 || (this.xa |= 16, this.r(4096), !a && this.Jb() || this.jj(function (a) {
            a.Jl()
        }))
    };
    K.Fq = function () {
        if (this.xa & 16) {
            var a = this.ha,
                a = a ? a.zb().Sl(this.xb) : this.xb;
            this.Jb() ? (this.Gk = a, this.Hk = wi) : (this.Gk = wi, this.Hk = a);
            this.xa &= -17
        }
    };
    K.zb = function () {
        this.Fq();
        return this.Hk
    };
    K.oi = function () {
        this.Fq();
        return this.Gk
    };
    K.na = function () {
        this.xa & 1 && (this.zn = this.ha ? this.Nc[Ad](this.ha.na()) : this.Nc, this.xa ^= 1);
        return this.zn
    };
    K.Kb = function () {
        this.xa & 2 && (this.wn = this.na().oc(), this.xa ^= 2);
        return this.wn
    };
    K.jj = function () {
        return !1
    };
    K.Wo = function () {
        return !1
    };
    K.map = function (a) {
        return a(this)
    };
    K.Ka = function () {
        this.Cn = !0
    };
    K.Nn = function () {
        return !!this.Cn
    };
    K.setTransform = function (a) {
        this.Nc != a && (this.r(1), this.Nc = a, this.Rf = null, this.ij(), this.ha && this.ha.Nb())
    };
    K.Ic = function () {
        this.Rf || (this.Rf = this.Nc.vn());
        return this.Rf
    };
    K.Og = function () {
        var a = this.Rf;
        if (a) {
            var b = l.cos(a[fd]),
                c = l.sin(a[fd]);
            this[hc](new si(a.Kd * b, -a.Kd * c, a.Kd * b * a.n + a.Ue * c * a.l, a.Ue * b * a.l - a.Kd * c * a.n, this.Nc.j, this.Nc.k));
            this.Rf = a
        }
    };
    K.ja = function () {
        var a = this.Ta().cd();
        if (a.Ua()) return 0;
        a = a.J();
        a.u(this.P());
        return (a.F - a.c) / 20
    };
    K.Dm = function (a) {
        if (0 <= a) {
            var b = this.ja(),
                c = this.P();
            0 == b ? (b = this.Ta().cd()[Tb]() / 20, 0 == b && (b = 1), this[hc](new si(a / b, c.s, 0, c.l, c.j, c.k))) : (0 == a && (a = 1 / 1024), this[hc](c.je(a / b, 1).hd(c.j, c.k)))
        }
    };
    K.Bb = function () {
        var a = this.Ta().cd();
        if (a.Ua()) return 0;
        a = a.J();
        a.u(this.P());
        return (a.D - a.d) / 20
    };
    K.Cm = function (a) {
        if (0 <= a) {
            var b = this.Bb(),
                c = this.P();
            0 == b ? (b = this.Ta().cd()[Rd]() / 20, 0 == b && (b = 1), this[hc](new si(c.p, 0, c.n, a / b, c.j, c.k))) : (0 == a && (a = 1 / 1024), this[hc](c.je(1, a / b).hd(c.j, c.k)))
        }
    };
    K.ij = function () {
        this.xa |= 3;
        this.r(2048);
        this.jj(function (a) {
            a.ij()
        });
        this.lb && this.lb.ha != this.ha && this.lb.r(32768);
        this.Ke && this.Ke.ha != this.ha && this.r(32768);
        0 < this.Ca[G] && this.Nb()
    };
    K.Nb = function () {
        this.xa |= 4;
        this.r(16384);
        this.ha && this.ha.Nb()
    };
    K.Os = function () {
        this.xa |= 8;
        this.Nb()
    };
    K.P = function () {
        return this.Nc
    };
    K.Mb = function () {
        return this.Wi
    };
    K.Le = function () {
        return L(this.Wi)
    };
    K.kk = function (a) {
        this.Wi != a && (this.r(32768), this.Wi = a)
    };
    K.Va = function () {
        return this.Dn
    };
    K.r = function (a) {
        (this.N & a) != a && (this.N |= a, this.wi |= a, this.ha && this.ha.r(65536))
    };
    K.Ii = function (a) {
        this.Dn = a
    };
    K.g = function () {
        this.si = !0;
        this.lb && this.lb.cf(null);
        this.a.Xr(this) && this.a.Zi();
        this.a.$().Xn(this)
    };
    K.ke = function () {};
    K.qc = function (a) {
        this.xb.Ld(a) || (this.r(4), this.xb = a, this.Jl())
    };
    K.Ph = function (a) {
        a != this.yb() && (this.r(8192), this.Jl(!0), (a = (1 < a ? -1 : 0) + (1 < this.yb() ? 1 : 0)) && this.ha && this.ha.wg(a))
    };
    K.gh = function (a) {
        var b = this.yb();
        this.Op = a;
        this.Ph(b)
    };
    K.yb = function () {
        return !this.Op && (0 < this.Ca[G] || this.Kk) ? 1 : this.Op | 0
    };
    K.cf = function (a) {
        if (this.Ke != a) {
            this.r(32768);
            var b = this.Ke;
            this.lb && this.lb.cf(null);
            b && (b.lb = null, b.r(32768), b.ij());
            a && (a.cf(null), a.kk(void 0), a.lb && a.lb.cf(null), a.lb = this, a.r(32768), a.ij());
            this.Ke = a
        }
    };
    K.Qf = function (a) {
        if (this.Ca != a && (0 < this.Ca[G] || 0 < a[G])) {
            var b = this.yb();
            this.r(2);
            var c = this.Ca;
            this.Ca = [];
            for (var d = 0, e = 0; e < a[G]; e++) {
                for (var h = !1; !h && d < c[G];) c[d].update(a[e]) && (this.Ca[D](c[d]), h = !0), d++;
                h || this.Ca[D](a[e][Bc]())
            }
            this.Os();
            this.Ph(b)
        }
    };
    K.on = function () {
        if (this.xa & 8) {
            this.Nk = new yi(0, 0, 0, 0);
            for (var a = 0; a < this.Ca[G]; a++) this.Nk.add(this.Ca[a].ei());
            this.xa ^= 8
        }
        return this.Nk
    };
    K.Ub = function (a) {
        a = q(a);
        a != this.$e && this.ha && this.ha.cm(this, a);
        this.$e = a
    };
    K.getName = function () {
        return this.$e
    };
    K.Xf = function (a) {
        if (this.ha != a) {
            var b = (1 < this.yb() ? 1 : 0) + (this.Jb() ? 0 : this.Il());
            this.ha && (this.N || b) && (b && this.ha.wg(-b), this.ha.r(65536));
            (this.ha = a) && (this.N || b) && (b && this.ha.wg(b), this.ha.r(65536));
            this.Kf != ( !! a && a.Kf) && this.kj( !! a && a.Kf)
        }
    };
    K.getParent = function () {
        return this.ha
    };
    K.pm = function () {
        for (var a = [], b = this; b; b = b[Nb]()) a[D](b);
        return a
    };
    K.yt = function () {
        return this.a[Id](this)
    };
    K.Co = function () {
        for (var a = "", b = this; b && b[oc]();) a = "." + b[oc]() + a, b = b[Nb]();
        b && b[Nb]() == b.a && (a = "_level" + (b[Cc] - -16384) + a);
        return a
    };
    K.ml = function () {
        return this.Oe ? this.Oe : this[Nb]() && this[Nb]().ml() || this.a.$().ih()
    };
    K.cn = function (a) {
        this.Oe = a
    };
    K.cj = function (a) {
        this.$d != a && (this.r(8), this.$d = a)
    };
    K.sa = function () {
        return !1
    };
    K.xt = function () {
        return !1 === this.si
    };
    K.Hd = function () {
        return !0 === this.si
    };
    K.Uc = 471859200;
    K.hh = function (a) {
        this.Uc |= a
    };
    K.Or = function (a) {
        this.Uc &= ~a
    };
    K.fireEvent = function (a, b) {
        var c = !1;
        !this.gd && this.Uc & a[E] && ((c = this.Rk(a[E])) && c[wc] && this.a.Ve().Jn(c[wc]), c = this.a.$()[Dd](this.t, c, a, b));
        return c
    };
    K.Rk = function () {
        return null
    };
    K.Ut = function (a) {
        return !!this.Rk(a, !0)
    };
    K.Ta = function () {
        if (this.xa & 4) {
            this.Di = this.Pd();
            if (0 < this.Ca[G]) {
                var a = this.Di.Qa.J();
                a.u(this.na());
                a.add(this.on());
                a.u(this.Kb());
                this.Di.us(a)
            }
            this.xa ^= 4
        }
        return this.Di
    };
    K.ea = function (a, b) {
        this.si = !1;
        ok.i.ea[I](this, a, b)
    };
    K.Zf = function (a) {
        this.Od = a
    };
    K.hn = function () {
        var a = this.Ta().Qa.J();
        a.u(this.na());
        var b = new yi(0, 0, 20 * this.a.mh, 20 * this.a.lh);
        b.add(this.on().Ir());
        a.ik(b);
        return a
    };
    K.Vi = function () {
        return this.a.$().Vi(this)
    };
    K.rn = function (a) {
        this.ui = a
    };
    Wa(K, function (a) {
        for (; a && a != this;) a = a[Nb]();
        return a == this
    });
    K.bc = function (a) {
        this.Ek != a && (this.pd && this.pd.g(), this.N = this.wi, this.pd = a.Dd(this), this.Ek = a);
        return this.pd
    };
    K.Nd = function () {
        this.pd && this.pd.g();
        this.pd = this.Ek = null
    };
    K.Vv = function (a) {
        this.an = a
    };
    K.qi = function () {
        return !1
    };
    K.Il = function () {
        return 0
    };
    K.Jb = function () {
        return 1 <= this.yb()
    };
    K.wg = function () {};
    K.Fl = function () {
        return !1
    };
    K.Ck = function (a, b) {
        return (new mk).Xo(this, a, b)
    };
    K.$g = function (a, b, c, d) {
        if (this.$d) {
            var e = this.Ta().Qa,
                h = new ri(a, b);
            h.u(this.Kb());
            if (e[Id](h.x, h.y)) {
                var k = L(d) ? d : new mk;
                if (k.Xo(this, a, b)) {
                    var n;
                    this.Wo(function (d) {
                        n = d.$g(a, b, c, k);
                        return !!n
                    });
                    return n || c(this) && this || null
                }
            }
        }
        return null
    };
    K.kl = function (a) {
        var b = this.yb();
        this.Kk = a;
        this.Ph(b)
    };
    K.fj = function () {
        return this.Kk || 0 < this.Ca[G]
    };
    var pk = {
        Yp: 134217728,
        $p: 2097152
    }, qk = {
            Yp: 268435456,
            $p: 67108864
        };
    ok[H].xg = function (a, b, c) {
        c != this.ha && this.xt() && (this[Dd](new dk(a.Yp), !0), this.yt() && this.map(function (c) {
            c[Dd](new dk(a.$p), !0);
            return b
        }))
    };
    var rk = function () {
        wb(this, [])
    }, sk = function (a, b, c, d) {
            ok[I](this, a, b, d);
            this.xc = 1;
            this.eh = !1;
            this.oh = !0;
            this.ld = {};
            this.Zk = !1;
            this.$k = 0;
            this.Sf = c || ej.xk()
        };
    N(sk, ok);
    K = sk[H];
    K.Uc = sk[H].Uc | 65011456;
    K.Rk = function (a, b) {
        var c = this.ld[a];
        return !c || b && !c[We][G] ? null : c
    };
    K.eo = function (a) {
        var b = this.ld[a];
        b || (b = new rk, this.ld[a] = b);
        return b
    };
    K.nn = function (a, b, c) {
        var d = this.a.$(),
            e;
        for (e in ek) {
            var h = ek[e];
            if (a & h) {
                this.hh(h);
                var k = this.eo(h),
                    n = {};
                n.Qk = new tk(c, d.Yr(this));
                h & 1048576 && (n.Gn = function (a) {
                    return a.getKey().Zr() == b
                }, n.stopPropagation = !0);
                k[We][D](n);
                h & 63045376 && this.cg()
            }
        }
    };
    K.Bs = function (a, b) {
        for (var c in ek) {
            var d = ek[c];
            a & d && (this.eo(d).sound = b)
        }
    };
    K.isEnabled = function () {
        return this.rd() && this.oh
    };
    K.rd = function () {
        return this.eh && !this.Hd() && !1 != this.t.enabled
    };
    K.cg = function () {
        this.eh || (this.r(256), this.eh = !0)
    };
    K.Eb = function (a) {
        this.xc != a && (this.xc = a)
    };
    K.Jv = function (a) {
        this.Zk = a
    };
    K.Pv = function (a) {
        this.oh = a;
        this.r(256)
    };
    K.trackAsMenu = function () {
        return !1
    };
    K.ju = function (a) {
        this.rd() && (this.a[Df]() || this[Dd](new dk(8388608, a)))
    };
    K.Bq = function (a) {
        if (this.rd()) {
            var b;
            this.a[Df]() || 1 != this.xc ? this[Gd]() && !this.a.Xi() && 1 == this.xc ? (this.Eb(4), b = 16384) : this.a.Ji(this) && 2 == this.xc && (this.Eb(4), b = 65536) : (this.Eb(2), b = 512);
            b && this[Dd](new dk(b, a))
        }
    };
    K.iu = function (a) {
        this.rd() && (this.a[Df]() || this[Dd](new dk(4194304, a)))
    };
    K.Aq = function (a) {
        if (this.rd()) {
            var b;
            this.a[Df]() || 2 != this.xc ? this[Gd]() && !this.a.Xi() && 4 == this.xc ? (this.Eb(1), b = 8192) : this.a.Ji(this) && 4 == this.xc && (this.Eb(2), b = 32768) : (this.Eb(1), b = 256);
            b && this[Dd](new dk(b, a))
        } else this.Eb(1)
    };
    K.Lg = function () {
        this.rd() ? (this[Gd]() ? this.a[he](this) : this.a[he](this, !0, Vf(this.qs, this)), this.Eb(4), this[Dd](new dk(4096))) : this.Eb(1)
    };
    K.Mg = function () {
        if (this.rd()) {
            var a = this[Gd]() && !1 == this.a.Xi() || this.a.Ji(this);
            this.a[Qe](this);
            this.Eb(2);
            if (a) {
                var a = Date.now(),
                    b = a - this.$k;
                this.Zk && 600 > b ? (this[Dd](new dk(33554432)), this.$k = 0) : (this[Dd](new dk(2048)), this.$k = a)
            } else this[Dd](new dk(512))
        } else this.Eb(1)
    };
    K.Ig = function () {
        this[xd]() && !this.a[Df]() && this[Dd](new dk(16777216))
    };
    K.qs = function () {
        this.rd() && (this.Eb(1), this[Dd](new dk(1024)))
    };
    var uk = function (a, b, c, d) {
        sk[I](this, a, b, c, d);
        this.C = new ik(this.t);
        this.Nl = !0
    };
    N(uk, sk);
    K = uk[H];
    K.g = function () {
        uk.i.g[I](this);
        this.C.g();
        this.r(16)
    };
    K.Pd = function () {
        var a = new ck;
        this.C[xc](function (b) {
            var c = b.Ta().J();
            c.u(b.P());
            a.dd(c)
        });
        return a
    };
    K.map = function (a) {
        var b = uk.i.map[I](this, a);
        return b = b || this.C[xc](function (b) {
            return b.map(a)
        })
    };
    K.jj = function (a) {
        return this.C[xc](a)
    };
    K.Wo = function (a) {
        return this.C.qt(a)
    };
    K.sa = function () {
        return !0
    };
    K.kt = function (a) {
        return this.C.Vp(a)
    };
    K.cc = function (a, b) {
        this.r(16);
        var c = a[Nb]();
        c && c[hf](a);
        a.Xf(this);
        this.C.wk(a, b);
        this.Nb();
        a.xg(pk, !1, c)
    };
    K.removeChild = function (a, b) {
        a.xg(qk, !1, b);
        this.r(16);
        this.C.Hl(a);
        a.ke();
        a.Xf(null);
        this.Nb()
    };
    K.Ks = function () {
        for (var a = this.C.oa; a;) this[hf](a), a = this.C.oa
    };
    K.ce = function (a) {
        (a = this.C.Qc(a)) && this[hf](a)
    };
    K.Qc = function (a) {
        return this.C.Qc(a)
    };
    K.cm = function (a, b) {
        this.C.cm(a, b)
    };
    K.Xl = function (a, b) {
        this.r(16);
        this.C.Xl(a, b)
    };
    K.Jj = function () {
        return this.C.Jj()
    };
    K.tf = function (a) {
        return this.C.tf(a)
    };
    K.Rg = function (a) {
        return this.C.Rg(a)
    };
    K.qf = function (a, b) {
        this.r(16);
        var c = a[Nb]();
        c && c.Nh(a, this);
        a.Xf(this);
        this.C.qf(a, b);
        this.Nb();
        a.xg(pk, !1, c)
    };
    K.Nh = function (a, b) {
        a.xg(qk, !1, b);
        this.r(16);
        this.C.Nh(a);
        a.Xf(null);
        this.Nb()
    };
    K.Db = function () {
        return this.C.Db()
    };
    K.Ov = function (a) {
        this.Nl = a;
        this.r(256)
    };
    K.qi = function () {
        return 0 < this.Ll
    };
    K.Il = function () {
        return this.Ll | 0
    };
    K.Ph = function (a) {
        uk.i.Ph[I](this, a);
        var b = this.Ll;
        (a = (1 <= a ? b : 0) + (1 <= this.yb() ? -b : 0)) && this[Nb]().wg(a)
    };
    K.wg = function (a) {
        this.Ll = this.Il() + a;
        this.r(131072);
        this.Jb() || this[Nb]().wg(a)
    };
    var xk = function (a, b, c) {
        lk[I](this, b, a, c);
        this.Xh = this.m = null;
        this.td = !1;
        this.Wl = [];
        this.Tl = this.rj = !1;
        a !== vk && (this.m = wk(a[Tb], a[Rd]), this.m[bf](a.rc, 0, 0), this.td = a.transparent, USING_SWIFFY_MOCKS && (this.Xh = a[s]))
    };
    N(xk, lk);
    var vk = {}, wk = function (a, b) {
            var c = g[sc]("canvas");
            na(c, a);
            Za(c, b);
            return c[Ie]("2d")
        };
    K = xk[H];
    K.Ib = function (a, b, c, d) {
        this.m || (this.m = wk(a, b), (this.td = c) || (d = (d | 4278190080) >>> 0), Ha(this.m, Li(d).Lc()), this.m[Md](0, 0, a, b))
    };
    K.ja = function () {
        return this.m ? this.m[Qd][Tb] : 0
    };
    K.Bb = function () {
        return this.m ? this.m[Qd][Rd] : 0
    };
    K.io = function () {
        if (!this.Xh) {
            if (this.rj || !this.m) return "";
            this.Xh = this.m[Qd][mc]("image/png")
        }
        return this.Xh
    };
    K.bp = function (a) {
        var b = this.Wl;
        0 <= gg(b, a) || b[D](a)
    };
    K.Ro = function (a) {
        kg(this.Wl, a)
    };
    K.wv = function () {
        this.rj = !0
    };
    K.aw = function () {
        this.rj = !1;
        this.Tl && this.Sh()
    };
    K.Sh = function () {
        this.rj ? this.Tl = !0 : (this.Tl = !1, this.Xh = null, this.Wl[xc](function (a) {
            a.Wp()
        }))
    };
    K.Tm = function () {
        this.m = null;
        this.Sh()
    };
    K.Vt = function (a, b) {
        return this.m.createImageData(a, b)
    };
    K.Ce = function (a, b, c, d) {
        return this.m.getImageData(a, b, c, d)
    };
    K.bi = function (a, b, c) {
        this.m.putImageData(a, b, c);
        this.Sh()
    };
    K.fillRect = function (a, b, c, d, e) {
        var h = this.m;
        this.td ? 4278190080 === (e & 4278190080) || h[ze](a, b, c, d) : e = (e | 4278190080) >>> 0;
        0 != e && (Ha(h, Li(e).Lc()), h[Md](a, b, c, d));
        this.Sh()
    };
    K.Sv = function (a, b, c) {
        var d = this.Vt(1, 1),
            e = d[s];
        e[0] = c >>> 16 & 255;
        e[1] = c >>> 8 & 255;
        e[2] = c & 255;
        e[3] = this.td ? c >>> 24 : 255;
        this.bi(d, a, b)
    };
    K.Rv = function (a, b, c) {
        var d = this.Ce(a, b, 1, 1),
            e = d[s];
        e[0] = c >>> 16 & 255;
        e[1] = c >>> 8 & 255;
        e[2] = c & 255;
        this.bi(d, a, b)
    };
    K.kv = function (a, b) {
        var c = this.Ce(a, b, 1, 1)[s];
        return (c[3] << 24 | c[0] << 16 | c[1] << 8 | c[2]) >>> 0
    };
    K.jv = function (a, b) {
        var c = this.Ce(a, b, 1, 1)[s];
        return (c[0] << 16 | c[1] << 8 | c[2]) >>> 0
    };
    K.mv = function (a, b, c, d) {
        if (0 >= c || 0 >= d) return [];
        a = this.Ce(a, b, c, d)[s];
        b = m(l[$b](a[G] / 4));
        for (d = c = 0; d < b[G]; d++) b[d] = (a[c++] << 16 | a[c++] << 8 | a[c++] | a[c++] << 24) >>> 0;
        return b
    };
    K.Tv = function (a, b, c, d, e) {
        if (!(0 >= c || 0 >= d)) {
            var h = this.Ce(a, b, c, d),
                k = h[s];
            c = l.min(e[G], c * d * 4);
            d = this.td ? 0 : 255;
            for (var n = 0, u = 0; n < c; n++) {
                var y = e[n];
                k[u++] = y >>> 16 & 255;
                k[u++] = y >>> 8 & 255;
                k[u++] = y & 255;
                k[u++] = (y >>> 24 | d) & 255
            }
            this.bi(h, a, b)
        }
    };
    K.lv = function (a, b, c, d, e) {
        if (0 >= c || 0 >= d) return new Uint8Array(0);
        a = this.Ce(a, b, c, d)[s];
        if (e)
            for (e = 0; e < a[G]; e += 4) b = a[e], a[e] = a[e + 2], a[e + 2] = b;
        else
            for (e = 0; e < a[G]; e += 4) b = a[e], a[e] = a[e + 3], a[e + 3] = a[e + 2], a[e + 2] = a[e + 1], a[e + 1] = b;
        return a
    };
    K.Nt = function (a, b, c, d, e, h) {
        if (!(0 >= c || 0 >= d)) {
            c = this.Ce(a, b, c, d);
            d = c[s];
            var k = 4 * l[$b](l.min(d[G], e[G]) / 4),
                n = this.td ? 0 : 255;
            e = new Uint8Array(e[nd], e[Bf], e[vc]);
            if (h)
                for (h = 0; h < k; h += 4) d[h] = e[h + 2], d[h + 1] = e[h + 1], d[h + 2] = e[h], d[h + 3] = e[h + 3] | n;
            else
                for (h = 0; h < k; h += 4) d[h] = e[h + 1], d[h + 1] = e[h + 2], d[h + 2] = e[h + 3], d[h + 3] = e[h] | n;
            this.bi(c, a, b)
        }
    };
    K.scroll = function (a, b) {
        if (a || b) {
            var c = 0 > a ? -a : 0,
                d = 0 > b ? -b : 0,
                e = 0 > a ? 0 : a,
                h = 0 > b ? 0 : b,
                k = this.ja() - c - e,
                n = this.Bb() - d - h;
            0 < k && 0 < n && this.bi(this.Ce(c, d, k, n), e, h)
        }
    };
    K.Zu = function (a, b, c, d, e, h, k, n, u, y, C) {
        d = l.min(d, a.ja() - b, this.ja() - h);
        e = l.min(e, a.Bb() - c, this.Bb() - k);
        n && (d = l.min(d, n.ja() - u), e = l.min(e, n.Bb() - y));
        if (!(0 >= d || 0 >= e)) {
            var J;
            n && n.td ? (J = wk(d, e), J[bf](a.m[Qd], -b, -c), Ra(J, "destination-in"), J[bf](n.m[Qd], -u, -y), c = b = 0, a = !0) : (J = a.m, a = a.td);
            !a || !C && this.td ? this.m.putImageData(J.getImageData(b, c, d, e), h, k) : this.m[bf](J[Qd], b, c, d, e, h, k, d, e);
            this.Sh()
        }
    };
    var yk = function (a, b, c) {
        ok[I](this, b, vk, c);
        this.Pb = a;
        this.yq = "auto";
        this.zq = !1
    };
    N(yk, ok);
    K = yk[H];
    K.yb = function () {
        return l.max(1, yk.i.yb[I](this))
    };
    K.Gv = function (a) {
        a !== this.Pb && (this.Pb && this.Pb.Ro(this), (this.Pb = a) && this.Pb.bp(this), this.Wp())
    };
    K.Wp = function () {
        this.r(262144)
    };
    K.ea = function (a, b) {
        yk.i.ea[I](this, a, b);
        this.Pb && this.Pb.bp(this)
    };
    K.g = function () {
        yk.i.g[I](this);
        this.Pb && this.Pb.Ro(this)
    };
    K.Pd = function () {
        var a = this.Pb,
            b = a ? 20 * a.ja() : 0,
            a = a ? 20 * a.Bb() : 0;
        return new ck(new yi(0, 0, b, a))
    };
    var zk = function (a, b, c, d) {
        uk[I](this, b, a, c, d);
        this.We = new ik
    };
    N(zk, uk);
    K = zk[H];
    K.ea = function () {
        zk.i.ea[I](this);
        this.Ye(this.C, 1);
        this.Ye(this.We, 8);
        this.cg();
        for (var a = 0; a < this[t][We][G]; a++) {
            var b = this[t][We][a];
            this.nn(b[ie], b.key, b[We])
        }
        for (a = 0; a < this[t][Be][G]; a++) b = this[t][Be][a], this.Bs(b[ie], b[wc])
    };
    K.g = function () {
        zk.i.g[I](this);
        this.We.g()
    };
    K.Pd = function () {
        var a = zk.i.Pd[I](this);
        this.We[xc](function (b) {
            var c = b.Ta().$g().J();
            c.u(b.P());
            a.Tn(c, !1)
        });
        return a
    };
    K.Eb = function (a) {
        a != this.xc && (this.Ye(this.C, a, this.xc), this.a.Jf = !0);
        zk.i.Eb[I](this, a)
    };
    K.rd = function () {
        return zk.i.rd[I](this) && this.oh
    };
    K.trackAsMenu = function () {
        return this[t][Gd]
    };
    K.Ye = function (a, b, c) {
        this.r(16);
        var d = this[t][ef];
        if (d) {
            if (L(c))
                for (var e = 0; e < d[G]; e++) {
                    var h = d[e],
                        k = h[zc] & c,
                        n = h[zc] & b;
                    k && !n && a.qn(h[Cc])
                }
            for (e = 0; e < d[G]; e++)
                if (h = d[e], k = h[zc] & c, (n = h[zc] & b) && !k && (k = this.Sf + "." + h[t].id[Sc](36), h[t].tk() && (k = h[t].get().Rc(this.a, k)))) k.sa() && 8 != b && k.Ub(this.a.kh()), k.Xf(this), k.ea(), a.wk(k, h[Cc]), h[Ef] && k[hc](h[Ef]), h[vf] && k.Qf(h[vf]), h[Ce] && k.gh(h[Ce]), h.tn && k.qc(h.tn)
        }
    };
    K.Db = function () {
        return !0
    };
    var Ak = function (a, b, c, d) {
        zk[I](this, a, b, c, d);
        this.Xc = {}
    };
    N(Ak, zk);
    Ak[H].ea = function () {
        Ak.i.ea[I](this);
        this.Ye(this.C, 1);
        this.Ye(this.We, 8)
    };
    Ak[H].g = function () {
        Ak.i.g[I](this)
    };
    Ak[H].$j = function (a, b) {
        b.Xf(this);
        this.Xc[a] = b;
        a != this.xc && 8 != a || this.Ye(8 == a ? this.We : this.C, a)
    };
    Ak[H].Ye = function (a, b) {
        var c = this.Xc[b];
        c != a.Qc(1) && (a.qn(1), c && a.wk(c, 1), this.r(16))
    };
    var Bk = function () {
        this.Sa = null;
        sb(this, null);
        ib(this, null);
        this.nf = !1;
        ab(this, null);
        hb(this, null);
        Ma(this, null);
        this.url = this.kb = null;
        Ab(this, null);
        bb(this, null);
        Da(this, null);
        $a(this, null);
        qa(this, null);
        this.eb = null;
        qb(this, null)
    };
    K = Bk[H];
    K.mu = function (a) {
        ib(this, a);
        this.nf = !0
    };
    K.oj = function (a) {
        this.nf = a.nf;
        null != a[re] && (ib(this, a[re]), this.nf = !0);
        sb(this, null != a[Te] ? a[Te] : this[Te]);
        ab(this, null != a[Vd] ? a[Vd] : this[Vd]);
        hb(this, null != a[le] ? a[le] : this[le]);
        Ma(this, null != a[bd] ? a[bd] : this[bd]);
        this.kb = null != a.kb ? a.kb : this.kb;
        this.Sa = null != a.Sa ? a.Sa : this.Sa;
        Ab(this, null != a[jf] ? a[jf] : this[jf]);
        this.url = null != a.url ? a.url : this.url;
        bb(this, null != a[Wd] ? a[Wd] : this[Wd]);
        Da(this, null != a[Hc] ? a[Hc] : this[Hc]);
        $a(this, null != a[Sd] ? a[Sd] : this[Sd]);
        qa(this, null != a[Zb] ? a[Zb] : this[Zb]);
        this.eb =
            null != a.eb ? a.eb : this.eb;
        qb(this, null != a[Me] ? a[Me] : this[Me])
    };
    K.mf = function () {
        return !!this[Vd] && this[Vd] instanceof Ck
    };
    K.Hi = function () {
        return !!this[Vd] && this[Vd] instanceof Ck && (0 < this[Vd][pd][G] || this[Vd] == Dk)
    };
    K.J = function () {
        var a = new Bk;
        sb(a, this[Te]);
        ib(a, this[re]);
        ab(a, this[Vd]);
        hb(a, this[le]);
        Ma(a, this[bd]);
        a.kb = this.kb;
        a.nf = this.nf;
        a.Sa = this.Sa;
        a.url = this.url;
        Ab(a, this[jf]);
        bb(a, this[Wd]);
        Da(a, this[Hc]);
        $a(a, this[Sd]);
        qa(a, this[Zb]);
        a.eb = this.eb;
        qb(a, this[Me]);
        return a
    };
    var Ek = function (a) {
        var b = new Bk;
        sb(b, !1);
        hb(b, !1);
        b.kb = !1;
        ab(b, "Arial");
        ib(b, 0);
        Ma(b, null);
        bb(b, 0);
        Da(b, 0);
        $a(b, 0);
        qa(b, 0);
        b.Sa = 0;
        b.eb = !1;
        qb(b, 0);
        L(a) && (ib(b, L(a[re]) ? 16777215 & a[re] : b[re]), Ma(b, L(a[Rd]) ? a[Rd] / 20 : b[bd]), bb(b, L(a[Wd]) ? a[Wd] : b[Wd]), b.Sa = L(a[yf]) ? a[yf] : 0, Da(b, L(a[Hc]) ? a[Hc] : b[Hc]), $a(b, L(a[Sd]) ? a[Sd] : b[Sd]), qa(b, L(a[Zb]) ? a[Zb] : b[Zb]), b.eb = L(a.eb) ? a.eb : b.eb, qb(b, L(a[Me]) ? a[Me] : b[Me]));
        return b
    };
    Bk[H].Zs = function (a) {
        sb(this, this[Te] == a[Te] ? this[Te] : null);
        ib(this, this[re] == a[re] ? this[re] : null);
        ab(this, this[Vd] == a[Vd] ? this[Vd] : null);
        hb(this, this[le] == a[le] ? this[le] : null);
        Ma(this, this[bd] == a[bd] ? this[bd] : null);
        this.kb = this.kb == a.kb ? this.kb : null;
        this.Sa = this.Sa == a.Sa ? this.Sa : null;
        this.url = this.url == a.url ? this.url : null;
        Ab(this, this[jf] == a[jf] ? this[jf] : null);
        this.eb = this.eb == a.eb ? this.eb : null;
        bb(this, this[Wd] == a[Wd] ? this[Wd] : null);
        Da(this, this[Hc] == a[Hc] ? this[Hc] : null);
        $a(this, this[Sd] == a[Sd] ?
            this[Sd] : null);
        qa(this, this[Zb] == a[Zb] ? this[Zb] : null);
        qb(this, this[Me] == a[Me] ? this[Me] : null)
    };
    var Gk = function (a) {
        var b = new Bk;
        if (!a) return b;
        b.Sa = Fk(a[yf]);
        sb(b, a[Te]);
        L(a[re]) && ib(b, 16777215 & a[re]);
        ab(b, a[Vd]);
        hb(b, a[le]);
        Ma(b, a[bd]);
        b.kb = a.underline;
        b.url = a.url;
        Ab(b, a[jf]);
        b.eb = a.kerning;
        L(a[Wd]) && bb(b, 20 * a[Wd]);
        L(a[Hc]) && Da(b, 20 * a[Hc]);
        L(a[Sd]) && $a(b, 20 * a[Sd]);
        L(a[Zb]) && qa(b, 20 * a[Zb]);
        L(a[Me]) && qb(b, 20 * a[Me]);
        return b
    };
    Bk[H].Oq = function () {
        var a = new Hk;
        a.align = Ik(this.Sa);
        sb(a, this[Te]);
        ib(a, this[re]);
        ab(a, this[Vd]);
        hb(a, this[le]);
        Ma(a, this[bd]);
        a.underline = this.kb;
        a.url = this.url;
        Ab(a, this[jf]);
        a.kerning = this.eb;
        L(this[Wd]) && bb(a, this[Wd] / 20);
        L(this[Hc]) && Da(a, this[Hc] / 20);
        L(this[Sd]) && $a(a, this[Sd] / 20);
        L(this[Zb]) && qa(a, this[Zb] / 20);
        L(this[Me]) && qb(a, this[Me] / 20);
        return a
    };
    var Jk = function (a) {
        var b = new Bk;
        if (!a) return b;
        b.Sa = Fk(a[yf]);
        b.at = a.blockIndent;
        sb(b, a[Te]);
        b.bt = a.bullet;
        ib(b, a[re]);
        ab(b, a[Vd]);
        L(a[Wd]) && bb(b, 20 * a[Wd]);
        hb(b, a[le]);
        b.eb = a.kerning;
        L(a[Sd]) && $a(b, 20 * a[Sd]);
        L(a[Zb]) && qa(b, 20 * a[Zb]);
        L(a[Hc]) && Da(b, 20 * a[Hc]);
        Ma(b, a[bd]);
        b.ct = a.tabStops;
        Ab(b, a[jf]);
        b.kb = a.underline;
        b.url = a.url;
        L(a[Me]) && qb(b, 20 * a[Me]);
        return b
    };
    Bk[H].Pq = function () {
        var a = new Kk;
        a.align = Ik(this.Sa);
        a.blockIndent = this.at;
        sb(a, this[Te]);
        a.bullet = this.bt;
        ib(a, this[re]);
        ab(a, this[Vd]);
        L(this[Wd]) && bb(a, this[Wd] / 20);
        hb(a, this[le]);
        a.kerning = this.eb;
        L(this[Zb]) && qa(a, this[Zb] / 20);
        L(this[Sd]) && $a(a, this[Sd] / 20);
        L(this[Sd]) && $a(a, this[Sd] / 20);
        L(this[Me]) && qb(a, this[Me] / 20);
        L(this[Hc]) && Da(a, this[Hc] / 20);
        Ma(a, this[bd]);
        a.tabStops = this.ct;
        Ab(a, this[jf]);
        a.underline = this.kb;
        a.url = this.url;
        return a
    };
    var Ik = function (a) {
        switch (a) {
        case 2:
            return "center";
        case 1:
            return "right";
        case 3:
            return "justify"
        }
        return "left"
    }, Fk = function (a) {
            switch (a) {
            case "center":
                return 2;
            case "right":
                return 1;
            case "justify":
                return 3
            }
            return 0
        };
    Bk[H].Yk = function () {
        return null != this[bd] ? this[bd] : 12
    };
    Bk[H].Vk = function () {
        var a = this.mf() ? this[Vd][F] : this[Vd];
        return "_sans" == a ? "Arial, Helvetica, sans-serif" : "_serif" == a ? "Times, serif" : "_typewriter" == a ? "monospace" : a + ", sans-serif"
    };
    var Lk = function (a, b, c, d) {
        sk[I](this, b, a, c, d);
        this.pl = "normal";
        this.Uf = a.autoSize;
        this.no = a.border;
        this.ql = 16777215;
        this.ah = a.border;
        this.sl = 0;
        this.oo = !1;
        this.tl = a.editable;
        this.Tf = a.en;
        this.po = "pixel";
        this.Wb = a.html;
        this.qo = a.maxChars;
        this.kg = a[md];
        this.zh = !1;
        this.ro = a.password;
        this.gs = null;
        this.ul = a.selectable;
        this.so = 0;
        this.af = a[re];
        this.uo = 0;
        this.Fh = a.wrap;
        this.sd = Ek(a);
        this.Ob = [];
        this.Ab = [];
        this.Cd = a[Lc].J();
        L(this.qd) || (b = a[ce], this.ge(L(b) ? b : ""));
        this.Mn = !0;
        this.ag = a[Xe]
    };
    N(Lk, sk);
    K = Lk[H];
    K.Pd = function () {
        var a = this.Cd;
        if ("none" != this.Uf) {
            var b = new yi(a.c, a.d, a.c + this.No(), a.d + this.Mo());
            b.dd(a);
            a = b
        }
        return new ck(a)
    };
    K.ge = function (a) {
        this.Mn && this.Wb && this.af != this[t][re] && (this.r(64), this.af = this[t][re]);
        if (this.zh || this.qd != a) this.fp(a), this.zh = !1
    };
    K.ej = function (a) {
        this.Mn = a
    };
    K.ku = function (a) {
        this.Wb != a && (this.r(64), this.Wb = a)
    };
    K.sr = function (a) {
        this.af = 16777215 & a | this.af & 4278190080;
        a = new Bk;
        a.mu(this.af);
        this.Uj(a)
    };
    K.$q = function () {
        return this.af & 16777215
    };
    K.hr = function (a) {
        this.pl = a
    };
    K.Wm = function (a) {
        this.no = a
    };
    K.Fv = function (a) {
        this.ql = 16777215 & a | this.ql & 4278190080
    };
    K.ev = function () {
        return this.ql & 16777215
    };
    K.jr = function (a) {
        this.ah = a;
        this.r(128)
    };
    K.Hv = function (a) {
        this.sl = 16777215 & a | this.sl & 4278190080
    };
    K.fv = function () {
        return this.sl & 16777215
    };
    K.Iv = function (a) {
        this.oo = a
    };
    K.mr = function (a) {
        this.Tf = a;
        this.fp(this.qd)
    };
    K.Lv = function (a) {
        this.po = a
    };
    K.Mv = function (a) {
        this.qo = a
    };
    K.nr = function (a) {
        this.kg != a && (this.zh = !0);
        this.kg = a;
        this.Ab = this.$f(this.Ob)
    };
    K.Qv = function (a) {
        this.ro = a
    };
    K.Uv = function (a) {
        this.Hw = a
    };
    K.Wv = function (a) {
        this.so = a
    };
    K.Xv = function (a) {
        this.uo = a
    };
    K.oe = function () {
        return this.ag
    };
    K.$i = function (a) {
        this.ag && this.a.$().Lk(this.ag, this);
        (this.ag = a) && this.a.$().Ok(this.ag, this, this[t][ce])
    };
    K.tr = function (a) {
        this.Fh != a && (this.zh = !0);
        this.Fh = a;
        this.Ab = this.$f(this.Ob)
    };
    K.ir = function (a) {
        this.r(32);
        this.Uf = a;
        this.Nb()
    };
    K.qr = function (a) {
        this.ul = a
    };
    K.Xm = function (a) {
        this.tl = a
    };
    K.Nq = function (a, b) {
        L(a) ? L(b) || (b = a + 1) : (a = 0, b = this.qd[G]);
        for (var c = null, d = 0, e, h = 0; h < this.Ob[G]; h++)
            for (var k = this.Ob[h], n = 0; n < k[G]; n++) {
                var u = k[n];
                e = d + u[ce][G] - 1;
                d < b && e >= a && (c ? c.Zs(u[v]) : c = u[v].J());
                d = e + 1
            }
        ab(c, c.mf() ? c[Vd][F] : c[Vd]);
        return c
    };
    K.Mq = function () {
        var a = new Bk;
        a.oj(this.sd);
        return a
    };
    K.Uj = function (a, b, c) {
        L(b) ? L(c) || (c = b + 1) : (b = 0, c = this.qd[G]);
        for (var d = 0, e, h = 0; h < this.Ob[G]; h++)
            for (var k = this.Ob[h], n = 0; n < k[G]; n++) {
                var u = k[n];
                e = d + u[ce][G] - 1;
                if (d < c && e >= b) {
                    var y = l.max(d, b) - d,
                        d = l.min(e + 1, c) - d;
                    if (0 < y) {
                        var C = u.Mh(u[ce][rf](0, y));
                        k[Af](n, 0, C);
                        n++
                    }
                    d < u[ce][G] && (C = u.Mh(u[ce][rf](d)), k[Af](n + 1, 0, C));
                    db(u, u[ce][rf](y, d));
                    null != a[re] && ib(a, 4278190080 | a[re]);
                    !this.Tf && u[v].Hi() && ab(a, u[v][Vd]);
                    u[v].oj(a);
                    u.Dh(this.xl())
                }
                d = e + 1
            }
        this.Ab = this.$f(this.Ob);
        this.r(128)
    };
    K.or = function (a) {
        this.zh = !0;
        this.sd.oj(a)
    };
    K.ea = function () {
        Lk.i.ea[I](this);
        this[t][Xe] && this.a.$().Ok(this[t][Xe], this, this[t][ce])
    };
    K.g = function () {
        Lk.i.g[I](this);
        this[t][Xe] && this.a.$().Lk(this[t][Xe], this)
    };
    K.sa = function () {
        return this[t].sa
    };
    K.fp = function (a) {
        this.r(32);
        "none" != this.Uf && this.Nb();
        this.qd = a;
        this.Ob = [];
        this.Wb || (a = Mk(a));
        this.Gs(a, this.kg);
        for (a = 0; a < this.Ob[G]; a++)
            for (var b = 0; b < this.Ob[a][G]; b++) this.Ob[a][b].uh = a
    };
    K.Gs = function (a, b) {
        var c = new Nk;
        c.format = Ek(this[t]);
        if (this.Tf && this[t][Vd]) {
            var d = this[t][Vd].get();
            d instanceof Ck && ab(c[v], d)
        } else this[t][Vd] && (d = this[t][Vd].get(), d instanceof Ck && ab(c[v], d[F]));
        ib(c[v], this.af | 0);
        c[v].mf() && (d = c[v][Vd], hb(c[v], d[le]), sb(c[v], d[Te]));
        this.Wb && this.sd && (hb(c[v], !! this.sd[le]), sb(c[v], !! this.sd[Te]), Ma(c[v], this.sd[bd]), c[v].Sa = this.sd.Sa, bb(c[v], this.sd[Wd]), d = this.sd[re], ib(c[v], this.sd.nf ? 4278190080 | d : c[v][re]));
        var d = new Ok(c, this.xl(), b),
            e = a[Wb](/(&nbsp;)+/g,
                "&nbsp;")[Wb](/\r\n|\r|\n/g, "<br/>");
        c.Dh(this.xl());
        c = g[sc]("div");
        c.innerHTML = e;
        for (e = 0; e < c[Fc][G]; e++) Pk(c[Fc][e], d);
        this.Ob = d.Gl;
        this.Ab = this.$f(this.Ob)
    };
    K.$f = function (a) {
        a = a[ee]();
        if (!this.kg && !this.Wb) {
            var b = [];
            b[D](m[H][bc][B]([], a));
            a = b
        }
        this.Fh && (a = this.Bt(a, this.Cd));
        return a
    };
    K.ao = function (a, b) {
        var c = a.F - a.c - 80;
        b && (c -= b[Sd] + b[Hc], L(b[Wd]) && (c -= b[Wd]));
        return c
    };
    K.Bt = function (a, b) {
        var c = [],
            d = 0;
        c[d] = [];
        for (var e = 0; e < a[G]; e++) {
            for (var h = a[e], k = this.ao(b, 0 < h[G] ? h[0][v] : null), n = 0, u = 0; u < h[G]; u++)
                for (var y = h[u].ut(n, k), C = 0; C < y[G]; C++) {
                    var J = h[u].Mh(y[C]);
                    J.Wk = C == y[G] - 1;
                    c[d][D](J);
                    C == y[G] - 1 ? n += J.ja() : (d++, c[d] = [])
                }
            d++;
            c[d] = []
        }
        0 == c[d][G] && c.pop();
        return c
    };
    K.gv = function (a) {
        if (0 <= a && a < this.Ab[G]) {
            a = this.Ab[a];
            for (var b = "", c = 0; c < a[G]; c++) b += a[0][ce];
            return b[Wb](/\n/, "")
        }
        return null
    };
    K.nk = function (a, b) {
        for (var c = this.Cd, d = 0, e = -1, h = 0, k = 0; k < a[G]; k++) {
            var n = a[k],
                u = 0 < n[G] ? n[0][v] : null;
            0 == k && u && (h = u[Zb] | 0, d = c.d + 40 - 0.5 * h, 0 > h ? d = c.d : 0 > d && (d = c.d + 40));
            for (var y = c.c + 40 + (u ? u[Sd] : 0), C = this.ao(c, u), J = 0, V = 0; V < n[G]; V++) J += n[V].ja();
            if (u && L(u[Wd])) switch (0 < n[G] && n[0].uh > e ? (y += u[Wd], e = n[0].uh) : C += u[Wd], u.Sa) {
            case 2:
                y += (C - J) / 2;
                break;
            case 1:
                y += C - J
            }
            for (var u = 0, J = Qk(n), va = Rk(n), V = 0; V < n[G]; V++)
                if (n[V][ce][G]) {
                    var Vb = 0,
                        u = u + n[V].ja();
                    !n[n[G] - 1].Wk && 3 == n[V][v].Sa && k < a[G] - 1 && (Vb = (n[V][ce][lc](/ /g) || [])[G],
                        Vb = (C - n[V].ja()) / Vb);
                    c[Ub](c.c, d + J * va);
                    b.Ci(n[V], y, d, va, Vb);
                    y += n[V].ja()
                }
            d += J * va + h;
            if ("none" == this.Uf && d + J * va > c.D) break
        }
    };
    K.xl = function () {
        return this.Tf ? this.a.tc : null
    };
    K.Dm = function (a) {
        0 <= a && (this.Cd.F = this.Cd.c + 20 * a, this.Nb(), this.Ab = this.$f(this.Ob), this.r(128))
    };
    K.Cm = function (a) {
        0 <= a && (this.Cd.D = this.Cd.d + 20 * a, this.Nb(), this.Ab = this.$f(this.Ob), this.r(128))
    };
    var Nk = function () {
        db(this, "");
        this.format = Ek();
        this.uh = 0;
        this.Wk = !1
    };
    K = Nk[H];
    K.Mh = function (a) {
        var b = this.sq();
        db(b, a);
        return b
    };
    K.Dh = function (a, b) {
        !L(b) && this[v].mf() && (b = this[v][Vd][F]);
        if (a) {
            if (!L(b) && L(this[v][Vd]) && (b = q(this[v][Vd])), !this[v].mf() || b != this[v][Vd][F] || !! this[v][le] != !! this[v][Vd][le] || !! this[v][Te] != !! this[v][Vd][Te]) {
                var c = Dk;
                if (L(b) && a && a[b])
                    for (var d = a[b], e = 0; e < d[G]; ++e) {
                        if ( !! this[v][le] == !! d[e][le] && !! this[v][Te] == !! d[e][Te]) {
                            ab(this[v], d[e]);
                            return
                        }
                        c == Dk && (c = d[e])
                    }
                ab(this[v], c)
            }
        } else b && ab(this[v], b)
    };
    K.sq = function () {
        var a = new Nk;
        a[v].oj(this[v]);
        a.uh = this.uh;
        return a
    };
    K.ja = function (a) {
        L(a) || (a = this[ce]);
        if (this[v].Hi()) {
            for (var b = 0, c = 0; c < a[G]; c++) {
                var d = this[v][Vd].Bj(a[cc](c));
                L(d) && (b += d[sf] ? d[sf] : 0)
            }
            b = b * this[v][bd] * 20 / this[v][Vd][Jc] | 0;
            return b += this[v][Me] * a[G] | 0
        }
        return this.qu(a)
    };
    K.qu = function (a) {
        var b = g[sc]("div");
        b[r](g.createTextNode(a));
        Ka(b[A], "absolute");
        na(b[A], "auto");
        b[A].fontSize = 20 * this[v][bd] + "px";
        this[v].mf() ? (b[A].fontFamily = "'" + this[v][Vd][F] + "'", b[A].fontWeight = this[v][Vd][Te] ? "bold" : "normal", b[A].fontStyle = this[v][Vd][le] ? "italic" : "normal") : (b[A].fontFamily = this[v].Vk(), b[A].fontWeight = this[Te] ? "bold" : "normal", b[A].fontStyle = this[v][le] ? "italic" : "normal");
        b[A].whiteSpace = "nowrap";
        g[gf][r](b);
        a = b.clientWidth;
        hh(b);
        return a
    };
    K.ut = function (a, b) {
        for (var c = [], d = 0, e = c[0] = "", h = 0, k = this[ce][hd](" "), n = 0; n < k[G]; n++)
            if (!(0 < d && 0 == a && "" == k[n])) {
                k[n] = k[n][Wb](/&nbsp;/g, " ");
                var u = this.ja(k[n]);
                a + h + u > b ? u < b && 0 < n ? (d++, a = u, c[d] = k[n]) : (d || c[d] ? a = 0 : c.pop(), this.pq(k[n], b, a, c), d = c[G] - 1, a = this.ja(c[d])) : (c[d] = c[d] + e + k[n], a += h + u);
                0 == n && (e = " ", h = this.ja("a a") - this.ja("aa"))
            }
        return c
    };
    K.pq = function (a, b, c, d) {
        for (var e = 1, h = a[G]; h > e;) {
            var k = e + (h - e) / 2,
                k = l[Yb](k);
            this.ja(a[rf](0, k)) <= b - c ? e = k : h = k - 1
        }
        d[D](a[rf](0, e));
        e <= a[G] - 1 && this.pq(a[rf](e), b, 0, d)
    };
    K.Nu = function (a, b, c) {
        var d = this[ce],
            e = 20 * this[v][bd],
            h = [];
        h[D](b);
        if (a instanceof Ck && a[pd][G])
            for (var k = 1; k < d[G]; k++) {
                var n = a.Bj(d[cc](k - 1)),
                    u = 0;
                L(n) && L(n[sf]) && (u += n[sf], b += u * e / a[Jc], this[v] && (b += this[v][Me] | 0), h[D](b), " " == d[cc](k) && (b += c))
            }
        return h
    };
    K.dl = function (a, b, c, d) {
        var e = this[v][Vd],
            h = new Ai;
        e instanceof Ck && e[Mb] && e[Jc] && (a = this.Nu(e, a, d), h = this.Lu(a, b + c * e[Mb] / e[Jc], d));
        return h
    };
    K.Lu = function (a, b) {
        for (var c = new Ai, d = this[ce], e = this[v][Vd], h = 20 * this[v][bd] / e[Jc], k = 0, n = 0; n < d[G] && k < a[G]; n++) {
            var u = e.yp(d[cc](n));
            if (u) {
                var y;
                y = new si(h, 0, 0, h, a[k], b);
                u = u.u(y);
                c = c[bc](u);
                this[v].kb && (u = e.Bj(d[cc](n))[sf], u += this[v][Me] | 0, u = new Ai([0, 0, e[Ue] / 2, 1, u, e[Ue] / 2, 1, u, e[Ue] / 2 + 400, 1, 0, e[Ue] / 2 + 400, 3]), u = u.u(y), c = c[bc](u));
                k++
            }
        }
        return c
    };
    var Sk = function (a, b) {
        return a[Wb](/<[^>]+>|&[^;]+;/g, function (a) {
            switch (a) {
            case "&amp;":
                return "&";
            case "&lt;":
                return "<";
            case "&gt;":
                return ">";
            case "&quot;":
                return '"';
            case "&apos;":
                return "'";
            case "&nbsp;":
                return " ";
            case "</p>":
            case "<br>":
            case "<br/>":
                return b ? "\n" : ""
            }
            return ""
        })
    }, Tk = function (a) {
            return a[Wb](/[<>&]/g, function (a) {
                switch (a) {
                case "&":
                    return "&amp;";
                case "<":
                    return "&lt;";
                case ">":
                    return "&gt;"
                }
                return a
            })
        }, Mk = function (a) {
            return a[Wb](/[&<>"'\u02c6\u02dc]/g, function (a) {
                switch (a) {
                case "&":
                    return "&amp;";
                case "<":
                    return "&lt;";
                case ">":
                    return "&gt;";
                case "'":
                    return "&apos;";
                case '"':
                    return "&quot;";
                case "\u02c6":
                    return "&#710;";
                case "\u02dc":
                    return "&#732;"
                }
                return a
            })
        }, Uk = function (a) {
            for (var b = /\s*<p(?: [^>]*)?>.*?<\/p>\s*/ig, c = 0, d = b[Sb](a), e = ""; d;) d[cd] > c && (e += "<p>" + a[rf](c, d[cd]) + "</p>"), e += d[0], c = b.lastIndex, d = b[Sb](a);
            a[G] > c && (e += "<p>" + a[rf](c) + "</p>");
            return e
        }, Pk = function (a, b) {
            switch (a[ge]) {
            case Node.ELEMENT_NODE:
                var c = a[te][Gf]();
                b.Eu(c, a);
                for (var d = 0; d < a[Fc][G]; d++) Pk(a[Fc][d], b);
                b.Du(c);
                break;
            case Node.TEXT_NODE:
                b.Cu(a[s])
            }
        };
    Lk[H].Mo = function () {
        for (var a = 0, b = 0; b < this.Ab[G]; b++) var c = this.Ab[b],
        d = Rk(c), c = Qk(c), a = a + c * d;
        0 < a && (a += 40);
        return a
    };
    var Rk = function (a) {
        for (var b = 0, c = 0; c < a[G]; c++) b = l.max(b, 20 * a[c][v].Yk());
        return b
    }, Qk = function (a) {
            for (var b = 1, c = 0; c < a[G]; c++) b = a[c][v].mf() && a[c][v][Vd].lineHeight ? l.max(b, a[c][v][Vd].lineHeight) : l.max(b, 1.14);
            return b
        }, Vk = function (a) {
            switch (a) {
            case "left":
                return 0;
            case "center":
                return 2;
            case "right":
                return 1;
            case "justify":
                return 3;
            default:
                return 0
            }
        };
    Lk[H].No = function () {
        for (var a = 0, b = 0; b < this.Ab[G]; b++) {
            for (var c = 0, d = this.Ab[b], e = 0; e < d[G]; e++) c += d[e].ja(d[e][ce]);
            a = l.max(a, c)
        }
        return a
    };
    var Ok = function (a, b, c) {
        this.Qg = [];
        this.Hb = a;
        this.yd = [];
        this.Gl = [];
        this.Gl[D](this.yd);
        this.tc = b;
        this.multiline = c
    };
    K = Ok[H];
    K.Ng = function (a) {
        this.Qg[D](this.Hb.sq());
        this.Qg[D](a)
    };
    K.Ku = function (a) {
        this.Qg[this.Qg[G] - 1] == a && (this.Qg.pop(), this.Hb = this.Qg.pop())
    };
    K.Eu = function (a, b) {
        switch (a) {
        case "p":
            this.Ng(a);
            var c = b[mf]("align");
            c && (this.Hb[v].Sa = Vk(c));
            break;
        case "b":
            this.Ng(a);
            sb(this.Hb[v], !0);
            this.Hb.Dh(this.tc);
            break;
        case "i":
            this.Ng(a);
            hb(this.Hb[v], !0);
            this.Hb.Dh(this.tc);
            break;
        case "u":
            this.Ng(a);
            this.Hb[v].kb = !0;
            break;
        case "a":
            this.Ng(a);
            if (c = b[mf]("href")) this.Hb[v].url = c;
            if (c = b[mf]("target")) this.Hb[v].ep = c;
            break;
        case "br":
        case "sbr":
            this.ip();
            break;
        case "font":
            this.Ng(a), (c = b[mf]("color")) && ib(this.Hb[v], Mi(c)), (c = b[mf]("face")) && this.Hb.Dh(this.tc,
                c), (c = b[mf]("size")) && Ma(this.Hb[v], c), (c = b[mf]("letterspacing")) && qb(this.Hb[v], 20 * c)
        }
    };
    K.Du = function (a) {
        switch (a) {
        case "p":
            this[md] && this.ip()
        }
        this.Ku(a)
    };
    K.ip = function () {
        if (this.yd[G]) {
            var a = this.yd[G];
            a && (this.yd[a - 1].Wk = !0);
            do {
                a--;
                var b = this.yd[a];
                db(b, b[ce][Wb](/\s+$/g, ""))
            } while (0 < a && !this.yd[a][ce][G])
        } else this.yd[D](this.Hb.Mh(""));
        this.yd = [];
        this.Gl[D](this.yd)
    };
    K.Cu = function (a) {
        this.yd[D](this.Hb.Mh(a))
    };
    Lk[H].Db = function () {
        return !1
    };
    var Wk = function (a, b, c) {
        ok[I](this, b, a, c)
    };
    N(Wk, ok);
    K = Wk[H];
    K.Pd = function () {
        return this[t].Pd(this.Va())
    };
    K.Ii = function (a) {
        a != this.Va() && (this.r(512), this.Nb());
        Wk.i.Ii[I](this, a)
    };
    K.Db = function () {
        for (var a = this[t][rc], b = 0; b < a[G]; b++)
            if (!a[b].Db) return !1;
        return !0
    };
    K.Ht = function (a, b) {
        var c = this.na(),
            d = c.Bd(),
            c = c.ae();
        return d >= a && d <= b && c >= a && c <= b
    };
    K.Fl = function () {
        return Kg && null != this[t].yi && this.zb().Ld(wi) && this.Ht(0.2, 1)
    };
    var Yk = function (a, b) {
        ok[I](this, a, new Xk(-1, [], null, [], []), b);
        this.clear();
        this.Jh = this.yg = null;
        this.Ka()
    };
    N(Yk, Wk);
    Yk[H].fb = function (a, b) {
        this[a][B](this, b)
    };
    Yk[H].duplicate = function () {
        var a = new Yk(this.a);
        sa(a, vg(this[t]));
        return a
    };
    Ca(Yk[H], function () {
        this[t].fillstyles = [];
        this[t].linestyles = [];
        this[t].paths = [];
        this.ud = this.vd = this.se = this.te = 0;
        this.r(1024);
        this.Nb()
    });
    Yk[H].Af = function (a) {
        var b = this.yg,
            c = this.Jh,
            d;
        c && (d = c);
        b && b != c && (d = b);
        if (d) {
            b = d[s][ke].ca;
            for (c = 0; c < a[G]; c++) b[D](a[c]);
            this.r(1024);
            this.Nb()
        }
    };
    Yk[H].moveTo = function (a, b) {
        L(a) && L(b) && (a *= 20, b *= 20, this.Af([0, a, b]), this.ud = a, this.vd = b, this.se = a, this.te = b)
    };
    Yk[H].lineTo = function (a, b) {
        L(a) && L(b) && (a *= 20, b *= 20, a != this.ud || b != this.vd || this.Jh ? this.Af([1, a, b]) : this.Af([3]), this.se = a, this.te = b)
    };
    Yk[H].curveTo = function (a, b, c, d) {
        L(c) && L(d) && L(a) && L(b) && (c *= 20, d *= 20, this.Af([2, 20 * a, 20 * b, c, d]), this.se = c, this.te = d)
    };
    Yk[H].drawRect = function (a, b, c, d) {
        L(a) && L(b) && L(c) && L(d) && (a *= 20, b *= 20, c *= 20, d *= 20, this.Af([0, a, b, 1, a, b + d, 1, a + c, b + d, 1, a + c, b, 1, a, b]), this.ud = this.se = a, this.vd = this.te = b)
    };
    var Zk = l[Fe](2);
    Yk[H].drawEllipse = function (a, b, c, d) {
        if (L(a) && L(b) && L(c) && L(d)) {
            a *= 20;
            b *= 20;
            c *= 20;
            d *= 20;
            var e = c / Zk,
                h = d / Zk,
                k = c * (Zk - 1),
                n = d * (Zk - 1);
            this.Af([0, a + c, b, 2, a + c, b + n, a + e, b + h, 2, a + k, b + d, a, b + d, 2, a - k, b + d, a - e, b + h, 2, a - c, b + n, a - c, b, 2, a - c, b - n, a - e, b - h, 2, a - k, b - d, a, b - d, 2, a + k, b - d, a + e, b - h, 2, a + c, b - n, a + c, b]);
            this.ud = this.se = a + c;
            this.vd = this.te = b
        }
    };
    Yk[H].drawRoundRect = function (a, b, c, d, e, h) {
        L(a) && L(b) && L(c) && L(d) && L(e) && L(h) && (e && h ? (e > c && (e = c), h > d && (h = d)) : e = h = 0, a *= 20, b *= 20, c *= 20, d *= 20, e *= 10, h *= 10, this.Af([0, a + c, b + d - h, 2, a + c, b + d, a + c - e, b + d, 1, a + e, b + d, 2, a, b + d, a, b + d - h, 1, a, b + h, 2, a, b, a + e, b, 1, a + c - e, b, 2, a + c, b, a + c, b + h, 1, a + c, b + d - h]), this.ud = this.se = a + c, this.vd = this.te = b + d - h)
    };
    Yk[H].Qh = function (a, b, c, d) {
        var e = this[t][Fd],
            h = e[e[G] - 1];
        a = new $k(new vj(new Ai([0, a, b])), d, c);
        h && h[s][ke].Ua() ? e[e[G] - 1] = a : e[D](a);
        return a
    };
    Yk[H].yv = function (a) {
        var b = this.yg,
            c = this.Jh;
        if (c) {
            if (c[s][ke].Ua()) {
                b = c;
                b.line = a;
                this.yg = b;
                return
            }
            b == c && (b = this.Qh(0, 0, c[kf], void 0), pa(b, c[s]), delete c[kf])
        }
        this.yg = b = L(a) ? this.Qh(this.se, this.te, a, void 0) : null
    };
    Yk[H].Vm = function (a) {
        var b = this.Jh;
        b && b[s][ke].ca[D](3);
        var c = this.yg;
        b && c && c != b ? (b = c[s][ke].ca, b[D](1), b[D](this.ud), b[D](this.vd), L(a) ? c = b = this.Qh(this.ud, this.vd, c[kf], a) : b = null) : (b = L(a) ? this.Qh(this.ud, this.vd, void 0, a) : null, c && (b ? (b.line = c[kf], c = b) : c = this.Qh(this.ud, this.vd, c[kf], void 0)));
        this.Jh = b;
        this.yg = c;
        this.se = this.ud;
        this.te = this.vd;
        this.r(1024)
    };
    Yk[H].lineStyle = function (a, b, c, d, e, h, k, n) {
        d = void 0;
        L(a) && (d = this[t][xe], e = {}, na(e, [20 * a]), ib(e, [Ni(b, c)]), e.cap = al(Xj, h, 0), e.joint = al(Yj, k, 0), L(n) && (e.miter = n), d[D](new Zj(null, e)), d = d[G] - 1);
        this.yv(d)
    };
    var al = function (a, b, c) {
        return b && (a = a[pe](b), 0 <= a) ? a : c
    };
    Yk[H].beginFill = function (a, b) {
        if (L(a)) {
            var c = this[t][rc],
                d = {
                    type: 1
                };
            ib(d, [Ni(a, b)]);
            c[D](new Ij(null, d));
            this.Vm(c[G] - 1)
        } else this.Vm()
    };
    Yk[H].endFill = function () {
        this.Vm()
    };
    var bl = function (a, b, c) {
        ok[I](this, b, a, c)
    };
    N(bl, ok);
    bl[H].Pd = function () {
        return new ck(this[t][Lc])
    };
    var cl = function (a, b) {
        var c = new Ai,
            d = a[ce],
            e = a[Vd] ? a[Vd].get() : null;
        if (e instanceof Ck)
            for (var h = a[Rd] / e[Jc], k = 0; k < d[G]; k++) {
                var n = e.yp(d[cc](k));
                if (n) var u = (new si(h, 0, 0, h, a.x[k], a.y))[Ad](b),
                n = n.u(u), c = c[bc](n)
            }
        return c
    };
    bl[H].Db = function () {
        return !1
    };
    var el = function (a, b, c, d) {
        uk[I](this, b, a, c, d);
        this.Pi = !1;
        this.Ih = {};
        this.Fn();
        this.gg = null;
        this.a.rs(this);
        this.ln = Vf(dl, this)
    };
    N(el, uk);
    K = el[H];
    K.Uc = el[H].Uc | 127;
    K.Fn = function () {
        this.Rp = [];
        this.Ma = -1;
        this.uj = !1;
        this.Ki = !0;
        this.qp = []
    };
    K.wl = function (a) {
        this.ke();
        this.Ks();
        this.Fn();
        for (var b = this.t, c = f[Ob](b), d = 0; d < c[G]; ++d) delete b[c[d]];
        sa(this, a);
        this.ee = !0;
        this.ea()
    };
    K.ea = function (a, b) {
        this.ee && this.hh(128);
        el.i.ea[I](this, a, b)
    };
    K.wh = function () {
        el.i.wh[I](this);
        this.Pi || this.a.Wa === this || (this.Pi = !0, this[Ge](), this.Bn())
    };
    K.ke = function () {
        this.Pi && (this.C.ke(), this[Dd](new dk(32)), this.Pi = !1);
        el.i.ke[I](this)
    };
    mb(K, function () {
        this.uj = !0
    });
    K.kr = function (a) {
        this.Ki = a
    };
    K.gl = function () {
        this.C.it();
        this.uj && this.Bn()
    };
    K.Bn = function () {
        var a = this.Ma + 1;
        if (a >= this[t][qd]) {
            if (this.a.Wa === this && this.a.zr) return;
            a = 0
        }
        0 == this[t][qd] && this.a.Wa == this || this.vg(a)
    };
    rb(K, function () {
        this.uj = !1
    });
    K.me = function (a, b) {
        0 <= a && (a >= this[t][qd] ? this.fo(this[t][qd] - 1) : this.vg(a), this.uj = b)
    };
    K.Bv = function () {
        var a = this[t].hg.Et(this.Ma);
        ja(a) && this.vg(a);
        this[Se]()
    };
    K.Av = function () {
        var a = this[t].hg.Dt(this.Ma);
        ja(a) && this.vg(a);
        this[Se]()
    };
    K.lf = function (a, b) {
        var c = this[t].hg,
            d;
        if (L(b)) {
            if (d = c.Pp[b], !L(d)) return
        } else d = c.Zp(this.Ma);
        var e = p(a) + d - 1;
        return 0 <= e && e == l[$b](e) ? e : (e = c.Si[a]) && c.Zp(e) != d ? void 0 : e
    };
    K.ws = function (a) {
        return this[t][Oc][a]
    };
    K.vg = function (a) {
        if (a != this.Ma)
            if (a > this.Ma) {
                if (this.fo(a - 1), this.Ma = a, this.$().rg(this.ln), this.mo(this.Ma), a = this[t][Oc][this.Ma])
                    for (var b = 0; b < a[G]; b++) a[b].jf(this), a[b].vl(this)
            } else {
                this.Ma = a;
                this.$().rg(this.ln);
                a = this[t].Wn[this.Ma];
                var c = [];
                if (a)
                    for (b = 0; b < a[G]; b++) c[D](a[b].Hh(this)), a[b].vl(this);
                var d = this;
                this.C.is(function (a) {
                    if (!(0 > a[Cc]) || 0 <= c[pe](a)) return !0;
                    d.r(16);
                    a.ke();
                    return !1
                });
                this.N & 16 && this.C.hs(this)
            }
    };
    K.fo = function (a) {
        for (; a > this.Ma;) {
            this.Ma++;
            this.mo(this.Ma);
            var b = this[t][Oc][this.Ma];
            if (b)
                for (var c = 0; c < b[G]; c++) b[c].jf(this)
        }
    };
    var dl = function () {
        var a = this.qp[this.Ma];
        if (M(a)) {
            var b = this;
            this.$().Gp(a, function () {
                b[Se]()
            })
        }
    };
    K = el[H];
    K.mo = function (a) {
        if (!this.Rp[a]) {
            for (var b = this[t].Qj[a], c = 0; b && c < b[G]; c++) b[c].Cl(this);
            this.Rp[a] = !0
        }
    };
    K.Om = function () {
        0 < this.Ma && this.vg(this.Ma - 1);
        this[Se]()
    };
    K.li = function () {
        this.Ma + 1 < this[t][qd] && this.vg(this.Ma + 1);
        this[Se]()
    };
    K.$ = function () {
        return this.a.$()
    };
    K.Dl = function () {
        return this.a.Dl()
    };
    K.Ve = function () {
        return this.a.Ve()
    };
    K.setCapture = function (a, b, c) {
        this.a[he](a, b, c)
    };
    K.releaseCapture = function (a) {
        this.a[Qe](a)
    };
    K.duplicate = function (a, b, c) {
        var d = new el(this[t], this.a, this.Sf + "_d");
        d.ee = !0;
        d.Ub(b);
        d[hc](this.P());
        this.gg && (d.gg = this.gg.duplicate(d), d.cc(d.gg, -16385));
        d.ea();
        a.ce(c);
        a.cc(d, c);
        d.qc(this.xb);
        return d
    };
    K.fb = function (a, b) {
        var c = this.gg;
        c || (this.gg = c = new Yk(this.a), c.gd = !0, this.cc(c, -16385));
        c[a][B](c, b)
    };
    K.Eb = function (a) {
        if (this.Ki && a != this.xc) {
            var b;
            switch (a) {
            case 1:
                b = "_up";
                break;
            case 4:
                b = "_down";
                break;
            case 2:
                b = "_over"
            }
            b && (b = this[t].hg.Si[b], L(b) && (this.me(b, !1), this.a.Jf = !0))
        }
        el.i.Eb[I](this, a)
    };
    K.co = function (a, b, c) {
        var d = new fl;
        this.Zf(gl(a));
        var e = this;
        d.Cb = function (a) {
            hl(e, a)
        };
        il(a, this.a, b || void 0, c, d)
    };
    K.lt = function () {
        var a = this.a.sc,
            b = this;
        return this.a.$g(a.x, a.y, function (a) {
            return !b[Id](a) && a instanceof el
        })
    };
    var kl = function (a, b) {
        uk[I](this, a, new jl(0, 0, null, null), "stage");
        this.backgroundColor = Li(b[ve])[Sc]();
        this.mh = b.frameSize.xmax / 20;
        this.lh = b.frameSize.ymax / 20;
        this.Wc = "showAll";
        this.Be = 0;
        this.r(524288);
        this.dh = this.Gf = ti;
        this.Eo()
    };
    N(kl, uk);
    K = kl[H];
    K.cg = function () {};
    K.pr = function (a) {
        this.Wc != a && (this.Wc = a, this.r(524288), "noScale" == this.Wc && (a = this.mc != this.lh, (this.nc != this.mh || a) && this.pa.Kl()))
    };
    K.gr = function (a) {
        a = a[zf]();
        var b = 0; - 1 < a[pe]("L") && (b |= 1); - 1 < a[pe]("T") && (b |= 2); - 1 < a[pe]("R") && (b |= 4); - 1 < a[pe]("B") && (b |= 8);
        this.Be != b && (this.Be = b, this.r(524288))
    };
    K.Ms = function () {
        return this.Be & 1 ? 0 : this.Be & 4 ? 2 : 1
    };
    K.Ns = function () {
        return this.Be & 2 ? 0 : this.Be & 8 ? 2 : 1
    };
    K.Eo = function () {
        var a = this.Ed.offsetWidth,
            b = this.Ed.offsetHeight,
            c, d = this.Ed,
            e = c = 0;
        if (d.offsetParent) {
            do c += d.offsetLeft, e += d.offsetTop; while (d = d.offsetParent)
        }
        c = [c, e];
        d = c[0];
        c = c[1];
        if (this.Yd != d || this.Zd != c) this.Yd = d, this.Zd = c, this.r(524288);
        if (this.nc != a || this.mc != b) this.nc = a, this.mc = b, "noScale" == this.Wc && this.pa.Kl(), this.r(524288)
    };
    K.Ls = function () {
        var a = this.nc,
            b = this.mc,
            c = this.mh,
            d = this.lh,
            e = a / c,
            h = b / d;
        switch (this.Wc) {
        case "noScale":
            e = h = 1;
            break;
        case "showAll":
            e < h ? h = e : e = h;
            break;
        case "noBorder":
            e > h ? h = e : e = h
        }
        var k = 0,
            n = 0;
        switch (this.Ms()) {
        case 1:
            k = (a - c * e) / 2;
            break;
        case 2:
            k = a - c * e
        }
        switch (this.Ns()) {
        case 1:
            n = (b - d * h) / 2;
            break;
        case 2:
            n = b - d * h
        }
        this.Gf = new si(e / 20, 0, 0, h / 20, this.Yd + k, this.Zd + n);
        this.dh = this.Gf.oc()
    };
    K.ka = function () {
        this.Eo();
        if (this.N & 524288) {
            this.Ls();
            var a = this.Gf[Je](-this.Yd, -this.Zd);
            this.ac.tj(a)
        } else if (!this.Jf) return;
        this.ac.sj();
        this.Jf = !1
    };
    K.Jb = function () {
        return !0
    };
    var ll = function (a) {
        this.eg = a || null;
        this.rq = this.Od = "";
        this.pn = {};
        this.eq = this.content = null
    };
    ll[H].hv = function () {
        return this.rq || this.Od
    };
    ll[H].St = function (a) {
        this.rq = a
    };
    ll[H].Zf = function (a) {
        this.Od = a
    };
    var hl = function (a, b, c) {
        var d = a.a,
            e = new gj,
            h = ml(b, d, e);
        d.ri(e, function () {
            a.wl(h);
            a[Dd](new dk(262144));
            d.Ja();
            c && c()
        })
    }, nl = function (a, b, c, d, e) {
            var h = new gj,
                k = ml(c, a, h);
            a.ri(h, function () {
                var c = new el(k, a, null);
                d && d(c);
                a.cc(c, -16384 + b);
                c.ea();
                c.ee = !0;
                a.Ja();
                e && e()
            })
        }, ol = function (a, b, c, d) {
            var e = !1;
            if (Lf(c))
                for (var h = 0; h < c[G]; ++h) {
                    var k = c[h];
                    switch (k[F] && k[F][Gf]()) {
                    case "content-type":
                        e = !0
                    }
                    a.setRequestHeader(k[F], k[ke])
                }
            e || ("POST" == b && (d = d || "application/x-www-form-urlencoded"), d && a.setRequestHeader("Content-Type",
                d))
        }, rl = function (a, b, c, d, e, h, k) {
            d = q(d)[zf]();
            switch (d) {
            case "POST":
                if ("function" == typeof ArrayBuffer) {
                    pl(a, b, c, "POST", Ui(e), h, k);
                    break
                }
            case "GET":
                b = Ui(e, b);
            default:
                USING_XML_HTTP_MOCK ? pl(a, b, c, "GET", null, h, k) : ql(b, c, h)
            }
        }, pl = function (a, b, c, d, e, h, k) {
            c && c.pj();
            var n = new XMLHttpRequest;
            n[Zd](d, b);
            n.responseType = "arraybuffer";
            n.onreadystatechange = function () {
                if (4 == n.readyState) {
                    if (200 == n[nc] || 0 == n[nc] && n.response) {
                        var b = new Uint8Array(n.response);
                        if (!Mf(b)) throw fa("encodeByteArray takes an array as a parameter");
                        ii();
                        for (var d = fi, e = [], k = 0; k < b[G]; k += 3) {
                            var V = b[k],
                                va = k + 1 < b[G],
                                Vb = va ? b[k + 1] : 0,
                                Jd = k + 2 < b[G],
                                $g = Jd ? b[k + 2] : 0,
                                Xn = V >> 2,
                                V = (V & 3) << 4 | Vb >> 4,
                                Vb = (Vb & 15) << 2 | $g >> 6,
                                $g = $g & 63;
                            Jd || ($g = 64, va || (Vb = 64));
                            e[D](d[Xn], d[V], d[Vb], d[$g])
                        }
                        ql("data:image/" + a + ";base64," + e[Cf](""), c, h)
                    } else h.wc(n[nc]);
                    c && c.rf()
                }
            };
            ol(n, d, k);
            n.send(e)
        }, ql = function (a, b, c) {
            b && b.pj();
            var d = new Image;
            ma(d, function () {
                c.Cb({
                    tags: [{
                        type: 8,
                        id: 1,
                        data: d.src,
                        width: d[Tb],
                        height: d[Rd]
                    }, {
                        type: 3,
                        id: 1,
                        depth: 1
                    }, {
                        type: 2
                    }],
                    frameCount: 1,
                    id: 0
                }, 200);
                b && b.rf()
            });
            d.onerror =
                function () {
                    c.wc(404);
                    b && b.rf()
            };
            d.src = a
        }, sl = function (a, b, c, d, e, h, k) {
            b && b.pj();
            var n = new XMLHttpRequest;
            c = q(c)[zf]();
            var u = null;
            switch (c) {
            case "POST":
                n[Zd](c, a);
                u = Ui(d);
                break;
            case "GET":
                a = Ui(d, a);
            default:
                n[Zd]("GET", a)
            }
            n.onreadystatechange = function () {
                4 == n.readyState && (200 == n[nc] || 0 == n[nc] && n.response ? e.Cb(n.responseText, n[nc]) : e.wc(n[nc]), b && b.rf())
            };
            ol(n, c, h, k);
            n.send(u)
        }, tl = function (a, b, c, d, e, h) {
            var k = new fl;
            k.Cb = function (a) {
                var b = e(),
                    c = b.t;
                a = Yi(a);
                for (var d = f[Oe](a), h = 0; h < d[G]; h++) {
                    var k = a[d[h]];
                    c[d[h]] = k[k[G] - 1]
                }
                b[Dd](new dk(262144));
                c.onData && c.onData[I](c)
            };
            sl(a, b, c, d, k, h)
        }, ul = {
            png: Wf(rl, "png"),
            gif: Wf(rl, "gif"),
            jpg: Wf(rl, "jpeg"),
            jpeg: Wf(rl, "jpeg"),
            swf: function (a, b, c, d, e, h) {
                USING_XML_HTTP_MOCK || (a = a[Wb](/^([^?#]+)([?#].*)?$/g, "$1.json$2"));
                var k = new fl(e);
                k.Cb = function (a, b) {
                    var c = {};
                    a && (c = ji(a), Wi(c));
                    e.Cb(c, b)
                };
                sl(a, b, c, d, k, h)
            }
        }, il = function (a, b, c, d, e, h) {
            var k = a[lc](/\.([^.?#]+)(?:#.*$|\?.*$|$)/);
            (k = ul[k && k[1] || ""]) && k(a, b, c, d, e, h)
        }, gl = function (a) {
            var b = g[sc]("a");
            b.href = a;
            return b.href
        },
        fl = function (a) {
            this.iq = function () {
                L(a) && M(a.iq) && a.iq()
            };
            this.wc = function (b) {
                L(a) && M(a.wc) && a.wc(b)
            };
            this.hq = function (b, c) {
                L(a) && M(a.hq) && a.hq(b, c)
            };
            this.Cb = function (b, c) {
                L(a) && M(a.Cb) && a.Cb(b, c)
            }
        };
    var vl = function () {
        this.Dq = [];
        this.su = [];
        this.ni = []
    };
    vl[H].zu = function (a, b, c) {
        this.Dq[a] = b;
        this.su[a] = c
    };
    vl[H].Jn = function (a) {
        this.ni[a] = new Audio(this.Dq[a]);
        this.ni[a][Ge]()
    };
    vl[H].Yo = function () {
        for (var a = 0; a < this.ni[G]; a++) L(this.ni[a]) && this.ni[a].pause()
    };
    f[w](Date, "__swiffy_override", {
        value: function (a, b, c, d, e, h, k) {
            switch (arguments[G]) {
            case 0:
                return new Date(Date.now());
            case 1:
                return new Date(arguments[0]);
            default:
                return c = L(c) ? c : 1, d = L(d) ? d : 0, e = L(e) ? e : 0, h = L(h) ? h : 0, k = L(k) ? k : 0, new Date(a, b, c, d, e, h, k)
            }
        }
    });
    f[w](m, "__swiffy_override", {
        value: m
    });
    var wl = function (a) {
        gb(this, a)
    }, xl = function (a) {
            f[w](a[H], "__swiffy_nvr", {
                value: !0
            })
        }, yl = function (a) {
            console.log(a)
            ca.console && ca.console.log("[trace] " + a)
        }, zl = function (a) {
            if (a instanceof wl) yl(a[ke]);
            else throw a;
        }, Al = function (a) {
            throw a;
        };
    "__proto__" in f || f[w](nj[H], "__proto__", {
        get: function () {
            return f[Pc](this)
        }
    });
    var Bl = function (a, b, c, d, e, h, k) {
        this.Z = a;
        this.variables = b;
        this.url = c;
        Ab(this, d || "_self");
        Ba(this, e);
        this.bo = !! h;
        this.nl = !! k;
        this.Uk = null;
        if (this.bo || this.nl) this.Uk = this.pt()
    }, Cl = {
            0: void 0,
            1: "GET",
            2: "POST"
        };
    K = Bl[H];
    K.wu = function (a) {
        var b = this[jf][lc](/^\_level(\d+)$/i);
        if (this.bo) return this.nl ? b ? this.ho(p(b[1])) : this.ds() : this.cs(), !0;
        if (b) return this.nl ? this.ho(p(b[1])) : this.bs(p(b[1])), !0;
        if ("" == this.url) return !0;
        if (this.url[lc](/^fscommand:/i)) return this.as(), !0;
        b = this[jf];
        "_self" == b && this.Z.a.$r() && (b = "_parent");
        switch (this[Ec]) {
        case 0:
        case 1:
            if (!a && "_self" != this[jf]) return !1;
            var c = this.url;
            1 == this[Ec] && (c = Ui(this[Ac], c), c = c[Wb](/%20/g, "+"));
            ca[Zd](c, b);
            break;
        case 2:
            a = eh("form");
            a.acceptCharset = "utf-8";
            Ba(a, "post");
            if (Nf(this[Ac])) {
                var d = eh("input", {
                    type: "hidden",
                    name: this[Ac]
                });
                a[r](d)
            } else
                for (c in this[Ac]) "$" != c[cc](0) && (d = eh("input", {
                    type: "hidden",
                    name: c,
                    value: this[Ac][c]
                }), a[r](d));
            a.action = this.url;
            Ab(a, b);
            a[A].visibility = "hidden";
            g[gf][r](a);
            a.submit();
            hh(a);
            break;
        default:
            if (!a && "_self" != this[jf]) return !1;
            ca[Zd](this.url, b)
        }
        return !0
    };
    K.as = function () {
        var a = this.Z.a[oc]();
        if (a) {
            var a = a + "_DoFSCommand",
                b = this.url[Qc](10),
                c = this[jf];
            if (ca[a]) ca[a](b, c)
        }
    };
    K.bs = function (a) {
        var b = this.Z.a;
        b.ce(-16384 + a);
        if (this.url) {
            var c = new fl;
            c.Cb = function (c) {
                nl(b, a, c)
            };
            il(this.url, b, Cl[this[Ec]], this[Ac], c)
        }
    };
    K.cs = function () {
        var a = this.Uk,
            b = Cl[this[Ec]];
        if (a instanceof O) {
            var c = a.__swiffy_d;
            if (c) {
                var d = c.a.$().ya(this.url);
                c.co(d, b, a)
            }
        }
    };
    K.ds = function () {
        var a = this.Uk,
            b = Cl[this[Ec]];
        a instanceof O && a.loadVariables[I](a, this.url, b)
    };
    K.ho = function (a) {
        var b = this.Z.a;
        tl(this.url, b, Cl[this[Ec]], this[Ac], function () {
            var c = -16384 + a,
                d = b.Qc(c);
            d || (d = new jl(0, 0, null, {}), d = new el(d, b, null), b.cc(d, c), d.ea(), d.ee = !0);
            return d
        })
    };
    K.pt = function () {
        return this.Z.oe("_self" == this[jf] ? "this" : this[jf])
    };
    var P = new fk("svg");
    If("swiffy.SVG", P, void 0);
    var El = function (a) {
        var b = P;
        a.Le() || null != a.lb ? b = null != a.lb && a.Jb() && a.lb.Jb() ? P.kd : P.jd : !Dl && a.qi() && (b = P.$h);
        return a.bc(b)
    };
    var Fl = new fk("nul");
    var Gl = new fk("html");
    If("swiffy.HTML", Gl, void 0);
    var Hl = function (a, b, c, d, e) {
        La(this, a);
        c || (a = a.P(), d = this.Ko(d, e), this.Io = a.j - d.x, this.Jo = a.k - d.y);
        this.Ho = b
    };
    Hl[H].Io = 0;
    Hl[H].Jo = 0;
    Hl[H].Ko = function (a, b) {
        var c = this[Zc][Nb]() ? this[Zc][Nb]().na() : ti,
            d = new ri(a, b);
        d.u(c.oc());
        return d
    };
    Hl[H].Js = function (a, b) {
        if (!this.Ho || this.Ho[Id](a, b)) {
            var c = this.Ko(a, b);
            this[Zc][hc](this[Zc].P().hd(c.x + this.Io, c.y + this.Jo))
        }
    };
    USING_SWIFFY_MOCKS = !! Hf.USING_SWIFFY_MOCKS;
    USING_XML_HTTP_MOCK = !! Hf.USING_XML_HTTP_MOCK;
    var Il = "undefined" != eval("typeof SVGFilterElement"),
        Dl = !Jg || !Il,
        Ml = function (a, b, c, d) {

            var FRAMESTOTAL = b.frameCount||0;
            b.tags.forEach(function (elem) { if (elem.frameCount) FRAMESTOTAL+=elem.frameCount })
            this.FRAMESTOTAL = FRAMESTOTAL;

            Wi(b);
            this.Ed = a;
            this.mb = b.version;
            this.Jf = !1;
            this.Pr = c || P;
            this.ac = this.Pr.Nr(this);
            this.sc = new ri(0, 0);
            this.Nf = !1;
            this.Qr = new vl;
            this.Ar = b.fileSize;
            this.zr = !! b.truncated;
            this.Dk = new Jl(b.frameRate, this);
            this.Ti = [];
            this.Lr = [];
            this.tc = {};
            a = ca.location.href;
            c = new gj;
            var e = ml(b, this, c);
            this.pa || this.Xe(Kl);
            this.Of = [];
            this.Md = null;
            this.Ik = !1;
            this.Oi = null;
            this.Rr = 1;
            this.Gd = [];
            this.kn = !d;
            kl[I](this, this, b);
            this.dc = g[z]("http://www.w3.org/1999/xhtml",
                "div");
            Ka(this.dc[A], "relative");
            na(this.dc[A], "100%");
            Za(this.dc[A], "100%");
            this.dc[A].overflow = "hidden";
            this.dc[A].webkitTapHighlightColor = "rgba(0,0,0,0)";
            this.Wa = new el(e, this, "#0");
            this.pa instanceof Ll && (this.Wa.Ub("root1"), this.Wa.cn(this.pa.ih()));
            this.ea();
            this.Wa.Or(524288);
            this.Wa[Ge]();
            this.cc(this.Wa, -16384);
            this.uc = null;
            this.Mk = 0;
            this.ri(c);
            this.mn = !1;
            this.Rd = [];
            this.le = null;
            this.An(a)
        };
    N(Ml, kl);
    If("swiffy.Stage", Ml, void 0);
    K = Ml[H];
    K.cc = function (a, b) {
        Ml.i.cc[I](this, a, b);
        this.pa.hp(a, b - -16384)
    };
    K.cg = function () {};
    K.pj = function () {
        this.Mk++
    };
    K.rf = function () {
        this.Mk--;
        this.Dp()
    };
    K.Qq = function () {
        return 0 == this.Mk
    };
    K.Bp = function (a) {
        this.Qq() ? a() : this.Ti[D](a)
    };
    K.Dp = function () {
        if (this.Qq()) {
            for (var a = 0; a < this.Ti[G]; a++)(0, this.Ti[a])();
            this.Ti = []
        }
    };
    K.Wm = function (a) {
        this.r(524288);
        this.backgroundColor = a ? a : "rgba(0,0,0,0)"
    };
    Ml[H].setBackground = Ml[H].Wm;
    Ml[H].dv = function () {
        this.Dk[Se]();
        for (var a = 0; a < this.Gd[G]; a++) Eh(this.Gd[a]);
        this.g();
        this.ac.g();
        Fh(this.dc);
        hh(this.dc);
        this.Ve().Yo()
    };
    Ml[H].destroy = Ml[H].dv;
    K = Ml[H];
    K.ts = function () {
        this.kn = !1;
        this.ac.Nj(this.dc, this.Gd);
        yh(g, "keyup", this.nt, !1, this);
        yh(new Oh(g), "key", this.mt, !1, this)
    };
    K.$s = function (a) {
        this.Wa.map(function (b) {
            if (b instanceof sk) return b[Dd](a)
        })
    };
    K.Bl = function (a) {
        2 != a[ne] && (a[kd](), this.Jk())
    };
    K.Jk = function () {
        this.$o();
        this.Nf = !0;
        this.pa.Fg(new dk(8));
        this.Ja();
        this.pa.Lg();
        this.uc ? this.uc.Lg() : this[he](this);
        this.Ja();
        this.ig(!1)
    };
    K.El = function () {
        this.Nf = !1;
        this.pa.Fg(new dk(4));
        this.Ja();
        this.pa.Mg();
        this.uc ? this.uc.Mg() : this[Qe](this);
        this.Ja();
        this.ig(!0)
    };
    K.Zn = function () {
        this.Nf = !0;
        this[he](this, !0)
    };
    K.$n = function () {
        this.Nf = !1;
        this[Qe](this)
    };
    K.gj = function (a) {
        if (!this.dh) return null;
        var b = a.he.touches;
        b && 1 == b[G] && (a = b[0]);
        var c = b = 0;
        if (a.pageX || a.pageY) b = a.pageX, c = a.pageY;
        else if (a[Pe] || a[Re]) b = a[Pe] + g[gf].scrollLeft + g.documentElement.scrollLeft, c = a[Re] + g[gf].scrollTop + g.documentElement.scrollTop;
        a = new ri(b, c);
        a.u(this.dh);
        return a
    };
    K.nt = function (a) {
        this.pa.Dj(a);
        this.pa.Fg(new dk(1));
        this.Ja();
        this.pa.zp();
        this.ig(!0)
    };
    K.mt = function (a) {
        this.pa.Aj(a);
        this.pa.Fg(new dk(2));
        this.Ja();
        this.pa.xp();
        this.$s(new dk(1048576));
        this.Ja();
        this.ig(!0)
    };
    K.Xs = function () {
        return null != this.uc
    };
    K.Pl = function () {
        var a = "default";
        this.$().rp() ? (this.Xi() || this.Ws() || !this[Df]() && this.Xs()) && this.uc && this.$().sp(this.uc) && (a = "pointer") : a = "none";
        this.dc[A].cursor = a
    };
    K.ko = function (a, b, c, d, e, h) {
        this.Zi();
        var k = null;
        L(c) && L(d) && L(e) && L(h) && (k = new yi(20 * c, 20 * d, 20 * e, 20 * h));
        this.le = new Hl(a, k, L(b) && b, this.sc.x, this.sc.y);
        a.kj(!0)
    };
    K.Zi = function () {
        if (this.le) {
            var a = this.le[Zc];
            this.le = null;
            a.kj(!1)
        }
    };
    K.Xr = function (a) {
        return null != this.le && this.le[Zc] === a
    };
    K.hj = function (a, b, c) {
        this.sc.x = b;
        this.sc.y = c;
        this.le && this.le.Js(b, c);
        this.pa.Ig(a);
        if (a && (b = a[Nb]())) {
            do this.pa.Vi(b) || (a = b); while (b = b[Nb]())
        }
        this.uc != a && (this.pa.cp(this.uc, a), this.uc = a, this.Ja(), this.ig(!1), this.Pl())
    };
    K.yc = function (a, b) {
        var c = this.gj(b);
        null == c && (c = this.sc);
        this.hj(a, c.x, c.y)
    };
    K.Kr = function (a, b) {
        this.yc(a, b);
        this.Bl(b)
    };
    K.isCaptured = function () {
        return null != this.Md
    };
    K.Xi = function () {
        return null != this.Md && this.Ik
    };
    K.Ji = function (a) {
        return this.Md == a
    };
    K.Ws = function () {
        return null != this.Md && this.Md == this.uc
    };
    K.setCapture = function (a, b, c) {
        this[Qe](a);
        this.Md = a;
        b && (this.Ik = !0);
        c && (this.Oi = c, this.Pl())
    };
    K.releaseCapture = function (a) {
        this.Md && (this.Pl(), this.Md != a && (this.$o(), this.Oi && (this.Oi(), this.Ja())), this.Md = this.Oi = null, this.Ik = !1)
    };
    Ua(K, function () {
        var a = this.Dk;
        this.Bp(function () {
            a.start()
        })
    });
    Ua(Ml[H], Ml[H].start);
    K = Ml[H];
    K.rs = function (a) {
        this.Of[D](a)
    };
    K.ri = function (a, b) {
        a.Pt(this, b);
        this.Lr[D](a);
        this.ac.Wj(a)
    };
    K.gl = function () {
        null != this.ss && this.ss.dw();
        this.kn && this.ts();
        this.Of = this.Of[Kb](function (a) {
            return !a.Hd()
        });
        this.pa.zo();
        for (var a = this.Of[G] - 1; 0 <= a; --a) {
            var b = this.Of[a];
            b[Dd](new dk(64));
            b.gl()
        }
        this.mn || (this.Wa.t.$version = "HTML 11,0,0,0", this.Wa.ea(), this.Ja(), this.Wa.hh(128), this.Wa[Dd](new dk(128)), this.mn = !0);
        this.pa.Ao();
        this.Ja();
        this.ig(!this.Nf);
        this.Jf = !0
    };
    K.Xe = function (a) {
        this.pa || (this.pa = new a(this));
        return this.pa
    };
    K.$ = function () {
        return this.pa
    };
    K.Ja = function () {
        this.pa.Ja()
    };
    K.ig = function (a) {
        for (var b = [], c = 0; c < this.Rd[G]; ++c) this.Rd[c].wu(a) || b[D](this.Rd[c]);
        this.Rd = b
    };
    K.$o = function () {
        this.Rd = []
    };
    K.Bh = function (a) {
        for (var b = 0; b < this.Rd[G]; ++b)
            if (this.Rd[b][jf] == a[jf]) {
                this.Rd[b] = a;
                return
            }
        this.Rd[D](a)
    };
    K.Dl = function () {
        return this.Dk
    };
    K.Ve = function () {
        return this.Qr
    };
    K.Kv = function (a) {
        this.Xp(Yi(a))
    };
    Ml[H].setFlashVars = Ml[H].Kv;
    Ml[H].Xp = function (a) {
        for (var b = f[Oe](a), c = 0; c < b[G]; c++) {
            var d = b[c],
                e = a[d];
            this.$().jq(d, e[e[G] - 1])
        }
    };
    Ml[H].An = function (a) {
        this.pa.ih().Zf(a);
        this.Xp(Zi(a))
    };
    Ml[H].setSwfUrl = Ml[H].An;
    Ml[H].kh = function () {
        return "instance" + this.Rr++
    };
    Ml[H].ka = function () {
        Ml.i.ka[I](this);
        this.dc[xf] || (this.ac.Jg(this.dc), this.Ed[r](this.dc))
    };
    Ml[H].getName = function () {
        return this.Ed.id
    };
    Ml[H].$r = function () {
        if (ca.top == ca) return !1;
        var a = this.Ed[xf];
        if (!a || a != g[gf]) return !1;
        for (a = a[uc]; a; a = a[Nc])
            if (a != this.Ed && "SCRIPT" != a.tagName && (a[ge] != Node.TEXT_NODE || a.nodeValue[ec]())) return !1;
        return !0
    };
    var Nl = new fk("geometry");
    P.vi = new fk("blend container");
    var Ol = function (a) {
        this.b = a;
        this.Fd = [];
        this.Pf = 0
    };
    K = Ol[H];
    K.lo = function () {
        var a = P.Dd(this.b),
            a = new Pl(a, a.Pe);
        a.N = this.b.wi;
        return a
    };
    K.gn = function (a) {
        for (; this.Fd[G] > a;) this.Fd.pop().Ba.g()
    };
    K.fn = function (a, b, c) {
        var d = this.Pf;
        1 >= a && (a = 0);
        for (var e, h; h = this.Fd[--d];) {
            if (h.Hf.dn(c)) {
                h.Je == a && 0 == a && (e = h);
                break
            }
            h.Je == a && (e = h)
        }
        e || ((e = this.Fd[this.Pf]) ? (e.N = this.b.N, e.Hf[Ld](), gh(e.Mc)) : this.Fd[this.Pf] = e = this.lo(), e.Je = a, ++this.Pf);
        e.Mc[r](b);
        e.Hf.dd(c)
    };
    K.Zm = function (a) {
        this.Pf = 0;
        for (var b = [], c = this.b.C.oa; c;) {
            for (; 0 < b[G] && c[Cc] > b[b[G] - 1].Mb();) b.pop();
            var d = c.Le() || null != c.lb;
            if (d || c.Jb() || !c.qi()) {
                var e = d ? 0 : c.yb(),
                    d = El(c),
                    h = c.Ta().$g().J();
                h.u(c.P());
                this.fn(e, d.ka(a, b), h)
            } else {
                for (var d = c.bc(P.vi), e = d.Zm(a), k = 0; k < e[G]; ++k) {
                    var n = e[k];
                    c.N = n.N & -65553;
                    h = n.Hf.J();
                    h.u(c.P());
                    this.fn(n.Je, n.Ba.ka(a, b), h)
                }
                c.N = 0
            }!c.Le() || c instanceof Lk || b[D](d);
            c = c[Nc]
        }
        this.gn(this.Pf);
        return this.Fd
    };
    K.g = function () {
        for (var a = 0; a < this.Fd[G]; ++a) this.Fd[a].Ba.g()
    };
    P.vi.e(el, Ol);
    P.vi.e(zk, Ol);
    P.vi.e(Ak, Ol);
    P.$h = new fk("blend context");
    var Ql = function (a) {
        Ol[I](this, a);
        this.Ba = P.Dd(this.b);
        Ab(this, g[z]("http://www.w3.org/2000/svg", "g"));
        this.Ba.Pe[r](this[jf]);
        Eb(this, g[z]("http://www.w3.org/2000/svg", "filter"));
        this[vf][x]("filterUnits", "userSpaceOnUse");
        this[vf][x]("primitiveUnits", "userSpaceOnUse");
        this[vf].id = Uh.la().ma();
        this[jf][x]("filter", "url(#" + this[vf].id + ")");
        this[jf][r](this[vf]);
        this.jk = g[z]("http://www.w3.org/2000/svg", "g");
        Ri(this.jk);
        this[jf][r](this.jk)
    };
    N(Ql, Ol);
    K = Ql[H];
    K.lo = function () {
        return new Pl(this.Ba, g[z]("http://www.w3.org/2000/svg", "g"))
    };
    K.gn = function (a) {
        tb(this.Fd, a)
    };
    K.ka = function (a, b) {
        this.b.N & 65552 && (this.La(this.Ba.Yi(a)), this.b.N &= -65553);
        return this.Ba.ka(a, b)
    };
    K.La = function (a) {
        a = this.Zm(a);
        var b = this[vf],
            c = this.jk,
            d = "",
            e = new yi;
        gh(c);
        gh(b);
        var h = this.b.a,
            k = new yi(-h.Yd, -h.Zd, -h.Yd + h.nc, -h.Zd + h.mc),
            h = this.b.na()[Ad](h.Gf),
            n = h.oc();
        if (this.b[ve]) {
            var u = g[z]("http://www.w3.org/2000/svg", "feFlood");
            u[x]("flood-color", this.b[ve]);
            u[x]("result", d = "bg");
            b[r](u)
        }
        var y = a[G];
        hh(this[jf][Nc]);
        if (0 == a[y - 1].Je) {
            --y;
            u = a[y].Mc;
            u[Od]("transform");
            var C = this[jf];
            C[xf] && C[xf].insertBefore(u, C[Nc])
        }
        for (C = 0; C < y; ++C) {
            var J = a[C].Hf;
            J.u(h);
            J.ik(k);
            if (J.Ua()) c[r](a[C].Mc);
            else {
                J.$m();
                J.u(n);
                u = a[C].Mc;
                u.id = Uh.la().ma();
                u[x]("transform", "translate(" + -J.c + " " + -J.d + ")");
                var V = g[z]("http://www.w3.org/2000/svg", "g");
                V[x]("transform", "translate(" + J.c + " " + J.d + ")");
                V[r](u);
                c[r](V);
                d = this.wr(a[C], d, b);
                e.dd(J)
            }
        }
        e.Jc(b)
    };
    K.wr = function (a, b, c) {
        var d = g[z]("http://www.w3.org/2000/svg", "feImage");
        d[me]("http://www.w3.org/1999/xlink", "href", "#" + a.Mc.id);
        a.Hf.Jc(d);
        c[r](d);
        if (!b) {
            var e = "bg";
            d[x]("result", e);
            return e
        }
        e = "fg";
        d[x]("result", e);
        switch (a.Je) {
        case 2:
        case 4:
        case 5:
        case 3:
            a = qi[a.Je];
            d = g[z]("http://www.w3.org/2000/svg", "feBlend");
            L(e) && d[x]("in", e);
            L(b) && d[x]("in2", b);
            d[x]("mode", a);
            L(void 0) && d[x]("result", void 0);
            break;
        case 13:
            a = "blend";
            c[r](bj(1, 0, 0, 1, b, a));
            c[r](bj(2, -1, 0, 1, e, "2fg"));
            c[r](aj(-1, 1, 1, 0, "2fg", a, a));
            c[r](bj(2, 0, 0, 1, e, "2fg"));
            c[r](aj(1, 0, 0, 0, "2fg", a, a));
            d = this.Wh(c, e, b);
            break;
        case 12:
            a = "blend";
            c[r](bj(1, 0, 0, 1, e, a));
            c[r](bj(2, -1, 0, 1, b, "2bg"));
            c[r](aj(-1, 1, 1, 0, "2bg", a, a));
            c[r](bj(2, 0, 1, 0, b, "2bg"));
            c[r](aj(1, 0, 0, 0, "2bg", a, a));
            d = this.vf(c, e, b);
            break;
        case 7:
            d = aj(0, 1, 1, 0, e, b);
            break;
        case 8:
            a = "-fg";
            c[r](bj(-1, 1, 0, 1, e, a));
            c[r](aj(0, 1, 1, -1, a, b));
            d = this.vf(c, e, b);
            break;
        case 6:
            a = "-fg";
            c[r](bj(-1, 1, 0, 1, e, a));
            c[r](bj(1, 0, 0, 1, b, "*bg"));
            c[r](aj(0, 1, 1, -1, "*bg", a, "bg-fg"));
            c[r](bj(-1, 1, 0, 1, b, "-bg"));
            c[r](bj(1,
                0, 0, 1, e, "*fg"));
            c[r](aj(0, 1, 1, -1, "-bg", "*fg", "fg-bg"));
            c[r](aj(0, 1, 1, 0, "bg-fg", "fg-bg"));
            d = this.Wh(c, e, b);
            break;
        default:
            d = $i("over", e, b)
        }
        d[x]("result", "bg");
        c[r](d);
        return "bg"
    };
    K.Wh = function (a, b, c) {
        a[r]($i("in", void 0, c));
        return this.vf(a, b, c)
    };
    K.vf = function (a, b, c) {
        a[r]($i("atop", void 0, b));
        return $i("over", void 0, c)
    };
    K.pc = function () {
        return this.Ba.pc()
    };
    K.Mb = function () {
        return this.Ba.Mb()
    };
    K.g = function () {
        this.Ba.g()
    };
    P.$h.e(el, Ql);
    P.$h.e(zk, Ql);
    P.$h.e(Ak, Ql);
    P.$h.e(Ml, Ql);
    P.kd = new fk("svg mask");
    var Rl = function (a) {
        this.b = a;
        this.Vc = this.gc = null;
        this.de = P.Dd(this.b)
    };
    K = Rl[H];
    K.ka = function (a, b) {
        if (!this.Ea) {
            this.Ea = g[z]("http://www.w3.org/2000/svg", "mask");
            this.Ea[x]("maskUnits", "userSpaceOnUse");
            this.Ea.id = this.pc();
            this.qh = g[z]("http://www.w3.org/2000/svg", "g");
            this.Ea[r](this.qh);
            this.K = g[z]("http://www.w3.org/2000/svg", "filter");
            this.K[x]("filterUnits", "userSpaceOnUse");
            this.K.id = Uh.la().ma();
            var c = bj(1, 1, 1, 0);
            this.K[r](c);
            this.Ea[r](this.K);
            this.qh[x]("filter", "url(#" + this.K.id + ")")
        }
        c = this.b;
        if (c.N & 16385) {
            var d = c.Ta().Qa,
                d = d.J();
            d.u(c.P());
            d.Jc(this.Ea);
            d.Jc(this.K)
        }
        this.de.ka(a |
            4, b);
        c = this.de.Qe();
        d = this.qh[uc];
        if (d != c)
            if (d) d[Od]("filter"), this.qh[ae](c, d);
            else this.qh[r](c);
        return this.Ea
    };
    K.pc = function () {
        null == this.gc && (this.gc = Uh.la().ma());
        return this.gc
    };
    K.mk = function () {
        null == this.Vc && (this.Vc = Uh.la().ma(), this.Ea && (this.Ea[uc].id = this.Vc));
        return this.Vc
    };
    K.Mb = function () {
        return this.b.Mb()
    };
    K.g = function () {
        hh(this.K)
    };
    P.kd.e(Wk, Rl);
    P.kd.e(Yk, Rl);
    P.kd.e(bl, Rl);
    P.kd.e(Lk, Rl);
    P.kd.e(el, Rl);
    P.kd.e(zk, Rl);
    P.kd.e(Ak, Rl);
    P.jd = new fk("svg clipPath");
    var Sl = function (a) {
        this.b = a;
        this.Vc = this.gc = null;
        this.ps = Nl.Dd(this.b)
    };
    K = Sl[H];
    K.ka = function () {
        if (!this.Ea) {
            this.Ea = g[z]("http://www.w3.org/2000/svg", "clipPath");
            this.Ea.id = this.pc();
            var a = g[z]("http://www.w3.org/2000/svg", "path");
            this.Ea[r](a);
            this.Vc && (a.id = this.Vc)
        }
        var b = this.ps.In(ti),
            a = this.Ea[uc];
        a[x]("d", b || "M 0 0");
        return this.Ea
    };
    K.pc = function () {
        null == this.gc && (this.gc = Uh.la().ma());
        return this.gc
    };
    K.mk = function () {
        null == this.Vc && (this.Vc = Uh.la().ma(), this.Ea && (this.Ea[uc].id = this.Vc));
        return this.Vc
    };
    K.Mb = function () {
        return this.b.Mb()
    };
    K.g = function () {
        hh(this.Ea)
    };
    P.jd.e(Wk, Sl);
    P.jd.e(Yk, Sl);
    P.jd.e(bl, Sl);
    P.jd.e(Lk, Sl);
    P.jd.e(el, Sl);
    P.jd.e(zk, Sl);
    P.jd.e(Ak, Sl);
    var Tl = function (a, b, c) {
        a[x]("type", "linear");
        a[x]("slope", b);
        a[x]("intercept", c)
    }, Ul = function (a, b, c) {
            if (0 >= c) a[x]("type", "linear"), a[x]("slope", b), a[x]("intercept", c), a[Od]("tableValues");
            else {
                a[x]("type", "table");
                a[Od]("slope");
                a[Od]("intercept");
                for (var d = "0", e = 1; 15 >= e; ++e) d += " ", d += l.min(e * b / 15 + c, 1)[Xb](3);
                a[x]("tableValues", d)
            }
        }, Vl = function (a, b, c, d, e, h, k) {
            if (c != e || d != h)
                if (1 != c || 0 != d || b[xf]) k(b, c, d / 255), b[xf] || a[r](b)
        }, Wl = function (a, b) {
            var c = null,
                d = null,
                e = null,
                h = null,
                k = null,
                n = null,
                u = new vi(1, 0,
                    1, 0, 1, 0, 1, 0);
            return function () {
                var y = this.b.zb();
                y.ok() ? (c && c[xf] && (hh(c), a[Od]("filter")), a[x]("opacity", y.O[Xb](3))) : (c || (c = g[z]("http://www.w3.org/2000/svg", "filter"), c.id = Uh.la().ma(), b ? (c[x]("filterUnits", "userSpaceOnUse"), b.Jc(c)) : (c[x]("filterUnits", "objectBoundingBox"), c[x]("x", 0), c[x]("y", 0), c[x]("width", 1), c[x]("height", 1)), n = g[z]("http://www.w3.org/2000/svg", "feComponentTransfer"), c[r](n), d = g[z]("http://www.w3.org/2000/svg", "feFuncR"), e = g[z]("http://www.w3.org/2000/svg", "feFuncG"), h = g[z]("http://www.w3.org/2000/svg",
                    "feFuncB"), k = g[z]("http://www.w3.org/2000/svg", "feFuncA"), k[x]("type", "linear")), a[Od]("opacity"), c[xf] || (a[r](c), a[x]("filter", "url(#" + c.id + ")")), Vl(n, d, y.Y, y.T, u.Y, u.T, Tl), Vl(n, e, y.X, y.S, u.X, u.S, Tl), Vl(n, h, y.W, y.Q, u.W, u.Q, Tl), Vl(n, k, y.O, y.U, u.O, u.U, Ul), u = y)
            }
        };
    var Xl = function (a) {
        this.b = a;
        this.da = this.q = this.Lf = this.be = this.Ze = this.Fa = this.K = null;
        this.Mi = 0;
        this.Pc = 1;
        this.wb = [];
        this.lk = !1
    };
    P.e(ok, Xl);
    K = Xl[H];
    K.Qe = function () {
        return this.q
    };
    K.bm = function (a) {
        return Li(a, this.b.zb())
    };
    K.Wf = function (a) {
        this.q || (this.q = this.da = this.Sb(a), this.gc && (this.da.id = this.gc));
        return this.q
    };
    K.ka = function (a, b) {
        this.Wf(a);
        var c = this.b.N;
        c && (this.Kc(a, c), this.La(a, c), this.Jd(c), this.b.N = 0);
        this.If(b);
        return this.q
    };
    K.La = function () {};
    K.Kc = function (a, b) {
        this.Wf(a);
        var c = this.b;
        c.Kf ? b & 1048576 && this.Sc()[x]("pointer-events", "none") : a & 1 && !(c instanceof uk) ? this.Sc()[x]("pointer-events", "visiblePainted") : b & 1048576 && this.Sc()[Od]("pointer-events");
        b & 8 && this.da[x]("display", c.$d ? "inline" : "none");
        b & 40960 && this.zk();
        b & 4096 && (b |= 8192);
        Dl && b & 139264 && (c.qi() && c.Jb() ? this.da[x]("enable-background", "new") : this.da[Od]("enable-background"));
        b & 8192 && this.yk() && (b |= 2);
        b & 1 && (c.an && 0 == c.P().vn()[fd] && c.Db() ? this.Jr() : this.da[x]("transform", this.Re()));
        b & 2 ? Il && this.Bk( !! (a & 4)) : this.K && (b & 2048 || b & 16384) && this.ph( !! (a & 4));
        this.Ak()
    };
    K.Bk = function (a) {
        var b = "SourceGraphic",
            c = this.b.Ca;
        this.K && gh(this.K);
        this.Pc = 1;
        for (var d = 0; d < c[G]; ++d) {
            var e = c[d].Cc(this);
            e.aj(b);
            b = e[ad]();
            this.Pc = l.max(this.Pc, c[d].Xk())
        }
        this.Fa && this.Fa.Cc(this).aj(b);
        this.ph(a);
        this.hb && (0 < this.K[Fc][G] ? this.hb[x]("filter", "url(#" + this.K.id + ")") : this.hb[Od]("filter"))
    };
    K.Jr = function () {
        if (!this.Me) {
            this.Me = g[z]("http://www.w3.org/2000/svg", "g");
            var a = g[z]("http://www.w3.org/2000/svg", "defs");
            a[r](this.da);
            this.Me[r](a);
            this.da.id && (this.Me.id = this.da.id);
            this.da.id = Uh.la().ma();
            for (a = 0; 9 > a; a++) this.xr(this.Me, this.da.id);
            this.q = this.da = this.Me
        }
        var b = this.Me,
            c = this.b.P(),
            a = this.b.Ta().Qa;
        b[x]("transform", ti[Je](c.j + a.c * (c.Bd() - 1), c.k + a.d * (c.ae() - 1))[Sc]());
        var d = a.F - a.c,
            e = a.D - a.d,
            h = this.b.an,
            k = [h.c - a.c, h.F - h.c, a.F - h.F],
            h = [h.d - a.d, h.D - h.d, a.D - h.D],
            n = [1, 0, 1],
            u = [1, 0,
                1
            ];
        k[0] + k[2] > l.abs(d * c.Bd()) ? n[0] = c.Bd() * d / (k[0] + k[2]) : n[1] = 1 + (c.Bd() - 1) * d / k[1];
        n[2] = n[0];
        h[0] + h[2] > l.abs(e * c.ae()) ? u[0] = c.ae() * e / (h[0] + h[2]) : u[1] = 1 + (c.ae() - 1) * e / h[1];
        u[2] = u[0];
        for (var c = [a.c * (1 - n[0]), (a.c + k[0]) * (1 - n[1]), k[1] * (n[1] - 1) + (a.c + k[1]) * (1 - n[0])], d = [a.d * (1 - u[0]), (a.d + h[0]) * (1 - u[1]), h[1] * (u[1] - 1) + (a.d + h[1]) * (1 - u[0])], b = b[Fc], e = a.d, y = 0; 3 > y; y++) {
            for (var C = a.c, J = 0; 3 > J; J++) {
                var V = 2 * (J + 3 * y) + 1;
                this.yr(b[V], b[V + 1], C, e, k[J], h[y], n[J], u[y], c[J], d[y]);
                C += k[J]
            }
            e += h[y]
        }
    };
    K.yr = function (a, b, c, d, e, h, k, n, u, y) {
        a = a[Fc][0];
        a[x]("x", c);
        a[x]("y", d);
        a[x]("width", e);
        a[x]("height", h);
        c = ti.cr(k, n)[Je](u, y);
        b[x]("transform", c[Sc]())
    };
    K.xr = function (a, b) {
        var c = g[z]("http://www.w3.org/2000/svg", "clipPath");
        c.id = Uh.la().ma();
        var d = g[z]("http://www.w3.org/2000/svg", "rect");
        c[r](d);
        a[r](c);
        d = g[z]("http://www.w3.org/2000/svg", "use");
        d[me]("http://www.w3.org/1999/xlink", "xlink:href", "#" + b);
        d[x]("clip-path", "url(#" + c.id + ")");
        a[r](d)
    };
    K.Sc = function () {
        return this.q
    };
    K.Re = function () {
        return this.b.P()[Sc]()
    };
    K.Oc = function (a) {
        var b = g[z]("http://www.w3.org/2000/svg", "g");
        ih(b, a);
        b[r](a);
        this.q == a && (this.q = b);
        return b
    };
    K.zk = function () {
        var a = this.b,
            b = a.Ke,
            c = this.be;
        if (b) {
            c || (this.be = c = this.Oc(this.da, "dynmask"));
            var d = !(b.Jb() && this.b.Jb()),
                e;
            e = d ? b.bc(P.jd) : b.bc(P.kd);
            if (a[Nb]() != b[Nb]()) {
                var h, k = this.Lf;
                h = d ? "clipPath" : "mask";
                k && k[yc] != h && (hh(k), k = null);
                k ? (Hg && !Wg(10) && (k.id = Uh.la().ma()), h = k[uc]) : (this.Lf = k = g[z]("http://www.w3.org/2000/svg", h), k.id = Uh.la().ma(), c[r](k), h = g[z]("http://www.w3.org/2000/svg", "use"), k[r](h));
                h[me]("http://www.w3.org/1999/xlink", "xlink:href", "#" + e.mk());
                b = b[Nb]().na();
                b = b[Ad](a[Nb]().Kb());
                h[x]("transform", b[Sc]());
                a = k.id
            } else a = e.pc();
            d ? (c[Od]("mask"), c[x]("clip-path", "url(#" + a + ")")) : (c[Od]("clip-path"), c[x]("mask", "url(#" + a + ")"))
        } else c && (c[Od]("mask"), c[Od]("clip-path"))
    };
    K.If = function (a) {
        var b = this.Ze;
        if (b || a[G]) {
            var c = this.Mi;
            b || (this.Ze = b = this.Oc(this.q, "clip-path"), c = 1);
            for (var d = 0, e = l.min(c, a[G]); d < e;) b[x]("clip-path", "url(#" + a[d].pc() + ")"), b = b[uc], ++d;
            if (a[G] > e)
                for (e = a[G]; d < e;) c = this.Oc(b, "clip-path"), c[x]("clip-path", "url(#" + a[d].pc() + ")"), ++d;
            else if (c > e)
                for (e = c, b == this.Ze && (b[Od]("clip-path"), b = b[uc], ++d); d < e;) c = b[uc], ih(c, b), b = c, ++d;
            this.Mi = a[G]
        }
    };
    K.pc = function () {
        L(this.gc) || (this.gc = Uh.la().ma(), this.da && (this.da.id = this.gc));
        return this.gc
    };
    K.g = function () {
        hh(this.Qe())
    };
    K.Mf = function () {
        null == this.K && (this.K = g[z]("http://www.w3.org/2000/svg", "filter"), this.K[x]("filterUnits", "userSpaceOnUse"), this.K[x]("x", 0), this.K[x]("y", 0), this.K[x]("width", 0), this.K[x]("height", 0), this.K.id = Uh.la().ma(), this.hb = this.Oc(this.be || this.da, "filter"), this.hb[r](this.K));
        return this.K
    };
    K.Br = function (a) {
        if (!Hg || !Dl) return a;
        if (1 >= this.b.yb()) return this.pg && (this.pg[Od]("transform"), this.Pk[Od]("transform")), a;
        var b = ti,
            c = this.b;
        do c = c[Nb](), b = b[Ad](c.P()); while (!c.Jb());
        b.Ld(ti) ? this.pg && (this.pg[Od]("transform"), this.Pk[Od]("transform")) : (this.pg || (this.pg = this.Oc(this.be || this.da, "ieforward"), this.Pk = this.Oc(this.hb, "ieinverse"), this.og && this.hb[r](this.og)), c = b.oc(), this.pg[x]("transform", b[Sc]()), this.Pk[x]("transform", c[Sc]()), a = a[Ad](b));
        return a
    };
    K.Cr = function () {
        null == this.og && (this.og = g[z]("http://www.w3.org/2000/svg", "rect"), this.og[x]("opacity", 0), this.hb[r](this.og));
        return this.og
    };
    K.ph = function (a) {
        var b = this.b[Nb]().Kb(),
            b = this.Br(b),
            c = this.b.hn(),
            d = this.Mf();
        if (c.Ua()) d[x]("width", 0), d[x]("height", 0);
        else {
            var e = l[Yb]((c.F - c.c) / 20),
                h = l[Yb]((c.D - c.d) / 20),
                k = e,
                n = h;
            5E4 < e * h && (k = l[$b](k / this.Pc), n = l[$b](n / this.Pc));
            c = c.J();
            c.u(b);
            c.Jc(d);
            k < e ? d[x]("filterRes", k + " " + n) : d[Od]("filterRes");
            if (Ig || Hg || a) a = this.Cr(), c.Jc(a)
        }
    };
    K.Ak = function () {
        for (var a = this.b.Ca, b = 0; b < a[G]; ++b) a[b].Cc(this).ka();
        this.Fa && this.Fa.Cc(this).ka()
    };
    K.yk = function () {
        var a = this.b,
            b = a.oi(),
            a = a.yb();
        Dl || (a = l.min(a, 1));
        if (1 < a || 1 == a && !b.ok()) return this.Fa ? this.Fa.Yn(a) : (this.Fa = new Yl(a), this.hb && this.hb[Od]("opacity")), !0;
        b = b.O[Xb](3);
        if (1 != b || this.hb) this.Mf(), this.hb[x]("opacity", b);
        return this.Fa ? (this.Fa = null, !0) : !1
    };
    K.Eh = function (a, b, c) {
        this.wb[D](function () {
            var d = this.bm(c);
            a[x](b, d[Sc]());
            a[x](b + "-opacity", d.Se[Xb](3))
        })
    };
    K.Jd = function (a) {
        if (a & 4098) {
            var b = this.wb;
            for (a = 0; a < b[G]; ++a) b[a][I](this);
            if (b = this.b.Ca)
                for (a = 0; a < b[G]; ++a) b[a].Cc(this).Jd();
            this.Fa && this.Fa.Cc(this).Jd()
        }
    };
    K.Mb = function () {};
    var Zl = function (a) {
        Xl[I](this, a);
        this.Gd = []
    };
    N(Zl, Xl);
    P.e(sk, Zl);
    K = Zl[H];
    K.Kc = function (a, b) {
        Zl.i.Kc[I](this, a, b);
        if (b & 256 && this.b.eh) {
            var c = this.Sc(),
                d;
            "createTouch" in g ? (d = yh(c, "touchmove", this.vk, !1, this), this.Gd[D](d), d = yh(c, "touchstart", this.sh, !1, this)) : (d = yh(c, "mousemove", this.uk, !1, this), this.Gd[D](d), d = yh(c, "mousedown", this.Ei, !1, this));
            this.Gd[D](d)
        }
    };
    K.uk = function (a) {
        this.b.a.yc(this.b, a);
        a[kd]()
    };
    K.Ei = function (a) {
        2 != a[ne] && (this.b.a.yc(this.b, a), this.b.a.Jk(), a[kd]())
    };
    K.vk = function () {
        this.b.a.Ji(this.b) && (this.b[Dd](new dk(8192)), this.b.a[Qe](this.b.a))
    };
    K.sh = function (a) {
        1 == a.he.touches[G] && (this.b.a.Kr(this.b, a), a[kd]())
    };
    K.g = function () {
        Zl.i.g[I](this);
        for (var a = 0; a < this.Gd[G]; a++) Eh(this.Gd[a])
    };
    var $l = function (a, b) {
        this.C = a;
        this.q = b;
        this.Ra = []
    };
    $l[H].ka = function (a) {
        this.Ch();
        for (var b = [], c = this.C.oa, d = null; c;) {
            for (; 0 < b[G] && c[Cc] > b[b[G] - 1].Mb();) b.pop();
            var e = El(c);
            this.Ra[D](c);
            var h = e.ka(a, b),
                d = d ? d[Nc] : this.q[uc];
            d != h && (this.q.insertBefore(h, d), d = h);
            !c.Le() || c instanceof Lk || b[D](e);
            c = c[Nc]
        }
        for (d = d ? d[Nc] : this.q[uc]; d;) a = d, d = d[Nc], this.q[hf](a)
    };
    $l[H].Ch = function () {
        for (var a = this.Ra[G] - 1; 0 <= a; --a) {
            var b = this.Ra[a];
            b.Hd() && b.Nd()
        }
        this.Ra = []
    };
    $l[H].g = function () {
        for (var a = 0; a < this.Ra[G]; ++a) this.Ra[a].Nd()
    };
    var am = function (a) {
        Zl[I](this, a);
        this.Pe = g[z]("http://www.w3.org/2000/svg", "g");
        this.ie = new $l(a.C, this.Pe)
    };
    N(am, Zl);
    P.e(uk, am);
    am[H].Yi = function (a) {
        this.b instanceof zk ? a &= -2 : this.b[xd]() && this.b[Nb]() != this.b.a && (a |= 1);
        return a
    };
    am[H].La = function (a, b) {
        am.i.La[I](this, a, b);
        a = this.Yi(a);
        b & 65552 && this.ie.ka(a)
    };
    am[H].g = function () {
        am.i.g[I](this);
        this.ie.g()
    };
    am[H].Sb = function () {
        return this.Pe
    };
    var Pl = function (a, b) {
        this.Ba = a;
        this.Je = 0;
        this.Hf = new yi;
        this.Mc = b;
        this.N = 0
    };
    var bm = function (a) {
        am[I](this, a);
        this.Zo = g[z]("http://www.w3.org/2000/svg", "g");
        this.Go = new $l(a.We, this.Zo)
    };
    N(bm, am);
    P.e(zk, bm);
    P.e(Ak, bm);
    bm[H].Sb = function (a) {
        var b = bm.i.Sb[I](this, a),
            c = this.Go;
        c.ka(a | 1);
        this.Ul = this.Zo.cloneNode(!0);
        Ri(this.Ul);
        a = g[z]("http://www.w3.org/2000/svg", "g");
        a[r](this.Ul);
        a[r](b);
        return a
    };
    bm[H].Sc = function () {
        return this.Ul
    };
    bm[H].g = function () {
        bm.i.g[I](this);
        this.Go.g()
    };
    var cm = function (a) {
        Xl[I](this, a)
    };
    N(cm, Xl);
    P.e(Lk, cm);
    K = cm[H];
    K.La = function (a, b) {
        cm.i.La[I](this, a, b);
        if (b & 224) {
            gh(this.Li);
            this.wb[Af](this.yn, p[Rb]);
            this.b.nk(this.b.Ab, this);
            var c = this.b.Cd;
            c.Jc(this.bf);
            c.Jc(this.xn);
            this.b.ah ? this.bf[Od]("opacity") : this.bf[x]("opacity", 0)
        }
        for (c = this.yn; c < this.wb[G]; ++c) this.wb[c][I](this)
    };
    K.Ci = function (a, b, c, d, e) {
        var h = this.Li,
            k = h;
        if (a[v].url) {
            var n = g[z]("http://www.w3.org/2000/svg", "a");
            n[x]("pointer-events", "visible");
            n[me]("http://www.w3.org/1999/xlink", "xlink:href", a[v].url);
            a[v].ep && n[x]("target", a[v].ep);
            k = n;
            h[r](n)
        }
        a[v].Hi() ? this.Wt(a, b, c, d, e, k) : (a = this.Xt(a, b, c, d, e), k[r](a))
    };
    K.Sb = function () {
        var a = g[z]("http://www.w3.org/2000/svg", "g");
        this.wb = [];
        this.Li = g[z]("http://www.w3.org/2000/svg", "g");
        this.bf = g[z]("http://www.w3.org/2000/svg", "rect");
        this.Eh(this.bf, "fill", 4294967295);
        this.Eh(this.bf, "stroke", 4278190080);
        this.bf[x]("stroke-width", "10");
        var b = g[z]("http://www.w3.org/2000/svg", "clipPath"),
            c = Uh.la().ma();
        b[x]("id", c);
        this.xn = g[z]("http://www.w3.org/2000/svg", "rect");
        b[r](this.xn);
        a[r](b);
        this.Li[x]("clip-path", "url(#" + c + ")");
        a[r](this.bf);
        a[r](this.Li);
        this.yn = this.wb[G];
        return a
    };
    K.Xt = function (a, b, c, d) {
        var e = g[z]("http://www.w3.org/2000/svg", "text");
        e[x]("fill-rule", "nonzero");
        e[x]("style", "white-space:pre");
        e[x]("font-size", 20 * a[v].Yk());
        var h = a[ce];
        a[v][Vd] ? e[x]("font-family", a[v].Vk()) : e[Od]("font-family");
        e[x]("y", c + 0.9 * d);
        e[x]("x", b);
        a[v][Te] && e[x]("font-weight", "bold");
        a[v][le] && e[x]("font-style", "italic");
        a[v][Me] && e[x]("letter-spacing", a[v][Me]);
        e[r](g.createTextNode(q(h)));
        a[v].kb && e[x]("text-decoration", "underline");
        this.Eh(e, "fill", a[v][re]);
        return e
    };
    K.Wt = function (a, b, c, d, e, h) {
        b = a.dl(b, c, d, e);
        c = g[z]("http://www.w3.org/2000/svg", "path");
        c[x]("d", b[Sc]());
        this.Eh(c, "fill", a[v][re]);
        h[r](c)
    };
    var Mj = function (a, b, c, d, e) {
        this.Ba = a;
        this.Mc = b;
        pb(this, c);
        gb(this, d);
        this.Zl = [];
        this.Jp = e;
        this.ve = 0;
        d && !d.df && (this.ve |= 512)
    };
    K = Mj[H];
    K.Qu = function (a, b) {
        var c = new this[id](this.Ba, a, this[F], this[ke], b);
        this.Zl[D](c);
        c.gm(this.hm)
    };
    K.set = function (a) {
        this.Mc[x](this[F], a[Sc]())
    };
    K.gm = function (a) {
        a = this.Jp ? this.Jp(a) : a;
        this.set(a)
    };
    Xa(K, function () {
        this.hm = this[ke].Da(this);
        this.gm(this.hm);
        for (var a = 0; a < this.Zl[G]; a++) this.Zl[a].gm(this.hm)
    });
    K.Va = function () {
        return this.Ba.b.Va() / 65535
    };
    var bk = function (a, b, c, d) {
        Mj[I](this, a, b, c, d);
        this.ve |= 2048
    };
    N(bk, Mj);
    bk[H].set = function (a) {
        var b = this.Ba.b.na(),
            b = 20 / ((b.Bd() + b.ae()) / 2);
        this.Mc[x](this[F], a < b ? b : a)
    };
    var Jj = function (a, b, c, d) {
        Mj[I](this, a, b, c, d);
        this.opacity = ("-color" == c[ee](-6) ? c[ee](0, -6) : c) + "-opacity";
        this.ve |= 4096
    };
    N(Jj, Mj);
    Jj[H].set = function (a) {
        a = this.Ba.b.zb()[B](a);
        this.Mc[x](this[F], a[Sc]());
        this.Mc[x](this.opacity, a.Se[Xb](3))
    };
    var dm = function (a) {
        Xl[I](this, a);
        this.Qi = [];
        this.Ri = [];
        this.Lh = [];
        this.wa = this.qg = this.yl = null
    };
    N(dm, Xl);
    P.e(Wk, dm);
    K = dm[H];
    K.Sb = function (a) {
        this.yl = g[z]("http://www.w3.org/2000/svg", "g");
        this.op(a);
        return this.yl
    };
    K.op = function (a) {
        this.wa = this.Er(this.b.a.ac.Lb);
        this.lk = void 0;
        this.jn(a)
    };
    K.ys = function () {
        var a = this.b[t];
        if (!this.qg) {
            var b = g[z]("http://www.w3.org/2000/svg", "image");
            b[x]("width", a.rk);
            b[x]("height", a.qk);
            b[x]("x", a.zi);
            b[x]("y", a.Ai);
            b[me]("http://www.w3.org/1999/xlink", "xlink:href", a.yi);
            this.qg = b
        }
        return this.qg
    };
    K.Er = function (a) {
        this.wb = [];
        for (var b = this.b[t], c = b[Fd], d = [], e = b[rc], h = 0; h < e[G]; h++)
            if (e[h]) {
                var k = e[h].vc(b[Lc], this);
                null != k && (this.Qi[h] = k, a[r](k))
            }
        e = b[xe];
        for (h = 0; h < e[G]; h++) e[h] && (k = e[h].vc(b[Lc], this), null != k && (this.Ri[h] = k, a[r](k)));
        a = b[Lc] && b[Lc][G] ? b[Lc][0] : void 0;
        for (h = 0; h < c[G]; h++) {
            var e = c[h],
                k = g[z]("http://www.w3.org/2000/svg", "path"),
                n = this[x](k, "d", e[s], Mj);
            null != e[kf] && (k = b[xe][e[kf]].kf(this, e, n, k, this.Ri[e[kf]], "stroke"));
            if (null != e[Rc]) {
                var u = b[rc][e[Rc]],
                    k = u.kf(this, e, n, k, this.Qi[e[Rc]],
                        "fill");
                u.mj && this.wb[D](Wl(k, a))
            } else k[x]("fill", "none");
            d[D](k)
        }
        if (1 == d[G]) k = d[0];
        else
            for (k = g[z]("http://www.w3.org/2000/svg", "g"), h = 0; h < d[G]; h++) k[r](d[h]);
        return k
    };
    K.Va = function () {
        return this.b.Va() / 65535
    };
    K.setAttribute = function (a, b, c, d) {
        a = new d(this, a, b, c);
        a[B]();
        d == Mj && c.df || !a.ve || this.Lh[D](a);
        return a
    };
    K.g = function () {
        dm.i.g[I](this);
        for (var a = 0; a < this.Qi[G]; a++) hh(this.Qi[a]);
        for (a = 0; a < this.Ri[G]; a++) hh(this.Ri[a]);
        this.Lh = []
    };
    K.jn = function (a) {
        var b = this.yl;
        b && (a = 0 == (a & 1) && 0 == (a & 2) && this.b.Fl(), this.lk != a && (b[uc] && b[hf](b[uc]), a ? b[r](this.ys()) : b[r](this.wa), this.lk = a))
    };
    K.La = function (a, b) {
        dm.i.La[I](this, a, b);
        this.jn(a);
        for (var c = 0; c < this.Lh[G]; c++) b & this.Lh[c].ve && this.Lh[c][B]()
    };
    var em = function (a) {
        dm[I](this, a)
    };
    N(em, dm);
    P.e(Yk, em);
    em[H].La = function (a, b) {
        b & 1024 && this.op(0);
        em.i.La[I](this, a, b)
    };
    var fm = function (a) {
        Xl[I](this, a);
        this.fh = !1;
        this.b.r(1)
    };
    N(fm, Xl);
    P.e(bl, fm);
    K = fm[H];
    K.Sb = function () {
        return this.$u()
    };
    K.$u = function () {
        var a = g[z]("http://www.w3.org/2000/svg", "g");
        a[x]("fill-rule", "nonzero");
        a[x]("opacity", 1);
        for (var b = this.b[t], c = 0; c < b[ef][G]; c++) {
            var d = b[ef][c],
                e = cl(d, b[fe]),
                h = g[z]("http://www.w3.org/2000/svg", "path");
            h[x]("d", e[Sc]());
            a[r](h);
            this.Eh(h, "fill", d[re])
        }
        return a
    };
    K.Sc = function () {
        var a = this.xs;
        if (!a) {
            var b = this.da,
                a = this.b[t];
            if (1 === a[Yd]) {
                var c = a[Lc],
                    a = g[z]("http://www.w3.org/2000/svg", "rect");
                c.Jc(a);
                Ri(a);
                b[r](a)
            } else a = b;
            this.xs = a
        }
        return a
    };
    K.Kc = function (a, b) {
        var c = this.b;
        if (b & 2048) {
            var d = c.na(),
                e = c.a.Gf,
                c = c.Ta().Qa.J();
            c.u(e);
            c.u(d);
            1 > c[Tb]() || 1 > c[Rd]() ? this.fh || (this.fh = !0, b |= 1) : this.fh && (this.fh = !1, b |= 1)
        }
        fm.i.Kc[I](this, a, b)
    };
    K.Re = function () {
        return this.fh ? "scale(0)" : fm.i.Re[I](this)
    };
    var gm = function (a) {
        am[I](this, a)
    };
    N(gm, am);
    P.e(el, gm);
    gm[H].Sb = function (a) {
        return gm.i.Sb[I](this, a)
    };
    gm[H].Sc = function () {
        return this.Qe()
    };
    var hm = function (a) {
        am[I](this, a);
        this.Yf = g[z]("http://www.w3.org/2000/svg", "rect")
    };
    N(hm, gm);
    P.e(Ml, hm);
    hm[H].Sb = function (a) {
        a = hm.i.Sb[I](this, a);
        var b = g[z]("http://www.w3.org/2000/svg", "g");
        b[r](this.Yf);
        b[r](a);
        return b
    };
    hm[H].Kc = function (a, b) {
        if (b & 524288) {
            var c = this.b,
                d = c.dh;
            this.Yf[x]("x", d.j);
            this.Yf[x]("y", d.k);
            this.Yf[x]("width", d.p * (c.Yd + c.nc));
            this.Yf[x]("height", d.l * (c.Zd + c.mc));
            this.Yf[x]("fill", c[ve])
        }
        hm.i.Kc[I](this, a, b)
    };
    var im = function (a) {
        this.a = a;
        this.wa = g[z]("http://www.w3.org/2000/svg", "svg");
        this.wa[x]("color-interpolation-filters", "sRGB");
        this.wa[x]("fill-rule", "evenodd");
        this.wa[x]("pointer-events", "none");
        this.wa[x]("width", "100%");
        this.wa[x]("height", "100%");
        this.wa[A].MozUserSelect = "none";
        this.wa[A].webkitUserSelect = "none";
        this.wa[A].Sr = "none";
        this.wa[A].Tr = "none";
        this.wa[x]("xmlns", "http://www.w3.org/2000/svg");
        this.wa[me]("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
        this.fl =
            g[z]("http://www.w3.org/2000/svg", "g");
        this.wa[r](this.fl);
        this.Lb = g[z]("http://www.w3.org/2000/svg", "defs");
        this.wa[r](this.Lb)
    };
    P.hk(im);
    K = im[H];
    K.Jg = function (a) {
        a[r](this.wa)
    };
    K.Wj = function (a) {
        this.Lb[r](a.Lb)
    };
    K.tj = function (a) {
        this.fl[x]("transform", a[Sc]())
    };
    K.sj = function () {
        var a = El(this.a),
            b = this.fl,
            a = a.ka(0, []),
            c = b[uc];
        c != a && (c ? b[ae](a, c) : b[r](a))
    };
    K.g = function () {
        this.a.Nd()
    };
    K.Ui = function (a) {
        a = a[mc]("image/png");
        return "data:image/png" == a[Qc](0, 14) ? a : null
    };
    K.Nj = function (a, b) {
        if ("createTouch" in g) {
            yh(a, "touchstart", this.sh, !1, this);
            yh(a, "touchmove", this.vo, !1, this);
            yh(a, "touchend", this.il, !1, this);
            var c = yh(g, "touchstart", this.jl, !1, this)
        } else yh(a, "mousemove", this.vo, !1, this), yh(a, "mousedown", this.js, !1, this), yh(a, "mouseup", this.ls, !1, this), yh(a, "mouseout", this.ks, !1, this), yh(a, "mouseover", function (a) {
            a[kd]()
        }, !1), c = yh(g, "mousedown", this.a.Zn, !1, this.a), b[D](c), c = yh(g, "mouseup", this.a.$n, !1, this.a), b[D](c), c = yh(g, "mouseover", function (a) {
            this.a.yc(null,
                a)
        }, !1, this.a);
        b[D](c)
    };
    K.sh = function (a) {
        this.a.yc(null, a);
        this.a.Bl(a)
    };
    K.jl = function (a) {
        this.a.yc(null, a)
    };
    K.vo = function (a) {
        a[kd]();
        this.a.yc(null, a)
    };
    K.il = function (a) {
        a[kd]();
        this.a.El()
    };
    K.js = function (a) {
        a[kd]();
        this.a.Bl(a)
    };
    K.ls = function (a) {
        2 != a[ne] && (a[kd](), this.a.El())
    };
    K.ks = function (a) {
        var b;
        if (!(b = !a.relatedTarget)) {
            b = this.a.dc;
            var c = a.relatedTarget;
            if (b[Id] && 1 == c[ge]) b = b == c || b[Id](c);
            else if ("undefined" != typeof b.compareDocumentPosition) b = b == c || ga(b.compareDocumentPosition(c) & 16);
            else {
                for (; c && b != c;) c = c[xf];
                b = c == b
            }
            b = !b
        }
        b && this.a.yc(null, a)
    };
    var jm = function (a) {
        Xl[I](this, a);
        this.qg = null
    };
    N(jm, Xl);
    P.e(yk, jm);
    jm[H].Sb = function () {
        return g[z]("http://www.w3.org/2000/svg", "g")
    };
    jm[H].Va = function () {
        return 1
    };
    jm[H].dm = function () {
        var a = this.qg;
        a || (a = this.qg = g[z]("http://www.w3.org/2000/svg", "image"), this.da[r](a));
        var b = this.b.Pb;
        a[x]("width", 20 * b.ja());
        a[x]("height", 20 * b.Bb());
        a[me]("http://www.w3.org/1999/xlink", "xlink:href", b.io())
    };
    jm[H].La = function (a, b) {
        jm.i.La[I](this, a, b);
        b && this.dm()
    };
    var km = function (a) {
        this.b = a;
        this.Td = null
    };
    Nl.e(ok, km);
    km[H].qe = function () {
        return ""
    };
    km[H].In = function (a) {
        if (this.b.N) return this.Td = null, this.b.N = 0, this.qe(a);
        null == this.Td && (this.Td = this.qe(a));
        return this.Td
    };
    km[H].g = function () {};
    var lm = function (a) {
        km[I](this, a)
    };
    N(lm, km);
    Nl.e(uk, lm);
    Nl.e(zk, lm);
    Nl.e(Ak, lm);
    Nl.e(el, lm);
    lm[H].qe = function (a) {
        a = this.b.P()[Ad](a);
        for (var b = "", c = this.b.C.oa; c;) b += c.bc(Nl).In(a), c = c[Nc];
        return b
    };
    var mm = function (a) {
        km[I](this, a);
        this.Kh = null
    };
    N(mm, km);
    Nl.e(Lk, mm);
    mm[H].qe = function (a) {
        this.Kh = new Ai;
        this.b.nk(this.b.Ab, this);
        a = this.Kh.hl(this.b.P()[Ad](a));
        this.Kh = null;
        return a
    };
    mm[H].Ci = function (a, b, c, d, e) {
        a = a.dl(b, c, d, e);
        this.Kh = this.Kh[bc](a)
    };
    var nm = function (a) {
        km[I](this, a)
    };
    N(nm, km);
    Nl.e(Wk, nm);
    Nl.e(Yk, nm);
    nm[H].qe = function (a) {
        var b = this.b[t],
            c;
        if (0 == this.b.Va()) c = b.qe();
        else {
            c = new Ai;
            for (var d = 0; d < b[Fd][G]; d++)
                if (null != b[Fd][d][Rc]) {
                    var e = b[Fd][d][s].Da(this);
                    c = c[bc](e)
                }
        }
        return c.hl(this.b.P()[Ad](a))
    };
    nm[H].Va = function () {
        return this.b.Va() / 65535
    };
    var om = function (a) {
        km[I](this, a)
    };
    N(om, km);
    Nl.e(bl, om);
    om[H].qe = function (a) {
        for (var b = this.b[t], c = b[ef], d = new Ai, e = 0; e < c[G]; e++) var h = cl(c[e], b[fe]),
        d = d[bc](h);
        a = this.b.P()[Ad](a);
        return d.hl(a)
    };
    var nk = new fk("canvas");
    If("swiffy.Canvas", nk, void 0);
    var pm = function (a) {
        this.b = a;
        this.pi = null
    };
    nk.e(ok, pm);
    K = pm[H];
    K.Vb = function (a, b) {
        var c = !0;
        if (b & 16 && this.b.P().vr()) this.bn(a), c = this.ed(a, b), this.ur(a);
        else if (!(b & 16) && (this.b.$d || b & 8)) {
            a[od]();
            this.If(a);
            this.bn(a);
            if (!this.b.Jb() || b & 8) c = this.ed(a, b), this.pi = null;
            else {
                var d = this.b.Ta().Qa.J(),
                    e = this.b.a,
                    h = e.Gf,
                    h = h[Je](-e.Yd, -e.Zd),
                    h = this.b.na()[Ad](h);
                d.u(h);
                e = new yi(0, 0, e.nc, e.mc);
                d.ik(e);
                d.$m();
                var k = d[Tb](),
                    n = d[Rd]();
                0 < k && 0 < n ? (e = this.pi, null == e ? this.pi = e = g[sc]("canvas") : this.b.N && e[Ie]("2d")[ze](0, 0, e[Tb], e[Rd]), this.b.N && (na(e, k), Za(e, n), k = e[Ie]("2d"),
                    k[Je](-d.c, -d.d), h.Za(k), this.ed(k, b)), h.oc().Za(a), Ta(a, this.b.oi().Zg(a[wd])), a[bf](e, d.c, d.d)) : this.pi = null
            }
            a[Hd]()
        }
        b & 8 || (this.b.N = 0);
        return c
    };
    K.ed = function () {
        return !1
    };
    K.bn = function (a) {
        this.b.P().Za(a)
    };
    K.ur = function (a) {
        this.b.P().oc().Za(a)
    };
    K.g = function () {};
    K.Mb = function () {
        return this.b.Mb()
    };
    K.If = function (a) {
        var b = this.b,
            c = b.Ke,
            d = null;
        if (!c || c.fj() && this.b.fj()) c && (d = c.bc(nk), (e = b[Nb]() != c[Nb]()) ? (c = c[Nb]().na(), c = c[Ad](b[Nb]().Kb()), c.Za(a), d.Vb(a, 0), Ra(a, "source-in"), c.oc().Za(a)) : (d.Vb(a, 0), Ra(a, "source-in")));
        else {
            var d = c.bc(nk),
                e = b[Nb]() != c[Nb]();
            e ? (c = c[Nb]().na(), c = c[Ad](b[Nb]().Kb()), c.Za(a), a[Ae](), d.Vb(a, 16), a[Zc](), c.oc().Za(a)) : (a[Ae](), d.Vb(a, 16), a[Zc]())
        }
    };
    var qm = function (a) {
        pm[I](this, a)
    };
    N(qm, pm);
    nk.e(sk, qm);
    qm[H].Vb = function (a, b) {
        b & 8 || !this.b || !this.b.eh || this.b.a.ac.Dr(this.b);
        return qm.i.Vb[I](this, a, b)
    };
    var sm = function (a) {
        pm[I](this, a);
        this.ie = new rm(a.C)
    };
    N(sm, qm);
    nk.e(uk, sm);
    nk.e(el, sm);
    nk.e(kl, sm);
    nk.e(Ml, sm);
    sm[H].ed = function (a, b) {
        return this.ie.Vb(a, b)
    };
    sm[H].g = function () {
        sm.i.g[I](this);
        this.ie.g()
    };
    var tm = function (a) {
        this.a = a;
        this.dj = g[z]("http://www.w3.org/1999/xhtml", "canvas");
        this.vh = []
    };
    nk.hk(tm);
    K = tm[H];
    K.tj = function (a) {
        this.Nc = a
    };
    K.Jg = function (a) {
        a[r](this.dj)
    };
    K.Nj = function (a, b) {
        if ("createTouch" in g) {
            yh(a, "touchstart", this.sh, !1, this);
            yh(a, "touchmove", this.vk, !1, this);
            yh(a, "touchend", this.il, !1, this);
            var c = yh(g, "touchstart", this.jl, !1, this)
        } else yh(a, "mousemove", this.uk, !1, this), yh(a, "mousedown", this.Ei, !1, this), yh(a, "mouseup", this.jo, !1, this), yh(a, "mouseout", this.es, !1, this), yh(a, "mouseover", function (a) {
            a[kd]()
        }, !1), c = yh(g, "mousedown", this.a.Zn, !1, this.a), b[D](c), c = yh(g, "mouseup", this.a.$n, !1, this.a), b[D](c), c = yh(g, "mouseover", function (a) {
            this.a.yc(null,
                a)
        }, !1, this.a);
        b[D](c)
    };
    K.uk = function (a) {
        a[kd]();
        a = this.a.gj(a);
        this.a.hj(this.Bo(a), a.x, a.y)
    };
    K.Ei = function (a) {
        a[kd]();
        if (2 != a[ne]) {
            a = this.a.gj(a);
            var b = this.Bo(a);
            b && this.a.hj(b, a.x, a.y);
            this.a.Jk()
        }
    };
    K.Bo = function (a) {
        for (var b = this.vh[G] - 1; 0 <= b; b--) {
            var c = this.vh[b];
            if (c.oh && c !== this.a.Wa)
                if (c instanceof zk) {
                    if (c.Ck(a.x, a.y)) return c
                } else {
                    var d = c.Ta().cd().J();
                    d.u(c.na());
                    if (d[Id](a.x, a.y) && c.Ck(a.x, a.y)) return c
                }
        }
        return null
    };
    K.jo = function (a) {
        a[kd]();
        2 != a[ne] && this.a.El()
    };
    K.es = function (a) {
        a[kd]();
        a = this.a.gj(a);
        this.a.hj(null, a.x, a.y)
    };
    K.sh = function (a) {
        this.a.yc(null, a);
        this.Ei(a)
    };
    K.jl = function (a) {
        this.a.yc(null, a)
    };
    K.vk = function (a) {
        this.a.yc(null, a);
        a[kd]()
    };
    K.il = function (a) {
        this.jo(a)
    };
    K.Dr = function (a) {
        this.vh[D](a)
    };
    K.ms = function (a) {
        a = this.vh[pe](a); - 1 != a && this.vh[Af](a, 1)
    };
    K.Wj = function () {};
    K.sj = function () {
        var a = this.a;
        na(this.dj, a.nc);
        Za(this.dj, a.mc);
        var b = this.dj[Ie]("2d");
        this.Vr(b);
        this.Nc && this.Nc.Za(b);
        a.bc(nk).Vb(b, 0)
    };
    K.Vr = function (a) {
        var b = this.a;
        /rgba.*|hsla.*|transparent/ [$d](b[ve]) && a[ze](0, 0, b.nc, b.mc);
        a[Ae]();
        a[df](0, 0, b.nc, b.mc);
        Ha(a, b[ve]);
        a[Rc]()
    };
    K.Ui = function (a) {
        return a
    };
    K.g = function () {
        tm.i.g[I](this);
        this.a.Nd()
    };
    var rm = function (a) {
        this.C = a;
        this.Ra = []
    };
    K = rm[H];
    K.Vb = function (a, b) {
        this.Ch();
        for (var c = [], d = this.C.oa, e = !0; d;) {
            for (; 0 < c[G] && d[Cc] > c[c[G] - 1];) c.pop(), a[Hd]();
            var h;
            b & 8 ? h = nk.Dd(d) : (h = d.bc(nk), this.Ra[D](d));
            !(b & 16) && d.Le() || null != d.lb ? d instanceof Lk || null != d.lb || (a[od](), a[Ae](), e = h.Vb(a, b | 16) && e, a[Zc](), c[D](h.Mb())) : e = h.Vb(a, b) && e;
            d = d[Nc]
        }
        for (d = 0; d < c[G]; d++) a[Hd]();
        return e
    };
    K.Ch = function () {
        for (var a = this.Ra[G] - 1; 0 <= a; --a) {
            var b = this.Ra[a];
            b.Hd() && b.Nd()
        }
        this.Ra = []
    };
    K.g = function () {
        for (var a = 0; a < this.Ra[G]; ++a) {
            var b = this.Ra[a];
            b.Nd();
            b.a.ac.ms(b)
        }
    };
    K.If = function () {};
    K.Mb = function () {};
    var um = function (a) {
        pm[I](this, a)
    };
    N(um, pm);
    nk.e(Wk, um);
    nk.e(Yk, um);
    K = um[H];
    K.ed = function (a, b) {
        return b & 16 ? this.Cs(a) : b & 8 || !this.b.Fl() ? this.Es(a) : this.Ds(a)
    };
    K.Cs = function (a) {
        for (var b = this.b[t], c = 0; c < b[Fd][G]; c++) {
            var d = b[Fd][c][s].Da(this);
            d.ne(a, d.ca)
        }
        return !0
    };
    K.Ds = function (a) {
        var b = this.b[t];
        Ta(a, this.b.zb().Zg(a[wd]));
        a[bf](b.yi, b.zi, b.Ai, b.rk, b.qk);
        return !0
    };
    K.Es = function (a) {
        for (var b = this.b[t], c = !0, d = 0; d < b[Fd][G]; d++) {
            var e = b[Fd][d],
                h = e[s].Da(this),
                k = null != e[kf] ? b[xe][e[kf]] : null,
                e = null != e[Rc] ? b[rc][e[Rc]] : null;
            a[Ae]();
            h.ne(a, h.ca);
            e && (a[od](), c = e.Za(a, this, h, this.b.zb()) && c, a[Hd]());
            k && (c = k.Za(a, this, h, this.b.zb(), this.b.na()) && c)
        }
        return c
    };
    K.Va = function () {
        return this.b.Va() / 65535
    };
    var vm = function (a) {
        pm[I](this, a)
    };
    N(vm, pm);
    nk.e(Lk, vm);
    vm[H].ed = function (a, b) {
        if (!(b & 16)) {
            a[Ae]();
            var c = this.b.Cd;
            a[df](c.c, c.d, c.F - c.c, c.D - c.d);
            this.b.ah && (c = Li(4294967295), c = this.b.zb()[B](c), Ha(a, c.Lc()), a[Rc](), c = Li(4278190080), this.b.zb()[B](c), a.strokeStyle = Li(4278190080).Lc(), a.lineWidth = 10, a[Gc]())
        }
        this.Ci = Vf(wm, this, a, !! (b & 16), this.b);
        this.b.nk(this.b.Ab, this);
        return !0
    };
    vm[H].Ci = function () {};
    var wm = function (a, b, c, d, e, h, k, n) {
        d[v].Hi() ? (e = d.dl(e, h, k, n), h = e.ca, b ? e.ne(a, h) : (a[Ae](), e.ne(a, h), c = Li(d[v][re]), c = this.b.zb()[B](c), Ha(a, c.Lc()), a[Rc]())) : (b = "", d[v][Te] && (b += "bold "), d[v][le] && (b += "italic "), b += 20 * d[v].Yk() * c.na().Bd() + "px", c = Li(d[v][re]), c = this.b.zb()[B](c), b = d[v][Vd] ? b + (" " + d[v].Vk()) : b + " sans-serif", ab(a, b), Ha(a, c.Lc()), a.fillText(d[ce], e, h + k))
    };
    var xm = function (a) {
        pm[I](this, a)
    };
    N(xm, pm);
    nk.e(bl, xm);
    xm[H].ed = function (a, b) {
        for (var c = this.b[t], d = 0; d < c[ef][G]; d++) {
            var e = c[ef][d],
                h = cl(e, c[fe]);
            this.Hr(h, e[re], a, !! (b & 16))
        }
        b & 8 && 1 === c[Yd] && (c = c[Lc], c.Ua() || a[Md](c.c, c.d, c.F - c.c, c.D - c.d));
        return !0
    };
    xm[H].Hr = function (a, b, c, d) {
        var e = a.ca;
        d ? a.ne(c, e) : (c[Ae](), a.ne(c, e), a = Li(b), a = this.b.zb()[B](a), Ha(c, a.Lc()), c[Rc]())
    };
    var ym = function (a) {
        pm[I](this, a)
    };
    N(ym, pm);
    nk.e(yk, ym);
    ym[H].ed = function (a, b) {
        var c = this.b.Pb;
        b & 24 ? b & 8 ? a[Md](0, 0, 20 * c.ja(), 20 * c.Bb()) : a[df](0, 0, 20 * c.ja(), 20 * c.Bb()) : a[bf](c.m[Qd], 0, 0, 20 * c.ja(), 20 * c.Bb());
        return !0
    };
    var zm = function (a) {
        sm[I](this, a);
        this.Po = new rm(a.We)
    };
    N(zm, sm);
    nk.e(zk, zm);
    nk.e(Ak, zm);
    zm[H].ed = function (a, b) {
        return b & 8 ? this.Po.Vb(a, b) : zm.i.ed[I](this, a, b)
    };
    zm[H].g = function () {
        zm.i.g[I](this);
        this.Po.g()
    };
    var Am = function (a) {
        this.a = a
    };
    Fl.hk(Am);
    K = Am[H];
    K.sj = function () {
        this.a.map(function (a) {
            a.N = 0
        })
    };
    K.g = function () {};
    K.Jg = function () {};
    K.Wj = function () {};
    K.tj = function () {};
    K.Ui = function () {
        return null
    };
    K.Nj = function () {};
    Fl.e(Ml, Am);
    var Bm = function (a) {
        this.b = a;
        this.da = this.q = this.Lf = this.be = this.Ze = this.Fa = this.K = null;
        this.Pc = 1;
        this.wb = []
    };
    Gl.e(ok, Bm);
    K = Bm[H];
    K.Qe = function () {
        return this.q
    };
    K.bm = function (a) {
        return Li(a, this.b.zb())
    };
    K.Wf = function (a) {
        this.q || (this.da = this.Sb(a), Ka(this.da[A], "absolute"), this.q = this.da, this.ti());
        return this.q
    };
    K.ka = function (a, b) {
        this.Wf(a);
        var c = this.b.N;
        c && (this.Kc(a, c), this.La(a, c), this.Jd(c), this.b.N = 0);
        this.If(b);
        return this.q
    };
    K.La = function () {};
    K.Kc = function (a, b) {
        this.Wf(a);
        var c = this.b;
        c.Kf ? b & 1048576 && yb(this.Sc()[A], "none") : a & 1 && !(c instanceof uk) ? yb(this.Sc()[A], "visiblePainted") : b & 1048576 && yb(this.Sc()[A], "");
        b & 8 && (this.q[A].display = c.$d ? "inline" : "none");
        b & 40960 && this.zk();
        b & 4096 && (b |= 8192);
        b & 8192 && this.yk() && (b |= 2);
        b & 1 && (c = this.Re(), ob(this.da[A], c), Hb(this.da[A], c), this.da[A].transformOrigin = "0 0", this.da[A].webkitTransformOrigin = "0 0");
        b & 16384 && this.ti();
        b & 2 ? Il && this.Bk( !! (a & 4)) : this.K && (b & 2048 || b & 16384) && this.ph( !! (a & 4));
        this.Ak()
    };
    K.Bk = function (a) {
        var b = "SourceGraphic",
            c = this.b.Ca;
        this.K && gh(this.K);
        this.Pc = 1;
        for (var d = 0; d < c[G]; ++d) {
            var e = c[d].Cc(this);
            e.aj(b);
            b = e[ad]();
            this.Pc = l.max(this.Pc, c[d].Xk())
        }
        this.Fa && this.Fa.Cc(this).aj(b);
        this.ph(a);
        this.hb && (this.hb[A][Jg ? "webkitFilter" : "filter"] = 0 < this.K[Fc][G] ? "url(#" + this.K.id + ")" : "")
    };
    K.Sc = function () {
        return this.q
    };
    K.Re = function () {
        return this.b.P()[Sc]()
    };
    K.ti = function () {};
    K.Oc = function (a) {
        var b = g[sc]("div");
        Ka(b[A], "absolute");
        ih(b, a);
        b[r](a);
        this.q == a && (this.q = b);
        return b
    };
    K.zk = function () {
        var a = Jg ? "webkitClipPath" : "clipPath",
            b = Jg ? "webkitMask" : "mask",
            c = this.b,
            d = c.Ke,
            e = this.be;
        if (d) {
            e || (this.be = e = this.Oc(this.da, "dynmask"), ob(e[A], "translate(0,0)"));
            var h = !(d.Jb() && this.b.Jb()),
                k;
            k = h ? d.bc(P.jd) : d.bc(P.kd);
            if (c[Nb]() != d[Nb]()) {
                var n, u = this.Lf;
                n = h ? "clipPath" : "mask";
                u && u[yc] != n && (hh(u), u = null);
                u ? (Hg && !Wg(10) && (u.id = Uh.la().ma()), n = u[uc]) : (this.Lf = u = g[z]("http://www.w3.org/2000/svg", n), u.id = Uh.la().ma(), c.a.ac.Lb[r](u), n = g[z]("http://www.w3.org/2000/svg", "use"), u[r](n));
                n[me]("http://www.w3.org/1999/xlink", "xlink:href", "#" + k.mk());
                d = d[Nb]().na();
                d = d[Ad](c[Nb]().Kb());
                n[x]("transform", d[Sc]());
                c = u.id
            } else c = k.pc();
            h ? (e[A][b] = "", e[A][a] = "url(#" + c + ")") : (e[A][a] = "", e[A][b] = "url(#" + c + ")")
        } else e && (e[A][a] = "", e[A][b] = "")
    };
    K.If = function (a) {
        var b = this.Ze;
        if (b || a[G]) {
            var c = Jg ? "webkitClipPath" : "clipPath",
                d = this.Mi;
            b || (this.q = this.Ze = b = this.Oc(this.q, "clip-path"), ob(b[A], "translate(0,0)"), d = 1);
            for (var e = 0, h = l.min(d, a[G]); e < h;) b[A][c] = "url(#" + a[e].pc() + ")", b = b[uc], ++e;
            if (a[G] > h)
                for (h = a[G]; e < h;) d = this.Oc(b, "clip-path"), ob(d[A], "translate(0,0)"), d[A][c] = "url(#" + a[e].pc() + ")", ++e;
            else if (d > h)
                for (h = d, b == this.Ze && (b[A][c] = "", b = b[uc], ++e); e < h;) c = b[uc], ih(c, b), b = c, ++e;
            this.Mi = a[G]
        }
    };
    K.g = function () {
        hh(this.Qe());
        hh(this.Lf);
        hh(this.K)
    };
    K.Mf = function () {
        null == this.K && (this.K = g[z]("http://www.w3.org/2000/svg", "filter"), this.K[x]("filterUnits", "userSpaceOnUse"), this.K[x]("x", 0), this.K[x]("y", 0), this.K[x]("width", 0), this.K[x]("height", 0), this.K.id = Uh.la().ma(), this.hb = this.Oc(this.be || this.da, "filter"), this.b.a.ac.Lb[r](this.K));
        return this.K
    };
    K.ph = function () {
        var a = this.b[Nb]().Kb(),
            b = this.b.hn(),
            c = this.Mf();
        if (b.Ua()) c[x]("width", 0), c[x]("height", 0);
        else {
            var d = l[Yb]((b.F - b.c) / 20),
                e = l[Yb]((b.D - b.d) / 20),
                h = d,
                k = e;
            5E4 < d * e && (h = l[$b](h / this.Pc), k = l[$b](k / this.Pc));
            b = b.J();
            b.u(a);
            b.Jc(c);
            h < d ? c[x]("filterRes", h + " " + k) : c[Od]("filterRes")
        }
    };
    K.Ak = function () {
        for (var a = this.b.Ca, b = 0; b < a[G]; ++b) a[b].Cc(this).ka();
        this.Fa && this.Fa.Cc(this).ka()
    };
    K.yk = function () {
        var a = this.b,
            b = a.oi(),
            a = a.yb(),
            a = l.min(a, 1);
        if (1 < a || 1 == a && !b.ok()) return this.Fa ? this.Fa.Yn(a) : (this.Fa = new Yl(a), this.hb && this.hb[Od]("opacity")), !0;
        b = b.O[Xb](3);
        if (1 != b || this.hb) this.Mf(), this.hb[A].opacity = b;
        return this.Fa ? (this.Fa = null, !0) : !1
    };
    K.Jd = function (a) {
        if (a & 4098) {
            if (a = this.b.Ca)
                for (var b = 0; b < a[G]; ++b) a[b].Cc(this).Jd();
            this.Fa && this.Fa.Cc(this).Jd()
        }
    };
    var Cm = function (a, b, c) {
        this.C = a;
        this.q = b;
        this.Lb = c;
        this.Ra = []
    };
    Cm[H].ka = function (a) {
        this.Ch();
        for (var b = [], c = this.C.oa, d = null; c;) {
            for (; 0 < b[G] && c[Cc] > b[b[G] - 1].Mb();) b.pop();
            if (c.Le() || null != c.lb) e = El(c), this.Ra[D](c), h = e.ka(a, b), h[xf] || this.Lb[r](h), !c.Le() || c instanceof Lk || b[D](e);
            else {
                var e = c.bc(Gl);
                this.Ra[D](c);
                var h = e.ka(a, b),
                    d = d ? d[Nc] : this.q[uc];
                d != h && (this.q.insertBefore(h, d), d = h)
            }
            c = c[Nc]
        }
        for (d = d ? d[Nc] : this.q[uc]; d;) a = d, d = d[Nc], this.q[hf](a)
    };
    Cm[H].Ch = function () {
        for (var a = this.Ra[G] - 1; 0 <= a; --a) {
            var b = this.Ra[a];
            b.Hd() && b.Nd()
        }
        this.Ra = []
    };
    Cm[H].g = function () {
        for (var a = 0; a < this.Ra[G]; ++a) this.Ra[a].Nd()
    };
    var Dm = function (a) {
        Bm[I](this, a);
        this.Pe = g[sc]("div");
        this.ie = new Cm(a.C, this.Pe, a.a.ac.Lb)
    };
    N(Dm, Bm);
    Gl.e(uk, Dm);
    Gl.e(el, Dm);
    Gl.e(zk, Dm);
    Gl.e(Ak, Dm);
    Dm[H].Yi = function (a) {
        this.b instanceof zk ? a &= -2 : this.b[xd]() && this.b[Nb]() != this.b.a && (a |= 1);
        return a
    };
    Dm[H].La = function (a, b) {
        Dm.i.La[I](this, a, b);
        a = this.Yi(a);
        b & 65552 && this.ie.ka(a)
    };
    Dm[H].g = function () {
        Dm.i.g[I](this);
        this.ie.g()
    };
    Dm[H].Sb = function () {
        return this.Pe
    };
    var Em = function (a) {
        Dm[I](this, a)
    };
    N(Em, Dm);
    Gl.e(Ml, Em);
    Em[H].Kc = function (a, b) {
        if (b & 524288) {
            var c = this.b,
                d = c.dh;
            kb(this.q[A], d.j + "px");
            this.q[A].top = d.k + "px";
            na(this.q[A], d.p * (c.Yd + c.nc) + "px");
            Za(this.q[A], d.l * (c.Zd + c.mc) + "px");
            this.q[A].backgroundColor = c[ve]
        }
        Em.i.Kc[I](this, a, b)
    };
    var Fm = function (a) {
        this.a = a;
        this.q = g[sc]("div");
        Ka(this.q[A], "absolute");
        this.q[A].bw = "sRGB";
        this.q[A].cw = "geometricPrecision";
        this.q[A].fillRule = "evenodd";
        yb(this.q[A], "none");
        this.q[A].MozUserSelect = "none";
        this.q[A].webkitUserSelect = "none";
        this.q[A].Sr = "none";
        this.q[A].Tr = "none";
        this.Lb = g[z]("http://www.w3.org/2000/svg", "defs");
        a = g[z]("http://www.w3.org/2000/svg", "svg");
        na(a[A], "0px");
        Za(a[A], "0px");
        Ka(a[A], "absolute");
        a[r](this.Lb);
        this.q[r](a)
    };
    Gl.hk(Fm);
    K = Fm[H];
    K.Jg = function (a) {
        a[r](this.q)
    };
    K.Wj = function (a) {
        this.Lb[r](a.Lb)
    };
    K.tj = function (a) {
        a = a[Sc]();
        ob(this.q[A], a);
        Hb(this.q[A], a);
        this.q[A].webkitTransformOrigin = "0 0";
        this.q[A].transformOrigin = "0 0"
    };
    K.sj = function () {
        var a = this.a.bc(Gl),
            b = this.q,
            a = a.ka(0, []),
            c = b[uc][Nc];
        c != a && (c ? b[ae](a, c) : b[r](a))
    };
    K.g = function () {
        this.a.Nd()
    };
    K.Ui = function (a) {
        a = a[mc]("image/png");
        return "data:image/png" == a[Qc](0, 14) ? a : null
    };
    K.Nj = function () {};
    var Gm = function (a) {
        Bm[I](this, a)
    };
    N(Gm, Bm);
    Gl.e(yk, Gm);
    Gm[H].Sb = function () {
        return g[sc]("img")
    };
    Gm[H].Va = function () {
        return 1
    };
    Gm[H].dm = function () {
        var a = this.da,
            b = this.b.Pb;
        a[x]("width", 20 * b.ja());
        a[x]("height", 20 * b.Bb());
        a[x]("src", b.io())
    };
    Gm[H].La = function (a, b) {
        Gm.i.La[I](this, a, b);
        b && this.dm()
    };
    var Hm = function (a) {
        Bm[I](this, a);
        this.de = P.Dd(a);
        this.wa = null
    };
    N(Hm, Bm);
    Gl.e(Wk, Hm);
    Gl.e(Yk, Hm);
    Gl.e(bl, Hm);
    Gl.e(Lk, Hm);
    K = Hm[H];
    K.Sb = function (a) {
        var b = g[z]("http://www.w3.org/2000/svg", "svg");
        Ka(b[A], "absolute");
        b[r](this.de.Wf(a));
        a = g[sc]("div");
        a[r](b);
        this.wa = b;
        return a
    };
    K.g = function () {
        Hm.i.g[I](this);
        this.de.g()
    };
    K.La = function (a, b) {
        Hm.i.La[I](this, a, b);
        this.de.La(a, b);
        this.de.Jd(b)
    };
    K.ti = function () {
        Hm.i.ti[I](this);
        var a = this.b.Ta().Qa;
        this.wa[x]("viewBox", a[Sc]());
        na(this.wa[A], a[Tb]() + "px");
        Za(this.wa[A], a[Rd]() + "px");
        kb(this.wa[A], a.c + "px");
        this.wa[A].top = a.d + "px"
    };
    K.Re = function () {
        return this.de.Re()
    };
    var Im = function (a) {
        this.N = !0;
        this.pd = a
    };
    Gb(Im[H], function () {
        return !1
    });
    Im[H].Cc = function (a) {
        this.pd.ru(a);
        return this.pd
    };
    var Jm = [];
    ya(Im[H], function () {
        return new Im(null)
    });
    Im[H].ei = function () {
        return new yi(0, 0, 0, 0)
    };
    var Lm = function (a, b, c, d) {
        var e = new yi;
        c = Km(b, c);
        b = Km(b, d);
        e[Ub](3 * -c, 3 * -b);
        e[Ub](3 * +c, 3 * +b);
        a.add(e)
    }, Mm = function (a, b, c) {
            a[Ub](l.cos(b) * c * 20, l.sin(b) * c * 20)
        };
    Im[H].Xk = function () {
        return 1
    };
    var Km = function (a, b) {
        var c = 1;
        switch (a) {
        case 1:
            c = 4;
            break;
        case 2:
            c = 3;
            break;
        case 3:
            c = 2
        }
        return l.abs(20 * b / c)
    }, Nm = function (a) {
            this.Ba = null;
            this.filter = a;
            this.Qb = [];
            this.Ql = null;
            this.wb = [];
            this.yh = [];
            this.Vo = null
        };
    K = Nm[H];
    K.ru = function (a) {
        this.Ba = a
    };
    K.aj = function (a) {
        if (this[Kb].N || this.Vo != a) this.Vo = a, this.Qb = [], this.yh = [], this.wb = [], this.ye(a);
        a = this.Ba.Mf();
        for (var b = 0; b < this.Qb[G]; b++) a[r](this.Qb[b]);
        this.N = !1
    };
    K.ye = function () {};
    K.result = function () {
        null == this.Ql && (this.Ql = Uh.la().ma());
        return this.Ql
    };
    K.Pu = function (a, b, c, d) {
        var e = g[z]("http://www.w3.org/2000/svg", "feBlend");
        e[x]("mode", a);
        L(c) && e[x]("in", c);
        e[x]("in2", b);
        L(d) && e[x]("result", d);
        this.Qb[D](e)
    };
    K.lp = function (a, b, c, d, e) {
        var h = g[z]("http://www.w3.org/2000/svg", "feGaussianBlur");
        L(d) && h[x]("in", d);
        L(e) && h[x]("result", e);
        d = function (d) {
            var e = new ri(b, c);
            e.u(d);
            h[x]("stdDeviation", Km(a, e.x) + " " + Km(a, e.y))
        };
        d(this.el());
        this.yh[D](d);
        this.Qb[D](h)
    };
    K.Id = function (a, b, c, d, e, h, k) {
        var n = g[z]("http://www.w3.org/2000/svg", "feComponentTransfer");
        L(h) && n[x]("in", h);
        L(k) && n[x]("result", k);
        L(e) || (e = "linear");
        h = ["feFuncR", "feFuncG", "feFuncB", "feFuncA"];
        a = [a, b, c, d];
        for (b = 0; 4 > b; ++b) {
            c = null;
            for (var u in a[b]) null == c && (c = g[z]("http://www.w3.org/2000/svg", h[b]), c[x]("type", e)), c[x](u, a[b][u]);
            c && n[r](c)
        }
        this.Qb[D](n);
        return n
    };
    K.Sk = function (a, b, c) {
        var d = this.Id({
            intercept: 0
        }, {
            intercept: 0
        }, {
            intercept: 0
        }, {
            slope: 0
        }, void 0, void 0, c),
            e = this;
        this.wb[D](function () {
            for (var c = e.Ba.bm(a), k = 0; k < d[Fc][G]; ++k) {
                var n = d[Fc][k];
                switch (n[yc]) {
                case "feFuncR":
                    n[x]("intercept", c.ng / 255);
                    break;
                case "feFuncG":
                    n[x]("intercept", c.mg / 255);
                    break;
                case "feFuncB":
                    n[x]("intercept", c.lg / 255);
                    break;
                case "feFuncA":
                    n[x]("slope", c.Se * b)
                }
            }
        })
    };
    K.Na = function (a, b, c, d, e) {
        var h = g[z]("http://www.w3.org/2000/svg", "feComposite");
        L(e) && h[x]("result", e);
        L(b) && h[x]("in", b);
        L(c) && h[x]("in2", c);
        h[x]("operator", a);
        if (L(d))
            for (var k in d) h[x](k, d[k]);
        this.Qb[D](h)
    };
    K.os = function (a) {
        var b = g[z]("http://www.w3.org/2000/svg", "feFlood");
        L(a) && b[x]("result", a);
        b[x]("flood-color", "black");
        this.Qb[D](b)
    };
    K.lu = function (a, b, c, d) {
        var e = g[z]("http://www.w3.org/2000/svg", "feOffset");
        L(c) && e[x]("in", c);
        L(d) && e[x]("result", d);
        this.fu(e, a, b);
        this.Qb[D](e)
    };
    K.fu = function (a, b, c) {
        var d = l.cos(b) * c * 20,
            e = l.sin(b) * c * 20;
        b = function (b) {
            var c = new ri(d, e);
            c.u(b);
            a[x]("dx", c.x);
            a[x]("dy", c.y)
        };
        b(this.el());
        this.yh[D](b)
    };
    K.Tk = function (a, b, c, d, e, h, k) {
        if (0 < c || 0 < d) this.lp(b, c, d, a), a = void 0;
        0 != h && (this.lu(e, h, a), a = void 0);
        this.Id({
            slope: 0
        }, {
            slope: 0
        }, {
            slope: 0
        }, {}, "linear", a, k)
    };
    K.Zc = function () {
        return Uh.la().ma()
    };
    K.Jd = function () {
        for (var a = this.wb, b = 0; b < a[G]; ++b) a[b][I](this)
    };
    K.el = function () {
        var a = this.Ba.b[Nb]();
        return a ? a.Kb().hd(0, 0) : ti
    };
    K.ka = function () {
        if (this.Ba.b.N & 2048)
            for (var a = this.el(), b = 0; b < this.yh[G]; ++b) this.yh[b](a)
    };
    var Pm = function (a) {
        Im[I](this, new Om(this));
        this.cb = a;
        this.cb[4] /= 255;
        this.cb[9] /= 255;
        this.cb[14] /= 255;
        this.cb[19] /= 255
    };
    N(Pm, Im);
    Jm[3] = function (a) {
        return new Pm(a[fe])
    };
    K = Pm[H];
    ya(K, function () {
        return new Pm(this.Um())
    });
    Gb(K, function (a) {
        return f[Pc](this) == f[Pc](a) ? (this.N = !0, this.cb = a.cb, !0) : !1
    });
    K.ii = function () {
        return new Qm(this.Um())
    };
    K.ji = function () {
        return new Rm(this.Um())
    };
    K.Um = function () {
        var a = this.cb[ee]();
        a[4] *= 255;
        a[9] *= 255;
        a[14] *= 255;
        a[19] *= 255;
        return a
    };
    var Om = function (a) {
        Nm[I](this, a)
    };
    N(Om, Nm);
    Om[H].ye = function (a) {
        var b = g[z]("http://www.w3.org/2000/svg", "feColorMatrix");
        b[x]("in", a);
        b[x]("result", this[ad]());
        b[x]("type", "matrix");
        b[x]("values", this[Kb].cb[Cf](" "));
        this.Qb[D](b)
    };
    var Tm = function (a, b, c, d, e, h, k, n) {
        Im[I](this, new Sm(this));
        this.zg = a;
        this.Th = b;
        this.Fb = c;
        this.Ag = d;
        this.cb = e;
        this.Bg = h;
        this.Cg = k;
        this.Dg = n
    };
    N(Tm, Im);
    Jm[5] = function (a) {
        return new Tm(a[ac], a[Ye], a[re], a[cf], a[fe], a[Ke], a[Le], a[ic])
    };
    ya(Tm[H], function () {
        return new Tm(this.zg, this.Th, this.Fb, this.Ag, this.cb, this.Bg, this.Cg, this.Dg)
    });
    Gb(Tm[H], function (a) {
        return f[Pc](this) == f[Pc](a) ? (this.N = !0, this.zg = a.zg, this.Th = a.Th, this.Fb = a.Fb, this.Ag = a.Ag, this.cb = a.cb, this.Bg = a.Bg, this.Cg = a.Cg, this.Dg = a.Dg, !0) : !1
    });
    Tm[H].ii = function () {
        return new Um(this.Bg, this.Cg, this.cb, this.Ag, this.zg, this.Dg, this.Th, this.Fb & 16777215, (this.Fb >>> 24) / 255)
    };
    Tm[H].ji = function () {
        return new Vm(this.Bg, this.Cg, this.cb, this.Ag, this.zg, this.Dg, this.Th, this.Fb & 16777215, (this.Fb >>> 24) / 255)
    };
    var Sm = function (a) {
        Nm[I](this, a)
    };
    N(Sm, Nm);
    Sm[H].ye = function (a) {
        var b = g[z]("http://www.w3.org/2000/svg", "feConvolveMatrix");
        b[x]("in", a);
        b[x]("result", this[ad]());
        b[x]("order", this[Kb].Bg + "," + this[Kb].Cg);
        b[x]("divisor", this[Kb].Ag);
        b[x]("bias", this[Kb].zg / 255);
        b[x]("kernelMatrix", this[Kb].cb[ee]().reverse()[Cf](" "));
        b[x]("preserveAlpha", this[Kb].Dg);
        this.Qb[D](b)
    };
    var Xm = function (a, b, c) {
        Im[I](this, new Wm(this));
        this.za = a;
        this.ta = b;
        this.ua = c
    };
    N(Xm, Im);
    Jm[2] = function (a) {
        return new Xm(a[Ff], a.x, a.y)
    };
    K = Xm[H];
    ya(K, function () {
        return new Xm(this.za, this.ta, this.ua)
    });
    Gb(K, function (a) {
        return f[Pc](this) == f[Pc](a) ? (this.N = !0, this.ta = a.ta, this.ua = a.ua, this.za = a.za, !0) : !1
    });
    K.ii = function () {
        return new Ym(this.ta, this.ua, this.za)
    };
    K.ji = function () {
        return new Zm(this.ta, this.ua, this.za)
    };
    K.Xk = function () {
        return 1 < this.ta && 1 < this.ua ? 2 : 1
    };
    K.ei = function () {
        var a = new yi(0, 0, 0, 0);
        Lm(a, this.za, this.ta, this.ua);
        return a
    };
    var Wm = function (a) {
        Nm[I](this, a)
    };
    N(Wm, Nm);
    Wm[H].ye = function (a) {
        var b = this[Kb];
        this.lp(b.za, b.ta, b.ua, a, this[ad]())
    };
    var an = function (a, b, c, d, e, h, k, n, u, y) {
        Im[I](this, new $m(this));
        this.ob = a;
        this.Fb = b;
        this.pb = c;
        this.Zb = d;
        this.za = e;
        this.ta = h;
        this.ua = k;
        this.ef = n;
        this.$a = u;
        this.Rb = y
    };
    N(an, Im);
    Jm[1] = function (a) {
        return new an(a[fd], a[re], a[Kd], a[nf], a[Ff], a.x, a.y, a[Qb], a[dd], a[kc])
    };
    K = an[H];
    ya(K, function () {
        return new an(this.ob, this.Fb, this.pb, this.Zb, this.za, this.ta, this.ua, this.ef, this.$a, this.Rb)
    });
    Gb(K, function (a) {
        return f[Pc](this) == f[Pc](a) ? (this.N = !0, this.ob = a.ob, this.pb = a.pb, this.Zb = a.Zb, this.za = a.za, this.ta = a.ta, this.ua = a.ua, this.Fb = a.Fb, this.ef = a.ef, this.$a = a.$a, this.Rb = a.Rb, !0) : !1
    });
    K.ii = function () {
        return new bn(this.pb, this.ob, this.Fb & 16777215, (this.Fb >>> 24) / 255, this.ta, this.ua, this.Zb, this.za, this.$a, this.Rb, this.ef)
    };
    K.ji = function () {
        return new cn(this.pb, this.ob, this.Fb & 16777215, (this.Fb >>> 24) / 255, this.ta, this.ua, this.Zb, this.za, this.$a, this.Rb, this.ef)
    };
    K.ei = function () {
        var a = new yi(0, 0, 0, 0);
        Mm(a, this.ob, this.pb);
        Lm(a, this.za, this.ta, this.ua);
        return a
    };
    var $m = function (a) {
        Nm[I](this, a);
        this.Gh = this.Zc()
    };
    N($m, Nm);
    $m[H].ye = function (a) {
        var b = this[Kb];
        b.$a && this.os("black");
        this.Tk(a, b.za, b.ta + 1, b.ua + 1, b.ob, b.pb);
        b.$a && this.Na("arithmetic", void 0, "black", {
            k2: -1,
            k3: 1
        });
        this.Sk(b.Fb, b.Zb, this.Gh);
        b.$a || b.Rb || b.ef ? !b.$a || b.Rb || b.ef ? !b.$a && b.Rb ? this.Na("out", this.Gh, a) : b.$a && this.Na("in", this.Gh, a) : this.Na("atop", this.Gh, a) : this.Na("over", a, this.Gh);
        this.Qb[this.Qb[G] - 1][x]("result", this[ad]())
    };
    var en = function (a, b, c, d, e, h, k, n, u, y, C) {
        Im[I](this, new dn(this));
        this.ob = a;
        this.Ac = b;
        this.Bc = c;
        this.pb = d;
        this.Zb = e;
        this.za = h;
        this.ta = k;
        this.ua = n;
        this.xh = u;
        this.$a = y;
        this.Rb = C
    };
    N(en, Im);
    Jm[4] = function (a) {
        return new en(a[fd], a.highlight, a.shadow, a[Kd], a[nf], a[Ff], a.x, a.y, a.onTop, a[dd], a[kc])
    };
    K = en[H];
    ya(K, function () {
        return new en(this.ob, this.Ac, this.Bc, this.pb, this.Zb, this.za, this.ta, this.ua, this.xh, this.$a, this.Rb)
    });
    Gb(K, function (a) {
        return f[Pc](this) == f[Pc](a) ? (this.N = !0, this.ob = a.ob, this.Ac = a.Ac, this.Bc = a.Bc, this.pb = a.pb, this.Zb = a.Zb, this.za = a.za, this.ta = a.ta, this.ua = a.ua, this.xh = a.xh, this.$a = a.$a, this.Rb = a.Rb, !0) : !1
    });
    K.ii = function () {
        return new fn(this.pb, this.ob, this.Ac & 16777215, (this.Ac >>> 24) / 255, this.Bc & 16777215, (this.Bc >>> 24) / 255, this.ta, this.ua, this.Zb, this.za, this.$a ? "inner" : "outer", this.Rb)
    };
    K.ji = function () {
        return new gn(this.pb, this.ob, this.Ac & 16777215, (this.Ac >>> 24) / 255, this.Bc & 16777215, (this.Bc >>> 24) / 255, this.ta, this.ua, this.Zb, this.za, this.$a ? "inner" : "outer", this.Rb)
    };
    K.ei = function () {
        var a = new yi(0, 0, 0, 0);
        Mm(a, this.ob, -this.pb);
        Mm(a, this.ob, this.pb);
        Lm(a, this.za, this.ta, this.ua);
        return a
    };
    var dn = function (a) {
        Nm[I](this, a);
        this.Bc = this.Zc();
        this.Ac = this.Zc();
        this.Vn = this.Zc();
        this.Un = this.Zc();
        this.ug = this.Zc()
    };
    N(dn, Nm);
    dn[H].ye = function (a) {
        this.wb = [];
        var b = this[Kb];
        this.Tk(a, b.za, b.ta, b.ua, b.ob, -b.pb, this.Ac);
        this.Tk(a, b.za, b.ta, b.ua, b.ob, b.pb, this.Bc);
        this.Na("arithmetic", this.Ac, this.Bc, {
            k2: 1,
            k3: -1
        });
        this.Sk(b.Ac, b.Zb, this.Un);
        this.Na("arithmetic", this.Bc, this.Ac, {
            k2: 1,
            k3: -1
        });
        this.Sk(b.Bc, b.Zb, this.Vn);
        this.Na("arithmetic", this.Un, this.Vn, {
            k2: 1,
            k3: 1
        }, this.ug);
        b.Rb ? b.$a ? this.Na("in", this.ug, a) : b.xh || this.Na("out", this.ug, a) : b.$a ? this.Na("atop", this.ug, a) : b.xh ? this.Na("over", this.ug, a) : this.Na("over", a, this.ug);
        this.Qb[this.Qb[G] - 1][x]("result", this[ad]())
    };
    var Yl = function (a) {
        Im[I](this, new hn(this));
        this.mode = a
    };
    N(Yl, Im);
    Gb(Yl[H], function (a) {
        this.N = !1;
        return f[Pc](this) == f[Pc](a) && this[Yd] == a[Yd]
    });
    ya(Yl[H], function () {
        return new Yl(this[Yd])
    });
    Yl[H].Yn = function (a) {
        this.mode = a
    };
    var hn = function (a) {
        Nm[I](this, a)
    };
    N(hn, Nm);
    K = hn[H];
    K.ye = function (a) {
        this.cu(a, "BlendSource");
        a = "BlendSource";
        switch (this[Kb][Yd]) {
        case 5:
        case 4:
        case 2:
        case 3:
            this.$t(qi[this[Kb][Yd]], a);
            break;
        case 7:
            this.Zt(a);
            break;
        case 6:
            this.au(a);
            break;
        case 8:
            this.eu(a);
            break;
        case 13:
            this.bu(a);
            break;
        case 12:
            this.du(a)
        }
    };
    K.cu = function (a, b) {
        var c = this.Id({
            intercept: 0
        }, {
            intercept: 0
        }, {
            intercept: 0
        }, {
            slope: 0
        }, "linear", a, b),
            d = this;
        this.wb[D](function () {
            for (var a = d.Ba.b.oi(), b = 0; b < c[Fc][G]; ++b) {
                var k = c[Fc][b];
                switch (k[yc]) {
                case "feFuncR":
                    k[x]("slope", a.Y);
                    k[x]("intercept", a.T / 255);
                    break;
                case "feFuncG":
                    k[x]("slope", a.X);
                    k[x]("intercept", a.S / 255);
                    break;
                case "feFuncB":
                    k[x]("slope", a.W);
                    k[x]("intercept", a.Q / 255);
                    break;
                case "feFuncA":
                    Ul(k, a.O, a.U / 255)
                }
            }
        })
    };
    K.$t = function (a, b) {
        this.Pu(a, "BackgroundImage", b)
    };
    K.Zt = function (a) {
        this.Na("arithmetic", a, "BackgroundImage", {
            k2: 1,
            k3: 1
        })
    };
    K.eu = function (a) {
        var b = this.mm(a);
        this.lm(b, "BackgroundImage");
        this.vf(a)
    };
    K.au = function (a) {
        var b = this.Ej(a),
            c = this.mm(a),
            d = this.Ej("BackgroundImage"),
            e = this.mm("BackgroundImage"),
            b = this.lm(b, e),
            c = this.lm(c, d);
        this.Na("arithmetic", b, c, {
            k2: 1,
            k3: 1
        });
        this.Wh(a)
    };
    K.bu = function (a) {
        var b = this.Ej("BackgroundImage"),
            c = this.Zc();
        this.Id({
            slope: 2,
            intercept: -1
        }, {
            slope: 2,
            intercept: -1
        }, {
            slope: 2,
            intercept: -1
        }, {
            slope: 0,
            intercept: 1
        }, "linear", a);
        this.Na("arithmetic", void 0, b, {
            k1: -1,
            k2: 1,
            k3: 1
        }, c);
        this.Id({
            slope: 2,
            intercept: 0
        }, {
            slope: 2,
            intercept: 0
        }, {
            slope: 2,
            intercept: 0
        }, {
            slope: 0,
            intercept: 1
        }, "linear", a);
        this.Na("arithmetic", void 0, c, {
            k1: 1
        });
        this.Wh(a)
    };
    K.du = function (a) {
        var b = this.Ej(a),
            c = this.Zc();
        this.Id({
            slope: 2,
            intercept: -1
        }, {
            slope: 2,
            intercept: -1
        }, {
            slope: 2,
            intercept: -1
        }, {
            slope: 0,
            intercept: 1
        }, "linear", "BackgroundImage");
        this.Na("arithmetic", void 0, b, {
            k1: -1,
            k2: 1,
            k3: 1
        }, c);
        this.Id({
            slope: 2,
            intercept: 0
        }, {
            slope: 2,
            intercept: 0
        }, {
            slope: 2,
            intercept: 0
        }, {}, "linear", "BackgroundImage");
        this.Na("arithmetic", void 0, c, {
            k1: 1
        });
        this.vf(a)
    };
    K.Wh = function (a) {
        this.Na("in", void 0, "BackgroundImage");
        this.vf(a)
    };
    K.vf = function (a) {
        this.Na("atop", void 0, a, void 0, this[ad]())
    };
    K.lm = function (a, b) {
        var c = this.Zc();
        this.Na("arithmetic", a, b, {
            k2: 1,
            k3: 1,
            k4: -1
        }, c);
        return c
    };
    K.Ej = function (a) {
        var b = this.Zc();
        this.Id({}, {}, {}, {
            slope: 0,
            intercept: 1
        }, "linear", a, b);
        return b
    };
    K.mm = function (a) {
        var b = this.Zc();
        this.Id({
            slope: -1,
            intercept: 1
        }, {
            slope: -1,
            intercept: 1
        }, {
            slope: -1,
            intercept: 1
        }, {
            slope: 0,
            intercept: 1
        }, "linear", a, b);
        return b
    };
    var kn = function () {
        Im[I](this, new jn(this))
    };
    N(kn, Im);
    Jm[0] = function (a) {
        return new kn(a)
    };
    kn[H].ei = function () {
        return new yi(0, 0, 0, 0)
    };
    ya(kn[H], function () {
        return this
    });
    var jn = function (a) {
        Nm[I](this, a)
    };
    N(jn, Nm);
    Xa(jn[H], function () {});
    jn[H].ye = function () {};
    var ln = function () {};
    ln[H].Ib = function () {};
    var mn = [];
    var nn = function (a) {
        this.id = a
    };
    N(nn, ln);
    K = nn[H];
    K.sa = !1;
    K.ea = function () {
        return null
    };
    K.Rc = function () {
        return null
    };
    K.sm = function (a) {
        this.Sj = a;
        a[H][rd]("__swiffy_buildsym") || on(a, this)
    };
    K.Ib = function (a, b, c) {
        c.nq(this.id, this)
    };
    var pn = function () {};
    N(pn, ln);
    K = pn[H];
    K.Hh = function () {};
    K.Cl = function () {};
    K.jf = function () {};
    K.vl = function () {};
    K.Mm = function () {};
    K.mi = function () {};
    var rn = function (a, b) {
        for (var c = 0; c < a[G]; ++c)
            if (a[c] instanceof qn && a[c][Cc] == b) return c;
        return -1
    };
    pn[H].Ib = function (a, b, c, d) {
        a[Oc][d] || (a[Oc][d] = []);
        a[Oc][d][D](this)
    };
    var sn = function (a, b, c, d, e, h, k) {
        sa(this, a);
        za(this, b);
        Hb(this, c);
        this.states = d;
        this.tn = e;
        Eb(this, h);
        lb(this, k)
    }, tn = function (a, b, c) {
            wb(this, a);
            this.key = b;
            this.events = c
        }, un = function (a, b) {
            this.events = a;
            this.sound = b
        }, vn = function (a, b, c, d, e) {
            this.id = a;
            this.trackAsMenu = b;
            this.records = c;
            wb(this, d);
            this.sounds = e
        };
    N(vn, nn);
    mn[10] = function (a, b, c) {
        for (var d = [], e = 0; a[ef] && e < a[ef][G]; e++) {
            var h = a[ef][e],
                k = h[Ef] ? Gi(h[Ef]) : null,
                n = h[qf] ? Ki(h[qf]) : null,
                u = void 0;
            if (h[vf])
                for (var u = [], y = 0; y < h[vf][G]; y++) u[D]((0, Jm[h[vf][y][E]])(h[vf][y]));
            L(h.id) && d[D](new sn(c.ue(h.id), h[Cc], k, h[zc], n, u, h[Ce]))
        }
        c = [];
        for (e = 0; a[We] && e < a[We][G]; e++) h = b.Xe(Kl), k = a[We][e], c[D](new tn(h.Ad(k[We]), k.key, k[ie]));
        b = [];
        for (e = 0; a[Be] && e < a[Be][G]; e++) h = a[Be][e], b[D](new un(h[ie], h[wc]));
        return new vn(a.id, a[Gd], d, c, b)
    };
    vn[H].Rc = function (a, b, c) {
        return new zk(this, a, b, c)
    };
    vn[H].sa = !0;
    var wn = function (a) {
        vn[I](this, a, !1, [], [], [])
    };
    N(wn, vn);
    wn[H].Rc = function (a, b, c) {
        return new Ak(this, a, b, c)
    };
    var xn = function (a, b, c, d) {
        this.id = a;
        ab(this, b);
        Za(this, c);
        ib(this, L(d) ? d : 4278190080);
        this.autoSize = "none"
    };
    N(xn, nn);
    mn[13] = function (a, b, c) {
        c = L(a[Vd]) ? c.ue(a[Vd]) : null;
        c = new xn(a.id, c, a[Rd], a[re]);
        db(c, a[ce]);
        c.align = a[yf];
        Fa(c, zi(a[Lc]));
        c.html = !! a.html;
        c.wrap = !! a.wrap;
        c.multiline = !! a[md];
        bb(c, a[Wd]);
        qa(c, a[Zb]);
        $a(c, a[Sd]);
        Da(c, a[Hc]);
        c.border = !! a.border;
        c.variable = a[Xe] || null;
        c.sa = 6 <= b.mb;
        c.selectable = !! a.selectable;
        c.editable = !! a.editable;
        c.password = !! a.password;
        c.maxChars = a.maxChars || null;
        c.en = !! a.embed;
        c.autoSize = a.autoSize ? "left" : "none";
        return c
    };
    xn[H].Rc = function (a, b, c) {
        return new Lk(this, a, b, c)
    };
    var yn = function (a, b, c) {
        pa(this, a);
        this.unicode = b;
        this.advance = c
    }, Ck = function (a, b, c, d, e, h, k, n) {
            this.id = a;
            pb(this, b);
            this.glyphs = c;
            this.emSquareSize = d;
            this.ascent = e;
            this.descent = h;
            sb(this, k);
            hb(this, n);
            this.lineHeight = (e + h) / d;
            this.ek = {};
            for (a = 0; a < c[G]; a++) this.ek[c[a].unicode] = c[a]
        };
    N(Ck, nn);
    var Dk = new Ck(-1, "", [], 0, 0, 0, !1, !1);
    mn[5] = function (a) {
        for (var b = a[Jc] ? a[Jc] : 1024, c = [], d = 0; a[pd] && d < a[pd][G]; d++) c[D](new yn(Ei(a[pd][d][s]), a[pd][d].unicode, a[pd][d][sf]));
        return new Ck(a.id, a[F], c, b, a[Mb] ? a[Mb] : 0, a[Ue] ? a[Ue] : 0, a[Te], a[le])
    };
    K = Ck[H];
    K.Qe = function () {
        return this.Ea
    };
    K.yp = function (a) {
        return this.ek[a] ? this.ek[a][s] : null
    };
    K.Bj = function (a) {
        return this.ek[a]
    };
    K.ea = function () {
        return null
    };
    K.Ib = function (a, b, c, d) {
        Ck.i.Ib[I](this, a, b, c, d);
        a = this[F];
        b.tc[a] || (b.tc[a] = []);
        b.tc[a][D](this)
    };
    var Qj = function (a, b, c, d, e, h) {
        this.id = a;
        pa(this, b);
        this.mask = c;
        na(this, d);
        Za(this, e);
        this.transparent = h;
        this.rc = null
    };
    N(Qj, nn);
    mn[8] = function (a) {
        return new Qj(a.id, a[s], a[yd], a[Tb], a[Rd], !(!a.transparent && !a[yd]))
    };
    K = Qj[H];
    K.Qe = function () {
        return this.Ea
    };
    K.ea = function (a) {
        var b = this.ap(this[s]);
        this.Ea = b;
        a.pj();
        this[yd] ? USING_SWIFFY_MOCKS && !Kg ? (this.Is(b), a.rf()) : this.Hs(b, a) : (this.rc = new Image, ma(this.rc, this.rc.onerror = function () {
            a.rf()
        }), this.rc.src = this[s]);
        b.id = this.Do = Uh.la().ma();
        return this.Ea
    };
    K.Hs = function (a, b) {
        var c = this[Tb],
            d = this[Rd],
            e = g[sc]("canvas");
        na(e, this[Tb]);
        Za(e, this[Rd]);
        var h = new Image,
            k = new Image,
            n = !1,
            u = !1,
            y = this,
            C = function () {
                if (n && u) {
                    var C = e[Ie]("2d");
                    C[ze](0, 0, c, d);
                    C[bf](h, 0, 0, c, d);
                    Ra(C, "destination-in");
                    C[bf](k, 0, 0, c, d);
                    C = e[mc]("image/png");
                    a[me]("http://www.w3.org/1999/xlink", "xlink:href", C);
                    y.rc = new Image;
                    ma(y.rc, y.rc.onerror = function () {
                        b.rf()
                    });
                    y.rc.src = C
                }
            };
        ma(h, function () {
            n = !0;
            C()
        });
        ma(k, function () {
            u = !0;
            C()
        });
        h.src = this[s];
        k.src = this[yd]
    };
    K.Is = function (a) {
        var b = g[z]("http://www.w3.org/2000/svg", "mask");
        b[r](this.ap(this[yd]));
        b.id = Uh.la().ma();
        var c = g[z]("http://www.w3.org/2000/svg", "defs");
        c[r](a);
        c[r](b);
        a[x]("mask", "url(#" + b.id + ")");
        this.Ea = c
    };
    K.ap = function (a) {
        var b = g[z]("http://www.w3.org/2000/svg", "image");
        b[x]("width", this[Tb]);
        b[x]("height", this[Rd]);
        b[me]("http://www.w3.org/1999/xlink", "xlink:href", a);
        return b
    };
    K.Rc = function (a, b, c) {
        return new yk(new xk(this, a), a, c)
    };
    K.sm = function (a) {
        var b = this;
        b.Sj = a;
        zn(a, An(Bn, a) ? function (a, d) {
            return new yk(new xk(b, a), a, d)
        } : function (a, d) {
            return new xk(b, a, d)
        })
    };
    K.Ib = function (a, b, c, d) {
        Qj.i.Ib[I](this, a, b, c, d)
    };
    var Xk = function (a, b, c, d, e) {
        this.id = a;
        this.paths = b;
        Fa(this, c);
        this.fillstyles = d;
        this.linestyles = e;
        this.yi = null;
        this.Ai = this.zi = this.qk = this.rk = 0
    };
    N(Xk, nn);
    Xk[H].Mr = function () {
        if (!this[Lc] || 1 < this[Lc][G]) return !1;
        for (var a = 0, b = 0; b < this[Fd][G]; b++) {
            var c = this[Fd][b],
                d = c[s].Da(uj).ca,
                e = null != c[Rc] ? this[rc][c[Rc]] : null;
            if (e instanceof Rj) return !1;
            a += d[G] * ( !! e + 2 * !(null == c[kf] || !this[xe][c[kf]]))
        }
        return 100 < a
    };
    Xk[H].ea = function (a) {
        if (!Kg || !this.Mr()) return null;
        if (this[Lc] && 1 == this[Lc][G]) {
            var b = g[sc]("canvas"),
                c = this[Lc][0],
                d = l[Yb](c.F / 20) + 1,
                e = l[Yb](c.D / 20) + 1,
                h = l[$b](c.c / 20) - 1,
                c = l[$b](c.d / 20) - 1;
            this.rk = 20 * (d - h);
            this.qk = 20 * (e - c);
            this.zi = 20 * h;
            this.Ai = 20 * c;
            na(b, d - h);
            Za(b, e - c);
            d = b[Ie]("2d");
            d[od]();
            d[Ef](0.05, 0, 0, 0.05, 0, 0);
            d[Je](-this.zi, -this.Ai);
            e = new Wk(this, a, null);
            e = nk.Dd(e);
            (a = a.ac) && e.Vb(d, 0) && (this.yi = a.Ui(b));
            e.g()
        }
    };
    mn[1] = function (a, b, c) {
        b = Wf(Vj, c);
        b = a[rc] ? a[rc].map(b) : [];
        c = Wf(ak, c);
        c = a[xe] ? a[xe].map(c) : [];
        return new Xk(a.id, a[Fd].map(Cn), a[Lc].map(zi), b, c)
    };
    Xk[H].Rc = function (a, b, c) {
        return new Wk(this, a, c)
    };
    Xk[H].qe = function () {
        if (!this.Td) {
            this.Td = new Ai;
            for (var a = 0; a < this[Fd][G]; a++)
                if (null != this[Fd][a][Rc]) {
                    var b = this[Fd][a][s].Da(uj);
                    this.Td = this.Td[bc](b)
                }
        }
        return this.Td
    };
    Xk[H].Pd = function (a) {
        if (this[Lc]) {
            if (1 == this[Lc][G]) return new ck(this[Lc][0]);
            var b = a / 65535,
                b = new yi(Pi(this[Lc][0].c, this[Lc][1].c, b), Pi(this[Lc][0].d, this[Lc][1].d, b), Pi(this[Lc][0].F, this[Lc][1].F, b), Pi(this[Lc][0].D, this[Lc][1].D, b));
            return new ck(b, this[Lc][0])
        }
        for (var b = {
            Va: function () {
                return a / 65535
            }
        }, c = new yi, d = this[Fd], e = 0; e < d[G]; ++e) {
            var h = d[e][s].Da(b).ca,
                k = 0;
            null != d[e][kf] && (k = this[xe][d[e][kf]][Tb].Da(b) / 2);
            for (var n = 0, u = 0, y = 0; n < h[G];) switch (h[n++]) {
            case 0:
                u = h[n++];
                y = h[n++];
                break;
            case 1:
                c.sg(u,
                    y, k);
                u = h[n++];
                y = h[n++];
                c.sg(u, y, k);
                break;
            case 2:
                var C = h[n++],
                    J = h[n++],
                    V = h[n++],
                    va = h[n++],
                    Vb = (C - u) / (2 * C - u - V),
                    Jd = (J - y) / (2 * J - y - va);
                0 < Jd && 1 > Jd && c.sg(u, (1 - Jd) * (1 - Jd) * y + 2 * (1 - Jd) * Jd * J + Jd * Jd * va, k);
                0 < Vb && 1 > Vb && c.sg((1 - Vb) * (1 - Vb) * u + 2 * (1 - Vb) * Vb * C + Vb * Vb * V, y, k);
                u = V;
                y = va;
                c.sg(u, y, k)
            }
        }
        return new ck(c)
    };
    var $k = function (a, b, c) {
        pa(this, a);
        this.fill = b;
        this.line = c
    }, Cn = function (a) {
            return new $k(wj(a[s], Cj, Ei), a[Rc], a[kf])
        };
    var Dn = function (a, b, c) {
        this.id = a;
        this.sound = b;
        this.format = c
    };
    N(Dn, nn);
    mn[11] = function (a) {
        return new Dn(a.id, a[s], a[v])
    };
    Dn[H].Ib = function (a, b) {
        b.Ve().zu(this.id, this[wc], this[v])
    };
    var En = function (a, b, c, d, e, h) {
        db(this, a);
        ab(this, b);
        Za(this, c);
        this.x = d;
        this.y = e;
        ib(this, h)
    }, Fn = function (a, b, c, d, e) {
            this.id = a;
            eb(this, b);
            this.records = c;
            Fa(this, d);
            this.mode = e
        };
    N(Fn, nn);
    mn[6] = function (a, b, c) {
        b = zi(a[Lc]);
        for (var d = Gi(a[fe]), e = L(a[Yd]) ? a[Yd] : 1, h = [], k = 0; a[ef] && k < a[ef][G]; k++) {
            var n = a[ef][k],
                u = L(n[Vd]) ? c.ue(n[Vd]) : null;
            h[D](new En(n[ce], u, n[Rd], Ii(n.x), p(n.y), n[re]))
        }
        return new Fn(a.id, d, h, b, e)
    };
    Fn[H].Rc = function (a, b, c) {
        return new bl(this, a, c)
    };
    var Gn = function (a) {
        wb(this, a)
    };
    N(Gn, pn);
    mn[9] = function (a, b) {
        var c = b.Xe(Kl).Ad(a[We]);
        return new Gn(c)
    };
    Gn[H].Hh = function () {};
    Gn[H].vl = function (a) {
        a.$().gp(new tk(this[We], a))
    };
    Gn[H].Cl = function (a) {
        a.$().Vl(new tk(this[We], a))
    };
    Gn[H].mi = function (a) {
        a[D](this)
    };
    var Hn = function (a) {
        sa(this, a)
    };
    N(Hn, ln);
    mn[18] = function (a, b) {
        return new Hn(a, b)
    };
    Hn[H].Ib = function (a, b) {
        b.Xe(Ll).yu(this)
    };
    var In = function (a) {
        wb(this, a)
    };
    N(In, Gn);
    mn[20] = function (a, b) {
        var c = b.Xe(Kl).Ad(a[We]);
        return new In(c)
    };
    In[H].Ib = function (a, b, c, d) {
        a.Qj[d] || (a.Qj[d] = []);
        a.Qj[d][D](this)
    };
    var Jn = function (a) {
        this.id = a
    };
    N(Jn, pn);
    mn[12] = function (a, b) {
        return new Jn(a.id, b)
    };
    Jn[H].jf = function (a) {
        a.Ve().Jn(this.id)
    };
    Jn[H].Hh = Jn[H].jf;
    Jn[H].mi = function (a) {
        a[D](this)
    };
    var Kn = function (a) {
        this.fq = a
    };
    N(Kn, pn);
    mn[16] = function (a) {
        return new Kn(a[s])
    };
    Kn[H].Ib = function (a, b, c) {
        for (var d in this.fq)
            if (a = c.ue(this.fq[d]).get(), a instanceof jl) a.Te[d] = a, a.sn = d;
            else if (a instanceof Ck) {
            var e = d;
            b.tc[e] || (b.tc[e] = []);
            b.tc[e][D](a)
        }
    };
    var Ln = function (a, b) {
        this.Ef = a;
        this.Pp = {};
        for (var c = 0; c < a[G]; c++) this.Pp[a[c][F]] = a[c][Kc];
        this.Si = {};
        for (c = 0; c < b[G]; c++) this.Si[b[c][F]] = b[c][Kc]
    };
    N(Ln, pn);
    mn[23] = function (a) {
        return new Ln(a.scenes, a.frames)
    };
    K = Ln[H];
    K.Ib = function (a) {
        a.hg = this
    };
    K.Nm = function (a) {
        if (2 > this.Ef[G]) return 0;
        a = pg(this.Ef, function (a, c) {
            return a[Kc] - c[Kc]
        } || qg, !1, {
            offset: a
        });
        0 > a && (a = l.max(0, -a - 2));
        return a
    };
    K.Zp = function (a) {
        return 2 > this.Ef[G] ? 0 : this.Ef[this.Nm(a)][Kc]
    };
    K.Et = function (a) {
        a = this.Nm(a);
        return 0 < a ? this.Ef[a - 1][Kc] : p[of]
    };
    K.Dt = function (a) {
        a = this.Nm(a);
        return a < this.Ef[G] - 1 ? this.Ef[a + 1][Kc] : p[Rb]
    };
    var Mn = function (a) {
        this.zt = a
    };
    N(Mn, ln);
    mn[19] = function (a, b) {
        return new Mn(a.references, b)
    };
    Mn[H].Ib = function (a, b, c) {
        a = this.zt;
        b = b.Xe(Ll).nb;
        for (var d = 0; d < a[G]; d++) {
            var e = a[d],
                h = c.ue(e.id).get(),
                e = b[e[F]];
            h && e && h.sm(e)
        }
    };
    var Nn = function (a) {
        this.ou = a
    };
    N(Nn, pn);
    mn[15] = function (a) {
        return new Nn(a.label)
    };
    Nn[H].Ib = function (a, b, c, d) {
        a.hg.Si[this.ou] = d
    };
    var qn = function (a, b, c, d) {
        sa(this, a);
        za(this, b);
        eb(this, c);
        this.Sf = d;
        this.cacheAsBitmap = !1
    };
    N(qn, pn);
    mn[3] = function (a, b, c, d) {
        var e;
        if (L(a[We])) {
            var h = b.Xe(Kl);
            e = a[We].map(function (a) {
                return {
                    events: a[ie],
                    key: a.key,
                    actions: h.Ad(a[We])
                }
            })
        }
        b = L(a[fe]) ? a[fe] ? Gi(a[fe]) : ti : void 0;
        c = L(a.id) ? c.ue(a.id) : null;
        d = new qn(c, a[Cc], b, d.xk());
        pb(d, a[F]);
        d.ratio = a[gc];
        oa(d, a[Wb]);
        b = !1;
        c && c.tk() && (b = c.get().sa);
        d.sa = b;
        La(d, a[Zc]);
        d.colortransform = L(a[qf]) ? Ki(a[qf]) : void 0;
        lb(d, a[Ce]);
        d.cacheAsBitmap = a.cacheAsBitmap;
        c = void 0;
        if (a[vf])
            for (c = [], b = 0; b < a[vf][G]; b++) c[D]((0, Jm[a[vf][b][E]])(a[vf][b]));
        Eb(d, c);
        wb(d, e);
        d.visible =
            a[Ne];
        return d
    };
    K = qn[H];
    K.jf = function (a) {
        var b = this[Cc] + -16384,
            c = a.C.Qc(b),
            d = null;
        if (!this[Wb] == !c) {
            if (c)
                if (!this[t] || c.sa() || this.sa) d = c;
                else {
                    if (a.ce(b), d = this.bj(a)) d[hc](c.P()), d.qc(c.xb), d.Qf(c.Ca), d.gh(c.yb()), d.kk(c.Mb()), d.Ub(c[oc]())
                } else d = this.bj(a);
            d && !d.Nn() && (this[fe] && d[hc](this[fe]), this[qf] && d.qc(this[qf]), L(this[gc]) && d.Ii(this[gc]), L(this[vf]) && d.Qf(this[vf]), L(this[Ce]) && d.gh(this[Ce]), L(this[Ne]) && d.cj( !! this[Ne]), L(this.cacheAsBitmap) && d.kl(this.cacheAsBitmap))
        }
    };
    K.Hh = function (a) {
        var b = a.C.Qc(this[Cc] + -16384),
            c = null;
        if (b) {
            var c = b.sa() && this.sa,
                d = this[t] ? this[t].id : void 0,
                d = !b.sa() && b[t].id == d;
            (c || d) && b.Va() == (this[gc] | 0) ? c = b : (a.C.Fs(b), c = this.bj(a))
        } else c = this.bj(a); if (c) return c.Nn() || (c[hc](this[fe] ? this[fe] : ti), c.qc(this[qf] ? this[qf] : wi), c.Ii(this[gc] | 0), c.Qf(this[vf] ? this[vf] : []), c.gh(this[Ce] | 0), L(this[Ne]) && c.cj( !! this[Ne])), c
    };
    K.bj = function (a) {
        if (!this[t] || !this[t].tk()) return null;
        var b = this[t].get(),
            c = b.Rc(a.a, this.Sf);
        if (!c) return null;
        this[F] ? c.Ub(this[F]) : a.a.$().En(a.a, c);
        this[Zc] && c.kk(this[Zc] + -16384);
        if (this[We])
            for (c.hh(128), b = 0; b < this[We][G]; ++b) {
                var d = this[We][b];
                c.nn(d[ie], d.key, d[We])
            } else b.sn && c.hh(128);
        a.cc(c, this[Cc] + -16384);
        c.ea(!0);
        return c
    };
    K.Mm = function (a) {
        a[D](this)
    };
    K.mi = function (a) {
        var b = rn(a, this[Cc]);
        if (0 > b) this[Wb] || a[D](this);
        else if (this[Wb]) {
            var c = a[b];
            a[Af](b, 1);
            b = c[t];
            c.sa || this.sa || !this[t] || (b = this[t]);
            b = new qn(b, this[Cc], L(this[fe]) ? this[fe] : c[fe], this.Sf);
            pb(b, c[F]);
            b.ratio = L(this[gc]) ? this[gc] : c[gc];
            oa(b, !1);
            b.sa = c.sa;
            La(b, c[Zc]);
            b.colortransform = L(this[qf]) ? this[qf] : c[qf];
            lb(b, L(this[Ce]) ? this[Ce] : c[Ce]);
            b.visible = L(this[Ne]) ? this[Ne] : c[Ne];
            Eb(b, L(this[vf]) ? this[vf] : c[vf]);
            wb(b, c[We]);
            a[D](b)
        }
    };
    K.vu = function (a) {
        if (!this[We] || !this.sa) return !1;
        for (var b = 0; b < this[We][G]; ++b)
            if (0 != (this[We][b][ie] & a)) return !0;
        return !1
    };
    K.tu = function () {
        var a = new qn(this[t], this[Cc] + -65536, this[fe], this.Sf);
        pb(a, this[F]);
        a.ratio = this[gc];
        oa(a, !1);
        a.sa = !0;
        La(a, 0);
        a.colortransform = this[qf];
        lb(a, this[Ce]);
        Eb(a, this[vf]);
        wb(a, this[We]);
        a.visible = this[Ne];
        return a
    };
    var On = function (a) {
        this.Gm = a
    };
    N(On, pn);
    mn[4] = function (a) {
        return new On(a[Cc])
    };
    K = On[H];
    K.jf = function (a) {
        a.ce(this.Gm + -16384)
    };
    K.Hh = On[H].jf;
    K.Mm = function (a) {
        a[D](this)
    };
    K.mi = function (a) {
        var b = rn(a, this.Gm);
        if (0 <= b) {
            var c = a[b];
            if (c.vu(160)) a[b] = c.tu(), a[D](this.uu());
            else a[Af](b, 1)
        }
    };
    K.uu = function () {
        return new On(this.Gm + -65536)
    };
    var jl = function (a, b, c, d) {
        this.id = a;
        this.Wn = [];
        this.hg = new Ln([], []);
        this.frameCount = b;
        this.scaleRect = c;
        this.tags = [];
        this.Qj = [];
        this.Te = d
    };
    N(jl, nn);
    var ml = function (a, b, c, d) {
        var e = L(a[Ee]) ? zi(a[Ee]) : null,
            e = new jl(a.id, a[qd], e, c.Te);
        L(a.id) || c.nq(0, e);
        if (!d)
            if (d = a.digest) {
                var h = fj[d],
                    k = new dj(h);
                h || (fj[d] = k.gq);
                d = k
            } else d = ej;
        for (k = h = 0; a[Oc] && k < a[Oc][G]; k++) {
            var n = a[Oc][k];
            if (2 == n[E]) h++;
            else {
                var u = mn[n[E]];
                u && u(n, b, c, d).Ib(e, b, c, h)
            }
        }
        e.Gt();
        return e
    };
    mn[7] = ml;
    jl[H].sa = !0;
    jl[H].Rc = function (a, b, c) {
        a = new el(this, a, b, c);
        this[Ee] && a.Vv(this[Ee]);
        return a
    };
    jl[H].Gt = function () {
        for (var a = [], b = 0; b < this[qd]; ++b) {
            for (var c = this[Oc][b], d = [], e = 0; e < a[G]; ++e) a[e].Mm(d);
            if (c)
                for (e = 0; e < c[G]; ++e) c[e].mi(d);
            a = this.Wn[b] = d
        }
    };
    var Jl = function (a, b) {
        this.tq = a ? a : 60;
        this.Ip = 1E3 / this.tq;
        this.ci = 0;
        this.Kp = b;
        this.Ij = !1
    };
    Ua(Jl[H], function () {
    	console.log(1);
        this.Ij || (this.Ij = !0, this.ci = Date.now(), Si(Vf(this.Lp, this)))
    });
    rb(Jl[H], function () {
        this.Ij = !1
    });
    Jl[H].Lp = function mem() {
        if (this.Ij) {
            var a = Date.now();
            mem.a = mem.a||a;
            
            a >= this.ci && (this.Kp.gl(), this.ci += (l[$b]((a - this.ci) / this.Ip) + 1) * this.Ip);

            if (Math.round((a - mem.a) / this.Ip) > this.Kp.FRAMESTOTAL) {
                console.log(this.Kp.FRAMESTOTAL);
            	this.stop();
            	mem.a = false;
            }

            ////////////////////////////////////////

            this.Kp.ka();

            Si(Vf(this.Lp, this))
        }
    };
    var Pn = la("^[A-Z_a-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c-\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd][A-Z_a-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c-\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd.0-9\u00b7\u0300-\u036f\u203f-\u2040-]*$"),
        Qn = function (a) {
            if (null != a && (a = q(a), a[lc](Pn))) return a
        }, Rn = {
            "<": "&lt;",
            ">": "&gt;",
            "&": "&amp;",
            '"': "&quot;",
            "'": "&apos;",
            "\t": "&#x9;",
            "\n": "&#xA;",
            "\r": "&#xD;"
        }, Sn = function (a) {
            return Rn[a] || a
        }, Tn = function (a) {
            return a[Wb](/[<>&]/g, Sn)
        }, Un = function (a) {
            return a[Wb](/[<&"\t\n\r]/g, Sn)
        }, Vn = {}, Wn;
    for (Wn in Rn) Vn[Rn[Wn]] = Wn;
    var Yn = function (a) {
        return a[Wb](/&(#?)([^\s]+?);/g, function (a, c, d) {
            return c && (c = p("0" + d), c === c) ? q[ye](c) : Vn[a] || a
        })
    }, Zn = function (a, b, c) {
            this.jc = a;
            this.Ia = 0;
            this.ft = b;
            this.Ps = c;
            Oa(this, this.Zh)
        };
    K = Zn[H];
    K.Qp = function () {
        Oa(this, this.Qp);
        return null
    };
    K.$c = function (a) {
        Oa(this, function () {
            throw this.$c(a);
        });
        throw new $n(a);
    };
    K.Zh = function () {
        var a = this.Cj("<"),
            b;
        0 > a ? (b = this.jc[rf](this.Ia), Oa(this, this.Qp)) : (b = this.jc[rf](this.Ia, a), this.Ia = a, Oa(this, this.ot));
        this.ft && (b = b[ec]());
        return b ? (b = Yn(b), {
            type: "text",
            value: b
        }) : this[gd]()
    };
    K.ot = function () {
        var a = this.ai("<![CDATA[", "]]\x3e", !1, "cdata");
        if (a || (a = this.ai("\x3c!--", "--\x3e", !1, "comment")) || (a = this.ai("<!DOCTYPE", ">", !0, "doctype")) || (a = this.ai("<?XML", "?>", !0, "xml_declaration")) || !this.Ps && (a = this.ai("<?", "?>", !1, "processing_instruction"))) return a;
        if ("/" == this.jc[cc](this.Ia + 1)) return Oa(this, this.Zh), {
            type: "close",
            value: this.Ss()
        };
        for (a = {
            type: "tag",
            value: this.Ts(),
            attributes: []
        };;) {
            this.jp();
            if (this.Vs()) throw this.$c("tag");
            if (this.Yl(">")) return Oa(this, this.Zh), a;
            if (this.Yl("/>")) return Oa(this,
                this.Us(a[ke])), a;
            a[Nd][D]({
                name: this.Qs(),
                value: this.Rs()
            })
        }
    };
    K.Us = function (a) {
        return function () {
            Oa(this, this.Zh);
            return {
                type: "close",
                value: a
            }
        }
    };
    K.Cj = function (a) {
        return this.jc[pe](a, this.Ia)
    };
    K.Vs = function () {
        return this.Ia >= this.jc[G]
    };
    K.Yl = function (a) {
        return this.jc[Qc](this.Ia, a[G])[zf]() == a ? (this.Ia += a[G], !0) : !1
    };
    K.jp = function () {
        for (var a = this.jc; this.Ia < a[G]; this.Ia++) switch (a[cc](this.Ia)) {
        case " ":
        case "\t":
        case "\r":
        case "\n":
            break;
        default:
            return
        }
    };
    K.ai = function (a, b, c, d) {
        var e = this.Ia;
        if (!this.Yl(a)) return null;
        a = this.Cj(b);
        if (0 > a) throw this.$c(d);
        c = c ? this.jc[rf](e, a + b[G]) : this.jc[rf](this.Ia, a);
        this.Ia = a + b[G];
        Oa(this, this.Zh);
        return {
            type: d,
            value: c
        }
    };
    K.Ts = function () {
        for (var a = this.jc, b = this.Ia + 1, c = b; c < a[G]; c++) switch (a[cc](c)) {
        case "/":
            if (">" != a[cc](c + 1)) break;
        case " ":
        case "\t":
        case "\r":
        case "\n":
        case ">":
            if (c == b) throw this.$c("tag");
            this.Ia = c;
            return a[rf](b, c)
        }
        throw this.$c("tag");
    };
    K.Ss = function () {
        for (var a = this.jc, b = this.Ia + 2, c = !1, d = b; d < a[G]; d++) switch (a[cc](d)) {
        case " ":
        case "\t":
        case "\r":
        case "\n":
            c = !0;
            break;
        case ">":
            if (d == b) throw this.$c("close");
            this.Ia = d + 1;
            return a[rf](b, d)[ec]();
        default:
            if (c) throw this.$c("close");
        }
        throw this.$c("close");
    };
    K.Qs = function () {
        var a = this.Cj(">");
        if (0 > a) throw this.$c("tag");
        var b = this.Cj("="),
            c = this.Ia;
        if (0 > b || b == c || b > a) throw this.$c("attribute");
        this.Ia = b + 1;
        return this.jc[rf](c, b)[ec]()
    };
    K.Rs = function () {
        this.jp();
        var a = this.jc,
            b = this.Ia,
            c = a[cc](b++);
        if ('"' == c || "'" == c)
            for (var d = b; d < a[G]; d++)
                if (a[cc](d) == c) return this.Ia = d + 1, Yn(a[rf](b, d));
        throw this.$c("attribute");
    };
    var $n = function (a) {
        nb(this, a)
    };
    var ao = null;
    f[w](m, "CASEINSENSITIVE", {
        value: 1
    });
    f[w](m, "DESCENDING", {
        value: 2
    });
    f[w](m, "NUMERIC", {
        value: 16
    });
    f[w](m, "RETURNINDEXEDARRAY", {
        value: 8
    });
    f[w](m, "UNIQUESORT", {
        value: 4
    });
    var bo = function (a, b, c) {
        var d = b & m.DESCENDING ? -1 : 1,
            e = ao,
            h;
        h = b & m.NUMERIC ? e.Lq : b & m.CASEINSENSITIVE ? e.Jq : e.Kq;
        return function (b, n) {
            return d * h[I](e, b && b[a], n && n[a]) || c(b, n)
        }
    }, co = function (a, b) {
            return function (c, d) {
                return b(a[c], a[d])
            }
        };
    f[w](m[H], "sortOn", {
        value: function (a, b) {
            a = Lf(a) ? a : [a];
            var c;
            Lf(b) && b[G] == a[G] ? c = b[0] >>> 0 : (c = b >>> 0, b = null);
            for (var d = c & m.RETURNINDEXEDARRAY, e = c & m.UNIQUESORT, h = !1, k = function () {
                    h = !0;
                    return 0
                }, n = a[G] - 1; 0 <= n; --n) k = bo(a[n], b ? b[n] >>> 0 : c, k);
            c = this;
            if (d || e)
                for (k = co(c, k), c = [], n = this[G] - 1; 0 <= n; --n) c[n] = n;
            c.sort(k);
            if (e) {
                if (h) return 0;
                if (!d) {
                    for (d = 0; d < c[G]; d++)
                        if (-1 != c[d]) {
                            for (var e = this[d], u, k = d; u = c[k], c[k] = -1, u != d; k = u) this[k] = this[u];
                            this[k] = e
                        }
                    return this
                }
            }
            return c
        }
    });
    var eo = function () {
        this.Ha = {};
        this.um = this.nd = 0;
        lj(this, null, 3)
    };
    kj(eo, "Key");
    eo[H].getAscii = function () {
        return this.um
    };
    eo[H].getCode = function () {
        return this.nd
    };
    eo[H].isDown = function (a) {
        return !!this.Ha[a]
    };
    eo[H].isToggled = function () {
        return !1
    };
    f[qe](eo[H], {
        BACKSPACE: {
            value: 8
        },
        CAPSLOCK: {
            value: 20
        },
        CONTROL: {
            value: 17
        },
        DELETEKEY: {
            value: 46
        },
        DOWN: {
            value: 40
        },
        END: {
            value: 35
        },
        ENTER: {
            value: 13
        },
        ESCAPE: {
            value: 27
        },
        HOME: {
            value: 36
        },
        INSERT: {
            value: 45
        },
        LEFT: {
            value: 37
        },
        PGDN: {
            value: 34
        },
        PGUP: {
            value: 33
        },
        RIGHT: {
            value: 39
        },
        SHIFT: {
            value: 16
        },
        SPACE: {
            value: 32
        },
        TAB: {
            value: 9
        },
        UP: {
            value: 38
        }
    });
    eo[H].Dj = function (a) {
        this.nd = a[tc];
        this.Ha[a[tc]] = !1
    };
    eo[H].Aj = function (a) {
        this.nd = a[tc];
        this.um = a[pc];
        this.Ha[a[tc]] = !0
    };
    var fo = {
        37: 1,
        39: 2,
        36: 3,
        35: 4,
        45: 5,
        46: 6,
        8: 8,
        13: 13,
        38: 14,
        40: 15,
        33: 16,
        34: 17,
        9: 18,
        27: 19
    };
    eo[H].Zr = function () {
        var a = fo[this.nd];
        return a ? a : this.um
    };
    lj(eo[H], null, 3);
    var go = function () {
        f[w](this, "__swiffy_mv", {
            value: !0,
            writable: !0
        });
        lj(this, null, 3)
    };
    kj(go, "Mouse");
    go[H].Lg = function () {
        this.broadcastMessage("onMouseDown")
    };
    go[H].Ig = function () {
        this.broadcastMessage("onMouseMove")
    };
    go[H].Mg = function () {
        this.broadcastMessage("onMouseUp")
    };
    go[H].hide = function () {
        var a = this.__swiffy_mv;
        this.__swiffy_mv = !1;
        return a
    };
    go[H].show = function () {
        var a = this.__swiffy_mv;
        this.__swiffy_mv = !0;
        return a
    };
    lj(go[H], null, 3);
    var ho = function (a) {
        f[w](this, "__swiffy_v", {
            value: {
                eg: this.__swiffy_vm.tg(a),
                Mp: 0
            }
        })
    };
    kj(ho, "Color");
    xl(ho);
    ho[H].getRGB = function () {
        var a = this.__swiffy_v.eg;
        return a && a.__swiffy_d ? this.__swiffy_v.Mp : void 0
    };
    ho[H].setRGB = function (a) {
        var b = this.__swiffy_v.eg;
        b && (b = b.__swiffy_d) && (this.__swiffy_v.Mp = a, b.qc(new vi(0, (a & 16711680) >> 16, 0, (a & 65280) >> 8, 0, a & 255, 1, 0)), b.Ka())
    };
    ho[H].setTransform = function (a) {
        var b = this.__swiffy_v.eg;
        if (b && a && (b = b.__swiffy_d)) {
            var c = this.__swiffy_vm,
                d = c.B(a, "ra"),
                e = c.B(a, "rb"),
                h = c.B(a, "ga"),
                k = c.B(a, "gb"),
                n = c.B(a, "ba"),
                u = c.B(a, "bb"),
                y = c.B(a, "aa"),
                c = c.B(a, "ab"),
                C = b.xb;
            b.qc(new vi(L(a[d]) ? a[d] / 100 : C.Y, L(a[e]) ? a[e] : C.T, L(a[h]) ? a[h] / 100 : C.X, L(a[k]) ? a[k] : C.S, L(a[n]) ? a[n] / 100 : C.W, L(a[u]) ? a[u] : C.Q, L(a[y]) ? a[y] / 100 : C.O, L(a[c]) ? a[c] : C.U));
            b.Ka()
        }
    };
    ho[H].getTransform = function () {
        var a = this.__swiffy_v.eg;
        if (a && (a = a.__swiffy_d)) return a = a.xb, {
            ra: 100 * a.Y,
            rb: a.T,
            ga: 100 * a.X,
            gb: a.S,
            ba: 100 * a.W,
            bb: a.Q,
            aa: 100 * a.O,
            ab: a.U
        }
    };
    lj(ho[H], null, 3);
    var tk = function (a, b) {
        this.zs = a;
        this.b = b
    };
    var io = function (a, b) {
        this.object = a;
        Ba(this, b)
    };
    io[H].Qo = function () {
        for (var a = this[Ud], b = !1; a = f[Pc](a);) {
            if (b) return a;
            for (var c = f[Ob](a), d = 0; d < c[G] && !b; d++) a[c[d]] === this[Ec] && (b = !0)
        }
    };
    var jo = function (a, b) {
        this.Z = a;
        pa(this, {});
        this.sb = b
    };
    K = jo[H];
    K.get = function (a) {
        var b = this.Z.B(this[s], a);
        return b in this[s] ? this[s][b] : this.sb.get(a)
    };
    Bb(K, function (a, b) {
        var c = this.Z.B(this[s], a);
        if (c in this[s])
            if (c = this[s][c], c instanceof io) {
                var d = f[Pc](c[Ec][H])[id];
                if (M(d)) return d[B](c[Ud], b)
            } else {
                if (M(c)) return c[B](this.Yb(), b)
            } else return this.sb[I](a, b)
    });
    K.set = function (a, b) {
        var c = this.Z.B(this[s], a);
        return c in this[s] ? (this[s][c] = b, !0) : this.sb.set(a, b)
    };
    K.Tc = function (a, b) {
        this[s][this.Z.od(this[s], a)] = b
    };
    K.Rh = function (a) {
        a = this.Z.od(this[s], a);
        a in this[s] || (this[s][a] = void 0)
    };
    K.pe = function (a) {
        return this.Z.B(this[s], a) in this[s] ? !1 : this.sb.pe(a)
    };
    K.Qd = function (a) {
        this.sb.Qd(a)
    };
    K.Yb = function () {
        return this.sb.Yb()
    };
    K.of = function () {
        return this.sb.of()
    };
    var ko = function (a, b, c) {
        this.Z = a;
        pa(this, c);
        this.sb = b
    };
    K = ko[H];
    K.get = function (a) {
        var b = this.Z.B(this[s], a);
        return b in this[s] ? this[s][b] : this.sb.get(a)
    };
    Bb(K, function (a, b) {
        var c = this.Z.B(this[s], a);
        if (c in this[s]) {
            if (c = this[s][c], M(c)) return c[B](this[s], b)
        } else return this.sb[I](a, b)
    });
    K.set = function (a, b) {
        var c = this.Z.B(this[s], a);
        return c in this[s] ? (this[s][c] = b, !0) : this.sb.set(a, b)
    };
    K.Tc = function (a, b) {
        var c = this.Z.B(this[s], a);
        c in this[s] ? this[s][c] = b : this.sb.Tc(a, b)
    };
    K.Rh = function (a) {
        this.Z.B(this[s], a) in this[s] || this.sb.Rh(a)
    };
    K.pe = function (a) {
        var b = this.Z.B(this[s], a);
        return b in this[s] ? this.Z.Ec(this[s], b) : this.sb.pe(a)
    };
    K.Qd = function (a) {
        this.sb.Qd(a)
    };
    K.Yb = function () {
        return this.sb.Yb()
    };
    K.of = function () {
        return this.sb.of()
    };
    var lo = function (a, b, c) {
        this.Z = a;
        pa(this, c);
        this.om = c;
        this.Rl = b;
        this.$l = c
    };
    K = lo[H];
    K.get = function (a) {
        var b = this.Z.B(this[s], a);
        return b in this[s] ? this[s][b] : "this" == a[Gf]() ? this.$l : this.Rl.get(a)
    };
    Bb(K, function (a, b) {
        var c = this.Z.B(this[s], a),
            d = this[s][c];
        if (c in this[s]) {
            if (M(d)) return d[B](this[s], b)
        } else return this.Rl[I](a, b)
    });
    K.set = function (a, b) {
        var c = this.Z.od(this[s], a);
        this[s][c] = b;
        return !0
    };
    K.Tc = function (a, b) {
        var c = this.Z.od(this[s], a);
        this[s][c] = b
    };
    K.Rh = function (a) {
        a = this.Z.od(this[s], a);
        a in this[s] || (this[s][a] = void 0)
    };
    K.pe = function (a) {
        var b = this.Z.B(this[s], a);
        return b in this[s] ? this.Z.Ec(this[s], b) : this.Rl.pe(a)
    };
    K.Qd = function (a) {
        a ? (this.om = a, pa(this, a)) : (this.om = null, pa(this, this.$l))
    };
    K.Yb = function () {
        return this.om
    };
    K.of = function () {
        return this.$l
    };
    var no = function (a) {
        this.Z = a;
        pa(this, new mo(a));
        this[s]._global = this[s];
        lj(this[s], "_global", 3)
    };
    K = no[H];
    K.get = function (a) {
        return this[s][this.Z.B(this[s], a)]
    };
    Bb(K, function (a, b) {
        var c = this[s][this.Z.B(this[s], a)];
        if (M(c)) return c[B](this[s], b)
    });
    K.set = function () {
        return !1
    };
    K.Tc = function () {};
    K.Rh = function () {};
    K.pe = function (a) {
        a = this.Z.B(this[s], a);
        return this.Z.Ec(this[s], a)
    };
    K.Qd = function () {
        throw new TypeError("setTarget should not be called on the GlobalContext");
    };
    K.Yb = function () {
        throw new TypeError("getTarget should not be called on the GlobalContext");
    };
    K.of = function () {
        throw new TypeError("getTargetBase should not be called on the GlobalContext");
    };
    var Ti = function () {};
    jj(Ti, nj);
    cb(Ti[H], function () {
        return this
    });
    Ti[H].getDepth = function () {
        var a = this.__swiffy_d;
        return a ? a[Cc] : void 0
    };
    var oo = function (a, b, c, d) {
        f[w](a, b, {
            get: function () {
                var a = this.__swiffy_d;
                if (a) return c[I](this, a)
            },
            set: function (a) {
                var c = this.__swiffy_d;
                c ? d[I](this, c, a) : f[w](this, b, {
                    value: a
                })
            }
        })
    }, po = function (a, b, c, d) {
            oo(a, b, c, function (a, b) {
                var c = a.a.$().hf(b);
                da(c) || d[I](this, a, c)
            })
        }, qo = function (a, b) {
            oo(a, b, function () {
                return 0
            }, function () {})
        }, ro = function (a, b, c) {
            oo(a, b, c, function () {})
        };
    po(Ti[H], "_x", function (a) {
        return a.P().j / 20
    }, function (a, b) {
        var c = a.P();
        a[hc](c[Je](20 * b - c.j, 0));
        a.Ka()
    });
    po(Ti[H], "_y", function (a) {
        return a.P().k / 20
    }, function (a, b) {
        var c = a.P();
        a[hc](c[Je](0, 20 * b - c.k));
        a.Ka()
    });
    po(Ti[H], "_xscale", function (a) {
        return 100 * a.Ic().Kd
    }, function (a, b) {
        a.Ic().Kd = b / 100;
        a.Og();
        a.Ka()
    });
    po(Ti[H], "_yscale", function (a) {
        return 100 * a.Ic().Ue
    }, function (a, b) {
        a.Ic().Ue = b / 100;
        a.Og();
        a.Ka()
    });
    po(Ti[H], "_alpha", function (a) {
        return (256 * a.xb.O | 0) / 2.56
    }, function (a, b) {
        var c = a.xb;
        a.qc(new vi(c.Y, c.T, c.X, c.S, c.W, c.Q, b / 100, c.U));
        a.Ka()
    });
    po(Ti[H], "_visible", function (a) {
        return a.$d
    }, function (a, b) {
        a.cj(ga(b))
    });
    po(Ti[H], "_rotation", function (a) {
        return -180 * a.Ic()[fd] / l.PI
    }, function (a, b) {
        Na(a.Ic(), -b * l.PI / 180);
        a.Og();
        a.Ka()
    });
    oo(Ti[H], "_name", function (a) {
        return a[oc]()
    }, function (a, b) {
        a.Ub(b)
    });
    qo(Ti[H], "_quality");
    qo(Ti[H], "_highquality");
    qo(Ti[H], "_soundbuftime");
    ro(Ti[H], "_parent", function (a) {
        return (a = a[Nb]()) && a != a.a ? a.t : void 0
    });
    ro(Ti[H], "_xmouse", function (a) {
        var b = a.a.sc.J();
        b.u(a.Kb());
        return b.x / 20
    });
    ro(Ti[H], "_ymouse", function (a) {
        var b = a.a.sc.J();
        b.u(a.Kb());
        return b.y / 20
    });
    ro(Ti[H], "_url", function (a) {
        return null === a.Od ? a.ml().Od[Wb](/^([^?#]+)\.html?\b/, "$1") : a.Od
    });
    po(Ti[H], "_width", function (a) {
        return a.ja()
    }, function (a, b) {
        a.Dm(b);
        a.Ka()
    });
    po(Ti[H], "_height", function (a) {
        return a.Bb()
    }, function (a, b) {
        a.Cm(b);
        a.Ka()
    });
    ro(Ti[H], "_root", function (a) {
        for (; a && !a.ui && a[Nb]() != a.a;) a = a[Nb]();
        return a ? a.t : void 0
    });
    ro(Ti[H], "_target", function (a) {
        for (var b = ""; a && a[oc]();) b = "/" + a[oc]() + b, a = a[Nb]();
        a && a[Nb]() == a.a && (a = a[Cc] - -16384) && (b = "_level" + a + b);
        return b || "/"
    });
    oo(Ti[H], "filters", function (a) {
        var b = [];
        a = a.Ca;
        for (var c = 0; c < a[G]; c++) b[D](a[c].ii());
        return b
    }, function (a, b) {
        for (var c = [], d = 0; null != b && d < b[G]; d++) {
            var e = b[d].__swiffy_v;
            c[D](e ? e : new kn)
        }
        a.Qf(c)
    });
    lj(Ti[H], null, 3);
    var so = function () {};
    jj(so, Ti);
    var to = function (a, b) {
        f[w](this, a, {
            value: b,
            configurable: !0,
            writable: !0,
            enumerable: !0
        });
        var c = this.__swiffy_d;
        c && c != c.a.Wa && c.cg()
    }, uo = function () {}, vo = {
            4: "onMouseUp",
            8: "onMouseDown",
            16: "onMouseMove",
            32: "onUnload",
            64: "onEnterFrame",
            524288: "onConstruct",
            128: "onLoad",
            16384: "onDragOver",
            65536: "onDragOver",
            256: "onRollOut",
            512: "onRollOver",
            1024: "onReleaseOutside",
            2048: "onRelease",
            4096: "onPress",
            8192: "onDragOut",
            32768: "onDragOut"
        };
    f[qe](so[H], function () {
        var a = {}, b;
        for (b in vo)
            if (b & 63045376) {
                var c = vo[b];
                a[c] = {
                    get: uo,
                    set: Wf(to, c)
                }
            }
        return a
    }());
    lj(so[H], null, 3);
    var wo = function () {};
    jj(wo, so);
    lj(wo[H], null, 3);
    var xo = function (a) {
        pb(this, "Error");
        this.message = L(a) ? a : "Error"
    };
    kj(xo, "Error");
    Ia(xo[H], function () {
        return this.message
    });
    lj(xo[H], null, 3);
    var yo = function (a) {
        return nj[I](this, a)
    };
    kj(yo, "Function", nj);
    f[w](yo, "__swiffy_wrapped_type", {
        value: Function
    });
    f[w](Function, "__swiffy_override", {
        value: oj
    });
    f[w](yo, "__swiffy_override", {
        value: oj
    });
    Xa(yo[H], function (a, b) {
        var c = this;
        if (M(c)) return "__swiffy_override" in c && (c = c.__swiffy_override), Function[H][B][I](c, zo(a), Lf(b) ? b : [])
    });
    f[w](Function[H][B], "__swiffy_override", {
        value: yo[H][B]
    });
    Function[H][Ic] && f[w](Function[H][Ic], "__swiffy_override", {
        value: void 0
    });
    Bb(yo[H], function (a, b) {
        return yo[H][B][I](this, a, m[H][ee][I](arguments, 1))
    });
    f[w](Function[H][I], "__swiffy_override", {
        value: yo[H][I]
    });
    lj(yo, null, 3);
    lj(yo[H], null, 3);
    var Ao = function (a, b, c, d, e, h) {
        f[w](this, "__swiffy_v", {
            writable: !0,
            value: new si(L(a) ? a : 1, L(b) ? b : 0, L(c) ? c : 0, L(d) ? d : 1, L(e) ? e : 0, L(h) ? h : 0)
        })
    };
    kj(Ao, "Matrix", nj);
    var Bo = function (a) {
        return new Ao(a.p, a.s, a.n, a.l, a.j / 20, a.k / 20)
    };
    f[w](Ao[H], "a", {
        get: function () {
            return this.__swiffy_v.p
        },
        set: function (a) {
            var b = this.__swiffy_v;
            this.__swiffy_v = new si(a, b.s, b.n, b.l, b.j, b.k)
        }
    });
    f[w](Ao[H], "b", {
        get: function () {
            return this.__swiffy_v.s
        },
        set: function (a) {
            var b = this.__swiffy_v;
            this.__swiffy_v = new si(b.p, a, b.n, b.l, b.j, b.k)
        }
    });
    f[w](Ao[H], "c", {
        get: function () {
            return this.__swiffy_v.n
        },
        set: function (a) {
            var b = this.__swiffy_v;
            this.__swiffy_v = new si(b.p, b.s, a, b.l, b.j, b.k)
        }
    });
    f[w](Ao[H], "d", {
        get: function () {
            return this.__swiffy_v.l
        },
        set: function (a) {
            var b = this.__swiffy_v;
            this.__swiffy_v = new si(b.p, b.s, b.n, a, b.j, b.k)
        }
    });
    f[w](Ao[H], "tx", {
        get: function () {
            return this.__swiffy_v.j
        },
        set: function (a) {
            var b = this.__swiffy_v;
            this.__swiffy_v = b.hd(a, b.k)
        }
    });
    f[w](Ao[H], "ty", {
        get: function () {
            return this.__swiffy_v.k
        },
        set: function (a) {
            var b = this.__swiffy_v;
            this.__swiffy_v = b.hd(b.j, a)
        }
    });
    Ao[H].clone = function () {
        var a = new Ao;
        a.__swiffy_v = this.__swiffy_v;
        return a
    };
    ra(Ao[H], function (a) {
        this.__swiffy_v = this.__swiffy_v[Ad](a.__swiffy_v)
    });
    Ao[H].copyFrom = function (a) {
        this.__swiffy_v = a.__swiffy_v
    };
    Ao[H].createBox = function (a, b, c, d, e) {
        this.__swiffy_v = ti.Wg(-(c || 0)).je(a, b)[Je](d || 0, e || 0)
    };
    Ao[H].createGradientBox = function (a, b, c, d, e) {
        this.__swiffy_v = ti.Wg(-(c || 0)).je(a / 1638.4, b / 1638.4)[Je](a / 2 + (d || 0), b / 2 + (e || 0))
    };
    Ao[H].deltaTransformPoint = function (a) {
        return new Co(this.__swiffy_v.p * a.x + this.__swiffy_v.n * a.y, this.__swiffy_v.s * a.x + this.__swiffy_v.l * a.y)
    };
    Ao[H].identity = function () {
        this.__swiffy_v = ti
    };
    Ao[H].invert = function () {
        this.__swiffy_v = this.__swiffy_v.oc()
    };
    Ao[H].rotate = function (a) {
        this.__swiffy_v = this.__swiffy_v.Wg(-a)
    };
    Ao[H].scale = function (a, b) {
        this.__swiffy_v = this.__swiffy_v.je(a, b)
    };
    Ao[H].transformPoint = function (a) {
        return new Co(this.__swiffy_v.p * a.x + this.__swiffy_v.n * a.y + this.__swiffy_v.j, this.__swiffy_v.s * a.x + this.__swiffy_v.l * a.y + this.__swiffy_v.k)
    };
    Ao[H].translate = function (a, b) {
        this.__swiffy_v = this.__swiffy_v[Je](a, b)
    };
    Ia(Ao[H], function () {
        return "(a=" + this.__swiffy_v.p + ", b=" + this.__swiffy_v.s + ", c=" + this.__swiffy_v.n + ", d=" + this.__swiffy_v.l + ", tx=" + this.__swiffy_v.j + ", ty=" + this.__swiffy_v.k + ")"
    });
    var Do = function (a, b, c, d, e, h, k, n) {
        a = L(a) ? a : 1;
        b = L(b) ? b : 1;
        c = L(c) ? c : 1;
        d = L(d) ? d : 1;
        e = L(e) ? e : 0;
        h = L(h) ? h : 0;
        k = L(k) ? k : 0;
        n = L(n) ? n : 0;
        f[w](this, "__swiffy_v", {
            writable: !0,
            value: new vi(a, e, b, h, c, k, d, n)
        })
    };
    kj(Do, "ColorTransform", nj);
    var Eo = function (a) {
        return new Do(a.Y, a.X, a.W, a.O, a.T, a.S, a.Q, a.U)
    };
    f[w](Do[H], "redMultiplier", {
        get: function () {
            return this.__swiffy_v.Y
        },
        set: function (a) {
            var b = this.__swiffy_v;
            this.__swiffy_v = new vi(p(a), b.T, b.X, b.S, b.W, b.Q, b.O, b.U)
        }
    });
    f[w](Do[H], "greenMultiplier", {
        get: function () {
            return this.__swiffy_v.X
        },
        set: function (a) {
            var b = this.__swiffy_v;
            this.__swiffy_v = new vi(b.Y, b.T, p(a), b.S, b.W, b.Q, b.O, b.U)
        }
    });
    f[w](Do[H], "blueMultiplier", {
        get: function () {
            return this.__swiffy_v.W
        },
        set: function (a) {
            var b = this.__swiffy_v;
            this.__swiffy_v = new vi(b.Y, b.T, b.X, b.S, p(a), b.Q, b.O, b.U)
        }
    });
    f[w](Do[H], "alphaMultiplier", {
        get: function () {
            return this.__swiffy_v.O
        },
        set: function (a) {
            var b = this.__swiffy_v;
            this.__swiffy_v = new vi(b.Y, b.T, b.X, b.S, b.W, b.Q, p(a), b.U)
        }
    });
    f[w](Do[H], "redOffset", {
        get: function () {
            return this.__swiffy_v.T
        },
        set: function (a) {
            var b = this.__swiffy_v;
            this.__swiffy_v = new vi(b.Y, p(a), b.X, b.S, b.W, b.Q, b.O, b.U)
        }
    });
    f[w](Do[H], "greenOffset", {
        get: function () {
            return this.__swiffy_v.S
        },
        set: function (a) {
            var b = this.__swiffy_v;
            this.__swiffy_v = new vi(b.Y, b.T, b.X, p(a), b.W, b.Q, b.O, b.U)
        }
    });
    f[w](Do[H], "blueOffset", {
        get: function () {
            return this.__swiffy_v.Q
        },
        set: function (a) {
            var b = this.__swiffy_v;
            this.__swiffy_v = new vi(b.Y, b.T, b.X, b.S, b.W, p(a), b.O, b.U)
        }
    });
    f[w](Do[H], "alphaOffset", {
        get: function () {
            return this.__swiffy_v.U
        },
        set: function (a) {
            var b = this.__swiffy_v;
            this.__swiffy_v = new vi(b.Y, b.T, b.X, b.S, b.W, b.Q, b.O, p(a))
        }
    });
    f[w](Do[H], "rgb", {
        get: function () {
            return (this.__swiffy_v.T << 16 | this.__swiffy_v.S << 8 | this.__swiffy_v.Q) >>> 0
        },
        set: function (a) {
            var b = this.__swiffy_v;
            this.__swiffy_v = new vi(0, a >> 16 & 255, 0, a >> 8 & 255, 0, a & 255, b.O, b.U)
        }
    });
    ra(Do[H], function (a) {
        this.__swiffy_v = this.__swiffy_v.Sl(a.__swiffy_v)
    });
    Ia(Do[H], function () {
        return "(redMultiplier=" + this.__swiffy_v.Y + ", greenMultiplier=" + this.__swiffy_v.X + ", blueMultiplier=" + this.__swiffy_v.W + ", alphaMultiplier=" + this.__swiffy_v.O + ", redOffset=" + this.__swiffy_v.T + ", greenOffset=" + this.__swiffy_v.S + ", blueOffset=" + this.__swiffy_v.Q + ", alphaOffset=" + this.__swiffy_v.U + ")"
    });
    var Fo = function (a) {
        a instanceof ok || (a = this.__swiffy_vm.tg(a));
        f[w](this, "__swiffy_d", {
            value: a
        })
    };
    kj(Fo, "Transform");
    xl(Fo);
    oo(Fo[H], "colorTransform", function (a) {
        return Eo(a.xb)
    }, function (a, b) {
        a.qc(b instanceof Do ? b.__swiffy_v : wi)
    });
    ro(Fo[H], "concatenatedColorTransform", function (a) {
        return Eo(a.zb())
    });
    ro(Fo[H], "concatenatedMatrix", function (a) {
        return Bo(a.na())
    });
    oo(Fo[H], "matrix", function (a) {
        return Bo(a.P())
    }, function (a, b) {
        var c;
        b instanceof Ao ? (c = b.__swiffy_v, c = c.hd(20 * c.j, 20 * c.k)) : c = ti;
        a[hc](c)
    });
    ro(Fo[H], "pixelBounds", function (a) {
        var b = a.Ta().cd().J();
        b.u(a.na());
        return new Go(l[$b](b.c / 20), l[$b](b.d / 20), l[Yb]((b.F - b.c) / 20), l[Yb]((b.D - b.d) / 20))
    });
    var O = function () {};
    kj(O, "MovieClip", wo);
    O[H].enabled = !0;
    O[H].useHandCursor = !0;
    O[H].focusEnabled = void 0;
    f[w](O[H], "_droptarget", {
        get: function () {
            var a = this.__swiffy_d;
            return a ? (a = (a = a.lt()) && a.t._target) && "/" != a ? a : "" : ""
        }
    });
    O[H].gotoAndStop = function (a) {
        var b = this.__swiffy_d;
        b && b.me(b.lf(a), !1)
    };
    O[H].gotoAndPlay = function (a) {
        var b = this.__swiffy_d;
        b && b.me(b.lf(a), !0)
    };
    mb(O[H], function () {
        var a = this.__swiffy_d;
        a && a[Ge]()
    });
    rb(O[H], function () {
        var a = this.__swiffy_d;
        a && a[Se]()
    });
    O[H].nextFrame = function () {
        var a = this.__swiffy_d;
        a && a.li()
    };
    O[H].prevFrame = function () {
        var a = this.__swiffy_d;
        a && a.Om()
    };
    O[H].globalToLocal = function (a) {
        var b = this.__swiffy_d;
        if (b) {
            var c = b.a.$(),
                d = c.Hn(a);
            if (null != d) {
                var e = c.B(a, "x"),
                    c = c.B(a, "y"),
                    b = Oi(b.Kb(), d);
                a[e] = b.x;
                a[c] = b.y
            }
        }
    };
    O[H].localToGlobal = function (a) {
        var b = this.__swiffy_d;
        if (b) {
            var c = b.a.$(),
                d = c.Hn(a);
            if (null != d) {
                var e = c.B(a, "x"),
                    c = c.B(a, "y"),
                    b = Oi(b.na(), d);
                a[e] = b.x;
                a[c] = b.y
            }
        }
    };
    O[H].createEmptyMovieClip = function (a, b) {
        var c = this.__swiffy_d;
        if (c) {
            var d = new jl(0, 0, null, c[t].Te),
                d = new el(d, c.a, null);
            d.ee = !0;
            d.Ub(a);
            d.ea();
            c.ce(b);
            c.cc(d, b);
            return d.t
        }
    };
    O[H].createTextField = function (a, b, c, d, e, h) {
        if (!(6 > arguments[G])) {
            a = q(a);
            b = Ji(b);
            c = Ji(c);
            d = Ji(d);
            e = l.abs(Ji(e));
            h = l.abs(Ji(h));
            var k = this.__swiffy_d;
            if (k) {
                var n = new xn(-1, null, 240, 4278190080);
                n.border = !1;
                n.en = !1;
                n.html = !1;
                n.maxChars = null;
                n.multiline = !1;
                n.password = !1;
                n.selectable = !0;
                n.variable = null;
                n.wrap = !1;
                n.sa = 6 <= k.a.mb;
                Fa(n, new yi(0, 0, 20 * e, 20 * h));
                n = new Lk(n, k.a, null);
                n.Ub(a);
                n[hc](new si(1, 0, 0, 1, 20 * c, 20 * d));
                n.ea();
                k.ce(b);
                k.cc(n, b);
                return n.t
            }
        }
    };
    O[H].getNextHighestDepth = function () {
        var a = this.__swiffy_d;
        return a ? a.C.rt() : void 0
    };
    O[H].getInstanceAtDepth = function (a) {
        var b = this.__swiffy_d;
        if (b && !(-16384 > a) && (a = b.C.Qc(a))) return a instanceof sk ? a.t : b.t
    };
    O[H].getSWFVersion = function () {
        var a = this.__swiffy_d;
        return a ? a.a.mb : -1
    };
    O[H].setMask = function (a) {
        var b = this.__swiffy_d;
        if (b) {
            var c;
            c = Nf(a) ? b.a.$().wo(a) : a;
            if (c instanceof O || c instanceof Ho) return b.cf(c.__swiffy_d), !0;
            b.cf(null);
            return !L(a)
        }
    };
    O[H].attachMovie = function (a, b, c, d) {
        var e = this.__swiffy_d;
        if (e && (a = e[t].Te[a], L(a))) {
            var h = ej.xk();
            a = a.Rc(e.a, h);
            a.ee = !0;
            a.Ub(b);
            e.ce(c);
            e.cc(a, c);
            if (L(d)) {
                b = a.t;
                for (var k in d) b[k] = d[k]
            }
            a.ea();
            return a.t
        }
    };
    O[H].duplicateMovieClip = function (a, b, c) {
        var d = this.__swiffy_d;
        if (d) {
            var e = d[Nb]();
            if (e) {
                a = d.duplicate(e, a, b);
                if (L(c)) {
                    b = a.t;
                    for (var h in c) b[h] = c[h]
                }
                return a.t
            }
        }
    };
    O[H].removeMovieClip = function () {
        var a = this.__swiffy_d;
        if (a) {
            var b = a[Nb]();
            0 <= a[Cc] && a.ee && b && (a.g(), b[hf](a))
        }
    };
    O[H].loadMovie = function (a, b) {
        var c = this.__swiffy_d;
        c && (a = c.a.$().ya(a), c.co(a, b, this))
    };
    O[H].loadVariables = function (a, b) {
        var c = this.__swiffy_d;
        c && tl(a, c.a, b, this, function () {
            return c
        })
    };
    O[H].unloadMovie = function () {
        var a = this.__swiffy_d;
        a && a.wl(new jl(0, 0, null, a[t].Te))
    };
    O[H].swapDepths = function (a) {
        var b = this.__swiffy_d,
            c = b ? b[Nb]() : void 0;
        if (c) {
            var d = void 0;
            if (a instanceof Ti) {
                a = a.__swiffy_d;
                if (a[Nb]() != c) return;
                d = a[Cc]
            } else "number" === typeof a && (d = a);
            L(d) && c.Xl(b[Cc], d)
        }
    };
    O[H].getBytesTotal = function () {
        var a = this.__swiffy_d;
        if (a) return a.a.Ar
    };
    O[H].getBytesLoaded = O[H].getBytesTotal;
    O[H].getBounds = function (a) {
        var b = this.__swiffy_d;
        if (b) {
            var c = b.Ta().cd().J();
            c.Ua() && c[Ub](134217728, 134217728);
            if (L(a)) {
                var d = null;
                Nf(a) && (a = b.a.$().bh(a, this));
                a instanceof O && (d = a.__swiffy_d);
                if (d) a = d.Kb(), c.u(b.na()[Ad](a));
                else return
            }
            b = {};
            b.xMin = c.c / 20;
            b.xMax = c.F / 20;
            b.yMin = c.d / 20;
            b.yMax = c.D / 20;
            return b
        }
    };
    O[H].getURL = function (a, b, c) {
        var d = this.__swiffy_d;
        if (d) {
            var e = d.a.$();
            a = e.ya(a);
            var h = 0;
            Nf(c) && (c = c[Gf](), "get" == c ? h = 1 : "post" == c && (h = 2));
            a = new Bl(e, this, a, b, h);
            d.a.Bh(a)
        }
    };
    O[H].hitTest = function (a, b, c) {
        var d = this.__swiffy_d;
        if (L(a) && d) {
            var e = d.Ta().cd().J();
            e.u(d.na());
            if (!L(b) && !L(c)) {
                if (c = null, a instanceof O ? c = a.__swiffy_d : Nf(a) && (c = d.a.$().bh(a, this)), null != c) return d = c.Ta().cd().J(), d.u(c.na()), e.dn(d)
            } else if (L(b)) return a *= 20, b *= 20, (e = e[Id](a, b)) && c ? d.Ck(a, b) : e
        }
        return !1
    };
    Ca(O[H], function () {
        var a = this.__swiffy_d;
        a && a.fb("clear", arguments)
    });
    O[H].moveTo = function () {
        var a = this.__swiffy_d;
        a && a.fb("moveTo", arguments)
    };
    O[H].lineTo = function () {
        var a = this.__swiffy_d;
        a && a.fb("lineTo", arguments)
    };
    O[H].curveTo = function () {
        var a = this.__swiffy_d;
        a && a.fb("curveTo", arguments)
    };
    O[H].lineStyle = function () {
        var a = this.__swiffy_d;
        a && a.fb("lineStyle", arguments)
    };
    O[H].beginFill = function () {
        var a = this.__swiffy_d;
        a && a.fb("beginFill", arguments)
    };
    O[H].endFill = function () {
        var a = this.__swiffy_d;
        a && a.fb("endFill", arguments)
    };
    O[H].startDrag = function (a, b, c, d, e) {
        var h = this.__swiffy_d;
        h && h.a.ko(h, a, b, c, d, e)
    };
    O[H].stopDrag = function () {
        var a = this.__swiffy_d;
        a && a.a.Zi()
    };
    ro(O[H], "_currentframe", function (a) {
        return l.max(1, a.Ma + 1)
    });
    ro(O[H], "_totalframes", function (a) {
        return a[t][qd]
    });
    ro(O[H], "_framesloaded", function (a) {
        return a[t][qd]
    });
    oo(O[H], "_lockroot", function (a) {
        return a.ui
    }, function (a, b) {
        a.rn(ga(b))
    });
    oo(O[H], "blendMode", function (a) {
        return qi[a.yb()]
    }, function (a, b) {
        var c = 0;
        p(b) == b ? (c = p(b) - 1, qi[c] || (c = 0)) : c = pi[q(b)] || 0;
        a.gh(c)
    });
    oo(O[H], "cacheAsBitmap", function (a) {
        return a.fj()
    }, function (a, b) {
        a.kl(ga(b))
    });
    oo(O[H], "transform", function (a) {
        return new Fo(a)
    }, function (a, b) {
        if (Qf(b)) {
            var c = new Fo(a);
            c.colorTransform = b.colorTransform;
            eb(c, b[fe])
        }
    });
    lj(O[H], null, 3);
    var Io = function () {
        this.__swiffy_vm.th(this)
    };
    kj(Io, "MovieClipLoader");
    xl(Io);
    Io[H].checkPolicyFile = !1;
    Io[H].loadClip = function (a, b) {
        if (a && b) {
            var c = this.__swiffy_vm;
            a = c.ya(a);
            var d = this,
                e = b.__swiffy_d;
            Pf(b) ? e = c.a.Wa : Nf(b) ? e = c.tg(b).__swiffy_d : e.Zf(gl(a));
            c = new fl;
            c.Cb = function (c, k) {
                d.broadcastMessage("onLoadStart", b);
                d.broadcastMessage("onLoadProgress", b, 1024, 1024);
                d.broadcastMessage("onLoadComplete", b, k);
                Pf(b) ? nl(e.a, b, c, function (b) {
                    b.Zf(gl(a))
                }, function () {
                    d.broadcastMessage("onLoadInit", b)
                }) : hl(e, c, function () {
                    d.broadcastMessage("onLoadInit", b)
                })
            };
            c.wc = function (a) {
                d.broadcastMessage("onLoadError",
                    b, a)
            };
            il(a, e.a, "", this, c)
        }
    };
    Io[H].getProgress = function () {
        return {
            bytesLoaded: 1024,
            bytesTotal: 1024
        }
    };
    Io[H].unloadClip = function (a) {
        (a = a && a.__swiffy_d) && a.wl(new jl(0, 0, null, a[t].Te))
    };
    var Jo = function () {};
    kj(Jo, "NetConnection");
    xl(Jo);
    Jo[H].connect = function (a) {
        var b = this.__swiffy_vm.a.Al;
        b && a && b.zl("GET", a, null, null, "AS2.NetConnection.connect");
        return !0
    };
    var Ko = function () {};
    kj(Ko, "NetStream");
    xl(Ko);
    mb(Ko[H], function (a) {
        var b = this.__swiffy_vm.a.Al;
        b && a && b.zl("GET", a, null, null, "AS2.NetStream.play")
    });
    Sa(Ko[H], function () {});
    Ko[H].pause = function () {};
    Ko[H].receiveAudio = function () {};
    Ko[H].receiveVideo = function () {};
    Ko[H].seek = function () {};
    Ko[H].setBufferTime = function () {};
    f[w](Ko, "bufferLength", {
        value: 0,
        writable: !1
    });
    f[w](Ko, "bufferTime", {
        value: 0.1,
        writable: !1
    });
    f[w](Ko, "currentFps", {
        value: 0,
        writable: !1
    });
    f[w](Ko, "liveDelay", {
        value: 0,
        writable: !1
    });
    f[w](Ko, "time", {
        value: 0,
        writable: !1
    });
    var Lo = function () {};
    kj(Lo, "Button", wo);
    Lo[H].enabled = !0;
    Lo[H].useHandCursor = !0;
    f[w](Lo[H], "tabIndex", {
        value: void 0,
        writable: !0,
        enumerable: !0
    });
    lj(Lo[H], null, 3);
    var Mo = function () {};
    kj(Mo, "BitmapFilter");
    var fn = function (a, b, c, d, e, h, k, n, u, y, C, J) {
        Na(this, L(b) ? b : 45);
        this.blurX = L(k) ? k : 10;
        this.blurY = L(n) ? n : 10;
        Ya(this, L(a) ? a : 4);
        this.highlightAlpha = L(d) ? d : 1;
        this.highlightColor = L(c) ? c : 16777215;
        this.knockout = L(J) ? J : !1;
        Ib(this, L(y) ? y : 1);
        this.shadowAlpha = L(h) ? h : 1;
        this.shadowColor = L(e) ? e : 0;
        this.strength = L(u) ? u : 1;
        nb(this, L(C) ? C : "inner");
        lj(this, null, 3);
        f[w](this, "__swiffy_v", {
            get: function () {
                return new en(90 + this[fd], No(this.highlightColor, this.highlightAlpha), No(this.shadowColor, this.shadowAlpha), this[Kd], this[nf],
                    this[Ff], this.blurX, this.blurY, !1, !0, this[kc])
            }
        })
    };
    kj(fn, "BevelFilter", Mo);
    var Ym = function (a, b, c) {
        this.blurX = L(a) ? a : 4;
        this.blurY = L(b) ? b : 4;
        Ib(this, L(c) ? c : 1);
        lj(this, null, 3);
        f[w](this, "__swiffy_v", {
            get: function () {
                return new Xm(this[Ff], this.blurX, this.blurY)
            }
        })
    };
    kj(Ym, "BlurFilter", Mo);
    var bn = function (a, b, c, d, e, h, k, n, u, y, C) {
        Na(this, L(b) ? b : 45);
        this.blurX = L(e) ? e : 10;
        this.blurY = L(h) ? h : 10;
        Ya(this, L(a) ? a : 4);
        zb(this, L(d) ? d : 1);
        ib(this, L(c) ? c : 0);
        this.knockout = L(y) ? y : !1;
        Ib(this, L(n) ? n : 1);
        this.strength = L(k) ? k : 1;
        this.inner = L(u) ? u : !1;
        this.hideObject = L(C) ? C : !1;
        lj(this, null, 3);
        f[w](this, "__swiffy_v", {
            get: function () {
                return new an(90 + this[fd], No(this[re], this[ff]), this[Kd], this[nf], this[Ff], this.blurX, this.blurY, this[Qb], this[dd], this[kc])
            }
        })
    };
    kj(bn, "DropShadowFilter", Mo);
    var Qm = function (a) {
        eb(this, L(a) ? a : [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]);
        lj(this, null, 3);
        f[w](this, "__swiffy_v", {
            get: function () {
                return new Pm(this[fe])
            }
        })
    };
    kj(Qm, "ColorMatrixFilter", Mo);
    var Um = function (a, b, c, d, e, h, k, n, u) {
        this.matrixX = L(a) ? a : 0;
        this.matrixY = L(b) ? b : 0;
        var y = [];
        f[w](this, "matrix", {
            get: function () {
                return y
            },
            set: function (a) {
                var b = this[Le] * this[Ke];
                y = null != a ? a : [];
                if (y[G] > b) tb(y, b);
                else
                    for (; y[G] < b;) y[D](0)
            }
        });
        eb(this, c);
        this.bias = L(e) ? e : 0;
        this.preserveAlpha = L(h) ? h : !0;
        this.clamp = L(k) ? k : !0;
        ib(this, L(n) ? n : 0);
        zb(this, L(u) ? u : 0);
        this.divisor = L(d) ? d : 1;
        lj(this, null, 3);
        f[w](this, "__swiffy_v", {
            get: function () {
                return new Tm(this[ac], this[Ye], No(this[re], this[ff]), this[cf], this[fe], this[Ke],
                    this[Le], this[ic])
            }
        })
    };
    kj(Um, "ConvolutionFilter", Mo);
    var Oo = function (a, b, c, d, e, h, k, n) {
        this.blurX = L(c) ? c : 10;
        this.blurY = L(d) ? d : 10;
        zb(this, L(b) ? b : 1);
        ib(this, L(a) ? a : 0);
        this.knockout = L(n) ? n : !1;
        Ib(this, L(h) ? h : 1);
        this.strength = L(e) ? e : 1;
        this.inner = L(k) ? k : !1;
        lj(this, null, 3);
        f[w](this, "__swiffy_v", {
            get: function () {
                return new an(0, No(this[re], this[ff]), 0, this[nf], this[Ff], this.blurX, this.blurY, !1, this[dd], this[kc])
            }
        })
    };
    kj(Oo, "GlowFilter", Mo);
    var Ho = function () {};
    kj(Ho, "TextField", Ti);
    Ho[H].getTextFormat = function (a, b) {
        var c = this.__swiffy_d;
        if (c) return c.Nq(a, b).Oq()
    };
    Ho[H].setTextFormat = function (a, b, c) {
        var d = this.__swiffy_d;
        if (d) {
            var e = new Hk,
                h, k;
            a instanceof Hk && (e = a);
            L(b) && b instanceof Hk && (e = b, h = a);
            L(c) && (e = c, h = a, k = b);
            a = Gk(e);
            d.Uj(a, h, k)
        }
    };
    Ho[H].getNewTextFormat = function () {
        var a = this.__swiffy_d;
        if (a) return a.Mq().Oq()
    };
    Ho[H].setNewTextFormat = function (a) {
        var b = this.__swiffy_d;
        b && (a = Gk(a), b.or(a))
    };
    var Po = function (a, b, c, d) {
        f[w](Ho[H], a, {
            get: function () {
                var a = this.__swiffy_d;
                if (a) return b[I](this, a)
            },
            set: function (a) {
                var b = this.__swiffy_d;
                b && c && c[I](this, b, a)
            },
            enumerable: L(d) ? d : !0
        })
    };
    Po("text", function (a) {
        var b = a.qd;
        a.Wb && (b = Sk(b, a[t][md]));
        return b
    }, function (a, b) {
        var c = a.a.$();
        b = c.ya(b);
        a.Wb && (a.ej(!1), b = Tk(b));
        null != a.oe() ? c.Ur(a.oe(), a, b) : a.ge(b);
        a.ej(!0)
    });
    Po("htmlText", function (a) {
        var b = a.qd;
        a.Wb && (b = Uk(q(b)));
        return b
    }, function (a, b) {
        var c = a.a.$();
        b = c.ya(b);
        null != a.oe() ? c.$i(a.oe(), b) : a.ge(b)
    });
    Po("textColor", function (a) {
        return a.$q()
    }, function (a, b) {
        a.sr(p(b))
    });
    Po("antiAliasType", function (a) {
        return a.pl
    }, function (a, b) {
        "normal" != b && "advanced" != b || a.hr(q(b))
    });
    Po("autoSize", function (a) {
        return a.Uf
    }, function (a, b) {
        switch (b) {
        case !0:
            b = "left";
        case "center":
        case "left":
        case "none":
        case "right":
            break;
        default:
            b = "none"
        }
        a.ir(b)
    });
    Po("background", function (a) {
        return a.no
    }, function (a, b) {
        a.Wm( !! b)
    }, !1);
    Po("backgroundColor", function (a) {
        return a.ev()
    }, function (a, b) {
        a.Fv(p(b))
    }, !1);
    Po("border", function (a) {
        return a.ah
    }, function (a, b) {
        a.jr( !! b)
    }, !1);
    Po("borderColor", function (a) {
        return a.fv()
    }, function (a, b) {
        a.Hv(p(b))
    }, !1);
    Po("condenseWhite", function (a) {
        return a.oo
    }, function (a, b) {
        a.Iv( !! b)
    }, !1);
    Po("embedFonts", function (a) {
        return a.Tf
    }, function (a, b) {
        a.mr( !! b)
    });
    Po("gridFitType", function (a) {
        return a.po
    }, function (a, b) {
        "none" != b && "pixel" != b && "subpixel" != b || a.Lv(q(b))
    }, !1);
    Po("html", function (a) {
        return a.Wb
    }, function (a, b) {
        b = !! b;
        if (b != a.Wb) {
            var c = this[ce];
            a.ku(b);
            db(this, c)
        }
    });
    Po("length", function () {
        return this[ce][G]
    });
    Po("maxChars", function (a) {
        return a.qo
    }, function (a, b) {
        a.Mv(null != b ? p(b) : null)
    }, !1);
    Po("mouseWheelEnabled", function () {
        return !0
    }, void 0, !1);
    Po("multiline", function (a) {
        return a.kg
    }, function (a, b) {
        a.nr( !! b)
    });
    Po("password", function (a) {
        return a.ro
    }, function (a, b) {
        a.Qv( !! b)
    }, !1);
    Po("restrict", function (a) {
        return a.gs
    }, function (a, b) {
        a.Uv(null != b ? q(b) : null)
    }, !1);
    Po("selectable", function (a) {
        return a.ul
    }, function (a, b) {
        a.qr( !! b)
    });
    f[w](Ho[H], "styleSheet", {
        value: void 0,
        enumerable: !1
    });
    Po("sharpness", function (a) {
        return a.so
    }, function (a, b) {
        a.Wv(p(b))
    }, !1);
    f[w](Ho[H], "tabIndex", {
        value: void 0,
        writable: !0,
        enumerable: !1
    });
    Po("textHeight", function (a) {
        return l[$b](a.Mo() / 20)
    });
    Po("textWidth", function (a) {
        return l[$b](a.No() / 20)
    });
    Po("thickness", function (a) {
        return a.uo
    }, function (a, b) {
        a.Xv(p(b))
    }, !1);
    Po("variable", function (a) {
        return a.oe()
    }, function (a, b) {
        a.$i(null != b ? q(b) : null)
    });
    Po("wordWrap", function (a) {
        return a.Fh
    }, function (a, b) {
        a.tr( !! b)
    });
    Po("type", function (a) {
        return a.tl ? "input" : "dynamic"
    }, function (a, b) {
        b = q(b)[Gf]();
        "input" == b ? a.Xm(!0) : "dynamic" == b && a.Xm(!1)
    }, !1);
    lj(Ho[H], null, 3);
    var Qo = function () {
        f[w](this, "contentType", {
            value: "application/x-www-form-urlencoded",
            writable: !0
        });
        f[w](this, "loaded", {
            value: !1,
            writable: !0
        });
        f[w](this, "requestHeaders", {
            value: []
        })
    };
    kj(Qo, "LoadVars");
    xl(Qo);
    Qo[H].addRequestHeader = function (a, b) {
        if (Nf(a) && L(b)) this.requestHeaders[D](new Ro(a, b));
        else if (Lf(a))
            for (var c = a[G] / 2, d = 0; d < c; d++) this.requestHeaders[D](new Ro(a[2 * d], a[2 * d + 1]))
    };
    fb(Qo[H], function (a) {
        var b = this.__swiffy_vm;
        a = b.ya(a);
        Cb(this, !1);
        var c = this,
            d = new fl;
        d.Cb = function (a) {
            if (M(c.onData)) c.onData(a)
        };
        d.wc = function () {
            if (M(c.onData)) c.onData(void 0)
        };
        sl(a, b.a, void 0, this, d)
    });
    ua(Qo[H], function (a, b, c) {
        if (0 == arguments[G]) return !1;
        var d = this.__swiffy_vm;
        a = d.ya(a);
        var e = L(b) ? b : "_self",
            h;
        if ("GET" == c) h = 1;
        else {
            if (L(c) && "POST" != c) throw new wl("Bad method: " + c);
            h = 2
        }
        d.a.Bh(new Bl(d, this, a, e, h))
    });
    Qo[H].sendAndLoad = function (a, b, c) {
        var d = this.__swiffy_vm;
        a = d.ya(a);
        Cb(b, !1);
        var e = new fl;
        e.Cb = function (a) {
            if (M(b.onData)) b.onData(a)
        };
        e.wc = function () {
            if (M(b.onData)) b.onData(void 0)
        };
        sl(a, d.a, c || "POST", this[Sc](), e, this.requestHeaders, this.contentType)
    };
    Qo[H].onData = function (a) {
        var b = L(a);
        b && M(this.decode) && this.decode(a);
        Cb(this, b);
        if (M(this.onLoad)) this.onLoad(b)
    };
    Qo[H].onLoad = function () {};
    Qo[H].decode = function (a) {
        a = Yi(a);
        for (var b in a) {
            var c = a[b];
            this[b] = c[c[G] - 1]
        }
    };
    Ia(Qo[H], function () {
        return Ui(this)
    });
    lj(Qo[H], null, 3);
    var So = function (a, b) {
        f[w](this, "nodeType", {
            value: a,
            writable: !1
        });
        f[w](this, "attributes", {
            value: {},
            writable: !1
        });
        1 == a ? (this.nodeName = b, this.nodeValue = null) : (this.nodeName = null, this.nodeValue = b);
        this["__swiffy.next_sibling"] = null;
        this["__swiffy.previous_sibling"] = null;
        this["__swiffy.parent_node"] = null;
        this["__swiffy.child_nodes"] = []
    };
    kj(So, "XMLNode");
    f[w](So[H], "childNodes", {
        get: function () {
            return this["__swiffy.child_nodes"][ee](0)
        }
    });
    f[w](So[H], "firstChild", {
        get: function () {
            return this["__swiffy.child_nodes"][0]
        }
    });
    f[w](So[H], "lastChild", {
        get: function () {
            return this["__swiffy.child_nodes"][this["__swiffy.child_nodes"][G] - 1]
        }
    });
    f[w](So[H], "nextSibling", {
        get: function () {
            return this["__swiffy.next_sibling"]
        }
    });
    f[w](So[H], "parentNode", {
        get: function () {
            return this["__swiffy.parent_node"]
        }
    });
    f[w](So[H], "previousSibling", {
        get: function () {
            return this["__swiffy.previous_sibling"]
        }
    });
    Ia(So[H], function () {
        return To(this, !1, 0)
    });
    var To = function (a, b, c) {
        b = "undefined" !== typeof b ? b : !1;
        c = "undefined" !== typeof c ? c : 0;
        var d = "";
        if (b)
            for (var e = 0; e < c; e++) d += "  ";
        var h = b ? "\n" : "";
        if (3 == a[ge]) return d + Tn(a.nodeValue) + h;
        var k = "";
        if (null == a[te]) a.xmlDecl && (k += d + a.xmlDecl + h), a.docTypeDecl && (k += d + a.docTypeDecl + h);
        else {
            var k = k + (d + "<" + a[te]),
                n;
            for (n in a[Nd]) k += " " + n + '="' + a[Nd][n] + '"';
            if (0 == a["__swiffy.child_nodes"][G]) return k + " />";
            k += ">" + h
        }
        for (e = 0; e < a["__swiffy.child_nodes"][G]; e++) n = To(a["__swiffy.child_nodes"][e], b, c + 1), k += n;
        null != a[te] &&
            (k += d + "</" + a[te] + ">" + h);
        return k
    };
    So[H].appendChild = function (a) {
        if (!~this["__swiffy.child_nodes"][pe](a)) {
            a[Ed]();
            var b = this.lastChild;
            this["__swiffy.child_nodes"][D](a);
            b && (b["__swiffy.next_sibling"] = a, a["__swiffy.previous_sibling"] = b);
            a["__swiffy.parent_node"] = this
        }
    };
    So[H].insertBefore = function (a, b) {
        if (!~this["__swiffy.child_nodes"][pe](a)) {
            var c = this["__swiffy.child_nodes"][pe](b);
            if (~c) {
                a[Ed]();
                a["__swiffy.parent_node"] = this;
                var d = this["__swiffy.child_nodes"][c - 1],
                    e = this["__swiffy.child_nodes"][c];
                this["__swiffy.child_nodes"][Af](c, 0, a);
                d ? (d["__swiffy.next_sibling"] = a, a["__swiffy.previous_sibling"] = d) : a["__swiffy.previous_sibling"] = null;
                e ? (e["__swiffy.previous_sibling"] = a, a["__swiffy.next_sibling"] = e) : a["__swiffy.next_sibling"] = null
            }
        }
    };
    So[H].removeNode = function () {
        if (this["__swiffy.parent_node"]) {
            var a = this["__swiffy.parent_node"]["__swiffy.child_nodes"][pe](this);~
            a && this["__swiffy.parent_node"]["__swiffy.child_nodes"][Af](a, 1)
        }
        this["__swiffy.next_sibling"] && (this["__swiffy.next_sibling"]["__swiffy.previous_sibling"] = this["__swiffy.previous_sibling"]);
        this["__swiffy.previous_sibling"] && (this["__swiffy.previous_sibling"]["__swiffy.next_sibling"] = this["__swiffy.next_sibling"]);
        this["__swiffy.next_sibling"] = null;
        this["__swiffy.previous_sibling"] =
            null;
        this["__swiffy.parent_node"] = null
    };
    So[H].cloneNode = function (a) {
        var b = new So(this[ge], null);
        b.nodeName = this[te];
        b.nodeValue = this.nodeValue;
        for (var c in this[Nd]) b[Nd][c] = this[Nd][c];
        if (a)
            for (c = 0; c < this["__swiffy.child_nodes"][G]; c++) {
                var d = this["__swiffy.child_nodes"][c].cloneNode(a);
                b["__swiffy.child_nodes"][c] = d
            }
        return b
    };
    So[H].hasChildNodes = function () {
        return this["__swiffy.child_nodes"] && 0 < this["__swiffy.child_nodes"][G]
    };
    var Uo = function (a, b, c) {
        for (var d = null, e; e = c[gd]();) {
            var h;
            switch (e[E]) {
            case "close":
                return e[ke];
            case "tag":
                h = 1;
                break;
            case "text":
            case "cdata":
                h = 3;
                break;
            case "xml_declaration":
                a.xmlDecl || (a.xmlDecl = "");
                a.xmlDecl += e[ke];
                continue;
            case "doctype":
                a.docTypeDecl = e[ke];
                continue;
            default:
                continue
            }
            h = new So(h, e[ke]);
            h["__swiffy.parent_node"] = b;
            d && (h["__swiffy.previous_sibling"] = d, d["__swiffy.next_sibling"] = h);
            d = h;
            b["__swiffy.child_nodes"][D](h);
            if ("tag" == e[E]) {
                if (e[Nd])
                    for (var k = 0; k < e[Nd][G]; k++) {
                        var n = e[Nd][k];
                        h[Nd][n[F]] = n[ke]
                    }
                h = Uo(a, h, c);
                if (null === h || h != e[ke]) return ta(a, -9), h
            }
        }
        return null
    }, Vo = function (a) {
            So[I](this, 1, null);
            a && this.parseXML(a);
            f[w](this, "requestHeaders", {
                value: []
            })
        };
    kj(Vo, "XML", So);
    xl(Vo);
    Cb(Vo[H], void 0);
    Vo[H].contentType = "application/x-www-form-urlencoded";
    ta(Vo[H], 0);
    Vo[H].createElement = function (a) {
        return new So(1, a)
    };
    Vo[H].createTextNode = function (a) {
        return new So(3, a)
    };
    Vo[H].addRequestHeader = function (a, b) {
        if (Nf(a) && L(b)) this.requestHeaders[D](new Ro(a, b));
        else if (Lf(a))
            for (var c = a[G] / 2, d = 0; d < c; d++) this.requestHeaders[D](new Ro(a[2 * d], a[2 * d + 1]))
    };
    fb(Vo[H], function (a) {
        var b = this.__swiffy_vm;
        a = b.ya(a);
        Cb(this, !1);
        var c = this,
            d = new fl;
        d.Cb = function (a) {
            if (M(c.onData)) c.onData(a)
        };
        d.wc = function () {
            if (M(c.onData)) c.onData(void 0)
        };
        sl(a, b.a, void 0, this, d)
    });
    ua(Vo[H], function (a, b, c) {
        if (0 == arguments[G]) return !1;
        var d = this.__swiffy_vm;
        a = d.ya(a);
        var e = L(b) ? b : "_self",
            h, k = this[Sc]();
        if ("GET" == c) h = 1, k = ba(k);
        else {
            if (L(c) && "POST" != c) throw new wl("Bad method: " + c);
            h = 2
        }
        d.a.Bh(new Bl(d, k, a, e, h))
    });
    Vo[H].sendAndLoad = function (a, b) {
        var c = this.__swiffy_vm;
        a = c.ya(a);
        Cb(b, !1);
        var d = new fl;
        d.Cb = function (a) {
            if (M(b.onData)) b.onData(a)
        };
        d.wc = function () {
            if (M(b.onData)) b.onData(void 0)
        };
        sl(a, c.a, "POST", this[Sc](), d, this.requestHeaders, this.contentType)
    };
    Vo[H].onData = function (a) {
        var b = L(a);
        b && M(this.parseXML) && this.parseXML(a);
        Cb(this, b);
        if (M(this.onLoad)) this.onLoad(b)
    };
    Vo[H].onLoad = function () {};
    Vo[H].parseXML = function (a) {
        for (var b = this["__swiffy.child_nodes"][G] - 1; 0 <= b; b--) this["__swiffy.child_nodes"][b][Ed]();
        for (var c in this[Nd]) delete this[Nd][c];
        this.docTypeDecl = this.xmlDecl = void 0;
        a = new Zn(a, this.ignoreWhite, !0);
        try {
            ta(this, 0), null !== Uo(this, this, a) && ta(this, -10)
        } catch (d) {
            ta(this, Wo(d[E]))
        }
    };
    var Wo = function (a) {
        switch (a) {
        case "cdata":
            return -2;
        case "xml_declaration":
            return -3;
        case "doctype":
            return -4;
        case "comment":
            return -5;
        case "tag":
        case "close":
            return -6;
        case "attribute":
            return -8;
        default:
            return -1
        }
    };
    lj(Vo[H], null, 3);
    var Hk = function () {};
    kj(Hk, "TextFormat");
    var Xo = function () {
        this.showMenu = !0
    };
    kj(Xo, "Stage");
    f[w](Xo[H], "height", {
        get: function () {
            var a = this.__swiffy_d;
            return "noScale" == a.Wc ? a.mc : a.lh
        },
        set: function () {}
    });
    f[w](Xo[H], "width", {
        get: function () {
            var a = this.__swiffy_d;
            return "noScale" == a.Wc ? a.nc : a.mh
        },
        set: function () {}
    });
    f[w](Xo[H], "align", {
        get: function () {
            var a = this.__swiffy_d.Be,
                b = "";
            a & 1 && (b += "L");
            a & 2 && (b += "T");
            a & 4 && (b += "R");
            a & 8 && (b += "B");
            return b
        },
        set: function (a) {
            this.__swiffy_d.gr(q(a))
        }
    });
    f[w](Xo[H], "scaleMode", {
        get: function () {
            return this.__swiffy_d.Wc
        },
        set: function (a) {
            var b = this.__swiffy_d;
            switch (q(a)[Gf]()) {
            case "exactfit":
                a = "exactFit";
                break;
            case "noborder":
                a = "noBorder";
                break;
            case "noscale":
                a = "noScale";
                break;
            default:
                a = "showAll"
            }
            b.pr(a)
        }
    });
    lj(Xo[H], null, 3);
    var Yo = function () {
        this.allowDomain = function () {
            return !0
        };
        this.allowInsecureDomain = function () {
            return !0
        }
    };
    kj(Yo, "System.security");
    var Zo = function () {
        this.security = new Yo
    };
    lj(Xo[H], null, 3);
    kj(Zo, "System");
    var $o = function () {
        f[w](this, "__swiffy_v", {
            value: {
                zm: 0,
                volume: 100,
                transform: {
                    He: 100,
                    wm: 0,
                    xm: 0,
                    ym: 100
                }
            }
        })
    };
    kj($o, "Sound");
    xl($o);
    $o[H].checkPolicyFile = !1;
    f[w]($o[H], "duration", {
        value: 0
    });
    f[w]($o[H], "id3", {
        value: void 0
    });
    f[w]($o[H], "position", {
        value: 0
    });
    $o[H].onID3 = void 0;
    $o[H].onLoad = void 0;
    $o[H].onSoundComplete = void 0;
    $o[H].attachSound = function () {};
    $o[H].getBytesLoaded = function () {
        return 0
    };
    $o[H].getBytesTotal = function () {
        return 0
    };
    $o[H].getPan = function () {
        return this.__swiffy_v.zm
    };
    $o[H].getTransform = function () {
        var a = this.__swiffy_v;
        return {
            ll: a[Ef].He,
            lr: a[Ef].wm,
            rl: a[Ef].xm,
            rr: a[Ef].ym
        }
    };
    $o[H].getVolume = function () {
        return this.__swiffy_v.volume
    };
    $o[H].loadSound = function (a) {
        var b = this.__swiffy_vm.a.Al;
        b && b.zl("GET", a, null, null);
        this.__swiffy_vm.lj("setTimeout")(Vf(function () {
            if (M(this.onLoad)) this.onLoad(!0)
        }, this), 1)
    };
    $o[H].setPan = function (a) {
        a = ap[I](this, a);
        var b = this.__swiffy_v;
        b.zm = -100 > a ? -200 - a : 100 < a ? 200 - a : a;
        Hb(b, {
            He: 0 < a ? 100 - a : 100,
            ym: 0 > a ? 100 + a : 100,
            wm: 0,
            xm: 0
        })
    };
    $o[H].setTransform = function (a) {
        if (a) {
            var b = this.__swiffy_v;
            L(a.ll) && (b[Ef].He = bp[I](this, a.ll));
            L(a.lr) && (b[Ef].wm = bp[I](this, a.lr));
            L(a.rl) && (b[Ef].xm = bp[I](this, a.rl));
            L(a.rr) && (b[Ef].ym = bp[I](this, a.rr));
            b.zm = -100 > 100 - b[Ef].He ? -200 - (100 - b[Ef].He) : 100 < 100 - b[Ef].He ? 200 - (100 - b[Ef].He) : 100 - b[Ef].He
        }
    };
    $o[H].setVolume = function (a) {
        this.__swiffy_v.volume = ap[I](this, a)
    };
    Ua($o[H], function () {
        this.__swiffy_vm.lj("setTimeout")(Vf(function () {
            if (M(this.onSoundComplete)) this.onSoundComplete()
        }, this), 1)
    });
    rb($o[H], function () {});
    Ia($o[H], function () {
        return "[object Object]"
    });
    lj($o[H], null, 3);
    var ap = function (a) {
        a = this.__swiffy_vm.lj("Number")(a);
        return da(a) ? -2147483648 : a >> 0
    }, bp = function (a) {
            return this.__swiffy_vm.lj("Number")(a) >> 0
        };
    var Co = function (a, b) {
        this.x = L(a) ? a : 0;
        this.y = L(b) ? b : 0
    };
    kj(Co, "Point", nj);
    f[w](Co[H], "length", {
        get: function () {
            return l[Fe](this.x * this.x + this.y * this.y)
        }
    });
    Co[H].add = function (a) {
        return new Co(this.x + a.x, this.y + a.y)
    };
    Co[H].clone = function () {
        return new Co(this.x, this.y)
    };
    Ya(Co, function (a, b) {
        return l[Fe]((a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y))
    });
    Co[H].equals = function (a) {
        return this.x == a.x && this.y == a.y
    };
    Co.interpolate = function (a, b, c) {
        return new Co(a.x * c + b.x * (1 - c), a.y * c + b.y * (1 - c))
    };
    Fb(Co[H], function (a) {
        a /= this[G];
        this.x *= a;
        this.y *= a
    });
    Ea(Co[H], function (a, b) {
        this.x += a;
        this.y += b
    });
    Co.polar = function (a, b) {
        return new Co(a * l.cos(b), a * l.sin(b))
    };
    Co[H].subtract = function (a) {
        return new Co(this.x - a.x, this.y - a.y)
    };
    Ia(Co[H], function () {
        return "(x=" + this.x + ", y=" + this.y + ")"
    });
    var Go = function (a, b, c, d) {
        this.x = L(a) ? a : 0;
        this.y = L(b) ? b : 0;
        na(this, L(c) ? c : 0);
        Za(this, L(d) ? d : 0)
    };
    kj(Go, "Rectangle", nj);
    f[w](Go[H], "top", {
        get: function () {
            return this.y
        },
        set: function (a) {
            this.y = a
        }
    });
    f[w](Go[H], "left", {
        get: function () {
            return this.x
        },
        set: function (a) {
            this.x = a
        }
    });
    f[w](Go[H], "bottom", {
        get: function () {
            return this.y + this[Rd]
        },
        set: function (a) {
            Za(this, a - this.y)
        }
    });
    f[w](Go[H], "right", {
        get: function () {
            return this.x + this[Tb]
        },
        set: function (a) {
            na(this, a - this.x)
        }
    });
    f[w](Go[H], "topLeft", {
        get: function () {
            return new Co(this.left, this.top)
        },
        set: function (a) {
            kb(this, a.x);
            this.top = a.y
        }
    });
    f[w](Go[H], "bottomRight", {
        get: function () {
            return new Co(this[Td], this[Cd])
        },
        set: function (a) {
            this.right = a.x;
            this.bottom = a.y
        }
    });
    f[w](Go[H], "size", {
        get: function () {
            return new Co(this[Tb], this[Rd])
        },
        set: function (a) {
            na(this, a.x);
            Za(this, a.y)
        }
    });
    Go[H].clone = function () {
        return new Go(this.x, this.y, this[Tb], this[Rd])
    };
    Wa(Go[H], function (a, b) {
        return this.x <= a && this.y <= b && a < this[Td] && b < this[Cd]
    });
    Go[H].containsPoint = function (a) {
        return this[Id](a.x, a.y)
    };
    Go[H].containsRectangle = function (a) {
        var b = this[Td],
            c = this[Cd],
            d = a[Td],
            e = a[Cd];
        return this.x <= a.x && this.y <= a.y && a.x < b && a.y < c && this.x < d && this.y < e && d <= b && e <= c
    };
    Go[H].copyFrom = function (a) {
        this.x = a.x;
        this.y = a.y;
        na(this, a[Tb]);
        Za(this, a[Rd])
    };
    Go[H].equals = function (a) {
        return this.x == a.x && this.y == a.y && this[Tb] == a[Tb] && this[Rd] == a[Rd]
    };
    Go[H].inflate = function (a, b) {
        this.x -= a;
        this.y -= b;
        na(this, this[Tb] + 2 * a);
        Za(this, this[Rd] + 2 * b)
    };
    Go[H].inflatePoint = function (a) {
        this.inflate(a.x, a.y)
    };
    Go[H].intersection = function (a) {
        if (this.intersects(a)) {
            var b = l.max(this.x, a.x),
                c = l.max(this.y, a.y),
                d = l.min(this[Td], a[Td]);
            a = l.min(this[Cd], a[Cd]);
            return new Go(b, c, d - b, a - c)
        }
        return new Go
    };
    Go[H].intersects = function (a) {
        return 0 < a[Tb] && 0 < a[Rd] && 0 < this[Tb] && 0 < this[Rd] && a.x < this[Td] && a.y < this[Cd] && a[Td] > this.x && a[Cd] > this.y
    };
    Go[H].isEmpty = function () {
        return 0 >= this[Tb] || 0 >= this[Rd]
    };
    Ea(Go[H], function (a, b) {
        this.x += a;
        this.y += b
    });
    Go[H].offsetPoint = function (a) {
        this[Kc](a.x, a.y)
    };
    Go[H].setEmpty = function () {
        this.y = this.x = 0;
        na(this, 0);
        Za(this, 0)
    };
    Go[H].union = function (a) {
        if (this.isEmpty()) return a.clone();
        if (a.isEmpty()) return this.clone();
        var b = l.min(this.x, a.x),
            c = l.min(this.y, a.y),
            d = l.max(this[Td], a[Td]);
        a = l.max(this[Cd], a[Cd]);
        return new Go(b, c, d - b, a - c)
    };
    Ia(Go[H], function () {
        return "(x=" + this.x + ", y=" + this.y + ", w=" + this[Tb] + ", h=" + this[Rd] + ")"
    });
    var mo = function (a) {
        f[w](this, "__swiffy_vm", {
            value: a
        });
        this.String = cp(q, function (b) {
            return a.ya(b)
        }, ["fromCharCode"]);
        lj(this, "String", 3);
        this.Number = cp(p, function (b) {
            return a.hf(b)
        }, ["MAX_VALUE", "MIN_VALUE", "NaN", "NEGATIVE_INFINITY", "POSITIVE_INFINITY"]);
        lj(this, "Number", 3);
        this.Boolean = cp(ga, function (b) {
            return a.xo(b)
        });
        lj(this, "Boolean", 3);
        this.AsBroadcaster = new qj(a);
        lj(this, "AsBroadcaster", 3);
        this.setInterval = function () {
            return dp(a, ca.setInterval, arguments)
        };
        lj(this, "setInterval", 3);
        this.setTimeout =
            function () {
                return dp(a, ca.setTimeout, arguments)
        };
        lj(this, "setTimeout", 3);
        this.updateAfterEvent = function () {
            a.a.Jf = !0
        };
        lj(this, "updateAfterEvent", 3);
        this.escape = function (b) {
            return ba(a.ya(b))[Wb](/[.!*'()]/g, function (a) {
                return "%" + a[pf](0)[Sc](16)[zf]()
            })
        };
        lj(this, "escape", 3);
        this.unescape = function (b) {
            return Xi(a.ya(b))
        };
        lj(this, "unescape", 3);
        f[H][rd]("addProperty") || (Ia(Function[H], function () {
            return "[type Function]"
        }), lj(Function[H], ["toString"], 3), f[H].unwatch = function (a) {
            if (1 > arguments[G]) return !1;
            var c = this[a];
            delete this[a];
            this[a] = c;
            return !0
        }, f[H].watch = function (a, c, d) {
            if (2 > arguments[G]) return !1;
            for (var e = this, h = null, k = this; k; k = f[Pc](k))
                if (null != f[vd](k, a)) {
                    e = k;
                    h = f[vd](k, a);
                    break
                }
            if (!h || h[td]) {
                var n = e[a];
                delete e[a];
                f[w](e, a, {
                    get: function () {
                        return n
                    },
                    set: function (e) {
                        return n = c[I](this, a, n, e, d)
                    },
                    configurable: !0
                })
            }
            return !0
        }, f[H].addProperty = function (a, c, d) {
            var e = f[vd](this, a);
            if (null == a || "" == a || !M(c) || d && !M(d) || e && !e[td]) return !1;
            if (!d || e && !e[ue]) d = function () {};
            f[w](this, a, {
                get: c,
                set: d,
                configurable: !0,
                enumerable: !(e && !e.enumerable)
            });
            return !0
        }, lj(f[H], ["watch", "unwatch", "addProperty"], 3))
    };
    kj(mo, "global");
    var cp = function (a, b, c) {
        b.__swiffy_override = function (c) {
            return new a(b(c))
        };
        b.__swiffy_wrapped_type = a;
        if (L(c))
            for (var d = 0; d < c[G]; d++) b[c[d]] = a[c[d]];
        lj(b, null, 3);
        return b
    };
    mo[H].ASSetPropFlags = lj;
    mo[H].clearInterval = function (a) {
        ca.clearInterval(a)
    };
    mo[H].clearTimeout = function (a) {
        ca.clearTimeout(a)
    };
    mo[H].parseFloat = ia;
    mo[H].parseInt = function (a, b) {
        !L(b) && Qi(a) && (b = 8);
        return ha(a, b)
    };
    mo[H].isFinite = function (a) {
        return ja(a)
    };
    mo[H].isNaN = function (a) {
        return da(a)
    };
    var dp = function (a, b, c) {
        var d = c[0];
        if (M(d) && 2 <= c[G]) {
            var e = m[H][ee][I](c, 2);
            c = c[1];
            return b[I](ca, function () {
                d[B](zo(null), e);
                a.Ja()
            }, c)
        }
        if (Qf(d) && 3 <= c[G]) {
            var h = c[1],
                e = m[H][ee][I](c, 3);
            c = c[2];
            return b[I](ca, function () {
                M(d[h]) && (d[h][B](zo(d), e), a.Ja())
            }, c)
        }
    };
    mo[H].Array = m;
    mo[H].AsBroadcaster = qj;
    mo[H].Button = Lo;
    mo[H].flash = {
        filters: {
            BevelFilter: fn,
            BlurFilter: Ym,
            ColorMatrixFilter: Qm,
            ConvolutionFilter: Um,
            DropShadowFilter: bn,
            GlowFilter: Oo
        },
        geom: {
            Matrix: Ao,
            Point: Co,
            Rectangle: Go
        }
    };
    mo[H].Color = ho;
    mo[H].Date = Date;
    mo[H].Error = xo;
    mo[H].Function = yo;
    mo[H].LoadVars = Qo;
    mo[H].Math = l;
    mo[H].MovieClip = O;
    mo[H].MovieClipLoader = Io;
    mo[H].NetConnection = Jo;
    mo[H].NetStream = Ko;
    mo[H].Object = nj;
    f[w](nj, "__swiffy_override", {
        value: oj
    });
    f[w](nj, "__swiffy_wrapped_type", {
        value: f
    });
    mo[H].Sound = $o;
    mo[H].System = new Zo;
    mo[H].TextField = Ho;
    mo[H].TextFormat = Hk;
    mo[H].XML = Vo;
    mo[H].XMLNode = So;
    f[w](mo[H], "Key", {
        get: function () {
            return this.__swiffy_vm.getKey()
        },
        set: function () {}
    });
    f[w](mo[H], "Mouse", {
        get: function () {
            return this.__swiffy_vm.dg
        },
        set: function () {}
    });
    f[w](mo[H], "Stage", {
        get: function () {
            return this.__swiffy_vm.a.t
        },
        set: function () {}
    });
    lj(mo[H], null, 3);
    kj(m, "Array");
    kj(ga, "Boolean");
    kj(Date, "Date");
    kj(l, "Math");
    kj(p, "Number");
    kj(q, "String");
    var Kl = function (a) {
        this.h = [];
        this.ib = [];
        this.a = a;
        this.Fr = this.un();
        this.bg = [];
        this.fe = [];
        this.Fk = !1;
        this.Xb = 0;
        this.fc = 4;
        this.sk = null;
        this.md = zl;
        this.xi = new no(this, a);
        this.Oe = new ll;
        this.dg = new go;
        this.th(this.dg);
        this.fg = new eo;
        this.th(this.fg);
        this.pk();
        this.Gr()
    };
    K = Kl[H];
    K.Gr = function () {
        var a = this,
            b = this.a.Ed;
        b.SetVariable = function (b, d) {
            var e = a.nh(q(b), a.a.Wa.t);
            if (e[He]) {
                var h = a.od(e[He], e.Vf);
                e[He][h] = q(d)
            }
        };
        b.GetVariable = function (b) {
            b = a.nh(q(b), a.a.Wa.t);
            if (b[He]) {
                var d = a.B(b[He], b.Vf);
                return d in b[He] ? q(b[He][d]) : null
            }
            return null
        }
    };
    K.getKey = function () {
        return this.fg
    };
    K.gp = function (a) {
        this.fe[D](function () {
            this.Vl(a)
        })
    };
    K.rg = function (a) {
        this.fe[D](a)
    };
    K.Ja = function () {
        if (!this.Fk) {
            for (this.Fk = !0; this.bg[G] || this.fe[G];) this.bg[G] ? this.bg[Pb]()[I](this) : this.fe[Pb]()[I](this);
            this.Fk = !1
        }
    };
    K.Gp = function (a, b) {
        try {
            a()
        } catch (c) {
            throw b(c), c;
        }
    };
    K.un = function () {
        return Date.now()
    };
    K.th = function (a) {
        this.xi.get("AsBroadcaster").initialize(a)
    };
    K.reset = function (a) {
        this.h = [];
        this.Xb = 0;
        this.fc = 4;
        tb(this.h, this.h[G] + this.fc);
        this.m = new lo(this, this.xi, a.t)
    };
    K.jg = function (a) {
        var b = 0,
            c = this.md,
            d = ao;
        ao = this;
        this.md = Al;
        try {
            for (; b < a[G];) b = a[b][I](this, b + 1)
        } catch (e) {
            c[I](this, e)
        } finally {
            ao = d, this.md = c
        }
    };
    K.Vl = function (a) {
        a.b.Hd() || (this[Ld](a.b), this.jg(a.zs))
    };
    var ep = function (a) {
        a = a[Wb](/\.\.|\/:?|:/g, function (a) {
            return ".." == a ? "_parent" : "."
        });
        "." == a[0] && (a = "_root" + a);
        "." == a[a[G] - 1] && (a = a[rf](0, a[G] - 1));
        return a
    };
    Kl[H].nh = function (a, b) {
        L(b) || (b = this.Yb());
        var c = 0 < a[pe](":") ? a[hd](":") : a[hd](".");
        if (1 < c[G]) {
            var d = c[ee](0, c[G] - 1)[Cf]("."),
                c = c[c[G] - 1];
            return {
                path: this.bh(d, b),
                Vf: c
            }
        }
        return {
            path: b,
            Vf: a
        }
    };
    Kl[H].lj = function (a) {
        return this.xi.get(a)
    };
    var fp = {
        "boolean": {},
        number: {},
        string: {},
        undefined: {}
    }, gp = function (a) {
            var b = f[Ob](a[id][H]);
            a = fp[typeof a];
            for (var c = 0; c < b[G]; ++c) {
                var d = b[c],
                    e = d[Gf]();
                d != e && (a[e] = d)
            }
        };
    gp(!1);
    gp(0);
    gp("");
    var hp = function (a) {
        if (!a) return {
            constructor: "constructor"
        };
        var b = a.__swiffy_nm;
        if (!b || b.__swiffy_nm != a) {
            for (var b = f[Yc](hp(f[Pc](a))), c = f[Ob](a), d = 0; d < c[G]; ++d) {
                var e = c[d],
                    h = e[Gf]();
                e != h && (b[h] = e)
            }
            f[w](b, "__swiffy_nm", {
                value: a,
                writable: !0
            });
            f[w](a, "__swiffy_nm", {
                value: b,
                writable: !0
            })
        }
        return b
    };
    Kl[H].B = function (a, b) {
        if (7 <= this.a.mb) {
            if (a instanceof Ti) {
                if (b in a) return b;
                var c = b[Gf]();
                if (c in a && -1 < ip[pe](c)) return c
            }
            return b
        }
        var d = fp[typeof a];
        if (!d) {
            if (b in a) return b;
            d = hp(a)
        }
        c = b[Gf]();
        return (d = d[c]) ? d : c
    };
    var zo = function (a) {
        return nj[I](null, a)
    };
    K = Kl[H];
    K.od = function (a, b) {
        if (7 <= this.a.mb) {
            if (a instanceof Ti) {
                if (b in a) return b;
                var c = b[Gf]();
                if (c in a && -1 < ip[pe](c)) return c
            }
            return b
        }
        var d = fp[typeof a];
        if (d) return c = b[Gf](), (d = d[c]) ? d : c;
        if (b in a) return b;
        var e = hp(a),
            c = b[Gf]();
        return (d = e[c]) ? d : b == c || c in a ? c : e[c] = b
    };
    K.Hn = function (a) {
        if (Qf(a)) {
            var b = a[this.B(a, "x")];
            a = a[this.B(a, "y")];
            if (Pf(b) && Pf(a)) return new ri(b, a)
        }
        return null
    };
    K.Yb = function () {
        return this.m.Yb()
    };
    K.ze = function () {
        var a = this.m.Yb();
        return a ? a.__swiffy_d : null
    };
    K.push = function (a) {
        this.h[D](a)
    };
    K.pop = function () {
        if (this.h[G] > this.Xb + this.fc) return this.h.pop()
    };
    K.H = function () {
        return this.hf(this.pop())
    };
    K.Ga = function () {
        return this.ya(this.pop())
    };
    K.re = function () {
        return this.xo(this.pop())
    };
    K.vp = function () {
        return this.tg(this.pop())
    };
    K.Dc = function () {
        for (var a = this.H(), a = l.min(a, this.h[G] - (this.Xb + this.fc)), b = [], c = 0; c < a; ++c) b[c] = this.pop();
        return b
    };
    K.tg = function (a) {
        return a instanceof Ti ? a : this.wo(q(a))
    };
    K.bh = function (a, b) {
        if (!b || !a) return b;
        a = ep(a);
        for (var c = b, d = a[hd]("."), e = 0; e < d[G] && c; e++) c = c[this.B(c, d[e])];
        return c
    };
    K.wo = function (a) {
        return this.bh(a, this.Yb())
    };
    K.Lg = function () {
        this.dg.Lg()
    };
    K.Ig = function () {
        this.Fg(new dk(16));
        this.Ja();
        this.dg.Ig()
    };
    K.Mg = function () {
        this.dg.Mg()
    };
    K.rp = function () {
        return this.dg.__swiffy_mv
    };
    K.Kl = function () {
        this.a.t.broadcastMessage("onResize")
    };
    K.Dj = function (a) {
        this.fg.Dj(a)
    };
    K.zp = function () {
        this.fg.broadcastMessage("onKeyUp")
    };
    K.Aj = function (a) {
        this.fg.Aj(a)
    };
    K.xp = function () {
        this.fg.broadcastMessage("onKeyDown")
    };
    K.zo = function () {};
    K.Ao = function () {};
    K.Kn = function (a, b, c, d) {
        b = this.B(a, b);
        if (!(d && b in a) || d && a[b] && a[b] === a.__swiffy_child_ref[b] && a[b].__swiffy_d[Cc] > c.__swiffy_d[Cc]) b = this.od(a, b), a[b] = c, d && (a.__swiffy_child_ref[b] = c)
    };
    K.Ln = function (a, b, c) {
        b = this.B(a, b);
        c === a[b] && (delete a[b], delete a.__swiffy_child_ref[b])
    };
    K.Ok = function (a, b, c) {
        this.bg[D](function () {
            this.Au(a, b, c)
        })
    };
    K.Au = function (a, b, c) {
        this.Fm(a, b, function (a, e, h, k) {
            var n = c;
            L(k.Ih[h]) || (k.Ih[h] = []);
            k.Ih[h][D](b);
            h in e && (b.ge(q(e[h])), n = e[h]);
            f[w](e, h, a.Rt(n, k.Ih[h]))
        })
    };
    K.Lk = function (a, b) {
        this.bg[D](function () {
            this.Bu(a, b)
        })
    };
    K.Bu = function (a, b) {
        this.Fm(a, b, function (a, d, e, h) {
            (a = h.Ih[e]) && kg(a, b)
        })
    };
    K.Ur = function (a, b, c) {
        this.Fm(a, b, function (a, b, h) {
            b[h] = c
        })
    };
    K.Fm = function (a, b, c) {
        if (b = this.al(b, el)) a = ep(a), b = this.nh(a, b.t), (a = b[He]) && a.__swiffy_d && (b = this.od(a, b.Vf), c(this, a, b, a.__swiffy_d))
    };
    K.al = function (a, b) {
        for (var c = a; c && !(c instanceof b);) c = c[Nb]();
        return c
    };
    K.hp = function (a, b) {
        var c = -16384 + b,
            d = "_level" + b;
        d in O[H] || f[w](O[H], d, {
            get: function () {
                var a = this.__swiffy_d.a.Qc(c);
                if (a) return a.t
            },
            set: function (a) {
                f[w](this, d, {
                    value: a,
                    configurable: !0,
                    writable: !0,
                    enumerable: !0
                })
            }
        })
    };
    K.fireEvent = function (a, b, c, d) {
        var e = vo[c[E]];
        c = !1;
        if (b)
            for (var h = 0; h < b[We][G]; ++h) {
                var k = b[We][h];
                if (!k.Gn || k.Gn(this)) k.Qk && (d ? this.Vl(k.Qk) : this.gp(k.Qk)), k[kd] && (c = !0)
            }
        if (e) {
            var n = this;
            b = function () {
                var b = n.B(a, e);
                if (M(a[b])) a[b]()
            };
            d ? b() : this.rg(b)
        }
        return c
    };
    K.Yr = function (a) {
        a = a instanceof zk ? a[Nb]() : a;
        return a = 5 < this.a.mb ? this.al(a, uk) : this.al(a, el)
    };
    K.pk = function () {
        var a = this;
        ok[H].Aa = function () {
            return f[Yc](Ti[H])
        };
        Lk[H].Aa = function () {
            var b = f[Yc](Ho[H]);
            a.th(b);
            b.addListener(b);
            return b
        };
        Ml[H].Aa = function () {
            var b = f[Yc](Xo[H]);
            a.th(b);
            return b
        };
        uk[H].Aa = function () {
            return f[Yc](wo[H])
        };
        el[H].Aa = function () {
            var a = void 0,
                c = this[t].sn;
            c && (a = pj[c]);
            return f[Yc]((a ? a : O)[H])
        };
        zk[H].Aa = function () {
            return f[Yc](Lo[H])
        };
        xk[H].Aa = function () {
            return {}
        }
    };
    K.yo = function (a, b) {
        var c = a.t;
        b ? (this.bg[D](function () {
            a[Dd](new dk(524288), !0);
            c[id]()
        }), a[Dd](new dk(128)), a.wh()) : (a.wh(), a[Dd](new dk(524288), !0), c[id](), a[Dd](new dk(128)))
    };
    K.Xn = function () {};
    K.Rt = function (a, b) {
        var c = a,
            d = this;
        return {
            get: function () {
                return c
            },
            set: function (a) {
                c = a;
                a = d.ya(a);
                for (var h = 0; h < b[G]; h++) b[h].ge(a)
            },
            configurable: !0
        }
    };
    K.Ec = function (a, b) {
        if (null != a) {
            var c = b in a,
                d = delete a[b];
            delete a[b];
            this.Ev(a, b);
            return c && d
        }
        return !1
    };
    K.Ev = function (a, b) {
        if (a instanceof O) {
            var c = a.__swiffy_d;
            c && (c = c.C.Vp(b)) && jk(a, c, b)
        }
    };
    K.jq = function (a, b) {
        this.a.Wa.t[a] = b
    };
    K.ih = function () {
        return this.Oe
    };
    K.Ad = function (a) {
        for (var b = [], c = 0; c < a[G]; ++c) b[c] = this.Su(a[c]);
        return b
    };
    K.Su = function (a) {
        var b = Q[a[E]];
        if (!b) return Vf(jp, this, a[E]);
        b.Tb && (b = b(a, this));
        return b
    };
    K.Vi = function (a) {
        return !(a instanceof el && a[xd]())
    };
    K.sp = function (a) {
        return a[xd]() && (a instanceof el || a instanceof zk) && a.t.useHandCursor
    };
    K.cp = function (a, b) {
        a && a.Aq(b);
        b && b.Bq(a)
    };
    K.Fg = function (a) {
        for (var b = this.a.Of, c = b[G] - 1; 0 <= c; c--) b[c].Hd() || b[c][Dd](a)
    };
    K.En = function (a, b) {
        b.sa() && b.Ub(a.kh())
    };
    K.Kq = function (a, b) {
        a = q(a);
        b = q(b);
        return a < b ? -1 : a > b ? 1 : 0
    };
    K.Jq = function (a, b) {
        a = q(a)[zf]();
        b = q(b)[zf]();
        return a < b ? -1 : a > b ? 1 : 0
    };
    K.Lq = function (a, b) {
        Pf(a) && Pf(b) || (a = q(a), b = q(b));
        return a < b ? -1 : a > b ? 1 : 0
    };
    var ip = "_x _y _xscale _yscale _currentframe _totalframes _alpha _visible _width _height _rotation _target _framesloaded _name _droptarget _url _highquality _focusrect _soundbuftime _quality _xmouse _ymouse".split(" "),
        Q = {
            4: function (a) {
                this.li();
                return a
            }
        };
    Kl[H].li = function () {
        var a = this.ze();
        a && a.li()
    };
    Q[5] = function (a) {
        this.Cv();
        return a
    };
    Kl[H].Cv = function () {
        var a = this.ze();
        a && a.Om()
    };
    Q[6] = function (a) {
        this[Ge]();
        return a
    };
    mb(Kl[H], function () {
        var a = this.ze();
        a && a[Ge]()
    });
    Q[7] = function (a) {
        this[Se]();
        return a
    };
    rb(Kl[H], function () {
        var a = this.ze();
        a && a[Se]()
    });
    Q[9] = function (a) {
        this.$v();
        return a
    };
    Kl[H].$v = function () {
        var a = this.ze();
        a && a.Ve().Yo()
    };
    Q[10] = function (a) {
        var b = this.H(),
            c = this.H();
        this[D](c + b);
        return a
    };
    Q[11] = function (a) {
        var b = this.H(),
            c = this.H();
        this[D](c - b);
        return a
    };
    Q[12] = function (a) {
        var b = this.H(),
            c = this.H();
        this[D](c * b);
        return a
    };
    Q[13] = function (a) {
        var b = this.H(),
            c = this.H();
        this[D](c / b);
        return a
    };
    Q[14] = function (a) {
        var b = this.H(),
            c = this.H();
        this[D](this.wt(c, b));
        return a
    };
    Q[15] = function (a) {
        var b = this.H(),
            c = this.H();
        this[D](c < b);
        return a
    };
    Q[16] = function (a) {
        var b = this.re(),
            c = this.re();
        this[D](c && b);
        return a
    };
    Q[17] = function (a) {
        var b = this.re(),
            c = this.re();
        this[D](c || b);
        return a
    };
    Q[18] = function (a) {
        var b = this.re();
        this[D](!b);
        return a
    };
    Q[19] = function (a) {
        var b = this.Ga(),
            c = this.Ga();
        this[D](c == b);
        return a
    };
    Q[20] = function (a) {
        var b = this.Ga();
        this[D](b[G]);
        return a
    };
    Q[21] = function (a) {
        var b = this.pop(),
            c = this.pop(),
            d = this.Ga();
        this[D](this.Ot(d, c, b));
        return a
    };
    Kl[H].Ot = function (a, b, c) {
        a = this.ya(a);
        c = p(c);
        b = l.max(0, p(b) - 1);
        return a[Qc](b, c)
    };
    Q[23] = function (a) {
        this.pop();
        return a
    };
    Q[24] = function (a) {
        var b = this.H(),
            b = 0 > b ? l[Yb](b) : l[$b](b);
        this[D](b);
        return a
    };
    Q[28] = function (a) {
        var b = this.Ga();
        this[D](this.oe(b));
        return a
    };
    Kl[H].oe = function (a) {
        a = ep(a);
        a = a[hd](".");
        var b = this.m.get(a[0]);
        if (1 < a[G]) {
            var c;
            for (c = 1; L(b) && c < a[G] - 1; ++c) b = b[this.B(b, a[c])];
            L(b) && (b = b[this.B(b, a[c])])
        }
        return b
    };
    Q[29] = function (a) {
        var b = this.pop(),
            c = this.Ga();
        this.$i(c, b);
        return a
    };
    Kl[H].$i = function (a, b) {
        a = ep(a);
        var c = a[hd](".");
        if (1 == c[G]) this.m.set(a, b);
        else {
            var d = this.m.get(c[0]),
                e;
            for (e = 1; L(d) && e < c[G] - 1; ++e) d = d[this.B(d, c[e])];
            L(d) && (d[this.od(d, c[e])] = b)
        }
    };
    Q[33] = function (a) {
        var b = this.Ga(),
            c = this.Ga();
        this[D](c + b);
        return a
    };
    Q[34] = function (a) {
        var b = this.H(),
            c = this.pop();
        this[D](this.Wd(c, b));
        return a
    };
    Kl[H].Wd = function (a, b) {
        var c = this.tg(a),
            d = ip[b];
        if (c) return c[d]
    };
    Q[35] = function (a) {
        var b = this.pop(),
            c = this.H(),
            d = this.pop();
        this.setProperty(d, c, b);
        return a
    };
    Kl[H].setProperty = function (a, b, c) {
        b = ip[b];
        (a = this.tg(a)) && b && (a[b] = c)
    };
    Q[36] = function (a) {
        var b = this.H(),
            c = this.Ga(),
            d = this.vp(),
            e = this.ze();
        d && e && d.__swiffy_d && d.__swiffy_d.duplicate(e, c, b + -16384);
        return a
    };
    Q[37] = function (a) {
        var b = this.vp();
        b instanceof O && b.removeMovieClip();
        return a
    };
    Q[38] = function (a) {
        this.trace(this.pop());
        return a
    };
    Kl[H].trace = function (a) {
        console.log(a)
        ca.console && (a = L(a) ? this.ya(a) : "undefined", yl(a))
    };
    var jp = function (a, b) {
        return b
    };
    Q[51] = function (a) {
        var b = this.H();
        this[D](q[ye](b));
        return a
    };
    Q[50] = function (a) {
        var b = this.Ga();
        this[D](b[pf](0));
        return a
    };
    Q[52] = function (a) {
        this[D](this.getTime());
        return a
    };
    Kl[H].getTime = function () {
        return this.un() - this.Fr
    };
    Q[48] = function (a) {
        var b = this.H();
        this[D](this[zd](b));
        return a
    };
    Kl[H].random = function (a) {
        var b;
        do b = l[$b](l[zd]() * a); while (b == a && 0 < a);
        return b
    };
    Q[60] = function (a) {
        var b = this.pop(),
            c = this.pop();
        this.m.Tc(c, b);
        return a
    };
    Q[65] = function (a) {
        var b = this.pop();
        this.m.Rh(b);
        return a
    };
    Q[59] = function (a) {
        var b = this.bv(this.pop());
        this[D](b);
        return a
    };
    Kl[H].bv = function (a) {
        a = this.ya(a);
        a = ep(a);
        var b = a[hd](".");
        if (1 == b[G]) return this.m.pe(a);
        a = this.m.get(b[0]);
        var c;
        for (c = 1; L(a) && c < b[G] - 1; ++c) a = a[this.B(a, b[c])];
        return this.Ec(a, this.B(a, b[c]))
    };
    Q[62] = function () {
        Va(this, this.pop());
        return p.MAX_VALUE
    };
    Q[63] = function (a) {
        var b = this.H(),
            c = this.H();
        this[D](c % b);
        return a
    };
    Q[71] = function (a) {
        var b = this.pop(),
            c = this.pop();
        this[D](this.add(c, b));
        return a
    };
    Q[72] = function (a) {
        var b = this.pop(),
            c = this.pop();
        this[D](this.ar(c, b));
        return a
    };
    Kl[H].ar = function (a, b) {
        if ("object" === typeof a && null !== a && (a = a[Xd](), "object" === typeof a) || "object" === typeof b && null !== b && (b = b[Xd](), "object" === typeof b)) return !1;
        if ("string" === typeof a && "string" === typeof b) return a < b;
        "number" !== typeof a && (a = this.hf(a));
        "number" !== typeof b && (b = this.hf(b));
        return da(a) || da(b) ? void 0 : a < b
    };
    Q[103] = function (a) {
        var b = this.pop(),
            c = this.pop();
        this[D](this.ar(b, c));
        return a
    };
    Q[73] = function (a) {
        var b = this.pop(),
            c = this.pop();
        this[D](this.Ld(c, b));
        return a
    };
    Kl[H].Ld = function (a, b) {
        if (!(typeof a === typeof b && null === a == (null === b) && 6 <= this.a.mb)) {
            "object" === typeof a && null !== a && (a = a[Xd]());
            "object" === typeof b && null !== b && (b = b[Xd]());
            if ("object" === typeof a || "object" === typeof b) return void 0 === a || null === a ? void 0 === b || null === b : a === b;
            "string" !== typeof a || "boolean" !== typeof b && "number" !== typeof b ? "string" !== typeof b || "boolean" !== typeof a && "number" !== typeof a || "" != b[ec]() || (b = p.NaN) : "" == a[ec]() && (a = p.NaN)
        }
        return a == b
    };
    Q[102] = function (a) {
        var b = this.pop(),
            c = this.pop();
        this[D](c === b);
        return a
    };
    Q[41] = function (a) {
        var b = this.Ga(),
            c = this.Ga();
        this[D](c < b);
        return a
    };
    Q[42] = function () {
        throw new wl(this.pop());
    };
    Q[104] = function (a) {
        var b = this.Ga(),
            c = this.Ga();
        this[D](c > b);
        return a
    };
    Q[105] = function (a) {
        var b = this.pop(),
            c = this.pop();
        M(b) && M(c) && jj(c, b);
        return a
    };
    Q[74] = function (a) {
        var b = this.H();
        this[D](b);
        return a
    };
    Q[75] = function (a) {
        var b = this.Ga();
        this[D](b);
        return a
    };
    Q[76] = function (a) {
        var b = this.pop();
        this[D](b);
        this[D](b);
        return a
    };
    Q[77] = function (a) {
        var b = this.pop(),
            c = this.pop();
        this[D](b);
        this[D](c);
        return a
    };
    Q[78] = function (a) {
        var b = this.pop(),
            c = this.pop();
        this[D](this.iv(c, b));
        return a
    };
    Kl[H].iv = function (a, b) {
        if (null != a)
            if (a instanceof io && (a = a.Qo()), "number" === typeof b) {
                if ("string" !== typeof a) return a[b]
            } else return a[this.B(a, this.ya(b))]
    };
    Q[79] = function (a) {
        var b = this.pop(),
            c = this.pop(),
            d = this.pop();
        this.Nv(d, c, b);
        return a
    };
    Kl[H].Nv = function (a, b, c) {
        null != a && ("number" === typeof b ? a[b] = c : (a[this.od(a, this.ya(b))] = c, M(a) && "prototype" == b && (a.i = c[id][H], c.constructor = a)))
    };
    Q[80] = function (a) {
        var b = this.H();
        this[D](++b);
        return a
    };
    Q[81] = function (a) {
        var b = this.H();
        this[D](--b);
        return a
    };
    Q[96] = function (a) {
        var b = this.H(),
            c = this.H();
        this[D](b & c);
        return a
    };
    Q[97] = function (a) {
        var b = this.H(),
            c = this.H();
        this[D](b | c);
        return a
    };
    Q[98] = function (a) {
        var b = this.H(),
            c = this.H();
        this[D](c ^ b);
        return a
    };
    Q[99] = function (a) {
        var b = this.H(),
            c = this.H();
        this[D](c << b);
        return a
    };
    Q[100] = function (a) {
        var b = this.H(),
            c = this.H();
        this[D](c >> b);
        return a
    };
    Q[101] = function (a) {
        var b = this.H(),
            c = this.H();
        this[D](c >>> b);
        return a
    };
    Q[58] = function (a) {
        var b = this.Ga(),
            c = this.pop(),
            b = this.Ec(c, this.B(c, b));
        this[D](b);
        return a
    };
    Q[129] = function (a, b) {
        return Vf(kp, b, a.frame)
    };
    Q[129].Tb = !0;
    var kp = function (a, b) {
        this.nv(a);
        return b
    };
    Kl[H].nv = function (a) {
        var b = this.ze();
        b && b.me(a, !1)
    };
    Q[140] = function (a, b) {
        return Vf(lp, b, a.label)
    };
    Q[140].Tb = !0;
    var lp = function (a, b) {
        this.ov(a);
        return b
    };
    Kl[H].ov = function (a) {
        var b = this.ze();
        b && (a = b.lf(a), void 0 != a && b.me(a, !1))
    };
    Q[136] = function (a, b) {
        for (var c = a.constants, d = m(c[G]), e = 0; e < c[G]; ++e) {
            var h = Vf(mp, b, c[e]);
            d[e] = h
        }
        b.ib = d;
        return np
    };
    Q[136].Tb = !0;
    Q[136].pv = !0;
    var np = function (a) {
        return a
    };
    Q[32] = function (a) {
        this.Qd(this.pop());
        return a
    };
    Kl[H].Qd = function (a) {
        a instanceof Ti || (a = q(a), a = this.bh(a, this.m.of()), a instanceof Ti || (a = void 0));
        this.m.Qd(a)
    };
    Q[69] = function (a) {
        var b = this.pop(),
            c = void 0;
        b instanceof Ti && (c = b.__swiffy_d.Co());
        this[D](c);
        return a
    };
    Q[305] = function (a, b) {
        return Vf(mp, b, a[ke])
    };
    Q[305].Tb = !0;
    var mp = function (a, b) {
        this[D](a);
        return b
    };
    Q[306] = function (a) {
        this[D](void 0);
        return a
    };
    Q[307] = function (a) {
        this[D](p[Rb]);
        return a
    };
    Q[308] = function (a) {
        this[D](p[of]);
        return a
    };
    Q[309] = function (a) {
        this[D](p.NaN);
        return a
    };
    Q[304] = function (a, b) {
        return b.ib[a[cd]]
    };
    Q[304].Tb = !0;
    Q[304].pv = !0;
    Q[303] = function (a, b) {
        return Vf(op, b, a[cd])
    };
    Q[303].Tb = !0;
    var op = function (a, b) {
        0 <= a && a < this.fc ? this[D](this.h[this.Xb + a]) : this[D](void 0);
        return b
    };
    Q[135] = function (a, b) {
        return Vf(pp, b, a[cd])
    };
    Q[135].Tb = !0;
    var pp = function (a, b) {
        0 <= a && a < this.fc && (this.h[this.Xb + a] = this.h[this.h[G] - 1]);
        return b
    };
    Q[154] = function (a, b) {
        return Vf(qp, b, a[Ec], a[jf], a[Ac])
    };
    Q[154].Tb = !0;
    var qp = function (a, b, c, d) {
        var e = this.Ga(),
            h = this.Ga();
        a = new Bl(this, this.Yb(), h, e, a, b, c);
        this.a.Bh(a);
        return d
    };
    Q[148] = function (a, b) {
        var c = b.Ad(a[gf]);
        return Vf(rp, b, c)
    };
    Q[148].Tb = !0;
    var rp = function (a, b) {
        var c = this.pop();
        if (!(c instanceof f)) return b;
        var d = this.m;
        this.m = new ko(this, d, c);
        try {
            this.jg(a)
        } finally {
            this.m = d
        }
        return b
    };
    Q[155] = function (a, b) {
        var c = b.Ad(a[gf]);
        return Vf(sp, b, a.args, c, [], 0, 4)
    };
    Q[155].Tb = !0;
    Q[142] = function (a, b) {
        var c = b.Ad(a[gf]);
        return Vf(sp, b, a.args, c, a.preloads, a.suppress, a.registerCount)
    };
    Q[142].Tb = !0;
    var sp = function (a, b, c, d, e, h) {
        var k = this;
        this[D](this.As(function () {
            var d = k.Xb,
                h = k.fc;
            k.Xb = k.h[G];
            k.fc = e;
            tb(k.h, k.h[G] + k.fc);
            for (var y = 0; y < c[G] && y + 1 < e; ++y) k.h[k.Xb + y + 1] = k.m.get(c[y]);
            for (y = 0; y < a[G]; ++y) Nf(a[y]) ? k.m.Tc(a[y], arguments[y]) : k.h[k.Xb + a[y]] = arguments[y];
            Va(k, void 0);
            try {
                k.jg(b)
            } finally {
                tb(k.h, k.Xb), k.Xb = d, k.fc = h
            }
            return k.returnValue
        }, d));
        return h
    };
    Kl[H].As = function (a, b) {
        var c = this,
            d = this.m,
            e = function () {
                var h = c.m,
                    k = c.m.Yb(),
                    n = c.sk;
                c.m = 5 < c.a.mb ? new jo(c, d) : new jo(c, new lo(c, c.xi, this));
                b & 4 || c.m.Tc("this", this);
                b & 1 || c.m.Tc("super", new io(this, e));
                if (!(b & 2)) {
                    var u = m[H][ee][I](arguments);
                    Qa(u, e);
                    u.caller = n;
                    c.m.Tc("arguments", u)
                }
                c.sk = e;
                var y;
                try {
                    y = a[B](zo(this), arguments)
                } finally {
                    c.m = h, c.m.Qd(k)
                }
                c.sk = n;
                return y
            };
        jj(e, nj);
        return e
    };
    Q[143] = function (a, b) {
        var c = b.Ad(a.tryBlock),
            d = a.catchBlock ? b.Ad(a.catchBlock) : null,
            e = a.finallyBlock ? b.Ad(a.finallyBlock) : null;
        return Vf(tp, b, c, d, e, a.register, a[Xe])
    };
    Q[143].Tb = !0;
    var tp = function (a, b, c, d, e, h) {
        try {
            this.jg(a)
        } catch (k) {
            if (k instanceof wl)
                if (a = k[ke], null != b) {
                    var n;
                    L(e) ? (n = this.m.get(e), this.m.Tc(e, a)) : 0 <= d && d < this.fc && (this.h[this.Xb + d] = a);
                    try {
                        this.jg(b)
                    } finally {
                        L(e) && (L(n) ? this.m.Tc(e, n) : this.m.pe(e))
                    }
                } else throw k;
                else throw k;
        } finally {
            null != c && this.jg(c)
        }
        return h
    };
    Q[61] = function (a) {
        var b = this.Ga(),
            c = this.Dc();
        this[D](this.Ft(b, c));
        return a
    };
    Kl[H].Ft = function (a, b) {
        a = ep(a);
        var c = a[hd](".");
        if (1 >= c[G]) return this.m[I](a, b);
        for (var d = this.m.get(c[0]), e = 1; e < c[G]; ++e) {
            if (null == d) return;
            var h = d,
                d = h[this.B(h, c[e])]
        }
        if (M(d)) return d[B](h, b)
    };
    Q[82] = function (a) {
        var b = this.pop(),
            c = this.pop(),
            d = this.Dc();
        this[D](this.nu(b, c, d));
        return a
    };
    Kl[H].nu = function (a, b, c) {
        if (null != b)
            if (null != a && "" !== a) {
                var d = b;
                d instanceof io && (b = d.Qo(), d = d[Ud]);
                b = b[this.B(b, q(a))];
                M(b) && "__swiffy_override" in b && (b = b.__swiffy_override);
                if (M(b)) return b[B](zo(d), c)
            } else if (b instanceof io) {
            if (d = f[Pc](b[Ec][H])[id], M(d)) return d[B](zo(b[Ud]), c)
        } else if ((d = this.m.Yb()) || (d = this.m.of()), M(b) && "__swiffy_override" in b && (b = b.__swiffy_override), M(b)) return b[B](zo(d), c)
    };
    Q[64] = function (a) {
        var b = this.Ga(),
            b = this.m.get(b),
            c = this.Dc();
        M(b) || (b = nj);
        var d;
        M(b) && "__swiffy_override" in b ? d = b.__swiffy_override[B](zo(null), c) : (d = f[Yc](b[H]), d.__swiffy_nvr && f[w](d, "__swiffy_vm", {
            value: this
        }), b[B](zo(d), c));
        this[D](d);
        return a
    };
    Q[83] = function (a) {
        var b = this.pop(),
            c = this.pop(),
            d = this.Dc(),
            e = void 0;
        null != c && (e = null != b && "" !== b ? c[this.B(c, q(b))] : c);
        M(e) || (e = nj);
        M(e) && "__swiffy_override" in e ? b = e.__swiffy_override[B](zo(null), d) : (b = f[Yc](e[H]), b.__swiffy_nvr && f[w](b, "__swiffy_vm", {
            value: this
        }), e[B](zo(b), d));
        this[D](b);
        return a
    };
    Q[67] = function (a) {
        for (var b = oj(), c = this.H(), d = 0; d < c; d++) {
            var e = this.pop(),
                h = this.Ga();
            b[h] = e
        }
        this[D](b);
        return a
    };
    Q[66] = function (a) {
        for (var b = [], c = this.H(), d = 0; d < c; d++) {
            var e = this.pop();
            b[d] = e
        }
        this[D](b);
        return a
    };
    Q[68] = function (a) {
        var b = this.pop();
        this[D](b instanceof O ? "movieclip" : null == b || void 0 == b ? q(b) : typeof b);
        return a
    };
    Q[85] = function (a) {
        var b = this.pop();
        this[D](void 0);
        if ("string" !== typeof b)
            for (var c in b) this[D](c);
        return a
    };
    Q[153] = function (a, b) {
        return Vf(up, b, a[jf])
    };
    Q[153].Tb = !0;
    var up = function (a) {
        return a
    };
    Q[157] = function (a, b) {
        return Vf(vp, b, a[jf])
    };
    Q[157].Tb = !0;
    var vp = function (a, b) {
        return this.re() ? a : b
    };
    Q[158] = function (a) {
        var b = this.Ga(),
            c = this.nh(b);
        if (c[He] && c[He].__swiffy_d && (b = c[He].__swiffy_d) && (c = b.lf(c.Vf), void 0 != c && (c = b.ws(c)))) {
            for (var d = this.m, e = this.Xb, h = this.fc, k = this.h, n = 0; n < c[G]; n++) c[n].Cl(b);
            this.h = k;
            this.m = d;
            this.Xb = e;
            this.fc = h
        }
        return a
    };
    Q[159] = function (a, b) {
        return Vf(wp, b, a.frameBias, a[Ge])
    };
    Q[159].Tb = !0;
    var wp = function (a, b, c) {
        var d = this.Ga(),
            e = this.nh(d);
        e[He] && e[He].__swiffy_d && (d = e[He].__swiffy_d) && (e = d.lf(e.Vf), void 0 != e && d.me(e + a, b));
        return c
    };
    Q[44] = function (a) {
        var b = this.pop(),
            c = this.H(),
            b = (b = b ? b[H] : null) ? b : {}, d;
        b[rd]("__swiffy_if") ? d = b.__swiffy_if : (d = new di, b.__swiffy_if && d.Uh(b.__swiffy_if), f[w](b, "__swiffy_if", {
            value: d
        }));
        for (var e = 0; e < c; ++e) {
            var h = this.pop();
            if (b = h ? h[H] : null) d.add(h), b.__swiffy_if && d.Uh(b.__swiffy_if)
        }
        return a
    };
    var xp = function (a, b) {
        if (M(b)) {
            "__swiffy_wrapped_type" in b && (b = b.__swiffy_wrapped_type);
            if (a instanceof b) return a;
            if (a instanceof f) {
                var c = a.__swiffy_if;
                if (c && c[Id](b)) return a
            }
        }
        return null
    };
    Q[43] = function (a) {
        var b = this.pop(),
            c = this.pop();
        this[D](xp(b, c));
        return a
    };
    Q[84] = function (a) {
        var b = this.pop(),
            c = this.pop();
        this[D]( !! xp(c, b));
        return a
    };
    Q[39] = function (a) {
        var b = this.pop(),
            c = this.re(),
            d = this.re(),
            e = d ? this.H() : void 0,
            h = d ? this.H() : void 0,
            k = d ? this.H() : void 0,
            d = d ? this.H() : void 0,
            b = b ? b.__swiffy_d : null;
        b instanceof el && this.a.ko(b, c, d, k, h, e);
        return a
    };
    Q[40] = function (a) {
        this.a.Zi();
        return a
    };
    K = Kl[H];
    K.hf = function (a) {
        return 7 <= this.a.mb ? !L(a) || null === a || Nf(a) && "" === a[ec]() ? p.NaN : p(a) : 5 <= this.a.mb && 7 > this.a.mb ? L(a) && null !== a ? Nf(a) && "" === a[ec]() ? p.NaN : p(a) : 0 : L(a) && null !== this.a.mb ? Nf(a) ? (a = p(a), da(a) ? 0 : a) : p(a) : 0
    };
    K.ya = function (a) {
        5 > this.a.mb && Of(a) && (a = a ? "1" : "0");
        return 7 > this.a.mb && !L(a) ? "" : a instanceof Ti ? a.__swiffy_d.Co() : a + ""
    };
    K.xo = function (a) {
        return 7 <= this.a.mb ? ga(a) : "string" == typeof a ? ga(p(a)) : ga(a)
    };
    K.wt = function (a, b) {
        return 5 > this.a.mb ? a == b ? 1 : 0 : a == b
    };
    K.add = function (a, b) {
        return Nf(a) || Nf(b) ? this.ya(a) + this.ya(b) : this.hf(a) + this.hf(b)
    };
    var yp = function (a, b) {
        return a ? a + "." + b : q(b)
    }, Ap = function (a, b, c) {
            zp && b instanceof zp && (b = b.__swiffy_v, c = c || b.qa, a ? b = b.jb() : (a = b.uri, b = b[yc]));
            this.uri = a;
            this.localName = b;
            this.qa = c;
            this.$e = void 0
        };
    K = Ap[H];
    vb(K, function () {
        return this
    });
    K.$b = function () {
        L(this.$e) || (this.$e = yp(this.uri, this[yc]));
        return this.$e
    };
    K.Gb = function (a) {
        if (!(this.qa || a instanceof Bp && Qf(this[yc]))) {
            var b = this.$b();
            if (b in f(a)) return b
        }
    };
    K.Sd = function () {
        return this
    };
    K.jb = function () {
        switch (this.uri) {
        case "":
            return "" + this[yc];
        case null:
            return "*::" + this[yc];
        default:
            return this.uri + "::" + this[yc]
        }
    };
    Ia(K, function () {
        return (this.qa ? "@" : "") + this.$b()
    });
    Fb(K, function () {
        var a = q(this[yc]);
        return a === this[yc] ? this : new Ap(this.uri, a, this.qa)
    });
    K.bd = function () {
        if (!this.qa && !this.uri) {
            var a = this[yc];
            return Pf(a) ? !ja(a) || 0 > a || 0 != a % 1 ? void 0 : a : (a = q(a), /^[0-9]+$/ [$d](a) ? ha(a, 10) : void 0)
        }
    };
    K.hi = function (a, b) {
        var c = this.bd();
        if (!L(c)) throw R(a, this.jb(), Cp(b).$b());
        return c
    };
    var Dp = function (a, b) {
        pb(this, a);
        this.qa = b
    };
    vb(Dp[H], function (a) {
        a = q(a.pop());
        return new Ap(a, this[F], this.qa)
    });
    Ia(Dp[H], function () {
        return (this.qa ? "@" : "") + yp("?", this[F])
    });
    var Ep = function (a) {
        this.qa = a
    };
    vb(Ep[H], function (a) {
        var b = a.pop();
        a = q(a.pop());
        return new Ap(a, b, this.qa)
    });
    Ia(Ep[H], function () {
        return (this.qa ? "@" : "") + yp("?", "?")
    });
    var Fp = function (a, b, c) {
        Aa(this, a);
        this.localName = b;
        this.qa = c
    };
    K = Fp[H];
    vb(K, function () {
        return this
    });
    K.$b = function () {
        return yp("", this[yc])
    };
    K.Gb = function (a) {
        if (!(this.qa || a instanceof Bp && Qf(this[yc]))) {
            var b = this[Dc],
                c = this[yc];
            a = f(a);
            for (var d = 0; d < b[G]; ++d) {
                var e = yp(b[d], c);
                if (e in a) return e
            }
        }
    };
    K.Sd = function () {
        return new Ap("", this[yc], this.qa)
    };
    K.jb = function () {
        return q(this[yc])
    };
    Ia(K, function () {
        return (this.qa ? "@" : "") + yp("[" + this[Dc][Cf](", ") + "]", this[yc])
    });
    var Gp = function (a, b) {
        Aa(this, a);
        this.qa = b
    };
    vb(Gp[H], function (a) {
        a = a.pop();
        return new Fp(this[Dc], a, this.qa)
    });
    Ia(Gp[H], function () {
        return (this.qa ? "@" : "") + yp("[" + this[Dc][Cf](", ") + "]", "?")
    });
    var Hp = function (a) {
        this.Hq = a;
        this.Vg = ""
    };
    Hp[H].uq = function (a) {
        this.Vg && (this.Vg += ",");
        this.Vg += a ? a.jb() : "*";
        return this
    };
    Hp[H].vq = function () {
        return new Ap(this.Hq.uri, this.Hq[yc] + ".<" + this.Vg + ">", !1)
    };
    var Ip = function (a, b, c, d, e) {
        switch (a[Lb]) {
        case 9:
            return new Fp(d[a.ns], b[a[F]], !1);
        case 14:
            return new Fp(d[a.ns], b[a[F]], !0);
        case 27:
            return new Gp(d[a.ns], !1);
        case 28:
            return new Gp(d[a.ns], !0);
        case 15:
            return new Dp(b[a[F]], !1);
        case 16:
            return new Dp(b[a[F]], !0);
        case 17:
            return new Ep(!1);
        case 18:
            return new Ep(!0);
        case 7:
            return new Ap(c[a.ns], b[a[F]], !1);
        case 13:
            return new Ap(c[a.ns], b[a[F]], !0);
        case 29:
            b = new Hp(e[a[F]]);
            for (c = 0; c < a.params[G]; c++) b.uq(e[a.params[c]]);
            return b.vq();
        default:
            return null
        }
    };
    var Jp = function (a) {
        f[w](this, "__swiffy_vm", {
            value: a
        });
        for (var b in Jp[H]) f[w](this, b, {
            value: Vf(Jp[H][b], this)
        })
    }, Kp = function (a, b) {
            f[w](Jp[H], a, {
                value: b
            })
        };
    var Lp = function (a) {
        this.traits = a ? f[Yc](a[af]) : {};
        this.Oj = a ? a.Oj[ee]() : []
    };
    Lp[H].Tg = function (a, b) {
        this[af][a] = b.gk(this[af][a])
    };
    Lp[H].gu = function (a) {
        for (var b in a[af]) this.Tg(b, a[af][b])
    };
    Lp[H].nj = function (a) {
        this.Oj[G] && f[w](a, "__swiffy_slots", {
            value: this.Oj[ee]()
        });
        for (var b in this[af]) a[rd](b) || this[af][b].dk(a, b);
        return a
    };
    var Mp = function (a, b) {
        this.Mu = a;
        this.dt = b
    };
    K = Mp[H];
    K.dk = function (a, b) {
        f[w](a, b, this.Mu)
    };
    K.get = function (a, b) {
        return a[b]
    };
    K.set = function (a, b, c) {
        a[b] = c
    };
    Qa(K, function (a, b) {
        return a[b]
    });
    K.gk = function () {
        return this
    };
    var Np = function (a) {
        Ba(this, a)
    };
    K = Np[H];
    K.dk = function (a, b) {
        f[w](a, b, {
            value: Vf(this[Ec], a)
        })
    };
    K.get = function (a) {
        return Vf(this[Ec], a)
    };
    K.set = function () {};
    Qa(K, function () {
        return this[Ec]
    });
    K.gk = function () {
        return this
    };
    var Op = function (a, b) {
        this.zd = a;
        this.De = b
    };
    K = Op[H];
    K.dk = function (a, b) {
        f[w](a, b, {
            get: this.zd,
            set: this.De
        })
    };
    K.get = function (a) {
        if (this.zd) return this.zd[I](a)
    };
    K.set = function (a, b, c) {
        this.De && this.De[I](a, c)
    };
    Qa(K, function (a) {
        if (this.zd) return this.zd[I](a)
    });
    K.gk = function (a) {
        if (a instanceof Op) {
            var b = this.zd || a.zd;
            a = this.De || a.De;
            if (b != this.zd || a != this.De) return new Op(b, a)
        }
        return this
    };
    var Pp = function (a, b) {
        this.Gu = a;
        nb(this, b);
        this.Uq = []
    };
    K = Pp[H];
    K.dk = function (a, b) {
        var c = a.__swiffy_slots;
        c || (a.__swiffy_slots = c = []);
        var d = c[G];
        c[D](this.Gu);
        (c = this.Uq[d]) || (this.Uq[d] = c = {
            get: Qp(d),
            set: Rp(d, this[E])
        });
        f[w](a, b, c)
    };
    K.get = function (a, b) {
        return a[b]
    };
    K.set = function (a, b, c) {
        a[b] = c
    };
    Qa(K, function (a, b) {
        return a[b]
    });
    K.gk = function () {
        return this
    };
    var Qp = function (a) {
        return function () {
            return this.__swiffy_slots[a]
        }
    }, Rp = function (a, b) {
            return b ? function (c) {
                this.__swiffy_slots[a] = b.__swiffy_coerce(c)
            } : function (b) {
                this.__swiffy_slots[a] = b
            }
        }, Sp = function (a) {
            return function () {
                return this[a][B](this, arguments)
            }
        }, Tp = function (a) {
            return function () {
                return this[a]
            }
        }, Up = function (a) {
            return function (b) {
                this[a] = b
            }
        }, Xp = function (a, b, c) {
            Vp(a).Tg(b, new Np(c));
            Wp(a, b, "value", c)
        }, S = function (a, b, c) {
            Vp(a).Tg(b, new Op(c, void 0));
            Wp(a, b, "get", c)
        }, Yp = function (a, b, c) {
            Vp(a).Tg(b,
                new Op(void 0, c));
            Wp(a, b, "set", c)
        }, Zp = function (a) {
            var b = Vp(a),
                c = Cp(a),
                c = (c.uri ? c.uri + ":" : "") + c[yc] + ".",
                d;
            for (d in a[H]) b.Tg(c + d, new Np(Sp(d)))
        }, Wp = function (a, b, c, d) {
            a = a[H];
            var e;
            if (b in a)
                for (var h = a; !e && h; h = f[Pc](h)) e = f[vd](h, b);
            e = e || {};
            e.configurable = !0;
            e[c] = d;
            f[w](a, b, e)
        };
    var $p = function () {
        return "[class " + this.__swiffy_name[yc] + "]"
    }, bq = function () {
            return aq
        }, cq = 1,
        dq = function (a, b, c, d, e, h, k, n, u) {
            var y = cq++;
            if (!n) n = new Ap("", "unnamed#" + y, !1);
            else if (!(n instanceof Ap)) {
                var C = n[lf](".");
                n = new Ap(0 < C ? n[rf](0, C) : "", 0 < C ? n[rf](C + 1) : n, !1)
            }
            u || Kp(n.$b(), a);
            f[w](a[H], "__swiffy_classdef", {
                value: a
            });
            f[w](a[H], "constructor", {
                value: a,
                writable: !0
            });
            f[w](a, "__swiffy_classdef", {
                get: bq
            });
            f[w](a, "__swiffy_coerce", {
                value: b
            });
            f[w](a, "__swiffy_istype", {
                value: c
            });
            f[w](a, "__swiffy_constructor", {
                value: d
            });
            f[w](a, "__swiffy_new", {
                value: e
            });
            f[w](a, "__swiffy_baseclass", {
                value: h
            });
            b = new Lp(h && h.__swiffy_traits);
            f[w](a, "__swiffy_traits", {
                value: b
            });
            h = h ? h.__swiffy_if[ee]() : [];
            if (k)
                for (c = 0; c < k[G]; ++c)
                    for (d = k[c], b.gu(d.__swiffy_traits), d = d.__swiffy_if, e = 0; e < d[G]; ++e) d[e] && (h[e] = d[e]);
            h[y] = a;
            f[w](a, "__swiffy_if", {
                value: h
            });
            f[w](a, "__swiffy_name", {
                value: n
            });
            f[w](a, "__swiffy_typeid", {
                value: y
            });
            f[w](a, "toString", {
                value: $p
            });
            return a
        }, gq = function (a, b, c, d) {
            return dq(b, c || b, eq, b, d || b, fq, null, a)
        }, hq = function (a,
            b, c) {
            return null != a ? An(b, a.__swiffy_classdef) : c
        }, jq = function () {
            return function b(c) {
                return iq[I](b, c)
            }
        }, iq = function (a) {
            if (hq(a, this, !0)) return a;
            throw R(1034, Cp(a), this.__swiffy_name);
        }, kq = function (a) {
            return hq(a, this, !1)
        }, eq = function (a) {
            return this(a) === a
        }, lq = function (a) {
            return a.__swiffy_typeid ? a : a.__swiffy_classdef
        }, Cp = function (a) {
            return null != a ? lq(a).__swiffy_name : new Ap("", q(a), !1)
        }, mq = function (a) {
            a = f[Yc](a[H]);
            Vp(a.__swiffy_classdef).nj(a);
            return a
        }, oq = function (a) {
            var b = mq(this);
            nq(b)[B](b,
                arguments);
            return b
        }, pq = function () {
            var a = this.__swiffy_singleton;
            L(a) || (a = oq[I](this), f[w](this, "__swiffy_singleton", {
                value: a
            }));
            return a
        }, T = function (a, b, c, d, e) {
            return qq(a, b, {
                Ml: c,
                interfaces: d
            }, e)
        }, qq = function (a, b, c, d) {
            var e = c.pf || jq(),
                h = c.Ml || fq;
            ub(e, f[Yc](h[H]));
            ub(a, e[H]);
            return dq(e, c.Kt || c.pf || iq, kq, a, c.Hm || oq, h[H].__swiffy_classdef, c[jc], b, d)
        }, rq = function (a) {
            return function () {
                throw R(a, Cp(this)[yc]);
            }
        }, sq = function (a) {
            if (!a || !a.__swiffy_typeid) throw R(1041);
            return a.__swiffy_baseclass
        }, An = function (a,
            b) {
            if (!b) return !1;
            if (!a) return !0;
            var c = a[H].__swiffy_classdef,
                d = b[H].__swiffy_classdef.__swiffy_if;
            return !(!d || !d[c.__swiffy_typeid])
        }, zn = function (a, b) {
            f[w](a[H], "__swiffy_buildsym", {
                value: b
            })
        }, on = function (a, b) {
            zn(a, function (a, d) {
                return b.Rc(a, null, d)
            })
        }, Vp = function (a) {
            return a.__swiffy_traits
        }, nq = function (a) {
            return a.__swiffy_classdef.__swiffy_constructor
        }, tq = function (a, b) {
            if (!b || !b.__swiffy_typeid) throw R(1041);
            return b.__swiffy_istype(a) ? a : null
        }, uq = function (a, b) {
            if (!b || !b.__swiffy_typeid) throw R(1041);
            return b.__swiffy_istype(a)
        }, vq = function (a, b) {
            if (!b || !b.__swiffy_typeid) throw R(1041);
            return b.__swiffy_coerce(a)
        }, wq = function (a) {
            if (this.__swiffy_new) return this.__swiffy_new[B](this, arguments);
            var b = f[Yc](this[H]),
                c = this[B](b, arguments);
            return c instanceof f ? c : b
        }, fq = function (a) {
            return null != a ? a : {}
        }, xq = jq();
    ub(Jp, f[Yc](fq[H]));
    ub(xq, Jp[H]);
    dq(fq, function (a) {
        return null != a ? a : null
    }, function (a) {
        return null != a
    }, function () {}, function () {
        return {}
    }, null, null, "Object");
    f[w](fq[H], "toString", {
        value: function () {
            return "[object " + this.__swiffy_classdef.__swiffy_name[yc] + "]"
        },
        writable: !0
    });
    f[w](f[H], "__swiffy_classdef", {
        value: fq
    });
    dq(xq, iq, kq, rq(1115), oq, fq, null, "global", !0);
    var aq = T(rq(1115), "Class");
    var zq = function (a, b) {
        this.Lo = a;
        this.strings = a[be];
        this.ints = a.ints;
        this.uints = a.uints;
        this.doubles = [p.NaN];
        if (a[Vc])
            for (var c = 0; c < a[Vc][G]; ++c) this[Vc][D](p(a[Vc][c]));
        this.Z = b;
        var d = [""];
        Aa(this, [new yq]);
        for (c = 0; c < a[Dc][G]; ++c) {
            var e = a[Dc][c],
                e = e[F] ? a[be][e[F]] : e[Lb] + "_" + c;
            d[D](e);
            this[Dc][D](new yq(void 0, e))
        }
        Aa(this, d);
        e = [
            [""]
        ];
        for (c = 0; c < a.namespacesets[G]; ++c) {
            for (var h = a.namespacesets[c], k = [], n = 0; n < h[G]; ++n) k[D](d[h[n]]);
            e[D](k)
        }
        this.multinames = [null];
        for (c = 0; c < a[Ze][G]; ++c) this[Ze][D](Ip(a[Ze][c],
            this[be], d, e, this[Ze]));
        this.methods = [];
        for (c = 0; c < a[sd][G]; ++c) this[sd][D](this.Ct(a[sd][c]));
        this.classes = []
    };
    zq[H].Ct = function (a) {
        if (!a[Mc]) return null;
        var b;
        if (hi) b = Hf.atob(a[Mc]);
        else {
            b = a[Mc];
            ii();
            for (var c = gi, d = [], e = 0; e < b[G];) {
                var h = c[b[cc](e++)],
                    k = e < b[G] ? c[b[cc](e)] : 0;
                ++e;
                var n = e < b[G] ? c[b[cc](e)] : 0;
                ++e;
                var u = e < b[G] ? c[b[cc](e)] : 0;
                ++e;
                if (null == h || null == k || null == n || null == u) throw fa();
                d[D](h << 2 | k >> 4);
                64 != n && (d[D](k << 4 & 240 | n >> 2), 64 != u && d[D](n << 6 & 192 | u))
            }
            b = q[ye][B](null, d)
        }
        c = this.Oh(a[af]);
        d = this.tt(a.optionals);
        e = this.st(a.exceptions);
        return Wf(Aq, this.Z, this, b, a.locals, a.params, d, a[E], a.arguments, e, c)
    };
    zq[H].st = function (a) {
        var b = [];
        if (null != a)
            for (var c = 0; c < a[G]; c++) b[D](new Bq(a[c], this));
        return b
    };
    var Cq = [void 0, !1, !0, null];
    zq[H].bq = function (a, b) {
        switch (a) {
        case "methods":
        case "getters":
        case "setters":
            return this[sd][b];
        case "classes":
            return this.classes[b];
        case "specials":
            return Cq[b];
        case "doubles":
            return b ? this[Vc][b] : void 0;
        case "namespaces":
            return this[Dc][b];
        default:
            return b ? this.Lo[a][b] : void 0
        }
    };
    zq[H].Oh = function (a, b, c, d) {
        b = b || null;
        d = d || new Lp;
        for (var e = d.Oj, h = 0; h < a[G]; ++h) {
            var k = a[h],
                n = this.bq(k[Lb], k[ke]),
                u = null;
            if (k[E] && k[ue]) var y = this[Ze][k[E]][Ve](null).$b(),
            u = Jp[H][y];
            y = k[F] ? this[Ze][k[F]][Ve](null).Sd() : null;
            t: {
                var C = y,
                    J = b,
                    V = c;
                if (k[Jb]) e[k[Jb]] = n, k = new Mp({
                    get: Qp(k[Jb]),
                    set: Rp(k[Jb], u)
                }, !k[ue]);
                else {
                    C = q(C[yc]);
                    switch (k[Lb]) {
                    case "methods":
                        k = new Np((n ? Wf(n, J, V) : void 0) || Sp(C));
                        break t;
                    case "setters":
                        k = new Op(void 0, (n ? Wf(n, J, V) : void 0) || Up(C));
                        break t;
                    case "getters":
                        k = new Op((n ? Wf(n,
                            J, V) : void 0) || Tp(C), void 0);
                        break t
                    }
                    k = u ? new Pp(n, u) : new Mp({
                        value: n,
                        writable: !0
                    }, !k[ue])
                }
            }
            y && d.Tg(y.$b(), k)
        }
        return d
    };
    zq[H].tt = function (a) {
        var b = [];
        if (L(a))
            for (var c = 0; c < a[G]; c++) b[D](this.bq(a[c][Lb], a[c][ke]));
        return b
    };
    var Bq = function (a, b) {
        Pa(this, a[jd]);
        this.to = a.to;
        Ab(this, a[jf]);
        this.Fo = 0 == a.excType ? null : b[Ze][a.excType][Ve](null).$b();
        this.traits = b.Oh([{
            slot: 1,
            kind: "specials",
            value: 0,
            type: a.excType,
            name: a.varName
        }])
    };
    var Ll = function (a) {
        this.a = a;
        this.nb = new Jp(this);
        this.startTime = Date.now();
        this.h = [];
        this.Bi = this.fa = 0;
        this.ec = [];
        this.rh = 0;
        this.I = -1;
        this.nd = "";
        this.ld = [];
        this.md = zl;
        this.jh = "";
        this.Oe = new Dq;
        this.fe = [];
        this.Ne = null;
        this.Fi = {};
        this.pk()
    };
    K = Ll[H];
    K.push = function (a) {
        this.h[D](a)
    };
    K.pop = function () {
        return this.h.pop()
    };
    K.hc = function () {
        var a = this.h.pop();
        if (null == a) throw R(1009);
        return a
    };
    K.trace = function (a) {
        yl(a)
    };
    K.qb = function (a) {
        return this.ib[Ze][a][Ve](this)
    };
    var Eq = function (a) {
        this.Ep = a
    };
    Ll[H].find = function (a, b) {
        for (var c = this.ec, d = c[G] - 1; 0 <= d; --d) {
            var e = c[d],
                h = e instanceof Eq;
            h && (e = e.Ep);
            if (L(a.Gb(e)) || h && Fq(e, a)) return e
        }
        if (L(b)) return b;
        throw R(1065, a.$b());
    };
    var Aq = function (a, b, c, d, e, h, k, n, u, y, C, J, V) {
        var va = a.ib,
            Vb = a.ec,
            Jd = a.rh,
            $g = a.nd,
            Xn = a.I,
            lu = a.fa,
            mu = a.Bi,
            nu = a.ld,
            ou = a.ol,
            pu = a.Ne,
            qu = a.jh,
            ru = ao;
        a.ib = b;
        a.ec = J[ee]();
        a.rh = J[G];
        a.ld = u;
        a.ol = y;
        a.Ne = C;
        ao = a;
        a.ff = void 0;
        a.fa = a.h[G];
        tb(a.h, a.h[G] + d);
        a.h[a.fa] = null != this && this != ca ? this : a.Ah();
        a.Bi = a.h[G];
        a.nd = c;
        for (var ed = 0; ed < e[G]; ++ed) a.h[a.fa + ed + 1] = arguments[G] > Gq + ed ? a.cl(arguments[Gq + ed], e[ed]) : h[h[G] + ed - e[G]];
        if (null != n) {
            for (var Pr = m[H][ee][I](arguments, Gq + n), ed = n; ed < e[G]; ++ed) Pr[ed] = a.h[a.fa + ed + 1];
            a.h[a.fa +
                e[G] + 1] = Pr
        }
        ed = a.md;
        a.md = Al;
        try {
            a.fs(), a.ff = a.cl(a.ff, k)
        } catch (su) {
            ed[I](a, su)
        } finally {
            a.ib = va, a.ec = Vb, a.rh = Jd, a.nd = $g, a.I = Xn, tb(a.h, a.fa), a.fa = lu, a.Bi = mu, a.ld = nu, a.ol = ou, a.Ne = pu, a.md = ed, a.jh = qu, ao = ru
        }
        return a.ff
    }, Gq = Aq[G] - 1;
    K = Ll[H];
    K.fs = function () {
        var a = this.nd[G];
        for (this.I = 0;;) try {
            for (; this.I < a;) U[this.Vd()][I](this);
            break
        } catch (b) {
            this.et(b)
        }
    };
    K.et = function (a) {
        for (var b = 0; b < this.ld[G]; b++) {
            var c = this.ld[b],
                d = a[ke];
            if (this.I >= c[jd] && this.I <= c.to && (!c.Fo || this.Oo(d, this.nb[c.Fo]))) {
                tb(this.ec, this.rh);
                tb(this.h, this.Bi);
                this[D](d);
                this.I = c[jf];
                return
            }
        }
        throw a;
    };
    K.Dv = function (a, b) {
        var c = jq();
        ub(c, f[Yc](this.nb));
        dq(c, iq, kq, function () {
            b[sd][a[Bd]][I](this, null, [])
        }, pq, fq, null, "global", !0);
        var d = Vp(c);
        b.Oh(a[af], null, [], d);
        var e = this,
            h = function (a) {
                f[w](e.nb, a, {
                    get: function () {
                        return wq[I](c)[a]
                    },
                    set: function (b) {
                        wq[I](c)[a] = b
                    },
                    configurable: !0
                })
            }, k;
        for (k in d[af]) k in this.nb || h(k)
    };
    K.yu = function (a) {
        var b = new zq(a[t], this);
        a = a[t].scripts;
        for (var c = 0; c < a[G]; ++c) this.Dv(a[c], b)
    };
    K.vt = function (a, b) {
        var c = this.ib.Lo.classes[a],
            d = jq(),
            e = this.ec[ee]();
        e[D](d);
        var h = this.qb(c[F]).Sd(),
            k = [];
        if (c[jc])
            for (var n = 0; n < c[jc][G]; ++n) {
                var u = this.qb(c[jc][n]).Gb(this.nb);
                u && k[D](this.nb[u])
            }
        n = Wf(this.ib[sd][c[Bd]], d, e);
        qq(n, h, {
            pf: d,
            Ml: b,
            interfaces: k
        });
        delete this.nb[h.$b()];
        this.ib.Oh(c[af], d, e, Vp(d));
        this.ib.Oh(c.ctraits, null, e).nj(d);
        this.ib.classes[a] = d;
        this.ib[sd][c.cinit][I](d, null, this.ec);
        return d
    };
    K.Oo = function (a, b) {
        return b == fq ? null != a : f(a) instanceof b
    };
    K.cl = function (a, b) {
        if (!b) return a;
        var c = this.qb(b).Gb(this.nb);
        return (c = this.nb[c]) || null !== a ? vq(a, c) : null
    };
    var W = function (a, b, c, d, e) {
        var h = d;
        f[w](a, b, {
            get: function () {
                return h
            },
            set: function (a) {
                h = e && null == a ? null : vq(a, Jp[H][c])
            }
        })
    }, X = function (a, b, c) {
            f[w](a, b, {
                value: c
            })
        }, Y = function (a, b) {
            Cp(a).$b();
            if (!L(b))
                for (var c in a)
                    if (a[c] == Y.caller) break
        }, Z = function (a, b, c, d) {
            return !L(a) && L(c) ? c : d && null == a ? null : vq(a, Jp[H][b])
        };
    Ll[H].Ah = function () {
        return this.ec[0]
    };
    var Hq = function (a, b, c, d) {
        if (M(b)) return b[B](a, c);
        throw R(1006, d || "value");
    };
    K = Ll[H];
    K.Vd = function () {
        return this.nd[pf](this.I++)
    };
    K.G = function () {
        var a = 0,
            b = 0;
        do var c = this.Vd(),
        b = b + ((c & 127) << a), a = a + 7;
        while (c & 128);
        return b
    };
    K.ub = function () {
        var a = this.Vd(),
            a = a | this.Vd() << 8;
        return a |= this.Vd() << 24 >> 8
    };
    K.Dc = function () {
        for (var a = this.G(), a = l.min(a, this.h[G] - this.fa), b = []; 0 <= --a;) b[a] = this.pop();
        return b
    };
    K.ih = function () {
        return this.Oe.__swiffy_d
    };
    K.Lg = function () {};
    K.Ig = function (a) {
        if (a) {
            a = a.pm();
            for (var b = 0; b < a[G]; b++) a[b].Ig()
        }
        this.Ja()
    };
    K.Mg = function () {};
    K.rp = function () {
        return !0
    };
    K.Dj = function () {};
    K.zp = function () {};
    K.Aj = function () {};
    K.xp = function () {};
    K.rg = function (a) {
        this.fe[D](a)
    };
    K.Ja = function () {
        for (; 0 < this.fe[G];) this.fe[Pb]()[I](this)
    };
    K.Gp = function (a, b) {
        var c = this.md;
        this.md = Al;
        try {
            a()
        } catch (d) {
            b(d), c[I](this, d)
        } finally {
            this.md = c
        }
    };
    K.Kl = function () {};
    K.Kn = function (a, b, c) {
        a[b] = c
    };
    K.Ln = function (a, b) {
        a[b] = null
    };
    K.Ok = function () {};
    K.Lk = function () {};
    K.hp = function () {};
    K.fireEvent = function (a, b, c, d) {
        if (a instanceof Iq && (b = Jq[c[E]])) {
            c = b(a, c);
            if (d) return a[fc](c);
            this.rg(Vf(a[fc], a, c))
        }
        return !1
    };
    K.Tt = function (a, b) {
        var c = this.Fi[a];
        c || (this.Fi[a] = c = []);
        c[D](b)
    };
    K.Ap = function (a, b) {
        var c = this.Fi[a];
        c && kg(c, b)
    };
    K.Xn = function (a) {
        a = a.t;
        if (a instanceof Iq) {
            var b = a.__swiffy_listeners;
            if (b)
                for (var c in b) b[c][G] && Kq(c, a) && this.Ap(c, a)
        }
    };
    K.er = function (a) {
        var b = this.Fi[a];
        if (b)
            for (var c = 0; c < b[G]; ++c) this.rg(Wf(Lq, a, b[c]))
    };
    K.zo = function () {
        this.er("enterFrame")
    };
    K.Ao = function () {
        this.er("exitFrame")
    };
    K.yo = function (a, b, c) {
        a.wh();
        b = a.t;
        nq(b)[B](b, c);
        a.xg(pk, !0)
    };
    K.Aa = function (a, b) {
        var c = a[t].Sj,
            c = mq(An(b, c) ? c : b),
            d;
        for (d in c) M(c[d]) && (c[d] = Vf(c[d], c));
        return c
    };
    K.pk = function () {
        var a = this;
        ok[H].Aa = function () {
            return a.Aa(this, Mq)
        };
        el[H].Aa = function () {
            return a.Aa(this, this[t].Sj && An(Nq, this[t].Sj) ? Oq : Pq)
        };
        Ml[H].Aa = function () {
            return a.Aa(this, Qq)
        };
        Lk[H].Aa = function () {
            return a.Aa(this, Rq)
        };
        zk[H].Aa = function () {
            return a.Aa(this, Sq)
        };
        yk[H].Aa = function () {
            return a.Aa(this, Tq)
        };
        xk[H].Aa = function () {
            return a.Aa(this, Uq)
        };
        Wk[H].Aa = function () {
            return a.Aa(this, Vq)
        }
    };
    K.dp = function (a, b) {
        var c = a[H].__swiffy_buildsym;
        if (c) {
            var d = mq(a),
                c = c(this.a, d);
            c instanceof ok && c.Ub(this.a.kh());
            c.ea(!1, b);
            return d
        }
        return wq[B](a, b)
    };
    K.jq = function (a, b) {
        f[w](this.Oe.parameters, a, {
            value: b,
            configurable: !0,
            enumerable: !0
        })
    };
    K.Vi = function (a) {
        return a instanceof el && a.Nl || a instanceof Ml
    };
    K.sp = function (a) {
        return a[xd]() && (a instanceof zk || a instanceof el && a.Ki) && a.t.useHandCursor
    };
    K.cp = function (a, b) {
        var c;
        c = a ? a.pm() : [];
        var d;
        d = b ? b.pm() : [];
        var e = c[G] - 1,
            h = d[G] - 1;
        if (0 < e && 0 < h)
            for (; c[e] == d[h];) e--, h--;
        for (var k = 0; k < c[G]; k++) c[k].iu(b);
        for (k = 0; k <= e; k++) c[k].Aq(b);
        for (k = 0; k <= h; k++) d[k].Bq(a);
        for (k = 0; k < d[G]; k++) d[k].ju(b)
    };
    K.Fg = function (a) {
        var b = this.a.uc;
        b && !b.Hd() && b[Dd](a)
    };
    K.En = function (a, b) {
        b.Ub(a.kh())
    };
    K.Kq = function (a, b) {
        a = q(a);
        b = q(b);
        return a < b ? -1 : a > b ? 1 : 0
    };
    K.Jq = function (a, b) {
        a = q(a)[Gf]();
        b = q(b)[Gf]();
        return a < b ? -1 : a > b ? 1 : 0
    };
    K.Lq = function (a, b) {
        a = null !== a ? p(a) : null;
        b = null !== b ? p(b) : null;
        if (a !== a) throw R(1034, a, "Number");
        if (b !== b) throw R(1034, b, "Number");
        return a < b ? -1 : a > b ? 1 : 0
    };
    K.Pm = function (a) {
        var b = this.G(),
            c = this.Dc(),
            b = this.qb(b);
        var d = this.hc();
        if (null == d) throw R(1009);
        var e = b.Gb(d);
        if (L(e)) c = Hq(L(a) ? a : d, d[e], c, e);
        else if ((a = d.__swiffy_proxy) && a.Eg) c = a.Eg[I](d, b.Sd(), c);
        else throw R(1069, b.jb(), Cp(d).$b());
        return c
    };
    K.Zq = function () {
        var a = this.G(),
            b = this.Dc(),
            a = this.qb(a),
            c = this.hc(),
            d = a.Gb(c),
            e;
        if (d) {
            e = sq(this.Ne);
            var h = Vp(e)[af][d];
            e = h ? h.callee(c, d) : e[H][d]
        }
        return Hq(c, e, b, a)
    };
    var U = {
        36: function () {
            this[D](this.Vd() << 24 >> 24)
        },
        47: function () {
            var a = this.G();
            this[D](this.ib[Vc][a])
        },
        39: function () {
            this[D](!1)
        },
        45: function () {
            var a = this.G();
            this[D](this.ib.ints[a])
        },
        40: function () {
            this[D](p.NaN)
        },
        32: function () {
            this[D](null)
        },
        37: function () {
            var a = this.G();
            this[D](a)
        },
        44: function () {
            var a = this.G();
            this[D](this.ib[be][a])
        },
        38: function () {
            this[D](!0)
        },
        46: function () {
            var a = this.G();
            this[D](this.ib.uints[a])
        },
        33: function () {
            this[D](void 0)
        },
        28: function () {
            this.ec[D](new Eq(this.pop()))
        },
        42: function () {
            var a =
                this.pop();
            this[D](a);
            this[D](a)
        },
        43: function () {
            var a = this.pop(),
                b = this.pop();
            this[D](a);
            this[D](b)
        },
        41: function () {
            this.pop()
        },
        29: function () {
            this.ec.pop()
        },
        48: function () {
            this.ec[D](this.pop())
        },
        101: function () {
            var a = this.Vd(),
                a = this.ec[this.rh + a];
            a instanceof Eq && (a = a.Ep);
            this[D](a)
        },
        100: function () {
            this[D](this.Ah())
        },
        71: function () {
            this.I = p[Rb]
        },
        72: function () {
            this.ff = this.pop();
            this.I = p[Rb]
        },
        65: function () {
            var a = this.Dc(),
                b = this.pop(),
                c = this.pop();
            this[D](Hq(b, c, a))
        },
        76: function () {
            this[D](this.Pm(this.Ah()))
        },
        78: function () {
            this.Zq()
        },
        79: function () {
            this.Pm()
        },
        69: function () {
            this[D](this.Zq())
        },
        70: function () {
            this[D](this.Pm())
        },
        94: function () {
            var a = this.G(),
                a = this.qb(a);
            this[D](this.find(a, this.Ah()))
        },
        93: function () {
            var a = this.G(),
                a = this.qb(a);
            this[D](this.find(a))
        },
        96: function () {
            var a = this.G(),
                a = this.qb(a),
                b = this.find(a);
            this[D](Wq(b, a))
        },
        97: function () {
            var a = this.pop(),
                b = this.G(),
                b = this.qb(b),
                c = this.hc();
            if (null == c) throw R(1009);
            var d = b.Gb(c);
            L(d) ? c[d] = a : (d = c.__swiffy_proxy) && d.setProperty ? d.setProperty[I](c,
                b.Sd(), a) : c[b.$b()] = a
        }
    };
    U[104] = U[97];
    U[102] = function () {
        var a = this.G(),
            a = this.qb(a),
            b = this.hc();
        this[D](Wq(b, a))
    };
    U[106] = function () {
        var a = this.G(),
            a = this.qb(a),
            b = this.hc();
        this[D](Xq(b, a))
    };
    U[3] = function () {
        throw new wl(this.pop());
    };
    U[90] = function () {
        var a = this.ld[this.G()][af];
        this[D](a.nj({}))
    };
    U[120] = function () {
        var a = this.h[this.h[G] - 1];
        if (null === a) throw R(1009);
        if (void 0 === a) throw R(1010);
        if (!hq(a, Yq, !1) && !hq(a, Zq, !1)) throw R(1123, Cp(a).$b());
    };
    U[89] = function () {
        var a = this.G(),
            a = this.qb(a),
            b = this.hc();
        this[D]($q(b, a))
    };
    U[6] = function () {
        var a = this.G();
        this.jh = this.ib[be][a]
    };
    U[7] = function () {
        this.jh = q(this.pop())
    };
    U[114] = function () {
        this[D](Un(q(this.pop())))
    };
    U[113] = function () {
        this[D](Tn(q(this.pop())))
    };
    var ar = function (a, b) {
        for (var c; !c && a; a = f[Pc](a)) c = f[vd](a, b);
        return c
    };
    U[4] = function () {
        var a = this.G(),
            a = this.qb(a),
            b = this.hc(),
            c = a.Gb(b),
            d = sq(this.Ne);
        if (L(c)) {
            var e = Vp(d)[af][c];
            if (e) {
                this[D](e.get(b, c));
                return
            }
            if ((c = ar(d[H], c)) && c.get) {
                this[D](c.get[I](b));
                return
            }
        }
        throw R(1069, a.jb(), Cp(d)[yc]);
    };
    U[5] = function () {
        var a = this.pop(),
            b = this.G(),
            b = this.qb(b),
            c = this.hc(),
            d = b.Gb(c),
            e = sq(this.Ne);
        if (L(d)) {
            var h = Vp(e)[af][d];
            if (h) {
                h.set(c, d, a);
                return
            }
            if ((d = ar(e[H], d)) && d.set) {
                d.set[I](c, a);
                return
            }
        }
        throw R(1056, b.jb(), Cp(e)[yc]);
    };
    U[108] = function () {
        var a = this.G(),
            b = this.hc().__swiffy_slots;
        this[D](b[a])
    };
    U[109] = function () {
        var a = this.G(),
            b = this.pop();
        this.hc().__swiffy_slots[a] = b
    };
    U[177] = function () {
        var a = this.pop(),
            b = this.pop();
        this[D](this.Oo(b, a))
    };
    U[180] = function () {
        var a = f(this.hc()),
            b = this.pop();
        this[D](Fq(a, new Ap("", b, !1)))
    };
    U[208] = function () {
        this[D](this.h[this.fa + 0])
    };
    U[209] = function () {
        this[D](this.h[this.fa + 1])
    };
    U[210] = function () {
        this[D](this.h[this.fa + 2])
    };
    U[211] = function () {
        this[D](this.h[this.fa + 3])
    };
    U[98] = function () {
        var a = this.G();
        this[D](this.h[this.fa + a])
    };
    U[212] = function () {
        this.h[this.fa + 0] = this.pop()
    };
    U[213] = function () {
        this.h[this.fa + 1] = this.pop()
    };
    U[214] = function () {
        this.h[this.fa + 2] = this.pop()
    };
    U[215] = function () {
        this.h[this.fa + 3] = this.pop()
    };
    U[99] = function () {
        var a = this.G();
        this.h[this.fa + a] = this.pop()
    };
    U[146] = function () {
        var a = this.G();
        ++this.h[this.fa + a]
    };
    U[148] = function () {
        var a = this.G();
        --this.h[this.fa + a]
    };
    U[194] = function () {
        var a = this.G();
        this.h[this.fa + a] = (this.h[this.fa + a] | 0) + 1 | 0
    };
    U[195] = function () {
        var a = this.G();
        this.h[this.fa + a] = (this.h[this.fa + a] | 0) - 1 | 0
    };
    U[8] = function () {
        var a = this.G();
        this.h[this.fa + a] = void 0
    };
    U[88] = function () {
        var a = this.G(),
            b = this.pop();
        this[D](this.vt(a, b))
    };
    U[64] = function () {
        var a = this.G(),
            a = this.ib[sd][a],
            b = this.ec[ee](0);
        this[D](Wf(a, null, b))
    };
    U[66] = function () {
        var a = this.Dc(),
            b = this.pop();
        this[D](this.dp(b, a))
    };
    U[74] = function () {
        var a = this.G(),
            b = this.Dc(),
            c = this.qb(a),
            a = this.hc(),
            c = c.Gb(a);
        this[D](this.dp(a[c], b))
    };
    U[73] = function () {
        var a = this.Dc(),
            b = this.hc();
        sq(this.Ne).__swiffy_constructor[B](b, a)
    };
    U[83] = function () {
        var a = this.Dc(),
            b = this.pop(),
            c = b && b.__swiffy_type_apply;
        if (!c) throw R(1127);
        this[D](c[I](b, this.nb, a))
    };
    U[85] = function () {
        for (var a = this.G(), b = {}, c = this.h[G] - 2 * a, d = 0; d < a; ++d) b[this.h[c + 2 * d]] = this.h[c + 2 * d + 1];
        tb(this.h, c);
        this[D](b)
    };
    U[86] = function () {
        for (var a = this.G(), b = m(a); a--;) {
            var c = this.pop();
            b[a] = c
        }
        this[D](b)
    };
    U[87] = function () {
        this[D](this.ol.nj({}))
    };
    U[160] = function () {
        var a = this.pop(),
            b = this.pop();
        this[D](b + a)
    };
    U[161] = function () {
        var a = this.pop(),
            b = this.pop();
        this[D](b - a)
    };
    U[162] = function () {
        var a = this.pop(),
            b = this.pop();
        this[D](b * a)
    };
    U[163] = function () {
        var a = this.pop(),
            b = this.pop();
        this[D](b / a)
    };
    U[164] = function () {
        var a = this.pop(),
            b = this.pop();
        this[D](b % a)
    };
    U[144] = function () {
        var a = this.pop();
        this[D](-a)
    };
    U[150] = function () {
        var a = this.pop();
        this[D](!a)
    };
    U[145] = function () {
        var a = this.pop();
        ++a;
        this[D](a)
    };
    U[147] = function () {
        var a = this.pop();
        --a;
        this[D](a)
    };
    U[197] = function () {
        var a = this.pop() | 0,
            b = this.pop() | 0;
        this[D](b + a | 0)
    };
    U[198] = function () {
        var a = this.pop() | 0,
            b = this.pop() | 0;
        this[D](b - a | 0)
    };
    U[199] = function () {
        var a = this.pop() | 0,
            b = this.pop() | 0;
        this[D](b * a | 0)
    };
    U[196] = function () {
        var a = this.pop() | 0;
        this[D](-a | 0)
    };
    U[192] = function () {
        var a = this.pop() | 0;
        this[D](a + 1 | 0)
    };
    U[193] = function () {
        var a = this.pop() | 0;
        this[D](a - 1 | 0)
    };
    U[151] = function () {
        var a = this.pop();
        this[D](~a)
    };
    U[169] = function () {
        var a = this.pop(),
            b = this.pop();
        this[D](b | a)
    };
    U[170] = function () {
        var a = this.pop(),
            b = this.pop();
        this[D](b ^ a)
    };
    U[168] = function () {
        var a = this.pop(),
            b = this.pop();
        this[D](b & a)
    };
    U[165] = function () {
        var a = this.pop(),
            b = this.pop();
        this[D](b << a)
    };
    U[166] = function () {
        var a = this.pop(),
            b = this.pop();
        this[D](b >> a)
    };
    U[167] = function () {
        var a = this.pop(),
            b = this.pop();
        this[D](b >>> a)
    };
    U[118] = function () {
        var a = this.pop();
        this[D](ga(a))
    };
    U[117] = function () {
        var a = this.pop();
        this[D](p(a))
    };
    U[115] = function () {
        var a = this.pop();
        this[D](a | 0)
    };
    U[116] = function () {
        var a = this.pop();
        this[D](a >>> 0)
    };
    U[112] = function () {
        var a = this.pop();
        this[D](q(a))
    };
    U[128] = function () {
        var a = this.G(),
            b = this.pop();
        this[D](this.cl(b, a))
    };
    U[130] = function () {};
    U[133] = function () {
        var a = this.pop();
        null != a ? this[D](q(a)) : this[D](null)
    };
    U[149] = function () {
        var a = this.pop();
        this[D](typeof a)
    };
    U[134] = function () {
        var a = this.G(),
            a = this.qb(a).Gb(this.nb),
            a = this.nb[a],
            b = this.pop();
        this[D](tq(b, a))
    };
    U[178] = function () {
        var a = this.G(),
            a = this.qb(a).Gb(this.nb),
            a = this.nb[a],
            b = this.pop();
        this[D](uq(b, a))
    };
    U[135] = function () {
        var a = this.pop(),
            b = this.pop();
        this[D](tq(b, a))
    };
    U[179] = function () {
        var a = this.pop(),
            b = this.pop();
        this[D](uq(b, a))
    };
    U[171] = function () {
        var a = this.pop(),
            b = this.pop();
        this[D](b == a)
    };
    U[172] = function () {
        var a = this.pop(),
            b = this.pop();
        this[D](b === a)
    };
    U[173] = function () {
        var a = this.pop(),
            b = this.pop();
        this[D](b < a)
    };
    U[174] = function () {
        var a = this.pop(),
            b = this.pop();
        this[D](b <= a)
    };
    U[175] = function () {
        var a = this.pop(),
            b = this.pop();
        this[D](b > a)
    };
    U[176] = function () {
        var a = this.pop(),
            b = this.pop();
        this[D](b >= a)
    };
    U[16] = function () {
        var a = this.ub();
        this.I += a
    };
    U[14] = function () {
        var a = this.ub(),
            b = this.pop(),
            c = this.pop();
        b < c || (this.I += a)
    };
    U[12] = function () {
        var a = this.ub(),
            b = this.pop();
        this.pop() < b || (this.I += a)
    };
    U[15] = function () {
        var a = this.ub(),
            b = this.pop(),
            c = this.pop();
        b <= c || (this.I += a)
    };
    U[19] = function () {
        var a = this.ub(),
            b = this.pop();
        this.pop() == b && (this.I += a)
    };
    U[20] = function () {
        var a = this.ub(),
            b = this.pop();
        this.pop() != b && (this.I += a)
    };
    U[25] = function () {
        var a = this.ub(),
            b = this.pop();
        this.pop() === b && (this.I += a)
    };
    U[26] = function () {
        var a = this.ub(),
            b = this.pop();
        this.pop() !== b && (this.I += a)
    };
    U[13] = function () {
        var a = this.ub(),
            b = this.pop();
        this.pop() <= b || (this.I += a)
    };
    U[18] = function () {
        var a = this.ub();
        this.pop() || (this.I += a)
    };
    U[23] = function () {
        var a = this.ub(),
            b = this.pop(),
            c = this.pop();
        b < c && (this.I += a)
    };
    U[21] = function () {
        var a = this.ub(),
            b = this.pop();
        this.pop() < b && (this.I += a)
    };
    U[24] = function () {
        var a = this.ub(),
            b = this.pop(),
            c = this.pop();
        b <= c && (this.I += a)
    };
    U[22] = function () {
        var a = this.ub(),
            b = this.pop();
        this.pop() <= b && (this.I += a)
    };
    U[17] = function () {
        var a = this.ub();
        this.pop() && (this.I += a)
    };
    U[27] = function () {
        for (var a = this.I - 1, b = this.ub(), c = this.G(), d = [], e = 0; e < c + 1; e++) d[D](this.ub());
        e = this.pop();
        0 <= e && e < c + 1 && (b = d[e]);
        this.I = a + b
    };
    U[31] = function () {
        var a = this.pop(),
            b = this.pop();
        this[D](br(b, a))
    };
    U[50] = function () {
        for (var a = this.G(), b = this.G(), c = this.h[this.fa + a], d = this.h[this.fa + b]; c && 0 == (d = br(c, d));) {
            var e = c.__swiffy_proxy,
                c = e && e.sf ? null : f[Pc](c);
            this.h[this.fa + a] = c
        }
        this.h[this.fa + b] = d;
        this[D]( !! d)
    };
    U[30] = function () {
        var a = this.pop(),
            b = this.pop();
        this[D](cr(b, a))
    };
    U[35] = function () {
        var a = this.pop(),
            b = this.pop();
        this[D](dr(b, a))
    };
    U[2] = function () {};
    U[9] = function () {};
    U[239] = function () {
        this.Vd();
        this.G();
        this.Vd();
        this.G()
    };
    U[241] = function () {
        this.G()
    };
    U[240] = function () {
        this.G()
    };
    var yq = function (a, b) {
        var c, d;
        L(b) ? (c = Qn(a), d = b instanceof zp ? b.uri : q(b)) : L(a) ? a instanceof yq ? (c = a.prefix, d = a.uri) : (d = a instanceof zp ? a.uri : q(a), c = void 0) : d = c = "";
        X(this, "prefix", c);
        X(this, "uri", d)
    }, er = function (a) {
            return a instanceof yq ? a : new yq(void 0, q(a))
        };
    qq(yq, "Namespace", {
        pf: er
    });
    cb(yq[H], function () {
        return this.uri
    });
    Ia(yq[H], function () {
        return this.uri
    });
    var zp = function (a) {
        f[w](this, "__swiffy_v", {
            value: a.normalize()
        })
    }, fr = function (a, b, c) {
            return new zp(new Ap(a, b, c))
        };
    qq(zp, "QName", {
        pf: function (a) {
            return a instanceof zp ? a : fr("", a, !1)
        },
        Hm: function (a, b) {
            var c, d;
            if (L(b)) c = L(a) ? a instanceof zp ? a.uri : null !== a ? q(a) : null : b instanceof zp ? b.uri : "", d = b instanceof zp ? b[yc] : q(b);
            else if (c = "", L(a)) {
                if (a instanceof zp) return a;
                d = q(a)
            } else d = "";
            return fr(c, d, !1)
        }
    });
    f[w](zp[H], "uri", {
        get: function () {
            return this.__swiffy_v.uri
        }
    });
    f[w](zp[H], "localName", {
        get: function () {
            return this.__swiffy_v[yc]
        }
    });
    Ia(zp[H], function () {
        return this.__swiffy_v.jb()
    });
    Jp[H]["flash.net.navigateToURL"] = function (a, b) {
        if (!a) throw R(2007, "request");
        if (null == a.url) throw R(2007, "url");
        var c = L(b) ? b : "_blank",
            d = 0;
        a[s] && (d = a[Ec] == gr.POST ? 2 : 1);
        var e = this.__swiffy_vm;
        e.a.Bh(new Bl(e, a[s] ? a[s][Sc]() : null, a.url, c, d))
    };
    Jp[H].trace = function (a) {
        var b = m[H].map[I](arguments, q)[Cf](" ");
        console.log(a);
        this.__swiffy_vm.trace(b)
    };
    Jp[H].parseInt = function (a, b) {
        !L(b) && Qi(a) && (b = 10);
        return ha(a, b)
    };
    Jp[H].parseFloat = ia;
    Jp[H].isNaN = da;
    Jp[H].isFinite = ja;
    Jp[H]["flash.utils.setTimeout"] = function (a, b) {
        var c = this,
            d = m[H][ee][I](arguments, 2);
        return ca.setTimeout(function () {
            a[B](c, d)
        }, b)
    };
    Jp[H]["flash.utils.clearTimeout"] = function (a) {
        ca.clearTimeout(a)
    };
    Jp[H]["flash.utils.setInterval"] = function (a, b) {
        var c = this,
            d = m[H][ee][I](arguments, 2);
        return ca.setInterval(function () {
            a[B](c, d)
        }, b)
    };
    Jp[H]["flash.utils.clearInterval"] = function (a) {
        ca.clearInterval(a)
    };
    Jp[H]["flash.utils.getTimer"] = function () {
        return Date.now() - this.__swiffy_vm.startTime
    };
    Jp[H]["flash.utils.getDefinitionByName"] = function (a) {
        a = a[Wb]("::", ".");
        "." == a[0] && (a = a[rf](1));
        return this[a]
    };
    Jp[H]["flash.utils.getQualifiedClassName"] = function (a) {
        switch (typeof a) {
        case "undefined":
            return "void";
        case "number":
            if ((a | 0) == a) return "int"
        }
        return Cp(a).jb()
    };
    Jp[H]["flash.utils.getQualifiedSuperclassName"] = function (a) {
        t: {
            if (null != a && (a = lq(a).__swiffy_baseclass, null != a)) {
                a = a.__swiffy_name;
                break t
            }
            a = null
        }
        return a ? a.jb() : a
    };
    Jp[H]["flash.utils.describeType"] = function (a) {
        var b;
        if (!L(a)) throw R(1010);
        hr || (hr = new ir);
        b = hr;
        var c = new jr(null, b.Ya("type"));
        if (null === a) c.Gc(b.Ya("@name"), "null"), c.Gc(b.Ya("@isStatic"), "false");
        else {
            var d = !! a.__swiffy_typeid;
            a = d ? a : a.__swiffy_classdef;
            var e = b.tp(c, a, d),
                h = a.__swiffy_name.jb();
            c.Gc(b.Ya("@name"), h);
            c.Gc(b.Ya("@isStatic"), q(d));
            e && c.Gc(b.Ya("@base"), e.__swiffy_name.jb());
            e = c;
            d && (e = c.wf(b.Ya("factory")), e.Gc(b.Ya("@type"), h), b.tp(e, a, !1));
            b.Ys(e, a.__swiffy_traits)
        }
        b = c.xd;
        return b
    };
    Jp[H].isXMLName = function (a) {
        return L(Qn(a))
    };
    var kr = function (a, b) {
        Kp(a, function (c) {
            try {
                return null != c ? b(q(c)) : "null"
            } catch (d) {
                throw R(1052, a);
            }
        })
    };
    kr("escape", escape);
    kr("unescape", aa);
    kr("encodeURI", encodeURI);
    kr("encodeURIComponent", ba);
    kr("decodeURI", decodeURI);
    kr("decodeURIComponent", ka);
    Kp("Math", l);
    gq("Boolean", ga);
    gq("Number", p);
    gq("int", function (a) {
        return a | 0
    });
    gq("uint", function (a) {
        return a >>> 0
    });
    gq("void", function () {});
    gq("String", q, function (a) {
        return null != a ? q(a) : null
    });
    gq("Date", function (a) {
        return a instanceof Date ? a : (new Date(Date.now()))[Sc]()
    }, function (a) {
        if (a instanceof Date) return a;
        throw R(1034, Cp(a), "Date");
    }, Date.__swiffy_override);
    ub(Jp[H].Date, Date[H]);
    Jp[H].Date.UTC = Date.UTC;
    dq(Function, iq, kq, Function, Function, fq, null, "Function");
    dq(m, iq, kq, m, m, fq, null, "Array");
    var lr = eval("RegExp");
    dq(lr, iq, kq, lr, function (a, b) {
        if (a instanceof la) {
            if (L(b)) throw R(1100);
            return la(a)
        }
        var c = !1,
            d = !1;
        if (null != b) {
            a = q(a);
            b = q(b);
            b = b[Wb](/[^gim]/g, function (a) {
                switch (a) {
                case "s":
                    c = !0;
                    break;
                case "x":
                    d = !0
                }
                return ""
            });
            if (c) {
                var e = !1;
                a = a[Wb](/[.\[\]]|\\./g, function (a) {
                    switch (a) {
                    case ".":
                        if (!e) return "[^]";
                        break;
                    case "[":
                        e = !0;
                        break;
                    case "]":
                        e = !1
                    }
                    return a
                })
            }
            d && (a = a[Wb](/\s+/g, ""))
        }
        return la(a, b)
    }, fq, null, "RegExp");
    Kp("undefined", void 0);
    Kp("null", null);
    Kp("Infinity", Infinity);
    Kp("NaN", NaN);
    Kp("AS3", er("http://adobe.com/AS3/2006/builtin"));
    f[w](f[H], "setPropertyIsEnumerable", {
        value: function (a, b) {
            a = Z(a, "String");
            b = Z(b, "Boolean");
            var c = f[vd](this, a);
            c && c[td] && c.enumerable != b && (c.enumerable = b, f[w](this, a, c))
        }
    });
    var mr = function (a, b) {
        f[w](a, yp("http://adobe.com/AS3/2006/builtin", b), {
            value: function () {
                return this[b][B](this, arguments)
            }
        })
    };
    mr(f[H], "toLocaleString");
    mr(f[H], "toString");
    mr(f[H], "valueOf");
    var $ = function (a, b) {
        f[w](a, yp("http://adobe.com/AS3/2006/builtin", b), {
            value: a[b]
        })
    };
    $(f[H], "hasOwnProperty");
    $(f[H], "isPrototypeOf");
    $(f[H], "propertyIsEnumerable");
    $(Function[H], "apply");
    $(Function[H], "call");
    $(q, "fromCharCode");
    $(q[H], "charAt");
    $(q[H], "charCodeAt");
    $(q[H], "concat");
    $(q[H], "indexOf");
    $(q[H], "lastIndexOf");
    $(q[H], "localeCompare");
    $(q[H], "match");
    $(q[H], "replace");
    $(q[H], "search");
    $(q[H], "slice");
    $(q[H], "split");
    $(q[H], "substr");
    $(q[H], "substring");
    $(q[H], "toLocaleLowerCase");
    $(q[H], "toLocaleUpperCase");
    $(q[H], "toLowerCase");
    $(q[H], "toUpperCase");
    $(q[H], "toString");
    $(q[H], "valueOf");
    $(m[H], "concat");
    $(m[H], "every");
    $(m[H], "filter");
    $(m[H], "forEach");
    $(m[H], "indexOf");
    $(m[H], "join");
    $(m[H], "lastIndexOf");
    $(m[H], "map");
    $(m[H], "pop");
    $(m[H], "push");
    $(m[H], "reverse");
    $(m[H], "shift");
    $(m[H], "slice");
    $(m[H], "some");
    $(m[H], "sort");
    $(m[H], "sortOn");
    $(m[H], "splice");
    $(m[H], "unshift");
    $(Date[H], "getTime");
    var Fq = function (a, b) {
        if (null == a) throw R(1009);
        if (b.Gb(a)) return !0;
        var c = a.__swiffy_proxy;
        return c && c.Cf ? c.Cf[I](a, b.Sd()) : !1
    }, $q = function (a, b) {
            if (null == a) throw R(1009);
            var c = a.__swiffy_proxy;
            if (c && c.bk) return c.bk[I](a, b.Sd());
            throw R(1016);
        }, Wq = function (a, b) {
            if (null == a) throw R(1009);
            var c = b.Gb(a);
            if (L(c)) return a[c];
            if ((c = a.__swiffy_proxy) && c.Wd) return c.Wd[I](a, b.Sd())
        }, Xq = function (a, b) {
            if (null == a) throw R(1009);
            var c = a.__swiffy_proxy;
            if (c && c.Ec) return c.Ec[I](a, b.Sd());
            c = b.Gb(a);
            return L(c) ? delete a[c] : !1
        }, br = function (a, b) {
            if (null == a) throw R(1009);
            var c = a.__swiffy_proxy;
            c && c.sf ? b = c.sf[I](a, b) : ++b > f[Oe](f(a))[G] && (b = 0);
            return b
        }, cr = function (a, b) {
            if (null == a) throw R(1009);
            var c = a.__swiffy_proxy;
            return c && c.Xg ? c.Xg[I](a, b) : f[Oe](f(a))[b - 1]
        }, dr = function (a, b) {
            if (null == a) throw R(1009);
            var c = a.__swiffy_proxy;
            return c && c.Yg ? c.Yg[I](a, b) : a[f[Oe](f(a))[b - 1]]
        };
    var nr = function (a, b) {
        a = Z(a, "String", "");
        b = Z(b, "int", 0);
        X(this, "errorID", b);
        W(this, "message", "String", a);
        W(this, "name", "String", "Error")
    };
    T(nr, "Error");
    nr[H].getStackTrace = function () {console.log(this)
        Y(this);
        return ""
    };
    Ia(nr[H], function () {
        return this[F] + (this.message ? ": " + this.message : "")
    });
    var or = function (a, b) {
        nr[I](this, a, b);
        pb(this, "ReferenceError")
    };
    T(or, "ReferenceError", nr);
    var pr = function (a, b) {
        nr[I](this, a, b);
        pb(this, "TypeError")
    };
    T(pr, "TypeError", nr);
    var qr = function (a, b) {
        nr[I](this, a, b);
        pb(this, "VerifyError")
    };
    T(qr, "VerifyError", nr);
    var rr = function (a, b) {
        nr[I](this, a, b);
        pb(this, "ArgumentError")
    };
    T(rr, "ArgumentError", nr);
    var sr = function (a, b) {
        nr[I](this, a, b);
        pb(this, "RangeError")
    };
    T(sr, "RangeError", nr);
    var tr = function (a, b) {
        nr[I](this, a, b);
        pb(this, "URIError")
    };
    T(tr, "URIError", nr);
    var ur = function (a, b) {
        nr[I](this, a, b)
    };
    T(ur, "flash.errors.IOError", nr);
    var vr = function (a, b) {
        nr[I](this, a, b)
    };
    T(vr, "flash.errors.EOFError", ur);
    var R = function (a, b) {
        var c = wr[a],
            d = xr[a] || nr,
            e = m[H][ee][I](arguments, 1),
            h = "Error #" + a;
        c ? h += ": " + c[Wb](/{(\d+)}/g, function (a, b) {
            return L(e[b]) ? e[b] : a
        }) : 0 < e[G] && (h += ": " + e[Cf](", "));
        return new wl(new d(h, a))
    }, wr = {
            1001: "The method {0} is not implemented.",
            1006: "{0} is not a function.",
            1007: "Instantiation attempted on a non-constructor.",
            1009: "Cannot access a property or method of a null object reference.",
            1010: "A term is undefined and has no properties.",
            1016: "Descendants operator (..) not supported on type",
            1034: "Type Coercion failed: cannot convert {0} to {1}.",
            1041: "The right-hand side of operator must be a class.",
            1052: "Invalid URI passed to {0} function.",
            1056: "Cannot create property {0} on {1}.",
            1065: "Variable {0} is not defined.",
            1069: "Property {0} not found on {1} and there is no default value.",
            1083: 'The prefix "{0}" for element "{1}" is not bound.',
            1085: 'The element type "{0}" must be terminated by the matching end-tag "</{0}>".',
            1086: "The {0} method only works on lists containing one item.",
            1087: "Assignment to indexed XML is not allowed.",
            1088: "The markup in the document following the root element must be well-formed.",
            1090: "XML parser failure: element is malformed.",
            1091: "XML parser failure: Unterminated CDATA section.",
            1094: "XML parser failure: Unterminated comment.",
            1095: "XML parser failure: Unterminated attribute.",
            1097: "XML parser failure: Unterminated processing instruction.",
            1100: "Cannot supply flags when constructing one RegExp from another.",
            1115: "{0}$ is not a constructor.",
            1123: "Filter operator not supported on type {0}.",
            1125: "The index {0} is out of range {1}.",
            1126: "Cannot change the length of a fixed Vector.",
            1127: "Type application attempted on a non-parameterized type.",
            1508: "The value specified for argument {0} is invalid.",
            2004: "One of the parameters is invalid.",
            2006: "The supplied index is out of bounds.",
            2007: "Parameter {0} must be non-null.",
            2008: "{0} must be one of the accepted values.",
            2012: "{0}$ class cannot be instantiated.",
            2030: "End of file was encountered.",
            2058: "There was an error decompressing the data.",
            2067: "The ExternalInterface is not available in this container.",
            2088: "The Proxy class does not implement {0}. It must be overridden by a subclass.",
            2089: "The Proxy class does not implement {0}. It must be overridden by a subclass.",
            2090: "The Proxy class does not implement {0}. It must be overridden by a subclass.",
            2091: "The Proxy class does not implement {0}. It must be overridden by a subclass.",
            2092: "The Proxy class does not implement {0}. It must be overridden by a subclass.",
            2093: "The Proxy class does not implement {0}. It must be overridden by a subclass.",
            2101: "The String passed to URLVariables.decode() must be a URL-encoded query string containing name/value pairs.",
            2105: "The Proxy class does not implement {0}. It must be overridden by a subclass.",
            2106: "The Proxy class does not implement {0}. It must be overridden by a subclass.",
            2107: "The Proxy class does not implement {0}. It must be overridden by a subclass."
        }, xr = {
            1001: qr,
            1006: pr,
            1007: pr,
            1009: pr,
            1010: pr,
            1016: pr,
            1034: pr,
            1041: pr,
            1052: tr,
            1056: or,
            1065: or,
            1069: or,
            1083: pr,
            1085: pr,
            1086: pr,
            1087: pr,
            1088: pr,
            1090: pr,
            1091: pr,
            1094: pr,
            1095: pr,
            1097: pr,
            1100: pr,
            1115: pr,
            1123: pr,
            1125: sr,
            1126: sr,
            1127: pr,
            1508: rr,
            2004: pr,
            2006: sr,
            2007: pr,
            2008: rr,
            2012: rr,
            2030: vr,
            2058: ur,
            2067: nr,
            2088: nr,
            2089: nr,
            2090: nr,
            2091: nr,
            2092: nr,
            2093: nr,
            2101: nr,
            2105: nr,
            2106: nr,
            2107: nr
        };
    T(function () {
        W(this, "description", "String", "");
        W(this, "forceSimple", "Boolean", !1);
        W(this, "name", "String", "");
        W(this, "noAutoLabeling", "Boolean", !1);
        W(this, "shortcut", "String", "");
        W(this, "silent", "Boolean", !1)
    }, "flash.accessibility.AccessibilityProperties");
    var yr = function () {
        f[w](this, "__swiffy_v", {
            get: function () {
                return this.Ff()
            }
        })
    };
    yr[H].Ff = function () {
        return new kn
    };
    T(yr, "flash.filters.BitmapFilter");
    yr[H].clone = function () {
        return new yr
    };
    Ia(yr[H], function () {
        return "[object BitmapFilter]"
    });
    var No = function (a, b) {
        return a | (255 * b | 0) << 24
    }, zr = T(function () {}, "flash.filters.BitmapFilterQuality");
    f[qe](zr, {
        HIGH: {
            value: 3
        },
        LOW: {
            value: 1
        },
        MEDIUM: {
            value: 2
        }
    });
    var Ar = T(function () {}, "flash.filters.BitmapFilterType");
    f[qe](Ar, {
        FULL: {
            value: "full"
        },
        INNER: {
            value: "inner"
        },
        OUTER: {
            value: "outer"
        }
    });
    var gn = function (a, b, c, d, e, h, k, n, u, y, C, J) {
        yr[I](this);
        a = Z(a, "Number", 4);
        b = Z(b, "Number", 45);
        c = Z(c, "uint", 16777215);
        d = Z(d, "Number", 1);
        e = Z(e, "uint", 0);
        h = Z(h, "Number", 1);
        k = Z(k, "Number", 4);
        n = Z(n, "Number", 4);
        u = Z(u, "Number", 1);
        y = Z(y, "int", 1);
        C = Z(C, "String", "inner");
        J = Z(J, "Boolean", !1);
        W(this, "angle", "Number", b);
        W(this, "blurX", "Number", k);
        W(this, "blurY", "Number", n);
        W(this, "distance", "Number", a);
        W(this, "highlightAlpha", "Number", d);
        W(this, "highlightColor", "uint", c);
        W(this, "knockout", "Boolean", J);
        W(this, "quality",
            "int", y);
        W(this, "shadowAlpha", "Number", h);
        W(this, "shadowColor", "uint", e);
        W(this, "strength", "Number", u);
        W(this, "type", "String", C)
    };
    T(gn, "flash.filters.BevelFilter", yr);
    gn[H].Ff = function () {
        return new en(this[fd], No(this.highlightColor, this.highlightAlpha), No(this.shadowColor, this.shadowAlpha), this[Kd], this[nf], this[Ff], this.blurX, this.blurY, !1, !0, this[kc])
    };
    gn[H].clone = function () {
        return new gn(this[Kd], this[fd], this.highlightColor, this.highlightAlpha, this.shadowColor, this.shadowAlpha, this.blurX, this.blurY, this[nf], this[Ff], this[E], this[kc])
    };
    var Zm = function (a, b, c) {
        yr[I](this);
        a = Z(a, "Number", 4);
        b = Z(b, "Number", 4);
        c = Z(c, "int", 1);
        W(this, "blurX", "Number", a);
        W(this, "blurY", "Number", b);
        W(this, "quality", "int", c)
    };
    T(Zm, "flash.filters.BlurFilter", yr);
    Zm[H].Ff = function () {
        return new Xm(this[Ff], this.blurX, this.blurY)
    };
    Zm[H].clone = function () {
        return new Zm(this.blurX, this.blurY, this[Ff])
    };
    var Rm = function (a) {
        yr[I](this);
        var b;
        f[w](this, "matrix", {
            get: function () {
                return b
            },
            set: function (a) {
                b = Z(a, "Array");
                if (null != b)
                    if (20 < b[G]) tb(b, 20);
                    else
                        for (; 20 > b[G];) b[D](0);
                    else b = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]
            }
        });
        eb(this, a)
    };
    T(Rm, "flash.filters.ColorMatrixFilter", yr);
    Rm[H].Ff = function () {
        return new Pm(this[fe])
    };
    Rm[H].clone = function () {
        return new Rm(this[fe][ee](0))
    };
    var Vm = function (a, b, c, d, e, h, k, n, u) {
        yr[I](this);
        a = Z(a, "Number", 0);
        b = Z(b, "Number", 0);
        d = Z(d, "Number", 1);
        e = Z(e, "Number", 0);
        h = Z(h, "Boolean", !0);
        k = Z(k, "Boolean", !0);
        n = Z(n, "uint", 0);
        var y;
        f[w](this, "alpha", {
            get: function () {
                return y
            },
            set: function (a) {
                y = l.min(1, l[$b](255 * Z(a, "Number", 0)) / 255)
            }
        });
        zb(this, u);
        W(this, "bias", "Number", e);
        W(this, "clamp", "Boolean", k);
        W(this, "color", "uint", n);
        W(this, "divisor", "Number", d);
        W(this, "matrixX", "Number", a);
        W(this, "matrixY", "Number", b);
        var C = [];
        f[w](this, "matrix", {
            get: function () {
                return C
            },
            set: function (a) {
                C = Z(a, "Array");
                a = this[Le] * this[Ke];
                null != C || (C = []);
                if (C[G] > a) tb(C, a);
                else
                    for (; C[G] < a;) C[D](0)
            }
        });
        L(c) && eb(this, c);
        W(this, "preserveAlpha", "Boolean", h)
    };
    T(Vm, "flash.filters.ConvolutionFilter", yr);
    Vm[H].Ff = function () {
        return new Tm(this[ac], this[Ye], No(this[re], this[ff]), this[cf], this[fe], this[Ke], this[Le], this[ic])
    };
    Vm[H].clone = function () {
        return new Vm(this[Ke], this[Le], this[fe], this[cf], this[ac], this[ic], this[Ye], this[re], this[ff])
    };
    var Cr = function (a, b, c, d, e, h, k, n, u) {
        yr[I](this);
        c = Z(c, "uint", 0);
        d = Z(d, "uint", 0);
        e = Z(e, "Number", 0);
        h = Z(h, "Number", 0);
        k = Z(k, "String", "wrap");
        var y;
        f[w](this, "alpha", {
            get: function () {
                return y
            },
            set: function (a) {
                y = l.min(1, l[$b](255 * Z(a, "Number", 0)) / 255)
            }
        });
        zb(this, u);
        var C;
        f[w](this, "color", {
            get: function () {
                return C
            },
            set: function (a) {
                C = Z(a, "uint", 0) % 16777216
            }
        });
        ib(this, n);
        W(this, "componentX", "uint", c);
        W(this, "componentY", "uint", d);
        W(this, "mapBitmap", "flash.display.BitmapData", a);
        var J;
        f[w](this, "mapPoint", {
            get: function () {
                return J
            },
            set: function (a) {
                a = Z(a, "flash.geom.Point", null);
                J = null != a ? new Br(a.x, a.y) : new Br(0, 0)
            }
        });
        this.mapPoint = b;
        W(this, "mode", "String", k);
        W(this, "scaleX", "Number", e);
        W(this, "scaleY", "Number", h)
    };
    T(Cr, "flash.filters.DisplacementMapFilter", yr);
    Cr[H].clone = function () {
        return new Cr(this.mapBitmap, this.mapPoint, this.componentX, this.componentY, this.scaleX, this.scaleY, this[Yd], this[re], this[ff])
    };
    var Dr = function () {};
    Dr.o = T(Dr, "flash.filters.DisplacementMapFilterMode");
    f[qe](Dr.o, {
        CLAMP: {
            value: "clamp"
        },
        COLOR: {
            value: "color"
        },
        IGNORE: {
            value: "ignore"
        },
        WRAP: {
            value: "wrap"
        }
    });
    var cn = function (a, b, c, d, e, h, k, n, u, y, C) {
        yr[I](this);
        a = Z(a, "Number", 4);
        b = Z(b, "Number", 45);
        c = Z(c, "uint", 0);
        d = Z(d, "Number", 1);
        e = Z(e, "Number", 4);
        h = Z(h, "Number", 4);
        k = Z(k, "Number", 1);
        n = Z(n, "int", 1);
        u = Z(u, "Boolean", !1);
        y = Z(y, "Boolean", !1);
        C = Z(C, "Boolean", !1);
        var J;
        f[w](this, "alpha", {
            get: function () {
                return J
            },
            set: function (a) {
                J = l.min(1, l[$b](255 * Z(a, "Number", 0)) / 255)
            }
        });
        zb(this, d);
        W(this, "angle", "Number", b);
        W(this, "blurX", "Number", e);
        W(this, "blurY", "Number", h);
        var V;
        f[w](this, "color", {
            get: function () {
                return V
            },
            set: function (a) {
                V = Z(a, "uint", 0) % 16777216
            }
        });
        ib(this, c);
        W(this, "distance", "Number", a);
        W(this, "hideObject", "Boolean", C);
        W(this, "inner", "Boolean", u);
        W(this, "knockout", "Boolean", y);
        W(this, "quality", "int", n);
        W(this, "strength", "Number", k)
    };
    T(cn, "flash.filters.DropShadowFilter", yr);
    cn[H].Ff = function () {
        return new an(this[fd], No(this[re], this[ff]), this[Kd], this[nf], this[Ff], this.blurX, this.blurY, this[Qb], this[dd], this[kc])
    };
    cn[H].clone = function () {
        return new cn(this[Kd], this[fd], this[re], this[ff], this.blurX, this.blurY, this[nf], this[Ff], this[dd], this[kc], this[Qb])
    };
    var Er = function (a, b, c, d, e, h, k, n) {
        yr[I](this);
        c = Z(c, "Number", 6);
        d = Z(d, "Number", 6);
        e = Z(e, "Number", 2);
        h = Z(h, "int", 1);
        k = Z(k, "Boolean", !1);
        n = Z(n, "Boolean", !1);
        var u;
        f[w](this, "alpha", {
            get: function () {
                return u
            },
            set: function (a) {
                u = l.min(1, l[$b](255 * Z(a, "Number", 1)) / 255)
            }
        });
        zb(this, b);
        W(this, "blurX", "Number", c);
        W(this, "blurY", "Number", d);
        var y;
        f[w](this, "color", {
            get: function () {
                return y
            },
            set: function (a) {
                y = Z(a, "uint", 16711680) % 16777216
            }
        });
        ib(this, a);
        W(this, "inner", "Boolean", k);
        W(this, "knockout", "Boolean", n);
        W(this, "quality", "int", h);
        W(this, "strength", "Number", e)
    };
    T(Er, "flash.filters.GlowFilter", yr);
    Er[H].Ff = function () {
        return new an(0, No(this[re], this[ff]), 0, this[nf], this[Ff], this.blurX, this.blurY, !1, this[dd], this[kc])
    };
    Er[H].clone = function () {
        return new Er(this[re], this[ff], this.blurX, this.blurY, this[nf], this[Ff], this[dd], this[kc])
    };
    var Fr = function (a, b, c, d, e, h, k, n, u, y, C) {
        yr[I](this);
        a = Z(a, "Number", 4);
        b = Z(b, "Number", 45);
        h = Z(h, "Number", 4);
        k = Z(k, "Number", 4);
        n = Z(n, "Number", 1);
        u = Z(u, "int", 1);
        y = Z(y, "String", "inner");
        C = Z(C, "Boolean", !1);
        var J = [];
        f[w](this, "colors", {
            get: function () {
                return J
            },
            set: function (a) {
                J = Z(a, "Array", []);
                L(J) || (J = []);
                for (a = 0; a < J[G]; a++) J[a] = Z(J[a], "uint", 16711680) % 16777216
            }
        });
        this.colors = c;
        var V = [];
        f[w](this, "alphas", {
            get: function () {
                return V
            },
            set: function (a) {
                V = Z(a, "Array", []);
                L(V) || (V = []);
                a = L(J) ? J[G] : 0;
                for (var b =
                    0; b < a; b++) V[b] = l.min(1, l[$b](255 * Z(V[b], "Number", 1)) / 255);
                tb(V, a)
            }
        });
        this.alphas = d;
        var va = [];
        f[w](this, "ratios", {
            get: function () {
                return va
            },
            set: function (a) {
                va = Z(a, "Array", []);
                L(va) || (va = []);
                a = L(J) ? J[G] : 0;
                for (var b = 0; b < a; b++) va[b] = l[$b](Z(va[b], "Number", 0)), 0 > va[b] ? va[b] = 0 : 255 < va[b] && (va[b] = 255);
                tb(va, a)
            }
        });
        this.ratios = e;
        W(this, "angle", "Number", b);
        W(this, "blurX", "Number", h);
        W(this, "blurY", "Number", k);
        W(this, "distance", "Number", a);
        W(this, "knockout", "Boolean", C);
        W(this, "quality", "int", u);
        W(this, "strength",
            "Number", n);
        W(this, "type", "String", y)
    };
    T(Fr, "flash.filters.GradientBevelFilter", yr);
    Fr[H].clone = function () {
        return new Fr(this[Kd], this[fd], this.colors, this.alphas, this.ratios, this.blurX, this.blurY, this[nf], this[Ff], this[E], this[kc])
    };
    var Gr = function (a, b, c, d, e, h, k, n, u, y, C) {
        yr[I](this);
        a = Z(a, "Number", 4);
        b = Z(b, "Number", 45);
        h = Z(h, "Number", 4);
        k = Z(k, "Number", 4);
        n = Z(n, "Number", 1);
        u = Z(u, "int", 1);
        y = Z(y, "String", "inner");
        C = Z(C, "Boolean", !1);
        var J = [];
        f[w](this, "colors", {
            get: function () {
                return J
            },
            set: function (a) {
                J = Z(a, "Array", []);
                L(J) || (J = []);
                for (a = 0; a < J[G]; a++) J[a] = Z(J[a], "uint", 16711680) % 16777216
            }
        });
        this.colors = c;
        var V = [];
        f[w](this, "alphas", {
            get: function () {
                return V
            },
            set: function (a) {
                V = Z(a, "Array", []);
                L(V) || (V = []);
                a = L(J) ? J[G] : 0;
                for (var b =
                    0; b < a; b++) V[b] = l.min(1, l[$b](255 * Z(V[b], "Number", 1)) / 255);
                tb(V, a)
            }
        });
        this.alphas = d;
        var va = [];
        f[w](this, "ratios", {
            get: function () {
                return va
            },
            set: function (a) {
                va = Z(a, "Array", []);
                L(va) || (va = []);
                a = L(J) ? J[G] : 0;
                for (var b = 0; b < a; b++) va[b] = l[$b](Z(va[b], "Number", 0)), 0 > va[b] ? va[b] = 0 : 255 < va[b] && (va[b] = 255);
                tb(va, a)
            }
        });
        this.ratios = e;
        W(this, "angle", "Number", b);
        W(this, "blurX", "Number", h);
        W(this, "blurY", "Number", k);
        W(this, "distance", "Number", a);
        W(this, "knockout", "Boolean", C);
        W(this, "quality", "int", u);
        W(this, "strength",
            "Number", n);
        W(this, "type", "String", y)
    };
    T(Gr, "flash.filters.GradientGlowFilter", yr);
    Gr[H].clone = function () {
        return new Gr(this[Kd], this[fd], this.colors, this.alphas, this.ratios, this.blurX, this.blurY, this[nf], this[Ff], this[E], this[kc])
    };
    var Hr = function (a, b, c) {
        a = Z(a, "String");
        b = Z(b, "Boolean", !1);
        c = Z(c, "Boolean", !1);
        f[w](this, "__swiffy_v", {
            value: {
                type: a,
                bubbles: b,
                cancelable: c,
                eventPhase: 2,
                target: null,
                currentTarget: null,
                ak: !1,
                oq: !1,
                defaultPrevented: !1,
                Vj: !1
            }
        })
    }, Ir = function (a) {
            return a.__swiffy_v
        }, Jr = T(Hr, "flash.events.Event");
    S(Jr, "bubbles", function () {
        return Ir(this)[Pd]
    });
    S(Jr, "cancelable", function () {
        return Ir(this)[$c]
    });
    S(Jr, "currentTarget", function () {
        return Ir(this).currentTarget
    });
    S(Jr, "eventPhase", function () {
        return Ir(this).eventPhase
    });
    S(Jr, "target", function () {
        return Ir(this)[jf]
    });
    S(Jr, "type", function () {
        return Ir(this)[E]
    });
    Xp(Jr, "isDefaultPrevented", function () {
        return Ir(this).defaultPrevented
    });
    Xp(Jr, "preventDefault", function () {
        var a = Ir(this);
        a[$c] && (a.defaultPrevented = !0)
    });
    Xp(Jr, "stopPropagation", function () {
        Ir(this).ak = !0
    });
    Xp(Jr, "stopImmediatePropagation", function () {
        var a = Ir(this);
        a.oq = !0;
        a.ak = !0
    });
    Xp(Jr, "formatToString", function () {
        for (var a = "[" + Cp(this)[yc], b = 0; b < arguments[G]; b++) {
            var c = this[arguments[b]];
            Pf(c) ? c = l[de](100 * c) / 100 : Nf(c) && (c = '"' + c + '"');
            a += " " + arguments[b] + "=" + c
        }
        return a + "]"
    });
    Xp(Jr, "clone", function () {
        return oq[I](Jr, this[E], this[Pd], this[$c])
    });
    Xp(Jr, "toString", function () {
        return this.formatToString("type", "bubbles", "cancelable", "eventPhase")
    });
    f[qe](Jr, {
        ACTIVATE: {
            value: "activate"
        },
        ADDED: {
            value: "added"
        },
        ADDED_TO_STAGE: {
            value: "addedToStage"
        },
        CANCEL: {
            value: "cancel"
        },
        CHANGE: {
            value: "change"
        },
        CHANNEL_MESSAGE: {
            value: "channelMessage"
        },
        CHANNEL_STATE: {
            value: "channelState"
        },
        CLEAR: {
            value: "clear"
        },
        CLOSE: {
            value: "close"
        },
        CLOSING: {
            value: "closing"
        },
        COMPLETE: {
            value: "complete"
        },
        CONNECT: {
            value: "connect"
        },
        CONTEXT3D_CREATE: {
            value: "context3DCreate"
        },
        COPY: {
            value: "copy"
        },
        CUT: {
            value: "cut"
        },
        DEACTIVATE: {
            value: "deactivate"
        },
        DISPLAYING: {
            value: "displaying"
        },
        ENTER_FRAME: {
            value: "enterFrame"
        },
        EXIT_FRAME: {
            value: "exitFrame"
        },
        EXITING: {
            value: "exiting"
        },
        FRAME_CONSTRUCTED: {
            value: "frameConstructed"
        },
        FRAME_LABEL: {
            value: "frameLabel"
        },
        FULLSCREEN: {
            value: "fullScreen"
        },
        HTML_BOUNDS_CHANGE: {
            value: "htmlBoundsChange"
        },
        HTML_DOM_INITIALIZE: {
            value: "htmlDOMInitialize"
        },
        HTML_RENDER: {
            value: "htmlRender"
        },
        ID3: {
            value: "id3"
        },
        INIT: {
            value: "init"
        },
        LOCATION_CHANGE: {
            value: "locationChange"
        },
        MOUSE_LEAVE: {
            value: "mouseLeave"
        },
        NETWORK_CHANGE: {
            value: "networkChange"
        },
        OPEN: {
            value: "open"
        },
        PASTE: {
            value: "paste"
        },
        PREPARING: {
            value: "preparing"
        },
        REMOVED: {
            value: "removed"
        },
        REMOVED_FROM_STAGE: {
            value: "removedFromStage"
        },
        RENDER: {
            value: "render"
        },
        RESIZE: {
            value: "resize"
        },
        SCROLL: {
            value: "scroll"
        },
        SELECT: {
            value: "select"
        },
        SELECT_ALL: {
            value: "selectAll"
        },
        SOUND_COMPLETE: {
            value: "soundComplete"
        },
        STANDARD_ERROR_CLOSE: {
            value: "standardErrorClose"
        },
        STANDARD_INPUT_CLOSE: {
            value: "standardInputClose"
        },
        STANDARD_OUTPUT_CLOSE: {
            value: "standardOutputClose"
        },
        SUSPEND: {
            value: "suspend"
        },
        TAB_CHILDREN_CHANGE: {
            value: "tabChildrenChange"
        },
        TAB_ENABLED_CHANGE: {
            value: "tabEnabledChange"
        },
        TAB_INDEX_CHANGE: {
            value: "tabIndexChange"
        },
        TEXT_INTERACTION_MODE_CHANGE: {
            value: "textInteractionModeChange"
        },
        TEXTURE_READY: {
            value: "textureReady"
        },
        UNLOAD: {
            value: "unload"
        },
        USER_IDLE: {
            value: "userIdle"
        },
        USER_PRESENT: {
            value: "userPresent"
        },
        VIDEO_FRAME: {
            value: "videoFrame"
        },
        WORKER_STATE: {
            value: "workerState"
        }
    });
    var Kr = function (a, b, c, d) {
        Hr[I](this, a, b, c);
        db(this, d)
    }, Lr = T(Kr, "flash.events.TextEvent", Hr);
    S(Lr, "text", function () {
        return this.__swiffy_v[ce]
    });
    Yp(Lr, "text", function (a) {
        db(this.__swiffy_v, Z(a, "String", ""))
    });
    Xp(Lr, "clone", function () {
        return oq[I](Lr, this[E], this[Pd], this[$c], this[ce])
    });
    Xp(Lr, "toString", function () {
        return this.formatToString("type", "bubbles", "cancelable", "text")
    });
    f[w](Lr, "LINK", {
        value: "link"
    });
    f[w](Lr, "TEXT_INPUT", {
        value: "textInput"
    });
    var Mr = function (a, b, c, d) {
        Kr[I](this, a, b, c, d)
    }, Nr = T(Mr, "flash.events.ErrorEvent", Kr);
    Xp(Nr, "clone", function () {
        return oq[I](Nr, this[E], this[Pd], this[$c], this[ce])
    });
    f[w](Nr, "ERROR", {
        value: "error"
    });
    var Or = T(function (a, b, c, d) {
        Kr[I](this, a, b, c, d)
    }, "flash.events.SecurityErrorEvent", Mr);
    Xp(Or, "clone", function () {
        return oq[I](Or, this[E], this[Pd], this[$c], this[ce])
    });
    f[w](Or, "SECURITY_ERROR", {
        value: "securityError"
    });
    var Qr = T(function (a, b, c, d, e) {
        Kr[I](this, a, b, c, d);
        this.error = e
    }, "flash.events.AsyncErrorEvent", Mr);
    S(Qr, "error", function () {
        return this.__swiffy_v.error
    });
    Yp(Qr, "error", function (a) {
        this.__swiffy_v.error = Z(a, "Error", null)
    });
    Xp(Qr, "clone", function () {
        return oq[I](Qr, this[E], this[Pd], this[$c], this[ce], this.error)
    });
    f[w](Qr, "ASYNC_ERROR", {
        value: "asyncError"
    });
    var Sr = function (a, b, c, d, e, h, k, n, u, y, C) {
        Hr[I](this, a, b, c);
        this.localX = d;
        this.localY = e;
        this.relatedObject = h;
        xb(this, k);
        Ja(this, n);
        Db(this, u);
        this.buttonDown = y;
        this.delta = C;
        a = Rr(this);
        a.On = NaN;
        a.Pn = NaN
    }, Rr = function (a) {
            return a.__swiffy_v
        }, Tr = T(Sr, "flash.events.MouseEvent", Hr);
    S(Tr, "localX", function () {
        return Rr(this).Rn
    });
    Yp(Tr, "localX", function (a) {
        Rr(this).Rn = Z(a, "Number", NaN)
    });
    S(Tr, "localY", function () {
        return Rr(this).Sn
    });
    Yp(Tr, "localY", function (a) {
        Rr(this).Sn = Z(a, "Number", NaN)
    });
    S(Tr, "stageX", function () {
        return Rr(this).On
    });
    S(Tr, "stageY", function () {
        return Rr(this).Pn
    });
    S(Tr, "relatedObject", function () {
        return Rr(this).gf
    });
    Yp(Tr, "relatedObject", function (a) {
        Rr(this).gf = Z(a, "flash.display.InteractiveObject", null)
    });
    S(Tr, "ctrlKey", function () {
        return Rr(this)[$e]
    });
    Yp(Tr, "ctrlKey", function (a) {
        xb(Rr(this), Z(a, "Boolean", !1))
    });
    S(Tr, "altKey", function () {
        return Rr(this)[Tc]
    });
    Yp(Tr, "altKey", function (a) {
        Ja(Rr(this), Z(a, "Boolean", !1))
    });
    S(Tr, "shiftKey", function () {
        return Rr(this)[uf]
    });
    Yp(Tr, "shiftKey", function (a) {
        Db(Rr(this), Z(a, "Boolean", !1))
    });
    S(Tr, "buttonDown", function () {
        return Rr(this).Qn
    });
    Yp(Tr, "buttonDown", function (a) {
        Rr(this).Qn = Z(a, "Boolean", !1)
    });
    S(Tr, "delta", function () {
        return Rr(this).cv
    });
    Yp(Tr, "delta", function (a) {
        Rr(this).cv = Z(a, "int", 0)
    });
    Xp(Tr, "toString", function () {
        return this.formatToString("type", "bubbles", "cancelable", "eventPhase", "localX", "localY", "stageX", "stageY", "relatedObject", "ctrlKey", "altKey", "shiftKey", "buttonDown", "delta")
    });
    Xp(Tr, "updateAfterEvent", function () {
        Y(this, "updateAfterEvent")
    });
    f[qe](Tr, {
        CLICK: {
            value: "click"
        },
        CONTEXT_MENU: {
            value: "contextMenu"
        },
        DOUBLE_CLICK: {
            value: "doubleClick"
        },
        MIDDLE_CLICK: {
            value: "middleClick"
        },
        MIDDLE_MOUSE_DOWN: {
            value: "middleMouseDown"
        },
        MIDDLE_MOUSE_UP: {
            value: "middleMouseUp"
        },
        MOUSE_DOWN: {
            value: "mouseDown"
        },
        MOUSE_MOVE: {
            value: "mouseMove"
        },
        MOUSE_OUT: {
            value: "mouseOut"
        },
        MOUSE_OVER: {
            value: "mouseOver"
        },
        MOUSE_UP: {
            value: "mouseUp"
        },
        MOUSE_WHEEL: {
            value: "mouseWheel"
        },
        RIGHT_CLICK: {
            value: "rightClick"
        },
        RIGHT_MOUSE_DOWN: {
            value: "rightMouseDown"
        },
        RIGHT_MOUSE_UP: {
            value: "rightMouseUp"
        },
        ROLL_OUT: {
            value: "rollOut"
        },
        ROLL_OVER: {
            value: "rollOver"
        }
    });
    var Ur = function (a, b, c) {
        Hr[I](this, a, b, c)
    }, Vr = T(Ur, "flash.events.TimerEvent", Hr);
    Xp(Vr, "clone", function () {
        return oq[I](Vr, this[E], this[Pd], this[$c], this.activating)
    });
    f[qe](Vr, {
        TIMER: {
            value: "timer"
        },
        TIMER_COMPLETE: {
            value: "timerComplete"
        }
    });
    var Wr = T(rq(1001), "flash.events.IEventDispatcher");
    Wr.o = Wr;
    Wr[H].addEventListener = function () {};
    Wr[H].dispatchEvent = function () {};
    Wr[H].hasEventListener = function () {};
    Wr[H].removeEventListener = function () {};
    Wr[H].willTrigger = function () {};
    Zp(Wr.o);
    var Xr = T(function (a, b, c, d) {
        Kr[I](this, a, b, c, d);
        Y(this)
    }, "flash.events.IOErrorEvent", Mr);
    Xp(Xr, "clone", function () {
        return oq[I](Xr, this[E], this[Pd], this[$c], this[ce])
    });
    f[qe](Xr, {
        IO_ERROR: {
            value: "ioError"
        },
        STANDARD_ERROR_IO_ERROR: {
            value: "standardErrorIoError"
        },
        STANDARD_INPUT_IO_ERROR: {
            value: "standardInputIoError"
        },
        STANDARD_OUTPUT_IO_ERROR: {
            value: "standardOutputIoError"
        }
    });
    var Yr = function (a, b, c, d, e) {
        Hr[I](this, a, b, c);
        this.bytesLoaded = d;
        this.bytesTotal = e
    }, Zr = T(Yr, "flash.events.ProgressEvent", Hr);
    S(Zr, "bytesLoaded", function () {
        return this.__swiffy_v.Tu
    });
    Yp(Zr, "bytesLoaded", function (a) {
        this.__swiffy_v.Tu = Z(a, "Number", 0)
    });
    S(Zr, "bytesTotal", function () {
        return this.__swiffy_v.Uu
    });
    Yp(Zr, "bytesTotal", function (a) {
        this.__swiffy_v.Uu = Z(a, "Number", 0)
    });
    Xp(Zr, "clone", function () {
        return oq[I](Zr, this[E], this[Pd], this[$c], this.bytesLoaded, this.bytesTotal)
    });
    Xp(Zr, "toString", function () {
        return this.formatToString("type", "bubbles", "cancelable", "bytesLoaded", "bytesTotal")
    });
    f[qe](Zr, {
        PROGRESS: {
            value: "progress"
        },
        SOCKET_DATA: {
            value: "socketData"
        },
        STANDARD_ERROR_DATA: {
            value: "standardErrorData"
        },
        STANDARD_INPUT_PROGRESS: {
            value: "standardInputProgress"
        },
        STANDARD_OUTPUT_DATA: {
            value: "standardOutputData"
        }
    });
    var $r = function (a, b, c, d) {
        Hr[I](this, a, b, c);
        ta(this, d);
        this.responseURL = null;
        Y(this)
    }, as = T($r, "flash.events.HTTPStatusEvent", Hr);
    S(as, "status", function () {
        return this.__swiffy_v[nc]
    });
    Yp(as, "status", function (a) {
        ta(this.__swiffy_v, Z(a, "Number", 0))
    });
    Xp(as, "clone", function () {
        return oq[I](as, this[E], this[Pd], this[$c], this[nc])
    });
    Xp(as, "toString", function () {
        return this.formatToString("type", "bubbles", "cancelable", "eventPhase", "status", "responseURL")
    });
    f[qe](as, {
        HTTP_RESPONSE_STATUS: {
            value: "httpResponseStatus"
        },
        HTTP_STATUS: {
            value: "httpStatus"
        }
    });
    var bs = function (a, b, c) {
        this.ad = a;
        this.Bm = b;
        this.Qt = c
    }, Iq = function (a) {
            a = Z(a, "flash.events.IEventDispatcher", null);
            f[w](this, "__swiffy_v", {
                value: {
                    target: a || this
                }
            })
        };
    T(Iq, "flash.events.EventDispatcher", void 0, [Wr]);
    var cs = {}, ds = function (a, b) {
            for (var c = 1; c < arguments[G]; ++c) cs[arguments[c]] = a
        };
    ds(Iq, "activate", "deactivate");
    var Kq = function (a, b) {
        var c = cs[a];
        return !!c && b instanceof c
    }, Lq = function (a, b) {
            var c = b.__swiffy_d;
            c instanceof ok && c.Hd() || (c = new Hr(a, !1, !1), Ir(c).Vj = !0, b[fc](c))
        };
    Iq[H].addEventListener = function (a, b, c, d) {
        this.__swiffy_listeners || f[w](this, "__swiffy_listeners", {
            value: {}
        });
        var e = this.__swiffy_listeners,
            h = e[a];
        h || (e[a] = h = []);
        d |= 0;
        c = !! c;
        for (e = 0; e < h[G]; ++e)
            if (h[e].ad == b && h[e].Bm == c) return;
        0 == h[G] && Kq(a, this) && ao.Tt(a, this);
        for (e = h[G]; 0 < e && d > h[e - 1].Qt; --e);
        h[Af](e, 0, new bs(b, c, d))
    };
    Iq[H].dispatchEvent = function (a) {
        var b = Ir(a),
            c = this.__swiffy_v;
        Ab(b, c && c[jf] || this);
        if (!b.Vj) {
            for (var d = [], c = this; c = c[ud];) d[D](c);
            b.eventPhase = 1;
            for (c = d[G] - 1; 0 <= c && !b.ak; c--) jb(b, d[c]), es(d[c], a, !0)
        }
        b.eventPhase = 2;
        jb(b, this);
        es(this, a);
        if (!b.Vj && b[Pd])
            for (b.eventPhase = 3, c = 0; c < d[G] && !b.ak; c++) jb(b, d[c]), es(d[c], a);
        return !b.defaultPrevented
    };
    var es = function (a, b, c) {
        var d = a.__swiffy_listeners;
        a = Ir(b);
        if (d && d[a[E]])
            for (var d = d[a[E]], e = 0; e < d[G] && !a.oq; e++) d[e].Bm == !! c && d[e].ad[I](null, b)
    };
    Iq[H].removeEventListener = function (a, b, c) {
        var d = this.__swiffy_listeners;
        if (d && d[a] && d[a][G]) {
            d = d[a];
            c = !! c;
            for (var e = 0; e < d[G]; e++) d[e].ad == b && d[e].Bm == c && d[Af](e--, 1);
            0 == d[G] && Kq(a, this) && ao.Ap(a, this)
        }
    };
    Iq[H].hasEventListener = function (a) {
        var b = this.__swiffy_listeners;
        return !!b && !! b[a] && b[a][G]
    };
    Iq[H].willTrigger = function (a) {
        var b = this;
        do
            if (b.hasEventListener(a)) return !0; while (b = b[ud]);
        return !1
    };
    var fs = function (a, b, c, d, e) {
        Hr[I](this, a, b, c);
        this.contextMenuOwner = e;
        this.isMouseTargetInaccessible = !1;
        this.mouseTarget = d
    }, gs = function (a) {
            return a.__swiffy_v
        }, hs = T(fs, "flash.events.ContextMenuEvent", Hr);
    S(Jr, "contextMenuOwner", function () {
        return gs(this).Xu
    });
    Yp(Jr, "contextMenuOwner", function (a) {
        gs(this).Xu = Z(a, "flash.display.InteractiveObject", null)
    });
    S(Jr, "isMouseTargetInaccessible", function () {
        return gs(this).rv
    });
    Yp(Jr, "isMouseTargetInaccessible", function (a) {
        gs(this).rv = Z(a, "Boolean", !1)
    });
    S(Jr, "mouseTarget", function () {
        return gs(this).xv
    });
    Yp(Jr, "mouseTarget", function (a) {
        gs(this).xv = Z(a, "flash.display.InteractiveObject", null)
    });
    Xp(hs, "clone", function () {
        return oq[I](fs, this[E], this[Pd], this[$c], this.mouseTarget, this.contextMenuOwner)
    });
    f[w](hs, "MENU_ITEM_SELECT", {
        value: "menuItemSelect"
    });
    f[w](hs, "MENU_SELECT", {
        value: "menuSelect"
    });
    var is = T(function (a, b, c, d, e) {
        Hr[I](this, a, b, c);
        this.code = d;
        this.level = e
    }, "flash.events.StatusEvent", Hr);
    S(is, "code", function () {
        return this.__swiffy_v[Mc]
    });
    Yp(is, "code", function (a) {
        this.__swiffy_v.code = Z(a, "String")
    });
    S(is, "level", function () {
        return this.__swiffy_v.vv
    });
    Yp(is, "level", function (a) {
        this.__swiffy_v.vv = Z(a, "String")
    });
    Xp(is, "clone", function () {
        return oq[I](is, this[E], this[Pd], this[$c], this[Mc], this.level)
    });
    f[w](is, "STATUS", {
        value: "status"
    });
    var js = function (a, b, c, d) {
        Hr[I](this, a, b, c);
        this.activating = d
    }, ks = T(js, "flash.events.ActivityEvent", Hr);
    S(ks, "activating", function () {
        return this.__swiffy_v.Ou
    });
    Yp(ks, "activating", function (a) {
        this.__swiffy_v.Ou = Z(a, "Boolean", !1)
    });
    Xp(ks, "clone", function () {
        return oq[I](Jr, this[E], this[Pd], this[$c], this.activating)
    });
    Xp(ks, "toString", function () {
        return this.formatToString("type", "bubbles", "cancelable", "eventPhase", "status", "activating")
    });
    f[w](ks, "ACTIVITY", {
        value: "activity"
    });
    var ls = function (a) {
        return a.__swiffy_v
    }, ms = T(function (a, b, c, d, e, h, k) {
            Hr[I](this, a, b, c);
            this.relatedObject = L(d) ? d : null;
            Db(this, L(e) ? e : !1);
            xa(this, L(h) ? h : 0);
            this.direction = L(k) ? k : "none";
            this.isRelatedObjectInaccessible = !1
        }, "flash.events.FocusEvent", Hr);
    S(ms, "direction", function () {
        return ls(this).direction
    });
    S(ms, "isRelatedObjectInaccessible", function () {
        return ls(this).sv
    });
    S(ms, "keyCode", function () {
        return ls(this)[tc]
    });
    S(ms, "relatedObject", function () {
        return ls(this).gf
    });
    S(ms, "shiftKey", function () {
        return ls(this)[uf]
    });
    Yp(ms, "direction", function (a) {
        ls(this).direction = Z(a, "String")
    });
    Yp(ms, "isRelatedObjectInaccessible", function (a) {
        ls(this).sv = Z(a, "Boolean")
    });
    Yp(ms, "keyCode", function (a) {
        xa(ls(this), Z(a, "uint"))
    });
    Yp(ms, "relatedObject", function (a) {
        ls(this).gf = Z(a, "flash.display.InteractiveObject")
    });
    Yp(ms, "shiftKey", function (a) {
        Db(ls(this), Z(a, "Boolean"))
    });
    f[qe](ms, {
        FOCUS_IN: {
            value: "focusIn"
        },
        FOCUS_OUT: {
            value: "focusOut"
        },
        KEY_FOCUS_CHANGE: {
            value: "keyFocusChange"
        },
        MOUSE_FOCUS_CHANGE: {
            value: "mouseFocusChange"
        }
    });
    var ns = T(function (a, b, c, d, e) {
        js[I](this, a, b, c);
        a = this.__swiffy_v;
        a.fullScreen = Z(d, "Boolean", !1);
        a.qv = Z(e, "Boolean", !1)
    }, "flash.events.FullScreenEvent", js);
    S(ns, "fullScreen", function () {
        return this.__swiffy_v.fullScreen
    });
    S(ns, "interactive", function () {
        return this.__swiffy_v.qv
    });
    Xp(ns, "clone", function () {
        return oq[I](ns, this[E], this[Pd], this[$c], this.activating, this.fullScreen, this.interactive)
    });
    Xp(ns, "toString", function () {
        return this.formatToString("type", "bubbles", "cancelable", "eventPhase", "activating", "fullScreen", "interactive")
    });
    f[w](ns, "FULL_SCREEN", {
        value: "fullScreen"
    });
    f[w](ns, "FULL_SCREEN_INTERACTIVE_ACCEPTED", {
        value: "fullScreenInteractiveAccepted"
    });
    var os = function (a) {
        return a.__swiffy_v
    }, ps = T(function (a, b, c, d, e, h, k, n, u, y, C) {
            Hr[I](this, a, b, c);
            this.charCodeValue = L(d) ? d : 0;
            this.keyCodeValue = L(e) ? e : 0;
            this.keyLocationValue = L(h) ? h : 0;
            this.ctrlKeyValue = L(k) ? k : !1;
            this.altKeyValue = L(n) ? n : !1;
            this.shiftKeyValue = L(u) ? u : !1;
            this.controlKeyValue = L(y) ? y : !1;
            this.commandKeyValue = L(C) ? C : !1
        }, "flash.events.KeyboardEvent", Hr);
    S(ps, "charCodeValue", function () {
        return os(this).Vu
    });
    S(ps, "keyCodeValue", function () {
        return os(this).tv
    });
    S(ps, "keyLocationValue", function () {
        return os(this).uv
    });
    S(ps, "ctrlKeyValue", function () {
        return os(this).av
    });
    S(ps, "altKeyValue", function () {
        return os(this).Ru
    });
    S(ps, "shiftKeyValue", function () {
        return os(this).Zv
    });
    S(ps, "controlKeyValue", function () {
        return os(this).Yu
    });
    S(ps, "commandKeyValue", function () {
        return os(this).Wu
    });
    Yp(ps, "charCodeValue", function (a) {
        os(this).Vu = Z(a, "uint")
    });
    Yp(ps, "keyCodeValue", function (a) {
        os(this).tv = Z(a, "uint")
    });
    Yp(ps, "keyLocationValue", function (a) {
        os(this).uv = Z(a, "uint")
    });
    Yp(ps, "ctrlKeyValue", function (a) {
        os(this).av = Z(a, "Boolean")
    });
    Yp(ps, "altKeyValue", function (a) {
        os(this).Ru = Z(a, "Boolean")
    });
    Yp(ps, "shiftKeyValue", function (a) {
        os(this).Zv = Z(a, "Boolean")
    });
    Yp(ps, "controlKeyValue", function (a) {
        os(this).Yu = Z(a, "Boolean")
    });
    Yp(ps, "commandKeyValue", function (a) {
        os(this).Wu = Z(a, "Boolean")
    });
    Xp(ps, "updateAfterEvent", function () {
        Y(this, "updateAfterEvent")
    });
    f[qe](ps, {
        KEY_DOWN: {
            value: "keyDown"
        },
        KEY_UP: {
            value: "keyUp"
        }
    });
    var qs = T(function (a, b, c, d) {
        Hr[I](this, a, b, c);
        this.info = L(d) ? d : null
    }, "flash.events.NetStatusEvent", Hr);
    S(qs, "info", function () {
        return this.__swiffy_v.info
    });
    Yp(qs, "info", function (a) {
        this.__swiffy_v.info = Z(a, "Object")
    });
    f[w](qs, "NET_STATUS", {
        value: "netStatus"
    });
    var rs = rq(2012);
    rs.o = T(rs, "flash.external.ExternalInterface");
    X(rs.o, "available", !0);
    W(rs.o, "marshallExceptions", "Boolean", !1);
    f[w](rs.o, "objectID", {
        get: function () {
            return ao.a[oc]()
        }
    });
    rs.o.addCallback = function (a, b) {
        a = Z(a, "String");
        b = Z(b, "Function");
        var c = ao.a.Ed,
            d = c[a];
        if (!d || d.__swiffy_external) b ? (d = rs.vs(b), f[w](d, "__swiffy_external", {
            value: !0
        }), c[a] = d) : delete c[a]
    };
    rs.vs = function (a) {
        return function () {
            try {
                var b = rs.Fp(arguments),
                    c = a[B](null, b);
                return rs.Gj(c)
            } catch (d) {
                if (rs.o.marshallExceptions) throw fa("Error calling method on Swiffy.");
                return null
            }
        }
    };
    Bb(rs.o, function (a, b) {
        a = Z(a, "String");
        try {
            var c = rs.Cp(m[H][ee][I](arguments, 1)),
                d = (new Function("return (" + a + ")(" + c + ");"))();
            return rs.Gj(d)
        } catch (e) {
            if (rs.o.marshallExceptions) throw new wl(new nr(e));
            return null
        }
    });
    rs.Cp = function (a) {
        a = a.map(rs.Wq);
        return a[Cf](",")
    };
    rs.Wq = function (a) {
        switch (Kf(a)) {
        case "undefined":
        case "null":
        case "boolean":
        case "number":
            return q(a);
        case "string":
            return eg(a);
        case "array":
            return "[" + rs.Cp(a) + "]";
        case "object":
            if (a instanceof Date) return "new Date(" + a.getTime() + ")";
            var b = [],
                c;
            for (c in a) b[D](eg(c) + ":" + rs.Wq(a[c]));
            return "{" + b[Cf](",") + "}";
        default:
            return "null"
        }
    };
    rs.Fp = function (a) {
        return ig(a, rs.Gj)
    };
    rs.Gj = function (a) {
        switch (Kf(a)) {
        case "undefined":
        case "null":
        case "boolean":
        case "number":
        case "string":
            return a;
        case "array":
            return rs.Fp(a);
        case "object":
            if (a instanceof Date) a = new Date(a.getTime());
            else {
                var b = rs.Gj,
                    c = {}, d;
                for (d in a) c[d] = b[I](void 0, a[d], d, a);
                a = c
            }
            return a;
        default:
            return null
        }
    };
    var ss = function (a, b, c, d, e, h, k, n) {
        a = Z(a, "Number", 1);
        b = Z(b, "Number", 1);
        c = Z(c, "Number", 1);
        d = Z(d, "Number", 1);
        e = Z(e, "Number", 0);
        h = Z(h, "Number", 0);
        k = Z(k, "Number", 0);
        n = Z(n, "Number", 0);
        f[w](this, "__swiffy_v", {
            writable: !0,
            value: new vi(a, e, b, h, c, k, d, n)
        })
    };
    T(ss, "flash.geom.ColorTransform");
    var ts = function (a) {
        return new ss(a.Y, a.X, a.W, a.O, a.T, a.S, a.Q, a.U)
    };
    f[w](ss[H], "redMultiplier", {
        get: function () {
            return this.__swiffy_v.Y
        },
        set: function (a) {
            a = Z(a, "Number");
            var b = this.__swiffy_v;
            this.__swiffy_v = new vi(a, b.T, b.X, b.S, b.W, b.Q, b.O, b.U)
        }
    });
    f[w](ss[H], "greenMultiplier", {
        get: function () {
            return this.__swiffy_v.X
        },
        set: function (a) {
            a = Z(a, "Number");
            var b = this.__swiffy_v;
            this.__swiffy_v = new vi(b.Y, b.T, a, b.S, b.W, b.Q, b.O, b.U)
        }
    });
    f[w](ss[H], "blueMultiplier", {
        get: function () {
            return this.__swiffy_v.W
        },
        set: function (a) {
            a = Z(a, "Number");
            var b = this.__swiffy_v;
            this.__swiffy_v = new vi(b.Y, b.T, b.X, b.S, a, b.Q, b.O, b.U)
        }
    });
    f[w](ss[H], "alphaMultiplier", {
        get: function () {
            return this.__swiffy_v.O
        },
        set: function (a) {
            a = Z(a, "Number");
            var b = this.__swiffy_v;
            this.__swiffy_v = new vi(b.Y, b.T, b.X, b.S, b.W, b.Q, a, b.U)
        }
    });
    f[w](ss[H], "redOffset", {
        get: function () {
            return this.__swiffy_v.T
        },
        set: function (a) {
            a = Z(a, "Number");
            var b = this.__swiffy_v;
            this.__swiffy_v = new vi(b.Y, a, b.X, b.S, b.W, b.Q, b.O, b.U)
        }
    });
    f[w](ss[H], "greenOffset", {
        get: function () {
            return this.__swiffy_v.S
        },
        set: function (a) {
            a = Z(a, "Number");
            var b = this.__swiffy_v;
            this.__swiffy_v = new vi(b.Y, b.T, b.X, a, b.W, b.Q, b.O, b.U)
        }
    });
    f[w](ss[H], "blueOffset", {
        get: function () {
            return this.__swiffy_v.Q
        },
        set: function (a) {
            a = Z(a, "Number");
            var b = this.__swiffy_v;
            this.__swiffy_v = new vi(b.Y, b.T, b.X, b.S, b.W, a, b.O, b.U)
        }
    });
    f[w](ss[H], "alphaOffset", {
        get: function () {
            return this.__swiffy_v.U
        },
        set: function (a) {
            a = Z(a, "Number");
            var b = this.__swiffy_v;
            this.__swiffy_v = new vi(b.Y, b.T, b.X, b.S, b.W, b.Q, b.O, a)
        }
    });
    f[w](ss[H], "color", {
        get: function () {
            return (this.__swiffy_v.T << 16 | this.__swiffy_v.S << 8 | this.__swiffy_v.Q) >>> 0
        },
        set: function (a) {
            a = Z(a, "uint");
            var b = this.__swiffy_v;
            this.__swiffy_v = new vi(0, a >> 16 & 255, 0, a >> 8 & 255, 0, a & 255, b.O, b.U)
        }
    });
    ra(ss[H], function (a) {
        a = Z(a, "flash.geom.ColorTransform");
        this.__swiffy_v = this.__swiffy_v.Sl(a.__swiffy_v)
    });
    Ia(ss[H], function () {
        return "(redMultiplier=" + this.__swiffy_v.Y + ", greenMultiplier=" + this.__swiffy_v.X + ", blueMultiplier=" + this.__swiffy_v.W + ", alphaMultiplier=" + this.__swiffy_v.O + ", redOffset=" + this.__swiffy_v.T + ", greenOffset=" + this.__swiffy_v.S + ", blueOffset=" + this.__swiffy_v.Q + ", alphaOffset=" + this.__swiffy_v.U + ")"
    });
    var Br = function (a, b) {
        a = Z(a, "Number", 0);
        b = Z(b, "Number", 0);
        W(this, "x", "Number", a);
        W(this, "y", "Number", b)
    }, us = T(Br, "flash.geom.Point");
    f[w](Br[H], "length", {
        get: function () {
            return l[Fe](this.x * this.x + this.y * this.y)
        }
    });
    Br[H].add = function (a) {
        return new Br(this.x + a.x, this.y + a.y)
    };
    Br[H].clone = function () {
        return new Br(this.x, this.y)
    };
    Br[H].copyFrom = function (a) {
        this.x = a.x;
        this.y = a.y
    };
    Ya(us, function (a, b) {
        return l[Fe]((a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y))
    });
    Br[H].equals = function (a) {
        return this.x == a.x && this.y == a.y
    };
    us.interpolate = function (a, b, c) {
        return new Br(a.x * c + b.x * (1 - c), a.y * c + b.y * (1 - c))
    };
    Fb(Br[H], function (a) {
        a /= this[G];
        this.x *= a;
        this.y *= a
    });
    Ea(Br[H], function (a, b) {
        this.x += a;
        this.y += b
    });
    us.polar = function (a, b) {
        return new Br(a * l.cos(b), a * l.sin(b))
    };
    Br[H].setTo = function (a, b) {
        this.x = a;
        this.y = b
    };
    Br[H].subtract = function (a) {
        return new Br(this.x - a.x, this.y - a.y)
    };
    Ia(Br[H], function () {
        return "(x=" + this.x + ", y=" + this.y + ")"
    });
    var vs = function (a, b, c, d) {
        a = Z(a, "Number", 0);
        b = Z(b, "Number", 0);
        c = Z(c, "Number", 0);
        d = Z(d, "Number", 0);
        W(this, "x", "Number", a);
        W(this, "y", "Number", b);
        W(this, "width", "Number", c);
        W(this, "height", "Number", d)
    };
    T(vs, "flash.geom.Rectangle");
    f[w](vs[H], "top", {
        get: function () {
            return this.y
        },
        set: function (a) {
            this.y = Z(a, "Number")
        }
    });
    f[w](vs[H], "left", {
        get: function () {
            return this.x
        },
        set: function (a) {
            this.x = Z(a, "Number")
        }
    });
    f[w](vs[H], "bottom", {
        get: function () {
            return this.y + this[Rd]
        },
        set: function (a) {
            a = Z(a, "Number");
            Za(this, a - this.y)
        }
    });
    f[w](vs[H], "right", {
        get: function () {
            return this.x + this[Tb]
        },
        set: function (a) {
            a = Z(a, "Number");
            na(this, a - this.x)
        }
    });
    f[w](vs[H], "topLeft", {
        get: function () {
            return new Br(this.left, this.top)
        },
        set: function (a) {
            a = Z(a, "flash.geom.Point");
            kb(this, a.x);
            this.top = a.y
        }
    });
    f[w](vs[H], "bottomRight", {
        get: function () {
            return new Br(this[Td], this[Cd])
        },
        set: function (a) {
            a = Z(a, "flash.geom.Point");
            this.right = a.x;
            this.bottom = a.y
        }
    });
    f[w](vs[H], "size", {
        get: function () {
            return new Br(this[Tb], this[Rd])
        },
        set: function (a) {
            a = Z(a, "flash.geom.Point");
            na(this, a.x);
            Za(this, a.y)
        }
    });
    vs[H].clone = function () {
        return new vs(this.x, this.y, this[Tb], this[Rd])
    };
    Wa(vs[H], function (a, b) {
        return this.x <= a && this.y <= b && a < this[Td] && b < this[Cd]
    });
    vs[H].containsPoint = function (a) {
        return this[Id](a.x, a.y)
    };
    vs[H].containsRect = function (a) {
        var b = this[Td],
            c = this[Cd],
            d = a[Td],
            e = a[Cd];
        return this.x <= a.x && this.y <= a.y && a.x < b && a.y < c && this.x < d && this.y < e && d <= b && e <= c
    };
    vs[H].copyFrom = function (a) {
        this.x = a.x;
        this.y = a.y;
        na(this, a[Tb]);
        Za(this, a[Rd])
    };
    vs[H].equals = function (a) {
        return this.x == a.x && this.y == a.y && this[Tb] == a[Tb] && this[Rd] == a[Rd]
    };
    vs[H].inflate = function (a, b) {
        this.x -= a;
        this.y -= b;
        na(this, this[Tb] + 2 * a);
        Za(this, this[Rd] + 2 * b)
    };
    vs[H].inflatePoint = function (a) {
        this.inflate(a.x, a.y)
    };
    vs[H].intersection = function (a) {
        if (this.intersects(a)) {
            var b = l.max(this.x, a.x),
                c = l.max(this.y, a.y),
                d = l.min(this[Td], a[Td]);
            a = l.min(this[Cd], a[Cd]);
            return new vs(b, c, d - b, a - c)
        }
        return new vs
    };
    vs[H].intersects = function (a) {
        return 0 < a[Tb] && 0 < a[Rd] && 0 < this[Tb] && 0 < this[Rd] && a.x < this[Td] && a.y < this[Cd] && a[Td] > this.x && a[Cd] > this.y
    };
    vs[H].isEmpty = function () {
        return 0 >= this[Tb] || 0 >= this[Rd]
    };
    Ea(vs[H], function (a, b) {
        this.x += a;
        this.y += b
    });
    vs[H].offsetPoint = function (a) {
        this[Kc](a.x, a.y)
    };
    vs[H].setEmpty = function () {
        this.y = this.x = 0;
        na(this, 0);
        Za(this, 0)
    };
    vs[H].setTo = function (a, b, c, d) {
        this.x = a;
        this.y = b;
        na(this, c);
        Za(this, d)
    };
    vs[H].union = function (a) {
        if (this.isEmpty()) return a.clone();
        if (a.isEmpty()) return this.clone();
        var b = l.min(this.x, a.x),
            c = l.min(this.y, a.y),
            d = l.max(this[Td], a[Td]);
        a = l.max(this[Cd], a[Cd]);
        return new vs(b, c, d - b, a - c)
    };
    Ia(vs[H], function () {
        return "(x=" + this.x + ", y=" + this.y + ", w=" + this[Tb] + ", h=" + this[Rd] + ")"
    });
    var ws = function (a, b, c, d) {
        this.w = L(d) ? p(d) : 0;
        this.x = L(a) ? p(a) : 0;
        this.y = L(b) ? p(b) : 0;
        this.z = L(c) ? p(c) : 0
    }, xs = T(ws, "flash.geom.Vector3D");
    f[w](ws[H], "lengthSquared", {
        get: function () {
            return this.x * this.x + this.y * this.y + this.z * this.z
        }
    });
    f[w](ws[H], "length", {
        get: function () {
            return l[Fe](this.lengthSquared)
        }
    });
    f[w](xs, "X_AXIS", {
        value: new ws(1, 0, 0, 0)
    });
    f[w](xs, "Y_AXIS", {
        value: new ws(0, 1, 0, 0)
    });
    f[w](xs, "Z_AXIS", {
        value: new ws(0, 0, 1, 0)
    });
    ws[H].add = function (a) {
        return new ws(this.x + a.x, this.y + a.y, this.z + a.z)
    };
    xs.angleBetween = function () {
        return 0
    };
    ws[H].clone = function () {
        return new ws(this.x, this.y, this.z, this.w)
    };
    ws[H].copyFrom = function (a) {
        this.x = a.x;
        this.y = a.y;
        this.z = a.z;
        this.w = a.w
    };
    ws[H].crossProduct = function () {
        return new ws
    };
    ws[H].decrementBy = function () {};
    Ya(xs, function (a, b) {
        return a.subtract(b)[G]
    });
    ws[H].dotProduct = function () {
        return 0
    };
    ws[H].equals = function (a, b) {
        return this.x == a.x && this.y == a.y && this.z == a.z && (!b || this.w == a.w)
    };
    ws[H].incrementBy = function () {};
    ws[H].nearEquals = function () {
        return !1
    };
    ws[H].negate = function () {};
    Fb(ws[H], function () {
        return 0
    });
    ws[H].project = function () {};
    ws[H].scaleBy = function () {};
    ws[H].setTo = function (a, b, c) {
        this.x = p(a);
        this.y = p(b);
        this.z = p(c)
    };
    ws[H].subtract = function (a) {
        return new ws(this.x - a.x, this.y - a.y, this.z - a.z)
    };
    Ia(ws[H], function () {
        return "Vector3D(" + this.x + ", " + this.y + ", " + this.z + ")"
    });
    var ys = function (a, b, c, d, e, h) {
        a = Z(a, "Number", 1);
        b = Z(b, "Number", 0);
        c = Z(c, "Number", 0);
        d = Z(d, "Number", 1);
        e = Z(e, "Number", 0);
        h = Z(h, "Number", 0);
        f[w](this, "__swiffy_v", {
            writable: !0,
            value: new si(a, b, c, d, e, h)
        })
    };
    T(ys, "flash.geom.Matrix");
    var zs = function (a) {
        return new ys(a.p, a.s, a.n, a.l, a.j / 20, a.k / 20)
    };
    f[w](ys[H], "a", {
        get: function () {
            return this.__swiffy_v.p
        },
        set: function (a) {
            a = Z(a, "Number");
            var b = this.__swiffy_v;
            this.__swiffy_v = new si(a, b.s, b.n, b.l, b.j, b.k)
        }
    });
    f[w](ys[H], "b", {
        get: function () {
            return this.__swiffy_v.s
        },
        set: function (a) {
            a = Z(a, "Number");
            var b = this.__swiffy_v;
            this.__swiffy_v = new si(b.p, a, b.n, b.l, b.j, b.k)
        }
    });
    f[w](ys[H], "c", {
        get: function () {
            return this.__swiffy_v.n
        },
        set: function (a) {
            a = Z(a, "Number");
            var b = this.__swiffy_v;
            this.__swiffy_v = new si(b.p, b.s, a, b.l, b.j, b.k)
        }
    });
    f[w](ys[H], "d", {
        get: function () {
            return this.__swiffy_v.l
        },
        set: function (a) {
            a = Z(a, "Number");
            var b = this.__swiffy_v;
            this.__swiffy_v = new si(b.p, b.s, b.n, a, b.j, b.k)
        }
    });
    f[w](ys[H], "tx", {
        get: function () {
            return this.__swiffy_v.j
        },
        set: function (a) {
            a = Z(a, "Number");
            var b = this.__swiffy_v;
            this.__swiffy_v = b.hd(a, b.k)
        }
    });
    f[w](ys[H], "ty", {
        get: function () {
            return this.__swiffy_v.k
        },
        set: function (a) {
            a = Z(a, "Number");
            var b = this.__swiffy_v;
            this.__swiffy_v = b.hd(b.j, a)
        }
    });
    ys[H].clone = function () {
        var a = new ys;
        a.__swiffy_v = this.__swiffy_v;
        return a
    };
    ra(ys[H], function (a) {
        a = Z(a, "flash.geom.Matrix");
        this.__swiffy_v = this.__swiffy_v[Ad](a.__swiffy_v)
    });
    ys[H].copyColumnFrom = function (a, b) {
        a = Z(a, "uint");
        b = Z(b, "flash.geom.Vector3D");
        var c = this.__swiffy_v.p,
            d = this.__swiffy_v.s,
            e = this.__swiffy_v.n,
            h = this.__swiffy_v.l,
            k = this.__swiffy_v.j,
            n = this.__swiffy_v.k;
        switch (a) {
        case 0:
            c = b.x;
            d = b.y;
            break;
        case 1:
            e = b.x;
            h = b.y;
            break;
        case 2:
            k = b.x;
            n = b.y;
            break;
        default:
            return
        }
        this.__swiffy_v = new si(c, d, e, h, k, n)
    };
    ys[H].copyColumnTo = function (a, b) {
        a = Z(a, "uint");
        b = Z(b, "flash.geom.Vector3D");
        switch (a) {
        case 0:
            b.x = this.__swiffy_v.p;
            b.y = this.__swiffy_v.s;
            b.z = 0;
            break;
        case 1:
            b.x = this.__swiffy_v.n;
            b.y = this.__swiffy_v.l;
            b.z = 0;
            break;
        case 2:
            b.x = this.__swiffy_v.j, b.y = this.__swiffy_v.k, b.z = 1
        }
    };
    ys[H].copyFrom = function (a) {
        a = Z(a, "flash.geom.Matrix");
        this.__swiffy_v = a.__swiffy_v
    };
    ys[H].copyRowFrom = function (a, b) {
        a = Z(a, "uint");
        b = Z(b, "flash.geom.Vector3D");
        var c = this.__swiffy_v.p,
            d = this.__swiffy_v.s,
            e = this.__swiffy_v.n,
            h = this.__swiffy_v.l,
            k = this.__swiffy_v.j,
            n = this.__swiffy_v.k;
        switch (a) {
        case 0:
            c = b.x;
            e = b.y;
            k = b.z;
            break;
        case 1:
            d = b.x;
            h = b.y;
            n = b.z;
            break;
        default:
            return
        }
        this.__swiffy_v = new si(c, d, e, h, k, n)
    };
    ys[H].copyRowTo = function (a, b) {
        a = Z(a, "uint");
        b = Z(b, "flash.geom.Vector3D");
        switch (a) {
        case 0:
            b.x = this.__swiffy_v.p;
            b.y = this.__swiffy_v.n;
            b.z = this.__swiffy_v.j;
            break;
        case 1:
            b.x = this.__swiffy_v.n;
            b.y = this.__swiffy_v.l;
            b.z = this.__swiffy_v.k;
            break;
        case 2:
            b.x = 0, b.y = 0, b.z = 1
        }
    };
    ys[H].createBox = function (a, b, c, d, e) {
        a = Z(a, "Number");
        b = Z(b, "Number");
        c = Z(c, "Number", 0);
        d = Z(d, "Number", 0);
        e = Z(e, "Number", 0);
        this.__swiffy_v = ti.Wg(-c).je(a, b)[Je](d, e)
    };
    ys[H].createGradientBox = function (a, b, c, d, e) {
        a = Z(a, "Number");
        b = Z(b, "Number");
        c = Z(c, "Number", 0);
        d = Z(d, "Number", 0);
        e = Z(e, "Number", 0);
        this.__swiffy_v = ti.Wg(-c).je(a / 1638.4, b / 1638.4)[Je](a / 2 + d, b / 2 + e)
    };
    ys[H].deltaTransformPoint = function (a) {
        a = Z(a, "flash.geom.Point");
        return new Br(this.__swiffy_v.p * a.x + this.__swiffy_v.n * a.y, this.__swiffy_v.s * a.x + this.__swiffy_v.l * a.y)
    };
    ys[H].identity = function () {
        this.__swiffy_v = ti
    };
    ys[H].invert = function () {
        this.__swiffy_v = this.__swiffy_v.oc()
    };
    ys[H].rotate = function (a) {
        a = Z(a, "Number");
        this.__swiffy_v = this.__swiffy_v.Wg(-a)
    };
    ys[H].scale = function (a, b) {
        a = Z(a, "Number");
        b = Z(b, "Number");
        this.__swiffy_v = this.__swiffy_v.je(a, b)
    };
    ys[H].setTo = function (a, b, c, d, e, h) {
        a = Z(a, "Number");
        b = Z(b, "Number");
        c = Z(c, "Number");
        d = Z(d, "Number");
        e = Z(e, "Number");
        h = Z(h, "Number");
        this.__swiffy_v = new si(a, b, c, d, e, h)
    };
    ys[H].transformPoint = function (a) {
        a = Z(a, "flash.geom.Point");
        return new Br(this.__swiffy_v.p * a.x + this.__swiffy_v.n * a.y + this.__swiffy_v.j, this.__swiffy_v.s * a.x + this.__swiffy_v.l * a.y + this.__swiffy_v.k)
    };
    ys[H].translate = function (a, b) {
        a = Z(a, "Number");
        b = Z(b, "Number");
        this.__swiffy_v = this.__swiffy_v[Je](a, b)
    };
    Ia(ys[H], function () {
        return "(a=" + this.__swiffy_v.p + ", b=" + this.__swiffy_v.s + ", c=" + this.__swiffy_v.n + ", d=" + this.__swiffy_v.l + ", tx=" + this.__swiffy_v.j + ", ty=" + this.__swiffy_v.k + ")"
    });
    var As = function (a) {
        a = Z(a, "flash.display.DisplayObject");
        f[w](this, "__swiffy_d", {
            value: a.__swiffy_d
        })
    };
    T(As, "flash.geom.Transform");
    f[w](As[H], "colorTransform", {
        get: function () {
            return ts(this.__swiffy_d.xb)
        },
        set: function (a) {
            a = Z(a, "flash.geom.ColorTransform");
            var b = this.__swiffy_d;
            b.qc(a.__swiffy_v);
            b.Ka()
        }
    });
    f[w](As[H], "concatenatedColorTransform", {
        get: function () {
            return ts(this.__swiffy_d.zb())
        }
    });
    f[w](As[H], "concatenatedMatrix", {
        get: function () {
            return zs(this.__swiffy_d.na())
        }
    });
    f[w](As[H], "matrix", {
        get: function () {
            return zs(this.__swiffy_d.P())
        },
        set: function (a) {
            a = Z(a, "flash.geom.Matrix");
            var b = this.__swiffy_d;
            a = a.__swiffy_v;
            b[hc](a.hd(20 * a.j, 20 * a.k));
            b.Ka()
        }
    });
    f[w](As[H], "pixelBounds", {
        get: function () {
            var a = this.__swiffy_d,
                b = a.Ta().cd().J();
            b.u(a.na());
            return new vs(l[$b](b.c / 20), l[$b](b.d / 20), l[Yb]((b.F - b.c) / 20), l[Yb]((b.D - b.d) / 20))
        }
    });
    var Bs = T(rq(1001), "flash.display.IBitmapDrawable");
    Bs.o = Bs;
    Zp(Bs.o);
    var Cs = T(function () {}, "flash.display.PixelSnapping");
    f[qe](Cs, {
        ALWAYS: {
            value: "always"
        },
        AUTO: {
            value: "auto"
        },
        NEVER: {
            value: "never"
        }
    });
    var Uq = function (a, b, c, d) {
        a = Z(a, "int");
        b = Z(b, "int");
        c = Z(c, "Boolean", !0);
        d = Z(d, "uint", 4294967295);
        this.__swiffy_d.Ib(a, b, c, d)
    };
    T(Uq, "flash.display.BitmapData", fq, [Bs]);
    f[w](Uq[H], "width", {
        get: function () {
            return this.__swiffy_d.ja()
        }
    });
    f[w](Uq[H], "height", {
        get: function () {
            return this.__swiffy_d.Bb()
        }
    });
    f[w](Uq[H], "rect", {
        get: function () {
            return new vs(0, 0, this.__swiffy_d.ja(), this.__swiffy_d.Bb())
        }
    });
    f[w](Uq[H], "transparent", {
        get: function () {
            return this.__swiffy_d.td
        }
    });
    Uq[H].applyFilter = function () {
        Y(this, "applyFilter")
    };
    Uq[H].clone = function () {
        Y(this, "clone");
        return null
    };
    Uq[H].colorTransform = function (a, b) {
        Z(a, "flash.geom.Rectangle");
        Z(b, "flash.geom.ColorTransform");
        Y(this, "colorTransform")
    };
    Uq[H].compare = function (a) {
        Z(a, "flash.display.BitmapData");
        Y(this, "compare");
        return 0
    };
    Uq[H].copyChannel = function (a, b, c, d, e) {
        Z(a, "flash.display.BitmapData");
        Z(b, "flash.geom.Rectangle");
        Z(c, "flash.geom.Point");
        Z(d, "uint");
        Z(e, "uint");
        Y(this, "copyChannel")
    };
    Uq[H].copyPixels = function (a, b, c, d, e, h) {
        a = Z(a, "flash.display.BitmapData");
        b = Z(b, "flash.geom.Rectangle");
        c = Z(c, "flash.geom.Point");
        d = Z(d, "flash.display.BitmapData", null);
        e = Z(e, "flash.geom.Point", null);
        h = Z(h, "Boolean", !1);
        this.__swiffy_d.Zu(a.__swiffy_d, b.x, b.y, b[Tb], b[Rd], c.x, c.y, d ? d.__swiffy_d : null, (e || b).x, (e || b).y, h)
    };
    Uq[H].copyPixelsToByteArray = function (a, b) {
        a = Z(a, "flash.geom.Rectangle");
        b = Z(b, "flash.utils.ByteArray");
        var c = this.__swiffy_d.lv(a.x, a.y, a[Tb], a[Rd], b.endian == Ds.LITTLE_ENDIAN),
            d = c[vc],
            e = void 0 === d;
        e && (d = c[G]);
        if (0 != d) {
            var h = Es(b, d);
            if (e)
                for (e = 0; e < d; ++e) h[e] = c[e];
            else h.set(new Uint8Array(c[nd], c[Bf], c[vc]))
        }
    };
    Uq[H].dispose = function () {
        this.__swiffy_d.Tm()
    };
    Uq[H].draw = function () {
        Y(this, "draw")
    };
    Uq[H].drawWithQuality = function (a, b, c, d, e, h, k) {
        Z(a, "flash.display.IBitmapDrawable");
        Z(b, "flash.geom.Matrix", null);
        Z(c, "flash.geom.ColorTransform", null);
        Z(d, "String", null);
        Z(e, "flash.geom.Rectangle", null);
        Z(h, "Boolean", !1);
        Z(k, "String", null);
        Y(this, "drawWithQuality")
    };
    Uq[H].encode = function (a, b, c) {
        Z(a, "flash.geom.Rectangle");
        Z(b, "Object");
        Z(c, "flash.utils.ByteArray", null);
        Y(this, "encode");
        return new Fs
    };
    Uq[H].fillRect = function (a, b) {
        a = Z(a, "flash.geom.Rectangle");
        b = Z(b, "uint");
        this.__swiffy_d[Md](a.x, a.y, a[Tb], a[Rd], b)
    };
    Uq[H].floodFill = function (a, b, c) {
        Z(a, "int");
        Z(b, "int");
        Z(c, "uint");
        Y(this, "floodFill")
    };
    Uq[H].generateFilterRect = function (a, b) {
        Z(a, "flash.geom.Rectangle");
        Z(b, "flash.filters.BitmapFilter");
        Y(this, "generateFilterRect");
        return new vs
    };
    Uq[H].getColorBoundsRect = function (a, b, c) {
        Z(a, "uint");
        Z(b, "uint");
        Z(c, "Boolean", !0);
        Y(this, "getColorBoundsRect");
        return new vs
    };
    Uq[H].getPixel = function (a, b) {
        a = Z(a, "int");
        b = Z(b, "int");
        return this.__swiffy_d.jv(a, b)
    };
    Uq[H].getPixel32 = function (a, b) {
        a = Z(a, "int");
        b = Z(b, "int");
        return this.__swiffy_d.kv(a, b)
    };
    Uq[H].getPixels = function (a) {
        var b = new Fs;
        this.copyPixelsToByteArray(a, b);
        return b
    };
    Uq[H].getVector = function (a) {
        a = Z(a, "flash.geom.Rectangle");
        a = this.__swiffy_d.mv(a.x, a.y, a[Tb], a[Rd]);
        return Gs(Hs, a)
    };
    Uq[H].histogram = function (a) {
        Z(a, "flash.geom.Rectangle", null);
        Y(this, "histogram");
        return Gs(Is(Js, !1, !1))
    };
    Uq[H].hitTest = function (a, b, c, d, e) {
        Z(a, "flash.geom.Point");
        Z(b, "uint");
        Z(c, "Object");
        Z(d, "flash.geom.Point", null);
        Z(e, "uint", 1);
        Y(this, "hitTest");
        return !1
    };
    Uq[H].lock = function () {
        Y(this, "lock");
        this.__swiffy_d.wv()
    };
    Uq[H].merge = function (a, b, c, d, e, h, k) {
        Z(a, "flash.display.BitmapData");
        Z(b, "flash.geom.Rectangle");
        Z(c, "flash.geom.Point");
        Z(d, "uint");
        Z(e, "uint");
        Z(h, "uint");
        Z(k, "uint");
        Y(this, "merge")
    };
    Uq[H].noise = function (a, b, c, d, e) {
        Z(a, "int");
        Z(b, "uint", 0);
        Z(c, "uint", 255);
        Z(d, "uint", 7);
        Z(e, "Boolean", !1);
        Y(this, "noise")
    };
    Uq[H].paletteMap = function (a, b, c, d, e, h, k) {
        Z(a, "flash.display.BitmapData");
        Z(b, "flash.geom.Rectangle");
        Z(c, "flash.geom.Point");
        Z(d, "Array", null);
        Z(e, "Array", null);
        Z(h, "Array", null);
        Z(k, "Array", null);
        Y(this, "paletteMap")
    };
    Uq[H].perlinNoise = function (a, b, c, d, e, h, k, n, u) {
        Z(a, "Number");
        Z(b, "Number");
        Z(c, "uint");
        Z(d, "int");
        Z(e, "Boolean");
        Z(h, "Boolean");
        Z(k, "uint", 7);
        Z(n, "Boolean", !1);
        Z(u, "Array", null);
        Y(this, "perlinNoise")
    };
    Uq[H].pixelDissolve = function (a, b, c, d, e, h) {
        Z(a, "flash.display.BitmapData");
        Z(b, "flash.geom.Rectangle");
        Z(c, "flash.geom.Point");
        Z(d, "int", 0);
        Z(e, "int", 0);
        Z(h, "uint", 0);
        Y(this, "pixelDissolve");
        return 0
    };
    Uq[H].scroll = function (a, b) {
        a = Z(a, "int");
        b = Z(b, "int");
        this.__swiffy_d.scroll(a, b)
    };
    Uq[H].setPixel = function (a, b, c) {
        a = Z(a, "int");
        b = Z(b, "int");
        c = Z(c, "uint");
        this.__swiffy_d.Rv(a, b, c)
    };
    Uq[H].setPixel32 = function (a, b, c) {
        a = Z(a, "int");
        b = Z(b, "int");
        c = Z(c, "uint");
        this.__swiffy_d.Sv(a, b, c)
    };
    Uq[H].setPixels = function (a, b) {
        a = Z(a, "flash.geom.Rectangle");
        b = Z(b, "flash.utils.ByteArray");
        var c = a[Tb],
            d = a[Rd],
            e = c * d * 4,
            h = Ks(b),
            k = h[Xc];
        e + k > h.va[G] && (e = h.va[G] - k, 0 >= e && (k = 0));
        k = new Uint8Array(h.va[nd], k, e);
        Ka(h, h[Xc] + e);
        this.__swiffy_d.Nt(a.x, a.y, c, d, k, b.endian == Ds.LITTLE_ENDIAN)
    };
    Uq[H].setVector = function (a, b) {
        a = Z(a, "flash.geom.Rectangle");
        b = vq(b, Hs);
        this.__swiffy_d.Tv(a.x, a.y, a[Tb], a[Rd], b.__swiffy_v)
    };
    Uq[H].threshold = function (a, b, c, d, e, h, k, n) {
        Z(a, "flash.display.BitmapData");
        Z(b, "flash.geom.Rectangle");
        Z(c, "flash.geom.Point");
        Z(d, "String");
        Z(e, "uint");
        Z(h, "uint", 0);
        Z(k, "uint", 4294967295);
        Z(n, "Boolean", !1);
        Y(this, "threshold");
        return 0
    };
    Uq[H].unlock = function (a) {
        Z(a, "flash.geom.Rectangle", null);
        this.__swiffy_d.aw()
    };
    zn(Uq, function (a, b) {
        return new xk(vk, a, b)
    });
    var Ls = T(function () {}, "flash.display.BitmapDataChannel");
    f[qe](Ls, {
        ALPHA: {
            value: 8
        },
        BLUE: {
            value: 4
        },
        GREEN: {
            value: 2
        },
        RED: {
            value: 1
        }
    });
    var Ms = T(function () {}, "flash.display.CapsStyle");
    X(Ms, "NONE", "none");
    X(Ms, "ROUND", "round");
    X(Ms, "SQUARE", "square");
    var Ns = T(function () {}, "flash.display.LineScaleMode");
    X(Ns, "HORIZONTAL", "horizontal");
    X(Ns, "NONE", "none");
    X(Ns, "NORMAL", "normal");
    X(Ns, "VERTICAL", "vertical");
    var Os = T(function () {}, "flash.display.JointStyle");
    X(Os, "BEVEL", "bevel");
    X(Os, "MITER", "miter");
    X(Os, "ROUND", "round");
    var Mq = function () {
        if (!this.__swiffy_d) throw R(2012, Cp(this)[yc]);
        Iq[I](this);
        this.Ca = [];
        this.mq = null
    };
    T(Mq, "flash.display.DisplayObject", Iq, [Bs]);
    ds(Mq, "enterFrame", "exitFrame");
    f[w](Mq[H], "x", {
        get: function () {
            return this.__swiffy_d.P().j / 20
        },
        set: function (a) {
            var b = this.__swiffy_d,
                c = b.P();
            b[hc](c[Je](20 * a - c.j, 0));
            b.Ka()
        }
    });
    f[w](Mq[H], "y", {
        get: function () {
            return this.__swiffy_d.P().k / 20
        },
        set: function (a) {
            var b = this.__swiffy_d,
                c = b.P();
            b[hc](c[Je](0, 20 * a - c.k));
            b.Ka()
        }
    });
    f[w](Mq[H], "alpha", {
        get: function () {
            return (256 * this.__swiffy_d.xb.O | 0) / 256
        },
        set: function (a) {
            var b = this.__swiffy_d,
                c = b.xb;
            b.qc(new vi(c.Y, c.T, c.X, c.S, c.W, c.Q, a, c.U));
            b.Ka()
        }
    });
    f[w](Mq[H], "visible", {
        get: function () {
            return this.__swiffy_d.$d
        },
        set: function (a) {
            this.__swiffy_d.cj(ga(a))
        }
    });
    f[w](Mq[H], "rotation", {
        get: function () {
            return -180 * this.__swiffy_d.Ic()[fd] / l.PI
        },
        set: function (a) {
            var b = this.__swiffy_d;
            Na(b.Ic(), -a * l.PI / 180);
            b.Og();
            b.Ka()
        }
    });
    f[w](Mq[H], "width", {
        get: function () {
            return this.__swiffy_d.ja()
        },
        set: function (a) {
            var b = this.__swiffy_d;
            b.Dm(p(a));
            b.Ka()
        }
    });
    f[w](Mq[H], "height", {
        get: function () {
            return this.__swiffy_d.Bb()
        },
        set: function (a) {
            var b = this.__swiffy_d;
            b.Cm(p(a));
            b.Ka()
        }
    });
    f[w](Mq[H], "scaleX", {
        get: function () {
            return this.__swiffy_d.Ic().Kd
        },
        set: function (a) {
            var b = this.__swiffy_d;
            b.Ic().Kd = a;
            b.Og();
            b.Ka()
        }
    });
    f[w](Mq[H], "scaleY", {
        get: function () {
            return this.__swiffy_d.Ic().Ue
        },
        set: function (a) {
            var b = this.__swiffy_d;
            b.Ic().Ue = a;
            b.Og();
            b.Ka()
        }
    });
    f[w](Mq[H], "mouseX", {
        get: function () {
            var a = this.__swiffy_d,
                b = a.a.sc.J();
            b.u(a.Kb());
            return b.x / 20
        }
    });
    f[w](Mq[H], "mouseY", {
        get: function () {
            var a = this.__swiffy_d,
                b = a.a.sc.J();
            b.u(a.Kb());
            return b.y / 20
        }
    });
    f[w](Mq[H], "root", {
        get: function () {
            for (var a = this.__swiffy_d; a && !a.ui && a != a.a;)
                if (a[Nb]())
                    if (a == a.a.Wa) break;
                    else a = a[Nb]();
                    else a = null;
            return a ? a.t : null
        }
    });
    f[w](Mq[H], "parent", {
        get: function () {
            var a = this.__swiffy_d[Nb]();
            return a ? a.t : null
        }
    });
    f[w](Mq[H], "name", {
        get: function () {
            return this.__swiffy_d[oc]()
        },
        set: function (a) {
            this.__swiffy_d.Ub(a)
        }
    });
    f[w](Mq[H], "loaderInfo", {
        get: function () {
            return this.__swiffy_d.ml().eg
        }
    });
    f[w](Mq[H], "stage", {
        get: function () {
            var a = this.__swiffy_d;
            return this.root ? a.a.t : null
        }
    });
    f[w](Mq[H], "transform", {
        get: function () {
            return new As(this)
        },
        set: function (a) {
            a = Z(a, "flash.geom.Transform");
            a = a.__swiffy_d;
            var b = this.__swiffy_d;
            b[hc](a.P());
            b.qc(a.xb);
            b.Ka()
        }
    });
    f[w](Mq[H], "filters", {
        get: function () {
            for (var a = [], b = this.__swiffy_d.Ca, c = 0; c < b[G]; c++) a[D](b[c].ji());
            return a
        },
        set: function (a) {
            var b = this.__swiffy_d;
            this.Ca = a;
            for (var c = [], d = 0; d < a[G]; d++) {
                var e = a[d].__swiffy_v;
                c[D](e ? e : new kn)
            }
            b.Qf(c)
        }
    });
    f[w](Mq[H], "mask", {
        get: function () {
            return this.mq
        },
        set: function (a) {
            a = Z(a, "flash.display.DisplayObject");
            var b = this.__swiffy_d;
            this.mq = a;
            b.cf(a.__swiffy_d)
        }
    });
    var Tq = function (a, b, c) {
        Mq[I](this);
        a && (this.bitmapData = a);
        this.pixelSnapping = b;
        this.smoothing = c
    }, Bn = T(Tq, "flash.display.Bitmap", Mq);
    f[w](Tq[H], "bitmapData", {
        get: function () {
            var a = this.__swiffy_d.Pb;
            return a ? a.t : null
        },
        set: function (a) {
            a = Z(a, "flash.display.BitmapData");
            this.__swiffy_d.Gv(a ? a.__swiffy_d : null)
        }
    });
    f[w](Tq[H], "pixelSnapping", {
        get: function () {
            return this.__swiffy_d.yq
        },
        set: function (a) {
            this.__swiffy_d.yq = Z(a, "String")
        }
    });
    f[w](Tq[H], "smoothing", {
        get: function () {
            return this.__swiffy_d.zq
        },
        set: function (a) {
            this.__swiffy_d.zq = Z(a, "Boolean")
        }
    });
    zn(Tq, function (a, b) {
        return new yk(null, a, b)
    });
    var Ps = function () {
        Mq[I](this);
        var a = this.__swiffy_d;
        a.Uc = el[H].Uc;
        a.cg();
        W(this, "focusRect", "Boolean", null)
    };
    T(Ps, "flash.display.InteractiveObject", Mq);
    f[w](Ps[H], "tabIndex", {
        value: -1,
        writable: !0
    });
    f[w](Ps[H], "tabEnabled", {
        value: !1,
        writable: !0
    });
    f[w](Ps[H], "mouseEnabled", {
        get: function () {
            return this.__swiffy_d.oh
        },
        set: function (a) {
            return this.__swiffy_d.Pv( !! a)
        }
    });
    f[w](Ps[H], "doubleClickEnabled", {
        get: function () {
            return this.__swiffy_d.Zk
        },
        set: function (a) {
            return this.__swiffy_d.Jv( !! a)
        }
    });
    var Qs = function (a, b, c, d) {
        a = new Sr(a, b, !1);
        b = Rr(a);
        d.gf && (b.gf = d.gf.t);
        c instanceof Mq && (b.Rn = c.mouseX, b.Sn = c.mouseY, c = c.__swiffy_d, b.On = c.a.sc.x / 20, b.Pn = c.a.sc.y / 20, b.Qn = c.a.Nf);
        return a
    }, Rs = function (a) {
            a = new Hr(a, !1, !1);
            Ir(a).Vj = !0;
            return a
        }, Ss = function (a) {
            return new Hr(a, !0, !1)
        }, Jq = {};
    Jq[134217728] = Wf(Ss, Jr.ADDED, !0, !1);
    Jq[2097152] = Wf(Rs, Jr.ADDED_TO_STAGE);
    Jq[268435456] = Wf(Ss, Jr.REMOVED, !0, !1);
    Jq[67108864] = Wf(Rs, Jr.REMOVED_FROM_STAGE);
    Jq[32] = Wf(Rs, Jr.UNLOAD);
    Jq[2048] = Wf(Qs, Tr.CLICK, !0);
    Jq[33554432] = Wf(Qs, Tr.DOUBLE_CLICK, !0);
    Jq[4] = Wf(Qs, Tr.MOUSE_UP, !0);
    Jq[8] = Wf(Qs, Tr.MOUSE_DOWN, !0);
    Jq[256] = Wf(Qs, Tr.ROLL_OUT, !1);
    Jq[512] = Wf(Qs, Tr.ROLL_OVER, !1);
    Jq[16777216] = Wf(Qs, Tr.MOUSE_MOVE, !1);
    Jq[4194304] = Wf(Qs, Tr.MOUSE_OUT, !1);
    Jq[8388608] = Wf(Qs, Tr.MOUSE_OVER, !1);
    var Sq = function () {
        Ps[I](this);
        this.Xc = {}
    };
    T(Sq, "flash.display.SimpleButton", Ps);
    on(Sq, new wn(0));
    Sq[H].enabled = !0;
    Sq[H].useHandCursor = !0;
    f[w](Sq[H], "tabEnabled", {
        value: !0,
        writable: !0
    });
    f[w](Sq[H], "upState", {
        get: function () {
            return this.Xc[1]
        },
        set: function (a) {
            var b = this.__swiffy_d;
            this.Xc[1] = a;
            b.$j(1, a.__swiffy_d)
        }
    });
    f[w](Sq[H], "overState", {
        get: function () {
            return this.Xc[2]
        },
        set: function (a) {
            var b = this.__swiffy_d;
            this.Xc[2] = a;
            b.$j(2, a.__swiffy_d)
        }
    });
    f[w](Sq[H], "downState", {
        get: function () {
            return this.Xc[4]
        },
        set: function (a) {
            var b = this.__swiffy_d;
            this.Xc[4] = a;
            b.$j(4, a.__swiffy_d)
        }
    });
    f[w](Sq[H], "hitTestState", {
        get: function () {
            return this.Xc[8]
        },
        set: function (a) {
            var b = this.__swiffy_d;
            this.Xc[8] = a;
            b.$j(8, a.__swiffy_d)
        }
    });
    var Ts = function () {
        Ps[I](this)
    };
    T(Ts, "flash.display.DisplayObjectContainer", Ps);
    f[w](Ts[H], "tabChildren", {
        value: !0,
        writable: !0
    });
    f[w](Ts[H], "numChildren", {
        get: function () {
            return this.__swiffy_d.Jj()
        }
    });
    f[w](Ps[H], "mouseChildren", {
        get: function () {
            return this.__swiffy_d.Nl
        },
        set: function (a) {
            return this.__swiffy_d.Ov( !! a)
        }
    });
    Ts[H].addChild = function (a) {
        var b = this.__swiffy_d;
        b.qf(a.__swiffy_d, b.Jj())
    };
    Ts[H].addChildAt = function (a, b) {
        this.__swiffy_d.qf(a.__swiffy_d, b | 0)
    };
    Wa(Ts[H], function (a) {
        return this.__swiffy_d[Id](a.__swiffy_d)
    });
    Ts[H].getChildAt = function (a) {
        return (a = this.__swiffy_d.tf(a | 0)) ? a.t : a
    };
    Ts[H].getChildByName = function (a) {
        return (a = this.__swiffy_d.kt(a)) ? a.t : a
    };
    Ts[H].getChildIndex = function (a) {
        return this.__swiffy_d.Rg(a.__swiffy_d)
    };
    Ts[H].removeChild = function (a) {
        this.__swiffy_d.Nh(a.__swiffy_d)
    };
    Ts[H].removeChildAt = function (a) {
        var b = this.__swiffy_d;
        if (a = b.tf(a | 0)) return b.Nh(a), a.t
    };
    Ts[H].setChildIndex = function (a, b) {
        this.__swiffy_d.qf(a.__swiffy_d, b | 0)
    };
    Ts[H].swapChildren = function (a, b) {
        this.swapChildrenAt(this.getChildIndex(a), this.getChildIndex(b))
    };
    Ts[H].swapChildrenAt = function (a, b) {
        var c = this.__swiffy_d,
            d = c.tf(a | 0),
            e = c.tf(b | 0);
        d && e && (c.qf(d, b | 0), c.qf(e, a | 0))
    };
    var Us = rq(2012);
    Us.o = T(Us, "flash.display.Graphics");
    Us.create = function (a) {
        var b = f[Yc](Us[H]);
        f[w](b, "__swiffy_d", {
            value: a
        });
        return b
    };
    Us[H].beginBitmapFill = function (a, b, c, d) {
        Z(b, "flash.geom.Matrix", null);
        Z(c, "Boolean", !0);
        Z(d, "Boolean", !1);
        Y(this)
    };
    Us[H].beginFill = function (a, b) {
        a = Z(a, "uint");
        b = 100 * Z(b, "Number", 1);
        this.__swiffy_d.fb("beginFill", [a, b])
    };
    Us[H].beginGradientFill = function (a, b, c, d, e, h, k, n) {
        Z(a, "String");
        Z(b, "Array");
        Z(c, "Array");
        Z(d, "Array");
        Z(e, "flash.geom.Matrix", null);
        Z(h, "String", "pad");
        Z(k, "String", "rgb");
        Z(n, "Number", 0);
        Y(this)
    };
    Us[H].beginShaderFill = function (a, b) {
        Z(b, "flash.geom.Matrix", null);
        Y(this)
    };
    Ca(Us[H], function () {
        this.__swiffy_d.fb("clear")
    });
    Us[H].copyFrom = function (a) {
        Z(a, "flash.display.Graphics");
        Y(this)
    };
    Us[H].cubicCurveTo = function (a, b, c, d, e, h) {
        Z(a, "Number");
        Z(b, "Number");
        Z(c, "Number");
        Z(d, "Number");
        Z(e, "Number");
        Z(h, "Number");
        Y(this)
    };
    Us[H].curveTo = function (a, b, c, d) {
        a = Z(a, "Number");
        b = Z(b, "Number");
        c = Z(c, "Number");
        d = Z(d, "Number");
        this.__swiffy_d.fb("curveTo", [a, b, c, d])
    };
    Us[H].drawCircle = function (a, b, c) {
        a = Z(a, "Number");
        b = Z(b, "Number");
        c = Z(c, "Number");
        this.__swiffy_d.fb("drawEllipse", [a, b, c, c])
    };
    Us[H].drawEllipse = function (a, b, c, d) {
        c = Z(c, "Number") / 2;
        d = Z(d, "Number") / 2;
        a = Z(a, "Number") + c;
        b = Z(b, "Number") + d;
        this.__swiffy_d.fb("drawEllipse", [a, b, c, d])
    };
    Us[H].drawGraphicsData = function () {
        Y(this)
    };
    Us[H].drawPath = function (a, b, c) {
        Z(c, "String", "evenOdd");
        Y(this)
    };
    Us[H].drawRect = function (a, b, c, d) {
        a = Z(a, "Number");
        b = Z(b, "Number");
        c = Z(c, "Number");
        d = Z(d, "Number");
        this.__swiffy_d.fb("drawRect", [a, b, c, d])
    };
    Us[H].drawRoundRect = function (a, b, c, d, e, h) {
        a = Z(a, "Number");
        b = Z(b, "Number");
        c = Z(c, "Number");
        d = Z(d, "Number");
        e = Z(e, "Number");
        h = Z(h, "Number", e);
        this.__swiffy_d.fb("drawRoundRect", [a, b, c, d, e, h])
    };
    Us[H].drawTriangles = function (a, b, c, d) {
        Z(d, "String", "none");
        Y(this)
    };
    Us[H].endFill = function () {
        this.__swiffy_d.fb("endFill")
    };
    Us[H].lineBitmapStyle = function (a, b, c, d) {
        Z(b, "flash.geom.Matrix", null);
        Z(c, "Boolean", !0);
        Z(d, "Boolean", !1);
        Y(this)
    };
    Us[H].lineGradientStyle = function (a, b, c, d, e, h, k, n) {
        Z(a, "String");
        Z(b, "Array");
        Z(c, "Array");
        Z(d, "Array");
        Z(e, "flash.geom.Matrix", null);
        Z(h, "String", "pad");
        Z(k, "String", "rgb");
        Z(n, "Number", 0);
        Y(this)
    };
    Us[H].lineShaderStyle = function (a, b) {
        Z(b, "flash.geom.Matrix", null);
        Y(this)
    };
    Us[H].lineStyle = function (a, b, c, d, e, h, k, n) {
        L(a) && (a = Z(a, "Number"));
        b = Z(b, "uint", 0);
        c = 100 * Z(c, "Number", 1);
        d = Z(d, "Boolean", !1);
        e = Z(e, "String", "normal");
        h = Z(h, "String", "null");
        k = Z(k, "String", "null");
        n = Z(n, "Number", 3);
        this.__swiffy_d.fb("lineStyle", [a, b, c, d, e, h, k, n])
    };
    Us[H].lineTo = function (a, b) {
        a = Z(a, "Number");
        b = Z(b, "Number");
        this.__swiffy_d.fb("lineTo", [a, b])
    };
    Us[H].moveTo = function (a, b) {
        a = Z(a, "Number");
        b = Z(b, "Number");
        this.__swiffy_d.fb("moveTo", [a, b])
    };
    var Vq = function () {
        Mq[I](this);
        X(this, "graphics", Us[Yc](this.__swiffy_d))
    };
    T(Vq, "flash.display.Shape", Mq);
    zn(Vq, function (a, b) {
        return new Yk(a, b)
    });
    var Oq = function () {
        Ps[I](this);
        var a = this.__swiffy_d;
        a.kr(!1);
        X(this, "graphics", Us[Yc](a))
    }, Nq = T(Oq, "flash.display.Sprite", Ts);
    on(Oq, new jl(0, 0, null, null));
    f[w](Oq[H], "buttonMode", {
        set: function (a) {
            this.__swiffy_d.kr(ga(a))
        },
        get: function () {
            return this.__swiffy_d.Ki
        }
    });
    f[w](Oq[H], "soundTransform", {
        set: function (a) {
            Z(a, "flash.media.SoundTransform");
            Y(this, "soundTransform")
        },
        get: function () {
            Y(this, "soundTransform");
            return new Vs
        }
    });
    Oq[H].useHandCursor = !0;
    f[w](Oq[H], "tabEnabled", {
        get: function () {
            var a = this.__swiffy_d.Ym;
            return L(a) ? a : this.buttonMode
        },
        set: function (a) {
            this.__swiffy_d.Ym = a
        }
    });
    var Ws = T(function () {}, "flash.display.StageAlign");
    X(Ws, "BOTTOM", "B");
    X(Ws, "BOTTOM_LEFT", "BL");
    X(Ws, "BOTTOM_RIGHT", "BR");
    X(Ws, "LEFT", "L");
    X(Ws, "RIGHT", "R");
    X(Ws, "TOP", "T");
    X(Ws, "TOP_LEFT", "TL");
    X(Ws, "TOP_RIGHT", "TR");
    var Xs = T(function () {}, "flash.display.StageDisplayState");
    f[qe](Xs, {
        FULL_SCREEN: {
            value: "fullScreen"
        },
        FULL_SCREEN_INTERACTIVE: {
            value: "fullScreenInteractive"
        },
        NORMAL: {
            value: "normal"
        }
    });
    var Ys = T(function () {}, "flash.display.StageQuality");
    f[qe](Ys, {
        BEST: {
            value: "best"
        },
        HIGH: {
            value: "high"
        },
        HIGH_16X16: {
            value: "16x16"
        },
        HIGH_16X16_LINEAR: {
            value: "16x16linear"
        },
        HIGH_8X8: {
            value: "8x8"
        },
        HIGH_8X8_LINEAR: {
            value: "8x8linear"
        },
        LOW: {
            value: "low"
        },
        MEDIUM: {
            value: "medium"
        }
    });
    var Zs = T(function () {}, "flash.display.StageScaleMode");
    X(Zs, "EXACT_FIT", "exactFit");
    X(Zs, "NO_BORDER", "noBorder");
    X(Zs, "NO_SCALE", "noScale");
    X(Zs, "SHOW_ALL", "showAll");
    var Qq = function () {
        Ps[I](this);
        X(this, "allowsFullScreen", !1);
        X(this, "allowsFullScreenInteractive", !1);
        W(this, "autoOrients", "Boolean", !1);
        W(this, "color", "uint", 0);
        W(this, "colorCorrection", "String", "default");
        X(this, "colorCorrectionSupport", "unsupported");
        X(this, "contentsScaleFactor", 1);
        X(this, "deviceOrientation", "unknown");
        W(this, "displayState", "String", Xs.NORMAL);
        W(this, "focus", "flash.display.InteractiveObject", null);
        W(this, "fullScreenSourceRect", "flash.geom.Rectangle", null);
        W(this, "mouseLock", "Boolean", !1);
        X(this, "nativeWindow", null);
        X(this, "orientation", "unknown");
        W(this, "quality", "String", Ys.HIGH);
        W(this, "showDefaultContextMenu", "Boolean", !0);
        X(this, "softKeyboardRect", new vs(0, 0, 0, 0));
        X(this, "stage3Ds", null);
        W(this, "stageFocusRect", "Boolean", !0);
        X(this, "stageVideos", null);
        X(this, "supportedOrientations", ["default"]);
        X(this, "wmodeGPU", !1)
    }, $s = T(Qq, "flash.display.Stage", Ts);
    X($s, "supportsOrientationChange", !1);
    Qq[H].assignFocus = function (a, b) {
        Z(a, "flash.display.InteractiveObject");
        Z(b, "String");
        Y(this)
    };
    Qq[H].invalidate = function () {
        Y(this)
    };
    Qq[H].isFocusInaccessible = function () {
        Y(this);
        return !1
    };
    Qq[H].setAspectRatio = function (a) {
        Z(a, "String");
        Y(this)
    };
    Qq[H].setOrientation = function (a) {
        Z(a, "String");
        Y(this)
    };
    f[w](Qq[H], "stageWidth", {
        get: function () {
            var a = this.__swiffy_d;
            return "noScale" == a.Wc ? a.nc : a.mh
        },
        set: function () {}
    });
    f[w](Qq[H], "stageHeight", {
        get: function () {
            var a = this.__swiffy_d;
            return "noScale" == a.Wc ? a.mc : a.lh
        },
        set: function () {}
    });
    f[w](Qq[H], "fullScreenWidth", {
        get: function () {
            Y(this);
            return this.stageWidth
        }
    });
    f[w](Qq[H], "fullScreenHeight", {
        get: function () {
            Y(this);
            return this.stageHeight
        }
    });
    f[w](Qq[H], "frameRate", {
        get: function () {
            return this.__swiffy_d.Dl().tq
        },
        set: function (a) {
            Z(a, "Number");
            Y(this)
        }
    });
    f[w](Qq[H], "scaleMode", {
        get: function () {
            return this.__swiffy_d.Wc
        },
        set: function (a) {
            a = Z(a, "String");
            var b = this.__swiffy_d;
            switch (a) {
            case "showAll":
            case "exactFit":
            case "noBorder":
            case "noScale":
                break;
            default:
                throw R(2008, "Property scaleMode");
            }
            b.pr(a)
        }
    });
    f[w](Qq[H], "align", {
        get: function () {
            var a = this.__swiffy_d.Be,
                b = "";
            a & 2 && (b += "T");
            a & 8 && (b += "B");
            a & 1 && (b += "L");
            a & 4 && (b += "R");
            return b
        },
        set: function (a) {
            a = Z(a, "String");
            this.__swiffy_d.gr(a)
        }
    });
    var at = T(function () {}, "flash.media.AudioDecoder");
    f[qe](at, {
        DOLBY_DIGITAL: {
            value: "DolbyDigital"
        },
        DOLBY_DIGITAL_PLUS: {
            value: "DolbyDigitalPlus"
        },
        DTS: {
            value: "DTS"
        },
        DTS_EXPRESS: {
            value: "DTSExpress"
        },
        DTS_HD_HIGH_RESOLUTION_AUDIO: {
            value: "DTSHDHighResolutionAudio"
        },
        DTS_HD_MASTER_AUDIO: {
            value: "DTSHDMasterAudio"
        }
    });
    var Vs = function (a, b) {
        a = Z(a, "Number", 1);
        b = Z(b, "Number", 0);
        W(this, "leftToLeft", "Number", 0);
        W(this, "leftToRight", "Number", 0);
        W(this, "pan", "Number", b);
        W(this, "rightToLeft", "Number", 0);
        W(this, "rightToRight", "Number", 0);
        W(this, "volume", "Number", a)
    };
    T(Vs, "flash.media.SoundTransform");
    var bt = function (a, b) {
        Mq[I](this);
        Z(a, "int", 320);
        Z(b, "int", 240);
        W(this, "deblocking", "int", 0);
        W(this, "smoothing", "Boolean", !1);
        X(this, "videoHeight", 0);
        X(this, "videoWidth", 0)
    };
    T(bt, "flash.media.Video", Mq);
    on(bt, new jl(0, 0, null, null));
    bt[H].attachCamera = function () {
        Y(this, "attachCamera")
    };
    bt[H].attachNetStream = function (a) {
        Z(a, "flash.net.NetStream", null);
        Y(this, "attachNetStream")
    };
    Ca(bt[H], function () {
        Y(this, "clear")
    });
    T(function (a, b) {
        a = Z(a, "Number", 1E3);
        b = Z(b, "Boolean", !1);
        W(this, "bufferTime", "Number", a);
        W(this, "checkPolicyFile", "Boolean", b)
    }, "flash.media.SoundLoaderContext");
    var ct = function (a, b) {
        Z(a, "flash.net.URLRequest", null);
        Z(b, "flash.media.SoundLoaderContext", null);
        W(this, "bytesLoaded", "uint", 0);
        W(this, "bytesTotal", "Number", 0);
        W(this, "isBuffering", "Boolean", !1);
        W(this, "isURLInaccessible", "Boolean", !0);
        W(this, "length", "Number", 0);
        W(this, "url", "String", "")
    };
    T(ct, "flash.media.Sound");
    mb(ct[H], function () {
        Y(this, "play")
    });
    Sa(ct[H], function () {
        Y(this, "close")
    });
    ct[H].connect = function () {
        Y(this, "connect")
    };
    var dt = T(function () {}, "flash.text.FontStyle");
    X(dt, "BOLD", "bold");
    X(dt, "BOLD_ITALIC", "boldItalic");
    X(dt, "ITALIC", "italic");
    X(dt, "REGULAR", "regular");
    var et = T(function () {}, "flash.text.FontType");
    X(et, "DEVICE", "device");
    X(et, "EMBEDDED", "embedded");
    X(et, "EMBEDDED_CFF", "embeddedCFF");
    var ft = function () {}, gt = T(ft, "flash.text.Font");
    f[w](ft[H], "fontName", {
        get: function () {
            var a = this.__swiffy_v;
            return a ? a[F] : null
        }
    });
    f[w](ft[H], "fontStyle", {
        get: function () {
            var a = this.__swiffy_v;
            return a ? a[Te] ? a[le] ? dt.BOLD_ITALIC : dt.BOLD : a[le] ? dt.ITALIC : dt.REGULAR : null
        }
    });
    f[w](ft[H], "fontType", {
        get: function () {
            return this.__swiffy_v ? et.EMBEDDED : null
        }
    });
    gt.enumerateFonts = function (a) {
        Z(a, "Boolean", !1);
        a = [];
        var b = ao.a.tc,
            c;
        for (c in b)
            for (var d = b[c], e = 0; e < d[G]; e++) {
                var h = new ft;
                f[w](h, "__swiffy_v", {
                    value: d[e]
                });
                a[D](h)
            }
        return a
    };
    ft[H].hasGlyphs = function (a) {
        a = Z(a, "String");
        var b = this.__swiffy_v;
        if (!b) return !1;
        for (var c = 0; c < a[G]; c++)
            if (!b.Bj(a[cc](c))) return !1;
        return !0
    };
    gt.registerFont = function (a) {
        Z(a, "Class");
        throw R(1508, "font");
    };
    var ht = T(function () {}, "flash.text.TextFieldAutoSize");
    X(ht, "CENTER", "center");
    X(ht, "LEFT", "left");
    X(ht, "NONE", "none");
    X(ht, "RIGHT", "right");
    var it = T(function () {}, "flash.text.TextFieldType");
    X(it, "DYNAMIC", "dynamic");
    X(it, "INPUT", "input");
    var jt = T(function () {}, "flash.text.TextFormatAlign");
    X(jt, "CENTER", "center");
    X(jt, "END", "end");
    X(jt, "JUSTIFY", "justify");
    X(jt, "LEFT", "left");
    X(jt, "RIGHT", "right");
    X(jt, "START", "start");
    var Kk = function (a, b, c, d, e, h, k, n, u, y, C, J, V) {
        a = Z(a, "String", null);
        b = Z(b, "Number", null, !0);
        c = Z(c, "Number", null, !0);
        d = Z(d, "Boolean", null, !0);
        e = Z(e, "Boolean", null, !0);
        h = Z(h, "Boolean", null, !0);
        k = Z(k, "String", null);
        n = Z(n, "String", null);
        u = Z(u, "String", null);
        y = Z(y, "Number", null, !0);
        C = Z(C, "Number", null, !0);
        J = Z(J, "Number", null, !0);
        V = Z(V, "Number", null, !0);
        W(this, "align", "String", u);
        W(this, "blockIndent", "Number", null, !0);
        W(this, "bold", "Boolean", d, !0);
        W(this, "bullet", "Boolean", null, !0);
        W(this, "color", "Number",
            c, !0);
        W(this, "font", "String", a);
        W(this, "indent", "Number", J, !0);
        W(this, "italic", "Boolean", e, !0);
        W(this, "kerning", "Boolean", null, !0);
        W(this, "leading", "Number", V, !0);
        W(this, "leftMargin", "Number", y, !0);
        W(this, "letterSpacing", "Number", null, !0);
        W(this, "rightMargin", "Number", C, !0);
        W(this, "size", "Number", b, !0);
        W(this, "tabStops", "Array", null);
        W(this, "target", "String", n);
        W(this, "underline", "Boolean", h, !0);
        W(this, "url", "String", k)
    };
    T(Kk, "flash.text.TextFormat");
    var kt = T(function () {}, "flash.text.AntiAliasType");
    X(kt, "ADVANCED", "advanced");
    X(kt, "NORMAL", "normal");
    var Rq = function () {
        Ps[I](this)
    };
    T(Rq, "flash.text.TextField", Ps);
    var lt = on,
        mt = new xn(0, null, 240, void 0);
    mt.html = !0;
    mt.selectable = !0;
    Fa(mt, new yi(0, 0, 2E3, 2E3));
    $a(mt, 15);
    Da(mt, 15);
    lt(Rq, mt);
    f[w](Rq[H], "tabEnabled", {
        get: function () {
            var a = this.__swiffy_d.Ym;
            return L(a) ? a : this[E] == it.INPUT
        },
        set: function (a) {
            this.__swiffy_d.Ym = a
        }
    });
    Rq[H].appendText = function (a) {
        var b = this.__swiffy_d;
        b.ge(b.qd + Tk(a))
    };
    Rq[H].getTextFormat = function (a, b) {
        return this.__swiffy_d.Nq(a, b).Pq()
    };
    Rq[H].setTextFormat = function (a, b, c) {
        var d = this.__swiffy_d;
        a = Jk(a);
        d.Uj(a, b, c)
    };
    f[w](Rq[H], "text", {
        get: function () {
            var a = this.__swiffy_d,
                b = a.qd;
            a.Wb && (b = Sk(b, a[t][md]));
            return b
        },
        set: function (a) {
            var b = this.__swiffy_d;
            b.Wb && (a = Tk(a), b.ej(!1));
            b.ge(a);
            b.ej(!0)
        }
    });
    f[w](Rq[H], "htmlText", {
        get: function () {
            var a = this.__swiffy_d,
                b = a.qd;
            a.Wb && (b = Uk(q(b)));
            return b
        },
        set: function (a) {
            var b = this.__swiffy_d,
                c = Ek();
            ib(c, 4278190080);
            b.Uj(c);
            b.ge(q(a))
        }
    });
    f[w](Rq[H], "length", {
        get: function () {
            return this[ce][G]
        }
    });
    f[w](Rq[H], "textColor", {
        get: function () {
            return this.__swiffy_d.$q()
        },
        set: function (a) {
            this.__swiffy_d.sr(a)
        }
    });
    f[w](Rq[H], "autoSize", {
        get: function () {
            return this.__swiffy_d.Uf
        },
        set: function (a) {
            switch (a) {
            case "center":
            case "left":
            case "none":
            case "right":
                break;
            default:
                throw R(2008, "Property autoSize");
            }
            this.__swiffy_d.ir(a)
        }
    });
    f[w](Rq[H], "selectable", {
        get: function () {
            return this.__swiffy_d.ul
        },
        set: function (a) {
            a = Z(a, "Boolean");
            this.__swiffy_d.qr(a)
        }
    });
    f[w](Rq[H], "border", {
        get: function () {
            return this.__swiffy_d.ah
        },
        set: function (a) {
            a = Z(a, "Boolean");
            this.__swiffy_d.jr(a)
        }
    });
    f[w](Rq[H], "type", {
        get: function () {
            return this.__swiffy_d.tl ? it.INPUT : it.DYNAMIC
        },
        set: function (a) {
            switch (a) {
            case it.DYNAMIC:
                a = !1;
                break;
            case it.INPUT:
                a = !0;
                break;
            default:
                throw R(2008, "Property type");
            }
            this.__swiffy_d.Xm(a)
        }
    });
    f[w](Rq[H], "antiAliasType", {
        get: function () {
            return "advanced" == this.__swiffy_d.pl ? kt.ADVANCED : kt.NORMAL
        },
        set: function (a) {
            var b = "normal";
            switch (a) {
            case kt.NORMAL:
                b = "normal";
                break;
            case kt.ADVANCED:
                b = "advanced";
                break;
            default:
                throw R(2008, "Property type");
            }
            this.__swiffy_d.hr(b)
        }
    });
    f[w](Rq[H], "numLines", {
        get: function () {
            return this.__swiffy_d.Ab[G]
        }
    });
    Rq[H].getLineText = function (a) {
        a = this.__swiffy_d.gv(a);
        if (null === a) throw new RangeError;
        return a
    };
    f[w](Rq[H], "multiline", {
        get: function () {
            return this.__swiffy_d.kg
        },
        set: function (a) {
            this.__swiffy_d.nr( !! a)
        }
    });
    f[w](Rq[H], "wordWrap", {
        get: function () {
            return this.__swiffy_d.Fh
        },
        set: function (a) {
            this.__swiffy_d.tr( !! a)
        }
    });
    f[w](Rq[H], "embedFonts", {
        get: function () {
            return this.__swiffy_d.Tf
        },
        set: function (a) {
            this.__swiffy_d.mr( !! a)
        }
    });
    f[w](Rq[H], "defaultTextFormat", {
        get: function () {
            return this.__swiffy_d.Mq().Pq()
        },
        set: function (a) {
            var b = this.__swiffy_d;
            a = Jk(a);
            b.or(a)
        }
    });
    var nt = function (a, b, c, d, e, h) {
        a = Z(a, "String", "_serif");
        b = Z(b, "String", "normal");
        c = Z(c, "String", "normal");
        d = Z(d, "String", "device");
        e = Z(e, "String", "cff");
        h = Z(h, "String", "horizontalStem");
        W(this, "cffHinting", "String", h);
        W(this, "fontLookup", "String", d);
        W(this, "fontName", "String", a);
        W(this, "fontPosture", "String", c);
        W(this, "fontWeight", "String", b);
        W(this, "locked", "Boolean", !1);
        W(this, "renderingMode", "String", e)
    }, ot = T(nt, "flash.text.engine.FontDescription");
    nt[H].clone = function () {
        return new nt(this.fontName, this.fontWeight, this.fontPosture, this.fontLookup, this.renderingMode, this.ccfHinting)
    };
    ot.isDeviceFontCompatible = function (a, b, c) {
        Z(a, "String", "");
        Z(b, "String", "");
        Z(c, "String", "");
        Y(this, "isDeviceFontCompatible");
        return !1
    };
    ot.isFontCompatible = function (a, b, c) {
        Z(a, "String", "");
        Z(b, "String", "");
        Z(c, "String", "");
        Y(this, "isFontCompatible");
        return !1
    };
    var pt = T(function () {}, "flash.text.engine.FontPosture");
    f[w](pt, "ITALIC", {
        value: "italic"
    });
    f[w](pt, "NORMAL", {
        value: "normal"
    });
    var qt = T(function () {}, "flash.text.engine.FontWeight");
    f[w](qt, "BOLD", {
        value: "bold"
    });
    f[w](qt, "NORMAL", {
        value: "normal"
    });
    var Pq = function () {
        Oq[I](this)
    };
    T(Pq, "flash.display.MovieClip", Oq);
    Pq[H].addFrameScript = function (a, b) {
        for (var c = 0; c < arguments[G]; c += 2) this.__swiffy_d.qp[arguments[c]] = arguments[c + 1]
    };
    rb(Pq[H], function () {
        this.__swiffy_d[Se]()
    });
    mb(Pq[H], function () {
        this.__swiffy_d[Ge]()
    });
    Pq[H].prevScene = function () {
        this.__swiffy_d.Bv()
    };
    Pq[H].nextScene = function () {
        this.__swiffy_d.Av()
    };
    Pq[H].prevFrame = function () {
        this.__swiffy_d.Om()
    };
    Pq[H].nextFrame = function () {
        this.__swiffy_d.li()
    };
    Pq[H].gotoAndStop = function (a, b) {
        var c = this.__swiffy_d;
        c.me(c.lf(a, b), !1)
    };
    Pq[H].gotoAndPlay = function (a, b) {
        var c = this.__swiffy_d;
        c.me(c.lf(a, b), !0)
    };
    f[w](Pq[H], "currentFrame", {
        get: function () {
            return this.__swiffy_d.Ma + 1
        }
    });
    f[w](Pq[H], "framesLoaded", {
        get: function () {
            return this.__swiffy_d[t][qd]
        }
    });
    f[w](Pq[H], "totalFrames", {
        get: function () {
            return this.__swiffy_d[t][qd]
        }
    });
    f[w](Pq[H], "cacheAsBitmap", {
        get: function () {
            return this.__swiffy_d.fj()
        },
        set: function (a) {
            this.__swiffy_d.kl(ga(a))
        }
    });
    var rt = function () {
        Iq[I](this);
        W(this, "client", "Object", null);
        X(this, "domain", "");
        W(this, "isPerUser", "Boolean", !1)
    }, st = T(rt, "flash.net.LocalConnection", Iq);
    f[w](st, "isSupported", {
        value: !1
    });
    rt[H].allowDomain = function () {
        Y(this, "allowDomain")
    };
    rt[H].allowInsecureDomain = function () {
        Y(this, "allowInsecureDomain")
    };
    Sa(rt[H], function () {
        Y(this, "close")
    });
    rt[H].connect = function (a) {
        Z(a, "String", "");
        Y(this, "connect")
    };
    ua(rt[H], function (a, b) {
        Z(a, "String", "");
        Z(b, "String", "");
        Y(this, "send")
    });
    var tt = function () {
        Iq[I](this);
        W(this, "client", "Object", null);
        X(this, "connected", !1);
        X(this, "connectedProxyType", "");
        X(this, "farID", "");
        X(this, "farNonce", "");
        W(this, "httpIdleTimeout", "Number", 0);
        W(this, "maxPeerConnections", "uint", 0);
        X(this, "nearID", "");
        X(this, "nearNonce", "");
        W(this, "objectEncoding", "uint", 0);
        X(this, "protocol", "");
        W(this, "proxyType", "String", "");
        X(this, "unconnectedPeerStreams", null);
        X(this, "uri", "");
        X(this, "usingTLS", !1)
    }, ut = T(tt, "flash.net.NetConnection", Iq);
    f[w](ut, "defaultObjectEncoding", {
        value: 0
    });
    tt[H].addHeader = function (a, b, c) {
        Z(a, "String", "");
        Z(b, "Boolean", !1);
        Z(c, "Object", null);
        Y(this, "addHeader")
    };
    Bb(tt[H], function (a, b) {
        Z(a, "String", "");
        Z(b, "flash.net.Responder", null);
        Y(this, "call")
    });
    Sa(tt[H], function () {
        Y(this, "close")
    });
    tt[H].connect = function (a) {
        Z(a, "String", "");
        Y(this, "connect")
    };
    var vt = function (a, b) {
        Iq[I](this);
        Z(a, "flash.net.NetConnection", null);
        Z(b, "String", "connectToFMS");
        W(this, "audioReliable", "Boolean", !1);
        W(this, "audioSampleAccess", "Boolean", !1);
        X(this, "backBufferLength", 0);
        W(this, "backBufferTime", "Number", 0);
        X(this, "bufferLength", 0);
        W(this, "bufferTime", "Number", 0);
        W(this, "bufferTimeMax", "Number", 0);
        X(this, "bytesLoaded", 0);
        X(this, "bytesTotal", 0);
        W(this, "checkPolicyFile", "Boolean", !1);
        W(this, "client", "Object", null);
        X(this, "currentFPS", 0);
        W(this, "dataReliable", "Boolean", !1);
        X(this, "farID", "");
        X(this, "farNonce", "");
        W(this, "inBufferSeek", "Boolean", !1);
        X(this, "info", null);
        X(this, "liveDelay", 0);
        W(this, "maxPauseBufferTime", "Number", 0);
        W(this, "multicastAvailabilitySendToAll", "Boolean", !1);
        W(this, "multicastAvailabilityUpdatePeriod", "Number", 0);
        W(this, "multicastFetchPeriod", "Number", 0);
        X(this, "multicastInfo", null);
        W(this, "multicastPushNeighborLimit", "Number", 0);
        W(this, "multicastRelayMarginDuration", "Number", 0);
        W(this, "multicastWindowDuration", "Number", 0);
        X(this, "nearNonce",
            "");
        X(this, "objectEncoding", 0);
        X(this, "peerStreams", null);
        W(this, "soundTransform", "flash.media.SoundTransform", null);
        X(this, "time", 0);
        W(this, "useHardwareDecoder", "Boolean", !1);
        W(this, "useJitterBuffer", "Boolean", !1);
        W(this, "videoReliable", "Boolean", !1);
        W(this, "videoSampleAccess", "Boolean", !1);
        W(this, "videoStreamSettings", "flash.media.VideoStreamSettings", null)
    }, wt = T(vt, "flash.net.NetStream", Iq);
    f[w](wt, "CONNECT_TO_FMS", {
        value: "connectToFMS"
    });
    f[w](wt, "DIRECT_CONNECTIONS", {
        value: "directConnections"
    });
    vt[H].appendBytes = function (a) {
        Z(a, "flash.utils.ByteArray", null);
        Y(this, "appendBytes")
    };
    vt[H].appendBytesAction = function (a) {
        Z(a, "String", "");
        Y(this, "appendBytesAction")
    };
    vt[H].attach = function (a) {
        Z(a, "flash.net.NetConnection", null);
        Y(this, "attach")
    };
    vt[H].attachAudio = function () {
        Y(this, "attachAudio")
    };
    vt[H].attachCamera = function (a, b) {
        Z(b, "int", -1);
        Y(this, "attachCamera")
    };
    Sa(vt[H], function () {
        Y(this, "close")
    });
    vt[H].dispose = function () {
        Y(this, "dispose")
    };
    vt[H].onPeerConnect = function (a) {
        Z(a, "flash.net.NetStream", null);
        Y(this, "onPeerConnect");
        return !1
    };
    vt[H].pause = function () {
        Y(this, "pause")
    };
    mb(vt[H], function (a) {
        Y(this, "play");
        var b = this.__swiffy_vm.a.Al;
        b && "string" == typeof a && b.zl("GET", a, null, null, "AS3.NetStream.play")
    });
    vt[H].play2 = function (a) {
        Z(a, "flash.net.NetStreamPlayOptions", null);
        Y(this, "play2")
    };
    vt[H].preloadEmbeddedData = function (a) {
        Z(a, "flash.net.NetStreamPlayOptions", null);
        Y(this, "preloadEmbeddedData")
    };
    vt[H].publish = function (a, b) {
        Z(a, "String", "null");
        Z(b, "String", "null");
        Y(this, "publish")
    };
    vt[H].receiveAudio = function (a) {
        Z(a, "Boolean", !1);
        Y(this, "receiveAudio")
    };
    vt[H].receiveVideo = function (a) {
        Z(a, "Boolean", !1);
        Y(this, "receiveVideo")
    };
    vt[H].receiveVideoFPS = function (a) {
        Z(a, "Number", 0);
        Y(this, "receiveVideoFPS")
    };
    wt.resetDRMVouchers = function () {
        Y(this, "resetDRMVouchers")
    };
    vt[H].resume = function () {
        Y(this, "resume")
    };
    vt[H].seek = function (a) {
        Z(a, "Number", 0);
        Y(this, "seek")
    };
    ua(vt[H], function (a) {
        Z(a, "String", "");
        Y(this, "send")
    });
    vt[H].setDRMAuthenticationCredentials = function (a, b, c) {
        Z(a, "String", "");
        Z(b, "String", "");
        Z(c, "String", "");
        Y(this, "setDRMAuthenticationCredentials")
    };
    vt[H].step = function (a) {
        Z(a, "int", 0);
        Y(this, "step")
    };
    vt[H].togglePause = function () {
        Y(this, "togglePause")
    };
    T(function () {
        Iq[I](this);
        W(this, "len", "Number", 0);
        W(this, "offset", "Number", 0);
        W(this, "oldStreamName", "String", "");
        W(this, "start", "Number", 0);
        W(this, "streamName", "String", "");
        W(this, "transition", "String", "")
    }, "flash.net.NetStreamPlayOptions", Iq);
    var xt = rq(2012);
    xt.o = T(xt, "flash.net.ObjectEncoding");
    f[w](xt.o, "dynamicPropertyWriter", {
        value: null
    });
    f[w](xt.o, "AMF0", {
        value: 0
    });
    f[w](xt.o, "AMF3", {
        value: 3
    });
    f[w](xt.o, "DEFAULT", {
        value: 3
    });
    T(function (a, b) {
        Z(a, "Function", null);
        Z(b, "Function", null)
    }, "flash.net.Responder");
    var yt = rq(2012);
    yt.yf = function (a) {
        return a.__swiffy_v
    };
    yt.Tq = function () {
        var a = mq(yt.o);
        Iq[I](a);
        var b = yt.yf(a);
        b.wp = a;
        b.up = yt.em;
        pa(b, {});
        return a
    };
    yt.Vq = {};
    yt.em = xt.o.AMF3;
    yt.o = T(yt, "flash.net.SharedObject", Iq);
    S(yt.o, "client", function () {
        return yt.yf(this).wp
    });
    Yp(yt.o, "client", function (a) {
        if (null == a) throw R(2004);
        yt.yf(this).wp = a
    });
    Xp(yt.o, "clear", function () {
        Y(this, "clear");
        pa(yt.yf(this), {})
    });
    Xp(yt.o, "close", function () {
        Y(this, "close")
    });
    Xp(yt.o, "connect", function (a, b) {
        Z(a, "flash.net.NetConnection", null);
        Z(b, "String", "null");
        Y(this, "connect")
    });
    S(yt.o, "data", function () {
        return yt.yf(this)[s]
    });
    f[w](yt.o, "defaultObjectEncoding", {
        get: function () {
            return yt.em
        },
        set: function (a) {
            yt.em = Z(a, "uint")
        }
    });
    Xp(yt.o, "flush", function (a) {
        Z(a, "int", 0);
        Y(this, "flush");
        return zt.o.FLUSHED
    });
    Yp(yt.o, "fps", function () {
        Y(this, "fps")
    });
    yt.o.getLocal = function (a, b, c) {
        a = Z(a, "String", "");
        Z(b, "String", null);
        Z(c, "Boolean", !1);
        Y(this, "getLocal");
        (b = yt.Vq[a]) || (yt.Vq[a] = b = yt.Tq());
        return b
    };
    yt.o.getRemote = function (a, b, c, d) {
        Z(a, "String", "");
        Z(b, "String", "null");
        Z(c, "Object", !1);
        Z(d, "Boolean", !1);
        Y(this, "getRemote");
        return yt.Tq()
    };
    S(yt.o, "objectEncoding", function () {
        return yt.yf(this).up
    });
    Yp(yt.o, "objectEncoding", function (a) {
        a = Z(a, "uint");
        Y(this, "objectEncoding");
        if (a != xt.o.AMF0 && a != xt.o.AMF3) throw R(2008, "Parameter objectEncoding");
        yt.yf(this).up = a
    });
    Xp(yt.o, "send", function () {
        Y(this, "send")
    });
    Xp(yt.o, "setDirty", function (a) {
        Z(a, "String", "");
        Y(this, "setDirty")
    });
    Xp(yt.o, "setProperty", function (a, b) {
        Z(a, "String", "");
        Z(b, "Object", null);
        Y(this, "setProperty")
    });
    S(yt.o, "size", function () {
        Y(this, "size");
        return 0
    });
    var zt = rq(2012);
    zt.o = T(zt, "flash.net.SharedObjectFlushStatus");
    f[w](zt.o, "FLUSHED", {
        value: "flushed"
    });
    f[w](zt.o, "PENDING", {
        value: "pending"
    });
    var At = function (a, b) {
        Iq[I](this);
        Z(a, "String", "null");
        Z(b, "int", 0);
        X(this, "bytesAvailable", 0);
        X(this, "bytesPending", 0);
        X(this, "connected", !1);
        W(this, "endian", "String", Ds.BIG_ENDIAN);
        X(this, "localAddress", "");
        X(this, "localPort", 0);
        W(this, "objectEncoding", "uint", 0);
        X(this, "remoteAddress", "");
        X(this, "remotePort", 0);
        W(this, "timeout", "uint", 0)
    };
    T(At, "flash.net.Socket", Iq);
    Sa(At[H], function () {
        Y(this, "close")
    });
    At[H].connect = function (a, b) {
        Z(a, "String");
        Z(b, "int");
        Y(this, "connect")
    };
    At[H].flush = function () {
        Y(this, "flush")
    };
    At[H].readBoolean = function () {
        Y(this, "readBoolean");
        return !1
    };
    At[H].readByte = function () {
        Y(this, "readByte");
        return 0
    };
    At[H].readBytes = function (a, b, c) {
        Z(a, "flash.utils.ByteArray");
        Z(b, "uint", 0);
        Z(c, "uint", 0);
        Y(this, "readBytes")
    };
    At[H].readDouble = function () {
        Y(this, "readDouble");
        return 0
    };
    At[H].readFloat = function () {
        Y(this, "readFloat");
        return 0
    };
    At[H].readInt = function () {
        Y(this, "readInt");
        return 0
    };
    At[H].readMultiByte = function (a, b) {
        Z(a, "uint");
        Z(b, "String");
        Y(this, "readMultiByte");
        return ""
    };
    At[H].readObject = function () {
        Y(this, "readObject");
        return null
    };
    At[H].readShort = function () {
        Y(this, "readShort");
        return 0
    };
    At[H].readUnsignedByte = function () {
        Y(this, "readUnsignedByte");
        return 0
    };
    At[H].readUnsignedInt = function () {
        Y(this, "readUnsignedInt");
        return 0
    };
    At[H].readUnsignedShort = function () {
        Y(this, "readUnsignedShort");
        return 0
    };
    At[H].readUTF = function () {
        Y(this, "readUTF");
        return ""
    };
    At[H].readUTFBytes = function (a) {
        Z(a, "uint");
        Y(this, "readUTFBytes");
        return ""
    };
    At[H].writeBoolean = function (a) {
        Z(a, "Boolean");
        Y(this, "writeBoolean")
    };
    At[H].writeByte = function (a) {
        Z(a, "int");
        Y(this, "writeByte")
    };
    At[H].writeBytes = function (a, b, c) {
        Z(a, "flash.utils.ByteArray");
        Z(b, "uint", 0);
        Z(c, "uint", 0);
        Y(this, "writeBytes")
    };
    At[H].writeDouble = function (a) {
        Z(a, "Number");
        Y(this, "writeDouble")
    };
    At[H].writeFloat = function (a) {
        Z(a, "Number");
        Y(this, "writeFloat")
    };
    At[H].writeInt = function (a) {
        Z(a, "int");
        Y(this, "writeInt")
    };
    At[H].writeMultiByte = function (a, b) {
        Z(a, "String");
        Z(b, "String");
        Y(this, "writeMultiByte")
    };
    At[H].writeObject = function (a) {
        Z(a, "*");
        Y(this, "writeObject")
    };
    At[H].writeShort = function (a) {
        Z(a, "int");
        Y(this, "writeShort")
    };
    At[H].writeUnsignedInt = function (a) {
        Z(a, "uint");
        Y(this, "writeUnsignedInt")
    };
    At[H].writeUTF = function (a) {
        Z(a, "String");
        Y(this, "writeUTF")
    };
    At[H].writeUTFBytes = function (a) {
        Z(a, "String");
        Y(this, "writeUTFBytes")
    };
    var Bt = T(function () {}, "flash.net.URLLoaderDataFormat");
    X(Bt, "BINARY", "binary");
    X(Bt, "TEXT", "text");
    X(Bt, "VARIABLES", "variables");
    var Ct = function (a) {
        Iq[I](this);
        a = Z(a, "flash.net.URLRequest", null);
        W(this, "bytesLoaded", "uint", 0);
        W(this, "bytesTotal", "uint", 0);
        pa(this, void 0);
        W(this, "dataFormat", "String", Bt.TEXT);
        a && this.load(a)
    };
    T(Ct, "flash.net.URLLoader", Iq);
    Sa(Ct[H], function () {
        Y(this)
    });
    fb(Ct[H], function (a) {
        a = Z(a, "flash.net.URLRequest");
        Y(this);
        var b = this;
        this[fc](new Hr(Jr.OPEN));
        var c = new fl;
        c.Cb = function (a) {
            b.bytesLoaded = 1024;
            b.bytesTotal = 1024;
            b[fc](new Yr(Zr.PROGRESS, !1, !1, 1024, 1024));
            b[fc](new $r(as.HTTP_STATUS, !1, !1, 400));
            pa(b, a);
            b[fc](new Hr(Jr.COMPLETE))
        };
        c.wc = function () {};
        sl(a.url, null, a[Ec], a[s] ? a[s][Sc]() : null, c, a.requestHeaders)
    });
    T(function (a) {
        a = Z(a, "String", null);
        W(this, "authenticate", "Boolean", !1);
        W(this, "cacheResponse", "Boolean", !1);
        W(this, "contentType", "String", null);
        W(this, "data", "Object", null);
        W(this, "digest", "String", "");
        W(this, "followRedirects", "Boolean", !1);
        W(this, "idleTimeout", "Number", 0);
        W(this, "manageCookies", "Boolean", !1);
        W(this, "method", "String", gr.GET);
        W(this, "url", "String", a);
        W(this, "useCache", "Boolean", !1);
        W(this, "userAgent", "String", "");
        X(this, "requestHeaders", [])
    }, "flash.net.URLRequest");
    var Ro = function (a, b) {
        a = Z(a, "String", "");
        b = Z(b, "String", "");
        W(this, "name", "String", a);
        W(this, "value", "String", b)
    };
    T(Ro, "flash.net.URLRequestHeader");
    Ia(Ro[H], function () {
        return this[F] + ": " + this[ke]
    });
    var Dt = function () {}, gr = T(Dt, "flash.net.URLRequestMethod");
    X(gr, "DELETE", "DELETE");
    X(gr, "GET", "GET");
    X(gr, "HEAD", "HEAD");
    X(gr, "OPTIONS", "OPTIONS");
    X(gr, "POST", "POST");
    X(Dt, "PUT", "PUT");
    var Et = function (a) {
        a = Z(a, "String", null);
        null != a && this.decode(a)
    };
    T(Et, "flash.net.URLVariables");
    f[w](Et[H], "decode", {
        value: function (a) {
            a = Z(a, "String");
            a = Yi(a, !0);
            var b = f[Oe](a);
            if (!b[G]) throw R(2101);
            for (var c = 0; c < b[G]; c++) {
                var d = b[c];
                if (!d[G]) throw R(2101);
                var e = a[d];
                this[d] = 1 == e[G] ? e[0] : e
            }
        }
    });
    f[w](Et[H], "toString", {
        value: function () {
            return Ui(this)
        }
    });
    var Ft = T(function (a) {
        Z(a, "flash.system.ApplicationDomain", null)
    }, "flash.system.ApplicationDomain");
    X(Ft, "MIN_DOMAIN_MEMORY_LENGTH", 1024);
    f[w](Ft, "currentDomain", {
        get: function () {
            Y(this);
            return oq[I](Ft)
        }
    });
    S(Ft, "parentDomain", function () {
        Y(this);
        return oq[I](Ft)
    });
    S(Ft, "domainMemory", function () {
        Y(this);
        return null
    });
    Yp(Ft, "domainMemory", function (a) {
        Y(this);
        Z(a, "flash.utils.ByteArray")
    });
    Xp(Ft, "getDefinition", function (a) {
        a = Z(a, "String");
        Y(this);
        var b = ao.nb["flash.utils.getDefinitionByName"](a);
        if (!L(b)) throw R(1065, a);
        return b
    });
    Xp(Ft, "getQualifiedDefinitionNames", function () {
        Y(this);
        return Gs(q, [])
    });
    Xp(Ft, "hasDefinition", function (a) {
        a = Z(a, "String");
        Y(this);
        a = ao.nb["flash.utils.getDefinitionByName"](a);
        return L(a)
    });
    var Gt = T(function () {}, "flash.system.Capabilities");
    f[w](Gt, "avHardwareDisable", {
        value: !1
    });
    f[w](Gt, "cpuArchitecture", {
        value: ""
    });
    f[w](Gt, "hasAccessibility", {
        value: !1
    });
    f[w](Gt, "hasAudio", {
        value: !1
    });
    f[w](Gt, "hasAudioEncoder", {
        value: !1
    });
    f[w](Gt, "hasEmbeddedVideo", {
        value: !1
    });
    f[w](Gt, "hasIME", {
        value: !1
    });
    f[w](Gt, "hasMP3", {
        value: !1
    });
    f[w](Gt, "hasPrinting", {
        value: !1
    });
    f[w](Gt, "hasScreenBroadcast", {
        value: !1
    });
    f[w](Gt, "hasScreenPlayback", {
        value: !1
    });
    f[w](Gt, "hasStreamingAudio", {
        value: !0
    });
    f[w](Gt, "hasStreamingVideo", {
        value: !0
    });
    f[w](Gt, "hasTLS", {
        value: !1
    });
    f[w](Gt, "hasVideoEncoder", {
        value: !1
    });
    f[w](Gt, "isDebugger", {
        value: !1
    });
    f[w](Gt, "isEmbeddedInAcrobat", {
        value: !1
    });
    f[w](Gt, "language", {
        value: ""
    });
    f[w](Gt, "localFileReadDisable", {
        value: !0
    });
    f[w](Gt, "manufacturer", {
        value: ""
    });
    f[w](Gt, "maxLevelIDC", {
        value: "5.1"
    });
    f[w](Gt, "os", {
        value: ""
    });
    f[w](Gt, "pixelAspectRatio", {
        value: 1
    });
    f[w](Gt, "playerType", {
        value: "PlugIn"
    });
    f[w](Gt, "screenColor", {
        value: "color"
    });
    f[w](Gt, "screenDPI", {
        value: 72
    });
    f[w](Gt, "screenResolutionX", {
        get: function () {
            return screen[Tb]
        }
    });
    f[w](Gt, "screenResolutionY", {
        get: function () {
            return screen[Rd]
        }
    });
    f[w](Gt, "serverString", {
        get: function () {
            var a = [],
                b;
            for (b in Ht) {
                var c = Ht[b],
                    c = M(c) ? c(this) : this[c],
                    c = !0 === c ? "t" : !1 === c ? "f" : ba(c);
                a[D](b + "=" + c)
            }
            return a[Cf]("&")
        }
    });
    f[w](Gt, "supports32BitProcesses", {
        value: !1
    });
    f[w](Gt, "supports64BitProcesses", {
        value: !1
    });
    f[w](Gt, "touchscreenType", {
        value: ""
    });
    f[w](Gt, "version", {
        get: function () {
            return "HTML 11,0,0,0"
        }
    });
    Gt.hasMultiChannelAudio = function (a) {
        Z(a, "String", "");
        Y(this, "hasMultiChannelAudio");
        return !1
    };
    var It = function (a) {
        return function (b) {
            return b.hasMultiChannelAudio(a)
        }
    }, Ht = {
            A: "hasAudio",
            SA: "hasStreamingAudio",
            SV: "hasStreamingVideo",
            EV: "hasEmbeddedVideo",
            MP3: "hasMP3",
            AE: "hasAudioEncoder",
            VE: "hasVideoEncoder",
            ACC: "hasAccessibility",
            PR: "hasPrinting",
            SP: "hasScreenPlayback",
            SB: "hasScreenBroadcast",
            DEB: "isDebugger",
            V: "version",
            M: "manufacturer",
            R: function (a) {
                return a.screenResolutionX + "x" + a.screenResolutionY
            },
            COL: "screenColor",
            AR: "pixelAspectRatio",
            OS: "os",
            ARCH: "cpuArchitecture",
            L: "language",
            PR32: "supports32BitProcesses",
            PR64: "supports64BitProcesses",
            PT: "playerType",
            AVD: "avHardwareDisable",
            LFD: "localFileReadDisable",
            WD: function () {
                return !1
            },
            TLS: "hasTLS",
            ML: "maxLevelIDC",
            DP: "screenDPI",
            IME: "hasIME",
            DD: It("DolbyDigital"),
            DDP: It("DolbyDigitalPlus"),
            DTS: It("DTS"),
            DTE: It("DTSExpress"),
            DTH: It("DTSHDHighResolutionAudio"),
            DTM: It("DTSHDMasterAudio")
        };
    T(function (a, b, c) {
        a = Z(a, "Boolean", !1);
        b = Z(b, "flash.system.ApplicationDomain", null);
        c = Z(c, "flash.system.SecurityDomain", null);
        W(this, "allowCodeImport", "Boolean", !1);
        W(this, "allowLoadBytesCodeExecution", "Boolean", !1);
        W(this, "applicationDomain", "flash.system.ApplicationDomain", b);
        W(this, "checkPolicyFile", "Boolean", a);
        W(this, "imageDecodingPolicy", "String", "");
        W(this, "parameters", "Object", null);
        W(this, "requestedContentParent", "flash.display.DisplayObjectContainer", null);
        W(this, "securityDomain", "flash.system.SecurityDomain",
            c);
        Y(this)
    }, "flash.system.LoaderContext");
    var Jt = rq(2012);
    Jt.o = T(Jt, "flash.system.Security");
    W(Jt.o, "exactSettings", "Boolean", !1);
    X(Jt.o, "pageDomain", void 0);
    X(Jt.o, "sandboxType", "remote");
    X(Jt.o, "LOCAL_TRUSTED", "localTrusted");
    X(Jt.o, "LOCAL_WITH_FILE", "localWithFile");
    X(Jt.o, "LOCAL_WITH_NETWORK", "localWithNetwork");
    X(Jt.o, "REMOTE", "remote");
    Jt.o.allowDomain = function () {
        Y(Jt)
    };
    Jt.o.allowInsecureDomain = function () {
        Y(Jt)
    };
    Jt.o.loadPolicyFile = function (a) {
        Z(a, "String");
        Y(Jt)
    };
    Jt.o.showSettings = function (a) {
        Z(a, "String", "default");
        Y(Jt)
    };
    var Kt = T(function () {}, "flash.system.SecurityDomain");
    X(Kt, "currentDomain", "");
    var Dq = function (a) {
        Iq[I](this, a);
        f[w](this, "__swiffy_d", {
            value: new ll(this)
        });
        X(this, "actionScriptVersion", 0);
        f[w](this, "applicationDomain", {
            get: function () {
                Y(this, "applicationDomain");
                return oq[I](Ft)
            }
        });
        X(this, "bytes", null);
        X(this, "bytesLoaded", 0);
        X(this, "bytesTotal", 0);
        X(this, "childAllowsParent", !0);
        W(this, "childSandboxBridge", "Object", null);
        X(this, "contentType", "");
        X(this, "frameRate", 0);
        X(this, "height", 0);
        W(this, "isURLInaccessible", "Boolean", !1);
        X(this, "parentAllowsChild", !0);
        W(this, "parentSandboxBridge",
            "Object", null);
        X(this, "sameDomain", !1);
        X(this, "sharedEvents", new Iq);
        X(this, "swfVersion", 0);
        X(this, "uncaughtErrorEvents", null);
        X(this, "width", 0);
        Y(this)
    }, Lt = T(Dq, "flash.display.LoaderInfo", Iq);
    f[w](Dq[H], "content", {
        get: function () {
            return this.__swiffy_d.content
        }
    });
    f[w](Dq[H], "loader", {
        get: function () {
            return this.__swiffy_d.eq
        }
    });
    f[w](Dq[H], "loaderURL", {
        get: function () {
            return this.__swiffy_d.hv()
        }
    });
    f[w](Dq[H], "parameters", {
        get: function () {
            return this.__swiffy_d.pn
        }
    });
    f[w](Dq[H], "url", {
        get: function () {
            return this.__swiffy_d.Od
        }
    });
    Lt.getLoaderInfoByDefinition = function (a) {
        Z(a, "Object");
        Y(Dq, "getLoaderInfoByDefinition");
        return null
    };
    var Mt = function () {
        Ps[I](this);
        X(this, "content", null);
        var a = new Dq;
        X(this, "contentLoaderInfo", a);
        a = a.__swiffy_d;
        a.St(ao.ih().Od);
        a.eq = this;
        X(this, "uncaughtErrorEvents", null)
    }, Nt = T(Mt, "flash.display.Loader", Ts);
    (new jl(0, 0, null, null)).sm(Nt);
    Sa(Mt[H], function () {
        Y(this)
    });
    fb(Mt[H], function (a, b) {
        a = Z(a, "flash.net.URLRequest");
        b = Z(b, "flash.system.LoaderContext", null);
        Y(this);
        var c = a.url,
            d = this.contentLoaderInfo,
            e = d.__swiffy_d;
        e.Zf(c);
        var h = Zi(c),
            k;
        for (k in h) {
            var n = h[k];
            f[w](e.pn, k, {
                value: n[G] ? n[n[G] - 1] : void 0,
                configurable: !0,
                enumerable: !0
            })
        }
        var u = this.__swiffy_d,
            h = new fl;
        h.Cb = function (a, b) {
            u.Qc(0) && (u.ce(0), d[fc](new Hr(Jr.UNLOAD)));
            var c = u.a,
                h = new gj,
                k = ml(a, c, h);
            d[fc](new Hr(Jr.OPEN));
            d[fc](new Yr(Zr.PROGRESS, !1, !1, 1024, 1024));
            c.ri(h, function () {
                var a = new el(k, c, null);
                a.rn(!0);
                a.ee = !0;
                a.Ub(c.kh());
                a.ea();
                a.cn(e);
                e.content = a.t;
                u.cc(a, 0);
                c.Ja();
                d[fc](new Hr(Jr.INIT));
                d[fc](new $r(as.HTTP_STATUS, !1, !1, b));
                d[fc](new Hr(Jr.COMPLETE));
                c.Ja()
            })
        };
        h.wc = function () {};
        il(c, u.a, a[Ec], a[s] ? a[s][Sc]() : null, h, a.requestHeaders)
    });
    Mt[H].loadBytes = function (a, b) {
        Z(a, "flash.utils.ByteArray");
        Z(b, "flash.system.LoaderContext", null);
        Y(this)
    };
    Mt[H].loadFilePromise = function (a, b) {
        Z(a, "flash.desktop.IFilePromise");
        Z(b, "flash.system.LoaderContext", null);
        Y(this)
    };
    Mt[H].unload = function () {
        Y(this)
    };
    Mt[H].unloadAndStop = function (a) {
        Z(a, "Boolean", !0);
        Y(this)
    };
    var Ot = function () {
        Iq[I](this)
    };
    T(Ot, "flash.display.NativeMenu", Iq);
    Ot[H].clone = function () {
        return new Ot
    };
    var Pt = function () {
        Iq[I](this)
    };
    T(Pt, "flash.display.NativeMenuItem", Iq);
    Pt[H].clone = function () {
        return new Pt
    };
    var Qt = function () {
        Iq[I](this);
        W(this, "builtInItems", "flash.ui.ContextMenuBuiltInItems", null);
        W(this, "clipboardItems", "flash.ui.ContextMenuClipboardItems", null);
        W(this, "clipboardMenu", "Boolean", !1);
        W(this, "customItems", "Array", []);
        W(this, "link", "flash.net.URLRequest", null)
    }, Rt = T(Qt, "flash.ui.ContextMenu", Ot);
    f[w](Rt, "isSupported", {
        value: !1
    });
    Qt[H].clone = function () {
        return new Qt
    };
    Qt[H].hideBuiltInItems = function () {
        Y(this)
    };
    var St = function (a, b, c, d) {
        Iq[I](this);
        a = Z(a, "String");
        b = Z(b, "Boolean", !1);
        d = Z(d, "Boolean", !0);
        W(this, "caption", "String", a);
        W(this, "separatorBefore", "Boolean", b);
        W(this, "visible", "Boolean", d)
    }, Tt = T(St, "flash.ui.ContextMenuItem", Pt);
    St[H].clone = function () {
        return new St(this.caption, this.separatorBefore, this.enabled, this[Ne])
    };
    Tt.systemClearMenuItem = function () {
        Y(this);
        return null
    };
    Tt.systemCopyLinkMenuItem = function () {
        Y(this);
        return null
    };
    Tt.systemCopyMenuItem = function () {
        Y(this);
        return null
    };
    Tt.systemCutMenuItem = function () {
        Y(this);
        return null
    };
    Tt.systemOpenLinkMenuItem = function () {
        Y(this);
        return null
    };
    Tt.systemPasteMenuItem = function () {
        Y(this);
        return null
    };
    Tt.systemSelectAllMenuItem = function () {
        Y(this);
        return null
    };
    var Ut = T(function () {}, "flash.utils.CompressionAlgorithm");
    f[qe](Ut, {
        DEFLATE: {
            value: "deflate"
        },
        ZLIB: {
            value: "zlib"
        }
    });
    var Ds = T(function () {}, "flash.utils.Endian");
    f[w](Ds, "BIG_ENDIAN", {
        value: "bigEndian"
    });
    f[w](Ds, "LITTLE_ENDIAN", {
        value: "littleEndian"
    });
    var Bp = function () {
        f[w](this, "__swiffy_v", {
            value: {}
        })
    };
    T(Bp, "flash.utils.Dictionary");
    var Vt = 0,
        Wt = function (a, b) {
            this.key = Nf(a) && /^[0-9]+$/ [$d](a) ? ha(a, 10) : a;
            gb(this, b)
        }, Xt = function (a) {
            if (!a.qa && !a.uri) switch (a = a[yc], typeof a) {
            case "object":
                if (null === a) return "_null";
            case "function":
                var b = a.__swiffy_dic_key;
                b || (a.__swiffy_dic_key = b = ++Vt);
                return b;
            default:
                return "_" + a
            }
        };
    f[w](Bp[H], "toJSON", {
        value: function (a) {
            return a = Z(a, "String")
        },
        writable: !0,
        configurable: !0
    });
    f[w](Bp[H], "__swiffy_proxy", {
        value: {
            Eg: function (a, b) {
                var c = Xt(a);
                if (c) return c = (c = this.__swiffy_v[c]) && c[ke], Hq(this, c, b, a);
                throw R(1069, a.jb(), "flash.utils.Dictionary");
            },
            Ec: function (a) {
                return (a = Xt(a)) ? delete this.__swiffy_v[a] : !1
            },
            Wd: function (a) {
                var b = Xt(a);
                if (b) return (a = this.__swiffy_v[b]) && a[ke];
                throw R(1069, a.jb(), "flash.utils.Dictionary");
            },
            Cf: function (a) {
                return (a = Xt(a)) ? a in this.__swiffy_v : !1
            },
            Xg: function (a) {
                var b = this.__swiffy_v;
                return b[f[Oe](b)[a - 1]].key
            },
            sf: function (a) {
                var b = this.__swiffy_v;
                return a++ < f[Oe](b)[G] ? a : 0
            },
            Yg: function (a) {
                var b = this.__swiffy_v;
                return b[f[Oe](b)[a - 1]][ke]
            },
            setProperty: function (a, b) {
                var c = Xt(a);
                if (c) this.__swiffy_v[c] = new Wt(a[yc], b);
                else throw R(1056, a.jb(), "flash.utils.Dictionary");
            }
        }
    });
    var Yt = function (a) {
        return a.__swiffy_v
    }, Zt = T(function (a, b) {
            Iq[I](this);
            var c = Yt(this);
            c.Em = null;
            c.Tj = !1;
            c.wq = Z(a, "Number");
            c.xq = Z(b, "int", 0);
            c.ki = 0
        }, "flash.utils.Timer", Iq);
    S(Zt, "delay", function () {
        return Yt(this).wq
    });
    Yp(Zt, "delay", function (a) {
        Yt(this).wq = Z(a, "Number")
    });
    S(Zt, "repeatCount", function () {
        return Yt(this).xq
    });
    Yp(Zt, "repeatCount", function (a) {
        Yt(this).xq = Z(a, "int")
    });
    S(Zt, "running", function () {
        return Yt(this).Tj
    });
    S(Zt, "currentCount", function () {
        return Yt(this).ki
    });
    Xp(Zt, "start", function () {
        var a = Yt(this);
        if (!a.Tj) {
            var b = this;
            a.Em = ca.setInterval(function () {
                a.ki++;
                var c = b.repeatCount;
                if (!c || a.ki <= c) b[fc](wq[I](Ur, Vr.TIMER, !1, !1));
                a.ki == c && (b[Se](), b[fc](wq[I](Ur, Vr.TIMER_COMPLETE, !1, !1)))
            }, this.delay);
            a.Tj = !0
        }
    });
    Xp(Zt, "stop", function () {
        var a = Yt(this);
        ca.clearTimeout(a.Em);
        a.Tj = !1;
        a.Em = null
    });
    Xp(Zt, "reset", function () {
        this[Se]();
        Yt(this).ki = 0
    });
    var au = function (a, b, c) {
        f[w](this, "__swiffy_v", {
            value: a
        });
        c && $t(this, 0);
        W(this, "fixed", "Boolean", !! b);
        f[w](this, "length", {
            get: function () {
                return this.__swiffy_v[G]
            },
            set: function (a) {
                a = Z(a, "uint");
                if (this[oe]) throw R(1126);
                var b = this.__swiffy_v[G];
                tb(this.__swiffy_v, a);
                $t(this, b)
            }
        })
    }, bu = function (a) {
            return a.__swiffy_classdef.__swiffy_v.fk ? 0 : null
        }, $t = function (a, b) {
            for (var c = a.__swiffy_v, d = bu(a); b < c[G]; b++) c[b] = d
        }, cu = function (a, b, c) {
            if (null == b) return bu(a);
            a = a.__swiffy_classdef.__swiffy_v;
            return !a[E] ||
                c && !a.fk ? b : vq(b, a[E])
        }, Gs = function (a, b) {
            var c = f[Yc](a[H]);
            au[I](c, b || []);
            return c
        };
    ub(au, f[Yc](fq[H]));
    var du = function (a, b) {
        var c = function (a) {
            if (hq(a, c, !1)) return a;
            if (null == a || f(a) !== a) throw R(1034, Cp(a), c.__swiffy_name);
            var b = Gs(c);
            a instanceof au && (a = a.__swiffy_v);
            if (Lf(a))
                for (var h = b.__swiffy_v, k = 0; k < a[G]; k++) h[k] = cu(b, a[k]);
            return b
        };
        f[w](c, "__swiffy_v", {
            value: {
                type: a,
                fk: b
            }
        });
        return c
    }, eu = function () {
            return function (a, b) {
                a = Z(a, "uint", 0);
                b = Z(b, "Boolean", !1);
                au[I](this, m(a), b, !0)
            }
        }, fu = new Ap("__AS3__.vec", "Vector", !1),
        Is = function (a, b, c, d) {
            d = d || Jp[H];
            var e = (new Hp(fu)).uq(a && a.__swiffy_name).vq(),
                h = d[e];
            h || (h = qq(eu(), e, {
                pf: du(a, b),
                Kt: iq,
                Ml: c ? au : gu
            }), d[e] = h);
            return h
        }, hu = function (a, b, c) {
            a = Is(a && Jp[H][a], b, !0);
            Kp(fu + "$" + c, a);
            return a
        }, gu = hu(null, !1, "object");
    hu("int", !0, "int");
    var Hs = hu("uint", !0, "uint"),
        Js = hu("Number", !0, "double"),
        iu = T(function () {
            throw R(1007);
        }, fu);
    f[w](iu, "__swiffy_type_apply", {
        value: function (a, b) {
            if (1 != b[G]) throw "PANIC! Wrong number of vector type parameters";
            return Is(b[0], !1, !1, a)
        }
    });
    f[w](au[H], "__swiffy_proxy", {
        value: {
            Eg: function (a, b) {
                var c = a.hi(1069, this),
                    d = this.__swiffy_v;
                if (c >= d[G]) throw R(1125, c, d[G]);
                c = d[c];
                if (!M(c)) throw R(1006);
                return c[B](this, b)
            },
            Ec: function (a) {
                return !a.Gb(this)
            },
            Wd: function (a) {
                a = a.hi(1069, this);
                var b = this.__swiffy_v;
                if (a >= b[G]) throw R(1125, a, b[G]);
                return b[a]
            },
            Cf: function (a) {
                return a.bd() < this.__swiffy_v[G]
            },
            Xg: function (a) {
                return a - 1
            },
            sf: function (a) {
                return ++a > this.__swiffy_v[G] ? 0 : a
            },
            Yg: function (a) {
                return this.__swiffy_v[a - 1]
            },
            setProperty: function (a,
                b) {
                var c = a.hi(1056, this),
                    d = this.__swiffy_v;
                if (c > d[G] || c == d[G] && this[oe]) throw R(1125, c, d[G]);
                d[c] = cu(this, b)
            }
        }
    });
    var ju = function (a, b, c) {
        if (!hq(c, a, !1)) throw R(1034, Cp(c), a.__swiffy_name);
        b[D][B](b, c.__swiffy_v)
    }, ku = function (a, b, c, d) {
            if (null != b) {
                b = Z(b, "Function");
                c = null != c ? c : ao.Ah();
                for (var e = a.__swiffy_v, h = 0; h < e[G]; h++) {
                    var k = e[h],
                        n = b[I](c, k, h, a);
                    if (d && d[I](a, n, k)) return !1
                }
            }
            return !0
        }, tu = function (a, b, c, d) {
            if (a[oe]) throw R(1126);
            var e = a.__swiffy_v,
                h = d[G];
            c = [b, c];
            tb(c, c[G] + h);
            c = e[Af][B](e, c);
            var k = 0;
            try {
                for (; 0 < h; k++, b++, h--) e[b] = cu(a, d[k])
            } finally {
                for (a = bu(a); 0 < h; b++, h--) e[b] = a
            }
            return c
        };
    ra(au[H], function (a) {
        var b = this.__swiffy_classdef,
            c = this.__swiffy_v[ee]();
        if (10 < ao.a.mb)
            for (var d = 0; d < arguments[G]; d++) ju(b, c, arguments[d]);
        else
            for (d = arguments[G] - 1; 0 <= d; d--) ju(b, c, arguments[d]);
        return Gs(b, c)
    });
    $(au[H], "concat");
    au[H].every = function (a, b) {
        return ku(this, a, b, function (a) {
            return !a
        })
    };
    $(au[H], "every");
    au[H].filter = function (a, b) {
        var c = [];
        ku(this, a, b, function (a, b) {
            a && c[D](b)
        });
        return Gs(this.__swiffy_classdef, c)
    };
    $(au[H], "filter");
    au[H].forEach = function (a, b) {
        ku(this, a, b)
    };
    $(au[H], "forEach");
    au[H].indexOf = function (a, b) {
        a = cu(this, a, !0);
        b = Z(b, "int", 0);
        return this.__swiffy_v[pe](a, b)
    };
    $(au[H], "indexOf");
    au[H].join = function (a) {
        a = Z(a, "String", ",");
        return this.__swiffy_v[Cf](a)
    };
    $(au[H], "join");
    au[H].lastIndexOf = function (a, b) {
        a = cu(this, a, !0);
        b = Z(b, "int", 2147483647);
        return this.__swiffy_v[lf](a, b)
    };
    $(au[H], "lastIndexOf");
    au[H].map = function (a, b) {
        var c = [];
        ku(this, a, b, function (a) {
            c[D](cu(this, a))
        });
        return Gs(this.__swiffy_classdef, c)
    };
    $(au[H], "map");
    au[H].pop = function () {
        if (this[oe]) throw R(1126);
        var a = this.__swiffy_v;
        return a[G] ? a.pop() : this.__swiffy_classdef.__swiffy_v.fk ? 0 : void 0
    };
    $(au[H], "pop");
    au[H].push = function (a) {
        var b = this.__swiffy_v;
        tu(this, b[G], 0, arguments);
        return b[G]
    };
    $(au[H], "push");
    au[H].reverse = function () {
        this.__swiffy_v.reverse();
        return this
    };
    $(au[H], "reverse");
    au[H].shift = function () {
        if (this[oe]) throw R(1126);
        var a = this.__swiffy_v;
        return a[G] ? a[Pb]() : this.__swiffy_classdef.__swiffy_v.fk ? 0 : void 0
    };
    $(au[H], "shift");
    au[H].slice = function (a, b) {
        a = Z(a, "int", 0);
        b = Z(b, "int", 16777215);
        return Gs(this.__swiffy_classdef, this.__swiffy_v[ee](a, b))
    };
    $(au[H], "slice");
    au[H].some = function (a, b) {
        return !ku(this, a, b, function (a) {
            return a
        })
    };
    $(au[H], "some");
    au[H].sort = function (a) {
        this.__swiffy_v.sort(a);
        return this
    };
    $(au[H], "sort");
    au[H].splice = function (a, b, c) {
        a = Z(a, "int");
        b = Z(b, "uint");
        c = m[H][ee][I](arguments, 2);
        return Gs(this.__swiffy_classdef, tu(this, a, b, c))
    };
    $(au[H], "splice");
    au[H].toLocaleString = function () {
        return this[Sc]()
    };
    au[H].unshift = function (a) {
        tu(this, 0, 0, arguments);
        return this.__swiffy_v[G]
    };
    $(au[H], "unshift");
    Ia(au[H], function () {
        return this.__swiffy_v[Cf](",")
    });
    var vu = function (a) {
        this.xd = f[Yc](uu[H]);
        f[w](this.xd, "__swiffy_v", {
            value: this
        });
        this.parent = a
    };
    K = vu[H];
    pb(K, null);
    Aa(K, null);
    K.attributes = null;
    K.children = null;
    gb(K, null);
    K.Pj = function (a, b) {
        b[D](this.Xd(a));
        return a
    };
    K.gi = function () {
        return !1
    };
    K.ck = function () {
        return !this.gi()
    };
    K.Rg = function () {
        if (this[ud])
            for (var a = 0; a < this[ud][De][G]; a++)
                if (this[ud][De][a] == this) return a;
        return -1
    };
    K.Sg = function (a, b) {
        return !b && !a.qa && "*" == a[yc]
    };
    K.Jm = function () {
        return !1
    };
    K.Df = function (a) {
        return a
    };
    K.Ug = function (a) {
        return a
    };
    K.Qm = function (a) {
        return a
    };
    K.Rm = function (a) {
        return a
    };
    K.Sm = function (a) {
        return a
    };
    var jr = function (a, b, c) {
        vu[I](this, a);
        pb(this, b);
        Aa(this, c || []);
        this.attributes = [];
        this.children = []
    };
    N(jr, vu);
    K = jr[H];
    K.Fe = "element";
    K.Xd = function (a) {
        var b = [];
        a = this.Pj(a, b);
        return wu(b, a)
    };
    K.Pj = function (a, b, c) {
        a = a || this.gi();
        if (!a) {
            for (a = 0; a < this[De][G]; a++) this[De][a].Pj(!1, b);
            return !1
        }
        c = new xu(c);
        for (a = 0; a < this[Dc][G]; a++) c.Sp(this[Dc][a]);
        var d = c.aq(this[F]),
            e = "<" + d;
        for (a = 0; a < this[Nd][G]; a++) var h = this[Nd][a],
        e = e + (" " + c.aq(h[F]) + '="' + Un(h[ke]) + '"');
        e += c.At();
        if (0 == this[De][G]) b[D](e + "/>");
        else if (1 == this[De][G] && "text" == this[De][0].Fe) b[D](e + ">" + this[De][a].Xd(!0) + "</" + d + ">");
        else {
            h = [];
            for (a = 0; a < this[De][G]; a++) this[De][a].Pj(!0, h, c);
            b[D](e + ">");
            b[D](h);
            b[D]("</" + d + ">")
        }
        return !0
    };
    K.gi = function () {
        for (var a = 0; a < this[De][G]; a++)
            if (this[De][a] instanceof jr) return !0;
        return !1
    };
    ya(K, function (a) {
        a = new jr(a, this[F], this[Dc][ee]());
        for (var b = 0; b < this[Nd][G]; b++) a[Nd][D](this[Nd][b][Bc](a));
        for (b = 0; b < this[De][G]; b++) a[De][D](this[De][b][Bc](a));
        return a
    });
    K.Sg = function (a) {
        if (a.qa) return !1;
        if ("*" == a[yc]) return !0;
        var b = this[F].__swiffy_v;
        return a[yc] == b[yc] && a.uri == b.uri
    };
    K.Jm = function (a) {
        for (var b = a.qa ? this[Nd] : this[De], c = 0; c < b[G]; c++)
            if (b[c].Sg(a, !1)) return !0;
        return !1
    };
    K.Df = function (a, b, c) {
        var d = L(c);
        c = (c = d ? c : b.qa) ? this[Nd] : this[De];
        for (var e = 0; e < c[G]; e++) {
            var h = c[e];
            h.Sg(b, d) && a[D](h)
        }
        return a
    };
    K.Ug = function (a, b, c) {
        if (b.qa)
            for (var d = 0; d < this[Nd][G]; d++) {
                var e = this[Nd][d];
                e.Sg(b, c) && a[D](e)
            }
        for (d = 0; d < this[De][G]; d++) e = this[De][d], e.Sg(b, c) && a[D](e), e.Ug(a, b, c);
        return a
    };
    K.Qm = function (a) {
        for (var b = 0; b < this[Nd][G]; b++) a[D](this[Nd][b]);
        return a
    };
    K.Rm = function (a) {
        for (var b = 0; b < this[De][G]; b++) a[D](this[De][b]);
        return a
    };
    K.Sm = function (a, b) {
        for (var c = 0; c < this[De][G]; c++) {
            var d = this[De][c];
            d.Fe == b && a[D](d)
        }
        return a
    };
    K.Gc = function (a, b) {
        this[Nd][D](new yu(this, a, b));
        return this
    };
    K.wf = function (a) {
        a = new jr(this, a, []);
        this[De][D](a);
        return a
    };
    var yu = function (a, b, c) {
        vu[I](this, a);
        pb(this, b);
        gb(this, c)
    };
    N(yu, vu);
    K = yu[H];
    K.Fe = "attribute";
    K.Xd = function (a) {
        return a ? Un(this[ke]) : this[ke]
    };
    ya(K, function (a) {
        return new yu(a, this[F], this[ke])
    });
    K.Rg = function () {
        return -1
    };
    K.Sg = function (a, b) {
        if ("*" == a[yc]) return !0;
        var c = this[F].__swiffy_v;
        return a[yc] == c[yc] && (b && !c.uri || a.uri == c.uri)
    };
    var zu = function (a, b) {
        vu[I](this, a);
        gb(this, b)
    };
    N(zu, vu);
    zu[H].Fe = "text";
    zu[H].Xd = function (a) {
        return a ? Tn(this[ke]) : this[ke]
    };
    ya(zu[H], function (a) {
        return new zu(a, this[ke])
    });
    var Au = function (a, b) {
        vu[I](this, a);
        gb(this, b)
    };
    N(Au, vu);
    Au[H].Fe = "text";
    Au[H].Xd = function (a) {
        return a ? "<![CDATA[" + this[ke] + "]]\x3e" : this[ke]
    };
    ya(Au[H], function (a) {
        return new Au(a, this[ke])
    });
    var Bu = function (a, b) {
        if (a instanceof zp) return a.__swiffy_v;
        a = Z(a, "String", b);
        var c = "@" == a[cc](0);
        c && (a = a[rf](1));
        return new Ap("", a, c)
    }, Cu = function (a) {
            try {
                return a[gd]()
            } catch (b) {
                switch (b[E]) {
                case "tag":
                case "close":
                    throw R(1090);
                case "cdata":
                    throw R(1091);
                case "comment":
                    throw R(1094);
                case "processing_instruction":
                    throw R(1097);
                case "attribute":
                    throw R(1095);
                default:
                    throw b;
                }
            }
        }, Du = function (a, b) {
            for (var c = new li, d = 0; d < a[G];) {
                var e = a[d],
                    h = e[F][lc](/^xmlns(?::(.*))?$/);
                h ? (c.set(h[1] || "", e[ke]), a[Af](d,
                    1)) : d++
            }
            d = ao.jh;
            b || !d || c.Ud("") || c.set("", d);
            this.Np = c;
            this.ha = b
        };
    Du[H].vm = function (a, b, c) {
        if (!L(c)) {
            var d = b[pe](":");
            c = 0 <= d ? b[rf](0, d) : "";
            b = 0 <= d ? b[rf](d + 1) : b
        }
        if (a && !c) return fr("", b, !0);
        d = this.Np.get(c);
        if (L(d)) return fr(d, b, a);
        if (this.ha) return this.ha.vm(a, b, c);
        if (c) throw R(1083, c, b);
        return fr("", b, !1)
    };
    Du[H].Fu = function () {
        return this.Np.map(function (a, b) {
            return new yq(b, a)
        })
    };
    var Eu = function (a, b, c, d) {
        for (var e = c || null, h; h = Cu(a);) switch (h[E]) {
        case "tag":
            c = h[Nd];
            b = new Du(c, b);
            for (var k = new jr(e, b.vm(!1, h[ke]), b.Fu()), n = 0; n < c[G]; n++) {
                var u = c[n];
                k[Nd][D](new yu(k, b.vm(!0, u[F]), u[ke]))
            }
            for (;;) {
                c = Eu(a, b, k, h[ke]);
                if (!c) return k;
                k[De][D](c)
            }
        case "close":
            if (e) {
                if (d != h[ke]) throw R(1085, e[F][yc]);
                return null
            }
            throw R(1088);
        case "text":
            return new zu(e || null, h[ke]);
        case "cdata":
            return new Au(e || null, h[ke])
        }
        if (!c) return null;
        throw R(1085, e[F][yc]);
    }, xu = function (a) {
            this.Xj = [];
            this.Ie =
                (this.Im = !L(a)) ? {} : a.Ie
        };
    xu[H].hu = function () {
        if (!this.Im) {
            var a = {}, b;
            for (b in this.Ie) a[b] = this.Ie[b];
            this.Ie = a;
            this.Im = !0
        }
    };
    xu[H].Sp = function (a) {
        var b = a.prefix || "",
            c = a.uri,
            d = this.Ie[c];
        d != b && (void 0 === d && (this.hu(), this.Ie[c] = b), this.Xj[D](a))
    };
    xu[H].aq = function (a) {
        var b = a.uri;
        a = a[yc];
        if (!b) return a;
        var c = this.Ie[b];
        if (!c) {
            for (var c = "", d = 0; c in this.Ie; d++) c = q[ye](97 + d / 17576) + q[ye](97 + d / 17576 % 26) + q[ye](97 + d / 676 % 26) + q[ye](97 + d / 26 % 26);
            this.Sp(new yq(c, b))
        }
        return c ? c + ":" + a : a
    };
    xu[H].At = function () {
        for (var a = "", b = 0; b < this.Xj[G]; b++) {
            var a = a + " xmlns",
                c = this.Xj[b],
                d = c.prefix;
            d && (a += ":" + d);
            a += '="' + Un(c.uri) + '"'
        }
        this.Xj = [];
        return a
    };
    var wu = function (a, b) {
        b = b && Yq.prettyPrinting;
        var c = "";
        if (b)
            for (var d = Yq.prettyIndent; 0 < d; d--) c += " ";
        var e = [],
            h = function (a, d) {
                for (var u = 0; u < a[G]; u++)
                    if (Lf(a[u])) h(a[u], d + c);
                    else if (b)
                    for (var y = a[u][ec]()[hd](/\n/), C = 0; C < y[G]; C++) e[D](d + y[C]);
                else e[D](a[u])
            };
        h(a, "");
        return e[Cf](b ? "\n" : "")
    };
    var uu = function (a) {
        if (a instanceof Fu) return a = Gu[I](a, 1088), Hu[Bc][I](a);
        if (a instanceof uu) return Hu[Bc][I](a);
        if (null != a) {
            a = Z(a, "String");
            a = new Zn(a, Yq.ignoreWhitespace, !1);
            var b = Eu(a);
            b || (b = new zu(null, ""));
            if (Cu(a)) throw R(1088);
            return b.xd
        }
        return (new zu(null, "")).xd
    }, Yq = function (a) {
            return a instanceof uu ? a : a instanceof Fu ? Gu[I](a, 1088) : new uu(a)
        };
    qq(uu, "XML", {
        pf: Yq,
        Hm: uu
    });
    W(Yq, "ignoreComments", "Boolean", !0);
    W(Yq, "ignoreProcessingInstructions", "Boolean", !0);
    W(Yq, "ignoreWhitespace", "Boolean", !0);
    W(Yq, "prettyIndent", "int", 2);
    W(Yq, "prettyPrinting", "Boolean", !0);
    var Iu = function (a) {
        return 0 == a.bd() || this.__swiffy_v.Jm(a)
    };
    f[w](uu[H], "__swiffy_proxy", {
        value: {
            Eg: function (a, b) {
                var c = Hu[a];
                if (M(c)) return c[B](this, b);
                c = q[H][a];
                if (M(c) && this.__swiffy_v.ck()) return c[B](this[Sc](), b);
                throw R(1006, "value");
            },
            Ec: function () {
                return !1
            },
            bk: function (a) {
                a = this.__swiffy_v.Ug([], a, !1);
                return Ju(a)
            },
            Wd: function (a) {
                if (0 == a.bd()) return this;
                a = this.__swiffy_v.Df([], a);
                return Ju(a)
            },
            setProperty: function (a) {
                if (L(a.bd())) throw R(1087);
            },
            Cf: Iu,
            Xg: function () {
                return "0"
            },
            sf: function (a) {
                return 0 == a ? 1 : 0
            },
            Yg: function () {
                return this
            }
        }
    });
    uu[H].hasOwnProperty = function (a) {
        return Iu[I](this, Bu(a))
    };
    Ia(uu[H], function () {
        return this.__swiffy_v.Xd(!1)
    });
    cb(uu[H], function () {
        return this
    });
    uu[H].toJSON = function () {
        return "XML"
    };
    var Hu = {
        addNamespace: function () {
            Y(this);
            return this
        },
        appendChild: function (a) {
            Y(this);
            Z(a, "Object");
            return this
        },
        attribute: function (a) {
            a = Bu(a);
            a = this.__swiffy_v.Df([], a, !0);
            return Ju(a)
        },
        attributes: function () {
            var a = this.__swiffy_v.Qm([]);
            return Ju(a)
        },
        child: function (a) {
            Z(a, "Object");
            Y(this);
            return Ju([])
        },
        childIndex: function () {
            return this.__swiffy_v.Rg()
        },
        children: function () {
            var a = this.__swiffy_v.Rm([]);
            return Ju(a)
        },
        comments: function () {
            Y(this);
            return Ju([])
        },
        contains: function (a) {
            Z(a, "XML");
            Y(this);
            return !1
        },
        copy: function () {
            return this.__swiffy_v[Bc](null).xd
        }
    };
    Yq.defaultSettings = function () {
        return {
            ignoreComments: !0,
            ignoreProcessingInstructions: !0,
            ignoreWhitespace: !0,
            prettyIndent: 2,
            prettyPrinting: !0
        }
    };
    Hu.descendants = function (a) {
        a = Bu(a, "*");
        a = this.__swiffy_v.Ug([], a, !0);
        return Ju(a)
    };
    Hu.elements = function (a) {
        a = Bu(a, "*");
        a = this.__swiffy_v.Df([], a, !1);
        return Ju(a)
    };
    Hu.hasComplexContent = function () {
        return this.__swiffy_v.gi()
    };
    Hu.hasSimpleContent = function () {
        return this.__swiffy_v.ck()
    };
    Hu.inScopeNamespaces = function () {
        Y(this);
        return []
    };
    Hu.insertChildAfter = function (a, b) {
        Z(a, "Object");
        Z(b, "Object");
        Y(this)
    };
    Hu.insertChildBefore = function (a, b) {
        Z(a, "Object");
        Z(b, "Object");
        Y(this)
    };
    tb(Hu, function () {
        return 1
    });
    Hu.localName = function () {
        var a = this.__swiffy_v[F];
        return a ? a[yc] : null
    };
    pb(Hu, function () {
        return this.__swiffy_v[F]
    });
    Hu.namespace = function (a) {
        Z(a, "String", "null");
        Y(this);
        return null
    };
    Hu.namespaceDeclarations = function () {
        Y(this);
        return []
    };
    Hu.nodeKind = function () {
        return this.__swiffy_v.Fe
    };
    Fb(Hu, function () {
        Y(this);
        return this
    });
    Hu.parent = function () {
        var a = this.__swiffy_v;
        if (a[ud]) return a[ud].xd
    };
    Hu.prependChild = function (a) {
        Z(a, "Object");
        Y(this);
        return this
    };
    Hu.processingInstructions = function (a) {
        Z(a, "String", "*");
        Y(this);
        return Ju([])
    };
    Hu.propertyIsEnumerable = function (a) {
        return "0" == Bu(a).bd()
    };
    Hu.removeNamespace = function (a) {
        Z(a, "Namespace");
        Y(this);
        return this
    };
    oa(Hu, function (a, b) {
        Z(a, "Object");
        Z(b, "XML");
        Y(this);
        return this
    });
    Hu.setChildren = function (a) {
        Z(a, "Object");
        Y(this);
        return this
    };
    Hu.setLocalName = function (a) {
        Z(a, "String");
        Y(this)
    };
    Hu.setName = function (a) {
        Z(a, "String");
        Y(this)
    };
    Hu.setNamespace = function (a) {
        Z(a, "Namespace");
        Y(this)
    };
    Yq.setSettings = function (a) {
        Qf(a) || (a = uu.defaultSettings());
        Of(a.ignoreComments) && (Yq.ignoreComments = a.ignoreComments);
        Of(a.ignoreProcessingInstructions) && (Yq.ignoreProcessingInstructions = a.ignoreProcessingInstructions);
        Of(a.ignoreWhitespace) && (Yq.ignoreWhitespace = a.ignoreWhitespace);
        Pf(a.prettyIndent) && (Yq.prettyIndent = a.prettyIndent);
        Of(a.prettyPrinting) && (Yq.prettyPrinting = a.prettyPrinting)
    };
    Yq.settings = function () {
        return {
            ignoreComments: uu.ignoreComments,
            ignoreProcessingInstructions: Yq.ignoreProcessingInstructions,
            ignoreWhitespace: uu.ignoreWhitespace,
            prettyIndent: uu.prettyIndent,
            prettyPrinting: uu.prettyPrinting
        }
    };
    db(Hu, function () {
        var a = this.__swiffy_v.Sm([], "text");
        return Ju(a)
    });
    Hu.toXMLString = function () {
        return this.__swiffy_v.Xd(!0)
    };
    var Fu = function (a) {
        if (a instanceof uu) a = [a.__swiffy_v];
        else if (a instanceof Fu) a = a.__swiffy_v[ee]();
        else if (null != a && "" != a) {
            a = Z(a, "String");
            a = new Zn(a, Yq.ignoreWhitespace, !1);
            for (var b, c = []; b = Eu(a);) c[D](b);
            a = c
        } else a = [];
        return Ju(a)
    }, Zq = function (a) {
            return a instanceof Fu ? a : new Fu(a)
        };
    qq(Fu, "XMLList", {
        pf: Zq,
        Hm: Fu
    });
    var Ku = function (a) {
        for (var b = this.__swiffy_v, c = a.bd() < b[G], d = 0; !c && d < b[G]; d++) c = b[d].Jm(a);
        return c
    };
    f[w](Fu[H], "__swiffy_proxy", {
        value: {
            Eg: function (a, b) {
                var c = Lu[a];
                if (M(c)) return c[B](this, b);
                c = Hu[a];
                if (M(c)) {
                    var d = Gu[I](this, 1086, a);
                    return c[B](d, b)
                }
                c = q[H][a];
                if (M(c) && (d = Gu[I](this, 1086, a), d.__swiffy_v.ck())) return c[B](d[Sc](), b);
                throw R(1006, "value");
            },
            Ec: function () {
                return !1
            },
            bk: function (a) {
                for (var b = this.__swiffy_v, c = [], d = 0; d < b[G]; d++) b[d].Ug(c, a, !1);
                return Ju(c)
            },
            Wd: function (a) {
                var b = this.__swiffy_v,
                    c = a.bd();
                if (L(c)) return b[c] ? b[c].xd : void 0;
                for (var c = [], d = 0; d < b[G]; d++) b[d].Df(c, a);
                return Ju(c)
            },
            setProperty: function (a, b) {
                var c = this.__swiffy_v,
                    d = a.bd();
                L(d) && (d > c[G] && (d = c[G]), b instanceof uu && (c[d] = b.__swiffy_v))
            },
            Cf: Ku,
            Xg: function (a) {
                return q(a - 1)
            },
            sf: function (a) {
                return ++a > this.__swiffy_v[G] ? 0 : a
            },
            Yg: function (a) {
                return this.__swiffy_v[a - 1] ? this.__swiffy_v[a - 1].xd : void 0
            }
        }
    });
    Fu[H].hasOwnProperty = function (a) {
        return Ku[I](this, Bu(a))
    };
    Ia(Fu[H], function () {
        if (Lu.hasComplexContent[I](this)) return Lu.toXMLString[I](this);
        for (var a = this.__swiffy_v, b = [], c = 0; c < a[G]; c++) b[D](a[c].Xd(!1));
        return b[Cf]("")
    });
    cb(Fu[H], function () {
        return this
    });
    Fu[H].toJSON = function () {
        return "XMLList"
    };
    var Lu = {
        attribute: function (a) {
            a = Bu(a);
            for (var b = this.__swiffy_v, c = 0; c < b[G]; c++) b[c].Df([], a, !0);
            return Ju([])
        },
        attributes: function () {
            for (var a = [], b = this.__swiffy_v, c = 0; c < b[G]; c++) b[c].Qm(a);
            return Ju(a)
        },
        child: function (a) {
            Z(a, "Object");
            Y(this);
            return Ju([])
        },
        children: function () {
            for (var a = this.__swiffy_v, b = [], c = 0; c < a[G]; c++) a[c].Rm(b);
            return Ju(b)
        },
        comments: function () {
            Y(this);
            return Ju([])
        },
        contains: function (a) {
            Z(a, "XML");
            Y(this);
            return !1
        },
        copy: function () {
            Y(this);
            return Ju([])
        },
        descendants: function (a) {
            a =
                Bu(a, "*");
            for (var b = this.__swiffy_v, c = [], d = 0; d < b[G]; d++) b[d].Ug(c, a, !0);
            return Ju(c)
        },
        elements: function (a) {
            a = Bu(a, "*");
            for (var b = this.__swiffy_v, c = [], d = 0; d < b[G]; d++) b[d].Df(c, a, !1);
            return Ju(c)
        },
        hasComplexContent: function () {
            var a = this.__swiffy_v;
            if (0 == a[G]) return !1;
            if (1 == a[G]) return a[0].gi();
            for (var b = 0; b < a[G]; b++)
                if ("element" == a[b].Fe) return !0;
            return !1
        },
        hasSimpleContent: function () {
            var a = this.__swiffy_v;
            if (0 == a[G]) return !0;
            if (1 == a[G]) return a[0].ck();
            for (var b = 0; b < a[G]; b++)
                if ("element" == a[b].Fe) return !1;
            return !0
        },
        length: function () {
            return this.__swiffy_v[G]
        },
        normalize: function () {
            Y(this);
            return Ju([])
        },
        parent: function () {
            var a = this.__swiffy_v;
            if (a[G]) {
                for (var b = a[0][ud], c = 1; b && c < a[G]; c++)
                    if (a[c][ud] != b) return;
                return b ? b.xd : void 0
            }
        },
        processingInstructions: function (a) {
            Z(a, "String", "*");
            Y(this);
            return Ju([])
        },
        propertyIsEnumerable: function (a) {
            var b = this.__swiffy_v;
            return Bu(a).bd() < b[G]
        },
        text: function () {
            for (var a = this.__swiffy_v, b = [], c = 0; c < a[G]; c++) a[c].Sm(b, "text");
            return Ju(b)
        },
        toXMLString: function () {
            for (var a =
                this.__swiffy_v, b = [], c = 0; c < a[G]; c++) b[D](a[c].Xd(!0));
            return b[Cf]("\n")
        }
    }, Ju = function (a) {
            var b = f[Yc](Fu[H]);
            f[w](b, "__swiffy_v", {
                value: a
            });
            return b
        }, Gu = function (a, b) {
            var c = this.__swiffy_v;
            if (1 == c[G]) return c[0].xd;
            throw R[B](null, arguments);
        };
    var Mu = function () {};
    T(Mu, "flash.utils.Proxy");
    Kp("flash.utils.flash_proxy", new yq(void 0, "http://www.adobe.com/2006/actionscript/flash/proxy"));
    Kp(yp("http://www.adobe.com/2006/actionscript/flash/proxy", "isAttribute"), function (a) {
        return a instanceof zp && a.__swiffy_v.qa
    });
    var Nu = function (a) {
        var b = a[yc];
        return a.qa || a.uri || !Pf(b) ? new zp(a) : q(b)
    };
    f[w](Mu[H], "__swiffy_proxy", {
        value: {
            Eg: function (a, b) {
                a = Nu(a);
                return this[yp("http://www.adobe.com/2006/actionscript/flash/proxy", "callProperty")][B](this, [a][bc](b))
            },
            Ec: function (a) {
                a = Nu(a);
                return this[yp("http://www.adobe.com/2006/actionscript/flash/proxy", "deleteProperty")][I](this, a)
            },
            bk: function (a) {
                a = Nu(a);
                return this[yp("http://www.adobe.com/2006/actionscript/flash/proxy", "getDescendants")][I](this, a)
            },
            Wd: function (a) {
                a = Nu(a);
                return this[yp("http://www.adobe.com/2006/actionscript/flash/proxy",
                    "getProperty")][I](this, a)
            },
            Cf: function (a) {
                a = a.jb();
                return this[yp("http://www.adobe.com/2006/actionscript/flash/proxy", "hasProperty")][I](this, a)
            },
            Xg: function (a) {
                return this[yp("http://www.adobe.com/2006/actionscript/flash/proxy", "nextName")][I](this, Z(a, "int"))
            },
            sf: function (a) {
                return this[yp("http://www.adobe.com/2006/actionscript/flash/proxy", "nextNameIndex")][I](this, Z(a, "int"))
            },
            Yg: function (a) {
                return this[yp("http://www.adobe.com/2006/actionscript/flash/proxy", "nextValue")][I](this, Z(a, "int"))
            },
            setProperty: function (a, b) {
                a = Nu(a);
                this[yp("http://www.adobe.com/2006/actionscript/flash/proxy", "setProperty")][I](this, a, b)
            }
        }
    });
    var Ou = function (a, b) {
        f[w](Mu[H], yp("http://www.adobe.com/2006/actionscript/flash/proxy", a), {
            value: function () {
                throw R(b, a);
            }
        })
    };
    Ou("callProperty", 2090);
    Ou("deleteProperty", 2092);
    Ou("getDescendants", 2093);
    Ou("getProperty", 2088);
    Ou("hasProperty", 2091);
    Ou("setProperty", 2089);
    Ou("nextNameIndex", 2105);
    Ou("nextName", 2106);
    Ou("nextValue", 2107);
    var ir = function () {
        this.dr = {}
    }, hr = null;
    ir[H].Ya = function (a) {
        var b = this.dr[a];
        b || ((b = "@" === a[cc](0)) && (a = a[rf](1)), b = this.dr[a] = fr("", a, b));
        return b
    };
    ir[H].tp = function (a, b, c) {
        var d = c ? aq : b.__swiffy_baseclass;
        if (!d) return null;
        for (var e = [], h = d; h; h = h.__swiffy_baseclass) a.wf(this.Ya("extendsClass")).Gc(this.Ya("@type"), h.__swiffy_name.jb()), e[h.__swiffy_typeid] = !0;
        if (!c) {
            e[b.__swiffy_typeid] = !0;
            b = b.__swiffy_if;
            for (var k in b) e[k] || (c = b[k], a.wf(this.Ya("implementsInterface")).Gc(this.Ya("@type"), c.__swiffy_name.jb()))
        }
        return d
    };
    ir[H].Ys = function (a, b) {
        for (var c in b[af])
            if (!(0 <= c[pe]("."))) {
                var d = b[af][c],
                    e;
                d instanceof Op ? (e = a.wf(this.Ya("accessor")), d.zd && d.De ? e.Gc(this.Ya("@access"), "readwrite") : d.zd ? e.Gc(this.Ya("@access"), "readonly") : d.De && e.Gc(this.Ya("@access"), "writeonly")) : e = d instanceof Np ? a.wf(this.Ya("method")) : d.dt ? a.wf(this.Ya("constant")) : a.wf(this.Ya("variable"));
                e.Gc(this.Ya("@name"), c)
            }
    };
    var Fs = function () {
        f[w](this, "__swiffy_v", {
            value: {
                va: new Uint8Array(0),
                position: 0,
                Rj: Ds.BIG_ENDIAN
            }
        });
        W(this, "objectEncoding", "uint", 0);
        W(this, "shareable", "Boolean", !1)
    }, Pu, Ks = function (a) {
            return a.__swiffy_v
        }, Qu = T(Fs, "flash.utils.ByteArray");
    S(Qu, "bytesAvailable", function () {
        var a = Ks(this);
        return l.max(0, a.va[G] - a[Xc])
    });
    S(Qu, "endian", function () {
        return Ks(this).Rj
    });
    Yp(Qu, "endian", function (a) {
        a = Z(a, "String");
        if (a == Ds.BIG_ENDIAN || a == Ds.LITTLE_ENDIAN) Ks(this).Rj = a;
        else {
            if (null === a) throw R(2007, "endian");
            throw R(2008, "Parameter type");
        }
    });
    S(Qu, "position", function () {
        return Ks(this)[Xc]
    });
    Yp(Qu, "position", function (a) {
        a = Z(a, "uint");
        Ka(Ks(this), a)
    });
    S(Qu, "length", function () {
        return Ks(this).va[G]
    });
    Yp(Qu, "length", function (a) {
        a = Z(a, "uint");
        var b = Ks(this);
        Ru(b, a);
        b[Xc] > a && Ka(b, a)
    });
    var Su = function () {
        if (!Pu) {
            var a = new ArrayBuffer(4),
                b = new Int8Array(a);
            (new Int32Array(a))[0] = 513;
            var a = b[0],
                c = b[1],
                d = b[2],
                b = b[3];
            if (0 == a && 0 == c && 2 == d && 1 == b) Pu = Ds.BIG_ENDIAN;
            else if (1 == a && 2 == c && 0 == d && 0 == b) Pu = Ds.LITTLE_ENDIAN;
            else throw "Platform endianness detection failed";
        }
        return Pu
    }, Ru = function (a, b) {
            var c = a.va;
            if (b > c[nd][vc]) {
                var d = new ArrayBuffer(b + (b >> 3) + (9 > b ? 3 : 6));
                a.va = new Uint8Array(d, 0, b);
                a.va.set(c)
            } else b !== c[G] && (a.va = new Uint8Array(c[nd], 0, b))
        }, Tu = function (a, b) {
            b > a.va[G] && Ru(a, b)
        }, Uu = function (a,
            b) {
            if (a[Xc] + b > a.va[G]) throw R(2030);
        }, Vu = function (a, b) {
            var c = Ks(a);
            Uu(c, b);
            var d = new Uint8Array(c.va[nd], c[Xc], b);
            Ka(c, c[Xc] + b);
            return d
        }, Es = function (a, b) {
            var c = Ks(a);
            Tu(c, c[Xc] + b);
            var d = new Uint8Array(c.va[nd], c[Xc], b);
            Ka(c, c[Xc] + b);
            return d
        }, Wu = function (a, b, c) {
            var d = Vu(a, c);
            if (1 < c)
                if (Ks(a).Rj != Su()) {
                    a = new Uint8Array(c);
                    c -= 1;
                    for (var e = 0; 0 <= c; --c, e++) a[c] = d[e];
                    d = a
                } else if (d[Bf] % c || (d[nd][vc] - d[Bf]) % d[vc]) a = new Uint8Array(c), a.set(d), d = a;
            return (new b(d[nd], d[Bf], 1))[0]
        }, Xu = function (a, b, c, d) {
            var e =
                Es(a, c);
            b = new Uint8Array((new b([d]))[nd]);
            if (1 < c && Ks(a).Rj != Su())
                for (a = c - 1, c = 0; 0 <= a; --a, c++) e[a] = b[c];
            else e.set(b)
        };
    f[w](Qu, "defaultObjectEncoding", {
        value: 0
    });
    f[w](Fs[H], "__swiffy_proxy", {
        value: {
            Wd: function (a) {
                a = a.hi(1069, this);
                return Ks(this).va[a]
            },
            Cf: function (a) {
                return a.bd() < Ks(this).va[G]
            },
            setProperty: function (a, b) {
                var c = a.hi(1056, this);
                b = Z(b, "int");
                var d = Ks(this);
                Tu(d, c + 1);
                d.va[c] = b
            }
        }
    });
    Fs[H].atomicCompareAndSwapIntAt = function (a, b, c) {
        a = Z(a, "int");
        b = Z(b, "int");
        c = Z(c, "int");
        var d = this[Xc];
        try {
            Ka(this, a);
            var e = this.readInt();
            e == b && (Ka(this, a), this.writeInt(c));
            return e
        } finally {
            Ka(this, d)
        }
    };
    Fs[H].atomicCompareAndSwapLength = function (a, b) {
        a = Z(a, "int");
        b = Z(b, "int");
        var c = this[G];
        c == a && tb(this, b);
        return c
    };
    Ca(Fs[H], function () {
        var a = Ks(this);
        a.va = new Uint8Array(0);
        Ka(a, 0)
    });
    Fs[H].compress = function (a) {
        Z(a, "String");
        Y(this, "compress")
    };
    Fs[H].deflate = function () {
        Y(this, "deflate")
    };
    Fs[H].inflate = function () {
        this.uncompress("deflate")
    };
    Fs[H].readBoolean = function () {
        var a = Ks(this);
        Uu(a, 1);
        return !!a.va[a.position++]
    };
    Fs[H].readByte = function () {
        var a = Ks(this);
        Uu(a, 1);
        return a.va[a.position++] << 24 >> 24
    };
    Fs[H].readBytes = function (a, b, c) {
        a = Z(a, "flash.utils.ByteArray");
        b = Z(b, "uint", 0);
        c = Z(c, "uint", 0);
        if (0 == c) {
            var d = Ks(this),
                d = d.va[G] - d[Xc];
            0 < d && (c = d)
        }
        d = Vu(this, c);
        a = Ks(a);
        Tu(a, b + c);
        (new Uint8Array(a.va[nd], b, c)).set(d)
    };
    Fs[H].readDouble = function () {
        return Wu(this, Float64Array, 8)
    };
    Fs[H].readFloat = function () {
        return Wu(this, Float32Array, 4)
    };
    Fs[H].readInt = function () {
        return Wu(this, Int32Array, 4)
    };
    Fs[H].readMultiByte = function (a, b) {
        Z(a, "uint");
        Z(b, "String");
        Y(this, "readMultiByte");
        return ""
    };
    Fs[H].readObject = function () {
        Y(this, "readObject")
    };
    Fs[H].readShort = function () {
        return Wu(this, Int16Array, 2)
    };
    Fs[H].readUnsignedByte = function () {
        var a = Ks(this);
        Uu(a, 1);
        return a.va[a.position++]
    };
    Fs[H].readUnsignedInt = function () {
        return Wu(this, Uint32Array, 4)
    };
    Fs[H].readUnsignedShort = function () {
        return Wu(this, Uint16Array, 2)
    };
    Fs[H].readUTF = function () {
        return this.readUTFBytes(this.readUnsignedShort())
    };
    Fs[H].readUTFBytes = function (a) {
        a = Z(a, "uint");
        if (0 == a) return "";
        for (var b = Vu(this, a), c = [], d = 0; d < a; d++) c[D](q[ye](b[d]));
        return Xi(escape(c[Cf]("")))
    };
    Fs[H].toJSON = function (a) {
        Z(a, "String");
        return "ByteArray"
    };
    Fs[H].uncompress = function (a) {
        Z(a, "String", "zlib");
        Y(this, "uncompress")
    };
    Fs[H].writeBoolean = function (a) {
        a = Z(a, "Boolean");
        var b = Ks(this);
        Tu(b, b[Xc] + 1);
        b.va[b.position++] = a ? 1 : 0
    };
    Fs[H].writeByte = function (a) {
        a = Z(a, "int");
        var b = Ks(this);
        Tu(b, b[Xc] + 1);
        b.va[b.position++] = a
    };
    Fs[H].writeBytes = function (a, b, c) {
        a = Z(a, "flash.utils.ByteArray");
        b = Z(b, "uint", 0);
        c = Z(c, "uint", 0);
        a = Ks(a).va;
        var d = a[G];
        if (b > d || b + c > d) throw R(2006);
        0 == c && (c = d - b);
        Es(this, c).set(new Uint8Array(a[nd], b, c))
    };
    Fs[H].writeDouble = function (a) {
        a = Z(a, "Number");
        Xu(this, Float64Array, 8, a)
    };
    Fs[H].writeFloat = function (a) {
        a = Z(a, "Number");
        Xu(this, Float32Array, 4, a)
    };
    Fs[H].writeInt = function (a) {
        a = Z(a, "int");
        Xu(this, Int32Array, 4, a)
    };
    Fs[H].writeMultiByte = function (a, b) {
        Z(a, "String");
        Z(b, "String");
        Y(this, "writeMultiByte")
    };
    Fs[H].writeObject = function () {
        Y(this, "writeObject")
    };
    Fs[H].writeShort = function (a) {
        a = Z(a, "int");
        Xu(this, Int16Array, 2, a)
    };
    Fs[H].writeUnsignedInt = function (a) {
        a = Z(a, "uint");
        Xu(this, Uint32Array, 4, a)
    };
    Fs[H].writeUTF = function (a) {
        a = Z(a, "String");
        a = aa(ba(a));
        this.writeShort(a[G]);
        for (var b = Es(this, a[G]), c = 0; c < a[G]; c++) b[c] = a[pf](c)
    };
    Fs[H].writeUTFBytes = function (a) {
        a = Z(a, "String");
        a = aa(ba(a));
        for (var b = Es(this, a[G]), c = 0; c < a[G]; c++) b[c] = a[pf](c)
    };
})()