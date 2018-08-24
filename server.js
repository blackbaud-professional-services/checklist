(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/checklist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("constructicon/with-styles");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _withStyles = __webpack_require__(1);

var _withStyles2 = _interopRequireDefault(_withStyles);

var _styles = __webpack_require__(16);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var emojis = {
  down: '🔽',
  left: '◀️',
  paperclip: '📎',
  link: '🔗',
  circle: '⚪️',
  check: '✅',
  ruler: '📐',
  swords: '⚔️',
  pretzel: '🥨',
  bat: '🏓',
  repeat: '🔁',
  computer: '🖥',
  ok: '👌',
  seeNoEvil: '🙈',
  eyes: '👀',
  cross: '❌',
  skull: '☠️',
  paintbrush: '🖌',
  palette: '🎨',
  shrug: '🤷‍♀️',
  no: '🙅‍♀️'
};

var EmojIcon = function EmojIcon(_ref) {
  var name = _ref.name,
      classNames = _ref.classNames;
  return _react2.default.createElement(
    'span',
    { className: classNames.root },
    emojis[name]
  );
};

exports.default = (0, _withStyles2.default)(_styles2.default)(EmojIcon);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("constructicon/container");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var References = function References(_ref) {
  var _ref$links = _ref.links,
      links = _ref$links === undefined ? [] : _ref$links;
  return _react2.default.createElement(
    'span',
    null,
    links.map(function (link, i) {
      return _react2.default.createElement(
        'a',
        {
          target: '_blank',
          style: { fontSize: '0.8rem' },
          href: link
        },
        '[\uD83D\uDD17',
        links.length > 1 && ' ' + (i + 1),
        ']\xA0'
      );
    })
  );
};

exports.default = References;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setIncomplete = exports.setComplete = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _initialState = __webpack_require__(34);

var _initialState2 = _interopRequireDefault(_initialState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Constants
var types = {
  complete: 'COMPLETE',
  incomplete: 'INCOMPLETE'
};

var setComplete = exports.setComplete = function setComplete(id) {
  return function (dispatch) {
    dispatch({
      type: types.complete,
      payload: id
    });
  };
};

var setIncomplete = exports.setIncomplete = function setIncomplete(id) {
  return function (dispatch) {
    dispatch({
      type: types.incomplete,
      payload: id
    });
  };
};

// Reducer

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState2.default;
  var _ref = arguments[1];
  var type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case 'COMPLETE':
      return state.map(function (item) {
        return item.id === payload ? _extends({}, item, { checked: true }) : item;
      });
    case 'INCOMPLETE':
      return state.map(function (item) {
        return item.id === payload ? _extends({}, item, { checked: false }) : item;
      });
    default:
      return state;
  }
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(72);

var _Home = __webpack_require__(30);

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(_reactRouter.Route, { path: '/', component: _Home2.default });

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(5);

var _reduxThunk = __webpack_require__(74);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = __webpack_require__(73);

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _checklist = __webpack_require__(7);

var _checklist2 = _interopRequireDefault(_checklist);

var _categories = __webpack_require__(32);

var _categories2 = _interopRequireDefault(_categories);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var middleware = process.env.NODE_ENV === 'production' ? [_reduxThunk2.default] : [_reduxThunk2.default, (0, _reduxLogger2.default)()];

exports.default = function () {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _redux.createStore)((0, _redux.combineReducers)({
    categories: _categories2.default,
    checklist: _checklist2.default
  }), initialState, _redux.applyMiddleware.apply(undefined, middleware));
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("boiler-room-runner");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("constructicon/lib/renderDocument");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sansSerifNo = exports.sansSerifYes = exports.sixtyThirtyTenNo = exports.sixtyThirtyTenYes = exports.halfPaddingNo = exports.halfPaddingYes = exports.clearSectionsNo = exports.clearSectionsYes = exports.notEnoughPaddingNo = exports.notEnoughPaddingYes = exports.consistentPaddingNo = exports.consistentPaddingYes = exports.basicHierarchyNo = exports.basicHierarchyYes = exports.clearCTANo = exports.clearCTAYes = exports.bodyCopyWidthNo = exports.bodyCopyWidthYes = exports.emptySpaceNo = exports.emptySpaceYes = exports.columnLengthNo = exports.columnLengthYes = exports.symmetricalPaddingNo = exports.symmetricalPaddingYes = exports.textAlignNo = exports.textAlignYes = exports.leftAlignNo = exports.leftAlignYes = exports.widthsNo = exports.widthsYes = undefined;

var _yes = __webpack_require__(64);

var _yes2 = _interopRequireDefault(_yes);

var _no = __webpack_require__(63);

var _no2 = _interopRequireDefault(_no);

var _yes3 = __webpack_require__(52);

var _yes4 = _interopRequireDefault(_yes3);

var _no3 = __webpack_require__(51);

var _no4 = _interopRequireDefault(_no3);

var _yes5 = __webpack_require__(62);

var _yes6 = _interopRequireDefault(_yes5);

var _no5 = __webpack_require__(61);

var _no6 = _interopRequireDefault(_no5);

var _yes7 = __webpack_require__(60);

var _yes8 = _interopRequireDefault(_yes7);

var _no7 = __webpack_require__(59);

var _no8 = _interopRequireDefault(_no7);

var _yes9 = __webpack_require__(44);

var _yes10 = _interopRequireDefault(_yes9);

var _no9 = __webpack_require__(43);

var _no10 = _interopRequireDefault(_no9);

var _yes11 = __webpack_require__(48);

var _yes12 = _interopRequireDefault(_yes11);

var _no11 = __webpack_require__(47);

var _no12 = _interopRequireDefault(_no11);

var _yes13 = __webpack_require__(38);

var _yes14 = _interopRequireDefault(_yes13);

var _no13 = __webpack_require__(37);

var _no14 = _interopRequireDefault(_no13);

var _yes15 = __webpack_require__(40);

var _yes16 = _interopRequireDefault(_yes15);

var _no15 = __webpack_require__(39);

var _no16 = _interopRequireDefault(_no15);

var _yes17 = __webpack_require__(36);

var _yes18 = _interopRequireDefault(_yes17);

var _no17 = __webpack_require__(35);

var _no18 = _interopRequireDefault(_no17);

var _yes19 = __webpack_require__(46);

var _yes20 = _interopRequireDefault(_yes19);

var _no19 = __webpack_require__(45);

var _no20 = _interopRequireDefault(_no19);

var _yes21 = __webpack_require__(54);

var _yes22 = _interopRequireDefault(_yes21);

var _no21 = __webpack_require__(53);

var _no22 = _interopRequireDefault(_no21);

var _yes23 = __webpack_require__(42);

var _yes24 = _interopRequireDefault(_yes23);

var _no23 = __webpack_require__(41);

var _no24 = _interopRequireDefault(_no23);

var _yes25 = __webpack_require__(50);

var _yes26 = _interopRequireDefault(_yes25);

var _no25 = __webpack_require__(49);

var _no26 = _interopRequireDefault(_no25);

var _yes27 = __webpack_require__(58);

var _yes28 = _interopRequireDefault(_yes27);

var _no27 = __webpack_require__(57);

var _no28 = _interopRequireDefault(_no27);

var _yes29 = __webpack_require__(56);

var _yes30 = _interopRequireDefault(_yes29);

var _no29 = __webpack_require__(55);

var _no30 = _interopRequireDefault(_no29);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.widthsYes = _yes2.default;
exports.widthsNo = _no2.default;
exports.leftAlignYes = _yes4.default;
exports.leftAlignNo = _no4.default;
exports.textAlignYes = _yes6.default;
exports.textAlignNo = _no6.default;
exports.symmetricalPaddingYes = _yes8.default;
exports.symmetricalPaddingNo = _no8.default;
exports.columnLengthYes = _yes10.default;
exports.columnLengthNo = _no10.default;
exports.emptySpaceYes = _yes12.default;
exports.emptySpaceNo = _no12.default;
exports.bodyCopyWidthYes = _yes14.default;
exports.bodyCopyWidthNo = _no14.default;
exports.clearCTAYes = _yes16.default;
exports.clearCTANo = _no16.default;
exports.basicHierarchyYes = _yes18.default;
exports.basicHierarchyNo = _no18.default;
exports.consistentPaddingYes = _yes20.default;
exports.consistentPaddingNo = _no20.default;
exports.notEnoughPaddingYes = _yes22.default;
exports.notEnoughPaddingNo = _no22.default;
exports.clearSectionsYes = _yes24.default;
exports.clearSectionsNo = _no24.default;
exports.halfPaddingYes = _yes26.default;
exports.halfPaddingNo = _no26.default;
exports.sixtyThirtyTenYes = _yes28.default;
exports.sixtyThirtyTenNo = _no28.default;
exports.sansSerifYes = _yes30.default;
exports.sansSerifNo = _no30.default;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactColor = __webpack_require__(71);

var _withStyles = __webpack_require__(1);

var _withStyles2 = _interopRequireDefault(_withStyles);

var _styles = __webpack_require__(15);

var _styles2 = _interopRequireDefault(_styles);

var _EmojIcon = __webpack_require__(3);

var _EmojIcon2 = _interopRequireDefault(_EmojIcon);

var _wcagContrast = __webpack_require__(75);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContrastChecker = function (_React$Component) {
  _inherits(ContrastChecker, _React$Component);

  function ContrastChecker() {
    _classCallCheck(this, ContrastChecker);

    var _this = _possibleConstructorReturn(this, (ContrastChecker.__proto__ || Object.getPrototypeOf(ContrastChecker)).call(this));

    _this.state = {
      color: '#0000FF',
      backgroundColor: '#FFFFFF'
    };
    return _this;
  }

  _createClass(ContrastChecker, [{
    key: 'handleColorPick',
    value: function handleColorPick(_ref, type) {
      var hex = _ref.hex;

      this.setState(_defineProperty({}, type, hex));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var classNames = this.props.classNames;
      var _state = this.state,
          color = _state.color,
          backgroundColor = _state.backgroundColor;


      var contrastRatio = Math.round((0, _wcagContrast.hex)(color, backgroundColor) * 100) / 100;

      var AA = contrastRatio >= 4.5;
      var AAA = contrastRatio >= 7;
      var AALarge = contrastRatio >= 3;
      var AAALarge = contrastRatio >= 4.5;

      return _react2.default.createElement(
        'div',
        { className: classNames.root },
        _react2.default.createElement(
          'div',
          { className: classNames.pickers },
          _react2.default.createElement(
            'div',
            { className: classNames.pickerWrapper },
            _react2.default.createElement(
              'div',
              { className: classNames.pickerTitle },
              'Text Color'
            ),
            _react2.default.createElement(_reactColor.ChromePicker, {
              color: color,
              disableAlpha: true,
              onChangeComplete: function onChangeComplete(e) {
                return _this2.handleColorPick(e, 'color');
              }
            })
          ),
          _react2.default.createElement(
            'div',
            { className: classNames.pickerWrapper },
            _react2.default.createElement(
              'div',
              { className: classNames.pickerTitle },
              'Background Color'
            ),
            _react2.default.createElement(_reactColor.ChromePicker, {
              color: backgroundColor,
              disableAlpha: true,
              onChangeComplete: function onChangeComplete(e) {
                return _this2.handleColorPick(e, 'backgroundColor');
              }
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: classNames.resultWrapper },
          _react2.default.createElement(
            'div',
            { className: classNames.checks },
            _react2.default.createElement(
              'span',
              null,
              _react2.default.createElement(_EmojIcon2.default, { name: AA ? 'check' : 'cross' }),
              ' AA'
            ),
            _react2.default.createElement(
              'span',
              null,
              _react2.default.createElement(_EmojIcon2.default, { name: AAA ? 'check' : 'cross' }),
              ' AAA'
            )
          ),
          _react2.default.createElement(
            'div',
            {
              className: classNames.result,
              style: {
                color: color,
                backgroundColor: backgroundColor
              }
            },
            'Regular text - The contrast ratio for these colors is ',
            contrastRatio,
            ':1'
          ),
          _react2.default.createElement(
            'div',
            { className: classNames.checks },
            _react2.default.createElement(
              'span',
              null,
              _react2.default.createElement(_EmojIcon2.default, { name: AALarge ? 'check' : 'cross' }),
              ' AA'
            ),
            _react2.default.createElement(
              'span',
              null,
              _react2.default.createElement(_EmojIcon2.default, { name: AAALarge ? 'check' : 'cross' }),
              ' AAA'
            )
          ),
          _react2.default.createElement(
            'div',
            {
              className: classNames.result,
              style: {
                fontSize: '1.5em',
                fontWeight: '600',
                color: color,
                backgroundColor: backgroundColor
              }
            },
            'Large text - The contrast ratio for these colors is ',
            contrastRatio,
            ':1'
          )
        )
      );
    }
  }]);

  return ContrastChecker;
}(_react2.default.Component);

exports.default = (0, _withStyles2.default)(_styles2.default)(ContrastChecker);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = function (props, _ref) {
  var mediaQuery = _ref.mediaQuery;
  return {
    root: {
      '.chrome-picker': {
        boxShadow: 'none !important',
        border: '2px solid #F7F7F7',
        '> div': {
          borderRadius: '0 !important'
        }
      }
    },

    pickers: _defineProperty({
      paddingTop: '2em',
      width: '50%',
      display: 'flex',
      paddingBottom: '2em'
    }, mediaQuery('sm', 'max-width'), {
      display: 'block'
    }),

    pickerWrapper: {
      paddingRight: '1em'
    },

    pickerTitle: {
      paddingBottom: '1em'
    },

    result: {
      padding: '1em',
      width: '100%',
      border: '2px solid #F7F7F7'
    },

    resultWrapper: {
      paddingBottom: '2em'
    },

    checks: {
      padding: '2em 0 1em',
      '> span': {
        paddingRight: '1em'
      }
    }
  };
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return {
    root: {
      fontSize: '20px',
      position: 'relative',
      top: '0.12em',
      display: 'inline-block'
    }
  };
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _container = __webpack_require__(4);

var _container2 = _interopRequireDefault(_container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {
  return _react2.default.createElement(
    _container2.default,
    { width: 40, spacing: { x: 1, t: 6, b: 3 } },
    'There are definitely exceptions to these rules (sometimes).'
  );
};

exports.default = Footer;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(8);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var emojis = ['😵', '😭', '😖', '😩', '☹️', '😬', '😧', '😢', '🙁', '😕', '😳', '🙄', '😐', '🙂', '😊', '😎', '😀', '😄', '😁', '😍'];

var HappySad = function HappySad(_ref) {
  var checklist = _ref.checklist;

  var a = checklist.filter(function (item) {
    return item.checked === true;
  }).length;
  var b = checklist.length;

  var percent = a / b * 100;

  var emojiIndex = Math.round(percent / (100 / (emojis.length - 1)));
  var emoji = emojis[emojiIndex];

  var title = emoji + ' ' + a + '/' + b;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reactHelmet2.default, { title: title + ' \u2014 Design Checklist' }),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'span',
        { style: {
            display: 'inline-block',
            fontSize: '30px',
            position: 'relative',
            paddingRight: '0.2em',
            top: '0.2em'
          } },
        emoji
      ),
      _react2.default.createElement(
        'span',
        { style: {
            display: 'inline-block',
            width: '4em'
          } },
        '\xA0',
        a,
        '/',
        b
      )
    )
  );
};

var mapStateToProps = function mapStateToProps(_ref2) {
  var checklist = _ref2.checklist;
  return { checklist: checklist };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(HappySad);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _withStyles = __webpack_require__(1);

var _withStyles2 = _interopRequireDefault(_withStyles);

var _styles = __webpack_require__(20);

var _styles2 = _interopRequireDefault(_styles);

var _EmojIcon = __webpack_require__(3);

var _EmojIcon2 = _interopRequireDefault(_EmojIcon);

var _HappySad = __webpack_require__(18);

var _HappySad2 = _interopRequireDefault(_HappySad);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {
      top: true
    };

    _this.handleScroll = _this.handleScroll.bind(_this);
    return _this;
  }

  _createClass(Header, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.checkIfTop();
      window.addEventListener('scroll', this.handleScroll);
    }
  }, {
    key: 'handleScroll',
    value: function handleScroll() {
      this.checkIfTop();
    }
  }, {
    key: 'checkIfTop',
    value: function checkIfTop() {
      var top = this.state.top;


      var y = window.scrollY;
      var isTop = y === 0;

      if (isTop && !top) {
        this.setState({ top: true });
      } else if (!isTop && top) {
        this.setState({ top: false });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var classNames = this.props.classNames;
      var top = this.state.top;

      return _react2.default.createElement(
        'div',
        {
          style: {
            boxShadow: '0 15px 30px 0 rgba(0,0,0,0.0' + (top ? '0' : '3') + ')'
          },
          className: classNames.root
        },
        _react2.default.createElement(
          'div',
          { className: classNames.inner },
          _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement(_EmojIcon2.default, { name: 'computer' }),
            ' Design Checklist'
          ),
          _react2.default.createElement('div', { className: classNames.line }),
          _react2.default.createElement(
            'div',
            { className: classNames.fixed },
            _react2.default.createElement(_HappySad2.default, null)
          )
        )
      );
    }
  }]);

  return Header;
}(_react2.default.Component);

