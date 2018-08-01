"use strict";

var _slicedToArray2 = require("babel-runtime/helpers/slicedToArray");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Manifest of rendered module ids
var renderedModules = [];

/**
 * Get CSS content from a module as a string
 */
function getCss(styles) {
  var stylesToRender = styles.filter(function (module) {
    var _module = (0, _slicedToArray3.default)(module, 1),
        moduleId = _module[0];

    // Check if we've already rendered a module with this ID


    if (!renderedModules.includes(moduleId)) {
      renderedModules.push(moduleId);
      return module;
    }

    return false;
  });
  stylesToRender.toString = styles.toString;

  return stylesToRender.toString();
}

module.exports = getCss;