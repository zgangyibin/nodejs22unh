'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = transitionEmit;
function transitionEmit(_ref) {
	var swiper = _ref.swiper,
	    runCallbacks = _ref.runCallbacks,
	    direction = _ref.direction,
	    step = _ref.step;
	var activeIndex = swiper.activeIndex,
	    previousIndex = swiper.previousIndex;

	var dir = direction;

	if (!dir) {
		if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
	}

	swiper.emit('transition' + step);

	if (runCallbacks && activeIndex !== previousIndex) {
		if (dir === 'reset') {
			swiper.emit('slideResetTransition' + step);
			return;
		}

		swiper.emit('slideChangeTransition' + step);

		if (dir === 'next') {
			swiper.emit('slideNextTransition' + step);
		} else {
			swiper.emit('slidePrevTransition' + step);
		}
	}
}
//# sourceMappingURL=transitionEmit.js.map