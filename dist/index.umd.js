/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["h"] = factory();
	else
		root["h"] = factory();
})(self, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./components/lib/ConferenceWhiteboard/index.js":
/*!******************************************************!*\
  !*** ./components/lib/ConferenceWhiteboard/index.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_main_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/main.vue */ \"./components/lib/ConferenceWhiteboard/src/main.vue\");\n\n\n_src_main_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].install = function (Vue) {\n  Vue.component(_src_main_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].name, _src_main_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_src_main_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n//# sourceURL=webpack://h/./components/lib/ConferenceWhiteboard/index.js?");

/***/ }),

/***/ "./components/lib/WaterMark/index.js":
/*!*******************************************!*\
  !*** ./components/lib/WaterMark/index.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_main_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/main.vue */ \"./components/lib/WaterMark/src/main.vue\");\n\n\n_src_main_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].install = function (Vue) {\n  Vue.component(_src_main_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].name, _src_main_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_src_main_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n//# sourceURL=webpack://h/./components/lib/WaterMark/index.js?");

/***/ }),

/***/ "./components/lib/index.js":
/*!*********************************!*\
  !*** ./components/lib/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ConferenceWhiteboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConferenceWhiteboard */ \"./components/lib/ConferenceWhiteboard/index.js\");\n/* harmony import */ var _WaterMark__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WaterMark */ \"./components/lib/WaterMark/index.js\");\n\n\n\nconst components = {\n  ConferenceWhiteboard: _ConferenceWhiteboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  WaterMark: _WaterMark__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n};\nconst install = function (Vue) {\n  if (install.installed) return; //避免重复安装\n  Object.keys(components).forEach((key) => {\n    Vue.component(components[key].name, components[key]);\n  });\n};\n\nconst API = {\n  install,\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (API);\n\n\n//# sourceURL=webpack://h/./components/lib/index.js?");

/***/ }),

/***/ "./components/lib/ConferenceWhiteboard/src/main.vue":
/*!**********************************************************!*\
  !*** ./components/lib/ConferenceWhiteboard/src/main.vue ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_vue_vue_type_template_id_5f4875e5_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.vue?vue&type=template&id=5f4875e5&scoped=true */ \"./components/lib/ConferenceWhiteboard/src/main.vue?vue&type=template&id=5f4875e5&scoped=true\");\n/* harmony import */ var _main_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.vue?vue&type=script&lang=js */ \"./components/lib/ConferenceWhiteboard/src/main.vue?vue&type=script&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n;\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _main_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _main_vue_vue_type_template_id_5f4875e5_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,\n  _main_vue_vue_type_template_id_5f4875e5_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  \"5f4875e5\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"components/lib/ConferenceWhiteboard/src/main.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://h/./components/lib/ConferenceWhiteboard/src/main.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./components/lib/ConferenceWhiteboard/src/main.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./components/lib/ConferenceWhiteboard/src/main.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"ConferenceWhiteboard\",\n  data() {\n    return {\n      context: null,\n      drawing: false,\n      drawingMode: false, // 用于切换绘制和橡皮擦模式\n    };\n  },\n  mounted() {\n    this.context = this.$refs.canvas.getContext(\"2d\");\n  },\n  methods: {\n    startDrawing(event) {\n      this.drawing = true;\n      const x = event.clientX;\n      const y = event.clientY;\n      this.context.beginPath();\n      this.context.moveTo(x, y);\n    },\n    draw(event) {\n      if (!this.drawing) return;\n      const x = event.clientX;\n      const y = event.clientY;\n\n      if (this.drawingMode) {\n        // 橡皮擦模式\n        this.context.clearRect(x, y, 10, 10); // 使用橡皮擦效果清除部分区域\n      } else {\n        // 绘制模式\n        this.context.lineTo(x, y);\n        this.context.stroke();\n      }\n    },\n    stopDrawing() {\n      this.drawing = false;\n    },\n    toggleMode() {\n      this.drawingMode = !this.drawingMode;\n    },\n  },\n});\n\n\n//# sourceURL=webpack://h/./components/lib/ConferenceWhiteboard/src/main.vue?./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./components/lib/WaterMark/src/main.vue":
