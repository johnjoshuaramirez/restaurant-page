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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/sedona.ttf */ \"./src/assets/sedona.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/oswald.ttf */ \"./src/assets/oswald.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/oswald-bold.ttf */ \"./src/assets/oswald-bold.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\r\\n   font-family: 'Sedona';\\r\\n   src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format('truetype');\\r\\n   font-weight: 600;\\r\\n   font-style: normal;\\r\\n}\\r\\n\\r\\n@font-face {\\r\\n   font-family: 'Oswald';\\r\\n   src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format('truetype');\\r\\n   font-weight: bold;\\r\\n   font-style: normal;\\r\\n}\\r\\n\\r\\n@font-face {\\r\\n   font-family: 'Oswald';\\r\\n   src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") format('truetype');\\r\\n   font-weight: bold;\\r\\n   font-style: normal;\\r\\n}\\r\\n\\r\\nbody {\\r\\n   margin: 0;\\r\\n   background-color: rgb(173, 173, 173);\\r\\n}\\r\\n\\r\\n.container {\\r\\n   max-width: 1000px;\\r\\n   margin: 0 auto;\\r\\n}\\r\\n\\r\\n.header {\\r\\n   padding: 1rem 0 0 0;\\r\\n   background-color: black;\\r\\n   border-bottom: white;\\r\\n}\\r\\n\\r\\n.header__title {\\r\\n   margin: 0;\\r\\n   text-align: center;\\r\\n   font-size: 6rem;\\r\\n   font-family: 'Sedona', sans-serif;\\r\\n   background: linear-gradient(to bottom, rgb(255, 38, 0), rgb(255, 217, 0));\\r\\n   -webkit-background-clip: text;\\r\\n   background-clip: text;\\r\\n   -webkit-text-fill-color: transparent;\\r\\n}\\r\\n\\r\\n.nav {\\r\\n   display: grid;\\r\\n   grid-template-columns: repeat(3, 1fr);\\r\\n   justify-items: center;\\r\\n   background-color: gray;\\r\\n   padding: .5rem 10rem;\\r\\n}\\r\\n\\r\\n.nav__item {\\r\\n   font-size: 2rem;\\r\\n   font-weight: 600;\\r\\n   font-family: 'Oswald', sans-serif;\\r\\n   cursor: pointer;\\r\\n}\\r\\n\\r\\n.nav__item:hover {\\r\\n   color: #f04a38;\\r\\n}\\r\\n\\r\\n.home, .menu, .contact {\\r\\n   display: grid;\\r\\n}\\r\\n\\r\\n.content {\\r\\n   display: grid;\\r\\n   margin: 3rem 5rem 3rem 2rem;\\r\\n}\\r\\n\\r\\n.content__title {\\r\\n   font-size: 2rem;\\r\\n   font-weight: 600;\\r\\n   font-family: 'Oswald', sans-serif;\\r\\n}\\r\\n\\r\\n.content__title::first-line {\\r\\n   background-color: #fff;\\r\\n }\\r\\n\\r\\n.content__text {\\r\\n   box-shadow: 7px 7px 0px 0px rgba(0, 0, 0, 1);\\r\\n   -webkit-box-decoration-break: clone;\\r\\n   box-decoration-break: clone;\\r\\n   background-color: #e74c3c;\\r\\n   color: black;\\r\\n   padding: 0.2rem 1.5rem;\\r\\n   line-height: 2.2;\\r\\n   font-family: 'Oswald', 'sans-serif';\\r\\n}\\r\\n\\r\\n.content__text--sm {\\r\\n   line-height: normal;\\r\\n   text-align: center;\\r\\n   max-width: 24rem;\\r\\n}\\r\\n\\r\\n.content__text--black {\\r\\n   background-color: black;\\r\\n   color: #e74c3c;\\r\\n   box-shadow: 7px 7px 0px 0px #e74c3c;\\r\\n}\\r\\n\\r\\n.content--center {\\r\\n   justify-self: center;\\r\\n}\\r\\n\\r\\n.content__subtext {\\r\\n   font-size: 2rem;\\r\\n   font-weight: 600;\\r\\n   font-family: 'Oswald', sans-serif;\\r\\n   justify-self: end;\\r\\n   box-shadow: 7px 7px 0px 0px #e74c3c;\\r\\n   color: #e74c3c;\\r\\n   background-color: black;\\r\\n   padding: 1rem;\\r\\n   font-family: 'Oswald', 'sans-serif';\\r\\n}\\r\\n\\r\\n.card {\\r\\n   display: grid;\\r\\n   justify-self: center;\\r\\n   background-color: black;\\r\\n   margin: 2rem 0 2rem 0;\\r\\n   padding: 2rem;\\r\\n   max-width: 35rem;\\r\\n   font-size: 2rem;\\r\\n   font-weight: 600;\\r\\n   color: white;\\r\\n   font-family: 'Oswald', sans-serif;\\r\\n   box-sizing: border-box;\\r\\n   box-shadow: 7px 7px 0px 0px #e74c3c;\\r\\n}\\r\\n\\r\\n.card__image {\\r\\n   justify-self: center;\\r\\n   margin-bottom: 1rem;\\r\\n   width: 15rem;\\r\\n   height: 15rem;\\r\\n   border-radius: 50%;\\r\\n   object-fit: cover;\\r\\n   object-position: center center;\\r\\n}\\r\\n\\r\\n.card__text {\\r\\n   justify-self: center;\\r\\n   margin: 1rem 0;\\r\\n}\\r\\n\\r\\n.card__subtext {\\r\\n   justify-self: end;\\r\\n   margin: 0;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n   text-align: center;\\r\\n   padding: 1rem;\\r\\n   font-family: 'Oswald', sans-serif;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restuarant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restuarant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restuarant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restuarant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restuarant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restuarant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restuarant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restuarant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restuarant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restuarant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restuarant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/contact.js":
/*!***********************************!*\
  !*** ./src/components/contact.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contact\": () => (/* binding */ contact)\n/* harmony export */ });\nconst contact = (() => {\r\n\tconst container = document.createElement('main');\r\n\tcontainer.classList.add('container', 'contact');\r\n\r\n\tconst content = document.createElement('div');\r\n\tcontent.classList.add('content', 'content--center');\r\n\r\n\tconst h1_1 = document.createElement('h1');\r\n\th1_1.classList.add('content__text', 'content__text--sm');\r\n\th1_1.innerText = 'TIME';\r\n\tconst h1_2 = document.createElement('h1');\r\n\th1_2.classList.add('content__text', 'content__text--sm', 'content__text--black');\r\n\th1_2.innerText = 'MON - SUN: 8AM - 11PM';\r\n\r\n\tconst h1_3 = document.createElement('h1');\r\n\th1_3.classList.add('content__text', 'content__text--sm');\r\n\th1_3.innerText = 'TIME';\r\n\tconst h1_4 = document.createElement('h1');\r\n\th1_4.classList.add('content__text', 'content__text--sm', 'content__text--black');\r\n\th1_4.innerText = 'MON - SUN: 8AM - 11PM';\r\n\r\n\tconst h1_5 = document.createElement('h1');\r\n\th1_5.classList.add('content__text', 'content__text--sm');\r\n\th1_5.innerText = 'TIME';\r\n\tconst h1_6 = document.createElement('h1');\r\n\th1_6.classList.add('content__text', 'content__text--sm', 'content__text--black');\r\n\th1_6.innerText = 'MON - SUN: 8AM - 11PM';\r\n\r\n\tcontent.appendChild(h1_1);\r\n\tcontent.appendChild(h1_2);\r\n\tcontent.appendChild(h1_3);\r\n\tcontent.appendChild(h1_4);\r\n\tcontent.appendChild(h1_5);\r\n\tcontent.appendChild(h1_6);\r\n\r\n\tcontainer.appendChild(content);\r\n\treturn container;\r\n})();\n\n//# sourceURL=webpack://restuarant-page/./src/components/contact.js?");

