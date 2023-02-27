'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _onTouchStart = require('./onTouchStart.js');

var _onTouchStart2 = _interopRequireDefault(_onTouchStart);

var _onTouchMove = require('./onTouchMove.js');

var _onTouchMove2 = _interopRequireDefault(_onTouchMove);

var _onTouchEnd = require('./onTouchEnd.js');

var _onTouchEnd2 = _interopRequireDefault(_onTouchEnd);

var _onResize = require('./onResize.js');

var _onResize2 = _interopRequireDefault(_onResize);

var _onClick = require('./onClick.js');

var _onClick2 = _interopRequireDefault(_onClick);

var _onScroll = require('./onScroll.js');

var _onScroll2 = _interopRequireDefault(_onScroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dummyEventAttached = false;

function dummyEventListener() {}

var events = function events(swiper, method) {
	var params = swiper.params,
	    touchEvents = swiper.touchEvents,
	    wrapperEl = swiper.wrapperEl,
	    device = swiper.device,
	    support = swiper.support;

	var el = swiper.native;
	var capture = !!params.nested;
	var domMethod = method === 'on' ? 'on' : 'off';
	var swiperMethod = method;
	// Object.keys(swiper.eventsListeners).forEach((item) => {
	// 	if (method == 'off') {
	// 		swiper.native.off(item)
	// 	}
	// })
	if (!support.touch) {
		var desktopMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
		// el[domMethod](touchEvents.start, swiper.onTouchStart, false);
		if (document.querySelector('#' + swiper.$el.swiperElId)) {
			document.querySelector('#' + swiper.$el.swiperElId)[desktopMethod](touchEvents.start, swiper.onTouchStart, false);
		}
		document[desktopMethod](touchEvents.move, swiper.onTouchMove, capture);
		document[desktopMethod](touchEvents.end, swiper.onTouchEnd, false);
	} else {
		var passiveListener = touchEvents.start === 'touchstart' && support.passiveListener && params.passiveListeners ? {
			passive: true,
			capture: false
		} : false;

		// #ifdef VUE2
		// el[domMethod](touchEvents.start, swiper.onTouchStart, passiveListener);
		// el[domMethod](touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
		// 	passive: false,
		// 	capture
		// } : capture);
		// el[domMethod](touchEvents.end, swiper.onTouchEnd, passiveListener);
		// #endif


		if (touchEvents.cancel) {
			// #ifdef VUE2
			// el[domMethod](touchEvents.cancel, swiper.onTouchEnd, passiveListener);
			// #endif
		}
	}

	if (params.preventClicks || params.preventClicksPropagation) {
		// #ifdef VUE2
		// el[domMethod]('click', swiper.onClick, true);
		// #endif
	}

	if (params.cssMode) {
		// wrapperEl[domMethod]('scroll', swiper.onScroll);
	}

	if (params.updateOnWindowResize) {
		// swiper[swiperMethod](device.ios || device.android ? 'resize orientationchange observerUpdate' :
		// 	'resize observerUpdate', onResize, true);
	} else {
			// swiper[swiperMethod]('observerUpdate', onResize, true);
		}
};

function attachEvents() {
	var swiper = this;
	var params = swiper.params,
	    support = swiper.support;

	swiper.onTouchStart = _onTouchStart2.default.bind(swiper);
	swiper.onTouchMove = _onTouchMove2.default.bind(swiper);
	swiper.onTouchEnd = _onTouchEnd2.default.bind(swiper);
	if (params.cssMode) {
		swiper.onScroll = _onScroll2.default.bind(swiper);
	}

	swiper.onClick = _onClick2.default.bind(swiper);

	events(swiper, 'on');
}

function detachEvents() {
	var swiper = this;
	events(swiper, 'off');
}

exports.default = {
	attachEvents: attachEvents,
	detachEvents: detachEvents
};
//# sourceMappingURL=index.js.map