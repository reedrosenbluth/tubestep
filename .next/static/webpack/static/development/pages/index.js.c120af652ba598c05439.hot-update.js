webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Sequence.js":
/*!********************************!*\
  !*** ./components/Sequence.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Track__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Track */ "./components/Track.js");






var _jsxFileName = "/Users/reedrosenbluth/Developer/tube-step/components/Sequence.js";



var Sequence =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Sequence, _React$Component);

  function Sequence(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Sequence);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Sequence).call(this, props));
    _this.state = {
      step: 1,
      tempo: 120,
      clockOn: false,
      sequence: [[false, false, false, false, false, false, false, false], [false, false, false, false, false, false, false, false], [false, false, false, false, false, false, false, false], [false, false, false, false, false, false, false, false]]
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Sequence, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.stepID);
    }
  }, {
    key: "step",
    value: function step() {
      var prev = this.state.step;
      var next = prev == 8 ? 1 : prev + 1;
      this.setState({
        step: next
      });
    }
  }, {
    key: "toggleCell",
    value: function toggleCell(x) {
      var _this2 = this;

      return function (y) {
        var sequence = _this2.state.sequence;
        sequence[x][y] = !sequence[x][y];

        _this2.setState({
          sequence: sequence
        });
      };
    }
  }, {
    key: "toggleClock",
    value: function toggleClock() {
      var _this3 = this;

      if (this.state.clockOn) {
        clearInterval(this.stepID);
        this.setState({
          clockOn: false
        });
      } else {
        this.stepID = setInterval(function () {
          return _this3.step();
        }, 1 / (this.state.tempo / 60) * 1000 / 2);
        this.setState({
          clockOn: true
        });
      }
    }
  }, {
    key: "changeTempo",
    value: function changeTempo(e) {
      this.setState({
        tempo: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(e.target.value)
      });
      this.toggleClock();
      this.toggleClock();
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "columns",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "column is-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "button",
        onClick: function onClick() {
          return _this4.toggleClock();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "start/stop")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "column is-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        class: "input",
        type: "text",
        value: this.state.tempo,
        onChange: function onChange(e) {
          return _this4.changeTempo(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }))), this.state.sequence.map(function (track, i) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Track__WEBPACK_IMPORTED_MODULE_7__["default"], {
          key: i,
          step: _this4.state.step,
          toggle: _this4.toggleCell(i),
          sequence: track,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        });
      }));
    }
  }]);

  return Sequence;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Sequence);

/***/ })

})
//# sourceMappingURL=index.js.c120af652ba598c05439.hot-update.js.map