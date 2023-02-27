"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.default = loopCreate;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loopCreate() {
	var swiper = this;
	var params = swiper.params,
	    $wrapperEl = swiper.$wrapperEl,
	    native = swiper.native; // Remove duplicated slides

	var $selector = $wrapperEl;
	var slides = native.children;

	if (params.loopFillGroupWithBlank) {
		var blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;

		if (blankSlidesNum !== params.slidesPerGroup) {
			native.loopBlankShow = true;
			native.loopBlankNumber = blankSlidesNum;
		}
	}

	if (params.slidesPerView === 'auto' && !params.loopedSlides) params.loopedSlides = slides.length;
	swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
	swiper.loopedSlides += params.loopAdditionalSlides;

	if (swiper.loopedSlides > slides.length) {
		swiper.loopedSlides = slides.length;
	}
	var prependSlides = [];
	var appendSlides = [];
	slides.forEach(function (el, index) {
		var slide = el;
		if (index < slides.length && index >= slides.length - swiper.loopedSlides) {
			prependSlides.push(el);
		}

		if (index < swiper.loopedSlides) {
			appendSlides.push(el);
		}
	});
	var list = [].concat((0, _toConsumableArray3.default)(swiper.native.value));
	var newList = [].concat((0, _toConsumableArray3.default)(list));
	swiper.originalDataList = [].concat((0, _toConsumableArray3.default)(swiper.native.value));
	for (var i = 0; i < appendSlides.length; i += 1) {
		newList.push(list[appendSlides[i].index]);
	}

	for (var _i = prependSlides.length - 1; _i >= 0; _i -= 1) {
		newList.unshift(list[prependSlides[_i].index]);
	}
	swiper.native.$emit("input", newList);
	return true;
}
//# sourceMappingURL=loopCreate.js.map