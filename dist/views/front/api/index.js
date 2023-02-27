'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.security = exports.faceMatch = exports.deleteRecords = exports.groupby = exports.forumDetail = exports.myForum = exports.allPublicForm = exports.follow = exports.option = exports.defaultAddress = exports.uploadMedia = exports.upload = exports.recommend2 = exports.recommend = exports.info = exports.del = exports.updateBrowseDuration = exports.update = exports.save = exports.add = exports.page = exports.list = exports.session = exports.resetPass = exports.registerSms = exports.registerEmail = exports.register = exports.sendsms = exports.sendemail = exports.login = exports.auth = undefined;

var _http = require('./http');

var _http2 = _interopRequireDefault(_http);

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 登陆校验
 */
var auth = exports.auth = function auth() {
	var token = uni.getStorageSync("token");
	if (!uni.getStorageSync("token")) {
		uni.navigateTo({
			url: '../login/login'
		});
		return;
	}
};
/**
 * 登陆
 */
var login = exports.login = function login(tableName, data) {
	return _http2.default.request({
		url: tableName + '/login',
		method: 'GET',
		data: data
	});
};
/**
 *  * 发送邮箱验证码
 *   */
var sendemail = exports.sendemail = function sendemail(tableName, email) {
	return _http2.default.request({
		url: tableName + '/sendemail?email=' + email,
		method: 'GET'
	});
};
/**
 *  * 发送短信证码
 *   */
var sendsms = exports.sendsms = function sendsms(tableName, mobile) {
	return _http2.default.request({
		url: tableName + '/sendsms?mobile=' + mobile,
		method: 'GET'
	});
};
/**
 *  * 注册
 *   */
var register = exports.register = function register(tableName, data) {
	var url = tableName + '/register';
	return _http2.default.request({
		url: url,
		method: 'POST',
		data: data
	});
};
/**
 *  * 邮箱注册
 *   */
var registerEmail = exports.registerEmail = function registerEmail(tableName, data, emailcode) {
	var url = tableName + '/register?emailcode=' + emailcode;
	return _http2.default.request({
		url: url,
		method: 'POST',
		data: data
	});
};
/**
 *  * 短信注册
 *   */
var registerSms = exports.registerSms = function registerSms(tableName, data, smscode) {
	var url = tableName + '/register?smscode=' + smscode;
	return _http2.default.request({
		url: url,
		method: 'POST',
		data: data
	});
};
/**
 * 重置密码
 */
var resetPass = exports.resetPass = function resetPass(tableName, username) {
	var data = {
		username: username
	};
	return _http2.default.request({
		url: tableName + '/resetPass',
		method: 'GET',
		data: data
	});
};
/**
 * 获取登陆用户信息
 */
var session = exports.session = function session(tableName) {
	return _http2.default.request({
		url: tableName + '/session',
		method: 'GET'
	});
};
/**
 * 查询
 */
var list = exports.list = function list(tableName, data) {
	return _http2.default.request({
		url: tableName + '/list',
		method: 'GET',
		data: data
	});
};
/**
 * 查询 page
 */
var page = exports.page = function page(tableName, data) {
	return _http2.default.request({
		url: tableName + '/page',
		method: 'GET',
		data: data
	});
};
/**
 * 保存
 */
var add = exports.add = function add(tableName, data) {
	return _http2.default.request({
		url: tableName + '/add',
		method: 'POST',
		data: data
	});
};
// 保存
var save = exports.save = function save(tableName, data) {
	return _http2.default.request({
		url: tableName + '/save',
		method: 'POST',
		data: data
	});
};
/**
 * 更新
 */
var update = exports.update = function update(tableName, data) {
	return _http2.default.request({
		url: tableName + '/update',
		method: 'POST',
		data: data
	});
};
var updateBrowseDuration = exports.updateBrowseDuration = function updateBrowseDuration(tableName, id, duration, data) {
	return _http2.default.request({
		url: tableName + '/updateBrowseDuration/' + id + "?duration=" + duration,
		method: 'POST',
		data: data
	});
};
/**
 * 删除
 */
var del = exports.del = function del(tableName, data) {
	return _http2.default.request({
		url: tableName + '/delete',
		method: 'POST',
		data: data
	});
};
/**
 * 单条信息查询
 */
var info = exports.info = function info(tableName, id) {
	return _http2.default.request({
		url: tableName + '/detail/' + id,
		method: 'GET'
	});
};
/**
 * 智能推荐
 */
var recommend = exports.recommend = function recommend(tableName, data) {
	return _http2.default.request({
		url: tableName + '/autoSort',
		method: 'get',
		data: data
	});
};
/**
 * 智能推荐(按购买类型推荐)
 */
var recommend2 = exports.recommend2 = function recommend2(tableName, data) {
	return _http2.default.request({
		url: tableName + '/autoSort2',
		method: 'get',
		data: data
	});
};
/**
 * 上传
 */
