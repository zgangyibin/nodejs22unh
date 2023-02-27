'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = transitionEnd;

var _transitionEmit = require('./transitionEmit.js');

var _transitionEmit2 = _interopRequireDefault(_transitionEmit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function transitionEnd() {
	var runCallbacks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	var direction = arguments[1];

	var swiper = this;
	var params = swiper.params;

	swiper.animating = false;
	if (params.cssMode) return;
	swiper.setTransition(0);
	(0, _transitionEmit2.default)({
		swiper: swiper,
		runCallbacks: runCallbacks,
		direction: direction,
		step: 'End'
	});
}
//# sourceMappingURL=transitionEnd.js.map