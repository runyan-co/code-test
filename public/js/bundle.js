"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/bundle"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RecordForm.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RecordForm.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
  name: 'RecordForm',
  props: ['record'],
  data: function data() {
    return {
      formData: {
        id: this.record.id,
        uuid: this.record.uuid,
        name: this.record.name,
        description: this.record.description,
        code: this.record.code,
        status: this.record.status
      },
      options: {
        status: ['Active', 'Inactive']
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RecordTable.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RecordTable.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RecordForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RecordForm */ "./resources/js/components/RecordForm.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'RecordTable',
  data: function data() {
    return {
      items: [],
      fields: ['uuid', 'name', {
        key: 'status',
        sortable: true
      }, {
        key: 'actions',
        label: 'Actions'
      }],
      editModal: {
        id: 'edit-modal',
        record: {},
        error: false,
        errorMessage: ''
      }
    };
  },
  components: {
    RecordForm: _RecordForm__WEBPACK_IMPORTED_MODULE_1__.default
  },
  computed: {
    hasItems: function hasItems() {
      return this.items.length > 0;
    },
    totalItems: function totalItems() {
      return this.items.length;
    }
  },
  methods: {
    edit: function edit(record, index, button) {
      // Bind the row item (record) to the modal
      // to populate the for fields for editing or
      // review by the user
      this.editModal.record = record; // Show the edit modal

      this.$root.$emit('bv::show::modal', this.editModal.id, button);
    },
    handleClose: function handleClose(event) {
      // Reset the edit modal's target record
      // data only if the modal was closed
      if (!event.defaultPrevented) {
        this.editModal.record = {};
        this.editModal.error = false;
      }
    },
    handleOk: function handleOk(event) {
      // Prevent the modal from hiding until the
      // we get a response indicating the record
      // was successfully saved
      event.preventDefault(); // Send the request to save/save the record

      this.updateRecord();
    },
    getRecords: function getRecords() {
      var _this = this;

      axios.post('/api/record/stored').then(function (r) {
        return _this.items = r.data;
      });
    },
    updateRecord: function updateRecord() {
      var _this2 = this;

      // Send a POST request to the backend and
      // if successful (200 response), then sync
      // the data up for the specific record in
      // the table
      this.attemptUpdate().then(function (resp) {
        // The response property "data" is an
        // object representing the just now
        // updated record
        Object.keys(resp.data).forEach(function (key) {
          // Only update the row data that has
          // matching keys with the response data
          if (Object.keys(_this2.editModal.record).includes(key)) {
            _this2.editModal.record[key] = resp.data[key];
          }
        }); // Hide the edit modal since we are finished
        // update the Vue instance with the latest

        _this2.$root.$emit('bv::hide::modal', _this2.editModal.id);
      })["catch"](function (e) {
        // Show the error message to the user
        // if there was an error
        _this2.editModal.error = true;
      })["finally"](function () {//
      });
    },
    attemptUpdate: function attemptUpdate() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // Set the modal state to loading
                _this3.editModal.loading = true; // Referencing the $ref.form here as it
                // points to the new data the user has
                // input in the settings, which is what
                // we want to use to update the record in
                // the database

                return _context.abrupt("return", axios.post("/api/record/update/".concat(_this3.$refs.form.formData.id), _this3.$refs.form.formData));

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  beforeMount: function beforeMount() {
    this.getRecords();
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
window.app = new vue__WEBPACK_IMPORTED_MODULE_1__.default({
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

/***/ "./resources/js/components/RecordForm.vue":
/*!************************************************!*\
  !*** ./resources/js/components/RecordForm.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RecordForm_vue_vue_type_template_id_d30cb240_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RecordForm.vue?vue&type=template&id=d30cb240&scoped=true& */ "./resources/js/components/RecordForm.vue?vue&type=template&id=d30cb240&scoped=true&");
/* harmony import */ var _RecordForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RecordForm.vue?vue&type=script&lang=js& */ "./resources/js/components/RecordForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _RecordForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _RecordForm_vue_vue_type_template_id_d30cb240_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _RecordForm_vue_vue_type_template_id_d30cb240_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "d30cb240",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/RecordForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

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

/***/ "./resources/js/components/RecordForm.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/RecordForm.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecordForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RecordForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RecordForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecordForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/components/RecordForm.vue?vue&type=template&id=d30cb240&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/RecordForm.vue?vue&type=template&id=d30cb240&scoped=true& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RecordForm_vue_vue_type_template_id_d30cb240_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RecordForm_vue_vue_type_template_id_d30cb240_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RecordForm_vue_vue_type_template_id_d30cb240_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RecordForm.vue?vue&type=template&id=d30cb240&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RecordForm.vue?vue&type=template&id=d30cb240&scoped=true&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RecordForm.vue?vue&type=template&id=d30cb240&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RecordForm.vue?vue&type=template&id=d30cb240&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
      _c(
        "b-form",
        {
          staticClass: "py-4 pr-5",
          on: {
            submit: function($event) {
              $event.stopPropagation()
            }
          }
        },
        [
          _c(
            "b-form-group",
            {
              attrs: {
                id: "fieldset-horizontal",
                "label-cols-lg": "2",
                "content-cols-lg": "10",
                label: "UUID:",
                "label-for": "uuid",
                "label-align-sm": "right",
                description: "Cannot be changed."
              }
            },
            [
              _c("b-form-input", {
                attrs: { type: "text", id: "uuid", disabled: "", readonly: "" },
                model: {
                  value: _vm.formData.uuid,
                  callback: function($$v) {
                    _vm.$set(_vm.formData, "uuid", $$v)
                  },
                  expression: "formData.uuid"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-form-group",
            {
              attrs: {
                id: "fieldset-horizontal",
                "label-cols-lg": "2",
                "content-cols-lg": "10",
                label: "Name:",
                "label-for": "name",
                "label-align-sm": "right"
              }
            },
            [
              _c("b-form-input", {
                attrs: { type: "text", id: "name" },
                model: {
                  value: _vm.formData.name,
                  callback: function($$v) {
                    _vm.$set(_vm.formData, "name", $$v)
                  },
                  expression: "formData.name"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-form-group",
            {
              attrs: {
                id: "fieldset-horizontal",
                "label-cols-lg": "2",
                "content-cols-lg": "10",
                label: "Status:",
                "label-for": "status",
                "label-align-sm": "right"
              }
            },
            [
              _c("b-form-select", {
                attrs: { options: _vm.options.status },
                model: {
                  value: _vm.formData.status,
                  callback: function($$v) {
                    _vm.$set(_vm.formData, "status", $$v)
                  },
                  expression: "formData.status"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-form-group",
            {
              attrs: {
                id: "fieldset-horizontal",
                "label-cols-lg": "2",
                "content-cols-lg": "10",
                label: "Description:",
                "label-for": "status",
                "label-align-sm": "right"
              }
            },
            [
              _c("b-form-textarea", {
                attrs: { id: "description", rows: "4" },
                model: {
                  value: _vm.formData.description,
                  callback: function($$v) {
                    _vm.$set(_vm.formData, "description", $$v)
                  },
                  expression: "formData.description"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-form-group",
            {
              attrs: {
                id: "fieldset-horizontal",
                "label-cols-lg": "2",
                "content-cols-lg": "10",
                label: "Code:",
                "label-for": "code",
                "label-align-sm": "right"
              }
            },
            [
              _c("b-form-textarea", {
                attrs: { id: "code", rows: "4" },
                model: {
                  value: _vm.formData.code,
                  callback: function($$v) {
                    _vm.$set(_vm.formData, "code", $$v)
                  },
                  expression: "formData.code"
                }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



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
        attrs: {
          striped: "",
          hover: "",
          "foot-clone": "",
          "primary-key": "id",
          fields: _vm.fields,
          items: _vm.items
        },
        scopedSlots: _vm._u([
          {
            key: "cell(actions)",
            fn: function(row) {
              return [
                _c(
                  "b-button",
                  {
                    staticClass: "mr-1",
                    attrs: { size: "sm" },
                    on: {
                      click: function($event) {
                        return _vm.edit(row.item, row.index, $event.target)
                      }
                    }
                  },
                  [_vm._v("\n                Edit\n            ")]
                )
              ]
            }
          }
        ])
      }),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            id: _vm.editModal.id,
            title: "Edit record",
            size: "lg",
            "cancel-title": "Cancel",
            "ok-title": "Save"
          },
          on: { ok: _vm.handleOk, hide: _vm.handleClose }
        },
        [
          _c("record-form", {
            ref: "form",
            attrs: { record: _vm.editModal.record }
          }),
          _vm._v(" "),
          _c(
            "b-alert",
            {
              attrs: { variant: "danger", dismissible: "" },
              model: {
                value: _vm.editModal.error,
                callback: function($$v) {
                  _vm.$set(_vm.editModal, "error", $$v)
                },
                expression: "editModal.error"
              }
            },
            [
              _vm._v(
                "\n            There was an error while trying to update this record.\n        "
              )
            ]
          )
        ],
        1
      )
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