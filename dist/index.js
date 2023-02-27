'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _expressJwt = require('express-jwt');

var _expressJwt2 = _interopRequireDefault(_expressJwt);

var _db = require('./db');

var _db2 = _interopRequireDefault(_db);

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

var _config = require('./config.json');

var _config2 = _interopRequireDefault(_config);

var _util = require('./lib/util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//连接数据库后回调函数
//session是保存在服务器上的数据
//跨域
var app = (0, _express2.default)(); //路由
//是将用户信息保存到一个Json字符串中，然后进行编码后得到一个JWT token
//把post数据放入body里
//框架

app.server = _http2.default.createServer(app);

app.use((0, _cors2.default)({ //跨域
	exposedHeaders: _config2.default.corsHeaders //配置Access-Control-Expose-Headers CORS标头
}));

app.use(_bodyParser2.default.json({
	limit: _config2.default.bodyLimit //数据大小
}));

app.use((0, _expressSession2.default)({
	secret: _config2.default.sessionSecret, //服务端生成session的签名
	resave: false, //强制保存session
	saveUninitialized: true //强制将为初始化的session存储
}));

app.use('/' + _config2.default.projectName, _express2.default.static(_path2.default.join(__dirname, 'views'))); //静态配置文件

app.use((0, _expressJwt2.default)({
	secret: _config2.default.jwtSecret, //加密秘钥
	algorithms: ["HS256"], //加密算法
	credentialsRequired: true, //校验
	getToken: function getToken(req) {
		return _util2.default.isNothing(req.headers.token) ? null : req.headers.token;
	},

	requestProperty: 'xiezn'
}).unless({ //不需要校验的路径
	path: [{
		url: /.*\/(login|register|upload|download|resetPass|autoSort|list|sendemail|notify|update|security|sendsms)$/,
		methods: ['GET', 'POST']
	}, {
		url: /.*\/(config|option|follow|sh|remind|cal|group|value|news|info|detail|forum|updateBrowseDuration)\/.*/,
		methods: ['GET', 'POST']
	}]
}));

app.use(function (err, req, res, next) {
	if (err.name === 'UnauthorizedError') {
		res.status(200).json({
			code: 401,
			msg: '您的权限不够！'
		});
	}
});

(0, _db2.default)(function (db) {
	app.use((0, _store2.default)({ config: _config2.default, db: db })); //路由
	app.use('/' + _config2.default.projectName, (0, _api2.default)({ config: _config2.default, db: db }));
	app.server.listen(_config2.default.port, function () {
		console.log('Started on port ' + app.server.address().port);
	});
});

exports.default = app;
//# sourceMappingURL=index.js.map