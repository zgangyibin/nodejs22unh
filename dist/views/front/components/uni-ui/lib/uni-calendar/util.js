'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _calendar = require('./calendar.js');

var _calendar2 = _interopRequireDefault(_calendar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Calendar = function () {
	function Calendar() {
		var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
		    date = _ref.date,
		    selected = _ref.selected,
		    startDate = _ref.startDate,
		    endDate = _ref.endDate,
		    range = _ref.range;

		(0, _classCallCheck3.default)(this, Calendar);

		// 当前日期
		this.date = this.getDate(date); // 当前初入日期
		// 打点信息
		this.selected = selected || [];
		// 范围开始
		this.startDate = startDate;
		// 范围结束
		this.endDate = endDate;
		this.range = range;
		// 多选状态
		this.multipleStatus = {
			before: '',
			after: '',
			data: []
			// 每周日期
		};this.weeks = {};

		this._getWeek(this.date.fullDate);
	}

	/**
  * 获取任意时间
  */


	(0, _createClass3.default)(Calendar, [{
		key: 'getDate',
		value: function getDate(date) {
			var AddDayCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
			var str = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'day';

			if (!date) {
				date = new Date();
			}
			if ((typeof date === 'undefined' ? 'undefined' : (0, _typeof3.default)(date)) !== 'object') {
				date = date.replace(/-/g, '/');
			}
			var dd = new Date(date);
			switch (str) {
				case 'day':
					dd.setDate(dd.getDate() + AddDayCount); // 获取AddDayCount天后的日期
					break;
				case 'month':
					if (dd.getDate() === 31) {
						dd.setDate(dd.getDate() + AddDayCount);
					} else {
						dd.setMonth(dd.getMonth() + AddDayCount); // 获取AddDayCount天后的日期
					}
					break;
				case 'year':
					dd.setFullYear(dd.getFullYear() + AddDayCount); // 获取AddDayCount天后的日期
					break;
			}
			var y = dd.getFullYear();
			var m = dd.getMonth() + 1 < 10 ? '0' + (dd.getMonth() + 1) : dd.getMonth() + 1; // 获取当前月份的日期，不足10补0
			var d = dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate(); // 获取当前几号，不足10补0
			return {
				fullDate: y + '-' + m + '-' + d,
				year: y,
				month: m,
				date: d,
				day: dd.getDay()
			};
		}

		/**
   * 获取上月剩余天数
   */

	}, {
		key: '_getLastMonthDays',
		value: function _getLastMonthDays(firstDay, full) {
			var dateArr = [];
			for (var i = firstDay; i > 0; i--) {
				var beforeDate = new Date(full.year, full.month - 1, -i + 1).getDate();
				dateArr.push({
					date: beforeDate,
					month: full.month - 1,
					lunar: this.getlunar(full.year, full.month - 1, beforeDate),
					disable: true
				});
			}
			return dateArr;
		}
		/**
   * 获取本月天数
   */

	}, {
		key: '_currentMonthDys',
		value: function _currentMonthDys(dateData, full) {
			var _this = this;

			var dateArr = [];
			var fullDate = this.date.fullDate;

			var _loop = function _loop(i) {
				var isinfo = false;
				var nowDate = full.year + '-' + (full.month < 10 ? full.month : full.month) + '-' + (i < 10 ? '0' + i : i);
				// 是否今天
				var isDay = fullDate === nowDate;
				// 获取打点信息
				var info = _this.selected && _this.selected.find(function (item) {
					if (_this.dateEqual(nowDate, item.date)) {
						return item;
					}
				});

				// 日期禁用
				var disableBefore = true;
				var disableAfter = true;
				if (_this.startDate) {
					var dateCompBefore = _this.dateCompare(_this.startDate, fullDate);
					disableBefore = _this.dateCompare(dateCompBefore ? _this.startDate : fullDate, nowDate);
				}

				if (_this.endDate) {
					var dateCompAfter = _this.dateCompare(fullDate, _this.endDate);
					disableAfter = _this.dateCompare(nowDate, dateCompAfter ? _this.endDate : fullDate);
				}

				var multiples = _this.multipleStatus.data;
				var checked = false;
				var multiplesStatus = -1;
				if (_this.range) {
					if (multiples) {
						multiplesStatus = multiples.findIndex(function (item) {
							return _this.dateEqual(item, nowDate);
						});
					}
					if (multiplesStatus !== -1) {
						checked = true;
					}
				}

				var data = {
					fullDate: nowDate,
					year: full.year,
					date: i,
					multiple: _this.range ? checked : false,
					month: full.month,
					lunar: _this.getlunar(full.year, full.month, i),
					disable: !disableBefore || !disableAfter,
					isDay: isDay
				};
				if (info) {
					data.extraInfo = info;
				}

				dateArr.push(data);
			};

			for (var i = 1; i <= dateData; i++) {
				_loop(i);
			}
			return dateArr;
		}
		/**
   * 获取下月天数
   */

	}, {
		key: '_getNextMonthDays',
		value: function _getNextMonthDays(surplus, full) {
			var dateArr = [];
			for (var i = 1; i < surplus + 1; i++) {
				dateArr.push({
					date: i,
					month: Number(full.month) + 1,
					lunar: this.getlunar(full.year, Number(full.month) + 1, i),
					disable: true
				});
			}
			return dateArr;
		}
		/**
   * 设置日期
   * @param {Object} date
   */

	}, {
		key: 'setDate',
		value: function setDate(date) {
			this._getWeek(date);
		}
		/**
   * 获取当前日期详情
   * @param {Object} date
   */

	}, {
		key: 'getInfo',
		value: function getInfo(date) {
			var _this2 = this;

			if (!date) {
				date = new Date();
			}
			var dateInfo = this.canlender.find(function (item) {
				return item.fullDate === _this2.getDate(date).fullDate;
			});
			return dateInfo;
		}

		/**
   * 比较时间大小
   */

	}, {
		key: 'dateCompare',
		value: function dateCompare(startDate, endDate) {
			// 计算截止时间
			startDate = new Date(startDate.replace('-', '/').replace('-', '/'));
			// 计算详细项的截止时间
			endDate = new Date(endDate.replace('-', '/').replace('-', '/'));
			if (startDate <= endDate) {
				return true;
			} else {
				return false;
			}
		}

		/**
   * 比较时间是否相等
   */

	}, {
		key: 'dateEqual',
		value: function dateEqual(before, after) {
			// 计算截止时间
			before = new Date(before.replace('-', '/').replace('-', '/'));
			// 计算详细项的截止时间
			after = new Date(after.replace('-', '/').replace('-', '/'));
			if (before.getTime() - after.getTime() === 0) {
				return true;
			} else {
				return false;
			}
		}

		/**
   * 获取日期范围内所有日期
   * @param {Object} begin
   * @param {Object} end
   */

	}, {
		key: 'geDateAll',
		value: function geDateAll(begin, end) {
			var arr = [];
			var ab = begin.split('-');
			var ae = end.split('-');
			var db = new Date();
			db.setFullYear(ab[0], ab[1] - 1, ab[2]);
			var de = new Date();
			de.setFullYear(ae[0], ae[1] - 1, ae[2]);
			var unixDb = db.getTime() - 24 * 60 * 60 * 1000;
			var unixDe = de.getTime() - 24 * 60 * 60 * 1000;
			for (var k = unixDb; k <= unixDe;) {
				k = k + 24 * 60 * 60 * 1000;
				arr.push(this.getDate(new Date(parseInt(k))).fullDate);
			}
			return arr;
		}
		/**
   * 计算阴历日期显示
   */

	}, {
		key: 'getlunar',
		value: function getlunar(year, month, date) {
			return _calendar2.default.solar2lunar(year, month, date);
		}
		/**
   * 设置打点
   */

	}, {
		key: 'setSelectInfo',
		value: function setSelectInfo(data, value) {
			this.selected = value;
			this._getWeek(data);
		}

		/**
   *  获取多选状态
   */

	}, {
		key: 'setMultiple',
		value: function setMultiple(fullDate) {
			var _multipleStatus = this.multipleStatus,
			    before = _multipleStatus.before,
			    after = _multipleStatus.after;

			if (!this.range) return;
			if (before && after) {
				this.multipleStatus.before = '';
				this.multipleStatus.after = '';
				this.multipleStatus.data = [];
				this._getWeek(fullDate);
			} else {
				if (!before) {
					this.multipleStatus.before = fullDate;
				} else {
					this.multipleStatus.after = fullDate;
					if (this.dateCompare(this.multipleStatus.before, this.multipleStatus.after)) {
						this.multipleStatus.data = this.geDateAll(this.multipleStatus.before, this.multipleStatus.after);
					} else {
						this.multipleStatus.data = this.geDateAll(this.multipleStatus.after, this.multipleStatus.before);
					}
					this._getWeek(fullDate);
				}
			}
		}

		/**
   * 获取每周数据
   * @param {Object} dateData
   */

	}, {
		key: '_getWeek',
		value: function _getWeek(dateData) {
			var _getDate = this.getDate(dateData),
			    fullDate = _getDate.fullDate,
			    year = _getDate.year,
			    month = _getDate.month,
			    date = _getDate.date,
			    day = _getDate.day;

			var firstDay = new Date(year, month - 1, 1).getDay();
			var currentDay = new Date(year, month, 0).getDate();
			var dates = {
				lastMonthDays: this._getLastMonthDays(firstDay, this.getDate(dateData)), // 上个月末尾几天
				currentMonthDys: this._currentMonthDys(currentDay, this.getDate(dateData)), // 本月天数
				nextMonthDays: [], // 下个月开始几天
				weeks: []
			};
			var canlender = [];
			var surplus = 42 - (dates.lastMonthDays.length + dates.currentMonthDys.length);
			dates.nextMonthDays = this._getNextMonthDays(surplus, this.getDate(dateData));
			canlender = canlender.concat(dates.lastMonthDays, dates.currentMonthDys, dates.nextMonthDays);
			var weeks = {};
			// 拼接数组  上个月开始几天 + 本月天数+ 下个月开始几天
			for (var i = 0; i < canlender.length; i++) {
				if (i % 7 === 0) {
					weeks[parseInt(i / 7)] = new Array(7);
				}
				weeks[parseInt(i / 7)][i % 7] = canlender[i];
			}
			this.canlender = canlender;
			this.weeks = weeks;
		}

		//静态方法
		// static init(date) {
		// 	if (!this.instance) {
		// 		this.instance = new Calendar(date);
		// 	}
		// 	return this.instance;
		// }

	}]);
	return Calendar;
}();

exports.default = Calendar;
//# sourceMappingURL=util.js.map