'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = slideNext;
function slideNext() {
	var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
	var runCallbacks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	var internal = arguments[2];

	var swiper = this;
	var animating = swiper.animating,
	    enabled = swiper.enabled,
	    params = swiper.params;

	if (!enabled) return swiper;
	var perGroup = params.slidesPerGroup;

	if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
		perGroup = Math.max(swiper.slidesPerViewDynamic('current', true), 1);
	}

	var increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;

	if (params.loop) {
		if (animating && params.loopPreventsSlide) return false;
		swiper.loopFix();
	}

	if (params.rewind && swiper.isEnd) {
		return swiper.slideTo(0, speed, runCallbacks, internal);
	}
	setTimeout(function () {
		swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
	}, 30);
	return true;
}
//# sourceMappingURL=slideNext.js.map