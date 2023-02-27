'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

exports.default = setGrabCursor;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setGrabCursor(moving) {
	var _el$setCss;

	var swiper = this;
	if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
	var el = swiper.params.touchEventsTarget === 'container' ? swiper.$el : swiper.$wrapperEl;
	el.setCss((_el$setCss = {
		cursor: 'move'
	}, (0, _defineProperty3.default)(_el$setCss, 'cursor', moving ? '-webkit-grabbing' : '-webkit-grab'), (0, _defineProperty3.default)(_el$setCss, 'cursor', moving ? '-moz-grabbin' : '-moz-grab'), (0, _defineProperty3.default)(_el$setCss, 'cursor', moving ? 'grabbing' : 'grab'), _el$setCss));
}
//# sourceMappingURL=setGrabCursor.js.map