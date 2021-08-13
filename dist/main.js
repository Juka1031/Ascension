/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/***/ (function(module) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Board = function Board(canvas) {\n  _classCallCheck(this, Board);\n\n  // this.buffer  = document.createElement(\"canvas\").getContext(\"2d\"),\n  // this.context = canvas.getContext(\"2d\");\n  // context.fillStyle = \"blue\";\n  // ctx.fillRect(0, 0, canvas.width, canvas.height);\n  // debugger\n  var ctx = canvas.getContext(\"2d\");\n  canvas.height = 600;\n  canvas.width = 600;\n  ctx.fillStyle = \"blue\";\n  ctx.fillRect(0, 0, canvas.width, canvas.height);\n};\n\n;\nmodule.exports = Board;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qLy4vc3JjL2JvYXJkLmpzPzIzZGIiXSwibmFtZXMiOlsiQm9hcmQiLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0IiwiaGVpZ2h0Iiwid2lkdGgiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0lBRU1BLEssR0FDRixlQUFZQyxNQUFaLEVBQW9CO0FBQUE7O0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSxNQUFJQyxHQUFHLEdBQUdELE1BQU0sQ0FBQ0UsVUFBUCxDQUFrQixJQUFsQixDQUFWO0FBQ0FGLEVBQUFBLE1BQU0sQ0FBQ0csTUFBUCxHQUFnQixHQUFoQjtBQUNBSCxFQUFBQSxNQUFNLENBQUNJLEtBQVAsR0FBZSxHQUFmO0FBQ0FILEVBQUFBLEdBQUcsQ0FBQ0ksU0FBSixHQUFnQixNQUFoQjtBQUNBSixFQUFBQSxHQUFHLENBQUNLLFFBQUosQ0FBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CTixNQUFNLENBQUNJLEtBQTFCLEVBQWlDSixNQUFNLENBQUNHLE1BQXhDO0FBQ0gsQzs7QUFDSjtBQUVESSxNQUFNLENBQUNDLE9BQVAsR0FBaUJULEtBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmNsYXNzIEJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICAgICAgLy8gdGhpcy5idWZmZXIgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKS5nZXRDb250ZXh0KFwiMmRcIiksXG4gICAgICAgIC8vIHRoaXMuY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIC8vIGNvbnRleHQuZmlsbFN0eWxlID0gXCJibHVlXCI7XG4gICAgICAgIC8vIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgIFxuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IDYwMDtcbiAgICAgICAgY2FudmFzLndpZHRoID0gNjAwO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJibHVlXCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJvYXJkO1xuXG4iXSwiZmlsZSI6Ii4vc3JjL2JvYXJkLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/board.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var Board = __webpack_require__(/*! ./board */ \"./src/board.js\");\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var board = new Board(document.querySelector(\"canvas\"));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQ0EsSUFBTUEsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLCtCQUFELENBQXJCOztBQUVBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE2QyxZQUFNO0FBQ25ELE1BQU1DLEtBQUssR0FBRyxJQUFJSixLQUFKLENBQVVFLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixRQUF2QixDQUFWLENBQWQ7QUFDQyxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNfcHJvai8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgQm9hcmQgPSByZXF1aXJlKFwiLi9ib2FyZFwiKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsKCkgPT4ge1xuY29uc3QgYm9hcmQgPSBuZXcgQm9hcmQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImNhbnZhc1wiKSk7XG59KSJdLCJuYW1lcyI6WyJCb2FyZCIsInJlcXVpcmUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJib2FyZCIsInF1ZXJ5U2VsZWN0b3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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