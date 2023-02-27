'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = slidePrev;
function slidePrev() {
	var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
	var runCallbacks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	var internal = arguments[2];

	var swiper = this;
	var params = swiper.params,
	    animating = swiper.animating,
	    snapGrid = swiper.snapGrid,
	    slidesGrid = swiper.slidesGrid,
	    rtlTranslate = swiper.rtlTranslate,
	    enabled = swiper.enabled;

	if (!enabled) return swiper;

	if (params.loop) {
		if (animating && params.loopPreventsSlide) return false;
		swiper.loopFix();
	}

	var translate = rtlTranslate ? swiper.translate : -swiper.translate;

	function normalize(val) {
		if (val < 0) return -Math.floor(Math.abs(val));
		return Math.floor(val);
	}

	var normalizedTranslate = normalize(translate);
	var normalizedSnapGrid = snapGrid.map(function (val) {
		return normalize(val);
	});
	var prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];

	if (typeof prevSnap === 'undefined' && params.cssMode) {
		var prevSnapIndex = void 0;
		snapGrid.forEach(function (snap, snapIndex) {
			if (normalizedTranslate >= snap) {
				prevSnapIndex = snapIndex;
			}
		});

		if (typeof prevSnapIndex !== 'undefined') {
			prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
		}
	}

	var prevIndex = 0;

	if (typeof prevSnap !== 'undefined') {
		prevIndex = slidesGrid.indexOf(prevSnap);
		if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;

		if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
			prevIndex = prevIndex - swiper.slidesPerViewDynamic('previous', true) + 1;
			prevIndex = Math.max(prevIndex, 0);
		}
	}

	if (params.rewind && swiper.isBeginning) {
		return swiper.slideTo(swiper.slides.length - 1, speed, runCallbacks, internal);
	}

	setTimeout(function () {
		swiper.slideTo(prevIndex, speed, runCallbacks, internal);
	}, 30);
	return true;
}
//# sourceMappingURL=slidePrev.js.map