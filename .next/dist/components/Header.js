'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _NavBar = require('../components/NavBar');

var _NavBar2 = _interopRequireDefault(_NavBar);

var _SideNav = require('../components/SideNav');

var _SideNav2 = _interopRequireDefault(_SideNav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'd:\\projects\\acta.v3\\website\\components\\Header.js';


var Header = function (_Component) {
  (0, _inherits3.default)(Header, _Component);

  function Header() {
    (0, _classCallCheck3.default)(this, Header);

    return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).apply(this, arguments));
  }

  (0, _createClass3.default)(Header, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      $('.button-sidenav').sideNav({
        edge: 'right',
        closeOnClick: true,
        draggable: true
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_react.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement('meta', { charset: 'utf-8', __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), _react2.default.createElement('meta', { 'http-equiv': 'x-ua-compatible', content: 'ie=edge', __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }), _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, 'Acta Medica Philippina : The National Health Science Journal'), _react2.default.createElement('meta', { name: 'description', content: 'Acta Medica Philippina Official Website', __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no', __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/icon?family=Material+Icons', rel: 'stylesheet', __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }), _react2.default.createElement('script', { type: 'text/javascript', src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js', __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }), _react2.default.createElement('script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js', __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      })), _react2.default.createElement(_NavBar2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }), _react2.default.createElement(_SideNav2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }));
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEhlYWRlci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZyYWdtZW50IiwiSGVhZCIsIk5hdkJhciIsIlNpZGVOYXYiLCJIZWFkZXIiLCIkIiwic2lkZU5hdiIsImVkZ2UiLCJjbG9zZU9uQ2xpY2siLCJkcmFnZ2FibGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTLEFBQVc7Ozs7QUFDM0IsQUFBTzs7OztBQUVQLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWE7Ozs7Ozs7OztJLEFBRWQ7Ozs7Ozs7Ozs7O3dDQUNnQixBQUNsQjtRQUFBLEFBQUUsbUJBQUYsQUFBcUI7Y0FBUSxBQUNyQixBQUNOO3NCQUYyQixBQUViLEFBQ2Q7bUJBSEYsQUFBNkIsQUFHaEIsQUFFZDtBQUw4QixBQUMzQjs7Ozs2QkFNSyxBQUNQOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsaURBQ1EsU0FBTixBQUFjO29CQUFkO3NCQURGLEFBQ0UsQUFDQTtBQURBO2tEQUNNLGNBQU4sQUFBaUIsbUJBQWtCLFNBQW5DLEFBQTJDO29CQUEzQztzQkFGRixBQUVFLEFBQ0E7QUFEQTswQkFDQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FIRixBQUdFLEFBQ0EseUdBQU0sTUFBTixBQUFXLGVBQWMsU0FBekIsQUFBaUM7b0JBQWpDO3NCQUpGLEFBSUUsQUFDQTtBQURBO2tEQUNNLE1BQU4sQUFBVyxZQUFXLFNBQXRCLEFBQThCO29CQUE5QjtzQkFMRixBQUtFLEFBRUE7QUFGQTtrREFFTSxLQUFOLEFBQVUsY0FBYSxNQUF2QixBQUE0QjtvQkFBNUI7c0JBUEYsQUFPRSxBQUNBO0FBREE7a0RBQ00sTUFBTixBQUFXLDJEQUEwRCxLQUFyRSxBQUF5RTtvQkFBekU7c0JBUkYsQUFRRSxBQUNBO0FBREE7a0RBQ00sS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEI7b0JBQTVCO3NCQVRGLEFBU0UsQUFFQTtBQUZBO29EQUVRLE1BQVIsQUFBYSxtQkFBa0IsS0FBL0IsQUFBbUM7b0JBQW5DO3NCQVhGLEFBV0UsQUFDQTtBQURBO29EQUNRLEtBQVIsQUFBWTtvQkFBWjtzQkFiSixBQUNFLEFBWUUsQUFHRjtBQUhFOzJCQUdGLEFBQUM7O29CQUFEO3NCQWhCRixBQWdCRSxBQUNBO0FBREE7QUFBQSwwQkFDQSxBQUFDOztvQkFBRDtzQkFsQkosQUFDRSxBQWlCRSxBQUdMO0FBSEs7QUFBQTs7Ozs7QUE1QmEsQSxBQWtDckI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiSGVhZGVyLmpzIiwic291cmNlUm9vdCI6ImQ6L3Byb2plY3RzL2FjdGEudjMvd2Vic2l0ZSJ9