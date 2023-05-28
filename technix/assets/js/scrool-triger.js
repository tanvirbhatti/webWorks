/*!
 * ScrollTrigger 3.10.5
 * https://greensock.com
 * 
 * @license Copyright 2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
! function(a, b) {
    "object" == typeof exports && "undefined" != typeof module ? b(exports) : "function" == typeof define && define.amd ? define(["exports"], b) : b((a = a || self).window = a.window || {})
}(this, function(ax) {
    "use strict";
    var t, bg, v, X, Q, ab, bu, O, aB, bA, F, C, bC, $, e, E, am, aO, aL, aA, q, l, i, a, T, b, g, G, f, bF, aJ, aK, Z, aC, aI, m, ao, aQ, p, bx, bw, ac, bv, aW, bo, y, bk, bj, bi, R, bb, bc, _, bh, aj, S, ai, s, a_, A, ap, Y, a$, aX, M, U, af, ad, ah, ag, k, z, au, bM, r, I, bB, av, ay, az, c, aP, al, bI, h, N, B, by, aD, aM, aa, br, aE, an, be, aG, bV, ak, aH, bY, d, bz, bD, cb, bt;

    function cf(d, c) {
        for (var b = 0, a; b < c.length; b++) a = c[b], a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(d, a.key, a)
    }

    function bZ() {
        return t || "undefined" != typeof window && (t = window.gsap) && t.registerPlugin && t
    }

    function P(a, b) {
        return ~E.indexOf(a) && E[E.indexOf(a) + 1][b]
    }

    function bf(a) {
        return !!~bA.indexOf(a)
    }

    function w(a, b, c, d, e) {
        return a.addEventListener(b, c, {
            passive: !d,
            capture: !!e
        })
    }

    function u(a, b, c, d) {
        return a.removeEventListener(b, c, !!d)
    }

    function bW() {
        return F && F.isPressed || e.cache++
    }

    function aN(b, c) {
        function a(d) {
            if (d || 0 === d) {
                bC && (v.history.scrollRestoration = "manual");
                var f = F && F.isPressed;
                d = a.v = Math.round(d) || (F && F.iOS ? 1 : 0), b(d), a.cacheID = e.cache, f && aO("ss", d)
            } else(c || e.cache !== a.cacheID || aO("ref")) && (a.cacheID = e.cache, a.v = b());
            return a.v + a.offset
        }
        return a.offset = 0, b && a
    }

    function x(a) {
        return t.utils.toArray(a)[0] || ("string" == typeof a && !1 !== t.config().nullTargetWarn ? console.warn("Element not found:", a) : null)
    }

    function V(a, d) {
        var c = d.s,
            f = d.sc,
            b = e.indexOf(a),
            g = f === l.sc ? 1 : 2;
        return ~b || (b = e.push(a) - 1), e[b + g] || (e[b + g] = aN(P(a, c), !0) || (bf(a) ? f : aN(function(b) {
            return arguments.length ? a[c] = b : a[c]
        })))
    }

    function bp(g, i, e) {
        function f(f, i) {
            var g = am();
            i || h < g - a ? (d = b, b = f, c = a, a = g) : e ? b += f : b = d + (f - d) / (g - c) * (a - c)
        }
        var b = g,
            d = g,
            a = am(),
            c = a,
            h = i || 50,
            j = Math.max(500, 3 * h);
        return {
            update: f,
            reset: function() {
                d = b = e ? 0 : b, c = a = 0
            },
            getVelocity: function(g) {
                var k = c,
                    h = d,
                    i = am();
                return !g && 0 !== g || g === b || f(g), a === c || j < i - c ? 0 : (b + (e ? h : -h)) / ((e ? i : a) - k) * 1e3
            }
        }
    }

    function aF(a, b) {
        return b && !a._gsapAllow && a.preventDefault(), a.changedTouches ? a.changedTouches[0] : a
    }

    function bR(a) {
        var b = Math.max.apply(Math, a),
            c = Math.min.apply(Math, a);
        return Math.abs(b) >= Math.abs(c) ? b : c
    }

    function bP() {
        (aB = t.core.globals().ScrollTrigger) && aB.core && function() {
            var a = aB.core,
                d = a.bridge || {},
                b = a._scrollers,
                c = a._proxies;
            b.push.apply(b, e), c.push.apply(c, E), e = b, E = c, aO = function(a, b) {
                return d[a](b)
            }
        }()
    }

    function bO(a) {
        return (t = a || bZ()) && "undefined" != typeof document && document.body && (v = window, Q = (X = document).documentElement, ab = X.body, bA = [v, X, Q, ab], t.utils.clamp, O = "onpointerenter" in ab ? "pointer" : "mouse", bu = i.isTouch = v.matchMedia && v.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in v || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints ? 2 : 0, C = i.eventTypes = ("ontouchstart" in Q ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in Q ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
            return bC = 0
        }, 500), bP(), bg = 1), bg
    }
    bC = 1, $ = [], e = [], E = [], am = Date.now, aO = function(c, a) {
        return a
    }, aL = "scrollLeft", aA = "scrollTop", q = {
        s: aL,
        p: "left",
        p2: "Left",
        os: "right",
        os2: "Right",
        d: "width",
        d2: "Width",
        a: "x",
        sc: aN(function(a) {
            return arguments.length ? v.scrollTo(a, l.sc()) : v.pageXOffset || X[aL] || Q[aL] || ab[aL] || 0
        })
    }, l = {
        s: aA,
        p: "top",
        p2: "Top",
        os: "bottom",
        os2: "Bottom",
        d: "height",
        d2: "Height",
        a: "y",
        op: q,
        sc: aN(function(a) {
            return arguments.length ? v.scrollTo(q.sc(), a) : v.pageYOffset || X[aA] || Q[aA] || ab[aA] || 0
        })
    }, q.op = l, e.cache = 0, i = (bE.prototype.init = function(b) {
        var s, z, e, c, R, B, f, n, aI, o, P, aP, ai, aj, aq, aA, ar, at, af, av, az, U, ao, ay, ax, aw, al, ah, S, ag, j, aa, _, au, W, Y, Z, D, i, ac, aE, ae, r, m, A, H, G, E, p, a, I, J, T, N, ap, an, aM, y, d, g, h, ad, K;
        bg || bO(t) || console.warn("Please gsap.registerPlugin(Observer)"), aB || bP(), s = b.tolerance, z = b.dragMinimum, e = b.type, c = b.target, R = b.lineHeight, B = b.debounce, f = b.preventDefault, n = b.onStop, aI = b.onStopDelay, o = b.ignore, P = b.wheelSpeed, aP = b.event, ai = b.onDragStart, aj = b.onDragEnd, aq = b.onDrag, aA = b.onPress, ar = b.onRelease, at = b.onRight, af = b.onLeft, av = b.onUp, az = b.onDown, U = b.onChangeX, ao = b.onChangeY, ay = b.onChange, ax = b.onToggleX, aw = b.onToggleY, al = b.onHover, ah = b.onHoverEnd, S = b.onMove, ag = b.ignoreCheck, j = b.isNormalizer, aa = b.onGestureStart, _ = b.onGestureEnd, au = b.onWheel, W = b.onEnable, Y = b.onDisable, Z = b.onClick, D = b.scrollSpeed, i = b.capture, ac = b.allowClicks, aE = b.lockAxis, ae = b.onLockAxis;

        function aQ() {
            return ad = am()
        }

        function k(b, c) {
            return (a.event = b) && o && ~o.indexOf(b.target) || c && aM && "touch" !== b.pointerType || ag && ag(b, c)
        }

        function M() {
            var b = a.deltaX = bR(g),
                c = a.deltaY = bR(h),
                d = Math.abs(b) >= s,
                e = Math.abs(c) >= s;
            ay && (d || e) && ay(a, b, c, g, h), d && (at && 0 < a.deltaX && at(a), af && a.deltaX < 0 && af(a), U && U(a), ax && a.deltaX < 0 != I < 0 && ax(a), I = a.deltaX, g[0] = g[1] = g[2] = 0), e && (az && 0 < a.deltaY && az(a), av && a.deltaY < 0 && av(a), ao && ao(a), aw && a.deltaY < 0 != J < 0 && aw(a), J = a.deltaY, h[0] = h[1] = h[2] = 0), (H || A) && (S && S(a), ae && E && ae(a), A && (aq(a), A = !1), H = E = !1), G && (au(a), G = !1), r = 0
        }

        function aO(b, c, d) {
            g[d] += b, h[d] += c, a._vx.update(b), a._vy.update(c), B ? r = r || requestAnimationFrame(M) : M()
        }

        function aN(b, c) {
            "y" !== p && (g[2] += b, a._vx.update(b, !0)), "x" !== p && (h[2] += c, a._vy.update(c, !0)), aE && !p && (a.axis = p = Math.abs(b) > Math.abs(c) ? "x" : "y", E = !0), B ? r = r || requestAnimationFrame(M) : M()
        }

        function ak(b) {
            if (!k(b, 1)) {
                var c = (b = aF(b, f)).clientX,
                    d = b.clientY,
                    g = c - a.x,
                    h = d - a.y,
                    e = a.isDragging;
                a.x = c, a.y = d, (e || Math.abs(a.startX - c) >= z || Math.abs(a.startY - d) >= z) && (aq && (A = !0), e || (a.isDragging = !0), aN(g, h), e || ai && ai(a))
            }
        }

        function L(b) {
            if (!k(b, 1)) {
                u(j ? c : d, C[1], ak, !0);
                var g = a.isDragging && (3 < Math.abs(a.x - a.startX) || 3 < Math.abs(a.y - a.startY)),
                    e = aF(b);
                g || (a._vx.reset(), a._vy.reset(), f && ac && t.delayedCall(.08, function() {
                    if (300 < am() - ad && !b.defaultPrevented)
                        if (b.target.click) b.target.click();
                        else if (d.createEvent) {
                        var a = d.createEvent("MouseEvents");
                        a.initMouseEvent("click", !0, !0, v, 1, e.screenX, e.screenY, e.clientX, e.clientY, !1, !1, !1, !1, 0, null), b.target.dispatchEvent(a)
                    }
                })), a.isDragging = a.isGesturing = a.isPressed = !1, n && !j && m.restart(!0), aj && g && aj(a), ar && ar(a, g)
            }
        }

        function aL(b) {
            return b.touches && 1 < b.touches.length && (a.isGesturing = !0) && aa(b, a.isDragging)
        }

        function aR() {
            return (a.isGesturing = !1) || _(a)
        }

        function aK(c) {
            if (!k(c)) {
                var a = T(),
                    b = N();
                aO((a - ap) * D, (b - an) * D, 1), ap = a, an = b, n && m.restart(!0)
            }
        }

        function aJ(a) {
            if (!k(a)) {
                a = aF(a, f), au && (G = !0);
                var b = (1 === a.deltaMode ? R : 2 === a.deltaMode ? v.innerHeight : 1) * P;
                aO(a.deltaX * b, a.deltaY * b, 0), n && !j && m.restart(!0)
            }
        }

        function aH(b) {
            if (!k(b)) {
                var c = b.clientX,
                    d = b.clientY,
                    e = c - a.x,
                    f = d - a.y;
                a.x = c, a.y = d, H = !0, (e || f) && aN(e, f)
            }
        }

        function aG(b) {
            a.event = b, al(a)
        }

        function aC(b) {
            a.event = b, ah(a)
        }

        function aD(b) {
            return k(b) || aF(b, f) && Z(a)
        }
        this.target = c = x(c) || Q, this.vars = b, o = o && t.utils.toArray(o), s = s || 0, z = z || 0, P = P || 1, D = D || 1, e = e || "wheel,touch,pointer", B = !1 !== B, R = R || parseFloat(v.getComputedStyle(ab).lineHeight) || 22, a = this, I = 0, J = 0, T = V(c, q), N = V(c, l), ap = T(), an = N(), aM = ~e.indexOf("touch") && !~e.indexOf("pointer") && "pointerdown" === C[0], y = bf(c), d = c.ownerDocument || X, g = [0, 0, 0], h = [0, 0, 0], ad = 0, K = a.onPress = function(b) {
            k(b, 1) || (a.axis = p = null, m.pause(), a.isPressed = !0, b = aF(b), I = J = 0, a.startX = a.x = b.clientX, a.startY = a.y = b.clientY, a._vx.reset(), a._vy.reset(), w(j ? c : d, C[1], ak, f, !0), a.deltaX = a.deltaY = 0, aA && aA(a))
        }, m = a._dc = t.delayedCall(aI || .25, function() {
            a._vx.reset(), a._vy.reset(), m.pause(), n && n(a)
        }).pause(), a.deltaX = a.deltaY = 0, a._vx = bp(0, 50, !0), a._vy = bp(0, 50, !0), a.scrollX = T, a.scrollY = N, a.isDragging = a.isGesturing = a.isPressed = !1, a.enable = function(b) {
            return a.isEnabled || (w(y ? d : c, "scroll", bW), 0 <= e.indexOf("scroll") && w(y ? d : c, "scroll", aK, f, i), 0 <= e.indexOf("wheel") && w(c, "wheel", aJ, f, i), (0 <= e.indexOf("touch") && bu || 0 <= e.indexOf("pointer")) && (w(c, C[0], K, f, i), w(d, C[2], L), w(d, C[3], L), ac && w(c, "click", aQ, !1, !0), Z && w(c, "click", aD), aa && w(d, "gesturestart", aL), _ && w(d, "gestureend", aR), al && w(c, O + "enter", aG), ah && w(c, O + "leave", aC), S && w(c, O + "move", aH)), a.isEnabled = !0, b && b.type && K(b), W && W(a)), a
        }, a.disable = function() {
            a.isEnabled && ($.filter(function(b) {
                return b !== a && bf(b.target)
            }).length || u(y ? d : c, "scroll", bW), a.isPressed && (a._vx.reset(), a._vy.reset(), u(j ? c : d, C[1], ak, !0)), u(y ? d : c, "scroll", aK, i), u(c, "wheel", aJ, i), u(c, C[0], K, i), u(d, C[2], L), u(d, C[3], L), u(c, "click", aQ, !0), u(c, "click", aD), u(d, "gesturestart", aL), u(d, "gestureend", aR), u(c, O + "enter", aG), u(c, O + "leave", aC), u(c, O + "move", aH), a.isEnabled = a.isPressed = a.isDragging = !1, Y && Y(a))
        }, a.kill = function() {
            a.disable();
            var b = $.indexOf(a);
            0 <= b && $.splice(b, 1), F === a && (F = 0)
        }, $.push(a), j && bf(c) && (F = a), a.enable(aP)
    }, function(a, b, c) {
        return b && cf(a.prototype, b), c && cf(a, c), a
    }(bE, [{
        key: "velocityX",
        get: function() {
            return this._vx.getVelocity()
        }
    }, {
        key: "velocityY",
        get: function() {
            return this._vy.getVelocity()
        }
    }]), bE);

    function bE(a) {
        this.init(a)
    }
    i.version = "3.10.5", i.create = function(a) {
        return new i(a)
    }, i.register = bO, i.getAll = function() {
        return $.slice()
    }, i.getById = function(a) {
        return $.filter(function(b) {
            return b.vars.id === a
        })[0]
    }, bZ() && t.registerPlugin(i);

    function bG() {
        return ao = 1
    }

    function bH() {
        return ao = 0
    }

    function K(a) {
        return a
    }

    function aw(a) {
        return Math.round(1e5 * a) / 1e5 || 0
    }

    function bJ() {
        return "undefined" != typeof window
    }

    function bK() {
        return a || bJ() && (a = window.gsap) && a.registerPlugin && a
    }

    function W(a) {
        return !!~bF.indexOf(a)
    }

    function bL(a) {
        return P(a, "getBoundingClientRect") || (W(a) ? function() {
            return aH.width = b.innerWidth, aH.height = b.innerHeight, aH
        } : function() {
            return I(a)
        })
    }

    function L(a, e) {
        var c = e.s,
            d = e.d2,
            h = e.d,
            g = e.a;
        return (c = "scroll" + d) && (g = P(a, c)) ? g() - bL(a)()[h] : W(a) ? (G[c] || f[c]) - (b["inner" + d] || G["client" + d] || f["client" + d]) : a[c] - a["offset" + d]
    }

    function aS(c, b) {
        for (var a = 0; a < ac.length; a += 3) b && !~b.indexOf(ac[a + 1]) || c(ac[a], ac[a + 1], ac[a + 2])
    }

    function J(a) {
        return "string" == typeof a
    }

    function D(a) {
        return "function" == typeof a
    }

    function ar(a) {
        return "number" == typeof a
    }

    function aT(a) {
        return "object" == typeof a
    }

    function aV(a) {
        return D(a) && a()
    }

    function bN(a, b) {
        return function() {
            var c = aV(a),
                d = aV(b);
            return function() {
                aV(c), aV(d)
            }
        }
    }

    function aq(a, b, c) {
        return a && a.progress(b ? 0 : 1) && c && a.pause()
    }

    function bs(a, c) {
        if (a.enabled) {
            var b = c(a);
            b && b.totalTime && (a.callbackAnimation = b)
        }
    }

    function H(a) {
        return b.getComputedStyle(a)
    }

    function bQ(a, c) {
        for (var b in c) b in a || (a[b] = c[b]);
        return a
    }

    function bq(a, c) {
        var b = c.d2;
        return a["offset" + b] || a["client" + b] || 0
    }

    function bS(a) {
        var b, c = [],
            d = a.labels,
            e = a.duration();
        for (b in d) c.push(d[b] / e);
        return c
    }

    function bm(c) {
        var d = a.utils.snap(c),
            b = Array.isArray(c) && c.slice(0).sort(function(a, b) {
                return a - b
            });
        return b ? function(c, f, e) {
            var a;
            if (void 0 === e && (e = .001), !f) return d(c);
            if (0 < f) {
                for (c -= e, a = 0; a < b.length; a++)
                    if (b[a] >= c) return b[a];
                return b[a - 1]
            }
            for (a = b.length, c += e; a--;)
                if (b[a] <= c) return b[a];
            return b[0]
        } : function(a, b, e) {
            void 0 === e && (e = .001);
            var f = d(a);
            return !b || Math.abs(f - a) < e || f - a < 0 == b < 0 ? f : d(b < 0 ? a - c : a + c)
        }
    }

    function ba(a, b, c, d) {
        return c.split(",").forEach(function(c) {
            return a(b, c, d)
        })
    }

    function o(a, b, c, d, e) {
        return a.addEventListener(b, c, {
            passive: !d,
            capture: !!e
        })
    }

    function n(a, b, c, d) {
        return a.removeEventListener(b, c, !!d)
    }

    function aY(b, c, a) {
        return a && a.wheelHandler && b(c, "wheel", a)
    }

    function aZ(a, c) {
        if (J(a)) {
            var b = a.indexOf("="),
                d = ~b ? (a.charAt(b - 1) + 1) * parseFloat(a.substr(b + 1)) : 0;
            ~b && (a.indexOf("%") > b && (d *= c / 100), a = a.substr(0, b - 1)), a = d + (a in ay ? ay[a] * c : ~a.indexOf("%") ? parseFloat(a) * c / 100 : parseFloat(a) || 0)
        }
        return a
    }

    function bd(b, c, k, i, d, t, q, n) {
        var v = d.startColor,
            u = d.endColor,
            w = d.fontSize,
            s = d.indent,
            r = d.fontWeight,
            a = g.createElement("div"),
            m = W(k) || "fixed" === P(k, "pinType"),
            p = -1 !== b.indexOf("scroller"),
            e = m ? f : k,
            j = -1 !== b.indexOf("start"),
            o = j ? v : u,
            h = "border-color:" + o + ";font-size:" + w + ";color:" + o + ";font-weight:" + r + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return h += "position:" + ((p || n) && m ? "fixed;" : "absolute;"), !p && !n && m || (h += (i === l ? a$ : aX) + ":" + (t + parseFloat(s)) + "px;"), q && (h += "box-sizing:border-box;text-align:left;width:" + q.offsetWidth + "px;"), a._isStart = j, a.setAttribute("class", "gsap-marker-" + b + (c ? " marker-" + c : "")), a.style.cssText = h, a.innerText = c || 0 === c ? b + "-" + c : b, e.children[0] ? e.insertBefore(a, e.children[0]) : e.appendChild(a), a._offset = a["offset" + i.op.d2], az(a, 0, i, j), a
    }

    function bT() {
        return 34 < s() - A && an()
    }

    function ae() {
        y && y.isPressed && !(y.startX > f.clientWidth) || (e.cache++, bc = bc || requestAnimationFrame(an), A || N("scrollStart"), A = s())
    }

    function bU() {
        bi = b.innerWidth, bj = b.innerHeight
    }

    function at() {
        e.cache++, m || bo || g.fullscreenElement || g.webkitFullscreenElement || bk && bi === b.innerWidth && !(Math.abs(b.innerHeight - bj) > .25 * b.innerHeight) || aJ.restart(!0)
    }

    function bX(g) {
        var d, f = a.ticker.frame,
            e = [],
            c = 0;
        if (bh !== f || ai) {
            for (aD(); c < h.length; c += 4)(d = b.matchMedia(h[c]).matches) !== h[c + 3] && ((h[c + 3] = d) ? e.push(c) : aD(1, h[c]) || D(h[c + 2]) && h[c + 2]());
            for (by(), c = 0; c < e.length; c++) d = e[c], _ = h[d], h[d + 2] = h[d + 1](g);
            _ = 0, T && aa(0, 1), bh = f, N("matchMedia")
        }
    }

    function bn() {
        return n(d, "scrollEnd", bn) || aa(!0)
    }

    function b_() {
        return e.cache++ && e.forEach(function(a) {
            return "function" == typeof a && (a.rec = 0)
        })
    }

    function bl(b, e, d, h) {
        if (!b._gsap.swappedIn) {
            for (var f, g = be.length, c = e.style, a = b.style; g--;) c[f = be[g]] = d[f];
            c.position = "absolute" === d.position ? "absolute" : "relative", "inline" === d.display && (c.display = "inline-block"), a[aX] = a[a$] = c.flexBasis = "auto", c.overflow = "visible", c.boxSizing = "border-box", c[M] = bq(b, q) + r, c[U] = bq(b, l) + r, c[k] = a[z] = a.top = a.left = "0", ak(h), a[M] = a.maxWidth = d[M], a[U] = a.maxHeight = d[U], a[k] = d[k], b.parentNode !== e && (b.parentNode.insertBefore(e, b), e.appendChild(b)), b._gsap.swappedIn = !0
        }
    }

    function aU(c) {
        for (var d = aG.length, e = c.style, b = [], a = 0; a < d; a++) b.push(aG[a], e[aG[a]]);
        return b.t = c, b
    }

    function ca(a, n, g, b, A, j, k, y, v, z, s, q, d) {
        var e, p, c, w, i, u, h, m, t, l, o;
        return D(a) && (a = a(y)), J(a) && "max" === a.substr(0, 3) && (a = q + ("=" === a.charAt(4) ? aZ("0" + a.substr(3), g) : 0)), w = d ? d.time() : 0, (d && d.seek(0), ar(a)) ? k && az(k, g, b, !0) : (D(n) && (n = n(y)), t = a.split(" "), c = x(n) || f, (i = I(c) || {}) && (i.left || i.top) || "none" !== H(c).display || (m = c.style.display, c.style.display = "block", i = I(c), m ? c.style.display = m : c.style.removeProperty("display")), u = aZ(t[0], i[b.d]), h = aZ(t[1] || "0", g), a = i[b.p] - v[b.p] - z + u + A - h, k && az(k, h, b, g - h < 20 || k._isStart && 20 < h), g -= g - h), j && (l = a + g, o = j._isStart, e = "scroll" + b.d2, az(j, l, b, o && 20 < l || !o && (s ? Math.max(f[e], G[e]) : j.parentNode[e]) <= l + 1), s && (v = I(k), s && (j.style[b.op.p] = v[b.op.p] - b.op.m - j._offset + r))), d && c && (e = I(c), d.seek(q), p = I(c), d._caScrollDist = e[b.p] - p[b.p], a = a / d._caScrollDist * q), d && d.seek(w), d ? a : Math.round(a)
    }

    function ce(c, e, h, i) {
        if (c.parentNode !== e) {
            var b, g, d = c.style;
            if (e === f) {
                for (b in c._stOrig = d.cssText, g = H(c)) + b || bY.test(b) || !g[b] || "string" != typeof d[b] || "0" === b || (d[b] = g[b]);
                d.top = h, d.left = i
            } else d.cssText = c._stOrig;
            a.core.getCache(c).uncache = 1, e.appendChild(c)
        }
    }

    function cd(d, h) {
        function b(m, i, j, k, l) {
            var h = b.tween,
                n = i.onComplete,
                o = {};
            return j = j || e(), l = k && l || 0, k = k || m - j, h && h.kill(), c = Math.round(j), i[g] = m, (i.modifiers = o)[g] = function(a) {
                return (a = Math.round(e())) !== c && a !== f && 3 < Math.abs(a - c) && 3 < Math.abs(a - f) ? (h.kill(), b.tween = 0) : a = j + k * h.ratio + l * h.ratio * h.ratio, f = c, c = Math.round(a)
            }, i.onComplete = function() {
                b.tween = 0, n && n.call(h)
            }, h = b.tween = a.to(d, i)
        }
        var c, f, e = V(d, h),
            g = "_scroll" + h.p2;
        return (d[g] = e).wheelHandler = function() {
            return b.tween && b.tween.kill() && (b.tween = 0)
        }, o(d, "wheel", e.wheelHandler), b
    }
    ai = 1, s = Date.now, a_ = s(), A = 0, ap = 0, Y = Math.abs, a$ = "right", aX = "bottom", M = "width", U = "height", af = "Right", ad = "Left", ah = "Top", ag = "Bottom", k = "padding", z = "margin", au = "Width", bM = "Height", r = "px", I = function(b, d) {
        var c = d && "matrix(1, 0, 0, 1, 0, 0)" !== H(b)[aQ] && a.to(b, {
                x: 0,
                y: 0,
                xPercent: 0,
                yPercent: 0,
                rotation: 0,
                rotationX: 0,
                rotationY: 0,
                scale: 1,
                skewX: 0,
                skewY: 0
            }).progress(1),
            e = b.getBoundingClientRect();
        return c && c.progress(0).kill(), e
    }, bB = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal"
    }, av = {
        toggleActions: "play",
        anticipatePin: 0
    }, ay = {
        top: 0,
        left: 0,
        center: .5,
        bottom: 1,
        right: 1
    }, az = function(e, g, c, d) {
        var b = {
                display: "block"
            },
            f = c[d ? "os2" : "p2"],
            h = c[d ? "p2" : "os2"];
        e._isFlipped = d, b[c.a + "Percent"] = d ? -100 : 0, b[c.a] = d ? "1px" : 0, b["border" + f + au] = 1, b["border" + h + au] = 0, b[c.p] = g + "px", a.set(e, b)
    }, c = [], aP = {}, al = {}, bI = [], h = [], N = function(a) {
        return al[a] && al[a].map(function(a) {
            return a()
        }) || bI
    }, B = [], by = function(b) {
        for (var a = 0; a < B.length; a += 5) b && B[a + 4] !== b || (B[a].style.cssText = B[a + 1], B[a].getBBox && B[a].setAttribute("transform", B[a + 2] || ""), B[a + 3].uncache = 1)
    }, aD = function(d, a) {
        var b;
        for (p = 0; p < c.length; p++) b = c[p], a && b.media !== a || (d ? b.kill(1) : b.revert());
        a && by(a), a || N("revert")
    }, aM = 0, aa = function(a, b) {
        if (!A || a) {
            aj = !0;
            var e = N("refreshInit");
            bv && d.sort(), b || aD(), c.slice(0).forEach(function(a) {
                return a.refresh()
            }), c.forEach(function(a) {
                return "max" === a.vars.end && a.setPositions(a.start, L(a.scroller, a._dir))
            }), e.forEach(function(a) {
                return a && a.render && a.render(-1)
            }), b_(), aJ.pause(), aM++, aj = !1, N("refresh")
        } else o(d, "scrollEnd", bn)
    }, br = 0, aE = 1, an = function() {
        if (!aj) {
            d.isUpdating = !0, S && S.update(0);
            var a = c.length,
                b = s(),
                e = 50 <= b - a_,
                f = a && c[0].scroll();
            if (aE = f < br ? -1 : 1, br = f, e && (A && !ao && 200 < b - A && (A = 0, N("scrollEnd")), aC = a_, a_ = b), aE < 0) {
                for (p = a; 0 < p--;) c[p] && c[p].update(0, e);
                aE = 1
            } else
                for (p = 0; p < a; p++) c[p] && c[p].update(0, e);
            d.isUpdating = !1
        }
        bc = 0
    }, be = ["left", "top", aX, a$, z + ag, z + af, z + ah, z + ad, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], aG = be.concat([M, U, "boxSizing", "max" + au, "max" + bM, "position", z, k, k + ah, k + af, k + ag, k + ad]), bV = /([A-Z])/g, ak = function(b) {
        if (b) {
            var d, e, f = b.t.style,
                g = b.length,
                c = 0;
            for ((b.t._gsap || a.core.getCache(b.t)).uncache = 1; c < g; c += 2) e = b[c + 1], d = b[c], e ? f[d] = e : f[d] && f.removeProperty(d.replace(bV, "-$1").toLowerCase())
        }
    }, aH = {
        left: 0,
        top: 0
    }, bY = /(webkit|moz|length|cssText|inset)/i, d = (j.prototype.init = function(h, e) {
        var O, R, bK, aB, aM, y, X, al, aI, am, aD, aL, F, ba, bc, bk, T, bA, bp, br, aR, az, bM, aY, bI, be, by, aX, bx, w, bw, ay, ax, aF, aN, aV, bu, aQ, aJ, aA, $, bH, bG, a$, N, i, ab, bP, bg, bE, bD, bj, B, bz, aa, u, bt, a_, t, Q, v, bo, ac, an, aO, bh, bf, bJ, d, aG, bN, bO, aS, bi, C, bF, bC, bR;
        this.progress = this.start = 0, this.vars && this.kill(!0, !0), ap ? (aJ = (h = bQ(J(h) || ar(h) || h.nodeType ? {
            trigger: h
        } : h, av)).onUpdate, aA = h.toggleClass, $ = h.id, bH = h.onToggle, bG = h.onRefresh, a$ = h.scrub, N = h.trigger, i = h.pin, ab = h.pinSpacing, bP = h.invalidateOnRefresh, bg = h.anticipatePin, bE = h.onScrubComplete, bD = h.onSnapComplete, bj = h.once, B = h.snap, bz = h.pinReparent, aa = h.pinSpacer, u = h.containerAnimation, bt = h.fastScrollEnd, a_ = h.preventOverlaps, t = h.horizontal || h.containerAnimation && !1 !== h.horizontal ? q : l, Q = !a$ && 0 !== a$, v = x(h.scroller || b), bo = a.core.getCache(v), ac = W(v), an = "fixed" === ("pinType" in h ? h.pinType : P(v, "pinType") || ac && "fixed"), aO = [h.onEnter, h.onLeave, h.onEnterBack, h.onLeaveBack], bh = Q && h.toggleActions.split(" "), bf = "markers" in h ? h.markers : av.markers, bJ = ac ? 0 : parseFloat(H(v)["border" + t.p2 + au]) || 0, d = this, aG = h.onRefreshInit && function() {
            return h.onRefreshInit(d)
        }, bN = function(d, f, a) {
            var g = a.d,
                e = a.d2,
                c = a.a;
            return (c = P(d, "getBoundingClientRect")) ? function() {
                return c()[g]
            } : function() {
                return (f ? b["inner" + e] : d["client" + e]) || 0
            }
        }(v, ac, t), bO = function(a, b) {
            return !b || ~E.indexOf(a) ? bL(a) : function() {
                return aH
            }
        }(v, ac), aS = 0, bi = 0, C = V(v, t), (d.media = _, d._dir = t, bg *= 45, d.scroller = v, d.scroll = u ? u.time.bind(u) : C, aB = C(), d.vars = h, e = e || h.animation, "refreshPriority" in h && (bv = 1, -9999 === h.refreshPriority && (S = d)), bo.tweenScroll = bo.tweenScroll || {
            top: cd(v, l),
            left: cd(v, q)
        }, d.tweenTo = O = bo.tweenScroll[t.p], d.scrubDuration = function(b) {
            (bw = ar(b) && b) ? w ? w.duration(b) : w = a.to(e, {
                ease: "expo",
                totalProgress: "+=0.001",
                duration: bw,
                paused: !0,
                onComplete: function() {
                    return bE && bE(d)
                }
            }): (w && w.progress(1).kill(), w = 0)
        }, e && (e.vars.lazy = !1, e._initted || !1 !== e.vars.immediateRender && !1 !== h.immediateRender && e.render(0, !0, !0), d.animation = e.pause(), (e.scrollTrigger = d).scrubDuration(a$), aX = 0, $ = $ || e.vars.id), c.push(d), B && (aT(B) && !B.push || (B = {
            snapTo: B
        }), "scrollBehavior" in f.style && a.set(ac ? [f, G] : v, {
            scrollBehavior: "auto"
        }), bK = D(B.snapTo) ? B.snapTo : "labels" === B.snapTo ? function(b) {
            return function(c) {
                return a.utils.snap(bS(b), c)
            }
        }(e) : "labelsDirectional" === B.snapTo ? function(a) {
            return function(b, c) {
                return bm(bS(a))(b, c.direction)
            }
        }(e) : !1 !== B.directional ? function(a, b) {
            return bm(B.snapTo)(a, s() - bi < 500 ? 0 : b.direction)
        } : a.utils.snap(B.snapTo), ay = B.duration || {
            min: .1,
            max: 2
        }, ay = aT(ay) ? Z(ay.min, ay.max) : Z(ay, ay), ax = a.delayedCall(B.delay || bw / 2 || .1, function() {
            var b = C(),
                m = s() - bi < 500,
                g = O.tween,
                f, j, i, h, l, k, c, n, o, p;
            if (!(m || Math.abs(d.getVelocity()) < 10) || g || ao || aS === b) d.isActive && aS !== b && ax.restart(!0);
            else if (f = (b - y) / F, j = e && !Q ? e.totalProgress() : f, i = m ? 0 : (j - bx) / (s() - aC) * 1e3 || 0, h = a.utils.clamp(-f, 1 - f, Y(i / 2) * i / .185), l = f + (!1 === B.inertia ? 0 : h), k = Z(0, 1, bK(l, d)), c = Math.round(y + k * F), n = B.onStart, o = B.onInterrupt, p = B.onComplete, b <= X && y <= b && c !== b) {
                if (g && !g._initted && g.data <= Y(c - b)) return;
                !1 === B.inertia && (h = k - f), O(c, {
                    duration: ay(Y(.185 * Math.max(Y(l - j), Y(k - j)) / i / .05 || 0)),
                    ease: B.ease || "power3",
                    data: Y(c - b),
                    onInterrupt: function() {
                        return ax.restart(!0) && o && o(d)
                    },
                    onComplete: function() {
                        d.update(), aS = C(), aX = bx = e && !Q ? e.totalProgress() : d.progress, bD && bD(d), p && p(d)
                    }
                }, b, h * F, c - b - h * F), n && n(d, O.tween)
            }
        }).pause()), $ && (aP[$] = d), aQ = (aQ = (N = d.trigger = x(N || i)) && N._gsap && N._gsap.stRevert) && aQ(d), i = !0 === i ? N : x(i), J(aA) && (aA = {
            targets: N,
            className: aA
        }), i && (!1 === ab || ab === z || (ab = !(!ab && "flex" === H(i.parentNode).display) && k), d.pin = i, !1 !== h.force3D && a.set(i, {
            force3D: !0
        }), (R = a.core.getCache(i)).spacer ? ba = R.pinState : (aa && ((aa = x(aa)) && !aa.nodeType && (aa = aa.current || aa.nativeElement), R.spacerIsNative = !!aa, aa && (R.spacerState = aU(aa))), R.spacer = T = aa || g.createElement("div"), T.classList.add("pin-spacer"), $ && T.classList.add("pin-spacer-" + $), R.pinState = ba = aU(i)), d.spacer = T = R.spacer, by = H(i), bM = by[ab + t.os2], bp = a.getProperty(i), br = a.quickSetter(i, t.a, r), bl(i, T, by), bk = aU(i)), bf) && (aL = aT(bf) ? bQ(bf, bB) : bB, am = bd("scroller-start", $, v, t, aL, 0), aD = bd("scroller-end", $, v, t, aL, 0, am), bA = am["offset" + t.op.d2], bF = x(P(v, "content") || v), al = this.markerStart = bd("start", $, bF, t, aL, bA, 0, u), aI = this.markerEnd = bd("end", $, bF, t, aL, bA, 0, u), u && (bu = a.quickSetter([al, aI], t.a, r)), an || E.length && !0 === P(v, "fixedMarkers") || (function(b) {
            var a = H(b).position;
            b.style.position = "absolute" === a || "fixed" === a ? a : "relative"
        }(ac ? f : v), a.set([am, aD], {
            force3D: !0
        }), bI = a.quickSetter(am, t.a, r), be = a.quickSetter(aD, t.a, r))), u && (bC = u.vars.onUpdate, bR = u.vars.onUpdateParams, u.eventCallback("onUpdate", function() {
            d.update(0, 0, 1), bC && bC.apply(bR || [])
        })), d.previous = function() {
            return c[c.indexOf(d) - 1]
        }, d.next = function() {
            return c[c.indexOf(d) + 1]
        }, d.revert = function(b) {
            var a = !1 !== b || !d.enabled,
                c = m;
            a !== d.isReverted && (a && (!d.scroll.rec && m && aj && (d.scroll.rec = C()), aN = Math.max(C(), d.scroll.rec || 0), aF = d.progress, aV = e && e.progress()), al && [al, aI, am, aD].forEach(function(b) {
                return b.style.display = a ? "none" : "block"
            }), a && (m = 1), d.update(a), m = c, i && (a ? function(a, c, e) {
                var d, b;
                ak(e), d = a._gsap, d.spacerIsNative ? ak(d.spacerState) : a._gsap.swappedIn && (b = c.parentNode, b && (b.insertBefore(a, c), b.removeChild(c))), a._gsap.swappedIn = !1
            }(i, T, ba) : bz && d.isActive || bl(i, T, H(i), aY)), d.isReverted = a)
        }, d.refresh = function(at, aq) {
            if (!m && d.enabled || aq)
                if (i && at && A) o(j, "scrollEnd", bn);
                else {
                    !aj && aG && aG(d), m = 1, bi = s(), O.tween && (O.tween.kill(), O.tween = 0), w && w.pause(), bP && e && e.time(-.01, !0).invalidate(), d.isReverted || d.revert();
                    for (var n, p, aa, W, b, g, P, $, ap, Y, Z = bN(), ai = bO(), S = u ? u.duration() : L(v, t), K = 0, R = 0, B = h.end, ae = h.endTrigger || N, G = h.start || (0 !== h.start && N ? i ? "0 0" : "0 100%" : 0), ao = d.pinnedContainer = h.pinnedContainer && x(h.pinnedContainer), _ = N && Math.max(0, c.indexOf(d)) || 0, E = _; E--;)(g = c[E]).end || g.refresh(0, 1) || (m = 1), !(P = g.pin) || P !== N && P !== i || g.isReverted || ((Y = Y || []).unshift(g), g.revert()), g !== c[E] && (_--, E--);
                    for (D(G) && (G = G(d)), y = ca(G, N, Z, t, C(), al, am, d, ai, bJ, an, S, u) || (i ? -.001 : 0), D(B) && (B = B(d)), J(B) && !B.indexOf("+=") && (~B.indexOf(" ") ? B = (J(G) ? G.split(" ")[0] : "") + B : (K = aZ(B.substr(2), Z), B = J(G) ? G : y + K, ae = N)), X = Math.max(y, ca(B || (ae ? "100% 0" : S), ae, Z, t, C() + K, aI, aD, d, ai, bJ, an, S, u)) || -.001, F = X - y || (y -= .01) && .001, K = 0, E = _; E--;)(P = (g = c[E]).pin) && g.start - g._pinPush < y && !u && 0 < g.end && (n = g.end - g.start, P !== N && P !== ao || ar(G) || (K += n * (1 - g.progress)), P === i && (R += n));
                    if (y += K, X += K, d._pinPush = R, al && K && ((n = {})[t.a] = "+=" + K, ao && (n[t.p] = "-=" + C()), a.set([al, aI], n)), i) n = H(i), W = t === l, aa = C(), aR = parseFloat(bp(t.a)) + R, !S && 1 < X && ((ac ? f : v).style["overflow-" + t.a] = "scroll"), bl(i, T, n), bk = aU(i), p = I(i, !0), $ = an && V(v, W ? q : l)(), ab && ((aY = [ab + t.os2, F + R + r]).t = T, (E = ab === k ? bq(i, t) + F + R : 0) && aY.push(t.d, E + r), ak(aY), an && C(aN)), an && ((b = {
                        top: p.top + (W ? aa - y : $) + r,
                        left: p.left + (W ? $ : aa - y) + r,
                        boxSizing: "border-box",
                        position: "fixed"
                    })[M] = b.maxWidth = Math.ceil(p.width) + r, b[U] = b.maxHeight = Math.ceil(p.height) + r, b[z] = b[z + ah] = b[z + af] = b[z + ag] = b[z + ad] = "0", b[k] = n[k], b[k + ah] = n[k + ah], b[k + af] = n[k + af], b[k + ag] = n[k + ag], b[k + ad] = n[k + ad], bc = function(a, e, g) {
                        for (var b, d = [], f = a.length, c = g ? 8 : 0; c < f; c += 2) b = a[c], d.push(b, b in e ? e[b] : a[c + 1]);
                        return d.t = a.t, d
                    }(ba, b, bz)), e ? (ap = e._initted, aW(1), e.render(e.duration(), !0, !0), az = bp(t.a) - aR + F + R, F !== az && an && bc.splice(bc.length - 2, 2), e.render(0, !0, !0), ap || e.invalidate(), aW(0)) : az = F;
                    else if (N && C() && !u)
                        for (p = N.parentNode; p && p !== f;) p._pinOffset && (y -= p._pinOffset, X -= p._pinOffset), p = p.parentNode;
                    Y && Y.forEach(function(a) {
                        return a.revert(!1)
                    }), d.start = y, d.end = X, aB = aM = C(), u || (aB < aN && C(aN), d.scroll.rec = 0), d.revert(!1), ax && (aS = -1, d.isActive && C(y + F * aF), ax.restart(!0)), m = 0, e && Q && (e._initted || aV) && e.progress() !== aV && e.progress(aV, !0).render(e.time(), !0, !0), aF === d.progress && !u || (e && !Q && e.totalProgress(aF, !0), d.progress = aF, d.update(0, 0, 1)), i && ab && (T._pinOffset = Math.round(d.progress * az)), bG && bG(d)
                }
        }, d.getVelocity = function() {
            return (C() - aM) / (s() - aC) * 1e3 || 0
        }, d.endAnimation = function() {
            aq(d.callbackAnimation), e && (w ? w.progress(1) : e.paused() ? Q || aq(e, d.direction < 0, 1) : aq(e, e.reversed()))
        }, d.labelToScroll = function(a) {
            return e && e.labels && (y || d.refresh() || y) + e.labels[a] / e.duration() * F || 0
        }, d.getTrailing = function(a) {
            var b = c.indexOf(d),
                e = 0 < d.direction ? c.slice(0, b).reverse() : c.slice(b + 1);
            return (J(a) ? e.filter(function(b) {
                return b.vars.preventOverlaps === a
            }) : e).filter(function(a) {
                return 0 < d.direction ? a.end <= y : a.start >= X
            })
        }, d.update = function(n, J, H) {
            var k, c, h, o, j, q, p, b, x, a, g, z, E, G;
            (!u || H || n) && (b = d.scroll(), x = n ? 0 : (b - y) / F, a = x < 0 ? 0 : 1 < x ? 1 : x || 0, g = d.progress, (J && (aM = aB, aB = u ? C() : b, B && (bx = aX, aX = e && !Q ? e.totalProgress() : a)), bg && !a && i && !m && !ai && A && y < b + (b - aM) / (s() - aC) * bg && (a = 1e-4), a !== g && d.enabled) && (o = (j = (k = d.isActive = !!a && a < 1) != (!!g && g < 1)) || !!a != !!g, d.direction = g < a ? 1 : -1, d.progress = a, o && !m && (c = a && !g ? 0 : 1 === a ? 1 : 1 === g ? 2 : 3, Q && (h = !j && "none" !== bh[c + 1] && bh[c + 1] || bh[c], p = e && ("complete" === h || "reset" === h || h in e))), a_ && (j || p) && (p || a$ || !e) && (D(a_) ? a_(d) : d.getTrailing(a_).forEach(function(a) {
                return a.endAnimation()
            })), Q || (!w || m || ai ? e && e.totalProgress(a, !!m) : ((u || S && S !== d) && w.render(w._dp._time - w._start), w.resetTo ? w.resetTo("totalProgress", a, e._tTime / e._tDur) : (w.vars.totalProgress = a, w.invalidate().restart()))), i && (n && ab && (T.style[ab + t.os2] = bM), an ? o && (q = !n && g < a && b < X + 1 && b + 1 >= L(v, t), bz && (n || !k && !q ? ce(i, T) : (z = I(i, !0), E = b - y, ce(i, f, z.top + (t === l ? E : 0) + r, z.left + (t === l ? 0 : E) + r))), ak(k || q ? bc : bk), az !== F && a < 1 && k || br(aR + (1 !== a || q ? 0 : az))) : br(aw(aR + az * a))), !B || O.tween || m || ai || ax.restart(!0), aA && (j || bj && a && (a < 1 || !bb)) && aK(aA.targets).forEach(function(a) {
                return a.classList[k || bj ? "add" : "remove"](aA.className)
            }), !aJ || Q || n || aJ(d), o && !m ? (Q && (p && ("complete" === h ? e.pause().totalProgress(1) : "reset" === h ? e.restart(!0).pause() : "restart" === h ? e.restart(!0) : e[h]()), aJ && aJ(d)), !j && bb || (bH && j && bs(d, bH), aO[c] && bs(d, aO[c]), bj && (1 === a ? d.kill(!1, 1) : aO[c] = 0), j || aO[c = 1 === a ? 1 : 3] && bs(d, aO[c])), bt && !k && Math.abs(d.getVelocity()) > (ar(bt) ? bt : 2500) && (aq(d.callbackAnimation), w ? w.progress(1) : aq(e, !a, 1))) : Q && aJ && !m && aJ(d)), be && (G = u ? b / u.duration() * (u._caScrollDist || 0) : b, bI(G + (am._isFlipped ? 1 : 0)), be(G)), bu && bu(-b / u.duration() * (u._caScrollDist || 0)))
        }, d.enable = function(a, b) {
            d.enabled || (d.enabled = !0, o(v, "resize", at), o(ac ? g : v, "scroll", ae), aG && o(j, "refreshInit", aG), !1 !== a && (d.progress = aF = 0, aB = aM = aS = C()), !1 !== b && d.refresh())
        }, d.getTween = function(a) {
            return a && O ? O.tween : w
        }, d.setPositions = function(a, b) {
            i && (aR += a - y, az += b - a - F), d.start = y = a, d.end = X = b, F = b - a, d.update()
        }, d.disable = function(b, e) {
            if (d.enabled && (!1 !== b && d.revert(), d.enabled = d.isActive = !1, e || w && w.pause(), aN = 0, R && (R.uncache = 1), aG && n(j, "refreshInit", aG), ax && (ax.pause(), O.tween && O.tween.kill() && (O.tween = 0)), !ac)) {
                for (var a = c.length; a--;)
                    if (c[a].scroller === v && c[a] !== d) return;
                n(v, "resize", at), n(v, "scroll", ae)
            }
        }, d.kill = function(f, b) {
            d.disable(f, b), w && !b && w.kill(), $ && delete aP[$];
            var a = c.indexOf(d);
            0 <= a && c.splice(a, 1), a === p && 0 < aE && p--, a = 0, c.forEach(function(b) {
                return b.scroller === d.scroller && (a = 1)
            }), a || (d.scroll.rec = 0), e && (e.scrollTrigger = null, f && e.render(-1), b || e.kill()), al && [al, aI, am, aD].forEach(function(a) {
                return a.parentNode && a.parentNode.removeChild(a)
            }), S === d && (S = 0), i && (R && (R.uncache = 1), a = 0, c.forEach(function(b) {
                return b.pin === i && a++
            }), a || (R.spacer = 0)), h.onKill && h.onKill(d)
        }, d.enable(!1, !1), aQ && aQ(d), e && e.add && !F ? a.delayedCall(.01, function() {
            return y || X || d.refresh()
        }) && (F = .01) && (y = X = 0) : d.refresh()) : this.update = this.refresh = this.kill = K
    }, j.register = function(b) {
        return T || (a = b || bK(), bJ() && window.document && j.enable(), T = ap), T
    }, j.defaults = function(a) {
        if (a)
            for (var b in a) av[b] = a[b];
        return av
    }, j.disable = function(d, h) {
        ap = 0, c.forEach(function(a) {
            return a[h ? "kill" : "disable"](d)
        }), n(b, "wheel", ae), n(g, "scroll", ae), clearInterval(aI), n(g, "touchcancel", K), n(f, "touchstart", K), ba(n, g, "pointerdown,touchstart,mousedown", bG), ba(n, g, "pointerup,touchend,mouseup", bH), aJ.kill(), aS(n);
        for (var a = 0; a < e.length; a += 3) aY(n, e[a], e[a + 1]), aY(n, e[a], e[a + 2])
    }, j.enable = function() {
        if (b = window, g = document, G = g.documentElement, f = g.body, a && (aK = a.utils.toArray, Z = a.utils.clamp, aW = a.core.suppressOverwrites || K, a.core.globals("ScrollTrigger", j), f)) {
            ap = 1, i.register(a), j.isTouch = i.isTouch, R = i.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), o(b, "wheel", ae), bF = [b, g, G, f], j.matchMedia({
                "(orientation: portrait)": function() {
                    return bU(), bU
                }
            }), o(g, "scroll", ae);
            var k, d, h = f.style,
                m = h.borderTopStyle;
            for (h.borderTopStyle = "solid", k = I(f), l.m = Math.round(k.top + l.sc()) || 0, q.m = Math.round(k.left + q.sc()) || 0, m ? h.borderTopStyle = m : h.removeProperty("border-top-style"), aI = setInterval(bT, 250), a.delayedCall(.5, function() {
                    return ai = 0
                }), o(g, "touchcancel", K), o(f, "touchstart", K), ba(o, g, "pointerdown,touchstart,mousedown", bG), ba(o, g, "pointerup,touchend,mouseup", bH), aQ = a.utils.checkPrefix("transform"), aG.push(aQ), T = s(), aJ = a.delayedCall(.2, aa).pause(), ac = [g, "visibilitychange", function() {
                    var a = b.innerWidth,
                        c = b.innerHeight;
                    g.hidden ? (bx = a, bw = c) : bx === a && bw === c || at()
                }, g, "DOMContentLoaded", aa, b, "load", aa, b, "resize", at], aS(o), c.forEach(function(a) {
                    return a.enable(0, 1)
                }), d = 0; d < e.length; d += 3) aY(n, e[d], e[d + 1]), aY(n, e[d], e[d + 2])
        }
    }, j.config = function(a) {
        "limitCallbacks" in a && (bb = !!a.limitCallbacks);
        var b = a.syncInterval;
        b && clearInterval(aI) || (aI = b) && setInterval(bT, b), "ignoreMobileResize" in a && (bk = 1 === j.isTouch && a.ignoreMobileResize), "autoRefreshEvents" in a && (aS(n) || aS(o, a.autoRefreshEvents || "none"), bo = -1 === (a.autoRefreshEvents + "").indexOf("resize"))
    }, j.scrollerProxy = function(h, a) {
        var c = x(h),
            d = e.indexOf(c),
            g = W(c);
        ~d && e.splice(d, g ? 6 : 2), a && (g ? E.unshift(b, a, f, a, G, a) : E.unshift(c, a))
    }, j.matchMedia = function(g) {
        var c, d, a, e, f;
        for (d in g) a = h.indexOf(d), e = g[d], "all" === (_ = d) ? e() : (c = b.matchMedia(d)) && (c.matches && (f = e()), ~a ? (h[a + 1] = bN(h[a + 1], e), h[a + 2] = bN(h[a + 2], f)) : (a = h.length, h.push(d, e, f), c.addListener ? c.addListener(bX) : c.addEventListener("change", bX)), h[a + 3] = c.matches), _ = 0;
        return h
    }, j.clearMatchMedia = function(a) {
        a || (h.length = 0), 0 <= (a = h.indexOf(a)) && h.splice(a, 4)
    }, j.isInViewport = function(d, f, e) {
        var a = (J(d) ? x(d) : d).getBoundingClientRect(),
            c = a[e ? M : U] * f || 0;
        return e ? 0 < a.right - c && a.left + c < b.innerWidth : 0 < a.bottom - c && a.top + c < b.innerHeight
    }, j.positionInViewport = function(c, a, g) {
        J(c) && (c = x(c));
        var d = c.getBoundingClientRect(),
            e = d[g ? M : U],
            f = null == a ? e / 2 : a in ay ? ay[a] * e : ~a.indexOf("%") ? parseFloat(a) * e / 100 : parseFloat(a) || 0;
        return g ? (d.left + f) / b.innerWidth : (d.top + f) / b.innerHeight
    }, j);

    function j(b, c) {
        T || j.register(a) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(b, c)
    }
    d.version = "3.10.5", d.saveStyles = function(b) {
        return b ? aK(b).forEach(function(b) {
            if (b && b.style) {
                var c = B.indexOf(b);
                0 <= c && B.splice(c, 5), B.push(b, b.style.cssText, b.getBBox && b.getAttribute("transform"), a.core.getCache(b), _)
            }
        }) : B
    }, d.revert = function(a, b) {
        return aD(!a, b)
    }, d.create = function(a, b) {
        return new d(a, b)
    }, d.refresh = function(a) {
        return a ? at() : (T || d.register()) && aa(!0)
    }, d.update = an, d.clearScrollMemory = b_, d.maxScroll = function(a, b) {
        return L(a, b ? q : l)
    }, d.getScrollFunc = function(a, b) {
        return V(x(a), b ? q : l)
    }, d.getById = function(a) {
        return aP[a]
    }, d.getAll = function() {
        return c.filter(function(a) {
            return "ScrollSmoother" !== a.vars.id
        })
    }, d.isScrolling = function() {
        return !!A
    }, d.snapDirectional = bm, d.addEventListener = function(a, b) {
        var c = al[a] || (al[a] = []);
        ~c.indexOf(b) || c.push(b)
    }, d.removeEventListener = function(c, d) {
        var a = al[c],
            b = a && a.indexOf(d);
        0 <= b && a.splice(b, 1)
    }, d.batch = function(h, c) {
        function i(g, f) {
            var b = [],
                c = [],
                d = a.delayedCall(j, function() {
                    f(b, c), b = [], c = []
                }).pause();
            return function(a) {
                b.length || d.restart(!0), b.push(a.trigger), c.push(a), e <= b.length && d.progress(1)
            }
        }
        var b, g = [],
            f = {},
            j = c.interval || .016,
            e = c.batchMax || 1e9;
        for (b in c) f[b] = "on" === b.substr(0, 2) && D(c[b]) && "onRefreshInit" !== b ? i(0, c[b]) : c[b];
        return D(e) && (e = e(), o(d, "refresh", function() {
            return e = c.batchMax()
        })), aK(h).forEach(function(c) {
            var a = {};
            for (b in f) a[b] = f[b];
            a.trigger = c, g.push(d.create(a))
        }), g
    };

    function b$(d, a, b, c) {
        return c < a ? d(c) : a < 0 && d(0), c < b ? (c - a) / (b - a) : b < 0 ? a / (a - b) : 1
    }

    function aR(b, a) {
        !0 === a ? b.style.removeProperty("touch-action") : b.style.touchAction = !0 === a ? "auto" : a ? "pan-" + a + (i.isTouch ? " pinch-zoom" : "") : "none", b === G && aR(f, a)
    }

    function ch(e) {
        var f, d = e.event,
            h = e.target,
            i = e.axis,
            b = (d.changedTouches ? d.changedTouches[0] : d).target,
            c = b._gsap || a.core.getCache(b),
            g = s();
        if (!c._isScrollT || 2e3 < g - c._isScrollT) {
            for (; b && b.scrollHeight <= b.clientHeight;) b = b.parentNode;
            c._isScroll = b && !W(b) && b !== h && (bD[(f = H(b)).overflowY] || bD[f.overflowX]), c._isScrollT = g
        }!c._isScroll && "x" !== i || (d._gsapAllow = !0)
    }

    function cc(b, c, d, a) {
        return i.create({
            target: b,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: c,
            onWheel: a = a && ch,
            onPress: a,
            onDrag: a,
            onScroll: a,
            onEnable: function() {
                return d && o(g, i.eventTypes[0], bt, !1, !0)
            },
            onDisable: function() {
                return n(g, i.eventTypes[0], bt, !0)
            }
        })
    }

    function cg(c) {
        function Q() {
            return A = !1
        }

        function z() {
            j = L(h, l), u = Z(R ? 1 : 0, j), m && (y = Z(0, L(h, q))), t = aM
        }

        function B() {
            g._gsap.y = aw(parseFloat(g._gsap.y) + d.offset) + "px", g.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(g._gsap.y) + ", 0, 1)", d.offset = d.cacheID = 0
        }

        function v() {
            z(), f.isActive() && f.vars.scrollY > j && (d() > j ? f.progress(1) && d(j) : f.resetTo("scrollY", j))
        }
        aT(c) || (c = {}), c.preventDefault = c.isNormalizer = c.allowClicks = !0, c.type || (c.type = "wheel,touch"), c.debounce = !!c.debounce, c.id = c.id || "normalizer";
        var k, j, t, A, f, I, w, E, m = c.normalizeScrollX,
            F = c.momentum,
            P = c.allowNestedScroll,
            h = x(c.target) || G,
            H = a.core.globals().ScrollSmoother,
            C = H && H.get(),
            g = R && (c.content && x(c.content) || C && !1 !== c.content && !C.smooth() && C.content()),
            d = V(h, l),
            r = V(h, q),
            p = 1,
            N = (i.isTouch && b.visualViewport ? b.visualViewport.scale * b.visualViewport.width : b.outerWidth) / b.innerWidth,
            J = 0,
            O = D(F) ? function() {
                return F(k)
            } : function() {
                return F || 2.8
            },
            M = cc(h, c.type, !0, P),
            y = K,
            u = K;
        return g && a.set(g, {
            y: "+=0"
        }), c.ignoreCheck = function(a) {
            return R && "touchmove" === a.type && function() {
                var c, a, b;
                if (A) return requestAnimationFrame(Q), c = aw(k.deltaY / 2), a = u(d.v - c), g && a !== d.v + d.offset && (d.offset = a - d.v, b = aw((parseFloat(g && g._gsap.y) || 0) - d.offset), g.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + b + ", 0, 1)", g._gsap.y = b + "px", d.cacheID = e.cache, an()), !0;
                d.offset && B(), A = !0
            }() || 1.05 < p && "touchstart" !== a.type || k.isGesturing || a.touches && 1 < a.touches.length
        }, c.onPress = function() {
            var a = p;
            p = aw((b.visualViewport && b.visualViewport.scale || 1) / N), f.pause(), a !== p && aR(h, 1.01 < p || !m && "x"), I = r(), w = d(), z(), t = aM
        }, c.onRelease = c.onGestureStart = function(i, k) {
            if (d.offset && B(), k) {
                e.cache++;
                var g, b, c = O();
                m && (b = (g = r()) + .05 * c * -i.velocityX / .227, c *= b$(r, g, b, L(h, q)), f.vars.scrollX = y(b)), b = (g = d()) + .05 * c * -i.velocityY / .227, c *= b$(d, g, b, L(h, l)), f.vars.scrollY = u(b), f.invalidate().duration(c).play(.01), (R && f.vars.scrollY >= j || j - 1 <= g) && a.to({}, {
                    onUpdate: v,
                    duration: c
                })
            } else E.restart(!0)
        }, c.onWheel = function() {
            f._ts && f.pause(), 1e3 < s() - J && (t = 0, J = s())
        }, c.onChange = function(a, b, c, g, h) {
            if (aM !== t && z(), b && m && r(y(g[2] === b ? I + (a.startX - a.x) : r() + b - g[1])), c) {
                d.offset && B();
                var i = h[2] === c,
                    e = i ? w + a.startY - a.y : d() + c - h[1],
                    f = u(e);
                i && e !== f && (w += f - e), d(f)
            }(c || b) && an()
        }, c.onEnable = function() {
            aR(h, !m && "x"), o(b, "resize", v), M.enable()
        }, c.onDisable = function() {
            aR(h, !0), n(b, "resize", v), M.kill()
        }, c.lockAxis = !1 !== c.lockAxis, ((k = new i(c)).iOS = R) && !d() && d(1), R && a.ticker.add(K), E = k._dc, f = a.to(k, {
            ease: "power4",
            paused: !0,
            scrollX: m ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            onComplete: E.vars.onComplete
        }), k
    }
    bD = {
        auto: 1,
        scroll: 1
    }, cb = /(input|label|select|textarea)/i, bt = function(a) {
        var b = cb.test(a.target.tagName);
        (b || bz) && (a._gsapAllow = !0, bz = b)
    }, d.sort = function(a) {
        return c.sort(a || function(a, b) {
            return -1e6 * (a.vars.refreshPriority || 0) + a.start - (b.start + -1e6 * (b.vars.refreshPriority || 0))
        })
    }, d.observe = function(a) {
        return new i(a)
    }, d.normalizeScroll = function(a) {
        if (void 0 === a) return y;
        if (!0 === a && y) return y.enable();
        if (!1 === a) return y && y.kill();
        var b = a instanceof i ? a : cg(a);
        return y && y.target === b.target && y.kill(), W(b.target) && (y = b), b
    }, d.core = {
        _getVelocityProp: bp,
        _inputObserver: cc,
        _scrollers: e,
        _proxies: E,
        bridge: {
            ss: function() {
                A || N("scrollStart"), A = s()
            },
            ref: function() {
                return m
            }
        }
    }, bK() && a.registerPlugin(d), ax.ScrollTrigger = d, ax.default = d, typeof window == "undefined" || window !== ax ? Object.defineProperty(ax, "__esModule", {
        value: !0
    }) : delete ax.default
})