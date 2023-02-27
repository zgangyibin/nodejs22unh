"use strict";

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

!function (e, t) {
   "object" == (typeof exports === "undefined" ? "undefined" : (0, _typeof3.default)(exports)) && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).VueJsonp = {});
}(undefined, function (e) {
   "use strict";
   function t(e, o) {
      e = e.replace(/=/g, "");var n = [];switch (o.constructor) {case String:case Number:case Boolean:
            n.push(encodeURIComponent(e) + "=" + encodeURIComponent(o));break;case Array:
            o.forEach(function (o) {
               n = n.concat(t(e + "[]=", o));
            });break;case Object:
            Object.keys(o).forEach(function (r) {
               var c = o[r];n = n.concat(t(e + "[" + r + "]", c));
            });}return n;
   }function o(e) {
      var t = [];return e.forEach(function (e) {
         "string" == typeof e ? t.push(e) : t = t.concat(o(e));
      }), t;
   }
   /**
      * Vue Jsonp.
      * # Carry Your World #
      *
      * @author: LancerComet
      * @license: MIT
      */var n = { install: function install(e) {
         e.prototype.$jsonp = r;
      } };function r(e, n, r) {
      if (void 0 === n && (n = {}), "string" != typeof e) throw new Error('[Vue-jsonp] Type of param "url" is not string.');if ("object" != (typeof n === "undefined" ? "undefined" : (0, _typeof3.default)(n)) || !n) throw new Error("[Vue-jsonp] Invalid params, should be an object.");return r = "number" == typeof r ? r : 5e3, new Promise(function (c, a) {
         var i = "string" == typeof n.callbackQuery ? n.callbackQuery : "callback",
             s = "string" == typeof n.callbackName ? n.callbackName : "jsonp_" + (Math.floor(1e5 * Math.random()) * Date.now()).toString(16);n[i] = s, delete n.callbackQuery, delete n.callbackName;var u = [];Object.keys(n).forEach(function (e) {
            u = u.concat(t(e, n[e]));
         });var f = o(u).join("&"),
             l = function l() {
            p(), clearTimeout(b), a({ status: 400, statusText: "Bad Request" });
         },
             p = function p() {
            m.removeEventListener("error", l);
         },
             d = function d() {
            document.body.removeChild(m), delete window[s];
         },
             b = null;r > -1 && (b = setTimeout(function () {
            p(), d(), a({ statusText: "Request Timeout", status: 408 });
         }, r)), window[s] = function (e) {
            clearTimeout(b), p(), d(), c(e);
         };var m = document.createElement("script");m.addEventListener("error", l), m.src = e + (/\?/.test(e) ? "&" : "?") + f, document.body.appendChild(m);
      });
   }e.VueJsonp = n, e.jsonp = r, Object.defineProperty(e, "__esModule", { value: !0 });
});
//# sourceMappingURL=index.js.map