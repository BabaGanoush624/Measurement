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
/* harmony import */ var ol_geom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/geom.js */ "./node_modules/ol/geom/LineString.js");
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
          line = new ol_geom_js__WEBPACK_IMPORTED_MODULE_3__["default"](origLine);
          length = (0,ol_sphere_js__WEBPACK_IMPORTED_MODULE_2__.getLength)(line, {
            projection: code
          });
          lengthInKm = length / 1000;
          el = document.createElement("div");
          el.innerText = "".concat(lengthInKm.toFixed(1), " Km");
          el.style = "opacity: 1;" + " font-weight: bold;" + "position: relative; " + "background: rgba(0, 0, 0, 0.8);" + "border-radius: 4px;" + "color: whitesmoke;" + "padding: 4px 8px;" + "opacity: 0.7;" + "white-space: nowrap;" + "font-size: 12px; " + "background-color: rgba(0, 0, 0, 0.8);";
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
          areaEl.style = "opacity: 1;" + " font-weight: bold;" + "position: relative; " + "background: rgba(0, 0, 0, 0.8);" + "border-radius: 4px;" + "color: whitesmoke;" + "padding: 4px 8px;" + "opacity: 0.7;" + "white-space: nowrap;" + "font-size: 12px; " + "background-color: rgba(0, 0, 0, 0.8);";
          /* areaEl.style.color = "#610030";
          areaEl.style.fontSize = "0.8rem"; */
          _context4.next = 7;
          return _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_0__.apiRegistry.getApis(["Overlay"]);
        case 7:
          _yield$apiRegistry$ge7 = _context4.sent;
          _yield$apiRegistry$ge8 = _slicedToArray(_yield$apiRegistry$ge7, 1);
          Overlay = _yield$apiRegistry$ge8[0];
          overlayArea = new Overlay({
            element: areaEl,
            position: center.geometry.coordinates,
            positioning: "center-center"
          });
          overlayArray.push(overlayArea);
          _context4.next = 14;
          return _penta_b_ma_lib__WEBPACK_IMPORTED_MODULE_0__.actionsRegistry.dispatch("addOverlay", overlayArea);
        case 14:
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
    return (0, eval)("globalThis._console_ninja") || (0, eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';function _0x529c(){var _0x3751e3=['_isNegativeZero','[object\\x20Set]','elements','data','warn','node','nodeModules','_connectToHostNow','disabledLog','_addFunctionsNode','_Symbol','_hasSetOnItsPath','autoExpand','pop','autoExpandMaxDepth','923252GYgSsW','_getOwnPropertyDescriptor','constructor','onclose','Number','_dateToString','_setNodeExpandableState','level','1uupNAI','current','autoExpandPropertyCount','null','_undefined','date','astro','root_exp_id','_WebSocketClass','','match','_setNodeQueryPath','_type','stringify','HTMLAllCollection','default','_consoleNinjaAllowedToStart','unref','strLength','edge','[object\\x20BigInt]','2261qMknhZ','_ws','hits','resolveGetters','reload','50150','positiveInfinity','log','isExpressionToEvaluate','message','call','unshift','next.js','hasOwnProperty','forEach','console','port','__es'+'Module','1.0.0','Set','process','onerror','timeStamp','array','_allowedToConnectOnSend','\\x20server','negativeZero','performance','pathToFileURL','function','webpack','Map','_HTMLAllCollection','ws://','_sendErrorMessage','rootExpression','_isPrimitiveWrapperType','_blacklistedProperty','_inNextEdge','coverage','...','error','_addProperty','String','Error','serialize','_console_ninja','_setNodeId','_isMap','_treeNodePropertiesAfterFullValue','origin','onopen','_socket','toString','valueOf','global','_disposeWebsocket','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','gateway.docker.internal','catch','isArray','_regExpToString','_connected','_getOwnPropertySymbols','nan','_inBrowser','getOwnPropertyDescriptor','Symbol','_reconnectTimeout','_propertyName','WebSocket','bind','parent','getOwnPropertySymbols','_webSocketErrorDocsLink','_isPrimitiveType','4763870QUkLlN','map','bigint','_setNodeExpressionPath','type','_p_length','depth','1','symbol','negativeInfinity','_property','name','versions','_quotedRegExp','_additionalMetadata','expressionsToEvaluate','env','close','value','boolean','disabledTrace','sortProps','_attemptToReconnectShortly','%c\\x20Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20','funcName','slice','_connecting','NEXT_RUNTIME','_processTreeNodeResult','stackTraceLimit','location','_isUndefined','_objectToString','_treeNodePropertiesBeforeFullValue','_sortProps','_cleanNode','allStrLength','time','9CGteka','now','','totalStrLength','_setNodePermissions','defineProperty','replace','_allowedToSend','root_exp','number','706474gqdjJi','trace','test','_getOwnPropertyNames','eventReceivedCallback','readyState','278640nzsHid','hostname','string','undefined','noFunctions','count','length','index','_addLoadNode','_connectAttemptCount','_p_name','angular','[object\\x20Array]','remix','host','send','object','_maxConnectAttemptCount','_console_ninja_session','prototype','path','logger\\x20websocket\\x20error','58143EOJORT','getOwnPropertyNames','props','nuxt','92njsIxP','_setNodeLabel','then','_addObjectProperty','_hasMapOnItsPath','split','includes','url','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"JostarSan\",\"192.168.56.1\",\"192.168.1.10\"],'args','NEGATIVE_INFINITY','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','869465DlPHHu','_p_','toLowerCase','unknown','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','dockerizedApp','elapsed','reduceLimits','autoExpandPreviousObjects','4240RoClAj','autoExpandLimit','_WebSocket','substr','push','concat','_capIfString','join','enumerable','set','_isSet'];_0x529c=function(){return _0x3751e3;};return _0x529c();}var _0x4cf959=_0x5db4;function _0x5db4(_0x21a3d3,_0x54b201){var _0x529c5c=_0x529c();return _0x5db4=function(_0x5db48a,_0x3721fc){_0x5db48a=_0x5db48a-0x80;var _0x4880a5=_0x529c5c[_0x5db48a];return _0x4880a5;},_0x5db4(_0x21a3d3,_0x54b201);}(function(_0x520666,_0x1147e4){var _0x23eb01=_0x5db4,_0x30cdfb=_0x520666();while(!![]){try{var _0x3433bb=parseInt(_0x23eb01(0xff))/0x1*(-parseInt(_0x23eb01(0xa7))/0x2)+parseInt(_0x23eb01(0xc3))/0x3*(parseInt(_0x23eb01(0xc7))/0x4)+-parseInt(_0x23eb01(0xd4))/0x5+-parseInt(_0x23eb01(0xad))/0x6+parseInt(_0x23eb01(0x114))/0x7*(-parseInt(_0x23eb01(0xdd))/0x8)+-parseInt(_0x23eb01(0x9d))/0x9*(-parseInt(_0x23eb01(0x160))/0xa)+parseInt(_0x23eb01(0xf7))/0xb;if(_0x3433bb===_0x1147e4)break;else _0x30cdfb['push'](_0x30cdfb['shift']());}catch(_0x281cbc){_0x30cdfb['push'](_0x30cdfb['shift']());}}}(_0x529c,0x3fcca));var K=Object['create'],Q=Object[_0x4cf959(0xa2)],G=Object[_0x4cf959(0x156)],ee=Object[_0x4cf959(0xc4)],te=Object['getPrototypeOf'],ne=Object[_0x4cf959(0xc0)][_0x4cf959(0x121)],re=(_0x115def,_0x532c4a,_0xc77198,_0x2a6ce2)=>{var _0x467f91=_0x4cf959;if(_0x532c4a&&typeof _0x532c4a==_0x467f91(0xbd)||typeof _0x532c4a==_0x467f91(0x131)){for(let _0x33d6dc of ee(_0x532c4a))!ne[_0x467f91(0x11e)](_0x115def,_0x33d6dc)&&_0x33d6dc!==_0xc77198&&Q(_0x115def,_0x33d6dc,{'get':()=>_0x532c4a[_0x33d6dc],'enumerable':!(_0x2a6ce2=G(_0x532c4a,_0x33d6dc))||_0x2a6ce2[_0x467f91(0xe5)]});}return _0x115def;},V=(_0x2840ad,_0x25514c,_0x3e2e4a)=>(_0x3e2e4a=_0x2840ad!=null?K(te(_0x2840ad)):{},re(_0x25514c||!_0x2840ad||!_0x2840ad[_0x4cf959(0x125)]?Q(_0x3e2e4a,_0x4cf959(0x10e),{'value':_0x2840ad,'enumerable':!0x0}):_0x3e2e4a,_0x2840ad)),x=class{constructor(_0x35a1b1,_0x1fccfe,_0x5f1d3b,_0xa1568b,_0x1081a3,_0x3e8d2f){var _0xe4f172=_0x4cf959;this['global']=_0x35a1b1,this['host']=_0x1fccfe,this[_0xe4f172(0x124)]=_0x5f1d3b,this['nodeModules']=_0xa1568b,this['dockerizedApp']=_0x1081a3,this[_0xe4f172(0xab)]=_0x3e8d2f,this[_0xe4f172(0xa4)]=!0x0,this[_0xe4f172(0x12c)]=!0x0,this['_connected']=!0x1,this['_connecting']=!0x1,this[_0xe4f172(0x13a)]=_0x35a1b1['process']?.[_0xe4f172(0x87)]?.[_0xe4f172(0x92)]===_0xe4f172(0x112),this[_0xe4f172(0x155)]=!this['global'][_0xe4f172(0x128)]?.['versions']?.[_0xe4f172(0xed)]&&!this[_0xe4f172(0x13a)],this[_0xe4f172(0x107)]=null,this[_0xe4f172(0xb6)]=0x0,this[_0xe4f172(0xbe)]=0x14,this[_0xe4f172(0x15e)]='https://tinyurl.com/37x8b79t',this[_0xe4f172(0x136)]=(this[_0xe4f172(0x155)]?_0xe4f172(0xd8):_0xe4f172(0xcf))+this[_0xe4f172(0x15e)];}async['getWebSocketClass'](){var _0x59ffac=_0x4cf959;if(this[_0x59ffac(0x107)])return this[_0x59ffac(0x107)];let _0x5a7ccf;if(this['_inBrowser']||this[_0x59ffac(0x13a)])_0x5a7ccf=this[_0x59ffac(0x14b)][_0x59ffac(0x15a)];else{if(this[_0x59ffac(0x14b)]['process']?.[_0x59ffac(0xdf)])_0x5a7ccf=this['global'][_0x59ffac(0x128)]?.['_WebSocket'];else try{let _0x4d748c=await import(_0x59ffac(0xc1));_0x5a7ccf=(await import((await import(_0x59ffac(0xce)))[_0x59ffac(0x130)](_0x4d748c[_0x59ffac(0xe4)](this[_0x59ffac(0xee)],'ws/index.js'))[_0x59ffac(0x149)]()))[_0x59ffac(0x10e)];}catch{try{_0x5a7ccf=require(require(_0x59ffac(0xc1))['join'](this[_0x59ffac(0xee)],'ws'));}catch{throw new Error('failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket');}}}return this[_0x59ffac(0x107)]=_0x5a7ccf,_0x5a7ccf;}[_0x4cf959(0xef)](){var _0x412da7=_0x4cf959;this[_0x412da7(0x91)]||this[_0x412da7(0x152)]||this[_0x412da7(0xb6)]>=this[_0x412da7(0xbe)]||(this['_allowedToConnectOnSend']=!0x1,this[_0x412da7(0x91)]=!0x0,this[_0x412da7(0xb6)]++,this[_0x412da7(0x115)]=new Promise((_0x81ac52,_0x4de734)=>{var _0x108536=_0x412da7;this['getWebSocketClass']()[_0x108536(0xc9)](_0x5470c0=>{var _0x5e632f=_0x108536;let _0x41f14b=new _0x5470c0(_0x5e632f(0x135)+(!this[_0x5e632f(0x155)]&&this[_0x5e632f(0xd9)]?_0x5e632f(0x14e):this[_0x5e632f(0xbb)])+':'+this[_0x5e632f(0x124)]);_0x41f14b[_0x5e632f(0x129)]=()=>{var _0x3cefb5=_0x5e632f;this[_0x3cefb5(0xa4)]=!0x1,this[_0x3cefb5(0x14c)](_0x41f14b),this['_attemptToReconnectShortly'](),_0x4de734(new Error(_0x3cefb5(0xc2)));},_0x41f14b[_0x5e632f(0x147)]=()=>{var _0x4d9a4a=_0x5e632f;this[_0x4d9a4a(0x155)]||_0x41f14b[_0x4d9a4a(0x148)]&&_0x41f14b[_0x4d9a4a(0x148)][_0x4d9a4a(0x110)]&&_0x41f14b[_0x4d9a4a(0x148)][_0x4d9a4a(0x110)](),_0x81ac52(_0x41f14b);},_0x41f14b[_0x5e632f(0xfa)]=()=>{var _0x5de1f8=_0x5e632f;this['_allowedToConnectOnSend']=!0x0,this['_disposeWebsocket'](_0x41f14b),this[_0x5de1f8(0x8d)]();},_0x41f14b['onmessage']=_0x5cf3f4=>{var _0x518521=_0x5e632f;try{if(!_0x5cf3f4?.[_0x518521(0xeb)]||!this[_0x518521(0xab)])return;let _0x3bc418=JSON['parse'](_0x5cf3f4['data']);this['eventReceivedCallback'](_0x3bc418['method'],_0x3bc418['args'],this[_0x518521(0x14b)],this[_0x518521(0x155)]);}catch{}};})['then'](_0x44e37e=>(this[_0x108536(0x152)]=!0x0,this['_connecting']=!0x1,this[_0x108536(0x12c)]=!0x1,this[_0x108536(0xa4)]=!0x0,this[_0x108536(0xb6)]=0x0,_0x44e37e))[_0x108536(0x14f)](_0x4341a5=>(this['_connected']=!0x1,this[_0x108536(0x91)]=!0x1,console[_0x108536(0xec)](_0x108536(0x14d)+this[_0x108536(0x15e)]),_0x4de734(new Error('failed\\x20to\\x20connect\\x20to\\x20host:\\x20'+(_0x4341a5&&_0x4341a5['message'])))));}));}[_0x4cf959(0x14c)](_0x4ad725){var _0x417929=_0x4cf959;this[_0x417929(0x152)]=!0x1,this[_0x417929(0x91)]=!0x1;try{_0x4ad725['onclose']=null,_0x4ad725['onerror']=null,_0x4ad725[_0x417929(0x147)]=null;}catch{}try{_0x4ad725[_0x417929(0xac)]<0x2&&_0x4ad725[_0x417929(0x88)]();}catch{}}['_attemptToReconnectShortly'](){var _0x1f4459=_0x4cf959;clearTimeout(this[_0x1f4459(0x158)]),!(this[_0x1f4459(0xb6)]>=this[_0x1f4459(0xbe)])&&(this[_0x1f4459(0x158)]=setTimeout(()=>{var _0xffe835=_0x1f4459;this['_connected']||this[_0xffe835(0x91)]||(this['_connectToHostNow'](),this[_0xffe835(0x115)]?.['catch'](()=>this[_0xffe835(0x8d)]()));},0x1f4),this[_0x1f4459(0x158)][_0x1f4459(0x110)]&&this[_0x1f4459(0x158)][_0x1f4459(0x110)]());}async[_0x4cf959(0xbc)](_0x34c975){var _0x2a1e57=_0x4cf959;try{if(!this['_allowedToSend'])return;this[_0x2a1e57(0x12c)]&&this[_0x2a1e57(0xef)](),(await this[_0x2a1e57(0x115)])[_0x2a1e57(0xbc)](JSON[_0x2a1e57(0x10c)](_0x34c975));}catch(_0x4fe125){console['warn'](this[_0x2a1e57(0x136)]+':\\x20'+(_0x4fe125&&_0x4fe125[_0x2a1e57(0x11d)])),this[_0x2a1e57(0xa4)]=!0x1,this[_0x2a1e57(0x8d)]();}}};function q(_0x5838af,_0x324af0,_0x5b91a1,_0x488ecf,_0x4906df,_0x1cc356,_0x38ae65,_0x564df1=ie){var _0x17eefa=_0x4cf959;let _0x3b3794=_0x5b91a1[_0x17eefa(0xcc)](',')[_0x17eefa(0x161)](_0x2578c1=>{var _0x5d1bef=_0x17eefa;try{if(!_0x5838af['_console_ninja_session']){let _0x3a561d=_0x5838af['process']?.[_0x5d1bef(0x83)]?.[_0x5d1bef(0xed)]||_0x5838af[_0x5d1bef(0x128)]?.['env']?.[_0x5d1bef(0x92)]===_0x5d1bef(0x112);(_0x4906df===_0x5d1bef(0x120)||_0x4906df===_0x5d1bef(0xba)||_0x4906df===_0x5d1bef(0x105)||_0x4906df===_0x5d1bef(0xb8))&&(_0x4906df+=_0x3a561d?_0x5d1bef(0x12d):'\\x20browser'),_0x5838af[_0x5d1bef(0xbf)]={'id':+new Date(),'tool':_0x4906df},_0x38ae65&&_0x4906df&&!_0x3a561d&&console['log'](_0x5d1bef(0x8e)+(_0x4906df['charAt'](0x0)['toUpperCase']()+_0x4906df[_0x5d1bef(0xe0)](0x1))+',','background:\\x20rgb(30,30,30);\\x20color:\\x20rgb(255,213,92)','see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.');}let _0x3c6d53=new x(_0x5838af,_0x324af0,_0x2578c1,_0x488ecf,_0x1cc356,_0x564df1);return _0x3c6d53['send'][_0x5d1bef(0x15b)](_0x3c6d53);}catch(_0x1aa9de){return console[_0x5d1bef(0xec)](_0x5d1bef(0xd3),_0x1aa9de&&_0x1aa9de[_0x5d1bef(0x11d)]),()=>{};}});return _0x2c1dbd=>_0x3b3794[_0x17eefa(0x122)](_0xb40c02=>_0xb40c02(_0x2c1dbd));}function ie(_0xd462e5,_0x1a1f72,_0x17e005,_0x1902c7){var _0x4f541d=_0x4cf959;_0x1902c7&&_0xd462e5===_0x4f541d(0x118)&&_0x17e005['location'][_0x4f541d(0x118)]();}function b(_0x2c83cb){var _0x5b655f=_0x4cf959;let _0x43cc27=function(_0x3a668f,_0x2e0260){return _0x2e0260-_0x3a668f;},_0x53bba0;if(_0x2c83cb[_0x5b655f(0x12f)])_0x53bba0=function(){var _0x24c1f2=_0x5b655f;return _0x2c83cb[_0x24c1f2(0x12f)][_0x24c1f2(0x9e)]();};else{if(_0x2c83cb[_0x5b655f(0x128)]&&_0x2c83cb['process']['hrtime']&&_0x2c83cb[_0x5b655f(0x128)]?.[_0x5b655f(0x87)]?.[_0x5b655f(0x92)]!=='edge')_0x53bba0=function(){var _0x5d296d=_0x5b655f;return _0x2c83cb[_0x5d296d(0x128)]['hrtime']();},_0x43cc27=function(_0x5dea5d,_0x434669){return 0x3e8*(_0x434669[0x0]-_0x5dea5d[0x0])+(_0x434669[0x1]-_0x5dea5d[0x1])/0xf4240;};else try{let {performance:_0x1a26e5}=require('perf_hooks');_0x53bba0=function(){return _0x1a26e5['now']();};}catch{_0x53bba0=function(){return+new Date();};}}return{'elapsed':_0x43cc27,'timeStamp':_0x53bba0,'now':()=>Date[_0x5b655f(0x9e)]()};}function X(_0x2fc7b0,_0x15f6b1,_0x2b90bd){var _0x1ebc6c=_0x4cf959;if(_0x2fc7b0[_0x1ebc6c(0x10f)]!==void 0x0)return _0x2fc7b0[_0x1ebc6c(0x10f)];let _0x4e081c=_0x2fc7b0[_0x1ebc6c(0x128)]?.['versions']?.[_0x1ebc6c(0xed)]||_0x2fc7b0[_0x1ebc6c(0x128)]?.[_0x1ebc6c(0x87)]?.[_0x1ebc6c(0x92)]===_0x1ebc6c(0x112);return _0x4e081c&&_0x2b90bd===_0x1ebc6c(0xc6)?_0x2fc7b0['_consoleNinjaAllowedToStart']=!0x1:_0x2fc7b0[_0x1ebc6c(0x10f)]=_0x4e081c||!_0x15f6b1||_0x2fc7b0['location']?.[_0x1ebc6c(0xae)]&&_0x15f6b1[_0x1ebc6c(0xcd)](_0x2fc7b0[_0x1ebc6c(0x95)][_0x1ebc6c(0xae)]),_0x2fc7b0[_0x1ebc6c(0x10f)];}function H(_0x4c2cad,_0x5963b0,_0x5d4da7,_0x5b5693){var _0x16cdf0=_0x4cf959;_0x4c2cad=_0x4c2cad,_0x5963b0=_0x5963b0,_0x5d4da7=_0x5d4da7,_0x5b5693=_0x5b5693;let _0x23024f=b(_0x4c2cad),_0x1bfbd7=_0x23024f['elapsed'],_0x1f6faa=_0x23024f[_0x16cdf0(0x12a)];class _0x370987{constructor(){var _0x606e41=_0x16cdf0;this['_keyStrRegExp']=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this['_numberRegExp']=/^(0|[1-9][0-9]*)$/,this[_0x606e41(0x84)]=/'([^\\\\']|\\\\')*'/,this[_0x606e41(0x103)]=_0x4c2cad['undefined'],this[_0x606e41(0x134)]=_0x4c2cad[_0x606e41(0x10d)],this[_0x606e41(0xf8)]=Object[_0x606e41(0x156)],this[_0x606e41(0xaa)]=Object[_0x606e41(0xc4)],this[_0x606e41(0xf2)]=_0x4c2cad[_0x606e41(0x157)],this[_0x606e41(0x151)]=RegExp[_0x606e41(0xc0)][_0x606e41(0x149)],this['_dateToString']=Date[_0x606e41(0xc0)][_0x606e41(0x149)];}[_0x16cdf0(0x141)](_0x30cdbf,_0x472c40,_0x50de8c,_0x340b6c){var _0x21b5b0=_0x16cdf0,_0x160506=this,_0x34bb00=_0x50de8c[_0x21b5b0(0xf4)];function _0x2fe4f8(_0x3a4f83,_0x4d9c4b,_0x53063f){var _0xe3f1eb=_0x21b5b0;_0x4d9c4b[_0xe3f1eb(0x164)]='unknown',_0x4d9c4b[_0xe3f1eb(0x13d)]=_0x3a4f83['message'],_0x4098d9=_0x53063f[_0xe3f1eb(0xed)]['current'],_0x53063f['node'][_0xe3f1eb(0x100)]=_0x4d9c4b,_0x160506[_0xe3f1eb(0x98)](_0x4d9c4b,_0x53063f);}try{_0x50de8c[_0x21b5b0(0xfe)]++,_0x50de8c[_0x21b5b0(0xf4)]&&_0x50de8c[_0x21b5b0(0xdc)][_0x21b5b0(0xe1)](_0x472c40);var _0xd67285,_0x477b1b,_0x35b685,_0x421303,_0x3cfbed=[],_0x2dd685=[],_0x41330d,_0x369395=this[_0x21b5b0(0x10b)](_0x472c40),_0x31f427=_0x369395===_0x21b5b0(0x12b),_0x26aa54=!0x1,_0x541664=_0x369395===_0x21b5b0(0x131),_0x5b0b89=this[_0x21b5b0(0x15f)](_0x369395),_0xc14d03=this[_0x21b5b0(0x138)](_0x369395),_0x5f3a55=_0x5b0b89||_0xc14d03,_0x3faea5={},_0x5dec58=0x0,_0x3b084a=!0x1,_0x4098d9,_0x1bd102=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x50de8c[_0x21b5b0(0x166)]){if(_0x31f427){if(_0x477b1b=_0x472c40[_0x21b5b0(0xb3)],_0x477b1b>_0x50de8c[_0x21b5b0(0xea)]){for(_0x35b685=0x0,_0x421303=_0x50de8c[_0x21b5b0(0xea)],_0xd67285=_0x35b685;_0xd67285<_0x421303;_0xd67285++)_0x2dd685[_0x21b5b0(0xe1)](_0x160506[_0x21b5b0(0x13e)](_0x3cfbed,_0x472c40,_0x369395,_0xd67285,_0x50de8c));_0x30cdbf['cappedElements']=!0x0;}else{for(_0x35b685=0x0,_0x421303=_0x477b1b,_0xd67285=_0x35b685;_0xd67285<_0x421303;_0xd67285++)_0x2dd685[_0x21b5b0(0xe1)](_0x160506[_0x21b5b0(0x13e)](_0x3cfbed,_0x472c40,_0x369395,_0xd67285,_0x50de8c));}_0x50de8c[_0x21b5b0(0x101)]+=_0x2dd685[_0x21b5b0(0xb3)];}if(!(_0x369395==='null'||_0x369395===_0x21b5b0(0xb0))&&!_0x5b0b89&&_0x369395!==_0x21b5b0(0x13f)&&_0x369395!=='Buffer'&&_0x369395!==_0x21b5b0(0x162)){var _0x5dd60a=_0x340b6c[_0x21b5b0(0xc5)]||_0x50de8c[_0x21b5b0(0xc5)];if(this[_0x21b5b0(0xe7)](_0x472c40)?(_0xd67285=0x0,_0x472c40[_0x21b5b0(0x122)](function(_0x14ae96){var _0x12b28b=_0x21b5b0;if(_0x5dec58++,_0x50de8c[_0x12b28b(0x101)]++,_0x5dec58>_0x5dd60a){_0x3b084a=!0x0;return;}if(!_0x50de8c[_0x12b28b(0x11c)]&&_0x50de8c[_0x12b28b(0xf4)]&&_0x50de8c[_0x12b28b(0x101)]>_0x50de8c[_0x12b28b(0xde)]){_0x3b084a=!0x0;return;}_0x2dd685[_0x12b28b(0xe1)](_0x160506[_0x12b28b(0x13e)](_0x3cfbed,_0x472c40,_0x12b28b(0x127),_0xd67285++,_0x50de8c,function(_0x5b67f7){return function(){return _0x5b67f7;};}(_0x14ae96)));})):this[_0x21b5b0(0x144)](_0x472c40)&&_0x472c40[_0x21b5b0(0x122)](function(_0x4048d9,_0x2a8381){var _0xb0b6b0=_0x21b5b0;if(_0x5dec58++,_0x50de8c['autoExpandPropertyCount']++,_0x5dec58>_0x5dd60a){_0x3b084a=!0x0;return;}if(!_0x50de8c[_0xb0b6b0(0x11c)]&&_0x50de8c[_0xb0b6b0(0xf4)]&&_0x50de8c[_0xb0b6b0(0x101)]>_0x50de8c[_0xb0b6b0(0xde)]){_0x3b084a=!0x0;return;}var _0x14c4cf=_0x2a8381['toString']();_0x14c4cf[_0xb0b6b0(0xb3)]>0x64&&(_0x14c4cf=_0x14c4cf[_0xb0b6b0(0x90)](0x0,0x64)+_0xb0b6b0(0x13c)),_0x2dd685['push'](_0x160506['_addProperty'](_0x3cfbed,_0x472c40,'Map',_0x14c4cf,_0x50de8c,function(_0x4bff58){return function(){return _0x4bff58;};}(_0x4048d9)));}),!_0x26aa54){try{for(_0x41330d in _0x472c40)if(!(_0x31f427&&_0x1bd102[_0x21b5b0(0xa9)](_0x41330d))&&!this[_0x21b5b0(0x139)](_0x472c40,_0x41330d,_0x50de8c)){if(_0x5dec58++,_0x50de8c[_0x21b5b0(0x101)]++,_0x5dec58>_0x5dd60a){_0x3b084a=!0x0;break;}if(!_0x50de8c[_0x21b5b0(0x11c)]&&_0x50de8c[_0x21b5b0(0xf4)]&&_0x50de8c['autoExpandPropertyCount']>_0x50de8c[_0x21b5b0(0xde)]){_0x3b084a=!0x0;break;}_0x2dd685['push'](_0x160506[_0x21b5b0(0xca)](_0x3cfbed,_0x3faea5,_0x472c40,_0x369395,_0x41330d,_0x50de8c));}}catch{}if(_0x3faea5[_0x21b5b0(0x165)]=!0x0,_0x541664&&(_0x3faea5[_0x21b5b0(0xb7)]=!0x0),!_0x3b084a){var _0xd854f1=[][_0x21b5b0(0xe2)](this[_0x21b5b0(0xaa)](_0x472c40))[_0x21b5b0(0xe2)](this[_0x21b5b0(0x153)](_0x472c40));for(_0xd67285=0x0,_0x477b1b=_0xd854f1['length'];_0xd67285<_0x477b1b;_0xd67285++)if(_0x41330d=_0xd854f1[_0xd67285],!(_0x31f427&&_0x1bd102[_0x21b5b0(0xa9)](_0x41330d[_0x21b5b0(0x149)]()))&&!this[_0x21b5b0(0x139)](_0x472c40,_0x41330d,_0x50de8c)&&!_0x3faea5['_p_'+_0x41330d[_0x21b5b0(0x149)]()]){if(_0x5dec58++,_0x50de8c[_0x21b5b0(0x101)]++,_0x5dec58>_0x5dd60a){_0x3b084a=!0x0;break;}if(!_0x50de8c[_0x21b5b0(0x11c)]&&_0x50de8c[_0x21b5b0(0xf4)]&&_0x50de8c[_0x21b5b0(0x101)]>_0x50de8c['autoExpandLimit']){_0x3b084a=!0x0;break;}_0x2dd685[_0x21b5b0(0xe1)](_0x160506[_0x21b5b0(0xca)](_0x3cfbed,_0x3faea5,_0x472c40,_0x369395,_0x41330d,_0x50de8c));}}}}}if(_0x30cdbf['type']=_0x369395,_0x5f3a55?(_0x30cdbf[_0x21b5b0(0x89)]=_0x472c40[_0x21b5b0(0x14a)](),this[_0x21b5b0(0xe3)](_0x369395,_0x30cdbf,_0x50de8c,_0x340b6c)):_0x369395===_0x21b5b0(0x104)?_0x30cdbf[_0x21b5b0(0x89)]=this[_0x21b5b0(0xfc)]['call'](_0x472c40):_0x369395===_0x21b5b0(0x162)?_0x30cdbf[_0x21b5b0(0x89)]=_0x472c40[_0x21b5b0(0x149)]():_0x369395==='RegExp'?_0x30cdbf[_0x21b5b0(0x89)]=this['_regExpToString'][_0x21b5b0(0x11e)](_0x472c40):_0x369395===_0x21b5b0(0x168)&&this[_0x21b5b0(0xf2)]?_0x30cdbf[_0x21b5b0(0x89)]=this[_0x21b5b0(0xf2)][_0x21b5b0(0xc0)][_0x21b5b0(0x149)][_0x21b5b0(0x11e)](_0x472c40):!_0x50de8c[_0x21b5b0(0x166)]&&!(_0x369395===_0x21b5b0(0x102)||_0x369395===_0x21b5b0(0xb0))&&(delete _0x30cdbf[_0x21b5b0(0x89)],_0x30cdbf['capped']=!0x0),_0x3b084a&&(_0x30cdbf['cappedProps']=!0x0),_0x4098d9=_0x50de8c[_0x21b5b0(0xed)][_0x21b5b0(0x100)],_0x50de8c['node'][_0x21b5b0(0x100)]=_0x30cdbf,this[_0x21b5b0(0x98)](_0x30cdbf,_0x50de8c),_0x2dd685[_0x21b5b0(0xb3)]){for(_0xd67285=0x0,_0x477b1b=_0x2dd685[_0x21b5b0(0xb3)];_0xd67285<_0x477b1b;_0xd67285++)_0x2dd685[_0xd67285](_0xd67285);}_0x3cfbed[_0x21b5b0(0xb3)]&&(_0x30cdbf[_0x21b5b0(0xc5)]=_0x3cfbed);}catch(_0x390bc4){_0x2fe4f8(_0x390bc4,_0x30cdbf,_0x50de8c);}return this[_0x21b5b0(0x85)](_0x472c40,_0x30cdbf),this[_0x21b5b0(0x145)](_0x30cdbf,_0x50de8c),_0x50de8c[_0x21b5b0(0xed)][_0x21b5b0(0x100)]=_0x4098d9,_0x50de8c['level']--,_0x50de8c['autoExpand']=_0x34bb00,_0x50de8c[_0x21b5b0(0xf4)]&&_0x50de8c[_0x21b5b0(0xdc)][_0x21b5b0(0xf5)](),_0x30cdbf;}['_getOwnPropertySymbols'](_0x357bb5){var _0x4437f4=_0x16cdf0;return Object['getOwnPropertySymbols']?Object[_0x4437f4(0x15d)](_0x357bb5):[];}[_0x16cdf0(0xe7)](_0x387400){var _0x38daec=_0x16cdf0;return!!(_0x387400&&_0x4c2cad[_0x38daec(0x127)]&&this['_objectToString'](_0x387400)===_0x38daec(0xe9)&&_0x387400[_0x38daec(0x122)]);}[_0x16cdf0(0x139)](_0x405058,_0x58abf5,_0x28302f){var _0x4f53e7=_0x16cdf0;return _0x28302f['noFunctions']?typeof _0x405058[_0x58abf5]==_0x4f53e7(0x131):!0x1;}['_type'](_0x24d4bd){var _0x5509e9=_0x16cdf0,_0x5593bd='';return _0x5593bd=typeof _0x24d4bd,_0x5593bd===_0x5509e9(0xbd)?this[_0x5509e9(0x97)](_0x24d4bd)==='[object\\x20Array]'?_0x5593bd=_0x5509e9(0x12b):this['_objectToString'](_0x24d4bd)==='[object\\x20Date]'?_0x5593bd=_0x5509e9(0x104):this['_objectToString'](_0x24d4bd)===_0x5509e9(0x113)?_0x5593bd=_0x5509e9(0x162):_0x24d4bd===null?_0x5593bd=_0x5509e9(0x102):_0x24d4bd[_0x5509e9(0xf9)]&&(_0x5593bd=_0x24d4bd[_0x5509e9(0xf9)]['name']||_0x5593bd):_0x5593bd===_0x5509e9(0xb0)&&this['_HTMLAllCollection']&&_0x24d4bd instanceof this[_0x5509e9(0x134)]&&(_0x5593bd='HTMLAllCollection'),_0x5593bd;}[_0x16cdf0(0x97)](_0x253bf3){var _0x2d909=_0x16cdf0;return Object['prototype'][_0x2d909(0x149)][_0x2d909(0x11e)](_0x253bf3);}['_isPrimitiveType'](_0x16ac80){var _0x44dd91=_0x16cdf0;return _0x16ac80===_0x44dd91(0x8a)||_0x16ac80===_0x44dd91(0xaf)||_0x16ac80==='number';}[_0x16cdf0(0x138)](_0x36ef8e){var _0x13f780=_0x16cdf0;return _0x36ef8e==='Boolean'||_0x36ef8e===_0x13f780(0x13f)||_0x36ef8e===_0x13f780(0xfb);}[_0x16cdf0(0x13e)](_0x1d90e5,_0x2c3b5b,_0x26a7f8,_0x436c32,_0x543542,_0x516e45){var _0x28fd1c=this;return function(_0x4aef0e){var _0x57b948=_0x5db4,_0x4868f4=_0x543542[_0x57b948(0xed)]['current'],_0x24f364=_0x543542[_0x57b948(0xed)][_0x57b948(0xb4)],_0x3e2a17=_0x543542['node'][_0x57b948(0x15c)];_0x543542['node']['parent']=_0x4868f4,_0x543542[_0x57b948(0xed)][_0x57b948(0xb4)]=typeof _0x436c32==_0x57b948(0xa6)?_0x436c32:_0x4aef0e,_0x1d90e5[_0x57b948(0xe1)](_0x28fd1c[_0x57b948(0x81)](_0x2c3b5b,_0x26a7f8,_0x436c32,_0x543542,_0x516e45)),_0x543542[_0x57b948(0xed)]['parent']=_0x3e2a17,_0x543542['node'][_0x57b948(0xb4)]=_0x24f364;};}[_0x16cdf0(0xca)](_0x479bed,_0x31401a,_0xb4d10f,_0x2011cd,_0x486f61,_0x221cf1,_0x45ef77){var _0xd4ebf2=_0x16cdf0,_0x1b2a37=this;return _0x31401a[_0xd4ebf2(0xd5)+_0x486f61['toString']()]=!0x0,function(_0x3d8f50){var _0x2df704=_0xd4ebf2,_0x22e26c=_0x221cf1['node'][_0x2df704(0x100)],_0x51252d=_0x221cf1['node'][_0x2df704(0xb4)],_0x3e9abc=_0x221cf1[_0x2df704(0xed)]['parent'];_0x221cf1['node'][_0x2df704(0x15c)]=_0x22e26c,_0x221cf1['node'][_0x2df704(0xb4)]=_0x3d8f50,_0x479bed['push'](_0x1b2a37[_0x2df704(0x81)](_0xb4d10f,_0x2011cd,_0x486f61,_0x221cf1,_0x45ef77)),_0x221cf1[_0x2df704(0xed)]['parent']=_0x3e9abc,_0x221cf1[_0x2df704(0xed)][_0x2df704(0xb4)]=_0x51252d;};}[_0x16cdf0(0x81)](_0x39295e,_0x3e27ee,_0x50155e,_0x3affbd,_0x1217d6){var _0x5824f4=_0x16cdf0,_0x4b5214=this;_0x1217d6||(_0x1217d6=function(_0xd0c2d5,_0x1fec0c){return _0xd0c2d5[_0x1fec0c];});var _0x37c4ca=_0x50155e[_0x5824f4(0x149)](),_0x180cc2=_0x3affbd['expressionsToEvaluate']||{},_0x5769bf=_0x3affbd['depth'],_0xc82d5b=_0x3affbd['isExpressionToEvaluate'];try{var _0x509319=this['_isMap'](_0x39295e),_0x3686a3=_0x37c4ca;_0x509319&&_0x3686a3[0x0]==='\\x27'&&(_0x3686a3=_0x3686a3[_0x5824f4(0xe0)](0x1,_0x3686a3['length']-0x2));var _0xb5fe17=_0x3affbd[_0x5824f4(0x86)]=_0x180cc2['_p_'+_0x3686a3];_0xb5fe17&&(_0x3affbd[_0x5824f4(0x166)]=_0x3affbd['depth']+0x1),_0x3affbd[_0x5824f4(0x11c)]=!!_0xb5fe17;var _0x1e8cfa=typeof _0x50155e==_0x5824f4(0x168),_0x5a71fe={'name':_0x1e8cfa||_0x509319?_0x37c4ca:this[_0x5824f4(0x159)](_0x37c4ca)};if(_0x1e8cfa&&(_0x5a71fe[_0x5824f4(0x168)]=!0x0),!(_0x3e27ee==='array'||_0x3e27ee===_0x5824f4(0x140))){var _0x3c5972=this['_getOwnPropertyDescriptor'](_0x39295e,_0x50155e);if(_0x3c5972&&(_0x3c5972[_0x5824f4(0xe6)]&&(_0x5a71fe['setter']=!0x0),_0x3c5972['get']&&!_0xb5fe17&&!_0x3affbd[_0x5824f4(0x117)]))return _0x5a71fe['getter']=!0x0,this[_0x5824f4(0x93)](_0x5a71fe,_0x3affbd),_0x5a71fe;}var _0x3d6747;try{_0x3d6747=_0x1217d6(_0x39295e,_0x50155e);}catch(_0x3f5cfe){return _0x5a71fe={'name':_0x37c4ca,'type':'unknown','error':_0x3f5cfe[_0x5824f4(0x11d)]},this[_0x5824f4(0x93)](_0x5a71fe,_0x3affbd),_0x5a71fe;}var _0x24f108=this[_0x5824f4(0x10b)](_0x3d6747),_0x39aecc=this['_isPrimitiveType'](_0x24f108);if(_0x5a71fe[_0x5824f4(0x164)]=_0x24f108,_0x39aecc)this[_0x5824f4(0x93)](_0x5a71fe,_0x3affbd,_0x3d6747,function(){var _0x38c1d5=_0x5824f4;_0x5a71fe['value']=_0x3d6747[_0x38c1d5(0x14a)](),!_0xb5fe17&&_0x4b5214[_0x38c1d5(0xe3)](_0x24f108,_0x5a71fe,_0x3affbd,{});});else{var _0x5ddfcc=_0x3affbd['autoExpand']&&_0x3affbd[_0x5824f4(0xfe)]<_0x3affbd[_0x5824f4(0xf6)]&&_0x3affbd[_0x5824f4(0xdc)]['indexOf'](_0x3d6747)<0x0&&_0x24f108!==_0x5824f4(0x131)&&_0x3affbd['autoExpandPropertyCount']<_0x3affbd[_0x5824f4(0xde)];_0x5ddfcc||_0x3affbd[_0x5824f4(0xfe)]<_0x5769bf||_0xb5fe17?(this[_0x5824f4(0x141)](_0x5a71fe,_0x3d6747,_0x3affbd,_0xb5fe17||{}),this['_additionalMetadata'](_0x3d6747,_0x5a71fe)):this[_0x5824f4(0x93)](_0x5a71fe,_0x3affbd,_0x3d6747,function(){var _0x496ce6=_0x5824f4;_0x24f108===_0x496ce6(0x102)||_0x24f108==='undefined'||(delete _0x5a71fe[_0x496ce6(0x89)],_0x5a71fe['capped']=!0x0);});}return _0x5a71fe;}finally{_0x3affbd[_0x5824f4(0x86)]=_0x180cc2,_0x3affbd[_0x5824f4(0x166)]=_0x5769bf,_0x3affbd['isExpressionToEvaluate']=_0xc82d5b;}}['_capIfString'](_0x2a6c73,_0x1dad47,_0x419812,_0x296098){var _0x36d2ff=_0x16cdf0,_0x44734d=_0x296098[_0x36d2ff(0x111)]||_0x419812[_0x36d2ff(0x111)];if((_0x2a6c73===_0x36d2ff(0xaf)||_0x2a6c73==='String')&&_0x1dad47['value']){let _0x1ed0df=_0x1dad47['value'][_0x36d2ff(0xb3)];_0x419812[_0x36d2ff(0x9b)]+=_0x1ed0df,_0x419812[_0x36d2ff(0x9b)]>_0x419812[_0x36d2ff(0xa0)]?(_0x1dad47['capped']='',delete _0x1dad47[_0x36d2ff(0x89)]):_0x1ed0df>_0x44734d&&(_0x1dad47['capped']=_0x1dad47[_0x36d2ff(0x89)]['substr'](0x0,_0x44734d),delete _0x1dad47[_0x36d2ff(0x89)]);}}['_isMap'](_0x1b8159){var _0x1c4a0a=_0x16cdf0;return!!(_0x1b8159&&_0x4c2cad[_0x1c4a0a(0x133)]&&this[_0x1c4a0a(0x97)](_0x1b8159)==='[object\\x20Map]'&&_0x1b8159['forEach']);}[_0x16cdf0(0x159)](_0x13df35){var _0x32f329=_0x16cdf0;if(_0x13df35['match'](/^\\d+$/))return _0x13df35;var _0xdd86e5;try{_0xdd86e5=JSON[_0x32f329(0x10c)](''+_0x13df35);}catch{_0xdd86e5='\\x22'+this[_0x32f329(0x97)](_0x13df35)+'\\x22';}return _0xdd86e5[_0x32f329(0x109)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0xdd86e5=_0xdd86e5['substr'](0x1,_0xdd86e5[_0x32f329(0xb3)]-0x2):_0xdd86e5=_0xdd86e5['replace'](/'/g,'\\x5c\\x27')[_0x32f329(0xa3)](/\\\\\"/g,'\\x22')[_0x32f329(0xa3)](/(^\"|\"$)/g,'\\x27'),_0xdd86e5;}[_0x16cdf0(0x93)](_0x3967fd,_0x11fc60,_0x5bb5c4,_0x10fdb3){var _0x37ca66=_0x16cdf0;this['_treeNodePropertiesBeforeFullValue'](_0x3967fd,_0x11fc60),_0x10fdb3&&_0x10fdb3(),this[_0x37ca66(0x85)](_0x5bb5c4,_0x3967fd),this[_0x37ca66(0x145)](_0x3967fd,_0x11fc60);}[_0x16cdf0(0x98)](_0x4662d9,_0x8471f5){var _0xf3315e=_0x16cdf0;this['_setNodeId'](_0x4662d9,_0x8471f5),this['_setNodeQueryPath'](_0x4662d9,_0x8471f5),this[_0xf3315e(0x163)](_0x4662d9,_0x8471f5),this['_setNodePermissions'](_0x4662d9,_0x8471f5);}[_0x16cdf0(0x143)](_0x1f3e57,_0x1dd6ea){}[_0x16cdf0(0x10a)](_0x3d45af,_0x3a9c70){}[_0x16cdf0(0xc8)](_0x2cc832,_0x2c03e9){}[_0x16cdf0(0x96)](_0x4cb561){var _0x2926d0=_0x16cdf0;return _0x4cb561===this[_0x2926d0(0x103)];}[_0x16cdf0(0x145)](_0x28cbb3,_0x44af26){var _0x1e76dd=_0x16cdf0;this[_0x1e76dd(0xc8)](_0x28cbb3,_0x44af26),this[_0x1e76dd(0xfd)](_0x28cbb3),_0x44af26[_0x1e76dd(0x8c)]&&this[_0x1e76dd(0x99)](_0x28cbb3),this[_0x1e76dd(0xf1)](_0x28cbb3,_0x44af26),this[_0x1e76dd(0xb5)](_0x28cbb3,_0x44af26),this['_cleanNode'](_0x28cbb3);}[_0x16cdf0(0x85)](_0x51763c,_0x413e9b){var _0xf7159d=_0x16cdf0;let _0x4cf65a;try{_0x4c2cad[_0xf7159d(0x123)]&&(_0x4cf65a=_0x4c2cad[_0xf7159d(0x123)][_0xf7159d(0x13d)],_0x4c2cad[_0xf7159d(0x123)][_0xf7159d(0x13d)]=function(){}),_0x51763c&&typeof _0x51763c[_0xf7159d(0xb3)]==_0xf7159d(0xa6)&&(_0x413e9b[_0xf7159d(0xb3)]=_0x51763c[_0xf7159d(0xb3)]);}catch{}finally{_0x4cf65a&&(_0x4c2cad[_0xf7159d(0x123)][_0xf7159d(0x13d)]=_0x4cf65a);}if(_0x413e9b[_0xf7159d(0x164)]==='number'||_0x413e9b[_0xf7159d(0x164)]===_0xf7159d(0xfb)){if(isNaN(_0x413e9b['value']))_0x413e9b[_0xf7159d(0x154)]=!0x0,delete _0x413e9b[_0xf7159d(0x89)];else switch(_0x413e9b[_0xf7159d(0x89)]){case Number['POSITIVE_INFINITY']:_0x413e9b[_0xf7159d(0x11a)]=!0x0,delete _0x413e9b[_0xf7159d(0x89)];break;case Number[_0xf7159d(0xd2)]:_0x413e9b[_0xf7159d(0x80)]=!0x0,delete _0x413e9b[_0xf7159d(0x89)];break;case 0x0:this[_0xf7159d(0xe8)](_0x413e9b['value'])&&(_0x413e9b[_0xf7159d(0x12e)]=!0x0);break;}}else _0x413e9b[_0xf7159d(0x164)]===_0xf7159d(0x131)&&typeof _0x51763c[_0xf7159d(0x82)]=='string'&&_0x51763c[_0xf7159d(0x82)]&&_0x413e9b[_0xf7159d(0x82)]&&_0x51763c[_0xf7159d(0x82)]!==_0x413e9b[_0xf7159d(0x82)]&&(_0x413e9b[_0xf7159d(0x8f)]=_0x51763c[_0xf7159d(0x82)]);}[_0x16cdf0(0xe8)](_0x11812a){var _0x2e7867=_0x16cdf0;return 0x1/_0x11812a===Number[_0x2e7867(0xd2)];}[_0x16cdf0(0x99)](_0x14f4cd){var _0x4e852a=_0x16cdf0;!_0x14f4cd[_0x4e852a(0xc5)]||!_0x14f4cd[_0x4e852a(0xc5)][_0x4e852a(0xb3)]||_0x14f4cd['type']===_0x4e852a(0x12b)||_0x14f4cd[_0x4e852a(0x164)]==='Map'||_0x14f4cd[_0x4e852a(0x164)]==='Set'||_0x14f4cd[_0x4e852a(0xc5)]['sort'](function(_0x165edd,_0x3b57e8){var _0x47abe5=_0x4e852a,_0x1848fa=_0x165edd[_0x47abe5(0x82)][_0x47abe5(0xd6)](),_0x47596d=_0x3b57e8[_0x47abe5(0x82)][_0x47abe5(0xd6)]();return _0x1848fa<_0x47596d?-0x1:_0x1848fa>_0x47596d?0x1:0x0;});}[_0x16cdf0(0xf1)](_0xcc15b3,_0x4917cf){var _0x4d0393=_0x16cdf0;if(!(_0x4917cf[_0x4d0393(0xb1)]||!_0xcc15b3[_0x4d0393(0xc5)]||!_0xcc15b3['props'][_0x4d0393(0xb3)])){for(var _0x481a1a=[],_0x4677f2=[],_0x203400=0x0,_0x26506d=_0xcc15b3['props'][_0x4d0393(0xb3)];_0x203400<_0x26506d;_0x203400++){var _0x119f46=_0xcc15b3[_0x4d0393(0xc5)][_0x203400];_0x119f46['type']==='function'?_0x481a1a['push'](_0x119f46):_0x4677f2[_0x4d0393(0xe1)](_0x119f46);}if(!(!_0x4677f2[_0x4d0393(0xb3)]||_0x481a1a['length']<=0x1)){_0xcc15b3[_0x4d0393(0xc5)]=_0x4677f2;var _0xec4879={'functionsNode':!0x0,'props':_0x481a1a};this[_0x4d0393(0x143)](_0xec4879,_0x4917cf),this[_0x4d0393(0xc8)](_0xec4879,_0x4917cf),this['_setNodeExpandableState'](_0xec4879),this['_setNodePermissions'](_0xec4879,_0x4917cf),_0xec4879['id']+='\\x20f',_0xcc15b3[_0x4d0393(0xc5)][_0x4d0393(0x11f)](_0xec4879);}}}[_0x16cdf0(0xb5)](_0x4b36b3,_0x569fe0){}[_0x16cdf0(0xfd)](_0x2adfec){}['_isArray'](_0x52ad50){var _0x3c6442=_0x16cdf0;return Array[_0x3c6442(0x150)](_0x52ad50)||typeof _0x52ad50==_0x3c6442(0xbd)&&this[_0x3c6442(0x97)](_0x52ad50)===_0x3c6442(0xb9);}[_0x16cdf0(0xa1)](_0x1155b8,_0x2b4364){}[_0x16cdf0(0x9a)](_0xeb7e6e){var _0x59f71a=_0x16cdf0;delete _0xeb7e6e['_hasSymbolPropertyOnItsPath'],delete _0xeb7e6e[_0x59f71a(0xf3)],delete _0xeb7e6e[_0x59f71a(0xcb)];}[_0x16cdf0(0x163)](_0x1455cb,_0x334b0a){}}let _0x4f52bd=new _0x370987(),_0x3f91d0={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x36df60={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x4aedb0(_0x37d7d5,_0x54e157,_0x1c4223,_0x2655ec,_0x54bd48,_0x162f9f){var _0x5b69c5=_0x16cdf0;let _0x188e6d,_0x51eeec;try{_0x51eeec=_0x1f6faa(),_0x188e6d=_0x5d4da7[_0x54e157],!_0x188e6d||_0x51eeec-_0x188e6d['ts']>0x1f4&&_0x188e6d[_0x5b69c5(0xb2)]&&_0x188e6d['time']/_0x188e6d['count']<0x64?(_0x5d4da7[_0x54e157]=_0x188e6d={'count':0x0,'time':0x0,'ts':_0x51eeec},_0x5d4da7['hits']={}):_0x51eeec-_0x5d4da7[_0x5b69c5(0x116)]['ts']>0x32&&_0x5d4da7['hits'][_0x5b69c5(0xb2)]&&_0x5d4da7[_0x5b69c5(0x116)][_0x5b69c5(0x9c)]/_0x5d4da7['hits'][_0x5b69c5(0xb2)]<0x64&&(_0x5d4da7[_0x5b69c5(0x116)]={});let _0x5f4817=[],_0xf473ff=_0x188e6d['reduceLimits']||_0x5d4da7[_0x5b69c5(0x116)][_0x5b69c5(0xdb)]?_0x36df60:_0x3f91d0,_0x6f17a1=_0x15e0ac=>{var _0x25c439=_0x5b69c5;let _0x5c7829={};return _0x5c7829[_0x25c439(0xc5)]=_0x15e0ac[_0x25c439(0xc5)],_0x5c7829['elements']=_0x15e0ac[_0x25c439(0xea)],_0x5c7829[_0x25c439(0x111)]=_0x15e0ac[_0x25c439(0x111)],_0x5c7829[_0x25c439(0xa0)]=_0x15e0ac[_0x25c439(0xa0)],_0x5c7829[_0x25c439(0xde)]=_0x15e0ac[_0x25c439(0xde)],_0x5c7829[_0x25c439(0xf6)]=_0x15e0ac[_0x25c439(0xf6)],_0x5c7829['sortProps']=!0x1,_0x5c7829['noFunctions']=!_0x5963b0,_0x5c7829[_0x25c439(0x166)]=0x1,_0x5c7829[_0x25c439(0xfe)]=0x0,_0x5c7829['expId']=_0x25c439(0x106),_0x5c7829[_0x25c439(0x137)]=_0x25c439(0xa5),_0x5c7829[_0x25c439(0xf4)]=!0x0,_0x5c7829[_0x25c439(0xdc)]=[],_0x5c7829['autoExpandPropertyCount']=0x0,_0x5c7829[_0x25c439(0x117)]=!0x0,_0x5c7829[_0x25c439(0x9b)]=0x0,_0x5c7829[_0x25c439(0xed)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x5c7829;};for(var _0x4f90fe=0x0;_0x4f90fe<_0x54bd48[_0x5b69c5(0xb3)];_0x4f90fe++)_0x5f4817['push'](_0x4f52bd[_0x5b69c5(0x141)]({'timeNode':_0x37d7d5===_0x5b69c5(0x9c)||void 0x0},_0x54bd48[_0x4f90fe],_0x6f17a1(_0xf473ff),{}));if(_0x37d7d5===_0x5b69c5(0xa8)){let _0x30a923=Error[_0x5b69c5(0x94)];try{Error['stackTraceLimit']=0x1/0x0,_0x5f4817['push'](_0x4f52bd[_0x5b69c5(0x141)]({'stackNode':!0x0},new Error()['stack'],_0x6f17a1(_0xf473ff),{'strLength':0x1/0x0}));}finally{Error[_0x5b69c5(0x94)]=_0x30a923;}}return{'method':'log','version':_0x5b5693,'args':[{'ts':_0x1c4223,'session':_0x2655ec,'args':_0x5f4817,'id':_0x54e157,'context':_0x162f9f}]};}catch(_0x1bdd63){return{'method':'log','version':_0x5b5693,'args':[{'ts':_0x1c4223,'session':_0x2655ec,'args':[{'type':_0x5b69c5(0xd7),'error':_0x1bdd63&&_0x1bdd63[_0x5b69c5(0x11d)]}],'id':_0x54e157,'context':_0x162f9f}]};}finally{try{if(_0x188e6d&&_0x51eeec){let _0x51ee57=_0x1f6faa();_0x188e6d[_0x5b69c5(0xb2)]++,_0x188e6d[_0x5b69c5(0x9c)]+=_0x1bfbd7(_0x51eeec,_0x51ee57),_0x188e6d['ts']=_0x51ee57,_0x5d4da7[_0x5b69c5(0x116)][_0x5b69c5(0xb2)]++,_0x5d4da7[_0x5b69c5(0x116)]['time']+=_0x1bfbd7(_0x51eeec,_0x51ee57),_0x5d4da7[_0x5b69c5(0x116)]['ts']=_0x51ee57,(_0x188e6d['count']>0x32||_0x188e6d[_0x5b69c5(0x9c)]>0x64)&&(_0x188e6d['reduceLimits']=!0x0),(_0x5d4da7['hits']['count']>0x3e8||_0x5d4da7[_0x5b69c5(0x116)][_0x5b69c5(0x9c)]>0x12c)&&(_0x5d4da7[_0x5b69c5(0x116)][_0x5b69c5(0xdb)]=!0x0);}}catch{}}}return _0x4aedb0;}((_0x1d9eba,_0x521910,_0x223aaa,_0x3bf0ff,_0x3cc83b,_0x2f3155,_0x1463a6,_0x2aea0a,_0x54a6ce,_0x49b65f,_0x40da01)=>{var _0xa04a9a=_0x4cf959;if(_0x1d9eba['_console_ninja'])return _0x1d9eba[_0xa04a9a(0x142)];if(!X(_0x1d9eba,_0x2aea0a,_0x3cc83b))return _0x1d9eba[_0xa04a9a(0x142)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x1d9eba[_0xa04a9a(0x142)];let _0x1b23c6=b(_0x1d9eba),_0xb54c43=_0x1b23c6[_0xa04a9a(0xda)],_0x3f01c5=_0x1b23c6[_0xa04a9a(0x12a)],_0x56e6b4=_0x1b23c6['now'],_0x1e69f1={'hits':{},'ts':{}},_0x223dbc=H(_0x1d9eba,_0x54a6ce,_0x1e69f1,_0x2f3155),_0x412381=_0x1ebed2=>{_0x1e69f1['ts'][_0x1ebed2]=_0x3f01c5();},_0x380ae0=(_0x119a26,_0x197109)=>{var _0x9a103d=_0xa04a9a;let _0x5d241b=_0x1e69f1['ts'][_0x197109];if(delete _0x1e69f1['ts'][_0x197109],_0x5d241b){let _0x42b588=_0xb54c43(_0x5d241b,_0x3f01c5());_0x28daf5(_0x223dbc(_0x9a103d(0x9c),_0x119a26,_0x56e6b4(),_0xde33ce,[_0x42b588],_0x197109));}},_0x5b86b0=_0x5ae609=>(_0x3cc83b===_0xa04a9a(0x120)&&_0x1d9eba['origin']&&_0x5ae609?.[_0xa04a9a(0xd1)]?.['length']&&(_0x5ae609[_0xa04a9a(0xd1)][0x0][_0xa04a9a(0x146)]=_0x1d9eba[_0xa04a9a(0x146)]),_0x5ae609);_0x1d9eba[_0xa04a9a(0x142)]={'consoleLog':(_0x1dd224,_0x41bb64)=>{var _0x1b658e=_0xa04a9a;_0x1d9eba[_0x1b658e(0x123)][_0x1b658e(0x11b)][_0x1b658e(0x82)]!==_0x1b658e(0xf0)&&_0x28daf5(_0x223dbc(_0x1b658e(0x11b),_0x1dd224,_0x56e6b4(),_0xde33ce,_0x41bb64));},'consoleTrace':(_0x24b5b2,_0x2b0971)=>{var _0x466ecb=_0xa04a9a;_0x1d9eba[_0x466ecb(0x123)]['log'][_0x466ecb(0x82)]!==_0x466ecb(0x8b)&&_0x28daf5(_0x5b86b0(_0x223dbc(_0x466ecb(0xa8),_0x24b5b2,_0x56e6b4(),_0xde33ce,_0x2b0971)));},'consoleTime':_0xfe749d=>{_0x412381(_0xfe749d);},'consoleTimeEnd':(_0x38c0d7,_0x492226)=>{_0x380ae0(_0x492226,_0x38c0d7);},'autoLog':(_0x2ec834,_0x2fa439)=>{var _0x2b5911=_0xa04a9a;_0x28daf5(_0x223dbc(_0x2b5911(0x11b),_0x2fa439,_0x56e6b4(),_0xde33ce,[_0x2ec834]));},'autoLogMany':(_0x1cf692,_0x1cb859)=>{var _0x5b991d=_0xa04a9a;_0x28daf5(_0x223dbc(_0x5b991d(0x11b),_0x1cf692,_0x56e6b4(),_0xde33ce,_0x1cb859));},'autoTrace':(_0x1a9094,_0x25e15d)=>{_0x28daf5(_0x5b86b0(_0x223dbc('trace',_0x25e15d,_0x56e6b4(),_0xde33ce,[_0x1a9094])));},'autoTraceMany':(_0x3023ec,_0x484ad6)=>{var _0x29bbf5=_0xa04a9a;_0x28daf5(_0x5b86b0(_0x223dbc(_0x29bbf5(0xa8),_0x3023ec,_0x56e6b4(),_0xde33ce,_0x484ad6)));},'autoTime':(_0x5d79f4,_0x309af2,_0x227224)=>{_0x412381(_0x227224);},'autoTimeEnd':(_0x3746ec,_0x311773,_0x595131)=>{_0x380ae0(_0x311773,_0x595131);},'coverage':_0x133216=>{var _0x328563=_0xa04a9a;_0x28daf5({'method':_0x328563(0x13b),'version':_0x2f3155,'args':[{'id':_0x133216}]});}};let _0x28daf5=q(_0x1d9eba,_0x521910,_0x223aaa,_0x3bf0ff,_0x3cc83b,_0x49b65f,_0x40da01),_0xde33ce=_0x1d9eba[_0xa04a9a(0xbf)];return _0x1d9eba[_0xa04a9a(0x142)];})(globalThis,'127.0.0.1',_0x4cf959(0x119),\"c:\\\\Users\\\\youss\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.314\\\\node_modules\",_0x4cf959(0x132),_0x4cf959(0x126),'1714067288047',_0x4cf959(0xd0),_0x4cf959(0x108),_0x4cf959(0x9f),_0x4cf959(0x167));");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBUTtFQUN0QkksY0FBYyxFQUFFcFUsMkZBQWNBO0FBQ2xDLENBQUM7QUFFRCxJQUFNcVUsWUFBWSxHQUFHO0VBQ2pCQyxTQUFTLEVBQUUxVSx3RUFBc0I7RUFDakNxVSxtQkFBbUIsRUFBbkJBLGlEQUFtQkE7QUFDdkIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21hLXBsdWdpbi1uZXctWXVzdWYvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL21hLXBsdWdpbi1uZXctWXVzdWYvLi9zcmMvY29tcG9uZW50cy9NYXBDbGlja1Jlc3VsdC9NYXBDbGlja1Jlc3VsdC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vbWEtcGx1Z2luLW5ldy1ZdXN1Zi8uL3NyYy9jb21wb25lbnRzL01hcENsaWNrL01hcENsaWNrLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9tYS1wbHVnaW4tbmV3LVl1c3VmLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vbWEtcGx1Z2luLW5ldy1ZdXN1Zi8uL3NyYy9tZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly9tYS1wbHVnaW4tbmV3LVl1c3VmLy4vc3JjL3NlcnZpY2VzL21hcFV0aWxzLmpzIiwid2VicGFjazovL21hLXBsdWdpbi1uZXctWXVzdWYvLi9zcmMvc2VydmljZXMvcXVlcnlTZXJ2aWNlLmpzIiwid2VicGFjazovL21hLXBsdWdpbi1uZXctWXVzdWYvLi9zcmMvcGx1Z2luLnN2ZyIsIndlYnBhY2s6Ly9tYS1wbHVnaW4tbmV3LVl1c3VmL2V4dGVybmFsIHVtZCBcIkBwZW50YS1iL2dyaWRcIiIsIndlYnBhY2s6Ly9tYS1wbHVnaW4tbmV3LVl1c3VmL2V4dGVybmFsIHVtZCBcIkBwZW50YS1iL21hLWxpYlwiIiwid2VicGFjazovL21hLXBsdWdpbi1uZXctWXVzdWYvZXh0ZXJuYWwgdW1kIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9tYS1wbHVnaW4tbmV3LVl1c3VmL2V4dGVybmFsIHVtZCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vbWEtcGx1Z2luLW5ldy1ZdXN1Zi8uL25vZGVfbW9kdWxlcy9vbC9EaXNwb3NhYmxlLmpzIiwid2VicGFjazovL21hLXBsdWdpbi1uZXctWXVzdWYvLi9ub2RlX21vZHVsZXMvb2wvT2JqZWN0LmpzIiwid2VicGFjazovL21hLXBsdWdpbi1uZXctWXVzdWYvLi9ub2RlX21vZHVsZXMvb2wvT2JqZWN0RXZlbnRUeXBlLmpzIiwid2VicGFjazovL21hLXBsdWdpbi1uZXctWXVzdWYvLi9ub2RlX21vZHVsZXMvb2wvT2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly9tYS1wbHVnaW4tbmV3LVl1c3VmLy4vbm9kZV9tb2R1bGVzL29sL2FycmF5LmpzIiwid2VicGFjazovL21hLXBsdWdpbi1uZXctWXVzdWYvLi9ub2RlX21vZHVsZXMvb2wvYXNzZXJ0cy5qcyIsIndlYnBhY2s6Ly9tYS1wbHVnaW4tbmV3LVl1c3VmLy4vbm9kZV9tb2R1bGVzL29sL2NvbnNvbGUuanMiLCJ3ZWJwYWNrOi8vbWEtcGx1Z2luLW5ldy1ZdXN1Zi8uL25vZGVfbW9kdWxlcy9vbC9jb29yZGluYXRlLmpzIiwid2VicGFjazovL21hLXBsdWdpbi1uZXctWXVzdWYvLi9ub2RlX21vZHVsZXMvb2wvZXZlbnRzLmpzIiwid2VicGFjazovL21hLXBsdWdpbi1uZXctWXVzdWYvLi9ub2RlX21vZHVsZXMvb2wvZXZlbnRzL0V2ZW50LmpzIiwid2VicGFjazovL21hLXBsdWdpbi1uZXctWXVzdWYvLi9ub2RlX21vZHVsZXMvb2wvZXZlbnRzL0V2ZW50VHlwZS5qcyIsIndlYnBhY2s6Ly9tYS1wbHVnaW4tbmV3LVl1c3VmLy4vbm9kZV9tb2R1bGVzL29sL2V2ZW50cy9UYXJnZXQuanMiLCJ3ZWJwYWNrOi8vbWEtcGx1Z2luLW5ldy1ZdXN1Zi8uL25vZGVfbW9kdWxlcy9vbC9leHRlbnQuanMiLCJ3ZWJwYWNrOi8vbWEtcGx1Z2luLW5ldy1ZdXN1Zi8uL25vZGVfbW9kdWxlcy9vbC9leHRlbnQvUmVsYXRpb25zaGlwLmpzIiwid2VicGFjazovL21hLXBsdWdpbi1uZXctWXVzdWYvLi9ub2RlX21vZHVsZXMvb2wvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL21hLXBsdWdpbi1uZXctWXVzdWYvLi9ub2RlX21vZHVsZXMvb2wvZ2VvbS9HZW9tZXRyeS5qcyIsIndlYnBhY2s6Ly9tYS1wbHVnaW4tbmV3LVl1c3VmLy4vbm9kZV9tb2R1bGVzL29sL2dlb20vTGluZVN0cmluZy5qcyIsIndlYnBhY2s6Ly9tYS1wbHVnaW4tbmV3LVl1c3VmLy4vbm9kZV9tb2R1bGVzL29sL2dlb20vU2ltcGxlR2VvbWV0cnkuanMiLCJ3ZWJwYWNrOi8vbWEtcGx1Z2luLW5ldy1ZdXN1Zi8uL25vZGVfbW9kdWxlcy9vbC9nZW9tL2ZsYXQvY2xvc2VzdC5qcyIsIndlYnBhY2s6Ly9tYS1wbHVnaW4tbmV3LVl1c3VmLy4vbm9kZV9tb2R1bGVzL29sL2dlb20vZmxhdC9jb250YWlucy5qcyIsIndlYnBhY2s6Ly9tYS1wbHVnaW4tbmV3LVl1c3VmLy4vbm9kZV9tb2R1bGVzL29sL2dlb20vZmxhdC9kZWZsYXRlLmpzIiwid2VicGFjazovL21hLXBsdWdpbi1uZXctWXVzdWYvLi9ub2RlX21vZHVsZXMvb2wvZ2VvbS9mbGF0L2luZmxhdGUuanMiLCJ3ZWJwYWNrOi8vbWEtcGx1Z2luLW5ldy1ZdXN1Zi8uL25vZGVfbW9kdWxlcy9vbC9nZW9tL2ZsYXQvaW50ZXJwb2xhdGUuanMiLCJ3ZWJwYWNrOi8vbWEtcGx1Z2luLW5ldy1ZdXN1Zi8uL25vZGVfbW9kdWxlcy9vbC9nZW9tL2ZsYXQvaW50ZXJzZWN0c2V4dGVudC5qcyIsIndlYnBhY2s6Ly9tYS1wbHVnaW4tbmV3LVl1c3VmLy4vbm9kZV9tb2R1bGVzL29sL2dlb20vZmxhdC9sZW5ndGguanMiLCJ3ZWJwYWNrOi8vbWEtcGx1Z2luLW5ldy1ZdXN1Zi8uL25vZGVfbW9kdWxlcy9vbC9nZW9tL2ZsYXQvc2VnbWVudHMuanMiLCJ3ZWJwYWNrOi8vbWEtcGx1Z2luLW5ldy1ZdXN1Zi8uL25vZGVfbW9kdWxlcy9vbC9nZW9tL2ZsYXQvc2ltcGxpZnkuanMiLCJ3ZWJwYWNrOi8vbWEtcGx1Z2luLW5ldy1ZdXN1Zi8uL25vZGVfbW9kdWxlcy9vbC9nZW9tL2ZsYXQvdHJhbnNmb3JtLmpzIiwid2VicGFjazovL21hLXBsdWdpbi1uZXctWXVzdWYvLi9ub2RlX21vZHVsZXMvb2wvbWF0aC5qcyIsIndlYnBhY2s6Ly9tYS1wbHVnaW4tbmV3LVl1c3VmLy4vbm9kZV9tb2R1bGVzL29sL29iai5qcyIsIndlYnBhY2s6Ly9tYS1wbHVnaW4tbmV3LVl1c3VmLy4vbm9kZV9tb2R1bGVzL29sL3Byb2ouanMiLCJ3ZWJwYWNrOi8vbWEtcGx1Z2luLW5ldy1ZdXN1Zi8uL25vZGVfbW9kdWxlcy9vbC9wcm9qL1Byb2plY3Rpb24uanMiLCJ3ZWJwYWNrOi8vbWEtcGx1Z2luLW5ldy1ZdXN1Zi8uL25vZGVfbW9kdWxlcy9vbC9wcm9qL1VuaXRzLmpzIiwid2VicGFjazovL21hLXBsdWdpbi1uZXctWXVzdWYvLi9ub2RlX21vZHVsZXMvb2wvcHJvai9lcHNnMzg1Ny5qcyIsIndlYnBhY2s6Ly9tYS1wbHVnaW4tbmV3LVl1c3VmLy4vbm9kZV9tb2R1bGVzL29sL3Byb2ovZXBzZzQzMjYuanMiLCJ3ZWJwYWNrOi8vbWEtcGx1Z2luLW5ldy1ZdXN1Zi8uL25vZGVfbW9kdWxlcy9vbC9wcm9qL3Byb2plY3Rpb25zLmpzIiwid2VicGFjazovL21hLXBsdWdpbi1uZXctWXVzdWYvLi9ub2RlX21vZHVsZXMvb2wvcHJvai90cmFuc2Zvcm1zLmpzIiwid2VicGFjazovL21hLXBsdWdpbi1uZXctWXVzdWYvLi9ub2RlX21vZHVsZXMvb2wvc3BoZXJlLmpzIiwid2VicGFjazovL21hLXBsdWdpbi1uZXctWXVzdWYvLi9ub2RlX21vZHVsZXMvb2wvc3RyaW5nLmpzIiwid2VicGFjazovL21hLXBsdWdpbi1uZXctWXVzdWYvLi9ub2RlX21vZHVsZXMvb2wvdHJhbnNmb3JtLmpzIiwid2VicGFjazovL21hLXBsdWdpbi1uZXctWXVzdWYvLi9ub2RlX21vZHVsZXMvb2wvdXRpbC5qcyIsIndlYnBhY2s6Ly9tYS1wbHVnaW4tbmV3LVl1c3VmL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21hLXBsdWdpbi1uZXctWXVzdWYvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbWEtcGx1Z2luLW5ldy1ZdXN1Zi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWEtcGx1Z2luLW5ldy1ZdXN1Zi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21hLXBsdWdpbi1uZXctWXVzdWYvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tYS1wbHVnaW4tbmV3LVl1c3VmL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL21hLXBsdWdpbi1uZXctWXVzdWYvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKSwgcmVxdWlyZShcIkBwZW50YS1iL21hLWxpYlwiKSwgcmVxdWlyZShcIkBwZW50YS1iL2dyaWRcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicmVhY3RcIiwgXCJyZWFjdC1yZWR1eFwiLCBcIkBwZW50YS1iL21hLWxpYlwiLCBcIkBwZW50YS1iL2dyaWRcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibWEtcGx1Z2luLW5ldy1ZdXN1ZlwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwicmVhY3QtcmVkdXhcIiksIHJlcXVpcmUoXCJAcGVudGEtYi9tYS1saWJcIiksIHJlcXVpcmUoXCJAcGVudGEtYi9ncmlkXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJtYS1wbHVnaW4tbmV3LVl1c3VmXCJdID0gZmFjdG9yeShyb290W1wicmVhY3RcIl0sIHJvb3RbXCJyZWFjdC1yZWR1eFwiXSwgcm9vdFtcIkBwZW50YS1iL21hLWxpYlwiXSwgcm9vdFtcIkBwZW50YS1iL2dyaWRcIl0pO1xufSkoc2VsZiwgKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9yZWR1eF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19wZW50YV9iX21hX2xpYl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19wZW50YV9iX2dyaWRfXykgPT4ge1xucmV0dXJuICIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgd2l0aExvY2FsaXplIH0gZnJvbSBcIkBwZW50YS1iL21hLWxpYlwiO1xyXG5pbXBvcnQgeyBMT0NBTElaQVRJT05fTkFNRVNQQUNFIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgY29tcG9uZW50cyBhcyBHcmlkQ29tcG9uZW50cyB9IGZyb20gXCJAcGVudGEtYi9ncmlkXCI7XHJcbmNvbnN0IEdyaWQgPSBHcmlkQ29tcG9uZW50cy5HcmlkO1xyXG5cclxuY2xhc3MgTWFwQ2xpY2tSZXN1bHQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgaW5mbyB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBsZXQgcGFyc2VkRGF0YSA9IGluZm8uZmVhdHVyZXMubWFwKChmZWF0dXJlKSA9PiBmZWF0dXJlLnByb3BlcnRpZXMpO1xyXG4gICAgICAgIC8vbWFrZSBzdXJlIHRoYXQgcXVlcnkgcmVzcCBpcyByZXR1cm5lZFxyXG4gICAgICAgIC8vIHVzZSBncmlkIGNvbXBvbmVudCB0byB2aWV3IGFsbCBmZWF0dXJlc1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiRkVBVFVSRVNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVNpemVPcHRpb25zOiBbMTAsIDIwLCA0MF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlTGFyZ2VWaWV3OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiaWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImlkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJJTlRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImJhc2ljXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcIm5hbWVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm5hbWVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlNUUlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiYmFzaWNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHBhcnNlZERhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhMb2NhbGl6ZShNYXBDbGlja1Jlc3VsdCwgTE9DQUxJWkFUSU9OX05BTUVTUEFDRSk7XHJcbiIsIi8qKlxyXG4gKiBBdXRob3I6IEFtciBTYW1pclxyXG4gKiBcclxuICogRGVzY3JpcHRpb246IFxyXG4gKiAgLSBBbiBleGFtcGxlIG9mIGEgcGx1Z2luIHRoYXQgbGlzdGVucyB0byBhbm90aGVyIFxyXG4gKiAgICBwbHVnaW4ncyBzdGF0ZSBjaGFuZ2VzIChNYXAgcGx1Z2luKSwgYW5kIGxvZyB0aGF0IHN0YXRlLlxyXG4gKi9cclxuXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgc2VsZWN0b3JzUmVnaXN0cnksIGFjdGlvbnNSZWdpc3RyeSB9IGZyb20gXCJAcGVudGEtYi9tYS1saWJcIjtcclxuaW1wb3J0IHsgZHJhd1NoYXBlLCB2YWxpZGF0ZVZMIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL21hcFV0aWxzXCI7XHJcblxyXG4vL2luaGVydGluZyB0aGUgcHJvcHMsIFN0YXRlLCByZW5kZXIgbWV0aG9kIGFuZCBsaWZlIGN5Y2xlIG1ldGhvZHMgZnJvbSBSZWFjdFxyXG5jbGFzcyBNYXBDbGlja0NvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICAvLyByZWZyZW5jZXMgdGhlIChUaGlzKSBjdXJyZW50IGluc3RhbmNlIG9mIHRoZSBjbGFzc1xyXG4gICAgICAgIHRoaXMuaGFuZGxlUmVzcCA9IHRoaXMuaGFuZGxlUmVzcC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVJlc3AocmVzKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UocmVzPy5kYXRhWzBdPy5mZWF0dXJlcyk7XHJcbiAgICAgICAgLy8gcmVtb3ZlcyB0aGUgb2xkIGNsaWNrIHJlc3VsdCBpZiB0aGlzLklEIGV4aXN0KGNvbnRhaW5lciBvcGVuZWQpIHJlbW92ZSB0aGUgY29udGFpbmVyXHJcbiAgICAgICAgdGhpcy5pZCAmJiB0aGlzLnByb3BzLnJlbW92ZU1hcENsaWNrUmVzdWx0KHRoaXMuaWQpO1xyXG4gICAgICAgIC8vIHVzaW5nIHRoZSBzaG93TWFwQ2xpY2tSZXN1bHQgYW5kIHBhc3NpbmcgaXQgdGhlIHRoaW5ncyB0aGF0IHdlIHdhbnQgaXQgdG8gc2hvdyBpbiB0aGUgY29udGFpbmVyXHJcbiAgICAgICAgdGhpcy5wcm9wcy5zaG93TWFwQ2xpY2tSZXN1bHQoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGluZm86IGRhdGEsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChpZCkgPT4gKHRoaXMuaWQgPSBpZClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVzY3JpcHRpb246XHJcbiAgICAgKiAgLSBSZWFjdCBsaWZlY3ljbGUgbWV0aG9kLCBoZXJlIHdlIGNoZWNrIGZvciBzdGF0ZSBjaGFuZ2VzLlxyXG4gICAgICovXHJcbiAgICAvLyBwcmV2UHJvcHMgPT4gc2F2aW5nIHRoZSBvbGQgcHJvcHMgYmVmb3JlIHRoZSBjaGFuZ2VcclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcclxuICAgICAgICAvL2lzQWN0aXZlID0+IGNoZWNraW5nIGlmIHRoZSBidXR0b24gaXMgb24gb3Igb2ZmXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgY29uc3QgeyBZdXN1ZkxheWVyIH0gPSB0aGlzLnByb3BzLnNldHRpbmdzLmRhdGFTZXR0aW5ncztcclxuICAgICAgICAgICAgY29uc3QgeyBjb2RlIH0gPSB0aGlzLnByb3BzLm1hcC5wcm9qZWN0aW9uO1xyXG4gICAgICAgICAgICBkcmF3U2hhcGUoXHJcbiAgICAgICAgICAgICAgICBZdXN1ZkxheWVyLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVSZXNwLFxyXG4gICAgICAgICAgICAgICAgY29kZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGlmIHRoZSB0cmlnZ2VyIGlzbid0IGFjdGl2ZSBjbGVhciBhbGwgdGhlIGZlYXR1cmVzIG9uIHRoZSBtYXAgYW5kIGNsb3NlIHRoZSBjb250YWluZXJcclxuICAgICAgICAgICAgdmFsaWRhdGVWTCh7IGNsZWFyOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmlkICYmIHRoaXMucHJvcHMucmVtb3ZlTWFwQ2xpY2tSZXN1bHQodGhpcy5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICAvL3doeSBhcmUgd2UgcmV0dXJuaW5nIG51bGw/XHJcbiAgICAgICAgLy8gd2UgZG9uJ3QgbmVlZCB0byByZXR1cm4gYW55dGhpbmcgc2luY2Ugd2UgYXJlIG5vdCBjaGFuZ2luZyB0aGUgVUksIHdlIGRvIGl0IGZyb20gTW5BIG5vdCBmcm9tIGNvZGluZ1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vIGdldHRpbmcgdGhlIG1hcCByZWR1Y2VycyB0byBiZSBhYmxlIHRvIGFjY2VzcyB0aGUgbWFwIHByb2plY3Rpb24gY29kZVxyXG4gICAgICAgIG1hcDogc2VsZWN0b3JzUmVnaXN0cnkuZ2V0U2VsZWN0b3IoXHJcbiAgICAgICAgICAgIFwic2VsZWN0TWFwUmVkdWNlcnNcIixcclxuICAgICAgICAgICAgc3RhdGUsXHJcbiAgICAgICAgICAgIG93blByb3BzLnJlZHVjZXJJZFxyXG4gICAgICAgICksXHJcbiAgICB9O1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNob3dNYXBDbGlja1Jlc3VsdDogKHByb3BzLCBvbkFkZCkgPT4gZGlzcGF0Y2goYWN0aW9uc1JlZ2lzdHJ5LmdldEFjdGlvbkNyZWF0b3IoJ3Nob3dDb21wb25lbnQnLCAnbWEtcGx1Z2luLW5ldy1ZdXN1ZicsICdZdXN1ZkNvbnRhaW5lcicsIHByb3BzLCBvbkFkZCkpLFxyXG4gICAgICAgIHJlbW92ZU1hcENsaWNrUmVzdWx0OiAoaWQpID0+IGRpc3BhdGNoKGFjdGlvbnNSZWdpc3RyeS5nZXRBY3Rpb25DcmVhdG9yKCdyZW1vdmVDb21wb25lbnQnLCBpZCkpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE1hcENsaWNrQ29tcG9uZW50KTsiLCJleHBvcnQgY29uc3QgTE9DQUxJWkFUSU9OX05BTUVTUEFDRSA9IFwibWEtcGx1Z2luLW5ldy1ZdXN1ZlwiOyIsImltcG9ydCBJY29uIGZyb20gJy4vcGx1Z2luLnN2Zyc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgXCJjbGljay5tc2dcIjogXCJZb3UgY2xpY2tlZCBvbiBsb2NhdGlvbjogezB9LCB7MX1cIixcclxuICAgIFwidGVzdC5wbHVyYWxzXCI6IFwiVGhlcmUgezAscGx1cmFsLG9uZXtpcyAjIGFwcGxlfW90aGVye2FyZSAjIGFwcGxlc319IGluIHsxLHBsdXJhbCxvbmV7IyBiYXNrZXR9b3RoZXJ7IyBiYXNrZXRzfX0uXCIsXHJcbiAgICBcInRpdGxlXCI6IFwibWEtcGx1Z2luLW5ldy1ZdXN1ZlwiLFxyXG4gICAgXCJpY29uXCI6IEljb25cclxufSIsIi8vIGltcG9ydGluZyB0aGUgcmVxdWlyZWQgcmVnaXN0cmllc1xyXG5pbXBvcnQgeyBhcGlSZWdpc3RyeSwgYWN0aW9uc1JlZ2lzdHJ5LCBnZW9tZXRyeVNlcnZpY2UgfSBmcm9tIFwiQHBlbnRhLWIvbWEtbGliXCI7XHJcbmltcG9ydCB7IGdldEFyZWEsIGdldExlbmd0aCB9IGZyb20gXCJvbC9zcGhlcmUuanNcIjtcclxuaW1wb3J0IHsgY2FsbFF1ZXJ5U2VydmljZSB9IGZyb20gXCIuL3F1ZXJ5U2VydmljZVwiO1xyXG5pbXBvcnQgeyBMaW5lU3RyaW5nIH0gZnJvbSBcIm9sL2dlb20uanNcIjtcclxuaW1wb3J0IFBvbHlnb24gZnJvbSBcIm9sL2dlb20vUG9seWdvblwiXHJcblxyXG4vL3ZlY3RvckxheWVyIGRlY2xhcmF0aW9uXHJcbmxldCBWTCA9IG51bGw7XHJcbmxldCBkcmF3aW5nID0gbnVsbDtcclxubGV0IG92ZXJsYXlBcnJheSA9IFtdO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCB2YWxpZGF0ZVZMID0gKG9wdGlvbnMpID0+IHtcclxuICBpZiAoVkwgJiYgb3B0aW9ucy5jbGVhcikge1xyXG4gICAgcmVzZXRMYXllcigpO1xyXG4gIH1cclxufVxyXG4vLyBDaGVja2luZyB0aGUgaWYgdGhlIHZlY3RvciBsYXllciBhbHJlYWR5IGV4aXN0cyB0byBjbGVhciBhbGwgdGhlIGZlYXR1cmVzIG9uIGl0XHJcbmV4cG9ydCBjb25zdCBkcmF3U2hhcGUgPSBhc3luYyAobGF5ZXIsIGZ1bmMsIGNvZGUpID0+IHtcclxuICBpZiAoIVZMKSB7XHJcbiAgICBjb25zdCBbVmVjdG9yTGF5ZXJdID0gYXdhaXQgYXBpUmVnaXN0cnkuZ2V0QXBpcyhbXCJWZWN0b3JMYXllclwiXSk7XHJcbiAgICBWTCA9IG5ldyBWZWN0b3JMYXllcigpO1xyXG4gICAgYWN0aW9uc1JlZ2lzdHJ5LmRpc3BhdGNoKFwiYWRkVmVjdG9yTGF5ZXJcIiwgVkwpO1xyXG4gICAgY29uc3QgW0RyYXdpbmddID0gYXdhaXQgYXBpUmVnaXN0cnkuZ2V0QXBpcyhbXCJEcmF3aW5nXCJdKTtcclxuICAgIGRyYXdpbmcgPSBuZXcgRHJhd2luZyh7XHJcbiAgICAgIHR5cGU6IFwicG9seWdvblwiLFxyXG4gICAgICB2ZWN0b3JMYXllcjogVkwsXHJcbiAgICB9KVxyXG4gICAgYWN0aW9uc1JlZ2lzdHJ5LmRpc3BhdGNoKFwiYWRkSW50ZXJhY3Rpb25cIiwgZHJhd2luZyk7XHJcbiAgICBkcmF3aW5nLnNldE9uRHJhd0ZpbmlzaChhc3luYyAoZmVhdHVyZSkgPT4ge1xyXG4gICAgICAvL3N0cnVjdHVyZSBkZWZpbml0aW9uXHJcbiAgICAgIGNvbnN0IGdlb20gPSBmZWF0dXJlLmdldEdlb21ldHJ5KCk7IC8vIGdldHRpbmcgdGhlIGdlb21ldHJ5IG9mIHRoZSBmZWF0dXJlXHJcbiAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gZmVhdHVyZS5vbEZlYXR1cmUuZ2V0R2VvbWV0cnkoKS5nZXRDb29yZGluYXRlcygpWzBdOyAvL2dldHRpbmcgY29vcmRzIHRvIGNhbGMgbGVuZ3RoIGxhdGVyXHJcbiAgICAgIGNvbnN0IGNlbnRlclBvaW50ID0gZ2VvbWV0cnlTZXJ2aWNlLmNlbnRlcihmZWF0dXJlLmdldEZlYXR1cmVHZW9Kc29uKCkpOyAvL2NyZWF0aW5nIGEgY2VudGVyIHBvaW50XHJcblxyXG4gICAgICAvL2NsZWFyaW5nIHRoZSB2ZWN0b3JMYXllciBhbmQgYWRkaW5nIHRoZSBkcmF3aW5nIHRvIGl0XHJcbiAgICAgIGFkZEZlYXR1cmUoZmVhdHVyZSk7XHJcbiAgICAgIGNsZWFyT3ZlcmxheSgpO1xyXG5cclxuICAgICAgLy9yZXR1cm5pbmcgdGhlIGZlYXR1cmVzIGZyb20gdGhlIGludGVyc2VjdGlvbiBvZiB0aGUgZHJhd24gc2hhcGUgd2l0aCB0aGUgbWFwIGFuZCBhZGRpbmcgdGhlIG92ZXJsYXlzXHJcbiAgICAgIGF3YWl0IGNhbGxRdWVyeVNlcnZpY2UobGF5ZXIsIGZ1bmMsIGdlb20pO1xyXG4gICAgICBhd2FpdCBvdmVybGF5QXJlYShmZWF0dXJlLCBjb2RlLCBjZW50ZXJQb2ludCk7XHJcbiAgICAgIG92ZXJsYXlMaW5lKGNvb3JkaW5hdGVzLCBjb2RlKTtcclxuICAgIH0pO1xyXG4gIH07XHJcbn07XHJcblxyXG5cclxuLyogY29uc3QgYXJlYSA9IGdldEFyZWEob2xHZW9tKTtcclxuY29uc3QgbGVuZ3RoID0gZ2V0TGVuZ3RoKG9sR2VvbSk7ICovXHJcblxyXG4vLyBhIGZ1bmN0aW9uIHRvIGNsZWFyIHRoZSBtYXAgYWZ0ZXIgdGhlIHByZXZpb3VzIGRyYXdpbmcgaXMgZmluaXNoZWQgYW5kIHRvIGFkZCB0aGUgbmV4dCBkcmF3aW5nXHJcbmZ1bmN0aW9uIGFkZEZlYXR1cmUoZmVhdCkge1xyXG4gIFZMLmNsZWFyKCk7XHJcbiAgVkwuYWRkRmVhdHVyZShmZWF0KVxyXG59O1xyXG5cclxuLy9mdW5jdGlvbiB0byBjYWxjdWxhdGUgdGhlIGFyZWEgb2YgdGhlIGRyYXduIEZlYXR1cmVcclxuZnVuY3Rpb24gY2FsY0FyZWEoZmVhdCwgY29kZSkge1xyXG4gIGNvbnN0IGFyZWEgPSBnZXRBcmVhKGZlYXQub2xGZWF0dXJlLmdldEdlb21ldHJ5KCksIHsgcHJvamVjdGlvbjogY29kZSB9KTtcclxuICByZXR1cm4gYXJlYVxyXG59XHJcbi8vY3JlYXRpbmcgTGluZUxlbmd0aHMgb3ZlckxheSBvZiB0aGUgZHJhd24gRmVhdHVyZVxyXG5hc3luYyBmdW5jdGlvbiBvdmVybGF5TGluZShjb29yZGluYXRlcywgY29kZSkge1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY29vcmRpbmF0ZXMubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICBjb25zdCBzdGFydGluZ0xpbmUgPSBjb29yZGluYXRlc1tpXTtcclxuICAgIGNvbnN0IG5leHRMaW5lID0gY29vcmRpbmF0ZXNbaSArIDFdO1xyXG4gICAgY29uc3Qgb3JpZ0xpbmUgPSBbc3RhcnRpbmdMaW5lLCBuZXh0TGluZV07XHJcbiAgICBjb25zdCBtaWRkbGUgPSBbXHJcbiAgICAgIChzdGFydGluZ0xpbmVbMF0gKyBuZXh0TGluZVswXSkgLyAyLFxyXG4gICAgICAoc3RhcnRpbmdMaW5lWzFdICsgbmV4dExpbmVbMV0pIC8gMixcclxuICAgIF07XHJcbiAgICBjb25zdCBsaW5lID0gbmV3IExpbmVTdHJpbmcob3JpZ0xpbmUpO1xyXG4gICAgY29uc3QgbGVuZ3RoID0gZ2V0TGVuZ3RoKGxpbmUsIHsgcHJvamVjdGlvbjogY29kZSB9KVxyXG4gICAgY29uc3QgbGVuZ3RoSW5LbSA9IGxlbmd0aCAvIDEwMDA7XHJcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBlbC5pbm5lclRleHQgPSBgJHtsZW5ndGhJbkttLnRvRml4ZWQoMSl9IEttYDtcclxuICAgIGVsLnN0eWxlID0gXCJvcGFjaXR5OiAxO1wiICtcclxuICAgICAgXCIgZm9udC13ZWlnaHQ6IGJvbGQ7XCIgK1xyXG4gICAgICBcInBvc2l0aW9uOiByZWxhdGl2ZTsgXCIgK1xyXG4gICAgICBcImJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcIiArXHJcbiAgICAgIFwiYm9yZGVyLXJhZGl1czogNHB4O1wiICtcclxuICAgICAgXCJjb2xvcjogd2hpdGVzbW9rZTtcIiArXHJcbiAgICAgIFwicGFkZGluZzogNHB4IDhweDtcIiArXHJcbiAgICAgIFwib3BhY2l0eTogMC43O1wiICtcclxuICAgICAgXCJ3aGl0ZS1zcGFjZTogbm93cmFwO1wiICtcclxuICAgICAgXCJmb250LXNpemU6IDEycHg7IFwiICtcclxuICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XCI7XHJcbiAgICBjb25zdCBbT3ZlcmxheV0gPSBhd2FpdCBhcGlSZWdpc3RyeS5nZXRBcGlzKFtcIk92ZXJsYXlcIl0pO1xyXG4gICAgY29uc3Qgb3ZlcmxheUxpbmUgPSBuZXcgT3ZlcmxheSh7XHJcbiAgICAgIGVsZW1lbnQ6IGVsLFxyXG4gICAgICBwb3NpdGlvbjogbWlkZGxlLFxyXG4gICAgfSk7XHJcbiAgICBvdmVybGF5QXJyYXkucHVzaChvdmVybGF5TGluZSk7XHJcbiAgICBhY3Rpb25zUmVnaXN0cnkuZGlzcGF0Y2goXCJhZGRPdmVybGF5XCIsIG92ZXJsYXlMaW5lKTtcclxuICB9XHJcbn1cclxuLy8gY3JlYXRpbmcgb3ZlckxheSB3aXRoIHRoZSBhcmVhIG9mIHRoZSBkcmF3biBGZWF0dXJlXHJcbmFzeW5jIGZ1bmN0aW9uIG92ZXJsYXlBcmVhKGZlYXQsIGNvZGUsIGNlbnRlcikge1xyXG4gIGNvbnN0IGFyZWEgPSBjYWxjQXJlYShmZWF0LCBjb2RlKTtcclxuICBjb25zdCBhcmVhSW5LbVNxID0gYXJlYSAvICgxMDAwICogMTAwMCk7XHJcbiAgY29uc3QgYXJlYUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBhcmVhRWwuaW5uZXJIVE1MID0gYCR7YXJlYUluS21TcS50b0ZpeGVkKDIpfSBrbSZzdXAyYDtcclxuICBhcmVhRWwuc3R5bGUgPSBcIm9wYWNpdHk6IDE7XCIgK1xyXG4gICAgXCIgZm9udC13ZWlnaHQ6IGJvbGQ7XCIgK1xyXG4gICAgXCJwb3NpdGlvbjogcmVsYXRpdmU7IFwiICtcclxuICAgIFwiYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1wiICtcclxuICAgIFwiYm9yZGVyLXJhZGl1czogNHB4O1wiICtcclxuICAgIFwiY29sb3I6IHdoaXRlc21va2U7XCIgK1xyXG4gICAgXCJwYWRkaW5nOiA0cHggOHB4O1wiICtcclxuICAgIFwib3BhY2l0eTogMC43O1wiICtcclxuICAgIFwid2hpdGUtc3BhY2U6IG5vd3JhcDtcIiArXHJcbiAgICBcImZvbnQtc2l6ZTogMTJweDsgXCIgK1xyXG4gICAgXCJiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XCI7XHJcbiAgLyogYXJlYUVsLnN0eWxlLmNvbG9yID0gXCIjNjEwMDMwXCI7XHJcbiAgYXJlYUVsLnN0eWxlLmZvbnRTaXplID0gXCIwLjhyZW1cIjsgKi9cclxuICBjb25zdCBbT3ZlcmxheV0gPSBhd2FpdCBhcGlSZWdpc3RyeS5nZXRBcGlzKFtcIk92ZXJsYXlcIl0pO1xyXG4gIGNvbnN0IG92ZXJsYXlBcmVhID0gbmV3IE92ZXJsYXkoe1xyXG4gICAgZWxlbWVudDogYXJlYUVsLFxyXG4gICAgcG9zaXRpb246IGNlbnRlci5nZW9tZXRyeS5jb29yZGluYXRlcyxcclxuICAgIHBvc2l0aW9uaW5nOiBcImNlbnRlci1jZW50ZXJcIlxyXG4gIH0pO1xyXG4gIG92ZXJsYXlBcnJheS5wdXNoKG92ZXJsYXlBcmVhKTtcclxuICBhd2FpdCBhY3Rpb25zUmVnaXN0cnkuZGlzcGF0Y2goXCJhZGRPdmVybGF5XCIsIG92ZXJsYXlBcmVhKTtcclxufVxyXG4vL2NsZWFyaW5nIHRoZSBvdmVybGF5XHJcbmZ1bmN0aW9uIGNsZWFyT3ZlcmxheSgpIHtcclxuICBvdmVybGF5QXJyYXkuZm9yRWFjaCgob3ZlcmxheSkgPT4geyBhY3Rpb25zUmVnaXN0cnkuZGlzcGF0Y2goXCJyZW1vdmVPdmVybGF5XCIsIG92ZXJsYXkpIH0pXHJcbiAgb3ZlcmxheUFycmF5ID0gW107XHJcbn1cclxuXHJcbi8vZnVuY3Rpb24gdG8gcmVzZXQgdGhlIGNsZWFyIHRoZSBsYXllcnMgb2YgYWxsIHRoZSBmZWF1dHJlcyBhbmQgdGhlIG92ZXJsYXlzIG9uIGl0XHJcbmZ1bmN0aW9uIHJlc2V0TGF5ZXIoKSB7XHJcbiAgVkwuY2xlYXIoKTtcclxuICBhY3Rpb25zUmVnaXN0cnkuZGlzcGF0Y2goXCJyZW1vdmVJbnRlcmFjdGlvblwiLCBkcmF3aW5nKTtcclxuICBWTCA9IG51bGw7XHJcbiAgY2xlYXJPdmVybGF5KCk7XHJcbn0iLCJpbXBvcnQge1xyXG4gIHN0b3JlLFxyXG4gIHF1ZXJ5LFxyXG4gIHN5c3RlbVNob3dMb2FkaW5nLFxyXG4gIHN5c3RlbUhpZGVMb2FkaW5nLFxyXG59IGZyb20gXCJAcGVudGEtYi9tYS1saWJcIjtcclxuXHJcbmNvbnN0IGdlblF1ZXJ5Qm9keSA9IChsYXllciwgZ2VvbWV0cnkpID0+IHtcclxuICByZXR1cm4gW1xyXG4gICAge1xyXG4gICAgICBkYXRhU291cmNlOiB7XHJcbiAgICAgICAgaWQ6IGxheWVyWzBdLmlkLFxyXG4gICAgICB9LFxyXG4gICAgICBmaWx0ZXI6IHtcclxuICAgICAgICBjb25kaXRpb25MaXN0OiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGtleTogbGF5ZXJbMF0uZ2VvbWV0cnlGaWVsZC5maWVsZE5hbWUsXHJcbiAgICAgICAgICAgIGdlb21ldHJ5OiBKU09OLnN0cmluZ2lmeShnZW9tZXRyeSksXHJcbiAgICAgICAgICAgIHNwYXRpYWxSZWxhdGlvbjogXCJJTlRFUlNFQ1RcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAgY3JzOiBsYXllclswXS5jcnMsXHJcbiAgICB9LFxyXG4gIF07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY2FsbFF1ZXJ5U2VydmljZSA9IGFzeW5jIChsYXllciwgYWN0aW9uLCBnZW9tZXRyeSkgPT4ge1xyXG4gIHN0b3JlLmRpc3BhdGNoKHN5c3RlbVNob3dMb2FkaW5nKCkpO1xyXG4gIHF1ZXJ5XHJcbiAgICAucXVlcnlGZWF0dXJlcyhnZW5RdWVyeUJvZHkobGF5ZXIsIGdlb21ldHJ5KSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBhY3Rpb24ocmVzcG9uc2UpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgLyogZXNsaW50LWRpc2FibGUgKi9jb25zb2xlLmxvZyguLi5vb19vbyhgNjc0NDQ1NDEwXzM2XzZfMzZfMjRfNGAsZXJyb3IpKTtcclxuICAgIH0pXHJcbiAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgIHN0b3JlLmRpc3BhdGNoKHN5c3RlbUhpZGVMb2FkaW5nKCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovLyogYzggaWdub3JlIHN0YXJ0ICovLyogZXNsaW50LWRpc2FibGUgKi87ZnVuY3Rpb24gb29fY20oKXt0cnl7cmV0dXJuICgwLGV2YWwpKFwiZ2xvYmFsVGhpcy5fY29uc29sZV9uaW5qYVwiKSB8fCAoMCxldmFsKShcIi8qIGh0dHBzOi8vZ2l0aHViLmNvbS93YWxsYWJ5anMvY29uc29sZS1uaW5qYSNob3ctZG9lcy1pdC13b3JrICovJ3VzZSBzdHJpY3QnO2Z1bmN0aW9uIF8weDUyOWMoKXt2YXIgXzB4Mzc1MWUzPVsnX2lzTmVnYXRpdmVaZXJvJywnW29iamVjdFxcXFx4MjBTZXRdJywnZWxlbWVudHMnLCdkYXRhJywnd2FybicsJ25vZGUnLCdub2RlTW9kdWxlcycsJ19jb25uZWN0VG9Ib3N0Tm93JywnZGlzYWJsZWRMb2cnLCdfYWRkRnVuY3Rpb25zTm9kZScsJ19TeW1ib2wnLCdfaGFzU2V0T25JdHNQYXRoJywnYXV0b0V4cGFuZCcsJ3BvcCcsJ2F1dG9FeHBhbmRNYXhEZXB0aCcsJzkyMzI1MkdZZ1NzVycsJ19nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCdjb25zdHJ1Y3RvcicsJ29uY2xvc2UnLCdOdW1iZXInLCdfZGF0ZVRvU3RyaW5nJywnX3NldE5vZGVFeHBhbmRhYmxlU3RhdGUnLCdsZXZlbCcsJzF1dXBOQUknLCdjdXJyZW50JywnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnLCdudWxsJywnX3VuZGVmaW5lZCcsJ2RhdGUnLCdhc3RybycsJ3Jvb3RfZXhwX2lkJywnX1dlYlNvY2tldENsYXNzJywnJywnbWF0Y2gnLCdfc2V0Tm9kZVF1ZXJ5UGF0aCcsJ190eXBlJywnc3RyaW5naWZ5JywnSFRNTEFsbENvbGxlY3Rpb24nLCdkZWZhdWx0JywnX2NvbnNvbGVOaW5qYUFsbG93ZWRUb1N0YXJ0JywndW5yZWYnLCdzdHJMZW5ndGgnLCdlZGdlJywnW29iamVjdFxcXFx4MjBCaWdJbnRdJywnMjI2MXFNa25oWicsJ193cycsJ2hpdHMnLCdyZXNvbHZlR2V0dGVycycsJ3JlbG9hZCcsJzUwMTUwJywncG9zaXRpdmVJbmZpbml0eScsJ2xvZycsJ2lzRXhwcmVzc2lvblRvRXZhbHVhdGUnLCdtZXNzYWdlJywnY2FsbCcsJ3Vuc2hpZnQnLCduZXh0LmpzJywnaGFzT3duUHJvcGVydHknLCdmb3JFYWNoJywnY29uc29sZScsJ3BvcnQnLCdfX2VzJysnTW9kdWxlJywnMS4wLjAnLCdTZXQnLCdwcm9jZXNzJywnb25lcnJvcicsJ3RpbWVTdGFtcCcsJ2FycmF5JywnX2FsbG93ZWRUb0Nvbm5lY3RPblNlbmQnLCdcXFxceDIwc2VydmVyJywnbmVnYXRpdmVaZXJvJywncGVyZm9ybWFuY2UnLCdwYXRoVG9GaWxlVVJMJywnZnVuY3Rpb24nLCd3ZWJwYWNrJywnTWFwJywnX0hUTUxBbGxDb2xsZWN0aW9uJywnd3M6Ly8nLCdfc2VuZEVycm9yTWVzc2FnZScsJ3Jvb3RFeHByZXNzaW9uJywnX2lzUHJpbWl0aXZlV3JhcHBlclR5cGUnLCdfYmxhY2tsaXN0ZWRQcm9wZXJ0eScsJ19pbk5leHRFZGdlJywnY292ZXJhZ2UnLCcuLi4nLCdlcnJvcicsJ19hZGRQcm9wZXJ0eScsJ1N0cmluZycsJ0Vycm9yJywnc2VyaWFsaXplJywnX2NvbnNvbGVfbmluamEnLCdfc2V0Tm9kZUlkJywnX2lzTWFwJywnX3RyZWVOb2RlUHJvcGVydGllc0FmdGVyRnVsbFZhbHVlJywnb3JpZ2luJywnb25vcGVuJywnX3NvY2tldCcsJ3RvU3RyaW5nJywndmFsdWVPZicsJ2dsb2JhbCcsJ19kaXNwb3NlV2Vic29ja2V0JywnbG9nZ2VyXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBjb25uZWN0XFxcXHgyMHRvXFxcXHgyMGhvc3QsXFxcXHgyMHNlZVxcXFx4MjAnLCdnYXRld2F5LmRvY2tlci5pbnRlcm5hbCcsJ2NhdGNoJywnaXNBcnJheScsJ19yZWdFeHBUb1N0cmluZycsJ19jb25uZWN0ZWQnLCdfZ2V0T3duUHJvcGVydHlTeW1ib2xzJywnbmFuJywnX2luQnJvd3NlcicsJ2dldE93blByb3BlcnR5RGVzY3JpcHRvcicsJ1N5bWJvbCcsJ19yZWNvbm5lY3RUaW1lb3V0JywnX3Byb3BlcnR5TmFtZScsJ1dlYlNvY2tldCcsJ2JpbmQnLCdwYXJlbnQnLCdnZXRPd25Qcm9wZXJ0eVN5bWJvbHMnLCdfd2ViU29ja2V0RXJyb3JEb2NzTGluaycsJ19pc1ByaW1pdGl2ZVR5cGUnLCc0NzYzODcwUVVrTGxOJywnbWFwJywnYmlnaW50JywnX3NldE5vZGVFeHByZXNzaW9uUGF0aCcsJ3R5cGUnLCdfcF9sZW5ndGgnLCdkZXB0aCcsJzEnLCdzeW1ib2wnLCduZWdhdGl2ZUluZmluaXR5JywnX3Byb3BlcnR5JywnbmFtZScsJ3ZlcnNpb25zJywnX3F1b3RlZFJlZ0V4cCcsJ19hZGRpdGlvbmFsTWV0YWRhdGEnLCdleHByZXNzaW9uc1RvRXZhbHVhdGUnLCdlbnYnLCdjbG9zZScsJ3ZhbHVlJywnYm9vbGVhbicsJ2Rpc2FibGVkVHJhY2UnLCdzb3J0UHJvcHMnLCdfYXR0ZW1wdFRvUmVjb25uZWN0U2hvcnRseScsJyVjXFxcXHgyMENvbnNvbGVcXFxceDIwTmluamFcXFxceDIwZXh0ZW5zaW9uXFxcXHgyMGlzXFxcXHgyMGNvbm5lY3RlZFxcXFx4MjB0b1xcXFx4MjAnLCdmdW5jTmFtZScsJ3NsaWNlJywnX2Nvbm5lY3RpbmcnLCdORVhUX1JVTlRJTUUnLCdfcHJvY2Vzc1RyZWVOb2RlUmVzdWx0Jywnc3RhY2tUcmFjZUxpbWl0JywnbG9jYXRpb24nLCdfaXNVbmRlZmluZWQnLCdfb2JqZWN0VG9TdHJpbmcnLCdfdHJlZU5vZGVQcm9wZXJ0aWVzQmVmb3JlRnVsbFZhbHVlJywnX3NvcnRQcm9wcycsJ19jbGVhbk5vZGUnLCdhbGxTdHJMZW5ndGgnLCd0aW1lJywnOUNHdGVrYScsJ25vdycsJycsJ3RvdGFsU3RyTGVuZ3RoJywnX3NldE5vZGVQZXJtaXNzaW9ucycsJ2RlZmluZVByb3BlcnR5JywncmVwbGFjZScsJ19hbGxvd2VkVG9TZW5kJywncm9vdF9leHAnLCdudW1iZXInLCc3MDY0NzRncWRqSmknLCd0cmFjZScsJ3Rlc3QnLCdfZ2V0T3duUHJvcGVydHlOYW1lcycsJ2V2ZW50UmVjZWl2ZWRDYWxsYmFjaycsJ3JlYWR5U3RhdGUnLCcyNzg2NDBuenNIaWQnLCdob3N0bmFtZScsJ3N0cmluZycsJ3VuZGVmaW5lZCcsJ25vRnVuY3Rpb25zJywnY291bnQnLCdsZW5ndGgnLCdpbmRleCcsJ19hZGRMb2FkTm9kZScsJ19jb25uZWN0QXR0ZW1wdENvdW50JywnX3BfbmFtZScsJ2FuZ3VsYXInLCdbb2JqZWN0XFxcXHgyMEFycmF5XScsJ3JlbWl4JywnaG9zdCcsJ3NlbmQnLCdvYmplY3QnLCdfbWF4Q29ubmVjdEF0dGVtcHRDb3VudCcsJ19jb25zb2xlX25pbmphX3Nlc3Npb24nLCdwcm90b3R5cGUnLCdwYXRoJywnbG9nZ2VyXFxcXHgyMHdlYnNvY2tldFxcXFx4MjBlcnJvcicsJzU4MTQzRU9KT1JUJywnZ2V0T3duUHJvcGVydHlOYW1lcycsJ3Byb3BzJywnbnV4dCcsJzkybmpzSXhQJywnX3NldE5vZGVMYWJlbCcsJ3RoZW4nLCdfYWRkT2JqZWN0UHJvcGVydHknLCdfaGFzTWFwT25JdHNQYXRoJywnc3BsaXQnLCdpbmNsdWRlcycsJ3VybCcsJ0NvbnNvbGVcXFxceDIwTmluamFcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMHNlbmRcXFxceDIwbG9ncyxcXFxceDIwcmVzdGFydGluZ1xcXFx4MjB0aGVcXFxceDIwcHJvY2Vzc1xcXFx4MjBtYXlcXFxceDIwaGVscDtcXFxceDIwYWxzb1xcXFx4MjBzZWVcXFxceDIwJyxbXFxcImxvY2FsaG9zdFxcXCIsXFxcIjEyNy4wLjAuMVxcXCIsXFxcImV4YW1wbGUuY3lwcmVzcy5pb1xcXCIsXFxcIkpvc3RhclNhblxcXCIsXFxcIjE5Mi4xNjguNTYuMVxcXCIsXFxcIjE5Mi4xNjguMS4xMFxcXCJdLCdhcmdzJywnTkVHQVRJVkVfSU5GSU5JVFknLCdsb2dnZXJcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGNvbm5lY3RcXFxceDIwdG9cXFxceDIwaG9zdCcsJzg2OTQ2NURsUEhIdScsJ19wXycsJ3RvTG93ZXJDYXNlJywndW5rbm93bicsJ0NvbnNvbGVcXFxceDIwTmluamFcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMHNlbmRcXFxceDIwbG9ncyxcXFxceDIwcmVmcmVzaGluZ1xcXFx4MjB0aGVcXFxceDIwcGFnZVxcXFx4MjBtYXlcXFxceDIwaGVscDtcXFxceDIwYWxzb1xcXFx4MjBzZWVcXFxceDIwJywnZG9ja2VyaXplZEFwcCcsJ2VsYXBzZWQnLCdyZWR1Y2VMaW1pdHMnLCdhdXRvRXhwYW5kUHJldmlvdXNPYmplY3RzJywnNDI0MFJvQ2xBaicsJ2F1dG9FeHBhbmRMaW1pdCcsJ19XZWJTb2NrZXQnLCdzdWJzdHInLCdwdXNoJywnY29uY2F0JywnX2NhcElmU3RyaW5nJywnam9pbicsJ2VudW1lcmFibGUnLCdzZXQnLCdfaXNTZXQnXTtfMHg1MjljPWZ1bmN0aW9uKCl7cmV0dXJuIF8weDM3NTFlMzt9O3JldHVybiBfMHg1MjljKCk7fXZhciBfMHg0Y2Y5NTk9XzB4NWRiNDtmdW5jdGlvbiBfMHg1ZGI0KF8weDIxYTNkMyxfMHg1NGIyMDEpe3ZhciBfMHg1MjljNWM9XzB4NTI5YygpO3JldHVybiBfMHg1ZGI0PWZ1bmN0aW9uKF8weDVkYjQ4YSxfMHgzNzIxZmMpe18weDVkYjQ4YT1fMHg1ZGI0OGEtMHg4MDt2YXIgXzB4NDg4MGE1PV8weDUyOWM1Y1tfMHg1ZGI0OGFdO3JldHVybiBfMHg0ODgwYTU7fSxfMHg1ZGI0KF8weDIxYTNkMyxfMHg1NGIyMDEpO30oZnVuY3Rpb24oXzB4NTIwNjY2LF8weDExNDdlNCl7dmFyIF8weDIzZWIwMT1fMHg1ZGI0LF8weDMwY2RmYj1fMHg1MjA2NjYoKTt3aGlsZSghIVtdKXt0cnl7dmFyIF8weDM0MzNiYj1wYXJzZUludChfMHgyM2ViMDEoMHhmZikpLzB4MSooLXBhcnNlSW50KF8weDIzZWIwMSgweGE3KSkvMHgyKStwYXJzZUludChfMHgyM2ViMDEoMHhjMykpLzB4MyoocGFyc2VJbnQoXzB4MjNlYjAxKDB4YzcpKS8weDQpKy1wYXJzZUludChfMHgyM2ViMDEoMHhkNCkpLzB4NSstcGFyc2VJbnQoXzB4MjNlYjAxKDB4YWQpKS8weDYrcGFyc2VJbnQoXzB4MjNlYjAxKDB4MTE0KSkvMHg3KigtcGFyc2VJbnQoXzB4MjNlYjAxKDB4ZGQpKS8weDgpKy1wYXJzZUludChfMHgyM2ViMDEoMHg5ZCkpLzB4OSooLXBhcnNlSW50KF8weDIzZWIwMSgweDE2MCkpLzB4YSkrcGFyc2VJbnQoXzB4MjNlYjAxKDB4ZjcpKS8weGI7aWYoXzB4MzQzM2JiPT09XzB4MTE0N2U0KWJyZWFrO2Vsc2UgXzB4MzBjZGZiWydwdXNoJ10oXzB4MzBjZGZiWydzaGlmdCddKCkpO31jYXRjaChfMHgyODFjYmMpe18weDMwY2RmYlsncHVzaCddKF8weDMwY2RmYlsnc2hpZnQnXSgpKTt9fX0oXzB4NTI5YywweDNmY2NhKSk7dmFyIEs9T2JqZWN0WydjcmVhdGUnXSxRPU9iamVjdFtfMHg0Y2Y5NTkoMHhhMildLEc9T2JqZWN0W18weDRjZjk1OSgweDE1NildLGVlPU9iamVjdFtfMHg0Y2Y5NTkoMHhjNCldLHRlPU9iamVjdFsnZ2V0UHJvdG90eXBlT2YnXSxuZT1PYmplY3RbXzB4NGNmOTU5KDB4YzApXVtfMHg0Y2Y5NTkoMHgxMjEpXSxyZT0oXzB4MTE1ZGVmLF8weDUzMmM0YSxfMHhjNzcxOTgsXzB4MmE2Y2UyKT0+e3ZhciBfMHg0NjdmOTE9XzB4NGNmOTU5O2lmKF8weDUzMmM0YSYmdHlwZW9mIF8weDUzMmM0YT09XzB4NDY3ZjkxKDB4YmQpfHx0eXBlb2YgXzB4NTMyYzRhPT1fMHg0NjdmOTEoMHgxMzEpKXtmb3IobGV0IF8weDMzZDZkYyBvZiBlZShfMHg1MzJjNGEpKSFuZVtfMHg0NjdmOTEoMHgxMWUpXShfMHgxMTVkZWYsXzB4MzNkNmRjKSYmXzB4MzNkNmRjIT09XzB4Yzc3MTk4JiZRKF8weDExNWRlZixfMHgzM2Q2ZGMseydnZXQnOigpPT5fMHg1MzJjNGFbXzB4MzNkNmRjXSwnZW51bWVyYWJsZSc6IShfMHgyYTZjZTI9RyhfMHg1MzJjNGEsXzB4MzNkNmRjKSl8fF8weDJhNmNlMltfMHg0NjdmOTEoMHhlNSldfSk7fXJldHVybiBfMHgxMTVkZWY7fSxWPShfMHgyODQwYWQsXzB4MjU1MTRjLF8weDNlMmU0YSk9PihfMHgzZTJlNGE9XzB4Mjg0MGFkIT1udWxsP0sodGUoXzB4Mjg0MGFkKSk6e30scmUoXzB4MjU1MTRjfHwhXzB4Mjg0MGFkfHwhXzB4Mjg0MGFkW18weDRjZjk1OSgweDEyNSldP1EoXzB4M2UyZTRhLF8weDRjZjk1OSgweDEwZSkseyd2YWx1ZSc6XzB4Mjg0MGFkLCdlbnVtZXJhYmxlJzohMHgwfSk6XzB4M2UyZTRhLF8weDI4NDBhZCkpLHg9Y2xhc3N7Y29uc3RydWN0b3IoXzB4MzVhMWIxLF8weDFmY2NmZSxfMHg1ZjFkM2IsXzB4YTE1NjhiLF8weDEwODFhMyxfMHgzZThkMmYpe3ZhciBfMHhlNGYxNzI9XzB4NGNmOTU5O3RoaXNbJ2dsb2JhbCddPV8weDM1YTFiMSx0aGlzWydob3N0J109XzB4MWZjY2ZlLHRoaXNbXzB4ZTRmMTcyKDB4MTI0KV09XzB4NWYxZDNiLHRoaXNbJ25vZGVNb2R1bGVzJ109XzB4YTE1NjhiLHRoaXNbJ2RvY2tlcml6ZWRBcHAnXT1fMHgxMDgxYTMsdGhpc1tfMHhlNGYxNzIoMHhhYildPV8weDNlOGQyZix0aGlzW18weGU0ZjE3MigweGE0KV09ITB4MCx0aGlzW18weGU0ZjE3MigweDEyYyldPSEweDAsdGhpc1snX2Nvbm5lY3RlZCddPSEweDEsdGhpc1snX2Nvbm5lY3RpbmcnXT0hMHgxLHRoaXNbXzB4ZTRmMTcyKDB4MTNhKV09XzB4MzVhMWIxWydwcm9jZXNzJ10/LltfMHhlNGYxNzIoMHg4NyldPy5bXzB4ZTRmMTcyKDB4OTIpXT09PV8weGU0ZjE3MigweDExMiksdGhpc1tfMHhlNGYxNzIoMHgxNTUpXT0hdGhpc1snZ2xvYmFsJ11bXzB4ZTRmMTcyKDB4MTI4KV0/LlsndmVyc2lvbnMnXT8uW18weGU0ZjE3MigweGVkKV0mJiF0aGlzW18weGU0ZjE3MigweDEzYSldLHRoaXNbXzB4ZTRmMTcyKDB4MTA3KV09bnVsbCx0aGlzW18weGU0ZjE3MigweGI2KV09MHgwLHRoaXNbXzB4ZTRmMTcyKDB4YmUpXT0weDE0LHRoaXNbXzB4ZTRmMTcyKDB4MTVlKV09J2h0dHBzOi8vdGlueXVybC5jb20vMzd4OGI3OXQnLHRoaXNbXzB4ZTRmMTcyKDB4MTM2KV09KHRoaXNbXzB4ZTRmMTcyKDB4MTU1KV0/XzB4ZTRmMTcyKDB4ZDgpOl8weGU0ZjE3MigweGNmKSkrdGhpc1tfMHhlNGYxNzIoMHgxNWUpXTt9YXN5bmNbJ2dldFdlYlNvY2tldENsYXNzJ10oKXt2YXIgXzB4NTlmZmFjPV8weDRjZjk1OTtpZih0aGlzW18weDU5ZmZhYygweDEwNyldKXJldHVybiB0aGlzW18weDU5ZmZhYygweDEwNyldO2xldCBfMHg1YTdjY2Y7aWYodGhpc1snX2luQnJvd3NlciddfHx0aGlzW18weDU5ZmZhYygweDEzYSldKV8weDVhN2NjZj10aGlzW18weDU5ZmZhYygweDE0YildW18weDU5ZmZhYygweDE1YSldO2Vsc2V7aWYodGhpc1tfMHg1OWZmYWMoMHgxNGIpXVsncHJvY2VzcyddPy5bXzB4NTlmZmFjKDB4ZGYpXSlfMHg1YTdjY2Y9dGhpc1snZ2xvYmFsJ11bXzB4NTlmZmFjKDB4MTI4KV0/LlsnX1dlYlNvY2tldCddO2Vsc2UgdHJ5e2xldCBfMHg0ZDc0OGM9YXdhaXQgaW1wb3J0KF8weDU5ZmZhYygweGMxKSk7XzB4NWE3Y2NmPShhd2FpdCBpbXBvcnQoKGF3YWl0IGltcG9ydChfMHg1OWZmYWMoMHhjZSkpKVtfMHg1OWZmYWMoMHgxMzApXShfMHg0ZDc0OGNbXzB4NTlmZmFjKDB4ZTQpXSh0aGlzW18weDU5ZmZhYygweGVlKV0sJ3dzL2luZGV4LmpzJykpW18weDU5ZmZhYygweDE0OSldKCkpKVtfMHg1OWZmYWMoMHgxMGUpXTt9Y2F0Y2h7dHJ5e18weDVhN2NjZj1yZXF1aXJlKHJlcXVpcmUoXzB4NTlmZmFjKDB4YzEpKVsnam9pbiddKHRoaXNbXzB4NTlmZmFjKDB4ZWUpXSwnd3MnKSk7fWNhdGNoe3Rocm93IG5ldyBFcnJvcignZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGZpbmRcXFxceDIwYW5kXFxcXHgyMGxvYWRcXFxceDIwV2ViU29ja2V0Jyk7fX19cmV0dXJuIHRoaXNbXzB4NTlmZmFjKDB4MTA3KV09XzB4NWE3Y2NmLF8weDVhN2NjZjt9W18weDRjZjk1OSgweGVmKV0oKXt2YXIgXzB4NDEyZGE3PV8weDRjZjk1OTt0aGlzW18weDQxMmRhNygweDkxKV18fHRoaXNbXzB4NDEyZGE3KDB4MTUyKV18fHRoaXNbXzB4NDEyZGE3KDB4YjYpXT49dGhpc1tfMHg0MTJkYTcoMHhiZSldfHwodGhpc1snX2FsbG93ZWRUb0Nvbm5lY3RPblNlbmQnXT0hMHgxLHRoaXNbXzB4NDEyZGE3KDB4OTEpXT0hMHgwLHRoaXNbXzB4NDEyZGE3KDB4YjYpXSsrLHRoaXNbXzB4NDEyZGE3KDB4MTE1KV09bmV3IFByb21pc2UoKF8weDgxYWM1MixfMHg0ZGU3MzQpPT57dmFyIF8weDEwODUzNj1fMHg0MTJkYTc7dGhpc1snZ2V0V2ViU29ja2V0Q2xhc3MnXSgpW18weDEwODUzNigweGM5KV0oXzB4NTQ3MGMwPT57dmFyIF8weDVlNjMyZj1fMHgxMDg1MzY7bGV0IF8weDQxZjE0Yj1uZXcgXzB4NTQ3MGMwKF8weDVlNjMyZigweDEzNSkrKCF0aGlzW18weDVlNjMyZigweDE1NSldJiZ0aGlzW18weDVlNjMyZigweGQ5KV0/XzB4NWU2MzJmKDB4MTRlKTp0aGlzW18weDVlNjMyZigweGJiKV0pKyc6Jyt0aGlzW18weDVlNjMyZigweDEyNCldKTtfMHg0MWYxNGJbXzB4NWU2MzJmKDB4MTI5KV09KCk9Pnt2YXIgXzB4M2NlZmI1PV8weDVlNjMyZjt0aGlzW18weDNjZWZiNSgweGE0KV09ITB4MSx0aGlzW18weDNjZWZiNSgweDE0YyldKF8weDQxZjE0YiksdGhpc1snX2F0dGVtcHRUb1JlY29ubmVjdFNob3J0bHknXSgpLF8weDRkZTczNChuZXcgRXJyb3IoXzB4M2NlZmI1KDB4YzIpKSk7fSxfMHg0MWYxNGJbXzB4NWU2MzJmKDB4MTQ3KV09KCk9Pnt2YXIgXzB4NGQ5YTRhPV8weDVlNjMyZjt0aGlzW18weDRkOWE0YSgweDE1NSldfHxfMHg0MWYxNGJbXzB4NGQ5YTRhKDB4MTQ4KV0mJl8weDQxZjE0YltfMHg0ZDlhNGEoMHgxNDgpXVtfMHg0ZDlhNGEoMHgxMTApXSYmXzB4NDFmMTRiW18weDRkOWE0YSgweDE0OCldW18weDRkOWE0YSgweDExMCldKCksXzB4ODFhYzUyKF8weDQxZjE0Yik7fSxfMHg0MWYxNGJbXzB4NWU2MzJmKDB4ZmEpXT0oKT0+e3ZhciBfMHg1ZGUxZjg9XzB4NWU2MzJmO3RoaXNbJ19hbGxvd2VkVG9Db25uZWN0T25TZW5kJ109ITB4MCx0aGlzWydfZGlzcG9zZVdlYnNvY2tldCddKF8weDQxZjE0YiksdGhpc1tfMHg1ZGUxZjgoMHg4ZCldKCk7fSxfMHg0MWYxNGJbJ29ubWVzc2FnZSddPV8weDVjZjNmND0+e3ZhciBfMHg1MTg1MjE9XzB4NWU2MzJmO3RyeXtpZighXzB4NWNmM2Y0Py5bXzB4NTE4NTIxKDB4ZWIpXXx8IXRoaXNbXzB4NTE4NTIxKDB4YWIpXSlyZXR1cm47bGV0IF8weDNiYzQxOD1KU09OWydwYXJzZSddKF8weDVjZjNmNFsnZGF0YSddKTt0aGlzWydldmVudFJlY2VpdmVkQ2FsbGJhY2snXShfMHgzYmM0MThbJ21ldGhvZCddLF8weDNiYzQxOFsnYXJncyddLHRoaXNbXzB4NTE4NTIxKDB4MTRiKV0sdGhpc1tfMHg1MTg1MjEoMHgxNTUpXSk7fWNhdGNoe319O30pWyd0aGVuJ10oXzB4NDRlMzdlPT4odGhpc1tfMHgxMDg1MzYoMHgxNTIpXT0hMHgwLHRoaXNbJ19jb25uZWN0aW5nJ109ITB4MSx0aGlzW18weDEwODUzNigweDEyYyldPSEweDEsdGhpc1tfMHgxMDg1MzYoMHhhNCldPSEweDAsdGhpc1tfMHgxMDg1MzYoMHhiNildPTB4MCxfMHg0NGUzN2UpKVtfMHgxMDg1MzYoMHgxNGYpXShfMHg0MzQxYTU9Pih0aGlzWydfY29ubmVjdGVkJ109ITB4MSx0aGlzW18weDEwODUzNigweDkxKV09ITB4MSxjb25zb2xlW18weDEwODUzNigweGVjKV0oXzB4MTA4NTM2KDB4MTRkKSt0aGlzW18weDEwODUzNigweDE1ZSldKSxfMHg0ZGU3MzQobmV3IEVycm9yKCdmYWlsZWRcXFxceDIwdG9cXFxceDIwY29ubmVjdFxcXFx4MjB0b1xcXFx4MjBob3N0OlxcXFx4MjAnKyhfMHg0MzQxYTUmJl8weDQzNDFhNVsnbWVzc2FnZSddKSkpKSk7fSkpO31bXzB4NGNmOTU5KDB4MTRjKV0oXzB4NGFkNzI1KXt2YXIgXzB4NDE3OTI5PV8weDRjZjk1OTt0aGlzW18weDQxNzkyOSgweDE1MildPSEweDEsdGhpc1tfMHg0MTc5MjkoMHg5MSldPSEweDE7dHJ5e18weDRhZDcyNVsnb25jbG9zZSddPW51bGwsXzB4NGFkNzI1WydvbmVycm9yJ109bnVsbCxfMHg0YWQ3MjVbXzB4NDE3OTI5KDB4MTQ3KV09bnVsbDt9Y2F0Y2h7fXRyeXtfMHg0YWQ3MjVbXzB4NDE3OTI5KDB4YWMpXTwweDImJl8weDRhZDcyNVtfMHg0MTc5MjkoMHg4OCldKCk7fWNhdGNoe319WydfYXR0ZW1wdFRvUmVjb25uZWN0U2hvcnRseSddKCl7dmFyIF8weDFmNDQ1OT1fMHg0Y2Y5NTk7Y2xlYXJUaW1lb3V0KHRoaXNbXzB4MWY0NDU5KDB4MTU4KV0pLCEodGhpc1tfMHgxZjQ0NTkoMHhiNildPj10aGlzW18weDFmNDQ1OSgweGJlKV0pJiYodGhpc1tfMHgxZjQ0NTkoMHgxNTgpXT1zZXRUaW1lb3V0KCgpPT57dmFyIF8weGZmZTgzNT1fMHgxZjQ0NTk7dGhpc1snX2Nvbm5lY3RlZCddfHx0aGlzW18weGZmZTgzNSgweDkxKV18fCh0aGlzWydfY29ubmVjdFRvSG9zdE5vdyddKCksdGhpc1tfMHhmZmU4MzUoMHgxMTUpXT8uWydjYXRjaCddKCgpPT50aGlzW18weGZmZTgzNSgweDhkKV0oKSkpO30sMHgxZjQpLHRoaXNbXzB4MWY0NDU5KDB4MTU4KV1bXzB4MWY0NDU5KDB4MTEwKV0mJnRoaXNbXzB4MWY0NDU5KDB4MTU4KV1bXzB4MWY0NDU5KDB4MTEwKV0oKSk7fWFzeW5jW18weDRjZjk1OSgweGJjKV0oXzB4MzRjOTc1KXt2YXIgXzB4MmExZTU3PV8weDRjZjk1OTt0cnl7aWYoIXRoaXNbJ19hbGxvd2VkVG9TZW5kJ10pcmV0dXJuO3RoaXNbXzB4MmExZTU3KDB4MTJjKV0mJnRoaXNbXzB4MmExZTU3KDB4ZWYpXSgpLChhd2FpdCB0aGlzW18weDJhMWU1NygweDExNSldKVtfMHgyYTFlNTcoMHhiYyldKEpTT05bXzB4MmExZTU3KDB4MTBjKV0oXzB4MzRjOTc1KSk7fWNhdGNoKF8weDRmZTEyNSl7Y29uc29sZVsnd2FybiddKHRoaXNbXzB4MmExZTU3KDB4MTM2KV0rJzpcXFxceDIwJysoXzB4NGZlMTI1JiZfMHg0ZmUxMjVbXzB4MmExZTU3KDB4MTFkKV0pKSx0aGlzW18weDJhMWU1NygweGE0KV09ITB4MSx0aGlzW18weDJhMWU1NygweDhkKV0oKTt9fX07ZnVuY3Rpb24gcShfMHg1ODM4YWYsXzB4MzI0YWYwLF8weDViOTFhMSxfMHg0ODhlY2YsXzB4NDkwNmRmLF8weDFjYzM1NixfMHgzOGFlNjUsXzB4NTY0ZGYxPWllKXt2YXIgXzB4MTdlZWZhPV8weDRjZjk1OTtsZXQgXzB4M2IzNzk0PV8weDViOTFhMVtfMHgxN2VlZmEoMHhjYyldKCcsJylbXzB4MTdlZWZhKDB4MTYxKV0oXzB4MjU3OGMxPT57dmFyIF8weDVkMWJlZj1fMHgxN2VlZmE7dHJ5e2lmKCFfMHg1ODM4YWZbJ19jb25zb2xlX25pbmphX3Nlc3Npb24nXSl7bGV0IF8weDNhNTYxZD1fMHg1ODM4YWZbJ3Byb2Nlc3MnXT8uW18weDVkMWJlZigweDgzKV0/LltfMHg1ZDFiZWYoMHhlZCldfHxfMHg1ODM4YWZbXzB4NWQxYmVmKDB4MTI4KV0/LlsnZW52J10/LltfMHg1ZDFiZWYoMHg5MildPT09XzB4NWQxYmVmKDB4MTEyKTsoXzB4NDkwNmRmPT09XzB4NWQxYmVmKDB4MTIwKXx8XzB4NDkwNmRmPT09XzB4NWQxYmVmKDB4YmEpfHxfMHg0OTA2ZGY9PT1fMHg1ZDFiZWYoMHgxMDUpfHxfMHg0OTA2ZGY9PT1fMHg1ZDFiZWYoMHhiOCkpJiYoXzB4NDkwNmRmKz1fMHgzYTU2MWQ/XzB4NWQxYmVmKDB4MTJkKTonXFxcXHgyMGJyb3dzZXInKSxfMHg1ODM4YWZbXzB4NWQxYmVmKDB4YmYpXT17J2lkJzorbmV3IERhdGUoKSwndG9vbCc6XzB4NDkwNmRmfSxfMHgzOGFlNjUmJl8weDQ5MDZkZiYmIV8weDNhNTYxZCYmY29uc29sZVsnbG9nJ10oXzB4NWQxYmVmKDB4OGUpKyhfMHg0OTA2ZGZbJ2NoYXJBdCddKDB4MClbJ3RvVXBwZXJDYXNlJ10oKStfMHg0OTA2ZGZbXzB4NWQxYmVmKDB4ZTApXSgweDEpKSsnLCcsJ2JhY2tncm91bmQ6XFxcXHgyMHJnYigzMCwzMCwzMCk7XFxcXHgyMGNvbG9yOlxcXFx4MjByZ2IoMjU1LDIxMyw5MiknLCdzZWVcXFxceDIwaHR0cHM6Ly90aW55dXJsLmNvbS8ydnQ4anh6d1xcXFx4MjBmb3JcXFxceDIwbW9yZVxcXFx4MjBpbmZvLicpO31sZXQgXzB4M2M2ZDUzPW5ldyB4KF8weDU4MzhhZixfMHgzMjRhZjAsXzB4MjU3OGMxLF8weDQ4OGVjZixfMHgxY2MzNTYsXzB4NTY0ZGYxKTtyZXR1cm4gXzB4M2M2ZDUzWydzZW5kJ11bXzB4NWQxYmVmKDB4MTViKV0oXzB4M2M2ZDUzKTt9Y2F0Y2goXzB4MWFhOWRlKXtyZXR1cm4gY29uc29sZVtfMHg1ZDFiZWYoMHhlYyldKF8weDVkMWJlZigweGQzKSxfMHgxYWE5ZGUmJl8weDFhYTlkZVtfMHg1ZDFiZWYoMHgxMWQpXSksKCk9Pnt9O319KTtyZXR1cm4gXzB4MmMxZGJkPT5fMHgzYjM3OTRbXzB4MTdlZWZhKDB4MTIyKV0oXzB4YjQwYzAyPT5fMHhiNDBjMDIoXzB4MmMxZGJkKSk7fWZ1bmN0aW9uIGllKF8weGQ0NjJlNSxfMHgxYTFmNzIsXzB4MTdlMDA1LF8weDE5MDJjNyl7dmFyIF8weDRmNTQxZD1fMHg0Y2Y5NTk7XzB4MTkwMmM3JiZfMHhkNDYyZTU9PT1fMHg0ZjU0MWQoMHgxMTgpJiZfMHgxN2UwMDVbJ2xvY2F0aW9uJ11bXzB4NGY1NDFkKDB4MTE4KV0oKTt9ZnVuY3Rpb24gYihfMHgyYzgzY2Ipe3ZhciBfMHg1YjY1NWY9XzB4NGNmOTU5O2xldCBfMHg0M2NjMjc9ZnVuY3Rpb24oXzB4M2E2NjhmLF8weDJlMDI2MCl7cmV0dXJuIF8weDJlMDI2MC1fMHgzYTY2OGY7fSxfMHg1M2JiYTA7aWYoXzB4MmM4M2NiW18weDViNjU1ZigweDEyZildKV8weDUzYmJhMD1mdW5jdGlvbigpe3ZhciBfMHgyNGMxZjI9XzB4NWI2NTVmO3JldHVybiBfMHgyYzgzY2JbXzB4MjRjMWYyKDB4MTJmKV1bXzB4MjRjMWYyKDB4OWUpXSgpO307ZWxzZXtpZihfMHgyYzgzY2JbXzB4NWI2NTVmKDB4MTI4KV0mJl8weDJjODNjYlsncHJvY2VzcyddWydocnRpbWUnXSYmXzB4MmM4M2NiW18weDViNjU1ZigweDEyOCldPy5bXzB4NWI2NTVmKDB4ODcpXT8uW18weDViNjU1ZigweDkyKV0hPT0nZWRnZScpXzB4NTNiYmEwPWZ1bmN0aW9uKCl7dmFyIF8weDVkMjk2ZD1fMHg1YjY1NWY7cmV0dXJuIF8weDJjODNjYltfMHg1ZDI5NmQoMHgxMjgpXVsnaHJ0aW1lJ10oKTt9LF8weDQzY2MyNz1mdW5jdGlvbihfMHg1ZGVhNWQsXzB4NDM0NjY5KXtyZXR1cm4gMHgzZTgqKF8weDQzNDY2OVsweDBdLV8weDVkZWE1ZFsweDBdKSsoXzB4NDM0NjY5WzB4MV0tXzB4NWRlYTVkWzB4MV0pLzB4ZjQyNDA7fTtlbHNlIHRyeXtsZXQge3BlcmZvcm1hbmNlOl8weDFhMjZlNX09cmVxdWlyZSgncGVyZl9ob29rcycpO18weDUzYmJhMD1mdW5jdGlvbigpe3JldHVybiBfMHgxYTI2ZTVbJ25vdyddKCk7fTt9Y2F0Y2h7XzB4NTNiYmEwPWZ1bmN0aW9uKCl7cmV0dXJuK25ldyBEYXRlKCk7fTt9fXJldHVybnsnZWxhcHNlZCc6XzB4NDNjYzI3LCd0aW1lU3RhbXAnOl8weDUzYmJhMCwnbm93JzooKT0+RGF0ZVtfMHg1YjY1NWYoMHg5ZSldKCl9O31mdW5jdGlvbiBYKF8weDJmYzdiMCxfMHgxNWY2YjEsXzB4MmI5MGJkKXt2YXIgXzB4MWViYzZjPV8weDRjZjk1OTtpZihfMHgyZmM3YjBbXzB4MWViYzZjKDB4MTBmKV0hPT12b2lkIDB4MClyZXR1cm4gXzB4MmZjN2IwW18weDFlYmM2YygweDEwZildO2xldCBfMHg0ZTA4MWM9XzB4MmZjN2IwW18weDFlYmM2YygweDEyOCldPy5bJ3ZlcnNpb25zJ10/LltfMHgxZWJjNmMoMHhlZCldfHxfMHgyZmM3YjBbXzB4MWViYzZjKDB4MTI4KV0/LltfMHgxZWJjNmMoMHg4NyldPy5bXzB4MWViYzZjKDB4OTIpXT09PV8weDFlYmM2YygweDExMik7cmV0dXJuIF8weDRlMDgxYyYmXzB4MmI5MGJkPT09XzB4MWViYzZjKDB4YzYpP18weDJmYzdiMFsnX2NvbnNvbGVOaW5qYUFsbG93ZWRUb1N0YXJ0J109ITB4MTpfMHgyZmM3YjBbXzB4MWViYzZjKDB4MTBmKV09XzB4NGUwODFjfHwhXzB4MTVmNmIxfHxfMHgyZmM3YjBbJ2xvY2F0aW9uJ10/LltfMHgxZWJjNmMoMHhhZSldJiZfMHgxNWY2YjFbXzB4MWViYzZjKDB4Y2QpXShfMHgyZmM3YjBbXzB4MWViYzZjKDB4OTUpXVtfMHgxZWJjNmMoMHhhZSldKSxfMHgyZmM3YjBbXzB4MWViYzZjKDB4MTBmKV07fWZ1bmN0aW9uIEgoXzB4NGMyY2FkLF8weDU5NjNiMCxfMHg1ZDRkYTcsXzB4NWI1NjkzKXt2YXIgXzB4MTZjZGYwPV8weDRjZjk1OTtfMHg0YzJjYWQ9XzB4NGMyY2FkLF8weDU5NjNiMD1fMHg1OTYzYjAsXzB4NWQ0ZGE3PV8weDVkNGRhNyxfMHg1YjU2OTM9XzB4NWI1NjkzO2xldCBfMHgyMzAyNGY9YihfMHg0YzJjYWQpLF8weDFiZmJkNz1fMHgyMzAyNGZbJ2VsYXBzZWQnXSxfMHgxZjZmYWE9XzB4MjMwMjRmW18weDE2Y2RmMCgweDEyYSldO2NsYXNzIF8weDM3MDk4N3tjb25zdHJ1Y3Rvcigpe3ZhciBfMHg2MDZlNDE9XzB4MTZjZGYwO3RoaXNbJ19rZXlTdHJSZWdFeHAnXT0vXig/ISg/OmRvfGlmfGlufGZvcnxsZXR8bmV3fHRyeXx2YXJ8Y2FzZXxlbHNlfGVudW18ZXZhbHxmYWxzZXxudWxsfHRoaXN8dHJ1ZXx2b2lkfHdpdGh8YnJlYWt8Y2F0Y2h8Y2xhc3N8Y29uc3R8c3VwZXJ8dGhyb3d8d2hpbGV8eWllbGR8ZGVsZXRlfGV4cG9ydHxpbXBvcnR8cHVibGljfHJldHVybnxzdGF0aWN8c3dpdGNofHR5cGVvZnxkZWZhdWx0fGV4dGVuZHN8ZmluYWxseXxwYWNrYWdlfHByaXZhdGV8Y29udGludWV8ZGVidWdnZXJ8ZnVuY3Rpb258YXJndW1lbnRzfGludGVyZmFjZXxwcm90ZWN0ZWR8aW1wbGVtZW50c3xpbnN0YW5jZW9mKSQpW18kYS16QS1aXFxcXHhBMC1cXFxcdUZGRkZdW18kYS16QS1aMC05XFxcXHhBMC1cXFxcdUZGRkZdKiQvLHRoaXNbJ19udW1iZXJSZWdFeHAnXT0vXigwfFsxLTldWzAtOV0qKSQvLHRoaXNbXzB4NjA2ZTQxKDB4ODQpXT0vJyhbXlxcXFxcXFxcJ118XFxcXFxcXFwnKSonLyx0aGlzW18weDYwNmU0MSgweDEwMyldPV8weDRjMmNhZFsndW5kZWZpbmVkJ10sdGhpc1tfMHg2MDZlNDEoMHgxMzQpXT1fMHg0YzJjYWRbXzB4NjA2ZTQxKDB4MTBkKV0sdGhpc1tfMHg2MDZlNDEoMHhmOCldPU9iamVjdFtfMHg2MDZlNDEoMHgxNTYpXSx0aGlzW18weDYwNmU0MSgweGFhKV09T2JqZWN0W18weDYwNmU0MSgweGM0KV0sdGhpc1tfMHg2MDZlNDEoMHhmMildPV8weDRjMmNhZFtfMHg2MDZlNDEoMHgxNTcpXSx0aGlzW18weDYwNmU0MSgweDE1MSldPVJlZ0V4cFtfMHg2MDZlNDEoMHhjMCldW18weDYwNmU0MSgweDE0OSldLHRoaXNbJ19kYXRlVG9TdHJpbmcnXT1EYXRlW18weDYwNmU0MSgweGMwKV1bXzB4NjA2ZTQxKDB4MTQ5KV07fVtfMHgxNmNkZjAoMHgxNDEpXShfMHgzMGNkYmYsXzB4NDcyYzQwLF8weDUwZGU4YyxfMHgzNDBiNmMpe3ZhciBfMHgyMWI1YjA9XzB4MTZjZGYwLF8weDE2MDUwNj10aGlzLF8weDM0YmIwMD1fMHg1MGRlOGNbXzB4MjFiNWIwKDB4ZjQpXTtmdW5jdGlvbiBfMHgyZmU0ZjgoXzB4M2E0ZjgzLF8weDRkOWM0YixfMHg1MzA2M2Ype3ZhciBfMHhlM2YxZWI9XzB4MjFiNWIwO18weDRkOWM0YltfMHhlM2YxZWIoMHgxNjQpXT0ndW5rbm93bicsXzB4NGQ5YzRiW18weGUzZjFlYigweDEzZCldPV8weDNhNGY4M1snbWVzc2FnZSddLF8weDQwOThkOT1fMHg1MzA2M2ZbXzB4ZTNmMWViKDB4ZWQpXVsnY3VycmVudCddLF8weDUzMDYzZlsnbm9kZSddW18weGUzZjFlYigweDEwMCldPV8weDRkOWM0YixfMHgxNjA1MDZbXzB4ZTNmMWViKDB4OTgpXShfMHg0ZDljNGIsXzB4NTMwNjNmKTt9dHJ5e18weDUwZGU4Y1tfMHgyMWI1YjAoMHhmZSldKyssXzB4NTBkZThjW18weDIxYjViMCgweGY0KV0mJl8weDUwZGU4Y1tfMHgyMWI1YjAoMHhkYyldW18weDIxYjViMCgweGUxKV0oXzB4NDcyYzQwKTt2YXIgXzB4ZDY3Mjg1LF8weDQ3N2IxYixfMHgzNWI2ODUsXzB4NDIxMzAzLF8weDNjZmJlZD1bXSxfMHgyZGQ2ODU9W10sXzB4NDEzMzBkLF8weDM2OTM5NT10aGlzW18weDIxYjViMCgweDEwYildKF8weDQ3MmM0MCksXzB4MzFmNDI3PV8weDM2OTM5NT09PV8weDIxYjViMCgweDEyYiksXzB4MjZhYTU0PSEweDEsXzB4NTQxNjY0PV8weDM2OTM5NT09PV8weDIxYjViMCgweDEzMSksXzB4NWIwYjg5PXRoaXNbXzB4MjFiNWIwKDB4MTVmKV0oXzB4MzY5Mzk1KSxfMHhjMTRkMDM9dGhpc1tfMHgyMWI1YjAoMHgxMzgpXShfMHgzNjkzOTUpLF8weDVmM2E1NT1fMHg1YjBiODl8fF8weGMxNGQwMyxfMHgzZmFlYTU9e30sXzB4NWRlYzU4PTB4MCxfMHgzYjA4NGE9ITB4MSxfMHg0MDk4ZDksXzB4MWJkMTAyPS9eKChbMS05XXsxfVswLTldKil8MCkkLztpZihfMHg1MGRlOGNbXzB4MjFiNWIwKDB4MTY2KV0pe2lmKF8weDMxZjQyNyl7aWYoXzB4NDc3YjFiPV8weDQ3MmM0MFtfMHgyMWI1YjAoMHhiMyldLF8weDQ3N2IxYj5fMHg1MGRlOGNbXzB4MjFiNWIwKDB4ZWEpXSl7Zm9yKF8weDM1YjY4NT0weDAsXzB4NDIxMzAzPV8weDUwZGU4Y1tfMHgyMWI1YjAoMHhlYSldLF8weGQ2NzI4NT1fMHgzNWI2ODU7XzB4ZDY3Mjg1PF8weDQyMTMwMztfMHhkNjcyODUrKylfMHgyZGQ2ODVbXzB4MjFiNWIwKDB4ZTEpXShfMHgxNjA1MDZbXzB4MjFiNWIwKDB4MTNlKV0oXzB4M2NmYmVkLF8weDQ3MmM0MCxfMHgzNjkzOTUsXzB4ZDY3Mjg1LF8weDUwZGU4YykpO18weDMwY2RiZlsnY2FwcGVkRWxlbWVudHMnXT0hMHgwO31lbHNle2ZvcihfMHgzNWI2ODU9MHgwLF8weDQyMTMwMz1fMHg0NzdiMWIsXzB4ZDY3Mjg1PV8weDM1YjY4NTtfMHhkNjcyODU8XzB4NDIxMzAzO18weGQ2NzI4NSsrKV8weDJkZDY4NVtfMHgyMWI1YjAoMHhlMSldKF8weDE2MDUwNltfMHgyMWI1YjAoMHgxM2UpXShfMHgzY2ZiZWQsXzB4NDcyYzQwLF8weDM2OTM5NSxfMHhkNjcyODUsXzB4NTBkZThjKSk7fV8weDUwZGU4Y1tfMHgyMWI1YjAoMHgxMDEpXSs9XzB4MmRkNjg1W18weDIxYjViMCgweGIzKV07fWlmKCEoXzB4MzY5Mzk1PT09J251bGwnfHxfMHgzNjkzOTU9PT1fMHgyMWI1YjAoMHhiMCkpJiYhXzB4NWIwYjg5JiZfMHgzNjkzOTUhPT1fMHgyMWI1YjAoMHgxM2YpJiZfMHgzNjkzOTUhPT0nQnVmZmVyJyYmXzB4MzY5Mzk1IT09XzB4MjFiNWIwKDB4MTYyKSl7dmFyIF8weDVkZDYwYT1fMHgzNDBiNmNbXzB4MjFiNWIwKDB4YzUpXXx8XzB4NTBkZThjW18weDIxYjViMCgweGM1KV07aWYodGhpc1tfMHgyMWI1YjAoMHhlNyldKF8weDQ3MmM0MCk/KF8weGQ2NzI4NT0weDAsXzB4NDcyYzQwW18weDIxYjViMCgweDEyMildKGZ1bmN0aW9uKF8weDE0YWU5Nil7dmFyIF8weDEyYjI4Yj1fMHgyMWI1YjA7aWYoXzB4NWRlYzU4KyssXzB4NTBkZThjW18weDEyYjI4YigweDEwMSldKyssXzB4NWRlYzU4Pl8weDVkZDYwYSl7XzB4M2IwODRhPSEweDA7cmV0dXJuO31pZighXzB4NTBkZThjW18weDEyYjI4YigweDExYyldJiZfMHg1MGRlOGNbXzB4MTJiMjhiKDB4ZjQpXSYmXzB4NTBkZThjW18weDEyYjI4YigweDEwMSldPl8weDUwZGU4Y1tfMHgxMmIyOGIoMHhkZSldKXtfMHgzYjA4NGE9ITB4MDtyZXR1cm47fV8weDJkZDY4NVtfMHgxMmIyOGIoMHhlMSldKF8weDE2MDUwNltfMHgxMmIyOGIoMHgxM2UpXShfMHgzY2ZiZWQsXzB4NDcyYzQwLF8weDEyYjI4YigweDEyNyksXzB4ZDY3Mjg1KyssXzB4NTBkZThjLGZ1bmN0aW9uKF8weDViNjdmNyl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIF8weDViNjdmNzt9O30oXzB4MTRhZTk2KSkpO30pKTp0aGlzW18weDIxYjViMCgweDE0NCldKF8weDQ3MmM0MCkmJl8weDQ3MmM0MFtfMHgyMWI1YjAoMHgxMjIpXShmdW5jdGlvbihfMHg0MDQ4ZDksXzB4MmE4MzgxKXt2YXIgXzB4YjBiNmIwPV8weDIxYjViMDtpZihfMHg1ZGVjNTgrKyxfMHg1MGRlOGNbJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50J10rKyxfMHg1ZGVjNTg+XzB4NWRkNjBhKXtfMHgzYjA4NGE9ITB4MDtyZXR1cm47fWlmKCFfMHg1MGRlOGNbXzB4YjBiNmIwKDB4MTFjKV0mJl8weDUwZGU4Y1tfMHhiMGI2YjAoMHhmNCldJiZfMHg1MGRlOGNbXzB4YjBiNmIwKDB4MTAxKV0+XzB4NTBkZThjW18weGIwYjZiMCgweGRlKV0pe18weDNiMDg0YT0hMHgwO3JldHVybjt9dmFyIF8weDE0YzRjZj1fMHgyYTgzODFbJ3RvU3RyaW5nJ10oKTtfMHgxNGM0Y2ZbXzB4YjBiNmIwKDB4YjMpXT4weDY0JiYoXzB4MTRjNGNmPV8weDE0YzRjZltfMHhiMGI2YjAoMHg5MCldKDB4MCwweDY0KStfMHhiMGI2YjAoMHgxM2MpKSxfMHgyZGQ2ODVbJ3B1c2gnXShfMHgxNjA1MDZbJ19hZGRQcm9wZXJ0eSddKF8weDNjZmJlZCxfMHg0NzJjNDAsJ01hcCcsXzB4MTRjNGNmLF8weDUwZGU4YyxmdW5jdGlvbihfMHg0YmZmNTgpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBfMHg0YmZmNTg7fTt9KF8weDQwNDhkOSkpKTt9KSwhXzB4MjZhYTU0KXt0cnl7Zm9yKF8weDQxMzMwZCBpbiBfMHg0NzJjNDApaWYoIShfMHgzMWY0MjcmJl8weDFiZDEwMltfMHgyMWI1YjAoMHhhOSldKF8weDQxMzMwZCkpJiYhdGhpc1tfMHgyMWI1YjAoMHgxMzkpXShfMHg0NzJjNDAsXzB4NDEzMzBkLF8weDUwZGU4Yykpe2lmKF8weDVkZWM1OCsrLF8weDUwZGU4Y1tfMHgyMWI1YjAoMHgxMDEpXSsrLF8weDVkZWM1OD5fMHg1ZGQ2MGEpe18weDNiMDg0YT0hMHgwO2JyZWFrO31pZighXzB4NTBkZThjW18weDIxYjViMCgweDExYyldJiZfMHg1MGRlOGNbXzB4MjFiNWIwKDB4ZjQpXSYmXzB4NTBkZThjWydhdXRvRXhwYW5kUHJvcGVydHlDb3VudCddPl8weDUwZGU4Y1tfMHgyMWI1YjAoMHhkZSldKXtfMHgzYjA4NGE9ITB4MDticmVhazt9XzB4MmRkNjg1WydwdXNoJ10oXzB4MTYwNTA2W18weDIxYjViMCgweGNhKV0oXzB4M2NmYmVkLF8weDNmYWVhNSxfMHg0NzJjNDAsXzB4MzY5Mzk1LF8weDQxMzMwZCxfMHg1MGRlOGMpKTt9fWNhdGNoe31pZihfMHgzZmFlYTVbXzB4MjFiNWIwKDB4MTY1KV09ITB4MCxfMHg1NDE2NjQmJihfMHgzZmFlYTVbXzB4MjFiNWIwKDB4YjcpXT0hMHgwKSwhXzB4M2IwODRhKXt2YXIgXzB4ZDg1NGYxPVtdW18weDIxYjViMCgweGUyKV0odGhpc1tfMHgyMWI1YjAoMHhhYSldKF8weDQ3MmM0MCkpW18weDIxYjViMCgweGUyKV0odGhpc1tfMHgyMWI1YjAoMHgxNTMpXShfMHg0NzJjNDApKTtmb3IoXzB4ZDY3Mjg1PTB4MCxfMHg0NzdiMWI9XzB4ZDg1NGYxWydsZW5ndGgnXTtfMHhkNjcyODU8XzB4NDc3YjFiO18weGQ2NzI4NSsrKWlmKF8weDQxMzMwZD1fMHhkODU0ZjFbXzB4ZDY3Mjg1XSwhKF8weDMxZjQyNyYmXzB4MWJkMTAyW18weDIxYjViMCgweGE5KV0oXzB4NDEzMzBkW18weDIxYjViMCgweDE0OSldKCkpKSYmIXRoaXNbXzB4MjFiNWIwKDB4MTM5KV0oXzB4NDcyYzQwLF8weDQxMzMwZCxfMHg1MGRlOGMpJiYhXzB4M2ZhZWE1WydfcF8nK18weDQxMzMwZFtfMHgyMWI1YjAoMHgxNDkpXSgpXSl7aWYoXzB4NWRlYzU4KyssXzB4NTBkZThjW18weDIxYjViMCgweDEwMSldKyssXzB4NWRlYzU4Pl8weDVkZDYwYSl7XzB4M2IwODRhPSEweDA7YnJlYWs7fWlmKCFfMHg1MGRlOGNbXzB4MjFiNWIwKDB4MTFjKV0mJl8weDUwZGU4Y1tfMHgyMWI1YjAoMHhmNCldJiZfMHg1MGRlOGNbXzB4MjFiNWIwKDB4MTAxKV0+XzB4NTBkZThjWydhdXRvRXhwYW5kTGltaXQnXSl7XzB4M2IwODRhPSEweDA7YnJlYWs7fV8weDJkZDY4NVtfMHgyMWI1YjAoMHhlMSldKF8weDE2MDUwNltfMHgyMWI1YjAoMHhjYSldKF8weDNjZmJlZCxfMHgzZmFlYTUsXzB4NDcyYzQwLF8weDM2OTM5NSxfMHg0MTMzMGQsXzB4NTBkZThjKSk7fX19fX1pZihfMHgzMGNkYmZbJ3R5cGUnXT1fMHgzNjkzOTUsXzB4NWYzYTU1PyhfMHgzMGNkYmZbXzB4MjFiNWIwKDB4ODkpXT1fMHg0NzJjNDBbXzB4MjFiNWIwKDB4MTRhKV0oKSx0aGlzW18weDIxYjViMCgweGUzKV0oXzB4MzY5Mzk1LF8weDMwY2RiZixfMHg1MGRlOGMsXzB4MzQwYjZjKSk6XzB4MzY5Mzk1PT09XzB4MjFiNWIwKDB4MTA0KT9fMHgzMGNkYmZbXzB4MjFiNWIwKDB4ODkpXT10aGlzW18weDIxYjViMCgweGZjKV1bJ2NhbGwnXShfMHg0NzJjNDApOl8weDM2OTM5NT09PV8weDIxYjViMCgweDE2Mik/XzB4MzBjZGJmW18weDIxYjViMCgweDg5KV09XzB4NDcyYzQwW18weDIxYjViMCgweDE0OSldKCk6XzB4MzY5Mzk1PT09J1JlZ0V4cCc/XzB4MzBjZGJmW18weDIxYjViMCgweDg5KV09dGhpc1snX3JlZ0V4cFRvU3RyaW5nJ11bXzB4MjFiNWIwKDB4MTFlKV0oXzB4NDcyYzQwKTpfMHgzNjkzOTU9PT1fMHgyMWI1YjAoMHgxNjgpJiZ0aGlzW18weDIxYjViMCgweGYyKV0/XzB4MzBjZGJmW18weDIxYjViMCgweDg5KV09dGhpc1tfMHgyMWI1YjAoMHhmMildW18weDIxYjViMCgweGMwKV1bXzB4MjFiNWIwKDB4MTQ5KV1bXzB4MjFiNWIwKDB4MTFlKV0oXzB4NDcyYzQwKTohXzB4NTBkZThjW18weDIxYjViMCgweDE2NildJiYhKF8weDM2OTM5NT09PV8weDIxYjViMCgweDEwMil8fF8weDM2OTM5NT09PV8weDIxYjViMCgweGIwKSkmJihkZWxldGUgXzB4MzBjZGJmW18weDIxYjViMCgweDg5KV0sXzB4MzBjZGJmWydjYXBwZWQnXT0hMHgwKSxfMHgzYjA4NGEmJihfMHgzMGNkYmZbJ2NhcHBlZFByb3BzJ109ITB4MCksXzB4NDA5OGQ5PV8weDUwZGU4Y1tfMHgyMWI1YjAoMHhlZCldW18weDIxYjViMCgweDEwMCldLF8weDUwZGU4Y1snbm9kZSddW18weDIxYjViMCgweDEwMCldPV8weDMwY2RiZix0aGlzW18weDIxYjViMCgweDk4KV0oXzB4MzBjZGJmLF8weDUwZGU4YyksXzB4MmRkNjg1W18weDIxYjViMCgweGIzKV0pe2ZvcihfMHhkNjcyODU9MHgwLF8weDQ3N2IxYj1fMHgyZGQ2ODVbXzB4MjFiNWIwKDB4YjMpXTtfMHhkNjcyODU8XzB4NDc3YjFiO18weGQ2NzI4NSsrKV8weDJkZDY4NVtfMHhkNjcyODVdKF8weGQ2NzI4NSk7fV8weDNjZmJlZFtfMHgyMWI1YjAoMHhiMyldJiYoXzB4MzBjZGJmW18weDIxYjViMCgweGM1KV09XzB4M2NmYmVkKTt9Y2F0Y2goXzB4MzkwYmM0KXtfMHgyZmU0ZjgoXzB4MzkwYmM0LF8weDMwY2RiZixfMHg1MGRlOGMpO31yZXR1cm4gdGhpc1tfMHgyMWI1YjAoMHg4NSldKF8weDQ3MmM0MCxfMHgzMGNkYmYpLHRoaXNbXzB4MjFiNWIwKDB4MTQ1KV0oXzB4MzBjZGJmLF8weDUwZGU4YyksXzB4NTBkZThjW18weDIxYjViMCgweGVkKV1bXzB4MjFiNWIwKDB4MTAwKV09XzB4NDA5OGQ5LF8weDUwZGU4Y1snbGV2ZWwnXS0tLF8weDUwZGU4Y1snYXV0b0V4cGFuZCddPV8weDM0YmIwMCxfMHg1MGRlOGNbXzB4MjFiNWIwKDB4ZjQpXSYmXzB4NTBkZThjW18weDIxYjViMCgweGRjKV1bXzB4MjFiNWIwKDB4ZjUpXSgpLF8weDMwY2RiZjt9WydfZ2V0T3duUHJvcGVydHlTeW1ib2xzJ10oXzB4MzU3YmI1KXt2YXIgXzB4NDQzN2Y0PV8weDE2Y2RmMDtyZXR1cm4gT2JqZWN0WydnZXRPd25Qcm9wZXJ0eVN5bWJvbHMnXT9PYmplY3RbXzB4NDQzN2Y0KDB4MTVkKV0oXzB4MzU3YmI1KTpbXTt9W18weDE2Y2RmMCgweGU3KV0oXzB4Mzg3NDAwKXt2YXIgXzB4MzhkYWVjPV8weDE2Y2RmMDtyZXR1cm4hIShfMHgzODc0MDAmJl8weDRjMmNhZFtfMHgzOGRhZWMoMHgxMjcpXSYmdGhpc1snX29iamVjdFRvU3RyaW5nJ10oXzB4Mzg3NDAwKT09PV8weDM4ZGFlYygweGU5KSYmXzB4Mzg3NDAwW18weDM4ZGFlYygweDEyMildKTt9W18weDE2Y2RmMCgweDEzOSldKF8weDQwNTA1OCxfMHg1OGFiZjUsXzB4MjgzMDJmKXt2YXIgXzB4NGY1M2U3PV8weDE2Y2RmMDtyZXR1cm4gXzB4MjgzMDJmWydub0Z1bmN0aW9ucyddP3R5cGVvZiBfMHg0MDUwNThbXzB4NThhYmY1XT09XzB4NGY1M2U3KDB4MTMxKTohMHgxO31bJ190eXBlJ10oXzB4MjRkNGJkKXt2YXIgXzB4NTUwOWU5PV8weDE2Y2RmMCxfMHg1NTkzYmQ9Jyc7cmV0dXJuIF8weDU1OTNiZD10eXBlb2YgXzB4MjRkNGJkLF8weDU1OTNiZD09PV8weDU1MDllOSgweGJkKT90aGlzW18weDU1MDllOSgweDk3KV0oXzB4MjRkNGJkKT09PSdbb2JqZWN0XFxcXHgyMEFycmF5XSc/XzB4NTU5M2JkPV8weDU1MDllOSgweDEyYik6dGhpc1snX29iamVjdFRvU3RyaW5nJ10oXzB4MjRkNGJkKT09PSdbb2JqZWN0XFxcXHgyMERhdGVdJz9fMHg1NTkzYmQ9XzB4NTUwOWU5KDB4MTA0KTp0aGlzWydfb2JqZWN0VG9TdHJpbmcnXShfMHgyNGQ0YmQpPT09XzB4NTUwOWU5KDB4MTEzKT9fMHg1NTkzYmQ9XzB4NTUwOWU5KDB4MTYyKTpfMHgyNGQ0YmQ9PT1udWxsP18weDU1OTNiZD1fMHg1NTA5ZTkoMHgxMDIpOl8weDI0ZDRiZFtfMHg1NTA5ZTkoMHhmOSldJiYoXzB4NTU5M2JkPV8weDI0ZDRiZFtfMHg1NTA5ZTkoMHhmOSldWyduYW1lJ118fF8weDU1OTNiZCk6XzB4NTU5M2JkPT09XzB4NTUwOWU5KDB4YjApJiZ0aGlzWydfSFRNTEFsbENvbGxlY3Rpb24nXSYmXzB4MjRkNGJkIGluc3RhbmNlb2YgdGhpc1tfMHg1NTA5ZTkoMHgxMzQpXSYmKF8weDU1OTNiZD0nSFRNTEFsbENvbGxlY3Rpb24nKSxfMHg1NTkzYmQ7fVtfMHgxNmNkZjAoMHg5NyldKF8weDI1M2JmMyl7dmFyIF8weDJkOTA5PV8weDE2Y2RmMDtyZXR1cm4gT2JqZWN0Wydwcm90b3R5cGUnXVtfMHgyZDkwOSgweDE0OSldW18weDJkOTA5KDB4MTFlKV0oXzB4MjUzYmYzKTt9WydfaXNQcmltaXRpdmVUeXBlJ10oXzB4MTZhYzgwKXt2YXIgXzB4NDRkZDkxPV8weDE2Y2RmMDtyZXR1cm4gXzB4MTZhYzgwPT09XzB4NDRkZDkxKDB4OGEpfHxfMHgxNmFjODA9PT1fMHg0NGRkOTEoMHhhZil8fF8weDE2YWM4MD09PSdudW1iZXInO31bXzB4MTZjZGYwKDB4MTM4KV0oXzB4MzZlZjhlKXt2YXIgXzB4MTNmNzgwPV8weDE2Y2RmMDtyZXR1cm4gXzB4MzZlZjhlPT09J0Jvb2xlYW4nfHxfMHgzNmVmOGU9PT1fMHgxM2Y3ODAoMHgxM2YpfHxfMHgzNmVmOGU9PT1fMHgxM2Y3ODAoMHhmYik7fVtfMHgxNmNkZjAoMHgxM2UpXShfMHgxZDkwZTUsXzB4MmMzYjViLF8weDI2YTdmOCxfMHg0MzZjMzIsXzB4NTQzNTQyLF8weDUxNmU0NSl7dmFyIF8weDI4ZmQxYz10aGlzO3JldHVybiBmdW5jdGlvbihfMHg0YWVmMGUpe3ZhciBfMHg1N2I5NDg9XzB4NWRiNCxfMHg0ODY4ZjQ9XzB4NTQzNTQyW18weDU3Yjk0OCgweGVkKV1bJ2N1cnJlbnQnXSxfMHgyNGYzNjQ9XzB4NTQzNTQyW18weDU3Yjk0OCgweGVkKV1bXzB4NTdiOTQ4KDB4YjQpXSxfMHgzZTJhMTc9XzB4NTQzNTQyWydub2RlJ11bXzB4NTdiOTQ4KDB4MTVjKV07XzB4NTQzNTQyWydub2RlJ11bJ3BhcmVudCddPV8weDQ4NjhmNCxfMHg1NDM1NDJbXzB4NTdiOTQ4KDB4ZWQpXVtfMHg1N2I5NDgoMHhiNCldPXR5cGVvZiBfMHg0MzZjMzI9PV8weDU3Yjk0OCgweGE2KT9fMHg0MzZjMzI6XzB4NGFlZjBlLF8weDFkOTBlNVtfMHg1N2I5NDgoMHhlMSldKF8weDI4ZmQxY1tfMHg1N2I5NDgoMHg4MSldKF8weDJjM2I1YixfMHgyNmE3ZjgsXzB4NDM2YzMyLF8weDU0MzU0MixfMHg1MTZlNDUpKSxfMHg1NDM1NDJbXzB4NTdiOTQ4KDB4ZWQpXVsncGFyZW50J109XzB4M2UyYTE3LF8weDU0MzU0Mlsnbm9kZSddW18weDU3Yjk0OCgweGI0KV09XzB4MjRmMzY0O307fVtfMHgxNmNkZjAoMHhjYSldKF8weDQ3OWJlZCxfMHgzMTQwMWEsXzB4YjRkMTBmLF8weDIwMTFjZCxfMHg0ODZmNjEsXzB4MjIxY2YxLF8weDQ1ZWY3Nyl7dmFyIF8weGQ0ZWJmMj1fMHgxNmNkZjAsXzB4MWIyYTM3PXRoaXM7cmV0dXJuIF8weDMxNDAxYVtfMHhkNGViZjIoMHhkNSkrXzB4NDg2ZjYxWyd0b1N0cmluZyddKCldPSEweDAsZnVuY3Rpb24oXzB4M2Q4ZjUwKXt2YXIgXzB4MmRmNzA0PV8weGQ0ZWJmMixfMHgyMmUyNmM9XzB4MjIxY2YxWydub2RlJ11bXzB4MmRmNzA0KDB4MTAwKV0sXzB4NTEyNTJkPV8weDIyMWNmMVsnbm9kZSddW18weDJkZjcwNCgweGI0KV0sXzB4M2U5YWJjPV8weDIyMWNmMVtfMHgyZGY3MDQoMHhlZCldWydwYXJlbnQnXTtfMHgyMjFjZjFbJ25vZGUnXVtfMHgyZGY3MDQoMHgxNWMpXT1fMHgyMmUyNmMsXzB4MjIxY2YxWydub2RlJ11bXzB4MmRmNzA0KDB4YjQpXT1fMHgzZDhmNTAsXzB4NDc5YmVkWydwdXNoJ10oXzB4MWIyYTM3W18weDJkZjcwNCgweDgxKV0oXzB4YjRkMTBmLF8weDIwMTFjZCxfMHg0ODZmNjEsXzB4MjIxY2YxLF8weDQ1ZWY3NykpLF8weDIyMWNmMVtfMHgyZGY3MDQoMHhlZCldWydwYXJlbnQnXT1fMHgzZTlhYmMsXzB4MjIxY2YxW18weDJkZjcwNCgweGVkKV1bXzB4MmRmNzA0KDB4YjQpXT1fMHg1MTI1MmQ7fTt9W18weDE2Y2RmMCgweDgxKV0oXzB4MzkyOTVlLF8weDNlMjdlZSxfMHg1MDE1NWUsXzB4M2FmZmJkLF8weDEyMTdkNil7dmFyIF8weDU4MjRmND1fMHgxNmNkZjAsXzB4NGI1MjE0PXRoaXM7XzB4MTIxN2Q2fHwoXzB4MTIxN2Q2PWZ1bmN0aW9uKF8weGQwYzJkNSxfMHgxZmVjMGMpe3JldHVybiBfMHhkMGMyZDVbXzB4MWZlYzBjXTt9KTt2YXIgXzB4MzdjNGNhPV8weDUwMTU1ZVtfMHg1ODI0ZjQoMHgxNDkpXSgpLF8weDE4MGNjMj1fMHgzYWZmYmRbJ2V4cHJlc3Npb25zVG9FdmFsdWF0ZSddfHx7fSxfMHg1NzY5YmY9XzB4M2FmZmJkWydkZXB0aCddLF8weGM4MmQ1Yj1fMHgzYWZmYmRbJ2lzRXhwcmVzc2lvblRvRXZhbHVhdGUnXTt0cnl7dmFyIF8weDUwOTMxOT10aGlzWydfaXNNYXAnXShfMHgzOTI5NWUpLF8weDM2ODZhMz1fMHgzN2M0Y2E7XzB4NTA5MzE5JiZfMHgzNjg2YTNbMHgwXT09PSdcXFxceDI3JyYmKF8weDM2ODZhMz1fMHgzNjg2YTNbXzB4NTgyNGY0KDB4ZTApXSgweDEsXzB4MzY4NmEzWydsZW5ndGgnXS0weDIpKTt2YXIgXzB4YjVmZTE3PV8weDNhZmZiZFtfMHg1ODI0ZjQoMHg4NildPV8weDE4MGNjMlsnX3BfJytfMHgzNjg2YTNdO18weGI1ZmUxNyYmKF8weDNhZmZiZFtfMHg1ODI0ZjQoMHgxNjYpXT1fMHgzYWZmYmRbJ2RlcHRoJ10rMHgxKSxfMHgzYWZmYmRbXzB4NTgyNGY0KDB4MTFjKV09ISFfMHhiNWZlMTc7dmFyIF8weDFlOGNmYT10eXBlb2YgXzB4NTAxNTVlPT1fMHg1ODI0ZjQoMHgxNjgpLF8weDVhNzFmZT17J25hbWUnOl8weDFlOGNmYXx8XzB4NTA5MzE5P18weDM3YzRjYTp0aGlzW18weDU4MjRmNCgweDE1OSldKF8weDM3YzRjYSl9O2lmKF8weDFlOGNmYSYmKF8weDVhNzFmZVtfMHg1ODI0ZjQoMHgxNjgpXT0hMHgwKSwhKF8weDNlMjdlZT09PSdhcnJheSd8fF8weDNlMjdlZT09PV8weDU4MjRmNCgweDE0MCkpKXt2YXIgXzB4M2M1OTcyPXRoaXNbJ19nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InXShfMHgzOTI5NWUsXzB4NTAxNTVlKTtpZihfMHgzYzU5NzImJihfMHgzYzU5NzJbXzB4NTgyNGY0KDB4ZTYpXSYmKF8weDVhNzFmZVsnc2V0dGVyJ109ITB4MCksXzB4M2M1OTcyWydnZXQnXSYmIV8weGI1ZmUxNyYmIV8weDNhZmZiZFtfMHg1ODI0ZjQoMHgxMTcpXSkpcmV0dXJuIF8weDVhNzFmZVsnZ2V0dGVyJ109ITB4MCx0aGlzW18weDU4MjRmNCgweDkzKV0oXzB4NWE3MWZlLF8weDNhZmZiZCksXzB4NWE3MWZlO312YXIgXzB4M2Q2NzQ3O3RyeXtfMHgzZDY3NDc9XzB4MTIxN2Q2KF8weDM5Mjk1ZSxfMHg1MDE1NWUpO31jYXRjaChfMHgzZjVjZmUpe3JldHVybiBfMHg1YTcxZmU9eyduYW1lJzpfMHgzN2M0Y2EsJ3R5cGUnOid1bmtub3duJywnZXJyb3InOl8weDNmNWNmZVtfMHg1ODI0ZjQoMHgxMWQpXX0sdGhpc1tfMHg1ODI0ZjQoMHg5MyldKF8weDVhNzFmZSxfMHgzYWZmYmQpLF8weDVhNzFmZTt9dmFyIF8weDI0ZjEwOD10aGlzW18weDU4MjRmNCgweDEwYildKF8weDNkNjc0NyksXzB4MzlhZWNjPXRoaXNbJ19pc1ByaW1pdGl2ZVR5cGUnXShfMHgyNGYxMDgpO2lmKF8weDVhNzFmZVtfMHg1ODI0ZjQoMHgxNjQpXT1fMHgyNGYxMDgsXzB4MzlhZWNjKXRoaXNbXzB4NTgyNGY0KDB4OTMpXShfMHg1YTcxZmUsXzB4M2FmZmJkLF8weDNkNjc0NyxmdW5jdGlvbigpe3ZhciBfMHgzOGMxZDU9XzB4NTgyNGY0O18weDVhNzFmZVsndmFsdWUnXT1fMHgzZDY3NDdbXzB4MzhjMWQ1KDB4MTRhKV0oKSwhXzB4YjVmZTE3JiZfMHg0YjUyMTRbXzB4MzhjMWQ1KDB4ZTMpXShfMHgyNGYxMDgsXzB4NWE3MWZlLF8weDNhZmZiZCx7fSk7fSk7ZWxzZXt2YXIgXzB4NWRkZmNjPV8weDNhZmZiZFsnYXV0b0V4cGFuZCddJiZfMHgzYWZmYmRbXzB4NTgyNGY0KDB4ZmUpXTxfMHgzYWZmYmRbXzB4NTgyNGY0KDB4ZjYpXSYmXzB4M2FmZmJkW18weDU4MjRmNCgweGRjKV1bJ2luZGV4T2YnXShfMHgzZDY3NDcpPDB4MCYmXzB4MjRmMTA4IT09XzB4NTgyNGY0KDB4MTMxKSYmXzB4M2FmZmJkWydhdXRvRXhwYW5kUHJvcGVydHlDb3VudCddPF8weDNhZmZiZFtfMHg1ODI0ZjQoMHhkZSldO18weDVkZGZjY3x8XzB4M2FmZmJkW18weDU4MjRmNCgweGZlKV08XzB4NTc2OWJmfHxfMHhiNWZlMTc/KHRoaXNbXzB4NTgyNGY0KDB4MTQxKV0oXzB4NWE3MWZlLF8weDNkNjc0NyxfMHgzYWZmYmQsXzB4YjVmZTE3fHx7fSksdGhpc1snX2FkZGl0aW9uYWxNZXRhZGF0YSddKF8weDNkNjc0NyxfMHg1YTcxZmUpKTp0aGlzW18weDU4MjRmNCgweDkzKV0oXzB4NWE3MWZlLF8weDNhZmZiZCxfMHgzZDY3NDcsZnVuY3Rpb24oKXt2YXIgXzB4NDk2Y2U2PV8weDU4MjRmNDtfMHgyNGYxMDg9PT1fMHg0OTZjZTYoMHgxMDIpfHxfMHgyNGYxMDg9PT0ndW5kZWZpbmVkJ3x8KGRlbGV0ZSBfMHg1YTcxZmVbXzB4NDk2Y2U2KDB4ODkpXSxfMHg1YTcxZmVbJ2NhcHBlZCddPSEweDApO30pO31yZXR1cm4gXzB4NWE3MWZlO31maW5hbGx5e18weDNhZmZiZFtfMHg1ODI0ZjQoMHg4NildPV8weDE4MGNjMixfMHgzYWZmYmRbXzB4NTgyNGY0KDB4MTY2KV09XzB4NTc2OWJmLF8weDNhZmZiZFsnaXNFeHByZXNzaW9uVG9FdmFsdWF0ZSddPV8weGM4MmQ1Yjt9fVsnX2NhcElmU3RyaW5nJ10oXzB4MmE2YzczLF8weDFkYWQ0NyxfMHg0MTk4MTIsXzB4Mjk2MDk4KXt2YXIgXzB4MzZkMmZmPV8weDE2Y2RmMCxfMHg0NDczNGQ9XzB4Mjk2MDk4W18weDM2ZDJmZigweDExMSldfHxfMHg0MTk4MTJbXzB4MzZkMmZmKDB4MTExKV07aWYoKF8weDJhNmM3Mz09PV8weDM2ZDJmZigweGFmKXx8XzB4MmE2YzczPT09J1N0cmluZycpJiZfMHgxZGFkNDdbJ3ZhbHVlJ10pe2xldCBfMHgxZWQwZGY9XzB4MWRhZDQ3Wyd2YWx1ZSddW18weDM2ZDJmZigweGIzKV07XzB4NDE5ODEyW18weDM2ZDJmZigweDliKV0rPV8weDFlZDBkZixfMHg0MTk4MTJbXzB4MzZkMmZmKDB4OWIpXT5fMHg0MTk4MTJbXzB4MzZkMmZmKDB4YTApXT8oXzB4MWRhZDQ3WydjYXBwZWQnXT0nJyxkZWxldGUgXzB4MWRhZDQ3W18weDM2ZDJmZigweDg5KV0pOl8weDFlZDBkZj5fMHg0NDczNGQmJihfMHgxZGFkNDdbJ2NhcHBlZCddPV8weDFkYWQ0N1tfMHgzNmQyZmYoMHg4OSldWydzdWJzdHInXSgweDAsXzB4NDQ3MzRkKSxkZWxldGUgXzB4MWRhZDQ3W18weDM2ZDJmZigweDg5KV0pO319WydfaXNNYXAnXShfMHgxYjgxNTkpe3ZhciBfMHgxYzRhMGE9XzB4MTZjZGYwO3JldHVybiEhKF8weDFiODE1OSYmXzB4NGMyY2FkW18weDFjNGEwYSgweDEzMyldJiZ0aGlzW18weDFjNGEwYSgweDk3KV0oXzB4MWI4MTU5KT09PSdbb2JqZWN0XFxcXHgyME1hcF0nJiZfMHgxYjgxNTlbJ2ZvckVhY2gnXSk7fVtfMHgxNmNkZjAoMHgxNTkpXShfMHgxM2RmMzUpe3ZhciBfMHgzMmYzMjk9XzB4MTZjZGYwO2lmKF8weDEzZGYzNVsnbWF0Y2gnXSgvXlxcXFxkKyQvKSlyZXR1cm4gXzB4MTNkZjM1O3ZhciBfMHhkZDg2ZTU7dHJ5e18weGRkODZlNT1KU09OW18weDMyZjMyOSgweDEwYyldKCcnK18weDEzZGYzNSk7fWNhdGNoe18weGRkODZlNT0nXFxcXHgyMicrdGhpc1tfMHgzMmYzMjkoMHg5NyldKF8weDEzZGYzNSkrJ1xcXFx4MjInO31yZXR1cm4gXzB4ZGQ4NmU1W18weDMyZjMyOSgweDEwOSldKC9eXFxcIihbYS16QS1aX11bYS16QS1aXzAtOV0qKVxcXCIkLyk/XzB4ZGQ4NmU1PV8weGRkODZlNVsnc3Vic3RyJ10oMHgxLF8weGRkODZlNVtfMHgzMmYzMjkoMHhiMyldLTB4Mik6XzB4ZGQ4NmU1PV8weGRkODZlNVsncmVwbGFjZSddKC8nL2csJ1xcXFx4NWNcXFxceDI3JylbXzB4MzJmMzI5KDB4YTMpXSgvXFxcXFxcXFxcXFwiL2csJ1xcXFx4MjInKVtfMHgzMmYzMjkoMHhhMyldKC8oXlxcXCJ8XFxcIiQpL2csJ1xcXFx4MjcnKSxfMHhkZDg2ZTU7fVtfMHgxNmNkZjAoMHg5MyldKF8weDM5NjdmZCxfMHgxMWZjNjAsXzB4NWJiNWM0LF8weDEwZmRiMyl7dmFyIF8weDM3Y2E2Nj1fMHgxNmNkZjA7dGhpc1snX3RyZWVOb2RlUHJvcGVydGllc0JlZm9yZUZ1bGxWYWx1ZSddKF8weDM5NjdmZCxfMHgxMWZjNjApLF8weDEwZmRiMyYmXzB4MTBmZGIzKCksdGhpc1tfMHgzN2NhNjYoMHg4NSldKF8weDViYjVjNCxfMHgzOTY3ZmQpLHRoaXNbXzB4MzdjYTY2KDB4MTQ1KV0oXzB4Mzk2N2ZkLF8weDExZmM2MCk7fVtfMHgxNmNkZjAoMHg5OCldKF8weDQ2NjJkOSxfMHg4NDcxZjUpe3ZhciBfMHhmMzMxNWU9XzB4MTZjZGYwO3RoaXNbJ19zZXROb2RlSWQnXShfMHg0NjYyZDksXzB4ODQ3MWY1KSx0aGlzWydfc2V0Tm9kZVF1ZXJ5UGF0aCddKF8weDQ2NjJkOSxfMHg4NDcxZjUpLHRoaXNbXzB4ZjMzMTVlKDB4MTYzKV0oXzB4NDY2MmQ5LF8weDg0NzFmNSksdGhpc1snX3NldE5vZGVQZXJtaXNzaW9ucyddKF8weDQ2NjJkOSxfMHg4NDcxZjUpO31bXzB4MTZjZGYwKDB4MTQzKV0oXzB4MWYzZTU3LF8weDFkZDZlYSl7fVtfMHgxNmNkZjAoMHgxMGEpXShfMHgzZDQ1YWYsXzB4M2E5YzcwKXt9W18weDE2Y2RmMCgweGM4KV0oXzB4MmNjODMyLF8weDJjMDNlOSl7fVtfMHgxNmNkZjAoMHg5NildKF8weDRjYjU2MSl7dmFyIF8weDI5MjZkMD1fMHgxNmNkZjA7cmV0dXJuIF8weDRjYjU2MT09PXRoaXNbXzB4MjkyNmQwKDB4MTAzKV07fVtfMHgxNmNkZjAoMHgxNDUpXShfMHgyOGNiYjMsXzB4NDRhZjI2KXt2YXIgXzB4MWU3NmRkPV8weDE2Y2RmMDt0aGlzW18weDFlNzZkZCgweGM4KV0oXzB4MjhjYmIzLF8weDQ0YWYyNiksdGhpc1tfMHgxZTc2ZGQoMHhmZCldKF8weDI4Y2JiMyksXzB4NDRhZjI2W18weDFlNzZkZCgweDhjKV0mJnRoaXNbXzB4MWU3NmRkKDB4OTkpXShfMHgyOGNiYjMpLHRoaXNbXzB4MWU3NmRkKDB4ZjEpXShfMHgyOGNiYjMsXzB4NDRhZjI2KSx0aGlzW18weDFlNzZkZCgweGI1KV0oXzB4MjhjYmIzLF8weDQ0YWYyNiksdGhpc1snX2NsZWFuTm9kZSddKF8weDI4Y2JiMyk7fVtfMHgxNmNkZjAoMHg4NSldKF8weDUxNzYzYyxfMHg0MTNlOWIpe3ZhciBfMHhmNzE1OWQ9XzB4MTZjZGYwO2xldCBfMHg0Y2Y2NWE7dHJ5e18weDRjMmNhZFtfMHhmNzE1OWQoMHgxMjMpXSYmKF8weDRjZjY1YT1fMHg0YzJjYWRbXzB4ZjcxNTlkKDB4MTIzKV1bXzB4ZjcxNTlkKDB4MTNkKV0sXzB4NGMyY2FkW18weGY3MTU5ZCgweDEyMyldW18weGY3MTU5ZCgweDEzZCldPWZ1bmN0aW9uKCl7fSksXzB4NTE3NjNjJiZ0eXBlb2YgXzB4NTE3NjNjW18weGY3MTU5ZCgweGIzKV09PV8weGY3MTU5ZCgweGE2KSYmKF8weDQxM2U5YltfMHhmNzE1OWQoMHhiMyldPV8weDUxNzYzY1tfMHhmNzE1OWQoMHhiMyldKTt9Y2F0Y2h7fWZpbmFsbHl7XzB4NGNmNjVhJiYoXzB4NGMyY2FkW18weGY3MTU5ZCgweDEyMyldW18weGY3MTU5ZCgweDEzZCldPV8weDRjZjY1YSk7fWlmKF8weDQxM2U5YltfMHhmNzE1OWQoMHgxNjQpXT09PSdudW1iZXInfHxfMHg0MTNlOWJbXzB4ZjcxNTlkKDB4MTY0KV09PT1fMHhmNzE1OWQoMHhmYikpe2lmKGlzTmFOKF8weDQxM2U5YlsndmFsdWUnXSkpXzB4NDEzZTliW18weGY3MTU5ZCgweDE1NCldPSEweDAsZGVsZXRlIF8weDQxM2U5YltfMHhmNzE1OWQoMHg4OSldO2Vsc2Ugc3dpdGNoKF8weDQxM2U5YltfMHhmNzE1OWQoMHg4OSldKXtjYXNlIE51bWJlclsnUE9TSVRJVkVfSU5GSU5JVFknXTpfMHg0MTNlOWJbXzB4ZjcxNTlkKDB4MTFhKV09ITB4MCxkZWxldGUgXzB4NDEzZTliW18weGY3MTU5ZCgweDg5KV07YnJlYWs7Y2FzZSBOdW1iZXJbXzB4ZjcxNTlkKDB4ZDIpXTpfMHg0MTNlOWJbXzB4ZjcxNTlkKDB4ODApXT0hMHgwLGRlbGV0ZSBfMHg0MTNlOWJbXzB4ZjcxNTlkKDB4ODkpXTticmVhaztjYXNlIDB4MDp0aGlzW18weGY3MTU5ZCgweGU4KV0oXzB4NDEzZTliWyd2YWx1ZSddKSYmKF8weDQxM2U5YltfMHhmNzE1OWQoMHgxMmUpXT0hMHgwKTticmVhazt9fWVsc2UgXzB4NDEzZTliW18weGY3MTU5ZCgweDE2NCldPT09XzB4ZjcxNTlkKDB4MTMxKSYmdHlwZW9mIF8weDUxNzYzY1tfMHhmNzE1OWQoMHg4MildPT0nc3RyaW5nJyYmXzB4NTE3NjNjW18weGY3MTU5ZCgweDgyKV0mJl8weDQxM2U5YltfMHhmNzE1OWQoMHg4MildJiZfMHg1MTc2M2NbXzB4ZjcxNTlkKDB4ODIpXSE9PV8weDQxM2U5YltfMHhmNzE1OWQoMHg4MildJiYoXzB4NDEzZTliW18weGY3MTU5ZCgweDhmKV09XzB4NTE3NjNjW18weGY3MTU5ZCgweDgyKV0pO31bXzB4MTZjZGYwKDB4ZTgpXShfMHgxMTgxMmEpe3ZhciBfMHgyZTc4Njc9XzB4MTZjZGYwO3JldHVybiAweDEvXzB4MTE4MTJhPT09TnVtYmVyW18weDJlNzg2NygweGQyKV07fVtfMHgxNmNkZjAoMHg5OSldKF8weDE0ZjRjZCl7dmFyIF8weDRlODUyYT1fMHgxNmNkZjA7IV8weDE0ZjRjZFtfMHg0ZTg1MmEoMHhjNSldfHwhXzB4MTRmNGNkW18weDRlODUyYSgweGM1KV1bXzB4NGU4NTJhKDB4YjMpXXx8XzB4MTRmNGNkWyd0eXBlJ109PT1fMHg0ZTg1MmEoMHgxMmIpfHxfMHgxNGY0Y2RbXzB4NGU4NTJhKDB4MTY0KV09PT0nTWFwJ3x8XzB4MTRmNGNkW18weDRlODUyYSgweDE2NCldPT09J1NldCd8fF8weDE0ZjRjZFtfMHg0ZTg1MmEoMHhjNSldWydzb3J0J10oZnVuY3Rpb24oXzB4MTY1ZWRkLF8weDNiNTdlOCl7dmFyIF8weDQ3YWJlNT1fMHg0ZTg1MmEsXzB4MTg0OGZhPV8weDE2NWVkZFtfMHg0N2FiZTUoMHg4MildW18weDQ3YWJlNSgweGQ2KV0oKSxfMHg0NzU5NmQ9XzB4M2I1N2U4W18weDQ3YWJlNSgweDgyKV1bXzB4NDdhYmU1KDB4ZDYpXSgpO3JldHVybiBfMHgxODQ4ZmE8XzB4NDc1OTZkPy0weDE6XzB4MTg0OGZhPl8weDQ3NTk2ZD8weDE6MHgwO30pO31bXzB4MTZjZGYwKDB4ZjEpXShfMHhjYzE1YjMsXzB4NDkxN2NmKXt2YXIgXzB4NGQwMzkzPV8weDE2Y2RmMDtpZighKF8weDQ5MTdjZltfMHg0ZDAzOTMoMHhiMSldfHwhXzB4Y2MxNWIzW18weDRkMDM5MygweGM1KV18fCFfMHhjYzE1YjNbJ3Byb3BzJ11bXzB4NGQwMzkzKDB4YjMpXSkpe2Zvcih2YXIgXzB4NDgxYTFhPVtdLF8weDQ2NzdmMj1bXSxfMHgyMDM0MDA9MHgwLF8weDI2NTA2ZD1fMHhjYzE1YjNbJ3Byb3BzJ11bXzB4NGQwMzkzKDB4YjMpXTtfMHgyMDM0MDA8XzB4MjY1MDZkO18weDIwMzQwMCsrKXt2YXIgXzB4MTE5ZjQ2PV8weGNjMTViM1tfMHg0ZDAzOTMoMHhjNSldW18weDIwMzQwMF07XzB4MTE5ZjQ2Wyd0eXBlJ109PT0nZnVuY3Rpb24nP18weDQ4MWExYVsncHVzaCddKF8weDExOWY0Nik6XzB4NDY3N2YyW18weDRkMDM5MygweGUxKV0oXzB4MTE5ZjQ2KTt9aWYoISghXzB4NDY3N2YyW18weDRkMDM5MygweGIzKV18fF8weDQ4MWExYVsnbGVuZ3RoJ108PTB4MSkpe18weGNjMTViM1tfMHg0ZDAzOTMoMHhjNSldPV8weDQ2NzdmMjt2YXIgXzB4ZWM0ODc5PXsnZnVuY3Rpb25zTm9kZSc6ITB4MCwncHJvcHMnOl8weDQ4MWExYX07dGhpc1tfMHg0ZDAzOTMoMHgxNDMpXShfMHhlYzQ4NzksXzB4NDkxN2NmKSx0aGlzW18weDRkMDM5MygweGM4KV0oXzB4ZWM0ODc5LF8weDQ5MTdjZiksdGhpc1snX3NldE5vZGVFeHBhbmRhYmxlU3RhdGUnXShfMHhlYzQ4NzkpLHRoaXNbJ19zZXROb2RlUGVybWlzc2lvbnMnXShfMHhlYzQ4NzksXzB4NDkxN2NmKSxfMHhlYzQ4NzlbJ2lkJ10rPSdcXFxceDIwZicsXzB4Y2MxNWIzW18weDRkMDM5MygweGM1KV1bXzB4NGQwMzkzKDB4MTFmKV0oXzB4ZWM0ODc5KTt9fX1bXzB4MTZjZGYwKDB4YjUpXShfMHg0YjM2YjMsXzB4NTY5ZmUwKXt9W18weDE2Y2RmMCgweGZkKV0oXzB4MmFkZmVjKXt9WydfaXNBcnJheSddKF8weDUyYWQ1MCl7dmFyIF8weDNjNjQ0Mj1fMHgxNmNkZjA7cmV0dXJuIEFycmF5W18weDNjNjQ0MigweDE1MCldKF8weDUyYWQ1MCl8fHR5cGVvZiBfMHg1MmFkNTA9PV8weDNjNjQ0MigweGJkKSYmdGhpc1tfMHgzYzY0NDIoMHg5NyldKF8weDUyYWQ1MCk9PT1fMHgzYzY0NDIoMHhiOSk7fVtfMHgxNmNkZjAoMHhhMSldKF8weDExNTViOCxfMHgyYjQzNjQpe31bXzB4MTZjZGYwKDB4OWEpXShfMHhlYjdlNmUpe3ZhciBfMHg1OWY3MWE9XzB4MTZjZGYwO2RlbGV0ZSBfMHhlYjdlNmVbJ19oYXNTeW1ib2xQcm9wZXJ0eU9uSXRzUGF0aCddLGRlbGV0ZSBfMHhlYjdlNmVbXzB4NTlmNzFhKDB4ZjMpXSxkZWxldGUgXzB4ZWI3ZTZlW18weDU5ZjcxYSgweGNiKV07fVtfMHgxNmNkZjAoMHgxNjMpXShfMHgxNDU1Y2IsXzB4MzM0YjBhKXt9fWxldCBfMHg0ZjUyYmQ9bmV3IF8weDM3MDk4NygpLF8weDNmOTFkMD17J3Byb3BzJzoweDY0LCdlbGVtZW50cyc6MHg2NCwnc3RyTGVuZ3RoJzoweDQwMCoweDMyLCd0b3RhbFN0ckxlbmd0aCc6MHg0MDAqMHgzMiwnYXV0b0V4cGFuZExpbWl0JzoweDEzODgsJ2F1dG9FeHBhbmRNYXhEZXB0aCc6MHhhfSxfMHgzNmRmNjA9eydwcm9wcyc6MHg1LCdlbGVtZW50cyc6MHg1LCdzdHJMZW5ndGgnOjB4MTAwLCd0b3RhbFN0ckxlbmd0aCc6MHgxMDAqMHgzLCdhdXRvRXhwYW5kTGltaXQnOjB4MWUsJ2F1dG9FeHBhbmRNYXhEZXB0aCc6MHgyfTtmdW5jdGlvbiBfMHg0YWVkYjAoXzB4MzdkN2Q1LF8weDU0ZTE1NyxfMHgxYzQyMjMsXzB4MjY1NWVjLF8weDU0YmQ0OCxfMHgxNjJmOWYpe3ZhciBfMHg1YjY5YzU9XzB4MTZjZGYwO2xldCBfMHgxODhlNmQsXzB4NTFlZWVjO3RyeXtfMHg1MWVlZWM9XzB4MWY2ZmFhKCksXzB4MTg4ZTZkPV8weDVkNGRhN1tfMHg1NGUxNTddLCFfMHgxODhlNmR8fF8weDUxZWVlYy1fMHgxODhlNmRbJ3RzJ10+MHgxZjQmJl8weDE4OGU2ZFtfMHg1YjY5YzUoMHhiMildJiZfMHgxODhlNmRbJ3RpbWUnXS9fMHgxODhlNmRbJ2NvdW50J108MHg2ND8oXzB4NWQ0ZGE3W18weDU0ZTE1N109XzB4MTg4ZTZkPXsnY291bnQnOjB4MCwndGltZSc6MHgwLCd0cyc6XzB4NTFlZWVjfSxfMHg1ZDRkYTdbJ2hpdHMnXT17fSk6XzB4NTFlZWVjLV8weDVkNGRhN1tfMHg1YjY5YzUoMHgxMTYpXVsndHMnXT4weDMyJiZfMHg1ZDRkYTdbJ2hpdHMnXVtfMHg1YjY5YzUoMHhiMildJiZfMHg1ZDRkYTdbXzB4NWI2OWM1KDB4MTE2KV1bXzB4NWI2OWM1KDB4OWMpXS9fMHg1ZDRkYTdbJ2hpdHMnXVtfMHg1YjY5YzUoMHhiMildPDB4NjQmJihfMHg1ZDRkYTdbXzB4NWI2OWM1KDB4MTE2KV09e30pO2xldCBfMHg1ZjQ4MTc9W10sXzB4ZjQ3M2ZmPV8weDE4OGU2ZFsncmVkdWNlTGltaXRzJ118fF8weDVkNGRhN1tfMHg1YjY5YzUoMHgxMTYpXVtfMHg1YjY5YzUoMHhkYildP18weDM2ZGY2MDpfMHgzZjkxZDAsXzB4NmYxN2ExPV8weDE1ZTBhYz0+e3ZhciBfMHgyNWM0Mzk9XzB4NWI2OWM1O2xldCBfMHg1Yzc4Mjk9e307cmV0dXJuIF8weDVjNzgyOVtfMHgyNWM0MzkoMHhjNSldPV8weDE1ZTBhY1tfMHgyNWM0MzkoMHhjNSldLF8weDVjNzgyOVsnZWxlbWVudHMnXT1fMHgxNWUwYWNbXzB4MjVjNDM5KDB4ZWEpXSxfMHg1Yzc4MjlbXzB4MjVjNDM5KDB4MTExKV09XzB4MTVlMGFjW18weDI1YzQzOSgweDExMSldLF8weDVjNzgyOVtfMHgyNWM0MzkoMHhhMCldPV8weDE1ZTBhY1tfMHgyNWM0MzkoMHhhMCldLF8weDVjNzgyOVtfMHgyNWM0MzkoMHhkZSldPV8weDE1ZTBhY1tfMHgyNWM0MzkoMHhkZSldLF8weDVjNzgyOVtfMHgyNWM0MzkoMHhmNildPV8weDE1ZTBhY1tfMHgyNWM0MzkoMHhmNildLF8weDVjNzgyOVsnc29ydFByb3BzJ109ITB4MSxfMHg1Yzc4MjlbJ25vRnVuY3Rpb25zJ109IV8weDU5NjNiMCxfMHg1Yzc4MjlbXzB4MjVjNDM5KDB4MTY2KV09MHgxLF8weDVjNzgyOVtfMHgyNWM0MzkoMHhmZSldPTB4MCxfMHg1Yzc4MjlbJ2V4cElkJ109XzB4MjVjNDM5KDB4MTA2KSxfMHg1Yzc4MjlbXzB4MjVjNDM5KDB4MTM3KV09XzB4MjVjNDM5KDB4YTUpLF8weDVjNzgyOVtfMHgyNWM0MzkoMHhmNCldPSEweDAsXzB4NWM3ODI5W18weDI1YzQzOSgweGRjKV09W10sXzB4NWM3ODI5WydhdXRvRXhwYW5kUHJvcGVydHlDb3VudCddPTB4MCxfMHg1Yzc4MjlbXzB4MjVjNDM5KDB4MTE3KV09ITB4MCxfMHg1Yzc4MjlbXzB4MjVjNDM5KDB4OWIpXT0weDAsXzB4NWM3ODI5W18weDI1YzQzOSgweGVkKV09eydjdXJyZW50Jzp2b2lkIDB4MCwncGFyZW50Jzp2b2lkIDB4MCwnaW5kZXgnOjB4MH0sXzB4NWM3ODI5O307Zm9yKHZhciBfMHg0ZjkwZmU9MHgwO18weDRmOTBmZTxfMHg1NGJkNDhbXzB4NWI2OWM1KDB4YjMpXTtfMHg0ZjkwZmUrKylfMHg1ZjQ4MTdbJ3B1c2gnXShfMHg0ZjUyYmRbXzB4NWI2OWM1KDB4MTQxKV0oeyd0aW1lTm9kZSc6XzB4MzdkN2Q1PT09XzB4NWI2OWM1KDB4OWMpfHx2b2lkIDB4MH0sXzB4NTRiZDQ4W18weDRmOTBmZV0sXzB4NmYxN2ExKF8weGY0NzNmZikse30pKTtpZihfMHgzN2Q3ZDU9PT1fMHg1YjY5YzUoMHhhOCkpe2xldCBfMHgzMGE5MjM9RXJyb3JbXzB4NWI2OWM1KDB4OTQpXTt0cnl7RXJyb3JbJ3N0YWNrVHJhY2VMaW1pdCddPTB4MS8weDAsXzB4NWY0ODE3WydwdXNoJ10oXzB4NGY1MmJkW18weDViNjljNSgweDE0MSldKHsnc3RhY2tOb2RlJzohMHgwfSxuZXcgRXJyb3IoKVsnc3RhY2snXSxfMHg2ZjE3YTEoXzB4ZjQ3M2ZmKSx7J3N0ckxlbmd0aCc6MHgxLzB4MH0pKTt9ZmluYWxseXtFcnJvcltfMHg1YjY5YzUoMHg5NCldPV8weDMwYTkyMzt9fXJldHVybnsnbWV0aG9kJzonbG9nJywndmVyc2lvbic6XzB4NWI1NjkzLCdhcmdzJzpbeyd0cyc6XzB4MWM0MjIzLCdzZXNzaW9uJzpfMHgyNjU1ZWMsJ2FyZ3MnOl8weDVmNDgxNywnaWQnOl8weDU0ZTE1NywnY29udGV4dCc6XzB4MTYyZjlmfV19O31jYXRjaChfMHgxYmRkNjMpe3JldHVybnsnbWV0aG9kJzonbG9nJywndmVyc2lvbic6XzB4NWI1NjkzLCdhcmdzJzpbeyd0cyc6XzB4MWM0MjIzLCdzZXNzaW9uJzpfMHgyNjU1ZWMsJ2FyZ3MnOlt7J3R5cGUnOl8weDViNjljNSgweGQ3KSwnZXJyb3InOl8weDFiZGQ2MyYmXzB4MWJkZDYzW18weDViNjljNSgweDExZCldfV0sJ2lkJzpfMHg1NGUxNTcsJ2NvbnRleHQnOl8weDE2MmY5Zn1dfTt9ZmluYWxseXt0cnl7aWYoXzB4MTg4ZTZkJiZfMHg1MWVlZWMpe2xldCBfMHg1MWVlNTc9XzB4MWY2ZmFhKCk7XzB4MTg4ZTZkW18weDViNjljNSgweGIyKV0rKyxfMHgxODhlNmRbXzB4NWI2OWM1KDB4OWMpXSs9XzB4MWJmYmQ3KF8weDUxZWVlYyxfMHg1MWVlNTcpLF8weDE4OGU2ZFsndHMnXT1fMHg1MWVlNTcsXzB4NWQ0ZGE3W18weDViNjljNSgweDExNildW18weDViNjljNSgweGIyKV0rKyxfMHg1ZDRkYTdbXzB4NWI2OWM1KDB4MTE2KV1bJ3RpbWUnXSs9XzB4MWJmYmQ3KF8weDUxZWVlYyxfMHg1MWVlNTcpLF8weDVkNGRhN1tfMHg1YjY5YzUoMHgxMTYpXVsndHMnXT1fMHg1MWVlNTcsKF8weDE4OGU2ZFsnY291bnQnXT4weDMyfHxfMHgxODhlNmRbXzB4NWI2OWM1KDB4OWMpXT4weDY0KSYmKF8weDE4OGU2ZFsncmVkdWNlTGltaXRzJ109ITB4MCksKF8weDVkNGRhN1snaGl0cyddWydjb3VudCddPjB4M2U4fHxfMHg1ZDRkYTdbXzB4NWI2OWM1KDB4MTE2KV1bXzB4NWI2OWM1KDB4OWMpXT4weDEyYykmJihfMHg1ZDRkYTdbXzB4NWI2OWM1KDB4MTE2KV1bXzB4NWI2OWM1KDB4ZGIpXT0hMHgwKTt9fWNhdGNoe319fXJldHVybiBfMHg0YWVkYjA7fSgoXzB4MWQ5ZWJhLF8weDUyMTkxMCxfMHgyMjNhYWEsXzB4M2JmMGZmLF8weDNjYzgzYixfMHgyZjMxNTUsXzB4MTQ2M2E2LF8weDJhZWEwYSxfMHg1NGE2Y2UsXzB4NDliNjVmLF8weDQwZGEwMSk9Pnt2YXIgXzB4YTA0YTlhPV8weDRjZjk1OTtpZihfMHgxZDllYmFbJ19jb25zb2xlX25pbmphJ10pcmV0dXJuIF8weDFkOWViYVtfMHhhMDRhOWEoMHgxNDIpXTtpZighWChfMHgxZDllYmEsXzB4MmFlYTBhLF8weDNjYzgzYikpcmV0dXJuIF8weDFkOWViYVtfMHhhMDRhOWEoMHgxNDIpXT17J2NvbnNvbGVMb2cnOigpPT57fSwnY29uc29sZVRyYWNlJzooKT0+e30sJ2NvbnNvbGVUaW1lJzooKT0+e30sJ2NvbnNvbGVUaW1lRW5kJzooKT0+e30sJ2F1dG9Mb2cnOigpPT57fSwnYXV0b0xvZ01hbnknOigpPT57fSwnYXV0b1RyYWNlTWFueSc6KCk9Pnt9LCdjb3ZlcmFnZSc6KCk9Pnt9LCdhdXRvVHJhY2UnOigpPT57fSwnYXV0b1RpbWUnOigpPT57fSwnYXV0b1RpbWVFbmQnOigpPT57fX0sXzB4MWQ5ZWJhW18weGEwNGE5YSgweDE0MildO2xldCBfMHgxYjIzYzY9YihfMHgxZDllYmEpLF8weGI1NGM0Mz1fMHgxYjIzYzZbXzB4YTA0YTlhKDB4ZGEpXSxfMHgzZjAxYzU9XzB4MWIyM2M2W18weGEwNGE5YSgweDEyYSldLF8weDU2ZTZiND1fMHgxYjIzYzZbJ25vdyddLF8weDFlNjlmMT17J2hpdHMnOnt9LCd0cyc6e319LF8weDIyM2RiYz1IKF8weDFkOWViYSxfMHg1NGE2Y2UsXzB4MWU2OWYxLF8weDJmMzE1NSksXzB4NDEyMzgxPV8weDFlYmVkMj0+e18weDFlNjlmMVsndHMnXVtfMHgxZWJlZDJdPV8weDNmMDFjNSgpO30sXzB4MzgwYWUwPShfMHgxMTlhMjYsXzB4MTk3MTA5KT0+e3ZhciBfMHg5YTEwM2Q9XzB4YTA0YTlhO2xldCBfMHg1ZDI0MWI9XzB4MWU2OWYxWyd0cyddW18weDE5NzEwOV07aWYoZGVsZXRlIF8weDFlNjlmMVsndHMnXVtfMHgxOTcxMDldLF8weDVkMjQxYil7bGV0IF8weDQyYjU4OD1fMHhiNTRjNDMoXzB4NWQyNDFiLF8weDNmMDFjNSgpKTtfMHgyOGRhZjUoXzB4MjIzZGJjKF8weDlhMTAzZCgweDljKSxfMHgxMTlhMjYsXzB4NTZlNmI0KCksXzB4ZGUzM2NlLFtfMHg0MmI1ODhdLF8weDE5NzEwOSkpO319LF8weDViODZiMD1fMHg1YWU2MDk9PihfMHgzY2M4M2I9PT1fMHhhMDRhOWEoMHgxMjApJiZfMHgxZDllYmFbJ29yaWdpbiddJiZfMHg1YWU2MDk/LltfMHhhMDRhOWEoMHhkMSldPy5bJ2xlbmd0aCddJiYoXzB4NWFlNjA5W18weGEwNGE5YSgweGQxKV1bMHgwXVtfMHhhMDRhOWEoMHgxNDYpXT1fMHgxZDllYmFbXzB4YTA0YTlhKDB4MTQ2KV0pLF8weDVhZTYwOSk7XzB4MWQ5ZWJhW18weGEwNGE5YSgweDE0MildPXsnY29uc29sZUxvZyc6KF8weDFkZDIyNCxfMHg0MWJiNjQpPT57dmFyIF8weDFiNjU4ZT1fMHhhMDRhOWE7XzB4MWQ5ZWJhW18weDFiNjU4ZSgweDEyMyldW18weDFiNjU4ZSgweDExYildW18weDFiNjU4ZSgweDgyKV0hPT1fMHgxYjY1OGUoMHhmMCkmJl8weDI4ZGFmNShfMHgyMjNkYmMoXzB4MWI2NThlKDB4MTFiKSxfMHgxZGQyMjQsXzB4NTZlNmI0KCksXzB4ZGUzM2NlLF8weDQxYmI2NCkpO30sJ2NvbnNvbGVUcmFjZSc6KF8weDI0YjViMixfMHgyYjA5NzEpPT57dmFyIF8weDQ2NmVjYj1fMHhhMDRhOWE7XzB4MWQ5ZWJhW18weDQ2NmVjYigweDEyMyldWydsb2cnXVtfMHg0NjZlY2IoMHg4MildIT09XzB4NDY2ZWNiKDB4OGIpJiZfMHgyOGRhZjUoXzB4NWI4NmIwKF8weDIyM2RiYyhfMHg0NjZlY2IoMHhhOCksXzB4MjRiNWIyLF8weDU2ZTZiNCgpLF8weGRlMzNjZSxfMHgyYjA5NzEpKSk7fSwnY29uc29sZVRpbWUnOl8weGZlNzQ5ZD0+e18weDQxMjM4MShfMHhmZTc0OWQpO30sJ2NvbnNvbGVUaW1lRW5kJzooXzB4MzhjMGQ3LF8weDQ5MjIyNik9PntfMHgzODBhZTAoXzB4NDkyMjI2LF8weDM4YzBkNyk7fSwnYXV0b0xvZyc6KF8weDJlYzgzNCxfMHgyZmE0MzkpPT57dmFyIF8weDJiNTkxMT1fMHhhMDRhOWE7XzB4MjhkYWY1KF8weDIyM2RiYyhfMHgyYjU5MTEoMHgxMWIpLF8weDJmYTQzOSxfMHg1NmU2YjQoKSxfMHhkZTMzY2UsW18weDJlYzgzNF0pKTt9LCdhdXRvTG9nTWFueSc6KF8weDFjZjY5MixfMHgxY2I4NTkpPT57dmFyIF8weDViOTkxZD1fMHhhMDRhOWE7XzB4MjhkYWY1KF8weDIyM2RiYyhfMHg1Yjk5MWQoMHgxMWIpLF8weDFjZjY5MixfMHg1NmU2YjQoKSxfMHhkZTMzY2UsXzB4MWNiODU5KSk7fSwnYXV0b1RyYWNlJzooXzB4MWE5MDk0LF8weDI1ZTE1ZCk9PntfMHgyOGRhZjUoXzB4NWI4NmIwKF8weDIyM2RiYygndHJhY2UnLF8weDI1ZTE1ZCxfMHg1NmU2YjQoKSxfMHhkZTMzY2UsW18weDFhOTA5NF0pKSk7fSwnYXV0b1RyYWNlTWFueSc6KF8weDMwMjNlYyxfMHg0ODRhZDYpPT57dmFyIF8weDI5YmJmNT1fMHhhMDRhOWE7XzB4MjhkYWY1KF8weDViODZiMChfMHgyMjNkYmMoXzB4MjliYmY1KDB4YTgpLF8weDMwMjNlYyxfMHg1NmU2YjQoKSxfMHhkZTMzY2UsXzB4NDg0YWQ2KSkpO30sJ2F1dG9UaW1lJzooXzB4NWQ3OWY0LF8weDMwOWFmMixfMHgyMjcyMjQpPT57XzB4NDEyMzgxKF8weDIyNzIyNCk7fSwnYXV0b1RpbWVFbmQnOihfMHgzNzQ2ZWMsXzB4MzExNzczLF8weDU5NTEzMSk9PntfMHgzODBhZTAoXzB4MzExNzczLF8weDU5NTEzMSk7fSwnY292ZXJhZ2UnOl8weDEzMzIxNj0+e3ZhciBfMHgzMjg1NjM9XzB4YTA0YTlhO18weDI4ZGFmNSh7J21ldGhvZCc6XzB4MzI4NTYzKDB4MTNiKSwndmVyc2lvbic6XzB4MmYzMTU1LCdhcmdzJzpbeydpZCc6XzB4MTMzMjE2fV19KTt9fTtsZXQgXzB4MjhkYWY1PXEoXzB4MWQ5ZWJhLF8weDUyMTkxMCxfMHgyMjNhYWEsXzB4M2JmMGZmLF8weDNjYzgzYixfMHg0OWI2NWYsXzB4NDBkYTAxKSxfMHhkZTMzY2U9XzB4MWQ5ZWJhW18weGEwNGE5YSgweGJmKV07cmV0dXJuIF8weDFkOWViYVtfMHhhMDRhOWEoMHgxNDIpXTt9KShnbG9iYWxUaGlzLCcxMjcuMC4wLjEnLF8weDRjZjk1OSgweDExOSksXFxcImM6XFxcXFxcXFxVc2Vyc1xcXFxcXFxceW91c3NcXFxcXFxcXC52c2NvZGVcXFxcXFxcXGV4dGVuc2lvbnNcXFxcXFxcXHdhbGxhYnlqcy5jb25zb2xlLW5pbmphLTEuMC4zMTRcXFxcXFxcXG5vZGVfbW9kdWxlc1xcXCIsXzB4NGNmOTU5KDB4MTMyKSxfMHg0Y2Y5NTkoMHgxMjYpLCcxNzE0MDY3Mjg4MDQ3JyxfMHg0Y2Y5NTkoMHhkMCksXzB4NGNmOTU5KDB4MTA4KSxfMHg0Y2Y5NTkoMHg5ZiksXzB4NGNmOTU5KDB4MTY3KSk7XCIpO31jYXRjaChlKXt9fTsvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL2Z1bmN0aW9uIG9vX29vKGksLi4udil7dHJ5e29vX2NtKCkuY29uc29sZUxvZyhpLCB2KTt9Y2F0Y2goZSl7fSByZXR1cm4gdn07LyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9mdW5jdGlvbiBvb190cihpLC4uLnYpe3RyeXtvb19jbSgpLmNvbnNvbGVUcmFjZShpLCB2KTt9Y2F0Y2goZSl7fSByZXR1cm4gdn07LyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9mdW5jdGlvbiBvb190cyh2KXt0cnl7b29fY20oKS5jb25zb2xlVGltZSh2KTt9Y2F0Y2goZSl7fSByZXR1cm4gdjt9Oy8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovZnVuY3Rpb24gb29fdGUodiwgaSl7dHJ5e29vX2NtKCkuY29uc29sZVRpbWVFbmQodiwgaSk7fWNhdGNoKGUpe30gcmV0dXJuIHY7fTsvKmVzbGludCB1bmljb3JuL25vLWFidXNpdmUtZXNsaW50LWRpc2FibGU6LGVzbGludC1jb21tZW50cy9kaXNhYmxlLWVuYWJsZS1wYWlyOixlc2xpbnQtY29tbWVudHMvbm8tdW5saW1pdGVkLWRpc2FibGU6LGVzbGludC1jb21tZW50cy9uby1hZ2dyZWdhdGluZy1lbmFibGU6LGVzbGludC1jb21tZW50cy9uby1kdXBsaWNhdGUtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLXVudXNlZC1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvbm8tdW51c2VkLWVuYWJsZTosKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwbHVnaW4uc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19wZW50YV9iX2dyaWRfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX3BlbnRhX2JfbWFfbGliX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X3JlZHV4X187IiwiLyoqXG4gKiBAbW9kdWxlIG9sL0Rpc3Bvc2FibGVcbiAqL1xuXG4vKipcbiAqIEBjbGFzc2Rlc2NcbiAqIE9iamVjdHMgdGhhdCBuZWVkIHRvIGNsZWFuIHVwIGFmdGVyIHRoZW1zZWx2ZXMuXG4gKi9cbmNsYXNzIERpc3Bvc2FibGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgb2JqZWN0IGhhcyBhbHJlYWR5IGJlZW4gZGlzcG9zZWQuXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHRoaXMuZGlzcG9zZWQgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhbiB1cC5cbiAgICovXG4gIGRpc3Bvc2UoKSB7XG4gICAgaWYgKCF0aGlzLmRpc3Bvc2VkKSB7XG4gICAgICB0aGlzLmRpc3Bvc2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMuZGlzcG9zZUludGVybmFsKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEV4dGVuc2lvbiBwb2ludCBmb3IgZGlzcG9zYWJsZSBvYmplY3RzLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBkaXNwb3NlSW50ZXJuYWwoKSB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBEaXNwb3NhYmxlO1xuIiwiLyoqXG4gKiBAbW9kdWxlIG9sL09iamVjdFxuICovXG5pbXBvcnQgRXZlbnQgZnJvbSAnLi9ldmVudHMvRXZlbnQuanMnO1xuaW1wb3J0IE9iamVjdEV2ZW50VHlwZSBmcm9tICcuL09iamVjdEV2ZW50VHlwZS5qcyc7XG5pbXBvcnQgT2JzZXJ2YWJsZSBmcm9tICcuL09ic2VydmFibGUuanMnO1xuaW1wb3J0IHtnZXRVaWR9IGZyb20gJy4vdXRpbC5qcyc7XG5pbXBvcnQge2lzRW1wdHl9IGZyb20gJy4vb2JqLmpzJztcblxuLyoqXG4gKiBAY2xhc3NkZXNjXG4gKiBFdmVudHMgZW1pdHRlZCBieSB7QGxpbmsgbW9kdWxlOm9sL09iamVjdH5CYXNlT2JqZWN0fSBpbnN0YW5jZXMgYXJlIGluc3RhbmNlcyBvZiB0aGlzIHR5cGUuXG4gKi9cbmV4cG9ydCBjbGFzcyBPYmplY3RFdmVudCBleHRlbmRzIEV2ZW50IHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFRoZSBldmVudCB0eXBlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBwcm9wZXJ0eSBuYW1lLlxuICAgKiBAcGFyYW0geyp9IG9sZFZhbHVlIFRoZSBvbGQgdmFsdWUgZm9yIGBrZXlgLlxuICAgKi9cbiAgY29uc3RydWN0b3IodHlwZSwga2V5LCBvbGRWYWx1ZSkge1xuICAgIHN1cGVyKHR5cGUpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG5hbWUgb2YgdGhlIHByb3BlcnR5IHdob3NlIHZhbHVlIGlzIGNoYW5naW5nLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQGFwaVxuICAgICAqL1xuICAgIHRoaXMua2V5ID0ga2V5O1xuXG4gICAgLyoqXG4gICAgICogVGhlIG9sZCB2YWx1ZS4gVG8gZ2V0IHRoZSBuZXcgdmFsdWUgdXNlIGBlLnRhcmdldC5nZXQoZS5rZXkpYCB3aGVyZVxuICAgICAqIGBlYCBpcyB0aGUgZXZlbnQgb2JqZWN0LlxuICAgICAqIEB0eXBlIHsqfVxuICAgICAqIEBhcGlcbiAgICAgKi9cbiAgICB0aGlzLm9sZFZhbHVlID0gb2xkVmFsdWU7XG4gIH1cbn1cblxuLyoqKlxuICogQHRlbXBsYXRlIFJldHVyblxuICogQHR5cGVkZWYge2ltcG9ydChcIi4vT2JzZXJ2YWJsZVwiKS5PblNpZ25hdHVyZTxpbXBvcnQoXCIuL09ic2VydmFibGVcIikuRXZlbnRUeXBlcywgaW1wb3J0KFwiLi9ldmVudHMvRXZlbnQuanNcIikuZGVmYXVsdCwgUmV0dXJuPiAmXG4gKiAgICBpbXBvcnQoXCIuL09ic2VydmFibGVcIikuT25TaWduYXR1cmU8aW1wb3J0KFwiLi9PYmplY3RFdmVudFR5cGVcIikuVHlwZXMsIE9iamVjdEV2ZW50LCBSZXR1cm4+ICZcbiAqICAgIGltcG9ydChcIi4vT2JzZXJ2YWJsZVwiKS5Db21iaW5lZE9uU2lnbmF0dXJlPGltcG9ydChcIi4vT2JzZXJ2YWJsZVwiKS5FdmVudFR5cGVzfGltcG9ydChcIi4vT2JqZWN0RXZlbnRUeXBlXCIpLlR5cGVzLCBSZXR1cm4+fSBPYmplY3RPblNpZ25hdHVyZVxuICovXG5cbi8qKlxuICogQGNsYXNzZGVzY1xuICogQWJzdHJhY3QgYmFzZSBjbGFzczsgbm9ybWFsbHkgb25seSB1c2VkIGZvciBjcmVhdGluZyBzdWJjbGFzc2VzIGFuZCBub3RcbiAqIGluc3RhbnRpYXRlZCBpbiBhcHBzLlxuICogTW9zdCBub24tdHJpdmlhbCBjbGFzc2VzIGluaGVyaXQgZnJvbSB0aGlzLlxuICpcbiAqIFRoaXMgZXh0ZW5kcyB7QGxpbmsgbW9kdWxlOm9sL09ic2VydmFibGV+T2JzZXJ2YWJsZX0gd2l0aCBvYnNlcnZhYmxlXG4gKiBwcm9wZXJ0aWVzLCB3aGVyZSBlYWNoIHByb3BlcnR5IGlzIG9ic2VydmFibGUgYXMgd2VsbCBhcyB0aGUgb2JqZWN0IGFzIGFcbiAqIHdob2xlLlxuICpcbiAqIENsYXNzZXMgdGhhdCBpbmhlcml0IGZyb20gdGhpcyBoYXZlIHByZS1kZWZpbmVkIHByb3BlcnRpZXMsIHRvIHdoaWNoIHlvdSBjYW5cbiAqIGFkZCB5b3VyIG93bnMuIFRoZSBwcmUtZGVmaW5lZCBwcm9wZXJ0aWVzIGFyZSBsaXN0ZWQgaW4gdGhpcyBkb2N1bWVudGF0aW9uIGFzXG4gKiAnT2JzZXJ2YWJsZSBQcm9wZXJ0aWVzJywgYW5kIGhhdmUgdGhlaXIgb3duIGFjY2Vzc29yczsgZm9yIGV4YW1wbGUsXG4gKiB7QGxpbmsgbW9kdWxlOm9sL01hcH5NYXB9IGhhcyBhIGB0YXJnZXRgIHByb3BlcnR5LCBhY2Nlc3NlZCB3aXRoXG4gKiBgZ2V0VGFyZ2V0KClgIGFuZCBjaGFuZ2VkIHdpdGggYHNldFRhcmdldCgpYC4gTm90IGFsbCBwcm9wZXJ0aWVzIGFyZSBob3dldmVyXG4gKiBzZXR0YWJsZS4gVGhlcmUgYXJlIGFsc28gZ2VuZXJhbC1wdXJwb3NlIGFjY2Vzc29ycyBgZ2V0KClgIGFuZCBgc2V0KClgLiBGb3JcbiAqIGV4YW1wbGUsIGBnZXQoJ3RhcmdldCcpYCBpcyBlcXVpdmFsZW50IHRvIGBnZXRUYXJnZXQoKWAuXG4gKlxuICogVGhlIGBzZXRgIGFjY2Vzc29ycyB0cmlnZ2VyIGEgY2hhbmdlIGV2ZW50LCBhbmQgeW91IGNhbiBtb25pdG9yIHRoaXMgYnlcbiAqIHJlZ2lzdGVyaW5nIGEgbGlzdGVuZXIuIEZvciBleGFtcGxlLCB7QGxpbmsgbW9kdWxlOm9sL1ZpZXd+Vmlld30gaGFzIGFcbiAqIGBjZW50ZXJgIHByb3BlcnR5LCBzbyBgdmlldy5vbignY2hhbmdlOmNlbnRlcicsIGZ1bmN0aW9uKGV2dCkgey4uLn0pO2Agd291bGRcbiAqIGNhbGwgdGhlIGZ1bmN0aW9uIHdoZW5ldmVyIHRoZSB2YWx1ZSBvZiB0aGUgY2VudGVyIHByb3BlcnR5IGNoYW5nZXMuIFdpdGhpblxuICogdGhlIGZ1bmN0aW9uLCBgZXZ0LnRhcmdldGAgd291bGQgYmUgdGhlIHZpZXcsIHNvIGBldnQudGFyZ2V0LmdldENlbnRlcigpYFxuICogd291bGQgcmV0dXJuIHRoZSBuZXcgY2VudGVyLlxuICpcbiAqIFlvdSBjYW4gYWRkIHlvdXIgb3duIG9ic2VydmFibGUgcHJvcGVydGllcyB3aXRoXG4gKiBgb2JqZWN0LnNldCgncHJvcCcsICd2YWx1ZScpYCwgYW5kIHJldHJpZXZlIHRoYXQgd2l0aCBgb2JqZWN0LmdldCgncHJvcCcpYC5cbiAqIFlvdSBjYW4gbGlzdGVuIGZvciBjaGFuZ2VzIG9uIHRoYXQgcHJvcGVydHkgdmFsdWUgd2l0aFxuICogYG9iamVjdC5vbignY2hhbmdlOnByb3AnLCBsaXN0ZW5lcilgLiBZb3UgY2FuIGdldCBhIGxpc3Qgb2YgYWxsXG4gKiBwcm9wZXJ0aWVzIHdpdGgge0BsaW5rIG1vZHVsZTpvbC9PYmplY3R+QmFzZU9iamVjdCNnZXRQcm9wZXJ0aWVzfS5cbiAqXG4gKiBOb3RlIHRoYXQgdGhlIG9ic2VydmFibGUgcHJvcGVydGllcyBhcmUgc2VwYXJhdGUgZnJvbSBzdGFuZGFyZCBKUyBwcm9wZXJ0aWVzLlxuICogWW91IGNhbiwgZm9yIGV4YW1wbGUsIGdpdmUgeW91ciBtYXAgb2JqZWN0IGEgdGl0bGUgd2l0aFxuICogYG1hcC50aXRsZT0nTmV3IHRpdGxlJ2AgYW5kIHdpdGggYG1hcC5zZXQoJ3RpdGxlJywgJ0Fub3RoZXIgdGl0bGUnKWAuIFRoZVxuICogZmlyc3Qgd2lsbCBiZSBhIGBoYXNPd25Qcm9wZXJ0eWA7IHRoZSBzZWNvbmQgd2lsbCBhcHBlYXIgaW5cbiAqIGBnZXRQcm9wZXJ0aWVzKClgLiBPbmx5IHRoZSBzZWNvbmQgaXMgb2JzZXJ2YWJsZS5cbiAqXG4gKiBQcm9wZXJ0aWVzIGNhbiBiZSBkZWxldGVkIGJ5IHVzaW5nIHRoZSB1bnNldCBtZXRob2QuIEUuZy5cbiAqIG9iamVjdC51bnNldCgnZm9vJykuXG4gKlxuICogQGZpcmVzIE9iamVjdEV2ZW50XG4gKiBAYXBpXG4gKi9cbmNsYXNzIEJhc2VPYmplY3QgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7T2JqZWN0PHN0cmluZywgKj59IFt2YWx1ZXNdIEFuIG9iamVjdCB3aXRoIGtleS12YWx1ZSBwYWlycy5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlcykge1xuICAgIHN1cGVyKCk7XG5cbiAgICAvKioqXG4gICAgICogQHR5cGUge09iamVjdE9uU2lnbmF0dXJlPGltcG9ydChcIi4vZXZlbnRzXCIpLkV2ZW50c0tleT59XG4gICAgICovXG4gICAgdGhpcy5vbjtcblxuICAgIC8qKipcbiAgICAgKiBAdHlwZSB7T2JqZWN0T25TaWduYXR1cmU8aW1wb3J0KFwiLi9ldmVudHNcIikuRXZlbnRzS2V5Pn1cbiAgICAgKi9cbiAgICB0aGlzLm9uY2U7XG5cbiAgICAvKioqXG4gICAgICogQHR5cGUge09iamVjdE9uU2lnbmF0dXJlPHZvaWQ+fVxuICAgICAqL1xuICAgIHRoaXMudW47XG5cbiAgICAvLyBDYWxsIHtAbGluayBtb2R1bGU6b2wvdXRpbC5nZXRVaWR9IHRvIGVuc3VyZSB0aGF0IHRoZSBvcmRlciBvZiBvYmplY3RzJyBpZHMgaXNcbiAgICAvLyB0aGUgc2FtZSBhcyB0aGUgb3JkZXIgaW4gd2hpY2ggdGhleSB3ZXJlIGNyZWF0ZWQuICBUaGlzIGFsc28gaGVscHMgdG9cbiAgICAvLyBlbnN1cmUgdGhhdCBvYmplY3QgcHJvcGVydGllcyBhcmUgYWx3YXlzIGFkZGVkIGluIHRoZSBzYW1lIG9yZGVyLCB3aGljaFxuICAgIC8vIGhlbHBzIG1hbnkgSmF2YVNjcmlwdCBlbmdpbmVzIGdlbmVyYXRlIGZhc3RlciBjb2RlLlxuICAgIGdldFVpZCh0aGlzKTtcblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHR5cGUge09iamVjdDxzdHJpbmcsICo+fG51bGx9XG4gICAgICovXG4gICAgdGhpcy52YWx1ZXNfID0gbnVsbDtcblxuICAgIGlmICh2YWx1ZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHZhbHVlcyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgYSB2YWx1ZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBLZXkgbmFtZS5cbiAgICogQHJldHVybiB7Kn0gVmFsdWUuXG4gICAqIEBhcGlcbiAgICovXG4gIGdldChrZXkpIHtcbiAgICBsZXQgdmFsdWU7XG4gICAgaWYgKHRoaXMudmFsdWVzXyAmJiB0aGlzLnZhbHVlc18uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgdmFsdWUgPSB0aGlzLnZhbHVlc19ba2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIGxpc3Qgb2Ygb2JqZWN0IHByb3BlcnR5IG5hbWVzLlxuICAgKiBAcmV0dXJuIHtBcnJheTxzdHJpbmc+fSBMaXN0IG9mIHByb3BlcnR5IG5hbWVzLlxuICAgKiBAYXBpXG4gICAqL1xuICBnZXRLZXlzKCkge1xuICAgIHJldHVybiAodGhpcy52YWx1ZXNfICYmIE9iamVjdC5rZXlzKHRoaXMudmFsdWVzXykpIHx8IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbiBvYmplY3Qgb2YgYWxsIHByb3BlcnR5IG5hbWVzIGFuZCB2YWx1ZXMuXG4gICAqIEByZXR1cm4ge09iamVjdDxzdHJpbmcsICo+fSBPYmplY3QuXG4gICAqIEBhcGlcbiAgICovXG4gIGdldFByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuICh0aGlzLnZhbHVlc18gJiYgT2JqZWN0LmFzc2lnbih7fSwgdGhpcy52YWx1ZXNfKSkgfHwge307XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFuIG9iamVjdCBvZiBhbGwgcHJvcGVydHkgbmFtZXMgYW5kIHZhbHVlcy5cbiAgICogQHJldHVybiB7T2JqZWN0PHN0cmluZywgKj4/fSBPYmplY3QuXG4gICAqL1xuICBnZXRQcm9wZXJ0aWVzSW50ZXJuYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWVzXztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUaGUgb2JqZWN0IGhhcyBwcm9wZXJ0aWVzLlxuICAgKi9cbiAgaGFzUHJvcGVydGllcygpIHtcbiAgICByZXR1cm4gISF0aGlzLnZhbHVlc187XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBLZXkgbmFtZS5cbiAgICogQHBhcmFtIHsqfSBvbGRWYWx1ZSBPbGQgdmFsdWUuXG4gICAqL1xuICBub3RpZnkoa2V5LCBvbGRWYWx1ZSkge1xuICAgIGxldCBldmVudFR5cGU7XG4gICAgZXZlbnRUeXBlID0gYGNoYW5nZToke2tleX1gO1xuICAgIGlmICh0aGlzLmhhc0xpc3RlbmVyKGV2ZW50VHlwZSkpIHtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgT2JqZWN0RXZlbnQoZXZlbnRUeXBlLCBrZXksIG9sZFZhbHVlKSk7XG4gICAgfVxuICAgIGV2ZW50VHlwZSA9IE9iamVjdEV2ZW50VHlwZS5QUk9QRVJUWUNIQU5HRTtcbiAgICBpZiAodGhpcy5oYXNMaXN0ZW5lcihldmVudFR5cGUpKSB7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IE9iamVjdEV2ZW50KGV2ZW50VHlwZSwga2V5LCBvbGRWYWx1ZSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IEtleSBuYW1lLlxuICAgKiBAcGFyYW0ge2ltcG9ydChcIi4vZXZlbnRzLmpzXCIpLkxpc3RlbmVyfSBsaXN0ZW5lciBMaXN0ZW5lci5cbiAgICovXG4gIGFkZENoYW5nZUxpc3RlbmVyKGtleSwgbGlzdGVuZXIpIHtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoYGNoYW5nZToke2tleX1gLCBsaXN0ZW5lcik7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBLZXkgbmFtZS5cbiAgICogQHBhcmFtIHtpbXBvcnQoXCIuL2V2ZW50cy5qc1wiKS5MaXN0ZW5lcn0gbGlzdGVuZXIgTGlzdGVuZXIuXG4gICAqL1xuICByZW1vdmVDaGFuZ2VMaXN0ZW5lcihrZXksIGxpc3RlbmVyKSB7XG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGBjaGFuZ2U6JHtrZXl9YCwgbGlzdGVuZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgYSB2YWx1ZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBLZXkgbmFtZS5cbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBWYWx1ZS5cbiAgICogQHBhcmFtIHtib29sZWFufSBbc2lsZW50XSBVcGRhdGUgd2l0aG91dCB0cmlnZ2VyaW5nIGFuIGV2ZW50LlxuICAgKiBAYXBpXG4gICAqL1xuICBzZXQoa2V5LCB2YWx1ZSwgc2lsZW50KSB7XG4gICAgY29uc3QgdmFsdWVzID0gdGhpcy52YWx1ZXNfIHx8ICh0aGlzLnZhbHVlc18gPSB7fSk7XG4gICAgaWYgKHNpbGVudCkge1xuICAgICAgdmFsdWVzW2tleV0gPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgb2xkVmFsdWUgPSB2YWx1ZXNba2V5XTtcbiAgICAgIHZhbHVlc1trZXldID0gdmFsdWU7XG4gICAgICBpZiAob2xkVmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgIHRoaXMubm90aWZ5KGtleSwgb2xkVmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGEgY29sbGVjdGlvbiBvZiBrZXktdmFsdWUgcGFpcnMuICBOb3RlIHRoYXQgdGhpcyBjaGFuZ2VzIGFueSBleGlzdGluZ1xuICAgKiBwcm9wZXJ0aWVzIGFuZCBhZGRzIG5ldyBvbmVzIChpdCBkb2VzIG5vdCByZW1vdmUgYW55IGV4aXN0aW5nIHByb3BlcnRpZXMpLlxuICAgKiBAcGFyYW0ge09iamVjdDxzdHJpbmcsICo+fSB2YWx1ZXMgVmFsdWVzLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtzaWxlbnRdIFVwZGF0ZSB3aXRob3V0IHRyaWdnZXJpbmcgYW4gZXZlbnQuXG4gICAqIEBhcGlcbiAgICovXG4gIHNldFByb3BlcnRpZXModmFsdWVzLCBzaWxlbnQpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiB2YWx1ZXMpIHtcbiAgICAgIHRoaXMuc2V0KGtleSwgdmFsdWVzW2tleV0sIHNpbGVudCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFwcGx5IGFueSBwcm9wZXJ0aWVzIGZyb20gYW5vdGhlciBvYmplY3Qgd2l0aG91dCB0cmlnZ2VyaW5nIGV2ZW50cy5cbiAgICogQHBhcmFtIHtCYXNlT2JqZWN0fSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIGFwcGx5UHJvcGVydGllcyhzb3VyY2UpIHtcbiAgICBpZiAoIXNvdXJjZS52YWx1ZXNfKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIE9iamVjdC5hc3NpZ24odGhpcy52YWx1ZXNfIHx8ICh0aGlzLnZhbHVlc18gPSB7fSksIHNvdXJjZS52YWx1ZXNfKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbnNldHMgYSBwcm9wZXJ0eS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBLZXkgbmFtZS5cbiAgICogQHBhcmFtIHtib29sZWFufSBbc2lsZW50XSBVbnNldCB3aXRob3V0IHRyaWdnZXJpbmcgYW4gZXZlbnQuXG4gICAqIEBhcGlcbiAgICovXG4gIHVuc2V0KGtleSwgc2lsZW50KSB7XG4gICAgaWYgKHRoaXMudmFsdWVzXyAmJiBrZXkgaW4gdGhpcy52YWx1ZXNfKSB7XG4gICAgICBjb25zdCBvbGRWYWx1ZSA9IHRoaXMudmFsdWVzX1trZXldO1xuICAgICAgZGVsZXRlIHRoaXMudmFsdWVzX1trZXldO1xuICAgICAgaWYgKGlzRW1wdHkodGhpcy52YWx1ZXNfKSkge1xuICAgICAgICB0aGlzLnZhbHVlc18gPSBudWxsO1xuICAgICAgfVxuICAgICAgaWYgKCFzaWxlbnQpIHtcbiAgICAgICAgdGhpcy5ub3RpZnkoa2V5LCBvbGRWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VPYmplY3Q7XG4iLCIvKipcbiAqIEBtb2R1bGUgb2wvT2JqZWN0RXZlbnRUeXBlXG4gKi9cblxuLyoqXG4gKiBAZW51bSB7c3RyaW5nfVxuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gIC8qKlxuICAgKiBUcmlnZ2VyZWQgd2hlbiBhIHByb3BlcnR5IGlzIGNoYW5nZWQuXG4gICAqIEBldmVudCBtb2R1bGU6b2wvT2JqZWN0Lk9iamVjdEV2ZW50I3Byb3BlcnR5Y2hhbmdlXG4gICAqIEBhcGlcbiAgICovXG4gIFBST1BFUlRZQ0hBTkdFOiAncHJvcGVydHljaGFuZ2UnLFxufTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7J3Byb3BlcnR5Y2hhbmdlJ30gVHlwZXNcbiAqL1xuIiwiLyoqXG4gKiBAbW9kdWxlIG9sL09ic2VydmFibGVcbiAqL1xuaW1wb3J0IEV2ZW50VGFyZ2V0IGZyb20gJy4vZXZlbnRzL1RhcmdldC5qcyc7XG5pbXBvcnQgRXZlbnRUeXBlIGZyb20gJy4vZXZlbnRzL0V2ZW50VHlwZS5qcyc7XG5pbXBvcnQge2xpc3RlbiwgbGlzdGVuT25jZSwgdW5saXN0ZW5CeUtleX0gZnJvbSAnLi9ldmVudHMuanMnO1xuXG4vKioqXG4gKiBAdGVtcGxhdGUge3N0cmluZ30gVHlwZVxuICogQHRlbXBsYXRlIHtFdmVudHxpbXBvcnQoXCIuL2V2ZW50cy9FdmVudC5qc1wiKS5kZWZhdWx0fSBFdmVudENsYXNzXG4gKiBAdGVtcGxhdGUgUmV0dXJuXG4gKiBAdHlwZWRlZiB7KHR5cGU6IFR5cGUsIGxpc3RlbmVyOiAoZXZlbnQ6IEV2ZW50Q2xhc3MpID0+ID8pID0+IFJldHVybn0gT25TaWduYXR1cmVcbiAqL1xuXG4vKioqXG4gKiBAdGVtcGxhdGUge3N0cmluZ30gVHlwZVxuICogQHRlbXBsYXRlIFJldHVyblxuICogQHR5cGVkZWYgeyh0eXBlOiBUeXBlW10sIGxpc3RlbmVyOiAoZXZlbnQ6IEV2ZW50fGltcG9ydChcIi4vZXZlbnRzL0V2ZW50XCIpLmRlZmF1bHQpID0+ID8pID0+IFJldHVybiBleHRlbmRzIHZvaWQgPyB2b2lkIDogUmV0dXJuW119IENvbWJpbmVkT25TaWduYXR1cmVcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHsnY2hhbmdlJ3wnZXJyb3InfSBFdmVudFR5cGVzXG4gKi9cblxuLyoqKlxuICogQHRlbXBsYXRlIFJldHVyblxuICogQHR5cGVkZWYge09uU2lnbmF0dXJlPEV2ZW50VHlwZXMsIGltcG9ydChcIi4vZXZlbnRzL0V2ZW50LmpzXCIpLmRlZmF1bHQsIFJldHVybj4gJiBDb21iaW5lZE9uU2lnbmF0dXJlPEV2ZW50VHlwZXMsIFJldHVybj59IE9ic2VydmFibGVPblNpZ25hdHVyZVxuICovXG5cbi8qKlxuICogQGNsYXNzZGVzY1xuICogQWJzdHJhY3QgYmFzZSBjbGFzczsgbm9ybWFsbHkgb25seSB1c2VkIGZvciBjcmVhdGluZyBzdWJjbGFzc2VzIGFuZCBub3RcbiAqIGluc3RhbnRpYXRlZCBpbiBhcHBzLlxuICogQW4gZXZlbnQgdGFyZ2V0IHByb3ZpZGluZyBjb252ZW5pZW50IG1ldGhvZHMgZm9yIGxpc3RlbmVyIHJlZ2lzdHJhdGlvblxuICogYW5kIHVucmVnaXN0cmF0aW9uLiBBIGdlbmVyaWMgYGNoYW5nZWAgZXZlbnQgaXMgYWx3YXlzIGF2YWlsYWJsZSB0aHJvdWdoXG4gKiB7QGxpbmsgbW9kdWxlOm9sL09ic2VydmFibGV+T2JzZXJ2YWJsZSNjaGFuZ2VkfS5cbiAqXG4gKiBAZmlyZXMgaW1wb3J0KFwiLi9ldmVudHMvRXZlbnQuanNcIikuZGVmYXVsdFxuICogQGFwaVxuICovXG5jbGFzcyBPYnNlcnZhYmxlIGV4dGVuZHMgRXZlbnRUYXJnZXQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5vbiA9XG4gICAgICAvKiogQHR5cGUge09ic2VydmFibGVPblNpZ25hdHVyZTxpbXBvcnQoXCIuL2V2ZW50c1wiKS5FdmVudHNLZXk+fSAqLyAoXG4gICAgICAgIHRoaXMub25JbnRlcm5hbFxuICAgICAgKTtcblxuICAgIHRoaXMub25jZSA9XG4gICAgICAvKiogQHR5cGUge09ic2VydmFibGVPblNpZ25hdHVyZTxpbXBvcnQoXCIuL2V2ZW50c1wiKS5FdmVudHNLZXk+fSAqLyAoXG4gICAgICAgIHRoaXMub25jZUludGVybmFsXG4gICAgICApO1xuXG4gICAgdGhpcy51biA9IC8qKiBAdHlwZSB7T2JzZXJ2YWJsZU9uU2lnbmF0dXJlPHZvaWQ+fSAqLyAodGhpcy51bkludGVybmFsKTtcblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLnJldmlzaW9uXyA9IDA7XG4gIH1cblxuICAvKipcbiAgICogSW5jcmVhc2VzIHRoZSByZXZpc2lvbiBjb3VudGVyIGFuZCBkaXNwYXRjaGVzIGEgJ2NoYW5nZScgZXZlbnQuXG4gICAqIEBhcGlcbiAgICovXG4gIGNoYW5nZWQoKSB7XG4gICAgKyt0aGlzLnJldmlzaW9uXztcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoRXZlbnRUeXBlLkNIQU5HRSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB2ZXJzaW9uIG51bWJlciBmb3IgdGhpcyBvYmplY3QuICBFYWNoIHRpbWUgdGhlIG9iamVjdCBpcyBtb2RpZmllZCxcbiAgICogaXRzIHZlcnNpb24gbnVtYmVyIHdpbGwgYmUgaW5jcmVtZW50ZWQuXG4gICAqIEByZXR1cm4ge251bWJlcn0gUmV2aXNpb24uXG4gICAqIEBhcGlcbiAgICovXG4gIGdldFJldmlzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLnJldmlzaW9uXztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xBcnJheTxzdHJpbmc+fSB0eXBlIFR5cGUuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oKEV2ZW50fGltcG9ydChcIi4vZXZlbnRzL0V2ZW50XCIpLmRlZmF1bHQpKTogP30gbGlzdGVuZXIgTGlzdGVuZXIuXG4gICAqIEByZXR1cm4ge2ltcG9ydChcIi4vZXZlbnRzLmpzXCIpLkV2ZW50c0tleXxBcnJheTxpbXBvcnQoXCIuL2V2ZW50cy5qc1wiKS5FdmVudHNLZXk+fSBFdmVudCBrZXkuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIG9uSW50ZXJuYWwodHlwZSwgbGlzdGVuZXIpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0eXBlKSkge1xuICAgICAgY29uc3QgbGVuID0gdHlwZS5sZW5ndGg7XG4gICAgICBjb25zdCBrZXlzID0gbmV3IEFycmF5KGxlbik7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgIGtleXNbaV0gPSBsaXN0ZW4odGhpcywgdHlwZVtpXSwgbGlzdGVuZXIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGtleXM7XG4gICAgfVxuICAgIHJldHVybiBsaXN0ZW4odGhpcywgLyoqIEB0eXBlIHtzdHJpbmd9ICovICh0eXBlKSwgbGlzdGVuZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfEFycmF5PHN0cmluZz59IHR5cGUgVHlwZS5cbiAgICogQHBhcmFtIHtmdW5jdGlvbigoRXZlbnR8aW1wb3J0KFwiLi9ldmVudHMvRXZlbnRcIikuZGVmYXVsdCkpOiA/fSBsaXN0ZW5lciBMaXN0ZW5lci5cbiAgICogQHJldHVybiB7aW1wb3J0KFwiLi9ldmVudHMuanNcIikuRXZlbnRzS2V5fEFycmF5PGltcG9ydChcIi4vZXZlbnRzLmpzXCIpLkV2ZW50c0tleT59IEV2ZW50IGtleS5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgb25jZUludGVybmFsKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgbGV0IGtleTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0eXBlKSkge1xuICAgICAgY29uc3QgbGVuID0gdHlwZS5sZW5ndGg7XG4gICAgICBrZXkgPSBuZXcgQXJyYXkobGVuKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAga2V5W2ldID0gbGlzdGVuT25jZSh0aGlzLCB0eXBlW2ldLCBsaXN0ZW5lcik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGtleSA9IGxpc3Rlbk9uY2UodGhpcywgLyoqIEB0eXBlIHtzdHJpbmd9ICovICh0eXBlKSwgbGlzdGVuZXIpO1xuICAgIH1cbiAgICAvKiogQHR5cGUge09iamVjdH0gKi8gKGxpc3RlbmVyKS5vbF9rZXkgPSBrZXk7XG4gICAgcmV0dXJuIGtleTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmxpc3RlbiBmb3IgYSBjZXJ0YWluIHR5cGUgb2YgZXZlbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfEFycmF5PHN0cmluZz59IHR5cGUgVHlwZS5cbiAgICogQHBhcmFtIHtmdW5jdGlvbigoRXZlbnR8aW1wb3J0KFwiLi9ldmVudHMvRXZlbnRcIikuZGVmYXVsdCkpOiA/fSBsaXN0ZW5lciBMaXN0ZW5lci5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgdW5JbnRlcm5hbCh0eXBlLCBsaXN0ZW5lcikge1xuICAgIGNvbnN0IGtleSA9IC8qKiBAdHlwZSB7T2JqZWN0fSAqLyAobGlzdGVuZXIpLm9sX2tleTtcbiAgICBpZiAoa2V5KSB7XG4gICAgICB1bkJ5S2V5KGtleSk7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHR5cGUpKSB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgaWkgPSB0eXBlLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGVbaV0sIGxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBMaXN0ZW4gZm9yIGEgY2VydGFpbiB0eXBlIG9mIGV2ZW50LlxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ3xBcnJheTxzdHJpbmc+fSB0eXBlIFRoZSBldmVudCB0eXBlIG9yIGFycmF5IG9mIGV2ZW50IHR5cGVzLlxuICogQHBhcmFtIHtmdW5jdGlvbigoRXZlbnR8aW1wb3J0KFwiLi9ldmVudHMvRXZlbnRcIikuZGVmYXVsdCkpOiA/fSBsaXN0ZW5lciBUaGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtpbXBvcnQoXCIuL2V2ZW50cy5qc1wiKS5FdmVudHNLZXl8QXJyYXk8aW1wb3J0KFwiLi9ldmVudHMuanNcIikuRXZlbnRzS2V5Pn0gVW5pcXVlIGtleSBmb3IgdGhlIGxpc3RlbmVyLiBJZlxuICogICAgIGNhbGxlZCB3aXRoIGFuIGFycmF5IG9mIGV2ZW50IHR5cGVzIGFzIHRoZSBmaXJzdCBhcmd1bWVudCwgdGhlIHJldHVyblxuICogICAgIHdpbGwgYmUgYW4gYXJyYXkgb2Yga2V5cy5cbiAqIEBhcGlcbiAqL1xuT2JzZXJ2YWJsZS5wcm90b3R5cGUub247XG5cbi8qKlxuICogTGlzdGVuIG9uY2UgZm9yIGEgY2VydGFpbiB0eXBlIG9mIGV2ZW50LlxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ3xBcnJheTxzdHJpbmc+fSB0eXBlIFRoZSBldmVudCB0eXBlIG9yIGFycmF5IG9mIGV2ZW50IHR5cGVzLlxuICogQHBhcmFtIHtmdW5jdGlvbigoRXZlbnR8aW1wb3J0KFwiLi9ldmVudHMvRXZlbnRcIikuZGVmYXVsdCkpOiA/fSBsaXN0ZW5lciBUaGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtpbXBvcnQoXCIuL2V2ZW50cy5qc1wiKS5FdmVudHNLZXl8QXJyYXk8aW1wb3J0KFwiLi9ldmVudHMuanNcIikuRXZlbnRzS2V5Pn0gVW5pcXVlIGtleSBmb3IgdGhlIGxpc3RlbmVyLiBJZlxuICogICAgIGNhbGxlZCB3aXRoIGFuIGFycmF5IG9mIGV2ZW50IHR5cGVzIGFzIHRoZSBmaXJzdCBhcmd1bWVudCwgdGhlIHJldHVyblxuICogICAgIHdpbGwgYmUgYW4gYXJyYXkgb2Yga2V5cy5cbiAqIEBhcGlcbiAqL1xuT2JzZXJ2YWJsZS5wcm90b3R5cGUub25jZTtcblxuLyoqXG4gKiBVbmxpc3RlbiBmb3IgYSBjZXJ0YWluIHR5cGUgb2YgZXZlbnQuXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7c3RyaW5nfEFycmF5PHN0cmluZz59IHR5cGUgVGhlIGV2ZW50IHR5cGUgb3IgYXJyYXkgb2YgZXZlbnQgdHlwZXMuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKChFdmVudHxpbXBvcnQoXCIuL2V2ZW50cy9FdmVudFwiKS5kZWZhdWx0KSk6ID99IGxpc3RlbmVyIFRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqIEBhcGlcbiAqL1xuT2JzZXJ2YWJsZS5wcm90b3R5cGUudW47XG5cbi8qKlxuICogUmVtb3ZlcyBhbiBldmVudCBsaXN0ZW5lciB1c2luZyB0aGUga2V5IHJldHVybmVkIGJ5IGBvbigpYCBvciBgb25jZSgpYC5cbiAqIEBwYXJhbSB7aW1wb3J0KFwiLi9ldmVudHMuanNcIikuRXZlbnRzS2V5fEFycmF5PGltcG9ydChcIi4vZXZlbnRzLmpzXCIpLkV2ZW50c0tleT59IGtleSBUaGUga2V5IHJldHVybmVkIGJ5IGBvbigpYFxuICogICAgIG9yIGBvbmNlKClgIChvciBhbiBhcnJheSBvZiBrZXlzKS5cbiAqIEBhcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVuQnlLZXkoa2V5KSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGtleSkpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgaWkgPSBrZXkubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgICAgdW5saXN0ZW5CeUtleShrZXlbaV0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB1bmxpc3RlbkJ5S2V5KC8qKiBAdHlwZSB7aW1wb3J0KFwiLi9ldmVudHMuanNcIikuRXZlbnRzS2V5fSAqLyAoa2V5KSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT2JzZXJ2YWJsZTtcbiIsIi8qKlxuICogQG1vZHVsZSBvbC9hcnJheVxuICovXG5cbi8qKlxuICogUGVyZm9ybXMgYSBiaW5hcnkgc2VhcmNoIG9uIHRoZSBwcm92aWRlZCBzb3J0ZWQgbGlzdCBhbmQgcmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGl0ZW0gaWYgZm91bmQuIElmIGl0IGNhbid0IGJlIGZvdW5kIGl0J2xsIHJldHVybiAtMS5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9kYXJrc2t5YXBwL2JpbmFyeS1zZWFyY2hcbiAqXG4gKiBAcGFyYW0ge0FycmF5PCo+fSBoYXlzdGFjayBJdGVtcyB0byBzZWFyY2ggdGhyb3VnaC5cbiAqIEBwYXJhbSB7Kn0gbmVlZGxlIFRoZSBpdGVtIHRvIGxvb2sgZm9yLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NvbXBhcmF0b3JdIENvbXBhcmF0b3IgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBpbmRleCBvZiB0aGUgaXRlbSBpZiBmb3VuZCwgLTEgaWYgbm90LlxuICovXG5leHBvcnQgZnVuY3Rpb24gYmluYXJ5U2VhcmNoKGhheXN0YWNrLCBuZWVkbGUsIGNvbXBhcmF0b3IpIHtcbiAgbGV0IG1pZCwgY21wO1xuICBjb21wYXJhdG9yID0gY29tcGFyYXRvciB8fCBhc2NlbmRpbmc7XG4gIGxldCBsb3cgPSAwO1xuICBsZXQgaGlnaCA9IGhheXN0YWNrLmxlbmd0aDtcbiAgbGV0IGZvdW5kID0gZmFsc2U7XG5cbiAgd2hpbGUgKGxvdyA8IGhpZ2gpIHtcbiAgICAvKiBOb3RlIHRoYXQgXCIobG93ICsgaGlnaCkgPj4+IDFcIiBtYXkgb3ZlcmZsb3csIGFuZCByZXN1bHRzIGluIGEgdHlwZWNhc3RcbiAgICAgKiB0byBkb3VibGUgKHdoaWNoIGdpdmVzIHRoZSB3cm9uZyByZXN1bHRzKS4gKi9cbiAgICBtaWQgPSBsb3cgKyAoKGhpZ2ggLSBsb3cpID4+IDEpO1xuICAgIGNtcCA9ICtjb21wYXJhdG9yKGhheXN0YWNrW21pZF0sIG5lZWRsZSk7XG5cbiAgICBpZiAoY21wIDwgMC4wKSB7XG4gICAgICAvKiBUb28gbG93LiAqL1xuICAgICAgbG93ID0gbWlkICsgMTtcbiAgICB9IGVsc2Uge1xuICAgICAgLyogS2V5IGZvdW5kIG9yIHRvbyBoaWdoICovXG4gICAgICBoaWdoID0gbWlkO1xuICAgICAgZm91bmQgPSAhY21wO1xuICAgIH1cbiAgfVxuXG4gIC8qIEtleSBub3QgZm91bmQuICovXG4gIHJldHVybiBmb3VuZCA/IGxvdyA6IH5sb3c7XG59XG5cbi8qKlxuICogQ29tcGFyZSBmdW5jdGlvbiBzb3J0aW5nIGFycmF5cyBpbiBhc2NlbmRpbmcgb3JkZXIuICBTYWZlIHRvIHVzZSBmb3IgbnVtZXJpYyB2YWx1ZXMuXG4gKiBAcGFyYW0geyp9IGEgVGhlIGZpcnN0IG9iamVjdCB0byBiZSBjb21wYXJlZC5cbiAqIEBwYXJhbSB7Kn0gYiBUaGUgc2Vjb25kIG9iamVjdCB0byBiZSBjb21wYXJlZC5cbiAqIEByZXR1cm4ge251bWJlcn0gQSBuZWdhdGl2ZSBudW1iZXIsIHplcm8sIG9yIGEgcG9zaXRpdmUgbnVtYmVyIGFzIHRoZSBmaXJzdFxuICogICAgIGFyZ3VtZW50IGlzIGxlc3MgdGhhbiwgZXF1YWwgdG8sIG9yIGdyZWF0ZXIgdGhhbiB0aGUgc2Vjb25kLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNjZW5kaW5nKGEsIGIpIHtcbiAgcmV0dXJuIGEgPiBiID8gMSA6IGEgPCBiID8gLTEgOiAwO1xufVxuXG4vKipcbiAqIENvbXBhcmUgZnVuY3Rpb24gc29ydGluZyBhcnJheXMgaW4gZGVzY2VuZGluZyBvcmRlci4gIFNhZmUgdG8gdXNlIGZvciBudW1lcmljIHZhbHVlcy5cbiAqIEBwYXJhbSB7Kn0gYSBUaGUgZmlyc3Qgb2JqZWN0IHRvIGJlIGNvbXBhcmVkLlxuICogQHBhcmFtIHsqfSBiIFRoZSBzZWNvbmQgb2JqZWN0IHRvIGJlIGNvbXBhcmVkLlxuICogQHJldHVybiB7bnVtYmVyfSBBIG5lZ2F0aXZlIG51bWJlciwgemVybywgb3IgYSBwb3NpdGl2ZSBudW1iZXIgYXMgdGhlIGZpcnN0XG4gKiAgICAgYXJndW1lbnQgaXMgZ3JlYXRlciB0aGFuLCBlcXVhbCB0bywgb3IgbGVzcyB0aGFuIHRoZSBzZWNvbmQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZXNjZW5kaW5nKGEsIGIpIHtcbiAgcmV0dXJuIGEgPCBiID8gMSA6IGEgPiBiID8gLTEgOiAwO1xufVxuXG4vKipcbiAqIHtAbGluayBtb2R1bGU6b2wvdGlsZWdyaWQvVGlsZUdyaWR+VGlsZUdyaWQjZ2V0WkZvclJlc29sdXRpb259IGNhbiB1c2UgYSBmdW5jdGlvblxuICogb2YgdGhpcyB0eXBlIHRvIGRldGVybWluZSB3aGljaCBuZWFyZXN0IHJlc29sdXRpb24gdG8gdXNlLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gdGFrZXMgYSBge251bWJlcn1gIHJlcHJlc2VudGluZyBhIHZhbHVlIGJldHdlZW4gdHdvIGFycmF5IGVudHJpZXMsXG4gKiBhIGB7bnVtYmVyfWAgcmVwcmVzZW50aW5nIHRoZSB2YWx1ZSBvZiB0aGUgbmVhcmVzdCBoaWdoZXIgZW50cnkgYW5kXG4gKiBhIGB7bnVtYmVyfWAgcmVwcmVzZW50aW5nIHRoZSB2YWx1ZSBvZiB0aGUgbmVhcmVzdCBsb3dlciBlbnRyeVxuICogYXMgYXJndW1lbnRzIGFuZCByZXR1cm5zIGEgYHtudW1iZXJ9YC4gSWYgYSBuZWdhdGl2ZSBudW1iZXIgb3IgemVybyBpcyByZXR1cm5lZFxuICogdGhlIGxvd2VyIHZhbHVlIHdpbGwgYmUgdXNlZCwgaWYgYSBwb3NpdGl2ZSBudW1iZXIgaXMgcmV0dXJuZWQgdGhlIGhpZ2hlciB2YWx1ZVxuICogd2lsbCBiZSB1c2VkLlxuICogQHR5cGVkZWYge2Z1bmN0aW9uKG51bWJlciwgbnVtYmVyLCBudW1iZXIpOiBudW1iZXJ9IE5lYXJlc3REaXJlY3Rpb25GdW5jdGlvblxuICogQGFwaVxuICovXG5cbi8qKlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBhcnIgQXJyYXkgaW4gZGVzY2VuZGluZyBvcmRlci5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0YXJnZXQgVGFyZ2V0LlxuICogQHBhcmFtIHtudW1iZXJ8TmVhcmVzdERpcmVjdGlvbkZ1bmN0aW9ufSBkaXJlY3Rpb25cbiAqICAgIDAgbWVhbnMgcmV0dXJuIHRoZSBuZWFyZXN0LFxuICogICAgPiAwIG1lYW5zIHJldHVybiB0aGUgbGFyZ2VzdCBuZWFyZXN0LFxuICogICAgPCAwIG1lYW5zIHJldHVybiB0aGUgc21hbGxlc3QgbmVhcmVzdC5cbiAqIEByZXR1cm4ge251bWJlcn0gSW5kZXguXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsaW5lYXJGaW5kTmVhcmVzdChhcnIsIHRhcmdldCwgZGlyZWN0aW9uKSB7XG4gIGlmIChhcnJbMF0gPD0gdGFyZ2V0KSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBjb25zdCBuID0gYXJyLmxlbmd0aDtcbiAgaWYgKHRhcmdldCA8PSBhcnJbbiAtIDFdKSB7XG4gICAgcmV0dXJuIG4gLSAxO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBkaXJlY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IG47ICsraSkge1xuICAgICAgY29uc3QgY2FuZGlkYXRlID0gYXJyW2ldO1xuICAgICAgaWYgKGNhbmRpZGF0ZSA9PT0gdGFyZ2V0KSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfVxuICAgICAgaWYgKGNhbmRpZGF0ZSA8IHRhcmdldCkge1xuICAgICAgICBpZiAoZGlyZWN0aW9uKHRhcmdldCwgYXJyW2kgLSAxXSwgY2FuZGlkYXRlKSA+IDApIHtcbiAgICAgICAgICByZXR1cm4gaSAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuIC0gMTtcbiAgfVxuXG4gIGlmIChkaXJlY3Rpb24gPiAwKSB7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmIChhcnJbaV0gPCB0YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuIGkgLSAxO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbiAtIDE7XG4gIH1cblxuICBpZiAoZGlyZWN0aW9uIDwgMCkge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAoYXJyW2ldIDw9IHRhcmdldCkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG4gLSAxO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBuOyArK2kpIHtcbiAgICBpZiAoYXJyW2ldID09IHRhcmdldCkge1xuICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICAgIGlmIChhcnJbaV0gPCB0YXJnZXQpIHtcbiAgICAgIGlmIChhcnJbaSAtIDFdIC0gdGFyZ2V0IDwgdGFyZ2V0IC0gYXJyW2ldKSB7XG4gICAgICAgIHJldHVybiBpIC0gMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbiAtIDE7XG59XG5cbi8qKlxuICogQHBhcmFtIHtBcnJheTwqPn0gYXJyIEFycmF5LlxuICogQHBhcmFtIHtudW1iZXJ9IGJlZ2luIEJlZ2luIGluZGV4LlxuICogQHBhcmFtIHtudW1iZXJ9IGVuZCBFbmQgaW5kZXguXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXZlcnNlU3ViQXJyYXkoYXJyLCBiZWdpbiwgZW5kKSB7XG4gIHdoaWxlIChiZWdpbiA8IGVuZCkge1xuICAgIGNvbnN0IHRtcCA9IGFycltiZWdpbl07XG4gICAgYXJyW2JlZ2luXSA9IGFycltlbmRdO1xuICAgIGFycltlbmRdID0gdG1wO1xuICAgICsrYmVnaW47XG4gICAgLS1lbmQ7XG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5PFZBTFVFPn0gYXJyIFRoZSBhcnJheSB0byBtb2RpZnkuXG4gKiBAcGFyYW0geyFBcnJheTxWQUxVRT58VkFMVUV9IGRhdGEgVGhlIGVsZW1lbnRzIG9yIGFycmF5cyBvZiBlbGVtZW50cyB0byBhZGQgdG8gYXJyLlxuICogQHRlbXBsYXRlIFZBTFVFXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleHRlbmQoYXJyLCBkYXRhKSB7XG4gIGNvbnN0IGV4dGVuc2lvbiA9IEFycmF5LmlzQXJyYXkoZGF0YSkgPyBkYXRhIDogW2RhdGFdO1xuICBjb25zdCBsZW5ndGggPSBleHRlbnNpb24ubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgYXJyW2Fyci5sZW5ndGhdID0gZXh0ZW5zaW9uW2ldO1xuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHtBcnJheTxWQUxVRT59IGFyciBUaGUgYXJyYXkgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtWQUxVRX0gb2JqIFRoZSBlbGVtZW50IHRvIHJlbW92ZS5cbiAqIEB0ZW1wbGF0ZSBWQUxVRVxuICogQHJldHVybiB7Ym9vbGVhbn0gSWYgdGhlIGVsZW1lbnQgd2FzIHJlbW92ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmUoYXJyLCBvYmopIHtcbiAgY29uc3QgaSA9IGFyci5pbmRleE9mKG9iaik7XG4gIGNvbnN0IGZvdW5kID0gaSA+IC0xO1xuICBpZiAoZm91bmQpIHtcbiAgICBhcnIuc3BsaWNlKGksIDEpO1xuICB9XG4gIHJldHVybiBmb3VuZDtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5PGFueT58VWludDhDbGFtcGVkQXJyYXl9IGFycjEgVGhlIGZpcnN0IGFycmF5IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge0FycmF5PGFueT58VWludDhDbGFtcGVkQXJyYXl9IGFycjIgVGhlIHNlY29uZCBhcnJheSB0byBjb21wYXJlLlxuICogQHJldHVybiB7Ym9vbGVhbn0gV2hldGhlciB0aGUgdHdvIGFycmF5cyBhcmUgZXF1YWwuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbHMoYXJyMSwgYXJyMikge1xuICBjb25zdCBsZW4xID0gYXJyMS5sZW5ndGg7XG4gIGlmIChsZW4xICE9PSBhcnIyLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjE7IGkrKykge1xuICAgIGlmIChhcnIxW2ldICE9PSBhcnIyW2ldKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIFNvcnQgdGhlIHBhc3NlZCBhcnJheSBzdWNoIHRoYXQgdGhlIHJlbGF0aXZlIG9yZGVyIG9mIGVxdWFsIGVsZW1lbnRzIGlzIHByZXNlcnZlZC5cbiAqIFNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Tb3J0aW5nX2FsZ29yaXRobSNTdGFiaWxpdHkgZm9yIGRldGFpbHMuXG4gKiBAcGFyYW0ge0FycmF5PCo+fSBhcnIgVGhlIGFycmF5IHRvIHNvcnQgKG1vZGlmaWVzIG9yaWdpbmFsKS5cbiAqIEBwYXJhbSB7IWZ1bmN0aW9uKCosICopOiBudW1iZXJ9IGNvbXBhcmVGbmMgQ29tcGFyaXNvbiBmdW5jdGlvbi5cbiAqIEBhcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YWJsZVNvcnQoYXJyLCBjb21wYXJlRm5jKSB7XG4gIGNvbnN0IGxlbmd0aCA9IGFyci5sZW5ndGg7XG4gIGNvbnN0IHRtcCA9IEFycmF5KGFyci5sZW5ndGgpO1xuICBsZXQgaTtcbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgdG1wW2ldID0ge2luZGV4OiBpLCB2YWx1ZTogYXJyW2ldfTtcbiAgfVxuICB0bXAuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBjb21wYXJlRm5jKGEudmFsdWUsIGIudmFsdWUpIHx8IGEuaW5kZXggLSBiLmluZGV4O1xuICB9KTtcbiAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIGFycltpXSA9IHRtcFtpXS52YWx1ZTtcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXk8Kj59IGFyciBUaGUgYXJyYXkgdG8gdGVzdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtmdW5jXSBDb21wYXJpc29uIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtib29sZWFufSBbc3RyaWN0XSBTdHJpY3RseSBzb3J0ZWQgKGRlZmF1bHQgZmFsc2UpLlxuICogQHJldHVybiB7Ym9vbGVhbn0gUmV0dXJuIGluZGV4LlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNTb3J0ZWQoYXJyLCBmdW5jLCBzdHJpY3QpIHtcbiAgY29uc3QgY29tcGFyZSA9IGZ1bmMgfHwgYXNjZW5kaW5nO1xuICByZXR1cm4gYXJyLmV2ZXJ5KGZ1bmN0aW9uIChjdXJyZW50VmFsLCBpbmRleCkge1xuICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNvbnN0IHJlcyA9IGNvbXBhcmUoYXJyW2luZGV4IC0gMV0sIGN1cnJlbnRWYWwpO1xuICAgIHJldHVybiAhKHJlcyA+IDAgfHwgKHN0cmljdCAmJiByZXMgPT09IDApKTtcbiAgfSk7XG59XG4iLCIvKipcbiAqIEBtb2R1bGUgb2wvYXNzZXJ0c1xuICovXG5cbi8qKlxuICogQHBhcmFtIHsqfSBhc3NlcnRpb24gQXNzZXJ0aW9uIHdlIGV4cGVjdGVkIHRvIGJlIHRydXRoeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBlcnJvck1lc3NhZ2UgRXJyb3IgbWVzc2FnZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydChhc3NlcnRpb24sIGVycm9yTWVzc2FnZSkge1xuICBpZiAoIWFzc2VydGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihlcnJvck1lc3NhZ2UpO1xuICB9XG59XG4iLCIvKipcbiAqIEBtb2R1bGUgb2wvY29uc29sZVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYgeydpbmZvJ3wnd2Fybid8J2Vycm9yJ3wnbm9uZSd9IExldmVsXG4gKi9cblxuLyoqXG4gKiBAdHlwZSB7T2JqZWN0PExldmVsLCBudW1iZXI+fVxuICovXG5jb25zdCBsZXZlbHMgPSB7XG4gIGluZm86IDEsXG4gIHdhcm46IDIsXG4gIGVycm9yOiAzLFxuICBub25lOiA0LFxufTtcblxuLyoqXG4gKiBAdHlwZSB7bnVtYmVyfVxuICovXG5sZXQgbGV2ZWwgPSBsZXZlbHMuaW5mbztcblxuLyoqXG4gKiBTZXQgdGhlIGxvZ2dpbmcgbGV2ZWwuICBCeSBkZWZhdWx0LCB0aGUgbGV2ZWwgaXMgc2V0IHRvICdpbmZvJyBhbmQgYWxsXG4gKiBtZXNzYWdlcyB3aWxsIGJlIGxvZ2dlZC4gIFNldCB0byAnd2FybicgdG8gb25seSBkaXNwbGF5IHdhcm5pbmdzIGFuZCBlcnJvcnMuXG4gKiBTZXQgdG8gJ2Vycm9yJyB0byBvbmx5IGRpc3BsYXkgZXJyb3JzLiAgU2V0IHRvICdub25lJyB0byBzaWxlbmNlIGFsbCBtZXNzYWdlcy5cbiAqXG4gKiBAcGFyYW0ge0xldmVsfSBsIFRoZSBuZXcgbGV2ZWwuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRMZXZlbChsKSB7XG4gIGxldmVsID0gbGV2ZWxzW2xdO1xufVxuXG4vKipcbiAqIEBwYXJhbSAgey4uLmFueX0gYXJncyBBcmd1bWVudHMgdG8gbG9nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb2coLi4uYXJncykge1xuICBpZiAobGV2ZWwgPiBsZXZlbHMuaW5mbykge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zb2xlLmxvZyguLi5hcmdzKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG59XG5cbi8qKlxuICogQHBhcmFtICB7Li4uYW55fSBhcmdzIEFyZ3VtZW50cyB0byBsb2dcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdhcm4oLi4uYXJncykge1xuICBpZiAobGV2ZWwgPiBsZXZlbHMud2Fybikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zb2xlLndhcm4oLi4uYXJncyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxufVxuXG4vKipcbiAqIEBwYXJhbSAgey4uLmFueX0gYXJncyBBcmd1bWVudHMgdG8gbG9nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlcnJvciguLi5hcmdzKSB7XG4gIGlmIChsZXZlbCA+IGxldmVscy5lcnJvcikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zb2xlLmVycm9yKC4uLmFyZ3MpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbn1cbiIsIi8qKlxuICogQG1vZHVsZSBvbC9jb29yZGluYXRlXG4gKi9cbmltcG9ydCB7Z2V0V2lkdGh9IGZyb20gJy4vZXh0ZW50LmpzJztcbmltcG9ydCB7bW9kdWxvLCB0b0ZpeGVkfSBmcm9tICcuL21hdGguanMnO1xuaW1wb3J0IHtwYWROdW1iZXJ9IGZyb20gJy4vc3RyaW5nLmpzJztcblxuLyoqXG4gKiBBbiBhcnJheSBvZiBudW1iZXJzIHJlcHJlc2VudGluZyBhbiBgeHlgLCBgeHl6YCBvciBgeHl6bWAgY29vcmRpbmF0ZS5cbiAqIEV4YW1wbGU6IGBbMTYsIDQ4XWAuXG4gKiBAdHlwZWRlZiB7QXJyYXk8bnVtYmVyPn0gQ29vcmRpbmF0ZVxuICogQGFwaVxuICovXG5cbi8qKlxuICogQSBmdW5jdGlvbiB0aGF0IHRha2VzIGEge0BsaW5rIG1vZHVsZTpvbC9jb29yZGluYXRlfkNvb3JkaW5hdGV9IGFuZFxuICogdHJhbnNmb3JtcyBpdCBpbnRvIGEgYHtzdHJpbmd9YC5cbiAqXG4gKiBAdHlwZWRlZiB7ZnVuY3Rpb24oKENvb3JkaW5hdGV8dW5kZWZpbmVkKSk6IHN0cmluZ30gQ29vcmRpbmF0ZUZvcm1hdFxuICogQGFwaVxuICovXG5cbi8qKlxuICogQWRkIGBkZWx0YWAgdG8gYGNvb3JkaW5hdGVgLiBgY29vcmRpbmF0ZWAgaXMgbW9kaWZpZWQgaW4gcGxhY2UgYW5kIHJldHVybmVkXG4gKiBieSB0aGUgZnVuY3Rpb24uXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgICAgaW1wb3J0IHthZGR9IGZyb20gJ29sL2Nvb3JkaW5hdGUuanMnO1xuICpcbiAqICAgICBjb25zdCBjb29yZCA9IFs3Ljg1LCA0Ny45ODMzMzNdO1xuICogICAgIGFkZChjb29yZCwgWy0yLCA0XSk7XG4gKiAgICAgLy8gY29vcmQgaXMgbm93IFs1Ljg1LCA1MS45ODMzMzNdXG4gKlxuICogQHBhcmFtIHtDb29yZGluYXRlfSBjb29yZGluYXRlIENvb3JkaW5hdGUuXG4gKiBAcGFyYW0ge0Nvb3JkaW5hdGV9IGRlbHRhIERlbHRhLlxuICogQHJldHVybiB7Q29vcmRpbmF0ZX0gVGhlIGlucHV0IGNvb3JkaW5hdGUgYWRqdXN0ZWQgYnlcbiAqIHRoZSBnaXZlbiBkZWx0YS5cbiAqIEBhcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZChjb29yZGluYXRlLCBkZWx0YSkge1xuICBjb29yZGluYXRlWzBdICs9ICtkZWx0YVswXTtcbiAgY29vcmRpbmF0ZVsxXSArPSArZGVsdGFbMV07XG4gIHJldHVybiBjb29yZGluYXRlO1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHBvaW50IGNsb3Nlc3QgdG8gdGhlIHBhc3NlZCBjb29yZGluYXRlIG9uIHRoZSBwYXNzZWQgY2lyY2xlLlxuICpcbiAqIEBwYXJhbSB7Q29vcmRpbmF0ZX0gY29vcmRpbmF0ZSBUaGUgY29vcmRpbmF0ZS5cbiAqIEBwYXJhbSB7aW1wb3J0KFwiLi9nZW9tL0NpcmNsZS5qc1wiKS5kZWZhdWx0fSBjaXJjbGUgVGhlIGNpcmNsZS5cbiAqIEByZXR1cm4ge0Nvb3JkaW5hdGV9IENsb3Nlc3QgcG9pbnQgb24gdGhlIGNpcmN1bWZlcmVuY2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZXN0T25DaXJjbGUoY29vcmRpbmF0ZSwgY2lyY2xlKSB7XG4gIGNvbnN0IHIgPSBjaXJjbGUuZ2V0UmFkaXVzKCk7XG4gIGNvbnN0IGNlbnRlciA9IGNpcmNsZS5nZXRDZW50ZXIoKTtcbiAgY29uc3QgeDAgPSBjZW50ZXJbMF07XG4gIGNvbnN0IHkwID0gY2VudGVyWzFdO1xuICBjb25zdCB4MSA9IGNvb3JkaW5hdGVbMF07XG4gIGNvbnN0IHkxID0gY29vcmRpbmF0ZVsxXTtcblxuICBsZXQgZHggPSB4MSAtIHgwO1xuICBjb25zdCBkeSA9IHkxIC0geTA7XG4gIGlmIChkeCA9PT0gMCAmJiBkeSA9PT0gMCkge1xuICAgIGR4ID0gMTtcbiAgfVxuICBjb25zdCBkID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcblxuICBjb25zdCB4ID0geDAgKyAociAqIGR4KSAvIGQ7XG4gIGNvbnN0IHkgPSB5MCArIChyICogZHkpIC8gZDtcblxuICByZXR1cm4gW3gsIHldO1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHBvaW50IGNsb3Nlc3QgdG8gdGhlIHBhc3NlZCBjb29yZGluYXRlIG9uIHRoZSBwYXNzZWQgc2VnbWVudC5cbiAqIFRoaXMgaXMgdGhlIGZvb3Qgb2YgdGhlIHBlcnBlbmRpY3VsYXIgb2YgdGhlIGNvb3JkaW5hdGUgdG8gdGhlIHNlZ21lbnQgd2hlblxuICogdGhlIGZvb3QgaXMgb24gdGhlIHNlZ21lbnQsIG9yIHRoZSBjbG9zZXN0IHNlZ21lbnQgY29vcmRpbmF0ZSB3aGVuIHRoZSBmb290XG4gKiBpcyBvdXRzaWRlIHRoZSBzZWdtZW50LlxuICpcbiAqIEBwYXJhbSB7Q29vcmRpbmF0ZX0gY29vcmRpbmF0ZSBUaGUgY29vcmRpbmF0ZS5cbiAqIEBwYXJhbSB7QXJyYXk8Q29vcmRpbmF0ZT59IHNlZ21lbnQgVGhlIHR3byBjb29yZGluYXRlc1xuICogb2YgdGhlIHNlZ21lbnQuXG4gKiBAcmV0dXJuIHtDb29yZGluYXRlfSBUaGUgZm9vdCBvZiB0aGUgcGVycGVuZGljdWxhciBvZlxuICogdGhlIGNvb3JkaW5hdGUgdG8gdGhlIHNlZ21lbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZXN0T25TZWdtZW50KGNvb3JkaW5hdGUsIHNlZ21lbnQpIHtcbiAgY29uc3QgeDAgPSBjb29yZGluYXRlWzBdO1xuICBjb25zdCB5MCA9IGNvb3JkaW5hdGVbMV07XG4gIGNvbnN0IHN0YXJ0ID0gc2VnbWVudFswXTtcbiAgY29uc3QgZW5kID0gc2VnbWVudFsxXTtcbiAgY29uc3QgeDEgPSBzdGFydFswXTtcbiAgY29uc3QgeTEgPSBzdGFydFsxXTtcbiAgY29uc3QgeDIgPSBlbmRbMF07XG4gIGNvbnN0IHkyID0gZW5kWzFdO1xuICBjb25zdCBkeCA9IHgyIC0geDE7XG4gIGNvbnN0IGR5ID0geTIgLSB5MTtcbiAgY29uc3QgYWxvbmcgPVxuICAgIGR4ID09PSAwICYmIGR5ID09PSAwXG4gICAgICA/IDBcbiAgICAgIDogKGR4ICogKHgwIC0geDEpICsgZHkgKiAoeTAgLSB5MSkpIC8gKGR4ICogZHggKyBkeSAqIGR5IHx8IDApO1xuICBsZXQgeCwgeTtcbiAgaWYgKGFsb25nIDw9IDApIHtcbiAgICB4ID0geDE7XG4gICAgeSA9IHkxO1xuICB9IGVsc2UgaWYgKGFsb25nID49IDEpIHtcbiAgICB4ID0geDI7XG4gICAgeSA9IHkyO1xuICB9IGVsc2Uge1xuICAgIHggPSB4MSArIGFsb25nICogZHg7XG4gICAgeSA9IHkxICsgYWxvbmcgKiBkeTtcbiAgfVxuICByZXR1cm4gW3gsIHldO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSB7QGxpbmsgbW9kdWxlOm9sL2Nvb3JkaW5hdGV+Q29vcmRpbmF0ZUZvcm1hdH0gZnVuY3Rpb24gdGhhdCBjYW4gYmVcbiAqIHVzZWQgdG8gZm9ybWF0XG4gKiBhIHtDb29yZGluYXRlfSB0byBhIHN0cmluZy5cbiAqXG4gKiBFeGFtcGxlIHdpdGhvdXQgc3BlY2lmeWluZyB0aGUgZnJhY3Rpb25hbCBkaWdpdHM6XG4gKlxuICogICAgIGltcG9ydCB7Y3JlYXRlU3RyaW5nWFl9IGZyb20gJ29sL2Nvb3JkaW5hdGUuanMnO1xuICpcbiAqICAgICBjb25zdCBjb29yZCA9IFs3Ljg1LCA0Ny45ODMzMzNdO1xuICogICAgIGNvbnN0IHN0cmluZ2lmeUZ1bmMgPSBjcmVhdGVTdHJpbmdYWSgpO1xuICogICAgIGNvbnN0IG91dCA9IHN0cmluZ2lmeUZ1bmMoY29vcmQpO1xuICogICAgIC8vIG91dCBpcyBub3cgJzgsIDQ4J1xuICpcbiAqIEV4YW1wbGUgd2l0aCBleHBsaWNpdGx5IHNwZWNpZnlpbmcgMiBmcmFjdGlvbmFsIGRpZ2l0czpcbiAqXG4gKiAgICAgaW1wb3J0IHtjcmVhdGVTdHJpbmdYWX0gZnJvbSAnb2wvY29vcmRpbmF0ZS5qcyc7XG4gKlxuICogICAgIGNvbnN0IGNvb3JkID0gWzcuODUsIDQ3Ljk4MzMzM107XG4gKiAgICAgY29uc3Qgc3RyaW5naWZ5RnVuYyA9IGNyZWF0ZVN0cmluZ1hZKDIpO1xuICogICAgIGNvbnN0IG91dCA9IHN0cmluZ2lmeUZ1bmMoY29vcmQpO1xuICogICAgIC8vIG91dCBpcyBub3cgJzcuODUsIDQ3Ljk4J1xuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBbZnJhY3Rpb25EaWdpdHNdIFRoZSBudW1iZXIgb2YgZGlnaXRzIHRvIGluY2x1ZGVcbiAqICAgIGFmdGVyIHRoZSBkZWNpbWFsIHBvaW50LiBEZWZhdWx0IGlzIGAwYC5cbiAqIEByZXR1cm4ge0Nvb3JkaW5hdGVGb3JtYXR9IENvb3JkaW5hdGUgZm9ybWF0LlxuICogQGFwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3RyaW5nWFkoZnJhY3Rpb25EaWdpdHMpIHtcbiAgcmV0dXJuIChcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0Nvb3JkaW5hdGV9IGNvb3JkaW5hdGUgQ29vcmRpbmF0ZS5cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFN0cmluZyBYWS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAoY29vcmRpbmF0ZSkge1xuICAgICAgcmV0dXJuIHRvU3RyaW5nWFkoY29vcmRpbmF0ZSwgZnJhY3Rpb25EaWdpdHMpO1xuICAgIH1cbiAgKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gaGVtaXNwaGVyZXMgSGVtaXNwaGVyZXMuXG4gKiBAcGFyYW0ge251bWJlcn0gZGVncmVlcyBEZWdyZWVzLlxuICogQHBhcmFtIHtudW1iZXJ9IFtmcmFjdGlvbkRpZ2l0c10gVGhlIG51bWJlciBvZiBkaWdpdHMgdG8gaW5jbHVkZVxuICogICAgYWZ0ZXIgdGhlIGRlY2ltYWwgcG9pbnQuIERlZmF1bHQgaXMgYDBgLlxuICogQHJldHVybiB7c3RyaW5nfSBTdHJpbmcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWdyZWVzVG9TdHJpbmdIRE1TKGhlbWlzcGhlcmVzLCBkZWdyZWVzLCBmcmFjdGlvbkRpZ2l0cykge1xuICBjb25zdCBub3JtYWxpemVkRGVncmVlcyA9IG1vZHVsbyhkZWdyZWVzICsgMTgwLCAzNjApIC0gMTgwO1xuICBjb25zdCB4ID0gTWF0aC5hYnMoMzYwMCAqIG5vcm1hbGl6ZWREZWdyZWVzKTtcbiAgY29uc3QgZGVjaW1hbHMgPSBmcmFjdGlvbkRpZ2l0cyB8fCAwO1xuXG4gIGxldCBkZWcgPSBNYXRoLmZsb29yKHggLyAzNjAwKTtcbiAgbGV0IG1pbiA9IE1hdGguZmxvb3IoKHggLSBkZWcgKiAzNjAwKSAvIDYwKTtcbiAgbGV0IHNlYyA9IHRvRml4ZWQoeCAtIGRlZyAqIDM2MDAgLSBtaW4gKiA2MCwgZGVjaW1hbHMpO1xuXG4gIGlmIChzZWMgPj0gNjApIHtcbiAgICBzZWMgPSAwO1xuICAgIG1pbiArPSAxO1xuICB9XG5cbiAgaWYgKG1pbiA+PSA2MCkge1xuICAgIG1pbiA9IDA7XG4gICAgZGVnICs9IDE7XG4gIH1cblxuICBsZXQgaGRtcyA9IGRlZyArICdcXHUwMGIwJztcbiAgaWYgKG1pbiAhPT0gMCB8fCBzZWMgIT09IDApIHtcbiAgICBoZG1zICs9ICcgJyArIHBhZE51bWJlcihtaW4sIDIpICsgJ1xcdTIwMzInO1xuICB9XG4gIGlmIChzZWMgIT09IDApIHtcbiAgICBoZG1zICs9ICcgJyArIHBhZE51bWJlcihzZWMsIDIsIGRlY2ltYWxzKSArICdcXHUyMDMzJztcbiAgfVxuICBpZiAobm9ybWFsaXplZERlZ3JlZXMgIT09IDApIHtcbiAgICBoZG1zICs9ICcgJyArIGhlbWlzcGhlcmVzLmNoYXJBdChub3JtYWxpemVkRGVncmVlcyA8IDAgPyAxIDogMCk7XG4gIH1cblxuICByZXR1cm4gaGRtcztcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSBnaXZlbiB7QGxpbmsgbW9kdWxlOm9sL2Nvb3JkaW5hdGV+Q29vcmRpbmF0ZX0gdG8gYSBzdHJpbmdcbiAqIHVzaW5nIHRoZSBnaXZlbiBzdHJpbmcgdGVtcGxhdGUuIFRoZSBzdHJpbmdzIGB7eH1gIGFuZCBge3l9YCBpbiB0aGUgdGVtcGxhdGVcbiAqIHdpbGwgYmUgcmVwbGFjZWQgd2l0aCB0aGUgZmlyc3QgYW5kIHNlY29uZCBjb29yZGluYXRlIHZhbHVlcyByZXNwZWN0aXZlbHkuXG4gKlxuICogRXhhbXBsZSB3aXRob3V0IHNwZWNpZnlpbmcgdGhlIGZyYWN0aW9uYWwgZGlnaXRzOlxuICpcbiAqICAgICBpbXBvcnQge2Zvcm1hdH0gZnJvbSAnb2wvY29vcmRpbmF0ZS5qcyc7XG4gKlxuICogICAgIGNvbnN0IGNvb3JkID0gWzcuODUsIDQ3Ljk4MzMzM107XG4gKiAgICAgY29uc3QgdGVtcGxhdGUgPSAnQ29vcmRpbmF0ZSBpcyAoe3h9fHt5fSkuJztcbiAqICAgICBjb25zdCBvdXQgPSBmb3JtYXQoY29vcmQsIHRlbXBsYXRlKTtcbiAqICAgICAvLyBvdXQgaXMgbm93ICdDb29yZGluYXRlIGlzICg4fDQ4KS4nXG4gKlxuICogRXhhbXBsZSBleHBsaWNpdGx5IHNwZWNpZnlpbmcgdGhlIGZyYWN0aW9uYWwgZGlnaXRzOlxuICpcbiAqICAgICBpbXBvcnQge2Zvcm1hdH0gZnJvbSAnb2wvY29vcmRpbmF0ZS5qcyc7XG4gKlxuICogICAgIGNvbnN0IGNvb3JkID0gWzcuODUsIDQ3Ljk4MzMzM107XG4gKiAgICAgY29uc3QgdGVtcGxhdGUgPSAnQ29vcmRpbmF0ZSBpcyAoe3h9fHt5fSkuJztcbiAqICAgICBjb25zdCBvdXQgPSBmb3JtYXQoY29vcmQsIHRlbXBsYXRlLCAyKTtcbiAqICAgICAvLyBvdXQgaXMgbm93ICdDb29yZGluYXRlIGlzICg3Ljg1fDQ3Ljk4KS4nXG4gKlxuICogQHBhcmFtIHtDb29yZGluYXRlfSBjb29yZGluYXRlIENvb3JkaW5hdGUuXG4gKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGUgQSB0ZW1wbGF0ZSBzdHJpbmcgd2l0aCBge3h9YCBhbmQgYHt5fWAgcGxhY2Vob2xkZXJzXG4gKiAgICAgdGhhdCB3aWxsIGJlIHJlcGxhY2VkIGJ5IGZpcnN0IGFuZCBzZWNvbmQgY29vcmRpbmF0ZSB2YWx1ZXMuXG4gKiBAcGFyYW0ge251bWJlcn0gW2ZyYWN0aW9uRGlnaXRzXSBUaGUgbnVtYmVyIG9mIGRpZ2l0cyB0byBpbmNsdWRlXG4gKiAgICBhZnRlciB0aGUgZGVjaW1hbCBwb2ludC4gRGVmYXVsdCBpcyBgMGAuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IEZvcm1hdHRlZCBjb29yZGluYXRlLlxuICogQGFwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0KGNvb3JkaW5hdGUsIHRlbXBsYXRlLCBmcmFjdGlvbkRpZ2l0cykge1xuICBpZiAoY29vcmRpbmF0ZSkge1xuICAgIHJldHVybiB0ZW1wbGF0ZVxuICAgICAgLnJlcGxhY2UoJ3t4fScsIGNvb3JkaW5hdGVbMF0udG9GaXhlZChmcmFjdGlvbkRpZ2l0cykpXG4gICAgICAucmVwbGFjZSgne3l9JywgY29vcmRpbmF0ZVsxXS50b0ZpeGVkKGZyYWN0aW9uRGlnaXRzKSk7XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Q29vcmRpbmF0ZX0gY29vcmRpbmF0ZTEgRmlyc3QgY29vcmRpbmF0ZS5cbiAqIEBwYXJhbSB7Q29vcmRpbmF0ZX0gY29vcmRpbmF0ZTIgU2Vjb25kIGNvb3JkaW5hdGUuXG4gKiBAcmV0dXJuIHtib29sZWFufSBUaGUgdHdvIGNvb3JkaW5hdGVzIGFyZSBlcXVhbC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVxdWFscyhjb29yZGluYXRlMSwgY29vcmRpbmF0ZTIpIHtcbiAgbGV0IGVxdWFscyA9IHRydWU7XG4gIGZvciAobGV0IGkgPSBjb29yZGluYXRlMS5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgIGlmIChjb29yZGluYXRlMVtpXSAhPSBjb29yZGluYXRlMltpXSkge1xuICAgICAgZXF1YWxzID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGVxdWFscztcbn1cblxuLyoqXG4gKiBSb3RhdGUgYGNvb3JkaW5hdGVgIGJ5IGBhbmdsZWAuIGBjb29yZGluYXRlYCBpcyBtb2RpZmllZCBpbiBwbGFjZSBhbmRcbiAqIHJldHVybmVkIGJ5IHRoZSBmdW5jdGlvbi5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqICAgICBpbXBvcnQge3JvdGF0ZX0gZnJvbSAnb2wvY29vcmRpbmF0ZS5qcyc7XG4gKlxuICogICAgIGNvbnN0IGNvb3JkID0gWzcuODUsIDQ3Ljk4MzMzM107XG4gKiAgICAgY29uc3Qgcm90YXRlUmFkaWFucyA9IE1hdGguUEkgLyAyOyAvLyA5MCBkZWdyZWVzXG4gKiAgICAgcm90YXRlKGNvb3JkLCByb3RhdGVSYWRpYW5zKTtcbiAqICAgICAvLyBjb29yZCBpcyBub3cgWy00Ny45ODMzMzMsIDcuODVdXG4gKlxuICogQHBhcmFtIHtDb29yZGluYXRlfSBjb29yZGluYXRlIENvb3JkaW5hdGUuXG4gKiBAcGFyYW0ge251bWJlcn0gYW5nbGUgQW5nbGUgaW4gcmFkaWFuLlxuICogQHJldHVybiB7Q29vcmRpbmF0ZX0gQ29vcmRpbmF0ZS5cbiAqIEBhcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZShjb29yZGluYXRlLCBhbmdsZSkge1xuICBjb25zdCBjb3NBbmdsZSA9IE1hdGguY29zKGFuZ2xlKTtcbiAgY29uc3Qgc2luQW5nbGUgPSBNYXRoLnNpbihhbmdsZSk7XG4gIGNvbnN0IHggPSBjb29yZGluYXRlWzBdICogY29zQW5nbGUgLSBjb29yZGluYXRlWzFdICogc2luQW5nbGU7XG4gIGNvbnN0IHkgPSBjb29yZGluYXRlWzFdICogY29zQW5nbGUgKyBjb29yZGluYXRlWzBdICogc2luQW5nbGU7XG4gIGNvb3JkaW5hdGVbMF0gPSB4O1xuICBjb29yZGluYXRlWzFdID0geTtcbiAgcmV0dXJuIGNvb3JkaW5hdGU7XG59XG5cbi8qKlxuICogU2NhbGUgYGNvb3JkaW5hdGVgIGJ5IGBzY2FsZWAuIGBjb29yZGluYXRlYCBpcyBtb2RpZmllZCBpbiBwbGFjZSBhbmQgcmV0dXJuZWRcbiAqIGJ5IHRoZSBmdW5jdGlvbi5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqICAgICBpbXBvcnQge3NjYWxlIGFzIHNjYWxlQ29vcmRpbmF0ZX0gZnJvbSAnb2wvY29vcmRpbmF0ZS5qcyc7XG4gKlxuICogICAgIGNvbnN0IGNvb3JkID0gWzcuODUsIDQ3Ljk4MzMzM107XG4gKiAgICAgY29uc3Qgc2NhbGUgPSAxLjI7XG4gKiAgICAgc2NhbGVDb29yZGluYXRlKGNvb3JkLCBzY2FsZSk7XG4gKiAgICAgLy8gY29vcmQgaXMgbm93IFs5LjQyLCA1Ny41Nzk5OTk2XVxuICpcbiAqIEBwYXJhbSB7Q29vcmRpbmF0ZX0gY29vcmRpbmF0ZSBDb29yZGluYXRlLlxuICogQHBhcmFtIHtudW1iZXJ9IHNjYWxlIFNjYWxlIGZhY3Rvci5cbiAqIEByZXR1cm4ge0Nvb3JkaW5hdGV9IENvb3JkaW5hdGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZShjb29yZGluYXRlLCBzY2FsZSkge1xuICBjb29yZGluYXRlWzBdICo9IHNjYWxlO1xuICBjb29yZGluYXRlWzFdICo9IHNjYWxlO1xuICByZXR1cm4gY29vcmRpbmF0ZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0Nvb3JkaW5hdGV9IGNvb3JkMSBGaXJzdCBjb29yZGluYXRlLlxuICogQHBhcmFtIHtDb29yZGluYXRlfSBjb29yZDIgU2Vjb25kIGNvb3JkaW5hdGUuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFNxdWFyZWQgZGlzdGFuY2UgYmV0d2VlbiBjb29yZDEgYW5kIGNvb3JkMi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNxdWFyZWREaXN0YW5jZShjb29yZDEsIGNvb3JkMikge1xuICBjb25zdCBkeCA9IGNvb3JkMVswXSAtIGNvb3JkMlswXTtcbiAgY29uc3QgZHkgPSBjb29yZDFbMV0gLSBjb29yZDJbMV07XG4gIHJldHVybiBkeCAqIGR4ICsgZHkgKiBkeTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0Nvb3JkaW5hdGV9IGNvb3JkMSBGaXJzdCBjb29yZGluYXRlLlxuICogQHBhcmFtIHtDb29yZGluYXRlfSBjb29yZDIgU2Vjb25kIGNvb3JkaW5hdGUuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IERpc3RhbmNlIGJldHdlZW4gY29vcmQxIGFuZCBjb29yZDIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaXN0YW5jZShjb29yZDEsIGNvb3JkMikge1xuICByZXR1cm4gTWF0aC5zcXJ0KHNxdWFyZWREaXN0YW5jZShjb29yZDEsIGNvb3JkMikpO1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZSB0aGUgc3F1YXJlZCBkaXN0YW5jZSBmcm9tIGEgY29vcmRpbmF0ZSB0byBhIGxpbmUgc2VnbWVudC5cbiAqXG4gKiBAcGFyYW0ge0Nvb3JkaW5hdGV9IGNvb3JkaW5hdGUgQ29vcmRpbmF0ZSBvZiB0aGUgcG9pbnQuXG4gKiBAcGFyYW0ge0FycmF5PENvb3JkaW5hdGU+fSBzZWdtZW50IExpbmUgc2VnbWVudCAoMlxuICogY29vcmRpbmF0ZXMpLlxuICogQHJldHVybiB7bnVtYmVyfSBTcXVhcmVkIGRpc3RhbmNlIGZyb20gdGhlIHBvaW50IHRvIHRoZSBsaW5lIHNlZ21lbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzcXVhcmVkRGlzdGFuY2VUb1NlZ21lbnQoY29vcmRpbmF0ZSwgc2VnbWVudCkge1xuICByZXR1cm4gc3F1YXJlZERpc3RhbmNlKGNvb3JkaW5hdGUsIGNsb3Nlc3RPblNlZ21lbnQoY29vcmRpbmF0ZSwgc2VnbWVudCkpO1xufVxuXG4vKipcbiAqIEZvcm1hdCBhIGdlb2dyYXBoaWMgY29vcmRpbmF0ZSB3aXRoIHRoZSBoZW1pc3BoZXJlLCBkZWdyZWVzLCBtaW51dGVzLCBhbmRcbiAqIHNlY29uZHMuXG4gKlxuICogRXhhbXBsZSB3aXRob3V0IHNwZWNpZnlpbmcgZnJhY3Rpb25hbCBkaWdpdHM6XG4gKlxuICogICAgIGltcG9ydCB7dG9TdHJpbmdIRE1TfSBmcm9tICdvbC9jb29yZGluYXRlLmpzJztcbiAqXG4gKiAgICAgY29uc3QgY29vcmQgPSBbNy44NSwgNDcuOTgzMzMzXTtcbiAqICAgICBjb25zdCBvdXQgPSB0b1N0cmluZ0hETVMoY29vcmQpO1xuICogICAgIC8vIG91dCBpcyBub3cgJzQ3wrAgNTjigLIgNjDigLMgTiA3wrAgNTDigLIgNjDigLMgRSdcbiAqXG4gKiBFeGFtcGxlIGV4cGxpY2l0bHkgc3BlY2lmeWluZyAxIGZyYWN0aW9uYWwgZGlnaXQ6XG4gKlxuICogICAgIGltcG9ydCB7dG9TdHJpbmdIRE1TfSBmcm9tICdvbC9jb29yZGluYXRlLmpzJztcbiAqXG4gKiAgICAgY29uc3QgY29vcmQgPSBbNy44NSwgNDcuOTgzMzMzXTtcbiAqICAgICBjb25zdCBvdXQgPSB0b1N0cmluZ0hETVMoY29vcmQsIDEpO1xuICogICAgIC8vIG91dCBpcyBub3cgJzQ3wrAgNTjigLIgNjAuMOKAsyBOIDfCsCA1MOKAsiA2MC4w4oCzIEUnXG4gKlxuICogQHBhcmFtIHtDb29yZGluYXRlfSBjb29yZGluYXRlIENvb3JkaW5hdGUuXG4gKiBAcGFyYW0ge251bWJlcn0gW2ZyYWN0aW9uRGlnaXRzXSBUaGUgbnVtYmVyIG9mIGRpZ2l0cyB0byBpbmNsdWRlXG4gKiAgICBhZnRlciB0aGUgZGVjaW1hbCBwb2ludC4gRGVmYXVsdCBpcyBgMGAuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IEhlbWlzcGhlcmUsIGRlZ3JlZXMsIG1pbnV0ZXMgYW5kIHNlY29uZHMuXG4gKiBAYXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b1N0cmluZ0hETVMoY29vcmRpbmF0ZSwgZnJhY3Rpb25EaWdpdHMpIHtcbiAgaWYgKGNvb3JkaW5hdGUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgZGVncmVlc1RvU3RyaW5nSERNUygnTlMnLCBjb29yZGluYXRlWzFdLCBmcmFjdGlvbkRpZ2l0cykgK1xuICAgICAgJyAnICtcbiAgICAgIGRlZ3JlZXNUb1N0cmluZ0hETVMoJ0VXJywgY29vcmRpbmF0ZVswXSwgZnJhY3Rpb25EaWdpdHMpXG4gICAgKTtcbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbi8qKlxuICogRm9ybWF0IGEgY29vcmRpbmF0ZSBhcyBhIGNvbW1hIGRlbGltaXRlZCBzdHJpbmcuXG4gKlxuICogRXhhbXBsZSB3aXRob3V0IHNwZWNpZnlpbmcgZnJhY3Rpb25hbCBkaWdpdHM6XG4gKlxuICogICAgIGltcG9ydCB7dG9TdHJpbmdYWX0gZnJvbSAnb2wvY29vcmRpbmF0ZS5qcyc7XG4gKlxuICogICAgIGNvbnN0IGNvb3JkID0gWzcuODUsIDQ3Ljk4MzMzM107XG4gKiAgICAgY29uc3Qgb3V0ID0gdG9TdHJpbmdYWShjb29yZCk7XG4gKiAgICAgLy8gb3V0IGlzIG5vdyAnOCwgNDgnXG4gKlxuICogRXhhbXBsZSBleHBsaWNpdGx5IHNwZWNpZnlpbmcgMSBmcmFjdGlvbmFsIGRpZ2l0OlxuICpcbiAqICAgICBpbXBvcnQge3RvU3RyaW5nWFl9IGZyb20gJ29sL2Nvb3JkaW5hdGUuanMnO1xuICpcbiAqICAgICBjb25zdCBjb29yZCA9IFs3Ljg1LCA0Ny45ODMzMzNdO1xuICogICAgIGNvbnN0IG91dCA9IHRvU3RyaW5nWFkoY29vcmQsIDEpO1xuICogICAgIC8vIG91dCBpcyBub3cgJzcuOCwgNDguMCdcbiAqXG4gKiBAcGFyYW0ge0Nvb3JkaW5hdGV9IGNvb3JkaW5hdGUgQ29vcmRpbmF0ZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbZnJhY3Rpb25EaWdpdHNdIFRoZSBudW1iZXIgb2YgZGlnaXRzIHRvIGluY2x1ZGVcbiAqICAgIGFmdGVyIHRoZSBkZWNpbWFsIHBvaW50LiBEZWZhdWx0IGlzIGAwYC5cbiAqIEByZXR1cm4ge3N0cmluZ30gWFkuXG4gKiBAYXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b1N0cmluZ1hZKGNvb3JkaW5hdGUsIGZyYWN0aW9uRGlnaXRzKSB7XG4gIHJldHVybiBmb3JtYXQoY29vcmRpbmF0ZSwgJ3t4fSwge3l9JywgZnJhY3Rpb25EaWdpdHMpO1xufVxuXG4vKipcbiAqIE1vZGlmaWVzIHRoZSBwcm92aWRlZCBjb29yZGluYXRlIGluLXBsYWNlIHRvIGJlIHdpdGhpbiB0aGUgcmVhbCB3b3JsZFxuICogZXh0ZW50LiBUaGUgbG93ZXIgcHJvamVjdGlvbiBleHRlbnQgYm91bmRhcnkgaXMgaW5jbHVzaXZlLCB0aGUgdXBwZXIgb25lXG4gKiBleGNsdXNpdmUuXG4gKlxuICogQHBhcmFtIHtDb29yZGluYXRlfSBjb29yZGluYXRlIENvb3JkaW5hdGUuXG4gKiBAcGFyYW0ge2ltcG9ydChcIi4vcHJvai9Qcm9qZWN0aW9uLmpzXCIpLmRlZmF1bHR9IHByb2plY3Rpb24gUHJvamVjdGlvbi5cbiAqIEByZXR1cm4ge0Nvb3JkaW5hdGV9IFRoZSBjb29yZGluYXRlIHdpdGhpbiB0aGUgcmVhbCB3b3JsZCBleHRlbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3cmFwWChjb29yZGluYXRlLCBwcm9qZWN0aW9uKSB7XG4gIGlmIChwcm9qZWN0aW9uLmNhbldyYXBYKCkpIHtcbiAgICBjb25zdCB3b3JsZFdpZHRoID0gZ2V0V2lkdGgocHJvamVjdGlvbi5nZXRFeHRlbnQoKSk7XG4gICAgY29uc3Qgd29ybGRzQXdheSA9IGdldFdvcmxkc0F3YXkoY29vcmRpbmF0ZSwgcHJvamVjdGlvbiwgd29ybGRXaWR0aCk7XG4gICAgaWYgKHdvcmxkc0F3YXkpIHtcbiAgICAgIGNvb3JkaW5hdGVbMF0gLT0gd29ybGRzQXdheSAqIHdvcmxkV2lkdGg7XG4gICAgfVxuICB9XG4gIHJldHVybiBjb29yZGluYXRlO1xufVxuLyoqXG4gKiBAcGFyYW0ge0Nvb3JkaW5hdGV9IGNvb3JkaW5hdGUgQ29vcmRpbmF0ZS5cbiAqIEBwYXJhbSB7aW1wb3J0KFwiLi9wcm9qL1Byb2plY3Rpb24uanNcIikuZGVmYXVsdH0gcHJvamVjdGlvbiBQcm9qZWN0aW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzb3VyY2VFeHRlbnRXaWR0aF0gV2lkdGggb2YgdGhlIHNvdXJjZSBleHRlbnQuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IE9mZnNldCBpbiB3b3JsZCB3aWR0aHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRXb3JsZHNBd2F5KGNvb3JkaW5hdGUsIHByb2plY3Rpb24sIHNvdXJjZUV4dGVudFdpZHRoKSB7XG4gIGNvbnN0IHByb2plY3Rpb25FeHRlbnQgPSBwcm9qZWN0aW9uLmdldEV4dGVudCgpO1xuICBsZXQgd29ybGRzQXdheSA9IDA7XG4gIGlmIChcbiAgICBwcm9qZWN0aW9uLmNhbldyYXBYKCkgJiZcbiAgICAoY29vcmRpbmF0ZVswXSA8IHByb2plY3Rpb25FeHRlbnRbMF0gfHwgY29vcmRpbmF0ZVswXSA+IHByb2plY3Rpb25FeHRlbnRbMl0pXG4gICkge1xuICAgIHNvdXJjZUV4dGVudFdpZHRoID0gc291cmNlRXh0ZW50V2lkdGggfHwgZ2V0V2lkdGgocHJvamVjdGlvbkV4dGVudCk7XG4gICAgd29ybGRzQXdheSA9IE1hdGguZmxvb3IoXG4gICAgICAoY29vcmRpbmF0ZVswXSAtIHByb2plY3Rpb25FeHRlbnRbMF0pIC8gc291cmNlRXh0ZW50V2lkdGgsXG4gICAgKTtcbiAgfVxuICByZXR1cm4gd29ybGRzQXdheTtcbn1cbiIsIi8qKlxuICogQG1vZHVsZSBvbC9ldmVudHNcbiAqL1xuaW1wb3J0IHtjbGVhcn0gZnJvbSAnLi9vYmouanMnO1xuXG4vKipcbiAqIEtleSB0byB1c2Ugd2l0aCB7QGxpbmsgbW9kdWxlOm9sL09ic2VydmFibGUudW5CeUtleX0uXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBFdmVudHNLZXlcbiAqIEBwcm9wZXJ0eSB7TGlzdGVuZXJGdW5jdGlvbn0gbGlzdGVuZXIgTGlzdGVuZXIuXG4gKiBAcHJvcGVydHkge2ltcG9ydChcIi4vZXZlbnRzL1RhcmdldC5qc1wiKS5FdmVudFRhcmdldExpa2V9IHRhcmdldCBUYXJnZXQuXG4gKiBAcHJvcGVydHkge3N0cmluZ30gdHlwZSBUeXBlLlxuICogQGFwaVxuICovXG5cbi8qKlxuICogTGlzdGVuZXIgZnVuY3Rpb24uIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIHdpdGggYW4gZXZlbnQgb2JqZWN0IGFzIGFyZ3VtZW50LlxuICogV2hlbiB0aGUgZnVuY3Rpb24gcmV0dXJucyBgZmFsc2VgLCBldmVudCBwcm9wYWdhdGlvbiB3aWxsIHN0b3AuXG4gKlxuICogQHR5cGVkZWYge2Z1bmN0aW9uKChFdmVudHxpbXBvcnQoXCIuL2V2ZW50cy9FdmVudC5qc1wiKS5kZWZhdWx0KSk6ICh2b2lkfGJvb2xlYW4pfSBMaXN0ZW5lckZ1bmN0aW9uXG4gKiBAYXBpXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBMaXN0ZW5lck9iamVjdFxuICogQHByb3BlcnR5IHtMaXN0ZW5lckZ1bmN0aW9ufSBoYW5kbGVFdmVudCBIYW5kbGVFdmVudCBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtMaXN0ZW5lckZ1bmN0aW9ufExpc3RlbmVyT2JqZWN0fSBMaXN0ZW5lclxuICovXG5cbi8qKlxuICogUmVnaXN0ZXJzIGFuIGV2ZW50IGxpc3RlbmVyIG9uIGFuIGV2ZW50IHRhcmdldC4gSW5zcGlyZWQgYnlcbiAqIGh0dHBzOi8vZ29vZ2xlLmdpdGh1Yi5pby9jbG9zdXJlLWxpYnJhcnkvYXBpL3NvdXJjZS9jbG9zdXJlL2dvb2cvZXZlbnRzL2V2ZW50cy5qcy5zcmMuaHRtbFxuICpcbiAqIFRoaXMgZnVuY3Rpb24gZWZmaWNpZW50bHkgYmluZHMgYSBgbGlzdGVuZXJgIHRvIGEgYHRoaXNgIG9iamVjdCwgYW5kIHJldHVybnNcbiAqIGEga2V5IGZvciB1c2Ugd2l0aCB7QGxpbmsgbW9kdWxlOm9sL2V2ZW50cy51bmxpc3RlbkJ5S2V5fS5cbiAqXG4gKiBAcGFyYW0ge2ltcG9ydChcIi4vZXZlbnRzL1RhcmdldC5qc1wiKS5FdmVudFRhcmdldExpa2V9IHRhcmdldCBFdmVudCB0YXJnZXQuXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBFdmVudCB0eXBlLlxuICogQHBhcmFtIHtMaXN0ZW5lckZ1bmN0aW9ufSBsaXN0ZW5lciBMaXN0ZW5lci5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbdGhpc0FyZ10gT2JqZWN0IHJlZmVyZW5jZWQgYnkgdGhlIGB0aGlzYCBrZXl3b3JkIGluIHRoZVxuICogICAgIGxpc3RlbmVyLiBEZWZhdWx0IGlzIHRoZSBgdGFyZ2V0YC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29uY2VdIElmIHRydWUsIGFkZCB0aGUgbGlzdGVuZXIgYXMgb25lLW9mZiBsaXN0ZW5lci5cbiAqIEByZXR1cm4ge0V2ZW50c0tleX0gVW5pcXVlIGtleSBmb3IgdGhlIGxpc3RlbmVyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbGlzdGVuKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIsIHRoaXNBcmcsIG9uY2UpIHtcbiAgaWYgKHRoaXNBcmcgJiYgdGhpc0FyZyAhPT0gdGFyZ2V0KSB7XG4gICAgbGlzdGVuZXIgPSBsaXN0ZW5lci5iaW5kKHRoaXNBcmcpO1xuICB9XG4gIGlmIChvbmNlKSB7XG4gICAgY29uc3Qgb3JpZ2luYWxMaXN0ZW5lciA9IGxpc3RlbmVyO1xuICAgIGxpc3RlbmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpO1xuICAgICAgb3JpZ2luYWxMaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH1cbiAgY29uc3QgZXZlbnRzS2V5ID0ge1xuICAgIHRhcmdldDogdGFyZ2V0LFxuICAgIHR5cGU6IHR5cGUsXG4gICAgbGlzdGVuZXI6IGxpc3RlbmVyLFxuICB9O1xuICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcik7XG4gIHJldHVybiBldmVudHNLZXk7XG59XG5cbi8qKlxuICogUmVnaXN0ZXJzIGEgb25lLW9mZiBldmVudCBsaXN0ZW5lciBvbiBhbiBldmVudCB0YXJnZXQuIEluc3BpcmVkIGJ5XG4gKiBodHRwczovL2dvb2dsZS5naXRodWIuaW8vY2xvc3VyZS1saWJyYXJ5L2FwaS9zb3VyY2UvY2xvc3VyZS9nb29nL2V2ZW50cy9ldmVudHMuanMuc3JjLmh0bWxcbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGVmZmljaWVudGx5IGJpbmRzIGEgYGxpc3RlbmVyYCBhcyBzZWxmLXVucmVnaXN0ZXJpbmcgbGlzdGVuZXJcbiAqIHRvIGEgYHRoaXNgIG9iamVjdCwgYW5kIHJldHVybnMgYSBrZXkgZm9yIHVzZSB3aXRoXG4gKiB7QGxpbmsgbW9kdWxlOm9sL2V2ZW50cy51bmxpc3RlbkJ5S2V5fSBpbiBjYXNlIHRoZSBsaXN0ZW5lciBuZWVkcyB0byBiZVxuICogdW5yZWdpc3RlcmVkIGJlZm9yZSBpdCBpcyBjYWxsZWQuXG4gKlxuICogV2hlbiB7QGxpbmsgbW9kdWxlOm9sL2V2ZW50cy5saXN0ZW59IGlzIGNhbGxlZCB3aXRoIHRoZSBzYW1lIGFyZ3VtZW50cyBhZnRlciB0aGlzXG4gKiBmdW5jdGlvbiwgdGhlIHNlbGYtdW5yZWdpc3RlcmluZyBsaXN0ZW5lciB3aWxsIGJlIHR1cm5lZCBpbnRvIGEgcGVybWFuZW50XG4gKiBsaXN0ZW5lci5cbiAqXG4gKiBAcGFyYW0ge2ltcG9ydChcIi4vZXZlbnRzL1RhcmdldC5qc1wiKS5FdmVudFRhcmdldExpa2V9IHRhcmdldCBFdmVudCB0YXJnZXQuXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBFdmVudCB0eXBlLlxuICogQHBhcmFtIHtMaXN0ZW5lckZ1bmN0aW9ufSBsaXN0ZW5lciBMaXN0ZW5lci5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbdGhpc0FyZ10gT2JqZWN0IHJlZmVyZW5jZWQgYnkgdGhlIGB0aGlzYCBrZXl3b3JkIGluIHRoZVxuICogICAgIGxpc3RlbmVyLiBEZWZhdWx0IGlzIHRoZSBgdGFyZ2V0YC5cbiAqIEByZXR1cm4ge0V2ZW50c0tleX0gS2V5IGZvciB1bmxpc3RlbkJ5S2V5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gbGlzdGVuT25jZSh0YXJnZXQsIHR5cGUsIGxpc3RlbmVyLCB0aGlzQXJnKSB7XG4gIHJldHVybiBsaXN0ZW4odGFyZ2V0LCB0eXBlLCBsaXN0ZW5lciwgdGhpc0FyZywgdHJ1ZSk7XG59XG5cbi8qKlxuICogVW5yZWdpc3RlcnMgZXZlbnQgbGlzdGVuZXJzIG9uIGFuIGV2ZW50IHRhcmdldC4gSW5zcGlyZWQgYnlcbiAqIGh0dHBzOi8vZ29vZ2xlLmdpdGh1Yi5pby9jbG9zdXJlLWxpYnJhcnkvYXBpL3NvdXJjZS9jbG9zdXJlL2dvb2cvZXZlbnRzL2V2ZW50cy5qcy5zcmMuaHRtbFxuICpcbiAqIFRoZSBhcmd1bWVudCBwYXNzZWQgdG8gdGhpcyBmdW5jdGlvbiBpcyB0aGUga2V5IHJldHVybmVkIGZyb21cbiAqIHtAbGluayBtb2R1bGU6b2wvZXZlbnRzLmxpc3Rlbn0gb3Ige0BsaW5rIG1vZHVsZTpvbC9ldmVudHMubGlzdGVuT25jZX0uXG4gKlxuICogQHBhcmFtIHtFdmVudHNLZXl9IGtleSBUaGUga2V5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gdW5saXN0ZW5CeUtleShrZXkpIHtcbiAgaWYgKGtleSAmJiBrZXkudGFyZ2V0KSB7XG4gICAga2V5LnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGtleS50eXBlLCBrZXkubGlzdGVuZXIpO1xuICAgIGNsZWFyKGtleSk7XG4gIH1cbn1cbiIsIi8qKlxuICogQG1vZHVsZSBvbC9ldmVudHMvRXZlbnRcbiAqL1xuXG4vKipcbiAqIEBjbGFzc2Rlc2NcbiAqIFN0cmlwcGVkIGRvd24gaW1wbGVtZW50YXRpb24gb2YgdGhlIFczQyBET00gTGV2ZWwgMiBFdmVudCBpbnRlcmZhY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL0RPTS1MZXZlbC0yLUV2ZW50cy9ldmVudHMuaHRtbCNFdmVudHMtaW50ZXJmYWNlLlxuICpcbiAqIFRoaXMgaW1wbGVtZW50YXRpb24gb25seSBwcm92aWRlcyBgdHlwZWAgYW5kIGB0YXJnZXRgIHByb3BlcnRpZXMsIGFuZFxuICogYHN0b3BQcm9wYWdhdGlvbmAgYW5kIGBwcmV2ZW50RGVmYXVsdGAgbWV0aG9kcy4gSXQgaXMgbWVhbnQgYXMgYmFzZSBjbGFzc1xuICogZm9yIGhpZ2hlciBsZXZlbCBldmVudHMgZGVmaW5lZCBpbiB0aGUgbGlicmFyeSwgYW5kIHdvcmtzIHdpdGhcbiAqIHtAbGluayBtb2R1bGU6b2wvZXZlbnRzL1RhcmdldH5UYXJnZXR9LlxuICovXG5jbGFzcyBCYXNlRXZlbnQge1xuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgVHlwZS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHR5cGUpIHtcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLnByb3BhZ2F0aW9uU3RvcHBlZDtcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuZGVmYXVsdFByZXZlbnRlZDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBldmVudCB0eXBlLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQGFwaVxuICAgICAqL1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZXZlbnQgdGFyZ2V0LlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICogQGFwaVxuICAgICAqL1xuICAgIHRoaXMudGFyZ2V0ID0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmV2ZW50IGRlZmF1bHQuIFRoaXMgbWVhbnMgdGhhdCBubyBlbXVsYXRlZCBgY2xpY2tgLCBgc2luZ2xlY2xpY2tgIG9yIGBkb3VibGVjbGlja2AgZXZlbnRzXG4gICAqIHdpbGwgYmUgZmlyZWQuXG4gICAqIEBhcGlcbiAgICovXG4gIHByZXZlbnREZWZhdWx0KCkge1xuICAgIHRoaXMuZGVmYXVsdFByZXZlbnRlZCA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogU3RvcCBldmVudCBwcm9wYWdhdGlvbi5cbiAgICogQGFwaVxuICAgKi9cbiAgc3RvcFByb3BhZ2F0aW9uKCkge1xuICAgIHRoaXMucHJvcGFnYXRpb25TdG9wcGVkID0gdHJ1ZTtcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7RXZlbnR8aW1wb3J0KFwiLi9FdmVudC5qc1wiKS5kZWZhdWx0fSBldnQgRXZlbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0b3BQcm9wYWdhdGlvbihldnQpIHtcbiAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7RXZlbnR8aW1wb3J0KFwiLi9FdmVudC5qc1wiKS5kZWZhdWx0fSBldnQgRXZlbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByZXZlbnREZWZhdWx0KGV2dCkge1xuICBldnQucHJldmVudERlZmF1bHQoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZUV2ZW50O1xuIiwiLyoqXG4gKiBAbW9kdWxlIG9sL2V2ZW50cy9FdmVudFR5cGVcbiAqL1xuXG4vKipcbiAqIEBlbnVtIHtzdHJpbmd9XG4gKiBAY29uc3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICAvKipcbiAgICogR2VuZXJpYyBjaGFuZ2UgZXZlbnQuIFRyaWdnZXJlZCB3aGVuIHRoZSByZXZpc2lvbiBjb3VudGVyIGlzIGluY3JlYXNlZC5cbiAgICogQGV2ZW50IG1vZHVsZTpvbC9ldmVudHMvRXZlbnR+QmFzZUV2ZW50I2NoYW5nZVxuICAgKiBAYXBpXG4gICAqL1xuICBDSEFOR0U6ICdjaGFuZ2UnLFxuXG4gIC8qKlxuICAgKiBHZW5lcmljIGVycm9yIGV2ZW50LiBUcmlnZ2VyZWQgd2hlbiBhbiBlcnJvciBvY2N1cnMuXG4gICAqIEBldmVudCBtb2R1bGU6b2wvZXZlbnRzL0V2ZW50fkJhc2VFdmVudCNlcnJvclxuICAgKiBAYXBpXG4gICAqL1xuICBFUlJPUjogJ2Vycm9yJyxcblxuICBCTFVSOiAnYmx1cicsXG4gIENMRUFSOiAnY2xlYXInLFxuICBDT05URVhUTUVOVTogJ2NvbnRleHRtZW51JyxcbiAgQ0xJQ0s6ICdjbGljaycsXG4gIERCTENMSUNLOiAnZGJsY2xpY2snLFxuICBEUkFHRU5URVI6ICdkcmFnZW50ZXInLFxuICBEUkFHT1ZFUjogJ2RyYWdvdmVyJyxcbiAgRFJPUDogJ2Ryb3AnLFxuICBGT0NVUzogJ2ZvY3VzJyxcbiAgS0VZRE9XTjogJ2tleWRvd24nLFxuICBLRVlQUkVTUzogJ2tleXByZXNzJyxcbiAgTE9BRDogJ2xvYWQnLFxuICBSRVNJWkU6ICdyZXNpemUnLFxuICBUT1VDSE1PVkU6ICd0b3VjaG1vdmUnLFxuICBXSEVFTDogJ3doZWVsJyxcbn07XG4iLCIvKipcbiAqIEBtb2R1bGUgb2wvZXZlbnRzL1RhcmdldFxuICovXG5pbXBvcnQgRGlzcG9zYWJsZSBmcm9tICcuLi9EaXNwb3NhYmxlLmpzJztcbmltcG9ydCBFdmVudCBmcm9tICcuL0V2ZW50LmpzJztcbmltcG9ydCB7Vk9JRH0gZnJvbSAnLi4vZnVuY3Rpb25zLmpzJztcbmltcG9ydCB7Y2xlYXJ9IGZyb20gJy4uL29iai5qcyc7XG5cbi8qKlxuICogQHR5cGVkZWYge0V2ZW50VGFyZ2V0fFRhcmdldH0gRXZlbnRUYXJnZXRMaWtlXG4gKi9cblxuLyoqXG4gKiBAY2xhc3NkZXNjXG4gKiBBIHNpbXBsaWZpZWQgaW1wbGVtZW50YXRpb24gb2YgdGhlIFczQyBET00gTGV2ZWwgMiBFdmVudFRhcmdldCBpbnRlcmZhY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSLzIwMDAvUkVDLURPTS1MZXZlbC0yLUV2ZW50cy0yMDAwMTExMy9ldmVudHMuaHRtbCNFdmVudHMtRXZlbnRUYXJnZXQuXG4gKlxuICogVGhlcmUgYXJlIHR3byBpbXBvcnRhbnQgc2ltcGxpZmljYXRpb25zIGNvbXBhcmVkIHRvIHRoZSBzcGVjaWZpY2F0aW9uOlxuICpcbiAqIDEuIFRoZSBoYW5kbGluZyBvZiBgdXNlQ2FwdHVyZWAgaW4gYGFkZEV2ZW50TGlzdGVuZXJgIGFuZFxuICogICAgYHJlbW92ZUV2ZW50TGlzdGVuZXJgLiBUaGVyZSBpcyBubyByZWFsIGNhcHR1cmUgbW9kZWwuXG4gKiAyLiBUaGUgaGFuZGxpbmcgb2YgYHN0b3BQcm9wYWdhdGlvbmAgYW5kIGBwcmV2ZW50RGVmYXVsdGAgb24gYGRpc3BhdGNoRXZlbnRgLlxuICogICAgVGhlcmUgaXMgbm8gZXZlbnQgdGFyZ2V0IGhpZXJhcmNoeS4gV2hlbiBhIGxpc3RlbmVyIGNhbGxzXG4gKiAgICBgc3RvcFByb3BhZ2F0aW9uYCBvciBgcHJldmVudERlZmF1bHRgIG9uIGFuIGV2ZW50IG9iamVjdCwgaXQgbWVhbnMgdGhhdCBub1xuICogICAgbW9yZSBsaXN0ZW5lcnMgYWZ0ZXIgdGhpcyBvbmUgd2lsbCBiZSBjYWxsZWQuIFNhbWUgYXMgd2hlbiB0aGUgbGlzdGVuZXJcbiAqICAgIHJldHVybnMgZmFsc2UuXG4gKi9cbmNsYXNzIFRhcmdldCBleHRlbmRzIERpc3Bvc2FibGUge1xuICAvKipcbiAgICogQHBhcmFtIHsqfSBbdGFyZ2V0XSBEZWZhdWx0IGV2ZW50IHRhcmdldCBmb3IgZGlzcGF0Y2hlZCBldmVudHMuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih0YXJnZXQpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdHlwZSB7Kn1cbiAgICAgKi9cbiAgICB0aGlzLmV2ZW50VGFyZ2V0XyA9IHRhcmdldDtcblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHR5cGUge09iamVjdDxzdHJpbmcsIG51bWJlcj58bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLnBlbmRpbmdSZW1vdmFsc18gPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdHlwZSB7T2JqZWN0PHN0cmluZywgbnVtYmVyPnxudWxsfVxuICAgICAqL1xuICAgIHRoaXMuZGlzcGF0Y2hpbmdfID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHR5cGUge09iamVjdDxzdHJpbmcsIEFycmF5PGltcG9ydChcIi4uL2V2ZW50cy5qc1wiKS5MaXN0ZW5lcj4+fG51bGx9XG4gICAgICovXG4gICAgdGhpcy5saXN0ZW5lcnNfID0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUeXBlLlxuICAgKiBAcGFyYW0ge2ltcG9ydChcIi4uL2V2ZW50cy5qc1wiKS5MaXN0ZW5lcn0gbGlzdGVuZXIgTGlzdGVuZXIuXG4gICAqL1xuICBhZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgaWYgKCF0eXBlIHx8ICFsaXN0ZW5lcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVyc18gfHwgKHRoaXMubGlzdGVuZXJzXyA9IHt9KTtcbiAgICBjb25zdCBsaXN0ZW5lcnNGb3JUeXBlID0gbGlzdGVuZXJzW3R5cGVdIHx8IChsaXN0ZW5lcnNbdHlwZV0gPSBbXSk7XG4gICAgaWYgKCFsaXN0ZW5lcnNGb3JUeXBlLmluY2x1ZGVzKGxpc3RlbmVyKSkge1xuICAgICAgbGlzdGVuZXJzRm9yVHlwZS5wdXNoKGxpc3RlbmVyKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGlzcGF0Y2hlcyBhbiBldmVudCBhbmQgY2FsbHMgYWxsIGxpc3RlbmVycyBsaXN0ZW5pbmcgZm9yIGV2ZW50c1xuICAgKiBvZiB0aGlzIHR5cGUuIFRoZSBldmVudCBwYXJhbWV0ZXIgY2FuIGVpdGhlciBiZSBhIHN0cmluZyBvciBhblxuICAgKiBPYmplY3Qgd2l0aCBhIGB0eXBlYCBwcm9wZXJ0eS5cbiAgICpcbiAgICogQHBhcmFtIHtpbXBvcnQoXCIuL0V2ZW50LmpzXCIpLmRlZmF1bHR8c3RyaW5nfSBldmVudCBFdmVudCBvYmplY3QuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW58dW5kZWZpbmVkfSBgZmFsc2VgIGlmIGFueW9uZSBjYWxsZWQgcHJldmVudERlZmF1bHQgb24gdGhlXG4gICAqICAgICBldmVudCBvYmplY3Qgb3IgaWYgYW55IG9mIHRoZSBsaXN0ZW5lcnMgcmV0dXJuZWQgZmFsc2UuXG4gICAqIEBhcGlcbiAgICovXG4gIGRpc3BhdGNoRXZlbnQoZXZlbnQpIHtcbiAgICBjb25zdCBpc1N0cmluZyA9IHR5cGVvZiBldmVudCA9PT0gJ3N0cmluZyc7XG4gICAgY29uc3QgdHlwZSA9IGlzU3RyaW5nID8gZXZlbnQgOiBldmVudC50eXBlO1xuICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzXyAmJiB0aGlzLmxpc3RlbmVyc19bdHlwZV07XG4gICAgaWYgKCFsaXN0ZW5lcnMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBldnQgPSBpc1N0cmluZyA/IG5ldyBFdmVudChldmVudCkgOiAvKiogQHR5cGUge0V2ZW50fSAqLyAoZXZlbnQpO1xuICAgIGlmICghZXZ0LnRhcmdldCkge1xuICAgICAgZXZ0LnRhcmdldCA9IHRoaXMuZXZlbnRUYXJnZXRfIHx8IHRoaXM7XG4gICAgfVxuICAgIGNvbnN0IGRpc3BhdGNoaW5nID0gdGhpcy5kaXNwYXRjaGluZ18gfHwgKHRoaXMuZGlzcGF0Y2hpbmdfID0ge30pO1xuICAgIGNvbnN0IHBlbmRpbmdSZW1vdmFscyA9XG4gICAgICB0aGlzLnBlbmRpbmdSZW1vdmFsc18gfHwgKHRoaXMucGVuZGluZ1JlbW92YWxzXyA9IHt9KTtcbiAgICBpZiAoISh0eXBlIGluIGRpc3BhdGNoaW5nKSkge1xuICAgICAgZGlzcGF0Y2hpbmdbdHlwZV0gPSAwO1xuICAgICAgcGVuZGluZ1JlbW92YWxzW3R5cGVdID0gMDtcbiAgICB9XG4gICAgKytkaXNwYXRjaGluZ1t0eXBlXTtcbiAgICBsZXQgcHJvcGFnYXRlO1xuICAgIGZvciAobGV0IGkgPSAwLCBpaSA9IGxpc3RlbmVycy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgICBpZiAoJ2hhbmRsZUV2ZW50JyBpbiBsaXN0ZW5lcnNbaV0pIHtcbiAgICAgICAgcHJvcGFnYXRlID0gLyoqIEB0eXBlIHtpbXBvcnQoXCIuLi9ldmVudHMuanNcIikuTGlzdGVuZXJPYmplY3R9ICovIChcbiAgICAgICAgICBsaXN0ZW5lcnNbaV1cbiAgICAgICAgKS5oYW5kbGVFdmVudChldnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvcGFnYXRlID0gLyoqIEB0eXBlIHtpbXBvcnQoXCIuLi9ldmVudHMuanNcIikuTGlzdGVuZXJGdW5jdGlvbn0gKi8gKFxuICAgICAgICAgIGxpc3RlbmVyc1tpXVxuICAgICAgICApLmNhbGwodGhpcywgZXZ0KTtcbiAgICAgIH1cbiAgICAgIGlmIChwcm9wYWdhdGUgPT09IGZhbHNlIHx8IGV2dC5wcm9wYWdhdGlvblN0b3BwZWQpIHtcbiAgICAgICAgcHJvcGFnYXRlID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoLS1kaXNwYXRjaGluZ1t0eXBlXSA9PT0gMCkge1xuICAgICAgbGV0IHByID0gcGVuZGluZ1JlbW92YWxzW3R5cGVdO1xuICAgICAgZGVsZXRlIHBlbmRpbmdSZW1vdmFsc1t0eXBlXTtcbiAgICAgIHdoaWxlIChwci0tKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBWT0lEKTtcbiAgICAgIH1cbiAgICAgIGRlbGV0ZSBkaXNwYXRjaGluZ1t0eXBlXTtcbiAgICB9XG4gICAgcmV0dXJuIHByb3BhZ2F0ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhbiB1cC5cbiAgICovXG4gIGRpc3Bvc2VJbnRlcm5hbCgpIHtcbiAgICB0aGlzLmxpc3RlbmVyc18gJiYgY2xlYXIodGhpcy5saXN0ZW5lcnNfKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGxpc3RlbmVycyBmb3IgYSBzcGVjaWZpZWQgZXZlbnQgdHlwZS4gTGlzdGVuZXJzIGFyZSByZXR1cm5lZCBpbiB0aGVcbiAgICogb3JkZXIgdGhhdCB0aGV5IHdpbGwgYmUgY2FsbGVkIGluLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUeXBlLlxuICAgKiBAcmV0dXJuIHtBcnJheTxpbXBvcnQoXCIuLi9ldmVudHMuanNcIikuTGlzdGVuZXI+fHVuZGVmaW5lZH0gTGlzdGVuZXJzLlxuICAgKi9cbiAgZ2V0TGlzdGVuZXJzKHR5cGUpIHtcbiAgICByZXR1cm4gKHRoaXMubGlzdGVuZXJzXyAmJiB0aGlzLmxpc3RlbmVyc19bdHlwZV0pIHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3R5cGVdIFR5cGUuIElmIG5vdCBwcm92aWRlZCxcbiAgICogICAgIGB0cnVlYCB3aWxsIGJlIHJldHVybmVkIGlmIHRoaXMgZXZlbnQgdGFyZ2V0IGhhcyBhbnkgbGlzdGVuZXJzLlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBIYXMgbGlzdGVuZXJzLlxuICAgKi9cbiAgaGFzTGlzdGVuZXIodHlwZSkge1xuICAgIGlmICghdGhpcy5saXN0ZW5lcnNfKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0eXBlXG4gICAgICA/IHR5cGUgaW4gdGhpcy5saXN0ZW5lcnNfXG4gICAgICA6IE9iamVjdC5rZXlzKHRoaXMubGlzdGVuZXJzXykubGVuZ3RoID4gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUeXBlLlxuICAgKiBAcGFyYW0ge2ltcG9ydChcIi4uL2V2ZW50cy5qc1wiKS5MaXN0ZW5lcn0gbGlzdGVuZXIgTGlzdGVuZXIuXG4gICAqL1xuICByZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgaWYgKCF0aGlzLmxpc3RlbmVyc18pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnNfW3R5cGVdO1xuICAgIGlmICghbGlzdGVuZXJzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGluZGV4ID0gbGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIGlmICh0aGlzLnBlbmRpbmdSZW1vdmFsc18gJiYgdHlwZSBpbiB0aGlzLnBlbmRpbmdSZW1vdmFsc18pIHtcbiAgICAgICAgLy8gbWFrZSBsaXN0ZW5lciBhIG5vLW9wLCBhbmQgcmVtb3ZlIGxhdGVyIGluICNkaXNwYXRjaEV2ZW50KClcbiAgICAgICAgbGlzdGVuZXJzW2luZGV4XSA9IFZPSUQ7XG4gICAgICAgICsrdGhpcy5wZW5kaW5nUmVtb3ZhbHNfW3R5cGVdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGlmIChsaXN0ZW5lcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgZGVsZXRlIHRoaXMubGlzdGVuZXJzX1t0eXBlXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYXJnZXQ7XG4iLCIvKipcbiAqIEBtb2R1bGUgb2wvZXh0ZW50XG4gKi9cbmltcG9ydCBSZWxhdGlvbnNoaXAgZnJvbSAnLi9leHRlbnQvUmVsYXRpb25zaGlwLmpzJztcblxuLyoqXG4gKiBBbiBhcnJheSBvZiBudW1iZXJzIHJlcHJlc2VudGluZyBhbiBleHRlbnQ6IGBbbWlueCwgbWlueSwgbWF4eCwgbWF4eV1gLlxuICogQHR5cGVkZWYge0FycmF5PG51bWJlcj59IEV4dGVudFxuICogQGFwaVxuICovXG5cbi8qKlxuICogRXh0ZW50IGNvcm5lci5cbiAqIEB0eXBlZGVmIHsnYm90dG9tLWxlZnQnIHwgJ2JvdHRvbS1yaWdodCcgfCAndG9wLWxlZnQnIHwgJ3RvcC1yaWdodCd9IENvcm5lclxuICovXG5cbi8qKlxuICogQnVpbGQgYW4gZXh0ZW50IHRoYXQgaW5jbHVkZXMgYWxsIGdpdmVuIGNvb3JkaW5hdGVzLlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8aW1wb3J0KFwiLi9jb29yZGluYXRlLmpzXCIpLkNvb3JkaW5hdGU+fSBjb29yZGluYXRlcyBDb29yZGluYXRlcy5cbiAqIEByZXR1cm4ge0V4dGVudH0gQm91bmRpbmcgZXh0ZW50LlxuICogQGFwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gYm91bmRpbmdFeHRlbnQoY29vcmRpbmF0ZXMpIHtcbiAgY29uc3QgZXh0ZW50ID0gY3JlYXRlRW1wdHkoKTtcbiAgZm9yIChsZXQgaSA9IDAsIGlpID0gY29vcmRpbmF0ZXMubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgIGV4dGVuZENvb3JkaW5hdGUoZXh0ZW50LCBjb29yZGluYXRlc1tpXSk7XG4gIH1cbiAgcmV0dXJuIGV4dGVudDtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHhzIFhzLlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSB5cyBZcy5cbiAqIEBwYXJhbSB7RXh0ZW50fSBbZGVzdF0gRGVzdGluYXRpb24gZXh0ZW50LlxuICogQHByaXZhdGVcbiAqIEByZXR1cm4ge0V4dGVudH0gRXh0ZW50LlxuICovXG5mdW5jdGlvbiBfYm91bmRpbmdFeHRlbnRYWXMoeHMsIHlzLCBkZXN0KSB7XG4gIGNvbnN0IG1pblggPSBNYXRoLm1pbi5hcHBseShudWxsLCB4cyk7XG4gIGNvbnN0IG1pblkgPSBNYXRoLm1pbi5hcHBseShudWxsLCB5cyk7XG4gIGNvbnN0IG1heFggPSBNYXRoLm1heC5hcHBseShudWxsLCB4cyk7XG4gIGNvbnN0IG1heFkgPSBNYXRoLm1heC5hcHBseShudWxsLCB5cyk7XG4gIHJldHVybiBjcmVhdGVPclVwZGF0ZShtaW5YLCBtaW5ZLCBtYXhYLCBtYXhZLCBkZXN0KTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gZXh0ZW50IGluY3JlYXNlZCBieSB0aGUgcHJvdmlkZWQgdmFsdWUuXG4gKiBAcGFyYW0ge0V4dGVudH0gZXh0ZW50IEV4dGVudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSBUaGUgYW1vdW50IGJ5IHdoaWNoIHRoZSBleHRlbnQgc2hvdWxkIGJlIGJ1ZmZlcmVkLlxuICogQHBhcmFtIHtFeHRlbnR9IFtkZXN0XSBFeHRlbnQuXG4gKiBAcmV0dXJuIHtFeHRlbnR9IEV4dGVudC5cbiAqIEBhcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ1ZmZlcihleHRlbnQsIHZhbHVlLCBkZXN0KSB7XG4gIGlmIChkZXN0KSB7XG4gICAgZGVzdFswXSA9IGV4dGVudFswXSAtIHZhbHVlO1xuICAgIGRlc3RbMV0gPSBleHRlbnRbMV0gLSB2YWx1ZTtcbiAgICBkZXN0WzJdID0gZXh0ZW50WzJdICsgdmFsdWU7XG4gICAgZGVzdFszXSA9IGV4dGVudFszXSArIHZhbHVlO1xuICAgIHJldHVybiBkZXN0O1xuICB9XG4gIHJldHVybiBbXG4gICAgZXh0ZW50WzBdIC0gdmFsdWUsXG4gICAgZXh0ZW50WzFdIC0gdmFsdWUsXG4gICAgZXh0ZW50WzJdICsgdmFsdWUsXG4gICAgZXh0ZW50WzNdICsgdmFsdWUsXG4gIF07XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGFuIGV4dGVudC5cbiAqXG4gKiBAcGFyYW0ge0V4dGVudH0gZXh0ZW50IEV4dGVudCB0byBjbG9uZS5cbiAqIEBwYXJhbSB7RXh0ZW50fSBbZGVzdF0gRXh0ZW50LlxuICogQHJldHVybiB7RXh0ZW50fSBUaGUgY2xvbmUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZShleHRlbnQsIGRlc3QpIHtcbiAgaWYgKGRlc3QpIHtcbiAgICBkZXN0WzBdID0gZXh0ZW50WzBdO1xuICAgIGRlc3RbMV0gPSBleHRlbnRbMV07XG4gICAgZGVzdFsyXSA9IGV4dGVudFsyXTtcbiAgICBkZXN0WzNdID0gZXh0ZW50WzNdO1xuICAgIHJldHVybiBkZXN0O1xuICB9XG4gIHJldHVybiBleHRlbnQuc2xpY2UoKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0V4dGVudH0gZXh0ZW50IEV4dGVudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB4IFguXG4gKiBAcGFyYW0ge251bWJlcn0geSBZLlxuICogQHJldHVybiB7bnVtYmVyfSBDbG9zZXN0IHNxdWFyZWQgZGlzdGFuY2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZXN0U3F1YXJlZERpc3RhbmNlWFkoZXh0ZW50LCB4LCB5KSB7XG4gIGxldCBkeCwgZHk7XG4gIGlmICh4IDwgZXh0ZW50WzBdKSB7XG4gICAgZHggPSBleHRlbnRbMF0gLSB4O1xuICB9IGVsc2UgaWYgKGV4dGVudFsyXSA8IHgpIHtcbiAgICBkeCA9IHggLSBleHRlbnRbMl07XG4gIH0gZWxzZSB7XG4gICAgZHggPSAwO1xuICB9XG4gIGlmICh5IDwgZXh0ZW50WzFdKSB7XG4gICAgZHkgPSBleHRlbnRbMV0gLSB5O1xuICB9IGVsc2UgaWYgKGV4dGVudFszXSA8IHkpIHtcbiAgICBkeSA9IHkgLSBleHRlbnRbM107XG4gIH0gZWxzZSB7XG4gICAgZHkgPSAwO1xuICB9XG4gIHJldHVybiBkeCAqIGR4ICsgZHkgKiBkeTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgcGFzc2VkIGNvb3JkaW5hdGUgaXMgY29udGFpbmVkIG9yIG9uIHRoZSBlZGdlIG9mIHRoZSBleHRlbnQuXG4gKlxuICogQHBhcmFtIHtFeHRlbnR9IGV4dGVudCBFeHRlbnQuXG4gKiBAcGFyYW0ge2ltcG9ydChcIi4vY29vcmRpbmF0ZS5qc1wiKS5Db29yZGluYXRlfSBjb29yZGluYXRlIENvb3JkaW5hdGUuXG4gKiBAcmV0dXJuIHtib29sZWFufSBUaGUgY29vcmRpbmF0ZSBpcyBjb250YWluZWQgaW4gdGhlIGV4dGVudC5cbiAqIEBhcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnRhaW5zQ29vcmRpbmF0ZShleHRlbnQsIGNvb3JkaW5hdGUpIHtcbiAgcmV0dXJuIGNvbnRhaW5zWFkoZXh0ZW50LCBjb29yZGluYXRlWzBdLCBjb29yZGluYXRlWzFdKTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBvbmUgZXh0ZW50IGNvbnRhaW5zIGFub3RoZXIuXG4gKlxuICogQW4gZXh0ZW50IGlzIGRlZW1lZCBjb250YWluZWQgaWYgaXQgbGllcyBjb21wbGV0ZWx5IHdpdGhpbiB0aGUgb3RoZXIgZXh0ZW50LFxuICogaW5jbHVkaW5nIGlmIHRoZXkgc2hhcmUgb25lIG9yIG1vcmUgZWRnZXMuXG4gKlxuICogQHBhcmFtIHtFeHRlbnR9IGV4dGVudDEgRXh0ZW50IDEuXG4gKiBAcGFyYW0ge0V4dGVudH0gZXh0ZW50MiBFeHRlbnQgMi5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRoZSBzZWNvbmQgZXh0ZW50IGlzIGNvbnRhaW5lZCBieSBvciBvbiB0aGUgZWRnZSBvZiB0aGVcbiAqICAgICBmaXJzdC5cbiAqIEBhcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnRhaW5zRXh0ZW50KGV4dGVudDEsIGV4dGVudDIpIHtcbiAgcmV0dXJuIChcbiAgICBleHRlbnQxWzBdIDw9IGV4dGVudDJbMF0gJiZcbiAgICBleHRlbnQyWzJdIDw9IGV4dGVudDFbMl0gJiZcbiAgICBleHRlbnQxWzFdIDw9IGV4dGVudDJbMV0gJiZcbiAgICBleHRlbnQyWzNdIDw9IGV4dGVudDFbM11cbiAgKTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgcGFzc2VkIGNvb3JkaW5hdGUgaXMgY29udGFpbmVkIG9yIG9uIHRoZSBlZGdlIG9mIHRoZSBleHRlbnQuXG4gKlxuICogQHBhcmFtIHtFeHRlbnR9IGV4dGVudCBFeHRlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0geCBYIGNvb3JkaW5hdGUuXG4gKiBAcGFyYW0ge251bWJlcn0geSBZIGNvb3JkaW5hdGUuXG4gKiBAcmV0dXJuIHtib29sZWFufSBUaGUgeCwgeSB2YWx1ZXMgYXJlIGNvbnRhaW5lZCBpbiB0aGUgZXh0ZW50LlxuICogQGFwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29udGFpbnNYWShleHRlbnQsIHgsIHkpIHtcbiAgcmV0dXJuIGV4dGVudFswXSA8PSB4ICYmIHggPD0gZXh0ZW50WzJdICYmIGV4dGVudFsxXSA8PSB5ICYmIHkgPD0gZXh0ZW50WzNdO1xufVxuXG4vKipcbiAqIEdldCB0aGUgcmVsYXRpb25zaGlwIGJldHdlZW4gYSBjb29yZGluYXRlIGFuZCBleHRlbnQuXG4gKiBAcGFyYW0ge0V4dGVudH0gZXh0ZW50IFRoZSBleHRlbnQuXG4gKiBAcGFyYW0ge2ltcG9ydChcIi4vY29vcmRpbmF0ZS5qc1wiKS5Db29yZGluYXRlfSBjb29yZGluYXRlIFRoZSBjb29yZGluYXRlLlxuICogQHJldHVybiB7aW1wb3J0KFwiLi9leHRlbnQvUmVsYXRpb25zaGlwLmpzXCIpLmRlZmF1bHR9IFRoZSByZWxhdGlvbnNoaXAgKGJpdHdpc2UgY29tcGFyZSB3aXRoXG4gKiAgICAgaW1wb3J0KFwiLi9leHRlbnQvUmVsYXRpb25zaGlwLmpzXCIpLlJlbGF0aW9uc2hpcCkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb29yZGluYXRlUmVsYXRpb25zaGlwKGV4dGVudCwgY29vcmRpbmF0ZSkge1xuICBjb25zdCBtaW5YID0gZXh0ZW50WzBdO1xuICBjb25zdCBtaW5ZID0gZXh0ZW50WzFdO1xuICBjb25zdCBtYXhYID0gZXh0ZW50WzJdO1xuICBjb25zdCBtYXhZID0gZXh0ZW50WzNdO1xuICBjb25zdCB4ID0gY29vcmRpbmF0ZVswXTtcbiAgY29uc3QgeSA9IGNvb3JkaW5hdGVbMV07XG4gIGxldCByZWxhdGlvbnNoaXAgPSBSZWxhdGlvbnNoaXAuVU5LTk9XTjtcbiAgaWYgKHggPCBtaW5YKSB7XG4gICAgcmVsYXRpb25zaGlwID0gcmVsYXRpb25zaGlwIHwgUmVsYXRpb25zaGlwLkxFRlQ7XG4gIH0gZWxzZSBpZiAoeCA+IG1heFgpIHtcbiAgICByZWxhdGlvbnNoaXAgPSByZWxhdGlvbnNoaXAgfCBSZWxhdGlvbnNoaXAuUklHSFQ7XG4gIH1cbiAgaWYgKHkgPCBtaW5ZKSB7XG4gICAgcmVsYXRpb25zaGlwID0gcmVsYXRpb25zaGlwIHwgUmVsYXRpb25zaGlwLkJFTE9XO1xuICB9IGVsc2UgaWYgKHkgPiBtYXhZKSB7XG4gICAgcmVsYXRpb25zaGlwID0gcmVsYXRpb25zaGlwIHwgUmVsYXRpb25zaGlwLkFCT1ZFO1xuICB9XG4gIGlmIChyZWxhdGlvbnNoaXAgPT09IFJlbGF0aW9uc2hpcC5VTktOT1dOKSB7XG4gICAgcmVsYXRpb25zaGlwID0gUmVsYXRpb25zaGlwLklOVEVSU0VDVElORztcbiAgfVxuICByZXR1cm4gcmVsYXRpb25zaGlwO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhbiBlbXB0eSBleHRlbnQuXG4gKiBAcmV0dXJuIHtFeHRlbnR9IEVtcHR5IGV4dGVudC5cbiAqIEBhcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVtcHR5KCkge1xuICByZXR1cm4gW0luZmluaXR5LCBJbmZpbml0eSwgLUluZmluaXR5LCAtSW5maW5pdHldO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBleHRlbnQgb3IgdXBkYXRlIHRoZSBwcm92aWRlZCBleHRlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gbWluWCBNaW5pbXVtIFguXG4gKiBAcGFyYW0ge251bWJlcn0gbWluWSBNaW5pbXVtIFkuXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4WCBNYXhpbXVtIFguXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4WSBNYXhpbXVtIFkuXG4gKiBAcGFyYW0ge0V4dGVudH0gW2Rlc3RdIERlc3RpbmF0aW9uIGV4dGVudC5cbiAqIEByZXR1cm4ge0V4dGVudH0gRXh0ZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlT3JVcGRhdGUobWluWCwgbWluWSwgbWF4WCwgbWF4WSwgZGVzdCkge1xuICBpZiAoZGVzdCkge1xuICAgIGRlc3RbMF0gPSBtaW5YO1xuICAgIGRlc3RbMV0gPSBtaW5ZO1xuICAgIGRlc3RbMl0gPSBtYXhYO1xuICAgIGRlc3RbM10gPSBtYXhZO1xuICAgIHJldHVybiBkZXN0O1xuICB9XG4gIHJldHVybiBbbWluWCwgbWluWSwgbWF4WCwgbWF4WV07XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IGVtcHR5IGV4dGVudCBvciBtYWtlIHRoZSBwcm92aWRlZCBvbmUgZW1wdHkuXG4gKiBAcGFyYW0ge0V4dGVudH0gW2Rlc3RdIEV4dGVudC5cbiAqIEByZXR1cm4ge0V4dGVudH0gRXh0ZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlT3JVcGRhdGVFbXB0eShkZXN0KSB7XG4gIHJldHVybiBjcmVhdGVPclVwZGF0ZShJbmZpbml0eSwgSW5maW5pdHksIC1JbmZpbml0eSwgLUluZmluaXR5LCBkZXN0KTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydChcIi4vY29vcmRpbmF0ZS5qc1wiKS5Db29yZGluYXRlfSBjb29yZGluYXRlIENvb3JkaW5hdGUuXG4gKiBAcGFyYW0ge0V4dGVudH0gW2Rlc3RdIEV4dGVudC5cbiAqIEByZXR1cm4ge0V4dGVudH0gRXh0ZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlT3JVcGRhdGVGcm9tQ29vcmRpbmF0ZShjb29yZGluYXRlLCBkZXN0KSB7XG4gIGNvbnN0IHggPSBjb29yZGluYXRlWzBdO1xuICBjb25zdCB5ID0gY29vcmRpbmF0ZVsxXTtcbiAgcmV0dXJuIGNyZWF0ZU9yVXBkYXRlKHgsIHksIHgsIHksIGRlc3QpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXk8aW1wb3J0KFwiLi9jb29yZGluYXRlLmpzXCIpLkNvb3JkaW5hdGU+fSBjb29yZGluYXRlcyBDb29yZGluYXRlcy5cbiAqIEBwYXJhbSB7RXh0ZW50fSBbZGVzdF0gRXh0ZW50LlxuICogQHJldHVybiB7RXh0ZW50fSBFeHRlbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPclVwZGF0ZUZyb21Db29yZGluYXRlcyhjb29yZGluYXRlcywgZGVzdCkge1xuICBjb25zdCBleHRlbnQgPSBjcmVhdGVPclVwZGF0ZUVtcHR5KGRlc3QpO1xuICByZXR1cm4gZXh0ZW5kQ29vcmRpbmF0ZXMoZXh0ZW50LCBjb29yZGluYXRlcyk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBmbGF0Q29vcmRpbmF0ZXMgRmxhdCBjb29yZGluYXRlcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQgT2Zmc2V0LlxuICogQHBhcmFtIHtudW1iZXJ9IGVuZCBFbmQuXG4gKiBAcGFyYW0ge251bWJlcn0gc3RyaWRlIFN0cmlkZS5cbiAqIEBwYXJhbSB7RXh0ZW50fSBbZGVzdF0gRXh0ZW50LlxuICogQHJldHVybiB7RXh0ZW50fSBFeHRlbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPclVwZGF0ZUZyb21GbGF0Q29vcmRpbmF0ZXMoXG4gIGZsYXRDb29yZGluYXRlcyxcbiAgb2Zmc2V0LFxuICBlbmQsXG4gIHN0cmlkZSxcbiAgZGVzdCxcbikge1xuICBjb25zdCBleHRlbnQgPSBjcmVhdGVPclVwZGF0ZUVtcHR5KGRlc3QpO1xuICByZXR1cm4gZXh0ZW5kRmxhdENvb3JkaW5hdGVzKGV4dGVudCwgZmxhdENvb3JkaW5hdGVzLCBvZmZzZXQsIGVuZCwgc3RyaWRlKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5PEFycmF5PGltcG9ydChcIi4vY29vcmRpbmF0ZS5qc1wiKS5Db29yZGluYXRlPj59IHJpbmdzIFJpbmdzLlxuICogQHBhcmFtIHtFeHRlbnR9IFtkZXN0XSBFeHRlbnQuXG4gKiBAcmV0dXJuIHtFeHRlbnR9IEV4dGVudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU9yVXBkYXRlRnJvbVJpbmdzKHJpbmdzLCBkZXN0KSB7XG4gIGNvbnN0IGV4dGVudCA9IGNyZWF0ZU9yVXBkYXRlRW1wdHkoZGVzdCk7XG4gIHJldHVybiBleHRlbmRSaW5ncyhleHRlbnQsIHJpbmdzKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgdHdvIGV4dGVudHMgYXJlIGVxdWl2YWxlbnQuXG4gKiBAcGFyYW0ge0V4dGVudH0gZXh0ZW50MSBFeHRlbnQgMS5cbiAqIEBwYXJhbSB7RXh0ZW50fSBleHRlbnQyIEV4dGVudCAyLlxuICogQHJldHVybiB7Ym9vbGVhbn0gVGhlIHR3byBleHRlbnRzIGFyZSBlcXVpdmFsZW50LlxuICogQGFwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxzKGV4dGVudDEsIGV4dGVudDIpIHtcbiAgcmV0dXJuIChcbiAgICBleHRlbnQxWzBdID09IGV4dGVudDJbMF0gJiZcbiAgICBleHRlbnQxWzJdID09IGV4dGVudDJbMl0gJiZcbiAgICBleHRlbnQxWzFdID09IGV4dGVudDJbMV0gJiZcbiAgICBleHRlbnQxWzNdID09IGV4dGVudDJbM11cbiAgKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgdHdvIGV4dGVudHMgYXJlIGFwcHJveGltYXRlbHkgZXF1aXZhbGVudC5cbiAqIEBwYXJhbSB7RXh0ZW50fSBleHRlbnQxIEV4dGVudCAxLlxuICogQHBhcmFtIHtFeHRlbnR9IGV4dGVudDIgRXh0ZW50IDIuXG4gKiBAcGFyYW0ge251bWJlcn0gdG9sZXJhbmNlIFRvbGVyYW5jZSBpbiBleHRlbnQgY29vcmRpbmF0ZSB1bml0cy5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRoZSB0d28gZXh0ZW50cyBkaWZmZXIgYnkgbGVzcyB0aGFuIHRoZSB0b2xlcmFuY2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcHByb3hpbWF0ZWx5RXF1YWxzKGV4dGVudDEsIGV4dGVudDIsIHRvbGVyYW5jZSkge1xuICByZXR1cm4gKFxuICAgIE1hdGguYWJzKGV4dGVudDFbMF0gLSBleHRlbnQyWzBdKSA8IHRvbGVyYW5jZSAmJlxuICAgIE1hdGguYWJzKGV4dGVudDFbMl0gLSBleHRlbnQyWzJdKSA8IHRvbGVyYW5jZSAmJlxuICAgIE1hdGguYWJzKGV4dGVudDFbMV0gLSBleHRlbnQyWzFdKSA8IHRvbGVyYW5jZSAmJlxuICAgIE1hdGguYWJzKGV4dGVudDFbM10gLSBleHRlbnQyWzNdKSA8IHRvbGVyYW5jZVxuICApO1xufVxuXG4vKipcbiAqIE1vZGlmeSBhbiBleHRlbnQgdG8gaW5jbHVkZSBhbm90aGVyIGV4dGVudC5cbiAqIEBwYXJhbSB7RXh0ZW50fSBleHRlbnQxIFRoZSBleHRlbnQgdG8gYmUgbW9kaWZpZWQuXG4gKiBAcGFyYW0ge0V4dGVudH0gZXh0ZW50MiBUaGUgZXh0ZW50IHRoYXQgd2lsbCBiZSBpbmNsdWRlZCBpbiB0aGUgZmlyc3QuXG4gKiBAcmV0dXJuIHtFeHRlbnR9IEEgcmVmZXJlbmNlIHRvIHRoZSBmaXJzdCAoZXh0ZW5kZWQpIGV4dGVudC5cbiAqIEBhcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4dGVuZChleHRlbnQxLCBleHRlbnQyKSB7XG4gIGlmIChleHRlbnQyWzBdIDwgZXh0ZW50MVswXSkge1xuICAgIGV4dGVudDFbMF0gPSBleHRlbnQyWzBdO1xuICB9XG4gIGlmIChleHRlbnQyWzJdID4gZXh0ZW50MVsyXSkge1xuICAgIGV4dGVudDFbMl0gPSBleHRlbnQyWzJdO1xuICB9XG4gIGlmIChleHRlbnQyWzFdIDwgZXh0ZW50MVsxXSkge1xuICAgIGV4dGVudDFbMV0gPSBleHRlbnQyWzFdO1xuICB9XG4gIGlmIChleHRlbnQyWzNdID4gZXh0ZW50MVszXSkge1xuICAgIGV4dGVudDFbM10gPSBleHRlbnQyWzNdO1xuICB9XG4gIHJldHVybiBleHRlbnQxO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7RXh0ZW50fSBleHRlbnQgRXh0ZW50LlxuICogQHBhcmFtIHtpbXBvcnQoXCIuL2Nvb3JkaW5hdGUuanNcIikuQ29vcmRpbmF0ZX0gY29vcmRpbmF0ZSBDb29yZGluYXRlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXh0ZW5kQ29vcmRpbmF0ZShleHRlbnQsIGNvb3JkaW5hdGUpIHtcbiAgaWYgKGNvb3JkaW5hdGVbMF0gPCBleHRlbnRbMF0pIHtcbiAgICBleHRlbnRbMF0gPSBjb29yZGluYXRlWzBdO1xuICB9XG4gIGlmIChjb29yZGluYXRlWzBdID4gZXh0ZW50WzJdKSB7XG4gICAgZXh0ZW50WzJdID0gY29vcmRpbmF0ZVswXTtcbiAgfVxuICBpZiAoY29vcmRpbmF0ZVsxXSA8IGV4dGVudFsxXSkge1xuICAgIGV4dGVudFsxXSA9IGNvb3JkaW5hdGVbMV07XG4gIH1cbiAgaWYgKGNvb3JkaW5hdGVbMV0gPiBleHRlbnRbM10pIHtcbiAgICBleHRlbnRbM10gPSBjb29yZGluYXRlWzFdO1xuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHtFeHRlbnR9IGV4dGVudCBFeHRlbnQuXG4gKiBAcGFyYW0ge0FycmF5PGltcG9ydChcIi4vY29vcmRpbmF0ZS5qc1wiKS5Db29yZGluYXRlPn0gY29vcmRpbmF0ZXMgQ29vcmRpbmF0ZXMuXG4gKiBAcmV0dXJuIHtFeHRlbnR9IEV4dGVudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4dGVuZENvb3JkaW5hdGVzKGV4dGVudCwgY29vcmRpbmF0ZXMpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGlpID0gY29vcmRpbmF0ZXMubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgIGV4dGVuZENvb3JkaW5hdGUoZXh0ZW50LCBjb29yZGluYXRlc1tpXSk7XG4gIH1cbiAgcmV0dXJuIGV4dGVudDtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0V4dGVudH0gZXh0ZW50IEV4dGVudC5cbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gZmxhdENvb3JkaW5hdGVzIEZsYXQgY29vcmRpbmF0ZXMuXG4gKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0IE9mZnNldC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBlbmQgRW5kLlxuICogQHBhcmFtIHtudW1iZXJ9IHN0cmlkZSBTdHJpZGUuXG4gKiBAcmV0dXJuIHtFeHRlbnR9IEV4dGVudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4dGVuZEZsYXRDb29yZGluYXRlcyhcbiAgZXh0ZW50LFxuICBmbGF0Q29vcmRpbmF0ZXMsXG4gIG9mZnNldCxcbiAgZW5kLFxuICBzdHJpZGUsXG4pIHtcbiAgZm9yICg7IG9mZnNldCA8IGVuZDsgb2Zmc2V0ICs9IHN0cmlkZSkge1xuICAgIGV4dGVuZFhZKGV4dGVudCwgZmxhdENvb3JkaW5hdGVzW29mZnNldF0sIGZsYXRDb29yZGluYXRlc1tvZmZzZXQgKyAxXSk7XG4gIH1cbiAgcmV0dXJuIGV4dGVudDtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0V4dGVudH0gZXh0ZW50IEV4dGVudC5cbiAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8aW1wb3J0KFwiLi9jb29yZGluYXRlLmpzXCIpLkNvb3JkaW5hdGU+Pn0gcmluZ3MgUmluZ3MuXG4gKiBAcmV0dXJuIHtFeHRlbnR9IEV4dGVudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4dGVuZFJpbmdzKGV4dGVudCwgcmluZ3MpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGlpID0gcmluZ3MubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgIGV4dGVuZENvb3JkaW5hdGVzKGV4dGVudCwgcmluZ3NbaV0pO1xuICB9XG4gIHJldHVybiBleHRlbnQ7XG59XG5cbi8qKlxuICogQHBhcmFtIHtFeHRlbnR9IGV4dGVudCBFeHRlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0geCBYLlxuICogQHBhcmFtIHtudW1iZXJ9IHkgWS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4dGVuZFhZKGV4dGVudCwgeCwgeSkge1xuICBleHRlbnRbMF0gPSBNYXRoLm1pbihleHRlbnRbMF0sIHgpO1xuICBleHRlbnRbMV0gPSBNYXRoLm1pbihleHRlbnRbMV0sIHkpO1xuICBleHRlbnRbMl0gPSBNYXRoLm1heChleHRlbnRbMl0sIHgpO1xuICBleHRlbnRbM10gPSBNYXRoLm1heChleHRlbnRbM10sIHkpO1xufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY2FsbHMgYGNhbGxiYWNrYCBmb3IgZWFjaCBjb3JuZXIgb2YgdGhlIGV4dGVudC4gSWYgdGhlXG4gKiBjYWxsYmFjayByZXR1cm5zIGEgdHJ1dGh5IHZhbHVlIHRoZSBmdW5jdGlvbiByZXR1cm5zIHRoYXQgdmFsdWVcbiAqIGltbWVkaWF0ZWx5LiBPdGhlcndpc2UgdGhlIGZ1bmN0aW9uIHJldHVybnMgYGZhbHNlYC5cbiAqIEBwYXJhbSB7RXh0ZW50fSBleHRlbnQgRXh0ZW50LlxuICogQHBhcmFtIHtmdW5jdGlvbihpbXBvcnQoXCIuL2Nvb3JkaW5hdGUuanNcIikuQ29vcmRpbmF0ZSk6IFN9IGNhbGxiYWNrIENhbGxiYWNrLlxuICogQHJldHVybiB7U3xib29sZWFufSBWYWx1ZS5cbiAqIEB0ZW1wbGF0ZSBTXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JFYWNoQ29ybmVyKGV4dGVudCwgY2FsbGJhY2spIHtcbiAgbGV0IHZhbDtcbiAgdmFsID0gY2FsbGJhY2soZ2V0Qm90dG9tTGVmdChleHRlbnQpKTtcbiAgaWYgKHZhbCkge1xuICAgIHJldHVybiB2YWw7XG4gIH1cbiAgdmFsID0gY2FsbGJhY2soZ2V0Qm90dG9tUmlnaHQoZXh0ZW50KSk7XG4gIGlmICh2YWwpIHtcbiAgICByZXR1cm4gdmFsO1xuICB9XG4gIHZhbCA9IGNhbGxiYWNrKGdldFRvcFJpZ2h0KGV4dGVudCkpO1xuICBpZiAodmFsKSB7XG4gICAgcmV0dXJuIHZhbDtcbiAgfVxuICB2YWwgPSBjYWxsYmFjayhnZXRUb3BMZWZ0KGV4dGVudCkpO1xuICBpZiAodmFsKSB7XG4gICAgcmV0dXJuIHZhbDtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogR2V0IHRoZSBzaXplIG9mIGFuIGV4dGVudC5cbiAqIEBwYXJhbSB7RXh0ZW50fSBleHRlbnQgRXh0ZW50LlxuICogQHJldHVybiB7bnVtYmVyfSBBcmVhLlxuICogQGFwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXJlYShleHRlbnQpIHtcbiAgbGV0IGFyZWEgPSAwO1xuICBpZiAoIWlzRW1wdHkoZXh0ZW50KSkge1xuICAgIGFyZWEgPSBnZXRXaWR0aChleHRlbnQpICogZ2V0SGVpZ2h0KGV4dGVudCk7XG4gIH1cbiAgcmV0dXJuIGFyZWE7XG59XG5cbi8qKlxuICogR2V0IHRoZSBib3R0b20gbGVmdCBjb29yZGluYXRlIG9mIGFuIGV4dGVudC5cbiAqIEBwYXJhbSB7RXh0ZW50fSBleHRlbnQgRXh0ZW50LlxuICogQHJldHVybiB7aW1wb3J0KFwiLi9jb29yZGluYXRlLmpzXCIpLkNvb3JkaW5hdGV9IEJvdHRvbSBsZWZ0IGNvb3JkaW5hdGUuXG4gKiBAYXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRCb3R0b21MZWZ0KGV4dGVudCkge1xuICByZXR1cm4gW2V4dGVudFswXSwgZXh0ZW50WzFdXTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGJvdHRvbSByaWdodCBjb29yZGluYXRlIG9mIGFuIGV4dGVudC5cbiAqIEBwYXJhbSB7RXh0ZW50fSBleHRlbnQgRXh0ZW50LlxuICogQHJldHVybiB7aW1wb3J0KFwiLi9jb29yZGluYXRlLmpzXCIpLkNvb3JkaW5hdGV9IEJvdHRvbSByaWdodCBjb29yZGluYXRlLlxuICogQGFwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Qm90dG9tUmlnaHQoZXh0ZW50KSB7XG4gIHJldHVybiBbZXh0ZW50WzJdLCBleHRlbnRbMV1dO1xufVxuXG4vKipcbiAqIEdldCB0aGUgY2VudGVyIGNvb3JkaW5hdGUgb2YgYW4gZXh0ZW50LlxuICogQHBhcmFtIHtFeHRlbnR9IGV4dGVudCBFeHRlbnQuXG4gKiBAcmV0dXJuIHtpbXBvcnQoXCIuL2Nvb3JkaW5hdGUuanNcIikuQ29vcmRpbmF0ZX0gQ2VudGVyLlxuICogQGFwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2VudGVyKGV4dGVudCkge1xuICByZXR1cm4gWyhleHRlbnRbMF0gKyBleHRlbnRbMl0pIC8gMiwgKGV4dGVudFsxXSArIGV4dGVudFszXSkgLyAyXTtcbn1cblxuLyoqXG4gKiBHZXQgYSBjb3JuZXIgY29vcmRpbmF0ZSBvZiBhbiBleHRlbnQuXG4gKiBAcGFyYW0ge0V4dGVudH0gZXh0ZW50IEV4dGVudC5cbiAqIEBwYXJhbSB7Q29ybmVyfSBjb3JuZXIgQ29ybmVyLlxuICogQHJldHVybiB7aW1wb3J0KFwiLi9jb29yZGluYXRlLmpzXCIpLkNvb3JkaW5hdGV9IENvcm5lciBjb29yZGluYXRlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29ybmVyKGV4dGVudCwgY29ybmVyKSB7XG4gIGxldCBjb29yZGluYXRlO1xuICBpZiAoY29ybmVyID09PSAnYm90dG9tLWxlZnQnKSB7XG4gICAgY29vcmRpbmF0ZSA9IGdldEJvdHRvbUxlZnQoZXh0ZW50KTtcbiAgfSBlbHNlIGlmIChjb3JuZXIgPT09ICdib3R0b20tcmlnaHQnKSB7XG4gICAgY29vcmRpbmF0ZSA9IGdldEJvdHRvbVJpZ2h0KGV4dGVudCk7XG4gIH0gZWxzZSBpZiAoY29ybmVyID09PSAndG9wLWxlZnQnKSB7XG4gICAgY29vcmRpbmF0ZSA9IGdldFRvcExlZnQoZXh0ZW50KTtcbiAgfSBlbHNlIGlmIChjb3JuZXIgPT09ICd0b3AtcmlnaHQnKSB7XG4gICAgY29vcmRpbmF0ZSA9IGdldFRvcFJpZ2h0KGV4dGVudCk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNvcm5lcicpO1xuICB9XG4gIHJldHVybiBjb29yZGluYXRlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7RXh0ZW50fSBleHRlbnQxIEV4dGVudCAxLlxuICogQHBhcmFtIHtFeHRlbnR9IGV4dGVudDIgRXh0ZW50IDIuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEVubGFyZ2VkIGFyZWEuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRFbmxhcmdlZEFyZWEoZXh0ZW50MSwgZXh0ZW50Mikge1xuICBjb25zdCBtaW5YID0gTWF0aC5taW4oZXh0ZW50MVswXSwgZXh0ZW50MlswXSk7XG4gIGNvbnN0IG1pblkgPSBNYXRoLm1pbihleHRlbnQxWzFdLCBleHRlbnQyWzFdKTtcbiAgY29uc3QgbWF4WCA9IE1hdGgubWF4KGV4dGVudDFbMl0sIGV4dGVudDJbMl0pO1xuICBjb25zdCBtYXhZID0gTWF0aC5tYXgoZXh0ZW50MVszXSwgZXh0ZW50MlszXSk7XG4gIHJldHVybiAobWF4WCAtIG1pblgpICogKG1heFkgLSBtaW5ZKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydChcIi4vY29vcmRpbmF0ZS5qc1wiKS5Db29yZGluYXRlfSBjZW50ZXIgQ2VudGVyLlxuICogQHBhcmFtIHtudW1iZXJ9IHJlc29sdXRpb24gUmVzb2x1dGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSByb3RhdGlvbiBSb3RhdGlvbi5cbiAqIEBwYXJhbSB7aW1wb3J0KFwiLi9zaXplLmpzXCIpLlNpemV9IHNpemUgU2l6ZS5cbiAqIEBwYXJhbSB7RXh0ZW50fSBbZGVzdF0gRGVzdGluYXRpb24gZXh0ZW50LlxuICogQHJldHVybiB7RXh0ZW50fSBFeHRlbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRGb3JWaWV3QW5kU2l6ZShjZW50ZXIsIHJlc29sdXRpb24sIHJvdGF0aW9uLCBzaXplLCBkZXN0KSB7XG4gIGNvbnN0IFt4MCwgeTAsIHgxLCB5MSwgeDIsIHkyLCB4MywgeTNdID0gZ2V0Um90YXRlZFZpZXdwb3J0KFxuICAgIGNlbnRlcixcbiAgICByZXNvbHV0aW9uLFxuICAgIHJvdGF0aW9uLFxuICAgIHNpemUsXG4gICk7XG4gIHJldHVybiBjcmVhdGVPclVwZGF0ZShcbiAgICBNYXRoLm1pbih4MCwgeDEsIHgyLCB4MyksXG4gICAgTWF0aC5taW4oeTAsIHkxLCB5MiwgeTMpLFxuICAgIE1hdGgubWF4KHgwLCB4MSwgeDIsIHgzKSxcbiAgICBNYXRoLm1heCh5MCwgeTEsIHkyLCB5MyksXG4gICAgZGVzdCxcbiAgKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydChcIi4vY29vcmRpbmF0ZS5qc1wiKS5Db29yZGluYXRlfSBjZW50ZXIgQ2VudGVyLlxuICogQHBhcmFtIHtudW1iZXJ9IHJlc29sdXRpb24gUmVzb2x1dGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSByb3RhdGlvbiBSb3RhdGlvbi5cbiAqIEBwYXJhbSB7aW1wb3J0KFwiLi9zaXplLmpzXCIpLlNpemV9IHNpemUgU2l6ZS5cbiAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59IExpbmVhciByaW5nIHJlcHJlc2VudGluZyB0aGUgdmlld3BvcnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3RhdGVkVmlld3BvcnQoY2VudGVyLCByZXNvbHV0aW9uLCByb3RhdGlvbiwgc2l6ZSkge1xuICBjb25zdCBkeCA9IChyZXNvbHV0aW9uICogc2l6ZVswXSkgLyAyO1xuICBjb25zdCBkeSA9IChyZXNvbHV0aW9uICogc2l6ZVsxXSkgLyAyO1xuICBjb25zdCBjb3NSb3RhdGlvbiA9IE1hdGguY29zKHJvdGF0aW9uKTtcbiAgY29uc3Qgc2luUm90YXRpb24gPSBNYXRoLnNpbihyb3RhdGlvbik7XG4gIGNvbnN0IHhDb3MgPSBkeCAqIGNvc1JvdGF0aW9uO1xuICBjb25zdCB4U2luID0gZHggKiBzaW5Sb3RhdGlvbjtcbiAgY29uc3QgeUNvcyA9IGR5ICogY29zUm90YXRpb247XG4gIGNvbnN0IHlTaW4gPSBkeSAqIHNpblJvdGF0aW9uO1xuICBjb25zdCB4ID0gY2VudGVyWzBdO1xuICBjb25zdCB5ID0gY2VudGVyWzFdO1xuICByZXR1cm4gW1xuICAgIHggLSB4Q29zICsgeVNpbixcbiAgICB5IC0geFNpbiAtIHlDb3MsXG4gICAgeCAtIHhDb3MgLSB5U2luLFxuICAgIHkgLSB4U2luICsgeUNvcyxcbiAgICB4ICsgeENvcyAtIHlTaW4sXG4gICAgeSArIHhTaW4gKyB5Q29zLFxuICAgIHggKyB4Q29zICsgeVNpbixcbiAgICB5ICsgeFNpbiAtIHlDb3MsXG4gICAgeCAtIHhDb3MgKyB5U2luLFxuICAgIHkgLSB4U2luIC0geUNvcyxcbiAgXTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGhlaWdodCBvZiBhbiBleHRlbnQuXG4gKiBAcGFyYW0ge0V4dGVudH0gZXh0ZW50IEV4dGVudC5cbiAqIEByZXR1cm4ge251bWJlcn0gSGVpZ2h0LlxuICogQGFwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0SGVpZ2h0KGV4dGVudCkge1xuICByZXR1cm4gZXh0ZW50WzNdIC0gZXh0ZW50WzFdO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7RXh0ZW50fSBleHRlbnQxIEV4dGVudCAxLlxuICogQHBhcmFtIHtFeHRlbnR9IGV4dGVudDIgRXh0ZW50IDIuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEludGVyc2VjdGlvbiBhcmVhLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW50ZXJzZWN0aW9uQXJlYShleHRlbnQxLCBleHRlbnQyKSB7XG4gIGNvbnN0IGludGVyc2VjdGlvbiA9IGdldEludGVyc2VjdGlvbihleHRlbnQxLCBleHRlbnQyKTtcbiAgcmV0dXJuIGdldEFyZWEoaW50ZXJzZWN0aW9uKTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGludGVyc2VjdGlvbiBvZiB0d28gZXh0ZW50cy5cbiAqIEBwYXJhbSB7RXh0ZW50fSBleHRlbnQxIEV4dGVudCAxLlxuICogQHBhcmFtIHtFeHRlbnR9IGV4dGVudDIgRXh0ZW50IDIuXG4gKiBAcGFyYW0ge0V4dGVudH0gW2Rlc3RdIE9wdGlvbmFsIGV4dGVudCB0byBwb3B1bGF0ZSB3aXRoIGludGVyc2VjdGlvbi5cbiAqIEByZXR1cm4ge0V4dGVudH0gSW50ZXJzZWN0aW5nIGV4dGVudC5cbiAqIEBhcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEludGVyc2VjdGlvbihleHRlbnQxLCBleHRlbnQyLCBkZXN0KSB7XG4gIGNvbnN0IGludGVyc2VjdGlvbiA9IGRlc3QgPyBkZXN0IDogY3JlYXRlRW1wdHkoKTtcbiAgaWYgKGludGVyc2VjdHMoZXh0ZW50MSwgZXh0ZW50MikpIHtcbiAgICBpZiAoZXh0ZW50MVswXSA+IGV4dGVudDJbMF0pIHtcbiAgICAgIGludGVyc2VjdGlvblswXSA9IGV4dGVudDFbMF07XG4gICAgfSBlbHNlIHtcbiAgICAgIGludGVyc2VjdGlvblswXSA9IGV4dGVudDJbMF07XG4gICAgfVxuICAgIGlmIChleHRlbnQxWzFdID4gZXh0ZW50MlsxXSkge1xuICAgICAgaW50ZXJzZWN0aW9uWzFdID0gZXh0ZW50MVsxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW50ZXJzZWN0aW9uWzFdID0gZXh0ZW50MlsxXTtcbiAgICB9XG4gICAgaWYgKGV4dGVudDFbMl0gPCBleHRlbnQyWzJdKSB7XG4gICAgICBpbnRlcnNlY3Rpb25bMl0gPSBleHRlbnQxWzJdO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnRlcnNlY3Rpb25bMl0gPSBleHRlbnQyWzJdO1xuICAgIH1cbiAgICBpZiAoZXh0ZW50MVszXSA8IGV4dGVudDJbM10pIHtcbiAgICAgIGludGVyc2VjdGlvblszXSA9IGV4dGVudDFbM107XG4gICAgfSBlbHNlIHtcbiAgICAgIGludGVyc2VjdGlvblszXSA9IGV4dGVudDJbM107XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNyZWF0ZU9yVXBkYXRlRW1wdHkoaW50ZXJzZWN0aW9uKTtcbiAgfVxuICByZXR1cm4gaW50ZXJzZWN0aW9uO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7RXh0ZW50fSBleHRlbnQgRXh0ZW50LlxuICogQHJldHVybiB7bnVtYmVyfSBNYXJnaW4uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRNYXJnaW4oZXh0ZW50KSB7XG4gIHJldHVybiBnZXRXaWR0aChleHRlbnQpICsgZ2V0SGVpZ2h0KGV4dGVudCk7XG59XG5cbi8qKlxuICogR2V0IHRoZSBzaXplICh3aWR0aCwgaGVpZ2h0KSBvZiBhbiBleHRlbnQuXG4gKiBAcGFyYW0ge0V4dGVudH0gZXh0ZW50IFRoZSBleHRlbnQuXG4gKiBAcmV0dXJuIHtpbXBvcnQoXCIuL3NpemUuanNcIikuU2l6ZX0gVGhlIGV4dGVudCBzaXplLlxuICogQGFwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2l6ZShleHRlbnQpIHtcbiAgcmV0dXJuIFtleHRlbnRbMl0gLSBleHRlbnRbMF0sIGV4dGVudFszXSAtIGV4dGVudFsxXV07XG59XG5cbi8qKlxuICogR2V0IHRoZSB0b3AgbGVmdCBjb29yZGluYXRlIG9mIGFuIGV4dGVudC5cbiAqIEBwYXJhbSB7RXh0ZW50fSBleHRlbnQgRXh0ZW50LlxuICogQHJldHVybiB7aW1wb3J0KFwiLi9jb29yZGluYXRlLmpzXCIpLkNvb3JkaW5hdGV9IFRvcCBsZWZ0IGNvb3JkaW5hdGUuXG4gKiBAYXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUb3BMZWZ0KGV4dGVudCkge1xuICByZXR1cm4gW2V4dGVudFswXSwgZXh0ZW50WzNdXTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHRvcCByaWdodCBjb29yZGluYXRlIG9mIGFuIGV4dGVudC5cbiAqIEBwYXJhbSB7RXh0ZW50fSBleHRlbnQgRXh0ZW50LlxuICogQHJldHVybiB7aW1wb3J0KFwiLi9jb29yZGluYXRlLmpzXCIpLkNvb3JkaW5hdGV9IFRvcCByaWdodCBjb29yZGluYXRlLlxuICogQGFwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG9wUmlnaHQoZXh0ZW50KSB7XG4gIHJldHVybiBbZXh0ZW50WzJdLCBleHRlbnRbM11dO1xufVxuXG4vKipcbiAqIEdldCB0aGUgd2lkdGggb2YgYW4gZXh0ZW50LlxuICogQHBhcmFtIHtFeHRlbnR9IGV4dGVudCBFeHRlbnQuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFdpZHRoLlxuICogQGFwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2lkdGgoZXh0ZW50KSB7XG4gIHJldHVybiBleHRlbnRbMl0gLSBleHRlbnRbMF07XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIG9uZSBleHRlbnQgaW50ZXJzZWN0cyBhbm90aGVyLlxuICogQHBhcmFtIHtFeHRlbnR9IGV4dGVudDEgRXh0ZW50IDEuXG4gKiBAcGFyYW0ge0V4dGVudH0gZXh0ZW50MiBFeHRlbnQuXG4gKiBAcmV0dXJuIHtib29sZWFufSBUaGUgdHdvIGV4dGVudHMgaW50ZXJzZWN0LlxuICogQGFwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJzZWN0cyhleHRlbnQxLCBleHRlbnQyKSB7XG4gIHJldHVybiAoXG4gICAgZXh0ZW50MVswXSA8PSBleHRlbnQyWzJdICYmXG4gICAgZXh0ZW50MVsyXSA+PSBleHRlbnQyWzBdICYmXG4gICAgZXh0ZW50MVsxXSA8PSBleHRlbnQyWzNdICYmXG4gICAgZXh0ZW50MVszXSA+PSBleHRlbnQyWzFdXG4gICk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGFuIGV4dGVudCBpcyBlbXB0eS5cbiAqIEBwYXJhbSB7RXh0ZW50fSBleHRlbnQgRXh0ZW50LlxuICogQHJldHVybiB7Ym9vbGVhbn0gSXMgZW1wdHkuXG4gKiBAYXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5KGV4dGVudCkge1xuICByZXR1cm4gZXh0ZW50WzJdIDwgZXh0ZW50WzBdIHx8IGV4dGVudFszXSA8IGV4dGVudFsxXTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0V4dGVudH0gZXh0ZW50IEV4dGVudC5cbiAqIEBwYXJhbSB7RXh0ZW50fSBbZGVzdF0gRXh0ZW50LlxuICogQHJldHVybiB7RXh0ZW50fSBFeHRlbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5PclVwZGF0ZShleHRlbnQsIGRlc3QpIHtcbiAgaWYgKGRlc3QpIHtcbiAgICBkZXN0WzBdID0gZXh0ZW50WzBdO1xuICAgIGRlc3RbMV0gPSBleHRlbnRbMV07XG4gICAgZGVzdFsyXSA9IGV4dGVudFsyXTtcbiAgICBkZXN0WzNdID0gZXh0ZW50WzNdO1xuICAgIHJldHVybiBkZXN0O1xuICB9XG4gIHJldHVybiBleHRlbnQ7XG59XG5cbi8qKlxuICogQHBhcmFtIHtFeHRlbnR9IGV4dGVudCBFeHRlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgVmFsdWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZUZyb21DZW50ZXIoZXh0ZW50LCB2YWx1ZSkge1xuICBjb25zdCBkZWx0YVggPSAoKGV4dGVudFsyXSAtIGV4dGVudFswXSkgLyAyKSAqICh2YWx1ZSAtIDEpO1xuICBjb25zdCBkZWx0YVkgPSAoKGV4dGVudFszXSAtIGV4dGVudFsxXSkgLyAyKSAqICh2YWx1ZSAtIDEpO1xuICBleHRlbnRbMF0gLT0gZGVsdGFYO1xuICBleHRlbnRbMl0gKz0gZGVsdGFYO1xuICBleHRlbnRbMV0gLT0gZGVsdGFZO1xuICBleHRlbnRbM10gKz0gZGVsdGFZO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiB0aGUgc2VnbWVudCBiZXR3ZWVuIHR3byBjb29yZGluYXRlcyBpbnRlcnNlY3RzIChjcm9zc2VzLFxuICogdG91Y2hlcywgb3IgaXMgY29udGFpbmVkIGJ5KSB0aGUgcHJvdmlkZWQgZXh0ZW50LlxuICogQHBhcmFtIHtFeHRlbnR9IGV4dGVudCBUaGUgZXh0ZW50LlxuICogQHBhcmFtIHtpbXBvcnQoXCIuL2Nvb3JkaW5hdGUuanNcIikuQ29vcmRpbmF0ZX0gc3RhcnQgU2VnbWVudCBzdGFydCBjb29yZGluYXRlLlxuICogQHBhcmFtIHtpbXBvcnQoXCIuL2Nvb3JkaW5hdGUuanNcIikuQ29vcmRpbmF0ZX0gZW5kIFNlZ21lbnQgZW5kIGNvb3JkaW5hdGUuXG4gKiBAcmV0dXJuIHtib29sZWFufSBUaGUgc2VnbWVudCBpbnRlcnNlY3RzIHRoZSBleHRlbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnNlY3RzU2VnbWVudChleHRlbnQsIHN0YXJ0LCBlbmQpIHtcbiAgbGV0IGludGVyc2VjdHMgPSBmYWxzZTtcbiAgY29uc3Qgc3RhcnRSZWwgPSBjb29yZGluYXRlUmVsYXRpb25zaGlwKGV4dGVudCwgc3RhcnQpO1xuICBjb25zdCBlbmRSZWwgPSBjb29yZGluYXRlUmVsYXRpb25zaGlwKGV4dGVudCwgZW5kKTtcbiAgaWYgKFxuICAgIHN0YXJ0UmVsID09PSBSZWxhdGlvbnNoaXAuSU5URVJTRUNUSU5HIHx8XG4gICAgZW5kUmVsID09PSBSZWxhdGlvbnNoaXAuSU5URVJTRUNUSU5HXG4gICkge1xuICAgIGludGVyc2VjdHMgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG1pblggPSBleHRlbnRbMF07XG4gICAgY29uc3QgbWluWSA9IGV4dGVudFsxXTtcbiAgICBjb25zdCBtYXhYID0gZXh0ZW50WzJdO1xuICAgIGNvbnN0IG1heFkgPSBleHRlbnRbM107XG4gICAgY29uc3Qgc3RhcnRYID0gc3RhcnRbMF07XG4gICAgY29uc3Qgc3RhcnRZID0gc3RhcnRbMV07XG4gICAgY29uc3QgZW5kWCA9IGVuZFswXTtcbiAgICBjb25zdCBlbmRZID0gZW5kWzFdO1xuICAgIGNvbnN0IHNsb3BlID0gKGVuZFkgLSBzdGFydFkpIC8gKGVuZFggLSBzdGFydFgpO1xuICAgIGxldCB4LCB5O1xuICAgIGlmICghIShlbmRSZWwgJiBSZWxhdGlvbnNoaXAuQUJPVkUpICYmICEoc3RhcnRSZWwgJiBSZWxhdGlvbnNoaXAuQUJPVkUpKSB7XG4gICAgICAvLyBwb3RlbnRpYWxseSBpbnRlcnNlY3RzIHRvcFxuICAgICAgeCA9IGVuZFggLSAoZW5kWSAtIG1heFkpIC8gc2xvcGU7XG4gICAgICBpbnRlcnNlY3RzID0geCA+PSBtaW5YICYmIHggPD0gbWF4WDtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgIWludGVyc2VjdHMgJiZcbiAgICAgICEhKGVuZFJlbCAmIFJlbGF0aW9uc2hpcC5SSUdIVCkgJiZcbiAgICAgICEoc3RhcnRSZWwgJiBSZWxhdGlvbnNoaXAuUklHSFQpXG4gICAgKSB7XG4gICAgICAvLyBwb3RlbnRpYWxseSBpbnRlcnNlY3RzIHJpZ2h0XG4gICAgICB5ID0gZW5kWSAtIChlbmRYIC0gbWF4WCkgKiBzbG9wZTtcbiAgICAgIGludGVyc2VjdHMgPSB5ID49IG1pblkgJiYgeSA8PSBtYXhZO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICAhaW50ZXJzZWN0cyAmJlxuICAgICAgISEoZW5kUmVsICYgUmVsYXRpb25zaGlwLkJFTE9XKSAmJlxuICAgICAgIShzdGFydFJlbCAmIFJlbGF0aW9uc2hpcC5CRUxPVylcbiAgICApIHtcbiAgICAgIC8vIHBvdGVudGlhbGx5IGludGVyc2VjdHMgYm90dG9tXG4gICAgICB4ID0gZW5kWCAtIChlbmRZIC0gbWluWSkgLyBzbG9wZTtcbiAgICAgIGludGVyc2VjdHMgPSB4ID49IG1pblggJiYgeCA8PSBtYXhYO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICAhaW50ZXJzZWN0cyAmJlxuICAgICAgISEoZW5kUmVsICYgUmVsYXRpb25zaGlwLkxFRlQpICYmXG4gICAgICAhKHN0YXJ0UmVsICYgUmVsYXRpb25zaGlwLkxFRlQpXG4gICAgKSB7XG4gICAgICAvLyBwb3RlbnRpYWxseSBpbnRlcnNlY3RzIGxlZnRcbiAgICAgIHkgPSBlbmRZIC0gKGVuZFggLSBtaW5YKSAqIHNsb3BlO1xuICAgICAgaW50ZXJzZWN0cyA9IHkgPj0gbWluWSAmJiB5IDw9IG1heFk7XG4gICAgfVxuICB9XG4gIHJldHVybiBpbnRlcnNlY3RzO1xufVxuXG4vKipcbiAqIEFwcGx5IGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHRvIHRoZSBleHRlbnQuXG4gKiBAcGFyYW0ge0V4dGVudH0gZXh0ZW50IEV4dGVudC5cbiAqIEBwYXJhbSB7aW1wb3J0KFwiLi9wcm9qLmpzXCIpLlRyYW5zZm9ybUZ1bmN0aW9ufSB0cmFuc2Zvcm1GbiBUcmFuc2Zvcm0gZnVuY3Rpb24uXG4gKiBDYWxsZWQgd2l0aCBgW21pblgsIG1pblksIG1heFgsIG1heFldYCBleHRlbnQgY29vcmRpbmF0ZXMuXG4gKiBAcGFyYW0ge0V4dGVudH0gW2Rlc3RdIERlc3RpbmF0aW9uIGV4dGVudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RvcHNdIE51bWJlciBvZiBzdG9wcyBwZXIgc2lkZSB1c2VkIGZvciB0aGUgdHJhbnNmb3JtLlxuICogQnkgZGVmYXVsdCBvbmx5IHRoZSBjb3JuZXJzIGFyZSB1c2VkLlxuICogQHJldHVybiB7RXh0ZW50fSBFeHRlbnQuXG4gKiBAYXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVRyYW5zZm9ybShleHRlbnQsIHRyYW5zZm9ybUZuLCBkZXN0LCBzdG9wcykge1xuICBpZiAoaXNFbXB0eShleHRlbnQpKSB7XG4gICAgcmV0dXJuIGNyZWF0ZU9yVXBkYXRlRW1wdHkoZGVzdCk7XG4gIH1cbiAgbGV0IGNvb3JkaW5hdGVzID0gW107XG4gIGlmIChzdG9wcyA+IDEpIHtcbiAgICBjb25zdCB3aWR0aCA9IGV4dGVudFsyXSAtIGV4dGVudFswXTtcbiAgICBjb25zdCBoZWlnaHQgPSBleHRlbnRbM10gLSBleHRlbnRbMV07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdG9wczsgKytpKSB7XG4gICAgICBjb29yZGluYXRlcy5wdXNoKFxuICAgICAgICBleHRlbnRbMF0gKyAod2lkdGggKiBpKSAvIHN0b3BzLFxuICAgICAgICBleHRlbnRbMV0sXG4gICAgICAgIGV4dGVudFsyXSxcbiAgICAgICAgZXh0ZW50WzFdICsgKGhlaWdodCAqIGkpIC8gc3RvcHMsXG4gICAgICAgIGV4dGVudFsyXSAtICh3aWR0aCAqIGkpIC8gc3RvcHMsXG4gICAgICAgIGV4dGVudFszXSxcbiAgICAgICAgZXh0ZW50WzBdLFxuICAgICAgICBleHRlbnRbM10gLSAoaGVpZ2h0ICogaSkgLyBzdG9wcyxcbiAgICAgICk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvb3JkaW5hdGVzID0gW1xuICAgICAgZXh0ZW50WzBdLFxuICAgICAgZXh0ZW50WzFdLFxuICAgICAgZXh0ZW50WzJdLFxuICAgICAgZXh0ZW50WzFdLFxuICAgICAgZXh0ZW50WzJdLFxuICAgICAgZXh0ZW50WzNdLFxuICAgICAgZXh0ZW50WzBdLFxuICAgICAgZXh0ZW50WzNdLFxuICAgIF07XG4gIH1cbiAgdHJhbnNmb3JtRm4oY29vcmRpbmF0ZXMsIGNvb3JkaW5hdGVzLCAyKTtcbiAgY29uc3QgeHMgPSBbXTtcbiAgY29uc3QgeXMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBjb29yZGluYXRlcy5sZW5ndGg7IGkgPCBsOyBpICs9IDIpIHtcbiAgICB4cy5wdXNoKGNvb3JkaW5hdGVzW2ldKTtcbiAgICB5cy5wdXNoKGNvb3JkaW5hdGVzW2kgKyAxXSk7XG4gIH1cbiAgcmV0dXJuIF9ib3VuZGluZ0V4dGVudFhZcyh4cywgeXMsIGRlc3QpO1xufVxuXG4vKipcbiAqIE1vZGlmaWVzIHRoZSBwcm92aWRlZCBleHRlbnQgaW4tcGxhY2UgdG8gYmUgd2l0aGluIHRoZSByZWFsIHdvcmxkXG4gKiBleHRlbnQuXG4gKlxuICogQHBhcmFtIHtFeHRlbnR9IGV4dGVudCBFeHRlbnQuXG4gKiBAcGFyYW0ge2ltcG9ydChcIi4vcHJvai9Qcm9qZWN0aW9uLmpzXCIpLmRlZmF1bHR9IHByb2plY3Rpb24gUHJvamVjdGlvblxuICogQHJldHVybiB7RXh0ZW50fSBUaGUgZXh0ZW50IHdpdGhpbiB0aGUgcmVhbCB3b3JsZCBleHRlbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3cmFwWChleHRlbnQsIHByb2plY3Rpb24pIHtcbiAgY29uc3QgcHJvamVjdGlvbkV4dGVudCA9IHByb2plY3Rpb24uZ2V0RXh0ZW50KCk7XG4gIGNvbnN0IGNlbnRlciA9IGdldENlbnRlcihleHRlbnQpO1xuICBpZiAoXG4gICAgcHJvamVjdGlvbi5jYW5XcmFwWCgpICYmXG4gICAgKGNlbnRlclswXSA8IHByb2plY3Rpb25FeHRlbnRbMF0gfHwgY2VudGVyWzBdID49IHByb2plY3Rpb25FeHRlbnRbMl0pXG4gICkge1xuICAgIGNvbnN0IHdvcmxkV2lkdGggPSBnZXRXaWR0aChwcm9qZWN0aW9uRXh0ZW50KTtcbiAgICBjb25zdCB3b3JsZHNBd2F5ID0gTWF0aC5mbG9vcihcbiAgICAgIChjZW50ZXJbMF0gLSBwcm9qZWN0aW9uRXh0ZW50WzBdKSAvIHdvcmxkV2lkdGgsXG4gICAgKTtcbiAgICBjb25zdCBvZmZzZXQgPSB3b3JsZHNBd2F5ICogd29ybGRXaWR0aDtcbiAgICBleHRlbnRbMF0gLT0gb2Zmc2V0O1xuICAgIGV4dGVudFsyXSAtPSBvZmZzZXQ7XG4gIH1cbiAgcmV0dXJuIGV4dGVudDtcbn1cblxuLyoqXG4gKiBGaXRzIHRoZSBleHRlbnQgdG8gdGhlIHJlYWwgd29ybGRcbiAqXG4gKiBJZiB0aGUgZXh0ZW50IGRvZXMgbm90IGNyb3NzIHRoZSBhbnRpIG1lcmlkaWFuLCB0aGlzIHdpbGwgcmV0dXJuIHRoZSBleHRlbnQgaW4gYW4gYXJyYXlcbiAqIElmIHRoZSBleHRlbnQgY3Jvc3NlcyB0aGUgYW50aSBtZXJpZGlhbiwgdGhlIGV4dGVudCB3aWxsIGJlIHNsaWNlZCwgc28gZWFjaCBwYXJ0IGZpdHMgd2l0aGluIHRoZVxuICogcmVhbCB3b3JsZFxuICpcbiAqXG4gKiBAcGFyYW0ge0V4dGVudH0gZXh0ZW50IEV4dGVudC5cbiAqIEBwYXJhbSB7aW1wb3J0KFwiLi9wcm9qL1Byb2plY3Rpb24uanNcIikuZGVmYXVsdH0gcHJvamVjdGlvbiBQcm9qZWN0aW9uXG4gKiBAcmV0dXJuIHtBcnJheTxFeHRlbnQ+fSBUaGUgZXh0ZW50IHdpdGhpbiB0aGUgcmVhbCB3b3JsZCBleHRlbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3cmFwQW5kU2xpY2VYKGV4dGVudCwgcHJvamVjdGlvbikge1xuICBpZiAocHJvamVjdGlvbi5jYW5XcmFwWCgpKSB7XG4gICAgY29uc3QgcHJvamVjdGlvbkV4dGVudCA9IHByb2plY3Rpb24uZ2V0RXh0ZW50KCk7XG5cbiAgICBpZiAoIWlzRmluaXRlKGV4dGVudFswXSkgfHwgIWlzRmluaXRlKGV4dGVudFsyXSkpIHtcbiAgICAgIHJldHVybiBbW3Byb2plY3Rpb25FeHRlbnRbMF0sIGV4dGVudFsxXSwgcHJvamVjdGlvbkV4dGVudFsyXSwgZXh0ZW50WzNdXV07XG4gICAgfVxuXG4gICAgd3JhcFgoZXh0ZW50LCBwcm9qZWN0aW9uKTtcbiAgICBjb25zdCB3b3JsZFdpZHRoID0gZ2V0V2lkdGgocHJvamVjdGlvbkV4dGVudCk7XG5cbiAgICBpZiAoZ2V0V2lkdGgoZXh0ZW50KSA+IHdvcmxkV2lkdGgpIHtcbiAgICAgIC8vIHRoZSBleHRlbnQgd3JhcHMgYXJvdW5kIG9uIGl0c2VsZlxuICAgICAgcmV0dXJuIFtbcHJvamVjdGlvbkV4dGVudFswXSwgZXh0ZW50WzFdLCBwcm9qZWN0aW9uRXh0ZW50WzJdLCBleHRlbnRbM11dXTtcbiAgICB9XG4gICAgaWYgKGV4dGVudFswXSA8IHByb2plY3Rpb25FeHRlbnRbMF0pIHtcbiAgICAgIC8vIHRoZSBleHRlbnQgY3Jvc3NlcyB0aGUgYW50aSBtZXJpZGlhbiwgc28gaXQgbmVlZHMgdG8gYmUgc2xpY2VkXG4gICAgICByZXR1cm4gW1xuICAgICAgICBbZXh0ZW50WzBdICsgd29ybGRXaWR0aCwgZXh0ZW50WzFdLCBwcm9qZWN0aW9uRXh0ZW50WzJdLCBleHRlbnRbM11dLFxuICAgICAgICBbcHJvamVjdGlvbkV4dGVudFswXSwgZXh0ZW50WzFdLCBleHRlbnRbMl0sIGV4dGVudFszXV0sXG4gICAgICBdO1xuICAgIH1cbiAgICBpZiAoZXh0ZW50WzJdID4gcHJvamVjdGlvbkV4dGVudFsyXSkge1xuICAgICAgLy8gdGhlIGV4dGVudCBjcm9zc2VzIHRoZSBhbnRpIG1lcmlkaWFuLCBzbyBpdCBuZWVkcyB0byBiZSBzbGljZWRcbiAgICAgIHJldHVybiBbXG4gICAgICAgIFtleHRlbnRbMF0sIGV4dGVudFsxXSwgcHJvamVjdGlvbkV4dGVudFsyXSwgZXh0ZW50WzNdXSxcbiAgICAgICAgW3Byb2plY3Rpb25FeHRlbnRbMF0sIGV4dGVudFsxXSwgZXh0ZW50WzJdIC0gd29ybGRXaWR0aCwgZXh0ZW50WzNdXSxcbiAgICAgIF07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFtleHRlbnRdO1xufVxuIiwiLyoqXG4gKiBAbW9kdWxlIG9sL2V4dGVudC9SZWxhdGlvbnNoaXBcbiAqL1xuXG4vKipcbiAqIFJlbGF0aW9uc2hpcCB0byBhbiBleHRlbnQuXG4gKiBAZW51bSB7bnVtYmVyfVxuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gIFVOS05PV046IDAsXG4gIElOVEVSU0VDVElORzogMSxcbiAgQUJPVkU6IDIsXG4gIFJJR0hUOiA0LFxuICBCRUxPVzogOCxcbiAgTEVGVDogMTYsXG59O1xuIiwiLyoqXG4gKiBAbW9kdWxlIG9sL2Z1bmN0aW9uc1xuICovXG5cbmltcG9ydCB7ZXF1YWxzIGFzIGFycmF5RXF1YWxzfSBmcm9tICcuL2FycmF5LmpzJztcblxuLyoqXG4gKiBBbHdheXMgcmV0dXJucyB0cnVlLlxuICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFRSVUUoKSB7XG4gIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIEFsd2F5cyByZXR1cm5zIGZhbHNlLlxuICogQHJldHVybiB7Ym9vbGVhbn0gZmFsc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBGQUxTRSgpIHtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIEEgcmV1c2FibGUgZnVuY3Rpb24sIHVzZWQgZS5nLiBhcyBhIGRlZmF1bHQgZm9yIGNhbGxiYWNrcy5cbiAqXG4gKiBAcmV0dXJuIHt2b2lkfSBOb3RoaW5nLlxuICovXG5leHBvcnQgZnVuY3Rpb24gVk9JRCgpIHt9XG5cbi8qKlxuICogV3JhcCBhIGZ1bmN0aW9uIGluIGFub3RoZXIgZnVuY3Rpb24gdGhhdCByZW1lbWJlcnMgdGhlIGxhc3QgcmV0dXJuLiAgSWYgdGhlXG4gKiByZXR1cm5lZCBmdW5jdGlvbiBpcyBjYWxsZWQgdHdpY2UgaW4gYSByb3cgd2l0aCB0aGUgc2FtZSBhcmd1bWVudHMgYW5kIHRoZSBzYW1lXG4gKiB0aGlzIG9iamVjdCwgaXQgd2lsbCByZXR1cm4gdGhlIHZhbHVlIGZyb20gdGhlIGZpcnN0IGNhbGwgaW4gdGhlIHNlY29uZCBjYWxsLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oLi4uYW55KTogUmV0dXJuVHlwZX0gZm4gVGhlIGZ1bmN0aW9uIHRvIG1lbW9pemUuXG4gKiBAcmV0dXJuIHtmdW5jdGlvbiguLi5hbnkpOiBSZXR1cm5UeXBlfSBUaGUgbWVtb2l6ZWQgZnVuY3Rpb24uXG4gKiBAdGVtcGxhdGUgUmV0dXJuVHlwZVxuICovXG5leHBvcnQgZnVuY3Rpb24gbWVtb2l6ZU9uZShmbikge1xuICBsZXQgY2FsbGVkID0gZmFsc2U7XG5cbiAgLyoqIEB0eXBlIHtSZXR1cm5UeXBlfSAqL1xuICBsZXQgbGFzdFJlc3VsdDtcblxuICAvKiogQHR5cGUge0FycmF5PGFueT59ICovXG4gIGxldCBsYXN0QXJncztcblxuICBsZXQgbGFzdFRoaXM7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBuZXh0QXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgaWYgKCFjYWxsZWQgfHwgdGhpcyAhPT0gbGFzdFRoaXMgfHwgIWFycmF5RXF1YWxzKG5leHRBcmdzLCBsYXN0QXJncykpIHtcbiAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgICBsYXN0VGhpcyA9IHRoaXM7XG4gICAgICBsYXN0QXJncyA9IG5leHRBcmdzO1xuICAgICAgbGFzdFJlc3VsdCA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIHJldHVybiBsYXN0UmVzdWx0O1xuICB9O1xufVxuXG4vKipcbiAqIEB0ZW1wbGF0ZSBUXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCk6IChUIHwgUHJvbWlzZTxUPil9IGdldHRlciBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIHZhbHVlIG9yIGEgcHJvbWlzZSBmb3IgYSB2YWx1ZS5cbiAqIEByZXR1cm4ge1Byb21pc2U8VD59IEEgcHJvbWlzZSBmb3IgdGhlIHZhbHVlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9Qcm9taXNlKGdldHRlcikge1xuICBmdW5jdGlvbiBwcm9taXNlR2V0dGVyKCkge1xuICAgIGxldCB2YWx1ZTtcbiAgICB0cnkge1xuICAgICAgdmFsdWUgPSBnZXR0ZXIoKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgIH1cbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpO1xuICB9XG4gIHJldHVybiBwcm9taXNlR2V0dGVyKCk7XG59XG4iLCIvKipcbiAqIEBtb2R1bGUgb2wvZ2VvbS9HZW9tZXRyeVxuICovXG5pbXBvcnQgQmFzZU9iamVjdCBmcm9tICcuLi9PYmplY3QuanMnO1xuaW1wb3J0IHthYnN0cmFjdH0gZnJvbSAnLi4vdXRpbC5qcyc7XG5pbXBvcnQge1xuICBjb21wb3NlIGFzIGNvbXBvc2VUcmFuc2Zvcm0sXG4gIGNyZWF0ZSBhcyBjcmVhdGVUcmFuc2Zvcm0sXG59IGZyb20gJy4uL3RyYW5zZm9ybS5qcyc7XG5pbXBvcnQge1xuICBjcmVhdGVFbXB0eSxcbiAgY3JlYXRlT3JVcGRhdGVFbXB0eSxcbiAgZ2V0SGVpZ2h0LFxuICByZXR1cm5PclVwZGF0ZSxcbn0gZnJvbSAnLi4vZXh0ZW50LmpzJztcbmltcG9ydCB7Z2V0IGFzIGdldFByb2plY3Rpb24sIGdldFRyYW5zZm9ybX0gZnJvbSAnLi4vcHJvai5qcyc7XG5pbXBvcnQge21lbW9pemVPbmV9IGZyb20gJy4uL2Z1bmN0aW9ucy5qcyc7XG5pbXBvcnQge3RyYW5zZm9ybTJEfSBmcm9tICcuL2ZsYXQvdHJhbnNmb3JtLmpzJztcblxuLyoqXG4gKiBAdHlwZWRlZiB7J1hZJyB8ICdYWVonIHwgJ1hZTScgfCAnWFlaTSd9IEdlb21ldHJ5TGF5b3V0XG4gKiBUaGUgY29vcmRpbmF0ZSBsYXlvdXQgZm9yIGdlb21ldHJpZXMsIGluZGljYXRpbmcgd2hldGhlciBhIDNyZCBvciA0dGggeiAoJ1onKVxuICogb3IgbWVhc3VyZSAoJ00nKSBjb29yZGluYXRlIGlzIGF2YWlsYWJsZS5cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHsnUG9pbnQnIHwgJ0xpbmVTdHJpbmcnIHwgJ0xpbmVhclJpbmcnIHwgJ1BvbHlnb24nIHwgJ011bHRpUG9pbnQnIHwgJ011bHRpTGluZVN0cmluZycgfCAnTXVsdGlQb2x5Z29uJyB8ICdHZW9tZXRyeUNvbGxlY3Rpb24nIHwgJ0NpcmNsZSd9IFR5cGVcbiAqIFRoZSBnZW9tZXRyeSB0eXBlLiAgT25lIG9mIGAnUG9pbnQnYCwgYCdMaW5lU3RyaW5nJ2AsIGAnTGluZWFyUmluZydgLFxuICogYCdQb2x5Z29uJ2AsIGAnTXVsdGlQb2ludCdgLCBgJ011bHRpTGluZVN0cmluZydgLCBgJ011bHRpUG9seWdvbidgLFxuICogYCdHZW9tZXRyeUNvbGxlY3Rpb24nYCwgb3IgYCdDaXJjbGUnYC5cbiAqL1xuXG4vKipcbiAqIEB0eXBlIHtpbXBvcnQoXCIuLi90cmFuc2Zvcm0uanNcIikuVHJhbnNmb3JtfVxuICovXG5jb25zdCB0bXBUcmFuc2Zvcm0gPSBjcmVhdGVUcmFuc2Zvcm0oKTtcblxuLyoqXG4gKiBAY2xhc3NkZXNjXG4gKiBBYnN0cmFjdCBiYXNlIGNsYXNzOyBub3JtYWxseSBvbmx5IHVzZWQgZm9yIGNyZWF0aW5nIHN1YmNsYXNzZXMgYW5kIG5vdFxuICogaW5zdGFudGlhdGVkIGluIGFwcHMuXG4gKiBCYXNlIGNsYXNzIGZvciB2ZWN0b3IgZ2VvbWV0cmllcy5cbiAqXG4gKiBUbyBnZXQgbm90aWZpZWQgb2YgY2hhbmdlcyB0byB0aGUgZ2VvbWV0cnksIHJlZ2lzdGVyIGEgbGlzdGVuZXIgZm9yIHRoZVxuICogZ2VuZXJpYyBgY2hhbmdlYCBldmVudCBvbiB5b3VyIGdlb21ldHJ5IGluc3RhbmNlLlxuICpcbiAqIEBhYnN0cmFjdFxuICogQGFwaVxuICovXG5jbGFzcyBHZW9tZXRyeSBleHRlbmRzIEJhc2VPYmplY3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdHlwZSB7aW1wb3J0KFwiLi4vZXh0ZW50LmpzXCIpLkV4dGVudH1cbiAgICAgKi9cbiAgICB0aGlzLmV4dGVudF8gPSBjcmVhdGVFbXB0eSgpO1xuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuZXh0ZW50UmV2aXNpb25fID0gLTE7XG5cbiAgICAvKipcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLnNpbXBsaWZpZWRHZW9tZXRyeU1heE1pblNxdWFyZWRUb2xlcmFuY2UgPSAwO1xuXG4gICAgLyoqXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5zaW1wbGlmaWVkR2VvbWV0cnlSZXZpc2lvbiA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYSB0cmFuc2Zvcm1lZCBhbmQgc2ltcGxpZmllZCB2ZXJzaW9uIG9mIHRoZSBnZW9tZXRyeS5cbiAgICAgKiBAYWJzdHJhY3RcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcmV2aXNpb24gVGhlIGdlb21ldHJ5IHJldmlzaW9uLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzcXVhcmVkVG9sZXJhbmNlIFNxdWFyZWQgdG9sZXJhbmNlLlxuICAgICAqIEBwYXJhbSB7aW1wb3J0KFwiLi4vcHJvai5qc1wiKS5UcmFuc2Zvcm1GdW5jdGlvbn0gW3RyYW5zZm9ybV0gT3B0aW9uYWwgdHJhbnNmb3JtIGZ1bmN0aW9uLlxuICAgICAqIEByZXR1cm4ge0dlb21ldHJ5fSBTaW1wbGlmaWVkIGdlb21ldHJ5LlxuICAgICAqL1xuICAgIHRoaXMuc2ltcGxpZnlUcmFuc2Zvcm1lZEludGVybmFsID0gbWVtb2l6ZU9uZShcbiAgICAgIChyZXZpc2lvbiwgc3F1YXJlZFRvbGVyYW5jZSwgdHJhbnNmb3JtKSA9PiB7XG4gICAgICAgIGlmICghdHJhbnNmb3JtKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U2ltcGxpZmllZEdlb21ldHJ5KHNxdWFyZWRUb2xlcmFuY2UpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsb25lID0gdGhpcy5jbG9uZSgpO1xuICAgICAgICBjbG9uZS5hcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pO1xuICAgICAgICByZXR1cm4gY2xvbmUuZ2V0U2ltcGxpZmllZEdlb21ldHJ5KHNxdWFyZWRUb2xlcmFuY2UpO1xuICAgICAgfSxcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIHRyYW5zZm9ybWVkIGFuZCBzaW1wbGlmaWVkIHZlcnNpb24gb2YgdGhlIGdlb21ldHJ5LlxuICAgKiBAYWJzdHJhY3RcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNxdWFyZWRUb2xlcmFuY2UgU3F1YXJlZCB0b2xlcmFuY2UuXG4gICAqIEBwYXJhbSB7aW1wb3J0KFwiLi4vcHJvai5qc1wiKS5UcmFuc2Zvcm1GdW5jdGlvbn0gW3RyYW5zZm9ybV0gT3B0aW9uYWwgdHJhbnNmb3JtIGZ1bmN0aW9uLlxuICAgKiBAcmV0dXJuIHtHZW9tZXRyeX0gU2ltcGxpZmllZCBnZW9tZXRyeS5cbiAgICovXG4gIHNpbXBsaWZ5VHJhbnNmb3JtZWQoc3F1YXJlZFRvbGVyYW5jZSwgdHJhbnNmb3JtKSB7XG4gICAgcmV0dXJuIHRoaXMuc2ltcGxpZnlUcmFuc2Zvcm1lZEludGVybmFsKFxuICAgICAgdGhpcy5nZXRSZXZpc2lvbigpLFxuICAgICAgc3F1YXJlZFRvbGVyYW5jZSxcbiAgICAgIHRyYW5zZm9ybSxcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgYSBjb21wbGV0ZSBjb3B5IG9mIHRoZSBnZW9tZXRyeS5cbiAgICogQGFic3RyYWN0XG4gICAqIEByZXR1cm4geyFHZW9tZXRyeX0gQ2xvbmUuXG4gICAqL1xuICBjbG9uZSgpIHtcbiAgICByZXR1cm4gYWJzdHJhY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAYWJzdHJhY3RcbiAgICogQHBhcmFtIHtudW1iZXJ9IHggWC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHkgWS5cbiAgICogQHBhcmFtIHtpbXBvcnQoXCIuLi9jb29yZGluYXRlLmpzXCIpLkNvb3JkaW5hdGV9IGNsb3Nlc3RQb2ludCBDbG9zZXN0IHBvaW50LlxuICAgKiBAcGFyYW0ge251bWJlcn0gbWluU3F1YXJlZERpc3RhbmNlIE1pbmltdW0gc3F1YXJlZCBkaXN0YW5jZS5cbiAgICogQHJldHVybiB7bnVtYmVyfSBNaW5pbXVtIHNxdWFyZWQgZGlzdGFuY2UuXG4gICAqL1xuICBjbG9zZXN0UG9pbnRYWSh4LCB5LCBjbG9zZXN0UG9pbnQsIG1pblNxdWFyZWREaXN0YW5jZSkge1xuICAgIHJldHVybiBhYnN0cmFjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4IFguXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5IFkuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IENvbnRhaW5zICh4LCB5KS5cbiAgICovXG4gIGNvbnRhaW5zWFkoeCwgeSkge1xuICAgIGNvbnN0IGNvb3JkID0gdGhpcy5nZXRDbG9zZXN0UG9pbnQoW3gsIHldKTtcbiAgICByZXR1cm4gY29vcmRbMF0gPT09IHggJiYgY29vcmRbMV0gPT09IHk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBjbG9zZXN0IHBvaW50IG9mIHRoZSBnZW9tZXRyeSB0byB0aGUgcGFzc2VkIHBvaW50IGFzXG4gICAqIHtAbGluayBtb2R1bGU6b2wvY29vcmRpbmF0ZX5Db29yZGluYXRlIGNvb3JkaW5hdGV9LlxuICAgKiBAcGFyYW0ge2ltcG9ydChcIi4uL2Nvb3JkaW5hdGUuanNcIikuQ29vcmRpbmF0ZX0gcG9pbnQgUG9pbnQuXG4gICAqIEBwYXJhbSB7aW1wb3J0KFwiLi4vY29vcmRpbmF0ZS5qc1wiKS5Db29yZGluYXRlfSBbY2xvc2VzdFBvaW50XSBDbG9zZXN0IHBvaW50LlxuICAgKiBAcmV0dXJuIHtpbXBvcnQoXCIuLi9jb29yZGluYXRlLmpzXCIpLkNvb3JkaW5hdGV9IENsb3Nlc3QgcG9pbnQuXG4gICAqIEBhcGlcbiAgICovXG4gIGdldENsb3Nlc3RQb2ludChwb2ludCwgY2xvc2VzdFBvaW50KSB7XG4gICAgY2xvc2VzdFBvaW50ID0gY2xvc2VzdFBvaW50ID8gY2xvc2VzdFBvaW50IDogW05hTiwgTmFOXTtcbiAgICB0aGlzLmNsb3Nlc3RQb2ludFhZKHBvaW50WzBdLCBwb2ludFsxXSwgY2xvc2VzdFBvaW50LCBJbmZpbml0eSk7XG4gICAgcmV0dXJuIGNsb3Nlc3RQb2ludDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhpcyBnZW9tZXRyeSBpbmNsdWRlcyB0aGUgc3BlY2lmaWVkIGNvb3JkaW5hdGUuIElmIHRoZVxuICAgKiBjb29yZGluYXRlIGlzIG9uIHRoZSBib3VuZGFyeSBvZiB0aGUgZ2VvbWV0cnksIHJldHVybnMgZmFsc2UuXG4gICAqIEBwYXJhbSB7aW1wb3J0KFwiLi4vY29vcmRpbmF0ZS5qc1wiKS5Db29yZGluYXRlfSBjb29yZGluYXRlIENvb3JkaW5hdGUuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IENvbnRhaW5zIGNvb3JkaW5hdGUuXG4gICAqIEBhcGlcbiAgICovXG4gIGludGVyc2VjdHNDb29yZGluYXRlKGNvb3JkaW5hdGUpIHtcbiAgICByZXR1cm4gdGhpcy5jb250YWluc1hZKGNvb3JkaW5hdGVbMF0sIGNvb3JkaW5hdGVbMV0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBhYnN0cmFjdFxuICAgKiBAcGFyYW0ge2ltcG9ydChcIi4uL2V4dGVudC5qc1wiKS5FeHRlbnR9IGV4dGVudCBFeHRlbnQuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQHJldHVybiB7aW1wb3J0KFwiLi4vZXh0ZW50LmpzXCIpLkV4dGVudH0gZXh0ZW50IEV4dGVudC5cbiAgICovXG4gIGNvbXB1dGVFeHRlbnQoZXh0ZW50KSB7XG4gICAgcmV0dXJuIGFic3RyYWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBleHRlbnQgb2YgdGhlIGdlb21ldHJ5LlxuICAgKiBAcGFyYW0ge2ltcG9ydChcIi4uL2V4dGVudC5qc1wiKS5FeHRlbnR9IFtleHRlbnRdIEV4dGVudC5cbiAgICogQHJldHVybiB7aW1wb3J0KFwiLi4vZXh0ZW50LmpzXCIpLkV4dGVudH0gZXh0ZW50IEV4dGVudC5cbiAgICogQGFwaVxuICAgKi9cbiAgZ2V0RXh0ZW50KGV4dGVudCkge1xuICAgIGlmICh0aGlzLmV4dGVudFJldmlzaW9uXyAhPSB0aGlzLmdldFJldmlzaW9uKCkpIHtcbiAgICAgIGNvbnN0IGV4dGVudCA9IHRoaXMuY29tcHV0ZUV4dGVudCh0aGlzLmV4dGVudF8pO1xuICAgICAgaWYgKGlzTmFOKGV4dGVudFswXSkgfHwgaXNOYU4oZXh0ZW50WzFdKSkge1xuICAgICAgICBjcmVhdGVPclVwZGF0ZUVtcHR5KGV4dGVudCk7XG4gICAgICB9XG4gICAgICB0aGlzLmV4dGVudFJldmlzaW9uXyA9IHRoaXMuZ2V0UmV2aXNpb24oKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldHVybk9yVXBkYXRlKHRoaXMuZXh0ZW50XywgZXh0ZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSb3RhdGUgdGhlIGdlb21ldHJ5IGFyb3VuZCBhIGdpdmVuIGNvb3JkaW5hdGUuIFRoaXMgbW9kaWZpZXMgdGhlIGdlb21ldHJ5XG4gICAqIGNvb3JkaW5hdGVzIGluIHBsYWNlLlxuICAgKiBAYWJzdHJhY3RcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFuZ2xlIFJvdGF0aW9uIGFuZ2xlIGluIHJhZGlhbnMuXG4gICAqIEBwYXJhbSB7aW1wb3J0KFwiLi4vY29vcmRpbmF0ZS5qc1wiKS5Db29yZGluYXRlfSBhbmNob3IgVGhlIHJvdGF0aW9uIGNlbnRlci5cbiAgICogQGFwaVxuICAgKi9cbiAgcm90YXRlKGFuZ2xlLCBhbmNob3IpIHtcbiAgICBhYnN0cmFjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNjYWxlIHRoZSBnZW9tZXRyeSAod2l0aCBhbiBvcHRpb25hbCBvcmlnaW4pLiAgVGhpcyBtb2RpZmllcyB0aGUgZ2VvbWV0cnlcbiAgICogY29vcmRpbmF0ZXMgaW4gcGxhY2UuXG4gICAqIEBhYnN0cmFjdFxuICAgKiBAcGFyYW0ge251bWJlcn0gc3ggVGhlIHNjYWxpbmcgZmFjdG9yIGluIHRoZSB4LWRpcmVjdGlvbi5cbiAgICogQHBhcmFtIHtudW1iZXJ9IFtzeV0gVGhlIHNjYWxpbmcgZmFjdG9yIGluIHRoZSB5LWRpcmVjdGlvbiAoZGVmYXVsdHMgdG8gc3gpLlxuICAgKiBAcGFyYW0ge2ltcG9ydChcIi4uL2Nvb3JkaW5hdGUuanNcIikuQ29vcmRpbmF0ZX0gW2FuY2hvcl0gVGhlIHNjYWxlIG9yaWdpbiAoZGVmYXVsdHMgdG8gdGhlIGNlbnRlclxuICAgKiAgICAgb2YgdGhlIGdlb21ldHJ5IGV4dGVudCkuXG4gICAqIEBhcGlcbiAgICovXG4gIHNjYWxlKHN4LCBzeSwgYW5jaG9yKSB7XG4gICAgYWJzdHJhY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBzaW1wbGlmaWVkIHZlcnNpb24gb2YgdGhpcyBnZW9tZXRyeS4gIEZvciBsaW5lc3RyaW5ncywgdGhpcyB1c2VzXG4gICAqIHRoZSBbRG91Z2xhcyBQZXVja2VyXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9SYW1lci1Eb3VnbGFzLVBldWNrZXJfYWxnb3JpdGhtKVxuICAgKiBhbGdvcml0aG0uICBGb3IgcG9seWdvbnMsIGEgcXVhbnRpemF0aW9uLWJhc2VkXG4gICAqIHNpbXBsaWZpY2F0aW9uIGlzIHVzZWQgdG8gcHJlc2VydmUgdG9wb2xvZ3kuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0b2xlcmFuY2UgVGhlIHRvbGVyYW5jZSBkaXN0YW5jZSBmb3Igc2ltcGxpZmljYXRpb24uXG4gICAqIEByZXR1cm4ge0dlb21ldHJ5fSBBIG5ldywgc2ltcGxpZmllZCB2ZXJzaW9uIG9mIHRoZSBvcmlnaW5hbCBnZW9tZXRyeS5cbiAgICogQGFwaVxuICAgKi9cbiAgc2ltcGxpZnkodG9sZXJhbmNlKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U2ltcGxpZmllZEdlb21ldHJ5KHRvbGVyYW5jZSAqIHRvbGVyYW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgc2ltcGxpZmllZCB2ZXJzaW9uIG9mIHRoaXMgZ2VvbWV0cnkgdXNpbmcgdGhlIERvdWdsYXMgUGV1Y2tlclxuICAgKiBhbGdvcml0aG0uXG4gICAqIFNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9SYW1lci1Eb3VnbGFzLVBldWNrZXJfYWxnb3JpdGhtLlxuICAgKiBAYWJzdHJhY3RcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNxdWFyZWRUb2xlcmFuY2UgU3F1YXJlZCB0b2xlcmFuY2UuXG4gICAqIEByZXR1cm4ge0dlb21ldHJ5fSBTaW1wbGlmaWVkIGdlb21ldHJ5LlxuICAgKi9cbiAgZ2V0U2ltcGxpZmllZEdlb21ldHJ5KHNxdWFyZWRUb2xlcmFuY2UpIHtcbiAgICByZXR1cm4gYWJzdHJhY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHR5cGUgb2YgdGhpcyBnZW9tZXRyeS5cbiAgICogQGFic3RyYWN0XG4gICAqIEByZXR1cm4ge1R5cGV9IEdlb21ldHJ5IHR5cGUuXG4gICAqL1xuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiBhYnN0cmFjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGx5IGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHRvIHRoZSBjb29yZGluYXRlcyBvZiB0aGUgZ2VvbWV0cnkuXG4gICAqIFRoZSBnZW9tZXRyeSBpcyBtb2RpZmllZCBpbiBwbGFjZS5cbiAgICogSWYgeW91IGRvIG5vdCB3YW50IHRoZSBnZW9tZXRyeSBtb2RpZmllZCBpbiBwbGFjZSwgZmlyc3QgYGNsb25lKClgIGl0IGFuZFxuICAgKiB0aGVuIHVzZSB0aGlzIGZ1bmN0aW9uIG9uIHRoZSBjbG9uZS5cbiAgICogQGFic3RyYWN0XG4gICAqIEBwYXJhbSB7aW1wb3J0KFwiLi4vcHJvai5qc1wiKS5UcmFuc2Zvcm1GdW5jdGlvbn0gdHJhbnNmb3JtRm4gVHJhbnNmb3JtIGZ1bmN0aW9uLlxuICAgKiBDYWxsZWQgd2l0aCBhIGZsYXQgYXJyYXkgb2YgZ2VvbWV0cnkgY29vcmRpbmF0ZXMuXG4gICAqL1xuICBhcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm1Gbikge1xuICAgIGFic3RyYWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogVGVzdCBpZiB0aGUgZ2VvbWV0cnkgYW5kIHRoZSBwYXNzZWQgZXh0ZW50IGludGVyc2VjdC5cbiAgICogQGFic3RyYWN0XG4gICAqIEBwYXJhbSB7aW1wb3J0KFwiLi4vZXh0ZW50LmpzXCIpLkV4dGVudH0gZXh0ZW50IEV4dGVudC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gYHRydWVgIGlmIHRoZSBnZW9tZXRyeSBhbmQgdGhlIGV4dGVudCBpbnRlcnNlY3QuXG4gICAqL1xuICBpbnRlcnNlY3RzRXh0ZW50KGV4dGVudCkge1xuICAgIHJldHVybiBhYnN0cmFjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zbGF0ZSB0aGUgZ2VvbWV0cnkuICBUaGlzIG1vZGlmaWVzIHRoZSBnZW9tZXRyeSBjb29yZGluYXRlcyBpbiBwbGFjZS4gIElmXG4gICAqIGluc3RlYWQgeW91IHdhbnQgYSBuZXcgZ2VvbWV0cnksIGZpcnN0IGBjbG9uZSgpYCB0aGlzIGdlb21ldHJ5LlxuICAgKiBAYWJzdHJhY3RcbiAgICogQHBhcmFtIHtudW1iZXJ9IGRlbHRhWCBEZWx0YSBYLlxuICAgKiBAcGFyYW0ge251bWJlcn0gZGVsdGFZIERlbHRhIFkuXG4gICAqIEBhcGlcbiAgICovXG4gIHRyYW5zbGF0ZShkZWx0YVgsIGRlbHRhWSkge1xuICAgIGFic3RyYWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmb3JtIGVhY2ggY29vcmRpbmF0ZSBvZiB0aGUgZ2VvbWV0cnkgZnJvbSBvbmUgY29vcmRpbmF0ZSByZWZlcmVuY2VcbiAgICogc3lzdGVtIHRvIGFub3RoZXIuIFRoZSBnZW9tZXRyeSBpcyBtb2RpZmllZCBpbiBwbGFjZS5cbiAgICogRm9yIGV4YW1wbGUsIGEgbGluZSB3aWxsIGJlIHRyYW5zZm9ybWVkIHRvIGEgbGluZSBhbmQgYSBjaXJjbGUgdG8gYSBjaXJjbGUuXG4gICAqIElmIHlvdSBkbyBub3Qgd2FudCB0aGUgZ2VvbWV0cnkgbW9kaWZpZWQgaW4gcGxhY2UsIGZpcnN0IGBjbG9uZSgpYCBpdCBhbmRcbiAgICogdGhlbiB1c2UgdGhpcyBmdW5jdGlvbiBvbiB0aGUgY2xvbmUuXG4gICAqXG4gICAqIEBwYXJhbSB7aW1wb3J0KFwiLi4vcHJvai5qc1wiKS5Qcm9qZWN0aW9uTGlrZX0gc291cmNlIFRoZSBjdXJyZW50IHByb2plY3Rpb24uICBDYW4gYmUgYVxuICAgKiAgICAgc3RyaW5nIGlkZW50aWZpZXIgb3IgYSB7QGxpbmsgbW9kdWxlOm9sL3Byb2ovUHJvamVjdGlvbn5Qcm9qZWN0aW9ufSBvYmplY3QuXG4gICAqIEBwYXJhbSB7aW1wb3J0KFwiLi4vcHJvai5qc1wiKS5Qcm9qZWN0aW9uTGlrZX0gZGVzdGluYXRpb24gVGhlIGRlc2lyZWQgcHJvamVjdGlvbi4gIENhbiBiZSBhXG4gICAqICAgICBzdHJpbmcgaWRlbnRpZmllciBvciBhIHtAbGluayBtb2R1bGU6b2wvcHJvai9Qcm9qZWN0aW9uflByb2plY3Rpb259IG9iamVjdC5cbiAgICogQHJldHVybiB7dGhpc30gVGhpcyBnZW9tZXRyeS4gIE5vdGUgdGhhdCBvcmlnaW5hbCBnZW9tZXRyeSBpc1xuICAgKiAgICAgbW9kaWZpZWQgaW4gcGxhY2UuXG4gICAqIEBhcGlcbiAgICovXG4gIHRyYW5zZm9ybShzb3VyY2UsIGRlc3RpbmF0aW9uKSB7XG4gICAgLyoqIEB0eXBlIHtpbXBvcnQoXCIuLi9wcm9qL1Byb2plY3Rpb24uanNcIikuZGVmYXVsdH0gKi9cbiAgICBjb25zdCBzb3VyY2VQcm9qID0gZ2V0UHJvamVjdGlvbihzb3VyY2UpO1xuICAgIGNvbnN0IHRyYW5zZm9ybUZuID1cbiAgICAgIHNvdXJjZVByb2ouZ2V0VW5pdHMoKSA9PSAndGlsZS1waXhlbHMnXG4gICAgICAgID8gZnVuY3Rpb24gKGluQ29vcmRpbmF0ZXMsIG91dENvb3JkaW5hdGVzLCBzdHJpZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHBpeGVsRXh0ZW50ID0gc291cmNlUHJvai5nZXRFeHRlbnQoKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RlZEV4dGVudCA9IHNvdXJjZVByb2ouZ2V0V29ybGRFeHRlbnQoKTtcbiAgICAgICAgICAgIGNvbnN0IHNjYWxlID0gZ2V0SGVpZ2h0KHByb2plY3RlZEV4dGVudCkgLyBnZXRIZWlnaHQocGl4ZWxFeHRlbnQpO1xuICAgICAgICAgICAgY29tcG9zZVRyYW5zZm9ybShcbiAgICAgICAgICAgICAgdG1wVHJhbnNmb3JtLFxuICAgICAgICAgICAgICBwcm9qZWN0ZWRFeHRlbnRbMF0sXG4gICAgICAgICAgICAgIHByb2plY3RlZEV4dGVudFszXSxcbiAgICAgICAgICAgICAgc2NhbGUsXG4gICAgICAgICAgICAgIC1zY2FsZSxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0cmFuc2Zvcm0yRChcbiAgICAgICAgICAgICAgaW5Db29yZGluYXRlcyxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgaW5Db29yZGluYXRlcy5sZW5ndGgsXG4gICAgICAgICAgICAgIHN0cmlkZSxcbiAgICAgICAgICAgICAgdG1wVHJhbnNmb3JtLFxuICAgICAgICAgICAgICBvdXRDb29yZGluYXRlcyxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4gZ2V0VHJhbnNmb3JtKHNvdXJjZVByb2osIGRlc3RpbmF0aW9uKShcbiAgICAgICAgICAgICAgaW5Db29yZGluYXRlcyxcbiAgICAgICAgICAgICAgb3V0Q29vcmRpbmF0ZXMsXG4gICAgICAgICAgICAgIHN0cmlkZSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICA6IGdldFRyYW5zZm9ybShzb3VyY2VQcm9qLCBkZXN0aW5hdGlvbik7XG4gICAgdGhpcy5hcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm1Gbik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2VvbWV0cnk7XG4iLCIvKipcbiAqIEBtb2R1bGUgb2wvZ2VvbS9MaW5lU3RyaW5nXG4gKi9cbmltcG9ydCBTaW1wbGVHZW9tZXRyeSBmcm9tICcuL1NpbXBsZUdlb21ldHJ5LmpzJztcbmltcG9ydCB7YXNzaWduQ2xvc2VzdFBvaW50LCBtYXhTcXVhcmVkRGVsdGF9IGZyb20gJy4vZmxhdC9jbG9zZXN0LmpzJztcbmltcG9ydCB7Y2xvc2VzdFNxdWFyZWREaXN0YW5jZVhZfSBmcm9tICcuLi9leHRlbnQuanMnO1xuaW1wb3J0IHtkZWZsYXRlQ29vcmRpbmF0ZXN9IGZyb20gJy4vZmxhdC9kZWZsYXRlLmpzJztcbmltcG9ydCB7ZG91Z2xhc1BldWNrZXJ9IGZyb20gJy4vZmxhdC9zaW1wbGlmeS5qcyc7XG5pbXBvcnQge2V4dGVuZH0gZnJvbSAnLi4vYXJyYXkuanMnO1xuaW1wb3J0IHtmb3JFYWNoIGFzIGZvckVhY2hTZWdtZW50fSBmcm9tICcuL2ZsYXQvc2VnbWVudHMuanMnO1xuaW1wb3J0IHtpbmZsYXRlQ29vcmRpbmF0ZXN9IGZyb20gJy4vZmxhdC9pbmZsYXRlLmpzJztcbmltcG9ydCB7aW50ZXJwb2xhdGVQb2ludCwgbGluZVN0cmluZ0Nvb3JkaW5hdGVBdE19IGZyb20gJy4vZmxhdC9pbnRlcnBvbGF0ZS5qcyc7XG5pbXBvcnQge2ludGVyc2VjdHNMaW5lU3RyaW5nfSBmcm9tICcuL2ZsYXQvaW50ZXJzZWN0c2V4dGVudC5qcyc7XG5pbXBvcnQge2xpbmVTdHJpbmdMZW5ndGh9IGZyb20gJy4vZmxhdC9sZW5ndGguanMnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2NcbiAqIExpbmVzdHJpbmcgZ2VvbWV0cnkuXG4gKlxuICogQGFwaVxuICovXG5jbGFzcyBMaW5lU3RyaW5nIGV4dGVuZHMgU2ltcGxlR2VvbWV0cnkge1xuICAvKipcbiAgICogQHBhcmFtIHtBcnJheTxpbXBvcnQoXCIuLi9jb29yZGluYXRlLmpzXCIpLkNvb3JkaW5hdGU+fEFycmF5PG51bWJlcj59IGNvb3JkaW5hdGVzIENvb3JkaW5hdGVzLlxuICAgKiAgICAgRm9yIGludGVybmFsIHVzZSwgZmxhdCBjb29yZGluYXRlcyBpbiBjb21iaW5hdGlvbiB3aXRoIGBsYXlvdXRgIGFyZSBhbHNvIGFjY2VwdGVkLlxuICAgKiBAcGFyYW0ge2ltcG9ydChcIi4vR2VvbWV0cnkuanNcIikuR2VvbWV0cnlMYXlvdXR9IFtsYXlvdXRdIExheW91dC5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGNvb3JkaW5hdGVzLCBsYXlvdXQpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdHlwZSB7aW1wb3J0KFwiLi4vY29vcmRpbmF0ZS5qc1wiKS5Db29yZGluYXRlfG51bGx9XG4gICAgICovXG4gICAgdGhpcy5mbGF0TWlkcG9pbnRfID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLmZsYXRNaWRwb2ludFJldmlzaW9uXyA9IC0xO1xuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMubWF4RGVsdGFfID0gLTE7XG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5tYXhEZWx0YVJldmlzaW9uXyA9IC0xO1xuXG4gICAgaWYgKGxheW91dCAhPT0gdW5kZWZpbmVkICYmICFBcnJheS5pc0FycmF5KGNvb3JkaW5hdGVzWzBdKSkge1xuICAgICAgdGhpcy5zZXRGbGF0Q29vcmRpbmF0ZXMoXG4gICAgICAgIGxheW91dCxcbiAgICAgICAgLyoqIEB0eXBlIHtBcnJheTxudW1iZXI+fSAqLyAoY29vcmRpbmF0ZXMpLFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRDb29yZGluYXRlcyhcbiAgICAgICAgLyoqIEB0eXBlIHtBcnJheTxpbXBvcnQoXCIuLi9jb29yZGluYXRlLmpzXCIpLkNvb3JkaW5hdGU+fSAqLyAoXG4gICAgICAgICAgY29vcmRpbmF0ZXNcbiAgICAgICAgKSxcbiAgICAgICAgbGF5b3V0LFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXBwZW5kIHRoZSBwYXNzZWQgY29vcmRpbmF0ZSB0byB0aGUgY29vcmRpbmF0ZXMgb2YgdGhlIGxpbmVzdHJpbmcuXG4gICAqIEBwYXJhbSB7aW1wb3J0KFwiLi4vY29vcmRpbmF0ZS5qc1wiKS5Db29yZGluYXRlfSBjb29yZGluYXRlIENvb3JkaW5hdGUuXG4gICAqIEBhcGlcbiAgICovXG4gIGFwcGVuZENvb3JkaW5hdGUoY29vcmRpbmF0ZSkge1xuICAgIGV4dGVuZCh0aGlzLmZsYXRDb29yZGluYXRlcywgY29vcmRpbmF0ZSk7XG4gICAgdGhpcy5jaGFuZ2VkKCk7XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhIGNvbXBsZXRlIGNvcHkgb2YgdGhlIGdlb21ldHJ5LlxuICAgKiBAcmV0dXJuIHshTGluZVN0cmluZ30gQ2xvbmUuXG4gICAqIEBhcGlcbiAgICovXG4gIGNsb25lKCkge1xuICAgIGNvbnN0IGxpbmVTdHJpbmcgPSBuZXcgTGluZVN0cmluZyhcbiAgICAgIHRoaXMuZmxhdENvb3JkaW5hdGVzLnNsaWNlKCksXG4gICAgICB0aGlzLmxheW91dCxcbiAgICApO1xuICAgIGxpbmVTdHJpbmcuYXBwbHlQcm9wZXJ0aWVzKHRoaXMpO1xuICAgIHJldHVybiBsaW5lU3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4IFguXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5IFkuXG4gICAqIEBwYXJhbSB7aW1wb3J0KFwiLi4vY29vcmRpbmF0ZS5qc1wiKS5Db29yZGluYXRlfSBjbG9zZXN0UG9pbnQgQ2xvc2VzdCBwb2ludC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IG1pblNxdWFyZWREaXN0YW5jZSBNaW5pbXVtIHNxdWFyZWQgZGlzdGFuY2UuXG4gICAqIEByZXR1cm4ge251bWJlcn0gTWluaW11bSBzcXVhcmVkIGRpc3RhbmNlLlxuICAgKi9cbiAgY2xvc2VzdFBvaW50WFkoeCwgeSwgY2xvc2VzdFBvaW50LCBtaW5TcXVhcmVkRGlzdGFuY2UpIHtcbiAgICBpZiAobWluU3F1YXJlZERpc3RhbmNlIDwgY2xvc2VzdFNxdWFyZWREaXN0YW5jZVhZKHRoaXMuZ2V0RXh0ZW50KCksIHgsIHkpKSB7XG4gICAgICByZXR1cm4gbWluU3F1YXJlZERpc3RhbmNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5tYXhEZWx0YVJldmlzaW9uXyAhPSB0aGlzLmdldFJldmlzaW9uKCkpIHtcbiAgICAgIHRoaXMubWF4RGVsdGFfID0gTWF0aC5zcXJ0KFxuICAgICAgICBtYXhTcXVhcmVkRGVsdGEoXG4gICAgICAgICAgdGhpcy5mbGF0Q29vcmRpbmF0ZXMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICB0aGlzLmZsYXRDb29yZGluYXRlcy5sZW5ndGgsXG4gICAgICAgICAgdGhpcy5zdHJpZGUsXG4gICAgICAgICAgMCxcbiAgICAgICAgKSxcbiAgICAgICk7XG4gICAgICB0aGlzLm1heERlbHRhUmV2aXNpb25fID0gdGhpcy5nZXRSZXZpc2lvbigpO1xuICAgIH1cbiAgICByZXR1cm4gYXNzaWduQ2xvc2VzdFBvaW50KFxuICAgICAgdGhpcy5mbGF0Q29vcmRpbmF0ZXMsXG4gICAgICAwLFxuICAgICAgdGhpcy5mbGF0Q29vcmRpbmF0ZXMubGVuZ3RoLFxuICAgICAgdGhpcy5zdHJpZGUsXG4gICAgICB0aGlzLm1heERlbHRhXyxcbiAgICAgIGZhbHNlLFxuICAgICAgeCxcbiAgICAgIHksXG4gICAgICBjbG9zZXN0UG9pbnQsXG4gICAgICBtaW5TcXVhcmVkRGlzdGFuY2UsXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJdGVyYXRlIG92ZXIgZWFjaCBzZWdtZW50LCBjYWxsaW5nIHRoZSBwcm92aWRlZCBjYWxsYmFjay5cbiAgICogSWYgdGhlIGNhbGxiYWNrIHJldHVybnMgYSB0cnV0aHkgdmFsdWUgdGhlIGZ1bmN0aW9uIHJldHVybnMgdGhhdFxuICAgKiB2YWx1ZSBpbW1lZGlhdGVseS4gT3RoZXJ3aXNlIHRoZSBmdW5jdGlvbiByZXR1cm5zIGBmYWxzZWAuXG4gICAqXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24odGhpczogUywgaW1wb3J0KFwiLi4vY29vcmRpbmF0ZS5qc1wiKS5Db29yZGluYXRlLCBpbXBvcnQoXCIuLi9jb29yZGluYXRlLmpzXCIpLkNvb3JkaW5hdGUpOiBUfSBjYWxsYmFjayBGdW5jdGlvblxuICAgKiAgICAgY2FsbGVkIGZvciBlYWNoIHNlZ21lbnQuIFRoZSBmdW5jdGlvbiB3aWxsIHJlY2VpdmUgdHdvIGFyZ3VtZW50cywgdGhlIHN0YXJ0IGFuZCBlbmQgY29vcmRpbmF0ZXMgb2YgdGhlIHNlZ21lbnQuXG4gICAqIEByZXR1cm4ge1R8Ym9vbGVhbn0gVmFsdWUuXG4gICAqIEB0ZW1wbGF0ZSBULFNcbiAgICogQGFwaVxuICAgKi9cbiAgZm9yRWFjaFNlZ21lbnQoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gZm9yRWFjaFNlZ21lbnQoXG4gICAgICB0aGlzLmZsYXRDb29yZGluYXRlcyxcbiAgICAgIDAsXG4gICAgICB0aGlzLmZsYXRDb29yZGluYXRlcy5sZW5ndGgsXG4gICAgICB0aGlzLnN0cmlkZSxcbiAgICAgIGNhbGxiYWNrLFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY29vcmRpbmF0ZSBhdCBgbWAgdXNpbmcgbGluZWFyIGludGVycG9sYXRpb24sIG9yIGBudWxsYCBpZiBub1xuICAgKiBzdWNoIGNvb3JkaW5hdGUgZXhpc3RzLlxuICAgKlxuICAgKiBgZXh0cmFwb2xhdGVgIGNvbnRyb2xzIGV4dHJhcG9sYXRpb24gYmV5b25kIHRoZSByYW5nZSBvZiBNcyBpbiB0aGVcbiAgICogTXVsdGlMaW5lU3RyaW5nLiBJZiBgZXh0cmFwb2xhdGVgIGlzIGB0cnVlYCB0aGVuIE1zIGxlc3MgdGhhbiB0aGUgZmlyc3RcbiAgICogTSB3aWxsIHJldHVybiB0aGUgZmlyc3QgY29vcmRpbmF0ZSBhbmQgTXMgZ3JlYXRlciB0aGFuIHRoZSBsYXN0IE0gd2lsbFxuICAgKiByZXR1cm4gdGhlIGxhc3QgY29vcmRpbmF0ZS5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IG0gTS5cbiAgICogQHBhcmFtIHtib29sZWFufSBbZXh0cmFwb2xhdGVdIEV4dHJhcG9sYXRlLiBEZWZhdWx0IGlzIGBmYWxzZWAuXG4gICAqIEByZXR1cm4ge2ltcG9ydChcIi4uL2Nvb3JkaW5hdGUuanNcIikuQ29vcmRpbmF0ZXxudWxsfSBDb29yZGluYXRlLlxuICAgKiBAYXBpXG4gICAqL1xuICBnZXRDb29yZGluYXRlQXRNKG0sIGV4dHJhcG9sYXRlKSB7XG4gICAgaWYgKHRoaXMubGF5b3V0ICE9ICdYWU0nICYmIHRoaXMubGF5b3V0ICE9ICdYWVpNJykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGV4dHJhcG9sYXRlID0gZXh0cmFwb2xhdGUgIT09IHVuZGVmaW5lZCA/IGV4dHJhcG9sYXRlIDogZmFsc2U7XG4gICAgcmV0dXJuIGxpbmVTdHJpbmdDb29yZGluYXRlQXRNKFxuICAgICAgdGhpcy5mbGF0Q29vcmRpbmF0ZXMsXG4gICAgICAwLFxuICAgICAgdGhpcy5mbGF0Q29vcmRpbmF0ZXMubGVuZ3RoLFxuICAgICAgdGhpcy5zdHJpZGUsXG4gICAgICBtLFxuICAgICAgZXh0cmFwb2xhdGUsXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGNvb3JkaW5hdGVzIG9mIHRoZSBsaW5lc3RyaW5nLlxuICAgKiBAcmV0dXJuIHtBcnJheTxpbXBvcnQoXCIuLi9jb29yZGluYXRlLmpzXCIpLkNvb3JkaW5hdGU+fSBDb29yZGluYXRlcy5cbiAgICogQGFwaVxuICAgKi9cbiAgZ2V0Q29vcmRpbmF0ZXMoKSB7XG4gICAgcmV0dXJuIGluZmxhdGVDb29yZGluYXRlcyhcbiAgICAgIHRoaXMuZmxhdENvb3JkaW5hdGVzLFxuICAgICAgMCxcbiAgICAgIHRoaXMuZmxhdENvb3JkaW5hdGVzLmxlbmd0aCxcbiAgICAgIHRoaXMuc3RyaWRlLFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBjb29yZGluYXRlIGF0IHRoZSBwcm92aWRlZCBmcmFjdGlvbiBhbG9uZyB0aGUgbGluZXN0cmluZy5cbiAgICogVGhlIGBmcmFjdGlvbmAgaXMgYSBudW1iZXIgYmV0d2VlbiAwIGFuZCAxLCB3aGVyZSAwIGlzIHRoZSBzdGFydCBvZiB0aGVcbiAgICogbGluZXN0cmluZyBhbmQgMSBpcyB0aGUgZW5kLlxuICAgKiBAcGFyYW0ge251bWJlcn0gZnJhY3Rpb24gRnJhY3Rpb24uXG4gICAqIEBwYXJhbSB7aW1wb3J0KFwiLi4vY29vcmRpbmF0ZS5qc1wiKS5Db29yZGluYXRlfSBbZGVzdF0gT3B0aW9uYWwgY29vcmRpbmF0ZSB3aG9zZSB2YWx1ZXMgd2lsbFxuICAgKiAgICAgYmUgbW9kaWZpZWQuIElmIG5vdCBwcm92aWRlZCwgYSBuZXcgY29vcmRpbmF0ZSB3aWxsIGJlIHJldHVybmVkLlxuICAgKiBAcmV0dXJuIHtpbXBvcnQoXCIuLi9jb29yZGluYXRlLmpzXCIpLkNvb3JkaW5hdGV9IENvb3JkaW5hdGUgb2YgdGhlIGludGVycG9sYXRlZCBwb2ludC5cbiAgICogQGFwaVxuICAgKi9cbiAgZ2V0Q29vcmRpbmF0ZUF0KGZyYWN0aW9uLCBkZXN0KSB7XG4gICAgcmV0dXJuIGludGVycG9sYXRlUG9pbnQoXG4gICAgICB0aGlzLmZsYXRDb29yZGluYXRlcyxcbiAgICAgIDAsXG4gICAgICB0aGlzLmZsYXRDb29yZGluYXRlcy5sZW5ndGgsXG4gICAgICB0aGlzLnN0cmlkZSxcbiAgICAgIGZyYWN0aW9uLFxuICAgICAgZGVzdCxcbiAgICAgIHRoaXMuc3RyaWRlLFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBsZW5ndGggb2YgdGhlIGxpbmVzdHJpbmcgb24gcHJvamVjdGVkIHBsYW5lLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IExlbmd0aCAob24gcHJvamVjdGVkIHBsYW5lKS5cbiAgICogQGFwaVxuICAgKi9cbiAgZ2V0TGVuZ3RoKCkge1xuICAgIHJldHVybiBsaW5lU3RyaW5nTGVuZ3RoKFxuICAgICAgdGhpcy5mbGF0Q29vcmRpbmF0ZXMsXG4gICAgICAwLFxuICAgICAgdGhpcy5mbGF0Q29vcmRpbmF0ZXMubGVuZ3RoLFxuICAgICAgdGhpcy5zdHJpZGUsXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtBcnJheTxudW1iZXI+fSBGbGF0IG1pZHBvaW50LlxuICAgKi9cbiAgZ2V0RmxhdE1pZHBvaW50KCkge1xuICAgIGlmICh0aGlzLmZsYXRNaWRwb2ludFJldmlzaW9uXyAhPSB0aGlzLmdldFJldmlzaW9uKCkpIHtcbiAgICAgIHRoaXMuZmxhdE1pZHBvaW50XyA9IHRoaXMuZ2V0Q29vcmRpbmF0ZUF0KFxuICAgICAgICAwLjUsXG4gICAgICAgIHRoaXMuZmxhdE1pZHBvaW50XyA/PyB1bmRlZmluZWQsXG4gICAgICApO1xuICAgICAgdGhpcy5mbGF0TWlkcG9pbnRSZXZpc2lvbl8gPSB0aGlzLmdldFJldmlzaW9uKCk7XG4gICAgfVxuICAgIHJldHVybiAvKiogQHR5cGUge0FycmF5PG51bWJlcj59ICovICh0aGlzLmZsYXRNaWRwb2ludF8pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzcXVhcmVkVG9sZXJhbmNlIFNxdWFyZWQgdG9sZXJhbmNlLlxuICAgKiBAcmV0dXJuIHtMaW5lU3RyaW5nfSBTaW1wbGlmaWVkIExpbmVTdHJpbmcuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIGdldFNpbXBsaWZpZWRHZW9tZXRyeUludGVybmFsKHNxdWFyZWRUb2xlcmFuY2UpIHtcbiAgICAvKiogQHR5cGUge0FycmF5PG51bWJlcj59ICovXG4gICAgY29uc3Qgc2ltcGxpZmllZEZsYXRDb29yZGluYXRlcyA9IFtdO1xuICAgIHNpbXBsaWZpZWRGbGF0Q29vcmRpbmF0ZXMubGVuZ3RoID0gZG91Z2xhc1BldWNrZXIoXG4gICAgICB0aGlzLmZsYXRDb29yZGluYXRlcyxcbiAgICAgIDAsXG4gICAgICB0aGlzLmZsYXRDb29yZGluYXRlcy5sZW5ndGgsXG4gICAgICB0aGlzLnN0cmlkZSxcbiAgICAgIHNxdWFyZWRUb2xlcmFuY2UsXG4gICAgICBzaW1wbGlmaWVkRmxhdENvb3JkaW5hdGVzLFxuICAgICAgMCxcbiAgICApO1xuICAgIHJldHVybiBuZXcgTGluZVN0cmluZyhzaW1wbGlmaWVkRmxhdENvb3JkaW5hdGVzLCAnWFknKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHR5cGUgb2YgdGhpcyBnZW9tZXRyeS5cbiAgICogQHJldHVybiB7aW1wb3J0KFwiLi9HZW9tZXRyeS5qc1wiKS5UeXBlfSBHZW9tZXRyeSB0eXBlLlxuICAgKiBAYXBpXG4gICAqL1xuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiAnTGluZVN0cmluZyc7XG4gIH1cblxuICAvKipcbiAgICogVGVzdCBpZiB0aGUgZ2VvbWV0cnkgYW5kIHRoZSBwYXNzZWQgZXh0ZW50IGludGVyc2VjdC5cbiAgICogQHBhcmFtIHtpbXBvcnQoXCIuLi9leHRlbnQuanNcIikuRXh0ZW50fSBleHRlbnQgRXh0ZW50LlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBgdHJ1ZWAgaWYgdGhlIGdlb21ldHJ5IGFuZCB0aGUgZXh0ZW50IGludGVyc2VjdC5cbiAgICogQGFwaVxuICAgKi9cbiAgaW50ZXJzZWN0c0V4dGVudChleHRlbnQpIHtcbiAgICByZXR1cm4gaW50ZXJzZWN0c0xpbmVTdHJpbmcoXG4gICAgICB0aGlzLmZsYXRDb29yZGluYXRlcyxcbiAgICAgIDAsXG4gICAgICB0aGlzLmZsYXRDb29yZGluYXRlcy5sZW5ndGgsXG4gICAgICB0aGlzLnN0cmlkZSxcbiAgICAgIGV4dGVudCxcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgY29vcmRpbmF0ZXMgb2YgdGhlIGxpbmVzdHJpbmcuXG4gICAqIEBwYXJhbSB7IUFycmF5PGltcG9ydChcIi4uL2Nvb3JkaW5hdGUuanNcIikuQ29vcmRpbmF0ZT59IGNvb3JkaW5hdGVzIENvb3JkaW5hdGVzLlxuICAgKiBAcGFyYW0ge2ltcG9ydChcIi4vR2VvbWV0cnkuanNcIikuR2VvbWV0cnlMYXlvdXR9IFtsYXlvdXRdIExheW91dC5cbiAgICogQGFwaVxuICAgKi9cbiAgc2V0Q29vcmRpbmF0ZXMoY29vcmRpbmF0ZXMsIGxheW91dCkge1xuICAgIHRoaXMuc2V0TGF5b3V0KGxheW91dCwgY29vcmRpbmF0ZXMsIDEpO1xuICAgIGlmICghdGhpcy5mbGF0Q29vcmRpbmF0ZXMpIHtcbiAgICAgIHRoaXMuZmxhdENvb3JkaW5hdGVzID0gW107XG4gICAgfVxuICAgIHRoaXMuZmxhdENvb3JkaW5hdGVzLmxlbmd0aCA9IGRlZmxhdGVDb29yZGluYXRlcyhcbiAgICAgIHRoaXMuZmxhdENvb3JkaW5hdGVzLFxuICAgICAgMCxcbiAgICAgIGNvb3JkaW5hdGVzLFxuICAgICAgdGhpcy5zdHJpZGUsXG4gICAgKTtcbiAgICB0aGlzLmNoYW5nZWQoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5lU3RyaW5nO1xuIiwiLyoqXG4gKiBAbW9kdWxlIG9sL2dlb20vU2ltcGxlR2VvbWV0cnlcbiAqL1xuaW1wb3J0IEdlb21ldHJ5IGZyb20gJy4vR2VvbWV0cnkuanMnO1xuaW1wb3J0IHthYnN0cmFjdH0gZnJvbSAnLi4vdXRpbC5qcyc7XG5pbXBvcnQge2NyZWF0ZU9yVXBkYXRlRnJvbUZsYXRDb29yZGluYXRlcywgZ2V0Q2VudGVyfSBmcm9tICcuLi9leHRlbnQuanMnO1xuaW1wb3J0IHtyb3RhdGUsIHNjYWxlLCB0cmFuc2Zvcm0yRCwgdHJhbnNsYXRlfSBmcm9tICcuL2ZsYXQvdHJhbnNmb3JtLmpzJztcblxuLyoqXG4gKiBAY2xhc3NkZXNjXG4gKiBBYnN0cmFjdCBiYXNlIGNsYXNzOyBvbmx5IHVzZWQgZm9yIGNyZWF0aW5nIHN1YmNsYXNzZXM7IGRvIG5vdCBpbnN0YW50aWF0ZVxuICogaW4gYXBwcywgYXMgY2Fubm90IGJlIHJlbmRlcmVkLlxuICpcbiAqIEBhYnN0cmFjdFxuICogQGFwaVxuICovXG5jbGFzcyBTaW1wbGVHZW9tZXRyeSBleHRlbmRzIEdlb21ldHJ5IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIC8qKlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAdHlwZSB7aW1wb3J0KFwiLi9HZW9tZXRyeS5qc1wiKS5HZW9tZXRyeUxheW91dH1cbiAgICAgKi9cbiAgICB0aGlzLmxheW91dCA9ICdYWSc7XG5cbiAgICAvKipcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLnN0cmlkZSA9IDI7XG5cbiAgICAvKipcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHR5cGUge0FycmF5PG51bWJlcj59XG4gICAgICovXG4gICAgdGhpcy5mbGF0Q29vcmRpbmF0ZXM7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtpbXBvcnQoXCIuLi9leHRlbnQuanNcIikuRXh0ZW50fSBleHRlbnQgRXh0ZW50LlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEByZXR1cm4ge2ltcG9ydChcIi4uL2V4dGVudC5qc1wiKS5FeHRlbnR9IGV4dGVudCBFeHRlbnQuXG4gICAqL1xuICBjb21wdXRlRXh0ZW50KGV4dGVudCkge1xuICAgIHJldHVybiBjcmVhdGVPclVwZGF0ZUZyb21GbGF0Q29vcmRpbmF0ZXMoXG4gICAgICB0aGlzLmZsYXRDb29yZGluYXRlcyxcbiAgICAgIDAsXG4gICAgICB0aGlzLmZsYXRDb29yZGluYXRlcy5sZW5ndGgsXG4gICAgICB0aGlzLnN0cmlkZSxcbiAgICAgIGV4dGVudCxcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEBhYnN0cmFjdFxuICAgKiBAcmV0dXJuIHtBcnJheTwqPiB8IG51bGx9IENvb3JkaW5hdGVzLlxuICAgKi9cbiAgZ2V0Q29vcmRpbmF0ZXMoKSB7XG4gICAgcmV0dXJuIGFic3RyYWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBmaXJzdCBjb29yZGluYXRlIG9mIHRoZSBnZW9tZXRyeS5cbiAgICogQHJldHVybiB7aW1wb3J0KFwiLi4vY29vcmRpbmF0ZS5qc1wiKS5Db29yZGluYXRlfSBGaXJzdCBjb29yZGluYXRlLlxuICAgKiBAYXBpXG4gICAqL1xuICBnZXRGaXJzdENvb3JkaW5hdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmxhdENvb3JkaW5hdGVzLnNsaWNlKDAsIHRoaXMuc3RyaWRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtBcnJheTxudW1iZXI+fSBGbGF0IGNvb3JkaW5hdGVzLlxuICAgKi9cbiAgZ2V0RmxhdENvb3JkaW5hdGVzKCkge1xuICAgIHJldHVybiB0aGlzLmZsYXRDb29yZGluYXRlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGxhc3QgY29vcmRpbmF0ZSBvZiB0aGUgZ2VvbWV0cnkuXG4gICAqIEByZXR1cm4ge2ltcG9ydChcIi4uL2Nvb3JkaW5hdGUuanNcIikuQ29vcmRpbmF0ZX0gTGFzdCBwb2ludC5cbiAgICogQGFwaVxuICAgKi9cbiAgZ2V0TGFzdENvb3JkaW5hdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmxhdENvb3JkaW5hdGVzLnNsaWNlKFxuICAgICAgdGhpcy5mbGF0Q29vcmRpbmF0ZXMubGVuZ3RoIC0gdGhpcy5zdHJpZGUsXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIHtAbGluayBpbXBvcnQoXCIuL0dlb21ldHJ5LmpzXCIpLkdlb21ldHJ5TGF5b3V0IGxheW91dH0gb2YgdGhlIGdlb21ldHJ5LlxuICAgKiBAcmV0dXJuIHtpbXBvcnQoXCIuL0dlb21ldHJ5LmpzXCIpLkdlb21ldHJ5TGF5b3V0fSBMYXlvdXQuXG4gICAqIEBhcGlcbiAgICovXG4gIGdldExheW91dCgpIHtcbiAgICByZXR1cm4gdGhpcy5sYXlvdXQ7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgc2ltcGxpZmllZCB2ZXJzaW9uIG9mIHRoaXMgZ2VvbWV0cnkgdXNpbmcgdGhlIERvdWdsYXMgUGV1Y2tlciBhbGdvcml0aG0uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzcXVhcmVkVG9sZXJhbmNlIFNxdWFyZWQgdG9sZXJhbmNlLlxuICAgKiBAcmV0dXJuIHtTaW1wbGVHZW9tZXRyeX0gU2ltcGxpZmllZCBnZW9tZXRyeS5cbiAgICovXG4gIGdldFNpbXBsaWZpZWRHZW9tZXRyeShzcXVhcmVkVG9sZXJhbmNlKSB7XG4gICAgaWYgKHRoaXMuc2ltcGxpZmllZEdlb21ldHJ5UmV2aXNpb24gIT09IHRoaXMuZ2V0UmV2aXNpb24oKSkge1xuICAgICAgdGhpcy5zaW1wbGlmaWVkR2VvbWV0cnlNYXhNaW5TcXVhcmVkVG9sZXJhbmNlID0gMDtcbiAgICAgIHRoaXMuc2ltcGxpZmllZEdlb21ldHJ5UmV2aXNpb24gPSB0aGlzLmdldFJldmlzaW9uKCk7XG4gICAgfVxuICAgIC8vIElmIHNxdWFyZWRUb2xlcmFuY2UgaXMgbmVnYXRpdmUgb3IgaWYgd2Uga25vdyB0aGF0IHNpbXBsaWZpY2F0aW9uIHdpbGwgbm90XG4gICAgLy8gaGF2ZSBhbnkgZWZmZWN0IHRoZW4ganVzdCByZXR1cm4gdGhpcy5cbiAgICBpZiAoXG4gICAgICBzcXVhcmVkVG9sZXJhbmNlIDwgMCB8fFxuICAgICAgKHRoaXMuc2ltcGxpZmllZEdlb21ldHJ5TWF4TWluU3F1YXJlZFRvbGVyYW5jZSAhPT0gMCAmJlxuICAgICAgICBzcXVhcmVkVG9sZXJhbmNlIDw9IHRoaXMuc2ltcGxpZmllZEdlb21ldHJ5TWF4TWluU3F1YXJlZFRvbGVyYW5jZSlcbiAgICApIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGNvbnN0IHNpbXBsaWZpZWRHZW9tZXRyeSA9XG4gICAgICB0aGlzLmdldFNpbXBsaWZpZWRHZW9tZXRyeUludGVybmFsKHNxdWFyZWRUb2xlcmFuY2UpO1xuICAgIGNvbnN0IHNpbXBsaWZpZWRGbGF0Q29vcmRpbmF0ZXMgPSBzaW1wbGlmaWVkR2VvbWV0cnkuZ2V0RmxhdENvb3JkaW5hdGVzKCk7XG4gICAgaWYgKHNpbXBsaWZpZWRGbGF0Q29vcmRpbmF0ZXMubGVuZ3RoIDwgdGhpcy5mbGF0Q29vcmRpbmF0ZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gc2ltcGxpZmllZEdlb21ldHJ5O1xuICAgIH1cbiAgICAvLyBTaW1wbGlmaWNhdGlvbiBkaWQgbm90IGFjdHVhbGx5IHJlbW92ZSBhbnkgY29vcmRpbmF0ZXMuICBXZSBub3cga25vd1xuICAgIC8vIHRoYXQgYW55IGNhbGxzIHRvIGdldFNpbXBsaWZpZWRHZW9tZXRyeSB3aXRoIGEgc3F1YXJlZFRvbGVyYW5jZSBsZXNzXG4gICAgLy8gdGhhbiBvciBlcXVhbCB0byB0aGUgY3VycmVudCBzcXVhcmVkVG9sZXJhbmNlIHdpbGwgYWxzbyBub3QgaGF2ZSBhbnlcbiAgICAvLyBlZmZlY3QuICBUaGlzIGFsbG93cyB1cyB0byBzaG9ydCBjaXJjdWl0IHNpbXBsaWZpY2F0aW9uIChzYXZpbmcgQ1BVXG4gICAgLy8gY3ljbGVzKSBhbmQgcHJldmVudHMgdGhlIGNhY2hlIG9mIHNpbXBsaWZpZWQgZ2VvbWV0cmllcyBmcm9tIGZpbGxpbmdcbiAgICAvLyB1cCB3aXRoIHVzZWxlc3MgaWRlbnRpY2FsIGNvcGllcyBvZiB0aGlzIGdlb21ldHJ5IChzYXZpbmcgbWVtb3J5KS5cbiAgICB0aGlzLnNpbXBsaWZpZWRHZW9tZXRyeU1heE1pblNxdWFyZWRUb2xlcmFuY2UgPSBzcXVhcmVkVG9sZXJhbmNlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzcXVhcmVkVG9sZXJhbmNlIFNxdWFyZWQgdG9sZXJhbmNlLlxuICAgKiBAcmV0dXJuIHtTaW1wbGVHZW9tZXRyeX0gU2ltcGxpZmllZCBnZW9tZXRyeS5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgZ2V0U2ltcGxpZmllZEdlb21ldHJ5SW50ZXJuYWwoc3F1YXJlZFRvbGVyYW5jZSkge1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge251bWJlcn0gU3RyaWRlLlxuICAgKi9cbiAgZ2V0U3RyaWRlKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmlkZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge2ltcG9ydChcIi4vR2VvbWV0cnkuanNcIikuR2VvbWV0cnlMYXlvdXR9IGxheW91dCBMYXlvdXQuXG4gICAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gZmxhdENvb3JkaW5hdGVzIEZsYXQgY29vcmRpbmF0ZXMuXG4gICAqL1xuICBzZXRGbGF0Q29vcmRpbmF0ZXMobGF5b3V0LCBmbGF0Q29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLnN0cmlkZSA9IGdldFN0cmlkZUZvckxheW91dChsYXlvdXQpO1xuICAgIHRoaXMubGF5b3V0ID0gbGF5b3V0O1xuICAgIHRoaXMuZmxhdENvb3JkaW5hdGVzID0gZmxhdENvb3JkaW5hdGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIEBhYnN0cmFjdFxuICAgKiBAcGFyYW0geyFBcnJheTwqPn0gY29vcmRpbmF0ZXMgQ29vcmRpbmF0ZXMuXG4gICAqIEBwYXJhbSB7aW1wb3J0KFwiLi9HZW9tZXRyeS5qc1wiKS5HZW9tZXRyeUxheW91dH0gW2xheW91dF0gTGF5b3V0LlxuICAgKi9cbiAgc2V0Q29vcmRpbmF0ZXMoY29vcmRpbmF0ZXMsIGxheW91dCkge1xuICAgIGFic3RyYWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtpbXBvcnQoXCIuL0dlb21ldHJ5LmpzXCIpLkdlb21ldHJ5TGF5b3V0fHVuZGVmaW5lZH0gbGF5b3V0IExheW91dC5cbiAgICogQHBhcmFtIHtBcnJheTwqPn0gY29vcmRpbmF0ZXMgQ29vcmRpbmF0ZXMuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBuZXN0aW5nIE5lc3RpbmcuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHNldExheW91dChsYXlvdXQsIGNvb3JkaW5hdGVzLCBuZXN0aW5nKSB7XG4gICAgbGV0IHN0cmlkZTtcbiAgICBpZiAobGF5b3V0KSB7XG4gICAgICBzdHJpZGUgPSBnZXRTdHJpZGVGb3JMYXlvdXQobGF5b3V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXN0aW5nOyArK2kpIHtcbiAgICAgICAgaWYgKGNvb3JkaW5hdGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMubGF5b3V0ID0gJ1hZJztcbiAgICAgICAgICB0aGlzLnN0cmlkZSA9IDI7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvb3JkaW5hdGVzID0gLyoqIEB0eXBlIHtBcnJheTx1bmtub3duPn0gKi8gKGNvb3JkaW5hdGVzWzBdKTtcbiAgICAgIH1cbiAgICAgIHN0cmlkZSA9IGNvb3JkaW5hdGVzLmxlbmd0aDtcbiAgICAgIGxheW91dCA9IGdldExheW91dEZvclN0cmlkZShzdHJpZGUpO1xuICAgIH1cbiAgICB0aGlzLmxheW91dCA9IGxheW91dDtcbiAgICB0aGlzLnN0cmlkZSA9IHN0cmlkZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBseSBhIHRyYW5zZm9ybSBmdW5jdGlvbiB0byB0aGUgY29vcmRpbmF0ZXMgb2YgdGhlIGdlb21ldHJ5LlxuICAgKiBUaGUgZ2VvbWV0cnkgaXMgbW9kaWZpZWQgaW4gcGxhY2UuXG4gICAqIElmIHlvdSBkbyBub3Qgd2FudCB0aGUgZ2VvbWV0cnkgbW9kaWZpZWQgaW4gcGxhY2UsIGZpcnN0IGBjbG9uZSgpYCBpdCBhbmRcbiAgICogdGhlbiB1c2UgdGhpcyBmdW5jdGlvbiBvbiB0aGUgY2xvbmUuXG4gICAqIEBwYXJhbSB7aW1wb3J0KFwiLi4vcHJvai5qc1wiKS5UcmFuc2Zvcm1GdW5jdGlvbn0gdHJhbnNmb3JtRm4gVHJhbnNmb3JtIGZ1bmN0aW9uLlxuICAgKiBDYWxsZWQgd2l0aCBhIGZsYXQgYXJyYXkgb2YgZ2VvbWV0cnkgY29vcmRpbmF0ZXMuXG4gICAqIEBhcGlcbiAgICovXG4gIGFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybUZuKSB7XG4gICAgaWYgKHRoaXMuZmxhdENvb3JkaW5hdGVzKSB7XG4gICAgICB0cmFuc2Zvcm1Gbih0aGlzLmZsYXRDb29yZGluYXRlcywgdGhpcy5mbGF0Q29vcmRpbmF0ZXMsIHRoaXMuc3RyaWRlKTtcbiAgICAgIHRoaXMuY2hhbmdlZCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSb3RhdGUgdGhlIGdlb21ldHJ5IGFyb3VuZCBhIGdpdmVuIGNvb3JkaW5hdGUuIFRoaXMgbW9kaWZpZXMgdGhlIGdlb21ldHJ5XG4gICAqIGNvb3JkaW5hdGVzIGluIHBsYWNlLlxuICAgKiBAcGFyYW0ge251bWJlcn0gYW5nbGUgUm90YXRpb24gYW5nbGUgaW4gY291bnRlci1jbG9ja3dpc2UgcmFkaWFucy5cbiAgICogQHBhcmFtIHtpbXBvcnQoXCIuLi9jb29yZGluYXRlLmpzXCIpLkNvb3JkaW5hdGV9IGFuY2hvciBUaGUgcm90YXRpb24gY2VudGVyLlxuICAgKiBAYXBpXG4gICAqL1xuICByb3RhdGUoYW5nbGUsIGFuY2hvcikge1xuICAgIGNvbnN0IGZsYXRDb29yZGluYXRlcyA9IHRoaXMuZ2V0RmxhdENvb3JkaW5hdGVzKCk7XG4gICAgaWYgKGZsYXRDb29yZGluYXRlcykge1xuICAgICAgY29uc3Qgc3RyaWRlID0gdGhpcy5nZXRTdHJpZGUoKTtcbiAgICAgIHJvdGF0ZShcbiAgICAgICAgZmxhdENvb3JkaW5hdGVzLFxuICAgICAgICAwLFxuICAgICAgICBmbGF0Q29vcmRpbmF0ZXMubGVuZ3RoLFxuICAgICAgICBzdHJpZGUsXG4gICAgICAgIGFuZ2xlLFxuICAgICAgICBhbmNob3IsXG4gICAgICAgIGZsYXRDb29yZGluYXRlcyxcbiAgICAgICk7XG4gICAgICB0aGlzLmNoYW5nZWQoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2NhbGUgdGhlIGdlb21ldHJ5ICh3aXRoIGFuIG9wdGlvbmFsIG9yaWdpbikuICBUaGlzIG1vZGlmaWVzIHRoZSBnZW9tZXRyeVxuICAgKiBjb29yZGluYXRlcyBpbiBwbGFjZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHN4IFRoZSBzY2FsaW5nIGZhY3RvciBpbiB0aGUgeC1kaXJlY3Rpb24uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbc3ldIFRoZSBzY2FsaW5nIGZhY3RvciBpbiB0aGUgeS1kaXJlY3Rpb24gKGRlZmF1bHRzIHRvIHN4KS5cbiAgICogQHBhcmFtIHtpbXBvcnQoXCIuLi9jb29yZGluYXRlLmpzXCIpLkNvb3JkaW5hdGV9IFthbmNob3JdIFRoZSBzY2FsZSBvcmlnaW4gKGRlZmF1bHRzIHRvIHRoZSBjZW50ZXJcbiAgICogICAgIG9mIHRoZSBnZW9tZXRyeSBleHRlbnQpLlxuICAgKiBAYXBpXG4gICAqL1xuICBzY2FsZShzeCwgc3ksIGFuY2hvcikge1xuICAgIGlmIChzeSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBzeSA9IHN4O1xuICAgIH1cbiAgICBpZiAoIWFuY2hvcikge1xuICAgICAgYW5jaG9yID0gZ2V0Q2VudGVyKHRoaXMuZ2V0RXh0ZW50KCkpO1xuICAgIH1cbiAgICBjb25zdCBmbGF0Q29vcmRpbmF0ZXMgPSB0aGlzLmdldEZsYXRDb29yZGluYXRlcygpO1xuICAgIGlmIChmbGF0Q29vcmRpbmF0ZXMpIHtcbiAgICAgIGNvbnN0IHN0cmlkZSA9IHRoaXMuZ2V0U3RyaWRlKCk7XG4gICAgICBzY2FsZShcbiAgICAgICAgZmxhdENvb3JkaW5hdGVzLFxuICAgICAgICAwLFxuICAgICAgICBmbGF0Q29vcmRpbmF0ZXMubGVuZ3RoLFxuICAgICAgICBzdHJpZGUsXG4gICAgICAgIHN4LFxuICAgICAgICBzeSxcbiAgICAgICAgYW5jaG9yLFxuICAgICAgICBmbGF0Q29vcmRpbmF0ZXMsXG4gICAgICApO1xuICAgICAgdGhpcy5jaGFuZ2VkKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zbGF0ZSB0aGUgZ2VvbWV0cnkuICBUaGlzIG1vZGlmaWVzIHRoZSBnZW9tZXRyeSBjb29yZGluYXRlcyBpbiBwbGFjZS4gIElmXG4gICAqIGluc3RlYWQgeW91IHdhbnQgYSBuZXcgZ2VvbWV0cnksIGZpcnN0IGBjbG9uZSgpYCB0aGlzIGdlb21ldHJ5LlxuICAgKiBAcGFyYW0ge251bWJlcn0gZGVsdGFYIERlbHRhIFguXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkZWx0YVkgRGVsdGEgWS5cbiAgICogQGFwaVxuICAgKi9cbiAgdHJhbnNsYXRlKGRlbHRhWCwgZGVsdGFZKSB7XG4gICAgY29uc3QgZmxhdENvb3JkaW5hdGVzID0gdGhpcy5nZXRGbGF0Q29vcmRpbmF0ZXMoKTtcbiAgICBpZiAoZmxhdENvb3JkaW5hdGVzKSB7XG4gICAgICBjb25zdCBzdHJpZGUgPSB0aGlzLmdldFN0cmlkZSgpO1xuICAgICAgdHJhbnNsYXRlKFxuICAgICAgICBmbGF0Q29vcmRpbmF0ZXMsXG4gICAgICAgIDAsXG4gICAgICAgIGZsYXRDb29yZGluYXRlcy5sZW5ndGgsXG4gICAgICAgIHN0cmlkZSxcbiAgICAgICAgZGVsdGFYLFxuICAgICAgICBkZWx0YVksXG4gICAgICAgIGZsYXRDb29yZGluYXRlcyxcbiAgICAgICk7XG4gICAgICB0aGlzLmNoYW5nZWQoKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gc3RyaWRlIFN0cmlkZS5cbiAqIEByZXR1cm4ge2ltcG9ydChcIi4vR2VvbWV0cnkuanNcIikuR2VvbWV0cnlMYXlvdXR9IGxheW91dCBMYXlvdXQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRMYXlvdXRGb3JTdHJpZGUoc3RyaWRlKSB7XG4gIGxldCBsYXlvdXQ7XG4gIGlmIChzdHJpZGUgPT0gMikge1xuICAgIGxheW91dCA9ICdYWSc7XG4gIH0gZWxzZSBpZiAoc3RyaWRlID09IDMpIHtcbiAgICBsYXlvdXQgPSAnWFlaJztcbiAgfSBlbHNlIGlmIChzdHJpZGUgPT0gNCkge1xuICAgIGxheW91dCA9ICdYWVpNJztcbiAgfVxuICByZXR1cm4gLyoqIEB0eXBlIHtpbXBvcnQoXCIuL0dlb21ldHJ5LmpzXCIpLkdlb21ldHJ5TGF5b3V0fSAqLyAobGF5b3V0KTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydChcIi4vR2VvbWV0cnkuanNcIikuR2VvbWV0cnlMYXlvdXR9IGxheW91dCBMYXlvdXQuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFN0cmlkZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFN0cmlkZUZvckxheW91dChsYXlvdXQpIHtcbiAgbGV0IHN0cmlkZTtcbiAgaWYgKGxheW91dCA9PSAnWFknKSB7XG4gICAgc3RyaWRlID0gMjtcbiAgfSBlbHNlIGlmIChsYXlvdXQgPT0gJ1hZWicgfHwgbGF5b3V0ID09ICdYWU0nKSB7XG4gICAgc3RyaWRlID0gMztcbiAgfSBlbHNlIGlmIChsYXlvdXQgPT0gJ1hZWk0nKSB7XG4gICAgc3RyaWRlID0gNDtcbiAgfVxuICByZXR1cm4gLyoqIEB0eXBlIHtudW1iZXJ9ICovIChzdHJpZGUpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7U2ltcGxlR2VvbWV0cnl9IHNpbXBsZUdlb21ldHJ5IFNpbXBsZSBnZW9tZXRyeS5cbiAqIEBwYXJhbSB7aW1wb3J0KFwiLi4vdHJhbnNmb3JtLmpzXCIpLlRyYW5zZm9ybX0gdHJhbnNmb3JtIFRyYW5zZm9ybS5cbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gW2Rlc3RdIERlc3RpbmF0aW9uLlxuICogQHJldHVybiB7QXJyYXk8bnVtYmVyPn0gVHJhbnNmb3JtZWQgZmxhdCBjb29yZGluYXRlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybUdlb20yRChzaW1wbGVHZW9tZXRyeSwgdHJhbnNmb3JtLCBkZXN0KSB7XG4gIGNvbnN0IGZsYXRDb29yZGluYXRlcyA9IHNpbXBsZUdlb21ldHJ5LmdldEZsYXRDb29yZGluYXRlcygpO1xuICBpZiAoIWZsYXRDb29yZGluYXRlcykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IHN0cmlkZSA9IHNpbXBsZUdlb21ldHJ5LmdldFN0cmlkZSgpO1xuICByZXR1cm4gdHJhbnNmb3JtMkQoXG4gICAgZmxhdENvb3JkaW5hdGVzLFxuICAgIDAsXG4gICAgZmxhdENvb3JkaW5hdGVzLmxlbmd0aCxcbiAgICBzdHJpZGUsXG4gICAgdHJhbnNmb3JtLFxuICAgIGRlc3QsXG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpbXBsZUdlb21ldHJ5O1xuIiwiLyoqXG4gKiBAbW9kdWxlIG9sL2dlb20vZmxhdC9jbG9zZXN0XG4gKi9cbmltcG9ydCB7bGVycCwgc3F1YXJlZERpc3RhbmNlIGFzIHNxdWFyZWREeH0gZnJvbSAnLi4vLi4vbWF0aC5qcyc7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgcG9pbnQgb24gdGhlIDJEIGxpbmUgc2VnbWVudCBmbGF0Q29vcmRpbmF0ZXNbb2Zmc2V0MV0gdG9cbiAqIGZsYXRDb29yZGluYXRlc1tvZmZzZXQyXSB0aGF0IGlzIGNsb3Nlc3QgdG8gdGhlIHBvaW50ICh4LCB5KS4gIEV4dHJhXG4gKiBkaW1lbnNpb25zIGFyZSBsaW5lYXJseSBpbnRlcnBvbGF0ZWQuXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGZsYXRDb29yZGluYXRlcyBGbGF0IGNvb3JkaW5hdGVzLlxuICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldDEgT2Zmc2V0IDEuXG4gKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0MiBPZmZzZXQgMi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzdHJpZGUgU3RyaWRlLlxuICogQHBhcmFtIHtudW1iZXJ9IHggWC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB5IFkuXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGNsb3Nlc3RQb2ludCBDbG9zZXN0IHBvaW50LlxuICovXG5mdW5jdGlvbiBhc3NpZ25DbG9zZXN0KFxuICBmbGF0Q29vcmRpbmF0ZXMsXG4gIG9mZnNldDEsXG4gIG9mZnNldDIsXG4gIHN0cmlkZSxcbiAgeCxcbiAgeSxcbiAgY2xvc2VzdFBvaW50LFxuKSB7XG4gIGNvbnN0IHgxID0gZmxhdENvb3JkaW5hdGVzW29mZnNldDFdO1xuICBjb25zdCB5MSA9IGZsYXRDb29yZGluYXRlc1tvZmZzZXQxICsgMV07XG4gIGNvbnN0IGR4ID0gZmxhdENvb3JkaW5hdGVzW29mZnNldDJdIC0geDE7XG4gIGNvbnN0IGR5ID0gZmxhdENvb3JkaW5hdGVzW29mZnNldDIgKyAxXSAtIHkxO1xuICBsZXQgb2Zmc2V0O1xuICBpZiAoZHggPT09IDAgJiYgZHkgPT09IDApIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQxO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHQgPSAoKHggLSB4MSkgKiBkeCArICh5IC0geTEpICogZHkpIC8gKGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICBpZiAodCA+IDEpIHtcbiAgICAgIG9mZnNldCA9IG9mZnNldDI7XG4gICAgfSBlbHNlIGlmICh0ID4gMCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHJpZGU7ICsraSkge1xuICAgICAgICBjbG9zZXN0UG9pbnRbaV0gPSBsZXJwKFxuICAgICAgICAgIGZsYXRDb29yZGluYXRlc1tvZmZzZXQxICsgaV0sXG4gICAgICAgICAgZmxhdENvb3JkaW5hdGVzW29mZnNldDIgKyBpXSxcbiAgICAgICAgICB0LFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgY2xvc2VzdFBvaW50Lmxlbmd0aCA9IHN0cmlkZTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgb2Zmc2V0ID0gb2Zmc2V0MTtcbiAgICB9XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHJpZGU7ICsraSkge1xuICAgIGNsb3Nlc3RQb2ludFtpXSA9IGZsYXRDb29yZGluYXRlc1tvZmZzZXQgKyBpXTtcbiAgfVxuICBjbG9zZXN0UG9pbnQubGVuZ3RoID0gc3RyaWRlO1xufVxuXG4vKipcbiAqIFJldHVybiB0aGUgc3F1YXJlZCBvZiB0aGUgbGFyZ2VzdCBkaXN0YW5jZSBiZXR3ZWVuIGFueSBwYWlyIG9mIGNvbnNlY3V0aXZlXG4gKiBjb29yZGluYXRlcy5cbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gZmxhdENvb3JkaW5hdGVzIEZsYXQgY29vcmRpbmF0ZXMuXG4gKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0IE9mZnNldC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBlbmQgRW5kLlxuICogQHBhcmFtIHtudW1iZXJ9IHN0cmlkZSBTdHJpZGUuXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4IE1heCBzcXVhcmVkIGRlbHRhLlxuICogQHJldHVybiB7bnVtYmVyfSBNYXggc3F1YXJlZCBkZWx0YS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1heFNxdWFyZWREZWx0YShmbGF0Q29vcmRpbmF0ZXMsIG9mZnNldCwgZW5kLCBzdHJpZGUsIG1heCkge1xuICBsZXQgeDEgPSBmbGF0Q29vcmRpbmF0ZXNbb2Zmc2V0XTtcbiAgbGV0IHkxID0gZmxhdENvb3JkaW5hdGVzW29mZnNldCArIDFdO1xuICBmb3IgKG9mZnNldCArPSBzdHJpZGU7IG9mZnNldCA8IGVuZDsgb2Zmc2V0ICs9IHN0cmlkZSkge1xuICAgIGNvbnN0IHgyID0gZmxhdENvb3JkaW5hdGVzW29mZnNldF07XG4gICAgY29uc3QgeTIgPSBmbGF0Q29vcmRpbmF0ZXNbb2Zmc2V0ICsgMV07XG4gICAgY29uc3Qgc3F1YXJlZERlbHRhID0gc3F1YXJlZER4KHgxLCB5MSwgeDIsIHkyKTtcbiAgICBpZiAoc3F1YXJlZERlbHRhID4gbWF4KSB7XG4gICAgICBtYXggPSBzcXVhcmVkRGVsdGE7XG4gICAgfVxuICAgIHgxID0geDI7XG4gICAgeTEgPSB5MjtcbiAgfVxuICByZXR1cm4gbWF4O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gZmxhdENvb3JkaW5hdGVzIEZsYXQgY29vcmRpbmF0ZXMuXG4gKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0IE9mZnNldC5cbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gZW5kcyBFbmRzLlxuICogQHBhcmFtIHtudW1iZXJ9IHN0cmlkZSBTdHJpZGUuXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4IE1heCBzcXVhcmVkIGRlbHRhLlxuICogQHJldHVybiB7bnVtYmVyfSBNYXggc3F1YXJlZCBkZWx0YS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFycmF5TWF4U3F1YXJlZERlbHRhKFxuICBmbGF0Q29vcmRpbmF0ZXMsXG4gIG9mZnNldCxcbiAgZW5kcyxcbiAgc3RyaWRlLFxuICBtYXgsXG4pIHtcbiAgZm9yIChsZXQgaSA9IDAsIGlpID0gZW5kcy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgY29uc3QgZW5kID0gZW5kc1tpXTtcbiAgICBtYXggPSBtYXhTcXVhcmVkRGVsdGEoZmxhdENvb3JkaW5hdGVzLCBvZmZzZXQsIGVuZCwgc3RyaWRlLCBtYXgpO1xuICAgIG9mZnNldCA9IGVuZDtcbiAgfVxuICByZXR1cm4gbWF4O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gZmxhdENvb3JkaW5hdGVzIEZsYXQgY29vcmRpbmF0ZXMuXG4gKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0IE9mZnNldC5cbiAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8bnVtYmVyPj59IGVuZHNzIEVuZHNzLlxuICogQHBhcmFtIHtudW1iZXJ9IHN0cmlkZSBTdHJpZGUuXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4IE1heCBzcXVhcmVkIGRlbHRhLlxuICogQHJldHVybiB7bnVtYmVyfSBNYXggc3F1YXJlZCBkZWx0YS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG11bHRpQXJyYXlNYXhTcXVhcmVkRGVsdGEoXG4gIGZsYXRDb29yZGluYXRlcyxcbiAgb2Zmc2V0LFxuICBlbmRzcyxcbiAgc3RyaWRlLFxuICBtYXgsXG4pIHtcbiAgZm9yIChsZXQgaSA9IDAsIGlpID0gZW5kc3MubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgIGNvbnN0IGVuZHMgPSBlbmRzc1tpXTtcbiAgICBtYXggPSBhcnJheU1heFNxdWFyZWREZWx0YShmbGF0Q29vcmRpbmF0ZXMsIG9mZnNldCwgZW5kcywgc3RyaWRlLCBtYXgpO1xuICAgIG9mZnNldCA9IGVuZHNbZW5kcy5sZW5ndGggLSAxXTtcbiAgfVxuICByZXR1cm4gbWF4O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gZmxhdENvb3JkaW5hdGVzIEZsYXQgY29vcmRpbmF0ZXMuXG4gKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0IE9mZnNldC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBlbmQgRW5kLlxuICogQHBhcmFtIHtudW1iZXJ9IHN0cmlkZSBTdHJpZGUuXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4RGVsdGEgTWF4IGRlbHRhLlxuICogQHBhcmFtIHtib29sZWFufSBpc1JpbmcgSXMgcmluZy5cbiAqIEBwYXJhbSB7bnVtYmVyfSB4IFguXG4gKiBAcGFyYW0ge251bWJlcn0geSBZLlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBjbG9zZXN0UG9pbnQgQ2xvc2VzdCBwb2ludC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW5TcXVhcmVkRGlzdGFuY2UgTWluaW11bSBzcXVhcmVkIGRpc3RhbmNlLlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBbdG1wUG9pbnRdIFRlbXBvcmFyeSBwb2ludCBvYmplY3QuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IE1pbmltdW0gc3F1YXJlZCBkaXN0YW5jZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbkNsb3Nlc3RQb2ludChcbiAgZmxhdENvb3JkaW5hdGVzLFxuICBvZmZzZXQsXG4gIGVuZCxcbiAgc3RyaWRlLFxuICBtYXhEZWx0YSxcbiAgaXNSaW5nLFxuICB4LFxuICB5LFxuICBjbG9zZXN0UG9pbnQsXG4gIG1pblNxdWFyZWREaXN0YW5jZSxcbiAgdG1wUG9pbnQsXG4pIHtcbiAgaWYgKG9mZnNldCA9PSBlbmQpIHtcbiAgICByZXR1cm4gbWluU3F1YXJlZERpc3RhbmNlO1xuICB9XG4gIGxldCBpLCBzcXVhcmVkRGlzdGFuY2U7XG4gIGlmIChtYXhEZWx0YSA9PT0gMCkge1xuICAgIC8vIEFsbCBwb2ludHMgYXJlIGlkZW50aWNhbCwgc28ganVzdCB0ZXN0IHRoZSBmaXJzdCBwb2ludC5cbiAgICBzcXVhcmVkRGlzdGFuY2UgPSBzcXVhcmVkRHgoXG4gICAgICB4LFxuICAgICAgeSxcbiAgICAgIGZsYXRDb29yZGluYXRlc1tvZmZzZXRdLFxuICAgICAgZmxhdENvb3JkaW5hdGVzW29mZnNldCArIDFdLFxuICAgICk7XG4gICAgaWYgKHNxdWFyZWREaXN0YW5jZSA8IG1pblNxdWFyZWREaXN0YW5jZSkge1xuICAgICAgZm9yIChpID0gMDsgaSA8IHN0cmlkZTsgKytpKSB7XG4gICAgICAgIGNsb3Nlc3RQb2ludFtpXSA9IGZsYXRDb29yZGluYXRlc1tvZmZzZXQgKyBpXTtcbiAgICAgIH1cbiAgICAgIGNsb3Nlc3RQb2ludC5sZW5ndGggPSBzdHJpZGU7XG4gICAgICByZXR1cm4gc3F1YXJlZERpc3RhbmNlO1xuICAgIH1cbiAgICByZXR1cm4gbWluU3F1YXJlZERpc3RhbmNlO1xuICB9XG4gIHRtcFBvaW50ID0gdG1wUG9pbnQgPyB0bXBQb2ludCA6IFtOYU4sIE5hTl07XG4gIGxldCBpbmRleCA9IG9mZnNldCArIHN0cmlkZTtcbiAgd2hpbGUgKGluZGV4IDwgZW5kKSB7XG4gICAgYXNzaWduQ2xvc2VzdChcbiAgICAgIGZsYXRDb29yZGluYXRlcyxcbiAgICAgIGluZGV4IC0gc3RyaWRlLFxuICAgICAgaW5kZXgsXG4gICAgICBzdHJpZGUsXG4gICAgICB4LFxuICAgICAgeSxcbiAgICAgIHRtcFBvaW50LFxuICAgICk7XG4gICAgc3F1YXJlZERpc3RhbmNlID0gc3F1YXJlZER4KHgsIHksIHRtcFBvaW50WzBdLCB0bXBQb2ludFsxXSk7XG4gICAgaWYgKHNxdWFyZWREaXN0YW5jZSA8IG1pblNxdWFyZWREaXN0YW5jZSkge1xuICAgICAgbWluU3F1YXJlZERpc3RhbmNlID0gc3F1YXJlZERpc3RhbmNlO1xuICAgICAgZm9yIChpID0gMDsgaSA8IHN0cmlkZTsgKytpKSB7XG4gICAgICAgIGNsb3Nlc3RQb2ludFtpXSA9IHRtcFBvaW50W2ldO1xuICAgICAgfVxuICAgICAgY2xvc2VzdFBvaW50Lmxlbmd0aCA9IHN0cmlkZTtcbiAgICAgIGluZGV4ICs9IHN0cmlkZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU2tpcCBhaGVhZCBtdWx0aXBsZSBwb2ludHMsIGJlY2F1c2Ugd2Uga25vdyB0aGF0IGFsbCB0aGUgc2tpcHBlZFxuICAgICAgLy8gcG9pbnRzIGNhbm5vdCBiZSBhbnkgY2xvc2VyIHRoYW4gdGhlIGNsb3Nlc3QgcG9pbnQgd2UgaGF2ZSBmb3VuZCBzb1xuICAgICAgLy8gZmFyLiAgV2Uga25vdyB0aGlzIGJlY2F1c2Ugd2Uga25vdyBob3cgY2xvc2UgdGhlIGN1cnJlbnQgcG9pbnQgaXMsIGhvd1xuICAgICAgLy8gY2xvc2UgdGhlIGNsb3Nlc3QgcG9pbnQgd2UgaGF2ZSBmb3VuZCBzbyBmYXIgaXMsIGFuZCB0aGUgbWF4aW11bVxuICAgICAgLy8gZGlzdGFuY2UgYmV0d2VlbiBjb25zZWN1dGl2ZSBwb2ludHMuICBGb3IgZXhhbXBsZSwgaWYgd2UncmUgY3VycmVudGx5XG4gICAgICAvLyBhdCBkaXN0YW5jZSAxMCwgdGhlIGJlc3Qgd2UndmUgZm91bmQgc28gZmFyIGlzIDMsIGFuZCB0aGF0IHRoZSBtYXhpbXVtXG4gICAgICAvLyBkaXN0YW5jZSBiZXR3ZWVuIGNvbnNlY3V0aXZlIHBvaW50cyBpcyAyLCB0aGVuIHdlJ2xsIG5lZWQgdG8gc2tpcCBhdFxuICAgICAgLy8gbGVhc3QgKDEwIC0gMykgLyAyID09IDMgKHJvdW5kZWQgZG93bikgcG9pbnRzIHRvIGhhdmUgYW55IGNoYW5jZSBvZlxuICAgICAgLy8gZmluZGluZyBhIGNsb3NlciBwb2ludC4gIFdlIHVzZSBNYXRoLm1heCguLi4sIDEpIHRvIGVuc3VyZSB0aGF0IHdlXG4gICAgICAvLyBhbHdheXMgYWR2YW5jZSBhdCBsZWFzdCBvbmUgcG9pbnQsIHRvIGF2b2lkIGFuIGluZmluaXRlIGxvb3AuXG4gICAgICBpbmRleCArPVxuICAgICAgICBzdHJpZGUgKlxuICAgICAgICBNYXRoLm1heChcbiAgICAgICAgICAoKE1hdGguc3FydChzcXVhcmVkRGlzdGFuY2UpIC0gTWF0aC5zcXJ0KG1pblNxdWFyZWREaXN0YW5jZSkpIC9cbiAgICAgICAgICAgIG1heERlbHRhKSB8XG4gICAgICAgICAgICAwLFxuICAgICAgICAgIDEsXG4gICAgICAgICk7XG4gICAgfVxuICB9XG4gIGlmIChpc1JpbmcpIHtcbiAgICAvLyBDaGVjayB0aGUgY2xvc2luZyBzZWdtZW50LlxuICAgIGFzc2lnbkNsb3Nlc3QoXG4gICAgICBmbGF0Q29vcmRpbmF0ZXMsXG4gICAgICBlbmQgLSBzdHJpZGUsXG4gICAgICBvZmZzZXQsXG4gICAgICBzdHJpZGUsXG4gICAgICB4LFxuICAgICAgeSxcbiAgICAgIHRtcFBvaW50LFxuICAgICk7XG4gICAgc3F1YXJlZERpc3RhbmNlID0gc3F1YXJlZER4KHgsIHksIHRtcFBvaW50WzBdLCB0bXBQb2ludFsxXSk7XG4gICAgaWYgKHNxdWFyZWREaXN0YW5jZSA8IG1pblNxdWFyZWREaXN0YW5jZSkge1xuICAgICAgbWluU3F1YXJlZERpc3RhbmNlID0gc3F1YXJlZERpc3RhbmNlO1xuICAgICAgZm9yIChpID0gMDsgaSA8IHN0cmlkZTsgKytpKSB7XG4gICAgICAgIGNsb3Nlc3RQb2ludFtpXSA9IHRtcFBvaW50W2ldO1xuICAgICAgfVxuICAgICAgY2xvc2VzdFBvaW50Lmxlbmd0aCA9IHN0cmlkZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1pblNxdWFyZWREaXN0YW5jZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGZsYXRDb29yZGluYXRlcyBGbGF0IGNvb3JkaW5hdGVzLlxuICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldCBPZmZzZXQuXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGVuZHMgRW5kcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzdHJpZGUgU3RyaWRlLlxuICogQHBhcmFtIHtudW1iZXJ9IG1heERlbHRhIE1heCBkZWx0YS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNSaW5nIElzIHJpbmcuXG4gKiBAcGFyYW0ge251bWJlcn0geCBYLlxuICogQHBhcmFtIHtudW1iZXJ9IHkgWS5cbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gY2xvc2VzdFBvaW50IENsb3Nlc3QgcG9pbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gbWluU3F1YXJlZERpc3RhbmNlIE1pbmltdW0gc3F1YXJlZCBkaXN0YW5jZS5cbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gW3RtcFBvaW50XSBUZW1wb3JhcnkgcG9pbnQgb2JqZWN0LlxuICogQHJldHVybiB7bnVtYmVyfSBNaW5pbXVtIHNxdWFyZWQgZGlzdGFuY2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ25DbG9zZXN0QXJyYXlQb2ludChcbiAgZmxhdENvb3JkaW5hdGVzLFxuICBvZmZzZXQsXG4gIGVuZHMsXG4gIHN0cmlkZSxcbiAgbWF4RGVsdGEsXG4gIGlzUmluZyxcbiAgeCxcbiAgeSxcbiAgY2xvc2VzdFBvaW50LFxuICBtaW5TcXVhcmVkRGlzdGFuY2UsXG4gIHRtcFBvaW50LFxuKSB7XG4gIHRtcFBvaW50ID0gdG1wUG9pbnQgPyB0bXBQb2ludCA6IFtOYU4sIE5hTl07XG4gIGZvciAobGV0IGkgPSAwLCBpaSA9IGVuZHMubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgIGNvbnN0IGVuZCA9IGVuZHNbaV07XG4gICAgbWluU3F1YXJlZERpc3RhbmNlID0gYXNzaWduQ2xvc2VzdFBvaW50KFxuICAgICAgZmxhdENvb3JkaW5hdGVzLFxuICAgICAgb2Zmc2V0LFxuICAgICAgZW5kLFxuICAgICAgc3RyaWRlLFxuICAgICAgbWF4RGVsdGEsXG4gICAgICBpc1JpbmcsXG4gICAgICB4LFxuICAgICAgeSxcbiAgICAgIGNsb3Nlc3RQb2ludCxcbiAgICAgIG1pblNxdWFyZWREaXN0YW5jZSxcbiAgICAgIHRtcFBvaW50LFxuICAgICk7XG4gICAgb2Zmc2V0ID0gZW5kO1xuICB9XG4gIHJldHVybiBtaW5TcXVhcmVkRGlzdGFuY2U7XG59XG5cbi8qKlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBmbGF0Q29vcmRpbmF0ZXMgRmxhdCBjb29yZGluYXRlcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQgT2Zmc2V0LlxuICogQHBhcmFtIHtBcnJheTxBcnJheTxudW1iZXI+Pn0gZW5kc3MgRW5kc3MuXG4gKiBAcGFyYW0ge251bWJlcn0gc3RyaWRlIFN0cmlkZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXhEZWx0YSBNYXggZGVsdGEuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzUmluZyBJcyByaW5nLlxuICogQHBhcmFtIHtudW1iZXJ9IHggWC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB5IFkuXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGNsb3Nlc3RQb2ludCBDbG9zZXN0IHBvaW50LlxuICogQHBhcmFtIHtudW1iZXJ9IG1pblNxdWFyZWREaXN0YW5jZSBNaW5pbXVtIHNxdWFyZWQgZGlzdGFuY2UuXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IFt0bXBQb2ludF0gVGVtcG9yYXJ5IHBvaW50IG9iamVjdC5cbiAqIEByZXR1cm4ge251bWJlcn0gTWluaW11bSBzcXVhcmVkIGRpc3RhbmNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduQ2xvc2VzdE11bHRpQXJyYXlQb2ludChcbiAgZmxhdENvb3JkaW5hdGVzLFxuICBvZmZzZXQsXG4gIGVuZHNzLFxuICBzdHJpZGUsXG4gIG1heERlbHRhLFxuICBpc1JpbmcsXG4gIHgsXG4gIHksXG4gIGNsb3Nlc3RQb2ludCxcbiAgbWluU3F1YXJlZERpc3RhbmNlLFxuICB0bXBQb2ludCxcbikge1xuICB0bXBQb2ludCA9IHRtcFBvaW50ID8gdG1wUG9pbnQgOiBbTmFOLCBOYU5dO1xuICBmb3IgKGxldCBpID0gMCwgaWkgPSBlbmRzcy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgY29uc3QgZW5kcyA9IGVuZHNzW2ldO1xuICAgIG1pblNxdWFyZWREaXN0YW5jZSA9IGFzc2lnbkNsb3Nlc3RBcnJheVBvaW50KFxuICAgICAgZmxhdENvb3JkaW5hdGVzLFxuICAgICAgb2Zmc2V0LFxuICAgICAgZW5kcyxcbiAgICAgIHN0cmlkZSxcbiAgICAgIG1heERlbHRhLFxuICAgICAgaXNSaW5nLFxuICAgICAgeCxcbiAgICAgIHksXG4gICAgICBjbG9zZXN0UG9pbnQsXG4gICAgICBtaW5TcXVhcmVkRGlzdGFuY2UsXG4gICAgICB0bXBQb2ludCxcbiAgICApO1xuICAgIG9mZnNldCA9IGVuZHNbZW5kcy5sZW5ndGggLSAxXTtcbiAgfVxuICByZXR1cm4gbWluU3F1YXJlZERpc3RhbmNlO1xufVxuIiwiLyoqXG4gKiBAbW9kdWxlIG9sL2dlb20vZmxhdC9jb250YWluc1xuICovXG5pbXBvcnQge2ZvckVhY2hDb3JuZXJ9IGZyb20gJy4uLy4uL2V4dGVudC5qcyc7XG5cbi8qKlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBmbGF0Q29vcmRpbmF0ZXMgRmxhdCBjb29yZGluYXRlcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQgT2Zmc2V0LlxuICogQHBhcmFtIHtudW1iZXJ9IGVuZCBFbmQuXG4gKiBAcGFyYW0ge251bWJlcn0gc3RyaWRlIFN0cmlkZS5cbiAqIEBwYXJhbSB7aW1wb3J0KFwiLi4vLi4vZXh0ZW50LmpzXCIpLkV4dGVudH0gZXh0ZW50IEV4dGVudC5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IENvbnRhaW5zIGV4dGVudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxpbmVhclJpbmdDb250YWluc0V4dGVudChcbiAgZmxhdENvb3JkaW5hdGVzLFxuICBvZmZzZXQsXG4gIGVuZCxcbiAgc3RyaWRlLFxuICBleHRlbnQsXG4pIHtcbiAgY29uc3Qgb3V0c2lkZSA9IGZvckVhY2hDb3JuZXIoXG4gICAgZXh0ZW50LFxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7aW1wb3J0KFwiLi4vLi4vY29vcmRpbmF0ZS5qc1wiKS5Db29yZGluYXRlfSBjb29yZGluYXRlIENvb3JkaW5hdGUuXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gQ29udGFpbnMgKHgsIHkpLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIChjb29yZGluYXRlKSB7XG4gICAgICByZXR1cm4gIWxpbmVhclJpbmdDb250YWluc1hZKFxuICAgICAgICBmbGF0Q29vcmRpbmF0ZXMsXG4gICAgICAgIG9mZnNldCxcbiAgICAgICAgZW5kLFxuICAgICAgICBzdHJpZGUsXG4gICAgICAgIGNvb3JkaW5hdGVbMF0sXG4gICAgICAgIGNvb3JkaW5hdGVbMV0sXG4gICAgICApO1xuICAgIH0sXG4gICk7XG4gIHJldHVybiAhb3V0c2lkZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGZsYXRDb29yZGluYXRlcyBGbGF0IGNvb3JkaW5hdGVzLlxuICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldCBPZmZzZXQuXG4gKiBAcGFyYW0ge251bWJlcn0gZW5kIEVuZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzdHJpZGUgU3RyaWRlLlxuICogQHBhcmFtIHtudW1iZXJ9IHggWC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB5IFkuXG4gKiBAcmV0dXJuIHtib29sZWFufSBDb250YWlucyAoeCwgeSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsaW5lYXJSaW5nQ29udGFpbnNYWShcbiAgZmxhdENvb3JkaW5hdGVzLFxuICBvZmZzZXQsXG4gIGVuZCxcbiAgc3RyaWRlLFxuICB4LFxuICB5LFxuKSB7XG4gIC8vIGh0dHBzOi8vZ2VvbWFsZ29yaXRobXMuY29tL2EwMy1faW5jbHVzaW9uLmh0bWxcbiAgLy8gQ29weXJpZ2h0IDIwMDAgc29mdFN1cmZlciwgMjAxMiBEYW4gU3VuZGF5XG4gIC8vIFRoaXMgY29kZSBtYXkgYmUgZnJlZWx5IHVzZWQgYW5kIG1vZGlmaWVkIGZvciBhbnkgcHVycG9zZVxuICAvLyBwcm92aWRpbmcgdGhhdCB0aGlzIGNvcHlyaWdodCBub3RpY2UgaXMgaW5jbHVkZWQgd2l0aCBpdC5cbiAgLy8gU29mdFN1cmZlciBtYWtlcyBubyB3YXJyYW50eSBmb3IgdGhpcyBjb2RlLCBhbmQgY2Fubm90IGJlIGhlbGRcbiAgLy8gbGlhYmxlIGZvciBhbnkgcmVhbCBvciBpbWFnaW5lZCBkYW1hZ2UgcmVzdWx0aW5nIGZyb20gaXRzIHVzZS5cbiAgLy8gVXNlcnMgb2YgdGhpcyBjb2RlIG11c3QgdmVyaWZ5IGNvcnJlY3RuZXNzIGZvciB0aGVpciBhcHBsaWNhdGlvbi5cbiAgbGV0IHduID0gMDtcbiAgbGV0IHgxID0gZmxhdENvb3JkaW5hdGVzW2VuZCAtIHN0cmlkZV07XG4gIGxldCB5MSA9IGZsYXRDb29yZGluYXRlc1tlbmQgLSBzdHJpZGUgKyAxXTtcbiAgZm9yICg7IG9mZnNldCA8IGVuZDsgb2Zmc2V0ICs9IHN0cmlkZSkge1xuICAgIGNvbnN0IHgyID0gZmxhdENvb3JkaW5hdGVzW29mZnNldF07XG4gICAgY29uc3QgeTIgPSBmbGF0Q29vcmRpbmF0ZXNbb2Zmc2V0ICsgMV07XG4gICAgaWYgKHkxIDw9IHkpIHtcbiAgICAgIGlmICh5MiA+IHkgJiYgKHgyIC0geDEpICogKHkgLSB5MSkgLSAoeCAtIHgxKSAqICh5MiAtIHkxKSA+IDApIHtcbiAgICAgICAgd24rKztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHkyIDw9IHkgJiYgKHgyIC0geDEpICogKHkgLSB5MSkgLSAoeCAtIHgxKSAqICh5MiAtIHkxKSA8IDApIHtcbiAgICAgIHduLS07XG4gICAgfVxuICAgIHgxID0geDI7XG4gICAgeTEgPSB5MjtcbiAgfVxuICByZXR1cm4gd24gIT09IDA7XG59XG5cbi8qKlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBmbGF0Q29vcmRpbmF0ZXMgRmxhdCBjb29yZGluYXRlcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQgT2Zmc2V0LlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBlbmRzIEVuZHMuXG4gKiBAcGFyYW0ge251bWJlcn0gc3RyaWRlIFN0cmlkZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSB4IFguXG4gKiBAcGFyYW0ge251bWJlcn0geSBZLlxuICogQHJldHVybiB7Ym9vbGVhbn0gQ29udGFpbnMgKHgsIHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbGluZWFyUmluZ3NDb250YWluc1hZKFxuICBmbGF0Q29vcmRpbmF0ZXMsXG4gIG9mZnNldCxcbiAgZW5kcyxcbiAgc3RyaWRlLFxuICB4LFxuICB5LFxuKSB7XG4gIGlmIChlbmRzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoIWxpbmVhclJpbmdDb250YWluc1hZKGZsYXRDb29yZGluYXRlcywgb2Zmc2V0LCBlbmRzWzBdLCBzdHJpZGUsIHgsIHkpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGZvciAobGV0IGkgPSAxLCBpaSA9IGVuZHMubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgIGlmIChcbiAgICAgIGxpbmVhclJpbmdDb250YWluc1hZKGZsYXRDb29yZGluYXRlcywgZW5kc1tpIC0gMV0sIGVuZHNbaV0sIHN0cmlkZSwgeCwgeSlcbiAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBmbGF0Q29vcmRpbmF0ZXMgRmxhdCBjb29yZGluYXRlcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQgT2Zmc2V0LlxuICogQHBhcmFtIHtBcnJheTxBcnJheTxudW1iZXI+Pn0gZW5kc3MgRW5kc3MuXG4gKiBAcGFyYW0ge251bWJlcn0gc3RyaWRlIFN0cmlkZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSB4IFguXG4gKiBAcGFyYW0ge251bWJlcn0geSBZLlxuICogQHJldHVybiB7Ym9vbGVhbn0gQ29udGFpbnMgKHgsIHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbGluZWFyUmluZ3NzQ29udGFpbnNYWShcbiAgZmxhdENvb3JkaW5hdGVzLFxuICBvZmZzZXQsXG4gIGVuZHNzLFxuICBzdHJpZGUsXG4gIHgsXG4gIHksXG4pIHtcbiAgaWYgKGVuZHNzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBmb3IgKGxldCBpID0gMCwgaWkgPSBlbmRzcy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgY29uc3QgZW5kcyA9IGVuZHNzW2ldO1xuICAgIGlmIChsaW5lYXJSaW5nc0NvbnRhaW5zWFkoZmxhdENvb3JkaW5hdGVzLCBvZmZzZXQsIGVuZHMsIHN0cmlkZSwgeCwgeSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBvZmZzZXQgPSBlbmRzW2VuZHMubGVuZ3RoIC0gMV07XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuIiwiLyoqXG4gKiBAbW9kdWxlIG9sL2dlb20vZmxhdC9kZWZsYXRlXG4gKi9cblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGZsYXRDb29yZGluYXRlcyBGbGF0IGNvb3JkaW5hdGVzLlxuICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldCBPZmZzZXQuXG4gKiBAcGFyYW0ge2ltcG9ydChcIi4uLy4uL2Nvb3JkaW5hdGUuanNcIikuQ29vcmRpbmF0ZX0gY29vcmRpbmF0ZSBDb29yZGluYXRlLlxuICogQHBhcmFtIHtudW1iZXJ9IHN0cmlkZSBTdHJpZGUuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IG9mZnNldCBPZmZzZXQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWZsYXRlQ29vcmRpbmF0ZShmbGF0Q29vcmRpbmF0ZXMsIG9mZnNldCwgY29vcmRpbmF0ZSwgc3RyaWRlKSB7XG4gIGZvciAobGV0IGkgPSAwLCBpaSA9IGNvb3JkaW5hdGUubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgIGZsYXRDb29yZGluYXRlc1tvZmZzZXQrK10gPSBjb29yZGluYXRlW2ldO1xuICB9XG4gIHJldHVybiBvZmZzZXQ7XG59XG5cbi8qKlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBmbGF0Q29vcmRpbmF0ZXMgRmxhdCBjb29yZGluYXRlcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQgT2Zmc2V0LlxuICogQHBhcmFtIHtBcnJheTxpbXBvcnQoXCIuLi8uLi9jb29yZGluYXRlLmpzXCIpLkNvb3JkaW5hdGU+fSBjb29yZGluYXRlcyBDb29yZGluYXRlcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzdHJpZGUgU3RyaWRlLlxuICogQHJldHVybiB7bnVtYmVyfSBvZmZzZXQgT2Zmc2V0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVmbGF0ZUNvb3JkaW5hdGVzKFxuICBmbGF0Q29vcmRpbmF0ZXMsXG4gIG9mZnNldCxcbiAgY29vcmRpbmF0ZXMsXG4gIHN0cmlkZSxcbikge1xuICBmb3IgKGxldCBpID0gMCwgaWkgPSBjb29yZGluYXRlcy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgY29uc3QgY29vcmRpbmF0ZSA9IGNvb3JkaW5hdGVzW2ldO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc3RyaWRlOyArK2opIHtcbiAgICAgIGZsYXRDb29yZGluYXRlc1tvZmZzZXQrK10gPSBjb29yZGluYXRlW2pdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gb2Zmc2V0O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gZmxhdENvb3JkaW5hdGVzIEZsYXQgY29vcmRpbmF0ZXMuXG4gKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0IE9mZnNldC5cbiAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8aW1wb3J0KFwiLi4vLi4vY29vcmRpbmF0ZS5qc1wiKS5Db29yZGluYXRlPj59IGNvb3JkaW5hdGVzcyBDb29yZGluYXRlc3MuXG4gKiBAcGFyYW0ge251bWJlcn0gc3RyaWRlIFN0cmlkZS5cbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gW2VuZHNdIEVuZHMuXG4gKiBAcmV0dXJuIHtBcnJheTxudW1iZXI+fSBFbmRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVmbGF0ZUNvb3JkaW5hdGVzQXJyYXkoXG4gIGZsYXRDb29yZGluYXRlcyxcbiAgb2Zmc2V0LFxuICBjb29yZGluYXRlc3MsXG4gIHN0cmlkZSxcbiAgZW5kcyxcbikge1xuICBlbmRzID0gZW5kcyA/IGVuZHMgOiBbXTtcbiAgbGV0IGkgPSAwO1xuICBmb3IgKGxldCBqID0gMCwgamogPSBjb29yZGluYXRlc3MubGVuZ3RoOyBqIDwgamo7ICsraikge1xuICAgIGNvbnN0IGVuZCA9IGRlZmxhdGVDb29yZGluYXRlcyhcbiAgICAgIGZsYXRDb29yZGluYXRlcyxcbiAgICAgIG9mZnNldCxcbiAgICAgIGNvb3JkaW5hdGVzc1tqXSxcbiAgICAgIHN0cmlkZSxcbiAgICApO1xuICAgIGVuZHNbaSsrXSA9IGVuZDtcbiAgICBvZmZzZXQgPSBlbmQ7XG4gIH1cbiAgZW5kcy5sZW5ndGggPSBpO1xuICByZXR1cm4gZW5kcztcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGZsYXRDb29yZGluYXRlcyBGbGF0IGNvb3JkaW5hdGVzLlxuICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldCBPZmZzZXQuXG4gKiBAcGFyYW0ge0FycmF5PEFycmF5PEFycmF5PGltcG9ydChcIi4uLy4uL2Nvb3JkaW5hdGUuanNcIikuQ29vcmRpbmF0ZT4+Pn0gY29vcmRpbmF0ZXNzcyBDb29yZGluYXRlc3NzLlxuICogQHBhcmFtIHtudW1iZXJ9IHN0cmlkZSBTdHJpZGUuXG4gKiBAcGFyYW0ge0FycmF5PEFycmF5PG51bWJlcj4+fSBbZW5kc3NdIEVuZHNzLlxuICogQHJldHVybiB7QXJyYXk8QXJyYXk8bnVtYmVyPj59IEVuZHNzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVmbGF0ZU11bHRpQ29vcmRpbmF0ZXNBcnJheShcbiAgZmxhdENvb3JkaW5hdGVzLFxuICBvZmZzZXQsXG4gIGNvb3JkaW5hdGVzc3MsXG4gIHN0cmlkZSxcbiAgZW5kc3MsXG4pIHtcbiAgZW5kc3MgPSBlbmRzcyA/IGVuZHNzIDogW107XG4gIGxldCBpID0gMDtcbiAgZm9yIChsZXQgaiA9IDAsIGpqID0gY29vcmRpbmF0ZXNzcy5sZW5ndGg7IGogPCBqajsgKytqKSB7XG4gICAgY29uc3QgZW5kcyA9IGRlZmxhdGVDb29yZGluYXRlc0FycmF5KFxuICAgICAgZmxhdENvb3JkaW5hdGVzLFxuICAgICAgb2Zmc2V0LFxuICAgICAgY29vcmRpbmF0ZXNzc1tqXSxcbiAgICAgIHN0cmlkZSxcbiAgICAgIGVuZHNzW2ldLFxuICAgICk7XG4gICAgaWYgKGVuZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBlbmRzWzBdID0gb2Zmc2V0O1xuICAgIH1cbiAgICBlbmRzc1tpKytdID0gZW5kcztcbiAgICBvZmZzZXQgPSBlbmRzW2VuZHMubGVuZ3RoIC0gMV07XG4gIH1cbiAgZW5kc3MubGVuZ3RoID0gaTtcbiAgcmV0dXJuIGVuZHNzO1xufVxuIiwiLyoqXG4gKiBAbW9kdWxlIG9sL2dlb20vZmxhdC9pbmZsYXRlXG4gKi9cblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGZsYXRDb29yZGluYXRlcyBGbGF0IGNvb3JkaW5hdGVzLlxuICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldCBPZmZzZXQuXG4gKiBAcGFyYW0ge251bWJlcn0gZW5kIEVuZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzdHJpZGUgU3RyaWRlLlxuICogQHBhcmFtIHtBcnJheTxpbXBvcnQoXCIuLi8uLi9jb29yZGluYXRlLmpzXCIpLkNvb3JkaW5hdGU+fSBbY29vcmRpbmF0ZXNdIENvb3JkaW5hdGVzLlxuICogQHJldHVybiB7QXJyYXk8aW1wb3J0KFwiLi4vLi4vY29vcmRpbmF0ZS5qc1wiKS5Db29yZGluYXRlPn0gQ29vcmRpbmF0ZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbmZsYXRlQ29vcmRpbmF0ZXMoXG4gIGZsYXRDb29yZGluYXRlcyxcbiAgb2Zmc2V0LFxuICBlbmQsXG4gIHN0cmlkZSxcbiAgY29vcmRpbmF0ZXMsXG4pIHtcbiAgY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcyAhPT0gdW5kZWZpbmVkID8gY29vcmRpbmF0ZXMgOiBbXTtcbiAgbGV0IGkgPSAwO1xuICBmb3IgKGxldCBqID0gb2Zmc2V0OyBqIDwgZW5kOyBqICs9IHN0cmlkZSkge1xuICAgIGNvb3JkaW5hdGVzW2krK10gPSBmbGF0Q29vcmRpbmF0ZXMuc2xpY2UoaiwgaiArIHN0cmlkZSk7XG4gIH1cbiAgY29vcmRpbmF0ZXMubGVuZ3RoID0gaTtcbiAgcmV0dXJuIGNvb3JkaW5hdGVzO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gZmxhdENvb3JkaW5hdGVzIEZsYXQgY29vcmRpbmF0ZXMuXG4gKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0IE9mZnNldC5cbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gZW5kcyBFbmRzLlxuICogQHBhcmFtIHtudW1iZXJ9IHN0cmlkZSBTdHJpZGUuXG4gKiBAcGFyYW0ge0FycmF5PEFycmF5PGltcG9ydChcIi4uLy4uL2Nvb3JkaW5hdGUuanNcIikuQ29vcmRpbmF0ZT4+fSBbY29vcmRpbmF0ZXNzXSBDb29yZGluYXRlc3MuXG4gKiBAcmV0dXJuIHtBcnJheTxBcnJheTxpbXBvcnQoXCIuLi8uLi9jb29yZGluYXRlLmpzXCIpLkNvb3JkaW5hdGU+Pn0gQ29vcmRpbmF0ZXNzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5mbGF0ZUNvb3JkaW5hdGVzQXJyYXkoXG4gIGZsYXRDb29yZGluYXRlcyxcbiAgb2Zmc2V0LFxuICBlbmRzLFxuICBzdHJpZGUsXG4gIGNvb3JkaW5hdGVzcyxcbikge1xuICBjb29yZGluYXRlc3MgPSBjb29yZGluYXRlc3MgIT09IHVuZGVmaW5lZCA/IGNvb3JkaW5hdGVzcyA6IFtdO1xuICBsZXQgaSA9IDA7XG4gIGZvciAobGV0IGogPSAwLCBqaiA9IGVuZHMubGVuZ3RoOyBqIDwgamo7ICsraikge1xuICAgIGNvbnN0IGVuZCA9IGVuZHNbal07XG4gICAgY29vcmRpbmF0ZXNzW2krK10gPSBpbmZsYXRlQ29vcmRpbmF0ZXMoXG4gICAgICBmbGF0Q29vcmRpbmF0ZXMsXG4gICAgICBvZmZzZXQsXG4gICAgICBlbmQsXG4gICAgICBzdHJpZGUsXG4gICAgICBjb29yZGluYXRlc3NbaV0sXG4gICAgKTtcbiAgICBvZmZzZXQgPSBlbmQ7XG4gIH1cbiAgY29vcmRpbmF0ZXNzLmxlbmd0aCA9IGk7XG4gIHJldHVybiBjb29yZGluYXRlc3M7XG59XG5cbi8qKlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBmbGF0Q29vcmRpbmF0ZXMgRmxhdCBjb29yZGluYXRlcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQgT2Zmc2V0LlxuICogQHBhcmFtIHtBcnJheTxBcnJheTxudW1iZXI+Pn0gZW5kc3MgRW5kc3MuXG4gKiBAcGFyYW0ge251bWJlcn0gc3RyaWRlIFN0cmlkZS5cbiAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8QXJyYXk8aW1wb3J0KFwiLi4vLi4vY29vcmRpbmF0ZS5qc1wiKS5Db29yZGluYXRlPj4+fSBbY29vcmRpbmF0ZXNzc11cbiAqICAgICBDb29yZGluYXRlc3NzLlxuICogQHJldHVybiB7QXJyYXk8QXJyYXk8QXJyYXk8aW1wb3J0KFwiLi4vLi4vY29vcmRpbmF0ZS5qc1wiKS5Db29yZGluYXRlPj4+fSBDb29yZGluYXRlc3NzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5mbGF0ZU11bHRpQ29vcmRpbmF0ZXNBcnJheShcbiAgZmxhdENvb3JkaW5hdGVzLFxuICBvZmZzZXQsXG4gIGVuZHNzLFxuICBzdHJpZGUsXG4gIGNvb3JkaW5hdGVzc3MsXG4pIHtcbiAgY29vcmRpbmF0ZXNzcyA9IGNvb3JkaW5hdGVzc3MgIT09IHVuZGVmaW5lZCA/IGNvb3JkaW5hdGVzc3MgOiBbXTtcbiAgbGV0IGkgPSAwO1xuICBmb3IgKGxldCBqID0gMCwgamogPSBlbmRzcy5sZW5ndGg7IGogPCBqajsgKytqKSB7XG4gICAgY29uc3QgZW5kcyA9IGVuZHNzW2pdO1xuICAgIGNvb3JkaW5hdGVzc3NbaSsrXSA9XG4gICAgICBlbmRzLmxlbmd0aCA9PT0gMSAmJiBlbmRzWzBdID09PSBvZmZzZXRcbiAgICAgICAgPyBbXVxuICAgICAgICA6IGluZmxhdGVDb29yZGluYXRlc0FycmF5KFxuICAgICAgICAgICAgZmxhdENvb3JkaW5hdGVzLFxuICAgICAgICAgICAgb2Zmc2V0LFxuICAgICAgICAgICAgZW5kcyxcbiAgICAgICAgICAgIHN0cmlkZSxcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzc3NbaV0sXG4gICAgICAgICAgKTtcbiAgICBvZmZzZXQgPSBlbmRzW2VuZHMubGVuZ3RoIC0gMV07XG4gIH1cbiAgY29vcmRpbmF0ZXNzcy5sZW5ndGggPSBpO1xuICByZXR1cm4gY29vcmRpbmF0ZXNzcztcbn1cbiIsIi8qKlxuICogQG1vZHVsZSBvbC9nZW9tL2ZsYXQvaW50ZXJwb2xhdGVcbiAqL1xuaW1wb3J0IHtiaW5hcnlTZWFyY2h9IGZyb20gJy4uLy4uL2FycmF5LmpzJztcbmltcG9ydCB7bGVycH0gZnJvbSAnLi4vLi4vbWF0aC5qcyc7XG5cbi8qKlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBmbGF0Q29vcmRpbmF0ZXMgRmxhdCBjb29yZGluYXRlcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQgT2Zmc2V0LlxuICogQHBhcmFtIHtudW1iZXJ9IGVuZCBFbmQuXG4gKiBAcGFyYW0ge251bWJlcn0gc3RyaWRlIFN0cmlkZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmcmFjdGlvbiBGcmFjdGlvbi5cbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gW2Rlc3RdIERlc3RpbmF0aW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IFtkaW1lbnNpb25dIERlc3RpbmF0aW9uIGRpbWVuc2lvbiAoZGVmYXVsdCBpcyBgMmApXG4gKiBAcmV0dXJuIHtBcnJheTxudW1iZXI+fSBEZXN0aW5hdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlUG9pbnQoXG4gIGZsYXRDb29yZGluYXRlcyxcbiAgb2Zmc2V0LFxuICBlbmQsXG4gIHN0cmlkZSxcbiAgZnJhY3Rpb24sXG4gIGRlc3QsXG4gIGRpbWVuc2lvbixcbikge1xuICBsZXQgbywgdDtcbiAgY29uc3QgbiA9IChlbmQgLSBvZmZzZXQpIC8gc3RyaWRlO1xuICBpZiAobiA9PT0gMSkge1xuICAgIG8gPSBvZmZzZXQ7XG4gIH0gZWxzZSBpZiAobiA9PT0gMikge1xuICAgIG8gPSBvZmZzZXQ7XG4gICAgdCA9IGZyYWN0aW9uO1xuICB9IGVsc2UgaWYgKG4gIT09IDApIHtcbiAgICBsZXQgeDEgPSBmbGF0Q29vcmRpbmF0ZXNbb2Zmc2V0XTtcbiAgICBsZXQgeTEgPSBmbGF0Q29vcmRpbmF0ZXNbb2Zmc2V0ICsgMV07XG4gICAgbGV0IGxlbmd0aCA9IDA7XG4gICAgY29uc3QgY3VtdWxhdGl2ZUxlbmd0aHMgPSBbMF07XG4gICAgZm9yIChsZXQgaSA9IG9mZnNldCArIHN0cmlkZTsgaSA8IGVuZDsgaSArPSBzdHJpZGUpIHtcbiAgICAgIGNvbnN0IHgyID0gZmxhdENvb3JkaW5hdGVzW2ldO1xuICAgICAgY29uc3QgeTIgPSBmbGF0Q29vcmRpbmF0ZXNbaSArIDFdO1xuICAgICAgbGVuZ3RoICs9IE1hdGguc3FydCgoeDIgLSB4MSkgKiAoeDIgLSB4MSkgKyAoeTIgLSB5MSkgKiAoeTIgLSB5MSkpO1xuICAgICAgY3VtdWxhdGl2ZUxlbmd0aHMucHVzaChsZW5ndGgpO1xuICAgICAgeDEgPSB4MjtcbiAgICAgIHkxID0geTI7XG4gICAgfVxuICAgIGNvbnN0IHRhcmdldCA9IGZyYWN0aW9uICogbGVuZ3RoO1xuICAgIGNvbnN0IGluZGV4ID0gYmluYXJ5U2VhcmNoKGN1bXVsYXRpdmVMZW5ndGhzLCB0YXJnZXQpO1xuICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgIHQgPVxuICAgICAgICAodGFyZ2V0IC0gY3VtdWxhdGl2ZUxlbmd0aHNbLWluZGV4IC0gMl0pIC9cbiAgICAgICAgKGN1bXVsYXRpdmVMZW5ndGhzWy1pbmRleCAtIDFdIC0gY3VtdWxhdGl2ZUxlbmd0aHNbLWluZGV4IC0gMl0pO1xuICAgICAgbyA9IG9mZnNldCArICgtaW5kZXggLSAyKSAqIHN0cmlkZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbyA9IG9mZnNldCArIGluZGV4ICogc3RyaWRlO1xuICAgIH1cbiAgfVxuICBkaW1lbnNpb24gPSBkaW1lbnNpb24gPiAxID8gZGltZW5zaW9uIDogMjtcbiAgZGVzdCA9IGRlc3QgPyBkZXN0IDogbmV3IEFycmF5KGRpbWVuc2lvbik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGltZW5zaW9uOyArK2kpIHtcbiAgICBkZXN0W2ldID1cbiAgICAgIG8gPT09IHVuZGVmaW5lZFxuICAgICAgICA/IE5hTlxuICAgICAgICA6IHQgPT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gZmxhdENvb3JkaW5hdGVzW28gKyBpXVxuICAgICAgICAgIDogbGVycChmbGF0Q29vcmRpbmF0ZXNbbyArIGldLCBmbGF0Q29vcmRpbmF0ZXNbbyArIHN0cmlkZSArIGldLCB0KTtcbiAgfVxuICByZXR1cm4gZGVzdDtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGZsYXRDb29yZGluYXRlcyBGbGF0IGNvb3JkaW5hdGVzLlxuICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldCBPZmZzZXQuXG4gKiBAcGFyYW0ge251bWJlcn0gZW5kIEVuZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzdHJpZGUgU3RyaWRlLlxuICogQHBhcmFtIHtudW1iZXJ9IG0gTS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gZXh0cmFwb2xhdGUgRXh0cmFwb2xhdGUuXG4gKiBAcmV0dXJuIHtpbXBvcnQoXCIuLi8uLi9jb29yZGluYXRlLmpzXCIpLkNvb3JkaW5hdGV8bnVsbH0gQ29vcmRpbmF0ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxpbmVTdHJpbmdDb29yZGluYXRlQXRNKFxuICBmbGF0Q29vcmRpbmF0ZXMsXG4gIG9mZnNldCxcbiAgZW5kLFxuICBzdHJpZGUsXG4gIG0sXG4gIGV4dHJhcG9sYXRlLFxuKSB7XG4gIGlmIChlbmQgPT0gb2Zmc2V0KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgbGV0IGNvb3JkaW5hdGU7XG4gIGlmIChtIDwgZmxhdENvb3JkaW5hdGVzW29mZnNldCArIHN0cmlkZSAtIDFdKSB7XG4gICAgaWYgKGV4dHJhcG9sYXRlKSB7XG4gICAgICBjb29yZGluYXRlID0gZmxhdENvb3JkaW5hdGVzLnNsaWNlKG9mZnNldCwgb2Zmc2V0ICsgc3RyaWRlKTtcbiAgICAgIGNvb3JkaW5hdGVbc3RyaWRlIC0gMV0gPSBtO1xuICAgICAgcmV0dXJuIGNvb3JkaW5hdGU7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmIChmbGF0Q29vcmRpbmF0ZXNbZW5kIC0gMV0gPCBtKSB7XG4gICAgaWYgKGV4dHJhcG9sYXRlKSB7XG4gICAgICBjb29yZGluYXRlID0gZmxhdENvb3JkaW5hdGVzLnNsaWNlKGVuZCAtIHN0cmlkZSwgZW5kKTtcbiAgICAgIGNvb3JkaW5hdGVbc3RyaWRlIC0gMV0gPSBtO1xuICAgICAgcmV0dXJuIGNvb3JkaW5hdGU7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIC8vIEZJWE1FIHVzZSBPKDEpIHNlYXJjaFxuICBpZiAobSA9PSBmbGF0Q29vcmRpbmF0ZXNbb2Zmc2V0ICsgc3RyaWRlIC0gMV0pIHtcbiAgICByZXR1cm4gZmxhdENvb3JkaW5hdGVzLnNsaWNlKG9mZnNldCwgb2Zmc2V0ICsgc3RyaWRlKTtcbiAgfVxuICBsZXQgbG8gPSBvZmZzZXQgLyBzdHJpZGU7XG4gIGxldCBoaSA9IGVuZCAvIHN0cmlkZTtcbiAgd2hpbGUgKGxvIDwgaGkpIHtcbiAgICBjb25zdCBtaWQgPSAobG8gKyBoaSkgPj4gMTtcbiAgICBpZiAobSA8IGZsYXRDb29yZGluYXRlc1sobWlkICsgMSkgKiBzdHJpZGUgLSAxXSkge1xuICAgICAgaGkgPSBtaWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvID0gbWlkICsgMTtcbiAgICB9XG4gIH1cbiAgY29uc3QgbTAgPSBmbGF0Q29vcmRpbmF0ZXNbbG8gKiBzdHJpZGUgLSAxXTtcbiAgaWYgKG0gPT0gbTApIHtcbiAgICByZXR1cm4gZmxhdENvb3JkaW5hdGVzLnNsaWNlKChsbyAtIDEpICogc3RyaWRlLCAobG8gLSAxKSAqIHN0cmlkZSArIHN0cmlkZSk7XG4gIH1cbiAgY29uc3QgbTEgPSBmbGF0Q29vcmRpbmF0ZXNbKGxvICsgMSkgKiBzdHJpZGUgLSAxXTtcbiAgY29uc3QgdCA9IChtIC0gbTApIC8gKG0xIC0gbTApO1xuICBjb29yZGluYXRlID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyaWRlIC0gMTsgKytpKSB7XG4gICAgY29vcmRpbmF0ZS5wdXNoKFxuICAgICAgbGVycChcbiAgICAgICAgZmxhdENvb3JkaW5hdGVzWyhsbyAtIDEpICogc3RyaWRlICsgaV0sXG4gICAgICAgIGZsYXRDb29yZGluYXRlc1tsbyAqIHN0cmlkZSArIGldLFxuICAgICAgICB0LFxuICAgICAgKSxcbiAgICApO1xuICB9XG4gIGNvb3JkaW5hdGUucHVzaChtKTtcbiAgcmV0dXJuIGNvb3JkaW5hdGU7XG59XG5cbi8qKlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBmbGF0Q29vcmRpbmF0ZXMgRmxhdCBjb29yZGluYXRlcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQgT2Zmc2V0LlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBlbmRzIEVuZHMuXG4gKiBAcGFyYW0ge251bWJlcn0gc3RyaWRlIFN0cmlkZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtIE0uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGV4dHJhcG9sYXRlIEV4dHJhcG9sYXRlLlxuICogQHBhcmFtIHtib29sZWFufSBpbnRlcnBvbGF0ZSBJbnRlcnBvbGF0ZS5cbiAqIEByZXR1cm4ge2ltcG9ydChcIi4uLy4uL2Nvb3JkaW5hdGUuanNcIikuQ29vcmRpbmF0ZXxudWxsfSBDb29yZGluYXRlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbGluZVN0cmluZ3NDb29yZGluYXRlQXRNKFxuICBmbGF0Q29vcmRpbmF0ZXMsXG4gIG9mZnNldCxcbiAgZW5kcyxcbiAgc3RyaWRlLFxuICBtLFxuICBleHRyYXBvbGF0ZSxcbiAgaW50ZXJwb2xhdGUsXG4pIHtcbiAgaWYgKGludGVycG9sYXRlKSB7XG4gICAgcmV0dXJuIGxpbmVTdHJpbmdDb29yZGluYXRlQXRNKFxuICAgICAgZmxhdENvb3JkaW5hdGVzLFxuICAgICAgb2Zmc2V0LFxuICAgICAgZW5kc1tlbmRzLmxlbmd0aCAtIDFdLFxuICAgICAgc3RyaWRlLFxuICAgICAgbSxcbiAgICAgIGV4dHJhcG9sYXRlLFxuICAgICk7XG4gIH1cbiAgbGV0IGNvb3JkaW5hdGU7XG4gIGlmIChtIDwgZmxhdENvb3JkaW5hdGVzW3N0cmlkZSAtIDFdKSB7XG4gICAgaWYgKGV4dHJhcG9sYXRlKSB7XG4gICAgICBjb29yZGluYXRlID0gZmxhdENvb3JkaW5hdGVzLnNsaWNlKDAsIHN0cmlkZSk7XG4gICAgICBjb29yZGluYXRlW3N0cmlkZSAtIDFdID0gbTtcbiAgICAgIHJldHVybiBjb29yZGluYXRlO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBpZiAoZmxhdENvb3JkaW5hdGVzW2ZsYXRDb29yZGluYXRlcy5sZW5ndGggLSAxXSA8IG0pIHtcbiAgICBpZiAoZXh0cmFwb2xhdGUpIHtcbiAgICAgIGNvb3JkaW5hdGUgPSBmbGF0Q29vcmRpbmF0ZXMuc2xpY2UoZmxhdENvb3JkaW5hdGVzLmxlbmd0aCAtIHN0cmlkZSk7XG4gICAgICBjb29yZGluYXRlW3N0cmlkZSAtIDFdID0gbTtcbiAgICAgIHJldHVybiBjb29yZGluYXRlO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBmb3IgKGxldCBpID0gMCwgaWkgPSBlbmRzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICBjb25zdCBlbmQgPSBlbmRzW2ldO1xuICAgIGlmIChvZmZzZXQgPT0gZW5kKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKG0gPCBmbGF0Q29vcmRpbmF0ZXNbb2Zmc2V0ICsgc3RyaWRlIC0gMV0pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAobSA8PSBmbGF0Q29vcmRpbmF0ZXNbZW5kIC0gMV0pIHtcbiAgICAgIHJldHVybiBsaW5lU3RyaW5nQ29vcmRpbmF0ZUF0TShcbiAgICAgICAgZmxhdENvb3JkaW5hdGVzLFxuICAgICAgICBvZmZzZXQsXG4gICAgICAgIGVuZCxcbiAgICAgICAgc3RyaWRlLFxuICAgICAgICBtLFxuICAgICAgICBmYWxzZSxcbiAgICAgICk7XG4gICAgfVxuICAgIG9mZnNldCA9IGVuZDtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cbiIsIi8qKlxuICogQG1vZHVsZSBvbC9nZW9tL2ZsYXQvaW50ZXJzZWN0c2V4dGVudFxuICovXG5pbXBvcnQge1xuICBjb250YWluc0V4dGVudCxcbiAgY3JlYXRlRW1wdHksXG4gIGV4dGVuZEZsYXRDb29yZGluYXRlcyxcbiAgaW50ZXJzZWN0cyxcbiAgaW50ZXJzZWN0c1NlZ21lbnQsXG59IGZyb20gJy4uLy4uL2V4dGVudC5qcyc7XG5pbXBvcnQge2ZvckVhY2ggYXMgZm9yRWFjaFNlZ21lbnR9IGZyb20gJy4vc2VnbWVudHMuanMnO1xuaW1wb3J0IHtsaW5lYXJSaW5nQ29udGFpbnNFeHRlbnQsIGxpbmVhclJpbmdDb250YWluc1hZfSBmcm9tICcuL2NvbnRhaW5zLmpzJztcblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGZsYXRDb29yZGluYXRlcyBGbGF0IGNvb3JkaW5hdGVzLlxuICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldCBPZmZzZXQuXG4gKiBAcGFyYW0ge251bWJlcn0gZW5kIEVuZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzdHJpZGUgU3RyaWRlLlxuICogQHBhcmFtIHtpbXBvcnQoXCIuLi8uLi9leHRlbnQuanNcIikuRXh0ZW50fSBleHRlbnQgRXh0ZW50LlxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgZ2VvbWV0cnkgYW5kIHRoZSBleHRlbnQgaW50ZXJzZWN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJzZWN0c0xpbmVTdHJpbmcoXG4gIGZsYXRDb29yZGluYXRlcyxcbiAgb2Zmc2V0LFxuICBlbmQsXG4gIHN0cmlkZSxcbiAgZXh0ZW50LFxuKSB7XG4gIGNvbnN0IGNvb3JkaW5hdGVzRXh0ZW50ID0gZXh0ZW5kRmxhdENvb3JkaW5hdGVzKFxuICAgIGNyZWF0ZUVtcHR5KCksXG4gICAgZmxhdENvb3JkaW5hdGVzLFxuICAgIG9mZnNldCxcbiAgICBlbmQsXG4gICAgc3RyaWRlLFxuICApO1xuICBpZiAoIWludGVyc2VjdHMoZXh0ZW50LCBjb29yZGluYXRlc0V4dGVudCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGNvbnRhaW5zRXh0ZW50KGV4dGVudCwgY29vcmRpbmF0ZXNFeHRlbnQpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKGNvb3JkaW5hdGVzRXh0ZW50WzBdID49IGV4dGVudFswXSAmJiBjb29yZGluYXRlc0V4dGVudFsyXSA8PSBleHRlbnRbMl0pIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAoY29vcmRpbmF0ZXNFeHRlbnRbMV0gPj0gZXh0ZW50WzFdICYmIGNvb3JkaW5hdGVzRXh0ZW50WzNdIDw9IGV4dGVudFszXSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmb3JFYWNoU2VnbWVudChcbiAgICBmbGF0Q29vcmRpbmF0ZXMsXG4gICAgb2Zmc2V0LFxuICAgIGVuZCxcbiAgICBzdHJpZGUsXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtpbXBvcnQoXCIuLi8uLi9jb29yZGluYXRlLmpzXCIpLkNvb3JkaW5hdGV9IHBvaW50MSBTdGFydCBwb2ludC5cbiAgICAgKiBAcGFyYW0ge2ltcG9ydChcIi4uLy4uL2Nvb3JkaW5hdGUuanNcIikuQ29vcmRpbmF0ZX0gcG9pbnQyIEVuZCBwb2ludC5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBgdHJ1ZWAgaWYgdGhlIHNlZ21lbnQgYW5kIHRoZSBleHRlbnQgaW50ZXJzZWN0LFxuICAgICAqICAgICBgZmFsc2VgIG90aGVyd2lzZS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAocG9pbnQxLCBwb2ludDIpIHtcbiAgICAgIHJldHVybiBpbnRlcnNlY3RzU2VnbWVudChleHRlbnQsIHBvaW50MSwgcG9pbnQyKTtcbiAgICB9LFxuICApO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gZmxhdENvb3JkaW5hdGVzIEZsYXQgY29vcmRpbmF0ZXMuXG4gKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0IE9mZnNldC5cbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gZW5kcyBFbmRzLlxuICogQHBhcmFtIHtudW1iZXJ9IHN0cmlkZSBTdHJpZGUuXG4gKiBAcGFyYW0ge2ltcG9ydChcIi4uLy4uL2V4dGVudC5qc1wiKS5FeHRlbnR9IGV4dGVudCBFeHRlbnQuXG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSBnZW9tZXRyeSBhbmQgdGhlIGV4dGVudCBpbnRlcnNlY3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnNlY3RzTGluZVN0cmluZ0FycmF5KFxuICBmbGF0Q29vcmRpbmF0ZXMsXG4gIG9mZnNldCxcbiAgZW5kcyxcbiAgc3RyaWRlLFxuICBleHRlbnQsXG4pIHtcbiAgZm9yIChsZXQgaSA9IDAsIGlpID0gZW5kcy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgaWYgKFxuICAgICAgaW50ZXJzZWN0c0xpbmVTdHJpbmcoZmxhdENvb3JkaW5hdGVzLCBvZmZzZXQsIGVuZHNbaV0sIHN0cmlkZSwgZXh0ZW50KVxuICAgICkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIG9mZnNldCA9IGVuZHNbaV07XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gZmxhdENvb3JkaW5hdGVzIEZsYXQgY29vcmRpbmF0ZXMuXG4gKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0IE9mZnNldC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBlbmQgRW5kLlxuICogQHBhcmFtIHtudW1iZXJ9IHN0cmlkZSBTdHJpZGUuXG4gKiBAcGFyYW0ge2ltcG9ydChcIi4uLy4uL2V4dGVudC5qc1wiKS5FeHRlbnR9IGV4dGVudCBFeHRlbnQuXG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSBnZW9tZXRyeSBhbmQgdGhlIGV4dGVudCBpbnRlcnNlY3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnNlY3RzTGluZWFyUmluZyhcbiAgZmxhdENvb3JkaW5hdGVzLFxuICBvZmZzZXQsXG4gIGVuZCxcbiAgc3RyaWRlLFxuICBleHRlbnQsXG4pIHtcbiAgaWYgKGludGVyc2VjdHNMaW5lU3RyaW5nKGZsYXRDb29yZGluYXRlcywgb2Zmc2V0LCBlbmQsIHN0cmlkZSwgZXh0ZW50KSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmIChcbiAgICBsaW5lYXJSaW5nQ29udGFpbnNYWShcbiAgICAgIGZsYXRDb29yZGluYXRlcyxcbiAgICAgIG9mZnNldCxcbiAgICAgIGVuZCxcbiAgICAgIHN0cmlkZSxcbiAgICAgIGV4dGVudFswXSxcbiAgICAgIGV4dGVudFsxXSxcbiAgICApXG4gICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmIChcbiAgICBsaW5lYXJSaW5nQ29udGFpbnNYWShcbiAgICAgIGZsYXRDb29yZGluYXRlcyxcbiAgICAgIG9mZnNldCxcbiAgICAgIGVuZCxcbiAgICAgIHN0cmlkZSxcbiAgICAgIGV4dGVudFswXSxcbiAgICAgIGV4dGVudFszXSxcbiAgICApXG4gICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmIChcbiAgICBsaW5lYXJSaW5nQ29udGFpbnNYWShcbiAgICAgIGZsYXRDb29yZGluYXRlcyxcbiAgICAgIG9mZnNldCxcbiAgICAgIGVuZCxcbiAgICAgIHN0cmlkZSxcbiAgICAgIGV4dGVudFsyXSxcbiAgICAgIGV4dGVudFsxXSxcbiAgICApXG4gICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmIChcbiAgICBsaW5lYXJSaW5nQ29udGFpbnNYWShcbiAgICAgIGZsYXRDb29yZGluYXRlcyxcbiAgICAgIG9mZnNldCxcbiAgICAgIGVuZCxcbiAgICAgIHN0cmlkZSxcbiAgICAgIGV4dGVudFsyXSxcbiAgICAgIGV4dGVudFszXSxcbiAgICApXG4gICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGZsYXRDb29yZGluYXRlcyBGbGF0IGNvb3JkaW5hdGVzLlxuICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldCBPZmZzZXQuXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGVuZHMgRW5kcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzdHJpZGUgU3RyaWRlLlxuICogQHBhcmFtIHtpbXBvcnQoXCIuLi8uLi9leHRlbnQuanNcIikuRXh0ZW50fSBleHRlbnQgRXh0ZW50LlxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgZ2VvbWV0cnkgYW5kIHRoZSBleHRlbnQgaW50ZXJzZWN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJzZWN0c0xpbmVhclJpbmdBcnJheShcbiAgZmxhdENvb3JkaW5hdGVzLFxuICBvZmZzZXQsXG4gIGVuZHMsXG4gIHN0cmlkZSxcbiAgZXh0ZW50LFxuKSB7XG4gIGlmICghaW50ZXJzZWN0c0xpbmVhclJpbmcoZmxhdENvb3JkaW5hdGVzLCBvZmZzZXQsIGVuZHNbMF0sIHN0cmlkZSwgZXh0ZW50KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoZW5kcy5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBmb3IgKGxldCBpID0gMSwgaWkgPSBlbmRzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICBpZiAoXG4gICAgICBsaW5lYXJSaW5nQ29udGFpbnNFeHRlbnQoXG4gICAgICAgIGZsYXRDb29yZGluYXRlcyxcbiAgICAgICAgZW5kc1tpIC0gMV0sXG4gICAgICAgIGVuZHNbaV0sXG4gICAgICAgIHN0cmlkZSxcbiAgICAgICAgZXh0ZW50LFxuICAgICAgKVxuICAgICkge1xuICAgICAgaWYgKFxuICAgICAgICAhaW50ZXJzZWN0c0xpbmVTdHJpbmcoXG4gICAgICAgICAgZmxhdENvb3JkaW5hdGVzLFxuICAgICAgICAgIGVuZHNbaSAtIDFdLFxuICAgICAgICAgIGVuZHNbaV0sXG4gICAgICAgICAgc3RyaWRlLFxuICAgICAgICAgIGV4dGVudCxcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBmbGF0Q29vcmRpbmF0ZXMgRmxhdCBjb29yZGluYXRlcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQgT2Zmc2V0LlxuICogQHBhcmFtIHtBcnJheTxBcnJheTxudW1iZXI+Pn0gZW5kc3MgRW5kc3MuXG4gKiBAcGFyYW0ge251bWJlcn0gc3RyaWRlIFN0cmlkZS5cbiAqIEBwYXJhbSB7aW1wb3J0KFwiLi4vLi4vZXh0ZW50LmpzXCIpLkV4dGVudH0gZXh0ZW50IEV4dGVudC5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIGdlb21ldHJ5IGFuZCB0aGUgZXh0ZW50IGludGVyc2VjdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludGVyc2VjdHNMaW5lYXJSaW5nTXVsdGlBcnJheShcbiAgZmxhdENvb3JkaW5hdGVzLFxuICBvZmZzZXQsXG4gIGVuZHNzLFxuICBzdHJpZGUsXG4gIGV4dGVudCxcbikge1xuICBmb3IgKGxldCBpID0gMCwgaWkgPSBlbmRzcy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgY29uc3QgZW5kcyA9IGVuZHNzW2ldO1xuICAgIGlmIChcbiAgICAgIGludGVyc2VjdHNMaW5lYXJSaW5nQXJyYXkoZmxhdENvb3JkaW5hdGVzLCBvZmZzZXQsIGVuZHMsIHN0cmlkZSwgZXh0ZW50KVxuICAgICkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIG9mZnNldCA9IGVuZHNbZW5kcy5sZW5ndGggLSAxXTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG4iLCIvKipcbiAqIEBtb2R1bGUgb2wvZ2VvbS9mbGF0L2xlbmd0aFxuICovXG5cbi8qKlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBmbGF0Q29vcmRpbmF0ZXMgRmxhdCBjb29yZGluYXRlcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQgT2Zmc2V0LlxuICogQHBhcmFtIHtudW1iZXJ9IGVuZCBFbmQuXG4gKiBAcGFyYW0ge251bWJlcn0gc3RyaWRlIFN0cmlkZS5cbiAqIEByZXR1cm4ge251bWJlcn0gTGVuZ3RoLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbGluZVN0cmluZ0xlbmd0aChmbGF0Q29vcmRpbmF0ZXMsIG9mZnNldCwgZW5kLCBzdHJpZGUpIHtcbiAgbGV0IHgxID0gZmxhdENvb3JkaW5hdGVzW29mZnNldF07XG4gIGxldCB5MSA9IGZsYXRDb29yZGluYXRlc1tvZmZzZXQgKyAxXTtcbiAgbGV0IGxlbmd0aCA9IDA7XG4gIGZvciAobGV0IGkgPSBvZmZzZXQgKyBzdHJpZGU7IGkgPCBlbmQ7IGkgKz0gc3RyaWRlKSB7XG4gICAgY29uc3QgeDIgPSBmbGF0Q29vcmRpbmF0ZXNbaV07XG4gICAgY29uc3QgeTIgPSBmbGF0Q29vcmRpbmF0ZXNbaSArIDFdO1xuICAgIGxlbmd0aCArPSBNYXRoLnNxcnQoKHgyIC0geDEpICogKHgyIC0geDEpICsgKHkyIC0geTEpICogKHkyIC0geTEpKTtcbiAgICB4MSA9IHgyO1xuICAgIHkxID0geTI7XG4gIH1cbiAgcmV0dXJuIGxlbmd0aDtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGZsYXRDb29yZGluYXRlcyBGbGF0IGNvb3JkaW5hdGVzLlxuICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldCBPZmZzZXQuXG4gKiBAcGFyYW0ge251bWJlcn0gZW5kIEVuZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzdHJpZGUgU3RyaWRlLlxuICogQHJldHVybiB7bnVtYmVyfSBQZXJpbWV0ZXIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsaW5lYXJSaW5nTGVuZ3RoKGZsYXRDb29yZGluYXRlcywgb2Zmc2V0LCBlbmQsIHN0cmlkZSkge1xuICBsZXQgcGVyaW1ldGVyID0gbGluZVN0cmluZ0xlbmd0aChmbGF0Q29vcmRpbmF0ZXMsIG9mZnNldCwgZW5kLCBzdHJpZGUpO1xuICBjb25zdCBkeCA9IGZsYXRDb29yZGluYXRlc1tlbmQgLSBzdHJpZGVdIC0gZmxhdENvb3JkaW5hdGVzW29mZnNldF07XG4gIGNvbnN0IGR5ID0gZmxhdENvb3JkaW5hdGVzW2VuZCAtIHN0cmlkZSArIDFdIC0gZmxhdENvb3JkaW5hdGVzW29mZnNldCArIDFdO1xuICBwZXJpbWV0ZXIgKz0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgcmV0dXJuIHBlcmltZXRlcjtcbn1cbiIsIi8qKlxuICogQG1vZHVsZSBvbC9nZW9tL2ZsYXQvc2VnbWVudHNcbiAqL1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY2FsbHMgYGNhbGxiYWNrYCBmb3IgZWFjaCBzZWdtZW50IG9mIHRoZSBmbGF0IGNvb3JkaW5hdGVzXG4gKiBhcnJheS4gSWYgdGhlIGNhbGxiYWNrIHJldHVybnMgYSB0cnV0aHkgdmFsdWUgdGhlIGZ1bmN0aW9uIHJldHVybnMgdGhhdFxuICogdmFsdWUgaW1tZWRpYXRlbHkuIE90aGVyd2lzZSB0aGUgZnVuY3Rpb24gcmV0dXJucyBgZmFsc2VgLlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBmbGF0Q29vcmRpbmF0ZXMgRmxhdCBjb29yZGluYXRlcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQgT2Zmc2V0LlxuICogQHBhcmFtIHtudW1iZXJ9IGVuZCBFbmQuXG4gKiBAcGFyYW0ge251bWJlcn0gc3RyaWRlIFN0cmlkZS5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oaW1wb3J0KFwiLi4vLi4vY29vcmRpbmF0ZS5qc1wiKS5Db29yZGluYXRlLCBpbXBvcnQoXCIuLi8uLi9jb29yZGluYXRlLmpzXCIpLkNvb3JkaW5hdGUpOiBUfSBjYWxsYmFjayBGdW5jdGlvblxuICogICAgIGNhbGxlZCBmb3IgZWFjaCBzZWdtZW50LlxuICogQHJldHVybiB7VHxib29sZWFufSBWYWx1ZS5cbiAqIEB0ZW1wbGF0ZSBUXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JFYWNoKGZsYXRDb29yZGluYXRlcywgb2Zmc2V0LCBlbmQsIHN0cmlkZSwgY2FsbGJhY2spIHtcbiAgbGV0IHJldDtcbiAgb2Zmc2V0ICs9IHN0cmlkZTtcbiAgZm9yICg7IG9mZnNldCA8IGVuZDsgb2Zmc2V0ICs9IHN0cmlkZSkge1xuICAgIHJldCA9IGNhbGxiYWNrKFxuICAgICAgZmxhdENvb3JkaW5hdGVzLnNsaWNlKG9mZnNldCAtIHN0cmlkZSwgb2Zmc2V0KSxcbiAgICAgIGZsYXRDb29yZGluYXRlcy5zbGljZShvZmZzZXQsIG9mZnNldCArIHN0cmlkZSksXG4gICAgKTtcbiAgICBpZiAocmV0KSB7XG4gICAgICByZXR1cm4gcmV0O1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG4iLCIvKipcbiAqIEBtb2R1bGUgb2wvZ2VvbS9mbGF0L3NpbXBsaWZ5XG4gKi9cbi8vIEJhc2VkIG9uIHNpbXBsaWZ5LWpzIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3VybmVyL3NpbXBsaWZ5LWpzXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTIsIFZsYWRpbWlyIEFnYWZvbmtpblxuLy8gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vXG4vLyBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbi8vIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuLy9cbi8vICAgIDEuIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcbi8vICAgICAgIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4vL1xuLy8gICAgMi4gUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHRcbi8vICAgICAgIG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGVcbi8vICAgICAgIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXG4vL1xuLy8gVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCJcbi8vIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEVcbi8vIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFXG4vLyBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFXG4vLyBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SXG4vLyBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRlxuLy8gU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTXG4vLyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTlxuLy8gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSlcbi8vIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXG4vLyBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cblxuaW1wb3J0IHtzcXVhcmVkRGlzdGFuY2UsIHNxdWFyZWRTZWdtZW50RGlzdGFuY2V9IGZyb20gJy4uLy4uL21hdGguanMnO1xuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gZmxhdENvb3JkaW5hdGVzIEZsYXQgY29vcmRpbmF0ZXMuXG4gKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0IE9mZnNldC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBlbmQgRW5kLlxuICogQHBhcmFtIHtudW1iZXJ9IHN0cmlkZSBTdHJpZGUuXG4gKiBAcGFyYW0ge251bWJlcn0gc3F1YXJlZFRvbGVyYW5jZSBTcXVhcmVkIHRvbGVyYW5jZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaGlnaFF1YWxpdHkgSGlnaGVzdCBxdWFsaXR5LlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBbc2ltcGxpZmllZEZsYXRDb29yZGluYXRlc10gU2ltcGxpZmllZCBmbGF0XG4gKiAgICAgY29vcmRpbmF0ZXMuXG4gKiBAcmV0dXJuIHtBcnJheTxudW1iZXI+fSBTaW1wbGlmaWVkIGxpbmUgc3RyaW5nLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2ltcGxpZnlMaW5lU3RyaW5nKFxuICBmbGF0Q29vcmRpbmF0ZXMsXG4gIG9mZnNldCxcbiAgZW5kLFxuICBzdHJpZGUsXG4gIHNxdWFyZWRUb2xlcmFuY2UsXG4gIGhpZ2hRdWFsaXR5LFxuICBzaW1wbGlmaWVkRmxhdENvb3JkaW5hdGVzLFxuKSB7XG4gIHNpbXBsaWZpZWRGbGF0Q29vcmRpbmF0ZXMgPVxuICAgIHNpbXBsaWZpZWRGbGF0Q29vcmRpbmF0ZXMgIT09IHVuZGVmaW5lZCA/IHNpbXBsaWZpZWRGbGF0Q29vcmRpbmF0ZXMgOiBbXTtcbiAgaWYgKCFoaWdoUXVhbGl0eSkge1xuICAgIGVuZCA9IHJhZGlhbERpc3RhbmNlKFxuICAgICAgZmxhdENvb3JkaW5hdGVzLFxuICAgICAgb2Zmc2V0LFxuICAgICAgZW5kLFxuICAgICAgc3RyaWRlLFxuICAgICAgc3F1YXJlZFRvbGVyYW5jZSxcbiAgICAgIHNpbXBsaWZpZWRGbGF0Q29vcmRpbmF0ZXMsXG4gICAgICAwLFxuICAgICk7XG4gICAgZmxhdENvb3JkaW5hdGVzID0gc2ltcGxpZmllZEZsYXRDb29yZGluYXRlcztcbiAgICBvZmZzZXQgPSAwO1xuICAgIHN0cmlkZSA9IDI7XG4gIH1cbiAgc2ltcGxpZmllZEZsYXRDb29yZGluYXRlcy5sZW5ndGggPSBkb3VnbGFzUGV1Y2tlcihcbiAgICBmbGF0Q29vcmRpbmF0ZXMsXG4gICAgb2Zmc2V0LFxuICAgIGVuZCxcbiAgICBzdHJpZGUsXG4gICAgc3F1YXJlZFRvbGVyYW5jZSxcbiAgICBzaW1wbGlmaWVkRmxhdENvb3JkaW5hdGVzLFxuICAgIDAsXG4gICk7XG4gIHJldHVybiBzaW1wbGlmaWVkRmxhdENvb3JkaW5hdGVzO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gZmxhdENvb3JkaW5hdGVzIEZsYXQgY29vcmRpbmF0ZXMuXG4gKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0IE9mZnNldC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBlbmQgRW5kLlxuICogQHBhcmFtIHtudW1iZXJ9IHN0cmlkZSBTdHJpZGUuXG4gKiBAcGFyYW0ge251bWJlcn0gc3F1YXJlZFRvbGVyYW5jZSBTcXVhcmVkIHRvbGVyYW5jZS5cbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gc2ltcGxpZmllZEZsYXRDb29yZGluYXRlcyBTaW1wbGlmaWVkIGZsYXRcbiAqICAgICBjb29yZGluYXRlcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzaW1wbGlmaWVkT2Zmc2V0IFNpbXBsaWZpZWQgb2Zmc2V0LlxuICogQHJldHVybiB7bnVtYmVyfSBTaW1wbGlmaWVkIG9mZnNldC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRvdWdsYXNQZXVja2VyKFxuICBmbGF0Q29vcmRpbmF0ZXMsXG4gIG9mZnNldCxcbiAgZW5kLFxuICBzdHJpZGUsXG4gIHNxdWFyZWRUb2xlcmFuY2UsXG4gIHNpbXBsaWZpZWRGbGF0Q29vcmRpbmF0ZXMsXG4gIHNpbXBsaWZpZWRPZmZzZXQsXG4pIHtcbiAgY29uc3QgbiA9IChlbmQgLSBvZmZzZXQpIC8gc3RyaWRlO1xuICBpZiAobiA8IDMpIHtcbiAgICBmb3IgKDsgb2Zmc2V0IDwgZW5kOyBvZmZzZXQgKz0gc3RyaWRlKSB7XG4gICAgICBzaW1wbGlmaWVkRmxhdENvb3JkaW5hdGVzW3NpbXBsaWZpZWRPZmZzZXQrK10gPSBmbGF0Q29vcmRpbmF0ZXNbb2Zmc2V0XTtcbiAgICAgIHNpbXBsaWZpZWRGbGF0Q29vcmRpbmF0ZXNbc2ltcGxpZmllZE9mZnNldCsrXSA9XG4gICAgICAgIGZsYXRDb29yZGluYXRlc1tvZmZzZXQgKyAxXTtcbiAgICB9XG4gICAgcmV0dXJuIHNpbXBsaWZpZWRPZmZzZXQ7XG4gIH1cbiAgLyoqIEB0eXBlIHtBcnJheTxudW1iZXI+fSAqL1xuICBjb25zdCBtYXJrZXJzID0gbmV3IEFycmF5KG4pO1xuICBtYXJrZXJzWzBdID0gMTtcbiAgbWFya2Vyc1tuIC0gMV0gPSAxO1xuICAvKiogQHR5cGUge0FycmF5PG51bWJlcj59ICovXG4gIGNvbnN0IHN0YWNrID0gW29mZnNldCwgZW5kIC0gc3RyaWRlXTtcbiAgbGV0IGluZGV4ID0gMDtcbiAgd2hpbGUgKHN0YWNrLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCBsYXN0ID0gc3RhY2sucG9wKCk7XG4gICAgY29uc3QgZmlyc3QgPSBzdGFjay5wb3AoKTtcbiAgICBsZXQgbWF4U3F1YXJlZERpc3RhbmNlID0gMDtcbiAgICBjb25zdCB4MSA9IGZsYXRDb29yZGluYXRlc1tmaXJzdF07XG4gICAgY29uc3QgeTEgPSBmbGF0Q29vcmRpbmF0ZXNbZmlyc3QgKyAxXTtcbiAgICBjb25zdCB4MiA9IGZsYXRDb29yZGluYXRlc1tsYXN0XTtcbiAgICBjb25zdCB5MiA9IGZsYXRDb29yZGluYXRlc1tsYXN0ICsgMV07XG4gICAgZm9yIChsZXQgaSA9IGZpcnN0ICsgc3RyaWRlOyBpIDwgbGFzdDsgaSArPSBzdHJpZGUpIHtcbiAgICAgIGNvbnN0IHggPSBmbGF0Q29vcmRpbmF0ZXNbaV07XG4gICAgICBjb25zdCB5ID0gZmxhdENvb3JkaW5hdGVzW2kgKyAxXTtcbiAgICAgIGNvbnN0IHNxdWFyZWREaXN0YW5jZSA9IHNxdWFyZWRTZWdtZW50RGlzdGFuY2UoeCwgeSwgeDEsIHkxLCB4MiwgeTIpO1xuICAgICAgaWYgKHNxdWFyZWREaXN0YW5jZSA+IG1heFNxdWFyZWREaXN0YW5jZSkge1xuICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgIG1heFNxdWFyZWREaXN0YW5jZSA9IHNxdWFyZWREaXN0YW5jZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG1heFNxdWFyZWREaXN0YW5jZSA+IHNxdWFyZWRUb2xlcmFuY2UpIHtcbiAgICAgIG1hcmtlcnNbKGluZGV4IC0gb2Zmc2V0KSAvIHN0cmlkZV0gPSAxO1xuICAgICAgaWYgKGZpcnN0ICsgc3RyaWRlIDwgaW5kZXgpIHtcbiAgICAgICAgc3RhY2sucHVzaChmaXJzdCwgaW5kZXgpO1xuICAgICAgfVxuICAgICAgaWYgKGluZGV4ICsgc3RyaWRlIDwgbGFzdCkge1xuICAgICAgICBzdGFjay5wdXNoKGluZGV4LCBsYXN0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICBpZiAobWFya2Vyc1tpXSkge1xuICAgICAgc2ltcGxpZmllZEZsYXRDb29yZGluYXRlc1tzaW1wbGlmaWVkT2Zmc2V0KytdID1cbiAgICAgICAgZmxhdENvb3JkaW5hdGVzW29mZnNldCArIGkgKiBzdHJpZGVdO1xuICAgICAgc2ltcGxpZmllZEZsYXRDb29yZGluYXRlc1tzaW1wbGlmaWVkT2Zmc2V0KytdID1cbiAgICAgICAgZmxhdENvb3JkaW5hdGVzW29mZnNldCArIGkgKiBzdHJpZGUgKyAxXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHNpbXBsaWZpZWRPZmZzZXQ7XG59XG5cbi8qKlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBmbGF0Q29vcmRpbmF0ZXMgRmxhdCBjb29yZGluYXRlcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQgT2Zmc2V0LlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBlbmRzIEVuZHMuXG4gKiBAcGFyYW0ge251bWJlcn0gc3RyaWRlIFN0cmlkZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzcXVhcmVkVG9sZXJhbmNlIFNxdWFyZWQgdG9sZXJhbmNlLlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBzaW1wbGlmaWVkRmxhdENvb3JkaW5hdGVzIFNpbXBsaWZpZWQgZmxhdFxuICogICAgIGNvb3JkaW5hdGVzLlxuICogQHBhcmFtIHtudW1iZXJ9IHNpbXBsaWZpZWRPZmZzZXQgU2ltcGxpZmllZCBvZmZzZXQuXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHNpbXBsaWZpZWRFbmRzIFNpbXBsaWZpZWQgZW5kcy5cbiAqIEByZXR1cm4ge251bWJlcn0gU2ltcGxpZmllZCBvZmZzZXQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkb3VnbGFzUGV1Y2tlckFycmF5KFxuICBmbGF0Q29vcmRpbmF0ZXMsXG4gIG9mZnNldCxcbiAgZW5kcyxcbiAgc3RyaWRlLFxuICBzcXVhcmVkVG9sZXJhbmNlLFxuICBzaW1wbGlmaWVkRmxhdENvb3JkaW5hdGVzLFxuICBzaW1wbGlmaWVkT2Zmc2V0LFxuICBzaW1wbGlmaWVkRW5kcyxcbikge1xuICBmb3IgKGxldCBpID0gMCwgaWkgPSBlbmRzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICBjb25zdCBlbmQgPSBlbmRzW2ldO1xuICAgIHNpbXBsaWZpZWRPZmZzZXQgPSBkb3VnbGFzUGV1Y2tlcihcbiAgICAgIGZsYXRDb29yZGluYXRlcyxcbiAgICAgIG9mZnNldCxcbiAgICAgIGVuZCxcbiAgICAgIHN0cmlkZSxcbiAgICAgIHNxdWFyZWRUb2xlcmFuY2UsXG4gICAgICBzaW1wbGlmaWVkRmxhdENvb3JkaW5hdGVzLFxuICAgICAgc2ltcGxpZmllZE9mZnNldCxcbiAgICApO1xuICAgIHNpbXBsaWZpZWRFbmRzLnB1c2goc2ltcGxpZmllZE9mZnNldCk7XG4gICAgb2Zmc2V0ID0gZW5kO1xuICB9XG4gIHJldHVybiBzaW1wbGlmaWVkT2Zmc2V0O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gZmxhdENvb3JkaW5hdGVzIEZsYXQgY29vcmRpbmF0ZXMuXG4gKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0IE9mZnNldC5cbiAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8bnVtYmVyPj59IGVuZHNzIEVuZHNzLlxuICogQHBhcmFtIHtudW1iZXJ9IHN0cmlkZSBTdHJpZGUuXG4gKiBAcGFyYW0ge251bWJlcn0gc3F1YXJlZFRvbGVyYW5jZSBTcXVhcmVkIHRvbGVyYW5jZS5cbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gc2ltcGxpZmllZEZsYXRDb29yZGluYXRlcyBTaW1wbGlmaWVkIGZsYXRcbiAqICAgICBjb29yZGluYXRlcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzaW1wbGlmaWVkT2Zmc2V0IFNpbXBsaWZpZWQgb2Zmc2V0LlxuICogQHBhcmFtIHtBcnJheTxBcnJheTxudW1iZXI+Pn0gc2ltcGxpZmllZEVuZHNzIFNpbXBsaWZpZWQgZW5kc3MuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFNpbXBsaWZpZWQgb2Zmc2V0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZG91Z2xhc1BldWNrZXJNdWx0aUFycmF5KFxuICBmbGF0Q29vcmRpbmF0ZXMsXG4gIG9mZnNldCxcbiAgZW5kc3MsXG4gIHN0cmlkZSxcbiAgc3F1YXJlZFRvbGVyYW5jZSxcbiAgc2ltcGxpZmllZEZsYXRDb29yZGluYXRlcyxcbiAgc2ltcGxpZmllZE9mZnNldCxcbiAgc2ltcGxpZmllZEVuZHNzLFxuKSB7XG4gIGZvciAobGV0IGkgPSAwLCBpaSA9IGVuZHNzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICBjb25zdCBlbmRzID0gZW5kc3NbaV07XG4gICAgLyoqIEB0eXBlIHtBcnJheTxudW1iZXI+fSAqL1xuICAgIGNvbnN0IHNpbXBsaWZpZWRFbmRzID0gW107XG4gICAgc2ltcGxpZmllZE9mZnNldCA9IGRvdWdsYXNQZXVja2VyQXJyYXkoXG4gICAgICBmbGF0Q29vcmRpbmF0ZXMsXG4gICAgICBvZmZzZXQsXG4gICAgICBlbmRzLFxuICAgICAgc3RyaWRlLFxuICAgICAgc3F1YXJlZFRvbGVyYW5jZSxcbiAgICAgIHNpbXBsaWZpZWRGbGF0Q29vcmRpbmF0ZXMsXG4gICAgICBzaW1wbGlmaWVkT2Zmc2V0LFxuICAgICAgc2ltcGxpZmllZEVuZHMsXG4gICAgKTtcbiAgICBzaW1wbGlmaWVkRW5kc3MucHVzaChzaW1wbGlmaWVkRW5kcyk7XG4gICAgb2Zmc2V0ID0gZW5kc1tlbmRzLmxlbmd0aCAtIDFdO1xuICB9XG4gIHJldHVybiBzaW1wbGlmaWVkT2Zmc2V0O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gZmxhdENvb3JkaW5hdGVzIEZsYXQgY29vcmRpbmF0ZXMuXG4gKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0IE9mZnNldC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBlbmQgRW5kLlxuICogQHBhcmFtIHtudW1iZXJ9IHN0cmlkZSBTdHJpZGUuXG4gKiBAcGFyYW0ge251bWJlcn0gc3F1YXJlZFRvbGVyYW5jZSBTcXVhcmVkIHRvbGVyYW5jZS5cbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gc2ltcGxpZmllZEZsYXRDb29yZGluYXRlcyBTaW1wbGlmaWVkIGZsYXRcbiAqICAgICBjb29yZGluYXRlcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzaW1wbGlmaWVkT2Zmc2V0IFNpbXBsaWZpZWQgb2Zmc2V0LlxuICogQHJldHVybiB7bnVtYmVyfSBTaW1wbGlmaWVkIG9mZnNldC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJhZGlhbERpc3RhbmNlKFxuICBmbGF0Q29vcmRpbmF0ZXMsXG4gIG9mZnNldCxcbiAgZW5kLFxuICBzdHJpZGUsXG4gIHNxdWFyZWRUb2xlcmFuY2UsXG4gIHNpbXBsaWZpZWRGbGF0Q29vcmRpbmF0ZXMsXG4gIHNpbXBsaWZpZWRPZmZzZXQsXG4pIHtcbiAgaWYgKGVuZCA8PSBvZmZzZXQgKyBzdHJpZGUpIHtcbiAgICAvLyB6ZXJvIG9yIG9uZSBwb2ludCwgbm8gc2ltcGxpZmljYXRpb24gcG9zc2libGUsIHNvIGNvcHkgYW5kIHJldHVyblxuICAgIGZvciAoOyBvZmZzZXQgPCBlbmQ7IG9mZnNldCArPSBzdHJpZGUpIHtcbiAgICAgIHNpbXBsaWZpZWRGbGF0Q29vcmRpbmF0ZXNbc2ltcGxpZmllZE9mZnNldCsrXSA9IGZsYXRDb29yZGluYXRlc1tvZmZzZXRdO1xuICAgICAgc2ltcGxpZmllZEZsYXRDb29yZGluYXRlc1tzaW1wbGlmaWVkT2Zmc2V0KytdID1cbiAgICAgICAgZmxhdENvb3JkaW5hdGVzW29mZnNldCArIDFdO1xuICAgIH1cbiAgICByZXR1cm4gc2ltcGxpZmllZE9mZnNldDtcbiAgfVxuICBsZXQgeDEgPSBmbGF0Q29vcmRpbmF0ZXNbb2Zmc2V0XTtcbiAgbGV0IHkxID0gZmxhdENvb3JkaW5hdGVzW29mZnNldCArIDFdO1xuICAvLyBjb3B5IGZpcnN0IHBvaW50XG4gIHNpbXBsaWZpZWRGbGF0Q29vcmRpbmF0ZXNbc2ltcGxpZmllZE9mZnNldCsrXSA9IHgxO1xuICBzaW1wbGlmaWVkRmxhdENvb3JkaW5hdGVzW3NpbXBsaWZpZWRPZmZzZXQrK10gPSB5MTtcbiAgbGV0IHgyID0geDE7XG4gIGxldCB5MiA9IHkxO1xuICBmb3IgKG9mZnNldCArPSBzdHJpZGU7IG9mZnNldCA8IGVuZDsgb2Zmc2V0ICs9IHN0cmlkZSkge1xuICAgIHgyID0gZmxhdENvb3JkaW5hdGVzW29mZnNldF07XG4gICAgeTIgPSBmbGF0Q29vcmRpbmF0ZXNbb2Zmc2V0ICsgMV07XG4gICAgaWYgKHNxdWFyZWREaXN0YW5jZSh4MSwgeTEsIHgyLCB5MikgPiBzcXVhcmVkVG9sZXJhbmNlKSB7XG4gICAgICAvLyBjb3B5IHBvaW50IGF0IG9mZnNldFxuICAgICAgc2ltcGxpZmllZEZsYXRDb29yZGluYXRlc1tzaW1wbGlmaWVkT2Zmc2V0KytdID0geDI7XG4gICAgICBzaW1wbGlmaWVkRmxhdENvb3JkaW5hdGVzW3NpbXBsaWZpZWRPZmZzZXQrK10gPSB5MjtcbiAgICAgIHgxID0geDI7XG4gICAgICB5MSA9IHkyO1xuICAgIH1cbiAgfVxuICBpZiAoeDIgIT0geDEgfHwgeTIgIT0geTEpIHtcbiAgICAvLyBjb3B5IGxhc3QgcG9pbnRcbiAgICBzaW1wbGlmaWVkRmxhdENvb3JkaW5hdGVzW3NpbXBsaWZpZWRPZmZzZXQrK10gPSB4MjtcbiAgICBzaW1wbGlmaWVkRmxhdENvb3JkaW5hdGVzW3NpbXBsaWZpZWRPZmZzZXQrK10gPSB5MjtcbiAgfVxuICByZXR1cm4gc2ltcGxpZmllZE9mZnNldDtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgVmFsdWUuXG4gKiBAcGFyYW0ge251bWJlcn0gdG9sZXJhbmNlIFRvbGVyYW5jZS5cbiAqIEByZXR1cm4ge251bWJlcn0gUm91bmRlZCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNuYXAodmFsdWUsIHRvbGVyYW5jZSkge1xuICByZXR1cm4gdG9sZXJhbmNlICogTWF0aC5yb3VuZCh2YWx1ZSAvIHRvbGVyYW5jZSk7XG59XG5cbi8qKlxuICogU2ltcGxpZmllcyBhIGxpbmUgc3RyaW5nIHVzaW5nIGFuIGFsZ29yaXRobSBkZXNpZ25lZCBieSBUaW0gU2NoYXViLlxuICogQ29vcmRpbmF0ZXMgYXJlIHNuYXBwZWQgdG8gdGhlIG5lYXJlc3QgdmFsdWUgaW4gYSB2aXJ0dWFsIGdyaWQgYW5kXG4gKiBjb25zZWN1dGl2ZSBkdXBsaWNhdGUgY29vcmRpbmF0ZXMgYXJlIGRpc2NhcmRlZC4gIFRoaXMgZWZmZWN0aXZlbHkgcHJlc2VydmVzXG4gKiB0b3BvbG9neSBhcyB0aGUgc2ltcGxpZmljYXRpb24gb2YgYW55IHN1YnNlY3Rpb24gb2YgYSBsaW5lIHN0cmluZyBpc1xuICogaW5kZXBlbmRlbnQgb2YgdGhlIHJlc3Qgb2YgdGhlIGxpbmUgc3RyaW5nLiAgVGhpcyBtZWFucyB0aGF0LCBmb3IgZXhhbXBsZXMsXG4gKiB0aGUgY29tbW9uIGVkZ2UgYmV0d2VlbiB0d28gcG9seWdvbnMgd2lsbCBiZSBzaW1wbGlmaWVkIHRvIHRoZSBzYW1lIGxpbmVcbiAqIHN0cmluZyBpbmRlcGVuZGVudGx5IGluIGJvdGggcG9seWdvbnMuICBUaGlzIGltcGxlbWVudGF0aW9uIHVzZXMgYSBzaW5nbGVcbiAqIHBhc3Mgb3ZlciB0aGUgY29vcmRpbmF0ZXMgYW5kIGVsaW1pbmF0ZXMgaW50ZXJtZWRpYXRlIGNvbGxpbmVhciBwb2ludHMuXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGZsYXRDb29yZGluYXRlcyBGbGF0IGNvb3JkaW5hdGVzLlxuICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldCBPZmZzZXQuXG4gKiBAcGFyYW0ge251bWJlcn0gZW5kIEVuZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzdHJpZGUgU3RyaWRlLlxuICogQHBhcmFtIHtudW1iZXJ9IHRvbGVyYW5jZSBUb2xlcmFuY2UuXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHNpbXBsaWZpZWRGbGF0Q29vcmRpbmF0ZXMgU2ltcGxpZmllZCBmbGF0XG4gKiAgICAgY29vcmRpbmF0ZXMuXG4gKiBAcGFyYW0ge251bWJlcn0gc2ltcGxpZmllZE9mZnNldCBTaW1wbGlmaWVkIG9mZnNldC5cbiAqIEByZXR1cm4ge251bWJlcn0gU2ltcGxpZmllZCBvZmZzZXQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBxdWFudGl6ZShcbiAgZmxhdENvb3JkaW5hdGVzLFxuICBvZmZzZXQsXG4gIGVuZCxcbiAgc3RyaWRlLFxuICB0b2xlcmFuY2UsXG4gIHNpbXBsaWZpZWRGbGF0Q29vcmRpbmF0ZXMsXG4gIHNpbXBsaWZpZWRPZmZzZXQsXG4pIHtcbiAgLy8gZG8gbm90aGluZyBpZiB0aGUgbGluZSBpcyBlbXB0eVxuICBpZiAob2Zmc2V0ID09IGVuZCkge1xuICAgIHJldHVybiBzaW1wbGlmaWVkT2Zmc2V0O1xuICB9XG4gIC8vIHNuYXAgdGhlIGZpcnN0IGNvb3JkaW5hdGUgKFAxKVxuICBsZXQgeDEgPSBzbmFwKGZsYXRDb29yZGluYXRlc1tvZmZzZXRdLCB0b2xlcmFuY2UpO1xuICBsZXQgeTEgPSBzbmFwKGZsYXRDb29yZGluYXRlc1tvZmZzZXQgKyAxXSwgdG9sZXJhbmNlKTtcbiAgb2Zmc2V0ICs9IHN0cmlkZTtcbiAgLy8gYWRkIHRoZSBmaXJzdCBjb29yZGluYXRlIHRvIHRoZSBvdXRwdXRcbiAgc2ltcGxpZmllZEZsYXRDb29yZGluYXRlc1tzaW1wbGlmaWVkT2Zmc2V0KytdID0geDE7XG4gIHNpbXBsaWZpZWRGbGF0Q29vcmRpbmF0ZXNbc2ltcGxpZmllZE9mZnNldCsrXSA9IHkxO1xuICAvLyBmaW5kIHRoZSBuZXh0IGNvb3JkaW5hdGUgdGhhdCBkb2VzIG5vdCBzbmFwIHRvIHRoZSBzYW1lIHZhbHVlIGFzIHRoZSBmaXJzdFxuICAvLyBjb29yZGluYXRlIChQMilcbiAgbGV0IHgyLCB5MjtcbiAgZG8ge1xuICAgIHgyID0gc25hcChmbGF0Q29vcmRpbmF0ZXNbb2Zmc2V0XSwgdG9sZXJhbmNlKTtcbiAgICB5MiA9IHNuYXAoZmxhdENvb3JkaW5hdGVzW29mZnNldCArIDFdLCB0b2xlcmFuY2UpO1xuICAgIG9mZnNldCArPSBzdHJpZGU7XG4gICAgaWYgKG9mZnNldCA9PSBlbmQpIHtcbiAgICAgIC8vIGFsbCBjb29yZGluYXRlcyBzbmFwIHRvIHRoZSBzYW1lIHZhbHVlLCB0aGUgbGluZSBjb2xsYXBzZXMgdG8gYSBwb2ludFxuICAgICAgLy8gcHVzaCB0aGUgbGFzdCBzbmFwcGVkIHZhbHVlIGFueXdheSB0byBlbnN1cmUgdGhhdCB0aGUgb3V0cHV0IGNvbnRhaW5zXG4gICAgICAvLyBhdCBsZWFzdCB0d28gcG9pbnRzXG4gICAgICAvLyBGSVhNRSBzaG91bGQgd2UgcmVhbGx5IHJldHVybiBhdCBsZWFzdCB0d28gcG9pbnRzIGFueXdheT9cbiAgICAgIHNpbXBsaWZpZWRGbGF0Q29vcmRpbmF0ZXNbc2ltcGxpZmllZE9mZnNldCsrXSA9IHgyO1xuICAgICAgc2ltcGxpZmllZEZsYXRDb29yZGluYXRlc1tzaW1wbGlmaWVkT2Zmc2V0KytdID0geTI7XG4gICAgICByZXR1cm4gc2ltcGxpZmllZE9mZnNldDtcbiAgICB9XG4gIH0gd2hpbGUgKHgyID09IHgxICYmIHkyID09IHkxKTtcbiAgd2hpbGUgKG9mZnNldCA8IGVuZCkge1xuICAgIC8vIHNuYXAgdGhlIG5leHQgY29vcmRpbmF0ZSAoUDMpXG4gICAgY29uc3QgeDMgPSBzbmFwKGZsYXRDb29yZGluYXRlc1tvZmZzZXRdLCB0b2xlcmFuY2UpO1xuICAgIGNvbnN0IHkzID0gc25hcChmbGF0Q29vcmRpbmF0ZXNbb2Zmc2V0ICsgMV0sIHRvbGVyYW5jZSk7XG4gICAgb2Zmc2V0ICs9IHN0cmlkZTtcbiAgICAvLyBza2lwIFAzIGlmIGl0IGlzIGVxdWFsIHRvIFAyXG4gICAgaWYgKHgzID09IHgyICYmIHkzID09IHkyKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgLy8gY2FsY3VsYXRlIHRoZSBkZWx0YSBiZXR3ZWVuIFAxIGFuZCBQMlxuICAgIGNvbnN0IGR4MSA9IHgyIC0geDE7XG4gICAgY29uc3QgZHkxID0geTIgLSB5MTtcbiAgICAvLyBjYWxjdWxhdGUgdGhlIGRlbHRhIGJldHdlZW4gUDMgYW5kIFAxXG4gICAgY29uc3QgZHgyID0geDMgLSB4MTtcbiAgICBjb25zdCBkeTIgPSB5MyAtIHkxO1xuICAgIC8vIGlmIFAxLCBQMiwgYW5kIFAzIGFyZSBjb2xpbmVhciBhbmQgUDMgaXMgZnVydGhlciBmcm9tIFAxIHRoYW4gUDIgaXMgZnJvbVxuICAgIC8vIFAxIGluIHRoZSBzYW1lIGRpcmVjdGlvbiB0aGVuIFAyIGlzIG9uIHRoZSBzdHJhaWdodCBsaW5lIGJldHdlZW4gUDEgYW5kXG4gICAgLy8gUDNcbiAgICBpZiAoXG4gICAgICBkeDEgKiBkeTIgPT0gZHkxICogZHgyICYmXG4gICAgICAoKGR4MSA8IDAgJiYgZHgyIDwgZHgxKSB8fCBkeDEgPT0gZHgyIHx8IChkeDEgPiAwICYmIGR4MiA+IGR4MSkpICYmXG4gICAgICAoKGR5MSA8IDAgJiYgZHkyIDwgZHkxKSB8fCBkeTEgPT0gZHkyIHx8IChkeTEgPiAwICYmIGR5MiA+IGR5MSkpXG4gICAgKSB7XG4gICAgICAvLyBkaXNjYXJkIFAyIGFuZCBzZXQgUDIgPSBQM1xuICAgICAgeDIgPSB4MztcbiAgICAgIHkyID0geTM7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgLy8gZWl0aGVyIFAxLCBQMiwgYW5kIFAzIGFyZSBub3QgY29saW5lYXIsIG9yIHRoZXkgYXJlIGNvbGluZWFyIGJ1dCBQMyBpc1xuICAgIC8vIGJldHdlZW4gUDMgYW5kIFAxIG9yIG9uIHRoZSBvcHBvc2l0ZSBoYWxmIG9mIHRoZSBsaW5lIHRvIFAyLiAgYWRkIFAyLFxuICAgIC8vIGFuZCBjb250aW51ZSB3aXRoIFAxID0gUDIgYW5kIFAyID0gUDNcbiAgICBzaW1wbGlmaWVkRmxhdENvb3JkaW5hdGVzW3NpbXBsaWZpZWRPZmZzZXQrK10gPSB4MjtcbiAgICBzaW1wbGlmaWVkRmxhdENvb3JkaW5hdGVzW3NpbXBsaWZpZWRPZmZzZXQrK10gPSB5MjtcbiAgICB4MSA9IHgyO1xuICAgIHkxID0geTI7XG4gICAgeDIgPSB4MztcbiAgICB5MiA9IHkzO1xuICB9XG4gIC8vIGFkZCB0aGUgbGFzdCBwb2ludCAoUDIpXG4gIHNpbXBsaWZpZWRGbGF0Q29vcmRpbmF0ZXNbc2ltcGxpZmllZE9mZnNldCsrXSA9IHgyO1xuICBzaW1wbGlmaWVkRmxhdENvb3JkaW5hdGVzW3NpbXBsaWZpZWRPZmZzZXQrK10gPSB5MjtcbiAgcmV0dXJuIHNpbXBsaWZpZWRPZmZzZXQ7XG59XG5cbi8qKlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBmbGF0Q29vcmRpbmF0ZXMgRmxhdCBjb29yZGluYXRlcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQgT2Zmc2V0LlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBlbmRzIEVuZHMuXG4gKiBAcGFyYW0ge251bWJlcn0gc3RyaWRlIFN0cmlkZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0b2xlcmFuY2UgVG9sZXJhbmNlLlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBzaW1wbGlmaWVkRmxhdENvb3JkaW5hdGVzIFNpbXBsaWZpZWQgZmxhdFxuICogICAgIGNvb3JkaW5hdGVzLlxuICogQHBhcmFtIHtudW1iZXJ9IHNpbXBsaWZpZWRPZmZzZXQgU2ltcGxpZmllZCBvZmZzZXQuXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHNpbXBsaWZpZWRFbmRzIFNpbXBsaWZpZWQgZW5kcy5cbiAqIEByZXR1cm4ge251bWJlcn0gU2ltcGxpZmllZCBvZmZzZXQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBxdWFudGl6ZUFycmF5KFxuICBmbGF0Q29vcmRpbmF0ZXMsXG4gIG9mZnNldCxcbiAgZW5kcyxcbiAgc3RyaWRlLFxuICB0b2xlcmFuY2UsXG4gIHNpbXBsaWZpZWRGbGF0Q29vcmRpbmF0ZXMsXG4gIHNpbXBsaWZpZWRPZmZzZXQsXG4gIHNpbXBsaWZpZWRFbmRzLFxuKSB7XG4gIGZvciAobGV0IGkgPSAwLCBpaSA9IGVuZHMubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgIGNvbnN0IGVuZCA9IGVuZHNbaV07XG4gICAgc2ltcGxpZmllZE9mZnNldCA9IHF1YW50aXplKFxuICAgICAgZmxhdENvb3JkaW5hdGVzLFxuICAgICAgb2Zmc2V0LFxuICAgICAgZW5kLFxuICAgICAgc3RyaWRlLFxuICAgICAgdG9sZXJhbmNlLFxuICAgICAgc2ltcGxpZmllZEZsYXRDb29yZGluYXRlcyxcbiAgICAgIHNpbXBsaWZpZWRPZmZzZXQsXG4gICAgKTtcbiAgICBzaW1wbGlmaWVkRW5kcy5wdXNoKHNpbXBsaWZpZWRPZmZzZXQpO1xuICAgIG9mZnNldCA9IGVuZDtcbiAgfVxuICByZXR1cm4gc2ltcGxpZmllZE9mZnNldDtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGZsYXRDb29yZGluYXRlcyBGbGF0IGNvb3JkaW5hdGVzLlxuICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldCBPZmZzZXQuXG4gKiBAcGFyYW0ge0FycmF5PEFycmF5PG51bWJlcj4+fSBlbmRzcyBFbmRzcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzdHJpZGUgU3RyaWRlLlxuICogQHBhcmFtIHtudW1iZXJ9IHRvbGVyYW5jZSBUb2xlcmFuY2UuXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHNpbXBsaWZpZWRGbGF0Q29vcmRpbmF0ZXMgU2ltcGxpZmllZCBmbGF0XG4gKiAgICAgY29vcmRpbmF0ZXMuXG4gKiBAcGFyYW0ge251bWJlcn0gc2ltcGxpZmllZE9mZnNldCBTaW1wbGlmaWVkIG9mZnNldC5cbiAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8bnVtYmVyPj59IHNpbXBsaWZpZWRFbmRzcyBTaW1wbGlmaWVkIGVuZHNzLlxuICogQHJldHVybiB7bnVtYmVyfSBTaW1wbGlmaWVkIG9mZnNldC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHF1YW50aXplTXVsdGlBcnJheShcbiAgZmxhdENvb3JkaW5hdGVzLFxuICBvZmZzZXQsXG4gIGVuZHNzLFxuICBzdHJpZGUsXG4gIHRvbGVyYW5jZSxcbiAgc2ltcGxpZmllZEZsYXRDb29yZGluYXRlcyxcbiAgc2ltcGxpZmllZE9mZnNldCxcbiAgc2ltcGxpZmllZEVuZHNzLFxuKSB7XG4gIGZvciAobGV0IGkgPSAwLCBpaSA9IGVuZHNzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICBjb25zdCBlbmRzID0gZW5kc3NbaV07XG4gICAgLyoqIEB0eXBlIHtBcnJheTxudW1iZXI+fSAqL1xuICAgIGNvbnN0IHNpbXBsaWZpZWRFbmRzID0gW107XG4gICAgc2ltcGxpZmllZE9mZnNldCA9IHF1YW50aXplQXJyYXkoXG4gICAgICBmbGF0Q29vcmRpbmF0ZXMsXG4gICAgICBvZmZzZXQsXG4gICAgICBlbmRzLFxuICAgICAgc3RyaWRlLFxuICAgICAgdG9sZXJhbmNlLFxuICAgICAgc2ltcGxpZmllZEZsYXRDb29yZGluYXRlcyxcbiAgICAgIHNpbXBsaWZpZWRPZmZzZXQsXG4gICAgICBzaW1wbGlmaWVkRW5kcyxcbiAgICApO1xuICAgIHNpbXBsaWZpZWRFbmRzcy5wdXNoKHNpbXBsaWZpZWRFbmRzKTtcbiAgICBvZmZzZXQgPSBlbmRzW2VuZHMubGVuZ3RoIC0gMV07XG4gIH1cbiAgcmV0dXJuIHNpbXBsaWZpZWRPZmZzZXQ7XG59XG4iLCIvKipcbiAqIEBtb2R1bGUgb2wvZ2VvbS9mbGF0L3RyYW5zZm9ybVxuICovXG5cbi8qKlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBmbGF0Q29vcmRpbmF0ZXMgRmxhdCBjb29yZGluYXRlcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQgT2Zmc2V0LlxuICogQHBhcmFtIHtudW1iZXJ9IGVuZCBFbmQuXG4gKiBAcGFyYW0ge251bWJlcn0gc3RyaWRlIFN0cmlkZS5cbiAqIEBwYXJhbSB7aW1wb3J0KFwiLi4vLi4vdHJhbnNmb3JtLmpzXCIpLlRyYW5zZm9ybX0gdHJhbnNmb3JtIFRyYW5zZm9ybS5cbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gW2Rlc3RdIERlc3RpbmF0aW9uLlxuICogQHJldHVybiB7QXJyYXk8bnVtYmVyPn0gVHJhbnNmb3JtZWQgY29vcmRpbmF0ZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm0yRChcbiAgZmxhdENvb3JkaW5hdGVzLFxuICBvZmZzZXQsXG4gIGVuZCxcbiAgc3RyaWRlLFxuICB0cmFuc2Zvcm0sXG4gIGRlc3QsXG4pIHtcbiAgZGVzdCA9IGRlc3QgPyBkZXN0IDogW107XG4gIGxldCBpID0gMDtcbiAgZm9yIChsZXQgaiA9IG9mZnNldDsgaiA8IGVuZDsgaiArPSBzdHJpZGUpIHtcbiAgICBjb25zdCB4ID0gZmxhdENvb3JkaW5hdGVzW2pdO1xuICAgIGNvbnN0IHkgPSBmbGF0Q29vcmRpbmF0ZXNbaiArIDFdO1xuICAgIGRlc3RbaSsrXSA9IHRyYW5zZm9ybVswXSAqIHggKyB0cmFuc2Zvcm1bMl0gKiB5ICsgdHJhbnNmb3JtWzRdO1xuICAgIGRlc3RbaSsrXSA9IHRyYW5zZm9ybVsxXSAqIHggKyB0cmFuc2Zvcm1bM10gKiB5ICsgdHJhbnNmb3JtWzVdO1xuICB9XG4gIGlmIChkZXN0ICYmIGRlc3QubGVuZ3RoICE9IGkpIHtcbiAgICBkZXN0Lmxlbmd0aCA9IGk7XG4gIH1cbiAgcmV0dXJuIGRlc3Q7XG59XG5cbi8qKlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBmbGF0Q29vcmRpbmF0ZXMgRmxhdCBjb29yZGluYXRlcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQgT2Zmc2V0LlxuICogQHBhcmFtIHtudW1iZXJ9IGVuZCBFbmQuXG4gKiBAcGFyYW0ge251bWJlcn0gc3RyaWRlIFN0cmlkZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBhbmdsZSBBbmdsZS5cbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gYW5jaG9yIFJvdGF0aW9uIGFuY2hvciBwb2ludC5cbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gW2Rlc3RdIERlc3RpbmF0aW9uLlxuICogQHJldHVybiB7QXJyYXk8bnVtYmVyPn0gVHJhbnNmb3JtZWQgY29vcmRpbmF0ZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGUoXG4gIGZsYXRDb29yZGluYXRlcyxcbiAgb2Zmc2V0LFxuICBlbmQsXG4gIHN0cmlkZSxcbiAgYW5nbGUsXG4gIGFuY2hvcixcbiAgZGVzdCxcbikge1xuICBkZXN0ID0gZGVzdCA/IGRlc3QgOiBbXTtcbiAgY29uc3QgY29zID0gTWF0aC5jb3MoYW5nbGUpO1xuICBjb25zdCBzaW4gPSBNYXRoLnNpbihhbmdsZSk7XG4gIGNvbnN0IGFuY2hvclggPSBhbmNob3JbMF07XG4gIGNvbnN0IGFuY2hvclkgPSBhbmNob3JbMV07XG4gIGxldCBpID0gMDtcbiAgZm9yIChsZXQgaiA9IG9mZnNldDsgaiA8IGVuZDsgaiArPSBzdHJpZGUpIHtcbiAgICBjb25zdCBkZWx0YVggPSBmbGF0Q29vcmRpbmF0ZXNbal0gLSBhbmNob3JYO1xuICAgIGNvbnN0IGRlbHRhWSA9IGZsYXRDb29yZGluYXRlc1tqICsgMV0gLSBhbmNob3JZO1xuICAgIGRlc3RbaSsrXSA9IGFuY2hvclggKyBkZWx0YVggKiBjb3MgLSBkZWx0YVkgKiBzaW47XG4gICAgZGVzdFtpKytdID0gYW5jaG9yWSArIGRlbHRhWCAqIHNpbiArIGRlbHRhWSAqIGNvcztcbiAgICBmb3IgKGxldCBrID0gaiArIDI7IGsgPCBqICsgc3RyaWRlOyArK2spIHtcbiAgICAgIGRlc3RbaSsrXSA9IGZsYXRDb29yZGluYXRlc1trXTtcbiAgICB9XG4gIH1cbiAgaWYgKGRlc3QgJiYgZGVzdC5sZW5ndGggIT0gaSkge1xuICAgIGRlc3QubGVuZ3RoID0gaTtcbiAgfVxuICByZXR1cm4gZGVzdDtcbn1cblxuLyoqXG4gKiBTY2FsZSB0aGUgY29vcmRpbmF0ZXMuXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGZsYXRDb29yZGluYXRlcyBGbGF0IGNvb3JkaW5hdGVzLlxuICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldCBPZmZzZXQuXG4gKiBAcGFyYW0ge251bWJlcn0gZW5kIEVuZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzdHJpZGUgU3RyaWRlLlxuICogQHBhcmFtIHtudW1iZXJ9IHN4IFNjYWxlIGZhY3RvciBpbiB0aGUgeC1kaXJlY3Rpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gc3kgU2NhbGUgZmFjdG9yIGluIHRoZSB5LWRpcmVjdGlvbi5cbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gYW5jaG9yIFNjYWxlIGFuY2hvciBwb2ludC5cbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gW2Rlc3RdIERlc3RpbmF0aW9uLlxuICogQHJldHVybiB7QXJyYXk8bnVtYmVyPn0gVHJhbnNmb3JtZWQgY29vcmRpbmF0ZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZShcbiAgZmxhdENvb3JkaW5hdGVzLFxuICBvZmZzZXQsXG4gIGVuZCxcbiAgc3RyaWRlLFxuICBzeCxcbiAgc3ksXG4gIGFuY2hvcixcbiAgZGVzdCxcbikge1xuICBkZXN0ID0gZGVzdCA/IGRlc3QgOiBbXTtcbiAgY29uc3QgYW5jaG9yWCA9IGFuY2hvclswXTtcbiAgY29uc3QgYW5jaG9yWSA9IGFuY2hvclsxXTtcbiAgbGV0IGkgPSAwO1xuICBmb3IgKGxldCBqID0gb2Zmc2V0OyBqIDwgZW5kOyBqICs9IHN0cmlkZSkge1xuICAgIGNvbnN0IGRlbHRhWCA9IGZsYXRDb29yZGluYXRlc1tqXSAtIGFuY2hvclg7XG4gICAgY29uc3QgZGVsdGFZID0gZmxhdENvb3JkaW5hdGVzW2ogKyAxXSAtIGFuY2hvclk7XG4gICAgZGVzdFtpKytdID0gYW5jaG9yWCArIHN4ICogZGVsdGFYO1xuICAgIGRlc3RbaSsrXSA9IGFuY2hvclkgKyBzeSAqIGRlbHRhWTtcbiAgICBmb3IgKGxldCBrID0gaiArIDI7IGsgPCBqICsgc3RyaWRlOyArK2spIHtcbiAgICAgIGRlc3RbaSsrXSA9IGZsYXRDb29yZGluYXRlc1trXTtcbiAgICB9XG4gIH1cbiAgaWYgKGRlc3QgJiYgZGVzdC5sZW5ndGggIT0gaSkge1xuICAgIGRlc3QubGVuZ3RoID0gaTtcbiAgfVxuICByZXR1cm4gZGVzdDtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGZsYXRDb29yZGluYXRlcyBGbGF0IGNvb3JkaW5hdGVzLlxuICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldCBPZmZzZXQuXG4gKiBAcGFyYW0ge251bWJlcn0gZW5kIEVuZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzdHJpZGUgU3RyaWRlLlxuICogQHBhcmFtIHtudW1iZXJ9IGRlbHRhWCBEZWx0YSBYLlxuICogQHBhcmFtIHtudW1iZXJ9IGRlbHRhWSBEZWx0YSBZLlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBbZGVzdF0gRGVzdGluYXRpb24uXG4gKiBAcmV0dXJuIHtBcnJheTxudW1iZXI+fSBUcmFuc2Zvcm1lZCBjb29yZGluYXRlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZShcbiAgZmxhdENvb3JkaW5hdGVzLFxuICBvZmZzZXQsXG4gIGVuZCxcbiAgc3RyaWRlLFxuICBkZWx0YVgsXG4gIGRlbHRhWSxcbiAgZGVzdCxcbikge1xuICBkZXN0ID0gZGVzdCA/IGRlc3QgOiBbXTtcbiAgbGV0IGkgPSAwO1xuICBmb3IgKGxldCBqID0gb2Zmc2V0OyBqIDwgZW5kOyBqICs9IHN0cmlkZSkge1xuICAgIGRlc3RbaSsrXSA9IGZsYXRDb29yZGluYXRlc1tqXSArIGRlbHRhWDtcbiAgICBkZXN0W2krK10gPSBmbGF0Q29vcmRpbmF0ZXNbaiArIDFdICsgZGVsdGFZO1xuICAgIGZvciAobGV0IGsgPSBqICsgMjsgayA8IGogKyBzdHJpZGU7ICsraykge1xuICAgICAgZGVzdFtpKytdID0gZmxhdENvb3JkaW5hdGVzW2tdO1xuICAgIH1cbiAgfVxuICBpZiAoZGVzdCAmJiBkZXN0Lmxlbmd0aCAhPSBpKSB7XG4gICAgZGVzdC5sZW5ndGggPSBpO1xuICB9XG4gIHJldHVybiBkZXN0O1xufVxuIiwiLyoqXG4gKiBAbW9kdWxlIG9sL21hdGhcbiAqL1xuXG4vKipcbiAqIFRha2VzIGEgbnVtYmVyIGFuZCBjbGFtcHMgaXQgdG8gd2l0aGluIHRoZSBwcm92aWRlZCBib3VuZHMuXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgVGhlIGlucHV0IG51bWJlci5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW4gVGhlIG1pbmltdW0gdmFsdWUgdG8gcmV0dXJuLlxuICogQHBhcmFtIHtudW1iZXJ9IG1heCBUaGUgbWF4aW11bSB2YWx1ZSB0byByZXR1cm4uXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBpbnB1dCBudW1iZXIgaWYgaXQgaXMgd2l0aGluIGJvdW5kcywgb3IgdGhlIG5lYXJlc3RcbiAqICAgICBudW1iZXIgd2l0aGluIHRoZSBib3VuZHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGFtcCh2YWx1ZSwgbWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHZhbHVlLCBtaW4pLCBtYXgpO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHNxdWFyZSBvZiB0aGUgY2xvc2VzdCBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBwb2ludCAoeCwgeSkgYW5kIHRoZVxuICogbGluZSBzZWdtZW50ICh4MSwgeTEpIHRvICh4MiwgeTIpLlxuICogQHBhcmFtIHtudW1iZXJ9IHggWC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB5IFkuXG4gKiBAcGFyYW0ge251bWJlcn0geDEgWDEuXG4gKiBAcGFyYW0ge251bWJlcn0geTEgWTEuXG4gKiBAcGFyYW0ge251bWJlcn0geDIgWDIuXG4gKiBAcGFyYW0ge251bWJlcn0geTIgWTIuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFNxdWFyZWQgZGlzdGFuY2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzcXVhcmVkU2VnbWVudERpc3RhbmNlKHgsIHksIHgxLCB5MSwgeDIsIHkyKSB7XG4gIGNvbnN0IGR4ID0geDIgLSB4MTtcbiAgY29uc3QgZHkgPSB5MiAtIHkxO1xuICBpZiAoZHggIT09IDAgfHwgZHkgIT09IDApIHtcbiAgICBjb25zdCB0ID0gKCh4IC0geDEpICogZHggKyAoeSAtIHkxKSAqIGR5KSAvIChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgaWYgKHQgPiAxKSB7XG4gICAgICB4MSA9IHgyO1xuICAgICAgeTEgPSB5MjtcbiAgICB9IGVsc2UgaWYgKHQgPiAwKSB7XG4gICAgICB4MSArPSBkeCAqIHQ7XG4gICAgICB5MSArPSBkeSAqIHQ7XG4gICAgfVxuICB9XG4gIHJldHVybiBzcXVhcmVkRGlzdGFuY2UoeCwgeSwgeDEsIHkxKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBzcXVhcmUgb2YgdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHBvaW50cyAoeDEsIHkxKSBhbmQgKHgyLCB5MikuXG4gKiBAcGFyYW0ge251bWJlcn0geDEgWDEuXG4gKiBAcGFyYW0ge251bWJlcn0geTEgWTEuXG4gKiBAcGFyYW0ge251bWJlcn0geDIgWDIuXG4gKiBAcGFyYW0ge251bWJlcn0geTIgWTIuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFNxdWFyZWQgZGlzdGFuY2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzcXVhcmVkRGlzdGFuY2UoeDEsIHkxLCB4MiwgeTIpIHtcbiAgY29uc3QgZHggPSB4MiAtIHgxO1xuICBjb25zdCBkeSA9IHkyIC0geTE7XG4gIHJldHVybiBkeCAqIGR4ICsgZHkgKiBkeTtcbn1cblxuLyoqXG4gKiBTb2x2ZXMgc3lzdGVtIG9mIGxpbmVhciBlcXVhdGlvbnMgdXNpbmcgR2F1c3NpYW4gZWxpbWluYXRpb24gbWV0aG9kLlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8bnVtYmVyPj59IG1hdCBBdWdtZW50ZWQgbWF0cml4IChuIHggbiArIDEgY29sdW1uKVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW4gcm93LW1ham9yIG9yZGVyLlxuICogQHJldHVybiB7QXJyYXk8bnVtYmVyPnxudWxsfSBUaGUgcmVzdWx0aW5nIHZlY3Rvci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNvbHZlTGluZWFyU3lzdGVtKG1hdCkge1xuICBjb25zdCBuID0gbWF0Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgIC8vIEZpbmQgbWF4IGluIHRoZSBpLXRoIGNvbHVtbiAoaWdub3JpbmcgaSAtIDEgZmlyc3Qgcm93cylcbiAgICBsZXQgbWF4Um93ID0gaTtcbiAgICBsZXQgbWF4RWwgPSBNYXRoLmFicyhtYXRbaV1baV0pO1xuICAgIGZvciAobGV0IHIgPSBpICsgMTsgciA8IG47IHIrKykge1xuICAgICAgY29uc3QgYWJzVmFsdWUgPSBNYXRoLmFicyhtYXRbcl1baV0pO1xuICAgICAgaWYgKGFic1ZhbHVlID4gbWF4RWwpIHtcbiAgICAgICAgbWF4RWwgPSBhYnNWYWx1ZTtcbiAgICAgICAgbWF4Um93ID0gcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWF4RWwgPT09IDApIHtcbiAgICAgIHJldHVybiBudWxsOyAvLyBtYXRyaXggaXMgc2luZ3VsYXJcbiAgICB9XG5cbiAgICAvLyBTd2FwIG1heCByb3cgd2l0aCBpLXRoIChjdXJyZW50KSByb3dcbiAgICBjb25zdCB0bXAgPSBtYXRbbWF4Um93XTtcbiAgICBtYXRbbWF4Um93XSA9IG1hdFtpXTtcbiAgICBtYXRbaV0gPSB0bXA7XG5cbiAgICAvLyBTdWJ0cmFjdCB0aGUgaS10aCByb3cgdG8gbWFrZSBhbGwgdGhlIHJlbWFpbmluZyByb3dzIDAgaW4gdGhlIGktdGggY29sdW1uXG4gICAgZm9yIChsZXQgaiA9IGkgKyAxOyBqIDwgbjsgaisrKSB7XG4gICAgICBjb25zdCBjb2VmID0gLW1hdFtqXVtpXSAvIG1hdFtpXVtpXTtcbiAgICAgIGZvciAobGV0IGsgPSBpOyBrIDwgbiArIDE7IGsrKykge1xuICAgICAgICBpZiAoaSA9PSBrKSB7XG4gICAgICAgICAgbWF0W2pdW2tdID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtYXRbal1ba10gKz0gY29lZiAqIG1hdFtpXVtrXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFNvbHZlIEF4PWIgZm9yIHVwcGVyIHRyaWFuZ3VsYXIgbWF0cml4IEEgKG1hdClcbiAgY29uc3QgeCA9IG5ldyBBcnJheShuKTtcbiAgZm9yIChsZXQgbCA9IG4gLSAxOyBsID49IDA7IGwtLSkge1xuICAgIHhbbF0gPSBtYXRbbF1bbl0gLyBtYXRbbF1bbF07XG4gICAgZm9yIChsZXQgbSA9IGwgLSAxOyBtID49IDA7IG0tLSkge1xuICAgICAgbWF0W21dW25dIC09IG1hdFttXVtsXSAqIHhbbF07XG4gICAgfVxuICB9XG4gIHJldHVybiB4O1xufVxuXG4vKipcbiAqIENvbnZlcnRzIHJhZGlhbnMgdG8gdG8gZGVncmVlcy5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gYW5nbGVJblJhZGlhbnMgQW5nbGUgaW4gcmFkaWFucy5cbiAqIEByZXR1cm4ge251bWJlcn0gQW5nbGUgaW4gZGVncmVlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvRGVncmVlcyhhbmdsZUluUmFkaWFucykge1xuICByZXR1cm4gKGFuZ2xlSW5SYWRpYW5zICogMTgwKSAvIE1hdGguUEk7XG59XG5cbi8qKlxuICogQ29udmVydHMgZGVncmVlcyB0byByYWRpYW5zLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBhbmdsZUluRGVncmVlcyBBbmdsZSBpbiBkZWdyZWVzLlxuICogQHJldHVybiB7bnVtYmVyfSBBbmdsZSBpbiByYWRpYW5zLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9SYWRpYW5zKGFuZ2xlSW5EZWdyZWVzKSB7XG4gIHJldHVybiAoYW5nbGVJbkRlZ3JlZXMgKiBNYXRoLlBJKSAvIDE4MDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBtb2R1bG8gb2YgYSAvIGIsIGRlcGVuZGluZyBvbiB0aGUgc2lnbiBvZiBiLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBhIERpdmlkZW5kLlxuICogQHBhcmFtIHtudW1iZXJ9IGIgRGl2aXNvci5cbiAqIEByZXR1cm4ge251bWJlcn0gTW9kdWxvLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbW9kdWxvKGEsIGIpIHtcbiAgY29uc3QgciA9IGEgJSBiO1xuICByZXR1cm4gciAqIGIgPCAwID8gciArIGIgOiByO1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGxpbmVhcmx5IGludGVycG9sYXRlZCB2YWx1ZSBvZiB4IGJldHdlZW4gYSBhbmQgYi5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gYSBOdW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBiIE51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IHggVmFsdWUgdG8gYmUgaW50ZXJwb2xhdGVkLlxuICogQHJldHVybiB7bnVtYmVyfSBJbnRlcnBvbGF0ZWQgdmFsdWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsZXJwKGEsIGIsIHgpIHtcbiAgcmV0dXJuIGEgKyB4ICogKGIgLSBhKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgbnVtYmVyIHdpdGggYSBsaW1pdGVkIG51bWJlciBvZiBkZWNpbWFsIGRpZ2l0cy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBpbnB1dCBudW1iZXIuXG4gKiBAcGFyYW0ge251bWJlcn0gZGVjaW1hbHMgVGhlIG1heGltdW0gbnVtYmVyIG9mIGRlY2ltYWwgZGlnaXRzLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgaW5wdXQgbnVtYmVyIHdpdGggYSBsaW1pdGVkIG51bWJlciBvZiBkZWNpbWFsIGRpZ2l0cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvRml4ZWQobiwgZGVjaW1hbHMpIHtcbiAgY29uc3QgZmFjdG9yID0gTWF0aC5wb3coMTAsIGRlY2ltYWxzKTtcbiAgcmV0dXJuIE1hdGgucm91bmQobiAqIGZhY3RvcikgLyBmYWN0b3I7XG59XG5cbi8qKlxuICogUm91bmRzIGEgbnVtYmVyIHRvIHRoZSBuZWFyZXN0IGludGVnZXIgdmFsdWUgY29uc2lkZXJpbmcgb25seSB0aGUgZ2l2ZW4gbnVtYmVyXG4gKiBvZiBkZWNpbWFsIGRpZ2l0cyAod2l0aCByb3VuZGluZyBvbiB0aGUgZmluYWwgZGlnaXQpLlxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIGlucHV0IG51bWJlci5cbiAqIEBwYXJhbSB7bnVtYmVyfSBkZWNpbWFscyBUaGUgbWF4aW11bSBudW1iZXIgb2YgZGVjaW1hbCBkaWdpdHMuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBuZWFyZXN0IGludGVnZXIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3VuZChuLCBkZWNpbWFscykge1xuICByZXR1cm4gTWF0aC5yb3VuZCh0b0ZpeGVkKG4sIGRlY2ltYWxzKSk7XG59XG5cbi8qKlxuICogUm91bmRzIGEgbnVtYmVyIHRvIHRoZSBuZXh0IHNtYWxsZXIgaW50ZWdlciBjb25zaWRlcmluZyBvbmx5IHRoZSBnaXZlbiBudW1iZXJcbiAqIG9mIGRlY2ltYWwgZGlnaXRzICh3aXRoIHJvdW5kaW5nIG9uIHRoZSBmaW5hbCBkaWdpdCkuXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgaW5wdXQgbnVtYmVyLlxuICogQHBhcmFtIHtudW1iZXJ9IGRlY2ltYWxzIFRoZSBtYXhpbXVtIG51bWJlciBvZiBkZWNpbWFsIGRpZ2l0cy5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG5leHQgc21hbGxlciBpbnRlZ2VyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZmxvb3IobiwgZGVjaW1hbHMpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IodG9GaXhlZChuLCBkZWNpbWFscykpO1xufVxuXG4vKipcbiAqIFJvdW5kcyBhIG51bWJlciB0byB0aGUgbmV4dCBiaWdnZXIgaW50ZWdlciBjb25zaWRlcmluZyBvbmx5IHRoZSBnaXZlbiBudW1iZXJcbiAqIG9mIGRlY2ltYWwgZGlnaXRzICh3aXRoIHJvdW5kaW5nIG9uIHRoZSBmaW5hbCBkaWdpdCkuXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgaW5wdXQgbnVtYmVyLlxuICogQHBhcmFtIHtudW1iZXJ9IGRlY2ltYWxzIFRoZSBtYXhpbXVtIG51bWJlciBvZiBkZWNpbWFsIGRpZ2l0cy5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG5leHQgYmlnZ2VyIGludGVnZXIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjZWlsKG4sIGRlY2ltYWxzKSB7XG4gIHJldHVybiBNYXRoLmNlaWwodG9GaXhlZChuLCBkZWNpbWFscykpO1xufVxuIiwiLyoqXG4gKiBAbW9kdWxlIG9sL29ialxuICovXG5cbi8qKlxuICogUmVtb3ZlcyBhbGwgcHJvcGVydGllcyBmcm9tIGFuIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0PHN0cmluZywgdW5rbm93bj59IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNsZWFyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xlYXIob2JqZWN0KSB7XG4gIGZvciAoY29uc3QgcHJvcGVydHkgaW4gb2JqZWN0KSB7XG4gICAgZGVsZXRlIG9iamVjdFtwcm9wZXJ0eV07XG4gIH1cbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYW4gb2JqZWN0IGhhcyBhbnkgcHJvcGVydGllcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjaGVjay5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRoZSBvYmplY3QgaXMgZW1wdHkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5KG9iamVjdCkge1xuICBsZXQgcHJvcGVydHk7XG4gIGZvciAocHJvcGVydHkgaW4gb2JqZWN0KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiAhcHJvcGVydHk7XG59XG4iLCIvKipcbiAqIEBtb2R1bGUgb2wvcHJvalxuICovXG5cbi8qKlxuICogVGhlIG9sL3Byb2ogbW9kdWxlIHN0b3JlczpcbiAqICogYSBsaXN0IG9mIHtAbGluayBtb2R1bGU6b2wvcHJvai9Qcm9qZWN0aW9uflByb2plY3Rpb259XG4gKiBvYmplY3RzLCBvbmUgZm9yIGVhY2ggcHJvamVjdGlvbiBzdXBwb3J0ZWQgYnkgdGhlIGFwcGxpY2F0aW9uXG4gKiAqIGEgbGlzdCBvZiB0cmFuc2Zvcm0gZnVuY3Rpb25zIG5lZWRlZCB0byBjb252ZXJ0IGNvb3JkaW5hdGVzIGluIG9uZSBwcm9qZWN0aW9uXG4gKiBpbnRvIGFub3RoZXIuXG4gKlxuICogVGhlIHN0YXRpYyBmdW5jdGlvbnMgYXJlIHRoZSBtZXRob2RzIHVzZWQgdG8gbWFpbnRhaW4gdGhlc2UuXG4gKiBFYWNoIHRyYW5zZm9ybSBmdW5jdGlvbiBjYW4gaGFuZGxlIG5vdCBvbmx5IHNpbXBsZSBjb29yZGluYXRlIHBhaXJzLCBidXQgYWxzb1xuICogbGFyZ2UgYXJyYXlzIG9mIGNvb3JkaW5hdGVzIHN1Y2ggYXMgdmVjdG9yIGdlb21ldHJpZXMuXG4gKlxuICogV2hlbiBsb2FkZWQsIHRoZSBsaWJyYXJ5IGFkZHMgcHJvamVjdGlvbiBvYmplY3RzIGZvciBFUFNHOjQzMjYgKFdHUzg0XG4gKiBnZW9ncmFwaGljIGNvb3JkaW5hdGVzKSBhbmQgRVBTRzozODU3IChXZWIgb3IgU3BoZXJpY2FsIE1lcmNhdG9yLCBhcyB1c2VkXG4gKiBmb3IgZXhhbXBsZSBieSBCaW5nIE1hcHMgb3IgT3BlblN0cmVldE1hcCksIHRvZ2V0aGVyIHdpdGggdGhlIHJlbGV2YW50XG4gKiB0cmFuc2Zvcm0gZnVuY3Rpb25zLlxuICpcbiAqIEFkZGl0aW9uYWwgdHJhbnNmb3JtcyBtYXkgYmUgYWRkZWQgYnkgdXNpbmcgdGhlIGh0dHA6Ly9wcm9qNGpzLm9yZy9cbiAqIGxpYnJhcnkgKHZlcnNpb24gMi4yIG9yIGxhdGVyKS4gWW91IGNhbiB1c2UgdGhlIGZ1bGwgYnVpbGQgc3VwcGxpZWQgYnlcbiAqIFByb2o0anMsIG9yIGNyZWF0ZSBhIGN1c3RvbSBidWlsZCB0byBzdXBwb3J0IHRob3NlIHByb2plY3Rpb25zIHlvdSBuZWVkOyBzZWVcbiAqIHRoZSBQcm9qNGpzIHdlYnNpdGUgZm9yIGhvdyB0byBkbyB0aGlzLiBZb3UgYWxzbyBuZWVkIHRoZSBQcm9qNGpzIGRlZmluaXRpb25zXG4gKiBmb3IgdGhlIHJlcXVpcmVkIHByb2plY3Rpb25zLiBUaGVzZSBkZWZpbml0aW9ucyBjYW4gYmUgb2J0YWluZWQgZnJvbVxuICogaHR0cHM6Ly9lcHNnLmlvLywgYW5kIGFyZSBhIEpTIGZ1bmN0aW9uLCBzbyBjYW4gYmUgbG9hZGVkIGluIGEgc2NyaXB0XG4gKiB0YWcgKGFzIGluIHRoZSBleGFtcGxlcykgb3IgcGFzdGVkIGludG8geW91ciBhcHBsaWNhdGlvbi5cbiAqXG4gKiBBZnRlciBhbGwgcmVxdWlyZWQgcHJvamVjdGlvbiBkZWZpbml0aW9ucyBhcmUgYWRkZWQgdG8gcHJvajQncyByZWdpc3RyeSAoYnlcbiAqIHVzaW5nIGBwcm9qNC5kZWZzKClgKSwgc2ltcGx5IGNhbGwgYHJlZ2lzdGVyKHByb2o0KWAgZnJvbSB0aGUgYG9sL3Byb2ovcHJvajRgXG4gKiBwYWNrYWdlLiBFeGlzdGluZyB0cmFuc2Zvcm1zIGFyZSBub3QgY2hhbmdlZCBieSB0aGlzIGZ1bmN0aW9uLiBTZWVcbiAqIGV4YW1wbGVzL3dtcy1pbWFnZS1jdXN0b20tcHJvaiBmb3IgYW4gZXhhbXBsZSBvZiB0aGlzLlxuICpcbiAqIEFkZGl0aW9uYWwgcHJvamVjdGlvbiBkZWZpbml0aW9ucyBjYW4gYmUgcmVnaXN0ZXJlZCB3aXRoIGBwcm9qNC5kZWZzKClgIGFueVxuICogdGltZS4gSnVzdCBtYWtlIHN1cmUgdG8gY2FsbCBgcmVnaXN0ZXIocHJvajQpYCBhZ2FpbjsgZm9yIGV4YW1wbGUsIHdpdGggdXNlci1zdXBwbGllZCBkYXRhIHdoZXJlIHlvdSBkb24ndFxuICoga25vdyBpbiBhZHZhbmNlIHdoYXQgcHJvamVjdGlvbnMgYXJlIG5lZWRlZCwgeW91IGNhbiBpbml0aWFsbHkgbG9hZCBtaW5pbWFsXG4gKiBzdXBwb3J0IGFuZCB0aGVuIGxvYWQgd2hpY2hldmVyIGFyZSByZXF1ZXN0ZWQuXG4gKlxuICogTm90ZSB0aGF0IFByb2o0anMgZG9lcyBub3Qgc3VwcG9ydCBwcm9qZWN0aW9uIGV4dGVudHMuIElmIHlvdSB3YW50IHRvIGFkZFxuICogb25lIGZvciBjcmVhdGluZyBkZWZhdWx0IHRpbGUgZ3JpZHMsIHlvdSBjYW4gYWRkIGl0IGFmdGVyIHRoZSBQcm9qZWN0aW9uXG4gKiBvYmplY3QgaGFzIGJlZW4gY3JlYXRlZCB3aXRoIGBzZXRFeHRlbnRgLCBmb3IgZXhhbXBsZSxcbiAqIGBnZXQoJ0VQU0c6MTIzNCcpLnNldEV4dGVudChleHRlbnQpYC5cbiAqXG4gKiBJbiBhZGRpdGlvbiB0byBQcm9qNGpzIHN1cHBvcnQsIGFueSB0cmFuc2Zvcm0gZnVuY3Rpb25zIGNhbiBiZSBhZGRlZCB3aXRoXG4gKiB7QGxpbmsgbW9kdWxlOm9sL3Byb2ouYWRkQ29vcmRpbmF0ZVRyYW5zZm9ybXN9LiBUbyB1c2UgdGhpcywgeW91IG11c3QgZmlyc3QgY3JlYXRlXG4gKiBhIHtAbGluayBtb2R1bGU6b2wvcHJvai9Qcm9qZWN0aW9uflByb2plY3Rpb259IG9iamVjdCBmb3IgdGhlIG5ldyBwcm9qZWN0aW9uIGFuZCBhZGQgaXQgd2l0aFxuICoge0BsaW5rIG1vZHVsZTpvbC9wcm9qLmFkZFByb2plY3Rpb259LiBZb3UgY2FuIHRoZW4gYWRkIHRoZSBmb3J3YXJkIGFuZCBpbnZlcnNlXG4gKiBmdW5jdGlvbnMgd2l0aCB7QGxpbmsgbW9kdWxlOm9sL3Byb2ouYWRkQ29vcmRpbmF0ZVRyYW5zZm9ybXN9LiBTZWVcbiAqIGV4YW1wbGVzL3dtcy1jdXN0b20tcHJvaiBmb3IgYW4gZXhhbXBsZSBvZiB0aGlzLlxuICpcbiAqIE5vdGUgdGhhdCBpZiBubyB0cmFuc2Zvcm1zIGFyZSBuZWVkZWQgYW5kIHlvdSBvbmx5IG5lZWQgdG8gZGVmaW5lIHRoZVxuICogcHJvamVjdGlvbiwganVzdCBhZGQgYSB7QGxpbmsgbW9kdWxlOm9sL3Byb2ovUHJvamVjdGlvbn5Qcm9qZWN0aW9ufSB3aXRoXG4gKiB7QGxpbmsgbW9kdWxlOm9sL3Byb2ouYWRkUHJvamVjdGlvbn0uIFNlZSBleGFtcGxlcy93bXMtbm8tcHJvaiBmb3IgYW4gZXhhbXBsZSBvZlxuICogdGhpcy5cbiAqL1xuaW1wb3J0IFByb2plY3Rpb24gZnJvbSAnLi9wcm9qL1Byb2plY3Rpb24uanMnO1xuaW1wb3J0IHtcbiAgUFJPSkVDVElPTlMgYXMgRVBTRzM4NTdfUFJPSkVDVElPTlMsXG4gIGZyb21FUFNHNDMyNixcbiAgdG9FUFNHNDMyNixcbn0gZnJvbSAnLi9wcm9qL2Vwc2czODU3LmpzJztcbmltcG9ydCB7UFJPSkVDVElPTlMgYXMgRVBTRzQzMjZfUFJPSkVDVElPTlN9IGZyb20gJy4vcHJvai9lcHNnNDMyNi5qcyc7XG5pbXBvcnQge01FVEVSU19QRVJfVU5JVH0gZnJvbSAnLi9wcm9qL1VuaXRzLmpzJztcbmltcG9ydCB7XG4gIGFkZCBhcyBhZGRQcm9qLFxuICBjbGVhciBhcyBjbGVhclByb2osXG4gIGdldCBhcyBnZXRQcm9qLFxufSBmcm9tICcuL3Byb2ovcHJvamVjdGlvbnMuanMnO1xuaW1wb3J0IHtcbiAgYWRkIGFzIGFkZFRyYW5zZm9ybUZ1bmMsXG4gIGNsZWFyIGFzIGNsZWFyVHJhbnNmb3JtRnVuY3MsXG4gIGdldCBhcyBnZXRUcmFuc2Zvcm1GdW5jLFxufSBmcm9tICcuL3Byb2ovdHJhbnNmb3Jtcy5qcyc7XG5pbXBvcnQge2FwcGx5VHJhbnNmb3JtLCBnZXRXaWR0aH0gZnJvbSAnLi9leHRlbnQuanMnO1xuaW1wb3J0IHtjbGFtcCwgbW9kdWxvfSBmcm9tICcuL21hdGguanMnO1xuaW1wb3J0IHtlcXVhbHMsIGdldFdvcmxkc0F3YXl9IGZyb20gJy4vY29vcmRpbmF0ZS5qcyc7XG5pbXBvcnQge2dldERpc3RhbmNlfSBmcm9tICcuL3NwaGVyZS5qcyc7XG5pbXBvcnQge3dhcm59IGZyb20gJy4vY29uc29sZS5qcyc7XG5cbi8qKlxuICogQSBwcm9qZWN0aW9uIGFzIHtAbGluayBtb2R1bGU6b2wvcHJvai9Qcm9qZWN0aW9uflByb2plY3Rpb259LCBTUlMgaWRlbnRpZmllclxuICogc3RyaW5nIG9yIHVuZGVmaW5lZC5cbiAqIEB0eXBlZGVmIHtQcm9qZWN0aW9ufHN0cmluZ3x1bmRlZmluZWR9IFByb2plY3Rpb25MaWtlXG4gKiBAYXBpXG4gKi9cblxuLyoqXG4gKiBBIHRyYW5zZm9ybSBmdW5jdGlvbiBhY2NlcHRzIGFuIGFycmF5IG9mIGlucHV0IGNvb3JkaW5hdGUgdmFsdWVzLCBhbiBvcHRpb25hbFxuICogb3V0cHV0IGFycmF5LCBhbmQgYW4gb3B0aW9uYWwgZGltZW5zaW9uIChkZWZhdWx0IHNob3VsZCBiZSAyKS4gIFRoZSBmdW5jdGlvblxuICogdHJhbnNmb3JtcyB0aGUgaW5wdXQgY29vcmRpbmF0ZSB2YWx1ZXMsIHBvcHVsYXRlcyB0aGUgb3V0cHV0IGFycmF5LCBhbmRcbiAqIHJldHVybnMgdGhlIG91dHB1dCBhcnJheS5cbiAqXG4gKiBAdHlwZWRlZiB7ZnVuY3Rpb24oQXJyYXk8bnVtYmVyPiwgQXJyYXk8bnVtYmVyPj0sIG51bWJlcj0pOiBBcnJheTxudW1iZXI+fSBUcmFuc2Zvcm1GdW5jdGlvblxuICogQGFwaVxuICovXG5cbmV4cG9ydCB7TUVURVJTX1BFUl9VTklUfTtcblxuZXhwb3J0IHtQcm9qZWN0aW9ufTtcblxubGV0IHNob3dDb29yZGluYXRlV2FybmluZyA9IHRydWU7XG5cbi8qKlxuICogQHBhcmFtIHtib29sZWFufSBbZGlzYWJsZSA9IHRydWVdIERpc2FibGUgY29uc29sZSBpbmZvIGFib3V0IGB1c2VHZW9ncmFwaGljKClgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaXNhYmxlQ29vcmRpbmF0ZVdhcm5pbmcoZGlzYWJsZSkge1xuICBjb25zdCBoaWRlID0gZGlzYWJsZSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IGRpc2FibGU7XG4gIHNob3dDb29yZGluYXRlV2FybmluZyA9ICFoaWRlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gaW5wdXQgSW5wdXQgY29vcmRpbmF0ZSBhcnJheS5cbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gW291dHB1dF0gT3V0cHV0IGFycmF5IG9mIGNvb3JkaW5hdGUgdmFsdWVzLlxuICogQHJldHVybiB7QXJyYXk8bnVtYmVyPn0gT3V0cHV0IGNvb3JkaW5hdGUgYXJyYXkgKG5ldyBhcnJheSwgc2FtZSBjb29yZGluYXRlXG4gKiAgICAgdmFsdWVzKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsb25lVHJhbnNmb3JtKGlucHV0LCBvdXRwdXQpIHtcbiAgaWYgKG91dHB1dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGlpID0gaW5wdXQubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgICAgb3V0cHV0W2ldID0gaW5wdXRbaV07XG4gICAgfVxuICAgIG91dHB1dCA9IG91dHB1dDtcbiAgfSBlbHNlIHtcbiAgICBvdXRwdXQgPSBpbnB1dC5zbGljZSgpO1xuICB9XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbi8qKlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBpbnB1dCBJbnB1dCBjb29yZGluYXRlIGFycmF5LlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBbb3V0cHV0XSBPdXRwdXQgYXJyYXkgb2YgY29vcmRpbmF0ZSB2YWx1ZXMuXG4gKiBAcmV0dXJuIHtBcnJheTxudW1iZXI+fSBJbnB1dCBjb29yZGluYXRlIGFycmF5IChzYW1lIGFycmF5IGFzIGlucHV0KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aXR5VHJhbnNmb3JtKGlucHV0LCBvdXRwdXQpIHtcbiAgaWYgKG91dHB1dCAhPT0gdW5kZWZpbmVkICYmIGlucHV0ICE9PSBvdXRwdXQpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgaWkgPSBpbnB1dC5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgICBvdXRwdXRbaV0gPSBpbnB1dFtpXTtcbiAgICB9XG4gICAgaW5wdXQgPSBvdXRwdXQ7XG4gIH1cbiAgcmV0dXJuIGlucHV0O1xufVxuXG4vKipcbiAqIEFkZCBhIFByb2plY3Rpb24gb2JqZWN0IHRvIHRoZSBsaXN0IG9mIHN1cHBvcnRlZCBwcm9qZWN0aW9ucyB0aGF0IGNhbiBiZVxuICogbG9va2VkIHVwIGJ5IHRoZWlyIGNvZGUuXG4gKlxuICogQHBhcmFtIHtQcm9qZWN0aW9ufSBwcm9qZWN0aW9uIFByb2plY3Rpb24gaW5zdGFuY2UuXG4gKiBAYXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qZWN0aW9uKHByb2plY3Rpb24pIHtcbiAgYWRkUHJvaihwcm9qZWN0aW9uLmdldENvZGUoKSwgcHJvamVjdGlvbik7XG4gIGFkZFRyYW5zZm9ybUZ1bmMocHJvamVjdGlvbiwgcHJvamVjdGlvbiwgY2xvbmVUcmFuc2Zvcm0pO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXk8UHJvamVjdGlvbj59IHByb2plY3Rpb25zIFByb2plY3Rpb25zLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJvamVjdGlvbnMocHJvamVjdGlvbnMpIHtcbiAgcHJvamVjdGlvbnMuZm9yRWFjaChhZGRQcm9qZWN0aW9uKTtcbn1cblxuLyoqXG4gKiBGZXRjaGVzIGEgUHJvamVjdGlvbiBvYmplY3QgZm9yIHRoZSBjb2RlIHNwZWNpZmllZC5cbiAqXG4gKiBAcGFyYW0ge1Byb2plY3Rpb25MaWtlfSBwcm9qZWN0aW9uTGlrZSBFaXRoZXIgYSBjb2RlIHN0cmluZyB3aGljaCBpc1xuICogICAgIGEgY29tYmluYXRpb24gb2YgYXV0aG9yaXR5IGFuZCBpZGVudGlmaWVyIHN1Y2ggYXMgXCJFUFNHOjQzMjZcIiwgb3IgYW5cbiAqICAgICBleGlzdGluZyBwcm9qZWN0aW9uIG9iamVjdCwgb3IgdW5kZWZpbmVkLlxuICogQHJldHVybiB7UHJvamVjdGlvbnxudWxsfSBQcm9qZWN0aW9uIG9iamVjdCwgb3IgbnVsbCBpZiBub3QgaW4gbGlzdC5cbiAqIEBhcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldChwcm9qZWN0aW9uTGlrZSkge1xuICByZXR1cm4gdHlwZW9mIHByb2plY3Rpb25MaWtlID09PSAnc3RyaW5nJ1xuICAgID8gZ2V0UHJvaigvKiogQHR5cGUge3N0cmluZ30gKi8gKHByb2plY3Rpb25MaWtlKSlcbiAgICA6IC8qKiBAdHlwZSB7UHJvamVjdGlvbn0gKi8gKHByb2plY3Rpb25MaWtlKSB8fCBudWxsO1xufVxuXG4vKipcbiAqIEdldCB0aGUgcmVzb2x1dGlvbiBvZiB0aGUgcG9pbnQgaW4gZGVncmVlcyBvciBkaXN0YW5jZSB1bml0cy5cbiAqIEZvciBwcm9qZWN0aW9ucyB3aXRoIGRlZ3JlZXMgYXMgdGhlIHVuaXQgdGhpcyB3aWxsIHNpbXBseSByZXR1cm4gdGhlXG4gKiBwcm92aWRlZCByZXNvbHV0aW9uLiBGb3Igb3RoZXIgcHJvamVjdGlvbnMgdGhlIHBvaW50IHJlc29sdXRpb24gaXNcbiAqIGJ5IGRlZmF1bHQgZXN0aW1hdGVkIGJ5IHRyYW5zZm9ybWluZyB0aGUgYHBvaW50YCBwaXhlbCB0byBFUFNHOjQzMjYsXG4gKiBtZWFzdXJpbmcgaXRzIHdpZHRoIGFuZCBoZWlnaHQgb24gdGhlIG5vcm1hbCBzcGhlcmUsXG4gKiBhbmQgdGFraW5nIHRoZSBhdmVyYWdlIG9mIHRoZSB3aWR0aCBhbmQgaGVpZ2h0LlxuICogQSBjdXN0b20gZnVuY3Rpb24gY2FuIGJlIHByb3ZpZGVkIGZvciBhIHNwZWNpZmljIHByb2plY3Rpb24sIGVpdGhlclxuICogYnkgc2V0dGluZyB0aGUgYGdldFBvaW50UmVzb2x1dGlvbmAgb3B0aW9uIGluIHRoZVxuICoge0BsaW5rIG1vZHVsZTpvbC9wcm9qL1Byb2plY3Rpb25+UHJvamVjdGlvbn0gY29uc3RydWN0b3Igb3IgYnkgdXNpbmdcbiAqIHtAbGluayBtb2R1bGU6b2wvcHJvai9Qcm9qZWN0aW9uflByb2plY3Rpb24jc2V0R2V0UG9pbnRSZXNvbHV0aW9ufSB0byBjaGFuZ2UgYW4gZXhpc3RpbmdcbiAqIHByb2plY3Rpb24gb2JqZWN0LlxuICogQHBhcmFtIHtQcm9qZWN0aW9uTGlrZX0gcHJvamVjdGlvbiBUaGUgcHJvamVjdGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSByZXNvbHV0aW9uIE5vbWluYWwgcmVzb2x1dGlvbiBpbiBwcm9qZWN0aW9uIHVuaXRzLlxuICogQHBhcmFtIHtpbXBvcnQoXCIuL2Nvb3JkaW5hdGUuanNcIikuQ29vcmRpbmF0ZX0gcG9pbnQgUG9pbnQgdG8gZmluZCBhZGp1c3RlZCByZXNvbHV0aW9uIGF0LlxuICogQHBhcmFtIHtpbXBvcnQoXCIuL3Byb2ovVW5pdHMuanNcIikuVW5pdHN9IFt1bml0c10gVW5pdHMgdG8gZ2V0IHRoZSBwb2ludCByZXNvbHV0aW9uIGluLlxuICogRGVmYXVsdCBpcyB0aGUgcHJvamVjdGlvbidzIHVuaXRzLlxuICogQHJldHVybiB7bnVtYmVyfSBQb2ludCByZXNvbHV0aW9uLlxuICogQGFwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9pbnRSZXNvbHV0aW9uKHByb2plY3Rpb24sIHJlc29sdXRpb24sIHBvaW50LCB1bml0cykge1xuICBwcm9qZWN0aW9uID0gZ2V0KHByb2plY3Rpb24pO1xuICBsZXQgcG9pbnRSZXNvbHV0aW9uO1xuICBjb25zdCBnZXR0ZXIgPSBwcm9qZWN0aW9uLmdldFBvaW50UmVzb2x1dGlvbkZ1bmMoKTtcbiAgaWYgKGdldHRlcikge1xuICAgIHBvaW50UmVzb2x1dGlvbiA9IGdldHRlcihyZXNvbHV0aW9uLCBwb2ludCk7XG4gICAgaWYgKHVuaXRzICYmIHVuaXRzICE9PSBwcm9qZWN0aW9uLmdldFVuaXRzKCkpIHtcbiAgICAgIGNvbnN0IG1ldGVyc1BlclVuaXQgPSBwcm9qZWN0aW9uLmdldE1ldGVyc1BlclVuaXQoKTtcbiAgICAgIGlmIChtZXRlcnNQZXJVbml0KSB7XG4gICAgICAgIHBvaW50UmVzb2x1dGlvbiA9XG4gICAgICAgICAgKHBvaW50UmVzb2x1dGlvbiAqIG1ldGVyc1BlclVuaXQpIC8gTUVURVJTX1BFUl9VTklUW3VuaXRzXTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcHJvalVuaXRzID0gcHJvamVjdGlvbi5nZXRVbml0cygpO1xuICAgIGlmICgocHJvalVuaXRzID09ICdkZWdyZWVzJyAmJiAhdW5pdHMpIHx8IHVuaXRzID09ICdkZWdyZWVzJykge1xuICAgICAgcG9pbnRSZXNvbHV0aW9uID0gcmVzb2x1dGlvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRXN0aW1hdGUgcG9pbnQgcmVzb2x1dGlvbiBieSB0cmFuc2Zvcm1pbmcgdGhlIGNlbnRlciBwaXhlbCB0byBFUFNHOjQzMjYsXG4gICAgICAvLyBtZWFzdXJpbmcgaXRzIHdpZHRoIGFuZCBoZWlnaHQgb24gdGhlIG5vcm1hbCBzcGhlcmUsIGFuZCB0YWtpbmcgdGhlXG4gICAgICAvLyBhdmVyYWdlIG9mIHRoZSB3aWR0aCBhbmQgaGVpZ2h0LlxuICAgICAgY29uc3QgdG9FUFNHNDMyNiA9IGdldFRyYW5zZm9ybUZyb21Qcm9qZWN0aW9ucyhcbiAgICAgICAgcHJvamVjdGlvbixcbiAgICAgICAgZ2V0KCdFUFNHOjQzMjYnKSxcbiAgICAgICk7XG4gICAgICBpZiAodG9FUFNHNDMyNiA9PT0gaWRlbnRpdHlUcmFuc2Zvcm0gJiYgcHJvalVuaXRzICE9PSAnZGVncmVlcycpIHtcbiAgICAgICAgLy8gbm8gdHJhbnNmb3JtIGlzIGF2YWlsYWJsZVxuICAgICAgICBwb2ludFJlc29sdXRpb24gPSByZXNvbHV0aW9uICogcHJvamVjdGlvbi5nZXRNZXRlcnNQZXJVbml0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgdmVydGljZXMgPSBbXG4gICAgICAgICAgcG9pbnRbMF0gLSByZXNvbHV0aW9uIC8gMixcbiAgICAgICAgICBwb2ludFsxXSxcbiAgICAgICAgICBwb2ludFswXSArIHJlc29sdXRpb24gLyAyLFxuICAgICAgICAgIHBvaW50WzFdLFxuICAgICAgICAgIHBvaW50WzBdLFxuICAgICAgICAgIHBvaW50WzFdIC0gcmVzb2x1dGlvbiAvIDIsXG4gICAgICAgICAgcG9pbnRbMF0sXG4gICAgICAgICAgcG9pbnRbMV0gKyByZXNvbHV0aW9uIC8gMixcbiAgICAgICAgXTtcbiAgICAgICAgdmVydGljZXMgPSB0b0VQU0c0MzI2KHZlcnRpY2VzLCB2ZXJ0aWNlcywgMik7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gZ2V0RGlzdGFuY2UodmVydGljZXMuc2xpY2UoMCwgMiksIHZlcnRpY2VzLnNsaWNlKDIsIDQpKTtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gZ2V0RGlzdGFuY2UodmVydGljZXMuc2xpY2UoNCwgNiksIHZlcnRpY2VzLnNsaWNlKDYsIDgpKTtcbiAgICAgICAgcG9pbnRSZXNvbHV0aW9uID0gKHdpZHRoICsgaGVpZ2h0KSAvIDI7XG4gICAgICB9XG4gICAgICBjb25zdCBtZXRlcnNQZXJVbml0ID0gdW5pdHNcbiAgICAgICAgPyBNRVRFUlNfUEVSX1VOSVRbdW5pdHNdXG4gICAgICAgIDogcHJvamVjdGlvbi5nZXRNZXRlcnNQZXJVbml0KCk7XG4gICAgICBpZiAobWV0ZXJzUGVyVW5pdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBvaW50UmVzb2x1dGlvbiAvPSBtZXRlcnNQZXJVbml0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcG9pbnRSZXNvbHV0aW9uO1xufVxuXG4vKipcbiAqIFJlZ2lzdGVycyB0cmFuc2Zvcm1hdGlvbiBmdW5jdGlvbnMgdGhhdCBkb24ndCBhbHRlciBjb29yZGluYXRlcy4gVGhvc2UgYWxsb3dcbiAqIHRvIHRyYW5zZm9ybSBiZXR3ZWVuIHByb2plY3Rpb25zIHdpdGggZXF1YWwgbWVhbmluZy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5PFByb2plY3Rpb24+fSBwcm9qZWN0aW9ucyBQcm9qZWN0aW9ucy5cbiAqIEBhcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZEVxdWl2YWxlbnRQcm9qZWN0aW9ucyhwcm9qZWN0aW9ucykge1xuICBhZGRQcm9qZWN0aW9ucyhwcm9qZWN0aW9ucyk7XG4gIHByb2plY3Rpb25zLmZvckVhY2goZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgIHByb2plY3Rpb25zLmZvckVhY2goZnVuY3Rpb24gKGRlc3RpbmF0aW9uKSB7XG4gICAgICBpZiAoc291cmNlICE9PSBkZXN0aW5hdGlvbikge1xuICAgICAgICBhZGRUcmFuc2Zvcm1GdW5jKHNvdXJjZSwgZGVzdGluYXRpb24sIGNsb25lVHJhbnNmb3JtKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbi8qKlxuICogUmVnaXN0ZXJzIHRyYW5zZm9ybWF0aW9uIGZ1bmN0aW9ucyB0byBjb252ZXJ0IGNvb3JkaW5hdGVzIGluIGFueSBwcm9qZWN0aW9uXG4gKiBpbiBwcm9qZWN0aW9uMSB0byBhbnkgcHJvamVjdGlvbiBpbiBwcm9qZWN0aW9uMi5cbiAqXG4gKiBAcGFyYW0ge0FycmF5PFByb2plY3Rpb24+fSBwcm9qZWN0aW9uczEgUHJvamVjdGlvbnMgd2l0aCBlcXVhbFxuICogICAgIG1lYW5pbmcuXG4gKiBAcGFyYW0ge0FycmF5PFByb2plY3Rpb24+fSBwcm9qZWN0aW9uczIgUHJvamVjdGlvbnMgd2l0aCBlcXVhbFxuICogICAgIG1lYW5pbmcuXG4gKiBAcGFyYW0ge1RyYW5zZm9ybUZ1bmN0aW9ufSBmb3J3YXJkVHJhbnNmb3JtIFRyYW5zZm9ybWF0aW9uIGZyb20gYW55XG4gKiAgIHByb2plY3Rpb24gaW4gcHJvamVjdGlvbjEgdG8gYW55IHByb2plY3Rpb24gaW4gcHJvamVjdGlvbjIuXG4gKiBAcGFyYW0ge1RyYW5zZm9ybUZ1bmN0aW9ufSBpbnZlcnNlVHJhbnNmb3JtIFRyYW5zZm9ybSBmcm9tIGFueSBwcm9qZWN0aW9uXG4gKiAgIGluIHByb2plY3Rpb24yIHRvIGFueSBwcm9qZWN0aW9uIGluIHByb2plY3Rpb24xLi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZEVxdWl2YWxlbnRUcmFuc2Zvcm1zKFxuICBwcm9qZWN0aW9uczEsXG4gIHByb2plY3Rpb25zMixcbiAgZm9yd2FyZFRyYW5zZm9ybSxcbiAgaW52ZXJzZVRyYW5zZm9ybSxcbikge1xuICBwcm9qZWN0aW9uczEuZm9yRWFjaChmdW5jdGlvbiAocHJvamVjdGlvbjEpIHtcbiAgICBwcm9qZWN0aW9uczIuZm9yRWFjaChmdW5jdGlvbiAocHJvamVjdGlvbjIpIHtcbiAgICAgIGFkZFRyYW5zZm9ybUZ1bmMocHJvamVjdGlvbjEsIHByb2plY3Rpb24yLCBmb3J3YXJkVHJhbnNmb3JtKTtcbiAgICAgIGFkZFRyYW5zZm9ybUZ1bmMocHJvamVjdGlvbjIsIHByb2plY3Rpb24xLCBpbnZlcnNlVHJhbnNmb3JtKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbi8qKlxuICogQ2xlYXIgYWxsIGNhY2hlZCBwcm9qZWN0aW9ucyBhbmQgdHJhbnNmb3Jtcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyQWxsUHJvamVjdGlvbnMoKSB7XG4gIGNsZWFyUHJvaigpO1xuICBjbGVhclRyYW5zZm9ybUZ1bmNzKCk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtQcm9qZWN0aW9ufHN0cmluZ3x1bmRlZmluZWR9IHByb2plY3Rpb24gUHJvamVjdGlvbi5cbiAqIEBwYXJhbSB7c3RyaW5nfSBkZWZhdWx0Q29kZSBEZWZhdWx0IGNvZGUuXG4gKiBAcmV0dXJuIHtQcm9qZWN0aW9ufSBQcm9qZWN0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdGlvbihwcm9qZWN0aW9uLCBkZWZhdWx0Q29kZSkge1xuICBpZiAoIXByb2plY3Rpb24pIHtcbiAgICByZXR1cm4gZ2V0KGRlZmF1bHRDb2RlKTtcbiAgfVxuICBpZiAodHlwZW9mIHByb2plY3Rpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGdldChwcm9qZWN0aW9uKTtcbiAgfVxuICByZXR1cm4gLyoqIEB0eXBlIHtQcm9qZWN0aW9ufSAqLyAocHJvamVjdGlvbik7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHtAbGluayBtb2R1bGU6b2wvcHJvan5UcmFuc2Zvcm1GdW5jdGlvbn0gZnJvbSBhIHNpbXBsZSAyRCBjb29yZGluYXRlIHRyYW5zZm9ybVxuICogZnVuY3Rpb24uXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKGltcG9ydChcIi4vY29vcmRpbmF0ZS5qc1wiKS5Db29yZGluYXRlKTogaW1wb3J0KFwiLi9jb29yZGluYXRlLmpzXCIpLkNvb3JkaW5hdGV9IGNvb3JkVHJhbnNmb3JtIENvb3JkaW5hdGVcbiAqICAgICB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJuIHtUcmFuc2Zvcm1GdW5jdGlvbn0gVHJhbnNmb3JtIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVHJhbnNmb3JtRnJvbUNvb3JkaW5hdGVUcmFuc2Zvcm0oY29vcmRUcmFuc2Zvcm0pIHtcbiAgcmV0dXJuIChcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGlucHV0IElucHV0LlxuICAgICAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gW291dHB1dF0gT3V0cHV0LlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbZGltZW5zaW9uXSBEaW1lbnNpb24uXG4gICAgICogQHJldHVybiB7QXJyYXk8bnVtYmVyPn0gT3V0cHV0LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIChpbnB1dCwgb3V0cHV0LCBkaW1lbnNpb24pIHtcbiAgICAgIGNvbnN0IGxlbmd0aCA9IGlucHV0Lmxlbmd0aDtcbiAgICAgIGRpbWVuc2lvbiA9IGRpbWVuc2lvbiAhPT0gdW5kZWZpbmVkID8gZGltZW5zaW9uIDogMjtcbiAgICAgIG91dHB1dCA9IG91dHB1dCAhPT0gdW5kZWZpbmVkID8gb3V0cHV0IDogbmV3IEFycmF5KGxlbmd0aCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSBkaW1lbnNpb24pIHtcbiAgICAgICAgY29uc3QgcG9pbnQgPSBjb29yZFRyYW5zZm9ybShpbnB1dC5zbGljZShpLCBpICsgZGltZW5zaW9uKSk7XG4gICAgICAgIGNvbnN0IHBvaW50TGVuZ3RoID0gcG9pbnQubGVuZ3RoO1xuICAgICAgICBmb3IgKGxldCBqID0gMCwgamogPSBkaW1lbnNpb247IGogPCBqajsgKytqKSB7XG4gICAgICAgICAgb3V0cHV0W2kgKyBqXSA9IGogPj0gcG9pbnRMZW5ndGggPyBpbnB1dFtpICsgal0gOiBwb2ludFtqXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9XG4gICk7XG59XG5cbi8qKlxuICogUmVnaXN0ZXJzIGNvb3JkaW5hdGUgdHJhbnNmb3JtIGZ1bmN0aW9ucyB0byBjb252ZXJ0IGNvb3JkaW5hdGVzIGJldHdlZW4gdGhlXG4gKiBzb3VyY2UgcHJvamVjdGlvbiBhbmQgdGhlIGRlc3RpbmF0aW9uIHByb2plY3Rpb24uXG4gKiBUaGUgZm9yd2FyZCBhbmQgaW52ZXJzZSBmdW5jdGlvbnMgY29udmVydCBjb29yZGluYXRlIHBhaXJzOyB0aGlzIGZ1bmN0aW9uXG4gKiBjb252ZXJ0cyB0aGVzZSBpbnRvIHRoZSBmdW5jdGlvbnMgdXNlZCBpbnRlcm5hbGx5IHdoaWNoIGFsc28gaGFuZGxlXG4gKiBleHRlbnRzIGFuZCBjb29yZGluYXRlIGFycmF5cy5cbiAqXG4gKiBAcGFyYW0ge1Byb2plY3Rpb25MaWtlfSBzb3VyY2UgU291cmNlIHByb2plY3Rpb24uXG4gKiBAcGFyYW0ge1Byb2plY3Rpb25MaWtlfSBkZXN0aW5hdGlvbiBEZXN0aW5hdGlvbiBwcm9qZWN0aW9uLlxuICogQHBhcmFtIHtmdW5jdGlvbihpbXBvcnQoXCIuL2Nvb3JkaW5hdGUuanNcIikuQ29vcmRpbmF0ZSk6IGltcG9ydChcIi4vY29vcmRpbmF0ZS5qc1wiKS5Db29yZGluYXRlfSBmb3J3YXJkIFRoZSBmb3J3YXJkIHRyYW5zZm9ybVxuICogICAgIGZ1bmN0aW9uICh0aGF0IGlzLCBmcm9tIHRoZSBzb3VyY2UgcHJvamVjdGlvbiB0byB0aGUgZGVzdGluYXRpb25cbiAqICAgICBwcm9qZWN0aW9uKSB0aGF0IHRha2VzIGEge0BsaW5rIG1vZHVsZTpvbC9jb29yZGluYXRlfkNvb3JkaW5hdGV9IGFzIGFyZ3VtZW50IGFuZCByZXR1cm5zXG4gKiAgICAgdGhlIHRyYW5zZm9ybWVkIHtAbGluayBtb2R1bGU6b2wvY29vcmRpbmF0ZX5Db29yZGluYXRlfS5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oaW1wb3J0KFwiLi9jb29yZGluYXRlLmpzXCIpLkNvb3JkaW5hdGUpOiBpbXBvcnQoXCIuL2Nvb3JkaW5hdGUuanNcIikuQ29vcmRpbmF0ZX0gaW52ZXJzZSBUaGUgaW52ZXJzZSB0cmFuc2Zvcm1cbiAqICAgICBmdW5jdGlvbiAodGhhdCBpcywgZnJvbSB0aGUgZGVzdGluYXRpb24gcHJvamVjdGlvbiB0byB0aGUgc291cmNlXG4gKiAgICAgcHJvamVjdGlvbikgdGhhdCB0YWtlcyBhIHtAbGluayBtb2R1bGU6b2wvY29vcmRpbmF0ZX5Db29yZGluYXRlfSBhcyBhcmd1bWVudCBhbmQgcmV0dXJuc1xuICogICAgIHRoZSB0cmFuc2Zvcm1lZCB7QGxpbmsgbW9kdWxlOm9sL2Nvb3JkaW5hdGV+Q29vcmRpbmF0ZX0uIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gY2FuIG9ubHlcbiAqICAgICB0cmFuc2Zvcm0gbGVzcyBkaW1lbnNpb25zIHRoYW4gdGhlIGlucHV0IGNvb3JkaW5hdGUsIGl0IGlzIHN1cHBvc2VlZCB0byByZXR1cm4gYSBjb29yZGluYXRlXG4gKiAgICAgd2l0aCBvbmx5IHRoZSBsZW5ndGggaXQgY2FuIHRyYW5zZm9ybS4gVGhlIG90aGVyIGRpbWVuc2lvbnMgd2lsbCBiZSB0YWtlbiB1bmNoYW5nZWQgZnJvbSB0aGVcbiAqICAgICBzb3VyY2UuXG4gKiBAYXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRDb29yZGluYXRlVHJhbnNmb3Jtcyhzb3VyY2UsIGRlc3RpbmF0aW9uLCBmb3J3YXJkLCBpbnZlcnNlKSB7XG4gIGNvbnN0IHNvdXJjZVByb2ogPSBnZXQoc291cmNlKTtcbiAgY29uc3QgZGVzdFByb2ogPSBnZXQoZGVzdGluYXRpb24pO1xuICBhZGRUcmFuc2Zvcm1GdW5jKFxuICAgIHNvdXJjZVByb2osXG4gICAgZGVzdFByb2osXG4gICAgY3JlYXRlVHJhbnNmb3JtRnJvbUNvb3JkaW5hdGVUcmFuc2Zvcm0oZm9yd2FyZCksXG4gICk7XG4gIGFkZFRyYW5zZm9ybUZ1bmMoXG4gICAgZGVzdFByb2osXG4gICAgc291cmNlUHJvaixcbiAgICBjcmVhdGVUcmFuc2Zvcm1Gcm9tQ29vcmRpbmF0ZVRyYW5zZm9ybShpbnZlcnNlKSxcbiAgKTtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIGEgY29vcmRpbmF0ZSBmcm9tIGxvbmdpdHVkZS9sYXRpdHVkZSB0byBhIGRpZmZlcmVudCBwcm9qZWN0aW9uLlxuICogQHBhcmFtIHtpbXBvcnQoXCIuL2Nvb3JkaW5hdGUuanNcIikuQ29vcmRpbmF0ZX0gY29vcmRpbmF0ZSBDb29yZGluYXRlIGFzIGxvbmdpdHVkZSBhbmQgbGF0aXR1ZGUsIGkuZS5cbiAqICAgICBhbiBhcnJheSB3aXRoIGxvbmdpdHVkZSBhcyAxc3QgYW5kIGxhdGl0dWRlIGFzIDJuZCBlbGVtZW50LlxuICogQHBhcmFtIHtQcm9qZWN0aW9uTGlrZX0gW3Byb2plY3Rpb25dIFRhcmdldCBwcm9qZWN0aW9uLiBUaGVcbiAqICAgICBkZWZhdWx0IGlzIFdlYiBNZXJjYXRvciwgaS5lLiAnRVBTRzozODU3Jy5cbiAqIEByZXR1cm4ge2ltcG9ydChcIi4vY29vcmRpbmF0ZS5qc1wiKS5Db29yZGluYXRlfSBDb29yZGluYXRlIHByb2plY3RlZCB0byB0aGUgdGFyZ2V0IHByb2plY3Rpb24uXG4gKiBAYXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tTG9uTGF0KGNvb3JkaW5hdGUsIHByb2plY3Rpb24pIHtcbiAgZGlzYWJsZUNvb3JkaW5hdGVXYXJuaW5nKCk7XG4gIHJldHVybiB0cmFuc2Zvcm0oXG4gICAgY29vcmRpbmF0ZSxcbiAgICAnRVBTRzo0MzI2JyxcbiAgICBwcm9qZWN0aW9uICE9PSB1bmRlZmluZWQgPyBwcm9qZWN0aW9uIDogJ0VQU0c6Mzg1NycsXG4gICk7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtcyBhIGNvb3JkaW5hdGUgdG8gbG9uZ2l0dWRlL2xhdGl0dWRlLlxuICogQHBhcmFtIHtpbXBvcnQoXCIuL2Nvb3JkaW5hdGUuanNcIikuQ29vcmRpbmF0ZX0gY29vcmRpbmF0ZSBQcm9qZWN0ZWQgY29vcmRpbmF0ZS5cbiAqIEBwYXJhbSB7UHJvamVjdGlvbkxpa2V9IFtwcm9qZWN0aW9uXSBQcm9qZWN0aW9uIG9mIHRoZSBjb29yZGluYXRlLlxuICogICAgIFRoZSBkZWZhdWx0IGlzIFdlYiBNZXJjYXRvciwgaS5lLiAnRVBTRzozODU3Jy5cbiAqIEByZXR1cm4ge2ltcG9ydChcIi4vY29vcmRpbmF0ZS5qc1wiKS5Db29yZGluYXRlfSBDb29yZGluYXRlIGFzIGxvbmdpdHVkZSBhbmQgbGF0aXR1ZGUsIGkuZS4gYW4gYXJyYXlcbiAqICAgICB3aXRoIGxvbmdpdHVkZSBhcyAxc3QgYW5kIGxhdGl0dWRlIGFzIDJuZCBlbGVtZW50LlxuICogQGFwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9Mb25MYXQoY29vcmRpbmF0ZSwgcHJvamVjdGlvbikge1xuICBjb25zdCBsb25MYXQgPSB0cmFuc2Zvcm0oXG4gICAgY29vcmRpbmF0ZSxcbiAgICBwcm9qZWN0aW9uICE9PSB1bmRlZmluZWQgPyBwcm9qZWN0aW9uIDogJ0VQU0c6Mzg1NycsXG4gICAgJ0VQU0c6NDMyNicsXG4gICk7XG4gIGNvbnN0IGxvbiA9IGxvbkxhdFswXTtcbiAgaWYgKGxvbiA8IC0xODAgfHwgbG9uID4gMTgwKSB7XG4gICAgbG9uTGF0WzBdID0gbW9kdWxvKGxvbiArIDE4MCwgMzYwKSAtIDE4MDtcbiAgfVxuICByZXR1cm4gbG9uTGF0O1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiB0d28gcHJvamVjdGlvbnMgYXJlIHRoZSBzYW1lLCB0aGF0IGlzIGV2ZXJ5IGNvb3JkaW5hdGUgaW4gb25lXG4gKiBwcm9qZWN0aW9uIGRvZXMgcmVwcmVzZW50IHRoZSBzYW1lIGdlb2dyYXBoaWMgcG9pbnQgYXMgdGhlIHNhbWUgY29vcmRpbmF0ZSBpblxuICogdGhlIG90aGVyIHByb2plY3Rpb24uXG4gKlxuICogQHBhcmFtIHtQcm9qZWN0aW9ufSBwcm9qZWN0aW9uMSBQcm9qZWN0aW9uIDEuXG4gKiBAcGFyYW0ge1Byb2plY3Rpb259IHByb2plY3Rpb24yIFByb2plY3Rpb24gMi5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IEVxdWl2YWxlbnQuXG4gKiBAYXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlcXVpdmFsZW50KHByb2plY3Rpb24xLCBwcm9qZWN0aW9uMikge1xuICBpZiAocHJvamVjdGlvbjEgPT09IHByb2plY3Rpb24yKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgY29uc3QgZXF1YWxVbml0cyA9IHByb2plY3Rpb24xLmdldFVuaXRzKCkgPT09IHByb2plY3Rpb24yLmdldFVuaXRzKCk7XG4gIGlmIChwcm9qZWN0aW9uMS5nZXRDb2RlKCkgPT09IHByb2plY3Rpb24yLmdldENvZGUoKSkge1xuICAgIHJldHVybiBlcXVhbFVuaXRzO1xuICB9XG4gIGNvbnN0IHRyYW5zZm9ybUZ1bmMgPSBnZXRUcmFuc2Zvcm1Gcm9tUHJvamVjdGlvbnMocHJvamVjdGlvbjEsIHByb2plY3Rpb24yKTtcbiAgcmV0dXJuIHRyYW5zZm9ybUZ1bmMgPT09IGNsb25lVHJhbnNmb3JtICYmIGVxdWFsVW5pdHM7XG59XG5cbi8qKlxuICogU2VhcmNoZXMgaW4gdGhlIGxpc3Qgb2YgdHJhbnNmb3JtIGZ1bmN0aW9ucyBmb3IgdGhlIGZ1bmN0aW9uIGZvciBjb252ZXJ0aW5nXG4gKiBjb29yZGluYXRlcyBmcm9tIHRoZSBzb3VyY2UgcHJvamVjdGlvbiB0byB0aGUgZGVzdGluYXRpb24gcHJvamVjdGlvbi5cbiAqXG4gKiBAcGFyYW0ge1Byb2plY3Rpb259IHNvdXJjZVByb2plY3Rpb24gU291cmNlIFByb2plY3Rpb24gb2JqZWN0LlxuICogQHBhcmFtIHtQcm9qZWN0aW9ufSBkZXN0aW5hdGlvblByb2plY3Rpb24gRGVzdGluYXRpb24gUHJvamVjdGlvblxuICogICAgIG9iamVjdC5cbiAqIEByZXR1cm4ge1RyYW5zZm9ybUZ1bmN0aW9ufSBUcmFuc2Zvcm0gZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUcmFuc2Zvcm1Gcm9tUHJvamVjdGlvbnMoXG4gIHNvdXJjZVByb2plY3Rpb24sXG4gIGRlc3RpbmF0aW9uUHJvamVjdGlvbixcbikge1xuICBjb25zdCBzb3VyY2VDb2RlID0gc291cmNlUHJvamVjdGlvbi5nZXRDb2RlKCk7XG4gIGNvbnN0IGRlc3RpbmF0aW9uQ29kZSA9IGRlc3RpbmF0aW9uUHJvamVjdGlvbi5nZXRDb2RlKCk7XG4gIGxldCB0cmFuc2Zvcm1GdW5jID0gZ2V0VHJhbnNmb3JtRnVuYyhzb3VyY2VDb2RlLCBkZXN0aW5hdGlvbkNvZGUpO1xuICBpZiAoIXRyYW5zZm9ybUZ1bmMpIHtcbiAgICB0cmFuc2Zvcm1GdW5jID0gaWRlbnRpdHlUcmFuc2Zvcm07XG4gIH1cbiAgcmV0dXJuIHRyYW5zZm9ybUZ1bmM7XG59XG5cbi8qKlxuICogR2l2ZW4gdGhlIHByb2plY3Rpb24tbGlrZSBvYmplY3RzLCBzZWFyY2hlcyBmb3IgYSB0cmFuc2Zvcm1hdGlvblxuICogZnVuY3Rpb24gdG8gY29udmVydCBhIGNvb3JkaW5hdGVzIGFycmF5IGZyb20gdGhlIHNvdXJjZSBwcm9qZWN0aW9uIHRvIHRoZVxuICogZGVzdGluYXRpb24gcHJvamVjdGlvbi5cbiAqXG4gKiBAcGFyYW0ge1Byb2plY3Rpb25MaWtlfSBzb3VyY2UgU291cmNlLlxuICogQHBhcmFtIHtQcm9qZWN0aW9uTGlrZX0gZGVzdGluYXRpb24gRGVzdGluYXRpb24uXG4gKiBAcmV0dXJuIHtUcmFuc2Zvcm1GdW5jdGlvbn0gVHJhbnNmb3JtIGZ1bmN0aW9uLlxuICogQGFwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHJhbnNmb3JtKHNvdXJjZSwgZGVzdGluYXRpb24pIHtcbiAgY29uc3Qgc291cmNlUHJvamVjdGlvbiA9IGdldChzb3VyY2UpO1xuICBjb25zdCBkZXN0aW5hdGlvblByb2plY3Rpb24gPSBnZXQoZGVzdGluYXRpb24pO1xuICByZXR1cm4gZ2V0VHJhbnNmb3JtRnJvbVByb2plY3Rpb25zKHNvdXJjZVByb2plY3Rpb24sIGRlc3RpbmF0aW9uUHJvamVjdGlvbik7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtcyBhIGNvb3JkaW5hdGUgZnJvbSBzb3VyY2UgcHJvamVjdGlvbiB0byBkZXN0aW5hdGlvbiBwcm9qZWN0aW9uLlxuICogVGhpcyByZXR1cm5zIGEgbmV3IGNvb3JkaW5hdGUgKGFuZCBkb2VzIG5vdCBtb2RpZnkgdGhlIG9yaWdpbmFsKS5cbiAqXG4gKiBTZWUge0BsaW5rIG1vZHVsZTpvbC9wcm9qLnRyYW5zZm9ybUV4dGVudH0gZm9yIGV4dGVudCB0cmFuc2Zvcm1hdGlvbi5cbiAqIFNlZSB0aGUgdHJhbnNmb3JtIG1ldGhvZCBvZiB7QGxpbmsgbW9kdWxlOm9sL2dlb20vR2VvbWV0cnl+R2VvbWV0cnl9IGFuZCBpdHNcbiAqIHN1YmNsYXNzZXMgZm9yIGdlb21ldHJ5IHRyYW5zZm9ybXMuXG4gKlxuICogQHBhcmFtIHtpbXBvcnQoXCIuL2Nvb3JkaW5hdGUuanNcIikuQ29vcmRpbmF0ZX0gY29vcmRpbmF0ZSBDb29yZGluYXRlLlxuICogQHBhcmFtIHtQcm9qZWN0aW9uTGlrZX0gc291cmNlIFNvdXJjZSBwcm9qZWN0aW9uLWxpa2UuXG4gKiBAcGFyYW0ge1Byb2plY3Rpb25MaWtlfSBkZXN0aW5hdGlvbiBEZXN0aW5hdGlvbiBwcm9qZWN0aW9uLWxpa2UuXG4gKiBAcmV0dXJuIHtpbXBvcnQoXCIuL2Nvb3JkaW5hdGUuanNcIikuQ29vcmRpbmF0ZX0gQ29vcmRpbmF0ZS5cbiAqIEBhcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybShjb29yZGluYXRlLCBzb3VyY2UsIGRlc3RpbmF0aW9uKSB7XG4gIGNvbnN0IHRyYW5zZm9ybUZ1bmMgPSBnZXRUcmFuc2Zvcm0oc291cmNlLCBkZXN0aW5hdGlvbik7XG4gIHJldHVybiB0cmFuc2Zvcm1GdW5jKGNvb3JkaW5hdGUsIHVuZGVmaW5lZCwgY29vcmRpbmF0ZS5sZW5ndGgpO1xufVxuXG4vKipcbiAqIFRyYW5zZm9ybXMgYW4gZXh0ZW50IGZyb20gc291cmNlIHByb2plY3Rpb24gdG8gZGVzdGluYXRpb24gcHJvamVjdGlvbi4gIFRoaXNcbiAqIHJldHVybnMgYSBuZXcgZXh0ZW50IChhbmQgZG9lcyBub3QgbW9kaWZ5IHRoZSBvcmlnaW5hbCkuXG4gKlxuICogQHBhcmFtIHtpbXBvcnQoXCIuL2V4dGVudC5qc1wiKS5FeHRlbnR9IGV4dGVudCBUaGUgZXh0ZW50IHRvIHRyYW5zZm9ybS5cbiAqIEBwYXJhbSB7UHJvamVjdGlvbkxpa2V9IHNvdXJjZSBTb3VyY2UgcHJvamVjdGlvbi1saWtlLlxuICogQHBhcmFtIHtQcm9qZWN0aW9uTGlrZX0gZGVzdGluYXRpb24gRGVzdGluYXRpb24gcHJvamVjdGlvbi1saWtlLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdG9wc10gTnVtYmVyIG9mIHN0b3BzIHBlciBzaWRlIHVzZWQgZm9yIHRoZSB0cmFuc2Zvcm0uXG4gKiBCeSBkZWZhdWx0IG9ubHkgdGhlIGNvcm5lcnMgYXJlIHVzZWQuXG4gKiBAcmV0dXJuIHtpbXBvcnQoXCIuL2V4dGVudC5qc1wiKS5FeHRlbnR9IFRoZSB0cmFuc2Zvcm1lZCBleHRlbnQuXG4gKiBAYXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1FeHRlbnQoZXh0ZW50LCBzb3VyY2UsIGRlc3RpbmF0aW9uLCBzdG9wcykge1xuICBjb25zdCB0cmFuc2Zvcm1GdW5jID0gZ2V0VHJhbnNmb3JtKHNvdXJjZSwgZGVzdGluYXRpb24pO1xuICByZXR1cm4gYXBwbHlUcmFuc2Zvcm0oZXh0ZW50LCB0cmFuc2Zvcm1GdW5jLCB1bmRlZmluZWQsIHN0b3BzKTtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSBnaXZlbiBwb2ludCB0byB0aGUgZGVzdGluYXRpb24gcHJvamVjdGlvbi5cbiAqXG4gKiBAcGFyYW0ge2ltcG9ydChcIi4vY29vcmRpbmF0ZS5qc1wiKS5Db29yZGluYXRlfSBwb2ludCBQb2ludC5cbiAqIEBwYXJhbSB7UHJvamVjdGlvbn0gc291cmNlUHJvamVjdGlvbiBTb3VyY2UgcHJvamVjdGlvbi5cbiAqIEBwYXJhbSB7UHJvamVjdGlvbn0gZGVzdGluYXRpb25Qcm9qZWN0aW9uIERlc3RpbmF0aW9uIHByb2plY3Rpb24uXG4gKiBAcmV0dXJuIHtpbXBvcnQoXCIuL2Nvb3JkaW5hdGUuanNcIikuQ29vcmRpbmF0ZX0gUG9pbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1XaXRoUHJvamVjdGlvbnMoXG4gIHBvaW50LFxuICBzb3VyY2VQcm9qZWN0aW9uLFxuICBkZXN0aW5hdGlvblByb2plY3Rpb24sXG4pIHtcbiAgY29uc3QgdHJhbnNmb3JtRnVuYyA9IGdldFRyYW5zZm9ybUZyb21Qcm9qZWN0aW9ucyhcbiAgICBzb3VyY2VQcm9qZWN0aW9uLFxuICAgIGRlc3RpbmF0aW9uUHJvamVjdGlvbixcbiAgKTtcbiAgcmV0dXJuIHRyYW5zZm9ybUZ1bmMocG9pbnQpO1xufVxuXG4vKipcbiAqIEB0eXBlIHtQcm9qZWN0aW9ufG51bGx9XG4gKi9cbmxldCB1c2VyUHJvamVjdGlvbiA9IG51bGw7XG5cbi8qKlxuICogU2V0IHRoZSBwcm9qZWN0aW9uIGZvciBjb29yZGluYXRlcyBzdXBwbGllZCBmcm9tIGFuZCByZXR1cm5lZCBieSBBUEkgbWV0aG9kcy5cbiAqIFRoaXMgaW5jbHVkZXMgYWxsIEFQSSBtZXRob2RzIGV4Y2VwdCBmb3IgdGhvc2UgaW50ZXJhY3Rpbmcgd2l0aCB0aWxlIGdyaWRzLFxuICogcGx1cyB7QGxpbmsgaW1wb3J0KFwiLi9NYXAuanNcIikuRnJhbWVTdGF0ZX0gYW5kIHtAbGluayBpbXBvcnQoXCIuL1ZpZXcuanNcIikuU3RhdGV9LlxuICogQHBhcmFtIHtQcm9qZWN0aW9uTGlrZX0gcHJvamVjdGlvbiBUaGUgdXNlciBwcm9qZWN0aW9uLlxuICogQGFwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0VXNlclByb2plY3Rpb24ocHJvamVjdGlvbikge1xuICB1c2VyUHJvamVjdGlvbiA9IGdldChwcm9qZWN0aW9uKTtcbn1cblxuLyoqXG4gKiBDbGVhciB0aGUgdXNlciBwcm9qZWN0aW9uIGlmIHNldC5cbiAqIEBhcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyVXNlclByb2plY3Rpb24oKSB7XG4gIHVzZXJQcm9qZWN0aW9uID0gbnVsbDtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHByb2plY3Rpb24gZm9yIGNvb3JkaW5hdGVzIHN1cHBsaWVkIGZyb20gYW5kIHJldHVybmVkIGJ5IEFQSSBtZXRob2RzLlxuICogQHJldHVybiB7UHJvamVjdGlvbnxudWxsfSBUaGUgdXNlciBwcm9qZWN0aW9uIChvciBudWxsIGlmIG5vdCBzZXQpLlxuICogQGFwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlclByb2plY3Rpb24oKSB7XG4gIHJldHVybiB1c2VyUHJvamVjdGlvbjtcbn1cblxuLyoqXG4gKiBVc2UgZ2VvZ3JhcGhpYyBjb29yZGluYXRlcyAoV0dTLTg0IGRhdHVtKSBpbiBBUEkgbWV0aG9kcy5cbiAqIFRoaXMgaW5jbHVkZXMgYWxsIEFQSSBtZXRob2RzIGV4Y2VwdCBmb3IgdGhvc2UgaW50ZXJhY3Rpbmcgd2l0aCB0aWxlIGdyaWRzLFxuICogcGx1cyB7QGxpbmsgaW1wb3J0KFwiLi9NYXAuanNcIikuRnJhbWVTdGF0ZX0gYW5kIHtAbGluayBpbXBvcnQoXCIuL1ZpZXcuanNcIikuU3RhdGV9LlxuICogQGFwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlR2VvZ3JhcGhpYygpIHtcbiAgc2V0VXNlclByb2plY3Rpb24oJ0VQU0c6NDMyNicpO1xufVxuXG4vKipcbiAqIFJldHVybiBhIGNvb3JkaW5hdGUgdHJhbnNmb3JtZWQgaW50byB0aGUgdXNlciBwcm9qZWN0aW9uLiAgSWYgbm8gdXNlciBwcm9qZWN0aW9uXG4gKiBpcyBzZXQsIHRoZSBvcmlnaW5hbCBjb29yZGluYXRlIGlzIHJldHVybmVkLlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBjb29yZGluYXRlIElucHV0IGNvb3JkaW5hdGUuXG4gKiBAcGFyYW0ge1Byb2plY3Rpb25MaWtlfSBzb3VyY2VQcm9qZWN0aW9uIFRoZSBpbnB1dCBjb29yZGluYXRlIHByb2plY3Rpb24uXG4gKiBAcmV0dXJuIHtBcnJheTxudW1iZXI+fSBUaGUgaW5wdXQgY29vcmRpbmF0ZSBpbiB0aGUgdXNlciBwcm9qZWN0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9Vc2VyQ29vcmRpbmF0ZShjb29yZGluYXRlLCBzb3VyY2VQcm9qZWN0aW9uKSB7XG4gIGlmICghdXNlclByb2plY3Rpb24pIHtcbiAgICByZXR1cm4gY29vcmRpbmF0ZTtcbiAgfVxuICByZXR1cm4gdHJhbnNmb3JtKGNvb3JkaW5hdGUsIHNvdXJjZVByb2plY3Rpb24sIHVzZXJQcm9qZWN0aW9uKTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gYSBjb29yZGluYXRlIHRyYW5zZm9ybWVkIGZyb20gdGhlIHVzZXIgcHJvamVjdGlvbi4gIElmIG5vIHVzZXIgcHJvamVjdGlvblxuICogaXMgc2V0LCB0aGUgb3JpZ2luYWwgY29vcmRpbmF0ZSBpcyByZXR1cm5lZC5cbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gY29vcmRpbmF0ZSBJbnB1dCBjb29yZGluYXRlLlxuICogQHBhcmFtIHtQcm9qZWN0aW9uTGlrZX0gZGVzdFByb2plY3Rpb24gVGhlIGRlc3RpbmF0aW9uIHByb2plY3Rpb24uXG4gKiBAcmV0dXJuIHtBcnJheTxudW1iZXI+fSBUaGUgaW5wdXQgY29vcmRpbmF0ZSB0cmFuc2Zvcm1lZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21Vc2VyQ29vcmRpbmF0ZShjb29yZGluYXRlLCBkZXN0UHJvamVjdGlvbikge1xuICBpZiAoIXVzZXJQcm9qZWN0aW9uKSB7XG4gICAgaWYgKFxuICAgICAgc2hvd0Nvb3JkaW5hdGVXYXJuaW5nICYmXG4gICAgICAhZXF1YWxzKGNvb3JkaW5hdGUsIFswLCAwXSkgJiZcbiAgICAgIGNvb3JkaW5hdGVbMF0gPj0gLTE4MCAmJlxuICAgICAgY29vcmRpbmF0ZVswXSA8PSAxODAgJiZcbiAgICAgIGNvb3JkaW5hdGVbMV0gPj0gLTkwICYmXG4gICAgICBjb29yZGluYXRlWzFdIDw9IDkwXG4gICAgKSB7XG4gICAgICBzaG93Q29vcmRpbmF0ZVdhcm5pbmcgPSBmYWxzZTtcbiAgICAgIHdhcm4oXG4gICAgICAgICdDYWxsIHVzZUdlb2dyYXBoaWMoKSBmcm9tIG9sL3Byb2ogb25jZSB0byB3b3JrIHdpdGggW2xvbmdpdHVkZSwgbGF0aXR1ZGVdIGNvb3JkaW5hdGVzLicsXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gY29vcmRpbmF0ZTtcbiAgfVxuICByZXR1cm4gdHJhbnNmb3JtKGNvb3JkaW5hdGUsIHVzZXJQcm9qZWN0aW9uLCBkZXN0UHJvamVjdGlvbik7XG59XG5cbi8qKlxuICogUmV0dXJuIGFuIGV4dGVudCB0cmFuc2Zvcm1lZCBpbnRvIHRoZSB1c2VyIHByb2plY3Rpb24uICBJZiBubyB1c2VyIHByb2plY3Rpb25cbiAqIGlzIHNldCwgdGhlIG9yaWdpbmFsIGV4dGVudCBpcyByZXR1cm5lZC5cbiAqIEBwYXJhbSB7aW1wb3J0KFwiLi9leHRlbnQuanNcIikuRXh0ZW50fSBleHRlbnQgSW5wdXQgZXh0ZW50LlxuICogQHBhcmFtIHtQcm9qZWN0aW9uTGlrZX0gc291cmNlUHJvamVjdGlvbiBUaGUgaW5wdXQgZXh0ZW50IHByb2plY3Rpb24uXG4gKiBAcmV0dXJuIHtpbXBvcnQoXCIuL2V4dGVudC5qc1wiKS5FeHRlbnR9IFRoZSBpbnB1dCBleHRlbnQgaW4gdGhlIHVzZXIgcHJvamVjdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvVXNlckV4dGVudChleHRlbnQsIHNvdXJjZVByb2plY3Rpb24pIHtcbiAgaWYgKCF1c2VyUHJvamVjdGlvbikge1xuICAgIHJldHVybiBleHRlbnQ7XG4gIH1cbiAgcmV0dXJuIHRyYW5zZm9ybUV4dGVudChleHRlbnQsIHNvdXJjZVByb2plY3Rpb24sIHVzZXJQcm9qZWN0aW9uKTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gYW4gZXh0ZW50IHRyYW5zZm9ybWVkIGZyb20gdGhlIHVzZXIgcHJvamVjdGlvbi4gIElmIG5vIHVzZXIgcHJvamVjdGlvblxuICogaXMgc2V0LCB0aGUgb3JpZ2luYWwgZXh0ZW50IGlzIHJldHVybmVkLlxuICogQHBhcmFtIHtpbXBvcnQoXCIuL2V4dGVudC5qc1wiKS5FeHRlbnR9IGV4dGVudCBJbnB1dCBleHRlbnQuXG4gKiBAcGFyYW0ge1Byb2plY3Rpb25MaWtlfSBkZXN0UHJvamVjdGlvbiBUaGUgZGVzdGluYXRpb24gcHJvamVjdGlvbi5cbiAqIEByZXR1cm4ge2ltcG9ydChcIi4vZXh0ZW50LmpzXCIpLkV4dGVudH0gVGhlIGlucHV0IGV4dGVudCB0cmFuc2Zvcm1lZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21Vc2VyRXh0ZW50KGV4dGVudCwgZGVzdFByb2plY3Rpb24pIHtcbiAgaWYgKCF1c2VyUHJvamVjdGlvbikge1xuICAgIHJldHVybiBleHRlbnQ7XG4gIH1cbiAgcmV0dXJuIHRyYW5zZm9ybUV4dGVudChleHRlbnQsIHVzZXJQcm9qZWN0aW9uLCBkZXN0UHJvamVjdGlvbik7XG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSByZXNvbHV0aW9uIGluIHVzZXIgcHJvamVjdGlvbiB1bml0cyBwZXIgcGl4ZWwuIElmIG5vIHVzZXIgcHJvamVjdGlvblxuICogaXMgc2V0LCBvciBzb3VyY2Ugb3IgdXNlciBwcm9qZWN0aW9uIGFyZSBtaXNzaW5nIHVuaXRzLCB0aGUgb3JpZ2luYWwgcmVzb2x1dGlvblxuICogaXMgcmV0dXJuZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gcmVzb2x1dGlvbiBSZXNvbHV0aW9uIGluIGlucHV0IHByb2plY3Rpb24gdW5pdHMgcGVyIHBpeGVsLlxuICogQHBhcmFtIHtQcm9qZWN0aW9uTGlrZX0gc291cmNlUHJvamVjdGlvbiBUaGUgaW5wdXQgcHJvamVjdGlvbi5cbiAqIEByZXR1cm4ge251bWJlcn0gUmVzb2x1dGlvbiBpbiB1c2VyIHByb2plY3Rpb24gdW5pdHMgcGVyIHBpeGVsLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9Vc2VyUmVzb2x1dGlvbihyZXNvbHV0aW9uLCBzb3VyY2VQcm9qZWN0aW9uKSB7XG4gIGlmICghdXNlclByb2plY3Rpb24pIHtcbiAgICByZXR1cm4gcmVzb2x1dGlvbjtcbiAgfVxuICBjb25zdCBzb3VyY2VNZXRlcnNQZXJVbml0ID0gZ2V0KHNvdXJjZVByb2plY3Rpb24pLmdldE1ldGVyc1BlclVuaXQoKTtcbiAgY29uc3QgdXNlck1ldGVyc1BlclVuaXQgPSB1c2VyUHJvamVjdGlvbi5nZXRNZXRlcnNQZXJVbml0KCk7XG4gIHJldHVybiBzb3VyY2VNZXRlcnNQZXJVbml0ICYmIHVzZXJNZXRlcnNQZXJVbml0XG4gICAgPyAocmVzb2x1dGlvbiAqIHNvdXJjZU1ldGVyc1BlclVuaXQpIC8gdXNlck1ldGVyc1BlclVuaXRcbiAgICA6IHJlc29sdXRpb247XG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSByZXNvbHV0aW9uIGluIHVzZXIgcHJvamVjdGlvbiB1bml0cyBwZXIgcGl4ZWwuIElmIG5vIHVzZXIgcHJvamVjdGlvblxuICogaXMgc2V0LCBvciBzb3VyY2Ugb3IgdXNlciBwcm9qZWN0aW9uIGFyZSBtaXNzaW5nIHVuaXRzLCB0aGUgb3JpZ2luYWwgcmVzb2x1dGlvblxuICogaXMgcmV0dXJuZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gcmVzb2x1dGlvbiBSZXNvbHV0aW9uIGluIHVzZXIgcHJvamVjdGlvbiB1bml0cyBwZXIgcGl4ZWwuXG4gKiBAcGFyYW0ge1Byb2plY3Rpb25MaWtlfSBkZXN0UHJvamVjdGlvbiBUaGUgZGVzdGluYXRpb24gcHJvamVjdGlvbi5cbiAqIEByZXR1cm4ge251bWJlcn0gUmVzb2x1dGlvbiBpbiBkZXN0aW5hdGlvbiBwcm9qZWN0aW9uIHVuaXRzIHBlciBwaXhlbC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21Vc2VyUmVzb2x1dGlvbihyZXNvbHV0aW9uLCBkZXN0UHJvamVjdGlvbikge1xuICBpZiAoIXVzZXJQcm9qZWN0aW9uKSB7XG4gICAgcmV0dXJuIHJlc29sdXRpb247XG4gIH1cbiAgY29uc3QgZGVzdE1ldGVyc1BlclVuaXQgPSBnZXQoZGVzdFByb2plY3Rpb24pLmdldE1ldGVyc1BlclVuaXQoKTtcbiAgY29uc3QgdXNlck1ldGVyc1BlclVuaXQgPSB1c2VyUHJvamVjdGlvbi5nZXRNZXRlcnNQZXJVbml0KCk7XG4gIHJldHVybiBkZXN0TWV0ZXJzUGVyVW5pdCAmJiB1c2VyTWV0ZXJzUGVyVW5pdFxuICAgID8gKHJlc29sdXRpb24gKiB1c2VyTWV0ZXJzUGVyVW5pdCkgLyBkZXN0TWV0ZXJzUGVyVW5pdFxuICAgIDogcmVzb2x1dGlvbjtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgc2FmZSBjb29yZGluYXRlIHRyYW5zZm9ybSBmdW5jdGlvbiBmcm9tIGEgY29vcmRpbmF0ZSB0cmFuc2Zvcm0gZnVuY3Rpb24uXG4gKiBcIlNhZmVcIiBtZWFucyB0aGF0IGl0IGNhbiBoYW5kbGUgd3JhcHBpbmcgb2YgeC1jb29yZGluYXRlcyBmb3IgZ2xvYmFsIHByb2plY3Rpb25zLFxuICogYW5kIHRoYXQgY29vcmRpbmF0ZXMgZXhjZWVkaW5nIHRoZSBzb3VyY2UgcHJvamVjdGlvbiB2YWxpZGl0eSBleHRlbnQncyByYW5nZSB3aWxsIGJlXG4gKiBjbGFtcGVkIHRvIHRoZSB2YWxpZGl0eSByYW5nZS5cbiAqIEBwYXJhbSB7UHJvamVjdGlvbn0gc291cmNlUHJvaiBTb3VyY2UgcHJvamVjdGlvbi5cbiAqIEBwYXJhbSB7UHJvamVjdGlvbn0gZGVzdFByb2ogRGVzdGluYXRpb24gcHJvamVjdGlvbi5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oaW1wb3J0KFwiLi9jb29yZGluYXRlLmpzXCIpLkNvb3JkaW5hdGUpOiBpbXBvcnQoXCIuL2Nvb3JkaW5hdGUuanNcIikuQ29vcmRpbmF0ZX0gdHJhbnNmb3JtIFRyYW5zZm9ybSBmdW5jdGlvbiAoc291cmNlIHRvIGRlc3RpbmF0aW9uKS5cbiAqIEByZXR1cm4ge2Z1bmN0aW9uKGltcG9ydChcIi4vY29vcmRpbmF0ZS5qc1wiKS5Db29yZGluYXRlKTogaW1wb3J0KFwiLi9jb29yZGluYXRlLmpzXCIpLkNvb3JkaW5hdGV9IFNhZmUgdHJhbnNmb3JtIGZ1bmN0aW9uIChzb3VyY2UgdG8gZGVzdGluYXRpb24pLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2FmZUNvb3JkaW5hdGVUcmFuc2Zvcm0oc291cmNlUHJvaiwgZGVzdFByb2osIHRyYW5zZm9ybSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGNvb3JkKSB7XG4gICAgbGV0IHRyYW5zZm9ybWVkLCB3b3JsZHNBd2F5O1xuICAgIGlmIChzb3VyY2VQcm9qLmNhbldyYXBYKCkpIHtcbiAgICAgIGNvbnN0IHNvdXJjZUV4dGVudCA9IHNvdXJjZVByb2ouZ2V0RXh0ZW50KCk7XG4gICAgICBjb25zdCBzb3VyY2VFeHRlbnRXaWR0aCA9IGdldFdpZHRoKHNvdXJjZUV4dGVudCk7XG4gICAgICBjb29yZCA9IGNvb3JkLnNsaWNlKDApO1xuICAgICAgd29ybGRzQXdheSA9IGdldFdvcmxkc0F3YXkoY29vcmQsIHNvdXJjZVByb2osIHNvdXJjZUV4dGVudFdpZHRoKTtcbiAgICAgIGlmICh3b3JsZHNBd2F5KSB7XG4gICAgICAgIC8vIE1vdmUgeCB0byB0aGUgcmVhbCB3b3JsZFxuICAgICAgICBjb29yZFswXSA9IGNvb3JkWzBdIC0gd29ybGRzQXdheSAqIHNvdXJjZUV4dGVudFdpZHRoO1xuICAgICAgfVxuICAgICAgY29vcmRbMF0gPSBjbGFtcChjb29yZFswXSwgc291cmNlRXh0ZW50WzBdLCBzb3VyY2VFeHRlbnRbMl0pO1xuICAgICAgY29vcmRbMV0gPSBjbGFtcChjb29yZFsxXSwgc291cmNlRXh0ZW50WzFdLCBzb3VyY2VFeHRlbnRbM10pO1xuICAgICAgdHJhbnNmb3JtZWQgPSB0cmFuc2Zvcm0oY29vcmQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2Zvcm1lZCA9IHRyYW5zZm9ybShjb29yZCk7XG4gICAgfVxuICAgIGlmICh3b3JsZHNBd2F5ICYmIGRlc3RQcm9qLmNhbldyYXBYKCkpIHtcbiAgICAgIC8vIE1vdmUgdHJhbnNmb3JtZWQgY29vcmRpbmF0ZSBiYWNrIHRvIHRoZSBvZmZzZXQgd29ybGRcbiAgICAgIHRyYW5zZm9ybWVkWzBdICs9IHdvcmxkc0F3YXkgKiBnZXRXaWR0aChkZXN0UHJvai5nZXRFeHRlbnQoKSk7XG4gICAgfVxuICAgIHJldHVybiB0cmFuc2Zvcm1lZDtcbiAgfTtcbn1cblxuLyoqXG4gKiBBZGQgdHJhbnNmb3JtcyB0byBhbmQgZnJvbSBFUFNHOjQzMjYgYW5kIEVQU0c6Mzg1Ny4gIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkXG4gKiBieSB3aGVuIHRoaXMgbW9kdWxlIGlzIGV4ZWN1dGVkIGFuZCBzaG91bGQgb25seSBuZWVkIHRvIGJlIGNhbGxlZCBhZ2FpbiBhZnRlclxuICogYGNsZWFyQWxsUHJvamVjdGlvbnMoKWAgaXMgY2FsbGVkIChlLmcuIGluIHRlc3RzKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZENvbW1vbigpIHtcbiAgLy8gQWRkIHRyYW5zZm9ybWF0aW9ucyB0aGF0IGRvbid0IGFsdGVyIGNvb3JkaW5hdGVzIHRvIGNvbnZlcnQgd2l0aGluIHNldCBvZlxuICAvLyBwcm9qZWN0aW9ucyB3aXRoIGVxdWFsIG1lYW5pbmcuXG4gIGFkZEVxdWl2YWxlbnRQcm9qZWN0aW9ucyhFUFNHMzg1N19QUk9KRUNUSU9OUyk7XG4gIGFkZEVxdWl2YWxlbnRQcm9qZWN0aW9ucyhFUFNHNDMyNl9QUk9KRUNUSU9OUyk7XG4gIC8vIEFkZCB0cmFuc2Zvcm1hdGlvbnMgdG8gY29udmVydCBFUFNHOjQzMjYgbGlrZSBjb29yZGluYXRlcyB0byBFUFNHOjM4NTcgbGlrZVxuICAvLyBjb29yZGluYXRlcyBhbmQgYmFjay5cbiAgYWRkRXF1aXZhbGVudFRyYW5zZm9ybXMoXG4gICAgRVBTRzQzMjZfUFJPSkVDVElPTlMsXG4gICAgRVBTRzM4NTdfUFJPSkVDVElPTlMsXG4gICAgZnJvbUVQU0c0MzI2LFxuICAgIHRvRVBTRzQzMjYsXG4gICk7XG59XG5cbmFkZENvbW1vbigpO1xuIiwiLyoqXG4gKiBAbW9kdWxlIG9sL3Byb2ovUHJvamVjdGlvblxuICovXG5pbXBvcnQge01FVEVSU19QRVJfVU5JVH0gZnJvbSAnLi9Vbml0cy5qcyc7XG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gT3B0aW9uc1xuICogQHByb3BlcnR5IHtzdHJpbmd9IGNvZGUgVGhlIFNSUyBpZGVudGlmaWVyIGNvZGUsIGUuZy4gYEVQU0c6NDMyNmAuXG4gKiBAcHJvcGVydHkge2ltcG9ydChcIi4vVW5pdHMuanNcIikuVW5pdHN9IFt1bml0c10gVW5pdHMuIFJlcXVpcmVkIHVubGVzcyBhXG4gKiBwcm9qNCBwcm9qZWN0aW9uIGlzIGRlZmluZWQgZm9yIGBjb2RlYC5cbiAqIEBwcm9wZXJ0eSB7aW1wb3J0KFwiLi4vZXh0ZW50LmpzXCIpLkV4dGVudH0gW2V4dGVudF0gVGhlIHZhbGlkaXR5IGV4dGVudCBmb3IgdGhlIFNSUy5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbYXhpc09yaWVudGF0aW9uPSdlbnUnXSBUaGUgYXhpcyBvcmllbnRhdGlvbiBhcyBzcGVjaWZpZWQgaW4gUHJvajQuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFtnbG9iYWw9ZmFsc2VdIFdoZXRoZXIgdGhlIHByb2plY3Rpb24gaXMgdmFsaWQgZm9yIHRoZSB3aG9sZSBnbG9iZS5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbbWV0ZXJzUGVyVW5pdF0gVGhlIG1ldGVycyBwZXIgdW5pdCBmb3IgdGhlIFNSUy5cbiAqIElmIG5vdCBwcm92aWRlZCwgdGhlIGB1bml0c2AgYXJlIHVzZWQgdG8gZ2V0IHRoZSBtZXRlcnMgcGVyIHVuaXQgZnJvbSB0aGUge0BsaW5rIE1FVEVSU19QRVJfVU5JVH1cbiAqIGxvb2t1cCB0YWJsZS5cbiAqIEBwcm9wZXJ0eSB7aW1wb3J0KFwiLi4vZXh0ZW50LmpzXCIpLkV4dGVudH0gW3dvcmxkRXh0ZW50XSBUaGUgd29ybGQgZXh0ZW50IGZvciB0aGUgU1JTLlxuICogQHByb3BlcnR5IHtmdW5jdGlvbihudW1iZXIsIGltcG9ydChcIi4uL2Nvb3JkaW5hdGUuanNcIikuQ29vcmRpbmF0ZSk6bnVtYmVyfSBbZ2V0UG9pbnRSZXNvbHV0aW9uXVxuICogRnVuY3Rpb24gdG8gZGV0ZXJtaW5lIHJlc29sdXRpb24gYXQgYSBwb2ludC4gVGhlIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aXRoIGFcbiAqIGBudW1iZXJgIHZpZXcgcmVzb2x1dGlvbiBhbmQgYSB7QGxpbmsgbW9kdWxlOm9sL2Nvb3JkaW5hdGV+Q29vcmRpbmF0ZX0gYXMgYXJndW1lbnRzLCBhbmQgcmV0dXJuc1xuICogdGhlIGBudW1iZXJgIHJlc29sdXRpb24gaW4gcHJvamVjdGlvbiB1bml0cyBhdCB0aGUgcGFzc2VkIGNvb3JkaW5hdGUuIElmIHRoaXMgaXMgYHVuZGVmaW5lZGAsXG4gKiB0aGUgZGVmYXVsdCB7QGxpbmsgbW9kdWxlOm9sL3Byb2ouZ2V0UG9pbnRSZXNvbHV0aW9ufSBmdW5jdGlvbiB3aWxsIGJlIHVzZWQuXG4gKi9cblxuLyoqXG4gKiBAY2xhc3NkZXNjXG4gKiBQcm9qZWN0aW9uIGRlZmluaXRpb24gY2xhc3MuIE9uZSBvZiB0aGVzZSBpcyBjcmVhdGVkIGZvciBlYWNoIHByb2plY3Rpb25cbiAqIHN1cHBvcnRlZCBpbiB0aGUgYXBwbGljYXRpb24gYW5kIHN0b3JlZCBpbiB0aGUge0BsaW5rIG1vZHVsZTpvbC9wcm9qfSBuYW1lc3BhY2UuXG4gKiBZb3UgY2FuIHVzZSB0aGVzZSBpbiBhcHBsaWNhdGlvbnMsIGJ1dCB0aGlzIGlzIG5vdCByZXF1aXJlZCwgYXMgQVBJIHBhcmFtc1xuICogYW5kIG9wdGlvbnMgdXNlIHtAbGluayBtb2R1bGU6b2wvcHJvan5Qcm9qZWN0aW9uTGlrZX0gd2hpY2ggbWVhbnMgdGhlIHNpbXBsZSBzdHJpbmdcbiAqIGNvZGUgd2lsbCBzdWZmaWNlLlxuICpcbiAqIFlvdSBjYW4gdXNlIHtAbGluayBtb2R1bGU6b2wvcHJvai5nZXR9IHRvIHJldHJpZXZlIHRoZSBvYmplY3QgZm9yIGEgcGFydGljdWxhclxuICogcHJvamVjdGlvbi5cbiAqXG4gKiBUaGUgbGlicmFyeSBpbmNsdWRlcyBkZWZpbml0aW9ucyBmb3IgYEVQU0c6NDMyNmAgYW5kIGBFUFNHOjM4NTdgLCB0b2dldGhlclxuICogd2l0aCB0aGUgZm9sbG93aW5nIGFsaWFzZXM6XG4gKiAqIGBFUFNHOjQzMjZgOiBDUlM6ODQsIHVybjpvZ2M6ZGVmOmNyczpFUFNHOjYuNjo0MzI2LFxuICogICAgIHVybjpvZ2M6ZGVmOmNyczpPR0M6MS4zOkNSUzg0LCB1cm46b2djOmRlZjpjcnM6T0dDOjI6ODQsXG4gKiAgICAgaHR0cDovL3d3dy5vcGVuZ2lzLm5ldC9nbWwvc3JzL2Vwc2cueG1sIzQzMjYsXG4gKiAgICAgdXJuOngtb2djOmRlZjpjcnM6RVBTRzo0MzI2XG4gKiAqIGBFUFNHOjM4NTdgOiBFUFNHOjEwMjEwMCwgRVBTRzoxMDIxMTMsIEVQU0c6OTAwOTEzLFxuICogICAgIHVybjpvZ2M6ZGVmOmNyczpFUFNHOjYuMTg6MzozODU3LFxuICogICAgIGh0dHA6Ly93d3cub3Blbmdpcy5uZXQvZ21sL3Nycy9lcHNnLnhtbCMzODU3XG4gKlxuICogSWYgeW91IHVzZSBbcHJvajRqc10oaHR0cHM6Ly9naXRodWIuY29tL3Byb2o0anMvcHJvajRqcyksIGFsaWFzZXMgY2FuXG4gKiBiZSBhZGRlZCB1c2luZyBgcHJvajQuZGVmcygpYC4gQWZ0ZXIgYWxsIHJlcXVpcmVkIHByb2plY3Rpb24gZGVmaW5pdGlvbnMgYXJlXG4gKiBhZGRlZCwgY2FsbCB0aGUge0BsaW5rIG1vZHVsZTpvbC9wcm9qL3Byb2o0LnJlZ2lzdGVyfSBmdW5jdGlvbi5cbiAqXG4gKiBAYXBpXG4gKi9cbmNsYXNzIFByb2plY3Rpb24ge1xuICAvKipcbiAgICogQHBhcmFtIHtPcHRpb25zfSBvcHRpb25zIFByb2plY3Rpb24gb3B0aW9ucy5cbiAgICovXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5jb2RlXyA9IG9wdGlvbnMuY29kZTtcblxuICAgIC8qKlxuICAgICAqIFVuaXRzIG9mIHByb2plY3RlZCBjb29yZGluYXRlcy4gV2hlbiBzZXQgdG8gYFRJTEVfUElYRUxTYCwgYVxuICAgICAqIGB0aGlzLmV4dGVudF9gIGFuZCBgdGhpcy53b3JsZEV4dGVudF9gIG11c3QgYmUgY29uZmlndXJlZCBwcm9wZXJseSBmb3IgZWFjaFxuICAgICAqIHRpbGUuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdHlwZSB7aW1wb3J0KFwiLi9Vbml0cy5qc1wiKS5Vbml0c31cbiAgICAgKi9cbiAgICB0aGlzLnVuaXRzXyA9IC8qKiBAdHlwZSB7aW1wb3J0KFwiLi9Vbml0cy5qc1wiKS5Vbml0c30gKi8gKG9wdGlvbnMudW5pdHMpO1xuXG4gICAgLyoqXG4gICAgICogVmFsaWRpdHkgZXh0ZW50IG9mIHRoZSBwcm9qZWN0aW9uIGluIHByb2plY3RlZCBjb29yZGluYXRlcy4gRm9yIHByb2plY3Rpb25zXG4gICAgICogd2l0aCBgVElMRV9QSVhFTFNgIHVuaXRzLCB0aGlzIGlzIHRoZSBleHRlbnQgb2YgdGhlIHRpbGUgaW5cbiAgICAgKiB0aWxlIHBpeGVsIHNwYWNlLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHR5cGUge2ltcG9ydChcIi4uL2V4dGVudC5qc1wiKS5FeHRlbnR9XG4gICAgICovXG4gICAgdGhpcy5leHRlbnRfID0gb3B0aW9ucy5leHRlbnQgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuZXh0ZW50IDogbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEV4dGVudCBvZiB0aGUgd29ybGQgaW4gRVBTRzo0MzI2LiBGb3IgcHJvamVjdGlvbnMgd2l0aFxuICAgICAqIGBUSUxFX1BJWEVMU2AgdW5pdHMsIHRoaXMgaXMgdGhlIGV4dGVudCBvZiB0aGUgdGlsZSBpblxuICAgICAqIHByb2plY3RlZCBjb29yZGluYXRlIHNwYWNlLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHR5cGUge2ltcG9ydChcIi4uL2V4dGVudC5qc1wiKS5FeHRlbnR9XG4gICAgICovXG4gICAgdGhpcy53b3JsZEV4dGVudF8gPVxuICAgICAgb3B0aW9ucy53b3JsZEV4dGVudCAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy53b3JsZEV4dGVudCA6IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5heGlzT3JpZW50YXRpb25fID1cbiAgICAgIG9wdGlvbnMuYXhpc09yaWVudGF0aW9uICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmF4aXNPcmllbnRhdGlvbiA6ICdlbnUnO1xuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLmdsb2JhbF8gPSBvcHRpb25zLmdsb2JhbCAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5nbG9iYWwgOiBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5jYW5XcmFwWF8gPSAhISh0aGlzLmdsb2JhbF8gJiYgdGhpcy5leHRlbnRfKTtcblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHR5cGUge2Z1bmN0aW9uKG51bWJlciwgaW1wb3J0KFwiLi4vY29vcmRpbmF0ZS5qc1wiKS5Db29yZGluYXRlKTpudW1iZXJ8dW5kZWZpbmVkfVxuICAgICAqL1xuICAgIHRoaXMuZ2V0UG9pbnRSZXNvbHV0aW9uRnVuY18gPSBvcHRpb25zLmdldFBvaW50UmVzb2x1dGlvbjtcblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHR5cGUge2ltcG9ydChcIi4uL3RpbGVncmlkL1RpbGVHcmlkLmpzXCIpLmRlZmF1bHR9XG4gICAgICovXG4gICAgdGhpcy5kZWZhdWx0VGlsZUdyaWRfID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHR5cGUge251bWJlcnx1bmRlZmluZWR9XG4gICAgICovXG4gICAgdGhpcy5tZXRlcnNQZXJVbml0XyA9IG9wdGlvbnMubWV0ZXJzUGVyVW5pdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUaGUgcHJvamVjdGlvbiBpcyBzdWl0YWJsZSBmb3Igd3JhcHBpbmcgdGhlIHgtYXhpc1xuICAgKi9cbiAgY2FuV3JhcFgoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FuV3JhcFhfO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY29kZSBmb3IgdGhpcyBwcm9qZWN0aW9uLCBlLmcuICdFUFNHOjQzMjYnLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IENvZGUuXG4gICAqIEBhcGlcbiAgICovXG4gIGdldENvZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29kZV87XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB2YWxpZGl0eSBleHRlbnQgZm9yIHRoaXMgcHJvamVjdGlvbi5cbiAgICogQHJldHVybiB7aW1wb3J0KFwiLi4vZXh0ZW50LmpzXCIpLkV4dGVudH0gRXh0ZW50LlxuICAgKiBAYXBpXG4gICAqL1xuICBnZXRFeHRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXh0ZW50XztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHVuaXRzIG9mIHRoaXMgcHJvamVjdGlvbi5cbiAgICogQHJldHVybiB7aW1wb3J0KFwiLi9Vbml0cy5qc1wiKS5Vbml0c30gVW5pdHMuXG4gICAqIEBhcGlcbiAgICovXG4gIGdldFVuaXRzKCkge1xuICAgIHJldHVybiB0aGlzLnVuaXRzXztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGFtb3VudCBvZiBtZXRlcnMgcGVyIHVuaXQgb2YgdGhpcyBwcm9qZWN0aW9uLiAgSWYgdGhlIHByb2plY3Rpb24gaXNcbiAgICogbm90IGNvbmZpZ3VyZWQgd2l0aCBgbWV0ZXJzUGVyVW5pdGAgb3IgYSB1bml0cyBpZGVudGlmaWVyLCB0aGUgcmV0dXJuIGlzXG4gICAqIGB1bmRlZmluZWRgLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ8dW5kZWZpbmVkfSBNZXRlcnMuXG4gICAqIEBhcGlcbiAgICovXG4gIGdldE1ldGVyc1BlclVuaXQoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0ZXJzUGVyVW5pdF8gfHwgTUVURVJTX1BFUl9VTklUW3RoaXMudW5pdHNfXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHdvcmxkIGV4dGVudCBmb3IgdGhpcyBwcm9qZWN0aW9uLlxuICAgKiBAcmV0dXJuIHtpbXBvcnQoXCIuLi9leHRlbnQuanNcIikuRXh0ZW50fSBFeHRlbnQuXG4gICAqIEBhcGlcbiAgICovXG4gIGdldFdvcmxkRXh0ZW50KCkge1xuICAgIHJldHVybiB0aGlzLndvcmxkRXh0ZW50XztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGF4aXMgb3JpZW50YXRpb24gb2YgdGhpcyBwcm9qZWN0aW9uLlxuICAgKiBFeGFtcGxlIHZhbHVlcyBhcmU6XG4gICAqIGVudSAtIHRoZSBkZWZhdWx0IGVhc3RpbmcsIG5vcnRoaW5nLCBlbGV2YXRpb24uXG4gICAqIG5ldSAtIG5vcnRoaW5nLCBlYXN0aW5nLCB1cCAtIHVzZWZ1bCBmb3IgXCJsYXQvbG9uZ1wiIGdlb2dyYXBoaWMgY29vcmRpbmF0ZXMsXG4gICAqICAgICBvciBzb3V0aCBvcmllbnRhdGVkIHRyYW5zdmVyc2UgbWVyY2F0b3IuXG4gICAqIHdudSAtIHdlc3RpbmcsIG5vcnRoaW5nLCB1cCAtIHNvbWUgcGxhbmV0YXJ5IGNvb3JkaW5hdGUgc3lzdGVtcyBoYXZlXG4gICAqICAgICBcIndlc3QgcG9zaXRpdmVcIiBjb29yZGluYXRlIHN5c3RlbXNcbiAgICogQHJldHVybiB7c3RyaW5nfSBBeGlzIG9yaWVudGF0aW9uLlxuICAgKiBAYXBpXG4gICAqL1xuICBnZXRBeGlzT3JpZW50YXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYXhpc09yaWVudGF0aW9uXztcbiAgfVxuXG4gIC8qKlxuICAgKiBJcyB0aGlzIHByb2plY3Rpb24gYSBnbG9iYWwgcHJvamVjdGlvbiB3aGljaCBzcGFucyB0aGUgd2hvbGUgd29ybGQ/XG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFdoZXRoZXIgdGhlIHByb2plY3Rpb24gaXMgZ2xvYmFsLlxuICAgKiBAYXBpXG4gICAqL1xuICBpc0dsb2JhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nbG9iYWxfO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBpZiB0aGUgcHJvamVjdGlvbiBpcyBhIGdsb2JhbCBwcm9qZWN0aW9uIHdoaWNoIHNwYW5zIHRoZSB3aG9sZSB3b3JsZFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGdsb2JhbCBXaGV0aGVyIHRoZSBwcm9qZWN0aW9uIGlzIGdsb2JhbC5cbiAgICogQGFwaVxuICAgKi9cbiAgc2V0R2xvYmFsKGdsb2JhbCkge1xuICAgIHRoaXMuZ2xvYmFsXyA9IGdsb2JhbDtcbiAgICB0aGlzLmNhbldyYXBYXyA9ICEhKGdsb2JhbCAmJiB0aGlzLmV4dGVudF8pO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge2ltcG9ydChcIi4uL3RpbGVncmlkL1RpbGVHcmlkLmpzXCIpLmRlZmF1bHR9IFRoZSBkZWZhdWx0IHRpbGUgZ3JpZC5cbiAgICovXG4gIGdldERlZmF1bHRUaWxlR3JpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5kZWZhdWx0VGlsZUdyaWRfO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7aW1wb3J0KFwiLi4vdGlsZWdyaWQvVGlsZUdyaWQuanNcIikuZGVmYXVsdH0gdGlsZUdyaWQgVGhlIGRlZmF1bHQgdGlsZSBncmlkLlxuICAgKi9cbiAgc2V0RGVmYXVsdFRpbGVHcmlkKHRpbGVHcmlkKSB7XG4gICAgdGhpcy5kZWZhdWx0VGlsZUdyaWRfID0gdGlsZUdyaWQ7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSB2YWxpZGl0eSBleHRlbnQgZm9yIHRoaXMgcHJvamVjdGlvbi5cbiAgICogQHBhcmFtIHtpbXBvcnQoXCIuLi9leHRlbnQuanNcIikuRXh0ZW50fSBleHRlbnQgRXh0ZW50LlxuICAgKiBAYXBpXG4gICAqL1xuICBzZXRFeHRlbnQoZXh0ZW50KSB7XG4gICAgdGhpcy5leHRlbnRfID0gZXh0ZW50O1xuICAgIHRoaXMuY2FuV3JhcFhfID0gISEodGhpcy5nbG9iYWxfICYmIGV4dGVudCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSB3b3JsZCBleHRlbnQgZm9yIHRoaXMgcHJvamVjdGlvbi5cbiAgICogQHBhcmFtIHtpbXBvcnQoXCIuLi9leHRlbnQuanNcIikuRXh0ZW50fSB3b3JsZEV4dGVudCBXb3JsZCBleHRlbnRcbiAgICogICAgIFttaW5sb24sIG1pbmxhdCwgbWF4bG9uLCBtYXhsYXRdLlxuICAgKiBAYXBpXG4gICAqL1xuICBzZXRXb3JsZEV4dGVudCh3b3JsZEV4dGVudCkge1xuICAgIHRoaXMud29ybGRFeHRlbnRfID0gd29ybGRFeHRlbnQ7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBnZXRQb2ludFJlc29sdXRpb24gZnVuY3Rpb24gKHNlZSB7QGxpbmsgbW9kdWxlOm9sL3Byb2ouZ2V0UG9pbnRSZXNvbHV0aW9ufVxuICAgKiBmb3IgdGhpcyBwcm9qZWN0aW9uLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKG51bWJlciwgaW1wb3J0KFwiLi4vY29vcmRpbmF0ZS5qc1wiKS5Db29yZGluYXRlKTpudW1iZXJ9IGZ1bmMgRnVuY3Rpb25cbiAgICogQGFwaVxuICAgKi9cbiAgc2V0R2V0UG9pbnRSZXNvbHV0aW9uKGZ1bmMpIHtcbiAgICB0aGlzLmdldFBvaW50UmVzb2x1dGlvbkZ1bmNfID0gZnVuYztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1c3RvbSBwb2ludCByZXNvbHV0aW9uIGZ1bmN0aW9uIGZvciB0aGlzIHByb2plY3Rpb24gKGlmIHNldCkuXG4gICAqIEByZXR1cm4ge2Z1bmN0aW9uKG51bWJlciwgaW1wb3J0KFwiLi4vY29vcmRpbmF0ZS5qc1wiKS5Db29yZGluYXRlKTpudW1iZXJ8dW5kZWZpbmVkfSBUaGUgY3VzdG9tIHBvaW50XG4gICAqIHJlc29sdXRpb24gZnVuY3Rpb24gKGlmIHNldCkuXG4gICAqL1xuICBnZXRQb2ludFJlc29sdXRpb25GdW5jKCkge1xuICAgIHJldHVybiB0aGlzLmdldFBvaW50UmVzb2x1dGlvbkZ1bmNfO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Rpb247XG4iLCIvKipcbiAqIEBtb2R1bGUgb2wvcHJvai9Vbml0c1xuICovXG5cbi8qKlxuICogQHR5cGVkZWYgeydyYWRpYW5zJyB8ICdkZWdyZWVzJyB8ICdmdCcgfCAnbScgfCAncGl4ZWxzJyB8ICd0aWxlLXBpeGVscycgfCAndXMtZnQnfSBVbml0c1xuICogUHJvamVjdGlvbiB1bml0cy5cbiAqL1xuXG4vKipcbiAqIFNlZSBodHRwOi8vZHVmZi5lc3Mud2FzaGluZ3Rvbi5lZHUvZGF0YS9yYXN0ZXIvZHJnL2RvY3MvZ2VvdGlmZi50eHRcbiAqIEB0eXBlIHtPYmplY3Q8bnVtYmVyLCBVbml0cz59XG4gKi9cbmNvbnN0IHVuaXRCeUNvZGUgPSB7XG4gICc5MDAxJzogJ20nLFxuICAnOTAwMic6ICdmdCcsXG4gICc5MDAzJzogJ3VzLWZ0JyxcbiAgJzkxMDEnOiAncmFkaWFucycsXG4gICc5MTAyJzogJ2RlZ3JlZXMnLFxufTtcblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gY29kZSBVbml0IGNvZGUuXG4gKiBAcmV0dXJuIHtVbml0c30gVW5pdHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmcm9tQ29kZShjb2RlKSB7XG4gIHJldHVybiB1bml0QnlDb2RlW2NvZGVdO1xufVxuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IE1ldGVyc1BlclVuaXRMb29rdXBcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSByYWRpYW5zIFJhZGlhbnNcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBkZWdyZWVzIERlZ3JlZXNcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBmdCAgRmVldFxuICogQHByb3BlcnR5IHtudW1iZXJ9IG0gTWV0ZXJzXG4gKiBAcHJvcGVydHkge251bWJlcn0gdXMtZnQgVVMgZmVldFxuICovXG5cbi8qKlxuICogTWV0ZXJzIHBlciB1bml0IGxvb2t1cCB0YWJsZS5cbiAqIEBjb25zdFxuICogQHR5cGUge01ldGVyc1BlclVuaXRMb29rdXB9XG4gKiBAYXBpXG4gKi9cbmV4cG9ydCBjb25zdCBNRVRFUlNfUEVSX1VOSVQgPSB7XG4gIC8vIHVzZSB0aGUgcmFkaXVzIG9mIHRoZSBOb3JtYWwgc3BoZXJlXG4gICdyYWRpYW5zJzogNjM3MDk5NyAvICgyICogTWF0aC5QSSksXG4gICdkZWdyZWVzJzogKDIgKiBNYXRoLlBJICogNjM3MDk5NykgLyAzNjAsXG4gICdmdCc6IDAuMzA0OCxcbiAgJ20nOiAxLFxuICAndXMtZnQnOiAxMjAwIC8gMzkzNyxcbn07XG4iLCIvKipcbiAqIEBtb2R1bGUgb2wvcHJvai9lcHNnMzg1N1xuICovXG5pbXBvcnQgUHJvamVjdGlvbiBmcm9tICcuL1Byb2plY3Rpb24uanMnO1xuXG4vKipcbiAqIFJhZGl1cyBvZiBXR1M4NCBzcGhlcmVcbiAqXG4gKiBAY29uc3RcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBSQURJVVMgPSA2Mzc4MTM3O1xuXG4vKipcbiAqIEBjb25zdFxuICogQHR5cGUge251bWJlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IEhBTEZfU0laRSA9IE1hdGguUEkgKiBSQURJVVM7XG5cbi8qKlxuICogQGNvbnN0XG4gKiBAdHlwZSB7aW1wb3J0KFwiLi4vZXh0ZW50LmpzXCIpLkV4dGVudH1cbiAqL1xuZXhwb3J0IGNvbnN0IEVYVEVOVCA9IFstSEFMRl9TSVpFLCAtSEFMRl9TSVpFLCBIQUxGX1NJWkUsIEhBTEZfU0laRV07XG5cbi8qKlxuICogQGNvbnN0XG4gKiBAdHlwZSB7aW1wb3J0KFwiLi4vZXh0ZW50LmpzXCIpLkV4dGVudH1cbiAqL1xuZXhwb3J0IGNvbnN0IFdPUkxEX0VYVEVOVCA9IFstMTgwLCAtODUsIDE4MCwgODVdO1xuXG4vKipcbiAqIE1heGltdW0gc2FmZSB2YWx1ZSBpbiB5IGRpcmVjdGlvblxuICogQGNvbnN0XG4gKiBAdHlwZSB7bnVtYmVyfVxuICovXG5leHBvcnQgY29uc3QgTUFYX1NBRkVfWSA9IFJBRElVUyAqIE1hdGgubG9nKE1hdGgudGFuKE1hdGguUEkgLyAyKSk7XG5cbi8qKlxuICogQGNsYXNzZGVzY1xuICogUHJvamVjdGlvbiBvYmplY3QgZm9yIHdlYi9zcGhlcmljYWwgTWVyY2F0b3IgKEVQU0c6Mzg1NykuXG4gKi9cbmNsYXNzIEVQU0czODU3UHJvamVjdGlvbiBleHRlbmRzIFByb2plY3Rpb24ge1xuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvZGUgQ29kZS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGNvZGUpIHtcbiAgICBzdXBlcih7XG4gICAgICBjb2RlOiBjb2RlLFxuICAgICAgdW5pdHM6ICdtJyxcbiAgICAgIGV4dGVudDogRVhURU5ULFxuICAgICAgZ2xvYmFsOiB0cnVlLFxuICAgICAgd29ybGRFeHRlbnQ6IFdPUkxEX0VYVEVOVCxcbiAgICAgIGdldFBvaW50UmVzb2x1dGlvbjogZnVuY3Rpb24gKHJlc29sdXRpb24sIHBvaW50KSB7XG4gICAgICAgIHJldHVybiByZXNvbHV0aW9uIC8gTWF0aC5jb3NoKHBvaW50WzFdIC8gUkFESVVTKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbn1cblxuLyoqXG4gKiBQcm9qZWN0aW9ucyBlcXVhbCB0byBFUFNHOjM4NTcuXG4gKlxuICogQGNvbnN0XG4gKiBAdHlwZSB7QXJyYXk8aW1wb3J0KFwiLi9Qcm9qZWN0aW9uLmpzXCIpLmRlZmF1bHQ+fVxuICovXG5leHBvcnQgY29uc3QgUFJPSkVDVElPTlMgPSBbXG4gIG5ldyBFUFNHMzg1N1Byb2plY3Rpb24oJ0VQU0c6Mzg1NycpLFxuICBuZXcgRVBTRzM4NTdQcm9qZWN0aW9uKCdFUFNHOjEwMjEwMCcpLFxuICBuZXcgRVBTRzM4NTdQcm9qZWN0aW9uKCdFUFNHOjEwMjExMycpLFxuICBuZXcgRVBTRzM4NTdQcm9qZWN0aW9uKCdFUFNHOjkwMDkxMycpLFxuICBuZXcgRVBTRzM4NTdQcm9qZWN0aW9uKCdodHRwOi8vd3d3Lm9wZW5naXMubmV0L2RlZi9jcnMvRVBTRy8wLzM4NTcnKSxcbiAgbmV3IEVQU0czODU3UHJvamVjdGlvbignaHR0cDovL3d3dy5vcGVuZ2lzLm5ldC9nbWwvc3JzL2Vwc2cueG1sIzM4NTcnKSxcbl07XG5cbi8qKlxuICogVHJhbnNmb3JtYXRpb24gZnJvbSBFUFNHOjQzMjYgdG8gRVBTRzozODU3LlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gaW5wdXQgSW5wdXQgYXJyYXkgb2YgY29vcmRpbmF0ZSB2YWx1ZXMuXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IFtvdXRwdXRdIE91dHB1dCBhcnJheSBvZiBjb29yZGluYXRlIHZhbHVlcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbZGltZW5zaW9uXSBEaW1lbnNpb24gKGRlZmF1bHQgaXMgYDJgKS5cbiAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59IE91dHB1dCBhcnJheSBvZiBjb29yZGluYXRlIHZhbHVlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21FUFNHNDMyNihpbnB1dCwgb3V0cHV0LCBkaW1lbnNpb24pIHtcbiAgY29uc3QgbGVuZ3RoID0gaW5wdXQubGVuZ3RoO1xuICBkaW1lbnNpb24gPSBkaW1lbnNpb24gPiAxID8gZGltZW5zaW9uIDogMjtcbiAgaWYgKG91dHB1dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKGRpbWVuc2lvbiA+IDIpIHtcbiAgICAgIC8vIHByZXNlcnZlIHZhbHVlcyBiZXlvbmQgc2Vjb25kIGRpbWVuc2lvblxuICAgICAgb3V0cHV0ID0gaW5wdXQuc2xpY2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3V0cHV0ID0gbmV3IEFycmF5KGxlbmd0aCk7XG4gICAgfVxuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IGRpbWVuc2lvbikge1xuICAgIG91dHB1dFtpXSA9IChIQUxGX1NJWkUgKiBpbnB1dFtpXSkgLyAxODA7XG4gICAgbGV0IHkgPSBSQURJVVMgKiBNYXRoLmxvZyhNYXRoLnRhbigoTWF0aC5QSSAqICgraW5wdXRbaSArIDFdICsgOTApKSAvIDM2MCkpO1xuICAgIGlmICh5ID4gTUFYX1NBRkVfWSkge1xuICAgICAgeSA9IE1BWF9TQUZFX1k7XG4gICAgfSBlbHNlIGlmICh5IDwgLU1BWF9TQUZFX1kpIHtcbiAgICAgIHkgPSAtTUFYX1NBRkVfWTtcbiAgICB9XG4gICAgb3V0cHV0W2kgKyAxXSA9IHk7XG4gIH1cbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1hdGlvbiBmcm9tIEVQU0c6Mzg1NyB0byBFUFNHOjQzMjYuXG4gKlxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBpbnB1dCBJbnB1dCBhcnJheSBvZiBjb29yZGluYXRlIHZhbHVlcy5cbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gW291dHB1dF0gT3V0cHV0IGFycmF5IG9mIGNvb3JkaW5hdGUgdmFsdWVzLlxuICogQHBhcmFtIHtudW1iZXJ9IFtkaW1lbnNpb25dIERpbWVuc2lvbiAoZGVmYXVsdCBpcyBgMmApLlxuICogQHJldHVybiB7QXJyYXk8bnVtYmVyPn0gT3V0cHV0IGFycmF5IG9mIGNvb3JkaW5hdGUgdmFsdWVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9FUFNHNDMyNihpbnB1dCwgb3V0cHV0LCBkaW1lbnNpb24pIHtcbiAgY29uc3QgbGVuZ3RoID0gaW5wdXQubGVuZ3RoO1xuICBkaW1lbnNpb24gPSBkaW1lbnNpb24gPiAxID8gZGltZW5zaW9uIDogMjtcbiAgaWYgKG91dHB1dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKGRpbWVuc2lvbiA+IDIpIHtcbiAgICAgIC8vIHByZXNlcnZlIHZhbHVlcyBiZXlvbmQgc2Vjb25kIGRpbWVuc2lvblxuICAgICAgb3V0cHV0ID0gaW5wdXQuc2xpY2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3V0cHV0ID0gbmV3IEFycmF5KGxlbmd0aCk7XG4gICAgfVxuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IGRpbWVuc2lvbikge1xuICAgIG91dHB1dFtpXSA9ICgxODAgKiBpbnB1dFtpXSkgLyBIQUxGX1NJWkU7XG4gICAgb3V0cHV0W2kgKyAxXSA9XG4gICAgICAoMzYwICogTWF0aC5hdGFuKE1hdGguZXhwKGlucHV0W2kgKyAxXSAvIFJBRElVUykpKSAvIE1hdGguUEkgLSA5MDtcbiAgfVxuICByZXR1cm4gb3V0cHV0O1xufVxuIiwiLyoqXG4gKiBAbW9kdWxlIG9sL3Byb2ovZXBzZzQzMjZcbiAqL1xuaW1wb3J0IFByb2plY3Rpb24gZnJvbSAnLi9Qcm9qZWN0aW9uLmpzJztcblxuLyoqXG4gKiBTZW1pLW1ham9yIHJhZGl1cyBvZiB0aGUgV0dTODQgZWxsaXBzb2lkLlxuICpcbiAqIEBjb25zdFxuICogQHR5cGUge251bWJlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IFJBRElVUyA9IDYzNzgxMzc7XG5cbi8qKlxuICogRXh0ZW50IG9mIHRoZSBFUFNHOjQzMjYgcHJvamVjdGlvbiB3aGljaCBpcyB0aGUgd2hvbGUgd29ybGQuXG4gKlxuICogQGNvbnN0XG4gKiBAdHlwZSB7aW1wb3J0KFwiLi4vZXh0ZW50LmpzXCIpLkV4dGVudH1cbiAqL1xuZXhwb3J0IGNvbnN0IEVYVEVOVCA9IFstMTgwLCAtOTAsIDE4MCwgOTBdO1xuXG4vKipcbiAqIEBjb25zdFxuICogQHR5cGUge251bWJlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IE1FVEVSU19QRVJfVU5JVCA9IChNYXRoLlBJICogUkFESVVTKSAvIDE4MDtcblxuLyoqXG4gKiBAY2xhc3NkZXNjXG4gKiBQcm9qZWN0aW9uIG9iamVjdCBmb3IgV0dTODQgZ2VvZ3JhcGhpYyBjb29yZGluYXRlcyAoRVBTRzo0MzI2KS5cbiAqXG4gKiBOb3RlIHRoYXQgT3BlbkxheWVycyBkb2VzIG5vdCBzdHJpY3RseSBjb21wbHkgd2l0aCB0aGUgRVBTRyBkZWZpbml0aW9uLlxuICogVGhlIEVQU0cgcmVnaXN0cnkgZGVmaW5lcyA0MzI2IGFzIGEgQ1JTIGZvciBMYXRpdHVkZSxMb25naXR1ZGUgKHkseCkuXG4gKiBPcGVuTGF5ZXJzIHRyZWF0cyBFUFNHOjQzMjYgYXMgYSBwc2V1ZG8tcHJvamVjdGlvbiwgd2l0aCB4LHkgY29vcmRpbmF0ZXMuXG4gKi9cbmNsYXNzIEVQU0c0MzI2UHJvamVjdGlvbiBleHRlbmRzIFByb2plY3Rpb24ge1xuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvZGUgQ29kZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtheGlzT3JpZW50YXRpb25dIEF4aXMgb3JpZW50YXRpb24uXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb2RlLCBheGlzT3JpZW50YXRpb24pIHtcbiAgICBzdXBlcih7XG4gICAgICBjb2RlOiBjb2RlLFxuICAgICAgdW5pdHM6ICdkZWdyZWVzJyxcbiAgICAgIGV4dGVudDogRVhURU5ULFxuICAgICAgYXhpc09yaWVudGF0aW9uOiBheGlzT3JpZW50YXRpb24sXG4gICAgICBnbG9iYWw6IHRydWUsXG4gICAgICBtZXRlcnNQZXJVbml0OiBNRVRFUlNfUEVSX1VOSVQsXG4gICAgICB3b3JsZEV4dGVudDogRVhURU5ULFxuICAgIH0pO1xuICB9XG59XG5cbi8qKlxuICogUHJvamVjdGlvbnMgZXF1YWwgdG8gRVBTRzo0MzI2LlxuICpcbiAqIEBjb25zdFxuICogQHR5cGUge0FycmF5PGltcG9ydChcIi4vUHJvamVjdGlvbi5qc1wiKS5kZWZhdWx0Pn1cbiAqL1xuZXhwb3J0IGNvbnN0IFBST0pFQ1RJT05TID0gW1xuICBuZXcgRVBTRzQzMjZQcm9qZWN0aW9uKCdDUlM6ODQnKSxcbiAgbmV3IEVQU0c0MzI2UHJvamVjdGlvbignRVBTRzo0MzI2JywgJ25ldScpLFxuICBuZXcgRVBTRzQzMjZQcm9qZWN0aW9uKCd1cm46b2djOmRlZjpjcnM6T0dDOjEuMzpDUlM4NCcpLFxuICBuZXcgRVBTRzQzMjZQcm9qZWN0aW9uKCd1cm46b2djOmRlZjpjcnM6T0dDOjI6ODQnKSxcbiAgbmV3IEVQU0c0MzI2UHJvamVjdGlvbignaHR0cDovL3d3dy5vcGVuZ2lzLm5ldC9kZWYvY3JzL09HQy8xLjMvQ1JTODQnKSxcbiAgbmV3IEVQU0c0MzI2UHJvamVjdGlvbignaHR0cDovL3d3dy5vcGVuZ2lzLm5ldC9nbWwvc3JzL2Vwc2cueG1sIzQzMjYnLCAnbmV1JyksXG4gIG5ldyBFUFNHNDMyNlByb2plY3Rpb24oJ2h0dHA6Ly93d3cub3Blbmdpcy5uZXQvZGVmL2Nycy9FUFNHLzAvNDMyNicsICduZXUnKSxcbl07XG4iLCIvKipcbiAqIEBtb2R1bGUgb2wvcHJvai9wcm9qZWN0aW9uc1xuICovXG5cbi8qKlxuICogQHR5cGUge09iamVjdDxzdHJpbmcsIGltcG9ydChcIi4vUHJvamVjdGlvbi5qc1wiKS5kZWZhdWx0Pn1cbiAqL1xubGV0IGNhY2hlID0ge307XG5cbi8qKlxuICogQ2xlYXIgdGhlIHByb2plY3Rpb25zIGNhY2hlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xlYXIoKSB7XG4gIGNhY2hlID0ge307XG59XG5cbi8qKlxuICogR2V0IGEgY2FjaGVkIHByb2plY3Rpb24gYnkgY29kZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2RlIFRoZSBjb2RlIGZvciB0aGUgcHJvamVjdGlvbi5cbiAqIEByZXR1cm4ge2ltcG9ydChcIi4vUHJvamVjdGlvbi5qc1wiKS5kZWZhdWx0fSBUaGUgcHJvamVjdGlvbiAoaWYgY2FjaGVkKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldChjb2RlKSB7XG4gIHJldHVybiAoXG4gICAgY2FjaGVbY29kZV0gfHxcbiAgICBjYWNoZVtjb2RlLnJlcGxhY2UoL3VybjooeC0pP29nYzpkZWY6Y3JzOkVQU0c6KC4qOik/KFxcdyspJC8sICdFUFNHOiQzJyldIHx8XG4gICAgbnVsbFxuICApO1xufVxuXG4vKipcbiAqIEFkZCBhIHByb2plY3Rpb24gdG8gdGhlIGNhY2hlLlxuICogQHBhcmFtIHtzdHJpbmd9IGNvZGUgVGhlIHByb2plY3Rpb24gY29kZS5cbiAqIEBwYXJhbSB7aW1wb3J0KFwiLi9Qcm9qZWN0aW9uLmpzXCIpLmRlZmF1bHR9IHByb2plY3Rpb24gVGhlIHByb2plY3Rpb24gdG8gY2FjaGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGQoY29kZSwgcHJvamVjdGlvbikge1xuICBjYWNoZVtjb2RlXSA9IHByb2plY3Rpb247XG59XG4iLCIvKipcbiAqIEBtb2R1bGUgb2wvcHJvai90cmFuc2Zvcm1zXG4gKi9cbmltcG9ydCB7aXNFbXB0eX0gZnJvbSAnLi4vb2JqLmpzJztcblxuLyoqXG4gKiBAcHJpdmF0ZVxuICogQHR5cGUgeyFPYmplY3Q8c3RyaW5nLCBPYmplY3Q8c3RyaW5nLCBpbXBvcnQoXCIuLi9wcm9qLmpzXCIpLlRyYW5zZm9ybUZ1bmN0aW9uPj59XG4gKi9cbmxldCB0cmFuc2Zvcm1zID0ge307XG5cbi8qKlxuICogQ2xlYXIgdGhlIHRyYW5zZm9ybSBjYWNoZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyKCkge1xuICB0cmFuc2Zvcm1zID0ge307XG59XG5cbi8qKlxuICogUmVnaXN0ZXJzIGEgY29udmVyc2lvbiBmdW5jdGlvbiB0byBjb252ZXJ0IGNvb3JkaW5hdGVzIGZyb20gdGhlIHNvdXJjZVxuICogcHJvamVjdGlvbiB0byB0aGUgZGVzdGluYXRpb24gcHJvamVjdGlvbi5cbiAqXG4gKiBAcGFyYW0ge2ltcG9ydChcIi4vUHJvamVjdGlvbi5qc1wiKS5kZWZhdWx0fSBzb3VyY2UgU291cmNlLlxuICogQHBhcmFtIHtpbXBvcnQoXCIuL1Byb2plY3Rpb24uanNcIikuZGVmYXVsdH0gZGVzdGluYXRpb24gRGVzdGluYXRpb24uXG4gKiBAcGFyYW0ge2ltcG9ydChcIi4uL3Byb2ouanNcIikuVHJhbnNmb3JtRnVuY3Rpb259IHRyYW5zZm9ybUZuIFRyYW5zZm9ybS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZChzb3VyY2UsIGRlc3RpbmF0aW9uLCB0cmFuc2Zvcm1Gbikge1xuICBjb25zdCBzb3VyY2VDb2RlID0gc291cmNlLmdldENvZGUoKTtcbiAgY29uc3QgZGVzdGluYXRpb25Db2RlID0gZGVzdGluYXRpb24uZ2V0Q29kZSgpO1xuICBpZiAoIShzb3VyY2VDb2RlIGluIHRyYW5zZm9ybXMpKSB7XG4gICAgdHJhbnNmb3Jtc1tzb3VyY2VDb2RlXSA9IHt9O1xuICB9XG4gIHRyYW5zZm9ybXNbc291cmNlQ29kZV1bZGVzdGluYXRpb25Db2RlXSA9IHRyYW5zZm9ybUZuO1xufVxuXG4vKipcbiAqIFVucmVnaXN0ZXJzIHRoZSBjb252ZXJzaW9uIGZ1bmN0aW9uIHRvIGNvbnZlcnQgY29vcmRpbmF0ZXMgZnJvbSB0aGUgc291cmNlXG4gKiBwcm9qZWN0aW9uIHRvIHRoZSBkZXN0aW5hdGlvbiBwcm9qZWN0aW9uLiAgVGhpcyBtZXRob2QgaXMgdXNlZCB0byBjbGVhbiB1cFxuICogY2FjaGVkIHRyYW5zZm9ybXMgZHVyaW5nIHRlc3RpbmcuXG4gKlxuICogQHBhcmFtIHtpbXBvcnQoXCIuL1Byb2plY3Rpb24uanNcIikuZGVmYXVsdH0gc291cmNlIFNvdXJjZSBwcm9qZWN0aW9uLlxuICogQHBhcmFtIHtpbXBvcnQoXCIuL1Byb2plY3Rpb24uanNcIikuZGVmYXVsdH0gZGVzdGluYXRpb24gRGVzdGluYXRpb24gcHJvamVjdGlvbi5cbiAqIEByZXR1cm4ge2ltcG9ydChcIi4uL3Byb2ouanNcIikuVHJhbnNmb3JtRnVuY3Rpb259IHRyYW5zZm9ybUZuIFRoZSB1bnJlZ2lzdGVyZWQgdHJhbnNmb3JtLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlKHNvdXJjZSwgZGVzdGluYXRpb24pIHtcbiAgY29uc3Qgc291cmNlQ29kZSA9IHNvdXJjZS5nZXRDb2RlKCk7XG4gIGNvbnN0IGRlc3RpbmF0aW9uQ29kZSA9IGRlc3RpbmF0aW9uLmdldENvZGUoKTtcbiAgY29uc3QgdHJhbnNmb3JtID0gdHJhbnNmb3Jtc1tzb3VyY2VDb2RlXVtkZXN0aW5hdGlvbkNvZGVdO1xuICBkZWxldGUgdHJhbnNmb3Jtc1tzb3VyY2VDb2RlXVtkZXN0aW5hdGlvbkNvZGVdO1xuICBpZiAoaXNFbXB0eSh0cmFuc2Zvcm1zW3NvdXJjZUNvZGVdKSkge1xuICAgIGRlbGV0ZSB0cmFuc2Zvcm1zW3NvdXJjZUNvZGVdO1xuICB9XG4gIHJldHVybiB0cmFuc2Zvcm07XG59XG5cbi8qKlxuICogR2V0IGEgdHJhbnNmb3JtIGdpdmVuIGEgc291cmNlIGNvZGUgYW5kIGEgZGVzdGluYXRpb24gY29kZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2VDb2RlIFRoZSBjb2RlIGZvciB0aGUgc291cmNlIHByb2plY3Rpb24uXG4gKiBAcGFyYW0ge3N0cmluZ30gZGVzdGluYXRpb25Db2RlIFRoZSBjb2RlIGZvciB0aGUgZGVzdGluYXRpb24gcHJvamVjdGlvbi5cbiAqIEByZXR1cm4ge2ltcG9ydChcIi4uL3Byb2ouanNcIikuVHJhbnNmb3JtRnVuY3Rpb258dW5kZWZpbmVkfSBUaGUgdHJhbnNmb3JtIGZ1bmN0aW9uIChpZiBmb3VuZCkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXQoc291cmNlQ29kZSwgZGVzdGluYXRpb25Db2RlKSB7XG4gIGxldCB0cmFuc2Zvcm07XG4gIGlmIChzb3VyY2VDb2RlIGluIHRyYW5zZm9ybXMgJiYgZGVzdGluYXRpb25Db2RlIGluIHRyYW5zZm9ybXNbc291cmNlQ29kZV0pIHtcbiAgICB0cmFuc2Zvcm0gPSB0cmFuc2Zvcm1zW3NvdXJjZUNvZGVdW2Rlc3RpbmF0aW9uQ29kZV07XG4gIH1cbiAgcmV0dXJuIHRyYW5zZm9ybTtcbn1cbiIsIi8qKlxuICogQG1vZHVsZSBvbC9zcGhlcmVcbiAqL1xuaW1wb3J0IHt0b0RlZ3JlZXMsIHRvUmFkaWFuc30gZnJvbSAnLi9tYXRoLmpzJztcblxuLyoqXG4gKiBPYmplY3QgbGl0ZXJhbCB3aXRoIG9wdGlvbnMgZm9yIHRoZSB7QGxpbmsgZ2V0TGVuZ3RofSBvciB7QGxpbmsgZ2V0QXJlYX1cbiAqIGZ1bmN0aW9ucy5cbiAqIEB0eXBlZGVmIHtPYmplY3R9IFNwaGVyZU1ldHJpY09wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7aW1wb3J0KFwiLi9wcm9qLmpzXCIpLlByb2plY3Rpb25MaWtlfSBbcHJvamVjdGlvbj0nRVBTRzozODU3J11cbiAqIFByb2plY3Rpb24gb2YgdGhlICBnZW9tZXRyeS4gIEJ5IGRlZmF1bHQsIHRoZSBnZW9tZXRyeSBpcyBhc3N1bWVkIHRvIGJlIGluXG4gKiBXZWIgTWVyY2F0b3IuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW3JhZGl1cz02MzcxMDA4LjhdIFNwaGVyZSByYWRpdXMuICBCeSBkZWZhdWx0LCB0aGVcbiAqIFttZWFuIEVhcnRoIHJhZGl1c10oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRWFydGhfcmFkaXVzI01lYW5fcmFkaXVzKVxuICogZm9yIHRoZSBXR1M4NCBlbGxpcHNvaWQgaXMgdXNlZC5cbiAqL1xuXG4vKipcbiAqIFRoZSBtZWFuIEVhcnRoIHJhZGl1cyAoMS8zICogKDJhICsgYikpIGZvciB0aGUgV0dTODQgZWxsaXBzb2lkLlxuICogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRWFydGhfcmFkaXVzI01lYW5fcmFkaXVzXG4gKiBAdHlwZSB7bnVtYmVyfVxuICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9SQURJVVMgPSA2MzcxMDA4Ljg7XG5cbi8qKlxuICogR2V0IHRoZSBncmVhdCBjaXJjbGUgZGlzdGFuY2UgKGluIG1ldGVycykgYmV0d2VlbiB0d28gZ2VvZ3JhcGhpYyBjb29yZGluYXRlcy5cbiAqIEBwYXJhbSB7QXJyYXl9IGMxIFN0YXJ0aW5nIGNvb3JkaW5hdGUuXG4gKiBAcGFyYW0ge0FycmF5fSBjMiBFbmRpbmcgY29vcmRpbmF0ZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbcmFkaXVzXSBUaGUgc3BoZXJlIHJhZGl1cyB0byB1c2UuICBEZWZhdWx0cyB0byB0aGUgRWFydGgnc1xuICogICAgIG1lYW4gcmFkaXVzIHVzaW5nIHRoZSBXR1M4NCBlbGxpcHNvaWQuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBncmVhdCBjaXJjbGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgcG9pbnRzIChpbiBtZXRlcnMpLlxuICogQGFwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzdGFuY2UoYzEsIGMyLCByYWRpdXMpIHtcbiAgcmFkaXVzID0gcmFkaXVzIHx8IERFRkFVTFRfUkFESVVTO1xuICBjb25zdCBsYXQxID0gdG9SYWRpYW5zKGMxWzFdKTtcbiAgY29uc3QgbGF0MiA9IHRvUmFkaWFucyhjMlsxXSk7XG4gIGNvbnN0IGRlbHRhTGF0QnkyID0gKGxhdDIgLSBsYXQxKSAvIDI7XG4gIGNvbnN0IGRlbHRhTG9uQnkyID0gdG9SYWRpYW5zKGMyWzBdIC0gYzFbMF0pIC8gMjtcbiAgY29uc3QgYSA9XG4gICAgTWF0aC5zaW4oZGVsdGFMYXRCeTIpICogTWF0aC5zaW4oZGVsdGFMYXRCeTIpICtcbiAgICBNYXRoLnNpbihkZWx0YUxvbkJ5MikgKlxuICAgICAgTWF0aC5zaW4oZGVsdGFMb25CeTIpICpcbiAgICAgIE1hdGguY29zKGxhdDEpICpcbiAgICAgIE1hdGguY29zKGxhdDIpO1xuICByZXR1cm4gMiAqIHJhZGl1cyAqIE1hdGguYXRhbjIoTWF0aC5zcXJ0KGEpLCBNYXRoLnNxcnQoMSAtIGEpKTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGN1bXVsYXRpdmUgZ3JlYXQgY2lyY2xlIGxlbmd0aCBvZiBsaW5lc3RyaW5nIGNvb3JkaW5hdGVzIChnZW9ncmFwaGljKS5cbiAqIEBwYXJhbSB7QXJyYXl9IGNvb3JkaW5hdGVzIExpbmVzdHJpbmcgY29vcmRpbmF0ZXMuXG4gKiBAcGFyYW0ge251bWJlcn0gcmFkaXVzIFRoZSBzcGhlcmUgcmFkaXVzIHRvIHVzZS5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGxlbmd0aCAoaW4gbWV0ZXJzKS5cbiAqL1xuZnVuY3Rpb24gZ2V0TGVuZ3RoSW50ZXJuYWwoY29vcmRpbmF0ZXMsIHJhZGl1cykge1xuICBsZXQgbGVuZ3RoID0gMDtcbiAgZm9yIChsZXQgaSA9IDAsIGlpID0gY29vcmRpbmF0ZXMubGVuZ3RoOyBpIDwgaWkgLSAxOyArK2kpIHtcbiAgICBsZW5ndGggKz0gZ2V0RGlzdGFuY2UoY29vcmRpbmF0ZXNbaV0sIGNvb3JkaW5hdGVzW2kgKyAxXSwgcmFkaXVzKTtcbiAgfVxuICByZXR1cm4gbGVuZ3RoO1xufVxuXG4vKipcbiAqIEdldCB0aGUgc3BoZXJpY2FsIGxlbmd0aCBvZiBhIGdlb21ldHJ5LiAgVGhpcyBsZW5ndGggaXMgdGhlIHN1bSBvZiB0aGVcbiAqIGdyZWF0IGNpcmNsZSBkaXN0YW5jZXMgYmV0d2VlbiBjb29yZGluYXRlcy4gIEZvciBwb2x5Z29ucywgdGhlIGxlbmd0aCBpc1xuICogdGhlIHN1bSBvZiBhbGwgcmluZ3MuICBGb3IgcG9pbnRzLCB0aGUgbGVuZ3RoIGlzIHplcm8uICBGb3IgbXVsdGktcGFydFxuICogZ2VvbWV0cmllcywgdGhlIGxlbmd0aCBpcyB0aGUgc3VtIG9mIHRoZSBsZW5ndGggb2YgZWFjaCBwYXJ0LlxuICogQHBhcmFtIHtpbXBvcnQoXCIuL2dlb20vR2VvbWV0cnkuanNcIikuZGVmYXVsdH0gZ2VvbWV0cnkgQSBnZW9tZXRyeS5cbiAqIEBwYXJhbSB7U3BoZXJlTWV0cmljT3B0aW9uc30gW29wdGlvbnNdIE9wdGlvbnMgZm9yIHRoZVxuICogbGVuZ3RoIGNhbGN1bGF0aW9uLiAgQnkgZGVmYXVsdCwgZ2VvbWV0cmllcyBhcmUgYXNzdW1lZCB0byBiZSBpbiAnRVBTRzozODU3Jy5cbiAqIFlvdSBjYW4gY2hhbmdlIHRoaXMgYnkgcHJvdmlkaW5nIGEgYHByb2plY3Rpb25gIG9wdGlvbi5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIHNwaGVyaWNhbCBsZW5ndGggKGluIG1ldGVycykuXG4gKiBAYXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRMZW5ndGgoZ2VvbWV0cnksIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGNvbnN0IHJhZGl1cyA9IG9wdGlvbnMucmFkaXVzIHx8IERFRkFVTFRfUkFESVVTO1xuICBjb25zdCBwcm9qZWN0aW9uID0gb3B0aW9ucy5wcm9qZWN0aW9uIHx8ICdFUFNHOjM4NTcnO1xuICBjb25zdCB0eXBlID0gZ2VvbWV0cnkuZ2V0VHlwZSgpO1xuICBpZiAodHlwZSAhPT0gJ0dlb21ldHJ5Q29sbGVjdGlvbicpIHtcbiAgICBnZW9tZXRyeSA9IGdlb21ldHJ5LmNsb25lKCkudHJhbnNmb3JtKHByb2plY3Rpb24sICdFUFNHOjQzMjYnKTtcbiAgfVxuICBsZXQgbGVuZ3RoID0gMDtcbiAgbGV0IGNvb3JkaW5hdGVzLCBjb29yZHMsIGksIGlpLCBqLCBqajtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAnUG9pbnQnOlxuICAgIGNhc2UgJ011bHRpUG9pbnQnOiB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSAnTGluZVN0cmluZyc6XG4gICAgY2FzZSAnTGluZWFyUmluZyc6IHtcbiAgICAgIGNvb3JkaW5hdGVzID0gLyoqIEB0eXBlIHtpbXBvcnQoXCIuL2dlb20vU2ltcGxlR2VvbWV0cnkuanNcIikuZGVmYXVsdH0gKi8gKFxuICAgICAgICBnZW9tZXRyeVxuICAgICAgKS5nZXRDb29yZGluYXRlcygpO1xuICAgICAgbGVuZ3RoID0gZ2V0TGVuZ3RoSW50ZXJuYWwoY29vcmRpbmF0ZXMsIHJhZGl1cyk7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSAnTXVsdGlMaW5lU3RyaW5nJzpcbiAgICBjYXNlICdQb2x5Z29uJzoge1xuICAgICAgY29vcmRpbmF0ZXMgPSAvKiogQHR5cGUge2ltcG9ydChcIi4vZ2VvbS9TaW1wbGVHZW9tZXRyeS5qc1wiKS5kZWZhdWx0fSAqLyAoXG4gICAgICAgIGdlb21ldHJ5XG4gICAgICApLmdldENvb3JkaW5hdGVzKCk7XG4gICAgICBmb3IgKGkgPSAwLCBpaSA9IGNvb3JkaW5hdGVzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICAgICAgbGVuZ3RoICs9IGdldExlbmd0aEludGVybmFsKGNvb3JkaW5hdGVzW2ldLCByYWRpdXMpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgJ011bHRpUG9seWdvbic6IHtcbiAgICAgIGNvb3JkaW5hdGVzID0gLyoqIEB0eXBlIHtpbXBvcnQoXCIuL2dlb20vU2ltcGxlR2VvbWV0cnkuanNcIikuZGVmYXVsdH0gKi8gKFxuICAgICAgICBnZW9tZXRyeVxuICAgICAgKS5nZXRDb29yZGluYXRlcygpO1xuICAgICAgZm9yIChpID0gMCwgaWkgPSBjb29yZGluYXRlcy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgICAgIGNvb3JkcyA9IGNvb3JkaW5hdGVzW2ldO1xuICAgICAgICBmb3IgKGogPSAwLCBqaiA9IGNvb3Jkcy5sZW5ndGg7IGogPCBqajsgKytqKSB7XG4gICAgICAgICAgbGVuZ3RoICs9IGdldExlbmd0aEludGVybmFsKGNvb3Jkc1tqXSwgcmFkaXVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgJ0dlb21ldHJ5Q29sbGVjdGlvbic6IHtcbiAgICAgIGNvbnN0IGdlb21ldHJpZXMgPVxuICAgICAgICAvKiogQHR5cGUge2ltcG9ydChcIi4vZ2VvbS9HZW9tZXRyeUNvbGxlY3Rpb24uanNcIikuZGVmYXVsdH0gKi8gKFxuICAgICAgICAgIGdlb21ldHJ5XG4gICAgICAgICkuZ2V0R2VvbWV0cmllcygpO1xuICAgICAgZm9yIChpID0gMCwgaWkgPSBnZW9tZXRyaWVzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICAgICAgbGVuZ3RoICs9IGdldExlbmd0aChnZW9tZXRyaWVzW2ldLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBkZWZhdWx0OiB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIGdlb21ldHJ5IHR5cGU6ICcgKyB0eXBlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGxlbmd0aDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBzcGhlcmljYWwgYXJlYSBmb3IgYSBsaXN0IG9mIGNvb3JkaW5hdGVzLlxuICpcbiAqIFtSZWZlcmVuY2VdKGh0dHBzOi8vdHJzLmpwbC5uYXNhLmdvdi9oYW5kbGUvMjAxNC80MDQwOSlcbiAqIFJvYmVydC4gRy4gQ2hhbWJlcmxhaW4gYW5kIFdpbGxpYW0gSC4gRHVxdWV0dGUsIFwiU29tZSBBbGdvcml0aG1zIGZvclxuICogUG9seWdvbnMgb24gYSBTcGhlcmVcIiwgSlBMIFB1YmxpY2F0aW9uIDA3LTAzLCBKZXQgUHJvcHVsc2lvblxuICogTGFib3JhdG9yeSwgUGFzYWRlbmEsIENBLCBKdW5lIDIwMDdcbiAqXG4gKiBAcGFyYW0ge0FycmF5PGltcG9ydChcIi4vY29vcmRpbmF0ZS5qc1wiKS5Db29yZGluYXRlPn0gY29vcmRpbmF0ZXMgTGlzdCBvZiBjb29yZGluYXRlcyBvZiBhIGxpbmVhclxuICogcmluZy4gSWYgdGhlIHJpbmcgaXMgb3JpZW50ZWQgY2xvY2t3aXNlLCB0aGUgYXJlYSB3aWxsIGJlIHBvc2l0aXZlLFxuICogb3RoZXJ3aXNlIGl0IHdpbGwgYmUgbmVnYXRpdmUuXG4gKiBAcGFyYW0ge251bWJlcn0gcmFkaXVzIFRoZSBzcGhlcmUgcmFkaXVzLlxuICogQHJldHVybiB7bnVtYmVyfSBBcmVhIChpbiBzcXVhcmUgbWV0ZXJzKS5cbiAqL1xuZnVuY3Rpb24gZ2V0QXJlYUludGVybmFsKGNvb3JkaW5hdGVzLCByYWRpdXMpIHtcbiAgbGV0IGFyZWEgPSAwO1xuICBjb25zdCBsZW4gPSBjb29yZGluYXRlcy5sZW5ndGg7XG4gIGxldCB4MSA9IGNvb3JkaW5hdGVzW2xlbiAtIDFdWzBdO1xuICBsZXQgeTEgPSBjb29yZGluYXRlc1tsZW4gLSAxXVsxXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHgyID0gY29vcmRpbmF0ZXNbaV1bMF07XG4gICAgY29uc3QgeTIgPSBjb29yZGluYXRlc1tpXVsxXTtcbiAgICBhcmVhICs9XG4gICAgICB0b1JhZGlhbnMoeDIgLSB4MSkgKlxuICAgICAgKDIgKyBNYXRoLnNpbih0b1JhZGlhbnMoeTEpKSArIE1hdGguc2luKHRvUmFkaWFucyh5MikpKTtcbiAgICB4MSA9IHgyO1xuICAgIHkxID0geTI7XG4gIH1cbiAgcmV0dXJuIChhcmVhICogcmFkaXVzICogcmFkaXVzKSAvIDIuMDtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHNwaGVyaWNhbCBhcmVhIG9mIGEgZ2VvbWV0cnkuICBUaGlzIGlzIHRoZSBhcmVhIChpbiBtZXRlcnMpIGFzc3VtaW5nXG4gKiB0aGF0IHBvbHlnb24gZWRnZXMgYXJlIHNlZ21lbnRzIG9mIGdyZWF0IGNpcmNsZXMgb24gYSBzcGhlcmUuXG4gKiBAcGFyYW0ge2ltcG9ydChcIi4vZ2VvbS9HZW9tZXRyeS5qc1wiKS5kZWZhdWx0fSBnZW9tZXRyeSBBIGdlb21ldHJ5LlxuICogQHBhcmFtIHtTcGhlcmVNZXRyaWNPcHRpb25zfSBbb3B0aW9uc10gT3B0aW9ucyBmb3IgdGhlIGFyZWFcbiAqICAgICBjYWxjdWxhdGlvbi4gIEJ5IGRlZmF1bHQsIGdlb21ldHJpZXMgYXJlIGFzc3VtZWQgdG8gYmUgaW4gJ0VQU0c6Mzg1NycuXG4gKiAgICAgWW91IGNhbiBjaGFuZ2UgdGhpcyBieSBwcm92aWRpbmcgYSBgcHJvamVjdGlvbmAgb3B0aW9uLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgc3BoZXJpY2FsIGFyZWEgKGluIHNxdWFyZSBtZXRlcnMpLlxuICogQGFwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXJlYShnZW9tZXRyeSwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgY29uc3QgcmFkaXVzID0gb3B0aW9ucy5yYWRpdXMgfHwgREVGQVVMVF9SQURJVVM7XG4gIGNvbnN0IHByb2plY3Rpb24gPSBvcHRpb25zLnByb2plY3Rpb24gfHwgJ0VQU0c6Mzg1Nyc7XG4gIGNvbnN0IHR5cGUgPSBnZW9tZXRyeS5nZXRUeXBlKCk7XG4gIGlmICh0eXBlICE9PSAnR2VvbWV0cnlDb2xsZWN0aW9uJykge1xuICAgIGdlb21ldHJ5ID0gZ2VvbWV0cnkuY2xvbmUoKS50cmFuc2Zvcm0ocHJvamVjdGlvbiwgJ0VQU0c6NDMyNicpO1xuICB9XG4gIGxldCBhcmVhID0gMDtcbiAgbGV0IGNvb3JkaW5hdGVzLCBjb29yZHMsIGksIGlpLCBqLCBqajtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAnUG9pbnQnOlxuICAgIGNhc2UgJ011bHRpUG9pbnQnOlxuICAgIGNhc2UgJ0xpbmVTdHJpbmcnOlxuICAgIGNhc2UgJ011bHRpTGluZVN0cmluZyc6XG4gICAgY2FzZSAnTGluZWFyUmluZyc6IHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlICdQb2x5Z29uJzoge1xuICAgICAgY29vcmRpbmF0ZXMgPSAvKiogQHR5cGUge2ltcG9ydChcIi4vZ2VvbS9Qb2x5Z29uLmpzXCIpLmRlZmF1bHR9ICovIChcbiAgICAgICAgZ2VvbWV0cnlcbiAgICAgICkuZ2V0Q29vcmRpbmF0ZXMoKTtcbiAgICAgIGFyZWEgPSBNYXRoLmFicyhnZXRBcmVhSW50ZXJuYWwoY29vcmRpbmF0ZXNbMF0sIHJhZGl1cykpO1xuICAgICAgZm9yIChpID0gMSwgaWkgPSBjb29yZGluYXRlcy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgICAgIGFyZWEgLT0gTWF0aC5hYnMoZ2V0QXJlYUludGVybmFsKGNvb3JkaW5hdGVzW2ldLCByYWRpdXMpKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlICdNdWx0aVBvbHlnb24nOiB7XG4gICAgICBjb29yZGluYXRlcyA9IC8qKiBAdHlwZSB7aW1wb3J0KFwiLi9nZW9tL1NpbXBsZUdlb21ldHJ5LmpzXCIpLmRlZmF1bHR9ICovIChcbiAgICAgICAgZ2VvbWV0cnlcbiAgICAgICkuZ2V0Q29vcmRpbmF0ZXMoKTtcbiAgICAgIGZvciAoaSA9IDAsIGlpID0gY29vcmRpbmF0ZXMubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgICAgICBjb29yZHMgPSBjb29yZGluYXRlc1tpXTtcbiAgICAgICAgYXJlYSArPSBNYXRoLmFicyhnZXRBcmVhSW50ZXJuYWwoY29vcmRzWzBdLCByYWRpdXMpKTtcbiAgICAgICAgZm9yIChqID0gMSwgamogPSBjb29yZHMubGVuZ3RoOyBqIDwgamo7ICsraikge1xuICAgICAgICAgIGFyZWEgLT0gTWF0aC5hYnMoZ2V0QXJlYUludGVybmFsKGNvb3Jkc1tqXSwgcmFkaXVzKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlICdHZW9tZXRyeUNvbGxlY3Rpb24nOiB7XG4gICAgICBjb25zdCBnZW9tZXRyaWVzID1cbiAgICAgICAgLyoqIEB0eXBlIHtpbXBvcnQoXCIuL2dlb20vR2VvbWV0cnlDb2xsZWN0aW9uLmpzXCIpLmRlZmF1bHR9ICovIChcbiAgICAgICAgICBnZW9tZXRyeVxuICAgICAgICApLmdldEdlb21ldHJpZXMoKTtcbiAgICAgIGZvciAoaSA9IDAsIGlpID0gZ2VvbWV0cmllcy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgICAgIGFyZWEgKz0gZ2V0QXJlYShnZW9tZXRyaWVzW2ldLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBkZWZhdWx0OiB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIGdlb21ldHJ5IHR5cGU6ICcgKyB0eXBlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFyZWE7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgY29vcmRpbmF0ZSBhdCB0aGUgZ2l2ZW4gZGlzdGFuY2UgYW5kIGJlYXJpbmcgZnJvbSBgYzFgLlxuICpcbiAqIEBwYXJhbSB7aW1wb3J0KFwiLi9jb29yZGluYXRlLmpzXCIpLkNvb3JkaW5hdGV9IGMxIFRoZSBvcmlnaW4gcG9pbnQgKGBbbG9uLCBsYXRdYCBpbiBkZWdyZWVzKS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBkaXN0YW5jZSBUaGUgZ3JlYXQtY2lyY2xlIGRpc3RhbmNlIGJldHdlZW4gdGhlIG9yaWdpblxuICogICAgIHBvaW50IGFuZCB0aGUgdGFyZ2V0IHBvaW50LlxuICogQHBhcmFtIHtudW1iZXJ9IGJlYXJpbmcgVGhlIGJlYXJpbmcgKGluIHJhZGlhbnMpLlxuICogQHBhcmFtIHtudW1iZXJ9IFtyYWRpdXNdIFRoZSBzcGhlcmUgcmFkaXVzIHRvIHVzZS4gIERlZmF1bHRzIHRvIHRoZSBFYXJ0aCdzXG4gKiAgICAgbWVhbiByYWRpdXMgdXNpbmcgdGhlIFdHUzg0IGVsbGlwc29pZC5cbiAqIEByZXR1cm4ge2ltcG9ydChcIi4vY29vcmRpbmF0ZS5qc1wiKS5Db29yZGluYXRlfSBUaGUgdGFyZ2V0IHBvaW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gb2Zmc2V0KGMxLCBkaXN0YW5jZSwgYmVhcmluZywgcmFkaXVzKSB7XG4gIHJhZGl1cyA9IHJhZGl1cyB8fCBERUZBVUxUX1JBRElVUztcbiAgY29uc3QgbGF0MSA9IHRvUmFkaWFucyhjMVsxXSk7XG4gIGNvbnN0IGxvbjEgPSB0b1JhZGlhbnMoYzFbMF0pO1xuICBjb25zdCBkQnlSID0gZGlzdGFuY2UgLyByYWRpdXM7XG4gIGNvbnN0IGxhdCA9IE1hdGguYXNpbihcbiAgICBNYXRoLnNpbihsYXQxKSAqIE1hdGguY29zKGRCeVIpICtcbiAgICAgIE1hdGguY29zKGxhdDEpICogTWF0aC5zaW4oZEJ5UikgKiBNYXRoLmNvcyhiZWFyaW5nKSxcbiAgKTtcbiAgY29uc3QgbG9uID1cbiAgICBsb24xICtcbiAgICBNYXRoLmF0YW4yKFxuICAgICAgTWF0aC5zaW4oYmVhcmluZykgKiBNYXRoLnNpbihkQnlSKSAqIE1hdGguY29zKGxhdDEpLFxuICAgICAgTWF0aC5jb3MoZEJ5UikgLSBNYXRoLnNpbihsYXQxKSAqIE1hdGguc2luKGxhdCksXG4gICAgKTtcbiAgcmV0dXJuIFt0b0RlZ3JlZXMobG9uKSwgdG9EZWdyZWVzKGxhdCldO1xufVxuIiwiLyoqXG4gKiBAbW9kdWxlIG9sL3N0cmluZ1xuICovXG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IG51bWJlciBOdW1iZXIgdG8gYmUgZm9ybWF0dGVkXG4gKiBAcGFyYW0ge251bWJlcn0gd2lkdGggVGhlIGRlc2lyZWQgd2lkdGhcbiAqIEBwYXJhbSB7bnVtYmVyfSBbcHJlY2lzaW9uXSBQcmVjaXNpb24gb2YgdGhlIG91dHB1dCBzdHJpbmcgKGkuZS4gbnVtYmVyIG9mIGRlY2ltYWwgcGxhY2VzKVxuICogQHJldHVybiB7c3RyaW5nfSBGb3JtYXR0ZWQgc3RyaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYWROdW1iZXIobnVtYmVyLCB3aWR0aCwgcHJlY2lzaW9uKSB7XG4gIGNvbnN0IG51bWJlclN0cmluZyA9XG4gICAgcHJlY2lzaW9uICE9PSB1bmRlZmluZWQgPyBudW1iZXIudG9GaXhlZChwcmVjaXNpb24pIDogJycgKyBudW1iZXI7XG4gIGxldCBkZWNpbWFsID0gbnVtYmVyU3RyaW5nLmluZGV4T2YoJy4nKTtcbiAgZGVjaW1hbCA9IGRlY2ltYWwgPT09IC0xID8gbnVtYmVyU3RyaW5nLmxlbmd0aCA6IGRlY2ltYWw7XG4gIHJldHVybiBkZWNpbWFsID4gd2lkdGhcbiAgICA/IG51bWJlclN0cmluZ1xuICAgIDogbmV3IEFycmF5KDEgKyB3aWR0aCAtIGRlY2ltYWwpLmpvaW4oJzAnKSArIG51bWJlclN0cmluZztcbn1cblxuLyoqXG4gKiBBZGFwdGVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL29taWNoZWxzZW4vY29tcGFyZS12ZXJzaW9ucy9ibG9iL21hc3Rlci9pbmRleC5qc1xuICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSB2MSBGaXJzdCB2ZXJzaW9uXG4gKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IHYyIFNlY29uZCB2ZXJzaW9uXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFZhbHVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlVmVyc2lvbnModjEsIHYyKSB7XG4gIGNvbnN0IHMxID0gKCcnICsgdjEpLnNwbGl0KCcuJyk7XG4gIGNvbnN0IHMyID0gKCcnICsgdjIpLnNwbGl0KCcuJyk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBNYXRoLm1heChzMS5sZW5ndGgsIHMyLmxlbmd0aCk7IGkrKykge1xuICAgIGNvbnN0IG4xID0gcGFyc2VJbnQoczFbaV0gfHwgJzAnLCAxMCk7XG4gICAgY29uc3QgbjIgPSBwYXJzZUludChzMltpXSB8fCAnMCcsIDEwKTtcblxuICAgIGlmIChuMSA+IG4yKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgaWYgKG4yID4gbjEpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gMDtcbn1cbiIsIi8qKlxuICogQG1vZHVsZSBvbC90cmFuc2Zvcm1cbiAqL1xuaW1wb3J0IHthc3NlcnR9IGZyb20gJy4vYXNzZXJ0cy5qcyc7XG5cbi8qKlxuICogQW4gYXJyYXkgcmVwcmVzZW50aW5nIGFuIGFmZmluZSAyZCB0cmFuc2Zvcm1hdGlvbiBmb3IgdXNlIHdpdGhcbiAqIHtAbGluayBtb2R1bGU6b2wvdHJhbnNmb3JtfSBmdW5jdGlvbnMuIFRoZSBhcnJheSBoYXMgNiBlbGVtZW50cy5cbiAqIEB0eXBlZGVmIHshQXJyYXk8bnVtYmVyPn0gVHJhbnNmb3JtXG4gKiBAYXBpXG4gKi9cblxuLyoqXG4gKiBDb2xsZWN0aW9uIG9mIGFmZmluZSAyZCB0cmFuc2Zvcm1hdGlvbiBmdW5jdGlvbnMuIFRoZSBmdW5jdGlvbnMgd29yayBvbiBhblxuICogYXJyYXkgb2YgNiBlbGVtZW50cy4gVGhlIGVsZW1lbnQgb3JkZXIgaXMgY29tcGF0aWJsZSB3aXRoIHRoZSBbU1ZHTWF0cml4XG4gKiBpbnRlcmZhY2VdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9TVkdNYXRyaXgpIGFuZCBpc1xuICogYSBzdWJzZXQgKGVsZW1lbnRzIGEgdG8gZikgb2YgYSAzw5czIG1hdHJpeDpcbiAqIGBgYFxuICogWyBhIGMgZSBdXG4gKiBbIGIgZCBmIF1cbiAqIFsgMCAwIDEgXVxuICogYGBgXG4gKi9cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICogQHR5cGUge1RyYW5zZm9ybX1cbiAqL1xuY29uc3QgdG1wXyA9IG5ldyBBcnJheSg2KTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gaWRlbnRpdHkgdHJhbnNmb3JtLlxuICogQHJldHVybiB7IVRyYW5zZm9ybX0gSWRlbnRpdHkgdHJhbnNmb3JtLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlKCkge1xuICByZXR1cm4gWzEsIDAsIDAsIDEsIDAsIDBdO1xufVxuXG4vKipcbiAqIFJlc2V0cyB0aGUgZ2l2ZW4gdHJhbnNmb3JtIHRvIGFuIGlkZW50aXR5IHRyYW5zZm9ybS5cbiAqIEBwYXJhbSB7IVRyYW5zZm9ybX0gdHJhbnNmb3JtIFRyYW5zZm9ybS5cbiAqIEByZXR1cm4geyFUcmFuc2Zvcm19IFRyYW5zZm9ybS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0KHRyYW5zZm9ybSkge1xuICByZXR1cm4gc2V0KHRyYW5zZm9ybSwgMSwgMCwgMCwgMSwgMCwgMCk7XG59XG5cbi8qKlxuICogTXVsdGlwbHkgdGhlIHVuZGVybHlpbmcgbWF0cmljZXMgb2YgdHdvIHRyYW5zZm9ybXMgYW5kIHJldHVybiB0aGUgcmVzdWx0IGluXG4gKiB0aGUgZmlyc3QgdHJhbnNmb3JtLlxuICogQHBhcmFtIHshVHJhbnNmb3JtfSB0cmFuc2Zvcm0xIFRyYW5zZm9ybSBwYXJhbWV0ZXJzIG9mIG1hdHJpeCAxLlxuICogQHBhcmFtIHshVHJhbnNmb3JtfSB0cmFuc2Zvcm0yIFRyYW5zZm9ybSBwYXJhbWV0ZXJzIG9mIG1hdHJpeCAyLlxuICogQHJldHVybiB7IVRyYW5zZm9ybX0gdHJhbnNmb3JtMSBtdWx0aXBsaWVkIHdpdGggdHJhbnNmb3JtMi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5KHRyYW5zZm9ybTEsIHRyYW5zZm9ybTIpIHtcbiAgY29uc3QgYTEgPSB0cmFuc2Zvcm0xWzBdO1xuICBjb25zdCBiMSA9IHRyYW5zZm9ybTFbMV07XG4gIGNvbnN0IGMxID0gdHJhbnNmb3JtMVsyXTtcbiAgY29uc3QgZDEgPSB0cmFuc2Zvcm0xWzNdO1xuICBjb25zdCBlMSA9IHRyYW5zZm9ybTFbNF07XG4gIGNvbnN0IGYxID0gdHJhbnNmb3JtMVs1XTtcbiAgY29uc3QgYTIgPSB0cmFuc2Zvcm0yWzBdO1xuICBjb25zdCBiMiA9IHRyYW5zZm9ybTJbMV07XG4gIGNvbnN0IGMyID0gdHJhbnNmb3JtMlsyXTtcbiAgY29uc3QgZDIgPSB0cmFuc2Zvcm0yWzNdO1xuICBjb25zdCBlMiA9IHRyYW5zZm9ybTJbNF07XG4gIGNvbnN0IGYyID0gdHJhbnNmb3JtMls1XTtcblxuICB0cmFuc2Zvcm0xWzBdID0gYTEgKiBhMiArIGMxICogYjI7XG4gIHRyYW5zZm9ybTFbMV0gPSBiMSAqIGEyICsgZDEgKiBiMjtcbiAgdHJhbnNmb3JtMVsyXSA9IGExICogYzIgKyBjMSAqIGQyO1xuICB0cmFuc2Zvcm0xWzNdID0gYjEgKiBjMiArIGQxICogZDI7XG4gIHRyYW5zZm9ybTFbNF0gPSBhMSAqIGUyICsgYzEgKiBmMiArIGUxO1xuICB0cmFuc2Zvcm0xWzVdID0gYjEgKiBlMiArIGQxICogZjIgKyBmMTtcblxuICByZXR1cm4gdHJhbnNmb3JtMTtcbn1cblxuLyoqXG4gKiBTZXQgdGhlIHRyYW5zZm9ybSBjb21wb25lbnRzIGEtZiBvbiBhIGdpdmVuIHRyYW5zZm9ybS5cbiAqIEBwYXJhbSB7IVRyYW5zZm9ybX0gdHJhbnNmb3JtIFRyYW5zZm9ybS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBhIFRoZSBhIGNvbXBvbmVudCBvZiB0aGUgdHJhbnNmb3JtLlxuICogQHBhcmFtIHtudW1iZXJ9IGIgVGhlIGIgY29tcG9uZW50IG9mIHRoZSB0cmFuc2Zvcm0uXG4gKiBAcGFyYW0ge251bWJlcn0gYyBUaGUgYyBjb21wb25lbnQgb2YgdGhlIHRyYW5zZm9ybS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBkIFRoZSBkIGNvbXBvbmVudCBvZiB0aGUgdHJhbnNmb3JtLlxuICogQHBhcmFtIHtudW1iZXJ9IGUgVGhlIGUgY29tcG9uZW50IG9mIHRoZSB0cmFuc2Zvcm0uXG4gKiBAcGFyYW0ge251bWJlcn0gZiBUaGUgZiBjb21wb25lbnQgb2YgdGhlIHRyYW5zZm9ybS5cbiAqIEByZXR1cm4geyFUcmFuc2Zvcm19IE1hdHJpeCB3aXRoIHRyYW5zZm9ybSBhcHBsaWVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0KHRyYW5zZm9ybSwgYSwgYiwgYywgZCwgZSwgZikge1xuICB0cmFuc2Zvcm1bMF0gPSBhO1xuICB0cmFuc2Zvcm1bMV0gPSBiO1xuICB0cmFuc2Zvcm1bMl0gPSBjO1xuICB0cmFuc2Zvcm1bM10gPSBkO1xuICB0cmFuc2Zvcm1bNF0gPSBlO1xuICB0cmFuc2Zvcm1bNV0gPSBmO1xuICByZXR1cm4gdHJhbnNmb3JtO1xufVxuXG4vKipcbiAqIFNldCB0cmFuc2Zvcm0gb24gb25lIG1hdHJpeCBmcm9tIGFub3RoZXIgbWF0cml4LlxuICogQHBhcmFtIHshVHJhbnNmb3JtfSB0cmFuc2Zvcm0xIE1hdHJpeCB0byBzZXQgdHJhbnNmb3JtIHRvLlxuICogQHBhcmFtIHshVHJhbnNmb3JtfSB0cmFuc2Zvcm0yIE1hdHJpeCB0byBzZXQgdHJhbnNmb3JtIGZyb20uXG4gKiBAcmV0dXJuIHshVHJhbnNmb3JtfSB0cmFuc2Zvcm0xIHdpdGggdHJhbnNmb3JtIGZyb20gdHJhbnNmb3JtMiBhcHBsaWVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0RnJvbUFycmF5KHRyYW5zZm9ybTEsIHRyYW5zZm9ybTIpIHtcbiAgdHJhbnNmb3JtMVswXSA9IHRyYW5zZm9ybTJbMF07XG4gIHRyYW5zZm9ybTFbMV0gPSB0cmFuc2Zvcm0yWzFdO1xuICB0cmFuc2Zvcm0xWzJdID0gdHJhbnNmb3JtMlsyXTtcbiAgdHJhbnNmb3JtMVszXSA9IHRyYW5zZm9ybTJbM107XG4gIHRyYW5zZm9ybTFbNF0gPSB0cmFuc2Zvcm0yWzRdO1xuICB0cmFuc2Zvcm0xWzVdID0gdHJhbnNmb3JtMls1XTtcbiAgcmV0dXJuIHRyYW5zZm9ybTE7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgZ2l2ZW4gY29vcmRpbmF0ZSB3aXRoIHRoZSBnaXZlbiB0cmFuc2Zvcm0gcmV0dXJuaW5nIHRoZVxuICogcmVzdWx0aW5nLCB0cmFuc2Zvcm1lZCBjb29yZGluYXRlLiBUaGUgY29vcmRpbmF0ZSB3aWxsIGJlIG1vZGlmaWVkIGluLXBsYWNlLlxuICpcbiAqIEBwYXJhbSB7VHJhbnNmb3JtfSB0cmFuc2Zvcm0gVGhlIHRyYW5zZm9ybWF0aW9uLlxuICogQHBhcmFtIHtpbXBvcnQoXCIuL2Nvb3JkaW5hdGUuanNcIikuQ29vcmRpbmF0ZXxpbXBvcnQoXCIuL3BpeGVsLmpzXCIpLlBpeGVsfSBjb29yZGluYXRlIFRoZSBjb29yZGluYXRlIHRvIHRyYW5zZm9ybS5cbiAqIEByZXR1cm4ge2ltcG9ydChcIi4vY29vcmRpbmF0ZS5qc1wiKS5Db29yZGluYXRlfGltcG9ydChcIi4vcGl4ZWwuanNcIikuUGl4ZWx9IHJldHVybiBjb29yZGluYXRlIHNvIHRoYXQgb3BlcmF0aW9ucyBjYW4gYmVcbiAqICAgICBjaGFpbmVkIHRvZ2V0aGVyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwbHkodHJhbnNmb3JtLCBjb29yZGluYXRlKSB7XG4gIGNvbnN0IHggPSBjb29yZGluYXRlWzBdO1xuICBjb25zdCB5ID0gY29vcmRpbmF0ZVsxXTtcbiAgY29vcmRpbmF0ZVswXSA9IHRyYW5zZm9ybVswXSAqIHggKyB0cmFuc2Zvcm1bMl0gKiB5ICsgdHJhbnNmb3JtWzRdO1xuICBjb29yZGluYXRlWzFdID0gdHJhbnNmb3JtWzFdICogeCArIHRyYW5zZm9ybVszXSAqIHkgKyB0cmFuc2Zvcm1bNV07XG4gIHJldHVybiBjb29yZGluYXRlO1xufVxuXG4vKipcbiAqIEFwcGxpZXMgcm90YXRpb24gdG8gdGhlIGdpdmVuIHRyYW5zZm9ybS5cbiAqIEBwYXJhbSB7IVRyYW5zZm9ybX0gdHJhbnNmb3JtIFRyYW5zZm9ybS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBhbmdsZSBBbmdsZSBpbiByYWRpYW5zLlxuICogQHJldHVybiB7IVRyYW5zZm9ybX0gVGhlIHJvdGF0ZWQgdHJhbnNmb3JtLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlKHRyYW5zZm9ybSwgYW5nbGUpIHtcbiAgY29uc3QgY29zID0gTWF0aC5jb3MoYW5nbGUpO1xuICBjb25zdCBzaW4gPSBNYXRoLnNpbihhbmdsZSk7XG4gIHJldHVybiBtdWx0aXBseSh0cmFuc2Zvcm0sIHNldCh0bXBfLCBjb3MsIHNpbiwgLXNpbiwgY29zLCAwLCAwKSk7XG59XG5cbi8qKlxuICogQXBwbGllcyBzY2FsZSB0byBhIGdpdmVuIHRyYW5zZm9ybS5cbiAqIEBwYXJhbSB7IVRyYW5zZm9ybX0gdHJhbnNmb3JtIFRyYW5zZm9ybS5cbiAqIEBwYXJhbSB7bnVtYmVyfSB4IFNjYWxlIGZhY3RvciB4LlxuICogQHBhcmFtIHtudW1iZXJ9IHkgU2NhbGUgZmFjdG9yIHkuXG4gKiBAcmV0dXJuIHshVHJhbnNmb3JtfSBUaGUgc2NhbGVkIHRyYW5zZm9ybS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlKHRyYW5zZm9ybSwgeCwgeSkge1xuICByZXR1cm4gbXVsdGlwbHkodHJhbnNmb3JtLCBzZXQodG1wXywgeCwgMCwgMCwgeSwgMCwgMCkpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBzY2FsZSB0cmFuc2Zvcm0uXG4gKiBAcGFyYW0geyFUcmFuc2Zvcm19IHRhcmdldCBUcmFuc2Zvcm0gdG8gb3ZlcndyaXRlLlxuICogQHBhcmFtIHtudW1iZXJ9IHggU2NhbGUgZmFjdG9yIHguXG4gKiBAcGFyYW0ge251bWJlcn0geSBTY2FsZSBmYWN0b3IgeS5cbiAqIEByZXR1cm4geyFUcmFuc2Zvcm19IFRoZSBzY2FsZSB0cmFuc2Zvcm0uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYWtlU2NhbGUodGFyZ2V0LCB4LCB5KSB7XG4gIHJldHVybiBzZXQodGFyZ2V0LCB4LCAwLCAwLCB5LCAwLCAwKTtcbn1cblxuLyoqXG4gKiBBcHBsaWVzIHRyYW5zbGF0aW9uIHRvIHRoZSBnaXZlbiB0cmFuc2Zvcm0uXG4gKiBAcGFyYW0geyFUcmFuc2Zvcm19IHRyYW5zZm9ybSBUcmFuc2Zvcm0uXG4gKiBAcGFyYW0ge251bWJlcn0gZHggVHJhbnNsYXRpb24geC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBkeSBUcmFuc2xhdGlvbiB5LlxuICogQHJldHVybiB7IVRyYW5zZm9ybX0gVGhlIHRyYW5zbGF0ZWQgdHJhbnNmb3JtLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlKHRyYW5zZm9ybSwgZHgsIGR5KSB7XG4gIHJldHVybiBtdWx0aXBseSh0cmFuc2Zvcm0sIHNldCh0bXBfLCAxLCAwLCAwLCAxLCBkeCwgZHkpKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgY29tcG9zaXRlIHRyYW5zZm9ybSBnaXZlbiBhbiBpbml0aWFsIHRyYW5zbGF0aW9uLCBzY2FsZSwgcm90YXRpb24sIGFuZFxuICogZmluYWwgdHJhbnNsYXRpb24gKGluIHRoYXQgb3JkZXIgb25seSwgbm90IGNvbW11dGF0aXZlKS5cbiAqIEBwYXJhbSB7IVRyYW5zZm9ybX0gdHJhbnNmb3JtIFRoZSB0cmFuc2Zvcm0gKHdpbGwgYmUgbW9kaWZpZWQgaW4gcGxhY2UpLlxuICogQHBhcmFtIHtudW1iZXJ9IGR4MSBJbml0aWFsIHRyYW5zbGF0aW9uIHguXG4gKiBAcGFyYW0ge251bWJlcn0gZHkxIEluaXRpYWwgdHJhbnNsYXRpb24geS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzeCBTY2FsZSBmYWN0b3IgeC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzeSBTY2FsZSBmYWN0b3IgeS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBhbmdsZSBSb3RhdGlvbiAoaW4gY291bnRlci1jbG9ja3dpc2UgcmFkaWFucykuXG4gKiBAcGFyYW0ge251bWJlcn0gZHgyIEZpbmFsIHRyYW5zbGF0aW9uIHguXG4gKiBAcGFyYW0ge251bWJlcn0gZHkyIEZpbmFsIHRyYW5zbGF0aW9uIHkuXG4gKiBAcmV0dXJuIHshVHJhbnNmb3JtfSBUaGUgY29tcG9zaXRlIHRyYW5zZm9ybS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvc2UodHJhbnNmb3JtLCBkeDEsIGR5MSwgc3gsIHN5LCBhbmdsZSwgZHgyLCBkeTIpIHtcbiAgY29uc3Qgc2luID0gTWF0aC5zaW4oYW5nbGUpO1xuICBjb25zdCBjb3MgPSBNYXRoLmNvcyhhbmdsZSk7XG4gIHRyYW5zZm9ybVswXSA9IHN4ICogY29zO1xuICB0cmFuc2Zvcm1bMV0gPSBzeSAqIHNpbjtcbiAgdHJhbnNmb3JtWzJdID0gLXN4ICogc2luO1xuICB0cmFuc2Zvcm1bM10gPSBzeSAqIGNvcztcbiAgdHJhbnNmb3JtWzRdID0gZHgyICogc3ggKiBjb3MgLSBkeTIgKiBzeCAqIHNpbiArIGR4MTtcbiAgdHJhbnNmb3JtWzVdID0gZHgyICogc3kgKiBzaW4gKyBkeTIgKiBzeSAqIGNvcyArIGR5MTtcbiAgcmV0dXJuIHRyYW5zZm9ybTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgY29tcG9zaXRlIHRyYW5zZm9ybSBnaXZlbiBhbiBpbml0aWFsIHRyYW5zbGF0aW9uLCBzY2FsZSwgcm90YXRpb24sIGFuZFxuICogZmluYWwgdHJhbnNsYXRpb24gKGluIHRoYXQgb3JkZXIgb25seSwgbm90IGNvbW11dGF0aXZlKS4gVGhlIHJlc3VsdGluZyB0cmFuc2Zvcm1cbiAqIHN0cmluZyBjYW4gYmUgYXBwbGllZCBhcyBgdHJhbnNmb3JtYCBwcm9wZXJ0eSBvZiBhbiBIVE1MRWxlbWVudCdzIHN0eWxlLlxuICogQHBhcmFtIHtudW1iZXJ9IGR4MSBJbml0aWFsIHRyYW5zbGF0aW9uIHguXG4gKiBAcGFyYW0ge251bWJlcn0gZHkxIEluaXRpYWwgdHJhbnNsYXRpb24geS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzeCBTY2FsZSBmYWN0b3IgeC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzeSBTY2FsZSBmYWN0b3IgeS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBhbmdsZSBSb3RhdGlvbiAoaW4gY291bnRlci1jbG9ja3dpc2UgcmFkaWFucykuXG4gKiBAcGFyYW0ge251bWJlcn0gZHgyIEZpbmFsIHRyYW5zbGF0aW9uIHguXG4gKiBAcGFyYW0ge251bWJlcn0gZHkyIEZpbmFsIHRyYW5zbGF0aW9uIHkuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBjb21wb3NpdGUgY3NzIHRyYW5zZm9ybS5cbiAqIEBhcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvc2VDc3NUcmFuc2Zvcm0oZHgxLCBkeTEsIHN4LCBzeSwgYW5nbGUsIGR4MiwgZHkyKSB7XG4gIHJldHVybiB0b1N0cmluZyhjb21wb3NlKGNyZWF0ZSgpLCBkeDEsIGR5MSwgc3gsIHN5LCBhbmdsZSwgZHgyLCBkeTIpKTtcbn1cblxuLyoqXG4gKiBJbnZlcnQgdGhlIGdpdmVuIHRyYW5zZm9ybS5cbiAqIEBwYXJhbSB7IVRyYW5zZm9ybX0gc291cmNlIFRoZSBzb3VyY2UgdHJhbnNmb3JtIHRvIGludmVydC5cbiAqIEByZXR1cm4geyFUcmFuc2Zvcm19IFRoZSBpbnZlcnRlZCAoc291cmNlKSB0cmFuc2Zvcm0uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnQoc291cmNlKSB7XG4gIHJldHVybiBtYWtlSW52ZXJzZShzb3VyY2UsIHNvdXJjZSk7XG59XG5cbi8qKlxuICogSW52ZXJ0IHRoZSBnaXZlbiB0cmFuc2Zvcm0uXG4gKiBAcGFyYW0geyFUcmFuc2Zvcm19IHRhcmdldCBUcmFuc2Zvcm0gdG8gYmUgc2V0IGFzIHRoZSBpbnZlcnNlIG9mXG4gKiAgICAgdGhlIHNvdXJjZSB0cmFuc2Zvcm0uXG4gKiBAcGFyYW0geyFUcmFuc2Zvcm19IHNvdXJjZSBUaGUgc291cmNlIHRyYW5zZm9ybSB0byBpbnZlcnQuXG4gKiBAcmV0dXJuIHshVHJhbnNmb3JtfSBUaGUgaW52ZXJ0ZWQgKHRhcmdldCkgdHJhbnNmb3JtLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFrZUludmVyc2UodGFyZ2V0LCBzb3VyY2UpIHtcbiAgY29uc3QgZGV0ID0gZGV0ZXJtaW5hbnQoc291cmNlKTtcbiAgYXNzZXJ0KGRldCAhPT0gMCwgJ1RyYW5zZm9ybWF0aW9uIG1hdHJpeCBjYW5ub3QgYmUgaW52ZXJ0ZWQnKTtcblxuICBjb25zdCBhID0gc291cmNlWzBdO1xuICBjb25zdCBiID0gc291cmNlWzFdO1xuICBjb25zdCBjID0gc291cmNlWzJdO1xuICBjb25zdCBkID0gc291cmNlWzNdO1xuICBjb25zdCBlID0gc291cmNlWzRdO1xuICBjb25zdCBmID0gc291cmNlWzVdO1xuXG4gIHRhcmdldFswXSA9IGQgLyBkZXQ7XG4gIHRhcmdldFsxXSA9IC1iIC8gZGV0O1xuICB0YXJnZXRbMl0gPSAtYyAvIGRldDtcbiAgdGFyZ2V0WzNdID0gYSAvIGRldDtcbiAgdGFyZ2V0WzRdID0gKGMgKiBmIC0gZCAqIGUpIC8gZGV0O1xuICB0YXJnZXRbNV0gPSAtKGEgKiBmIC0gYiAqIGUpIC8gZGV0O1xuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgZGV0ZXJtaW5hbnQgb2YgdGhlIGdpdmVuIG1hdHJpeC5cbiAqIEBwYXJhbSB7IVRyYW5zZm9ybX0gbWF0IE1hdHJpeC5cbiAqIEByZXR1cm4ge251bWJlcn0gRGV0ZXJtaW5hbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZXRlcm1pbmFudChtYXQpIHtcbiAgcmV0dXJuIG1hdFswXSAqIG1hdFszXSAtIG1hdFsxXSAqIG1hdFsyXTtcbn1cblxuLyoqXG4gKiBAdHlwZSB7QXJyYXl9XG4gKi9cbmNvbnN0IG1hdHJpeFByZWNpc2lvbiA9IFsxZTYsIDFlNiwgMWU2LCAxZTYsIDIsIDJdO1xuXG4vKipcbiAqIEEgcm91bmRlZCBzdHJpbmcgdmVyc2lvbiBvZiB0aGUgdHJhbnNmb3JtLiAgVGhpcyBjYW4gYmUgdXNlZFxuICogZm9yIENTUyB0cmFuc2Zvcm1zLlxuICogQHBhcmFtIHshVHJhbnNmb3JtfSBtYXQgTWF0cml4LlxuICogQHJldHVybiB7c3RyaW5nfSBUaGUgdHJhbnNmb3JtIGFzIGEgc3RyaW5nLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9TdHJpbmcobWF0KSB7XG4gIGNvbnN0IHRyYW5zZm9ybVN0cmluZyA9XG4gICAgJ21hdHJpeCgnICtcbiAgICBtYXRcbiAgICAgIC5tYXAoXG4gICAgICAgICh2YWx1ZSwgaSkgPT5cbiAgICAgICAgICBNYXRoLnJvdW5kKHZhbHVlICogbWF0cml4UHJlY2lzaW9uW2ldKSAvIG1hdHJpeFByZWNpc2lvbltpXSxcbiAgICAgIClcbiAgICAgIC5qb2luKCcsICcpICtcbiAgICAnKSc7XG4gIHJldHVybiB0cmFuc2Zvcm1TdHJpbmc7XG59XG4iLCIvKipcbiAqIEBtb2R1bGUgb2wvdXRpbFxuICovXG5cbi8qKlxuICogQHJldHVybiB7bmV2ZXJ9IEFueSByZXR1cm4uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhYnN0cmFjdCgpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdVbmltcGxlbWVudGVkIGFic3RyYWN0IG1ldGhvZC4nKTtcbn1cblxuLyoqXG4gKiBDb3VudGVyIGZvciBnZXRVaWQuXG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQHByaXZhdGVcbiAqL1xubGV0IHVpZENvdW50ZXJfID0gMDtcblxuLyoqXG4gKiBHZXRzIGEgdW5pcXVlIElEIGZvciBhbiBvYmplY3QuIFRoaXMgbXV0YXRlcyB0aGUgb2JqZWN0IHNvIHRoYXQgZnVydGhlciBjYWxsc1xuICogd2l0aCB0aGUgc2FtZSBvYmplY3QgYXMgYSBwYXJhbWV0ZXIgcmV0dXJucyB0aGUgc2FtZSB2YWx1ZS4gVW5pcXVlIElEcyBhcmUgZ2VuZXJhdGVkXG4gKiBhcyBhIHN0cmljdGx5IGluY3JlYXNpbmcgc2VxdWVuY2UuIEFkYXB0ZWQgZnJvbSBnb29nLmdldFVpZC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIFRoZSBvYmplY3QgdG8gZ2V0IHRoZSB1bmlxdWUgSUQgZm9yLlxuICogQHJldHVybiB7c3RyaW5nfSBUaGUgdW5pcXVlIElEIGZvciB0aGUgb2JqZWN0LlxuICogQGFwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VWlkKG9iaikge1xuICByZXR1cm4gb2JqLm9sX3VpZCB8fCAob2JqLm9sX3VpZCA9IFN0cmluZygrK3VpZENvdW50ZXJfKSk7XG59XG5cbi8qKlxuICogT3BlbkxheWVycyB2ZXJzaW9uLlxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IFZFUlNJT04gPSAnOS4xLjAnO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL3Rlc3QtcGx1Z2luL1wiOyIsIi8qKlxyXG4gKiBBdXRob3I6IEFtciBTYW1pclxyXG4gKiBcclxuICogRGVzY3JpcHRpb246IFxyXG4gKiAgLSBUaGlzIGluZGV4IGZpbGUgZXhwb3J0cyBwbHVnaW4ncyBjb21wb25lbnRzIGFuZC9vciByZWR1Y2VycyBhbmQvb3IgYWN0aW9ucy5cclxuICovXHJcblxyXG5pbXBvcnQgTWFwQ2xpY2sgZnJvbSAnLi9jb21wb25lbnRzL01hcENsaWNrL01hcENsaWNrLmNvbXBvbmVudCc7XHJcbmltcG9ydCBNYXBDbGlja1Jlc3VsdCBmcm9tICcuL2NvbXBvbmVudHMvTWFwQ2xpY2tSZXN1bHQvTWFwQ2xpY2tSZXN1bHQuY29tcG9uZW50JztcclxuaW1wb3J0IGRlZmF1bHRMb2NhbGl6YXRpb24gZnJvbSAnLi9tZXNzYWdlcyc7XHJcbmltcG9ydCB7IExPQ0FMSVpBVElPTl9OQU1FU1BBQ0UgfSBmcm9tICcuL2NvbnN0YW50cy9jb25zdGFudHMnO1xyXG5cclxuTWFwQ2xpY2suVGl0bGUgPSBMT0NBTElaQVRJT05fTkFNRVNQQUNFICsgXCI6dGl0bGVcIjtcclxuTWFwQ2xpY2suSWNvbiA9IExPQ0FMSVpBVElPTl9OQU1FU1BBQ0UgKyBcIjppY29uXCI7XHJcblxyXG5jb25zdCBjb21wb25lbnRzID0ge1xyXG4gICAgWXVzdWZUcmlnZ2VyOiBNYXBDbGljayxcclxuICAgIFl1c3VmQ29udGFpbmVyOiBNYXBDbGlja1Jlc3VsdFxyXG59O1xyXG5cclxuY29uc3QgbG9jYWxpemF0aW9uID0ge1xyXG4gICAgbmFtZXNwYWNlOiBMT0NBTElaQVRJT05fTkFNRVNQQUNFLFxyXG4gICAgZGVmYXVsdExvY2FsaXphdGlvblxyXG59XHJcblxyXG5leHBvcnQgeyBjb21wb25lbnRzLCBsb2NhbGl6YXRpb24gfTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ3aXRoTG9jYWxpemUiLCJMT0NBTElaQVRJT05fTkFNRVNQQUNFIiwiY29tcG9uZW50cyIsIkdyaWRDb21wb25lbnRzIiwiR3JpZCIsIk1hcENsaWNrUmVzdWx0IiwiX1JlYWN0JENvbXBvbmVudCIsIl9jbGFzc0NhbGxDaGVjayIsIl9jYWxsU3VwZXIiLCJhcmd1bWVudHMiLCJfaW5oZXJpdHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsInJlbmRlciIsImluZm8iLCJwcm9wcyIsInBhcnNlZERhdGEiLCJmZWF0dXJlcyIsIm1hcCIsImZlYXR1cmUiLCJwcm9wZXJ0aWVzIiwiY3JlYXRlRWxlbWVudCIsInNldHRpbmdzIiwibmFtZSIsInNvcnRhYmxlIiwiZmlsdGVyYWJsZSIsInBhZ2VTaXplT3B0aW9ucyIsInBhZ2VTaXplIiwiZW5hYmxlTGFyZ2VWaWV3IiwiY29sdW1ucyIsImlkIiwidHlwZSIsImRpc3BsYXkiLCJkYXRhIiwiQ29tcG9uZW50IiwiY29ubmVjdCIsInNlbGVjdG9yc1JlZ2lzdHJ5IiwiYWN0aW9uc1JlZ2lzdHJ5IiwiZHJhd1NoYXBlIiwidmFsaWRhdGVWTCIsIk1hcENsaWNrQ29tcG9uZW50IiwiX3RoaXMiLCJoYW5kbGVSZXNwIiwiYmluZCIsInJlcyIsIl9yZXMkZGF0YSQiLCJfdGhpczIiLCJKU09OIiwicGFyc2UiLCJyZW1vdmVNYXBDbGlja1Jlc3VsdCIsInNob3dNYXBDbGlja1Jlc3VsdCIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsImlzQWN0aXZlIiwiWXVzdWZMYXllciIsImRhdGFTZXR0aW5ncyIsImNvZGUiLCJwcm9qZWN0aW9uIiwiY2xlYXIiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm93blByb3BzIiwiZ2V0U2VsZWN0b3IiLCJyZWR1Y2VySWQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsIm9uQWRkIiwiZ2V0QWN0aW9uQ3JlYXRvciIsIkljb24iLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZSIsInQiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwibiIsImhhc093blByb3BlcnR5IiwibyIsImRlZmluZVByb3BlcnR5IiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwiX3R5cGVvZiIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJfc2xpY2VkVG9BcnJheSIsImFyciIsIl9hcnJheVdpdGhIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVJlc3QiLCJtaW5MZW4iLCJfYXJyYXlMaWtlVG9BcnJheSIsInRvU3RyaW5nIiwiQXJyYXkiLCJmcm9tIiwidGVzdCIsImxlbiIsImFycjIiLCJpc0FycmF5IiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwicmVqZWN0IiwiX25leHQiLCJfdGhyb3ciLCJlcnJvciIsIl9hc3luY1RvR2VuZXJhdG9yIiwiZm4iLCJzZWxmIiwiYXJncyIsImFwcGx5IiwiZXJyIiwidW5kZWZpbmVkIiwiYXBpUmVnaXN0cnkiLCJnZW9tZXRyeVNlcnZpY2UiLCJnZXRBcmVhIiwiZ2V0TGVuZ3RoIiwiY2FsbFF1ZXJ5U2VydmljZSIsIkxpbmVTdHJpbmciLCJQb2x5Z29uIiwiVkwiLCJkcmF3aW5nIiwib3ZlcmxheUFycmF5Iiwib3B0aW9ucyIsInJlc2V0TGF5ZXIiLCJfcmVmIiwiX2NhbGxlZTIiLCJsYXllciIsImZ1bmMiLCJfeWllbGQkYXBpUmVnaXN0cnkkZ2UiLCJfeWllbGQkYXBpUmVnaXN0cnkkZ2UyIiwiVmVjdG9yTGF5ZXIiLCJfeWllbGQkYXBpUmVnaXN0cnkkZ2UzIiwiX3lpZWxkJGFwaVJlZ2lzdHJ5JGdlNCIsIkRyYXdpbmciLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJnZXRBcGlzIiwidmVjdG9yTGF5ZXIiLCJzZXRPbkRyYXdGaW5pc2giLCJfcmVmMiIsIl9jYWxsZWUiLCJnZW9tIiwiY29vcmRpbmF0ZXMiLCJjZW50ZXJQb2ludCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJnZXRHZW9tZXRyeSIsIm9sRmVhdHVyZSIsImdldENvb3JkaW5hdGVzIiwiY2VudGVyIiwiZ2V0RmVhdHVyZUdlb0pzb24iLCJhZGRGZWF0dXJlIiwiY2xlYXJPdmVybGF5Iiwib3ZlcmxheUFyZWEiLCJvdmVybGF5TGluZSIsIl94NCIsIl94IiwiX3gyIiwiX3gzIiwiZmVhdCIsImNhbGNBcmVhIiwiYXJlYSIsIl94NSIsIl94NiIsIl9vdmVybGF5TGluZSIsIl9jYWxsZWUzIiwic3RhcnRpbmdMaW5lIiwibmV4dExpbmUiLCJvcmlnTGluZSIsIm1pZGRsZSIsImxpbmUiLCJsZW5ndGhJbkttIiwiZWwiLCJfeWllbGQkYXBpUmVnaXN0cnkkZ2U1IiwiX3lpZWxkJGFwaVJlZ2lzdHJ5JGdlNiIsIk92ZXJsYXkiLCJfb3ZlcmxheUxpbmUyIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiZG9jdW1lbnQiLCJpbm5lclRleHQiLCJjb25jYXQiLCJ0b0ZpeGVkIiwic3R5bGUiLCJlbGVtZW50IiwicG9zaXRpb24iLCJfeDciLCJfeDgiLCJfeDkiLCJfb3ZlcmxheUFyZWEiLCJfY2FsbGVlNCIsImFyZWFJbkttU3EiLCJhcmVhRWwiLCJfeWllbGQkYXBpUmVnaXN0cnkkZ2U3IiwiX3lpZWxkJGFwaVJlZ2lzdHJ5JGdlOCIsIl9jYWxsZWU0JCIsIl9jb250ZXh0NCIsImlubmVySFRNTCIsImdlb21ldHJ5IiwicG9zaXRpb25pbmciLCJvdmVybGF5IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiX2FycmF5V2l0aG91dEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVNwcmVhZCIsIml0ZXIiLCJzdG9yZSIsInF1ZXJ5Iiwic3lzdGVtU2hvd0xvYWRpbmciLCJzeXN0ZW1IaWRlTG9hZGluZyIsImdlblF1ZXJ5Qm9keSIsImRhdGFTb3VyY2UiLCJmaWx0ZXIiLCJjb25kaXRpb25MaXN0IiwiZ2VvbWV0cnlGaWVsZCIsImZpZWxkTmFtZSIsInN0cmluZ2lmeSIsInNwYXRpYWxSZWxhdGlvbiIsImNycyIsImFjdGlvbiIsInF1ZXJ5RmVhdHVyZXMiLCJyZXNwb25zZSIsIl9jb25zb2xlIiwiY29uc29sZSIsImxvZyIsIm9vX29vIiwib29fY20iLCJldmFsIiwiX2xlbiIsIl9rZXkiLCJjb25zb2xlTG9nIiwib29fdHIiLCJfbGVuMiIsIl9rZXkyIiwiY29uc29sZVRyYWNlIiwib29fdHMiLCJjb25zb2xlVGltZSIsIm9vX3RlIiwiY29uc29sZVRpbWVFbmQiLCJNYXBDbGljayIsImRlZmF1bHRMb2NhbGl6YXRpb24iLCJUaXRsZSIsIll1c3VmVHJpZ2dlciIsIll1c3VmQ29udGFpbmVyIiwibG9jYWxpemF0aW9uIiwibmFtZXNwYWNlIl0sInNvdXJjZVJvb3QiOiIifQ==