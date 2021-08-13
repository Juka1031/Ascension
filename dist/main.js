/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Board; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Board = function Board(canvas) {\n  _classCallCheck(this, Board);\n\n  // this.buffer  = document.createElement(\"canvas\").getContext(\"2d\"),\n  // this.context = canvas.getContext(\"2d\");\n  // context.fillStyle = \"blue\";\n  // ctx.fillRect(0, 0, canvas.width, canvas.height);\n  var ctx = canvas.getContext(\"2d\");\n  canvas.height = 600;\n  canvas.width = 600;\n  ctx.fillStyle = \"blue\";\n  ctx.fillRect(0, 0, canvas.width, canvas.height);\n};\n\n\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYm9hcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBRXFCQSxRQUNqQixlQUFZQyxNQUFaLEVBQW9CO0FBQUE7O0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBSUMsR0FBRyxHQUFHRCxNQUFNLENBQUNFLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBVjtBQUNBRixFQUFBQSxNQUFNLENBQUNHLE1BQVAsR0FBZ0IsR0FBaEI7QUFDQUgsRUFBQUEsTUFBTSxDQUFDSSxLQUFQLEdBQWUsR0FBZjtBQUNBSCxFQUFBQSxHQUFHLENBQUNJLFNBQUosR0FBZ0IsTUFBaEI7QUFDQUosRUFBQUEsR0FBRyxDQUFDSyxRQUFKLENBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQk4sTUFBTSxDQUFDSSxLQUExQixFQUFpQ0osTUFBTSxDQUFDRyxNQUF4QztBQUNIOzs7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2pzX3Byb2ovLi9zcmMvYm9hcmQuanM/MjNkYiJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgICAgICAvLyB0aGlzLmJ1ZmZlciAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpLmdldENvbnRleHQoXCIyZFwiKSxcbiAgICAgICAgLy8gdGhpcy5jb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgLy8gY29udGV4dC5maWxsU3R5bGUgPSBcImJsdWVcIjtcbiAgICAgICAgLy8gY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgXG4gICAgICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gNjAwO1xuICAgICAgICBjYW52YXMud2lkdGggPSA2MDA7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImJsdWVcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgfTtcbn07XG5cblxuIl0sIm5hbWVzIjpbIkJvYXJkIiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsImhlaWdodCIsIndpZHRoIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/board.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _board_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board.js */ \"./src/board.js\");\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var board = new _board_js__WEBPACK_IMPORTED_MODULE_0__.default(document.querySelector(\"canvas\"));\n  window.addEventListener(\"keydown\", keyPressed); //event listeners for key inputs\n\n  window.addEventListener(\"keyup\", keyPressed);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFDQTtBQUtBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE2QyxZQUFNO0FBQ25ELE1BQU1DLEtBQUssR0FBRyxJQUFJSCw4Q0FBSixDQUFVQyxRQUFRLENBQUNHLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBVixDQUFkO0FBQ0FDLEVBQUFBLE1BQU0sQ0FBQ0gsZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUNJLFVBQW5DLEVBRm1ELENBRUg7O0FBQ2hERCxFQUFBQSxNQUFNLENBQUNILGdCQUFQLENBQXdCLE9BQXhCLEVBQW1DSSxVQUFuQztBQUNDLENBSkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgQm9hcmQgZnJvbSBcIi4vYm9hcmQuanNcIlxuXG5cblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywoKSA9PiB7XG5jb25zdCBib2FyZCA9IG5ldyBCb2FyZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiY2FudmFzXCIpKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrZXlQcmVzc2VkKTsgLy9ldmVudCBsaXN0ZW5lcnMgZm9yIGtleSBpbnB1dHNcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgICBrZXlQcmVzc2VkKTtcbn0pXG5cbiJdLCJuYW1lcyI6WyJCb2FyZCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImJvYXJkIiwicXVlcnlTZWxlY3RvciIsIndpbmRvdyIsImtleVByZXNzZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;