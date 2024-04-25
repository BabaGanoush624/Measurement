(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-redux"), require("@penta-b/ma-lib"), require("@penta-b/grid"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-redux", "@penta-b/ma-lib", "@penta-b/grid"], factory);
	else if(typeof exports === 'object')
		exports["ma-plugin-new-Yusuf"] = factory(require("react"), require("react-redux"), require("@penta-b/ma-lib"), require("@penta-b/grid"));
	else
		root["ma-plugin-new-Yusuf"] = factory(root["react"], root["react-redux"], root["@penta-b/ma-lib"], root["@penta-b/grid"]);
})(self, (__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_redux__, __WEBPACK_EXTERNAL_MODULE__penta_b_ma_lib__, __WEBPACK_EXTERNAL_MODULE__penta_b_grid__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/MapClickResult/MapClickResult.component.js":
/*!*******************************************************************!*\
  !*** ./src/components/MapClickResult/MapClickResult.component.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @penta-b/ma-lib */ "@penta-b/ma-lib");
/* harmony import */ var _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/constants */ "./src/constants/constants.js");
/* harmony import */ var _penta_b_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @penta-b/grid */ "@penta-b/grid");
/* harmony import */ var _penta_b_grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_penta_b_grid__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Grid = _penta_b_grid__WEBPACK_IMPORTED_MODULE_3__.components.Grid;
var MapClickResult = /*#__PURE__*/function (_React$Component) {
  function MapClickResult() {
    _classCallCheck(this, MapClickResult);
    return _callSuper(this, MapClickResult, arguments);
  }
  _inherits(MapClickResult, _React$Component);
  return _createClass(MapClickResult, [{
    key: "render",
    value: function render() {
      var info = this.props.info;
      var parsedData = info.features.map(function (feature) {
        return feature.properties;
      });
      //make sure that query resp is returned
      // use grid component to view all features
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Grid, {
        settings: {
          name: "FEATURES",
          sortable: false,
          filterable: false,
          pageSizeOptions: [10, 20, 40],
          pageSize: 10,
          enableLargeView: true,
          columns: [{
            id: "id",
            name: "id",
            type: "INT",
            display: "basic"
          }, {
            id: "name",
            name: "name",
            type: "STR",
            display: "basic"
          }],
          data: parsedData
        }
      }));
    }
  }]);
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_1__.withLocalize)(MapClickResult, _constants_constants__WEBPACK_IMPORTED_MODULE_2__.LOCALIZATION_NAMESPACE));

/***/ }),

/***/ "./src/components/MapClick/MapClick.component.js":
/*!*******************************************************!*\
  !*** ./src/components/MapClick/MapClick.component.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @penta-b/ma-lib */ "@penta-b/ma-lib");
/* harmony import */ var _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_mapUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/mapUtils */ "./src/services/mapUtils.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
/**
 * Author: Amr Samir
 * 
 * Description: 
 *  - An example of a plugin that listens to another 
 *    plugin's state changes (Map plugin), and log that state.
 */






//inherting the props, State, render method and life cycle methods from React
var MapClickComponent = /*#__PURE__*/function (_React$Component) {
  function MapClickComponent(props) {
    var _this;
    _classCallCheck(this, MapClickComponent);
    _this = _callSuper(this, MapClickComponent, [props]);
    // refrences the (This) current instance of the class
    _this.handleResp = _this.handleResp.bind(_this);
    return _this;
  }
  _inherits(MapClickComponent, _React$Component);
  return _createClass(MapClickComponent, [{
    key: "handleResp",
    value: function handleResp(res) {
      var _res$data$,
        _this2 = this;
      var data = JSON.parse(res === null || res === void 0 || (_res$data$ = res.data[0]) === null || _res$data$ === void 0 ? void 0 : _res$data$.features);
      // removes the old click result if this.ID exist(container opened) remove the container
      this.id && this.props.removeMapClickResult(this.id);
      // using the showMapClickResult and passing it the things that we want it to show in the container
      this.props.showMapClickResult({
        info: data
      }, function (id) {
        return _this2.id = id;
      });
    }

    /**
     * Description:
     *  - React lifecycle method, here we check for state changes.
     */
    // prevProps => saving the old props before the change
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      //isActive => checking if the button is on or off
      if (this.props.isActive) {
        var YusufLayer = this.props.settings.dataSettings.YusufLayer;
        var code = this.props.map.projection.code;
        (0,_services_mapUtils__WEBPACK_IMPORTED_MODULE_3__.drawShape)(YusufLayer, this.handleResp, code);
      } else {
        // if the trigger isn't active clear all the features on the map and close the container
        (0,_services_mapUtils__WEBPACK_IMPORTED_MODULE_3__.validateVL)({
          clear: true
        });
        this.id && this.props.removeMapClickResult(this.id);
      }
    }
  }, {
    key: "render",
    value: function render() {
      //why are we returning null?
      // we don't need to return anything since we are not changing the UI, we do it from MnA not from coding
      return null;
    }
  }]);
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));
var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    // getting the map reducers to be able to access the map projection code
    map: _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__.selectorsRegistry.getSelector("selectMapReducers", state, ownProps.reducerId)
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    showMapClickResult: function showMapClickResult(props, onAdd) {
      return dispatch(_penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__.actionsRegistry.getActionCreator('showComponent', 'ma-plugin-new-Yusuf', 'YusufContainer', props, onAdd));
    },
    removeMapClickResult: function removeMapClickResult(id) {
      return dispatch(_penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_2__.actionsRegistry.getActionCreator('removeComponent', id));
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(MapClickComponent));

/***/ }),

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LOCALIZATION_NAMESPACE: () => (/* binding */ LOCALIZATION_NAMESPACE)
/* harmony export */ });
var LOCALIZATION_NAMESPACE = "ma-plugin-new-Yusuf";

/***/ }),

/***/ "./src/messages.js":
/*!*************************!*\
  !*** ./src/messages.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _plugin_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugin.svg */ "./src/plugin.svg");
/* harmony import */ var _plugin_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_plugin_svg__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  "click.msg": "You clicked on location: {0}, {1}",
  "test.plurals": "There {0,plural,one{is # apple}other{are # apples}} in {1,plural,one{# basket}other{# baskets}}.",
  "title": "ma-plugin-new-Yusuf",
  "icon": (_plugin_svg__WEBPACK_IMPORTED_MODULE_0___default())
});

/***/ }),

/***/ "./src/services/mapUtils.js":
/*!**********************************!*\
  !*** ./src/services/mapUtils.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   drawShape: () => (/* binding */ drawShape),
/* harmony export */   validateVL: () => (/* binding */ validateVL)
/* harmony export */ });
/* harmony import */ var _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @penta-b/ma-lib */ "@penta-b/ma-lib");
/* harmony import */ var _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ol_sphere_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/sphere.js */ "./node_modules/ol/sphere.js");
/* harmony import */ var _queryService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./queryService */ "./src/services/queryService.js");
/* harmony import */ var ol_geom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/geom */ "./node_modules/ol/geom/LineString.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
// importing the required registries





//vectorLayer declaration
var VL = null;
var drawing = null;
var overlayArray = [];
var validateVL = function validateVL(options) {
  if (VL && options.clear) {
    resetLayer();
  }
};
// Checking the if the vector layer already exists to clear all the features on it
var drawShape = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(layer, func, code) {
    var _yield$apiRegistry$ge, _yield$apiRegistry$ge2, VectorLayer, _yield$apiRegistry$ge3, _yield$apiRegistry$ge4, Drawing;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          if (VL) {
            _context2.next = 16;
            break;
          }
          _context2.next = 3;
          return _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_0__.apiRegistry.getApis(["VectorLayer"]);
        case 3:
          _yield$apiRegistry$ge = _context2.sent;
          _yield$apiRegistry$ge2 = _slicedToArray(_yield$apiRegistry$ge, 1);
          VectorLayer = _yield$apiRegistry$ge2[0];
          VL = new VectorLayer();
          _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_0__.actionsRegistry.dispatch("addVectorLayer", VL);
          _context2.next = 10;
          return _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_0__.apiRegistry.getApis(["Drawing"]);
        case 10:
          _yield$apiRegistry$ge3 = _context2.sent;
          _yield$apiRegistry$ge4 = _slicedToArray(_yield$apiRegistry$ge3, 1);
          Drawing = _yield$apiRegistry$ge4[0];
          drawing = new Drawing({
            type: "polygon",
            vectorLayer: VL
          });
          _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_0__.actionsRegistry.dispatch("addInteraction", drawing);
          drawing.setOnDrawFinish( /*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(feature) {
              var geom, coordinates, centerPoint;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    //structure definition
                    geom = feature.getGeometry(); // getting the geometry of the feature
                    coordinates = feature.olFeature.getGeometry().getCoordinates()[0]; //getting coords to calc length later
                    centerPoint = _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_0__.geometryService.center(feature.getFeatureGeoJson()); //creating a center point
                    //clearing the vectorLayer and adding the drawing to it
                    addFeature(feature);
                    clearOverlay();

                    //returning the features from the intersection of the drawn shape with the map and adding the overlays
                    _context.next = 7;
                    return (0,_queryService__WEBPACK_IMPORTED_MODULE_1__.callQueryService)(layer, func, geom);
                  case 7:
                    _context.next = 9;
                    return overlayArea(feature, code, centerPoint);
                  case 9:
                    overlayLine(coordinates, code);
                  case 10:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            return function (_x4) {
              return _ref2.apply(this, arguments);
            };
          }());
        case 16:
          ;
        case 17:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function drawShape(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

/* const area = getArea(olGeom);
const length = getLength(olGeom); */

// a function to clear the map after the previous drawing is finished and to add the next drawing
function addFeature(feat) {
  VL.clear();
  VL.addFeature(feat);
}
;

//function to calculate the area of the drawn Feature
function calcArea(feat, code) {
  var area = (0,ol_sphere_js__WEBPACK_IMPORTED_MODULE_2__.getArea)(feat.olFeature.getGeometry(), {
    projection: code
  });
  return area;
}
//creating LineLengths overLay of the drawn Feature
function overlayLine(_x5, _x6) {
  return _overlayLine.apply(this, arguments);
} // creating overLay with the area of the drawn Feature
function _overlayLine() {
  _overlayLine = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(coordinates, code) {
    var i, startingLine, nextLine, origLine, middle, line, length, lengthInKm, el, _yield$apiRegistry$ge5, _yield$apiRegistry$ge6, Overlay, _overlayLine2;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          i = 0;
        case 1:
          if (!(i < coordinates.length - 1)) {
            _context3.next = 23;
            break;
          }
          startingLine = coordinates[i];
          nextLine = coordinates[i + 1];
          origLine = [startingLine, nextLine];
          middle = [(startingLine[0] + nextLine[0]) / 2, (startingLine[1] + nextLine[1]) / 2];
          line = new ol_geom__WEBPACK_IMPORTED_MODULE_3__["default"](origLine);
          length = (0,ol_sphere_js__WEBPACK_IMPORTED_MODULE_2__.getLength)(line, {
            projection: code
          });
          lengthInKm = length / 1000;
          el = document.createElement("div"); // how do make each unique length show?
          el.innerText = "".concat(lengthInKm.toFixed(1), " Km");
          el.style.color = "#610030";
          _context3.next = 14;
          return _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_0__.apiRegistry.getApis(["Overlay"]);
        case 14:
          _yield$apiRegistry$ge5 = _context3.sent;
          _yield$apiRegistry$ge6 = _slicedToArray(_yield$apiRegistry$ge5, 1);
          Overlay = _yield$apiRegistry$ge6[0];
          _overlayLine2 = new Overlay({
            element: el,
            position: middle
          });
          overlayArray.push(_overlayLine2);
          _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_0__.actionsRegistry.dispatch("addOverlay", _overlayLine2);
        case 20:
          i++;
          _context3.next = 1;
          break;
        case 23:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _overlayLine.apply(this, arguments);
}
function overlayArea(_x7, _x8, _x9) {
  return _overlayArea.apply(this, arguments);
} //clearing the overlay
function _overlayArea() {
  _overlayArea = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(feat, code, center) {
    var area, areaInKmSq, areaEl, _yield$apiRegistry$ge7, _yield$apiRegistry$ge8, Overlay, overlayArea;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          area = calcArea(feat, code);
          areaInKmSq = area / (1000 * 1000);
          areaEl = document.createElement("div");
          areaEl.innerHTML = "".concat(areaInKmSq.toFixed(2), " km&sup2");
          areaEl.style.color = "#610030";
          areaEl.style.fontSize = "0.8rem";
          _context4.next = 8;
          return _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_0__.apiRegistry.getApis(["Overlay"]);
        case 8:
          _yield$apiRegistry$ge7 = _context4.sent;
          _yield$apiRegistry$ge8 = _slicedToArray(_yield$apiRegistry$ge7, 1);
          Overlay = _yield$apiRegistry$ge8[0];
          overlayArea = new Overlay({
            element: areaEl,
            position: center.geometry.coordinates,
            positioning: "center-center"
          });
          overlayArray.push(overlayArea);
          _context4.next = 15;
          return _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_0__.actionsRegistry.dispatch("addOverlay", overlayArea);
        case 15:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _overlayArea.apply(this, arguments);
}
function clearOverlay() {
  overlayArray.forEach(function (overlay) {
    _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_0__.actionsRegistry.dispatch("removeOverlay", overlay);
  });
  overlayArray = [];
}

//function to reset the clear the layers of all the feautres and the overlays on it
function resetLayer() {
  VL.clear();
  _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_0__.actionsRegistry.dispatch("removeInteraction", drawing);
  VL = null;
  clearOverlay();
}

/***/ }),

/***/ "./src/services/queryService.js":
/*!**************************************!*\
  !*** ./src/services/queryService.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   callQueryService: () => (/* binding */ callQueryService)
/* harmony export */ });
/* harmony import */ var _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @penta-b/ma-lib */ "@penta-b/ma-lib");
/* harmony import */ var _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var genQueryBody = function genQueryBody(layer, geometry) {
  return [{
    dataSource: {
      id: layer[0].id
    },
    filter: {
      conditionList: [{
        key: layer[0].geometryField.fieldName,
        geometry: JSON.stringify(geometry),
        spatialRelation: "INTERSECT"
      }]
    },
    crs: layer[0].crs
  }];
};
var callQueryService = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(layer, action, geometry) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_0__.store.dispatch((0,_penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_0__.systemShowLoading)());
          _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_0__.query.queryFeatures(genQueryBody(layer, geometry)).then(function (response) {
            action(response);
          })["catch"](function (error) {
            var _console;
            /* eslint-disable */(_console = console).log.apply(_console, _toConsumableArray(oo_oo("674445410_36_6_36_24_4", error)));
          })["finally"](function () {
            _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_0__.store.dispatch((0,_penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_0__.systemHideLoading)());
          });
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function callQueryService(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
/* istanbul ignore next */ /* c8 ignore start */ /* eslint-disable */
;
function oo_cm() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';function _0x529c(){var _0x3751e3=['_isNegativeZero','[object\\x20Set]','elements','data','warn','node','nodeModules','_connectToHostNow','disabledLog','_addFunctionsNode','_Symbol','_hasSetOnItsPath','autoExpand','pop','autoExpandMaxDepth','923252GYgSsW','_getOwnPropertyDescriptor','constructor','onclose','Number','_dateToString','_setNodeExpandableState','level','1uupNAI','current','autoExpandPropertyCount','null','_undefined','date','astro','root_exp_id','_WebSocketClass','','match','_setNodeQueryPath','_type','stringify','HTMLAllCollection','default','_consoleNinjaAllowedToStart','unref','strLength','edge','[object\\x20BigInt]','2261qMknhZ','_ws','hits','resolveGetters','reload','50150','positiveInfinity','log','isExpressionToEvaluate','message','call','unshift','next.js','hasOwnProperty','forEach','console','port','__es'+'Module','1.0.0','Set','process','onerror','timeStamp','array','_allowedToConnectOnSend','\\x20server','negativeZero','performance','pathToFileURL','function','webpack','Map','_HTMLAllCollection','ws://','_sendErrorMessage','rootExpression','_isPrimitiveWrapperType','_blacklistedProperty','_inNextEdge','coverage','...','error','_addProperty','String','Error','serialize','_console_ninja','_setNodeId','_isMap','_treeNodePropertiesAfterFullValue','origin','onopen','_socket','toString','valueOf','global','_disposeWebsocket','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','gateway.docker.internal','catch','isArray','_regExpToString','_connected','_getOwnPropertySymbols','nan','_inBrowser','getOwnPropertyDescriptor','Symbol','_reconnectTimeout','_propertyName','WebSocket','bind','parent','getOwnPropertySymbols','_webSocketErrorDocsLink','_isPrimitiveType','4763870QUkLlN','map','bigint','_setNodeExpressionPath','type','_p_length','depth','1','symbol','negativeInfinity','_property','name','versions','_quotedRegExp','_additionalMetadata','expressionsToEvaluate','env','close','value','boolean','disabledTrace','sortProps','_attemptToReconnectShortly','%c\\x20Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20','funcName','slice','_connecting','NEXT_RUNTIME','_processTreeNodeResult','stackTraceLimit','location','_isUndefined','_objectToString','_treeNodePropertiesBeforeFullValue','_sortProps','_cleanNode','allStrLength','time','9CGteka','now','','totalStrLength','_setNodePermissions','defineProperty','replace','_allowedToSend','root_exp','number','706474gqdjJi','trace','test','_getOwnPropertyNames','eventReceivedCallback','readyState','278640nzsHid','hostname','string','undefined','noFunctions','count','length','index','_addLoadNode','_connectAttemptCount','_p_name','angular','[object\\x20Array]','remix','host','send','object','_maxConnectAttemptCount','_console_ninja_session','prototype','path','logger\\x20websocket\\x20error','58143EOJORT','getOwnPropertyNames','props','nuxt','92njsIxP','_setNodeLabel','then','_addObjectProperty','_hasMapOnItsPath','split','includes','url','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"JostarSan\",\"192.168.56.1\",\"192.168.1.10\"],'args','NEGATIVE_INFINITY','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','869465DlPHHu','_p_','toLowerCase','unknown','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','dockerizedApp','elapsed','reduceLimits','autoExpandPreviousObjects','4240RoClAj','autoExpandLimit','_WebSocket','substr','push','concat','_capIfString','join','enumerable','set','_isSet'];_0x529c=function(){return _0x3751e3;};return _0x529c();}var _0x4cf959=_0x5db4;function _0x5db4(_0x21a3d3,_0x54b201){var _0x529c5c=_0x529c();return _0x5db4=function(_0x5db48a,_0x3721fc){_0x5db48a=_0x5db48a-0x80;var _0x4880a5=_0x529c5c[_0x5db48a];return _0x4880a5;},_0x5db4(_0x21a3d3,_0x54b201);}(function(_0x520666,_0x1147e4){var _0x23eb01=_0x5db4,_0x30cdfb=_0x520666();while(!![]){try{var _0x3433bb=parseInt(_0x23eb01(0xff))/0x1*(-parseInt(_0x23eb01(0xa7))/0x2)+parseInt(_0x23eb01(0xc3))/0x3*(parseInt(_0x23eb01(0xc7))/0x4)+-parseInt(_0x23eb01(0xd4))/0x5+-parseInt(_0x23eb01(0xad))/0x6+parseInt(_0x23eb01(0x114))/0x7*(-parseInt(_0x23eb01(0xdd))/0x8)+-parseInt(_0x23eb01(0x9d))/0x9*(-parseInt(_0x23eb01(0x160))/0xa)+parseInt(_0x23eb01(0xf7))/0xb;if(_0x3433bb===_0x1147e4)break;else _0x30cdfb['push'](_0x30cdfb['shift']());}catch(_0x281cbc){_0x30cdfb['push'](_0x30cdfb['shift']());}}}(_0x529c,0x3fcca));var K=Object['create'],Q=Object[_0x4cf959(0xa2)],G=Object[_0x4cf959(0x156)],ee=Object[_0x4cf959(0xc4)],te=Object['getPrototypeOf'],ne=Object[_0x4cf959(0xc0)][_0x4cf959(0x121)],re=(_0x115def,_0x532c4a,_0xc77198,_0x2a6ce2)=>{var _0x467f91=_0x4cf959;if(_0x532c4a&&typeof _0x532c4a==_0x467f91(0xbd)||typeof _0x532c4a==_0x467f91(0x131)){for(let _0x33d6dc of ee(_0x532c4a))!ne[_0x467f91(0x11e)](_0x115def,_0x33d6dc)&&_0x33d6dc!==_0xc77198&&Q(_0x115def,_0x33d6dc,{'get':()=>_0x532c4a[_0x33d6dc],'enumerable':!(_0x2a6ce2=G(_0x532c4a,_0x33d6dc))||_0x2a6ce2[_0x467f91(0xe5)]});}return _0x115def;},V=(_0x2840ad,_0x25514c,_0x3e2e4a)=>(_0x3e2e4a=_0x2840ad!=null?K(te(_0x2840ad)):{},re(_0x25514c||!_0x2840ad||!_0x2840ad[_0x4cf959(0x125)]?Q(_0x3e2e4a,_0x4cf959(0x10e),{'value':_0x2840ad,'enumerable':!0x0}):_0x3e2e4a,_0x2840ad)),x=class{constructor(_0x35a1b1,_0x1fccfe,_0x5f1d3b,_0xa1568b,_0x1081a3,_0x3e8d2f){var _0xe4f172=_0x4cf959;this['global']=_0x35a1b1,this['host']=_0x1fccfe,this[_0xe4f172(0x124)]=_0x5f1d3b,this['nodeModules']=_0xa1568b,this['dockerizedApp']=_0x1081a3,this[_0xe4f172(0xab)]=_0x3e8d2f,this[_0xe4f172(0xa4)]=!0x0,this[_0xe4f172(0x12c)]=!0x0,this['_connected']=!0x1,this['_connecting']=!0x1,this[_0xe4f172(0x13a)]=_0x35a1b1['process']?.[_0xe4f172(0x87)]?.[_0xe4f172(0x92)]===_0xe4f172(0x112),this[_0xe4f172(0x155)]=!this['global'][_0xe4f172(0x128)]?.['versions']?.[_0xe4f172(0xed)]&&!this[_0xe4f172(0x13a)],this[_0xe4f172(0x107)]=null,this[_0xe4f172(0xb6)]=0x0,this[_0xe4f172(0xbe)]=0x14,this[_0xe4f172(0x15e)]='https://tinyurl.com/37x8b79t',this[_0xe4f172(0x136)]=(this[_0xe4f172(0x155)]?_0xe4f172(0xd8):_0xe4f172(0xcf))+this[_0xe4f172(0x15e)];}async['getWebSocketClass'](){var _0x59ffac=_0x4cf959;if(this[_0x59ffac(0x107)])return this[_0x59ffac(0x107)];let _0x5a7ccf;if(this['_inBrowser']||this[_0x59ffac(0x13a)])_0x5a7ccf=this[_0x59ffac(0x14b)][_0x59ffac(0x15a)];else{if(this[_0x59ffac(0x14b)]['process']?.[_0x59ffac(0xdf)])_0x5a7ccf=this['global'][_0x59ffac(0x128)]?.['_WebSocket'];else try{let _0x4d748c=await import(_0x59ffac(0xc1));_0x5a7ccf=(await import((await import(_0x59ffac(0xce)))[_0x59ffac(0x130)](_0x4d748c[_0x59ffac(0xe4)](this[_0x59ffac(0xee)],'ws/index.js'))[_0x59ffac(0x149)]()))[_0x59ffac(0x10e)];}catch{try{_0x5a7ccf=require(require(_0x59ffac(0xc1))['join'](this[_0x59ffac(0xee)],'ws'));}catch{throw new Error('failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket');}}}return this[_0x59ffac(0x107)]=_0x5a7ccf,_0x5a7ccf;}[_0x4cf959(0xef)](){var _0x412da7=_0x4cf959;this[_0x412da7(0x91)]||this[_0x412da7(0x152)]||this[_0x412da7(0xb6)]>=this[_0x412da7(0xbe)]||(this['_allowedToConnectOnSend']=!0x1,this[_0x412da7(0x91)]=!0x0,this[_0x412da7(0xb6)]++,this[_0x412da7(0x115)]=new Promise((_0x81ac52,_0x4de734)=>{var _0x108536=_0x412da7;this['getWebSocketClass']()[_0x108536(0xc9)](_0x5470c0=>{var _0x5e632f=_0x108536;let _0x41f14b=new _0x5470c0(_0x5e632f(0x135)+(!this[_0x5e632f(0x155)]&&this[_0x5e632f(0xd9)]?_0x5e632f(0x14e):this[_0x5e632f(0xbb)])+':'+this[_0x5e632f(0x124)]);_0x41f14b[_0x5e632f(0x129)]=()=>{var _0x3cefb5=_0x5e632f;this[_0x3cefb5(0xa4)]=!0x1,this[_0x3cefb5(0x14c)](_0x41f14b),this['_attemptToReconnectShortly'](),_0x4de734(new Error(_0x3cefb5(0xc2)));},_0x41f14b[_0x5e632f(0x147)]=()=>{var _0x4d9a4a=_0x5e632f;this[_0x4d9a4a(0x155)]||_0x41f14b[_0x4d9a4a(0x148)]&&_0x41f14b[_0x4d9a4a(0x148)][_0x4d9a4a(0x110)]&&_0x41f14b[_0x4d9a4a(0x148)][_0x4d9a4a(0x110)](),_0x81ac52(_0x41f14b);},_0x41f14b[_0x5e632f(0xfa)]=()=>{var _0x5de1f8=_0x5e632f;this['_allowedToConnectOnSend']=!0x0,this['_disposeWebsocket'](_0x41f14b),this[_0x5de1f8(0x8d)]();},_0x41f14b['onmessage']=_0x5cf3f4=>{var _0x518521=_0x5e632f;try{if(!_0x5cf3f4?.[_0x518521(0xeb)]||!this[_0x518521(0xab)])return;let _0x3bc418=JSON['parse'](_0x5cf3f4['data']);this['eventReceivedCallback'](_0x3bc418['method'],_0x3bc418['args'],this[_0x518521(0x14b)],this[_0x518521(0x155)]);}catch{}};})['then'](_0x44e37e=>(this[_0x108536(0x152)]=!0x0,this['_connecting']=!0x1,this[_0x108536(0x12c)]=!0x1,this[_0x108536(0xa4)]=!0x0,this[_0x108536(0xb6)]=0x0,_0x44e37e))[_0x108536(0x14f)](_0x4341a5=>(this['_connected']=!0x1,this[_0x108536(0x91)]=!0x1,console[_0x108536(0xec)](_0x108536(0x14d)+this[_0x108536(0x15e)]),_0x4de734(new Error('failed\\x20to\\x20connect\\x20to\\x20host:\\x20'+(_0x4341a5&&_0x4341a5['message'])))));}));}[_0x4cf959(0x14c)](_0x4ad725){var _0x417929=_0x4cf959;this[_0x417929(0x152)]=!0x1,this[_0x417929(0x91)]=!0x1;try{_0x4ad725['onclose']=null,_0x4ad725['onerror']=null,_0x4ad725[_0x417929(0x147)]=null;}catch{}try{_0x4ad725[_0x417929(0xac)]<0x2&&_0x4ad725[_0x417929(0x88)]();}catch{}}['_attemptToReconnectShortly'](){var _0x1f4459=_0x4cf959;clearTimeout(this[_0x1f4459(0x158)]),!(this[_0x1f4459(0xb6)]>=this[_0x1f4459(0xbe)])&&(this[_0x1f4459(0x158)]=setTimeout(()=>{var _0xffe835=_0x1f4459;this['_connected']||this[_0xffe835(0x91)]||(this['_connectToHostNow'](),this[_0xffe835(0x115)]?.['catch'](()=>this[_0xffe835(0x8d)]()));},0x1f4),this[_0x1f4459(0x158)][_0x1f4459(0x110)]&&this[_0x1f4459(0x158)][_0x1f4459(0x110)]());}async[_0x4cf959(0xbc)](_0x34c975){var _0x2a1e57=_0x4cf959;try{if(!this['_allowedToSend'])return;this[_0x2a1e57(0x12c)]&&this[_0x2a1e57(0xef)](),(await this[_0x2a1e57(0x115)])[_0x2a1e57(0xbc)](JSON[_0x2a1e57(0x10c)](_0x34c975));}catch(_0x4fe125){console['warn'](this[_0x2a1e57(0x136)]+':\\x20'+(_0x4fe125&&_0x4fe125[_0x2a1e57(0x11d)])),this[_0x2a1e57(0xa4)]=!0x1,this[_0x2a1e57(0x8d)]();}}};function q(_0x5838af,_0x324af0,_0x5b91a1,_0x488ecf,_0x4906df,_0x1cc356,_0x38ae65,_0x564df1=ie){var _0x17eefa=_0x4cf959;let _0x3b3794=_0x5b91a1[_0x17eefa(0xcc)](',')[_0x17eefa(0x161)](_0x2578c1=>{var _0x5d1bef=_0x17eefa;try{if(!_0x5838af['_console_ninja_session']){let _0x3a561d=_0x5838af['process']?.[_0x5d1bef(0x83)]?.[_0x5d1bef(0xed)]||_0x5838af[_0x5d1bef(0x128)]?.['env']?.[_0x5d1bef(0x92)]===_0x5d1bef(0x112);(_0x4906df===_0x5d1bef(0x120)||_0x4906df===_0x5d1bef(0xba)||_0x4906df===_0x5d1bef(0x105)||_0x4906df===_0x5d1bef(0xb8))&&(_0x4906df+=_0x3a561d?_0x5d1bef(0x12d):'\\x20browser'),_0x5838af[_0x5d1bef(0xbf)]={'id':+new Date(),'tool':_0x4906df},_0x38ae65&&_0x4906df&&!_0x3a561d&&console['log'](_0x5d1bef(0x8e)+(_0x4906df['charAt'](0x0)['toUpperCase']()+_0x4906df[_0x5d1bef(0xe0)](0x1))+',','background:\\x20rgb(30,30,30);\\x20color:\\x20rgb(255,213,92)','see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.');}let _0x3c6d53=new x(_0x5838af,_0x324af0,_0x2578c1,_0x488ecf,_0x1cc356,_0x564df1);return _0x3c6d53['send'][_0x5d1bef(0x15b)](_0x3c6d53);}catch(_0x1aa9de){return console[_0x5d1bef(0xec)](_0x5d1bef(0xd3),_0x1aa9de&&_0x1aa9de[_0x5d1bef(0x11d)]),()=>{};}});return _0x2c1dbd=>_0x3b3794[_0x17eefa(0x122)](_0xb40c02=>_0xb40c02(_0x2c1dbd));}function ie(_0xd462e5,_0x1a1f72,_0x17e005,_0x1902c7){var _0x4f541d=_0x4cf959;_0x1902c7&&_0xd462e5===_0x4f541d(0x118)&&_0x17e005['location'][_0x4f541d(0x118)]();}function b(_0x2c83cb){var _0x5b655f=_0x4cf959;let _0x43cc27=function(_0x3a668f,_0x2e0260){return _0x2e0260-_0x3a668f;},_0x53bba0;if(_0x2c83cb[_0x5b655f(0x12f)])_0x53bba0=function(){var _0x24c1f2=_0x5b655f;return _0x2c83cb[_0x24c1f2(0x12f)][_0x24c1f2(0x9e)]();};else{if(_0x2c83cb[_0x5b655f(0x128)]&&_0x2c83cb['process']['hrtime']&&_0x2c83cb[_0x5b655f(0x128)]?.[_0x5b655f(0x87)]?.[_0x5b655f(0x92)]!=='edge')_0x53bba0=function(){var _0x5d296d=_0x5b655f;return _0x2c83cb[_0x5d296d(0x128)]['hrtime']();},_0x43cc27=function(_0x5dea5d,_0x434669){return 0x3e8*(_0x434669[0x0]-_0x5dea5d[0x0])+(_0x434669[0x1]-_0x5dea5d[0x1])/0xf4240;};else try{let {performance:_0x1a26e5}=require('perf_hooks');_0x53bba0=function(){return _0x1a26e5['now']();};}catch{_0x53bba0=function(){return+new Date();};}}return{'elapsed':_0x43cc27,'timeStamp':_0x53bba0,'now':()=>Date[_0x5b655f(0x9e)]()};}function X(_0x2fc7b0,_0x15f6b1,_0x2b90bd){var _0x1ebc6c=_0x4cf959;if(_0x2fc7b0[_0x1ebc6c(0x10f)]!==void 0x0)return _0x2fc7b0[_0x1ebc6c(0x10f)];let _0x4e081c=_0x2fc7b0[_0x1ebc6c(0x128)]?.['versions']?.[_0x1ebc6c(0xed)]||_0x2fc7b0[_0x1ebc6c(0x128)]?.[_0x1ebc6c(0x87)]?.[_0x1ebc6c(0x92)]===_0x1ebc6c(0x112);return _0x4e081c&&_0x2b90bd===_0x1ebc6c(0xc6)?_0x2fc7b0['_consoleNinjaAllowedToStart']=!0x1:_0x2fc7b0[_0x1ebc6c(0x10f)]=_0x4e081c||!_0x15f6b1||_0x2fc7b0['location']?.[_0x1ebc6c(0xae)]&&_0x15f6b1[_0x1ebc6c(0xcd)](_0x2fc7b0[_0x1ebc6c(0x95)][_0x1ebc6c(0xae)]),_0x2fc7b0[_0x1ebc6c(0x10f)];}function H(_0x4c2cad,_0x5963b0,_0x5d4da7,_0x5b5693){var _0x16cdf0=_0x4cf959;_0x4c2cad=_0x4c2cad,_0x5963b0=_0x5963b0,_0x5d4da7=_0x5d4da7,_0x5b5693=_0x5b5693;let _0x23024f=b(_0x4c2cad),_0x1bfbd7=_0x23024f['elapsed'],_0x1f6faa=_0x23024f[_0x16cdf0(0x12a)];class _0x370987{constructor(){var _0x606e41=_0x16cdf0;this['_keyStrRegExp']=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this['_numberRegExp']=/^(0|[1-9][0-9]*)$/,this[_0x606e41(0x84)]=/'([^\\\\']|\\\\')*'/,this[_0x606e41(0x103)]=_0x4c2cad['undefined'],this[_0x606e41(0x134)]=_0x4c2cad[_0x606e41(0x10d)],this[_0x606e41(0xf8)]=Object[_0x606e41(0x156)],this[_0x606e41(0xaa)]=Object[_0x606e41(0xc4)],this[_0x606e41(0xf2)]=_0x4c2cad[_0x606e41(0x157)],this[_0x606e41(0x151)]=RegExp[_0x606e41(0xc0)][_0x606e41(0x149)],this['_dateToString']=Date[_0x606e41(0xc0)][_0x606e41(0x149)];}[_0x16cdf0(0x141)](_0x30cdbf,_0x472c40,_0x50de8c,_0x340b6c){var _0x21b5b0=_0x16cdf0,_0x160506=this,_0x34bb00=_0x50de8c[_0x21b5b0(0xf4)];function _0x2fe4f8(_0x3a4f83,_0x4d9c4b,_0x53063f){var _0xe3f1eb=_0x21b5b0;_0x4d9c4b[_0xe3f1eb(0x164)]='unknown',_0x4d9c4b[_0xe3f1eb(0x13d)]=_0x3a4f83['message'],_0x4098d9=_0x53063f[_0xe3f1eb(0xed)]['current'],_0x53063f['node'][_0xe3f1eb(0x100)]=_0x4d9c4b,_0x160506[_0xe3f1eb(0x98)](_0x4d9c4b,_0x53063f);}try{_0x50de8c[_0x21b5b0(0xfe)]++,_0x50de8c[_0x21b5b0(0xf4)]&&_0x50de8c[_0x21b5b0(0xdc)][_0x21b5b0(0xe1)](_0x472c40);var _0xd67285,_0x477b1b,_0x35b685,_0x421303,_0x3cfbed=[],_0x2dd685=[],_0x41330d,_0x369395=this[_0x21b5b0(0x10b)](_0x472c40),_0x31f427=_0x369395===_0x21b5b0(0x12b),_0x26aa54=!0x1,_0x541664=_0x369395===_0x21b5b0(0x131),_0x5b0b89=this[_0x21b5b0(0x15f)](_0x369395),_0xc14d03=this[_0x21b5b0(0x138)](_0x369395),_0x5f3a55=_0x5b0b89||_0xc14d03,_0x3faea5={},_0x5dec58=0x0,_0x3b084a=!0x1,_0x4098d9,_0x1bd102=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x50de8c[_0x21b5b0(0x166)]){if(_0x31f427){if(_0x477b1b=_0x472c40[_0x21b5b0(0xb3)],_0x477b1b>_0x50de8c[_0x21b5b0(0xea)]){for(_0x35b685=0x0,_0x421303=_0x50de8c[_0x21b5b0(0xea)],_0xd67285=_0x35b685;_0xd67285<_0x421303;_0xd67285++)_0x2dd685[_0x21b5b0(0xe1)](_0x160506[_0x21b5b0(0x13e)](_0x3cfbed,_0x472c40,_0x369395,_0xd67285,_0x50de8c));_0x30cdbf['cappedElements']=!0x0;}else{for(_0x35b685=0x0,_0x421303=_0x477b1b,_0xd67285=_0x35b685;_0xd67285<_0x421303;_0xd67285++)_0x2dd685[_0x21b5b0(0xe1)](_0x160506[_0x21b5b0(0x13e)](_0x3cfbed,_0x472c40,_0x369395,_0xd67285,_0x50de8c));}_0x50de8c[_0x21b5b0(0x101)]+=_0x2dd685[_0x21b5b0(0xb3)];}if(!(_0x369395==='null'||_0x369395===_0x21b5b0(0xb0))&&!_0x5b0b89&&_0x369395!==_0x21b5b0(0x13f)&&_0x369395!=='Buffer'&&_0x369395!==_0x21b5b0(0x162)){var _0x5dd60a=_0x340b6c[_0x21b5b0(0xc5)]||_0x50de8c[_0x21b5b0(0xc5)];if(this[_0x21b5b0(0xe7)](_0x472c40)?(_0xd67285=0x0,_0x472c40[_0x21b5b0(0x122)](function(_0x14ae96){var _0x12b28b=_0x21b5b0;if(_0x5dec58++,_0x50de8c[_0x12b28b(0x101)]++,_0x5dec58>_0x5dd60a){_0x3b084a=!0x0;return;}if(!_0x50de8c[_0x12b28b(0x11c)]&&_0x50de8c[_0x12b28b(0xf4)]&&_0x50de8c[_0x12b28b(0x101)]>_0x50de8c[_0x12b28b(0xde)]){_0x3b084a=!0x0;return;}_0x2dd685[_0x12b28b(0xe1)](_0x160506[_0x12b28b(0x13e)](_0x3cfbed,_0x472c40,_0x12b28b(0x127),_0xd67285++,_0x50de8c,function(_0x5b67f7){return function(){return _0x5b67f7;};}(_0x14ae96)));})):this[_0x21b5b0(0x144)](_0x472c40)&&_0x472c40[_0x21b5b0(0x122)](function(_0x4048d9,_0x2a8381){var _0xb0b6b0=_0x21b5b0;if(_0x5dec58++,_0x50de8c['autoExpandPropertyCount']++,_0x5dec58>_0x5dd60a){_0x3b084a=!0x0;return;}if(!_0x50de8c[_0xb0b6b0(0x11c)]&&_0x50de8c[_0xb0b6b0(0xf4)]&&_0x50de8c[_0xb0b6b0(0x101)]>_0x50de8c[_0xb0b6b0(0xde)]){_0x3b084a=!0x0;return;}var _0x14c4cf=_0x2a8381['toString']();_0x14c4cf[_0xb0b6b0(0xb3)]>0x64&&(_0x14c4cf=_0x14c4cf[_0xb0b6b0(0x90)](0x0,0x64)+_0xb0b6b0(0x13c)),_0x2dd685['push'](_0x160506['_addProperty'](_0x3cfbed,_0x472c40,'Map',_0x14c4cf,_0x50de8c,function(_0x4bff58){return function(){return _0x4bff58;};}(_0x4048d9)));}),!_0x26aa54){try{for(_0x41330d in _0x472c40)if(!(_0x31f427&&_0x1bd102[_0x21b5b0(0xa9)](_0x41330d))&&!this[_0x21b5b0(0x139)](_0x472c40,_0x41330d,_0x50de8c)){if(_0x5dec58++,_0x50de8c[_0x21b5b0(0x101)]++,_0x5dec58>_0x5dd60a){_0x3b084a=!0x0;break;}if(!_0x50de8c[_0x21b5b0(0x11c)]&&_0x50de8c[_0x21b5b0(0xf4)]&&_0x50de8c['autoExpandPropertyCount']>_0x50de8c[_0x21b5b0(0xde)]){_0x3b084a=!0x0;break;}_0x2dd685['push'](_0x160506[_0x21b5b0(0xca)](_0x3cfbed,_0x3faea5,_0x472c40,_0x369395,_0x41330d,_0x50de8c));}}catch{}if(_0x3faea5[_0x21b5b0(0x165)]=!0x0,_0x541664&&(_0x3faea5[_0x21b5b0(0xb7)]=!0x0),!_0x3b084a){var _0xd854f1=[][_0x21b5b0(0xe2)](this[_0x21b5b0(0xaa)](_0x472c40))[_0x21b5b0(0xe2)](this[_0x21b5b0(0x153)](_0x472c40));for(_0xd67285=0x0,_0x477b1b=_0xd854f1['length'];_0xd67285<_0x477b1b;_0xd67285++)if(_0x41330d=_0xd854f1[_0xd67285],!(_0x31f427&&_0x1bd102[_0x21b5b0(0xa9)](_0x41330d[_0x21b5b0(0x149)]()))&&!this[_0x21b5b0(0x139)](_0x472c40,_0x41330d,_0x50de8c)&&!_0x3faea5['_p_'+_0x41330d[_0x21b5b0(0x149)]()]){if(_0x5dec58++,_0x50de8c[_0x21b5b0(0x101)]++,_0x5dec58>_0x5dd60a){_0x3b084a=!0x0;break;}if(!_0x50de8c[_0x21b5b0(0x11c)]&&_0x50de8c[_0x21b5b0(0xf4)]&&_0x50de8c[_0x21b5b0(0x101)]>_0x50de8c['autoExpandLimit']){_0x3b084a=!0x0;break;}_0x2dd685[_0x21b5b0(0xe1)](_0x160506[_0x21b5b0(0xca)](_0x3cfbed,_0x3faea5,_0x472c40,_0x369395,_0x41330d,_0x50de8c));}}}}}if(_0x30cdbf['type']=_0x369395,_0x5f3a55?(_0x30cdbf[_0x21b5b0(0x89)]=_0x472c40[_0x21b5b0(0x14a)](),this[_0x21b5b0(0xe3)](_0x369395,_0x30cdbf,_0x50de8c,_0x340b6c)):_0x369395===_0x21b5b0(0x104)?_0x30cdbf[_0x21b5b0(0x89)]=this[_0x21b5b0(0xfc)]['call'](_0x472c40):_0x369395===_0x21b5b0(0x162)?_0x30cdbf[_0x21b5b0(0x89)]=_0x472c40[_0x21b5b0(0x149)]():_0x369395==='RegExp'?_0x30cdbf[_0x21b5b0(0x89)]=this['_regExpToString'][_0x21b5b0(0x11e)](_0x472c40):_0x369395===_0x21b5b0(0x168)&&this[_0x21b5b0(0xf2)]?_0x30cdbf[_0x21b5b0(0x89)]=this[_0x21b5b0(0xf2)][_0x21b5b0(0xc0)][_0x21b5b0(0x149)][_0x21b5b0(0x11e)](_0x472c40):!_0x50de8c[_0x21b5b0(0x166)]&&!(_0x369395===_0x21b5b0(0x102)||_0x369395===_0x21b5b0(0xb0))&&(delete _0x30cdbf[_0x21b5b0(0x89)],_0x30cdbf['capped']=!0x0),_0x3b084a&&(_0x30cdbf['cappedProps']=!0x0),_0x4098d9=_0x50de8c[_0x21b5b0(0xed)][_0x21b5b0(0x100)],_0x50de8c['node'][_0x21b5b0(0x100)]=_0x30cdbf,this[_0x21b5b0(0x98)](_0x30cdbf,_0x50de8c),_0x2dd685[_0x21b5b0(0xb3)]){for(_0xd67285=0x0,_0x477b1b=_0x2dd685[_0x21b5b0(0xb3)];_0xd67285<_0x477b1b;_0xd67285++)_0x2dd685[_0xd67285](_0xd67285);}_0x3cfbed[_0x21b5b0(0xb3)]&&(_0x30cdbf[_0x21b5b0(0xc5)]=_0x3cfbed);}catch(_0x390bc4){_0x2fe4f8(_0x390bc4,_0x30cdbf,_0x50de8c);}return this[_0x21b5b0(0x85)](_0x472c40,_0x30cdbf),this[_0x21b5b0(0x145)](_0x30cdbf,_0x50de8c),_0x50de8c[_0x21b5b0(0xed)][_0x21b5b0(0x100)]=_0x4098d9,_0x50de8c['level']--,_0x50de8c['autoExpand']=_0x34bb00,_0x50de8c[_0x21b5b0(0xf4)]&&_0x50de8c[_0x21b5b0(0xdc)][_0x21b5b0(0xf5)](),_0x30cdbf;}['_getOwnPropertySymbols'](_0x357bb5){var _0x4437f4=_0x16cdf0;return Object['getOwnPropertySymbols']?Object[_0x4437f4(0x15d)](_0x357bb5):[];}[_0x16cdf0(0xe7)](_0x387400){var _0x38daec=_0x16cdf0;return!!(_0x387400&&_0x4c2cad[_0x38daec(0x127)]&&this['_objectToString'](_0x387400)===_0x38daec(0xe9)&&_0x387400[_0x38daec(0x122)]);}[_0x16cdf0(0x139)](_0x405058,_0x58abf5,_0x28302f){var _0x4f53e7=_0x16cdf0;return _0x28302f['noFunctions']?typeof _0x405058[_0x58abf5]==_0x4f53e7(0x131):!0x1;}['_type'](_0x24d4bd){var _0x5509e9=_0x16cdf0,_0x5593bd='';return _0x5593bd=typeof _0x24d4bd,_0x5593bd===_0x5509e9(0xbd)?this[_0x5509e9(0x97)](_0x24d4bd)==='[object\\x20Array]'?_0x5593bd=_0x5509e9(0x12b):this['_objectToString'](_0x24d4bd)==='[object\\x20Date]'?_0x5593bd=_0x5509e9(0x104):this['_objectToString'](_0x24d4bd)===_0x5509e9(0x113)?_0x5593bd=_0x5509e9(0x162):_0x24d4bd===null?_0x5593bd=_0x5509e9(0x102):_0x24d4bd[_0x5509e9(0xf9)]&&(_0x5593bd=_0x24d4bd[_0x5509e9(0xf9)]['name']||_0x5593bd):_0x5593bd===_0x5509e9(0xb0)&&this['_HTMLAllCollection']&&_0x24d4bd instanceof this[_0x5509e9(0x134)]&&(_0x5593bd='HTMLAllCollection'),_0x5593bd;}[_0x16cdf0(0x97)](_0x253bf3){var _0x2d909=_0x16cdf0;return Object['prototype'][_0x2d909(0x149)][_0x2d909(0x11e)](_0x253bf3);}['_isPrimitiveType'](_0x16ac80){var _0x44dd91=_0x16cdf0;return _0x16ac80===_0x44dd91(0x8a)||_0x16ac80===_0x44dd91(0xaf)||_0x16ac80==='number';}[_0x16cdf0(0x138)](_0x36ef8e){var _0x13f780=_0x16cdf0;return _0x36ef8e==='Boolean'||_0x36ef8e===_0x13f780(0x13f)||_0x36ef8e===_0x13f780(0xfb);}[_0x16cdf0(0x13e)](_0x1d90e5,_0x2c3b5b,_0x26a7f8,_0x436c32,_0x543542,_0x516e45){var _0x28fd1c=this;return function(_0x4aef0e){var _0x57b948=_0x5db4,_0x4868f4=_0x543542[_0x57b948(0xed)]['current'],_0x24f364=_0x543542[_0x57b948(0xed)][_0x57b948(0xb4)],_0x3e2a17=_0x543542['node'][_0x57b948(0x15c)];_0x543542['node']['parent']=_0x4868f4,_0x543542[_0x57b948(0xed)][_0x57b948(0xb4)]=typeof _0x436c32==_0x57b948(0xa6)?_0x436c32:_0x4aef0e,_0x1d90e5[_0x57b948(0xe1)](_0x28fd1c[_0x57b948(0x81)](_0x2c3b5b,_0x26a7f8,_0x436c32,_0x543542,_0x516e45)),_0x543542[_0x57b948(0xed)]['parent']=_0x3e2a17,_0x543542['node'][_0x57b948(0xb4)]=_0x24f364;};}[_0x16cdf0(0xca)](_0x479bed,_0x31401a,_0xb4d10f,_0x2011cd,_0x486f61,_0x221cf1,_0x45ef77){var _0xd4ebf2=_0x16cdf0,_0x1b2a37=this;return _0x31401a[_0xd4ebf2(0xd5)+_0x486f61['toString']()]=!0x0,function(_0x3d8f50){var _0x2df704=_0xd4ebf2,_0x22e26c=_0x221cf1['node'][_0x2df704(0x100)],_0x51252d=_0x221cf1['node'][_0x2df704(0xb4)],_0x3e9abc=_0x221cf1[_0x2df704(0xed)]['parent'];_0x221cf1['node'][_0x2df704(0x15c)]=_0x22e26c,_0x221cf1['node'][_0x2df704(0xb4)]=_0x3d8f50,_0x479bed['push'](_0x1b2a37[_0x2df704(0x81)](_0xb4d10f,_0x2011cd,_0x486f61,_0x221cf1,_0x45ef77)),_0x221cf1[_0x2df704(0xed)]['parent']=_0x3e9abc,_0x221cf1[_0x2df704(0xed)][_0x2df704(0xb4)]=_0x51252d;};}[_0x16cdf0(0x81)](_0x39295e,_0x3e27ee,_0x50155e,_0x3affbd,_0x1217d6){var _0x5824f4=_0x16cdf0,_0x4b5214=this;_0x1217d6||(_0x1217d6=function(_0xd0c2d5,_0x1fec0c){return _0xd0c2d5[_0x1fec0c];});var _0x37c4ca=_0x50155e[_0x5824f4(0x149)](),_0x180cc2=_0x3affbd['expressionsToEvaluate']||{},_0x5769bf=_0x3affbd['depth'],_0xc82d5b=_0x3affbd['isExpressionToEvaluate'];try{var _0x509319=this['_isMap'](_0x39295e),_0x3686a3=_0x37c4ca;_0x509319&&_0x3686a3[0x0]==='\\x27'&&(_0x3686a3=_0x3686a3[_0x5824f4(0xe0)](0x1,_0x3686a3['length']-0x2));var _0xb5fe17=_0x3affbd[_0x5824f4(0x86)]=_0x180cc2['_p_'+_0x3686a3];_0xb5fe17&&(_0x3affbd[_0x5824f4(0x166)]=_0x3affbd['depth']+0x1),_0x3affbd[_0x5824f4(0x11c)]=!!_0xb5fe17;var _0x1e8cfa=typeof _0x50155e==_0x5824f4(0x168),_0x5a71fe={'name':_0x1e8cfa||_0x509319?_0x37c4ca:this[_0x5824f4(0x159)](_0x37c4ca)};if(_0x1e8cfa&&(_0x5a71fe[_0x5824f4(0x168)]=!0x0),!(_0x3e27ee==='array'||_0x3e27ee===_0x5824f4(0x140))){var _0x3c5972=this['_getOwnPropertyDescriptor'](_0x39295e,_0x50155e);if(_0x3c5972&&(_0x3c5972[_0x5824f4(0xe6)]&&(_0x5a71fe['setter']=!0x0),_0x3c5972['get']&&!_0xb5fe17&&!_0x3affbd[_0x5824f4(0x117)]))return _0x5a71fe['getter']=!0x0,this[_0x5824f4(0x93)](_0x5a71fe,_0x3affbd),_0x5a71fe;}var _0x3d6747;try{_0x3d6747=_0x1217d6(_0x39295e,_0x50155e);}catch(_0x3f5cfe){return _0x5a71fe={'name':_0x37c4ca,'type':'unknown','error':_0x3f5cfe[_0x5824f4(0x11d)]},this[_0x5824f4(0x93)](_0x5a71fe,_0x3affbd),_0x5a71fe;}var _0x24f108=this[_0x5824f4(0x10b)](_0x3d6747),_0x39aecc=this['_isPrimitiveType'](_0x24f108);if(_0x5a71fe[_0x5824f4(0x164)]=_0x24f108,_0x39aecc)this[_0x5824f4(0x93)](_0x5a71fe,_0x3affbd,_0x3d6747,function(){var _0x38c1d5=_0x5824f4;_0x5a71fe['value']=_0x3d6747[_0x38c1d5(0x14a)](),!_0xb5fe17&&_0x4b5214[_0x38c1d5(0xe3)](_0x24f108,_0x5a71fe,_0x3affbd,{});});else{var _0x5ddfcc=_0x3affbd['autoExpand']&&_0x3affbd[_0x5824f4(0xfe)]<_0x3affbd[_0x5824f4(0xf6)]&&_0x3affbd[_0x5824f4(0xdc)]['indexOf'](_0x3d6747)<0x0&&_0x24f108!==_0x5824f4(0x131)&&_0x3affbd['autoExpandPropertyCount']<_0x3affbd[_0x5824f4(0xde)];_0x5ddfcc||_0x3affbd[_0x5824f4(0xfe)]<_0x5769bf||_0xb5fe17?(this[_0x5824f4(0x141)](_0x5a71fe,_0x3d6747,_0x3affbd,_0xb5fe17||{}),this['_additionalMetadata'](_0x3d6747,_0x5a71fe)):this[_0x5824f4(0x93)](_0x5a71fe,_0x3affbd,_0x3d6747,function(){var _0x496ce6=_0x5824f4;_0x24f108===_0x496ce6(0x102)||_0x24f108==='undefined'||(delete _0x5a71fe[_0x496ce6(0x89)],_0x5a71fe['capped']=!0x0);});}return _0x5a71fe;}finally{_0x3affbd[_0x5824f4(0x86)]=_0x180cc2,_0x3affbd[_0x5824f4(0x166)]=_0x5769bf,_0x3affbd['isExpressionToEvaluate']=_0xc82d5b;}}['_capIfString'](_0x2a6c73,_0x1dad47,_0x419812,_0x296098){var _0x36d2ff=_0x16cdf0,_0x44734d=_0x296098[_0x36d2ff(0x111)]||_0x419812[_0x36d2ff(0x111)];if((_0x2a6c73===_0x36d2ff(0xaf)||_0x2a6c73==='String')&&_0x1dad47['value']){let _0x1ed0df=_0x1dad47['value'][_0x36d2ff(0xb3)];_0x419812[_0x36d2ff(0x9b)]+=_0x1ed0df,_0x419812[_0x36d2ff(0x9b)]>_0x419812[_0x36d2ff(0xa0)]?(_0x1dad47['capped']='',delete _0x1dad47[_0x36d2ff(0x89)]):_0x1ed0df>_0x44734d&&(_0x1dad47['capped']=_0x1dad47[_0x36d2ff(0x89)]['substr'](0x0,_0x44734d),delete _0x1dad47[_0x36d2ff(0x89)]);}}['_isMap'](_0x1b8159){var _0x1c4a0a=_0x16cdf0;return!!(_0x1b8159&&_0x4c2cad[_0x1c4a0a(0x133)]&&this[_0x1c4a0a(0x97)](_0x1b8159)==='[object\\x20Map]'&&_0x1b8159['forEach']);}[_0x16cdf0(0x159)](_0x13df35){var _0x32f329=_0x16cdf0;if(_0x13df35['match'](/^\\d+$/))return _0x13df35;var _0xdd86e5;try{_0xdd86e5=JSON[_0x32f329(0x10c)](''+_0x13df35);}catch{_0xdd86e5='\\x22'+this[_0x32f329(0x97)](_0x13df35)+'\\x22';}return _0xdd86e5[_0x32f329(0x109)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0xdd86e5=_0xdd86e5['substr'](0x1,_0xdd86e5[_0x32f329(0xb3)]-0x2):_0xdd86e5=_0xdd86e5['replace'](/'/g,'\\x5c\\x27')[_0x32f329(0xa3)](/\\\\\"/g,'\\x22')[_0x32f329(0xa3)](/(^\"|\"$)/g,'\\x27'),_0xdd86e5;}[_0x16cdf0(0x93)](_0x3967fd,_0x11fc60,_0x5bb5c4,_0x10fdb3){var _0x37ca66=_0x16cdf0;this['_treeNodePropertiesBeforeFullValue'](_0x3967fd,_0x11fc60),_0x10fdb3&&_0x10fdb3(),this[_0x37ca66(0x85)](_0x5bb5c4,_0x3967fd),this[_0x37ca66(0x145)](_0x3967fd,_0x11fc60);}[_0x16cdf0(0x98)](_0x4662d9,_0x8471f5){var _0xf3315e=_0x16cdf0;this['_setNodeId'](_0x4662d9,_0x8471f5),this['_setNodeQueryPath'](_0x4662d9,_0x8471f5),this[_0xf3315e(0x163)](_0x4662d9,_0x8471f5),this['_setNodePermissions'](_0x4662d9,_0x8471f5);}[_0x16cdf0(0x143)](_0x1f3e57,_0x1dd6ea){}[_0x16cdf0(0x10a)](_0x3d45af,_0x3a9c70){}[_0x16cdf0(0xc8)](_0x2cc832,_0x2c03e9){}[_0x16cdf0(0x96)](_0x4cb561){var _0x2926d0=_0x16cdf0;return _0x4cb561===this[_0x2926d0(0x103)];}[_0x16cdf0(0x145)](_0x28cbb3,_0x44af26){var _0x1e76dd=_0x16cdf0;this[_0x1e76dd(0xc8)](_0x28cbb3,_0x44af26),this[_0x1e76dd(0xfd)](_0x28cbb3),_0x44af26[_0x1e76dd(0x8c)]&&this[_0x1e76dd(0x99)](_0x28cbb3),this[_0x1e76dd(0xf1)](_0x28cbb3,_0x44af26),this[_0x1e76dd(0xb5)](_0x28cbb3,_0x44af26),this['_cleanNode'](_0x28cbb3);}[_0x16cdf0(0x85)](_0x51763c,_0x413e9b){var _0xf7159d=_0x16cdf0;let _0x4cf65a;try{_0x4c2cad[_0xf7159d(0x123)]&&(_0x4cf65a=_0x4c2cad[_0xf7159d(0x123)][_0xf7159d(0x13d)],_0x4c2cad[_0xf7159d(0x123)][_0xf7159d(0x13d)]=function(){}),_0x51763c&&typeof _0x51763c[_0xf7159d(0xb3)]==_0xf7159d(0xa6)&&(_0x413e9b[_0xf7159d(0xb3)]=_0x51763c[_0xf7159d(0xb3)]);}catch{}finally{_0x4cf65a&&(_0x4c2cad[_0xf7159d(0x123)][_0xf7159d(0x13d)]=_0x4cf65a);}if(_0x413e9b[_0xf7159d(0x164)]==='number'||_0x413e9b[_0xf7159d(0x164)]===_0xf7159d(0xfb)){if(isNaN(_0x413e9b['value']))_0x413e9b[_0xf7159d(0x154)]=!0x0,delete _0x413e9b[_0xf7159d(0x89)];else switch(_0x413e9b[_0xf7159d(0x89)]){case Number['POSITIVE_INFINITY']:_0x413e9b[_0xf7159d(0x11a)]=!0x0,delete _0x413e9b[_0xf7159d(0x89)];break;case Number[_0xf7159d(0xd2)]:_0x413e9b[_0xf7159d(0x80)]=!0x0,delete _0x413e9b[_0xf7159d(0x89)];break;case 0x0:this[_0xf7159d(0xe8)](_0x413e9b['value'])&&(_0x413e9b[_0xf7159d(0x12e)]=!0x0);break;}}else _0x413e9b[_0xf7159d(0x164)]===_0xf7159d(0x131)&&typeof _0x51763c[_0xf7159d(0x82)]=='string'&&_0x51763c[_0xf7159d(0x82)]&&_0x413e9b[_0xf7159d(0x82)]&&_0x51763c[_0xf7159d(0x82)]!==_0x413e9b[_0xf7159d(0x82)]&&(_0x413e9b[_0xf7159d(0x8f)]=_0x51763c[_0xf7159d(0x82)]);}[_0x16cdf0(0xe8)](_0x11812a){var _0x2e7867=_0x16cdf0;return 0x1/_0x11812a===Number[_0x2e7867(0xd2)];}[_0x16cdf0(0x99)](_0x14f4cd){var _0x4e852a=_0x16cdf0;!_0x14f4cd[_0x4e852a(0xc5)]||!_0x14f4cd[_0x4e852a(0xc5)][_0x4e852a(0xb3)]||_0x14f4cd['type']===_0x4e852a(0x12b)||_0x14f4cd[_0x4e852a(0x164)]==='Map'||_0x14f4cd[_0x4e852a(0x164)]==='Set'||_0x14f4cd[_0x4e852a(0xc5)]['sort'](function(_0x165edd,_0x3b57e8){var _0x47abe5=_0x4e852a,_0x1848fa=_0x165edd[_0x47abe5(0x82)][_0x47abe5(0xd6)](),_0x47596d=_0x3b57e8[_0x47abe5(0x82)][_0x47abe5(0xd6)]();return _0x1848fa<_0x47596d?-0x1:_0x1848fa>_0x47596d?0x1:0x0;});}[_0x16cdf0(0xf1)](_0xcc15b3,_0x4917cf){var _0x4d0393=_0x16cdf0;if(!(_0x4917cf[_0x4d0393(0xb1)]||!_0xcc15b3[_0x4d0393(0xc5)]||!_0xcc15b3['props'][_0x4d0393(0xb3)])){for(var _0x481a1a=[],_0x4677f2=[],_0x203400=0x0,_0x26506d=_0xcc15b3['props'][_0x4d0393(0xb3)];_0x203400<_0x26506d;_0x203400++){var _0x119f46=_0xcc15b3[_0x4d0393(0xc5)][_0x203400];_0x119f46['type']==='function'?_0x481a1a['push'](_0x119f46):_0x4677f2[_0x4d0393(0xe1)](_0x119f46);}if(!(!_0x4677f2[_0x4d0393(0xb3)]||_0x481a1a['length']<=0x1)){_0xcc15b3[_0x4d0393(0xc5)]=_0x4677f2;var _0xec4879={'functionsNode':!0x0,'props':_0x481a1a};this[_0x4d0393(0x143)](_0xec4879,_0x4917cf),this[_0x4d0393(0xc8)](_0xec4879,_0x4917cf),this['_setNodeExpandableState'](_0xec4879),this['_setNodePermissions'](_0xec4879,_0x4917cf),_0xec4879['id']+='\\x20f',_0xcc15b3[_0x4d0393(0xc5)][_0x4d0393(0x11f)](_0xec4879);}}}[_0x16cdf0(0xb5)](_0x4b36b3,_0x569fe0){}[_0x16cdf0(0xfd)](_0x2adfec){}['_isArray'](_0x52ad50){var _0x3c6442=_0x16cdf0;return Array[_0x3c6442(0x150)](_0x52ad50)||typeof _0x52ad50==_0x3c6442(0xbd)&&this[_0x3c6442(0x97)](_0x52ad50)===_0x3c6442(0xb9);}[_0x16cdf0(0xa1)](_0x1155b8,_0x2b4364){}[_0x16cdf0(0x9a)](_0xeb7e6e){var _0x59f71a=_0x16cdf0;delete _0xeb7e6e['_hasSymbolPropertyOnItsPath'],delete _0xeb7e6e[_0x59f71a(0xf3)],delete _0xeb7e6e[_0x59f71a(0xcb)];}[_0x16cdf0(0x163)](_0x1455cb,_0x334b0a){}}let _0x4f52bd=new _0x370987(),_0x3f91d0={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x36df60={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x4aedb0(_0x37d7d5,_0x54e157,_0x1c4223,_0x2655ec,_0x54bd48,_0x162f9f){var _0x5b69c5=_0x16cdf0;let _0x188e6d,_0x51eeec;try{_0x51eeec=_0x1f6faa(),_0x188e6d=_0x5d4da7[_0x54e157],!_0x188e6d||_0x51eeec-_0x188e6d['ts']>0x1f4&&_0x188e6d[_0x5b69c5(0xb2)]&&_0x188e6d['time']/_0x188e6d['count']<0x64?(_0x5d4da7[_0x54e157]=_0x188e6d={'count':0x0,'time':0x0,'ts':_0x51eeec},_0x5d4da7['hits']={}):_0x51eeec-_0x5d4da7[_0x5b69c5(0x116)]['ts']>0x32&&_0x5d4da7['hits'][_0x5b69c5(0xb2)]&&_0x5d4da7[_0x5b69c5(0x116)][_0x5b69c5(0x9c)]/_0x5d4da7['hits'][_0x5b69c5(0xb2)]<0x64&&(_0x5d4da7[_0x5b69c5(0x116)]={});let _0x5f4817=[],_0xf473ff=_0x188e6d['reduceLimits']||_0x5d4da7[_0x5b69c5(0x116)][_0x5b69c5(0xdb)]?_0x36df60:_0x3f91d0,_0x6f17a1=_0x15e0ac=>{var _0x25c439=_0x5b69c5;let _0x5c7829={};return _0x5c7829[_0x25c439(0xc5)]=_0x15e0ac[_0x25c439(0xc5)],_0x5c7829['elements']=_0x15e0ac[_0x25c439(0xea)],_0x5c7829[_0x25c439(0x111)]=_0x15e0ac[_0x25c439(0x111)],_0x5c7829[_0x25c439(0xa0)]=_0x15e0ac[_0x25c439(0xa0)],_0x5c7829[_0x25c439(0xde)]=_0x15e0ac[_0x25c439(0xde)],_0x5c7829[_0x25c439(0xf6)]=_0x15e0ac[_0x25c439(0xf6)],_0x5c7829['sortProps']=!0x1,_0x5c7829['noFunctions']=!_0x5963b0,_0x5c7829[_0x25c439(0x166)]=0x1,_0x5c7829[_0x25c439(0xfe)]=0x0,_0x5c7829['expId']=_0x25c439(0x106),_0x5c7829[_0x25c439(0x137)]=_0x25c439(0xa5),_0x5c7829[_0x25c439(0xf4)]=!0x0,_0x5c7829[_0x25c439(0xdc)]=[],_0x5c7829['autoExpandPropertyCount']=0x0,_0x5c7829[_0x25c439(0x117)]=!0x0,_0x5c7829[_0x25c439(0x9b)]=0x0,_0x5c7829[_0x25c439(0xed)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x5c7829;};for(var _0x4f90fe=0x0;_0x4f90fe<_0x54bd48[_0x5b69c5(0xb3)];_0x4f90fe++)_0x5f4817['push'](_0x4f52bd[_0x5b69c5(0x141)]({'timeNode':_0x37d7d5===_0x5b69c5(0x9c)||void 0x0},_0x54bd48[_0x4f90fe],_0x6f17a1(_0xf473ff),{}));if(_0x37d7d5===_0x5b69c5(0xa8)){let _0x30a923=Error[_0x5b69c5(0x94)];try{Error['stackTraceLimit']=0x1/0x0,_0x5f4817['push'](_0x4f52bd[_0x5b69c5(0x141)]({'stackNode':!0x0},new Error()['stack'],_0x6f17a1(_0xf473ff),{'strLength':0x1/0x0}));}finally{Error[_0x5b69c5(0x94)]=_0x30a923;}}return{'method':'log','version':_0x5b5693,'args':[{'ts':_0x1c4223,'session':_0x2655ec,'args':_0x5f4817,'id':_0x54e157,'context':_0x162f9f}]};}catch(_0x1bdd63){return{'method':'log','version':_0x5b5693,'args':[{'ts':_0x1c4223,'session':_0x2655ec,'args':[{'type':_0x5b69c5(0xd7),'error':_0x1bdd63&&_0x1bdd63[_0x5b69c5(0x11d)]}],'id':_0x54e157,'context':_0x162f9f}]};}finally{try{if(_0x188e6d&&_0x51eeec){let _0x51ee57=_0x1f6faa();_0x188e6d[_0x5b69c5(0xb2)]++,_0x188e6d[_0x5b69c5(0x9c)]+=_0x1bfbd7(_0x51eeec,_0x51ee57),_0x188e6d['ts']=_0x51ee57,_0x5d4da7[_0x5b69c5(0x116)][_0x5b69c5(0xb2)]++,_0x5d4da7[_0x5b69c5(0x116)]['time']+=_0x1bfbd7(_0x51eeec,_0x51ee57),_0x5d4da7[_0x5b69c5(0x116)]['ts']=_0x51ee57,(_0x188e6d['count']>0x32||_0x188e6d[_0x5b69c5(0x9c)]>0x64)&&(_0x188e6d['reduceLimits']=!0x0),(_0x5d4da7['hits']['count']>0x3e8||_0x5d4da7[_0x5b69c5(0x116)][_0x5b69c5(0x9c)]>0x12c)&&(_0x5d4da7[_0x5b69c5(0x116)][_0x5b69c5(0xdb)]=!0x0);}}catch{}}}return _0x4aedb0;}((_0x1d9eba,_0x521910,_0x223aaa,_0x3bf0ff,_0x3cc83b,_0x2f3155,_0x1463a6,_0x2aea0a,_0x54a6ce,_0x49b65f,_0x40da01)=>{var _0xa04a9a=_0x4cf959;if(_0x1d9eba['_console_ninja'])return _0x1d9eba[_0xa04a9a(0x142)];if(!X(_0x1d9eba,_0x2aea0a,_0x3cc83b))return _0x1d9eba[_0xa04a9a(0x142)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x1d9eba[_0xa04a9a(0x142)];let _0x1b23c6=b(_0x1d9eba),_0xb54c43=_0x1b23c6[_0xa04a9a(0xda)],_0x3f01c5=_0x1b23c6[_0xa04a9a(0x12a)],_0x56e6b4=_0x1b23c6['now'],_0x1e69f1={'hits':{},'ts':{}},_0x223dbc=H(_0x1d9eba,_0x54a6ce,_0x1e69f1,_0x2f3155),_0x412381=_0x1ebed2=>{_0x1e69f1['ts'][_0x1ebed2]=_0x3f01c5();},_0x380ae0=(_0x119a26,_0x197109)=>{var _0x9a103d=_0xa04a9a;let _0x5d241b=_0x1e69f1['ts'][_0x197109];if(delete _0x1e69f1['ts'][_0x197109],_0x5d241b){let _0x42b588=_0xb54c43(_0x5d241b,_0x3f01c5());_0x28daf5(_0x223dbc(_0x9a103d(0x9c),_0x119a26,_0x56e6b4(),_0xde33ce,[_0x42b588],_0x197109));}},_0x5b86b0=_0x5ae609=>(_0x3cc83b===_0xa04a9a(0x120)&&_0x1d9eba['origin']&&_0x5ae609?.[_0xa04a9a(0xd1)]?.['length']&&(_0x5ae609[_0xa04a9a(0xd1)][0x0][_0xa04a9a(0x146)]=_0x1d9eba[_0xa04a9a(0x146)]),_0x5ae609);_0x1d9eba[_0xa04a9a(0x142)]={'consoleLog':(_0x1dd224,_0x41bb64)=>{var _0x1b658e=_0xa04a9a;_0x1d9eba[_0x1b658e(0x123)][_0x1b658e(0x11b)][_0x1b658e(0x82)]!==_0x1b658e(0xf0)&&_0x28daf5(_0x223dbc(_0x1b658e(0x11b),_0x1dd224,_0x56e6b4(),_0xde33ce,_0x41bb64));},'consoleTrace':(_0x24b5b2,_0x2b0971)=>{var _0x466ecb=_0xa04a9a;_0x1d9eba[_0x466ecb(0x123)]['log'][_0x466ecb(0x82)]!==_0x466ecb(0x8b)&&_0x28daf5(_0x5b86b0(_0x223dbc(_0x466ecb(0xa8),_0x24b5b2,_0x56e6b4(),_0xde33ce,_0x2b0971)));},'consoleTime':_0xfe749d=>{_0x412381(_0xfe749d);},'consoleTimeEnd':(_0x38c0d7,_0x492226)=>{_0x380ae0(_0x492226,_0x38c0d7);},'autoLog':(_0x2ec834,_0x2fa439)=>{var _0x2b5911=_0xa04a9a;_0x28daf5(_0x223dbc(_0x2b5911(0x11b),_0x2fa439,_0x56e6b4(),_0xde33ce,[_0x2ec834]));},'autoLogMany':(_0x1cf692,_0x1cb859)=>{var _0x5b991d=_0xa04a9a;_0x28daf5(_0x223dbc(_0x5b991d(0x11b),_0x1cf692,_0x56e6b4(),_0xde33ce,_0x1cb859));},'autoTrace':(_0x1a9094,_0x25e15d)=>{_0x28daf5(_0x5b86b0(_0x223dbc('trace',_0x25e15d,_0x56e6b4(),_0xde33ce,[_0x1a9094])));},'autoTraceMany':(_0x3023ec,_0x484ad6)=>{var _0x29bbf5=_0xa04a9a;_0x28daf5(_0x5b86b0(_0x223dbc(_0x29bbf5(0xa8),_0x3023ec,_0x56e6b4(),_0xde33ce,_0x484ad6)));},'autoTime':(_0x5d79f4,_0x309af2,_0x227224)=>{_0x412381(_0x227224);},'autoTimeEnd':(_0x3746ec,_0x311773,_0x595131)=>{_0x380ae0(_0x311773,_0x595131);},'coverage':_0x133216=>{var _0x328563=_0xa04a9a;_0x28daf5({'method':_0x328563(0x13b),'version':_0x2f3155,'args':[{'id':_0x133216}]});}};let _0x28daf5=q(_0x1d9eba,_0x521910,_0x223aaa,_0x3bf0ff,_0x3cc83b,_0x49b65f,_0x40da01),_0xde33ce=_0x1d9eba[_0xa04a9a(0xbf)];return _0x1d9eba[_0xa04a9a(0x142)];})(globalThis,'127.0.0.1',_0x4cf959(0x119),\"c:\\\\Users\\\\youss\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.314\\\\node_modules\",_0x4cf959(0x132),_0x4cf959(0x126),'1714046570762',_0x4cf959(0xd0),_0x4cf959(0x108),_0x4cf959(0x9f),_0x4cf959(0x167));");
  } catch (e) {}
}
; /* istanbul ignore next */
function oo_oo(i) {
  for (var _len = arguments.length, v = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    v[_key - 1] = arguments[_key];
  }
  try {
    oo_cm().consoleLog(i, v);
  } catch (e) {}
  return v;
}
; /* istanbul ignore next */
function oo_tr(i) {
  for (var _len2 = arguments.length, v = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    v[_key2 - 1] = arguments[_key2];
  }
  try {
    oo_cm().consoleTrace(i, v);
  } catch (e) {}
  return v;
}
; /* istanbul ignore next */
function oo_ts(v) {
  try {
    oo_cm().consoleTime(v);
  } catch (e) {}
  return v;
}
; /* istanbul ignore next */
function oo_te(v, i) {
  try {
    oo_cm().consoleTimeEnd(v, i);
  } catch (e) {}
  return v;
}
; /*eslint unicorn/no-abusive-eslint-disable:,eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/

/***/ }),

/***/ "./src/plugin.svg":
/*!************************!*\
  !*** ./src/plugin.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "plugin.svg";

/***/ }),

/***/ "@penta-b/grid":
/*!********************************!*\
  !*** external "@penta-b/grid" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__penta_b_grid__;

/***/ }),

/***/ "@penta-b/ma-lib":
/*!**********************************!*\
  !*** external "@penta-b/ma-lib" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__penta_b_ma_lib__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react_redux__;

/***/ }),

/***/ "./node_modules/ol/Disposable.js":
/*!***************************************!*\
  !*** ./node_modules/ol/Disposable.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @module ol/Disposable
 */

/**
 * @classdesc
 * Objects that need to clean up after themselves.
 */
class Disposable {
  constructor() {
    /**
     * The object has already been disposed.
     * @type {boolean}
     * @protected
     */
    this.disposed = false;
  }

  /**
   * Clean up.
   */
  dispose() {
    if (!this.disposed) {
      this.disposed = true;
      this.disposeInternal();
    }
  }

  /**
   * Extension point for disposable objects.
   * @protected
   */
  disposeInternal() {}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Disposable);


/***/ }),

/***/ "./node_modules/ol/Object.js":
/*!***********************************!*\
  !*** ./node_modules/ol/Object.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ObjectEvent: () => (/* binding */ ObjectEvent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _events_Event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events/Event.js */ "./node_modules/ol/events/Event.js");
/* harmony import */ var _ObjectEventType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ObjectEventType.js */ "./node_modules/ol/ObjectEventType.js");
/* harmony import */ var _Observable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Observable.js */ "./node_modules/ol/Observable.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util.js */ "./node_modules/ol/util.js");
/* harmony import */ var _obj_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./obj.js */ "./node_modules/ol/obj.js");
/**
 * @module ol/Object
 */






/**
 * @classdesc
 * Events emitted by {@link module:ol/Object~BaseObject} instances are instances of this type.
 */
class ObjectEvent extends _events_Event_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * @param {string} type The event type.
   * @param {string} key The property name.
   * @param {*} oldValue The old value for `key`.
   */
  constructor(type, key, oldValue) {
    super(type);

    /**
     * The name of the property whose value is changing.
     * @type {string}
     * @api
     */
    this.key = key;

    /**
     * The old value. To get the new value use `e.target.get(e.key)` where
     * `e` is the event object.
     * @type {*}
     * @api
     */
    this.oldValue = oldValue;
  }
}

/***
 * @template Return
 * @typedef {import("./Observable").OnSignature<import("./Observable").EventTypes, import("./events/Event.js").default, Return> &
 *    import("./Observable").OnSignature<import("./ObjectEventType").Types, ObjectEvent, Return> &
 *    import("./Observable").CombinedOnSignature<import("./Observable").EventTypes|import("./ObjectEventType").Types, Return>} ObjectOnSignature
 */

/**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * Most non-trivial classes inherit from this.
 *
 * This extends {@link module:ol/Observable~Observable} with observable
 * properties, where each property is observable as well as the object as a
 * whole.
 *
 * Classes that inherit from this have pre-defined properties, to which you can
 * add your owns. The pre-defined properties are listed in this documentation as
 * 'Observable Properties', and have their own accessors; for example,
 * {@link module:ol/Map~Map} has a `target` property, accessed with
 * `getTarget()` and changed with `setTarget()`. Not all properties are however
 * settable. There are also general-purpose accessors `get()` and `set()`. For
 * example, `get('target')` is equivalent to `getTarget()`.
 *
 * The `set` accessors trigger a change event, and you can monitor this by
 * registering a listener. For example, {@link module:ol/View~View} has a
 * `center` property, so `view.on('change:center', function(evt) {...});` would
 * call the function whenever the value of the center property changes. Within
 * the function, `evt.target` would be the view, so `evt.target.getCenter()`
 * would return the new center.
 *
 * You can add your own observable properties with
 * `object.set('prop', 'value')`, and retrieve that with `object.get('prop')`.
 * You can listen for changes on that property value with
 * `object.on('change:prop', listener)`. You can get a list of all
 * properties with {@link module:ol/Object~BaseObject#getProperties}.
 *
 * Note that the observable properties are separate from standard JS properties.
 * You can, for example, give your map object a title with
 * `map.title='New title'` and with `map.set('title', 'Another title')`. The
 * first will be a `hasOwnProperty`; the second will appear in
 * `getProperties()`. Only the second is observable.
 *
 * Properties can be deleted by using the unset method. E.g.
 * object.unset('foo').
 *
 * @fires ObjectEvent
 * @api
 */
class BaseObject extends _Observable_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  /**
   * @param {Object<string, *>} [values] An object with key-value pairs.
   */
  constructor(values) {
    super();

    /***
     * @type {ObjectOnSignature<import("./events").EventsKey>}
     */
    this.on;

    /***
     * @type {ObjectOnSignature<import("./events").EventsKey>}
     */
    this.once;

    /***
     * @type {ObjectOnSignature<void>}
     */
    this.un;

    // Call {@link module:ol/util.getUid} to ensure that the order of objects' ids is
    // the same as the order in which they were created.  This also helps to
    // ensure that object properties are always added in the same order, which
    // helps many JavaScript engines generate faster code.
    (0,_util_js__WEBPACK_IMPORTED_MODULE_2__.getUid)(this);

    /**
     * @private
     * @type {Object<string, *>|null}
     */
    this.values_ = null;

    if (values !== undefined) {
      this.setProperties(values);
    }
  }

  /**
   * Gets a value.
   * @param {string} key Key name.
   * @return {*} Value.
   * @api
   */
  get(key) {
    let value;
    if (this.values_ && this.values_.hasOwnProperty(key)) {
      value = this.values_[key];
    }
    return value;
  }

  /**
   * Get a list of object property names.
   * @return {Array<string>} List of property names.
   * @api
   */
  getKeys() {
    return (this.values_ && Object.keys(this.values_)) || [];
  }

  /**
   * Get an object of all property names and values.
   * @return {Object<string, *>} Object.
   * @api
   */
  getProperties() {
    return (this.values_ && Object.assign({}, this.values_)) || {};
  }

  /**
   * Get an object of all property names and values.
   * @return {Object<string, *>?} Object.
   */
  getPropertiesInternal() {
    return this.values_;
  }

  /**
   * @return {boolean} The object has properties.
   */
  hasProperties() {
    return !!this.values_;
  }

  /**
   * @param {string} key Key name.
   * @param {*} oldValue Old value.
   */
  notify(key, oldValue) {
    let eventType;
    eventType = `change:${key}`;
    if (this.hasListener(eventType)) {
      this.dispatchEvent(new ObjectEvent(eventType, key, oldValue));
    }
    eventType = _ObjectEventType_js__WEBPACK_IMPORTED_MODULE_3__["default"].PROPERTYCHANGE;
    if (this.hasListener(eventType)) {
      this.dispatchEvent(new ObjectEvent(eventType, key, oldValue));
    }
  }

  /**
   * @param {string} key Key name.
   * @param {import("./events.js").Listener} listener Listener.
   */
  addChangeListener(key, listener) {
    this.addEventListener(`change:${key}`, listener);
  }

  /**
   * @param {string} key Key name.
   * @param {import("./events.js").Listener} listener Listener.
   */
  removeChangeListener(key, listener) {
    this.removeEventListener(`change:${key}`, listener);
  }

  /**
   * Sets a value.
   * @param {string} key Key name.
   * @param {*} value Value.
   * @param {boolean} [silent] Update without triggering an event.
   * @api
   */
  set(key, value, silent) {
    const values = this.values_ || (this.values_ = {});
    if (silent) {
      values[key] = value;
    } else {
      const oldValue = values[key];
      values[key] = value;
      if (oldValue !== value) {
        this.notify(key, oldValue);
      }
    }
  }

  /**
   * Sets a collection of key-value pairs.  Note that this changes any existing
   * properties and adds new ones (it does not remove any existing properties).
   * @param {Object<string, *>} values Values.
   * @param {boolean} [silent] Update without triggering an event.
   * @api
   */
  setProperties(values, silent) {
    for (const key in values) {
      this.set(key, values[key], silent);
    }
  }

  /**
   * Apply any properties from another object without triggering events.
   * @param {BaseObject} source The source object.
   * @protected
   */
  applyProperties(source) {
    if (!source.values_) {
      return;
    }
    Object.assign(this.values_ || (this.values_ = {}), source.values_);
  }

  /**
   * Unsets a property.
   * @param {string} key Key name.
   * @param {boolean} [silent] Unset without triggering an event.
   * @api
   */
  unset(key, silent) {
    if (this.values_ && key in this.values_) {
      const oldValue = this.values_[key];
      delete this.values_[key];
      if ((0,_obj_js__WEBPACK_IMPORTED_MODULE_4__.isEmpty)(this.values_)) {
        this.values_ = null;
      }
      if (!silent) {
        this.notify(key, oldValue);
      }
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseObject);


/***/ }),

/***/ "./node_modules/ol/ObjectEventType.js":
/*!********************************************!*\
  !*** ./node_modules/ol/ObjectEventType.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @module ol/ObjectEventType
 */

/**
 * @enum {string}
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  /**
   * Triggered when a property is changed.
   * @event module:ol/Object.ObjectEvent#propertychange
   * @api
   */
  PROPERTYCHANGE: 'propertychange',
});

/**
 * @typedef {'propertychange'} Types
 */


/***/ }),

/***/ "./node_modules/ol/Observable.js":
/*!***************************************!*\
  !*** ./node_modules/ol/Observable.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   unByKey: () => (/* binding */ unByKey)
/* harmony export */ });
/* harmony import */ var _events_Target_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events/Target.js */ "./node_modules/ol/events/Target.js");
/* harmony import */ var _events_EventType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events/EventType.js */ "./node_modules/ol/events/EventType.js");
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events.js */ "./node_modules/ol/events.js");
/**
 * @module ol/Observable
 */




/***
 * @template {string} Type
 * @template {Event|import("./events/Event.js").default} EventClass
 * @template Return
 * @typedef {(type: Type, listener: (event: EventClass) => ?) => Return} OnSignature
 */

/***
 * @template {string} Type
 * @template Return
 * @typedef {(type: Type[], listener: (event: Event|import("./events/Event").default) => ?) => Return extends void ? void : Return[]} CombinedOnSignature
 */

/**
 * @typedef {'change'|'error'} EventTypes
 */

/***
 * @template Return
 * @typedef {OnSignature<EventTypes, import("./events/Event.js").default, Return> & CombinedOnSignature<EventTypes, Return>} ObservableOnSignature
 */

/**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * An event target providing convenient methods for listener registration
 * and unregistration. A generic `change` event is always available through
 * {@link module:ol/Observable~Observable#changed}.
 *
 * @fires import("./events/Event.js").default
 * @api
 */
class Observable extends _events_Target_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();

    this.on =
      /** @type {ObservableOnSignature<import("./events").EventsKey>} */ (
        this.onInternal
      );

    this.once =
      /** @type {ObservableOnSignature<import("./events").EventsKey>} */ (
        this.onceInternal
      );

    this.un = /** @type {ObservableOnSignature<void>} */ (this.unInternal);

    /**
     * @private
     * @type {number}
     */
    this.revision_ = 0;
  }

  /**
   * Increases the revision counter and dispatches a 'change' event.
   * @api
   */
  changed() {
    ++this.revision_;
    this.dispatchEvent(_events_EventType_js__WEBPACK_IMPORTED_MODULE_1__["default"].CHANGE);
  }

  /**
   * Get the version number for this object.  Each time the object is modified,
   * its version number will be incremented.
   * @return {number} Revision.
   * @api
   */
  getRevision() {
    return this.revision_;
  }

  /**
   * @param {string|Array<string>} type Type.
   * @param {function((Event|import("./events/Event").default)): ?} listener Listener.
   * @return {import("./events.js").EventsKey|Array<import("./events.js").EventsKey>} Event key.
   * @protected
   */
  onInternal(type, listener) {
    if (Array.isArray(type)) {
      const len = type.length;
      const keys = new Array(len);
      for (let i = 0; i < len; ++i) {
        keys[i] = (0,_events_js__WEBPACK_IMPORTED_MODULE_2__.listen)(this, type[i], listener);
      }
      return keys;
    }
    return (0,_events_js__WEBPACK_IMPORTED_MODULE_2__.listen)(this, /** @type {string} */ (type), listener);
  }

  /**
   * @param {string|Array<string>} type Type.
   * @param {function((Event|import("./events/Event").default)): ?} listener Listener.
   * @return {import("./events.js").EventsKey|Array<import("./events.js").EventsKey>} Event key.
   * @protected
   */
  onceInternal(type, listener) {
    let key;
    if (Array.isArray(type)) {
      const len = type.length;
      key = new Array(len);
      for (let i = 0; i < len; ++i) {
        key[i] = (0,_events_js__WEBPACK_IMPORTED_MODULE_2__.listenOnce)(this, type[i], listener);
      }
    } else {
      key = (0,_events_js__WEBPACK_IMPORTED_MODULE_2__.listenOnce)(this, /** @type {string} */ (type), listener);
    }
    /** @type {Object} */ (listener).ol_key = key;
    return key;
  }

  /**
   * Unlisten for a certain type of event.
   * @param {string|Array<string>} type Type.
   * @param {function((Event|import("./events/Event").default)): ?} listener Listener.
   * @protected
   */
  unInternal(type, listener) {
    const key = /** @type {Object} */ (listener).ol_key;
    if (key) {
      unByKey(key);
    } else if (Array.isArray(type)) {
      for (let i = 0, ii = type.length; i < ii; ++i) {
        this.removeEventListener(type[i], listener);
      }
    } else {
      this.removeEventListener(type, listener);
    }
  }
}

/**
 * Listen for a certain type of event.
 * @function
 * @param {string|Array<string>} type The event type or array of event types.
 * @param {function((Event|import("./events/Event").default)): ?} listener The listener function.
 * @return {import("./events.js").EventsKey|Array<import("./events.js").EventsKey>} Unique key for the listener. If
 *     called with an array of event types as the first argument, the return
 *     will be an array of keys.
 * @api
 */
Observable.prototype.on;

/**
 * Listen once for a certain type of event.
 * @function
 * @param {string|Array<string>} type The event type or array of event types.
 * @param {function((Event|import("./events/Event").default)): ?} listener The listener function.
 * @return {import("./events.js").EventsKey|Array<import("./events.js").EventsKey>} Unique key for the listener. If
 *     called with an array of event types as the first argument, the return
 *     will be an array of keys.
 * @api
 */
Observable.prototype.once;

/**
 * Unlisten for a certain type of event.
 * @function
 * @param {string|Array<string>} type The event type or array of event types.
 * @param {function((Event|import("./events/Event").default)): ?} listener The listener function.
 * @api
 */
Observable.prototype.un;

/**
 * Removes an event listener using the key returned by `on()` or `once()`.
 * @param {import("./events.js").EventsKey|Array<import("./events.js").EventsKey>} key The key returned by `on()`
 *     or `once()` (or an array of keys).
 * @api
 */
function unByKey(key) {
  if (Array.isArray(key)) {
    for (let i = 0, ii = key.length; i < ii; ++i) {
      (0,_events_js__WEBPACK_IMPORTED_MODULE_2__.unlistenByKey)(key[i]);
    }
  } else {
    (0,_events_js__WEBPACK_IMPORTED_MODULE_2__.unlistenByKey)(/** @type {import("./events.js").EventsKey} */ (key));
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Observable);


/***/ }),

/***/ "./node_modules/ol/array.js":
/*!**********************************!*\
  !*** ./node_modules/ol/array.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ascending: () => (/* binding */ ascending),
/* harmony export */   binarySearch: () => (/* binding */ binarySearch),
/* harmony export */   descending: () => (/* binding */ descending),
/* harmony export */   equals: () => (/* binding */ equals),
/* harmony export */   extend: () => (/* binding */ extend),
/* harmony export */   isSorted: () => (/* binding */ isSorted),
/* harmony export */   linearFindNearest: () => (/* binding */ linearFindNearest),
/* harmony export */   remove: () => (/* binding */ remove),
/* harmony export */   reverseSubArray: () => (/* binding */ reverseSubArray),
/* harmony export */   stableSort: () => (/* binding */ stableSort)
/* harmony export */ });
/**
 * @module ol/array
 */

/**
 * Performs a binary search on the provided sorted list and returns the index of the item if found. If it can't be found it'll return -1.
 * https://github.com/darkskyapp/binary-search
 *
 * @param {Array<*>} haystack Items to search through.
 * @param {*} needle The item to look for.
 * @param {Function} [comparator] Comparator function.
 * @return {number} The index of the item if found, -1 if not.
 */
function binarySearch(haystack, needle, comparator) {
  let mid, cmp;
  comparator = comparator || ascending;
  let low = 0;
  let high = haystack.length;
  let found = false;

  while (low < high) {
    /* Note that "(low + high) >>> 1" may overflow, and results in a typecast
     * to double (which gives the wrong results). */
    mid = low + ((high - low) >> 1);
    cmp = +comparator(haystack[mid], needle);

    if (cmp < 0.0) {
      /* Too low. */
      low = mid + 1;
    } else {
      /* Key found or too high */
      high = mid;
      found = !cmp;
    }
  }

  /* Key not found. */
  return found ? low : ~low;
}

/**
 * Compare function sorting arrays in ascending order.  Safe to use for numeric values.
 * @param {*} a The first object to be compared.
 * @param {*} b The second object to be compared.
 * @return {number} A negative number, zero, or a positive number as the first
 *     argument is less than, equal to, or greater than the second.
 */
function ascending(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}

/**
 * Compare function sorting arrays in descending order.  Safe to use for numeric values.
 * @param {*} a The first object to be compared.
 * @param {*} b The second object to be compared.
 * @return {number} A negative number, zero, or a positive number as the first
 *     argument is greater than, equal to, or less than the second.
 */
function descending(a, b) {
  return a < b ? 1 : a > b ? -1 : 0;
}

/**
 * {@link module:ol/tilegrid/TileGrid~TileGrid#getZForResolution} can use a function
 * of this type to determine which nearest resolution to use.
 *
 * This function takes a `{number}` representing a value between two array entries,
 * a `{number}` representing the value of the nearest higher entry and
 * a `{number}` representing the value of the nearest lower entry
 * as arguments and returns a `{number}`. If a negative number or zero is returned
 * the lower value will be used, if a positive number is returned the higher value
 * will be used.
 * @typedef {function(number, number, number): number} NearestDirectionFunction
 * @api
 */

/**
 * @param {Array<number>} arr Array in descending order.
 * @param {number} target Target.
 * @param {number|NearestDirectionFunction} direction
 *    0 means return the nearest,
 *    > 0 means return the largest nearest,
 *    < 0 means return the smallest nearest.
 * @return {number} Index.
 */
function linearFindNearest(arr, target, direction) {
  if (arr[0] <= target) {
    return 0;
  }

  const n = arr.length;
  if (target <= arr[n - 1]) {
    return n - 1;
  }

  if (typeof direction === 'function') {
    for (let i = 1; i < n; ++i) {
      const candidate = arr[i];
      if (candidate === target) {
        return i;
      }
      if (candidate < target) {
        if (direction(target, arr[i - 1], candidate) > 0) {
          return i - 1;
        }
        return i;
      }
    }
    return n - 1;
  }

  if (direction > 0) {
    for (let i = 1; i < n; ++i) {
      if (arr[i] < target) {
        return i - 1;
      }
    }
    return n - 1;
  }

  if (direction < 0) {
    for (let i = 1; i < n; ++i) {
      if (arr[i] <= target) {
        return i;
      }
    }
    return n - 1;
  }

  for (let i = 1; i < n; ++i) {
    if (arr[i] == target) {
      return i;
    }
    if (arr[i] < target) {
      if (arr[i - 1] - target < target - arr[i]) {
        return i - 1;
      }
      return i;
    }
  }
  return n - 1;
}

/**
 * @param {Array<*>} arr Array.
 * @param {number} begin Begin index.
 * @param {number} end End index.
 */
function reverseSubArray(arr, begin, end) {
  while (begin < end) {
    const tmp = arr[begin];
    arr[begin] = arr[end];
    arr[end] = tmp;
    ++begin;
    --end;
  }
}

/**
 * @param {Array<VALUE>} arr The array to modify.
 * @param {!Array<VALUE>|VALUE} data The elements or arrays of elements to add to arr.
 * @template VALUE
 */
function extend(arr, data) {
  const extension = Array.isArray(data) ? data : [data];
  const length = extension.length;
  for (let i = 0; i < length; i++) {
    arr[arr.length] = extension[i];
  }
}

/**
 * @param {Array<VALUE>} arr The array to modify.
 * @param {VALUE} obj The element to remove.
 * @template VALUE
 * @return {boolean} If the element was removed.
 */
function remove(arr, obj) {
  const i = arr.indexOf(obj);
  const found = i > -1;
  if (found) {
    arr.splice(i, 1);
  }
  return found;
}

/**
 * @param {Array<any>|Uint8ClampedArray} arr1 The first array to compare.
 * @param {Array<any>|Uint8ClampedArray} arr2 The second array to compare.
 * @return {boolean} Whether the two arrays are equal.
 */
function equals(arr1, arr2) {
  const len1 = arr1.length;
  if (len1 !== arr2.length) {
    return false;
  }
  for (let i = 0; i < len1; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

/**
 * Sort the passed array such that the relative order of equal elements is preserved.
 * See https://en.wikipedia.org/wiki/Sorting_algorithm#Stability for details.
 * @param {Array<*>} arr The array to sort (modifies original).
 * @param {!function(*, *): number} compareFnc Comparison function.
 * @api
 */
function stableSort(arr, compareFnc) {
  const length = arr.length;
  const tmp = Array(arr.length);
  let i;
  for (i = 0; i < length; i++) {
    tmp[i] = {index: i, value: arr[i]};
  }
  tmp.sort(function (a, b) {
    return compareFnc(a.value, b.value) || a.index - b.index;
  });
  for (i = 0; i < arr.length; i++) {
    arr[i] = tmp[i].value;
  }
}

/**
 * @param {Array<*>} arr The array to test.
 * @param {Function} [func] Comparison function.
 * @param {boolean} [strict] Strictly sorted (default false).
 * @return {boolean} Return index.
 */
function isSorted(arr, func, strict) {
  const compare = func || ascending;
  return arr.every(function (currentVal, index) {
    if (index === 0) {
      return true;
    }
    const res = compare(arr[index - 1], currentVal);
    return !(res > 0 || (strict && res === 0));
  });
}


/***/ }),

/***/ "./node_modules/ol/asserts.js":
/*!************************************!*\
  !*** ./node_modules/ol/asserts.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assert: () => (/* binding */ assert)
/* harmony export */ });
/**
 * @module ol/asserts
 */

/**
 * @param {*} assertion Assertion we expected to be truthy.
 * @param {string} errorMessage Error message.
 */
function assert(assertion, errorMessage) {
  if (!assertion) {
    throw new Error(errorMessage);
  }
}


/***/ }),

/***/ "./node_modules/ol/console.js":
/*!************************************!*\
  !*** ./node_modules/ol/console.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   error: () => (/* binding */ error),
/* harmony export */   log: () => (/* binding */ log),
/* harmony export */   setLevel: () => (/* binding */ setLevel),
/* harmony export */   warn: () => (/* binding */ warn)
/* harmony export */ });
/**
 * @module ol/console
 */

/**
 * @typedef {'info'|'warn'|'error'|'none'} Level
 */

/**
 * @type {Object<Level, number>}
 */
const levels = {
  info: 1,
  warn: 2,
  error: 3,
  none: 4,
};

/**
 * @type {number}
 */
let level = levels.info;

/**
 * Set the logging level.  By default, the level is set to 'info' and all
 * messages will be logged.  Set to 'warn' to only display warnings and errors.
 * Set to 'error' to only display errors.  Set to 'none' to silence all messages.
 *
 * @param {Level} l The new level.
 */
function setLevel(l) {
  level = levels[l];
}

/**
 * @param  {...any} args Arguments to log
 */
function log(...args) {
  if (level > levels.info) {
    return;
  }
  console.log(...args); // eslint-disable-line no-console
}

/**
 * @param  {...any} args Arguments to log
 */
function warn(...args) {
  if (level > levels.warn) {
    return;
  }
  console.warn(...args); // eslint-disable-line no-console
}

/**
 * @param  {...any} args Arguments to log
 */
function error(...args) {
  if (level > levels.error) {
    return;
  }
  console.error(...args); // eslint-disable-line no-console
}


/***/ }),

/***/ "./node_modules/ol/coordinate.js":
/*!***************************************!*\
  !*** ./node_modules/ol/coordinate.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   closestOnCircle: () => (/* binding */ closestOnCircle),
/* harmony export */   closestOnSegment: () => (/* binding */ closestOnSegment),
/* harmony export */   createStringXY: () => (/* binding */ createStringXY),
/* harmony export */   degreesToStringHDMS: () => (/* binding */ degreesToStringHDMS),
/* harmony export */   distance: () => (/* binding */ distance),
/* harmony export */   equals: () => (/* binding */ equals),
/* harmony export */   format: () => (/* binding */ format),
/* harmony export */   getWorldsAway: () => (/* binding */ getWorldsAway),
/* harmony export */   rotate: () => (/* binding */ rotate),
/* harmony export */   scale: () => (/* binding */ scale),
/* harmony export */   squaredDistance: () => (/* binding */ squaredDistance),
/* harmony export */   squaredDistanceToSegment: () => (/* binding */ squaredDistanceToSegment),
/* harmony export */   toStringHDMS: () => (/* binding */ toStringHDMS),
/* harmony export */   toStringXY: () => (/* binding */ toStringXY),
/* harmony export */   wrapX: () => (/* binding */ wrapX)
/* harmony export */ });
/* harmony import */ var _extent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extent.js */ "./node_modules/ol/extent.js");
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math.js */ "./node_modules/ol/math.js");
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./string.js */ "./node_modules/ol/string.js");
/**
 * @module ol/coordinate
 */




/**
 * An array of numbers representing an `xy`, `xyz` or `xyzm` coordinate.
 * Example: `[16, 48]`.
 * @typedef {Array<number>} Coordinate
 * @api
 */

/**
 * A function that takes a {@link module:ol/coordinate~Coordinate} and
 * transforms it into a `{string}`.
 *
 * @typedef {function((Coordinate|undefined)): string} CoordinateFormat
 * @api
 */

/**
 * Add `delta` to `coordinate`. `coordinate` is modified in place and returned
 * by the function.
 *
 * Example:
 *
 *     import {add} from 'ol/coordinate.js';
 *
 *     const coord = [7.85, 47.983333];
 *     add(coord, [-2, 4]);
 *     // coord is now [5.85, 51.983333]
 *
 * @param {Coordinate} coordinate Coordinate.
 * @param {Coordinate} delta Delta.
 * @return {Coordinate} The input coordinate adjusted by
 * the given delta.
 * @api
 */
function add(coordinate, delta) {
  coordinate[0] += +delta[0];
  coordinate[1] += +delta[1];
  return coordinate;
}

/**
 * Calculates the point closest to the passed coordinate on the passed circle.
 *
 * @param {Coordinate} coordinate The coordinate.
 * @param {import("./geom/Circle.js").default} circle The circle.
 * @return {Coordinate} Closest point on the circumference.
 */
function closestOnCircle(coordinate, circle) {
  const r = circle.getRadius();
  const center = circle.getCenter();
  const x0 = center[0];
  const y0 = center[1];
  const x1 = coordinate[0];
  const y1 = coordinate[1];

  let dx = x1 - x0;
  const dy = y1 - y0;
  if (dx === 0 && dy === 0) {
    dx = 1;
  }
  const d = Math.sqrt(dx * dx + dy * dy);

  const x = x0 + (r * dx) / d;
  const y = y0 + (r * dy) / d;

  return [x, y];
}

/**
 * Calculates the point closest to the passed coordinate on the passed segment.
 * This is the foot of the perpendicular of the coordinate to the segment when
 * the foot is on the segment, or the closest segment coordinate when the foot
 * is outside the segment.
 *
 * @param {Coordinate} coordinate The coordinate.
 * @param {Array<Coordinate>} segment The two coordinates
 * of the segment.
 * @return {Coordinate} The foot of the perpendicular of
 * the coordinate to the segment.
 */
function closestOnSegment(coordinate, segment) {
  const x0 = coordinate[0];
  const y0 = coordinate[1];
  const start = segment[0];
  const end = segment[1];
  const x1 = start[0];
  const y1 = start[1];
  const x2 = end[0];
  const y2 = end[1];
  const dx = x2 - x1;
  const dy = y2 - y1;
  const along =
    dx === 0 && dy === 0
      ? 0
      : (dx * (x0 - x1) + dy * (y0 - y1)) / (dx * dx + dy * dy || 0);
  let x, y;
  if (along <= 0) {
    x = x1;
    y = y1;
  } else if (along >= 1) {
    x = x2;
    y = y2;
  } else {
    x = x1 + along * dx;
    y = y1 + along * dy;
  }
  return [x, y];
}

/**
 * Returns a {@link module:ol/coordinate~CoordinateFormat} function that can be
 * used to format
 * a {Coordinate} to a string.
 *
 * Example without specifying the fractional digits:
 *
 *     import {createStringXY} from 'ol/coordinate.js';
 *
 *     const coord = [7.85, 47.983333];
 *     const stringifyFunc = createStringXY();
 *     const out = stringifyFunc(coord);
 *     // out is now '8, 48'
 *
 * Example with explicitly specifying 2 fractional digits:
 *
 *     import {createStringXY} from 'ol/coordinate.js';
 *
 *     const coord = [7.85, 47.983333];
 *     const stringifyFunc = createStringXY(2);
 *     const out = stringifyFunc(coord);
 *     // out is now '7.85, 47.98'
 *
 * @param {number} [fractionDigits] The number of digits to include
 *    after the decimal point. Default is `0`.
 * @return {CoordinateFormat} Coordinate format.
 * @api
 */
function createStringXY(fractionDigits) {
  return (
    /**
     * @param {Coordinate} coordinate Coordinate.
     * @return {string} String XY.
     */
    function (coordinate) {
      return toStringXY(coordinate, fractionDigits);
    }
  );
}

/**
 * @param {string} hemispheres Hemispheres.
 * @param {number} degrees Degrees.
 * @param {number} [fractionDigits] The number of digits to include
 *    after the decimal point. Default is `0`.
 * @return {string} String.
 */
function degreesToStringHDMS(hemispheres, degrees, fractionDigits) {
  const normalizedDegrees = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.modulo)(degrees + 180, 360) - 180;
  const x = Math.abs(3600 * normalizedDegrees);
  const decimals = fractionDigits || 0;

  let deg = Math.floor(x / 3600);
  let min = Math.floor((x - deg * 3600) / 60);
  let sec = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.toFixed)(x - deg * 3600 - min * 60, decimals);

  if (sec >= 60) {
    sec = 0;
    min += 1;
  }

  if (min >= 60) {
    min = 0;
    deg += 1;
  }

  let hdms = deg + '\u00b0';
  if (min !== 0 || sec !== 0) {
    hdms += ' ' + (0,_string_js__WEBPACK_IMPORTED_MODULE_1__.padNumber)(min, 2) + '\u2032';
  }
  if (sec !== 0) {
    hdms += ' ' + (0,_string_js__WEBPACK_IMPORTED_MODULE_1__.padNumber)(sec, 2, decimals) + '\u2033';
  }
  if (normalizedDegrees !== 0) {
    hdms += ' ' + hemispheres.charAt(normalizedDegrees < 0 ? 1 : 0);
  }

  return hdms;
}

/**
 * Transforms the given {@link module:ol/coordinate~Coordinate} to a string
 * using the given string template. The strings `{x}` and `{y}` in the template
 * will be replaced with the first and second coordinate values respectively.
 *
 * Example without specifying the fractional digits:
 *
 *     import {format} from 'ol/coordinate.js';
 *
 *     const coord = [7.85, 47.983333];
 *     const template = 'Coordinate is ({x}|{y}).';
 *     const out = format(coord, template);
 *     // out is now 'Coordinate is (8|48).'
 *
 * Example explicitly specifying the fractional digits:
 *
 *     import {format} from 'ol/coordinate.js';
 *
 *     const coord = [7.85, 47.983333];
 *     const template = 'Coordinate is ({x}|{y}).';
 *     const out = format(coord, template, 2);
 *     // out is now 'Coordinate is (7.85|47.98).'
 *
 * @param {Coordinate} coordinate Coordinate.
 * @param {string} template A template string with `{x}` and `{y}` placeholders
 *     that will be replaced by first and second coordinate values.
 * @param {number} [fractionDigits] The number of digits to include
 *    after the decimal point. Default is `0`.
 * @return {string} Formatted coordinate.
 * @api
 */
function format(coordinate, template, fractionDigits) {
  if (coordinate) {
    return template
      .replace('{x}', coordinate[0].toFixed(fractionDigits))
      .replace('{y}', coordinate[1].toFixed(fractionDigits));
  }
  return '';
}

/**
 * @param {Coordinate} coordinate1 First coordinate.
 * @param {Coordinate} coordinate2 Second coordinate.
 * @return {boolean} The two coordinates are equal.
 */
function equals(coordinate1, coordinate2) {
  let equals = true;
  for (let i = coordinate1.length - 1; i >= 0; --i) {
    if (coordinate1[i] != coordinate2[i]) {
      equals = false;
      break;
    }
  }
  return equals;
}

/**
 * Rotate `coordinate` by `angle`. `coordinate` is modified in place and
 * returned by the function.
 *
 * Example:
 *
 *     import {rotate} from 'ol/coordinate.js';
 *
 *     const coord = [7.85, 47.983333];
 *     const rotateRadians = Math.PI / 2; // 90 degrees
 *     rotate(coord, rotateRadians);
 *     // coord is now [-47.983333, 7.85]
 *
 * @param {Coordinate} coordinate Coordinate.
 * @param {number} angle Angle in radian.
 * @return {Coordinate} Coordinate.
 * @api
 */
function rotate(coordinate, angle) {
  const cosAngle = Math.cos(angle);
  const sinAngle = Math.sin(angle);
  const x = coordinate[0] * cosAngle - coordinate[1] * sinAngle;
  const y = coordinate[1] * cosAngle + coordinate[0] * sinAngle;
  coordinate[0] = x;
  coordinate[1] = y;
  return coordinate;
}

/**
 * Scale `coordinate` by `scale`. `coordinate` is modified in place and returned
 * by the function.
 *
 * Example:
 *
 *     import {scale as scaleCoordinate} from 'ol/coordinate.js';
 *
 *     const coord = [7.85, 47.983333];
 *     const scale = 1.2;
 *     scaleCoordinate(coord, scale);
 *     // coord is now [9.42, 57.5799996]
 *
 * @param {Coordinate} coordinate Coordinate.
 * @param {number} scale Scale factor.
 * @return {Coordinate} Coordinate.
 */
function scale(coordinate, scale) {
  coordinate[0] *= scale;
  coordinate[1] *= scale;
  return coordinate;
}

/**
 * @param {Coordinate} coord1 First coordinate.
 * @param {Coordinate} coord2 Second coordinate.
 * @return {number} Squared distance between coord1 and coord2.
 */
function squaredDistance(coord1, coord2) {
  const dx = coord1[0] - coord2[0];
  const dy = coord1[1] - coord2[1];
  return dx * dx + dy * dy;
}

/**
 * @param {Coordinate} coord1 First coordinate.
 * @param {Coordinate} coord2 Second coordinate.
 * @return {number} Distance between coord1 and coord2.
 */
function distance(coord1, coord2) {
  return Math.sqrt(squaredDistance(coord1, coord2));
}

/**
 * Calculate the squared distance from a coordinate to a line segment.
 *
 * @param {Coordinate} coordinate Coordinate of the point.
 * @param {Array<Coordinate>} segment Line segment (2
 * coordinates).
 * @return {number} Squared distance from the point to the line segment.
 */
function squaredDistanceToSegment(coordinate, segment) {
  return squaredDistance(coordinate, closestOnSegment(coordinate, segment));
}

/**
 * Format a geographic coordinate with the hemisphere, degrees, minutes, and
 * seconds.
 *
 * Example without specifying fractional digits:
 *
 *     import {toStringHDMS} from 'ol/coordinate.js';
 *
 *     const coord = [7.85, 47.983333];
 *     const out = toStringHDMS(coord);
 *     // out is now '47° 58′ 60″ N 7° 50′ 60″ E'
 *
 * Example explicitly specifying 1 fractional digit:
 *
 *     import {toStringHDMS} from 'ol/coordinate.js';
 *
 *     const coord = [7.85, 47.983333];
 *     const out = toStringHDMS(coord, 1);
 *     // out is now '47° 58′ 60.0″ N 7° 50′ 60.0″ E'
 *
 * @param {Coordinate} coordinate Coordinate.
 * @param {number} [fractionDigits] The number of digits to include
 *    after the decimal point. Default is `0`.
 * @return {string} Hemisphere, degrees, minutes and seconds.
 * @api
 */
function toStringHDMS(coordinate, fractionDigits) {
  if (coordinate) {
    return (
      degreesToStringHDMS('NS', coordinate[1], fractionDigits) +
      ' ' +
      degreesToStringHDMS('EW', coordinate[0], fractionDigits)
    );
  }
  return '';
}

/**
 * Format a coordinate as a comma delimited string.
 *
 * Example without specifying fractional digits:
 *
 *     import {toStringXY} from 'ol/coordinate.js';
 *
 *     const coord = [7.85, 47.983333];
 *     const out = toStringXY(coord);
 *     // out is now '8, 48'
 *
 * Example explicitly specifying 1 fractional digit:
 *
 *     import {toStringXY} from 'ol/coordinate.js';
 *
 *     const coord = [7.85, 47.983333];
 *     const out = toStringXY(coord, 1);
 *     // out is now '7.8, 48.0'
 *
 * @param {Coordinate} coordinate Coordinate.
 * @param {number} [fractionDigits] The number of digits to include
 *    after the decimal point. Default is `0`.
 * @return {string} XY.
 * @api
 */
function toStringXY(coordinate, fractionDigits) {
  return format(coordinate, '{x}, {y}', fractionDigits);
}

/**
 * Modifies the provided coordinate in-place to be within the real world
 * extent. The lower projection extent boundary is inclusive, the upper one
 * exclusive.
 *
 * @param {Coordinate} coordinate Coordinate.
 * @param {import("./proj/Projection.js").default} projection Projection.
 * @return {Coordinate} The coordinate within the real world extent.
 */
function wrapX(coordinate, projection) {
  if (projection.canWrapX()) {
    const worldWidth = (0,_extent_js__WEBPACK_IMPORTED_MODULE_2__.getWidth)(projection.getExtent());
    const worldsAway = getWorldsAway(coordinate, projection, worldWidth);
    if (worldsAway) {
      coordinate[0] -= worldsAway * worldWidth;
    }
  }
  return coordinate;
}
/**
 * @param {Coordinate} coordinate Coordinate.
 * @param {import("./proj/Projection.js").default} projection Projection.
 * @param {number} [sourceExtentWidth] Width of the source extent.
 * @return {number} Offset in world widths.
 */
function getWorldsAway(coordinate, projection, sourceExtentWidth) {
  const projectionExtent = projection.getExtent();
  let worldsAway = 0;
  if (
    projection.canWrapX() &&
    (coordinate[0] < projectionExtent[0] || coordinate[0] > projectionExtent[2])
  ) {
    sourceExtentWidth = sourceExtentWidth || (0,_extent_js__WEBPACK_IMPORTED_MODULE_2__.getWidth)(projectionExtent);
    worldsAway = Math.floor(
      (coordinate[0] - projectionExtent[0]) / sourceExtentWidth,
    );
  }
  return worldsAway;
}


/***/ }),

/***/ "./node_modules/ol/events.js":
/*!***********************************!*\
  !*** ./node_modules/ol/events.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   listen: () => (/* binding */ listen),
/* harmony export */   listenOnce: () => (/* binding */ listenOnce),
/* harmony export */   unlistenByKey: () => (/* binding */ unlistenByKey)
/* harmony export */ });
/* harmony import */ var _obj_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./obj.js */ "./node_modules/ol/obj.js");
/**
 * @module ol/events
 */


/**
 * Key to use with {@link module:ol/Observable.unByKey}.
 * @typedef {Object} EventsKey
 * @property {ListenerFunction} listener Listener.
 * @property {import("./events/Target.js").EventTargetLike} target Target.
 * @property {string} type Type.
 * @api
 */

/**
 * Listener function. This function is called with an event object as argument.
 * When the function returns `false`, event propagation will stop.
 *
 * @typedef {function((Event|import("./events/Event.js").default)): (void|boolean)} ListenerFunction
 * @api
 */

/**
 * @typedef {Object} ListenerObject
 * @property {ListenerFunction} handleEvent HandleEvent listener function.
 */

/**
 * @typedef {ListenerFunction|ListenerObject} Listener
 */

/**
 * Registers an event listener on an event target. Inspired by
 * https://google.github.io/closure-library/api/source/closure/goog/events/events.js.src.html
 *
 * This function efficiently binds a `listener` to a `this` object, and returns
 * a key for use with {@link module:ol/events.unlistenByKey}.
 *
 * @param {import("./events/Target.js").EventTargetLike} target Event target.
 * @param {string} type Event type.
 * @param {ListenerFunction} listener Listener.
 * @param {Object} [thisArg] Object referenced by the `this` keyword in the
 *     listener. Default is the `target`.
 * @param {boolean} [once] If true, add the listener as one-off listener.
 * @return {EventsKey} Unique key for the listener.
 */
function listen(target, type, listener, thisArg, once) {
  if (thisArg && thisArg !== target) {
    listener = listener.bind(thisArg);
  }
  if (once) {
    const originalListener = listener;
    listener = function () {
      target.removeEventListener(type, listener);
      originalListener.apply(this, arguments);
    };
  }
  const eventsKey = {
    target: target,
    type: type,
    listener: listener,
  };
  target.addEventListener(type, listener);
  return eventsKey;
}

/**
 * Registers a one-off event listener on an event target. Inspired by
 * https://google.github.io/closure-library/api/source/closure/goog/events/events.js.src.html
 *
 * This function efficiently binds a `listener` as self-unregistering listener
 * to a `this` object, and returns a key for use with
 * {@link module:ol/events.unlistenByKey} in case the listener needs to be
 * unregistered before it is called.
 *
 * When {@link module:ol/events.listen} is called with the same arguments after this
 * function, the self-unregistering listener will be turned into a permanent
 * listener.
 *
 * @param {import("./events/Target.js").EventTargetLike} target Event target.
 * @param {string} type Event type.
 * @param {ListenerFunction} listener Listener.
 * @param {Object} [thisArg] Object referenced by the `this` keyword in the
 *     listener. Default is the `target`.
 * @return {EventsKey} Key for unlistenByKey.
 */
function listenOnce(target, type, listener, thisArg) {
  return listen(target, type, listener, thisArg, true);
}

/**
 * Unregisters event listeners on an event target. Inspired by
 * https://google.github.io/closure-library/api/source/closure/goog/events/events.js.src.html
 *
 * The argument passed to this function is the key returned from
 * {@link module:ol/events.listen} or {@link module:ol/events.listenOnce}.
 *
 * @param {EventsKey} key The key.
 */
function unlistenByKey(key) {
  if (key && key.target) {
    key.target.removeEventListener(key.type, key.listener);
    (0,_obj_js__WEBPACK_IMPORTED_MODULE_0__.clear)(key);
  }
}


/***/ }),

/***/ "./node_modules/ol/events/Event.js":
/*!*****************************************!*\
  !*** ./node_modules/ol/events/Event.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   preventDefault: () => (/* binding */ preventDefault),
/* harmony export */   stopPropagation: () => (/* binding */ stopPropagation)
/* harmony export */ });
/**
 * @module ol/events/Event
 */

/**
 * @classdesc
 * Stripped down implementation of the W3C DOM Level 2 Event interface.
 * See https://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-interface.
 *
 * This implementation only provides `type` and `target` properties, and
 * `stopPropagation` and `preventDefault` methods. It is meant as base class
 * for higher level events defined in the library, and works with
 * {@link module:ol/events/Target~Target}.
 */
class BaseEvent {
  /**
   * @param {string} type Type.
   */
  constructor(type) {
    /**
     * @type {boolean}
     */
    this.propagationStopped;

    /**
     * @type {boolean}
     */
    this.defaultPrevented;

    /**
     * The event type.
     * @type {string}
     * @api
     */
    this.type = type;

    /**
     * The event target.
     * @type {Object}
     * @api
     */
    this.target = null;
  }

  /**
   * Prevent default. This means that no emulated `click`, `singleclick` or `doubleclick` events
   * will be fired.
   * @api
   */
  preventDefault() {
    this.defaultPrevented = true;
  }

  /**
   * Stop event propagation.
   * @api
   */
  stopPropagation() {
    this.propagationStopped = true;
  }
}

/**
 * @param {Event|import("./Event.js").default} evt Event
 */
function stopPropagation(evt) {
  evt.stopPropagation();
}

/**
 * @param {Event|import("./Event.js").default} evt Event
 */
function preventDefault(evt) {
  evt.preventDefault();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseEvent);


/***/ }),

/***/ "./node_modules/ol/events/EventType.js":
/*!*********************************************!*\
  !*** ./node_modules/ol/events/EventType.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @module ol/events/EventType
 */

/**
 * @enum {string}
 * @const
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  /**
   * Generic change event. Triggered when the revision counter is increased.
   * @event module:ol/events/Event~BaseEvent#change
   * @api
   */
  CHANGE: 'change',

  /**
   * Generic error event. Triggered when an error occurs.
   * @event module:ol/events/Event~BaseEvent#error
   * @api
   */
  ERROR: 'error',

  BLUR: 'blur',
  CLEAR: 'clear',
  CONTEXTMENU: 'contextmenu',
  CLICK: 'click',
  DBLCLICK: 'dblclick',
  DRAGENTER: 'dragenter',
  DRAGOVER: 'dragover',
  DROP: 'drop',
  FOCUS: 'focus',
  KEYDOWN: 'keydown',
  KEYPRESS: 'keypress',
  LOAD: 'load',
  RESIZE: 'resize',
  TOUCHMOVE: 'touchmove',
  WHEEL: 'wheel',
});


/***/ }),

/***/ "./node_modules/ol/events/Target.js":
/*!******************************************!*\
  !*** ./node_modules/ol/events/Target.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Disposable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Disposable.js */ "./node_modules/ol/Disposable.js");
/* harmony import */ var _Event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Event.js */ "./node_modules/ol/events/Event.js");
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions.js */ "./node_modules/ol/functions.js");
/* harmony import */ var _obj_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../obj.js */ "./node_modules/ol/obj.js");
/**
 * @module ol/events/Target
 */





/**
 * @typedef {EventTarget|Target} EventTargetLike
 */

/**
 * @classdesc
 * A simplified implementation of the W3C DOM Level 2 EventTarget interface.
 * See https://www.w3.org/TR/2000/REC-DOM-Level-2-Events-20001113/events.html#Events-EventTarget.
 *
 * There are two important simplifications compared to the specification:
 *
 * 1. The handling of `useCapture` in `addEventListener` and
 *    `removeEventListener`. There is no real capture model.
 * 2. The handling of `stopPropagation` and `preventDefault` on `dispatchEvent`.
 *    There is no event target hierarchy. When a listener calls
 *    `stopPropagation` or `preventDefault` on an event object, it means that no
 *    more listeners after this one will be called. Same as when the listener
 *    returns false.
 */
class Target extends _Disposable_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * @param {*} [target] Default event target for dispatched events.
   */
  constructor(target) {
    super();

    /**
     * @private
     * @type {*}
     */
    this.eventTarget_ = target;

    /**
     * @private
     * @type {Object<string, number>|null}
     */
    this.pendingRemovals_ = null;

    /**
     * @private
     * @type {Object<string, number>|null}
     */
    this.dispatching_ = null;

    /**
     * @private
     * @type {Object<string, Array<import("../events.js").Listener>>|null}
     */
    this.listeners_ = null;
  }

  /**
   * @param {string} type Type.
   * @param {import("../events.js").Listener} listener Listener.
   */
  addEventListener(type, listener) {
    if (!type || !listener) {
      return;
    }
    const listeners = this.listeners_ || (this.listeners_ = {});
    const listenersForType = listeners[type] || (listeners[type] = []);
    if (!listenersForType.includes(listener)) {
      listenersForType.push(listener);
    }
  }

  /**
   * Dispatches an event and calls all listeners listening for events
   * of this type. The event parameter can either be a string or an
   * Object with a `type` property.
   *
   * @param {import("./Event.js").default|string} event Event object.
   * @return {boolean|undefined} `false` if anyone called preventDefault on the
   *     event object or if any of the listeners returned false.
   * @api
   */
  dispatchEvent(event) {
    const isString = typeof event === 'string';
    const type = isString ? event : event.type;
    const listeners = this.listeners_ && this.listeners_[type];
    if (!listeners) {
      return;
    }

    const evt = isString ? new _Event_js__WEBPACK_IMPORTED_MODULE_1__["default"](event) : /** @type {Event} */ (event);
    if (!evt.target) {
      evt.target = this.eventTarget_ || this;
    }
    const dispatching = this.dispatching_ || (this.dispatching_ = {});
    const pendingRemovals =
      this.pendingRemovals_ || (this.pendingRemovals_ = {});
    if (!(type in dispatching)) {
      dispatching[type] = 0;
      pendingRemovals[type] = 0;
    }
    ++dispatching[type];
    let propagate;
    for (let i = 0, ii = listeners.length; i < ii; ++i) {
      if ('handleEvent' in listeners[i]) {
        propagate = /** @type {import("../events.js").ListenerObject} */ (
          listeners[i]
        ).handleEvent(evt);
      } else {
        propagate = /** @type {import("../events.js").ListenerFunction} */ (
          listeners[i]
        ).call(this, evt);
      }
      if (propagate === false || evt.propagationStopped) {
        propagate = false;
        break;
      }
    }
    if (--dispatching[type] === 0) {
      let pr = pendingRemovals[type];
      delete pendingRemovals[type];
      while (pr--) {
        this.removeEventListener(type, _functions_js__WEBPACK_IMPORTED_MODULE_2__.VOID);
      }
      delete dispatching[type];
    }
    return propagate;
  }

  /**
   * Clean up.
   */
  disposeInternal() {
    this.listeners_ && (0,_obj_js__WEBPACK_IMPORTED_MODULE_3__.clear)(this.listeners_);
  }

  /**
   * Get the listeners for a specified event type. Listeners are returned in the
   * order that they will be called in.
   *
   * @param {string} type Type.
   * @return {Array<import("../events.js").Listener>|undefined} Listeners.
   */
  getListeners(type) {
    return (this.listeners_ && this.listeners_[type]) || undefined;
  }

  /**
   * @param {string} [type] Type. If not provided,
   *     `true` will be returned if this event target has any listeners.
   * @return {boolean} Has listeners.
   */
  hasListener(type) {
    if (!this.listeners_) {
      return false;
    }
    return type
      ? type in this.listeners_
      : Object.keys(this.listeners_).length > 0;
  }

  /**
   * @param {string} type Type.
   * @param {import("../events.js").Listener} listener Listener.
   */
  removeEventListener(type, listener) {
    if (!this.listeners_) {
      return;
    }
    const listeners = this.listeners_[type];
    if (!listeners) {
      return;
    }
    const index = listeners.indexOf(listener);
    if (index !== -1) {
      if (this.pendingRemovals_ && type in this.pendingRemovals_) {
        // make listener a no-op, and remove later in #dispatchEvent()
        listeners[index] = _functions_js__WEBPACK_IMPORTED_MODULE_2__.VOID;
        ++this.pendingRemovals_[type];
      } else {
        listeners.splice(index, 1);
        if (listeners.length === 0) {
          delete this.listeners_[type];
        }
      }
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Target);


/***/ }),

/***/ "./node_modules/ol/extent.js":
/*!***********************************!*\
  !*** ./node_modules/ol/extent.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyTransform: () => (/* binding */ applyTransform),
/* harmony export */   approximatelyEquals: () => (/* binding */ approximatelyEquals),
/* harmony export */   boundingExtent: () => (/* binding */ boundingExtent),
/* harmony export */   buffer: () => (/* binding */ buffer),
/* harmony export */   clone: () => (/* binding */ clone),
/* harmony export */   closestSquaredDistanceXY: () => (/* binding */ closestSquaredDistanceXY),
/* harmony export */   containsCoordinate: () => (/* binding */ containsCoordinate),
/* harmony export */   containsExtent: () => (/* binding */ containsExtent),
/* harmony export */   containsXY: () => (/* binding */ containsXY),
/* harmony export */   coordinateRelationship: () => (/* binding */ coordinateRelationship),
/* harmony export */   createEmpty: () => (/* binding */ createEmpty),
/* harmony export */   createOrUpdate: () => (/* binding */ createOrUpdate),
/* harmony export */   createOrUpdateEmpty: () => (/* binding */ createOrUpdateEmpty),
/* harmony export */   createOrUpdateFromCoordinate: () => (/* binding */ createOrUpdateFromCoordinate),
/* harmony export */   createOrUpdateFromCoordinates: () => (/* binding */ createOrUpdateFromCoordinates),
/* harmony export */   createOrUpdateFromFlatCoordinates: () => (/* binding */ createOrUpdateFromFlatCoordinates),
/* harmony export */   createOrUpdateFromRings: () => (/* binding */ createOrUpdateFromRings),
/* harmony export */   equals: () => (/* binding */ equals),
/* harmony export */   extend: () => (/* binding */ extend),
/* harmony export */   extendCoordinate: () => (/* binding */ extendCoordinate),
/* harmony export */   extendCoordinates: () => (/* binding */ extendCoordinates),
/* harmony export */   extendFlatCoordinates: () => (/* binding */ extendFlatCoordinates),
/* harmony export */   extendRings: () => (/* binding */ extendRings),
/* harmony export */   extendXY: () => (/* binding */ extendXY),
/* harmony export */   forEachCorner: () => (/* binding */ forEachCorner),
/* harmony export */   getArea: () => (/* binding */ getArea),
/* harmony export */   getBottomLeft: () => (/* binding */ getBottomLeft),
/* harmony export */   getBottomRight: () => (/* binding */ getBottomRight),
/* harmony export */   getCenter: () => (/* binding */ getCenter),
/* harmony export */   getCorner: () => (/* binding */ getCorner),
/* harmony export */   getEnlargedArea: () => (/* binding */ getEnlargedArea),
/* harmony export */   getForViewAndSize: () => (/* binding */ getForViewAndSize),
/* harmony export */   getHeight: () => (/* binding */ getHeight),
/* harmony export */   getIntersection: () => (/* binding */ getIntersection),
/* harmony export */   getIntersectionArea: () => (/* binding */ getIntersectionArea),
/* harmony export */   getMargin: () => (/* binding */ getMargin),
/* harmony export */   getRotatedViewport: () => (/* binding */ getRotatedViewport),
/* harmony export */   getSize: () => (/* binding */ getSize),
/* harmony export */   getTopLeft: () => (/* binding */ getTopLeft),
/* harmony export */   getTopRight: () => (/* binding */ getTopRight),
/* harmony export */   getWidth: () => (/* binding */ getWidth),
/* harmony export */   intersects: () => (/* binding */ intersects),
/* harmony export */   intersectsSegment: () => (/* binding */ intersectsSegment),
/* harmony export */   isEmpty: () => (/* binding */ isEmpty),
/* harmony export */   returnOrUpdate: () => (/* binding */ returnOrUpdate),
/* harmony export */   scaleFromCenter: () => (/* binding */ scaleFromCenter),
/* harmony export */   wrapAndSliceX: () => (/* binding */ wrapAndSliceX),
/* harmony export */   wrapX: () => (/* binding */ wrapX)
/* harmony export */ });
/* harmony import */ var _extent_Relationship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extent/Relationship.js */ "./node_modules/ol/extent/Relationship.js");
/**
 * @module ol/extent
 */


/**
 * An array of numbers representing an extent: `[minx, miny, maxx, maxy]`.
 * @typedef {Array<number>} Extent
 * @api
 */

/**
 * Extent corner.
 * @typedef {'bottom-left' | 'bottom-right' | 'top-left' | 'top-right'} Corner
 */

/**
 * Build an extent that includes all given coordinates.
 *
 * @param {Array<import("./coordinate.js").Coordinate>} coordinates Coordinates.
 * @return {Extent} Bounding extent.
 * @api
 */
function boundingExtent(coordinates) {
  const extent = createEmpty();
  for (let i = 0, ii = coordinates.length; i < ii; ++i) {
    extendCoordinate(extent, coordinates[i]);
  }
  return extent;
}

/**
 * @param {Array<number>} xs Xs.
 * @param {Array<number>} ys Ys.
 * @param {Extent} [dest] Destination extent.
 * @private
 * @return {Extent} Extent.
 */
function _boundingExtentXYs(xs, ys, dest) {
  const minX = Math.min.apply(null, xs);
  const minY = Math.min.apply(null, ys);
  const maxX = Math.max.apply(null, xs);
  const maxY = Math.max.apply(null, ys);
  return createOrUpdate(minX, minY, maxX, maxY, dest);
}

/**
 * Return extent increased by the provided value.
 * @param {Extent} extent Extent.
 * @param {number} value The amount by which the extent should be buffered.
 * @param {Extent} [dest] Extent.
 * @return {Extent} Extent.
 * @api
 */
function buffer(extent, value, dest) {
  if (dest) {
    dest[0] = extent[0] - value;
    dest[1] = extent[1] - value;
    dest[2] = extent[2] + value;
    dest[3] = extent[3] + value;
    return dest;
  }
  return [
    extent[0] - value,
    extent[1] - value,
    extent[2] + value,
    extent[3] + value,
  ];
}

/**
 * Creates a clone of an extent.
 *
 * @param {Extent} extent Extent to clone.
 * @param {Extent} [dest] Extent.
 * @return {Extent} The clone.
 */
function clone(extent, dest) {
  if (dest) {
    dest[0] = extent[0];
    dest[1] = extent[1];
    dest[2] = extent[2];
    dest[3] = extent[3];
    return dest;
  }
  return extent.slice();
}

/**
 * @param {Extent} extent Extent.
 * @param {number} x X.
 * @param {number} y Y.
 * @return {number} Closest squared distance.
 */
function closestSquaredDistanceXY(extent, x, y) {
  let dx, dy;
  if (x < extent[0]) {
    dx = extent[0] - x;
  } else if (extent[2] < x) {
    dx = x - extent[2];
  } else {
    dx = 0;
  }
  if (y < extent[1]) {
    dy = extent[1] - y;
  } else if (extent[3] < y) {
    dy = y - extent[3];
  } else {
    dy = 0;
  }
  return dx * dx + dy * dy;
}

/**
 * Check if the passed coordinate is contained or on the edge of the extent.
 *
 * @param {Extent} extent Extent.
 * @param {import("./coordinate.js").Coordinate} coordinate Coordinate.
 * @return {boolean} The coordinate is contained in the extent.
 * @api
 */
function containsCoordinate(extent, coordinate) {
  return containsXY(extent, coordinate[0], coordinate[1]);
}

/**
 * Check if one extent contains another.
 *
 * An extent is deemed contained if it lies completely within the other extent,
 * including if they share one or more edges.
 *
 * @param {Extent} extent1 Extent 1.
 * @param {Extent} extent2 Extent 2.
 * @return {boolean} The second extent is contained by or on the edge of the
 *     first.
 * @api
 */
function containsExtent(extent1, extent2) {
  return (
    extent1[0] <= extent2[0] &&
    extent2[2] <= extent1[2] &&
    extent1[1] <= extent2[1] &&
    extent2[3] <= extent1[3]
  );
}

/**
 * Check if the passed coordinate is contained or on the edge of the extent.
 *
 * @param {Extent} extent Extent.
 * @param {number} x X coordinate.
 * @param {number} y Y coordinate.
 * @return {boolean} The x, y values are contained in the extent.
 * @api
 */
function containsXY(extent, x, y) {
  return extent[0] <= x && x <= extent[2] && extent[1] <= y && y <= extent[3];
}

/**
 * Get the relationship between a coordinate and extent.
 * @param {Extent} extent The extent.
 * @param {import("./coordinate.js").Coordinate} coordinate The coordinate.
 * @return {import("./extent/Relationship.js").default} The relationship (bitwise compare with
 *     import("./extent/Relationship.js").Relationship).
 */
function coordinateRelationship(extent, coordinate) {
  const minX = extent[0];
  const minY = extent[1];
  const maxX = extent[2];
  const maxY = extent[3];
  const x = coordinate[0];
  const y = coordinate[1];
  let relationship = _extent_Relationship_js__WEBPACK_IMPORTED_MODULE_0__["default"].UNKNOWN;
  if (x < minX) {
    relationship = relationship | _extent_Relationship_js__WEBPACK_IMPORTED_MODULE_0__["default"].LEFT;
  } else if (x > maxX) {
    relationship = relationship | _extent_Relationship_js__WEBPACK_IMPORTED_MODULE_0__["default"].RIGHT;
  }
  if (y < minY) {
    relationship = relationship | _extent_Relationship_js__WEBPACK_IMPORTED_MODULE_0__["default"].BELOW;
  } else if (y > maxY) {
    relationship = relationship | _extent_Relationship_js__WEBPACK_IMPORTED_MODULE_0__["default"].ABOVE;
  }
  if (relationship === _extent_Relationship_js__WEBPACK_IMPORTED_MODULE_0__["default"].UNKNOWN) {
    relationship = _extent_Relationship_js__WEBPACK_IMPORTED_MODULE_0__["default"].INTERSECTING;
  }
  return relationship;
}

/**
 * Create an empty extent.
 * @return {Extent} Empty extent.
 * @api
 */
function createEmpty() {
  return [Infinity, Infinity, -Infinity, -Infinity];
}

/**
 * Create a new extent or update the provided extent.
 * @param {number} minX Minimum X.
 * @param {number} minY Minimum Y.
 * @param {number} maxX Maximum X.
 * @param {number} maxY Maximum Y.
 * @param {Extent} [dest] Destination extent.
 * @return {Extent} Extent.
 */
function createOrUpdate(minX, minY, maxX, maxY, dest) {
  if (dest) {
    dest[0] = minX;
    dest[1] = minY;
    dest[2] = maxX;
    dest[3] = maxY;
    return dest;
  }
  return [minX, minY, maxX, maxY];
}

/**
 * Create a new empty extent or make the provided one empty.
 * @param {Extent} [dest] Extent.
 * @return {Extent} Extent.
 */
function createOrUpdateEmpty(dest) {
  return createOrUpdate(Infinity, Infinity, -Infinity, -Infinity, dest);
}

/**
 * @param {import("./coordinate.js").Coordinate} coordinate Coordinate.
 * @param {Extent} [dest] Extent.
 * @return {Extent} Extent.
 */
function createOrUpdateFromCoordinate(coordinate, dest) {
  const x = coordinate[0];
  const y = coordinate[1];
  return createOrUpdate(x, y, x, y, dest);
}

/**
 * @param {Array<import("./coordinate.js").Coordinate>} coordinates Coordinates.
 * @param {Extent} [dest] Extent.
 * @return {Extent} Extent.
 */
function createOrUpdateFromCoordinates(coordinates, dest) {
  const extent = createOrUpdateEmpty(dest);
  return extendCoordinates(extent, coordinates);
}

/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {Extent} [dest] Extent.
 * @return {Extent} Extent.
 */
function createOrUpdateFromFlatCoordinates(
  flatCoordinates,
  offset,
  end,
  stride,
  dest,
) {
  const extent = createOrUpdateEmpty(dest);
  return extendFlatCoordinates(extent, flatCoordinates, offset, end, stride);
}

/**
 * @param {Array<Array<import("./coordinate.js").Coordinate>>} rings Rings.
 * @param {Extent} [dest] Extent.
 * @return {Extent} Extent.
 */
function createOrUpdateFromRings(rings, dest) {
  const extent = createOrUpdateEmpty(dest);
  return extendRings(extent, rings);
}

/**
 * Determine if two extents are equivalent.
 * @param {Extent} extent1 Extent 1.
 * @param {Extent} extent2 Extent 2.
 * @return {boolean} The two extents are equivalent.
 * @api
 */
function equals(extent1, extent2) {
  return (
    extent1[0] == extent2[0] &&
    extent1[2] == extent2[2] &&
    extent1[1] == extent2[1] &&
    extent1[3] == extent2[3]
  );
}

/**
 * Determine if two extents are approximately equivalent.
 * @param {Extent} extent1 Extent 1.
 * @param {Extent} extent2 Extent 2.
 * @param {number} tolerance Tolerance in extent coordinate units.
 * @return {boolean} The two extents differ by less than the tolerance.
 */
function approximatelyEquals(extent1, extent2, tolerance) {
  return (
    Math.abs(extent1[0] - extent2[0]) < tolerance &&
    Math.abs(extent1[2] - extent2[2]) < tolerance &&
    Math.abs(extent1[1] - extent2[1]) < tolerance &&
    Math.abs(extent1[3] - extent2[3]) < tolerance
  );
}

/**
 * Modify an extent to include another extent.
 * @param {Extent} extent1 The extent to be modified.
 * @param {Extent} extent2 The extent that will be included in the first.
 * @return {Extent} A reference to the first (extended) extent.
 * @api
 */
function extend(extent1, extent2) {
  if (extent2[0] < extent1[0]) {
    extent1[0] = extent2[0];
  }
  if (extent2[2] > extent1[2]) {
    extent1[2] = extent2[2];
  }
  if (extent2[1] < extent1[1]) {
    extent1[1] = extent2[1];
  }
  if (extent2[3] > extent1[3]) {
    extent1[3] = extent2[3];
  }
  return extent1;
}

/**
 * @param {Extent} extent Extent.
 * @param {import("./coordinate.js").Coordinate} coordinate Coordinate.
 */
function extendCoordinate(extent, coordinate) {
  if (coordinate[0] < extent[0]) {
    extent[0] = coordinate[0];
  }
  if (coordinate[0] > extent[2]) {
    extent[2] = coordinate[0];
  }
  if (coordinate[1] < extent[1]) {
    extent[1] = coordinate[1];
  }
  if (coordinate[1] > extent[3]) {
    extent[3] = coordinate[1];
  }
}

/**
 * @param {Extent} extent Extent.
 * @param {Array<import("./coordinate.js").Coordinate>} coordinates Coordinates.
 * @return {Extent} Extent.
 */
function extendCoordinates(extent, coordinates) {
  for (let i = 0, ii = coordinates.length; i < ii; ++i) {
    extendCoordinate(extent, coordinates[i]);
  }
  return extent;
}

/**
 * @param {Extent} extent Extent.
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @return {Extent} Extent.
 */
function extendFlatCoordinates(
  extent,
  flatCoordinates,
  offset,
  end,
  stride,
) {
  for (; offset < end; offset += stride) {
    extendXY(extent, flatCoordinates[offset], flatCoordinates[offset + 1]);
  }
  return extent;
}

/**
 * @param {Extent} extent Extent.
 * @param {Array<Array<import("./coordinate.js").Coordinate>>} rings Rings.
 * @return {Extent} Extent.
 */
function extendRings(extent, rings) {
  for (let i = 0, ii = rings.length; i < ii; ++i) {
    extendCoordinates(extent, rings[i]);
  }
  return extent;
}

/**
 * @param {Extent} extent Extent.
 * @param {number} x X.
 * @param {number} y Y.
 */
function extendXY(extent, x, y) {
  extent[0] = Math.min(extent[0], x);
  extent[1] = Math.min(extent[1], y);
  extent[2] = Math.max(extent[2], x);
  extent[3] = Math.max(extent[3], y);
}

/**
 * This function calls `callback` for each corner of the extent. If the
 * callback returns a truthy value the function returns that value
 * immediately. Otherwise the function returns `false`.
 * @param {Extent} extent Extent.
 * @param {function(import("./coordinate.js").Coordinate): S} callback Callback.
 * @return {S|boolean} Value.
 * @template S
 */
function forEachCorner(extent, callback) {
  let val;
  val = callback(getBottomLeft(extent));
  if (val) {
    return val;
  }
  val = callback(getBottomRight(extent));
  if (val) {
    return val;
  }
  val = callback(getTopRight(extent));
  if (val) {
    return val;
  }
  val = callback(getTopLeft(extent));
  if (val) {
    return val;
  }
  return false;
}

/**
 * Get the size of an extent.
 * @param {Extent} extent Extent.
 * @return {number} Area.
 * @api
 */
function getArea(extent) {
  let area = 0;
  if (!isEmpty(extent)) {
    area = getWidth(extent) * getHeight(extent);
  }
  return area;
}

/**
 * Get the bottom left coordinate of an extent.
 * @param {Extent} extent Extent.
 * @return {import("./coordinate.js").Coordinate} Bottom left coordinate.
 * @api
 */
function getBottomLeft(extent) {
  return [extent[0], extent[1]];
}

/**
 * Get the bottom right coordinate of an extent.
 * @param {Extent} extent Extent.
 * @return {import("./coordinate.js").Coordinate} Bottom right coordinate.
 * @api
 */
function getBottomRight(extent) {
  return [extent[2], extent[1]];
}

/**
 * Get the center coordinate of an extent.
 * @param {Extent} extent Extent.
 * @return {import("./coordinate.js").Coordinate} Center.
 * @api
 */
function getCenter(extent) {
  return [(extent[0] + extent[2]) / 2, (extent[1] + extent[3]) / 2];
}

/**
 * Get a corner coordinate of an extent.
 * @param {Extent} extent Extent.
 * @param {Corner} corner Corner.
 * @return {import("./coordinate.js").Coordinate} Corner coordinate.
 */
function getCorner(extent, corner) {
  let coordinate;
  if (corner === 'bottom-left') {
    coordinate = getBottomLeft(extent);
  } else if (corner === 'bottom-right') {
    coordinate = getBottomRight(extent);
  } else if (corner === 'top-left') {
    coordinate = getTopLeft(extent);
  } else if (corner === 'top-right') {
    coordinate = getTopRight(extent);
  } else {
    throw new Error('Invalid corner');
  }
  return coordinate;
}

/**
 * @param {Extent} extent1 Extent 1.
 * @param {Extent} extent2 Extent 2.
 * @return {number} Enlarged area.
 */
function getEnlargedArea(extent1, extent2) {
  const minX = Math.min(extent1[0], extent2[0]);
  const minY = Math.min(extent1[1], extent2[1]);
  const maxX = Math.max(extent1[2], extent2[2]);
  const maxY = Math.max(extent1[3], extent2[3]);
  return (maxX - minX) * (maxY - minY);
}

/**
 * @param {import("./coordinate.js").Coordinate} center Center.
 * @param {number} resolution Resolution.
 * @param {number} rotation Rotation.
 * @param {import("./size.js").Size} size Size.
 * @param {Extent} [dest] Destination extent.
 * @return {Extent} Extent.
 */
function getForViewAndSize(center, resolution, rotation, size, dest) {
  const [x0, y0, x1, y1, x2, y2, x3, y3] = getRotatedViewport(
    center,
    resolution,
    rotation,
    size,
  );
  return createOrUpdate(
    Math.min(x0, x1, x2, x3),
    Math.min(y0, y1, y2, y3),
    Math.max(x0, x1, x2, x3),
    Math.max(y0, y1, y2, y3),
    dest,
  );
}

/**
 * @param {import("./coordinate.js").Coordinate} center Center.
 * @param {number} resolution Resolution.
 * @param {number} rotation Rotation.
 * @param {import("./size.js").Size} size Size.
 * @return {Array<number>} Linear ring representing the viewport.
 */
function getRotatedViewport(center, resolution, rotation, size) {
  const dx = (resolution * size[0]) / 2;
  const dy = (resolution * size[1]) / 2;
  const cosRotation = Math.cos(rotation);
  const sinRotation = Math.sin(rotation);
  const xCos = dx * cosRotation;
  const xSin = dx * sinRotation;
  const yCos = dy * cosRotation;
  const ySin = dy * sinRotation;
  const x = center[0];
  const y = center[1];
  return [
    x - xCos + ySin,
    y - xSin - yCos,
    x - xCos - ySin,
    y - xSin + yCos,
    x + xCos - ySin,
    y + xSin + yCos,
    x + xCos + ySin,
    y + xSin - yCos,
    x - xCos + ySin,
    y - xSin - yCos,
  ];
}

/**
 * Get the height of an extent.
 * @param {Extent} extent Extent.
 * @return {number} Height.
 * @api
 */
function getHeight(extent) {
  return extent[3] - extent[1];
}

/**
 * @param {Extent} extent1 Extent 1.
 * @param {Extent} extent2 Extent 2.
 * @return {number} Intersection area.
 */
function getIntersectionArea(extent1, extent2) {
  const intersection = getIntersection(extent1, extent2);
  return getArea(intersection);
}

/**
 * Get the intersection of two extents.
 * @param {Extent} extent1 Extent 1.
 * @param {Extent} extent2 Extent 2.
 * @param {Extent} [dest] Optional extent to populate with intersection.
 * @return {Extent} Intersecting extent.
 * @api
 */
function getIntersection(extent1, extent2, dest) {
  const intersection = dest ? dest : createEmpty();
  if (intersects(extent1, extent2)) {
    if (extent1[0] > extent2[0]) {
      intersection[0] = extent1[0];
    } else {
      intersection[0] = extent2[0];
    }
    if (extent1[1] > extent2[1]) {
      intersection[1] = extent1[1];
    } else {
      intersection[1] = extent2[1];
    }
    if (extent1[2] < extent2[2]) {
      intersection[2] = extent1[2];
    } else {
      intersection[2] = extent2[2];
    }
    if (extent1[3] < extent2[3]) {
      intersection[3] = extent1[3];
    } else {
      intersection[3] = extent2[3];
    }
  } else {
    createOrUpdateEmpty(intersection);
  }
  return intersection;
}

/**
 * @param {Extent} extent Extent.
 * @return {number} Margin.
 */
function getMargin(extent) {
  return getWidth(extent) + getHeight(extent);
}

/**
 * Get the size (width, height) of an extent.
 * @param {Extent} extent The extent.
 * @return {import("./size.js").Size} The extent size.
 * @api
 */
function getSize(extent) {
  return [extent[2] - extent[0], extent[3] - extent[1]];
}

/**
 * Get the top left coordinate of an extent.
 * @param {Extent} extent Extent.
 * @return {import("./coordinate.js").Coordinate} Top left coordinate.
 * @api
 */
function getTopLeft(extent) {
  return [extent[0], extent[3]];
}

/**
 * Get the top right coordinate of an extent.
 * @param {Extent} extent Extent.
 * @return {import("./coordinate.js").Coordinate} Top right coordinate.
 * @api
 */
function getTopRight(extent) {
  return [extent[2], extent[3]];
}

/**
 * Get the width of an extent.
 * @param {Extent} extent Extent.
 * @return {number} Width.
 * @api
 */
function getWidth(extent) {
  return extent[2] - extent[0];
}

/**
 * Determine if one extent intersects another.
 * @param {Extent} extent1 Extent 1.
 * @param {Extent} extent2 Extent.
 * @return {boolean} The two extents intersect.
 * @api
 */
function intersects(extent1, extent2) {
  return (
    extent1[0] <= extent2[2] &&
    extent1[2] >= extent2[0] &&
    extent1[1] <= extent2[3] &&
    extent1[3] >= extent2[1]
  );
}

/**
 * Determine if an extent is empty.
 * @param {Extent} extent Extent.
 * @return {boolean} Is empty.
 * @api
 */
function isEmpty(extent) {
  return extent[2] < extent[0] || extent[3] < extent[1];
}

/**
 * @param {Extent} extent Extent.
 * @param {Extent} [dest] Extent.
 * @return {Extent} Extent.
 */
function returnOrUpdate(extent, dest) {
  if (dest) {
    dest[0] = extent[0];
    dest[1] = extent[1];
    dest[2] = extent[2];
    dest[3] = extent[3];
    return dest;
  }
  return extent;
}

/**
 * @param {Extent} extent Extent.
 * @param {number} value Value.
 */
function scaleFromCenter(extent, value) {
  const deltaX = ((extent[2] - extent[0]) / 2) * (value - 1);
  const deltaY = ((extent[3] - extent[1]) / 2) * (value - 1);
  extent[0] -= deltaX;
  extent[2] += deltaX;
  extent[1] -= deltaY;
  extent[3] += deltaY;
}

/**
 * Determine if the segment between two coordinates intersects (crosses,
 * touches, or is contained by) the provided extent.
 * @param {Extent} extent The extent.
 * @param {import("./coordinate.js").Coordinate} start Segment start coordinate.
 * @param {import("./coordinate.js").Coordinate} end Segment end coordinate.
 * @return {boolean} The segment intersects the extent.
 */
function intersectsSegment(extent, start, end) {
  let intersects = false;
  const startRel = coordinateRelationship(extent, start);
  const endRel = coordinateRelationship(extent, end);
  if (
    startRel === _extent_Relationship_js__WEBPACK_IMPORTED_MODULE_0__["default"].INTERSECTING ||
    endRel === _extent_Relationship_js__WEBPACK_IMPORTED_MODULE_0__["default"].INTERSECTING
  ) {
    intersects = true;
  } else {
    const minX = extent[0];
    const minY = extent[1];
    const maxX = extent[2];
    const maxY = extent[3];
    const startX = start[0];
    const startY = start[1];
    const endX = end[0];
    const endY = end[1];
    const slope = (endY - startY) / (endX - startX);
    let x, y;
    if (!!(endRel & _extent_Relationship_js__WEBPACK_IMPORTED_MODULE_0__["default"].ABOVE) && !(startRel & _extent_Relationship_js__WEBPACK_IMPORTED_MODULE_0__["default"].ABOVE)) {
      // potentially intersects top
      x = endX - (endY - maxY) / slope;
      intersects = x >= minX && x <= maxX;
    }
    if (
      !intersects &&
      !!(endRel & _extent_Relationship_js__WEBPACK_IMPORTED_MODULE_0__["default"].RIGHT) &&
      !(startRel & _extent_Relationship_js__WEBPACK_IMPORTED_MODULE_0__["default"].RIGHT)
    ) {
      // potentially intersects right
      y = endY - (endX - maxX) * slope;
      intersects = y >= minY && y <= maxY;
    }
    if (
      !intersects &&
      !!(endRel & _extent_Relationship_js__WEBPACK_IMPORTED_MODULE_0__["default"].BELOW) &&
      !(startRel & _extent_Relationship_js__WEBPACK_IMPORTED_MODULE_0__["default"].BELOW)
    ) {
      // potentially intersects bottom
      x = endX - (endY - minY) / slope;
      intersects = x >= minX && x <= maxX;
    }
    if (
      !intersects &&
      !!(endRel & _extent_Relationship_js__WEBPACK_IMPORTED_MODULE_0__["default"].LEFT) &&
      !(startRel & _extent_Relationship_js__WEBPACK_IMPORTED_MODULE_0__["default"].LEFT)
    ) {
      // potentially intersects left
      y = endY - (endX - minX) * slope;
      intersects = y >= minY && y <= maxY;
    }
  }
  return intersects;
}

/**
 * Apply a transform function to the extent.
 * @param {Extent} extent Extent.
 * @param {import("./proj.js").TransformFunction} transformFn Transform function.
 * Called with `[minX, minY, maxX, maxY]` extent coordinates.
 * @param {Extent} [dest] Destination extent.
 * @param {number} [stops] Number of stops per side used for the transform.
 * By default only the corners are used.
 * @return {Extent} Extent.
 * @api
 */
function applyTransform(extent, transformFn, dest, stops) {
  if (isEmpty(extent)) {
    return createOrUpdateEmpty(dest);
  }
  let coordinates = [];
  if (stops > 1) {
    const width = extent[2] - extent[0];
    const height = extent[3] - extent[1];
    for (let i = 0; i < stops; ++i) {
      coordinates.push(
        extent[0] + (width * i) / stops,
        extent[1],
        extent[2],
        extent[1] + (height * i) / stops,
        extent[2] - (width * i) / stops,
        extent[3],
        extent[0],
        extent[3] - (height * i) / stops,
      );
    }
  } else {
    coordinates = [
      extent[0],
      extent[1],
      extent[2],
      extent[1],
      extent[2],
      extent[3],
      extent[0],
      extent[3],
    ];
  }
  transformFn(coordinates, coordinates, 2);
  const xs = [];
  const ys = [];
  for (let i = 0, l = coordinates.length; i < l; i += 2) {
    xs.push(coordinates[i]);
    ys.push(coordinates[i + 1]);
  }
  return _boundingExtentXYs(xs, ys, dest);
}

/**
 * Modifies the provided extent in-place to be within the real world
 * extent.
 *
 * @param {Extent} extent Extent.
 * @param {import("./proj/Projection.js").default} projection Projection
 * @return {Extent} The extent within the real world extent.
 */
function wrapX(extent, projection) {
  const projectionExtent = projection.getExtent();
  const center = getCenter(extent);
  if (
    projection.canWrapX() &&
    (center[0] < projectionExtent[0] || center[0] >= projectionExtent[2])
  ) {
    const worldWidth = getWidth(projectionExtent);
    const worldsAway = Math.floor(
      (center[0] - projectionExtent[0]) / worldWidth,
    );
    const offset = worldsAway * worldWidth;
    extent[0] -= offset;
    extent[2] -= offset;
  }
  return extent;
}

/**
 * Fits the extent to the real world
 *
 * If the extent does not cross the anti meridian, this will return the extent in an array
 * If the extent crosses the anti meridian, the extent will be sliced, so each part fits within the
 * real world
 *
 *
 * @param {Extent} extent Extent.
 * @param {import("./proj/Projection.js").default} projection Projection
 * @return {Array<Extent>} The extent within the real world extent.
 */
function wrapAndSliceX(extent, projection) {
  if (projection.canWrapX()) {
    const projectionExtent = projection.getExtent();

    if (!isFinite(extent[0]) || !isFinite(extent[2])) {
      return [[projectionExtent[0], extent[1], projectionExtent[2], extent[3]]];
    }

    wrapX(extent, projection);
    const worldWidth = getWidth(projectionExtent);

    if (getWidth(extent) > worldWidth) {
      // the extent wraps around on itself
      return [[projectionExtent[0], extent[1], projectionExtent[2], extent[3]]];
    }
    if (extent[0] < projectionExtent[0]) {
      // the extent crosses the anti meridian, so it needs to be sliced
      return [
        [extent[0] + worldWidth, extent[1], projectionExtent[2], extent[3]],
        [projectionExtent[0], extent[1], extent[2], extent[3]],
      ];
    }
    if (extent[2] > projectionExtent[2]) {
      // the extent crosses the anti meridian, so it needs to be sliced
      return [
        [extent[0], extent[1], projectionExtent[2], extent[3]],
        [projectionExtent[0], extent[1], extent[2] - worldWidth, extent[3]],
      ];
    }
  }

  return [extent];
}


/***/ }),

/***/ "./node_modules/ol/extent/Relationship.js":
/*!************************************************!*\
  !*** ./node_modules/ol/extent/Relationship.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @module ol/extent/Relationship
 */

/**
 * Relationship to an extent.
 * @enum {number}
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  UNKNOWN: 0,
  INTERSECTING: 1,
  ABOVE: 2,
  RIGHT: 4,
  BELOW: 8,
  LEFT: 16,
});


/***/ }),

/***/ "./node_modules/ol/functions.js":
/*!**************************************!*\
  !*** ./node_modules/ol/functions.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FALSE: () => (/* binding */ FALSE),
/* harmony export */   TRUE: () => (/* binding */ TRUE),
/* harmony export */   VOID: () => (/* binding */ VOID),
/* harmony export */   memoizeOne: () => (/* binding */ memoizeOne),
/* harmony export */   toPromise: () => (/* binding */ toPromise)
/* harmony export */ });
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array.js */ "./node_modules/ol/array.js");
/**
 * @module ol/functions
 */



/**
 * Always returns true.
 * @return {boolean} true.
 */
function TRUE() {
  return true;
}

/**
 * Always returns false.
 * @return {boolean} false.
 */
function FALSE() {
  return false;
}

/**
 * A reusable function, used e.g. as a default for callbacks.
 *
 * @return {void} Nothing.
 */
function VOID() {}

/**
 * Wrap a function in another function that remembers the last return.  If the
 * returned function is called twice in a row with the same arguments and the same
 * this object, it will return the value from the first call in the second call.
 *
 * @param {function(...any): ReturnType} fn The function to memoize.
 * @return {function(...any): ReturnType} The memoized function.
 * @template ReturnType
 */
function memoizeOne(fn) {
  let called = false;

  /** @type {ReturnType} */
  let lastResult;

  /** @type {Array<any>} */
  let lastArgs;

  let lastThis;

  return function () {
    const nextArgs = Array.prototype.slice.call(arguments);
    if (!called || this !== lastThis || !(0,_array_js__WEBPACK_IMPORTED_MODULE_0__.equals)(nextArgs, lastArgs)) {
      called = true;
      lastThis = this;
      lastArgs = nextArgs;
      lastResult = fn.apply(this, arguments);
    }
    return lastResult;
  };
}

/**
 * @template T
 * @param {function(): (T | Promise<T>)} getter A function that returns a value or a promise for a value.
 * @return {Promise<T>} A promise for the value.
 */
function toPromise(getter) {
  function promiseGetter() {
    let value;
    try {
      value = getter();
    } catch (err) {
      return Promise.reject(err);
    }
    if (value instanceof Promise) {
      return value;
    }
    return Promise.resolve(value);
  }
  return promiseGetter();
}


/***/ }),

/***/ "./node_modules/ol/geom/Geometry.js":
/*!******************************************!*\
  !*** ./node_modules/ol/geom/Geometry.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Object_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Object.js */ "./node_modules/ol/Object.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util.js */ "./node_modules/ol/util.js");
/* harmony import */ var _transform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../transform.js */ "./node_modules/ol/transform.js");
/* harmony import */ var _extent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../extent.js */ "./node_modules/ol/extent.js");
/* harmony import */ var _proj_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../proj.js */ "./node_modules/ol/proj.js");
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../functions.js */ "./node_modules/ol/functions.js");
/* harmony import */ var _flat_transform_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./flat/transform.js */ "./node_modules/ol/geom/flat/transform.js");
/**
 * @module ol/geom/Geometry
 */








/**
 * @typedef {'XY' | 'XYZ' | 'XYM' | 'XYZM'} GeometryLayout
 * The coordinate layout for geometries, indicating whether a 3rd or 4th z ('Z')
 * or measure ('M') coordinate is available.
 */

/**
 * @typedef {'Point' | 'LineString' | 'LinearRing' | 'Polygon' | 'MultiPoint' | 'MultiLineString' | 'MultiPolygon' | 'GeometryCollection' | 'Circle'} Type
 * The geometry type.  One of `'Point'`, `'LineString'`, `'LinearRing'`,
 * `'Polygon'`, `'MultiPoint'`, `'MultiLineString'`, `'MultiPolygon'`,
 * `'GeometryCollection'`, or `'Circle'`.
 */

/**
 * @type {import("../transform.js").Transform}
 */
const tmpTransform = (0,_transform_js__WEBPACK_IMPORTED_MODULE_1__.create)();

/**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * Base class for vector geometries.
 *
 * To get notified of changes to the geometry, register a listener for the
 * generic `change` event on your geometry instance.
 *
 * @abstract
 * @api
 */
class Geometry extends _Object_js__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor() {
    super();

    /**
     * @private
     * @type {import("../extent.js").Extent}
     */
    this.extent_ = (0,_extent_js__WEBPACK_IMPORTED_MODULE_3__.createEmpty)();

    /**
     * @private
     * @type {number}
     */
    this.extentRevision_ = -1;

    /**
     * @protected
     * @type {number}
     */
    this.simplifiedGeometryMaxMinSquaredTolerance = 0;

    /**
     * @protected
     * @type {number}
     */
    this.simplifiedGeometryRevision = 0;

    /**
     * Get a transformed and simplified version of the geometry.
     * @abstract
     * @param {number} revision The geometry revision.
     * @param {number} squaredTolerance Squared tolerance.
     * @param {import("../proj.js").TransformFunction} [transform] Optional transform function.
     * @return {Geometry} Simplified geometry.
     */
    this.simplifyTransformedInternal = (0,_functions_js__WEBPACK_IMPORTED_MODULE_4__.memoizeOne)(
      (revision, squaredTolerance, transform) => {
        if (!transform) {
          return this.getSimplifiedGeometry(squaredTolerance);
        }
        const clone = this.clone();
        clone.applyTransform(transform);
        return clone.getSimplifiedGeometry(squaredTolerance);
      },
    );
  }

  /**
   * Get a transformed and simplified version of the geometry.
   * @abstract
   * @param {number} squaredTolerance Squared tolerance.
   * @param {import("../proj.js").TransformFunction} [transform] Optional transform function.
   * @return {Geometry} Simplified geometry.
   */
  simplifyTransformed(squaredTolerance, transform) {
    return this.simplifyTransformedInternal(
      this.getRevision(),
      squaredTolerance,
      transform,
    );
  }

  /**
   * Make a complete copy of the geometry.
   * @abstract
   * @return {!Geometry} Clone.
   */
  clone() {
    return (0,_util_js__WEBPACK_IMPORTED_MODULE_5__.abstract)();
  }

  /**
   * @abstract
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   */
  closestPointXY(x, y, closestPoint, minSquaredDistance) {
    return (0,_util_js__WEBPACK_IMPORTED_MODULE_5__.abstract)();
  }

  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @return {boolean} Contains (x, y).
   */
  containsXY(x, y) {
    const coord = this.getClosestPoint([x, y]);
    return coord[0] === x && coord[1] === y;
  }

  /**
   * Return the closest point of the geometry to the passed point as
   * {@link module:ol/coordinate~Coordinate coordinate}.
   * @param {import("../coordinate.js").Coordinate} point Point.
   * @param {import("../coordinate.js").Coordinate} [closestPoint] Closest point.
   * @return {import("../coordinate.js").Coordinate} Closest point.
   * @api
   */
  getClosestPoint(point, closestPoint) {
    closestPoint = closestPoint ? closestPoint : [NaN, NaN];
    this.closestPointXY(point[0], point[1], closestPoint, Infinity);
    return closestPoint;
  }

  /**
   * Returns true if this geometry includes the specified coordinate. If the
   * coordinate is on the boundary of the geometry, returns false.
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @return {boolean} Contains coordinate.
   * @api
   */
  intersectsCoordinate(coordinate) {
    return this.containsXY(coordinate[0], coordinate[1]);
  }

  /**
   * @abstract
   * @param {import("../extent.js").Extent} extent Extent.
   * @protected
   * @return {import("../extent.js").Extent} extent Extent.
   */
  computeExtent(extent) {
    return (0,_util_js__WEBPACK_IMPORTED_MODULE_5__.abstract)();
  }

  /**
   * Get the extent of the geometry.
   * @param {import("../extent.js").Extent} [extent] Extent.
   * @return {import("../extent.js").Extent} extent Extent.
   * @api
   */
  getExtent(extent) {
    if (this.extentRevision_ != this.getRevision()) {
      const extent = this.computeExtent(this.extent_);
      if (isNaN(extent[0]) || isNaN(extent[1])) {
        (0,_extent_js__WEBPACK_IMPORTED_MODULE_3__.createOrUpdateEmpty)(extent);
      }
      this.extentRevision_ = this.getRevision();
    }
    return (0,_extent_js__WEBPACK_IMPORTED_MODULE_3__.returnOrUpdate)(this.extent_, extent);
  }

  /**
   * Rotate the geometry around a given coordinate. This modifies the geometry
   * coordinates in place.
   * @abstract
   * @param {number} angle Rotation angle in radians.
   * @param {import("../coordinate.js").Coordinate} anchor The rotation center.
   * @api
   */
  rotate(angle, anchor) {
    (0,_util_js__WEBPACK_IMPORTED_MODULE_5__.abstract)();
  }

  /**
   * Scale the geometry (with an optional origin).  This modifies the geometry
   * coordinates in place.
   * @abstract
   * @param {number} sx The scaling factor in the x-direction.
   * @param {number} [sy] The scaling factor in the y-direction (defaults to sx).
   * @param {import("../coordinate.js").Coordinate} [anchor] The scale origin (defaults to the center
   *     of the geometry extent).
   * @api
   */
  scale(sx, sy, anchor) {
    (0,_util_js__WEBPACK_IMPORTED_MODULE_5__.abstract)();
  }

  /**
   * Create a simplified version of this geometry.  For linestrings, this uses
   * the [Douglas Peucker](https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm)
   * algorithm.  For polygons, a quantization-based
   * simplification is used to preserve topology.
   * @param {number} tolerance The tolerance distance for simplification.
   * @return {Geometry} A new, simplified version of the original geometry.
   * @api
   */
  simplify(tolerance) {
    return this.getSimplifiedGeometry(tolerance * tolerance);
  }

  /**
   * Create a simplified version of this geometry using the Douglas Peucker
   * algorithm.
   * See https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm.
   * @abstract
   * @param {number} squaredTolerance Squared tolerance.
   * @return {Geometry} Simplified geometry.
   */
  getSimplifiedGeometry(squaredTolerance) {
    return (0,_util_js__WEBPACK_IMPORTED_MODULE_5__.abstract)();
  }

  /**
   * Get the type of this geometry.
   * @abstract
   * @return {Type} Geometry type.
   */
  getType() {
    return (0,_util_js__WEBPACK_IMPORTED_MODULE_5__.abstract)();
  }

  /**
   * Apply a transform function to the coordinates of the geometry.
   * The geometry is modified in place.
   * If you do not want the geometry modified in place, first `clone()` it and
   * then use this function on the clone.
   * @abstract
   * @param {import("../proj.js").TransformFunction} transformFn Transform function.
   * Called with a flat array of geometry coordinates.
   */
  applyTransform(transformFn) {
    (0,_util_js__WEBPACK_IMPORTED_MODULE_5__.abstract)();
  }

  /**
   * Test if the geometry and the passed extent intersect.
   * @abstract
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {boolean} `true` if the geometry and the extent intersect.
   */
  intersectsExtent(extent) {
    return (0,_util_js__WEBPACK_IMPORTED_MODULE_5__.abstract)();
  }

  /**
   * Translate the geometry.  This modifies the geometry coordinates in place.  If
   * instead you want a new geometry, first `clone()` this geometry.
   * @abstract
   * @param {number} deltaX Delta X.
   * @param {number} deltaY Delta Y.
   * @api
   */
  translate(deltaX, deltaY) {
    (0,_util_js__WEBPACK_IMPORTED_MODULE_5__.abstract)();
  }

  /**
   * Transform each coordinate of the geometry from one coordinate reference
   * system to another. The geometry is modified in place.
   * For example, a line will be transformed to a line and a circle to a circle.
   * If you do not want the geometry modified in place, first `clone()` it and
   * then use this function on the clone.
   *
   * @param {import("../proj.js").ProjectionLike} source The current projection.  Can be a
   *     string identifier or a {@link module:ol/proj/Projection~Projection} object.
   * @param {import("../proj.js").ProjectionLike} destination The desired projection.  Can be a
   *     string identifier or a {@link module:ol/proj/Projection~Projection} object.
   * @return {this} This geometry.  Note that original geometry is
   *     modified in place.
   * @api
   */
  transform(source, destination) {
    /** @type {import("../proj/Projection.js").default} */
    const sourceProj = (0,_proj_js__WEBPACK_IMPORTED_MODULE_0__.get)(source);
    const transformFn =
      sourceProj.getUnits() == 'tile-pixels'
        ? function (inCoordinates, outCoordinates, stride) {
            const pixelExtent = sourceProj.getExtent();
            const projectedExtent = sourceProj.getWorldExtent();
            const scale = (0,_extent_js__WEBPACK_IMPORTED_MODULE_3__.getHeight)(projectedExtent) / (0,_extent_js__WEBPACK_IMPORTED_MODULE_3__.getHeight)(pixelExtent);
            (0,_transform_js__WEBPACK_IMPORTED_MODULE_1__.compose)(
              tmpTransform,
              projectedExtent[0],
              projectedExtent[3],
              scale,
              -scale,
              0,
              0,
              0,
            );
            (0,_flat_transform_js__WEBPACK_IMPORTED_MODULE_6__.transform2D)(
              inCoordinates,
              0,
              inCoordinates.length,
              stride,
              tmpTransform,
              outCoordinates,
            );
            return (0,_proj_js__WEBPACK_IMPORTED_MODULE_0__.getTransform)(sourceProj, destination)(
              inCoordinates,
              outCoordinates,
              stride,
            );
          }
        : (0,_proj_js__WEBPACK_IMPORTED_MODULE_0__.getTransform)(sourceProj, destination);
    this.applyTransform(transformFn);
    return this;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Geometry);


/***/ }),

/***/ "./node_modules/ol/geom/LineString.js":
/*!********************************************!*\
  !*** ./node_modules/ol/geom/LineString.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SimpleGeometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SimpleGeometry.js */ "./node_modules/ol/geom/SimpleGeometry.js");
/* harmony import */ var _flat_closest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flat/closest.js */ "./node_modules/ol/geom/flat/closest.js");
/* harmony import */ var _extent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../extent.js */ "./node_modules/ol/extent.js");
/* harmony import */ var _flat_deflate_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./flat/deflate.js */ "./node_modules/ol/geom/flat/deflate.js");
/* harmony import */ var _flat_simplify_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./flat/simplify.js */ "./node_modules/ol/geom/flat/simplify.js");
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../array.js */ "./node_modules/ol/array.js");
/* harmony import */ var _flat_segments_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./flat/segments.js */ "./node_modules/ol/geom/flat/segments.js");
/* harmony import */ var _flat_inflate_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./flat/inflate.js */ "./node_modules/ol/geom/flat/inflate.js");
/* harmony import */ var _flat_interpolate_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./flat/interpolate.js */ "./node_modules/ol/geom/flat/interpolate.js");
/* harmony import */ var _flat_intersectsextent_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./flat/intersectsextent.js */ "./node_modules/ol/geom/flat/intersectsextent.js");
/* harmony import */ var _flat_length_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./flat/length.js */ "./node_modules/ol/geom/flat/length.js");
/**
 * @module ol/geom/LineString
 */












/**
 * @classdesc
 * Linestring geometry.
 *
 * @api
 */
class LineString extends _SimpleGeometry_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * @param {Array<import("../coordinate.js").Coordinate>|Array<number>} coordinates Coordinates.
   *     For internal use, flat coordinates in combination with `layout` are also accepted.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   */
  constructor(coordinates, layout) {
    super();

    /**
     * @private
     * @type {import("../coordinate.js").Coordinate|null}
     */
    this.flatMidpoint_ = null;

    /**
     * @private
     * @type {number}
     */
    this.flatMidpointRevision_ = -1;

    /**
     * @private
     * @type {number}
     */
    this.maxDelta_ = -1;

    /**
     * @private
     * @type {number}
     */
    this.maxDeltaRevision_ = -1;

    if (layout !== undefined && !Array.isArray(coordinates[0])) {
      this.setFlatCoordinates(
        layout,
        /** @type {Array<number>} */ (coordinates),
      );
    } else {
      this.setCoordinates(
        /** @type {Array<import("../coordinate.js").Coordinate>} */ (
          coordinates
        ),
        layout,
      );
    }
  }

  /**
   * Append the passed coordinate to the coordinates of the linestring.
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @api
   */
  appendCoordinate(coordinate) {
    (0,_array_js__WEBPACK_IMPORTED_MODULE_1__.extend)(this.flatCoordinates, coordinate);
    this.changed();
  }

  /**
   * Make a complete copy of the geometry.
   * @return {!LineString} Clone.
   * @api
   */
  clone() {
    const lineString = new LineString(
      this.flatCoordinates.slice(),
      this.layout,
    );
    lineString.applyProperties(this);
    return lineString;
  }

  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   */
  closestPointXY(x, y, closestPoint, minSquaredDistance) {
    if (minSquaredDistance < (0,_extent_js__WEBPACK_IMPORTED_MODULE_2__.closestSquaredDistanceXY)(this.getExtent(), x, y)) {
      return minSquaredDistance;
    }
    if (this.maxDeltaRevision_ != this.getRevision()) {
      this.maxDelta_ = Math.sqrt(
        (0,_flat_closest_js__WEBPACK_IMPORTED_MODULE_3__.maxSquaredDelta)(
          this.flatCoordinates,
          0,
          this.flatCoordinates.length,
          this.stride,
          0,
        ),
      );
      this.maxDeltaRevision_ = this.getRevision();
    }
    return (0,_flat_closest_js__WEBPACK_IMPORTED_MODULE_3__.assignClosestPoint)(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      this.maxDelta_,
      false,
      x,
      y,
      closestPoint,
      minSquaredDistance,
    );
  }

  /**
   * Iterate over each segment, calling the provided callback.
   * If the callback returns a truthy value the function returns that
   * value immediately. Otherwise the function returns `false`.
   *
   * @param {function(this: S, import("../coordinate.js").Coordinate, import("../coordinate.js").Coordinate): T} callback Function
   *     called for each segment. The function will receive two arguments, the start and end coordinates of the segment.
   * @return {T|boolean} Value.
   * @template T,S
   * @api
   */
  forEachSegment(callback) {
    return (0,_flat_segments_js__WEBPACK_IMPORTED_MODULE_4__.forEach)(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      callback,
    );
  }

  /**
   * Returns the coordinate at `m` using linear interpolation, or `null` if no
   * such coordinate exists.
   *
   * `extrapolate` controls extrapolation beyond the range of Ms in the
   * MultiLineString. If `extrapolate` is `true` then Ms less than the first
   * M will return the first coordinate and Ms greater than the last M will
   * return the last coordinate.
   *
   * @param {number} m M.
   * @param {boolean} [extrapolate] Extrapolate. Default is `false`.
   * @return {import("../coordinate.js").Coordinate|null} Coordinate.
   * @api
   */
  getCoordinateAtM(m, extrapolate) {
    if (this.layout != 'XYM' && this.layout != 'XYZM') {
      return null;
    }
    extrapolate = extrapolate !== undefined ? extrapolate : false;
    return (0,_flat_interpolate_js__WEBPACK_IMPORTED_MODULE_5__.lineStringCoordinateAtM)(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      m,
      extrapolate,
    );
  }

  /**
   * Return the coordinates of the linestring.
   * @return {Array<import("../coordinate.js").Coordinate>} Coordinates.
   * @api
   */
  getCoordinates() {
    return (0,_flat_inflate_js__WEBPACK_IMPORTED_MODULE_6__.inflateCoordinates)(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
    );
  }

  /**
   * Return the coordinate at the provided fraction along the linestring.
   * The `fraction` is a number between 0 and 1, where 0 is the start of the
   * linestring and 1 is the end.
   * @param {number} fraction Fraction.
   * @param {import("../coordinate.js").Coordinate} [dest] Optional coordinate whose values will
   *     be modified. If not provided, a new coordinate will be returned.
   * @return {import("../coordinate.js").Coordinate} Coordinate of the interpolated point.
   * @api
   */
  getCoordinateAt(fraction, dest) {
    return (0,_flat_interpolate_js__WEBPACK_IMPORTED_MODULE_5__.interpolatePoint)(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      fraction,
      dest,
      this.stride,
    );
  }

  /**
   * Return the length of the linestring on projected plane.
   * @return {number} Length (on projected plane).
   * @api
   */
  getLength() {
    return (0,_flat_length_js__WEBPACK_IMPORTED_MODULE_7__.lineStringLength)(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
    );
  }

  /**
   * @return {Array<number>} Flat midpoint.
   */
  getFlatMidpoint() {
    if (this.flatMidpointRevision_ != this.getRevision()) {
      this.flatMidpoint_ = this.getCoordinateAt(
        0.5,
        this.flatMidpoint_ ?? undefined,
      );
      this.flatMidpointRevision_ = this.getRevision();
    }
    return /** @type {Array<number>} */ (this.flatMidpoint_);
  }

  /**
   * @param {number} squaredTolerance Squared tolerance.
   * @return {LineString} Simplified LineString.
   * @protected
   */
  getSimplifiedGeometryInternal(squaredTolerance) {
    /** @type {Array<number>} */
    const simplifiedFlatCoordinates = [];
    simplifiedFlatCoordinates.length = (0,_flat_simplify_js__WEBPACK_IMPORTED_MODULE_8__.douglasPeucker)(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      squaredTolerance,
      simplifiedFlatCoordinates,
      0,
    );
    return new LineString(simplifiedFlatCoordinates, 'XY');
  }

  /**
   * Get the type of this geometry.
   * @return {import("./Geometry.js").Type} Geometry type.
   * @api
   */
  getType() {
    return 'LineString';
  }

  /**
   * Test if the geometry and the passed extent intersect.
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {boolean} `true` if the geometry and the extent intersect.
   * @api
   */
  intersectsExtent(extent) {
    return (0,_flat_intersectsextent_js__WEBPACK_IMPORTED_MODULE_9__.intersectsLineString)(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      extent,
    );
  }

  /**
   * Set the coordinates of the linestring.
   * @param {!Array<import("../coordinate.js").Coordinate>} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   * @api
   */
  setCoordinates(coordinates, layout) {
    this.setLayout(layout, coordinates, 1);
    if (!this.flatCoordinates) {
      this.flatCoordinates = [];
    }
    this.flatCoordinates.length = (0,_flat_deflate_js__WEBPACK_IMPORTED_MODULE_10__.deflateCoordinates)(
      this.flatCoordinates,
      0,
      coordinates,
      this.stride,
    );
    this.changed();
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LineString);


/***/ }),

/***/ "./node_modules/ol/geom/SimpleGeometry.js":
/*!************************************************!*\
  !*** ./node_modules/ol/geom/SimpleGeometry.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getLayoutForStride: () => (/* binding */ getLayoutForStride),
/* harmony export */   getStrideForLayout: () => (/* binding */ getStrideForLayout),
/* harmony export */   transformGeom2D: () => (/* binding */ transformGeom2D)
/* harmony export */ });
/* harmony import */ var _Geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Geometry.js */ "./node_modules/ol/geom/Geometry.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util.js */ "./node_modules/ol/util.js");
/* harmony import */ var _extent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../extent.js */ "./node_modules/ol/extent.js");
/* harmony import */ var _flat_transform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flat/transform.js */ "./node_modules/ol/geom/flat/transform.js");
/**
 * @module ol/geom/SimpleGeometry
 */





/**
 * @classdesc
 * Abstract base class; only used for creating subclasses; do not instantiate
 * in apps, as cannot be rendered.
 *
 * @abstract
 * @api
 */
class SimpleGeometry extends _Geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();

    /**
     * @protected
     * @type {import("./Geometry.js").GeometryLayout}
     */
    this.layout = 'XY';

    /**
     * @protected
     * @type {number}
     */
    this.stride = 2;

    /**
     * @protected
     * @type {Array<number>}
     */
    this.flatCoordinates;
  }

  /**
   * @param {import("../extent.js").Extent} extent Extent.
   * @protected
   * @return {import("../extent.js").Extent} extent Extent.
   */
  computeExtent(extent) {
    return (0,_extent_js__WEBPACK_IMPORTED_MODULE_1__.createOrUpdateFromFlatCoordinates)(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      extent,
    );
  }

  /**
   * @abstract
   * @return {Array<*> | null} Coordinates.
   */
  getCoordinates() {
    return (0,_util_js__WEBPACK_IMPORTED_MODULE_2__.abstract)();
  }

  /**
   * Return the first coordinate of the geometry.
   * @return {import("../coordinate.js").Coordinate} First coordinate.
   * @api
   */
  getFirstCoordinate() {
    return this.flatCoordinates.slice(0, this.stride);
  }

  /**
   * @return {Array<number>} Flat coordinates.
   */
  getFlatCoordinates() {
    return this.flatCoordinates;
  }

  /**
   * Return the last coordinate of the geometry.
   * @return {import("../coordinate.js").Coordinate} Last point.
   * @api
   */
  getLastCoordinate() {
    return this.flatCoordinates.slice(
      this.flatCoordinates.length - this.stride,
    );
  }

  /**
   * Return the {@link import("./Geometry.js").GeometryLayout layout} of the geometry.
   * @return {import("./Geometry.js").GeometryLayout} Layout.
   * @api
   */
  getLayout() {
    return this.layout;
  }

  /**
   * Create a simplified version of this geometry using the Douglas Peucker algorithm.
   * @param {number} squaredTolerance Squared tolerance.
   * @return {SimpleGeometry} Simplified geometry.
   */
  getSimplifiedGeometry(squaredTolerance) {
    if (this.simplifiedGeometryRevision !== this.getRevision()) {
      this.simplifiedGeometryMaxMinSquaredTolerance = 0;
      this.simplifiedGeometryRevision = this.getRevision();
    }
    // If squaredTolerance is negative or if we know that simplification will not
    // have any effect then just return this.
    if (
      squaredTolerance < 0 ||
      (this.simplifiedGeometryMaxMinSquaredTolerance !== 0 &&
        squaredTolerance <= this.simplifiedGeometryMaxMinSquaredTolerance)
    ) {
      return this;
    }

    const simplifiedGeometry =
      this.getSimplifiedGeometryInternal(squaredTolerance);
    const simplifiedFlatCoordinates = simplifiedGeometry.getFlatCoordinates();
    if (simplifiedFlatCoordinates.length < this.flatCoordinates.length) {
      return simplifiedGeometry;
    }
    // Simplification did not actually remove any coordinates.  We now know
    // that any calls to getSimplifiedGeometry with a squaredTolerance less
    // than or equal to the current squaredTolerance will also not have any
    // effect.  This allows us to short circuit simplification (saving CPU
    // cycles) and prevents the cache of simplified geometries from filling
    // up with useless identical copies of this geometry (saving memory).
    this.simplifiedGeometryMaxMinSquaredTolerance = squaredTolerance;
    return this;
  }

  /**
   * @param {number} squaredTolerance Squared tolerance.
   * @return {SimpleGeometry} Simplified geometry.
   * @protected
   */
  getSimplifiedGeometryInternal(squaredTolerance) {
    return this;
  }

  /**
   * @return {number} Stride.
   */
  getStride() {
    return this.stride;
  }

  /**
   * @param {import("./Geometry.js").GeometryLayout} layout Layout.
   * @param {Array<number>} flatCoordinates Flat coordinates.
   */
  setFlatCoordinates(layout, flatCoordinates) {
    this.stride = getStrideForLayout(layout);
    this.layout = layout;
    this.flatCoordinates = flatCoordinates;
  }

  /**
   * @abstract
   * @param {!Array<*>} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   */
  setCoordinates(coordinates, layout) {
    (0,_util_js__WEBPACK_IMPORTED_MODULE_2__.abstract)();
  }

  /**
   * @param {import("./Geometry.js").GeometryLayout|undefined} layout Layout.
   * @param {Array<*>} coordinates Coordinates.
   * @param {number} nesting Nesting.
   * @protected
   */
  setLayout(layout, coordinates, nesting) {
    let stride;
    if (layout) {
      stride = getStrideForLayout(layout);
    } else {
      for (let i = 0; i < nesting; ++i) {
        if (coordinates.length === 0) {
          this.layout = 'XY';
          this.stride = 2;
          return;
        }
        coordinates = /** @type {Array<unknown>} */ (coordinates[0]);
      }
      stride = coordinates.length;
      layout = getLayoutForStride(stride);
    }
    this.layout = layout;
    this.stride = stride;
  }

  /**
   * Apply a transform function to the coordinates of the geometry.
   * The geometry is modified in place.
   * If you do not want the geometry modified in place, first `clone()` it and
   * then use this function on the clone.
   * @param {import("../proj.js").TransformFunction} transformFn Transform function.
   * Called with a flat array of geometry coordinates.
   * @api
   */
  applyTransform(transformFn) {
    if (this.flatCoordinates) {
      transformFn(this.flatCoordinates, this.flatCoordinates, this.stride);
      this.changed();
    }
  }

  /**
   * Rotate the geometry around a given coordinate. This modifies the geometry
   * coordinates in place.
   * @param {number} angle Rotation angle in counter-clockwise radians.
   * @param {import("../coordinate.js").Coordinate} anchor The rotation center.
   * @api
   */
  rotate(angle, anchor) {
    const flatCoordinates = this.getFlatCoordinates();
    if (flatCoordinates) {
      const stride = this.getStride();
      (0,_flat_transform_js__WEBPACK_IMPORTED_MODULE_3__.rotate)(
        flatCoordinates,
        0,
        flatCoordinates.length,
        stride,
        angle,
        anchor,
        flatCoordinates,
      );
      this.changed();
    }
  }

  /**
   * Scale the geometry (with an optional origin).  This modifies the geometry
   * coordinates in place.
   * @param {number} sx The scaling factor in the x-direction.
   * @param {number} [sy] The scaling factor in the y-direction (defaults to sx).
   * @param {import("../coordinate.js").Coordinate} [anchor] The scale origin (defaults to the center
   *     of the geometry extent).
   * @api
   */
  scale(sx, sy, anchor) {
    if (sy === undefined) {
      sy = sx;
    }
    if (!anchor) {
      anchor = (0,_extent_js__WEBPACK_IMPORTED_MODULE_1__.getCenter)(this.getExtent());
    }
    const flatCoordinates = this.getFlatCoordinates();
    if (flatCoordinates) {
      const stride = this.getStride();
      (0,_flat_transform_js__WEBPACK_IMPORTED_MODULE_3__.scale)(
        flatCoordinates,
        0,
        flatCoordinates.length,
        stride,
        sx,
        sy,
        anchor,
        flatCoordinates,
      );
      this.changed();
    }
  }

  /**
   * Translate the geometry.  This modifies the geometry coordinates in place.  If
   * instead you want a new geometry, first `clone()` this geometry.
   * @param {number} deltaX Delta X.
   * @param {number} deltaY Delta Y.
   * @api
   */
  translate(deltaX, deltaY) {
    const flatCoordinates = this.getFlatCoordinates();
    if (flatCoordinates) {
      const stride = this.getStride();
      (0,_flat_transform_js__WEBPACK_IMPORTED_MODULE_3__.translate)(
        flatCoordinates,
        0,
        flatCoordinates.length,
        stride,
        deltaX,
        deltaY,
        flatCoordinates,
      );
      this.changed();
    }
  }
}

/**
 * @param {number} stride Stride.
 * @return {import("./Geometry.js").GeometryLayout} layout Layout.
 */
function getLayoutForStride(stride) {
  let layout;
  if (stride == 2) {
    layout = 'XY';
  } else if (stride == 3) {
    layout = 'XYZ';
  } else if (stride == 4) {
    layout = 'XYZM';
  }
  return /** @type {import("./Geometry.js").GeometryLayout} */ (layout);
}

/**
 * @param {import("./Geometry.js").GeometryLayout} layout Layout.
 * @return {number} Stride.
 */
function getStrideForLayout(layout) {
  let stride;
  if (layout == 'XY') {
    stride = 2;
  } else if (layout == 'XYZ' || layout == 'XYM') {
    stride = 3;
  } else if (layout == 'XYZM') {
    stride = 4;
  }
  return /** @type {number} */ (stride);
}

/**
 * @param {SimpleGeometry} simpleGeometry Simple geometry.
 * @param {import("../transform.js").Transform} transform Transform.
 * @param {Array<number>} [dest] Destination.
 * @return {Array<number>} Transformed flat coordinates.
 */
function transformGeom2D(simpleGeometry, transform, dest) {
  const flatCoordinates = simpleGeometry.getFlatCoordinates();
  if (!flatCoordinates) {
    return null;
  }
  const stride = simpleGeometry.getStride();
  return (0,_flat_transform_js__WEBPACK_IMPORTED_MODULE_3__.transform2D)(
    flatCoordinates,
    0,
    flatCoordinates.length,
    stride,
    transform,
    dest,
  );
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SimpleGeometry);


/***/ }),

/***/ "./node_modules/ol/geom/flat/closest.js":
/*!**********************************************!*\
  !*** ./node_modules/ol/geom/flat/closest.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrayMaxSquaredDelta: () => (/* binding */ arrayMaxSquaredDelta),
/* harmony export */   assignClosestArrayPoint: () => (/* binding */ assignClosestArrayPoint),
/* harmony export */   assignClosestMultiArrayPoint: () => (/* binding */ assignClosestMultiArrayPoint),
/* harmony export */   assignClosestPoint: () => (/* binding */ assignClosestPoint),
/* harmony export */   maxSquaredDelta: () => (/* binding */ maxSquaredDelta),
/* harmony export */   multiArrayMaxSquaredDelta: () => (/* binding */ multiArrayMaxSquaredDelta)
/* harmony export */ });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../math.js */ "./node_modules/ol/math.js");
/**
 * @module ol/geom/flat/closest
 */


/**
 * Returns the point on the 2D line segment flatCoordinates[offset1] to
 * flatCoordinates[offset2] that is closest to the point (x, y).  Extra
 * dimensions are linearly interpolated.
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset1 Offset 1.
 * @param {number} offset2 Offset 2.
 * @param {number} stride Stride.
 * @param {number} x X.
 * @param {number} y Y.
 * @param {Array<number>} closestPoint Closest point.
 */
function assignClosest(
  flatCoordinates,
  offset1,
  offset2,
  stride,
  x,
  y,
  closestPoint,
) {
  const x1 = flatCoordinates[offset1];
  const y1 = flatCoordinates[offset1 + 1];
  const dx = flatCoordinates[offset2] - x1;
  const dy = flatCoordinates[offset2 + 1] - y1;
  let offset;
  if (dx === 0 && dy === 0) {
    offset = offset1;
  } else {
    const t = ((x - x1) * dx + (y - y1) * dy) / (dx * dx + dy * dy);
    if (t > 1) {
      offset = offset2;
    } else if (t > 0) {
      for (let i = 0; i < stride; ++i) {
        closestPoint[i] = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.lerp)(
          flatCoordinates[offset1 + i],
          flatCoordinates[offset2 + i],
          t,
        );
      }
      closestPoint.length = stride;
      return;
    } else {
      offset = offset1;
    }
  }
  for (let i = 0; i < stride; ++i) {
    closestPoint[i] = flatCoordinates[offset + i];
  }
  closestPoint.length = stride;
}

/**
 * Return the squared of the largest distance between any pair of consecutive
 * coordinates.
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} max Max squared delta.
 * @return {number} Max squared delta.
 */
function maxSquaredDelta(flatCoordinates, offset, end, stride, max) {
  let x1 = flatCoordinates[offset];
  let y1 = flatCoordinates[offset + 1];
  for (offset += stride; offset < end; offset += stride) {
    const x2 = flatCoordinates[offset];
    const y2 = flatCoordinates[offset + 1];
    const squaredDelta = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.squaredDistance)(x1, y1, x2, y2);
    if (squaredDelta > max) {
      max = squaredDelta;
    }
    x1 = x2;
    y1 = y2;
  }
  return max;
}

/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<number>} ends Ends.
 * @param {number} stride Stride.
 * @param {number} max Max squared delta.
 * @return {number} Max squared delta.
 */
function arrayMaxSquaredDelta(
  flatCoordinates,
  offset,
  ends,
  stride,
  max,
) {
  for (let i = 0, ii = ends.length; i < ii; ++i) {
    const end = ends[i];
    max = maxSquaredDelta(flatCoordinates, offset, end, stride, max);
    offset = end;
  }
  return max;
}

/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<number>>} endss Endss.
 * @param {number} stride Stride.
 * @param {number} max Max squared delta.
 * @return {number} Max squared delta.
 */
function multiArrayMaxSquaredDelta(
  flatCoordinates,
  offset,
  endss,
  stride,
  max,
) {
  for (let i = 0, ii = endss.length; i < ii; ++i) {
    const ends = endss[i];
    max = arrayMaxSquaredDelta(flatCoordinates, offset, ends, stride, max);
    offset = ends[ends.length - 1];
  }
  return max;
}

/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} maxDelta Max delta.
 * @param {boolean} isRing Is ring.
 * @param {number} x X.
 * @param {number} y Y.
 * @param {Array<number>} closestPoint Closest point.
 * @param {number} minSquaredDistance Minimum squared distance.
 * @param {Array<number>} [tmpPoint] Temporary point object.
 * @return {number} Minimum squared distance.
 */
function assignClosestPoint(
  flatCoordinates,
  offset,
  end,
  stride,
  maxDelta,
  isRing,
  x,
  y,
  closestPoint,
  minSquaredDistance,
  tmpPoint,
) {
  if (offset == end) {
    return minSquaredDistance;
  }
  let i, squaredDistance;
  if (maxDelta === 0) {
    // All points are identical, so just test the first point.
    squaredDistance = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.squaredDistance)(
      x,
      y,
      flatCoordinates[offset],
      flatCoordinates[offset + 1],
    );
    if (squaredDistance < minSquaredDistance) {
      for (i = 0; i < stride; ++i) {
        closestPoint[i] = flatCoordinates[offset + i];
      }
      closestPoint.length = stride;
      return squaredDistance;
    }
    return minSquaredDistance;
  }
  tmpPoint = tmpPoint ? tmpPoint : [NaN, NaN];
  let index = offset + stride;
  while (index < end) {
    assignClosest(
      flatCoordinates,
      index - stride,
      index,
      stride,
      x,
      y,
      tmpPoint,
    );
    squaredDistance = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.squaredDistance)(x, y, tmpPoint[0], tmpPoint[1]);
    if (squaredDistance < minSquaredDistance) {
      minSquaredDistance = squaredDistance;
      for (i = 0; i < stride; ++i) {
        closestPoint[i] = tmpPoint[i];
      }
      closestPoint.length = stride;
      index += stride;
    } else {
      // Skip ahead multiple points, because we know that all the skipped
      // points cannot be any closer than the closest point we have found so
      // far.  We know this because we know how close the current point is, how
      // close the closest point we have found so far is, and the maximum
      // distance between consecutive points.  For example, if we're currently
      // at distance 10, the best we've found so far is 3, and that the maximum
      // distance between consecutive points is 2, then we'll need to skip at
      // least (10 - 3) / 2 == 3 (rounded down) points to have any chance of
      // finding a closer point.  We use Math.max(..., 1) to ensure that we
      // always advance at least one point, to avoid an infinite loop.
      index +=
        stride *
        Math.max(
          ((Math.sqrt(squaredDistance) - Math.sqrt(minSquaredDistance)) /
            maxDelta) |
            0,
          1,
        );
    }
  }
  if (isRing) {
    // Check the closing segment.
    assignClosest(
      flatCoordinates,
      end - stride,
      offset,
      stride,
      x,
      y,
      tmpPoint,
    );
    squaredDistance = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.squaredDistance)(x, y, tmpPoint[0], tmpPoint[1]);
    if (squaredDistance < minSquaredDistance) {
      minSquaredDistance = squaredDistance;
      for (i = 0; i < stride; ++i) {
        closestPoint[i] = tmpPoint[i];
      }
      closestPoint.length = stride;
    }
  }
  return minSquaredDistance;
}

/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<number>} ends Ends.
 * @param {number} stride Stride.
 * @param {number} maxDelta Max delta.
 * @param {boolean} isRing Is ring.
 * @param {number} x X.
 * @param {number} y Y.
 * @param {Array<number>} closestPoint Closest point.
 * @param {number} minSquaredDistance Minimum squared distance.
 * @param {Array<number>} [tmpPoint] Temporary point object.
 * @return {number} Minimum squared distance.
 */
function assignClosestArrayPoint(
  flatCoordinates,
  offset,
  ends,
  stride,
  maxDelta,
  isRing,
  x,
  y,
  closestPoint,
  minSquaredDistance,
  tmpPoint,
) {
  tmpPoint = tmpPoint ? tmpPoint : [NaN, NaN];
  for (let i = 0, ii = ends.length; i < ii; ++i) {
    const end = ends[i];
    minSquaredDistance = assignClosestPoint(
      flatCoordinates,
      offset,
      end,
      stride,
      maxDelta,
      isRing,
      x,
      y,
      closestPoint,
      minSquaredDistance,
      tmpPoint,
    );
    offset = end;
  }
  return minSquaredDistance;
}

/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<number>>} endss Endss.
 * @param {number} stride Stride.
 * @param {number} maxDelta Max delta.
 * @param {boolean} isRing Is ring.
 * @param {number} x X.
 * @param {number} y Y.
 * @param {Array<number>} closestPoint Closest point.
 * @param {number} minSquaredDistance Minimum squared distance.
 * @param {Array<number>} [tmpPoint] Temporary point object.
 * @return {number} Minimum squared distance.
 */
function assignClosestMultiArrayPoint(
  flatCoordinates,
  offset,
  endss,
  stride,
  maxDelta,
  isRing,
  x,
  y,
  closestPoint,
  minSquaredDistance,
  tmpPoint,
) {
  tmpPoint = tmpPoint ? tmpPoint : [NaN, NaN];
  for (let i = 0, ii = endss.length; i < ii; ++i) {
    const ends = endss[i];
    minSquaredDistance = assignClosestArrayPoint(
      flatCoordinates,
      offset,
      ends,
      stride,
      maxDelta,
      isRing,
      x,
      y,
      closestPoint,
      minSquaredDistance,
      tmpPoint,
    );
    offset = ends[ends.length - 1];
  }
  return minSquaredDistance;
}


/***/ }),

/***/ "./node_modules/ol/geom/flat/contains.js":
/*!***********************************************!*\
  !*** ./node_modules/ol/geom/flat/contains.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   linearRingContainsExtent: () => (/* binding */ linearRingContainsExtent),
/* harmony export */   linearRingContainsXY: () => (/* binding */ linearRingContainsXY),
/* harmony export */   linearRingsContainsXY: () => (/* binding */ linearRingsContainsXY),
/* harmony export */   linearRingssContainsXY: () => (/* binding */ linearRingssContainsXY)
/* harmony export */ });
/* harmony import */ var _extent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../extent.js */ "./node_modules/ol/extent.js");
/**
 * @module ol/geom/flat/contains
 */


/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {import("../../extent.js").Extent} extent Extent.
 * @return {boolean} Contains extent.
 */
function linearRingContainsExtent(
  flatCoordinates,
  offset,
  end,
  stride,
  extent,
) {
  const outside = (0,_extent_js__WEBPACK_IMPORTED_MODULE_0__.forEachCorner)(
    extent,
    /**
     * @param {import("../../coordinate.js").Coordinate} coordinate Coordinate.
     * @return {boolean} Contains (x, y).
     */
    function (coordinate) {
      return !linearRingContainsXY(
        flatCoordinates,
        offset,
        end,
        stride,
        coordinate[0],
        coordinate[1],
      );
    },
  );
  return !outside;
}

/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} x X.
 * @param {number} y Y.
 * @return {boolean} Contains (x, y).
 */
function linearRingContainsXY(
  flatCoordinates,
  offset,
  end,
  stride,
  x,
  y,
) {
  // https://geomalgorithms.com/a03-_inclusion.html
  // Copyright 2000 softSurfer, 2012 Dan Sunday
  // This code may be freely used and modified for any purpose
  // providing that this copyright notice is included with it.
  // SoftSurfer makes no warranty for this code, and cannot be held
  // liable for any real or imagined damage resulting from its use.
  // Users of this code must verify correctness for their application.
  let wn = 0;
  let x1 = flatCoordinates[end - stride];
  let y1 = flatCoordinates[end - stride + 1];
  for (; offset < end; offset += stride) {
    const x2 = flatCoordinates[offset];
    const y2 = flatCoordinates[offset + 1];
    if (y1 <= y) {
      if (y2 > y && (x2 - x1) * (y - y1) - (x - x1) * (y2 - y1) > 0) {
        wn++;
      }
    } else if (y2 <= y && (x2 - x1) * (y - y1) - (x - x1) * (y2 - y1) < 0) {
      wn--;
    }
    x1 = x2;
    y1 = y2;
  }
  return wn !== 0;
}

/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<number>} ends Ends.
 * @param {number} stride Stride.
 * @param {number} x X.
 * @param {number} y Y.
 * @return {boolean} Contains (x, y).
 */
function linearRingsContainsXY(
  flatCoordinates,
  offset,
  ends,
  stride,
  x,
  y,
) {
  if (ends.length === 0) {
    return false;
  }
  if (!linearRingContainsXY(flatCoordinates, offset, ends[0], stride, x, y)) {
    return false;
  }
  for (let i = 1, ii = ends.length; i < ii; ++i) {
    if (
      linearRingContainsXY(flatCoordinates, ends[i - 1], ends[i], stride, x, y)
    ) {
      return false;
    }
  }
  return true;
}

/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<number>>} endss Endss.
 * @param {number} stride Stride.
 * @param {number} x X.
 * @param {number} y Y.
 * @return {boolean} Contains (x, y).
 */
function linearRingssContainsXY(
  flatCoordinates,
  offset,
  endss,
  stride,
  x,
  y,
) {
  if (endss.length === 0) {
    return false;
  }
  for (let i = 0, ii = endss.length; i < ii; ++i) {
    const ends = endss[i];
    if (linearRingsContainsXY(flatCoordinates, offset, ends, stride, x, y)) {
      return true;
    }
    offset = ends[ends.length - 1];
  }
  return false;
}


/***/ }),

/***/ "./node_modules/ol/geom/flat/deflate.js":
/*!**********************************************!*\
  !*** ./node_modules/ol/geom/flat/deflate.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deflateCoordinate: () => (/* binding */ deflateCoordinate),
/* harmony export */   deflateCoordinates: () => (/* binding */ deflateCoordinates),
/* harmony export */   deflateCoordinatesArray: () => (/* binding */ deflateCoordinatesArray),
/* harmony export */   deflateMultiCoordinatesArray: () => (/* binding */ deflateMultiCoordinatesArray)
/* harmony export */ });
/**
 * @module ol/geom/flat/deflate
 */

/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {import("../../coordinate.js").Coordinate} coordinate Coordinate.
 * @param {number} stride Stride.
 * @return {number} offset Offset.
 */
function deflateCoordinate(flatCoordinates, offset, coordinate, stride) {
  for (let i = 0, ii = coordinate.length; i < ii; ++i) {
    flatCoordinates[offset++] = coordinate[i];
  }
  return offset;
}

/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<import("../../coordinate.js").Coordinate>} coordinates Coordinates.
 * @param {number} stride Stride.
 * @return {number} offset Offset.
 */
function deflateCoordinates(
  flatCoordinates,
  offset,
  coordinates,
  stride,
) {
  for (let i = 0, ii = coordinates.length; i < ii; ++i) {
    const coordinate = coordinates[i];
    for (let j = 0; j < stride; ++j) {
      flatCoordinates[offset++] = coordinate[j];
    }
  }
  return offset;
}

/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<import("../../coordinate.js").Coordinate>>} coordinatess Coordinatess.
 * @param {number} stride Stride.
 * @param {Array<number>} [ends] Ends.
 * @return {Array<number>} Ends.
 */
function deflateCoordinatesArray(
  flatCoordinates,
  offset,
  coordinatess,
  stride,
  ends,
) {
  ends = ends ? ends : [];
  let i = 0;
  for (let j = 0, jj = coordinatess.length; j < jj; ++j) {
    const end = deflateCoordinates(
      flatCoordinates,
      offset,
      coordinatess[j],
      stride,
    );
    ends[i++] = end;
    offset = end;
  }
  ends.length = i;
  return ends;
}

/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<Array<import("../../coordinate.js").Coordinate>>>} coordinatesss Coordinatesss.
 * @param {number} stride Stride.
 * @param {Array<Array<number>>} [endss] Endss.
 * @return {Array<Array<number>>} Endss.
 */
function deflateMultiCoordinatesArray(
  flatCoordinates,
  offset,
  coordinatesss,
  stride,
  endss,
) {
  endss = endss ? endss : [];
  let i = 0;
  for (let j = 0, jj = coordinatesss.length; j < jj; ++j) {
    const ends = deflateCoordinatesArray(
      flatCoordinates,
      offset,
      coordinatesss[j],
      stride,
      endss[i],
    );
    if (ends.length === 0) {
      ends[0] = offset;
    }
    endss[i++] = ends;
    offset = ends[ends.length - 1];
  }
  endss.length = i;
  return endss;
}


/***/ }),

/***/ "./node_modules/ol/geom/flat/inflate.js":
/*!**********************************************!*\
  !*** ./node_modules/ol/geom/flat/inflate.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   inflateCoordinates: () => (/* binding */ inflateCoordinates),
/* harmony export */   inflateCoordinatesArray: () => (/* binding */ inflateCoordinatesArray),
/* harmony export */   inflateMultiCoordinatesArray: () => (/* binding */ inflateMultiCoordinatesArray)
/* harmony export */ });
/**
 * @module ol/geom/flat/inflate
 */

/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {Array<import("../../coordinate.js").Coordinate>} [coordinates] Coordinates.
 * @return {Array<import("../../coordinate.js").Coordinate>} Coordinates.
 */
function inflateCoordinates(
  flatCoordinates,
  offset,
  end,
  stride,
  coordinates,
) {
  coordinates = coordinates !== undefined ? coordinates : [];
  let i = 0;
  for (let j = offset; j < end; j += stride) {
    coordinates[i++] = flatCoordinates.slice(j, j + stride);
  }
  coordinates.length = i;
  return coordinates;
}

/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<number>} ends Ends.
 * @param {number} stride Stride.
 * @param {Array<Array<import("../../coordinate.js").Coordinate>>} [coordinatess] Coordinatess.
 * @return {Array<Array<import("../../coordinate.js").Coordinate>>} Coordinatess.
 */
function inflateCoordinatesArray(
  flatCoordinates,
  offset,
  ends,
  stride,
  coordinatess,
) {
  coordinatess = coordinatess !== undefined ? coordinatess : [];
  let i = 0;
  for (let j = 0, jj = ends.length; j < jj; ++j) {
    const end = ends[j];
    coordinatess[i++] = inflateCoordinates(
      flatCoordinates,
      offset,
      end,
      stride,
      coordinatess[i],
    );
    offset = end;
  }
  coordinatess.length = i;
  return coordinatess;
}

/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<number>>} endss Endss.
 * @param {number} stride Stride.
 * @param {Array<Array<Array<import("../../coordinate.js").Coordinate>>>} [coordinatesss]
 *     Coordinatesss.
 * @return {Array<Array<Array<import("../../coordinate.js").Coordinate>>>} Coordinatesss.
 */
function inflateMultiCoordinatesArray(
  flatCoordinates,
  offset,
  endss,
  stride,
  coordinatesss,
) {
  coordinatesss = coordinatesss !== undefined ? coordinatesss : [];
  let i = 0;
  for (let j = 0, jj = endss.length; j < jj; ++j) {
    const ends = endss[j];
    coordinatesss[i++] =
      ends.length === 1 && ends[0] === offset
        ? []
        : inflateCoordinatesArray(
            flatCoordinates,
            offset,
            ends,
            stride,
            coordinatesss[i],
          );
    offset = ends[ends.length - 1];
  }
  coordinatesss.length = i;
  return coordinatesss;
}


/***/ }),

/***/ "./node_modules/ol/geom/flat/interpolate.js":
/*!**************************************************!*\
  !*** ./node_modules/ol/geom/flat/interpolate.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   interpolatePoint: () => (/* binding */ interpolatePoint),
/* harmony export */   lineStringCoordinateAtM: () => (/* binding */ lineStringCoordinateAtM),
/* harmony export */   lineStringsCoordinateAtM: () => (/* binding */ lineStringsCoordinateAtM)
/* harmony export */ });
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../array.js */ "./node_modules/ol/array.js");
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../math.js */ "./node_modules/ol/math.js");
/**
 * @module ol/geom/flat/interpolate
 */



/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} fraction Fraction.
 * @param {Array<number>} [dest] Destination.
 * @param {number} [dimension] Destination dimension (default is `2`)
 * @return {Array<number>} Destination.
 */
function interpolatePoint(
  flatCoordinates,
  offset,
  end,
  stride,
  fraction,
  dest,
  dimension,
) {
  let o, t;
  const n = (end - offset) / stride;
  if (n === 1) {
    o = offset;
  } else if (n === 2) {
    o = offset;
    t = fraction;
  } else if (n !== 0) {
    let x1 = flatCoordinates[offset];
    let y1 = flatCoordinates[offset + 1];
    let length = 0;
    const cumulativeLengths = [0];
    for (let i = offset + stride; i < end; i += stride) {
      const x2 = flatCoordinates[i];
      const y2 = flatCoordinates[i + 1];
      length += Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
      cumulativeLengths.push(length);
      x1 = x2;
      y1 = y2;
    }
    const target = fraction * length;
    const index = (0,_array_js__WEBPACK_IMPORTED_MODULE_0__.binarySearch)(cumulativeLengths, target);
    if (index < 0) {
      t =
        (target - cumulativeLengths[-index - 2]) /
        (cumulativeLengths[-index - 1] - cumulativeLengths[-index - 2]);
      o = offset + (-index - 2) * stride;
    } else {
      o = offset + index * stride;
    }
  }
  dimension = dimension > 1 ? dimension : 2;
  dest = dest ? dest : new Array(dimension);
  for (let i = 0; i < dimension; ++i) {
    dest[i] =
      o === undefined
        ? NaN
        : t === undefined
          ? flatCoordinates[o + i]
          : (0,_math_js__WEBPACK_IMPORTED_MODULE_1__.lerp)(flatCoordinates[o + i], flatCoordinates[o + stride + i], t);
  }
  return dest;
}

/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} m M.
 * @param {boolean} extrapolate Extrapolate.
 * @return {import("../../coordinate.js").Coordinate|null} Coordinate.
 */
function lineStringCoordinateAtM(
  flatCoordinates,
  offset,
  end,
  stride,
  m,
  extrapolate,
) {
  if (end == offset) {
    return null;
  }
  let coordinate;
  if (m < flatCoordinates[offset + stride - 1]) {
    if (extrapolate) {
      coordinate = flatCoordinates.slice(offset, offset + stride);
      coordinate[stride - 1] = m;
      return coordinate;
    }
    return null;
  }
  if (flatCoordinates[end - 1] < m) {
    if (extrapolate) {
      coordinate = flatCoordinates.slice(end - stride, end);
      coordinate[stride - 1] = m;
      return coordinate;
    }
    return null;
  }
  // FIXME use O(1) search
  if (m == flatCoordinates[offset + stride - 1]) {
    return flatCoordinates.slice(offset, offset + stride);
  }
  let lo = offset / stride;
  let hi = end / stride;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (m < flatCoordinates[(mid + 1) * stride - 1]) {
      hi = mid;
    } else {
      lo = mid + 1;
    }
  }
  const m0 = flatCoordinates[lo * stride - 1];
  if (m == m0) {
    return flatCoordinates.slice((lo - 1) * stride, (lo - 1) * stride + stride);
  }
  const m1 = flatCoordinates[(lo + 1) * stride - 1];
  const t = (m - m0) / (m1 - m0);
  coordinate = [];
  for (let i = 0; i < stride - 1; ++i) {
    coordinate.push(
      (0,_math_js__WEBPACK_IMPORTED_MODULE_1__.lerp)(
        flatCoordinates[(lo - 1) * stride + i],
        flatCoordinates[lo * stride + i],
        t,
      ),
    );
  }
  coordinate.push(m);
  return coordinate;
}

/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<number>} ends Ends.
 * @param {number} stride Stride.
 * @param {number} m M.
 * @param {boolean} extrapolate Extrapolate.
 * @param {boolean} interpolate Interpolate.
 * @return {import("../../coordinate.js").Coordinate|null} Coordinate.
 */
function lineStringsCoordinateAtM(
  flatCoordinates,
  offset,
  ends,
  stride,
  m,
  extrapolate,
  interpolate,
) {
  if (interpolate) {
    return lineStringCoordinateAtM(
      flatCoordinates,
      offset,
      ends[ends.length - 1],
      stride,
      m,
      extrapolate,
    );
  }
  let coordinate;
  if (m < flatCoordinates[stride - 1]) {
    if (extrapolate) {
      coordinate = flatCoordinates.slice(0, stride);
      coordinate[stride - 1] = m;
      return coordinate;
    }
    return null;
  }
  if (flatCoordinates[flatCoordinates.length - 1] < m) {
    if (extrapolate) {
      coordinate = flatCoordinates.slice(flatCoordinates.length - stride);
      coordinate[stride - 1] = m;
      return coordinate;
    }
    return null;
  }
  for (let i = 0, ii = ends.length; i < ii; ++i) {
    const end = ends[i];
    if (offset == end) {
      continue;
    }
    if (m < flatCoordinates[offset + stride - 1]) {
      return null;
    }
    if (m <= flatCoordinates[end - 1]) {
      return lineStringCoordinateAtM(
        flatCoordinates,
        offset,
        end,
        stride,
        m,
        false,
      );
    }
    offset = end;
  }
  return null;
}


/***/ }),

/***/ "./node_modules/ol/geom/flat/intersectsextent.js":
/*!*******************************************************!*\
  !*** ./node_modules/ol/geom/flat/intersectsextent.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   intersectsLineString: () => (/* binding */ intersectsLineString),
/* harmony export */   intersectsLineStringArray: () => (/* binding */ intersectsLineStringArray),
/* harmony export */   intersectsLinearRing: () => (/* binding */ intersectsLinearRing),
/* harmony export */   intersectsLinearRingArray: () => (/* binding */ intersectsLinearRingArray),
/* harmony export */   intersectsLinearRingMultiArray: () => (/* binding */ intersectsLinearRingMultiArray)
/* harmony export */ });
/* harmony import */ var _extent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../extent.js */ "./node_modules/ol/extent.js");
/* harmony import */ var _segments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./segments.js */ "./node_modules/ol/geom/flat/segments.js");
/* harmony import */ var _contains_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contains.js */ "./node_modules/ol/geom/flat/contains.js");
/**
 * @module ol/geom/flat/intersectsextent
 */




/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {import("../../extent.js").Extent} extent Extent.
 * @return {boolean} True if the geometry and the extent intersect.
 */
function intersectsLineString(
  flatCoordinates,
  offset,
  end,
  stride,
  extent,
) {
  const coordinatesExtent = (0,_extent_js__WEBPACK_IMPORTED_MODULE_0__.extendFlatCoordinates)(
    (0,_extent_js__WEBPACK_IMPORTED_MODULE_0__.createEmpty)(),
    flatCoordinates,
    offset,
    end,
    stride,
  );
  if (!(0,_extent_js__WEBPACK_IMPORTED_MODULE_0__.intersects)(extent, coordinatesExtent)) {
    return false;
  }
  if ((0,_extent_js__WEBPACK_IMPORTED_MODULE_0__.containsExtent)(extent, coordinatesExtent)) {
    return true;
  }
  if (coordinatesExtent[0] >= extent[0] && coordinatesExtent[2] <= extent[2]) {
    return true;
  }
  if (coordinatesExtent[1] >= extent[1] && coordinatesExtent[3] <= extent[3]) {
    return true;
  }
  return (0,_segments_js__WEBPACK_IMPORTED_MODULE_1__.forEach)(
    flatCoordinates,
    offset,
    end,
    stride,
    /**
     * @param {import("../../coordinate.js").Coordinate} point1 Start point.
     * @param {import("../../coordinate.js").Coordinate} point2 End point.
     * @return {boolean} `true` if the segment and the extent intersect,
     *     `false` otherwise.
     */
    function (point1, point2) {
      return (0,_extent_js__WEBPACK_IMPORTED_MODULE_0__.intersectsSegment)(extent, point1, point2);
    },
  );
}

/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<number>} ends Ends.
 * @param {number} stride Stride.
 * @param {import("../../extent.js").Extent} extent Extent.
 * @return {boolean} True if the geometry and the extent intersect.
 */
function intersectsLineStringArray(
  flatCoordinates,
  offset,
  ends,
  stride,
  extent,
) {
  for (let i = 0, ii = ends.length; i < ii; ++i) {
    if (
      intersectsLineString(flatCoordinates, offset, ends[i], stride, extent)
    ) {
      return true;
    }
    offset = ends[i];
  }
  return false;
}

/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {import("../../extent.js").Extent} extent Extent.
 * @return {boolean} True if the geometry and the extent intersect.
 */
function intersectsLinearRing(
  flatCoordinates,
  offset,
  end,
  stride,
  extent,
) {
  if (intersectsLineString(flatCoordinates, offset, end, stride, extent)) {
    return true;
  }
  if (
    (0,_contains_js__WEBPACK_IMPORTED_MODULE_2__.linearRingContainsXY)(
      flatCoordinates,
      offset,
      end,
      stride,
      extent[0],
      extent[1],
    )
  ) {
    return true;
  }
  if (
    (0,_contains_js__WEBPACK_IMPORTED_MODULE_2__.linearRingContainsXY)(
      flatCoordinates,
      offset,
      end,
      stride,
      extent[0],
      extent[3],
    )
  ) {
    return true;
  }
  if (
    (0,_contains_js__WEBPACK_IMPORTED_MODULE_2__.linearRingContainsXY)(
      flatCoordinates,
      offset,
      end,
      stride,
      extent[2],
      extent[1],
    )
  ) {
    return true;
  }
  if (
    (0,_contains_js__WEBPACK_IMPORTED_MODULE_2__.linearRingContainsXY)(
      flatCoordinates,
      offset,
      end,
      stride,
      extent[2],
      extent[3],
    )
  ) {
    return true;
  }
  return false;
}

/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<number>} ends Ends.
 * @param {number} stride Stride.
 * @param {import("../../extent.js").Extent} extent Extent.
 * @return {boolean} True if the geometry and the extent intersect.
 */
function intersectsLinearRingArray(
  flatCoordinates,
  offset,
  ends,
  stride,
  extent,
) {
  if (!intersectsLinearRing(flatCoordinates, offset, ends[0], stride, extent)) {
    return false;
  }
  if (ends.length === 1) {
    return true;
  }
  for (let i = 1, ii = ends.length; i < ii; ++i) {
    if (
      (0,_contains_js__WEBPACK_IMPORTED_MODULE_2__.linearRingContainsExtent)(
        flatCoordinates,
        ends[i - 1],
        ends[i],
        stride,
        extent,
      )
    ) {
      if (
        !intersectsLineString(
          flatCoordinates,
          ends[i - 1],
          ends[i],
          stride,
          extent,
        )
      ) {
        return false;
      }
    }
  }
  return true;
}

/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<number>>} endss Endss.
 * @param {number} stride Stride.
 * @param {import("../../extent.js").Extent} extent Extent.
 * @return {boolean} True if the geometry and the extent intersect.
 */
function intersectsLinearRingMultiArray(
  flatCoordinates,
  offset,
  endss,
  stride,
  extent,
) {
  for (let i = 0, ii = endss.length; i < ii; ++i) {
    const ends = endss[i];
    if (
      intersectsLinearRingArray(flatCoordinates, offset, ends, stride, extent)
    ) {
      return true;
    }
    offset = ends[ends.length - 1];
  }
  return false;
}


/***/ }),

/***/ "./node_modules/ol/geom/flat/length.js":
/*!*********************************************!*\
  !*** ./node_modules/ol/geom/flat/length.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lineStringLength: () => (/* binding */ lineStringLength),
/* harmony export */   linearRingLength: () => (/* binding */ linearRingLength)
/* harmony export */ });
/**
 * @module ol/geom/flat/length
 */

/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @return {number} Length.
 */
function lineStringLength(flatCoordinates, offset, end, stride) {
  let x1 = flatCoordinates[offset];
  let y1 = flatCoordinates[offset + 1];
  let length = 0;
  for (let i = offset + stride; i < end; i += stride) {
    const x2 = flatCoordinates[i];
    const y2 = flatCoordinates[i + 1];
    length += Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
    x1 = x2;
    y1 = y2;
  }
  return length;
}

/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @return {number} Perimeter.
 */
function linearRingLength(flatCoordinates, offset, end, stride) {
  let perimeter = lineStringLength(flatCoordinates, offset, end, stride);
  const dx = flatCoordinates[end - stride] - flatCoordinates[offset];
  const dy = flatCoordinates[end - stride + 1] - flatCoordinates[offset + 1];
  perimeter += Math.sqrt(dx * dx + dy * dy);
  return perimeter;
}


/***/ }),

/***/ "./node_modules/ol/geom/flat/segments.js":
/*!***********************************************!*\
  !*** ./node_modules/ol/geom/flat/segments.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   forEach: () => (/* binding */ forEach)
/* harmony export */ });
/**
 * @module ol/geom/flat/segments
 */

/**
 * This function calls `callback` for each segment of the flat coordinates
 * array. If the callback returns a truthy value the function returns that
 * value immediately. Otherwise the function returns `false`.
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {function(import("../../coordinate.js").Coordinate, import("../../coordinate.js").Coordinate): T} callback Function
 *     called for each segment.
 * @return {T|boolean} Value.
 * @template T
 */
function forEach(flatCoordinates, offset, end, stride, callback) {
  let ret;
  offset += stride;
  for (; offset < end; offset += stride) {
    ret = callback(
      flatCoordinates.slice(offset - stride, offset),
      flatCoordinates.slice(offset, offset + stride),
    );
    if (ret) {
      return ret;
    }
  }
  return false;
}


/***/ }),

/***/ "./node_modules/ol/geom/flat/simplify.js":
/*!***********************************************!*\
  !*** ./node_modules/ol/geom/flat/simplify.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   douglasPeucker: () => (/* binding */ douglasPeucker),
/* harmony export */   douglasPeuckerArray: () => (/* binding */ douglasPeuckerArray),
/* harmony export */   douglasPeuckerMultiArray: () => (/* binding */ douglasPeuckerMultiArray),
/* harmony export */   quantize: () => (/* binding */ quantize),
/* harmony export */   quantizeArray: () => (/* binding */ quantizeArray),
/* harmony export */   quantizeMultiArray: () => (/* binding */ quantizeMultiArray),
/* harmony export */   radialDistance: () => (/* binding */ radialDistance),
/* harmony export */   simplifyLineString: () => (/* binding */ simplifyLineString),
/* harmony export */   snap: () => (/* binding */ snap)
/* harmony export */ });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../math.js */ "./node_modules/ol/math.js");
/**
 * @module ol/geom/flat/simplify
 */
// Based on simplify-js https://github.com/mourner/simplify-js
// Copyright (c) 2012, Vladimir Agafonkin
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//    1. Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//
//    2. Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.



/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} squaredTolerance Squared tolerance.
 * @param {boolean} highQuality Highest quality.
 * @param {Array<number>} [simplifiedFlatCoordinates] Simplified flat
 *     coordinates.
 * @return {Array<number>} Simplified line string.
 */
function simplifyLineString(
  flatCoordinates,
  offset,
  end,
  stride,
  squaredTolerance,
  highQuality,
  simplifiedFlatCoordinates,
) {
  simplifiedFlatCoordinates =
    simplifiedFlatCoordinates !== undefined ? simplifiedFlatCoordinates : [];
  if (!highQuality) {
    end = radialDistance(
      flatCoordinates,
      offset,
      end,
      stride,
      squaredTolerance,
      simplifiedFlatCoordinates,
      0,
    );
    flatCoordinates = simplifiedFlatCoordinates;
    offset = 0;
    stride = 2;
  }
  simplifiedFlatCoordinates.length = douglasPeucker(
    flatCoordinates,
    offset,
    end,
    stride,
    squaredTolerance,
    simplifiedFlatCoordinates,
    0,
  );
  return simplifiedFlatCoordinates;
}

/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} squaredTolerance Squared tolerance.
 * @param {Array<number>} simplifiedFlatCoordinates Simplified flat
 *     coordinates.
 * @param {number} simplifiedOffset Simplified offset.
 * @return {number} Simplified offset.
 */
function douglasPeucker(
  flatCoordinates,
  offset,
  end,
  stride,
  squaredTolerance,
  simplifiedFlatCoordinates,
  simplifiedOffset,
) {
  const n = (end - offset) / stride;
  if (n < 3) {
    for (; offset < end; offset += stride) {
      simplifiedFlatCoordinates[simplifiedOffset++] = flatCoordinates[offset];
      simplifiedFlatCoordinates[simplifiedOffset++] =
        flatCoordinates[offset + 1];
    }
    return simplifiedOffset;
  }
  /** @type {Array<number>} */
  const markers = new Array(n);
  markers[0] = 1;
  markers[n - 1] = 1;
  /** @type {Array<number>} */
  const stack = [offset, end - stride];
  let index = 0;
  while (stack.length > 0) {
    const last = stack.pop();
    const first = stack.pop();
    let maxSquaredDistance = 0;
    const x1 = flatCoordinates[first];
    const y1 = flatCoordinates[first + 1];
    const x2 = flatCoordinates[last];
    const y2 = flatCoordinates[last + 1];
    for (let i = first + stride; i < last; i += stride) {
      const x = flatCoordinates[i];
      const y = flatCoordinates[i + 1];
      const squaredDistance = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.squaredSegmentDistance)(x, y, x1, y1, x2, y2);
      if (squaredDistance > maxSquaredDistance) {
        index = i;
        maxSquaredDistance = squaredDistance;
      }
    }
    if (maxSquaredDistance > squaredTolerance) {
      markers[(index - offset) / stride] = 1;
      if (first + stride < index) {
        stack.push(first, index);
      }
      if (index + stride < last) {
        stack.push(index, last);
      }
    }
  }
  for (let i = 0; i < n; ++i) {
    if (markers[i]) {
      simplifiedFlatCoordinates[simplifiedOffset++] =
        flatCoordinates[offset + i * stride];
      simplifiedFlatCoordinates[simplifiedOffset++] =
        flatCoordinates[offset + i * stride + 1];
    }
  }
  return simplifiedOffset;
}

/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<number>} ends Ends.
 * @param {number} stride Stride.
 * @param {number} squaredTolerance Squared tolerance.
 * @param {Array<number>} simplifiedFlatCoordinates Simplified flat
 *     coordinates.
 * @param {number} simplifiedOffset Simplified offset.
 * @param {Array<number>} simplifiedEnds Simplified ends.
 * @return {number} Simplified offset.
 */
function douglasPeuckerArray(
  flatCoordinates,
  offset,
  ends,
  stride,
  squaredTolerance,
  simplifiedFlatCoordinates,
  simplifiedOffset,
  simplifiedEnds,
) {
  for (let i = 0, ii = ends.length; i < ii; ++i) {
    const end = ends[i];
    simplifiedOffset = douglasPeucker(
      flatCoordinates,
      offset,
      end,
      stride,
      squaredTolerance,
      simplifiedFlatCoordinates,
      simplifiedOffset,
    );
    simplifiedEnds.push(simplifiedOffset);
    offset = end;
  }
  return simplifiedOffset;
}

/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<number>>} endss Endss.
 * @param {number} stride Stride.
 * @param {number} squaredTolerance Squared tolerance.
 * @param {Array<number>} simplifiedFlatCoordinates Simplified flat
 *     coordinates.
 * @param {number} simplifiedOffset Simplified offset.
 * @param {Array<Array<number>>} simplifiedEndss Simplified endss.
 * @return {number} Simplified offset.
 */
function douglasPeuckerMultiArray(
  flatCoordinates,
  offset,
  endss,
  stride,
  squaredTolerance,
  simplifiedFlatCoordinates,
  simplifiedOffset,
  simplifiedEndss,
) {
  for (let i = 0, ii = endss.length; i < ii; ++i) {
    const ends = endss[i];
    /** @type {Array<number>} */
    const simplifiedEnds = [];
    simplifiedOffset = douglasPeuckerArray(
      flatCoordinates,
      offset,
      ends,
      stride,
      squaredTolerance,
      simplifiedFlatCoordinates,
      simplifiedOffset,
      simplifiedEnds,
    );
    simplifiedEndss.push(simplifiedEnds);
    offset = ends[ends.length - 1];
  }
  return simplifiedOffset;
}

/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} squaredTolerance Squared tolerance.
 * @param {Array<number>} simplifiedFlatCoordinates Simplified flat
 *     coordinates.
 * @param {number} simplifiedOffset Simplified offset.
 * @return {number} Simplified offset.
 */
function radialDistance(
  flatCoordinates,
  offset,
  end,
  stride,
  squaredTolerance,
  simplifiedFlatCoordinates,
  simplifiedOffset,
) {
  if (end <= offset + stride) {
    // zero or one point, no simplification possible, so copy and return
    for (; offset < end; offset += stride) {
      simplifiedFlatCoordinates[simplifiedOffset++] = flatCoordinates[offset];
      simplifiedFlatCoordinates[simplifiedOffset++] =
        flatCoordinates[offset + 1];
    }
    return simplifiedOffset;
  }
  let x1 = flatCoordinates[offset];
  let y1 = flatCoordinates[offset + 1];
  // copy first point
  simplifiedFlatCoordinates[simplifiedOffset++] = x1;
  simplifiedFlatCoordinates[simplifiedOffset++] = y1;
  let x2 = x1;
  let y2 = y1;
  for (offset += stride; offset < end; offset += stride) {
    x2 = flatCoordinates[offset];
    y2 = flatCoordinates[offset + 1];
    if ((0,_math_js__WEBPACK_IMPORTED_MODULE_0__.squaredDistance)(x1, y1, x2, y2) > squaredTolerance) {
      // copy point at offset
      simplifiedFlatCoordinates[simplifiedOffset++] = x2;
      simplifiedFlatCoordinates[simplifiedOffset++] = y2;
      x1 = x2;
      y1 = y2;
    }
  }
  if (x2 != x1 || y2 != y1) {
    // copy last point
    simplifiedFlatCoordinates[simplifiedOffset++] = x2;
    simplifiedFlatCoordinates[simplifiedOffset++] = y2;
  }
  return simplifiedOffset;
}

/**
 * @param {number} value Value.
 * @param {number} tolerance Tolerance.
 * @return {number} Rounded value.
 */
function snap(value, tolerance) {
  return tolerance * Math.round(value / tolerance);
}

/**
 * Simplifies a line string using an algorithm designed by Tim Schaub.
 * Coordinates are snapped to the nearest value in a virtual grid and
 * consecutive duplicate coordinates are discarded.  This effectively preserves
 * topology as the simplification of any subsection of a line string is
 * independent of the rest of the line string.  This means that, for examples,
 * the common edge between two polygons will be simplified to the same line
 * string independently in both polygons.  This implementation uses a single
 * pass over the coordinates and eliminates intermediate collinear points.
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} tolerance Tolerance.
 * @param {Array<number>} simplifiedFlatCoordinates Simplified flat
 *     coordinates.
 * @param {number} simplifiedOffset Simplified offset.
 * @return {number} Simplified offset.
 */
function quantize(
  flatCoordinates,
  offset,
  end,
  stride,
  tolerance,
  simplifiedFlatCoordinates,
  simplifiedOffset,
) {
  // do nothing if the line is empty
  if (offset == end) {
    return simplifiedOffset;
  }
  // snap the first coordinate (P1)
  let x1 = snap(flatCoordinates[offset], tolerance);
  let y1 = snap(flatCoordinates[offset + 1], tolerance);
  offset += stride;
  // add the first coordinate to the output
  simplifiedFlatCoordinates[simplifiedOffset++] = x1;
  simplifiedFlatCoordinates[simplifiedOffset++] = y1;
  // find the next coordinate that does not snap to the same value as the first
  // coordinate (P2)
  let x2, y2;
  do {
    x2 = snap(flatCoordinates[offset], tolerance);
    y2 = snap(flatCoordinates[offset + 1], tolerance);
    offset += stride;
    if (offset == end) {
      // all coordinates snap to the same value, the line collapses to a point
      // push the last snapped value anyway to ensure that the output contains
      // at least two points
      // FIXME should we really return at least two points anyway?
      simplifiedFlatCoordinates[simplifiedOffset++] = x2;
      simplifiedFlatCoordinates[simplifiedOffset++] = y2;
      return simplifiedOffset;
    }
  } while (x2 == x1 && y2 == y1);
  while (offset < end) {
    // snap the next coordinate (P3)
    const x3 = snap(flatCoordinates[offset], tolerance);
    const y3 = snap(flatCoordinates[offset + 1], tolerance);
    offset += stride;
    // skip P3 if it is equal to P2
    if (x3 == x2 && y3 == y2) {
      continue;
    }
    // calculate the delta between P1 and P2
    const dx1 = x2 - x1;
    const dy1 = y2 - y1;
    // calculate the delta between P3 and P1
    const dx2 = x3 - x1;
    const dy2 = y3 - y1;
    // if P1, P2, and P3 are colinear and P3 is further from P1 than P2 is from
    // P1 in the same direction then P2 is on the straight line between P1 and
    // P3
    if (
      dx1 * dy2 == dy1 * dx2 &&
      ((dx1 < 0 && dx2 < dx1) || dx1 == dx2 || (dx1 > 0 && dx2 > dx1)) &&
      ((dy1 < 0 && dy2 < dy1) || dy1 == dy2 || (dy1 > 0 && dy2 > dy1))
    ) {
      // discard P2 and set P2 = P3
      x2 = x3;
      y2 = y3;
      continue;
    }
    // either P1, P2, and P3 are not colinear, or they are colinear but P3 is
    // between P3 and P1 or on the opposite half of the line to P2.  add P2,
    // and continue with P1 = P2 and P2 = P3
    simplifiedFlatCoordinates[simplifiedOffset++] = x2;
    simplifiedFlatCoordinates[simplifiedOffset++] = y2;
    x1 = x2;
    y1 = y2;
    x2 = x3;
    y2 = y3;
  }
  // add the last point (P2)
  simplifiedFlatCoordinates[simplifiedOffset++] = x2;
  simplifiedFlatCoordinates[simplifiedOffset++] = y2;
  return simplifiedOffset;
}

/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<number>} ends Ends.
 * @param {number} stride Stride.
 * @param {number} tolerance Tolerance.
 * @param {Array<number>} simplifiedFlatCoordinates Simplified flat
 *     coordinates.
 * @param {number} simplifiedOffset Simplified offset.
 * @param {Array<number>} simplifiedEnds Simplified ends.
 * @return {number} Simplified offset.
 */
function quantizeArray(
  flatCoordinates,
  offset,
  ends,
  stride,
  tolerance,
  simplifiedFlatCoordinates,
  simplifiedOffset,
  simplifiedEnds,
) {
  for (let i = 0, ii = ends.length; i < ii; ++i) {
    const end = ends[i];
    simplifiedOffset = quantize(
      flatCoordinates,
      offset,
      end,
      stride,
      tolerance,
      simplifiedFlatCoordinates,
      simplifiedOffset,
    );
    simplifiedEnds.push(simplifiedOffset);
    offset = end;
  }
  return simplifiedOffset;
}

/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {Array<Array<number>>} endss Endss.
 * @param {number} stride Stride.
 * @param {number} tolerance Tolerance.
 * @param {Array<number>} simplifiedFlatCoordinates Simplified flat
 *     coordinates.
 * @param {number} simplifiedOffset Simplified offset.
 * @param {Array<Array<number>>} simplifiedEndss Simplified endss.
 * @return {number} Simplified offset.
 */
function quantizeMultiArray(
  flatCoordinates,
  offset,
  endss,
  stride,
  tolerance,
  simplifiedFlatCoordinates,
  simplifiedOffset,
  simplifiedEndss,
) {
  for (let i = 0, ii = endss.length; i < ii; ++i) {
    const ends = endss[i];
    /** @type {Array<number>} */
    const simplifiedEnds = [];
    simplifiedOffset = quantizeArray(
      flatCoordinates,
      offset,
      ends,
      stride,
      tolerance,
      simplifiedFlatCoordinates,
      simplifiedOffset,
      simplifiedEnds,
    );
    simplifiedEndss.push(simplifiedEnds);
    offset = ends[ends.length - 1];
  }
  return simplifiedOffset;
}


/***/ }),

/***/ "./node_modules/ol/geom/flat/transform.js":
/*!************************************************!*\
  !*** ./node_modules/ol/geom/flat/transform.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   rotate: () => (/* binding */ rotate),
/* harmony export */   scale: () => (/* binding */ scale),
/* harmony export */   transform2D: () => (/* binding */ transform2D),
/* harmony export */   translate: () => (/* binding */ translate)
/* harmony export */ });
/**
 * @module ol/geom/flat/transform
 */

/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {import("../../transform.js").Transform} transform Transform.
 * @param {Array<number>} [dest] Destination.
 * @return {Array<number>} Transformed coordinates.
 */
function transform2D(
  flatCoordinates,
  offset,
  end,
  stride,
  transform,
  dest,
) {
  dest = dest ? dest : [];
  let i = 0;
  for (let j = offset; j < end; j += stride) {
    const x = flatCoordinates[j];
    const y = flatCoordinates[j + 1];
    dest[i++] = transform[0] * x + transform[2] * y + transform[4];
    dest[i++] = transform[1] * x + transform[3] * y + transform[5];
  }
  if (dest && dest.length != i) {
    dest.length = i;
  }
  return dest;
}

/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} angle Angle.
 * @param {Array<number>} anchor Rotation anchor point.
 * @param {Array<number>} [dest] Destination.
 * @return {Array<number>} Transformed coordinates.
 */
function rotate(
  flatCoordinates,
  offset,
  end,
  stride,
  angle,
  anchor,
  dest,
) {
  dest = dest ? dest : [];
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  const anchorX = anchor[0];
  const anchorY = anchor[1];
  let i = 0;
  for (let j = offset; j < end; j += stride) {
    const deltaX = flatCoordinates[j] - anchorX;
    const deltaY = flatCoordinates[j + 1] - anchorY;
    dest[i++] = anchorX + deltaX * cos - deltaY * sin;
    dest[i++] = anchorY + deltaX * sin + deltaY * cos;
    for (let k = j + 2; k < j + stride; ++k) {
      dest[i++] = flatCoordinates[k];
    }
  }
  if (dest && dest.length != i) {
    dest.length = i;
  }
  return dest;
}

/**
 * Scale the coordinates.
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} sx Scale factor in the x-direction.
 * @param {number} sy Scale factor in the y-direction.
 * @param {Array<number>} anchor Scale anchor point.
 * @param {Array<number>} [dest] Destination.
 * @return {Array<number>} Transformed coordinates.
 */
function scale(
  flatCoordinates,
  offset,
  end,
  stride,
  sx,
  sy,
  anchor,
  dest,
) {
  dest = dest ? dest : [];
  const anchorX = anchor[0];
  const anchorY = anchor[1];
  let i = 0;
  for (let j = offset; j < end; j += stride) {
    const deltaX = flatCoordinates[j] - anchorX;
    const deltaY = flatCoordinates[j + 1] - anchorY;
    dest[i++] = anchorX + sx * deltaX;
    dest[i++] = anchorY + sy * deltaY;
    for (let k = j + 2; k < j + stride; ++k) {
      dest[i++] = flatCoordinates[k];
    }
  }
  if (dest && dest.length != i) {
    dest.length = i;
  }
  return dest;
}

/**
 * @param {Array<number>} flatCoordinates Flat coordinates.
 * @param {number} offset Offset.
 * @param {number} end End.
 * @param {number} stride Stride.
 * @param {number} deltaX Delta X.
 * @param {number} deltaY Delta Y.
 * @param {Array<number>} [dest] Destination.
 * @return {Array<number>} Transformed coordinates.
 */
function translate(
  flatCoordinates,
  offset,
  end,
  stride,
  deltaX,
  deltaY,
  dest,
) {
  dest = dest ? dest : [];
  let i = 0;
  for (let j = offset; j < end; j += stride) {
    dest[i++] = flatCoordinates[j] + deltaX;
    dest[i++] = flatCoordinates[j + 1] + deltaY;
    for (let k = j + 2; k < j + stride; ++k) {
      dest[i++] = flatCoordinates[k];
    }
  }
  if (dest && dest.length != i) {
    dest.length = i;
  }
  return dest;
}


/***/ }),

/***/ "./node_modules/ol/math.js":
/*!*********************************!*\
  !*** ./node_modules/ol/math.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ceil: () => (/* binding */ ceil),
/* harmony export */   clamp: () => (/* binding */ clamp),
/* harmony export */   floor: () => (/* binding */ floor),
/* harmony export */   lerp: () => (/* binding */ lerp),
/* harmony export */   modulo: () => (/* binding */ modulo),
/* harmony export */   round: () => (/* binding */ round),
/* harmony export */   solveLinearSystem: () => (/* binding */ solveLinearSystem),
/* harmony export */   squaredDistance: () => (/* binding */ squaredDistance),
/* harmony export */   squaredSegmentDistance: () => (/* binding */ squaredSegmentDistance),
/* harmony export */   toDegrees: () => (/* binding */ toDegrees),
/* harmony export */   toFixed: () => (/* binding */ toFixed),
/* harmony export */   toRadians: () => (/* binding */ toRadians)
/* harmony export */ });
/**
 * @module ol/math
 */

/**
 * Takes a number and clamps it to within the provided bounds.
 * @param {number} value The input number.
 * @param {number} min The minimum value to return.
 * @param {number} max The maximum value to return.
 * @return {number} The input number if it is within bounds, or the nearest
 *     number within the bounds.
 */
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

/**
 * Returns the square of the closest distance between the point (x, y) and the
 * line segment (x1, y1) to (x2, y2).
 * @param {number} x X.
 * @param {number} y Y.
 * @param {number} x1 X1.
 * @param {number} y1 Y1.
 * @param {number} x2 X2.
 * @param {number} y2 Y2.
 * @return {number} Squared distance.
 */
function squaredSegmentDistance(x, y, x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  if (dx !== 0 || dy !== 0) {
    const t = ((x - x1) * dx + (y - y1) * dy) / (dx * dx + dy * dy);
    if (t > 1) {
      x1 = x2;
      y1 = y2;
    } else if (t > 0) {
      x1 += dx * t;
      y1 += dy * t;
    }
  }
  return squaredDistance(x, y, x1, y1);
}

/**
 * Returns the square of the distance between the points (x1, y1) and (x2, y2).
 * @param {number} x1 X1.
 * @param {number} y1 Y1.
 * @param {number} x2 X2.
 * @param {number} y2 Y2.
 * @return {number} Squared distance.
 */
function squaredDistance(x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return dx * dx + dy * dy;
}

/**
 * Solves system of linear equations using Gaussian elimination method.
 *
 * @param {Array<Array<number>>} mat Augmented matrix (n x n + 1 column)
 *                                     in row-major order.
 * @return {Array<number>|null} The resulting vector.
 */
function solveLinearSystem(mat) {
  const n = mat.length;

  for (let i = 0; i < n; i++) {
    // Find max in the i-th column (ignoring i - 1 first rows)
    let maxRow = i;
    let maxEl = Math.abs(mat[i][i]);
    for (let r = i + 1; r < n; r++) {
      const absValue = Math.abs(mat[r][i]);
      if (absValue > maxEl) {
        maxEl = absValue;
        maxRow = r;
      }
    }

    if (maxEl === 0) {
      return null; // matrix is singular
    }

    // Swap max row with i-th (current) row
    const tmp = mat[maxRow];
    mat[maxRow] = mat[i];
    mat[i] = tmp;

    // Subtract the i-th row to make all the remaining rows 0 in the i-th column
    for (let j = i + 1; j < n; j++) {
      const coef = -mat[j][i] / mat[i][i];
      for (let k = i; k < n + 1; k++) {
        if (i == k) {
          mat[j][k] = 0;
        } else {
          mat[j][k] += coef * mat[i][k];
        }
      }
    }
  }

  // Solve Ax=b for upper triangular matrix A (mat)
  const x = new Array(n);
  for (let l = n - 1; l >= 0; l--) {
    x[l] = mat[l][n] / mat[l][l];
    for (let m = l - 1; m >= 0; m--) {
      mat[m][n] -= mat[m][l] * x[l];
    }
  }
  return x;
}

/**
 * Converts radians to to degrees.
 *
 * @param {number} angleInRadians Angle in radians.
 * @return {number} Angle in degrees.
 */
function toDegrees(angleInRadians) {
  return (angleInRadians * 180) / Math.PI;
}

/**
 * Converts degrees to radians.
 *
 * @param {number} angleInDegrees Angle in degrees.
 * @return {number} Angle in radians.
 */
function toRadians(angleInDegrees) {
  return (angleInDegrees * Math.PI) / 180;
}

/**
 * Returns the modulo of a / b, depending on the sign of b.
 *
 * @param {number} a Dividend.
 * @param {number} b Divisor.
 * @return {number} Modulo.
 */
function modulo(a, b) {
  const r = a % b;
  return r * b < 0 ? r + b : r;
}

/**
 * Calculates the linearly interpolated value of x between a and b.
 *
 * @param {number} a Number
 * @param {number} b Number
 * @param {number} x Value to be interpolated.
 * @return {number} Interpolated value.
 */
function lerp(a, b, x) {
  return a + x * (b - a);
}

/**
 * Returns a number with a limited number of decimal digits.
 * @param {number} n The input number.
 * @param {number} decimals The maximum number of decimal digits.
 * @return {number} The input number with a limited number of decimal digits.
 */
function toFixed(n, decimals) {
  const factor = Math.pow(10, decimals);
  return Math.round(n * factor) / factor;
}

/**
 * Rounds a number to the nearest integer value considering only the given number
 * of decimal digits (with rounding on the final digit).
 * @param {number} n The input number.
 * @param {number} decimals The maximum number of decimal digits.
 * @return {number} The nearest integer.
 */
function round(n, decimals) {
  return Math.round(toFixed(n, decimals));
}

/**
 * Rounds a number to the next smaller integer considering only the given number
 * of decimal digits (with rounding on the final digit).
 * @param {number} n The input number.
 * @param {number} decimals The maximum number of decimal digits.
 * @return {number} The next smaller integer.
 */
function floor(n, decimals) {
  return Math.floor(toFixed(n, decimals));
}

/**
 * Rounds a number to the next bigger integer considering only the given number
 * of decimal digits (with rounding on the final digit).
 * @param {number} n The input number.
 * @param {number} decimals The maximum number of decimal digits.
 * @return {number} The next bigger integer.
 */
function ceil(n, decimals) {
  return Math.ceil(toFixed(n, decimals));
}


/***/ }),

/***/ "./node_modules/ol/obj.js":
/*!********************************!*\
  !*** ./node_modules/ol/obj.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clear: () => (/* binding */ clear),
/* harmony export */   isEmpty: () => (/* binding */ isEmpty)
/* harmony export */ });
/**
 * @module ol/obj
 */

/**
 * Removes all properties from an object.
 * @param {Object<string, unknown>} object The object to clear.
 */
function clear(object) {
  for (const property in object) {
    delete object[property];
  }
}

/**
 * Determine if an object has any properties.
 * @param {Object} object The object to check.
 * @return {boolean} The object is empty.
 */
function isEmpty(object) {
  let property;
  for (property in object) {
    return false;
  }
  return !property;
}


/***/ }),

/***/ "./node_modules/ol/proj.js":
/*!*********************************!*\
  !*** ./node_modules/ol/proj.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   METERS_PER_UNIT: () => (/* reexport safe */ _proj_Units_js__WEBPACK_IMPORTED_MODULE_0__.METERS_PER_UNIT),
/* harmony export */   Projection: () => (/* reexport safe */ _proj_Projection_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   addCommon: () => (/* binding */ addCommon),
/* harmony export */   addCoordinateTransforms: () => (/* binding */ addCoordinateTransforms),
/* harmony export */   addEquivalentProjections: () => (/* binding */ addEquivalentProjections),
/* harmony export */   addEquivalentTransforms: () => (/* binding */ addEquivalentTransforms),
/* harmony export */   addProjection: () => (/* binding */ addProjection),
/* harmony export */   addProjections: () => (/* binding */ addProjections),
/* harmony export */   clearAllProjections: () => (/* binding */ clearAllProjections),
/* harmony export */   clearUserProjection: () => (/* binding */ clearUserProjection),
/* harmony export */   cloneTransform: () => (/* binding */ cloneTransform),
/* harmony export */   createProjection: () => (/* binding */ createProjection),
/* harmony export */   createSafeCoordinateTransform: () => (/* binding */ createSafeCoordinateTransform),
/* harmony export */   createTransformFromCoordinateTransform: () => (/* binding */ createTransformFromCoordinateTransform),
/* harmony export */   disableCoordinateWarning: () => (/* binding */ disableCoordinateWarning),
/* harmony export */   equivalent: () => (/* binding */ equivalent),
/* harmony export */   fromLonLat: () => (/* binding */ fromLonLat),
/* harmony export */   fromUserCoordinate: () => (/* binding */ fromUserCoordinate),
/* harmony export */   fromUserExtent: () => (/* binding */ fromUserExtent),
/* harmony export */   fromUserResolution: () => (/* binding */ fromUserResolution),
/* harmony export */   get: () => (/* binding */ get),
/* harmony export */   getPointResolution: () => (/* binding */ getPointResolution),
/* harmony export */   getTransform: () => (/* binding */ getTransform),
/* harmony export */   getTransformFromProjections: () => (/* binding */ getTransformFromProjections),
/* harmony export */   getUserProjection: () => (/* binding */ getUserProjection),
/* harmony export */   identityTransform: () => (/* binding */ identityTransform),
/* harmony export */   setUserProjection: () => (/* binding */ setUserProjection),
/* harmony export */   toLonLat: () => (/* binding */ toLonLat),
/* harmony export */   toUserCoordinate: () => (/* binding */ toUserCoordinate),
/* harmony export */   toUserExtent: () => (/* binding */ toUserExtent),
/* harmony export */   toUserResolution: () => (/* binding */ toUserResolution),
/* harmony export */   transform: () => (/* binding */ transform),
/* harmony export */   transformExtent: () => (/* binding */ transformExtent),
/* harmony export */   transformWithProjections: () => (/* binding */ transformWithProjections),
/* harmony export */   useGeographic: () => (/* binding */ useGeographic)
/* harmony export */ });
/* harmony import */ var _proj_Projection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./proj/Projection.js */ "./node_modules/ol/proj/Projection.js");
/* harmony import */ var _proj_epsg3857_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./proj/epsg3857.js */ "./node_modules/ol/proj/epsg3857.js");
/* harmony import */ var _proj_epsg4326_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./proj/epsg4326.js */ "./node_modules/ol/proj/epsg4326.js");
/* harmony import */ var _proj_Units_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./proj/Units.js */ "./node_modules/ol/proj/Units.js");
/* harmony import */ var _proj_projections_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./proj/projections.js */ "./node_modules/ol/proj/projections.js");
/* harmony import */ var _proj_transforms_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./proj/transforms.js */ "./node_modules/ol/proj/transforms.js");
/* harmony import */ var _extent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./extent.js */ "./node_modules/ol/extent.js");
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./math.js */ "./node_modules/ol/math.js");
/* harmony import */ var _coordinate_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./coordinate.js */ "./node_modules/ol/coordinate.js");
/* harmony import */ var _sphere_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sphere.js */ "./node_modules/ol/sphere.js");
/* harmony import */ var _console_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./console.js */ "./node_modules/ol/console.js");
/**
 * @module ol/proj
 */

/**
 * The ol/proj module stores:
 * * a list of {@link module:ol/proj/Projection~Projection}
 * objects, one for each projection supported by the application
 * * a list of transform functions needed to convert coordinates in one projection
 * into another.
 *
 * The static functions are the methods used to maintain these.
 * Each transform function can handle not only simple coordinate pairs, but also
 * large arrays of coordinates such as vector geometries.
 *
 * When loaded, the library adds projection objects for EPSG:4326 (WGS84
 * geographic coordinates) and EPSG:3857 (Web or Spherical Mercator, as used
 * for example by Bing Maps or OpenStreetMap), together with the relevant
 * transform functions.
 *
 * Additional transforms may be added by using the http://proj4js.org/
 * library (version 2.2 or later). You can use the full build supplied by
 * Proj4js, or create a custom build to support those projections you need; see
 * the Proj4js website for how to do this. You also need the Proj4js definitions
 * for the required projections. These definitions can be obtained from
 * https://epsg.io/, and are a JS function, so can be loaded in a script
 * tag (as in the examples) or pasted into your application.
 *
 * After all required projection definitions are added to proj4's registry (by
 * using `proj4.defs()`), simply call `register(proj4)` from the `ol/proj/proj4`
 * package. Existing transforms are not changed by this function. See
 * examples/wms-image-custom-proj for an example of this.
 *
 * Additional projection definitions can be registered with `proj4.defs()` any
 * time. Just make sure to call `register(proj4)` again; for example, with user-supplied data where you don't
 * know in advance what projections are needed, you can initially load minimal
 * support and then load whichever are requested.
 *
 * Note that Proj4js does not support projection extents. If you want to add
 * one for creating default tile grids, you can add it after the Projection
 * object has been created with `setExtent`, for example,
 * `get('EPSG:1234').setExtent(extent)`.
 *
 * In addition to Proj4js support, any transform functions can be added with
 * {@link module:ol/proj.addCoordinateTransforms}. To use this, you must first create
 * a {@link module:ol/proj/Projection~Projection} object for the new projection and add it with
 * {@link module:ol/proj.addProjection}. You can then add the forward and inverse
 * functions with {@link module:ol/proj.addCoordinateTransforms}. See
 * examples/wms-custom-proj for an example of this.
 *
 * Note that if no transforms are needed and you only need to define the
 * projection, just add a {@link module:ol/proj/Projection~Projection} with
 * {@link module:ol/proj.addProjection}. See examples/wms-no-proj for an example of
 * this.
 */












/**
 * A projection as {@link module:ol/proj/Projection~Projection}, SRS identifier
 * string or undefined.
 * @typedef {Projection|string|undefined} ProjectionLike
 * @api
 */

/**
 * A transform function accepts an array of input coordinate values, an optional
 * output array, and an optional dimension (default should be 2).  The function
 * transforms the input coordinate values, populates the output array, and
 * returns the output array.
 *
 * @typedef {function(Array<number>, Array<number>=, number=): Array<number>} TransformFunction
 * @api
 */





let showCoordinateWarning = true;

/**
 * @param {boolean} [disable = true] Disable console info about `useGeographic()`
 */
function disableCoordinateWarning(disable) {
  const hide = disable === undefined ? true : disable;
  showCoordinateWarning = !hide;
}

/**
 * @param {Array<number>} input Input coordinate array.
 * @param {Array<number>} [output] Output array of coordinate values.
 * @return {Array<number>} Output coordinate array (new array, same coordinate
 *     values).
 */
function cloneTransform(input, output) {
  if (output !== undefined) {
    for (let i = 0, ii = input.length; i < ii; ++i) {
      output[i] = input[i];
    }
    output = output;
  } else {
    output = input.slice();
  }
  return output;
}

/**
 * @param {Array<number>} input Input coordinate array.
 * @param {Array<number>} [output] Output array of coordinate values.
 * @return {Array<number>} Input coordinate array (same array as input).
 */
function identityTransform(input, output) {
  if (output !== undefined && input !== output) {
    for (let i = 0, ii = input.length; i < ii; ++i) {
      output[i] = input[i];
    }
    input = output;
  }
  return input;
}

/**
 * Add a Projection object to the list of supported projections that can be
 * looked up by their code.
 *
 * @param {Projection} projection Projection instance.
 * @api
 */
function addProjection(projection) {
  (0,_proj_projections_js__WEBPACK_IMPORTED_MODULE_2__.add)(projection.getCode(), projection);
  (0,_proj_transforms_js__WEBPACK_IMPORTED_MODULE_3__.add)(projection, projection, cloneTransform);
}

/**
 * @param {Array<Projection>} projections Projections.
 */
function addProjections(projections) {
  projections.forEach(addProjection);
}

/**
 * Fetches a Projection object for the code specified.
 *
 * @param {ProjectionLike} projectionLike Either a code string which is
 *     a combination of authority and identifier such as "EPSG:4326", or an
 *     existing projection object, or undefined.
 * @return {Projection|null} Projection object, or null if not in list.
 * @api
 */
function get(projectionLike) {
  return typeof projectionLike === 'string'
    ? (0,_proj_projections_js__WEBPACK_IMPORTED_MODULE_2__.get)(/** @type {string} */ (projectionLike))
    : /** @type {Projection} */ (projectionLike) || null;
}

/**
 * Get the resolution of the point in degrees or distance units.
 * For projections with degrees as the unit this will simply return the
 * provided resolution. For other projections the point resolution is
 * by default estimated by transforming the `point` pixel to EPSG:4326,
 * measuring its width and height on the normal sphere,
 * and taking the average of the width and height.
 * A custom function can be provided for a specific projection, either
 * by setting the `getPointResolution` option in the
 * {@link module:ol/proj/Projection~Projection} constructor or by using
 * {@link module:ol/proj/Projection~Projection#setGetPointResolution} to change an existing
 * projection object.
 * @param {ProjectionLike} projection The projection.
 * @param {number} resolution Nominal resolution in projection units.
 * @param {import("./coordinate.js").Coordinate} point Point to find adjusted resolution at.
 * @param {import("./proj/Units.js").Units} [units] Units to get the point resolution in.
 * Default is the projection's units.
 * @return {number} Point resolution.
 * @api
 */
function getPointResolution(projection, resolution, point, units) {
  projection = get(projection);
  let pointResolution;
  const getter = projection.getPointResolutionFunc();
  if (getter) {
    pointResolution = getter(resolution, point);
    if (units && units !== projection.getUnits()) {
      const metersPerUnit = projection.getMetersPerUnit();
      if (metersPerUnit) {
        pointResolution =
          (pointResolution * metersPerUnit) / _proj_Units_js__WEBPACK_IMPORTED_MODULE_0__.METERS_PER_UNIT[units];
      }
    }
  } else {
    const projUnits = projection.getUnits();
    if ((projUnits == 'degrees' && !units) || units == 'degrees') {
      pointResolution = resolution;
    } else {
      // Estimate point resolution by transforming the center pixel to EPSG:4326,
      // measuring its width and height on the normal sphere, and taking the
      // average of the width and height.
      const toEPSG4326 = getTransformFromProjections(
        projection,
        get('EPSG:4326'),
      );
      if (toEPSG4326 === identityTransform && projUnits !== 'degrees') {
        // no transform is available
        pointResolution = resolution * projection.getMetersPerUnit();
      } else {
        let vertices = [
          point[0] - resolution / 2,
          point[1],
          point[0] + resolution / 2,
          point[1],
          point[0],
          point[1] - resolution / 2,
          point[0],
          point[1] + resolution / 2,
        ];
        vertices = toEPSG4326(vertices, vertices, 2);
        const width = (0,_sphere_js__WEBPACK_IMPORTED_MODULE_4__.getDistance)(vertices.slice(0, 2), vertices.slice(2, 4));
        const height = (0,_sphere_js__WEBPACK_IMPORTED_MODULE_4__.getDistance)(vertices.slice(4, 6), vertices.slice(6, 8));
        pointResolution = (width + height) / 2;
      }
      const metersPerUnit = units
        ? _proj_Units_js__WEBPACK_IMPORTED_MODULE_0__.METERS_PER_UNIT[units]
        : projection.getMetersPerUnit();
      if (metersPerUnit !== undefined) {
        pointResolution /= metersPerUnit;
      }
    }
  }
  return pointResolution;
}

/**
 * Registers transformation functions that don't alter coordinates. Those allow
 * to transform between projections with equal meaning.
 *
 * @param {Array<Projection>} projections Projections.
 * @api
 */
function addEquivalentProjections(projections) {
  addProjections(projections);
  projections.forEach(function (source) {
    projections.forEach(function (destination) {
      if (source !== destination) {
        (0,_proj_transforms_js__WEBPACK_IMPORTED_MODULE_3__.add)(source, destination, cloneTransform);
      }
    });
  });
}

/**
 * Registers transformation functions to convert coordinates in any projection
 * in projection1 to any projection in projection2.
 *
 * @param {Array<Projection>} projections1 Projections with equal
 *     meaning.
 * @param {Array<Projection>} projections2 Projections with equal
 *     meaning.
 * @param {TransformFunction} forwardTransform Transformation from any
 *   projection in projection1 to any projection in projection2.
 * @param {TransformFunction} inverseTransform Transform from any projection
 *   in projection2 to any projection in projection1..
 */
function addEquivalentTransforms(
  projections1,
  projections2,
  forwardTransform,
  inverseTransform,
) {
  projections1.forEach(function (projection1) {
    projections2.forEach(function (projection2) {
      (0,_proj_transforms_js__WEBPACK_IMPORTED_MODULE_3__.add)(projection1, projection2, forwardTransform);
      (0,_proj_transforms_js__WEBPACK_IMPORTED_MODULE_3__.add)(projection2, projection1, inverseTransform);
    });
  });
}

/**
 * Clear all cached projections and transforms.
 */
function clearAllProjections() {
  (0,_proj_projections_js__WEBPACK_IMPORTED_MODULE_2__.clear)();
  (0,_proj_transforms_js__WEBPACK_IMPORTED_MODULE_3__.clear)();
}

/**
 * @param {Projection|string|undefined} projection Projection.
 * @param {string} defaultCode Default code.
 * @return {Projection} Projection.
 */
function createProjection(projection, defaultCode) {
  if (!projection) {
    return get(defaultCode);
  }
  if (typeof projection === 'string') {
    return get(projection);
  }
  return /** @type {Projection} */ (projection);
}

/**
 * Creates a {@link module:ol/proj~TransformFunction} from a simple 2D coordinate transform
 * function.
 * @param {function(import("./coordinate.js").Coordinate): import("./coordinate.js").Coordinate} coordTransform Coordinate
 *     transform.
 * @return {TransformFunction} Transform function.
 */
function createTransformFromCoordinateTransform(coordTransform) {
  return (
    /**
     * @param {Array<number>} input Input.
     * @param {Array<number>} [output] Output.
     * @param {number} [dimension] Dimension.
     * @return {Array<number>} Output.
     */
    function (input, output, dimension) {
      const length = input.length;
      dimension = dimension !== undefined ? dimension : 2;
      output = output !== undefined ? output : new Array(length);
      for (let i = 0; i < length; i += dimension) {
        const point = coordTransform(input.slice(i, i + dimension));
        const pointLength = point.length;
        for (let j = 0, jj = dimension; j < jj; ++j) {
          output[i + j] = j >= pointLength ? input[i + j] : point[j];
        }
      }
      return output;
    }
  );
}

/**
 * Registers coordinate transform functions to convert coordinates between the
 * source projection and the destination projection.
 * The forward and inverse functions convert coordinate pairs; this function
 * converts these into the functions used internally which also handle
 * extents and coordinate arrays.
 *
 * @param {ProjectionLike} source Source projection.
 * @param {ProjectionLike} destination Destination projection.
 * @param {function(import("./coordinate.js").Coordinate): import("./coordinate.js").Coordinate} forward The forward transform
 *     function (that is, from the source projection to the destination
 *     projection) that takes a {@link module:ol/coordinate~Coordinate} as argument and returns
 *     the transformed {@link module:ol/coordinate~Coordinate}.
 * @param {function(import("./coordinate.js").Coordinate): import("./coordinate.js").Coordinate} inverse The inverse transform
 *     function (that is, from the destination projection to the source
 *     projection) that takes a {@link module:ol/coordinate~Coordinate} as argument and returns
 *     the transformed {@link module:ol/coordinate~Coordinate}. If the transform function can only
 *     transform less dimensions than the input coordinate, it is supposeed to return a coordinate
 *     with only the length it can transform. The other dimensions will be taken unchanged from the
 *     source.
 * @api
 */
function addCoordinateTransforms(source, destination, forward, inverse) {
  const sourceProj = get(source);
  const destProj = get(destination);
  (0,_proj_transforms_js__WEBPACK_IMPORTED_MODULE_3__.add)(
    sourceProj,
    destProj,
    createTransformFromCoordinateTransform(forward),
  );
  (0,_proj_transforms_js__WEBPACK_IMPORTED_MODULE_3__.add)(
    destProj,
    sourceProj,
    createTransformFromCoordinateTransform(inverse),
  );
}

/**
 * Transforms a coordinate from longitude/latitude to a different projection.
 * @param {import("./coordinate.js").Coordinate} coordinate Coordinate as longitude and latitude, i.e.
 *     an array with longitude as 1st and latitude as 2nd element.
 * @param {ProjectionLike} [projection] Target projection. The
 *     default is Web Mercator, i.e. 'EPSG:3857'.
 * @return {import("./coordinate.js").Coordinate} Coordinate projected to the target projection.
 * @api
 */
function fromLonLat(coordinate, projection) {
  disableCoordinateWarning();
  return transform(
    coordinate,
    'EPSG:4326',
    projection !== undefined ? projection : 'EPSG:3857',
  );
}

/**
 * Transforms a coordinate to longitude/latitude.
 * @param {import("./coordinate.js").Coordinate} coordinate Projected coordinate.
 * @param {ProjectionLike} [projection] Projection of the coordinate.
 *     The default is Web Mercator, i.e. 'EPSG:3857'.
 * @return {import("./coordinate.js").Coordinate} Coordinate as longitude and latitude, i.e. an array
 *     with longitude as 1st and latitude as 2nd element.
 * @api
 */
function toLonLat(coordinate, projection) {
  const lonLat = transform(
    coordinate,
    projection !== undefined ? projection : 'EPSG:3857',
    'EPSG:4326',
  );
  const lon = lonLat[0];
  if (lon < -180 || lon > 180) {
    lonLat[0] = (0,_math_js__WEBPACK_IMPORTED_MODULE_5__.modulo)(lon + 180, 360) - 180;
  }
  return lonLat;
}

/**
 * Checks if two projections are the same, that is every coordinate in one
 * projection does represent the same geographic point as the same coordinate in
 * the other projection.
 *
 * @param {Projection} projection1 Projection 1.
 * @param {Projection} projection2 Projection 2.
 * @return {boolean} Equivalent.
 * @api
 */
function equivalent(projection1, projection2) {
  if (projection1 === projection2) {
    return true;
  }
  const equalUnits = projection1.getUnits() === projection2.getUnits();
  if (projection1.getCode() === projection2.getCode()) {
    return equalUnits;
  }
  const transformFunc = getTransformFromProjections(projection1, projection2);
  return transformFunc === cloneTransform && equalUnits;
}

/**
 * Searches in the list of transform functions for the function for converting
 * coordinates from the source projection to the destination projection.
 *
 * @param {Projection} sourceProjection Source Projection object.
 * @param {Projection} destinationProjection Destination Projection
 *     object.
 * @return {TransformFunction} Transform function.
 */
function getTransformFromProjections(
  sourceProjection,
  destinationProjection,
) {
  const sourceCode = sourceProjection.getCode();
  const destinationCode = destinationProjection.getCode();
  let transformFunc = (0,_proj_transforms_js__WEBPACK_IMPORTED_MODULE_3__.get)(sourceCode, destinationCode);
  if (!transformFunc) {
    transformFunc = identityTransform;
  }
  return transformFunc;
}

/**
 * Given the projection-like objects, searches for a transformation
 * function to convert a coordinates array from the source projection to the
 * destination projection.
 *
 * @param {ProjectionLike} source Source.
 * @param {ProjectionLike} destination Destination.
 * @return {TransformFunction} Transform function.
 * @api
 */
function getTransform(source, destination) {
  const sourceProjection = get(source);
  const destinationProjection = get(destination);
  return getTransformFromProjections(sourceProjection, destinationProjection);
}

/**
 * Transforms a coordinate from source projection to destination projection.
 * This returns a new coordinate (and does not modify the original).
 *
 * See {@link module:ol/proj.transformExtent} for extent transformation.
 * See the transform method of {@link module:ol/geom/Geometry~Geometry} and its
 * subclasses for geometry transforms.
 *
 * @param {import("./coordinate.js").Coordinate} coordinate Coordinate.
 * @param {ProjectionLike} source Source projection-like.
 * @param {ProjectionLike} destination Destination projection-like.
 * @return {import("./coordinate.js").Coordinate} Coordinate.
 * @api
 */
function transform(coordinate, source, destination) {
  const transformFunc = getTransform(source, destination);
  return transformFunc(coordinate, undefined, coordinate.length);
}

/**
 * Transforms an extent from source projection to destination projection.  This
 * returns a new extent (and does not modify the original).
 *
 * @param {import("./extent.js").Extent} extent The extent to transform.
 * @param {ProjectionLike} source Source projection-like.
 * @param {ProjectionLike} destination Destination projection-like.
 * @param {number} [stops] Number of stops per side used for the transform.
 * By default only the corners are used.
 * @return {import("./extent.js").Extent} The transformed extent.
 * @api
 */
function transformExtent(extent, source, destination, stops) {
  const transformFunc = getTransform(source, destination);
  return (0,_extent_js__WEBPACK_IMPORTED_MODULE_6__.applyTransform)(extent, transformFunc, undefined, stops);
}

/**
 * Transforms the given point to the destination projection.
 *
 * @param {import("./coordinate.js").Coordinate} point Point.
 * @param {Projection} sourceProjection Source projection.
 * @param {Projection} destinationProjection Destination projection.
 * @return {import("./coordinate.js").Coordinate} Point.
 */
function transformWithProjections(
  point,
  sourceProjection,
  destinationProjection,
) {
  const transformFunc = getTransformFromProjections(
    sourceProjection,
    destinationProjection,
  );
  return transformFunc(point);
}

/**
 * @type {Projection|null}
 */
let userProjection = null;

/**
 * Set the projection for coordinates supplied from and returned by API methods.
 * This includes all API methods except for those interacting with tile grids,
 * plus {@link import("./Map.js").FrameState} and {@link import("./View.js").State}.
 * @param {ProjectionLike} projection The user projection.
 * @api
 */
function setUserProjection(projection) {
  userProjection = get(projection);
}

/**
 * Clear the user projection if set.
 * @api
 */
function clearUserProjection() {
  userProjection = null;
}

/**
 * Get the projection for coordinates supplied from and returned by API methods.
 * @return {Projection|null} The user projection (or null if not set).
 * @api
 */
function getUserProjection() {
  return userProjection;
}

/**
 * Use geographic coordinates (WGS-84 datum) in API methods.
 * This includes all API methods except for those interacting with tile grids,
 * plus {@link import("./Map.js").FrameState} and {@link import("./View.js").State}.
 * @api
 */
function useGeographic() {
  setUserProjection('EPSG:4326');
}

/**
 * Return a coordinate transformed into the user projection.  If no user projection
 * is set, the original coordinate is returned.
 * @param {Array<number>} coordinate Input coordinate.
 * @param {ProjectionLike} sourceProjection The input coordinate projection.
 * @return {Array<number>} The input coordinate in the user projection.
 */
function toUserCoordinate(coordinate, sourceProjection) {
  if (!userProjection) {
    return coordinate;
  }
  return transform(coordinate, sourceProjection, userProjection);
}

/**
 * Return a coordinate transformed from the user projection.  If no user projection
 * is set, the original coordinate is returned.
 * @param {Array<number>} coordinate Input coordinate.
 * @param {ProjectionLike} destProjection The destination projection.
 * @return {Array<number>} The input coordinate transformed.
 */
function fromUserCoordinate(coordinate, destProjection) {
  if (!userProjection) {
    if (
      showCoordinateWarning &&
      !(0,_coordinate_js__WEBPACK_IMPORTED_MODULE_7__.equals)(coordinate, [0, 0]) &&
      coordinate[0] >= -180 &&
      coordinate[0] <= 180 &&
      coordinate[1] >= -90 &&
      coordinate[1] <= 90
    ) {
      showCoordinateWarning = false;
      (0,_console_js__WEBPACK_IMPORTED_MODULE_8__.warn)(
        'Call useGeographic() from ol/proj once to work with [longitude, latitude] coordinates.',
      );
    }
    return coordinate;
  }
  return transform(coordinate, userProjection, destProjection);
}

/**
 * Return an extent transformed into the user projection.  If no user projection
 * is set, the original extent is returned.
 * @param {import("./extent.js").Extent} extent Input extent.
 * @param {ProjectionLike} sourceProjection The input extent projection.
 * @return {import("./extent.js").Extent} The input extent in the user projection.
 */
function toUserExtent(extent, sourceProjection) {
  if (!userProjection) {
    return extent;
  }
  return transformExtent(extent, sourceProjection, userProjection);
}

/**
 * Return an extent transformed from the user projection.  If no user projection
 * is set, the original extent is returned.
 * @param {import("./extent.js").Extent} extent Input extent.
 * @param {ProjectionLike} destProjection The destination projection.
 * @return {import("./extent.js").Extent} The input extent transformed.
 */
function fromUserExtent(extent, destProjection) {
  if (!userProjection) {
    return extent;
  }
  return transformExtent(extent, userProjection, destProjection);
}

/**
 * Return the resolution in user projection units per pixel. If no user projection
 * is set, or source or user projection are missing units, the original resolution
 * is returned.
 * @param {number} resolution Resolution in input projection units per pixel.
 * @param {ProjectionLike} sourceProjection The input projection.
 * @return {number} Resolution in user projection units per pixel.
 */
function toUserResolution(resolution, sourceProjection) {
  if (!userProjection) {
    return resolution;
  }
  const sourceMetersPerUnit = get(sourceProjection).getMetersPerUnit();
  const userMetersPerUnit = userProjection.getMetersPerUnit();
  return sourceMetersPerUnit && userMetersPerUnit
    ? (resolution * sourceMetersPerUnit) / userMetersPerUnit
    : resolution;
}

/**
 * Return the resolution in user projection units per pixel. If no user projection
 * is set, or source or user projection are missing units, the original resolution
 * is returned.
 * @param {number} resolution Resolution in user projection units per pixel.
 * @param {ProjectionLike} destProjection The destination projection.
 * @return {number} Resolution in destination projection units per pixel.
 */
function fromUserResolution(resolution, destProjection) {
  if (!userProjection) {
    return resolution;
  }
  const destMetersPerUnit = get(destProjection).getMetersPerUnit();
  const userMetersPerUnit = userProjection.getMetersPerUnit();
  return destMetersPerUnit && userMetersPerUnit
    ? (resolution * userMetersPerUnit) / destMetersPerUnit
    : resolution;
}

/**
 * Creates a safe coordinate transform function from a coordinate transform function.
 * "Safe" means that it can handle wrapping of x-coordinates for global projections,
 * and that coordinates exceeding the source projection validity extent's range will be
 * clamped to the validity range.
 * @param {Projection} sourceProj Source projection.
 * @param {Projection} destProj Destination projection.
 * @param {function(import("./coordinate.js").Coordinate): import("./coordinate.js").Coordinate} transform Transform function (source to destination).
 * @return {function(import("./coordinate.js").Coordinate): import("./coordinate.js").Coordinate} Safe transform function (source to destination).
 */
function createSafeCoordinateTransform(sourceProj, destProj, transform) {
  return function (coord) {
    let transformed, worldsAway;
    if (sourceProj.canWrapX()) {
      const sourceExtent = sourceProj.getExtent();
      const sourceExtentWidth = (0,_extent_js__WEBPACK_IMPORTED_MODULE_6__.getWidth)(sourceExtent);
      coord = coord.slice(0);
      worldsAway = (0,_coordinate_js__WEBPACK_IMPORTED_MODULE_7__.getWorldsAway)(coord, sourceProj, sourceExtentWidth);
      if (worldsAway) {
        // Move x to the real world
        coord[0] = coord[0] - worldsAway * sourceExtentWidth;
      }
      coord[0] = (0,_math_js__WEBPACK_IMPORTED_MODULE_5__.clamp)(coord[0], sourceExtent[0], sourceExtent[2]);
      coord[1] = (0,_math_js__WEBPACK_IMPORTED_MODULE_5__.clamp)(coord[1], sourceExtent[1], sourceExtent[3]);
      transformed = transform(coord);
    } else {
      transformed = transform(coord);
    }
    if (worldsAway && destProj.canWrapX()) {
      // Move transformed coordinate back to the offset world
      transformed[0] += worldsAway * (0,_extent_js__WEBPACK_IMPORTED_MODULE_6__.getWidth)(destProj.getExtent());
    }
    return transformed;
  };
}

/**
 * Add transforms to and from EPSG:4326 and EPSG:3857.  This function is called
 * by when this module is executed and should only need to be called again after
 * `clearAllProjections()` is called (e.g. in tests).
 */
function addCommon() {
  // Add transformations that don't alter coordinates to convert within set of
  // projections with equal meaning.
  addEquivalentProjections(_proj_epsg3857_js__WEBPACK_IMPORTED_MODULE_9__.PROJECTIONS);
  addEquivalentProjections(_proj_epsg4326_js__WEBPACK_IMPORTED_MODULE_10__.PROJECTIONS);
  // Add transformations to convert EPSG:4326 like coordinates to EPSG:3857 like
  // coordinates and back.
  addEquivalentTransforms(
    _proj_epsg4326_js__WEBPACK_IMPORTED_MODULE_10__.PROJECTIONS,
    _proj_epsg3857_js__WEBPACK_IMPORTED_MODULE_9__.PROJECTIONS,
    _proj_epsg3857_js__WEBPACK_IMPORTED_MODULE_9__.fromEPSG4326,
    _proj_epsg3857_js__WEBPACK_IMPORTED_MODULE_9__.toEPSG4326,
  );
}

addCommon();


/***/ }),

/***/ "./node_modules/ol/proj/Projection.js":
/*!********************************************!*\
  !*** ./node_modules/ol/proj/Projection.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Units_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Units.js */ "./node_modules/ol/proj/Units.js");
/**
 * @module ol/proj/Projection
 */


/**
 * @typedef {Object} Options
 * @property {string} code The SRS identifier code, e.g. `EPSG:4326`.
 * @property {import("./Units.js").Units} [units] Units. Required unless a
 * proj4 projection is defined for `code`.
 * @property {import("../extent.js").Extent} [extent] The validity extent for the SRS.
 * @property {string} [axisOrientation='enu'] The axis orientation as specified in Proj4.
 * @property {boolean} [global=false] Whether the projection is valid for the whole globe.
 * @property {number} [metersPerUnit] The meters per unit for the SRS.
 * If not provided, the `units` are used to get the meters per unit from the {@link METERS_PER_UNIT}
 * lookup table.
 * @property {import("../extent.js").Extent} [worldExtent] The world extent for the SRS.
 * @property {function(number, import("../coordinate.js").Coordinate):number} [getPointResolution]
 * Function to determine resolution at a point. The function is called with a
 * `number` view resolution and a {@link module:ol/coordinate~Coordinate} as arguments, and returns
 * the `number` resolution in projection units at the passed coordinate. If this is `undefined`,
 * the default {@link module:ol/proj.getPointResolution} function will be used.
 */

/**
 * @classdesc
 * Projection definition class. One of these is created for each projection
 * supported in the application and stored in the {@link module:ol/proj} namespace.
 * You can use these in applications, but this is not required, as API params
 * and options use {@link module:ol/proj~ProjectionLike} which means the simple string
 * code will suffice.
 *
 * You can use {@link module:ol/proj.get} to retrieve the object for a particular
 * projection.
 *
 * The library includes definitions for `EPSG:4326` and `EPSG:3857`, together
 * with the following aliases:
 * * `EPSG:4326`: CRS:84, urn:ogc:def:crs:EPSG:6.6:4326,
 *     urn:ogc:def:crs:OGC:1.3:CRS84, urn:ogc:def:crs:OGC:2:84,
 *     http://www.opengis.net/gml/srs/epsg.xml#4326,
 *     urn:x-ogc:def:crs:EPSG:4326
 * * `EPSG:3857`: EPSG:102100, EPSG:102113, EPSG:900913,
 *     urn:ogc:def:crs:EPSG:6.18:3:3857,
 *     http://www.opengis.net/gml/srs/epsg.xml#3857
 *
 * If you use [proj4js](https://github.com/proj4js/proj4js), aliases can
 * be added using `proj4.defs()`. After all required projection definitions are
 * added, call the {@link module:ol/proj/proj4.register} function.
 *
 * @api
 */
class Projection {
  /**
   * @param {Options} options Projection options.
   */
  constructor(options) {
    /**
     * @private
     * @type {string}
     */
    this.code_ = options.code;

    /**
     * Units of projected coordinates. When set to `TILE_PIXELS`, a
     * `this.extent_` and `this.worldExtent_` must be configured properly for each
     * tile.
     * @private
     * @type {import("./Units.js").Units}
     */
    this.units_ = /** @type {import("./Units.js").Units} */ (options.units);

    /**
     * Validity extent of the projection in projected coordinates. For projections
     * with `TILE_PIXELS` units, this is the extent of the tile in
     * tile pixel space.
     * @private
     * @type {import("../extent.js").Extent}
     */
    this.extent_ = options.extent !== undefined ? options.extent : null;

    /**
     * Extent of the world in EPSG:4326. For projections with
     * `TILE_PIXELS` units, this is the extent of the tile in
     * projected coordinate space.
     * @private
     * @type {import("../extent.js").Extent}
     */
    this.worldExtent_ =
      options.worldExtent !== undefined ? options.worldExtent : null;

    /**
     * @private
     * @type {string}
     */
    this.axisOrientation_ =
      options.axisOrientation !== undefined ? options.axisOrientation : 'enu';

    /**
     * @private
     * @type {boolean}
     */
    this.global_ = options.global !== undefined ? options.global : false;

    /**
     * @private
     * @type {boolean}
     */
    this.canWrapX_ = !!(this.global_ && this.extent_);

    /**
     * @private
     * @type {function(number, import("../coordinate.js").Coordinate):number|undefined}
     */
    this.getPointResolutionFunc_ = options.getPointResolution;

    /**
     * @private
     * @type {import("../tilegrid/TileGrid.js").default}
     */
    this.defaultTileGrid_ = null;

    /**
     * @private
     * @type {number|undefined}
     */
    this.metersPerUnit_ = options.metersPerUnit;
  }

  /**
   * @return {boolean} The projection is suitable for wrapping the x-axis
   */
  canWrapX() {
    return this.canWrapX_;
  }

  /**
   * Get the code for this projection, e.g. 'EPSG:4326'.
   * @return {string} Code.
   * @api
   */
  getCode() {
    return this.code_;
  }

  /**
   * Get the validity extent for this projection.
   * @return {import("../extent.js").Extent} Extent.
   * @api
   */
  getExtent() {
    return this.extent_;
  }

  /**
   * Get the units of this projection.
   * @return {import("./Units.js").Units} Units.
   * @api
   */
  getUnits() {
    return this.units_;
  }

  /**
   * Get the amount of meters per unit of this projection.  If the projection is
   * not configured with `metersPerUnit` or a units identifier, the return is
   * `undefined`.
   * @return {number|undefined} Meters.
   * @api
   */
  getMetersPerUnit() {
    return this.metersPerUnit_ || _Units_js__WEBPACK_IMPORTED_MODULE_0__.METERS_PER_UNIT[this.units_];
  }

  /**
   * Get the world extent for this projection.
   * @return {import("../extent.js").Extent} Extent.
   * @api
   */
  getWorldExtent() {
    return this.worldExtent_;
  }

  /**
   * Get the axis orientation of this projection.
   * Example values are:
   * enu - the default easting, northing, elevation.
   * neu - northing, easting, up - useful for "lat/long" geographic coordinates,
   *     or south orientated transverse mercator.
   * wnu - westing, northing, up - some planetary coordinate systems have
   *     "west positive" coordinate systems
   * @return {string} Axis orientation.
   * @api
   */
  getAxisOrientation() {
    return this.axisOrientation_;
  }

  /**
   * Is this projection a global projection which spans the whole world?
   * @return {boolean} Whether the projection is global.
   * @api
   */
  isGlobal() {
    return this.global_;
  }

  /**
   * Set if the projection is a global projection which spans the whole world
   * @param {boolean} global Whether the projection is global.
   * @api
   */
  setGlobal(global) {
    this.global_ = global;
    this.canWrapX_ = !!(global && this.extent_);
  }

  /**
   * @return {import("../tilegrid/TileGrid.js").default} The default tile grid.
   */
  getDefaultTileGrid() {
    return this.defaultTileGrid_;
  }

  /**
   * @param {import("../tilegrid/TileGrid.js").default} tileGrid The default tile grid.
   */
  setDefaultTileGrid(tileGrid) {
    this.defaultTileGrid_ = tileGrid;
  }

  /**
   * Set the validity extent for this projection.
   * @param {import("../extent.js").Extent} extent Extent.
   * @api
   */
  setExtent(extent) {
    this.extent_ = extent;
    this.canWrapX_ = !!(this.global_ && extent);
  }

  /**
   * Set the world extent for this projection.
   * @param {import("../extent.js").Extent} worldExtent World extent
   *     [minlon, minlat, maxlon, maxlat].
   * @api
   */
  setWorldExtent(worldExtent) {
    this.worldExtent_ = worldExtent;
  }

  /**
   * Set the getPointResolution function (see {@link module:ol/proj.getPointResolution}
   * for this projection.
   * @param {function(number, import("../coordinate.js").Coordinate):number} func Function
   * @api
   */
  setGetPointResolution(func) {
    this.getPointResolutionFunc_ = func;
  }

  /**
   * Get the custom point resolution function for this projection (if set).
   * @return {function(number, import("../coordinate.js").Coordinate):number|undefined} The custom point
   * resolution function (if set).
   */
  getPointResolutionFunc() {
    return this.getPointResolutionFunc_;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Projection);


/***/ }),

/***/ "./node_modules/ol/proj/Units.js":
/*!***************************************!*\
  !*** ./node_modules/ol/proj/Units.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   METERS_PER_UNIT: () => (/* binding */ METERS_PER_UNIT),
/* harmony export */   fromCode: () => (/* binding */ fromCode)
/* harmony export */ });
/**
 * @module ol/proj/Units
 */

/**
 * @typedef {'radians' | 'degrees' | 'ft' | 'm' | 'pixels' | 'tile-pixels' | 'us-ft'} Units
 * Projection units.
 */

/**
 * See http://duff.ess.washington.edu/data/raster/drg/docs/geotiff.txt
 * @type {Object<number, Units>}
 */
const unitByCode = {
  '9001': 'm',
  '9002': 'ft',
  '9003': 'us-ft',
  '9101': 'radians',
  '9102': 'degrees',
};

/**
 * @param {number} code Unit code.
 * @return {Units} Units.
 */
function fromCode(code) {
  return unitByCode[code];
}

/**
 * @typedef {Object} MetersPerUnitLookup
 * @property {number} radians Radians
 * @property {number} degrees Degrees
 * @property {number} ft  Feet
 * @property {number} m Meters
 * @property {number} us-ft US feet
 */

/**
 * Meters per unit lookup table.
 * @const
 * @type {MetersPerUnitLookup}
 * @api
 */
const METERS_PER_UNIT = {
  // use the radius of the Normal sphere
  'radians': 6370997 / (2 * Math.PI),
  'degrees': (2 * Math.PI * 6370997) / 360,
  'ft': 0.3048,
  'm': 1,
  'us-ft': 1200 / 3937,
};


/***/ }),

/***/ "./node_modules/ol/proj/epsg3857.js":
/*!******************************************!*\
  !*** ./node_modules/ol/proj/epsg3857.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EXTENT: () => (/* binding */ EXTENT),
/* harmony export */   HALF_SIZE: () => (/* binding */ HALF_SIZE),
/* harmony export */   MAX_SAFE_Y: () => (/* binding */ MAX_SAFE_Y),
/* harmony export */   PROJECTIONS: () => (/* binding */ PROJECTIONS),
/* harmony export */   RADIUS: () => (/* binding */ RADIUS),
/* harmony export */   WORLD_EXTENT: () => (/* binding */ WORLD_EXTENT),
/* harmony export */   fromEPSG4326: () => (/* binding */ fromEPSG4326),
/* harmony export */   toEPSG4326: () => (/* binding */ toEPSG4326)
/* harmony export */ });
/* harmony import */ var _Projection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Projection.js */ "./node_modules/ol/proj/Projection.js");
/**
 * @module ol/proj/epsg3857
 */


/**
 * Radius of WGS84 sphere
 *
 * @const
 * @type {number}
 */
const RADIUS = 6378137;

/**
 * @const
 * @type {number}
 */
const HALF_SIZE = Math.PI * RADIUS;

/**
 * @const
 * @type {import("../extent.js").Extent}
 */
const EXTENT = [-HALF_SIZE, -HALF_SIZE, HALF_SIZE, HALF_SIZE];

/**
 * @const
 * @type {import("../extent.js").Extent}
 */
const WORLD_EXTENT = [-180, -85, 180, 85];

/**
 * Maximum safe value in y direction
 * @const
 * @type {number}
 */
const MAX_SAFE_Y = RADIUS * Math.log(Math.tan(Math.PI / 2));

/**
 * @classdesc
 * Projection object for web/spherical Mercator (EPSG:3857).
 */
class EPSG3857Projection extends _Projection_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * @param {string} code Code.
   */
  constructor(code) {
    super({
      code: code,
      units: 'm',
      extent: EXTENT,
      global: true,
      worldExtent: WORLD_EXTENT,
      getPointResolution: function (resolution, point) {
        return resolution / Math.cosh(point[1] / RADIUS);
      },
    });
  }
}

/**
 * Projections equal to EPSG:3857.
 *
 * @const
 * @type {Array<import("./Projection.js").default>}
 */
const PROJECTIONS = [
  new EPSG3857Projection('EPSG:3857'),
  new EPSG3857Projection('EPSG:102100'),
  new EPSG3857Projection('EPSG:102113'),
  new EPSG3857Projection('EPSG:900913'),
  new EPSG3857Projection('http://www.opengis.net/def/crs/EPSG/0/3857'),
  new EPSG3857Projection('http://www.opengis.net/gml/srs/epsg.xml#3857'),
];

/**
 * Transformation from EPSG:4326 to EPSG:3857.
 *
 * @param {Array<number>} input Input array of coordinate values.
 * @param {Array<number>} [output] Output array of coordinate values.
 * @param {number} [dimension] Dimension (default is `2`).
 * @return {Array<number>} Output array of coordinate values.
 */
function fromEPSG4326(input, output, dimension) {
  const length = input.length;
  dimension = dimension > 1 ? dimension : 2;
  if (output === undefined) {
    if (dimension > 2) {
      // preserve values beyond second dimension
      output = input.slice();
    } else {
      output = new Array(length);
    }
  }
  for (let i = 0; i < length; i += dimension) {
    output[i] = (HALF_SIZE * input[i]) / 180;
    let y = RADIUS * Math.log(Math.tan((Math.PI * (+input[i + 1] + 90)) / 360));
    if (y > MAX_SAFE_Y) {
      y = MAX_SAFE_Y;
    } else if (y < -MAX_SAFE_Y) {
      y = -MAX_SAFE_Y;
    }
    output[i + 1] = y;
  }
  return output;
}

/**
 * Transformation from EPSG:3857 to EPSG:4326.
 *
 * @param {Array<number>} input Input array of coordinate values.
 * @param {Array<number>} [output] Output array of coordinate values.
 * @param {number} [dimension] Dimension (default is `2`).
 * @return {Array<number>} Output array of coordinate values.
 */
function toEPSG4326(input, output, dimension) {
  const length = input.length;
  dimension = dimension > 1 ? dimension : 2;
  if (output === undefined) {
    if (dimension > 2) {
      // preserve values beyond second dimension
      output = input.slice();
    } else {
      output = new Array(length);
    }
  }
  for (let i = 0; i < length; i += dimension) {
    output[i] = (180 * input[i]) / HALF_SIZE;
    output[i + 1] =
      (360 * Math.atan(Math.exp(input[i + 1] / RADIUS))) / Math.PI - 90;
  }
  return output;
}


/***/ }),

/***/ "./node_modules/ol/proj/epsg4326.js":
/*!******************************************!*\
  !*** ./node_modules/ol/proj/epsg4326.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EXTENT: () => (/* binding */ EXTENT),
/* harmony export */   METERS_PER_UNIT: () => (/* binding */ METERS_PER_UNIT),
/* harmony export */   PROJECTIONS: () => (/* binding */ PROJECTIONS),
/* harmony export */   RADIUS: () => (/* binding */ RADIUS)
/* harmony export */ });
/* harmony import */ var _Projection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Projection.js */ "./node_modules/ol/proj/Projection.js");
/**
 * @module ol/proj/epsg4326
 */


/**
 * Semi-major radius of the WGS84 ellipsoid.
 *
 * @const
 * @type {number}
 */
const RADIUS = 6378137;

/**
 * Extent of the EPSG:4326 projection which is the whole world.
 *
 * @const
 * @type {import("../extent.js").Extent}
 */
const EXTENT = [-180, -90, 180, 90];

/**
 * @const
 * @type {number}
 */
const METERS_PER_UNIT = (Math.PI * RADIUS) / 180;

/**
 * @classdesc
 * Projection object for WGS84 geographic coordinates (EPSG:4326).
 *
 * Note that OpenLayers does not strictly comply with the EPSG definition.
 * The EPSG registry defines 4326 as a CRS for Latitude,Longitude (y,x).
 * OpenLayers treats EPSG:4326 as a pseudo-projection, with x,y coordinates.
 */
class EPSG4326Projection extends _Projection_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * @param {string} code Code.
   * @param {string} [axisOrientation] Axis orientation.
   */
  constructor(code, axisOrientation) {
    super({
      code: code,
      units: 'degrees',
      extent: EXTENT,
      axisOrientation: axisOrientation,
      global: true,
      metersPerUnit: METERS_PER_UNIT,
      worldExtent: EXTENT,
    });
  }
}

/**
 * Projections equal to EPSG:4326.
 *
 * @const
 * @type {Array<import("./Projection.js").default>}
 */
const PROJECTIONS = [
  new EPSG4326Projection('CRS:84'),
  new EPSG4326Projection('EPSG:4326', 'neu'),
  new EPSG4326Projection('urn:ogc:def:crs:OGC:1.3:CRS84'),
  new EPSG4326Projection('urn:ogc:def:crs:OGC:2:84'),
  new EPSG4326Projection('http://www.opengis.net/def/crs/OGC/1.3/CRS84'),
  new EPSG4326Projection('http://www.opengis.net/gml/srs/epsg.xml#4326', 'neu'),
  new EPSG4326Projection('http://www.opengis.net/def/crs/EPSG/0/4326', 'neu'),
];


/***/ }),

/***/ "./node_modules/ol/proj/projections.js":
/*!*********************************************!*\
  !*** ./node_modules/ol/proj/projections.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   clear: () => (/* binding */ clear),
/* harmony export */   get: () => (/* binding */ get)
/* harmony export */ });
/**
 * @module ol/proj/projections
 */

/**
 * @type {Object<string, import("./Projection.js").default>}
 */
let cache = {};

/**
 * Clear the projections cache.
 */
function clear() {
  cache = {};
}

/**
 * Get a cached projection by code.
 * @param {string} code The code for the projection.
 * @return {import("./Projection.js").default} The projection (if cached).
 */
function get(code) {
  return (
    cache[code] ||
    cache[code.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/, 'EPSG:$3')] ||
    null
  );
}

/**
 * Add a projection to the cache.
 * @param {string} code The projection code.
 * @param {import("./Projection.js").default} projection The projection to cache.
 */
function add(code, projection) {
  cache[code] = projection;
}


/***/ }),

/***/ "./node_modules/ol/proj/transforms.js":
/*!********************************************!*\
  !*** ./node_modules/ol/proj/transforms.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   clear: () => (/* binding */ clear),
/* harmony export */   get: () => (/* binding */ get),
/* harmony export */   remove: () => (/* binding */ remove)
/* harmony export */ });
/* harmony import */ var _obj_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../obj.js */ "./node_modules/ol/obj.js");
/**
 * @module ol/proj/transforms
 */


/**
 * @private
 * @type {!Object<string, Object<string, import("../proj.js").TransformFunction>>}
 */
let transforms = {};

/**
 * Clear the transform cache.
 */
function clear() {
  transforms = {};
}

/**
 * Registers a conversion function to convert coordinates from the source
 * projection to the destination projection.
 *
 * @param {import("./Projection.js").default} source Source.
 * @param {import("./Projection.js").default} destination Destination.
 * @param {import("../proj.js").TransformFunction} transformFn Transform.
 */
function add(source, destination, transformFn) {
  const sourceCode = source.getCode();
  const destinationCode = destination.getCode();
  if (!(sourceCode in transforms)) {
    transforms[sourceCode] = {};
  }
  transforms[sourceCode][destinationCode] = transformFn;
}

/**
 * Unregisters the conversion function to convert coordinates from the source
 * projection to the destination projection.  This method is used to clean up
 * cached transforms during testing.
 *
 * @param {import("./Projection.js").default} source Source projection.
 * @param {import("./Projection.js").default} destination Destination projection.
 * @return {import("../proj.js").TransformFunction} transformFn The unregistered transform.
 */
function remove(source, destination) {
  const sourceCode = source.getCode();
  const destinationCode = destination.getCode();
  const transform = transforms[sourceCode][destinationCode];
  delete transforms[sourceCode][destinationCode];
  if ((0,_obj_js__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(transforms[sourceCode])) {
    delete transforms[sourceCode];
  }
  return transform;
}

/**
 * Get a transform given a source code and a destination code.
 * @param {string} sourceCode The code for the source projection.
 * @param {string} destinationCode The code for the destination projection.
 * @return {import("../proj.js").TransformFunction|undefined} The transform function (if found).
 */
function get(sourceCode, destinationCode) {
  let transform;
  if (sourceCode in transforms && destinationCode in transforms[sourceCode]) {
    transform = transforms[sourceCode][destinationCode];
  }
  return transform;
}


/***/ }),

/***/ "./node_modules/ol/sphere.js":
/*!***********************************!*\
  !*** ./node_modules/ol/sphere.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_RADIUS: () => (/* binding */ DEFAULT_RADIUS),
/* harmony export */   getArea: () => (/* binding */ getArea),
/* harmony export */   getDistance: () => (/* binding */ getDistance),
/* harmony export */   getLength: () => (/* binding */ getLength),
/* harmony export */   offset: () => (/* binding */ offset)
/* harmony export */ });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math.js */ "./node_modules/ol/math.js");
/**
 * @module ol/sphere
 */


/**
 * Object literal with options for the {@link getLength} or {@link getArea}
 * functions.
 * @typedef {Object} SphereMetricOptions
 * @property {import("./proj.js").ProjectionLike} [projection='EPSG:3857']
 * Projection of the  geometry.  By default, the geometry is assumed to be in
 * Web Mercator.
 * @property {number} [radius=6371008.8] Sphere radius.  By default, the
 * [mean Earth radius](https://en.wikipedia.org/wiki/Earth_radius#Mean_radius)
 * for the WGS84 ellipsoid is used.
 */

/**
 * The mean Earth radius (1/3 * (2a + b)) for the WGS84 ellipsoid.
 * https://en.wikipedia.org/wiki/Earth_radius#Mean_radius
 * @type {number}
 */
const DEFAULT_RADIUS = 6371008.8;

/**
 * Get the great circle distance (in meters) between two geographic coordinates.
 * @param {Array} c1 Starting coordinate.
 * @param {Array} c2 Ending coordinate.
 * @param {number} [radius] The sphere radius to use.  Defaults to the Earth's
 *     mean radius using the WGS84 ellipsoid.
 * @return {number} The great circle distance between the points (in meters).
 * @api
 */
function getDistance(c1, c2, radius) {
  radius = radius || DEFAULT_RADIUS;
  const lat1 = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.toRadians)(c1[1]);
  const lat2 = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.toRadians)(c2[1]);
  const deltaLatBy2 = (lat2 - lat1) / 2;
  const deltaLonBy2 = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.toRadians)(c2[0] - c1[0]) / 2;
  const a =
    Math.sin(deltaLatBy2) * Math.sin(deltaLatBy2) +
    Math.sin(deltaLonBy2) *
      Math.sin(deltaLonBy2) *
      Math.cos(lat1) *
      Math.cos(lat2);
  return 2 * radius * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

/**
 * Get the cumulative great circle length of linestring coordinates (geographic).
 * @param {Array} coordinates Linestring coordinates.
 * @param {number} radius The sphere radius to use.
 * @return {number} The length (in meters).
 */
function getLengthInternal(coordinates, radius) {
  let length = 0;
  for (let i = 0, ii = coordinates.length; i < ii - 1; ++i) {
    length += getDistance(coordinates[i], coordinates[i + 1], radius);
  }
  return length;
}

/**
 * Get the spherical length of a geometry.  This length is the sum of the
 * great circle distances between coordinates.  For polygons, the length is
 * the sum of all rings.  For points, the length is zero.  For multi-part
 * geometries, the length is the sum of the length of each part.
 * @param {import("./geom/Geometry.js").default} geometry A geometry.
 * @param {SphereMetricOptions} [options] Options for the
 * length calculation.  By default, geometries are assumed to be in 'EPSG:3857'.
 * You can change this by providing a `projection` option.
 * @return {number} The spherical length (in meters).
 * @api
 */
function getLength(geometry, options) {
  options = options || {};
  const radius = options.radius || DEFAULT_RADIUS;
  const projection = options.projection || 'EPSG:3857';
  const type = geometry.getType();
  if (type !== 'GeometryCollection') {
    geometry = geometry.clone().transform(projection, 'EPSG:4326');
  }
  let length = 0;
  let coordinates, coords, i, ii, j, jj;
  switch (type) {
    case 'Point':
    case 'MultiPoint': {
      break;
    }
    case 'LineString':
    case 'LinearRing': {
      coordinates = /** @type {import("./geom/SimpleGeometry.js").default} */ (
        geometry
      ).getCoordinates();
      length = getLengthInternal(coordinates, radius);
      break;
    }
    case 'MultiLineString':
    case 'Polygon': {
      coordinates = /** @type {import("./geom/SimpleGeometry.js").default} */ (
        geometry
      ).getCoordinates();
      for (i = 0, ii = coordinates.length; i < ii; ++i) {
        length += getLengthInternal(coordinates[i], radius);
      }
      break;
    }
    case 'MultiPolygon': {
      coordinates = /** @type {import("./geom/SimpleGeometry.js").default} */ (
        geometry
      ).getCoordinates();
      for (i = 0, ii = coordinates.length; i < ii; ++i) {
        coords = coordinates[i];
        for (j = 0, jj = coords.length; j < jj; ++j) {
          length += getLengthInternal(coords[j], radius);
        }
      }
      break;
    }
    case 'GeometryCollection': {
      const geometries =
        /** @type {import("./geom/GeometryCollection.js").default} */ (
          geometry
        ).getGeometries();
      for (i = 0, ii = geometries.length; i < ii; ++i) {
        length += getLength(geometries[i], options);
      }
      break;
    }
    default: {
      throw new Error('Unsupported geometry type: ' + type);
    }
  }
  return length;
}

/**
 * Returns the spherical area for a list of coordinates.
 *
 * [Reference](https://trs.jpl.nasa.gov/handle/2014/40409)
 * Robert. G. Chamberlain and William H. Duquette, "Some Algorithms for
 * Polygons on a Sphere", JPL Publication 07-03, Jet Propulsion
 * Laboratory, Pasadena, CA, June 2007
 *
 * @param {Array<import("./coordinate.js").Coordinate>} coordinates List of coordinates of a linear
 * ring. If the ring is oriented clockwise, the area will be positive,
 * otherwise it will be negative.
 * @param {number} radius The sphere radius.
 * @return {number} Area (in square meters).
 */
function getAreaInternal(coordinates, radius) {
  let area = 0;
  const len = coordinates.length;
  let x1 = coordinates[len - 1][0];
  let y1 = coordinates[len - 1][1];
  for (let i = 0; i < len; i++) {
    const x2 = coordinates[i][0];
    const y2 = coordinates[i][1];
    area +=
      (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.toRadians)(x2 - x1) *
      (2 + Math.sin((0,_math_js__WEBPACK_IMPORTED_MODULE_0__.toRadians)(y1)) + Math.sin((0,_math_js__WEBPACK_IMPORTED_MODULE_0__.toRadians)(y2)));
    x1 = x2;
    y1 = y2;
  }
  return (area * radius * radius) / 2.0;
}

/**
 * Get the spherical area of a geometry.  This is the area (in meters) assuming
 * that polygon edges are segments of great circles on a sphere.
 * @param {import("./geom/Geometry.js").default} geometry A geometry.
 * @param {SphereMetricOptions} [options] Options for the area
 *     calculation.  By default, geometries are assumed to be in 'EPSG:3857'.
 *     You can change this by providing a `projection` option.
 * @return {number} The spherical area (in square meters).
 * @api
 */
function getArea(geometry, options) {
  options = options || {};
  const radius = options.radius || DEFAULT_RADIUS;
  const projection = options.projection || 'EPSG:3857';
  const type = geometry.getType();
  if (type !== 'GeometryCollection') {
    geometry = geometry.clone().transform(projection, 'EPSG:4326');
  }
  let area = 0;
  let coordinates, coords, i, ii, j, jj;
  switch (type) {
    case 'Point':
    case 'MultiPoint':
    case 'LineString':
    case 'MultiLineString':
    case 'LinearRing': {
      break;
    }
    case 'Polygon': {
      coordinates = /** @type {import("./geom/Polygon.js").default} */ (
        geometry
      ).getCoordinates();
      area = Math.abs(getAreaInternal(coordinates[0], radius));
      for (i = 1, ii = coordinates.length; i < ii; ++i) {
        area -= Math.abs(getAreaInternal(coordinates[i], radius));
      }
      break;
    }
    case 'MultiPolygon': {
      coordinates = /** @type {import("./geom/SimpleGeometry.js").default} */ (
        geometry
      ).getCoordinates();
      for (i = 0, ii = coordinates.length; i < ii; ++i) {
        coords = coordinates[i];
        area += Math.abs(getAreaInternal(coords[0], radius));
        for (j = 1, jj = coords.length; j < jj; ++j) {
          area -= Math.abs(getAreaInternal(coords[j], radius));
        }
      }
      break;
    }
    case 'GeometryCollection': {
      const geometries =
        /** @type {import("./geom/GeometryCollection.js").default} */ (
          geometry
        ).getGeometries();
      for (i = 0, ii = geometries.length; i < ii; ++i) {
        area += getArea(geometries[i], options);
      }
      break;
    }
    default: {
      throw new Error('Unsupported geometry type: ' + type);
    }
  }
  return area;
}

/**
 * Returns the coordinate at the given distance and bearing from `c1`.
 *
 * @param {import("./coordinate.js").Coordinate} c1 The origin point (`[lon, lat]` in degrees).
 * @param {number} distance The great-circle distance between the origin
 *     point and the target point.
 * @param {number} bearing The bearing (in radians).
 * @param {number} [radius] The sphere radius to use.  Defaults to the Earth's
 *     mean radius using the WGS84 ellipsoid.
 * @return {import("./coordinate.js").Coordinate} The target point.
 */
function offset(c1, distance, bearing, radius) {
  radius = radius || DEFAULT_RADIUS;
  const lat1 = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.toRadians)(c1[1]);
  const lon1 = (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.toRadians)(c1[0]);
  const dByR = distance / radius;
  const lat = Math.asin(
    Math.sin(lat1) * Math.cos(dByR) +
      Math.cos(lat1) * Math.sin(dByR) * Math.cos(bearing),
  );
  const lon =
    lon1 +
    Math.atan2(
      Math.sin(bearing) * Math.sin(dByR) * Math.cos(lat1),
      Math.cos(dByR) - Math.sin(lat1) * Math.sin(lat),
    );
  return [(0,_math_js__WEBPACK_IMPORTED_MODULE_0__.toDegrees)(lon), (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.toDegrees)(lat)];
}


/***/ }),

/***/ "./node_modules/ol/string.js":
/*!***********************************!*\
  !*** ./node_modules/ol/string.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   compareVersions: () => (/* binding */ compareVersions),
/* harmony export */   padNumber: () => (/* binding */ padNumber)
/* harmony export */ });
/**
 * @module ol/string
 */

/**
 * @param {number} number Number to be formatted
 * @param {number} width The desired width
 * @param {number} [precision] Precision of the output string (i.e. number of decimal places)
 * @return {string} Formatted string
 */
function padNumber(number, width, precision) {
  const numberString =
    precision !== undefined ? number.toFixed(precision) : '' + number;
  let decimal = numberString.indexOf('.');
  decimal = decimal === -1 ? numberString.length : decimal;
  return decimal > width
    ? numberString
    : new Array(1 + width - decimal).join('0') + numberString;
}

/**
 * Adapted from https://github.com/omichelsen/compare-versions/blob/master/index.js
 * @param {string|number} v1 First version
 * @param {string|number} v2 Second version
 * @return {number} Value
 */
function compareVersions(v1, v2) {
  const s1 = ('' + v1).split('.');
  const s2 = ('' + v2).split('.');

  for (let i = 0; i < Math.max(s1.length, s2.length); i++) {
    const n1 = parseInt(s1[i] || '0', 10);
    const n2 = parseInt(s2[i] || '0', 10);

    if (n1 > n2) {
      return 1;
    }
    if (n2 > n1) {
      return -1;
    }
  }

  return 0;
}


/***/ }),

/***/ "./node_modules/ol/transform.js":
/*!**************************************!*\
  !*** ./node_modules/ol/transform.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   apply: () => (/* binding */ apply),
/* harmony export */   compose: () => (/* binding */ compose),
/* harmony export */   composeCssTransform: () => (/* binding */ composeCssTransform),
/* harmony export */   create: () => (/* binding */ create),
/* harmony export */   determinant: () => (/* binding */ determinant),
/* harmony export */   invert: () => (/* binding */ invert),
/* harmony export */   makeInverse: () => (/* binding */ makeInverse),
/* harmony export */   makeScale: () => (/* binding */ makeScale),
/* harmony export */   multiply: () => (/* binding */ multiply),
/* harmony export */   reset: () => (/* binding */ reset),
/* harmony export */   rotate: () => (/* binding */ rotate),
/* harmony export */   scale: () => (/* binding */ scale),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   setFromArray: () => (/* binding */ setFromArray),
/* harmony export */   toString: () => (/* binding */ toString),
/* harmony export */   translate: () => (/* binding */ translate)
/* harmony export */ });
/* harmony import */ var _asserts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asserts.js */ "./node_modules/ol/asserts.js");
/**
 * @module ol/transform
 */


/**
 * An array representing an affine 2d transformation for use with
 * {@link module:ol/transform} functions. The array has 6 elements.
 * @typedef {!Array<number>} Transform
 * @api
 */

/**
 * Collection of affine 2d transformation functions. The functions work on an
 * array of 6 elements. The element order is compatible with the [SVGMatrix
 * interface](https://developer.mozilla.org/en-US/docs/Web/API/SVGMatrix) and is
 * a subset (elements a to f) of a 3×3 matrix:
 * ```
 * [ a c e ]
 * [ b d f ]
 * [ 0 0 1 ]
 * ```
 */

/**
 * @private
 * @type {Transform}
 */
const tmp_ = new Array(6);

/**
 * Create an identity transform.
 * @return {!Transform} Identity transform.
 */
function create() {
  return [1, 0, 0, 1, 0, 0];
}

/**
 * Resets the given transform to an identity transform.
 * @param {!Transform} transform Transform.
 * @return {!Transform} Transform.
 */
function reset(transform) {
  return set(transform, 1, 0, 0, 1, 0, 0);
}

/**
 * Multiply the underlying matrices of two transforms and return the result in
 * the first transform.
 * @param {!Transform} transform1 Transform parameters of matrix 1.
 * @param {!Transform} transform2 Transform parameters of matrix 2.
 * @return {!Transform} transform1 multiplied with transform2.
 */
function multiply(transform1, transform2) {
  const a1 = transform1[0];
  const b1 = transform1[1];
  const c1 = transform1[2];
  const d1 = transform1[3];
  const e1 = transform1[4];
  const f1 = transform1[5];
  const a2 = transform2[0];
  const b2 = transform2[1];
  const c2 = transform2[2];
  const d2 = transform2[3];
  const e2 = transform2[4];
  const f2 = transform2[5];

  transform1[0] = a1 * a2 + c1 * b2;
  transform1[1] = b1 * a2 + d1 * b2;
  transform1[2] = a1 * c2 + c1 * d2;
  transform1[3] = b1 * c2 + d1 * d2;
  transform1[4] = a1 * e2 + c1 * f2 + e1;
  transform1[5] = b1 * e2 + d1 * f2 + f1;

  return transform1;
}

/**
 * Set the transform components a-f on a given transform.
 * @param {!Transform} transform Transform.
 * @param {number} a The a component of the transform.
 * @param {number} b The b component of the transform.
 * @param {number} c The c component of the transform.
 * @param {number} d The d component of the transform.
 * @param {number} e The e component of the transform.
 * @param {number} f The f component of the transform.
 * @return {!Transform} Matrix with transform applied.
 */
function set(transform, a, b, c, d, e, f) {
  transform[0] = a;
  transform[1] = b;
  transform[2] = c;
  transform[3] = d;
  transform[4] = e;
  transform[5] = f;
  return transform;
}

/**
 * Set transform on one matrix from another matrix.
 * @param {!Transform} transform1 Matrix to set transform to.
 * @param {!Transform} transform2 Matrix to set transform from.
 * @return {!Transform} transform1 with transform from transform2 applied.
 */
function setFromArray(transform1, transform2) {
  transform1[0] = transform2[0];
  transform1[1] = transform2[1];
  transform1[2] = transform2[2];
  transform1[3] = transform2[3];
  transform1[4] = transform2[4];
  transform1[5] = transform2[5];
  return transform1;
}

/**
 * Transforms the given coordinate with the given transform returning the
 * resulting, transformed coordinate. The coordinate will be modified in-place.
 *
 * @param {Transform} transform The transformation.
 * @param {import("./coordinate.js").Coordinate|import("./pixel.js").Pixel} coordinate The coordinate to transform.
 * @return {import("./coordinate.js").Coordinate|import("./pixel.js").Pixel} return coordinate so that operations can be
 *     chained together.
 */
function apply(transform, coordinate) {
  const x = coordinate[0];
  const y = coordinate[1];
  coordinate[0] = transform[0] * x + transform[2] * y + transform[4];
  coordinate[1] = transform[1] * x + transform[3] * y + transform[5];
  return coordinate;
}

/**
 * Applies rotation to the given transform.
 * @param {!Transform} transform Transform.
 * @param {number} angle Angle in radians.
 * @return {!Transform} The rotated transform.
 */
function rotate(transform, angle) {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return multiply(transform, set(tmp_, cos, sin, -sin, cos, 0, 0));
}

/**
 * Applies scale to a given transform.
 * @param {!Transform} transform Transform.
 * @param {number} x Scale factor x.
 * @param {number} y Scale factor y.
 * @return {!Transform} The scaled transform.
 */
function scale(transform, x, y) {
  return multiply(transform, set(tmp_, x, 0, 0, y, 0, 0));
}

/**
 * Creates a scale transform.
 * @param {!Transform} target Transform to overwrite.
 * @param {number} x Scale factor x.
 * @param {number} y Scale factor y.
 * @return {!Transform} The scale transform.
 */
function makeScale(target, x, y) {
  return set(target, x, 0, 0, y, 0, 0);
}

/**
 * Applies translation to the given transform.
 * @param {!Transform} transform Transform.
 * @param {number} dx Translation x.
 * @param {number} dy Translation y.
 * @return {!Transform} The translated transform.
 */
function translate(transform, dx, dy) {
  return multiply(transform, set(tmp_, 1, 0, 0, 1, dx, dy));
}

/**
 * Creates a composite transform given an initial translation, scale, rotation, and
 * final translation (in that order only, not commutative).
 * @param {!Transform} transform The transform (will be modified in place).
 * @param {number} dx1 Initial translation x.
 * @param {number} dy1 Initial translation y.
 * @param {number} sx Scale factor x.
 * @param {number} sy Scale factor y.
 * @param {number} angle Rotation (in counter-clockwise radians).
 * @param {number} dx2 Final translation x.
 * @param {number} dy2 Final translation y.
 * @return {!Transform} The composite transform.
 */
function compose(transform, dx1, dy1, sx, sy, angle, dx2, dy2) {
  const sin = Math.sin(angle);
  const cos = Math.cos(angle);
  transform[0] = sx * cos;
  transform[1] = sy * sin;
  transform[2] = -sx * sin;
  transform[3] = sy * cos;
  transform[4] = dx2 * sx * cos - dy2 * sx * sin + dx1;
  transform[5] = dx2 * sy * sin + dy2 * sy * cos + dy1;
  return transform;
}

/**
 * Creates a composite transform given an initial translation, scale, rotation, and
 * final translation (in that order only, not commutative). The resulting transform
 * string can be applied as `transform` property of an HTMLElement's style.
 * @param {number} dx1 Initial translation x.
 * @param {number} dy1 Initial translation y.
 * @param {number} sx Scale factor x.
 * @param {number} sy Scale factor y.
 * @param {number} angle Rotation (in counter-clockwise radians).
 * @param {number} dx2 Final translation x.
 * @param {number} dy2 Final translation y.
 * @return {string} The composite css transform.
 * @api
 */
function composeCssTransform(dx1, dy1, sx, sy, angle, dx2, dy2) {
  return toString(compose(create(), dx1, dy1, sx, sy, angle, dx2, dy2));
}

/**
 * Invert the given transform.
 * @param {!Transform} source The source transform to invert.
 * @return {!Transform} The inverted (source) transform.
 */
function invert(source) {
  return makeInverse(source, source);
}

/**
 * Invert the given transform.
 * @param {!Transform} target Transform to be set as the inverse of
 *     the source transform.
 * @param {!Transform} source The source transform to invert.
 * @return {!Transform} The inverted (target) transform.
 */
function makeInverse(target, source) {
  const det = determinant(source);
  (0,_asserts_js__WEBPACK_IMPORTED_MODULE_0__.assert)(det !== 0, 'Transformation matrix cannot be inverted');

  const a = source[0];
  const b = source[1];
  const c = source[2];
  const d = source[3];
  const e = source[4];
  const f = source[5];

  target[0] = d / det;
  target[1] = -b / det;
  target[2] = -c / det;
  target[3] = a / det;
  target[4] = (c * f - d * e) / det;
  target[5] = -(a * f - b * e) / det;

  return target;
}

/**
 * Returns the determinant of the given matrix.
 * @param {!Transform} mat Matrix.
 * @return {number} Determinant.
 */
function determinant(mat) {
  return mat[0] * mat[3] - mat[1] * mat[2];
}

/**
 * @type {Array}
 */
const matrixPrecision = [1e6, 1e6, 1e6, 1e6, 2, 2];

/**
 * A rounded string version of the transform.  This can be used
 * for CSS transforms.
 * @param {!Transform} mat Matrix.
 * @return {string} The transform as a string.
 */
function toString(mat) {
  const transformString =
    'matrix(' +
    mat
      .map(
        (value, i) =>
          Math.round(value * matrixPrecision[i]) / matrixPrecision[i],
      )
      .join(', ') +
    ')';
  return transformString;
}


/***/ }),

/***/ "./node_modules/ol/util.js":
/*!*********************************!*\
  !*** ./node_modules/ol/util.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VERSION: () => (/* binding */ VERSION),
/* harmony export */   abstract: () => (/* binding */ abstract),
/* harmony export */   getUid: () => (/* binding */ getUid)
/* harmony export */ });
/**
 * @module ol/util
 */

/**
 * @return {never} Any return.
 */
function abstract() {
  throw new Error('Unimplemented abstract method.');
}

/**
 * Counter for getUid.
 * @type {number}
 * @private
 */
let uidCounter_ = 0;

/**
 * Gets a unique ID for an object. This mutates the object so that further calls
 * with the same object as a parameter returns the same value. Unique IDs are generated
 * as a strictly increasing sequence. Adapted from goog.getUid.
 *
 * @param {Object} obj The object to get the unique ID for.
 * @return {string} The unique ID for the object.
 * @api
 */
function getUid(obj) {
  return obj.ol_uid || (obj.ol_uid = String(++uidCounter_));
}

/**
 * OpenLayers version.
 * @type {string}
 */
const VERSION = '9.1.0';


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "http://localhost:3001/test-plugin/";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   components: () => (/* binding */ components),
/* harmony export */   localization: () => (/* binding */ localization)
/* harmony export */ });
/* harmony import */ var _components_MapClick_MapClick_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/MapClick/MapClick.component */ "./src/components/MapClick/MapClick.component.js");
/* harmony import */ var _components_MapClickResult_MapClickResult_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/MapClickResult/MapClickResult.component */ "./src/components/MapClickResult/MapClickResult.component.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages */ "./src/messages.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants/constants */ "./src/constants/constants.js");
/**
 * Author: Amr Samir
 * 
 * Description: 
 *  - This index file exports plugin's components and/or reducers and/or actions.
 */





_components_MapClick_MapClick_component__WEBPACK_IMPORTED_MODULE_0__["default"].Title = _constants_constants__WEBPACK_IMPORTED_MODULE_3__.LOCALIZATION_NAMESPACE + ":title";
_components_MapClick_MapClick_component__WEBPACK_IMPORTED_MODULE_0__["default"].Icon = _constants_constants__WEBPACK_IMPORTED_MODULE_3__.LOCALIZATION_NAMESPACE + ":icon";
var components = {
  YusufTrigger: _components_MapClick_MapClick_component__WEBPACK_IMPORTED_MODULE_0__["default"],
  YusufContainer: _components_MapClickResult_MapClickResult_component__WEBPACK_IMPORTED_MODULE_1__["default"]
};
var localization = {
  namespace: _constants_constants__WEBPACK_IMPORTED_MODULE_3__.LOCALIZATION_NAMESPACE,
  defaultLocalization: _messages__WEBPACK_IMPORTED_MODULE_2__["default"]
};

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU87QUFDbkI7QUFDTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ087Ozs7Ozs7VUNuQ1A7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVnRTtBQUNrQjtBQUNyQztBQUNrQjtBQUUvRHdOLCtFQUFRLENBQUNFLEtBQUssR0FBR3ZVLHdFQUFzQixHQUFHLFFBQVE7QUFDbERxVSwrRUFBUSxDQUFDalEsSUFBSSxHQUFHcEUsd0VBQXNCLEdBQUcsT0FBTztBQUVoRCxJQUFNQyxVQUFVLEdBQUc7RUFDZnVVLFlBQVksRUFBRUgsK0VBQVE7RUFDdEJJLGNBQWMsRUFBRXJVLDJGQUFjQTtBQUNsQyxDQUFDO0FBRUQsSUFBTXNVLFlBQVksR0FBRztFQUNqQkMsU0FBUyxFQUFFM1Usd0VBQXNCO0VBQ2pDc1UsbUJBQW1CLEVBQW5CQSxpREFBbUJBO0FBQ3ZCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYS1wbHVnaW4tbmV3LVl1c3VmL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9tYS1wbHVnaW4tbmV3LVl1c3VmLy4vc3JjL2NvbXBvbmVudHMvTWFwQ2xpY2tSZXN1bHQvTWFwQ2xpY2tSZXN1bHQuY29tcG9uZW50LmpzIiwid2VicGFjazovL21hLXBsdWdpbi1uZXctWXVzdWYvLi9zcmMvY29tcG9uZW50cy9NYXBDbGljay9NYXBDbGljay5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vbWEtcGx1Z2luLW5ldy1ZdXN1Zi8uL3NyYy9jb25zdGFudHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL21hLXBsdWdpbi1uZXctWXVzdWYvLi9zcmMvbWVzc2FnZXMuanMiLCJ3ZWJwYWNrOi8vbWEtcGx1Z2luLW5ldy1ZdXN1Zi8uL3NyYy9zZXJ2aWNlcy9tYXBVdGlscy5qcyIsIndlYnBhY2s6Ly9tYS1wbHVnaW4tbmV3LVl1c3VmLy4vc3JjL3NlcnZpY2VzL3F1ZXJ5U2VydmljZS5qcyIsIndlYnBhY2s6Ly9tYS1wbHVnaW4tbmV3LVl1c3VmLy4vc3JjL3BsdWdpbi5zdmciLCJ3ZWJwYWNrOi8vbWEtcGx1Z2luLW5ldy1ZdXN1Zi9leHRlcm5hbCB1bWQgXCJAcGVudGEtYi9ncmlkXCIiLCJ3ZWJwYWNrOi8vbWEtcGx1Z2luLW5ldy1ZdXN1Zi9leHRlcm5hbCB1bWQgXCJAcGVudGEtYi9tYS1saWJcIiIsIndlYnBhY2s6Ly9tYS1wbHVnaW4tbmV3LVl1c3VmL2V4dGVybmFsIHVtZCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbWEtcGx1Z2luLW5ldy1ZdXN1Zi9leHRlcm5hbCB1bWQgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL21hLXBsdWdpbi1uZXctWXVzdWYvLi9ub2RlX21vZHVsZXMvb2wvRGlzcG9zYWJsZS5qcyIsIndlYnBhY2s6Ly9tYS1wbHVnaW4tbmV3LVl1c3VmLy4vbm9kZV9tb2R1bGVzL29sL09iamVjdC5qcyIsIndlYnBhY2s6Ly9tYS1wbHVnaW4tbmV3LVl1c3VmLy4vbm9kZV9tb2R1bGVzL29sL09iamVjdEV2ZW50VHlwZS5qcyIsIndlYnBhY2s6Ly9tYS1wbHVnaW4tbmV3LVl1c3VmLy4vbm9kZV9tb2R1bGVzL29sL09ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vbWEtcGx1Z2luLW5ldy1ZdXN1Zi8uL25vZGVfbW9kdWxlcy9vbC9hcnJheS5qcyIsIndlYnBhY2s6Ly9tYS1wbHVnaW4tbmV3LVl1c3VmLy4vbm9kZV9tb2R1bGVzL29sL2Fzc2VydHMuanMiLCJ3ZWJwYWNrOi8vbWEtcGx1Z2luLW5ldy1ZdXN1Zi8uL25vZGVfbW9kdWxlcy9vbC9jb25zb2xlLmpzIiwid2VicGFjazovL21hLXBsdWdpbi1uZXctWXVzdWYvLi9ub2RlX21vZHVsZXMvb2wvY29vcmRpbmF0ZS5qcyIsIndlYnBhY2s6Ly9tYS1wbHVnaW4tbmV3LVl1c3VmLy4vbm9kZV9tb2R1bGVzL29sL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly9tYS1wbHVnaW4tbmV3LVl1c3VmLy4vbm9kZV9tb2R1bGVzL29sL2V2ZW50cy9FdmVudC5qcyIsIndlYnBhY2s6Ly9tYS1wbHVnaW4tbmV3LVl1c3VmLy4vbm9kZV9tb2R1bGVzL29sL2V2ZW50cy9FdmVudFR5cGUuanMiLCJ3ZWJwYWNrOi8vbWEtcGx1Z2luLW5ldy1ZdXN1Zi8uL25vZGVfbW9kdWxlcy9vbC9ldmVudHMvVGFyZ2V0LmpzIiwid2VicGFjazovL21hLXBsdWdpbi1uZXctWXVzdWYvLi9ub2RlX21vZHVsZXMvb2wvZXh0ZW50LmpzIiwid2VicGFjazovL21hLXBsdWdpbi1uZXctWXVzdWYvLi9ub2RlX21vZHVsZXMvb2wvZXh0ZW50L1JlbGF0aW9uc2hpcC5qcyIsIndlYnBhY2s6Ly9tYS1wbHVnaW4tbmV3LVl1c3VmLy4vbm9kZV9tb2R1bGVzL29sL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9tYS1wbHVnaW4tbmV3LVl1c3VmLy4vbm9kZV9tb2R1bGVzL29sL2dlb20vR2VvbWV0cnkuanMiLCJ3ZWJwYWNrOi8vbWEtcGx1Z2luLW5ldy1ZdXN1Zi8uL25vZGVfbW9kdWxlcy9vbC9nZW9tL0xpbmVTdHJpbmcuanMiLCJ3ZWJwYWNrOi8vbWEtcGx1Z2luLW5ldy1ZdXN1Zi8uL25vZGVfbW9kdWxlcy9vbC9nZW9tL1NpbXBsZUdlb21ldHJ5LmpzIiwid2VicGFjazovL21hLXBsdWdpbi1uZXctWXVzdWYvLi9ub2RlX21vZHVsZXMvb2wvZ2VvbS9mbGF0L2Nsb3Nlc3QuanMiLCJ3ZWJwYWNrOi8vbWEtcGx1Z2luLW5ldy1ZdXN1Zi8uL25vZGVfbW9kdWxlcy9vbC9nZW9tL2ZsYXQvY29udGFpbnMuanMiLCJ3ZWJwYWNrOi8vbWEtcGx1Z2luLW5ldy1ZdXN1Zi8uL25vZGVfbW9kdWxlcy9vbC9nZW9tL2ZsYXQvZGVmbGF0ZS5qcyIsIndlYnBhY2s6Ly9tYS1wbHVnaW4tbmV3LVl1c3VmLy4vbm9kZV9tb2R1bGVzL29sL2dlb20vZmxhdC9pbmZsYXRlLmpzIiwid2VicGFjazovL21hLXBsdWdpbi1uZXctWXVzdWYvLi9ub2RlX21vZHVsZXMvb2wvZ2VvbS9mbGF0L2ludGVycG9sYXRlLmpzIiwid2VicGFjazovL21hLXBsdWdpbi1uZXctWXVzdWYvLi9ub2RlX21vZHVsZXMvb2wvZ2VvbS9mbGF0L2ludGVyc2VjdHNleHRlbnQuanMiLCJ3ZWJwYWNrOi8vbWEtcGx1Z2luLW5ldy1ZdXN1Zi8uL25vZGVfbW9kdWxlcy9vbC9nZW9tL2ZsYXQvbGVuZ3RoLmpzIiwid2VicGFjazovL21hLXBsdWdpbi1uZXctWXVzdWYvLi9ub2RlX21vZHVsZXMvb2wvZ2VvbS9mbGF0L3NlZ21lbnRzLmpzIiwid2VicGFjazovL21hLXBsdWdpbi1uZXctWXVzdWYvLi9ub2RlX21vZHVsZXMvb2wvZ2VvbS9mbGF0L3NpbXBsaWZ5LmpzIiwid2VicGFjazovL21hLXBsdWdpbi1uZXctWXVzdWYvLi9ub2RlX21vZHVsZXMvb2wvZ2VvbS9mbGF0L3RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9tYS1wbHVnaW4tbmV3LVl1c3VmLy4vbm9kZV9tb2R1bGVzL29sL21hdGguanMiLCJ3ZWJwYWNrOi8vbWEtcGx1Z2luLW5ldy1ZdXN1Zi8uL25vZGVfbW9kdWxlcy9vbC9vYmouanMiLCJ3ZWJwYWNrOi8vbWEtcGx1Z2luLW5ldy1ZdXN1Zi8uL25vZGVfbW9kdWxlcy9vbC9wcm9qLmpzIiwid2VicGFjazovL21hLXBsdWdpbi1uZXctWXVzdWYvLi9ub2RlX21vZHVsZXMvb2wvcHJvai9Qcm9qZWN0aW9uLmpzIiwid2VicGFjazovL21hLXBsdWdpbi1uZXctWXVzdWYvLi9ub2RlX21vZHVsZXMvb2wvcHJvai9Vbml0cy5qcyIsIndlYnBhY2s6Ly9tYS1wbHVnaW4tbmV3LVl1c3VmLy4vbm9kZV9tb2R1bGVzL29sL3Byb2ovZXBzZzM4NTcuanMiLCJ3ZWJwYWNrOi8vbWEtcGx1Z2luLW5ldy1ZdXN1Zi8uL25vZGVfbW9kdWxlcy9vbC9wcm9qL2Vwc2c0MzI2LmpzIiwid2VicGFjazovL21hLXBsdWdpbi1uZXctWXVzdWYvLi9ub2RlX21vZHVsZXMvb2wvcHJvai9wcm9qZWN0aW9ucy5qcyIsIndlYnBhY2s6Ly9tYS1wbHVnaW4tbmV3LVl1c3VmLy4vbm9kZV9tb2R1bGVzL29sL3Byb2ovdHJhbnNmb3Jtcy5qcyIsIndlYnBhY2s6Ly9tYS1wbHVnaW4tbmV3LVl1c3VmLy4vbm9kZV9tb2R1bGVzL29sL3NwaGVyZS5qcyIsIndlYnBhY2s6Ly9tYS1wbHVnaW4tbmV3LVl1c3VmLy4vbm9kZV9tb2R1bGVzL29sL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9tYS1wbHVnaW4tbmV3LVl1c3VmLy4vbm9kZV9tb2R1bGVzL29sL3RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9tYS1wbHVnaW4tbmV3LVl1c3VmLy4vbm9kZV9tb2R1bGVzL29sL3V0aWwuanMiLCJ3ZWJwYWNrOi8vbWEtcGx1Z2luLW5ldy1ZdXN1Zi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tYS1wbHVnaW4tbmV3LVl1c3VmL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL21hLXBsdWdpbi1uZXctWXVzdWYvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21hLXBsdWdpbi1uZXctWXVzdWYvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tYS1wbHVnaW4tbmV3LVl1c3VmL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWEtcGx1Z2luLW5ldy1ZdXN1Zi93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9tYS1wbHVnaW4tbmV3LVl1c3VmLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwicmVhY3QtcmVkdXhcIiksIHJlcXVpcmUoXCJAcGVudGEtYi9tYS1saWJcIiksIHJlcXVpcmUoXCJAcGVudGEtYi9ncmlkXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInJlYWN0XCIsIFwicmVhY3QtcmVkdXhcIiwgXCJAcGVudGEtYi9tYS1saWJcIiwgXCJAcGVudGEtYi9ncmlkXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm1hLXBsdWdpbi1uZXctWXVzdWZcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpLCByZXF1aXJlKFwiQHBlbnRhLWIvbWEtbGliXCIpLCByZXF1aXJlKFwiQHBlbnRhLWIvZ3JpZFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wibWEtcGx1Z2luLW5ldy1ZdXN1ZlwiXSA9IGZhY3Rvcnkocm9vdFtcInJlYWN0XCJdLCByb290W1wicmVhY3QtcmVkdXhcIl0sIHJvb3RbXCJAcGVudGEtYi9tYS1saWJcIl0sIHJvb3RbXCJAcGVudGEtYi9ncmlkXCJdKTtcbn0pKHNlbGYsIChfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfcmVkdXhfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fcGVudGFfYl9tYV9saWJfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fcGVudGFfYl9ncmlkX18pID0+IHtcbnJldHVybiAiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHdpdGhMb2NhbGl6ZSB9IGZyb20gXCJAcGVudGEtYi9tYS1saWJcIjtcclxuaW1wb3J0IHsgTE9DQUxJWkFUSU9OX05BTUVTUEFDRSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IGNvbXBvbmVudHMgYXMgR3JpZENvbXBvbmVudHMgfSBmcm9tIFwiQHBlbnRhLWIvZ3JpZFwiO1xyXG5jb25zdCBHcmlkID0gR3JpZENvbXBvbmVudHMuR3JpZDtcclxuXHJcbmNsYXNzIE1hcENsaWNrUmVzdWx0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGluZm8gfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgbGV0IHBhcnNlZERhdGEgPSBpbmZvLmZlYXR1cmVzLm1hcCgoZmVhdHVyZSkgPT4gZmVhdHVyZS5wcm9wZXJ0aWVzKTtcclxuICAgICAgICAvL21ha2Ugc3VyZSB0aGF0IHF1ZXJ5IHJlc3AgaXMgcmV0dXJuZWRcclxuICAgICAgICAvLyB1c2UgZ3JpZCBjb21wb25lbnQgdG8gdmlldyBhbGwgZmVhdHVyZXNcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkZFQVRVUkVTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplT3B0aW9uczogWzEwLCAyMCwgNDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZTogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZUxhcmdlVmlldzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiSU5UXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJiYXNpY1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJuYW1lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJuYW1lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJTVFJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImJhc2ljXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBwYXJzZWREYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoTG9jYWxpemUoTWFwQ2xpY2tSZXN1bHQsIExPQ0FMSVpBVElPTl9OQU1FU1BBQ0UpO1xyXG4iLCIvKipcclxuICogQXV0aG9yOiBBbXIgU2FtaXJcclxuICogXHJcbiAqIERlc2NyaXB0aW9uOiBcclxuICogIC0gQW4gZXhhbXBsZSBvZiBhIHBsdWdpbiB0aGF0IGxpc3RlbnMgdG8gYW5vdGhlciBcclxuICogICAgcGx1Z2luJ3Mgc3RhdGUgY2hhbmdlcyAoTWFwIHBsdWdpbiksIGFuZCBsb2cgdGhhdCBzdGF0ZS5cclxuICovXHJcblxyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHNlbGVjdG9yc1JlZ2lzdHJ5LCBhY3Rpb25zUmVnaXN0cnkgfSBmcm9tIFwiQHBlbnRhLWIvbWEtbGliXCI7XHJcbmltcG9ydCB7IGRyYXdTaGFwZSwgdmFsaWRhdGVWTCB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9tYXBVdGlsc1wiO1xyXG5cclxuLy9pbmhlcnRpbmcgdGhlIHByb3BzLCBTdGF0ZSwgcmVuZGVyIG1ldGhvZCBhbmQgbGlmZSBjeWNsZSBtZXRob2RzIGZyb20gUmVhY3RcclxuY2xhc3MgTWFwQ2xpY2tDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgLy8gcmVmcmVuY2VzIHRoZSAoVGhpcykgY3VycmVudCBpbnN0YW5jZSBvZiB0aGUgY2xhc3NcclxuICAgICAgICB0aGlzLmhhbmRsZVJlc3AgPSB0aGlzLmhhbmRsZVJlc3AuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVSZXNwKHJlcykge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHJlcz8uZGF0YVswXT8uZmVhdHVyZXMpO1xyXG4gICAgICAgIC8vIHJlbW92ZXMgdGhlIG9sZCBjbGljayByZXN1bHQgaWYgdGhpcy5JRCBleGlzdChjb250YWluZXIgb3BlbmVkKSByZW1vdmUgdGhlIGNvbnRhaW5lclxyXG4gICAgICAgIHRoaXMuaWQgJiYgdGhpcy5wcm9wcy5yZW1vdmVNYXBDbGlja1Jlc3VsdCh0aGlzLmlkKTtcclxuICAgICAgICAvLyB1c2luZyB0aGUgc2hvd01hcENsaWNrUmVzdWx0IGFuZCBwYXNzaW5nIGl0IHRoZSB0aGluZ3MgdGhhdCB3ZSB3YW50IGl0IHRvIHNob3cgaW4gdGhlIGNvbnRhaW5lclxyXG4gICAgICAgIHRoaXMucHJvcHMuc2hvd01hcENsaWNrUmVzdWx0KFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpbmZvOiBkYXRhLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoaWQpID0+ICh0aGlzLmlkID0gaWQpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERlc2NyaXB0aW9uOlxyXG4gICAgICogIC0gUmVhY3QgbGlmZWN5Y2xlIG1ldGhvZCwgaGVyZSB3ZSBjaGVjayBmb3Igc3RhdGUgY2hhbmdlcy5cclxuICAgICAqL1xyXG4gICAgLy8gcHJldlByb3BzID0+IHNhdmluZyB0aGUgb2xkIHByb3BzIGJlZm9yZSB0aGUgY2hhbmdlXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XHJcbiAgICAgICAgLy9pc0FjdGl2ZSA9PiBjaGVja2luZyBpZiB0aGUgYnV0dG9uIGlzIG9uIG9yIG9mZlxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmlzQWN0aXZlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgWXVzdWZMYXllciB9ID0gdGhpcy5wcm9wcy5zZXR0aW5ncy5kYXRhU2V0dGluZ3M7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgY29kZSB9ID0gdGhpcy5wcm9wcy5tYXAucHJvamVjdGlvbjtcclxuICAgICAgICAgICAgZHJhd1NoYXBlKFxyXG4gICAgICAgICAgICAgICAgWXVzdWZMYXllcixcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlUmVzcCxcclxuICAgICAgICAgICAgICAgIGNvZGVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBpZiB0aGUgdHJpZ2dlciBpc24ndCBhY3RpdmUgY2xlYXIgYWxsIHRoZSBmZWF0dXJlcyBvbiB0aGUgbWFwIGFuZCBjbG9zZSB0aGUgY29udGFpbmVyXHJcbiAgICAgICAgICAgIHZhbGlkYXRlVkwoeyBjbGVhcjogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgdGhpcy5pZCAmJiB0aGlzLnByb3BzLnJlbW92ZU1hcENsaWNrUmVzdWx0KHRoaXMuaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgLy93aHkgYXJlIHdlIHJldHVybmluZyBudWxsP1xyXG4gICAgICAgIC8vIHdlIGRvbid0IG5lZWQgdG8gcmV0dXJuIGFueXRoaW5nIHNpbmNlIHdlIGFyZSBub3QgY2hhbmdpbmcgdGhlIFVJLCB3ZSBkbyBpdCBmcm9tIE1uQSBub3QgZnJvbSBjb2RpbmdcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvLyBnZXR0aW5nIHRoZSBtYXAgcmVkdWNlcnMgdG8gYmUgYWJsZSB0byBhY2Nlc3MgdGhlIG1hcCBwcm9qZWN0aW9uIGNvZGVcclxuICAgICAgICBtYXA6IHNlbGVjdG9yc1JlZ2lzdHJ5LmdldFNlbGVjdG9yKFxyXG4gICAgICAgICAgICBcInNlbGVjdE1hcFJlZHVjZXJzXCIsXHJcbiAgICAgICAgICAgIHN0YXRlLFxyXG4gICAgICAgICAgICBvd25Qcm9wcy5yZWR1Y2VySWRcclxuICAgICAgICApLFxyXG4gICAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzaG93TWFwQ2xpY2tSZXN1bHQ6IChwcm9wcywgb25BZGQpID0+IGRpc3BhdGNoKGFjdGlvbnNSZWdpc3RyeS5nZXRBY3Rpb25DcmVhdG9yKCdzaG93Q29tcG9uZW50JywgJ21hLXBsdWdpbi1uZXctWXVzdWYnLCAnWXVzdWZDb250YWluZXInLCBwcm9wcywgb25BZGQpKSxcclxuICAgICAgICByZW1vdmVNYXBDbGlja1Jlc3VsdDogKGlkKSA9PiBkaXNwYXRjaChhY3Rpb25zUmVnaXN0cnkuZ2V0QWN0aW9uQ3JlYXRvcigncmVtb3ZlQ29tcG9uZW50JywgaWQpKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShNYXBDbGlja0NvbXBvbmVudCk7IiwiZXhwb3J0IGNvbnN0IExPQ0FMSVpBVElPTl9OQU1FU1BBQ0UgPSBcIm1hLXBsdWdpbi1uZXctWXVzdWZcIjsiLCJpbXBvcnQgSWNvbiBmcm9tICcuL3BsdWdpbi5zdmcnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIFwiY2xpY2subXNnXCI6IFwiWW91IGNsaWNrZWQgb24gbG9jYXRpb246IHswfSwgezF9XCIsXHJcbiAgICBcInRlc3QucGx1cmFsc1wiOiBcIlRoZXJlIHswLHBsdXJhbCxvbmV7aXMgIyBhcHBsZX1vdGhlcnthcmUgIyBhcHBsZXN9fSBpbiB7MSxwbHVyYWwsb25leyMgYmFza2V0fW90aGVyeyMgYmFza2V0c319LlwiLFxyXG4gICAgXCJ0aXRsZVwiOiBcIm1hLXBsdWdpbi1uZXctWXVzdWZcIixcclxuICAgIFwiaWNvblwiOiBJY29uXHJcbn0iLCIvLyBpbXBvcnRpbmcgdGhlIHJlcXVpcmVkIHJlZ2lzdHJpZXNcclxuaW1wb3J0IHsgYXBpUmVnaXN0cnksIGFjdGlvbnNSZWdpc3RyeSwgZ2VvbWV0cnlTZXJ2aWNlIH0gZnJvbSBcIkBwZW50YS1iL21hLWxpYlwiO1xyXG5pbXBvcnQgeyBnZXRBcmVhLCBnZXRMZW5ndGggfSBmcm9tIFwib2wvc3BoZXJlLmpzXCI7XHJcbmltcG9ydCB7IGNhbGxRdWVyeVNlcnZpY2UgfSBmcm9tIFwiLi9xdWVyeVNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTGluZVN0cmluZyB9IGZyb20gXCJvbC9nZW9tXCI7XHJcblxyXG4vL3ZlY3RvckxheWVyIGRlY2xhcmF0aW9uXHJcbmxldCBWTCA9IG51bGw7XHJcbmxldCBkcmF3aW5nID0gbnVsbDtcclxubGV0IG92ZXJsYXlBcnJheSA9IFtdO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCB2YWxpZGF0ZVZMID0gKG9wdGlvbnMpID0+IHtcclxuICBpZiAoVkwgJiYgb3B0aW9ucy5jbGVhcikge1xyXG4gICAgcmVzZXRMYXllcigpO1xyXG4gIH1cclxufVxyXG4vLyBDaGVja2luZyB0aGUgaWYgdGhlIHZlY3RvciBsYXllciBhbHJlYWR5IGV4aXN0cyB0byBjbGVhciBhbGwgdGhlIGZlYXR1cmVzIG9uIGl0XHJcbmV4cG9ydCBjb25zdCBkcmF3U2hhcGUgPSBhc3luYyAobGF5ZXIsIGZ1bmMsIGNvZGUpID0+IHtcclxuICBpZiAoIVZMKSB7XHJcbiAgICBjb25zdCBbVmVjdG9yTGF5ZXJdID0gYXdhaXQgYXBpUmVnaXN0cnkuZ2V0QXBpcyhbXCJWZWN0b3JMYXllclwiXSk7XHJcbiAgICBWTCA9IG5ldyBWZWN0b3JMYXllcigpO1xyXG4gICAgYWN0aW9uc1JlZ2lzdHJ5LmRpc3BhdGNoKFwiYWRkVmVjdG9yTGF5ZXJcIiwgVkwpO1xyXG4gICAgY29uc3QgW0RyYXdpbmddID0gYXdhaXQgYXBpUmVnaXN0cnkuZ2V0QXBpcyhbXCJEcmF3aW5nXCJdKTtcclxuICAgIGRyYXdpbmcgPSBuZXcgRHJhd2luZyh7XHJcbiAgICAgIHR5cGU6IFwicG9seWdvblwiLFxyXG4gICAgICB2ZWN0b3JMYXllcjogVkwsXHJcbiAgICB9KVxyXG4gICAgYWN0aW9uc1JlZ2lzdHJ5LmRpc3BhdGNoKFwiYWRkSW50ZXJhY3Rpb25cIiwgZHJhd2luZyk7XHJcbiAgICBkcmF3aW5nLnNldE9uRHJhd0ZpbmlzaChhc3luYyAoZmVhdHVyZSkgPT4ge1xyXG4gICAgICAvL3N0cnVjdHVyZSBkZWZpbml0aW9uXHJcbiAgICAgIGNvbnN0IGdlb20gPSBmZWF0dXJlLmdldEdlb21ldHJ5KCk7IC8vIGdldHRpbmcgdGhlIGdlb21ldHJ5IG9mIHRoZSBmZWF0dXJlXHJcbiAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gZmVhdHVyZS5vbEZlYXR1cmUuZ2V0R2VvbWV0cnkoKS5nZXRDb29yZGluYXRlcygpWzBdOyAvL2dldHRpbmcgY29vcmRzIHRvIGNhbGMgbGVuZ3RoIGxhdGVyXHJcbiAgICAgIGNvbnN0IGNlbnRlclBvaW50ID0gZ2VvbWV0cnlTZXJ2aWNlLmNlbnRlcihmZWF0dXJlLmdldEZlYXR1cmVHZW9Kc29uKCkpOyAvL2NyZWF0aW5nIGEgY2VudGVyIHBvaW50XHJcblxyXG4gICAgICAvL2NsZWFyaW5nIHRoZSB2ZWN0b3JMYXllciBhbmQgYWRkaW5nIHRoZSBkcmF3aW5nIHRvIGl0XHJcbiAgICAgIGFkZEZlYXR1cmUoZmVhdHVyZSk7XHJcbiAgICAgIGNsZWFyT3ZlcmxheSgpO1xyXG5cclxuICAgICAgLy9yZXR1cm5pbmcgdGhlIGZlYXR1cmVzIGZyb20gdGhlIGludGVyc2VjdGlvbiBvZiB0aGUgZHJhd24gc2hhcGUgd2l0aCB0aGUgbWFwIGFuZCBhZGRpbmcgdGhlIG92ZXJsYXlzXHJcbiAgICAgIGF3YWl0IGNhbGxRdWVyeVNlcnZpY2UobGF5ZXIsIGZ1bmMsIGdlb20pO1xyXG4gICAgICBhd2FpdCBvdmVybGF5QXJlYShmZWF0dXJlLCBjb2RlLCBjZW50ZXJQb2ludCk7XHJcbiAgICAgIG92ZXJsYXlMaW5lKGNvb3JkaW5hdGVzLCBjb2RlKTtcclxuICAgIH0pO1xyXG4gIH07XHJcbn07XHJcblxyXG5cclxuLyogY29uc3QgYXJlYSA9IGdldEFyZWEob2xHZW9tKTtcclxuY29uc3QgbGVuZ3RoID0gZ2V0TGVuZ3RoKG9sR2VvbSk7ICovXHJcblxyXG4vLyBhIGZ1bmN0aW9uIHRvIGNsZWFyIHRoZSBtYXAgYWZ0ZXIgdGhlIHByZXZpb3VzIGRyYXdpbmcgaXMgZmluaXNoZWQgYW5kIHRvIGFkZCB0aGUgbmV4dCBkcmF3aW5nXHJcbmZ1bmN0aW9uIGFkZEZlYXR1cmUoZmVhdCkge1xyXG4gIFZMLmNsZWFyKCk7XHJcbiAgVkwuYWRkRmVhdHVyZShmZWF0KVxyXG59O1xyXG5cclxuLy9mdW5jdGlvbiB0byBjYWxjdWxhdGUgdGhlIGFyZWEgb2YgdGhlIGRyYXduIEZlYXR1cmVcclxuZnVuY3Rpb24gY2FsY0FyZWEoZmVhdCwgY29kZSkge1xyXG4gIGNvbnN0IGFyZWEgPSBnZXRBcmVhKGZlYXQub2xGZWF0dXJlLmdldEdlb21ldHJ5KCksIHsgcHJvamVjdGlvbjogY29kZSB9KTtcclxuICByZXR1cm4gYXJlYVxyXG59XHJcbi8vY3JlYXRpbmcgTGluZUxlbmd0aHMgb3ZlckxheSBvZiB0aGUgZHJhd24gRmVhdHVyZVxyXG5hc3luYyBmdW5jdGlvbiBvdmVybGF5TGluZShjb29yZGluYXRlcywgY29kZSkge1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY29vcmRpbmF0ZXMubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICBjb25zdCBzdGFydGluZ0xpbmUgPSBjb29yZGluYXRlc1tpXTtcclxuICAgIGNvbnN0IG5leHRMaW5lID0gY29vcmRpbmF0ZXNbaSArIDFdO1xyXG4gICAgY29uc3Qgb3JpZ0xpbmUgPSBbc3RhcnRpbmdMaW5lLCBuZXh0TGluZV07XHJcbiAgICBjb25zdCBtaWRkbGUgPSBbXHJcbiAgICAgIChzdGFydGluZ0xpbmVbMF0gKyBuZXh0TGluZVswXSkgLyAyLFxyXG4gICAgICAoc3RhcnRpbmdMaW5lWzFdICsgbmV4dExpbmVbMV0pIC8gMixcclxuICAgIF07XHJcbiAgICBjb25zdCBsaW5lID0gbmV3IExpbmVTdHJpbmcob3JpZ0xpbmUpO1xyXG4gICAgY29uc3QgbGVuZ3RoID0gZ2V0TGVuZ3RoKGxpbmUsIHsgcHJvamVjdGlvbjogY29kZSB9KVxyXG4gICAgY29uc3QgbGVuZ3RoSW5LbSA9IGxlbmd0aCAvIDEwMDA7XHJcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAvLyBob3cgZG8gbWFrZSBlYWNoIHVuaXF1ZSBsZW5ndGggc2hvdz9cclxuICAgIGVsLmlubmVyVGV4dCA9IGAke2xlbmd0aEluS20udG9GaXhlZCgxKX0gS21gO1xyXG4gICAgZWwuc3R5bGUuY29sb3IgPSBcIiM2MTAwMzBcIjtcclxuICAgIGNvbnN0IFtPdmVybGF5XSA9IGF3YWl0IGFwaVJlZ2lzdHJ5LmdldEFwaXMoW1wiT3ZlcmxheVwiXSk7XHJcbiAgICBjb25zdCBvdmVybGF5TGluZSA9IG5ldyBPdmVybGF5KHtcclxuICAgICAgZWxlbWVudDogZWwsXHJcbiAgICAgIHBvc2l0aW9uOiBtaWRkbGUsXHJcbiAgICB9KTtcclxuICAgIG92ZXJsYXlBcnJheS5wdXNoKG92ZXJsYXlMaW5lKTtcclxuICAgIGFjdGlvbnNSZWdpc3RyeS5kaXNwYXRjaChcImFkZE92ZXJsYXlcIiwgb3ZlcmxheUxpbmUpO1xyXG4gIH1cclxufVxyXG4vLyBjcmVhdGluZyBvdmVyTGF5IHdpdGggdGhlIGFyZWEgb2YgdGhlIGRyYXduIEZlYXR1cmVcclxuYXN5bmMgZnVuY3Rpb24gb3ZlcmxheUFyZWEoZmVhdCwgY29kZSwgY2VudGVyKSB7XHJcbiAgY29uc3QgYXJlYSA9IGNhbGNBcmVhKGZlYXQsIGNvZGUpO1xyXG4gIGNvbnN0IGFyZWFJbkttU3EgPSBhcmVhIC8gKDEwMDAgKiAxMDAwKTtcclxuICBjb25zdCBhcmVhRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGFyZWFFbC5pbm5lckhUTUwgPSBgJHthcmVhSW5LbVNxLnRvRml4ZWQoMil9IGttJnN1cDJgO1xyXG4gIGFyZWFFbC5zdHlsZS5jb2xvciA9IFwiIzYxMDAzMFwiO1xyXG4gIGFyZWFFbC5zdHlsZS5mb250U2l6ZSA9IFwiMC44cmVtXCI7XHJcbiAgY29uc3QgW092ZXJsYXldID0gYXdhaXQgYXBpUmVnaXN0cnkuZ2V0QXBpcyhbXCJPdmVybGF5XCJdKTtcclxuICBjb25zdCBvdmVybGF5QXJlYSA9IG5ldyBPdmVybGF5KHtcclxuICAgIGVsZW1lbnQ6IGFyZWFFbCxcclxuICAgIHBvc2l0aW9uOiBjZW50ZXIuZ2VvbWV0cnkuY29vcmRpbmF0ZXMsXHJcbiAgICBwb3NpdGlvbmluZzogXCJjZW50ZXItY2VudGVyXCJcclxuICB9KTtcclxuICBvdmVybGF5QXJyYXkucHVzaChvdmVybGF5QXJlYSk7XHJcbiAgYXdhaXQgYWN0aW9uc1JlZ2lzdHJ5LmRpc3BhdGNoKFwiYWRkT3ZlcmxheVwiLCBvdmVybGF5QXJlYSk7XHJcbn1cclxuLy9jbGVhcmluZyB0aGUgb3ZlcmxheVxyXG5mdW5jdGlvbiBjbGVhck92ZXJsYXkoKSB7XHJcbiAgb3ZlcmxheUFycmF5LmZvckVhY2goKG92ZXJsYXkpID0+IHsgYWN0aW9uc1JlZ2lzdHJ5LmRpc3BhdGNoKFwicmVtb3ZlT3ZlcmxheVwiLCBvdmVybGF5KSB9KVxyXG4gIG92ZXJsYXlBcnJheSA9IFtdO1xyXG59XHJcblxyXG4vL2Z1bmN0aW9uIHRvIHJlc2V0IHRoZSBjbGVhciB0aGUgbGF5ZXJzIG9mIGFsbCB0aGUgZmVhdXRyZXMgYW5kIHRoZSBvdmVybGF5cyBvbiBpdFxyXG5mdW5jdGlvbiByZXNldExheWVyKCkge1xyXG4gIFZMLmNsZWFyKCk7XHJcbiAgYWN0aW9uc1JlZ2lzdHJ5LmRpc3BhdGNoKFwicmVtb3ZlSW50ZXJhY3Rpb25cIiwgZHJhd2luZyk7XHJcbiAgVkwgPSBudWxsO1xyXG4gIGNsZWFyT3ZlcmxheSgpO1xyXG59IiwiaW1wb3J0IHtcclxuICBzdG9yZSxcclxuICBxdWVyeSxcclxuICBzeXN0ZW1TaG93TG9hZGluZyxcclxuICBzeXN0ZW1IaWRlTG9hZGluZyxcclxufSBmcm9tIFwiQHBlbnRhLWIvbWEtbGliXCI7XHJcblxyXG5jb25zdCBnZW5RdWVyeUJvZHkgPSAobGF5ZXIsIGdlb21ldHJ5KSA9PiB7XHJcbiAgcmV0dXJuIFtcclxuICAgIHtcclxuICAgICAgZGF0YVNvdXJjZToge1xyXG4gICAgICAgIGlkOiBsYXllclswXS5pZCxcclxuICAgICAgfSxcclxuICAgICAgZmlsdGVyOiB7XHJcbiAgICAgICAgY29uZGl0aW9uTGlzdDogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBrZXk6IGxheWVyWzBdLmdlb21ldHJ5RmllbGQuZmllbGROYW1lLFxyXG4gICAgICAgICAgICBnZW9tZXRyeTogSlNPTi5zdHJpbmdpZnkoZ2VvbWV0cnkpLFxyXG4gICAgICAgICAgICBzcGF0aWFsUmVsYXRpb246IFwiSU5URVJTRUNUXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGNyczogbGF5ZXJbMF0uY3JzLFxyXG4gICAgfSxcclxuICBdO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNhbGxRdWVyeVNlcnZpY2UgPSBhc3luYyAobGF5ZXIsIGFjdGlvbiwgZ2VvbWV0cnkpID0+IHtcclxuICBzdG9yZS5kaXNwYXRjaChzeXN0ZW1TaG93TG9hZGluZygpKTtcclxuICBxdWVyeVxyXG4gICAgLnF1ZXJ5RmVhdHVyZXMoZ2VuUXVlcnlCb2R5KGxheWVyLCBnZW9tZXRyeSkpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgYWN0aW9uKHJlc3BvbnNlKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlICovY29uc29sZS5sb2coLi4ub29fb28oYDY3NDQ0NTQxMF8zNl82XzM2XzI0XzRgLGVycm9yKSk7XHJcbiAgICB9KVxyXG4gICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICBzdG9yZS5kaXNwYXRjaChzeXN0ZW1IaWRlTG9hZGluZygpKTtcclxuICAgIH0pO1xyXG59O1xyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLy8qIGM4IGlnbm9yZSBzdGFydCAqLy8qIGVzbGludC1kaXNhYmxlICovO2Z1bmN0aW9uIG9vX2NtKCl7dHJ5e3JldHVybiAoMCxldmFsKShcImdsb2JhbFRoaXMuX2NvbnNvbGVfbmluamFcIikgfHwgKDAsZXZhbCkoXCIvKiBodHRwczovL2dpdGh1Yi5jb20vd2FsbGFieWpzL2NvbnNvbGUtbmluamEjaG93LWRvZXMtaXQtd29yayAqLyd1c2Ugc3RyaWN0JztmdW5jdGlvbiBfMHg1MjljKCl7dmFyIF8weDM3NTFlMz1bJ19pc05lZ2F0aXZlWmVybycsJ1tvYmplY3RcXFxceDIwU2V0XScsJ2VsZW1lbnRzJywnZGF0YScsJ3dhcm4nLCdub2RlJywnbm9kZU1vZHVsZXMnLCdfY29ubmVjdFRvSG9zdE5vdycsJ2Rpc2FibGVkTG9nJywnX2FkZEZ1bmN0aW9uc05vZGUnLCdfU3ltYm9sJywnX2hhc1NldE9uSXRzUGF0aCcsJ2F1dG9FeHBhbmQnLCdwb3AnLCdhdXRvRXhwYW5kTWF4RGVwdGgnLCc5MjMyNTJHWWdTc1cnLCdfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJywnY29uc3RydWN0b3InLCdvbmNsb3NlJywnTnVtYmVyJywnX2RhdGVUb1N0cmluZycsJ19zZXROb2RlRXhwYW5kYWJsZVN0YXRlJywnbGV2ZWwnLCcxdXVwTkFJJywnY3VycmVudCcsJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50JywnbnVsbCcsJ191bmRlZmluZWQnLCdkYXRlJywnYXN0cm8nLCdyb290X2V4cF9pZCcsJ19XZWJTb2NrZXRDbGFzcycsJycsJ21hdGNoJywnX3NldE5vZGVRdWVyeVBhdGgnLCdfdHlwZScsJ3N0cmluZ2lmeScsJ0hUTUxBbGxDb2xsZWN0aW9uJywnZGVmYXVsdCcsJ19jb25zb2xlTmluamFBbGxvd2VkVG9TdGFydCcsJ3VucmVmJywnc3RyTGVuZ3RoJywnZWRnZScsJ1tvYmplY3RcXFxceDIwQmlnSW50XScsJzIyNjFxTWtuaFonLCdfd3MnLCdoaXRzJywncmVzb2x2ZUdldHRlcnMnLCdyZWxvYWQnLCc1MDE1MCcsJ3Bvc2l0aXZlSW5maW5pdHknLCdsb2cnLCdpc0V4cHJlc3Npb25Ub0V2YWx1YXRlJywnbWVzc2FnZScsJ2NhbGwnLCd1bnNoaWZ0JywnbmV4dC5qcycsJ2hhc093blByb3BlcnR5JywnZm9yRWFjaCcsJ2NvbnNvbGUnLCdwb3J0JywnX19lcycrJ01vZHVsZScsJzEuMC4wJywnU2V0JywncHJvY2VzcycsJ29uZXJyb3InLCd0aW1lU3RhbXAnLCdhcnJheScsJ19hbGxvd2VkVG9Db25uZWN0T25TZW5kJywnXFxcXHgyMHNlcnZlcicsJ25lZ2F0aXZlWmVybycsJ3BlcmZvcm1hbmNlJywncGF0aFRvRmlsZVVSTCcsJ2Z1bmN0aW9uJywnd2VicGFjaycsJ01hcCcsJ19IVE1MQWxsQ29sbGVjdGlvbicsJ3dzOi8vJywnX3NlbmRFcnJvck1lc3NhZ2UnLCdyb290RXhwcmVzc2lvbicsJ19pc1ByaW1pdGl2ZVdyYXBwZXJUeXBlJywnX2JsYWNrbGlzdGVkUHJvcGVydHknLCdfaW5OZXh0RWRnZScsJ2NvdmVyYWdlJywnLi4uJywnZXJyb3InLCdfYWRkUHJvcGVydHknLCdTdHJpbmcnLCdFcnJvcicsJ3NlcmlhbGl6ZScsJ19jb25zb2xlX25pbmphJywnX3NldE5vZGVJZCcsJ19pc01hcCcsJ190cmVlTm9kZVByb3BlcnRpZXNBZnRlckZ1bGxWYWx1ZScsJ29yaWdpbicsJ29ub3BlbicsJ19zb2NrZXQnLCd0b1N0cmluZycsJ3ZhbHVlT2YnLCdnbG9iYWwnLCdfZGlzcG9zZVdlYnNvY2tldCcsJ2xvZ2dlclxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwY29ubmVjdFxcXFx4MjB0b1xcXFx4MjBob3N0LFxcXFx4MjBzZWVcXFxceDIwJywnZ2F0ZXdheS5kb2NrZXIuaW50ZXJuYWwnLCdjYXRjaCcsJ2lzQXJyYXknLCdfcmVnRXhwVG9TdHJpbmcnLCdfY29ubmVjdGVkJywnX2dldE93blByb3BlcnR5U3ltYm9scycsJ25hbicsJ19pbkJyb3dzZXInLCdnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCdTeW1ib2wnLCdfcmVjb25uZWN0VGltZW91dCcsJ19wcm9wZXJ0eU5hbWUnLCdXZWJTb2NrZXQnLCdiaW5kJywncGFyZW50JywnZ2V0T3duUHJvcGVydHlTeW1ib2xzJywnX3dlYlNvY2tldEVycm9yRG9jc0xpbmsnLCdfaXNQcmltaXRpdmVUeXBlJywnNDc2Mzg3MFFVa0xsTicsJ21hcCcsJ2JpZ2ludCcsJ19zZXROb2RlRXhwcmVzc2lvblBhdGgnLCd0eXBlJywnX3BfbGVuZ3RoJywnZGVwdGgnLCcxJywnc3ltYm9sJywnbmVnYXRpdmVJbmZpbml0eScsJ19wcm9wZXJ0eScsJ25hbWUnLCd2ZXJzaW9ucycsJ19xdW90ZWRSZWdFeHAnLCdfYWRkaXRpb25hbE1ldGFkYXRhJywnZXhwcmVzc2lvbnNUb0V2YWx1YXRlJywnZW52JywnY2xvc2UnLCd2YWx1ZScsJ2Jvb2xlYW4nLCdkaXNhYmxlZFRyYWNlJywnc29ydFByb3BzJywnX2F0dGVtcHRUb1JlY29ubmVjdFNob3J0bHknLCclY1xcXFx4MjBDb25zb2xlXFxcXHgyME5pbmphXFxcXHgyMGV4dGVuc2lvblxcXFx4MjBpc1xcXFx4MjBjb25uZWN0ZWRcXFxceDIwdG9cXFxceDIwJywnZnVuY05hbWUnLCdzbGljZScsJ19jb25uZWN0aW5nJywnTkVYVF9SVU5USU1FJywnX3Byb2Nlc3NUcmVlTm9kZVJlc3VsdCcsJ3N0YWNrVHJhY2VMaW1pdCcsJ2xvY2F0aW9uJywnX2lzVW5kZWZpbmVkJywnX29iamVjdFRvU3RyaW5nJywnX3RyZWVOb2RlUHJvcGVydGllc0JlZm9yZUZ1bGxWYWx1ZScsJ19zb3J0UHJvcHMnLCdfY2xlYW5Ob2RlJywnYWxsU3RyTGVuZ3RoJywndGltZScsJzlDR3Rla2EnLCdub3cnLCcnLCd0b3RhbFN0ckxlbmd0aCcsJ19zZXROb2RlUGVybWlzc2lvbnMnLCdkZWZpbmVQcm9wZXJ0eScsJ3JlcGxhY2UnLCdfYWxsb3dlZFRvU2VuZCcsJ3Jvb3RfZXhwJywnbnVtYmVyJywnNzA2NDc0Z3FkakppJywndHJhY2UnLCd0ZXN0JywnX2dldE93blByb3BlcnR5TmFtZXMnLCdldmVudFJlY2VpdmVkQ2FsbGJhY2snLCdyZWFkeVN0YXRlJywnMjc4NjQwbnpzSGlkJywnaG9zdG5hbWUnLCdzdHJpbmcnLCd1bmRlZmluZWQnLCdub0Z1bmN0aW9ucycsJ2NvdW50JywnbGVuZ3RoJywnaW5kZXgnLCdfYWRkTG9hZE5vZGUnLCdfY29ubmVjdEF0dGVtcHRDb3VudCcsJ19wX25hbWUnLCdhbmd1bGFyJywnW29iamVjdFxcXFx4MjBBcnJheV0nLCdyZW1peCcsJ2hvc3QnLCdzZW5kJywnb2JqZWN0JywnX21heENvbm5lY3RBdHRlbXB0Q291bnQnLCdfY29uc29sZV9uaW5qYV9zZXNzaW9uJywncHJvdG90eXBlJywncGF0aCcsJ2xvZ2dlclxcXFx4MjB3ZWJzb2NrZXRcXFxceDIwZXJyb3InLCc1ODE0M0VPSk9SVCcsJ2dldE93blByb3BlcnR5TmFtZXMnLCdwcm9wcycsJ251eHQnLCc5Mm5qc0l4UCcsJ19zZXROb2RlTGFiZWwnLCd0aGVuJywnX2FkZE9iamVjdFByb3BlcnR5JywnX2hhc01hcE9uSXRzUGF0aCcsJ3NwbGl0JywnaW5jbHVkZXMnLCd1cmwnLCdDb25zb2xlXFxcXHgyME5pbmphXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBzZW5kXFxcXHgyMGxvZ3MsXFxcXHgyMHJlc3RhcnRpbmdcXFxceDIwdGhlXFxcXHgyMHByb2Nlc3NcXFxceDIwbWF5XFxcXHgyMGhlbHA7XFxcXHgyMGFsc29cXFxceDIwc2VlXFxcXHgyMCcsW1xcXCJsb2NhbGhvc3RcXFwiLFxcXCIxMjcuMC4wLjFcXFwiLFxcXCJleGFtcGxlLmN5cHJlc3MuaW9cXFwiLFxcXCJKb3N0YXJTYW5cXFwiLFxcXCIxOTIuMTY4LjU2LjFcXFwiLFxcXCIxOTIuMTY4LjEuMTBcXFwiXSwnYXJncycsJ05FR0FUSVZFX0lORklOSVRZJywnbG9nZ2VyXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBjb25uZWN0XFxcXHgyMHRvXFxcXHgyMGhvc3QnLCc4Njk0NjVEbFBISHUnLCdfcF8nLCd0b0xvd2VyQ2FzZScsJ3Vua25vd24nLCdDb25zb2xlXFxcXHgyME5pbmphXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBzZW5kXFxcXHgyMGxvZ3MsXFxcXHgyMHJlZnJlc2hpbmdcXFxceDIwdGhlXFxcXHgyMHBhZ2VcXFxceDIwbWF5XFxcXHgyMGhlbHA7XFxcXHgyMGFsc29cXFxceDIwc2VlXFxcXHgyMCcsJ2RvY2tlcml6ZWRBcHAnLCdlbGFwc2VkJywncmVkdWNlTGltaXRzJywnYXV0b0V4cGFuZFByZXZpb3VzT2JqZWN0cycsJzQyNDBSb0NsQWonLCdhdXRvRXhwYW5kTGltaXQnLCdfV2ViU29ja2V0Jywnc3Vic3RyJywncHVzaCcsJ2NvbmNhdCcsJ19jYXBJZlN0cmluZycsJ2pvaW4nLCdlbnVtZXJhYmxlJywnc2V0JywnX2lzU2V0J107XzB4NTI5Yz1mdW5jdGlvbigpe3JldHVybiBfMHgzNzUxZTM7fTtyZXR1cm4gXzB4NTI5YygpO312YXIgXzB4NGNmOTU5PV8weDVkYjQ7ZnVuY3Rpb24gXzB4NWRiNChfMHgyMWEzZDMsXzB4NTRiMjAxKXt2YXIgXzB4NTI5YzVjPV8weDUyOWMoKTtyZXR1cm4gXzB4NWRiND1mdW5jdGlvbihfMHg1ZGI0OGEsXzB4MzcyMWZjKXtfMHg1ZGI0OGE9XzB4NWRiNDhhLTB4ODA7dmFyIF8weDQ4ODBhNT1fMHg1MjljNWNbXzB4NWRiNDhhXTtyZXR1cm4gXzB4NDg4MGE1O30sXzB4NWRiNChfMHgyMWEzZDMsXzB4NTRiMjAxKTt9KGZ1bmN0aW9uKF8weDUyMDY2NixfMHgxMTQ3ZTQpe3ZhciBfMHgyM2ViMDE9XzB4NWRiNCxfMHgzMGNkZmI9XzB4NTIwNjY2KCk7d2hpbGUoISFbXSl7dHJ5e3ZhciBfMHgzNDMzYmI9cGFyc2VJbnQoXzB4MjNlYjAxKDB4ZmYpKS8weDEqKC1wYXJzZUludChfMHgyM2ViMDEoMHhhNykpLzB4MikrcGFyc2VJbnQoXzB4MjNlYjAxKDB4YzMpKS8weDMqKHBhcnNlSW50KF8weDIzZWIwMSgweGM3KSkvMHg0KSstcGFyc2VJbnQoXzB4MjNlYjAxKDB4ZDQpKS8weDUrLXBhcnNlSW50KF8weDIzZWIwMSgweGFkKSkvMHg2K3BhcnNlSW50KF8weDIzZWIwMSgweDExNCkpLzB4NyooLXBhcnNlSW50KF8weDIzZWIwMSgweGRkKSkvMHg4KSstcGFyc2VJbnQoXzB4MjNlYjAxKDB4OWQpKS8weDkqKC1wYXJzZUludChfMHgyM2ViMDEoMHgxNjApKS8weGEpK3BhcnNlSW50KF8weDIzZWIwMSgweGY3KSkvMHhiO2lmKF8weDM0MzNiYj09PV8weDExNDdlNClicmVhaztlbHNlIF8weDMwY2RmYlsncHVzaCddKF8weDMwY2RmYlsnc2hpZnQnXSgpKTt9Y2F0Y2goXzB4MjgxY2JjKXtfMHgzMGNkZmJbJ3B1c2gnXShfMHgzMGNkZmJbJ3NoaWZ0J10oKSk7fX19KF8weDUyOWMsMHgzZmNjYSkpO3ZhciBLPU9iamVjdFsnY3JlYXRlJ10sUT1PYmplY3RbXzB4NGNmOTU5KDB4YTIpXSxHPU9iamVjdFtfMHg0Y2Y5NTkoMHgxNTYpXSxlZT1PYmplY3RbXzB4NGNmOTU5KDB4YzQpXSx0ZT1PYmplY3RbJ2dldFByb3RvdHlwZU9mJ10sbmU9T2JqZWN0W18weDRjZjk1OSgweGMwKV1bXzB4NGNmOTU5KDB4MTIxKV0scmU9KF8weDExNWRlZixfMHg1MzJjNGEsXzB4Yzc3MTk4LF8weDJhNmNlMik9Pnt2YXIgXzB4NDY3ZjkxPV8weDRjZjk1OTtpZihfMHg1MzJjNGEmJnR5cGVvZiBfMHg1MzJjNGE9PV8weDQ2N2Y5MSgweGJkKXx8dHlwZW9mIF8weDUzMmM0YT09XzB4NDY3ZjkxKDB4MTMxKSl7Zm9yKGxldCBfMHgzM2Q2ZGMgb2YgZWUoXzB4NTMyYzRhKSkhbmVbXzB4NDY3ZjkxKDB4MTFlKV0oXzB4MTE1ZGVmLF8weDMzZDZkYykmJl8weDMzZDZkYyE9PV8weGM3NzE5OCYmUShfMHgxMTVkZWYsXzB4MzNkNmRjLHsnZ2V0JzooKT0+XzB4NTMyYzRhW18weDMzZDZkY10sJ2VudW1lcmFibGUnOiEoXzB4MmE2Y2UyPUcoXzB4NTMyYzRhLF8weDMzZDZkYykpfHxfMHgyYTZjZTJbXzB4NDY3ZjkxKDB4ZTUpXX0pO31yZXR1cm4gXzB4MTE1ZGVmO30sVj0oXzB4Mjg0MGFkLF8weDI1NTE0YyxfMHgzZTJlNGEpPT4oXzB4M2UyZTRhPV8weDI4NDBhZCE9bnVsbD9LKHRlKF8weDI4NDBhZCkpOnt9LHJlKF8weDI1NTE0Y3x8IV8weDI4NDBhZHx8IV8weDI4NDBhZFtfMHg0Y2Y5NTkoMHgxMjUpXT9RKF8weDNlMmU0YSxfMHg0Y2Y5NTkoMHgxMGUpLHsndmFsdWUnOl8weDI4NDBhZCwnZW51bWVyYWJsZSc6ITB4MH0pOl8weDNlMmU0YSxfMHgyODQwYWQpKSx4PWNsYXNze2NvbnN0cnVjdG9yKF8weDM1YTFiMSxfMHgxZmNjZmUsXzB4NWYxZDNiLF8weGExNTY4YixfMHgxMDgxYTMsXzB4M2U4ZDJmKXt2YXIgXzB4ZTRmMTcyPV8weDRjZjk1OTt0aGlzWydnbG9iYWwnXT1fMHgzNWExYjEsdGhpc1snaG9zdCddPV8weDFmY2NmZSx0aGlzW18weGU0ZjE3MigweDEyNCldPV8weDVmMWQzYix0aGlzWydub2RlTW9kdWxlcyddPV8weGExNTY4Yix0aGlzWydkb2NrZXJpemVkQXBwJ109XzB4MTA4MWEzLHRoaXNbXzB4ZTRmMTcyKDB4YWIpXT1fMHgzZThkMmYsdGhpc1tfMHhlNGYxNzIoMHhhNCldPSEweDAsdGhpc1tfMHhlNGYxNzIoMHgxMmMpXT0hMHgwLHRoaXNbJ19jb25uZWN0ZWQnXT0hMHgxLHRoaXNbJ19jb25uZWN0aW5nJ109ITB4MSx0aGlzW18weGU0ZjE3MigweDEzYSldPV8weDM1YTFiMVsncHJvY2VzcyddPy5bXzB4ZTRmMTcyKDB4ODcpXT8uW18weGU0ZjE3MigweDkyKV09PT1fMHhlNGYxNzIoMHgxMTIpLHRoaXNbXzB4ZTRmMTcyKDB4MTU1KV09IXRoaXNbJ2dsb2JhbCddW18weGU0ZjE3MigweDEyOCldPy5bJ3ZlcnNpb25zJ10/LltfMHhlNGYxNzIoMHhlZCldJiYhdGhpc1tfMHhlNGYxNzIoMHgxM2EpXSx0aGlzW18weGU0ZjE3MigweDEwNyldPW51bGwsdGhpc1tfMHhlNGYxNzIoMHhiNildPTB4MCx0aGlzW18weGU0ZjE3MigweGJlKV09MHgxNCx0aGlzW18weGU0ZjE3MigweDE1ZSldPSdodHRwczovL3Rpbnl1cmwuY29tLzM3eDhiNzl0Jyx0aGlzW18weGU0ZjE3MigweDEzNildPSh0aGlzW18weGU0ZjE3MigweDE1NSldP18weGU0ZjE3MigweGQ4KTpfMHhlNGYxNzIoMHhjZikpK3RoaXNbXzB4ZTRmMTcyKDB4MTVlKV07fWFzeW5jWydnZXRXZWJTb2NrZXRDbGFzcyddKCl7dmFyIF8weDU5ZmZhYz1fMHg0Y2Y5NTk7aWYodGhpc1tfMHg1OWZmYWMoMHgxMDcpXSlyZXR1cm4gdGhpc1tfMHg1OWZmYWMoMHgxMDcpXTtsZXQgXzB4NWE3Y2NmO2lmKHRoaXNbJ19pbkJyb3dzZXInXXx8dGhpc1tfMHg1OWZmYWMoMHgxM2EpXSlfMHg1YTdjY2Y9dGhpc1tfMHg1OWZmYWMoMHgxNGIpXVtfMHg1OWZmYWMoMHgxNWEpXTtlbHNle2lmKHRoaXNbXzB4NTlmZmFjKDB4MTRiKV1bJ3Byb2Nlc3MnXT8uW18weDU5ZmZhYygweGRmKV0pXzB4NWE3Y2NmPXRoaXNbJ2dsb2JhbCddW18weDU5ZmZhYygweDEyOCldPy5bJ19XZWJTb2NrZXQnXTtlbHNlIHRyeXtsZXQgXzB4NGQ3NDhjPWF3YWl0IGltcG9ydChfMHg1OWZmYWMoMHhjMSkpO18weDVhN2NjZj0oYXdhaXQgaW1wb3J0KChhd2FpdCBpbXBvcnQoXzB4NTlmZmFjKDB4Y2UpKSlbXzB4NTlmZmFjKDB4MTMwKV0oXzB4NGQ3NDhjW18weDU5ZmZhYygweGU0KV0odGhpc1tfMHg1OWZmYWMoMHhlZSldLCd3cy9pbmRleC5qcycpKVtfMHg1OWZmYWMoMHgxNDkpXSgpKSlbXzB4NTlmZmFjKDB4MTBlKV07fWNhdGNoe3RyeXtfMHg1YTdjY2Y9cmVxdWlyZShyZXF1aXJlKF8weDU5ZmZhYygweGMxKSlbJ2pvaW4nXSh0aGlzW18weDU5ZmZhYygweGVlKV0sJ3dzJykpO31jYXRjaHt0aHJvdyBuZXcgRXJyb3IoJ2ZhaWxlZFxcXFx4MjB0b1xcXFx4MjBmaW5kXFxcXHgyMGFuZFxcXFx4MjBsb2FkXFxcXHgyMFdlYlNvY2tldCcpO319fXJldHVybiB0aGlzW18weDU5ZmZhYygweDEwNyldPV8weDVhN2NjZixfMHg1YTdjY2Y7fVtfMHg0Y2Y5NTkoMHhlZildKCl7dmFyIF8weDQxMmRhNz1fMHg0Y2Y5NTk7dGhpc1tfMHg0MTJkYTcoMHg5MSldfHx0aGlzW18weDQxMmRhNygweDE1MildfHx0aGlzW18weDQxMmRhNygweGI2KV0+PXRoaXNbXzB4NDEyZGE3KDB4YmUpXXx8KHRoaXNbJ19hbGxvd2VkVG9Db25uZWN0T25TZW5kJ109ITB4MSx0aGlzW18weDQxMmRhNygweDkxKV09ITB4MCx0aGlzW18weDQxMmRhNygweGI2KV0rKyx0aGlzW18weDQxMmRhNygweDExNSldPW5ldyBQcm9taXNlKChfMHg4MWFjNTIsXzB4NGRlNzM0KT0+e3ZhciBfMHgxMDg1MzY9XzB4NDEyZGE3O3RoaXNbJ2dldFdlYlNvY2tldENsYXNzJ10oKVtfMHgxMDg1MzYoMHhjOSldKF8weDU0NzBjMD0+e3ZhciBfMHg1ZTYzMmY9XzB4MTA4NTM2O2xldCBfMHg0MWYxNGI9bmV3IF8weDU0NzBjMChfMHg1ZTYzMmYoMHgxMzUpKyghdGhpc1tfMHg1ZTYzMmYoMHgxNTUpXSYmdGhpc1tfMHg1ZTYzMmYoMHhkOSldP18weDVlNjMyZigweDE0ZSk6dGhpc1tfMHg1ZTYzMmYoMHhiYildKSsnOicrdGhpc1tfMHg1ZTYzMmYoMHgxMjQpXSk7XzB4NDFmMTRiW18weDVlNjMyZigweDEyOSldPSgpPT57dmFyIF8weDNjZWZiNT1fMHg1ZTYzMmY7dGhpc1tfMHgzY2VmYjUoMHhhNCldPSEweDEsdGhpc1tfMHgzY2VmYjUoMHgxNGMpXShfMHg0MWYxNGIpLHRoaXNbJ19hdHRlbXB0VG9SZWNvbm5lY3RTaG9ydGx5J10oKSxfMHg0ZGU3MzQobmV3IEVycm9yKF8weDNjZWZiNSgweGMyKSkpO30sXzB4NDFmMTRiW18weDVlNjMyZigweDE0NyldPSgpPT57dmFyIF8weDRkOWE0YT1fMHg1ZTYzMmY7dGhpc1tfMHg0ZDlhNGEoMHgxNTUpXXx8XzB4NDFmMTRiW18weDRkOWE0YSgweDE0OCldJiZfMHg0MWYxNGJbXzB4NGQ5YTRhKDB4MTQ4KV1bXzB4NGQ5YTRhKDB4MTEwKV0mJl8weDQxZjE0YltfMHg0ZDlhNGEoMHgxNDgpXVtfMHg0ZDlhNGEoMHgxMTApXSgpLF8weDgxYWM1MihfMHg0MWYxNGIpO30sXzB4NDFmMTRiW18weDVlNjMyZigweGZhKV09KCk9Pnt2YXIgXzB4NWRlMWY4PV8weDVlNjMyZjt0aGlzWydfYWxsb3dlZFRvQ29ubmVjdE9uU2VuZCddPSEweDAsdGhpc1snX2Rpc3Bvc2VXZWJzb2NrZXQnXShfMHg0MWYxNGIpLHRoaXNbXzB4NWRlMWY4KDB4OGQpXSgpO30sXzB4NDFmMTRiWydvbm1lc3NhZ2UnXT1fMHg1Y2YzZjQ9Pnt2YXIgXzB4NTE4NTIxPV8weDVlNjMyZjt0cnl7aWYoIV8weDVjZjNmND8uW18weDUxODUyMSgweGViKV18fCF0aGlzW18weDUxODUyMSgweGFiKV0pcmV0dXJuO2xldCBfMHgzYmM0MTg9SlNPTlsncGFyc2UnXShfMHg1Y2YzZjRbJ2RhdGEnXSk7dGhpc1snZXZlbnRSZWNlaXZlZENhbGxiYWNrJ10oXzB4M2JjNDE4WydtZXRob2QnXSxfMHgzYmM0MThbJ2FyZ3MnXSx0aGlzW18weDUxODUyMSgweDE0YildLHRoaXNbXzB4NTE4NTIxKDB4MTU1KV0pO31jYXRjaHt9fTt9KVsndGhlbiddKF8weDQ0ZTM3ZT0+KHRoaXNbXzB4MTA4NTM2KDB4MTUyKV09ITB4MCx0aGlzWydfY29ubmVjdGluZyddPSEweDEsdGhpc1tfMHgxMDg1MzYoMHgxMmMpXT0hMHgxLHRoaXNbXzB4MTA4NTM2KDB4YTQpXT0hMHgwLHRoaXNbXzB4MTA4NTM2KDB4YjYpXT0weDAsXzB4NDRlMzdlKSlbXzB4MTA4NTM2KDB4MTRmKV0oXzB4NDM0MWE1PT4odGhpc1snX2Nvbm5lY3RlZCddPSEweDEsdGhpc1tfMHgxMDg1MzYoMHg5MSldPSEweDEsY29uc29sZVtfMHgxMDg1MzYoMHhlYyldKF8weDEwODUzNigweDE0ZCkrdGhpc1tfMHgxMDg1MzYoMHgxNWUpXSksXzB4NGRlNzM0KG5ldyBFcnJvcignZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGNvbm5lY3RcXFxceDIwdG9cXFxceDIwaG9zdDpcXFxceDIwJysoXzB4NDM0MWE1JiZfMHg0MzQxYTVbJ21lc3NhZ2UnXSkpKSkpO30pKTt9W18weDRjZjk1OSgweDE0YyldKF8weDRhZDcyNSl7dmFyIF8weDQxNzkyOT1fMHg0Y2Y5NTk7dGhpc1tfMHg0MTc5MjkoMHgxNTIpXT0hMHgxLHRoaXNbXzB4NDE3OTI5KDB4OTEpXT0hMHgxO3RyeXtfMHg0YWQ3MjVbJ29uY2xvc2UnXT1udWxsLF8weDRhZDcyNVsnb25lcnJvciddPW51bGwsXzB4NGFkNzI1W18weDQxNzkyOSgweDE0NyldPW51bGw7fWNhdGNoe310cnl7XzB4NGFkNzI1W18weDQxNzkyOSgweGFjKV08MHgyJiZfMHg0YWQ3MjVbXzB4NDE3OTI5KDB4ODgpXSgpO31jYXRjaHt9fVsnX2F0dGVtcHRUb1JlY29ubmVjdFNob3J0bHknXSgpe3ZhciBfMHgxZjQ0NTk9XzB4NGNmOTU5O2NsZWFyVGltZW91dCh0aGlzW18weDFmNDQ1OSgweDE1OCldKSwhKHRoaXNbXzB4MWY0NDU5KDB4YjYpXT49dGhpc1tfMHgxZjQ0NTkoMHhiZSldKSYmKHRoaXNbXzB4MWY0NDU5KDB4MTU4KV09c2V0VGltZW91dCgoKT0+e3ZhciBfMHhmZmU4MzU9XzB4MWY0NDU5O3RoaXNbJ19jb25uZWN0ZWQnXXx8dGhpc1tfMHhmZmU4MzUoMHg5MSldfHwodGhpc1snX2Nvbm5lY3RUb0hvc3ROb3cnXSgpLHRoaXNbXzB4ZmZlODM1KDB4MTE1KV0/LlsnY2F0Y2gnXSgoKT0+dGhpc1tfMHhmZmU4MzUoMHg4ZCldKCkpKTt9LDB4MWY0KSx0aGlzW18weDFmNDQ1OSgweDE1OCldW18weDFmNDQ1OSgweDExMCldJiZ0aGlzW18weDFmNDQ1OSgweDE1OCldW18weDFmNDQ1OSgweDExMCldKCkpO31hc3luY1tfMHg0Y2Y5NTkoMHhiYyldKF8weDM0Yzk3NSl7dmFyIF8weDJhMWU1Nz1fMHg0Y2Y5NTk7dHJ5e2lmKCF0aGlzWydfYWxsb3dlZFRvU2VuZCddKXJldHVybjt0aGlzW18weDJhMWU1NygweDEyYyldJiZ0aGlzW18weDJhMWU1NygweGVmKV0oKSwoYXdhaXQgdGhpc1tfMHgyYTFlNTcoMHgxMTUpXSlbXzB4MmExZTU3KDB4YmMpXShKU09OW18weDJhMWU1NygweDEwYyldKF8weDM0Yzk3NSkpO31jYXRjaChfMHg0ZmUxMjUpe2NvbnNvbGVbJ3dhcm4nXSh0aGlzW18weDJhMWU1NygweDEzNildKyc6XFxcXHgyMCcrKF8weDRmZTEyNSYmXzB4NGZlMTI1W18weDJhMWU1NygweDExZCldKSksdGhpc1tfMHgyYTFlNTcoMHhhNCldPSEweDEsdGhpc1tfMHgyYTFlNTcoMHg4ZCldKCk7fX19O2Z1bmN0aW9uIHEoXzB4NTgzOGFmLF8weDMyNGFmMCxfMHg1YjkxYTEsXzB4NDg4ZWNmLF8weDQ5MDZkZixfMHgxY2MzNTYsXzB4MzhhZTY1LF8weDU2NGRmMT1pZSl7dmFyIF8weDE3ZWVmYT1fMHg0Y2Y5NTk7bGV0IF8weDNiMzc5ND1fMHg1YjkxYTFbXzB4MTdlZWZhKDB4Y2MpXSgnLCcpW18weDE3ZWVmYSgweDE2MSldKF8weDI1NzhjMT0+e3ZhciBfMHg1ZDFiZWY9XzB4MTdlZWZhO3RyeXtpZighXzB4NTgzOGFmWydfY29uc29sZV9uaW5qYV9zZXNzaW9uJ10pe2xldCBfMHgzYTU2MWQ9XzB4NTgzOGFmWydwcm9jZXNzJ10/LltfMHg1ZDFiZWYoMHg4MyldPy5bXzB4NWQxYmVmKDB4ZWQpXXx8XzB4NTgzOGFmW18weDVkMWJlZigweDEyOCldPy5bJ2VudiddPy5bXzB4NWQxYmVmKDB4OTIpXT09PV8weDVkMWJlZigweDExMik7KF8weDQ5MDZkZj09PV8weDVkMWJlZigweDEyMCl8fF8weDQ5MDZkZj09PV8weDVkMWJlZigweGJhKXx8XzB4NDkwNmRmPT09XzB4NWQxYmVmKDB4MTA1KXx8XzB4NDkwNmRmPT09XzB4NWQxYmVmKDB4YjgpKSYmKF8weDQ5MDZkZis9XzB4M2E1NjFkP18weDVkMWJlZigweDEyZCk6J1xcXFx4MjBicm93c2VyJyksXzB4NTgzOGFmW18weDVkMWJlZigweGJmKV09eydpZCc6K25ldyBEYXRlKCksJ3Rvb2wnOl8weDQ5MDZkZn0sXzB4MzhhZTY1JiZfMHg0OTA2ZGYmJiFfMHgzYTU2MWQmJmNvbnNvbGVbJ2xvZyddKF8weDVkMWJlZigweDhlKSsoXzB4NDkwNmRmWydjaGFyQXQnXSgweDApWyd0b1VwcGVyQ2FzZSddKCkrXzB4NDkwNmRmW18weDVkMWJlZigweGUwKV0oMHgxKSkrJywnLCdiYWNrZ3JvdW5kOlxcXFx4MjByZ2IoMzAsMzAsMzApO1xcXFx4MjBjb2xvcjpcXFxceDIwcmdiKDI1NSwyMTMsOTIpJywnc2VlXFxcXHgyMGh0dHBzOi8vdGlueXVybC5jb20vMnZ0OGp4endcXFxceDIwZm9yXFxcXHgyMG1vcmVcXFxceDIwaW5mby4nKTt9bGV0IF8weDNjNmQ1Mz1uZXcgeChfMHg1ODM4YWYsXzB4MzI0YWYwLF8weDI1NzhjMSxfMHg0ODhlY2YsXzB4MWNjMzU2LF8weDU2NGRmMSk7cmV0dXJuIF8weDNjNmQ1M1snc2VuZCddW18weDVkMWJlZigweDE1YildKF8weDNjNmQ1Myk7fWNhdGNoKF8weDFhYTlkZSl7cmV0dXJuIGNvbnNvbGVbXzB4NWQxYmVmKDB4ZWMpXShfMHg1ZDFiZWYoMHhkMyksXzB4MWFhOWRlJiZfMHgxYWE5ZGVbXzB4NWQxYmVmKDB4MTFkKV0pLCgpPT57fTt9fSk7cmV0dXJuIF8weDJjMWRiZD0+XzB4M2IzNzk0W18weDE3ZWVmYSgweDEyMildKF8weGI0MGMwMj0+XzB4YjQwYzAyKF8weDJjMWRiZCkpO31mdW5jdGlvbiBpZShfMHhkNDYyZTUsXzB4MWExZjcyLF8weDE3ZTAwNSxfMHgxOTAyYzcpe3ZhciBfMHg0ZjU0MWQ9XzB4NGNmOTU5O18weDE5MDJjNyYmXzB4ZDQ2MmU1PT09XzB4NGY1NDFkKDB4MTE4KSYmXzB4MTdlMDA1Wydsb2NhdGlvbiddW18weDRmNTQxZCgweDExOCldKCk7fWZ1bmN0aW9uIGIoXzB4MmM4M2NiKXt2YXIgXzB4NWI2NTVmPV8weDRjZjk1OTtsZXQgXzB4NDNjYzI3PWZ1bmN0aW9uKF8weDNhNjY4ZixfMHgyZTAyNjApe3JldHVybiBfMHgyZTAyNjAtXzB4M2E2NjhmO30sXzB4NTNiYmEwO2lmKF8weDJjODNjYltfMHg1YjY1NWYoMHgxMmYpXSlfMHg1M2JiYTA9ZnVuY3Rpb24oKXt2YXIgXzB4MjRjMWYyPV8weDViNjU1ZjtyZXR1cm4gXzB4MmM4M2NiW18weDI0YzFmMigweDEyZildW18weDI0YzFmMigweDllKV0oKTt9O2Vsc2V7aWYoXzB4MmM4M2NiW18weDViNjU1ZigweDEyOCldJiZfMHgyYzgzY2JbJ3Byb2Nlc3MnXVsnaHJ0aW1lJ10mJl8weDJjODNjYltfMHg1YjY1NWYoMHgxMjgpXT8uW18weDViNjU1ZigweDg3KV0/LltfMHg1YjY1NWYoMHg5MildIT09J2VkZ2UnKV8weDUzYmJhMD1mdW5jdGlvbigpe3ZhciBfMHg1ZDI5NmQ9XzB4NWI2NTVmO3JldHVybiBfMHgyYzgzY2JbXzB4NWQyOTZkKDB4MTI4KV1bJ2hydGltZSddKCk7fSxfMHg0M2NjMjc9ZnVuY3Rpb24oXzB4NWRlYTVkLF8weDQzNDY2OSl7cmV0dXJuIDB4M2U4KihfMHg0MzQ2NjlbMHgwXS1fMHg1ZGVhNWRbMHgwXSkrKF8weDQzNDY2OVsweDFdLV8weDVkZWE1ZFsweDFdKS8weGY0MjQwO307ZWxzZSB0cnl7bGV0IHtwZXJmb3JtYW5jZTpfMHgxYTI2ZTV9PXJlcXVpcmUoJ3BlcmZfaG9va3MnKTtfMHg1M2JiYTA9ZnVuY3Rpb24oKXtyZXR1cm4gXzB4MWEyNmU1Wydub3cnXSgpO307fWNhdGNoe18weDUzYmJhMD1mdW5jdGlvbigpe3JldHVybituZXcgRGF0ZSgpO307fX1yZXR1cm57J2VsYXBzZWQnOl8weDQzY2MyNywndGltZVN0YW1wJzpfMHg1M2JiYTAsJ25vdyc6KCk9PkRhdGVbXzB4NWI2NTVmKDB4OWUpXSgpfTt9ZnVuY3Rpb24gWChfMHgyZmM3YjAsXzB4MTVmNmIxLF8weDJiOTBiZCl7dmFyIF8weDFlYmM2Yz1fMHg0Y2Y5NTk7aWYoXzB4MmZjN2IwW18weDFlYmM2YygweDEwZildIT09dm9pZCAweDApcmV0dXJuIF8weDJmYzdiMFtfMHgxZWJjNmMoMHgxMGYpXTtsZXQgXzB4NGUwODFjPV8weDJmYzdiMFtfMHgxZWJjNmMoMHgxMjgpXT8uWyd2ZXJzaW9ucyddPy5bXzB4MWViYzZjKDB4ZWQpXXx8XzB4MmZjN2IwW18weDFlYmM2YygweDEyOCldPy5bXzB4MWViYzZjKDB4ODcpXT8uW18weDFlYmM2YygweDkyKV09PT1fMHgxZWJjNmMoMHgxMTIpO3JldHVybiBfMHg0ZTA4MWMmJl8weDJiOTBiZD09PV8weDFlYmM2YygweGM2KT9fMHgyZmM3YjBbJ19jb25zb2xlTmluamFBbGxvd2VkVG9TdGFydCddPSEweDE6XzB4MmZjN2IwW18weDFlYmM2YygweDEwZildPV8weDRlMDgxY3x8IV8weDE1ZjZiMXx8XzB4MmZjN2IwWydsb2NhdGlvbiddPy5bXzB4MWViYzZjKDB4YWUpXSYmXzB4MTVmNmIxW18weDFlYmM2YygweGNkKV0oXzB4MmZjN2IwW18weDFlYmM2YygweDk1KV1bXzB4MWViYzZjKDB4YWUpXSksXzB4MmZjN2IwW18weDFlYmM2YygweDEwZildO31mdW5jdGlvbiBIKF8weDRjMmNhZCxfMHg1OTYzYjAsXzB4NWQ0ZGE3LF8weDViNTY5Myl7dmFyIF8weDE2Y2RmMD1fMHg0Y2Y5NTk7XzB4NGMyY2FkPV8weDRjMmNhZCxfMHg1OTYzYjA9XzB4NTk2M2IwLF8weDVkNGRhNz1fMHg1ZDRkYTcsXzB4NWI1NjkzPV8weDViNTY5MztsZXQgXzB4MjMwMjRmPWIoXzB4NGMyY2FkKSxfMHgxYmZiZDc9XzB4MjMwMjRmWydlbGFwc2VkJ10sXzB4MWY2ZmFhPV8weDIzMDI0ZltfMHgxNmNkZjAoMHgxMmEpXTtjbGFzcyBfMHgzNzA5ODd7Y29uc3RydWN0b3IoKXt2YXIgXzB4NjA2ZTQxPV8weDE2Y2RmMDt0aGlzWydfa2V5U3RyUmVnRXhwJ109L14oPyEoPzpkb3xpZnxpbnxmb3J8bGV0fG5ld3x0cnl8dmFyfGNhc2V8ZWxzZXxlbnVtfGV2YWx8ZmFsc2V8bnVsbHx0aGlzfHRydWV8dm9pZHx3aXRofGJyZWFrfGNhdGNofGNsYXNzfGNvbnN0fHN1cGVyfHRocm93fHdoaWxlfHlpZWxkfGRlbGV0ZXxleHBvcnR8aW1wb3J0fHB1YmxpY3xyZXR1cm58c3RhdGljfHN3aXRjaHx0eXBlb2Z8ZGVmYXVsdHxleHRlbmRzfGZpbmFsbHl8cGFja2FnZXxwcml2YXRlfGNvbnRpbnVlfGRlYnVnZ2VyfGZ1bmN0aW9ufGFyZ3VtZW50c3xpbnRlcmZhY2V8cHJvdGVjdGVkfGltcGxlbWVudHN8aW5zdGFuY2VvZikkKVtfJGEtekEtWlxcXFx4QTAtXFxcXHVGRkZGXVtfJGEtekEtWjAtOVxcXFx4QTAtXFxcXHVGRkZGXSokLyx0aGlzWydfbnVtYmVyUmVnRXhwJ109L14oMHxbMS05XVswLTldKikkLyx0aGlzW18weDYwNmU0MSgweDg0KV09LycoW15cXFxcXFxcXCddfFxcXFxcXFxcJykqJy8sdGhpc1tfMHg2MDZlNDEoMHgxMDMpXT1fMHg0YzJjYWRbJ3VuZGVmaW5lZCddLHRoaXNbXzB4NjA2ZTQxKDB4MTM0KV09XzB4NGMyY2FkW18weDYwNmU0MSgweDEwZCldLHRoaXNbXzB4NjA2ZTQxKDB4ZjgpXT1PYmplY3RbXzB4NjA2ZTQxKDB4MTU2KV0sdGhpc1tfMHg2MDZlNDEoMHhhYSldPU9iamVjdFtfMHg2MDZlNDEoMHhjNCldLHRoaXNbXzB4NjA2ZTQxKDB4ZjIpXT1fMHg0YzJjYWRbXzB4NjA2ZTQxKDB4MTU3KV0sdGhpc1tfMHg2MDZlNDEoMHgxNTEpXT1SZWdFeHBbXzB4NjA2ZTQxKDB4YzApXVtfMHg2MDZlNDEoMHgxNDkpXSx0aGlzWydfZGF0ZVRvU3RyaW5nJ109RGF0ZVtfMHg2MDZlNDEoMHhjMCldW18weDYwNmU0MSgweDE0OSldO31bXzB4MTZjZGYwKDB4MTQxKV0oXzB4MzBjZGJmLF8weDQ3MmM0MCxfMHg1MGRlOGMsXzB4MzQwYjZjKXt2YXIgXzB4MjFiNWIwPV8weDE2Y2RmMCxfMHgxNjA1MDY9dGhpcyxfMHgzNGJiMDA9XzB4NTBkZThjW18weDIxYjViMCgweGY0KV07ZnVuY3Rpb24gXzB4MmZlNGY4KF8weDNhNGY4MyxfMHg0ZDljNGIsXzB4NTMwNjNmKXt2YXIgXzB4ZTNmMWViPV8weDIxYjViMDtfMHg0ZDljNGJbXzB4ZTNmMWViKDB4MTY0KV09J3Vua25vd24nLF8weDRkOWM0YltfMHhlM2YxZWIoMHgxM2QpXT1fMHgzYTRmODNbJ21lc3NhZ2UnXSxfMHg0MDk4ZDk9XzB4NTMwNjNmW18weGUzZjFlYigweGVkKV1bJ2N1cnJlbnQnXSxfMHg1MzA2M2ZbJ25vZGUnXVtfMHhlM2YxZWIoMHgxMDApXT1fMHg0ZDljNGIsXzB4MTYwNTA2W18weGUzZjFlYigweDk4KV0oXzB4NGQ5YzRiLF8weDUzMDYzZik7fXRyeXtfMHg1MGRlOGNbXzB4MjFiNWIwKDB4ZmUpXSsrLF8weDUwZGU4Y1tfMHgyMWI1YjAoMHhmNCldJiZfMHg1MGRlOGNbXzB4MjFiNWIwKDB4ZGMpXVtfMHgyMWI1YjAoMHhlMSldKF8weDQ3MmM0MCk7dmFyIF8weGQ2NzI4NSxfMHg0NzdiMWIsXzB4MzViNjg1LF8weDQyMTMwMyxfMHgzY2ZiZWQ9W10sXzB4MmRkNjg1PVtdLF8weDQxMzMwZCxfMHgzNjkzOTU9dGhpc1tfMHgyMWI1YjAoMHgxMGIpXShfMHg0NzJjNDApLF8weDMxZjQyNz1fMHgzNjkzOTU9PT1fMHgyMWI1YjAoMHgxMmIpLF8weDI2YWE1ND0hMHgxLF8weDU0MTY2ND1fMHgzNjkzOTU9PT1fMHgyMWI1YjAoMHgxMzEpLF8weDViMGI4OT10aGlzW18weDIxYjViMCgweDE1ZildKF8weDM2OTM5NSksXzB4YzE0ZDAzPXRoaXNbXzB4MjFiNWIwKDB4MTM4KV0oXzB4MzY5Mzk1KSxfMHg1ZjNhNTU9XzB4NWIwYjg5fHxfMHhjMTRkMDMsXzB4M2ZhZWE1PXt9LF8weDVkZWM1OD0weDAsXzB4M2IwODRhPSEweDEsXzB4NDA5OGQ5LF8weDFiZDEwMj0vXigoWzEtOV17MX1bMC05XSopfDApJC87aWYoXzB4NTBkZThjW18weDIxYjViMCgweDE2NildKXtpZihfMHgzMWY0Mjcpe2lmKF8weDQ3N2IxYj1fMHg0NzJjNDBbXzB4MjFiNWIwKDB4YjMpXSxfMHg0NzdiMWI+XzB4NTBkZThjW18weDIxYjViMCgweGVhKV0pe2ZvcihfMHgzNWI2ODU9MHgwLF8weDQyMTMwMz1fMHg1MGRlOGNbXzB4MjFiNWIwKDB4ZWEpXSxfMHhkNjcyODU9XzB4MzViNjg1O18weGQ2NzI4NTxfMHg0MjEzMDM7XzB4ZDY3Mjg1KyspXzB4MmRkNjg1W18weDIxYjViMCgweGUxKV0oXzB4MTYwNTA2W18weDIxYjViMCgweDEzZSldKF8weDNjZmJlZCxfMHg0NzJjNDAsXzB4MzY5Mzk1LF8weGQ2NzI4NSxfMHg1MGRlOGMpKTtfMHgzMGNkYmZbJ2NhcHBlZEVsZW1lbnRzJ109ITB4MDt9ZWxzZXtmb3IoXzB4MzViNjg1PTB4MCxfMHg0MjEzMDM9XzB4NDc3YjFiLF8weGQ2NzI4NT1fMHgzNWI2ODU7XzB4ZDY3Mjg1PF8weDQyMTMwMztfMHhkNjcyODUrKylfMHgyZGQ2ODVbXzB4MjFiNWIwKDB4ZTEpXShfMHgxNjA1MDZbXzB4MjFiNWIwKDB4MTNlKV0oXzB4M2NmYmVkLF8weDQ3MmM0MCxfMHgzNjkzOTUsXzB4ZDY3Mjg1LF8weDUwZGU4YykpO31fMHg1MGRlOGNbXzB4MjFiNWIwKDB4MTAxKV0rPV8weDJkZDY4NVtfMHgyMWI1YjAoMHhiMyldO31pZighKF8weDM2OTM5NT09PSdudWxsJ3x8XzB4MzY5Mzk1PT09XzB4MjFiNWIwKDB4YjApKSYmIV8weDViMGI4OSYmXzB4MzY5Mzk1IT09XzB4MjFiNWIwKDB4MTNmKSYmXzB4MzY5Mzk1IT09J0J1ZmZlcicmJl8weDM2OTM5NSE9PV8weDIxYjViMCgweDE2Mikpe3ZhciBfMHg1ZGQ2MGE9XzB4MzQwYjZjW18weDIxYjViMCgweGM1KV18fF8weDUwZGU4Y1tfMHgyMWI1YjAoMHhjNSldO2lmKHRoaXNbXzB4MjFiNWIwKDB4ZTcpXShfMHg0NzJjNDApPyhfMHhkNjcyODU9MHgwLF8weDQ3MmM0MFtfMHgyMWI1YjAoMHgxMjIpXShmdW5jdGlvbihfMHgxNGFlOTYpe3ZhciBfMHgxMmIyOGI9XzB4MjFiNWIwO2lmKF8weDVkZWM1OCsrLF8weDUwZGU4Y1tfMHgxMmIyOGIoMHgxMDEpXSsrLF8weDVkZWM1OD5fMHg1ZGQ2MGEpe18weDNiMDg0YT0hMHgwO3JldHVybjt9aWYoIV8weDUwZGU4Y1tfMHgxMmIyOGIoMHgxMWMpXSYmXzB4NTBkZThjW18weDEyYjI4YigweGY0KV0mJl8weDUwZGU4Y1tfMHgxMmIyOGIoMHgxMDEpXT5fMHg1MGRlOGNbXzB4MTJiMjhiKDB4ZGUpXSl7XzB4M2IwODRhPSEweDA7cmV0dXJuO31fMHgyZGQ2ODVbXzB4MTJiMjhiKDB4ZTEpXShfMHgxNjA1MDZbXzB4MTJiMjhiKDB4MTNlKV0oXzB4M2NmYmVkLF8weDQ3MmM0MCxfMHgxMmIyOGIoMHgxMjcpLF8weGQ2NzI4NSsrLF8weDUwZGU4YyxmdW5jdGlvbihfMHg1YjY3Zjcpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBfMHg1YjY3Zjc7fTt9KF8weDE0YWU5NikpKTt9KSk6dGhpc1tfMHgyMWI1YjAoMHgxNDQpXShfMHg0NzJjNDApJiZfMHg0NzJjNDBbXzB4MjFiNWIwKDB4MTIyKV0oZnVuY3Rpb24oXzB4NDA0OGQ5LF8weDJhODM4MSl7dmFyIF8weGIwYjZiMD1fMHgyMWI1YjA7aWYoXzB4NWRlYzU4KyssXzB4NTBkZThjWydhdXRvRXhwYW5kUHJvcGVydHlDb3VudCddKyssXzB4NWRlYzU4Pl8weDVkZDYwYSl7XzB4M2IwODRhPSEweDA7cmV0dXJuO31pZighXzB4NTBkZThjW18weGIwYjZiMCgweDExYyldJiZfMHg1MGRlOGNbXzB4YjBiNmIwKDB4ZjQpXSYmXzB4NTBkZThjW18weGIwYjZiMCgweDEwMSldPl8weDUwZGU4Y1tfMHhiMGI2YjAoMHhkZSldKXtfMHgzYjA4NGE9ITB4MDtyZXR1cm47fXZhciBfMHgxNGM0Y2Y9XzB4MmE4MzgxWyd0b1N0cmluZyddKCk7XzB4MTRjNGNmW18weGIwYjZiMCgweGIzKV0+MHg2NCYmKF8weDE0YzRjZj1fMHgxNGM0Y2ZbXzB4YjBiNmIwKDB4OTApXSgweDAsMHg2NCkrXzB4YjBiNmIwKDB4MTNjKSksXzB4MmRkNjg1WydwdXNoJ10oXzB4MTYwNTA2WydfYWRkUHJvcGVydHknXShfMHgzY2ZiZWQsXzB4NDcyYzQwLCdNYXAnLF8weDE0YzRjZixfMHg1MGRlOGMsZnVuY3Rpb24oXzB4NGJmZjU4KXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gXzB4NGJmZjU4O307fShfMHg0MDQ4ZDkpKSk7fSksIV8weDI2YWE1NCl7dHJ5e2ZvcihfMHg0MTMzMGQgaW4gXzB4NDcyYzQwKWlmKCEoXzB4MzFmNDI3JiZfMHgxYmQxMDJbXzB4MjFiNWIwKDB4YTkpXShfMHg0MTMzMGQpKSYmIXRoaXNbXzB4MjFiNWIwKDB4MTM5KV0oXzB4NDcyYzQwLF8weDQxMzMwZCxfMHg1MGRlOGMpKXtpZihfMHg1ZGVjNTgrKyxfMHg1MGRlOGNbXzB4MjFiNWIwKDB4MTAxKV0rKyxfMHg1ZGVjNTg+XzB4NWRkNjBhKXtfMHgzYjA4NGE9ITB4MDticmVhazt9aWYoIV8weDUwZGU4Y1tfMHgyMWI1YjAoMHgxMWMpXSYmXzB4NTBkZThjW18weDIxYjViMCgweGY0KV0mJl8weDUwZGU4Y1snYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnXT5fMHg1MGRlOGNbXzB4MjFiNWIwKDB4ZGUpXSl7XzB4M2IwODRhPSEweDA7YnJlYWs7fV8weDJkZDY4NVsncHVzaCddKF8weDE2MDUwNltfMHgyMWI1YjAoMHhjYSldKF8weDNjZmJlZCxfMHgzZmFlYTUsXzB4NDcyYzQwLF8weDM2OTM5NSxfMHg0MTMzMGQsXzB4NTBkZThjKSk7fX1jYXRjaHt9aWYoXzB4M2ZhZWE1W18weDIxYjViMCgweDE2NSldPSEweDAsXzB4NTQxNjY0JiYoXzB4M2ZhZWE1W18weDIxYjViMCgweGI3KV09ITB4MCksIV8weDNiMDg0YSl7dmFyIF8weGQ4NTRmMT1bXVtfMHgyMWI1YjAoMHhlMildKHRoaXNbXzB4MjFiNWIwKDB4YWEpXShfMHg0NzJjNDApKVtfMHgyMWI1YjAoMHhlMildKHRoaXNbXzB4MjFiNWIwKDB4MTUzKV0oXzB4NDcyYzQwKSk7Zm9yKF8weGQ2NzI4NT0weDAsXzB4NDc3YjFiPV8weGQ4NTRmMVsnbGVuZ3RoJ107XzB4ZDY3Mjg1PF8weDQ3N2IxYjtfMHhkNjcyODUrKylpZihfMHg0MTMzMGQ9XzB4ZDg1NGYxW18weGQ2NzI4NV0sIShfMHgzMWY0MjcmJl8weDFiZDEwMltfMHgyMWI1YjAoMHhhOSldKF8weDQxMzMwZFtfMHgyMWI1YjAoMHgxNDkpXSgpKSkmJiF0aGlzW18weDIxYjViMCgweDEzOSldKF8weDQ3MmM0MCxfMHg0MTMzMGQsXzB4NTBkZThjKSYmIV8weDNmYWVhNVsnX3BfJytfMHg0MTMzMGRbXzB4MjFiNWIwKDB4MTQ5KV0oKV0pe2lmKF8weDVkZWM1OCsrLF8weDUwZGU4Y1tfMHgyMWI1YjAoMHgxMDEpXSsrLF8weDVkZWM1OD5fMHg1ZGQ2MGEpe18weDNiMDg0YT0hMHgwO2JyZWFrO31pZighXzB4NTBkZThjW18weDIxYjViMCgweDExYyldJiZfMHg1MGRlOGNbXzB4MjFiNWIwKDB4ZjQpXSYmXzB4NTBkZThjW18weDIxYjViMCgweDEwMSldPl8weDUwZGU4Y1snYXV0b0V4cGFuZExpbWl0J10pe18weDNiMDg0YT0hMHgwO2JyZWFrO31fMHgyZGQ2ODVbXzB4MjFiNWIwKDB4ZTEpXShfMHgxNjA1MDZbXzB4MjFiNWIwKDB4Y2EpXShfMHgzY2ZiZWQsXzB4M2ZhZWE1LF8weDQ3MmM0MCxfMHgzNjkzOTUsXzB4NDEzMzBkLF8weDUwZGU4YykpO319fX19aWYoXzB4MzBjZGJmWyd0eXBlJ109XzB4MzY5Mzk1LF8weDVmM2E1NT8oXzB4MzBjZGJmW18weDIxYjViMCgweDg5KV09XzB4NDcyYzQwW18weDIxYjViMCgweDE0YSldKCksdGhpc1tfMHgyMWI1YjAoMHhlMyldKF8weDM2OTM5NSxfMHgzMGNkYmYsXzB4NTBkZThjLF8weDM0MGI2YykpOl8weDM2OTM5NT09PV8weDIxYjViMCgweDEwNCk/XzB4MzBjZGJmW18weDIxYjViMCgweDg5KV09dGhpc1tfMHgyMWI1YjAoMHhmYyldWydjYWxsJ10oXzB4NDcyYzQwKTpfMHgzNjkzOTU9PT1fMHgyMWI1YjAoMHgxNjIpP18weDMwY2RiZltfMHgyMWI1YjAoMHg4OSldPV8weDQ3MmM0MFtfMHgyMWI1YjAoMHgxNDkpXSgpOl8weDM2OTM5NT09PSdSZWdFeHAnP18weDMwY2RiZltfMHgyMWI1YjAoMHg4OSldPXRoaXNbJ19yZWdFeHBUb1N0cmluZyddW18weDIxYjViMCgweDExZSldKF8weDQ3MmM0MCk6XzB4MzY5Mzk1PT09XzB4MjFiNWIwKDB4MTY4KSYmdGhpc1tfMHgyMWI1YjAoMHhmMildP18weDMwY2RiZltfMHgyMWI1YjAoMHg4OSldPXRoaXNbXzB4MjFiNWIwKDB4ZjIpXVtfMHgyMWI1YjAoMHhjMCldW18weDIxYjViMCgweDE0OSldW18weDIxYjViMCgweDExZSldKF8weDQ3MmM0MCk6IV8weDUwZGU4Y1tfMHgyMWI1YjAoMHgxNjYpXSYmIShfMHgzNjkzOTU9PT1fMHgyMWI1YjAoMHgxMDIpfHxfMHgzNjkzOTU9PT1fMHgyMWI1YjAoMHhiMCkpJiYoZGVsZXRlIF8weDMwY2RiZltfMHgyMWI1YjAoMHg4OSldLF8weDMwY2RiZlsnY2FwcGVkJ109ITB4MCksXzB4M2IwODRhJiYoXzB4MzBjZGJmWydjYXBwZWRQcm9wcyddPSEweDApLF8weDQwOThkOT1fMHg1MGRlOGNbXzB4MjFiNWIwKDB4ZWQpXVtfMHgyMWI1YjAoMHgxMDApXSxfMHg1MGRlOGNbJ25vZGUnXVtfMHgyMWI1YjAoMHgxMDApXT1fMHgzMGNkYmYsdGhpc1tfMHgyMWI1YjAoMHg5OCldKF8weDMwY2RiZixfMHg1MGRlOGMpLF8weDJkZDY4NVtfMHgyMWI1YjAoMHhiMyldKXtmb3IoXzB4ZDY3Mjg1PTB4MCxfMHg0NzdiMWI9XzB4MmRkNjg1W18weDIxYjViMCgweGIzKV07XzB4ZDY3Mjg1PF8weDQ3N2IxYjtfMHhkNjcyODUrKylfMHgyZGQ2ODVbXzB4ZDY3Mjg1XShfMHhkNjcyODUpO31fMHgzY2ZiZWRbXzB4MjFiNWIwKDB4YjMpXSYmKF8weDMwY2RiZltfMHgyMWI1YjAoMHhjNSldPV8weDNjZmJlZCk7fWNhdGNoKF8weDM5MGJjNCl7XzB4MmZlNGY4KF8weDM5MGJjNCxfMHgzMGNkYmYsXzB4NTBkZThjKTt9cmV0dXJuIHRoaXNbXzB4MjFiNWIwKDB4ODUpXShfMHg0NzJjNDAsXzB4MzBjZGJmKSx0aGlzW18weDIxYjViMCgweDE0NSldKF8weDMwY2RiZixfMHg1MGRlOGMpLF8weDUwZGU4Y1tfMHgyMWI1YjAoMHhlZCldW18weDIxYjViMCgweDEwMCldPV8weDQwOThkOSxfMHg1MGRlOGNbJ2xldmVsJ10tLSxfMHg1MGRlOGNbJ2F1dG9FeHBhbmQnXT1fMHgzNGJiMDAsXzB4NTBkZThjW18weDIxYjViMCgweGY0KV0mJl8weDUwZGU4Y1tfMHgyMWI1YjAoMHhkYyldW18weDIxYjViMCgweGY1KV0oKSxfMHgzMGNkYmY7fVsnX2dldE93blByb3BlcnR5U3ltYm9scyddKF8weDM1N2JiNSl7dmFyIF8weDQ0MzdmND1fMHgxNmNkZjA7cmV0dXJuIE9iamVjdFsnZ2V0T3duUHJvcGVydHlTeW1ib2xzJ10/T2JqZWN0W18weDQ0MzdmNCgweDE1ZCldKF8weDM1N2JiNSk6W107fVtfMHgxNmNkZjAoMHhlNyldKF8weDM4NzQwMCl7dmFyIF8weDM4ZGFlYz1fMHgxNmNkZjA7cmV0dXJuISEoXzB4Mzg3NDAwJiZfMHg0YzJjYWRbXzB4MzhkYWVjKDB4MTI3KV0mJnRoaXNbJ19vYmplY3RUb1N0cmluZyddKF8weDM4NzQwMCk9PT1fMHgzOGRhZWMoMHhlOSkmJl8weDM4NzQwMFtfMHgzOGRhZWMoMHgxMjIpXSk7fVtfMHgxNmNkZjAoMHgxMzkpXShfMHg0MDUwNTgsXzB4NThhYmY1LF8weDI4MzAyZil7dmFyIF8weDRmNTNlNz1fMHgxNmNkZjA7cmV0dXJuIF8weDI4MzAyZlsnbm9GdW5jdGlvbnMnXT90eXBlb2YgXzB4NDA1MDU4W18weDU4YWJmNV09PV8weDRmNTNlNygweDEzMSk6ITB4MTt9WydfdHlwZSddKF8weDI0ZDRiZCl7dmFyIF8weDU1MDllOT1fMHgxNmNkZjAsXzB4NTU5M2JkPScnO3JldHVybiBfMHg1NTkzYmQ9dHlwZW9mIF8weDI0ZDRiZCxfMHg1NTkzYmQ9PT1fMHg1NTA5ZTkoMHhiZCk/dGhpc1tfMHg1NTA5ZTkoMHg5NyldKF8weDI0ZDRiZCk9PT0nW29iamVjdFxcXFx4MjBBcnJheV0nP18weDU1OTNiZD1fMHg1NTA5ZTkoMHgxMmIpOnRoaXNbJ19vYmplY3RUb1N0cmluZyddKF8weDI0ZDRiZCk9PT0nW29iamVjdFxcXFx4MjBEYXRlXSc/XzB4NTU5M2JkPV8weDU1MDllOSgweDEwNCk6dGhpc1snX29iamVjdFRvU3RyaW5nJ10oXzB4MjRkNGJkKT09PV8weDU1MDllOSgweDExMyk/XzB4NTU5M2JkPV8weDU1MDllOSgweDE2Mik6XzB4MjRkNGJkPT09bnVsbD9fMHg1NTkzYmQ9XzB4NTUwOWU5KDB4MTAyKTpfMHgyNGQ0YmRbXzB4NTUwOWU5KDB4ZjkpXSYmKF8weDU1OTNiZD1fMHgyNGQ0YmRbXzB4NTUwOWU5KDB4ZjkpXVsnbmFtZSddfHxfMHg1NTkzYmQpOl8weDU1OTNiZD09PV8weDU1MDllOSgweGIwKSYmdGhpc1snX0hUTUxBbGxDb2xsZWN0aW9uJ10mJl8weDI0ZDRiZCBpbnN0YW5jZW9mIHRoaXNbXzB4NTUwOWU5KDB4MTM0KV0mJihfMHg1NTkzYmQ9J0hUTUxBbGxDb2xsZWN0aW9uJyksXzB4NTU5M2JkO31bXzB4MTZjZGYwKDB4OTcpXShfMHgyNTNiZjMpe3ZhciBfMHgyZDkwOT1fMHgxNmNkZjA7cmV0dXJuIE9iamVjdFsncHJvdG90eXBlJ11bXzB4MmQ5MDkoMHgxNDkpXVtfMHgyZDkwOSgweDExZSldKF8weDI1M2JmMyk7fVsnX2lzUHJpbWl0aXZlVHlwZSddKF8weDE2YWM4MCl7dmFyIF8weDQ0ZGQ5MT1fMHgxNmNkZjA7cmV0dXJuIF8weDE2YWM4MD09PV8weDQ0ZGQ5MSgweDhhKXx8XzB4MTZhYzgwPT09XzB4NDRkZDkxKDB4YWYpfHxfMHgxNmFjODA9PT0nbnVtYmVyJzt9W18weDE2Y2RmMCgweDEzOCldKF8weDM2ZWY4ZSl7dmFyIF8weDEzZjc4MD1fMHgxNmNkZjA7cmV0dXJuIF8weDM2ZWY4ZT09PSdCb29sZWFuJ3x8XzB4MzZlZjhlPT09XzB4MTNmNzgwKDB4MTNmKXx8XzB4MzZlZjhlPT09XzB4MTNmNzgwKDB4ZmIpO31bXzB4MTZjZGYwKDB4MTNlKV0oXzB4MWQ5MGU1LF8weDJjM2I1YixfMHgyNmE3ZjgsXzB4NDM2YzMyLF8weDU0MzU0MixfMHg1MTZlNDUpe3ZhciBfMHgyOGZkMWM9dGhpcztyZXR1cm4gZnVuY3Rpb24oXzB4NGFlZjBlKXt2YXIgXzB4NTdiOTQ4PV8weDVkYjQsXzB4NDg2OGY0PV8weDU0MzU0MltfMHg1N2I5NDgoMHhlZCldWydjdXJyZW50J10sXzB4MjRmMzY0PV8weDU0MzU0MltfMHg1N2I5NDgoMHhlZCldW18weDU3Yjk0OCgweGI0KV0sXzB4M2UyYTE3PV8weDU0MzU0Mlsnbm9kZSddW18weDU3Yjk0OCgweDE1YyldO18weDU0MzU0Mlsnbm9kZSddWydwYXJlbnQnXT1fMHg0ODY4ZjQsXzB4NTQzNTQyW18weDU3Yjk0OCgweGVkKV1bXzB4NTdiOTQ4KDB4YjQpXT10eXBlb2YgXzB4NDM2YzMyPT1fMHg1N2I5NDgoMHhhNik/XzB4NDM2YzMyOl8weDRhZWYwZSxfMHgxZDkwZTVbXzB4NTdiOTQ4KDB4ZTEpXShfMHgyOGZkMWNbXzB4NTdiOTQ4KDB4ODEpXShfMHgyYzNiNWIsXzB4MjZhN2Y4LF8weDQzNmMzMixfMHg1NDM1NDIsXzB4NTE2ZTQ1KSksXzB4NTQzNTQyW18weDU3Yjk0OCgweGVkKV1bJ3BhcmVudCddPV8weDNlMmExNyxfMHg1NDM1NDJbJ25vZGUnXVtfMHg1N2I5NDgoMHhiNCldPV8weDI0ZjM2NDt9O31bXzB4MTZjZGYwKDB4Y2EpXShfMHg0NzliZWQsXzB4MzE0MDFhLF8weGI0ZDEwZixfMHgyMDExY2QsXzB4NDg2ZjYxLF8weDIyMWNmMSxfMHg0NWVmNzcpe3ZhciBfMHhkNGViZjI9XzB4MTZjZGYwLF8weDFiMmEzNz10aGlzO3JldHVybiBfMHgzMTQwMWFbXzB4ZDRlYmYyKDB4ZDUpK18weDQ4NmY2MVsndG9TdHJpbmcnXSgpXT0hMHgwLGZ1bmN0aW9uKF8weDNkOGY1MCl7dmFyIF8weDJkZjcwND1fMHhkNGViZjIsXzB4MjJlMjZjPV8weDIyMWNmMVsnbm9kZSddW18weDJkZjcwNCgweDEwMCldLF8weDUxMjUyZD1fMHgyMjFjZjFbJ25vZGUnXVtfMHgyZGY3MDQoMHhiNCldLF8weDNlOWFiYz1fMHgyMjFjZjFbXzB4MmRmNzA0KDB4ZWQpXVsncGFyZW50J107XzB4MjIxY2YxWydub2RlJ11bXzB4MmRmNzA0KDB4MTVjKV09XzB4MjJlMjZjLF8weDIyMWNmMVsnbm9kZSddW18weDJkZjcwNCgweGI0KV09XzB4M2Q4ZjUwLF8weDQ3OWJlZFsncHVzaCddKF8weDFiMmEzN1tfMHgyZGY3MDQoMHg4MSldKF8weGI0ZDEwZixfMHgyMDExY2QsXzB4NDg2ZjYxLF8weDIyMWNmMSxfMHg0NWVmNzcpKSxfMHgyMjFjZjFbXzB4MmRmNzA0KDB4ZWQpXVsncGFyZW50J109XzB4M2U5YWJjLF8weDIyMWNmMVtfMHgyZGY3MDQoMHhlZCldW18weDJkZjcwNCgweGI0KV09XzB4NTEyNTJkO307fVtfMHgxNmNkZjAoMHg4MSldKF8weDM5Mjk1ZSxfMHgzZTI3ZWUsXzB4NTAxNTVlLF8weDNhZmZiZCxfMHgxMjE3ZDYpe3ZhciBfMHg1ODI0ZjQ9XzB4MTZjZGYwLF8weDRiNTIxND10aGlzO18weDEyMTdkNnx8KF8weDEyMTdkNj1mdW5jdGlvbihfMHhkMGMyZDUsXzB4MWZlYzBjKXtyZXR1cm4gXzB4ZDBjMmQ1W18weDFmZWMwY107fSk7dmFyIF8weDM3YzRjYT1fMHg1MDE1NWVbXzB4NTgyNGY0KDB4MTQ5KV0oKSxfMHgxODBjYzI9XzB4M2FmZmJkWydleHByZXNzaW9uc1RvRXZhbHVhdGUnXXx8e30sXzB4NTc2OWJmPV8weDNhZmZiZFsnZGVwdGgnXSxfMHhjODJkNWI9XzB4M2FmZmJkWydpc0V4cHJlc3Npb25Ub0V2YWx1YXRlJ107dHJ5e3ZhciBfMHg1MDkzMTk9dGhpc1snX2lzTWFwJ10oXzB4MzkyOTVlKSxfMHgzNjg2YTM9XzB4MzdjNGNhO18weDUwOTMxOSYmXzB4MzY4NmEzWzB4MF09PT0nXFxcXHgyNycmJihfMHgzNjg2YTM9XzB4MzY4NmEzW18weDU4MjRmNCgweGUwKV0oMHgxLF8weDM2ODZhM1snbGVuZ3RoJ10tMHgyKSk7dmFyIF8weGI1ZmUxNz1fMHgzYWZmYmRbXzB4NTgyNGY0KDB4ODYpXT1fMHgxODBjYzJbJ19wXycrXzB4MzY4NmEzXTtfMHhiNWZlMTcmJihfMHgzYWZmYmRbXzB4NTgyNGY0KDB4MTY2KV09XzB4M2FmZmJkWydkZXB0aCddKzB4MSksXzB4M2FmZmJkW18weDU4MjRmNCgweDExYyldPSEhXzB4YjVmZTE3O3ZhciBfMHgxZThjZmE9dHlwZW9mIF8weDUwMTU1ZT09XzB4NTgyNGY0KDB4MTY4KSxfMHg1YTcxZmU9eyduYW1lJzpfMHgxZThjZmF8fF8weDUwOTMxOT9fMHgzN2M0Y2E6dGhpc1tfMHg1ODI0ZjQoMHgxNTkpXShfMHgzN2M0Y2EpfTtpZihfMHgxZThjZmEmJihfMHg1YTcxZmVbXzB4NTgyNGY0KDB4MTY4KV09ITB4MCksIShfMHgzZTI3ZWU9PT0nYXJyYXknfHxfMHgzZTI3ZWU9PT1fMHg1ODI0ZjQoMHgxNDApKSl7dmFyIF8weDNjNTk3Mj10aGlzWydfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJ10oXzB4MzkyOTVlLF8weDUwMTU1ZSk7aWYoXzB4M2M1OTcyJiYoXzB4M2M1OTcyW18weDU4MjRmNCgweGU2KV0mJihfMHg1YTcxZmVbJ3NldHRlciddPSEweDApLF8weDNjNTk3MlsnZ2V0J10mJiFfMHhiNWZlMTcmJiFfMHgzYWZmYmRbXzB4NTgyNGY0KDB4MTE3KV0pKXJldHVybiBfMHg1YTcxZmVbJ2dldHRlciddPSEweDAsdGhpc1tfMHg1ODI0ZjQoMHg5MyldKF8weDVhNzFmZSxfMHgzYWZmYmQpLF8weDVhNzFmZTt9dmFyIF8weDNkNjc0Nzt0cnl7XzB4M2Q2NzQ3PV8weDEyMTdkNihfMHgzOTI5NWUsXzB4NTAxNTVlKTt9Y2F0Y2goXzB4M2Y1Y2ZlKXtyZXR1cm4gXzB4NWE3MWZlPXsnbmFtZSc6XzB4MzdjNGNhLCd0eXBlJzondW5rbm93bicsJ2Vycm9yJzpfMHgzZjVjZmVbXzB4NTgyNGY0KDB4MTFkKV19LHRoaXNbXzB4NTgyNGY0KDB4OTMpXShfMHg1YTcxZmUsXzB4M2FmZmJkKSxfMHg1YTcxZmU7fXZhciBfMHgyNGYxMDg9dGhpc1tfMHg1ODI0ZjQoMHgxMGIpXShfMHgzZDY3NDcpLF8weDM5YWVjYz10aGlzWydfaXNQcmltaXRpdmVUeXBlJ10oXzB4MjRmMTA4KTtpZihfMHg1YTcxZmVbXzB4NTgyNGY0KDB4MTY0KV09XzB4MjRmMTA4LF8weDM5YWVjYyl0aGlzW18weDU4MjRmNCgweDkzKV0oXzB4NWE3MWZlLF8weDNhZmZiZCxfMHgzZDY3NDcsZnVuY3Rpb24oKXt2YXIgXzB4MzhjMWQ1PV8weDU4MjRmNDtfMHg1YTcxZmVbJ3ZhbHVlJ109XzB4M2Q2NzQ3W18weDM4YzFkNSgweDE0YSldKCksIV8weGI1ZmUxNyYmXzB4NGI1MjE0W18weDM4YzFkNSgweGUzKV0oXzB4MjRmMTA4LF8weDVhNzFmZSxfMHgzYWZmYmQse30pO30pO2Vsc2V7dmFyIF8weDVkZGZjYz1fMHgzYWZmYmRbJ2F1dG9FeHBhbmQnXSYmXzB4M2FmZmJkW18weDU4MjRmNCgweGZlKV08XzB4M2FmZmJkW18weDU4MjRmNCgweGY2KV0mJl8weDNhZmZiZFtfMHg1ODI0ZjQoMHhkYyldWydpbmRleE9mJ10oXzB4M2Q2NzQ3KTwweDAmJl8weDI0ZjEwOCE9PV8weDU4MjRmNCgweDEzMSkmJl8weDNhZmZiZFsnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnXTxfMHgzYWZmYmRbXzB4NTgyNGY0KDB4ZGUpXTtfMHg1ZGRmY2N8fF8weDNhZmZiZFtfMHg1ODI0ZjQoMHhmZSldPF8weDU3NjliZnx8XzB4YjVmZTE3Pyh0aGlzW18weDU4MjRmNCgweDE0MSldKF8weDVhNzFmZSxfMHgzZDY3NDcsXzB4M2FmZmJkLF8weGI1ZmUxN3x8e30pLHRoaXNbJ19hZGRpdGlvbmFsTWV0YWRhdGEnXShfMHgzZDY3NDcsXzB4NWE3MWZlKSk6dGhpc1tfMHg1ODI0ZjQoMHg5MyldKF8weDVhNzFmZSxfMHgzYWZmYmQsXzB4M2Q2NzQ3LGZ1bmN0aW9uKCl7dmFyIF8weDQ5NmNlNj1fMHg1ODI0ZjQ7XzB4MjRmMTA4PT09XzB4NDk2Y2U2KDB4MTAyKXx8XzB4MjRmMTA4PT09J3VuZGVmaW5lZCd8fChkZWxldGUgXzB4NWE3MWZlW18weDQ5NmNlNigweDg5KV0sXzB4NWE3MWZlWydjYXBwZWQnXT0hMHgwKTt9KTt9cmV0dXJuIF8weDVhNzFmZTt9ZmluYWxseXtfMHgzYWZmYmRbXzB4NTgyNGY0KDB4ODYpXT1fMHgxODBjYzIsXzB4M2FmZmJkW18weDU4MjRmNCgweDE2NildPV8weDU3NjliZixfMHgzYWZmYmRbJ2lzRXhwcmVzc2lvblRvRXZhbHVhdGUnXT1fMHhjODJkNWI7fX1bJ19jYXBJZlN0cmluZyddKF8weDJhNmM3MyxfMHgxZGFkNDcsXzB4NDE5ODEyLF8weDI5NjA5OCl7dmFyIF8weDM2ZDJmZj1fMHgxNmNkZjAsXzB4NDQ3MzRkPV8weDI5NjA5OFtfMHgzNmQyZmYoMHgxMTEpXXx8XzB4NDE5ODEyW18weDM2ZDJmZigweDExMSldO2lmKChfMHgyYTZjNzM9PT1fMHgzNmQyZmYoMHhhZil8fF8weDJhNmM3Mz09PSdTdHJpbmcnKSYmXzB4MWRhZDQ3Wyd2YWx1ZSddKXtsZXQgXzB4MWVkMGRmPV8weDFkYWQ0N1sndmFsdWUnXVtfMHgzNmQyZmYoMHhiMyldO18weDQxOTgxMltfMHgzNmQyZmYoMHg5YildKz1fMHgxZWQwZGYsXzB4NDE5ODEyW18weDM2ZDJmZigweDliKV0+XzB4NDE5ODEyW18weDM2ZDJmZigweGEwKV0/KF8weDFkYWQ0N1snY2FwcGVkJ109JycsZGVsZXRlIF8weDFkYWQ0N1tfMHgzNmQyZmYoMHg4OSldKTpfMHgxZWQwZGY+XzB4NDQ3MzRkJiYoXzB4MWRhZDQ3WydjYXBwZWQnXT1fMHgxZGFkNDdbXzB4MzZkMmZmKDB4ODkpXVsnc3Vic3RyJ10oMHgwLF8weDQ0NzM0ZCksZGVsZXRlIF8weDFkYWQ0N1tfMHgzNmQyZmYoMHg4OSldKTt9fVsnX2lzTWFwJ10oXzB4MWI4MTU5KXt2YXIgXzB4MWM0YTBhPV8weDE2Y2RmMDtyZXR1cm4hIShfMHgxYjgxNTkmJl8weDRjMmNhZFtfMHgxYzRhMGEoMHgxMzMpXSYmdGhpc1tfMHgxYzRhMGEoMHg5NyldKF8weDFiODE1OSk9PT0nW29iamVjdFxcXFx4MjBNYXBdJyYmXzB4MWI4MTU5Wydmb3JFYWNoJ10pO31bXzB4MTZjZGYwKDB4MTU5KV0oXzB4MTNkZjM1KXt2YXIgXzB4MzJmMzI5PV8weDE2Y2RmMDtpZihfMHgxM2RmMzVbJ21hdGNoJ10oL15cXFxcZCskLykpcmV0dXJuIF8weDEzZGYzNTt2YXIgXzB4ZGQ4NmU1O3RyeXtfMHhkZDg2ZTU9SlNPTltfMHgzMmYzMjkoMHgxMGMpXSgnJytfMHgxM2RmMzUpO31jYXRjaHtfMHhkZDg2ZTU9J1xcXFx4MjInK3RoaXNbXzB4MzJmMzI5KDB4OTcpXShfMHgxM2RmMzUpKydcXFxceDIyJzt9cmV0dXJuIF8weGRkODZlNVtfMHgzMmYzMjkoMHgxMDkpXSgvXlxcXCIoW2EtekEtWl9dW2EtekEtWl8wLTldKilcXFwiJC8pP18weGRkODZlNT1fMHhkZDg2ZTVbJ3N1YnN0ciddKDB4MSxfMHhkZDg2ZTVbXzB4MzJmMzI5KDB4YjMpXS0weDIpOl8weGRkODZlNT1fMHhkZDg2ZTVbJ3JlcGxhY2UnXSgvJy9nLCdcXFxceDVjXFxcXHgyNycpW18weDMyZjMyOSgweGEzKV0oL1xcXFxcXFxcXFxcIi9nLCdcXFxceDIyJylbXzB4MzJmMzI5KDB4YTMpXSgvKF5cXFwifFxcXCIkKS9nLCdcXFxceDI3JyksXzB4ZGQ4NmU1O31bXzB4MTZjZGYwKDB4OTMpXShfMHgzOTY3ZmQsXzB4MTFmYzYwLF8weDViYjVjNCxfMHgxMGZkYjMpe3ZhciBfMHgzN2NhNjY9XzB4MTZjZGYwO3RoaXNbJ190cmVlTm9kZVByb3BlcnRpZXNCZWZvcmVGdWxsVmFsdWUnXShfMHgzOTY3ZmQsXzB4MTFmYzYwKSxfMHgxMGZkYjMmJl8weDEwZmRiMygpLHRoaXNbXzB4MzdjYTY2KDB4ODUpXShfMHg1YmI1YzQsXzB4Mzk2N2ZkKSx0aGlzW18weDM3Y2E2NigweDE0NSldKF8weDM5NjdmZCxfMHgxMWZjNjApO31bXzB4MTZjZGYwKDB4OTgpXShfMHg0NjYyZDksXzB4ODQ3MWY1KXt2YXIgXzB4ZjMzMTVlPV8weDE2Y2RmMDt0aGlzWydfc2V0Tm9kZUlkJ10oXzB4NDY2MmQ5LF8weDg0NzFmNSksdGhpc1snX3NldE5vZGVRdWVyeVBhdGgnXShfMHg0NjYyZDksXzB4ODQ3MWY1KSx0aGlzW18weGYzMzE1ZSgweDE2MyldKF8weDQ2NjJkOSxfMHg4NDcxZjUpLHRoaXNbJ19zZXROb2RlUGVybWlzc2lvbnMnXShfMHg0NjYyZDksXzB4ODQ3MWY1KTt9W18weDE2Y2RmMCgweDE0MyldKF8weDFmM2U1NyxfMHgxZGQ2ZWEpe31bXzB4MTZjZGYwKDB4MTBhKV0oXzB4M2Q0NWFmLF8weDNhOWM3MCl7fVtfMHgxNmNkZjAoMHhjOCldKF8weDJjYzgzMixfMHgyYzAzZTkpe31bXzB4MTZjZGYwKDB4OTYpXShfMHg0Y2I1NjEpe3ZhciBfMHgyOTI2ZDA9XzB4MTZjZGYwO3JldHVybiBfMHg0Y2I1NjE9PT10aGlzW18weDI5MjZkMCgweDEwMyldO31bXzB4MTZjZGYwKDB4MTQ1KV0oXzB4MjhjYmIzLF8weDQ0YWYyNil7dmFyIF8weDFlNzZkZD1fMHgxNmNkZjA7dGhpc1tfMHgxZTc2ZGQoMHhjOCldKF8weDI4Y2JiMyxfMHg0NGFmMjYpLHRoaXNbXzB4MWU3NmRkKDB4ZmQpXShfMHgyOGNiYjMpLF8weDQ0YWYyNltfMHgxZTc2ZGQoMHg4YyldJiZ0aGlzW18weDFlNzZkZCgweDk5KV0oXzB4MjhjYmIzKSx0aGlzW18weDFlNzZkZCgweGYxKV0oXzB4MjhjYmIzLF8weDQ0YWYyNiksdGhpc1tfMHgxZTc2ZGQoMHhiNSldKF8weDI4Y2JiMyxfMHg0NGFmMjYpLHRoaXNbJ19jbGVhbk5vZGUnXShfMHgyOGNiYjMpO31bXzB4MTZjZGYwKDB4ODUpXShfMHg1MTc2M2MsXzB4NDEzZTliKXt2YXIgXzB4ZjcxNTlkPV8weDE2Y2RmMDtsZXQgXzB4NGNmNjVhO3RyeXtfMHg0YzJjYWRbXzB4ZjcxNTlkKDB4MTIzKV0mJihfMHg0Y2Y2NWE9XzB4NGMyY2FkW18weGY3MTU5ZCgweDEyMyldW18weGY3MTU5ZCgweDEzZCldLF8weDRjMmNhZFtfMHhmNzE1OWQoMHgxMjMpXVtfMHhmNzE1OWQoMHgxM2QpXT1mdW5jdGlvbigpe30pLF8weDUxNzYzYyYmdHlwZW9mIF8weDUxNzYzY1tfMHhmNzE1OWQoMHhiMyldPT1fMHhmNzE1OWQoMHhhNikmJihfMHg0MTNlOWJbXzB4ZjcxNTlkKDB4YjMpXT1fMHg1MTc2M2NbXzB4ZjcxNTlkKDB4YjMpXSk7fWNhdGNoe31maW5hbGx5e18weDRjZjY1YSYmKF8weDRjMmNhZFtfMHhmNzE1OWQoMHgxMjMpXVtfMHhmNzE1OWQoMHgxM2QpXT1fMHg0Y2Y2NWEpO31pZihfMHg0MTNlOWJbXzB4ZjcxNTlkKDB4MTY0KV09PT0nbnVtYmVyJ3x8XzB4NDEzZTliW18weGY3MTU5ZCgweDE2NCldPT09XzB4ZjcxNTlkKDB4ZmIpKXtpZihpc05hTihfMHg0MTNlOWJbJ3ZhbHVlJ10pKV8weDQxM2U5YltfMHhmNzE1OWQoMHgxNTQpXT0hMHgwLGRlbGV0ZSBfMHg0MTNlOWJbXzB4ZjcxNTlkKDB4ODkpXTtlbHNlIHN3aXRjaChfMHg0MTNlOWJbXzB4ZjcxNTlkKDB4ODkpXSl7Y2FzZSBOdW1iZXJbJ1BPU0lUSVZFX0lORklOSVRZJ106XzB4NDEzZTliW18weGY3MTU5ZCgweDExYSldPSEweDAsZGVsZXRlIF8weDQxM2U5YltfMHhmNzE1OWQoMHg4OSldO2JyZWFrO2Nhc2UgTnVtYmVyW18weGY3MTU5ZCgweGQyKV06XzB4NDEzZTliW18weGY3MTU5ZCgweDgwKV09ITB4MCxkZWxldGUgXzB4NDEzZTliW18weGY3MTU5ZCgweDg5KV07YnJlYWs7Y2FzZSAweDA6dGhpc1tfMHhmNzE1OWQoMHhlOCldKF8weDQxM2U5YlsndmFsdWUnXSkmJihfMHg0MTNlOWJbXzB4ZjcxNTlkKDB4MTJlKV09ITB4MCk7YnJlYWs7fX1lbHNlIF8weDQxM2U5YltfMHhmNzE1OWQoMHgxNjQpXT09PV8weGY3MTU5ZCgweDEzMSkmJnR5cGVvZiBfMHg1MTc2M2NbXzB4ZjcxNTlkKDB4ODIpXT09J3N0cmluZycmJl8weDUxNzYzY1tfMHhmNzE1OWQoMHg4MildJiZfMHg0MTNlOWJbXzB4ZjcxNTlkKDB4ODIpXSYmXzB4NTE3NjNjW18weGY3MTU5ZCgweDgyKV0hPT1fMHg0MTNlOWJbXzB4ZjcxNTlkKDB4ODIpXSYmKF8weDQxM2U5YltfMHhmNzE1OWQoMHg4ZildPV8weDUxNzYzY1tfMHhmNzE1OWQoMHg4MildKTt9W18weDE2Y2RmMCgweGU4KV0oXzB4MTE4MTJhKXt2YXIgXzB4MmU3ODY3PV8weDE2Y2RmMDtyZXR1cm4gMHgxL18weDExODEyYT09PU51bWJlcltfMHgyZTc4NjcoMHhkMildO31bXzB4MTZjZGYwKDB4OTkpXShfMHgxNGY0Y2Qpe3ZhciBfMHg0ZTg1MmE9XzB4MTZjZGYwOyFfMHgxNGY0Y2RbXzB4NGU4NTJhKDB4YzUpXXx8IV8weDE0ZjRjZFtfMHg0ZTg1MmEoMHhjNSldW18weDRlODUyYSgweGIzKV18fF8weDE0ZjRjZFsndHlwZSddPT09XzB4NGU4NTJhKDB4MTJiKXx8XzB4MTRmNGNkW18weDRlODUyYSgweDE2NCldPT09J01hcCd8fF8weDE0ZjRjZFtfMHg0ZTg1MmEoMHgxNjQpXT09PSdTZXQnfHxfMHgxNGY0Y2RbXzB4NGU4NTJhKDB4YzUpXVsnc29ydCddKGZ1bmN0aW9uKF8weDE2NWVkZCxfMHgzYjU3ZTgpe3ZhciBfMHg0N2FiZTU9XzB4NGU4NTJhLF8weDE4NDhmYT1fMHgxNjVlZGRbXzB4NDdhYmU1KDB4ODIpXVtfMHg0N2FiZTUoMHhkNildKCksXzB4NDc1OTZkPV8weDNiNTdlOFtfMHg0N2FiZTUoMHg4MildW18weDQ3YWJlNSgweGQ2KV0oKTtyZXR1cm4gXzB4MTg0OGZhPF8weDQ3NTk2ZD8tMHgxOl8weDE4NDhmYT5fMHg0NzU5NmQ/MHgxOjB4MDt9KTt9W18weDE2Y2RmMCgweGYxKV0oXzB4Y2MxNWIzLF8weDQ5MTdjZil7dmFyIF8weDRkMDM5Mz1fMHgxNmNkZjA7aWYoIShfMHg0OTE3Y2ZbXzB4NGQwMzkzKDB4YjEpXXx8IV8weGNjMTViM1tfMHg0ZDAzOTMoMHhjNSldfHwhXzB4Y2MxNWIzWydwcm9wcyddW18weDRkMDM5MygweGIzKV0pKXtmb3IodmFyIF8weDQ4MWExYT1bXSxfMHg0Njc3ZjI9W10sXzB4MjAzNDAwPTB4MCxfMHgyNjUwNmQ9XzB4Y2MxNWIzWydwcm9wcyddW18weDRkMDM5MygweGIzKV07XzB4MjAzNDAwPF8weDI2NTA2ZDtfMHgyMDM0MDArKyl7dmFyIF8weDExOWY0Nj1fMHhjYzE1YjNbXzB4NGQwMzkzKDB4YzUpXVtfMHgyMDM0MDBdO18weDExOWY0NlsndHlwZSddPT09J2Z1bmN0aW9uJz9fMHg0ODFhMWFbJ3B1c2gnXShfMHgxMTlmNDYpOl8weDQ2NzdmMltfMHg0ZDAzOTMoMHhlMSldKF8weDExOWY0Nik7fWlmKCEoIV8weDQ2NzdmMltfMHg0ZDAzOTMoMHhiMyldfHxfMHg0ODFhMWFbJ2xlbmd0aCddPD0weDEpKXtfMHhjYzE1YjNbXzB4NGQwMzkzKDB4YzUpXT1fMHg0Njc3ZjI7dmFyIF8weGVjNDg3OT17J2Z1bmN0aW9uc05vZGUnOiEweDAsJ3Byb3BzJzpfMHg0ODFhMWF9O3RoaXNbXzB4NGQwMzkzKDB4MTQzKV0oXzB4ZWM0ODc5LF8weDQ5MTdjZiksdGhpc1tfMHg0ZDAzOTMoMHhjOCldKF8weGVjNDg3OSxfMHg0OTE3Y2YpLHRoaXNbJ19zZXROb2RlRXhwYW5kYWJsZVN0YXRlJ10oXzB4ZWM0ODc5KSx0aGlzWydfc2V0Tm9kZVBlcm1pc3Npb25zJ10oXzB4ZWM0ODc5LF8weDQ5MTdjZiksXzB4ZWM0ODc5WydpZCddKz0nXFxcXHgyMGYnLF8weGNjMTViM1tfMHg0ZDAzOTMoMHhjNSldW18weDRkMDM5MygweDExZildKF8weGVjNDg3OSk7fX19W18weDE2Y2RmMCgweGI1KV0oXzB4NGIzNmIzLF8weDU2OWZlMCl7fVtfMHgxNmNkZjAoMHhmZCldKF8weDJhZGZlYyl7fVsnX2lzQXJyYXknXShfMHg1MmFkNTApe3ZhciBfMHgzYzY0NDI9XzB4MTZjZGYwO3JldHVybiBBcnJheVtfMHgzYzY0NDIoMHgxNTApXShfMHg1MmFkNTApfHx0eXBlb2YgXzB4NTJhZDUwPT1fMHgzYzY0NDIoMHhiZCkmJnRoaXNbXzB4M2M2NDQyKDB4OTcpXShfMHg1MmFkNTApPT09XzB4M2M2NDQyKDB4YjkpO31bXzB4MTZjZGYwKDB4YTEpXShfMHgxMTU1YjgsXzB4MmI0MzY0KXt9W18weDE2Y2RmMCgweDlhKV0oXzB4ZWI3ZTZlKXt2YXIgXzB4NTlmNzFhPV8weDE2Y2RmMDtkZWxldGUgXzB4ZWI3ZTZlWydfaGFzU3ltYm9sUHJvcGVydHlPbkl0c1BhdGgnXSxkZWxldGUgXzB4ZWI3ZTZlW18weDU5ZjcxYSgweGYzKV0sZGVsZXRlIF8weGViN2U2ZVtfMHg1OWY3MWEoMHhjYildO31bXzB4MTZjZGYwKDB4MTYzKV0oXzB4MTQ1NWNiLF8weDMzNGIwYSl7fX1sZXQgXzB4NGY1MmJkPW5ldyBfMHgzNzA5ODcoKSxfMHgzZjkxZDA9eydwcm9wcyc6MHg2NCwnZWxlbWVudHMnOjB4NjQsJ3N0ckxlbmd0aCc6MHg0MDAqMHgzMiwndG90YWxTdHJMZW5ndGgnOjB4NDAwKjB4MzIsJ2F1dG9FeHBhbmRMaW1pdCc6MHgxMzg4LCdhdXRvRXhwYW5kTWF4RGVwdGgnOjB4YX0sXzB4MzZkZjYwPXsncHJvcHMnOjB4NSwnZWxlbWVudHMnOjB4NSwnc3RyTGVuZ3RoJzoweDEwMCwndG90YWxTdHJMZW5ndGgnOjB4MTAwKjB4MywnYXV0b0V4cGFuZExpbWl0JzoweDFlLCdhdXRvRXhwYW5kTWF4RGVwdGgnOjB4Mn07ZnVuY3Rpb24gXzB4NGFlZGIwKF8weDM3ZDdkNSxfMHg1NGUxNTcsXzB4MWM0MjIzLF8weDI2NTVlYyxfMHg1NGJkNDgsXzB4MTYyZjlmKXt2YXIgXzB4NWI2OWM1PV8weDE2Y2RmMDtsZXQgXzB4MTg4ZTZkLF8weDUxZWVlYzt0cnl7XzB4NTFlZWVjPV8weDFmNmZhYSgpLF8weDE4OGU2ZD1fMHg1ZDRkYTdbXzB4NTRlMTU3XSwhXzB4MTg4ZTZkfHxfMHg1MWVlZWMtXzB4MTg4ZTZkWyd0cyddPjB4MWY0JiZfMHgxODhlNmRbXzB4NWI2OWM1KDB4YjIpXSYmXzB4MTg4ZTZkWyd0aW1lJ10vXzB4MTg4ZTZkWydjb3VudCddPDB4NjQ/KF8weDVkNGRhN1tfMHg1NGUxNTddPV8weDE4OGU2ZD17J2NvdW50JzoweDAsJ3RpbWUnOjB4MCwndHMnOl8weDUxZWVlY30sXzB4NWQ0ZGE3WydoaXRzJ109e30pOl8weDUxZWVlYy1fMHg1ZDRkYTdbXzB4NWI2OWM1KDB4MTE2KV1bJ3RzJ10+MHgzMiYmXzB4NWQ0ZGE3WydoaXRzJ11bXzB4NWI2OWM1KDB4YjIpXSYmXzB4NWQ0ZGE3W18weDViNjljNSgweDExNildW18weDViNjljNSgweDljKV0vXzB4NWQ0ZGE3WydoaXRzJ11bXzB4NWI2OWM1KDB4YjIpXTwweDY0JiYoXzB4NWQ0ZGE3W18weDViNjljNSgweDExNildPXt9KTtsZXQgXzB4NWY0ODE3PVtdLF8weGY0NzNmZj1fMHgxODhlNmRbJ3JlZHVjZUxpbWl0cyddfHxfMHg1ZDRkYTdbXzB4NWI2OWM1KDB4MTE2KV1bXzB4NWI2OWM1KDB4ZGIpXT9fMHgzNmRmNjA6XzB4M2Y5MWQwLF8weDZmMTdhMT1fMHgxNWUwYWM9Pnt2YXIgXzB4MjVjNDM5PV8weDViNjljNTtsZXQgXzB4NWM3ODI5PXt9O3JldHVybiBfMHg1Yzc4MjlbXzB4MjVjNDM5KDB4YzUpXT1fMHgxNWUwYWNbXzB4MjVjNDM5KDB4YzUpXSxfMHg1Yzc4MjlbJ2VsZW1lbnRzJ109XzB4MTVlMGFjW18weDI1YzQzOSgweGVhKV0sXzB4NWM3ODI5W18weDI1YzQzOSgweDExMSldPV8weDE1ZTBhY1tfMHgyNWM0MzkoMHgxMTEpXSxfMHg1Yzc4MjlbXzB4MjVjNDM5KDB4YTApXT1fMHgxNWUwYWNbXzB4MjVjNDM5KDB4YTApXSxfMHg1Yzc4MjlbXzB4MjVjNDM5KDB4ZGUpXT1fMHgxNWUwYWNbXzB4MjVjNDM5KDB4ZGUpXSxfMHg1Yzc4MjlbXzB4MjVjNDM5KDB4ZjYpXT1fMHgxNWUwYWNbXzB4MjVjNDM5KDB4ZjYpXSxfMHg1Yzc4MjlbJ3NvcnRQcm9wcyddPSEweDEsXzB4NWM3ODI5Wydub0Z1bmN0aW9ucyddPSFfMHg1OTYzYjAsXzB4NWM3ODI5W18weDI1YzQzOSgweDE2NildPTB4MSxfMHg1Yzc4MjlbXzB4MjVjNDM5KDB4ZmUpXT0weDAsXzB4NWM3ODI5WydleHBJZCddPV8weDI1YzQzOSgweDEwNiksXzB4NWM3ODI5W18weDI1YzQzOSgweDEzNyldPV8weDI1YzQzOSgweGE1KSxfMHg1Yzc4MjlbXzB4MjVjNDM5KDB4ZjQpXT0hMHgwLF8weDVjNzgyOVtfMHgyNWM0MzkoMHhkYyldPVtdLF8weDVjNzgyOVsnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnXT0weDAsXzB4NWM3ODI5W18weDI1YzQzOSgweDExNyldPSEweDAsXzB4NWM3ODI5W18weDI1YzQzOSgweDliKV09MHgwLF8weDVjNzgyOVtfMHgyNWM0MzkoMHhlZCldPXsnY3VycmVudCc6dm9pZCAweDAsJ3BhcmVudCc6dm9pZCAweDAsJ2luZGV4JzoweDB9LF8weDVjNzgyOTt9O2Zvcih2YXIgXzB4NGY5MGZlPTB4MDtfMHg0ZjkwZmU8XzB4NTRiZDQ4W18weDViNjljNSgweGIzKV07XzB4NGY5MGZlKyspXzB4NWY0ODE3WydwdXNoJ10oXzB4NGY1MmJkW18weDViNjljNSgweDE0MSldKHsndGltZU5vZGUnOl8weDM3ZDdkNT09PV8weDViNjljNSgweDljKXx8dm9pZCAweDB9LF8weDU0YmQ0OFtfMHg0ZjkwZmVdLF8weDZmMTdhMShfMHhmNDczZmYpLHt9KSk7aWYoXzB4MzdkN2Q1PT09XzB4NWI2OWM1KDB4YTgpKXtsZXQgXzB4MzBhOTIzPUVycm9yW18weDViNjljNSgweDk0KV07dHJ5e0Vycm9yWydzdGFja1RyYWNlTGltaXQnXT0weDEvMHgwLF8weDVmNDgxN1sncHVzaCddKF8weDRmNTJiZFtfMHg1YjY5YzUoMHgxNDEpXSh7J3N0YWNrTm9kZSc6ITB4MH0sbmV3IEVycm9yKClbJ3N0YWNrJ10sXzB4NmYxN2ExKF8weGY0NzNmZikseydzdHJMZW5ndGgnOjB4MS8weDB9KSk7fWZpbmFsbHl7RXJyb3JbXzB4NWI2OWM1KDB4OTQpXT1fMHgzMGE5MjM7fX1yZXR1cm57J21ldGhvZCc6J2xvZycsJ3ZlcnNpb24nOl8weDViNTY5MywnYXJncyc6W3sndHMnOl8weDFjNDIyMywnc2Vzc2lvbic6XzB4MjY1NWVjLCdhcmdzJzpfMHg1ZjQ4MTcsJ2lkJzpfMHg1NGUxNTcsJ2NvbnRleHQnOl8weDE2MmY5Zn1dfTt9Y2F0Y2goXzB4MWJkZDYzKXtyZXR1cm57J21ldGhvZCc6J2xvZycsJ3ZlcnNpb24nOl8weDViNTY5MywnYXJncyc6W3sndHMnOl8weDFjNDIyMywnc2Vzc2lvbic6XzB4MjY1NWVjLCdhcmdzJzpbeyd0eXBlJzpfMHg1YjY5YzUoMHhkNyksJ2Vycm9yJzpfMHgxYmRkNjMmJl8weDFiZGQ2M1tfMHg1YjY5YzUoMHgxMWQpXX1dLCdpZCc6XzB4NTRlMTU3LCdjb250ZXh0JzpfMHgxNjJmOWZ9XX07fWZpbmFsbHl7dHJ5e2lmKF8weDE4OGU2ZCYmXzB4NTFlZWVjKXtsZXQgXzB4NTFlZTU3PV8weDFmNmZhYSgpO18weDE4OGU2ZFtfMHg1YjY5YzUoMHhiMildKyssXzB4MTg4ZTZkW18weDViNjljNSgweDljKV0rPV8weDFiZmJkNyhfMHg1MWVlZWMsXzB4NTFlZTU3KSxfMHgxODhlNmRbJ3RzJ109XzB4NTFlZTU3LF8weDVkNGRhN1tfMHg1YjY5YzUoMHgxMTYpXVtfMHg1YjY5YzUoMHhiMildKyssXzB4NWQ0ZGE3W18weDViNjljNSgweDExNildWyd0aW1lJ10rPV8weDFiZmJkNyhfMHg1MWVlZWMsXzB4NTFlZTU3KSxfMHg1ZDRkYTdbXzB4NWI2OWM1KDB4MTE2KV1bJ3RzJ109XzB4NTFlZTU3LChfMHgxODhlNmRbJ2NvdW50J10+MHgzMnx8XzB4MTg4ZTZkW18weDViNjljNSgweDljKV0+MHg2NCkmJihfMHgxODhlNmRbJ3JlZHVjZUxpbWl0cyddPSEweDApLChfMHg1ZDRkYTdbJ2hpdHMnXVsnY291bnQnXT4weDNlOHx8XzB4NWQ0ZGE3W18weDViNjljNSgweDExNildW18weDViNjljNSgweDljKV0+MHgxMmMpJiYoXzB4NWQ0ZGE3W18weDViNjljNSgweDExNildW18weDViNjljNSgweGRiKV09ITB4MCk7fX1jYXRjaHt9fX1yZXR1cm4gXzB4NGFlZGIwO30oKF8weDFkOWViYSxfMHg1MjE5MTAsXzB4MjIzYWFhLF8weDNiZjBmZixfMHgzY2M4M2IsXzB4MmYzMTU1LF8weDE0NjNhNixfMHgyYWVhMGEsXzB4NTRhNmNlLF8weDQ5YjY1ZixfMHg0MGRhMDEpPT57dmFyIF8weGEwNGE5YT1fMHg0Y2Y5NTk7aWYoXzB4MWQ5ZWJhWydfY29uc29sZV9uaW5qYSddKXJldHVybiBfMHgxZDllYmFbXzB4YTA0YTlhKDB4MTQyKV07aWYoIVgoXzB4MWQ5ZWJhLF8weDJhZWEwYSxfMHgzY2M4M2IpKXJldHVybiBfMHgxZDllYmFbXzB4YTA0YTlhKDB4MTQyKV09eydjb25zb2xlTG9nJzooKT0+e30sJ2NvbnNvbGVUcmFjZSc6KCk9Pnt9LCdjb25zb2xlVGltZSc6KCk9Pnt9LCdjb25zb2xlVGltZUVuZCc6KCk9Pnt9LCdhdXRvTG9nJzooKT0+e30sJ2F1dG9Mb2dNYW55JzooKT0+e30sJ2F1dG9UcmFjZU1hbnknOigpPT57fSwnY292ZXJhZ2UnOigpPT57fSwnYXV0b1RyYWNlJzooKT0+e30sJ2F1dG9UaW1lJzooKT0+e30sJ2F1dG9UaW1lRW5kJzooKT0+e319LF8weDFkOWViYVtfMHhhMDRhOWEoMHgxNDIpXTtsZXQgXzB4MWIyM2M2PWIoXzB4MWQ5ZWJhKSxfMHhiNTRjNDM9XzB4MWIyM2M2W18weGEwNGE5YSgweGRhKV0sXzB4M2YwMWM1PV8weDFiMjNjNltfMHhhMDRhOWEoMHgxMmEpXSxfMHg1NmU2YjQ9XzB4MWIyM2M2Wydub3cnXSxfMHgxZTY5ZjE9eydoaXRzJzp7fSwndHMnOnt9fSxfMHgyMjNkYmM9SChfMHgxZDllYmEsXzB4NTRhNmNlLF8weDFlNjlmMSxfMHgyZjMxNTUpLF8weDQxMjM4MT1fMHgxZWJlZDI9PntfMHgxZTY5ZjFbJ3RzJ11bXzB4MWViZWQyXT1fMHgzZjAxYzUoKTt9LF8weDM4MGFlMD0oXzB4MTE5YTI2LF8weDE5NzEwOSk9Pnt2YXIgXzB4OWExMDNkPV8weGEwNGE5YTtsZXQgXzB4NWQyNDFiPV8weDFlNjlmMVsndHMnXVtfMHgxOTcxMDldO2lmKGRlbGV0ZSBfMHgxZTY5ZjFbJ3RzJ11bXzB4MTk3MTA5XSxfMHg1ZDI0MWIpe2xldCBfMHg0MmI1ODg9XzB4YjU0YzQzKF8weDVkMjQxYixfMHgzZjAxYzUoKSk7XzB4MjhkYWY1KF8weDIyM2RiYyhfMHg5YTEwM2QoMHg5YyksXzB4MTE5YTI2LF8weDU2ZTZiNCgpLF8weGRlMzNjZSxbXzB4NDJiNTg4XSxfMHgxOTcxMDkpKTt9fSxfMHg1Yjg2YjA9XzB4NWFlNjA5PT4oXzB4M2NjODNiPT09XzB4YTA0YTlhKDB4MTIwKSYmXzB4MWQ5ZWJhWydvcmlnaW4nXSYmXzB4NWFlNjA5Py5bXzB4YTA0YTlhKDB4ZDEpXT8uWydsZW5ndGgnXSYmKF8weDVhZTYwOVtfMHhhMDRhOWEoMHhkMSldWzB4MF1bXzB4YTA0YTlhKDB4MTQ2KV09XzB4MWQ5ZWJhW18weGEwNGE5YSgweDE0NildKSxfMHg1YWU2MDkpO18weDFkOWViYVtfMHhhMDRhOWEoMHgxNDIpXT17J2NvbnNvbGVMb2cnOihfMHgxZGQyMjQsXzB4NDFiYjY0KT0+e3ZhciBfMHgxYjY1OGU9XzB4YTA0YTlhO18weDFkOWViYVtfMHgxYjY1OGUoMHgxMjMpXVtfMHgxYjY1OGUoMHgxMWIpXVtfMHgxYjY1OGUoMHg4MildIT09XzB4MWI2NThlKDB4ZjApJiZfMHgyOGRhZjUoXzB4MjIzZGJjKF8weDFiNjU4ZSgweDExYiksXzB4MWRkMjI0LF8weDU2ZTZiNCgpLF8weGRlMzNjZSxfMHg0MWJiNjQpKTt9LCdjb25zb2xlVHJhY2UnOihfMHgyNGI1YjIsXzB4MmIwOTcxKT0+e3ZhciBfMHg0NjZlY2I9XzB4YTA0YTlhO18weDFkOWViYVtfMHg0NjZlY2IoMHgxMjMpXVsnbG9nJ11bXzB4NDY2ZWNiKDB4ODIpXSE9PV8weDQ2NmVjYigweDhiKSYmXzB4MjhkYWY1KF8weDViODZiMChfMHgyMjNkYmMoXzB4NDY2ZWNiKDB4YTgpLF8weDI0YjViMixfMHg1NmU2YjQoKSxfMHhkZTMzY2UsXzB4MmIwOTcxKSkpO30sJ2NvbnNvbGVUaW1lJzpfMHhmZTc0OWQ9PntfMHg0MTIzODEoXzB4ZmU3NDlkKTt9LCdjb25zb2xlVGltZUVuZCc6KF8weDM4YzBkNyxfMHg0OTIyMjYpPT57XzB4MzgwYWUwKF8weDQ5MjIyNixfMHgzOGMwZDcpO30sJ2F1dG9Mb2cnOihfMHgyZWM4MzQsXzB4MmZhNDM5KT0+e3ZhciBfMHgyYjU5MTE9XzB4YTA0YTlhO18weDI4ZGFmNShfMHgyMjNkYmMoXzB4MmI1OTExKDB4MTFiKSxfMHgyZmE0MzksXzB4NTZlNmI0KCksXzB4ZGUzM2NlLFtfMHgyZWM4MzRdKSk7fSwnYXV0b0xvZ01hbnknOihfMHgxY2Y2OTIsXzB4MWNiODU5KT0+e3ZhciBfMHg1Yjk5MWQ9XzB4YTA0YTlhO18weDI4ZGFmNShfMHgyMjNkYmMoXzB4NWI5OTFkKDB4MTFiKSxfMHgxY2Y2OTIsXzB4NTZlNmI0KCksXzB4ZGUzM2NlLF8weDFjYjg1OSkpO30sJ2F1dG9UcmFjZSc6KF8weDFhOTA5NCxfMHgyNWUxNWQpPT57XzB4MjhkYWY1KF8weDViODZiMChfMHgyMjNkYmMoJ3RyYWNlJyxfMHgyNWUxNWQsXzB4NTZlNmI0KCksXzB4ZGUzM2NlLFtfMHgxYTkwOTRdKSkpO30sJ2F1dG9UcmFjZU1hbnknOihfMHgzMDIzZWMsXzB4NDg0YWQ2KT0+e3ZhciBfMHgyOWJiZjU9XzB4YTA0YTlhO18weDI4ZGFmNShfMHg1Yjg2YjAoXzB4MjIzZGJjKF8weDI5YmJmNSgweGE4KSxfMHgzMDIzZWMsXzB4NTZlNmI0KCksXzB4ZGUzM2NlLF8weDQ4NGFkNikpKTt9LCdhdXRvVGltZSc6KF8weDVkNzlmNCxfMHgzMDlhZjIsXzB4MjI3MjI0KT0+e18weDQxMjM4MShfMHgyMjcyMjQpO30sJ2F1dG9UaW1lRW5kJzooXzB4Mzc0NmVjLF8weDMxMTc3MyxfMHg1OTUxMzEpPT57XzB4MzgwYWUwKF8weDMxMTc3MyxfMHg1OTUxMzEpO30sJ2NvdmVyYWdlJzpfMHgxMzMyMTY9Pnt2YXIgXzB4MzI4NTYzPV8weGEwNGE5YTtfMHgyOGRhZjUoeydtZXRob2QnOl8weDMyODU2MygweDEzYiksJ3ZlcnNpb24nOl8weDJmMzE1NSwnYXJncyc6W3snaWQnOl8weDEzMzIxNn1dfSk7fX07bGV0IF8weDI4ZGFmNT1xKF8weDFkOWViYSxfMHg1MjE5MTAsXzB4MjIzYWFhLF8weDNiZjBmZixfMHgzY2M4M2IsXzB4NDliNjVmLF8weDQwZGEwMSksXzB4ZGUzM2NlPV8weDFkOWViYVtfMHhhMDRhOWEoMHhiZildO3JldHVybiBfMHgxZDllYmFbXzB4YTA0YTlhKDB4MTQyKV07fSkoZ2xvYmFsVGhpcywnMTI3LjAuMC4xJyxfMHg0Y2Y5NTkoMHgxMTkpLFxcXCJjOlxcXFxcXFxcVXNlcnNcXFxcXFxcXHlvdXNzXFxcXFxcXFwudnNjb2RlXFxcXFxcXFxleHRlbnNpb25zXFxcXFxcXFx3YWxsYWJ5anMuY29uc29sZS1uaW5qYS0xLjAuMzE0XFxcXFxcXFxub2RlX21vZHVsZXNcXFwiLF8weDRjZjk1OSgweDEzMiksXzB4NGNmOTU5KDB4MTI2KSwnMTcxNDA0NjU3MDc2MicsXzB4NGNmOTU5KDB4ZDApLF8weDRjZjk1OSgweDEwOCksXzB4NGNmOTU5KDB4OWYpLF8weDRjZjk1OSgweDE2NykpO1wiKTt9Y2F0Y2goZSl7fX07LyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9mdW5jdGlvbiBvb19vbyhpLC4uLnYpe3RyeXtvb19jbSgpLmNvbnNvbGVMb2coaSwgdik7fWNhdGNoKGUpe30gcmV0dXJuIHZ9Oy8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovZnVuY3Rpb24gb29fdHIoaSwuLi52KXt0cnl7b29fY20oKS5jb25zb2xlVHJhY2UoaSwgdik7fWNhdGNoKGUpe30gcmV0dXJuIHZ9Oy8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovZnVuY3Rpb24gb29fdHModil7dHJ5e29vX2NtKCkuY29uc29sZVRpbWUodik7fWNhdGNoKGUpe30gcmV0dXJuIHY7fTsvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL2Z1bmN0aW9uIG9vX3RlKHYsIGkpe3RyeXtvb19jbSgpLmNvbnNvbGVUaW1lRW5kKHYsIGkpO31jYXRjaChlKXt9IHJldHVybiB2O307Lyplc2xpbnQgdW5pY29ybi9uby1hYnVzaXZlLWVzbGludC1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvZGlzYWJsZS1lbmFibGUtcGFpcjosZXNsaW50LWNvbW1lbnRzL25vLXVubGltaXRlZC1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvbm8tYWdncmVnYXRpbmctZW5hYmxlOixlc2xpbnQtY29tbWVudHMvbm8tZHVwbGljYXRlLWRpc2FibGU6LGVzbGludC1jb21tZW50cy9uby11bnVzZWQtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLXVudXNlZC1lbmFibGU6LCovIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicGx1Z2luLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fcGVudGFfYl9ncmlkX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19wZW50YV9iX21hX2xpYl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9yZWR1eF9fOyIsIi8qKlxuICogQG1vZHVsZSBvbC9EaXNwb3NhYmxlXG4gKi9cblxuLyoqXG4gKiBAY2xhc3NkZXNjXG4gKiBPYmplY3RzIHRoYXQgbmVlZCB0byBjbGVhbiB1cCBhZnRlciB0aGVtc2VsdmVzLlxuICovXG5jbGFzcyBEaXNwb3NhYmxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqXG4gICAgICogVGhlIG9iamVjdCBoYXMgYWxyZWFkeSBiZWVuIGRpc3Bvc2VkLlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICB0aGlzLmRpc3Bvc2VkID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYW4gdXAuXG4gICAqL1xuICBkaXNwb3NlKCkge1xuICAgIGlmICghdGhpcy5kaXNwb3NlZCkge1xuICAgICAgdGhpcy5kaXNwb3NlZCA9IHRydWU7XG4gICAgICB0aGlzLmRpc3Bvc2VJbnRlcm5hbCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFeHRlbnNpb24gcG9pbnQgZm9yIGRpc3Bvc2FibGUgb2JqZWN0cy5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgZGlzcG9zZUludGVybmFsKCkge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGlzcG9zYWJsZTtcbiIsIi8qKlxuICogQG1vZHVsZSBvbC9PYmplY3RcbiAqL1xuaW1wb3J0IEV2ZW50IGZyb20gJy4vZXZlbnRzL0V2ZW50LmpzJztcbmltcG9ydCBPYmplY3RFdmVudFR5cGUgZnJvbSAnLi9PYmplY3RFdmVudFR5cGUuanMnO1xuaW1wb3J0IE9ic2VydmFibGUgZnJvbSAnLi9PYnNlcnZhYmxlLmpzJztcbmltcG9ydCB7Z2V0VWlkfSBmcm9tICcuL3V0aWwuanMnO1xuaW1wb3J0IHtpc0VtcHR5fSBmcm9tICcuL29iai5qcyc7XG5cbi8qKlxuICogQGNsYXNzZGVzY1xuICogRXZlbnRzIGVtaXR0ZWQgYnkge0BsaW5rIG1vZHVsZTpvbC9PYmplY3R+QmFzZU9iamVjdH0gaW5zdGFuY2VzIGFyZSBpbnN0YW5jZXMgb2YgdGhpcyB0eXBlLlxuICovXG5leHBvcnQgY2xhc3MgT2JqZWN0RXZlbnQgZXh0ZW5kcyBFdmVudCB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUaGUgZXZlbnQgdHlwZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgcHJvcGVydHkgbmFtZS5cbiAgICogQHBhcmFtIHsqfSBvbGRWYWx1ZSBUaGUgb2xkIHZhbHVlIGZvciBga2V5YC5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHR5cGUsIGtleSwgb2xkVmFsdWUpIHtcbiAgICBzdXBlcih0eXBlKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eSB3aG9zZSB2YWx1ZSBpcyBjaGFuZ2luZy5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBhcGlcbiAgICAgKi9cbiAgICB0aGlzLmtleSA9IGtleTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBvbGQgdmFsdWUuIFRvIGdldCB0aGUgbmV3IHZhbHVlIHVzZSBgZS50YXJnZXQuZ2V0KGUua2V5KWAgd2hlcmVcbiAgICAgKiBgZWAgaXMgdGhlIGV2ZW50IG9iamVjdC5cbiAgICAgKiBAdHlwZSB7Kn1cbiAgICAgKiBAYXBpXG4gICAgICovXG4gICAgdGhpcy5vbGRWYWx1ZSA9IG9sZFZhbHVlO1xuICB9XG59XG5cbi8qKipcbiAqIEB0ZW1wbGF0ZSBSZXR1cm5cbiAqIEB0eXBlZGVmIHtpbXBvcnQoXCIuL09ic2VydmFibGVcIikuT25TaWduYXR1cmU8aW1wb3J0KFwiLi9PYnNlcnZhYmxlXCIpLkV2ZW50VHlwZXMsIGltcG9ydChcIi4vZXZlbnRzL0V2ZW50LmpzXCIpLmRlZmF1bHQsIFJldHVybj4gJlxuICogICAgaW1wb3J0KFwiLi9PYnNlcnZhYmxlXCIpLk9uU2lnbmF0dXJlPGltcG9ydChcIi4vT2JqZWN0RXZlbnRUeXBlXCIpLlR5cGVzLCBPYmplY3RFdmVudCwgUmV0dXJuPiAmXG4gKiAgICBpbXBvcnQoXCIuL09ic2VydmFibGVcIikuQ29tYmluZWRPblNpZ25hdHVyZTxpbXBvcnQoXCIuL09ic2VydmFibGVcIikuRXZlbnRUeXBlc3xpbXBvcnQoXCIuL09iamVjdEV2ZW50VHlwZVwiKS5UeXBlcywgUmV0dXJuPn0gT2JqZWN0T25TaWduYXR1cmVcbiAqL1xuXG4vKipcbiAqIEBjbGFzc2Rlc2NcbiAqIEFic3RyYWN0IGJhc2UgY2xhc3M7IG5vcm1hbGx5IG9ubHkgdXNlZCBmb3IgY3JlYXRpbmcgc3ViY2xhc3NlcyBhbmQgbm90XG4gKiBpbnN0YW50aWF0ZWQgaW4gYXBwcy5cbiAqIE1vc3Qgbm9uLXRyaXZpYWwgY2xhc3NlcyBpbmhlcml0IGZyb20gdGhpcy5cbiAqXG4gKiBUaGlzIGV4dGVuZHMge0BsaW5rIG1vZHVsZTpvbC9PYnNlcnZhYmxlfk9ic2VydmFibGV9IHdpdGggb2JzZXJ2YWJsZVxuICogcHJvcGVydGllcywgd2hlcmUgZWFjaCBwcm9wZXJ0eSBpcyBvYnNlcnZhYmxlIGFzIHdlbGwgYXMgdGhlIG9iamVjdCBhcyBhXG4gKiB3aG9sZS5cbiAqXG4gKiBDbGFzc2VzIHRoYXQgaW5oZXJpdCBmcm9tIHRoaXMgaGF2ZSBwcmUtZGVmaW5lZCBwcm9wZXJ0aWVzLCB0byB3aGljaCB5b3UgY2FuXG4gKiBhZGQgeW91ciBvd25zLiBUaGUgcHJlLWRlZmluZWQgcHJvcGVydGllcyBhcmUgbGlzdGVkIGluIHRoaXMgZG9jdW1lbnRhdGlvbiBhc1xuICogJ09ic2VydmFibGUgUHJvcGVydGllcycsIGFuZCBoYXZlIHRoZWlyIG93biBhY2Nlc3NvcnM7IGZvciBleGFtcGxlLFxuICoge0BsaW5rIG1vZHVsZTpvbC9NYXB+TWFwfSBoYXMgYSBgdGFyZ2V0YCBwcm9wZXJ0eSwgYWNjZXNzZWQgd2l0aFxuICogYGdldFRhcmdldCgpYCBhbmQgY2hhbmdlZCB3aXRoIGBzZXRUYXJnZXQoKWAuIE5vdCBhbGwgcHJvcGVydGllcyBhcmUgaG93ZXZlclxuICogc2V0dGFibGUuIFRoZXJlIGFyZSBhbHNvIGdlbmVyYWwtcHVycG9zZSBhY2Nlc3NvcnMgYGdldCgpYCBhbmQgYHNldCgpYC4gRm9yXG4gKiBleGFtcGxlLCBgZ2V0KCd0YXJnZXQnKWAgaXMgZXF1aXZhbGVudCB0byBgZ2V0VGFyZ2V0KClgLlxuICpcbiAqIFRoZSBgc2V0YCBhY2Nlc3NvcnMgdHJpZ2dlciBhIGNoYW5nZSBldmVudCwgYW5kIHlvdSBjYW4gbW9uaXRvciB0aGlzIGJ5XG4gKiByZWdpc3RlcmluZyBhIGxpc3RlbmVyLiBGb3IgZXhhbXBsZSwge0BsaW5rIG1vZHVsZTpvbC9WaWV3flZpZXd9IGhhcyBhXG4gKiBgY2VudGVyYCBwcm9wZXJ0eSwgc28gYHZpZXcub24oJ2NoYW5nZTpjZW50ZXInLCBmdW5jdGlvbihldnQpIHsuLi59KTtgIHdvdWxkXG4gKiBjYWxsIHRoZSBmdW5jdGlvbiB3aGVuZXZlciB0aGUgdmFsdWUgb2YgdGhlIGNlbnRlciBwcm9wZXJ0eSBjaGFuZ2VzLiBXaXRoaW5cbiAqIHRoZSBmdW5jdGlvbiwgYGV2dC50YXJnZXRgIHdvdWxkIGJlIHRoZSB2aWV3LCBzbyBgZXZ0LnRhcmdldC5nZXRDZW50ZXIoKWBcbiAqIHdvdWxkIHJldHVybiB0aGUgbmV3IGNlbnRlci5cbiAqXG4gKiBZb3UgY2FuIGFkZCB5b3VyIG93biBvYnNlcnZhYmxlIHByb3BlcnRpZXMgd2l0aFxuICogYG9iamVjdC5zZXQoJ3Byb3AnLCAndmFsdWUnKWAsIGFuZCByZXRyaWV2ZSB0aGF0IHdpdGggYG9iamVjdC5nZXQoJ3Byb3AnKWAuXG4gKiBZb3UgY2FuIGxpc3RlbiBmb3IgY2hhbmdlcyBvbiB0aGF0IHByb3BlcnR5IHZhbHVlIHdpdGhcbiAqIGBvYmplY3Qub24oJ2NoYW5nZTpwcm9wJywgbGlzdGVuZXIpYC4gWW91IGNhbiBnZXQgYSBsaXN0IG9mIGFsbFxuICogcHJvcGVydGllcyB3aXRoIHtAbGluayBtb2R1bGU6b2wvT2JqZWN0fkJhc2VPYmplY3QjZ2V0UHJvcGVydGllc30uXG4gKlxuICogTm90ZSB0aGF0IHRoZSBvYnNlcnZhYmxlIHByb3BlcnRpZXMgYXJlIHNlcGFyYXRlIGZyb20gc3RhbmRhcmQgSlMgcHJvcGVydGllcy5cbiAqIFlvdSBjYW4sIGZvciBleGFtcGxlLCBnaXZlIHlvdXIgbWFwIG9iamVjdCBhIHRpdGxlIHdpdGhcbiAqIGBtYXAudGl0bGU9J05ldyB0aXRsZSdgIGFuZCB3aXRoIGBtYXAuc2V0KCd0aXRsZScsICdBbm90aGVyIHRpdGxlJylgLiBUaGVcbiAqIGZpcnN0IHdpbGwgYmUgYSBgaGFzT3duUHJvcGVydHlgOyB0aGUgc2Vjb25kIHdpbGwgYXBwZWFyIGluXG4gKiBgZ2V0UHJvcGVydGllcygpYC4gT25seSB0aGUgc2Vjb25kIGlzIG9ic2VydmFibGUuXG4gKlxuICogUHJvcGVydGllcyBjYW4gYmUgZGVsZXRlZCBieSB1c2luZyB0aGUgdW5zZXQgbWV0aG9kLiBFLmcuXG4gKiBvYmplY3QudW5zZXQoJ2ZvbycpLlxuICpcbiAqIEBmaXJlcyBPYmplY3RFdmVudFxuICogQGFwaVxuICovXG5jbGFzcyBCYXNlT2JqZWN0IGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge09iamVjdDxzdHJpbmcsICo+fSBbdmFsdWVzXSBBbiBvYmplY3Qgd2l0aCBrZXktdmFsdWUgcGFpcnMuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZXMpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgLyoqKlxuICAgICAqIEB0eXBlIHtPYmplY3RPblNpZ25hdHVyZTxpbXBvcnQoXCIuL2V2ZW50c1wiKS5FdmVudHNLZXk+fVxuICAgICAqL1xuICAgIHRoaXMub247XG5cbiAgICAvKioqXG4gICAgICogQHR5cGUge09iamVjdE9uU2lnbmF0dXJlPGltcG9ydChcIi4vZXZlbnRzXCIpLkV2ZW50c0tleT59XG4gICAgICovXG4gICAgdGhpcy5vbmNlO1xuXG4gICAgLyoqKlxuICAgICAqIEB0eXBlIHtPYmplY3RPblNpZ25hdHVyZTx2b2lkPn1cbiAgICAgKi9cbiAgICB0aGlzLnVuO1xuXG4gICAgLy8gQ2FsbCB7QGxpbmsgbW9kdWxlOm9sL3V0aWwuZ2V0VWlkfSB0byBlbnN1cmUgdGhhdCB0aGUgb3JkZXIgb2Ygb2JqZWN0cycgaWRzIGlzXG4gICAgLy8gdGhlIHNhbWUgYXMgdGhlIG9yZGVyIGluIHdoaWNoIHRoZXkgd2VyZSBjcmVhdGVkLiAgVGhpcyBhbHNvIGhlbHBzIHRvXG4gICAgLy8gZW5zdXJlIHRoYXQgb2JqZWN0IHByb3BlcnRpZXMgYXJlIGFsd2F5cyBhZGRlZCBpbiB0aGUgc2FtZSBvcmRlciwgd2hpY2hcbiAgICAvLyBoZWxwcyBtYW55IEphdmFTY3JpcHQgZW5naW5lcyBnZW5lcmF0ZSBmYXN0ZXIgY29kZS5cbiAgICBnZXRVaWQodGhpcyk7XG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEB0eXBlIHtPYmplY3Q8c3RyaW5nLCAqPnxudWxsfVxuICAgICAqL1xuICAgIHRoaXMudmFsdWVzXyA9IG51bGw7XG5cbiAgICBpZiAodmFsdWVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh2YWx1ZXMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGEgdmFsdWUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgS2V5IG5hbWUuXG4gICAqIEByZXR1cm4geyp9IFZhbHVlLlxuICAgKiBAYXBpXG4gICAqL1xuICBnZXQoa2V5KSB7XG4gICAgbGV0IHZhbHVlO1xuICAgIGlmICh0aGlzLnZhbHVlc18gJiYgdGhpcy52YWx1ZXNfLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHZhbHVlID0gdGhpcy52YWx1ZXNfW2tleV07XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBsaXN0IG9mIG9iamVjdCBwcm9wZXJ0eSBuYW1lcy5cbiAgICogQHJldHVybiB7QXJyYXk8c3RyaW5nPn0gTGlzdCBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAgICogQGFwaVxuICAgKi9cbiAgZ2V0S2V5cygpIHtcbiAgICByZXR1cm4gKHRoaXMudmFsdWVzXyAmJiBPYmplY3Qua2V5cyh0aGlzLnZhbHVlc18pKSB8fCBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYW4gb2JqZWN0IG9mIGFsbCBwcm9wZXJ0eSBuYW1lcyBhbmQgdmFsdWVzLlxuICAgKiBAcmV0dXJuIHtPYmplY3Q8c3RyaW5nLCAqPn0gT2JqZWN0LlxuICAgKiBAYXBpXG4gICAqL1xuICBnZXRQcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiAodGhpcy52YWx1ZXNfICYmIE9iamVjdC5hc3NpZ24oe30sIHRoaXMudmFsdWVzXykpIHx8IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbiBvYmplY3Qgb2YgYWxsIHByb3BlcnR5IG5hbWVzIGFuZCB2YWx1ZXMuXG4gICAqIEByZXR1cm4ge09iamVjdDxzdHJpbmcsICo+P30gT2JqZWN0LlxuICAgKi9cbiAgZ2V0UHJvcGVydGllc0ludGVybmFsKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlc187XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVGhlIG9iamVjdCBoYXMgcHJvcGVydGllcy5cbiAgICovXG4gIGhhc1Byb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuICEhdGhpcy52YWx1ZXNfO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgS2V5IG5hbWUuXG4gICAqIEBwYXJhbSB7Kn0gb2xkVmFsdWUgT2xkIHZhbHVlLlxuICAgKi9cbiAgbm90aWZ5KGtleSwgb2xkVmFsdWUpIHtcbiAgICBsZXQgZXZlbnRUeXBlO1xuICAgIGV2ZW50VHlwZSA9IGBjaGFuZ2U6JHtrZXl9YDtcbiAgICBpZiAodGhpcy5oYXNMaXN0ZW5lcihldmVudFR5cGUpKSB7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IE9iamVjdEV2ZW50KGV2ZW50VHlwZSwga2V5LCBvbGRWYWx1ZSkpO1xuICAgIH1cbiAgICBldmVudFR5cGUgPSBPYmplY3RFdmVudFR5cGUuUFJPUEVSVFlDSEFOR0U7XG4gICAgaWYgKHRoaXMuaGFzTGlzdGVuZXIoZXZlbnRUeXBlKSkge1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBPYmplY3RFdmVudChldmVudFR5cGUsIGtleSwgb2xkVmFsdWUpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBLZXkgbmFtZS5cbiAgICogQHBhcmFtIHtpbXBvcnQoXCIuL2V2ZW50cy5qc1wiKS5MaXN0ZW5lcn0gbGlzdGVuZXIgTGlzdGVuZXIuXG4gICAqL1xuICBhZGRDaGFuZ2VMaXN0ZW5lcihrZXksIGxpc3RlbmVyKSB7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGBjaGFuZ2U6JHtrZXl9YCwgbGlzdGVuZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgS2V5IG5hbWUuXG4gICAqIEBwYXJhbSB7aW1wb3J0KFwiLi9ldmVudHMuanNcIikuTGlzdGVuZXJ9IGxpc3RlbmVyIExpc3RlbmVyLlxuICAgKi9cbiAgcmVtb3ZlQ2hhbmdlTGlzdGVuZXIoa2V5LCBsaXN0ZW5lcikge1xuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihgY2hhbmdlOiR7a2V5fWAsIGxpc3RlbmVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGEgdmFsdWUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgS2V5IG5hbWUuXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVmFsdWUuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3NpbGVudF0gVXBkYXRlIHdpdGhvdXQgdHJpZ2dlcmluZyBhbiBldmVudC5cbiAgICogQGFwaVxuICAgKi9cbiAgc2V0KGtleSwgdmFsdWUsIHNpbGVudCkge1xuICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMudmFsdWVzXyB8fCAodGhpcy52YWx1ZXNfID0ge30pO1xuICAgIGlmIChzaWxlbnQpIHtcbiAgICAgIHZhbHVlc1trZXldID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG9sZFZhbHVlID0gdmFsdWVzW2tleV07XG4gICAgICB2YWx1ZXNba2V5XSA9IHZhbHVlO1xuICAgICAgaWYgKG9sZFZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICB0aGlzLm5vdGlmeShrZXksIG9sZFZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBhIGNvbGxlY3Rpb24gb2Yga2V5LXZhbHVlIHBhaXJzLiAgTm90ZSB0aGF0IHRoaXMgY2hhbmdlcyBhbnkgZXhpc3RpbmdcbiAgICogcHJvcGVydGllcyBhbmQgYWRkcyBuZXcgb25lcyAoaXQgZG9lcyBub3QgcmVtb3ZlIGFueSBleGlzdGluZyBwcm9wZXJ0aWVzKS5cbiAgICogQHBhcmFtIHtPYmplY3Q8c3RyaW5nLCAqPn0gdmFsdWVzIFZhbHVlcy5cbiAgICogQHBhcmFtIHtib29sZWFufSBbc2lsZW50XSBVcGRhdGUgd2l0aG91dCB0cmlnZ2VyaW5nIGFuIGV2ZW50LlxuICAgKiBAYXBpXG4gICAqL1xuICBzZXRQcm9wZXJ0aWVzKHZhbHVlcywgc2lsZW50KSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICB0aGlzLnNldChrZXksIHZhbHVlc1trZXldLCBzaWxlbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBseSBhbnkgcHJvcGVydGllcyBmcm9tIGFub3RoZXIgb2JqZWN0IHdpdGhvdXQgdHJpZ2dlcmluZyBldmVudHMuXG4gICAqIEBwYXJhbSB7QmFzZU9iamVjdH0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0LlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBhcHBseVByb3BlcnRpZXMoc291cmNlKSB7XG4gICAgaWYgKCFzb3VyY2UudmFsdWVzXykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBPYmplY3QuYXNzaWduKHRoaXMudmFsdWVzXyB8fCAodGhpcy52YWx1ZXNfID0ge30pLCBzb3VyY2UudmFsdWVzXyk7XG4gIH1cblxuICAvKipcbiAgICogVW5zZXRzIGEgcHJvcGVydHkuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgS2V5IG5hbWUuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3NpbGVudF0gVW5zZXQgd2l0aG91dCB0cmlnZ2VyaW5nIGFuIGV2ZW50LlxuICAgKiBAYXBpXG4gICAqL1xuICB1bnNldChrZXksIHNpbGVudCkge1xuICAgIGlmICh0aGlzLnZhbHVlc18gJiYga2V5IGluIHRoaXMudmFsdWVzXykge1xuICAgICAgY29uc3Qgb2xkVmFsdWUgPSB0aGlzLnZhbHVlc19ba2V5XTtcbiAgICAgIGRlbGV0ZSB0aGlzLnZhbHVlc19ba2V5XTtcbiAgICAgIGlmIChpc0VtcHR5KHRoaXMudmFsdWVzXykpIHtcbiAgICAgICAgdGhpcy52YWx1ZXNfID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIGlmICghc2lsZW50KSB7XG4gICAgICAgIHRoaXMubm90aWZ5KGtleSwgb2xkVmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYXNlT2JqZWN0O1xuIiwiLyoqXG4gKiBAbW9kdWxlIG9sL09iamVjdEV2ZW50VHlwZVxuICovXG5cbi8qKlxuICogQGVudW0ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICAvKipcbiAgICogVHJpZ2dlcmVkIHdoZW4gYSBwcm9wZXJ0eSBpcyBjaGFuZ2VkLlxuICAgKiBAZXZlbnQgbW9kdWxlOm9sL09iamVjdC5PYmplY3RFdmVudCNwcm9wZXJ0eWNoYW5nZVxuICAgKiBAYXBpXG4gICAqL1xuICBQUk9QRVJUWUNIQU5HRTogJ3Byb3BlcnR5Y2hhbmdlJyxcbn07XG5cbi8qKlxuICogQHR5cGVkZWYgeydwcm9wZXJ0eWNoYW5nZSd9IFR5cGVzXG4gKi9cbiIsIi8qKlxuICogQG1vZHVsZSBvbC9PYnNlcnZhYmxlXG4gKi9cbmltcG9ydCBFdmVudFRhcmdldCBmcm9tICcuL2V2ZW50cy9UYXJnZXQuanMnO1xuaW1wb3J0IEV2ZW50VHlwZSBmcm9tICcuL2V2ZW50cy9FdmVudFR5cGUuanMnO1xuaW1wb3J0IHtsaXN0ZW4sIGxpc3Rlbk9uY2UsIHVubGlzdGVuQnlLZXl9IGZyb20gJy4vZXZlbnRzLmpzJztcblxuLyoqKlxuICogQHRlbXBsYXRlIHtzdHJpbmd9IFR5cGVcbiAqIEB0ZW1wbGF0ZSB7RXZlbnR8aW1wb3J0KFwiLi9ldmVudHMvRXZlbnQuanNcIikuZGVmYXVsdH0gRXZlbnRDbGFzc1xuICogQHRlbXBsYXRlIFJldHVyblxuICogQHR5cGVkZWYgeyh0eXBlOiBUeXBlLCBsaXN0ZW5lcjogKGV2ZW50OiBFdmVudENsYXNzKSA9PiA/KSA9PiBSZXR1cm59IE9uU2lnbmF0dXJlXG4gKi9cblxuLyoqKlxuICogQHRlbXBsYXRlIHtzdHJpbmd9IFR5cGVcbiAqIEB0ZW1wbGF0ZSBSZXR1cm5cbiAqIEB0eXBlZGVmIHsodHlwZTogVHlwZVtdLCBsaXN0ZW5lcjogKGV2ZW50OiBFdmVudHxpbXBvcnQoXCIuL2V2ZW50cy9FdmVudFwiKS5kZWZhdWx0KSA9PiA/KSA9PiBSZXR1cm4gZXh0ZW5kcyB2b2lkID8gdm9pZCA6IFJldHVybltdfSBDb21iaW5lZE9uU2lnbmF0dXJlXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7J2NoYW5nZSd8J2Vycm9yJ30gRXZlbnRUeXBlc1xuICovXG5cbi8qKipcbiAqIEB0ZW1wbGF0ZSBSZXR1cm5cbiAqIEB0eXBlZGVmIHtPblNpZ25hdHVyZTxFdmVudFR5cGVzLCBpbXBvcnQoXCIuL2V2ZW50cy9FdmVudC5qc1wiKS5kZWZhdWx0LCBSZXR1cm4+ICYgQ29tYmluZWRPblNpZ25hdHVyZTxFdmVudFR5cGVzLCBSZXR1cm4+fSBPYnNlcnZhYmxlT25TaWduYXR1cmVcbiAqL1xuXG4vKipcbiAqIEBjbGFzc2Rlc2NcbiAqIEFic3RyYWN0IGJhc2UgY2xhc3M7IG5vcm1hbGx5IG9ubHkgdXNlZCBmb3IgY3JlYXRpbmcgc3ViY2xhc3NlcyBhbmQgbm90XG4gKiBpbnN0YW50aWF0ZWQgaW4gYXBwcy5cbiAqIEFuIGV2ZW50IHRhcmdldCBwcm92aWRpbmcgY29udmVuaWVudCBtZXRob2RzIGZvciBsaXN0ZW5lciByZWdpc3RyYXRpb25cbiAqIGFuZCB1bnJlZ2lzdHJhdGlvbi4gQSBnZW5lcmljIGBjaGFuZ2VgIGV2ZW50IGlzIGFsd2F5cyBhdmFpbGFibGUgdGhyb3VnaFxuICoge0BsaW5rIG1vZHVsZTpvbC9PYnNlcnZhYmxlfk9ic2VydmFibGUjY2hhbmdlZH0uXG4gKlxuICogQGZpcmVzIGltcG9ydChcIi4vZXZlbnRzL0V2ZW50LmpzXCIpLmRlZmF1bHRcbiAqIEBhcGlcbiAqL1xuY2xhc3MgT2JzZXJ2YWJsZSBleHRlbmRzIEV2ZW50VGFyZ2V0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMub24gPVxuICAgICAgLyoqIEB0eXBlIHtPYnNlcnZhYmxlT25TaWduYXR1cmU8aW1wb3J0KFwiLi9ldmVudHNcIikuRXZlbnRzS2V5Pn0gKi8gKFxuICAgICAgICB0aGlzLm9uSW50ZXJuYWxcbiAgICAgICk7XG5cbiAgICB0aGlzLm9uY2UgPVxuICAgICAgLyoqIEB0eXBlIHtPYnNlcnZhYmxlT25TaWduYXR1cmU8aW1wb3J0KFwiLi9ldmVudHNcIikuRXZlbnRzS2V5Pn0gKi8gKFxuICAgICAgICB0aGlzLm9uY2VJbnRlcm5hbFxuICAgICAgKTtcblxuICAgIHRoaXMudW4gPSAvKiogQHR5cGUge09ic2VydmFibGVPblNpZ25hdHVyZTx2b2lkPn0gKi8gKHRoaXMudW5JbnRlcm5hbCk7XG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5yZXZpc2lvbl8gPSAwO1xuICB9XG5cbiAgLyoqXG4gICAqIEluY3JlYXNlcyB0aGUgcmV2aXNpb24gY291bnRlciBhbmQgZGlzcGF0Y2hlcyBhICdjaGFuZ2UnIGV2ZW50LlxuICAgKiBAYXBpXG4gICAqL1xuICBjaGFuZ2VkKCkge1xuICAgICsrdGhpcy5yZXZpc2lvbl87XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KEV2ZW50VHlwZS5DSEFOR0UpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdmVyc2lvbiBudW1iZXIgZm9yIHRoaXMgb2JqZWN0LiAgRWFjaCB0aW1lIHRoZSBvYmplY3QgaXMgbW9kaWZpZWQsXG4gICAqIGl0cyB2ZXJzaW9uIG51bWJlciB3aWxsIGJlIGluY3JlbWVudGVkLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IFJldmlzaW9uLlxuICAgKiBAYXBpXG4gICAqL1xuICBnZXRSZXZpc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5yZXZpc2lvbl87XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd8QXJyYXk8c3RyaW5nPn0gdHlwZSBUeXBlLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKChFdmVudHxpbXBvcnQoXCIuL2V2ZW50cy9FdmVudFwiKS5kZWZhdWx0KSk6ID99IGxpc3RlbmVyIExpc3RlbmVyLlxuICAgKiBAcmV0dXJuIHtpbXBvcnQoXCIuL2V2ZW50cy5qc1wiKS5FdmVudHNLZXl8QXJyYXk8aW1wb3J0KFwiLi9ldmVudHMuanNcIikuRXZlbnRzS2V5Pn0gRXZlbnQga2V5LlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBvbkludGVybmFsKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodHlwZSkpIHtcbiAgICAgIGNvbnN0IGxlbiA9IHR5cGUubGVuZ3RoO1xuICAgICAgY29uc3Qga2V5cyA9IG5ldyBBcnJheShsZW4pO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgICBrZXlzW2ldID0gbGlzdGVuKHRoaXMsIHR5cGVbaV0sIGxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBrZXlzO1xuICAgIH1cbiAgICByZXR1cm4gbGlzdGVuKHRoaXMsIC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAodHlwZSksIGxpc3RlbmVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xBcnJheTxzdHJpbmc+fSB0eXBlIFR5cGUuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oKEV2ZW50fGltcG9ydChcIi4vZXZlbnRzL0V2ZW50XCIpLmRlZmF1bHQpKTogP30gbGlzdGVuZXIgTGlzdGVuZXIuXG4gICAqIEByZXR1cm4ge2ltcG9ydChcIi4vZXZlbnRzLmpzXCIpLkV2ZW50c0tleXxBcnJheTxpbXBvcnQoXCIuL2V2ZW50cy5qc1wiKS5FdmVudHNLZXk+fSBFdmVudCBrZXkuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIG9uY2VJbnRlcm5hbCh0eXBlLCBsaXN0ZW5lcikge1xuICAgIGxldCBrZXk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodHlwZSkpIHtcbiAgICAgIGNvbnN0IGxlbiA9IHR5cGUubGVuZ3RoO1xuICAgICAga2V5ID0gbmV3IEFycmF5KGxlbik7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgIGtleVtpXSA9IGxpc3Rlbk9uY2UodGhpcywgdHlwZVtpXSwgbGlzdGVuZXIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBrZXkgPSBsaXN0ZW5PbmNlKHRoaXMsIC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAodHlwZSksIGxpc3RlbmVyKTtcbiAgICB9XG4gICAgLyoqIEB0eXBlIHtPYmplY3R9ICovIChsaXN0ZW5lcikub2xfa2V5ID0ga2V5O1xuICAgIHJldHVybiBrZXk7XG4gIH1cblxuICAvKipcbiAgICogVW5saXN0ZW4gZm9yIGEgY2VydGFpbiB0eXBlIG9mIGV2ZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ3xBcnJheTxzdHJpbmc+fSB0eXBlIFR5cGUuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oKEV2ZW50fGltcG9ydChcIi4vZXZlbnRzL0V2ZW50XCIpLmRlZmF1bHQpKTogP30gbGlzdGVuZXIgTGlzdGVuZXIuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHVuSW50ZXJuYWwodHlwZSwgbGlzdGVuZXIpIHtcbiAgICBjb25zdCBrZXkgPSAvKiogQHR5cGUge09iamVjdH0gKi8gKGxpc3RlbmVyKS5vbF9rZXk7XG4gICAgaWYgKGtleSkge1xuICAgICAgdW5CeUtleShrZXkpO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0eXBlKSkge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGlpID0gdHlwZS5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlW2ldLCBsaXN0ZW5lcik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcik7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogTGlzdGVuIGZvciBhIGNlcnRhaW4gdHlwZSBvZiBldmVudC5cbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtzdHJpbmd8QXJyYXk8c3RyaW5nPn0gdHlwZSBUaGUgZXZlbnQgdHlwZSBvciBhcnJheSBvZiBldmVudCB0eXBlcy5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKEV2ZW50fGltcG9ydChcIi4vZXZlbnRzL0V2ZW50XCIpLmRlZmF1bHQpKTogP30gbGlzdGVuZXIgVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICogQHJldHVybiB7aW1wb3J0KFwiLi9ldmVudHMuanNcIikuRXZlbnRzS2V5fEFycmF5PGltcG9ydChcIi4vZXZlbnRzLmpzXCIpLkV2ZW50c0tleT59IFVuaXF1ZSBrZXkgZm9yIHRoZSBsaXN0ZW5lci4gSWZcbiAqICAgICBjYWxsZWQgd2l0aCBhbiBhcnJheSBvZiBldmVudCB0eXBlcyBhcyB0aGUgZmlyc3QgYXJndW1lbnQsIHRoZSByZXR1cm5cbiAqICAgICB3aWxsIGJlIGFuIGFycmF5IG9mIGtleXMuXG4gKiBAYXBpXG4gKi9cbk9ic2VydmFibGUucHJvdG90eXBlLm9uO1xuXG4vKipcbiAqIExpc3RlbiBvbmNlIGZvciBhIGNlcnRhaW4gdHlwZSBvZiBldmVudC5cbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtzdHJpbmd8QXJyYXk8c3RyaW5nPn0gdHlwZSBUaGUgZXZlbnQgdHlwZSBvciBhcnJheSBvZiBldmVudCB0eXBlcy5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKEV2ZW50fGltcG9ydChcIi4vZXZlbnRzL0V2ZW50XCIpLmRlZmF1bHQpKTogP30gbGlzdGVuZXIgVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICogQHJldHVybiB7aW1wb3J0KFwiLi9ldmVudHMuanNcIikuRXZlbnRzS2V5fEFycmF5PGltcG9ydChcIi4vZXZlbnRzLmpzXCIpLkV2ZW50c0tleT59IFVuaXF1ZSBrZXkgZm9yIHRoZSBsaXN0ZW5lci4gSWZcbiAqICAgICBjYWxsZWQgd2l0aCBhbiBhcnJheSBvZiBldmVudCB0eXBlcyBhcyB0aGUgZmlyc3QgYXJndW1lbnQsIHRoZSByZXR1cm5cbiAqICAgICB3aWxsIGJlIGFuIGFycmF5IG9mIGtleXMuXG4gKiBAYXBpXG4gKi9cbk9ic2VydmFibGUucHJvdG90eXBlLm9uY2U7XG5cbi8qKlxuICogVW5saXN0ZW4gZm9yIGEgY2VydGFpbiB0eXBlIG9mIGV2ZW50LlxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ3xBcnJheTxzdHJpbmc+fSB0eXBlIFRoZSBldmVudCB0eXBlIG9yIGFycmF5IG9mIGV2ZW50IHR5cGVzLlxuICogQHBhcmFtIHtmdW5jdGlvbigoRXZlbnR8aW1wb3J0KFwiLi9ldmVudHMvRXZlbnRcIikuZGVmYXVsdCkpOiA/fSBsaXN0ZW5lciBUaGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAYXBpXG4gKi9cbk9ic2VydmFibGUucHJvdG90eXBlLnVuO1xuXG4vKipcbiAqIFJlbW92ZXMgYW4gZXZlbnQgbGlzdGVuZXIgdXNpbmcgdGhlIGtleSByZXR1cm5lZCBieSBgb24oKWAgb3IgYG9uY2UoKWAuXG4gKiBAcGFyYW0ge2ltcG9ydChcIi4vZXZlbnRzLmpzXCIpLkV2ZW50c0tleXxBcnJheTxpbXBvcnQoXCIuL2V2ZW50cy5qc1wiKS5FdmVudHNLZXk+fSBrZXkgVGhlIGtleSByZXR1cm5lZCBieSBgb24oKWBcbiAqICAgICBvciBgb25jZSgpYCAob3IgYW4gYXJyYXkgb2Yga2V5cykuXG4gKiBAYXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1bkJ5S2V5KGtleSkge1xuICBpZiAoQXJyYXkuaXNBcnJheShrZXkpKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGlpID0ga2V5Lmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICAgIHVubGlzdGVuQnlLZXkoa2V5W2ldKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdW5saXN0ZW5CeUtleSgvKiogQHR5cGUge2ltcG9ydChcIi4vZXZlbnRzLmpzXCIpLkV2ZW50c0tleX0gKi8gKGtleSkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9ic2VydmFibGU7XG4iLCIvKipcbiAqIEBtb2R1bGUgb2wvYXJyYXlcbiAqL1xuXG4vKipcbiAqIFBlcmZvcm1zIGEgYmluYXJ5IHNlYXJjaCBvbiB0aGUgcHJvdmlkZWQgc29ydGVkIGxpc3QgYW5kIHJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBpdGVtIGlmIGZvdW5kLiBJZiBpdCBjYW4ndCBiZSBmb3VuZCBpdCdsbCByZXR1cm4gLTEuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZGFya3NreWFwcC9iaW5hcnktc2VhcmNoXG4gKlxuICogQHBhcmFtIHtBcnJheTwqPn0gaGF5c3RhY2sgSXRlbXMgdG8gc2VhcmNoIHRocm91Z2guXG4gKiBAcGFyYW0geyp9IG5lZWRsZSBUaGUgaXRlbSB0byBsb29rIGZvci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjb21wYXJhdG9yXSBDb21wYXJhdG9yIGZ1bmN0aW9uLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgaW5kZXggb2YgdGhlIGl0ZW0gaWYgZm91bmQsIC0xIGlmIG5vdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJpbmFyeVNlYXJjaChoYXlzdGFjaywgbmVlZGxlLCBjb21wYXJhdG9yKSB7XG4gIGxldCBtaWQsIGNtcDtcbiAgY29tcGFyYXRvciA9IGNvbXBhcmF0b3IgfHwgYXNjZW5kaW5nO1xuICBsZXQgbG93ID0gMDtcbiAgbGV0IGhpZ2ggPSBoYXlzdGFjay5sZW5ndGg7XG4gIGxldCBmb3VuZCA9IGZhbHNlO1xuXG4gIHdoaWxlIChsb3cgPCBoaWdoKSB7XG4gICAgLyogTm90ZSB0aGF0IFwiKGxvdyArIGhpZ2gpID4+PiAxXCIgbWF5IG92ZXJmbG93LCBhbmQgcmVzdWx0cyBpbiBhIHR5cGVjYXN0XG4gICAgICogdG8gZG91YmxlICh3aGljaCBnaXZlcyB0aGUgd3JvbmcgcmVzdWx0cykuICovXG4gICAgbWlkID0gbG93ICsgKChoaWdoIC0gbG93KSA+PiAxKTtcbiAgICBjbXAgPSArY29tcGFyYXRvcihoYXlzdGFja1ttaWRdLCBuZWVkbGUpO1xuXG4gICAgaWYgKGNtcCA8IDAuMCkge1xuICAgICAgLyogVG9vIGxvdy4gKi9cbiAgICAgIGxvdyA9IG1pZCArIDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8qIEtleSBmb3VuZCBvciB0b28gaGlnaCAqL1xuICAgICAgaGlnaCA9IG1pZDtcbiAgICAgIGZvdW5kID0gIWNtcDtcbiAgICB9XG4gIH1cblxuICAvKiBLZXkgbm90IGZvdW5kLiAqL1xuICByZXR1cm4gZm91bmQgPyBsb3cgOiB+bG93O1xufVxuXG4vKipcbiAqIENvbXBhcmUgZnVuY3Rpb24gc29ydGluZyBhcnJheXMgaW4gYXNjZW5kaW5nIG9yZGVyLiAgU2FmZSB0byB1c2UgZm9yIG51bWVyaWMgdmFsdWVzLlxuICogQHBhcmFtIHsqfSBhIFRoZSBmaXJzdCBvYmplY3QgdG8gYmUgY29tcGFyZWQuXG4gKiBAcGFyYW0geyp9IGIgVGhlIHNlY29uZCBvYmplY3QgdG8gYmUgY29tcGFyZWQuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEEgbmVnYXRpdmUgbnVtYmVyLCB6ZXJvLCBvciBhIHBvc2l0aXZlIG51bWJlciBhcyB0aGUgZmlyc3RcbiAqICAgICBhcmd1bWVudCBpcyBsZXNzIHRoYW4sIGVxdWFsIHRvLCBvciBncmVhdGVyIHRoYW4gdGhlIHNlY29uZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzY2VuZGluZyhhLCBiKSB7XG4gIHJldHVybiBhID4gYiA/IDEgOiBhIDwgYiA/IC0xIDogMDtcbn1cblxuLyoqXG4gKiBDb21wYXJlIGZ1bmN0aW9uIHNvcnRpbmcgYXJyYXlzIGluIGRlc2NlbmRpbmcgb3JkZXIuICBTYWZlIHRvIHVzZSBmb3IgbnVtZXJpYyB2YWx1ZXMuXG4gKiBAcGFyYW0geyp9IGEgVGhlIGZpcnN0IG9iamVjdCB0byBiZSBjb21wYXJlZC5cbiAqIEBwYXJhbSB7Kn0gYiBUaGUgc2Vjb25kIG9iamVjdCB0byBiZSBjb21wYXJlZC5cbiAqIEByZXR1cm4ge251bWJlcn0gQSBuZWdhdGl2ZSBudW1iZXIsIHplcm8sIG9yIGEgcG9zaXRpdmUgbnVtYmVyIGFzIHRoZSBmaXJzdFxuICogICAgIGFyZ3VtZW50IGlzIGdyZWF0ZXIgdGhhbiwgZXF1YWwgdG8sIG9yIGxlc3MgdGhhbiB0aGUgc2Vjb25kLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVzY2VuZGluZyhhLCBiKSB7XG4gIHJldHVybiBhIDwgYiA/IDEgOiBhID4gYiA/IC0xIDogMDtcbn1cblxuLyoqXG4gKiB7QGxpbmsgbW9kdWxlOm9sL3RpbGVncmlkL1RpbGVHcmlkflRpbGVHcmlkI2dldFpGb3JSZXNvbHV0aW9ufSBjYW4gdXNlIGEgZnVuY3Rpb25cbiAqIG9mIHRoaXMgdHlwZSB0byBkZXRlcm1pbmUgd2hpY2ggbmVhcmVzdCByZXNvbHV0aW9uIHRvIHVzZS5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHRha2VzIGEgYHtudW1iZXJ9YCByZXByZXNlbnRpbmcgYSB2YWx1ZSBiZXR3ZWVuIHR3byBhcnJheSBlbnRyaWVzLFxuICogYSBge251bWJlcn1gIHJlcHJlc2VudGluZyB0aGUgdmFsdWUgb2YgdGhlIG5lYXJlc3QgaGlnaGVyIGVudHJ5IGFuZFxuICogYSBge251bWJlcn1gIHJlcHJlc2VudGluZyB0aGUgdmFsdWUgb2YgdGhlIG5lYXJlc3QgbG93ZXIgZW50cnlcbiAqIGFzIGFyZ3VtZW50cyBhbmQgcmV0dXJucyBhIGB7bnVtYmVyfWAuIElmIGEgbmVnYXRpdmUgbnVtYmVyIG9yIHplcm8gaXMgcmV0dXJuZWRcbiAqIHRoZSBsb3dlciB2YWx1ZSB3aWxsIGJlIHVzZWQsIGlmIGEgcG9zaXRpdmUgbnVtYmVyIGlzIHJldHVybmVkIHRoZSBoaWdoZXIgdmFsdWVcbiAqIHdpbGwgYmUgdXNlZC5cbiAqIEB0eXBlZGVmIHtmdW5jdGlvbihudW1iZXIsIG51bWJlciwgbnVtYmVyKTogbnVtYmVyfSBOZWFyZXN0RGlyZWN0aW9uRnVuY3Rpb25cbiAqIEBhcGlcbiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gYXJyIEFycmF5IGluIGRlc2NlbmRpbmcgb3JkZXIuXG4gKiBAcGFyYW0ge251bWJlcn0gdGFyZ2V0IFRhcmdldC5cbiAqIEBwYXJhbSB7bnVtYmVyfE5lYXJlc3REaXJlY3Rpb25GdW5jdGlvbn0gZGlyZWN0aW9uXG4gKiAgICAwIG1lYW5zIHJldHVybiB0aGUgbmVhcmVzdCxcbiAqICAgID4gMCBtZWFucyByZXR1cm4gdGhlIGxhcmdlc3QgbmVhcmVzdCxcbiAqICAgIDwgMCBtZWFucyByZXR1cm4gdGhlIHNtYWxsZXN0IG5lYXJlc3QuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEluZGV4LlxuICovXG5leHBvcnQgZnVuY3Rpb24gbGluZWFyRmluZE5lYXJlc3QoYXJyLCB0YXJnZXQsIGRpcmVjdGlvbikge1xuICBpZiAoYXJyWzBdIDw9IHRhcmdldCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgY29uc3QgbiA9IGFyci5sZW5ndGg7XG4gIGlmICh0YXJnZXQgPD0gYXJyW24gLSAxXSkge1xuICAgIHJldHVybiBuIC0gMTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZGlyZWN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBuOyArK2kpIHtcbiAgICAgIGNvbnN0IGNhbmRpZGF0ZSA9IGFycltpXTtcbiAgICAgIGlmIChjYW5kaWRhdGUgPT09IHRhcmdldCkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cbiAgICAgIGlmIChjYW5kaWRhdGUgPCB0YXJnZXQpIHtcbiAgICAgICAgaWYgKGRpcmVjdGlvbih0YXJnZXQsIGFycltpIC0gMV0sIGNhbmRpZGF0ZSkgPiAwKSB7XG4gICAgICAgICAgcmV0dXJuIGkgLSAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbiAtIDE7XG4gIH1cblxuICBpZiAoZGlyZWN0aW9uID4gMCkge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAoYXJyW2ldIDwgdGFyZ2V0KSB7XG4gICAgICAgIHJldHVybiBpIC0gMTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG4gLSAxO1xuICB9XG5cbiAgaWYgKGRpcmVjdGlvbiA8IDApIHtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKGFycltpXSA8PSB0YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuIC0gMTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgbjsgKytpKSB7XG4gICAgaWYgKGFycltpXSA9PSB0YXJnZXQpIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH1cbiAgICBpZiAoYXJyW2ldIDwgdGFyZ2V0KSB7XG4gICAgICBpZiAoYXJyW2kgLSAxXSAtIHRhcmdldCA8IHRhcmdldCAtIGFycltpXSkge1xuICAgICAgICByZXR1cm4gaSAtIDE7XG4gICAgICB9XG4gICAgICByZXR1cm4gaTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG4gLSAxO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXk8Kj59IGFyciBBcnJheS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiZWdpbiBCZWdpbiBpbmRleC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBlbmQgRW5kIGluZGV4LlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmV2ZXJzZVN1YkFycmF5KGFyciwgYmVnaW4sIGVuZCkge1xuICB3aGlsZSAoYmVnaW4gPCBlbmQpIHtcbiAgICBjb25zdCB0bXAgPSBhcnJbYmVnaW5dO1xuICAgIGFycltiZWdpbl0gPSBhcnJbZW5kXTtcbiAgICBhcnJbZW5kXSA9IHRtcDtcbiAgICArK2JlZ2luO1xuICAgIC0tZW5kO1xuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHtBcnJheTxWQUxVRT59IGFyciBUaGUgYXJyYXkgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHshQXJyYXk8VkFMVUU+fFZBTFVFfSBkYXRhIFRoZSBlbGVtZW50cyBvciBhcnJheXMgb2YgZWxlbWVudHMgdG8gYWRkIHRvIGFyci5cbiAqIEB0ZW1wbGF0ZSBWQUxVRVxuICovXG5leHBvcnQgZnVuY3Rpb24gZXh0ZW5kKGFyciwgZGF0YSkge1xuICBjb25zdCBleHRlbnNpb24gPSBBcnJheS5pc0FycmF5KGRhdGEpID8gZGF0YSA6IFtkYXRhXTtcbiAgY29uc3QgbGVuZ3RoID0gZXh0ZW5zaW9uLmxlbmd0aDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGFyclthcnIubGVuZ3RoXSA9IGV4dGVuc2lvbltpXTtcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXk8VkFMVUU+fSBhcnIgVGhlIGFycmF5IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7VkFMVUV9IG9iaiBUaGUgZWxlbWVudCB0byByZW1vdmUuXG4gKiBAdGVtcGxhdGUgVkFMVUVcbiAqIEByZXR1cm4ge2Jvb2xlYW59IElmIHRoZSBlbGVtZW50IHdhcyByZW1vdmVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlKGFyciwgb2JqKSB7XG4gIGNvbnN0IGkgPSBhcnIuaW5kZXhPZihvYmopO1xuICBjb25zdCBmb3VuZCA9IGkgPiAtMTtcbiAgaWYgKGZvdW5kKSB7XG4gICAgYXJyLnNwbGljZShpLCAxKTtcbiAgfVxuICByZXR1cm4gZm91bmQ7XG59XG5cbi8qKlxuICogQHBhcmFtIHtBcnJheTxhbnk+fFVpbnQ4Q2xhbXBlZEFycmF5fSBhcnIxIFRoZSBmaXJzdCBhcnJheSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtBcnJheTxhbnk+fFVpbnQ4Q2xhbXBlZEFycmF5fSBhcnIyIFRoZSBzZWNvbmQgYXJyYXkgdG8gY29tcGFyZS5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IFdoZXRoZXIgdGhlIHR3byBhcnJheXMgYXJlIGVxdWFsLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxzKGFycjEsIGFycjIpIHtcbiAgY29uc3QgbGVuMSA9IGFycjEubGVuZ3RoO1xuICBpZiAobGVuMSAhPT0gYXJyMi5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW4xOyBpKyspIHtcbiAgICBpZiAoYXJyMVtpXSAhPT0gYXJyMltpXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBTb3J0IHRoZSBwYXNzZWQgYXJyYXkgc3VjaCB0aGF0IHRoZSByZWxhdGl2ZSBvcmRlciBvZiBlcXVhbCBlbGVtZW50cyBpcyBwcmVzZXJ2ZWQuXG4gKiBTZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvU29ydGluZ19hbGdvcml0aG0jU3RhYmlsaXR5IGZvciBkZXRhaWxzLlxuICogQHBhcmFtIHtBcnJheTwqPn0gYXJyIFRoZSBhcnJheSB0byBzb3J0IChtb2RpZmllcyBvcmlnaW5hbCkuXG4gKiBAcGFyYW0geyFmdW5jdGlvbigqLCAqKTogbnVtYmVyfSBjb21wYXJlRm5jIENvbXBhcmlzb24gZnVuY3Rpb24uXG4gKiBAYXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFibGVTb3J0KGFyciwgY29tcGFyZUZuYykge1xuICBjb25zdCBsZW5ndGggPSBhcnIubGVuZ3RoO1xuICBjb25zdCB0bXAgPSBBcnJheShhcnIubGVuZ3RoKTtcbiAgbGV0IGk7XG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIHRtcFtpXSA9IHtpbmRleDogaSwgdmFsdWU6IGFycltpXX07XG4gIH1cbiAgdG1wLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gY29tcGFyZUZuYyhhLnZhbHVlLCBiLnZhbHVlKSB8fCBhLmluZGV4IC0gYi5pbmRleDtcbiAgfSk7XG4gIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICBhcnJbaV0gPSB0bXBbaV0udmFsdWU7XG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5PCo+fSBhcnIgVGhlIGFycmF5IHRvIHRlc3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbZnVuY10gQ29tcGFyaXNvbiBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3N0cmljdF0gU3RyaWN0bHkgc29ydGVkIChkZWZhdWx0IGZhbHNlKS5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IFJldHVybiBpbmRleC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU29ydGVkKGFyciwgZnVuYywgc3RyaWN0KSB7XG4gIGNvbnN0IGNvbXBhcmUgPSBmdW5jIHx8IGFzY2VuZGluZztcbiAgcmV0dXJuIGFyci5ldmVyeShmdW5jdGlvbiAoY3VycmVudFZhbCwgaW5kZXgpIHtcbiAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjb25zdCByZXMgPSBjb21wYXJlKGFycltpbmRleCAtIDFdLCBjdXJyZW50VmFsKTtcbiAgICByZXR1cm4gIShyZXMgPiAwIHx8IChzdHJpY3QgJiYgcmVzID09PSAwKSk7XG4gIH0pO1xufVxuIiwiLyoqXG4gKiBAbW9kdWxlIG9sL2Fzc2VydHNcbiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7Kn0gYXNzZXJ0aW9uIEFzc2VydGlvbiB3ZSBleHBlY3RlZCB0byBiZSB0cnV0aHkuXG4gKiBAcGFyYW0ge3N0cmluZ30gZXJyb3JNZXNzYWdlIEVycm9yIG1lc3NhZ2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnQoYXNzZXJ0aW9uLCBlcnJvck1lc3NhZ2UpIHtcbiAgaWYgKCFhc3NlcnRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JNZXNzYWdlKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBAbW9kdWxlIG9sL2NvbnNvbGVcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHsnaW5mbyd8J3dhcm4nfCdlcnJvcid8J25vbmUnfSBMZXZlbFxuICovXG5cbi8qKlxuICogQHR5cGUge09iamVjdDxMZXZlbCwgbnVtYmVyPn1cbiAqL1xuY29uc3QgbGV2ZWxzID0ge1xuICBpbmZvOiAxLFxuICB3YXJuOiAyLFxuICBlcnJvcjogMyxcbiAgbm9uZTogNCxcbn07XG5cbi8qKlxuICogQHR5cGUge251bWJlcn1cbiAqL1xubGV0IGxldmVsID0gbGV2ZWxzLmluZm87XG5cbi8qKlxuICogU2V0IHRoZSBsb2dnaW5nIGxldmVsLiAgQnkgZGVmYXVsdCwgdGhlIGxldmVsIGlzIHNldCB0byAnaW5mbycgYW5kIGFsbFxuICogbWVzc2FnZXMgd2lsbCBiZSBsb2dnZWQuICBTZXQgdG8gJ3dhcm4nIHRvIG9ubHkgZGlzcGxheSB3YXJuaW5ncyBhbmQgZXJyb3JzLlxuICogU2V0IHRvICdlcnJvcicgdG8gb25seSBkaXNwbGF5IGVycm9ycy4gIFNldCB0byAnbm9uZScgdG8gc2lsZW5jZSBhbGwgbWVzc2FnZXMuXG4gKlxuICogQHBhcmFtIHtMZXZlbH0gbCBUaGUgbmV3IGxldmVsLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0TGV2ZWwobCkge1xuICBsZXZlbCA9IGxldmVsc1tsXTtcbn1cblxuLyoqXG4gKiBAcGFyYW0gIHsuLi5hbnl9IGFyZ3MgQXJndW1lbnRzIHRvIGxvZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gbG9nKC4uLmFyZ3MpIHtcbiAgaWYgKGxldmVsID4gbGV2ZWxzLmluZm8pIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc29sZS5sb2coLi4uYXJncyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxufVxuXG4vKipcbiAqIEBwYXJhbSAgey4uLmFueX0gYXJncyBBcmd1bWVudHMgdG8gbG9nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3YXJuKC4uLmFyZ3MpIHtcbiAgaWYgKGxldmVsID4gbGV2ZWxzLndhcm4pIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc29sZS53YXJuKC4uLmFyZ3MpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbn1cblxuLyoqXG4gKiBAcGFyYW0gIHsuLi5hbnl9IGFyZ3MgQXJndW1lbnRzIHRvIGxvZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXJyb3IoLi4uYXJncykge1xuICBpZiAobGV2ZWwgPiBsZXZlbHMuZXJyb3IpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc29sZS5lcnJvciguLi5hcmdzKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG59XG4iLCIvKipcbiAqIEBtb2R1bGUgb2wvY29vcmRpbmF0ZVxuICovXG5pbXBvcnQge2dldFdpZHRofSBmcm9tICcuL2V4dGVudC5qcyc7XG5pbXBvcnQge21vZHVsbywgdG9GaXhlZH0gZnJvbSAnLi9tYXRoLmpzJztcbmltcG9ydCB7cGFkTnVtYmVyfSBmcm9tICcuL3N0cmluZy5qcyc7XG5cbi8qKlxuICogQW4gYXJyYXkgb2YgbnVtYmVycyByZXByZXNlbnRpbmcgYW4gYHh5YCwgYHh5emAgb3IgYHh5em1gIGNvb3JkaW5hdGUuXG4gKiBFeGFtcGxlOiBgWzE2LCA0OF1gLlxuICogQHR5cGVkZWYge0FycmF5PG51bWJlcj59IENvb3JkaW5hdGVcbiAqIEBhcGlcbiAqL1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhIHtAbGluayBtb2R1bGU6b2wvY29vcmRpbmF0ZX5Db29yZGluYXRlfSBhbmRcbiAqIHRyYW5zZm9ybXMgaXQgaW50byBhIGB7c3RyaW5nfWAuXG4gKlxuICogQHR5cGVkZWYge2Z1bmN0aW9uKChDb29yZGluYXRlfHVuZGVmaW5lZCkpOiBzdHJpbmd9IENvb3JkaW5hdGVGb3JtYXRcbiAqIEBhcGlcbiAqL1xuXG4vKipcbiAqIEFkZCBgZGVsdGFgIHRvIGBjb29yZGluYXRlYC4gYGNvb3JkaW5hdGVgIGlzIG1vZGlmaWVkIGluIHBsYWNlIGFuZCByZXR1cm5lZFxuICogYnkgdGhlIGZ1bmN0aW9uLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogICAgIGltcG9ydCB7YWRkfSBmcm9tICdvbC9jb29yZGluYXRlLmpzJztcbiAqXG4gKiAgICAgY29uc3QgY29vcmQgPSBbNy44NSwgNDcuOTgzMzMzXTtcbiAqICAgICBhZGQoY29vcmQsIFstMiwgNF0pO1xuICogICAgIC8vIGNvb3JkIGlzIG5vdyBbNS44NSwgNTEuOTgzMzMzXVxuICpcbiAqIEBwYXJhbSB7Q29vcmRpbmF0ZX0gY29vcmRpbmF0ZSBDb29yZGluYXRlLlxuICogQHBhcmFtIHtDb29yZGluYXRlfSBkZWx0YSBEZWx0YS5cbiAqIEByZXR1cm4ge0Nvb3JkaW5hdGV9IFRoZSBpbnB1dCBjb29yZGluYXRlIGFkanVzdGVkIGJ5XG4gKiB0aGUgZ2l2ZW4gZGVsdGEuXG4gKiBAYXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGQoY29vcmRpbmF0ZSwgZGVsdGEpIHtcbiAgY29vcmRpbmF0ZVswXSArPSArZGVsdGFbMF07XG4gIGNvb3JkaW5hdGVbMV0gKz0gK2RlbHRhWzFdO1xuICByZXR1cm4gY29vcmRpbmF0ZTtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBwb2ludCBjbG9zZXN0IHRvIHRoZSBwYXNzZWQgY29vcmRpbmF0ZSBvbiB0aGUgcGFzc2VkIGNpcmNsZS5cbiAqXG4gKiBAcGFyYW0ge0Nvb3JkaW5hdGV9IGNvb3JkaW5hdGUgVGhlIGNvb3JkaW5hdGUuXG4gKiBAcGFyYW0ge2ltcG9ydChcIi4vZ2VvbS9DaXJjbGUuanNcIikuZGVmYXVsdH0gY2lyY2xlIFRoZSBjaXJjbGUuXG4gKiBAcmV0dXJuIHtDb29yZGluYXRlfSBDbG9zZXN0IHBvaW50IG9uIHRoZSBjaXJjdW1mZXJlbmNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VzdE9uQ2lyY2xlKGNvb3JkaW5hdGUsIGNpcmNsZSkge1xuICBjb25zdCByID0gY2lyY2xlLmdldFJhZGl1cygpO1xuICBjb25zdCBjZW50ZXIgPSBjaXJjbGUuZ2V0Q2VudGVyKCk7XG4gIGNvbnN0IHgwID0gY2VudGVyWzBdO1xuICBjb25zdCB5MCA9IGNlbnRlclsxXTtcbiAgY29uc3QgeDEgPSBjb29yZGluYXRlWzBdO1xuICBjb25zdCB5MSA9IGNvb3JkaW5hdGVbMV07XG5cbiAgbGV0IGR4ID0geDEgLSB4MDtcbiAgY29uc3QgZHkgPSB5MSAtIHkwO1xuICBpZiAoZHggPT09IDAgJiYgZHkgPT09IDApIHtcbiAgICBkeCA9IDE7XG4gIH1cbiAgY29uc3QgZCA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG5cbiAgY29uc3QgeCA9IHgwICsgKHIgKiBkeCkgLyBkO1xuICBjb25zdCB5ID0geTAgKyAociAqIGR5KSAvIGQ7XG5cbiAgcmV0dXJuIFt4LCB5XTtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBwb2ludCBjbG9zZXN0IHRvIHRoZSBwYXNzZWQgY29vcmRpbmF0ZSBvbiB0aGUgcGFzc2VkIHNlZ21lbnQuXG4gKiBUaGlzIGlzIHRoZSBmb290IG9mIHRoZSBwZXJwZW5kaWN1bGFyIG9mIHRoZSBjb29yZGluYXRlIHRvIHRoZSBzZWdtZW50IHdoZW5cbiAqIHRoZSBmb290IGlzIG9uIHRoZSBzZWdtZW50LCBvciB0aGUgY2xvc2VzdCBzZWdtZW50IGNvb3JkaW5hdGUgd2hlbiB0aGUgZm9vdFxuICogaXMgb3V0c2lkZSB0aGUgc2VnbWVudC5cbiAqXG4gKiBAcGFyYW0ge0Nvb3JkaW5hdGV9IGNvb3JkaW5hdGUgVGhlIGNvb3JkaW5hdGUuXG4gKiBAcGFyYW0ge0FycmF5PENvb3JkaW5hdGU+fSBzZWdtZW50IFRoZSB0d28gY29vcmRpbmF0ZXNcbiAqIG9mIHRoZSBzZWdtZW50LlxuICogQHJldHVybiB7Q29vcmRpbmF0ZX0gVGhlIGZvb3Qgb2YgdGhlIHBlcnBlbmRpY3VsYXIgb2ZcbiAqIHRoZSBjb29yZGluYXRlIHRvIHRoZSBzZWdtZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VzdE9uU2VnbWVudChjb29yZGluYXRlLCBzZWdtZW50KSB7XG4gIGNvbnN0IHgwID0gY29vcmRpbmF0ZVswXTtcbiAgY29uc3QgeTAgPSBjb29yZGluYXRlWzFdO1xuICBjb25zdCBzdGFydCA9IHNlZ21lbnRbMF07XG4gIGNvbnN0IGVuZCA9IHNlZ21lbnRbMV07XG4gIGNvbnN0IHgxID0gc3RhcnRbMF07XG4gIGNvbnN0IHkxID0gc3RhcnRbMV07XG4gIGNvbnN0IHgyID0gZW5kWzBdO1xuICBjb25zdCB5MiA9IGVuZFsxXTtcbiAgY29uc3QgZHggPSB4MiAtIHgxO1xuICBjb25zdCBkeSA9IHkyIC0geTE7XG4gIGNvbnN0IGFsb25nID1cbiAgICBkeCA9PT0gMCAmJiBkeSA9PT0gMFxuICAgICAgPyAwXG4gICAgICA6IChkeCAqICh4MCAtIHgxKSArIGR5ICogKHkwIC0geTEpKSAvIChkeCAqIGR4ICsgZHkgKiBkeSB8fCAwKTtcbiAgbGV0IHgsIHk7XG4gIGlmIChhbG9uZyA8PSAwKSB7XG4gICAgeCA9IHgxO1xuICAgIHkgPSB5MTtcbiAgfSBlbHNlIGlmIChhbG9uZyA+PSAxKSB7XG4gICAgeCA9IHgyO1xuICAgIHkgPSB5MjtcbiAgfSBlbHNlIHtcbiAgICB4ID0geDEgKyBhbG9uZyAqIGR4O1xuICAgIHkgPSB5MSArIGFsb25nICogZHk7XG4gIH1cbiAgcmV0dXJuIFt4LCB5XTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEge0BsaW5rIG1vZHVsZTpvbC9jb29yZGluYXRlfkNvb3JkaW5hdGVGb3JtYXR9IGZ1bmN0aW9uIHRoYXQgY2FuIGJlXG4gKiB1c2VkIHRvIGZvcm1hdFxuICogYSB7Q29vcmRpbmF0ZX0gdG8gYSBzdHJpbmcuXG4gKlxuICogRXhhbXBsZSB3aXRob3V0IHNwZWNpZnlpbmcgdGhlIGZyYWN0aW9uYWwgZGlnaXRzOlxuICpcbiAqICAgICBpbXBvcnQge2NyZWF0ZVN0cmluZ1hZfSBmcm9tICdvbC9jb29yZGluYXRlLmpzJztcbiAqXG4gKiAgICAgY29uc3QgY29vcmQgPSBbNy44NSwgNDcuOTgzMzMzXTtcbiAqICAgICBjb25zdCBzdHJpbmdpZnlGdW5jID0gY3JlYXRlU3RyaW5nWFkoKTtcbiAqICAgICBjb25zdCBvdXQgPSBzdHJpbmdpZnlGdW5jKGNvb3JkKTtcbiAqICAgICAvLyBvdXQgaXMgbm93ICc4LCA0OCdcbiAqXG4gKiBFeGFtcGxlIHdpdGggZXhwbGljaXRseSBzcGVjaWZ5aW5nIDIgZnJhY3Rpb25hbCBkaWdpdHM6XG4gKlxuICogICAgIGltcG9ydCB7Y3JlYXRlU3RyaW5nWFl9IGZyb20gJ29sL2Nvb3JkaW5hdGUuanMnO1xuICpcbiAqICAgICBjb25zdCBjb29yZCA9IFs3Ljg1LCA0Ny45ODMzMzNdO1xuICogICAgIGNvbnN0IHN0cmluZ2lmeUZ1bmMgPSBjcmVhdGVTdHJpbmdYWSgyKTtcbiAqICAgICBjb25zdCBvdXQgPSBzdHJpbmdpZnlGdW5jKGNvb3JkKTtcbiAqICAgICAvLyBvdXQgaXMgbm93ICc3Ljg1LCA0Ny45OCdcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gW2ZyYWN0aW9uRGlnaXRzXSBUaGUgbnVtYmVyIG9mIGRpZ2l0cyB0byBpbmNsdWRlXG4gKiAgICBhZnRlciB0aGUgZGVjaW1hbCBwb2ludC4gRGVmYXVsdCBpcyBgMGAuXG4gKiBAcmV0dXJuIHtDb29yZGluYXRlRm9ybWF0fSBDb29yZGluYXRlIGZvcm1hdC5cbiAqIEBhcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN0cmluZ1hZKGZyYWN0aW9uRGlnaXRzKSB7XG4gIHJldHVybiAoXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtDb29yZGluYXRlfSBjb29yZGluYXRlIENvb3JkaW5hdGUuXG4gICAgICogQHJldHVybiB7c3RyaW5nfSBTdHJpbmcgWFkuXG4gICAgICovXG4gICAgZnVuY3Rpb24gKGNvb3JkaW5hdGUpIHtcbiAgICAgIHJldHVybiB0b1N0cmluZ1hZKGNvb3JkaW5hdGUsIGZyYWN0aW9uRGlnaXRzKTtcbiAgICB9XG4gICk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGhlbWlzcGhlcmVzIEhlbWlzcGhlcmVzLlxuICogQHBhcmFtIHtudW1iZXJ9IGRlZ3JlZXMgRGVncmVlcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbZnJhY3Rpb25EaWdpdHNdIFRoZSBudW1iZXIgb2YgZGlnaXRzIHRvIGluY2x1ZGVcbiAqICAgIGFmdGVyIHRoZSBkZWNpbWFsIHBvaW50LiBEZWZhdWx0IGlzIGAwYC5cbiAqIEByZXR1cm4ge3N0cmluZ30gU3RyaW5nLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVncmVlc1RvU3RyaW5nSERNUyhoZW1pc3BoZXJlcywgZGVncmVlcywgZnJhY3Rpb25EaWdpdHMpIHtcbiAgY29uc3Qgbm9ybWFsaXplZERlZ3JlZXMgPSBtb2R1bG8oZGVncmVlcyArIDE4MCwgMzYwKSAtIDE4MDtcbiAgY29uc3QgeCA9IE1hdGguYWJzKDM2MDAgKiBub3JtYWxpemVkRGVncmVlcyk7XG4gIGNvbnN0IGRlY2ltYWxzID0gZnJhY3Rpb25EaWdpdHMgfHwgMDtcblxuICBsZXQgZGVnID0gTWF0aC5mbG9vcih4IC8gMzYwMCk7XG4gIGxldCBtaW4gPSBNYXRoLmZsb29yKCh4IC0gZGVnICogMzYwMCkgLyA2MCk7XG4gIGxldCBzZWMgPSB0b0ZpeGVkKHggLSBkZWcgKiAzNjAwIC0gbWluICogNjAsIGRlY2ltYWxzKTtcblxuICBpZiAoc2VjID49IDYwKSB7XG4gICAgc2VjID0gMDtcbiAgICBtaW4gKz0gMTtcbiAgfVxuXG4gIGlmIChtaW4gPj0gNjApIHtcbiAgICBtaW4gPSAwO1xuICAgIGRlZyArPSAxO1xuICB9XG5cbiAgbGV0IGhkbXMgPSBkZWcgKyAnXFx1MDBiMCc7XG4gIGlmIChtaW4gIT09IDAgfHwgc2VjICE9PSAwKSB7XG4gICAgaGRtcyArPSAnICcgKyBwYWROdW1iZXIobWluLCAyKSArICdcXHUyMDMyJztcbiAgfVxuICBpZiAoc2VjICE9PSAwKSB7XG4gICAgaGRtcyArPSAnICcgKyBwYWROdW1iZXIoc2VjLCAyLCBkZWNpbWFscykgKyAnXFx1MjAzMyc7XG4gIH1cbiAgaWYgKG5vcm1hbGl6ZWREZWdyZWVzICE9PSAwKSB7XG4gICAgaGRtcyArPSAnICcgKyBoZW1pc3BoZXJlcy5jaGFyQXQobm9ybWFsaXplZERlZ3JlZXMgPCAwID8gMSA6IDApO1xuICB9XG5cbiAgcmV0dXJuIGhkbXM7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgZ2l2ZW4ge0BsaW5rIG1vZHVsZTpvbC9jb29yZGluYXRlfkNvb3JkaW5hdGV9IHRvIGEgc3RyaW5nXG4gKiB1c2luZyB0aGUgZ2l2ZW4gc3RyaW5nIHRlbXBsYXRlLiBUaGUgc3RyaW5ncyBge3h9YCBhbmQgYHt5fWAgaW4gdGhlIHRlbXBsYXRlXG4gKiB3aWxsIGJlIHJlcGxhY2VkIHdpdGggdGhlIGZpcnN0IGFuZCBzZWNvbmQgY29vcmRpbmF0ZSB2YWx1ZXMgcmVzcGVjdGl2ZWx5LlxuICpcbiAqIEV4YW1wbGUgd2l0aG91dCBzcGVjaWZ5aW5nIHRoZSBmcmFjdGlvbmFsIGRpZ2l0czpcbiAqXG4gKiAgICAgaW1wb3J0IHtmb3JtYXR9IGZyb20gJ29sL2Nvb3JkaW5hdGUuanMnO1xuICpcbiAqICAgICBjb25zdCBjb29yZCA9IFs3Ljg1LCA0Ny45ODMzMzNdO1xuICogICAgIGNvbnN0IHRlbXBsYXRlID0gJ0Nvb3JkaW5hdGUgaXMgKHt4fXx7eX0pLic7XG4gKiAgICAgY29uc3Qgb3V0ID0gZm9ybWF0KGNvb3JkLCB0ZW1wbGF0ZSk7XG4gKiAgICAgLy8gb3V0IGlzIG5vdyAnQ29vcmRpbmF0ZSBpcyAoOHw0OCkuJ1xuICpcbiAqIEV4YW1wbGUgZXhwbGljaXRseSBzcGVjaWZ5aW5nIHRoZSBmcmFjdGlvbmFsIGRpZ2l0czpcbiAqXG4gKiAgICAgaW1wb3J0IHtmb3JtYXR9IGZyb20gJ29sL2Nvb3JkaW5hdGUuanMnO1xuICpcbiAqICAgICBjb25zdCBjb29yZCA9IFs3Ljg1LCA0Ny45ODMzMzNdO1xuICogICAgIGNvbnN0IHRlbXBsYXRlID0gJ0Nvb3JkaW5hdGUgaXMgKHt4fXx7eX0pLic7XG4gKiAgICAgY29uc3Qgb3V0ID0gZm9ybWF0KGNvb3JkLCB0ZW1wbGF0ZSwgMik7XG4gKiAgICAgLy8gb3V0IGlzIG5vdyAnQ29vcmRpbmF0ZSBpcyAoNy44NXw0Ny45OCkuJ1xuICpcbiAqIEBwYXJhbSB7Q29vcmRpbmF0ZX0gY29vcmRpbmF0ZSBDb29yZGluYXRlLlxuICogQHBhcmFtIHtzdHJpbmd9IHRlbXBsYXRlIEEgdGVtcGxhdGUgc3RyaW5nIHdpdGggYHt4fWAgYW5kIGB7eX1gIHBsYWNlaG9sZGVyc1xuICogICAgIHRoYXQgd2lsbCBiZSByZXBsYWNlZCBieSBmaXJzdCBhbmQgc2Vjb25kIGNvb3JkaW5hdGUgdmFsdWVzLlxuICogQHBhcmFtIHtudW1iZXJ9IFtmcmFjdGlvbkRpZ2l0c10gVGhlIG51bWJlciBvZiBkaWdpdHMgdG8gaW5jbHVkZVxuICogICAgYWZ0ZXIgdGhlIGRlY2ltYWwgcG9pbnQuIERlZmF1bHQgaXMgYDBgLlxuICogQHJldHVybiB7c3RyaW5nfSBGb3JtYXR0ZWQgY29vcmRpbmF0ZS5cbiAqIEBhcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdChjb29yZGluYXRlLCB0ZW1wbGF0ZSwgZnJhY3Rpb25EaWdpdHMpIHtcbiAgaWYgKGNvb3JkaW5hdGUpIHtcbiAgICByZXR1cm4gdGVtcGxhdGVcbiAgICAgIC5yZXBsYWNlKCd7eH0nLCBjb29yZGluYXRlWzBdLnRvRml4ZWQoZnJhY3Rpb25EaWdpdHMpKVxuICAgICAgLnJlcGxhY2UoJ3t5fScsIGNvb3JkaW5hdGVbMV0udG9GaXhlZChmcmFjdGlvbkRpZ2l0cykpO1xuICB9XG4gIHJldHVybiAnJztcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0Nvb3JkaW5hdGV9IGNvb3JkaW5hdGUxIEZpcnN0IGNvb3JkaW5hdGUuXG4gKiBAcGFyYW0ge0Nvb3JkaW5hdGV9IGNvb3JkaW5hdGUyIFNlY29uZCBjb29yZGluYXRlLlxuICogQHJldHVybiB7Ym9vbGVhbn0gVGhlIHR3byBjb29yZGluYXRlcyBhcmUgZXF1YWwuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbHMoY29vcmRpbmF0ZTEsIGNvb3JkaW5hdGUyKSB7XG4gIGxldCBlcXVhbHMgPSB0cnVlO1xuICBmb3IgKGxldCBpID0gY29vcmRpbmF0ZTEubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICBpZiAoY29vcmRpbmF0ZTFbaV0gIT0gY29vcmRpbmF0ZTJbaV0pIHtcbiAgICAgIGVxdWFscyA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBlcXVhbHM7XG59XG5cbi8qKlxuICogUm90YXRlIGBjb29yZGluYXRlYCBieSBgYW5nbGVgLiBgY29vcmRpbmF0ZWAgaXMgbW9kaWZpZWQgaW4gcGxhY2UgYW5kXG4gKiByZXR1cm5lZCBieSB0aGUgZnVuY3Rpb24uXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgICAgaW1wb3J0IHtyb3RhdGV9IGZyb20gJ29sL2Nvb3JkaW5hdGUuanMnO1xuICpcbiAqICAgICBjb25zdCBjb29yZCA9IFs3Ljg1LCA0Ny45ODMzMzNdO1xuICogICAgIGNvbnN0IHJvdGF0ZVJhZGlhbnMgPSBNYXRoLlBJIC8gMjsgLy8gOTAgZGVncmVlc1xuICogICAgIHJvdGF0ZShjb29yZCwgcm90YXRlUmFkaWFucyk7XG4gKiAgICAgLy8gY29vcmQgaXMgbm93IFstNDcuOTgzMzMzLCA3Ljg1XVxuICpcbiAqIEBwYXJhbSB7Q29vcmRpbmF0ZX0gY29vcmRpbmF0ZSBDb29yZGluYXRlLlxuICogQHBhcmFtIHtudW1iZXJ9IGFuZ2xlIEFuZ2xlIGluIHJhZGlhbi5cbiAqIEByZXR1cm4ge0Nvb3JkaW5hdGV9IENvb3JkaW5hdGUuXG4gKiBAYXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGUoY29vcmRpbmF0ZSwgYW5nbGUpIHtcbiAgY29uc3QgY29zQW5nbGUgPSBNYXRoLmNvcyhhbmdsZSk7XG4gIGNvbnN0IHNpbkFuZ2xlID0gTWF0aC5zaW4oYW5nbGUpO1xuICBjb25zdCB4ID0gY29vcmRpbmF0ZVswXSAqIGNvc0FuZ2xlIC0gY29vcmRpbmF0ZVsxXSAqIHNpbkFuZ2xlO1xuICBjb25zdCB5ID0gY29vcmRpbmF0ZVsxXSAqIGNvc0FuZ2xlICsgY29vcmRpbmF0ZVswXSAqIHNpbkFuZ2xlO1xuICBjb29yZGluYXRlWzBdID0geDtcbiAgY29vcmRpbmF0ZVsxXSA9IHk7XG4gIHJldHVybiBjb29yZGluYXRlO1xufVxuXG4vKipcbiAqIFNjYWxlIGBjb29yZGluYXRlYCBieSBgc2NhbGVgLiBgY29vcmRpbmF0ZWAgaXMgbW9kaWZpZWQgaW4gcGxhY2UgYW5kIHJldHVybmVkXG4gKiBieSB0aGUgZnVuY3Rpb24uXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgICAgaW1wb3J0IHtzY2FsZSBhcyBzY2FsZUNvb3JkaW5hdGV9IGZyb20gJ29sL2Nvb3JkaW5hdGUuanMnO1xuICpcbiAqICAgICBjb25zdCBjb29yZCA9IFs3Ljg1LCA0Ny45ODMzMzNdO1xuICogICAgIGNvbnN0IHNjYWxlID0gMS4yO1xuICogICAgIHNjYWxlQ29vcmRpbmF0ZShjb29yZCwgc2NhbGUpO1xuICogICAgIC8vIGNvb3JkIGlzIG5vdyBbOS40MiwgNTcuNTc5OTk5Nl1cbiAqXG4gKiBAcGFyYW0ge0Nvb3JkaW5hdGV9IGNvb3JkaW5hdGUgQ29vcmRpbmF0ZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzY2FsZSBTY2FsZSBmYWN0b3IuXG4gKiBAcmV0dXJuIHtDb29yZGluYXRlfSBDb29yZGluYXRlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2NhbGUoY29vcmRpbmF0ZSwgc2NhbGUpIHtcbiAgY29vcmRpbmF0ZVswXSAqPSBzY2FsZTtcbiAgY29vcmRpbmF0ZVsxXSAqPSBzY2FsZTtcbiAgcmV0dXJuIGNvb3JkaW5hdGU7XG59XG5cbi8qKlxuICogQHBhcmFtIHtDb29yZGluYXRlfSBjb29yZDEgRmlyc3QgY29vcmRpbmF0ZS5cbiAqIEBwYXJhbSB7Q29vcmRpbmF0ZX0gY29vcmQyIFNlY29uZCBjb29yZGluYXRlLlxuICogQHJldHVybiB7bnVtYmVyfSBTcXVhcmVkIGRpc3RhbmNlIGJldHdlZW4gY29vcmQxIGFuZCBjb29yZDIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzcXVhcmVkRGlzdGFuY2UoY29vcmQxLCBjb29yZDIpIHtcbiAgY29uc3QgZHggPSBjb29yZDFbMF0gLSBjb29yZDJbMF07XG4gIGNvbnN0IGR5ID0gY29vcmQxWzFdIC0gY29vcmQyWzFdO1xuICByZXR1cm4gZHggKiBkeCArIGR5ICogZHk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtDb29yZGluYXRlfSBjb29yZDEgRmlyc3QgY29vcmRpbmF0ZS5cbiAqIEBwYXJhbSB7Q29vcmRpbmF0ZX0gY29vcmQyIFNlY29uZCBjb29yZGluYXRlLlxuICogQHJldHVybiB7bnVtYmVyfSBEaXN0YW5jZSBiZXR3ZWVuIGNvb3JkMSBhbmQgY29vcmQyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlzdGFuY2UoY29vcmQxLCBjb29yZDIpIHtcbiAgcmV0dXJuIE1hdGguc3FydChzcXVhcmVkRGlzdGFuY2UoY29vcmQxLCBjb29yZDIpKTtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGUgdGhlIHNxdWFyZWQgZGlzdGFuY2UgZnJvbSBhIGNvb3JkaW5hdGUgdG8gYSBsaW5lIHNlZ21lbnQuXG4gKlxuICogQHBhcmFtIHtDb29yZGluYXRlfSBjb29yZGluYXRlIENvb3JkaW5hdGUgb2YgdGhlIHBvaW50LlxuICogQHBhcmFtIHtBcnJheTxDb29yZGluYXRlPn0gc2VnbWVudCBMaW5lIHNlZ21lbnQgKDJcbiAqIGNvb3JkaW5hdGVzKS5cbiAqIEByZXR1cm4ge251bWJlcn0gU3F1YXJlZCBkaXN0YW5jZSBmcm9tIHRoZSBwb2ludCB0byB0aGUgbGluZSBzZWdtZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3F1YXJlZERpc3RhbmNlVG9TZWdtZW50KGNvb3JkaW5hdGUsIHNlZ21lbnQpIHtcbiAgcmV0dXJuIHNxdWFyZWREaXN0YW5jZShjb29yZGluYXRlLCBjbG9zZXN0T25TZWdtZW50KGNvb3JkaW5hdGUsIHNlZ21lbnQpKTtcbn1cblxuLyoqXG4gKiBGb3JtYXQgYSBnZW9ncmFwaGljIGNvb3JkaW5hdGUgd2l0aCB0aGUgaGVtaXNwaGVyZSwgZGVncmVlcywgbWludXRlcywgYW5kXG4gKiBzZWNvbmRzLlxuICpcbiAqIEV4YW1wbGUgd2l0aG91dCBzcGVjaWZ5aW5nIGZyYWN0aW9uYWwgZGlnaXRzOlxuICpcbiAqICAgICBpbXBvcnQge3RvU3RyaW5nSERNU30gZnJvbSAnb2wvY29vcmRpbmF0ZS5qcyc7XG4gKlxuICogICAgIGNvbnN0IGNvb3JkID0gWzcuODUsIDQ3Ljk4MzMzM107XG4gKiAgICAgY29uc3Qgb3V0ID0gdG9TdHJpbmdIRE1TKGNvb3JkKTtcbiAqICAgICAvLyBvdXQgaXMgbm93ICc0N8KwIDU44oCyIDYw4oCzIE4gN8KwIDUw4oCyIDYw4oCzIEUnXG4gKlxuICogRXhhbXBsZSBleHBsaWNpdGx5IHNwZWNpZnlpbmcgMSBmcmFjdGlvbmFsIGRpZ2l0OlxuICpcbiAqICAgICBpbXBvcnQge3RvU3RyaW5nSERNU30gZnJvbSAnb2wvY29vcmRpbmF0ZS5qcyc7XG4gKlxuICogICAgIGNvbnN0IGNvb3JkID0gWzcuODUsIDQ3Ljk4MzMzM107XG4gKiAgICAgY29uc3Qgb3V0ID0gdG9TdHJpbmdIRE1TKGNvb3JkLCAxKTtcbiAqICAgICAvLyBvdXQgaXMgbm93ICc0N8KwIDU44oCyIDYwLjDigLMgTiA3wrAgNTDigLIgNjAuMOKAsyBFJ1xuICpcbiAqIEBwYXJhbSB7Q29vcmRpbmF0ZX0gY29vcmRpbmF0ZSBDb29yZGluYXRlLlxuICogQHBhcmFtIHtudW1iZXJ9IFtmcmFjdGlvbkRpZ2l0c10gVGhlIG51bWJlciBvZiBkaWdpdHMgdG8gaW5jbHVkZVxuICogICAgYWZ0ZXIgdGhlIGRlY2ltYWwgcG9pbnQuIERlZmF1bHQgaXMgYDBgLlxuICogQHJldHVybiB7c3RyaW5nfSBIZW1pc3BoZXJlLCBkZWdyZWVzLCBtaW51dGVzIGFuZCBzZWNvbmRzLlxuICogQGFwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9TdHJpbmdIRE1TKGNvb3JkaW5hdGUsIGZyYWN0aW9uRGlnaXRzKSB7XG4gIGlmIChjb29yZGluYXRlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGRlZ3JlZXNUb1N0cmluZ0hETVMoJ05TJywgY29vcmRpbmF0ZVsxXSwgZnJhY3Rpb25EaWdpdHMpICtcbiAgICAgICcgJyArXG4gICAgICBkZWdyZWVzVG9TdHJpbmdIRE1TKCdFVycsIGNvb3JkaW5hdGVbMF0sIGZyYWN0aW9uRGlnaXRzKVxuICAgICk7XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG4vKipcbiAqIEZvcm1hdCBhIGNvb3JkaW5hdGUgYXMgYSBjb21tYSBkZWxpbWl0ZWQgc3RyaW5nLlxuICpcbiAqIEV4YW1wbGUgd2l0aG91dCBzcGVjaWZ5aW5nIGZyYWN0aW9uYWwgZGlnaXRzOlxuICpcbiAqICAgICBpbXBvcnQge3RvU3RyaW5nWFl9IGZyb20gJ29sL2Nvb3JkaW5hdGUuanMnO1xuICpcbiAqICAgICBjb25zdCBjb29yZCA9IFs3Ljg1LCA0Ny45ODMzMzNdO1xuICogICAgIGNvbnN0IG91dCA9IHRvU3RyaW5nWFkoY29vcmQpO1xuICogICAgIC8vIG91dCBpcyBub3cgJzgsIDQ4J1xuICpcbiAqIEV4YW1wbGUgZXhwbGljaXRseSBzcGVjaWZ5aW5nIDEgZnJhY3Rpb25hbCBkaWdpdDpcbiAqXG4gKiAgICAgaW1wb3J0IHt0b1N0cmluZ1hZfSBmcm9tICdvbC9jb29yZGluYXRlLmpzJztcbiAqXG4gKiAgICAgY29uc3QgY29vcmQgPSBbNy44NSwgNDcuOTgzMzMzXTtcbiAqICAgICBjb25zdCBvdXQgPSB0b1N0cmluZ1hZKGNvb3JkLCAxKTtcbiAqICAgICAvLyBvdXQgaXMgbm93ICc3LjgsIDQ4LjAnXG4gKlxuICogQHBhcmFtIHtDb29yZGluYXRlfSBjb29yZGluYXRlIENvb3JkaW5hdGUuXG4gKiBAcGFyYW0ge251bWJlcn0gW2ZyYWN0aW9uRGlnaXRzXSBUaGUgbnVtYmVyIG9mIGRpZ2l0cyB0byBpbmNsdWRlXG4gKiAgICBhZnRlciB0aGUgZGVjaW1hbCBwb2ludC4gRGVmYXVsdCBpcyBgMGAuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IFhZLlxuICogQGFwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9TdHJpbmdYWShjb29yZGluYXRlLCBmcmFjdGlvbkRpZ2l0cykge1xuICByZXR1cm4gZm9ybWF0KGNvb3JkaW5hdGUsICd7eH0sIHt5fScsIGZyYWN0aW9uRGlnaXRzKTtcbn1cblxuLyoqXG4gKiBNb2RpZmllcyB0aGUgcHJvdmlkZWQgY29vcmRpbmF0ZSBpbi1wbGFjZSB0byBiZSB3aXRoaW4gdGhlIHJlYWwgd29ybGRcbiAqIGV4dGVudC4gVGhlIGxvd2VyIHByb2plY3Rpb24gZXh0ZW50IGJvdW5kYXJ5IGlzIGluY2x1c2l2ZSwgdGhlIHVwcGVyIG9uZVxuICogZXhjbHVzaXZlLlxuICpcbiAqIEBwYXJhbSB7Q29vcmRpbmF0ZX0gY29vcmRpbmF0ZSBDb29yZGluYXRlLlxuICogQHBhcmFtIHtpbXBvcnQoXCIuL3Byb2ovUHJvamVjdGlvbi5qc1wiKS5kZWZhdWx0fSBwcm9qZWN0aW9uIFByb2plY3Rpb24uXG4gKiBAcmV0dXJuIHtDb29yZGluYXRlfSBUaGUgY29vcmRpbmF0ZSB3aXRoaW4gdGhlIHJlYWwgd29ybGQgZXh0ZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gd3JhcFgoY29vcmRpbmF0ZSwgcHJvamVjdGlvbikge1xuICBpZiAocHJvamVjdGlvbi5jYW5XcmFwWCgpKSB7XG4gICAgY29uc3Qgd29ybGRXaWR0aCA9IGdldFdpZHRoKHByb2plY3Rpb24uZ2V0RXh0ZW50KCkpO1xuICAgIGNvbnN0IHdvcmxkc0F3YXkgPSBnZXRXb3JsZHNBd2F5KGNvb3JkaW5hdGUsIHByb2plY3Rpb24sIHdvcmxkV2lkdGgpO1xuICAgIGlmICh3b3JsZHNBd2F5KSB7XG4gICAgICBjb29yZGluYXRlWzBdIC09IHdvcmxkc0F3YXkgKiB3b3JsZFdpZHRoO1xuICAgIH1cbiAgfVxuICByZXR1cm4gY29vcmRpbmF0ZTtcbn1cbi8qKlxuICogQHBhcmFtIHtDb29yZGluYXRlfSBjb29yZGluYXRlIENvb3JkaW5hdGUuXG4gKiBAcGFyYW0ge2ltcG9ydChcIi4vcHJvai9Qcm9qZWN0aW9uLmpzXCIpLmRlZmF1bHR9IHByb2plY3Rpb24gUHJvamVjdGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc291cmNlRXh0ZW50V2lkdGhdIFdpZHRoIG9mIHRoZSBzb3VyY2UgZXh0ZW50LlxuICogQHJldHVybiB7bnVtYmVyfSBPZmZzZXQgaW4gd29ybGQgd2lkdGhzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0V29ybGRzQXdheShjb29yZGluYXRlLCBwcm9qZWN0aW9uLCBzb3VyY2VFeHRlbnRXaWR0aCkge1xuICBjb25zdCBwcm9qZWN0aW9uRXh0ZW50ID0gcHJvamVjdGlvbi5nZXRFeHRlbnQoKTtcbiAgbGV0IHdvcmxkc0F3YXkgPSAwO1xuICBpZiAoXG4gICAgcHJvamVjdGlvbi5jYW5XcmFwWCgpICYmXG4gICAgKGNvb3JkaW5hdGVbMF0gPCBwcm9qZWN0aW9uRXh0ZW50WzBdIHx8IGNvb3JkaW5hdGVbMF0gPiBwcm9qZWN0aW9uRXh0ZW50WzJdKVxuICApIHtcbiAgICBzb3VyY2VFeHRlbnRXaWR0aCA9IHNvdXJjZUV4dGVudFdpZHRoIHx8IGdldFdpZHRoKHByb2plY3Rpb25FeHRlbnQpO1xuICAgIHdvcmxkc0F3YXkgPSBNYXRoLmZsb29yKFxuICAgICAgKGNvb3JkaW5hdGVbMF0gLSBwcm9qZWN0aW9uRXh0ZW50WzBdKSAvIHNvdXJjZUV4dGVudFdpZHRoLFxuICAgICk7XG4gIH1cbiAgcmV0dXJuIHdvcmxkc0F3YXk7XG59XG4iLCIvKipcbiAqIEBtb2R1bGUgb2wvZXZlbnRzXG4gKi9cbmltcG9ydCB7Y2xlYXJ9IGZyb20gJy4vb2JqLmpzJztcblxuLyoqXG4gKiBLZXkgdG8gdXNlIHdpdGgge0BsaW5rIG1vZHVsZTpvbC9PYnNlcnZhYmxlLnVuQnlLZXl9LlxuICogQHR5cGVkZWYge09iamVjdH0gRXZlbnRzS2V5XG4gKiBAcHJvcGVydHkge0xpc3RlbmVyRnVuY3Rpb259IGxpc3RlbmVyIExpc3RlbmVyLlxuICogQHByb3BlcnR5IHtpbXBvcnQoXCIuL2V2ZW50cy9UYXJnZXQuanNcIikuRXZlbnRUYXJnZXRMaWtlfSB0YXJnZXQgVGFyZ2V0LlxuICogQHByb3BlcnR5IHtzdHJpbmd9IHR5cGUgVHlwZS5cbiAqIEBhcGlcbiAqL1xuXG4vKipcbiAqIExpc3RlbmVyIGZ1bmN0aW9uLiBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aXRoIGFuIGV2ZW50IG9iamVjdCBhcyBhcmd1bWVudC5cbiAqIFdoZW4gdGhlIGZ1bmN0aW9uIHJldHVybnMgYGZhbHNlYCwgZXZlbnQgcHJvcGFnYXRpb24gd2lsbCBzdG9wLlxuICpcbiAqIEB0eXBlZGVmIHtmdW5jdGlvbigoRXZlbnR8aW1wb3J0KFwiLi9ldmVudHMvRXZlbnQuanNcIikuZGVmYXVsdCkpOiAodm9pZHxib29sZWFuKX0gTGlzdGVuZXJGdW5jdGlvblxuICogQGFwaVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gTGlzdGVuZXJPYmplY3RcbiAqIEBwcm9wZXJ0eSB7TGlzdGVuZXJGdW5jdGlvbn0gaGFuZGxlRXZlbnQgSGFuZGxlRXZlbnQgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7TGlzdGVuZXJGdW5jdGlvbnxMaXN0ZW5lck9iamVjdH0gTGlzdGVuZXJcbiAqL1xuXG4vKipcbiAqIFJlZ2lzdGVycyBhbiBldmVudCBsaXN0ZW5lciBvbiBhbiBldmVudCB0YXJnZXQuIEluc3BpcmVkIGJ5XG4gKiBodHRwczovL2dvb2dsZS5naXRodWIuaW8vY2xvc3VyZS1saWJyYXJ5L2FwaS9zb3VyY2UvY2xvc3VyZS9nb29nL2V2ZW50cy9ldmVudHMuanMuc3JjLmh0bWxcbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGVmZmljaWVudGx5IGJpbmRzIGEgYGxpc3RlbmVyYCB0byBhIGB0aGlzYCBvYmplY3QsIGFuZCByZXR1cm5zXG4gKiBhIGtleSBmb3IgdXNlIHdpdGgge0BsaW5rIG1vZHVsZTpvbC9ldmVudHMudW5saXN0ZW5CeUtleX0uXG4gKlxuICogQHBhcmFtIHtpbXBvcnQoXCIuL2V2ZW50cy9UYXJnZXQuanNcIikuRXZlbnRUYXJnZXRMaWtlfSB0YXJnZXQgRXZlbnQgdGFyZ2V0LlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgRXZlbnQgdHlwZS5cbiAqIEBwYXJhbSB7TGlzdGVuZXJGdW5jdGlvbn0gbGlzdGVuZXIgTGlzdGVuZXIuXG4gKiBAcGFyYW0ge09iamVjdH0gW3RoaXNBcmddIE9iamVjdCByZWZlcmVuY2VkIGJ5IHRoZSBgdGhpc2Aga2V5d29yZCBpbiB0aGVcbiAqICAgICBsaXN0ZW5lci4gRGVmYXVsdCBpcyB0aGUgYHRhcmdldGAuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvbmNlXSBJZiB0cnVlLCBhZGQgdGhlIGxpc3RlbmVyIGFzIG9uZS1vZmYgbGlzdGVuZXIuXG4gKiBAcmV0dXJuIHtFdmVudHNLZXl9IFVuaXF1ZSBrZXkgZm9yIHRoZSBsaXN0ZW5lci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxpc3Rlbih0YXJnZXQsIHR5cGUsIGxpc3RlbmVyLCB0aGlzQXJnLCBvbmNlKSB7XG4gIGlmICh0aGlzQXJnICYmIHRoaXNBcmcgIT09IHRhcmdldCkge1xuICAgIGxpc3RlbmVyID0gbGlzdGVuZXIuYmluZCh0aGlzQXJnKTtcbiAgfVxuICBpZiAob25jZSkge1xuICAgIGNvbnN0IG9yaWdpbmFsTGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgICBsaXN0ZW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKTtcbiAgICAgIG9yaWdpbmFsTGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9XG4gIGNvbnN0IGV2ZW50c0tleSA9IHtcbiAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICB0eXBlOiB0eXBlLFxuICAgIGxpc3RlbmVyOiBsaXN0ZW5lcixcbiAgfTtcbiAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpO1xuICByZXR1cm4gZXZlbnRzS2V5O1xufVxuXG4vKipcbiAqIFJlZ2lzdGVycyBhIG9uZS1vZmYgZXZlbnQgbGlzdGVuZXIgb24gYW4gZXZlbnQgdGFyZ2V0LiBJbnNwaXJlZCBieVxuICogaHR0cHM6Ly9nb29nbGUuZ2l0aHViLmlvL2Nsb3N1cmUtbGlicmFyeS9hcGkvc291cmNlL2Nsb3N1cmUvZ29vZy9ldmVudHMvZXZlbnRzLmpzLnNyYy5odG1sXG4gKlxuICogVGhpcyBmdW5jdGlvbiBlZmZpY2llbnRseSBiaW5kcyBhIGBsaXN0ZW5lcmAgYXMgc2VsZi11bnJlZ2lzdGVyaW5nIGxpc3RlbmVyXG4gKiB0byBhIGB0aGlzYCBvYmplY3QsIGFuZCByZXR1cm5zIGEga2V5IGZvciB1c2Ugd2l0aFxuICoge0BsaW5rIG1vZHVsZTpvbC9ldmVudHMudW5saXN0ZW5CeUtleX0gaW4gY2FzZSB0aGUgbGlzdGVuZXIgbmVlZHMgdG8gYmVcbiAqIHVucmVnaXN0ZXJlZCBiZWZvcmUgaXQgaXMgY2FsbGVkLlxuICpcbiAqIFdoZW4ge0BsaW5rIG1vZHVsZTpvbC9ldmVudHMubGlzdGVufSBpcyBjYWxsZWQgd2l0aCB0aGUgc2FtZSBhcmd1bWVudHMgYWZ0ZXIgdGhpc1xuICogZnVuY3Rpb24sIHRoZSBzZWxmLXVucmVnaXN0ZXJpbmcgbGlzdGVuZXIgd2lsbCBiZSB0dXJuZWQgaW50byBhIHBlcm1hbmVudFxuICogbGlzdGVuZXIuXG4gKlxuICogQHBhcmFtIHtpbXBvcnQoXCIuL2V2ZW50cy9UYXJnZXQuanNcIikuRXZlbnRUYXJnZXRMaWtlfSB0YXJnZXQgRXZlbnQgdGFyZ2V0LlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgRXZlbnQgdHlwZS5cbiAqIEBwYXJhbSB7TGlzdGVuZXJGdW5jdGlvbn0gbGlzdGVuZXIgTGlzdGVuZXIuXG4gKiBAcGFyYW0ge09iamVjdH0gW3RoaXNBcmddIE9iamVjdCByZWZlcmVuY2VkIGJ5IHRoZSBgdGhpc2Aga2V5d29yZCBpbiB0aGVcbiAqICAgICBsaXN0ZW5lci4gRGVmYXVsdCBpcyB0aGUgYHRhcmdldGAuXG4gKiBAcmV0dXJuIHtFdmVudHNLZXl9IEtleSBmb3IgdW5saXN0ZW5CeUtleS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxpc3Rlbk9uY2UodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lciwgdGhpc0FyZykge1xuICByZXR1cm4gbGlzdGVuKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIsIHRoaXNBcmcsIHRydWUpO1xufVxuXG4vKipcbiAqIFVucmVnaXN0ZXJzIGV2ZW50IGxpc3RlbmVycyBvbiBhbiBldmVudCB0YXJnZXQuIEluc3BpcmVkIGJ5XG4gKiBodHRwczovL2dvb2dsZS5naXRodWIuaW8vY2xvc3VyZS1saWJyYXJ5L2FwaS9zb3VyY2UvY2xvc3VyZS9nb29nL2V2ZW50cy9ldmVudHMuanMuc3JjLmh0bWxcbiAqXG4gKiBUaGUgYXJndW1lbnQgcGFzc2VkIHRvIHRoaXMgZnVuY3Rpb24gaXMgdGhlIGtleSByZXR1cm5lZCBmcm9tXG4gKiB7QGxpbmsgbW9kdWxlOm9sL2V2ZW50cy5saXN0ZW59IG9yIHtAbGluayBtb2R1bGU6b2wvZXZlbnRzLmxpc3Rlbk9uY2V9LlxuICpcbiAqIEBwYXJhbSB7RXZlbnRzS2V5fSBrZXkgVGhlIGtleS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVubGlzdGVuQnlLZXkoa2V5KSB7XG4gIGlmIChrZXkgJiYga2V5LnRhcmdldCkge1xuICAgIGtleS50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihrZXkudHlwZSwga2V5Lmxpc3RlbmVyKTtcbiAgICBjbGVhcihrZXkpO1xuICB9XG59XG4iLCIvKipcbiAqIEBtb2R1bGUgb2wvZXZlbnRzL0V2ZW50XG4gKi9cblxuLyoqXG4gKiBAY2xhc3NkZXNjXG4gKiBTdHJpcHBlZCBkb3duIGltcGxlbWVudGF0aW9uIG9mIHRoZSBXM0MgRE9NIExldmVsIDIgRXZlbnQgaW50ZXJmYWNlLlxuICogU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9ET00tTGV2ZWwtMi1FdmVudHMvZXZlbnRzLmh0bWwjRXZlbnRzLWludGVyZmFjZS5cbiAqXG4gKiBUaGlzIGltcGxlbWVudGF0aW9uIG9ubHkgcHJvdmlkZXMgYHR5cGVgIGFuZCBgdGFyZ2V0YCBwcm9wZXJ0aWVzLCBhbmRcbiAqIGBzdG9wUHJvcGFnYXRpb25gIGFuZCBgcHJldmVudERlZmF1bHRgIG1ldGhvZHMuIEl0IGlzIG1lYW50IGFzIGJhc2UgY2xhc3NcbiAqIGZvciBoaWdoZXIgbGV2ZWwgZXZlbnRzIGRlZmluZWQgaW4gdGhlIGxpYnJhcnksIGFuZCB3b3JrcyB3aXRoXG4gKiB7QGxpbmsgbW9kdWxlOm9sL2V2ZW50cy9UYXJnZXR+VGFyZ2V0fS5cbiAqL1xuY2xhc3MgQmFzZUV2ZW50IHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFR5cGUuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih0eXBlKSB7XG4gICAgLyoqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5wcm9wYWdhdGlvblN0b3BwZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLmRlZmF1bHRQcmV2ZW50ZWQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZXZlbnQgdHlwZS5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBhcGlcbiAgICAgKi9cbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGV2ZW50IHRhcmdldC5cbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqIEBhcGlcbiAgICAgKi9cbiAgICB0aGlzLnRhcmdldCA9IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogUHJldmVudCBkZWZhdWx0LiBUaGlzIG1lYW5zIHRoYXQgbm8gZW11bGF0ZWQgYGNsaWNrYCwgYHNpbmdsZWNsaWNrYCBvciBgZG91YmxlY2xpY2tgIGV2ZW50c1xuICAgKiB3aWxsIGJlIGZpcmVkLlxuICAgKiBAYXBpXG4gICAqL1xuICBwcmV2ZW50RGVmYXVsdCgpIHtcbiAgICB0aGlzLmRlZmF1bHRQcmV2ZW50ZWQgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3AgZXZlbnQgcHJvcGFnYXRpb24uXG4gICAqIEBhcGlcbiAgICovXG4gIHN0b3BQcm9wYWdhdGlvbigpIHtcbiAgICB0aGlzLnByb3BhZ2F0aW9uU3RvcHBlZCA9IHRydWU7XG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge0V2ZW50fGltcG9ydChcIi4vRXZlbnQuanNcIikuZGVmYXVsdH0gZXZ0IEV2ZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdG9wUHJvcGFnYXRpb24oZXZ0KSB7XG4gIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0V2ZW50fGltcG9ydChcIi4vRXZlbnQuanNcIikuZGVmYXVsdH0gZXZ0IEV2ZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcmV2ZW50RGVmYXVsdChldnQpIHtcbiAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VFdmVudDtcbiIsIi8qKlxuICogQG1vZHVsZSBvbC9ldmVudHMvRXZlbnRUeXBlXG4gKi9cblxuLyoqXG4gKiBAZW51bSB7c3RyaW5nfVxuICogQGNvbnN0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLyoqXG4gICAqIEdlbmVyaWMgY2hhbmdlIGV2ZW50LiBUcmlnZ2VyZWQgd2hlbiB0aGUgcmV2aXNpb24gY291bnRlciBpcyBpbmNyZWFzZWQuXG4gICAqIEBldmVudCBtb2R1bGU6b2wvZXZlbnRzL0V2ZW50fkJhc2VFdmVudCNjaGFuZ2VcbiAgICogQGFwaVxuICAgKi9cbiAgQ0hBTkdFOiAnY2hhbmdlJyxcblxuICAvKipcbiAgICogR2VuZXJpYyBlcnJvciBldmVudC4gVHJpZ2dlcmVkIHdoZW4gYW4gZXJyb3Igb2NjdXJzLlxuICAgKiBAZXZlbnQgbW9kdWxlOm9sL2V2ZW50cy9FdmVudH5CYXNlRXZlbnQjZXJyb3JcbiAgICogQGFwaVxuICAgKi9cbiAgRVJST1I6ICdlcnJvcicsXG5cbiAgQkxVUjogJ2JsdXInLFxuICBDTEVBUjogJ2NsZWFyJyxcbiAgQ09OVEVYVE1FTlU6ICdjb250ZXh0bWVudScsXG4gIENMSUNLOiAnY2xpY2snLFxuICBEQkxDTElDSzogJ2RibGNsaWNrJyxcbiAgRFJBR0VOVEVSOiAnZHJhZ2VudGVyJyxcbiAgRFJBR09WRVI6ICdkcmFnb3ZlcicsXG4gIERST1A6ICdkcm9wJyxcbiAgRk9DVVM6ICdmb2N1cycsXG4gIEtFWURPV046ICdrZXlkb3duJyxcbiAgS0VZUFJFU1M6ICdrZXlwcmVzcycsXG4gIExPQUQ6ICdsb2FkJyxcbiAgUkVTSVpFOiAncmVzaXplJyxcbiAgVE9VQ0hNT1ZFOiAndG91Y2htb3ZlJyxcbiAgV0hFRUw6ICd3aGVlbCcsXG59O1xuIiwiLyoqXG4gKiBAbW9kdWxlIG9sL2V2ZW50cy9UYXJnZXRcbiAqL1xuaW1wb3J0IERpc3Bvc2FibGUgZnJvbSAnLi4vRGlzcG9zYWJsZS5qcyc7XG5pbXBvcnQgRXZlbnQgZnJvbSAnLi9FdmVudC5qcyc7XG5pbXBvcnQge1ZPSUR9IGZyb20gJy4uL2Z1bmN0aW9ucy5qcyc7XG5pbXBvcnQge2NsZWFyfSBmcm9tICcuLi9vYmouanMnO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtFdmVudFRhcmdldHxUYXJnZXR9IEV2ZW50VGFyZ2V0TGlrZVxuICovXG5cbi8qKlxuICogQGNsYXNzZGVzY1xuICogQSBzaW1wbGlmaWVkIGltcGxlbWVudGF0aW9uIG9mIHRoZSBXM0MgRE9NIExldmVsIDIgRXZlbnRUYXJnZXQgaW50ZXJmYWNlLlxuICogU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi8yMDAwL1JFQy1ET00tTGV2ZWwtMi1FdmVudHMtMjAwMDExMTMvZXZlbnRzLmh0bWwjRXZlbnRzLUV2ZW50VGFyZ2V0LlxuICpcbiAqIFRoZXJlIGFyZSB0d28gaW1wb3J0YW50IHNpbXBsaWZpY2F0aW9ucyBjb21wYXJlZCB0byB0aGUgc3BlY2lmaWNhdGlvbjpcbiAqXG4gKiAxLiBUaGUgaGFuZGxpbmcgb2YgYHVzZUNhcHR1cmVgIGluIGBhZGRFdmVudExpc3RlbmVyYCBhbmRcbiAqICAgIGByZW1vdmVFdmVudExpc3RlbmVyYC4gVGhlcmUgaXMgbm8gcmVhbCBjYXB0dXJlIG1vZGVsLlxuICogMi4gVGhlIGhhbmRsaW5nIG9mIGBzdG9wUHJvcGFnYXRpb25gIGFuZCBgcHJldmVudERlZmF1bHRgIG9uIGBkaXNwYXRjaEV2ZW50YC5cbiAqICAgIFRoZXJlIGlzIG5vIGV2ZW50IHRhcmdldCBoaWVyYXJjaHkuIFdoZW4gYSBsaXN0ZW5lciBjYWxsc1xuICogICAgYHN0b3BQcm9wYWdhdGlvbmAgb3IgYHByZXZlbnREZWZhdWx0YCBvbiBhbiBldmVudCBvYmplY3QsIGl0IG1lYW5zIHRoYXQgbm9cbiAqICAgIG1vcmUgbGlzdGVuZXJzIGFmdGVyIHRoaXMgb25lIHdpbGwgYmUgY2FsbGVkLiBTYW1lIGFzIHdoZW4gdGhlIGxpc3RlbmVyXG4gKiAgICByZXR1cm5zIGZhbHNlLlxuICovXG5jbGFzcyBUYXJnZXQgZXh0ZW5kcyBEaXNwb3NhYmxlIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7Kn0gW3RhcmdldF0gRGVmYXVsdCBldmVudCB0YXJnZXQgZm9yIGRpc3BhdGNoZWQgZXZlbnRzLlxuICAgKi9cbiAgY29uc3RydWN0b3IodGFyZ2V0KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHR5cGUgeyp9XG4gICAgICovXG4gICAgdGhpcy5ldmVudFRhcmdldF8gPSB0YXJnZXQ7XG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEB0eXBlIHtPYmplY3Q8c3RyaW5nLCBudW1iZXI+fG51bGx9XG4gICAgICovXG4gICAgdGhpcy5wZW5kaW5nUmVtb3ZhbHNfID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHR5cGUge09iamVjdDxzdHJpbmcsIG51bWJlcj58bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLmRpc3BhdGNoaW5nXyA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEB0eXBlIHtPYmplY3Q8c3RyaW5nLCBBcnJheTxpbXBvcnQoXCIuLi9ldmVudHMuanNcIikuTGlzdGVuZXI+PnxudWxsfVxuICAgICAqL1xuICAgIHRoaXMubGlzdGVuZXJzXyA9IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgVHlwZS5cbiAgICogQHBhcmFtIHtpbXBvcnQoXCIuLi9ldmVudHMuanNcIikuTGlzdGVuZXJ9IGxpc3RlbmVyIExpc3RlbmVyLlxuICAgKi9cbiAgYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgIGlmICghdHlwZSB8fCAhbGlzdGVuZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnNfIHx8ICh0aGlzLmxpc3RlbmVyc18gPSB7fSk7XG4gICAgY29uc3QgbGlzdGVuZXJzRm9yVHlwZSA9IGxpc3RlbmVyc1t0eXBlXSB8fCAobGlzdGVuZXJzW3R5cGVdID0gW10pO1xuICAgIGlmICghbGlzdGVuZXJzRm9yVHlwZS5pbmNsdWRlcyhsaXN0ZW5lcikpIHtcbiAgICAgIGxpc3RlbmVyc0ZvclR5cGUucHVzaChsaXN0ZW5lcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERpc3BhdGNoZXMgYW4gZXZlbnQgYW5kIGNhbGxzIGFsbCBsaXN0ZW5lcnMgbGlzdGVuaW5nIGZvciBldmVudHNcbiAgICogb2YgdGhpcyB0eXBlLiBUaGUgZXZlbnQgcGFyYW1ldGVyIGNhbiBlaXRoZXIgYmUgYSBzdHJpbmcgb3IgYW5cbiAgICogT2JqZWN0IHdpdGggYSBgdHlwZWAgcHJvcGVydHkuXG4gICAqXG4gICAqIEBwYXJhbSB7aW1wb3J0KFwiLi9FdmVudC5qc1wiKS5kZWZhdWx0fHN0cmluZ30gZXZlbnQgRXZlbnQgb2JqZWN0LlxuICAgKiBAcmV0dXJuIHtib29sZWFufHVuZGVmaW5lZH0gYGZhbHNlYCBpZiBhbnlvbmUgY2FsbGVkIHByZXZlbnREZWZhdWx0IG9uIHRoZVxuICAgKiAgICAgZXZlbnQgb2JqZWN0IG9yIGlmIGFueSBvZiB0aGUgbGlzdGVuZXJzIHJldHVybmVkIGZhbHNlLlxuICAgKiBAYXBpXG4gICAqL1xuICBkaXNwYXRjaEV2ZW50KGV2ZW50KSB7XG4gICAgY29uc3QgaXNTdHJpbmcgPSB0eXBlb2YgZXZlbnQgPT09ICdzdHJpbmcnO1xuICAgIGNvbnN0IHR5cGUgPSBpc1N0cmluZyA/IGV2ZW50IDogZXZlbnQudHlwZTtcbiAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVyc18gJiYgdGhpcy5saXN0ZW5lcnNfW3R5cGVdO1xuICAgIGlmICghbGlzdGVuZXJzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZXZ0ID0gaXNTdHJpbmcgPyBuZXcgRXZlbnQoZXZlbnQpIDogLyoqIEB0eXBlIHtFdmVudH0gKi8gKGV2ZW50KTtcbiAgICBpZiAoIWV2dC50YXJnZXQpIHtcbiAgICAgIGV2dC50YXJnZXQgPSB0aGlzLmV2ZW50VGFyZ2V0XyB8fCB0aGlzO1xuICAgIH1cbiAgICBjb25zdCBkaXNwYXRjaGluZyA9IHRoaXMuZGlzcGF0Y2hpbmdfIHx8ICh0aGlzLmRpc3BhdGNoaW5nXyA9IHt9KTtcbiAgICBjb25zdCBwZW5kaW5nUmVtb3ZhbHMgPVxuICAgICAgdGhpcy5wZW5kaW5nUmVtb3ZhbHNfIHx8ICh0aGlzLnBlbmRpbmdSZW1vdmFsc18gPSB7fSk7XG4gICAgaWYgKCEodHlwZSBpbiBkaXNwYXRjaGluZykpIHtcbiAgICAgIGRpc3BhdGNoaW5nW3R5cGVdID0gMDtcbiAgICAgIHBlbmRpbmdSZW1vdmFsc1t0eXBlXSA9IDA7XG4gICAgfVxuICAgICsrZGlzcGF0Y2hpbmdbdHlwZV07XG4gICAgbGV0IHByb3BhZ2F0ZTtcbiAgICBmb3IgKGxldCBpID0gMCwgaWkgPSBsaXN0ZW5lcnMubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgICAgaWYgKCdoYW5kbGVFdmVudCcgaW4gbGlzdGVuZXJzW2ldKSB7XG4gICAgICAgIHByb3BhZ2F0ZSA9IC8qKiBAdHlwZSB7aW1wb3J0KFwiLi4vZXZlbnRzLmpzXCIpLkxpc3RlbmVyT2JqZWN0fSAqLyAoXG4gICAgICAgICAgbGlzdGVuZXJzW2ldXG4gICAgICAgICkuaGFuZGxlRXZlbnQoZXZ0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb3BhZ2F0ZSA9IC8qKiBAdHlwZSB7aW1wb3J0KFwiLi4vZXZlbnRzLmpzXCIpLkxpc3RlbmVyRnVuY3Rpb259ICovIChcbiAgICAgICAgICBsaXN0ZW5lcnNbaV1cbiAgICAgICAgKS5jYWxsKHRoaXMsIGV2dCk7XG4gICAgICB9XG4gICAgICBpZiAocHJvcGFnYXRlID09PSBmYWxzZSB8fCBldnQucHJvcGFnYXRpb25TdG9wcGVkKSB7XG4gICAgICAgIHByb3BhZ2F0ZSA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKC0tZGlzcGF0Y2hpbmdbdHlwZV0gPT09IDApIHtcbiAgICAgIGxldCBwciA9IHBlbmRpbmdSZW1vdmFsc1t0eXBlXTtcbiAgICAgIGRlbGV0ZSBwZW5kaW5nUmVtb3ZhbHNbdHlwZV07XG4gICAgICB3aGlsZSAocHItLSkge1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgVk9JRCk7XG4gICAgICB9XG4gICAgICBkZWxldGUgZGlzcGF0Y2hpbmdbdHlwZV07XG4gICAgfVxuICAgIHJldHVybiBwcm9wYWdhdGU7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYW4gdXAuXG4gICAqL1xuICBkaXNwb3NlSW50ZXJuYWwoKSB7XG4gICAgdGhpcy5saXN0ZW5lcnNfICYmIGNsZWFyKHRoaXMubGlzdGVuZXJzXyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBsaXN0ZW5lcnMgZm9yIGEgc3BlY2lmaWVkIGV2ZW50IHR5cGUuIExpc3RlbmVycyBhcmUgcmV0dXJuZWQgaW4gdGhlXG4gICAqIG9yZGVyIHRoYXQgdGhleSB3aWxsIGJlIGNhbGxlZCBpbi5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgVHlwZS5cbiAgICogQHJldHVybiB7QXJyYXk8aW1wb3J0KFwiLi4vZXZlbnRzLmpzXCIpLkxpc3RlbmVyPnx1bmRlZmluZWR9IExpc3RlbmVycy5cbiAgICovXG4gIGdldExpc3RlbmVycyh0eXBlKSB7XG4gICAgcmV0dXJuICh0aGlzLmxpc3RlbmVyc18gJiYgdGhpcy5saXN0ZW5lcnNfW3R5cGVdKSB8fCB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IFt0eXBlXSBUeXBlLiBJZiBub3QgcHJvdmlkZWQsXG4gICAqICAgICBgdHJ1ZWAgd2lsbCBiZSByZXR1cm5lZCBpZiB0aGlzIGV2ZW50IHRhcmdldCBoYXMgYW55IGxpc3RlbmVycy5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gSGFzIGxpc3RlbmVycy5cbiAgICovXG4gIGhhc0xpc3RlbmVyKHR5cGUpIHtcbiAgICBpZiAoIXRoaXMubGlzdGVuZXJzXykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHlwZVxuICAgICAgPyB0eXBlIGluIHRoaXMubGlzdGVuZXJzX1xuICAgICAgOiBPYmplY3Qua2V5cyh0aGlzLmxpc3RlbmVyc18pLmxlbmd0aCA+IDA7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgVHlwZS5cbiAgICogQHBhcmFtIHtpbXBvcnQoXCIuLi9ldmVudHMuanNcIikuTGlzdGVuZXJ9IGxpc3RlbmVyIExpc3RlbmVyLlxuICAgKi9cbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgIGlmICghdGhpcy5saXN0ZW5lcnNfKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzX1t0eXBlXTtcbiAgICBpZiAoIWxpc3RlbmVycykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBpbmRleCA9IGxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBpZiAodGhpcy5wZW5kaW5nUmVtb3ZhbHNfICYmIHR5cGUgaW4gdGhpcy5wZW5kaW5nUmVtb3ZhbHNfKSB7XG4gICAgICAgIC8vIG1ha2UgbGlzdGVuZXIgYSBuby1vcCwgYW5kIHJlbW92ZSBsYXRlciBpbiAjZGlzcGF0Y2hFdmVudCgpXG4gICAgICAgIGxpc3RlbmVyc1tpbmRleF0gPSBWT0lEO1xuICAgICAgICArK3RoaXMucGVuZGluZ1JlbW92YWxzX1t0eXBlXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBpZiAobGlzdGVuZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLmxpc3RlbmVyc19bdHlwZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFyZ2V0O1xuIiwiLyoqXG4gKiBAbW9kdWxlIG9sL2V4dGVudFxuICovXG5pbXBvcnQgUmVsYXRpb25zaGlwIGZyb20gJy4vZXh0ZW50L1JlbGF0aW9uc2hpcC5qcyc7XG5cbi8qKlxuICogQW4gYXJyYXkgb2YgbnVtYmVycyByZXByZXNlbnRpbmcgYW4gZXh0ZW50OiBgW21pbngsIG1pbnksIG1heHgsIG1heHldYC5cbiAqIEB0eXBlZGVmIHtBcnJheTxudW1iZXI+fSBFeHRlbnRcbiAqIEBhcGlcbiAqL1xuXG4vKipcbiAqIEV4dGVudCBjb3JuZXIuXG4gKiBAdHlwZWRlZiB7J2JvdHRvbS1sZWZ0JyB8ICdib3R0b20tcmlnaHQnIHwgJ3RvcC1sZWZ0JyB8ICd0b3AtcmlnaHQnfSBDb3JuZXJcbiAqL1xuXG4vKipcbiAqIEJ1aWxkIGFuIGV4dGVudCB0aGF0IGluY2x1ZGVzIGFsbCBnaXZlbiBjb29yZGluYXRlcy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5PGltcG9ydChcIi4vY29vcmRpbmF0ZS5qc1wiKS5Db29yZGluYXRlPn0gY29vcmRpbmF0ZXMgQ29vcmRpbmF0ZXMuXG4gKiBAcmV0dXJuIHtFeHRlbnR9IEJvdW5kaW5nIGV4dGVudC5cbiAqIEBhcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kaW5nRXh0ZW50KGNvb3JkaW5hdGVzKSB7XG4gIGNvbnN0IGV4dGVudCA9IGNyZWF0ZUVtcHR5KCk7XG4gIGZvciAobGV0IGkgPSAwLCBpaSA9IGNvb3JkaW5hdGVzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICBleHRlbmRDb29yZGluYXRlKGV4dGVudCwgY29vcmRpbmF0ZXNbaV0pO1xuICB9XG4gIHJldHVybiBleHRlbnQ7XG59XG5cbi8qKlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSB4cyBYcy5cbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0geXMgWXMuXG4gKiBAcGFyYW0ge0V4dGVudH0gW2Rlc3RdIERlc3RpbmF0aW9uIGV4dGVudC5cbiAqIEBwcml2YXRlXG4gKiBAcmV0dXJuIHtFeHRlbnR9IEV4dGVudC5cbiAqL1xuZnVuY3Rpb24gX2JvdW5kaW5nRXh0ZW50WFlzKHhzLCB5cywgZGVzdCkge1xuICBjb25zdCBtaW5YID0gTWF0aC5taW4uYXBwbHkobnVsbCwgeHMpO1xuICBjb25zdCBtaW5ZID0gTWF0aC5taW4uYXBwbHkobnVsbCwgeXMpO1xuICBjb25zdCBtYXhYID0gTWF0aC5tYXguYXBwbHkobnVsbCwgeHMpO1xuICBjb25zdCBtYXhZID0gTWF0aC5tYXguYXBwbHkobnVsbCwgeXMpO1xuICByZXR1cm4gY3JlYXRlT3JVcGRhdGUobWluWCwgbWluWSwgbWF4WCwgbWF4WSwgZGVzdCk7XG59XG5cbi8qKlxuICogUmV0dXJuIGV4dGVudCBpbmNyZWFzZWQgYnkgdGhlIHByb3ZpZGVkIHZhbHVlLlxuICogQHBhcmFtIHtFeHRlbnR9IGV4dGVudCBFeHRlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgVGhlIGFtb3VudCBieSB3aGljaCB0aGUgZXh0ZW50IHNob3VsZCBiZSBidWZmZXJlZC5cbiAqIEBwYXJhbSB7RXh0ZW50fSBbZGVzdF0gRXh0ZW50LlxuICogQHJldHVybiB7RXh0ZW50fSBFeHRlbnQuXG4gKiBAYXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBidWZmZXIoZXh0ZW50LCB2YWx1ZSwgZGVzdCkge1xuICBpZiAoZGVzdCkge1xuICAgIGRlc3RbMF0gPSBleHRlbnRbMF0gLSB2YWx1ZTtcbiAgICBkZXN0WzFdID0gZXh0ZW50WzFdIC0gdmFsdWU7XG4gICAgZGVzdFsyXSA9IGV4dGVudFsyXSArIHZhbHVlO1xuICAgIGRlc3RbM10gPSBleHRlbnRbM10gKyB2YWx1ZTtcbiAgICByZXR1cm4gZGVzdDtcbiAgfVxuICByZXR1cm4gW1xuICAgIGV4dGVudFswXSAtIHZhbHVlLFxuICAgIGV4dGVudFsxXSAtIHZhbHVlLFxuICAgIGV4dGVudFsyXSArIHZhbHVlLFxuICAgIGV4dGVudFszXSArIHZhbHVlLFxuICBdO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBhbiBleHRlbnQuXG4gKlxuICogQHBhcmFtIHtFeHRlbnR9IGV4dGVudCBFeHRlbnQgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge0V4dGVudH0gW2Rlc3RdIEV4dGVudC5cbiAqIEByZXR1cm4ge0V4dGVudH0gVGhlIGNsb25lLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xvbmUoZXh0ZW50LCBkZXN0KSB7XG4gIGlmIChkZXN0KSB7XG4gICAgZGVzdFswXSA9IGV4dGVudFswXTtcbiAgICBkZXN0WzFdID0gZXh0ZW50WzFdO1xuICAgIGRlc3RbMl0gPSBleHRlbnRbMl07XG4gICAgZGVzdFszXSA9IGV4dGVudFszXTtcbiAgICByZXR1cm4gZGVzdDtcbiAgfVxuICByZXR1cm4gZXh0ZW50LnNsaWNlKCk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtFeHRlbnR9IGV4dGVudCBFeHRlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0geCBYLlxuICogQHBhcmFtIHtudW1iZXJ9IHkgWS5cbiAqIEByZXR1cm4ge251bWJlcn0gQ2xvc2VzdCBzcXVhcmVkIGRpc3RhbmNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VzdFNxdWFyZWREaXN0YW5jZVhZKGV4dGVudCwgeCwgeSkge1xuICBsZXQgZHgsIGR5O1xuICBpZiAoeCA8IGV4dGVudFswXSkge1xuICAgIGR4ID0gZXh0ZW50WzBdIC0geDtcbiAgfSBlbHNlIGlmIChleHRlbnRbMl0gPCB4KSB7XG4gICAgZHggPSB4IC0gZXh0ZW50WzJdO1xuICB9IGVsc2Uge1xuICAgIGR4ID0gMDtcbiAgfVxuICBpZiAoeSA8IGV4dGVudFsxXSkge1xuICAgIGR5ID0gZXh0ZW50WzFdIC0geTtcbiAgfSBlbHNlIGlmIChleHRlbnRbM10gPCB5KSB7XG4gICAgZHkgPSB5IC0gZXh0ZW50WzNdO1xuICB9IGVsc2Uge1xuICAgIGR5ID0gMDtcbiAgfVxuICByZXR1cm4gZHggKiBkeCArIGR5ICogZHk7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlIHBhc3NlZCBjb29yZGluYXRlIGlzIGNvbnRhaW5lZCBvciBvbiB0aGUgZWRnZSBvZiB0aGUgZXh0ZW50LlxuICpcbiAqIEBwYXJhbSB7RXh0ZW50fSBleHRlbnQgRXh0ZW50LlxuICogQHBhcmFtIHtpbXBvcnQoXCIuL2Nvb3JkaW5hdGUuanNcIikuQ29vcmRpbmF0ZX0gY29vcmRpbmF0ZSBDb29yZGluYXRlLlxuICogQHJldHVybiB7Ym9vbGVhbn0gVGhlIGNvb3JkaW5hdGUgaXMgY29udGFpbmVkIGluIHRoZSBleHRlbnQuXG4gKiBAYXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb250YWluc0Nvb3JkaW5hdGUoZXh0ZW50LCBjb29yZGluYXRlKSB7XG4gIHJldHVybiBjb250YWluc1hZKGV4dGVudCwgY29vcmRpbmF0ZVswXSwgY29vcmRpbmF0ZVsxXSk7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgb25lIGV4dGVudCBjb250YWlucyBhbm90aGVyLlxuICpcbiAqIEFuIGV4dGVudCBpcyBkZWVtZWQgY29udGFpbmVkIGlmIGl0IGxpZXMgY29tcGxldGVseSB3aXRoaW4gdGhlIG90aGVyIGV4dGVudCxcbiAqIGluY2x1ZGluZyBpZiB0aGV5IHNoYXJlIG9uZSBvciBtb3JlIGVkZ2VzLlxuICpcbiAqIEBwYXJhbSB7RXh0ZW50fSBleHRlbnQxIEV4dGVudCAxLlxuICogQHBhcmFtIHtFeHRlbnR9IGV4dGVudDIgRXh0ZW50IDIuXG4gKiBAcmV0dXJuIHtib29sZWFufSBUaGUgc2Vjb25kIGV4dGVudCBpcyBjb250YWluZWQgYnkgb3Igb24gdGhlIGVkZ2Ugb2YgdGhlXG4gKiAgICAgZmlyc3QuXG4gKiBAYXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb250YWluc0V4dGVudChleHRlbnQxLCBleHRlbnQyKSB7XG4gIHJldHVybiAoXG4gICAgZXh0ZW50MVswXSA8PSBleHRlbnQyWzBdICYmXG4gICAgZXh0ZW50MlsyXSA8PSBleHRlbnQxWzJdICYmXG4gICAgZXh0ZW50MVsxXSA8PSBleHRlbnQyWzFdICYmXG4gICAgZXh0ZW50MlszXSA8PSBleHRlbnQxWzNdXG4gICk7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlIHBhc3NlZCBjb29yZGluYXRlIGlzIGNvbnRhaW5lZCBvciBvbiB0aGUgZWRnZSBvZiB0aGUgZXh0ZW50LlxuICpcbiAqIEBwYXJhbSB7RXh0ZW50fSBleHRlbnQgRXh0ZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IHggWCBjb29yZGluYXRlLlxuICogQHBhcmFtIHtudW1iZXJ9IHkgWSBjb29yZGluYXRlLlxuICogQHJldHVybiB7Ym9vbGVhbn0gVGhlIHgsIHkgdmFsdWVzIGFyZSBjb250YWluZWQgaW4gdGhlIGV4dGVudC5cbiAqIEBhcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnRhaW5zWFkoZXh0ZW50LCB4LCB5KSB7XG4gIHJldHVybiBleHRlbnRbMF0gPD0geCAmJiB4IDw9IGV4dGVudFsyXSAmJiBleHRlbnRbMV0gPD0geSAmJiB5IDw9IGV4dGVudFszXTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHJlbGF0aW9uc2hpcCBiZXR3ZWVuIGEgY29vcmRpbmF0ZSBhbmQgZXh0ZW50LlxuICogQHBhcmFtIHtFeHRlbnR9IGV4dGVudCBUaGUgZXh0ZW50LlxuICogQHBhcmFtIHtpbXBvcnQoXCIuL2Nvb3JkaW5hdGUuanNcIikuQ29vcmRpbmF0ZX0gY29vcmRpbmF0ZSBUaGUgY29vcmRpbmF0ZS5cbiAqIEByZXR1cm4ge2ltcG9ydChcIi4vZXh0ZW50L1JlbGF0aW9uc2hpcC5qc1wiKS5kZWZhdWx0fSBUaGUgcmVsYXRpb25zaGlwIChiaXR3aXNlIGNvbXBhcmUgd2l0aFxuICogICAgIGltcG9ydChcIi4vZXh0ZW50L1JlbGF0aW9uc2hpcC5qc1wiKS5SZWxhdGlvbnNoaXApLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29vcmRpbmF0ZVJlbGF0aW9uc2hpcChleHRlbnQsIGNvb3JkaW5hdGUpIHtcbiAgY29uc3QgbWluWCA9IGV4dGVudFswXTtcbiAgY29uc3QgbWluWSA9IGV4dGVudFsxXTtcbiAgY29uc3QgbWF4WCA9IGV4dGVudFsyXTtcbiAgY29uc3QgbWF4WSA9IGV4dGVudFszXTtcbiAgY29uc3QgeCA9IGNvb3JkaW5hdGVbMF07XG4gIGNvbnN0IHkgPSBjb29yZGluYXRlWzFdO1xuICBsZXQgcmVsYXRpb25zaGlwID0gUmVsYXRpb25zaGlwLlVOS05PV047XG4gIGlmICh4IDwgbWluWCkge1xuICAgIHJlbGF0aW9uc2hpcCA9IHJlbGF0aW9uc2hpcCB8IFJlbGF0aW9uc2hpcC5MRUZUO1xuICB9IGVsc2UgaWYgKHggPiBtYXhYKSB7XG4gICAgcmVsYXRpb25zaGlwID0gcmVsYXRpb25zaGlwIHwgUmVsYXRpb25zaGlwLlJJR0hUO1xuICB9XG4gIGlmICh5IDwgbWluWSkge1xuICAgIHJlbGF0aW9uc2hpcCA9IHJlbGF0aW9uc2hpcCB8IFJlbGF0aW9uc2hpcC5CRUxPVztcbiAgfSBlbHNlIGlmICh5ID4gbWF4WSkge1xuICAgIHJlbGF0aW9uc2hpcCA9IHJlbGF0aW9uc2hpcCB8IFJlbGF0aW9uc2hpcC5BQk9WRTtcbiAgfVxuICBpZiAocmVsYXRpb25zaGlwID09PSBSZWxhdGlvbnNoaXAuVU5LTk9XTikge1xuICAgIHJlbGF0aW9uc2hpcCA9IFJlbGF0aW9uc2hpcC5JTlRFUlNFQ1RJTkc7XG4gIH1cbiAgcmV0dXJuIHJlbGF0aW9uc2hpcDtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYW4gZW1wdHkgZXh0ZW50LlxuICogQHJldHVybiB7RXh0ZW50fSBFbXB0eSBleHRlbnQuXG4gKiBAYXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbXB0eSgpIHtcbiAgcmV0dXJuIFtJbmZpbml0eSwgSW5maW5pdHksIC1JbmZpbml0eSwgLUluZmluaXR5XTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgZXh0ZW50IG9yIHVwZGF0ZSB0aGUgcHJvdmlkZWQgZXh0ZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IG1pblggTWluaW11bSBYLlxuICogQHBhcmFtIHtudW1iZXJ9IG1pblkgTWluaW11bSBZLlxuICogQHBhcmFtIHtudW1iZXJ9IG1heFggTWF4aW11bSBYLlxuICogQHBhcmFtIHtudW1iZXJ9IG1heFkgTWF4aW11bSBZLlxuICogQHBhcmFtIHtFeHRlbnR9IFtkZXN0XSBEZXN0aW5hdGlvbiBleHRlbnQuXG4gKiBAcmV0dXJuIHtFeHRlbnR9IEV4dGVudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU9yVXBkYXRlKG1pblgsIG1pblksIG1heFgsIG1heFksIGRlc3QpIHtcbiAgaWYgKGRlc3QpIHtcbiAgICBkZXN0WzBdID0gbWluWDtcbiAgICBkZXN0WzFdID0gbWluWTtcbiAgICBkZXN0WzJdID0gbWF4WDtcbiAgICBkZXN0WzNdID0gbWF4WTtcbiAgICByZXR1cm4gZGVzdDtcbiAgfVxuICByZXR1cm4gW21pblgsIG1pblksIG1heFgsIG1heFldO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBlbXB0eSBleHRlbnQgb3IgbWFrZSB0aGUgcHJvdmlkZWQgb25lIGVtcHR5LlxuICogQHBhcmFtIHtFeHRlbnR9IFtkZXN0XSBFeHRlbnQuXG4gKiBAcmV0dXJuIHtFeHRlbnR9IEV4dGVudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU9yVXBkYXRlRW1wdHkoZGVzdCkge1xuICByZXR1cm4gY3JlYXRlT3JVcGRhdGUoSW5maW5pdHksIEluZmluaXR5LCAtSW5maW5pdHksIC1JbmZpbml0eSwgZGVzdCk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtpbXBvcnQoXCIuL2Nvb3JkaW5hdGUuanNcIikuQ29vcmRpbmF0ZX0gY29vcmRpbmF0ZSBDb29yZGluYXRlLlxuICogQHBhcmFtIHtFeHRlbnR9IFtkZXN0XSBFeHRlbnQuXG4gKiBAcmV0dXJuIHtFeHRlbnR9IEV4dGVudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU9yVXBkYXRlRnJvbUNvb3JkaW5hdGUoY29vcmRpbmF0ZSwgZGVzdCkge1xuICBjb25zdCB4ID0gY29vcmRpbmF0ZVswXTtcbiAgY29uc3QgeSA9IGNvb3JkaW5hdGVbMV07XG4gIHJldHVybiBjcmVhdGVPclVwZGF0ZSh4LCB5LCB4LCB5LCBkZXN0KTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5PGltcG9ydChcIi4vY29vcmRpbmF0ZS5qc1wiKS5Db29yZGluYXRlPn0gY29vcmRpbmF0ZXMgQ29vcmRpbmF0ZXMuXG4gKiBAcGFyYW0ge0V4dGVudH0gW2Rlc3RdIEV4dGVudC5cbiAqIEByZXR1cm4ge0V4dGVudH0gRXh0ZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlT3JVcGRhdGVGcm9tQ29vcmRpbmF0ZXMoY29vcmRpbmF0ZXMsIGRlc3QpIHtcbiAgY29uc3QgZXh0ZW50ID0gY3JlYXRlT3JVcGRhdGVFbXB0eShkZXN0KTtcbiAgcmV0dXJuIGV4dGVuZENvb3JkaW5hdGVzKGV4dGVudCwgY29vcmRpbmF0ZXMpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gZmxhdENvb3JkaW5hdGVzIEZsYXQgY29vcmRpbmF0ZXMuXG4gKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0IE9mZnNldC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBlbmQgRW5kLlxuICogQHBhcmFtIHtudW1iZXJ9IHN0cmlkZSBTdHJpZGUuXG4gKiBAcGFyYW0ge0V4dGVudH0gW2Rlc3RdIEV4dGVudC5cbiAqIEByZXR1cm4ge0V4dGVudH0gRXh0ZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlT3JVcGRhdGVGcm9tRmxhdENvb3JkaW5hdGVzKFxuICBmbGF0Q29vcmRpbmF0ZXMsXG4gIG9mZnNldCxcbiAgZW5kLFxuICBzdHJpZGUsXG4gIGRlc3QsXG4pIHtcbiAgY29uc3QgZXh0ZW50ID0gY3JlYXRlT3JVcGRhdGVFbXB0eShkZXN0KTtcbiAgcmV0dXJuIGV4dGVuZEZsYXRDb29yZGluYXRlcyhleHRlbnQsIGZsYXRDb29yZGluYXRlcywgb2Zmc2V0LCBlbmQsIHN0cmlkZSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtBcnJheTxBcnJheTxpbXBvcnQoXCIuL2Nvb3JkaW5hdGUuanNcIikuQ29vcmRpbmF0ZT4+fSByaW5ncyBSaW5ncy5cbiAqIEBwYXJhbSB7RXh0ZW50fSBbZGVzdF0gRXh0ZW50LlxuICogQHJldHVybiB7RXh0ZW50fSBFeHRlbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPclVwZGF0ZUZyb21SaW5ncyhyaW5ncywgZGVzdCkge1xuICBjb25zdCBleHRlbnQgPSBjcmVhdGVPclVwZGF0ZUVtcHR5KGRlc3QpO1xuICByZXR1cm4gZXh0ZW5kUmluZ3MoZXh0ZW50LCByaW5ncyk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIHR3byBleHRlbnRzIGFyZSBlcXVpdmFsZW50LlxuICogQHBhcmFtIHtFeHRlbnR9IGV4dGVudDEgRXh0ZW50IDEuXG4gKiBAcGFyYW0ge0V4dGVudH0gZXh0ZW50MiBFeHRlbnQgMi5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRoZSB0d28gZXh0ZW50cyBhcmUgZXF1aXZhbGVudC5cbiAqIEBhcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVxdWFscyhleHRlbnQxLCBleHRlbnQyKSB7XG4gIHJldHVybiAoXG4gICAgZXh0ZW50MVswXSA9PSBleHRlbnQyWzBdICYmXG4gICAgZXh0ZW50MVsyXSA9PSBleHRlbnQyWzJdICYmXG4gICAgZXh0ZW50MVsxXSA9PSBleHRlbnQyWzFdICYmXG4gICAgZXh0ZW50MVszXSA9PSBleHRlbnQyWzNdXG4gICk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIHR3byBleHRlbnRzIGFyZSBhcHByb3hpbWF0ZWx5IGVxdWl2YWxlbnQuXG4gKiBAcGFyYW0ge0V4dGVudH0gZXh0ZW50MSBFeHRlbnQgMS5cbiAqIEBwYXJhbSB7RXh0ZW50fSBleHRlbnQyIEV4dGVudCAyLlxuICogQHBhcmFtIHtudW1iZXJ9IHRvbGVyYW5jZSBUb2xlcmFuY2UgaW4gZXh0ZW50IGNvb3JkaW5hdGUgdW5pdHMuXG4gKiBAcmV0dXJuIHtib29sZWFufSBUaGUgdHdvIGV4dGVudHMgZGlmZmVyIGJ5IGxlc3MgdGhhbiB0aGUgdG9sZXJhbmNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwcm94aW1hdGVseUVxdWFscyhleHRlbnQxLCBleHRlbnQyLCB0b2xlcmFuY2UpIHtcbiAgcmV0dXJuIChcbiAgICBNYXRoLmFicyhleHRlbnQxWzBdIC0gZXh0ZW50MlswXSkgPCB0b2xlcmFuY2UgJiZcbiAgICBNYXRoLmFicyhleHRlbnQxWzJdIC0gZXh0ZW50MlsyXSkgPCB0b2xlcmFuY2UgJiZcbiAgICBNYXRoLmFicyhleHRlbnQxWzFdIC0gZXh0ZW50MlsxXSkgPCB0b2xlcmFuY2UgJiZcbiAgICBNYXRoLmFicyhleHRlbnQxWzNdIC0gZXh0ZW50MlszXSkgPCB0b2xlcmFuY2VcbiAgKTtcbn1cblxuLyoqXG4gKiBNb2RpZnkgYW4gZXh0ZW50IHRvIGluY2x1ZGUgYW5vdGhlciBleHRlbnQuXG4gKiBAcGFyYW0ge0V4dGVudH0gZXh0ZW50MSBUaGUgZXh0ZW50IHRvIGJlIG1vZGlmaWVkLlxuICogQHBhcmFtIHtFeHRlbnR9IGV4dGVudDIgVGhlIGV4dGVudCB0aGF0IHdpbGwgYmUgaW5jbHVkZWQgaW4gdGhlIGZpcnN0LlxuICogQHJldHVybiB7RXh0ZW50fSBBIHJlZmVyZW5jZSB0byB0aGUgZmlyc3QgKGV4dGVuZGVkKSBleHRlbnQuXG4gKiBAYXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleHRlbmQoZXh0ZW50MSwgZXh0ZW50Mikge1xuICBpZiAoZXh0ZW50MlswXSA8IGV4dGVudDFbMF0pIHtcbiAgICBleHRlbnQxWzBdID0gZXh0ZW50MlswXTtcbiAgfVxuICBpZiAoZXh0ZW50MlsyXSA+IGV4dGVudDFbMl0pIHtcbiAgICBleHRlbnQxWzJdID0gZXh0ZW50MlsyXTtcbiAgfVxuICBpZiAoZXh0ZW50MlsxXSA8IGV4dGVudDFbMV0pIHtcbiAgICBleHRlbnQxWzFdID0gZXh0ZW50MlsxXTtcbiAgfVxuICBpZiAoZXh0ZW50MlszXSA+IGV4dGVudDFbM10pIHtcbiAgICBleHRlbnQxWzNdID0gZXh0ZW50MlszXTtcbiAgfVxuICByZXR1cm4gZXh0ZW50MTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0V4dGVudH0gZXh0ZW50IEV4dGVudC5cbiAqIEBwYXJhbSB7aW1wb3J0KFwiLi9jb29yZGluYXRlLmpzXCIpLkNvb3JkaW5hdGV9IGNvb3JkaW5hdGUgQ29vcmRpbmF0ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4dGVuZENvb3JkaW5hdGUoZXh0ZW50LCBjb29yZGluYXRlKSB7XG4gIGlmIChjb29yZGluYXRlWzBdIDwgZXh0ZW50WzBdKSB7XG4gICAgZXh0ZW50WzBdID0gY29vcmRpbmF0ZVswXTtcbiAgfVxuICBpZiAoY29vcmRpbmF0ZVswXSA+IGV4dGVudFsyXSkge1xuICAgIGV4dGVudFsyXSA9IGNvb3JkaW5hdGVbMF07XG4gIH1cbiAgaWYgKGNvb3JkaW5hdGVbMV0gPCBleHRlbnRbMV0pIHtcbiAgICBleHRlbnRbMV0gPSBjb29yZGluYXRlWzFdO1xuICB9XG4gIGlmIChjb29yZGluYXRlWzFdID4gZXh0ZW50WzNdKSB7XG4gICAgZXh0ZW50WzNdID0gY29vcmRpbmF0ZVsxXTtcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7RXh0ZW50fSBleHRlbnQgRXh0ZW50LlxuICogQHBhcmFtIHtBcnJheTxpbXBvcnQoXCIuL2Nvb3JkaW5hdGUuanNcIikuQ29vcmRpbmF0ZT59IGNvb3JkaW5hdGVzIENvb3JkaW5hdGVzLlxuICogQHJldHVybiB7RXh0ZW50fSBFeHRlbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleHRlbmRDb29yZGluYXRlcyhleHRlbnQsIGNvb3JkaW5hdGVzKSB7XG4gIGZvciAobGV0IGkgPSAwLCBpaSA9IGNvb3JkaW5hdGVzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICBleHRlbmRDb29yZGluYXRlKGV4dGVudCwgY29vcmRpbmF0ZXNbaV0pO1xuICB9XG4gIHJldHVybiBleHRlbnQ7XG59XG5cbi8qKlxuICogQHBhcmFtIHtFeHRlbnR9IGV4dGVudCBFeHRlbnQuXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGZsYXRDb29yZGluYXRlcyBGbGF0IGNvb3JkaW5hdGVzLlxuICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldCBPZmZzZXQuXG4gKiBAcGFyYW0ge251bWJlcn0gZW5kIEVuZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzdHJpZGUgU3RyaWRlLlxuICogQHJldHVybiB7RXh0ZW50fSBFeHRlbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleHRlbmRGbGF0Q29vcmRpbmF0ZXMoXG4gIGV4dGVudCxcbiAgZmxhdENvb3JkaW5hdGVzLFxuICBvZmZzZXQsXG4gIGVuZCxcbiAgc3RyaWRlLFxuKSB7XG4gIGZvciAoOyBvZmZzZXQgPCBlbmQ7IG9mZnNldCArPSBzdHJpZGUpIHtcbiAgICBleHRlbmRYWShleHRlbnQsIGZsYXRDb29yZGluYXRlc1tvZmZzZXRdLCBmbGF0Q29vcmRpbmF0ZXNbb2Zmc2V0ICsgMV0pO1xuICB9XG4gIHJldHVybiBleHRlbnQ7XG59XG5cbi8qKlxuICogQHBhcmFtIHtFeHRlbnR9IGV4dGVudCBFeHRlbnQuXG4gKiBAcGFyYW0ge0FycmF5PEFycmF5PGltcG9ydChcIi4vY29vcmRpbmF0ZS5qc1wiKS5Db29yZGluYXRlPj59IHJpbmdzIFJpbmdzLlxuICogQHJldHVybiB7RXh0ZW50fSBFeHRlbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleHRlbmRSaW5ncyhleHRlbnQsIHJpbmdzKSB7XG4gIGZvciAobGV0IGkgPSAwLCBpaSA9IHJpbmdzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICBleHRlbmRDb29yZGluYXRlcyhleHRlbnQsIHJpbmdzW2ldKTtcbiAgfVxuICByZXR1cm4gZXh0ZW50O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7RXh0ZW50fSBleHRlbnQgRXh0ZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IHggWC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB5IFkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleHRlbmRYWShleHRlbnQsIHgsIHkpIHtcbiAgZXh0ZW50WzBdID0gTWF0aC5taW4oZXh0ZW50WzBdLCB4KTtcbiAgZXh0ZW50WzFdID0gTWF0aC5taW4oZXh0ZW50WzFdLCB5KTtcbiAgZXh0ZW50WzJdID0gTWF0aC5tYXgoZXh0ZW50WzJdLCB4KTtcbiAgZXh0ZW50WzNdID0gTWF0aC5tYXgoZXh0ZW50WzNdLCB5KTtcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGNhbGxzIGBjYWxsYmFja2AgZm9yIGVhY2ggY29ybmVyIG9mIHRoZSBleHRlbnQuIElmIHRoZVxuICogY2FsbGJhY2sgcmV0dXJucyBhIHRydXRoeSB2YWx1ZSB0aGUgZnVuY3Rpb24gcmV0dXJucyB0aGF0IHZhbHVlXG4gKiBpbW1lZGlhdGVseS4gT3RoZXJ3aXNlIHRoZSBmdW5jdGlvbiByZXR1cm5zIGBmYWxzZWAuXG4gKiBAcGFyYW0ge0V4dGVudH0gZXh0ZW50IEV4dGVudC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oaW1wb3J0KFwiLi9jb29yZGluYXRlLmpzXCIpLkNvb3JkaW5hdGUpOiBTfSBjYWxsYmFjayBDYWxsYmFjay5cbiAqIEByZXR1cm4ge1N8Ym9vbGVhbn0gVmFsdWUuXG4gKiBAdGVtcGxhdGUgU1xuICovXG5leHBvcnQgZnVuY3Rpb24gZm9yRWFjaENvcm5lcihleHRlbnQsIGNhbGxiYWNrKSB7XG4gIGxldCB2YWw7XG4gIHZhbCA9IGNhbGxiYWNrKGdldEJvdHRvbUxlZnQoZXh0ZW50KSk7XG4gIGlmICh2YWwpIHtcbiAgICByZXR1cm4gdmFsO1xuICB9XG4gIHZhbCA9IGNhbGxiYWNrKGdldEJvdHRvbVJpZ2h0KGV4dGVudCkpO1xuICBpZiAodmFsKSB7XG4gICAgcmV0dXJuIHZhbDtcbiAgfVxuICB2YWwgPSBjYWxsYmFjayhnZXRUb3BSaWdodChleHRlbnQpKTtcbiAgaWYgKHZhbCkge1xuICAgIHJldHVybiB2YWw7XG4gIH1cbiAgdmFsID0gY2FsbGJhY2soZ2V0VG9wTGVmdChleHRlbnQpKTtcbiAgaWYgKHZhbCkge1xuICAgIHJldHVybiB2YWw7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIEdldCB0aGUgc2l6ZSBvZiBhbiBleHRlbnQuXG4gKiBAcGFyYW0ge0V4dGVudH0gZXh0ZW50IEV4dGVudC5cbiAqIEByZXR1cm4ge251bWJlcn0gQXJlYS5cbiAqIEBhcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEFyZWEoZXh0ZW50KSB7XG4gIGxldCBhcmVhID0gMDtcbiAgaWYgKCFpc0VtcHR5KGV4dGVudCkpIHtcbiAgICBhcmVhID0gZ2V0V2lkdGgoZXh0ZW50KSAqIGdldEhlaWdodChleHRlbnQpO1xuICB9XG4gIHJldHVybiBhcmVhO1xufVxuXG4vKipcbiAqIEdldCB0aGUgYm90dG9tIGxlZnQgY29vcmRpbmF0ZSBvZiBhbiBleHRlbnQuXG4gKiBAcGFyYW0ge0V4dGVudH0gZXh0ZW50IEV4dGVudC5cbiAqIEByZXR1cm4ge2ltcG9ydChcIi4vY29vcmRpbmF0ZS5qc1wiKS5Db29yZGluYXRlfSBCb3R0b20gbGVmdCBjb29yZGluYXRlLlxuICogQGFwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Qm90dG9tTGVmdChleHRlbnQpIHtcbiAgcmV0dXJuIFtleHRlbnRbMF0sIGV4dGVudFsxXV07XG59XG5cbi8qKlxuICogR2V0IHRoZSBib3R0b20gcmlnaHQgY29vcmRpbmF0ZSBvZiBhbiBleHRlbnQuXG4gKiBAcGFyYW0ge0V4dGVudH0gZXh0ZW50IEV4dGVudC5cbiAqIEByZXR1cm4ge2ltcG9ydChcIi4vY29vcmRpbmF0ZS5qc1wiKS5Db29yZGluYXRlfSBCb3R0b20gcmlnaHQgY29vcmRpbmF0ZS5cbiAqIEBhcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEJvdHRvbVJpZ2h0KGV4dGVudCkge1xuICByZXR1cm4gW2V4dGVudFsyXSwgZXh0ZW50WzFdXTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGNlbnRlciBjb29yZGluYXRlIG9mIGFuIGV4dGVudC5cbiAqIEBwYXJhbSB7RXh0ZW50fSBleHRlbnQgRXh0ZW50LlxuICogQHJldHVybiB7aW1wb3J0KFwiLi9jb29yZGluYXRlLmpzXCIpLkNvb3JkaW5hdGV9IENlbnRlci5cbiAqIEBhcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldENlbnRlcihleHRlbnQpIHtcbiAgcmV0dXJuIFsoZXh0ZW50WzBdICsgZXh0ZW50WzJdKSAvIDIsIChleHRlbnRbMV0gKyBleHRlbnRbM10pIC8gMl07XG59XG5cbi8qKlxuICogR2V0IGEgY29ybmVyIGNvb3JkaW5hdGUgb2YgYW4gZXh0ZW50LlxuICogQHBhcmFtIHtFeHRlbnR9IGV4dGVudCBFeHRlbnQuXG4gKiBAcGFyYW0ge0Nvcm5lcn0gY29ybmVyIENvcm5lci5cbiAqIEByZXR1cm4ge2ltcG9ydChcIi4vY29vcmRpbmF0ZS5qc1wiKS5Db29yZGluYXRlfSBDb3JuZXIgY29vcmRpbmF0ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldENvcm5lcihleHRlbnQsIGNvcm5lcikge1xuICBsZXQgY29vcmRpbmF0ZTtcbiAgaWYgKGNvcm5lciA9PT0gJ2JvdHRvbS1sZWZ0Jykge1xuICAgIGNvb3JkaW5hdGUgPSBnZXRCb3R0b21MZWZ0KGV4dGVudCk7XG4gIH0gZWxzZSBpZiAoY29ybmVyID09PSAnYm90dG9tLXJpZ2h0Jykge1xuICAgIGNvb3JkaW5hdGUgPSBnZXRCb3R0b21SaWdodChleHRlbnQpO1xuICB9IGVsc2UgaWYgKGNvcm5lciA9PT0gJ3RvcC1sZWZ0Jykge1xuICAgIGNvb3JkaW5hdGUgPSBnZXRUb3BMZWZ0KGV4dGVudCk7XG4gIH0gZWxzZSBpZiAoY29ybmVyID09PSAndG9wLXJpZ2h0Jykge1xuICAgIGNvb3JkaW5hdGUgPSBnZXRUb3BSaWdodChleHRlbnQpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjb3JuZXInKTtcbiAgfVxuICByZXR1cm4gY29vcmRpbmF0ZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0V4dGVudH0gZXh0ZW50MSBFeHRlbnQgMS5cbiAqIEBwYXJhbSB7RXh0ZW50fSBleHRlbnQyIEV4dGVudCAyLlxuICogQHJldHVybiB7bnVtYmVyfSBFbmxhcmdlZCBhcmVhLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RW5sYXJnZWRBcmVhKGV4dGVudDEsIGV4dGVudDIpIHtcbiAgY29uc3QgbWluWCA9IE1hdGgubWluKGV4dGVudDFbMF0sIGV4dGVudDJbMF0pO1xuICBjb25zdCBtaW5ZID0gTWF0aC5taW4oZXh0ZW50MVsxXSwgZXh0ZW50MlsxXSk7XG4gIGNvbnN0IG1heFggPSBNYXRoLm1heChleHRlbnQxWzJdLCBleHRlbnQyWzJdKTtcbiAgY29uc3QgbWF4WSA9IE1hdGgubWF4KGV4dGVudDFbM10sIGV4dGVudDJbM10pO1xuICByZXR1cm4gKG1heFggLSBtaW5YKSAqIChtYXhZIC0gbWluWSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtpbXBvcnQoXCIuL2Nvb3JkaW5hdGUuanNcIikuQ29vcmRpbmF0ZX0gY2VudGVyIENlbnRlci5cbiAqIEBwYXJhbSB7bnVtYmVyfSByZXNvbHV0aW9uIFJlc29sdXRpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gcm90YXRpb24gUm90YXRpb24uXG4gKiBAcGFyYW0ge2ltcG9ydChcIi4vc2l6ZS5qc1wiKS5TaXplfSBzaXplIFNpemUuXG4gKiBAcGFyYW0ge0V4dGVudH0gW2Rlc3RdIERlc3RpbmF0aW9uIGV4dGVudC5cbiAqIEByZXR1cm4ge0V4dGVudH0gRXh0ZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rm9yVmlld0FuZFNpemUoY2VudGVyLCByZXNvbHV0aW9uLCByb3RhdGlvbiwgc2l6ZSwgZGVzdCkge1xuICBjb25zdCBbeDAsIHkwLCB4MSwgeTEsIHgyLCB5MiwgeDMsIHkzXSA9IGdldFJvdGF0ZWRWaWV3cG9ydChcbiAgICBjZW50ZXIsXG4gICAgcmVzb2x1dGlvbixcbiAgICByb3RhdGlvbixcbiAgICBzaXplLFxuICApO1xuICByZXR1cm4gY3JlYXRlT3JVcGRhdGUoXG4gICAgTWF0aC5taW4oeDAsIHgxLCB4MiwgeDMpLFxuICAgIE1hdGgubWluKHkwLCB5MSwgeTIsIHkzKSxcbiAgICBNYXRoLm1heCh4MCwgeDEsIHgyLCB4MyksXG4gICAgTWF0aC5tYXgoeTAsIHkxLCB5MiwgeTMpLFxuICAgIGRlc3QsXG4gICk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtpbXBvcnQoXCIuL2Nvb3JkaW5hdGUuanNcIikuQ29vcmRpbmF0ZX0gY2VudGVyIENlbnRlci5cbiAqIEBwYXJhbSB7bnVtYmVyfSByZXNvbHV0aW9uIFJlc29sdXRpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gcm90YXRpb24gUm90YXRpb24uXG4gKiBAcGFyYW0ge2ltcG9ydChcIi4vc2l6ZS5qc1wiKS5TaXplfSBzaXplIFNpemUuXG4gKiBAcmV0dXJuIHtBcnJheTxudW1iZXI+fSBMaW5lYXIgcmluZyByZXByZXNlbnRpbmcgdGhlIHZpZXdwb3J0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um90YXRlZFZpZXdwb3J0KGNlbnRlciwgcmVzb2x1dGlvbiwgcm90YXRpb24sIHNpemUpIHtcbiAgY29uc3QgZHggPSAocmVzb2x1dGlvbiAqIHNpemVbMF0pIC8gMjtcbiAgY29uc3QgZHkgPSAocmVzb2x1dGlvbiAqIHNpemVbMV0pIC8gMjtcbiAgY29uc3QgY29zUm90YXRpb24gPSBNYXRoLmNvcyhyb3RhdGlvbik7XG4gIGNvbnN0IHNpblJvdGF0aW9uID0gTWF0aC5zaW4ocm90YXRpb24pO1xuICBjb25zdCB4Q29zID0gZHggKiBjb3NSb3RhdGlvbjtcbiAgY29uc3QgeFNpbiA9IGR4ICogc2luUm90YXRpb247XG4gIGNvbnN0IHlDb3MgPSBkeSAqIGNvc1JvdGF0aW9uO1xuICBjb25zdCB5U2luID0gZHkgKiBzaW5Sb3RhdGlvbjtcbiAgY29uc3QgeCA9IGNlbnRlclswXTtcbiAgY29uc3QgeSA9IGNlbnRlclsxXTtcbiAgcmV0dXJuIFtcbiAgICB4IC0geENvcyArIHlTaW4sXG4gICAgeSAtIHhTaW4gLSB5Q29zLFxuICAgIHggLSB4Q29zIC0geVNpbixcbiAgICB5IC0geFNpbiArIHlDb3MsXG4gICAgeCArIHhDb3MgLSB5U2luLFxuICAgIHkgKyB4U2luICsgeUNvcyxcbiAgICB4ICsgeENvcyArIHlTaW4sXG4gICAgeSArIHhTaW4gLSB5Q29zLFxuICAgIHggLSB4Q29zICsgeVNpbixcbiAgICB5IC0geFNpbiAtIHlDb3MsXG4gIF07XG59XG5cbi8qKlxuICogR2V0IHRoZSBoZWlnaHQgb2YgYW4gZXh0ZW50LlxuICogQHBhcmFtIHtFeHRlbnR9IGV4dGVudCBFeHRlbnQuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEhlaWdodC5cbiAqIEBhcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEhlaWdodChleHRlbnQpIHtcbiAgcmV0dXJuIGV4dGVudFszXSAtIGV4dGVudFsxXTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0V4dGVudH0gZXh0ZW50MSBFeHRlbnQgMS5cbiAqIEBwYXJhbSB7RXh0ZW50fSBleHRlbnQyIEV4dGVudCAyLlxuICogQHJldHVybiB7bnVtYmVyfSBJbnRlcnNlY3Rpb24gYXJlYS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEludGVyc2VjdGlvbkFyZWEoZXh0ZW50MSwgZXh0ZW50Mikge1xuICBjb25zdCBpbnRlcnNlY3Rpb24gPSBnZXRJbnRlcnNlY3Rpb24oZXh0ZW50MSwgZXh0ZW50Mik7XG4gIHJldHVybiBnZXRBcmVhKGludGVyc2VjdGlvbik7XG59XG5cbi8qKlxuICogR2V0IHRoZSBpbnRlcnNlY3Rpb24gb2YgdHdvIGV4dGVudHMuXG4gKiBAcGFyYW0ge0V4dGVudH0gZXh0ZW50MSBFeHRlbnQgMS5cbiAqIEBwYXJhbSB7RXh0ZW50fSBleHRlbnQyIEV4dGVudCAyLlxuICogQHBhcmFtIHtFeHRlbnR9IFtkZXN0XSBPcHRpb25hbCBleHRlbnQgdG8gcG9wdWxhdGUgd2l0aCBpbnRlcnNlY3Rpb24uXG4gKiBAcmV0dXJuIHtFeHRlbnR9IEludGVyc2VjdGluZyBleHRlbnQuXG4gKiBAYXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbnRlcnNlY3Rpb24oZXh0ZW50MSwgZXh0ZW50MiwgZGVzdCkge1xuICBjb25zdCBpbnRlcnNlY3Rpb24gPSBkZXN0ID8gZGVzdCA6IGNyZWF0ZUVtcHR5KCk7XG4gIGlmIChpbnRlcnNlY3RzKGV4dGVudDEsIGV4dGVudDIpKSB7XG4gICAgaWYgKGV4dGVudDFbMF0gPiBleHRlbnQyWzBdKSB7XG4gICAgICBpbnRlcnNlY3Rpb25bMF0gPSBleHRlbnQxWzBdO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnRlcnNlY3Rpb25bMF0gPSBleHRlbnQyWzBdO1xuICAgIH1cbiAgICBpZiAoZXh0ZW50MVsxXSA+IGV4dGVudDJbMV0pIHtcbiAgICAgIGludGVyc2VjdGlvblsxXSA9IGV4dGVudDFbMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGludGVyc2VjdGlvblsxXSA9IGV4dGVudDJbMV07XG4gICAgfVxuICAgIGlmIChleHRlbnQxWzJdIDwgZXh0ZW50MlsyXSkge1xuICAgICAgaW50ZXJzZWN0aW9uWzJdID0gZXh0ZW50MVsyXTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW50ZXJzZWN0aW9uWzJdID0gZXh0ZW50MlsyXTtcbiAgICB9XG4gICAgaWYgKGV4dGVudDFbM10gPCBleHRlbnQyWzNdKSB7XG4gICAgICBpbnRlcnNlY3Rpb25bM10gPSBleHRlbnQxWzNdO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnRlcnNlY3Rpb25bM10gPSBleHRlbnQyWzNdO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjcmVhdGVPclVwZGF0ZUVtcHR5KGludGVyc2VjdGlvbik7XG4gIH1cbiAgcmV0dXJuIGludGVyc2VjdGlvbjtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0V4dGVudH0gZXh0ZW50IEV4dGVudC5cbiAqIEByZXR1cm4ge251bWJlcn0gTWFyZ2luLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWFyZ2luKGV4dGVudCkge1xuICByZXR1cm4gZ2V0V2lkdGgoZXh0ZW50KSArIGdldEhlaWdodChleHRlbnQpO1xufVxuXG4vKipcbiAqIEdldCB0aGUgc2l6ZSAod2lkdGgsIGhlaWdodCkgb2YgYW4gZXh0ZW50LlxuICogQHBhcmFtIHtFeHRlbnR9IGV4dGVudCBUaGUgZXh0ZW50LlxuICogQHJldHVybiB7aW1wb3J0KFwiLi9zaXplLmpzXCIpLlNpemV9IFRoZSBleHRlbnQgc2l6ZS5cbiAqIEBhcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFNpemUoZXh0ZW50KSB7XG4gIHJldHVybiBbZXh0ZW50WzJdIC0gZXh0ZW50WzBdLCBleHRlbnRbM10gLSBleHRlbnRbMV1dO1xufVxuXG4vKipcbiAqIEdldCB0aGUgdG9wIGxlZnQgY29vcmRpbmF0ZSBvZiBhbiBleHRlbnQuXG4gKiBAcGFyYW0ge0V4dGVudH0gZXh0ZW50IEV4dGVudC5cbiAqIEByZXR1cm4ge2ltcG9ydChcIi4vY29vcmRpbmF0ZS5qc1wiKS5Db29yZGluYXRlfSBUb3AgbGVmdCBjb29yZGluYXRlLlxuICogQGFwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG9wTGVmdChleHRlbnQpIHtcbiAgcmV0dXJuIFtleHRlbnRbMF0sIGV4dGVudFszXV07XG59XG5cbi8qKlxuICogR2V0IHRoZSB0b3AgcmlnaHQgY29vcmRpbmF0ZSBvZiBhbiBleHRlbnQuXG4gKiBAcGFyYW0ge0V4dGVudH0gZXh0ZW50IEV4dGVudC5cbiAqIEByZXR1cm4ge2ltcG9ydChcIi4vY29vcmRpbmF0ZS5qc1wiKS5Db29yZGluYXRlfSBUb3AgcmlnaHQgY29vcmRpbmF0ZS5cbiAqIEBhcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRvcFJpZ2h0KGV4dGVudCkge1xuICByZXR1cm4gW2V4dGVudFsyXSwgZXh0ZW50WzNdXTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHdpZHRoIG9mIGFuIGV4dGVudC5cbiAqIEBwYXJhbSB7RXh0ZW50fSBleHRlbnQgRXh0ZW50LlxuICogQHJldHVybiB7bnVtYmVyfSBXaWR0aC5cbiAqIEBhcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFdpZHRoKGV4dGVudCkge1xuICByZXR1cm4gZXh0ZW50WzJdIC0gZXh0ZW50WzBdO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBvbmUgZXh0ZW50IGludGVyc2VjdHMgYW5vdGhlci5cbiAqIEBwYXJhbSB7RXh0ZW50fSBleHRlbnQxIEV4dGVudCAxLlxuICogQHBhcmFtIHtFeHRlbnR9IGV4dGVudDIgRXh0ZW50LlxuICogQHJldHVybiB7Ym9vbGVhbn0gVGhlIHR3byBleHRlbnRzIGludGVyc2VjdC5cbiAqIEBhcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludGVyc2VjdHMoZXh0ZW50MSwgZXh0ZW50Mikge1xuICByZXR1cm4gKFxuICAgIGV4dGVudDFbMF0gPD0gZXh0ZW50MlsyXSAmJlxuICAgIGV4dGVudDFbMl0gPj0gZXh0ZW50MlswXSAmJlxuICAgIGV4dGVudDFbMV0gPD0gZXh0ZW50MlszXSAmJlxuICAgIGV4dGVudDFbM10gPj0gZXh0ZW50MlsxXVxuICApO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhbiBleHRlbnQgaXMgZW1wdHkuXG4gKiBAcGFyYW0ge0V4dGVudH0gZXh0ZW50IEV4dGVudC5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IElzIGVtcHR5LlxuICogQGFwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNFbXB0eShleHRlbnQpIHtcbiAgcmV0dXJuIGV4dGVudFsyXSA8IGV4dGVudFswXSB8fCBleHRlbnRbM10gPCBleHRlbnRbMV07XG59XG5cbi8qKlxuICogQHBhcmFtIHtFeHRlbnR9IGV4dGVudCBFeHRlbnQuXG4gKiBAcGFyYW0ge0V4dGVudH0gW2Rlc3RdIEV4dGVudC5cbiAqIEByZXR1cm4ge0V4dGVudH0gRXh0ZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuT3JVcGRhdGUoZXh0ZW50LCBkZXN0KSB7XG4gIGlmIChkZXN0KSB7XG4gICAgZGVzdFswXSA9IGV4dGVudFswXTtcbiAgICBkZXN0WzFdID0gZXh0ZW50WzFdO1xuICAgIGRlc3RbMl0gPSBleHRlbnRbMl07XG4gICAgZGVzdFszXSA9IGV4dGVudFszXTtcbiAgICByZXR1cm4gZGVzdDtcbiAgfVxuICByZXR1cm4gZXh0ZW50O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7RXh0ZW50fSBleHRlbnQgRXh0ZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIFZhbHVlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2NhbGVGcm9tQ2VudGVyKGV4dGVudCwgdmFsdWUpIHtcbiAgY29uc3QgZGVsdGFYID0gKChleHRlbnRbMl0gLSBleHRlbnRbMF0pIC8gMikgKiAodmFsdWUgLSAxKTtcbiAgY29uc3QgZGVsdGFZID0gKChleHRlbnRbM10gLSBleHRlbnRbMV0pIC8gMikgKiAodmFsdWUgLSAxKTtcbiAgZXh0ZW50WzBdIC09IGRlbHRhWDtcbiAgZXh0ZW50WzJdICs9IGRlbHRhWDtcbiAgZXh0ZW50WzFdIC09IGRlbHRhWTtcbiAgZXh0ZW50WzNdICs9IGRlbHRhWTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgdGhlIHNlZ21lbnQgYmV0d2VlbiB0d28gY29vcmRpbmF0ZXMgaW50ZXJzZWN0cyAoY3Jvc3NlcyxcbiAqIHRvdWNoZXMsIG9yIGlzIGNvbnRhaW5lZCBieSkgdGhlIHByb3ZpZGVkIGV4dGVudC5cbiAqIEBwYXJhbSB7RXh0ZW50fSBleHRlbnQgVGhlIGV4dGVudC5cbiAqIEBwYXJhbSB7aW1wb3J0KFwiLi9jb29yZGluYXRlLmpzXCIpLkNvb3JkaW5hdGV9IHN0YXJ0IFNlZ21lbnQgc3RhcnQgY29vcmRpbmF0ZS5cbiAqIEBwYXJhbSB7aW1wb3J0KFwiLi9jb29yZGluYXRlLmpzXCIpLkNvb3JkaW5hdGV9IGVuZCBTZWdtZW50IGVuZCBjb29yZGluYXRlLlxuICogQHJldHVybiB7Ym9vbGVhbn0gVGhlIHNlZ21lbnQgaW50ZXJzZWN0cyB0aGUgZXh0ZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJzZWN0c1NlZ21lbnQoZXh0ZW50LCBzdGFydCwgZW5kKSB7XG4gIGxldCBpbnRlcnNlY3RzID0gZmFsc2U7XG4gIGNvbnN0IHN0YXJ0UmVsID0gY29vcmRpbmF0ZVJlbGF0aW9uc2hpcChleHRlbnQsIHN0YXJ0KTtcbiAgY29uc3QgZW5kUmVsID0gY29vcmRpbmF0ZVJlbGF0aW9uc2hpcChleHRlbnQsIGVuZCk7XG4gIGlmIChcbiAgICBzdGFydFJlbCA9PT0gUmVsYXRpb25zaGlwLklOVEVSU0VDVElORyB8fFxuICAgIGVuZFJlbCA9PT0gUmVsYXRpb25zaGlwLklOVEVSU0VDVElOR1xuICApIHtcbiAgICBpbnRlcnNlY3RzID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBtaW5YID0gZXh0ZW50WzBdO1xuICAgIGNvbnN0IG1pblkgPSBleHRlbnRbMV07XG4gICAgY29uc3QgbWF4WCA9IGV4dGVudFsyXTtcbiAgICBjb25zdCBtYXhZID0gZXh0ZW50WzNdO1xuICAgIGNvbnN0IHN0YXJ0WCA9IHN0YXJ0WzBdO1xuICAgIGNvbnN0IHN0YXJ0WSA9IHN0YXJ0WzFdO1xuICAgIGNvbnN0IGVuZFggPSBlbmRbMF07XG4gICAgY29uc3QgZW5kWSA9IGVuZFsxXTtcbiAgICBjb25zdCBzbG9wZSA9IChlbmRZIC0gc3RhcnRZKSAvIChlbmRYIC0gc3RhcnRYKTtcbiAgICBsZXQgeCwgeTtcbiAgICBpZiAoISEoZW5kUmVsICYgUmVsYXRpb25zaGlwLkFCT1ZFKSAmJiAhKHN0YXJ0UmVsICYgUmVsYXRpb25zaGlwLkFCT1ZFKSkge1xuICAgICAgLy8gcG90ZW50aWFsbHkgaW50ZXJzZWN0cyB0b3BcbiAgICAgIHggPSBlbmRYIC0gKGVuZFkgLSBtYXhZKSAvIHNsb3BlO1xuICAgICAgaW50ZXJzZWN0cyA9IHggPj0gbWluWCAmJiB4IDw9IG1heFg7XG4gICAgfVxuICAgIGlmIChcbiAgICAgICFpbnRlcnNlY3RzICYmXG4gICAgICAhIShlbmRSZWwgJiBSZWxhdGlvbnNoaXAuUklHSFQpICYmXG4gICAgICAhKHN0YXJ0UmVsICYgUmVsYXRpb25zaGlwLlJJR0hUKVxuICAgICkge1xuICAgICAgLy8gcG90ZW50aWFsbHkgaW50ZXJzZWN0cyByaWdodFxuICAgICAgeSA9IGVuZFkgLSAoZW5kWCAtIG1heFgpICogc2xvcGU7XG4gICAgICBpbnRlcnNlY3RzID0geSA+PSBtaW5ZICYmIHkgPD0gbWF4WTtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgIWludGVyc2VjdHMgJiZcbiAgICAgICEhKGVuZFJlbCAmIFJlbGF0aW9uc2hpcC5CRUxPVykgJiZcbiAgICAgICEoc3RhcnRSZWwgJiBSZWxhdGlvbnNoaXAuQkVMT1cpXG4gICAgKSB7XG4gICAgICAvLyBwb3RlbnRpYWxseSBpbnRlcnNlY3RzIGJvdHRvbVxuICAgICAgeCA9IGVuZFggLSAoZW5kWSAtIG1pblkpIC8gc2xvcGU7XG4gICAgICBpbnRlcnNlY3RzID0geCA+PSBtaW5YICYmIHggPD0gbWF4WDtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgIWludGVyc2VjdHMgJiZcbiAgICAgICEhKGVuZFJlbCAmIFJlbGF0aW9uc2hpcC5MRUZUKSAmJlxuICAgICAgIShzdGFydFJlbCAmIFJlbGF0aW9uc2hpcC5MRUZUKVxuICAgICkge1xuICAgICAgLy8gcG90ZW50aWFsbHkgaW50ZXJzZWN0cyBsZWZ0XG4gICAgICB5ID0gZW5kWSAtIChlbmRYIC0gbWluWCkgKiBzbG9wZTtcbiAgICAgIGludGVyc2VjdHMgPSB5ID49IG1pblkgJiYgeSA8PSBtYXhZO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaW50ZXJzZWN0cztcbn1cblxuLyoqXG4gKiBBcHBseSBhIHRyYW5zZm9ybSBmdW5jdGlvbiB0byB0aGUgZXh0ZW50LlxuICogQHBhcmFtIHtFeHRlbnR9IGV4dGVudCBFeHRlbnQuXG4gKiBAcGFyYW0ge2ltcG9ydChcIi4vcHJvai5qc1wiKS5UcmFuc2Zvcm1GdW5jdGlvbn0gdHJhbnNmb3JtRm4gVHJhbnNmb3JtIGZ1bmN0aW9uLlxuICogQ2FsbGVkIHdpdGggYFttaW5YLCBtaW5ZLCBtYXhYLCBtYXhZXWAgZXh0ZW50IGNvb3JkaW5hdGVzLlxuICogQHBhcmFtIHtFeHRlbnR9IFtkZXN0XSBEZXN0aW5hdGlvbiBleHRlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0b3BzXSBOdW1iZXIgb2Ygc3RvcHMgcGVyIHNpZGUgdXNlZCBmb3IgdGhlIHRyYW5zZm9ybS5cbiAqIEJ5IGRlZmF1bHQgb25seSB0aGUgY29ybmVycyBhcmUgdXNlZC5cbiAqIEByZXR1cm4ge0V4dGVudH0gRXh0ZW50LlxuICogQGFwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlUcmFuc2Zvcm0oZXh0ZW50LCB0cmFuc2Zvcm1GbiwgZGVzdCwgc3RvcHMpIHtcbiAgaWYgKGlzRW1wdHkoZXh0ZW50KSkge1xuICAgIHJldHVybiBjcmVhdGVPclVwZGF0ZUVtcHR5KGRlc3QpO1xuICB9XG4gIGxldCBjb29yZGluYXRlcyA9IFtdO1xuICBpZiAoc3RvcHMgPiAxKSB7XG4gICAgY29uc3Qgd2lkdGggPSBleHRlbnRbMl0gLSBleHRlbnRbMF07XG4gICAgY29uc3QgaGVpZ2h0ID0gZXh0ZW50WzNdIC0gZXh0ZW50WzFdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RvcHM7ICsraSkge1xuICAgICAgY29vcmRpbmF0ZXMucHVzaChcbiAgICAgICAgZXh0ZW50WzBdICsgKHdpZHRoICogaSkgLyBzdG9wcyxcbiAgICAgICAgZXh0ZW50WzFdLFxuICAgICAgICBleHRlbnRbMl0sXG4gICAgICAgIGV4dGVudFsxXSArIChoZWlnaHQgKiBpKSAvIHN0b3BzLFxuICAgICAgICBleHRlbnRbMl0gLSAod2lkdGggKiBpKSAvIHN0b3BzLFxuICAgICAgICBleHRlbnRbM10sXG4gICAgICAgIGV4dGVudFswXSxcbiAgICAgICAgZXh0ZW50WzNdIC0gKGhlaWdodCAqIGkpIC8gc3RvcHMsXG4gICAgICApO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb29yZGluYXRlcyA9IFtcbiAgICAgIGV4dGVudFswXSxcbiAgICAgIGV4dGVudFsxXSxcbiAgICAgIGV4dGVudFsyXSxcbiAgICAgIGV4dGVudFsxXSxcbiAgICAgIGV4dGVudFsyXSxcbiAgICAgIGV4dGVudFszXSxcbiAgICAgIGV4dGVudFswXSxcbiAgICAgIGV4dGVudFszXSxcbiAgICBdO1xuICB9XG4gIHRyYW5zZm9ybUZuKGNvb3JkaW5hdGVzLCBjb29yZGluYXRlcywgMik7XG4gIGNvbnN0IHhzID0gW107XG4gIGNvbnN0IHlzID0gW107XG4gIGZvciAobGV0IGkgPSAwLCBsID0gY29vcmRpbmF0ZXMubGVuZ3RoOyBpIDwgbDsgaSArPSAyKSB7XG4gICAgeHMucHVzaChjb29yZGluYXRlc1tpXSk7XG4gICAgeXMucHVzaChjb29yZGluYXRlc1tpICsgMV0pO1xuICB9XG4gIHJldHVybiBfYm91bmRpbmdFeHRlbnRYWXMoeHMsIHlzLCBkZXN0KTtcbn1cblxuLyoqXG4gKiBNb2RpZmllcyB0aGUgcHJvdmlkZWQgZXh0ZW50IGluLXBsYWNlIHRvIGJlIHdpdGhpbiB0aGUgcmVhbCB3b3JsZFxuICogZXh0ZW50LlxuICpcbiAqIEBwYXJhbSB7RXh0ZW50fSBleHRlbnQgRXh0ZW50LlxuICogQHBhcmFtIHtpbXBvcnQoXCIuL3Byb2ovUHJvamVjdGlvbi5qc1wiKS5kZWZhdWx0fSBwcm9qZWN0aW9uIFByb2plY3Rpb25cbiAqIEByZXR1cm4ge0V4dGVudH0gVGhlIGV4dGVudCB3aXRoaW4gdGhlIHJlYWwgd29ybGQgZXh0ZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gd3JhcFgoZXh0ZW50LCBwcm9qZWN0aW9uKSB7XG4gIGNvbnN0IHByb2plY3Rpb25FeHRlbnQgPSBwcm9qZWN0aW9uLmdldEV4dGVudCgpO1xuICBjb25zdCBjZW50ZXIgPSBnZXRDZW50ZXIoZXh0ZW50KTtcbiAgaWYgKFxuICAgIHByb2plY3Rpb24uY2FuV3JhcFgoKSAmJlxuICAgIChjZW50ZXJbMF0gPCBwcm9qZWN0aW9uRXh0ZW50WzBdIHx8IGNlbnRlclswXSA+PSBwcm9qZWN0aW9uRXh0ZW50WzJdKVxuICApIHtcbiAgICBjb25zdCB3b3JsZFdpZHRoID0gZ2V0V2lkdGgocHJvamVjdGlvbkV4dGVudCk7XG4gICAgY29uc3Qgd29ybGRzQXdheSA9IE1hdGguZmxvb3IoXG4gICAgICAoY2VudGVyWzBdIC0gcHJvamVjdGlvbkV4dGVudFswXSkgLyB3b3JsZFdpZHRoLFxuICAgICk7XG4gICAgY29uc3Qgb2Zmc2V0ID0gd29ybGRzQXdheSAqIHdvcmxkV2lkdGg7XG4gICAgZXh0ZW50WzBdIC09IG9mZnNldDtcbiAgICBleHRlbnRbMl0gLT0gb2Zmc2V0O1xuICB9XG4gIHJldHVybiBleHRlbnQ7XG59XG5cbi8qKlxuICogRml0cyB0aGUgZXh0ZW50IHRvIHRoZSByZWFsIHdvcmxkXG4gKlxuICogSWYgdGhlIGV4dGVudCBkb2VzIG5vdCBjcm9zcyB0aGUgYW50aSBtZXJpZGlhbiwgdGhpcyB3aWxsIHJldHVybiB0aGUgZXh0ZW50IGluIGFuIGFycmF5XG4gKiBJZiB0aGUgZXh0ZW50IGNyb3NzZXMgdGhlIGFudGkgbWVyaWRpYW4sIHRoZSBleHRlbnQgd2lsbCBiZSBzbGljZWQsIHNvIGVhY2ggcGFydCBmaXRzIHdpdGhpbiB0aGVcbiAqIHJlYWwgd29ybGRcbiAqXG4gKlxuICogQHBhcmFtIHtFeHRlbnR9IGV4dGVudCBFeHRlbnQuXG4gKiBAcGFyYW0ge2ltcG9ydChcIi4vcHJvai9Qcm9qZWN0aW9uLmpzXCIpLmRlZmF1bHR9IHByb2plY3Rpb24gUHJvamVjdGlvblxuICogQHJldHVybiB7QXJyYXk8RXh0ZW50Pn0gVGhlIGV4dGVudCB3aXRoaW4gdGhlIHJlYWwgd29ybGQgZXh0ZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gd3JhcEFuZFNsaWNlWChleHRlbnQsIHByb2plY3Rpb24pIHtcbiAgaWYgKHByb2plY3Rpb24uY2FuV3JhcFgoKSkge1xuICAgIGNvbnN0IHByb2plY3Rpb25FeHRlbnQgPSBwcm9qZWN0aW9uLmdldEV4dGVudCgpO1xuXG4gICAgaWYgKCFpc0Zpbml0ZShleHRlbnRbMF0pIHx8ICFpc0Zpbml0ZShleHRlbnRbMl0pKSB7XG4gICAgICByZXR1cm4gW1twcm9qZWN0aW9uRXh0ZW50WzBdLCBleHRlbnRbMV0sIHByb2plY3Rpb25FeHRlbnRbMl0sIGV4dGVudFszXV1dO1xuICAgIH1cblxuICAgIHdyYXBYKGV4dGVudCwgcHJvamVjdGlvbik7XG4gICAgY29uc3Qgd29ybGRXaWR0aCA9IGdldFdpZHRoKHByb2plY3Rpb25FeHRlbnQpO1xuXG4gICAgaWYgKGdldFdpZHRoKGV4dGVudCkgPiB3b3JsZFdpZHRoKSB7XG4gICAgICAvLyB0aGUgZXh0ZW50IHdyYXBzIGFyb3VuZCBvbiBpdHNlbGZcbiAgICAgIHJldHVybiBbW3Byb2plY3Rpb25FeHRlbnRbMF0sIGV4dGVudFsxXSwgcHJvamVjdGlvbkV4dGVudFsyXSwgZXh0ZW50WzNdXV07XG4gICAgfVxuICAgIGlmIChleHRlbnRbMF0gPCBwcm9qZWN0aW9uRXh0ZW50WzBdKSB7XG4gICAgICAvLyB0aGUgZXh0ZW50IGNyb3NzZXMgdGhlIGFudGkgbWVyaWRpYW4sIHNvIGl0IG5lZWRzIHRvIGJlIHNsaWNlZFxuICAgICAgcmV0dXJuIFtcbiAgICAgICAgW2V4dGVudFswXSArIHdvcmxkV2lkdGgsIGV4dGVudFsxXSwgcHJvamVjdGlvbkV4dGVudFsyXSwgZXh0ZW50WzNdXSxcbiAgICAgICAgW3Byb2plY3Rpb25FeHRlbnRbMF0sIGV4dGVudFsxXSwgZXh0ZW50WzJdLCBleHRlbnRbM11dLFxuICAgICAgXTtcbiAgICB9XG4gICAgaWYgKGV4dGVudFsyXSA+IHByb2plY3Rpb25FeHRlbnRbMl0pIHtcbiAgICAgIC8vIHRoZSBleHRlbnQgY3Jvc3NlcyB0aGUgYW50aSBtZXJpZGlhbiwgc28gaXQgbmVlZHMgdG8gYmUgc2xpY2VkXG4gICAgICByZXR1cm4gW1xuICAgICAgICBbZXh0ZW50WzBdLCBleHRlbnRbMV0sIHByb2plY3Rpb25FeHRlbnRbMl0sIGV4dGVudFszXV0sXG4gICAgICAgIFtwcm9qZWN0aW9uRXh0ZW50WzBdLCBleHRlbnRbMV0sIGV4dGVudFsyXSAtIHdvcmxkV2lkdGgsIGV4dGVudFszXV0sXG4gICAgICBdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBbZXh0ZW50XTtcbn1cbiIsIi8qKlxuICogQG1vZHVsZSBvbC9leHRlbnQvUmVsYXRpb25zaGlwXG4gKi9cblxuLyoqXG4gKiBSZWxhdGlvbnNoaXAgdG8gYW4gZXh0ZW50LlxuICogQGVudW0ge251bWJlcn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICBVTktOT1dOOiAwLFxuICBJTlRFUlNFQ1RJTkc6IDEsXG4gIEFCT1ZFOiAyLFxuICBSSUdIVDogNCxcbiAgQkVMT1c6IDgsXG4gIExFRlQ6IDE2LFxufTtcbiIsIi8qKlxuICogQG1vZHVsZSBvbC9mdW5jdGlvbnNcbiAqL1xuXG5pbXBvcnQge2VxdWFscyBhcyBhcnJheUVxdWFsc30gZnJvbSAnLi9hcnJheS5qcyc7XG5cbi8qKlxuICogQWx3YXlzIHJldHVybnMgdHJ1ZS5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBUUlVFKCkge1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBBbHdheXMgcmV0dXJucyBmYWxzZS5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IGZhbHNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gRkFMU0UoKSB7XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBBIHJldXNhYmxlIGZ1bmN0aW9uLCB1c2VkIGUuZy4gYXMgYSBkZWZhdWx0IGZvciBjYWxsYmFja3MuXG4gKlxuICogQHJldHVybiB7dm9pZH0gTm90aGluZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFZPSUQoKSB7fVxuXG4vKipcbiAqIFdyYXAgYSBmdW5jdGlvbiBpbiBhbm90aGVyIGZ1bmN0aW9uIHRoYXQgcmVtZW1iZXJzIHRoZSBsYXN0IHJldHVybi4gIElmIHRoZVxuICogcmV0dXJuZWQgZnVuY3Rpb24gaXMgY2FsbGVkIHR3aWNlIGluIGEgcm93IHdpdGggdGhlIHNhbWUgYXJndW1lbnRzIGFuZCB0aGUgc2FtZVxuICogdGhpcyBvYmplY3QsIGl0IHdpbGwgcmV0dXJuIHRoZSB2YWx1ZSBmcm9tIHRoZSBmaXJzdCBjYWxsIGluIHRoZSBzZWNvbmQgY2FsbC5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKC4uLmFueSk6IFJldHVyblR5cGV9IGZuIFRoZSBmdW5jdGlvbiB0byBtZW1vaXplLlxuICogQHJldHVybiB7ZnVuY3Rpb24oLi4uYW55KTogUmV0dXJuVHlwZX0gVGhlIG1lbW9pemVkIGZ1bmN0aW9uLlxuICogQHRlbXBsYXRlIFJldHVyblR5cGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lbW9pemVPbmUoZm4pIHtcbiAgbGV0IGNhbGxlZCA9IGZhbHNlO1xuXG4gIC8qKiBAdHlwZSB7UmV0dXJuVHlwZX0gKi9cbiAgbGV0IGxhc3RSZXN1bHQ7XG5cbiAgLyoqIEB0eXBlIHtBcnJheTxhbnk+fSAqL1xuICBsZXQgbGFzdEFyZ3M7XG5cbiAgbGV0IGxhc3RUaGlzO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgbmV4dEFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgIGlmICghY2FsbGVkIHx8IHRoaXMgIT09IGxhc3RUaGlzIHx8ICFhcnJheUVxdWFscyhuZXh0QXJncywgbGFzdEFyZ3MpKSB7XG4gICAgICBjYWxsZWQgPSB0cnVlO1xuICAgICAgbGFzdFRoaXMgPSB0aGlzO1xuICAgICAgbGFzdEFyZ3MgPSBuZXh0QXJncztcbiAgICAgIGxhc3RSZXN1bHQgPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICByZXR1cm4gbGFzdFJlc3VsdDtcbiAgfTtcbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHtmdW5jdGlvbigpOiAoVCB8IFByb21pc2U8VD4pfSBnZXR0ZXIgQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSB2YWx1ZSBvciBhIHByb21pc2UgZm9yIGEgdmFsdWUuXG4gKiBAcmV0dXJuIHtQcm9taXNlPFQ+fSBBIHByb21pc2UgZm9yIHRoZSB2YWx1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvUHJvbWlzZShnZXR0ZXIpIHtcbiAgZnVuY3Rpb24gcHJvbWlzZUdldHRlcigpIHtcbiAgICBsZXQgdmFsdWU7XG4gICAgdHJ5IHtcbiAgICAgIHZhbHVlID0gZ2V0dGVyKCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICB9XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKTtcbiAgfVxuICByZXR1cm4gcHJvbWlzZUdldHRlcigpO1xufVxuIiwiLyoqXG4gKiBAbW9kdWxlIG9sL2dlb20vR2VvbWV0cnlcbiAqL1xuaW1wb3J0IEJhc2VPYmplY3QgZnJvbSAnLi4vT2JqZWN0LmpzJztcbmltcG9ydCB7YWJzdHJhY3R9IGZyb20gJy4uL3V0aWwuanMnO1xuaW1wb3J0IHtcbiAgY29tcG9zZSBhcyBjb21wb3NlVHJhbnNmb3JtLFxuICBjcmVhdGUgYXMgY3JlYXRlVHJhbnNmb3JtLFxufSBmcm9tICcuLi90cmFuc2Zvcm0uanMnO1xuaW1wb3J0IHtcbiAgY3JlYXRlRW1wdHksXG4gIGNyZWF0ZU9yVXBkYXRlRW1wdHksXG4gIGdldEhlaWdodCxcbiAgcmV0dXJuT3JVcGRhdGUsXG59IGZyb20gJy4uL2V4dGVudC5qcyc7XG5pbXBvcnQge2dldCBhcyBnZXRQcm9qZWN0aW9uLCBnZXRUcmFuc2Zvcm19IGZyb20gJy4uL3Byb2ouanMnO1xuaW1wb3J0IHttZW1vaXplT25lfSBmcm9tICcuLi9mdW5jdGlvbnMuanMnO1xuaW1wb3J0IHt0cmFuc2Zvcm0yRH0gZnJvbSAnLi9mbGF0L3RyYW5zZm9ybS5qcyc7XG5cbi8qKlxuICogQHR5cGVkZWYgeydYWScgfCAnWFlaJyB8ICdYWU0nIHwgJ1hZWk0nfSBHZW9tZXRyeUxheW91dFxuICogVGhlIGNvb3JkaW5hdGUgbGF5b3V0IGZvciBnZW9tZXRyaWVzLCBpbmRpY2F0aW5nIHdoZXRoZXIgYSAzcmQgb3IgNHRoIHogKCdaJylcbiAqIG9yIG1lYXN1cmUgKCdNJykgY29vcmRpbmF0ZSBpcyBhdmFpbGFibGUuXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7J1BvaW50JyB8ICdMaW5lU3RyaW5nJyB8ICdMaW5lYXJSaW5nJyB8ICdQb2x5Z29uJyB8ICdNdWx0aVBvaW50JyB8ICdNdWx0aUxpbmVTdHJpbmcnIHwgJ011bHRpUG9seWdvbicgfCAnR2VvbWV0cnlDb2xsZWN0aW9uJyB8ICdDaXJjbGUnfSBUeXBlXG4gKiBUaGUgZ2VvbWV0cnkgdHlwZS4gIE9uZSBvZiBgJ1BvaW50J2AsIGAnTGluZVN0cmluZydgLCBgJ0xpbmVhclJpbmcnYCxcbiAqIGAnUG9seWdvbidgLCBgJ011bHRpUG9pbnQnYCwgYCdNdWx0aUxpbmVTdHJpbmcnYCwgYCdNdWx0aVBvbHlnb24nYCxcbiAqIGAnR2VvbWV0cnlDb2xsZWN0aW9uJ2AsIG9yIGAnQ2lyY2xlJ2AuXG4gKi9cblxuLyoqXG4gKiBAdHlwZSB7aW1wb3J0KFwiLi4vdHJhbnNmb3JtLmpzXCIpLlRyYW5zZm9ybX1cbiAqL1xuY29uc3QgdG1wVHJhbnNmb3JtID0gY3JlYXRlVHJhbnNmb3JtKCk7XG5cbi8qKlxuICogQGNsYXNzZGVzY1xuICogQWJzdHJhY3QgYmFzZSBjbGFzczsgbm9ybWFsbHkgb25seSB1c2VkIGZvciBjcmVhdGluZyBzdWJjbGFzc2VzIGFuZCBub3RcbiAqIGluc3RhbnRpYXRlZCBpbiBhcHBzLlxuICogQmFzZSBjbGFzcyBmb3IgdmVjdG9yIGdlb21ldHJpZXMuXG4gKlxuICogVG8gZ2V0IG5vdGlmaWVkIG9mIGNoYW5nZXMgdG8gdGhlIGdlb21ldHJ5LCByZWdpc3RlciBhIGxpc3RlbmVyIGZvciB0aGVcbiAqIGdlbmVyaWMgYGNoYW5nZWAgZXZlbnQgb24geW91ciBnZW9tZXRyeSBpbnN0YW5jZS5cbiAqXG4gKiBAYWJzdHJhY3RcbiAqIEBhcGlcbiAqL1xuY2xhc3MgR2VvbWV0cnkgZXh0ZW5kcyBCYXNlT2JqZWN0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHR5cGUge2ltcG9ydChcIi4uL2V4dGVudC5qc1wiKS5FeHRlbnR9XG4gICAgICovXG4gICAgdGhpcy5leHRlbnRfID0gY3JlYXRlRW1wdHkoKTtcblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLmV4dGVudFJldmlzaW9uXyA9IC0xO1xuXG4gICAgLyoqXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5zaW1wbGlmaWVkR2VvbWV0cnlNYXhNaW5TcXVhcmVkVG9sZXJhbmNlID0gMDtcblxuICAgIC8qKlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuc2ltcGxpZmllZEdlb21ldHJ5UmV2aXNpb24gPSAwO1xuXG4gICAgLyoqXG4gICAgICogR2V0IGEgdHJhbnNmb3JtZWQgYW5kIHNpbXBsaWZpZWQgdmVyc2lvbiBvZiB0aGUgZ2VvbWV0cnkuXG4gICAgICogQGFic3RyYWN0XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJldmlzaW9uIFRoZSBnZW9tZXRyeSByZXZpc2lvbi5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc3F1YXJlZFRvbGVyYW5jZSBTcXVhcmVkIHRvbGVyYW5jZS5cbiAgICAgKiBAcGFyYW0ge2ltcG9ydChcIi4uL3Byb2ouanNcIikuVHJhbnNmb3JtRnVuY3Rpb259IFt0cmFuc2Zvcm1dIE9wdGlvbmFsIHRyYW5zZm9ybSBmdW5jdGlvbi5cbiAgICAgKiBAcmV0dXJuIHtHZW9tZXRyeX0gU2ltcGxpZmllZCBnZW9tZXRyeS5cbiAgICAgKi9cbiAgICB0aGlzLnNpbXBsaWZ5VHJhbnNmb3JtZWRJbnRlcm5hbCA9IG1lbW9pemVPbmUoXG4gICAgICAocmV2aXNpb24sIHNxdWFyZWRUb2xlcmFuY2UsIHRyYW5zZm9ybSkgPT4ge1xuICAgICAgICBpZiAoIXRyYW5zZm9ybSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmdldFNpbXBsaWZpZWRHZW9tZXRyeShzcXVhcmVkVG9sZXJhbmNlKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjbG9uZSA9IHRoaXMuY2xvbmUoKTtcbiAgICAgICAgY2xvbmUuYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKTtcbiAgICAgICAgcmV0dXJuIGNsb25lLmdldFNpbXBsaWZpZWRHZW9tZXRyeShzcXVhcmVkVG9sZXJhbmNlKTtcbiAgICAgIH0sXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSB0cmFuc2Zvcm1lZCBhbmQgc2ltcGxpZmllZCB2ZXJzaW9uIG9mIHRoZSBnZW9tZXRyeS5cbiAgICogQGFic3RyYWN0XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzcXVhcmVkVG9sZXJhbmNlIFNxdWFyZWQgdG9sZXJhbmNlLlxuICAgKiBAcGFyYW0ge2ltcG9ydChcIi4uL3Byb2ouanNcIikuVHJhbnNmb3JtRnVuY3Rpb259IFt0cmFuc2Zvcm1dIE9wdGlvbmFsIHRyYW5zZm9ybSBmdW5jdGlvbi5cbiAgICogQHJldHVybiB7R2VvbWV0cnl9IFNpbXBsaWZpZWQgZ2VvbWV0cnkuXG4gICAqL1xuICBzaW1wbGlmeVRyYW5zZm9ybWVkKHNxdWFyZWRUb2xlcmFuY2UsIHRyYW5zZm9ybSkge1xuICAgIHJldHVybiB0aGlzLnNpbXBsaWZ5VHJhbnNmb3JtZWRJbnRlcm5hbChcbiAgICAgIHRoaXMuZ2V0UmV2aXNpb24oKSxcbiAgICAgIHNxdWFyZWRUb2xlcmFuY2UsXG4gICAgICB0cmFuc2Zvcm0sXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIGEgY29tcGxldGUgY29weSBvZiB0aGUgZ2VvbWV0cnkuXG4gICAqIEBhYnN0cmFjdFxuICAgKiBAcmV0dXJuIHshR2VvbWV0cnl9IENsb25lLlxuICAgKi9cbiAgY2xvbmUoKSB7XG4gICAgcmV0dXJuIGFic3RyYWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQGFic3RyYWN0XG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4IFguXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5IFkuXG4gICAqIEBwYXJhbSB7aW1wb3J0KFwiLi4vY29vcmRpbmF0ZS5qc1wiKS5Db29yZGluYXRlfSBjbG9zZXN0UG9pbnQgQ2xvc2VzdCBwb2ludC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IG1pblNxdWFyZWREaXN0YW5jZSBNaW5pbXVtIHNxdWFyZWQgZGlzdGFuY2UuXG4gICAqIEByZXR1cm4ge251bWJlcn0gTWluaW11bSBzcXVhcmVkIGRpc3RhbmNlLlxuICAgKi9cbiAgY2xvc2VzdFBvaW50WFkoeCwgeSwgY2xvc2VzdFBvaW50LCBtaW5TcXVhcmVkRGlzdGFuY2UpIHtcbiAgICByZXR1cm4gYWJzdHJhY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0geCBYLlxuICAgKiBAcGFyYW0ge251bWJlcn0geSBZLlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBDb250YWlucyAoeCwgeSkuXG4gICAqL1xuICBjb250YWluc1hZKHgsIHkpIHtcbiAgICBjb25zdCBjb29yZCA9IHRoaXMuZ2V0Q2xvc2VzdFBvaW50KFt4LCB5XSk7XG4gICAgcmV0dXJuIGNvb3JkWzBdID09PSB4ICYmIGNvb3JkWzFdID09PSB5O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgY2xvc2VzdCBwb2ludCBvZiB0aGUgZ2VvbWV0cnkgdG8gdGhlIHBhc3NlZCBwb2ludCBhc1xuICAgKiB7QGxpbmsgbW9kdWxlOm9sL2Nvb3JkaW5hdGV+Q29vcmRpbmF0ZSBjb29yZGluYXRlfS5cbiAgICogQHBhcmFtIHtpbXBvcnQoXCIuLi9jb29yZGluYXRlLmpzXCIpLkNvb3JkaW5hdGV9IHBvaW50IFBvaW50LlxuICAgKiBAcGFyYW0ge2ltcG9ydChcIi4uL2Nvb3JkaW5hdGUuanNcIikuQ29vcmRpbmF0ZX0gW2Nsb3Nlc3RQb2ludF0gQ2xvc2VzdCBwb2ludC5cbiAgICogQHJldHVybiB7aW1wb3J0KFwiLi4vY29vcmRpbmF0ZS5qc1wiKS5Db29yZGluYXRlfSBDbG9zZXN0IHBvaW50LlxuICAgKiBAYXBpXG4gICAqL1xuICBnZXRDbG9zZXN0UG9pbnQocG9pbnQsIGNsb3Nlc3RQb2ludCkge1xuICAgIGNsb3Nlc3RQb2ludCA9IGNsb3Nlc3RQb2ludCA/IGNsb3Nlc3RQb2ludCA6IFtOYU4sIE5hTl07XG4gICAgdGhpcy5jbG9zZXN0UG9pbnRYWShwb2ludFswXSwgcG9pbnRbMV0sIGNsb3Nlc3RQb2ludCwgSW5maW5pdHkpO1xuICAgIHJldHVybiBjbG9zZXN0UG9pbnQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoaXMgZ2VvbWV0cnkgaW5jbHVkZXMgdGhlIHNwZWNpZmllZCBjb29yZGluYXRlLiBJZiB0aGVcbiAgICogY29vcmRpbmF0ZSBpcyBvbiB0aGUgYm91bmRhcnkgb2YgdGhlIGdlb21ldHJ5LCByZXR1cm5zIGZhbHNlLlxuICAgKiBAcGFyYW0ge2ltcG9ydChcIi4uL2Nvb3JkaW5hdGUuanNcIikuQ29vcmRpbmF0ZX0gY29vcmRpbmF0ZSBDb29yZGluYXRlLlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBDb250YWlucyBjb29yZGluYXRlLlxuICAgKiBAYXBpXG4gICAqL1xuICBpbnRlcnNlY3RzQ29vcmRpbmF0ZShjb29yZGluYXRlKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGFpbnNYWShjb29yZGluYXRlWzBdLCBjb29yZGluYXRlWzFdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAYWJzdHJhY3RcbiAgICogQHBhcmFtIHtpbXBvcnQoXCIuLi9leHRlbnQuanNcIikuRXh0ZW50fSBleHRlbnQgRXh0ZW50LlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEByZXR1cm4ge2ltcG9ydChcIi4uL2V4dGVudC5qc1wiKS5FeHRlbnR9IGV4dGVudCBFeHRlbnQuXG4gICAqL1xuICBjb21wdXRlRXh0ZW50KGV4dGVudCkge1xuICAgIHJldHVybiBhYnN0cmFjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgZXh0ZW50IG9mIHRoZSBnZW9tZXRyeS5cbiAgICogQHBhcmFtIHtpbXBvcnQoXCIuLi9leHRlbnQuanNcIikuRXh0ZW50fSBbZXh0ZW50XSBFeHRlbnQuXG4gICAqIEByZXR1cm4ge2ltcG9ydChcIi4uL2V4dGVudC5qc1wiKS5FeHRlbnR9IGV4dGVudCBFeHRlbnQuXG4gICAqIEBhcGlcbiAgICovXG4gIGdldEV4dGVudChleHRlbnQpIHtcbiAgICBpZiAodGhpcy5leHRlbnRSZXZpc2lvbl8gIT0gdGhpcy5nZXRSZXZpc2lvbigpKSB7XG4gICAgICBjb25zdCBleHRlbnQgPSB0aGlzLmNvbXB1dGVFeHRlbnQodGhpcy5leHRlbnRfKTtcbiAgICAgIGlmIChpc05hTihleHRlbnRbMF0pIHx8IGlzTmFOKGV4dGVudFsxXSkpIHtcbiAgICAgICAgY3JlYXRlT3JVcGRhdGVFbXB0eShleHRlbnQpO1xuICAgICAgfVxuICAgICAgdGhpcy5leHRlbnRSZXZpc2lvbl8gPSB0aGlzLmdldFJldmlzaW9uKCk7XG4gICAgfVxuICAgIHJldHVybiByZXR1cm5PclVwZGF0ZSh0aGlzLmV4dGVudF8sIGV4dGVudCk7XG4gIH1cblxuICAvKipcbiAgICogUm90YXRlIHRoZSBnZW9tZXRyeSBhcm91bmQgYSBnaXZlbiBjb29yZGluYXRlLiBUaGlzIG1vZGlmaWVzIHRoZSBnZW9tZXRyeVxuICAgKiBjb29yZGluYXRlcyBpbiBwbGFjZS5cbiAgICogQGFic3RyYWN0XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhbmdsZSBSb3RhdGlvbiBhbmdsZSBpbiByYWRpYW5zLlxuICAgKiBAcGFyYW0ge2ltcG9ydChcIi4uL2Nvb3JkaW5hdGUuanNcIikuQ29vcmRpbmF0ZX0gYW5jaG9yIFRoZSByb3RhdGlvbiBjZW50ZXIuXG4gICAqIEBhcGlcbiAgICovXG4gIHJvdGF0ZShhbmdsZSwgYW5jaG9yKSB7XG4gICAgYWJzdHJhY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTY2FsZSB0aGUgZ2VvbWV0cnkgKHdpdGggYW4gb3B0aW9uYWwgb3JpZ2luKS4gIFRoaXMgbW9kaWZpZXMgdGhlIGdlb21ldHJ5XG4gICAqIGNvb3JkaW5hdGVzIGluIHBsYWNlLlxuICAgKiBAYWJzdHJhY3RcbiAgICogQHBhcmFtIHtudW1iZXJ9IHN4IFRoZSBzY2FsaW5nIGZhY3RvciBpbiB0aGUgeC1kaXJlY3Rpb24uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbc3ldIFRoZSBzY2FsaW5nIGZhY3RvciBpbiB0aGUgeS1kaXJlY3Rpb24gKGRlZmF1bHRzIHRvIHN4KS5cbiAgICogQHBhcmFtIHtpbXBvcnQoXCIuLi9jb29yZGluYXRlLmpzXCIpLkNvb3JkaW5hdGV9IFthbmNob3JdIFRoZSBzY2FsZSBvcmlnaW4gKGRlZmF1bHRzIHRvIHRoZSBjZW50ZXJcbiAgICogICAgIG9mIHRoZSBnZW9tZXRyeSBleHRlbnQpLlxuICAgKiBAYXBpXG4gICAqL1xuICBzY2FsZShzeCwgc3ksIGFuY2hvcikge1xuICAgIGFic3RyYWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgc2ltcGxpZmllZCB2ZXJzaW9uIG9mIHRoaXMgZ2VvbWV0cnkuICBGb3IgbGluZXN0cmluZ3MsIHRoaXMgdXNlc1xuICAgKiB0aGUgW0RvdWdsYXMgUGV1Y2tlcl0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvUmFtZXItRG91Z2xhcy1QZXVja2VyX2FsZ29yaXRobSlcbiAgICogYWxnb3JpdGhtLiAgRm9yIHBvbHlnb25zLCBhIHF1YW50aXphdGlvbi1iYXNlZFxuICAgKiBzaW1wbGlmaWNhdGlvbiBpcyB1c2VkIHRvIHByZXNlcnZlIHRvcG9sb2d5LlxuICAgKiBAcGFyYW0ge251bWJlcn0gdG9sZXJhbmNlIFRoZSB0b2xlcmFuY2UgZGlzdGFuY2UgZm9yIHNpbXBsaWZpY2F0aW9uLlxuICAgKiBAcmV0dXJuIHtHZW9tZXRyeX0gQSBuZXcsIHNpbXBsaWZpZWQgdmVyc2lvbiBvZiB0aGUgb3JpZ2luYWwgZ2VvbWV0cnkuXG4gICAqIEBhcGlcbiAgICovXG4gIHNpbXBsaWZ5KHRvbGVyYW5jZSkge1xuICAgIHJldHVybiB0aGlzLmdldFNpbXBsaWZpZWRHZW9tZXRyeSh0b2xlcmFuY2UgKiB0b2xlcmFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIHNpbXBsaWZpZWQgdmVyc2lvbiBvZiB0aGlzIGdlb21ldHJ5IHVzaW5nIHRoZSBEb3VnbGFzIFBldWNrZXJcbiAgICogYWxnb3JpdGhtLlxuICAgKiBTZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvUmFtZXItRG91Z2xhcy1QZXVja2VyX2FsZ29yaXRobS5cbiAgICogQGFic3RyYWN0XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzcXVhcmVkVG9sZXJhbmNlIFNxdWFyZWQgdG9sZXJhbmNlLlxuICAgKiBAcmV0dXJuIHtHZW9tZXRyeX0gU2ltcGxpZmllZCBnZW9tZXRyeS5cbiAgICovXG4gIGdldFNpbXBsaWZpZWRHZW9tZXRyeShzcXVhcmVkVG9sZXJhbmNlKSB7XG4gICAgcmV0dXJuIGFic3RyYWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB0eXBlIG9mIHRoaXMgZ2VvbWV0cnkuXG4gICAqIEBhYnN0cmFjdFxuICAgKiBAcmV0dXJuIHtUeXBlfSBHZW9tZXRyeSB0eXBlLlxuICAgKi9cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gYWJzdHJhY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBseSBhIHRyYW5zZm9ybSBmdW5jdGlvbiB0byB0aGUgY29vcmRpbmF0ZXMgb2YgdGhlIGdlb21ldHJ5LlxuICAgKiBUaGUgZ2VvbWV0cnkgaXMgbW9kaWZpZWQgaW4gcGxhY2UuXG4gICAqIElmIHlvdSBkbyBub3Qgd2FudCB0aGUgZ2VvbWV0cnkgbW9kaWZpZWQgaW4gcGxhY2UsIGZpcnN0IGBjbG9uZSgpYCBpdCBhbmRcbiAgICogdGhlbiB1c2UgdGhpcyBmdW5jdGlvbiBvbiB0aGUgY2xvbmUuXG4gICAqIEBhYnN0cmFjdFxuICAgKiBAcGFyYW0ge2ltcG9ydChcIi4uL3Byb2ouanNcIikuVHJhbnNmb3JtRnVuY3Rpb259IHRyYW5zZm9ybUZuIFRyYW5zZm9ybSBmdW5jdGlvbi5cbiAgICogQ2FsbGVkIHdpdGggYSBmbGF0IGFycmF5IG9mIGdlb21ldHJ5IGNvb3JkaW5hdGVzLlxuICAgKi9cbiAgYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtRm4pIHtcbiAgICBhYnN0cmFjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRlc3QgaWYgdGhlIGdlb21ldHJ5IGFuZCB0aGUgcGFzc2VkIGV4dGVudCBpbnRlcnNlY3QuXG4gICAqIEBhYnN0cmFjdFxuICAgKiBAcGFyYW0ge2ltcG9ydChcIi4uL2V4dGVudC5qc1wiKS5FeHRlbnR9IGV4dGVudCBFeHRlbnQuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgZ2VvbWV0cnkgYW5kIHRoZSBleHRlbnQgaW50ZXJzZWN0LlxuICAgKi9cbiAgaW50ZXJzZWN0c0V4dGVudChleHRlbnQpIHtcbiAgICByZXR1cm4gYWJzdHJhY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2xhdGUgdGhlIGdlb21ldHJ5LiAgVGhpcyBtb2RpZmllcyB0aGUgZ2VvbWV0cnkgY29vcmRpbmF0ZXMgaW4gcGxhY2UuICBJZlxuICAgKiBpbnN0ZWFkIHlvdSB3YW50IGEgbmV3IGdlb21ldHJ5LCBmaXJzdCBgY2xvbmUoKWAgdGhpcyBnZW9tZXRyeS5cbiAgICogQGFic3RyYWN0XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkZWx0YVggRGVsdGEgWC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGRlbHRhWSBEZWx0YSBZLlxuICAgKiBAYXBpXG4gICAqL1xuICB0cmFuc2xhdGUoZGVsdGFYLCBkZWx0YVkpIHtcbiAgICBhYnN0cmFjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybSBlYWNoIGNvb3JkaW5hdGUgb2YgdGhlIGdlb21ldHJ5IGZyb20gb25lIGNvb3JkaW5hdGUgcmVmZXJlbmNlXG4gICAqIHN5c3RlbSB0byBhbm90aGVyLiBUaGUgZ2VvbWV0cnkgaXMgbW9kaWZpZWQgaW4gcGxhY2UuXG4gICAqIEZvciBleGFtcGxlLCBhIGxpbmUgd2lsbCBiZSB0cmFuc2Zvcm1lZCB0byBhIGxpbmUgYW5kIGEgY2lyY2xlIHRvIGEgY2lyY2xlLlxuICAgKiBJZiB5b3UgZG8gbm90IHdhbnQgdGhlIGdlb21ldHJ5IG1vZGlmaWVkIGluIHBsYWNlLCBmaXJzdCBgY2xvbmUoKWAgaXQgYW5kXG4gICAqIHRoZW4gdXNlIHRoaXMgZnVuY3Rpb24gb24gdGhlIGNsb25lLlxuICAgKlxuICAgKiBAcGFyYW0ge2ltcG9ydChcIi4uL3Byb2ouanNcIikuUHJvamVjdGlvbkxpa2V9IHNvdXJjZSBUaGUgY3VycmVudCBwcm9qZWN0aW9uLiAgQ2FuIGJlIGFcbiAgICogICAgIHN0cmluZyBpZGVudGlmaWVyIG9yIGEge0BsaW5rIG1vZHVsZTpvbC9wcm9qL1Byb2plY3Rpb25+UHJvamVjdGlvbn0gb2JqZWN0LlxuICAgKiBAcGFyYW0ge2ltcG9ydChcIi4uL3Byb2ouanNcIikuUHJvamVjdGlvbkxpa2V9IGRlc3RpbmF0aW9uIFRoZSBkZXNpcmVkIHByb2plY3Rpb24uICBDYW4gYmUgYVxuICAgKiAgICAgc3RyaW5nIGlkZW50aWZpZXIgb3IgYSB7QGxpbmsgbW9kdWxlOm9sL3Byb2ovUHJvamVjdGlvbn5Qcm9qZWN0aW9ufSBvYmplY3QuXG4gICAqIEByZXR1cm4ge3RoaXN9IFRoaXMgZ2VvbWV0cnkuICBOb3RlIHRoYXQgb3JpZ2luYWwgZ2VvbWV0cnkgaXNcbiAgICogICAgIG1vZGlmaWVkIGluIHBsYWNlLlxuICAgKiBAYXBpXG4gICAqL1xuICB0cmFuc2Zvcm0oc291cmNlLCBkZXN0aW5hdGlvbikge1xuICAgIC8qKiBAdHlwZSB7aW1wb3J0KFwiLi4vcHJvai9Qcm9qZWN0aW9uLmpzXCIpLmRlZmF1bHR9ICovXG4gICAgY29uc3Qgc291cmNlUHJvaiA9IGdldFByb2plY3Rpb24oc291cmNlKTtcbiAgICBjb25zdCB0cmFuc2Zvcm1GbiA9XG4gICAgICBzb3VyY2VQcm9qLmdldFVuaXRzKCkgPT0gJ3RpbGUtcGl4ZWxzJ1xuICAgICAgICA/IGZ1bmN0aW9uIChpbkNvb3JkaW5hdGVzLCBvdXRDb29yZGluYXRlcywgc3RyaWRlKSB7XG4gICAgICAgICAgICBjb25zdCBwaXhlbEV4dGVudCA9IHNvdXJjZVByb2ouZ2V0RXh0ZW50KCk7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ZWRFeHRlbnQgPSBzb3VyY2VQcm9qLmdldFdvcmxkRXh0ZW50KCk7XG4gICAgICAgICAgICBjb25zdCBzY2FsZSA9IGdldEhlaWdodChwcm9qZWN0ZWRFeHRlbnQpIC8gZ2V0SGVpZ2h0KHBpeGVsRXh0ZW50KTtcbiAgICAgICAgICAgIGNvbXBvc2VUcmFuc2Zvcm0oXG4gICAgICAgICAgICAgIHRtcFRyYW5zZm9ybSxcbiAgICAgICAgICAgICAgcHJvamVjdGVkRXh0ZW50WzBdLFxuICAgICAgICAgICAgICBwcm9qZWN0ZWRFeHRlbnRbM10sXG4gICAgICAgICAgICAgIHNjYWxlLFxuICAgICAgICAgICAgICAtc2NhbGUsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdHJhbnNmb3JtMkQoXG4gICAgICAgICAgICAgIGluQ29vcmRpbmF0ZXMsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIGluQ29vcmRpbmF0ZXMubGVuZ3RoLFxuICAgICAgICAgICAgICBzdHJpZGUsXG4gICAgICAgICAgICAgIHRtcFRyYW5zZm9ybSxcbiAgICAgICAgICAgICAgb3V0Q29vcmRpbmF0ZXMsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuIGdldFRyYW5zZm9ybShzb3VyY2VQcm9qLCBkZXN0aW5hdGlvbikoXG4gICAgICAgICAgICAgIGluQ29vcmRpbmF0ZXMsXG4gICAgICAgICAgICAgIG91dENvb3JkaW5hdGVzLFxuICAgICAgICAgICAgICBzdHJpZGUsXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgOiBnZXRUcmFuc2Zvcm0oc291cmNlUHJvaiwgZGVzdGluYXRpb24pO1xuICAgIHRoaXMuYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtRm4pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdlb21ldHJ5O1xuIiwiLyoqXG4gKiBAbW9kdWxlIG9sL2dlb20vTGluZVN0cmluZ1xuICovXG5pbXBvcnQgU2ltcGxlR2VvbWV0cnkgZnJvbSAnLi9TaW1wbGVHZW9tZXRyeS5qcyc7XG5pbXBvcnQge2Fzc2lnbkNsb3Nlc3RQb2ludCwgbWF4U3F1YXJlZERlbHRhfSBmcm9tICcuL2ZsYXQvY2xvc2VzdC5qcyc7XG5pbXBvcnQge2Nsb3Nlc3RTcXVhcmVkRGlzdGFuY2VYWX0gZnJvbSAnLi4vZXh0ZW50LmpzJztcbmltcG9ydCB7ZGVmbGF0ZUNvb3JkaW5hdGVzfSBmcm9tICcuL2ZsYXQvZGVmbGF0ZS5qcyc7XG5pbXBvcnQge2RvdWdsYXNQZXVja2VyfSBmcm9tICcuL2ZsYXQvc2ltcGxpZnkuanMnO1xuaW1wb3J0IHtleHRlbmR9IGZyb20gJy4uL2FycmF5LmpzJztcbmltcG9ydCB7Zm9yRWFjaCBhcyBmb3JFYWNoU2VnbWVudH0gZnJvbSAnLi9mbGF0L3NlZ21lbnRzLmpzJztcbmltcG9ydCB7aW5mbGF0ZUNvb3JkaW5hdGVzfSBmcm9tICcuL2ZsYXQvaW5mbGF0ZS5qcyc7XG5pbXBvcnQge2ludGVycG9sYXRlUG9pbnQsIGxpbmVTdHJpbmdDb29yZGluYXRlQXRNfSBmcm9tICcuL2ZsYXQvaW50ZXJwb2xhdGUuanMnO1xuaW1wb3J0IHtpbnRlcnNlY3RzTGluZVN0cmluZ30gZnJvbSAnLi9mbGF0L2ludGVyc2VjdHNleHRlbnQuanMnO1xuaW1wb3J0IHtsaW5lU3RyaW5nTGVuZ3RofSBmcm9tICcuL2ZsYXQvbGVuZ3RoLmpzJztcblxuLyoqXG4gKiBAY2xhc3NkZXNjXG4gKiBMaW5lc3RyaW5nIGdlb21ldHJ5LlxuICpcbiAqIEBhcGlcbiAqL1xuY2xhc3MgTGluZVN0cmluZyBleHRlbmRzIFNpbXBsZUdlb21ldHJ5IHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7QXJyYXk8aW1wb3J0KFwiLi4vY29vcmRpbmF0ZS5qc1wiKS5Db29yZGluYXRlPnxBcnJheTxudW1iZXI+fSBjb29yZGluYXRlcyBDb29yZGluYXRlcy5cbiAgICogICAgIEZvciBpbnRlcm5hbCB1c2UsIGZsYXQgY29vcmRpbmF0ZXMgaW4gY29tYmluYXRpb24gd2l0aCBgbGF5b3V0YCBhcmUgYWxzbyBhY2NlcHRlZC5cbiAgICogQHBhcmFtIHtpbXBvcnQoXCIuL0dlb21ldHJ5LmpzXCIpLkdlb21ldHJ5TGF5b3V0fSBbbGF5b3V0XSBMYXlvdXQuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb29yZGluYXRlcywgbGF5b3V0KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHR5cGUge2ltcG9ydChcIi4uL2Nvb3JkaW5hdGUuanNcIikuQ29vcmRpbmF0ZXxudWxsfVxuICAgICAqL1xuICAgIHRoaXMuZmxhdE1pZHBvaW50XyA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5mbGF0TWlkcG9pbnRSZXZpc2lvbl8gPSAtMTtcblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLm1heERlbHRhXyA9IC0xO1xuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMubWF4RGVsdGFSZXZpc2lvbl8gPSAtMTtcblxuICAgIGlmIChsYXlvdXQgIT09IHVuZGVmaW5lZCAmJiAhQXJyYXkuaXNBcnJheShjb29yZGluYXRlc1swXSkpIHtcbiAgICAgIHRoaXMuc2V0RmxhdENvb3JkaW5hdGVzKFxuICAgICAgICBsYXlvdXQsXG4gICAgICAgIC8qKiBAdHlwZSB7QXJyYXk8bnVtYmVyPn0gKi8gKGNvb3JkaW5hdGVzKSxcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0Q29vcmRpbmF0ZXMoXG4gICAgICAgIC8qKiBAdHlwZSB7QXJyYXk8aW1wb3J0KFwiLi4vY29vcmRpbmF0ZS5qc1wiKS5Db29yZGluYXRlPn0gKi8gKFxuICAgICAgICAgIGNvb3JkaW5hdGVzXG4gICAgICAgICksXG4gICAgICAgIGxheW91dCxcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFwcGVuZCB0aGUgcGFzc2VkIGNvb3JkaW5hdGUgdG8gdGhlIGNvb3JkaW5hdGVzIG9mIHRoZSBsaW5lc3RyaW5nLlxuICAgKiBAcGFyYW0ge2ltcG9ydChcIi4uL2Nvb3JkaW5hdGUuanNcIikuQ29vcmRpbmF0ZX0gY29vcmRpbmF0ZSBDb29yZGluYXRlLlxuICAgKiBAYXBpXG4gICAqL1xuICBhcHBlbmRDb29yZGluYXRlKGNvb3JkaW5hdGUpIHtcbiAgICBleHRlbmQodGhpcy5mbGF0Q29vcmRpbmF0ZXMsIGNvb3JkaW5hdGUpO1xuICAgIHRoaXMuY2hhbmdlZCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgYSBjb21wbGV0ZSBjb3B5IG9mIHRoZSBnZW9tZXRyeS5cbiAgICogQHJldHVybiB7IUxpbmVTdHJpbmd9IENsb25lLlxuICAgKiBAYXBpXG4gICAqL1xuICBjbG9uZSgpIHtcbiAgICBjb25zdCBsaW5lU3RyaW5nID0gbmV3IExpbmVTdHJpbmcoXG4gICAgICB0aGlzLmZsYXRDb29yZGluYXRlcy5zbGljZSgpLFxuICAgICAgdGhpcy5sYXlvdXQsXG4gICAgKTtcbiAgICBsaW5lU3RyaW5nLmFwcGx5UHJvcGVydGllcyh0aGlzKTtcbiAgICByZXR1cm4gbGluZVN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0geCBYLlxuICAgKiBAcGFyYW0ge251bWJlcn0geSBZLlxuICAgKiBAcGFyYW0ge2ltcG9ydChcIi4uL2Nvb3JkaW5hdGUuanNcIikuQ29vcmRpbmF0ZX0gY2xvc2VzdFBvaW50IENsb3Nlc3QgcG9pbnQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBtaW5TcXVhcmVkRGlzdGFuY2UgTWluaW11bSBzcXVhcmVkIGRpc3RhbmNlLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IE1pbmltdW0gc3F1YXJlZCBkaXN0YW5jZS5cbiAgICovXG4gIGNsb3Nlc3RQb2ludFhZKHgsIHksIGNsb3Nlc3RQb2ludCwgbWluU3F1YXJlZERpc3RhbmNlKSB7XG4gICAgaWYgKG1pblNxdWFyZWREaXN0YW5jZSA8IGNsb3Nlc3RTcXVhcmVkRGlzdGFuY2VYWSh0aGlzLmdldEV4dGVudCgpLCB4LCB5KSkge1xuICAgICAgcmV0dXJuIG1pblNxdWFyZWREaXN0YW5jZTtcbiAgICB9XG4gICAgaWYgKHRoaXMubWF4RGVsdGFSZXZpc2lvbl8gIT0gdGhpcy5nZXRSZXZpc2lvbigpKSB7XG4gICAgICB0aGlzLm1heERlbHRhXyA9IE1hdGguc3FydChcbiAgICAgICAgbWF4U3F1YXJlZERlbHRhKFxuICAgICAgICAgIHRoaXMuZmxhdENvb3JkaW5hdGVzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgdGhpcy5mbGF0Q29vcmRpbmF0ZXMubGVuZ3RoLFxuICAgICAgICAgIHRoaXMuc3RyaWRlLFxuICAgICAgICAgIDAsXG4gICAgICAgICksXG4gICAgICApO1xuICAgICAgdGhpcy5tYXhEZWx0YVJldmlzaW9uXyA9IHRoaXMuZ2V0UmV2aXNpb24oKTtcbiAgICB9XG4gICAgcmV0dXJuIGFzc2lnbkNsb3Nlc3RQb2ludChcbiAgICAgIHRoaXMuZmxhdENvb3JkaW5hdGVzLFxuICAgICAgMCxcbiAgICAgIHRoaXMuZmxhdENvb3JkaW5hdGVzLmxlbmd0aCxcbiAgICAgIHRoaXMuc3RyaWRlLFxuICAgICAgdGhpcy5tYXhEZWx0YV8sXG4gICAgICBmYWxzZSxcbiAgICAgIHgsXG4gICAgICB5LFxuICAgICAgY2xvc2VzdFBvaW50LFxuICAgICAgbWluU3F1YXJlZERpc3RhbmNlLFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogSXRlcmF0ZSBvdmVyIGVhY2ggc2VnbWVudCwgY2FsbGluZyB0aGUgcHJvdmlkZWQgY2FsbGJhY2suXG4gICAqIElmIHRoZSBjYWxsYmFjayByZXR1cm5zIGEgdHJ1dGh5IHZhbHVlIHRoZSBmdW5jdGlvbiByZXR1cm5zIHRoYXRcbiAgICogdmFsdWUgaW1tZWRpYXRlbHkuIE90aGVyd2lzZSB0aGUgZnVuY3Rpb24gcmV0dXJucyBgZmFsc2VgLlxuICAgKlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKHRoaXM6IFMsIGltcG9ydChcIi4uL2Nvb3JkaW5hdGUuanNcIikuQ29vcmRpbmF0ZSwgaW1wb3J0KFwiLi4vY29vcmRpbmF0ZS5qc1wiKS5Db29yZGluYXRlKTogVH0gY2FsbGJhY2sgRnVuY3Rpb25cbiAgICogICAgIGNhbGxlZCBmb3IgZWFjaCBzZWdtZW50LiBUaGUgZnVuY3Rpb24gd2lsbCByZWNlaXZlIHR3byBhcmd1bWVudHMsIHRoZSBzdGFydCBhbmQgZW5kIGNvb3JkaW5hdGVzIG9mIHRoZSBzZWdtZW50LlxuICAgKiBAcmV0dXJuIHtUfGJvb2xlYW59IFZhbHVlLlxuICAgKiBAdGVtcGxhdGUgVCxTXG4gICAqIEBhcGlcbiAgICovXG4gIGZvckVhY2hTZWdtZW50KGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIGZvckVhY2hTZWdtZW50KFxuICAgICAgdGhpcy5mbGF0Q29vcmRpbmF0ZXMsXG4gICAgICAwLFxuICAgICAgdGhpcy5mbGF0Q29vcmRpbmF0ZXMubGVuZ3RoLFxuICAgICAgdGhpcy5zdHJpZGUsXG4gICAgICBjYWxsYmFjayxcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNvb3JkaW5hdGUgYXQgYG1gIHVzaW5nIGxpbmVhciBpbnRlcnBvbGF0aW9uLCBvciBgbnVsbGAgaWYgbm9cbiAgICogc3VjaCBjb29yZGluYXRlIGV4aXN0cy5cbiAgICpcbiAgICogYGV4dHJhcG9sYXRlYCBjb250cm9scyBleHRyYXBvbGF0aW9uIGJleW9uZCB0aGUgcmFuZ2Ugb2YgTXMgaW4gdGhlXG4gICAqIE11bHRpTGluZVN0cmluZy4gSWYgYGV4dHJhcG9sYXRlYCBpcyBgdHJ1ZWAgdGhlbiBNcyBsZXNzIHRoYW4gdGhlIGZpcnN0XG4gICAqIE0gd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNvb3JkaW5hdGUgYW5kIE1zIGdyZWF0ZXIgdGhhbiB0aGUgbGFzdCBNIHdpbGxcbiAgICogcmV0dXJuIHRoZSBsYXN0IGNvb3JkaW5hdGUuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBtIE0uXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2V4dHJhcG9sYXRlXSBFeHRyYXBvbGF0ZS4gRGVmYXVsdCBpcyBgZmFsc2VgLlxuICAgKiBAcmV0dXJuIHtpbXBvcnQoXCIuLi9jb29yZGluYXRlLmpzXCIpLkNvb3JkaW5hdGV8bnVsbH0gQ29vcmRpbmF0ZS5cbiAgICogQGFwaVxuICAgKi9cbiAgZ2V0Q29vcmRpbmF0ZUF0TShtLCBleHRyYXBvbGF0ZSkge1xuICAgIGlmICh0aGlzLmxheW91dCAhPSAnWFlNJyAmJiB0aGlzLmxheW91dCAhPSAnWFlaTScpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBleHRyYXBvbGF0ZSA9IGV4dHJhcG9sYXRlICE9PSB1bmRlZmluZWQgPyBleHRyYXBvbGF0ZSA6IGZhbHNlO1xuICAgIHJldHVybiBsaW5lU3RyaW5nQ29vcmRpbmF0ZUF0TShcbiAgICAgIHRoaXMuZmxhdENvb3JkaW5hdGVzLFxuICAgICAgMCxcbiAgICAgIHRoaXMuZmxhdENvb3JkaW5hdGVzLmxlbmd0aCxcbiAgICAgIHRoaXMuc3RyaWRlLFxuICAgICAgbSxcbiAgICAgIGV4dHJhcG9sYXRlLFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBjb29yZGluYXRlcyBvZiB0aGUgbGluZXN0cmluZy5cbiAgICogQHJldHVybiB7QXJyYXk8aW1wb3J0KFwiLi4vY29vcmRpbmF0ZS5qc1wiKS5Db29yZGluYXRlPn0gQ29vcmRpbmF0ZXMuXG4gICAqIEBhcGlcbiAgICovXG4gIGdldENvb3JkaW5hdGVzKCkge1xuICAgIHJldHVybiBpbmZsYXRlQ29vcmRpbmF0ZXMoXG4gICAgICB0aGlzLmZsYXRDb29yZGluYXRlcyxcbiAgICAgIDAsXG4gICAgICB0aGlzLmZsYXRDb29yZGluYXRlcy5sZW5ndGgsXG4gICAgICB0aGlzLnN0cmlkZSxcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgY29vcmRpbmF0ZSBhdCB0aGUgcHJvdmlkZWQgZnJhY3Rpb24gYWxvbmcgdGhlIGxpbmVzdHJpbmcuXG4gICAqIFRoZSBgZnJhY3Rpb25gIGlzIGEgbnVtYmVyIGJldHdlZW4gMCBhbmQgMSwgd2hlcmUgMCBpcyB0aGUgc3RhcnQgb2YgdGhlXG4gICAqIGxpbmVzdHJpbmcgYW5kIDEgaXMgdGhlIGVuZC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGZyYWN0aW9uIEZyYWN0aW9uLlxuICAgKiBAcGFyYW0ge2ltcG9ydChcIi4uL2Nvb3JkaW5hdGUuanNcIikuQ29vcmRpbmF0ZX0gW2Rlc3RdIE9wdGlvbmFsIGNvb3JkaW5hdGUgd2hvc2UgdmFsdWVzIHdpbGxcbiAgICogICAgIGJlIG1vZGlmaWVkLiBJZiBub3QgcHJvdmlkZWQsIGEgbmV3IGNvb3JkaW5hdGUgd2lsbCBiZSByZXR1cm5lZC5cbiAgICogQHJldHVybiB7aW1wb3J0KFwiLi4vY29vcmRpbmF0ZS5qc1wiKS5Db29yZGluYXRlfSBDb29yZGluYXRlIG9mIHRoZSBpbnRlcnBvbGF0ZWQgcG9pbnQuXG4gICAqIEBhcGlcbiAgICovXG4gIGdldENvb3JkaW5hdGVBdChmcmFjdGlvbiwgZGVzdCkge1xuICAgIHJldHVybiBpbnRlcnBvbGF0ZVBvaW50KFxuICAgICAgdGhpcy5mbGF0Q29vcmRpbmF0ZXMsXG4gICAgICAwLFxuICAgICAgdGhpcy5mbGF0Q29vcmRpbmF0ZXMubGVuZ3RoLFxuICAgICAgdGhpcy5zdHJpZGUsXG4gICAgICBmcmFjdGlvbixcbiAgICAgIGRlc3QsXG4gICAgICB0aGlzLnN0cmlkZSxcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgbGVuZ3RoIG9mIHRoZSBsaW5lc3RyaW5nIG9uIHByb2plY3RlZCBwbGFuZS5cbiAgICogQHJldHVybiB7bnVtYmVyfSBMZW5ndGggKG9uIHByb2plY3RlZCBwbGFuZSkuXG4gICAqIEBhcGlcbiAgICovXG4gIGdldExlbmd0aCgpIHtcbiAgICByZXR1cm4gbGluZVN0cmluZ0xlbmd0aChcbiAgICAgIHRoaXMuZmxhdENvb3JkaW5hdGVzLFxuICAgICAgMCxcbiAgICAgIHRoaXMuZmxhdENvb3JkaW5hdGVzLmxlbmd0aCxcbiAgICAgIHRoaXMuc3RyaWRlLFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7QXJyYXk8bnVtYmVyPn0gRmxhdCBtaWRwb2ludC5cbiAgICovXG4gIGdldEZsYXRNaWRwb2ludCgpIHtcbiAgICBpZiAodGhpcy5mbGF0TWlkcG9pbnRSZXZpc2lvbl8gIT0gdGhpcy5nZXRSZXZpc2lvbigpKSB7XG4gICAgICB0aGlzLmZsYXRNaWRwb2ludF8gPSB0aGlzLmdldENvb3JkaW5hdGVBdChcbiAgICAgICAgMC41LFxuICAgICAgICB0aGlzLmZsYXRNaWRwb2ludF8gPz8gdW5kZWZpbmVkLFxuICAgICAgKTtcbiAgICAgIHRoaXMuZmxhdE1pZHBvaW50UmV2aXNpb25fID0gdGhpcy5nZXRSZXZpc2lvbigpO1xuICAgIH1cbiAgICByZXR1cm4gLyoqIEB0eXBlIHtBcnJheTxudW1iZXI+fSAqLyAodGhpcy5mbGF0TWlkcG9pbnRfKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc3F1YXJlZFRvbGVyYW5jZSBTcXVhcmVkIHRvbGVyYW5jZS5cbiAgICogQHJldHVybiB7TGluZVN0cmluZ30gU2ltcGxpZmllZCBMaW5lU3RyaW5nLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBnZXRTaW1wbGlmaWVkR2VvbWV0cnlJbnRlcm5hbChzcXVhcmVkVG9sZXJhbmNlKSB7XG4gICAgLyoqIEB0eXBlIHtBcnJheTxudW1iZXI+fSAqL1xuICAgIGNvbnN0IHNpbXBsaWZpZWRGbGF0Q29vcmRpbmF0ZXMgPSBbXTtcbiAgICBzaW1wbGlmaWVkRmxhdENvb3JkaW5hdGVzLmxlbmd0aCA9IGRvdWdsYXNQZXVja2VyKFxuICAgICAgdGhpcy5mbGF0Q29vcmRpbmF0ZXMsXG4gICAgICAwLFxuICAgICAgdGhpcy5mbGF0Q29vcmRpbmF0ZXMubGVuZ3RoLFxuICAgICAgdGhpcy5zdHJpZGUsXG4gICAgICBzcXVhcmVkVG9sZXJhbmNlLFxuICAgICAgc2ltcGxpZmllZEZsYXRDb29yZGluYXRlcyxcbiAgICAgIDAsXG4gICAgKTtcbiAgICByZXR1cm4gbmV3IExpbmVTdHJpbmcoc2ltcGxpZmllZEZsYXRDb29yZGluYXRlcywgJ1hZJyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB0eXBlIG9mIHRoaXMgZ2VvbWV0cnkuXG4gICAqIEByZXR1cm4ge2ltcG9ydChcIi4vR2VvbWV0cnkuanNcIikuVHlwZX0gR2VvbWV0cnkgdHlwZS5cbiAgICogQGFwaVxuICAgKi9cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gJ0xpbmVTdHJpbmcnO1xuICB9XG5cbiAgLyoqXG4gICAqIFRlc3QgaWYgdGhlIGdlb21ldHJ5IGFuZCB0aGUgcGFzc2VkIGV4dGVudCBpbnRlcnNlY3QuXG4gICAqIEBwYXJhbSB7aW1wb3J0KFwiLi4vZXh0ZW50LmpzXCIpLkV4dGVudH0gZXh0ZW50IEV4dGVudC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gYHRydWVgIGlmIHRoZSBnZW9tZXRyeSBhbmQgdGhlIGV4dGVudCBpbnRlcnNlY3QuXG4gICAqIEBhcGlcbiAgICovXG4gIGludGVyc2VjdHNFeHRlbnQoZXh0ZW50KSB7XG4gICAgcmV0dXJuIGludGVyc2VjdHNMaW5lU3RyaW5nKFxuICAgICAgdGhpcy5mbGF0Q29vcmRpbmF0ZXMsXG4gICAgICAwLFxuICAgICAgdGhpcy5mbGF0Q29vcmRpbmF0ZXMubGVuZ3RoLFxuICAgICAgdGhpcy5zdHJpZGUsXG4gICAgICBleHRlbnQsXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGNvb3JkaW5hdGVzIG9mIHRoZSBsaW5lc3RyaW5nLlxuICAgKiBAcGFyYW0geyFBcnJheTxpbXBvcnQoXCIuLi9jb29yZGluYXRlLmpzXCIpLkNvb3JkaW5hdGU+fSBjb29yZGluYXRlcyBDb29yZGluYXRlcy5cbiAgICogQHBhcmFtIHtpbXBvcnQoXCIuL0dlb21ldHJ5LmpzXCIpLkdlb21ldHJ5TGF5b3V0fSBbbGF5b3V0XSBMYXlvdXQuXG4gICAqIEBhcGlcbiAgICovXG4gIHNldENvb3JkaW5hdGVzKGNvb3JkaW5hdGVzLCBsYXlvdXQpIHtcbiAgICB0aGlzLnNldExheW91dChsYXlvdXQsIGNvb3JkaW5hdGVzLCAxKTtcbiAgICBpZiAoIXRoaXMuZmxhdENvb3JkaW5hdGVzKSB7XG4gICAgICB0aGlzLmZsYXRDb29yZGluYXRlcyA9IFtdO1xuICAgIH1cbiAgICB0aGlzLmZsYXRDb29yZGluYXRlcy5sZW5ndGggPSBkZWZsYXRlQ29vcmRpbmF0ZXMoXG4gICAgICB0aGlzLmZsYXRDb29yZGluYXRlcyxcbiAgICAgIDAsXG4gICAgICBjb29yZGluYXRlcyxcbiAgICAgIHRoaXMuc3RyaWRlLFxuICAgICk7XG4gICAgdGhpcy5jaGFuZ2VkKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGluZVN0cmluZztcbiIsIi8qKlxuICogQG1vZHVsZSBvbC9nZW9tL1NpbXBsZUdlb21ldHJ5XG4gKi9cbmltcG9ydCBHZW9tZXRyeSBmcm9tICcuL0dlb21ldHJ5LmpzJztcbmltcG9ydCB7YWJzdHJhY3R9IGZyb20gJy4uL3V0aWwuanMnO1xuaW1wb3J0IHtjcmVhdGVPclVwZGF0ZUZyb21GbGF0Q29vcmRpbmF0ZXMsIGdldENlbnRlcn0gZnJvbSAnLi4vZXh0ZW50LmpzJztcbmltcG9ydCB7cm90YXRlLCBzY2FsZSwgdHJhbnNmb3JtMkQsIHRyYW5zbGF0ZX0gZnJvbSAnLi9mbGF0L3RyYW5zZm9ybS5qcyc7XG5cbi8qKlxuICogQGNsYXNzZGVzY1xuICogQWJzdHJhY3QgYmFzZSBjbGFzczsgb25seSB1c2VkIGZvciBjcmVhdGluZyBzdWJjbGFzc2VzOyBkbyBub3QgaW5zdGFudGlhdGVcbiAqIGluIGFwcHMsIGFzIGNhbm5vdCBiZSByZW5kZXJlZC5cbiAqXG4gKiBAYWJzdHJhY3RcbiAqIEBhcGlcbiAqL1xuY2xhc3MgU2ltcGxlR2VvbWV0cnkgZXh0ZW5kcyBHZW9tZXRyeSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICAvKipcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHR5cGUge2ltcG9ydChcIi4vR2VvbWV0cnkuanNcIikuR2VvbWV0cnlMYXlvdXR9XG4gICAgICovXG4gICAgdGhpcy5sYXlvdXQgPSAnWFknO1xuXG4gICAgLyoqXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5zdHJpZGUgPSAyO1xuXG4gICAgLyoqXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEB0eXBlIHtBcnJheTxudW1iZXI+fVxuICAgICAqL1xuICAgIHRoaXMuZmxhdENvb3JkaW5hdGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7aW1wb3J0KFwiLi4vZXh0ZW50LmpzXCIpLkV4dGVudH0gZXh0ZW50IEV4dGVudC5cbiAgICogQHByb3RlY3RlZFxuICAgKiBAcmV0dXJuIHtpbXBvcnQoXCIuLi9leHRlbnQuanNcIikuRXh0ZW50fSBleHRlbnQgRXh0ZW50LlxuICAgKi9cbiAgY29tcHV0ZUV4dGVudChleHRlbnQpIHtcbiAgICByZXR1cm4gY3JlYXRlT3JVcGRhdGVGcm9tRmxhdENvb3JkaW5hdGVzKFxuICAgICAgdGhpcy5mbGF0Q29vcmRpbmF0ZXMsXG4gICAgICAwLFxuICAgICAgdGhpcy5mbGF0Q29vcmRpbmF0ZXMubGVuZ3RoLFxuICAgICAgdGhpcy5zdHJpZGUsXG4gICAgICBleHRlbnQsXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAYWJzdHJhY3RcbiAgICogQHJldHVybiB7QXJyYXk8Kj4gfCBudWxsfSBDb29yZGluYXRlcy5cbiAgICovXG4gIGdldENvb3JkaW5hdGVzKCkge1xuICAgIHJldHVybiBhYnN0cmFjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgZmlyc3QgY29vcmRpbmF0ZSBvZiB0aGUgZ2VvbWV0cnkuXG4gICAqIEByZXR1cm4ge2ltcG9ydChcIi4uL2Nvb3JkaW5hdGUuanNcIikuQ29vcmRpbmF0ZX0gRmlyc3QgY29vcmRpbmF0ZS5cbiAgICogQGFwaVxuICAgKi9cbiAgZ2V0Rmlyc3RDb29yZGluYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmZsYXRDb29yZGluYXRlcy5zbGljZSgwLCB0aGlzLnN0cmlkZSk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7QXJyYXk8bnVtYmVyPn0gRmxhdCBjb29yZGluYXRlcy5cbiAgICovXG4gIGdldEZsYXRDb29yZGluYXRlcygpIHtcbiAgICByZXR1cm4gdGhpcy5mbGF0Q29vcmRpbmF0ZXM7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBsYXN0IGNvb3JkaW5hdGUgb2YgdGhlIGdlb21ldHJ5LlxuICAgKiBAcmV0dXJuIHtpbXBvcnQoXCIuLi9jb29yZGluYXRlLmpzXCIpLkNvb3JkaW5hdGV9IExhc3QgcG9pbnQuXG4gICAqIEBhcGlcbiAgICovXG4gIGdldExhc3RDb29yZGluYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmZsYXRDb29yZGluYXRlcy5zbGljZShcbiAgICAgIHRoaXMuZmxhdENvb3JkaW5hdGVzLmxlbmd0aCAtIHRoaXMuc3RyaWRlLFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSB7QGxpbmsgaW1wb3J0KFwiLi9HZW9tZXRyeS5qc1wiKS5HZW9tZXRyeUxheW91dCBsYXlvdXR9IG9mIHRoZSBnZW9tZXRyeS5cbiAgICogQHJldHVybiB7aW1wb3J0KFwiLi9HZW9tZXRyeS5qc1wiKS5HZW9tZXRyeUxheW91dH0gTGF5b3V0LlxuICAgKiBAYXBpXG4gICAqL1xuICBnZXRMYXlvdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMubGF5b3V0O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIHNpbXBsaWZpZWQgdmVyc2lvbiBvZiB0aGlzIGdlb21ldHJ5IHVzaW5nIHRoZSBEb3VnbGFzIFBldWNrZXIgYWxnb3JpdGhtLlxuICAgKiBAcGFyYW0ge251bWJlcn0gc3F1YXJlZFRvbGVyYW5jZSBTcXVhcmVkIHRvbGVyYW5jZS5cbiAgICogQHJldHVybiB7U2ltcGxlR2VvbWV0cnl9IFNpbXBsaWZpZWQgZ2VvbWV0cnkuXG4gICAqL1xuICBnZXRTaW1wbGlmaWVkR2VvbWV0cnkoc3F1YXJlZFRvbGVyYW5jZSkge1xuICAgIGlmICh0aGlzLnNpbXBsaWZpZWRHZW9tZXRyeVJldmlzaW9uICE9PSB0aGlzLmdldFJldmlzaW9uKCkpIHtcbiAgICAgIHRoaXMuc2ltcGxpZmllZEdlb21ldHJ5TWF4TWluU3F1YXJlZFRvbGVyYW5jZSA9IDA7XG4gICAgICB0aGlzLnNpbXBsaWZpZWRHZW9tZXRyeVJldmlzaW9uID0gdGhpcy5nZXRSZXZpc2lvbigpO1xuICAgIH1cbiAgICAvLyBJZiBzcXVhcmVkVG9sZXJhbmNlIGlzIG5lZ2F0aXZlIG9yIGlmIHdlIGtub3cgdGhhdCBzaW1wbGlmaWNhdGlvbiB3aWxsIG5vdFxuICAgIC8vIGhhdmUgYW55IGVmZmVjdCB0aGVuIGp1c3QgcmV0dXJuIHRoaXMuXG4gICAgaWYgKFxuICAgICAgc3F1YXJlZFRvbGVyYW5jZSA8IDAgfHxcbiAgICAgICh0aGlzLnNpbXBsaWZpZWRHZW9tZXRyeU1heE1pblNxdWFyZWRUb2xlcmFuY2UgIT09IDAgJiZcbiAgICAgICAgc3F1YXJlZFRvbGVyYW5jZSA8PSB0aGlzLnNpbXBsaWZpZWRHZW9tZXRyeU1heE1pblNxdWFyZWRUb2xlcmFuY2UpXG4gICAgKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjb25zdCBzaW1wbGlmaWVkR2VvbWV0cnkgPVxuICAgICAgdGhpcy5nZXRTaW1wbGlmaWVkR2VvbWV0cnlJbnRlcm5hbChzcXVhcmVkVG9sZXJhbmNlKTtcbiAgICBjb25zdCBzaW1wbGlmaWVkRmxhdENvb3JkaW5hdGVzID0gc2ltcGxpZmllZEdlb21ldHJ5LmdldEZsYXRDb29yZGluYXRlcygpO1xuICAgIGlmIChzaW1wbGlmaWVkRmxhdENvb3JkaW5hdGVzLmxlbmd0aCA8IHRoaXMuZmxhdENvb3JkaW5hdGVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHNpbXBsaWZpZWRHZW9tZXRyeTtcbiAgICB9XG4gICAgLy8gU2ltcGxpZmljYXRpb24gZGlkIG5vdCBhY3R1YWxseSByZW1vdmUgYW55IGNvb3JkaW5hdGVzLiAgV2Ugbm93IGtub3dcbiAgICAvLyB0aGF0IGFueSBjYWxscyB0byBnZXRTaW1wbGlmaWVkR2VvbWV0cnkgd2l0aCBhIHNxdWFyZWRUb2xlcmFuY2UgbGVzc1xuICAgIC8vIHRoYW4gb3IgZXF1YWwgdG8gdGhlIGN1cnJlbnQgc3F1YXJlZFRvbGVyYW5jZSB3aWxsIGFsc28gbm90IGhhdmUgYW55XG4gICAgLy8gZWZmZWN0LiAgVGhpcyBhbGxvd3MgdXMgdG8gc2hvcnQgY2lyY3VpdCBzaW1wbGlmaWNhdGlvbiAoc2F2aW5nIENQVVxuICAgIC8vIGN5Y2xlcykgYW5kIHByZXZlbnRzIHRoZSBjYWNoZSBvZiBzaW1wbGlmaWVkIGdlb21ldHJpZXMgZnJvbSBmaWxsaW5nXG4gICAgLy8gdXAgd2l0aCB1c2VsZXNzIGlkZW50aWNhbCBjb3BpZXMgb2YgdGhpcyBnZW9tZXRyeSAoc2F2aW5nIG1lbW9yeSkuXG4gICAgdGhpcy5zaW1wbGlmaWVkR2VvbWV0cnlNYXhNaW5TcXVhcmVkVG9sZXJhbmNlID0gc3F1YXJlZFRvbGVyYW5jZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc3F1YXJlZFRvbGVyYW5jZSBTcXVhcmVkIHRvbGVyYW5jZS5cbiAgICogQHJldHVybiB7U2ltcGxlR2VvbWV0cnl9IFNpbXBsaWZpZWQgZ2VvbWV0cnkuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIGdldFNpbXBsaWZpZWRHZW9tZXRyeUludGVybmFsKHNxdWFyZWRUb2xlcmFuY2UpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IFN0cmlkZS5cbiAgICovXG4gIGdldFN0cmlkZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpZGU7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtpbXBvcnQoXCIuL0dlb21ldHJ5LmpzXCIpLkdlb21ldHJ5TGF5b3V0fSBsYXlvdXQgTGF5b3V0LlxuICAgKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGZsYXRDb29yZGluYXRlcyBGbGF0IGNvb3JkaW5hdGVzLlxuICAgKi9cbiAgc2V0RmxhdENvb3JkaW5hdGVzKGxheW91dCwgZmxhdENvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5zdHJpZGUgPSBnZXRTdHJpZGVGb3JMYXlvdXQobGF5b3V0KTtcbiAgICB0aGlzLmxheW91dCA9IGxheW91dDtcbiAgICB0aGlzLmZsYXRDb29yZGluYXRlcyA9IGZsYXRDb29yZGluYXRlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBAYWJzdHJhY3RcbiAgICogQHBhcmFtIHshQXJyYXk8Kj59IGNvb3JkaW5hdGVzIENvb3JkaW5hdGVzLlxuICAgKiBAcGFyYW0ge2ltcG9ydChcIi4vR2VvbWV0cnkuanNcIikuR2VvbWV0cnlMYXlvdXR9IFtsYXlvdXRdIExheW91dC5cbiAgICovXG4gIHNldENvb3JkaW5hdGVzKGNvb3JkaW5hdGVzLCBsYXlvdXQpIHtcbiAgICBhYnN0cmFjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7aW1wb3J0KFwiLi9HZW9tZXRyeS5qc1wiKS5HZW9tZXRyeUxheW91dHx1bmRlZmluZWR9IGxheW91dCBMYXlvdXQuXG4gICAqIEBwYXJhbSB7QXJyYXk8Kj59IGNvb3JkaW5hdGVzIENvb3JkaW5hdGVzLlxuICAgKiBAcGFyYW0ge251bWJlcn0gbmVzdGluZyBOZXN0aW5nLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBzZXRMYXlvdXQobGF5b3V0LCBjb29yZGluYXRlcywgbmVzdGluZykge1xuICAgIGxldCBzdHJpZGU7XG4gICAgaWYgKGxheW91dCkge1xuICAgICAgc3RyaWRlID0gZ2V0U3RyaWRlRm9yTGF5b3V0KGxheW91dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmVzdGluZzsgKytpKSB7XG4gICAgICAgIGlmIChjb29yZGluYXRlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLmxheW91dCA9ICdYWSc7XG4gICAgICAgICAgdGhpcy5zdHJpZGUgPSAyO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb29yZGluYXRlcyA9IC8qKiBAdHlwZSB7QXJyYXk8dW5rbm93bj59ICovIChjb29yZGluYXRlc1swXSk7XG4gICAgICB9XG4gICAgICBzdHJpZGUgPSBjb29yZGluYXRlcy5sZW5ndGg7XG4gICAgICBsYXlvdXQgPSBnZXRMYXlvdXRGb3JTdHJpZGUoc3RyaWRlKTtcbiAgICB9XG4gICAgdGhpcy5sYXlvdXQgPSBsYXlvdXQ7XG4gICAgdGhpcy5zdHJpZGUgPSBzdHJpZGU7XG4gIH1cblxuICAvKipcbiAgICogQXBwbHkgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gdG8gdGhlIGNvb3JkaW5hdGVzIG9mIHRoZSBnZW9tZXRyeS5cbiAgICogVGhlIGdlb21ldHJ5IGlzIG1vZGlmaWVkIGluIHBsYWNlLlxuICAgKiBJZiB5b3UgZG8gbm90IHdhbnQgdGhlIGdlb21ldHJ5IG1vZGlmaWVkIGluIHBsYWNlLCBmaXJzdCBgY2xvbmUoKWAgaXQgYW5kXG4gICAqIHRoZW4gdXNlIHRoaXMgZnVuY3Rpb24gb24gdGhlIGNsb25lLlxuICAgKiBAcGFyYW0ge2ltcG9ydChcIi4uL3Byb2ouanNcIikuVHJhbnNmb3JtRnVuY3Rpb259IHRyYW5zZm9ybUZuIFRyYW5zZm9ybSBmdW5jdGlvbi5cbiAgICogQ2FsbGVkIHdpdGggYSBmbGF0IGFycmF5IG9mIGdlb21ldHJ5IGNvb3JkaW5hdGVzLlxuICAgKiBAYXBpXG4gICAqL1xuICBhcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm1Gbikge1xuICAgIGlmICh0aGlzLmZsYXRDb29yZGluYXRlcykge1xuICAgICAgdHJhbnNmb3JtRm4odGhpcy5mbGF0Q29vcmRpbmF0ZXMsIHRoaXMuZmxhdENvb3JkaW5hdGVzLCB0aGlzLnN0cmlkZSk7XG4gICAgICB0aGlzLmNoYW5nZWQoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUm90YXRlIHRoZSBnZW9tZXRyeSBhcm91bmQgYSBnaXZlbiBjb29yZGluYXRlLiBUaGlzIG1vZGlmaWVzIHRoZSBnZW9tZXRyeVxuICAgKiBjb29yZGluYXRlcyBpbiBwbGFjZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGFuZ2xlIFJvdGF0aW9uIGFuZ2xlIGluIGNvdW50ZXItY2xvY2t3aXNlIHJhZGlhbnMuXG4gICAqIEBwYXJhbSB7aW1wb3J0KFwiLi4vY29vcmRpbmF0ZS5qc1wiKS5Db29yZGluYXRlfSBhbmNob3IgVGhlIHJvdGF0aW9uIGNlbnRlci5cbiAgICogQGFwaVxuICAgKi9cbiAgcm90YXRlKGFuZ2xlLCBhbmNob3IpIHtcbiAgICBjb25zdCBmbGF0Q29vcmRpbmF0ZXMgPSB0aGlzLmdldEZsYXRDb29yZGluYXRlcygpO1xuICAgIGlmIChmbGF0Q29vcmRpbmF0ZXMpIHtcbiAgICAgIGNvbnN0IHN0cmlkZSA9IHRoaXMuZ2V0U3RyaWRlKCk7XG4gICAgICByb3RhdGUoXG4gICAgICAgIGZsYXRDb29yZGluYXRlcyxcbiAgICAgICAgMCxcbiAgICAgICAgZmxhdENvb3JkaW5hdGVzLmxlbmd0aCxcbiAgICAgICAgc3RyaWRlLFxuICAgICAgICBhbmdsZSxcbiAgICAgICAgYW5jaG9yLFxuICAgICAgICBmbGF0Q29vcmRpbmF0ZXMsXG4gICAgICApO1xuICAgICAgdGhpcy5jaGFuZ2VkKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNjYWxlIHRoZSBnZW9tZXRyeSAod2l0aCBhbiBvcHRpb25hbCBvcmlnaW4pLiAgVGhpcyBtb2RpZmllcyB0aGUgZ2VvbWV0cnlcbiAgICogY29vcmRpbmF0ZXMgaW4gcGxhY2UuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzeCBUaGUgc2NhbGluZyBmYWN0b3IgaW4gdGhlIHgtZGlyZWN0aW9uLlxuICAgKiBAcGFyYW0ge251bWJlcn0gW3N5XSBUaGUgc2NhbGluZyBmYWN0b3IgaW4gdGhlIHktZGlyZWN0aW9uIChkZWZhdWx0cyB0byBzeCkuXG4gICAqIEBwYXJhbSB7aW1wb3J0KFwiLi4vY29vcmRpbmF0ZS5qc1wiKS5Db29yZGluYXRlfSBbYW5jaG9yXSBUaGUgc2NhbGUgb3JpZ2luIChkZWZhdWx0cyB0byB0aGUgY2VudGVyXG4gICAqICAgICBvZiB0aGUgZ2VvbWV0cnkgZXh0ZW50KS5cbiAgICogQGFwaVxuICAgKi9cbiAgc2NhbGUoc3gsIHN5LCBhbmNob3IpIHtcbiAgICBpZiAoc3kgPT09IHVuZGVmaW5lZCkge1xuICAgICAgc3kgPSBzeDtcbiAgICB9XG4gICAgaWYgKCFhbmNob3IpIHtcbiAgICAgIGFuY2hvciA9IGdldENlbnRlcih0aGlzLmdldEV4dGVudCgpKTtcbiAgICB9XG4gICAgY29uc3QgZmxhdENvb3JkaW5hdGVzID0gdGhpcy5nZXRGbGF0Q29vcmRpbmF0ZXMoKTtcbiAgICBpZiAoZmxhdENvb3JkaW5hdGVzKSB7XG4gICAgICBjb25zdCBzdHJpZGUgPSB0aGlzLmdldFN0cmlkZSgpO1xuICAgICAgc2NhbGUoXG4gICAgICAgIGZsYXRDb29yZGluYXRlcyxcbiAgICAgICAgMCxcbiAgICAgICAgZmxhdENvb3JkaW5hdGVzLmxlbmd0aCxcbiAgICAgICAgc3RyaWRlLFxuICAgICAgICBzeCxcbiAgICAgICAgc3ksXG4gICAgICAgIGFuY2hvcixcbiAgICAgICAgZmxhdENvb3JkaW5hdGVzLFxuICAgICAgKTtcbiAgICAgIHRoaXMuY2hhbmdlZCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2xhdGUgdGhlIGdlb21ldHJ5LiAgVGhpcyBtb2RpZmllcyB0aGUgZ2VvbWV0cnkgY29vcmRpbmF0ZXMgaW4gcGxhY2UuICBJZlxuICAgKiBpbnN0ZWFkIHlvdSB3YW50IGEgbmV3IGdlb21ldHJ5LCBmaXJzdCBgY2xvbmUoKWAgdGhpcyBnZW9tZXRyeS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGRlbHRhWCBEZWx0YSBYLlxuICAgKiBAcGFyYW0ge251bWJlcn0gZGVsdGFZIERlbHRhIFkuXG4gICAqIEBhcGlcbiAgICovXG4gIHRyYW5zbGF0ZShkZWx0YVgsIGRlbHRhWSkge1xuICAgIGNvbnN0IGZsYXRDb29yZGluYXRlcyA9IHRoaXMuZ2V0RmxhdENvb3JkaW5hdGVzKCk7XG4gICAgaWYgKGZsYXRDb29yZGluYXRlcykge1xuICAgICAgY29uc3Qgc3RyaWRlID0gdGhpcy5nZXRTdHJpZGUoKTtcbiAgICAgIHRyYW5zbGF0ZShcbiAgICAgICAgZmxhdENvb3JkaW5hdGVzLFxuICAgICAgICAwLFxuICAgICAgICBmbGF0Q29vcmRpbmF0ZXMubGVuZ3RoLFxuICAgICAgICBzdHJpZGUsXG4gICAgICAgIGRlbHRhWCxcbiAgICAgICAgZGVsdGFZLFxuICAgICAgICBmbGF0Q29vcmRpbmF0ZXMsXG4gICAgICApO1xuICAgICAgdGhpcy5jaGFuZ2VkKCk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IHN0cmlkZSBTdHJpZGUuXG4gKiBAcmV0dXJuIHtpbXBvcnQoXCIuL0dlb21ldHJ5LmpzXCIpLkdlb21ldHJ5TGF5b3V0fSBsYXlvdXQgTGF5b3V0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGF5b3V0Rm9yU3RyaWRlKHN0cmlkZSkge1xuICBsZXQgbGF5b3V0O1xuICBpZiAoc3RyaWRlID09IDIpIHtcbiAgICBsYXlvdXQgPSAnWFknO1xuICB9IGVsc2UgaWYgKHN0cmlkZSA9PSAzKSB7XG4gICAgbGF5b3V0ID0gJ1hZWic7XG4gIH0gZWxzZSBpZiAoc3RyaWRlID09IDQpIHtcbiAgICBsYXlvdXQgPSAnWFlaTSc7XG4gIH1cbiAgcmV0dXJuIC8qKiBAdHlwZSB7aW1wb3J0KFwiLi9HZW9tZXRyeS5qc1wiKS5HZW9tZXRyeUxheW91dH0gKi8gKGxheW91dCk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtpbXBvcnQoXCIuL0dlb21ldHJ5LmpzXCIpLkdlb21ldHJ5TGF5b3V0fSBsYXlvdXQgTGF5b3V0LlxuICogQHJldHVybiB7bnVtYmVyfSBTdHJpZGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdHJpZGVGb3JMYXlvdXQobGF5b3V0KSB7XG4gIGxldCBzdHJpZGU7XG4gIGlmIChsYXlvdXQgPT0gJ1hZJykge1xuICAgIHN0cmlkZSA9IDI7XG4gIH0gZWxzZSBpZiAobGF5b3V0ID09ICdYWVonIHx8IGxheW91dCA9PSAnWFlNJykge1xuICAgIHN0cmlkZSA9IDM7XG4gIH0gZWxzZSBpZiAobGF5b3V0ID09ICdYWVpNJykge1xuICAgIHN0cmlkZSA9IDQ7XG4gIH1cbiAgcmV0dXJuIC8qKiBAdHlwZSB7bnVtYmVyfSAqLyAoc3RyaWRlKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1NpbXBsZUdlb21ldHJ5fSBzaW1wbGVHZW9tZXRyeSBTaW1wbGUgZ2VvbWV0cnkuXG4gKiBAcGFyYW0ge2ltcG9ydChcIi4uL3RyYW5zZm9ybS5qc1wiKS5UcmFuc2Zvcm19IHRyYW5zZm9ybSBUcmFuc2Zvcm0uXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IFtkZXN0XSBEZXN0aW5hdGlvbi5cbiAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59IFRyYW5zZm9ybWVkIGZsYXQgY29vcmRpbmF0ZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1HZW9tMkQoc2ltcGxlR2VvbWV0cnksIHRyYW5zZm9ybSwgZGVzdCkge1xuICBjb25zdCBmbGF0Q29vcmRpbmF0ZXMgPSBzaW1wbGVHZW9tZXRyeS5nZXRGbGF0Q29vcmRpbmF0ZXMoKTtcbiAgaWYgKCFmbGF0Q29vcmRpbmF0ZXMpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCBzdHJpZGUgPSBzaW1wbGVHZW9tZXRyeS5nZXRTdHJpZGUoKTtcbiAgcmV0dXJuIHRyYW5zZm9ybTJEKFxuICAgIGZsYXRDb29yZGluYXRlcyxcbiAgICAwLFxuICAgIGZsYXRDb29yZGluYXRlcy5sZW5ndGgsXG4gICAgc3RyaWRlLFxuICAgIHRyYW5zZm9ybSxcbiAgICBkZXN0LFxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaW1wbGVHZW9tZXRyeTtcbiIsIi8qKlxuICogQG1vZHVsZSBvbC9nZW9tL2ZsYXQvY2xvc2VzdFxuICovXG5pbXBvcnQge2xlcnAsIHNxdWFyZWREaXN0YW5jZSBhcyBzcXVhcmVkRHh9IGZyb20gJy4uLy4uL21hdGguanMnO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIHBvaW50IG9uIHRoZSAyRCBsaW5lIHNlZ21lbnQgZmxhdENvb3JkaW5hdGVzW29mZnNldDFdIHRvXG4gKiBmbGF0Q29vcmRpbmF0ZXNbb2Zmc2V0Ml0gdGhhdCBpcyBjbG9zZXN0IHRvIHRoZSBwb2ludCAoeCwgeSkuICBFeHRyYVxuICogZGltZW5zaW9ucyBhcmUgbGluZWFybHkgaW50ZXJwb2xhdGVkLlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBmbGF0Q29vcmRpbmF0ZXMgRmxhdCBjb29yZGluYXRlcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQxIE9mZnNldCAxLlxuICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldDIgT2Zmc2V0IDIuXG4gKiBAcGFyYW0ge251bWJlcn0gc3RyaWRlIFN0cmlkZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSB4IFguXG4gKiBAcGFyYW0ge251bWJlcn0geSBZLlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBjbG9zZXN0UG9pbnQgQ2xvc2VzdCBwb2ludC5cbiAqL1xuZnVuY3Rpb24gYXNzaWduQ2xvc2VzdChcbiAgZmxhdENvb3JkaW5hdGVzLFxuICBvZmZzZXQxLFxuICBvZmZzZXQyLFxuICBzdHJpZGUsXG4gIHgsXG4gIHksXG4gIGNsb3Nlc3RQb2ludCxcbikge1xuICBjb25zdCB4MSA9IGZsYXRDb29yZGluYXRlc1tvZmZzZXQxXTtcbiAgY29uc3QgeTEgPSBmbGF0Q29vcmRpbmF0ZXNbb2Zmc2V0MSArIDFdO1xuICBjb25zdCBkeCA9IGZsYXRDb29yZGluYXRlc1tvZmZzZXQyXSAtIHgxO1xuICBjb25zdCBkeSA9IGZsYXRDb29yZGluYXRlc1tvZmZzZXQyICsgMV0gLSB5MTtcbiAgbGV0IG9mZnNldDtcbiAgaWYgKGR4ID09PSAwICYmIGR5ID09PSAwKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0MTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB0ID0gKCh4IC0geDEpICogZHggKyAoeSAtIHkxKSAqIGR5KSAvIChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgaWYgKHQgPiAxKSB7XG4gICAgICBvZmZzZXQgPSBvZmZzZXQyO1xuICAgIH0gZWxzZSBpZiAodCA+IDApIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyaWRlOyArK2kpIHtcbiAgICAgICAgY2xvc2VzdFBvaW50W2ldID0gbGVycChcbiAgICAgICAgICBmbGF0Q29vcmRpbmF0ZXNbb2Zmc2V0MSArIGldLFxuICAgICAgICAgIGZsYXRDb29yZGluYXRlc1tvZmZzZXQyICsgaV0sXG4gICAgICAgICAgdCxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGNsb3Nlc3RQb2ludC5sZW5ndGggPSBzdHJpZGU7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIG9mZnNldCA9IG9mZnNldDE7XG4gICAgfVxuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyaWRlOyArK2kpIHtcbiAgICBjbG9zZXN0UG9pbnRbaV0gPSBmbGF0Q29vcmRpbmF0ZXNbb2Zmc2V0ICsgaV07XG4gIH1cbiAgY2xvc2VzdFBvaW50Lmxlbmd0aCA9IHN0cmlkZTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIHNxdWFyZWQgb2YgdGhlIGxhcmdlc3QgZGlzdGFuY2UgYmV0d2VlbiBhbnkgcGFpciBvZiBjb25zZWN1dGl2ZVxuICogY29vcmRpbmF0ZXMuXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGZsYXRDb29yZGluYXRlcyBGbGF0IGNvb3JkaW5hdGVzLlxuICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldCBPZmZzZXQuXG4gKiBAcGFyYW0ge251bWJlcn0gZW5kIEVuZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzdHJpZGUgU3RyaWRlLlxuICogQHBhcmFtIHtudW1iZXJ9IG1heCBNYXggc3F1YXJlZCBkZWx0YS5cbiAqIEByZXR1cm4ge251bWJlcn0gTWF4IHNxdWFyZWQgZGVsdGEuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXhTcXVhcmVkRGVsdGEoZmxhdENvb3JkaW5hdGVzLCBvZmZzZXQsIGVuZCwgc3RyaWRlLCBtYXgpIHtcbiAgbGV0IHgxID0gZmxhdENvb3JkaW5hdGVzW29mZnNldF07XG4gIGxldCB5MSA9IGZsYXRDb29yZGluYXRlc1tvZmZzZXQgKyAxXTtcbiAgZm9yIChvZmZzZXQgKz0gc3RyaWRlOyBvZmZzZXQgPCBlbmQ7IG9mZnNldCArPSBzdHJpZGUpIHtcbiAgICBjb25zdCB4MiA9IGZsYXRDb29yZGluYXRlc1tvZmZzZXRdO1xuICAgIGNvbnN0IHkyID0gZmxhdENvb3JkaW5hdGVzW29mZnNldCArIDFdO1xuICAgIGNvbnN0IHNxdWFyZWREZWx0YSA9IHNxdWFyZWREeCh4MSwgeTEsIHgyLCB5Mik7XG4gICAgaWYgKHNxdWFyZWREZWx0YSA+IG1heCkge1xuICAgICAgbWF4ID0gc3F1YXJlZERlbHRhO1xuICAgIH1cbiAgICB4MSA9IHgyO1xuICAgIHkxID0geTI7XG4gIH1cbiAgcmV0dXJuIG1heDtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGZsYXRDb29yZGluYXRlcyBGbGF0IGNvb3JkaW5hdGVzLlxuICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldCBPZmZzZXQuXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGVuZHMgRW5kcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzdHJpZGUgU3RyaWRlLlxuICogQHBhcmFtIHtudW1iZXJ9IG1heCBNYXggc3F1YXJlZCBkZWx0YS5cbiAqIEByZXR1cm4ge251bWJlcn0gTWF4IHNxdWFyZWQgZGVsdGEuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcnJheU1heFNxdWFyZWREZWx0YShcbiAgZmxhdENvb3JkaW5hdGVzLFxuICBvZmZzZXQsXG4gIGVuZHMsXG4gIHN0cmlkZSxcbiAgbWF4LFxuKSB7XG4gIGZvciAobGV0IGkgPSAwLCBpaSA9IGVuZHMubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgIGNvbnN0IGVuZCA9IGVuZHNbaV07XG4gICAgbWF4ID0gbWF4U3F1YXJlZERlbHRhKGZsYXRDb29yZGluYXRlcywgb2Zmc2V0LCBlbmQsIHN0cmlkZSwgbWF4KTtcbiAgICBvZmZzZXQgPSBlbmQ7XG4gIH1cbiAgcmV0dXJuIG1heDtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGZsYXRDb29yZGluYXRlcyBGbGF0IGNvb3JkaW5hdGVzLlxuICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldCBPZmZzZXQuXG4gKiBAcGFyYW0ge0FycmF5PEFycmF5PG51bWJlcj4+fSBlbmRzcyBFbmRzcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzdHJpZGUgU3RyaWRlLlxuICogQHBhcmFtIHtudW1iZXJ9IG1heCBNYXggc3F1YXJlZCBkZWx0YS5cbiAqIEByZXR1cm4ge251bWJlcn0gTWF4IHNxdWFyZWQgZGVsdGEuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aUFycmF5TWF4U3F1YXJlZERlbHRhKFxuICBmbGF0Q29vcmRpbmF0ZXMsXG4gIG9mZnNldCxcbiAgZW5kc3MsXG4gIHN0cmlkZSxcbiAgbWF4LFxuKSB7XG4gIGZvciAobGV0IGkgPSAwLCBpaSA9IGVuZHNzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICBjb25zdCBlbmRzID0gZW5kc3NbaV07XG4gICAgbWF4ID0gYXJyYXlNYXhTcXVhcmVkRGVsdGEoZmxhdENvb3JkaW5hdGVzLCBvZmZzZXQsIGVuZHMsIHN0cmlkZSwgbWF4KTtcbiAgICBvZmZzZXQgPSBlbmRzW2VuZHMubGVuZ3RoIC0gMV07XG4gIH1cbiAgcmV0dXJuIG1heDtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGZsYXRDb29yZGluYXRlcyBGbGF0IGNvb3JkaW5hdGVzLlxuICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldCBPZmZzZXQuXG4gKiBAcGFyYW0ge251bWJlcn0gZW5kIEVuZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzdHJpZGUgU3RyaWRlLlxuICogQHBhcmFtIHtudW1iZXJ9IG1heERlbHRhIE1heCBkZWx0YS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNSaW5nIElzIHJpbmcuXG4gKiBAcGFyYW0ge251bWJlcn0geCBYLlxuICogQHBhcmFtIHtudW1iZXJ9IHkgWS5cbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gY2xvc2VzdFBvaW50IENsb3Nlc3QgcG9pbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gbWluU3F1YXJlZERpc3RhbmNlIE1pbmltdW0gc3F1YXJlZCBkaXN0YW5jZS5cbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gW3RtcFBvaW50XSBUZW1wb3JhcnkgcG9pbnQgb2JqZWN0LlxuICogQHJldHVybiB7bnVtYmVyfSBNaW5pbXVtIHNxdWFyZWQgZGlzdGFuY2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ25DbG9zZXN0UG9pbnQoXG4gIGZsYXRDb29yZGluYXRlcyxcbiAgb2Zmc2V0LFxuICBlbmQsXG4gIHN0cmlkZSxcbiAgbWF4RGVsdGEsXG4gIGlzUmluZyxcbiAgeCxcbiAgeSxcbiAgY2xvc2VzdFBvaW50LFxuICBtaW5TcXVhcmVkRGlzdGFuY2UsXG4gIHRtcFBvaW50LFxuKSB7XG4gIGlmIChvZmZzZXQgPT0gZW5kKSB7XG4gICAgcmV0dXJuIG1pblNxdWFyZWREaXN0YW5jZTtcbiAgfVxuICBsZXQgaSwgc3F1YXJlZERpc3RhbmNlO1xuICBpZiAobWF4RGVsdGEgPT09IDApIHtcbiAgICAvLyBBbGwgcG9pbnRzIGFyZSBpZGVudGljYWwsIHNvIGp1c3QgdGVzdCB0aGUgZmlyc3QgcG9pbnQuXG4gICAgc3F1YXJlZERpc3RhbmNlID0gc3F1YXJlZER4KFxuICAgICAgeCxcbiAgICAgIHksXG4gICAgICBmbGF0Q29vcmRpbmF0ZXNbb2Zmc2V0XSxcbiAgICAgIGZsYXRDb29yZGluYXRlc1tvZmZzZXQgKyAxXSxcbiAgICApO1xuICAgIGlmIChzcXVhcmVkRGlzdGFuY2UgPCBtaW5TcXVhcmVkRGlzdGFuY2UpIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBzdHJpZGU7ICsraSkge1xuICAgICAgICBjbG9zZXN0UG9pbnRbaV0gPSBmbGF0Q29vcmRpbmF0ZXNbb2Zmc2V0ICsgaV07XG4gICAgICB9XG4gICAgICBjbG9zZXN0UG9pbnQubGVuZ3RoID0gc3RyaWRlO1xuICAgICAgcmV0dXJuIHNxdWFyZWREaXN0YW5jZTtcbiAgICB9XG4gICAgcmV0dXJuIG1pblNxdWFyZWREaXN0YW5jZTtcbiAgfVxuICB0bXBQb2ludCA9IHRtcFBvaW50ID8gdG1wUG9pbnQgOiBbTmFOLCBOYU5dO1xuICBsZXQgaW5kZXggPSBvZmZzZXQgKyBzdHJpZGU7XG4gIHdoaWxlIChpbmRleCA8IGVuZCkge1xuICAgIGFzc2lnbkNsb3Nlc3QoXG4gICAgICBmbGF0Q29vcmRpbmF0ZXMsXG4gICAgICBpbmRleCAtIHN0cmlkZSxcbiAgICAgIGluZGV4LFxuICAgICAgc3RyaWRlLFxuICAgICAgeCxcbiAgICAgIHksXG4gICAgICB0bXBQb2ludCxcbiAgICApO1xuICAgIHNxdWFyZWREaXN0YW5jZSA9IHNxdWFyZWREeCh4LCB5LCB0bXBQb2ludFswXSwgdG1wUG9pbnRbMV0pO1xuICAgIGlmIChzcXVhcmVkRGlzdGFuY2UgPCBtaW5TcXVhcmVkRGlzdGFuY2UpIHtcbiAgICAgIG1pblNxdWFyZWREaXN0YW5jZSA9IHNxdWFyZWREaXN0YW5jZTtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBzdHJpZGU7ICsraSkge1xuICAgICAgICBjbG9zZXN0UG9pbnRbaV0gPSB0bXBQb2ludFtpXTtcbiAgICAgIH1cbiAgICAgIGNsb3Nlc3RQb2ludC5sZW5ndGggPSBzdHJpZGU7XG4gICAgICBpbmRleCArPSBzdHJpZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFNraXAgYWhlYWQgbXVsdGlwbGUgcG9pbnRzLCBiZWNhdXNlIHdlIGtub3cgdGhhdCBhbGwgdGhlIHNraXBwZWRcbiAgICAgIC8vIHBvaW50cyBjYW5ub3QgYmUgYW55IGNsb3NlciB0aGFuIHRoZSBjbG9zZXN0IHBvaW50IHdlIGhhdmUgZm91bmQgc29cbiAgICAgIC8vIGZhci4gIFdlIGtub3cgdGhpcyBiZWNhdXNlIHdlIGtub3cgaG93IGNsb3NlIHRoZSBjdXJyZW50IHBvaW50IGlzLCBob3dcbiAgICAgIC8vIGNsb3NlIHRoZSBjbG9zZXN0IHBvaW50IHdlIGhhdmUgZm91bmQgc28gZmFyIGlzLCBhbmQgdGhlIG1heGltdW1cbiAgICAgIC8vIGRpc3RhbmNlIGJldHdlZW4gY29uc2VjdXRpdmUgcG9pbnRzLiAgRm9yIGV4YW1wbGUsIGlmIHdlJ3JlIGN1cnJlbnRseVxuICAgICAgLy8gYXQgZGlzdGFuY2UgMTAsIHRoZSBiZXN0IHdlJ3ZlIGZvdW5kIHNvIGZhciBpcyAzLCBhbmQgdGhhdCB0aGUgbWF4aW11bVxuICAgICAgLy8gZGlzdGFuY2UgYmV0d2VlbiBjb25zZWN1dGl2ZSBwb2ludHMgaXMgMiwgdGhlbiB3ZSdsbCBuZWVkIHRvIHNraXAgYXRcbiAgICAgIC8vIGxlYXN0ICgxMCAtIDMpIC8gMiA9PSAzIChyb3VuZGVkIGRvd24pIHBvaW50cyB0byBoYXZlIGFueSBjaGFuY2Ugb2ZcbiAgICAgIC8vIGZpbmRpbmcgYSBjbG9zZXIgcG9pbnQuICBXZSB1c2UgTWF0aC5tYXgoLi4uLCAxKSB0byBlbnN1cmUgdGhhdCB3ZVxuICAgICAgLy8gYWx3YXlzIGFkdmFuY2UgYXQgbGVhc3Qgb25lIHBvaW50LCB0byBhdm9pZCBhbiBpbmZpbml0ZSBsb29wLlxuICAgICAgaW5kZXggKz1cbiAgICAgICAgc3RyaWRlICpcbiAgICAgICAgTWF0aC5tYXgoXG4gICAgICAgICAgKChNYXRoLnNxcnQoc3F1YXJlZERpc3RhbmNlKSAtIE1hdGguc3FydChtaW5TcXVhcmVkRGlzdGFuY2UpKSAvXG4gICAgICAgICAgICBtYXhEZWx0YSkgfFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAxLFxuICAgICAgICApO1xuICAgIH1cbiAgfVxuICBpZiAoaXNSaW5nKSB7XG4gICAgLy8gQ2hlY2sgdGhlIGNsb3Npbmcgc2VnbWVudC5cbiAgICBhc3NpZ25DbG9zZXN0KFxuICAgICAgZmxhdENvb3JkaW5hdGVzLFxuICAgICAgZW5kIC0gc3RyaWRlLFxuICAgICAgb2Zmc2V0LFxuICAgICAgc3RyaWRlLFxuICAgICAgeCxcbiAgICAgIHksXG4gICAgICB0bXBQb2ludCxcbiAgICApO1xuICAgIHNxdWFyZWREaXN0YW5jZSA9IHNxdWFyZWREeCh4LCB5LCB0bXBQb2ludFswXSwgdG1wUG9pbnRbMV0pO1xuICAgIGlmIChzcXVhcmVkRGlzdGFuY2UgPCBtaW5TcXVhcmVkRGlzdGFuY2UpIHtcbiAgICAgIG1pblNxdWFyZWREaXN0YW5jZSA9IHNxdWFyZWREaXN0YW5jZTtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBzdHJpZGU7ICsraSkge1xuICAgICAgICBjbG9zZXN0UG9pbnRbaV0gPSB0bXBQb2ludFtpXTtcbiAgICAgIH1cbiAgICAgIGNsb3Nlc3RQb2ludC5sZW5ndGggPSBzdHJpZGU7XG4gICAgfVxuICB9XG4gIHJldHVybiBtaW5TcXVhcmVkRGlzdGFuY2U7XG59XG5cbi8qKlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBmbGF0Q29vcmRpbmF0ZXMgRmxhdCBjb29yZGluYXRlcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQgT2Zmc2V0LlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBlbmRzIEVuZHMuXG4gKiBAcGFyYW0ge251bWJlcn0gc3RyaWRlIFN0cmlkZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXhEZWx0YSBNYXggZGVsdGEuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzUmluZyBJcyByaW5nLlxuICogQHBhcmFtIHtudW1iZXJ9IHggWC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB5IFkuXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGNsb3Nlc3RQb2ludCBDbG9zZXN0IHBvaW50LlxuICogQHBhcmFtIHtudW1iZXJ9IG1pblNxdWFyZWREaXN0YW5jZSBNaW5pbXVtIHNxdWFyZWQgZGlzdGFuY2UuXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IFt0bXBQb2ludF0gVGVtcG9yYXJ5IHBvaW50IG9iamVjdC5cbiAqIEByZXR1cm4ge251bWJlcn0gTWluaW11bSBzcXVhcmVkIGRpc3RhbmNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduQ2xvc2VzdEFycmF5UG9pbnQoXG4gIGZsYXRDb29yZGluYXRlcyxcbiAgb2Zmc2V0LFxuICBlbmRzLFxuICBzdHJpZGUsXG4gIG1heERlbHRhLFxuICBpc1JpbmcsXG4gIHgsXG4gIHksXG4gIGNsb3Nlc3RQb2ludCxcbiAgbWluU3F1YXJlZERpc3RhbmNlLFxuICB0bXBQb2ludCxcbikge1xuICB0bXBQb2ludCA9IHRtcFBvaW50ID8gdG1wUG9pbnQgOiBbTmFOLCBOYU5dO1xuICBmb3IgKGxldCBpID0gMCwgaWkgPSBlbmRzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICBjb25zdCBlbmQgPSBlbmRzW2ldO1xuICAgIG1pblNxdWFyZWREaXN0YW5jZSA9IGFzc2lnbkNsb3Nlc3RQb2ludChcbiAgICAgIGZsYXRDb29yZGluYXRlcyxcbiAgICAgIG9mZnNldCxcbiAgICAgIGVuZCxcbiAgICAgIHN0cmlkZSxcbiAgICAgIG1heERlbHRhLFxuICAgICAgaXNSaW5nLFxuICAgICAgeCxcbiAgICAgIHksXG4gICAgICBjbG9zZXN0UG9pbnQsXG4gICAgICBtaW5TcXVhcmVkRGlzdGFuY2UsXG4gICAgICB0bXBQb2ludCxcbiAgICApO1xuICAgIG9mZnNldCA9IGVuZDtcbiAgfVxuICByZXR1cm4gbWluU3F1YXJlZERpc3RhbmNlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gZmxhdENvb3JkaW5hdGVzIEZsYXQgY29vcmRpbmF0ZXMuXG4gKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0IE9mZnNldC5cbiAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8bnVtYmVyPj59IGVuZHNzIEVuZHNzLlxuICogQHBhcmFtIHtudW1iZXJ9IHN0cmlkZSBTdHJpZGUuXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4RGVsdGEgTWF4IGRlbHRhLlxuICogQHBhcmFtIHtib29sZWFufSBpc1JpbmcgSXMgcmluZy5cbiAqIEBwYXJhbSB7bnVtYmVyfSB4IFguXG4gKiBAcGFyYW0ge251bWJlcn0geSBZLlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBjbG9zZXN0UG9pbnQgQ2xvc2VzdCBwb2ludC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW5TcXVhcmVkRGlzdGFuY2UgTWluaW11bSBzcXVhcmVkIGRpc3RhbmNlLlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBbdG1wUG9pbnRdIFRlbXBvcmFyeSBwb2ludCBvYmplY3QuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IE1pbmltdW0gc3F1YXJlZCBkaXN0YW5jZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbkNsb3Nlc3RNdWx0aUFycmF5UG9pbnQoXG4gIGZsYXRDb29yZGluYXRlcyxcbiAgb2Zmc2V0LFxuICBlbmRzcyxcbiAgc3RyaWRlLFxuICBtYXhEZWx0YSxcbiAgaXNSaW5nLFxuICB4LFxuICB5LFxuICBjbG9zZXN0UG9pbnQsXG4gIG1pblNxdWFyZWREaXN0YW5jZSxcbiAgdG1wUG9pbnQsXG4pIHtcbiAgdG1wUG9pbnQgPSB0bXBQb2ludCA/IHRtcFBvaW50IDogW05hTiwgTmFOXTtcbiAgZm9yIChsZXQgaSA9IDAsIGlpID0gZW5kc3MubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgIGNvbnN0IGVuZHMgPSBlbmRzc1tpXTtcbiAgICBtaW5TcXVhcmVkRGlzdGFuY2UgPSBhc3NpZ25DbG9zZXN0QXJyYXlQb2ludChcbiAgICAgIGZsYXRDb29yZGluYXRlcyxcbiAgICAgIG9mZnNldCxcbiAgICAgIGVuZHMsXG4gICAgICBzdHJpZGUsXG4gICAgICBtYXhEZWx0YSxcbiAgICAgIGlzUmluZyxcbiAgICAgIHgsXG4gICAgICB5LFxuICAgICAgY2xvc2VzdFBvaW50LFxuICAgICAgbWluU3F1YXJlZERpc3RhbmNlLFxuICAgICAgdG1wUG9pbnQsXG4gICAgKTtcbiAgICBvZmZzZXQgPSBlbmRzW2VuZHMubGVuZ3RoIC0gMV07XG4gIH1cbiAgcmV0dXJuIG1pblNxdWFyZWREaXN0YW5jZTtcbn1cbiIsIi8qKlxuICogQG1vZHVsZSBvbC9nZW9tL2ZsYXQvY29udGFpbnNcbiAqL1xuaW1wb3J0IHtmb3JFYWNoQ29ybmVyfSBmcm9tICcuLi8uLi9leHRlbnQuanMnO1xuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gZmxhdENvb3JkaW5hdGVzIEZsYXQgY29vcmRpbmF0ZXMuXG4gKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0IE9mZnNldC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBlbmQgRW5kLlxuICogQHBhcmFtIHtudW1iZXJ9IHN0cmlkZSBTdHJpZGUuXG4gKiBAcGFyYW0ge2ltcG9ydChcIi4uLy4uL2V4dGVudC5qc1wiKS5FeHRlbnR9IGV4dGVudCBFeHRlbnQuXG4gKiBAcmV0dXJuIHtib29sZWFufSBDb250YWlucyBleHRlbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsaW5lYXJSaW5nQ29udGFpbnNFeHRlbnQoXG4gIGZsYXRDb29yZGluYXRlcyxcbiAgb2Zmc2V0LFxuICBlbmQsXG4gIHN0cmlkZSxcbiAgZXh0ZW50LFxuKSB7XG4gIGNvbnN0IG91dHNpZGUgPSBmb3JFYWNoQ29ybmVyKFxuICAgIGV4dGVudCxcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge2ltcG9ydChcIi4uLy4uL2Nvb3JkaW5hdGUuanNcIikuQ29vcmRpbmF0ZX0gY29vcmRpbmF0ZSBDb29yZGluYXRlLlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IENvbnRhaW5zICh4LCB5KS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAoY29vcmRpbmF0ZSkge1xuICAgICAgcmV0dXJuICFsaW5lYXJSaW5nQ29udGFpbnNYWShcbiAgICAgICAgZmxhdENvb3JkaW5hdGVzLFxuICAgICAgICBvZmZzZXQsXG4gICAgICAgIGVuZCxcbiAgICAgICAgc3RyaWRlLFxuICAgICAgICBjb29yZGluYXRlWzBdLFxuICAgICAgICBjb29yZGluYXRlWzFdLFxuICAgICAgKTtcbiAgICB9LFxuICApO1xuICByZXR1cm4gIW91dHNpZGU7XG59XG5cbi8qKlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBmbGF0Q29vcmRpbmF0ZXMgRmxhdCBjb29yZGluYXRlcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQgT2Zmc2V0LlxuICogQHBhcmFtIHtudW1iZXJ9IGVuZCBFbmQuXG4gKiBAcGFyYW0ge251bWJlcn0gc3RyaWRlIFN0cmlkZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSB4IFguXG4gKiBAcGFyYW0ge251bWJlcn0geSBZLlxuICogQHJldHVybiB7Ym9vbGVhbn0gQ29udGFpbnMgKHgsIHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbGluZWFyUmluZ0NvbnRhaW5zWFkoXG4gIGZsYXRDb29yZGluYXRlcyxcbiAgb2Zmc2V0LFxuICBlbmQsXG4gIHN0cmlkZSxcbiAgeCxcbiAgeSxcbikge1xuICAvLyBodHRwczovL2dlb21hbGdvcml0aG1zLmNvbS9hMDMtX2luY2x1c2lvbi5odG1sXG4gIC8vIENvcHlyaWdodCAyMDAwIHNvZnRTdXJmZXIsIDIwMTIgRGFuIFN1bmRheVxuICAvLyBUaGlzIGNvZGUgbWF5IGJlIGZyZWVseSB1c2VkIGFuZCBtb2RpZmllZCBmb3IgYW55IHB1cnBvc2VcbiAgLy8gcHJvdmlkaW5nIHRoYXQgdGhpcyBjb3B5cmlnaHQgbm90aWNlIGlzIGluY2x1ZGVkIHdpdGggaXQuXG4gIC8vIFNvZnRTdXJmZXIgbWFrZXMgbm8gd2FycmFudHkgZm9yIHRoaXMgY29kZSwgYW5kIGNhbm5vdCBiZSBoZWxkXG4gIC8vIGxpYWJsZSBmb3IgYW55IHJlYWwgb3IgaW1hZ2luZWQgZGFtYWdlIHJlc3VsdGluZyBmcm9tIGl0cyB1c2UuXG4gIC8vIFVzZXJzIG9mIHRoaXMgY29kZSBtdXN0IHZlcmlmeSBjb3JyZWN0bmVzcyBmb3IgdGhlaXIgYXBwbGljYXRpb24uXG4gIGxldCB3biA9IDA7XG4gIGxldCB4MSA9IGZsYXRDb29yZGluYXRlc1tlbmQgLSBzdHJpZGVdO1xuICBsZXQgeTEgPSBmbGF0Q29vcmRpbmF0ZXNbZW5kIC0gc3RyaWRlICsgMV07XG4gIGZvciAoOyBvZmZzZXQgPCBlbmQ7IG9mZnNldCArPSBzdHJpZGUpIHtcbiAgICBjb25zdCB4MiA9IGZsYXRDb29yZGluYXRlc1tvZmZzZXRdO1xuICAgIGNvbnN0IHkyID0gZmxhdENvb3JkaW5hdGVzW29mZnNldCArIDFdO1xuICAgIGlmICh5MSA8PSB5KSB7XG4gICAgICBpZiAoeTIgPiB5ICYmICh4MiAtIHgxKSAqICh5IC0geTEpIC0gKHggLSB4MSkgKiAoeTIgLSB5MSkgPiAwKSB7XG4gICAgICAgIHduKys7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh5MiA8PSB5ICYmICh4MiAtIHgxKSAqICh5IC0geTEpIC0gKHggLSB4MSkgKiAoeTIgLSB5MSkgPCAwKSB7XG4gICAgICB3bi0tO1xuICAgIH1cbiAgICB4MSA9IHgyO1xuICAgIHkxID0geTI7XG4gIH1cbiAgcmV0dXJuIHduICE9PSAwO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gZmxhdENvb3JkaW5hdGVzIEZsYXQgY29vcmRpbmF0ZXMuXG4gKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0IE9mZnNldC5cbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gZW5kcyBFbmRzLlxuICogQHBhcmFtIHtudW1iZXJ9IHN0cmlkZSBTdHJpZGUuXG4gKiBAcGFyYW0ge251bWJlcn0geCBYLlxuICogQHBhcmFtIHtudW1iZXJ9IHkgWS5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IENvbnRhaW5zICh4LCB5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxpbmVhclJpbmdzQ29udGFpbnNYWShcbiAgZmxhdENvb3JkaW5hdGVzLFxuICBvZmZzZXQsXG4gIGVuZHMsXG4gIHN0cmlkZSxcbiAgeCxcbiAgeSxcbikge1xuICBpZiAoZW5kcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKCFsaW5lYXJSaW5nQ29udGFpbnNYWShmbGF0Q29vcmRpbmF0ZXMsIG9mZnNldCwgZW5kc1swXSwgc3RyaWRlLCB4LCB5KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBmb3IgKGxldCBpID0gMSwgaWkgPSBlbmRzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICBpZiAoXG4gICAgICBsaW5lYXJSaW5nQ29udGFpbnNYWShmbGF0Q29vcmRpbmF0ZXMsIGVuZHNbaSAtIDFdLCBlbmRzW2ldLCBzdHJpZGUsIHgsIHkpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gZmxhdENvb3JkaW5hdGVzIEZsYXQgY29vcmRpbmF0ZXMuXG4gKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0IE9mZnNldC5cbiAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8bnVtYmVyPj59IGVuZHNzIEVuZHNzLlxuICogQHBhcmFtIHtudW1iZXJ9IHN0cmlkZSBTdHJpZGUuXG4gKiBAcGFyYW0ge251bWJlcn0geCBYLlxuICogQHBhcmFtIHtudW1iZXJ9IHkgWS5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IENvbnRhaW5zICh4LCB5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxpbmVhclJpbmdzc0NvbnRhaW5zWFkoXG4gIGZsYXRDb29yZGluYXRlcyxcbiAgb2Zmc2V0LFxuICBlbmRzcyxcbiAgc3RyaWRlLFxuICB4LFxuICB5LFxuKSB7XG4gIGlmIChlbmRzcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDAsIGlpID0gZW5kc3MubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgIGNvbnN0IGVuZHMgPSBlbmRzc1tpXTtcbiAgICBpZiAobGluZWFyUmluZ3NDb250YWluc1hZKGZsYXRDb29yZGluYXRlcywgb2Zmc2V0LCBlbmRzLCBzdHJpZGUsIHgsIHkpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgb2Zmc2V0ID0gZW5kc1tlbmRzLmxlbmd0aCAtIDFdO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbiIsIi8qKlxuICogQG1vZHVsZSBvbC9nZW9tL2ZsYXQvZGVmbGF0ZVxuICovXG5cbi8qKlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBmbGF0Q29vcmRpbmF0ZXMgRmxhdCBjb29yZGluYXRlcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQgT2Zmc2V0LlxuICogQHBhcmFtIHtpbXBvcnQoXCIuLi8uLi9jb29yZGluYXRlLmpzXCIpLkNvb3JkaW5hdGV9IGNvb3JkaW5hdGUgQ29vcmRpbmF0ZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzdHJpZGUgU3RyaWRlLlxuICogQHJldHVybiB7bnVtYmVyfSBvZmZzZXQgT2Zmc2V0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVmbGF0ZUNvb3JkaW5hdGUoZmxhdENvb3JkaW5hdGVzLCBvZmZzZXQsIGNvb3JkaW5hdGUsIHN0cmlkZSkge1xuICBmb3IgKGxldCBpID0gMCwgaWkgPSBjb29yZGluYXRlLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICBmbGF0Q29vcmRpbmF0ZXNbb2Zmc2V0KytdID0gY29vcmRpbmF0ZVtpXTtcbiAgfVxuICByZXR1cm4gb2Zmc2V0O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gZmxhdENvb3JkaW5hdGVzIEZsYXQgY29vcmRpbmF0ZXMuXG4gKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0IE9mZnNldC5cbiAqIEBwYXJhbSB7QXJyYXk8aW1wb3J0KFwiLi4vLi4vY29vcmRpbmF0ZS5qc1wiKS5Db29yZGluYXRlPn0gY29vcmRpbmF0ZXMgQ29vcmRpbmF0ZXMuXG4gKiBAcGFyYW0ge251bWJlcn0gc3RyaWRlIFN0cmlkZS5cbiAqIEByZXR1cm4ge251bWJlcn0gb2Zmc2V0IE9mZnNldC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlZmxhdGVDb29yZGluYXRlcyhcbiAgZmxhdENvb3JkaW5hdGVzLFxuICBvZmZzZXQsXG4gIGNvb3JkaW5hdGVzLFxuICBzdHJpZGUsXG4pIHtcbiAgZm9yIChsZXQgaSA9IDAsIGlpID0gY29vcmRpbmF0ZXMubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgIGNvbnN0IGNvb3JkaW5hdGUgPSBjb29yZGluYXRlc1tpXTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHN0cmlkZTsgKytqKSB7XG4gICAgICBmbGF0Q29vcmRpbmF0ZXNbb2Zmc2V0KytdID0gY29vcmRpbmF0ZVtqXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9mZnNldDtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGZsYXRDb29yZGluYXRlcyBGbGF0IGNvb3JkaW5hdGVzLlxuICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldCBPZmZzZXQuXG4gKiBAcGFyYW0ge0FycmF5PEFycmF5PGltcG9ydChcIi4uLy4uL2Nvb3JkaW5hdGUuanNcIikuQ29vcmRpbmF0ZT4+fSBjb29yZGluYXRlc3MgQ29vcmRpbmF0ZXNzLlxuICogQHBhcmFtIHtudW1iZXJ9IHN0cmlkZSBTdHJpZGUuXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IFtlbmRzXSBFbmRzLlxuICogQHJldHVybiB7QXJyYXk8bnVtYmVyPn0gRW5kcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlZmxhdGVDb29yZGluYXRlc0FycmF5KFxuICBmbGF0Q29vcmRpbmF0ZXMsXG4gIG9mZnNldCxcbiAgY29vcmRpbmF0ZXNzLFxuICBzdHJpZGUsXG4gIGVuZHMsXG4pIHtcbiAgZW5kcyA9IGVuZHMgPyBlbmRzIDogW107XG4gIGxldCBpID0gMDtcbiAgZm9yIChsZXQgaiA9IDAsIGpqID0gY29vcmRpbmF0ZXNzLmxlbmd0aDsgaiA8IGpqOyArK2opIHtcbiAgICBjb25zdCBlbmQgPSBkZWZsYXRlQ29vcmRpbmF0ZXMoXG4gICAgICBmbGF0Q29vcmRpbmF0ZXMsXG4gICAgICBvZmZzZXQsXG4gICAgICBjb29yZGluYXRlc3Nbal0sXG4gICAgICBzdHJpZGUsXG4gICAgKTtcbiAgICBlbmRzW2krK10gPSBlbmQ7XG4gICAgb2Zmc2V0ID0gZW5kO1xuICB9XG4gIGVuZHMubGVuZ3RoID0gaTtcbiAgcmV0dXJuIGVuZHM7XG59XG5cbi8qKlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBmbGF0Q29vcmRpbmF0ZXMgRmxhdCBjb29yZGluYXRlcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQgT2Zmc2V0LlxuICogQHBhcmFtIHtBcnJheTxBcnJheTxBcnJheTxpbXBvcnQoXCIuLi8uLi9jb29yZGluYXRlLmpzXCIpLkNvb3JkaW5hdGU+Pj59IGNvb3JkaW5hdGVzc3MgQ29vcmRpbmF0ZXNzcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzdHJpZGUgU3RyaWRlLlxuICogQHBhcmFtIHtBcnJheTxBcnJheTxudW1iZXI+Pn0gW2VuZHNzXSBFbmRzcy5cbiAqIEByZXR1cm4ge0FycmF5PEFycmF5PG51bWJlcj4+fSBFbmRzcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlZmxhdGVNdWx0aUNvb3JkaW5hdGVzQXJyYXkoXG4gIGZsYXRDb29yZGluYXRlcyxcbiAgb2Zmc2V0LFxuICBjb29yZGluYXRlc3NzLFxuICBzdHJpZGUsXG4gIGVuZHNzLFxuKSB7XG4gIGVuZHNzID0gZW5kc3MgPyBlbmRzcyA6IFtdO1xuICBsZXQgaSA9IDA7XG4gIGZvciAobGV0IGogPSAwLCBqaiA9IGNvb3JkaW5hdGVzc3MubGVuZ3RoOyBqIDwgamo7ICsraikge1xuICAgIGNvbnN0IGVuZHMgPSBkZWZsYXRlQ29vcmRpbmF0ZXNBcnJheShcbiAgICAgIGZsYXRDb29yZGluYXRlcyxcbiAgICAgIG9mZnNldCxcbiAgICAgIGNvb3JkaW5hdGVzc3Nbal0sXG4gICAgICBzdHJpZGUsXG4gICAgICBlbmRzc1tpXSxcbiAgICApO1xuICAgIGlmIChlbmRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZW5kc1swXSA9IG9mZnNldDtcbiAgICB9XG4gICAgZW5kc3NbaSsrXSA9IGVuZHM7XG4gICAgb2Zmc2V0ID0gZW5kc1tlbmRzLmxlbmd0aCAtIDFdO1xuICB9XG4gIGVuZHNzLmxlbmd0aCA9IGk7XG4gIHJldHVybiBlbmRzcztcbn1cbiIsIi8qKlxuICogQG1vZHVsZSBvbC9nZW9tL2ZsYXQvaW5mbGF0ZVxuICovXG5cbi8qKlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBmbGF0Q29vcmRpbmF0ZXMgRmxhdCBjb29yZGluYXRlcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQgT2Zmc2V0LlxuICogQHBhcmFtIHtudW1iZXJ9IGVuZCBFbmQuXG4gKiBAcGFyYW0ge251bWJlcn0gc3RyaWRlIFN0cmlkZS5cbiAqIEBwYXJhbSB7QXJyYXk8aW1wb3J0KFwiLi4vLi4vY29vcmRpbmF0ZS5qc1wiKS5Db29yZGluYXRlPn0gW2Nvb3JkaW5hdGVzXSBDb29yZGluYXRlcy5cbiAqIEByZXR1cm4ge0FycmF5PGltcG9ydChcIi4uLy4uL2Nvb3JkaW5hdGUuanNcIikuQ29vcmRpbmF0ZT59IENvb3JkaW5hdGVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5mbGF0ZUNvb3JkaW5hdGVzKFxuICBmbGF0Q29vcmRpbmF0ZXMsXG4gIG9mZnNldCxcbiAgZW5kLFxuICBzdHJpZGUsXG4gIGNvb3JkaW5hdGVzLFxuKSB7XG4gIGNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXMgIT09IHVuZGVmaW5lZCA/IGNvb3JkaW5hdGVzIDogW107XG4gIGxldCBpID0gMDtcbiAgZm9yIChsZXQgaiA9IG9mZnNldDsgaiA8IGVuZDsgaiArPSBzdHJpZGUpIHtcbiAgICBjb29yZGluYXRlc1tpKytdID0gZmxhdENvb3JkaW5hdGVzLnNsaWNlKGosIGogKyBzdHJpZGUpO1xuICB9XG4gIGNvb3JkaW5hdGVzLmxlbmd0aCA9IGk7XG4gIHJldHVybiBjb29yZGluYXRlcztcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGZsYXRDb29yZGluYXRlcyBGbGF0IGNvb3JkaW5hdGVzLlxuICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldCBPZmZzZXQuXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGVuZHMgRW5kcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzdHJpZGUgU3RyaWRlLlxuICogQHBhcmFtIHtBcnJheTxBcnJheTxpbXBvcnQoXCIuLi8uLi9jb29yZGluYXRlLmpzXCIpLkNvb3JkaW5hdGU+Pn0gW2Nvb3JkaW5hdGVzc10gQ29vcmRpbmF0ZXNzLlxuICogQHJldHVybiB7QXJyYXk8QXJyYXk8aW1wb3J0KFwiLi4vLi4vY29vcmRpbmF0ZS5qc1wiKS5Db29yZGluYXRlPj59IENvb3JkaW5hdGVzcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluZmxhdGVDb29yZGluYXRlc0FycmF5KFxuICBmbGF0Q29vcmRpbmF0ZXMsXG4gIG9mZnNldCxcbiAgZW5kcyxcbiAgc3RyaWRlLFxuICBjb29yZGluYXRlc3MsXG4pIHtcbiAgY29vcmRpbmF0ZXNzID0gY29vcmRpbmF0ZXNzICE9PSB1bmRlZmluZWQgPyBjb29yZGluYXRlc3MgOiBbXTtcbiAgbGV0IGkgPSAwO1xuICBmb3IgKGxldCBqID0gMCwgamogPSBlbmRzLmxlbmd0aDsgaiA8IGpqOyArK2opIHtcbiAgICBjb25zdCBlbmQgPSBlbmRzW2pdO1xuICAgIGNvb3JkaW5hdGVzc1tpKytdID0gaW5mbGF0ZUNvb3JkaW5hdGVzKFxuICAgICAgZmxhdENvb3JkaW5hdGVzLFxuICAgICAgb2Zmc2V0LFxuICAgICAgZW5kLFxuICAgICAgc3RyaWRlLFxuICAgICAgY29vcmRpbmF0ZXNzW2ldLFxuICAgICk7XG4gICAgb2Zmc2V0ID0gZW5kO1xuICB9XG4gIGNvb3JkaW5hdGVzcy5sZW5ndGggPSBpO1xuICByZXR1cm4gY29vcmRpbmF0ZXNzO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gZmxhdENvb3JkaW5hdGVzIEZsYXQgY29vcmRpbmF0ZXMuXG4gKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0IE9mZnNldC5cbiAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8bnVtYmVyPj59IGVuZHNzIEVuZHNzLlxuICogQHBhcmFtIHtudW1iZXJ9IHN0cmlkZSBTdHJpZGUuXG4gKiBAcGFyYW0ge0FycmF5PEFycmF5PEFycmF5PGltcG9ydChcIi4uLy4uL2Nvb3JkaW5hdGUuanNcIikuQ29vcmRpbmF0ZT4+Pn0gW2Nvb3JkaW5hdGVzc3NdXG4gKiAgICAgQ29vcmRpbmF0ZXNzcy5cbiAqIEByZXR1cm4ge0FycmF5PEFycmF5PEFycmF5PGltcG9ydChcIi4uLy4uL2Nvb3JkaW5hdGUuanNcIikuQ29vcmRpbmF0ZT4+Pn0gQ29vcmRpbmF0ZXNzcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluZmxhdGVNdWx0aUNvb3JkaW5hdGVzQXJyYXkoXG4gIGZsYXRDb29yZGluYXRlcyxcbiAgb2Zmc2V0LFxuICBlbmRzcyxcbiAgc3RyaWRlLFxuICBjb29yZGluYXRlc3NzLFxuKSB7XG4gIGNvb3JkaW5hdGVzc3MgPSBjb29yZGluYXRlc3NzICE9PSB1bmRlZmluZWQgPyBjb29yZGluYXRlc3NzIDogW107XG4gIGxldCBpID0gMDtcbiAgZm9yIChsZXQgaiA9IDAsIGpqID0gZW5kc3MubGVuZ3RoOyBqIDwgamo7ICsraikge1xuICAgIGNvbnN0IGVuZHMgPSBlbmRzc1tqXTtcbiAgICBjb29yZGluYXRlc3NzW2krK10gPVxuICAgICAgZW5kcy5sZW5ndGggPT09IDEgJiYgZW5kc1swXSA9PT0gb2Zmc2V0XG4gICAgICAgID8gW11cbiAgICAgICAgOiBpbmZsYXRlQ29vcmRpbmF0ZXNBcnJheShcbiAgICAgICAgICAgIGZsYXRDb29yZGluYXRlcyxcbiAgICAgICAgICAgIG9mZnNldCxcbiAgICAgICAgICAgIGVuZHMsXG4gICAgICAgICAgICBzdHJpZGUsXG4gICAgICAgICAgICBjb29yZGluYXRlc3NzW2ldLFxuICAgICAgICAgICk7XG4gICAgb2Zmc2V0ID0gZW5kc1tlbmRzLmxlbmd0aCAtIDFdO1xuICB9XG4gIGNvb3JkaW5hdGVzc3MubGVuZ3RoID0gaTtcbiAgcmV0dXJuIGNvb3JkaW5hdGVzc3M7XG59XG4iLCIvKipcbiAqIEBtb2R1bGUgb2wvZ2VvbS9mbGF0L2ludGVycG9sYXRlXG4gKi9cbmltcG9ydCB7YmluYXJ5U2VhcmNofSBmcm9tICcuLi8uLi9hcnJheS5qcyc7XG5pbXBvcnQge2xlcnB9IGZyb20gJy4uLy4uL21hdGguanMnO1xuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gZmxhdENvb3JkaW5hdGVzIEZsYXQgY29vcmRpbmF0ZXMuXG4gKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0IE9mZnNldC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBlbmQgRW5kLlxuICogQHBhcmFtIHtudW1iZXJ9IHN0cmlkZSBTdHJpZGUuXG4gKiBAcGFyYW0ge251bWJlcn0gZnJhY3Rpb24gRnJhY3Rpb24uXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IFtkZXN0XSBEZXN0aW5hdGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbZGltZW5zaW9uXSBEZXN0aW5hdGlvbiBkaW1lbnNpb24gKGRlZmF1bHQgaXMgYDJgKVxuICogQHJldHVybiB7QXJyYXk8bnVtYmVyPn0gRGVzdGluYXRpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZVBvaW50KFxuICBmbGF0Q29vcmRpbmF0ZXMsXG4gIG9mZnNldCxcbiAgZW5kLFxuICBzdHJpZGUsXG4gIGZyYWN0aW9uLFxuICBkZXN0LFxuICBkaW1lbnNpb24sXG4pIHtcbiAgbGV0IG8sIHQ7XG4gIGNvbnN0IG4gPSAoZW5kIC0gb2Zmc2V0KSAvIHN0cmlkZTtcbiAgaWYgKG4gPT09IDEpIHtcbiAgICBvID0gb2Zmc2V0O1xuICB9IGVsc2UgaWYgKG4gPT09IDIpIHtcbiAgICBvID0gb2Zmc2V0O1xuICAgIHQgPSBmcmFjdGlvbjtcbiAgfSBlbHNlIGlmIChuICE9PSAwKSB7XG4gICAgbGV0IHgxID0gZmxhdENvb3JkaW5hdGVzW29mZnNldF07XG4gICAgbGV0IHkxID0gZmxhdENvb3JkaW5hdGVzW29mZnNldCArIDFdO1xuICAgIGxldCBsZW5ndGggPSAwO1xuICAgIGNvbnN0IGN1bXVsYXRpdmVMZW5ndGhzID0gWzBdO1xuICAgIGZvciAobGV0IGkgPSBvZmZzZXQgKyBzdHJpZGU7IGkgPCBlbmQ7IGkgKz0gc3RyaWRlKSB7XG4gICAgICBjb25zdCB4MiA9IGZsYXRDb29yZGluYXRlc1tpXTtcbiAgICAgIGNvbnN0IHkyID0gZmxhdENvb3JkaW5hdGVzW2kgKyAxXTtcbiAgICAgIGxlbmd0aCArPSBNYXRoLnNxcnQoKHgyIC0geDEpICogKHgyIC0geDEpICsgKHkyIC0geTEpICogKHkyIC0geTEpKTtcbiAgICAgIGN1bXVsYXRpdmVMZW5ndGhzLnB1c2gobGVuZ3RoKTtcbiAgICAgIHgxID0geDI7XG4gICAgICB5MSA9IHkyO1xuICAgIH1cbiAgICBjb25zdCB0YXJnZXQgPSBmcmFjdGlvbiAqIGxlbmd0aDtcbiAgICBjb25zdCBpbmRleCA9IGJpbmFyeVNlYXJjaChjdW11bGF0aXZlTGVuZ3RocywgdGFyZ2V0KTtcbiAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICB0ID1cbiAgICAgICAgKHRhcmdldCAtIGN1bXVsYXRpdmVMZW5ndGhzWy1pbmRleCAtIDJdKSAvXG4gICAgICAgIChjdW11bGF0aXZlTGVuZ3Roc1staW5kZXggLSAxXSAtIGN1bXVsYXRpdmVMZW5ndGhzWy1pbmRleCAtIDJdKTtcbiAgICAgIG8gPSBvZmZzZXQgKyAoLWluZGV4IC0gMikgKiBzdHJpZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIG8gPSBvZmZzZXQgKyBpbmRleCAqIHN0cmlkZTtcbiAgICB9XG4gIH1cbiAgZGltZW5zaW9uID0gZGltZW5zaW9uID4gMSA/IGRpbWVuc2lvbiA6IDI7XG4gIGRlc3QgPSBkZXN0ID8gZGVzdCA6IG5ldyBBcnJheShkaW1lbnNpb24pO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGRpbWVuc2lvbjsgKytpKSB7XG4gICAgZGVzdFtpXSA9XG4gICAgICBvID09PSB1bmRlZmluZWRcbiAgICAgICAgPyBOYU5cbiAgICAgICAgOiB0ID09PSB1bmRlZmluZWRcbiAgICAgICAgICA/IGZsYXRDb29yZGluYXRlc1tvICsgaV1cbiAgICAgICAgICA6IGxlcnAoZmxhdENvb3JkaW5hdGVzW28gKyBpXSwgZmxhdENvb3JkaW5hdGVzW28gKyBzdHJpZGUgKyBpXSwgdCk7XG4gIH1cbiAgcmV0dXJuIGRlc3Q7XG59XG5cbi8qKlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBmbGF0Q29vcmRpbmF0ZXMgRmxhdCBjb29yZGluYXRlcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQgT2Zmc2V0LlxuICogQHBhcmFtIHtudW1iZXJ9IGVuZCBFbmQuXG4gKiBAcGFyYW0ge251bWJlcn0gc3RyaWRlIFN0cmlkZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtIE0uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGV4dHJhcG9sYXRlIEV4dHJhcG9sYXRlLlxuICogQHJldHVybiB7aW1wb3J0KFwiLi4vLi4vY29vcmRpbmF0ZS5qc1wiKS5Db29yZGluYXRlfG51bGx9IENvb3JkaW5hdGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsaW5lU3RyaW5nQ29vcmRpbmF0ZUF0TShcbiAgZmxhdENvb3JkaW5hdGVzLFxuICBvZmZzZXQsXG4gIGVuZCxcbiAgc3RyaWRlLFxuICBtLFxuICBleHRyYXBvbGF0ZSxcbikge1xuICBpZiAoZW5kID09IG9mZnNldCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGxldCBjb29yZGluYXRlO1xuICBpZiAobSA8IGZsYXRDb29yZGluYXRlc1tvZmZzZXQgKyBzdHJpZGUgLSAxXSkge1xuICAgIGlmIChleHRyYXBvbGF0ZSkge1xuICAgICAgY29vcmRpbmF0ZSA9IGZsYXRDb29yZGluYXRlcy5zbGljZShvZmZzZXQsIG9mZnNldCArIHN0cmlkZSk7XG4gICAgICBjb29yZGluYXRlW3N0cmlkZSAtIDFdID0gbTtcbiAgICAgIHJldHVybiBjb29yZGluYXRlO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBpZiAoZmxhdENvb3JkaW5hdGVzW2VuZCAtIDFdIDwgbSkge1xuICAgIGlmIChleHRyYXBvbGF0ZSkge1xuICAgICAgY29vcmRpbmF0ZSA9IGZsYXRDb29yZGluYXRlcy5zbGljZShlbmQgLSBzdHJpZGUsIGVuZCk7XG4gICAgICBjb29yZGluYXRlW3N0cmlkZSAtIDFdID0gbTtcbiAgICAgIHJldHVybiBjb29yZGluYXRlO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICAvLyBGSVhNRSB1c2UgTygxKSBzZWFyY2hcbiAgaWYgKG0gPT0gZmxhdENvb3JkaW5hdGVzW29mZnNldCArIHN0cmlkZSAtIDFdKSB7XG4gICAgcmV0dXJuIGZsYXRDb29yZGluYXRlcy5zbGljZShvZmZzZXQsIG9mZnNldCArIHN0cmlkZSk7XG4gIH1cbiAgbGV0IGxvID0gb2Zmc2V0IC8gc3RyaWRlO1xuICBsZXQgaGkgPSBlbmQgLyBzdHJpZGU7XG4gIHdoaWxlIChsbyA8IGhpKSB7XG4gICAgY29uc3QgbWlkID0gKGxvICsgaGkpID4+IDE7XG4gICAgaWYgKG0gPCBmbGF0Q29vcmRpbmF0ZXNbKG1pZCArIDEpICogc3RyaWRlIC0gMV0pIHtcbiAgICAgIGhpID0gbWlkO1xuICAgIH0gZWxzZSB7XG4gICAgICBsbyA9IG1pZCArIDE7XG4gICAgfVxuICB9XG4gIGNvbnN0IG0wID0gZmxhdENvb3JkaW5hdGVzW2xvICogc3RyaWRlIC0gMV07XG4gIGlmIChtID09IG0wKSB7XG4gICAgcmV0dXJuIGZsYXRDb29yZGluYXRlcy5zbGljZSgobG8gLSAxKSAqIHN0cmlkZSwgKGxvIC0gMSkgKiBzdHJpZGUgKyBzdHJpZGUpO1xuICB9XG4gIGNvbnN0IG0xID0gZmxhdENvb3JkaW5hdGVzWyhsbyArIDEpICogc3RyaWRlIC0gMV07XG4gIGNvbnN0IHQgPSAobSAtIG0wKSAvIChtMSAtIG0wKTtcbiAgY29vcmRpbmF0ZSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0cmlkZSAtIDE7ICsraSkge1xuICAgIGNvb3JkaW5hdGUucHVzaChcbiAgICAgIGxlcnAoXG4gICAgICAgIGZsYXRDb29yZGluYXRlc1sobG8gLSAxKSAqIHN0cmlkZSArIGldLFxuICAgICAgICBmbGF0Q29vcmRpbmF0ZXNbbG8gKiBzdHJpZGUgKyBpXSxcbiAgICAgICAgdCxcbiAgICAgICksXG4gICAgKTtcbiAgfVxuICBjb29yZGluYXRlLnB1c2gobSk7XG4gIHJldHVybiBjb29yZGluYXRlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gZmxhdENvb3JkaW5hdGVzIEZsYXQgY29vcmRpbmF0ZXMuXG4gKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0IE9mZnNldC5cbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gZW5kcyBFbmRzLlxuICogQHBhcmFtIHtudW1iZXJ9IHN0cmlkZSBTdHJpZGUuXG4gKiBAcGFyYW0ge251bWJlcn0gbSBNLlxuICogQHBhcmFtIHtib29sZWFufSBleHRyYXBvbGF0ZSBFeHRyYXBvbGF0ZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW50ZXJwb2xhdGUgSW50ZXJwb2xhdGUuXG4gKiBAcmV0dXJuIHtpbXBvcnQoXCIuLi8uLi9jb29yZGluYXRlLmpzXCIpLkNvb3JkaW5hdGV8bnVsbH0gQ29vcmRpbmF0ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxpbmVTdHJpbmdzQ29vcmRpbmF0ZUF0TShcbiAgZmxhdENvb3JkaW5hdGVzLFxuICBvZmZzZXQsXG4gIGVuZHMsXG4gIHN0cmlkZSxcbiAgbSxcbiAgZXh0cmFwb2xhdGUsXG4gIGludGVycG9sYXRlLFxuKSB7XG4gIGlmIChpbnRlcnBvbGF0ZSkge1xuICAgIHJldHVybiBsaW5lU3RyaW5nQ29vcmRpbmF0ZUF0TShcbiAgICAgIGZsYXRDb29yZGluYXRlcyxcbiAgICAgIG9mZnNldCxcbiAgICAgIGVuZHNbZW5kcy5sZW5ndGggLSAxXSxcbiAgICAgIHN0cmlkZSxcbiAgICAgIG0sXG4gICAgICBleHRyYXBvbGF0ZSxcbiAgICApO1xuICB9XG4gIGxldCBjb29yZGluYXRlO1xuICBpZiAobSA8IGZsYXRDb29yZGluYXRlc1tzdHJpZGUgLSAxXSkge1xuICAgIGlmIChleHRyYXBvbGF0ZSkge1xuICAgICAgY29vcmRpbmF0ZSA9IGZsYXRDb29yZGluYXRlcy5zbGljZSgwLCBzdHJpZGUpO1xuICAgICAgY29vcmRpbmF0ZVtzdHJpZGUgLSAxXSA9IG07XG4gICAgICByZXR1cm4gY29vcmRpbmF0ZTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKGZsYXRDb29yZGluYXRlc1tmbGF0Q29vcmRpbmF0ZXMubGVuZ3RoIC0gMV0gPCBtKSB7XG4gICAgaWYgKGV4dHJhcG9sYXRlKSB7XG4gICAgICBjb29yZGluYXRlID0gZmxhdENvb3JkaW5hdGVzLnNsaWNlKGZsYXRDb29yZGluYXRlcy5sZW5ndGggLSBzdHJpZGUpO1xuICAgICAgY29vcmRpbmF0ZVtzdHJpZGUgLSAxXSA9IG07XG4gICAgICByZXR1cm4gY29vcmRpbmF0ZTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDAsIGlpID0gZW5kcy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgY29uc3QgZW5kID0gZW5kc1tpXTtcbiAgICBpZiAob2Zmc2V0ID09IGVuZCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChtIDwgZmxhdENvb3JkaW5hdGVzW29mZnNldCArIHN0cmlkZSAtIDFdKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKG0gPD0gZmxhdENvb3JkaW5hdGVzW2VuZCAtIDFdKSB7XG4gICAgICByZXR1cm4gbGluZVN0cmluZ0Nvb3JkaW5hdGVBdE0oXG4gICAgICAgIGZsYXRDb29yZGluYXRlcyxcbiAgICAgICAgb2Zmc2V0LFxuICAgICAgICBlbmQsXG4gICAgICAgIHN0cmlkZSxcbiAgICAgICAgbSxcbiAgICAgICAgZmFsc2UsXG4gICAgICApO1xuICAgIH1cbiAgICBvZmZzZXQgPSBlbmQ7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG4iLCIvKipcbiAqIEBtb2R1bGUgb2wvZ2VvbS9mbGF0L2ludGVyc2VjdHNleHRlbnRcbiAqL1xuaW1wb3J0IHtcbiAgY29udGFpbnNFeHRlbnQsXG4gIGNyZWF0ZUVtcHR5LFxuICBleHRlbmRGbGF0Q29vcmRpbmF0ZXMsXG4gIGludGVyc2VjdHMsXG4gIGludGVyc2VjdHNTZWdtZW50LFxufSBmcm9tICcuLi8uLi9leHRlbnQuanMnO1xuaW1wb3J0IHtmb3JFYWNoIGFzIGZvckVhY2hTZWdtZW50fSBmcm9tICcuL3NlZ21lbnRzLmpzJztcbmltcG9ydCB7bGluZWFyUmluZ0NvbnRhaW5zRXh0ZW50LCBsaW5lYXJSaW5nQ29udGFpbnNYWX0gZnJvbSAnLi9jb250YWlucy5qcyc7XG5cbi8qKlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBmbGF0Q29vcmRpbmF0ZXMgRmxhdCBjb29yZGluYXRlcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQgT2Zmc2V0LlxuICogQHBhcmFtIHtudW1iZXJ9IGVuZCBFbmQuXG4gKiBAcGFyYW0ge251bWJlcn0gc3RyaWRlIFN0cmlkZS5cbiAqIEBwYXJhbSB7aW1wb3J0KFwiLi4vLi4vZXh0ZW50LmpzXCIpLkV4dGVudH0gZXh0ZW50IEV4dGVudC5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIGdlb21ldHJ5IGFuZCB0aGUgZXh0ZW50IGludGVyc2VjdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludGVyc2VjdHNMaW5lU3RyaW5nKFxuICBmbGF0Q29vcmRpbmF0ZXMsXG4gIG9mZnNldCxcbiAgZW5kLFxuICBzdHJpZGUsXG4gIGV4dGVudCxcbikge1xuICBjb25zdCBjb29yZGluYXRlc0V4dGVudCA9IGV4dGVuZEZsYXRDb29yZGluYXRlcyhcbiAgICBjcmVhdGVFbXB0eSgpLFxuICAgIGZsYXRDb29yZGluYXRlcyxcbiAgICBvZmZzZXQsXG4gICAgZW5kLFxuICAgIHN0cmlkZSxcbiAgKTtcbiAgaWYgKCFpbnRlcnNlY3RzKGV4dGVudCwgY29vcmRpbmF0ZXNFeHRlbnQpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChjb250YWluc0V4dGVudChleHRlbnQsIGNvb3JkaW5hdGVzRXh0ZW50KSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmIChjb29yZGluYXRlc0V4dGVudFswXSA+PSBleHRlbnRbMF0gJiYgY29vcmRpbmF0ZXNFeHRlbnRbMl0gPD0gZXh0ZW50WzJdKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKGNvb3JkaW5hdGVzRXh0ZW50WzFdID49IGV4dGVudFsxXSAmJiBjb29yZGluYXRlc0V4dGVudFszXSA8PSBleHRlbnRbM10pIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZm9yRWFjaFNlZ21lbnQoXG4gICAgZmxhdENvb3JkaW5hdGVzLFxuICAgIG9mZnNldCxcbiAgICBlbmQsXG4gICAgc3RyaWRlLFxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7aW1wb3J0KFwiLi4vLi4vY29vcmRpbmF0ZS5qc1wiKS5Db29yZGluYXRlfSBwb2ludDEgU3RhcnQgcG9pbnQuXG4gICAgICogQHBhcmFtIHtpbXBvcnQoXCIuLi8uLi9jb29yZGluYXRlLmpzXCIpLkNvb3JkaW5hdGV9IHBvaW50MiBFbmQgcG9pbnQuXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gYHRydWVgIGlmIHRoZSBzZWdtZW50IGFuZCB0aGUgZXh0ZW50IGludGVyc2VjdCxcbiAgICAgKiAgICAgYGZhbHNlYCBvdGhlcndpc2UuXG4gICAgICovXG4gICAgZnVuY3Rpb24gKHBvaW50MSwgcG9pbnQyKSB7XG4gICAgICByZXR1cm4gaW50ZXJzZWN0c1NlZ21lbnQoZXh0ZW50LCBwb2ludDEsIHBvaW50Mik7XG4gICAgfSxcbiAgKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGZsYXRDb29yZGluYXRlcyBGbGF0IGNvb3JkaW5hdGVzLlxuICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldCBPZmZzZXQuXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGVuZHMgRW5kcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzdHJpZGUgU3RyaWRlLlxuICogQHBhcmFtIHtpbXBvcnQoXCIuLi8uLi9leHRlbnQuanNcIikuRXh0ZW50fSBleHRlbnQgRXh0ZW50LlxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgZ2VvbWV0cnkgYW5kIHRoZSBleHRlbnQgaW50ZXJzZWN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJzZWN0c0xpbmVTdHJpbmdBcnJheShcbiAgZmxhdENvb3JkaW5hdGVzLFxuICBvZmZzZXQsXG4gIGVuZHMsXG4gIHN0cmlkZSxcbiAgZXh0ZW50LFxuKSB7XG4gIGZvciAobGV0IGkgPSAwLCBpaSA9IGVuZHMubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgIGlmIChcbiAgICAgIGludGVyc2VjdHNMaW5lU3RyaW5nKGZsYXRDb29yZGluYXRlcywgb2Zmc2V0LCBlbmRzW2ldLCBzdHJpZGUsIGV4dGVudClcbiAgICApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBvZmZzZXQgPSBlbmRzW2ldO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGZsYXRDb29yZGluYXRlcyBGbGF0IGNvb3JkaW5hdGVzLlxuICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldCBPZmZzZXQuXG4gKiBAcGFyYW0ge251bWJlcn0gZW5kIEVuZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzdHJpZGUgU3RyaWRlLlxuICogQHBhcmFtIHtpbXBvcnQoXCIuLi8uLi9leHRlbnQuanNcIikuRXh0ZW50fSBleHRlbnQgRXh0ZW50LlxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgZ2VvbWV0cnkgYW5kIHRoZSBleHRlbnQgaW50ZXJzZWN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJzZWN0c0xpbmVhclJpbmcoXG4gIGZsYXRDb29yZGluYXRlcyxcbiAgb2Zmc2V0LFxuICBlbmQsXG4gIHN0cmlkZSxcbiAgZXh0ZW50LFxuKSB7XG4gIGlmIChpbnRlcnNlY3RzTGluZVN0cmluZyhmbGF0Q29vcmRpbmF0ZXMsIG9mZnNldCwgZW5kLCBzdHJpZGUsIGV4dGVudCkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAoXG4gICAgbGluZWFyUmluZ0NvbnRhaW5zWFkoXG4gICAgICBmbGF0Q29vcmRpbmF0ZXMsXG4gICAgICBvZmZzZXQsXG4gICAgICBlbmQsXG4gICAgICBzdHJpZGUsXG4gICAgICBleHRlbnRbMF0sXG4gICAgICBleHRlbnRbMV0sXG4gICAgKVxuICApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAoXG4gICAgbGluZWFyUmluZ0NvbnRhaW5zWFkoXG4gICAgICBmbGF0Q29vcmRpbmF0ZXMsXG4gICAgICBvZmZzZXQsXG4gICAgICBlbmQsXG4gICAgICBzdHJpZGUsXG4gICAgICBleHRlbnRbMF0sXG4gICAgICBleHRlbnRbM10sXG4gICAgKVxuICApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAoXG4gICAgbGluZWFyUmluZ0NvbnRhaW5zWFkoXG4gICAgICBmbGF0Q29vcmRpbmF0ZXMsXG4gICAgICBvZmZzZXQsXG4gICAgICBlbmQsXG4gICAgICBzdHJpZGUsXG4gICAgICBleHRlbnRbMl0sXG4gICAgICBleHRlbnRbMV0sXG4gICAgKVxuICApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAoXG4gICAgbGluZWFyUmluZ0NvbnRhaW5zWFkoXG4gICAgICBmbGF0Q29vcmRpbmF0ZXMsXG4gICAgICBvZmZzZXQsXG4gICAgICBlbmQsXG4gICAgICBzdHJpZGUsXG4gICAgICBleHRlbnRbMl0sXG4gICAgICBleHRlbnRbM10sXG4gICAgKVxuICApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBmbGF0Q29vcmRpbmF0ZXMgRmxhdCBjb29yZGluYXRlcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQgT2Zmc2V0LlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBlbmRzIEVuZHMuXG4gKiBAcGFyYW0ge251bWJlcn0gc3RyaWRlIFN0cmlkZS5cbiAqIEBwYXJhbSB7aW1wb3J0KFwiLi4vLi4vZXh0ZW50LmpzXCIpLkV4dGVudH0gZXh0ZW50IEV4dGVudC5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIGdlb21ldHJ5IGFuZCB0aGUgZXh0ZW50IGludGVyc2VjdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludGVyc2VjdHNMaW5lYXJSaW5nQXJyYXkoXG4gIGZsYXRDb29yZGluYXRlcyxcbiAgb2Zmc2V0LFxuICBlbmRzLFxuICBzdHJpZGUsXG4gIGV4dGVudCxcbikge1xuICBpZiAoIWludGVyc2VjdHNMaW5lYXJSaW5nKGZsYXRDb29yZGluYXRlcywgb2Zmc2V0LCBlbmRzWzBdLCBzdHJpZGUsIGV4dGVudCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGVuZHMubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDEsIGlpID0gZW5kcy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgaWYgKFxuICAgICAgbGluZWFyUmluZ0NvbnRhaW5zRXh0ZW50KFxuICAgICAgICBmbGF0Q29vcmRpbmF0ZXMsXG4gICAgICAgIGVuZHNbaSAtIDFdLFxuICAgICAgICBlbmRzW2ldLFxuICAgICAgICBzdHJpZGUsXG4gICAgICAgIGV4dGVudCxcbiAgICAgIClcbiAgICApIHtcbiAgICAgIGlmIChcbiAgICAgICAgIWludGVyc2VjdHNMaW5lU3RyaW5nKFxuICAgICAgICAgIGZsYXRDb29yZGluYXRlcyxcbiAgICAgICAgICBlbmRzW2kgLSAxXSxcbiAgICAgICAgICBlbmRzW2ldLFxuICAgICAgICAgIHN0cmlkZSxcbiAgICAgICAgICBleHRlbnQsXG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gZmxhdENvb3JkaW5hdGVzIEZsYXQgY29vcmRpbmF0ZXMuXG4gKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0IE9mZnNldC5cbiAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8bnVtYmVyPj59IGVuZHNzIEVuZHNzLlxuICogQHBhcmFtIHtudW1iZXJ9IHN0cmlkZSBTdHJpZGUuXG4gKiBAcGFyYW0ge2ltcG9ydChcIi4uLy4uL2V4dGVudC5qc1wiKS5FeHRlbnR9IGV4dGVudCBFeHRlbnQuXG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSBnZW9tZXRyeSBhbmQgdGhlIGV4dGVudCBpbnRlcnNlY3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnNlY3RzTGluZWFyUmluZ011bHRpQXJyYXkoXG4gIGZsYXRDb29yZGluYXRlcyxcbiAgb2Zmc2V0LFxuICBlbmRzcyxcbiAgc3RyaWRlLFxuICBleHRlbnQsXG4pIHtcbiAgZm9yIChsZXQgaSA9IDAsIGlpID0gZW5kc3MubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgIGNvbnN0IGVuZHMgPSBlbmRzc1tpXTtcbiAgICBpZiAoXG4gICAgICBpbnRlcnNlY3RzTGluZWFyUmluZ0FycmF5KGZsYXRDb29yZGluYXRlcywgb2Zmc2V0LCBlbmRzLCBzdHJpZGUsIGV4dGVudClcbiAgICApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBvZmZzZXQgPSBlbmRzW2VuZHMubGVuZ3RoIC0gMV07XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuIiwiLyoqXG4gKiBAbW9kdWxlIG9sL2dlb20vZmxhdC9sZW5ndGhcbiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gZmxhdENvb3JkaW5hdGVzIEZsYXQgY29vcmRpbmF0ZXMuXG4gKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0IE9mZnNldC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBlbmQgRW5kLlxuICogQHBhcmFtIHtudW1iZXJ9IHN0cmlkZSBTdHJpZGUuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IExlbmd0aC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxpbmVTdHJpbmdMZW5ndGgoZmxhdENvb3JkaW5hdGVzLCBvZmZzZXQsIGVuZCwgc3RyaWRlKSB7XG4gIGxldCB4MSA9IGZsYXRDb29yZGluYXRlc1tvZmZzZXRdO1xuICBsZXQgeTEgPSBmbGF0Q29vcmRpbmF0ZXNbb2Zmc2V0ICsgMV07XG4gIGxldCBsZW5ndGggPSAwO1xuICBmb3IgKGxldCBpID0gb2Zmc2V0ICsgc3RyaWRlOyBpIDwgZW5kOyBpICs9IHN0cmlkZSkge1xuICAgIGNvbnN0IHgyID0gZmxhdENvb3JkaW5hdGVzW2ldO1xuICAgIGNvbnN0IHkyID0gZmxhdENvb3JkaW5hdGVzW2kgKyAxXTtcbiAgICBsZW5ndGggKz0gTWF0aC5zcXJ0KCh4MiAtIHgxKSAqICh4MiAtIHgxKSArICh5MiAtIHkxKSAqICh5MiAtIHkxKSk7XG4gICAgeDEgPSB4MjtcbiAgICB5MSA9IHkyO1xuICB9XG4gIHJldHVybiBsZW5ndGg7XG59XG5cbi8qKlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBmbGF0Q29vcmRpbmF0ZXMgRmxhdCBjb29yZGluYXRlcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQgT2Zmc2V0LlxuICogQHBhcmFtIHtudW1iZXJ9IGVuZCBFbmQuXG4gKiBAcGFyYW0ge251bWJlcn0gc3RyaWRlIFN0cmlkZS5cbiAqIEByZXR1cm4ge251bWJlcn0gUGVyaW1ldGVyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbGluZWFyUmluZ0xlbmd0aChmbGF0Q29vcmRpbmF0ZXMsIG9mZnNldCwgZW5kLCBzdHJpZGUpIHtcbiAgbGV0IHBlcmltZXRlciA9IGxpbmVTdHJpbmdMZW5ndGgoZmxhdENvb3JkaW5hdGVzLCBvZmZzZXQsIGVuZCwgc3RyaWRlKTtcbiAgY29uc3QgZHggPSBmbGF0Q29vcmRpbmF0ZXNbZW5kIC0gc3RyaWRlXSAtIGZsYXRDb29yZGluYXRlc1tvZmZzZXRdO1xuICBjb25zdCBkeSA9IGZsYXRDb29yZGluYXRlc1tlbmQgLSBzdHJpZGUgKyAxXSAtIGZsYXRDb29yZGluYXRlc1tvZmZzZXQgKyAxXTtcbiAgcGVyaW1ldGVyICs9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gIHJldHVybiBwZXJpbWV0ZXI7XG59XG4iLCIvKipcbiAqIEBtb2R1bGUgb2wvZ2VvbS9mbGF0L3NlZ21lbnRzXG4gKi9cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGNhbGxzIGBjYWxsYmFja2AgZm9yIGVhY2ggc2VnbWVudCBvZiB0aGUgZmxhdCBjb29yZGluYXRlc1xuICogYXJyYXkuIElmIHRoZSBjYWxsYmFjayByZXR1cm5zIGEgdHJ1dGh5IHZhbHVlIHRoZSBmdW5jdGlvbiByZXR1cm5zIHRoYXRcbiAqIHZhbHVlIGltbWVkaWF0ZWx5LiBPdGhlcndpc2UgdGhlIGZ1bmN0aW9uIHJldHVybnMgYGZhbHNlYC5cbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gZmxhdENvb3JkaW5hdGVzIEZsYXQgY29vcmRpbmF0ZXMuXG4gKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0IE9mZnNldC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBlbmQgRW5kLlxuICogQHBhcmFtIHtudW1iZXJ9IHN0cmlkZSBTdHJpZGUuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKGltcG9ydChcIi4uLy4uL2Nvb3JkaW5hdGUuanNcIikuQ29vcmRpbmF0ZSwgaW1wb3J0KFwiLi4vLi4vY29vcmRpbmF0ZS5qc1wiKS5Db29yZGluYXRlKTogVH0gY2FsbGJhY2sgRnVuY3Rpb25cbiAqICAgICBjYWxsZWQgZm9yIGVhY2ggc2VnbWVudC5cbiAqIEByZXR1cm4ge1R8Ym9vbGVhbn0gVmFsdWUuXG4gKiBAdGVtcGxhdGUgVFxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9yRWFjaChmbGF0Q29vcmRpbmF0ZXMsIG9mZnNldCwgZW5kLCBzdHJpZGUsIGNhbGxiYWNrKSB7XG4gIGxldCByZXQ7XG4gIG9mZnNldCArPSBzdHJpZGU7XG4gIGZvciAoOyBvZmZzZXQgPCBlbmQ7IG9mZnNldCArPSBzdHJpZGUpIHtcbiAgICByZXQgPSBjYWxsYmFjayhcbiAgICAgIGZsYXRDb29yZGluYXRlcy5zbGljZShvZmZzZXQgLSBzdHJpZGUsIG9mZnNldCksXG4gICAgICBmbGF0Q29vcmRpbmF0ZXMuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKyBzdHJpZGUpLFxuICAgICk7XG4gICAgaWYgKHJldCkge1xuICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuIiwiLyoqXG4gKiBAbW9kdWxlIG9sL2dlb20vZmxhdC9zaW1wbGlmeVxuICovXG4vLyBCYXNlZCBvbiBzaW1wbGlmeS1qcyBodHRwczovL2dpdGh1Yi5jb20vbW91cm5lci9zaW1wbGlmeS1qc1xuLy8gQ29weXJpZ2h0IChjKSAyMDEyLCBWbGFkaW1pciBBZ2Fmb25raW5cbi8vIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vL1xuLy8gUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4vLyBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbi8vXG4vLyAgICAxLiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4vLyAgICAgICB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuLy9cbi8vICAgIDIuIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0XG4vLyAgICAgICBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlXG4vLyAgICAgICBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuLy9cbi8vIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiXG4vLyBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFXG4vLyBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRVxuLy8gQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRVxuLy8gTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUlxuLy8gQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0Zcbi8vIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTU1xuLy8gSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU5cbi8vIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXG4vLyBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRVxuLy8gUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG5cbmltcG9ydCB7c3F1YXJlZERpc3RhbmNlLCBzcXVhcmVkU2VnbWVudERpc3RhbmNlfSBmcm9tICcuLi8uLi9tYXRoLmpzJztcblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGZsYXRDb29yZGluYXRlcyBGbGF0IGNvb3JkaW5hdGVzLlxuICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldCBPZmZzZXQuXG4gKiBAcGFyYW0ge251bWJlcn0gZW5kIEVuZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzdHJpZGUgU3RyaWRlLlxuICogQHBhcmFtIHtudW1iZXJ9IHNxdWFyZWRUb2xlcmFuY2UgU3F1YXJlZCB0b2xlcmFuY2UuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGhpZ2hRdWFsaXR5IEhpZ2hlc3QgcXVhbGl0eS5cbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gW3NpbXBsaWZpZWRGbGF0Q29vcmRpbmF0ZXNdIFNpbXBsaWZpZWQgZmxhdFxuICogICAgIGNvb3JkaW5hdGVzLlxuICogQHJldHVybiB7QXJyYXk8bnVtYmVyPn0gU2ltcGxpZmllZCBsaW5lIHN0cmluZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNpbXBsaWZ5TGluZVN0cmluZyhcbiAgZmxhdENvb3JkaW5hdGVzLFxuICBvZmZzZXQsXG4gIGVuZCxcbiAgc3RyaWRlLFxuICBzcXVhcmVkVG9sZXJhbmNlLFxuICBoaWdoUXVhbGl0eSxcbiAgc2ltcGxpZmllZEZsYXRDb29yZGluYXRlcyxcbikge1xuICBzaW1wbGlmaWVkRmxhdENvb3JkaW5hdGVzID1cbiAgICBzaW1wbGlmaWVkRmxhdENvb3JkaW5hdGVzICE9PSB1bmRlZmluZWQgPyBzaW1wbGlmaWVkRmxhdENvb3JkaW5hdGVzIDogW107XG4gIGlmICghaGlnaFF1YWxpdHkpIHtcbiAgICBlbmQgPSByYWRpYWxEaXN0YW5jZShcbiAgICAgIGZsYXRDb29yZGluYXRlcyxcbiAgICAgIG9mZnNldCxcbiAgICAgIGVuZCxcbiAgICAgIHN0cmlkZSxcbiAgICAgIHNxdWFyZWRUb2xlcmFuY2UsXG4gICAgICBzaW1wbGlmaWVkRmxhdENvb3JkaW5hdGVzLFxuICAgICAgMCxcbiAgICApO1xuICAgIGZsYXRDb29yZGluYXRlcyA9IHNpbXBsaWZpZWRGbGF0Q29vcmRpbmF0ZXM7XG4gICAgb2Zmc2V0ID0gMDtcbiAgICBzdHJpZGUgPSAyO1xuICB9XG4gIHNpbXBsaWZpZWRGbGF0Q29vcmRpbmF0ZXMubGVuZ3RoID0gZG91Z2xhc1BldWNrZXIoXG4gICAgZmxhdENvb3JkaW5hdGVzLFxuICAgIG9mZnNldCxcbiAgICBlbmQsXG4gICAgc3RyaWRlLFxuICAgIHNxdWFyZWRUb2xlcmFuY2UsXG4gICAgc2ltcGxpZmllZEZsYXRDb29yZGluYXRlcyxcbiAgICAwLFxuICApO1xuICByZXR1cm4gc2ltcGxpZmllZEZsYXRDb29yZGluYXRlcztcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGZsYXRDb29yZGluYXRlcyBGbGF0IGNvb3JkaW5hdGVzLlxuICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldCBPZmZzZXQuXG4gKiBAcGFyYW0ge251bWJlcn0gZW5kIEVuZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzdHJpZGUgU3RyaWRlLlxuICogQHBhcmFtIHtudW1iZXJ9IHNxdWFyZWRUb2xlcmFuY2UgU3F1YXJlZCB0b2xlcmFuY2UuXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHNpbXBsaWZpZWRGbGF0Q29vcmRpbmF0ZXMgU2ltcGxpZmllZCBmbGF0XG4gKiAgICAgY29vcmRpbmF0ZXMuXG4gKiBAcGFyYW0ge251bWJlcn0gc2ltcGxpZmllZE9mZnNldCBTaW1wbGlmaWVkIG9mZnNldC5cbiAqIEByZXR1cm4ge251bWJlcn0gU2ltcGxpZmllZCBvZmZzZXQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkb3VnbGFzUGV1Y2tlcihcbiAgZmxhdENvb3JkaW5hdGVzLFxuICBvZmZzZXQsXG4gIGVuZCxcbiAgc3RyaWRlLFxuICBzcXVhcmVkVG9sZXJhbmNlLFxuICBzaW1wbGlmaWVkRmxhdENvb3JkaW5hdGVzLFxuICBzaW1wbGlmaWVkT2Zmc2V0LFxuKSB7XG4gIGNvbnN0IG4gPSAoZW5kIC0gb2Zmc2V0KSAvIHN0cmlkZTtcbiAgaWYgKG4gPCAzKSB7XG4gICAgZm9yICg7IG9mZnNldCA8IGVuZDsgb2Zmc2V0ICs9IHN0cmlkZSkge1xuICAgICAgc2ltcGxpZmllZEZsYXRDb29yZGluYXRlc1tzaW1wbGlmaWVkT2Zmc2V0KytdID0gZmxhdENvb3JkaW5hdGVzW29mZnNldF07XG4gICAgICBzaW1wbGlmaWVkRmxhdENvb3JkaW5hdGVzW3NpbXBsaWZpZWRPZmZzZXQrK10gPVxuICAgICAgICBmbGF0Q29vcmRpbmF0ZXNbb2Zmc2V0ICsgMV07XG4gICAgfVxuICAgIHJldHVybiBzaW1wbGlmaWVkT2Zmc2V0O1xuICB9XG4gIC8qKiBAdHlwZSB7QXJyYXk8bnVtYmVyPn0gKi9cbiAgY29uc3QgbWFya2VycyA9IG5ldyBBcnJheShuKTtcbiAgbWFya2Vyc1swXSA9IDE7XG4gIG1hcmtlcnNbbiAtIDFdID0gMTtcbiAgLyoqIEB0eXBlIHtBcnJheTxudW1iZXI+fSAqL1xuICBjb25zdCBzdGFjayA9IFtvZmZzZXQsIGVuZCAtIHN0cmlkZV07XG4gIGxldCBpbmRleCA9IDA7XG4gIHdoaWxlIChzdGFjay5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgbGFzdCA9IHN0YWNrLnBvcCgpO1xuICAgIGNvbnN0IGZpcnN0ID0gc3RhY2sucG9wKCk7XG4gICAgbGV0IG1heFNxdWFyZWREaXN0YW5jZSA9IDA7XG4gICAgY29uc3QgeDEgPSBmbGF0Q29vcmRpbmF0ZXNbZmlyc3RdO1xuICAgIGNvbnN0IHkxID0gZmxhdENvb3JkaW5hdGVzW2ZpcnN0ICsgMV07XG4gICAgY29uc3QgeDIgPSBmbGF0Q29vcmRpbmF0ZXNbbGFzdF07XG4gICAgY29uc3QgeTIgPSBmbGF0Q29vcmRpbmF0ZXNbbGFzdCArIDFdO1xuICAgIGZvciAobGV0IGkgPSBmaXJzdCArIHN0cmlkZTsgaSA8IGxhc3Q7IGkgKz0gc3RyaWRlKSB7XG4gICAgICBjb25zdCB4ID0gZmxhdENvb3JkaW5hdGVzW2ldO1xuICAgICAgY29uc3QgeSA9IGZsYXRDb29yZGluYXRlc1tpICsgMV07XG4gICAgICBjb25zdCBzcXVhcmVkRGlzdGFuY2UgPSBzcXVhcmVkU2VnbWVudERpc3RhbmNlKHgsIHksIHgxLCB5MSwgeDIsIHkyKTtcbiAgICAgIGlmIChzcXVhcmVkRGlzdGFuY2UgPiBtYXhTcXVhcmVkRGlzdGFuY2UpIHtcbiAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICBtYXhTcXVhcmVkRGlzdGFuY2UgPSBzcXVhcmVkRGlzdGFuY2U7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChtYXhTcXVhcmVkRGlzdGFuY2UgPiBzcXVhcmVkVG9sZXJhbmNlKSB7XG4gICAgICBtYXJrZXJzWyhpbmRleCAtIG9mZnNldCkgLyBzdHJpZGVdID0gMTtcbiAgICAgIGlmIChmaXJzdCArIHN0cmlkZSA8IGluZGV4KSB7XG4gICAgICAgIHN0YWNrLnB1c2goZmlyc3QsIGluZGV4KTtcbiAgICAgIH1cbiAgICAgIGlmIChpbmRleCArIHN0cmlkZSA8IGxhc3QpIHtcbiAgICAgICAgc3RhY2sucHVzaChpbmRleCwgbGFzdCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgaWYgKG1hcmtlcnNbaV0pIHtcbiAgICAgIHNpbXBsaWZpZWRGbGF0Q29vcmRpbmF0ZXNbc2ltcGxpZmllZE9mZnNldCsrXSA9XG4gICAgICAgIGZsYXRDb29yZGluYXRlc1tvZmZzZXQgKyBpICogc3RyaWRlXTtcbiAgICAgIHNpbXBsaWZpZWRGbGF0Q29vcmRpbmF0ZXNbc2ltcGxpZmllZE9mZnNldCsrXSA9XG4gICAgICAgIGZsYXRDb29yZGluYXRlc1tvZmZzZXQgKyBpICogc3RyaWRlICsgMV07XG4gICAgfVxuICB9XG4gIHJldHVybiBzaW1wbGlmaWVkT2Zmc2V0O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gZmxhdENvb3JkaW5hdGVzIEZsYXQgY29vcmRpbmF0ZXMuXG4gKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0IE9mZnNldC5cbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gZW5kcyBFbmRzLlxuICogQHBhcmFtIHtudW1iZXJ9IHN0cmlkZSBTdHJpZGUuXG4gKiBAcGFyYW0ge251bWJlcn0gc3F1YXJlZFRvbGVyYW5jZSBTcXVhcmVkIHRvbGVyYW5jZS5cbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gc2ltcGxpZmllZEZsYXRDb29yZGluYXRlcyBTaW1wbGlmaWVkIGZsYXRcbiAqICAgICBjb29yZGluYXRlcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzaW1wbGlmaWVkT2Zmc2V0IFNpbXBsaWZpZWQgb2Zmc2V0LlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBzaW1wbGlmaWVkRW5kcyBTaW1wbGlmaWVkIGVuZHMuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFNpbXBsaWZpZWQgb2Zmc2V0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZG91Z2xhc1BldWNrZXJBcnJheShcbiAgZmxhdENvb3JkaW5hdGVzLFxuICBvZmZzZXQsXG4gIGVuZHMsXG4gIHN0cmlkZSxcbiAgc3F1YXJlZFRvbGVyYW5jZSxcbiAgc2ltcGxpZmllZEZsYXRDb29yZGluYXRlcyxcbiAgc2ltcGxpZmllZE9mZnNldCxcbiAgc2ltcGxpZmllZEVuZHMsXG4pIHtcbiAgZm9yIChsZXQgaSA9IDAsIGlpID0gZW5kcy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgY29uc3QgZW5kID0gZW5kc1tpXTtcbiAgICBzaW1wbGlmaWVkT2Zmc2V0ID0gZG91Z2xhc1BldWNrZXIoXG4gICAgICBmbGF0Q29vcmRpbmF0ZXMsXG4gICAgICBvZmZzZXQsXG4gICAgICBlbmQsXG4gICAgICBzdHJpZGUsXG4gICAgICBzcXVhcmVkVG9sZXJhbmNlLFxuICAgICAgc2ltcGxpZmllZEZsYXRDb29yZGluYXRlcyxcbiAgICAgIHNpbXBsaWZpZWRPZmZzZXQsXG4gICAgKTtcbiAgICBzaW1wbGlmaWVkRW5kcy5wdXNoKHNpbXBsaWZpZWRPZmZzZXQpO1xuICAgIG9mZnNldCA9IGVuZDtcbiAgfVxuICByZXR1cm4gc2ltcGxpZmllZE9mZnNldDtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGZsYXRDb29yZGluYXRlcyBGbGF0IGNvb3JkaW5hdGVzLlxuICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldCBPZmZzZXQuXG4gKiBAcGFyYW0ge0FycmF5PEFycmF5PG51bWJlcj4+fSBlbmRzcyBFbmRzcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzdHJpZGUgU3RyaWRlLlxuICogQHBhcmFtIHtudW1iZXJ9IHNxdWFyZWRUb2xlcmFuY2UgU3F1YXJlZCB0b2xlcmFuY2UuXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHNpbXBsaWZpZWRGbGF0Q29vcmRpbmF0ZXMgU2ltcGxpZmllZCBmbGF0XG4gKiAgICAgY29vcmRpbmF0ZXMuXG4gKiBAcGFyYW0ge251bWJlcn0gc2ltcGxpZmllZE9mZnNldCBTaW1wbGlmaWVkIG9mZnNldC5cbiAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8bnVtYmVyPj59IHNpbXBsaWZpZWRFbmRzcyBTaW1wbGlmaWVkIGVuZHNzLlxuICogQHJldHVybiB7bnVtYmVyfSBTaW1wbGlmaWVkIG9mZnNldC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRvdWdsYXNQZXVja2VyTXVsdGlBcnJheShcbiAgZmxhdENvb3JkaW5hdGVzLFxuICBvZmZzZXQsXG4gIGVuZHNzLFxuICBzdHJpZGUsXG4gIHNxdWFyZWRUb2xlcmFuY2UsXG4gIHNpbXBsaWZpZWRGbGF0Q29vcmRpbmF0ZXMsXG4gIHNpbXBsaWZpZWRPZmZzZXQsXG4gIHNpbXBsaWZpZWRFbmRzcyxcbikge1xuICBmb3IgKGxldCBpID0gMCwgaWkgPSBlbmRzcy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgY29uc3QgZW5kcyA9IGVuZHNzW2ldO1xuICAgIC8qKiBAdHlwZSB7QXJyYXk8bnVtYmVyPn0gKi9cbiAgICBjb25zdCBzaW1wbGlmaWVkRW5kcyA9IFtdO1xuICAgIHNpbXBsaWZpZWRPZmZzZXQgPSBkb3VnbGFzUGV1Y2tlckFycmF5KFxuICAgICAgZmxhdENvb3JkaW5hdGVzLFxuICAgICAgb2Zmc2V0LFxuICAgICAgZW5kcyxcbiAgICAgIHN0cmlkZSxcbiAgICAgIHNxdWFyZWRUb2xlcmFuY2UsXG4gICAgICBzaW1wbGlmaWVkRmxhdENvb3JkaW5hdGVzLFxuICAgICAgc2ltcGxpZmllZE9mZnNldCxcbiAgICAgIHNpbXBsaWZpZWRFbmRzLFxuICAgICk7XG4gICAgc2ltcGxpZmllZEVuZHNzLnB1c2goc2ltcGxpZmllZEVuZHMpO1xuICAgIG9mZnNldCA9IGVuZHNbZW5kcy5sZW5ndGggLSAxXTtcbiAgfVxuICByZXR1cm4gc2ltcGxpZmllZE9mZnNldDtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGZsYXRDb29yZGluYXRlcyBGbGF0IGNvb3JkaW5hdGVzLlxuICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldCBPZmZzZXQuXG4gKiBAcGFyYW0ge251bWJlcn0gZW5kIEVuZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzdHJpZGUgU3RyaWRlLlxuICogQHBhcmFtIHtudW1iZXJ9IHNxdWFyZWRUb2xlcmFuY2UgU3F1YXJlZCB0b2xlcmFuY2UuXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHNpbXBsaWZpZWRGbGF0Q29vcmRpbmF0ZXMgU2ltcGxpZmllZCBmbGF0XG4gKiAgICAgY29vcmRpbmF0ZXMuXG4gKiBAcGFyYW0ge251bWJlcn0gc2ltcGxpZmllZE9mZnNldCBTaW1wbGlmaWVkIG9mZnNldC5cbiAqIEByZXR1cm4ge251bWJlcn0gU2ltcGxpZmllZCBvZmZzZXQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByYWRpYWxEaXN0YW5jZShcbiAgZmxhdENvb3JkaW5hdGVzLFxuICBvZmZzZXQsXG4gIGVuZCxcbiAgc3RyaWRlLFxuICBzcXVhcmVkVG9sZXJhbmNlLFxuICBzaW1wbGlmaWVkRmxhdENvb3JkaW5hdGVzLFxuICBzaW1wbGlmaWVkT2Zmc2V0LFxuKSB7XG4gIGlmIChlbmQgPD0gb2Zmc2V0ICsgc3RyaWRlKSB7XG4gICAgLy8gemVybyBvciBvbmUgcG9pbnQsIG5vIHNpbXBsaWZpY2F0aW9uIHBvc3NpYmxlLCBzbyBjb3B5IGFuZCByZXR1cm5cbiAgICBmb3IgKDsgb2Zmc2V0IDwgZW5kOyBvZmZzZXQgKz0gc3RyaWRlKSB7XG4gICAgICBzaW1wbGlmaWVkRmxhdENvb3JkaW5hdGVzW3NpbXBsaWZpZWRPZmZzZXQrK10gPSBmbGF0Q29vcmRpbmF0ZXNbb2Zmc2V0XTtcbiAgICAgIHNpbXBsaWZpZWRGbGF0Q29vcmRpbmF0ZXNbc2ltcGxpZmllZE9mZnNldCsrXSA9XG4gICAgICAgIGZsYXRDb29yZGluYXRlc1tvZmZzZXQgKyAxXTtcbiAgICB9XG4gICAgcmV0dXJuIHNpbXBsaWZpZWRPZmZzZXQ7XG4gIH1cbiAgbGV0IHgxID0gZmxhdENvb3JkaW5hdGVzW29mZnNldF07XG4gIGxldCB5MSA9IGZsYXRDb29yZGluYXRlc1tvZmZzZXQgKyAxXTtcbiAgLy8gY29weSBmaXJzdCBwb2ludFxuICBzaW1wbGlmaWVkRmxhdENvb3JkaW5hdGVzW3NpbXBsaWZpZWRPZmZzZXQrK10gPSB4MTtcbiAgc2ltcGxpZmllZEZsYXRDb29yZGluYXRlc1tzaW1wbGlmaWVkT2Zmc2V0KytdID0geTE7XG4gIGxldCB4MiA9IHgxO1xuICBsZXQgeTIgPSB5MTtcbiAgZm9yIChvZmZzZXQgKz0gc3RyaWRlOyBvZmZzZXQgPCBlbmQ7IG9mZnNldCArPSBzdHJpZGUpIHtcbiAgICB4MiA9IGZsYXRDb29yZGluYXRlc1tvZmZzZXRdO1xuICAgIHkyID0gZmxhdENvb3JkaW5hdGVzW29mZnNldCArIDFdO1xuICAgIGlmIChzcXVhcmVkRGlzdGFuY2UoeDEsIHkxLCB4MiwgeTIpID4gc3F1YXJlZFRvbGVyYW5jZSkge1xuICAgICAgLy8gY29weSBwb2ludCBhdCBvZmZzZXRcbiAgICAgIHNpbXBsaWZpZWRGbGF0Q29vcmRpbmF0ZXNbc2ltcGxpZmllZE9mZnNldCsrXSA9IHgyO1xuICAgICAgc2ltcGxpZmllZEZsYXRDb29yZGluYXRlc1tzaW1wbGlmaWVkT2Zmc2V0KytdID0geTI7XG4gICAgICB4MSA9IHgyO1xuICAgICAgeTEgPSB5MjtcbiAgICB9XG4gIH1cbiAgaWYgKHgyICE9IHgxIHx8IHkyICE9IHkxKSB7XG4gICAgLy8gY29weSBsYXN0IHBvaW50XG4gICAgc2ltcGxpZmllZEZsYXRDb29yZGluYXRlc1tzaW1wbGlmaWVkT2Zmc2V0KytdID0geDI7XG4gICAgc2ltcGxpZmllZEZsYXRDb29yZGluYXRlc1tzaW1wbGlmaWVkT2Zmc2V0KytdID0geTI7XG4gIH1cbiAgcmV0dXJuIHNpbXBsaWZpZWRPZmZzZXQ7XG59XG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIFZhbHVlLlxuICogQHBhcmFtIHtudW1iZXJ9IHRvbGVyYW5jZSBUb2xlcmFuY2UuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFJvdW5kZWQgdmFsdWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzbmFwKHZhbHVlLCB0b2xlcmFuY2UpIHtcbiAgcmV0dXJuIHRvbGVyYW5jZSAqIE1hdGgucm91bmQodmFsdWUgLyB0b2xlcmFuY2UpO1xufVxuXG4vKipcbiAqIFNpbXBsaWZpZXMgYSBsaW5lIHN0cmluZyB1c2luZyBhbiBhbGdvcml0aG0gZGVzaWduZWQgYnkgVGltIFNjaGF1Yi5cbiAqIENvb3JkaW5hdGVzIGFyZSBzbmFwcGVkIHRvIHRoZSBuZWFyZXN0IHZhbHVlIGluIGEgdmlydHVhbCBncmlkIGFuZFxuICogY29uc2VjdXRpdmUgZHVwbGljYXRlIGNvb3JkaW5hdGVzIGFyZSBkaXNjYXJkZWQuICBUaGlzIGVmZmVjdGl2ZWx5IHByZXNlcnZlc1xuICogdG9wb2xvZ3kgYXMgdGhlIHNpbXBsaWZpY2F0aW9uIG9mIGFueSBzdWJzZWN0aW9uIG9mIGEgbGluZSBzdHJpbmcgaXNcbiAqIGluZGVwZW5kZW50IG9mIHRoZSByZXN0IG9mIHRoZSBsaW5lIHN0cmluZy4gIFRoaXMgbWVhbnMgdGhhdCwgZm9yIGV4YW1wbGVzLFxuICogdGhlIGNvbW1vbiBlZGdlIGJldHdlZW4gdHdvIHBvbHlnb25zIHdpbGwgYmUgc2ltcGxpZmllZCB0byB0aGUgc2FtZSBsaW5lXG4gKiBzdHJpbmcgaW5kZXBlbmRlbnRseSBpbiBib3RoIHBvbHlnb25zLiAgVGhpcyBpbXBsZW1lbnRhdGlvbiB1c2VzIGEgc2luZ2xlXG4gKiBwYXNzIG92ZXIgdGhlIGNvb3JkaW5hdGVzIGFuZCBlbGltaW5hdGVzIGludGVybWVkaWF0ZSBjb2xsaW5lYXIgcG9pbnRzLlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBmbGF0Q29vcmRpbmF0ZXMgRmxhdCBjb29yZGluYXRlcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQgT2Zmc2V0LlxuICogQHBhcmFtIHtudW1iZXJ9IGVuZCBFbmQuXG4gKiBAcGFyYW0ge251bWJlcn0gc3RyaWRlIFN0cmlkZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0b2xlcmFuY2UgVG9sZXJhbmNlLlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBzaW1wbGlmaWVkRmxhdENvb3JkaW5hdGVzIFNpbXBsaWZpZWQgZmxhdFxuICogICAgIGNvb3JkaW5hdGVzLlxuICogQHBhcmFtIHtudW1iZXJ9IHNpbXBsaWZpZWRPZmZzZXQgU2ltcGxpZmllZCBvZmZzZXQuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFNpbXBsaWZpZWQgb2Zmc2V0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gcXVhbnRpemUoXG4gIGZsYXRDb29yZGluYXRlcyxcbiAgb2Zmc2V0LFxuICBlbmQsXG4gIHN0cmlkZSxcbiAgdG9sZXJhbmNlLFxuICBzaW1wbGlmaWVkRmxhdENvb3JkaW5hdGVzLFxuICBzaW1wbGlmaWVkT2Zmc2V0LFxuKSB7XG4gIC8vIGRvIG5vdGhpbmcgaWYgdGhlIGxpbmUgaXMgZW1wdHlcbiAgaWYgKG9mZnNldCA9PSBlbmQpIHtcbiAgICByZXR1cm4gc2ltcGxpZmllZE9mZnNldDtcbiAgfVxuICAvLyBzbmFwIHRoZSBmaXJzdCBjb29yZGluYXRlIChQMSlcbiAgbGV0IHgxID0gc25hcChmbGF0Q29vcmRpbmF0ZXNbb2Zmc2V0XSwgdG9sZXJhbmNlKTtcbiAgbGV0IHkxID0gc25hcChmbGF0Q29vcmRpbmF0ZXNbb2Zmc2V0ICsgMV0sIHRvbGVyYW5jZSk7XG4gIG9mZnNldCArPSBzdHJpZGU7XG4gIC8vIGFkZCB0aGUgZmlyc3QgY29vcmRpbmF0ZSB0byB0aGUgb3V0cHV0XG4gIHNpbXBsaWZpZWRGbGF0Q29vcmRpbmF0ZXNbc2ltcGxpZmllZE9mZnNldCsrXSA9IHgxO1xuICBzaW1wbGlmaWVkRmxhdENvb3JkaW5hdGVzW3NpbXBsaWZpZWRPZmZzZXQrK10gPSB5MTtcbiAgLy8gZmluZCB0aGUgbmV4dCBjb29yZGluYXRlIHRoYXQgZG9lcyBub3Qgc25hcCB0byB0aGUgc2FtZSB2YWx1ZSBhcyB0aGUgZmlyc3RcbiAgLy8gY29vcmRpbmF0ZSAoUDIpXG4gIGxldCB4MiwgeTI7XG4gIGRvIHtcbiAgICB4MiA9IHNuYXAoZmxhdENvb3JkaW5hdGVzW29mZnNldF0sIHRvbGVyYW5jZSk7XG4gICAgeTIgPSBzbmFwKGZsYXRDb29yZGluYXRlc1tvZmZzZXQgKyAxXSwgdG9sZXJhbmNlKTtcbiAgICBvZmZzZXQgKz0gc3RyaWRlO1xuICAgIGlmIChvZmZzZXQgPT0gZW5kKSB7XG4gICAgICAvLyBhbGwgY29vcmRpbmF0ZXMgc25hcCB0byB0aGUgc2FtZSB2YWx1ZSwgdGhlIGxpbmUgY29sbGFwc2VzIHRvIGEgcG9pbnRcbiAgICAgIC8vIHB1c2ggdGhlIGxhc3Qgc25hcHBlZCB2YWx1ZSBhbnl3YXkgdG8gZW5zdXJlIHRoYXQgdGhlIG91dHB1dCBjb250YWluc1xuICAgICAgLy8gYXQgbGVhc3QgdHdvIHBvaW50c1xuICAgICAgLy8gRklYTUUgc2hvdWxkIHdlIHJlYWxseSByZXR1cm4gYXQgbGVhc3QgdHdvIHBvaW50cyBhbnl3YXk/XG4gICAgICBzaW1wbGlmaWVkRmxhdENvb3JkaW5hdGVzW3NpbXBsaWZpZWRPZmZzZXQrK10gPSB4MjtcbiAgICAgIHNpbXBsaWZpZWRGbGF0Q29vcmRpbmF0ZXNbc2ltcGxpZmllZE9mZnNldCsrXSA9IHkyO1xuICAgICAgcmV0dXJuIHNpbXBsaWZpZWRPZmZzZXQ7XG4gICAgfVxuICB9IHdoaWxlICh4MiA9PSB4MSAmJiB5MiA9PSB5MSk7XG4gIHdoaWxlIChvZmZzZXQgPCBlbmQpIHtcbiAgICAvLyBzbmFwIHRoZSBuZXh0IGNvb3JkaW5hdGUgKFAzKVxuICAgIGNvbnN0IHgzID0gc25hcChmbGF0Q29vcmRpbmF0ZXNbb2Zmc2V0XSwgdG9sZXJhbmNlKTtcbiAgICBjb25zdCB5MyA9IHNuYXAoZmxhdENvb3JkaW5hdGVzW29mZnNldCArIDFdLCB0b2xlcmFuY2UpO1xuICAgIG9mZnNldCArPSBzdHJpZGU7XG4gICAgLy8gc2tpcCBQMyBpZiBpdCBpcyBlcXVhbCB0byBQMlxuICAgIGlmICh4MyA9PSB4MiAmJiB5MyA9PSB5Mikge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIC8vIGNhbGN1bGF0ZSB0aGUgZGVsdGEgYmV0d2VlbiBQMSBhbmQgUDJcbiAgICBjb25zdCBkeDEgPSB4MiAtIHgxO1xuICAgIGNvbnN0IGR5MSA9IHkyIC0geTE7XG4gICAgLy8gY2FsY3VsYXRlIHRoZSBkZWx0YSBiZXR3ZWVuIFAzIGFuZCBQMVxuICAgIGNvbnN0IGR4MiA9IHgzIC0geDE7XG4gICAgY29uc3QgZHkyID0geTMgLSB5MTtcbiAgICAvLyBpZiBQMSwgUDIsIGFuZCBQMyBhcmUgY29saW5lYXIgYW5kIFAzIGlzIGZ1cnRoZXIgZnJvbSBQMSB0aGFuIFAyIGlzIGZyb21cbiAgICAvLyBQMSBpbiB0aGUgc2FtZSBkaXJlY3Rpb24gdGhlbiBQMiBpcyBvbiB0aGUgc3RyYWlnaHQgbGluZSBiZXR3ZWVuIFAxIGFuZFxuICAgIC8vIFAzXG4gICAgaWYgKFxuICAgICAgZHgxICogZHkyID09IGR5MSAqIGR4MiAmJlxuICAgICAgKChkeDEgPCAwICYmIGR4MiA8IGR4MSkgfHwgZHgxID09IGR4MiB8fCAoZHgxID4gMCAmJiBkeDIgPiBkeDEpKSAmJlxuICAgICAgKChkeTEgPCAwICYmIGR5MiA8IGR5MSkgfHwgZHkxID09IGR5MiB8fCAoZHkxID4gMCAmJiBkeTIgPiBkeTEpKVxuICAgICkge1xuICAgICAgLy8gZGlzY2FyZCBQMiBhbmQgc2V0IFAyID0gUDNcbiAgICAgIHgyID0geDM7XG4gICAgICB5MiA9IHkzO1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIC8vIGVpdGhlciBQMSwgUDIsIGFuZCBQMyBhcmUgbm90IGNvbGluZWFyLCBvciB0aGV5IGFyZSBjb2xpbmVhciBidXQgUDMgaXNcbiAgICAvLyBiZXR3ZWVuIFAzIGFuZCBQMSBvciBvbiB0aGUgb3Bwb3NpdGUgaGFsZiBvZiB0aGUgbGluZSB0byBQMi4gIGFkZCBQMixcbiAgICAvLyBhbmQgY29udGludWUgd2l0aCBQMSA9IFAyIGFuZCBQMiA9IFAzXG4gICAgc2ltcGxpZmllZEZsYXRDb29yZGluYXRlc1tzaW1wbGlmaWVkT2Zmc2V0KytdID0geDI7XG4gICAgc2ltcGxpZmllZEZsYXRDb29yZGluYXRlc1tzaW1wbGlmaWVkT2Zmc2V0KytdID0geTI7XG4gICAgeDEgPSB4MjtcbiAgICB5MSA9IHkyO1xuICAgIHgyID0geDM7XG4gICAgeTIgPSB5MztcbiAgfVxuICAvLyBhZGQgdGhlIGxhc3QgcG9pbnQgKFAyKVxuICBzaW1wbGlmaWVkRmxhdENvb3JkaW5hdGVzW3NpbXBsaWZpZWRPZmZzZXQrK10gPSB4MjtcbiAgc2ltcGxpZmllZEZsYXRDb29yZGluYXRlc1tzaW1wbGlmaWVkT2Zmc2V0KytdID0geTI7XG4gIHJldHVybiBzaW1wbGlmaWVkT2Zmc2V0O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gZmxhdENvb3JkaW5hdGVzIEZsYXQgY29vcmRpbmF0ZXMuXG4gKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0IE9mZnNldC5cbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gZW5kcyBFbmRzLlxuICogQHBhcmFtIHtudW1iZXJ9IHN0cmlkZSBTdHJpZGUuXG4gKiBAcGFyYW0ge251bWJlcn0gdG9sZXJhbmNlIFRvbGVyYW5jZS5cbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gc2ltcGxpZmllZEZsYXRDb29yZGluYXRlcyBTaW1wbGlmaWVkIGZsYXRcbiAqICAgICBjb29yZGluYXRlcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzaW1wbGlmaWVkT2Zmc2V0IFNpbXBsaWZpZWQgb2Zmc2V0LlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBzaW1wbGlmaWVkRW5kcyBTaW1wbGlmaWVkIGVuZHMuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFNpbXBsaWZpZWQgb2Zmc2V0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gcXVhbnRpemVBcnJheShcbiAgZmxhdENvb3JkaW5hdGVzLFxuICBvZmZzZXQsXG4gIGVuZHMsXG4gIHN0cmlkZSxcbiAgdG9sZXJhbmNlLFxuICBzaW1wbGlmaWVkRmxhdENvb3JkaW5hdGVzLFxuICBzaW1wbGlmaWVkT2Zmc2V0LFxuICBzaW1wbGlmaWVkRW5kcyxcbikge1xuICBmb3IgKGxldCBpID0gMCwgaWkgPSBlbmRzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICBjb25zdCBlbmQgPSBlbmRzW2ldO1xuICAgIHNpbXBsaWZpZWRPZmZzZXQgPSBxdWFudGl6ZShcbiAgICAgIGZsYXRDb29yZGluYXRlcyxcbiAgICAgIG9mZnNldCxcbiAgICAgIGVuZCxcbiAgICAgIHN0cmlkZSxcbiAgICAgIHRvbGVyYW5jZSxcbiAgICAgIHNpbXBsaWZpZWRGbGF0Q29vcmRpbmF0ZXMsXG4gICAgICBzaW1wbGlmaWVkT2Zmc2V0LFxuICAgICk7XG4gICAgc2ltcGxpZmllZEVuZHMucHVzaChzaW1wbGlmaWVkT2Zmc2V0KTtcbiAgICBvZmZzZXQgPSBlbmQ7XG4gIH1cbiAgcmV0dXJuIHNpbXBsaWZpZWRPZmZzZXQ7XG59XG5cbi8qKlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBmbGF0Q29vcmRpbmF0ZXMgRmxhdCBjb29yZGluYXRlcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQgT2Zmc2V0LlxuICogQHBhcmFtIHtBcnJheTxBcnJheTxudW1iZXI+Pn0gZW5kc3MgRW5kc3MuXG4gKiBAcGFyYW0ge251bWJlcn0gc3RyaWRlIFN0cmlkZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0b2xlcmFuY2UgVG9sZXJhbmNlLlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBzaW1wbGlmaWVkRmxhdENvb3JkaW5hdGVzIFNpbXBsaWZpZWQgZmxhdFxuICogICAgIGNvb3JkaW5hdGVzLlxuICogQHBhcmFtIHtudW1iZXJ9IHNpbXBsaWZpZWRPZmZzZXQgU2ltcGxpZmllZCBvZmZzZXQuXG4gKiBAcGFyYW0ge0FycmF5PEFycmF5PG51bWJlcj4+fSBzaW1wbGlmaWVkRW5kc3MgU2ltcGxpZmllZCBlbmRzcy5cbiAqIEByZXR1cm4ge251bWJlcn0gU2ltcGxpZmllZCBvZmZzZXQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBxdWFudGl6ZU11bHRpQXJyYXkoXG4gIGZsYXRDb29yZGluYXRlcyxcbiAgb2Zmc2V0LFxuICBlbmRzcyxcbiAgc3RyaWRlLFxuICB0b2xlcmFuY2UsXG4gIHNpbXBsaWZpZWRGbGF0Q29vcmRpbmF0ZXMsXG4gIHNpbXBsaWZpZWRPZmZzZXQsXG4gIHNpbXBsaWZpZWRFbmRzcyxcbikge1xuICBmb3IgKGxldCBpID0gMCwgaWkgPSBlbmRzcy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgY29uc3QgZW5kcyA9IGVuZHNzW2ldO1xuICAgIC8qKiBAdHlwZSB7QXJyYXk8bnVtYmVyPn0gKi9cbiAgICBjb25zdCBzaW1wbGlmaWVkRW5kcyA9IFtdO1xuICAgIHNpbXBsaWZpZWRPZmZzZXQgPSBxdWFudGl6ZUFycmF5KFxuICAgICAgZmxhdENvb3JkaW5hdGVzLFxuICAgICAgb2Zmc2V0LFxuICAgICAgZW5kcyxcbiAgICAgIHN0cmlkZSxcbiAgICAgIHRvbGVyYW5jZSxcbiAgICAgIHNpbXBsaWZpZWRGbGF0Q29vcmRpbmF0ZXMsXG4gICAgICBzaW1wbGlmaWVkT2Zmc2V0LFxuICAgICAgc2ltcGxpZmllZEVuZHMsXG4gICAgKTtcbiAgICBzaW1wbGlmaWVkRW5kc3MucHVzaChzaW1wbGlmaWVkRW5kcyk7XG4gICAgb2Zmc2V0ID0gZW5kc1tlbmRzLmxlbmd0aCAtIDFdO1xuICB9XG4gIHJldHVybiBzaW1wbGlmaWVkT2Zmc2V0O1xufVxuIiwiLyoqXG4gKiBAbW9kdWxlIG9sL2dlb20vZmxhdC90cmFuc2Zvcm1cbiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gZmxhdENvb3JkaW5hdGVzIEZsYXQgY29vcmRpbmF0ZXMuXG4gKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0IE9mZnNldC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBlbmQgRW5kLlxuICogQHBhcmFtIHtudW1iZXJ9IHN0cmlkZSBTdHJpZGUuXG4gKiBAcGFyYW0ge2ltcG9ydChcIi4uLy4uL3RyYW5zZm9ybS5qc1wiKS5UcmFuc2Zvcm19IHRyYW5zZm9ybSBUcmFuc2Zvcm0uXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IFtkZXN0XSBEZXN0aW5hdGlvbi5cbiAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59IFRyYW5zZm9ybWVkIGNvb3JkaW5hdGVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtMkQoXG4gIGZsYXRDb29yZGluYXRlcyxcbiAgb2Zmc2V0LFxuICBlbmQsXG4gIHN0cmlkZSxcbiAgdHJhbnNmb3JtLFxuICBkZXN0LFxuKSB7XG4gIGRlc3QgPSBkZXN0ID8gZGVzdCA6IFtdO1xuICBsZXQgaSA9IDA7XG4gIGZvciAobGV0IGogPSBvZmZzZXQ7IGogPCBlbmQ7IGogKz0gc3RyaWRlKSB7XG4gICAgY29uc3QgeCA9IGZsYXRDb29yZGluYXRlc1tqXTtcbiAgICBjb25zdCB5ID0gZmxhdENvb3JkaW5hdGVzW2ogKyAxXTtcbiAgICBkZXN0W2krK10gPSB0cmFuc2Zvcm1bMF0gKiB4ICsgdHJhbnNmb3JtWzJdICogeSArIHRyYW5zZm9ybVs0XTtcbiAgICBkZXN0W2krK10gPSB0cmFuc2Zvcm1bMV0gKiB4ICsgdHJhbnNmb3JtWzNdICogeSArIHRyYW5zZm9ybVs1XTtcbiAgfVxuICBpZiAoZGVzdCAmJiBkZXN0Lmxlbmd0aCAhPSBpKSB7XG4gICAgZGVzdC5sZW5ndGggPSBpO1xuICB9XG4gIHJldHVybiBkZXN0O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gZmxhdENvb3JkaW5hdGVzIEZsYXQgY29vcmRpbmF0ZXMuXG4gKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0IE9mZnNldC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBlbmQgRW5kLlxuICogQHBhcmFtIHtudW1iZXJ9IHN0cmlkZSBTdHJpZGUuXG4gKiBAcGFyYW0ge251bWJlcn0gYW5nbGUgQW5nbGUuXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGFuY2hvciBSb3RhdGlvbiBhbmNob3IgcG9pbnQuXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IFtkZXN0XSBEZXN0aW5hdGlvbi5cbiAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59IFRyYW5zZm9ybWVkIGNvb3JkaW5hdGVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlKFxuICBmbGF0Q29vcmRpbmF0ZXMsXG4gIG9mZnNldCxcbiAgZW5kLFxuICBzdHJpZGUsXG4gIGFuZ2xlLFxuICBhbmNob3IsXG4gIGRlc3QsXG4pIHtcbiAgZGVzdCA9IGRlc3QgPyBkZXN0IDogW107XG4gIGNvbnN0IGNvcyA9IE1hdGguY29zKGFuZ2xlKTtcbiAgY29uc3Qgc2luID0gTWF0aC5zaW4oYW5nbGUpO1xuICBjb25zdCBhbmNob3JYID0gYW5jaG9yWzBdO1xuICBjb25zdCBhbmNob3JZID0gYW5jaG9yWzFdO1xuICBsZXQgaSA9IDA7XG4gIGZvciAobGV0IGogPSBvZmZzZXQ7IGogPCBlbmQ7IGogKz0gc3RyaWRlKSB7XG4gICAgY29uc3QgZGVsdGFYID0gZmxhdENvb3JkaW5hdGVzW2pdIC0gYW5jaG9yWDtcbiAgICBjb25zdCBkZWx0YVkgPSBmbGF0Q29vcmRpbmF0ZXNbaiArIDFdIC0gYW5jaG9yWTtcbiAgICBkZXN0W2krK10gPSBhbmNob3JYICsgZGVsdGFYICogY29zIC0gZGVsdGFZICogc2luO1xuICAgIGRlc3RbaSsrXSA9IGFuY2hvclkgKyBkZWx0YVggKiBzaW4gKyBkZWx0YVkgKiBjb3M7XG4gICAgZm9yIChsZXQgayA9IGogKyAyOyBrIDwgaiArIHN0cmlkZTsgKytrKSB7XG4gICAgICBkZXN0W2krK10gPSBmbGF0Q29vcmRpbmF0ZXNba107XG4gICAgfVxuICB9XG4gIGlmIChkZXN0ICYmIGRlc3QubGVuZ3RoICE9IGkpIHtcbiAgICBkZXN0Lmxlbmd0aCA9IGk7XG4gIH1cbiAgcmV0dXJuIGRlc3Q7XG59XG5cbi8qKlxuICogU2NhbGUgdGhlIGNvb3JkaW5hdGVzLlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBmbGF0Q29vcmRpbmF0ZXMgRmxhdCBjb29yZGluYXRlcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQgT2Zmc2V0LlxuICogQHBhcmFtIHtudW1iZXJ9IGVuZCBFbmQuXG4gKiBAcGFyYW0ge251bWJlcn0gc3RyaWRlIFN0cmlkZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzeCBTY2FsZSBmYWN0b3IgaW4gdGhlIHgtZGlyZWN0aW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IHN5IFNjYWxlIGZhY3RvciBpbiB0aGUgeS1kaXJlY3Rpb24uXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGFuY2hvciBTY2FsZSBhbmNob3IgcG9pbnQuXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IFtkZXN0XSBEZXN0aW5hdGlvbi5cbiAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59IFRyYW5zZm9ybWVkIGNvb3JkaW5hdGVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2NhbGUoXG4gIGZsYXRDb29yZGluYXRlcyxcbiAgb2Zmc2V0LFxuICBlbmQsXG4gIHN0cmlkZSxcbiAgc3gsXG4gIHN5LFxuICBhbmNob3IsXG4gIGRlc3QsXG4pIHtcbiAgZGVzdCA9IGRlc3QgPyBkZXN0IDogW107XG4gIGNvbnN0IGFuY2hvclggPSBhbmNob3JbMF07XG4gIGNvbnN0IGFuY2hvclkgPSBhbmNob3JbMV07XG4gIGxldCBpID0gMDtcbiAgZm9yIChsZXQgaiA9IG9mZnNldDsgaiA8IGVuZDsgaiArPSBzdHJpZGUpIHtcbiAgICBjb25zdCBkZWx0YVggPSBmbGF0Q29vcmRpbmF0ZXNbal0gLSBhbmNob3JYO1xuICAgIGNvbnN0IGRlbHRhWSA9IGZsYXRDb29yZGluYXRlc1tqICsgMV0gLSBhbmNob3JZO1xuICAgIGRlc3RbaSsrXSA9IGFuY2hvclggKyBzeCAqIGRlbHRhWDtcbiAgICBkZXN0W2krK10gPSBhbmNob3JZICsgc3kgKiBkZWx0YVk7XG4gICAgZm9yIChsZXQgayA9IGogKyAyOyBrIDwgaiArIHN0cmlkZTsgKytrKSB7XG4gICAgICBkZXN0W2krK10gPSBmbGF0Q29vcmRpbmF0ZXNba107XG4gICAgfVxuICB9XG4gIGlmIChkZXN0ICYmIGRlc3QubGVuZ3RoICE9IGkpIHtcbiAgICBkZXN0Lmxlbmd0aCA9IGk7XG4gIH1cbiAgcmV0dXJuIGRlc3Q7XG59XG5cbi8qKlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBmbGF0Q29vcmRpbmF0ZXMgRmxhdCBjb29yZGluYXRlcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQgT2Zmc2V0LlxuICogQHBhcmFtIHtudW1iZXJ9IGVuZCBFbmQuXG4gKiBAcGFyYW0ge251bWJlcn0gc3RyaWRlIFN0cmlkZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBkZWx0YVggRGVsdGEgWC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBkZWx0YVkgRGVsdGEgWS5cbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gW2Rlc3RdIERlc3RpbmF0aW9uLlxuICogQHJldHVybiB7QXJyYXk8bnVtYmVyPn0gVHJhbnNmb3JtZWQgY29vcmRpbmF0ZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdGUoXG4gIGZsYXRDb29yZGluYXRlcyxcbiAgb2Zmc2V0LFxuICBlbmQsXG4gIHN0cmlkZSxcbiAgZGVsdGFYLFxuICBkZWx0YVksXG4gIGRlc3QsXG4pIHtcbiAgZGVzdCA9IGRlc3QgPyBkZXN0IDogW107XG4gIGxldCBpID0gMDtcbiAgZm9yIChsZXQgaiA9IG9mZnNldDsgaiA8IGVuZDsgaiArPSBzdHJpZGUpIHtcbiAgICBkZXN0W2krK10gPSBmbGF0Q29vcmRpbmF0ZXNbal0gKyBkZWx0YVg7XG4gICAgZGVzdFtpKytdID0gZmxhdENvb3JkaW5hdGVzW2ogKyAxXSArIGRlbHRhWTtcbiAgICBmb3IgKGxldCBrID0gaiArIDI7IGsgPCBqICsgc3RyaWRlOyArK2spIHtcbiAgICAgIGRlc3RbaSsrXSA9IGZsYXRDb29yZGluYXRlc1trXTtcbiAgICB9XG4gIH1cbiAgaWYgKGRlc3QgJiYgZGVzdC5sZW5ndGggIT0gaSkge1xuICAgIGRlc3QubGVuZ3RoID0gaTtcbiAgfVxuICByZXR1cm4gZGVzdDtcbn1cbiIsIi8qKlxuICogQG1vZHVsZSBvbC9tYXRoXG4gKi9cblxuLyoqXG4gKiBUYWtlcyBhIG51bWJlciBhbmQgY2xhbXBzIGl0IHRvIHdpdGhpbiB0aGUgcHJvdmlkZWQgYm91bmRzLlxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIFRoZSBpbnB1dCBudW1iZXIuXG4gKiBAcGFyYW0ge251bWJlcn0gbWluIFRoZSBtaW5pbXVtIHZhbHVlIHRvIHJldHVybi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXggVGhlIG1heGltdW0gdmFsdWUgdG8gcmV0dXJuLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgaW5wdXQgbnVtYmVyIGlmIGl0IGlzIHdpdGhpbiBib3VuZHMsIG9yIHRoZSBuZWFyZXN0XG4gKiAgICAgbnVtYmVyIHdpdGhpbiB0aGUgYm91bmRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xhbXAodmFsdWUsIG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLm1pbihNYXRoLm1heCh2YWx1ZSwgbWluKSwgbWF4KTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBzcXVhcmUgb2YgdGhlIGNsb3Nlc3QgZGlzdGFuY2UgYmV0d2VlbiB0aGUgcG9pbnQgKHgsIHkpIGFuZCB0aGVcbiAqIGxpbmUgc2VnbWVudCAoeDEsIHkxKSB0byAoeDIsIHkyKS5cbiAqIEBwYXJhbSB7bnVtYmVyfSB4IFguXG4gKiBAcGFyYW0ge251bWJlcn0geSBZLlxuICogQHBhcmFtIHtudW1iZXJ9IHgxIFgxLlxuICogQHBhcmFtIHtudW1iZXJ9IHkxIFkxLlxuICogQHBhcmFtIHtudW1iZXJ9IHgyIFgyLlxuICogQHBhcmFtIHtudW1iZXJ9IHkyIFkyLlxuICogQHJldHVybiB7bnVtYmVyfSBTcXVhcmVkIGRpc3RhbmNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3F1YXJlZFNlZ21lbnREaXN0YW5jZSh4LCB5LCB4MSwgeTEsIHgyLCB5Mikge1xuICBjb25zdCBkeCA9IHgyIC0geDE7XG4gIGNvbnN0IGR5ID0geTIgLSB5MTtcbiAgaWYgKGR4ICE9PSAwIHx8IGR5ICE9PSAwKSB7XG4gICAgY29uc3QgdCA9ICgoeCAtIHgxKSAqIGR4ICsgKHkgLSB5MSkgKiBkeSkgLyAoZHggKiBkeCArIGR5ICogZHkpO1xuICAgIGlmICh0ID4gMSkge1xuICAgICAgeDEgPSB4MjtcbiAgICAgIHkxID0geTI7XG4gICAgfSBlbHNlIGlmICh0ID4gMCkge1xuICAgICAgeDEgKz0gZHggKiB0O1xuICAgICAgeTEgKz0gZHkgKiB0O1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3F1YXJlZERpc3RhbmNlKHgsIHksIHgxLCB5MSk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgc3F1YXJlIG9mIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBwb2ludHMgKHgxLCB5MSkgYW5kICh4MiwgeTIpLlxuICogQHBhcmFtIHtudW1iZXJ9IHgxIFgxLlxuICogQHBhcmFtIHtudW1iZXJ9IHkxIFkxLlxuICogQHBhcmFtIHtudW1iZXJ9IHgyIFgyLlxuICogQHBhcmFtIHtudW1iZXJ9IHkyIFkyLlxuICogQHJldHVybiB7bnVtYmVyfSBTcXVhcmVkIGRpc3RhbmNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3F1YXJlZERpc3RhbmNlKHgxLCB5MSwgeDIsIHkyKSB7XG4gIGNvbnN0IGR4ID0geDIgLSB4MTtcbiAgY29uc3QgZHkgPSB5MiAtIHkxO1xuICByZXR1cm4gZHggKiBkeCArIGR5ICogZHk7XG59XG5cbi8qKlxuICogU29sdmVzIHN5c3RlbSBvZiBsaW5lYXIgZXF1YXRpb25zIHVzaW5nIEdhdXNzaWFuIGVsaW1pbmF0aW9uIG1ldGhvZC5cbiAqXG4gKiBAcGFyYW0ge0FycmF5PEFycmF5PG51bWJlcj4+fSBtYXQgQXVnbWVudGVkIG1hdHJpeCAobiB4IG4gKyAxIGNvbHVtbilcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluIHJvdy1tYWpvciBvcmRlci5cbiAqIEByZXR1cm4ge0FycmF5PG51bWJlcj58bnVsbH0gVGhlIHJlc3VsdGluZyB2ZWN0b3IuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzb2x2ZUxpbmVhclN5c3RlbShtYXQpIHtcbiAgY29uc3QgbiA9IG1hdC5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAvLyBGaW5kIG1heCBpbiB0aGUgaS10aCBjb2x1bW4gKGlnbm9yaW5nIGkgLSAxIGZpcnN0IHJvd3MpXG4gICAgbGV0IG1heFJvdyA9IGk7XG4gICAgbGV0IG1heEVsID0gTWF0aC5hYnMobWF0W2ldW2ldKTtcbiAgICBmb3IgKGxldCByID0gaSArIDE7IHIgPCBuOyByKyspIHtcbiAgICAgIGNvbnN0IGFic1ZhbHVlID0gTWF0aC5hYnMobWF0W3JdW2ldKTtcbiAgICAgIGlmIChhYnNWYWx1ZSA+IG1heEVsKSB7XG4gICAgICAgIG1heEVsID0gYWJzVmFsdWU7XG4gICAgICAgIG1heFJvdyA9IHI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1heEVsID09PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbDsgLy8gbWF0cml4IGlzIHNpbmd1bGFyXG4gICAgfVxuXG4gICAgLy8gU3dhcCBtYXggcm93IHdpdGggaS10aCAoY3VycmVudCkgcm93XG4gICAgY29uc3QgdG1wID0gbWF0W21heFJvd107XG4gICAgbWF0W21heFJvd10gPSBtYXRbaV07XG4gICAgbWF0W2ldID0gdG1wO1xuXG4gICAgLy8gU3VidHJhY3QgdGhlIGktdGggcm93IHRvIG1ha2UgYWxsIHRoZSByZW1haW5pbmcgcm93cyAwIGluIHRoZSBpLXRoIGNvbHVtblxuICAgIGZvciAobGV0IGogPSBpICsgMTsgaiA8IG47IGorKykge1xuICAgICAgY29uc3QgY29lZiA9IC1tYXRbal1baV0gLyBtYXRbaV1baV07XG4gICAgICBmb3IgKGxldCBrID0gaTsgayA8IG4gKyAxOyBrKyspIHtcbiAgICAgICAgaWYgKGkgPT0gaykge1xuICAgICAgICAgIG1hdFtqXVtrXSA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWF0W2pdW2tdICs9IGNvZWYgKiBtYXRbaV1ba107XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBTb2x2ZSBBeD1iIGZvciB1cHBlciB0cmlhbmd1bGFyIG1hdHJpeCBBIChtYXQpXG4gIGNvbnN0IHggPSBuZXcgQXJyYXkobik7XG4gIGZvciAobGV0IGwgPSBuIC0gMTsgbCA+PSAwOyBsLS0pIHtcbiAgICB4W2xdID0gbWF0W2xdW25dIC8gbWF0W2xdW2xdO1xuICAgIGZvciAobGV0IG0gPSBsIC0gMTsgbSA+PSAwOyBtLS0pIHtcbiAgICAgIG1hdFttXVtuXSAtPSBtYXRbbV1bbF0gKiB4W2xdO1xuICAgIH1cbiAgfVxuICByZXR1cm4geDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyByYWRpYW5zIHRvIHRvIGRlZ3JlZXMuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGFuZ2xlSW5SYWRpYW5zIEFuZ2xlIGluIHJhZGlhbnMuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEFuZ2xlIGluIGRlZ3JlZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0RlZ3JlZXMoYW5nbGVJblJhZGlhbnMpIHtcbiAgcmV0dXJuIChhbmdsZUluUmFkaWFucyAqIDE4MCkgLyBNYXRoLlBJO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGRlZ3JlZXMgdG8gcmFkaWFucy5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gYW5nbGVJbkRlZ3JlZXMgQW5nbGUgaW4gZGVncmVlcy5cbiAqIEByZXR1cm4ge251bWJlcn0gQW5nbGUgaW4gcmFkaWFucy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvUmFkaWFucyhhbmdsZUluRGVncmVlcykge1xuICByZXR1cm4gKGFuZ2xlSW5EZWdyZWVzICogTWF0aC5QSSkgLyAxODA7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbW9kdWxvIG9mIGEgLyBiLCBkZXBlbmRpbmcgb24gdGhlIHNpZ24gb2YgYi5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gYSBEaXZpZGVuZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiIERpdmlzb3IuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IE1vZHVsby5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1vZHVsbyhhLCBiKSB7XG4gIGNvbnN0IHIgPSBhICUgYjtcbiAgcmV0dXJuIHIgKiBiIDwgMCA/IHIgKyBiIDogcjtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBsaW5lYXJseSBpbnRlcnBvbGF0ZWQgdmFsdWUgb2YgeCBiZXR3ZWVuIGEgYW5kIGIuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGEgTnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gYiBOdW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSB4IFZhbHVlIHRvIGJlIGludGVycG9sYXRlZC5cbiAqIEByZXR1cm4ge251bWJlcn0gSW50ZXJwb2xhdGVkIHZhbHVlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbGVycChhLCBiLCB4KSB7XG4gIHJldHVybiBhICsgeCAqIChiIC0gYSk7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIG51bWJlciB3aXRoIGEgbGltaXRlZCBudW1iZXIgb2YgZGVjaW1hbCBkaWdpdHMuXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgaW5wdXQgbnVtYmVyLlxuICogQHBhcmFtIHtudW1iZXJ9IGRlY2ltYWxzIFRoZSBtYXhpbXVtIG51bWJlciBvZiBkZWNpbWFsIGRpZ2l0cy5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGlucHV0IG51bWJlciB3aXRoIGEgbGltaXRlZCBudW1iZXIgb2YgZGVjaW1hbCBkaWdpdHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0ZpeGVkKG4sIGRlY2ltYWxzKSB7XG4gIGNvbnN0IGZhY3RvciA9IE1hdGgucG93KDEwLCBkZWNpbWFscyk7XG4gIHJldHVybiBNYXRoLnJvdW5kKG4gKiBmYWN0b3IpIC8gZmFjdG9yO1xufVxuXG4vKipcbiAqIFJvdW5kcyBhIG51bWJlciB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyIHZhbHVlIGNvbnNpZGVyaW5nIG9ubHkgdGhlIGdpdmVuIG51bWJlclxuICogb2YgZGVjaW1hbCBkaWdpdHMgKHdpdGggcm91bmRpbmcgb24gdGhlIGZpbmFsIGRpZ2l0KS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBpbnB1dCBudW1iZXIuXG4gKiBAcGFyYW0ge251bWJlcn0gZGVjaW1hbHMgVGhlIG1heGltdW0gbnVtYmVyIG9mIGRlY2ltYWwgZGlnaXRzLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbmVhcmVzdCBpbnRlZ2VyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcm91bmQobiwgZGVjaW1hbHMpIHtcbiAgcmV0dXJuIE1hdGgucm91bmQodG9GaXhlZChuLCBkZWNpbWFscykpO1xufVxuXG4vKipcbiAqIFJvdW5kcyBhIG51bWJlciB0byB0aGUgbmV4dCBzbWFsbGVyIGludGVnZXIgY29uc2lkZXJpbmcgb25seSB0aGUgZ2l2ZW4gbnVtYmVyXG4gKiBvZiBkZWNpbWFsIGRpZ2l0cyAod2l0aCByb3VuZGluZyBvbiB0aGUgZmluYWwgZGlnaXQpLlxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIGlucHV0IG51bWJlci5cbiAqIEBwYXJhbSB7bnVtYmVyfSBkZWNpbWFscyBUaGUgbWF4aW11bSBudW1iZXIgb2YgZGVjaW1hbCBkaWdpdHMuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBuZXh0IHNtYWxsZXIgaW50ZWdlci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZsb29yKG4sIGRlY2ltYWxzKSB7XG4gIHJldHVybiBNYXRoLmZsb29yKHRvRml4ZWQobiwgZGVjaW1hbHMpKTtcbn1cblxuLyoqXG4gKiBSb3VuZHMgYSBudW1iZXIgdG8gdGhlIG5leHQgYmlnZ2VyIGludGVnZXIgY29uc2lkZXJpbmcgb25seSB0aGUgZ2l2ZW4gbnVtYmVyXG4gKiBvZiBkZWNpbWFsIGRpZ2l0cyAod2l0aCByb3VuZGluZyBvbiB0aGUgZmluYWwgZGlnaXQpLlxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIGlucHV0IG51bWJlci5cbiAqIEBwYXJhbSB7bnVtYmVyfSBkZWNpbWFscyBUaGUgbWF4aW11bSBudW1iZXIgb2YgZGVjaW1hbCBkaWdpdHMuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBuZXh0IGJpZ2dlciBpbnRlZ2VyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2VpbChuLCBkZWNpbWFscykge1xuICByZXR1cm4gTWF0aC5jZWlsKHRvRml4ZWQobiwgZGVjaW1hbHMpKTtcbn1cbiIsIi8qKlxuICogQG1vZHVsZSBvbC9vYmpcbiAqL1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIHByb3BlcnRpZXMgZnJvbSBhbiBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdDxzdHJpbmcsIHVua25vd24+fSBvYmplY3QgVGhlIG9iamVjdCB0byBjbGVhci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyKG9iamVjdCkge1xuICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIG9iamVjdCkge1xuICAgIGRlbGV0ZSBvYmplY3RbcHJvcGVydHldO1xuICB9XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGFuIG9iamVjdCBoYXMgYW55IHByb3BlcnRpZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY2hlY2suXG4gKiBAcmV0dXJuIHtib29sZWFufSBUaGUgb2JqZWN0IGlzIGVtcHR5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNFbXB0eShvYmplY3QpIHtcbiAgbGV0IHByb3BlcnR5O1xuICBmb3IgKHByb3BlcnR5IGluIG9iamVjdCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gIXByb3BlcnR5O1xufVxuIiwiLyoqXG4gKiBAbW9kdWxlIG9sL3Byb2pcbiAqL1xuXG4vKipcbiAqIFRoZSBvbC9wcm9qIG1vZHVsZSBzdG9yZXM6XG4gKiAqIGEgbGlzdCBvZiB7QGxpbmsgbW9kdWxlOm9sL3Byb2ovUHJvamVjdGlvbn5Qcm9qZWN0aW9ufVxuICogb2JqZWN0cywgb25lIGZvciBlYWNoIHByb2plY3Rpb24gc3VwcG9ydGVkIGJ5IHRoZSBhcHBsaWNhdGlvblxuICogKiBhIGxpc3Qgb2YgdHJhbnNmb3JtIGZ1bmN0aW9ucyBuZWVkZWQgdG8gY29udmVydCBjb29yZGluYXRlcyBpbiBvbmUgcHJvamVjdGlvblxuICogaW50byBhbm90aGVyLlxuICpcbiAqIFRoZSBzdGF0aWMgZnVuY3Rpb25zIGFyZSB0aGUgbWV0aG9kcyB1c2VkIHRvIG1haW50YWluIHRoZXNlLlxuICogRWFjaCB0cmFuc2Zvcm0gZnVuY3Rpb24gY2FuIGhhbmRsZSBub3Qgb25seSBzaW1wbGUgY29vcmRpbmF0ZSBwYWlycywgYnV0IGFsc29cbiAqIGxhcmdlIGFycmF5cyBvZiBjb29yZGluYXRlcyBzdWNoIGFzIHZlY3RvciBnZW9tZXRyaWVzLlxuICpcbiAqIFdoZW4gbG9hZGVkLCB0aGUgbGlicmFyeSBhZGRzIHByb2plY3Rpb24gb2JqZWN0cyBmb3IgRVBTRzo0MzI2IChXR1M4NFxuICogZ2VvZ3JhcGhpYyBjb29yZGluYXRlcykgYW5kIEVQU0c6Mzg1NyAoV2ViIG9yIFNwaGVyaWNhbCBNZXJjYXRvciwgYXMgdXNlZFxuICogZm9yIGV4YW1wbGUgYnkgQmluZyBNYXBzIG9yIE9wZW5TdHJlZXRNYXApLCB0b2dldGhlciB3aXRoIHRoZSByZWxldmFudFxuICogdHJhbnNmb3JtIGZ1bmN0aW9ucy5cbiAqXG4gKiBBZGRpdGlvbmFsIHRyYW5zZm9ybXMgbWF5IGJlIGFkZGVkIGJ5IHVzaW5nIHRoZSBodHRwOi8vcHJvajRqcy5vcmcvXG4gKiBsaWJyYXJ5ICh2ZXJzaW9uIDIuMiBvciBsYXRlcikuIFlvdSBjYW4gdXNlIHRoZSBmdWxsIGJ1aWxkIHN1cHBsaWVkIGJ5XG4gKiBQcm9qNGpzLCBvciBjcmVhdGUgYSBjdXN0b20gYnVpbGQgdG8gc3VwcG9ydCB0aG9zZSBwcm9qZWN0aW9ucyB5b3UgbmVlZDsgc2VlXG4gKiB0aGUgUHJvajRqcyB3ZWJzaXRlIGZvciBob3cgdG8gZG8gdGhpcy4gWW91IGFsc28gbmVlZCB0aGUgUHJvajRqcyBkZWZpbml0aW9uc1xuICogZm9yIHRoZSByZXF1aXJlZCBwcm9qZWN0aW9ucy4gVGhlc2UgZGVmaW5pdGlvbnMgY2FuIGJlIG9idGFpbmVkIGZyb21cbiAqIGh0dHBzOi8vZXBzZy5pby8sIGFuZCBhcmUgYSBKUyBmdW5jdGlvbiwgc28gY2FuIGJlIGxvYWRlZCBpbiBhIHNjcmlwdFxuICogdGFnIChhcyBpbiB0aGUgZXhhbXBsZXMpIG9yIHBhc3RlZCBpbnRvIHlvdXIgYXBwbGljYXRpb24uXG4gKlxuICogQWZ0ZXIgYWxsIHJlcXVpcmVkIHByb2plY3Rpb24gZGVmaW5pdGlvbnMgYXJlIGFkZGVkIHRvIHByb2o0J3MgcmVnaXN0cnkgKGJ5XG4gKiB1c2luZyBgcHJvajQuZGVmcygpYCksIHNpbXBseSBjYWxsIGByZWdpc3Rlcihwcm9qNClgIGZyb20gdGhlIGBvbC9wcm9qL3Byb2o0YFxuICogcGFja2FnZS4gRXhpc3RpbmcgdHJhbnNmb3JtcyBhcmUgbm90IGNoYW5nZWQgYnkgdGhpcyBmdW5jdGlvbi4gU2VlXG4gKiBleGFtcGxlcy93bXMtaW1hZ2UtY3VzdG9tLXByb2ogZm9yIGFuIGV4YW1wbGUgb2YgdGhpcy5cbiAqXG4gKiBBZGRpdGlvbmFsIHByb2plY3Rpb24gZGVmaW5pdGlvbnMgY2FuIGJlIHJlZ2lzdGVyZWQgd2l0aCBgcHJvajQuZGVmcygpYCBhbnlcbiAqIHRpbWUuIEp1c3QgbWFrZSBzdXJlIHRvIGNhbGwgYHJlZ2lzdGVyKHByb2o0KWAgYWdhaW47IGZvciBleGFtcGxlLCB3aXRoIHVzZXItc3VwcGxpZWQgZGF0YSB3aGVyZSB5b3UgZG9uJ3RcbiAqIGtub3cgaW4gYWR2YW5jZSB3aGF0IHByb2plY3Rpb25zIGFyZSBuZWVkZWQsIHlvdSBjYW4gaW5pdGlhbGx5IGxvYWQgbWluaW1hbFxuICogc3VwcG9ydCBhbmQgdGhlbiBsb2FkIHdoaWNoZXZlciBhcmUgcmVxdWVzdGVkLlxuICpcbiAqIE5vdGUgdGhhdCBQcm9qNGpzIGRvZXMgbm90IHN1cHBvcnQgcHJvamVjdGlvbiBleHRlbnRzLiBJZiB5b3Ugd2FudCB0byBhZGRcbiAqIG9uZSBmb3IgY3JlYXRpbmcgZGVmYXVsdCB0aWxlIGdyaWRzLCB5b3UgY2FuIGFkZCBpdCBhZnRlciB0aGUgUHJvamVjdGlvblxuICogb2JqZWN0IGhhcyBiZWVuIGNyZWF0ZWQgd2l0aCBgc2V0RXh0ZW50YCwgZm9yIGV4YW1wbGUsXG4gKiBgZ2V0KCdFUFNHOjEyMzQnKS5zZXRFeHRlbnQoZXh0ZW50KWAuXG4gKlxuICogSW4gYWRkaXRpb24gdG8gUHJvajRqcyBzdXBwb3J0LCBhbnkgdHJhbnNmb3JtIGZ1bmN0aW9ucyBjYW4gYmUgYWRkZWQgd2l0aFxuICoge0BsaW5rIG1vZHVsZTpvbC9wcm9qLmFkZENvb3JkaW5hdGVUcmFuc2Zvcm1zfS4gVG8gdXNlIHRoaXMsIHlvdSBtdXN0IGZpcnN0IGNyZWF0ZVxuICogYSB7QGxpbmsgbW9kdWxlOm9sL3Byb2ovUHJvamVjdGlvbn5Qcm9qZWN0aW9ufSBvYmplY3QgZm9yIHRoZSBuZXcgcHJvamVjdGlvbiBhbmQgYWRkIGl0IHdpdGhcbiAqIHtAbGluayBtb2R1bGU6b2wvcHJvai5hZGRQcm9qZWN0aW9ufS4gWW91IGNhbiB0aGVuIGFkZCB0aGUgZm9yd2FyZCBhbmQgaW52ZXJzZVxuICogZnVuY3Rpb25zIHdpdGgge0BsaW5rIG1vZHVsZTpvbC9wcm9qLmFkZENvb3JkaW5hdGVUcmFuc2Zvcm1zfS4gU2VlXG4gKiBleGFtcGxlcy93bXMtY3VzdG9tLXByb2ogZm9yIGFuIGV4YW1wbGUgb2YgdGhpcy5cbiAqXG4gKiBOb3RlIHRoYXQgaWYgbm8gdHJhbnNmb3JtcyBhcmUgbmVlZGVkIGFuZCB5b3Ugb25seSBuZWVkIHRvIGRlZmluZSB0aGVcbiAqIHByb2plY3Rpb24sIGp1c3QgYWRkIGEge0BsaW5rIG1vZHVsZTpvbC9wcm9qL1Byb2plY3Rpb25+UHJvamVjdGlvbn0gd2l0aFxuICoge0BsaW5rIG1vZHVsZTpvbC9wcm9qLmFkZFByb2plY3Rpb259LiBTZWUgZXhhbXBsZXMvd21zLW5vLXByb2ogZm9yIGFuIGV4YW1wbGUgb2ZcbiAqIHRoaXMuXG4gKi9cbmltcG9ydCBQcm9qZWN0aW9uIGZyb20gJy4vcHJvai9Qcm9qZWN0aW9uLmpzJztcbmltcG9ydCB7XG4gIFBST0pFQ1RJT05TIGFzIEVQU0czODU3X1BST0pFQ1RJT05TLFxuICBmcm9tRVBTRzQzMjYsXG4gIHRvRVBTRzQzMjYsXG59IGZyb20gJy4vcHJvai9lcHNnMzg1Ny5qcyc7XG5pbXBvcnQge1BST0pFQ1RJT05TIGFzIEVQU0c0MzI2X1BST0pFQ1RJT05TfSBmcm9tICcuL3Byb2ovZXBzZzQzMjYuanMnO1xuaW1wb3J0IHtNRVRFUlNfUEVSX1VOSVR9IGZyb20gJy4vcHJvai9Vbml0cy5qcyc7XG5pbXBvcnQge1xuICBhZGQgYXMgYWRkUHJvaixcbiAgY2xlYXIgYXMgY2xlYXJQcm9qLFxuICBnZXQgYXMgZ2V0UHJvaixcbn0gZnJvbSAnLi9wcm9qL3Byb2plY3Rpb25zLmpzJztcbmltcG9ydCB7XG4gIGFkZCBhcyBhZGRUcmFuc2Zvcm1GdW5jLFxuICBjbGVhciBhcyBjbGVhclRyYW5zZm9ybUZ1bmNzLFxuICBnZXQgYXMgZ2V0VHJhbnNmb3JtRnVuYyxcbn0gZnJvbSAnLi9wcm9qL3RyYW5zZm9ybXMuanMnO1xuaW1wb3J0IHthcHBseVRyYW5zZm9ybSwgZ2V0V2lkdGh9IGZyb20gJy4vZXh0ZW50LmpzJztcbmltcG9ydCB7Y2xhbXAsIG1vZHVsb30gZnJvbSAnLi9tYXRoLmpzJztcbmltcG9ydCB7ZXF1YWxzLCBnZXRXb3JsZHNBd2F5fSBmcm9tICcuL2Nvb3JkaW5hdGUuanMnO1xuaW1wb3J0IHtnZXREaXN0YW5jZX0gZnJvbSAnLi9zcGhlcmUuanMnO1xuaW1wb3J0IHt3YXJufSBmcm9tICcuL2NvbnNvbGUuanMnO1xuXG4vKipcbiAqIEEgcHJvamVjdGlvbiBhcyB7QGxpbmsgbW9kdWxlOm9sL3Byb2ovUHJvamVjdGlvbn5Qcm9qZWN0aW9ufSwgU1JTIGlkZW50aWZpZXJcbiAqIHN0cmluZyBvciB1bmRlZmluZWQuXG4gKiBAdHlwZWRlZiB7UHJvamVjdGlvbnxzdHJpbmd8dW5kZWZpbmVkfSBQcm9qZWN0aW9uTGlrZVxuICogQGFwaVxuICovXG5cbi8qKlxuICogQSB0cmFuc2Zvcm0gZnVuY3Rpb24gYWNjZXB0cyBhbiBhcnJheSBvZiBpbnB1dCBjb29yZGluYXRlIHZhbHVlcywgYW4gb3B0aW9uYWxcbiAqIG91dHB1dCBhcnJheSwgYW5kIGFuIG9wdGlvbmFsIGRpbWVuc2lvbiAoZGVmYXVsdCBzaG91bGQgYmUgMikuICBUaGUgZnVuY3Rpb25cbiAqIHRyYW5zZm9ybXMgdGhlIGlucHV0IGNvb3JkaW5hdGUgdmFsdWVzLCBwb3B1bGF0ZXMgdGhlIG91dHB1dCBhcnJheSwgYW5kXG4gKiByZXR1cm5zIHRoZSBvdXRwdXQgYXJyYXkuXG4gKlxuICogQHR5cGVkZWYge2Z1bmN0aW9uKEFycmF5PG51bWJlcj4sIEFycmF5PG51bWJlcj49LCBudW1iZXI9KTogQXJyYXk8bnVtYmVyPn0gVHJhbnNmb3JtRnVuY3Rpb25cbiAqIEBhcGlcbiAqL1xuXG5leHBvcnQge01FVEVSU19QRVJfVU5JVH07XG5cbmV4cG9ydCB7UHJvamVjdGlvbn07XG5cbmxldCBzaG93Q29vcmRpbmF0ZVdhcm5pbmcgPSB0cnVlO1xuXG4vKipcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Rpc2FibGUgPSB0cnVlXSBEaXNhYmxlIGNvbnNvbGUgaW5mbyBhYm91dCBgdXNlR2VvZ3JhcGhpYygpYFxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlzYWJsZUNvb3JkaW5hdGVXYXJuaW5nKGRpc2FibGUpIHtcbiAgY29uc3QgaGlkZSA9IGRpc2FibGUgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBkaXNhYmxlO1xuICBzaG93Q29vcmRpbmF0ZVdhcm5pbmcgPSAhaGlkZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGlucHV0IElucHV0IGNvb3JkaW5hdGUgYXJyYXkuXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IFtvdXRwdXRdIE91dHB1dCBhcnJheSBvZiBjb29yZGluYXRlIHZhbHVlcy5cbiAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59IE91dHB1dCBjb29yZGluYXRlIGFycmF5IChuZXcgYXJyYXksIHNhbWUgY29vcmRpbmF0ZVxuICogICAgIHZhbHVlcykuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZVRyYW5zZm9ybShpbnB1dCwgb3V0cHV0KSB7XG4gIGlmIChvdXRwdXQgIT09IHVuZGVmaW5lZCkge1xuICAgIGZvciAobGV0IGkgPSAwLCBpaSA9IGlucHV0Lmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICAgIG91dHB1dFtpXSA9IGlucHV0W2ldO1xuICAgIH1cbiAgICBvdXRwdXQgPSBvdXRwdXQ7XG4gIH0gZWxzZSB7XG4gICAgb3V0cHV0ID0gaW5wdXQuc2xpY2UoKTtcbiAgfVxuICByZXR1cm4gb3V0cHV0O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gaW5wdXQgSW5wdXQgY29vcmRpbmF0ZSBhcnJheS5cbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gW291dHB1dF0gT3V0cHV0IGFycmF5IG9mIGNvb3JkaW5hdGUgdmFsdWVzLlxuICogQHJldHVybiB7QXJyYXk8bnVtYmVyPn0gSW5wdXQgY29vcmRpbmF0ZSBhcnJheSAoc2FtZSBhcnJheSBhcyBpbnB1dCkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGl0eVRyYW5zZm9ybShpbnB1dCwgb3V0cHV0KSB7XG4gIGlmIChvdXRwdXQgIT09IHVuZGVmaW5lZCAmJiBpbnB1dCAhPT0gb3V0cHV0KSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGlpID0gaW5wdXQubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgICAgb3V0cHV0W2ldID0gaW5wdXRbaV07XG4gICAgfVxuICAgIGlucHV0ID0gb3V0cHV0O1xuICB9XG4gIHJldHVybiBpbnB1dDtcbn1cblxuLyoqXG4gKiBBZGQgYSBQcm9qZWN0aW9uIG9iamVjdCB0byB0aGUgbGlzdCBvZiBzdXBwb3J0ZWQgcHJvamVjdGlvbnMgdGhhdCBjYW4gYmVcbiAqIGxvb2tlZCB1cCBieSB0aGVpciBjb2RlLlxuICpcbiAqIEBwYXJhbSB7UHJvamVjdGlvbn0gcHJvamVjdGlvbiBQcm9qZWN0aW9uIGluc3RhbmNlLlxuICogQGFwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJvamVjdGlvbihwcm9qZWN0aW9uKSB7XG4gIGFkZFByb2oocHJvamVjdGlvbi5nZXRDb2RlKCksIHByb2plY3Rpb24pO1xuICBhZGRUcmFuc2Zvcm1GdW5jKHByb2plY3Rpb24sIHByb2plY3Rpb24sIGNsb25lVHJhbnNmb3JtKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5PFByb2plY3Rpb24+fSBwcm9qZWN0aW9ucyBQcm9qZWN0aW9ucy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3Rpb25zKHByb2plY3Rpb25zKSB7XG4gIHByb2plY3Rpb25zLmZvckVhY2goYWRkUHJvamVjdGlvbik7XG59XG5cbi8qKlxuICogRmV0Y2hlcyBhIFByb2plY3Rpb24gb2JqZWN0IGZvciB0aGUgY29kZSBzcGVjaWZpZWQuXG4gKlxuICogQHBhcmFtIHtQcm9qZWN0aW9uTGlrZX0gcHJvamVjdGlvbkxpa2UgRWl0aGVyIGEgY29kZSBzdHJpbmcgd2hpY2ggaXNcbiAqICAgICBhIGNvbWJpbmF0aW9uIG9mIGF1dGhvcml0eSBhbmQgaWRlbnRpZmllciBzdWNoIGFzIFwiRVBTRzo0MzI2XCIsIG9yIGFuXG4gKiAgICAgZXhpc3RpbmcgcHJvamVjdGlvbiBvYmplY3QsIG9yIHVuZGVmaW5lZC5cbiAqIEByZXR1cm4ge1Byb2plY3Rpb258bnVsbH0gUHJvamVjdGlvbiBvYmplY3QsIG9yIG51bGwgaWYgbm90IGluIGxpc3QuXG4gKiBAYXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXQocHJvamVjdGlvbkxpa2UpIHtcbiAgcmV0dXJuIHR5cGVvZiBwcm9qZWN0aW9uTGlrZSA9PT0gJ3N0cmluZydcbiAgICA/IGdldFByb2ooLyoqIEB0eXBlIHtzdHJpbmd9ICovIChwcm9qZWN0aW9uTGlrZSkpXG4gICAgOiAvKiogQHR5cGUge1Byb2plY3Rpb259ICovIChwcm9qZWN0aW9uTGlrZSkgfHwgbnVsbDtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHJlc29sdXRpb24gb2YgdGhlIHBvaW50IGluIGRlZ3JlZXMgb3IgZGlzdGFuY2UgdW5pdHMuXG4gKiBGb3IgcHJvamVjdGlvbnMgd2l0aCBkZWdyZWVzIGFzIHRoZSB1bml0IHRoaXMgd2lsbCBzaW1wbHkgcmV0dXJuIHRoZVxuICogcHJvdmlkZWQgcmVzb2x1dGlvbi4gRm9yIG90aGVyIHByb2plY3Rpb25zIHRoZSBwb2ludCByZXNvbHV0aW9uIGlzXG4gKiBieSBkZWZhdWx0IGVzdGltYXRlZCBieSB0cmFuc2Zvcm1pbmcgdGhlIGBwb2ludGAgcGl4ZWwgdG8gRVBTRzo0MzI2LFxuICogbWVhc3VyaW5nIGl0cyB3aWR0aCBhbmQgaGVpZ2h0IG9uIHRoZSBub3JtYWwgc3BoZXJlLFxuICogYW5kIHRha2luZyB0aGUgYXZlcmFnZSBvZiB0aGUgd2lkdGggYW5kIGhlaWdodC5cbiAqIEEgY3VzdG9tIGZ1bmN0aW9uIGNhbiBiZSBwcm92aWRlZCBmb3IgYSBzcGVjaWZpYyBwcm9qZWN0aW9uLCBlaXRoZXJcbiAqIGJ5IHNldHRpbmcgdGhlIGBnZXRQb2ludFJlc29sdXRpb25gIG9wdGlvbiBpbiB0aGVcbiAqIHtAbGluayBtb2R1bGU6b2wvcHJvai9Qcm9qZWN0aW9uflByb2plY3Rpb259IGNvbnN0cnVjdG9yIG9yIGJ5IHVzaW5nXG4gKiB7QGxpbmsgbW9kdWxlOm9sL3Byb2ovUHJvamVjdGlvbn5Qcm9qZWN0aW9uI3NldEdldFBvaW50UmVzb2x1dGlvbn0gdG8gY2hhbmdlIGFuIGV4aXN0aW5nXG4gKiBwcm9qZWN0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7UHJvamVjdGlvbkxpa2V9IHByb2plY3Rpb24gVGhlIHByb2plY3Rpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gcmVzb2x1dGlvbiBOb21pbmFsIHJlc29sdXRpb24gaW4gcHJvamVjdGlvbiB1bml0cy5cbiAqIEBwYXJhbSB7aW1wb3J0KFwiLi9jb29yZGluYXRlLmpzXCIpLkNvb3JkaW5hdGV9IHBvaW50IFBvaW50IHRvIGZpbmQgYWRqdXN0ZWQgcmVzb2x1dGlvbiBhdC5cbiAqIEBwYXJhbSB7aW1wb3J0KFwiLi9wcm9qL1VuaXRzLmpzXCIpLlVuaXRzfSBbdW5pdHNdIFVuaXRzIHRvIGdldCB0aGUgcG9pbnQgcmVzb2x1dGlvbiBpbi5cbiAqIERlZmF1bHQgaXMgdGhlIHByb2plY3Rpb24ncyB1bml0cy5cbiAqIEByZXR1cm4ge251bWJlcn0gUG9pbnQgcmVzb2x1dGlvbi5cbiAqIEBhcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFBvaW50UmVzb2x1dGlvbihwcm9qZWN0aW9uLCByZXNvbHV0aW9uLCBwb2ludCwgdW5pdHMpIHtcbiAgcHJvamVjdGlvbiA9IGdldChwcm9qZWN0aW9uKTtcbiAgbGV0IHBvaW50UmVzb2x1dGlvbjtcbiAgY29uc3QgZ2V0dGVyID0gcHJvamVjdGlvbi5nZXRQb2ludFJlc29sdXRpb25GdW5jKCk7XG4gIGlmIChnZXR0ZXIpIHtcbiAgICBwb2ludFJlc29sdXRpb24gPSBnZXR0ZXIocmVzb2x1dGlvbiwgcG9pbnQpO1xuICAgIGlmICh1bml0cyAmJiB1bml0cyAhPT0gcHJvamVjdGlvbi5nZXRVbml0cygpKSB7XG4gICAgICBjb25zdCBtZXRlcnNQZXJVbml0ID0gcHJvamVjdGlvbi5nZXRNZXRlcnNQZXJVbml0KCk7XG4gICAgICBpZiAobWV0ZXJzUGVyVW5pdCkge1xuICAgICAgICBwb2ludFJlc29sdXRpb24gPVxuICAgICAgICAgIChwb2ludFJlc29sdXRpb24gKiBtZXRlcnNQZXJVbml0KSAvIE1FVEVSU19QRVJfVU5JVFt1bml0c107XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHByb2pVbml0cyA9IHByb2plY3Rpb24uZ2V0VW5pdHMoKTtcbiAgICBpZiAoKHByb2pVbml0cyA9PSAnZGVncmVlcycgJiYgIXVuaXRzKSB8fCB1bml0cyA9PSAnZGVncmVlcycpIHtcbiAgICAgIHBvaW50UmVzb2x1dGlvbiA9IHJlc29sdXRpb247XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEVzdGltYXRlIHBvaW50IHJlc29sdXRpb24gYnkgdHJhbnNmb3JtaW5nIHRoZSBjZW50ZXIgcGl4ZWwgdG8gRVBTRzo0MzI2LFxuICAgICAgLy8gbWVhc3VyaW5nIGl0cyB3aWR0aCBhbmQgaGVpZ2h0IG9uIHRoZSBub3JtYWwgc3BoZXJlLCBhbmQgdGFraW5nIHRoZVxuICAgICAgLy8gYXZlcmFnZSBvZiB0aGUgd2lkdGggYW5kIGhlaWdodC5cbiAgICAgIGNvbnN0IHRvRVBTRzQzMjYgPSBnZXRUcmFuc2Zvcm1Gcm9tUHJvamVjdGlvbnMoXG4gICAgICAgIHByb2plY3Rpb24sXG4gICAgICAgIGdldCgnRVBTRzo0MzI2JyksXG4gICAgICApO1xuICAgICAgaWYgKHRvRVBTRzQzMjYgPT09IGlkZW50aXR5VHJhbnNmb3JtICYmIHByb2pVbml0cyAhPT0gJ2RlZ3JlZXMnKSB7XG4gICAgICAgIC8vIG5vIHRyYW5zZm9ybSBpcyBhdmFpbGFibGVcbiAgICAgICAgcG9pbnRSZXNvbHV0aW9uID0gcmVzb2x1dGlvbiAqIHByb2plY3Rpb24uZ2V0TWV0ZXJzUGVyVW5pdCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHZlcnRpY2VzID0gW1xuICAgICAgICAgIHBvaW50WzBdIC0gcmVzb2x1dGlvbiAvIDIsXG4gICAgICAgICAgcG9pbnRbMV0sXG4gICAgICAgICAgcG9pbnRbMF0gKyByZXNvbHV0aW9uIC8gMixcbiAgICAgICAgICBwb2ludFsxXSxcbiAgICAgICAgICBwb2ludFswXSxcbiAgICAgICAgICBwb2ludFsxXSAtIHJlc29sdXRpb24gLyAyLFxuICAgICAgICAgIHBvaW50WzBdLFxuICAgICAgICAgIHBvaW50WzFdICsgcmVzb2x1dGlvbiAvIDIsXG4gICAgICAgIF07XG4gICAgICAgIHZlcnRpY2VzID0gdG9FUFNHNDMyNih2ZXJ0aWNlcywgdmVydGljZXMsIDIpO1xuICAgICAgICBjb25zdCB3aWR0aCA9IGdldERpc3RhbmNlKHZlcnRpY2VzLnNsaWNlKDAsIDIpLCB2ZXJ0aWNlcy5zbGljZSgyLCA0KSk7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IGdldERpc3RhbmNlKHZlcnRpY2VzLnNsaWNlKDQsIDYpLCB2ZXJ0aWNlcy5zbGljZSg2LCA4KSk7XG4gICAgICAgIHBvaW50UmVzb2x1dGlvbiA9ICh3aWR0aCArIGhlaWdodCkgLyAyO1xuICAgICAgfVxuICAgICAgY29uc3QgbWV0ZXJzUGVyVW5pdCA9IHVuaXRzXG4gICAgICAgID8gTUVURVJTX1BFUl9VTklUW3VuaXRzXVxuICAgICAgICA6IHByb2plY3Rpb24uZ2V0TWV0ZXJzUGVyVW5pdCgpO1xuICAgICAgaWYgKG1ldGVyc1BlclVuaXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwb2ludFJlc29sdXRpb24gLz0gbWV0ZXJzUGVyVW5pdDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHBvaW50UmVzb2x1dGlvbjtcbn1cblxuLyoqXG4gKiBSZWdpc3RlcnMgdHJhbnNmb3JtYXRpb24gZnVuY3Rpb25zIHRoYXQgZG9uJ3QgYWx0ZXIgY29vcmRpbmF0ZXMuIFRob3NlIGFsbG93XG4gKiB0byB0cmFuc2Zvcm0gYmV0d2VlbiBwcm9qZWN0aW9ucyB3aXRoIGVxdWFsIG1lYW5pbmcuXG4gKlxuICogQHBhcmFtIHtBcnJheTxQcm9qZWN0aW9uPn0gcHJvamVjdGlvbnMgUHJvamVjdGlvbnMuXG4gKiBAYXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRFcXVpdmFsZW50UHJvamVjdGlvbnMocHJvamVjdGlvbnMpIHtcbiAgYWRkUHJvamVjdGlvbnMocHJvamVjdGlvbnMpO1xuICBwcm9qZWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICBwcm9qZWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChkZXN0aW5hdGlvbikge1xuICAgICAgaWYgKHNvdXJjZSAhPT0gZGVzdGluYXRpb24pIHtcbiAgICAgICAgYWRkVHJhbnNmb3JtRnVuYyhzb3VyY2UsIGRlc3RpbmF0aW9uLCBjbG9uZVRyYW5zZm9ybSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG4vKipcbiAqIFJlZ2lzdGVycyB0cmFuc2Zvcm1hdGlvbiBmdW5jdGlvbnMgdG8gY29udmVydCBjb29yZGluYXRlcyBpbiBhbnkgcHJvamVjdGlvblxuICogaW4gcHJvamVjdGlvbjEgdG8gYW55IHByb2plY3Rpb24gaW4gcHJvamVjdGlvbjIuXG4gKlxuICogQHBhcmFtIHtBcnJheTxQcm9qZWN0aW9uPn0gcHJvamVjdGlvbnMxIFByb2plY3Rpb25zIHdpdGggZXF1YWxcbiAqICAgICBtZWFuaW5nLlxuICogQHBhcmFtIHtBcnJheTxQcm9qZWN0aW9uPn0gcHJvamVjdGlvbnMyIFByb2plY3Rpb25zIHdpdGggZXF1YWxcbiAqICAgICBtZWFuaW5nLlxuICogQHBhcmFtIHtUcmFuc2Zvcm1GdW5jdGlvbn0gZm9yd2FyZFRyYW5zZm9ybSBUcmFuc2Zvcm1hdGlvbiBmcm9tIGFueVxuICogICBwcm9qZWN0aW9uIGluIHByb2plY3Rpb24xIHRvIGFueSBwcm9qZWN0aW9uIGluIHByb2plY3Rpb24yLlxuICogQHBhcmFtIHtUcmFuc2Zvcm1GdW5jdGlvbn0gaW52ZXJzZVRyYW5zZm9ybSBUcmFuc2Zvcm0gZnJvbSBhbnkgcHJvamVjdGlvblxuICogICBpbiBwcm9qZWN0aW9uMiB0byBhbnkgcHJvamVjdGlvbiBpbiBwcm9qZWN0aW9uMS4uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRFcXVpdmFsZW50VHJhbnNmb3JtcyhcbiAgcHJvamVjdGlvbnMxLFxuICBwcm9qZWN0aW9uczIsXG4gIGZvcndhcmRUcmFuc2Zvcm0sXG4gIGludmVyc2VUcmFuc2Zvcm0sXG4pIHtcbiAgcHJvamVjdGlvbnMxLmZvckVhY2goZnVuY3Rpb24gKHByb2plY3Rpb24xKSB7XG4gICAgcHJvamVjdGlvbnMyLmZvckVhY2goZnVuY3Rpb24gKHByb2plY3Rpb24yKSB7XG4gICAgICBhZGRUcmFuc2Zvcm1GdW5jKHByb2plY3Rpb24xLCBwcm9qZWN0aW9uMiwgZm9yd2FyZFRyYW5zZm9ybSk7XG4gICAgICBhZGRUcmFuc2Zvcm1GdW5jKHByb2plY3Rpb24yLCBwcm9qZWN0aW9uMSwgaW52ZXJzZVRyYW5zZm9ybSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG4vKipcbiAqIENsZWFyIGFsbCBjYWNoZWQgcHJvamVjdGlvbnMgYW5kIHRyYW5zZm9ybXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckFsbFByb2plY3Rpb25zKCkge1xuICBjbGVhclByb2ooKTtcbiAgY2xlYXJUcmFuc2Zvcm1GdW5jcygpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7UHJvamVjdGlvbnxzdHJpbmd8dW5kZWZpbmVkfSBwcm9qZWN0aW9uIFByb2plY3Rpb24uXG4gKiBAcGFyYW0ge3N0cmluZ30gZGVmYXVsdENvZGUgRGVmYXVsdCBjb2RlLlxuICogQHJldHVybiB7UHJvamVjdGlvbn0gUHJvamVjdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3Rpb24ocHJvamVjdGlvbiwgZGVmYXVsdENvZGUpIHtcbiAgaWYgKCFwcm9qZWN0aW9uKSB7XG4gICAgcmV0dXJuIGdldChkZWZhdWx0Q29kZSk7XG4gIH1cbiAgaWYgKHR5cGVvZiBwcm9qZWN0aW9uID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBnZXQocHJvamVjdGlvbik7XG4gIH1cbiAgcmV0dXJuIC8qKiBAdHlwZSB7UHJvamVjdGlvbn0gKi8gKHByb2plY3Rpb24pO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSB7QGxpbmsgbW9kdWxlOm9sL3Byb2p+VHJhbnNmb3JtRnVuY3Rpb259IGZyb20gYSBzaW1wbGUgMkQgY29vcmRpbmF0ZSB0cmFuc2Zvcm1cbiAqIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtmdW5jdGlvbihpbXBvcnQoXCIuL2Nvb3JkaW5hdGUuanNcIikuQ29vcmRpbmF0ZSk6IGltcG9ydChcIi4vY29vcmRpbmF0ZS5qc1wiKS5Db29yZGluYXRlfSBjb29yZFRyYW5zZm9ybSBDb29yZGluYXRlXG4gKiAgICAgdHJhbnNmb3JtLlxuICogQHJldHVybiB7VHJhbnNmb3JtRnVuY3Rpb259IFRyYW5zZm9ybSBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRyYW5zZm9ybUZyb21Db29yZGluYXRlVHJhbnNmb3JtKGNvb3JkVHJhbnNmb3JtKSB7XG4gIHJldHVybiAoXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBpbnB1dCBJbnB1dC5cbiAgICAgKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IFtvdXRwdXRdIE91dHB1dC5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2RpbWVuc2lvbl0gRGltZW5zaW9uLlxuICAgICAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59IE91dHB1dC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAoaW5wdXQsIG91dHB1dCwgZGltZW5zaW9uKSB7XG4gICAgICBjb25zdCBsZW5ndGggPSBpbnB1dC5sZW5ndGg7XG4gICAgICBkaW1lbnNpb24gPSBkaW1lbnNpb24gIT09IHVuZGVmaW5lZCA/IGRpbWVuc2lvbiA6IDI7XG4gICAgICBvdXRwdXQgPSBvdXRwdXQgIT09IHVuZGVmaW5lZCA/IG91dHB1dCA6IG5ldyBBcnJheShsZW5ndGgpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gZGltZW5zaW9uKSB7XG4gICAgICAgIGNvbnN0IHBvaW50ID0gY29vcmRUcmFuc2Zvcm0oaW5wdXQuc2xpY2UoaSwgaSArIGRpbWVuc2lvbikpO1xuICAgICAgICBjb25zdCBwb2ludExlbmd0aCA9IHBvaW50Lmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaiA9IDAsIGpqID0gZGltZW5zaW9uOyBqIDwgamo7ICsraikge1xuICAgICAgICAgIG91dHB1dFtpICsgal0gPSBqID49IHBvaW50TGVuZ3RoID8gaW5wdXRbaSArIGpdIDogcG9pbnRbal07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfVxuICApO1xufVxuXG4vKipcbiAqIFJlZ2lzdGVycyBjb29yZGluYXRlIHRyYW5zZm9ybSBmdW5jdGlvbnMgdG8gY29udmVydCBjb29yZGluYXRlcyBiZXR3ZWVuIHRoZVxuICogc291cmNlIHByb2plY3Rpb24gYW5kIHRoZSBkZXN0aW5hdGlvbiBwcm9qZWN0aW9uLlxuICogVGhlIGZvcndhcmQgYW5kIGludmVyc2UgZnVuY3Rpb25zIGNvbnZlcnQgY29vcmRpbmF0ZSBwYWlyczsgdGhpcyBmdW5jdGlvblxuICogY29udmVydHMgdGhlc2UgaW50byB0aGUgZnVuY3Rpb25zIHVzZWQgaW50ZXJuYWxseSB3aGljaCBhbHNvIGhhbmRsZVxuICogZXh0ZW50cyBhbmQgY29vcmRpbmF0ZSBhcnJheXMuXG4gKlxuICogQHBhcmFtIHtQcm9qZWN0aW9uTGlrZX0gc291cmNlIFNvdXJjZSBwcm9qZWN0aW9uLlxuICogQHBhcmFtIHtQcm9qZWN0aW9uTGlrZX0gZGVzdGluYXRpb24gRGVzdGluYXRpb24gcHJvamVjdGlvbi5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oaW1wb3J0KFwiLi9jb29yZGluYXRlLmpzXCIpLkNvb3JkaW5hdGUpOiBpbXBvcnQoXCIuL2Nvb3JkaW5hdGUuanNcIikuQ29vcmRpbmF0ZX0gZm9yd2FyZCBUaGUgZm9yd2FyZCB0cmFuc2Zvcm1cbiAqICAgICBmdW5jdGlvbiAodGhhdCBpcywgZnJvbSB0aGUgc291cmNlIHByb2plY3Rpb24gdG8gdGhlIGRlc3RpbmF0aW9uXG4gKiAgICAgcHJvamVjdGlvbikgdGhhdCB0YWtlcyBhIHtAbGluayBtb2R1bGU6b2wvY29vcmRpbmF0ZX5Db29yZGluYXRlfSBhcyBhcmd1bWVudCBhbmQgcmV0dXJuc1xuICogICAgIHRoZSB0cmFuc2Zvcm1lZCB7QGxpbmsgbW9kdWxlOm9sL2Nvb3JkaW5hdGV+Q29vcmRpbmF0ZX0uXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKGltcG9ydChcIi4vY29vcmRpbmF0ZS5qc1wiKS5Db29yZGluYXRlKTogaW1wb3J0KFwiLi9jb29yZGluYXRlLmpzXCIpLkNvb3JkaW5hdGV9IGludmVyc2UgVGhlIGludmVyc2UgdHJhbnNmb3JtXG4gKiAgICAgZnVuY3Rpb24gKHRoYXQgaXMsIGZyb20gdGhlIGRlc3RpbmF0aW9uIHByb2plY3Rpb24gdG8gdGhlIHNvdXJjZVxuICogICAgIHByb2plY3Rpb24pIHRoYXQgdGFrZXMgYSB7QGxpbmsgbW9kdWxlOm9sL2Nvb3JkaW5hdGV+Q29vcmRpbmF0ZX0gYXMgYXJndW1lbnQgYW5kIHJldHVybnNcbiAqICAgICB0aGUgdHJhbnNmb3JtZWQge0BsaW5rIG1vZHVsZTpvbC9jb29yZGluYXRlfkNvb3JkaW5hdGV9LiBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIGNhbiBvbmx5XG4gKiAgICAgdHJhbnNmb3JtIGxlc3MgZGltZW5zaW9ucyB0aGFuIHRoZSBpbnB1dCBjb29yZGluYXRlLCBpdCBpcyBzdXBwb3NlZWQgdG8gcmV0dXJuIGEgY29vcmRpbmF0ZVxuICogICAgIHdpdGggb25seSB0aGUgbGVuZ3RoIGl0IGNhbiB0cmFuc2Zvcm0uIFRoZSBvdGhlciBkaW1lbnNpb25zIHdpbGwgYmUgdGFrZW4gdW5jaGFuZ2VkIGZyb20gdGhlXG4gKiAgICAgc291cmNlLlxuICogQGFwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkQ29vcmRpbmF0ZVRyYW5zZm9ybXMoc291cmNlLCBkZXN0aW5hdGlvbiwgZm9yd2FyZCwgaW52ZXJzZSkge1xuICBjb25zdCBzb3VyY2VQcm9qID0gZ2V0KHNvdXJjZSk7XG4gIGNvbnN0IGRlc3RQcm9qID0gZ2V0KGRlc3RpbmF0aW9uKTtcbiAgYWRkVHJhbnNmb3JtRnVuYyhcbiAgICBzb3VyY2VQcm9qLFxuICAgIGRlc3RQcm9qLFxuICAgIGNyZWF0ZVRyYW5zZm9ybUZyb21Db29yZGluYXRlVHJhbnNmb3JtKGZvcndhcmQpLFxuICApO1xuICBhZGRUcmFuc2Zvcm1GdW5jKFxuICAgIGRlc3RQcm9qLFxuICAgIHNvdXJjZVByb2osXG4gICAgY3JlYXRlVHJhbnNmb3JtRnJvbUNvb3JkaW5hdGVUcmFuc2Zvcm0oaW52ZXJzZSksXG4gICk7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtcyBhIGNvb3JkaW5hdGUgZnJvbSBsb25naXR1ZGUvbGF0aXR1ZGUgdG8gYSBkaWZmZXJlbnQgcHJvamVjdGlvbi5cbiAqIEBwYXJhbSB7aW1wb3J0KFwiLi9jb29yZGluYXRlLmpzXCIpLkNvb3JkaW5hdGV9IGNvb3JkaW5hdGUgQ29vcmRpbmF0ZSBhcyBsb25naXR1ZGUgYW5kIGxhdGl0dWRlLCBpLmUuXG4gKiAgICAgYW4gYXJyYXkgd2l0aCBsb25naXR1ZGUgYXMgMXN0IGFuZCBsYXRpdHVkZSBhcyAybmQgZWxlbWVudC5cbiAqIEBwYXJhbSB7UHJvamVjdGlvbkxpa2V9IFtwcm9qZWN0aW9uXSBUYXJnZXQgcHJvamVjdGlvbi4gVGhlXG4gKiAgICAgZGVmYXVsdCBpcyBXZWIgTWVyY2F0b3IsIGkuZS4gJ0VQU0c6Mzg1NycuXG4gKiBAcmV0dXJuIHtpbXBvcnQoXCIuL2Nvb3JkaW5hdGUuanNcIikuQ29vcmRpbmF0ZX0gQ29vcmRpbmF0ZSBwcm9qZWN0ZWQgdG8gdGhlIHRhcmdldCBwcm9qZWN0aW9uLlxuICogQGFwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbUxvbkxhdChjb29yZGluYXRlLCBwcm9qZWN0aW9uKSB7XG4gIGRpc2FibGVDb29yZGluYXRlV2FybmluZygpO1xuICByZXR1cm4gdHJhbnNmb3JtKFxuICAgIGNvb3JkaW5hdGUsXG4gICAgJ0VQU0c6NDMyNicsXG4gICAgcHJvamVjdGlvbiAhPT0gdW5kZWZpbmVkID8gcHJvamVjdGlvbiA6ICdFUFNHOjM4NTcnLFxuICApO1xufVxuXG4vKipcbiAqIFRyYW5zZm9ybXMgYSBjb29yZGluYXRlIHRvIGxvbmdpdHVkZS9sYXRpdHVkZS5cbiAqIEBwYXJhbSB7aW1wb3J0KFwiLi9jb29yZGluYXRlLmpzXCIpLkNvb3JkaW5hdGV9IGNvb3JkaW5hdGUgUHJvamVjdGVkIGNvb3JkaW5hdGUuXG4gKiBAcGFyYW0ge1Byb2plY3Rpb25MaWtlfSBbcHJvamVjdGlvbl0gUHJvamVjdGlvbiBvZiB0aGUgY29vcmRpbmF0ZS5cbiAqICAgICBUaGUgZGVmYXVsdCBpcyBXZWIgTWVyY2F0b3IsIGkuZS4gJ0VQU0c6Mzg1NycuXG4gKiBAcmV0dXJuIHtpbXBvcnQoXCIuL2Nvb3JkaW5hdGUuanNcIikuQ29vcmRpbmF0ZX0gQ29vcmRpbmF0ZSBhcyBsb25naXR1ZGUgYW5kIGxhdGl0dWRlLCBpLmUuIGFuIGFycmF5XG4gKiAgICAgd2l0aCBsb25naXR1ZGUgYXMgMXN0IGFuZCBsYXRpdHVkZSBhcyAybmQgZWxlbWVudC5cbiAqIEBhcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvTG9uTGF0KGNvb3JkaW5hdGUsIHByb2plY3Rpb24pIHtcbiAgY29uc3QgbG9uTGF0ID0gdHJhbnNmb3JtKFxuICAgIGNvb3JkaW5hdGUsXG4gICAgcHJvamVjdGlvbiAhPT0gdW5kZWZpbmVkID8gcHJvamVjdGlvbiA6ICdFUFNHOjM4NTcnLFxuICAgICdFUFNHOjQzMjYnLFxuICApO1xuICBjb25zdCBsb24gPSBsb25MYXRbMF07XG4gIGlmIChsb24gPCAtMTgwIHx8IGxvbiA+IDE4MCkge1xuICAgIGxvbkxhdFswXSA9IG1vZHVsbyhsb24gKyAxODAsIDM2MCkgLSAxODA7XG4gIH1cbiAgcmV0dXJuIGxvbkxhdDtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgdHdvIHByb2plY3Rpb25zIGFyZSB0aGUgc2FtZSwgdGhhdCBpcyBldmVyeSBjb29yZGluYXRlIGluIG9uZVxuICogcHJvamVjdGlvbiBkb2VzIHJlcHJlc2VudCB0aGUgc2FtZSBnZW9ncmFwaGljIHBvaW50IGFzIHRoZSBzYW1lIGNvb3JkaW5hdGUgaW5cbiAqIHRoZSBvdGhlciBwcm9qZWN0aW9uLlxuICpcbiAqIEBwYXJhbSB7UHJvamVjdGlvbn0gcHJvamVjdGlvbjEgUHJvamVjdGlvbiAxLlxuICogQHBhcmFtIHtQcm9qZWN0aW9ufSBwcm9qZWN0aW9uMiBQcm9qZWN0aW9uIDIuXG4gKiBAcmV0dXJuIHtib29sZWFufSBFcXVpdmFsZW50LlxuICogQGFwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gZXF1aXZhbGVudChwcm9qZWN0aW9uMSwgcHJvamVjdGlvbjIpIHtcbiAgaWYgKHByb2plY3Rpb24xID09PSBwcm9qZWN0aW9uMikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGNvbnN0IGVxdWFsVW5pdHMgPSBwcm9qZWN0aW9uMS5nZXRVbml0cygpID09PSBwcm9qZWN0aW9uMi5nZXRVbml0cygpO1xuICBpZiAocHJvamVjdGlvbjEuZ2V0Q29kZSgpID09PSBwcm9qZWN0aW9uMi5nZXRDb2RlKCkpIHtcbiAgICByZXR1cm4gZXF1YWxVbml0cztcbiAgfVxuICBjb25zdCB0cmFuc2Zvcm1GdW5jID0gZ2V0VHJhbnNmb3JtRnJvbVByb2plY3Rpb25zKHByb2plY3Rpb24xLCBwcm9qZWN0aW9uMik7XG4gIHJldHVybiB0cmFuc2Zvcm1GdW5jID09PSBjbG9uZVRyYW5zZm9ybSAmJiBlcXVhbFVuaXRzO1xufVxuXG4vKipcbiAqIFNlYXJjaGVzIGluIHRoZSBsaXN0IG9mIHRyYW5zZm9ybSBmdW5jdGlvbnMgZm9yIHRoZSBmdW5jdGlvbiBmb3IgY29udmVydGluZ1xuICogY29vcmRpbmF0ZXMgZnJvbSB0aGUgc291cmNlIHByb2plY3Rpb24gdG8gdGhlIGRlc3RpbmF0aW9uIHByb2plY3Rpb24uXG4gKlxuICogQHBhcmFtIHtQcm9qZWN0aW9ufSBzb3VyY2VQcm9qZWN0aW9uIFNvdXJjZSBQcm9qZWN0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7UHJvamVjdGlvbn0gZGVzdGluYXRpb25Qcm9qZWN0aW9uIERlc3RpbmF0aW9uIFByb2plY3Rpb25cbiAqICAgICBvYmplY3QuXG4gKiBAcmV0dXJuIHtUcmFuc2Zvcm1GdW5jdGlvbn0gVHJhbnNmb3JtIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHJhbnNmb3JtRnJvbVByb2plY3Rpb25zKFxuICBzb3VyY2VQcm9qZWN0aW9uLFxuICBkZXN0aW5hdGlvblByb2plY3Rpb24sXG4pIHtcbiAgY29uc3Qgc291cmNlQ29kZSA9IHNvdXJjZVByb2plY3Rpb24uZ2V0Q29kZSgpO1xuICBjb25zdCBkZXN0aW5hdGlvbkNvZGUgPSBkZXN0aW5hdGlvblByb2plY3Rpb24uZ2V0Q29kZSgpO1xuICBsZXQgdHJhbnNmb3JtRnVuYyA9IGdldFRyYW5zZm9ybUZ1bmMoc291cmNlQ29kZSwgZGVzdGluYXRpb25Db2RlKTtcbiAgaWYgKCF0cmFuc2Zvcm1GdW5jKSB7XG4gICAgdHJhbnNmb3JtRnVuYyA9IGlkZW50aXR5VHJhbnNmb3JtO1xuICB9XG4gIHJldHVybiB0cmFuc2Zvcm1GdW5jO1xufVxuXG4vKipcbiAqIEdpdmVuIHRoZSBwcm9qZWN0aW9uLWxpa2Ugb2JqZWN0cywgc2VhcmNoZXMgZm9yIGEgdHJhbnNmb3JtYXRpb25cbiAqIGZ1bmN0aW9uIHRvIGNvbnZlcnQgYSBjb29yZGluYXRlcyBhcnJheSBmcm9tIHRoZSBzb3VyY2UgcHJvamVjdGlvbiB0byB0aGVcbiAqIGRlc3RpbmF0aW9uIHByb2plY3Rpb24uXG4gKlxuICogQHBhcmFtIHtQcm9qZWN0aW9uTGlrZX0gc291cmNlIFNvdXJjZS5cbiAqIEBwYXJhbSB7UHJvamVjdGlvbkxpa2V9IGRlc3RpbmF0aW9uIERlc3RpbmF0aW9uLlxuICogQHJldHVybiB7VHJhbnNmb3JtRnVuY3Rpb259IFRyYW5zZm9ybSBmdW5jdGlvbi5cbiAqIEBhcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRyYW5zZm9ybShzb3VyY2UsIGRlc3RpbmF0aW9uKSB7XG4gIGNvbnN0IHNvdXJjZVByb2plY3Rpb24gPSBnZXQoc291cmNlKTtcbiAgY29uc3QgZGVzdGluYXRpb25Qcm9qZWN0aW9uID0gZ2V0KGRlc3RpbmF0aW9uKTtcbiAgcmV0dXJuIGdldFRyYW5zZm9ybUZyb21Qcm9qZWN0aW9ucyhzb3VyY2VQcm9qZWN0aW9uLCBkZXN0aW5hdGlvblByb2plY3Rpb24pO1xufVxuXG4vKipcbiAqIFRyYW5zZm9ybXMgYSBjb29yZGluYXRlIGZyb20gc291cmNlIHByb2plY3Rpb24gdG8gZGVzdGluYXRpb24gcHJvamVjdGlvbi5cbiAqIFRoaXMgcmV0dXJucyBhIG5ldyBjb29yZGluYXRlIChhbmQgZG9lcyBub3QgbW9kaWZ5IHRoZSBvcmlnaW5hbCkuXG4gKlxuICogU2VlIHtAbGluayBtb2R1bGU6b2wvcHJvai50cmFuc2Zvcm1FeHRlbnR9IGZvciBleHRlbnQgdHJhbnNmb3JtYXRpb24uXG4gKiBTZWUgdGhlIHRyYW5zZm9ybSBtZXRob2Qgb2Yge0BsaW5rIG1vZHVsZTpvbC9nZW9tL0dlb21ldHJ5fkdlb21ldHJ5fSBhbmQgaXRzXG4gKiBzdWJjbGFzc2VzIGZvciBnZW9tZXRyeSB0cmFuc2Zvcm1zLlxuICpcbiAqIEBwYXJhbSB7aW1wb3J0KFwiLi9jb29yZGluYXRlLmpzXCIpLkNvb3JkaW5hdGV9IGNvb3JkaW5hdGUgQ29vcmRpbmF0ZS5cbiAqIEBwYXJhbSB7UHJvamVjdGlvbkxpa2V9IHNvdXJjZSBTb3VyY2UgcHJvamVjdGlvbi1saWtlLlxuICogQHBhcmFtIHtQcm9qZWN0aW9uTGlrZX0gZGVzdGluYXRpb24gRGVzdGluYXRpb24gcHJvamVjdGlvbi1saWtlLlxuICogQHJldHVybiB7aW1wb3J0KFwiLi9jb29yZGluYXRlLmpzXCIpLkNvb3JkaW5hdGV9IENvb3JkaW5hdGUuXG4gKiBAYXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm0oY29vcmRpbmF0ZSwgc291cmNlLCBkZXN0aW5hdGlvbikge1xuICBjb25zdCB0cmFuc2Zvcm1GdW5jID0gZ2V0VHJhbnNmb3JtKHNvdXJjZSwgZGVzdGluYXRpb24pO1xuICByZXR1cm4gdHJhbnNmb3JtRnVuYyhjb29yZGluYXRlLCB1bmRlZmluZWQsIGNvb3JkaW5hdGUubGVuZ3RoKTtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIGFuIGV4dGVudCBmcm9tIHNvdXJjZSBwcm9qZWN0aW9uIHRvIGRlc3RpbmF0aW9uIHByb2plY3Rpb24uICBUaGlzXG4gKiByZXR1cm5zIGEgbmV3IGV4dGVudCAoYW5kIGRvZXMgbm90IG1vZGlmeSB0aGUgb3JpZ2luYWwpLlxuICpcbiAqIEBwYXJhbSB7aW1wb3J0KFwiLi9leHRlbnQuanNcIikuRXh0ZW50fSBleHRlbnQgVGhlIGV4dGVudCB0byB0cmFuc2Zvcm0uXG4gKiBAcGFyYW0ge1Byb2plY3Rpb25MaWtlfSBzb3VyY2UgU291cmNlIHByb2plY3Rpb24tbGlrZS5cbiAqIEBwYXJhbSB7UHJvamVjdGlvbkxpa2V9IGRlc3RpbmF0aW9uIERlc3RpbmF0aW9uIHByb2plY3Rpb24tbGlrZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RvcHNdIE51bWJlciBvZiBzdG9wcyBwZXIgc2lkZSB1c2VkIGZvciB0aGUgdHJhbnNmb3JtLlxuICogQnkgZGVmYXVsdCBvbmx5IHRoZSBjb3JuZXJzIGFyZSB1c2VkLlxuICogQHJldHVybiB7aW1wb3J0KFwiLi9leHRlbnQuanNcIikuRXh0ZW50fSBUaGUgdHJhbnNmb3JtZWQgZXh0ZW50LlxuICogQGFwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtRXh0ZW50KGV4dGVudCwgc291cmNlLCBkZXN0aW5hdGlvbiwgc3RvcHMpIHtcbiAgY29uc3QgdHJhbnNmb3JtRnVuYyA9IGdldFRyYW5zZm9ybShzb3VyY2UsIGRlc3RpbmF0aW9uKTtcbiAgcmV0dXJuIGFwcGx5VHJhbnNmb3JtKGV4dGVudCwgdHJhbnNmb3JtRnVuYywgdW5kZWZpbmVkLCBzdG9wcyk7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgZ2l2ZW4gcG9pbnQgdG8gdGhlIGRlc3RpbmF0aW9uIHByb2plY3Rpb24uXG4gKlxuICogQHBhcmFtIHtpbXBvcnQoXCIuL2Nvb3JkaW5hdGUuanNcIikuQ29vcmRpbmF0ZX0gcG9pbnQgUG9pbnQuXG4gKiBAcGFyYW0ge1Byb2plY3Rpb259IHNvdXJjZVByb2plY3Rpb24gU291cmNlIHByb2plY3Rpb24uXG4gKiBAcGFyYW0ge1Byb2plY3Rpb259IGRlc3RpbmF0aW9uUHJvamVjdGlvbiBEZXN0aW5hdGlvbiBwcm9qZWN0aW9uLlxuICogQHJldHVybiB7aW1wb3J0KFwiLi9jb29yZGluYXRlLmpzXCIpLkNvb3JkaW5hdGV9IFBvaW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtV2l0aFByb2plY3Rpb25zKFxuICBwb2ludCxcbiAgc291cmNlUHJvamVjdGlvbixcbiAgZGVzdGluYXRpb25Qcm9qZWN0aW9uLFxuKSB7XG4gIGNvbnN0IHRyYW5zZm9ybUZ1bmMgPSBnZXRUcmFuc2Zvcm1Gcm9tUHJvamVjdGlvbnMoXG4gICAgc291cmNlUHJvamVjdGlvbixcbiAgICBkZXN0aW5hdGlvblByb2plY3Rpb24sXG4gICk7XG4gIHJldHVybiB0cmFuc2Zvcm1GdW5jKHBvaW50KTtcbn1cblxuLyoqXG4gKiBAdHlwZSB7UHJvamVjdGlvbnxudWxsfVxuICovXG5sZXQgdXNlclByb2plY3Rpb24gPSBudWxsO1xuXG4vKipcbiAqIFNldCB0aGUgcHJvamVjdGlvbiBmb3IgY29vcmRpbmF0ZXMgc3VwcGxpZWQgZnJvbSBhbmQgcmV0dXJuZWQgYnkgQVBJIG1ldGhvZHMuXG4gKiBUaGlzIGluY2x1ZGVzIGFsbCBBUEkgbWV0aG9kcyBleGNlcHQgZm9yIHRob3NlIGludGVyYWN0aW5nIHdpdGggdGlsZSBncmlkcyxcbiAqIHBsdXMge0BsaW5rIGltcG9ydChcIi4vTWFwLmpzXCIpLkZyYW1lU3RhdGV9IGFuZCB7QGxpbmsgaW1wb3J0KFwiLi9WaWV3LmpzXCIpLlN0YXRlfS5cbiAqIEBwYXJhbSB7UHJvamVjdGlvbkxpa2V9IHByb2plY3Rpb24gVGhlIHVzZXIgcHJvamVjdGlvbi5cbiAqIEBhcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldFVzZXJQcm9qZWN0aW9uKHByb2plY3Rpb24pIHtcbiAgdXNlclByb2plY3Rpb24gPSBnZXQocHJvamVjdGlvbik7XG59XG5cbi8qKlxuICogQ2xlYXIgdGhlIHVzZXIgcHJvamVjdGlvbiBpZiBzZXQuXG4gKiBAYXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGVhclVzZXJQcm9qZWN0aW9uKCkge1xuICB1c2VyUHJvamVjdGlvbiA9IG51bGw7XG59XG5cbi8qKlxuICogR2V0IHRoZSBwcm9qZWN0aW9uIGZvciBjb29yZGluYXRlcyBzdXBwbGllZCBmcm9tIGFuZCByZXR1cm5lZCBieSBBUEkgbWV0aG9kcy5cbiAqIEByZXR1cm4ge1Byb2plY3Rpb258bnVsbH0gVGhlIHVzZXIgcHJvamVjdGlvbiAob3IgbnVsbCBpZiBub3Qgc2V0KS5cbiAqIEBhcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJQcm9qZWN0aW9uKCkge1xuICByZXR1cm4gdXNlclByb2plY3Rpb247XG59XG5cbi8qKlxuICogVXNlIGdlb2dyYXBoaWMgY29vcmRpbmF0ZXMgKFdHUy04NCBkYXR1bSkgaW4gQVBJIG1ldGhvZHMuXG4gKiBUaGlzIGluY2x1ZGVzIGFsbCBBUEkgbWV0aG9kcyBleGNlcHQgZm9yIHRob3NlIGludGVyYWN0aW5nIHdpdGggdGlsZSBncmlkcyxcbiAqIHBsdXMge0BsaW5rIGltcG9ydChcIi4vTWFwLmpzXCIpLkZyYW1lU3RhdGV9IGFuZCB7QGxpbmsgaW1wb3J0KFwiLi9WaWV3LmpzXCIpLlN0YXRlfS5cbiAqIEBhcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUdlb2dyYXBoaWMoKSB7XG4gIHNldFVzZXJQcm9qZWN0aW9uKCdFUFNHOjQzMjYnKTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gYSBjb29yZGluYXRlIHRyYW5zZm9ybWVkIGludG8gdGhlIHVzZXIgcHJvamVjdGlvbi4gIElmIG5vIHVzZXIgcHJvamVjdGlvblxuICogaXMgc2V0LCB0aGUgb3JpZ2luYWwgY29vcmRpbmF0ZSBpcyByZXR1cm5lZC5cbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gY29vcmRpbmF0ZSBJbnB1dCBjb29yZGluYXRlLlxuICogQHBhcmFtIHtQcm9qZWN0aW9uTGlrZX0gc291cmNlUHJvamVjdGlvbiBUaGUgaW5wdXQgY29vcmRpbmF0ZSBwcm9qZWN0aW9uLlxuICogQHJldHVybiB7QXJyYXk8bnVtYmVyPn0gVGhlIGlucHV0IGNvb3JkaW5hdGUgaW4gdGhlIHVzZXIgcHJvamVjdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvVXNlckNvb3JkaW5hdGUoY29vcmRpbmF0ZSwgc291cmNlUHJvamVjdGlvbikge1xuICBpZiAoIXVzZXJQcm9qZWN0aW9uKSB7XG4gICAgcmV0dXJuIGNvb3JkaW5hdGU7XG4gIH1cbiAgcmV0dXJuIHRyYW5zZm9ybShjb29yZGluYXRlLCBzb3VyY2VQcm9qZWN0aW9uLCB1c2VyUHJvamVjdGlvbik7XG59XG5cbi8qKlxuICogUmV0dXJuIGEgY29vcmRpbmF0ZSB0cmFuc2Zvcm1lZCBmcm9tIHRoZSB1c2VyIHByb2plY3Rpb24uICBJZiBubyB1c2VyIHByb2plY3Rpb25cbiAqIGlzIHNldCwgdGhlIG9yaWdpbmFsIGNvb3JkaW5hdGUgaXMgcmV0dXJuZWQuXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGNvb3JkaW5hdGUgSW5wdXQgY29vcmRpbmF0ZS5cbiAqIEBwYXJhbSB7UHJvamVjdGlvbkxpa2V9IGRlc3RQcm9qZWN0aW9uIFRoZSBkZXN0aW5hdGlvbiBwcm9qZWN0aW9uLlxuICogQHJldHVybiB7QXJyYXk8bnVtYmVyPn0gVGhlIGlucHV0IGNvb3JkaW5hdGUgdHJhbnNmb3JtZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tVXNlckNvb3JkaW5hdGUoY29vcmRpbmF0ZSwgZGVzdFByb2plY3Rpb24pIHtcbiAgaWYgKCF1c2VyUHJvamVjdGlvbikge1xuICAgIGlmIChcbiAgICAgIHNob3dDb29yZGluYXRlV2FybmluZyAmJlxuICAgICAgIWVxdWFscyhjb29yZGluYXRlLCBbMCwgMF0pICYmXG4gICAgICBjb29yZGluYXRlWzBdID49IC0xODAgJiZcbiAgICAgIGNvb3JkaW5hdGVbMF0gPD0gMTgwICYmXG4gICAgICBjb29yZGluYXRlWzFdID49IC05MCAmJlxuICAgICAgY29vcmRpbmF0ZVsxXSA8PSA5MFxuICAgICkge1xuICAgICAgc2hvd0Nvb3JkaW5hdGVXYXJuaW5nID0gZmFsc2U7XG4gICAgICB3YXJuKFxuICAgICAgICAnQ2FsbCB1c2VHZW9ncmFwaGljKCkgZnJvbSBvbC9wcm9qIG9uY2UgdG8gd29yayB3aXRoIFtsb25naXR1ZGUsIGxhdGl0dWRlXSBjb29yZGluYXRlcy4nLFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvb3JkaW5hdGU7XG4gIH1cbiAgcmV0dXJuIHRyYW5zZm9ybShjb29yZGluYXRlLCB1c2VyUHJvamVjdGlvbiwgZGVzdFByb2plY3Rpb24pO1xufVxuXG4vKipcbiAqIFJldHVybiBhbiBleHRlbnQgdHJhbnNmb3JtZWQgaW50byB0aGUgdXNlciBwcm9qZWN0aW9uLiAgSWYgbm8gdXNlciBwcm9qZWN0aW9uXG4gKiBpcyBzZXQsIHRoZSBvcmlnaW5hbCBleHRlbnQgaXMgcmV0dXJuZWQuXG4gKiBAcGFyYW0ge2ltcG9ydChcIi4vZXh0ZW50LmpzXCIpLkV4dGVudH0gZXh0ZW50IElucHV0IGV4dGVudC5cbiAqIEBwYXJhbSB7UHJvamVjdGlvbkxpa2V9IHNvdXJjZVByb2plY3Rpb24gVGhlIGlucHV0IGV4dGVudCBwcm9qZWN0aW9uLlxuICogQHJldHVybiB7aW1wb3J0KFwiLi9leHRlbnQuanNcIikuRXh0ZW50fSBUaGUgaW5wdXQgZXh0ZW50IGluIHRoZSB1c2VyIHByb2plY3Rpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b1VzZXJFeHRlbnQoZXh0ZW50LCBzb3VyY2VQcm9qZWN0aW9uKSB7XG4gIGlmICghdXNlclByb2plY3Rpb24pIHtcbiAgICByZXR1cm4gZXh0ZW50O1xuICB9XG4gIHJldHVybiB0cmFuc2Zvcm1FeHRlbnQoZXh0ZW50LCBzb3VyY2VQcm9qZWN0aW9uLCB1c2VyUHJvamVjdGlvbik7XG59XG5cbi8qKlxuICogUmV0dXJuIGFuIGV4dGVudCB0cmFuc2Zvcm1lZCBmcm9tIHRoZSB1c2VyIHByb2plY3Rpb24uICBJZiBubyB1c2VyIHByb2plY3Rpb25cbiAqIGlzIHNldCwgdGhlIG9yaWdpbmFsIGV4dGVudCBpcyByZXR1cm5lZC5cbiAqIEBwYXJhbSB7aW1wb3J0KFwiLi9leHRlbnQuanNcIikuRXh0ZW50fSBleHRlbnQgSW5wdXQgZXh0ZW50LlxuICogQHBhcmFtIHtQcm9qZWN0aW9uTGlrZX0gZGVzdFByb2plY3Rpb24gVGhlIGRlc3RpbmF0aW9uIHByb2plY3Rpb24uXG4gKiBAcmV0dXJuIHtpbXBvcnQoXCIuL2V4dGVudC5qc1wiKS5FeHRlbnR9IFRoZSBpbnB1dCBleHRlbnQgdHJhbnNmb3JtZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tVXNlckV4dGVudChleHRlbnQsIGRlc3RQcm9qZWN0aW9uKSB7XG4gIGlmICghdXNlclByb2plY3Rpb24pIHtcbiAgICByZXR1cm4gZXh0ZW50O1xuICB9XG4gIHJldHVybiB0cmFuc2Zvcm1FeHRlbnQoZXh0ZW50LCB1c2VyUHJvamVjdGlvbiwgZGVzdFByb2plY3Rpb24pO1xufVxuXG4vKipcbiAqIFJldHVybiB0aGUgcmVzb2x1dGlvbiBpbiB1c2VyIHByb2plY3Rpb24gdW5pdHMgcGVyIHBpeGVsLiBJZiBubyB1c2VyIHByb2plY3Rpb25cbiAqIGlzIHNldCwgb3Igc291cmNlIG9yIHVzZXIgcHJvamVjdGlvbiBhcmUgbWlzc2luZyB1bml0cywgdGhlIG9yaWdpbmFsIHJlc29sdXRpb25cbiAqIGlzIHJldHVybmVkLlxuICogQHBhcmFtIHtudW1iZXJ9IHJlc29sdXRpb24gUmVzb2x1dGlvbiBpbiBpbnB1dCBwcm9qZWN0aW9uIHVuaXRzIHBlciBwaXhlbC5cbiAqIEBwYXJhbSB7UHJvamVjdGlvbkxpa2V9IHNvdXJjZVByb2plY3Rpb24gVGhlIGlucHV0IHByb2plY3Rpb24uXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFJlc29sdXRpb24gaW4gdXNlciBwcm9qZWN0aW9uIHVuaXRzIHBlciBwaXhlbC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvVXNlclJlc29sdXRpb24ocmVzb2x1dGlvbiwgc291cmNlUHJvamVjdGlvbikge1xuICBpZiAoIXVzZXJQcm9qZWN0aW9uKSB7XG4gICAgcmV0dXJuIHJlc29sdXRpb247XG4gIH1cbiAgY29uc3Qgc291cmNlTWV0ZXJzUGVyVW5pdCA9IGdldChzb3VyY2VQcm9qZWN0aW9uKS5nZXRNZXRlcnNQZXJVbml0KCk7XG4gIGNvbnN0IHVzZXJNZXRlcnNQZXJVbml0ID0gdXNlclByb2plY3Rpb24uZ2V0TWV0ZXJzUGVyVW5pdCgpO1xuICByZXR1cm4gc291cmNlTWV0ZXJzUGVyVW5pdCAmJiB1c2VyTWV0ZXJzUGVyVW5pdFxuICAgID8gKHJlc29sdXRpb24gKiBzb3VyY2VNZXRlcnNQZXJVbml0KSAvIHVzZXJNZXRlcnNQZXJVbml0XG4gICAgOiByZXNvbHV0aW9uO1xufVxuXG4vKipcbiAqIFJldHVybiB0aGUgcmVzb2x1dGlvbiBpbiB1c2VyIHByb2plY3Rpb24gdW5pdHMgcGVyIHBpeGVsLiBJZiBubyB1c2VyIHByb2plY3Rpb25cbiAqIGlzIHNldCwgb3Igc291cmNlIG9yIHVzZXIgcHJvamVjdGlvbiBhcmUgbWlzc2luZyB1bml0cywgdGhlIG9yaWdpbmFsIHJlc29sdXRpb25cbiAqIGlzIHJldHVybmVkLlxuICogQHBhcmFtIHtudW1iZXJ9IHJlc29sdXRpb24gUmVzb2x1dGlvbiBpbiB1c2VyIHByb2plY3Rpb24gdW5pdHMgcGVyIHBpeGVsLlxuICogQHBhcmFtIHtQcm9qZWN0aW9uTGlrZX0gZGVzdFByb2plY3Rpb24gVGhlIGRlc3RpbmF0aW9uIHByb2plY3Rpb24uXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFJlc29sdXRpb24gaW4gZGVzdGluYXRpb24gcHJvamVjdGlvbiB1bml0cyBwZXIgcGl4ZWwuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tVXNlclJlc29sdXRpb24ocmVzb2x1dGlvbiwgZGVzdFByb2plY3Rpb24pIHtcbiAgaWYgKCF1c2VyUHJvamVjdGlvbikge1xuICAgIHJldHVybiByZXNvbHV0aW9uO1xuICB9XG4gIGNvbnN0IGRlc3RNZXRlcnNQZXJVbml0ID0gZ2V0KGRlc3RQcm9qZWN0aW9uKS5nZXRNZXRlcnNQZXJVbml0KCk7XG4gIGNvbnN0IHVzZXJNZXRlcnNQZXJVbml0ID0gdXNlclByb2plY3Rpb24uZ2V0TWV0ZXJzUGVyVW5pdCgpO1xuICByZXR1cm4gZGVzdE1ldGVyc1BlclVuaXQgJiYgdXNlck1ldGVyc1BlclVuaXRcbiAgICA/IChyZXNvbHV0aW9uICogdXNlck1ldGVyc1BlclVuaXQpIC8gZGVzdE1ldGVyc1BlclVuaXRcbiAgICA6IHJlc29sdXRpb247XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHNhZmUgY29vcmRpbmF0ZSB0cmFuc2Zvcm0gZnVuY3Rpb24gZnJvbSBhIGNvb3JkaW5hdGUgdHJhbnNmb3JtIGZ1bmN0aW9uLlxuICogXCJTYWZlXCIgbWVhbnMgdGhhdCBpdCBjYW4gaGFuZGxlIHdyYXBwaW5nIG9mIHgtY29vcmRpbmF0ZXMgZm9yIGdsb2JhbCBwcm9qZWN0aW9ucyxcbiAqIGFuZCB0aGF0IGNvb3JkaW5hdGVzIGV4Y2VlZGluZyB0aGUgc291cmNlIHByb2plY3Rpb24gdmFsaWRpdHkgZXh0ZW50J3MgcmFuZ2Ugd2lsbCBiZVxuICogY2xhbXBlZCB0byB0aGUgdmFsaWRpdHkgcmFuZ2UuXG4gKiBAcGFyYW0ge1Byb2plY3Rpb259IHNvdXJjZVByb2ogU291cmNlIHByb2plY3Rpb24uXG4gKiBAcGFyYW0ge1Byb2plY3Rpb259IGRlc3RQcm9qIERlc3RpbmF0aW9uIHByb2plY3Rpb24uXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKGltcG9ydChcIi4vY29vcmRpbmF0ZS5qc1wiKS5Db29yZGluYXRlKTogaW1wb3J0KFwiLi9jb29yZGluYXRlLmpzXCIpLkNvb3JkaW5hdGV9IHRyYW5zZm9ybSBUcmFuc2Zvcm0gZnVuY3Rpb24gKHNvdXJjZSB0byBkZXN0aW5hdGlvbikuXG4gKiBAcmV0dXJuIHtmdW5jdGlvbihpbXBvcnQoXCIuL2Nvb3JkaW5hdGUuanNcIikuQ29vcmRpbmF0ZSk6IGltcG9ydChcIi4vY29vcmRpbmF0ZS5qc1wiKS5Db29yZGluYXRlfSBTYWZlIHRyYW5zZm9ybSBmdW5jdGlvbiAoc291cmNlIHRvIGRlc3RpbmF0aW9uKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNhZmVDb29yZGluYXRlVHJhbnNmb3JtKHNvdXJjZVByb2osIGRlc3RQcm9qLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChjb29yZCkge1xuICAgIGxldCB0cmFuc2Zvcm1lZCwgd29ybGRzQXdheTtcbiAgICBpZiAoc291cmNlUHJvai5jYW5XcmFwWCgpKSB7XG4gICAgICBjb25zdCBzb3VyY2VFeHRlbnQgPSBzb3VyY2VQcm9qLmdldEV4dGVudCgpO1xuICAgICAgY29uc3Qgc291cmNlRXh0ZW50V2lkdGggPSBnZXRXaWR0aChzb3VyY2VFeHRlbnQpO1xuICAgICAgY29vcmQgPSBjb29yZC5zbGljZSgwKTtcbiAgICAgIHdvcmxkc0F3YXkgPSBnZXRXb3JsZHNBd2F5KGNvb3JkLCBzb3VyY2VQcm9qLCBzb3VyY2VFeHRlbnRXaWR0aCk7XG4gICAgICBpZiAod29ybGRzQXdheSkge1xuICAgICAgICAvLyBNb3ZlIHggdG8gdGhlIHJlYWwgd29ybGRcbiAgICAgICAgY29vcmRbMF0gPSBjb29yZFswXSAtIHdvcmxkc0F3YXkgKiBzb3VyY2VFeHRlbnRXaWR0aDtcbiAgICAgIH1cbiAgICAgIGNvb3JkWzBdID0gY2xhbXAoY29vcmRbMF0sIHNvdXJjZUV4dGVudFswXSwgc291cmNlRXh0ZW50WzJdKTtcbiAgICAgIGNvb3JkWzFdID0gY2xhbXAoY29vcmRbMV0sIHNvdXJjZUV4dGVudFsxXSwgc291cmNlRXh0ZW50WzNdKTtcbiAgICAgIHRyYW5zZm9ybWVkID0gdHJhbnNmb3JtKGNvb3JkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhbnNmb3JtZWQgPSB0cmFuc2Zvcm0oY29vcmQpO1xuICAgIH1cbiAgICBpZiAod29ybGRzQXdheSAmJiBkZXN0UHJvai5jYW5XcmFwWCgpKSB7XG4gICAgICAvLyBNb3ZlIHRyYW5zZm9ybWVkIGNvb3JkaW5hdGUgYmFjayB0byB0aGUgb2Zmc2V0IHdvcmxkXG4gICAgICB0cmFuc2Zvcm1lZFswXSArPSB3b3JsZHNBd2F5ICogZ2V0V2lkdGgoZGVzdFByb2ouZ2V0RXh0ZW50KCkpO1xuICAgIH1cbiAgICByZXR1cm4gdHJhbnNmb3JtZWQ7XG4gIH07XG59XG5cbi8qKlxuICogQWRkIHRyYW5zZm9ybXMgdG8gYW5kIGZyb20gRVBTRzo0MzI2IGFuZCBFUFNHOjM4NTcuICBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZFxuICogYnkgd2hlbiB0aGlzIG1vZHVsZSBpcyBleGVjdXRlZCBhbmQgc2hvdWxkIG9ubHkgbmVlZCB0byBiZSBjYWxsZWQgYWdhaW4gYWZ0ZXJcbiAqIGBjbGVhckFsbFByb2plY3Rpb25zKClgIGlzIGNhbGxlZCAoZS5nLiBpbiB0ZXN0cykuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRDb21tb24oKSB7XG4gIC8vIEFkZCB0cmFuc2Zvcm1hdGlvbnMgdGhhdCBkb24ndCBhbHRlciBjb29yZGluYXRlcyB0byBjb252ZXJ0IHdpdGhpbiBzZXQgb2ZcbiAgLy8gcHJvamVjdGlvbnMgd2l0aCBlcXVhbCBtZWFuaW5nLlxuICBhZGRFcXVpdmFsZW50UHJvamVjdGlvbnMoRVBTRzM4NTdfUFJPSkVDVElPTlMpO1xuICBhZGRFcXVpdmFsZW50UHJvamVjdGlvbnMoRVBTRzQzMjZfUFJPSkVDVElPTlMpO1xuICAvLyBBZGQgdHJhbnNmb3JtYXRpb25zIHRvIGNvbnZlcnQgRVBTRzo0MzI2IGxpa2UgY29vcmRpbmF0ZXMgdG8gRVBTRzozODU3IGxpa2VcbiAgLy8gY29vcmRpbmF0ZXMgYW5kIGJhY2suXG4gIGFkZEVxdWl2YWxlbnRUcmFuc2Zvcm1zKFxuICAgIEVQU0c0MzI2X1BST0pFQ1RJT05TLFxuICAgIEVQU0czODU3X1BST0pFQ1RJT05TLFxuICAgIGZyb21FUFNHNDMyNixcbiAgICB0b0VQU0c0MzI2LFxuICApO1xufVxuXG5hZGRDb21tb24oKTtcbiIsIi8qKlxuICogQG1vZHVsZSBvbC9wcm9qL1Byb2plY3Rpb25cbiAqL1xuaW1wb3J0IHtNRVRFUlNfUEVSX1VOSVR9IGZyb20gJy4vVW5pdHMuanMnO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IE9wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBjb2RlIFRoZSBTUlMgaWRlbnRpZmllciBjb2RlLCBlLmcuIGBFUFNHOjQzMjZgLlxuICogQHByb3BlcnR5IHtpbXBvcnQoXCIuL1VuaXRzLmpzXCIpLlVuaXRzfSBbdW5pdHNdIFVuaXRzLiBSZXF1aXJlZCB1bmxlc3MgYVxuICogcHJvajQgcHJvamVjdGlvbiBpcyBkZWZpbmVkIGZvciBgY29kZWAuXG4gKiBAcHJvcGVydHkge2ltcG9ydChcIi4uL2V4dGVudC5qc1wiKS5FeHRlbnR9IFtleHRlbnRdIFRoZSB2YWxpZGl0eSBleHRlbnQgZm9yIHRoZSBTUlMuXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW2F4aXNPcmllbnRhdGlvbj0nZW51J10gVGhlIGF4aXMgb3JpZW50YXRpb24gYXMgc3BlY2lmaWVkIGluIFByb2o0LlxuICogQHByb3BlcnR5IHtib29sZWFufSBbZ2xvYmFsPWZhbHNlXSBXaGV0aGVyIHRoZSBwcm9qZWN0aW9uIGlzIHZhbGlkIGZvciB0aGUgd2hvbGUgZ2xvYmUuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW21ldGVyc1BlclVuaXRdIFRoZSBtZXRlcnMgcGVyIHVuaXQgZm9yIHRoZSBTUlMuXG4gKiBJZiBub3QgcHJvdmlkZWQsIHRoZSBgdW5pdHNgIGFyZSB1c2VkIHRvIGdldCB0aGUgbWV0ZXJzIHBlciB1bml0IGZyb20gdGhlIHtAbGluayBNRVRFUlNfUEVSX1VOSVR9XG4gKiBsb29rdXAgdGFibGUuXG4gKiBAcHJvcGVydHkge2ltcG9ydChcIi4uL2V4dGVudC5qc1wiKS5FeHRlbnR9IFt3b3JsZEV4dGVudF0gVGhlIHdvcmxkIGV4dGVudCBmb3IgdGhlIFNSUy5cbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb24obnVtYmVyLCBpbXBvcnQoXCIuLi9jb29yZGluYXRlLmpzXCIpLkNvb3JkaW5hdGUpOm51bWJlcn0gW2dldFBvaW50UmVzb2x1dGlvbl1cbiAqIEZ1bmN0aW9uIHRvIGRldGVybWluZSByZXNvbHV0aW9uIGF0IGEgcG9pbnQuIFRoZSBmdW5jdGlvbiBpcyBjYWxsZWQgd2l0aCBhXG4gKiBgbnVtYmVyYCB2aWV3IHJlc29sdXRpb24gYW5kIGEge0BsaW5rIG1vZHVsZTpvbC9jb29yZGluYXRlfkNvb3JkaW5hdGV9IGFzIGFyZ3VtZW50cywgYW5kIHJldHVybnNcbiAqIHRoZSBgbnVtYmVyYCByZXNvbHV0aW9uIGluIHByb2plY3Rpb24gdW5pdHMgYXQgdGhlIHBhc3NlZCBjb29yZGluYXRlLiBJZiB0aGlzIGlzIGB1bmRlZmluZWRgLFxuICogdGhlIGRlZmF1bHQge0BsaW5rIG1vZHVsZTpvbC9wcm9qLmdldFBvaW50UmVzb2x1dGlvbn0gZnVuY3Rpb24gd2lsbCBiZSB1c2VkLlxuICovXG5cbi8qKlxuICogQGNsYXNzZGVzY1xuICogUHJvamVjdGlvbiBkZWZpbml0aW9uIGNsYXNzLiBPbmUgb2YgdGhlc2UgaXMgY3JlYXRlZCBmb3IgZWFjaCBwcm9qZWN0aW9uXG4gKiBzdXBwb3J0ZWQgaW4gdGhlIGFwcGxpY2F0aW9uIGFuZCBzdG9yZWQgaW4gdGhlIHtAbGluayBtb2R1bGU6b2wvcHJvan0gbmFtZXNwYWNlLlxuICogWW91IGNhbiB1c2UgdGhlc2UgaW4gYXBwbGljYXRpb25zLCBidXQgdGhpcyBpcyBub3QgcmVxdWlyZWQsIGFzIEFQSSBwYXJhbXNcbiAqIGFuZCBvcHRpb25zIHVzZSB7QGxpbmsgbW9kdWxlOm9sL3Byb2p+UHJvamVjdGlvbkxpa2V9IHdoaWNoIG1lYW5zIHRoZSBzaW1wbGUgc3RyaW5nXG4gKiBjb2RlIHdpbGwgc3VmZmljZS5cbiAqXG4gKiBZb3UgY2FuIHVzZSB7QGxpbmsgbW9kdWxlOm9sL3Byb2ouZ2V0fSB0byByZXRyaWV2ZSB0aGUgb2JqZWN0IGZvciBhIHBhcnRpY3VsYXJcbiAqIHByb2plY3Rpb24uXG4gKlxuICogVGhlIGxpYnJhcnkgaW5jbHVkZXMgZGVmaW5pdGlvbnMgZm9yIGBFUFNHOjQzMjZgIGFuZCBgRVBTRzozODU3YCwgdG9nZXRoZXJcbiAqIHdpdGggdGhlIGZvbGxvd2luZyBhbGlhc2VzOlxuICogKiBgRVBTRzo0MzI2YDogQ1JTOjg0LCB1cm46b2djOmRlZjpjcnM6RVBTRzo2LjY6NDMyNixcbiAqICAgICB1cm46b2djOmRlZjpjcnM6T0dDOjEuMzpDUlM4NCwgdXJuOm9nYzpkZWY6Y3JzOk9HQzoyOjg0LFxuICogICAgIGh0dHA6Ly93d3cub3Blbmdpcy5uZXQvZ21sL3Nycy9lcHNnLnhtbCM0MzI2LFxuICogICAgIHVybjp4LW9nYzpkZWY6Y3JzOkVQU0c6NDMyNlxuICogKiBgRVBTRzozODU3YDogRVBTRzoxMDIxMDAsIEVQU0c6MTAyMTEzLCBFUFNHOjkwMDkxMyxcbiAqICAgICB1cm46b2djOmRlZjpjcnM6RVBTRzo2LjE4OjM6Mzg1NyxcbiAqICAgICBodHRwOi8vd3d3Lm9wZW5naXMubmV0L2dtbC9zcnMvZXBzZy54bWwjMzg1N1xuICpcbiAqIElmIHlvdSB1c2UgW3Byb2o0anNdKGh0dHBzOi8vZ2l0aHViLmNvbS9wcm9qNGpzL3Byb2o0anMpLCBhbGlhc2VzIGNhblxuICogYmUgYWRkZWQgdXNpbmcgYHByb2o0LmRlZnMoKWAuIEFmdGVyIGFsbCByZXF1aXJlZCBwcm9qZWN0aW9uIGRlZmluaXRpb25zIGFyZVxuICogYWRkZWQsIGNhbGwgdGhlIHtAbGluayBtb2R1bGU6b2wvcHJvai9wcm9qNC5yZWdpc3Rlcn0gZnVuY3Rpb24uXG4gKlxuICogQGFwaVxuICovXG5jbGFzcyBQcm9qZWN0aW9uIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7T3B0aW9uc30gb3B0aW9ucyBQcm9qZWN0aW9uIG9wdGlvbnMuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuY29kZV8gPSBvcHRpb25zLmNvZGU7XG5cbiAgICAvKipcbiAgICAgKiBVbml0cyBvZiBwcm9qZWN0ZWQgY29vcmRpbmF0ZXMuIFdoZW4gc2V0IHRvIGBUSUxFX1BJWEVMU2AsIGFcbiAgICAgKiBgdGhpcy5leHRlbnRfYCBhbmQgYHRoaXMud29ybGRFeHRlbnRfYCBtdXN0IGJlIGNvbmZpZ3VyZWQgcHJvcGVybHkgZm9yIGVhY2hcbiAgICAgKiB0aWxlLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHR5cGUge2ltcG9ydChcIi4vVW5pdHMuanNcIikuVW5pdHN9XG4gICAgICovXG4gICAgdGhpcy51bml0c18gPSAvKiogQHR5cGUge2ltcG9ydChcIi4vVW5pdHMuanNcIikuVW5pdHN9ICovIChvcHRpb25zLnVuaXRzKTtcblxuICAgIC8qKlxuICAgICAqIFZhbGlkaXR5IGV4dGVudCBvZiB0aGUgcHJvamVjdGlvbiBpbiBwcm9qZWN0ZWQgY29vcmRpbmF0ZXMuIEZvciBwcm9qZWN0aW9uc1xuICAgICAqIHdpdGggYFRJTEVfUElYRUxTYCB1bml0cywgdGhpcyBpcyB0aGUgZXh0ZW50IG9mIHRoZSB0aWxlIGluXG4gICAgICogdGlsZSBwaXhlbCBzcGFjZS5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEB0eXBlIHtpbXBvcnQoXCIuLi9leHRlbnQuanNcIikuRXh0ZW50fVxuICAgICAqL1xuICAgIHRoaXMuZXh0ZW50XyA9IG9wdGlvbnMuZXh0ZW50ICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmV4dGVudCA6IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBFeHRlbnQgb2YgdGhlIHdvcmxkIGluIEVQU0c6NDMyNi4gRm9yIHByb2plY3Rpb25zIHdpdGhcbiAgICAgKiBgVElMRV9QSVhFTFNgIHVuaXRzLCB0aGlzIGlzIHRoZSBleHRlbnQgb2YgdGhlIHRpbGUgaW5cbiAgICAgKiBwcm9qZWN0ZWQgY29vcmRpbmF0ZSBzcGFjZS5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEB0eXBlIHtpbXBvcnQoXCIuLi9leHRlbnQuanNcIikuRXh0ZW50fVxuICAgICAqL1xuICAgIHRoaXMud29ybGRFeHRlbnRfID1cbiAgICAgIG9wdGlvbnMud29ybGRFeHRlbnQgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMud29ybGRFeHRlbnQgOiBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuYXhpc09yaWVudGF0aW9uXyA9XG4gICAgICBvcHRpb25zLmF4aXNPcmllbnRhdGlvbiAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5heGlzT3JpZW50YXRpb24gOiAnZW51JztcblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5nbG9iYWxfID0gb3B0aW9ucy5nbG9iYWwgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuZ2xvYmFsIDogZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuY2FuV3JhcFhfID0gISEodGhpcy5nbG9iYWxfICYmIHRoaXMuZXh0ZW50Xyk7XG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEB0eXBlIHtmdW5jdGlvbihudW1iZXIsIGltcG9ydChcIi4uL2Nvb3JkaW5hdGUuanNcIikuQ29vcmRpbmF0ZSk6bnVtYmVyfHVuZGVmaW5lZH1cbiAgICAgKi9cbiAgICB0aGlzLmdldFBvaW50UmVzb2x1dGlvbkZ1bmNfID0gb3B0aW9ucy5nZXRQb2ludFJlc29sdXRpb247XG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEB0eXBlIHtpbXBvcnQoXCIuLi90aWxlZ3JpZC9UaWxlR3JpZC5qc1wiKS5kZWZhdWx0fVxuICAgICAqL1xuICAgIHRoaXMuZGVmYXVsdFRpbGVHcmlkXyA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEB0eXBlIHtudW1iZXJ8dW5kZWZpbmVkfVxuICAgICAqL1xuICAgIHRoaXMubWV0ZXJzUGVyVW5pdF8gPSBvcHRpb25zLm1ldGVyc1BlclVuaXQ7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVGhlIHByb2plY3Rpb24gaXMgc3VpdGFibGUgZm9yIHdyYXBwaW5nIHRoZSB4LWF4aXNcbiAgICovXG4gIGNhbldyYXBYKCkge1xuICAgIHJldHVybiB0aGlzLmNhbldyYXBYXztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGNvZGUgZm9yIHRoaXMgcHJvamVjdGlvbiwgZS5nLiAnRVBTRzo0MzI2Jy5cbiAgICogQHJldHVybiB7c3RyaW5nfSBDb2RlLlxuICAgKiBAYXBpXG4gICAqL1xuICBnZXRDb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmNvZGVfO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdmFsaWRpdHkgZXh0ZW50IGZvciB0aGlzIHByb2plY3Rpb24uXG4gICAqIEByZXR1cm4ge2ltcG9ydChcIi4uL2V4dGVudC5qc1wiKS5FeHRlbnR9IEV4dGVudC5cbiAgICogQGFwaVxuICAgKi9cbiAgZ2V0RXh0ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmV4dGVudF87XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB1bml0cyBvZiB0aGlzIHByb2plY3Rpb24uXG4gICAqIEByZXR1cm4ge2ltcG9ydChcIi4vVW5pdHMuanNcIikuVW5pdHN9IFVuaXRzLlxuICAgKiBAYXBpXG4gICAqL1xuICBnZXRVbml0cygpIHtcbiAgICByZXR1cm4gdGhpcy51bml0c187XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBhbW91bnQgb2YgbWV0ZXJzIHBlciB1bml0IG9mIHRoaXMgcHJvamVjdGlvbi4gIElmIHRoZSBwcm9qZWN0aW9uIGlzXG4gICAqIG5vdCBjb25maWd1cmVkIHdpdGggYG1ldGVyc1BlclVuaXRgIG9yIGEgdW5pdHMgaWRlbnRpZmllciwgdGhlIHJldHVybiBpc1xuICAgKiBgdW5kZWZpbmVkYC5cbiAgICogQHJldHVybiB7bnVtYmVyfHVuZGVmaW5lZH0gTWV0ZXJzLlxuICAgKiBAYXBpXG4gICAqL1xuICBnZXRNZXRlcnNQZXJVbml0KCkge1xuICAgIHJldHVybiB0aGlzLm1ldGVyc1BlclVuaXRfIHx8IE1FVEVSU19QRVJfVU5JVFt0aGlzLnVuaXRzX107XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB3b3JsZCBleHRlbnQgZm9yIHRoaXMgcHJvamVjdGlvbi5cbiAgICogQHJldHVybiB7aW1wb3J0KFwiLi4vZXh0ZW50LmpzXCIpLkV4dGVudH0gRXh0ZW50LlxuICAgKiBAYXBpXG4gICAqL1xuICBnZXRXb3JsZEV4dGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy53b3JsZEV4dGVudF87XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBheGlzIG9yaWVudGF0aW9uIG9mIHRoaXMgcHJvamVjdGlvbi5cbiAgICogRXhhbXBsZSB2YWx1ZXMgYXJlOlxuICAgKiBlbnUgLSB0aGUgZGVmYXVsdCBlYXN0aW5nLCBub3J0aGluZywgZWxldmF0aW9uLlxuICAgKiBuZXUgLSBub3J0aGluZywgZWFzdGluZywgdXAgLSB1c2VmdWwgZm9yIFwibGF0L2xvbmdcIiBnZW9ncmFwaGljIGNvb3JkaW5hdGVzLFxuICAgKiAgICAgb3Igc291dGggb3JpZW50YXRlZCB0cmFuc3ZlcnNlIG1lcmNhdG9yLlxuICAgKiB3bnUgLSB3ZXN0aW5nLCBub3J0aGluZywgdXAgLSBzb21lIHBsYW5ldGFyeSBjb29yZGluYXRlIHN5c3RlbXMgaGF2ZVxuICAgKiAgICAgXCJ3ZXN0IHBvc2l0aXZlXCIgY29vcmRpbmF0ZSBzeXN0ZW1zXG4gICAqIEByZXR1cm4ge3N0cmluZ30gQXhpcyBvcmllbnRhdGlvbi5cbiAgICogQGFwaVxuICAgKi9cbiAgZ2V0QXhpc09yaWVudGF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmF4aXNPcmllbnRhdGlvbl87XG4gIH1cblxuICAvKipcbiAgICogSXMgdGhpcyBwcm9qZWN0aW9uIGEgZ2xvYmFsIHByb2plY3Rpb24gd2hpY2ggc3BhbnMgdGhlIHdob2xlIHdvcmxkP1xuICAgKiBAcmV0dXJuIHtib29sZWFufSBXaGV0aGVyIHRoZSBwcm9qZWN0aW9uIGlzIGdsb2JhbC5cbiAgICogQGFwaVxuICAgKi9cbiAgaXNHbG9iYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2xvYmFsXztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgaWYgdGhlIHByb2plY3Rpb24gaXMgYSBnbG9iYWwgcHJvamVjdGlvbiB3aGljaCBzcGFucyB0aGUgd2hvbGUgd29ybGRcbiAgICogQHBhcmFtIHtib29sZWFufSBnbG9iYWwgV2hldGhlciB0aGUgcHJvamVjdGlvbiBpcyBnbG9iYWwuXG4gICAqIEBhcGlcbiAgICovXG4gIHNldEdsb2JhbChnbG9iYWwpIHtcbiAgICB0aGlzLmdsb2JhbF8gPSBnbG9iYWw7XG4gICAgdGhpcy5jYW5XcmFwWF8gPSAhIShnbG9iYWwgJiYgdGhpcy5leHRlbnRfKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtpbXBvcnQoXCIuLi90aWxlZ3JpZC9UaWxlR3JpZC5qc1wiKS5kZWZhdWx0fSBUaGUgZGVmYXVsdCB0aWxlIGdyaWQuXG4gICAqL1xuICBnZXREZWZhdWx0VGlsZUdyaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdFRpbGVHcmlkXztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge2ltcG9ydChcIi4uL3RpbGVncmlkL1RpbGVHcmlkLmpzXCIpLmRlZmF1bHR9IHRpbGVHcmlkIFRoZSBkZWZhdWx0IHRpbGUgZ3JpZC5cbiAgICovXG4gIHNldERlZmF1bHRUaWxlR3JpZCh0aWxlR3JpZCkge1xuICAgIHRoaXMuZGVmYXVsdFRpbGVHcmlkXyA9IHRpbGVHcmlkO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgdmFsaWRpdHkgZXh0ZW50IGZvciB0aGlzIHByb2plY3Rpb24uXG4gICAqIEBwYXJhbSB7aW1wb3J0KFwiLi4vZXh0ZW50LmpzXCIpLkV4dGVudH0gZXh0ZW50IEV4dGVudC5cbiAgICogQGFwaVxuICAgKi9cbiAgc2V0RXh0ZW50KGV4dGVudCkge1xuICAgIHRoaXMuZXh0ZW50XyA9IGV4dGVudDtcbiAgICB0aGlzLmNhbldyYXBYXyA9ICEhKHRoaXMuZ2xvYmFsXyAmJiBleHRlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgd29ybGQgZXh0ZW50IGZvciB0aGlzIHByb2plY3Rpb24uXG4gICAqIEBwYXJhbSB7aW1wb3J0KFwiLi4vZXh0ZW50LmpzXCIpLkV4dGVudH0gd29ybGRFeHRlbnQgV29ybGQgZXh0ZW50XG4gICAqICAgICBbbWlubG9uLCBtaW5sYXQsIG1heGxvbiwgbWF4bGF0XS5cbiAgICogQGFwaVxuICAgKi9cbiAgc2V0V29ybGRFeHRlbnQod29ybGRFeHRlbnQpIHtcbiAgICB0aGlzLndvcmxkRXh0ZW50XyA9IHdvcmxkRXh0ZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgZ2V0UG9pbnRSZXNvbHV0aW9uIGZ1bmN0aW9uIChzZWUge0BsaW5rIG1vZHVsZTpvbC9wcm9qLmdldFBvaW50UmVzb2x1dGlvbn1cbiAgICogZm9yIHRoaXMgcHJvamVjdGlvbi5cbiAgICogQHBhcmFtIHtmdW5jdGlvbihudW1iZXIsIGltcG9ydChcIi4uL2Nvb3JkaW5hdGUuanNcIikuQ29vcmRpbmF0ZSk6bnVtYmVyfSBmdW5jIEZ1bmN0aW9uXG4gICAqIEBhcGlcbiAgICovXG4gIHNldEdldFBvaW50UmVzb2x1dGlvbihmdW5jKSB7XG4gICAgdGhpcy5nZXRQb2ludFJlc29sdXRpb25GdW5jXyA9IGZ1bmM7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBjdXN0b20gcG9pbnQgcmVzb2x1dGlvbiBmdW5jdGlvbiBmb3IgdGhpcyBwcm9qZWN0aW9uIChpZiBzZXQpLlxuICAgKiBAcmV0dXJuIHtmdW5jdGlvbihudW1iZXIsIGltcG9ydChcIi4uL2Nvb3JkaW5hdGUuanNcIikuQ29vcmRpbmF0ZSk6bnVtYmVyfHVuZGVmaW5lZH0gVGhlIGN1c3RvbSBwb2ludFxuICAgKiByZXNvbHV0aW9uIGZ1bmN0aW9uIChpZiBzZXQpLlxuICAgKi9cbiAgZ2V0UG9pbnRSZXNvbHV0aW9uRnVuYygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRQb2ludFJlc29sdXRpb25GdW5jXztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0aW9uO1xuIiwiLyoqXG4gKiBAbW9kdWxlIG9sL3Byb2ovVW5pdHNcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHsncmFkaWFucycgfCAnZGVncmVlcycgfCAnZnQnIHwgJ20nIHwgJ3BpeGVscycgfCAndGlsZS1waXhlbHMnIHwgJ3VzLWZ0J30gVW5pdHNcbiAqIFByb2plY3Rpb24gdW5pdHMuXG4gKi9cblxuLyoqXG4gKiBTZWUgaHR0cDovL2R1ZmYuZXNzLndhc2hpbmd0b24uZWR1L2RhdGEvcmFzdGVyL2RyZy9kb2NzL2dlb3RpZmYudHh0XG4gKiBAdHlwZSB7T2JqZWN0PG51bWJlciwgVW5pdHM+fVxuICovXG5jb25zdCB1bml0QnlDb2RlID0ge1xuICAnOTAwMSc6ICdtJyxcbiAgJzkwMDInOiAnZnQnLFxuICAnOTAwMyc6ICd1cy1mdCcsXG4gICc5MTAxJzogJ3JhZGlhbnMnLFxuICAnOTEwMic6ICdkZWdyZWVzJyxcbn07XG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IGNvZGUgVW5pdCBjb2RlLlxuICogQHJldHVybiB7VW5pdHN9IFVuaXRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbUNvZGUoY29kZSkge1xuICByZXR1cm4gdW5pdEJ5Q29kZVtjb2RlXTtcbn1cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBNZXRlcnNQZXJVbml0TG9va3VwXG4gKiBAcHJvcGVydHkge251bWJlcn0gcmFkaWFucyBSYWRpYW5zXG4gKiBAcHJvcGVydHkge251bWJlcn0gZGVncmVlcyBEZWdyZWVzXG4gKiBAcHJvcGVydHkge251bWJlcn0gZnQgIEZlZXRcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBtIE1ldGVyc1xuICogQHByb3BlcnR5IHtudW1iZXJ9IHVzLWZ0IFVTIGZlZXRcbiAqL1xuXG4vKipcbiAqIE1ldGVycyBwZXIgdW5pdCBsb29rdXAgdGFibGUuXG4gKiBAY29uc3RcbiAqIEB0eXBlIHtNZXRlcnNQZXJVbml0TG9va3VwfVxuICogQGFwaVxuICovXG5leHBvcnQgY29uc3QgTUVURVJTX1BFUl9VTklUID0ge1xuICAvLyB1c2UgdGhlIHJhZGl1cyBvZiB0aGUgTm9ybWFsIHNwaGVyZVxuICAncmFkaWFucyc6IDYzNzA5OTcgLyAoMiAqIE1hdGguUEkpLFxuICAnZGVncmVlcyc6ICgyICogTWF0aC5QSSAqIDYzNzA5OTcpIC8gMzYwLFxuICAnZnQnOiAwLjMwNDgsXG4gICdtJzogMSxcbiAgJ3VzLWZ0JzogMTIwMCAvIDM5MzcsXG59O1xuIiwiLyoqXG4gKiBAbW9kdWxlIG9sL3Byb2ovZXBzZzM4NTdcbiAqL1xuaW1wb3J0IFByb2plY3Rpb24gZnJvbSAnLi9Qcm9qZWN0aW9uLmpzJztcblxuLyoqXG4gKiBSYWRpdXMgb2YgV0dTODQgc3BoZXJlXG4gKlxuICogQGNvbnN0XG4gKiBAdHlwZSB7bnVtYmVyfVxuICovXG5leHBvcnQgY29uc3QgUkFESVVTID0gNjM3ODEzNztcblxuLyoqXG4gKiBAY29uc3RcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBIQUxGX1NJWkUgPSBNYXRoLlBJICogUkFESVVTO1xuXG4vKipcbiAqIEBjb25zdFxuICogQHR5cGUge2ltcG9ydChcIi4uL2V4dGVudC5qc1wiKS5FeHRlbnR9XG4gKi9cbmV4cG9ydCBjb25zdCBFWFRFTlQgPSBbLUhBTEZfU0laRSwgLUhBTEZfU0laRSwgSEFMRl9TSVpFLCBIQUxGX1NJWkVdO1xuXG4vKipcbiAqIEBjb25zdFxuICogQHR5cGUge2ltcG9ydChcIi4uL2V4dGVudC5qc1wiKS5FeHRlbnR9XG4gKi9cbmV4cG9ydCBjb25zdCBXT1JMRF9FWFRFTlQgPSBbLTE4MCwgLTg1LCAxODAsIDg1XTtcblxuLyoqXG4gKiBNYXhpbXVtIHNhZmUgdmFsdWUgaW4geSBkaXJlY3Rpb25cbiAqIEBjb25zdFxuICogQHR5cGUge251bWJlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IE1BWF9TQUZFX1kgPSBSQURJVVMgKiBNYXRoLmxvZyhNYXRoLnRhbihNYXRoLlBJIC8gMikpO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2NcbiAqIFByb2plY3Rpb24gb2JqZWN0IGZvciB3ZWIvc3BoZXJpY2FsIE1lcmNhdG9yIChFUFNHOjM4NTcpLlxuICovXG5jbGFzcyBFUFNHMzg1N1Byb2plY3Rpb24gZXh0ZW5kcyBQcm9qZWN0aW9uIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb2RlIENvZGUuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb2RlKSB7XG4gICAgc3VwZXIoe1xuICAgICAgY29kZTogY29kZSxcbiAgICAgIHVuaXRzOiAnbScsXG4gICAgICBleHRlbnQ6IEVYVEVOVCxcbiAgICAgIGdsb2JhbDogdHJ1ZSxcbiAgICAgIHdvcmxkRXh0ZW50OiBXT1JMRF9FWFRFTlQsXG4gICAgICBnZXRQb2ludFJlc29sdXRpb246IGZ1bmN0aW9uIChyZXNvbHV0aW9uLCBwb2ludCkge1xuICAgICAgICByZXR1cm4gcmVzb2x1dGlvbiAvIE1hdGguY29zaChwb2ludFsxXSAvIFJBRElVUyk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG59XG5cbi8qKlxuICogUHJvamVjdGlvbnMgZXF1YWwgdG8gRVBTRzozODU3LlxuICpcbiAqIEBjb25zdFxuICogQHR5cGUge0FycmF5PGltcG9ydChcIi4vUHJvamVjdGlvbi5qc1wiKS5kZWZhdWx0Pn1cbiAqL1xuZXhwb3J0IGNvbnN0IFBST0pFQ1RJT05TID0gW1xuICBuZXcgRVBTRzM4NTdQcm9qZWN0aW9uKCdFUFNHOjM4NTcnKSxcbiAgbmV3IEVQU0czODU3UHJvamVjdGlvbignRVBTRzoxMDIxMDAnKSxcbiAgbmV3IEVQU0czODU3UHJvamVjdGlvbignRVBTRzoxMDIxMTMnKSxcbiAgbmV3IEVQU0czODU3UHJvamVjdGlvbignRVBTRzo5MDA5MTMnKSxcbiAgbmV3IEVQU0czODU3UHJvamVjdGlvbignaHR0cDovL3d3dy5vcGVuZ2lzLm5ldC9kZWYvY3JzL0VQU0cvMC8zODU3JyksXG4gIG5ldyBFUFNHMzg1N1Byb2plY3Rpb24oJ2h0dHA6Ly93d3cub3Blbmdpcy5uZXQvZ21sL3Nycy9lcHNnLnhtbCMzODU3JyksXG5dO1xuXG4vKipcbiAqIFRyYW5zZm9ybWF0aW9uIGZyb20gRVBTRzo0MzI2IHRvIEVQU0c6Mzg1Ny5cbiAqXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGlucHV0IElucHV0IGFycmF5IG9mIGNvb3JkaW5hdGUgdmFsdWVzLlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBbb3V0cHV0XSBPdXRwdXQgYXJyYXkgb2YgY29vcmRpbmF0ZSB2YWx1ZXMuXG4gKiBAcGFyYW0ge251bWJlcn0gW2RpbWVuc2lvbl0gRGltZW5zaW9uIChkZWZhdWx0IGlzIGAyYCkuXG4gKiBAcmV0dXJuIHtBcnJheTxudW1iZXI+fSBPdXRwdXQgYXJyYXkgb2YgY29vcmRpbmF0ZSB2YWx1ZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tRVBTRzQzMjYoaW5wdXQsIG91dHB1dCwgZGltZW5zaW9uKSB7XG4gIGNvbnN0IGxlbmd0aCA9IGlucHV0Lmxlbmd0aDtcbiAgZGltZW5zaW9uID0gZGltZW5zaW9uID4gMSA/IGRpbWVuc2lvbiA6IDI7XG4gIGlmIChvdXRwdXQgPT09IHVuZGVmaW5lZCkge1xuICAgIGlmIChkaW1lbnNpb24gPiAyKSB7XG4gICAgICAvLyBwcmVzZXJ2ZSB2YWx1ZXMgYmV5b25kIHNlY29uZCBkaW1lbnNpb25cbiAgICAgIG91dHB1dCA9IGlucHV0LnNsaWNlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG91dHB1dCA9IG5ldyBBcnJheShsZW5ndGgpO1xuICAgIH1cbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSBkaW1lbnNpb24pIHtcbiAgICBvdXRwdXRbaV0gPSAoSEFMRl9TSVpFICogaW5wdXRbaV0pIC8gMTgwO1xuICAgIGxldCB5ID0gUkFESVVTICogTWF0aC5sb2coTWF0aC50YW4oKE1hdGguUEkgKiAoK2lucHV0W2kgKyAxXSArIDkwKSkgLyAzNjApKTtcbiAgICBpZiAoeSA+IE1BWF9TQUZFX1kpIHtcbiAgICAgIHkgPSBNQVhfU0FGRV9ZO1xuICAgIH0gZWxzZSBpZiAoeSA8IC1NQVhfU0FGRV9ZKSB7XG4gICAgICB5ID0gLU1BWF9TQUZFX1k7XG4gICAgfVxuICAgIG91dHB1dFtpICsgMV0gPSB5O1xuICB9XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtYXRpb24gZnJvbSBFUFNHOjM4NTcgdG8gRVBTRzo0MzI2LlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gaW5wdXQgSW5wdXQgYXJyYXkgb2YgY29vcmRpbmF0ZSB2YWx1ZXMuXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IFtvdXRwdXRdIE91dHB1dCBhcnJheSBvZiBjb29yZGluYXRlIHZhbHVlcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbZGltZW5zaW9uXSBEaW1lbnNpb24gKGRlZmF1bHQgaXMgYDJgKS5cbiAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59IE91dHB1dCBhcnJheSBvZiBjb29yZGluYXRlIHZhbHVlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvRVBTRzQzMjYoaW5wdXQsIG91dHB1dCwgZGltZW5zaW9uKSB7XG4gIGNvbnN0IGxlbmd0aCA9IGlucHV0Lmxlbmd0aDtcbiAgZGltZW5zaW9uID0gZGltZW5zaW9uID4gMSA/IGRpbWVuc2lvbiA6IDI7XG4gIGlmIChvdXRwdXQgPT09IHVuZGVmaW5lZCkge1xuICAgIGlmIChkaW1lbnNpb24gPiAyKSB7XG4gICAgICAvLyBwcmVzZXJ2ZSB2YWx1ZXMgYmV5b25kIHNlY29uZCBkaW1lbnNpb25cbiAgICAgIG91dHB1dCA9IGlucHV0LnNsaWNlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG91dHB1dCA9IG5ldyBBcnJheShsZW5ndGgpO1xuICAgIH1cbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSBkaW1lbnNpb24pIHtcbiAgICBvdXRwdXRbaV0gPSAoMTgwICogaW5wdXRbaV0pIC8gSEFMRl9TSVpFO1xuICAgIG91dHB1dFtpICsgMV0gPVxuICAgICAgKDM2MCAqIE1hdGguYXRhbihNYXRoLmV4cChpbnB1dFtpICsgMV0gLyBSQURJVVMpKSkgLyBNYXRoLlBJIC0gOTA7XG4gIH1cbiAgcmV0dXJuIG91dHB1dDtcbn1cbiIsIi8qKlxuICogQG1vZHVsZSBvbC9wcm9qL2Vwc2c0MzI2XG4gKi9cbmltcG9ydCBQcm9qZWN0aW9uIGZyb20gJy4vUHJvamVjdGlvbi5qcyc7XG5cbi8qKlxuICogU2VtaS1tYWpvciByYWRpdXMgb2YgdGhlIFdHUzg0IGVsbGlwc29pZC5cbiAqXG4gKiBAY29uc3RcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBSQURJVVMgPSA2Mzc4MTM3O1xuXG4vKipcbiAqIEV4dGVudCBvZiB0aGUgRVBTRzo0MzI2IHByb2plY3Rpb24gd2hpY2ggaXMgdGhlIHdob2xlIHdvcmxkLlxuICpcbiAqIEBjb25zdFxuICogQHR5cGUge2ltcG9ydChcIi4uL2V4dGVudC5qc1wiKS5FeHRlbnR9XG4gKi9cbmV4cG9ydCBjb25zdCBFWFRFTlQgPSBbLTE4MCwgLTkwLCAxODAsIDkwXTtcblxuLyoqXG4gKiBAY29uc3RcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBNRVRFUlNfUEVSX1VOSVQgPSAoTWF0aC5QSSAqIFJBRElVUykgLyAxODA7XG5cbi8qKlxuICogQGNsYXNzZGVzY1xuICogUHJvamVjdGlvbiBvYmplY3QgZm9yIFdHUzg0IGdlb2dyYXBoaWMgY29vcmRpbmF0ZXMgKEVQU0c6NDMyNikuXG4gKlxuICogTm90ZSB0aGF0IE9wZW5MYXllcnMgZG9lcyBub3Qgc3RyaWN0bHkgY29tcGx5IHdpdGggdGhlIEVQU0cgZGVmaW5pdGlvbi5cbiAqIFRoZSBFUFNHIHJlZ2lzdHJ5IGRlZmluZXMgNDMyNiBhcyBhIENSUyBmb3IgTGF0aXR1ZGUsTG9uZ2l0dWRlICh5LHgpLlxuICogT3BlbkxheWVycyB0cmVhdHMgRVBTRzo0MzI2IGFzIGEgcHNldWRvLXByb2plY3Rpb24sIHdpdGggeCx5IGNvb3JkaW5hdGVzLlxuICovXG5jbGFzcyBFUFNHNDMyNlByb2plY3Rpb24gZXh0ZW5kcyBQcm9qZWN0aW9uIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb2RlIENvZGUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbYXhpc09yaWVudGF0aW9uXSBBeGlzIG9yaWVudGF0aW9uLlxuICAgKi9cbiAgY29uc3RydWN0b3IoY29kZSwgYXhpc09yaWVudGF0aW9uKSB7XG4gICAgc3VwZXIoe1xuICAgICAgY29kZTogY29kZSxcbiAgICAgIHVuaXRzOiAnZGVncmVlcycsXG4gICAgICBleHRlbnQ6IEVYVEVOVCxcbiAgICAgIGF4aXNPcmllbnRhdGlvbjogYXhpc09yaWVudGF0aW9uLFxuICAgICAgZ2xvYmFsOiB0cnVlLFxuICAgICAgbWV0ZXJzUGVyVW5pdDogTUVURVJTX1BFUl9VTklULFxuICAgICAgd29ybGRFeHRlbnQ6IEVYVEVOVCxcbiAgICB9KTtcbiAgfVxufVxuXG4vKipcbiAqIFByb2plY3Rpb25zIGVxdWFsIHRvIEVQU0c6NDMyNi5cbiAqXG4gKiBAY29uc3RcbiAqIEB0eXBlIHtBcnJheTxpbXBvcnQoXCIuL1Byb2plY3Rpb24uanNcIikuZGVmYXVsdD59XG4gKi9cbmV4cG9ydCBjb25zdCBQUk9KRUNUSU9OUyA9IFtcbiAgbmV3IEVQU0c0MzI2UHJvamVjdGlvbignQ1JTOjg0JyksXG4gIG5ldyBFUFNHNDMyNlByb2plY3Rpb24oJ0VQU0c6NDMyNicsICduZXUnKSxcbiAgbmV3IEVQU0c0MzI2UHJvamVjdGlvbigndXJuOm9nYzpkZWY6Y3JzOk9HQzoxLjM6Q1JTODQnKSxcbiAgbmV3IEVQU0c0MzI2UHJvamVjdGlvbigndXJuOm9nYzpkZWY6Y3JzOk9HQzoyOjg0JyksXG4gIG5ldyBFUFNHNDMyNlByb2plY3Rpb24oJ2h0dHA6Ly93d3cub3Blbmdpcy5uZXQvZGVmL2Nycy9PR0MvMS4zL0NSUzg0JyksXG4gIG5ldyBFUFNHNDMyNlByb2plY3Rpb24oJ2h0dHA6Ly93d3cub3Blbmdpcy5uZXQvZ21sL3Nycy9lcHNnLnhtbCM0MzI2JywgJ25ldScpLFxuICBuZXcgRVBTRzQzMjZQcm9qZWN0aW9uKCdodHRwOi8vd3d3Lm9wZW5naXMubmV0L2RlZi9jcnMvRVBTRy8wLzQzMjYnLCAnbmV1JyksXG5dO1xuIiwiLyoqXG4gKiBAbW9kdWxlIG9sL3Byb2ovcHJvamVjdGlvbnNcbiAqL1xuXG4vKipcbiAqIEB0eXBlIHtPYmplY3Q8c3RyaW5nLCBpbXBvcnQoXCIuL1Byb2plY3Rpb24uanNcIikuZGVmYXVsdD59XG4gKi9cbmxldCBjYWNoZSA9IHt9O1xuXG4vKipcbiAqIENsZWFyIHRoZSBwcm9qZWN0aW9ucyBjYWNoZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyKCkge1xuICBjYWNoZSA9IHt9O1xufVxuXG4vKipcbiAqIEdldCBhIGNhY2hlZCBwcm9qZWN0aW9uIGJ5IGNvZGUuXG4gKiBAcGFyYW0ge3N0cmluZ30gY29kZSBUaGUgY29kZSBmb3IgdGhlIHByb2plY3Rpb24uXG4gKiBAcmV0dXJuIHtpbXBvcnQoXCIuL1Byb2plY3Rpb24uanNcIikuZGVmYXVsdH0gVGhlIHByb2plY3Rpb24gKGlmIGNhY2hlZCkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXQoY29kZSkge1xuICByZXR1cm4gKFxuICAgIGNhY2hlW2NvZGVdIHx8XG4gICAgY2FjaGVbY29kZS5yZXBsYWNlKC91cm46KHgtKT9vZ2M6ZGVmOmNyczpFUFNHOiguKjopPyhcXHcrKSQvLCAnRVBTRzokMycpXSB8fFxuICAgIG51bGxcbiAgKTtcbn1cblxuLyoqXG4gKiBBZGQgYSBwcm9qZWN0aW9uIHRvIHRoZSBjYWNoZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2RlIFRoZSBwcm9qZWN0aW9uIGNvZGUuXG4gKiBAcGFyYW0ge2ltcG9ydChcIi4vUHJvamVjdGlvbi5qc1wiKS5kZWZhdWx0fSBwcm9qZWN0aW9uIFRoZSBwcm9qZWN0aW9uIHRvIGNhY2hlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkKGNvZGUsIHByb2plY3Rpb24pIHtcbiAgY2FjaGVbY29kZV0gPSBwcm9qZWN0aW9uO1xufVxuIiwiLyoqXG4gKiBAbW9kdWxlIG9sL3Byb2ovdHJhbnNmb3Jtc1xuICovXG5pbXBvcnQge2lzRW1wdHl9IGZyb20gJy4uL29iai5qcyc7XG5cbi8qKlxuICogQHByaXZhdGVcbiAqIEB0eXBlIHshT2JqZWN0PHN0cmluZywgT2JqZWN0PHN0cmluZywgaW1wb3J0KFwiLi4vcHJvai5qc1wiKS5UcmFuc2Zvcm1GdW5jdGlvbj4+fVxuICovXG5sZXQgdHJhbnNmb3JtcyA9IHt9O1xuXG4vKipcbiAqIENsZWFyIHRoZSB0cmFuc2Zvcm0gY2FjaGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGVhcigpIHtcbiAgdHJhbnNmb3JtcyA9IHt9O1xufVxuXG4vKipcbiAqIFJlZ2lzdGVycyBhIGNvbnZlcnNpb24gZnVuY3Rpb24gdG8gY29udmVydCBjb29yZGluYXRlcyBmcm9tIHRoZSBzb3VyY2VcbiAqIHByb2plY3Rpb24gdG8gdGhlIGRlc3RpbmF0aW9uIHByb2plY3Rpb24uXG4gKlxuICogQHBhcmFtIHtpbXBvcnQoXCIuL1Byb2plY3Rpb24uanNcIikuZGVmYXVsdH0gc291cmNlIFNvdXJjZS5cbiAqIEBwYXJhbSB7aW1wb3J0KFwiLi9Qcm9qZWN0aW9uLmpzXCIpLmRlZmF1bHR9IGRlc3RpbmF0aW9uIERlc3RpbmF0aW9uLlxuICogQHBhcmFtIHtpbXBvcnQoXCIuLi9wcm9qLmpzXCIpLlRyYW5zZm9ybUZ1bmN0aW9ufSB0cmFuc2Zvcm1GbiBUcmFuc2Zvcm0uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGQoc291cmNlLCBkZXN0aW5hdGlvbiwgdHJhbnNmb3JtRm4pIHtcbiAgY29uc3Qgc291cmNlQ29kZSA9IHNvdXJjZS5nZXRDb2RlKCk7XG4gIGNvbnN0IGRlc3RpbmF0aW9uQ29kZSA9IGRlc3RpbmF0aW9uLmdldENvZGUoKTtcbiAgaWYgKCEoc291cmNlQ29kZSBpbiB0cmFuc2Zvcm1zKSkge1xuICAgIHRyYW5zZm9ybXNbc291cmNlQ29kZV0gPSB7fTtcbiAgfVxuICB0cmFuc2Zvcm1zW3NvdXJjZUNvZGVdW2Rlc3RpbmF0aW9uQ29kZV0gPSB0cmFuc2Zvcm1Gbjtcbn1cblxuLyoqXG4gKiBVbnJlZ2lzdGVycyB0aGUgY29udmVyc2lvbiBmdW5jdGlvbiB0byBjb252ZXJ0IGNvb3JkaW5hdGVzIGZyb20gdGhlIHNvdXJjZVxuICogcHJvamVjdGlvbiB0byB0aGUgZGVzdGluYXRpb24gcHJvamVjdGlvbi4gIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gY2xlYW4gdXBcbiAqIGNhY2hlZCB0cmFuc2Zvcm1zIGR1cmluZyB0ZXN0aW5nLlxuICpcbiAqIEBwYXJhbSB7aW1wb3J0KFwiLi9Qcm9qZWN0aW9uLmpzXCIpLmRlZmF1bHR9IHNvdXJjZSBTb3VyY2UgcHJvamVjdGlvbi5cbiAqIEBwYXJhbSB7aW1wb3J0KFwiLi9Qcm9qZWN0aW9uLmpzXCIpLmRlZmF1bHR9IGRlc3RpbmF0aW9uIERlc3RpbmF0aW9uIHByb2plY3Rpb24uXG4gKiBAcmV0dXJuIHtpbXBvcnQoXCIuLi9wcm9qLmpzXCIpLlRyYW5zZm9ybUZ1bmN0aW9ufSB0cmFuc2Zvcm1GbiBUaGUgdW5yZWdpc3RlcmVkIHRyYW5zZm9ybS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZShzb3VyY2UsIGRlc3RpbmF0aW9uKSB7XG4gIGNvbnN0IHNvdXJjZUNvZGUgPSBzb3VyY2UuZ2V0Q29kZSgpO1xuICBjb25zdCBkZXN0aW5hdGlvbkNvZGUgPSBkZXN0aW5hdGlvbi5nZXRDb2RlKCk7XG4gIGNvbnN0IHRyYW5zZm9ybSA9IHRyYW5zZm9ybXNbc291cmNlQ29kZV1bZGVzdGluYXRpb25Db2RlXTtcbiAgZGVsZXRlIHRyYW5zZm9ybXNbc291cmNlQ29kZV1bZGVzdGluYXRpb25Db2RlXTtcbiAgaWYgKGlzRW1wdHkodHJhbnNmb3Jtc1tzb3VyY2VDb2RlXSkpIHtcbiAgICBkZWxldGUgdHJhbnNmb3Jtc1tzb3VyY2VDb2RlXTtcbiAgfVxuICByZXR1cm4gdHJhbnNmb3JtO1xufVxuXG4vKipcbiAqIEdldCBhIHRyYW5zZm9ybSBnaXZlbiBhIHNvdXJjZSBjb2RlIGFuZCBhIGRlc3RpbmF0aW9uIGNvZGUuXG4gKiBAcGFyYW0ge3N0cmluZ30gc291cmNlQ29kZSBUaGUgY29kZSBmb3IgdGhlIHNvdXJjZSBwcm9qZWN0aW9uLlxuICogQHBhcmFtIHtzdHJpbmd9IGRlc3RpbmF0aW9uQ29kZSBUaGUgY29kZSBmb3IgdGhlIGRlc3RpbmF0aW9uIHByb2plY3Rpb24uXG4gKiBAcmV0dXJuIHtpbXBvcnQoXCIuLi9wcm9qLmpzXCIpLlRyYW5zZm9ybUZ1bmN0aW9ufHVuZGVmaW5lZH0gVGhlIHRyYW5zZm9ybSBmdW5jdGlvbiAoaWYgZm91bmQpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0KHNvdXJjZUNvZGUsIGRlc3RpbmF0aW9uQ29kZSkge1xuICBsZXQgdHJhbnNmb3JtO1xuICBpZiAoc291cmNlQ29kZSBpbiB0cmFuc2Zvcm1zICYmIGRlc3RpbmF0aW9uQ29kZSBpbiB0cmFuc2Zvcm1zW3NvdXJjZUNvZGVdKSB7XG4gICAgdHJhbnNmb3JtID0gdHJhbnNmb3Jtc1tzb3VyY2VDb2RlXVtkZXN0aW5hdGlvbkNvZGVdO1xuICB9XG4gIHJldHVybiB0cmFuc2Zvcm07XG59XG4iLCIvKipcbiAqIEBtb2R1bGUgb2wvc3BoZXJlXG4gKi9cbmltcG9ydCB7dG9EZWdyZWVzLCB0b1JhZGlhbnN9IGZyb20gJy4vbWF0aC5qcyc7XG5cbi8qKlxuICogT2JqZWN0IGxpdGVyYWwgd2l0aCBvcHRpb25zIGZvciB0aGUge0BsaW5rIGdldExlbmd0aH0gb3Ige0BsaW5rIGdldEFyZWF9XG4gKiBmdW5jdGlvbnMuXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBTcGhlcmVNZXRyaWNPcHRpb25zXG4gKiBAcHJvcGVydHkge2ltcG9ydChcIi4vcHJvai5qc1wiKS5Qcm9qZWN0aW9uTGlrZX0gW3Byb2plY3Rpb249J0VQU0c6Mzg1NyddXG4gKiBQcm9qZWN0aW9uIG9mIHRoZSAgZ2VvbWV0cnkuICBCeSBkZWZhdWx0LCB0aGUgZ2VvbWV0cnkgaXMgYXNzdW1lZCB0byBiZSBpblxuICogV2ViIE1lcmNhdG9yLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IFtyYWRpdXM9NjM3MTAwOC44XSBTcGhlcmUgcmFkaXVzLiAgQnkgZGVmYXVsdCwgdGhlXG4gKiBbbWVhbiBFYXJ0aCByYWRpdXNdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0VhcnRoX3JhZGl1cyNNZWFuX3JhZGl1cylcbiAqIGZvciB0aGUgV0dTODQgZWxsaXBzb2lkIGlzIHVzZWQuXG4gKi9cblxuLyoqXG4gKiBUaGUgbWVhbiBFYXJ0aCByYWRpdXMgKDEvMyAqICgyYSArIGIpKSBmb3IgdGhlIFdHUzg0IGVsbGlwc29pZC5cbiAqIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0VhcnRoX3JhZGl1cyNNZWFuX3JhZGl1c1xuICogQHR5cGUge251bWJlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfUkFESVVTID0gNjM3MTAwOC44O1xuXG4vKipcbiAqIEdldCB0aGUgZ3JlYXQgY2lyY2xlIGRpc3RhbmNlIChpbiBtZXRlcnMpIGJldHdlZW4gdHdvIGdlb2dyYXBoaWMgY29vcmRpbmF0ZXMuXG4gKiBAcGFyYW0ge0FycmF5fSBjMSBTdGFydGluZyBjb29yZGluYXRlLlxuICogQHBhcmFtIHtBcnJheX0gYzIgRW5kaW5nIGNvb3JkaW5hdGUuXG4gKiBAcGFyYW0ge251bWJlcn0gW3JhZGl1c10gVGhlIHNwaGVyZSByYWRpdXMgdG8gdXNlLiAgRGVmYXVsdHMgdG8gdGhlIEVhcnRoJ3NcbiAqICAgICBtZWFuIHJhZGl1cyB1c2luZyB0aGUgV0dTODQgZWxsaXBzb2lkLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgZ3JlYXQgY2lyY2xlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHBvaW50cyAoaW4gbWV0ZXJzKS5cbiAqIEBhcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3RhbmNlKGMxLCBjMiwgcmFkaXVzKSB7XG4gIHJhZGl1cyA9IHJhZGl1cyB8fCBERUZBVUxUX1JBRElVUztcbiAgY29uc3QgbGF0MSA9IHRvUmFkaWFucyhjMVsxXSk7XG4gIGNvbnN0IGxhdDIgPSB0b1JhZGlhbnMoYzJbMV0pO1xuICBjb25zdCBkZWx0YUxhdEJ5MiA9IChsYXQyIC0gbGF0MSkgLyAyO1xuICBjb25zdCBkZWx0YUxvbkJ5MiA9IHRvUmFkaWFucyhjMlswXSAtIGMxWzBdKSAvIDI7XG4gIGNvbnN0IGEgPVxuICAgIE1hdGguc2luKGRlbHRhTGF0QnkyKSAqIE1hdGguc2luKGRlbHRhTGF0QnkyKSArXG4gICAgTWF0aC5zaW4oZGVsdGFMb25CeTIpICpcbiAgICAgIE1hdGguc2luKGRlbHRhTG9uQnkyKSAqXG4gICAgICBNYXRoLmNvcyhsYXQxKSAqXG4gICAgICBNYXRoLmNvcyhsYXQyKTtcbiAgcmV0dXJuIDIgKiByYWRpdXMgKiBNYXRoLmF0YW4yKE1hdGguc3FydChhKSwgTWF0aC5zcXJ0KDEgLSBhKSk7XG59XG5cbi8qKlxuICogR2V0IHRoZSBjdW11bGF0aXZlIGdyZWF0IGNpcmNsZSBsZW5ndGggb2YgbGluZXN0cmluZyBjb29yZGluYXRlcyAoZ2VvZ3JhcGhpYykuXG4gKiBAcGFyYW0ge0FycmF5fSBjb29yZGluYXRlcyBMaW5lc3RyaW5nIGNvb3JkaW5hdGVzLlxuICogQHBhcmFtIHtudW1iZXJ9IHJhZGl1cyBUaGUgc3BoZXJlIHJhZGl1cyB0byB1c2UuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBsZW5ndGggKGluIG1ldGVycykuXG4gKi9cbmZ1bmN0aW9uIGdldExlbmd0aEludGVybmFsKGNvb3JkaW5hdGVzLCByYWRpdXMpIHtcbiAgbGV0IGxlbmd0aCA9IDA7XG4gIGZvciAobGV0IGkgPSAwLCBpaSA9IGNvb3JkaW5hdGVzLmxlbmd0aDsgaSA8IGlpIC0gMTsgKytpKSB7XG4gICAgbGVuZ3RoICs9IGdldERpc3RhbmNlKGNvb3JkaW5hdGVzW2ldLCBjb29yZGluYXRlc1tpICsgMV0sIHJhZGl1cyk7XG4gIH1cbiAgcmV0dXJuIGxlbmd0aDtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHNwaGVyaWNhbCBsZW5ndGggb2YgYSBnZW9tZXRyeS4gIFRoaXMgbGVuZ3RoIGlzIHRoZSBzdW0gb2YgdGhlXG4gKiBncmVhdCBjaXJjbGUgZGlzdGFuY2VzIGJldHdlZW4gY29vcmRpbmF0ZXMuICBGb3IgcG9seWdvbnMsIHRoZSBsZW5ndGggaXNcbiAqIHRoZSBzdW0gb2YgYWxsIHJpbmdzLiAgRm9yIHBvaW50cywgdGhlIGxlbmd0aCBpcyB6ZXJvLiAgRm9yIG11bHRpLXBhcnRcbiAqIGdlb21ldHJpZXMsIHRoZSBsZW5ndGggaXMgdGhlIHN1bSBvZiB0aGUgbGVuZ3RoIG9mIGVhY2ggcGFydC5cbiAqIEBwYXJhbSB7aW1wb3J0KFwiLi9nZW9tL0dlb21ldHJ5LmpzXCIpLmRlZmF1bHR9IGdlb21ldHJ5IEEgZ2VvbWV0cnkuXG4gKiBAcGFyYW0ge1NwaGVyZU1ldHJpY09wdGlvbnN9IFtvcHRpb25zXSBPcHRpb25zIGZvciB0aGVcbiAqIGxlbmd0aCBjYWxjdWxhdGlvbi4gIEJ5IGRlZmF1bHQsIGdlb21ldHJpZXMgYXJlIGFzc3VtZWQgdG8gYmUgaW4gJ0VQU0c6Mzg1NycuXG4gKiBZb3UgY2FuIGNoYW5nZSB0aGlzIGJ5IHByb3ZpZGluZyBhIGBwcm9qZWN0aW9uYCBvcHRpb24uXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBzcGhlcmljYWwgbGVuZ3RoIChpbiBtZXRlcnMpLlxuICogQGFwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGVuZ3RoKGdlb21ldHJ5LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBjb25zdCByYWRpdXMgPSBvcHRpb25zLnJhZGl1cyB8fCBERUZBVUxUX1JBRElVUztcbiAgY29uc3QgcHJvamVjdGlvbiA9IG9wdGlvbnMucHJvamVjdGlvbiB8fCAnRVBTRzozODU3JztcbiAgY29uc3QgdHlwZSA9IGdlb21ldHJ5LmdldFR5cGUoKTtcbiAgaWYgKHR5cGUgIT09ICdHZW9tZXRyeUNvbGxlY3Rpb24nKSB7XG4gICAgZ2VvbWV0cnkgPSBnZW9tZXRyeS5jbG9uZSgpLnRyYW5zZm9ybShwcm9qZWN0aW9uLCAnRVBTRzo0MzI2Jyk7XG4gIH1cbiAgbGV0IGxlbmd0aCA9IDA7XG4gIGxldCBjb29yZGluYXRlcywgY29vcmRzLCBpLCBpaSwgaiwgamo7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ1BvaW50JzpcbiAgICBjYXNlICdNdWx0aVBvaW50Jzoge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgJ0xpbmVTdHJpbmcnOlxuICAgIGNhc2UgJ0xpbmVhclJpbmcnOiB7XG4gICAgICBjb29yZGluYXRlcyA9IC8qKiBAdHlwZSB7aW1wb3J0KFwiLi9nZW9tL1NpbXBsZUdlb21ldHJ5LmpzXCIpLmRlZmF1bHR9ICovIChcbiAgICAgICAgZ2VvbWV0cnlcbiAgICAgICkuZ2V0Q29vcmRpbmF0ZXMoKTtcbiAgICAgIGxlbmd0aCA9IGdldExlbmd0aEludGVybmFsKGNvb3JkaW5hdGVzLCByYWRpdXMpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgJ011bHRpTGluZVN0cmluZyc6XG4gICAgY2FzZSAnUG9seWdvbic6IHtcbiAgICAgIGNvb3JkaW5hdGVzID0gLyoqIEB0eXBlIHtpbXBvcnQoXCIuL2dlb20vU2ltcGxlR2VvbWV0cnkuanNcIikuZGVmYXVsdH0gKi8gKFxuICAgICAgICBnZW9tZXRyeVxuICAgICAgKS5nZXRDb29yZGluYXRlcygpO1xuICAgICAgZm9yIChpID0gMCwgaWkgPSBjb29yZGluYXRlcy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgICAgIGxlbmd0aCArPSBnZXRMZW5ndGhJbnRlcm5hbChjb29yZGluYXRlc1tpXSwgcmFkaXVzKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlICdNdWx0aVBvbHlnb24nOiB7XG4gICAgICBjb29yZGluYXRlcyA9IC8qKiBAdHlwZSB7aW1wb3J0KFwiLi9nZW9tL1NpbXBsZUdlb21ldHJ5LmpzXCIpLmRlZmF1bHR9ICovIChcbiAgICAgICAgZ2VvbWV0cnlcbiAgICAgICkuZ2V0Q29vcmRpbmF0ZXMoKTtcbiAgICAgIGZvciAoaSA9IDAsIGlpID0gY29vcmRpbmF0ZXMubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgICAgICBjb29yZHMgPSBjb29yZGluYXRlc1tpXTtcbiAgICAgICAgZm9yIChqID0gMCwgamogPSBjb29yZHMubGVuZ3RoOyBqIDwgamo7ICsraikge1xuICAgICAgICAgIGxlbmd0aCArPSBnZXRMZW5ndGhJbnRlcm5hbChjb29yZHNbal0sIHJhZGl1cyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlICdHZW9tZXRyeUNvbGxlY3Rpb24nOiB7XG4gICAgICBjb25zdCBnZW9tZXRyaWVzID1cbiAgICAgICAgLyoqIEB0eXBlIHtpbXBvcnQoXCIuL2dlb20vR2VvbWV0cnlDb2xsZWN0aW9uLmpzXCIpLmRlZmF1bHR9ICovIChcbiAgICAgICAgICBnZW9tZXRyeVxuICAgICAgICApLmdldEdlb21ldHJpZXMoKTtcbiAgICAgIGZvciAoaSA9IDAsIGlpID0gZ2VvbWV0cmllcy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgICAgIGxlbmd0aCArPSBnZXRMZW5ndGgoZ2VvbWV0cmllc1tpXSwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgZGVmYXVsdDoge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbnN1cHBvcnRlZCBnZW9tZXRyeSB0eXBlOiAnICsgdHlwZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBsZW5ndGg7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgc3BoZXJpY2FsIGFyZWEgZm9yIGEgbGlzdCBvZiBjb29yZGluYXRlcy5cbiAqXG4gKiBbUmVmZXJlbmNlXShodHRwczovL3Rycy5qcGwubmFzYS5nb3YvaGFuZGxlLzIwMTQvNDA0MDkpXG4gKiBSb2JlcnQuIEcuIENoYW1iZXJsYWluIGFuZCBXaWxsaWFtIEguIER1cXVldHRlLCBcIlNvbWUgQWxnb3JpdGhtcyBmb3JcbiAqIFBvbHlnb25zIG9uIGEgU3BoZXJlXCIsIEpQTCBQdWJsaWNhdGlvbiAwNy0wMywgSmV0IFByb3B1bHNpb25cbiAqIExhYm9yYXRvcnksIFBhc2FkZW5hLCBDQSwgSnVuZSAyMDA3XG4gKlxuICogQHBhcmFtIHtBcnJheTxpbXBvcnQoXCIuL2Nvb3JkaW5hdGUuanNcIikuQ29vcmRpbmF0ZT59IGNvb3JkaW5hdGVzIExpc3Qgb2YgY29vcmRpbmF0ZXMgb2YgYSBsaW5lYXJcbiAqIHJpbmcuIElmIHRoZSByaW5nIGlzIG9yaWVudGVkIGNsb2Nrd2lzZSwgdGhlIGFyZWEgd2lsbCBiZSBwb3NpdGl2ZSxcbiAqIG90aGVyd2lzZSBpdCB3aWxsIGJlIG5lZ2F0aXZlLlxuICogQHBhcmFtIHtudW1iZXJ9IHJhZGl1cyBUaGUgc3BoZXJlIHJhZGl1cy5cbiAqIEByZXR1cm4ge251bWJlcn0gQXJlYSAoaW4gc3F1YXJlIG1ldGVycykuXG4gKi9cbmZ1bmN0aW9uIGdldEFyZWFJbnRlcm5hbChjb29yZGluYXRlcywgcmFkaXVzKSB7XG4gIGxldCBhcmVhID0gMDtcbiAgY29uc3QgbGVuID0gY29vcmRpbmF0ZXMubGVuZ3RoO1xuICBsZXQgeDEgPSBjb29yZGluYXRlc1tsZW4gLSAxXVswXTtcbiAgbGV0IHkxID0gY29vcmRpbmF0ZXNbbGVuIC0gMV1bMV07XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCB4MiA9IGNvb3JkaW5hdGVzW2ldWzBdO1xuICAgIGNvbnN0IHkyID0gY29vcmRpbmF0ZXNbaV1bMV07XG4gICAgYXJlYSArPVxuICAgICAgdG9SYWRpYW5zKHgyIC0geDEpICpcbiAgICAgICgyICsgTWF0aC5zaW4odG9SYWRpYW5zKHkxKSkgKyBNYXRoLnNpbih0b1JhZGlhbnMoeTIpKSk7XG4gICAgeDEgPSB4MjtcbiAgICB5MSA9IHkyO1xuICB9XG4gIHJldHVybiAoYXJlYSAqIHJhZGl1cyAqIHJhZGl1cykgLyAyLjA7XG59XG5cbi8qKlxuICogR2V0IHRoZSBzcGhlcmljYWwgYXJlYSBvZiBhIGdlb21ldHJ5LiAgVGhpcyBpcyB0aGUgYXJlYSAoaW4gbWV0ZXJzKSBhc3N1bWluZ1xuICogdGhhdCBwb2x5Z29uIGVkZ2VzIGFyZSBzZWdtZW50cyBvZiBncmVhdCBjaXJjbGVzIG9uIGEgc3BoZXJlLlxuICogQHBhcmFtIHtpbXBvcnQoXCIuL2dlb20vR2VvbWV0cnkuanNcIikuZGVmYXVsdH0gZ2VvbWV0cnkgQSBnZW9tZXRyeS5cbiAqIEBwYXJhbSB7U3BoZXJlTWV0cmljT3B0aW9uc30gW29wdGlvbnNdIE9wdGlvbnMgZm9yIHRoZSBhcmVhXG4gKiAgICAgY2FsY3VsYXRpb24uICBCeSBkZWZhdWx0LCBnZW9tZXRyaWVzIGFyZSBhc3N1bWVkIHRvIGJlIGluICdFUFNHOjM4NTcnLlxuICogICAgIFlvdSBjYW4gY2hhbmdlIHRoaXMgYnkgcHJvdmlkaW5nIGEgYHByb2plY3Rpb25gIG9wdGlvbi5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIHNwaGVyaWNhbCBhcmVhIChpbiBzcXVhcmUgbWV0ZXJzKS5cbiAqIEBhcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEFyZWEoZ2VvbWV0cnksIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGNvbnN0IHJhZGl1cyA9IG9wdGlvbnMucmFkaXVzIHx8IERFRkFVTFRfUkFESVVTO1xuICBjb25zdCBwcm9qZWN0aW9uID0gb3B0aW9ucy5wcm9qZWN0aW9uIHx8ICdFUFNHOjM4NTcnO1xuICBjb25zdCB0eXBlID0gZ2VvbWV0cnkuZ2V0VHlwZSgpO1xuICBpZiAodHlwZSAhPT0gJ0dlb21ldHJ5Q29sbGVjdGlvbicpIHtcbiAgICBnZW9tZXRyeSA9IGdlb21ldHJ5LmNsb25lKCkudHJhbnNmb3JtKHByb2plY3Rpb24sICdFUFNHOjQzMjYnKTtcbiAgfVxuICBsZXQgYXJlYSA9IDA7XG4gIGxldCBjb29yZGluYXRlcywgY29vcmRzLCBpLCBpaSwgaiwgamo7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ1BvaW50JzpcbiAgICBjYXNlICdNdWx0aVBvaW50JzpcbiAgICBjYXNlICdMaW5lU3RyaW5nJzpcbiAgICBjYXNlICdNdWx0aUxpbmVTdHJpbmcnOlxuICAgIGNhc2UgJ0xpbmVhclJpbmcnOiB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSAnUG9seWdvbic6IHtcbiAgICAgIGNvb3JkaW5hdGVzID0gLyoqIEB0eXBlIHtpbXBvcnQoXCIuL2dlb20vUG9seWdvbi5qc1wiKS5kZWZhdWx0fSAqLyAoXG4gICAgICAgIGdlb21ldHJ5XG4gICAgICApLmdldENvb3JkaW5hdGVzKCk7XG4gICAgICBhcmVhID0gTWF0aC5hYnMoZ2V0QXJlYUludGVybmFsKGNvb3JkaW5hdGVzWzBdLCByYWRpdXMpKTtcbiAgICAgIGZvciAoaSA9IDEsIGlpID0gY29vcmRpbmF0ZXMubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgICAgICBhcmVhIC09IE1hdGguYWJzKGdldEFyZWFJbnRlcm5hbChjb29yZGluYXRlc1tpXSwgcmFkaXVzKSk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSAnTXVsdGlQb2x5Z29uJzoge1xuICAgICAgY29vcmRpbmF0ZXMgPSAvKiogQHR5cGUge2ltcG9ydChcIi4vZ2VvbS9TaW1wbGVHZW9tZXRyeS5qc1wiKS5kZWZhdWx0fSAqLyAoXG4gICAgICAgIGdlb21ldHJ5XG4gICAgICApLmdldENvb3JkaW5hdGVzKCk7XG4gICAgICBmb3IgKGkgPSAwLCBpaSA9IGNvb3JkaW5hdGVzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICAgICAgY29vcmRzID0gY29vcmRpbmF0ZXNbaV07XG4gICAgICAgIGFyZWEgKz0gTWF0aC5hYnMoZ2V0QXJlYUludGVybmFsKGNvb3Jkc1swXSwgcmFkaXVzKSk7XG4gICAgICAgIGZvciAoaiA9IDEsIGpqID0gY29vcmRzLmxlbmd0aDsgaiA8IGpqOyArK2opIHtcbiAgICAgICAgICBhcmVhIC09IE1hdGguYWJzKGdldEFyZWFJbnRlcm5hbChjb29yZHNbal0sIHJhZGl1cykpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSAnR2VvbWV0cnlDb2xsZWN0aW9uJzoge1xuICAgICAgY29uc3QgZ2VvbWV0cmllcyA9XG4gICAgICAgIC8qKiBAdHlwZSB7aW1wb3J0KFwiLi9nZW9tL0dlb21ldHJ5Q29sbGVjdGlvbi5qc1wiKS5kZWZhdWx0fSAqLyAoXG4gICAgICAgICAgZ2VvbWV0cnlcbiAgICAgICAgKS5nZXRHZW9tZXRyaWVzKCk7XG4gICAgICBmb3IgKGkgPSAwLCBpaSA9IGdlb21ldHJpZXMubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgICAgICBhcmVhICs9IGdldEFyZWEoZ2VvbWV0cmllc1tpXSwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgZGVmYXVsdDoge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbnN1cHBvcnRlZCBnZW9tZXRyeSB0eXBlOiAnICsgdHlwZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcmVhO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGNvb3JkaW5hdGUgYXQgdGhlIGdpdmVuIGRpc3RhbmNlIGFuZCBiZWFyaW5nIGZyb20gYGMxYC5cbiAqXG4gKiBAcGFyYW0ge2ltcG9ydChcIi4vY29vcmRpbmF0ZS5qc1wiKS5Db29yZGluYXRlfSBjMSBUaGUgb3JpZ2luIHBvaW50IChgW2xvbiwgbGF0XWAgaW4gZGVncmVlcykuXG4gKiBAcGFyYW0ge251bWJlcn0gZGlzdGFuY2UgVGhlIGdyZWF0LWNpcmNsZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBvcmlnaW5cbiAqICAgICBwb2ludCBhbmQgdGhlIHRhcmdldCBwb2ludC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiZWFyaW5nIFRoZSBiZWFyaW5nIChpbiByYWRpYW5zKS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbcmFkaXVzXSBUaGUgc3BoZXJlIHJhZGl1cyB0byB1c2UuICBEZWZhdWx0cyB0byB0aGUgRWFydGgnc1xuICogICAgIG1lYW4gcmFkaXVzIHVzaW5nIHRoZSBXR1M4NCBlbGxpcHNvaWQuXG4gKiBAcmV0dXJuIHtpbXBvcnQoXCIuL2Nvb3JkaW5hdGUuanNcIikuQ29vcmRpbmF0ZX0gVGhlIHRhcmdldCBwb2ludC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9mZnNldChjMSwgZGlzdGFuY2UsIGJlYXJpbmcsIHJhZGl1cykge1xuICByYWRpdXMgPSByYWRpdXMgfHwgREVGQVVMVF9SQURJVVM7XG4gIGNvbnN0IGxhdDEgPSB0b1JhZGlhbnMoYzFbMV0pO1xuICBjb25zdCBsb24xID0gdG9SYWRpYW5zKGMxWzBdKTtcbiAgY29uc3QgZEJ5UiA9IGRpc3RhbmNlIC8gcmFkaXVzO1xuICBjb25zdCBsYXQgPSBNYXRoLmFzaW4oXG4gICAgTWF0aC5zaW4obGF0MSkgKiBNYXRoLmNvcyhkQnlSKSArXG4gICAgICBNYXRoLmNvcyhsYXQxKSAqIE1hdGguc2luKGRCeVIpICogTWF0aC5jb3MoYmVhcmluZyksXG4gICk7XG4gIGNvbnN0IGxvbiA9XG4gICAgbG9uMSArXG4gICAgTWF0aC5hdGFuMihcbiAgICAgIE1hdGguc2luKGJlYXJpbmcpICogTWF0aC5zaW4oZEJ5UikgKiBNYXRoLmNvcyhsYXQxKSxcbiAgICAgIE1hdGguY29zKGRCeVIpIC0gTWF0aC5zaW4obGF0MSkgKiBNYXRoLnNpbihsYXQpLFxuICAgICk7XG4gIHJldHVybiBbdG9EZWdyZWVzKGxvbiksIHRvRGVncmVlcyhsYXQpXTtcbn1cbiIsIi8qKlxuICogQG1vZHVsZSBvbC9zdHJpbmdcbiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXIgTnVtYmVyIHRvIGJlIGZvcm1hdHRlZFxuICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIFRoZSBkZXNpcmVkIHdpZHRoXG4gKiBAcGFyYW0ge251bWJlcn0gW3ByZWNpc2lvbl0gUHJlY2lzaW9uIG9mIHRoZSBvdXRwdXQgc3RyaW5nIChpLmUuIG51bWJlciBvZiBkZWNpbWFsIHBsYWNlcylcbiAqIEByZXR1cm4ge3N0cmluZ30gRm9ybWF0dGVkIHN0cmluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gcGFkTnVtYmVyKG51bWJlciwgd2lkdGgsIHByZWNpc2lvbikge1xuICBjb25zdCBudW1iZXJTdHJpbmcgPVxuICAgIHByZWNpc2lvbiAhPT0gdW5kZWZpbmVkID8gbnVtYmVyLnRvRml4ZWQocHJlY2lzaW9uKSA6ICcnICsgbnVtYmVyO1xuICBsZXQgZGVjaW1hbCA9IG51bWJlclN0cmluZy5pbmRleE9mKCcuJyk7XG4gIGRlY2ltYWwgPSBkZWNpbWFsID09PSAtMSA/IG51bWJlclN0cmluZy5sZW5ndGggOiBkZWNpbWFsO1xuICByZXR1cm4gZGVjaW1hbCA+IHdpZHRoXG4gICAgPyBudW1iZXJTdHJpbmdcbiAgICA6IG5ldyBBcnJheSgxICsgd2lkdGggLSBkZWNpbWFsKS5qb2luKCcwJykgKyBudW1iZXJTdHJpbmc7XG59XG5cbi8qKlxuICogQWRhcHRlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9vbWljaGVsc2VuL2NvbXBhcmUtdmVyc2lvbnMvYmxvYi9tYXN0ZXIvaW5kZXguanNcbiAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gdjEgRmlyc3QgdmVyc2lvblxuICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSB2MiBTZWNvbmQgdmVyc2lvblxuICogQHJldHVybiB7bnVtYmVyfSBWYWx1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyZVZlcnNpb25zKHYxLCB2Mikge1xuICBjb25zdCBzMSA9ICgnJyArIHYxKS5zcGxpdCgnLicpO1xuICBjb25zdCBzMiA9ICgnJyArIHYyKS5zcGxpdCgnLicpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgTWF0aC5tYXgoczEubGVuZ3RoLCBzMi5sZW5ndGgpOyBpKyspIHtcbiAgICBjb25zdCBuMSA9IHBhcnNlSW50KHMxW2ldIHx8ICcwJywgMTApO1xuICAgIGNvbnN0IG4yID0gcGFyc2VJbnQoczJbaV0gfHwgJzAnLCAxMCk7XG5cbiAgICBpZiAobjEgPiBuMikge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIGlmIChuMiA+IG4xKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIDA7XG59XG4iLCIvKipcbiAqIEBtb2R1bGUgb2wvdHJhbnNmb3JtXG4gKi9cbmltcG9ydCB7YXNzZXJ0fSBmcm9tICcuL2Fzc2VydHMuanMnO1xuXG4vKipcbiAqIEFuIGFycmF5IHJlcHJlc2VudGluZyBhbiBhZmZpbmUgMmQgdHJhbnNmb3JtYXRpb24gZm9yIHVzZSB3aXRoXG4gKiB7QGxpbmsgbW9kdWxlOm9sL3RyYW5zZm9ybX0gZnVuY3Rpb25zLiBUaGUgYXJyYXkgaGFzIDYgZWxlbWVudHMuXG4gKiBAdHlwZWRlZiB7IUFycmF5PG51bWJlcj59IFRyYW5zZm9ybVxuICogQGFwaVxuICovXG5cbi8qKlxuICogQ29sbGVjdGlvbiBvZiBhZmZpbmUgMmQgdHJhbnNmb3JtYXRpb24gZnVuY3Rpb25zLiBUaGUgZnVuY3Rpb25zIHdvcmsgb24gYW5cbiAqIGFycmF5IG9mIDYgZWxlbWVudHMuIFRoZSBlbGVtZW50IG9yZGVyIGlzIGNvbXBhdGlibGUgd2l0aCB0aGUgW1NWR01hdHJpeFxuICogaW50ZXJmYWNlXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvU1ZHTWF0cml4KSBhbmQgaXNcbiAqIGEgc3Vic2V0IChlbGVtZW50cyBhIHRvIGYpIG9mIGEgM8OXMyBtYXRyaXg6XG4gKiBgYGBcbiAqIFsgYSBjIGUgXVxuICogWyBiIGQgZiBdXG4gKiBbIDAgMCAxIF1cbiAqIGBgYFxuICovXG5cbi8qKlxuICogQHByaXZhdGVcbiAqIEB0eXBlIHtUcmFuc2Zvcm19XG4gKi9cbmNvbnN0IHRtcF8gPSBuZXcgQXJyYXkoNik7XG5cbi8qKlxuICogQ3JlYXRlIGFuIGlkZW50aXR5IHRyYW5zZm9ybS5cbiAqIEByZXR1cm4geyFUcmFuc2Zvcm19IElkZW50aXR5IHRyYW5zZm9ybS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgcmV0dXJuIFsxLCAwLCAwLCAxLCAwLCAwXTtcbn1cblxuLyoqXG4gKiBSZXNldHMgdGhlIGdpdmVuIHRyYW5zZm9ybSB0byBhbiBpZGVudGl0eSB0cmFuc2Zvcm0uXG4gKiBAcGFyYW0geyFUcmFuc2Zvcm19IHRyYW5zZm9ybSBUcmFuc2Zvcm0uXG4gKiBAcmV0dXJuIHshVHJhbnNmb3JtfSBUcmFuc2Zvcm0uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNldCh0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIHNldCh0cmFuc2Zvcm0sIDEsIDAsIDAsIDEsIDAsIDApO1xufVxuXG4vKipcbiAqIE11bHRpcGx5IHRoZSB1bmRlcmx5aW5nIG1hdHJpY2VzIG9mIHR3byB0cmFuc2Zvcm1zIGFuZCByZXR1cm4gdGhlIHJlc3VsdCBpblxuICogdGhlIGZpcnN0IHRyYW5zZm9ybS5cbiAqIEBwYXJhbSB7IVRyYW5zZm9ybX0gdHJhbnNmb3JtMSBUcmFuc2Zvcm0gcGFyYW1ldGVycyBvZiBtYXRyaXggMS5cbiAqIEBwYXJhbSB7IVRyYW5zZm9ybX0gdHJhbnNmb3JtMiBUcmFuc2Zvcm0gcGFyYW1ldGVycyBvZiBtYXRyaXggMi5cbiAqIEByZXR1cm4geyFUcmFuc2Zvcm19IHRyYW5zZm9ybTEgbXVsdGlwbGllZCB3aXRoIHRyYW5zZm9ybTIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseSh0cmFuc2Zvcm0xLCB0cmFuc2Zvcm0yKSB7XG4gIGNvbnN0IGExID0gdHJhbnNmb3JtMVswXTtcbiAgY29uc3QgYjEgPSB0cmFuc2Zvcm0xWzFdO1xuICBjb25zdCBjMSA9IHRyYW5zZm9ybTFbMl07XG4gIGNvbnN0IGQxID0gdHJhbnNmb3JtMVszXTtcbiAgY29uc3QgZTEgPSB0cmFuc2Zvcm0xWzRdO1xuICBjb25zdCBmMSA9IHRyYW5zZm9ybTFbNV07XG4gIGNvbnN0IGEyID0gdHJhbnNmb3JtMlswXTtcbiAgY29uc3QgYjIgPSB0cmFuc2Zvcm0yWzFdO1xuICBjb25zdCBjMiA9IHRyYW5zZm9ybTJbMl07XG4gIGNvbnN0IGQyID0gdHJhbnNmb3JtMlszXTtcbiAgY29uc3QgZTIgPSB0cmFuc2Zvcm0yWzRdO1xuICBjb25zdCBmMiA9IHRyYW5zZm9ybTJbNV07XG5cbiAgdHJhbnNmb3JtMVswXSA9IGExICogYTIgKyBjMSAqIGIyO1xuICB0cmFuc2Zvcm0xWzFdID0gYjEgKiBhMiArIGQxICogYjI7XG4gIHRyYW5zZm9ybTFbMl0gPSBhMSAqIGMyICsgYzEgKiBkMjtcbiAgdHJhbnNmb3JtMVszXSA9IGIxICogYzIgKyBkMSAqIGQyO1xuICB0cmFuc2Zvcm0xWzRdID0gYTEgKiBlMiArIGMxICogZjIgKyBlMTtcbiAgdHJhbnNmb3JtMVs1XSA9IGIxICogZTIgKyBkMSAqIGYyICsgZjE7XG5cbiAgcmV0dXJuIHRyYW5zZm9ybTE7XG59XG5cbi8qKlxuICogU2V0IHRoZSB0cmFuc2Zvcm0gY29tcG9uZW50cyBhLWYgb24gYSBnaXZlbiB0cmFuc2Zvcm0uXG4gKiBAcGFyYW0geyFUcmFuc2Zvcm19IHRyYW5zZm9ybSBUcmFuc2Zvcm0uXG4gKiBAcGFyYW0ge251bWJlcn0gYSBUaGUgYSBjb21wb25lbnQgb2YgdGhlIHRyYW5zZm9ybS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiIFRoZSBiIGNvbXBvbmVudCBvZiB0aGUgdHJhbnNmb3JtLlxuICogQHBhcmFtIHtudW1iZXJ9IGMgVGhlIGMgY29tcG9uZW50IG9mIHRoZSB0cmFuc2Zvcm0uXG4gKiBAcGFyYW0ge251bWJlcn0gZCBUaGUgZCBjb21wb25lbnQgb2YgdGhlIHRyYW5zZm9ybS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBlIFRoZSBlIGNvbXBvbmVudCBvZiB0aGUgdHJhbnNmb3JtLlxuICogQHBhcmFtIHtudW1iZXJ9IGYgVGhlIGYgY29tcG9uZW50IG9mIHRoZSB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJuIHshVHJhbnNmb3JtfSBNYXRyaXggd2l0aCB0cmFuc2Zvcm0gYXBwbGllZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldCh0cmFuc2Zvcm0sIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgdHJhbnNmb3JtWzBdID0gYTtcbiAgdHJhbnNmb3JtWzFdID0gYjtcbiAgdHJhbnNmb3JtWzJdID0gYztcbiAgdHJhbnNmb3JtWzNdID0gZDtcbiAgdHJhbnNmb3JtWzRdID0gZTtcbiAgdHJhbnNmb3JtWzVdID0gZjtcbiAgcmV0dXJuIHRyYW5zZm9ybTtcbn1cblxuLyoqXG4gKiBTZXQgdHJhbnNmb3JtIG9uIG9uZSBtYXRyaXggZnJvbSBhbm90aGVyIG1hdHJpeC5cbiAqIEBwYXJhbSB7IVRyYW5zZm9ybX0gdHJhbnNmb3JtMSBNYXRyaXggdG8gc2V0IHRyYW5zZm9ybSB0by5cbiAqIEBwYXJhbSB7IVRyYW5zZm9ybX0gdHJhbnNmb3JtMiBNYXRyaXggdG8gc2V0IHRyYW5zZm9ybSBmcm9tLlxuICogQHJldHVybiB7IVRyYW5zZm9ybX0gdHJhbnNmb3JtMSB3aXRoIHRyYW5zZm9ybSBmcm9tIHRyYW5zZm9ybTIgYXBwbGllZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldEZyb21BcnJheSh0cmFuc2Zvcm0xLCB0cmFuc2Zvcm0yKSB7XG4gIHRyYW5zZm9ybTFbMF0gPSB0cmFuc2Zvcm0yWzBdO1xuICB0cmFuc2Zvcm0xWzFdID0gdHJhbnNmb3JtMlsxXTtcbiAgdHJhbnNmb3JtMVsyXSA9IHRyYW5zZm9ybTJbMl07XG4gIHRyYW5zZm9ybTFbM10gPSB0cmFuc2Zvcm0yWzNdO1xuICB0cmFuc2Zvcm0xWzRdID0gdHJhbnNmb3JtMls0XTtcbiAgdHJhbnNmb3JtMVs1XSA9IHRyYW5zZm9ybTJbNV07XG4gIHJldHVybiB0cmFuc2Zvcm0xO1xufVxuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIGdpdmVuIGNvb3JkaW5hdGUgd2l0aCB0aGUgZ2l2ZW4gdHJhbnNmb3JtIHJldHVybmluZyB0aGVcbiAqIHJlc3VsdGluZywgdHJhbnNmb3JtZWQgY29vcmRpbmF0ZS4gVGhlIGNvb3JkaW5hdGUgd2lsbCBiZSBtb2RpZmllZCBpbi1wbGFjZS5cbiAqXG4gKiBAcGFyYW0ge1RyYW5zZm9ybX0gdHJhbnNmb3JtIFRoZSB0cmFuc2Zvcm1hdGlvbi5cbiAqIEBwYXJhbSB7aW1wb3J0KFwiLi9jb29yZGluYXRlLmpzXCIpLkNvb3JkaW5hdGV8aW1wb3J0KFwiLi9waXhlbC5qc1wiKS5QaXhlbH0gY29vcmRpbmF0ZSBUaGUgY29vcmRpbmF0ZSB0byB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJuIHtpbXBvcnQoXCIuL2Nvb3JkaW5hdGUuanNcIikuQ29vcmRpbmF0ZXxpbXBvcnQoXCIuL3BpeGVsLmpzXCIpLlBpeGVsfSByZXR1cm4gY29vcmRpbmF0ZSBzbyB0aGF0IG9wZXJhdGlvbnMgY2FuIGJlXG4gKiAgICAgY2hhaW5lZCB0b2dldGhlci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5KHRyYW5zZm9ybSwgY29vcmRpbmF0ZSkge1xuICBjb25zdCB4ID0gY29vcmRpbmF0ZVswXTtcbiAgY29uc3QgeSA9IGNvb3JkaW5hdGVbMV07XG4gIGNvb3JkaW5hdGVbMF0gPSB0cmFuc2Zvcm1bMF0gKiB4ICsgdHJhbnNmb3JtWzJdICogeSArIHRyYW5zZm9ybVs0XTtcbiAgY29vcmRpbmF0ZVsxXSA9IHRyYW5zZm9ybVsxXSAqIHggKyB0cmFuc2Zvcm1bM10gKiB5ICsgdHJhbnNmb3JtWzVdO1xuICByZXR1cm4gY29vcmRpbmF0ZTtcbn1cblxuLyoqXG4gKiBBcHBsaWVzIHJvdGF0aW9uIHRvIHRoZSBnaXZlbiB0cmFuc2Zvcm0uXG4gKiBAcGFyYW0geyFUcmFuc2Zvcm19IHRyYW5zZm9ybSBUcmFuc2Zvcm0uXG4gKiBAcGFyYW0ge251bWJlcn0gYW5nbGUgQW5nbGUgaW4gcmFkaWFucy5cbiAqIEByZXR1cm4geyFUcmFuc2Zvcm19IFRoZSByb3RhdGVkIHRyYW5zZm9ybS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZSh0cmFuc2Zvcm0sIGFuZ2xlKSB7XG4gIGNvbnN0IGNvcyA9IE1hdGguY29zKGFuZ2xlKTtcbiAgY29uc3Qgc2luID0gTWF0aC5zaW4oYW5nbGUpO1xuICByZXR1cm4gbXVsdGlwbHkodHJhbnNmb3JtLCBzZXQodG1wXywgY29zLCBzaW4sIC1zaW4sIGNvcywgMCwgMCkpO1xufVxuXG4vKipcbiAqIEFwcGxpZXMgc2NhbGUgdG8gYSBnaXZlbiB0cmFuc2Zvcm0uXG4gKiBAcGFyYW0geyFUcmFuc2Zvcm19IHRyYW5zZm9ybSBUcmFuc2Zvcm0uXG4gKiBAcGFyYW0ge251bWJlcn0geCBTY2FsZSBmYWN0b3IgeC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB5IFNjYWxlIGZhY3RvciB5LlxuICogQHJldHVybiB7IVRyYW5zZm9ybX0gVGhlIHNjYWxlZCB0cmFuc2Zvcm0uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZSh0cmFuc2Zvcm0sIHgsIHkpIHtcbiAgcmV0dXJuIG11bHRpcGx5KHRyYW5zZm9ybSwgc2V0KHRtcF8sIHgsIDAsIDAsIHksIDAsIDApKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgc2NhbGUgdHJhbnNmb3JtLlxuICogQHBhcmFtIHshVHJhbnNmb3JtfSB0YXJnZXQgVHJhbnNmb3JtIHRvIG92ZXJ3cml0ZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSB4IFNjYWxlIGZhY3RvciB4LlxuICogQHBhcmFtIHtudW1iZXJ9IHkgU2NhbGUgZmFjdG9yIHkuXG4gKiBAcmV0dXJuIHshVHJhbnNmb3JtfSBUaGUgc2NhbGUgdHJhbnNmb3JtLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFrZVNjYWxlKHRhcmdldCwgeCwgeSkge1xuICByZXR1cm4gc2V0KHRhcmdldCwgeCwgMCwgMCwgeSwgMCwgMCk7XG59XG5cbi8qKlxuICogQXBwbGllcyB0cmFuc2xhdGlvbiB0byB0aGUgZ2l2ZW4gdHJhbnNmb3JtLlxuICogQHBhcmFtIHshVHJhbnNmb3JtfSB0cmFuc2Zvcm0gVHJhbnNmb3JtLlxuICogQHBhcmFtIHtudW1iZXJ9IGR4IFRyYW5zbGF0aW9uIHguXG4gKiBAcGFyYW0ge251bWJlcn0gZHkgVHJhbnNsYXRpb24geS5cbiAqIEByZXR1cm4geyFUcmFuc2Zvcm19IFRoZSB0cmFuc2xhdGVkIHRyYW5zZm9ybS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZSh0cmFuc2Zvcm0sIGR4LCBkeSkge1xuICByZXR1cm4gbXVsdGlwbHkodHJhbnNmb3JtLCBzZXQodG1wXywgMSwgMCwgMCwgMSwgZHgsIGR5KSk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNvbXBvc2l0ZSB0cmFuc2Zvcm0gZ2l2ZW4gYW4gaW5pdGlhbCB0cmFuc2xhdGlvbiwgc2NhbGUsIHJvdGF0aW9uLCBhbmRcbiAqIGZpbmFsIHRyYW5zbGF0aW9uIChpbiB0aGF0IG9yZGVyIG9ubHksIG5vdCBjb21tdXRhdGl2ZSkuXG4gKiBAcGFyYW0geyFUcmFuc2Zvcm19IHRyYW5zZm9ybSBUaGUgdHJhbnNmb3JtICh3aWxsIGJlIG1vZGlmaWVkIGluIHBsYWNlKS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBkeDEgSW5pdGlhbCB0cmFuc2xhdGlvbiB4LlxuICogQHBhcmFtIHtudW1iZXJ9IGR5MSBJbml0aWFsIHRyYW5zbGF0aW9uIHkuXG4gKiBAcGFyYW0ge251bWJlcn0gc3ggU2NhbGUgZmFjdG9yIHguXG4gKiBAcGFyYW0ge251bWJlcn0gc3kgU2NhbGUgZmFjdG9yIHkuXG4gKiBAcGFyYW0ge251bWJlcn0gYW5nbGUgUm90YXRpb24gKGluIGNvdW50ZXItY2xvY2t3aXNlIHJhZGlhbnMpLlxuICogQHBhcmFtIHtudW1iZXJ9IGR4MiBGaW5hbCB0cmFuc2xhdGlvbiB4LlxuICogQHBhcmFtIHtudW1iZXJ9IGR5MiBGaW5hbCB0cmFuc2xhdGlvbiB5LlxuICogQHJldHVybiB7IVRyYW5zZm9ybX0gVGhlIGNvbXBvc2l0ZSB0cmFuc2Zvcm0uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wb3NlKHRyYW5zZm9ybSwgZHgxLCBkeTEsIHN4LCBzeSwgYW5nbGUsIGR4MiwgZHkyKSB7XG4gIGNvbnN0IHNpbiA9IE1hdGguc2luKGFuZ2xlKTtcbiAgY29uc3QgY29zID0gTWF0aC5jb3MoYW5nbGUpO1xuICB0cmFuc2Zvcm1bMF0gPSBzeCAqIGNvcztcbiAgdHJhbnNmb3JtWzFdID0gc3kgKiBzaW47XG4gIHRyYW5zZm9ybVsyXSA9IC1zeCAqIHNpbjtcbiAgdHJhbnNmb3JtWzNdID0gc3kgKiBjb3M7XG4gIHRyYW5zZm9ybVs0XSA9IGR4MiAqIHN4ICogY29zIC0gZHkyICogc3ggKiBzaW4gKyBkeDE7XG4gIHRyYW5zZm9ybVs1XSA9IGR4MiAqIHN5ICogc2luICsgZHkyICogc3kgKiBjb3MgKyBkeTE7XG4gIHJldHVybiB0cmFuc2Zvcm07XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNvbXBvc2l0ZSB0cmFuc2Zvcm0gZ2l2ZW4gYW4gaW5pdGlhbCB0cmFuc2xhdGlvbiwgc2NhbGUsIHJvdGF0aW9uLCBhbmRcbiAqIGZpbmFsIHRyYW5zbGF0aW9uIChpbiB0aGF0IG9yZGVyIG9ubHksIG5vdCBjb21tdXRhdGl2ZSkuIFRoZSByZXN1bHRpbmcgdHJhbnNmb3JtXG4gKiBzdHJpbmcgY2FuIGJlIGFwcGxpZWQgYXMgYHRyYW5zZm9ybWAgcHJvcGVydHkgb2YgYW4gSFRNTEVsZW1lbnQncyBzdHlsZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBkeDEgSW5pdGlhbCB0cmFuc2xhdGlvbiB4LlxuICogQHBhcmFtIHtudW1iZXJ9IGR5MSBJbml0aWFsIHRyYW5zbGF0aW9uIHkuXG4gKiBAcGFyYW0ge251bWJlcn0gc3ggU2NhbGUgZmFjdG9yIHguXG4gKiBAcGFyYW0ge251bWJlcn0gc3kgU2NhbGUgZmFjdG9yIHkuXG4gKiBAcGFyYW0ge251bWJlcn0gYW5nbGUgUm90YXRpb24gKGluIGNvdW50ZXItY2xvY2t3aXNlIHJhZGlhbnMpLlxuICogQHBhcmFtIHtudW1iZXJ9IGR4MiBGaW5hbCB0cmFuc2xhdGlvbiB4LlxuICogQHBhcmFtIHtudW1iZXJ9IGR5MiBGaW5hbCB0cmFuc2xhdGlvbiB5LlxuICogQHJldHVybiB7c3RyaW5nfSBUaGUgY29tcG9zaXRlIGNzcyB0cmFuc2Zvcm0uXG4gKiBAYXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wb3NlQ3NzVHJhbnNmb3JtKGR4MSwgZHkxLCBzeCwgc3ksIGFuZ2xlLCBkeDIsIGR5Mikge1xuICByZXR1cm4gdG9TdHJpbmcoY29tcG9zZShjcmVhdGUoKSwgZHgxLCBkeTEsIHN4LCBzeSwgYW5nbGUsIGR4MiwgZHkyKSk7XG59XG5cbi8qKlxuICogSW52ZXJ0IHRoZSBnaXZlbiB0cmFuc2Zvcm0uXG4gKiBAcGFyYW0geyFUcmFuc2Zvcm19IHNvdXJjZSBUaGUgc291cmNlIHRyYW5zZm9ybSB0byBpbnZlcnQuXG4gKiBAcmV0dXJuIHshVHJhbnNmb3JtfSBUaGUgaW52ZXJ0ZWQgKHNvdXJjZSkgdHJhbnNmb3JtLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJ0KHNvdXJjZSkge1xuICByZXR1cm4gbWFrZUludmVyc2Uoc291cmNlLCBzb3VyY2UpO1xufVxuXG4vKipcbiAqIEludmVydCB0aGUgZ2l2ZW4gdHJhbnNmb3JtLlxuICogQHBhcmFtIHshVHJhbnNmb3JtfSB0YXJnZXQgVHJhbnNmb3JtIHRvIGJlIHNldCBhcyB0aGUgaW52ZXJzZSBvZlxuICogICAgIHRoZSBzb3VyY2UgdHJhbnNmb3JtLlxuICogQHBhcmFtIHshVHJhbnNmb3JtfSBzb3VyY2UgVGhlIHNvdXJjZSB0cmFuc2Zvcm0gdG8gaW52ZXJ0LlxuICogQHJldHVybiB7IVRyYW5zZm9ybX0gVGhlIGludmVydGVkICh0YXJnZXQpIHRyYW5zZm9ybS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1ha2VJbnZlcnNlKHRhcmdldCwgc291cmNlKSB7XG4gIGNvbnN0IGRldCA9IGRldGVybWluYW50KHNvdXJjZSk7XG4gIGFzc2VydChkZXQgIT09IDAsICdUcmFuc2Zvcm1hdGlvbiBtYXRyaXggY2Fubm90IGJlIGludmVydGVkJyk7XG5cbiAgY29uc3QgYSA9IHNvdXJjZVswXTtcbiAgY29uc3QgYiA9IHNvdXJjZVsxXTtcbiAgY29uc3QgYyA9IHNvdXJjZVsyXTtcbiAgY29uc3QgZCA9IHNvdXJjZVszXTtcbiAgY29uc3QgZSA9IHNvdXJjZVs0XTtcbiAgY29uc3QgZiA9IHNvdXJjZVs1XTtcblxuICB0YXJnZXRbMF0gPSBkIC8gZGV0O1xuICB0YXJnZXRbMV0gPSAtYiAvIGRldDtcbiAgdGFyZ2V0WzJdID0gLWMgLyBkZXQ7XG4gIHRhcmdldFszXSA9IGEgLyBkZXQ7XG4gIHRhcmdldFs0XSA9IChjICogZiAtIGQgKiBlKSAvIGRldDtcbiAgdGFyZ2V0WzVdID0gLShhICogZiAtIGIgKiBlKSAvIGRldDtcblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGRldGVybWluYW50IG9mIHRoZSBnaXZlbiBtYXRyaXguXG4gKiBAcGFyYW0geyFUcmFuc2Zvcm19IG1hdCBNYXRyaXguXG4gKiBAcmV0dXJuIHtudW1iZXJ9IERldGVybWluYW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGV0ZXJtaW5hbnQobWF0KSB7XG4gIHJldHVybiBtYXRbMF0gKiBtYXRbM10gLSBtYXRbMV0gKiBtYXRbMl07XG59XG5cbi8qKlxuICogQHR5cGUge0FycmF5fVxuICovXG5jb25zdCBtYXRyaXhQcmVjaXNpb24gPSBbMWU2LCAxZTYsIDFlNiwgMWU2LCAyLCAyXTtcblxuLyoqXG4gKiBBIHJvdW5kZWQgc3RyaW5nIHZlcnNpb24gb2YgdGhlIHRyYW5zZm9ybS4gIFRoaXMgY2FuIGJlIHVzZWRcbiAqIGZvciBDU1MgdHJhbnNmb3Jtcy5cbiAqIEBwYXJhbSB7IVRyYW5zZm9ybX0gbWF0IE1hdHJpeC5cbiAqIEByZXR1cm4ge3N0cmluZ30gVGhlIHRyYW5zZm9ybSBhcyBhIHN0cmluZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvU3RyaW5nKG1hdCkge1xuICBjb25zdCB0cmFuc2Zvcm1TdHJpbmcgPVxuICAgICdtYXRyaXgoJyArXG4gICAgbWF0XG4gICAgICAubWFwKFxuICAgICAgICAodmFsdWUsIGkpID0+XG4gICAgICAgICAgTWF0aC5yb3VuZCh2YWx1ZSAqIG1hdHJpeFByZWNpc2lvbltpXSkgLyBtYXRyaXhQcmVjaXNpb25baV0sXG4gICAgICApXG4gICAgICAuam9pbignLCAnKSArXG4gICAgJyknO1xuICByZXR1cm4gdHJhbnNmb3JtU3RyaW5nO1xufVxuIiwiLyoqXG4gKiBAbW9kdWxlIG9sL3V0aWxcbiAqL1xuXG4vKipcbiAqIEByZXR1cm4ge25ldmVyfSBBbnkgcmV0dXJuLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYWJzdHJhY3QoKSB7XG4gIHRocm93IG5ldyBFcnJvcignVW5pbXBsZW1lbnRlZCBhYnN0cmFjdCBtZXRob2QuJyk7XG59XG5cbi8qKlxuICogQ291bnRlciBmb3IgZ2V0VWlkLlxuICogQHR5cGUge251bWJlcn1cbiAqIEBwcml2YXRlXG4gKi9cbmxldCB1aWRDb3VudGVyXyA9IDA7XG5cbi8qKlxuICogR2V0cyBhIHVuaXF1ZSBJRCBmb3IgYW4gb2JqZWN0LiBUaGlzIG11dGF0ZXMgdGhlIG9iamVjdCBzbyB0aGF0IGZ1cnRoZXIgY2FsbHNcbiAqIHdpdGggdGhlIHNhbWUgb2JqZWN0IGFzIGEgcGFyYW1ldGVyIHJldHVybnMgdGhlIHNhbWUgdmFsdWUuIFVuaXF1ZSBJRHMgYXJlIGdlbmVyYXRlZFxuICogYXMgYSBzdHJpY3RseSBpbmNyZWFzaW5nIHNlcXVlbmNlLiBBZGFwdGVkIGZyb20gZ29vZy5nZXRVaWQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBUaGUgb2JqZWN0IHRvIGdldCB0aGUgdW5pcXVlIElEIGZvci5cbiAqIEByZXR1cm4ge3N0cmluZ30gVGhlIHVuaXF1ZSBJRCBmb3IgdGhlIG9iamVjdC5cbiAqIEBhcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFVpZChvYmopIHtcbiAgcmV0dXJuIG9iai5vbF91aWQgfHwgKG9iai5vbF91aWQgPSBTdHJpbmcoKyt1aWRDb3VudGVyXykpO1xufVxuXG4vKipcbiAqIE9wZW5MYXllcnMgdmVyc2lvbi5cbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBWRVJTSU9OID0gJzkuMS4wJztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS90ZXN0LXBsdWdpbi9cIjsiLCIvKipcclxuICogQXV0aG9yOiBBbXIgU2FtaXJcclxuICogXHJcbiAqIERlc2NyaXB0aW9uOiBcclxuICogIC0gVGhpcyBpbmRleCBmaWxlIGV4cG9ydHMgcGx1Z2luJ3MgY29tcG9uZW50cyBhbmQvb3IgcmVkdWNlcnMgYW5kL29yIGFjdGlvbnMuXHJcbiAqL1xyXG5cclxuaW1wb3J0IE1hcENsaWNrIGZyb20gJy4vY29tcG9uZW50cy9NYXBDbGljay9NYXBDbGljay5jb21wb25lbnQnO1xyXG5pbXBvcnQgTWFwQ2xpY2tSZXN1bHQgZnJvbSAnLi9jb21wb25lbnRzL01hcENsaWNrUmVzdWx0L01hcENsaWNrUmVzdWx0LmNvbXBvbmVudCc7XHJcbmltcG9ydCBkZWZhdWx0TG9jYWxpemF0aW9uIGZyb20gJy4vbWVzc2FnZXMnO1xyXG5pbXBvcnQgeyBMT0NBTElaQVRJT05fTkFNRVNQQUNFIH0gZnJvbSAnLi9jb25zdGFudHMvY29uc3RhbnRzJztcclxuXHJcbk1hcENsaWNrLlRpdGxlID0gTE9DQUxJWkFUSU9OX05BTUVTUEFDRSArIFwiOnRpdGxlXCI7XHJcbk1hcENsaWNrLkljb24gPSBMT0NBTElaQVRJT05fTkFNRVNQQUNFICsgXCI6aWNvblwiO1xyXG5cclxuY29uc3QgY29tcG9uZW50cyA9IHtcclxuICAgIFl1c3VmVHJpZ2dlcjogTWFwQ2xpY2ssXHJcbiAgICBZdXN1ZkNvbnRhaW5lcjogTWFwQ2xpY2tSZXN1bHRcclxufTtcclxuXHJcbmNvbnN0IGxvY2FsaXphdGlvbiA9IHtcclxuICAgIG5hbWVzcGFjZTogTE9DQUxJWkFUSU9OX05BTUVTUEFDRSxcclxuICAgIGRlZmF1bHRMb2NhbGl6YXRpb25cclxufVxyXG5cclxuZXhwb3J0IHsgY29tcG9uZW50cywgbG9jYWxpemF0aW9uIH07Il0sIm5hbWVzIjpbIlJlYWN0Iiwid2l0aExvY2FsaXplIiwiTE9DQUxJWkFUSU9OX05BTUVTUEFDRSIsImNvbXBvbmVudHMiLCJHcmlkQ29tcG9uZW50cyIsIkdyaWQiLCJNYXBDbGlja1Jlc3VsdCIsIl9SZWFjdCRDb21wb25lbnQiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY2FsbFN1cGVyIiwiYXJndW1lbnRzIiwiX2luaGVyaXRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJpbmZvIiwicHJvcHMiLCJwYXJzZWREYXRhIiwiZmVhdHVyZXMiLCJtYXAiLCJmZWF0dXJlIiwicHJvcGVydGllcyIsImNyZWF0ZUVsZW1lbnQiLCJzZXR0aW5ncyIsIm5hbWUiLCJzb3J0YWJsZSIsImZpbHRlcmFibGUiLCJwYWdlU2l6ZU9wdGlvbnMiLCJwYWdlU2l6ZSIsImVuYWJsZUxhcmdlVmlldyIsImNvbHVtbnMiLCJpZCIsInR5cGUiLCJkaXNwbGF5IiwiZGF0YSIsIkNvbXBvbmVudCIsImNvbm5lY3QiLCJzZWxlY3RvcnNSZWdpc3RyeSIsImFjdGlvbnNSZWdpc3RyeSIsImRyYXdTaGFwZSIsInZhbGlkYXRlVkwiLCJNYXBDbGlja0NvbXBvbmVudCIsIl90aGlzIiwiaGFuZGxlUmVzcCIsImJpbmQiLCJyZXMiLCJfcmVzJGRhdGEkIiwiX3RoaXMyIiwiSlNPTiIsInBhcnNlIiwicmVtb3ZlTWFwQ2xpY2tSZXN1bHQiLCJzaG93TWFwQ2xpY2tSZXN1bHQiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJpc0FjdGl2ZSIsIll1c3VmTGF5ZXIiLCJkYXRhU2V0dGluZ3MiLCJjb2RlIiwicHJvamVjdGlvbiIsImNsZWFyIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJvd25Qcm9wcyIsImdldFNlbGVjdG9yIiwicmVkdWNlcklkIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJvbkFkZCIsImdldEFjdGlvbkNyZWF0b3IiLCJJY29uIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsImUiLCJ0IiwiciIsIk9iamVjdCIsInByb3RvdHlwZSIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwiX3NsaWNlZFRvQXJyYXkiLCJhcnIiLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVSZXN0IiwibWluTGVuIiwiX2FycmF5TGlrZVRvQXJyYXkiLCJ0b1N0cmluZyIsIkFycmF5IiwiZnJvbSIsInRlc3QiLCJsZW4iLCJhcnIyIiwiaXNBcnJheSIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsInJlamVjdCIsIl9uZXh0IiwiX3Rocm93IiwiZXJyb3IiLCJfYXN5bmNUb0dlbmVyYXRvciIsImZuIiwic2VsZiIsImFyZ3MiLCJhcHBseSIsImVyciIsInVuZGVmaW5lZCIsImFwaVJlZ2lzdHJ5IiwiZ2VvbWV0cnlTZXJ2aWNlIiwiZ2V0QXJlYSIsImdldExlbmd0aCIsImNhbGxRdWVyeVNlcnZpY2UiLCJMaW5lU3RyaW5nIiwiVkwiLCJkcmF3aW5nIiwib3ZlcmxheUFycmF5Iiwib3B0aW9ucyIsInJlc2V0TGF5ZXIiLCJfcmVmIiwiX2NhbGxlZTIiLCJsYXllciIsImZ1bmMiLCJfeWllbGQkYXBpUmVnaXN0cnkkZ2UiLCJfeWllbGQkYXBpUmVnaXN0cnkkZ2UyIiwiVmVjdG9yTGF5ZXIiLCJfeWllbGQkYXBpUmVnaXN0cnkkZ2UzIiwiX3lpZWxkJGFwaVJlZ2lzdHJ5JGdlNCIsIkRyYXdpbmciLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJnZXRBcGlzIiwidmVjdG9yTGF5ZXIiLCJzZXRPbkRyYXdGaW5pc2giLCJfcmVmMiIsIl9jYWxsZWUiLCJnZW9tIiwiY29vcmRpbmF0ZXMiLCJjZW50ZXJQb2ludCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJnZXRHZW9tZXRyeSIsIm9sRmVhdHVyZSIsImdldENvb3JkaW5hdGVzIiwiY2VudGVyIiwiZ2V0RmVhdHVyZUdlb0pzb24iLCJhZGRGZWF0dXJlIiwiY2xlYXJPdmVybGF5Iiwib3ZlcmxheUFyZWEiLCJvdmVybGF5TGluZSIsIl94NCIsIl94IiwiX3gyIiwiX3gzIiwiZmVhdCIsImNhbGNBcmVhIiwiYXJlYSIsIl94NSIsIl94NiIsIl9vdmVybGF5TGluZSIsIl9jYWxsZWUzIiwic3RhcnRpbmdMaW5lIiwibmV4dExpbmUiLCJvcmlnTGluZSIsIm1pZGRsZSIsImxpbmUiLCJsZW5ndGhJbkttIiwiZWwiLCJfeWllbGQkYXBpUmVnaXN0cnkkZ2U1IiwiX3lpZWxkJGFwaVJlZ2lzdHJ5JGdlNiIsIk92ZXJsYXkiLCJfb3ZlcmxheUxpbmUyIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiZG9jdW1lbnQiLCJpbm5lclRleHQiLCJjb25jYXQiLCJ0b0ZpeGVkIiwic3R5bGUiLCJjb2xvciIsImVsZW1lbnQiLCJwb3NpdGlvbiIsIl94NyIsIl94OCIsIl94OSIsIl9vdmVybGF5QXJlYSIsIl9jYWxsZWU0IiwiYXJlYUluS21TcSIsImFyZWFFbCIsIl95aWVsZCRhcGlSZWdpc3RyeSRnZTciLCJfeWllbGQkYXBpUmVnaXN0cnkkZ2U4IiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ0IiwiaW5uZXJIVE1MIiwiZm9udFNpemUiLCJnZW9tZXRyeSIsInBvc2l0aW9uaW5nIiwib3ZlcmxheSIsIl90b0NvbnN1bWFibGVBcnJheSIsIl9hcnJheVdpdGhvdXRIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVTcHJlYWQiLCJpdGVyIiwic3RvcmUiLCJxdWVyeSIsInN5c3RlbVNob3dMb2FkaW5nIiwic3lzdGVtSGlkZUxvYWRpbmciLCJnZW5RdWVyeUJvZHkiLCJkYXRhU291cmNlIiwiZmlsdGVyIiwiY29uZGl0aW9uTGlzdCIsImdlb21ldHJ5RmllbGQiLCJmaWVsZE5hbWUiLCJzdHJpbmdpZnkiLCJzcGF0aWFsUmVsYXRpb24iLCJjcnMiLCJhY3Rpb24iLCJxdWVyeUZlYXR1cmVzIiwicmVzcG9uc2UiLCJfY29uc29sZSIsImNvbnNvbGUiLCJsb2ciLCJvb19vbyIsIm9vX2NtIiwiZXZhbCIsIl9sZW4iLCJfa2V5IiwiY29uc29sZUxvZyIsIm9vX3RyIiwiX2xlbjIiLCJfa2V5MiIsImNvbnNvbGVUcmFjZSIsIm9vX3RzIiwiY29uc29sZVRpbWUiLCJvb190ZSIsImNvbnNvbGVUaW1lRW5kIiwiTWFwQ2xpY2siLCJkZWZhdWx0TG9jYWxpemF0aW9uIiwiVGl0bGUiLCJZdXN1ZlRyaWdnZXIiLCJZdXN1ZkNvbnRhaW5lciIsImxvY2FsaXphdGlvbiIsIm5hbWVzcGFjZSJdLCJzb3VyY2VSb290IjoiIn0=