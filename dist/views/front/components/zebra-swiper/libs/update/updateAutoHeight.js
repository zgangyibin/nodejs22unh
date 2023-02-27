'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(speed) {
		var swiper, activeSlides, isVirtual, newHeight, i, getSlideByIndex, index, height;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						swiper = this;
						activeSlides = [];
						isVirtual = swiper.virtual && swiper.params.virtual.enabled;
						newHeight = 0;
						i = void 0;


						if (typeof speed === 'number') {
							swiper.setTransition(speed);
						} else if (speed === true) {
							swiper.setTransition(swiper.params.speed);
						}

						getSlideByIndex = function getSlideByIndex(index) {
							if (isVirtual) {
								return swiper.slides.filter(function (el) {
									return parseInt(el.getAttribute('data-swiper-slide-index'), 10) === index;
								})[0];
							}

							return swiper.slides[index];
						}; // Find slides currently in view

						if (!(swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1)) {
							_context.next = 23;
							break;
						}

						if (!swiper.params.centeredSlides) {
							_context.next = 12;
							break;
						}

						swiper.visibleSlides.each(function (slide) {
							activeSlides.push(slide);
						});
						_context.next = 21;
						break;

					case 12:
						i = 0;

					case 13:
						if (!(i < Math.ceil(swiper.params.slidesPerView))) {
							_context.next = 21;
							break;
						}

						index = swiper.activeIndex + i;

						if (!(index > swiper.slides.length && !isVirtual)) {
							_context.next = 17;
							break;
						}

						return _context.abrupt('break', 21);

					case 17:
						activeSlides.push(getSlideByIndex(index));

					case 18:
						i += 1;
						_context.next = 13;
						break;

					case 21:
						_context.next = 24;
						break;

					case 23:
						activeSlides.push(getSlideByIndex(swiper.activeIndex));

					case 24:
						i = 0;

					case 25:
						if (!(i < activeSlides.length)) {
							_context.next = 34;
							break;
						}

						if (!(typeof activeSlides[i] !== 'undefined')) {
							_context.next = 31;
							break;
						}

						_context.next = 29;
						return activeSlides[i].getHeight();

					case 29:
						height = _context.sent;

						newHeight = height > newHeight ? height : newHeight;

					case 31:
						i += 1;
						_context.next = 25;
						break;

					case 34:
						// Update Height


						if (newHeight || newHeight === 0) swiper.$wrapperEl.css({
							height: (newHeight ? newHeight : '') + 'px'
						});

					case 35:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this);
	}));

	function updateAutoHeight(_x) {
		return _ref.apply(this, arguments);
	}

	return updateAutoHeight;
}();
//# sourceMappingURL=updateAutoHeight.js.map