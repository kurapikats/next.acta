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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'd:\\projects\\acta.v3\\website\\components\\CurrentIssue.js';


var CurrentIssue = function (_Component) {
  (0, _inherits3.default)(CurrentIssue, _Component);

  function CurrentIssue() {
    (0, _classCallCheck3.default)(this, CurrentIssue);

    return (0, _possibleConstructorReturn3.default)(this, (CurrentIssue.__proto__ || (0, _getPrototypeOf2.default)(CurrentIssue)).apply(this, arguments));
  }

  (0, _createClass3.default)(CurrentIssue, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      $('ul.tabs').tabs();
      $('.tooltipped').tooltip({ delay: 50 });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_react.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-3292444532' + ' ' + 'col s12',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react2.default.createElement('h5', {
        className: 'jsx-3292444532' + ' ' + '',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, 'Volume 51 No. 3 (Genetics Issue)'), _react2.default.createElement('ul', {
        className: 'jsx-3292444532' + ' ' + 'tabs',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement('li', {
        className: 'jsx-3292444532' + ' ' + 'tab',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement('a', { href: '#original_article', className: 'jsx-3292444532' + ' ' + 'blue-text',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, 'Original Articles')), _react2.default.createElement('li', {
        className: 'jsx-3292444532' + ' ' + 'tab',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement('a', { href: '#case_reports', className: 'jsx-3292444532' + ' ' + 'blue-text',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, 'Case Reports')))), _react2.default.createElement('div', { id: 'original_article', className: 'jsx-3292444532' + ' ' + 'col s12',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, _react2.default.createElement('ul', {
        className: 'jsx-3292444532' + ' ' + 'collection',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, _react2.default.createElement('li', {
        className: 'jsx-3292444532' + ' ' + 'collection-item avatar',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, _react2.default.createElement('img', {
        src: '/static/img/ids/id-eva-cutiongco-delapaz.jpg',
        alt: '',
        'data-tooltip': 'Eva Maria Cutiongco-de la Paz',
        className: 'jsx-3292444532' + ' ' + 'circle tooltipped',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }), _react2.default.createElement('span', {
        className: 'jsx-3292444532' + ' ' + 'title',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, 'The Prevalence of CYP2D6 Gene Polymorphisms among Filipinos and their use as Biomarkers for Lung Cancer Risk'), _react2.default.createElement('p', {
        className: 'jsx-3292444532',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, 'Eva Maria Cutiongco-de la Paz'), _react2.default.createElement('a', { href: '#!', className: 'jsx-3292444532' + ' ' + 'secondary-content',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, _react2.default.createElement('i', {
        className: 'jsx-3292444532' + ' ' + 'material-icons',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, 'file_download'))), _react2.default.createElement('li', {
        className: 'jsx-3292444532' + ' ' + 'collection-item avatar',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, _react2.default.createElement('img', {
        src: '/static/img/ids/id-michelle-abadingo.jpg',
        alt: '',
        'data-tooltip': 'Michelle E. Abadingo',
        className: 'jsx-3292444532' + ' ' + 'circle tooltipped',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }), _react2.default.createElement('span', {
        className: 'jsx-3292444532' + ' ' + 'title',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, 'Etiology of Hydrops Fetalis at the Philippine General Hospital: A Retrospective Study'), _react2.default.createElement('p', {
        className: 'jsx-3292444532',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }, 'Michelle E. Abadingo and Maria Melanie Liberty B. Alcausin'), _react2.default.createElement('a', { href: '#!', className: 'jsx-3292444532' + ' ' + 'secondary-content',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, _react2.default.createElement('i', {
        className: 'jsx-3292444532' + ' ' + 'material-icons',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, 'file_download'))), _react2.default.createElement('li', {
        className: 'jsx-3292444532' + ' ' + 'collection-item avatar',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, _react2.default.createElement('img', {
        src: '/static/img/ids/id_carmencita_david_padilla.jpg',
        alt: '',
        'data-tooltip': 'Carmencita D. Padilla',
        className: 'jsx-3292444532' + ' ' + 'circle tooltipped',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }), _react2.default.createElement('span', {
        className: 'jsx-3292444532' + ' ' + 'title',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }, 'Birth Defects at the Outpatient Department of the Philippine General Hospital from 2000-2010'), _react2.default.createElement('p', {
        className: 'jsx-3292444532',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }, 'Carmencita D. Padilla'), _react2.default.createElement('a', { href: '#!', className: 'jsx-3292444532' + ' ' + 'secondary-content',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }, _react2.default.createElement('i', {
        className: 'jsx-3292444532' + ' ' + 'material-icons',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }, 'file_download'))), _react2.default.createElement('li', {
        className: 'jsx-3292444532' + ' ' + 'collection-item avatar',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }, _react2.default.createElement('img', {
        src: '/static/img/ids/id-ebner-bon-maceda.jpg',
        alt: '',
        'data-tooltip': 'Ebner Bon G. Maceda',
        className: 'jsx-3292444532' + ' ' + 'circle tooltipped',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }), _react2.default.createElement('span', {
        className: 'jsx-3292444532' + ' ' + 'title',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, 'Prevalence of Birth Defects among Neonates Born at the Philippine General Hospital from 2011 to 2014'), _react2.default.createElement('p', {
        className: 'jsx-3292444532',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }, 'Ebner Bon G. Maceda'), _react2.default.createElement('a', { href: '#!', className: 'jsx-3292444532' + ' ' + 'secondary-content',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        }
      }, _react2.default.createElement('i', {
        className: 'jsx-3292444532' + ' ' + 'material-icons',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }, 'file_download'))))), _react2.default.createElement('div', { id: 'case_reports', className: 'jsx-3292444532' + ' ' + 'col s12',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        }
      }, _react2.default.createElement('ul', {
        className: 'jsx-3292444532' + ' ' + 'collection',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        }
      }, _react2.default.createElement('li', {
        className: 'jsx-3292444532' + ' ' + 'collection-item avatar',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }, _react2.default.createElement('img', {
        src: '/static/img/ids/id-mary-ann-abacan.jpg',
        alt: '',
        'data-tooltip': 'Mary Ann R. Abacan',
        className: 'jsx-3292444532' + ' ' + 'circle tooltipped',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        }
      }), _react2.default.createElement('span', {
        className: 'jsx-3292444532' + ' ' + 'title',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        }
      }, 'Two Filipino Children with Oromandibular Limb Hypogenesis Spectrum'), _react2.default.createElement('p', {
        className: 'jsx-3292444532',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        }
      }, 'Mary Ann R. Abacan'), _react2.default.createElement('a', { href: '#!', className: 'jsx-3292444532' + ' ' + 'secondary-content',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      }, _react2.default.createElement('i', {
        className: 'jsx-3292444532' + ' ' + 'material-icons',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      }, 'file_download'))), _react2.default.createElement('li', {
        className: 'jsx-3292444532' + ' ' + 'collection-item avatar',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        }
      }, _react2.default.createElement('i', {
        className: 'jsx-3292444532' + ' ' + 'material-icons circle',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        }
      }, 'folder'), _react2.default.createElement('img', {
        src: '/static/img/ids/id-maryn-anne-chiong.jpg',
        alt: '',
        'data-tooltip': 'Mary Anne D. Chiong',
        className: 'jsx-3292444532' + ' ' + 'circle tooltipped',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        }
      }), _react2.default.createElement('span', {
        className: 'jsx-3292444532' + ' ' + 'title',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        }
      }, 'Late Infantile Neuronal Ceroid Lipofuscinosis in a Filipino Child with Epilepsy and Progressive Neurodegeneration'), _react2.default.createElement('p', {
        className: 'jsx-3292444532',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        }
      }, 'Mary Anne D. Chiong'), _react2.default.createElement('a', { href: '#!', className: 'jsx-3292444532' + ' ' + 'secondary-content',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        }
      }, _react2.default.createElement('i', {
        className: 'jsx-3292444532' + ' ' + 'material-icons',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        }
      }, 'file_download'))), _react2.default.createElement('li', {
        className: 'jsx-3292444532' + ' ' + 'collection-item avatar',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        }
      }, _react2.default.createElement('img', {
        src: '/static/img/ids/id-cristine-lopez.jpg',
        alt: '',
        'data-tooltip': 'Cristine P. Lopez',
        className: 'jsx-3292444532' + ' ' + 'circle tooltipped',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        }
      }), _react2.default.createElement('span', {
        className: 'jsx-3292444532' + ' ' + 'title',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        }
      }, 'L-2-Hydroxyglutaric Aciduria \u2013 a Rare Type of Organic Aciduria Presenting as Seizures and', _react2.default.createElement('br', {
        className: 'jsx-3292444532',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        }
      }), ' Developmental Delay in a Filipino Child'), _react2.default.createElement('p', {
        className: 'jsx-3292444532',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        }
      }, 'Cristine P. Lopez'), _react2.default.createElement('a', { href: '#!', className: 'jsx-3292444532' + ' ' + 'secondary-content',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        }
      }, _react2.default.createElement('i', {
        className: 'jsx-3292444532' + ' ' + 'material-icons',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        }
      }, 'file_download'))), _react2.default.createElement('li', {
        className: 'jsx-3292444532' + ' ' + 'collection-item avatar',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        }
      }, _react2.default.createElement('img', {
        src: '/static/img/ids/id-ma-am-joy-tumulak.jpg',
        alt: '',
        'data-tooltip': 'Ma-Am Joy R. Tumulak',
        className: 'jsx-3292444532' + ' ' + 'circle tooltipped',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        }
      }), _react2.default.createElement('span', {
        className: 'jsx-3292444532' + ' ' + 'title',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        }
      }, 'A Case of Beals Syndrome in a Filipino Child'), _react2.default.createElement('p', {
        className: 'jsx-3292444532',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        }
      }, 'Ma-Am Joy R. Tumulak'), _react2.default.createElement('a', { href: '#!', className: 'jsx-3292444532' + ' ' + 'secondary-content',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        }
      }, _react2.default.createElement('i', {
        className: 'jsx-3292444532' + ' ' + 'material-icons',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        }
      }, 'file_download'))))), _react2.default.createElement(_style2.default, {
        styleId: '3292444532',
        css: '.collection-item.jsx-3292444532 .title.jsx-3292444532{font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEN1cnJlbnRJc3N1ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4T29CLEFBRzhCLGlCQUNuQiIsImZpbGUiOiJjb21wb25lbnRzXFxDdXJyZW50SXNzdWUuanMiLCJzb3VyY2VSb290IjoiZDovcHJvamVjdHMvYWN0YS52My93ZWJzaXRlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1cnJlbnRJc3N1ZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICQoJ3VsLnRhYnMnKS50YWJzKCk7XG4gICAgJCgnLnRvb2x0aXBwZWQnKS50b29sdGlwKHsgZGVsYXk6IDUwIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMlwiPlxuICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJcIj5Wb2x1bWUgNTEgTm8uIDMgKEdlbmV0aWNzIElzc3VlKTwvaDU+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRhYnNcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJcIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNvcmlnaW5hbF9hcnRpY2xlXCIgY2xhc3NOYW1lPVwiYmx1ZS10ZXh0XCI+XG4gICAgICAgICAgICAgICAgT3JpZ2luYWwgQXJ0aWNsZXNcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIHsvKiA8bGkgY2xhc3NOYW1lPVwidGFiXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjY29tbWVudGFyeVwiIGNsYXNzTmFtZT1cImJsdWUtdGV4dFwiPlxuICAgICAgICAgICAgICAgIENvbW1lbnRhcnlcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJcIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNzcGVjaWFsX2FydGljbGVcIiBjbGFzc05hbWU9XCJibHVlLXRleHRcIj5cbiAgICAgICAgICAgICAgICBTcGVjaWFsIEFydGljbGVcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJcIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNpbnZpdGVkX2FydGljbGVcIiBjbGFzc05hbWU9XCJibHVlLXRleHRcIj5cbiAgICAgICAgICAgICAgICBJbnZpdGVkIEFydGljbGVcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT4gKi99XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGFiXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjY2FzZV9yZXBvcnRzXCIgY2xhc3NOYW1lPVwiYmx1ZS10ZXh0XCI+XG4gICAgICAgICAgICAgICAgQ2FzZSBSZXBvcnRzXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKlxuICAgICAgICA8ZGl2IGlkPVwiY29tbWVudGFyeVwiIGNsYXNzTmFtZT1cImNvbCBzMTJcIj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY29sbGVjdGlvblwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNvbGxlY3Rpb24taXRlbSBhdmF0YXJcIj5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvaW1nL2lkcy9pZF9jYXJtZW5jaXRhX2RhdmlkX3BhZGlsbGEuanBnXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgIGRhdGEtdG9vbHRpcD1cIkNhcm1lbmNpdGEgRC4gUGFkaWxsYVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2lyY2xlIHRvb2x0aXBwZWRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgIERvIHdlIHJlYWxseSBuZWVkIGEgUG9saWN5IG9uIEZvbGljIEFjaWQgU3VwcGxlbWVudGF0aW9uIGFuZFxuICAgICAgICAgICAgICAgIEZvcnRpZmljYXRpb24/XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHA+Q2FybWVuY2l0YSBELiBQYWRpbGxhPC9wPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiIyFcIiBjbGFzc05hbWU9XCJzZWNvbmRhcnktY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+ZmlsZV9kb3dubG9hZDwvaT5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cInNwZWNpYWxfYXJ0aWNsZVwiIGNsYXNzTmFtZT1cImNvbCBzMTJcIj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY29sbGVjdGlvblwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNvbGxlY3Rpb24taXRlbSBhdmF0YXJcIj5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvaW1nL2lkcy9pZF9jYXJtZW5jaXRhX2RhdmlkX3BhZGlsbGEuanBnXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgIGRhdGEtdG9vbHRpcD1cIkNhcm1lbmNpdGEgRC4gUGFkaWxsYVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2lyY2xlIHRvb2x0aXBwZWRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgIFZvbHVudGVlciBZb3V0aCBMZWFkZXJzIGZvciBIZWFsdGggLSBQaGlsaXBwaW5lczo8YnIgLz5cbiAgICAgICAgICAgICAgICBQcm92aWRpbmcgYSBNZWNoYW5pc20gZm9yIFlvdXRoIEVtcG93ZXJtZW50IHRvd2FyZHMgQWR2b2NhY3kgZm9yXG4gICAgICAgICAgICAgICAgQmlydGggRGVmZWN0cyBQcmV2ZW50aW9uIGFuZCBDYXJlXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHA+Q2FybWVuY2l0YSBELiBQYWRpbGxhPC9wPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiIyFcIiBjbGFzc05hbWU9XCJzZWNvbmRhcnktY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+ZmlsZV9kb3dubG9hZDwvaT5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cImludml0ZWRfYXJ0aWNsZVwiIGNsYXNzTmFtZT1cImNvbCBzMTJcIj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY29sbGVjdGlvblwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNvbGxlY3Rpb24taXRlbSBhdmF0YXJcIj5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvaW1nL2lkcy9pZC1taWNoLWxpbmdhby5qcGdcIlxuICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgZGF0YS10b29sdGlwPVwiTWljaGVsbGUgRC4gTGluZ2FvXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjaXJjbGUgdG9vbHRpcHBlZFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+QSBSZXZpZXcgb2YgQ3JhbmlvZmFjaWFsIFN5bmRyb21lczwvc3Bhbj5cbiAgICAgICAgICAgICAgPHA+TWljaGVsbGUgRC4gTGluZ2FvPC9wPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiIyFcIiBjbGFzc05hbWU9XCJzZWNvbmRhcnktY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+ZmlsZV9kb3dubG9hZDwvaT5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgKi99XG4gICAgICAgIDxkaXYgaWQ9XCJvcmlnaW5hbF9hcnRpY2xlXCIgY2xhc3NOYW1lPVwiY29sIHMxMlwiPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjb2xsZWN0aW9uXCI+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY29sbGVjdGlvbi1pdGVtIGF2YXRhclwiPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9pbWcvaWRzL2lkLWV2YS1jdXRpb25nY28tZGVsYXBhei5qcGdcIlxuICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgZGF0YS10b29sdGlwPVwiRXZhIE1hcmlhIEN1dGlvbmdjby1kZSBsYSBQYXpcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNpcmNsZSB0b29sdGlwcGVkXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICBUaGUgUHJldmFsZW5jZSBvZiBDWVAyRDYgR2VuZSBQb2x5bW9ycGhpc21zIGFtb25nIEZpbGlwaW5vcyBhbmRcbiAgICAgICAgICAgICAgICB0aGVpciB1c2UgYXMgQmlvbWFya2VycyBmb3IgTHVuZyBDYW5jZXIgUmlza1xuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxwPkV2YSBNYXJpYSBDdXRpb25nY28tZGUgbGEgUGF6PC9wPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiIyFcIiBjbGFzc05hbWU9XCJzZWNvbmRhcnktY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+ZmlsZV9kb3dubG9hZDwvaT5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjb2xsZWN0aW9uLWl0ZW0gYXZhdGFyXCI+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9XCIvc3RhdGljL2ltZy9pZHMvaWQtbWljaGVsbGUtYWJhZGluZ28uanBnXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgIGRhdGEtdG9vbHRpcD1cIk1pY2hlbGxlIEUuIEFiYWRpbmdvXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjaXJjbGUgdG9vbHRpcHBlZFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgRXRpb2xvZ3kgb2YgSHlkcm9wcyBGZXRhbGlzIGF0IHRoZSBQaGlsaXBwaW5lIEdlbmVyYWwgSG9zcGl0YWw6XG4gICAgICAgICAgICAgICAgQSBSZXRyb3NwZWN0aXZlIFN0dWR5XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHA+TWljaGVsbGUgRS4gQWJhZGluZ28gYW5kIE1hcmlhIE1lbGFuaWUgTGliZXJ0eSBCLiBBbGNhdXNpbjwvcD5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiMhXCIgY2xhc3NOYW1lPVwic2Vjb25kYXJ5LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmZpbGVfZG93bmxvYWQ8L2k+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY29sbGVjdGlvbi1pdGVtIGF2YXRhclwiPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9pbWcvaWRzL2lkX2Nhcm1lbmNpdGFfZGF2aWRfcGFkaWxsYS5qcGdcIlxuICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgZGF0YS10b29sdGlwPVwiQ2FybWVuY2l0YSBELiBQYWRpbGxhXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjaXJjbGUgdG9vbHRpcHBlZFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgQmlydGggRGVmZWN0cyBhdCB0aGUgT3V0cGF0aWVudCBEZXBhcnRtZW50IG9mIHRoZSBQaGlsaXBwaW5lXG4gICAgICAgICAgICAgICAgR2VuZXJhbCBIb3NwaXRhbCBmcm9tIDIwMDAtMjAxMFxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxwPkNhcm1lbmNpdGEgRC4gUGFkaWxsYTwvcD5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiMhXCIgY2xhc3NOYW1lPVwic2Vjb25kYXJ5LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmZpbGVfZG93bmxvYWQ8L2k+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY29sbGVjdGlvbi1pdGVtIGF2YXRhclwiPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9pbWcvaWRzL2lkLWVibmVyLWJvbi1tYWNlZGEuanBnXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgIGRhdGEtdG9vbHRpcD1cIkVibmVyIEJvbiBHLiBNYWNlZGFcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNpcmNsZSB0b29sdGlwcGVkXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICBQcmV2YWxlbmNlIG9mIEJpcnRoIERlZmVjdHMgYW1vbmcgTmVvbmF0ZXMgQm9ybiBhdCB0aGVcbiAgICAgICAgICAgICAgICBQaGlsaXBwaW5lIEdlbmVyYWwgSG9zcGl0YWwgZnJvbSAyMDExIHRvIDIwMTRcbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8cD5FYm5lciBCb24gRy4gTWFjZWRhPC9wPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiIyFcIiBjbGFzc05hbWU9XCJzZWNvbmRhcnktY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+ZmlsZV9kb3dubG9hZDwvaT5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cImNhc2VfcmVwb3J0c1wiIGNsYXNzTmFtZT1cImNvbCBzMTJcIj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY29sbGVjdGlvblwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNvbGxlY3Rpb24taXRlbSBhdmF0YXJcIj5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvaW1nL2lkcy9pZC1tYXJ5LWFubi1hYmFjYW4uanBnXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgIGRhdGEtdG9vbHRpcD1cIk1hcnkgQW5uIFIuIEFiYWNhblwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2lyY2xlIHRvb2x0aXBwZWRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgIFR3byBGaWxpcGlubyBDaGlsZHJlbiB3aXRoIE9yb21hbmRpYnVsYXIgTGltYiBIeXBvZ2VuZXNpc1xuICAgICAgICAgICAgICAgIFNwZWN0cnVtXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHA+TWFyeSBBbm4gUi4gQWJhY2FuPC9wPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiIyFcIiBjbGFzc05hbWU9XCJzZWNvbmRhcnktY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+ZmlsZV9kb3dubG9hZDwvaT5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjb2xsZWN0aW9uLWl0ZW0gYXZhdGFyXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIGNpcmNsZVwiPmZvbGRlcjwvaT5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvaW1nL2lkcy9pZC1tYXJ5bi1hbm5lLWNoaW9uZy5qcGdcIlxuICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgZGF0YS10b29sdGlwPVwiTWFyeSBBbm5lIEQuIENoaW9uZ1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2lyY2xlIHRvb2x0aXBwZWRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgIExhdGUgSW5mYW50aWxlIE5ldXJvbmFsIENlcm9pZCBMaXBvZnVzY2lub3NpcyBpbiBhIEZpbGlwaW5vXG4gICAgICAgICAgICAgICAgQ2hpbGQgd2l0aCBFcGlsZXBzeSBhbmQgUHJvZ3Jlc3NpdmUgTmV1cm9kZWdlbmVyYXRpb25cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8cD5NYXJ5IEFubmUgRC4gQ2hpb25nPC9wPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiIyFcIiBjbGFzc05hbWU9XCJzZWNvbmRhcnktY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+ZmlsZV9kb3dubG9hZDwvaT5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjb2xsZWN0aW9uLWl0ZW0gYXZhdGFyXCI+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9XCIvc3RhdGljL2ltZy9pZHMvaWQtY3Jpc3RpbmUtbG9wZXouanBnXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgIGRhdGEtdG9vbHRpcD1cIkNyaXN0aW5lIFAuIExvcGV6XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjaXJjbGUgdG9vbHRpcHBlZFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgTC0yLUh5ZHJveHlnbHV0YXJpYyBBY2lkdXJpYSDigJMgYSBSYXJlIFR5cGUgb2YgT3JnYW5pYyBBY2lkdXJpYVxuICAgICAgICAgICAgICAgIFByZXNlbnRpbmcgYXMgU2VpenVyZXMgYW5kPGJyIC8+IERldmVsb3BtZW50YWwgRGVsYXkgaW4gYVxuICAgICAgICAgICAgICAgIEZpbGlwaW5vIENoaWxkXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHA+Q3Jpc3RpbmUgUC4gTG9wZXo8L3A+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjIVwiIGNsYXNzTmFtZT1cInNlY29uZGFyeS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5maWxlX2Rvd25sb2FkPC9pPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNvbGxlY3Rpb24taXRlbSBhdmF0YXJcIj5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvaW1nL2lkcy9pZC1tYS1hbS1qb3ktdHVtdWxhay5qcGdcIlxuICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgZGF0YS10b29sdGlwPVwiTWEtQW0gSm95IFIuIFR1bXVsYWtcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNpcmNsZSB0b29sdGlwcGVkXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICBBIENhc2Ugb2YgQmVhbHMgU3luZHJvbWUgaW4gYSBGaWxpcGlubyBDaGlsZFxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxwPk1hLUFtIEpveSBSLiBUdW11bGFrPC9wPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiIyFcIiBjbGFzc05hbWU9XCJzZWNvbmRhcnktY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+ZmlsZV9kb3dubG9hZDwvaT5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5jb2xsZWN0aW9uLWl0ZW0gLnRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=components\\CurrentIssue.js */'
      }));
    }
  }]);

  return CurrentIssue;
}(_react.Component);