/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"footer\": () => (/* binding */ footer)\n/* harmony export */ });\nconst footer = (() => {\r\n\tconst footer = document.createElement('footer');\r\n\tconst span = document.createElement('span');\r\n\tspan.innerText = 'Yukihira Restaurant';\r\n\tfooter.appendChild(span);\r\n\r\n\treturn footer;\r\n})();\r\n\n\n//# sourceURL=webpack://restuarant-page/./src/components/footer.js?");

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"header\": () => (/* binding */ header)\n/* harmony export */ });\nconst header = (() => {\r\n\tconst header = document.createElement('header');\r\n\theader.classList.add('header');\r\n\r\n\tconst header__title = document.createElement('h1');\r\n\theader__title.classList.add('header__title');\r\n\theader__title.innerText = 'Yukihira Restaurant';\r\n\r\n\tconst nav = document.createElement('nav');\r\n\tnav.classList.add('nav');\r\n\r\n\tconst nav__item_1 = document.createElement('div');\r\n\tnav__item_1.classList.add('nav__item');\r\n\tnav__item_1.innerText = 'Home';\r\n\r\n\tconst nav__item_2 = document.createElement('div');\r\n\tnav__item_2.classList.add('nav__item');\r\n\tnav__item_2.innerText = 'Menu';\r\n\r\n\tconst nav__item_3 = document.createElement('div');\r\n\tnav__item_3.classList.add('nav__item');\r\n\tnav__item_3.innerText = 'Contact';\r\n\r\n\theader.appendChild(header__title);\r\n\tnav.appendChild(nav__item_1);\r\n\tnav.appendChild(nav__item_2);\r\n\tnav.appendChild(nav__item_3);\r\n\theader.appendChild(nav);\r\n\r\n\treturn {\r\n      header,\r\n      nav__item_1,\r\n      nav__item_2,\r\n      nav__item_3\r\n   }\r\n})();\n\n//# sourceURL=webpack://restuarant-page/./src/components/header.js?");

