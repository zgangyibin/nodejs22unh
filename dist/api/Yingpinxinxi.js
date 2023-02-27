'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _express = require('express');

var _sequelize = require('sequelize');

var _sequelize2 = require('../models/sequelize');

var _sequelize3 = _interopRequireDefault(_sequelize2);

var _toRes = require('../lib/toRes');

var _toRes2 = _interopRequireDefault(_toRes);

var _YingpinxinxiModel = require('../models/YingpinxinxiModel');

var _YingpinxinxiModel2 = _interopRequireDefault(_YingpinxinxiModel);

var _util = require('../lib/util');

var _util2 = _interopRequireDefault(_util);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
	var config = _ref.config,
	    db = _ref.db;

	var api = (0, _express.Router)();

	// 分页接口（后端）
	api.get('/page', function () {
		var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
			var page, limit, sort, order, where, gangweimingcheng, tupian, zhiweileibie, gongzidaiyu, shangbanshijian, nianlingyaoqiu, xueliyaoqiu, qiyezhanghao, qiyemingcheng, gerenjianli, qiuzhishijian, beizhu, xuehao, xueshengxingming, shoujihaoma, crossuserid, crossrefid, sfsh, shhf, userid, tableName, result;
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.prev = 0;
							page = parseInt(req.query.page) || 1;
							limit = parseInt(req.query.limit) || 10;
							sort = req.query.sort || 'id';
							order = req.query.order || 'asc';
							where = {};
							gangweimingcheng = req.query.gangweimingcheng;

							if (gangweimingcheng) {
								//岗位名称

								if (gangweimingcheng.indexOf('%') != -1) {
									where.gangweimingcheng = (0, _defineProperty3.default)({}, _sequelize.Op.like, gangweimingcheng);
								} else {
									where.gangweimingcheng = (0, _defineProperty3.default)({}, _sequelize.Op.eq, gangweimingcheng);
								}
							}
							tupian = req.query.tupian;

							if (tupian) {
								//图片

								if (tupian.indexOf('%') != -1) {
									where.tupian = (0, _defineProperty3.default)({}, _sequelize.Op.like, tupian);
								} else {
									where.tupian = (0, _defineProperty3.default)({}, _sequelize.Op.eq, tupian);
								}
							}
							zhiweileibie = req.query.zhiweileibie;

							if (zhiweileibie) {
								//职位类别

								if (zhiweileibie.indexOf('%') != -1) {
									where.zhiweileibie = (0, _defineProperty3.default)({}, _sequelize.Op.like, zhiweileibie);
								} else {
									where.zhiweileibie = (0, _defineProperty3.default)({}, _sequelize.Op.eq, zhiweileibie);
								}
							}
							gongzidaiyu = req.query.gongzidaiyu;

							if (gongzidaiyu) {
								//工资待遇

								if (gongzidaiyu.indexOf('%') != -1) {
									where.gongzidaiyu = (0, _defineProperty3.default)({}, _sequelize.Op.like, gongzidaiyu);
								} else {
									where.gongzidaiyu = (0, _defineProperty3.default)({}, _sequelize.Op.eq, gongzidaiyu);
								}
							}
							shangbanshijian = req.query.shangbanshijian;

							if (shangbanshijian) {
								//上班时间

								if (shangbanshijian.indexOf('%') != -1) {
									where.shangbanshijian = (0, _defineProperty3.default)({}, _sequelize.Op.like, shangbanshijian);
								} else {
									where.shangbanshijian = (0, _defineProperty3.default)({}, _sequelize.Op.eq, shangbanshijian);
								}
							}
							nianlingyaoqiu = req.query.nianlingyaoqiu;

							if (nianlingyaoqiu) {
								//年龄要求

								if (nianlingyaoqiu.indexOf('%') != -1) {
									where.nianlingyaoqiu = (0, _defineProperty3.default)({}, _sequelize.Op.like, nianlingyaoqiu);
								} else {
									where.nianlingyaoqiu = (0, _defineProperty3.default)({}, _sequelize.Op.eq, nianlingyaoqiu);
								}
							}
							xueliyaoqiu = req.query.xueliyaoqiu;

							if (xueliyaoqiu) {
								//学历要求

								if (xueliyaoqiu.indexOf('%') != -1) {
									where.xueliyaoqiu = (0, _defineProperty3.default)({}, _sequelize.Op.like, xueliyaoqiu);
								} else {
									where.xueliyaoqiu = (0, _defineProperty3.default)({}, _sequelize.Op.eq, xueliyaoqiu);
								}
							}
							qiyezhanghao = req.query.qiyezhanghao;

							if (qiyezhanghao) {
								//企业账号

								if (qiyezhanghao.indexOf('%') != -1) {
									where.qiyezhanghao = (0, _defineProperty3.default)({}, _sequelize.Op.like, qiyezhanghao);
								} else {
									where.qiyezhanghao = (0, _defineProperty3.default)({}, _sequelize.Op.eq, qiyezhanghao);
								}
							}
							qiyemingcheng = req.query.qiyemingcheng;

							if (qiyemingcheng) {
								//企业名称

								if (qiyemingcheng.indexOf('%') != -1) {
									where.qiyemingcheng = (0, _defineProperty3.default)({}, _sequelize.Op.like, qiyemingcheng);
								} else {
									where.qiyemingcheng = (0, _defineProperty3.default)({}, _sequelize.Op.eq, qiyemingcheng);
								}
							}
							gerenjianli = req.query.gerenjianli;

							if (gerenjianli) {
								//个人简历

								if (gerenjianli.indexOf('%') != -1) {
									where.gerenjianli = (0, _defineProperty3.default)({}, _sequelize.Op.like, gerenjianli);
								} else {
									where.gerenjianli = (0, _defineProperty3.default)({}, _sequelize.Op.eq, gerenjianli);
								}
							}
							qiuzhishijian = req.query.qiuzhishijian;

							if (qiuzhishijian) {
								//求职时间

								if (qiuzhishijian.indexOf('%') != -1) {
									where.qiuzhishijian = (0, _defineProperty3.default)({}, _sequelize.Op.like, qiuzhishijian);
								} else {
									where.qiuzhishijian = (0, _defineProperty3.default)({}, _sequelize.Op.eq, qiuzhishijian);
								}
							}
							beizhu = req.query.beizhu;

							if (beizhu) {
								//备注

								if (beizhu.indexOf('%') != -1) {
									where.beizhu = (0, _defineProperty3.default)({}, _sequelize.Op.like, beizhu);
								} else {
									where.beizhu = (0, _defineProperty3.default)({}, _sequelize.Op.eq, beizhu);
								}
							}
							xuehao = req.query.xuehao;

							if (xuehao) {
								//学号

								if (xuehao.indexOf('%') != -1) {
									where.xuehao = (0, _defineProperty3.default)({}, _sequelize.Op.like, xuehao);
								} else {
									where.xuehao = (0, _defineProperty3.default)({}, _sequelize.Op.eq, xuehao);
								}
							}
							xueshengxingming = req.query.xueshengxingming;

							if (xueshengxingming) {
								//学生姓名

								if (xueshengxingming.indexOf('%') != -1) {
									where.xueshengxingming = (0, _defineProperty3.default)({}, _sequelize.Op.like, xueshengxingming);
								} else {
									where.xueshengxingming = (0, _defineProperty3.default)({}, _sequelize.Op.eq, xueshengxingming);
								}
							}
							shoujihaoma = req.query.shoujihaoma;

							if (shoujihaoma) {
								//学生手机号码

								if (shoujihaoma.indexOf('%') != -1) {
									where.shoujihaoma = (0, _defineProperty3.default)({}, _sequelize.Op.like, shoujihaoma);
								} else {
									where.shoujihaoma = (0, _defineProperty3.default)({}, _sequelize.Op.eq, shoujihaoma);
								}
							}
							crossuserid = req.query.crossuserid;

							if (crossuserid) {
								//跨表用户id

								if (crossuserid.indexOf('%') != -1) {
									where.crossuserid = (0, _defineProperty3.default)({}, _sequelize.Op.like, crossuserid);
								} else {
									where.crossuserid = (0, _defineProperty3.default)({}, _sequelize.Op.eq, crossuserid);
								}
							}
							crossrefid = req.query.crossrefid;

							if (crossrefid) {
								//跨表岗位id

								if (crossrefid.indexOf('%') != -1) {
									where.crossrefid = (0, _defineProperty3.default)({}, _sequelize.Op.like, crossrefid);
								} else {
									where.crossrefid = (0, _defineProperty3.default)({}, _sequelize.Op.eq, crossrefid);
								}
							}
							sfsh = req.query.sfsh;

							if (sfsh) {
								//审核

								if (sfsh.indexOf('%') != -1) {
									where.sfsh = (0, _defineProperty3.default)({}, _sequelize.Op.like, sfsh);
								} else {
									where.sfsh = (0, _defineProperty3.default)({}, _sequelize.Op.eq, sfsh);
								}
							}
							shhf = req.query.shhf;

							if (shhf) {
								//审核回复

								if (shhf.indexOf('%') != -1) {
									where.shhf = (0, _defineProperty3.default)({}, _sequelize.Op.like, shhf);
								} else {
									where.shhf = (0, _defineProperty3.default)({}, _sequelize.Op.eq, shhf);
								}
							}
							userid = req.query.userid;

							if (userid) {
								//用户id

								if (userid.indexOf('%') != -1) {
									where.userid = (0, _defineProperty3.default)({}, _sequelize.Op.like, userid);
								} else {
									where.userid = (0, _defineProperty3.default)({}, _sequelize.Op.eq, userid);
								}
							}
							tableName = req.session.userinfo === undefined ? _jsonwebtoken2.default.decode(req.headers.token).tableName : req.session.userinfo.tableName;

							if (tableName == 'qiye') {
								where.qiyezhanghao = (0, _defineProperty3.default)({}, _sequelize.Op.eq, req.session.userinfo === undefined ? _jsonwebtoken2.default.decode(req.headers.token).username : req.session.userinfo.qiyezhanghao);
								if (where['userid'] != undefined) {
									delete where.userid;
								}
							}
							if (tableName == 'xuesheng') {
								where.xuehao = (0, _defineProperty3.default)({}, _sequelize.Op.eq, req.session.userinfo === undefined ? _jsonwebtoken2.default.decode(req.headers.token).username : req.session.userinfo.xuehao);
								if (where['userid'] != undefined) {
									delete where.userid;
								}
							}

							_context.next = 51;
							return _YingpinxinxiModel2.default.findAndCountAll({
								order: [[sort, order]],
								where: where,
								offset: (page - 1) * limit,
								limit: limit
							});

						case 51:
							result = _context.sent;


							result.currPage = page;
							result.pageSize = limit;

							_toRes2.default.page(res, 0, result);
							_context.next = 60;
							break;

						case 57:
							_context.prev = 57;
							_context.t0 = _context['catch'](0);


							_toRes2.default.session(res, 500, '服务器错误！', '', 500);

						case 60:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, undefined, [[0, 57]]);
		}));

		return function (_x, _x2) {
			return _ref2.apply(this, arguments);
		};
	}());

	// 分页接口（前端）
	api.get('/list', function () {
		var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
			var page, limit, sort, order, where, crossuserid, crossrefid, sfsh, gangweimingcheng, zhiweileibie, qiyemingcheng, xueshengxingming, tableName, result;
			return _regenerator2.default.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							_context2.prev = 0;
							page = parseInt(req.query.page) || 1;
							limit = parseInt(req.query.limit) || 10;
							sort = req.query.sort || 'id';
							order = req.query.order || 'asc';
							where = {};
							crossuserid = req.query.crossuserid;

							if (crossuserid) {
								where.crossuserid = (0, _defineProperty3.default)({}, _sequelize.Op.eq, crossuserid);
							}
							crossrefid = req.query.crossrefid;

							if (crossrefid) {
								where.crossrefid = (0, _defineProperty3.default)({}, _sequelize.Op.eq, crossrefid);
							}
							sfsh = req.query.sfsh;

							if (sfsh) {
								where.sfsh = (0, _defineProperty3.default)({}, _sequelize.Op.eq, sfsh);
							}
							gangweimingcheng = req.query.gangweimingcheng;

							if (gangweimingcheng) {

								if (gangweimingcheng.indexOf('%') != -1) {
									where.gangweimingcheng = (0, _defineProperty3.default)({}, _sequelize.Op.like, gangweimingcheng);
								} else {
									where.gangweimingcheng = (0, _defineProperty3.default)({}, _sequelize.Op.eq, gangweimingcheng);
								}
							}
							zhiweileibie = req.query.zhiweileibie;

							if (zhiweileibie) {

								if (zhiweileibie.indexOf('%') != -1) {
									where.zhiweileibie = (0, _defineProperty3.default)({}, _sequelize.Op.like, zhiweileibie);
								} else {
									where.zhiweileibie = (0, _defineProperty3.default)({}, _sequelize.Op.eq, zhiweileibie);
								}
							}
							qiyemingcheng = req.query.qiyemingcheng;

							if (qiyemingcheng) {

								if (qiyemingcheng.indexOf('%') != -1) {
									where.qiyemingcheng = (0, _defineProperty3.default)({}, _sequelize.Op.like, qiyemingcheng);
								} else {
									where.qiyemingcheng = (0, _defineProperty3.default)({}, _sequelize.Op.eq, qiyemingcheng);
								}
							}
							xueshengxingming = req.query.xueshengxingming;

							if (xueshengxingming) {

								if (xueshengxingming.indexOf('%') != -1) {
									where.xueshengxingming = (0, _defineProperty3.default)({}, _sequelize.Op.like, xueshengxingming);
								} else {
									where.xueshengxingming = (0, _defineProperty3.default)({}, _sequelize.Op.eq, xueshengxingming);
								}
							}
							tableName = req.session.userinfo === undefined ? _jsonwebtoken2.default.decode(req.headers.token).tableName : req.session.userinfo.tableName;

							if (tableName == 'qiye') {
								where.qiyezhanghao = (0, _defineProperty3.default)({}, _sequelize.Op.eq, req.session.userinfo === undefined ? _jsonwebtoken2.default.decode(req.headers.token).username : req.session.userinfo.qiyezhanghao);
							}
							if (tableName == 'xuesheng') {
								where.xuehao = (0, _defineProperty3.default)({}, _sequelize.Op.eq, req.session.userinfo === undefined ? _jsonwebtoken2.default.decode(req.headers.token).username : req.session.userinfo.xuehao);
							}

							_context2.next = 25;
							return _YingpinxinxiModel2.default.findAndCountAll({
								order: [[sort, order]],
								where: where,
								offset: (page - 1) * limit,
								limit: limit
							});

						case 25:
							result = _context2.sent;


							result.currPage = page;
							result.pageSize = limit;

							_toRes2.default.page(res, 0, result);
							_context2.next = 34;
							break;

						case 31:
							_context2.prev = 31;
							_context2.t0 = _context2['catch'](0);

							_toRes2.default.session(res, 401, '您的权限不够！', '', 200);

						case 34:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, undefined, [[0, 31]]);
		}));

		return function (_x3, _x4) {
			return _ref3.apply(this, arguments);
		};
	}());

	// 保存接口（后端）
	api.post('/save', function () {
		var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
			var userinfo;
			return _regenerator2.default.wrap(function _callee3$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							_context3.prev = 0;


							Object.keys(req.body).forEach(function (item) {
								if (req.body[item] == '') delete req.body[item];
							});

							if (!req.body.userid) {
								req.body.userid = req.session.userinfo === undefined ? _jsonwebtoken2.default.decode(req.headers.token).id : req.session.userinfo.id;
							}

							_context3.next = 5;
							return _YingpinxinxiModel2.default.create(req.body);

						case 5:
							userinfo = _context3.sent;


							if (userinfo === null) {
								_toRes2.default.session(res, -1, '添加失败！');
							} else {
								_toRes2.default.session(res, 0, '添加成功！');
							}
							_context3.next = 12;
							break;

						case 9:
							_context3.prev = 9;
							_context3.t0 = _context3['catch'](0);

							_toRes2.default.session(res, 500, '服务器错误！', '', 500);

						case 12:
						case 'end':
							return _context3.stop();
					}
				}
			}, _callee3, undefined, [[0, 9]]);
		}));

		return function (_x5, _x6) {
			return _ref4.apply(this, arguments);
		};
	}());

	// 保存接口（前端）
	api.post('/add', function () {
		var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
			var userinfo;
			return _regenerator2.default.wrap(function _callee4$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							_context4.prev = 0;


							Object.keys(req.body).forEach(function (item) {
								if (req.body[item] == '') delete req.body[item];
							});

							if (_jsonwebtoken2.default.decode(req.headers.token) == null) {
								_toRes2.default.session(res, 401, '请登录后再操作', '', 401);
							}

							req.body.userid = req.session.userinfo === undefined ? _jsonwebtoken2.default.decode(req.headers.token).id : req.session.userinfo.id;

							_context4.next = 6;
							return _YingpinxinxiModel2.default.create(req.body);

						case 6:
							userinfo = _context4.sent;


							if (userinfo === null) {
								_toRes2.default.session(res, -1, '添加失败！');
							} else {
								_toRes2.default.session(res, 0, '添加成功！');
							}
							_context4.next = 13;
							break;

						case 10:
							_context4.prev = 10;
							_context4.t0 = _context4['catch'](0);

							_toRes2.default.session(res, 500, '服务器错误！', '', 500);

						case 13:
						case 'end':
							return _context4.stop();
					}
				}
			}, _callee4, undefined, [[0, 10]]);
		}));

		return function (_x7, _x8) {
			return _ref5.apply(this, arguments);
		};
	}());

	// 更新接口
	api.post('/update', function () {
		var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res) {
			return _regenerator2.default.wrap(function _callee5$(_context5) {
				while (1) {
					switch (_context5.prev = _context5.next) {
						case 0:
							_context5.prev = 0;
							_context5.next = 3;
							return _YingpinxinxiModel2.default.update(req.body, {
								where: {
									id: req.body.id || 0
								}
							});

						case 3:

							_toRes2.default.session(res, 0, '编辑成功！');
							_context5.next = 9;
							break;

						case 6:
							_context5.prev = 6;
							_context5.t0 = _context5['catch'](0);

							_toRes2.default.session(res, 500, '服务器错误！', '', 500);

						case 9:
						case 'end':
							return _context5.stop();
					}
				}
			}, _callee5, undefined, [[0, 6]]);
		}));

		return function (_x9, _x10) {
			return _ref6.apply(this, arguments);
		};
	}());

	// 删除接口
	api.post('/delete', function () {
		var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(req, res) {
			return _regenerator2.default.wrap(function _callee6$(_context6) {
				while (1) {
					switch (_context6.prev = _context6.next) {
						case 0:
							_context6.prev = 0;
							_context6.next = 3;
							return _YingpinxinxiModel2.default.destroy({
								where: {
									id: (0, _defineProperty3.default)({}, _sequelize.Op.in, req.body)
								}
							});

						case 3:
							_toRes2.default.session(res, 0, '删除成功！');
							_context6.next = 9;
							break;

						case 6:
							_context6.prev = 6;
							_context6.t0 = _context6['catch'](0);

							_toRes2.default.session(res, 500, '服务器错误！', '', 500);

						case 9:
						case 'end':
							return _context6.stop();
					}
				}
			}, _callee6, undefined, [[0, 6]]);
		}));

		return function (_x11, _x12) {
			return _ref7.apply(this, arguments);
		};
	}());

	// 详情接口（后端）
	api.all('/info/:id', function () {
		var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(req, res) {
			return _regenerator2.default.wrap(function _callee7$(_context7) {
				while (1) {
					switch (_context7.prev = _context7.next) {
						case 0:
							_context7.prev = 0;
							_context7.t0 = _toRes2.default;
							_context7.t1 = res;
							_context7.next = 5;
							return _YingpinxinxiModel2.default.findOne({ where: { id: req.params.id } });

						case 5:
							_context7.t2 = _context7.sent;

							_context7.t0.record.call(_context7.t0, _context7.t1, 0, _context7.t2);

							_context7.next = 12;
							break;

						case 9:
							_context7.prev = 9;
							_context7.t3 = _context7['catch'](0);

							_toRes2.default.session(res, 500, '服务器错误！', '', 500);

						case 12:
						case 'end':
							return _context7.stop();
					}
				}
			}, _callee7, undefined, [[0, 9]]);
		}));

		return function (_x13, _x14) {
			return _ref8.apply(this, arguments);
		};
	}());

	// 详情接口（前端）
	api.all('/detail/:id', function () {
		var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(req, res) {
			return _regenerator2.default.wrap(function _callee8$(_context8) {
				while (1) {
					switch (_context8.prev = _context8.next) {
						case 0:
							_context8.prev = 0;
							_context8.t0 = _toRes2.default;
							_context8.t1 = res;
							_context8.next = 5;
							return _YingpinxinxiModel2.default.findOne({ where: { id: req.params.id } });

						case 5:
							_context8.t2 = _context8.sent;

							_context8.t0.record.call(_context8.t0, _context8.t1, 0, _context8.t2);

							_context8.next = 12;
							break;

						case 9:
							_context8.prev = 9;
							_context8.t3 = _context8['catch'](0);

							_toRes2.default.session(res, 500, '服务器错误！', '', 500);

						case 12:
						case 'end':
							return _context8.stop();
					}
				}
			}, _callee8, undefined, [[0, 9]]);
		}));

		return function (_x15, _x16) {
			return _ref9.apply(this, arguments);
		};
	}());

	// 获取需要提醒的记录数接口
	api.get('/remind/:columnName/:type', function () {
		var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9(req, res) {
			var sql, remindStart, remindEnd, _remindStart, _remindEnd, results;

			return _regenerator2.default.wrap(function _callee9$(_context9) {
				while (1) {
					switch (_context9.prev = _context9.next) {
						case 0:
							_context9.prev = 0;
							sql = 'SELECT 0 AS count';


							if (req.params.type == 1) {
								if (req.query.remindstart) sql = "SELECT COUNT(*) AS count FROM yingpinxinxi WHERE " + req.params.columnName + " >= '" + req.query.remindstart + "'";
								if (req.query.remindend) sql = "SELECT COUNT(*) AS count FROM yingpinxinxi WHERE " + req.params.columnName + " <= '" + req.query.remindend + "'";

								if (req.query.remindstart && req.query.remindend) {
									sql = "SELECT COUNT(*) AS count FROM yingpinxinxi WHERE " + req.params.columnName + " >= '" + req.query.remindstart + "' AND " + req.params.columnName + " <= '" + req.query.remindend + "'";
								}
							}

							if (req.params.type == 2) {
								if (req.query.remindstart) {
									remindStart = _util2.default.getDateTimeFormat(0 + Number(req.query.remindstart), "yyyy-MM-dd");

									sql = "SELECT COUNT(*) AS count FROM yingpinxinxi WHERE " + req.params.columnName + " >= '" + remindStart + "'";
								}
								if (req.query.remindend) {
									remindEnd = _util2.default.getDateTimeFormat(req.query.remindend, "yyyy-MM-dd");

									sql = "SELECT COUNT(*) AS count FROM yingpinxinxi WHERE " + req.params.columnName + " <= '" + remindEnd + "'";
								}

								if (req.query.remindstart && req.query.remindend) {
									_remindStart = _util2.default.getDateTimeFormat(0 + Number(req.query.remindstart), "yyyy-MM-dd");
									_remindEnd = _util2.default.getDateTimeFormat(req.query.remindend, "yyyy-MM-dd");

									sql = "SELECT COUNT(*) AS count FROM yingpinxinxi WHERE " + req.params.columnName + " >= '" + _remindStart + "' AND " + req.params.columnName + " <= '" + _remindEnd + "'";
								}
							}

							_context9.next = 6;
							return _sequelize3.default.query(sql, {
								plain: true,
								raw: true,
								type: _sequelize.QueryTypes.SELECT
							});

						case 6:
							results = _context9.sent;


							_toRes2.default.count(res, 0, results.count);
							_context9.next = 13;
							break;

						case 10:
							_context9.prev = 10;
							_context9.t0 = _context9['catch'](0);


							_toRes2.default.session(res, 500, '服务器错误！', '', 500);

						case 13:
						case 'end':
							return _context9.stop();
					}
				}
			}, _callee9, undefined, [[0, 10]]);
		}));

		return function (_x17, _x18) {
			return _ref10.apply(this, arguments);
		};
	}());

	// 分组统计接口
	api.get('/group/:columnName', function () {
		var _ref11 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee10(req, res) {
			var sql, columnName, where, tableName;
			return _regenerator2.default.wrap(function _callee10$(_context10) {
				while (1) {
					switch (_context10.prev = _context10.next) {
						case 0:
							_context10.prev = 0;
							sql = "";
							columnName = req.params.columnName;
							where = " WHERE 1 = 1 ";
							tableName = req.session.userinfo === undefined ? _jsonwebtoken2.default.decode(req.headers.token).tableName : req.session.userinfo.tableName;

							if (tableName == 'qiye') {
								where += " AND qiyezhanghao = '" + _jsonwebtoken2.default.decode(req.headers.token).username + "' ";
							}
							if (tableName == 'xuesheng') {
								where += " AND xuehao = '" + _jsonwebtoken2.default.decode(req.headers.token).username + "' ";
							}
							sql = "SELECT COUNT(*) AS total, " + columnName + " FROM yingpinxinxi " + where + " GROUP BY " + columnName + " LIMIT 10";
							_context10.t0 = _toRes2.default;
							_context10.t1 = res;
							_context10.next = 12;
							return _sequelize3.default.query(sql, {
								plain: false,
								raw: true,
								type: _sequelize.QueryTypes.SELECT
							});

						case 12:
							_context10.t2 = _context10.sent;

							_context10.t0.record.call(_context10.t0, _context10.t1, 0, _context10.t2);

							_context10.next = 19;
							break;

						case 16:
							_context10.prev = 16;
							_context10.t3 = _context10['catch'](0);


							_toRes2.default.session(res, 500, '服务器错误！', '', 500);

						case 19:
						case 'end':
							return _context10.stop();
					}
				}
			}, _callee10, undefined, [[0, 16]]);
		}));

		return function (_x19, _x20) {
			return _ref11.apply(this, arguments);
		};
	}());

	// 统计指定字段
	api.get('/value/:xColumnName/:yColumnName', function () {
		var _ref12 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee11(req, res) {
			var sql, xColumnName, yColumnName, where, tableName;
			return _regenerator2.default.wrap(function _callee11$(_context11) {
				while (1) {
					switch (_context11.prev = _context11.next) {
						case 0:
							_context11.prev = 0;
							sql = "";
							xColumnName = req.params.xColumnName;
							yColumnName = req.params.yColumnName;
							where = " WHERE 1 = 1 ";
							tableName = req.session.userinfo === undefined ? _jsonwebtoken2.default.decode(req.headers.token).tableName : req.session.userinfo.tableName;

							if (tableName == 'qiye') {
								where += " AND qiyezhanghao = '" + _jsonwebtoken2.default.decode(req.headers.token).username + "' ";
							}
							if (tableName == 'xuesheng') {
								where += " AND xuehao = '" + _jsonwebtoken2.default.decode(req.headers.token).username + "' ";
							}
							sql = "SELECT " + xColumnName + ", SUM(" + yColumnName + ") AS total FROM yingpinxinxi " + where + " GROUP BY " + xColumnName + " DESC LIMIT 10";

							_context11.t0 = _toRes2.default;
							_context11.t1 = res;
							_context11.next = 13;
							return _sequelize3.default.query(sql, {
								plain: false,
								raw: true,
								type: _sequelize.QueryTypes.SELECT
							});

						case 13:
							_context11.t2 = _context11.sent;

							_context11.t0.record.call(_context11.t0, _context11.t1, 0, _context11.t2);

							_context11.next = 20;
							break;

						case 17:
							_context11.prev = 17;
							_context11.t3 = _context11['catch'](0);


							_toRes2.default.session(res, 500, '服务器错误！', '', 500);

						case 20:
						case 'end':
							return _context11.stop();
					}
				}
			}, _callee11, undefined, [[0, 17]]);
		}));

		return function (_x21, _x22) {
			return _ref12.apply(this, arguments);
		};
	}());

	// 按日期统计
	api.get('/value/:xColumnName/:yColumnName/:timeStatType', function () {
		var _ref13 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee12(req, res) {
			var sql, xColumnName, yColumnName, timeStatType, tableName, where;
			return _regenerator2.default.wrap(function _callee12$(_context12) {
				while (1) {
					switch (_context12.prev = _context12.next) {
						case 0:
							_context12.prev = 0;
							sql = "";
							xColumnName = req.params.xColumnName;
							yColumnName = req.params.yColumnName;
							timeStatType = req.params.timeStatType;
							tableName = "yingpinxinxi";
							where = " WHERE 1 = 1 ";

							if (_jsonwebtoken2.default.decode(req.headers.token).role != '管理员') {
								where += " AND qiyezhanghao = '" + _jsonwebtoken2.default.decode(req.headers.token).username + "' ";
							}
							if (_jsonwebtoken2.default.decode(req.headers.token).role != '管理员') {
								where += " AND xuehao = '" + _jsonwebtoken2.default.decode(req.headers.token).username + "' ";
							}

							if (config.dbConnection.dbtype.toLowerCase() == "mysql") {
								if (timeStatType == "日") sql = "SELECT DATE_FORMAT(" + xColumnName + ", '%Y-%m-%d') " + xColumnName + ", sum(" + yColumnName + ") total FROM " + tableName + where + " GROUP BY DATE_FORMAT(" + xColumnName + ", '%Y-%m-%d') LIMIT 10";
								if (timeStatType == "月") sql = "SELECT DATE_FORMAT(" + xColumnName + ", '%Y-%m') " + xColumnName + ", sum(" + yColumnName + ") total FROM " + tableName + where + " GROUP BY DATE_FORMAT(" + xColumnName + ", '%Y-%m')  LIMIT 10";
								if (timeStatType == "年") sql = "SELECT DATE_FORMAT(" + xColumnName + ", '%Y') " + xColumnName + ", sum(" + yColumnName + ") total FROM " + tableName + where + " GROUP BY DATE_FORMAT(" + xColumnName + ", '%Y')  LIMIT 10";
							} else {
								if (timeStatType == "日") sql = "SELECT DATE_FORMAT(VARCHAR(10)," + xColumnName + ", 120) " + xColumnName + ", sum(" + yColumnName + ") total FROM " + tableName + where + " GROUP BY DATE_FORMAT(VARCHAR(10)," + xColumnName + ", 120)  LIMIT 10";
								if (timeStatType == "月") sql = "SELECT DATE_FORMAT(VARCHAR(7)," + xColumnName + ", 120) " + xColumnName + ", sum(" + yColumnName + ") total FROM " + tableName + where + " GROUP BY DATE_FORMAT(VARCHAR(7)," + xColumnName + ", 120)  LIMIT 10";
								if (timeStatType == "年") sql = "SELECT DATE_FORMAT(VARCHAR(4)," + xColumnName + ", 120) " + xColumnName + ", sum(" + yColumnName + ") total FROM " + tableName + where + " GROUP BY DATE_FORMAT(VARCHAR(4)," + xColumnName + ", 120)  LIMIT 10";
							}
							_context12.t0 = _toRes2.default;
							_context12.t1 = res;
							_context12.next = 14;
							return _sequelize3.default.query(sql, {
								plain: false,
								raw: true,
								type: _sequelize.QueryTypes.SELECT
							});

						case 14:
							_context12.t2 = _context12.sent;

							_context12.t0.record.call(_context12.t0, _context12.t1, 0, _context12.t2);

							_context12.next = 21;
							break;

						case 18:
							_context12.prev = 18;
							_context12.t3 = _context12['catch'](0);


							_toRes2.default.session(res, 500, '服务器错误！', '', 500);

						case 21:
						case 'end':
							return _context12.stop();
					}
				}
			}, _callee12, undefined, [[0, 18]]);
		}));

		return function (_x23, _x24) {
			return _ref13.apply(this, arguments);
		};
	}());

	return api;
};
//# sourceMappingURL=Yingpinxinxi.js.map