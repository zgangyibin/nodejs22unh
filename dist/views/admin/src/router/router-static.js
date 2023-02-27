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
//1.创建组件

//配置路由


//2.配置路由   注意：名字
var routes = [{
  path: '/index',
  name: '首页',
  component: _index2.default,
  children: [{
    // 这里不设置值，是把main作为默认页面
    path: '/',
    name: '首页',
    component: _home2.default,
    meta: { icon: '', title: 'center' }
  }, {
    path: '/updatePassword',
    name: '修改密码',
    component: _updatePassword2.default,
    meta: { icon: '', title: 'updatePassword' }
  }, {
    path: '/pay',
    name: '支付',
    component: _pay2.default,
    meta: { icon: '', title: 'pay' }
  }, {
    path: '/center',
    name: '个人信息',
    component: _center2.default,
    meta: { icon: '', title: 'center' }
  }, {
    path: '/news',
    name: '新闻资讯',
    component: _list2.default
  }, {
    path: '/aboutus',
    name: '关于我们',
    component: _list4.default
  }, {
    path: '/qiuzhijianli',
    name: '求职简历',
    component: _list6.default
  }, {
    path: '/xuesheng',
    name: '学生',
    component: _list8.default
  }, {
    path: '/storeup',
    name: '我的收藏管理',
    component: _list10.default
  }, {
    path: '/yingpinxinxi',
    name: '应聘信息',
    component: _list12.default
  }, {
    path: '/xuanjianghuibaoming',
    name: '宣讲会报名',
    component: _list14.default
  }, {
    path: '/qiye',
    name: '企业',
    component: _list16.default
  }, {
    path: '/zhaopinxinxi',
    name: '招聘信息',
    component: _list18.default
  }, {
    path: '/jiuyexinxi',
    name: '就业信息',
    component: _list20.default
  }, {
    path: '/xuanjianghui',
    name: '宣讲会',
    component: _list22.default
  }, {
    path: '/config',
    name: '轮播图管理',
    component: _list24.default
  }, {
    path: '/zhiweileibie',
    name: '职位类别',
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
  name: '首页',
  redirect: '/index'
}, /*默认跳转路由*/
{
  path: '*',
  component: _2.default
}];
//3.实例化VueRouter  注意：名字
var router = new _vueRouter2.default({
  mode: 'hash',
  /*hash模式改为history*/
  routes: routes // （缩写）相当于 routes: routes
});
var originalPush = _vueRouter2.default.prototype.push;
//修改原型对象中的push方法
_vueRouter2.default.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(function (err) {
    return err;
  });
};
exports.default = router;
//# sourceMappingURL=router-static.js.map