/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/card/card.css":
/*!**************************************!*\
  !*** ./src/components/card/card.css ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/card/card.css?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://dca_scoffolding/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://dca_scoffolding/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/components/add/add.ts":
/*!***********************************!*\
  !*** ./src/components/add/add.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AttributeSongs = void 0;\nconst login_css_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './login.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));\nvar AttributeSongs;\n(function (AttributeSongs) {\n    AttributeSongs[\"image\"] = \"image\";\n    AttributeSongs[\"artist\"] = \"artist\";\n    AttributeSongs[\"name\"] = \"name\";\n    AttributeSongs[\"price\"] = \"price\";\n    AttributeSongs[\"stock\"] = \"stock\";\n    AttributeSongs[\"button\"] = \"button\";\n})(AttributeSongs = exports.AttributeSongs || (exports.AttributeSongs = {}));\nclass addComponent extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    static get observedAttributes() {\n        const attrs = {\n            image: null,\n            artist: null,\n            name: null,\n            price: null,\n            stock: null,\n            button: null,\n        };\n        return Object.keys(attrs);\n    }\n    attributeChangedCallback(propName, oldValue, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\r\n\t\t\t<section class = \"card\">\r\n\t\t\t<h1>Add New Product</h1>\r\n            <section class= \"imagen\">\r\n\t\t\t<img src=\"${this.image}\" alt= \"cover album\"></img>\r\n\t\t\t</section>\r\n\t\t\t<p>Album name</p>\r\n\t\t\t<input>${this.name}</input>\r\n\t\t\t<p>Artist name</p>\r\n\t\t\t<input>${this.artist}</input>\r\n\t\t\t<p>Price</p>\r\n            <input>${this.price}</input>\r\n\t\t\t<p>Image link</p>\r\n            <input>${this.stock}</input>\r\n\t\t\t<button>${this.button}</button>\r\n\r\n\t\t</section>\r\n    `;\n        }\n        const cssCard = this.ownerDocument.createElement('style');\n        cssCard.innerHTML = login_css_1.default;\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(cssCard);\n    }\n}\nexports[\"default\"] = addComponent;\ncustomElements.define('my-add', addComponent);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/add/add.ts?");

/***/ }),

/***/ "./src/components/card/card.ts":
/*!*************************************!*\
  !*** ./src/components/card/card.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AttributeCard = void 0;\nconst card_css_1 = __importDefault(__webpack_require__(/*! ./card.css */ \"./src/components/card/card.css\"));\nvar AttributeCard;\n(function (AttributeCard) {\n    AttributeCard[\"image\"] = \"image\";\n    AttributeCard[\"artist\"] = \"artist\";\n    AttributeCard[\"name\"] = \"name\";\n    AttributeCard[\"price\"] = \"price\";\n    AttributeCard[\"stock\"] = \"stock\";\n})(AttributeCard = exports.AttributeCard || (exports.AttributeCard = {}));\nclass cardComponent extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    static get observedAttributes() {\n        const attrs = {\n            image: null,\n            artist: null,\n            name: null,\n            price: null,\n            stock: null,\n        };\n        return Object.keys(attrs);\n    }\n    attributeChangedCallback(propName, oldValue, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\r\n\t\t\t<section class = \"card\">\r\n\r\n            <section class= \"imagen\">\r\n\t\t\t<img src=\"${this.image}\" alt= \"cover album\"></img>\r\n\t\t\t</section>\r\n\t\t\t<h2>${this.name}</h2>\r\n\t\t\t<p>${this.artist}</p>\r\n            <p>${this.price}</p>\r\n            <p>${this.stock}</p>\r\n\r\n\t\t</section>\r\n    `;\n        }\n        const cssCard = this.ownerDocument.createElement('style');\n        cssCard.innerHTML = card_css_1.default;\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(cssCard);\n    }\n}\nexports[\"default\"] = cardComponent;\ncustomElements.define('my-card', cardComponent);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/card/card.ts?");

/***/ }),

/***/ "./src/components/indexPadre.ts":
/*!**************************************!*\
  !*** ./src/components/indexPadre.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.modify = exports.add = exports.card = void 0;\nvar card_1 = __webpack_require__(/*! ./card/card */ \"./src/components/card/card.ts\");\nObject.defineProperty(exports, \"card\", ({ enumerable: true, get: function () { return __importDefault(card_1).default; } }));\nvar add_1 = __webpack_require__(/*! ./add/add */ \"./src/components/add/add.ts\");\nObject.defineProperty(exports, \"add\", ({ enumerable: true, get: function () { return __importDefault(add_1).default; } }));\nvar modify_1 = __webpack_require__(/*! ./modify/modify */ \"./src/components/modify/modify.ts\");\nObject.defineProperty(exports, \"modify\", ({ enumerable: true, get: function () { return __importDefault(modify_1).default; } }));\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/indexPadre.ts?");

/***/ }),

/***/ "./src/components/modify/modify.ts":
/*!*****************************************!*\
  !*** ./src/components/modify/modify.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AttributeCard = void 0;\nconst card_css_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './card.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));\nvar AttributeCard;\n(function (AttributeCard) {\n    AttributeCard[\"image\"] = \"image\";\n    AttributeCard[\"artist\"] = \"artist\";\n    AttributeCard[\"name\"] = \"name\";\n    AttributeCard[\"price\"] = \"price\";\n    AttributeCard[\"stock\"] = \"stock\";\n    AttributeCard[\"edit\"] = \"edit\";\n    AttributeCard[\"delete\"] = \"delete\";\n})(AttributeCard = exports.AttributeCard || (exports.AttributeCard = {}));\nclass cardComponent extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    static get observedAttributes() {\n        const attrs = {\n            image: null,\n            artist: null,\n            name: null,\n            price: null,\n            stock: null,\n            edit: null,\n            delete: null,\n        };\n        return Object.keys(attrs);\n    }\n    attributeChangedCallback(propName, oldValue, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\r\n\t\t\t<section class = \"card\">\r\n            <h1>Modify Products</h1>\r\n            <section class= \"imagen\">\r\n\t\t\t<img src=\"${this.image}\" alt= \"cover album\"></img>\r\n\t\t\t</section>\r\n\t\t\t<h2>${this.name}</h2>\r\n\t\t\t<p>${this.artist}</p>\r\n            <p>${this.price}</p>\r\n            <p>${this.stock}</p>\r\n            <input>${this.edit}</input>\r\n            <input>${this.delete}</input>\r\n\r\n\t\t</section>\r\n    `;\n        }\n        const cssCard = this.ownerDocument.createElement('style');\n        cssCard.innerHTML = card_css_1.default;\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(cssCard);\n    }\n}\nexports[\"default\"] = cardComponent;\ncustomElements.define('my-card', cardComponent);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/modify/modify.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__webpack_require__(/*! ./components/indexPadre */ \"./src/components/indexPadre.ts\");\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        const something = this.ownerDocument.createElement('div');\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(something);\n    }\n}\ncustomElements.define('app-container', AppContainer);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/index.ts?");

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;