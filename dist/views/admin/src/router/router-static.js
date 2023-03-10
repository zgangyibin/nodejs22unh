'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _index = require('@/views/index');

var _index2 = _interopRequireDefault(_index);

var _home = require('@/views/home');

var _home2 = _interopRequireDefault(_home);

var _login = require('@/views/login');

var _login2 = _interopRequireDefault(_login);

var _ = require('@/views/404');

var _2 = _interopRequireDefault(_);

var _updatePassword = require('@/views/update-password');

var _updatePassword2 = _interopRequireDefault(_updatePassword);

var _pay = require('@/views/pay');

var _pay2 = _interopRequireDefault(_pay);

var _register = require('@/views/register');

var _register2 = _interopRequireDefault(_register);

var _center = require('@/views/center');

var _center2 = _interopRequireDefault(_center);

var _list = require('@/views/modules/news/list');

var _list2 = _interopRequireDefault(_list);

var _list3 = require('@/views/modules/aboutus/list');

var _list4 = _interopRequireDefault(_list3);

var _list5 = require('@/views/modules/qiuzhijianli/list');

var _list6 = _interopRequireDefault(_list5);

var _list7 = require('@/views/modules/xuesheng/list');

var _list8 = _interopRequireDefault(_list7);

var _list9 = require('@/views/modules/storeup/list');

var _list10 = _interopRequireDefault(_list9);

var _list11 = require('@/views/modules/yingpinxinxi/list');

var _list12 = _interopRequireDefault(_list11);

var _list13 = require('@/views/modules/xuanjianghuibaoming/list');

var _list14 = _interopRequireDefault(_list13);

var _list15 = require('@/views/modules/qiye/list');

var _list16 = _interopRequireDefault(_list15);

var _list17 = require('@/views/modules/zhaopinxinxi/list');

var _list18 = _interopRequireDefault(_list17);

var _list19 = require('@/views/modules/jiuyexinxi/list');

var _list20 = _interopRequireDefault(_list19);

var _list21 = require('@/views/modules/xuanjianghui/list');

var _list22 = _interopRequireDefault(_list21);

var _list23 = require('@/views/modules/config/list');

var _list24 = _interopRequireDefault(_list23);

var _list25 = require('@/views/modules/zhiweileibie/list');

var _list26 = _interopRequireDefault(_list25);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);
//1.????????????

//????????????


//2.????????????   ???????????????
var routes = [{
  path: '/index',
  name: '??????',
  component: _index2.default,
  children: [{
    // ???????????????????????????main??????????????????
    path: '/',
    name: '??????',
    component: _home2.default,
    meta: { icon: '', title: 'center' }
  }, {
    path: '/updatePassword',
    name: '????????????',
    component: _updatePassword2.default,
    meta: { icon: '', title: 'updatePassword' }
  }, {
    path: '/pay',
    name: '??????',
    component: _pay2.default,
    meta: { icon: '', title: 'pay' }
  }, {
    path: '/center',
    name: '????????????',
    component: _center2.default,
    meta: { icon: '', title: 'center' }
  }, {
    path: '/news',
    name: '????????????',
    component: _list2.default
  }, {
    path: '/aboutus',
    name: '????????????',
    component: _list4.default
  }, {
    path: '/qiuzhijianli',
    name: '????????????',
    component: _list6.default
  }, {
    path: '/xuesheng',
    name: '??????',
    component: _list8.default
  }, {
    path: '/storeup',
    name: '??????????????????',
    component: _list10.default
  }, {
    path: '/yingpinxinxi',
    name: '????????????',
    component: _list12.default
  }, {
    path: '/xuanjianghuibaoming',
    name: '???????????????',
    component: _list14.default
  }, {
    path: '/qiye',
    name: '??????',
    component: _list16.default
  }, {
    path: '/zhaopinxinxi',
    name: '????????????',
    component: _list18.default
  }, {
    path: '/jiuyexinxi',
    name: '????????????',
    component: _list20.default
  }, {
    path: '/xuanjianghui',
    name: '?????????',
    component: _list22.default
  }, {
    path: '/config',
    name: '???????????????',
    component: _list24.default
  }, {
    path: '/zhiweileibie',
    name: '????????????',
    component: _list26.default
  }]
}, {
  path: '/login',
  name: 'login',
  component: _login2.default,
  meta: { icon: '', title: 'login' }
}, {
  path: '/register',
  name: 'register',
  component: _register2.default,
  meta: { icon: '', title: 'register' }
}, {
  path: '/',
  name: '??????',
  redirect: '/index'
}, /*??????????????????*/
{
  path: '*',
  component: _2.default
}];
//3.?????????VueRouter  ???????????????
var router = new _vueRouter2.default({
  mode: 'hash',
  /*hash????????????history*/
  routes: routes // ????????????????????? routes: routes
});
var originalPush = _vueRouter2.default.prototype.push;
//????????????????????????push??????
_vueRouter2.default.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(function (err) {
    return err;
  });
};
exports.default = router;
//# sourceMappingURL=router-static.js.map