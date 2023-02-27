'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _routerStatic = require('@/router/router-static');

var _routerStatic2 = _interopRequireDefault(_routerStatic);

var _storage = require('@/utils/storage');

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var http = _axios2.default.create({
    timeout: 1000 * 86400,
    withCredentials: true,
    baseURL: '/nodejs22unh',
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    }
});
// 请求拦截
http.interceptors.request.use(function (config) {
    config.headers['Token'] = _storage2.default.get('Token'); // 请求头带上token
    return config;
}, function (error) {
    return Promise.reject(error);
});
// 响应拦截
http.interceptors.response.use(function (response) {
    if (response.data && response.data.code === 401) {
        // 401, token失效
        _routerStatic2.default.push({ name: 'login' });
    }
    return response;
}, function (error) {
    return Promise.reject(error);
});
exports.default = http;
//# sourceMappingURL=http.js.map