exports.default = CurrentIssue;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEN1cnJlbnRJc3N1ZS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZyYWdtZW50IiwiQ3VycmVudElzc3VlIiwiJCIsInRhYnMiLCJ0b29sdGlwIiwiZGVsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUyxBQUFXOzs7Ozs7Ozs7SSxBQUVOOzs7Ozs7Ozs7Ozt3Q0FDQyxBQUNsQjtRQUFBLEFBQUUsV0FBRixBQUFhLEFBQ2I7UUFBQSxBQUFFLGVBQUYsQUFBaUIsUUFBUSxFQUFFLE9BQTNCLEFBQXlCLEFBQVMsQUFDbkM7Ozs7NkJBRVEsQUFDUDs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs0Q0FBQSxBQUFjOztvQkFBZDtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EscURBQUEsY0FBQTs0Q0FBQSxBQUFjOztvQkFBZDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOzRDQUFBLEFBQWM7O29CQUFkO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUEsT0FBRyxNQUFILEFBQVEseURBQVIsQUFBc0M7O29CQUF0QztzQkFBQTtBQUFBO1NBRkosQUFDRSxBQUNFLEFBbUJGLHVDQUFBLGNBQUE7NENBQUEsQUFBYzs7b0JBQWQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQSxPQUFHLE1BQUgsQUFBUSxxREFBUixBQUFrQzs7b0JBQWxDO3NCQUFBO0FBQUE7U0F6QlIsQUFDRSxBQUVFLEFBcUJFLEFBQ0UsQUFrRU4sb0NBQUEsY0FBQSxTQUFLLElBQUwsQUFBUSx3REFBUixBQUFxQzs7b0JBQXJDO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOzRDQUFBLEFBQWM7O29CQUFkO3NCQUFB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QkFBQTs7b0JBQUE7c0JBRjVCLEFBRTRCO0FBQUE7QUFBQSxVQVQ5QixBQU9FLEFBS0EsNkRBQUEsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBWkYsQUFZRSxBQUNBLHNDQUFBLGNBQUEsT0FBRyxNQUFILEFBQVEsMENBQVIsQUFBdUI7O29CQUF2QjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs0Q0FBQSxBQUFhOztvQkFBYjtzQkFBQTtBQUFBO0FBQUEsU0FoRE4sQUFrQ0UsQUFhRSxBQUNFLEFBR0osb0NBQUEsY0FBQTs0Q0FBQSxBQUFjOztvQkFBZDtzQkFBQSxBQUNFO0FBREY7QUFBQTthQUNFLEFBQ00sQUFDSjthQUZGLEFBRU0sQUFDSjt3QkFIRixBQUdlOzRDQUhmLEFBSVk7O29CQUpaO3NCQURGLEFBQ0UsQUFNQTtBQU5BO0FBQ0UsMEJBS0YsY0FBQTs0Q0FBQSxBQUFnQjs7b0JBQWhCO3NCQUFBO0FBQUE7QUFBQSxTQVBGLEFBT0UsQUFHQSxpRUFBQSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FWRixBQVVFLEFBQ0EseUNBQUEsY0FBQSxPQUFHLE1BQUgsQUFBUSwwQ0FBUixBQUF1Qjs7b0JBQXZCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOzRDQUFBLEFBQWE7O29CQUFiO3NCQUFBO0FBQUE7QUFBQSxTQS9OVixBQStKRSxBQUNFLEFBbURFLEFBV0UsQUFDRTtpQkEvTlY7YUFERixBQUNFLEFBMk9IO0FBM09HOzs7OztBQVJvQyxBOztrQkFBckIsQSIsImZpbGUiOiJDdXJyZW50SXNzdWUuanMiLCJzb3VyY2VSb290IjoiZDovcHJvamVjdHMvYWN0YS52My93ZWJzaXRlIn0=