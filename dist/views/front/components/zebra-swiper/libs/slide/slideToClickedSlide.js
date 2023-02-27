'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = slideToClickedSlide;

var _utils = require('../../shared/utils.js');

function slideToClickedSlide() {
	var swiper = this;
	var params = swiper.params,
	    $wrapperEl = swiper.$wrapperEl;

	var slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
	var slideToIndex = swiper.clickedIndex;
	var realIndex = void 0;

	if (params.loop) {
		if (swiper.animating) return;
		// realIndex = parseInt($(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);
		realIndex = parseInt(swiper.activeIndex, 10);

		if (params.centeredSlides) {
			if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
				swiper.loopFix();
				slideToIndex = $wrapperEl.children('.' + params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]:not(.' + params.slideDuplicateClass + ')').eq(0).index();
				(0, _utils.nextTick)(function () {
					swiper.slideTo(slideToIndex);
				});
			} else {
				swiper.slideTo(slideToIndex);
			}
		} else if (slideToIndex > swiper.slides.length - slidesPerView) {
			swiper.loopFix();
			slideToIndex = $wrapperEl.children('.' + params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]:not(.' + params.slideDuplicateClass + ')').eq(0).index();
			(0, _utils.nextTick)(function () {
				swiper.slideTo(slideToIndex);
			});
		} else {
			swiper.slideTo(slideToIndex);
		}
	} else {
		swiper.slideTo(slideToIndex);
	}
}
//# sourceMappingURL=slideToClickedSlide.js.map