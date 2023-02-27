"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "S": this.getMilliseconds()
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    }return fmt;
};

exports.default = {
    isNothing: function isNothing(prop) {
        return prop === null || prop === undefined || prop === '';
    },
    getDateTimeFormat: function getDateTimeFormat() {
        var days = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var fmt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-MM-dd hh:mm:ss';

        return new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * days).Format(fmt);
    },

    //日期转为树形结构
    translateDataToTree: function translateDataToTree(data) {
        var parents = data.filter(function (value) {
            return value.parentid == 0;
        });
        var children = data.filter(function (value) {
            return value.parentid != 0;
        });
        var translator = function translator(parents, children) {
            parents.forEach(function (parent) {
                children.forEach(function (current, index) {
                    if (current.parentid === parent.id) {
                        var temp = JSON.parse(JSON.stringify(children));
                        temp.splice(index, 1);
                        translator([current], temp);
                        typeof parent.childs !== 'undefined' ? parent.childs.push(current) : parent.childs = [current];
                    }
                });
            });
        };
        translator(parents, children);
        return parents;
    }
};
//# sourceMappingURL=util.js.map