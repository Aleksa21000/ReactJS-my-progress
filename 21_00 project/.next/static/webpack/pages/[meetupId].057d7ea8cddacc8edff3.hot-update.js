webpackHotUpdate_N_E("pages/[meetupId]",{

/***/ "./components/meetups/MeetupDetail.js":
/*!********************************************!*\
  !*** ./components/meetups/MeetupDetail.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var _reactJsxDevRuntime = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");

var _jsxFileName = "C:\\Users\\radul\\Desktop\\React.js\\21_00 project\\components\\meetups\\MeetupDetail.js";

function MeetupDetail(props) {
  return /*#__PURE__*/_reactJsxDevRuntime.jsxDEV(_reactJsxDevRuntime.Fragment, {
    children: [/*#__PURE__*/_reactJsxDevRuntime.jsxDEV("img", {
      src: props.image,
      alt: props.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 4
    }, this), /*#__PURE__*/_reactJsxDevRuntime.jsxDEV("h1", {
      children: props.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }, this), /*#__PURE__*/_reactJsxDevRuntime.jsxDEV("address", {
      children: props.address
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }, this), /*#__PURE__*/_reactJsxDevRuntime.jsxDEV("p", {
      children: props.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }, this)]
  }, void 0, true);
}

_c = MeetupDetail;

var _c;

$RefreshReg$(_c, "MeetupDetail");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./pages/[meetupId]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupId]/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/meetups/MeetupDetail */ "./components/meetups/MeetupDetail.js");
/* harmony import */ var _components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\radul\\Desktop\\React.js\\21_00 project\\pages\\[meetupId]\\index.js";


function MeetupDetails() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_1___default.a, {
    image: 'https://images.pexels.com/photos/111963/pexels-photo-111963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: "A First Meetup"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }, this) // <>
  // 	<img
  // 		src="https://images.pexels.com/photos/111963/pexels-photo-111963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  // 		alt="First meetup image"
  // 	/>
  // 	<h1>A First Meetup</h1>
  // 	<address>Some street 5, Some City</address>
  // 	<p>This is a first meetup</p>
  // </>
  ;
}

_c = MeetupDetails;
/* harmony default export */ __webpack_exports__["default"] = (MeetupDetails);

var _c;

$RefreshReg$(_c, "MeetupDetails");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cERldGFpbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW21lZXR1cElkXS9pbmRleC5qcyJdLCJuYW1lcyI6WyJNZWV0dXBEZXRhaWwiLCJwcm9wcyIsImltYWdlIiwidGl0bGUiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJNZWV0dXBEZXRhaWxzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsU0FBU0EsWUFBVCxDQUFzQkMsS0FBdEIsRUFBNkI7QUFDNUIsc0JBQ0M7QUFBQSw0QkFDQztBQUNDLFNBQUcsRUFBRUEsS0FBSyxDQUFDQyxLQURaO0FBRUMsU0FBRyxFQUFFRCxLQUFLLENBQUNFO0FBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGVBS0M7QUFBQSxnQkFBS0YsS0FBSyxDQUFDRTtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRCxlQU1DO0FBQUEsZ0JBQVVGLEtBQUssQ0FBQ0c7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5ELGVBT0M7QUFBQSxnQkFBSUgsS0FBSyxDQUFDSTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRDtBQUFBLGtCQUREO0FBV0E7O0tBWlFMLFk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQVQ7O0FBRUEsU0FBU00sYUFBVCxHQUF5QjtBQUN4QixzQkFDQyxxRUFBQyx1RUFBRDtBQUNDLFNBQUssRUFDSiwrR0FGRjtBQUlDLFNBQUssRUFBQztBQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERCxDQU9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWZEO0FBaUJBOztLQWxCUUEsYTtBQW9CTUEsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW21lZXR1cElkXS4wNTdkN2VhOGNkZGFjYzhlZGZmMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gTWVldHVwRGV0YWlsKHByb3BzKSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxpbWdcclxuXHRcdFx0XHRzcmM9e3Byb3BzLmltYWdlfVxyXG5cdFx0XHRcdGFsdD17cHJvcHMudGl0bGV9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxoMT57cHJvcHMudGl0bGV9PC9oMT5cclxuXHRcdFx0PGFkZHJlc3M+e3Byb3BzLmFkZHJlc3N9PC9hZGRyZXNzPlxyXG5cdFx0XHQ8cD57cHJvcHMuZGVzY3JpcHRpb259PC9wPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufVxyXG4iLCJpbXBvcnQgTWVldHVwRGV0YWlsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBEZXRhaWwnO1xyXG5cclxuZnVuY3Rpb24gTWVldHVwRGV0YWlscygpIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PE1lZXR1cERldGFpbFxyXG5cdFx0XHRpbWFnZT17XHJcblx0XHRcdFx0J2h0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzExMTk2My9wZXhlbHMtcGhvdG8tMTExOTYzLmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZ3PTEyNjAmaD03NTAmZHByPTEnXHJcblx0XHRcdH1cclxuXHRcdFx0dGl0bGU9XCJBIEZpcnN0IE1lZXR1cFwiXHJcblx0XHQvPlxyXG5cdFx0Ly8gPD5cclxuXHRcdC8vIFx0PGltZ1xyXG5cdFx0Ly8gXHRcdHNyYz1cImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzExMTk2My9wZXhlbHMtcGhvdG8tMTExOTYzLmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZ3PTEyNjAmaD03NTAmZHByPTFcIlxyXG5cdFx0Ly8gXHRcdGFsdD1cIkZpcnN0IG1lZXR1cCBpbWFnZVwiXHJcblx0XHQvLyBcdC8+XHJcblx0XHQvLyBcdDxoMT5BIEZpcnN0IE1lZXR1cDwvaDE+XHJcblx0XHQvLyBcdDxhZGRyZXNzPlNvbWUgc3RyZWV0IDUsIFNvbWUgQ2l0eTwvYWRkcmVzcz5cclxuXHRcdC8vIFx0PHA+VGhpcyBpcyBhIGZpcnN0IG1lZXR1cDwvcD5cclxuXHRcdC8vIDwvPlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lZXR1cERldGFpbHM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=