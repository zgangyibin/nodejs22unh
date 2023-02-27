'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _SvgIcon = require('@/components/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// svg component

// register globally
_vue2.default.component('svg-icon', _SvgIcon2.default);

var req = require.context('./svg/svg', false, /\.svg$/);
var requireAll = function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
};
requireAll(req);
//# sourceMappingURL=index.js.map