/*!***********************************************!*\
  !*** ./components/lib/WaterMark/src/main.vue ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_vue_vue_type_template_id_444d5294__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.vue?vue&type=template&id=444d5294 */ \"./components/lib/WaterMark/src/main.vue?vue&type=template&id=444d5294\");\n/* harmony import */ var _main_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.vue?vue&type=script&lang=js */ \"./components/lib/WaterMark/src/main.vue?vue&type=script&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n;\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _main_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _main_vue_vue_type_template_id_444d5294__WEBPACK_IMPORTED_MODULE_0__.render,\n  _main_vue_vue_type_template_id_444d5294__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"components/lib/WaterMark/src/main.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://h/./components/lib/WaterMark/src/main.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./components/lib/WaterMark/src/main.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./components/lib/WaterMark/src/main.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"WaterMark\",\n  props: {\n    // 显示的水印文本\n    inputText: {\n      type: String,\n      default: \"waterMark\",\n    },\n  },\n  data() {\n    return {\n      observer: null,\n    };\n  },\n  mounted() {\n    this.init();\n    this.Monitor();\n  },\n  methods: {\n    // 生成水印DOM节点\n    init() {\n      let canvas = document.createElement(\"canvas\");\n      canvas.id = \"canvas\";\n      canvas.width = \"200\"; // 单个水印的宽高\n      canvas.height = \"130\";\n      this.maskDiv = document.createElement(\"div\");\n      let ctx = canvas.getContext(\"2d\");\n      // context.font = \"fontStyle fontWeight fontSize fontFamily\";\n      ctx.font = \"normal 18px Microsoft Yahei\"; // 设置样式\n      ctx.fillStyle = \"rgba(112, 113, 114, 0.1)\"; // 水印字体颜色\n      ctx.rotate((30 * Math.PI) / 180); // 水印偏转角度\n      ctx.fillText(this.inputText, 30, 20);\n      let src = canvas.toDataURL(\"image/png\");\n      this.maskDiv.style.position = \"fixed\";\n      this.maskDiv.style.zIndex = \"9999\";\n      this.maskDiv.id = \"_waterMark\";\n      this.maskDiv.style.top = \"0\";\n      this.maskDiv.style.left = \"0\";\n      this.maskDiv.style.height = \"100%\";\n      this.maskDiv.style.width = \"100%\";\n      this.maskDiv.style.pointerEvents = \"none\";\n      this.maskDiv.style.backgroundImage = \"URL(\" + src + \")\";\n      // 水印节点插到body下\n      document.body.appendChild(this.maskDiv);\n    },\n    // 监听更改，更改后执行callback回调函数，会得到一个相关信息的参数对象\n    Monitor() {\n      this.observer = new MutationObserver((mutationsList) => {\n        this.observer.disconnect(); // 停止监听\n        // 删除水印\n        const waterMark = document.getElementById(\"_waterMark\");\n        if (waterMark) {\n          document.body.removeChild(waterMark);\n        }\n        this.init(); // 重新生成水印\n        this.observer.observe(document.body, {\n          childList: true,\n          attributes: true,\n          subtree: true,\n          attributesOldValue: true,\n          characterData: true,\n          characterDataOldValue: true,\n        }); // 重新开始监听\n      });\n      this.observer.observe(document.body, {\n        childList: true,\n        attributes: true,\n        subtree: true,\n        attributesOldValue: true,\n        characterData: true,\n        characterDataOldValue: true,\n      });\n    },\n  },\n  beforeDestroy() {\n    this.observer.disconnect();\n  },\n});\n\n\n//# sourceURL=webpack://h/./components/lib/WaterMark/src/main.vue?./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./components/lib/ConferenceWhiteboard/src/main.vue?vue&type=script&lang=js":
/*!**********************************************************************************!*\
  !*** ./components/lib/ConferenceWhiteboard/src/main.vue?vue&type=script&lang=js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./main.vue?vue&type=script&lang=js */ \"./node_modules/vue-loader/lib/index.js??vue-loader-options!./components/lib/ConferenceWhiteboard/src/main.vue?vue&type=script&lang=js\");\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://h/./components/lib/ConferenceWhiteboard/src/main.vue?");

/***/ }),

/***/ "./components/lib/WaterMark/src/main.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./components/lib/WaterMark/src/main.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./main.vue?vue&type=script&lang=js */ \"./node_modules/vue-loader/lib/index.js??vue-loader-options!./components/lib/WaterMark/src/main.vue?vue&type=script&lang=js\");\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://h/./components/lib/WaterMark/src/main.vue?");

/***/ }),

