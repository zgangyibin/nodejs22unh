'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = updateSize;
function updateSize() {
	var swiper = this;
	var width = void 0;
	var height = void 0;
	var el = swiper.el;
	if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
		width = swiper.params.width;
	} else {
		width = el.width;
	}

	if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) {
		height = swiper.params.height;
	} else {
		height = el.height;
	}

	if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
		return;
	} // Subtract paddings
	if (Number.isNaN(width)) width = 0;
	if (Number.isNaN(height)) height = 0;
	Object.assign(swiper, {
		width: width,
		height: height,
		size: swiper.isHorizontal() ? width : height
	});
}
//# sourceMappingURL=updateSize.js.map