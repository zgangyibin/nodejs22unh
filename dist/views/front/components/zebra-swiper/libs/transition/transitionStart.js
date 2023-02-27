'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = transitionStart;

var _transitionEmit = require('./transitionEmit.js');

var _transitionEmit2 = _interopRequireDefault(_transitionEmit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function transitionStart() {
	var runCallbacks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	var direction = arguments[1];

	var swiper = this;
	var params = swiper.params;

	if (params.cssMode) return;

	if (params.autoHeight) {
		swiper.updateAutoHeight();
	}

	(0, _transitionEmit2.default)({
		swiper: swiper,
		runCallbacks: runCallbacks,
		direction: direction,
		step: 'Start'
	});
}
//# sourceMappingURL=transitionStart.js.map