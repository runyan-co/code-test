"use strict";
(self["webpackChunkalex_runyan_process_maker_code_test"] = self["webpackChunkalex_runyan_process_maker_code_test"] || []).push([["/js/bundle"],{

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
      id: this.record.id,
      form: {
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
  name: 'RecordTable',
  data: function data() {
    return {
      records: [],
      filterOn: [],
      filter: null,
      totalRecords: 1,
      sortDirection: 'asc',
      isBusy: false,
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
        errorMessage: '',
        saveText: ''
      }
    };
  },
  components: {
    RecordForm: _RecordForm__WEBPACK_IMPORTED_MODULE_1__.default
  },
  methods: {
    edit: function edit(record, index, button) {
      // Bind the row item (record) to the modal
      // to populate the for fields for editing or
      // review by the user
      this.editModal.record = record; // Set the save button text

      this.editModal.saveText = 'Save'; // Show the edit modal

      this.$root.$emit('bv::show::modal', this.editModal.id, button);
    },
    handleFiltered: function handleFiltered(filteredItems) {
      this.totalRecords = filteredItems.length;
    },
    handleClose: function handleClose(event) {
      // Reset the edit modal's target record
      // data only if the modal was closed
      if (!event.defaultPrevented) {
        this.editModal.record = {};
        this.editModal.error = false;
        this.editModal.errorMessage = '';
      }
    },
    handleOk: function handleOk(event) {
      // Prevent the modal from hiding until the
      // we get a response indicating the record
      // was successfully saved
      event.preventDefault(); // Send the request to save/save the record

      this.updateRecord();
    },
    deleteRecord: function deleteRecord(event) {
      var _this = this;

      // Show a confirmation modal before attempting
      // to delete the record
      this.confirmDelete().then(function (confirmed) {
        // If the user cancels their decision to
        // delete, then bail here
        if (!confirmed) {
          return;
        } // Otherwise, fire off a DELETE request
        // to the backend and act accordingly


        _this.attemptDelete().then(function (resp) {
          // Deletion was successful, so hide the edit modal
          _this.$root.$emit('bv::hide::modal', _this.editModal.id); // Fresh pull of data and repopulate the table


          _this.getRecords(); // Tell the BootstrapVue table instance to
          // refresh internally as well


          _this.$refs.table.refresh();
        })["catch"](function (e) {
          // If there was a problem deleting the record,
          // show an error message to the user.
          // todo Showing a more specific error message from the backend would be better here
          _this.editModal.error = true;
          _this.editModal.errorMessage = 'An error occurred while trying to delete this record.';
        });
      })["catch"](function (e) {});
    },
    updateRecord: function updateRecord() {
      var _this2 = this;

      // Send a POST request to the backend and
      // if successful (200 response), then sync
      // the data up for the specific record in
      // the table
      this.attemptSave().then(function (resp) {
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
        // todo Can be significantly improved by translating returned error message back into alerts/toasts for the user to see
        _this2.editModal.errorMessage = 'An error occurred while trying to update this record.';
        _this2.editModal.error = true;
      });
    },
    getRecords: function getRecords() {
      var _this3 = this;

      // Set the table state to busy while
      // the records are being retrieved
      this.isBusy = true;
      axios.post('/api/record/stored').then(function (resp) {
        return _this3.records = resp.data;
      })["catch"](function (e) {})["finally"](function () {
        return _this3.isBusy = false;
      });
    },
    confirmDelete: function confirmDelete() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", _this4.$bvModal.msgBoxConfirm('Are you sure you want to delete this record?', {
                  title: 'Confirm',
                  okVariant: 'danger',
                  okTitle: 'Yes, Delete',
                  cancelTitle: 'Cancel'
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    attemptDelete: function attemptDelete() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", axios["delete"]("/api/record/delete/".concat(_this5.$refs.form.id)));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    attemptSave: function attemptSave() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this6.editModal.saveText = 'Saving...'; // Referencing the $ref.form here as it
                // points to the form data only, rather
                // than the Vue instance data()
                // todo Improvement here would be form validation prior to firing off the request

                return _context3.abrupt("return", axios.post("/api/record/update/".concat(_this6.$refs.form.id), _this6.$refs.form.form));

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    }
  },
  beforeMount: function beforeMount() {
    this.getRecords();
  },
  mounted: function mounted() {
    this.totalRecords = this.records.length;
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
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/icons/plugin.js");
window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';



vue__WEBPACK_IMPORTED_MODULE_1__.default.use(bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__.BootstrapVue);
vue__WEBPACK_IMPORTED_MODULE_1__.default.use(bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__.BootstrapVueIcons);
window.app = new vue__WEBPACK_IMPORTED_MODULE_1__.default({
  el: '#app',
  components: {
    RecordTable: _components_RecordTable__WEBPACK_IMPORTED_MODULE_0__.default
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
                  value: _vm.form.uuid,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "uuid", $$v)
                  },
                  expression: "form.uuid"
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
                  value: _vm.form.name,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "name", $$v)
                  },
                  expression: "form.name"
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
                  value: _vm.form.status,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "status", $$v)
                  },
                  expression: "form.status"
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
                  value: _vm.form.description,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "description", $$v)
                  },
                  expression: "form.description"
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
                  value: _vm.form.code,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "code", $$v)
                  },
                  expression: "form.code"
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
                "label-for": "delete",
                "label-align-sm": "right"
              }
            },
            [
              _c(
                "b-link",
                {
                  staticClass: "text-danger",
                  attrs: { id: "delete", href: "javascript:" },
                  on: {
                    click: function($event) {
                      return _vm.$emit(
                        "delete-record",
                        _vm.record,
                        $event.target
                      )
                    }
                  }
                },
                [_vm._v("\n                Delete Record\n            ")]
              )
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
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { staticClass: "my-3", attrs: { cols: "4" } },
            [
              _c(
                "b-input-group",
                { attrs: { size: "sm" } },
                [
                  _c("b-form-input", {
                    attrs: {
                      id: "filter-input",
                      type: "search",
                      placeholder: "Type to Search"
                    },
                    model: {
                      value: _vm.filter,
                      callback: function($$v) {
                        _vm.filter = $$v
                      },
                      expression: "filter"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "b-input-group-append",
                    [
                      _c(
                        "b-button",
                        {
                          attrs: { disabled: !_vm.filter },
                          on: {
                            click: function($event) {
                              _vm.filter = ""
                            }
                          }
                        },
                        [_vm._v("Clear")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { staticClass: "my-3", attrs: { cols: "8" } },
            [
              _c("b-form-group", {
                staticClass: "mb-0 text-right",
                attrs: {
                  label: "Filter by:",
                  "label-cols-sm": "4",
                  "label-size": "sm",
                  "label-align-sm": "right"
                },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var ariaDescribedby = ref.ariaDescribedby
                      return [
                        _c(
                          "b-form-checkbox-group",
                          {
                            staticClass: "mt-1",
                            attrs: { "aria-describedby": ariaDescribedby },
                            model: {
                              value: _vm.filterOn,
                              callback: function($$v) {
                                _vm.filterOn = $$v
                              },
                              expression: "filterOn"
                            }
                          },
                          [
                            _c(
                              "b-form-checkbox",
                              { attrs: { value: "name" } },
                              [_vm._v("Name")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-form-checkbox",
                              { attrs: { value: "code" } },
                              [_vm._v("Code")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-form-checkbox",
                              { attrs: { value: "description" } },
                              [_vm._v("Description")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-form-checkbox",
                              { attrs: { value: "status" } },
                              [_vm._v("Status")]
                            )
                          ],
                          1
                        )
                      ]
                    }
                  }
                ])
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-overlay",
        { attrs: { show: _vm.isBusy } },
        [
          _c("b-table", {
            ref: "table",
            attrs: {
              borderless: "",
              striped: "",
              hover: "",
              "foot-clone": "",
              "primary-key": "id",
              "empty-filtered-text": "No records found matching your request",
              filter: _vm.filter,
              "filter-included-fields": _vm.filterOn,
              fields: _vm.fields,
              busy: _vm.isBusy,
              items: _vm.records
            },
            on: {
              "update:busy": function($event) {
                _vm.isBusy = $event
              }
            },
            scopedSlots: _vm._u([
              {
                key: "cell(actions)",
                fn: function(row) {
                  return [
                    _c(
                      "b-button",
                      {
                        staticClass: "mr-2",
                        attrs: { size: "sm" },
                        on: {
                          click: function($event) {
                            return _vm.edit(row.item, row.index, $event.target)
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                    Edit\n                    "
                        ),
                        _c("b-icon", {
                          attrs: {
                            icon: "pencil",
                            scale: "0.75",
                            "aria-hidden": "true",
                            variant: "light"
                          }
                        })
                      ],
                      1
                    )
                  ]
                }
              }
            ])
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            id: _vm.editModal.id,
            title: "Edit record",
            size: "lg",
            "cancel-title": "Cancel",
            "ok-title": _vm.editModal.saveText
          },
          on: { ok: _vm.handleOk, hide: _vm.handleClose }
        },
        [
          _c("record-form", {
            ref: "form",
            attrs: { record: _vm.editModal.record },
            on: { "delete-record": _vm.deleteRecord }
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
                "\n            " +
                  _vm._s(_vm.editModal.errorMessage) +
                  "\n        "
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