exports.default = (0, _withStyles2.default)(_styles2.default)(Header);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = function (props, _ref) {
  var rhythm = _ref.rhythm,
      mediaQuery = _ref.mediaQuery;
  return {
    root: {
      transform: 'translateZ(0)',
      transition: 'all 1s ease',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      background: 'white',
      zIndex: 1
    },

    inner: {
      padding: rhythm(),
      margin: '0 auto',
      width: '100%',
      maxWidth: rhythm(40),
      fontWeight: '500',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },

    text: _defineProperty({}, mediaQuery('sm', 'max-width'), {
      display: 'none'
    })
  };
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _withStyles = __webpack_require__(1);

var _withStyles2 = _interopRequireDefault(_withStyles);

var _heading = __webpack_require__(68);

var _heading2 = _interopRequireDefault(_heading);

var _styles = __webpack_require__(22);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Heading = function Heading(_ref) {
  var styles = _ref.styles,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['styles', 'children']);

  return _react2.default.createElement(
    _heading2.default,
    _extends({
      styles: styles.root
    }, props),
    children
  );
};

exports.default = (0, _withStyles2.default)(_styles2.default)(Heading);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _merge2 = __webpack_require__(70);

var _merge3 = _interopRequireDefault(_merge2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = function (_ref, _ref2) {
  var styles = _ref.styles;
  var mediaQuery = _ref2.mediaQuery;
  return {
    root: (0, _merge3.default)(_defineProperty({
      fontSize: '1.5em',
      fontFamily: 'inherit',
      lineHeight: '1.3em',
      fontWeight: '400'
    }, mediaQuery('sm'), {
      fontSize: '2.5em'
    }), styles)
  };
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _redux = __webpack_require__(5);

var _withStyles = __webpack_require__(1);

var _withStyles2 = _interopRequireDefault(_withStyles);

var _container = __webpack_require__(4);

var _container2 = _interopRequireDefault(_container);

var _styles = __webpack_require__(24);

var _styles2 = _interopRequireDefault(_styles);

var _EmojIcon = __webpack_require__(3);

var _EmojIcon2 = _interopRequireDefault(_EmojIcon);

var _References = __webpack_require__(6);

var _References2 = _interopRequireDefault(_References);

var _ContrastChecker = __webpack_require__(14);

var _ContrastChecker2 = _interopRequireDefault(_ContrastChecker);

var _checklist = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var components = {
  ContrastChecker: _ContrastChecker2.default
};

var ListItem = function (_React$Component) {
  _inherits(ListItem, _React$Component);

  function ListItem() {
    _classCallCheck(this, ListItem);

    var _this = _possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).call(this));

    _this.state = {
      showExapmle: false
    };
    return _this;
  }

  _createClass(ListItem, [{
    key: 'onActionClick',
    value: function onActionClick(key) {
      var _this2 = this;

      return function (e) {
        e.stopPropagation();
        _this2.setState(_defineProperty({}, key, !_this2.state[key]));
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          setComplete = _props.setComplete,
          setIncomplete = _props.setIncomplete,
          classNames = _props.classNames,
          title = _props.title,
          checked = _props.checked,
          description = _props.description,
          references = _props.references,
          _props$examples = _props.examples,
          examples = _props$examples === undefined ? {} : _props$examples,
          component = _props.component,
          id = _props.id;
      var showExample = this.state.showExample;


      var onClick = function onClick() {
        if (checked) setIncomplete(id);else setComplete(id);
      };

      var Component = components[component];

      return _react2.default.createElement(
        'div',
        { className: classNames.root },
        _react2.default.createElement(
          _container2.default,
          { width: 40, spacing: { x: 1 } },
          _react2.default.createElement(
            'div',
            { className: classNames.flex },
            _react2.default.createElement(
              'div',
              { onClick: onClick, className: classNames.checkbox },
              _react2.default.createElement(_EmojIcon2.default, { name: checked ? 'check' : 'circle' }),
              _react2.default.createElement(
                'span',
                { className: classNames.strike },
                ' ',
                title
              )
            ),
            _react2.default.createElement(
              'div',
              { className: classNames.helpSection },
              _react2.default.createElement(
                'span',
                {
                  onClick: this.onActionClick('showExample'),
                  className: classNames.helpLink
                },
                _react2.default.createElement(_EmojIcon2.default, {
                  name: showExample ? 'seeNoEvil' : 'eyes'
                }),
                '\xA0',
                _react2.default.createElement(
                  'span',
                  { className: classNames.text },
                  'Example'
                )
              )
            )
          ),
          showExample && _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'div',
              { className: classNames.description },
              description,
              '\xA0',
              _react2.default.createElement(_References2.default, { links: references })
            ),
            !component && _react2.default.createElement(
              'div',
              { className: classNames.examples },
              _react2.default.createElement(
                'div',
                { className: classNames.example },
                _react2.default.createElement(
                  'span',
                  { className: classNames.exampleText },
                  _react2.default.createElement(_EmojIcon2.default, { name: 'check' })
                ),
                _react2.default.createElement('img', {
                  className: classNames.exampleImage,
                  src: examples.yes
                })
              ),
              _react2.default.createElement(
                'div',
                { className: classNames.example },
                _react2.default.createElement(
                  'span',
                  { className: classNames.exampleText },
                  _react2.default.createElement(_EmojIcon2.default, { name: 'cross' })
                ),
                _react2.default.createElement('img', {
                  className: classNames.exampleImage,
                  src: examples.no
                })
              )
            ),
            component && _react2.default.createElement(Component, null)
          )
        )
      );
    }
  }]);

  return ListItem;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps() {
  return {};
};

