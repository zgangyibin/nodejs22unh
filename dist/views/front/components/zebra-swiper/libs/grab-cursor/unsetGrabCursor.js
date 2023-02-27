'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = unsetGrabCursor;
function unsetGrabCursor() {
	var swiper = this;
	if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
		return;
	}
	swiper[swiper.params.touchEventsTarget === 'container' ? '$el' : '$wrapperEl'].setCss({
		cursor: ''
	});
}
//# sourceMappingURL=unsetGrabCursor.js.map