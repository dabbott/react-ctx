(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["react-ctx"] = factory(require("react"));
	else
		root["react-ctx"] = factory(root["React"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
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

var mapKeys = exports.mapKeys = function mapKeys(original, f) {
  return Object.keys(original).reduce(function (created, key) {
    created[f(key)] = original[key];
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
exports.extract = exports.namespace = exports.normalize = undefined;

var _react = __webpack_require__(0);

var _index = __webpack_require__(1);

var utils = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var normalize = exports.normalize = function normalize(contextTypes) {
  var type = utils.type(contextTypes);

  switch (type) {
    case 'Array':
      return utils.mapValues(utils.keyMap(contextTypes), function () {
        return _react.PropTypes.any;
      });
    case 'Object':
      return contextTypes;
    default:
      return {};
  }
};

var namespace = exports.namespace = function namespace(contextTypes, prefix) {
  return utils.mapKeys(contextTypes, function (key) {
    return prefix + '.' + key;
  });
};

var extract = exports.extract = function extract(contextTypes, prefix) {
  var namespacedKeys = Object.keys(contextTypes).filter(function (key) {
    return key.indexOf(prefix + '.') === 0;
  });

  return utils.mapKeys(utils.pick(contextTypes, namespacedKeys), function (key) {
    return key.slice(prefix.length + 1);
  });
};

/***/ },
/* 3 */
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

var _contextTypes = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (input, prefix) {
  var normalized = (0, _contextTypes.normalize)(input);
  var contextTypes = prefix ? (0, _contextTypes.namespace)(normalized, prefix) : normalized;

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
          // TODO memoize extract?
          var context = prefix ? (0, _contextTypes.extract)(this.context, prefix) : this.context;

          return _react2.default.createElement(WrappedComponent, _extends({}, context, this.props));
        }
      }]);

      return Context;
    }(_react.Component), _class.contextTypes = contextTypes, _temp;
  };
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

var _contextTypes = __webpack_require__(2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (input, prefix) {
  var normalized = (0, _contextTypes.normalize)(input);
  var contextTypes = prefix ? (0, _contextTypes.namespace)(normalized, prefix) : normalized;

  // Keys of props to pull from context
  var keys = Object.keys(normalized);

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
          var props = utils.pick(this.props, keys);

          return prefix ? (0, _contextTypes.namespace)(props, prefix) : props;
        }
      }, {
        key: 'render',
        value: function render() {
          return _react2.default.createElement(WrappedComponent, this.props);
        }
      }]);

      return SetContext;
    }(_react.Component), _class.childContextTypes = contextTypes, _temp;
  };
};

/***/ },
/* 5 */
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

var _contextTypes = __webpack_require__(2);

var _context = __webpack_require__(3);

var _context2 = _interopRequireDefault(_context);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var warnedChildCount = false;

var createInnerComponent = function createInnerComponent(props) {
  var spec = props.contextTypes || Object.keys(utils.omit(props, ['children', 'contextTypes', 'contextNamespace']));
  var keys = Object.keys((0, _contextTypes.normalize)(spec));

  var WrappedComponent = function (_Component) {
    _inherits(WrappedComponent, _Component);

    function WrappedComponent(childProps) {
      _classCallCheck(this, WrappedComponent);

      var _this = _possibleConstructorReturn(this, (WrappedComponent.__proto__ || Object.getPrototypeOf(WrappedComponent)).call(this));

      _this.state = _this.buildState(childProps);
      return _this;
    }

    _createClass(WrappedComponent, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextChildProps) {
        this.setState(this.buildState(nextChildProps));
      }
    }, {
      key: 'buildState',
      value: function buildState(childProps) {
        return { childContextProps: utils.pick(childProps, keys) };
      }
    }, {
      key: 'render',
      value: function render() {
        var children = this.props.children;
        var childContextProps = this.state.childContextProps;


        if (_react.Children.count(children) !== 1) {
          if (!warnedChildCount) {
            warnedChildCount = true;

            console.warn('Must return exactly 1 child from MapContextToProps');
          }

          return null;
        }

        return (0, _react.cloneElement)(_react.Children.only(children), childContextProps);
      }
    }]);

    return WrappedComponent;
  }(_react.Component);

  return (0, _context2.default)(spec, props.contextNamespace)(WrappedComponent);
};