var mapDispatchToProps = {
  setComplete: _checklist.setComplete,
  setIncomplete: _checklist.setIncomplete
};

exports.default = (0, _redux.compose)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _withStyles2.default)(_styles2.default))(ListItem);

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = function (_ref, _ref2) {
  var checked = _ref.checked;
  var mediaQuery = _ref2.mediaQuery;
  return {
    root: {
      color: checked ? '#0C871F' : 'black',
      userSelect: 'none',
      borderTop: '2px solid #F7F7F7',
      ':hover': {
        background: checked ? '#F7FDF7' : '#FCFCFC'
      }
    },

    strike: {
      textDecoration: checked ? 'line-through' : 'none'
    },

    clickable: {
      cursor: 'pointer'
    },

    examples: _defineProperty({
      paddingTop: '1em',
      paddingBottom: '2em',
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%'
    }, mediaQuery('sm', 'max-width'), {
      display: 'block'
    }),

    example: _defineProperty({
      width: 'calc(50% - 0.5em)',
      position: 'relative'
    }, mediaQuery('sm', 'max-width'), {
      paddingTop: '2em',
      width: '100%'
    }),

    checkbox: {
      cursor: 'pointer',
      padding: '1.5em 1.5em 1.5em 0'
    },

    exampleText: {
      position: 'absolute',
      right: '1em',
      top: '1em'
    },

    exampleImage: {
      width: '100%'
    },

    helpSection: {
      display: 'flex',
      justifyContent: 'space-between'
    },

    description: {
      color: 'black',
      paddingTop: '1em',
      paddingBottom: '1em',
      maxWidth: '30em'
    },

    helpLink: {
      position: 'relative',
      padding: '1.5em',
      cursor: 'pointer',
      color: 'black',
      display: 'inline-block'
    },

    text: _defineProperty({}, mediaQuery('lg', 'max-width'), {
      display: 'none'
    }),

    flex: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  };
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _redux = __webpack_require__(5);

var _withStyles = __webpack_require__(1);

var _withStyles2 = _interopRequireDefault(_withStyles);

var _container = __webpack_require__(4);

var _container2 = _interopRequireDefault(_container);

var _References = __webpack_require__(6);

var _References2 = _interopRequireDefault(_References);

var _styles = __webpack_require__(26);

var _styles2 = _interopRequireDefault(_styles);

var _Tab = __webpack_require__(27);

var _Tab2 = _interopRequireDefault(_Tab);

var _ListItem = __webpack_require__(23);

var _ListItem2 = _interopRequireDefault(_ListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListSection = function (_React$Component) {
  _inherits(ListSection, _React$Component);

  function ListSection(props) {
    _classCallCheck(this, ListSection);

    var _this = _possibleConstructorReturn(this, (ListSection.__proto__ || Object.getPrototypeOf(ListSection)).call(this, props));

    _this.state = {
      activeTab: _this.props.categories[0].id
    };
    return _this;
  }

  _createClass(ListSection, [{
    key: 'setActiveTab',
    value: function setActiveTab(activeTab) {
      if (activeTab !== this.state.activeTab) {
        this.setState({ activeTab: activeTab });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          classNames = _props.classNames,
          categories = _props.categories,
          checklist = _props.checklist;
      var activeTab = this.state.activeTab;


      var activeTabContent = categories.filter(function (tab) {
        return tab.id === activeTab;
      })[0];

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: classNames.tabsWrapper },
          _react2.default.createElement(
            _container2.default,
            { width: 40, spacing: { t: 3, x: 1 } },
            _react2.default.createElement(
              'div',
              { className: classNames.tabList },
              categories.map(function (tab) {
                return _react2.default.createElement(_Tab2.default, _extends({
                  onClick: function onClick() {
                    return _this2.setActiveTab(tab.id);
                  },
                  active: activeTab === tab.id
                }, tab));
              })
            )
          )
        ),
        _react2.default.createElement(
          _container2.default,
          { width: 40, spacing: { x: 1 } },
          _react2.default.createElement(
            'div',
            { className: classNames.quote },
            activeTabContent.description,
            _react2.default.createElement(_References2.default, { links: activeTabContent.references })
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          checklist.filter(function (item) {
            return item.category === activeTab;
          }).map(function (item) {
            return _react2.default.createElement(_ListItem2.default, item);
          })
        )
      );
    }
  }]);

  return ListSection;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(_ref) {
  var checklist = _ref.checklist,
      categories = _ref.categories;
  return {
    checklist: checklist,
    categories: categories
  };
};

exports.default = (0, _redux.compose)((0, _reactRedux.connect)(mapStateToProps), (0, _withStyles2.default)(_styles2.default))(ListSection);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = function (props, _ref) {
  var mediaQuery = _ref.mediaQuery;
  return {
    tabsWrapper: {
      borderBottom: '2px solid #F7F7F7'
    },

    tabList: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },

    quote: _defineProperty({
      marginTop: '3em',
      marginBottom: '3em',
      fontFamily: '"Merriweather", serif',
      borderLeft: '2px solid #000',
      paddingLeft: '2em',
      fontSize: '1.35em',
      lineHeight: '1.7em',
      maxWidth: '30rem',
      fontWeight: 400,
      fontStyle: 'italic'
    }, mediaQuery('sm', 'max-width'), {
      display: 'none'
    })
  };
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _withStyles = __webpack_require__(1);

var _withStyles2 = _interopRequireDefault(_withStyles);

var _reactRedux = __webpack_require__(2);

var _redux = __webpack_require__(5);

var _styles = __webpack_require__(28);

var _styles2 = _interopRequireDefault(_styles);

var _EmojIcon = __webpack_require__(3);

var _EmojIcon2 = _interopRequireDefault(_EmojIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tab = function Tab(_ref) {
  var classNames = _ref.classNames,
      checklist = _ref.checklist,
      name = _ref.name,
      id = _ref.id,
      icon = _ref.icon,
      onClick = _ref.onClick,
      active = _ref.active;

  var listItems = checklist.filter(function (item) {
    return item.category === id;
  });

  var total = listItems.length;
  var completed = listItems.filter(function (_ref2) {
    var checked = _ref2.checked;
    return !!checked;
  }).length;

  var allComplete = total !== 0 && total === completed;

  return _react2.default.createElement(
    'div',
    {
      onClick: onClick,
      className: classNames.tab
    },
    _react2.default.createElement(_EmojIcon2.default, { name: allComplete ? 'check' : icon }),
    _react2.default.createElement(
      'span',
      { className: classNames.text },
      ' ',
      name
    ),
    _react2.default.createElement(
      'span',
      { className: classNames.text },
      ' ',
      completed,
      '/',
      total
    )
  );
};

var mapStateToProps = function mapStateToProps(_ref3) {
  var checklist = _ref3.checklist;
  return { checklist: checklist };
};

exports.default = (0, _redux.compose)((0, _reactRedux.connect)(mapStateToProps), (0, _withStyles2.default)(_styles2.default))(Tab);

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = function (_ref, _ref2) {
  var active = _ref.active;
  var mediaQuery = _ref2.mediaQuery;
  return {
    tab: {
      userSelect: 'none',
      cursor: 'pointer',
      fontSize: '0.9em',
      textAlign: 'center',
      flex: 1,
      padding: '1em',
      borderBottom: '2px solid ' + (active ? 'black' : 'transparent'),
      ':hover': {
        background: '#FCFCFC'
      }
    },

    text: _defineProperty({}, mediaQuery('md', 'max-width'), {
      display: 'none'
    })
  };
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var fonts = exports.fonts = {
  head: 'Georgia, serif',
  body: 'Helvetica Neue, sans-serif'
};

var treatments = exports.treatments = {
  head: {
    fontFamily: fonts.head,
    fontWeight: 700
  },
  body: {
    fontFamily: fonts.body
  }
};

var colors = exports.colors = {
  primary: '#333',
  secondary: '#444',
  tertiary: '#555',
  light: '#fdfdfd',
  dark: '#282828'
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _traits = __webpack_require__(29);

var traits = _interopRequireWildcard(_traits);

var _container = __webpack_require__(4);

var _container2 = _interopRequireDefault(_container);

var _Header = __webpack_require__(19);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(17);

var _Footer2 = _interopRequireDefault(_Footer);

var _Heading = __webpack_require__(21);

var _Heading2 = _interopRequireDefault(_Heading);

var _grid = __webpack_require__(66);

var _grid2 = _interopRequireDefault(_grid);

var _gridColumn = __webpack_require__(67);

var _gridColumn2 = _interopRequireDefault(_gridColumn);

var _ListSection = __webpack_require__(25);

var _ListSection2 = _interopRequireDefault(_ListSection);

var _favicon = __webpack_require__(65);

var _favicon2 = _interopRequireDefault(_favicon);

var _reactHelmet = __webpack_require__(8);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _traitsProvider = __webpack_require__(69);

var _traitsProvider2 = _interopRequireDefault(_traitsProvider);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Root = function Root(_ref) {
  var checklist = _ref.checklist;

  return _react2.default.createElement(
    _traitsProvider2.default,
    { traits: traits },
    _react2.default.createElement(
      'div',
      {
        style: {
          fontWeight: '500',
          lineHeight: '1.5em',
          WebkitFontSmoothing: 'antialiased',
          fontFamily: '-apple-system, BlinkMacSystemFont, "helvetica neue", arial, sans-serif'
        }
      },
      _react2.default.createElement(
        _reactHelmet2.default,
        null,
        _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Merriweather:400i', rel: 'stylesheet' }),
        _react2.default.createElement('link', { rel: 'icon', type: 'image/png', href: _favicon2.default })
      ),
      _react2.default.createElement(_Header2.default, null),
      _react2.default.createElement(
        _container2.default,
        { width: 40, spacing: { t: 3, r: 1, b: 3, l: 1 } },
        _react2.default.createElement(
          _grid2.default,
          null,
          _react2.default.createElement(
            _gridColumn2.default,
            { md: 9 },
            _react2.default.createElement(
              _Heading2.default,
              {
                styles: { padding: '3em 0 1em' }
              },
              checklist.length,
              ' helpful guidelines centered around 4 basic design principles, to help create consistent, user\xA0friendly website designs\xA0in\xA0sitebuilder.'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Read more about design principles in this great guide ',
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'a',
                {
                  style: {
                    color: '#0000FF',
                    textDecoration: 'underline'
                  },
                  href: 'http://learndesignprinciples.com' },
                'learndesignprinciples.com'
              ),
              '\xA0by Melissa\xA0Mandelbaum'
            )
          )
        )
      ),
      _react2.default.createElement(_ListSection2.default, null),
      _react2.default.createElement(_Footer2.default, null)
    )
  );
};

var mapStateToProps = function mapStateToProps(_ref2) {
  var checklist = _ref2.checklist;
  return { checklist: checklist };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Root);

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderDocument = undefined;

var _boilerRoomRunner = __webpack_require__(11);

var _renderDocument = __webpack_require__(12);

var _renderDocument2 = _interopRequireDefault(_renderDocument);

var _store = __webpack_require__(10);

var _store2 = _interopRequireDefault(_store);

var _routes = __webpack_require__(9);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var basepath = '/checklist/';

exports.default = function (_ref) {
  var assets = _ref.assets;

  var app = (0, _boilerRoomRunner.createServer)({
    basepath: basepath,
    renderDocument: _renderDocument2.default,
    routes: _routes2.default,
    createStore: _store2.default,
    assets: assets
  });

  app.staticRoutes = ['/'];

  return app;
};

exports.renderDocument = _renderDocument2.default;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _initialState = __webpack_require__(33);

var _initialState2 = _interopRequireDefault(_initialState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Reducer
exports.default = function () {
  return _initialState2.default;
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = [{
  id: 'alignment',
  name: 'Alignment',
  icon: 'ruler',
  description: '“When elements are arranged around an axis, the design feels ordered. Things that are ordered feel more stable, comfortable and approachable.”',
  references: ['http://learndesignprinciples.com/axis.html']
}, {
  id: 'symmetry',
  name: 'Symmetry',
  icon: 'swords',
  description: '“Symmetry adds balance to a design. When elements are the same on both sides of an axis, the design feels harmonious.”',
  references: ['http://learndesignprinciples.com/symmetry.html']
}, {
  id: 'hierarchy',
  name: 'Hierarchy',
  icon: 'bat',
  description: '“Visual hierarchy refers to the arrangement or presentation of elements in a way that implies importance.”',
  references: ['https://en.wikipedia.org/wiki/Visual_hierarchy']
}, {
  id: 'rhythm',
  name: 'Rhythm',
  icon: 'repeat',
  description: '“Rhythm is a pattern created through repetition. Rhythm introduces order, interest and focus, a break in rhythm will appear more hierarchical.”',
  references: ['https://www.hatchdesign.ca/principles-of-design-part-2-rhythm/', 'http://learndesignprinciples.com/rhythm.html']
}, {
  id: 'misc',
  name: 'Miscellaneous',
  icon: 'palette',
  description: 'Important things that don\'t necessarily fall into one of the design princibles.'
}];

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _examples = __webpack_require__(13);

var examples = _interopRequireWildcard(_examples);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = [{
  id: 'widths',
  title: 'Use no more than 2 different content widths',
  description: 'Too many different container widths on one page can lead to a page lacking a visual structure and feeling rushed and incomplete.',
  category: 'alignment',
  checked: false,
  examples: {
    yes: examples.widthsYes,
    no: examples.widthsNo
  }
}, {
  id: 'leftCopy',
  title: 'Ensure all body copy is left aligned',
  description: 'Although center aligning titles and subtitles can look good when done correctly, center aligned body copy is not very legible and makes subsequent sections seem out of alignment.',
  category: 'alignment',
  checked: false,
  examples: {
    yes: examples.leftAlignYes,
    no: examples.leftAlignNo
  }
}, {
  id: 'textAlign',
  title: 'Don’t use two different text alignments within the same section',
  description: 'Even if the widths of the containers are the same, changing text alignment within the same section can make the widths on those text sections feel inconsistent, making the site feel unbalanced.',
  category: 'alignment',
  checked: false,
  examples: {
    yes: examples.textAlignYes,
    no: examples.textAlignNo
  }
}, {
  id: 'symmetricalPadding',
  title: 'Top and bottom padding are equal sizes',
  description: 'White space is good, inconsistent white space is not, when a section has too much or too little space on the top or the bottom, the section feels lopsided.',
  category: 'symmetry',
  checked: false,
  examples: {
    yes: examples.symmetricalPaddingYes,
    no: examples.symmetricalPaddingNo
  }
}, {
  id: 'columnLength',
  title: 'Ensure content in columns are all similar length',
  description: 'Inconsistent column lengths are a really easy way to throw off the symmetry of a site. You will never be able to get this correct on all devices and screen sizes, but do your best to provide copy of equal length',
  category: 'symmetry',
  checked: false,
  examples: {
    yes: examples.columnLengthYes,
    no: examples.columnLengthNo
  }
}, {
  id: 'whiteSpace',
  title: 'Avoid unnecessary empty space to the left or right of body copy',
  description: 'This will usually be the result of not enough text in a container that is too wide. A nice alternative would be to break the content into text/image columns.',
  category: 'symmetry',
  checked: false,
  examples: {
    yes: examples.emptySpaceYes,
    no: examples.emptySpaceNo
  }
}, {
  id: 'clearCTA',
  title: 'Have a clear Call to Action',
  description: 'If your hero is littered with too many big buttons and flashy content, the most important elements in there will start to get lost. Decide which message is the most important.',
  category: 'hierarchy',
  checked: false,
  examples: {
    yes: examples.clearCTAYes,
    no: examples.clearCTANo
  }
}, {
  id: 'basicHierarchy',
  title: 'The biggest or most colorful things are the most important',
  description: 'Ensure the most eye catching sections are actually where you want people to look. An important title or statistic should look like an important title or statistic. Some easy ways to convey importance are changing color or font size.',
  category: 'hierarchy',
  checked: false,
  examples: {
    yes: examples.basicHierarchyYes,
    no: examples.basicHierarchyNo
  }
}, {
  id: 'consistentPadding',
  title: 'Spacing between sections is consistent (exluding the hero)',
  description: 'Not every site looks good with massive amounts of white space, but every site looks good when each element is spaced out evenly. With everything consistent we begin to feel familiar with the rhythm and know exactly where to look for the next peice of content.',
  category: 'rhythm',
  checked: false,
  examples: {
    yes: examples.consistentPaddingYes,
    no: examples.consistentPaddingNo
  }
}, {
  id: 'notEnoughPadding',
  title: 'Every section is individually padded with sufficient white space',
  description: 'Nothing disrupts rhythm more than not having enough spacing around and between content. Sections without sufficient white space start to blend in to each other making it harder to differenciate key elements.',
  category: 'rhythm',
  checked: false,
  examples: {
    yes: examples.notEnoughPaddingYes,
    no: examples.notEnoughPaddingNo
  }
}, {
  id: 'clearSections',
  title: 'Consecutive sections alternate in some way',
  description: 'Alternating the background color or layout of repeating sections is a good way to subtly break the rhythm of the page, and make the new section appear more hierarchical.',
  category: 'rhythm',
  checked: false,
  examples: {
    yes: examples.clearSectionsYes,
    no: examples.clearSectionsNo
  }
}, {
  id: 'halfPadding',
  title: 'Two consecutive slices with the same background have half the padding between them',
  description: 'Keeping every section\'s spacing consistent is important, but sometimes keeping it visually consistent is more important than actual consistency. If two sections with the same background have the same padding between them, the space looks twice as big.',
  category: 'rhythm',
  checked: false,
  examples: {
    yes: examples.halfPaddingYes,
    no: examples.halfPaddingNo
  }
}, {
  id: 'bodyCopyWidth',
  title: 'Body copy should only ever be in a narrow container',
  description: 'When paragraphs get too wide, they’re harder to read because there’s less whitespace. Whitespace gives paragraphs shape, which acts like visual bearings, making it easier to find your place.',
  category: 'misc',
  checked: false,
  references: ['https://webdesignfromscratch.com/basics/readability/#blocksize'],
  examples: {
    yes: examples.bodyCopyWidthYes,
    no: examples.bodyCopyWidthNo
  }
}, {
  id: 'colorContrast',
  title: 'Large and regular text both pass at least WCAG AA color contrast standards.',
  description: 'All text should be in a color that sufficiently contrasts with the background color, and passes the industry standard accessibility guidelines (WCAG standards). Test your colors with the tool below.',
  category: 'misc',
  checked: false,
  component: 'ContrastChecker'
}, {
  id: '306010',
  title: 'Color usage is influenced by the 60, 30, 10 rule',
  description: 'You should not use equal amounts of the primary, secondary and tertiary colors. An old designer\'s rule is to divide the colors into percentages of 60, 30, and 10. A good example of this distribution of color is a business suit: 60% of the outfit is made up of the slacks and jacket. The shirt represents 30%, and the tie 10%.',
  category: 'misc',
  checked: false,
  references: ['http://www.tigercolor.com/color-lab/tips/tip-01.html'],
  examples: {
    yes: examples.sixtyThirtyTenYes,
    no: examples.sixtyThirtyTenNo
  }
}, {
  id: 'sansSerif',
  title: 'All body copy should be set in a sans serif typeface',
  description: 'Serif typefaces can look fantastic when used correctly, but choosing and typesetting a nice serif can be a tricky task, even more so on the web. I\'d suggest always choosing a sans-serif typeface for body copy as it\'s nearly impossible to use one incorrectly. (A serif is a small line attached to the end of a stroke in a letter or symbol. A typeface without serifs is called a sans serif.)',
  category: 'misc',
  checked: false,
  references: ['https://en.wikipedia.org/wiki/Sans-serif'],
  examples: {
    yes: examples.sansSerifYes,
    no: examples.sansSerifNo
  }
}];

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bf18febc08b104fd33d74333bf32db6e.png";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c1a36826abaf48058c42417313e206d7.png";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9d4051fc3e4fac2eb5560c2f229017d5.png";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2c861b92a6371ba87cbd33c338184add.png";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fc833609ae536ce441892bd348c005ba.png";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "222e99bc8a74379e25e1ec229c32cbeb.png";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1797cb8fe437b14abe8b3a1e8f080e95.png";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e271ee6be07207206526556be798eda4.png";

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cfd28e2e32ea2e39aeb7f2a31c48516e.png";

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a8368b00610b70d41677c344c7e8d772.png";

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ac0126d74fc3fdf25ceaf421743b332d.png";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "00f884aeeac5a2ab18b493257cf74339.png";

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "82239efff08fc2144723053ada81f7cb.png";

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "826c90b975ac645eae4b74bfbc19d37c.png";

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2184d916c5d1febcb28b735c835919d2.png";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "879905403e0d7ea2cf7f8b049d401a75.png";

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e63ab052e7fe95e0fdf6a7bc5a7a3d91.png";

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f18595c9774a569b9a85eead25df6edb.png";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "21afd0cec6e0a2f6d02477647b225d6f.png";

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1a139b9914d82809e1ce320307db64db.png";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "92a828715cf8988e93d031a50609a9ec.png";

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6537fd1a473ce63329ce89545b386c73.png";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "eba448f37e59410315a60f13d77e8dfe.png";

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6a49f9cc5fc5f06218ef1d9ca2ca3f6d.png";

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "079ffbc0a77984660b11482bd9a550a8.png";

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "af788682f2f4cb5dce83c56f4edef110.png";

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0ceb9b03c44b90371a8aab4f05ee1f20.png";

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "001f65ef25657fbf0c8d9893f7517eeb.png";

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1649391eaf76f1f583528331a54f0494.png";

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d5160d59f9cd9acc553dad494e761239.png";

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3da6f308c48368a5ae9ab541b51f9c45.png";

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("constructicon/grid");

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("constructicon/grid-column");

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("constructicon/heading");

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("constructicon/traits-provider");

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("lodash/merge");

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("react-color");

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = require("wcag-contrast");

/***/ })
/******/ ])));