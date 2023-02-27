'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
// #ifdef APP-NVUE
var dom = weex.requireModule('dom');
// #endif
exports.default = {
	data: function data() {
		return {
			uniShow: false,
			left: 0
		};
	},

	computed: {
		moveLeft: function moveLeft() {
			return 'translateX(' + this.left + 'px)';
		}
	},
	watch: {
		show: function show(newVal) {
			if (!this.position || JSON.stringify(this.position) === '{}') return;
			if (this.autoClose) return;
			if (newVal) {
				this.$emit('change', true);
				this.open();
			} else {
				this.$emit('change', false);
				this.close();
			}
			uni.$emit('__uni__swipe__event', this);
		}
	},
	mounted: function mounted() {
		var _this = this;

		this.position = {};
		this.init();

		setTimeout(function () {
			_this.getSelectorQuery();
		}, 100);
	},
	beforeDestoy: function beforeDestoy() {
		uni.$off('__uni__swipe__event');
	},

	methods: {
		init: function init() {
			var _this2 = this;

			uni.$on('__uni__swipe__event', function (res) {
				if (res !== _this2 && _this2.autoClose) {
					if (_this2.left !== 0) {
						_this2.close();
					}
				}
			});
		},
		onClick: function onClick(index, item) {
			this.$emit('click', {
				content: item,
				index: index
			});
		},
		touchstart: function touchstart(e) {
			var pageX = e.touches[0].pageX;

			if (this.disabled) return;
			var left = this.position.content.left;
			uni.$emit('__uni__swipe__event', this);
			this.width = pageX - left;
			if (this.isopen) return;
			if (this.uniShow) {
				this.uniShow = false;
				this.isopen = true;
				this.openleft = this.left + this.position.button.width;
			}
		},
		touchmove: function touchmove(e, index) {
			if (this.disabled) return;
			var pageX = e.touches[0].pageX;

			this.setPosition(pageX);
		},
		touchend: function touchend() {
			if (this.disabled) return;
			if (this.isopen) {
				this.move(this.openleft, 0);
				return;
			}
			this.move(this.left, -40);
		},
		setPosition: function setPosition(x, y) {
			if (!this.position.button.width) {
				return;
			}
			// this.left = x - this.width
			this.setValue(x - this.width);
		},
		setValue: function setValue(value) {
			// 设置最大最小值
			this.left = Math.max(-this.position.button.width, Math.min(parseInt(value), 0));
			this.position.content.left = this.left;
			if (this.isopen) {
				this.openleft = this.left + this.position.button.width;
			}
		},
		move: function move(left, value) {
			if (left >= value) {
				this.$emit('change', false);
				this.close();
			} else {
				this.$emit('change', true);
				this.open();
			}
		},
		open: function open() {
			this.uniShow = true;
			this.left = -this.position.button.width;
			this.setValue(-this.position.button.width);
		},
		close: function close() {
			var _this3 = this;

			this.uniShow = true;
			this.setValue(0);
			setTimeout(function () {
				_this3.uniShow = false;
				_this3.isopen = false;
			}, 300);
		},
		getSelectorQuery: function getSelectorQuery() {
			var _this4 = this;

			// #ifndef APP-NVUE
			var views = uni.createSelectorQuery().in(this);
			views.selectAll('.selector-query-hock').boundingClientRect(function (data) {
				_this4.position.content = data[1];
				_this4.position.button = data[0];
				if (_this4.autoClose) return;
				if (_this4.show) {
					_this4.open();
				} else {
					_this4.close();
				}
			}).exec();
			// #endif
			// #ifdef APP-NVUE
			dom.getComponentRect(this.$refs['selector-content-hock'], function (data) {
				if (_this4.position.content) return;
				_this4.position.content = data.size;
			});
			dom.getComponentRect(this.$refs['selector-button-hock'], function (data) {
				if (_this4.position.button) return;
				_this4.position.button = data.size;
				if (_this4.autoClose) return;
				if (_this4.show) {
					_this4.open();
				} else {
					_this4.close();
				}
			});
			// #endif
		}
	}
};
//# sourceMappingURL=mpother.js.map