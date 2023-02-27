'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var storage = {
    set: function set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    get: function get(key) {
        return localStorage.getItem(key) ? localStorage.getItem(key).replace('"', '').replace('"', '') : "";
    },
    getObj: function getObj(key) {
        return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : null;
    },
    remove: function remove(key) {
        localStorage.removeItem(key);
    },
    clear: function clear() {
        localStorage.clear();
    }
};
exports.default = storage;
//# sourceMappingURL=storage.js.map