var upload = exports.upload = function upload(callback) {
	uni.chooseImage({
		count: 4, //默认9
		sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
		sourceType: ['album'], //从相册选择
		success: function success(res) {
			uni.uploadFile({
				url: _base2.default.url + 'file/upload', //仅为示例，非真实的接口地址
				filePath: res.tempFilePaths[0],
				name: 'file',
				header: {
					'Token': uni.getStorageSync("token")
				},
				success: function success(uploadFileRes) {
					// console.log(uploadFileRes)
					var result = JSON.parse(uploadFileRes.data);
					if (result.code == 0) {
						callback(result);
					} else {
						uni.showToast({
							title: result.msg,
							icon: 'none',
							duration: 2000
						});
					}
				}
			});
		}
	});
};
var uploadMedia = exports.uploadMedia = function uploadMedia(callback) {
	uni.chooseVideo({
		count: 1,
		sourceType: ['camera', 'album'],
		success: function success(res) {
			console.log(res);
			uni.uploadFile({
				url: _base2.default.url + 'file/upload', //仅为示例，非真实的接口地址
				filePath: res.tempFilePath,
				name: 'file',
				header: {
					'Token': uni.getStorageSync("token")
				},
				success: function success(uploadFileRes) {
					// console.log(uploadFileRes)
					var result = JSON.parse(uploadFileRes.data);
					if (result.code == 0) {
						callback(result);
					} else {
						uni.showToast({
							title: result.msg,
							icon: 'none',
							duration: 2000
						});
					}
				}
			});
		}
	});
};

/**
 * 获取默认地址
 */
var defaultAddress = exports.defaultAddress = function defaultAddress(userid) {
	return _http2.default.request({
		url: 'address/default?userid=' + userid,
		method: 'GET'
	});
};
/**
 * 联动查询
 * @param {*} tableName 
 * @param {*} columnName 
 * @param {*} data 
 */
var option = exports.option = function option(tableName, columnName, data) {
	return _http2.default.request({
		url: 'option/' + tableName + '/' + columnName,
		method: 'GET',
		data: data
	});
};
/**
 * 随
 * @param {*} tableName 
 * @param {*} columnName 
 * @param {*} data 
 */
var follow = exports.follow = function follow(tableName, columnName, data) {
	return _http2.default.request({
		url: 'follow/' + tableName + '/' + columnName,
		method: 'GET',
		data: data
	});
};
// 论坛接口
var allPublicForm = exports.allPublicForm = function allPublicForm() {
	var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
	var title = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '%%';

	var data = {
		page: page,
		limit: limit,
		title: title
	};
	return _http2.default.request({
		url: 'forum/flist?parentid=0&isdone=\u5F00\u653E&sort=addtime&order=desc',
		method: 'GET',
		data: data
	});
};
// 我的帖子
var myForum = exports.myForum = function myForum() {
	var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

	var data = {
		page: page,
		limit: limit
	};
	return _http2.default.request({
		url: 'forum/page?parentid=0&sort=addtime&order=desc',
		method: 'GET',
		data: data
	});
};
var forumDetail = exports.forumDetail = function forumDetail(id) {
	return _http2.default.request({
		url: 'forum/list/' + id,
		method: 'GET'
	});
};
var groupby = exports.groupby = function groupby() {
	return _http2.default.request({
		url: 'examrecord/groupby',
		method: 'GET'
	});
};
var deleteRecords = exports.deleteRecords = function deleteRecords(userid, paperid) {
	return _http2.default.request({
		url: 'examrecord/deleteRecords?userid=' + userid + '&paperid=' + paperid,
		method: 'POST'
	});
};
var faceMatch = exports.faceMatch = function faceMatch(data) {
	return _http2.default.request({
		url: 'matchFace',
		method: 'GET',
		data: data
	});
};
var security = exports.security = function security(tableName, data) {
	return _http2.default.request({
		url: tableName + '/security',
		method: 'GET',
		data: data
	});
};
exports.default = {
	login: login, // 登陆
	sendemail: sendemail, //发送邮箱验证码
	sendsms: sendsms, //发送短信验证码
	register: register, //注册
	registerEmail: registerEmail, //邮箱注册
	registerSms: registerSms, //短信注册
	resetPass: resetPass, // 重置
	auth: auth, // 校验
	session: session, // 个人信息
	list: list, // 查询
	page: page, // 查询 page
	add: add, // 添加
	update: update, // 修改
	updateBrowseDuration: updateBrowseDuration,
	del: del, // 删除
	info: info, // 单条信息查询,
	recommend: recommend, // 智能推荐
	recommend2: recommend2, // 智能推荐(按购买类型推荐)
	defaultAddress: defaultAddress, // 默认地址
	save: save, // 保存
	upload: upload, // 上传
	option: option, // 联动查询
	follow: follow, // 随
	allPublicForm: allPublicForm,
	myForum: myForum,
	forumDetail: forumDetail,
	groupby: groupby,
	deleteRecords: deleteRecords,
	faceMatch: faceMatch,
	uploadMedia: uploadMedia,
	security: security
};
//# sourceMappingURL=index.js.map