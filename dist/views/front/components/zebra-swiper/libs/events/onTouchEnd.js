'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = onTouchEnd;

var _utils = require('../../shared/utils.js');

function onTouchEnd(event) {
	var swiper = this;
	var data = swiper.touchEventsData;
	var params = swiper.params,
	    touches = swiper.touches,
	    rtl = swiper.rtlTranslate,
	    slidesGrid = swiper.slidesGrid,
	    enabled = swiper.enabled;

	if (!enabled) return;
	var e = event;
	if (e.originalEvent) e = e.originalEvent;

	if (data.allowTouchCallbacks) {
		swiper.emit('touch-end', e);
	}

	data.allowTouchCallbacks = false;

	if (!data.isTouched) {
		if (data.isMoved && params.grabCursor) {
			swiper.setGrabCursor(false);
		}

		data.isMoved = false;
		data.startMoving = false;
		return;
	}

	if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
		swiper.setGrabCursor(false);
	}

	var touchEndTime = (0, _utils.now)();
	var timeDiff = touchEndTime - data.touchStartTime; // Tap, doubleTap, Click

	if (swiper.allowClick) {
		var pathTree = e.path || e.composedPath && e.composedPath();
		// swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
		swiper.emit('tap click', e);

		if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
			swiper.emit('doubleTap doubleClick', e);
		}
	}

	data.lastClickTime = (0, _utils.now)();
	(0, _utils.nextTick)(function () {
		if (!swiper.destroyed) swiper.allowClick = true;
	});

	if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
		data.isTouched = false;
		data.isMoved = false;
		data.startMoving = false;
		return;
	}

	data.isTouched = false;
	data.isMoved = false;
	data.startMoving = false;
	var currentPos = void 0;

	if (params.followFinger) {
		currentPos = rtl ? swiper.translate : -swiper.translate;
	} else {
		currentPos = -data.currentTranslate;
	}

	if (params.cssMode) {
		return;
	}

	if (swiper.params.freeMode && params.freeMode.enabled) {
		swiper.freeMode.onTouchEnd({
			currentPos: currentPos
		});
		return;
	}

	var stopIndex = 0;
	var groupSize = swiper.slidesSizesGrid[0];

	for (var i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
		var _increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
		if (typeof slidesGrid[i + _increment] !== 'undefined') {
			if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + _increment]) {
				stopIndex = i;
				groupSize = slidesGrid[i + _increment] - slidesGrid[i];
			}
		} else if (currentPos >= slidesGrid[i]) {
			stopIndex = i;
			groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
		}
	}

	var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
	var increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
	if (timeDiff > params.longSwipesMs) {
		if (!params.longSwipes) {
			swiper.slideTo(swiper.activeIndex);
			return;
		}

		if (swiper.swipeDirection === 'next') {
			if (ratio >= params.longSwipesRatio) swiper.slideTo(stopIndex + increment);else swiper.slideTo(stopIndex);
		}

		if (swiper.swipeDirection === 'prev') {
			if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment);else swiper.slideTo(stopIndex);
		}
	} else {
		if (!params.shortSwipes) {
			swiper.slideTo(swiper.activeIndex);
			return;
		}

		var isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);

		if (!isNavButtonTarget) {
			if (swiper.swipeDirection === 'next') {
				swiper.slideTo(stopIndex + increment);
			}

			if (swiper.swipeDirection === 'prev') {
				swiper.slideTo(stopIndex);
			}
		} else if (e.target === swiper.navigation.nextEl) {
			swiper.slideTo(stopIndex + increment);
		} else {
			swiper.slideTo(stopIndex);
		}
	}
}
//# sourceMappingURL=onTouchEnd.js.map