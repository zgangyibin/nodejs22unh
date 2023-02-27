'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _Users = require('./Users');

var _Users2 = _interopRequireDefault(_Users);

var _File = require('./File');

var _File2 = _interopRequireDefault(_File);

var _Config = require('./Config');

var _Config2 = _interopRequireDefault(_Config);

var _Common = require('./Common');

var _Common2 = _interopRequireDefault(_Common);

var _Xuesheng = require('./Xuesheng');

var _Xuesheng2 = _interopRequireDefault(_Xuesheng);

var _Qiye = require('./Qiye');

var _Qiye2 = _interopRequireDefault(_Qiye);

var _Zhiweileibie = require('./Zhiweileibie');

var _Zhiweileibie2 = _interopRequireDefault(_Zhiweileibie);

var _Zhaopinxinxi = require('./Zhaopinxinxi');

var _Zhaopinxinxi2 = _interopRequireDefault(_Zhaopinxinxi);

var _Yingpinxinxi = require('./Yingpinxinxi');

var _Yingpinxinxi2 = _interopRequireDefault(_Yingpinxinxi);

var _Xuanjianghui = require('./Xuanjianghui');

var _Xuanjianghui2 = _interopRequireDefault(_Xuanjianghui);

var _Xuanjianghuibaoming = require('./Xuanjianghuibaoming');

var _Xuanjianghuibaoming2 = _interopRequireDefault(_Xuanjianghuibaoming);

var _Qiuzhijianli = require('./Qiuzhijianli');

var _Qiuzhijianli2 = _interopRequireDefault(_Qiuzhijianli);

var _Jiuyexinxi = require('./Jiuyexinxi');

var _Jiuyexinxi2 = _interopRequireDefault(_Jiuyexinxi);

var _Storeup = require('./Storeup');

var _Storeup2 = _interopRequireDefault(_Storeup);

var _News = require('./News');

var _News2 = _interopRequireDefault(_News);

var _Aboutus = require('./Aboutus');

var _Aboutus2 = _interopRequireDefault(_Aboutus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
	var config = _ref.config,
	    db = _ref.db;

	var api = (0, _express.Router)();

	api.use('/users', (0, _Users2.default)({ config: config, db: db }));
	api.use('/file', (0, _File2.default)({ config: config, db: db }));
	api.use('/config', (0, _Config2.default)({ config: config, db: db }));
	api.use('/', (0, _Common2.default)({ config: config, db: db }));
	api.use('/xuesheng', (0, _Xuesheng2.default)({ config: config, db: db }));
	api.use('/qiye', (0, _Qiye2.default)({ config: config, db: db }));
	api.use('/zhiweileibie', (0, _Zhiweileibie2.default)({ config: config, db: db }));
	api.use('/zhaopinxinxi', (0, _Zhaopinxinxi2.default)({ config: config, db: db }));
	api.use('/yingpinxinxi', (0, _Yingpinxinxi2.default)({ config: config, db: db }));
	api.use('/xuanjianghui', (0, _Xuanjianghui2.default)({ config: config, db: db }));
	api.use('/xuanjianghuibaoming', (0, _Xuanjianghuibaoming2.default)({ config: config, db: db }));
	api.use('/qiuzhijianli', (0, _Qiuzhijianli2.default)({ config: config, db: db }));
	api.use('/jiuyexinxi', (0, _Jiuyexinxi2.default)({ config: config, db: db }));
	api.use('/storeup', (0, _Storeup2.default)({ config: config, db: db }));
	api.use('/news', (0, _News2.default)({ config: config, db: db }));
	api.use('/aboutus', (0, _Aboutus2.default)({ config: config, db: db }));

	return api;
};
//# sourceMappingURL=index.js.map