'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _sequelize = require('sequelize');

var _config = require('../config.json');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sequelize = new _sequelize.Sequelize(_config2.default.dbConnection.database, _config2.default.dbConnection.username, _config2.default.dbConnection.password, {
	host: 'localhost',
	port: '3307',
	dialect: _config2.default.dbConnection.dbtype,
	logging: false
});

exports.default = sequelize;
//# sourceMappingURL=sequelize.js.map