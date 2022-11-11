import De from "react";
function or(I) {
  var A = [], V = 0, $ = 0, D = function(v, d) {
    A[d] = A[d] || [], A[d][v] = 1;
  }, N = function(v) {
    for (var d = [], l = v.length, o = 0; o < l; o++) {
      var a = v.charCodeAt(o), u = o + 1 < l ? v.charCodeAt(o + 1) : 0;
      a > 47 && a < 58 && u > 47 && u < 58 ? (d.push((a - 48) * 10 + u + 82), o++) : a > 127 ? (d.push(235), d.push(a - 127 & 255)) : d.push(a + 1);
    }
    return d;
  }, U = function(v) {
    var d = [231], l = v.length;
    250 < l && d.push(37 + (l / 250 | 0) & 255), d.push(l % 250 + 149 * (d.length + 1) % 255 + 1 & 255);
    for (var o = 0; o < l; o++)
      d.push(v.charCodeAt(o) + 149 * (d.length + 1) % 255 + 1 & 255);
    return d;
  }, F = function(v) {
    for (var d = v.length, l = d + 1 & -4, o = 0, a, u = l > 0 ? [240] : [], i = 0; i < l; i++) {
      if (i < l - 1) {
        if (a = v.charCodeAt(i), a < 32 || a > 94)
          return [];
      } else
        a = 31;
      o = o * 64 + (a & 63), (i & 3) == 3 && (u.push(o >> 16), u.push(o >> 8 & 255), u.push(o & 255), o = 0);
    }
    return l > d ? u : u.concat(N(v.substr(l == 0 ? 0 : l - 1)));
  }, C = function(v, d) {
    var l, o, a = 0, u = 0, i = v.length, n = [d[0]], g = function(O) {
      u = 40 * u + O, a++ == 2 && (n.push(++u >> 8), n.push(u & 255), a = u = 0);
    };
    for (l = 0; l < i && !(a == 0 && l == i - 1); l++) {
      var k = v.charCodeAt(l);
      for (k > 127 && n[0] != 238 && (g(1), g(30), k -= 128), o = 1; k > d[o]; o += 3)
        ;
      var S = d[o + 1];
      if (S == 8 || S == 9 && a == 0 && l == i - 1)
        return [];
      if (S < 5 && a == 2 && l == i - 1)
        break;
      S < 5 && g(S), g(k - d[o + 2]);
    }
    return a == 2 && n[0] !== 238 && g(0), n.push(254), (a > 0 || l < i) && (n = n.concat(N(v.substr(l - a)))), n;
  }, q = function(v, d) {
    v = unescape(encodeURI(v));
    var l = N(v), o = l.length, a = C(v, [
      230,
      31,
      0,
      0,
      32,
      9,
      29,
      47,
      1,
      33,
      57,
      9,
      44,
      64,
      1,
      43,
      90,
      9,
      51,
      95,
      1,
      69,
      127,
      2,
      96,
      255,
      1,
      0
    ]), u = a.length;
    u > 0 && u < o && (l = a, o = u), a = C(v, [
      239,
      31,
      0,
      0,
      32,
      9,
      29,
      47,
      1,
      33,
      57,
      9,
      44,
      64,
      1,
      43,
      90,
      2,
      64,
      95,
      1,
      69,
      122,
      9,
      83,
      127,
      2,
      96,
      255,
      1,
      0
    ]), u = a.length, u > 0 && u < o && (l = a, o = u), a = C(v, [
      238,
      12,
      8,
      0,
      13,
      9,
      13,
      31,
      8,
      0,
      32,
      9,
      29,
      41,
      8,
      0,
      42,
      9,
      41,
      47,
      8,
      0,
      57,
      9,
      44,
      64,
      8,
      0,
      90,
      9,
      51,
      255,
      8,
      0
    ]), u = a.length, u > 0 && u < o && (l = a, o = u), a = F(v), u = a.length, u > 0 && u < o && (l = a, o = u), a = U(v), u = a.length, u > 0 && u < o && (l = a, o = u);
    var i, n, g = 1, k = 1, S, O, f, s = -1, m, w, E, P = 1, Y = new Array(70), _ = new Array(70), j = new Array(256), M = new Array(255);
    if (d && o < 50) {
      a = [
        16,
        7,
        28,
        11,
        24,
        14,
        32,
        18,
        32,
        24,
        44,
        28
      ];
      do
        n = a[++s], i = 6 + (s & 12), u = n * i / 8;
      while (u - a[++s] < o);
      n > 25 && (g = 2);
    } else {
      n = i = 6, f = 2, a = [5, 7, 10, 12, 14, 18, 20, 24, 28, 36, 42, 48, 56, 68, 84, 112, 144, 192, 224, 272, 336, 408, 496, 620];
      do {
        if (++s == a.length)
          return [0, 0];
        n > 11 * f && (f = 4 + f & 12), n = i += f, u = n * i >> 3;
      } while (u - a[s] < o);
      n > 27 && (k = g = 2 * (n / 54 | 0) + 2), u > 255 && (P = 2 * (u >> 9) + 2);
    }
    for (E = a[s], S = n / g, O = i / k, o < u - E && (l[o++] = 129); o < u - E; )
      l[o++] = (149 * o % 253 + 130) % 254;
    for (E /= P, s = 1, f = 0; f < 255; f++)
      M[f] = s, j[s] = f, s += s, s > 255 && (s ^= 301);
    for (Y[E] = 0, f = 1; f <= E; f++)
      for (s = E - f, Y[s] = 1; s < E; s++)
        Y[s] = Y[s + 1] ^ M[(j[Y[s]] + f) % 255];
    for (m = 0; m < P; m++) {
      for (f = 0; f <= E; f++)
        _[f] = 0;
      for (f = m; f < o; f += P)
        for (s = 0, L = _[0] ^ l[f]; s < E; s++)
          _[s] = _[s + 1] ^ (L ? M[(j[Y[s]] + j[L]) % 255] : 0);
      for (f = 0; f < E; f++)
        l[o + m + f * P] = _[f];
    }
    for (f = 0; f < i + 2 * k; f += O + 2)
      for (s = 0; s < n + 2 * g; s++)
        D(s, f + O + 1), (s & 1) == 0 && D(s, f);
    for (f = 0; f < n + 2 * g; f += S + 2)
      for (s = 0; s < i; s++)
        D(f, s + (s / O | 0) * 2 + 1), (s & 1) == 1 && D(f + S + 1, s + (s / O | 0) * 2);
    for (E = 2, m = 0, w = 4, P = [
      0,
      0,
      -1,
      0,
      -2,
      0,
      0,
      -1,
      -1,
      -1,
      -2,
      -1,
      -1,
      -2,
      -2,
      -2
    ], f = 0; f < u; w -= E, m += E) {
      if (w == i - 3 && m == -1)
        a = [
          n,
          6 - i,
          n,
          5 - i,
          n,
          4 - i,
          n,
          3 - i,
          n - 1,
          3 - i,
          3,
          2,
          2,
          2,
          1,
          2
        ];
      else if (w == i + 1 && m == 1 && (n & 7) == 0 && (i & 7) == 6)
        a = [
          n - 2,
          -i,
          n - 3,
          -i,
          n - 4,
          -i,
          n - 2,
          -1 - i,
          n - 3,
          -1 - i,
          n - 4,
          -1 - i,
          n - 2,
          -2,
          -1,
          -2
        ];
      else {
        if (w == 0 && m == n - 2 && n & 3)
          continue;
        if (w < 0 || m >= n || w >= i || m < 0)
          for (E = -E, w += 2 + E / 2, m += 2 - E / 2; w < 0 || m >= n || w >= i || m < 0; )
            w -= E, m += E;
        if (w == i - 2 && m == 0 && n & 3)
          a = [
            n - 1,
            3 - i,
            n - 1,
            2 - i,
            n - 2,
            2 - i,
            n - 3,
            2 - i,
            n - 4,
            2 - i,
            0,
            1,
            0,
            0,
            0,
            -1
          ];
        else if (w == i - 2 && m == 0 && (n & 7) == 4)
          a = [
            n - 1,
            5 - i,
            n - 1,
            4 - i,
            n - 1,
            3 - i,
            n - 1,
            2 - i,
            n - 2,
            2 - i,
            0,
            1,
            0,
            0,
            0,
            -1
          ];
        else {
          if (w == 1 && m == n - 1 && (n & 7) == 0 && (i & 7) == 6)
            continue;
          a = P;
        }
      }
      for (o = l[f++], s = 0; o > 0; s += 2, o >>= 1)
        if (o & 1) {
          var L = m + a[s], z = w + a[s + 1];
          L < 0 && (L += n, z += 4 - (n + 4 & 7)), z < 0 && (z += i, L += 4 - (i + 4 & 7)), D(L + 2 * (L / S | 0) + 1, z + 2 * (z / O | 0) + 1);
        }
    }
    for (f = n; f & 3; f--)
      D(f, f);
    V = n + 2 * g, $ = i + 2 * k;
  };
  return function() {
    function v(_) {
      return /^#[0-9a-f]{3}(?:[0-9a-f]{3})?$/i.test(_);
    }
    function d(_, j) {
      _ = document.createElementNS(k, _);
      for (var M in j || {})
        _.setAttribute(M, j[M]);
      return _;
    }
    var l = Math.abs, o, a, u, i, n, g, k = "http://www.w3.org/2000/svg", S = "", O = typeof I == "string" ? { msg: I } : I || {}, f = O.pal || ["#000"], s = l(O.dim) || 256, m = l(O.pad), m = m > -1 ? m : 2, w = [1, 0, 0, 1, m, m], E = f[0], E = v(E) ? E : "#000", P = f[1], P = v(P) ? P : 0, Y = O.vrb ? 0 : 1;
    for (q(O.msg || "", O.rct), n = V + m * 2, g = $ + m * 2, u = $; u--; )
      for (i = 0, a = V; a--; )
        A[u][a] && (Y ? (i++, A[u][a - 1] || (S += "M" + a + "," + u + "h" + i + "v1h-" + i + "v-1z", i = 0)) : S += "M" + a + "," + u + "h1v1h-1v-1z");
    return o = d("svg", {
      viewBox: [0, 0, n, g].join(" "),
      width: s / g * n | 0,
      height: s,
      fill: E,
      "shape-rendering": "crispEdges",
      xmlns: k,
      version: "1.1"
    }), P && o.appendChild(d("path", {
      fill: P,
      d: "M0,0v" + g + "h" + n + "V0H0Z"
    })), o.appendChild(d("path", {
      transform: "matrix(" + w + ")",
      d: S
    })), o;
  }();
}
var Fe = { exports: {} }, K = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ke;
function ur() {
  if (ke)
    return K;
  ke = 1;
  var I = De, A = Symbol.for("react.element"), V = Symbol.for("react.fragment"), $ = Object.prototype.hasOwnProperty, D = I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, N = { key: !0, ref: !0, __self: !0, __source: !0 };
  function U(F, C, q) {
    var v, d = {}, l = null, o = null;
    q !== void 0 && (l = "" + q), C.key !== void 0 && (l = "" + C.key), C.ref !== void 0 && (o = C.ref);
    for (v in C)
      $.call(C, v) && !N.hasOwnProperty(v) && (d[v] = C[v]);
    if (F && F.defaultProps)
      for (v in C = F.defaultProps, C)
        d[v] === void 0 && (d[v] = C[v]);
    return { $$typeof: A, type: F, key: l, ref: o, props: d, _owner: D.current };
  }
  return K.Fragment = V, K.jsx = U, K.jsxs = U, K;
}
var X = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ae;
function fr() {
  return Ae || (Ae = 1, process.env.NODE_ENV !== "production" && function() {
    var I = De, A = Symbol.for("react.element"), V = Symbol.for("react.portal"), $ = Symbol.for("react.fragment"), D = Symbol.for("react.strict_mode"), N = Symbol.for("react.profiler"), U = Symbol.for("react.provider"), F = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), q = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), l = Symbol.for("react.lazy"), o = Symbol.for("react.offscreen"), a = Symbol.iterator, u = "@@iterator";
    function i(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = a && e[a] || e[u];
      return typeof r == "function" ? r : null;
    }
    var n = I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), c = 1; c < r; c++)
          t[c - 1] = arguments[c];
        k("error", e, t);
      }
    }
    function k(e, r, t) {
      {
        var c = n.ReactDebugCurrentFrame, b = c.getStackAddendum();
        b !== "" && (r += "%s", t = t.concat([b]));
        var y = t.map(function(h) {
          return String(h);
        });
        y.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, y);
      }
    }
    var S = !1, O = !1, f = !1, s = !1, m = !1, w;
    w = Symbol.for("react.module.reference");
    function E(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === $ || e === N || m || e === D || e === q || e === v || s || e === o || S || O || f || typeof e == "object" && e !== null && (e.$$typeof === l || e.$$typeof === d || e.$$typeof === U || e.$$typeof === F || e.$$typeof === C || e.$$typeof === w || e.getModuleId !== void 0));
    }
    function P(e, r, t) {
      var c = e.displayName;
      if (c)
        return c;
      var b = r.displayName || r.name || "";
      return b !== "" ? t + "(" + b + ")" : t;
    }
    function Y(e) {
      return e.displayName || "Context";
    }
    function _(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case $:
          return "Fragment";
        case V:
          return "Portal";
        case N:
          return "Profiler";
        case D:
          return "StrictMode";
        case q:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case F:
            var r = e;
            return Y(r) + ".Consumer";
          case U:
            var t = e;
            return Y(t._context) + ".Provider";
          case C:
            return P(e, e.render, "ForwardRef");
          case d:
            var c = e.displayName || null;
            return c !== null ? c : _(e.type) || "Memo";
          case l: {
            var b = e, y = b._payload, h = b._init;
            try {
              return _(h(y));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var j = Object.assign, M = 0, L, z, ce, ve, de, pe, he;
    function ge() {
    }
    ge.__reactDisabledLog = !0;
    function Ie() {
      {
        if (M === 0) {
          L = console.log, z = console.info, ce = console.warn, ve = console.error, de = console.group, pe = console.groupCollapsed, he = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ge,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        M++;
      }
    }
    function $e() {
      {
        if (M--, M === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: j({}, e, {
              value: L
            }),
            info: j({}, e, {
              value: z
            }),
            warn: j({}, e, {
              value: ce
            }),
            error: j({}, e, {
              value: ve
            }),
            group: j({}, e, {
              value: de
            }),
            groupCollapsed: j({}, e, {
              value: pe
            }),
            groupEnd: j({}, e, {
              value: he
            })
          });
        }
        M < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ne = n.ReactCurrentDispatcher, ae;
    function Z(e, r, t) {
      {
        if (ae === void 0)
          try {
            throw Error();
          } catch (b) {
            var c = b.stack.trim().match(/\n( *(at )?)/);
            ae = c && c[1] || "";
          }
        return `
` + ae + e;
      }
    }
    var ie = !1, Q;
    {
      var Me = typeof WeakMap == "function" ? WeakMap : Map;
      Q = new Me();
    }
    function be(e, r) {
      if (!e || ie)
        return "";
      {
        var t = Q.get(e);
        if (t !== void 0)
          return t;
      }
      var c;
      ie = !0;
      var b = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var y;
      y = ne.current, ne.current = null, Ie();
      try {
        if (r) {
          var h = function() {
            throw Error();
          };
          if (Object.defineProperty(h.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(h, []);
            } catch (B) {
              c = B;
            }
            Reflect.construct(e, [], h);
          } else {
            try {
              h.call();
            } catch (B) {
              c = B;
            }
            e.call(h.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (B) {
            c = B;
          }
          e();
        }
      } catch (B) {
        if (B && c && typeof B.stack == "string") {
          for (var p = B.stack.split(`
`), x = c.stack.split(`
`), R = p.length - 1, T = x.length - 1; R >= 1 && T >= 0 && p[R] !== x[T]; )
            T--;
          for (; R >= 1 && T >= 0; R--, T--)
            if (p[R] !== x[T]) {
              if (R !== 1 || T !== 1)
                do
                  if (R--, T--, T < 0 || p[R] !== x[T]) {
                    var W = `
` + p[R].replace(" at new ", " at ");
                    return e.displayName && W.includes("<anonymous>") && (W = W.replace("<anonymous>", e.displayName)), typeof e == "function" && Q.set(e, W), W;
                  }
                while (R >= 1 && T >= 0);
              break;
            }
        }
      } finally {
        ie = !1, ne.current = y, $e(), Error.prepareStackTrace = b;
      }
      var G = e ? e.displayName || e.name : "", xe = G ? Z(G) : "";
      return typeof e == "function" && Q.set(e, xe), xe;
    }
    function We(e, r, t) {
      return be(e, !1);
    }
    function Ye(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function ee(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return be(e, Ye(e));
      if (typeof e == "string")
        return Z(e);
      switch (e) {
        case q:
          return Z("Suspense");
        case v:
          return Z("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case C:
            return We(e.render);
          case d:
            return ee(e.type, r, t);
          case l: {
            var c = e, b = c._payload, y = c._init;
            try {
              return ee(y(b), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var re = Object.prototype.hasOwnProperty, me = {}, Ee = n.ReactDebugCurrentFrame;
    function te(e) {
      if (e) {
        var r = e._owner, t = ee(e.type, e._source, r ? r.type : null);
        Ee.setExtraStackFrame(t);
      } else
        Ee.setExtraStackFrame(null);
    }
    function Le(e, r, t, c, b) {
      {
        var y = Function.call.bind(re);
        for (var h in e)
          if (y(e, h)) {
            var p = void 0;
            try {
              if (typeof e[h] != "function") {
                var x = Error((c || "React class") + ": " + t + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw x.name = "Invariant Violation", x;
              }
              p = e[h](r, h, c, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (R) {
              p = R;
            }
            p && !(p instanceof Error) && (te(b), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", c || "React class", t, h, typeof p), te(null)), p instanceof Error && !(p.message in me) && (me[p.message] = !0, te(b), g("Failed %s type: %s", t, p.message), te(null));
          }
      }
    }
    var Ne = Array.isArray;
    function oe(e) {
      return Ne(e);
    }
    function Ve(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ue(e) {
      try {
        return ye(e), !1;
      } catch {
        return !0;
      }
    }
    function ye(e) {
      return "" + e;
    }
    function _e(e) {
      if (Ue(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ve(e)), ye(e);
    }
    var H = n.ReactCurrentOwner, Be = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Re, we, ue;
    ue = {};
    function qe(e) {
      if (re.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ze(e) {
      if (re.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Je(e, r) {
      if (typeof e.ref == "string" && H.current && r && H.current.stateNode !== r) {
        var t = _(H.current.type);
        ue[t] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', _(H.current.type), e.ref), ue[t] = !0);
      }
    }
    function Ge(e, r) {
      {
        var t = function() {
          Re || (Re = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function He(e, r) {
      {
        var t = function() {
          we || (we = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Ke = function(e, r, t, c, b, y, h) {
      var p = {
        $$typeof: A,
        type: e,
        key: r,
        ref: t,
        props: h,
        _owner: y
      };
      return p._store = {}, Object.defineProperty(p._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(p, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.defineProperty(p, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: b
      }), Object.freeze && (Object.freeze(p.props), Object.freeze(p)), p;
    };
    function Xe(e, r, t, c, b) {
      {
        var y, h = {}, p = null, x = null;
        t !== void 0 && (_e(t), p = "" + t), ze(r) && (_e(r.key), p = "" + r.key), qe(r) && (x = r.ref, Je(r, b));
        for (y in r)
          re.call(r, y) && !Be.hasOwnProperty(y) && (h[y] = r[y]);
        if (e && e.defaultProps) {
          var R = e.defaultProps;
          for (y in R)
            h[y] === void 0 && (h[y] = R[y]);
        }
        if (p || x) {
          var T = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          p && Ge(h, T), x && He(h, T);
        }
        return Ke(e, p, x, b, c, H.current, h);
      }
    }
    var fe = n.ReactCurrentOwner, Te = n.ReactDebugCurrentFrame;
    function J(e) {
      if (e) {
        var r = e._owner, t = ee(e.type, e._source, r ? r.type : null);
        Te.setExtraStackFrame(t);
      } else
        Te.setExtraStackFrame(null);
    }
    var se;
    se = !1;
    function le(e) {
      return typeof e == "object" && e !== null && e.$$typeof === A;
    }
    function Ce() {
      {
        if (fe.current) {
          var e = _(fe.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Ze(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Oe = {};
    function Qe(e) {
      {
        var r = Ce();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Se(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = Qe(r);
        if (Oe[t])
          return;
        Oe[t] = !0;
        var c = "";
        e && e._owner && e._owner !== fe.current && (c = " It was passed a child from " + _(e._owner.type) + "."), J(e), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, c), J(null);
      }
    }
    function Pe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (oe(e))
          for (var t = 0; t < e.length; t++) {
            var c = e[t];
            le(c) && Se(c, r);
          }
        else if (le(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var b = i(e);
          if (typeof b == "function" && b !== e.entries)
            for (var y = b.call(e), h; !(h = y.next()).done; )
              le(h.value) && Se(h.value, r);
        }
      }
    }
    function er(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === C || r.$$typeof === d))
          t = r.propTypes;
        else
          return;
        if (t) {
          var c = _(r);
          Le(t, e.props, "prop", c, e);
        } else if (r.PropTypes !== void 0 && !se) {
          se = !0;
          var b = _(r);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", b || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function rr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var c = r[t];
          if (c !== "children" && c !== "key") {
            J(e), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", c), J(null);
            break;
          }
        }
        e.ref !== null && (J(e), g("Invalid attribute `ref` supplied to `React.Fragment`."), J(null));
      }
    }
    function je(e, r, t, c, b, y) {
      {
        var h = E(e);
        if (!h) {
          var p = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (p += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var x = Ze(b);
          x ? p += x : p += Ce();
          var R;
          e === null ? R = "null" : oe(e) ? R = "array" : e !== void 0 && e.$$typeof === A ? (R = "<" + (_(e.type) || "Unknown") + " />", p = " Did you accidentally export a JSX literal instead of a component?") : R = typeof e, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", R, p);
        }
        var T = Xe(e, r, t, b, y);
        if (T == null)
          return T;
        if (h) {
          var W = r.children;
          if (W !== void 0)
            if (c)
              if (oe(W)) {
                for (var G = 0; G < W.length; G++)
                  Pe(W[G], e);
                Object.freeze && Object.freeze(W);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Pe(W, e);
        }
        return e === $ ? rr(T) : er(T), T;
      }
    }
    function tr(e, r, t) {
      return je(e, r, t, !0);
    }
    function nr(e, r, t) {
      return je(e, r, t, !1);
    }
    var ar = nr, ir = tr;
    X.Fragment = $, X.jsx = ar, X.jsxs = ir;
  }()), X;
}
(function(I) {
  process.env.NODE_ENV === "production" ? I.exports = ur() : I.exports = fr();
})(Fe);
const sr = Fe.exports.jsx;
function cr({
  msg: I = "",
  dim: A = 256,
  rct: V = 0,
  pad: $ = 2,
  pal: D = ["#000000", "#f2f4f8"],
  vrb: N = 0,
  imgAttrs: U
}) {
  const F = or({
    msg: I,
    dim: A,
    rct: V,
    pad: $,
    pal: D,
    vrb: N
  });
  return /* @__PURE__ */ sr("img", {
    ...U,
    src: `data:image/svg+xml;base64,${window.btoa(F == null ? void 0 : F.outerHTML)}`
  });
}
export {
  cr as default
};
