(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["react-context"] = factory(require("react"));
	else
		root["react-context"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ },
/* 1 */
/***/ function(module, exports) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var type = exports.type = function type(x) {
  return {}.toString.call(x).slice(8, -1);
};

var pick = exports.pick = function pick(original) {
  var keys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return keys.reduce(function (created, key) {
    if (key in original) {
      created[key] = original[key];
    }

    return created;
  }, {});
};

var omit = exports.omit = function omit(original) {
  var keys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return Object.keys(original).reduce(function (created, key) {
    if (keys.indexOf(key) === -1) {
      created[key] = original[key];
    }

    return created;
  }, {});
};

var mapValues = exports.mapValues = function mapValues(original, f) {
  return Object.keys(original).reduce(function (created, key) {
    created[key] = f(original[key]);
    return created;
  }, {});
};

var keyMap = exports.keyMap = function keyMap(keys) {
  return keys.reduce(function (created, key) {
    created[key] = key;

    return created;
  }, {});
};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(1);

var utils = _interopRequireWildcard(_utils);

var _normalizeSpec = __webpack_require__(3);

var _normalizeSpec2 = _interopRequireDefault(_normalizeSpec);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (input) {
  var spec = (0, _normalizeSpec2.default)(input);
  var keys = Object.keys(spec);

  return function (WrappedComponent) {
    var _class, _temp;

    return _temp = _class = function (_Component) {
      _inherits(SetContext, _Component);

      function SetContext() {
        _classCallCheck(this, SetContext);

        return _possibleConstructorReturn(this, (SetContext.__proto__ || Object.getPrototypeOf(SetContext)).apply(this, arguments));
      }

      _createClass(SetContext, [{
        key: 'getChildContext',
        value: function getChildContext() {
          return utils.pick(this.props, keys);
        }
      }, {
        key: 'render',
        value: function render() {
          return _react2.default.createElement(WrappedComponent, this.props);
        }
      }]);

      return SetContext;
    }(_react.Component), _class.childContextTypes = spec, _temp;
  };
};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _index = __webpack_require__(1);

var utils = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = function (spec) {
  switch (utils.type(spec)) {
    case 'Array':
      return utils.mapValues(utils.keyMap(spec), function () {
        return _react.PropTypes.any;
      });
    case 'Object':
      return spec;
    default:
      return {};
  }
};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(1);

var utils = _interopRequireWildcard(_utils);

var _setContext = __webpack_require__(2);

var _setContext2 = _interopRequireDefault(_setContext);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContextProvider = function (_Component) {
  _inherits(ContextProvider, _Component);

  function ContextProvider(props) {
    _classCallCheck(this, ContextProvider);

    var _this = _possibleConstructorReturn(this, (ContextProvider.__proto__ || Object.getPrototypeOf(ContextProvider)).call(this));

    _this.state = _this.buildState(props);
    return _this;
  }

  _createClass(ContextProvider, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState(this.buildState(nextProps));
    }
  }, {
    key: 'buildState',
    value: function buildState(props) {
      return { WrappedComponent: this.createWrappedComponent(props) };
    }
  }, {
    key: 'createWrappedComponent',
    value: function createWrappedComponent(props) {
      var WrappedComponent = function (_Component2) {
        _inherits(WrappedComponent, _Component2);

        function WrappedComponent() {
          _classCallCheck(this, WrappedComponent);

          return _possibleConstructorReturn(this, (WrappedComponent.__proto__ || Object.getPrototypeOf(WrappedComponent)).apply(this, arguments));
        }

        _createClass(WrappedComponent, [{
          key: 'render',
          value: function render() {
            return this.props.children;
          }
        }]);

        return WrappedComponent;
      }(_react.Component);

      var spec = props.childContextTypes || Object.keys(utils.omit(props, ['children', 'childContextTypes']));

      return (0, _setContext2.default)(spec)(WrappedComponent);
    }
  }, {
    key: 'render',
    value: function render() {
      var WrappedComponent = this.state.WrappedComponent;


      return _react2.default.createElement(WrappedComponent, this.props);
    }
  }]);

  return ContextProvider;
}(_react.Component);

exports.default = ContextProvider;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _normalizeSpec = __webpack_require__(3);

var _normalizeSpec2 = _interopRequireDefault(_normalizeSpec);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (input) {
  var spec = (0, _normalizeSpec2.default)(input);

  return function (WrappedComponent) {
    var _class, _temp;

    return _temp = _class = function (_Component) {
      _inherits(Context, _Component);

      function Context() {
        _classCallCheck(this, Context);

        return _possibleConstructorReturn(this, (Context.__proto__ || Object.getPrototypeOf(Context)).apply(this, arguments));
      }

      _createClass(Context, [{
        key: 'render',
        value: function render() {
          return _react2.default.createElement(WrappedComponent, _extends({}, this.context, this.props));
        }
      }]);

      return Context;
    }(_react.Component), _class.contextTypes = spec, _temp;
  };
};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContextProvider = exports.setContext = exports.context = undefined;

var _context2 = __webpack_require__(5);

var _context3 = _interopRequireDefault(_context2);

var _setContext2 = __webpack_require__(2);

var _setContext3 = _interopRequireDefault(_setContext2);

var _ContextProvider2 = __webpack_require__(4);

var _ContextProvider3 = _interopRequireDefault(_ContextProvider2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.context = _context3.default;
exports.setContext = _setContext3.default;
exports.ContextProvider = _ContextProvider3.default;

/***/ }
/******/ ]);
});