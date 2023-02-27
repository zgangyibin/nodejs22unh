'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _utils = require('../shared/utils.js');

var _getSupport = require('../shared/get-support.js');

var _getDevice = require('../shared/get-device.js');

var _getBrowser = require('../shared/get-browser.js');

var _moduleExtendParams = require('./moduleExtendParams.js');

var _moduleExtendParams2 = _interopRequireDefault(_moduleExtendParams);

var _eventsEmitter = require('./events-emitter.js');

var _eventsEmitter2 = _interopRequireDefault(_eventsEmitter);

var _index = require('./update/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('./translate/index.js');

var _index4 = _interopRequireDefault(_index3);

var _index5 = require('./transition/index.js');

var _index6 = _interopRequireDefault(_index5);

var _defaults = require('./defaults.js');

var _defaults2 = _interopRequireDefault(_defaults);

var _index7 = require('./classes/index.js');

var _index8 = _interopRequireDefault(_index7);

var _index9 = require('./check-overflow/index.js');

var _index10 = _interopRequireDefault(_index9);

var _index11 = require('./slide/index.js');

var _index12 = _interopRequireDefault(_index11);

var _index13 = require('./loop/index.js');

var _index14 = _interopRequireDefault(_index13);

var _index15 = require('./grab-cursor/index.js');

var _index16 = _interopRequireDefault(_index15);

var _index17 = require('./events/index.js');

var _index18 = _interopRequireDefault(_index17);

var _utils2 = require('./utils/utils.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prototypes = {
	eventsEmitter: _eventsEmitter2.default,
	update: _index2.default,
	checkOverflow: _index10.default,
	slide: _index12.default,
	loop: _index14.default,
	translate: _index4.default,
	transition: _index6.default,
	grabCursor: _index16.default,
	events: _index18.default,
	classes: _index8.default
};
var extendedDefaults = {};

var Swiper = function () {
	function Swiper() {
		(0, _classCallCheck3.default)(this, Swiper);

		var swiper = this;
		var params = void 0;
		var el = void 0;
		var native = void 0;

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') {
			params = args[0];
		} else if (args.length === 2 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') {
			params = args[0];
			native = args[1];
		} else {
			el = args[0];
			params = args[1];
			native = args[2];
		}
		if (!params) params = {};
		params = (0, _utils.extend)({}, params);
		if (el && !params.el) params.el = el;

		// Swiper Instance
		swiper.__swiper__ = true;
		swiper.support = (0, _getSupport.getSupport)();
		swiper.device = (0, _getDevice.getDevice)({
			userAgent: params.userAgent
		});
		swiper.browser = (0, _getBrowser.getBrowser)();

		swiper.eventsListeners = {};
		swiper.eventsAnyListeners = [];
		swiper.modules = [].concat((0, _toConsumableArray3.default)(swiper.__modules__));
		swiper.native = native;
		if (params.modules && Array.isArray(params.modules)) {
			var _swiper$modules;

			(_swiper$modules = swiper.modules).push.apply(_swiper$modules, (0, _toConsumableArray3.default)(params.modules));
		}
		var allModulesParams = {};
		swiper.modules.forEach(function (mod) {
			mod({
				swiper: swiper,
				extendParams: (0, _moduleExtendParams2.default)(params, allModulesParams),
				on: swiper.on.bind(swiper),
				once: swiper.once.bind(swiper),
				off: swiper.off.bind(swiper),
				emit: swiper.emit.bind(swiper)
			});
		}); // Extend defaults with modules params
		var swiperParams = (0, _utils.extend)({}, _defaults2.default, allModulesParams); // Extend defaults with passed params
		swiper.params = (0, _utils.extend)({}, swiperParams, extendedDefaults, params);
		swiper.originalParams = (0, _utils.extend)({}, swiper.params);
		swiper.passedParams = (0, _utils.extend)({}, params); // add event listeners

		if (swiper.params && swiper.params.on) {
			Object.keys(swiper.params.on).forEach(function (eventName) {
				swiper.on(eventName, swiper.params.on[eventName]);
			});
		}

		if (swiper.params && swiper.params.onAny) {
			swiper.onAny(swiper.params.onAny);
		} // Save Dom lib

		Object.assign(swiper, {
			enabled: swiper.params.enabled,
			el: el,
			// Classes
			classNames: [],
			// Slides
			slides: [],
			slidesGrid: [],
			snapGrid: [],
			slidesSizesGrid: [],

			// isDirection
			isHorizontal: function isHorizontal() {
				return swiper.params.direction === 'horizontal';
			},
			isVertical: function isVertical() {
				return swiper.params.direction === 'vertical';
			},


			// Indexes
			activeIndex: 0,
			realIndex: 0,
			//
			isBeginning: true,
			isEnd: false,
			// Props
			translate: 0,
			previousTranslate: 0,
			progress: 0,
			velocity: 0,
			animating: false,
			// Locks
			allowSlideNext: swiper.params.allowSlideNext,
			allowSlidePrev: swiper.params.allowSlidePrev,
			// Touch Events
			touchEvents: function touchEvents() {
				var touch = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
				var desktop = ['pointerdown', 'pointermove', 'pointerup'];
				swiper.touchEventsTouch = {
					start: touch[0],
					move: touch[1],
					end: touch[2],
					cancel: touch[3]
				};
				swiper.touchEventsDesktop = {
					start: desktop[0],
					move: desktop[1],
					end: desktop[2]
				};
				return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
			}(),
			touchEventsData: {
				isTouched: undefined,
				isMoved: undefined,
				allowTouchCallbacks: undefined,
				touchStartTime: undefined,
				isScrolling: undefined,
				currentTranslate: undefined,
				startTranslate: undefined,
				allowThresholdMove: undefined,
				// Form elements to match
				focusableElements: swiper.params.focusableElements,
				// Last click time
				lastClickTime: (0, _utils.now)(),
				clickTimeout: undefined,
				// Velocities
				velocities: [],
				allowMomentumBounce: undefined,
				isTouchEvent: undefined,
				startMoving: undefined
			},
			// Clicks
			allowClick: true,
			// Touches
			allowTouchMove: swiper.params.allowTouchMove,
			touches: {
				startX: 0,
				startY: 0,
				currentX: 0,
				currentY: 0,
				diff: 0
			},
			// Images
			imagesToLoad: [],
			imagesLoaded: 0,
			virtualList: [],
			virtualIndexList: []
		});
		swiper.emit('_swiper'); // Init

		if (swiper.params.init) {
			swiper.init();
		} // Return app instance
		return swiper;
	}

	(0, _createClass3.default)(Swiper, [{
		key: 'enable',
		value: function enable() {
			var swiper = this;
			if (swiper.enabled) return;
			swiper.enabled = true;
			if (swiper.params.grabCursor) {
				swiper.setGrabCursor();
			}
			swiper.emit('enable');
		}
	}, {
		key: 'disable',
		value: function disable() {
			var swiper = this;
			if (!swiper.enabled) return;
			swiper.enabled = false;
			if (swiper.params.grabCursor) {
				swiper.unsetGrabCursor();
			}
			swiper.emit('disable');
		}
	}, {
		key: 'setProgress',
		value: function setProgress(progress, speed) {
			var swiper = this;
			progress = Math.min(Math.max(progress, 0), 1);
			var min = swiper.minTranslate();
			var max = swiper.maxTranslate();
			var current = (max - min) * progress + min;
			swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
			swiper.updateActiveIndex();
			swiper.updateSlidesClasses();
		}
	}, {
		key: 'emitContainerClasses',
		value: function emitContainerClasses() {
			var swiper = this;
			if (!swiper.params._emitClasses || !swiper.el) return;
			var cls = swiper.native.contentClass.split(' ').filter(function (className) {
				return className.indexOf('swiper') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
			});
			swiper.emit('_containerClasses', cls.join(' '));
		}
	}, {
		key: 'getSlideClasses',
		value: function getSlideClasses(slideEl) {
			var swiper = this;
			return slideEl.slideClass.split(' ').filter(function (className) {
				return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
			}).join(' ');
		}
	}, {
		key: 'emitSlidesClasses',
		value: function emitSlidesClasses() {
			var swiper = this;
			if (!swiper.params._emitClasses || !swiper.el) return;
			var updates = [];
			swiper.slides.forEach(function (slideEl) {
				var classNames = swiper.getSlideClasses(slideEl);
				updates.push({
					slideEl: slideEl,
					classNames: classNames
				});
				swiper.emit('_slideClass', slideEl, classNames);
			});
			swiper.emit('_slideClasses', updates);
		}
	}, {
		key: 'slidesPerViewDynamic',
		value: function slidesPerViewDynamic() {
			var view = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'current';
			var exact = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			var swiper = this;
			var params = swiper.params,
			    slides = swiper.slides,
			    slidesGrid = swiper.slidesGrid,
			    slidesSizesGrid = swiper.slidesSizesGrid,
			    swiperSize = swiper.size,
			    activeIndex = swiper.activeIndex;

			var spv = 1;
			if (params.centeredSlides) {
				var slideSize = slides[activeIndex].swiperSlideSize;
				var breakLoop = void 0;
				for (var i = activeIndex + 1; i < slides.length; i += 1) {
					if (slides[i] && !breakLoop) {
						slideSize += slides[i].swiperSlideSize;
						spv += 1;
						if (slideSize > swiperSize) breakLoop = true;
					}
				}
				for (var _i = activeIndex - 1; _i >= 0; _i -= 1) {
					if (slides[_i] && !breakLoop) {
						slideSize += slides[_i].swiperSlideSize;
						spv += 1;
						if (slideSize > swiperSize) breakLoop = true;
					}
				}
			} else {
				// eslint-disable-next-line
				if (view === 'current') {
					for (var _i2 = activeIndex + 1; _i2 < slides.length; _i2 += 1) {
						var slideInView = exact ? slidesGrid[_i2] + slidesSizesGrid[_i2] - slidesGrid[activeIndex] < swiperSize : slidesGrid[_i2] - slidesGrid[activeIndex] < swiperSize;
						if (slideInView) {
							spv += 1;
						}
					}
				} else {
					// previous
					for (var _i3 = activeIndex - 1; _i3 >= 0; _i3 -= 1) {
						var _slideInView = slidesGrid[activeIndex] - slidesGrid[_i3] < swiperSize;
						if (_slideInView) {
							spv += 1;
						}
					}
				}
			}
			return spv;
		}
	}, {
		key: 'changeDirection',
		value: function changeDirection(newDirection, needUpdate) {
			if (needUpdate === void 0) {
				needUpdate = true;
			}

			var swiper = this;
			var currentDirection = swiper.params.direction;

			if (!newDirection) {
				// eslint-disable-next-line
				newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
			}

			if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
				return swiper;
			}

			swiper.$wrapperEl.removeClass('' + swiper.params.containerModifierClass + currentDirection);
			swiper.$wrapperEl.addClass('' + swiper.params.containerModifierClass + newDirection);
			swiper.emitContainerClasses();
			swiper.params.direction = newDirection;
			swiper.slides.forEach(function (slideEl) {
				if (newDirection === 'vertical') {
					slideEl.css({
						width: ''
					});
				} else {
					slideEl.css({
						height: ''
					});
				}
			});
			swiper.emit('changeDirection');
			if (needUpdate) swiper.update();
			return swiper;
		}
	}, {
		key: 'update',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(el) {
				var swiper, snapGrid, params, setTranslate, translated;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								setTranslate = function setTranslate() {
									var translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
									var newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
									swiper.setTranslate(newTranslate);
									swiper.updateActiveIndex();
									swiper.updateSlidesClasses();
								};

								swiper = this;

								if (!(!swiper || swiper.destroyed)) {
									_context.next = 4;
									break;
								}

								return _context.abrupt('return');

							case 4:
								snapGrid = swiper.snapGrid, params = swiper.params; // Breakpoints


								_context.next = 7;
								return swiper.native.getRect();

							case 7:
								el = _context.sent;

								if (el) {
									_context.next = 10;
									break;
								}

								return _context.abrupt('return', false);

							case 10:
								Object.assign(swiper, {
									el: el,
									$el: swiper.native
								});
								swiper.emit('beforeUpdate');
								if (params.breakpoints) {
									swiper.setBreakpoint();
								}
								swiper.updateSize();
								swiper.updateSlides();
								swiper.updateProgress();
								swiper.updateSlidesClasses();

								translated = void 0;


								if (swiper.params.freeMode && swiper.params.freeMode.enabled) {
									setTranslate();

									if (swiper.params.autoHeight) {
										swiper.updateAutoHeight();
									}
								} else {
									if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
										translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
									} else {
										translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
									}

									if (!translated) {
										setTranslate();
									}
								}

								if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
									swiper.checkOverflow();
								}
								swiper.emit('update');

							case 21:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function update(_x3) {
				return _ref.apply(this, arguments);
			}

			return update;
		}()
	}, {
		key: 'mount',
		value: function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(el) {
				var swiper;
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								swiper = this;

								if (!swiper.mounted) {
									_context2.next = 3;
									break;
								}

								return _context2.abrupt('return', true);

							case 3:
								_context2.next = 5;
								return swiper.native.getRect();

							case 5:
								el = _context2.sent;

								if (el) {
									_context2.next = 8;
									break;
								}

								return _context2.abrupt('return', false);

							case 8:
								swiper.emit('beforeMount'); // Set breakpoint
								// let $wrapperEl = new DomSimulation(swiper.native);
								// let $el = new DomSimulation(swiper.native);
								// if (swiper.native && swiper.native.children && swiper.native.children.length) {
								// 	swiper.native.children.forEach((item) => {
								// 		item.$itemEl = new ChildDomSimulation(item);
								// 	})
								// }
								Object.assign(swiper, {
									$el: swiper.native,
									el: el,
									$wrapperEl: swiper.native,
									wrapperEl: swiper.native,
									mounted: true
								});

								return _context2.abrupt('return', true);

							case 11:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function mount(_x4) {
				return _ref2.apply(this, arguments);
			}

			return mount;
		}()
	}, {
		key: 'init',
		value: function () {
			var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(el) {
				var swiper, mounted;
				return _regenerator2.default.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								swiper = this;

								if (!swiper.initialized) {
									_context3.next = 3;
									break;
								}

								return _context3.abrupt('return', swiper);

							case 3:
								_context3.next = 5;
								return swiper.mount(el);

							case 5:
								mounted = _context3.sent;

								if (!(mounted === false)) {
									_context3.next = 8;
									break;
								}

								return _context3.abrupt('return', swiper);

							case 8:
								swiper.emit('beforeInit'); // Set breakpoint

								swiper.addClasses(); // Create loop

								if (swiper.params.loop) {
									swiper.loopCreate();
								} // Update size

								swiper.updateSize(); // Update slides

								swiper.updateSlides();

								if (swiper.params.watchOverflow) {
									swiper.checkOverflow();
								} // Set Grab Cursor


								if (swiper.params.grabCursor && swiper.enabled) {
									swiper.setGrabCursor();
								}

								// if (swiper.params.loop) {
								// 	swiper.on("update", () => {
								// 		swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params
								// 			.runCallbacksOnInit,
								// 			false, true);
								// 	})
								// } else {
								// 	swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
								// } // Attach events
								// Slide To Initial Slide
								if (swiper.params.loop) {
									swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit, false, true);
								} else {
									swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
								}
								swiper.attachEvents(); // Init Flag
								swiper.initialized = true; // Emit
								swiper.emit('init');
								swiper.emit('afterInit');
								return _context3.abrupt('return', swiper);

							case 21:
							case 'end':
								return _context3.stop();
						}
					}
				}, _callee3, this);
			}));

			function init(_x5) {
				return _ref3.apply(this, arguments);
			}

			return init;
		}()
	}, {
		key: 'destroy',
		value: function destroy() {
			var deleteInstance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
			var cleanStyles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

			var swiper = this;
			var params = swiper.params,
			    $el = swiper.$el,
			    $wrapperEl = swiper.$wrapperEl,
			    slides = swiper.slides;


			if (typeof swiper.params === 'undefined' || swiper.destroyed) {
				return null;
			}

			swiper.emit('beforeDestroy'); // Init Flag

			swiper.initialized = false; // Detach events

			swiper.detachEvents(); // Destroy loop

			if (params.loop) {
				swiper.loopDestroy();
			} // Cleanup styles

			swiper.emit('destroy'); // Detach emitter events

			Object.keys(swiper.eventsListeners).forEach(function (eventName) {
				swiper.off(eventName);
			});

			if (deleteInstance !== false) {
				(0, _utils.deleteProps)(swiper);
			}

			swiper.destroyed = true;
			return null;
		}
	}], [{
		key: 'extendDefaults',
		value: function extendDefaults(newDefaults) {
			(0, _utils.extend)(extendedDefaults, newDefaults);
		}
	}, {
		key: 'installModule',
		value: function installModule(mod) {
			if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
			var modules = Swiper.prototype.__modules__;

			if (typeof mod === 'function' && modules.indexOf(mod) < 0) {
				modules.push(mod);
			}
		}
	}, {
		key: 'use',
		value: function use(module) {
			if (Array.isArray(module)) {
				module.forEach(function (m) {
					return Swiper.installModule(m);
				});
				return Swiper;
			}

			Swiper.installModule(module);
			return Swiper;
		}
	}, {
		key: 'extendedDefaults',
		get: function get() {
			return extendedDefaults;
		}
	}, {
		key: 'defaults',
		get: function get() {
			return _defaults2.default;
		}
	}]);
	return Swiper;
}();

Object.keys(prototypes).forEach(function (prototypeGroup) {
	Object.keys(prototypes[prototypeGroup]).forEach(function (protoMethod) {
		Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
	});
});
exports.default = Swiper;
//# sourceMappingURL=core.js.map