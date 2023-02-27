'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

exports.default = slideTo;

var _utils = require('../../shared/utils.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function slideTo() {
	var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.params.speed;
	var runCallbacks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
	var internal = arguments[3];
	var initial = arguments[4];

	if (typeof index !== 'number' && typeof index !== 'string') {
		throw new Error('The \'index\' argument cannot have type other than \'number\' or \'string\'. [' + (typeof index === 'undefined' ? 'undefined' : (0, _typeof3.default)(index)) + '] given.');
	}

	if (typeof index === 'string') {
		/**
   * The `index` argument converted from `string` to `number`.
   * @type {number}
   */
		var indexAsNumber = parseInt(index, 10);
		/**
   * Determines whether the `index` argument is a valid `number`
   * after being converted from the `string` type.
   * @type {boolean}
   */

		var isValidNumber = isFinite(indexAsNumber);

		if (!isValidNumber) {
			throw new Error('The passed-in \'index\' (string) couldn\'t be converted to \'number\'. [' + index + '] given.');
		} // Knowing that the converted `index` is a valid number,
		// we can update the original argument's value.


		index = indexAsNumber;
	}

	var swiper = this;
	var slideIndex = index;
	var timer = void 0;
	if (slideIndex < 0) slideIndex = 0;
	var params = swiper.params,
	    snapGrid = swiper.snapGrid,
	    slidesGrid = swiper.slidesGrid,
	    previousIndex = swiper.previousIndex,
	    activeIndex = swiper.activeIndex,
	    rtl = swiper.rtlTranslate,
	    wrapperEl = swiper.wrapperEl,
	    enabled = swiper.enabled;


	if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) {
		return false;
	}

	var skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
	var snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
	if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

	if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
		swiper.emit('beforeSlideChangeStart');
	}
	var translate = -snapGrid[snapIndex]; // Update progress

	swiper.updateProgress(translate); // Normalize slideIndex

	if (params.normalizeSlideIndex) {
		for (var i = 0; i < slidesGrid.length; i += 1) {
			var normalizedTranslate = -Math.floor(translate * 100);
			var normalizedGrid = Math.floor(slidesGrid[i] * 100);
			var normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
			if (typeof slidesGrid[i + 1] !== 'undefined') {
				if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
					slideIndex = i;
				} else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
					slideIndex = i + 1;
				}
			} else if (normalizedTranslate >= normalizedGrid) {
				slideIndex = i;
			}
		}
	} // Directions locks


	if (swiper.initialized && slideIndex !== activeIndex) {
		if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
			return false;
		}

		if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
			if ((activeIndex || 0) !== slideIndex) return false;
		}
	}

	var direction = void 0;
	if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset'; // Update Index

	if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
		swiper.updateActiveIndex(slideIndex); // Update Height

		if (params.autoHeight) {
			setTimeout(function () {
				swiper.updateAutoHeight();
			}, 0);
		}

		swiper.updateSlidesClasses();

		if (params.effect !== 'slide') {
			swiper.setTranslate(translate);
		}

		if (direction !== 'reset') {
			swiper.transitionStart(runCallbacks, direction);
			swiper.transitionEnd(runCallbacks, direction);
		}

		return false;
	}

	if (params.cssMode) {
		var isH = swiper.isHorizontal();
		var t = rtl ? translate : -translate;

		if (speed === 0) {
			var isVirtual = swiper.virtual && swiper.params.virtual.enabled;

			if (isVirtual) {
				swiper.wrapperEl.style.scrollSnapType = 'none';
				swiper._immediateVirtual = true;
			}

			wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;

			if (isVirtual) {
				requestAnimationFrame(function () {
					swiper.wrapperEl.style.scrollSnapType = '';
					swiper._swiperImmediateVirtual = false;
				});
			}
		} else {
			var _wrapperEl$scrollTo;

			if (!swiper.support.smoothScroll) {
				(0, _utils.animateCSSModeScroll)({
					swiper: swiper,
					targetPosition: t,
					side: isH ? 'left' : 'top'
				});
				return true;
			}

			wrapperEl.scrollTo((_wrapperEl$scrollTo = {}, (0, _defineProperty3.default)(_wrapperEl$scrollTo, isH ? 'left' : 'top', t), (0, _defineProperty3.default)(_wrapperEl$scrollTo, 'behavior', 'smooth'), _wrapperEl$scrollTo));
		}

		return true;
	}
	swiper.setTransition(speed);
	swiper.setTranslate(translate);
	swiper.updateActiveIndex(slideIndex);
	swiper.updateSlidesClasses();
	swiper.emit('beforeTransitionStart', speed, internal);
	swiper.transitionStart(runCallbacks, direction);

	if (speed === 0) {
		swiper.transitionEnd(runCallbacks, direction);
	} else if (!swiper.animating) {
		swiper.animating = true;

		if (!swiper.onSlideToWrapperTransitionEnd) {
			swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
				if (!swiper || swiper.destroyed) return;
				clearTimeout(timer);
				swiper.onSlideToWrapperTransitionEnd = null;
				delete swiper.onSlideToWrapperTransitionEnd;
				swiper.transitionEnd(runCallbacks, direction);
			};
		}
		timer = setTimeout(function () {
			if (swiper.onSlideToWrapperTransitionEnd) {
				swiper.onSlideToWrapperTransitionEnd();
			}
		}, speed);
	}

	return true;
}
//# sourceMappingURL=slideTo.js.map