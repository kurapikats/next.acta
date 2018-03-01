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

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'd:\\projects\\acta.v3\\website\\components\\NavBar.js';


var NavBar = function (_Component) {
  (0, _inherits3.default)(NavBar, _Component);

  function NavBar() {
    (0, _classCallCheck3.default)(this, NavBar);

    return (0, _possibleConstructorReturn3.default)(this, (NavBar.__proto__ || (0, _getPrototypeOf2.default)(NavBar)).apply(this, arguments));
  }

  (0, _createClass3.default)(NavBar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      $('.dropdown-button').dropdown({
        constrainWidth: false
      });
      $('.button-collapse').sideNav();

      $('.nav-wrapper .right').addClass('animated fadeIn');
      $('.scrollspy').scrollSpy();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { id: 'top', className: 'jsx-1707814008' + ' ' + 'scrollspy navbar-fixed',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement('ul', { id: 'archives', className: 'jsx-1707814008' + ' ' + 'dropdown-content',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement('li', {
        className: 'jsx-1707814008',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement('a', { href: '#!', className: 'jsx-1707814008',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, '1989 - 2007')), _react2.default.createElement('li', {
        className: 'jsx-1707814008',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react2.default.createElement('a', { href: '#!', className: 'jsx-1707814008',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, '2017')), _react2.default.createElement('li', {
        className: 'jsx-1707814008',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement('a', { href: '#!', className: 'jsx-1707814008',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, '2016')), _react2.default.createElement('li', {
        className: 'jsx-1707814008',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement('a', { href: '#!', className: 'jsx-1707814008',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, '2015')), _react2.default.createElement('li', {
        className: 'jsx-1707814008',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react2.default.createElement('a', { href: '#!', className: 'jsx-1707814008',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, '2014')), _react2.default.createElement('li', {
        className: 'jsx-1707814008',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement('a', { href: '#!', className: 'jsx-1707814008',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, '2013')), _react2.default.createElement('li', {
        className: 'jsx-1707814008',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement('a', { href: '#!', className: 'jsx-1707814008',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, '2012')), _react2.default.createElement('li', {
        className: 'jsx-1707814008',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement('a', { href: '#!', className: 'jsx-1707814008',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, '2011')), _react2.default.createElement('li', {
        className: 'jsx-1707814008',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement('a', { href: '#!', className: 'jsx-1707814008',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, '2010')), _react2.default.createElement('li', {
        className: 'jsx-1707814008',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement('a', { href: '#!', className: 'jsx-1707814008',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, '2019')), _react2.default.createElement('li', {
        className: 'jsx-1707814008',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement('a', { href: '#!', className: 'jsx-1707814008',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, '2008'))), _react2.default.createElement('nav', {
        className: 'jsx-1707814008',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-1707814008' + ' ' + 'nav-wrapper maroon',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement('a', {
        style: { marginLeft: 10 },

        prefetch: true,
        href: '#',
        className: 'jsx-1707814008' + ' ' + 'brand-logo left waves-effect',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, 'AMP Logo')), _react2.default.createElement('ul', {
        className: 'jsx-1707814008' + ' ' + 'right',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement('li', {
        className: 'jsx-1707814008',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/page-2', __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement('a', {
        className: 'jsx-1707814008' + ' ' + 'waves-effect',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, 'Subscriptions'))), _react2.default.createElement('li', {
        className: 'jsx-1707814008',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/page-2', __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement('a', {
        className: 'jsx-1707814008' + ' ' + 'waves-effect',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, 'Membership'))), _react2.default.createElement('li', {
        className: 'jsx-1707814008',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react2.default.createElement('a', { href: '#contact', className: 'jsx-1707814008' + ' ' + 'waves-effect',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, 'Contact Us')), _react2.default.createElement('li', {
        className: 'jsx-1707814008',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react2.default.createElement('a', {
        href: '#!',
        'data-activates': 'archives',
        className: 'jsx-1707814008' + ' ' + 'dropdown-button',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, 'Archives', _react2.default.createElement('i', {
        className: 'jsx-1707814008' + ' ' + 'material-icons right',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, 'arrow_drop_down'))), _react2.default.createElement('li', {
        className: 'jsx-1707814008',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, _react2.default.createElement('a', {
        href: '#!',
        'data-activates': 'slide-out',
        className: 'jsx-1707814008' + ' ' + 'button-sidenav waves-effect',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, _react2.default.createElement('i', {
        className: 'jsx-1707814008' + ' ' + 'material-icons',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, 'menu')))))), _react2.default.createElement(_style2.default, {
        styleId: '1707814008',
        css: '.nav-wrapper.jsx-1707814008 .right.jsx-1707814008{opacity:0;}.maroon.jsx-1707814008{background-color:#600521;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXE5hdkJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3R29CLEFBR3VCLEFBR2UsVUFGM0IsZUFHQSIsImZpbGUiOiJjb21wb25lbnRzXFxOYXZCYXIuanMiLCJzb3VyY2VSb290IjoiZDovcHJvamVjdHMvYWN0YS52My93ZWJzaXRlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNsYXNzIE5hdkJhciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICQoJy5kcm9wZG93bi1idXR0b24nKS5kcm9wZG93bih7XG4gICAgICBjb25zdHJhaW5XaWR0aDogZmFsc2VcbiAgICB9KTtcbiAgICAkKCcuYnV0dG9uLWNvbGxhcHNlJykuc2lkZU5hdigpO1xuXG4gICAgJCgnLm5hdi13cmFwcGVyIC5yaWdodCcpLmFkZENsYXNzKCdhbmltYXRlZCBmYWRlSW4nKTtcbiAgICAkKCcuc2Nyb2xsc3B5Jykuc2Nyb2xsU3B5KCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJ0b3BcIiBjbGFzc05hbWU9XCJzY3JvbGxzcHkgbmF2YmFyLWZpeGVkXCI+XG4gICAgICAgIDx1bCBpZD1cImFyY2hpdmVzXCIgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGVudFwiPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjIVwiPjE5ODkgLSAyMDA3PC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiMhXCI+MjAxNzwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjIVwiPjIwMTY8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YSBocmVmPVwiIyFcIj4yMDE1PC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiMhXCI+MjAxNDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjIVwiPjIwMTM8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YSBocmVmPVwiIyFcIj4yMDEyPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiMhXCI+MjAxMTwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjIVwiPjIwMTA8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YSBocmVmPVwiIyFcIj4yMDE5PC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiMhXCI+MjAwODwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8bmF2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LXdyYXBwZXIgbWFyb29uXCI+XG4gICAgICAgICAgICA8TGluayBwcmVmZXRjaCBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDEwIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnJhbmQtbG9nbyBsZWZ0IHdhdmVzLWVmZmVjdFwiXG4gICAgICAgICAgICAgICAgcHJlZmV0Y2hcbiAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBBTVAgTG9nb1xuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicmlnaHRcIj5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9XCIvcGFnZS0yXCI+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ3YXZlcy1lZmZlY3RcIj5TdWJzY3JpcHRpb25zPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9XCIvcGFnZS0yXCI+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ3YXZlcy1lZmZlY3RcIj5NZW1iZXJzaGlwPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjY29udGFjdFwiIGNsYXNzTmFtZT1cIndhdmVzLWVmZmVjdFwiPlxuICAgICAgICAgICAgICAgICAgQ29udGFjdCBVc1xuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wZG93bi1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgaHJlZj1cIiMhXCJcbiAgICAgICAgICAgICAgICAgIGRhdGEtYWN0aXZhdGVzPVwiYXJjaGl2ZXNcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIEFyY2hpdmVzPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgYXJyb3dfZHJvcF9kb3duXG4gICAgICAgICAgICAgICAgICA8L2k+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIjIVwiXG4gICAgICAgICAgICAgICAgICBkYXRhLWFjdGl2YXRlcz1cInNsaWRlLW91dFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24tc2lkZW5hdiB3YXZlcy1lZmZlY3RcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+bWVudTwvaT5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLm5hdi13cmFwcGVyIC5yaWdodCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubWFyb29uIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2MDA1MjE7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcbiJdfQ== */\n/*@ sourceURL=components\\NavBar.js */'
      }));
    }
  }]);

  return NavBar;
}(_react.Component);

exports.default = NavBar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXE5hdkJhci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxpbmsiLCJOYXZCYXIiLCIkIiwiZHJvcGRvd24iLCJjb25zdHJhaW5XaWR0aCIsInNpZGVOYXYiLCJhZGRDbGFzcyIsInNjcm9sbFNweSIsIm1hcmdpbkxlZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPOzs7Ozs7Ozs7SUFFRCxBOzs7Ozs7Ozs7Ozt3Q0FDZ0IsQUFDbEI7UUFBQSxBQUFFLG9CQUFGLEFBQXNCO3dCQUF0QixBQUErQixBQUNiLEFBRWxCO0FBSCtCLEFBQzdCO1FBRUYsQUFBRSxvQkFBRixBQUFzQixBQUV0Qjs7UUFBQSxBQUFFLHVCQUFGLEFBQXlCLFNBQXpCLEFBQWtDLEFBQ2xDO1FBQUEsQUFBRSxjQUFGLEFBQWdCLEFBQ2pCOzs7OzZCQUVRLEFBQ1A7NkJBQ0UsY0FBQSxTQUFLLElBQUwsQUFBUSwyQ0FBUixBQUF3Qjs7b0JBQXhCO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNFLGNBQUEsUUFBSSxJQUFKLEFBQU8sZ0RBQVAsQUFBNEI7O29CQUE1QjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQSxPQUFHLE1BQUgsQUFBUSxpQkFBUjs7b0JBQUE7c0JBQUE7QUFBQTtTQUZKLEFBQ0UsQUFDRSxBQUVGLGlDQUFBLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUEsT0FBRyxNQUFILEFBQVEsaUJBQVI7O29CQUFBO3NCQUFBO0FBQUE7U0FMSixBQUlFLEFBQ0UsQUFFRiwwQkFBQSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBLE9BQUcsTUFBSCxBQUFRLGlCQUFSOztvQkFBQTtzQkFBQTtB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QUFBLHlCQUNFLGNBQUE7Y0FBQSxBQUVPLEFBQ0w7MEJBSEYsQUFHaUI7NENBSGpCLEFBQ1k7O29CQURaO3NCQUFBO0FBQUE7QUFFRSxTQUdRLDRCQUFBLGNBQUE7NENBQUEsQUFBYTs7b0JBQWI7c0JBQUE7QUFBQTtBQUFBLFNBdEJkLEFBZ0JFLEFBQ0UsQUFLVSxBQUtaLHNDQUFBLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7Y0FBQSxBQUNPLEFBQ0w7MEJBRkYsQUFFaUI7NENBRmpCLEFBR1k7O29CQUhaO3NCQUFBLEFBS0U7QUFMRjtBQUNFLHlCQUlBLGNBQUE7NENBQUEsQUFBYTs7b0JBQWI7c0JBQUE7QUFBQTtBQUFBLFNBakZaLEFBb0NFLEFBQ0UsQUFXRSxBQTJCRSxBQUNFLEFBS0U7aUJBakZaO2FBREYsQUFDRSxBQWtHSDtBQWxHRzs7Ozs7QUFiZSxBLEFBa0hyQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJOYXZCYXIuanMiLCJzb3VyY2VSb290IjoiZDovcHJvamVjdHMvYWN0YS52My93ZWJzaXRlIn0=