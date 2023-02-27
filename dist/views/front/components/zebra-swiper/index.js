'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = exports.Swiper = undefined;

var _core = require('./libs/core.js');

Object.defineProperty(exports, 'Swiper', {
	enumerable: true,
	get: function get() {
		return _interopRequireDefault(_core).default;
	}
});
Object.defineProperty(exports, 'default', {
	enumerable: true,
	get: function get() {
		return _interopRequireDefault(_core).default;
	}
});

var _core2 = _interopRequireDefault(_core);

var _autoplay = require('./modules/autoplay/autoplay.js');

var _autoplay2 = _interopRequireDefault(_autoplay);

var _freeMode = require('./modules/free-mode/free-mode.js');

var _freeMode2 = _interopRequireDefault(_freeMode);

var _effectFade = require('./modules/effect-fade/effect-fade.js');

var _effectFade2 = _interopRequireDefault(_effectFade);

var _effectCube = require('./modules/effect-cube/effect-cube.js');

var _effectCube2 = _interopRequireDefault(_effectCube);

var _effectCoverflow = require('./modules/effect-coverflow/effect-coverflow.js');

var _effectCoverflow2 = _interopRequireDefault(_effectCoverflow);

var _effectFlip = require('./modules/effect-flip/effect-flip.js');

var _effectFlip2 = _interopRequireDefault(_effectFlip);

var _effectCards = require('./modules/effect-cards/effect-cards.js');

var _effectCards2 = _interopRequireDefault(_effectCards);

var _effectCreative = require('./modules/effect-creative/effect-creative.js');

var _effectCreative2 = _interopRequireDefault(_effectCreative);

var _effectPanorama = require('./modules/effect-panorama/effect-panorama.js');

var _effectPanorama2 = _interopRequireDefault(_effectPanorama);

var _effectCarousel = require('./modules/effect-carousel/effect-carousel.js');

var _effectCarousel2 = _interopRequireDefault(_effectCarousel);

var _navigation = require('./modules/navigation/navigation.js');

var _navigation2 = _interopRequireDefault(_navigation);

var _pagination = require('./modules/pagination/pagination.js');

var _pagination2 = _interopRequireDefault(_pagination);

var _thumbs = require('./modules/thumbs/thumbs.js');

var _thumbs2 = _interopRequireDefault(_thumbs);

var _scrollbar = require('./modules/scrollbar/scrollbar.js');

var _scrollbar2 = _interopRequireDefault(_scrollbar);

var _virtual = require('./modules/virtual/virtual.js');

var _virtual2 = _interopRequireDefault(_virtual);

var _willChange = require('./modules/will-change/will-change.js');

var _willChange2 = _interopRequireDefault(_willChange);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modules = [_autoplay2.default, _freeMode2.default, _effectFade2.default, _effectCube2.default, _effectCoverflow2.default, _effectFlip2.default, _effectCards2.default, _effectCreative2.default, _effectPanorama2.default, _effectCarousel2.default, _navigation2.default, _pagination2.default, _thumbs2.default, _scrollbar2.default, _willChange2.default, _virtual2.default];
_core2.default.use(modules);
//# sourceMappingURL=index.js.map