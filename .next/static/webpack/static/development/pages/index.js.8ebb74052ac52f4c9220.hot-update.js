webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Track.js":
/*!*****************************!*\
  !*** ./components/Track.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/Users/reedrosenbluth/Developer/tube-step/components/Track.js";


var style = function style(on) {
  return {
    "background-color": on ? "grey" : "white",
    border: "1px solid black",
    margin: "1rem"
  };
};

var steps = function steps(step) {
  var steps = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Array(8));

  return steps.map(function (_, i) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "column",
      style: style(step == i + 1 ? true : false),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    });
  });
};

function click(state) {}

var Track = function Track(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "columns",
    onClick: click(props.state),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, steps(props.step));
};

/* harmony default export */ __webpack_exports__["default"] = (Track);

/***/ })

})
//# sourceMappingURL=index.js.8ebb74052ac52f4c9220.hot-update.js.map