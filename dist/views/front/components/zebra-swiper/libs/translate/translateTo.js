'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

exports.default = translateTo;

var _utils = require('../../shared/utils.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function translateTo() {
	var translate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.params.speed;
	var runCallbacks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
	var translateBounds = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
	var internal = arguments[4];

	var swiper = this;
	var timer = void 0;
	var params = swiper.params,
	    wrapperEl = swiper.wrapperEl;


	if (swiper.animating && params.preventInteractionOnTransition) {
		return false;
	}

	var minTranslate = swiper.minTranslate();
	var maxTranslate = swiper.maxTranslate();
	var newTranslate = void 0;
	if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate; // Update progress

	swiper.updateProgress(newTranslate);

	if (params.cssMode) {
		var isH = swiper.isHorizontal();

		if (speed === 0) {
			wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
		} else {
			var _wrapperEl$scrollTo;

			if (!swiper.support.smoothScroll) {
				(0, _utils.animateCSSModeScroll)({
					swiper: swiper,
					targetPosition: -newTranslate,
					side: isH ? 'left' : 'top'
				});
				return true;
			}

			wrapperEl.scrollTo((_wrapperEl$scrollTo = {}, (0, _defineProperty3.default)(_wrapperEl$scrollTo, isH ? 'left' : 'top', -newTranslate), (0, _defineProperty3.default)(_wrapperEl$scrollTo, 'behavior', 'smooth'), _wrapperEl$scrollTo));
		}

		return true;
	}

	if (speed === 0) {
		swiper.setTransition(0);
		swiper.setTranslate(newTranslate);

		if (runCallbacks) {
			swiper.emit('beforeTransitionStart', speed, internal);
			swiper.emit('transitionEnd');
		}
	} else {
		swiper.setTransition(speed);
		swiper.setTranslate(newTranslate);

		if (runCallbacks) {
			swiper.emit('beforeTransitionStart', speed, internal);
			swiper.emit('transitionStart');
		}

		if (!swiper.animating) {
			swiper.animating = true;

			if (!swiper.onTranslateToWrapperTransitionEnd) {
				swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
					if (!swiper || swiper.destroyed) return;
					if (e.target !== this) return;
					clearTimeout(timer);
					swiper.onTranslateToWrapperTransitionEnd = null;
					delete swiper.onTranslateToWrapperTransitionEnd;

					if (runCallbacks) {
						swiper.emit('transitionEnd');
					}
				};
			}
			timer = setTimeout(function () {
				swiper.onTranslateToWrapperTransitionEnd();
			}, speed);
		}
	}

	return true;
}
//# sourceMappingURL=translateTo.js.map