webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Track.js":
/*!*****************************!*\
  !*** ./components/Track.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/reedrosenbluth/Developer/tube-step/components/Track.js";


var style = function style(on) {
  return {
    backgroundColor: on ? "grey" : "white",
    border: "1px solid black",
    margin: "1rem"
  };
};

var steps = function steps(step, sequence, toggle) {
  return sequence.map(function (hit, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "column",
      key: i,
      style: style(step == i + 1 ? true : false),
      onClick: function onClick() {
        return toggle(i);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    });
  });
};

var Track = function Track(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, steps(props.step, props.sequence, props.toggle));
};

/* harmony default export */ __webpack_exports__["default"] = (Track);

/***/ })

})
//# sourceMappingURL=index.js.f68d01ea18ea2d7102f1.hot-update.js.map