/***/ }),

/***/ "./src/components/home.js":
/*!********************************!*\
  !*** ./src/components/home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"home\": () => (/* binding */ home)\n/* harmony export */ });\nconst home = (() => {\r\n\tconst container = document.createElement('main');\r\n\tcontainer.classList.add('container', 'home');\r\n\r\n\tconst content = document.createElement('div');\r\n\tcontent.classList.add('content');\r\n\r\n\tconst content__title = document.createElement('p');\r\n\tcontent__title.classList.add('content__title');\r\n\r\n\tconst content__text = document.createElement('span');\r\n\tcontent__text.classList.add('content__text');\r\n\tcontent__text.innerText =\r\n\t\t'Welcome to Yukihira Restaurant! Experience delicious food crafted with fresh ingredients, unique flair, and even culinary battles. Come prepared to be amazed!';\r\n\r\n\tconst content__subtext = document.createElement('p');\r\n\tcontent__subtext.classList.add('content__subtext');\r\n\tcontent__subtext.innerText = 'Spice up your life!';\r\n\r\n\tcontent__title.appendChild(content__text);\r\n\tcontent.appendChild(content__title);\r\n\tcontent.appendChild(content__subtext);\r\n\r\n\tconst card_1 = document.createElement('div');\r\n\tcard_1.classList.add('card');\r\n\r\n\tconst card__image_1 = document.createElement('img');\r\n\tcard__image_1.classList.add('card__image');\r\n\tcard__image_1.src = 'erina.jpg';\r\n\r\n\tconst card__text_1 = document.createElement('p');\r\n\tcard__text_1.innerText =\r\n\t\t'The dishes at his restaurant showcase not only his skills, but also his passion for cooking. A must-visit for food lovers!';\r\n\r\n\tconst card__subtext_1 = document.createElement('p');\r\n\tcard__subtext_1.classList.add('card__subtext');\r\n\tcard__subtext_1.innerText = 'Nakiri Erina';\r\n\r\n\tconst card_2 = document.createElement('div');\r\n\tcard_2.classList.add('card');\r\n\r\n\tconst card__image_2 = document.createElement('img');\r\n\tcard__image_2.classList.add('card__image');\r\n\tcard__image_2.src = 'ryo.jpg';\r\n\r\n\tconst card__text_2 = document.createElement('p');\r\n\tcard__text_2.innerText =\r\n\t\t\"Soma's relentless pursuit of culinary perfection is reflected in every bite. Truly an exceptional dining experience.\";\r\n\r\n\tconst card__subtext_2 = document.createElement('p');\r\n\tcard__subtext_2.classList.add('card__subtext');\r\n\tcard__subtext_2.innerText = 'Ryo Kurokiba';\r\n\r\n\tcard_1.appendChild(card__image_1);\r\n\tcard_1.appendChild(card__text_1);\r\n\tcard_1.appendChild(card__subtext_1);\r\n\r\n\tcard_2.appendChild(card__image_2);\r\n\tcard_2.appendChild(card__text_2);\r\n\tcard_2.appendChild(card__subtext_2);\r\n\r\n\tcontainer.appendChild(content);\r\n\tcontainer.appendChild(card_1);\r\n\tcontainer.appendChild(card_2);\r\n\r\n\treturn container;\r\n})();\n\n//# sourceURL=webpack://restuarant-page/./src/components/home.js?");

/***/ }),

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\nconst menu = (() => {\r\n\tconst container = document.createElement('main');\r\n\tcontainer.classList.add('container', 'menu');\r\n\r\n\tconst card_1 = document.createElement('div');\r\n\tcard_1.classList.add('card');\r\n\r\n\tconst card__image_1 = document.createElement('img');\r\n\tcard__image_1.classList.add('card__image');\r\n\tcard__image_1.src = 'egg.png';\r\n\r\n\tconst card__title_1 = document.createElement('div');\r\n\tcard__title_1.classList.add('card__text');\r\n\tcard__title_1.innerText = 'Eggs Benedict Yakisoba';\r\n\r\n\tconst card__description_1 = document.createElement('p');\r\n\tcard__description_1.classList.add('card__text');\r\n\tcard__description_1.innerText =\r\n\t\t'A fusion dish combining western-style Eggs Benedict with savory Japanese yakisoba noodles. Topped with a poached egg, hollandaise sauce, and bacon for a unique and delicious flavor experience.';\r\n\r\n\tconst card__subtext_1 = document.createElement('p');\r\n\tcard__subtext_1.classList.add('card__subtext');\r\n\tcard__subtext_1.innerText = '$199';\r\n\r\n\tcard_1.appendChild(card__image_1);\r\n\tcard_1.appendChild(card__title_1);\r\n\tcard_1.appendChild(card__description_1);\r\n\tcard_1.appendChild(card__subtext_1);\r\n\r\n\tconst card_2 = document.createElement('div');\r\n\tcard_2.classList.add('card');\r\n\r\n\tconst card__image_2 = document.createElement('img');\r\n\tcard__image_2.classList.add('card__image');\r\n\tcard__image_2.src = 'roast.jpg';\r\n\r\n\tconst card__title_2 = document.createElement('div');\r\n\tcard__title_2.classList.add('card__text');\r\n\tcard__title_2.innerText = 'Gotcha Pork Roast';\r\n\r\n\tconst card__description_2 = document.createElement('p');\r\n\tcard__description_2.classList.add('card__text');\r\n\tcard__description_2.innerText =\r\n\t\t'A savory pork dish coated in a flavorful herb crust, served with roasted vegetables and a side of tangy apple sauce. A must-try for meat lovers!';\r\n\r\n\tconst card__subtext_2 = document.createElement('p');\r\n\tcard__subtext_2.classList.add('card__subtext');\r\n\tcard__subtext_2.innerText = '$299';\r\n\r\n\tcard_2.appendChild(card__image_2);\r\n\tcard_2.appendChild(card__title_2);\r\n\tcard_2.appendChild(card__description_2);\r\n\tcard_2.appendChild(card__subtext_2);\r\n\r\n\tconst card_3 = document.createElement('div');\r\n\tcard_3.classList.add('card');\r\n\r\n\tconst card__image_3 = document.createElement('img');\r\n\tcard__image_3.classList.add('card__image');\r\n\tcard__image_3.src = 'transform.gif';\r\n\r\n\tconst card__title_3 = document.createElement('div');\r\n\tcard__title_3.classList.add('card__text');\r\n\tcard__title_3.innerText = 'Transforming Furikake Gohan';\r\n\r\n\tconst card__description_3 = document.createElement('p');\r\n\tcard__description_3.classList.add('card__text');\r\n\tcard__description_3.innerText =\r\n\t\t'A classic Japanese comfort food with a twist! Our special furikake seasoning mix transforms simple rice into a flavorful dish. Served with your choice of protein.';\r\n\r\n\tconst card__subtext_3 = document.createElement('p');\r\n\tcard__subtext_3.classList.add('card__subtext');\r\n\tcard__subtext_3.innerText = '$199';\r\n\r\n\tcard_3.appendChild(card__image_3);\r\n\tcard_3.appendChild(card__title_3);\r\n\tcard_3.appendChild(card__description_3);\r\n\tcard_3.appendChild(card__subtext_3);\r\n\r\n\tcontainer.appendChild(card_1);\r\n\tcontainer.appendChild(card_2);\r\n\tcontainer.appendChild(card_3);\r\n\r\n\treturn container;\r\n})();\n\n//# sourceURL=webpack://restuarant-page/./src/components/menu.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _assets_erina_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/erina.jpg */ \"./src/assets/erina.jpg\");\n/* harmony import */ var _assets_ryo_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/ryo.jpg */ \"./src/assets/ryo.jpg\");\n/* harmony import */ var _assets_egg_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/egg.png */ \"./src/assets/egg.png\");\n/* harmony import */ var _assets_roast_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/roast.jpg */ \"./src/assets/roast.jpg\");\n/* harmony import */ var _assets_transform_gif__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/transform.gif */ \"./src/assets/transform.gif\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header */ \"./src/components/header.js\");\n/* harmony import */ var _components_home__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home */ \"./src/components/home.js\");\n/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/menu */ \"./src/components/menu.js\");\n/* harmony import */ var _components_contact__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/contact */ \"./src/components/contact.js\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/footer */ \"./src/components/footer.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst main = () => {\r\n   const main = document.createElement('main');\r\n   main.appendChild(_components_home__WEBPACK_IMPORTED_MODULE_7__.home);\r\n\r\n   _components_header__WEBPACK_IMPORTED_MODULE_6__.header.nav__item_1.addEventListener('click', () => {\r\n      while (main.firstChild) {\r\n         main.removeChild(main.firstChild);\r\n      }\r\n      main.appendChild(_components_home__WEBPACK_IMPORTED_MODULE_7__.home);\r\n   });\r\n\r\n   _components_header__WEBPACK_IMPORTED_MODULE_6__.header.nav__item_2.addEventListener('click', () => {\r\n      while (main.firstChild) {\r\n         main.removeChild(main.firstChild);\r\n      }\r\n      main.appendChild(_components_menu__WEBPACK_IMPORTED_MODULE_8__.menu);\r\n   });\r\n\r\n   _components_header__WEBPACK_IMPORTED_MODULE_6__.header.nav__item_3.addEventListener('click', () => {\r\n      while (main.firstChild) {\r\n         main.removeChild(main.firstChild);\r\n      }\r\n      main.appendChild(_components_contact__WEBPACK_IMPORTED_MODULE_9__.contact);\r\n   });\r\n\r\n   return main;\r\n}\r\n\r\nconst content = document.getElementById('content')\r\ncontent.appendChild(_components_header__WEBPACK_IMPORTED_MODULE_6__.header.header);\r\ncontent.appendChild(main());\r\ncontent.appendChild(_components_footer__WEBPACK_IMPORTED_MODULE_10__.footer);\r\n\n\n//# sourceURL=webpack://restuarant-page/./src/index.js?");