var MapContextToProps = function (_Component2) {
  _inherits(MapContextToProps, _Component2);

  function MapContextToProps(props) {
    _classCallCheck(this, MapContextToProps);

    var _this2 = _possibleConstructorReturn(this, (MapContextToProps.__proto__ || Object.getPrototypeOf(MapContextToProps)).call(this));

    _this2.state = _this2.buildState(props);
    return _this2;
  }

  _createClass(MapContextToProps, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState(this.buildState(nextProps));
    }
  }, {
    key: 'buildState',
    value: function buildState(props) {
      return { WrappedComponent: createInnerComponent(props) };
    }
  }, {
    key: 'render',
    value: function render() {
      var WrappedComponent = this.state.WrappedComponent;


      return _react2.default.createElement(WrappedComponent, this.props);
    }
  }]);

  return MapContextToProps;
}(_react.Component);

exports.default = MapContextToProps;

/***/ },
/* 6 */
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

var _setContext = __webpack_require__(4);

var _setContext2 = _interopRequireDefault(_setContext);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var createInnerComponent = function createInnerComponent(props) {
  var spec = props.contextTypes || Object.keys(utils.omit(props, ['children', 'contextTypes', 'contextNamespace']));

  var MapPropsToContextInner = function (_Component) {
    _inherits(MapPropsToContextInner, _Component);

    function MapPropsToContextInner() {
      _classCallCheck(this, MapPropsToContextInner);

      return _possibleConstructorReturn(this, (MapPropsToContextInner.__proto__ || Object.getPrototypeOf(MapPropsToContextInner)).apply(this, arguments));
    }

    _createClass(MapPropsToContextInner, [{
      key: 'render',
      value: function render() {
        return this.props.children;
      }
    }]);

    return MapPropsToContextInner;
  }(_react.Component);

  return (0, _setContext2.default)(spec, props.contextNamespace)(MapPropsToContextInner);
};

var MapPropsToContext = function (_Component2) {
  _inherits(MapPropsToContext, _Component2);

  function MapPropsToContext(props) {
    _classCallCheck(this, MapPropsToContext);

    var _this2 = _possibleConstructorReturn(this, (MapPropsToContext.__proto__ || Object.getPrototypeOf(MapPropsToContext)).call(this));

    _this2.state = _this2.buildState(props);
    return _this2;
  }

  _createClass(MapPropsToContext, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState(this.buildState(nextProps));
    }
  }, {
    key: 'buildState',
    value: function buildState(props) {
      return { WrappedComponent: createInnerComponent(props) };
    }
  }, {
    key: 'render',
    value: function render() {
      var WrappedComponent = this.state.WrappedComponent;


      return _react2.default.createElement(WrappedComponent, this.props);
    }
  }]);

  return MapPropsToContext;
}(_react.Component);

exports.default = MapPropsToContext;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MapContextToProps = exports.MapPropsToContext = exports.setContext = exports.context = undefined;

var _context2 = __webpack_require__(3);

var _context3 = _interopRequireDefault(_context2);

var _setContext2 = __webpack_require__(4);

var _setContext3 = _interopRequireDefault(_setContext2);

var _MapPropsToContext2 = __webpack_require__(6);

var _MapPropsToContext3 = _interopRequireDefault(_MapPropsToContext2);

var _MapContextToProps2 = __webpack_require__(5);

var _MapContextToProps3 = _interopRequireDefault(_MapContextToProps2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.context = _context3.default;
exports.setContext = _setContext3.default;
exports.MapPropsToContext = _MapPropsToContext3.default;
exports.MapContextToProps = _MapContextToProps3.default;

/***/ }
/******/ ]);
});