'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _App = require('@/App.vue');

var _App2 = _interopRequireDefault(_App);

var _elementUi = require('element-ui');

var _elementUi2 = _interopRequireDefault(_elementUi);

require('@/assets/css/element-variables.scss');

require('@/assets/css/style.scss');

var _routerStatic = require('@/router/router-static.js');

var _routerStatic2 = _interopRequireDefault(_routerStatic);

var _BreadCrumbs = require('@/components/common/BreadCrumbs');

var _BreadCrumbs2 = _interopRequireDefault(_BreadCrumbs);

var _echarts = require('echarts');

var _echarts2 = _interopRequireDefault(_echarts);

require('echarts/theme/macarons.js');

var _http = require('@/utils/http.js');

var _http2 = _interopRequireDefault(_http);

var _base = require('@/utils/base');

var _base2 = _interopRequireDefault(_base);

var _utils = require('@/utils/utils');

var _storage = require('@/utils/storage');

var _storage2 = _interopRequireDefault(_storage);

var _FileUpload = require('@/components/common/FileUpload');

var _FileUpload2 = _interopRequireDefault(_FileUpload);

var _ExcelFileUpload = require('@/components/common/ExcelFileUpload');

var _ExcelFileUpload2 = _interopRequireDefault(_ExcelFileUpload);

var _Editor = require('@/components/common/Editor');

var _Editor2 = _interopRequireDefault(_Editor);

var _api = require('@/utils/api');

var _api2 = _interopRequireDefault(_api);

var _validate = require('@/utils/validate.js');

var validate = _interopRequireWildcard(_validate);

require('@/icons');

var _vueJsonExcel = require('vue-json-excel');

var _vueJsonExcel2 = _interopRequireDefault(_vueJsonExcel);

var _jsMd = require('js-md5');

var _jsMd2 = _interopRequireDefault(_jsMd);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 后台地图
// Vue.use(VueAMap)
// VueAMap.initAMapApiLoader({
//   key: '001d42eaa139dc53fd655e7c23c0187e',
//   plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor', 'AMap.Geocoder'],
//   v: '1.4.4'
// })

//excel导出

// 数据校验工具类

// 富文本编辑组件

// 上传组件

// 工具类

// ajax

// 引入echart

// 加载路由
_vue2.default.prototype.$validate = validate;
//打印
// import printJS from 'print-js'
//MD5

// 后台地图
// import VueAMap from 'vue-amap'

// api 接口

// storage 封装

// 基础配置

// 引入echart主题

// 面包屑导航，注册为全局组件

// element ui 完全引入

_vue2.default.prototype.$http = _http2.default; // ajax请求方法
_vue2.default.prototype.$echarts = _echarts2.default;
_vue2.default.prototype.$base = _base2.default.get();
_vue2.default.prototype.$project = _base2.default.getProjectName();
_vue2.default.prototype.$storage = _storage2.default;
_vue2.default.prototype.$api = _api2.default;
// 判断权限方法
_vue2.default.prototype.isAuth = _utils.isAuth;
_vue2.default.prototype.getCurDateTime = _utils.getCurDateTime;
_vue2.default.prototype.getCurDate = _utils.getCurDate;
_vue2.default.use(_elementUi2.default, { size: 'medium', zIndex: 3000 });
_vue2.default.config.productionTip = false;
// 组件全局组件
_vue2.default.component('bread-crumbs', _BreadCrumbs2.default);
_vue2.default.component('file-upload', _FileUpload2.default);
_vue2.default.component('excel-file-upload', _ExcelFileUpload2.default);
_vue2.default.component('editor', _Editor2.default);
//excel导出
_vue2.default.component('downloadExcel', _vueJsonExcel2.default);
//MD5
_vue2.default.prototype.$md5 = _jsMd2.default;
new _vue2.default({
  render: function render(h) {
    return h(_App2.default);
  },
  router: _routerStatic2.default
}).$mount('#app');
//# sourceMappingURL=main.js.map