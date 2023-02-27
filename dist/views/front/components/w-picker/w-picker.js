'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var forMatNum = function forMatNum(num) {
	return num < 10 ? '0' + num : num + '';
};
var initPicker = {
	//日期
	date: {
		init: function init(start, end) {
			var mode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "date";
			var step = arguments[3];
			var value = arguments[4];
			var flag = arguments[5];
			var disabled = arguments[6];

			var aToday = new Date();
			var tYear = void 0,
			    tMonth = void 0,
			    tDay = void 0,
			    tHours = void 0,
			    tMinutes = void 0,
			    tSeconds = void 0,
			    defaultVal = [];
			var initstartDate = new Date(start.toString());
			var endDate = new Date(end.toString());
			if (start > end) {
				initstartDate = new Date(end.toString());
				endDate = new Date(start.toString());
			};
			var startYear = initstartDate.getFullYear();
			var startMonth = initstartDate.getMonth() + 1;
			var endYear = endDate.getFullYear();
			var years = [],
			    months = [],
			    days = [],
			    hours = [],
			    minutes = [],
			    seconds = [],
			    areas = [],
			    returnArr = [],
			    dvalDate = [];
			switch (mode) {
				case "half":
					dvalDate = flag ? [].concat((0, _toConsumableArray3.default)(value.split(" ")[0].split("-")), (0, _toConsumableArray3.default)(value.split(" ")[1].split(":"))) : [].concat((0, _toConsumableArray3.default)(value.split(" ")[0].split("-")), [value.split(" ")[1]]);
					break;
				case "date":
				case "yearMonth":
					dvalDate = value.split("-");
					break;
				case "dateTime":
					dvalDate = [].concat((0, _toConsumableArray3.default)(value.split(" ")[0].split("-")), (0, _toConsumableArray3.default)(value.split(" ")[1].split(":")));
					break;
				case "time":
					dvalDate = value.split(":");
					break;
			}
			var curMonth = flag ? dvalDate[1] * 1 : dvalDate[1] + 1;
			var dYear = aToday.getFullYear();
			var dMonth = aToday.getMonth() + 1;
			var dDate = aToday.getDate();
			var totalDays = new Date(startYear, curMonth, 0).getDate();
			var dvalObj = {};
			switch (mode) {
				case "half":
				case "date":
				case "yearMonth":
					var curYear = dvalDate[0];
					var _curMonth = dvalDate[1];
					if (disabled) {
						for (var s = startYear; s <= dYear; s++) {
							years.push(s + '');
						};
						if (curYear == dYear) {
							for (var m = 1; m <= dMonth; m++) {
								months.push(forMatNum(m));
							};
						} else {
							for (var _m = 1; _m <= 12; _m++) {
								months.push(forMatNum(_m));
							};
						}
						if (_curMonth == dMonth) {
							for (var d = 1; d <= dDate; d++) {
								days.push(forMatNum(d));
							}
						} else {
							for (var _d = 1; _d <= totalDays; _d++) {
								days.push(forMatNum(_d));
							}
						}
					} else {
						for (var _s = startYear; _s <= endYear; _s++) {
							years.push(_s + '');
						};
						for (var _m2 = 1; _m2 <= 12; _m2++) {
							months.push(forMatNum(_m2));
						};
						for (var _d2 = 1; _d2 <= totalDays; _d2++) {
							days.push(forMatNum(_d2));
						}
					};
					break;
				default:
					for (var _s2 = startYear; _s2 <= endYear; _s2++) {
						years.push(_s2 + '');
					};
					for (var _m3 = 1; _m3 <= 12; _m3++) {
						months.push(forMatNum(_m3));
					};
					for (var _d3 = 1; _d3 <= totalDays; _d3++) {
						days.push(forMatNum(_d3));
					}
					break;
			}
			for (var h = 0; h < 24; h++) {
				hours.push(forMatNum(h));
			}
			for (var _m4 = 0; _m4 < 60; _m4 += step * 1) {
				minutes.push(forMatNum(_m4));
			}
			for (var _s3 = 0; _s3 < 60; _s3++) {
				seconds.push(forMatNum(_s3));
			}
			if (flag) {
				returnArr = [years.indexOf(dvalDate[0]), months.indexOf(dvalDate[1]), days.indexOf(dvalDate[2]), hours.indexOf(dvalDate[3]), minutes.indexOf(dvalDate[4]) == -1 ? 0 : minutes.indexOf(dvalDate[4]), seconds.indexOf(dvalDate[5])];
			}
			switch (mode) {
				case "date":
					if (flag) {
						defaultVal = [returnArr[0], returnArr[1], returnArr[2]];
						return { years: years, months: months, days: days, defaultVal: defaultVal };
					} else {
						defaultVal = [years.indexOf(dvalDate[0]) == -1 ? 0 : years.indexOf(dvalDate[0]), months.indexOf(dvalDate[1]) == -1 ? 0 : months.indexOf(dvalDate[1]), days.indexOf(dvalDate[2]) == -1 ? 0 : days.indexOf(dvalDate[2])];
						return { years: years, months: months, days: days, defaultVal: defaultVal };
					}
					break;
				case "half":
					areas = [{
						label: "上午",
						value: 0
					}, {
						label: "下午",
						value: 1
					}];
					if (flag) {
						defaultVal = [returnArr[0], returnArr[1], returnArr[2], returnArr[3]];
						return { years: years, months: months, days: days, areas: areas, defaultVal: defaultVal };
					} else {
						var idx = 0;
						areas.map(function (v, k) {
							if (v.label == dvalDate[3]) {
								idx = v.value;
							}
						});
						defaultVal = [years.indexOf(dvalDate[0]) == -1 ? 0 : years.indexOf(dvalDate[0]), months.indexOf(dvalDate[1]) == -1 ? 0 : months.indexOf(dvalDate[1]), days.indexOf(dvalDate[2]) == -1 ? 0 : days.indexOf(dvalDate[2]), idx];
						return { years: years, months: months, days: days, areas: areas, defaultVal: defaultVal };
					}
					break;
				case "yearMonth":
					if (flag) {
						defaultVal = [returnArr[0], returnArr[1]];
						return { years: years, months: months, defaultVal: defaultVal };
					} else {
						defaultVal = [years.indexOf(dvalDate[0]) == -1 ? 0 : years.indexOf(dvalDate[0]), months.indexOf(dvalDate[1]) == -1 ? 0 : months.indexOf(dvalDate[1])];
						return { years: years, months: months, defaultVal: defaultVal };
					}
					break;
				case "dateTime":
					if (flag) {
						defaultVal = returnArr;
					} else {
						defaultVal = [years.indexOf(dvalDate[0]) == -1 ? 0 : years.indexOf(dvalDate[0]), months.indexOf(dvalDate[1]) == -1 ? 0 : months.indexOf(dvalDate[1]), days.indexOf(dvalDate[2]) == -1 ? 0 : days.indexOf(dvalDate[2]), hours.indexOf(dvalDate[3]) == -1 ? 0 : hours.indexOf(dvalDate[3]), minutes.indexOf(dvalDate[4]) == -1 ? 0 : minutes.indexOf(dvalDate[4]), seconds.indexOf(dvalDate[5]) == -1 ? 0 : seconds.indexOf(dvalDate[5])];
					}
					return { years: years, months: months, days: days, hours: hours, minutes: minutes, seconds: seconds, defaultVal: defaultVal };
					break;
				case "time":
					if (flag) {
						defaultVal = [returnArr[3], returnArr[4], returnArr[5]];
					} else {
						defaultVal = [hours.indexOf(dvalDate[0]) == -1 ? 0 : hours.indexOf(dvalDate[0]), minutes.indexOf(dvalDate[1]) == -1 ? 0 : minutes.indexOf(dvalDate[1]), seconds.indexOf(dvalDate[2]) == -1 ? 0 : seconds.indexOf(dvalDate[2])];
					}
					return { hours: hours, minutes: minutes, seconds: seconds, defaultVal: defaultVal };
					break;
			}
		},

		initMonths: function initMonths(year, disabled) {
			var aDate = new Date();
			var dYear = aDate.getFullYear();
			var dMonth = aDate.getMonth() + 1;
			var dDate = aDate.getDate();
			var flag = dYear == year ? true : false;
			var months = [];
			if (disabled) {
				if (flag) {
					for (var m = 1; m <= dMonth; m++) {
						months.push(forMatNum(m));
					};
				} else {
					for (var _m5 = 1; _m5 <= 12; _m5++) {
						months.push(forMatNum(_m5));
					};
				}
			} else {
				for (var _m6 = 1; _m6 <= 12; _m6++) {
					months.push(forMatNum(_m6));
				};
			};
			return months;
		},
		initDays: function initDays(year, month, disabled) {
			var aDate = new Date();
			var dYear = aDate.getFullYear();
			var dMonth = aDate.getMonth() + 1;
			var dDate = aDate.getDate();
			var flag = dYear == year && dMonth == month ? true : false;
			var totalDays = new Date(year, month, 0).getDate();
			var dates = [];
			if (flag && disabled) {
				for (var d = 1; d <= dDate; d++) {
					dates.push(forMatNum(d));
				};
			} else {
				for (var _d4 = 1; _d4 <= totalDays; _d4++) {
					dates.push(forMatNum(_d4));
				};
			};
			return dates;
		}
	},
	//短期日期上下午
	limitHour: {
		init: function init() {
			var dayStep = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 7;
			var dVal = arguments[1];

			var startDate = new Date();
			var date = [],
			    areas = [],
			    hours = [];
			var hour = new Date().getHours();
			var weeks = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
			var arrs = [];
			var defaultVal = [];
			var d = 0,
			    a = 0,
			    h = 0;
			for (var i = 0; i < dayStep; i++) {
				var year = void 0,
				    month = void 0,
				    day = void 0,
				    weekday = void 0;
				year = startDate.getFullYear();
				month = forMatNum(startDate.getMonth() + 1);
				day = forMatNum(startDate.getDate());
				weekday = weeks[startDate.getDay()];
				var label = "";
				switch (i) {
					case 0:
						label = "今天";
						break;
					case 1:
						label = "明天";
						break;
					case 2:
						label = "后天";
						break;
					default:
						label = month + "月" + day + "日" + " " + weekday;
						break;
				}
				date.push({
					label: label,
					value: year + "-" + month + "-" + day,
					today: i == 0 ? true : false
				});
				startDate.setDate(startDate.getDate() + 1);
			}
			if (hour > 12) {
				areas = [{
					label: "下午",
					value: 1
				}];
			} else {
				areas = [{
					label: "上午",
					value: 0
				}, {
					label: "下午",
					value: 1
				}];
			};
			for (var k = hour > 12 ? hour - 12 : hour; k <= 12; k++) {
				hours.push({
					label: forMatNum(k),
					value: forMatNum(hour > 12 ? k + 12 : k)
				});
			};
			date.map(function (v, k) {
				if (v.label == dVal[0]) {
					d = k;
				}
			});
			if (d != 0) {
				areas = this.initAreas(date[d]);
				hours = this.initHours(date[d], areas[a]);
			}
			areas.map(function (v, k) {
				if (v.label == dVal[1]) {
					a = k;
				}
			});
			hours.map(function (v, k) {
				if (v.label == dVal[2]) {
					h = k;
				}
			});
			defaultVal = [d, a, h];
			return { date: date, areas: areas, hours: hours, defaultVal: defaultVal };
		},
		initAreas: function initAreas(date) {
			var areas = [];
			var hour = new Date().getHours();
			if (date.today) {
				if (hour > 12) {
					areas = [{
						label: "下午",
						value: 1
					}];
				} else {
					areas = [{
						label: "上午",
						value: 0
					}, {
						label: "下午",
						value: 1
					}];
				};
			} else {
				areas = [{
					label: "上午",
					value: 0
				}, {
					label: "下午",
					value: 1
				}];
			}
			return areas;
		},
		initHours: function initHours(dateCol, hourCol) {
			var hours = [];
			var hour = new Date().getHours();
			if (dateCol.today) {
				if (hourCol.value == 1 && hour <= 12) {
					for (var k = 1; k <= 12; k++) {
						hours.push({
							label: forMatNum(k),
							value: forMatNum(hourCol.value == 1 ? k + 12 : k)
						});
					};
				} else {
					for (var _k = hour > 12 ? hour - 12 : hour; _k <= 12; _k++) {
						hours.push({
							label: forMatNum(_k),
							value: forMatNum(hourCol.value == 1 ? _k + 12 : _k)
						});
					};
				}
			} else {
				for (var _k2 = 1; _k2 <= 12; _k2++) {
					hours.push({
						label: forMatNum(_k2),
						value: forMatNum(hourCol.value == 1 ? _k2 + 12 : _k2)
					});
				};
			};
			return hours;
		}
	},
	//短期日期时间初始化
	limit: {
		init: function init() {
			var dayStep = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 7;
			var startHour = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8;
			var endHour = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;
			var minuteStep = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
			var afterStep = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 30;
			var dVal = arguments[5];

			var startDate = new Date();
			var bsDate = new Date(new Date().getTime() + afterStep * 60 * 1000);
			var date = [],
			    hours = [],
			    minutes = [];
			var hour = bsDate.getHours();
			var minute = Math.floor(bsDate.getMinutes() / minuteStep) * minuteStep;
			var weeks = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
			var d = 0,
			    h = 0,
			    m = 0;
			var defaultVal = [];
			for (var i = 0; i < dayStep; i++) {
				var year = void 0,
				    month = void 0,
				    day = void 0,
				    weekday = void 0;
				year = startDate.getFullYear();
				month = forMatNum(startDate.getMonth() + 1);
				day = forMatNum(startDate.getDate());
				weekday = weeks[startDate.getDay()];
				var label = "";
				switch (i) {
					case 0:
						label = "今天";
						break;
					case 1:
						label = "明天";
						break;
					case 2:
						label = "后天";
						break;
					default:
						label = month + "月" + day + "日" + " " + weekday;
						break;
				}
				date.push({
					label: label,
					value: year + "-" + month + "-" + day,
					flag: i == 0 ? true : false
				});
				startDate.setDate(startDate.getDate() + 1);
			}
			if (hour < startHour) {
				hour = startHour;
			};
			if (hour > endHour) {
				hour = endHour;
			};
			for (var k = hour * 1; k <= endHour * 1; k++) {
				hours.push({
					label: forMatNum(k),
					value: forMatNum(k),
					flag: k == hour ? true : false
				});
			};
			for (var j = minute; j < 60; j += minuteStep * 1) {
				minutes.push({
					label: forMatNum(j),
					value: forMatNum(j)
				});
			}
			date.map(function (v, k) {
				if (v.label == dVal[0]) {
					d = k;
				}
			});
			if (d != 0) {
				hours = this.initHours(startHour = 8, endHour = 20, minuteStep = 1, afterStep = 30, date[d].value);
			}
			hours.map(function (v, k) {
				if (v.label == dVal[1]) {
					h = k;
				}
			});
			minutes.map(function (v, k) {
				if (v.label == dVal[2]) {
					m = k;
				}
			});
			defaultVal = [d, h, m];
			return { date: date, hours: hours, minutes: minutes, defaultVal: defaultVal };
		},
		initHours: function initHours() {
			var startHour = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;
			var endHour = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
			var minuteStep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
			var afterStep = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 30;
			var date = arguments[4];

			var hours = [];
			var arr = date.split("-");
			var aDate = new Date();
			var dYear = aDate.getFullYear();
			var dMonth = aDate.getMonth() + 1;
			var dDate = aDate.getDate();
			var bsDate = new Date(new Date().getTime() + afterStep * 60 * 1000);
			var hour = bsDate.getHours();
			var flag = dYear == arr[0] && dMonth == arr[1] && dDate == arr[2] ? true : false;
			if (hour > endHour) {
				hour = endHour;
			};
			if (flag) {
				for (var k = hour * 1; k <= endHour * 1; k++) {
					hours.push({
						label: forMatNum(k),
						value: forMatNum(k),
						flag: k == hour ? true : false
					});
				};
			} else {
				for (var _k3 = startHour * 1; _k3 <= endHour * 1; _k3++) {
					hours.push({
						label: forMatNum(_k3),
						value: forMatNum(_k3),
						flag: false
					});
				}
			};
			return hours;
		},
		initMinutes: function initMinutes() {
			var startHour = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;
			var endHour = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
			var minuteStep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
			var afterStep = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 30;
			var date = arguments[4];
			var hour = arguments[5];

			var minutes = [];
			var bsDate = new Date(new Date().getTime() + afterStep * 60 * 1000);
			var arr = date.split("-");
			var aDate = new Date();
			var dYear = aDate.getFullYear();
			var dMonth = aDate.getMonth() + 1;
			var dDate = aDate.getDate();
			var dHour = bsDate.getHours();;
			var minute = Math.floor(bsDate.getMinutes() / minuteStep) * minuteStep;
			var flag = dYear == arr[0] && dMonth == arr[1] && dDate == arr[2] ? true : false;
			if (flag) {
				if (hour == dHour) {
					for (var j = minute; j < 60; j += minuteStep * 1) {
						minutes.push({
							label: forMatNum(j),
							value: forMatNum(j)
						});
					}
				} else {
					for (var _j = 0; _j < 60; _j += minuteStep * 1) {
						minutes.push({
							label: forMatNum(_j),
							value: forMatNum(_j)
						});
					}
				}
			} else {
				for (var _j2 = 0; _j2 < 60; _j2 += minuteStep * 1) {
					minutes.push({
						label: forMatNum(_j2),
						value: forMatNum(_j2)
					});
				}
			}
			return minutes;
		}
	},
	//选择区间初始化
	range: {
		init: function init(start, end, value, flag) {
			var aToday = new Date();
			var tYear = void 0,
			    tMonth = void 0,
			    tDay = void 0,
			    tHours = void 0,
			    tMinutes = void 0,
			    tSeconds = void 0,
			    defaultVal = [];
			var initstartDate = new Date(start.toString());
			var endDate = new Date(end.toString());
			if (start > end) {
				initstartDate = new Date(end.toString());
				endDate = new Date(start.toString());
			};
			var startYear = initstartDate.getFullYear();
			var startMonth = initstartDate.getMonth() + 1;
			var endYear = endDate.getFullYear();
			var fyears = [],
			    fmonths = [],
			    fdays = [],
			    tyears = [],
			    tmonths = [],
			    tdays = [],
			    returnArr = [],
			    startDVal = [],
			    endDVal = [];
			startDVal = value[0].split("-");
			endDVal = value[1].split("-");
			var curMonth = flag ? startDVal[1] * 1 : startDVal[1] + 1;
			var totalDays = new Date(startYear, curMonth, 0).getDate();
			for (var s = startYear; s <= endYear; s++) {
				fyears.push(s + '');
			};
			for (var m = 1; m <= 12; m++) {
				fmonths.push(forMatNum(m));
			};
			for (var d = 1; d <= totalDays; d++) {
				fdays.push(forMatNum(d));
			};
			for (var _s4 = startDVal[0]; _s4 <= endYear; _s4++) {
				tyears.push(_s4 + '');
			};
			for (var _m7 = startDVal[1]; _m7 <= 12; _m7++) {
				tmonths.push(forMatNum(_m7));
			};
			for (var _d5 = startDVal[2]; _d5 <= totalDays; _d5++) {
				tdays.push(forMatNum(_d5));
			};
			defaultVal = [fyears.indexOf(startDVal[0]) == -1 ? 0 : fyears.indexOf(startDVal[0]), fmonths.indexOf(startDVal[1]) == -1 ? 0 : fmonths.indexOf(startDVal[1]), fdays.indexOf(startDVal[2]) == -1 ? 0 : fdays.indexOf(startDVal[2]), 0, tyears.indexOf(endDVal[0]) == -1 ? 0 : tyears.indexOf(endDVal[0]), tmonths.indexOf(endDVal[1]) == -1 ? 0 : tmonths.indexOf(endDVal[1]), tdays.indexOf(endDVal[2]) == -1 ? 0 : tdays.indexOf(endDVal[2])];
			return {
				fyears: fyears,
				fmonths: fmonths,
				fdays: fdays,
				tyears: tyears,
				tmonths: tmonths,
				tdays: tdays,
				defaultVal: defaultVal
			};
		},
		initStartDays: function initStartDays(year, month) {
			var totalDays = new Date(year, month, 0).getDate();
			var dates = [];
			for (var d = 1; d <= totalDays; d++) {
				dates.push(forMatNum(d));
			};
			return dates;
		},
		initEndYears: function initEndYears(curYear, startYear, endYear) {
			var years = [];
			for (var y = curYear; y <= endYear; y++) {
				years.push(forMatNum(y));
			};
			return years;
		},
		initEndMonths: function initEndMonths(curMonth) {
			var months = [];
			for (var m = curMonth * 1; m <= 12; m++) {
				months.push(forMatNum(m));
			};
			return months;
		},
		initEndDays: function initEndDays(curYear, curMonth, curDate, tYear, tMonth) {
			var totalDays = new Date(curYear, curMonth, 0).getDate();
			var days = [];
			for (var d = curDate * 1; d <= totalDays; d++) {
				days.push(forMatNum(d));
			};
			return days;
		},
		initToMonths: function initToMonths(curYear, curMonth, curDate, tYear) {
			var aDate = new Date(curYear, curMonth, curDate).getTime();
			var bDate = new Date(tYear, curMonth, curDate).getTime();
			var months = [];
			if (bDate - aDate > 0) {
				console.log(1);
				for (var m = 1; m <= 12; m++) {
					months.push(forMatNum(m));
				};
			} else {
				for (var _m8 = curMonth * 1; _m8 <= 12; _m8++) {
					months.push(forMatNum(_m8));
				};
			}
			return months;
		},
		initToDays: function initToDays(curYear, curMonth, curDate, tYear, tMonth) {
			var aDate = new Date(curYear, curMonth, curDate).getTime();
			var bDate = new Date(tYear, tMonth, curDate).getTime();
			var totalDays = new Date(tYear, tMonth, 0).getDate();
			var days = [];
			if (bDate - aDate > 0) {
				for (var d = 1; d <= totalDays; d++) {
					days.push(forMatNum(d));
				};
			} else {
				for (var _d6 = curDate * 1; _d6 <= totalDays; _d6++) {
					days.push(forMatNum(_d6));
				};
			}
			return days;
		}
	}
};

exports.default = initPicker;
//# sourceMappingURL=w-picker.js.map