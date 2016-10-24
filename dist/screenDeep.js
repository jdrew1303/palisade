'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _lodash = require('lodash.reduce');

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = require('lodash.isdate');

var _lodash4 = _interopRequireDefault(_lodash3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var screenDeep = function screenDeep(user, data, returnEmpty) {
  if ((0, _lodash4.default)(data)) return data.toISOString();

  // check if the user can even see the doc
  if ((typeof data === 'undefined' ? 'undefined' : (0, _typeof3.default)(data)) === 'object' && !Array.isArray(data)) {
    if (data.authorized && !data.authorized('read', user)) {
      if (returnEmpty) return;
      return Array.isArray(data) ? [] : {};
    }
    // single instance w/ lens
    if (data.screen) {
      return data.screen('read', user);
    }

    // object with values as data
    return (0, _lodash2.default)(data, function (p, v, k) {
      if (!data.hasOwnProperty(k)) return;
      var nv = screenDeep(user, v, true);
      if (typeof nv !== 'undefined') p[k] = nv;
      return p;
    }, {});
  }

  // array of data
  if (Array.isArray(data)) {
    return (0, _lodash2.default)(data, function (p, v) {
      var nv = screenDeep(user, v, true);
      if (typeof nv !== 'undefined') p.push(nv);
      return p;
    }, []);
  }

  return data;
};

exports.default = screenDeep;
module.exports = exports['default'];