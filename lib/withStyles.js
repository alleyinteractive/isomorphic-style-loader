'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InsertCssProvider = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = withStyles;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = require('hoist-non-react-statics');

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Context = _react2.default.createContext(function () {
  throw new Error('Please place <InsertCssProvider value={insertCss}> on upper position in the component tree.');
}); /**
     * Isomorphic CSS style loader for Webpack
     *
     * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.txt file in the root directory of this source tree.
     */

var InsertCssProvider = exports.InsertCssProvider = Context.Provider;
var InsertCssConsumer = Context.Consumer;

function withStyles() {
  for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {
    styles[_key] = arguments[_key];
  }

  return function wrapWithStyles(ComposedComponent) {
    var StyleAttacher = function (_Component) {
      (0, _inherits3.default)(StyleAttacher, _Component);

      function StyleAttacher() {
        (0, _classCallCheck3.default)(this, StyleAttacher);
        return (0, _possibleConstructorReturn3.default)(this, (StyleAttacher.__proto__ || (0, _getPrototypeOf2.default)(StyleAttacher)).apply(this, arguments));
      }

      (0, _createClass3.default)(StyleAttacher, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
          var _props;

          this.removeCss = (_props = this.props).insertCss.apply(_props, styles);
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          if (this.removeCss) {
            setTimeout(this.removeCss, 0);
          }
        }
      }, {
        key: 'render',
        value: function render() {
          return _react2.default.createElement(ComposedComponent, this.props.originalProps);
        }
      }]);
      return StyleAttacher;
    }(_react.Component);

    StyleAttacher.propTypes = {
      insertCss: _propTypes2.default.func.isRequired,
      // eslint-disable-next-line react/forbid-prop-types
      originalProps: _propTypes2.default.object.isRequired
    };

    var displayName = ComposedComponent.displayName || ComposedComponent.name || 'Component';

    var WithStyles = function WithStyles(props) {
      return _react2.default.createElement(
        InsertCssConsumer,
        null,
        function (insertCss) {
          return _react2.default.createElement(StyleAttacher, { insertCss: insertCss, originalProps: props });
        }
      );
    };

    WithStyles.displayName = 'WithStyles(' + displayName + ')';
    WithStyles.ComposedComponent = ComposedComponent;

    return (0, _hoistNonReactStatics2.default)(WithStyles, ComposedComponent);
  };
}