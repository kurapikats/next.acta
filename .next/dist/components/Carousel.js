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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'd:\\projects\\acta.v3\\website\\components\\Carousel.js';


var Carousel = function (_Component) {
  (0, _inherits3.default)(Carousel, _Component);

  function Carousel() {
    (0, _classCallCheck3.default)(this, Carousel);

    return (0, _possibleConstructorReturn3.default)(this, (Carousel.__proto__ || (0, _getPrototypeOf2.default)(Carousel)).apply(this, arguments));
  }

  (0, _createClass3.default)(Carousel, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      $('.carousel').carousel({
        fullWidth: true,
        indicators: true
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'carousel carousel-slider', __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement('a', { className: 'carousel-item', href: '#one!', __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement('img', { src: '/static/img/1.jpg', __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      })), _react2.default.createElement('a', { className: 'carousel-item', href: '#two!', __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement('img', { src: '/static/img/2.jpg', __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      })), _react2.default.createElement('a', { className: 'carousel-item', href: '#three!', __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement('img', { src: '/static/img/3.jpg', __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      })), _react2.default.createElement('a', { className: 'carousel-item', href: '#four!', __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement('img', { src: '/static/img/4.jpg', __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      })));
    }
  }]);

  return Carousel;
}(_react.Component);

exports.default = Carousel;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXENhcm91c2VsLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRnJhZ21lbnQiLCJDYXJvdXNlbCIsIiQiLCJjYXJvdXNlbCIsImZ1bGxXaWR0aCIsImluZGljYXRvcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTLEFBQVc7Ozs7Ozs7OztJLEFBRU47Ozs7Ozs7Ozs7O3dDQUNDLEFBQ2xCO1FBQUEsQUFBRSxhQUFGLEFBQWU7bUJBQVMsQUFDWCxBQUNYO29CQUZGLEFBQXdCLEFBRVYsQUFFZjtBQUp5QixBQUN0Qjs7Ozs2QkFLSyxBQUNQOzZCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0UsY0FBQSxPQUFHLFdBQUgsQUFBYSxpQkFBZ0IsTUFBN0IsQUFBa0M7b0JBQWxDO3NCQUFBLEFBQ0U7QUFERjtnREFDTyxLQUFMLEFBQVM7b0JBQVQ7c0JBRkosQUFDRSxBQUNFLEFBRUY7QUFGRTsyQkFFRixjQUFBLE9BQUcsV0FBSCxBQUFhLGlCQUFnQixNQUE3QixBQUFrQztvQkFBbEM7c0JBQUEsQUFDRTtBQURGO2dEQUNPLEtBQUwsQUFBUztvQkFBVDtzQkFMSixBQUlFLEFBQ0UsQUFFRjtBQUZFOzJCQUVGLGNBQUEsT0FBRyxXQUFILEFBQWEsaUJBQWdCLE1BQTdCLEFBQWtDO29CQUFsQztzQkFBQSxBQUNFO0FBREY7Z0RBQ08sS0FBTCxBQUFTO29CQUFUO3NCQVJKLEFBT0UsQUFDRSxBQUVGO0FBRkU7MkJBRUYsY0FBQSxPQUFHLFdBQUgsQUFBYSxpQkFBZ0IsTUFBN0IsQUFBa0M7b0JBQWxDO3NCQUFBLEFBQ0U7QUFERjtnREFDTyxLQUFMLEFBQVM7b0JBQVQ7c0JBWk4sQUFDRSxBQVVFLEFBQ0UsQUFJUDtBQUpPOzs7Ozs7QUFyQjRCLEE7O2tCQUFqQixBIiwiZmlsZSI6IkNhcm91c2VsLmpzIiwic291cmNlUm9vdCI6ImQ6L3Byb2plY3RzL2FjdGEudjMvd2Vic2l0ZSJ9