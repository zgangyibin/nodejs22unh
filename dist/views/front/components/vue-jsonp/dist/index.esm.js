"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jsonp = exports.VueJsonp = undefined;

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function e(t, n) {
  t = t.replace(/=/g, "");var o = [];switch (n.constructor) {case String:case Number:case Boolean:
      o.push(encodeURIComponent(t) + "=" + encodeURIComponent(n));break;case Array:
      n.forEach(function (n) {
        o = o.concat(e(t + "[]=", n));
      });break;case Object:
      Object.keys(n).forEach(function (r) {
        var a = n[r];o = o.concat(e(t + "[" + r + "]", a));
      });}return o;
}function t(e) {
  var n = [];return e.forEach(function (e) {
    "string" == typeof e ? n.push(e) : n = n.concat(t(e));
  }), n;
}
/**
 * Vue Jsonp.
 * # Carry Your World #
 *
 * @author: LancerComet
 * @license: MIT
 */var n = { install: function install(e) {
    e.prototype.$jsonp = o;
  } };function o(n, o, r) {
  if (void 0 === o && (o = {}), "string" != typeof n) throw new Error('[Vue-jsonp] Type of param "url" is not string.');if ("object" != (typeof o === "undefined" ? "undefined" : (0, _typeof3.default)(o)) || !o) throw new Error("[Vue-jsonp] Invalid params, should be an object.");return r = "number" == typeof r ? r : 5e3, new Promise(function (a, c) {
    var u = "string" == typeof o.callbackQuery ? o.callbackQuery : "callback",
        i = "string" == typeof o.callbackName ? o.callbackName : "jsonp_" + (Math.floor(1e5 * Math.random()) * Date.now()).toString(16);o[u] = i, delete o.callbackQuery, delete o.callbackName;var s = [];Object.keys(o).forEach(function (t) {
      s = s.concat(e(t, o[t]));
    });var l = t(s).join("&"),
        f = function f() {
      p(), clearTimeout(m), c({ status: 400, statusText: "Bad Request" });
    },
        p = function p() {
      b.removeEventListener("error", f);
    },
        d = function d() {
      document.body.removeChild(b), delete window[i];
    },
        m = null;r > -1 && (m = setTimeout(function () {
      p(), d(), c({ statusText: "Request Timeout", status: 408 });
    }, r)), window[i] = function (e) {
      clearTimeout(m), p(), d(), a(e);
    };var b = document.createElement("script");b.addEventListener("error", f), b.src = n + (/\?/.test(n) ? "&" : "?") + l, document.body.appendChild(b);
  });
}exports.VueJsonp = n;
exports.jsonp = o;
//# sourceMappingURL=index.esm.js.map