/***/ "./components/lib/ConferenceWhiteboard/src/main.vue?vue&type=template&id=5f4875e5&scoped=true":
/*!****************************************************************************************************!*\
  !*** ./components/lib/ConferenceWhiteboard/src/main.vue?vue&type=template&id=5f4875e5&scoped=true ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_5f4875e5_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render; },\n/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_5f4875e5_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_5f4875e5_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[1]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./main.vue?vue&type=template&id=5f4875e5&scoped=true */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./components/lib/ConferenceWhiteboard/src/main.vue?vue&type=template&id=5f4875e5&scoped=true\");\n\n\n//# sourceURL=webpack://h/./components/lib/ConferenceWhiteboard/src/main.vue?");

/***/ }),

/***/ "./components/lib/WaterMark/src/main.vue?vue&type=template&id=444d5294":
/*!*****************************************************************************!*\
  !*** ./components/lib/WaterMark/src/main.vue?vue&type=template&id=444d5294 ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_444d5294__WEBPACK_IMPORTED_MODULE_0__.render; },\n/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_444d5294__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_444d5294__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[1]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./main.vue?vue&type=template&id=444d5294 */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./components/lib/WaterMark/src/main.vue?vue&type=template&id=444d5294\");\n\n\n//# sourceURL=webpack://h/./components/lib/WaterMark/src/main.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./components/lib/ConferenceWhiteboard/src/main.vue?vue&type=template&id=5f4875e5&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./components/lib/ConferenceWhiteboard/src/main.vue?vue&type=template&id=5f4875e5&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; },\n/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }\n/* harmony export */ });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c\n  return _c(\"div\", { staticClass: \"conferenceWhiteboardBox\" }, [\n    _c(\"div\", { staticClass: \"tools\" }, [\n      _c(\"button\", { on: { click: _vm.toggleMode } }, [\n        _vm._v(\n          \"\\n      \" +\n            _vm._s(_vm.drawingMode ? \"切换橡皮擦\" : \"切换绘制\") +\n            \"\\n    \"\n        ),\n      ]),\n    ]),\n    _vm._v(\" \"),\n    _c(\"canvas\", {\n      ref: \"canvas\",\n      staticStyle: { border: \"1px solid #000\" },\n      on: {\n        mousedown: _vm.startDrawing,\n        mousemove: _vm.draw,\n        mouseup: _vm.stopDrawing,\n        mouseleave: _vm.stopDrawing,\n      },\n    }),\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://h/./components/lib/ConferenceWhiteboard/src/main.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet%5B1%5D.rules%5B1%5D!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./components/lib/WaterMark/src/main.vue?vue&type=template&id=444d5294":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./components/lib/WaterMark/src/main.vue?vue&type=template&id=444d5294 ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; },\n/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }\n/* harmony export */ });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c\n  return _c(\"div\")\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://h/./components/lib/WaterMark/src/main.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet%5B1%5D.rules%5B1%5D!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ normalizeComponent; }\n/* harmony export */ });\n/* globals __VUE_SSR_CONTEXT__ */\n\n// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nfunction normalizeComponent(\n  scriptExports,\n  render,\n  staticRenderFns,\n  functionalTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier /* server only */,\n  shadowMode /* vue-cli only */\n) {\n  // Vue.extend constructor export interop\n  var options =\n    typeof scriptExports === 'function' ? scriptExports.options : scriptExports\n\n  // render functions\n  if (render) {\n    options.render = render\n    options.staticRenderFns = staticRenderFns\n    options._compiled = true\n  }\n\n  // functional template\n  if (functionalTemplate) {\n    options.functional = true\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = 'data-v-' + scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) {\n    // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = shadowMode\n      ? function () {\n          injectStyles.call(\n            this,\n            (options.functional ? this.parent : this).$root.$options.shadowRoot\n          )\n        }\n      : injectStyles\n  }\n\n  if (hook) {\n    if (options.functional) {\n      // for template-only hot-reload because in that case the render fn doesn't\n      // go through the normalizer\n      options._injectStyles = hook\n      // register for functional component in vue file\n      var originalRender = options.render\n      options.render = function renderWithStyleInjection(h, context) {\n        hook.call(context)\n        return originalRender(h, context)\n      }\n    } else {\n      // inject component registration as beforeCreate hook\n      var existing = options.beforeCreate\n      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]\n    }\n  }\n\n  return {\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n//# sourceURL=webpack://h/./node_modules/vue-loader/lib/runtime/componentNormalizer.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./components/lib/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});