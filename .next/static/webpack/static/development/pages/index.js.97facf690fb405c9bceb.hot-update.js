webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Sequence.js":
/*!********************************!*\
  !*** ./components/Sequence.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Track__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Track */ "./components/Track.js");





var _jsxFileName = "/Users/reedrosenbluth/Developer/tube-step/components/Sequence.js";



var Sequence =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Sequence, _React$Component);

  function Sequence(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Sequence);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Sequence).call(this, props));
    _this.state = {
      step: 1,
      clockOn: false,
      sequence: [[false, false, false, false, false, false, false, false], [false, false, false, false, false, false, false, false], [false, false, false, false, false, false, false, false], [false, false, false, false, false, false, false, false]]
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Sequence, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopClock();
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
    key: "toggle",
    value: function toggle(x) {
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
    key: "startClock",
    value: function startClock() {
      var _this3 = this;

      this.stepID = setInterval(function () {
        return _this3.step();
      }, 250);
    }
  }, {
    key: "toggleClock",
    value: function toggleClock() {
      var _this4 = this;

      if (this.state.clockOn) {
        clearInterval(this.stepID);
      } else {
        this.stepID = setInterval(function () {
          return _this4.step();
        }, 250);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        className: "button",
        onClick: function onClick() {
          return _this5.stop();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "start/stop"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), this.state.sequence.map(function (track, i) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Track__WEBPACK_IMPORTED_MODULE_6__["default"], {
          key: i,
          step: _this5.state.step,
          toggle: _this5.toggle(i),
          sequence: track,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        });
      }));
    }
  }]);

  return Sequence;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Sequence);

/***/ })

})
//# sourceMappingURL=index.js.97facf690fb405c9bceb.hot-update.js.map