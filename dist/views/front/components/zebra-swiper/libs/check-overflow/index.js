'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
function checkOverflow() {
	var swiper = this;
	var wasLocked = swiper.isLocked,
	    params = swiper.params;
	var slidesOffsetBefore = params.slidesOffsetBefore;


	if (slidesOffsetBefore) {
		var lastSlideIndex = swiper.slides.length - 1;
		var lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
		swiper.isLocked = swiper.size > lastSlideRightEdge;
	} else {
		swiper.isLocked = swiper.snapGrid.length === 1;
	}

	if (params.allowSlideNext === true) {
		swiper.allowSlideNext = !swiper.isLocked;
	}

	if (params.allowSlidePrev === true) {
		swiper.allowSlidePrev = !swiper.isLocked;
	}

	if (wasLocked && wasLocked !== swiper.isLocked) {
		swiper.isEnd = false;
	}

	if (wasLocked !== swiper.isLocked) {
		swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
	}
}

exports.default = {
	checkOverflow: checkOverflow
};
//# sourceMappingURL=index.js.map