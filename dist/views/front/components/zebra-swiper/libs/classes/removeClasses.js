'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeClasses;
function removeClasses() {
  var swiper = this;
  var $el = swiper.$el,
      classNames = swiper.classNames;

  $el.removeClass(classNames.join(' '));
  swiper.emitContainerClasses();
}
//# sourceMappingURL=removeClasses.js.map