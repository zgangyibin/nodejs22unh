'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

exports.default = moduleExtendParams;

var _utils = require('../shared/utils.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function moduleExtendParams(params, allModulesParams) {
	return function extendParams() {
		var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		var moduleParamName = Object.keys(obj)[0];
		var moduleParams = obj[moduleParamName];

		if ((typeof moduleParams === 'undefined' ? 'undefined' : (0, _typeof3.default)(moduleParams)) !== 'object' || moduleParams === null) {
			(0, _utils.extend)(allModulesParams, obj);
			return;
		}

		if (['navigation', 'pagination', 'scrollbar'].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) {
			params[moduleParamName] = {
				auto: true
			};
		}

		if (!(moduleParamName in params && 'enabled' in moduleParams)) {
			(0, _utils.extend)(allModulesParams, obj);
			return;
		}

		if (params[moduleParamName] === true) {
			params[moduleParamName] = {
				enabled: true
			};
		}

		if ((0, _typeof3.default)(params[moduleParamName]) === 'object' && !('enabled' in params[moduleParamName])) {
			params[moduleParamName].enabled = true;
		}

		if (!params[moduleParamName]) params[moduleParamName] = {
			enabled: false
		};
		(0, _utils.extend)(allModulesParams, obj);
	};
}
//# sourceMappingURL=moduleExtendParams.js.map