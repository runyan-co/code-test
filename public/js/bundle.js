"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/bundle"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RecordTable.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RecordTable.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'RecordTable',
  data: function data() {
    return {
      fields: [{
        key: 'uuid',
        sortable: false
      }, {
        key: 'name',
        sortable: true
      }, {
        key: 'status',
        sortable: true
      }],
      items: [],
      selected: {}
    };
  },
  methods: {
    loadRecords: function loadRecords() {
      var _this = this;

      axios.post('/api/record/stored').then(function (response) {
        return _this.items = response.data;
      });
    },
    onRowSelected: function onRowSelected(selectedRows) {
      this.selected = selectedRows[0];
      this.$bvModal.show('details');
    },
    clearSelected: function clearSelected() {
      this.$refs.selectableTable.clearSelected();
    }
  },
  beforeMount: function beforeMount() {
    this.loadRecords();
  }
});

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _components_RecordTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/RecordTable */ "./resources/js/components/RecordTable.vue");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';



vue__WEBPACK_IMPORTED_MODULE_1__.default.use(bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__.BootstrapVue);
var app = new vue__WEBPACK_IMPORTED_MODULE_1__.default({
  el: '#app',
  components: {
    'record-table': _components_RecordTable__WEBPACK_IMPORTED_MODULE_0__.default
  }
});

/***/ }),

/***/ "./resources/scss/app.scss":
/*!*********************************!*\
  !*** ./resources/scss/app.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/js/components/RecordTable.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/RecordTable.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RecordTable_vue_vue_type_template_id_58f69e62_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RecordTable.vue?vue&type=template&id=58f69e62&scoped=true& */ "./resources/js/components/RecordTable.vue?vue&type=template&id=58f69e62&scoped=true&");
/* harmony import */ var _RecordTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RecordTable.vue?vue&type=script&lang=js& */ "./resources/js/components/RecordTable.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _RecordTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _RecordTable_vue_vue_type_template_id_58f69e62_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _RecordTable_vue_vue_type_template_id_58f69e62_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "58f69e62",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/RecordTable.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/RecordTable.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/RecordTable.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecordTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RecordTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RecordTable.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecordTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/RecordTable.vue?vue&type=template&id=58f69e62&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/RecordTable.vue?vue&type=template&id=58f69e62&scoped=true& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RecordTable_vue_vue_type_template_id_58f69e62_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RecordTable_vue_vue_type_template_id_58f69e62_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RecordTable_vue_vue_type_template_id_58f69e62_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RecordTable.vue?vue&type=template&id=58f69e62&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RecordTable.vue?vue&type=template&id=58f69e62&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RecordTable.vue?vue&type=template&id=58f69e62&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RecordTable.vue?vue&type=template&id=58f69e62&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("b-table", {
        ref: "selectableTable",
        attrs: {
          striped: "",
          hover: "",
          "foot-clone": "",
          selectable: "",
          "select-mode": "single",
          "primary-key": "id",
          items: _vm.items,
          fields: _vm.fields
        },
        on: { "row-selected": _vm.onRowSelected }
      }),
      _vm._v(" "),
      _c("b-modal", { attrs: { id: "details", title: _vm.selected.name } }, [
        _c("h6", [_vm._v("Description:")]),
        _vm._v(" "),
        _c("p", [_vm._v(_vm._s(_vm.selected.description))]),
        _vm._v(" "),
        _c("h6", [_vm._v("Code:")]),
        _vm._v(" "),
        _c("p", [_vm._v(_vm._s(_vm.selected.code))])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/app","/js/vendor"], () => (__webpack_exec__("./resources/js/app.js"), __webpack_exec__("./resources/scss/app.scss")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);