/***/ }),

/***/ "./src/assets/egg.png":
/*!****************************!*\
  !*** ./src/assets/egg.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"egg.png\";\n\n//# sourceURL=webpack://restuarant-page/./src/assets/egg.png?");

/***/ }),

/***/ "./src/assets/erina.jpg":
/*!******************************!*\
  !*** ./src/assets/erina.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"erina.jpg\";\n\n//# sourceURL=webpack://restuarant-page/./src/assets/erina.jpg?");

/***/ }),

/***/ "./src/assets/oswald-bold.ttf":
/*!************************************!*\
  !*** ./src/assets/oswald-bold.ttf ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"oswald-bold.ttf\";\n\n//# sourceURL=webpack://restuarant-page/./src/assets/oswald-bold.ttf?");

/***/ }),

/***/ "./src/assets/oswald.ttf":
/*!*******************************!*\
  !*** ./src/assets/oswald.ttf ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"oswald.ttf\";\n\n//# sourceURL=webpack://restuarant-page/./src/assets/oswald.ttf?");

/***/ }),

/***/ "./src/assets/roast.jpg":
/*!******************************!*\
  !*** ./src/assets/roast.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"roast.jpg\";\n\n//# sourceURL=webpack://restuarant-page/./src/assets/roast.jpg?");

/***/ }),

/***/ "./src/assets/ryo.jpg":
/*!****************************!*\
  !*** ./src/assets/ryo.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ryo.jpg\";\n\n//# sourceURL=webpack://restuarant-page/./src/assets/ryo.jpg?");

/***/ }),

/***/ "./src/assets/sedona.ttf":
/*!*******************************!*\
  !*** ./src/assets/sedona.ttf ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"sedona.ttf\";\n\n//# sourceURL=webpack://restuarant-page/./src/assets/sedona.ttf?");

/***/ }),

/***/ "./src/assets/transform.gif":
/*!**********************************!*\
  !*** ./src/assets/transform.gif ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"transform.gif\";\n\n//# sourceURL=webpack://restuarant-page/./src/assets/transform.gif?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;