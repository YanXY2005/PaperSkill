"use strict";
(() => {
  (function() {
    const y = document.createElement("link").relList;
    if (y && y.supports && y.supports("modulepreload")) return;
    for (const x of document.querySelectorAll('link[rel="modulepreload"]')) p(x);
    new MutationObserver((x) => {
      for (const w of x) if (w.type === "childList") for (const D of w.addedNodes) D.tagName === "LINK" && D.rel === "modulepreload" && p(D);
    }).observe(document, { childList: true, subtree: true });
    function u(x) {
      const w = {};
      return x.integrity && (w.integrity = x.integrity), x.referrerPolicy && (w.referrerPolicy = x.referrerPolicy), x.crossOrigin === "use-credentials" ? w.credentials = "include" : x.crossOrigin === "anonymous" ? w.credentials = "omit" : w.credentials = "same-origin", w;
    }
    function p(x) {
      if (x.ep) return;
      x.ep = true;
      const w = u(x);
      fetch(x.href, w);
    }
  })();
  function nc(a) {
    return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
  }
  var $s = { exports: {} };
  var Pr = {};
  var Vs = { exports: {} };
  var q = {};
  /**
  * @license React
  * react.production.min.js
  *
  * Copyright (c) Facebook, Inc. and its affiliates.
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE file in the root directory of this source tree.
  */
  var Wu;
  function nf() {
    if (Wu) return q;
    Wu = 1;
    var a = Symbol.for("react.element"), y = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), w = Symbol.for("react.provider"), D = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), L = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), _ = Symbol.iterator;
    function V(h) {
      return h === null || typeof h != "object" ? null : (h = _ && h[_] || h["@@iterator"], typeof h == "function" ? h : null);
    }
    var ae = { isMounted: function() {
      return false;
    }, enqueueForceUpdate: function() {
    }, enqueueReplaceState: function() {
    }, enqueueSetState: function() {
    } }, b = Object.assign, z = {};
    function Q(h, k, Z) {
      this.props = h, this.context = k, this.refs = z, this.updater = Z || ae;
    }
    Q.prototype.isReactComponent = {}, Q.prototype.setState = function(h, k) {
      if (typeof h != "object" && typeof h != "function" && h != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, h, k, "setState");
    }, Q.prototype.forceUpdate = function(h) {
      this.updater.enqueueForceUpdate(this, h, "forceUpdate");
    };
    function Y() {
    }
    Y.prototype = Q.prototype;
    function se(h, k, Z) {
      this.props = h, this.context = k, this.refs = z, this.updater = Z || ae;
    }
    var oe = se.prototype = new Y();
    oe.constructor = se, b(oe, Q.prototype), oe.isPureReactComponent = true;
    var B = Array.isArray, te = Object.prototype.hasOwnProperty, X = { current: null }, xe = { key: true, ref: true, __self: true, __source: true };
    function Ee(h, k, Z) {
      var J, ne = {}, re = null, fe = null;
      if (k != null) for (J in k.ref !== void 0 && (fe = k.ref), k.key !== void 0 && (re = "" + k.key), k) te.call(k, J) && !xe.hasOwnProperty(J) && (ne[J] = k[J]);
      var ue = arguments.length - 2;
      if (ue === 1) ne.children = Z;
      else if (1 < ue) {
        for (var ge = Array(ue), be = 0; be < ue; be++) ge[be] = arguments[be + 2];
        ne.children = ge;
      }
      if (h && h.defaultProps) for (J in ue = h.defaultProps, ue) ne[J] === void 0 && (ne[J] = ue[J]);
      return { $$typeof: a, type: h, key: re, ref: fe, props: ne, _owner: X.current };
    }
    function Ae(h, k) {
      return { $$typeof: a, type: h.type, key: k, ref: h.ref, props: h.props, _owner: h._owner };
    }
    function lt(h) {
      return typeof h == "object" && h !== null && h.$$typeof === a;
    }
    function Re(h) {
      var k = { "=": "=0", ":": "=2" };
      return "$" + h.replace(/[=:]/g, function(Z) {
        return k[Z];
      });
    }
    var kt = /\/+/g;
    function Je(h, k) {
      return typeof h == "object" && h !== null && h.key != null ? Re("" + h.key) : k.toString(36);
    }
    function dt(h, k, Z, J, ne) {
      var re = typeof h;
      (re === "undefined" || re === "boolean") && (h = null);
      var fe = false;
      if (h === null) fe = true;
      else switch (re) {
        case "string":
        case "number":
          fe = true;
          break;
        case "object":
          switch (h.$$typeof) {
            case a:
            case y:
              fe = true;
          }
      }
      if (fe) return fe = h, ne = ne(fe), h = J === "" ? "." + Je(fe, 0) : J, B(ne) ? (Z = "", h != null && (Z = h.replace(kt, "$&/") + "/"), dt(ne, k, Z, "", function(be) {
        return be;
      })) : ne != null && (lt(ne) && (ne = Ae(ne, Z + (!ne.key || fe && fe.key === ne.key ? "" : ("" + ne.key).replace(kt, "$&/") + "/") + h)), k.push(ne)), 1;
      if (fe = 0, J = J === "" ? "." : J + ":", B(h)) for (var ue = 0; ue < h.length; ue++) {
        re = h[ue];
        var ge = J + Je(re, ue);
        fe += dt(re, k, Z, ge, ne);
      }
      else if (ge = V(h), typeof ge == "function") for (h = ge.call(h), ue = 0; !(re = h.next()).done; ) re = re.value, ge = J + Je(re, ue++), fe += dt(re, k, Z, ge, ne);
      else if (re === "object") throw k = String(h), Error("Objects are not valid as a React child (found: " + (k === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : k) + "). If you meant to render a collection of children, use an array instead.");
      return fe;
    }
    function St(h, k, Z) {
      if (h == null) return h;
      var J = [], ne = 0;
      return dt(h, J, "", "", function(re) {
        return k.call(Z, re, ne++);
      }), J;
    }
    function He(h) {
      if (h._status === -1) {
        var k = h._result;
        k = k(), k.then(function(Z) {
          (h._status === 0 || h._status === -1) && (h._status = 1, h._result = Z);
        }, function(Z) {
          (h._status === 0 || h._status === -1) && (h._status = 2, h._result = Z);
        }), h._status === -1 && (h._status = 0, h._result = k);
      }
      if (h._status === 1) return h._result.default;
      throw h._result;
    }
    var we = { current: null }, P = { transition: null }, G = { ReactCurrentDispatcher: we, ReactCurrentBatchConfig: P, ReactCurrentOwner: X };
    function F() {
      throw Error("act(...) is not supported in production builds of React.");
    }
    return q.Children = { map: St, forEach: function(h, k, Z) {
      St(h, function() {
        k.apply(this, arguments);
      }, Z);
    }, count: function(h) {
      var k = 0;
      return St(h, function() {
        k++;
      }), k;
    }, toArray: function(h) {
      return St(h, function(k) {
        return k;
      }) || [];
    }, only: function(h) {
      if (!lt(h)) throw Error("React.Children.only expected to receive a single React element child.");
      return h;
    } }, q.Component = Q, q.Fragment = u, q.Profiler = x, q.PureComponent = se, q.StrictMode = p, q.Suspense = R, q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = G, q.act = F, q.cloneElement = function(h, k, Z) {
      if (h == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
      var J = b({}, h.props), ne = h.key, re = h.ref, fe = h._owner;
      if (k != null) {
        if (k.ref !== void 0 && (re = k.ref, fe = X.current), k.key !== void 0 && (ne = "" + k.key), h.type && h.type.defaultProps) var ue = h.type.defaultProps;
        for (ge in k) te.call(k, ge) && !xe.hasOwnProperty(ge) && (J[ge] = k[ge] === void 0 && ue !== void 0 ? ue[ge] : k[ge]);
      }
      var ge = arguments.length - 2;
      if (ge === 1) J.children = Z;
      else if (1 < ge) {
        ue = Array(ge);
        for (var be = 0; be < ge; be++) ue[be] = arguments[be + 2];
        J.children = ue;
      }
      return { $$typeof: a, type: h.type, key: ne, ref: re, props: J, _owner: fe };
    }, q.createContext = function(h) {
      return h = { $$typeof: D, _currentValue: h, _currentValue2: h, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, h.Provider = { $$typeof: w, _context: h }, h.Consumer = h;
    }, q.createElement = Ee, q.createFactory = function(h) {
      var k = Ee.bind(null, h);
      return k.type = h, k;
    }, q.createRef = function() {
      return { current: null };
    }, q.forwardRef = function(h) {
      return { $$typeof: E, render: h };
    }, q.isValidElement = lt, q.lazy = function(h) {
      return { $$typeof: I, _payload: { _status: -1, _result: h }, _init: He };
    }, q.memo = function(h, k) {
      return { $$typeof: L, type: h, compare: k === void 0 ? null : k };
    }, q.startTransition = function(h) {
      var k = P.transition;
      P.transition = {};
      try {
        h();
      } finally {
        P.transition = k;
      }
    }, q.unstable_act = F, q.useCallback = function(h, k) {
      return we.current.useCallback(h, k);
    }, q.useContext = function(h) {
      return we.current.useContext(h);
    }, q.useDebugValue = function() {
    }, q.useDeferredValue = function(h) {
      return we.current.useDeferredValue(h);
    }, q.useEffect = function(h, k) {
      return we.current.useEffect(h, k);
    }, q.useId = function() {
      return we.current.useId();
    }, q.useImperativeHandle = function(h, k, Z) {
      return we.current.useImperativeHandle(h, k, Z);
    }, q.useInsertionEffect = function(h, k) {
      return we.current.useInsertionEffect(h, k);
    }, q.useLayoutEffect = function(h, k) {
      return we.current.useLayoutEffect(h, k);
    }, q.useMemo = function(h, k) {
      return we.current.useMemo(h, k);
    }, q.useReducer = function(h, k, Z) {
      return we.current.useReducer(h, k, Z);
    }, q.useRef = function(h) {
      return we.current.useRef(h);
    }, q.useState = function(h) {
      return we.current.useState(h);
    }, q.useSyncExternalStore = function(h, k, Z) {
      return we.current.useSyncExternalStore(h, k, Z);
    }, q.useTransition = function() {
      return we.current.useTransition();
    }, q.version = "18.3.1", q;
  }
  var Hu;
  function Ys() {
    return Hu || (Hu = 1, Vs.exports = nf()), Vs.exports;
  }
  /**
  * @license React
  * react-jsx-runtime.production.min.js
  *
  * Copyright (c) Facebook, Inc. and its affiliates.
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE file in the root directory of this source tree.
  */
  var Gu;
  function rf() {
    if (Gu) return Pr;
    Gu = 1;
    var a = Ys(), y = Symbol.for("react.element"), u = Symbol.for("react.fragment"), p = Object.prototype.hasOwnProperty, x = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, w = { key: true, ref: true, __self: true, __source: true };
    function D(E, R, L) {
      var I, _ = {}, V = null, ae = null;
      L !== void 0 && (V = "" + L), R.key !== void 0 && (V = "" + R.key), R.ref !== void 0 && (ae = R.ref);
      for (I in R) p.call(R, I) && !w.hasOwnProperty(I) && (_[I] = R[I]);
      if (E && E.defaultProps) for (I in R = E.defaultProps, R) _[I] === void 0 && (_[I] = R[I]);
      return { $$typeof: y, type: E, key: V, ref: ae, props: _, _owner: x.current };
    }
    return Pr.Fragment = u, Pr.jsx = D, Pr.jsxs = D, Pr;
  }
  var Ku;
  function lf() {
    return Ku || (Ku = 1, $s.exports = rf()), $s.exports;
  }
  var l = lf();
  var U = Ys();
  const Lr = nc(U);
  var Ul = {};
  var Bs = { exports: {} };
  var qe = {};
  var As = { exports: {} };
  var Us = {};
  /**
  * @license React
  * scheduler.production.min.js
  *
  * Copyright (c) Facebook, Inc. and its affiliates.
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE file in the root directory of this source tree.
  */
  var Yu;
  function sf() {
    return Yu || (Yu = 1, (function(a) {
      function y(P, G) {
        var F = P.length;
        P.push(G);
        e: for (; 0 < F; ) {
          var h = F - 1 >>> 1, k = P[h];
          if (0 < x(k, G)) P[h] = G, P[F] = k, F = h;
          else break e;
        }
      }
      function u(P) {
        return P.length === 0 ? null : P[0];
      }
      function p(P) {
        if (P.length === 0) return null;
        var G = P[0], F = P.pop();
        if (F !== G) {
          P[0] = F;
          e: for (var h = 0, k = P.length, Z = k >>> 1; h < Z; ) {
            var J = 2 * (h + 1) - 1, ne = P[J], re = J + 1, fe = P[re];
            if (0 > x(ne, F)) re < k && 0 > x(fe, ne) ? (P[h] = fe, P[re] = F, h = re) : (P[h] = ne, P[J] = F, h = J);
            else if (re < k && 0 > x(fe, F)) P[h] = fe, P[re] = F, h = re;
            else break e;
          }
        }
        return G;
      }
      function x(P, G) {
        var F = P.sortIndex - G.sortIndex;
        return F !== 0 ? F : P.id - G.id;
      }
      if (typeof performance == "object" && typeof performance.now == "function") {
        var w = performance;
        a.unstable_now = function() {
          return w.now();
        };
      } else {
        var D = Date, E = D.now();
        a.unstable_now = function() {
          return D.now() - E;
        };
      }
      var R = [], L = [], I = 1, _ = null, V = 3, ae = false, b = false, z = false, Q = typeof setTimeout == "function" ? setTimeout : null, Y = typeof clearTimeout == "function" ? clearTimeout : null, se = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function oe(P) {
        for (var G = u(L); G !== null; ) {
          if (G.callback === null) p(L);
          else if (G.startTime <= P) p(L), G.sortIndex = G.expirationTime, y(R, G);
          else break;
          G = u(L);
        }
      }
      function B(P) {
        if (z = false, oe(P), !b) if (u(R) !== null) b = true, He(te);
        else {
          var G = u(L);
          G !== null && we(B, G.startTime - P);
        }
      }
      function te(P, G) {
        b = false, z && (z = false, Y(Ee), Ee = -1), ae = true;
        var F = V;
        try {
          for (oe(G), _ = u(R); _ !== null && (!(_.expirationTime > G) || P && !Re()); ) {
            var h = _.callback;
            if (typeof h == "function") {
              _.callback = null, V = _.priorityLevel;
              var k = h(_.expirationTime <= G);
              G = a.unstable_now(), typeof k == "function" ? _.callback = k : _ === u(R) && p(R), oe(G);
            } else p(R);
            _ = u(R);
          }
          if (_ !== null) var Z = true;
          else {
            var J = u(L);
            J !== null && we(B, J.startTime - G), Z = false;
          }
          return Z;
        } finally {
          _ = null, V = F, ae = false;
        }
      }
      var X = false, xe = null, Ee = -1, Ae = 5, lt = -1;
      function Re() {
        return !(a.unstable_now() - lt < Ae);
      }
      function kt() {
        if (xe !== null) {
          var P = a.unstable_now();
          lt = P;
          var G = true;
          try {
            G = xe(true, P);
          } finally {
            G ? Je() : (X = false, xe = null);
          }
        } else X = false;
      }
      var Je;
      if (typeof se == "function") Je = function() {
        se(kt);
      };
      else if (typeof MessageChannel < "u") {
        var dt = new MessageChannel(), St = dt.port2;
        dt.port1.onmessage = kt, Je = function() {
          St.postMessage(null);
        };
      } else Je = function() {
        Q(kt, 0);
      };
      function He(P) {
        xe = P, X || (X = true, Je());
      }
      function we(P, G) {
        Ee = Q(function() {
          P(a.unstable_now());
        }, G);
      }
      a.unstable_IdlePriority = 5, a.unstable_ImmediatePriority = 1, a.unstable_LowPriority = 4, a.unstable_NormalPriority = 3, a.unstable_Profiling = null, a.unstable_UserBlockingPriority = 2, a.unstable_cancelCallback = function(P) {
        P.callback = null;
      }, a.unstable_continueExecution = function() {
        b || ae || (b = true, He(te));
      }, a.unstable_forceFrameRate = function(P) {
        0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Ae = 0 < P ? Math.floor(1e3 / P) : 5;
      }, a.unstable_getCurrentPriorityLevel = function() {
        return V;
      }, a.unstable_getFirstCallbackNode = function() {
        return u(R);
      }, a.unstable_next = function(P) {
        switch (V) {
          case 1:
          case 2:
          case 3:
            var G = 3;
            break;
          default:
            G = V;
        }
        var F = V;
        V = G;
        try {
          return P();
        } finally {
          V = F;
        }
      }, a.unstable_pauseExecution = function() {
      }, a.unstable_requestPaint = function() {
      }, a.unstable_runWithPriority = function(P, G) {
        switch (P) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            P = 3;
        }
        var F = V;
        V = P;
        try {
          return G();
        } finally {
          V = F;
        }
      }, a.unstable_scheduleCallback = function(P, G, F) {
        var h = a.unstable_now();
        switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? h + F : h) : F = h, P) {
          case 1:
            var k = -1;
            break;
          case 2:
            k = 250;
            break;
          case 5:
            k = 1073741823;
            break;
          case 4:
            k = 1e4;
            break;
          default:
            k = 5e3;
        }
        return k = F + k, P = { id: I++, callback: G, priorityLevel: P, startTime: F, expirationTime: k, sortIndex: -1 }, F > h ? (P.sortIndex = F, y(L, P), u(R) === null && P === u(L) && (z ? (Y(Ee), Ee = -1) : z = true, we(B, F - h))) : (P.sortIndex = k, y(R, P), b || ae || (b = true, He(te))), P;
      }, a.unstable_shouldYield = Re, a.unstable_wrapCallback = function(P) {
        var G = V;
        return function() {
          var F = V;
          V = G;
          try {
            return P.apply(this, arguments);
          } finally {
            V = F;
          }
        };
      };
    })(Us)), Us;
  }
  var Xu;
  function of() {
    return Xu || (Xu = 1, As.exports = sf()), As.exports;
  }
  /**
  * @license React
  * react-dom.production.min.js
  *
  * Copyright (c) Facebook, Inc. and its affiliates.
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE file in the root directory of this source tree.
  */
  var Zu;
  function af() {
    if (Zu) return qe;
    Zu = 1;
    var a = Ys(), y = of();
    function u(e) {
      for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
      return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var p = /* @__PURE__ */ new Set(), x = {};
    function w(e, t) {
      D(e, t), D(e + "Capture", t);
    }
    function D(e, t) {
      for (x[e] = t, e = 0; e < t.length; e++) p.add(t[e]);
    }
    var E = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), R = Object.prototype.hasOwnProperty, L = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, I = {}, _ = {};
    function V(e) {
      return R.call(_, e) ? true : R.call(I, e) ? false : L.test(e) ? _[e] = true : (I[e] = true, false);
    }
    function ae(e, t, n, r) {
      if (n !== null && n.type === 0) return false;
      switch (typeof t) {
        case "function":
        case "symbol":
          return true;
        case "boolean":
          return r ? false : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
          return false;
      }
    }
    function b(e, t, n, r) {
      if (t === null || typeof t > "u" || ae(e, t, n, r)) return true;
      if (r) return false;
      if (n !== null) switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === false;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
      return false;
    }
    function z(e, t, n, r, i, s, o) {
      this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = o;
    }
    var Q = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
      Q[e] = new z(e, 0, false, e, null, false, false);
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0];
      Q[t] = new z(t, 1, false, e[1], null, false, false);
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Q[e] = new z(e, 2, false, e.toLowerCase(), null, false, false);
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Q[e] = new z(e, 2, false, e, null, false, false);
    }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
      Q[e] = new z(e, 3, false, e.toLowerCase(), null, false, false);
    }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
      Q[e] = new z(e, 3, true, e, null, false, false);
    }), ["capture", "download"].forEach(function(e) {
      Q[e] = new z(e, 4, false, e, null, false, false);
    }), ["cols", "rows", "size", "span"].forEach(function(e) {
      Q[e] = new z(e, 6, false, e, null, false, false);
    }), ["rowSpan", "start"].forEach(function(e) {
      Q[e] = new z(e, 5, false, e.toLowerCase(), null, false, false);
    });
    var Y = /[\-:]([a-z])/g;
    function se(e) {
      return e[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
      var t = e.replace(Y, se);
      Q[t] = new z(t, 1, false, e, null, false, false);
    }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
      var t = e.replace(Y, se);
      Q[t] = new z(t, 1, false, e, "http://www.w3.org/1999/xlink", false, false);
    }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
      var t = e.replace(Y, se);
      Q[t] = new z(t, 1, false, e, "http://www.w3.org/XML/1998/namespace", false, false);
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Q[e] = new z(e, 1, false, e.toLowerCase(), null, false, false);
    }), Q.xlinkHref = new z("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false), ["src", "href", "action", "formAction"].forEach(function(e) {
      Q[e] = new z(e, 1, false, e.toLowerCase(), null, true, true);
    });
    function oe(e, t, n, r) {
      var i = Q.hasOwnProperty(t) ? Q[t] : null;
      (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (b(t, n, i, r) && (n = null), r || i === null ? V(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? false : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === true ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
    }
    var B = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, te = Symbol.for("react.element"), X = Symbol.for("react.portal"), xe = Symbol.for("react.fragment"), Ee = Symbol.for("react.strict_mode"), Ae = Symbol.for("react.profiler"), lt = Symbol.for("react.provider"), Re = Symbol.for("react.context"), kt = Symbol.for("react.forward_ref"), Je = Symbol.for("react.suspense"), dt = Symbol.for("react.suspense_list"), St = Symbol.for("react.memo"), He = Symbol.for("react.lazy"), we = Symbol.for("react.offscreen"), P = Symbol.iterator;
    function G(e) {
      return e === null || typeof e != "object" ? null : (e = P && e[P] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var F = Object.assign, h;
    function k(e) {
      if (h === void 0) try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        h = t && t[1] || "";
      }
      return `
` + h + e;
    }
    var Z = false;
    function J(e, t) {
      if (!e || Z) return "";
      Z = true;
      var n = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        if (t) if (t = function() {
          throw Error();
        }, Object.defineProperty(t.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(t, []);
          } catch (v) {
            var r = v;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (v) {
            r = v;
          }
          e.call(t.prototype);
        }
        else {
          try {
            throw Error();
          } catch (v) {
            r = v;
          }
          e();
        }
      } catch (v) {
        if (v && r && typeof v.stack == "string") {
          for (var i = v.stack.split(`
`), s = r.stack.split(`
`), o = i.length - 1, c = s.length - 1; 1 <= o && 0 <= c && i[o] !== s[c]; ) c--;
          for (; 1 <= o && 0 <= c; o--, c--) if (i[o] !== s[c]) {
            if (o !== 1 || c !== 1) do
              if (o--, c--, 0 > c || i[o] !== s[c]) {
                var d = `
` + i[o].replace(" at new ", " at ");
                return e.displayName && d.includes("<anonymous>") && (d = d.replace("<anonymous>", e.displayName)), d;
              }
            while (1 <= o && 0 <= c);
            break;
          }
        }
      } finally {
        Z = false, Error.prepareStackTrace = n;
      }
      return (e = e ? e.displayName || e.name : "") ? k(e) : "";
    }
    function ne(e) {
      switch (e.tag) {
        case 5:
          return k(e.type);
        case 16:
          return k("Lazy");
        case 13:
          return k("Suspense");
        case 19:
          return k("SuspenseList");
        case 0:
        case 2:
        case 15:
          return e = J(e.type, false), e;
        case 11:
          return e = J(e.type.render, false), e;
        case 1:
          return e = J(e.type, true), e;
        default:
          return "";
      }
    }
    function re(e) {
      if (e == null) return null;
      if (typeof e == "function") return e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case xe:
          return "Fragment";
        case X:
          return "Portal";
        case Ae:
          return "Profiler";
        case Ee:
          return "StrictMode";
        case Je:
          return "Suspense";
        case dt:
          return "SuspenseList";
      }
      if (typeof e == "object") switch (e.$$typeof) {
        case Re:
          return (e.displayName || "Context") + ".Consumer";
        case lt:
          return (e._context.displayName || "Context") + ".Provider";
        case kt:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case St:
          return t = e.displayName || null, t !== null ? t : re(e.type) || "Memo";
        case He:
          t = e._payload, e = e._init;
          try {
            return re(e(t));
          } catch {
          }
      }
      return null;
    }
    function fe(e) {
      var t = e.type;
      switch (e.tag) {
        case 24:
          return "Cache";
        case 9:
          return (t.displayName || "Context") + ".Consumer";
        case 10:
          return (t._context.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 5:
          return t;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return re(t);
        case 8:
          return t === Ee ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
          if (typeof t == "function") return t.displayName || t.name || null;
          if (typeof t == "string") return t;
      }
      return null;
    }
    function ue(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return e;
        default:
          return "";
      }
    }
    function ge(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function be(e) {
      var t = ge(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
      if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get, s = n.set;
        return Object.defineProperty(e, t, { configurable: true, get: function() {
          return i.call(this);
        }, set: function(o) {
          r = "" + o, s.call(this, o);
        } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
          return r;
        }, setValue: function(o) {
          r = "" + o;
        }, stopTracking: function() {
          e._valueTracker = null, delete e[t];
        } };
      }
    }
    function Mr(e) {
      e._valueTracker || (e._valueTracker = be(e));
    }
    function Xs(e) {
      if (!e) return false;
      var t = e._valueTracker;
      if (!t) return true;
      var n = t.getValue(), r = "";
      return e && (r = ge(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), true) : false;
    }
    function Dr(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function Hl(e, t) {
      var n = t.checked;
      return F({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
    }
    function Zs(e, t) {
      var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
      n = ue(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
    }
    function qs(e, t) {
      t = t.checked, t != null && oe(e, "checked", t, false);
    }
    function Gl(e, t) {
      qs(e, t);
      var n = ue(t.value), r = t.type;
      if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
      else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Kl(e, t.type, n) : t.hasOwnProperty("defaultValue") && Kl(e, t.type, ue(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
    }
    function Js(e, t, n) {
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
      }
      n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
    }
    function Kl(e, t, n) {
      (t !== "number" || Dr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
    }
    var Wn = Array.isArray;
    function yn(e, t, n, r) {
      if (e = e.options, t) {
        t = {};
        for (var i = 0; i < n.length; i++) t["$" + n[i]] = true;
        for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = true);
      } else {
        for (n = "" + ue(n), t = null, i = 0; i < e.length; i++) {
          if (e[i].value === n) {
            e[i].selected = true, r && (e[i].defaultSelected = true);
            return;
          }
          t !== null || e[i].disabled || (t = e[i]);
        }
        t !== null && (t.selected = true);
      }
    }
    function Yl(e, t) {
      if (t.dangerouslySetInnerHTML != null) throw Error(u(91));
      return F({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
    }
    function bs(e, t) {
      var n = t.value;
      if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
          if (t != null) throw Error(u(92));
          if (Wn(n)) {
            if (1 < n.length) throw Error(u(93));
            n = n[0];
          }
          t = n;
        }
        t == null && (t = ""), n = t;
      }
      e._wrapperState = { initialValue: ue(n) };
    }
    function eo(e, t) {
      var n = ue(t.value), r = ue(t.defaultValue);
      n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
    }
    function to(e) {
      var t = e.textContent;
      t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
    }
    function no(e) {
      switch (e) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }
    function Xl(e, t) {
      return e == null || e === "http://www.w3.org/1999/xhtml" ? no(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
    }
    var Rr, ro = (function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, n, r, i);
        });
      } : e;
    })(function(e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
      else {
        for (Rr = Rr || document.createElement("div"), Rr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Rr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
    function Hn(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
          n.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var Gn = { animationIterationCount: true, aspectRatio: true, borderImageOutset: true, borderImageSlice: true, borderImageWidth: true, boxFlex: true, boxFlexGroup: true, boxOrdinalGroup: true, columnCount: true, columns: true, flex: true, flexGrow: true, flexPositive: true, flexShrink: true, flexNegative: true, flexOrder: true, gridArea: true, gridRow: true, gridRowEnd: true, gridRowSpan: true, gridRowStart: true, gridColumn: true, gridColumnEnd: true, gridColumnSpan: true, gridColumnStart: true, fontWeight: true, lineClamp: true, lineHeight: true, opacity: true, order: true, orphans: true, tabSize: true, widows: true, zIndex: true, zoom: true, fillOpacity: true, floodOpacity: true, stopOpacity: true, strokeDasharray: true, strokeDashoffset: true, strokeMiterlimit: true, strokeOpacity: true, strokeWidth: true }, sc = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Gn).forEach(function(e) {
      sc.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), Gn[t] = Gn[e];
      });
    });
    function lo(e, t, n) {
      return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Gn.hasOwnProperty(e) && Gn[e] ? ("" + t).trim() : t + "px";
    }
    function io(e, t) {
      e = e.style;
      for (var n in t) if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0, i = lo(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
      }
    }
    var oc = F({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
    function Zl(e, t) {
      if (t) {
        if (oc[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(u(137, e));
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null) throw Error(u(60));
          if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(u(61));
        }
        if (t.style != null && typeof t.style != "object") throw Error(u(62));
      }
    }
    function ql(e, t) {
      if (e.indexOf("-") === -1) return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return false;
        default:
          return true;
      }
    }
    var Jl = null;
    function bl(e) {
      return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    var ei = null, jn = null, wn = null;
    function so(e) {
      if (e = hr(e)) {
        if (typeof ei != "function") throw Error(u(280));
        var t = e.stateNode;
        t && (t = rl(t), ei(e.stateNode, e.type, t));
      }
    }
    function oo(e) {
      jn ? wn ? wn.push(e) : wn = [e] : jn = e;
    }
    function ao() {
      if (jn) {
        var e = jn, t = wn;
        if (wn = jn = null, so(e), t) for (e = 0; e < t.length; e++) so(t[e]);
      }
    }
    function uo(e, t) {
      return e(t);
    }
    function co() {
    }
    var ti = false;
    function fo(e, t, n) {
      if (ti) return e(t, n);
      ti = true;
      try {
        return uo(e, t, n);
      } finally {
        ti = false, (jn !== null || wn !== null) && (co(), ao());
      }
    }
    function Kn(e, t) {
      var n = e.stateNode;
      if (n === null) return null;
      var r = rl(n);
      if (r === null) return null;
      n = r[t];
      e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
          break e;
        default:
          e = false;
      }
      if (e) return null;
      if (n && typeof n != "function") throw Error(u(231, t, typeof n));
      return n;
    }
    var ni = false;
    if (E) try {
      var Yn = {};
      Object.defineProperty(Yn, "passive", { get: function() {
        ni = true;
      } }), window.addEventListener("test", Yn, Yn), window.removeEventListener("test", Yn, Yn);
    } catch {
      ni = false;
    }
    function ac(e, t, n, r, i, s, o, c, d) {
      var v = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(n, v);
      } catch (S) {
        this.onError(S);
      }
    }
    var Xn = false, Tr = null, Fr = false, ri = null, uc = { onError: function(e) {
      Xn = true, Tr = e;
    } };
    function cc(e, t, n, r, i, s, o, c, d) {
      Xn = false, Tr = null, ac.apply(uc, arguments);
    }
    function dc(e, t, n, r, i, s, o, c, d) {
      if (cc.apply(this, arguments), Xn) {
        if (Xn) {
          var v = Tr;
          Xn = false, Tr = null;
        } else throw Error(u(198));
        Fr || (Fr = true, ri = v);
      }
    }
    function ln(e) {
      var t = e, n = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do
          t = e, (t.flags & 4098) !== 0 && (n = t.return), e = t.return;
        while (e);
      }
      return t.tag === 3 ? n : null;
    }
    function po(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function ho(e) {
      if (ln(e) !== e) throw Error(u(188));
    }
    function fc(e) {
      var t = e.alternate;
      if (!t) {
        if (t = ln(e), t === null) throw Error(u(188));
        return t !== e ? null : e;
      }
      for (var n = e, r = t; ; ) {
        var i = n.return;
        if (i === null) break;
        var s = i.alternate;
        if (s === null) {
          if (r = i.return, r !== null) {
            n = r;
            continue;
          }
          break;
        }
        if (i.child === s.child) {
          for (s = i.child; s; ) {
            if (s === n) return ho(i), e;
            if (s === r) return ho(i), t;
            s = s.sibling;
          }
          throw Error(u(188));
        }
        if (n.return !== r.return) n = i, r = s;
        else {
          for (var o = false, c = i.child; c; ) {
            if (c === n) {
              o = true, n = i, r = s;
              break;
            }
            if (c === r) {
              o = true, r = i, n = s;
              break;
            }
            c = c.sibling;
          }
          if (!o) {
            for (c = s.child; c; ) {
              if (c === n) {
                o = true, n = s, r = i;
                break;
              }
              if (c === r) {
                o = true, r = s, n = i;
                break;
              }
              c = c.sibling;
            }
            if (!o) throw Error(u(189));
          }
        }
        if (n.alternate !== r) throw Error(u(190));
      }
      if (n.tag !== 3) throw Error(u(188));
      return n.stateNode.current === n ? e : t;
    }
    function mo(e) {
      return e = fc(e), e !== null ? go(e) : null;
    }
    function go(e) {
      if (e.tag === 5 || e.tag === 6) return e;
      for (e = e.child; e !== null; ) {
        var t = go(e);
        if (t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    var vo = y.unstable_scheduleCallback, xo = y.unstable_cancelCallback, pc = y.unstable_shouldYield, hc = y.unstable_requestPaint, Ne = y.unstable_now, mc = y.unstable_getCurrentPriorityLevel, li = y.unstable_ImmediatePriority, yo = y.unstable_UserBlockingPriority, Or = y.unstable_NormalPriority, gc = y.unstable_LowPriority, jo = y.unstable_IdlePriority, $r = null, Nt = null;
    function vc(e) {
      if (Nt && typeof Nt.onCommitFiberRoot == "function") try {
        Nt.onCommitFiberRoot($r, e, void 0, (e.current.flags & 128) === 128);
      } catch {
      }
    }
    var ft = Math.clz32 ? Math.clz32 : jc, xc = Math.log, yc = Math.LN2;
    function jc(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (xc(e) / yc | 0) | 0;
    }
    var Vr = 64, Br = 4194304;
    function Zn(e) {
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return e & 130023424;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 1073741824;
        default:
          return e;
      }
    }
    function Ar(e, t) {
      var n = e.pendingLanes;
      if (n === 0) return 0;
      var r = 0, i = e.suspendedLanes, s = e.pingedLanes, o = n & 268435455;
      if (o !== 0) {
        var c = o & ~i;
        c !== 0 ? r = Zn(c) : (s &= o, s !== 0 && (r = Zn(s)));
      } else o = n & ~i, o !== 0 ? r = Zn(o) : s !== 0 && (r = Zn(s));
      if (r === 0) return 0;
      if (t !== 0 && t !== r && (t & i) === 0 && (i = r & -r, s = t & -t, i >= s || i === 16 && (s & 4194240) !== 0)) return t;
      if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - ft(t), i = 1 << n, r |= e[n], t &= ~i;
      return r;
    }
    function wc(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
          return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function kc(e, t) {
      for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
        var o = 31 - ft(s), c = 1 << o, d = i[o];
        d === -1 ? ((c & n) === 0 || (c & r) !== 0) && (i[o] = wc(c, t)) : d <= t && (e.expiredLanes |= c), s &= ~c;
      }
    }
    function ii(e) {
      return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
    }
    function wo() {
      var e = Vr;
      return Vr <<= 1, (Vr & 4194240) === 0 && (Vr = 64), e;
    }
    function si(e) {
      for (var t = [], n = 0; 31 > n; n++) t.push(e);
      return t;
    }
    function qn(e, t, n) {
      e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - ft(t), e[t] = n;
    }
    function Sc(e, t) {
      var n = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
      var r = e.eventTimes;
      for (e = e.expirationTimes; 0 < n; ) {
        var i = 31 - ft(n), s = 1 << i;
        t[i] = 0, r[i] = -1, e[i] = -1, n &= ~s;
      }
    }
    function oi(e, t) {
      var n = e.entangledLanes |= t;
      for (e = e.entanglements; n; ) {
        var r = 31 - ft(n), i = 1 << r;
        i & t | e[r] & t && (e[r] |= t), n &= ~i;
      }
    }
    var ce = 0;
    function ko(e) {
      return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
    }
    var So, ai, No, Co, Eo, ui = false, Ur = [], $t = null, Vt = null, Bt = null, Jn = /* @__PURE__ */ new Map(), bn = /* @__PURE__ */ new Map(), At = [], Nc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function _o(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          $t = null;
          break;
        case "dragenter":
        case "dragleave":
          Vt = null;
          break;
        case "mouseover":
        case "mouseout":
          Bt = null;
          break;
        case "pointerover":
        case "pointerout":
          Jn.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          bn.delete(t.pointerId);
      }
    }
    function er(e, t, n, r, i, s) {
      return e === null || e.nativeEvent !== s ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: s, targetContainers: [i] }, t !== null && (t = hr(t), t !== null && ai(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
    }
    function Cc(e, t, n, r, i) {
      switch (t) {
        case "focusin":
          return $t = er($t, e, t, n, r, i), true;
        case "dragenter":
          return Vt = er(Vt, e, t, n, r, i), true;
        case "mouseover":
          return Bt = er(Bt, e, t, n, r, i), true;
        case "pointerover":
          var s = i.pointerId;
          return Jn.set(s, er(Jn.get(s) || null, e, t, n, r, i)), true;
        case "gotpointercapture":
          return s = i.pointerId, bn.set(s, er(bn.get(s) || null, e, t, n, r, i)), true;
      }
      return false;
    }
    function Io(e) {
      var t = sn(e.target);
      if (t !== null) {
        var n = ln(t);
        if (n !== null) {
          if (t = n.tag, t === 13) {
            if (t = po(n), t !== null) {
              e.blockedOn = t, Eo(e.priority, function() {
                No(n);
              });
              return;
            }
          } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function Qr(e) {
      if (e.blockedOn !== null) return false;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var n = di(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
          n = e.nativeEvent;
          var r = new n.constructor(n.type, n);
          Jl = r, n.target.dispatchEvent(r), Jl = null;
        } else return t = hr(n), t !== null && ai(t), e.blockedOn = n, false;
        t.shift();
      }
      return true;
    }
    function Po(e, t, n) {
      Qr(e) && n.delete(t);
    }
    function Ec() {
      ui = false, $t !== null && Qr($t) && ($t = null), Vt !== null && Qr(Vt) && (Vt = null), Bt !== null && Qr(Bt) && (Bt = null), Jn.forEach(Po), bn.forEach(Po);
    }
    function tr(e, t) {
      e.blockedOn === t && (e.blockedOn = null, ui || (ui = true, y.unstable_scheduleCallback(y.unstable_NormalPriority, Ec)));
    }
    function nr(e) {
      function t(i) {
        return tr(i, e);
      }
      if (0 < Ur.length) {
        tr(Ur[0], e);
        for (var n = 1; n < Ur.length; n++) {
          var r = Ur[n];
          r.blockedOn === e && (r.blockedOn = null);
        }
      }
      for ($t !== null && tr($t, e), Vt !== null && tr(Vt, e), Bt !== null && tr(Bt, e), Jn.forEach(t), bn.forEach(t), n = 0; n < At.length; n++) r = At[n], r.blockedOn === e && (r.blockedOn = null);
      for (; 0 < At.length && (n = At[0], n.blockedOn === null); ) Io(n), n.blockedOn === null && At.shift();
    }
    var kn = B.ReactCurrentBatchConfig, Wr = true;
    function _c(e, t, n, r) {
      var i = ce, s = kn.transition;
      kn.transition = null;
      try {
        ce = 1, ci(e, t, n, r);
      } finally {
        ce = i, kn.transition = s;
      }
    }
    function Ic(e, t, n, r) {
      var i = ce, s = kn.transition;
      kn.transition = null;
      try {
        ce = 4, ci(e, t, n, r);
      } finally {
        ce = i, kn.transition = s;
      }
    }
    function ci(e, t, n, r) {
      if (Wr) {
        var i = di(e, t, n, r);
        if (i === null) Ii(e, t, r, Hr, n), _o(e, r);
        else if (Cc(i, e, t, n, r)) r.stopPropagation();
        else if (_o(e, r), t & 4 && -1 < Nc.indexOf(e)) {
          for (; i !== null; ) {
            var s = hr(i);
            if (s !== null && So(s), s = di(e, t, n, r), s === null && Ii(e, t, r, Hr, n), s === i) break;
            i = s;
          }
          i !== null && r.stopPropagation();
        } else Ii(e, t, r, null, n);
      }
    }
    var Hr = null;
    function di(e, t, n, r) {
      if (Hr = null, e = bl(r), e = sn(e), e !== null) if (t = ln(e), t === null) e = null;
      else if (n = t.tag, n === 13) {
        if (e = po(t), e !== null) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
      return Hr = e, null;
    }
    function Lo(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 4;
        case "message":
          switch (mc()) {
            case li:
              return 1;
            case yo:
              return 4;
            case Or:
            case gc:
              return 16;
            case jo:
              return 536870912;
            default:
              return 16;
          }
        default:
          return 16;
      }
    }
    var Ut = null, fi = null, Gr = null;
    function zo() {
      if (Gr) return Gr;
      var e, t = fi, n = t.length, r, i = "value" in Ut ? Ut.value : Ut.textContent, s = i.length;
      for (e = 0; e < n && t[e] === i[e]; e++) ;
      var o = n - e;
      for (r = 1; r <= o && t[n - r] === i[s - r]; r++) ;
      return Gr = i.slice(e, 1 < r ? 1 - r : void 0);
    }
    function Kr(e) {
      var t = e.keyCode;
      return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function Yr() {
      return true;
    }
    function Mo() {
      return false;
    }
    function et(e) {
      function t(n, r, i, s, o) {
        this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = s, this.target = o, this.currentTarget = null;
        for (var c in e) e.hasOwnProperty(c) && (n = e[c], this[c] = n ? n(s) : s[c]);
        return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === false) ? Yr : Mo, this.isPropagationStopped = Mo, this;
      }
      return F(t.prototype, { preventDefault: function() {
        this.defaultPrevented = true;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = false), this.isDefaultPrevented = Yr);
      }, stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = true), this.isPropagationStopped = Yr);
      }, persist: function() {
      }, isPersistent: Yr }), t;
    }
    var Sn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
      return e.timeStamp || Date.now();
    }, defaultPrevented: 0, isTrusted: 0 }, pi = et(Sn), rr = F({}, Sn, { view: 0, detail: 0 }), Pc = et(rr), hi, mi, lr, Xr = F({}, rr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: vi, button: 0, buttons: 0, relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    }, movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== lr && (lr && e.type === "mousemove" ? (hi = e.screenX - lr.screenX, mi = e.screenY - lr.screenY) : mi = hi = 0, lr = e), hi);
    }, movementY: function(e) {
      return "movementY" in e ? e.movementY : mi;
    } }), Do = et(Xr), Lc = F({}, Xr, { dataTransfer: 0 }), zc = et(Lc), Mc = F({}, rr, { relatedTarget: 0 }), gi = et(Mc), Dc = F({}, Sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Rc = et(Dc), Tc = F({}, Sn, { clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    } }), Fc = et(Tc), Oc = F({}, Sn, { data: 0 }), Ro = et(Oc), $c = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, Vc = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, Bc = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
    function Ac(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = Bc[e]) ? !!t[e] : false;
    }
    function vi() {
      return Ac;
    }
    var Uc = F({}, rr, { key: function(e) {
      if (e.key) {
        var t = $c[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Kr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Vc[e.keyCode] || "Unidentified" : "";
    }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: vi, charCode: function(e) {
      return e.type === "keypress" ? Kr(e) : 0;
    }, keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }, which: function(e) {
      return e.type === "keypress" ? Kr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    } }), Qc = et(Uc), Wc = F({}, Xr, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), To = et(Wc), Hc = F({}, rr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: vi }), Gc = et(Hc), Kc = F({}, Sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Yc = et(Kc), Xc = F({}, Xr, { deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    }, deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    }, deltaZ: 0, deltaMode: 0 }), Zc = et(Xc), qc = [9, 13, 27, 32], xi = E && "CompositionEvent" in window, ir = null;
    E && "documentMode" in document && (ir = document.documentMode);
    var Jc = E && "TextEvent" in window && !ir, Fo = E && (!xi || ir && 8 < ir && 11 >= ir), Oo = " ", $o = false;
    function Vo(e, t) {
      switch (e) {
        case "keyup":
          return qc.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
          return true;
        default:
          return false;
      }
    }
    function Bo(e) {
      return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    var Nn = false;
    function bc(e, t) {
      switch (e) {
        case "compositionend":
          return Bo(t);
        case "keypress":
          return t.which !== 32 ? null : ($o = true, Oo);
        case "textInput":
          return e = t.data, e === Oo && $o ? null : e;
        default:
          return null;
      }
    }
    function ed(e, t) {
      if (Nn) return e === "compositionend" || !xi && Vo(e, t) ? (e = zo(), Gr = fi = Ut = null, Nn = false, e) : null;
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Fo && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    var td = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
    function Ao(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!td[e.type] : t === "textarea";
    }
    function Uo(e, t, n, r) {
      oo(r), t = el(t, "onChange"), 0 < t.length && (n = new pi("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
    }
    var sr = null, or = null;
    function nd(e) {
      sa(e, 0);
    }
    function Zr(e) {
      var t = Pn(e);
      if (Xs(t)) return e;
    }
    function rd(e, t) {
      if (e === "change") return t;
    }
    var Qo = false;
    if (E) {
      var yi;
      if (E) {
        var ji = "oninput" in document;
        if (!ji) {
          var Wo = document.createElement("div");
          Wo.setAttribute("oninput", "return;"), ji = typeof Wo.oninput == "function";
        }
        yi = ji;
      } else yi = false;
      Qo = yi && (!document.documentMode || 9 < document.documentMode);
    }
    function Ho() {
      sr && (sr.detachEvent("onpropertychange", Go), or = sr = null);
    }
    function Go(e) {
      if (e.propertyName === "value" && Zr(or)) {
        var t = [];
        Uo(t, or, e, bl(e)), fo(nd, t);
      }
    }
    function ld(e, t, n) {
      e === "focusin" ? (Ho(), sr = t, or = n, sr.attachEvent("onpropertychange", Go)) : e === "focusout" && Ho();
    }
    function id(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown") return Zr(or);
    }
    function sd(e, t) {
      if (e === "click") return Zr(t);
    }
    function od(e, t) {
      if (e === "input" || e === "change") return Zr(t);
    }
    function ad(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var pt = typeof Object.is == "function" ? Object.is : ad;
    function ar(e, t) {
      if (pt(e, t)) return true;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null) return false;
      var n = Object.keys(e), r = Object.keys(t);
      if (n.length !== r.length) return false;
      for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!R.call(t, i) || !pt(e[i], t[i])) return false;
      }
      return true;
    }
    function Ko(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function Yo(e, t) {
      var n = Ko(e);
      e = 0;
      for (var r; n; ) {
        if (n.nodeType === 3) {
          if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
          e = r;
        }
        e: {
          for (; n; ) {
            if (n.nextSibling) {
              n = n.nextSibling;
              break e;
            }
            n = n.parentNode;
          }
          n = void 0;
        }
        n = Ko(n);
      }
    }
    function Xo(e, t) {
      return e && t ? e === t ? true : e && e.nodeType === 3 ? false : t && t.nodeType === 3 ? Xo(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : false : false;
    }
    function Zo() {
      for (var e = window, t = Dr(); t instanceof e.HTMLIFrameElement; ) {
        try {
          var n = typeof t.contentWindow.location.href == "string";
        } catch {
          n = false;
        }
        if (n) e = t.contentWindow;
        else break;
        t = Dr(e.document);
      }
      return t;
    }
    function wi(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function ud(e) {
      var t = Zo(), n = e.focusedElem, r = e.selectionRange;
      if (t !== n && n && n.ownerDocument && Xo(n.ownerDocument.documentElement, n)) {
        if (r !== null && wi(n)) {
          if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
          else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
            e = e.getSelection();
            var i = n.textContent.length, s = Math.min(r.start, i);
            r = r.end === void 0 ? s : Math.min(r.end, i), !e.extend && s > r && (i = r, r = s, s = i), i = Yo(n, s);
            var o = Yo(n, r);
            i && o && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), s > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
          }
        }
        for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
      }
    }
    var cd = E && "documentMode" in document && 11 >= document.documentMode, Cn = null, ki = null, ur = null, Si = false;
    function qo(e, t, n) {
      var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
      Si || Cn == null || Cn !== Dr(r) || (r = Cn, "selectionStart" in r && wi(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), ur && ar(ur, r) || (ur = r, r = el(ki, "onSelect"), 0 < r.length && (t = new pi("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Cn)));
    }
    function qr(e, t) {
      var n = {};
      return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
    }
    var En = { animationend: qr("Animation", "AnimationEnd"), animationiteration: qr("Animation", "AnimationIteration"), animationstart: qr("Animation", "AnimationStart"), transitionend: qr("Transition", "TransitionEnd") }, Ni = {}, Jo = {};
    E && (Jo = document.createElement("div").style, "AnimationEvent" in window || (delete En.animationend.animation, delete En.animationiteration.animation, delete En.animationstart.animation), "TransitionEvent" in window || delete En.transitionend.transition);
    function Jr(e) {
      if (Ni[e]) return Ni[e];
      if (!En[e]) return e;
      var t = En[e], n;
      for (n in t) if (t.hasOwnProperty(n) && n in Jo) return Ni[e] = t[n];
      return e;
    }
    var bo = Jr("animationend"), ea = Jr("animationiteration"), ta = Jr("animationstart"), na = Jr("transitionend"), ra = /* @__PURE__ */ new Map(), la = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function Qt(e, t) {
      ra.set(e, t), w(t, [e]);
    }
    for (var Ci = 0; Ci < la.length; Ci++) {
      var Ei = la[Ci], dd = Ei.toLowerCase(), fd = Ei[0].toUpperCase() + Ei.slice(1);
      Qt(dd, "on" + fd);
    }
    Qt(bo, "onAnimationEnd"), Qt(ea, "onAnimationIteration"), Qt(ta, "onAnimationStart"), Qt("dblclick", "onDoubleClick"), Qt("focusin", "onFocus"), Qt("focusout", "onBlur"), Qt(na, "onTransitionEnd"), D("onMouseEnter", ["mouseout", "mouseover"]), D("onMouseLeave", ["mouseout", "mouseover"]), D("onPointerEnter", ["pointerout", "pointerover"]), D("onPointerLeave", ["pointerout", "pointerover"]), w("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), w("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), w("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), w("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), w("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), w("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var cr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), pd = new Set("cancel close invalid load scroll toggle".split(" ").concat(cr));
    function ia(e, t, n) {
      var r = e.type || "unknown-event";
      e.currentTarget = n, dc(r, t, void 0, e), e.currentTarget = null;
    }
    function sa(e, t) {
      t = (t & 4) !== 0;
      for (var n = 0; n < e.length; n++) {
        var r = e[n], i = r.event;
        r = r.listeners;
        e: {
          var s = void 0;
          if (t) for (var o = r.length - 1; 0 <= o; o--) {
            var c = r[o], d = c.instance, v = c.currentTarget;
            if (c = c.listener, d !== s && i.isPropagationStopped()) break e;
            ia(i, c, v), s = d;
          }
          else for (o = 0; o < r.length; o++) {
            if (c = r[o], d = c.instance, v = c.currentTarget, c = c.listener, d !== s && i.isPropagationStopped()) break e;
            ia(i, c, v), s = d;
          }
        }
      }
      if (Fr) throw e = ri, Fr = false, ri = null, e;
    }
    function he(e, t) {
      var n = t[Ri];
      n === void 0 && (n = t[Ri] = /* @__PURE__ */ new Set());
      var r = e + "__bubble";
      n.has(r) || (oa(t, e, 2, false), n.add(r));
    }
    function _i(e, t, n) {
      var r = 0;
      t && (r |= 4), oa(n, e, r, t);
    }
    var br = "_reactListening" + Math.random().toString(36).slice(2);
    function dr(e) {
      if (!e[br]) {
        e[br] = true, p.forEach(function(n) {
          n !== "selectionchange" && (pd.has(n) || _i(n, false, e), _i(n, true, e));
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[br] || (t[br] = true, _i("selectionchange", false, t));
      }
    }
    function oa(e, t, n, r) {
      switch (Lo(t)) {
        case 1:
          var i = _c;
          break;
        case 4:
          i = Ic;
          break;
        default:
          i = ci;
      }
      n = i.bind(null, t, n, e), i = void 0, !ni || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = true), r ? i !== void 0 ? e.addEventListener(t, n, { capture: true, passive: i }) : e.addEventListener(t, n, true) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, false);
    }
    function Ii(e, t, n, r, i) {
      var s = r;
      if ((t & 1) === 0 && (t & 2) === 0 && r !== null) e: for (; ; ) {
        if (r === null) return;
        var o = r.tag;
        if (o === 3 || o === 4) {
          var c = r.stateNode.containerInfo;
          if (c === i || c.nodeType === 8 && c.parentNode === i) break;
          if (o === 4) for (o = r.return; o !== null; ) {
            var d = o.tag;
            if ((d === 3 || d === 4) && (d = o.stateNode.containerInfo, d === i || d.nodeType === 8 && d.parentNode === i)) return;
            o = o.return;
          }
          for (; c !== null; ) {
            if (o = sn(c), o === null) return;
            if (d = o.tag, d === 5 || d === 6) {
              r = s = o;
              continue e;
            }
            c = c.parentNode;
          }
        }
        r = r.return;
      }
      fo(function() {
        var v = s, S = bl(n), N = [];
        e: {
          var j = ra.get(e);
          if (j !== void 0) {
            var M = pi, O = e;
            switch (e) {
              case "keypress":
                if (Kr(n) === 0) break e;
              case "keydown":
              case "keyup":
                M = Qc;
                break;
              case "focusin":
                O = "focus", M = gi;
                break;
              case "focusout":
                O = "blur", M = gi;
                break;
              case "beforeblur":
              case "afterblur":
                M = gi;
                break;
              case "click":
                if (n.button === 2) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                M = Do;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                M = zc;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                M = Gc;
                break;
              case bo:
              case ea:
              case ta:
                M = Rc;
                break;
              case na:
                M = Yc;
                break;
              case "scroll":
                M = Pc;
                break;
              case "wheel":
                M = Zc;
                break;
              case "copy":
              case "cut":
              case "paste":
                M = Fc;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                M = To;
            }
            var $ = (t & 4) !== 0, Ce = !$ && e === "scroll", m = $ ? j !== null ? j + "Capture" : null : j;
            $ = [];
            for (var f = v, g; f !== null; ) {
              g = f;
              var C = g.stateNode;
              if (g.tag === 5 && C !== null && (g = C, m !== null && (C = Kn(f, m), C != null && $.push(fr(f, C, g)))), Ce) break;
              f = f.return;
            }
            0 < $.length && (j = new M(j, O, null, n, S), N.push({ event: j, listeners: $ }));
          }
        }
        if ((t & 7) === 0) {
          e: {
            if (j = e === "mouseover" || e === "pointerover", M = e === "mouseout" || e === "pointerout", j && n !== Jl && (O = n.relatedTarget || n.fromElement) && (sn(O) || O[Lt])) break e;
            if ((M || j) && (j = S.window === S ? S : (j = S.ownerDocument) ? j.defaultView || j.parentWindow : window, M ? (O = n.relatedTarget || n.toElement, M = v, O = O ? sn(O) : null, O !== null && (Ce = ln(O), O !== Ce || O.tag !== 5 && O.tag !== 6) && (O = null)) : (M = null, O = v), M !== O)) {
              if ($ = Do, C = "onMouseLeave", m = "onMouseEnter", f = "mouse", (e === "pointerout" || e === "pointerover") && ($ = To, C = "onPointerLeave", m = "onPointerEnter", f = "pointer"), Ce = M == null ? j : Pn(M), g = O == null ? j : Pn(O), j = new $(C, f + "leave", M, n, S), j.target = Ce, j.relatedTarget = g, C = null, sn(S) === v && ($ = new $(m, f + "enter", O, n, S), $.target = g, $.relatedTarget = Ce, C = $), Ce = C, M && O) t: {
                for ($ = M, m = O, f = 0, g = $; g; g = _n(g)) f++;
                for (g = 0, C = m; C; C = _n(C)) g++;
                for (; 0 < f - g; ) $ = _n($), f--;
                for (; 0 < g - f; ) m = _n(m), g--;
                for (; f--; ) {
                  if ($ === m || m !== null && $ === m.alternate) break t;
                  $ = _n($), m = _n(m);
                }
                $ = null;
              }
              else $ = null;
              M !== null && aa(N, j, M, $, false), O !== null && Ce !== null && aa(N, Ce, O, $, true);
            }
          }
          e: {
            if (j = v ? Pn(v) : window, M = j.nodeName && j.nodeName.toLowerCase(), M === "select" || M === "input" && j.type === "file") var A = rd;
            else if (Ao(j)) if (Qo) A = od;
            else {
              A = id;
              var W = ld;
            }
            else (M = j.nodeName) && M.toLowerCase() === "input" && (j.type === "checkbox" || j.type === "radio") && (A = sd);
            if (A && (A = A(e, v))) {
              Uo(N, A, n, S);
              break e;
            }
            W && W(e, j, v), e === "focusout" && (W = j._wrapperState) && W.controlled && j.type === "number" && Kl(j, "number", j.value);
          }
          switch (W = v ? Pn(v) : window, e) {
            case "focusin":
              (Ao(W) || W.contentEditable === "true") && (Cn = W, ki = v, ur = null);
              break;
            case "focusout":
              ur = ki = Cn = null;
              break;
            case "mousedown":
              Si = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Si = false, qo(N, n, S);
              break;
            case "selectionchange":
              if (cd) break;
            case "keydown":
            case "keyup":
              qo(N, n, S);
          }
          var H;
          if (xi) e: {
            switch (e) {
              case "compositionstart":
                var K = "onCompositionStart";
                break e;
              case "compositionend":
                K = "onCompositionEnd";
                break e;
              case "compositionupdate":
                K = "onCompositionUpdate";
                break e;
            }
            K = void 0;
          }
          else Nn ? Vo(e, n) && (K = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (K = "onCompositionStart");
          K && (Fo && n.locale !== "ko" && (Nn || K !== "onCompositionStart" ? K === "onCompositionEnd" && Nn && (H = zo()) : (Ut = S, fi = "value" in Ut ? Ut.value : Ut.textContent, Nn = true)), W = el(v, K), 0 < W.length && (K = new Ro(K, e, null, n, S), N.push({ event: K, listeners: W }), H ? K.data = H : (H = Bo(n), H !== null && (K.data = H)))), (H = Jc ? bc(e, n) : ed(e, n)) && (v = el(v, "onBeforeInput"), 0 < v.length && (S = new Ro("onBeforeInput", "beforeinput", null, n, S), N.push({ event: S, listeners: v }), S.data = H));
        }
        sa(N, t);
      });
    }
    function fr(e, t, n) {
      return { instance: e, listener: t, currentTarget: n };
    }
    function el(e, t) {
      for (var n = t + "Capture", r = []; e !== null; ) {
        var i = e, s = i.stateNode;
        i.tag === 5 && s !== null && (i = s, s = Kn(e, n), s != null && r.unshift(fr(e, s, i)), s = Kn(e, t), s != null && r.push(fr(e, s, i))), e = e.return;
      }
      return r;
    }
    function _n(e) {
      if (e === null) return null;
      do
        e = e.return;
      while (e && e.tag !== 5);
      return e || null;
    }
    function aa(e, t, n, r, i) {
      for (var s = t._reactName, o = []; n !== null && n !== r; ) {
        var c = n, d = c.alternate, v = c.stateNode;
        if (d !== null && d === r) break;
        c.tag === 5 && v !== null && (c = v, i ? (d = Kn(n, s), d != null && o.unshift(fr(n, d, c))) : i || (d = Kn(n, s), d != null && o.push(fr(n, d, c)))), n = n.return;
      }
      o.length !== 0 && e.push({ event: t, listeners: o });
    }
    var hd = /\r\n?/g, md = /\u0000|\uFFFD/g;
    function ua(e) {
      return (typeof e == "string" ? e : "" + e).replace(hd, `
`).replace(md, "");
    }
    function tl(e, t, n) {
      if (t = ua(t), ua(e) !== t && n) throw Error(u(425));
    }
    function nl() {
    }
    var Pi = null, Li = null;
    function zi(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    var Mi = typeof setTimeout == "function" ? setTimeout : void 0, gd = typeof clearTimeout == "function" ? clearTimeout : void 0, ca = typeof Promise == "function" ? Promise : void 0, vd = typeof queueMicrotask == "function" ? queueMicrotask : typeof ca < "u" ? function(e) {
      return ca.resolve(null).then(e).catch(xd);
    } : Mi;
    function xd(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function Di(e, t) {
      var n = t, r = 0;
      do {
        var i = n.nextSibling;
        if (e.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === "/$") {
          if (r === 0) {
            e.removeChild(i), nr(t);
            return;
          }
          r--;
        } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i;
      } while (n);
      nr(t);
    }
    function Wt(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
          if (t === "/$") return null;
        }
      }
      return e;
    }
    function da(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "$" || n === "$!" || n === "$?") {
            if (t === 0) return e;
            t--;
          } else n === "/$" && t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    var In = Math.random().toString(36).slice(2), Ct = "__reactFiber$" + In, pr = "__reactProps$" + In, Lt = "__reactContainer$" + In, Ri = "__reactEvents$" + In, yd = "__reactListeners$" + In, jd = "__reactHandles$" + In;
    function sn(e) {
      var t = e[Ct];
      if (t) return t;
      for (var n = e.parentNode; n; ) {
        if (t = n[Lt] || n[Ct]) {
          if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = da(e); e !== null; ) {
            if (n = e[Ct]) return n;
            e = da(e);
          }
          return t;
        }
        e = n, n = e.parentNode;
      }
      return null;
    }
    function hr(e) {
      return e = e[Ct] || e[Lt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
    }
    function Pn(e) {
      if (e.tag === 5 || e.tag === 6) return e.stateNode;
      throw Error(u(33));
    }
    function rl(e) {
      return e[pr] || null;
    }
    var Ti = [], Ln = -1;
    function Ht(e) {
      return { current: e };
    }
    function me(e) {
      0 > Ln || (e.current = Ti[Ln], Ti[Ln] = null, Ln--);
    }
    function pe(e, t) {
      Ln++, Ti[Ln] = e.current, e.current = t;
    }
    var Gt = {}, Oe = Ht(Gt), Ge = Ht(false), on = Gt;
    function zn(e, t) {
      var n = e.type.contextTypes;
      if (!n) return Gt;
      var r = e.stateNode;
      if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
      var i = {}, s;
      for (s in n) i[s] = t[s];
      return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
    }
    function Ke(e) {
      return e = e.childContextTypes, e != null;
    }
    function ll() {
      me(Ge), me(Oe);
    }
    function fa(e, t, n) {
      if (Oe.current !== Gt) throw Error(u(168));
      pe(Oe, t), pe(Ge, n);
    }
    function pa(e, t, n) {
      var r = e.stateNode;
      if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
      r = r.getChildContext();
      for (var i in r) if (!(i in t)) throw Error(u(108, fe(e) || "Unknown", i));
      return F({}, n, r);
    }
    function il(e) {
      return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Gt, on = Oe.current, pe(Oe, e), pe(Ge, Ge.current), true;
    }
    function ha(e, t, n) {
      var r = e.stateNode;
      if (!r) throw Error(u(169));
      n ? (e = pa(e, t, on), r.__reactInternalMemoizedMergedChildContext = e, me(Ge), me(Oe), pe(Oe, e)) : me(Ge), pe(Ge, n);
    }
    var zt = null, sl = false, Fi = false;
    function ma(e) {
      zt === null ? zt = [e] : zt.push(e);
    }
    function wd(e) {
      sl = true, ma(e);
    }
    function Kt() {
      if (!Fi && zt !== null) {
        Fi = true;
        var e = 0, t = ce;
        try {
          var n = zt;
          for (ce = 1; e < n.length; e++) {
            var r = n[e];
            do
              r = r(true);
            while (r !== null);
          }
          zt = null, sl = false;
        } catch (i) {
          throw zt !== null && (zt = zt.slice(e + 1)), vo(li, Kt), i;
        } finally {
          ce = t, Fi = false;
        }
      }
      return null;
    }
    var Mn = [], Dn = 0, ol = null, al = 0, it = [], st = 0, an = null, Mt = 1, Dt = "";
    function un(e, t) {
      Mn[Dn++] = al, Mn[Dn++] = ol, ol = e, al = t;
    }
    function ga(e, t, n) {
      it[st++] = Mt, it[st++] = Dt, it[st++] = an, an = e;
      var r = Mt;
      e = Dt;
      var i = 32 - ft(r) - 1;
      r &= ~(1 << i), n += 1;
      var s = 32 - ft(t) + i;
      if (30 < s) {
        var o = i - i % 5;
        s = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, Mt = 1 << 32 - ft(t) + i | n << i | r, Dt = s + e;
      } else Mt = 1 << s | n << i | r, Dt = e;
    }
    function Oi(e) {
      e.return !== null && (un(e, 1), ga(e, 1, 0));
    }
    function $i(e) {
      for (; e === ol; ) ol = Mn[--Dn], Mn[Dn] = null, al = Mn[--Dn], Mn[Dn] = null;
      for (; e === an; ) an = it[--st], it[st] = null, Dt = it[--st], it[st] = null, Mt = it[--st], it[st] = null;
    }
    var tt = null, nt = null, ve = false, ht = null;
    function va(e, t) {
      var n = ct(5, null, null, 0);
      n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
    }
    function xa(e, t) {
      switch (e.tag) {
        case 5:
          var n = e.type;
          return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, tt = e, nt = Wt(t.firstChild), true) : false;
        case 6:
          return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, tt = e, nt = null, true) : false;
        case 13:
          return t = t.nodeType !== 8 ? null : t, t !== null ? (n = an !== null ? { id: Mt, overflow: Dt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = ct(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, tt = e, nt = null, true) : false;
        default:
          return false;
      }
    }
    function Vi(e) {
      return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
    }
    function Bi(e) {
      if (ve) {
        var t = nt;
        if (t) {
          var n = t;
          if (!xa(e, t)) {
            if (Vi(e)) throw Error(u(418));
            t = Wt(n.nextSibling);
            var r = tt;
            t && xa(e, t) ? va(r, n) : (e.flags = e.flags & -4097 | 2, ve = false, tt = e);
          }
        } else {
          if (Vi(e)) throw Error(u(418));
          e.flags = e.flags & -4097 | 2, ve = false, tt = e;
        }
      }
    }
    function ya(e) {
      for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
      tt = e;
    }
    function ul(e) {
      if (e !== tt) return false;
      if (!ve) return ya(e), ve = true, false;
      var t;
      if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !zi(e.type, e.memoizedProps)), t && (t = nt)) {
        if (Vi(e)) throw ja(), Error(u(418));
        for (; t; ) va(e, t), t = Wt(t.nextSibling);
      }
      if (ya(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(u(317));
        e: {
          for (e = e.nextSibling, t = 0; e; ) {
            if (e.nodeType === 8) {
              var n = e.data;
              if (n === "/$") {
                if (t === 0) {
                  nt = Wt(e.nextSibling);
                  break e;
                }
                t--;
              } else n !== "$" && n !== "$!" && n !== "$?" || t++;
            }
            e = e.nextSibling;
          }
          nt = null;
        }
      } else nt = tt ? Wt(e.stateNode.nextSibling) : null;
      return true;
    }
    function ja() {
      for (var e = nt; e; ) e = Wt(e.nextSibling);
    }
    function Rn() {
      nt = tt = null, ve = false;
    }
    function Ai(e) {
      ht === null ? ht = [e] : ht.push(e);
    }
    var kd = B.ReactCurrentBatchConfig;
    function mr(e, t, n) {
      if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
          if (n = n._owner, n) {
            if (n.tag !== 1) throw Error(u(309));
            var r = n.stateNode;
          }
          if (!r) throw Error(u(147, e));
          var i = r, s = "" + e;
          return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(o) {
            var c = i.refs;
            o === null ? delete c[s] : c[s] = o;
          }, t._stringRef = s, t);
        }
        if (typeof e != "string") throw Error(u(284));
        if (!n._owner) throw Error(u(290, e));
      }
      return e;
    }
    function cl(e, t) {
      throw e = Object.prototype.toString.call(t), Error(u(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
    }
    function wa(e) {
      var t = e._init;
      return t(e._payload);
    }
    function ka(e) {
      function t(m, f) {
        if (e) {
          var g = m.deletions;
          g === null ? (m.deletions = [f], m.flags |= 16) : g.push(f);
        }
      }
      function n(m, f) {
        if (!e) return null;
        for (; f !== null; ) t(m, f), f = f.sibling;
        return null;
      }
      function r(m, f) {
        for (m = /* @__PURE__ */ new Map(); f !== null; ) f.key !== null ? m.set(f.key, f) : m.set(f.index, f), f = f.sibling;
        return m;
      }
      function i(m, f) {
        return m = tn(m, f), m.index = 0, m.sibling = null, m;
      }
      function s(m, f, g) {
        return m.index = g, e ? (g = m.alternate, g !== null ? (g = g.index, g < f ? (m.flags |= 2, f) : g) : (m.flags |= 2, f)) : (m.flags |= 1048576, f);
      }
      function o(m) {
        return e && m.alternate === null && (m.flags |= 2), m;
      }
      function c(m, f, g, C) {
        return f === null || f.tag !== 6 ? (f = Ms(g, m.mode, C), f.return = m, f) : (f = i(f, g), f.return = m, f);
      }
      function d(m, f, g, C) {
        var A = g.type;
        return A === xe ? S(m, f, g.props.children, C, g.key) : f !== null && (f.elementType === A || typeof A == "object" && A !== null && A.$$typeof === He && wa(A) === f.type) ? (C = i(f, g.props), C.ref = mr(m, f, g), C.return = m, C) : (C = Rl(g.type, g.key, g.props, null, m.mode, C), C.ref = mr(m, f, g), C.return = m, C);
      }
      function v(m, f, g, C) {
        return f === null || f.tag !== 4 || f.stateNode.containerInfo !== g.containerInfo || f.stateNode.implementation !== g.implementation ? (f = Ds(g, m.mode, C), f.return = m, f) : (f = i(f, g.children || []), f.return = m, f);
      }
      function S(m, f, g, C, A) {
        return f === null || f.tag !== 7 ? (f = vn(g, m.mode, C, A), f.return = m, f) : (f = i(f, g), f.return = m, f);
      }
      function N(m, f, g) {
        if (typeof f == "string" && f !== "" || typeof f == "number") return f = Ms("" + f, m.mode, g), f.return = m, f;
        if (typeof f == "object" && f !== null) {
          switch (f.$$typeof) {
            case te:
              return g = Rl(f.type, f.key, f.props, null, m.mode, g), g.ref = mr(m, null, f), g.return = m, g;
            case X:
              return f = Ds(f, m.mode, g), f.return = m, f;
            case He:
              var C = f._init;
              return N(m, C(f._payload), g);
          }
          if (Wn(f) || G(f)) return f = vn(f, m.mode, g, null), f.return = m, f;
          cl(m, f);
        }
        return null;
      }
      function j(m, f, g, C) {
        var A = f !== null ? f.key : null;
        if (typeof g == "string" && g !== "" || typeof g == "number") return A !== null ? null : c(m, f, "" + g, C);
        if (typeof g == "object" && g !== null) {
          switch (g.$$typeof) {
            case te:
              return g.key === A ? d(m, f, g, C) : null;
            case X:
              return g.key === A ? v(m, f, g, C) : null;
            case He:
              return A = g._init, j(m, f, A(g._payload), C);
          }
          if (Wn(g) || G(g)) return A !== null ? null : S(m, f, g, C, null);
          cl(m, g);
        }
        return null;
      }
      function M(m, f, g, C, A) {
        if (typeof C == "string" && C !== "" || typeof C == "number") return m = m.get(g) || null, c(f, m, "" + C, A);
        if (typeof C == "object" && C !== null) {
          switch (C.$$typeof) {
            case te:
              return m = m.get(C.key === null ? g : C.key) || null, d(f, m, C, A);
            case X:
              return m = m.get(C.key === null ? g : C.key) || null, v(f, m, C, A);
            case He:
              var W = C._init;
              return M(m, f, g, W(C._payload), A);
          }
          if (Wn(C) || G(C)) return m = m.get(g) || null, S(f, m, C, A, null);
          cl(f, C);
        }
        return null;
      }
      function O(m, f, g, C) {
        for (var A = null, W = null, H = f, K = f = 0, Me = null; H !== null && K < g.length; K++) {
          H.index > K ? (Me = H, H = null) : Me = H.sibling;
          var le = j(m, H, g[K], C);
          if (le === null) {
            H === null && (H = Me);
            break;
          }
          e && H && le.alternate === null && t(m, H), f = s(le, f, K), W === null ? A = le : W.sibling = le, W = le, H = Me;
        }
        if (K === g.length) return n(m, H), ve && un(m, K), A;
        if (H === null) {
          for (; K < g.length; K++) H = N(m, g[K], C), H !== null && (f = s(H, f, K), W === null ? A = H : W.sibling = H, W = H);
          return ve && un(m, K), A;
        }
        for (H = r(m, H); K < g.length; K++) Me = M(H, m, K, g[K], C), Me !== null && (e && Me.alternate !== null && H.delete(Me.key === null ? K : Me.key), f = s(Me, f, K), W === null ? A = Me : W.sibling = Me, W = Me);
        return e && H.forEach(function(nn) {
          return t(m, nn);
        }), ve && un(m, K), A;
      }
      function $(m, f, g, C) {
        var A = G(g);
        if (typeof A != "function") throw Error(u(150));
        if (g = A.call(g), g == null) throw Error(u(151));
        for (var W = A = null, H = f, K = f = 0, Me = null, le = g.next(); H !== null && !le.done; K++, le = g.next()) {
          H.index > K ? (Me = H, H = null) : Me = H.sibling;
          var nn = j(m, H, le.value, C);
          if (nn === null) {
            H === null && (H = Me);
            break;
          }
          e && H && nn.alternate === null && t(m, H), f = s(nn, f, K), W === null ? A = nn : W.sibling = nn, W = nn, H = Me;
        }
        if (le.done) return n(m, H), ve && un(m, K), A;
        if (H === null) {
          for (; !le.done; K++, le = g.next()) le = N(m, le.value, C), le !== null && (f = s(le, f, K), W === null ? A = le : W.sibling = le, W = le);
          return ve && un(m, K), A;
        }
        for (H = r(m, H); !le.done; K++, le = g.next()) le = M(H, m, K, le.value, C), le !== null && (e && le.alternate !== null && H.delete(le.key === null ? K : le.key), f = s(le, f, K), W === null ? A = le : W.sibling = le, W = le);
        return e && H.forEach(function(tf) {
          return t(m, tf);
        }), ve && un(m, K), A;
      }
      function Ce(m, f, g, C) {
        if (typeof g == "object" && g !== null && g.type === xe && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
          switch (g.$$typeof) {
            case te:
              e: {
                for (var A = g.key, W = f; W !== null; ) {
                  if (W.key === A) {
                    if (A = g.type, A === xe) {
                      if (W.tag === 7) {
                        n(m, W.sibling), f = i(W, g.props.children), f.return = m, m = f;
                        break e;
                      }
                    } else if (W.elementType === A || typeof A == "object" && A !== null && A.$$typeof === He && wa(A) === W.type) {
                      n(m, W.sibling), f = i(W, g.props), f.ref = mr(m, W, g), f.return = m, m = f;
                      break e;
                    }
                    n(m, W);
                    break;
                  } else t(m, W);
                  W = W.sibling;
                }
                g.type === xe ? (f = vn(g.props.children, m.mode, C, g.key), f.return = m, m = f) : (C = Rl(g.type, g.key, g.props, null, m.mode, C), C.ref = mr(m, f, g), C.return = m, m = C);
              }
              return o(m);
            case X:
              e: {
                for (W = g.key; f !== null; ) {
                  if (f.key === W) if (f.tag === 4 && f.stateNode.containerInfo === g.containerInfo && f.stateNode.implementation === g.implementation) {
                    n(m, f.sibling), f = i(f, g.children || []), f.return = m, m = f;
                    break e;
                  } else {
                    n(m, f);
                    break;
                  }
                  else t(m, f);
                  f = f.sibling;
                }
                f = Ds(g, m.mode, C), f.return = m, m = f;
              }
              return o(m);
            case He:
              return W = g._init, Ce(m, f, W(g._payload), C);
          }
          if (Wn(g)) return O(m, f, g, C);
          if (G(g)) return $(m, f, g, C);
          cl(m, g);
        }
        return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g, f !== null && f.tag === 6 ? (n(m, f.sibling), f = i(f, g), f.return = m, m = f) : (n(m, f), f = Ms(g, m.mode, C), f.return = m, m = f), o(m)) : n(m, f);
      }
      return Ce;
    }
    var Tn = ka(true), Sa = ka(false), dl = Ht(null), fl = null, Fn = null, Ui = null;
    function Qi() {
      Ui = Fn = fl = null;
    }
    function Wi(e) {
      var t = dl.current;
      me(dl), e._currentValue = t;
    }
    function Hi(e, t, n) {
      for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return;
      }
    }
    function On(e, t) {
      fl = e, Ui = Fn = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Ye = true), e.firstContext = null);
    }
    function ot(e) {
      var t = e._currentValue;
      if (Ui !== e) if (e = { context: e, memoizedValue: t, next: null }, Fn === null) {
        if (fl === null) throw Error(u(308));
        Fn = e, fl.dependencies = { lanes: 0, firstContext: e };
      } else Fn = Fn.next = e;
      return t;
    }
    var cn = null;
    function Gi(e) {
      cn === null ? cn = [e] : cn.push(e);
    }
    function Na(e, t, n, r) {
      var i = t.interleaved;
      return i === null ? (n.next = n, Gi(t)) : (n.next = i.next, i.next = n), t.interleaved = n, Rt(e, r);
    }
    function Rt(e, t) {
      e.lanes |= t;
      var n = e.alternate;
      for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
      return n.tag === 3 ? n.stateNode : null;
    }
    var Yt = false;
    function Ki(e) {
      e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
    }
    function Ca(e, t) {
      e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
    }
    function Tt(e, t) {
      return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
    }
    function Xt(e, t, n) {
      var r = e.updateQueue;
      if (r === null) return null;
      if (r = r.shared, (ee & 2) !== 0) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, Rt(e, n);
      }
      return i = r.interleaved, i === null ? (t.next = t, Gi(r)) : (t.next = i.next, i.next = t), r.interleaved = t, Rt(e, n);
    }
    function pl(e, t, n) {
      if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, oi(e, n);
      }
    }
    function Ea(e, t) {
      var n = e.updateQueue, r = e.alternate;
      if (r !== null && (r = r.updateQueue, n === r)) {
        var i = null, s = null;
        if (n = n.firstBaseUpdate, n !== null) {
          do {
            var o = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
            s === null ? i = s = o : s = s.next = o, n = n.next;
          } while (n !== null);
          s === null ? i = s = t : s = s.next = t;
        } else i = s = t;
        n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: s, shared: r.shared, effects: r.effects }, e.updateQueue = n;
        return;
      }
      e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
    }
    function hl(e, t, n, r) {
      var i = e.updateQueue;
      Yt = false;
      var s = i.firstBaseUpdate, o = i.lastBaseUpdate, c = i.shared.pending;
      if (c !== null) {
        i.shared.pending = null;
        var d = c, v = d.next;
        d.next = null, o === null ? s = v : o.next = v, o = d;
        var S = e.alternate;
        S !== null && (S = S.updateQueue, c = S.lastBaseUpdate, c !== o && (c === null ? S.firstBaseUpdate = v : c.next = v, S.lastBaseUpdate = d));
      }
      if (s !== null) {
        var N = i.baseState;
        o = 0, S = v = d = null, c = s;
        do {
          var j = c.lane, M = c.eventTime;
          if ((r & j) === j) {
            S !== null && (S = S.next = { eventTime: M, lane: 0, tag: c.tag, payload: c.payload, callback: c.callback, next: null });
            e: {
              var O = e, $ = c;
              switch (j = t, M = n, $.tag) {
                case 1:
                  if (O = $.payload, typeof O == "function") {
                    N = O.call(M, N, j);
                    break e;
                  }
                  N = O;
                  break e;
                case 3:
                  O.flags = O.flags & -65537 | 128;
                case 0:
                  if (O = $.payload, j = typeof O == "function" ? O.call(M, N, j) : O, j == null) break e;
                  N = F({}, N, j);
                  break e;
                case 2:
                  Yt = true;
              }
            }
            c.callback !== null && c.lane !== 0 && (e.flags |= 64, j = i.effects, j === null ? i.effects = [c] : j.push(c));
          } else M = { eventTime: M, lane: j, tag: c.tag, payload: c.payload, callback: c.callback, next: null }, S === null ? (v = S = M, d = N) : S = S.next = M, o |= j;
          if (c = c.next, c === null) {
            if (c = i.shared.pending, c === null) break;
            j = c, c = j.next, j.next = null, i.lastBaseUpdate = j, i.shared.pending = null;
          }
        } while (true);
        if (S === null && (d = N), i.baseState = d, i.firstBaseUpdate = v, i.lastBaseUpdate = S, t = i.shared.interleaved, t !== null) {
          i = t;
          do
            o |= i.lane, i = i.next;
          while (i !== t);
        } else s === null && (i.shared.lanes = 0);
        pn |= o, e.lanes = o, e.memoizedState = N;
      }
    }
    function _a(e, t, n) {
      if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
        var r = e[t], i = r.callback;
        if (i !== null) {
          if (r.callback = null, r = n, typeof i != "function") throw Error(u(191, i));
          i.call(r);
        }
      }
    }
    var gr = {}, Et = Ht(gr), vr = Ht(gr), xr = Ht(gr);
    function dn(e) {
      if (e === gr) throw Error(u(174));
      return e;
    }
    function Yi(e, t) {
      switch (pe(xr, t), pe(vr, e), pe(Et, gr), e = t.nodeType, e) {
        case 9:
        case 11:
          t = (t = t.documentElement) ? t.namespaceURI : Xl(null, "");
          break;
        default:
          e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Xl(t, e);
      }
      me(Et), pe(Et, t);
    }
    function $n() {
      me(Et), me(vr), me(xr);
    }
    function Ia(e) {
      dn(xr.current);
      var t = dn(Et.current), n = Xl(t, e.type);
      t !== n && (pe(vr, e), pe(Et, n));
    }
    function Xi(e) {
      vr.current === e && (me(Et), me(vr));
    }
    var ye = Ht(0);
    function ml(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var n = t.memoizedState;
          if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
          if ((t.flags & 128) !== 0) return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Zi = [];
    function qi() {
      for (var e = 0; e < Zi.length; e++) Zi[e]._workInProgressVersionPrimary = null;
      Zi.length = 0;
    }
    var gl = B.ReactCurrentDispatcher, Ji = B.ReactCurrentBatchConfig, fn = 0, je = null, Ie = null, Le = null, vl = false, yr = false, jr = 0, Sd = 0;
    function $e() {
      throw Error(u(321));
    }
    function bi(e, t) {
      if (t === null) return false;
      for (var n = 0; n < t.length && n < e.length; n++) if (!pt(e[n], t[n])) return false;
      return true;
    }
    function es(e, t, n, r, i, s) {
      if (fn = s, je = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, gl.current = e === null || e.memoizedState === null ? _d : Id, e = n(r, i), yr) {
        s = 0;
        do {
          if (yr = false, jr = 0, 25 <= s) throw Error(u(301));
          s += 1, Le = Ie = null, t.updateQueue = null, gl.current = Pd, e = n(r, i);
        } while (yr);
      }
      if (gl.current = jl, t = Ie !== null && Ie.next !== null, fn = 0, Le = Ie = je = null, vl = false, t) throw Error(u(300));
      return e;
    }
    function ts() {
      var e = jr !== 0;
      return jr = 0, e;
    }
    function _t() {
      var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      return Le === null ? je.memoizedState = Le = e : Le = Le.next = e, Le;
    }
    function at() {
      if (Ie === null) {
        var e = je.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = Ie.next;
      var t = Le === null ? je.memoizedState : Le.next;
      if (t !== null) Le = t, Ie = e;
      else {
        if (e === null) throw Error(u(310));
        Ie = e, e = { memoizedState: Ie.memoizedState, baseState: Ie.baseState, baseQueue: Ie.baseQueue, queue: Ie.queue, next: null }, Le === null ? je.memoizedState = Le = e : Le = Le.next = e;
      }
      return Le;
    }
    function wr(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function ns(e) {
      var t = at(), n = t.queue;
      if (n === null) throw Error(u(311));
      n.lastRenderedReducer = e;
      var r = Ie, i = r.baseQueue, s = n.pending;
      if (s !== null) {
        if (i !== null) {
          var o = i.next;
          i.next = s.next, s.next = o;
        }
        r.baseQueue = i = s, n.pending = null;
      }
      if (i !== null) {
        s = i.next, r = r.baseState;
        var c = o = null, d = null, v = s;
        do {
          var S = v.lane;
          if ((fn & S) === S) d !== null && (d = d.next = { lane: 0, action: v.action, hasEagerState: v.hasEagerState, eagerState: v.eagerState, next: null }), r = v.hasEagerState ? v.eagerState : e(r, v.action);
          else {
            var N = { lane: S, action: v.action, hasEagerState: v.hasEagerState, eagerState: v.eagerState, next: null };
            d === null ? (c = d = N, o = r) : d = d.next = N, je.lanes |= S, pn |= S;
          }
          v = v.next;
        } while (v !== null && v !== s);
        d === null ? o = r : d.next = c, pt(r, t.memoizedState) || (Ye = true), t.memoizedState = r, t.baseState = o, t.baseQueue = d, n.lastRenderedState = r;
      }
      if (e = n.interleaved, e !== null) {
        i = e;
        do
          s = i.lane, je.lanes |= s, pn |= s, i = i.next;
        while (i !== e);
      } else i === null && (n.lanes = 0);
      return [t.memoizedState, n.dispatch];
    }
    function rs(e) {
      var t = at(), n = t.queue;
      if (n === null) throw Error(u(311));
      n.lastRenderedReducer = e;
      var r = n.dispatch, i = n.pending, s = t.memoizedState;
      if (i !== null) {
        n.pending = null;
        var o = i = i.next;
        do
          s = e(s, o.action), o = o.next;
        while (o !== i);
        pt(s, t.memoizedState) || (Ye = true), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s;
      }
      return [s, r];
    }
    function Pa() {
    }
    function La(e, t) {
      var n = je, r = at(), i = t(), s = !pt(r.memoizedState, i);
      if (s && (r.memoizedState = i, Ye = true), r = r.queue, ls(Da.bind(null, n, r, e), [e]), r.getSnapshot !== t || s || Le !== null && Le.memoizedState.tag & 1) {
        if (n.flags |= 2048, kr(9, Ma.bind(null, n, r, i, t), void 0, null), ze === null) throw Error(u(349));
        (fn & 30) !== 0 || za(n, t, i);
      }
      return i;
    }
    function za(e, t, n) {
      e.flags |= 16384, e = { getSnapshot: t, value: n }, t = je.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, je.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
    }
    function Ma(e, t, n, r) {
      t.value = n, t.getSnapshot = r, Ra(t) && Ta(e);
    }
    function Da(e, t, n) {
      return n(function() {
        Ra(t) && Ta(e);
      });
    }
    function Ra(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !pt(e, n);
      } catch {
        return true;
      }
    }
    function Ta(e) {
      var t = Rt(e, 1);
      t !== null && xt(t, e, 1, -1);
    }
    function Fa(e) {
      var t = _t();
      return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: wr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Ed.bind(null, je, e), [t.memoizedState, e];
    }
    function kr(e, t, n, r) {
      return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = je.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, je.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
    }
    function Oa() {
      return at().memoizedState;
    }
    function xl(e, t, n, r) {
      var i = _t();
      je.flags |= e, i.memoizedState = kr(1 | t, n, void 0, r === void 0 ? null : r);
    }
    function yl(e, t, n, r) {
      var i = at();
      r = r === void 0 ? null : r;
      var s = void 0;
      if (Ie !== null) {
        var o = Ie.memoizedState;
        if (s = o.destroy, r !== null && bi(r, o.deps)) {
          i.memoizedState = kr(t, n, s, r);
          return;
        }
      }
      je.flags |= e, i.memoizedState = kr(1 | t, n, s, r);
    }
    function $a(e, t) {
      return xl(8390656, 8, e, t);
    }
    function ls(e, t) {
      return yl(2048, 8, e, t);
    }
    function Va(e, t) {
      return yl(4, 2, e, t);
    }
    function Ba(e, t) {
      return yl(4, 4, e, t);
    }
    function Aa(e, t) {
      if (typeof t == "function") return e = e(), t(e), function() {
        t(null);
      };
      if (t != null) return e = e(), t.current = e, function() {
        t.current = null;
      };
    }
    function Ua(e, t, n) {
      return n = n != null ? n.concat([e]) : null, yl(4, 4, Aa.bind(null, t, e), n);
    }
    function is() {
    }
    function Qa(e, t) {
      var n = at();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      return r !== null && t !== null && bi(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
    }
    function Wa(e, t) {
      var n = at();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      return r !== null && t !== null && bi(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
    }
    function Ha(e, t, n) {
      return (fn & 21) === 0 ? (e.baseState && (e.baseState = false, Ye = true), e.memoizedState = n) : (pt(n, t) || (n = wo(), je.lanes |= n, pn |= n, e.baseState = true), t);
    }
    function Nd(e, t) {
      var n = ce;
      ce = n !== 0 && 4 > n ? n : 4, e(true);
      var r = Ji.transition;
      Ji.transition = {};
      try {
        e(false), t();
      } finally {
        ce = n, Ji.transition = r;
      }
    }
    function Ga() {
      return at().memoizedState;
    }
    function Cd(e, t, n) {
      var r = bt(e);
      if (n = { lane: r, action: n, hasEagerState: false, eagerState: null, next: null }, Ka(e)) Ya(t, n);
      else if (n = Na(e, t, n, r), n !== null) {
        var i = Qe();
        xt(n, e, r, i), Xa(n, t, r);
      }
    }
    function Ed(e, t, n) {
      var r = bt(e), i = { lane: r, action: n, hasEagerState: false, eagerState: null, next: null };
      if (Ka(e)) Ya(t, i);
      else {
        var s = e.alternate;
        if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null)) try {
          var o = t.lastRenderedState, c = s(o, n);
          if (i.hasEagerState = true, i.eagerState = c, pt(c, o)) {
            var d = t.interleaved;
            d === null ? (i.next = i, Gi(t)) : (i.next = d.next, d.next = i), t.interleaved = i;
            return;
          }
        } catch {
        } finally {
        }
        n = Na(e, t, i, r), n !== null && (i = Qe(), xt(n, e, r, i), Xa(n, t, r));
      }
    }
    function Ka(e) {
      var t = e.alternate;
      return e === je || t !== null && t === je;
    }
    function Ya(e, t) {
      yr = vl = true;
      var n = e.pending;
      n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
    }
    function Xa(e, t, n) {
      if ((n & 4194240) !== 0) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, oi(e, n);
      }
    }
    var jl = { readContext: ot, useCallback: $e, useContext: $e, useEffect: $e, useImperativeHandle: $e, useInsertionEffect: $e, useLayoutEffect: $e, useMemo: $e, useReducer: $e, useRef: $e, useState: $e, useDebugValue: $e, useDeferredValue: $e, useTransition: $e, useMutableSource: $e, useSyncExternalStore: $e, useId: $e, unstable_isNewReconciler: false }, _d = { readContext: ot, useCallback: function(e, t) {
      return _t().memoizedState = [e, t === void 0 ? null : t], e;
    }, useContext: ot, useEffect: $a, useImperativeHandle: function(e, t, n) {
      return n = n != null ? n.concat([e]) : null, xl(4194308, 4, Aa.bind(null, t, e), n);
    }, useLayoutEffect: function(e, t) {
      return xl(4194308, 4, e, t);
    }, useInsertionEffect: function(e, t) {
      return xl(4, 2, e, t);
    }, useMemo: function(e, t) {
      var n = _t();
      return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
    }, useReducer: function(e, t, n) {
      var r = _t();
      return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Cd.bind(null, je, e), [r.memoizedState, e];
    }, useRef: function(e) {
      var t = _t();
      return e = { current: e }, t.memoizedState = e;
    }, useState: Fa, useDebugValue: is, useDeferredValue: function(e) {
      return _t().memoizedState = e;
    }, useTransition: function() {
      var e = Fa(false), t = e[0];
      return e = Nd.bind(null, e[1]), _t().memoizedState = e, [t, e];
    }, useMutableSource: function() {
    }, useSyncExternalStore: function(e, t, n) {
      var r = je, i = _t();
      if (ve) {
        if (n === void 0) throw Error(u(407));
        n = n();
      } else {
        if (n = t(), ze === null) throw Error(u(349));
        (fn & 30) !== 0 || za(r, t, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return i.queue = s, $a(Da.bind(null, r, s, e), [e]), r.flags |= 2048, kr(9, Ma.bind(null, r, s, n, t), void 0, null), n;
    }, useId: function() {
      var e = _t(), t = ze.identifierPrefix;
      if (ve) {
        var n = Dt, r = Mt;
        n = (r & ~(1 << 32 - ft(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = jr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
      } else n = Sd++, t = ":" + t + "r" + n.toString(32) + ":";
      return e.memoizedState = t;
    }, unstable_isNewReconciler: false }, Id = { readContext: ot, useCallback: Qa, useContext: ot, useEffect: ls, useImperativeHandle: Ua, useInsertionEffect: Va, useLayoutEffect: Ba, useMemo: Wa, useReducer: ns, useRef: Oa, useState: function() {
      return ns(wr);
    }, useDebugValue: is, useDeferredValue: function(e) {
      var t = at();
      return Ha(t, Ie.memoizedState, e);
    }, useTransition: function() {
      var e = ns(wr)[0], t = at().memoizedState;
      return [e, t];
    }, useMutableSource: Pa, useSyncExternalStore: La, useId: Ga, unstable_isNewReconciler: false }, Pd = { readContext: ot, useCallback: Qa, useContext: ot, useEffect: ls, useImperativeHandle: Ua, useInsertionEffect: Va, useLayoutEffect: Ba, useMemo: Wa, useReducer: rs, useRef: Oa, useState: function() {
      return rs(wr);
    }, useDebugValue: is, useDeferredValue: function(e) {
      var t = at();
      return Ie === null ? t.memoizedState = e : Ha(t, Ie.memoizedState, e);
    }, useTransition: function() {
      var e = rs(wr)[0], t = at().memoizedState;
      return [e, t];
    }, useMutableSource: Pa, useSyncExternalStore: La, useId: Ga, unstable_isNewReconciler: false };
    function mt(e, t) {
      if (e && e.defaultProps) {
        t = F({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t;
      }
      return t;
    }
    function ss(e, t, n, r) {
      t = e.memoizedState, n = n(r, t), n = n == null ? t : F({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
    }
    var wl = { isMounted: function(e) {
      return (e = e._reactInternals) ? ln(e) === e : false;
    }, enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var r = Qe(), i = bt(e), s = Tt(r, i);
      s.payload = t, n != null && (s.callback = n), t = Xt(e, s, i), t !== null && (xt(t, e, i, r), pl(t, e, i));
    }, enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var r = Qe(), i = bt(e), s = Tt(r, i);
      s.tag = 1, s.payload = t, n != null && (s.callback = n), t = Xt(e, s, i), t !== null && (xt(t, e, i, r), pl(t, e, i));
    }, enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = Qe(), r = bt(e), i = Tt(n, r);
      i.tag = 2, t != null && (i.callback = t), t = Xt(e, i, r), t !== null && (xt(t, e, r, n), pl(t, e, r));
    } };
    function Za(e, t, n, r, i, s, o) {
      return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, o) : t.prototype && t.prototype.isPureReactComponent ? !ar(n, r) || !ar(i, s) : true;
    }
    function qa(e, t, n) {
      var r = false, i = Gt, s = t.contextType;
      return typeof s == "object" && s !== null ? s = ot(s) : (i = Ke(t) ? on : Oe.current, r = t.contextTypes, s = (r = r != null) ? zn(e, i) : Gt), t = new t(n, s), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = wl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = s), t;
    }
    function Ja(e, t, n, r) {
      e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && wl.enqueueReplaceState(t, t.state, null);
    }
    function os(e, t, n, r) {
      var i = e.stateNode;
      i.props = n, i.state = e.memoizedState, i.refs = {}, Ki(e);
      var s = t.contextType;
      typeof s == "object" && s !== null ? i.context = ot(s) : (s = Ke(t) ? on : Oe.current, i.context = zn(e, s)), i.state = e.memoizedState, s = t.getDerivedStateFromProps, typeof s == "function" && (ss(e, t, s, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && wl.enqueueReplaceState(i, i.state, null), hl(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
    }
    function Vn(e, t) {
      try {
        var n = "", r = t;
        do
          n += ne(r), r = r.return;
        while (r);
        var i = n;
      } catch (s) {
        i = `
Error generating stack: ` + s.message + `
` + s.stack;
      }
      return { value: e, source: t, stack: i, digest: null };
    }
    function as(e, t, n) {
      return { value: e, source: null, stack: n ?? null, digest: t ?? null };
    }
    function us(e, t) {
      try {
        console.error(t.value);
      } catch (n) {
        setTimeout(function() {
          throw n;
        });
      }
    }
    var Ld = typeof WeakMap == "function" ? WeakMap : Map;
    function ba(e, t, n) {
      n = Tt(-1, n), n.tag = 3, n.payload = { element: null };
      var r = t.value;
      return n.callback = function() {
        Il || (Il = true, Ns = r), us(e, t);
      }, n;
    }
    function eu(e, t, n) {
      n = Tt(-1, n), n.tag = 3;
      var r = e.type.getDerivedStateFromError;
      if (typeof r == "function") {
        var i = t.value;
        n.payload = function() {
          return r(i);
        }, n.callback = function() {
          us(e, t);
        };
      }
      var s = e.stateNode;
      return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
        us(e, t), typeof r != "function" && (qt === null ? qt = /* @__PURE__ */ new Set([this]) : qt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
      }), n;
    }
    function tu(e, t, n) {
      var r = e.pingCache;
      if (r === null) {
        r = e.pingCache = new Ld();
        var i = /* @__PURE__ */ new Set();
        r.set(t, i);
      } else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
      i.has(n) || (i.add(n), e = Wd.bind(null, e, t, n), t.then(e, e));
    }
    function nu(e) {
      do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : true), t) return e;
        e = e.return;
      } while (e !== null);
      return null;
    }
    function ru(e, t, n, r, i) {
      return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Tt(-1, 1), t.tag = 2, Xt(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = i, e);
    }
    var zd = B.ReactCurrentOwner, Ye = false;
    function Ue(e, t, n, r) {
      t.child = e === null ? Sa(t, null, n, r) : Tn(t, e.child, n, r);
    }
    function lu(e, t, n, r, i) {
      n = n.render;
      var s = t.ref;
      return On(t, i), r = es(e, t, n, r, s, i), n = ts(), e !== null && !Ye ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Ft(e, t, i)) : (ve && n && Oi(t), t.flags |= 1, Ue(e, t, r, i), t.child);
    }
    function iu(e, t, n, r, i) {
      if (e === null) {
        var s = n.type;
        return typeof s == "function" && !zs(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = s, su(e, t, s, r, i)) : (e = Rl(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
      }
      if (s = e.child, (e.lanes & i) === 0) {
        var o = s.memoizedProps;
        if (n = n.compare, n = n !== null ? n : ar, n(o, r) && e.ref === t.ref) return Ft(e, t, i);
      }
      return t.flags |= 1, e = tn(s, r), e.ref = t.ref, e.return = t, t.child = e;
    }
    function su(e, t, n, r, i) {
      if (e !== null) {
        var s = e.memoizedProps;
        if (ar(s, r) && e.ref === t.ref) if (Ye = false, t.pendingProps = r = s, (e.lanes & i) !== 0) (e.flags & 131072) !== 0 && (Ye = true);
        else return t.lanes = e.lanes, Ft(e, t, i);
      }
      return cs(e, t, n, r, i);
    }
    function ou(e, t, n) {
      var r = t.pendingProps, i = r.children, s = e !== null ? e.memoizedState : null;
      if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, pe(An, rt), rt |= n;
      else {
        if ((n & 1073741824) === 0) return e = s !== null ? s.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, pe(An, rt), rt |= e, null;
        t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = s !== null ? s.baseLanes : n, pe(An, rt), rt |= r;
      }
      else s !== null ? (r = s.baseLanes | n, t.memoizedState = null) : r = n, pe(An, rt), rt |= r;
      return Ue(e, t, i, n), t.child;
    }
    function au(e, t) {
      var n = t.ref;
      (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
    }
    function cs(e, t, n, r, i) {
      var s = Ke(n) ? on : Oe.current;
      return s = zn(t, s), On(t, i), n = es(e, t, n, r, s, i), r = ts(), e !== null && !Ye ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Ft(e, t, i)) : (ve && r && Oi(t), t.flags |= 1, Ue(e, t, n, i), t.child);
    }
    function uu(e, t, n, r, i) {
      if (Ke(n)) {
        var s = true;
        il(t);
      } else s = false;
      if (On(t, i), t.stateNode === null) Sl(e, t), qa(t, n, r), os(t, n, r, i), r = true;
      else if (e === null) {
        var o = t.stateNode, c = t.memoizedProps;
        o.props = c;
        var d = o.context, v = n.contextType;
        typeof v == "object" && v !== null ? v = ot(v) : (v = Ke(n) ? on : Oe.current, v = zn(t, v));
        var S = n.getDerivedStateFromProps, N = typeof S == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        N || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (c !== r || d !== v) && Ja(t, o, r, v), Yt = false;
        var j = t.memoizedState;
        o.state = j, hl(t, r, o, i), d = t.memoizedState, c !== r || j !== d || Ge.current || Yt ? (typeof S == "function" && (ss(t, n, S, r), d = t.memoizedState), (c = Yt || Za(t, n, c, r, j, d, v)) ? (N || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = d), o.props = r, o.state = d, o.context = v, r = c) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = false);
      } else {
        o = t.stateNode, Ca(e, t), c = t.memoizedProps, v = t.type === t.elementType ? c : mt(t.type, c), o.props = v, N = t.pendingProps, j = o.context, d = n.contextType, typeof d == "object" && d !== null ? d = ot(d) : (d = Ke(n) ? on : Oe.current, d = zn(t, d));
        var M = n.getDerivedStateFromProps;
        (S = typeof M == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (c !== N || j !== d) && Ja(t, o, r, d), Yt = false, j = t.memoizedState, o.state = j, hl(t, r, o, i);
        var O = t.memoizedState;
        c !== N || j !== O || Ge.current || Yt ? (typeof M == "function" && (ss(t, n, M, r), O = t.memoizedState), (v = Yt || Za(t, n, v, r, j, O, d) || false) ? (S || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, O, d), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, O, d)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || c === e.memoizedProps && j === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && j === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = O), o.props = r, o.state = O, o.context = d, r = v) : (typeof o.componentDidUpdate != "function" || c === e.memoizedProps && j === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && j === e.memoizedState || (t.flags |= 1024), r = false);
      }
      return ds(e, t, n, r, s, i);
    }
    function ds(e, t, n, r, i, s) {
      au(e, t);
      var o = (t.flags & 128) !== 0;
      if (!r && !o) return i && ha(t, n, false), Ft(e, t, s);
      r = t.stateNode, zd.current = t;
      var c = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
      return t.flags |= 1, e !== null && o ? (t.child = Tn(t, e.child, null, s), t.child = Tn(t, null, c, s)) : Ue(e, t, c, s), t.memoizedState = r.state, i && ha(t, n, true), t.child;
    }
    function cu(e) {
      var t = e.stateNode;
      t.pendingContext ? fa(e, t.pendingContext, t.pendingContext !== t.context) : t.context && fa(e, t.context, false), Yi(e, t.containerInfo);
    }
    function du(e, t, n, r, i) {
      return Rn(), Ai(i), t.flags |= 256, Ue(e, t, n, r), t.child;
    }
    var fs = { dehydrated: null, treeContext: null, retryLane: 0 };
    function ps(e) {
      return { baseLanes: e, cachePool: null, transitions: null };
    }
    function fu(e, t, n) {
      var r = t.pendingProps, i = ye.current, s = false, o = (t.flags & 128) !== 0, c;
      if ((c = o) || (c = e !== null && e.memoizedState === null ? false : (i & 2) !== 0), c ? (s = true, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), pe(ye, i & 1), e === null) return Bi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (o = r.children, e = r.fallback, s ? (r = t.mode, s = t.child, o = { mode: "hidden", children: o }, (r & 1) === 0 && s !== null ? (s.childLanes = 0, s.pendingProps = o) : s = Tl(o, r, 0, null), e = vn(e, r, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = ps(n), t.memoizedState = fs, e) : hs(t, o));
      if (i = e.memoizedState, i !== null && (c = i.dehydrated, c !== null)) return Md(e, t, o, r, c, i, n);
      if (s) {
        s = r.fallback, o = t.mode, i = e.child, c = i.sibling;
        var d = { mode: "hidden", children: r.children };
        return (o & 1) === 0 && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = d, t.deletions = null) : (r = tn(i, d), r.subtreeFlags = i.subtreeFlags & 14680064), c !== null ? s = tn(c, s) : (s = vn(s, o, n, null), s.flags |= 2), s.return = t, r.return = t, r.sibling = s, t.child = r, r = s, s = t.child, o = e.child.memoizedState, o = o === null ? ps(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, s.memoizedState = o, s.childLanes = e.childLanes & ~n, t.memoizedState = fs, r;
      }
      return s = e.child, e = s.sibling, r = tn(s, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
    }
    function hs(e, t) {
      return t = Tl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
    }
    function kl(e, t, n, r) {
      return r !== null && Ai(r), Tn(t, e.child, null, n), e = hs(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
    }
    function Md(e, t, n, r, i, s, o) {
      if (n) return t.flags & 256 ? (t.flags &= -257, r = as(Error(u(422))), kl(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (s = r.fallback, i = t.mode, r = Tl({ mode: "visible", children: r.children }, i, 0, null), s = vn(s, i, o, null), s.flags |= 2, r.return = t, s.return = t, r.sibling = s, t.child = r, (t.mode & 1) !== 0 && Tn(t, e.child, null, o), t.child.memoizedState = ps(o), t.memoizedState = fs, s);
      if ((t.mode & 1) === 0) return kl(e, t, o, null);
      if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset, r) var c = r.dgst;
        return r = c, s = Error(u(419)), r = as(s, r, void 0), kl(e, t, o, r);
      }
      if (c = (o & e.childLanes) !== 0, Ye || c) {
        if (r = ze, r !== null) {
          switch (o & -o) {
            case 4:
              i = 2;
              break;
            case 16:
              i = 8;
              break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              i = 32;
              break;
            case 536870912:
              i = 268435456;
              break;
            default:
              i = 0;
          }
          i = (i & (r.suspendedLanes | o)) !== 0 ? 0 : i, i !== 0 && i !== s.retryLane && (s.retryLane = i, Rt(e, i), xt(r, e, i, -1));
        }
        return Ls(), r = as(Error(u(421))), kl(e, t, o, r);
      }
      return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Hd.bind(null, e), i._reactRetry = t, null) : (e = s.treeContext, nt = Wt(i.nextSibling), tt = t, ve = true, ht = null, e !== null && (it[st++] = Mt, it[st++] = Dt, it[st++] = an, Mt = e.id, Dt = e.overflow, an = t), t = hs(t, r.children), t.flags |= 4096, t);
    }
    function pu(e, t, n) {
      e.lanes |= t;
      var r = e.alternate;
      r !== null && (r.lanes |= t), Hi(e.return, t, n);
    }
    function ms(e, t, n, r, i) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailMode = i);
    }
    function hu(e, t, n) {
      var r = t.pendingProps, i = r.revealOrder, s = r.tail;
      if (Ue(e, t, r.children, n), r = ye.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
      else {
        if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && pu(e, n, t);
          else if (e.tag === 19) pu(e, n, t);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
        r &= 1;
      }
      if (pe(ye, r), (t.mode & 1) === 0) t.memoizedState = null;
      else switch (i) {
        case "forwards":
          for (n = t.child, i = null; n !== null; ) e = n.alternate, e !== null && ml(e) === null && (i = n), n = n.sibling;
          n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), ms(t, false, i, n, s);
          break;
        case "backwards":
          for (n = null, i = t.child, t.child = null; i !== null; ) {
            if (e = i.alternate, e !== null && ml(e) === null) {
              t.child = i;
              break;
            }
            e = i.sibling, i.sibling = n, n = i, i = e;
          }
          ms(t, true, n, null, s);
          break;
        case "together":
          ms(t, false, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function Sl(e, t) {
      (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
    }
    function Ft(e, t, n) {
      if (e !== null && (t.dependencies = e.dependencies), pn |= t.lanes, (n & t.childLanes) === 0) return null;
      if (e !== null && t.child !== e.child) throw Error(u(153));
      if (t.child !== null) {
        for (e = t.child, n = tn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = tn(e, e.pendingProps), n.return = t;
        n.sibling = null;
      }
      return t.child;
    }
    function Dd(e, t, n) {
      switch (t.tag) {
        case 3:
          cu(t), Rn();
          break;
        case 5:
          Ia(t);
          break;
        case 1:
          Ke(t.type) && il(t);
          break;
        case 4:
          Yi(t, t.stateNode.containerInfo);
          break;
        case 10:
          var r = t.type._context, i = t.memoizedProps.value;
          pe(dl, r._currentValue), r._currentValue = i;
          break;
        case 13:
          if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (pe(ye, ye.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? fu(e, t, n) : (pe(ye, ye.current & 1), e = Ft(e, t, n), e !== null ? e.sibling : null);
          pe(ye, ye.current & 1);
          break;
        case 19:
          if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
            if (r) return hu(e, t, n);
            t.flags |= 128;
          }
          if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), pe(ye, ye.current), r) break;
          return null;
        case 22:
        case 23:
          return t.lanes = 0, ou(e, t, n);
      }
      return Ft(e, t, n);
    }
    var mu, gs, gu, vu;
    mu = function(e, t) {
      for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === t) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === t) return;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }, gs = function() {
    }, gu = function(e, t, n, r) {
      var i = e.memoizedProps;
      if (i !== r) {
        e = t.stateNode, dn(Et.current);
        var s = null;
        switch (n) {
          case "input":
            i = Hl(e, i), r = Hl(e, r), s = [];
            break;
          case "select":
            i = F({}, i, { value: void 0 }), r = F({}, r, { value: void 0 }), s = [];
            break;
          case "textarea":
            i = Yl(e, i), r = Yl(e, r), s = [];
            break;
          default:
            typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = nl);
        }
        Zl(n, r);
        var o;
        n = null;
        for (v in i) if (!r.hasOwnProperty(v) && i.hasOwnProperty(v) && i[v] != null) if (v === "style") {
          var c = i[v];
          for (o in c) c.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
        } else v !== "dangerouslySetInnerHTML" && v !== "children" && v !== "suppressContentEditableWarning" && v !== "suppressHydrationWarning" && v !== "autoFocus" && (x.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
        for (v in r) {
          var d = r[v];
          if (c = i != null ? i[v] : void 0, r.hasOwnProperty(v) && d !== c && (d != null || c != null)) if (v === "style") if (c) {
            for (o in c) !c.hasOwnProperty(o) || d && d.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
            for (o in d) d.hasOwnProperty(o) && c[o] !== d[o] && (n || (n = {}), n[o] = d[o]);
          } else n || (s || (s = []), s.push(v, n)), n = d;
          else v === "dangerouslySetInnerHTML" ? (d = d ? d.__html : void 0, c = c ? c.__html : void 0, d != null && c !== d && (s = s || []).push(v, d)) : v === "children" ? typeof d != "string" && typeof d != "number" || (s = s || []).push(v, "" + d) : v !== "suppressContentEditableWarning" && v !== "suppressHydrationWarning" && (x.hasOwnProperty(v) ? (d != null && v === "onScroll" && he("scroll", e), s || c === d || (s = [])) : (s = s || []).push(v, d));
        }
        n && (s = s || []).push("style", n);
        var v = s;
        (t.updateQueue = v) && (t.flags |= 4);
      }
    }, vu = function(e, t, n, r) {
      n !== r && (t.flags |= 4);
    };
    function Sr(e, t) {
      if (!ve) switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
          n === null ? e.tail = null : n.sibling = null;
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
          r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
      }
    }
    function Ve(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
      if (t) for (var i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
      else for (i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
      return e.subtreeFlags |= r, e.childLanes = n, t;
    }
    function Rd(e, t, n) {
      var r = t.pendingProps;
      switch ($i(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return Ve(t), null;
        case 1:
          return Ke(t.type) && ll(), Ve(t), null;
        case 3:
          return r = t.stateNode, $n(), me(Ge), me(Oe), qi(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ul(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, ht !== null && (_s(ht), ht = null))), gs(e, t), Ve(t), null;
        case 5:
          Xi(t);
          var i = dn(xr.current);
          if (n = t.type, e !== null && t.stateNode != null) gu(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(u(166));
              return Ve(t), null;
            }
            if (e = dn(Et.current), ul(t)) {
              r = t.stateNode, n = t.type;
              var s = t.memoizedProps;
              switch (r[Ct] = t, r[pr] = s, e = (t.mode & 1) !== 0, n) {
                case "dialog":
                  he("cancel", r), he("close", r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  he("load", r);
                  break;
                case "video":
                case "audio":
                  for (i = 0; i < cr.length; i++) he(cr[i], r);
                  break;
                case "source":
                  he("error", r);
                  break;
                case "img":
                case "image":
                case "link":
                  he("error", r), he("load", r);
                  break;
                case "details":
                  he("toggle", r);
                  break;
                case "input":
                  Zs(r, s), he("invalid", r);
                  break;
                case "select":
                  r._wrapperState = { wasMultiple: !!s.multiple }, he("invalid", r);
                  break;
                case "textarea":
                  bs(r, s), he("invalid", r);
              }
              Zl(n, s), i = null;
              for (var o in s) if (s.hasOwnProperty(o)) {
                var c = s[o];
                o === "children" ? typeof c == "string" ? r.textContent !== c && (s.suppressHydrationWarning !== true && tl(r.textContent, c, e), i = ["children", c]) : typeof c == "number" && r.textContent !== "" + c && (s.suppressHydrationWarning !== true && tl(r.textContent, c, e), i = ["children", "" + c]) : x.hasOwnProperty(o) && c != null && o === "onScroll" && he("scroll", r);
              }
              switch (n) {
                case "input":
                  Mr(r), Js(r, s, true);
                  break;
                case "textarea":
                  Mr(r), to(r);
                  break;
                case "select":
                case "option":
                  break;
                default:
                  typeof s.onClick == "function" && (r.onclick = nl);
              }
              r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
            } else {
              o = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = no(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = true : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[Ct] = t, e[pr] = r, mu(e, t, false, false), t.stateNode = e;
              e: {
                switch (o = ql(n, r), n) {
                  case "dialog":
                    he("cancel", e), he("close", e), i = r;
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    he("load", e), i = r;
                    break;
                  case "video":
                  case "audio":
                    for (i = 0; i < cr.length; i++) he(cr[i], e);
                    i = r;
                    break;
                  case "source":
                    he("error", e), i = r;
                    break;
                  case "img":
                  case "image":
                  case "link":
                    he("error", e), he("load", e), i = r;
                    break;
                  case "details":
                    he("toggle", e), i = r;
                    break;
                  case "input":
                    Zs(e, r), i = Hl(e, r), he("invalid", e);
                    break;
                  case "option":
                    i = r;
                    break;
                  case "select":
                    e._wrapperState = { wasMultiple: !!r.multiple }, i = F({}, r, { value: void 0 }), he("invalid", e);
                    break;
                  case "textarea":
                    bs(e, r), i = Yl(e, r), he("invalid", e);
                    break;
                  default:
                    i = r;
                }
                Zl(n, i), c = i;
                for (s in c) if (c.hasOwnProperty(s)) {
                  var d = c[s];
                  s === "style" ? io(e, d) : s === "dangerouslySetInnerHTML" ? (d = d ? d.__html : void 0, d != null && ro(e, d)) : s === "children" ? typeof d == "string" ? (n !== "textarea" || d !== "") && Hn(e, d) : typeof d == "number" && Hn(e, "" + d) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (x.hasOwnProperty(s) ? d != null && s === "onScroll" && he("scroll", e) : d != null && oe(e, s, d, o));
                }
                switch (n) {
                  case "input":
                    Mr(e), Js(e, r, false);
                    break;
                  case "textarea":
                    Mr(e), to(e);
                    break;
                  case "option":
                    r.value != null && e.setAttribute("value", "" + ue(r.value));
                    break;
                  case "select":
                    e.multiple = !!r.multiple, s = r.value, s != null ? yn(e, !!r.multiple, s, false) : r.defaultValue != null && yn(e, !!r.multiple, r.defaultValue, true);
                    break;
                  default:
                    typeof i.onClick == "function" && (e.onclick = nl);
                }
                switch (n) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    r = !!r.autoFocus;
                    break e;
                  case "img":
                    r = true;
                    break e;
                  default:
                    r = false;
                }
              }
              r && (t.flags |= 4);
            }
            t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
          }
          return Ve(t), null;
        case 6:
          if (e && t.stateNode != null) vu(e, t, e.memoizedProps, r);
          else {
            if (typeof r != "string" && t.stateNode === null) throw Error(u(166));
            if (n = dn(xr.current), dn(Et.current), ul(t)) {
              if (r = t.stateNode, n = t.memoizedProps, r[Ct] = t, (s = r.nodeValue !== n) && (e = tt, e !== null)) switch (e.tag) {
                case 3:
                  tl(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== true && tl(r.nodeValue, n, (e.mode & 1) !== 0);
              }
              s && (t.flags |= 4);
            } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ct] = t, t.stateNode = r;
          }
          return Ve(t), null;
        case 13:
          if (me(ye), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (ve && nt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) ja(), Rn(), t.flags |= 98560, s = false;
            else if (s = ul(t), r !== null && r.dehydrated !== null) {
              if (e === null) {
                if (!s) throw Error(u(318));
                if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(u(317));
                s[Ct] = t;
              } else Rn(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
              Ve(t), s = false;
            } else ht !== null && (_s(ht), ht = null), s = true;
            if (!s) return t.flags & 65536 ? t : null;
          }
          return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (ye.current & 1) !== 0 ? Pe === 0 && (Pe = 3) : Ls())), t.updateQueue !== null && (t.flags |= 4), Ve(t), null);
        case 4:
          return $n(), gs(e, t), e === null && dr(t.stateNode.containerInfo), Ve(t), null;
        case 10:
          return Wi(t.type._context), Ve(t), null;
        case 17:
          return Ke(t.type) && ll(), Ve(t), null;
        case 19:
          if (me(ye), s = t.memoizedState, s === null) return Ve(t), null;
          if (r = (t.flags & 128) !== 0, o = s.rendering, o === null) if (r) Sr(s, false);
          else {
            if (Pe !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
              if (o = ml(e), o !== null) {
                for (t.flags |= 128, Sr(s, false), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) s = n, e = r, s.flags &= 14680066, o = s.alternate, o === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = o.childLanes, s.lanes = o.lanes, s.child = o.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = o.memoizedProps, s.memoizedState = o.memoizedState, s.updateQueue = o.updateQueue, s.type = o.type, e = o.dependencies, s.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return pe(ye, ye.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
            s.tail !== null && Ne() > Un && (t.flags |= 128, r = true, Sr(s, false), t.lanes = 4194304);
          }
          else {
            if (!r) if (e = ml(o), e !== null) {
              if (t.flags |= 128, r = true, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Sr(s, true), s.tail === null && s.tailMode === "hidden" && !o.alternate && !ve) return Ve(t), null;
            } else 2 * Ne() - s.renderingStartTime > Un && n !== 1073741824 && (t.flags |= 128, r = true, Sr(s, false), t.lanes = 4194304);
            s.isBackwards ? (o.sibling = t.child, t.child = o) : (n = s.last, n !== null ? n.sibling = o : t.child = o, s.last = o);
          }
          return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = Ne(), t.sibling = null, n = ye.current, pe(ye, r ? n & 1 | 2 : n & 1), t) : (Ve(t), null);
        case 22:
        case 23:
          return Ps(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (rt & 1073741824) !== 0 && (Ve(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ve(t), null;
        case 24:
          return null;
        case 25:
          return null;
      }
      throw Error(u(156, t.tag));
    }
    function Td(e, t) {
      switch ($i(t), t.tag) {
        case 1:
          return Ke(t.type) && ll(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
          return $n(), me(Ge), me(Oe), qi(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
          return Xi(t), null;
        case 13:
          if (me(ye), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null) throw Error(u(340));
            Rn();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
          return me(ye), null;
        case 4:
          return $n(), null;
        case 10:
          return Wi(t.type._context), null;
        case 22:
        case 23:
          return Ps(), null;
        case 24:
          return null;
        default:
          return null;
      }
    }
    var Nl = false, Be = false, Fd = typeof WeakSet == "function" ? WeakSet : Set, T = null;
    function Bn(e, t) {
      var n = e.ref;
      if (n !== null) if (typeof n == "function") try {
        n(null);
      } catch (r) {
        ke(e, t, r);
      }
      else n.current = null;
    }
    function vs(e, t, n) {
      try {
        n();
      } catch (r) {
        ke(e, t, r);
      }
    }
    var xu = false;
    function Od(e, t) {
      if (Pi = Wr, e = Zo(), wi(e)) {
        if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
        else e: {
          n = (n = e.ownerDocument) && n.defaultView || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var i = r.anchorOffset, s = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, s.nodeType;
            } catch {
              n = null;
              break e;
            }
            var o = 0, c = -1, d = -1, v = 0, S = 0, N = e, j = null;
            t: for (; ; ) {
              for (var M; N !== n || i !== 0 && N.nodeType !== 3 || (c = o + i), N !== s || r !== 0 && N.nodeType !== 3 || (d = o + r), N.nodeType === 3 && (o += N.nodeValue.length), (M = N.firstChild) !== null; ) j = N, N = M;
              for (; ; ) {
                if (N === e) break t;
                if (j === n && ++v === i && (c = o), j === s && ++S === r && (d = o), (M = N.nextSibling) !== null) break;
                N = j, j = N.parentNode;
              }
              N = M;
            }
            n = c === -1 || d === -1 ? null : { start: c, end: d };
          } else n = null;
        }
        n = n || { start: 0, end: 0 };
      } else n = null;
      for (Li = { focusedElem: e, selectionRange: n }, Wr = false, T = t; T !== null; ) if (t = T, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, T = e;
      else for (; T !== null; ) {
        t = T;
        try {
          var O = t.alternate;
          if ((t.flags & 1024) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              break;
            case 1:
              if (O !== null) {
                var $ = O.memoizedProps, Ce = O.memoizedState, m = t.stateNode, f = m.getSnapshotBeforeUpdate(t.elementType === t.type ? $ : mt(t.type, $), Ce);
                m.__reactInternalSnapshotBeforeUpdate = f;
              }
              break;
            case 3:
              var g = t.stateNode.containerInfo;
              g.nodeType === 1 ? g.textContent = "" : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
              break;
            case 5:
            case 6:
            case 4:
            case 17:
              break;
            default:
              throw Error(u(163));
          }
        } catch (C) {
          ke(t, t.return, C);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, T = e;
          break;
        }
        T = t.return;
      }
      return O = xu, xu = false, O;
    }
    function Nr(e, t, n) {
      var r = t.updateQueue;
      if (r = r !== null ? r.lastEffect : null, r !== null) {
        var i = r = r.next;
        do {
          if ((i.tag & e) === e) {
            var s = i.destroy;
            i.destroy = void 0, s !== void 0 && vs(t, n, s);
          }
          i = i.next;
        } while (i !== r);
      }
    }
    function Cl(e, t) {
      if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
          if ((n.tag & e) === e) {
            var r = n.create;
            n.destroy = r();
          }
          n = n.next;
        } while (n !== t);
      }
    }
    function xs(e) {
      var t = e.ref;
      if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
          case 5:
            e = n;
            break;
          default:
            e = n;
        }
        typeof t == "function" ? t(e) : t.current = e;
      }
    }
    function yu(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, yu(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ct], delete t[pr], delete t[Ri], delete t[yd], delete t[jd])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function ju(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 4;
    }
    function wu(e) {
      e: for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || ju(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function ys(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = nl));
      else if (r !== 4 && (e = e.child, e !== null)) for (ys(e, t, n), e = e.sibling; e !== null; ) ys(e, t, n), e = e.sibling;
    }
    function js(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
      else if (r !== 4 && (e = e.child, e !== null)) for (js(e, t, n), e = e.sibling; e !== null; ) js(e, t, n), e = e.sibling;
    }
    var Te = null, gt = false;
    function Zt(e, t, n) {
      for (n = n.child; n !== null; ) ku(e, t, n), n = n.sibling;
    }
    function ku(e, t, n) {
      if (Nt && typeof Nt.onCommitFiberUnmount == "function") try {
        Nt.onCommitFiberUnmount($r, n);
      } catch {
      }
      switch (n.tag) {
        case 5:
          Be || Bn(n, t);
        case 6:
          var r = Te, i = gt;
          Te = null, Zt(e, t, n), Te = r, gt = i, Te !== null && (gt ? (e = Te, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Te.removeChild(n.stateNode));
          break;
        case 18:
          Te !== null && (gt ? (e = Te, n = n.stateNode, e.nodeType === 8 ? Di(e.parentNode, n) : e.nodeType === 1 && Di(e, n), nr(e)) : Di(Te, n.stateNode));
          break;
        case 4:
          r = Te, i = gt, Te = n.stateNode.containerInfo, gt = true, Zt(e, t, n), Te = r, gt = i;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          if (!Be && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
            i = r = r.next;
            do {
              var s = i, o = s.destroy;
              s = s.tag, o !== void 0 && ((s & 2) !== 0 || (s & 4) !== 0) && vs(n, t, o), i = i.next;
            } while (i !== r);
          }
          Zt(e, t, n);
          break;
        case 1:
          if (!Be && (Bn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
            r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
          } catch (c) {
            ke(n, t, c);
          }
          Zt(e, t, n);
          break;
        case 21:
          Zt(e, t, n);
          break;
        case 22:
          n.mode & 1 ? (Be = (r = Be) || n.memoizedState !== null, Zt(e, t, n), Be = r) : Zt(e, t, n);
          break;
        default:
          Zt(e, t, n);
      }
    }
    function Su(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Fd()), t.forEach(function(r) {
          var i = Gd.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(i, i));
        });
      }
    }
    function vt(e, t) {
      var n = t.deletions;
      if (n !== null) for (var r = 0; r < n.length; r++) {
        var i = n[r];
        try {
          var s = e, o = t, c = o;
          e: for (; c !== null; ) {
            switch (c.tag) {
              case 5:
                Te = c.stateNode, gt = false;
                break e;
              case 3:
                Te = c.stateNode.containerInfo, gt = true;
                break e;
              case 4:
                Te = c.stateNode.containerInfo, gt = true;
                break e;
            }
            c = c.return;
          }
          if (Te === null) throw Error(u(160));
          ku(s, o, i), Te = null, gt = false;
          var d = i.alternate;
          d !== null && (d.return = null), i.return = null;
        } catch (v) {
          ke(i, t, v);
        }
      }
      if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Nu(t, e), t = t.sibling;
    }
    function Nu(e, t) {
      var n = e.alternate, r = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          if (vt(t, e), It(e), r & 4) {
            try {
              Nr(3, e, e.return), Cl(3, e);
            } catch ($) {
              ke(e, e.return, $);
            }
            try {
              Nr(5, e, e.return);
            } catch ($) {
              ke(e, e.return, $);
            }
          }
          break;
        case 1:
          vt(t, e), It(e), r & 512 && n !== null && Bn(n, n.return);
          break;
        case 5:
          if (vt(t, e), It(e), r & 512 && n !== null && Bn(n, n.return), e.flags & 32) {
            var i = e.stateNode;
            try {
              Hn(i, "");
            } catch ($) {
              ke(e, e.return, $);
            }
          }
          if (r & 4 && (i = e.stateNode, i != null)) {
            var s = e.memoizedProps, o = n !== null ? n.memoizedProps : s, c = e.type, d = e.updateQueue;
            if (e.updateQueue = null, d !== null) try {
              c === "input" && s.type === "radio" && s.name != null && qs(i, s), ql(c, o);
              var v = ql(c, s);
              for (o = 0; o < d.length; o += 2) {
                var S = d[o], N = d[o + 1];
                S === "style" ? io(i, N) : S === "dangerouslySetInnerHTML" ? ro(i, N) : S === "children" ? Hn(i, N) : oe(i, S, N, v);
              }
              switch (c) {
                case "input":
                  Gl(i, s);
                  break;
                case "textarea":
                  eo(i, s);
                  break;
                case "select":
                  var j = i._wrapperState.wasMultiple;
                  i._wrapperState.wasMultiple = !!s.multiple;
                  var M = s.value;
                  M != null ? yn(i, !!s.multiple, M, false) : j !== !!s.multiple && (s.defaultValue != null ? yn(i, !!s.multiple, s.defaultValue, true) : yn(i, !!s.multiple, s.multiple ? [] : "", false));
              }
              i[pr] = s;
            } catch ($) {
              ke(e, e.return, $);
            }
          }
          break;
        case 6:
          if (vt(t, e), It(e), r & 4) {
            if (e.stateNode === null) throw Error(u(162));
            i = e.stateNode, s = e.memoizedProps;
            try {
              i.nodeValue = s;
            } catch ($) {
              ke(e, e.return, $);
            }
          }
          break;
        case 3:
          if (vt(t, e), It(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
            nr(t.containerInfo);
          } catch ($) {
            ke(e, e.return, $);
          }
          break;
        case 4:
          vt(t, e), It(e);
          break;
        case 13:
          vt(t, e), It(e), i = e.child, i.flags & 8192 && (s = i.memoizedState !== null, i.stateNode.isHidden = s, !s || i.alternate !== null && i.alternate.memoizedState !== null || (Ss = Ne())), r & 4 && Su(e);
          break;
        case 22:
          if (S = n !== null && n.memoizedState !== null, e.mode & 1 ? (Be = (v = Be) || S, vt(t, e), Be = v) : vt(t, e), It(e), r & 8192) {
            if (v = e.memoizedState !== null, (e.stateNode.isHidden = v) && !S && (e.mode & 1) !== 0) for (T = e, S = e.child; S !== null; ) {
              for (N = T = S; T !== null; ) {
                switch (j = T, M = j.child, j.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Nr(4, j, j.return);
                    break;
                  case 1:
                    Bn(j, j.return);
                    var O = j.stateNode;
                    if (typeof O.componentWillUnmount == "function") {
                      r = j, n = j.return;
                      try {
                        t = r, O.props = t.memoizedProps, O.state = t.memoizedState, O.componentWillUnmount();
                      } catch ($) {
                        ke(r, n, $);
                      }
                    }
                    break;
                  case 5:
                    Bn(j, j.return);
                    break;
                  case 22:
                    if (j.memoizedState !== null) {
                      _u(N);
                      continue;
                    }
                }
                M !== null ? (M.return = j, T = M) : _u(N);
              }
              S = S.sibling;
            }
            e: for (S = null, N = e; ; ) {
              if (N.tag === 5) {
                if (S === null) {
                  S = N;
                  try {
                    i = N.stateNode, v ? (s = i.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (c = N.stateNode, d = N.memoizedProps.style, o = d != null && d.hasOwnProperty("display") ? d.display : null, c.style.display = lo("display", o));
                  } catch ($) {
                    ke(e, e.return, $);
                  }
                }
              } else if (N.tag === 6) {
                if (S === null) try {
                  N.stateNode.nodeValue = v ? "" : N.memoizedProps;
                } catch ($) {
                  ke(e, e.return, $);
                }
              } else if ((N.tag !== 22 && N.tag !== 23 || N.memoizedState === null || N === e) && N.child !== null) {
                N.child.return = N, N = N.child;
                continue;
              }
              if (N === e) break e;
              for (; N.sibling === null; ) {
                if (N.return === null || N.return === e) break e;
                S === N && (S = null), N = N.return;
              }
              S === N && (S = null), N.sibling.return = N.return, N = N.sibling;
            }
          }
          break;
        case 19:
          vt(t, e), It(e), r & 4 && Su(e);
          break;
        case 21:
          break;
        default:
          vt(t, e), It(e);
      }
    }
    function It(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          e: {
            for (var n = e.return; n !== null; ) {
              if (ju(n)) {
                var r = n;
                break e;
              }
              n = n.return;
            }
            throw Error(u(160));
          }
          switch (r.tag) {
            case 5:
              var i = r.stateNode;
              r.flags & 32 && (Hn(i, ""), r.flags &= -33);
              var s = wu(e);
              js(e, s, i);
              break;
            case 3:
            case 4:
              var o = r.stateNode.containerInfo, c = wu(e);
              ys(e, c, o);
              break;
            default:
              throw Error(u(161));
          }
        } catch (d) {
          ke(e, e.return, d);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function $d(e, t, n) {
      T = e, Cu(e);
    }
    function Cu(e, t, n) {
      for (var r = (e.mode & 1) !== 0; T !== null; ) {
        var i = T, s = i.child;
        if (i.tag === 22 && r) {
          var o = i.memoizedState !== null || Nl;
          if (!o) {
            var c = i.alternate, d = c !== null && c.memoizedState !== null || Be;
            c = Nl;
            var v = Be;
            if (Nl = o, (Be = d) && !v) for (T = i; T !== null; ) o = T, d = o.child, o.tag === 22 && o.memoizedState !== null ? Iu(i) : d !== null ? (d.return = o, T = d) : Iu(i);
            for (; s !== null; ) T = s, Cu(s), s = s.sibling;
            T = i, Nl = c, Be = v;
          }
          Eu(e);
        } else (i.subtreeFlags & 8772) !== 0 && s !== null ? (s.return = i, T = s) : Eu(e);
      }
    }
    function Eu(e) {
      for (; T !== null; ) {
        var t = T;
        if ((t.flags & 8772) !== 0) {
          var n = t.alternate;
          try {
            if ((t.flags & 8772) !== 0) switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Be || Cl(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Be) if (n === null) r.componentDidMount();
                else {
                  var i = t.elementType === t.type ? n.memoizedProps : mt(t.type, n.memoizedProps);
                  r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
                var s = t.updateQueue;
                s !== null && _a(t, s, r);
                break;
              case 3:
                var o = t.updateQueue;
                if (o !== null) {
                  if (n = null, t.child !== null) switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                  _a(t, o, n);
                }
                break;
              case 5:
                var c = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = c;
                  var d = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      d.autoFocus && n.focus();
                      break;
                    case "img":
                      d.src && (n.src = d.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var v = t.alternate;
                  if (v !== null) {
                    var S = v.memoizedState;
                    if (S !== null) {
                      var N = S.dehydrated;
                      N !== null && nr(N);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(u(163));
            }
            Be || t.flags & 512 && xs(t);
          } catch (j) {
            ke(t, t.return, j);
          }
        }
        if (t === e) {
          T = null;
          break;
        }
        if (n = t.sibling, n !== null) {
          n.return = t.return, T = n;
          break;
        }
        T = t.return;
      }
    }
    function _u(e) {
      for (; T !== null; ) {
        var t = T;
        if (t === e) {
          T = null;
          break;
        }
        var n = t.sibling;
        if (n !== null) {
          n.return = t.return, T = n;
          break;
        }
        T = t.return;
      }
    }
    function Iu(e) {
      for (; T !== null; ) {
        var t = T;
        try {
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              var n = t.return;
              try {
                Cl(4, t);
              } catch (d) {
                ke(t, n, d);
              }
              break;
            case 1:
              var r = t.stateNode;
              if (typeof r.componentDidMount == "function") {
                var i = t.return;
                try {
                  r.componentDidMount();
                } catch (d) {
                  ke(t, i, d);
                }
              }
              var s = t.return;
              try {
                xs(t);
              } catch (d) {
                ke(t, s, d);
              }
              break;
            case 5:
              var o = t.return;
              try {
                xs(t);
              } catch (d) {
                ke(t, o, d);
              }
          }
        } catch (d) {
          ke(t, t.return, d);
        }
        if (t === e) {
          T = null;
          break;
        }
        var c = t.sibling;
        if (c !== null) {
          c.return = t.return, T = c;
          break;
        }
        T = t.return;
      }
    }
    var Vd = Math.ceil, El = B.ReactCurrentDispatcher, ws = B.ReactCurrentOwner, ut = B.ReactCurrentBatchConfig, ee = 0, ze = null, _e = null, Fe = 0, rt = 0, An = Ht(0), Pe = 0, Cr = null, pn = 0, _l = 0, ks = 0, Er = null, Xe = null, Ss = 0, Un = 1 / 0, Ot = null, Il = false, Ns = null, qt = null, Pl = false, Jt = null, Ll = 0, _r = 0, Cs = null, zl = -1, Ml = 0;
    function Qe() {
      return (ee & 6) !== 0 ? Ne() : zl !== -1 ? zl : zl = Ne();
    }
    function bt(e) {
      return (e.mode & 1) === 0 ? 1 : (ee & 2) !== 0 && Fe !== 0 ? Fe & -Fe : kd.transition !== null ? (Ml === 0 && (Ml = wo()), Ml) : (e = ce, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Lo(e.type)), e);
    }
    function xt(e, t, n, r) {
      if (50 < _r) throw _r = 0, Cs = null, Error(u(185));
      qn(e, n, r), ((ee & 2) === 0 || e !== ze) && (e === ze && ((ee & 2) === 0 && (_l |= n), Pe === 4 && en(e, Fe)), Ze(e, r), n === 1 && ee === 0 && (t.mode & 1) === 0 && (Un = Ne() + 500, sl && Kt()));
    }
    function Ze(e, t) {
      var n = e.callbackNode;
      kc(e, t);
      var r = Ar(e, e === ze ? Fe : 0);
      if (r === 0) n !== null && xo(n), e.callbackNode = null, e.callbackPriority = 0;
      else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && xo(n), t === 1) e.tag === 0 ? wd(Lu.bind(null, e)) : ma(Lu.bind(null, e)), vd(function() {
          (ee & 6) === 0 && Kt();
        }), n = null;
        else {
          switch (ko(r)) {
            case 1:
              n = li;
              break;
            case 4:
              n = yo;
              break;
            case 16:
              n = Or;
              break;
            case 536870912:
              n = jo;
              break;
            default:
              n = Or;
          }
          n = $u(n, Pu.bind(null, e));
        }
        e.callbackPriority = t, e.callbackNode = n;
      }
    }
    function Pu(e, t) {
      if (zl = -1, Ml = 0, (ee & 6) !== 0) throw Error(u(327));
      var n = e.callbackNode;
      if (Qn() && e.callbackNode !== n) return null;
      var r = Ar(e, e === ze ? Fe : 0);
      if (r === 0) return null;
      if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Dl(e, r);
      else {
        t = r;
        var i = ee;
        ee |= 2;
        var s = Mu();
        (ze !== e || Fe !== t) && (Ot = null, Un = Ne() + 500, mn(e, t));
        do
          try {
            Ud();
            break;
          } catch (c) {
            zu(e, c);
          }
        while (true);
        Qi(), El.current = s, ee = i, _e !== null ? t = 0 : (ze = null, Fe = 0, t = Pe);
      }
      if (t !== 0) {
        if (t === 2 && (i = ii(e), i !== 0 && (r = i, t = Es(e, i))), t === 1) throw n = Cr, mn(e, 0), en(e, r), Ze(e, Ne()), n;
        if (t === 6) en(e, r);
        else {
          if (i = e.current.alternate, (r & 30) === 0 && !Bd(i) && (t = Dl(e, r), t === 2 && (s = ii(e), s !== 0 && (r = s, t = Es(e, s))), t === 1)) throw n = Cr, mn(e, 0), en(e, r), Ze(e, Ne()), n;
          switch (e.finishedWork = i, e.finishedLanes = r, t) {
            case 0:
            case 1:
              throw Error(u(345));
            case 2:
              gn(e, Xe, Ot);
              break;
            case 3:
              if (en(e, r), (r & 130023424) === r && (t = Ss + 500 - Ne(), 10 < t)) {
                if (Ar(e, 0) !== 0) break;
                if (i = e.suspendedLanes, (i & r) !== r) {
                  Qe(), e.pingedLanes |= e.suspendedLanes & i;
                  break;
                }
                e.timeoutHandle = Mi(gn.bind(null, e, Xe, Ot), t);
                break;
              }
              gn(e, Xe, Ot);
              break;
            case 4:
              if (en(e, r), (r & 4194240) === r) break;
              for (t = e.eventTimes, i = -1; 0 < r; ) {
                var o = 31 - ft(r);
                s = 1 << o, o = t[o], o > i && (i = o), r &= ~s;
              }
              if (r = i, r = Ne() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Vd(r / 1960)) - r, 10 < r) {
                e.timeoutHandle = Mi(gn.bind(null, e, Xe, Ot), r);
                break;
              }
              gn(e, Xe, Ot);
              break;
            case 5:
              gn(e, Xe, Ot);
              break;
            default:
              throw Error(u(329));
          }
        }
      }
      return Ze(e, Ne()), e.callbackNode === n ? Pu.bind(null, e) : null;
    }
    function Es(e, t) {
      var n = Er;
      return e.current.memoizedState.isDehydrated && (mn(e, t).flags |= 256), e = Dl(e, t), e !== 2 && (t = Xe, Xe = n, t !== null && _s(t)), e;
    }
    function _s(e) {
      Xe === null ? Xe = e : Xe.push.apply(Xe, e);
    }
    function Bd(e) {
      for (var t = e; ; ) {
        if (t.flags & 16384) {
          var n = t.updateQueue;
          if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
            var i = n[r], s = i.getSnapshot;
            i = i.value;
            try {
              if (!pt(s(), i)) return false;
            } catch {
              return false;
            }
          }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return true;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      }
      return true;
    }
    function en(e, t) {
      for (t &= ~ks, t &= ~_l, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
        var n = 31 - ft(t), r = 1 << n;
        e[n] = -1, t &= ~r;
      }
    }
    function Lu(e) {
      if ((ee & 6) !== 0) throw Error(u(327));
      Qn();
      var t = Ar(e, 0);
      if ((t & 1) === 0) return Ze(e, Ne()), null;
      var n = Dl(e, t);
      if (e.tag !== 0 && n === 2) {
        var r = ii(e);
        r !== 0 && (t = r, n = Es(e, r));
      }
      if (n === 1) throw n = Cr, mn(e, 0), en(e, t), Ze(e, Ne()), n;
      if (n === 6) throw Error(u(345));
      return e.finishedWork = e.current.alternate, e.finishedLanes = t, gn(e, Xe, Ot), Ze(e, Ne()), null;
    }
    function Is(e, t) {
      var n = ee;
      ee |= 1;
      try {
        return e(t);
      } finally {
        ee = n, ee === 0 && (Un = Ne() + 500, sl && Kt());
      }
    }
    function hn(e) {
      Jt !== null && Jt.tag === 0 && (ee & 6) === 0 && Qn();
      var t = ee;
      ee |= 1;
      var n = ut.transition, r = ce;
      try {
        if (ut.transition = null, ce = 1, e) return e();
      } finally {
        ce = r, ut.transition = n, ee = t, (ee & 6) === 0 && Kt();
      }
    }
    function Ps() {
      rt = An.current, me(An);
    }
    function mn(e, t) {
      e.finishedWork = null, e.finishedLanes = 0;
      var n = e.timeoutHandle;
      if (n !== -1 && (e.timeoutHandle = -1, gd(n)), _e !== null) for (n = _e.return; n !== null; ) {
        var r = n;
        switch ($i(r), r.tag) {
          case 1:
            r = r.type.childContextTypes, r != null && ll();
            break;
          case 3:
            $n(), me(Ge), me(Oe), qi();
            break;
          case 5:
            Xi(r);
            break;
          case 4:
            $n();
            break;
          case 13:
            me(ye);
            break;
          case 19:
            me(ye);
            break;
          case 10:
            Wi(r.type._context);
            break;
          case 22:
          case 23:
            Ps();
        }
        n = n.return;
      }
      if (ze = e, _e = e = tn(e.current, null), Fe = rt = t, Pe = 0, Cr = null, ks = _l = pn = 0, Xe = Er = null, cn !== null) {
        for (t = 0; t < cn.length; t++) if (n = cn[t], r = n.interleaved, r !== null) {
          n.interleaved = null;
          var i = r.next, s = n.pending;
          if (s !== null) {
            var o = s.next;
            s.next = i, r.next = o;
          }
          n.pending = r;
        }
        cn = null;
      }
      return e;
    }
    function zu(e, t) {
      do {
        var n = _e;
        try {
          if (Qi(), gl.current = jl, vl) {
            for (var r = je.memoizedState; r !== null; ) {
              var i = r.queue;
              i !== null && (i.pending = null), r = r.next;
            }
            vl = false;
          }
          if (fn = 0, Le = Ie = je = null, yr = false, jr = 0, ws.current = null, n === null || n.return === null) {
            Pe = 1, Cr = t, _e = null;
            break;
          }
          e: {
            var s = e, o = n.return, c = n, d = t;
            if (t = Fe, c.flags |= 32768, d !== null && typeof d == "object" && typeof d.then == "function") {
              var v = d, S = c, N = S.tag;
              if ((S.mode & 1) === 0 && (N === 0 || N === 11 || N === 15)) {
                var j = S.alternate;
                j ? (S.updateQueue = j.updateQueue, S.memoizedState = j.memoizedState, S.lanes = j.lanes) : (S.updateQueue = null, S.memoizedState = null);
              }
              var M = nu(o);
              if (M !== null) {
                M.flags &= -257, ru(M, o, c, s, t), M.mode & 1 && tu(s, v, t), t = M, d = v;
                var O = t.updateQueue;
                if (O === null) {
                  var $ = /* @__PURE__ */ new Set();
                  $.add(d), t.updateQueue = $;
                } else O.add(d);
                break e;
              } else {
                if ((t & 1) === 0) {
                  tu(s, v, t), Ls();
                  break e;
                }
                d = Error(u(426));
              }
            } else if (ve && c.mode & 1) {
              var Ce = nu(o);
              if (Ce !== null) {
                (Ce.flags & 65536) === 0 && (Ce.flags |= 256), ru(Ce, o, c, s, t), Ai(Vn(d, c));
                break e;
              }
            }
            s = d = Vn(d, c), Pe !== 4 && (Pe = 2), Er === null ? Er = [s] : Er.push(s), s = o;
            do {
              switch (s.tag) {
                case 3:
                  s.flags |= 65536, t &= -t, s.lanes |= t;
                  var m = ba(s, d, t);
                  Ea(s, m);
                  break e;
                case 1:
                  c = d;
                  var f = s.type, g = s.stateNode;
                  if ((s.flags & 128) === 0 && (typeof f.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (qt === null || !qt.has(g)))) {
                    s.flags |= 65536, t &= -t, s.lanes |= t;
                    var C = eu(s, c, t);
                    Ea(s, C);
                    break e;
                  }
              }
              s = s.return;
            } while (s !== null);
          }
          Ru(n);
        } catch (A) {
          t = A, _e === n && n !== null && (_e = n = n.return);
          continue;
        }
        break;
      } while (true);
    }
    function Mu() {
      var e = El.current;
      return El.current = jl, e === null ? jl : e;
    }
    function Ls() {
      (Pe === 0 || Pe === 3 || Pe === 2) && (Pe = 4), ze === null || (pn & 268435455) === 0 && (_l & 268435455) === 0 || en(ze, Fe);
    }
    function Dl(e, t) {
      var n = ee;
      ee |= 2;
      var r = Mu();
      (ze !== e || Fe !== t) && (Ot = null, mn(e, t));
      do
        try {
          Ad();
          break;
        } catch (i) {
          zu(e, i);
        }
      while (true);
      if (Qi(), ee = n, El.current = r, _e !== null) throw Error(u(261));
      return ze = null, Fe = 0, Pe;
    }
    function Ad() {
      for (; _e !== null; ) Du(_e);
    }
    function Ud() {
      for (; _e !== null && !pc(); ) Du(_e);
    }
    function Du(e) {
      var t = Ou(e.alternate, e, rt);
      e.memoizedProps = e.pendingProps, t === null ? Ru(e) : _e = t, ws.current = null;
    }
    function Ru(e) {
      var t = e;
      do {
        var n = t.alternate;
        if (e = t.return, (t.flags & 32768) === 0) {
          if (n = Rd(n, t, rt), n !== null) {
            _e = n;
            return;
          }
        } else {
          if (n = Td(n, t), n !== null) {
            n.flags &= 32767, _e = n;
            return;
          }
          if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
          else {
            Pe = 6, _e = null;
            return;
          }
        }
        if (t = t.sibling, t !== null) {
          _e = t;
          return;
        }
        _e = t = e;
      } while (t !== null);
      Pe === 0 && (Pe = 5);
    }
    function gn(e, t, n) {
      var r = ce, i = ut.transition;
      try {
        ut.transition = null, ce = 1, Qd(e, t, n, r);
      } finally {
        ut.transition = i, ce = r;
      }
      return null;
    }
    function Qd(e, t, n, r) {
      do
        Qn();
      while (Jt !== null);
      if ((ee & 6) !== 0) throw Error(u(327));
      n = e.finishedWork;
      var i = e.finishedLanes;
      if (n === null) return null;
      if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(u(177));
      e.callbackNode = null, e.callbackPriority = 0;
      var s = n.lanes | n.childLanes;
      if (Sc(e, s), e === ze && (_e = ze = null, Fe = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || Pl || (Pl = true, $u(Or, function() {
        return Qn(), null;
      })), s = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || s) {
        s = ut.transition, ut.transition = null;
        var o = ce;
        ce = 1;
        var c = ee;
        ee |= 4, ws.current = null, Od(e, n), Nu(n, e), ud(Li), Wr = !!Pi, Li = Pi = null, e.current = n, $d(n), hc(), ee = c, ce = o, ut.transition = s;
      } else e.current = n;
      if (Pl && (Pl = false, Jt = e, Ll = i), s = e.pendingLanes, s === 0 && (qt = null), vc(n.stateNode), Ze(e, Ne()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
      if (Il) throw Il = false, e = Ns, Ns = null, e;
      return (Ll & 1) !== 0 && e.tag !== 0 && Qn(), s = e.pendingLanes, (s & 1) !== 0 ? e === Cs ? _r++ : (_r = 0, Cs = e) : _r = 0, Kt(), null;
    }
    function Qn() {
      if (Jt !== null) {
        var e = ko(Ll), t = ut.transition, n = ce;
        try {
          if (ut.transition = null, ce = 16 > e ? 16 : e, Jt === null) var r = false;
          else {
            if (e = Jt, Jt = null, Ll = 0, (ee & 6) !== 0) throw Error(u(331));
            var i = ee;
            for (ee |= 4, T = e.current; T !== null; ) {
              var s = T, o = s.child;
              if ((T.flags & 16) !== 0) {
                var c = s.deletions;
                if (c !== null) {
                  for (var d = 0; d < c.length; d++) {
                    var v = c[d];
                    for (T = v; T !== null; ) {
                      var S = T;
                      switch (S.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Nr(8, S, s);
                      }
                      var N = S.child;
                      if (N !== null) N.return = S, T = N;
                      else for (; T !== null; ) {
                        S = T;
                        var j = S.sibling, M = S.return;
                        if (yu(S), S === v) {
                          T = null;
                          break;
                        }
                        if (j !== null) {
                          j.return = M, T = j;
                          break;
                        }
                        T = M;
                      }
                    }
                  }
                  var O = s.alternate;
                  if (O !== null) {
                    var $ = O.child;
                    if ($ !== null) {
                      O.child = null;
                      do {
                        var Ce = $.sibling;
                        $.sibling = null, $ = Ce;
                      } while ($ !== null);
                    }
                  }
                  T = s;
                }
              }
              if ((s.subtreeFlags & 2064) !== 0 && o !== null) o.return = s, T = o;
              else e: for (; T !== null; ) {
                if (s = T, (s.flags & 2048) !== 0) switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Nr(9, s, s.return);
                }
                var m = s.sibling;
                if (m !== null) {
                  m.return = s.return, T = m;
                  break e;
                }
                T = s.return;
              }
            }
            var f = e.current;
            for (T = f; T !== null; ) {
              o = T;
              var g = o.child;
              if ((o.subtreeFlags & 2064) !== 0 && g !== null) g.return = o, T = g;
              else e: for (o = f; T !== null; ) {
                if (c = T, (c.flags & 2048) !== 0) try {
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Cl(9, c);
                  }
                } catch (A) {
                  ke(c, c.return, A);
                }
                if (c === o) {
                  T = null;
                  break e;
                }
                var C = c.sibling;
                if (C !== null) {
                  C.return = c.return, T = C;
                  break e;
                }
                T = c.return;
              }
            }
            if (ee = i, Kt(), Nt && typeof Nt.onPostCommitFiberRoot == "function") try {
              Nt.onPostCommitFiberRoot($r, e);
            } catch {
            }
            r = true;
          }
          return r;
        } finally {
          ce = n, ut.transition = t;
        }
      }
      return false;
    }
    function Tu(e, t, n) {
      t = Vn(n, t), t = ba(e, t, 1), e = Xt(e, t, 1), t = Qe(), e !== null && (qn(e, 1, t), Ze(e, t));
    }
    function ke(e, t, n) {
      if (e.tag === 3) Tu(e, e, n);
      else for (; t !== null; ) {
        if (t.tag === 3) {
          Tu(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (qt === null || !qt.has(r))) {
            e = Vn(n, e), e = eu(t, e, 1), t = Xt(t, e, 1), e = Qe(), t !== null && (qn(t, 1, e), Ze(t, e));
            break;
          }
        }
        t = t.return;
      }
    }
    function Wd(e, t, n) {
      var r = e.pingCache;
      r !== null && r.delete(t), t = Qe(), e.pingedLanes |= e.suspendedLanes & n, ze === e && (Fe & n) === n && (Pe === 4 || Pe === 3 && (Fe & 130023424) === Fe && 500 > Ne() - Ss ? mn(e, 0) : ks |= n), Ze(e, t);
    }
    function Fu(e, t) {
      t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Br, Br <<= 1, (Br & 130023424) === 0 && (Br = 4194304)));
      var n = Qe();
      e = Rt(e, t), e !== null && (qn(e, t, n), Ze(e, n));
    }
    function Hd(e) {
      var t = e.memoizedState, n = 0;
      t !== null && (n = t.retryLane), Fu(e, n);
    }
    function Gd(e, t) {
      var n = 0;
      switch (e.tag) {
        case 13:
          var r = e.stateNode, i = e.memoizedState;
          i !== null && (n = i.retryLane);
          break;
        case 19:
          r = e.stateNode;
          break;
        default:
          throw Error(u(314));
      }
      r !== null && r.delete(t), Fu(e, n);
    }
    var Ou;
    Ou = function(e, t, n) {
      if (e !== null) if (e.memoizedProps !== t.pendingProps || Ge.current) Ye = true;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return Ye = false, Dd(e, t, n);
        Ye = (e.flags & 131072) !== 0;
      }
      else Ye = false, ve && (t.flags & 1048576) !== 0 && ga(t, al, t.index);
      switch (t.lanes = 0, t.tag) {
        case 2:
          var r = t.type;
          Sl(e, t), e = t.pendingProps;
          var i = zn(t, Oe.current);
          On(t, n), i = es(null, t, r, e, i, n);
          var s = ts();
          return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ke(r) ? (s = true, il(t)) : s = false, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Ki(t), i.updater = wl, t.stateNode = i, i._reactInternals = t, os(t, r, e, n), t = ds(null, t, r, true, s, n)) : (t.tag = 0, ve && s && Oi(t), Ue(null, t, i, n), t = t.child), t;
        case 16:
          r = t.elementType;
          e: {
            switch (Sl(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = Yd(r), e = mt(r, e), i) {
              case 0:
                t = cs(null, t, r, e, n);
                break e;
              case 1:
                t = uu(null, t, r, e, n);
                break e;
              case 11:
                t = lu(null, t, r, e, n);
                break e;
              case 14:
                t = iu(null, t, r, mt(r.type, e), n);
                break e;
            }
            throw Error(u(306, r, ""));
          }
          return t;
        case 0:
          return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : mt(r, i), cs(e, t, r, i, n);
        case 1:
          return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : mt(r, i), uu(e, t, r, i, n);
        case 3:
          e: {
            if (cu(t), e === null) throw Error(u(387));
            r = t.pendingProps, s = t.memoizedState, i = s.element, Ca(e, t), hl(t, r, null, n);
            var o = t.memoizedState;
            if (r = o.element, s.isDehydrated) if (s = { element: r, isDehydrated: false, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
              i = Vn(Error(u(423)), t), t = du(e, t, r, n, i);
              break e;
            } else if (r !== i) {
              i = Vn(Error(u(424)), t), t = du(e, t, r, n, i);
              break e;
            } else for (nt = Wt(t.stateNode.containerInfo.firstChild), tt = t, ve = true, ht = null, n = Sa(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
            else {
              if (Rn(), r === i) {
                t = Ft(e, t, n);
                break e;
              }
              Ue(e, t, r, n);
            }
            t = t.child;
          }
          return t;
        case 5:
          return Ia(t), e === null && Bi(t), r = t.type, i = t.pendingProps, s = e !== null ? e.memoizedProps : null, o = i.children, zi(r, i) ? o = null : s !== null && zi(r, s) && (t.flags |= 32), au(e, t), Ue(e, t, o, n), t.child;
        case 6:
          return e === null && Bi(t), null;
        case 13:
          return fu(e, t, n);
        case 4:
          return Yi(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Tn(t, null, r, n) : Ue(e, t, r, n), t.child;
        case 11:
          return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : mt(r, i), lu(e, t, r, i, n);
        case 7:
          return Ue(e, t, t.pendingProps, n), t.child;
        case 8:
          return Ue(e, t, t.pendingProps.children, n), t.child;
        case 12:
          return Ue(e, t, t.pendingProps.children, n), t.child;
        case 10:
          e: {
            if (r = t.type._context, i = t.pendingProps, s = t.memoizedProps, o = i.value, pe(dl, r._currentValue), r._currentValue = o, s !== null) if (pt(s.value, o)) {
              if (s.children === i.children && !Ge.current) {
                t = Ft(e, t, n);
                break e;
              }
            } else for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var c = s.dependencies;
              if (c !== null) {
                o = s.child;
                for (var d = c.firstContext; d !== null; ) {
                  if (d.context === r) {
                    if (s.tag === 1) {
                      d = Tt(-1, n & -n), d.tag = 2;
                      var v = s.updateQueue;
                      if (v !== null) {
                        v = v.shared;
                        var S = v.pending;
                        S === null ? d.next = d : (d.next = S.next, S.next = d), v.pending = d;
                      }
                    }
                    s.lanes |= n, d = s.alternate, d !== null && (d.lanes |= n), Hi(s.return, n, t), c.lanes |= n;
                    break;
                  }
                  d = d.next;
                }
              } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (o = s.return, o === null) throw Error(u(341));
                o.lanes |= n, c = o.alternate, c !== null && (c.lanes |= n), Hi(o, n, t), o = s.sibling;
              } else o = s.child;
              if (o !== null) o.return = s;
              else for (o = s; o !== null; ) {
                if (o === t) {
                  o = null;
                  break;
                }
                if (s = o.sibling, s !== null) {
                  s.return = o.return, o = s;
                  break;
                }
                o = o.return;
              }
              s = o;
            }
            Ue(e, t, i.children, n), t = t.child;
          }
          return t;
        case 9:
          return i = t.type, r = t.pendingProps.children, On(t, n), i = ot(i), r = r(i), t.flags |= 1, Ue(e, t, r, n), t.child;
        case 14:
          return r = t.type, i = mt(r, t.pendingProps), i = mt(r.type, i), iu(e, t, r, i, n);
        case 15:
          return su(e, t, t.type, t.pendingProps, n);
        case 17:
          return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : mt(r, i), Sl(e, t), t.tag = 1, Ke(r) ? (e = true, il(t)) : e = false, On(t, n), qa(t, r, i), os(t, r, i, n), ds(null, t, r, true, e, n);
        case 19:
          return hu(e, t, n);
        case 22:
          return ou(e, t, n);
      }
      throw Error(u(156, t.tag));
    };
    function $u(e, t) {
      return vo(e, t);
    }
    function Kd(e, t, n, r) {
      this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function ct(e, t, n, r) {
      return new Kd(e, t, n, r);
    }
    function zs(e) {
      return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function Yd(e) {
      if (typeof e == "function") return zs(e) ? 1 : 0;
      if (e != null) {
        if (e = e.$$typeof, e === kt) return 11;
        if (e === St) return 14;
      }
      return 2;
    }
    function tn(e, t) {
      var n = e.alternate;
      return n === null ? (n = ct(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
    }
    function Rl(e, t, n, r, i, s) {
      var o = 2;
      if (r = e, typeof e == "function") zs(e) && (o = 1);
      else if (typeof e == "string") o = 5;
      else e: switch (e) {
        case xe:
          return vn(n.children, i, s, t);
        case Ee:
          o = 8, i |= 8;
          break;
        case Ae:
          return e = ct(12, n, t, i | 2), e.elementType = Ae, e.lanes = s, e;
        case Je:
          return e = ct(13, n, t, i), e.elementType = Je, e.lanes = s, e;
        case dt:
          return e = ct(19, n, t, i), e.elementType = dt, e.lanes = s, e;
        case we:
          return Tl(n, i, s, t);
        default:
          if (typeof e == "object" && e !== null) switch (e.$$typeof) {
            case lt:
              o = 10;
              break e;
            case Re:
              o = 9;
              break e;
            case kt:
              o = 11;
              break e;
            case St:
              o = 14;
              break e;
            case He:
              o = 16, r = null;
              break e;
          }
          throw Error(u(130, e == null ? e : typeof e, ""));
      }
      return t = ct(o, n, t, i), t.elementType = e, t.type = r, t.lanes = s, t;
    }
    function vn(e, t, n, r) {
      return e = ct(7, e, r, t), e.lanes = n, e;
    }
    function Tl(e, t, n, r) {
      return e = ct(22, e, r, t), e.elementType = we, e.lanes = n, e.stateNode = { isHidden: false }, e;
    }
    function Ms(e, t, n) {
      return e = ct(6, e, null, t), e.lanes = n, e;
    }
    function Ds(e, t, n) {
      return t = ct(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
    }
    function Xd(e, t, n, r, i) {
      this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = si(0), this.expirationTimes = si(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = si(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
    }
    function Rs(e, t, n, r, i, s, o, c, d) {
      return e = new Xd(e, t, n, c, d), t === 1 ? (t = 1, s === true && (t |= 8)) : t = 0, s = ct(3, null, null, t), e.current = s, s.stateNode = e, s.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ki(s), e;
    }
    function Zd(e, t, n) {
      var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return { $$typeof: X, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
    }
    function Vu(e) {
      if (!e) return Gt;
      e = e._reactInternals;
      e: {
        if (ln(e) !== e || e.tag !== 1) throw Error(u(170));
        var t = e;
        do {
          switch (t.tag) {
            case 3:
              t = t.stateNode.context;
              break e;
            case 1:
              if (Ke(t.type)) {
                t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                break e;
              }
          }
          t = t.return;
        } while (t !== null);
        throw Error(u(171));
      }
      if (e.tag === 1) {
        var n = e.type;
        if (Ke(n)) return pa(e, n, t);
      }
      return t;
    }
    function Bu(e, t, n, r, i, s, o, c, d) {
      return e = Rs(n, r, true, e, i, s, o, c, d), e.context = Vu(null), n = e.current, r = Qe(), i = bt(n), s = Tt(r, i), s.callback = t ?? null, Xt(n, s, i), e.current.lanes = i, qn(e, i, r), Ze(e, r), e;
    }
    function Fl(e, t, n, r) {
      var i = t.current, s = Qe(), o = bt(i);
      return n = Vu(n), t.context === null ? t.context = n : t.pendingContext = n, t = Tt(s, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Xt(i, t, o), e !== null && (xt(e, i, o, s), pl(e, i, o)), o;
    }
    function Ol(e) {
      if (e = e.current, !e.child) return null;
      switch (e.child.tag) {
        case 5:
          return e.child.stateNode;
        default:
          return e.child.stateNode;
      }
    }
    function Au(e, t) {
      if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
      }
    }
    function Ts(e, t) {
      Au(e, t), (e = e.alternate) && Au(e, t);
    }
    function qd() {
      return null;
    }
    var Uu = typeof reportError == "function" ? reportError : function(e) {
      console.error(e);
    };
    function Fs(e) {
      this._internalRoot = e;
    }
    $l.prototype.render = Fs.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null) throw Error(u(409));
      Fl(e, t, null, null);
    }, $l.prototype.unmount = Fs.prototype.unmount = function() {
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        hn(function() {
          Fl(null, e, null, null);
        }), t[Lt] = null;
      }
    };
    function $l(e) {
      this._internalRoot = e;
    }
    $l.prototype.unstable_scheduleHydration = function(e) {
      if (e) {
        var t = Co();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < At.length && t !== 0 && t < At[n].priority; n++) ;
        At.splice(n, 0, e), n === 0 && Io(e);
      }
    };
    function Os(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function Vl(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
    }
    function Qu() {
    }
    function Jd(e, t, n, r, i) {
      if (i) {
        if (typeof r == "function") {
          var s = r;
          r = function() {
            var v = Ol(o);
            s.call(v);
          };
        }
        var o = Bu(t, r, e, 0, null, false, false, "", Qu);
        return e._reactRootContainer = o, e[Lt] = o.current, dr(e.nodeType === 8 ? e.parentNode : e), hn(), o;
      }
      for (; i = e.lastChild; ) e.removeChild(i);
      if (typeof r == "function") {
        var c = r;
        r = function() {
          var v = Ol(d);
          c.call(v);
        };
      }
      var d = Rs(e, 0, false, null, null, false, false, "", Qu);
      return e._reactRootContainer = d, e[Lt] = d.current, dr(e.nodeType === 8 ? e.parentNode : e), hn(function() {
        Fl(t, d, n, r);
      }), d;
    }
    function Bl(e, t, n, r, i) {
      var s = n._reactRootContainer;
      if (s) {
        var o = s;
        if (typeof i == "function") {
          var c = i;
          i = function() {
            var d = Ol(o);
            c.call(d);
          };
        }
        Fl(t, o, e, i);
      } else o = Jd(n, t, e, i, r);
      return Ol(o);
    }
    So = function(e) {
      switch (e.tag) {
        case 3:
          var t = e.stateNode;
          if (t.current.memoizedState.isDehydrated) {
            var n = Zn(t.pendingLanes);
            n !== 0 && (oi(t, n | 1), Ze(t, Ne()), (ee & 6) === 0 && (Un = Ne() + 500, Kt()));
          }
          break;
        case 13:
          hn(function() {
            var r = Rt(e, 1);
            if (r !== null) {
              var i = Qe();
              xt(r, e, 1, i);
            }
          }), Ts(e, 1);
      }
    }, ai = function(e) {
      if (e.tag === 13) {
        var t = Rt(e, 134217728);
        if (t !== null) {
          var n = Qe();
          xt(t, e, 134217728, n);
        }
        Ts(e, 134217728);
      }
    }, No = function(e) {
      if (e.tag === 13) {
        var t = bt(e), n = Rt(e, t);
        if (n !== null) {
          var r = Qe();
          xt(n, e, t, r);
        }
        Ts(e, t);
      }
    }, Co = function() {
      return ce;
    }, Eo = function(e, t) {
      var n = ce;
      try {
        return ce = e, t();
      } finally {
        ce = n;
      }
    }, ei = function(e, t, n) {
      switch (t) {
        case "input":
          if (Gl(e, n), t = n.name, n.type === "radio" && t != null) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var i = rl(r);
                if (!i) throw Error(u(90));
                Xs(r), Gl(r, i);
              }
            }
          }
          break;
        case "textarea":
          eo(e, n);
          break;
        case "select":
          t = n.value, t != null && yn(e, !!n.multiple, t, false);
      }
    }, uo = Is, co = hn;
    var bd = { usingClientEntryPoint: false, Events: [hr, Pn, rl, oo, ao, Is] }, Ir = { findFiberByHostInstance: sn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, ef = { bundleType: Ir.bundleType, version: Ir.version, rendererPackageName: Ir.rendererPackageName, rendererConfig: Ir.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: B.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
      return e = mo(e), e === null ? null : e.stateNode;
    }, findFiberByHostInstance: Ir.findFiberByHostInstance || qd, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
      var Al = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!Al.isDisabled && Al.supportsFiber) try {
        $r = Al.inject(ef), Nt = Al;
      } catch {
      }
    }
    return qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bd, qe.createPortal = function(e, t) {
      var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Os(t)) throw Error(u(200));
      return Zd(e, t, null, n);
    }, qe.createRoot = function(e, t) {
      if (!Os(e)) throw Error(u(299));
      var n = false, r = "", i = Uu;
      return t != null && (t.unstable_strictMode === true && (n = true), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Rs(e, 1, false, null, null, n, false, r, i), e[Lt] = t.current, dr(e.nodeType === 8 ? e.parentNode : e), new Fs(t);
    }, qe.findDOMNode = function(e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0) throw typeof e.render == "function" ? Error(u(188)) : (e = Object.keys(e).join(","), Error(u(268, e)));
      return e = mo(t), e = e === null ? null : e.stateNode, e;
    }, qe.flushSync = function(e) {
      return hn(e);
    }, qe.hydrate = function(e, t, n) {
      if (!Vl(t)) throw Error(u(200));
      return Bl(null, e, t, true, n);
    }, qe.hydrateRoot = function(e, t, n) {
      if (!Os(e)) throw Error(u(405));
      var r = n != null && n.hydratedSources || null, i = false, s = "", o = Uu;
      if (n != null && (n.unstable_strictMode === true && (i = true), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = Bu(t, null, e, 1, n ?? null, i, false, s, o), e[Lt] = t.current, dr(e), r) for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
      return new $l(t);
    }, qe.render = function(e, t, n) {
      if (!Vl(t)) throw Error(u(200));
      return Bl(null, e, t, false, n);
    }, qe.unmountComponentAtNode = function(e) {
      if (!Vl(e)) throw Error(u(40));
      return e._reactRootContainer ? (hn(function() {
        Bl(null, null, e, false, function() {
          e._reactRootContainer = null, e[Lt] = null;
        });
      }), true) : false;
    }, qe.unstable_batchedUpdates = Is, qe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
      if (!Vl(n)) throw Error(u(200));
      if (e == null || e._reactInternals === void 0) throw Error(u(38));
      return Bl(e, t, n, false, r);
    }, qe.version = "18.3.1-next-f1338f8080-20240426", qe;
  }
  var qu;
  function rc() {
    if (qu) return Bs.exports;
    qu = 1;
    function a() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (y) {
        console.error(y);
      }
    }
    return a(), Bs.exports = af(), Bs.exports;
  }
  var Ju;
  function uf() {
    if (Ju) return Ul;
    Ju = 1;
    var a = rc();
    return Ul.createRoot = a.createRoot, Ul.hydrateRoot = a.hydrateRoot, Ul;
  }
  var cf = uf();
  const df = nc(cf);
  const xn = { meta: { titleEn: "Generative Latent Coding for Ultra-Low Bitrate Image Compression", titleZh: "\u9762\u5411\u8D85\u4F4E\u7801\u7387\u7684\u751F\u6210\u5F0F\u6F5C\u7A7A\u95F4\u56FE\u50CF\u538B\u7F29", venue: "arXiv:2512.20194v1 \xB7 2025", authors: "Zhaoyang Jia, Jiahao Li, Bin Li, Houqiang Li, Yan Lu", affiliation: "\u4E2D\u56FD\u79D1\u5B66\u6280\u672F\u5927\u5B66 \xB7 \u5FAE\u8F6F\u4E9A\u6D32\u7814\u7A76\u9662", domain: "\u6DF1\u5EA6\u5B66\u4E60\u56FE\u50CF\u538B\u7F29 \xB7 VQ-VAE \xB7 \u751F\u6210\u5F0F\u538B\u7F29 \xB7 \u71B5\u7F16\u7801", coreProblem: "\u8D85\u4F4E\u7801\u7387\u4E0B\uFF0C\u50CF\u7D20\u7A7A\u95F4\u5931\u771F\u4E0E\u4EBA\u7684\u8BED\u4E49\u4FDD\u771F\u548C\u7EB9\u7406\u771F\u5B9E\u611F\u5E76\u4E0D\u603B\u662F\u4E00\u81F4\u3002", coreInsight: "GLC \u5148\u628A\u56FE\u50CF\u7F16\u7801\u8FDB\u751F\u6210\u5F0F VQ-VAE \u6F5C\u7A7A\u95F4\uFF0C\u518D\u5BF9\u79BB\u6563\u8BED\u4E49\u6F5C\u7801\u505A\u53D8\u6362\u7F16\u7801\u3001\u5206\u7C7B\u8D85\u5148\u9A8C\u5EFA\u6A21\u548C\u4EC5\u8BAD\u7EC3\u671F\u4F7F\u7528\u7684\u7801\u9884\u6D4B\u76D1\u7763\u3002", keywords: ["GLC", "VQ-VAE", "\u6F5C\u7A7A\u95F4\u53D8\u6362\u7F16\u7801", "\u5206\u7C7B\u8D85\u5148\u9A8C", "\u7801\u9884\u6D4B\u76D1\u7763", "\u53EF\u53D8\u7801\u7387"] }, hero: { oldMethod: { title: "\u50CF\u7D20\u7A7A\u95F4\u53D8\u6362\u7F16\u7801", desc: "\u4FEE\u8865\u5E08\u5728\u4F4E\u9884\u7B97\u4E0B\u9010\u5757\u642C\u8FD0\u5C40\u90E8\u50CF\u7D20\uFF0C\u5148\u5931\u53BB\u7684\u662F\u7ED3\u6784\u4E0E\u7EB9\u7406\u3002", componentId: "glc-cover" }, newMethod: { title: "\u751F\u6210\u5F0F\u6F5C\u7A7A\u95F4\u7F16\u7801\uFF08GLC\uFF09", desc: "\u4FEE\u8865\u5E08\u5148\u4FDD\u7559\u8BED\u4E49\u9A6C\u8D5B\u514B\uFF0C\u518D\u8BA9\u751F\u6210\u5F0F\u89E3\u7801\u5668\u8865\u5168\u53EF\u4FE1\u7EB9\u7406\u3002", componentId: "glc-cover" } }, chapters: [{ kind: "chapter", id: "chap-1", title: "01 \xB7 \u8D85\u4F4E\u7801\u7387\u4E0B\u4E3A\u4EC0\u4E48\u50CF\u7D20\u5931\u771F\u4E0D\u7B49\u4E8E\u611F\u77E5\u8D28\u91CF", modules: [{ kind: "module", id: "problem", title: "\u50CF\u7D20\u8D28\u611F\u4E0E\u611F\u77E5\u7ED3\u6784\u7684\u5206\u6B67", desc: "\u62D6\u52A8\u9884\u7B97\u5E76\u5207\u6362\u50CF\u7D20/\u6F5C\u7A7A\u95F4\u8868\u793A\uFF0C\u89C2\u5BDF\u7ED3\u6784\u3001\u7EB9\u7406\u548C\u751F\u6210\u8865\u5168\u7684\u5DEE\u5F02\u3002", componentId: "glc-problem" }, { kind: "module", id: "latent", title: "\u751F\u6210\u5F0F VQ-VAE \u7801\u672C", desc: "\u9009\u62E9 M=256\u30011024 \u6216 16384\uFF0C\u89C2\u5BDF\u7801\u672C\u5BB9\u91CF\u3001\u7D22\u5F15\u4F4D\u5BBD\u548C\u8BED\u4E49\u7EC6\u8282\u7684\u5173\u7CFB\u3002", componentId: "glc-latent" }], scenes: [{ id: "glc-problem", title: "\u50CF\u7D20\u8BEF\u5DEE\u4E3A\u4F55\u4E0D\u7B49\u4E8E\u611F\u77E5\u8D28\u91CF", goal: "\u5728\u76F8\u540C\u4FEE\u8865\u9884\u7B97\u4E0B\u6BD4\u8F83\u50CF\u7D20\u7A7A\u95F4\u4E0E\u751F\u6210\u5F0F\u6F5C\u7A7A\u95F4\uFF0C\u5224\u65AD\u54EA\u4E00\u79CD\u8868\u793A\u5148\u5B88\u4F4F\u4E3B\u4F53\u7ED3\u6784\u548C\u7EB9\u7406\u771F\u5B9E\u611F\u3002", summary: "\u8D85\u4F4E\u7801\u7387\u8BA9\u50CF\u7D20\u8BEF\u5DEE\u4E0E\u8BED\u4E49/\u7EB9\u7406\u5224\u65AD\u5206\u79BB", interaction: "\u62D6\u52A8\u9884\u7B97\uFF0C\u5E76\u5207\u6362\u50CF\u7D20\u7A7A\u95F4\u4E0E\u751F\u6210\u5F0F\u6F5C\u7A7A\u95F4\u4E24\u79CD\u8868\u793A", next: "\u8FDB\u4E00\u6B65\u7406\u89E3\u751F\u6210\u5F0F VQ-VAE \u5982\u4F55\u5F62\u6210\u79BB\u6563\u8BED\u4E49\u6F5C\u7801", notes: "\u8BBA\u6587 \xA71 \u4E0E Figure 1 \u7528 SNR \u4E0E DISTS \u8BF4\u660E\uFF1A\u5728\u8D85\u4F4E\u7801\u7387\u4E0B\uFF0C\u8F83\u4F4E\u50CF\u7D20\u5931\u771F\u4E0D\u4E00\u5B9A\u5BF9\u5E94\u66F4\u597D\u7684\u8BED\u4E49\u4E00\u81F4\u6027\u548C\u7EB9\u7406\u771F\u5B9E\u611F\u3002\u9875\u9762\u4E2D\u7684\u9884\u7B97\u3001\u9A6C\u8D5B\u514B\u7EC6\u8282\u548C\u751F\u6210\u7EB9\u7406\u5747\u4E3A\u6559\u5B66\u793A\u610F\uFF0C\u4E0D\u662F\u8BBA\u6587\u7684\u5B9E\u6D4B bpp \u66F2\u7EBF\uFF1B\u5176\u4F5C\u7528\u662F\u8BA9\u8BFB\u8005\u770B\u5230\u4E24\u79CD\u8868\u793A\u5173\u6CE8\u7684\u5185\u5BB9\u4E0D\u540C\u3002", componentId: "glc-problem", moduleId: "problem", thumbnail: "./thumbnails/glc-problem.jpg" }, { id: "glc-latent", title: "\u79BB\u6563\u7801\u672C\u5982\u4F55\u5F62\u6210\u751F\u6210\u5F0F\u6F5C\u7A7A\u95F4", goal: "\u9009\u62E9\u7801\u672C\u5BB9\u91CF\uFF0C\u7406\u89E3\u8BED\u4E49\u5355\u5143\u6570\u91CF\u3001\u7D22\u5F15\u4F4D\u5BBD\u548C\u6700\u7EC8\u7801\u6D41\u5E76\u4E0D\u5355\u8C03\u5BF9\u5E94\u3002", summary: "VQ \u7801\u672C\u628A\u56FE\u50CF\u7EC4\u7EC7\u4E3A\u79BB\u6563\u8BED\u4E49\u5355\u5143", interaction: "\u9009\u62E9 M=256\u30011024 \u6216 16384\uFF0C\u89C2\u5BDF\u8BED\u4E49\u8272\u5757\u6570\u91CF\u4E0E log\u2082M \u4F4D\u5BBD", next: "\u628A\u7801\u672C\u653E\u56DE\u5B8C\u6574 GLC \u524D\u5411\u8DEF\u5F84", notes: "\u4F9D\u636E \xA73.2 \u4E0E \xA78.1\uFF1A\u81EA\u7136\u56FE\u50CF\u6A21\u578B\u91C7\u7528 VQGAN \u7C7B\u7ED3\u6784\uFF0Cf=1/16\u3001M=16384\uFF1B\u4EBA\u8138\u6A21\u578B\u91C7\u7528 CodeFormer \u7C7B\u7ED3\u6784\uFF0Cf=1/32\u3001M=1024\u3002\u7801\u672C\u66F4\u5927\u610F\u5473\u7740\u5355\u4E2A\u7D22\u5F15\u4F4D\u5BBD\u66F4\u5927\uFF0C\u4E5F\u4F1A\u6539\u53D8\u8868\u8FBE\u80FD\u529B\uFF1B\u8BBA\u6587\u5E76\u672A\u58F0\u79F0\u7801\u672C\u8D8A\u5927\u603B\u7801\u6D41\u5FC5\u7136\u8D8A\u5C0F\uFF0C\u56E0\u4E3A\u4E3B\u7D22\u5F15\u56FE\u8FD8\u8981\u7ECF\u8FC7\u6F5C\u7A7A\u95F4\u53D8\u6362\u7F16\u7801\u3002", componentId: "glc-latent", moduleId: "latent", thumbnail: "./thumbnails/glc-latent.jpg" }] }, { kind: "chapter", id: "chap-2", title: "02 \xB7 \u6784\u5EFA GLC\uFF1A\u6F5C\u7A7A\u95F4\u8DEF\u5F84\u4E0E\u6E10\u8FDB\u8BAD\u7EC3", modules: [{ kind: "module", id: "architecture", title: "GLC \u524D\u5411\u8DEF\u5F84", desc: "\u70B9\u9009 x\u2192E\u2192l\u2192g\u2090\u2192y\u2192Q\u2192\u0177\u2192g\u209B\u2192l\u0302\u2192D\u2192x\u0302 \u7684\u90E8\u4EF6\uFF0C\u5E76\u5207\u6362\u81EA\u7136/\u4EBA\u8138\u914D\u7F6E\u3002", componentId: "glc-architecture" }, { kind: "module", id: "stage-one", title: "\u4E09\u9636\u6BB5\u6E10\u8FDB\u8BAD\u7EC3", desc: "\u5207\u6362 Stage I\u3001II\u3001III\uFF0C\u89C2\u5BDF\u53EF\u8BAD\u7EC3/\u51BB\u7ED3\u6A21\u5757\u4E0E\u635F\u5931\u76EE\u6807\u3002", componentId: "glc-stage-one" }], scenes: [{ id: "glc-architecture", title: "GLC \u524D\u5411\u8DEF\u5F84\uFF1A\u4ECE\u7167\u7247\u5230\u6F5C\u7801\u518D\u56DE\u5230\u7167\u7247", goal: "\u70B9\u9009\u8DEF\u5F84\u90E8\u4EF6\uFF0C\u533A\u5206\u6F5C\u81EA\u7F16\u7801\u5668\u3001\u5206\u6790/\u5408\u6210\u53D8\u6362\u3001\u91CF\u5316\u3001\u71B5\u7F16\u7801\u8F93\u5165\u4E0E\u751F\u6210\u5F0F\u89E3\u7801\u3002", summary: "\u53D8\u6362\u7F16\u7801\u53D1\u751F\u5728\u751F\u6210\u5F0F VQ-VAE \u6F5C\u7A7A\u95F4", interaction: "\u70B9\u51FB 11 \u4E2A\u8DEF\u5F84\u8282\u70B9\uFF0C\u5207\u6362\u81EA\u7136\u56FE\u50CF\u4E0E\u4EBA\u8138\u6A21\u578B\u914D\u7F6E", next: "\u67E5\u770B\u751F\u6210\u5F0F\u6F5C\u7A7A\u95F4\u4E3A\u4F55\u9700\u8981\u5206\u9636\u6BB5\u8BAD\u7EC3", notes: "\u4E3B\u4F53\u4F9D\u636E \xA73.1 \u7684\u5F0F (1) \u4E0E Figure 3\uFF1Al=E(x)\uFF0Cy=g\u2090(l)\uFF0C\u0177=Q(y)\uFF0Cl\u0302=g\u209B(\u0177)\uFF0Cx\u0302=D(l\u0302)\u3002\u81EA\u7136/\u4EBA\u8138\u7684\u4E0B\u91C7\u6837\u500D\u7387\u548C\u7801\u672C\u5927\u5C0F\u6765\u81EA \xA78.1\u3002\u71B5\u6A21\u578B\u5B9E\u9645\u8FD8\u4F7F\u7528\u5206\u7C7B\u8D85\u5148\u9A8C\u4E0E\u56DB\u53C9\u6811\u5206\u533A\u7A7A\u95F4\u4E0A\u4E0B\u6587\uFF1B\u6B64\u9875\u5148\u5EFA\u7ACB\u4E3B\u8DEF\u5F84\uFF0C\u907F\u514D\u628A\u6240\u6709\u6A21\u5757\u6324\u6210\u901A\u7528\u8282\u70B9\u56FE\u3002", componentId: "glc-architecture", moduleId: "architecture", thumbnail: "./thumbnails/glc-architecture.jpg" }, { id: "glc-stage-one", title: "\u4E09\u9636\u6BB5\u8BAD\u7EC3\uFF1A\u5148\u5B66\u4F1A\u8868\u793A\uFF0C\u518D\u5B66\u4F1A\u538B\u7F29", goal: "\u5207\u6362\u8BAD\u7EC3\u9636\u6BB5\uFF0C\u5224\u65AD\u6BCF\u4E00\u9636\u6BB5\u51BB\u7ED3\u54EA\u4E9B\u6A21\u5757\u3001\u66F4\u65B0\u54EA\u4E9B\u635F\u5931\uFF0C\u4EE5\u53CA\u4E3A\u4EC0\u4E48\u5148\u6F5C\u7A7A\u95F4\u540E\u7801\u7387\u3002", summary: "Stage I \u5EFA\u6F5C\u7A7A\u95F4\uFF0CII \u5B66\u53D8\u6362\u7F16\u7801\uFF0CIII \u8054\u5408\u5FAE\u8C03", interaction: "\u9009\u62E9 Stage I/II/III\uFF0C\u89C2\u5BDF\u6A21\u5757\u72B6\u6001\u3001\u635F\u5931\u9879\u548C\u7CBE\u786E\u6743\u91CD", next: "\u8FDB\u5165\u6F5C\u7A7A\u95F4\u53D8\u6362\u7F16\u7801\u4E0E\u5206\u7C7B\u8D85\u5148\u9A8C", notes: "\u4F9D\u636E \xA74.1\u2013\xA74.3\uFF1AStage I \u4F7F\u7528\u91CD\u5EFA\u3001LPIPS\u3001\u81EA\u9002\u5E94 Patch-GAN \u4E0E\u7801\u672C\u635F\u5931\uFF0C\u03BB_adv=0.8\u3001\u03B2=0.25\uFF1BStage II \u51BB\u7ED3\u81EA\u7F16\u7801\u5668\uFF0C\u4F7F\u7387\u9879\u4E0E\u7801\u9884\u6D4B\u5931\u771F\u8054\u5408\u4F18\u5316\uFF0C\u03B1=0.5\uFF1BStage III \u653E\u5F00\u6574\u7F51\u5E76\u5728\u50CF\u7D20\u7A7A\u95F4\u5E94\u7528\u7801\u9884\u6D4B\u76D1\u7763\uFF0C\u03BB_code=0.05\u3002\u8D85\u7801\u672C\u635F\u5931\u5728\u5F0F (5)\u2013(8) \u4E2D\u7701\u7565\uFF0C\u4F46\u8BAD\u7EC3\u65F6\u4ECD\u9700\u8981\u3002", componentId: "glc-stage-one", moduleId: "stage-one", thumbnail: "./thumbnails/glc-stage-one.jpg" }] }, { kind: "chapter", id: "chap-3", title: "03 \xB7 \u5728\u6F5C\u7A7A\u95F4\u91CC\u505A\u53D8\u6362\u7F16\u7801", modules: [{ kind: "module", id: "transform", title: "\u6F5C\u7801\u7A7A\u95F4\u5197\u4F59\u4E0E\u53D8\u6362\u7F16\u7801", desc: "\u62D6\u52A8\u7A7A\u95F4\u5197\u4F59\u590D\u7528\u5F3A\u5EA6\uFF0C\u6BD4\u8F83\u7D22\u5F15\u56FE\u76F4\u4F20\u4E0E\u53D8\u6362\u6B8B\u5DEE\uFF0C\u5E76\u6838\u5BF9 66.2% BD-Rate\u3002", componentId: "glc-transform" }, { kind: "module", id: "hyper", title: "\u5206\u7C7B\u8D85\u5148\u9A8C", desc: "\u5207\u6362\u5206\u89E3/\u5206\u7C7B\u8D85\u5148\u9A8C\uFF0C\u89C2\u5BDF\u5C40\u90E8\u8D26\u672C\u4E0E\u8BED\u4E49\u4FBF\u7B7E\u7684\u4FE1\u606F\u5DEE\u5F02\u3002", componentId: "glc-hyper" }, { kind: "module", id: "rate", title: "\u5355\u6A21\u578B\u53EF\u53D8\u7801\u7387", desc: "\u62D6\u52A8\u76EE\u6807\u6863\u4F4D\uFF0C\u89C2\u5BDF q_enc/q_dec\u3001\u8BED\u4E49\u9AA8\u67B6\u548C\u7EB9\u7406\u7EC6\u8282\u7684\u5171\u540C\u53D8\u5316\u3002", componentId: "glc-rate" }], scenes: [{ id: "glc-transform", title: "\u4E3A\u4EC0\u4E48\u4E0D\u76F4\u63A5\u4F20\u8F93 VQ \u7D22\u5F15\u56FE", goal: "\u628A\u7A7A\u95F4\u5197\u4F59\u590D\u7528\u4ECE\u5F31\u62D6\u5230\u5F3A\uFF0C\u7406\u89E3\u53D8\u6362\u7F16\u7801\u4E3A\u4F55\u80FD\u6BD4\u9010\u4F4D\u7F6E\u7D22\u5F15\u66F4\u597D\u5730\u6D88\u9664\u91CD\u590D\u7ED3\u6784\u3002", summary: "\u7D22\u5F15\u56FE\u76F4\u4F20\u7684\u5197\u4F59\u5229\u7528\u4E0D\u8DB3\uFF0C\u53D8\u6362\u7F16\u7801\u66F4\u6709\u6548", interaction: "\u62D6\u52A8\u4E0A\u4E0B\u6587/\u5197\u4F59\u590D\u7528\u5F3A\u5EA6\uFF0C\u89C2\u5BDF\u4F4D\u7F6E\u7801\u4E0E\u6B8B\u5DEE\u7801\u6570\u91CF\u53D8\u5316", next: "\u7406\u89E3\u8D85\u4FE1\u606F\u5982\u4F55\u8FDB\u4E00\u6B65\u964D\u4F4E\u7801\u7387", notes: "\u8BBA\u6587 \xA73.3 \u6307\u51FA\u7D22\u5F15\u56FE\u65B9\u6CD5\u5BF9\u6F5C\u7801\u76F8\u5173\u6027\u5229\u7528\u4E0D\u8DB3\uFF1BTable 1 \u5728 CLIC2020 FID\u2013BPP \u66F2\u7EBF\u4E0A\u62A5\u544A\u7D22\u5F15\u56FE\u76F4\u4F20\u76F8\u5BF9\u53D8\u6362\u7F16\u7801\u6709 66.2% BD-Rate \u635F\u5931\u3002\u9875\u9762\u4E2D 40 \u4E2A\u4F4D\u7F6E\u7801\u548C\u6B8B\u5DEE\u6570\u91CF\u7684\u6620\u5C04\u4EC5\u7528\u4E8E\u8BF4\u660E\u673A\u5236\uFF0C\u4E0D\u662F\u8BBA\u6587\u7684\u7801\u5B57\u7EDF\u8BA1\uFF1B66.2% \u662F\u56FA\u5B9A\u5B9E\u6D4B\u503C\uFF0C\u4E0D\u80FD\u7531\u6ED1\u5757\u6539\u53D8\u3002", componentId: "glc-transform", moduleId: "transform", thumbnail: "./thumbnails/glc-transform.jpg" }, { id: "glc-hyper", title: "\u5206\u7C7B\u8D85\u5148\u9A8C\u5982\u4F55\u538B\u7F29\u65C1\u4FE1\u606F", goal: "\u5207\u6362\u4E24\u79CD\u8D85\u5148\u9A8C\uFF0C\u5224\u65AD\u54EA\u7C7B\u4FE1\u606F\u771F\u6B63\u503C\u5F97\u8FDB\u5165\u65C1\u8DEF\u7801\u6D41\uFF0C\u5E76\u6B63\u786E\u89E3\u91CA 17.7% BD-Rate\u3002", summary: "\u5206\u7C7B\u8D85\u7801\u672C\u628A\u8D85\u4FE1\u606F\u96C6\u4E2D\u5230\u9AD8\u5C42\u8BED\u4E49\u7ED3\u6784", interaction: "\u9009\u62E9\u5206\u89E3\u8D85\u5148\u9A8C\u6216\u5206\u7C7B\u8D85\u5148\u9A8C\uFF0C\u89C2\u5BDF\u5C40\u90E8\u8D26\u672C/\u8BED\u4E49\u4FBF\u7B7E\u4E0E\u5B9E\u6D4B\u66F2\u7EBF\u635F\u5931", next: "\u8BA9\u540C\u4E00\u6A21\u578B\u8986\u76D6\u4E0D\u540C\u7801\u7387", notes: "\u4F9D\u636E \xA73.3.1 \u4E0E\u5F0F (2)\uFF1Az=h\u2090(y)\uFF0C\u1E91=VQ(z,C_h)\uFF0Cprior_z=h\u209B(\u1E91)\u3002Table 1 \u4E2D\u5206\u89E3\u5148\u9A8C\u76F8\u5BF9\u5206\u7C7B\u5148\u9A8C\u6709 17.7% BD-Rate \u635F\u5931\u3002\u63A8\u7406\u65F6\u8D85\u7801\u672C\u7D22\u5F15\u91C7\u7528\u56FA\u5B9A\u957F\u5EA6 log\u2082M_h \u7F16\u7801\uFF0C\u56E0\u6B64\u56FE\u4E2D 14 bit \u53EA\u5BF9\u5E94\u81EA\u7136\u6A21\u578B M_h=16384 \u7684\u7D22\u5F15\u5BBD\u5EA6\uFF1B\u5C40\u90E8\u989C\u8272/\u7EB9\u7406\u6570\u91CF\u662F\u89E3\u91CA\u793A\u610F\uFF0C\u4E0D\u58F0\u79F0\u5B9E\u6D4B\u7801\u957F\u3002", componentId: "glc-hyper", moduleId: "hyper", thumbnail: "./thumbnails/glc-hyper.jpg" }, { id: "glc-rate", title: "\u4E00\u4E2A\u6A21\u578B\u5982\u4F55\u8986\u76D6\u4E0D\u540C\u7801\u7387", goal: "\u62D6\u52A8\u76EE\u6807\u6863\u4F4D\uFF0C\u7406\u89E3\u5B66\u4E60\u5230\u7684\u7F16\u7801/\u89E3\u7801\u7F29\u653E\u5668\u5982\u4F55\u8BA9\u540C\u4E00\u6A21\u578B\u4EA7\u751F\u4E0D\u540C\u7387\u2014\u7EC6\u8282\u5DE5\u4F5C\u70B9\u3002", summary: "q_enc/q_dec \u8C03\u5236\u540C\u4E00\u6F5C\u7A7A\u95F4\u53D8\u6362\u8DEF\u5F84", interaction: "\u62D6\u52A8\u76EE\u6807\u7801\u7387\u6863\u4F4D\uFF0C\u89C2\u5BDF q_enc\u3001q_dec\u3001\u7801\u91CF\u793A\u610F\u548C\u7EB9\u7406\u7EC6\u8282", next: "\u7406\u89E3\u4EC5\u8BAD\u7EC3\u671F\u4F7F\u7528\u7684\u7801\u9884\u6D4B\u76D1\u7763", notes: "\u4F9D\u636E \xA73.3.2 \u4E0E Figure 14\uFF1AGLC \u6CBF\u7528 DCVC \u7CFB\u5217\u7684\u5B66\u4E60\u7F29\u653E\u5668\u8BBE\u8BA1\uFF0C\u901A\u8FC7\u4E0D\u540C \u03BB \u8BAD\u7EC3\u5E76\u5728\u7F16\u7801/\u89E3\u7801\u53D8\u6362\u4E2D\u8C03\u5236\u7279\u5F81\uFF0C\u4ECE\u800C\u652F\u6301\u5355\u6A21\u578B\u53EF\u53D8\u7801\u7387\u3002\u9875\u9762\u7684 0\u2013100 \u6863\u4F4D\u4E0D\u662F bpp\uFF0C\u4E5F\u4E0D\u4EE3\u8868\u67D0\u4E2A\u5B9E\u6D4B\u5DE5\u4F5C\u70B9\uFF1B\u5B83\u53EA\u5E2E\u52A9\u89C2\u5BDF\u7387\u4E0E\u7EC6\u8282\u7684\u53D6\u5411\u3002\u8BBA\u6587\u5B9E\u9645 bpp \u7ED3\u8BBA\u5E94\u770B Figure 8 \u4E0E \xA75.2\u3002", componentId: "glc-rate", moduleId: "rate", thumbnail: "./thumbnails/glc-rate.jpg" }] }, { kind: "chapter", id: "chap-4", title: "04 \xB7 \u8BA9\u538B\u7F29\u7801\u4FDD\u7559\u8BED\u4E49\uFF1A\u7801\u9884\u6D4B\u76D1\u7763", modules: [{ kind: "module", id: "code-prediction", title: "\u7801\u9884\u6D4B\u5668\u7684\u4F4D\u7F6E\u6D88\u878D", desc: "\u9009\u62E9\u65E0\u9884\u6D4B\u3001\u63A8\u7406\u7F51\u7EDC\u5185\u9884\u6D4B\u3001\u4EC5\u8BAD\u7EC3\u76D1\u7763\u4E09\u79CD\u4F4D\u7F6E\uFF0C\u89C2\u5BDF\u5C5E\u6027\u7A33\u5B9A\u6027\u548C BD-Rate\u3002", componentId: "glc-code-prediction" }], scenes: [{ id: "glc-code-prediction", title: "\u7801\u9884\u6D4B\u4E3A\u4F55\u53EA\u7559\u5728\u8BAD\u7EC3\u671F", goal: "\u9009\u62E9\u9884\u6D4B\u5668\u4F4D\u7F6E\uFF0C\u533A\u5206\u201C\u66F4\u5F3A\u8BED\u4E49\u7EA6\u675F\u201D\u4E0E\u201C\u8FC7\u7A84\u63A8\u7406\u74F6\u9888\u201D\uFF0C\u5E76\u6B63\u786E\u8BFB\u51FA 13.1% \u4E0E 60.7%\u3002", summary: "\u8BAD\u7EC3\u76D1\u7763\u63D0\u5347\u8BED\u4E49\u4E00\u81F4\u6027\uFF0C\u63A8\u7406\u8DEF\u5F84\u4E0D\u7ECF\u8FC7\u7801\u672C\u74F6\u9888", interaction: "\u9009\u62E9\u65E0\u7801\u9884\u6D4B/\u63A8\u7406\u7F51\u7EDC\u5185\u7801\u9884\u6D4B/\u4EC5\u8BAD\u7EC3\u76D1\u7763\uFF0C\u6BD4\u8F83\u5C5E\u6027\u793A\u610F\u4E0E BD-Rate", next: "\u6838\u5BF9\u6D88\u878D\u4E0E\u4E3B\u8981\u7ED3\u679C\uFF0C\u907F\u514D\u628A\u76F8\u5BF9\u767E\u5206\u6BD4\u8BFB\u6210 bpp", notes: "\u4F9D\u636E \xA74.4\u3001\u5F0F (5) \u4E0E Table 2\uFF1A\u{1D49F}_code=\u03B1CE(M_l,M\u0302_l\u0302)+||l\u2212l\u0302||\xB2\uFF0C\u03B1=0.5\u3002\u65E0\u7801\u9884\u6D4B\u548C\u63A8\u7406\u7F51\u7EDC\u5185\u9884\u6D4B\u5206\u522B\u76F8\u5BF9\u201C\u4EC5\u8BAD\u7EC3\u76D1\u7763\u201D\u6709 13.1% \u4E0E 60.7% BD-Rate \u635F\u5931\u3002Figure 7 \u7684\u773C\u5F71\u3001\u5634\u578B\u7B49\u5C5E\u6027\u53EA\u63D0\u4F9B\u5B9A\u6027\u4F8B\u5B50\uFF1B\u672C\u9875\u4EBA\u8138\u56FE\u662F\u793A\u610F\uFF0C\u4E0D\u662F\u9010\u56FE\u590D\u73B0\uFF0C\u4E5F\u4E0D\u80FD\u636E\u6B64\u63A8\u65AD\u8EAB\u4EFD\u4FDD\u6301\u5DF2\u8FBE\u751F\u4EA7\u6807\u51C6\u3002", componentId: "glc-code-prediction", moduleId: "code-prediction", thumbnail: "./thumbnails/glc-code-prediction.jpg" }] }, { kind: "chapter", id: "chap-5", title: "05 \xB7 \u8BC1\u636E\u3001\u5E94\u7528\u4E0E\u5931\u6548\u8FB9\u754C", modules: [{ kind: "module", id: "ablation", title: "\u4E09\u7EC4\u5173\u952E\u6D88\u878D", desc: "\u5207\u6362\u6F5C\u7801\u65B9\u6848\u3001\u7801\u9884\u6D4B\u4F4D\u7F6E\u4E0E patch \u5927\u5C0F\uFF0C\u6838\u5BF9\u96F6\u57FA\u7EBF\u548C BD-Rate \u65B9\u5411\u3002", componentId: "glc-ablation" }, { kind: "module", id: "results", title: "\u4E3B\u8981\u7ED3\u679C\u53E3\u5F84", desc: "\u5207\u6362\u81EA\u7136/\u4EBA\u8138/\u7B49 FID \u7ED3\u679C\uFF0C\u533A\u5206\u62A5\u544A\u8303\u56F4\u4E0E\u5F52\u4E00\u5316\u6BD4\u7279\u8282\u7701\u3002", componentId: "glc-results" }, { kind: "module", id: "applications", title: "\u6062\u590D\u4E0E\u98CE\u683C\u5316\u5E94\u7528", desc: "\u9009\u62E9\u666E\u901A\u538B\u7F29\u3001\u6062\u590D\u7F16\u7801\u548C\u98CE\u683C\u89E3\u7801\u8DEF\u5F84\uFF0C\u6838\u5BF9\u6062\u590D\u5E94\u7528\u6307\u6807\u3002", componentId: "glc-applications" }, { kind: "module", id: "limits", title: "\u5C4F\u5E55\u5185\u5BB9\u5931\u8D25\u8FB9\u754C", desc: "\u589E\u52A0\u5206\u5E03\u504F\u79FB\uFF0C\u89C2\u5BDF\u7F51\u683C\u3001\u6587\u5B57\u548C\u751F\u6210\u5148\u9A8C\u4E4B\u95F4\u7684\u51B2\u7A81\u3002", componentId: "glc-limits" }], scenes: [{ id: "glc-ablation", title: "\u6D88\u878D\u7ED3\u679C\uFF1A\u6240\u6709\u6570\u503C\u90FD\u662F BD-Rate \u8D8A\u4F4E\u8D8A\u597D", goal: "\u5207\u6362\u6D88\u878D\u65CF\uFF0C\u6838\u5BF9\u67F1\u503C\u3001\u5171\u540C\u5C3A\u5EA6\u548C 0% \u53C2\u8003\u70B9\uFF0C\u907F\u514D\u628A\u76F8\u5BF9\u66F2\u7EBF\u635F\u5931\u5F53\u4F5C bpp \u8282\u7701\u3002", summary: "\u53D8\u6362\u7F16\u7801\u3001\u5206\u7C7B\u8D85\u5148\u9A8C\u4E0E\u5C40\u90E8\u6CE8\u610F\u529B\u5747\u6709\u5B9E\u6D4B\u652F\u6301", interaction: "\u9009\u62E9\u6F5C\u7801\u65B9\u6848\u3001\u7801\u9884\u6D4B\u6216\u6CE8\u610F\u529B\u65CF\uFF0C\u89C2\u5BDF\u7CBE\u786E BD-Rate \u67F1\u503C", next: "\u9605\u8BFB\u4E3B\u8981\u5DE5\u4F5C\u8303\u56F4\u4E0E\u7B49 FID \u6BD4\u8F83", notes: "\u6570\u503C\u6765\u81EA Table 1\u3001Table 2 \u4E0E Table 4\uFF1A\u7D22\u5F15\u56FE 66.2%\u3001\u5206\u89E3\u5148\u9A8C 17.7%\u3001\u5206\u7C7B\u5148\u9A8C 0%\uFF1B\u65E0\u7801\u9884\u6D4B 13.1%\u3001\u63A8\u7406\u7F51\u7EDC\u5185\u9884\u6D4B 60.7%\u3001\u4EC5\u76D1\u7763 0%\uFF1BGlobal 20.8%\u300164\xD764 8.4%\u300132\xD732 0%\u300116\xD716 1.8%\u3002BD-Rate \u662F\u5BF9 FID\u2013BPP \u66F2\u7EBF\u7684\u6574\u4F53\u6BD4\u8F83\uFF0C\u5E76\u975E bpp\u3001FID \u6216\u53C2\u6570\u91CF\u3002", componentId: "glc-ablation", moduleId: "ablation", thumbnail: "./thumbnails/glc-ablation.jpg" }, { id: "glc-results", title: "45% \u6BD4\u7279\u8282\u7701\u6765\u81EA\u7B49 FID \u6BD4\u8F83", goal: "\u533A\u5206\u81EA\u7136\u56FE\u50CF\u5DE5\u4F5C\u8303\u56F4\u3001\u4EBA\u8138\u5DE5\u4F5C\u8303\u56F4\u548C CLIC2020 \u7B49 FID \u76F8\u5BF9\u7ED3\u679C\uFF0C\u660E\u786E\u6BCF\u4E2A\u6570\u5B57\u7684\u5355\u4F4D\u4E0E\u6761\u4EF6\u3002", summary: "\u4F4E\u4E8E 0.04/0.01 bpp \u662F\u8303\u56F4\uFF0C45% \u662F\u7B49 FID \u7684\u76F8\u5BF9\u6BD4\u7279\u8282\u7701", interaction: "\u5207\u6362\u81EA\u7136\u56FE\u50CF\u3001\u4EBA\u8138\u548C CLIC2020 \u4E09\u5F20\u7ED3\u679C\u5361\uFF0C\u9605\u8BFB\u8BC1\u636E\u6761\u4EF6", next: "\u67E5\u770B\u540C\u4E00\u6F5C\u7A7A\u95F4\u652F\u6301\u7684\u6062\u590D\u4E0E\u98CE\u683C\u5316\u5E94\u7528", notes: "\u4F9D\u636E Abstract\u3001\xA75.2\u3001Figure 8 \u4E0E \xA79.1\uFF1A\u81EA\u7136\u56FE\u50CF\u62A5\u544A\u4F4E\u4E8E 0.04 bpp\uFF0C\u4EBA\u8138\u62A5\u544A\u4F4E\u4E8E 0.01 bpp\uFF0CCLIC2020 \u7EA6 45% \u6BD4\u7279\u8282\u7701\u662F\u5728\u4E0E MS-ILLM \u7B49 FID \u6761\u4EF6\u4E0B\u5F97\u5230\u3002FID/KID \u5728\u81EA\u7136\u56FE\u50CF\u4E0A\u6309 256\xD7256 \u91CD\u53E0 patch \u8BA1\u7B97\uFF0CCLIC2020 \u5171 28,650 patches\uFF1B\u5B83\u4EEC\u662F\u6570\u636E\u96C6\u7EA7\u7EDF\u8BA1\uFF0C\u4E0D\u662F\u9010\u56FE\u4FDD\u771F\u4FDD\u8BC1\u3002", componentId: "glc-results", moduleId: "results", thumbnail: "./thumbnails/glc-results.jpg" }, { id: "glc-applications", title: "\u540C\u4E00\u4E2A\u6F5C\u7A7A\u95F4\u5982\u4F55\u627F\u8F7D\u6062\u590D\u4E0E\u98CE\u683C\u5316", goal: "\u9009\u62E9\u5E94\u7528\u8DEF\u5F84\uFF0C\u5224\u65AD\u66FF\u6362\u7684\u662F\u7F16\u7801\u5668\u8FD8\u662F\u89E3\u7801\u5668\uFF0C\u5E76\u6B63\u786E\u8BFB\u6062\u590D\u5E94\u7528\u7684 bpp\u3001FID\u3001DISTS \u4E0E\u53C2\u6570\u91CF\u3002", summary: "\u6062\u590D\u66FF\u6362\u7F16\u7801\u5668\uFF0C\u98CE\u683C\u5316\u89E3\u7801\u66FF\u6362\u89E3\u7801\u5668", interaction: "\u9009\u62E9\u666E\u901A\u538B\u7F29\u3001\u6062\u590D\u5E76\u538B\u7F29\u3001\u98CE\u683C\u5316\u89E3\u7801\uFF0C\u89C2\u5BDF\u8DEF\u5F84\u4E0E\u7CBE\u786E\u6307\u6807", next: "\u63A8\u5230\u5C4F\u5E55\u5185\u5BB9\u8FD9\u4E00\u5206\u5E03\u5916\u8FB9\u754C", notes: "\u4F9D\u636E \xA76\u3001Table 3 \u4E0E Figure 10/16\uFF1A\u6062\u590D\u7F16\u7801\u5668\u628A\u5931\u771F\u56FE\u50CF\u6620\u5C04\u5230\u5E72\u51C0\u6F5C\u7801\uFF1BTable 3 \u4E2D GLC Restoration Application \u4E3A 0.0299 bpp\u3001FID 8.62\u3001DISTS 0.1081\u3001109M\uFF0C\u5BF9\u7167 Restormer+GLC \u4E3A 0.0314\u300110.79\u30010.1174\u300125M+109M\u3002\u98CE\u683C\u5316\u89E3\u7801\u66FF\u6362\u6F5C\u89E3\u7801\u5668\u3002\u4E24\u8005\u5747\u4E3A\u6F14\u793A\u5E94\u7528\uFF0C\u4E0D\u662F\u901A\u7528\u751F\u4EA7\u670D\u52A1\uFF1B\u6062\u590D\u5B9E\u9A8C\u53EA\u8986\u76D6 \u03C3=20 \u9AD8\u65AF\u566A\u58F0\u793A\u4F8B\u3002", componentId: "glc-applications", moduleId: "applications", thumbnail: "./thumbnails/glc-applications.jpg" }, { id: "glc-limits", title: "\u751F\u6210\u5F0F\u771F\u5B9E\u611F\u4E0D\u80FD\u4FDD\u8BC1\u7CBE\u786E\u8FD8\u539F", goal: "\u628A\u5185\u5BB9\u4ECE\u81EA\u7136\u7167\u7247\u63A8\u5411\u5C4F\u5E55\u7F51\u683C\u4E0E\u6587\u5B57\uFF0C\u89C2\u5BDF\u751F\u6210\u5148\u9A8C\u4F55\u65F6\u8986\u76D6\u8F93\u5165\u7ED3\u6784\uFF0C\u5E76\u5F62\u6210\u90E8\u7F72\u524D\u68C0\u67E5\u5224\u636E\u3002", summary: "\u5C4F\u5E55\u7F51\u683C\u4E0E\u6587\u5B57\u662F\u8BBA\u6587\u660E\u786E\u62A5\u544A\u7684\u6CDB\u5316\u5F31\u70B9", interaction: "\u62D6\u52A8\u5206\u5E03\u504F\u79FB\uFF0C\u89C2\u5BDF\u76F4\u7EBF\u3001\u7F51\u683C\u4E0E\u6587\u5B57\u4ECE\u7A33\u5B9A\u5230\u5931\u771F\u7684\u8FC7\u7A0B", next: "\u6838\u5BF9\u672C\u8F6E\u5DE5\u4F5C\u91CF\u548C\u590D\u73B0\u8FB9\u754C", notes: "\u8BBA\u6587 \xA77\u3001\xA710 \u4E0E Figure 15 \u660E\u786E\u62A5\u544A\u5C4F\u5E55\u5185\u5BB9\u6CDB\u5316\u4E0D\u8DB3\uFF0C\u5C24\u5176\u76F4\u7EBF\u7F51\u683C\uFF1BGLC \u7684\u6587\u5B57\u533A\u57DF\u53EF\u80FD\u6BD4 TCM/MS-ILLM \u66F4\u6E05\u6670\uFF0C\u4F46\u4ECD\u4E0D\u80FD\u4FDD\u8BC1\u51C6\u786E\u91CD\u5EFA\u3002\u9875\u9762\u7684\u5F2F\u66F2\u3001\u7F3A\u53E3\u548C OCR \u5EFA\u8BAE\u662F\u653E\u5927\u89E3\u91CA\uFF0C\u4E0D\u662F\u8BBA\u6587\u65B0\u589E\u89E3\u6CD5\u3002FID/DISTS \u53EF\u80FD\u65E0\u6CD5\u5355\u72EC\u66B4\u9732\u5C40\u90E8\u6587\u5B57\u9519\u8BEF\uFF0C\u56E0\u6B64\u90E8\u7F72\u5E94\u52A0\u7ED3\u6784\u3001OCR \u4E0E\u4EBA\u5DE5\u68C0\u67E5\u3002", componentId: "glc-limits", moduleId: "limits", thumbnail: "./thumbnails/glc-limits.jpg" }] }, { kind: "chapter", id: "chap-6", title: "06 \xB7 \u5DE5\u4F5C\u91CF\u3001\u590D\u73B0\u8FB9\u754C\u4E0E\u4E0B\u4E00\u6B65\u5B9E\u9A8C", modules: [{ kind: "module", id: "reproduce", title: "\u5DE5\u4F5C\u68C0\u67E5\u4E0E\u8BDA\u5B9E\u8FB9\u754C", desc: "\u5207\u6362\u5B8C\u6210\u9879\uFF0C\u6838\u5BF9\u9605\u8BFB\u3001\u516C\u5F0F\u3001\u4EA4\u4E92\u3001\u62A5\u544A\u4E0E\u91CD\u65B0\u8BAD\u7EC3\u7684\u771F\u5B9E\u8FB9\u754C\u3002", componentId: "glc-reproduce" }, { kind: "module", id: "closing", title: "\u53EF\u8BC1\u4F2A\u7684\u540E\u7EED\u5B9E\u9A8C", desc: "\u9009\u62E9 OOD\u3001\u8D85\u7D22\u5F15\u71B5\u7F16\u7801\u6216\u4EBA\u773C\u7814\u7A76\uFF0C\u67E5\u770B\u5047\u8BBE\u3001\u57FA\u7EBF\u3001\u6307\u6807\u548C\u5224\u5B9A\u6807\u51C6\u3002", componentId: "glc-closing" }], scenes: [{ id: "glc-reproduce", title: "\u672C\u8F6E\u5DE5\u4F5C\u5B8C\u6210\u4E86\u4EC0\u4E48\uFF0C\u6CA1\u6709\u5B8C\u6210\u4EC0\u4E48", goal: "\u9010\u9879\u6838\u5BF9\u9605\u8BFB\u3001\u516C\u5F0F\u3001\u7ED3\u679C\u53E3\u5F84\u3001\u4EA4\u4E92\u590D\u73B0\u4E0E\u8BAD\u7EC3\u590D\u73B0\uFF0C\u62D2\u7EDD\u628A\u7406\u89E3\u5DE5\u4F5C\u5305\u88C5\u6210\u5B8C\u6574\u5B9E\u9A8C\u590D\u73B0\u3002", summary: "\u5DF2\u505A\u673A\u5236\u4E0E\u8BC1\u636E\u5BA1\u8BFB\uFF0C\u672A\u91CD\u8BAD\u5B8C\u6574 GLC", interaction: "\u5207\u6362\u516D\u9879\u68C0\u67E5\uFF0C\u89C2\u5BDF\u8986\u76D6\u5EA6\u548C\u590D\u73B0\u8FB9\u754C\u53CD\u9988", next: "\u9009\u62E9\u4E00\u6761\u80FD\u88AB\u6570\u636E\u63A8\u7FFB\u7684\u540E\u7EED\u5B9E\u9A8C", notes: "\u8FD9\u662F\u5BF9\u672C\u6B21\u5B66\u4E60\u5DE5\u4F5C\u91CF\u7684\u81EA\u6211\u5BA1\u8BA1\uFF0C\u4E0D\u662F\u8BBA\u6587\u8BC1\u636E\u3002\u5B8C\u6210\u9879\u5305\u62EC\u7CBE\u8BFB\u3001\u516C\u5F0F\u4E0E\u7B26\u53F7\u6838\u5BF9\u3001\u6570\u636E\u96C6\u548C\u6307\u6807\u53E3\u5F84\u6838\u5BF9\u3001\u4EA4\u4E92\u5F0F\u673A\u5236\u590D\u73B0\u4E0E\u62A5\u544A\uFF1B\u672A\u5B8C\u6210\u9879\u662F\u590D\u7528\u4F5C\u8005\u8BAD\u7EC3\u6570\u636E\u6D41\u7A0B\u3001\u4ECE\u5934\u8BAD\u7EC3 VQ-VAE/\u53D8\u6362\u7F16\u7801/\u751F\u6210\u89E3\u7801\u5668\uFF0C\u4EE5\u53CA\u5728\u76F8\u540C\u534F\u8BAE\u4E0B\u8BC4\u6D4B\u3002\u4EA4\u4E92\u7F51\u9875\u53EA\u590D\u73B0\u673A\u5236\u56E0\u679C\u5173\u7CFB\uFF0C\u4E0D\u80FD\u66FF\u4EE3\u8BAD\u7EC3\u4E0E benchmark\u3002", componentId: "glc-reproduce", moduleId: "reproduce", thumbnail: "./thumbnails/glc-reproduce.jpg" }, { id: "glc-closing", title: "\u4E0B\u4E00\u6B65\u5E94\u9A8C\u8BC1\u6CDB\u5316\u3001\u8D85\u7D22\u5F15\u7F16\u7801\u8FD8\u662F\u4EBA\u773C\u6536\u76CA", goal: "\u6BD4\u8F83\u4E09\u6761\u540E\u7EED\u8DEF\u7EBF\uFF0C\u786E\u5B9A\u5047\u8BBE\u3001\u57FA\u7EBF\u3001\u4E3B\u6307\u6807\u548C\u5931\u8D25\u5224\u636E\uFF0C\u628A\u6279\u5224\u6027\u601D\u8003\u8F6C\u6210\u53EF\u6267\u884C\u5B9E\u9A8C\u3002", summary: "\u540E\u7EED\u5B9E\u9A8C\u5FC5\u987B\u540C\u65F6\u7EA6\u675F\u8D28\u91CF\u3001\u7801\u7387\u4E0E\u7ED3\u6784\u4FDD\u771F", interaction: "\u9009\u62E9\u5C4F\u5E55 OOD\u3001\u8D85\u7D22\u5F15\u71B5\u7F16\u7801\u6216\u4EBA\u773C\u7814\u7A76\uFF0C\u9605\u8BFB\u5B8C\u6574\u534F\u8BAE", next: "", notes: "\u4E09\u9879\u5747\u662F\u672A\u9A8C\u8BC1\u7684\u540E\u7EED\u5047\u8BBE\uFF0C\u4E0D\u662F\u8BBA\u6587\u7ED3\u8BBA\u3002\u5EFA\u8BAE\u4F18\u5148\u505A OOD \u4E0E\u8D85\u7D22\u5F15\u7F16\u7801\uFF1A\u524D\u8005\u68C0\u9A8C GLC \u7684\u7ED3\u6784\u8FB9\u754C\uFF0C\u540E\u8005\u76F4\u63A5\u68C0\u9A8C\u5206\u7C7B\u8D85\u4FE1\u606F\u662F\u5426\u8FD8\u53EF\u538B\u7F29\u3002\u5B9E\u9A8C\u5FC5\u987B\u56FA\u5B9A\u6570\u636E\u5212\u5206\u4E0E\u7801\u7387\u70B9\uFF0C\u540C\u65F6\u62A5\u544A FID/DISTS\u3001bpp\u3001\u7ED3\u6784\u6307\u6807\u548C\u5931\u8D25\u6848\u4F8B\u3002\u4EBA\u773C\u7814\u7A76\u5E94\u4E0E\u5BA2\u89C2\u6307\u6807\u7ED3\u5408\uFF0C\u907F\u514D\u53EA\u7528\u504F\u597D\u66FF\u4EE3\u4FDD\u771F\u3002", componentId: "glc-closing", moduleId: "closing", thumbnail: "./thumbnails/glc-closing.jpg" }] }] };
  function yt({ variant: a = "body", children: y, muted: u = false }) {
    const p = a === "h1" || a === "h2" || a === "h3" ? a : "p";
    return l.jsx(p, { className: `ppt-type ppt-type-${a}${u ? " ppt-muted" : ""}`, children: y });
  }
  const jt = (a, y, u) => Math.max(y, Math.min(u, a));
  const zr = (a, y = 1) => {
    const u = Number(a.toFixed(y));
    return Number.isInteger(u) ? String(u) : u.toFixed(y);
  };
  function We({ children: a, tone: y = "blue" }) {
    return l.jsx("span", { className: `glc-badge is-${y}`, children: a });
  }
  function rn({ label: a, value: y, max: u, suffix: p = "%", tone: x = "red", caption: w }) {
    return l.jsxs("div", { className: `glc-metric-row is-${x}`, children: [l.jsxs("div", { className: "glc-metric-label", children: [l.jsx("span", { children: a }), l.jsxs("b", { children: [zr(y), p] })] }), l.jsx("div", { className: "glc-metric-track", children: l.jsx("span", { style: { width: `${jt(y / u, 0, 1) * 100}%` } }) }), w && l.jsx("p", { children: w })] });
  }
  function ff(a, y, u, p) {
    const x = (a + 0.5) / 24, w = (y + 0.5) / 15, D = w > 0.47 + 0.11 * Math.sin(x * Math.PI * 1.3) - 0.1 * Math.abs(x - 0.5), E = w > 0.37 + 0.07 * Math.sin(x * 8), R = Math.hypot((x - 0.74) * 1.7, w - 0.23) < 0.105, L = w > 0.64 && Math.abs(x - (0.48 + 0.16 * Math.sin(w * 5.4))) < (w - 0.59) * 0.34, I = w > 0.77 && y % 2 === 0 && a % 4 === 0, _ = u / 100;
    return R ? _ > 0.12 ? "#f3b45f" : "#dfd4a6" : I ? "#73533e" : L ? _ > 0.2 ? "#76a9bb" : "#8da7aa" : D ? _ > 0.42 ? "#3f7765" : "#617c70" : E ? _ > 0.3 ? "#7fa69a" : "#8fa8a0" : p === "latent" ? w < 0.18 ? "#d8e9e7" : w < 0.34 ? "#e8dfbf" : "#dce6da" : w < 0.34 ? _ > 0.6 ? "#d5e8e8" : "#dce7e6" : w < 0.62 ? _ > 0.55 ? "#e6dfc4" : "#e2ddca" : _ > 0.58 ? "#c6d8b8" : "#cbd8c0";
  }
  function wt({ detail: a = 80, mode: y = "latent", generative: u = false, className: p = "", label: x }) {
    const w = U.useId().replace(/:/g, ""), D = y === "pixel" ? jt(4 - a / 32, 0, 4.4) : jt(1.8 - a / 80, 0, 1.8), E = [];
    for (let L = 0; L < 15; L += 1) for (let I = 0; I < 24; I += 1) {
      const _ = y === "pixel" && a < 45 ? Math.sin((L * 11 + I * 7) * 1.7) * (45 - a) * 0.045 : 0;
      E.push(l.jsx("rect", { x: I * 25 + D / 2 + _, y: L * 25 + D / 2, width: 25 - D, height: 25 - D, rx: y === "latent" ? 4 : 1.5, fill: ff(I, L, a, y), opacity: y === "pixel" && a < 36 && (L + I) % 7 === 0 ? 0.42 : 1 }, `${L}-${I}`));
    }
    const R = [];
    if (u) for (let L = 0; L < 34; L += 1) {
      const I = 42 + L * 71 % 516, _ = 173 + L * 43 % 166;
      R.push(l.jsx("circle", { cx: I, cy: _, r: 2 + L % 3, fill: L % 3 === 0 ? "#ffffff" : "#3d7565", opacity: 0.22 + L % 4 * 0.08 }, L));
    }
    return l.jsxs("svg", { className: `glc-mosaic ${p}`, viewBox: "0 0 600 380", role: "img", "aria-label": x || `${y === "latent" ? "\u6F5C\u7A7A\u95F4\u8BED\u4E49\u9A6C\u8D5B\u514B" : "\u50CF\u7D20\u7A7A\u95F4\u9A6C\u8D5B\u514B"}\uFF0C\u7EC6\u8282\u9884\u7B97 ${Math.round(a)}`, children: [l.jsxs("defs", { children: [l.jsx("clipPath", { id: `${w}-clip`, children: l.jsx("rect", { width: "600", height: "380", rx: "22" }) }), l.jsx("filter", { id: `${w}-shadow`, x: "-20%", y: "-20%", width: "140%", height: "140%", children: l.jsx("feDropShadow", { dx: "0", dy: "8", stdDeviation: "10", floodColor: "#243650", floodOpacity: ".16" }) }), l.jsx("pattern", { id: `${w}-grid`, width: "25", height: "25", patternUnits: "userSpaceOnUse", children: l.jsx("path", { d: "M25 0H0V25", fill: "none", stroke: "#fff", strokeWidth: "1", opacity: ".22" }) })] }), l.jsxs("g", { clipPath: `url(#${w}-clip)`, filter: `url(#${w}-shadow)`, children: [l.jsx("rect", { width: "600", height: "380", fill: "#e8eee6" }), E, l.jsx("rect", { width: "600", height: "380", fill: `url(#${w}-grid)` }), y === "latent" && l.jsxs(l.Fragment, { children: [l.jsx("path", { d: "M34 246 C125 205 184 164 271 202 C348 235 418 155 570 223", fill: "none", stroke: "#ffffff", strokeWidth: "10", strokeLinecap: "round", opacity: ".22" }), l.jsx("path", { d: "M150 317 C214 281 270 269 325 286 C388 305 438 270 496 261", fill: "none", stroke: "#27446e", strokeWidth: "7", strokeLinecap: "round", opacity: ".18" })] }), R] }), l.jsx("rect", { x: "2", y: "2", width: "596", height: "376", rx: "21", fill: "none", stroke: "#ffffff", strokeWidth: "8", opacity: ".8" }), l.jsx("rect", { x: "8", y: "8", width: "584", height: "364", rx: "17", fill: "none", stroke: "#98aa9c", strokeWidth: "2", opacity: ".55" })] });
  }
  function ie({ children: a, className: y = "", tone: u = "neutral" }) {
    return l.jsx("section", { className: `glc-panel is-${u} ${y}`, children: a });
  }
  function Se({ children: a, tone: y = "blue", active: u = true }) {
    return l.jsx("span", { className: `glc-code-chip is-${y}${u ? " is-active" : ""}`, children: a });
  }
  function pf(a) {
    return null;
  }
  const Qs = { latent: { label: "\u6F5C\u7801\u600E\u4E48\u7F16", question: "\u76F4\u63A5\u4F20\u7D22\u5F15\u56FE\uFF0C\u8FD8\u662F\u505A\u53D8\u6362\u7F16\u7801\u5E76\u6362\u8D85\u5148\u9A8C\uFF1F", max: 70, axis: [0, 20, 40, 60], rows: [{ label: "\u7D22\u5F15\u56FE\u76F4\u4F20", value: 66.2, tone: "red" }, { label: "\u53D8\u6362\u7F16\u7801 \xB7 \u5206\u89E3\u5148\u9A8C", value: 17.7, tone: "orange" }, { label: "\u53D8\u6362\u7F16\u7801 \xB7 \u5206\u7C7B\u5148\u9A8C", value: 0, tone: "green" }] }, prediction: { label: "\u7801\u9884\u6D4B\u653E\u54EA", question: "\u7801\u9884\u6D4B\u5E94\u5728\u63A8\u7406\u8DEF\u5F84\u91CC\uFF0C\u8FD8\u662F\u53EA\u5F53\u8BAD\u7EC3\u76D1\u7763\uFF1F", max: 65, axis: [0, 20, 40, 60], rows: [{ label: "\u65E0\u7801\u9884\u6D4B", value: 13.1, tone: "orange" }, { label: "\u63A8\u7406\u7F51\u7EDC\u5185\u9884\u6D4B", value: 60.7, tone: "red" }, { label: "\u4EC5\u8BAD\u7EC3\u76D1\u7763", value: 0, tone: "green" }] }, attention: { label: "\u6CE8\u610F\u529B\u8303\u56F4", question: "\u9AD8\u5206\u8FA8\u7387\u6F5C\u7801\u5E94\u505A\u5168\u5C40\u6CE8\u610F\u529B\uFF0C\u8FD8\u662F\u5C40\u90E8 patch \u6CE8\u610F\u529B\uFF1F", max: 25, axis: [0, 5, 10, 15, 20], rows: [{ label: "Global", value: 20.8, tone: "red" }, { label: "64\xD764 patch", value: 8.4, tone: "orange" }, { label: "32\xD732 patch", value: 0, tone: "green" }, { label: "16\xD716 patch", value: 1.8, tone: "blue" }] } };
  function hf() {
    const [a, y] = U.useState("latent"), u = Qs[a];
    return l.jsxs("div", { className: "glc-scene glc-ablation-page", children: [l.jsxs("aside", { className: "glc-ablation-menu", children: [l.jsx(We, { tone: "green", children: "\u6D88\u878D\u5BF9\u7167" }), l.jsx("h3", { children: "\u9009\u62E9\u53D8\u5316\u8F74" }), Object.keys(Qs).map((p) => l.jsxs("button", { className: a === p ? "is-active" : "", onClick: () => y(p), "aria-pressed": a === p, children: [l.jsx("span", { children: Qs[p].label }), l.jsx("b", { children: p === "latent" ? "\u8868 1" : p === "prediction" ? "\u8868 2" : "\u8868 4" })] }, p)), l.jsxs("div", { className: "glc-direction-card", children: [l.jsx("span", { children: "BD-Rate" }), l.jsx("b", { children: "\u8D8A\u4F4E\u8D8A\u597D \u2193" }), l.jsx("p", { children: "0% \u6307\u5F53\u524D\u8BBA\u6587\u65B9\u6CD5\u7684\u53C2\u8003\u8BBE\u7F6E\uFF0C\u4E0D\u662F\u201C\u96F6\u9519\u8BEF\u201D\u6216\u7EDD\u5BF9\u5B8C\u7F8E\u3002" })] })] }), l.jsxs(ie, { className: "glc-ablation-chart", tone: "green", children: [l.jsxs("div", { className: "glc-chart-head", children: [l.jsxs("div", { children: [l.jsx("span", { className: "glc-section-label", children: "CLIC2020 \xB7 FID\u2013BPP \u66F2\u7EBF" }), l.jsx("h3", { children: u.question })] }), l.jsx(Se, { tone: "green", children: "\u6240\u6709\u67F1\u5171\u7528\u5F53\u524D\u7EC4\u5C3A\u5EA6" })] }), l.jsx("div", { className: "glc-axis", children: u.axis.map((p) => l.jsxs("span", { style: { left: `${p / u.max * 100}%` }, children: [p, "%"] }, p)) }), l.jsx("div", { className: "glc-ablation-bars", children: u.rows.map((p) => l.jsx(rn, { label: p.label, value: p.value, max: u.max, suffix: "% BD-Rate", tone: p.tone }, p.label)) }), l.jsxs("div", { className: "glc-chart-foot", children: [l.jsxs("p", { children: [l.jsx("b", { children: "\u8BFB\u56FE\u7ED3\u8BBA\uFF1A" }), a === "latent" ? "\u76F4\u63A5\u7D22\u5F15\u56FE\u7684\u66F2\u7EBF\u6574\u4F53\u6700\u5DEE\uFF1B\u5206\u7C7B\u8D85\u5148\u9A8C\u8FDB\u4E00\u6B65\u51CF\u5C11\u4E86\u53D8\u6362\u7F16\u7801\u7684\u8D85\u4FE1\u606F\u6210\u672C\u3002" : a === "prediction" ? "\u7801\u9884\u6D4B\u653E\u8FDB\u63A8\u7406\u4F1A\u5F62\u6210\u74F6\u9888\uFF1B\u53EA\u5728\u8BAD\u7EC3\u671F\u7EA6\u675F\u8BED\u4E49\uFF0C\u6027\u80FD\u6700\u597D\u3002" : "32\xD732 \u5C40\u90E8\u6CE8\u610F\u529B\u662F\u8BE5\u9AD8\u5206\u8FA8\u7387\u8BBE\u7F6E\u7684\u53C2\u8003\uFF1B\u5168\u5C40\u6CE8\u610F\u529B\u53CD\u800C\u635F\u5931\u6700\u5927\u3002"] }), l.jsx("span", { children: "\u67F1\u9AD8\u662F\u76F8\u5BF9 BD-Rate \u635F\u5931\uFF1B\u4E0D\u80FD\u8BFB\u6210 bpp \u6216\u53C2\u6570\u8282\u7701\u3002" })] })] })] });
  }
  const Ws = { compress: { label: "\u666E\u901A\u538B\u7F29", caption: "\u539F\u56FE\u76F4\u63A5\u8FDB\u5165\u538B\u7F29\u7F16\u7801\u5668", encoder: "\u538B\u7F29\u7F16\u7801 E", decoder: "\u751F\u6210\u5F0F\u89E3\u7801 D", feedback: "\u6807\u51C6\u8DEF\u5F84\uFF1A\u539F\u56FE \u2192 E \u2192 \u6F5C\u7A7A\u95F4\u53D8\u6362\u7F16\u7801 \u2192 D \u2192 \u91CD\u5EFA\u3002" }, restore: { label: "\u6062\u590D\u5E76\u538B\u7F29", caption: "\u566A\u58F0\u56FE\u76F4\u63A5\u6620\u5C04\u5230\u5E72\u51C0\u6F5C\u7801", encoder: "\u6062\u590D\u7F16\u7801 E_restore", decoder: "\u751F\u6210\u5F0F\u89E3\u7801 D", feedback: "\u6062\u590D\u7F16\u7801\u5668\u628A\u5931\u771F\u56FE x_d \u6620\u5C04\u5230\u5E72\u51C0\u6F5C\u7801 l_c\uFF0C\u7701\u53BB\u4E32\u8054 Restormer \u7684\u989D\u5916\u7F51\u7EDC\u3002" }, style: { label: "\u98CE\u683C\u5316\u89E3\u7801", caption: "\u540C\u4E00\u6F5C\u7801\u6362\u4E00\u79CD\u89E3\u7801\u5668", encoder: "\u538B\u7F29\u7F16\u7801 E", decoder: "\u98CE\u683C\u89E3\u7801 D_style", feedback: "\u7F16\u7801\u7AEF\u4E0D\u53D8\uFF1B\u66FF\u6362\u6F5C\u89E3\u7801\u5668\u540E\uFF0C\u540C\u4E00\u7801\u6D41\u53EF\u89E3\u7801\u4E3A\u4E0D\u540C\u98CE\u683C\u3002" } };
  function mf() {
    const [a, y] = U.useState("restore"), u = Ws[a];
    return l.jsxs("div", { className: "glc-scene glc-app-page", children: [l.jsxs("aside", { className: "glc-app-menu", children: [l.jsx(We, { tone: "green", children: "\u6F5C\u7A7A\u95F4\u590D\u7528" }), l.jsx("h3", { children: "\u9009\u62E9\u5E94\u7528\u8DEF\u5F84" }), Object.keys(Ws).map((p) => l.jsxs("button", { className: a === p ? "is-active" : "", onClick: () => y(p), "aria-pressed": a === p, children: [l.jsx("span", { children: Ws[p].label }), l.jsx("b", { children: p === "compress" ? "\u57FA\u51C6" : p === "restore" ? "\u7F16\u7801\u5668" : "\u89E3\u7801\u5668" })] }, p)), l.jsx("div", { className: `glc-feedback is-${a === "compress" ? "blue" : "green"}`, "aria-live": "polite", children: u.feedback }), l.jsx("p", { className: "glc-note", children: "\u8FD9\u4E9B\u662F\u8BBA\u6587\u6F14\u793A\u5E94\u7528\uFF0C\u4E0D\u7B49\u540C\u4E8E\u5DF2\u90E8\u7F72\u7684\u901A\u7528\u751F\u4EA7\u7CFB\u7EDF\u3002" })] }), l.jsxs("div", { className: "glc-app-main", children: [l.jsxs(ie, { className: "glc-app-path", tone: "green", children: [l.jsxs("div", { className: "glc-app-path-title", children: [l.jsx("span", { children: u.caption }), l.jsx(Se, { tone: "green", children: "\u5171\u4EAB\u6F5C\u7A7A\u95F4" })] }), l.jsxs("div", { className: "glc-app-flow", children: [l.jsxs("div", { className: `glc-app-image ${a === "restore" ? "is-noisy" : ""}`, children: [l.jsx(wt, { detail: a === "restore" ? 56 : 82, mode: "latent", generative: true, label: a === "restore" ? "\u5E26\u566A\u8F93\u5165\u793A\u610F\u56FE" : "\u8F93\u5165\u56FE\u50CF\u793A\u610F\u56FE" }), l.jsx("span", { children: a === "restore" ? "\u5931\u771F\u8F93\u5165 x_d" : "\u8F93\u5165\u56FE\u50CF x" })] }), l.jsx("span", { className: "glc-path-arrow", "aria-hidden": "true", children: "\u2192" }), l.jsxs("div", { className: `glc-app-block is-blue ${a === "restore" ? "is-swapped" : ""}`, children: [l.jsx("b", { children: u.encoder }), l.jsx("span", { children: a === "restore" ? "\u66FF\u6362\u7F16\u7801\u76EE\u6807" : "\u5E38\u89C4\u7F16\u7801" })] }), l.jsx("span", { className: "glc-path-arrow", "aria-hidden": "true", children: "\u2192" }), l.jsxs("div", { className: "glc-app-latent", children: [l.jsx(Se, { tone: "purple", children: "l / l_c" }), l.jsx("span", { children: "\u6F5C\u7A7A\u95F4" })] }), l.jsx("span", { className: "glc-path-arrow", "aria-hidden": "true", children: "\u2192" }), l.jsxs("div", { className: `glc-app-block is-green ${a === "style" ? "is-swapped" : ""}`, children: [l.jsx("b", { children: u.decoder }), l.jsx("span", { children: a === "style" ? "\u66FF\u6362\u89E3\u7801\u76EE\u6807" : "\u751F\u6210\u5F0F\u91CD\u5EFA" })] }), l.jsx("span", { className: "glc-path-arrow", "aria-hidden": "true", children: "\u2192" }), l.jsxs("div", { className: "glc-app-output", children: [l.jsx(wt, { detail: a === "style" ? 92 : 78, mode: "latent", generative: true, label: a === "style" ? "\u98CE\u683C\u5316\u8F93\u51FA\u793A\u610F" : "\u6E05\u6670\u91CD\u5EFA\u793A\u610F" }), l.jsx("span", { children: a === "style" ? "\u98CE\u683C\u5316\u8F93\u51FA" : a === "restore" ? "\u6E05\u6670\u91CD\u5EFA" : "\u538B\u7F29\u91CD\u5EFA" })] })] })] }), l.jsxs("div", { className: "glc-app-bottom", children: [l.jsxs(ie, { className: "glc-app-metrics", tone: "green", children: [l.jsx("span", { className: "glc-section-label", children: "CLIC2020 \u6062\u590D\u5E94\u7528 \xB7 \u8D8A\u4F4E\u8D8A\u597D" }), a === "restore" ? l.jsxs(l.Fragment, { children: [l.jsxs("div", { className: "glc-app-metric-grid", children: [l.jsxs("div", { children: [l.jsx("span", { children: "bpp" }), l.jsx("b", { children: "0.0299" }), l.jsx("small", { children: "\u5BF9\u6BD4 0.0314" })] }), l.jsxs("div", { children: [l.jsx("span", { children: "FID" }), l.jsx("b", { children: "8.62" }), l.jsx("small", { children: "\u5BF9\u6BD4 10.79" })] }), l.jsxs("div", { children: [l.jsx("span", { children: "DISTS" }), l.jsx("b", { children: "0.1081" }), l.jsx("small", { children: "\u5BF9\u6BD4 0.1174" })] }), l.jsxs("div", { children: [l.jsx("span", { children: "\u53C2\u6570" }), l.jsx("b", { children: "109M" }), l.jsx("small", { children: "\u5BF9\u6BD4 25M + 109M" })] })] }), l.jsx("p", { children: "\u5BF9\u7167\u4E3A Restormer + GLC Codec\uFF1B\u8BBA\u6587\u62A5\u544A\u6062\u590D\u5E94\u7528\u66F4\u4F18\u4E14\u65E0\u9700\u989D\u5916\u6062\u590D\u7F51\u7EDC\u53C2\u6570\u3002" })] }) : l.jsxs("div", { className: "glc-app-qualitative", children: [l.jsx("strong", { children: a === "compress" ? "Kodak \xB7 CLIC2020 \xB7 DIV2K" : "\u5185\u5BB9 / \u98CE\u683C\u89E3\u8026\u793A\u610F" }), l.jsx("p", { children: a === "compress" ? "\u91CD\u70B9\u4ECD\u662F\u8D85\u4F4E\u7801\u7387\u611F\u77E5\u8D28\u91CF\uFF0C\u800C\u4E0D\u662F\u5728\u56FA\u5B9A bpp \u4E0B\u4FDD\u8BC1\u9010\u50CF\u7D20\u4E00\u81F4\u3002" : "\u98CE\u683C\u5316\u89E3\u7801\u662F\u8BBA\u6587\u6F14\u793A\uFF1B\u5185\u5BB9\u4FDD\u6301\u3001\u7248\u6743\u4E0E\u98CE\u683C\u5F3A\u5EA6\u9700\u8981\u53E6\u884C\u8BC4\u4EF7\u3002" })] })] }), l.jsxs(ie, { className: "glc-app-boundary", tone: "purple", children: [l.jsx("span", { className: "glc-section-label", children: "\u5224\u65AD\u8FB9\u754C" }), l.jsx("p", { children: a === "restore" ? "\u03C3=20 \u9AD8\u65AF\u566A\u58F0\u6F14\u793A\u4E0D\u80FD\u8986\u76D6\u771F\u5B9E\u624B\u673A\u566A\u58F0\u3001\u8FD0\u52A8\u6A21\u7CCA\u548C\u6DF7\u5408\u9000\u5316\u3002" : a === "style" ? "FID/DISTS \u4E0D\u80FD\u5B8C\u6574\u8BC4\u4EF7\u98CE\u683C\u76F8\u4F3C\u5EA6\u4E0E\u5185\u5BB9\u4FDD\u771F\u3002" : "\u538B\u7F29\u5E94\u7528\u4ECD\u4F9D\u8D56\u8BAD\u7EC3\u5206\u5E03\u5185\u7684\u81EA\u7136\u56FE\u50CF\u4E0E\u4EBA\u8138\u3002" })] })] })] })] });
  }
  var gf = rc();
  function vf({ children: a }) {
    const y = U.useRef(null), u = U.useRef(null), p = U.useRef(), [x, w] = U.useState(null), [D, E] = U.useState(false), [R, L] = U.useState({ left: 12, top: 12 }), I = U.useId(), _ = () => clearTimeout(p.current), V = () => {
      _(), w(null), E(false);
    }, ae = () => {
      _(), D || (p.current = setTimeout(() => {
        var z;
        (z = y.current) != null && z.contains(document.activeElement) || w(null);
      }, 120));
    }, b = (z) => z instanceof Element ? z.closest("[data-formula-symbol]") : null;
    return U.useLayoutEffect(() => {
      if (!x || !u.current) return;
      const z = x.getBoundingClientRect(), Q = u.current.getBoundingClientRect();
      return L({ left: Math.max(12, Math.min(z.left + z.width / 2 - Q.width / 2, window.innerWidth - Q.width - 12)), top: Math.max(12, Math.min(z.bottom + 10 + Q.height > window.innerHeight - 12 ? z.top - Q.height - 10 : z.bottom + 10, window.innerHeight - Q.height - 12)) }), x.setAttribute("aria-describedby", I), () => x.removeAttribute("aria-describedby");
    }, [x, I]), U.useEffect(() => {
      if (!x) return;
      const z = (Y) => {
        var se, oe;
        !((se = y.current) != null && se.contains(Y.target)) && !((oe = u.current) != null && oe.contains(Y.target)) && V();
      }, Q = (Y) => {
        Y.key === "Escape" && V();
      };
      return document.addEventListener("pointerdown", z), document.addEventListener("keydown", Q), document.addEventListener("fullscreenchange", V), window.addEventListener("resize", V), window.addEventListener("scroll", V, true), () => {
        document.removeEventListener("pointerdown", z), document.removeEventListener("keydown", Q), document.removeEventListener("fullscreenchange", V), window.removeEventListener("resize", V), window.removeEventListener("scroll", V, true), _();
      };
    }, [x]), l.jsxs("span", { ref: y, className: "formula-symbols", onPointerOver: (z) => {
      const Q = b(z.target);
      Q && (_(), w(Q));
    }, onPointerOut: ae, onFocus: (z) => {
      const Q = b(z.target);
      Q && (_(), w(Q));
    }, onBlur: (z) => {
      var Q;
      !((Q = y.current) != null && Q.contains(z.relatedTarget)) && !D && V();
    }, onClick: (z) => {
      const Q = b(z.target);
      Q && (_(), D && x === Q ? V() : (w(Q), E(true)));
    }, onKeyDown: (z) => {
      (z.key === "Enter" || z.key === " ") && b(z.target) && (z.preventDefault(), z.target.click());
    }, children: [a, x && gf.createPortal(l.jsx("div", { ref: u, id: I, role: "tooltip", className: "formula-symbol-tooltip", style: R, onPointerEnter: _, onPointerLeave: ae, children: x.dataset.formulaMeaning }), document.fullscreenElement ?? document.body)] });
  }
  function de({ children: a, meaning: y }) {
    return l.jsx(vf, { children: l.jsx("span", { className: "formula-symbol", tabIndex: 0, role: "button", "aria-label": y, "data-formula-symbol": "", "data-formula-meaning": y, children: a }) });
  }
  const bu = ["x", "E", "l", "g_a", "y", "Q", "y_hat", "g_s", "l_hat", "D", "x_hat"];
  const ec = { x: "\u7167\u7247 x", E: "\u6F5C\u7F16\u7801 E", l: "\u6F5C\u7801 l", g_a: "\u5206\u6790 g\u2090", y: "\u53D8\u6362\u7801 y", Q: "\u91CF\u5316 Q", y_hat: "\u0177", g_s: "\u5408\u6210 g\u209B", l_hat: "l\u0302", D: "\u6F5C\u89E3\u7801 D", x_hat: "\u91CD\u5EFA x\u0302" };
  const xf = { x: { title: "\u8F93\u5165\u7167\u7247", body: "GLC \u7684\u5165\u53E3\u4ECD\u662F\u666E\u901A\u56FE\u50CF\uFF1B\u53D8\u5316\u53D1\u751F\u5728\u201C\u5728\u54EA\u91CC\u505A\u53D8\u6362\u7F16\u7801\u201D\u3002", formula: "x \u2208 \u211D^{H\xD7W\xD73}" }, E: { title: "\u6F5C\u7F16\u7801\u5668", body: "\u751F\u6210\u5F0F VQ-VAE \u628A\u50CF\u7D20\u6620\u5C04\u5230\u79BB\u6563\u8BED\u4E49\u6F5C\u7801\uFF0C\u751F\u6210\u5F0F\u89E3\u7801\u80FD\u529B\u5728\u8FD9\u4E2A\u9636\u6BB5\u5F62\u6210\u3002", formula: "l = E(x)" }, l: { title: "\u79BB\u6563\u8BED\u4E49\u6F5C\u7801", body: "\u6F5C\u7801\u662F\u540E\u7EED\u538B\u7F29\u7684\u5DE5\u4F5C\u5BF9\u8C61\uFF1B\u5B83\u6BD4\u50CF\u7D20\u66F4\u7A00\u758F\uFF0C\u4E5F\u66F4\u8D34\u8FD1\u4E3B\u4F53\u3001\u7ED3\u6784\u548C\u7EB9\u7406\u8BED\u4E49\u3002", formula: "l \u2208 \u211D^{h\xD7w\xD7256}" }, g_a: { title: "\u5206\u6790\u53D8\u6362", body: "\u5206\u6790\u53D8\u6362\u7EE7\u7EED\u6D88\u9664\u6F5C\u7801\u7A7A\u95F4\u5197\u4F59\uFF0C\u628A l \u53D8\u6210\u66F4\u9002\u5408\u71B5\u7F16\u7801\u7684\u53D8\u6362\u7801 y\u3002", formula: "y = g\u2090(l)" }, y: { title: "\u8FDE\u7EED\u53D8\u6362\u7801", body: "y \u4ECD\u662F\u8FDE\u7EED\u7279\u5F81\uFF1B\u5B83\u8FD8\u6CA1\u6709\u8FDB\u5165\u7801\u6D41\uFF0C\u771F\u6B63\u4F20\u8F93\u524D\u8981\u7ECF\u8FC7\u6807\u91CF\u91CF\u5316\u3002", formula: "y = g\u2090(l)" }, Q: { title: "\u6807\u91CF\u91CF\u5316", body: "\u91CF\u5316\u628A\u8FDE\u7EED\u7801\u6620\u5C04\u5230\u53EF\u71B5\u7F16\u7801\u7684\u79BB\u6563\u503C\uFF1B\u8BAD\u7EC3\u4E2D\u901A\u5E38\u7528\u53EF\u5FAE\u4EE3\u7406\u6A21\u62DF\u4E0D\u53EF\u5BFC\u7684\u91CF\u5316\u3002", formula: "\u0177 = Q(y)" }, y_hat: { title: "\u91CF\u5316\u540E\u7684\u53D8\u6362\u7801", body: "\u71B5\u6A21\u578B\u5BF9 \u0177 \u5EFA\u6A21\u5E76\u7531\u7B97\u672F\u7F16\u7801\u5199\u5165\u7801\u6D41\uFF1B\u5206\u7C7B\u8D85\u5148\u9A8C\u548C\u7A7A\u95F4\u4E0A\u4E0B\u6587\u5171\u540C\u4F30\u8BA1\u6982\u7387\u3002", formula: "\u0177 = Q(y)" }, g_s: { title: "\u5408\u6210\u53D8\u6362", body: "\u89E3\u7801\u7AEF\u5148\u4ECE \u0177 \u91CD\u5EFA\u6F5C\u7801 l\u0302\uFF0C\u518D\u628A\u5B83\u4EA4\u7ED9\u751F\u6210\u5F0F\u6F5C\u89E3\u7801\u5668\u3002", formula: "l\u0302 = g\u209B(\u0177)" }, l_hat: { title: "\u91CD\u5EFA\u6F5C\u7801", body: "l\u0302 \u4E0D\u5FC5\u88AB\u7801\u9884\u6D4B\u5668\u91CD\u65B0\u91CF\u5316\uFF0C\u56E0\u6B64\u80FD\u4FDD\u7559\u66F4\u7075\u6D3B\u7684\u7279\u5F81\uFF0C\u907F\u514D\u90E8\u7F72\u65F6\u591A\u4E00\u9053\u7801\u672C\u74F6\u9888\u3002", formula: "l\u0302 = g\u209B(\u0177)" }, D: { title: "\u751F\u6210\u5F0F\u6F5C\u89E3\u7801\u5668", body: "\u6F5C\u89E3\u7801\u5668\u8865\u5168\u7EB9\u7406\u5E76\u751F\u6210\u7167\u7247\uFF1B\u5B83\u7684\u80FD\u529B\u6765\u81EA Stage I \u7684\u751F\u6210\u5F0F\u8BAD\u7EC3\u3002", formula: "x\u0302 = D(l\u0302)" }, x_hat: { title: "\u6700\u7EC8\u91CD\u5EFA", body: "\u6700\u7EC8\u7801\u6D41\u53EA\u643A\u5E26\u91CF\u5316\u53D8\u6362\u7801\u3001\u8D85\u4FE1\u606F\u548C\u4E0A\u4E0B\u6587\u6240\u9700\u4FE1\u606F\uFF0Cx\u0302 \u7531\u89E3\u7801\u7F51\u7EDC\u751F\u6210\u3002", formula: "x\u0302 = D(g\u209B(Q(g\u2090(E(x)))))" } };
  function yf() {
    const [a, y] = U.useState("natural"), [u, p] = U.useState("l"), x = xf[u];
    return l.jsxs("div", { className: "glc-scene glc-architecture-page", children: [l.jsxs("div", { className: "glc-architecture-toolbar", children: [l.jsx(We, { tone: "blue", children: "\u524D\u5411\u8DEF\u5F84 \xB7 \u5F0F (1)" }), l.jsxs("div", { className: "glc-segmented is-small", role: "group", "aria-label": "\u9009\u62E9\u6A21\u578B\u914D\u7F6E", children: [l.jsx("button", { className: a === "natural" ? "is-active" : "", onClick: () => y("natural"), children: "\u81EA\u7136\u56FE\u50CF" }), l.jsx("button", { className: a === "face" ? "is-active is-purple" : "", onClick: () => y("face"), children: "\u4EBA\u8138" })] }), l.jsx("span", { className: "glc-toolbar-note", children: a === "natural" ? "f = 1/16 \xB7 M = 16384" : "f = 1/32 \xB7 M = 1024" })] }), l.jsxs(ie, { className: "glc-path-board", tone: "blue", children: [l.jsx("div", { className: "glc-path-row", role: "group", "aria-label": "GLC \u524D\u5411\u8DEF\u5F84\uFF0C\u70B9\u51FB\u90E8\u4EF6\u67E5\u770B\u8BF4\u660E", children: bu.map((w, D) => l.jsxs(Lr.Fragment, { children: [l.jsx("button", { className: `glc-path-node ${u === w ? "is-active" : ""}`, onClick: () => p(w), "aria-pressed": u === w, children: l.jsx("span", { children: ec[w] }) }), D < bu.length - 1 && l.jsx("span", { className: "glc-path-arrow", "aria-hidden": "true", children: "\u2192" })] }, w)) }), l.jsxs("div", { className: "glc-mini-stream", children: [l.jsx("span", { children: "\u50CF\u7D20\u5165\u53E3" }), l.jsx("i", {}), l.jsx("span", { children: "\u8BED\u4E49\u6F5C\u7801" }), l.jsx("i", {}), l.jsx("span", { children: "\u53EF\u71B5\u7F16\u7801\u53D8\u6362\u7801" }), l.jsx("i", {}), l.jsx("span", { children: "\u751F\u6210\u91CD\u5EFA" })] })] }), l.jsxs("div", { className: "glc-architecture-bottom", children: [l.jsxs(ie, { className: "glc-part-explainer", tone: "blue", children: [l.jsxs("div", { className: "glc-card-title", children: [l.jsx("span", { children: x.title }), l.jsx(Se, { tone: "blue", children: ec[u] })] }), l.jsx("p", { children: x.body }), l.jsx("div", { className: "glc-formula is-small", children: u === "E" || u === "l" ? l.jsxs(l.Fragment, { children: [l.jsx(de, { meaning: "E\uFF1A\u751F\u6210\u5F0F VQ-VAE \u7684\u6F5C\u7F16\u7801\u5668\uFF0C\u5C06\u50CF\u7D20 x \u6620\u5C04\u5230\u6F5C\u7801 l\u3002", children: "E" }), l.jsx("span", { children: "(" }), l.jsx(de, { meaning: "x\uFF1A\u5C3A\u5BF8\u4E3A H\xD7W\xD73 \u7684\u8F93\u5165\u56FE\u50CF\u3002", children: "x" }), l.jsx("span", { children: ")" })] }) : u === "g_a" || u === "y" ? l.jsxs(l.Fragment, { children: [l.jsx(de, { meaning: "g\u2090\uFF1A\u5206\u6790\u53D8\u6362\uFF0C\u628A\u6F5C\u7801 l \u6620\u5C04\u4E3A\u53D8\u6362\u7801 y\u3002", children: "g\u2090" }), l.jsx("span", { children: "(" }), l.jsx(de, { meaning: "l\uFF1A\u751F\u6210\u5F0F VQ-VAE \u8F93\u51FA\u7684\u8FDE\u7EED\u6F5C\u7801\u7279\u5F81\u3002", children: "l" }), l.jsx("span", { children: ")" })] }) : u === "Q" || u === "y_hat" ? l.jsxs(l.Fragment, { children: [l.jsx(de, { meaning: "Q\uFF1A\u6807\u91CF\u91CF\u5316\u7B97\u5B50\uFF0C\u4EA7\u751F\u53EF\u71B5\u7F16\u7801\u7684\u79BB\u6563\u7801\u3002", children: "Q" }), l.jsx("span", { children: "(" }), l.jsx(de, { meaning: "y\uFF1A\u91CF\u5316\u524D\u7684\u8FDE\u7EED\u53D8\u6362\u7801\u3002", children: "y" }), l.jsx("span", { children: ")" })] }) : u === "g_s" || u === "l_hat" ? l.jsxs(l.Fragment, { children: [l.jsx(de, { meaning: "g\u209B\uFF1A\u5408\u6210\u53D8\u6362\uFF0C\u4ECE\u91CF\u5316\u7801\u6062\u590D\u6F5C\u7801\u7279\u5F81\u3002", children: "g\u209B" }), l.jsx("span", { children: "(" }), l.jsx(de, { meaning: "\u0177\uFF1A\u91CF\u5316\u540E\u7684\u53D8\u6362\u7801\uFF0C\u4E5F\u662F\u7801\u6D41\u4E2D\u7684\u4E3B\u8981\u8BED\u6CD5\u5143\u7D20\u3002", children: "\u0177" }), l.jsx("span", { children: ")" })] }) : l.jsxs(l.Fragment, { children: [l.jsx(de, { meaning: "D\uFF1A\u751F\u6210\u5F0F\u6F5C\u89E3\u7801\u5668\uFF0C\u628A\u6F5C\u7801\u6062\u590D\u4E3A\u56FE\u50CF\u3002", children: "D" }), l.jsx("span", { children: "(" }), l.jsx(de, { meaning: "l\u0302\uFF1A\u89E3\u7801\u7AEF\u7531\u91CF\u5316\u7801\u91CD\u5EFA\u7684\u6F5C\u7801\u3002", children: "l\u0302" }), l.jsx("span", { children: ")" })] }) })] }), l.jsxs(ie, { className: "glc-config-card", tone: "purple", children: [l.jsx(wt, { className: "glc-arch-mini", detail: a === "natural" ? 82 : 58, mode: "latent", generative: true, label: a === "natural" ? "\u81EA\u7136\u56FE\u50CF\u6F5C\u7A7A\u95F4\u793A\u610F" : "\u4EBA\u8138\u6F5C\u7A7A\u95F4\u793A\u610F" }), l.jsxs("div", { children: [l.jsx("strong", { children: a === "natural" ? "\u81EA\u7136\u56FE\u50CF\u6A21\u578B" : "\u4EBA\u8138\u6A21\u578B" }), l.jsx("p", { children: a === "natural" ? "\u7A7A\u95F4\u4E0B\u91C7\u6837 16 \u500D\uFF0C\u4E3B\u7801\u672C 16384 \u9879\u3002" : "\u7A7A\u95F4\u4E0B\u91C7\u6837 32 \u500D\uFF0C\u4E3B\u7801\u672C 1024 \u9879\u3002" }), l.jsx(Se, { tone: "purple", children: "\u4E3B\u53D8\u6362\u901A\u9053 N = 256" })] })] })] })] });
  }
  const Hs = { ood: { title: "\u5C4F\u5E55\u4E0E\u672A\u77E5\u57DF OOD", hypothesis: "\u5728\u81EA\u7136\u56FE\u50CF\u4E0A\u56FA\u5B9A\u8BAD\u7EC3\u96C6\u4E0E\u7801\u7387\u7F51\u683C\u540E\uFF0C\u52A0\u5165\u5C4F\u5E55/\u6587\u672C\u589E\u5F3A\u80FD\u6539\u5584\u7ED3\u6784\u4FDD\u771F\uFF0C\u800C\u4E0D\u663E\u8457\u727A\u7272 FID\u3002", baseline: "CLIC2020 \u81EA\u7136\u56FE\u50CF\u8BAD\u7EC3\u5206\u5E03\uFF1B\u539F GLC \u6743\u91CD\u3002", metric: "DISTS\u3001OCR \u5B57\u7B26\u9519\u8BEF\u7387\u3001\u76F4\u7EBF\u4EA4\u70B9\u8BEF\u5DEE\u3001\u4EBA\u5DE5\u7ED3\u6784\u4FDD\u771F\u8BC4\u5206\u3002", pass: "\u7ED3\u6784\u6307\u6807\u663E\u8457\u6539\u5584\uFF0CFID \u9000\u5316\u6709\u9884\u8BBE\u4E0A\u9650\uFF1B\u7559\u51FA\u8BBE\u5907/\u5C4F\u5E55\u5B50\u96C6\u4E0D\u53C2\u4E0E\u8C03\u53C2\u3002", risk: "\u5982\u679C OCR \u53D8\u597D\u4F46\u4EBA\u773C\u7EB9\u7406\u660E\u663E\u53D8\u5DEE\uFF0C\u9700\u62A5\u544A\u6743\u8861\uFF0C\u800C\u4E0D\u662F\u53EA\u5BA3\u5E03\u6210\u529F\u3002" }, entropy: { title: "\u5206\u7C7B\u8D85\u7D22\u5F15\u71B5\u7F16\u7801", hypothesis: "\u628A \u1E91 \u7684\u56FA\u5B9A\u957F\u5EA6 log\u2082M_h \u7D22\u5F15\u6539\u4E3A\u5B66\u4E60\u4E0A\u4E0B\u6587\u7B97\u672F\u7F16\u7801\uFF0C\u53EF\u964D\u4F4E\u8D85\u4FE1\u606F bpp\u3002", baseline: "\u8BBA\u6587\u56FA\u5B9A\u957F\u5EA6\u8D85\u7D22\u5F15\u7F16\u7801\uFF1B\u76F8\u540C\u6A21\u578B\u3001\u76F8\u540C FID \u5DE5\u4F5C\u70B9\u3002", metric: "\u603B bpp\u3001\u8D85\u4FE1\u606F\u5360\u6BD4\u3001\u91CD\u8BAD\u540E\u7684 FID\u2013BPP BD-Rate\u3002", pass: "\u5728\u540C FID \u6216\u540C DISTS \u6761\u4EF6\u4E0B bpp \u4E00\u81F4\u4E0B\u964D\uFF0C\u4E14\u7F16\u89E3\u7801\u590D\u6742\u5EA6\u589E\u91CF\u53EF\u63A5\u53D7\u3002", risk: "\u82E5\u8D85\u4FE1\u606F\u5F88\u5C11\uFF0C\u8282\u7701\u53EF\u80FD\u88AB\u4E0A\u4E0B\u6587\u6A21\u578B\u5F00\u9500\u62B5\u6D88\uFF1B\u4E0D\u80FD\u53EA\u62A5\u7406\u8BBA\u71B5\u3002" }, human: { title: "\u8BED\u4E49\u4FDD\u771F\u7684\u4EBA\u773C\u7814\u7A76", hypothesis: "\u5728\u540C\u4E00 FID \u9644\u8FD1\uFF0CGLC \u7684\u4E3B\u4F53/\u5C5E\u6027\u4FDD\u6301\u7387\u9AD8\u4E8E\u50CF\u7D20\u7A7A\u95F4\u751F\u6210\u538B\u7F29\u3002", baseline: "MS-ILLM\uFF1B\u5339\u914D FID \u6216\u5339\u914D bpp \u4E24\u79CD\u534F\u8BAE\u5206\u522B\u62A5\u544A\u3002", metric: "\u6210\u5BF9\u5F3A\u5236\u9009\u62E9\uFF1A\u5185\u5BB9\u4FDD\u6301\u3001\u7EB9\u7406\u771F\u5B9E\u3001\u6574\u4F53\u504F\u597D\uFF1B\u9644\u6CE8\u9519\u8BEF\u5B9A\u4F4D\u3002", pass: "\u9884\u6CE8\u518C\u6837\u672C\u91CF\u4E0E\u7F6E\u4FE1\u533A\u95F4\u663E\u793A\u7A33\u5B9A\u4F18\u52BF\uFF0C\u540C\u65F6\u62A5\u544A\u53CD\u4F8B\u548C\u5931\u8D25\u7C7B\u522B\u3002", risk: "\u53D7\u8BD5\u8005\u504F\u597D\u4E0D\u7B49\u4E8E\u5BA2\u89C2\u4FDD\u771F\uFF1B\u6587\u5B57\u3001\u4EBA\u8138\u8EAB\u4EFD\u548C\u5C4F\u5E55\u5185\u5BB9\u5E94\u5206\u5C42\u5206\u6790\u3002" } };
  function jf() {
    const [a, y] = U.useState("ood"), u = Hs[a];
    return l.jsxs("div", { className: "glc-scene glc-closing-page", children: [l.jsxs("div", { className: "glc-plan-head", children: [l.jsx(We, { tone: "orange", children: "\u540E\u7EED\u53EF\u8BC1\u4F2A\u5B9E\u9A8C" }), l.jsx("p", { children: "\u9009\u62E9\u4E00\u6761\u8DEF\u7EBF\uFF1A\u628A\u201C\u7EE7\u7EED\u6539\u8FDB\u201D\u5199\u6210\u80FD\u88AB\u6570\u636E\u63A8\u7FFB\u7684\u5B9E\u9A8C\uFF0C\u800C\u4E0D\u662F\u613F\u671B\u3002" })] }), l.jsx("div", { className: "glc-plan-cards", role: "group", "aria-label": "\u9009\u62E9\u540E\u7EED\u5B9E\u9A8C\u65B9\u5411", children: Object.keys(Hs).map((p, x) => l.jsxs("button", { className: a === p ? "is-active" : "", onClick: () => y(p), "aria-pressed": a === p, children: [l.jsxs("span", { children: ["\u5B9E\u9A8C ", x + 1] }), l.jsx("strong", { children: Hs[p].title }), l.jsx("i", { "aria-hidden": "true", children: p === "ood" ? "\u25A6" : p === "entropy" ? "\u2301" : "\u25C9" })] }, p)) }), l.jsxs(ie, { className: `glc-protocol-board is-${a}`, tone: a === "ood" ? "red" : a === "entropy" ? "purple" : "green", children: [l.jsxs("div", { className: "glc-protocol-hypothesis", children: [l.jsx("span", { className: "glc-section-label", children: "\u5047\u8BBE" }), l.jsx("h3", { children: u.hypothesis }), l.jsx("p", { children: u.risk })] }), l.jsxs("div", { className: "glc-protocol-grid", children: [l.jsxs("div", { children: [l.jsx("span", { children: "\u5BF9\u7167\u57FA\u7EBF" }), l.jsx("b", { children: u.baseline })] }), l.jsxs("div", { children: [l.jsx("span", { children: "\u4E3B\u6307\u6807" }), l.jsx("b", { children: u.metric })] }), l.jsxs("div", { children: [l.jsx("span", { children: "\u9884\u5148\u5224\u5B9A" }), l.jsx("b", { children: u.pass })] }), l.jsxs("div", { className: "is-warning", children: [l.jsx("span", { children: "\u89E3\u91CA\u8FB9\u754C" }), l.jsx("b", { children: "\u4EFB\u4E00\u4E3B\u6307\u6807\u4E0D\u540C\u5411\u6539\u5584\uFF0C\u90FD\u4E0D\u80FD\u53EA\u6311\u6709\u5229\u7ED3\u679C\u3002" })] })] })] }), l.jsxs("div", { className: "glc-closing-line", children: [l.jsx("span", { children: "\u5B66\u4E60\u7ED3\u8BBA" }), l.jsx("b", { children: "GLC \u7684\u5173\u952E\u4E0D\u662F\u201C\u751F\u6210\u5F97\u50CF\u201D\uFF0C\u800C\u662F\u628A\u4F20\u8F93\u5BF9\u8C61\u6362\u6210\u8BED\u4E49\u6F5C\u7801\uFF0C\u5E76\u5728\u7387\u3001\u611F\u77E5\u4E0E\u7ED3\u6784\u4FDD\u771F\u4E4B\u95F4\u505A\u53EF\u68C0\u9A8C\u7684\u53D6\u820D\u3002" }), l.jsx(Se, { tone: "orange", children: "\u540E\u7EED\u5047\u8BBE\u4E0D\u662F\u8BBA\u6587\u7ED3\u8BBA" })] })] });
  }
  const Gs = [{ id: "none", label: "\u65E0\u7801\u9884\u6D4B", loss: "+13.1% BD-Rate", feedback: "\u53BB\u6389\u8BED\u4E49\u76D1\u7763\u540E\uFF0C\u773C\u90E8\u989C\u8272\u3001\u5634\u578B\u7B49\u5C5E\u6027\u66F4\u5BB9\u6613\u968F\u538B\u7F29\u6F02\u79FB\u3002" }, { id: "network", label: "\u653E\u8FDB\u63A8\u7406\u7F51\u7EDC", loss: "+60.7% BD-Rate", feedback: "\u628A\u9884\u6D4B\u51FA\u7684 VQ \u7D22\u5F15\u76F4\u63A5\u585E\u56DE\u89E3\u7801\u5668\uFF0C\u4F1A\u5F62\u6210\u8FC7\u7A84\u7684\u7801\u672C\u74F6\u9888\u3002" }, { id: "supervision", label: "\u4EC5\u4F5C\u8BAD\u7EC3\u76D1\u7763", loss: "0% \u53C2\u8003", feedback: "\u8BAD\u7EC3\u65F6\u8981\u6C42 l\u0302 \u80FD\u9884\u6D4B\u6B63\u786E\u7D22\u5F15\uFF1B\u63A8\u7406\u65F6\u89E3\u7801\u5668\u76F4\u63A5\u4F7F\u7528\u66F4\u7075\u6D3B\u7684 l\u0302\u3002" }];
  function wf({ placement: a }) {
    const y = a === "supervision", u = a === "network", p = a === "none";
    return l.jsxs("svg", { viewBox: "0 0 260 230", "aria-hidden": "true", className: "glc-portrait", children: [l.jsx("rect", { x: "24", y: "16", width: "212", height: "198", rx: "26", fill: y ? "#e1f1e7" : u ? "#e8e6f3" : "#f6e8e8" }), l.jsx("path", { d: "M61 184 C72 115 106 83 130 83 C154 83 188 115 199 184 Z", fill: "#d5a67f" }), l.jsx("path", { d: "M88 95 C88 48 172 38 176 96 L164 133 C148 119 110 119 96 136 Z", fill: "#5b3d32" }), l.jsx("ellipse", { cx: "105", cy: "113", rx: "15", ry: "8", fill: p ? "#97a89e" : y ? "#a86fa3" : "#c3a1bd" }), l.jsx("ellipse", { cx: "157", cy: "113", rx: "15", ry: "8", fill: p ? "#788f86" : y ? "#a86fa3" : "#c3a1bd" }), l.jsx("circle", { cx: "108", cy: "116", r: "3.5", fill: "#27324a" }), l.jsx("circle", { cx: "154", cy: "116", r: "3.5", fill: "#27324a" }), l.jsx("path", { d: y ? "M111 158 Q130 169 151 157" : u ? "M112 162 H149" : "M114 163 Q128 154 149 163", fill: "none", stroke: "#8d4056", strokeWidth: "6", strokeLinecap: "round" }), l.jsx("path", { d: "M69 171 C44 149 41 91 62 60 M192 171 C218 148 219 92 197 61", fill: "none", stroke: "#5b3d32", strokeWidth: "18", strokeLinecap: "round" }), u && l.jsxs("g", { children: [l.jsx("rect", { x: "104", y: "196", width: "52", height: "24", rx: "8", fill: "#7c3aed" }), l.jsx("text", { x: "130", y: "214", textAnchor: "middle", fill: "white", fontSize: "15", fontWeight: "750", children: "VQ" })] })] });
  }
  function kf() {
    const [a, y] = U.useState("supervision"), u = Gs.find((p) => p.id === a);
    return l.jsxs("div", { className: "glc-scene glc-code-page", children: [l.jsxs("aside", { className: "glc-code-menu", children: [l.jsx(We, { tone: "purple", children: "\u7801\u9884\u6D4B\u76D1\u7763" }), l.jsx("h3", { children: "\u9884\u6D4B\u5668\u653E\u5728\u54EA\u91CC" }), Gs.map((p) => l.jsxs("button", { className: a === p.id ? `is-active is-${p.id}` : "", onClick: () => y(p.id), "aria-pressed": a === p.id, children: [l.jsx("span", { children: p.label }), l.jsx("b", { children: p.loss })] }, p.id)), l.jsx("div", { className: `glc-feedback is-${a === "supervision" ? "green" : a === "network" ? "red" : "orange"}`, "aria-live": "polite", children: u.feedback })] }), l.jsxs("div", { className: "glc-code-main", children: [l.jsx("div", { className: "glc-code-cards", children: Gs.map((p) => l.jsxs(ie, { className: `glc-code-card ${a === p.id ? "is-selected" : ""}`, tone: p.id === "supervision" ? "green" : p.id === "network" ? "red" : "orange", children: [l.jsxs("div", { className: "glc-card-title", children: [l.jsx("span", { children: p.label }), l.jsx(Se, { tone: p.id === "supervision" ? "green" : p.id === "network" ? "red" : "orange", children: p.loss })] }), l.jsx(wf, { placement: p.id }), l.jsx("p", { children: p.id === "supervision" ? "\u5C5E\u6027\u66F4\u7A33\u5B9A" : p.id === "network" ? "\u8BED\u4E49\u7D22\u5F15\u7EA6\u675F\u8FC7\u5F3A" : "\u8BED\u4E49\u4FE1\u606F\u51CF\u5F31" })] }, p.id)) }), l.jsxs(ie, { className: "glc-code-bottom", tone: "purple", children: [l.jsxs("div", { className: "glc-code-formula", children: [l.jsx("span", { className: "glc-section-label", children: "\u5F0F (5) \u7684\u8BAD\u7EC3\u671F\u8F85\u52A9\u76EE\u6807 \xB7 CLIC2020" }), l.jsxs("div", { className: "glc-formula", children: [l.jsx(de, { meaning: "\u{1D49F}_code\uFF1A\u6F5C\u7801\u9884\u6D4B\u5931\u771F\uFF0C\u7531\u7D22\u5F15\u5206\u7C7B\u4EA4\u53C9\u71B5\u4E0E\u6F5C\u7801 MSE \u7EC4\u6210\u3002", children: "\u{1D49F}_code" }), l.jsx("span", { children: "(l, l\u0302) = " }), l.jsx(de, { meaning: "\u03B1\uFF1A\u4EA4\u53C9\u71B5\u6743\u91CD\uFF0C\u8BBA\u6587\u9ED8\u8BA4\u8BBE\u4E3A 0.5\u3002", children: "\u03B1" }), l.jsx("span", { children: "CE(M_l, M\u0302_l\u0302) + \u2016l\u2212l\u0302\u2016\xB2" })] }), l.jsx("p", { children: "\u8BAD\u7EC3\u76EE\u6807\u5F3A\u5316\u8BED\u4E49\uFF1B\u63A8\u7406\u8DEF\u5F84\u4E0D\u7ECF\u8FC7\u7801\u9884\u6D4B\u5668\uFF0C\u907F\u514D\u91CF\u5316\u7D22\u5F15\u6210\u4E3A\u989D\u5916\u74F6\u9888\u3002" })] }), l.jsxs("div", { className: "glc-code-bars", children: [l.jsx(rn, { label: "\u65E0\u7801\u9884\u6D4B", value: 13.1, max: 65, suffix: "% BD-Rate", tone: "orange" }), l.jsx(rn, { label: "\u63A8\u7406\u7F51\u7EDC\u5185\u7801\u9884\u6D4B", value: 60.7, max: 65, suffix: "% BD-Rate", tone: "red" }), l.jsx(rn, { label: "\u4EC5\u8BAD\u7EC3\u76D1\u7763", value: 0, max: 65, suffix: "%", tone: "green" }), l.jsx("p", { className: "glc-metric-rule", children: "\u767E\u5206\u6BD4\u662F\u76F8\u8F83\u201C\u4EC5\u8BAD\u7EC3\u76D1\u7763\u201D\u7684 BD-Rate \u635F\u5931\uFF1B\u4EBA\u8138\u56FE\u4E3A\u5C5E\u6027\u793A\u610F\u3002" })] })] })] })] });
  }
  const lc = U.createContext({ progress: 0, playing: false });
  const Sf = () => U.useContext(lc);
  const tc = ["#d8e8e5", "#b9d1c8", "#7ca697", "#406f61", "#e6d7b6", "#d98657"];
  function Nf({ moduleId: a }) {
    const { progress: y } = Sf(), u = a === "newMethod", p = jt((y - 0.08) / 0.72, 0, 1), x = u ? 42 : 70, w = 14, D = [];
    for (let E = 0; E < x; E += 1) {
      const R = E % w, L = Math.floor(E / w), I = L > 3 ? 3 + R % 2 : L === 3 ? 2 : L === 2 ? 1 : 0, _ = (L + R * 2) % tc.length, V = u ? I : _, ae = jt(p * 1.6 - E / x * 0.6, 0, 1), b = u ? 270 + (R - w / 2) * 8 : 340 + E % 5 * 12, z = 76 + R * 37, Q = 64 + L * 22;
      D.push(l.jsx("rect", { x: z + (1 - ae) * (b - z) * 0.45, y: Q - (1 - ae) * 64, width: u ? 34 : 34 - (L > 4 ? 3 : 0), height: u ? 19 : 18, rx: u ? 4 : 1.5, fill: tc[V], opacity: 0.35 + ae * 0.65, transform: `rotate(${u ? 0 : (E % 3 - 1) * 2.2} ${z + 17} ${Q + 9})` }, E));
    }
    return l.jsxs("div", { className: "glc-cover-widget", role: "img", "aria-label": u ? "\u8BED\u4E49\u9A6C\u8D5B\u514B\u5148\u4FDD\u7559\u7ED3\u6784\uFF0C\u518D\u7531\u751F\u6210\u5F0F\u4FEE\u8865\u8865\u5168\u7EB9\u7406" : "\u50CF\u7D20\u9A6C\u8D5B\u514B\u5728\u6709\u9650\u9884\u7B97\u4E0B\u9010\u6B65\u4E22\u5931\u7ED3\u6784", children: [l.jsxs("svg", { viewBox: "0 0 660 300", children: [l.jsx("rect", { x: "1", y: "1", width: "658", height: "298", rx: "18", fill: "#fbfcf8", stroke: u ? "#cce5d8" : "#efd6d9", strokeWidth: "2" }), l.jsx("path", { d: "M42 237 H620", stroke: "#aebba9", strokeWidth: "8", strokeLinecap: "round" }), l.jsx("path", { d: "M65 237 V80 M598 237 V80", stroke: "#c8b293", strokeWidth: "7", strokeLinecap: "round" }), l.jsx("rect", { x: "53", y: "56", width: "558", height: "188", rx: "8", fill: "#f4f2e9", stroke: "#8c9f8b", strokeWidth: "3" }), D, u ? l.jsxs("g", { opacity: jt((y - 0.55) / 0.35, 0, 1), children: [l.jsx("path", { d: "M150 212 C222 165 300 205 370 158 C435 115 504 170 548 129", fill: "none", stroke: "#ffffff", strokeWidth: "6", strokeLinecap: "round", opacity: ".5" }), [0, 1, 2, 3, 4].map((E) => l.jsx("circle", { cx: 220 + E * 54, cy: 160 + E % 2 * 28, r: 3 + E % 2, fill: "#228d5c", opacity: 0.45 + E * 0.1 }, E))] }) : l.jsxs("g", { opacity: jt(0.3 + (1 - p) * 0.7, 0, 1), children: [l.jsx("path", { d: "M98 153 L144 122 L201 151 L252 95 L309 153", fill: "none", stroke: "#c43f52", strokeWidth: "5", strokeDasharray: "8 10" }), l.jsx("path", { d: "M420 135 L462 111 L509 144", fill: "none", stroke: "#c43f52", strokeWidth: "5", strokeDasharray: "8 10" })] })] }), l.jsx("span", { className: `glc-cover-svg-label is-primary ${u ? "is-green" : "is-red"}`, children: u ? "\u8BED\u4E49\u4FDD\u7559 + \u751F\u6210\u8865\u5168" : "\u50CF\u7D20\u8D28\u611F\u5148\u88AB\u538B\u6241" }), l.jsxs("span", { className: "glc-cover-svg-label is-secondary", children: [l.jsx("i", { "aria-hidden": "true" }), u ? "\u6709\u9650\u8BED\u4E49\u8272\u5361" : "\u6709\u9650\u50CF\u7D20\u788E\u7247"] })] });
  }
  function Cf() {
    const [a, y] = U.useState("categorical");
    return l.jsxs("div", { className: "glc-scene glc-hyper-page", children: [l.jsxs("aside", { className: "glc-hyper-menu", children: [l.jsx(We, { tone: "purple", children: "\u8D85\u4FE1\u606F \u1E91" }), l.jsx("h3", { children: "\u9009\u62E9\u8D85\u5148\u9A8C" }), l.jsxs("button", { className: a === "factorized" ? "is-active is-red" : "", onClick: () => y("factorized"), children: [l.jsx("span", { children: "\u5206\u89E3\u8D85\u5148\u9A8C" }), l.jsx("b", { children: "\u5C40\u90E8\u989C\u8272 / \u7EB9\u7406\u8D26\u672C" })] }), l.jsxs("button", { className: a === "categorical" ? "is-active is-purple" : "", onClick: () => y("categorical"), children: [l.jsx("span", { children: "\u5206\u7C7B\u8D85\u5148\u9A8C" }), l.jsx("b", { children: "\u9AD8\u5C42\u8BED\u4E49\u4FBF\u7B7E + \u7801\u672C" })] }), l.jsxs("div", { className: "glc-hyper-note", children: ["\u4E24\u79CD\u6A21\u5F0F\u7684\u89C6\u89C9\u5185\u5BB9\u90FD\u662F\u793A\u610F\uFF1B", l.jsx("b", { children: "17.7%" }), " \u624D\u662F CLIC2020 \u7684 BD-Rate \u5B9E\u6D4B\u5BF9\u7167\u3002"] })] }), l.jsxs("div", { className: "glc-hyper-visual", children: [l.jsxs(ie, { className: `glc-hyper-workbench ${a === "factorized" ? "is-factorized" : "is-categorical"}`, tone: a === "factorized" ? "red" : "purple", children: [l.jsxs("div", { className: "glc-workbench-top", children: [l.jsxs("div", { className: "glc-paper-sheet", children: [l.jsxs("div", { className: "glc-paper-scene", "aria-hidden": "true", children: [l.jsx("span", { className: "glc-paper-sun" }), l.jsx("span", { className: "glc-paper-hill is-one" }), l.jsx("span", { className: "glc-paper-hill is-two" }), l.jsx("span", { className: "glc-paper-river" })] }), l.jsx("div", { className: "glc-paper-label", children: a === "factorized" ? "\u5C40\u90E8\u65C1\u4FE1\u606F\u8D26\u672C" : "\u8BED\u4E49\u573A\u666F\u4FBF\u7B7E" })] }), l.jsx("span", { className: "glc-workbench-arrow", children: "\u2192" }), l.jsx("div", { className: "glc-hyper-stream", children: a === "factorized" ? ["#8fb8c0", "#d7c498", "#5e887b", "#b0c9aa", "#c9a777", "#738f8c", "#ddd3b2"].map((u, p) => l.jsx("span", { className: "glc-local-token", style: { backgroundColor: u } }, `${u}-${p}`)) : l.jsxs(l.Fragment, { children: [["\u5929\u7A7A", "\u5C71\u4F53", "\u6CB3\u6D41"].map((u, p) => l.jsx(Se, { tone: p === 1 ? "green" : "blue", children: u }, u)), l.jsxs("span", { className: "glc-hyper-index", children: ["\u1E91", l.jsx("sub", { children: "1" }), " \xB7 14 bit"] })] }) })] }), l.jsx("div", { className: "glc-hyper-feedback", "aria-live": "polite", children: a === "factorized" ? "\u5206\u89E3\u5148\u9A8C\u628A\u66F4\u591A\u7801\u7387\u82B1\u5728\u989C\u8272\u3001\u7EB9\u7406\u7B49\u4F4E\u5C42\u65C1\u4FE1\u606F\u4E0A\u3002" : "\u5206\u7C7B\u5148\u9A8C\u628A z \u91CF\u5316\u8FDB\u8D85\u7801\u672C\uFF0C\u4F18\u5148\u643A\u5E26\u9AD8\u5C42\u8BED\u4E49\u4E0E\u7ED3\u6784\u3002" })] }), l.jsxs("div", { className: "glc-hyper-bottom", children: [l.jsxs(ie, { className: "glc-hyper-formula", tone: "purple", children: [l.jsx("span", { className: "glc-section-label", children: "\u5206\u7C7B\u8D85\u6A21\u5757 \xB7 \u5F0F (2)" }), l.jsxs("div", { className: "glc-formula", children: [l.jsx(de, { meaning: "z\uFF1A\u8D85\u5206\u6790\u53D8\u6362\u5F97\u5230\u7684\u8FDE\u7EED\u8D85\u7801\u3002", children: "z" }), l.jsx("span", { children: " = h\u2090(" }), l.jsx(de, { meaning: "y\uFF1A\u5206\u6790\u53D8\u6362\u8F93\u51FA\u7684\u8FDE\u7EED\u53D8\u6362\u7801\u3002", children: "y" }), l.jsx("span", { children: "), " }), l.jsx(de, { meaning: "\u1E91\uFF1A\u628A\u8D85\u7801 z \u5728\u8D85\u7801\u672C C_h \u4E2D\u6700\u8FD1\u90BB\u91CF\u5316\u540E\u7684\u79BB\u6563\u7D22\u5F15\u3002", children: "\u1E91" }), l.jsx("span", { children: " = VQ(z, " }), l.jsx(de, { meaning: "C_h\uFF1A\u8D85\u7801\u672C\uFF1B\u5176\u5927\u5C0F M_h \u4E0E\u4E3B\u8F85\u52A9\u7801\u672C C \u76F8\u540C\u3002", children: "C_h" }), l.jsx("span", { children: ")" })] }), l.jsx("p", { children: "\u63A8\u7406\u65F6 \u1E91 \u7684\u7801\u5B57\u7D22\u5F15\u7528\u56FA\u5B9A\u957F\u5EA6 log\u2082M_h \u7F16\u7801\uFF0C\u518D\u7ECF h\u209B \u4EA7\u751F\u4E3B\u7801\u7387\u6A21\u578B\u7684\u5148\u9A8C\u3002" })] }), l.jsxs(ie, { className: "glc-hyper-chart", tone: a === "factorized" ? "red" : "green", children: [l.jsxs("div", { className: "glc-card-title", children: [l.jsx("span", { children: "FID\u2013BPP \u66F2\u7EBF\u4E0A\u7684\u6574\u4F53\u4F4D\u7F6E" }), l.jsx(Se, { tone: a === "factorized" ? "red" : "green", children: a === "factorized" ? "+17.7%" : "0% \u53C2\u8003" })] }), l.jsx(rn, { label: "\u5206\u89E3\u8D85\u5148\u9A8C", value: 17.7, max: 20, suffix: "% BD-Rate", tone: "red" }), l.jsx(rn, { label: "\u5206\u7C7B\u8D85\u5148\u9A8C", value: 0, max: 20, suffix: "%", tone: "green" }), l.jsx("p", { className: "glc-metric-rule", children: "BD-Rate \u8D8A\u4F4E\u8D8A\u597D\uFF1B\u201C17.7%\u201D\u662F\u76F8\u5BF9\u66F2\u7EBF\u635F\u5931\uFF0C\u4E0D\u662F\u7801\u7387\u8282\u7701\u6BD4\u4F8B\u3002" })] })] })] })] });
  }
  const Ef = [256, 1024, 16384];
  const _f = ["#d7e9e4", "#a8c7bd", "#7da593", "#527e6d", "#2f5f53", "#eadfbe", "#d2b378", "#d58d59", "#7e765e", "#92b9c2", "#5c8493", "#27446e"];
  function If() {
    const [a, y] = U.useState(16384), u = Math.log2(a), p = a === 256 ? 5 : a === 1024 ? 8 : 12, x = a === 256 ? 42 : a === 1024 ? 64 : 92, w = a === 16384, D = a === 1024;
    return l.jsxs("div", { className: "glc-scene glc-latent-page", children: [l.jsx(Pf, { detail: x, activeSwatches: p }), l.jsxs("aside", { className: "glc-latent-side", children: [l.jsx(We, { tone: "purple", children: "\u79BB\u6563\u7801\u672C C" }), l.jsx("h3", { children: "\u9009\u62E9\u8272\u5361\u5BB9\u91CF" }), l.jsx("div", { className: "glc-book-options", role: "group", "aria-label": "\u9009\u62E9 VQ \u7801\u672C\u5927\u5C0F", children: Ef.map((E) => l.jsxs("button", { className: a === E ? "is-active" : "", onClick: () => y(E), "aria-pressed": a === E, children: [l.jsx("b", { children: E.toLocaleString("zh-CN") }), l.jsxs("span", { children: [Math.log2(E), " bit / \u7D22\u5F15"] })] }, E)) }), l.jsxs(ie, { className: "glc-formula-card", tone: "purple", children: [l.jsxs("div", { className: "glc-formula", children: ["bits = log\u2082(", l.jsx(de, { meaning: "M\uFF1A\u7801\u672C C \u4E2D\u7684\u79BB\u6563\u7801\u5B57\u6570\u91CF\uFF1B\u81EA\u7136\u56FE\u50CF\u914D\u7F6E\u4E3A 16384\uFF0C\u4EBA\u8138\u914D\u7F6E\u4E3A 1024\u3002", children: "M" }), ")"] }), l.jsxs("p", { children: [l.jsxs(Se, { tone: "purple", children: ["M = ", a.toLocaleString("zh-CN")] }), l.jsxs(Se, { tone: "blue", children: [u, " bit / \u7D22\u5F15"] })] })] }), l.jsx("div", { className: "glc-feedback is-purple", "aria-live": "polite", children: w ? "\u81EA\u7136\u56FE\u50CF\u914D\u7F6E\u4F7F\u7528 M=16384\uFF1A\u8868\u8FBE\u66F4\u7EC6\uFF0C\u4F46\u6BCF\u4E2A\u4E3B\u7D22\u5F15\u672C\u8EAB\u5360 14 bit\u3002" : D ? "\u4EBA\u8138\u914D\u7F6E\u4F7F\u7528 M=1024\uFF1A\u7801\u672C\u66F4\u5C0F\uFF0C\u7D22\u5F15\u4E3A 10 bit\uFF0C\u9002\u5408\u9AD8\u5EA6\u53D7\u9650\u7684\u4F4E\u7801\u7387\u3002" : "\u5C0F\u5757\u7801\u672C\u53EA\u6709 8 bit/\u7D22\u5F15\uFF0C\u8BED\u4E49\u5355\u5143\u66F4\u5C11\uFF0C\u751F\u6210\u5F0F\u8865\u5168\u627F\u62C5\u66F4\u591A\u7EC6\u8282\u3002" }), l.jsx("p", { className: "glc-note", children: "\u7801\u672C\u66F4\u5927\u4E0D\u4FDD\u8BC1\u603B\u7801\u6D41\u66F4\u5C0F\uFF1BGLC \u4ECD\u8981\u5BF9\u7D22\u5F15\u56FE\u505A\u6F5C\u7A7A\u95F4\u53D8\u6362\u7F16\u7801\u3002" })] })] });
  }
  function Pf({ detail: a, activeSwatches: y }) {
    return l.jsxs("div", { className: "glc-latent-stage", children: [l.jsxs("div", { className: "glc-easel", children: [l.jsx(wt, { detail: jt(a, 0, 100), mode: "latent", generative: true, label: "\u4E0D\u540C\u7801\u672C\u5BB9\u91CF\u4E0B\uFF0C\u8BED\u4E49\u8272\u5757\u6570\u91CF\u4E0E\u7EB9\u7406\u7EC6\u8282\u7684\u793A\u610F" }), l.jsx("span", { className: "glc-pin is-left" }), l.jsx("span", { className: "glc-pin is-right" })] }), l.jsxs(ie, { className: "glc-swatch-tray", tone: "neutral", children: [l.jsxs("div", { className: "glc-tray-title", children: [l.jsx("span", { children: "\u5DF2\u5B66\u5230\u7684\u8BED\u4E49\u8272\u5361" }), l.jsxs("b", { children: [a, "% \u7EC6\u8282"] })] }), l.jsx("div", { className: "glc-swatch-grid", children: _f.map((u, p) => l.jsx("span", { className: p < Math.round(y * (a / 100)) ? "is-used" : "", style: { backgroundColor: u }, children: String(p + 1).padStart(2, "0") }, u)) })] })] });
  }
  function Lf({ shift: a }) {
    const y = a / 100, u = [];
    for (let p = 0; p <= 10; p += 1) {
      const x = 58 + p * 74;
      u.push(l.jsx("path", { d: `M${x} 68 C${x + Math.sin(p) * 34 * y} 165 ${x - Math.cos(p) * 46 * y} 250 ${x + Math.sin(p * 1.7) * 58 * y} 354`, fill: "none", stroke: a > 58 ? "#c43f52" : "#8fa9a2", strokeWidth: a > 58 ? 3 : 2, opacity: ".85" }, `v-${p}`));
    }
    for (let p = 0; p <= 5; p += 1) {
      const x = 76 + p * 54;
      u.push(l.jsx("path", { d: `M52 ${x} C190 ${x + Math.sin(p) * 38 * y} 354 ${x - Math.cos(p) * 42 * y} 704 ${x + Math.sin(p * 1.3) * 54 * y}`, fill: "none", stroke: a > 58 ? "#c43f52" : "#8fa9a2", strokeWidth: a > 58 ? 3 : 2, opacity: ".85" }, `h-${p}`));
    }
    return l.jsxs("svg", { viewBox: "0 0 760 430", className: "glc-screen-art", role: "img", "aria-label": `\u5C4F\u5E55\u5185\u5BB9\u793A\u610F\uFF0C\u5206\u5E03\u504F\u79FB ${Math.round(a)}%\uFF0C\u7F51\u683C\u4E0E\u6587\u5B57\u968F\u504F\u79FB\u589E\u52A0\u800C\u5931\u771F`, children: [l.jsxs("defs", { children: [l.jsx("filter", { id: "glc-screen-glow", children: l.jsx("feGaussianBlur", { stdDeviation: a / 110 }) }), l.jsx("clipPath", { id: "glc-screen-clip", children: l.jsx("rect", { x: "28", y: "32", width: "704", height: "360", rx: "18" }) })] }), l.jsx("rect", { x: "0", y: "0", width: "760", height: "430", rx: "26", fill: "#e6efec" }), l.jsx("rect", { x: "28", y: "32", width: "704", height: "360", rx: "18", fill: "#fbfdfa", stroke: "#b8c9bf", strokeWidth: "3" }), l.jsx("g", { clipPath: "url(#glc-screen-clip)", children: u }), l.jsxs("g", { filter: a > 70 ? "url(#glc-screen-glow)" : void 0, children: [l.jsx("text", { x: "86", y: "154", fontSize: "56", fontWeight: "850", fill: a > 68 ? "#b95468" : "#27446e", letterSpacing: a * 0.24, children: "GLC" }), l.jsx("text", { x: "88", y: "208", fontSize: "28", fontWeight: "650", fill: "#68778f", letterSpacing: a * 0.08, children: "screen content / grid test" }), l.jsx("rect", { x: "86", y: "246", width: Math.max(110, 360 - a * 1.2), height: "14", rx: "7", fill: a > 58 ? "#e59aaa" : "#9bb9c0" }), l.jsx("rect", { x: "86", y: "274", width: Math.max(80, 248 - a * 0.5), height: "14", rx: "7", fill: "#c9d8cd" })] }), l.jsxs("g", { transform: "translate(560 60)", children: [l.jsx("rect", { width: "132", height: "48", rx: "12", fill: a > 58 ? "#f7dfe4" : "#e5f2e9" }), l.jsx("text", { x: "66", y: "31", textAnchor: "middle", fontSize: "24", fontWeight: "750", fill: a > 58 ? "#c43f52" : "#228d5c", children: a > 58 ? "\u7EBF\u6761\u5931\u7A33" : "\u5206\u5E03\u5185" })] })] });
  }
  function zf() {
    const [a, y] = U.useState(20), u = a > 66, p = a > 42;
    return l.jsxs("div", { className: "glc-scene glc-limits-page", children: [l.jsxs(ie, { className: "glc-limit-scene", tone: u ? "red" : p ? "orange" : "green", children: [l.jsx(Lf, { shift: a }), l.jsxs("div", { className: "glc-limit-overlay", children: [l.jsx(We, { tone: u ? "red" : p ? "orange" : "green", children: u ? "\u751F\u6210\u5148\u9A8C\u538B\u8FC7\u8F93\u5165" : p ? "\u8FB9\u754C\u538B\u529B\u589E\u52A0" : "\u5E38\u89C1\u81EA\u7136\u5185\u5BB9" }), l.jsx("strong", { children: u ? "\u76F4\u7EBF\u4E0E\u5B57\u5F62\u88AB\u201C\u5408\u7406\u5730\u201D\u731C\u9519" : p ? "\u7EC6\u8282\u5F00\u59CB\u4EA4\u7ED9\u751F\u6210\u5148\u9A8C" : "\u8BAD\u7EC3\u5206\u5E03\u5185\u7684\u81EA\u7136\u7EB9\u7406" })] })] }), l.jsxs("aside", { className: "glc-limit-control", children: [l.jsx("span", { className: "glc-section-label", children: "\u5206\u5E03\u504F\u79FB" }), l.jsxs("strong", { className: "glc-huge-number", children: [zr(a, 0), l.jsx("small", { children: "%" })] }), l.jsxs("label", { className: "glc-range-label", children: [l.jsx("span", { children: "\u81EA\u7136\u7167\u7247 \u2192 \u5C4F\u5E55\u6587\u672C / \u7F51\u683C" }), l.jsx("input", { "aria-label": "\u8C03\u6574\u4ECE\u81EA\u7136\u7167\u7247\u5230\u5C4F\u5E55\u5185\u5BB9\u7684\u5206\u5E03\u504F\u79FB", type: "range", min: "0", max: "100", value: a, onChange: (x) => y(Number(x.target.value)) })] }), l.jsx("div", { className: `glc-feedback is-${u ? "red" : p ? "orange" : "green"}`, "aria-live": "polite", children: u ? "\u76F4\u7EBF\u5F2F\u66F2\u3001\u6587\u5B57\u7F3A\u53E3\u548C\u7F51\u683C\u65AD\u88C2\uFF1A\u751F\u6210\u5F0F\u771F\u5B9E\u611F\u4E0D\u80FD\u4EE3\u66FF\u7CBE\u786E\u8FD8\u539F\u3002" : p ? "\u6A21\u578B\u5F00\u59CB\u7528\u719F\u6089\u7684\u81EA\u7136\u7EB9\u7406\u8865\u5168\u4E0D\u719F\u6089\u7684\u7ED3\u6784\uFF0C\u9700\u4EBA\u5DE5\u62BD\u67E5\u3002" : "\u5728\u5E38\u89C1\u81EA\u7136\u7167\u7247\u8303\u56F4\u5185\uFF0C\u8BED\u4E49\u4E0E\u7EB9\u7406\u5148\u9A8C\u66F4\u5BB9\u6613\u53D1\u6325\u4F5C\u7528\u3002" }), l.jsxs(ie, { className: "glc-limit-checks", tone: "red", children: [l.jsxs("div", { className: "glc-card-title", children: [l.jsx("span", { children: "\u5931\u8D25\u5224\u636E" }), l.jsx(Se, { tone: "red", children: "\u9AD8\u5206\u8FA8\u7387\u7ED3\u6784" })] }), l.jsx("p", { className: u ? "is-failed" : "", children: "\u25A1 \u6A2A\u7AD6\u7EBF\u662F\u5426\u4FDD\u6301\u76F4\u4E14\u8FDE\u7EED" }), l.jsx("p", { className: u ? "is-failed" : "", children: "\u25A1 \u6587\u5B57\u8FB9\u7F18\u662F\u5426\u53EF\u8FA8\u8BA4" }), l.jsx("p", { className: u ? "is-failed" : "", children: "\u25A1 \u7F51\u683C\u4EA4\u70B9\u662F\u5426\u7A33\u5B9A" }), l.jsx("small", { children: "\u8BBA\u6587 Figure 15 \u663E\u793A\u5C4F\u5E55\u56FE\u50CF\u4E0A\u7684\u76F4\u7EBF\u7F51\u683C\u91CD\u5EFA\u4E0D\u8DB3\uFF1B\u753B\u9762\u4E3A\u653E\u5927\u793A\u610F\u3002" })] }), l.jsx("p", { className: "glc-note", children: "\u5E38\u7528 FID/DISTS \u5F88\u96BE\u5355\u72EC\u66B4\u9732\u5C40\u90E8\u6587\u5B57\u9519\u8BEF\uFF0C\u90E8\u7F72\u524D\u9700\u52A0\u5165 OCR \u4E0E\u7ED3\u6784\u68C0\u67E5\u3002" })] })] });
  }
  function Mf() {
    const [a, y] = U.useState(30), [u, p] = U.useState("pixel"), x = a < 38, D = a > 74 ? "\u9884\u7B97\u5145\u8DB3\u65F6\uFF0C\u4E24\u79CD\u8868\u793A\u90FD\u66F4\u5B8C\u6574\uFF0C\u5DEE\u8DDD\u4F1A\u7F29\u5C0F\u3002" : u === "pixel" ? x ? "\u5C40\u90E8\u50CF\u7D20\u88AB\u538B\u6241\uFF0C\u5C71\u7684\u8F6E\u5ED3\u548C\u6CB3\u5CB8\u5148\u65AD\u5F00\u3002" : "\u50CF\u7D20\u5757\u66F4\u5BC6\uFF0C\u4F46\u7EB9\u7406\u589E\u52A0\u4E5F\u6301\u7EED\u6D88\u8017\u9884\u7B97\u3002" : x ? "\u8BED\u4E49\u9AA8\u67B6\u4ECD\u5728\uFF0C\u7EB9\u7406\u7531\u751F\u6210\u5F0F\u89E3\u7801\u8865\u5168\u3002" : "\u66F4\u591A\u8272\u5757\u8FDB\u5165\u6F5C\u7A7A\u95F4\uFF0C\u7EC6\u8282\u66F4\u4E30\u5BCC\u4F46\u7801\u6D41\u4E5F\u66F4\u5927\u3002";
    return l.jsxs("div", { className: "glc-scene glc-problem", children: [l.jsxs("aside", { className: "glc-problem-controls", children: [l.jsx("div", { className: "glc-kicker", children: "\u4FEE\u8865\u9884\u7B97" }), l.jsxs("strong", { className: "glc-huge-number", children: [zr(a, 0), l.jsx("small", { children: "%" })] }), l.jsxs("label", { className: "glc-range-label", children: [l.jsx("span", { children: "\u53EF\u89C1\u7EC6\u8282\u9884\u7B97" }), l.jsx("input", { "aria-label": "\u8C03\u6574\u53EF\u89C1\u7EC6\u8282\u9884\u7B97", type: "range", min: "0", max: "100", value: a, onChange: (E) => y(Number(E.target.value)) })] }), l.jsxs("div", { className: "glc-segmented", role: "group", "aria-label": "\u9009\u62E9\u7A7A\u95F4\u8868\u793A", children: [l.jsx("button", { className: u === "pixel" ? "is-active is-red" : "", onClick: () => p("pixel"), children: "\u50CF\u7D20\u7A7A\u95F4" }), l.jsx("button", { className: u === "latent" ? "is-active is-green" : "", onClick: () => p("latent"), children: "\u751F\u6210\u5F0F\u6F5C\u7A7A\u95F4" })] }), l.jsx("div", { className: `glc-feedback is-${u === "pixel" ? "red" : "green"}`, "aria-live": "polite", children: D }), l.jsx("p", { className: "glc-note", children: "\u9884\u7B97\u4EC5\u4E3A\u6559\u5B66\u53D8\u91CF\uFF0C\u4E0D\u662F\u8BBA\u6587\u5B9E\u6D4B\u7801\u7387\u66F2\u7EBF\u3002" })] }), l.jsxs("div", { className: "glc-problem-compare", children: [l.jsxs(ie, { className: `glc-compare-card ${u === "pixel" ? "is-selected is-red" : ""}`, tone: "red", children: [l.jsxs("div", { className: "glc-card-title", children: [l.jsx("span", { children: "\u50CF\u7D20\u7A7A\u95F4\u53D8\u6362\u7F16\u7801" }), l.jsx(We, { tone: "red", children: "\u4F4E\u9884\u7B97\u5148\u4E22\u7ED3\u6784" })] }), l.jsx(wt, { detail: jt(a - 10, 0, 100), mode: "pixel", generative: false, label: `\u50CF\u7D20\u7A7A\u95F4\u5728\u7EC6\u8282\u9884\u7B97 ${a}% \u4E0B\u7684\u793A\u610F` }), l.jsxs("div", { className: "glc-stat-line", children: [l.jsx("span", { children: "\u4FDD\u7559\u5185\u5BB9" }), l.jsx("b", { children: "\u5C40\u90E8\u50CF\u7D20\u5757" }), l.jsx("span", { children: "\u4E3B\u8981\u98CE\u9669" }), l.jsx("b", { className: "is-red", children: "\u8F6E\u5ED3\u4E0E\u7EB9\u7406\u540C\u65F6\u9000\u5316" })] })] }), l.jsxs(ie, { className: `glc-compare-card ${u === "latent" ? "is-selected is-green" : ""}`, tone: "green", children: [l.jsxs("div", { className: "glc-card-title", children: [l.jsx("span", { children: "\u751F\u6210\u5F0F\u6F5C\u7A7A\u95F4\u7F16\u7801" }), l.jsx(We, { tone: "green", children: "\u8BED\u4E49\u4F18\u5148" })] }), l.jsx(wt, { detail: jt(46 + a * 0.26, 0, 100), mode: "latent", generative: true, label: `\u751F\u6210\u5F0F\u6F5C\u7A7A\u95F4\u5728\u7EC6\u8282\u9884\u7B97 ${a}% \u4E0B\u7684\u793A\u610F` }), l.jsxs("div", { className: "glc-stat-line", children: [l.jsx("span", { children: "\u4FDD\u7559\u5185\u5BB9" }), l.jsx("b", { children: "\u8BED\u4E49\u4E0E\u4E3B\u4F53\u7ED3\u6784" }), l.jsx("span", { children: "\u4E3B\u8981\u98CE\u9669" }), l.jsx("b", { className: "is-green", children: "\u7EB9\u7406\u53EF\u80FD\u88AB\u751F\u6210\u800C\u975E\u7CBE\u786E\u8FD8\u539F" })] })] })] })] });
  }
  function Df() {
    const [a, y] = U.useState(42), u = Math.round(22 + a * 0.74), p = a < 9;
    return l.jsxs("div", { className: "glc-scene glc-rate-page", children: [l.jsxs("aside", { className: "glc-rate-control", children: [l.jsx(We, { tone: "orange", children: "\u5355\u4E00\u6A21\u578B \xB7 \u53EF\u53D8\u7801\u7387" }), l.jsx("h3", { children: "\u76EE\u6807\u6863\u4F4D" }), l.jsxs("strong", { className: "glc-huge-number", children: [zr(a, 0), l.jsx("small", { children: "%" })] }), l.jsxs("label", { className: "glc-range-label", children: [l.jsx("span", { children: "\u4ECE\u6781\u4F4E\u7801\u7387\u62D6\u5411\u8F83\u9AD8\u7801\u7387" }), l.jsx("input", { "aria-label": "\u8C03\u6574\u76EE\u6807\u7801\u7387\u6863\u4F4D", type: "range", min: "0", max: "100", value: a, onChange: (x) => y(Number(x.target.value)) })] }), l.jsxs("div", { className: "glc-modulator-diagram", children: [l.jsxs("div", { children: [l.jsx(Se, { tone: "orange", children: "q_enc" }), l.jsx("span", { children: "\u7F16\u7801\u4FA7\u8C03\u5236" })] }), l.jsx("b", { children: "\u2192" }), l.jsxs("div", { className: "is-quant", children: [l.jsx("span", { children: "Q" }), l.jsx("small", { children: "\u91CF\u5316" })] }), l.jsx("b", { children: "\u2192" }), l.jsxs("div", { children: [l.jsx(Se, { tone: "blue", children: "q_dec" }), l.jsx("span", { children: "\u89E3\u7801\u4FA7\u8C03\u5236" })] })] }), l.jsx("div", { className: `glc-feedback is-${p ? "red" : a < 55 ? "orange" : "green"}`, "aria-live": "polite", children: p ? "\u6781\u4F4E\u7AEF\u4F18\u5148\u5B88\u4F4F\u8BED\u4E49\u9AA8\u67B6\uFF0C\u4F46\u7EB9\u7406\u4E0E\u7CBE\u7EC6\u7ED3\u6784\u53EF\u80FD\u4E0D\u8DB3\u3002" : a < 55 ? "\u7387\u4E0E\u7EC6\u8282\u6298\u4E2D\uFF1A\u4E3B\u4F53\u7A33\u5B9A\uFF0C\u7EB9\u7406\u6309\u9884\u7B97\u9010\u6B65\u589E\u52A0\u3002" : "\u7801\u7387\u4E0A\u5347\uFF0C\u66F4\u591A\u7EB9\u7406\u53EF\u88AB\u4FDD\u7559\uFF1B\u8D28\u91CF\u6539\u5584\u4E0D\u7B49\u4E8E\u65E0\u9650\u53D8\u597D\u3002" }), l.jsx("p", { className: "glc-note", children: "\u6863\u4F4D\u662F\u7406\u89E3\u7528\u5F52\u4E00\u5316\u53D8\u91CF\uFF0C\u4E0D\u76F4\u63A5\u8868\u793A\u8BBA\u6587 bpp\u3002" })] }), l.jsxs("div", { className: "glc-rate-main", children: [l.jsxs(ie, { className: "glc-rate-photo", tone: "blue", children: [l.jsxs("div", { className: "glc-card-title", children: [l.jsx("span", { children: "\u540C\u4E00\u6A21\u578B\u7684\u7387\u2014\u7EC6\u8282\u53D8\u5316" }), l.jsxs(Se, { tone: "orange", children: ["\u6559\u5B66\u6863\u4F4D ", a, "%"] })] }), l.jsx(wt, { detail: u, mode: "latent", generative: true, label: `\u540C\u4E00 GLC \u6A21\u578B\u5728\u76EE\u6807\u6863\u4F4D ${a}% \u65F6\u7684\u8BED\u4E49\u4E0E\u7EB9\u7406\u793A\u610F` }), l.jsxs("div", { className: "glc-rate-tags", children: [l.jsx("span", { className: a < 28 ? "is-active" : "", children: "\u8BED\u4E49\u8F6E\u5ED3\u4F18\u5148" }), l.jsx("span", { className: a >= 28 && a < 68 ? "is-active" : "", children: "\u4E3B\u4F53\u4E0E\u7EB9\u7406\u6298\u4E2D" }), l.jsx("span", { className: a >= 68 ? "is-active" : "", children: "\u590D\u6742\u7EB9\u7406\u589E\u52A0" })] })] }), l.jsxs(ie, { className: "glc-rate-formula", tone: "purple", children: [l.jsx("span", { className: "glc-section-label", children: "\u6F5C\u7A7A\u95F4\u53D8\u6362\u4E2D\u7684\u7801\u7387\u8C03\u5236" }), l.jsxs("div", { className: "glc-formula", children: [l.jsx(de, { meaning: "l\uFF1A\u751F\u6210\u5F0F VQ-VAE \u6F5C\u7801\uFF1B\u53D8\u6362\u7F16\u7801\u7684\u8F93\u5165\u3002", children: "l" }), l.jsx("span", { children: " \u2192 " }), l.jsx(de, { meaning: "g\u2090\uFF1A\u5206\u6790\u53D8\u6362\uFF0C\u5148\u4EA7\u751F\u8FDE\u7EED\u53D8\u6362\u7801\u3002", children: "g\u2090" }), l.jsx("span", { children: "(l) \u2192 " }), l.jsx(de, { meaning: "q_enc\uFF1A\u8BAD\u7EC3\u5F97\u5230\u7684\u7F16\u7801\u4FA7\u7279\u5F81\u7F29\u653E\u5668\uFF1B\u540C\u4E00\u6A21\u578B\u53EF\u968F\u76EE\u6807\u7801\u7387\u6539\u53D8\u5176\u8C03\u5236\u3002", children: "q_enc" }), l.jsx("span", { children: " \u2192 Q \u2192 " }), l.jsx(de, { meaning: "q_dec\uFF1A\u89E3\u7801\u4FA7\u7279\u5F81\u7F29\u653E\u5668\uFF0C\u4E0E\u7F16\u7801\u4FA7\u5171\u540C\u652F\u6301\u53EF\u53D8\u7801\u7387\u3002", children: "q_dec" })] }), l.jsx("p", { children: "\u8BBA\u6587\u6309\u4E0D\u540C\u7801\u7387\u8BAD\u7EC3\uFF0C\u5E76\u5728\u7F16\u7801/\u89E3\u7801\u53D8\u6362\u4E2D\u52A0\u5165\u5B66\u4E60\u5230\u7684\u7F29\u653E\u5668\u3002\u4F60\u62D6\u52A8\u7684\u662F\u4E00\u4E2A\u6863\u4F4D\u793A\u610F\uFF1B\u5355\u6A21\u578B\u53EF\u8986\u76D6\u591A\u4E2A\u5DE5\u4F5C\u70B9\u8FD9\u4E00\u7ED3\u8BBA\u6765\u81EA\u8BBA\u6587\u7ED3\u6784\u4E0E Figure 14\u3002" }), l.jsx("div", { className: "glc-rate-meter", "aria-label": `\u76F8\u5BF9\u7801\u91CF\u793A\u610F ${a + 20}%`, children: l.jsx("span", { style: { width: `${a}%` } }) }), l.jsxs("div", { className: "glc-rate-caption", children: [l.jsx("b", { children: "\u76F8\u5BF9\u7801\u91CF\u793A\u610F" }), l.jsx("span", { children: a < 9 ? "\u6781\u4F4E\u7AEF\u9700\u68C0\u67E5\u7ED3\u6784\u4FDD\u771F" : "\u7EC6\u8282\u968F\u9884\u7B97\u589E\u957F" })] })] })] })] });
  }
  const Rf = [{ id: "read", title: "\u7CBE\u8BFB\u6B63\u6587\u4E0E\u8865\u5145\u6750\u6599", detail: "\u6838\u5BF9\u95EE\u9898\u3001\u7ED3\u6784\u3001\u8BAD\u7EC3\u3001\u6D88\u878D\u548C\u9650\u5236" }, { id: "formula", title: "\u516C\u5F0F\u4E0E\u7B26\u53F7\u5BA1\u8BA1", detail: "\u68C0\u67E5\u5F0F (1)\u2013(8) \u7684\u53D8\u91CF\u3001\u6743\u91CD\u4E0E\u6761\u4EF6" }, { id: "protocol", title: "\u7ED3\u679C\u53E3\u5F84\u6838\u5BF9", detail: "\u5206\u79BB bpp\u3001BD-Rate\u3001FID\u3001DISTS \u7684\u65B9\u5411" }, { id: "interaction", title: "\u4EA4\u4E92\u5F0F\u673A\u5236\u590D\u73B0", detail: "\u5B9E\u73B0\u9884\u7B97\u3001\u8D85\u5148\u9A8C\u3001\u7801\u9884\u6D4B\u4E0E\u5931\u8D25\u8FB9\u754C" }, { id: "report", title: "\u5B66\u4E60\u62A5\u544A\u4E0E\u6279\u5224\u6027\u5206\u6790", detail: "\u6574\u7406\u590D\u73B0\u8FB9\u754C\u3001\u5C40\u9650\u4E0E\u540E\u7EED\u5B9E\u9A8C\u65B9\u6848" }, { id: "train", title: "\u91CD\u65B0\u8BAD\u7EC3\u5B8C\u6574 GLC", detail: "\u672A\u590D\u73B0\u6570\u636E\u51C6\u5907\u3001\u4E09\u9636\u6BB5\u8BAD\u7EC3\u548C\u8BC4\u6D4B" }];
  function Tf() {
    const [a, y] = U.useState(() => /* @__PURE__ */ new Set(["read", "formula", "protocol", "interaction", "report"])), u = (x) => y((w) => {
      const D = new Set(w);
      return D.has(x) ? D.delete(x) : D.add(x), D;
    }), p = a.has("train");
    return l.jsxs("div", { className: "glc-scene glc-reproduce-page", children: [l.jsxs(ie, { className: "glc-audit-board", tone: "blue", children: [l.jsxs("div", { className: "glc-audit-head", children: [l.jsxs("div", { children: [l.jsx(We, { tone: "blue", children: "\u672C\u7AE0\u5DE5\u4F5C\u91CF" }), l.jsx("h3", { children: "\u6211\u5B9E\u9645\u5B8C\u6210\u4E86\u4EC0\u4E48" })] }), l.jsxs(Se, { tone: p ? "green" : "orange", children: [a.size, "/6 \u9879"] })] }), l.jsx("div", { className: "glc-audit-list", children: Rf.map((x) => l.jsxs("button", { className: `glc-audit-row ${a.has(x.id) ? "is-checked" : ""} ${x.id === "train" ? "is-training" : ""}`, onClick: () => u(x.id), "aria-pressed": a.has(x.id), children: [l.jsx("span", { className: "glc-checkbox", "aria-hidden": "true", children: a.has(x.id) ? "\u2713" : "" }), l.jsxs("span", { children: [l.jsx("b", { children: x.title }), l.jsx("small", { children: x.detail })] }), l.jsx("i", { children: x.id === "train" ? a.has(x.id) ? "\u58F0\u660E\u5DF2\u505A" : "\u672A\u505A" : a.has(x.id) ? "\u5B8C\u6210" : "\u672A\u52FE\u9009" })] }, x.id)) })] }), l.jsxs("aside", { className: "glc-reproduce-side", children: [l.jsxs(ie, { className: "glc-honest-card", tone: p ? "green" : "orange", children: [l.jsxs("div", { className: "glc-card-title", children: [l.jsx("span", { children: "\u590D\u73B0\u8FB9\u754C" }), l.jsx(Se, { tone: p ? "green" : "orange", children: p ? "\u5DF2\u58F0\u660E\u8BAD\u7EC3" : "\u672A\u8BAD\u7EC3\u5B8C\u6574\u6A21\u578B" })] }), l.jsx("p", { children: p ? "\u82E5\u58F0\u79F0\u5B8C\u6210\u8BAD\u7EC3\uFF0C\u8FD8\u9700\u7ED9\u51FA\u6570\u636E\u5212\u5206\u3001\u8BAD\u7EC3\u65E5\u5FD7\u3001\u968F\u673A\u79CD\u5B50\u3001\u7B97\u529B\u73AF\u5883\u548C\u540C\u534F\u8BAE\u8BC4\u6D4B\u3002" : "\u672C\u8F6E\u6CA1\u6709\u91CD\u65B0\u8BAD\u7EC3 VQ-VAE\u3001\u6F5C\u7A7A\u95F4\u53D8\u6362\u7F16\u7801\u5668\u6216\u751F\u6210\u89E3\u7801\u5668\uFF0C\u4E5F\u6CA1\u6709\u4EA7\u51FA\u65B0\u7684 benchmark \u66F2\u7EBF\u3002" }), l.jsxs("div", { className: "glc-boundary-list", children: [l.jsx("span", { children: "\u5DF2\u5B8C\u6210" }), l.jsx("b", { children: "\u8BBA\u6587\u7406\u89E3\u3001\u516C\u5F0F\u6838\u5BF9\u3001\u4EA4\u4E92\u673A\u5236\u3001\u7ED3\u679C\u53E3\u5F84\u3001\u62A5\u544A" }), l.jsx("span", { children: "\u672A\u5B8C\u6210" }), l.jsx("b", { children: "\u6570\u636E\u590D\u73B0\u3001\u4E09\u9636\u6BB5\u8BAD\u7EC3\u3001\u72EC\u7ACB\u8BC4\u6D4B" })] })] }), l.jsxs(ie, { className: "glc-workload-visual", tone: "purple", children: [l.jsx(wt, { detail: a.size * 16, mode: "latent", generative: true, label: "\u5DF2\u5B8C\u6210\u5DE5\u4F5C\u8D8A\u591A\uFF0C\u9A6C\u8D5B\u514B\u7ED3\u6784\u8D8A\u5B8C\u6574\uFF1B\u8BAD\u7EC3\u672A\u5B8C\u6210\u4ECD\u662F\u660E\u786E\u7F3A\u53E3" }), l.jsx("p", { children: "\u56FE\u53EA\u8868\u793A\u5DE5\u4F5C\u68C0\u67E5\u8986\u76D6\u5EA6\uFF0C\u4E0D\u4EE3\u8868\u6A21\u578B\u8D28\u91CF\u6216\u8BBA\u6587\u590D\u73B0\u6210\u529F\u3002" })] }), l.jsx("div", { className: `glc-feedback is-${p ? "green" : "orange"}`, "aria-live": "polite", children: p ? "\u4F60\u6B63\u5728\u58F0\u660E\u5B8C\u6574\u8BAD\u7EC3\uFF1B\u5FC5\u987B\u8865\u5145\u6570\u636E\u3001\u65E5\u5FD7\u4E0E\u540C\u534F\u8BAE\u6307\u6807\u540E\u624D\u80FD\u4F5C\u4E3A\u8BC1\u636E\u3002" : "\u8BDA\u5B9E\u8FB9\u754C\uFF1A\u4EA4\u4E92\u5B9E\u9A8C\u590D\u73B0\u7684\u662F\u673A\u5236\u5173\u7CFB\uFF0C\u4E0D\u662F\u8BAD\u7EC3\u7ED3\u679C\u3002" })] })] });
  }
  const Ks = { natural: { label: "\u81EA\u7136\u56FE\u50CF\u5DE5\u4F5C\u8303\u56F4", value: "< 0.04", unit: "bpp", headline: "\u8BBA\u6587\u5728\u81EA\u7136\u56FE\u50CF\u5B9E\u9A8C\u4E2D\u62A5\u544A\u4F4E\u4E8E 0.04 bpp \u7684\u9AD8\u89C6\u89C9\u8D28\u91CF\u5DE5\u4F5C\u70B9\u3002", condition: "CLIC2020 \u539F\u59CB\u5206\u8FA8\u7387\uFF1B\u611F\u77E5\u6307\u6807 DISTS\u3001FID\u3001KID \u4E3A\u91CD\u70B9\u3002", caution: "\u8FD9\u662F\u4E00\u4E2A\u62A5\u544A\u8303\u56F4\uFF0C\u4E0D\u7B49\u4E8E\u4EFB\u610F\u56FE\u7247\u3001\u4EFB\u610F\u5B9E\u73B0\u90FD\u80FD\u7A33\u5B9A\u8FBE\u5230\u3002" }, face: { label: "\u4EBA\u8138\u56FE\u50CF\u5DE5\u4F5C\u8303\u56F4", value: "< 0.01", unit: "bpp", headline: "\u4EBA\u8138\u6A21\u578B\u628A\u5DE5\u4F5C\u7801\u7387\u63A8\u5230\u4F4E\u4E8E 0.01 bpp\uFF0C\u540C\u65F6\u5C1D\u8BD5\u4FDD\u6301\u5C5E\u6027\u4E00\u81F4\u3002", condition: "CelebAHQ 512\xD7512\uFF1B\u4EBA\u8138\u4E13\u7528 f=1/32\u3001M=1024 \u914D\u7F6E\u3002", caution: "\u6781\u4F4E\u7801\u7387\u4E0B\u751F\u6210\u80FD\u529B\u66F4\u5F3A\uFF0C\u4F46\u7CBE\u786E\u8EAB\u4EFD\u7EC6\u8282\u4ECD\u9700\u5355\u72EC\u6838\u67E5\u3002" }, clic: { label: "\u4E0E MS-ILLM \u5BF9\u9F50 FID", value: "\u224845", unit: "% fewer bits", headline: "\u5728\u76F8\u540C FID \u7684\u7801\u7387\u2014\u611F\u77E5\u66F2\u7EBF\u4F4D\u7F6E\uFF0CGLC \u6BD4 MS-ILLM \u5C11\u7528\u7EA6 45% \u6BD4\u7279\u3002", condition: "CLIC2020\uFF1B\u8FD9\u662F\u7B49 FID \u6761\u4EF6\u6BD4\u8F83\uFF0C\u4E0D\u662F\u56FA\u5B9A bpp \u7684\u9010\u56FE\u4E00\u81F4\u8282\u7701\u3002", caution: "FID \u662F\u6570\u636E\u96C6\u7EA7 patch \u7EDF\u8BA1\uFF0C\u4F4E FID \u4E0D\u8BC1\u660E\u6BCF\u5F20\u56FE\u90FD\u5FE0\u5B9E\u4FDD\u7559\u6587\u5B57\u6216\u7ED3\u6784\u3002" } };
  function Ff() {
    const [a, y] = U.useState("clic"), u = Ks[a];
    return l.jsxs("div", { className: "glc-scene glc-results-page", children: [l.jsx("div", { className: "glc-result-cards", role: "group", "aria-label": "\u9009\u62E9\u4E3B\u8981\u7ED3\u679C", children: Object.keys(Ks).map((p) => {
      const x = Ks[p];
      return l.jsxs("button", { className: `glc-result-card ${a === p ? "is-active" : ""}`, onClick: () => y(p), "aria-pressed": a === p, children: [l.jsx("span", { children: x.label }), l.jsxs("strong", { children: [x.value, l.jsx("small", { children: x.unit })] }), l.jsx("i", { "aria-hidden": "true" })] }, p);
    }) }), l.jsxs(ie, { className: `glc-result-detail is-${a}`, tone: a === "clic" ? "green" : a === "face" ? "purple" : "blue", children: [l.jsxs("div", { className: "glc-result-copy", children: [l.jsx(We, { tone: a === "clic" ? "green" : a === "face" ? "purple" : "blue", children: a === "clic" ? "\u7B49 FID \u6761\u4EF6" : "\u62A5\u544A\u5DE5\u4F5C\u70B9" }), l.jsx("h3", { children: u.headline }), l.jsx("p", { children: u.condition }), l.jsx("div", { className: "glc-result-caution", children: u.caution })] }), l.jsxs("div", { className: "glc-result-visual", children: [l.jsx(wt, { detail: a === "natural" ? 86 : a === "face" ? 62 : 76, mode: "latent", generative: true, label: "\u4E3B\u8981\u7ED3\u679C\u5BF9\u5E94\u7684\u611F\u77E5\u538B\u7F29\u793A\u610F" }), a === "clic" ? l.jsxs("div", { className: "glc-equal-fid", children: [l.jsxs("div", { children: [l.jsx("span", { children: "MS-ILLM" }), l.jsxs("b", { children: ["100", l.jsx("small", { children: "\u76F8\u5BF9\u6BD4\u7279" })] })] }), l.jsxs("div", { className: "is-green", children: [l.jsx("span", { children: "GLC" }), l.jsxs("b", { children: ["55", l.jsx("small", { children: "\u221245%" })] })] }), l.jsx("p", { children: "\u6761\u5F62\u7ECF\u8FC7\u5F52\u4E00\u5316\uFF0C\u4EC5\u8868\u73B0\u7B49 FID \u5BF9\u9F50\u540E\u7684\u76F8\u5BF9\u6BD4\u7279\u91CF\u3002" })] }) : l.jsxs("div", { className: "glc-range-stamp", children: [l.jsx(Se, { tone: a === "face" ? "purple" : "blue", children: u.condition.split("\uFF1B")[0] }), l.jsxs("b", { children: [u.value, l.jsx("span", { children: u.unit })] }), l.jsx("p", { children: "\u4F4E bpp \u4E0D\u7B49\u4E8E\u201C\u6BCF\u5F20\u56FE\u90FD\u65E0\u635F\u4FDD\u771F\u201D\u3002" })] })] })] }), l.jsxs("div", { className: "glc-result-rule", children: [l.jsx("span", { children: "\u4E3B\u6307\u6807\u65B9\u5411" }), l.jsx("b", { children: "DISTS \u2193 \xB7 FID \u2193 \xB7 KID \u2193 \xB7 bpp \u2193" }), l.jsx("span", { children: "\u5B8C\u6574\u6027\u6307\u6807" }), l.jsx("b", { children: "PSNR \u2191 \xB7 MS-SSIM \u2191" })] })] });
  }
  const Of = { 1: { title: "Stage I \xB7 \u5EFA\u7ACB\u751F\u6210\u5F0F\u6F5C\u7A7A\u95F4", goal: "\u5148\u8BA9 VQ-VAE \u5B66\u4F1A\u8BED\u4E49\u4E00\u81F4\u3001\u7EB9\u7406\u53EF\u4FE1\u7684\u91CD\u5EFA\u3002", feedback: "\u9636\u6BB5 I \u5148\u628A\u6F5C\u7A7A\u95F4\u8BAD\u7EC3\u597D\uFF1B\u6B64\u65F6\u4EE3\u7801\u7387\u6A21\u5757\u8FD8\u6CA1\u6709\u5F00\u59CB\u5B66\u4E60\u3002", trainable: ["E", "VQ", "D"], frozen: [] }, 2: { title: "Stage II \xB7 \u51BB\u7ED3\u81EA\u7F16\u7801\u5668", goal: "\u56FA\u5B9A\u8BED\u4E49\u6F5C\u7A7A\u95F4\uFF0C\u4E13\u95E8\u5B66\u4E60\u6F5C\u7A7A\u95F4\u53D8\u6362\u7F16\u7801\u4E0E\u71B5\u6A21\u578B\u3002", feedback: "\u9636\u6BB5 II \u51BB\u7ED3 E/D\uFF0C\u8BA9\u53D8\u6362\u7F16\u7801\u5148\u56F4\u7ED5\u7A33\u5B9A\u6F5C\u7A7A\u95F4\u5B66\u4E60\u7387\u5931\u771F\u76EE\u6807\u3002", trainable: ["g\u2090", "Q", "g\u209B", "h\u2090", "h\u209B", "CP"], frozen: ["E", "VQ", "D"] }, 3: { title: "Stage III \xB7 \u7AEF\u5230\u7AEF\u8054\u5408\u5FAE\u8C03", goal: "\u653E\u5F00\u6574\u7F51\uFF0C\u5728\u7387\u9879\u3001\u50CF\u7D20\u611F\u77E5\u9879\u548C\u7801\u9884\u6D4B\u76D1\u7763\u4E0B\u5171\u540C\u66F4\u65B0\u3002", feedback: "\u9636\u6BB5 III \u5141\u8BB8 E/D \u4E0E\u53D8\u6362\u7F16\u7801\u4E00\u8D77\u8C03\u6574\uFF0C\u4F46\u7801\u9884\u6D4B\u4ECD\u53EA\u5728\u8BAD\u7EC3\u671F\u63D0\u4F9B\u76D1\u7763\u3002", trainable: ["E", "VQ", "D", "g\u2090", "Q", "g\u209B", "h\u2090", "h\u209B", "CP"], frozen: [] } };
  function $f() {
    const [a, y] = U.useState(1), u = Of[a], p = (x) => u.trainable.includes(x);
    return l.jsxs("div", { className: "glc-scene glc-stage-page", children: [l.jsxs("aside", { className: "glc-stage-menu", children: [l.jsx(We, { tone: "blue", children: "\u6E10\u8FDB\u5F0F\u8BAD\u7EC3" }), l.jsx("h3", { children: "\u9009\u62E9\u8BAD\u7EC3\u9636\u6BB5" }), [1, 2, 3].map((x) => l.jsxs("button", { className: a === x ? "is-active" : "", onClick: () => y(x), "aria-pressed": a === x, children: [l.jsxs("span", { children: ["STAGE ", ["I", "II", "III"][x - 1]] }), l.jsx("b", { children: x === 1 ? "\u6F5C\u7A7A\u95F4" : x === 2 ? "\u53D8\u6362\u7F16\u7801" : "\u8054\u5408\u5FAE\u8C03" })] }, x)), l.jsx("div", { className: `glc-feedback is-${a === 1 ? "blue" : a === 2 ? "purple" : "green"}`, "aria-live": "polite", children: u.feedback })] }), l.jsxs("div", { className: "glc-stage-main", children: [l.jsxs(ie, { className: "glc-stage-network", tone: "green", children: [l.jsxs("div", { className: "glc-card-title", children: [l.jsx("span", { children: u.title }), l.jsx(Se, { tone: a === 1 ? "blue" : a === 2 ? "purple" : "green", children: u.goal })] }), l.jsx("div", { className: "glc-network-row", children: ["E", "VQ", "l", "g\u2090", "Q", "\u0177", "g\u209B", "D"].map((x, w) => l.jsxs(Lr.Fragment, { children: [l.jsxs("div", { className: `glc-network-block ${p(x) ? "is-trainable" : u.frozen.includes(x) ? "is-frozen" : "is-neutral"}`, children: [l.jsx("b", { children: x }), l.jsx("span", { children: u.frozen.includes(x) ? "\u51BB\u7ED3" : p(x) ? "\u66F4\u65B0" : "\u8868\u793A" })] }), w < 7 && l.jsx("span", { className: "glc-path-arrow", "aria-hidden": "true", children: "\u2192" })] }, x)) }), l.jsxs("div", { className: "glc-hyper-branch", children: [l.jsx("span", { className: "glc-branch-stem" }), ["h\u2090", "\u1E91", "h\u209B", "prior z"].map((x, w) => l.jsxs(Lr.Fragment, { children: [l.jsxs("div", { className: `glc-network-block is-purple ${p(x) ? "is-trainable" : ""}`, children: [l.jsx("b", { children: x }), l.jsx("span", { children: p(x) ? "\u66F4\u65B0" : "\u65C1\u8DEF" })] }), w < 3 && l.jsx("span", { className: "glc-path-arrow", "aria-hidden": "true", children: "\u2192" })] }, x))] }), l.jsx("div", { className: "glc-stage-caption", children: a === 1 ? "\u751F\u6210\u5F0F VQ-VAE \u5148\u786E\u5B9A\u6F5C\u7A7A\u95F4\u7684\u8BED\u4E49\u4E0E\u7EB9\u7406\u80FD\u529B\u3002" : a === 2 ? "\u4E3B\u7801\u6D41\u4E0E\u8D85\u4FE1\u606F\u5F00\u59CB\u5B66\u4E60\uFF0C\u7801\u9884\u6D4B\u5668\u53EA\u53C2\u4E0E\u8BAD\u7EC3\u76D1\u7763\u3002" : "\u8054\u5408\u5FAE\u8C03\u628A\u7801\u7387\u3001\u751F\u6210\u8D28\u91CF\u4E0E\u8BED\u4E49\u4E00\u81F4\u6027\u653E\u8FDB\u540C\u4E00\u4F18\u5316\u8FC7\u7A0B\u3002" })] }), l.jsxs("div", { className: "glc-stage-bottom", children: [l.jsxs(ie, { className: "glc-loss-card", tone: a === 2 ? "purple" : a === 1 ? "blue" : "green", children: [l.jsxs("div", { className: "glc-card-title", children: [l.jsx("span", { children: "\u5F53\u524D\u4F18\u5316\u76EE\u6807" }), l.jsx(Se, { tone: a === 2 ? "purple" : a === 1 ? "blue" : "green", children: a === 1 ? "\u03BB_adv = 0.8 \xB7 \u03B2 = 0.25" : a === 2 ? "\u03B1 = 0.5" : "\u03BB_code = 0.05" })] }), a === 1 && l.jsxs("div", { className: "glc-loss-lines", children: [l.jsxs("p", { children: ["\u2112 = \u2016x\u2212x\u0302\u2016 + \u2112_per + ", l.jsx(de, { meaning: "\u03BB_adv\uFF1A\u81EA\u9002\u5E94 Patch-GAN \u5BF9\u6297\u635F\u5931\u7684\u6743\u91CD\uFF0C\u8BBA\u6587\u8BBE\u4E3A 0.8\u3002", children: "\u03BB_adv" }), "\u2112_adv + \u2112_codebook"] }), l.jsxs("p", { children: ["\u2112_codebook = \u2016sg(l)\u2212l\u0303\u2016 + ", l.jsx(de, { meaning: "\u03B2\uFF1A\u7801\u672C\u66F4\u65B0\u9879\u7684\u6743\u91CD\uFF0C\u8BBA\u6587\u8BBE\u4E3A 0.25\u3002", children: "\u03B2" }), "\u2016sg(l\u0303)\u2212l\u2016"] })] }), a === 2 && l.jsxs("div", { className: "glc-loss-lines", children: [l.jsxs("p", { children: ["\u2112 = \u{1D53C}[", l.jsx(de, { meaning: "R(\u0177)\uFF1A\u7531\u71B5\u6A21\u578B\u4F30\u8BA1\u7684\u91CF\u5316\u53D8\u6362\u7801\u7801\u7387\u3002", children: "R(\u0177)" }), " + \u03BB\u{1D49F}_code]"] }), l.jsxs("p", { children: ["\u{1D49F}_code = ", l.jsx(de, { meaning: "\u03B1\uFF1A\u7801\u9884\u6D4B\u4EA4\u53C9\u71B5\u9879\u7684\u6743\u91CD\uFF0C\u8BBA\u6587\u8BBE\u4E3A 0.5\u3002", children: "\u03B1" }), "CE(M_l, M\u0302_l\u0302) + \u2016l\u2212l\u0302\u2016\xB2"] })] }), a === 3 && l.jsxs("div", { className: "glc-loss-lines", children: [l.jsxs("p", { children: ["\u{1D49F} = \u2016x\u2212x\u0302\u2016 + \u2112_per + \u03BB_adv\u2112_adv + ", l.jsx(de, { meaning: "\u03BB_code\uFF1A\u50CF\u7D20\u6F5C\u7A7A\u95F4\u7801\u9884\u6D4B\u635F\u5931\u7684\u6743\u91CD\uFF0C\u8BBA\u6587\u8BBE\u4E3A 0.05\u3002", children: "\u03BB_code" }), "\u{1D49F}_code"] }), l.jsxs("p", { children: ["\u2112 = \u{1D53C}[", l.jsx(de, { meaning: "R(\u0177)\uFF1A\u4F30\u8BA1\u7801\u7387\uFF0C\u4E0E\u5931\u771F\u9879\u5171\u540C\u6784\u6210\u7387\u5931\u771F\u76EE\u6807\u3002", children: "R(\u0177)" }), " + \u03BB\u{1D49F}]"] })] })] }), l.jsxs(ie, { className: "glc-stage-visual", tone: "neutral", children: [l.jsx(wt, { detail: a === 1 ? 58 : a === 2 ? 74 : 92, mode: "latent", generative: true, label: "\u8BAD\u7EC3\u63A8\u8FDB\u65F6\uFF0C\u9A6C\u8D5B\u514B\u4ECE\u57FA\u7840\u8BED\u4E49\u9010\u6E10\u83B7\u5F97\u66F4\u4E30\u5BCC\u7684\u7EB9\u7406" }), l.jsxs("div", { children: [l.jsx("strong", { children: a === 1 ? "\u8BED\u4E49\u53EF\u8BFB" : a === 2 ? "\u7801\u7387\u53D7\u63A7" : "\u8054\u5408\u6743\u8861" }), l.jsx("p", { children: a === 1 ? "\u5148\u80FD\u91CD\u5EFA" : a === 2 ? "\u518D\u80FD\u538B\u5C0F" : "\u6700\u540E\u5171\u540C\u4F18\u5316" })] })] })] })] })] });
  }
  const Ql = ["#8aa89b", "#6d8c80", "#c9b98f", "#7299a5", "#4e7368", "#d8c7a4"];
  function Vf() {
    const [a, y] = U.useState(72), u = 40, p = Math.max(4, Math.round(u * (1 - 0.8 * a / 100))), x = Math.round((1 - p / u) * 100);
    return l.jsxs("div", { className: "glc-scene glc-transform-page", children: [l.jsxs(ie, { className: "glc-transform-control", tone: "orange", children: [l.jsx(We, { tone: "orange", children: "\u7A7A\u95F4\u5197\u4F59\u590D\u7528" }), l.jsxs("strong", { className: "glc-huge-number", children: [zr(a, 0), l.jsx("small", { children: "%" })] }), l.jsxs("label", { className: "glc-range-label", children: [l.jsx("span", { children: "\u4E0A\u4E0B\u6587\u53EF\u9884\u6D4B\u7A0B\u5EA6" }), l.jsx("input", { "aria-label": "\u8C03\u6574\u7A7A\u95F4\u5197\u4F59\u590D\u7528\u5F3A\u5EA6", type: "range", min: "0", max: "100", value: a, onChange: (w) => y(Number(w.target.value)) })] }), l.jsx("div", { className: "glc-transform-art", children: l.jsx(wt, { detail: jt(52 + a * 0.35, 0, 100), mode: "latent", generative: true, label: "\u76F8\u90BB\u9A6C\u8D5B\u514B\u5757\u4E4B\u95F4\u7684\u91CD\u590D\u7ED3\u6784\u9010\u6E10\u88AB\u7A7A\u95F4\u4E0A\u4E0B\u6587\u9884\u6D4B" }) }), l.jsx("div", { className: "glc-feedback is-orange", "aria-live": "polite", children: a < 24 ? "\u4E0A\u4E0B\u6587\u5229\u7528\u5F88\u5F31\uFF1A\u91CD\u590D\u7684\u5899\u3001\u5C71\u810A\u548C\u6C34\u9762\u4ECD\u9010\u9879\u5360\u7801\u3002" : a < 70 ? "\u76F8\u90BB\u4F4D\u7F6E\u5F00\u59CB\u9884\u6D4B\u5F7C\u6B64\uFF1B\u53EA\u7ED9\u96BE\u4EE5\u9884\u6599\u7684\u6B8B\u5DEE\u66F4\u591A\u7801\u5B57\u3002" : "\u7A7A\u95F4\u4E0A\u4E0B\u6587\u5F88\u5F3A\uFF1A\u91CD\u590D\u7ED3\u6784\u88AB\u5927\u91CF\u6D88\u53BB\uFF0C\u7801\u6D41\u96C6\u4E2D\u8BB0\u5F55\u65B0\u4FE1\u606F\u3002" })] }), l.jsxs("div", { className: "glc-transform-main", children: [l.jsxs("div", { className: "glc-transform-columns", children: [l.jsxs(ie, { className: "glc-token-panel", tone: "red", children: [l.jsxs("div", { className: "glc-card-title", children: [l.jsx("span", { children: "\u7D22\u5F15\u56FE\u76F4\u4F20" }), l.jsxs(Se, { tone: "red", children: [u, " \u4E2A\u4F4D\u7F6E\u7801"] })] }), l.jsx("div", { className: "glc-token-grid is-index", children: Array.from({ length: u }, (w, D) => l.jsx("span", { style: { backgroundColor: Ql[D % Ql.length] } }, D)) }), l.jsx("p", { children: "\u91CD\u590D\u7684\u5C40\u90E8\u7ED3\u6784\u4E0D\u4F1A\u88AB\u5145\u5206\u6D88\u53BB\uFF0C\u7801\u5B57\u6570\u91CF\u57FA\u672C\u968F\u4F4D\u7F6E\u5C55\u5F00\u3002" })] }), l.jsxs(ie, { className: "glc-token-panel", tone: "green", children: [l.jsxs("div", { className: "glc-card-title", children: [l.jsx("span", { children: "\u6F5C\u7A7A\u95F4\u53D8\u6362\u7F16\u7801" }), l.jsxs(Se, { tone: "green", children: [p, " \u4E2A\u6B8B\u5DEE\u7801"] })] }), l.jsx("div", { className: "glc-token-grid is-residual", children: Array.from({ length: u }, (w, D) => l.jsx("span", { className: D < p ? "is-live" : "", style: { backgroundColor: D < p ? Ql[D % Ql.length] : void 0 } }, D)) }), l.jsx("p", { children: "\u5206\u6790\u53D8\u6362\u4E0E\u7A7A\u95F4\u4E0A\u4E0B\u6587\u5229\u7528\u90BB\u57DF\u5173\u7CFB\uFF0C\u4F7F\u91CD\u590D\u4F4D\u7F6E\u53D8\u6210\u53EF\u9884\u6D4B\u7684\u5C0F\u6B8B\u5DEE\u3002" })] })] }), l.jsxs(ie, { className: "glc-transform-evidence", tone: "green", children: [l.jsxs("div", { className: "glc-evidence-copy", children: [l.jsx("span", { className: "glc-section-label", children: "CLIC2020 \xB7 FID\u2013BPP \xB7 BD-Rate \u8D8A\u4F4E\u8D8A\u597D" }), l.jsxs("div", { className: "glc-formula", children: [l.jsx(de, { meaning: "R(\u0177)\uFF1A\u91CF\u5316\u53D8\u6362\u7801 \u0177 \u7684\u4F30\u8BA1\u7801\u7387\uFF0C\u8FDB\u5165\u7387\u5931\u771F\u76EE\u6807\u3002", children: "R(\u0177)" }), l.jsx("span", { children: " = \u2212log p(\u0177 | \u1E91, \u5DF2\u89E3\u7801\u4E0A\u4E0B\u6587)" })] }), l.jsxs("p", { children: ["\u53D8\u6362\u7F16\u7801\u76F8\u5BF9\u7D22\u5F15\u56FE\u76F4\u4F20\u7684\u5B9E\u6D4B\u4F18\u52BF\uFF1A\u7D22\u5F15\u56FE\u53D8\u4F53\u6709 ", l.jsx("b", { children: "66.2%" }), " BD-Rate \u635F\u5931\u3002"] })] }), l.jsx(rn, { label: "\u7D22\u5F15\u56FE\u76F4\u4F20", value: 66.2, max: 70, suffix: "% BD-Rate", tone: "red" }), l.jsx(rn, { label: "GLC \u53D8\u6362\u7F16\u7801", value: 0, max: 70, suffix: "%", tone: "green", caption: "0% \u662F\u53D8\u6362\u7F16\u7801\u53C2\u8003\u70B9\u3002" }), l.jsxs("div", { className: "glc-tech-note", children: ["\u5F53\u524D\u793A\u610F\u8282\u7701 ", x, "% \u4F4D\u7F6E\u7801 \xB7 \u6559\u5B66\u6A21\u578B"] })] })] })] });
  }
  const De = {};
  De["glc-ablation"] = hf;
  De["glc-applications"] = mf;
  De["glc-architecture"] = yf;
  De["glc-closing"] = jf;
  De["glc-code-prediction"] = kf;
  De["glc-cover"] = Nf;
  De["glc-hyper"] = Cf;
  De["glc-kit"] = pf;
  De["glc-latent"] = If;
  De["glc-limits"] = zf;
  De["glc-problem"] = Mf;
  De["glc-rate"] = Df;
  De["glc-reproduce"] = Tf;
  De["glc-results"] = Ff;
  De["glc-stage-one"] = $f;
  De["glc-transform"] = Vf;
  function Bf({ duration: a = 5e3, loop: y = false, autoPlay: u = false } = {}) {
    const [p, x] = U.useState(0), [w, D] = U.useState(() => u && !matchMedia("(prefers-reduced-motion: reduce)").matches), E = U.useRef(0), R = (L) => {
      E.current = Math.max(0, Math.min(1, L)), x(E.current);
    };
    return U.useEffect(() => {
      const L = matchMedia("(prefers-reduced-motion: reduce)"), I = () => {
        L.matches && D(false);
      };
      return L.addEventListener("change", I), () => L.removeEventListener("change", I);
    }, []), U.useEffect(() => {
      if (!w) return;
      let L = 0, I = performance.now();
      const _ = (V) => {
        const ae = E.current + Math.min(V - I, 100) / a;
        if (I = V, ae >= 1 && !y) {
          R(1), D(false);
          return;
        }
        R(y ? ae % 1 : ae), L = requestAnimationFrame(_);
      };
      return L = requestAnimationFrame(_), () => cancelAnimationFrame(L);
    }, [w, a, y]), { progress: p, playing: w };
  }
  function Af({ meta: a, hero: y }) {
    const u = Bf({ autoPlay: true, loop: true, duration: 6e3 }), p = (x) => {
      const w = y[x], D = De[w.componentId || ""];
      return l.jsxs("div", { className: `ppt-cover-panel ${x === "oldMethod" ? "is-old" : "is-new"}`, children: [l.jsxs("div", { className: "ppt-cover-panel-heading", children: [l.jsx(yt, { variant: "h3", children: w.title || (x === "oldMethod" ? "\u539F\u6709\u65B9\u6CD5" : "\u672C\u6587\u65B9\u6CD5") }), l.jsx(yt, { variant: "small", muted: true, children: w.desc })] }), l.jsx("div", { className: "ppt-cover-animation", children: D ? l.jsx(D, { chapterId: "cover", moduleId: x }) : l.jsx(yt, { variant: "small", muted: true, children: "\u8BF7\u914D\u7F6E\u6B64\u65B9\u6CD5\u7684\u6559\u5B66\u52A8\u753B\u3002" }) })] });
    };
    return l.jsxs("section", { className: "ppt-cover", children: [l.jsxs("div", { className: `ppt-cover-top${a.titleEn.length > 115 ? " is-very-long-title" : a.titleEn.length > 70 ? " is-long-title" : ""}`, "data-slot": "cover-title", children: [l.jsx(yt, { variant: "small", muted: true, children: a.venue }), l.jsx(yt, { variant: "display", children: a.titleEn }), l.jsx(yt, { variant: "subtitle", muted: true, children: a.coreProblem })] }), l.jsx(lc.Provider, { value: { progress: u.progress, playing: u.playing }, children: l.jsxs("div", { className: "ppt-cover-comparison", "data-slot": "comparison", children: [p("oldMethod"), p("newMethod")] }) }), l.jsx("div", { className: "ppt-cover-footer", "data-slot": "cover-footer", children: l.jsx(yt, { variant: "small", muted: true, children: a.coreInsight }) })] });
  }
  function Uf({ page: a }) {
    const y = a.chapter, u = De[a.componentId || ""];
    return l.jsxs("section", { className: "ppt-page", "aria-label": a.title, "data-chapter": y.id, children: [l.jsxs("header", { className: "ppt-heading", "data-slot": "heading", children: [l.jsx("div", { className: "ppt-heading-chapter", children: l.jsx(yt, { variant: "small", muted: true, children: y.title }) }), l.jsx("div", { className: "ppt-heading-title", children: l.jsx(yt, { variant: "h1", children: a.title }) }), a.goal && l.jsx("div", { className: "ppt-heading-goal", children: l.jsx(yt, { variant: "subtitle", muted: true, children: a.goal }) })] }), l.jsx("div", { className: "ppt-body", "data-slot": "body", children: u ? l.jsx(u, { chapterId: y.id, moduleId: a.moduleId || a.id }) : l.jsxs(yt, { children: ["\u7F3A\u5C11\u9875\u9762\u7EC4\u4EF6\uFF1A", a.componentId] }) })] });
  }
  const Wl = { zoom: 1, x: 0, y: 0 };
  const Qf = "button, input, select, textarea, a, [role=slider], [role=button], [contenteditable]";
  function Wf({ children: a, fitFactor: y = 1 }) {
    const u = U.useRef(null), [p, x] = U.useState({ width: 0, height: 0 }), [w, D] = U.useState(Wl), E = U.useRef(w), R = U.useRef(/* @__PURE__ */ new Map()), L = U.useRef(false), I = 1600, _ = 900, V = Math.min(p.width / I, p.height / _) * y, ae = (B) => {
      const te = Math.max(0, (I * V * B.zoom - p.width) / 2), X = Math.max(0, (_ * V * B.zoom - p.height) / 2);
      return { zoom: B.zoom, x: Math.max(-te, Math.min(te, B.x)), y: Math.max(-X, Math.min(X, B.y)) };
    }, b = (B) => {
      E.current = ae(B), D(E.current);
    }, z = (B, te, X = te) => {
      const xe = E.current, Ee = Math.max(1, Math.min(5, xe.zoom * B)), Ae = Ee / xe.zoom;
      b({ zoom: Ee, x: te.x - (X.x - xe.x) * Ae, y: te.y - (X.y - xe.y) * Ae });
    }, Q = (B, te) => {
      const X = u.current.getBoundingClientRect();
      return { x: B - X.left - X.width / 2, y: te - X.top - X.height / 2 };
    };
    U.useLayoutEffect(() => {
      const B = u.current;
      if (!B) return;
      const te = new ResizeObserver(([X]) => {
        x(X.contentRect), E.current = Wl, D(Wl), R.current.clear();
      });
      return te.observe(B), () => te.disconnect();
    }, []), U.useEffect(() => {
      const B = u.current;
      if (!B) return;
      const te = (X) => {
        !X.ctrlKey && !window.matchMedia("(max-width: 768px)").matches || (X.preventDefault(), z(Math.exp(-X.deltaY * (X.deltaMode === 1 ? 0.03 : 2e-3)), Q(X.clientX, X.clientY)));
      };
      return B.addEventListener("wheel", te, { passive: false }), () => B.removeEventListener("wheel", te);
    }, [p.width, p.height, y]);
    const Y = (B) => {
      if (!(B.pointerType === "mouse" && B.button !== 0) && !B.target.closest(".slide-zoom-controls") && (R.current.set(B.pointerId, Q(B.clientX, B.clientY)), R.current.size === 1 && (L.current = !B.target.closest(Qf)), R.current.size >= 2 || L.current && E.current.zoom > 1)) for (const te of R.current.keys()) B.currentTarget.setPointerCapture(te);
    }, se = (B) => {
      const te = R.current.get(B.pointerId);
      if (!te) return;
      const X = [...R.current.values()], xe = Q(B.clientX, B.clientY);
      R.current.set(B.pointerId, xe);
      const Ee = [...R.current.values()];
      if (Ee.length === 2) {
        B.preventDefault();
        const Ae = (Re) => Math.hypot(Re[0].x - Re[1].x, Re[0].y - Re[1].y), lt = (Re) => ({ x: (Re[0].x + Re[1].x) / 2, y: (Re[0].y + Re[1].y) / 2 });
        Ae(X) > 0 && z(Ae(Ee) / Ae(X), lt(Ee), lt(X));
      } else Ee.length === 1 && L.current && E.current.zoom > 1 && (B.preventDefault(), b({ ...E.current, x: E.current.x + xe.x - te.x, y: E.current.y + xe.y - te.y }));
    }, oe = (B) => {
      R.current.delete(B.pointerId), B.currentTarget.hasPointerCapture(B.pointerId) && B.currentTarget.releasePointerCapture(B.pointerId);
    };
    return l.jsxs("div", { className: `slide-viewport ${w.zoom > 1 ? "is-zoomed" : ""}`, ref: u, onPointerDownCapture: Y, onPointerMoveCapture: se, onPointerUpCapture: oe, onPointerCancelCapture: oe, onLostPointerCapture: (B) => R.current.delete(B.pointerId), children: [l.jsx("div", { className: "slide-content", "data-slide-canvas": true, style: { width: I, height: _, left: "50%", top: "50%", transformOrigin: "center", transform: `translate(-50%, -50%) translate(${w.x}px, ${w.y}px) scale(${V * w.zoom})` }, children: a }), l.jsxs("div", { className: "slide-zoom-controls", role: "group", "aria-label": "\u753B\u5E03\u7F29\u653E", children: [l.jsx("button", { "aria-label": "\u7F29\u5C0F", onClick: () => z(1 / 1.25, { x: 0, y: 0 }), disabled: w.zoom <= 1, children: "\u2212" }), l.jsxs("button", { className: "slide-zoom-reset", "aria-label": "\u6062\u590D\u9002\u5E94\u7A97\u53E3", title: "\u6062\u590D\u9002\u5E94\u7A97\u53E3", onClick: () => b(Wl), children: [Math.round(w.zoom * 100), "%"] }), l.jsx("button", { "aria-label": "\u653E\u5927", onClick: () => z(1.25, { x: 0, y: 0 }), disabled: w.zoom >= 5, children: "+" })] })] });
  }
  function Hf(a) {
    return a >= 1e8 ? (a / 1e8).toFixed(1) + "\u4EBF\u64AD\u653E" : a >= 1e4 ? (a / 1e4).toFixed(1) + "\u4E07\u64AD\u653E" : a + "\u64AD\u653E";
  }
  function Gf(a) {
    const y = Math.floor(a / 60), u = a % 60;
    return y + ":" + (u < 10 ? "0" : "") + u;
  }
  let Kf = 0;
  function Yf(a, y) {
    const u = Array.from(new Set(a.filter((p) => p && p.startsWith("BV")))).join("|");
    U.useEffect(() => {
      let p = false;
      const x = u ? u.split("|") : [];
      if (x.length === 0) return;
      const w = window, D = [];
      return x.forEach((E) => {
        const R = `__paper_skill_bili_${Date.now()}_${++Kf}`, L = document.createElement("script"), I = () => {
          delete w[R], L.remove();
        };
        w[R] = (_) => {
          if (p) return;
          if (I(), !_ || _.code !== 0 || !_.data) {
            y(E, null);
            return;
          }
          const V = _.data;
          y(E, { bvid: E, title: V.title, cover: V.pic ? V.pic.replace(/^http:/, "https:") : void 0, duration: V.duration ? Gf(V.duration) : void 0, views: V.stat ? Hf(V.stat.view) : void 0 });
        }, L.src = "https://api.bilibili.com/x/web-interface/view?bvid=" + E + "&jsonp=jsonp&callback=" + R, L.onerror = () => {
          p || (I(), y(E, null));
        }, D.push({ callbackName: R, script: L }), document.body.appendChild(L);
      }), () => {
        p = true, D.forEach(({ callbackName: E, script: R }) => {
          w[E] = () => {
          }, R.remove(), window.setTimeout(() => {
            delete w[E];
          }, 6e4);
        });
      };
    }, [u, y]);
  }
  function Xf({ items: a }) {
    const [y, u] = U.useState(0), p = a.map((I) => I.bvid), [x, w] = U.useState({}), [D, E] = U.useState({}), R = U.useCallback((I, _) => {
      w((V) => ({ ...V, [I]: _ }));
    }, []);
    Yf(p, R);
    const L = a.filter((I) => I.bvid && I.bvid.startsWith("BV"));
    return l.jsxs("section", { className: "dl-related-section", children: [l.jsx("h3", { children: "\u5EF6\u4F38\u5B66\u4E60 \xB7 B \u7AD9\u8BB2\u89E3\u89C6\u9891" }), l.jsx("p", { children: "\u63A8\u8350\u51E0\u4E2A\u76F8\u5173\u7684\u89C6\u9891\u8BB2\u89E3\uFF0C\u5E2E\u52A9\u52A0\u6DF1\u7406\u89E3\u3002" }), l.jsx("div", { className: "dl-video-strip", children: L.slice(y * 4, (y + 1) * 4).map((I) => {
      const _ = x[I.bvid], V = I.cover || (_ == null ? void 0 : _.cover), ae = !!V && !D[I.bvid];
      return l.jsxs("a", { className: "dl-video-card", href: `https://www.bilibili.com/video/${I.bvid}`, target: "_blank", rel: "noopener", "data-bvid": I.bvid, children: [l.jsxs("div", { className: `dl-video-link-cover ${V ? "is-loaded" : "is-loading"}`, children: [ae ? l.jsx("img", { className: "dl-video-cover-img", src: V, alt: I.title, referrerPolicy: "no-referrer", loading: "lazy", onError: () => E((b) => ({ ...b, [I.bvid]: true })) }) : null, l.jsx("div", { className: "dl-video-play", children: "\u25B6" }), l.jsx("span", { className: "dl-video-link-tag", children: "B \u7AD9" }), _ != null && _.duration ? l.jsx("span", { className: "dl-video-duration", children: _.duration }) : null] }), l.jsx("strong", { children: I.title }), I.views || _ != null && _.views ? l.jsx("div", { className: "dl-video-meta", children: l.jsx("span", { className: "views", children: I.views || (_ == null ? void 0 : _.views) }) }) : null] }, I.bvid);
    }) }), L.length > 4 && l.jsxs("nav", { "aria-label": "\u89C6\u9891\u5206\u9875", className: "dl-video-pagination", children: [l.jsx("button", { onClick: () => u((I) => I - 1), disabled: y === 0, children: "\u4E0A\u4E00\u7EC4" }), l.jsxs("span", { children: [y + 1, " / ", Math.ceil(L.length / 4)] }), l.jsx("button", { onClick: () => u((I) => I + 1), disabled: (y + 1) * 4 >= L.length, children: "\u4E0B\u4E00\u7EC4" })] })] });
  }
  function Zf(a) {
    var u;
    const y = [{ id: "cover", title: a.meta.titleZh, goal: a.meta.coreProblem, summary: a.meta.coreInsight, interaction: "\u8BA4\u8BC6\u95EE\u9898", next: "", notes: a.meta.coreInsight, special: "cover" }];
    for (const p of a.chapters) y.push(...p.scenes.map((x) => ({ ...x, chapter: p })));
    return (u = a.bilibili) != null && u.some((p) => p.bvid) && y.push({ id: "videos", title: "\u5EF6\u4F38\u9605\u8BFB\u4E0E\u89C6\u9891", goal: "\u7EE7\u7EED\u63A2\u7D22", summary: "\u5C06\u76F4\u89C9\u8FDE\u63A5\u5230\u66F4\u591A\u89E3\u91CA", interaction: "\u6253\u5F00\u89C6\u9891", next: "", notes: "", special: "videos" }), y.map((p) => {
      var x;
      return { ...p, thumbnail: p.thumbnail || ((x = a.thumbnails) == null ? void 0 : x[p.id]) };
    });
  }
  const Pt = Zf(xn);
  const ic = new URLSearchParams(location.search);
  const qf = Math.max(0, Pt.findIndex((a) => a.id === ic.get("slide")));
  function Jf() {
    const [a, y] = U.useState(qf), [u, p] = U.useState(() => innerWidth > 768), [x, w] = U.useState(() => innerWidth <= 768), [D, E] = U.useState(false), [R, L] = U.useState(false), [I, _] = U.useState(""), V = U.useRef(null), ae = U.useRef(null), b = Pt[a];
    U.useEffect(() => {
      document.title = `${xn.meta.titleZh} \xB7 \u4EA4\u4E92\u5F0F\u6559\u7A0B`;
    }, []);
    const z = U.useCallback((Y) => {
      const se = Math.max(0, Math.min(Pt.length - 1, Y));
      y(se);
      const oe = new URL(location.href);
      oe.searchParams.set("slide", Pt[se].id), history.replaceState(null, "", oe), innerWidth <= 768 && p(false);
    }, []);
    U.useEffect(() => {
      var Y;
      (Y = ae.current) == null || Y.scrollIntoView({ block: "nearest" });
    }, [a, u]), U.useEffect(() => {
      const Y = matchMedia("(max-width: 768px)"), se = () => {
        w(Y.matches), p(!Y.matches);
      };
      return Y.addEventListener("change", se), () => Y.removeEventListener("change", se);
    }, []), U.useEffect(() => {
      const Y = () => L(!!document.fullscreenElement), se = (oe) => {
        const B = oe.target;
        oe.key === "Escape" && (p(innerWidth > 768), E(false)), !(oe.defaultPrevented || oe.ctrlKey || oe.metaKey || oe.altKey || oe.shiftKey || B.closest("input, textarea, select, button, a, [contenteditable], [role=slider], [role=tab], [role=button], [data-slide-keys]")) && ["ArrowRight", "ArrowDown", "PageDown", "ArrowLeft", "ArrowUp", "PageUp"].includes(oe.key) && (oe.preventDefault(), z(a + (["ArrowRight", "ArrowDown", "PageDown"].includes(oe.key) ? 1 : -1)));
      };
      return document.addEventListener("fullscreenchange", Y), window.addEventListener("keydown", se), () => {
        document.removeEventListener("fullscreenchange", Y), window.removeEventListener("keydown", se);
      };
    }, [a, z]);
    const Q = b.special === "cover" ? l.jsx(Af, { meta: xn.meta, hero: xn.hero }) : b.special === "videos" ? l.jsx(Xf, { items: xn.bilibili || [] }) : l.jsx(Uf, { page: b });
    return ic.get("capture") === "1" ? l.jsx("div", { className: "ppt-capture", "data-slide-canvas": true, children: Q }) : l.jsxs("div", { className: "ppt-app", children: [l.jsxs("header", { className: "ppt-toolbar", children: [l.jsxs("div", { className: "ppt-toolbar-group", children: [l.jsx("button", { "aria-label": "\u5207\u6362\u76EE\u5F55", "aria-expanded": u, onClick: () => p(!u), children: "\u2630" }), l.jsx("span", { className: "ppt-brand", title: xn.meta.titleZh, children: xn.meta.titleZh })] }), l.jsxs("nav", { className: "ppt-pager", "aria-label": "\u5E7B\u706F\u7247\u7FFB\u9875", children: [l.jsx("button", { "aria-label": "\u4E0A\u4E00\u9875", disabled: a === 0, onClick: () => z(a - 1), children: "\u2039" }), l.jsxs("span", { "aria-live": "polite", children: [l.jsx("b", { children: a + 1 }), l.jsxs("span", { children: [" / ", Pt.length] })] }), l.jsx("button", { "aria-label": "\u4E0B\u4E00\u9875", disabled: a === Pt.length - 1, onClick: () => z(a + 1), children: "\u203A" })] }), l.jsxs("div", { className: "ppt-toolbar-group ppt-tools", children: [l.jsx("button", { "aria-pressed": D, onClick: () => E(!D), children: "\u8BB2\u7A3F" }), l.jsx("button", { className: "ppt-present", onClick: async () => {
      var Y;
      try {
        await ((Y = V.current) == null ? void 0 : Y.requestFullscreen()), _("");
      } catch {
        _("\u5F53\u524D\u6D4F\u89C8\u5668\u65E0\u6CD5\u8FDB\u5165\u5168\u5C4F\uFF0C\u53EF\u7EE7\u7EED\u5728\u7A97\u53E3\u4E2D\u6F14\u793A\u3002");
      }
    }, children: "\u653E\u6620" })] })] }), l.jsxs("div", { className: "ppt-workspace", children: [u && l.jsxs(l.Fragment, { children: [l.jsx("button", { className: "ppt-scrim", "aria-label": "\u5173\u95ED\u76EE\u5F55", onClick: () => p(false) }), l.jsxs("aside", { className: "ppt-directory", "aria-label": "\u9875\u9762\u76EE\u5F55", children: [l.jsxs("div", { className: "ppt-directory-label", children: ["\u5E7B\u706F\u7247 ", l.jsxs("span", { children: [Pt.length, " \u9875"] })] }), l.jsx("nav", { children: Pt.map((Y, se) => l.jsxs("button", { ref: se === a ? ae : void 0, className: `ppt-thumb ${se === a ? "is-active" : ""}`, "aria-current": se === a ? "page" : void 0, "aria-label": `\u7B2C ${se + 1} \u9875\uFF1A${Y.title}`, onClick: () => z(se), children: [l.jsxs("span", { className: "ppt-thumb-preview", children: [Y.thumbnail ? l.jsx("img", { src: Y.thumbnail, alt: "", loading: "lazy" }) : l.jsxs("span", { className: "ppt-thumb-summary", children: [l.jsx("strong", { children: Y.title }), l.jsx("span", { children: Y.summary }), l.jsx("i", {})] }), l.jsx("span", { className: "ppt-thumb-number", children: se + 1 })] }), l.jsx("span", { className: "ppt-thumb-title", children: Y.title })] }, Y.id)) })] })] }), l.jsxs("main", { className: `ppt-stage-area ${R ? "is-presenting" : ""}`, ref: V, children: [l.jsx(Wf, { fitFactor: R || x ? 1 : 0.88, children: l.jsx(Lr.Fragment, { children: Q }, b.id) }), R && l.jsxs("nav", { className: "ppt-fullscreen-nav", "aria-label": "\u653E\u6620\u7FFB\u9875", children: [l.jsx("button", { disabled: a === 0, "aria-label": "\u4E0A\u4E00\u9875", onClick: () => z(a - 1), children: "\u2039" }), l.jsxs("span", { children: [a + 1, " / ", Pt.length] }), l.jsx("button", { disabled: a === Pt.length - 1, "aria-label": "\u4E0B\u4E00\u9875", onClick: () => z(a + 1), children: "\u203A" }), l.jsx("button", { onClick: () => document.exitFullscreen(), children: "\u9000\u51FA" })] }), I && l.jsx("p", { className: "ppt-notice", role: "status", children: I })] }), D && l.jsxs("aside", { className: "ppt-notes", children: [l.jsxs("div", { className: "ppt-directory-label", children: ["\u6F14\u8BB2\u8005\u5907\u6CE8", l.jsx("button", { "aria-label": "\u5173\u95ED\u8BB2\u7A3F", onClick: () => E(false), children: "\xD7" })] }), l.jsx("h2", { children: b.title }), l.jsx("p", { children: b.notes || b.summary }), b.next && l.jsxs("p", { className: "ppt-notes-next", children: ["\u63A5\u4E0B\u6765\uFF1A", b.next] })] })] })] });
  }
  df.createRoot(document.getElementById("root")).render(l.jsx(Lr.StrictMode, { children: l.jsx(Jf, {}) }));
})();
