'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = getSwiperTranslate;

var _utils = require('../../shared/utils.js');

function getSwiperTranslate() {
	var axis = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.isHorizontal() ? 'x' : 'y';

	var swiper = this;
	var params = swiper.params,
	    rtl = swiper.rtlTranslate,
	    translate = swiper.translate,
	    $wrapperEl = swiper.$wrapperEl;


	if (params.virtualTranslate) {
		return rtl ? -translate : translate;
	}

	if (params.cssMode) {
		return translate;
	}
	var currentTranslate = (0, _utils.getTranslate)(swiper, axis);
	if (rtl) currentTranslate = -currentTranslate;
	return currentTranslate || 0;
}
//# sourceMappingURL=getTranslate.js.map