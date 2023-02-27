"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

exports.ChildrenMixin = ChildrenMixin;
exports.ParentMixin = ParentMixin;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ChildrenMixin(parent) {
	var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	var indexKey = options.indexKey || 'index';
	return {
		inject: (0, _defineProperty3.default)({}, parent, {
			default: null
		}),
		mounted: function mounted() {
			this.parent = this[parent];
			this.bindRelation();
		},

		// #ifdef VUE2
		beforeDestroy: function beforeDestroy() {
			var _this = this;

			if (this.parent) {
				this.parent.children = this.parent.children.filter(function (item) {
					return item !== _this;
				});
				uni.$emit("childrenReady" + this.parent._uid, this);
			}
		},

		// #endif
		// #ifdef VUE3
		beforeUnmount: function beforeUnmount() {
			var _this2 = this;

			if (this.parent) {
				this.parent.children = this.parent.children.filter(function (item) {
					return item !== _this2;
				});
				uni.$emit("childrenReady" + this.parent._uid, this);
			}
		},

		// #endif
		methods: {
			bindRelation: function bindRelation() {
				if (!this.parent || this.parent.children.indexOf(this) !== -1) {
					return;
				}
				var children = [].concat((0, _toConsumableArray3.default)(this.parent.children), [this]);
				this.parent.children = children;
				this.index = this.parent.children.indexOf(this);
				uni.$emit("childrenReady" + this.parent._uid, this);
			}
		}
	};
}

function ParentMixin(parent) {
	return {
		provide: function provide() {
			return (0, _defineProperty3.default)({}, parent, this);
		},
		created: function created() {
			this.children = [];
		},

		// #ifdef VUE2
		beforeDestroy: function beforeDestroy() {
			uni.$off("childrenReady" + this._uid);
		},

		// #endif
		// #ifdef VUE3
		beforeUnmount: function beforeUnmount() {
			uni.$off("childrenReady" + this._uid);
		}
	};
}
//# sourceMappingURL=relation.js.map