'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.screenDeep = undefined;

var _screen = require('./screen');

var _screen2 = _interopRequireDefault(_screen);

var _isAuthorized = require('./isAuthorized');

var _isAuthorized2 = _interopRequireDefault(_isAuthorized);

var _screenDeep2 = require('./screenDeep');

var _screenDeep3 = _interopRequireDefault(_screenDeep2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.screenDeep = _screenDeep3.default;

exports.default = function (Model, rules) {
  Model.security = rules;
  Model.defineStatic('authorized', _isAuthorized2.default.bind(null, Model.security));
  Model.define('authorized', function (type, user) {
    return Model.authorized(type, user, this);
  });
  Model.defineStatic('screen', _screen2.default.bind(null, Model.security));
  Model.define('screen', function (type, user) {
    return Model.screen(type, user, this);
  });
  return Model;
};