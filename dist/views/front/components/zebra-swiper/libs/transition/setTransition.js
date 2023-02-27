'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = setTransition;
function setTransition(duration, byController) {
	var swiper = this;
	if (!swiper.$wrapperEl) return;
	if (!swiper.params.cssMode) {
		swiper.$wrapperEl.transition(duration);
	}

	swiper.emit('setTransition', duration, byController);
}
//# sourceMappingURL=setTransition.js.map