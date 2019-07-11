(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[66],{

/***/ "./Assets/Trading/Categories/icon-trade-categories.jsx":
/*!*************************************************************!*\
  !*** ./Assets/Trading/Categories/icon-trade-categories.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ \"../node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"../node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var Assets_Trading_Types_icon_trade_types_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Assets/Trading/Types/icon-trade-types.jsx */ \"./Assets/Trading/Types/icon-trade-types.jsx\");\n\n\n\n\n\nvar IconTradeCategory = function IconTradeCategory(_ref) {\n  var category = _ref.category,\n      className = _ref.className;\n  var IconCategory;\n\n  if (category) {\n    switch (category) {\n      case 'rise_fall':\n        IconCategory = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n          className: \"category-wrapper\"\n        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Assets_Trading_Types_icon_trade_types_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          className: \"category-type\",\n          type: \"call\"\n        })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n          className: \"category-wrapper\"\n        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Assets_Trading_Types_icon_trade_types_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          className: \"category-type\",\n          type: \"put\"\n        })));\n        break;\n\n      case 'rise_fall_equal':\n        IconCategory = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n          className: \"category-wrapper\"\n        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Assets_Trading_Types_icon_trade_types_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          className: \"category-type\",\n          type: \"calle\"\n        })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n          className: \"category-wrapper\"\n        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Assets_Trading_Types_icon_trade_types_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          className: \"category-type\",\n          type: \"pute\"\n        })));\n        break;\n\n      case 'high_low':\n        IconCategory = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n          className: \"category-wrapper\"\n        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Assets_Trading_Types_icon_trade_types_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          className: \"category-type\",\n          type: \"call_barrier\"\n        })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n          className: \"category-wrapper\"\n        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Assets_Trading_Types_icon_trade_types_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          className: \"category-type\",\n          type: \"put_barrier\"\n        })));\n        break;\n\n      case 'end':\n        IconCategory = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n          className: \"category-wrapper\"\n        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Assets_Trading_Types_icon_trade_types_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          className: \"category-type\",\n          type: \"expirymiss\"\n        })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n          className: \"category-wrapper\"\n        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Assets_Trading_Types_icon_trade_types_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          className: \"category-type\",\n          type: \"expiryrange\"\n        })));\n        break;\n\n      case 'stay':\n        IconCategory = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n          className: \"category-wrapper\"\n        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Assets_Trading_Types_icon_trade_types_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          className: \"category-type\",\n          type: \"range\"\n        })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n          className: \"category-wrapper\"\n        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Assets_Trading_Types_icon_trade_types_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          className: \"category-type\",\n          type: \"upordown\"\n        })));\n        break;\n\n      case 'match_diff':\n        IconCategory = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n          className: \"category-wrapper\"\n        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Assets_Trading_Types_icon_trade_types_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          className: \"category-type\",\n          type: \"digitmatch\"\n        })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n          className: \"category-wrapper\"\n        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Assets_Trading_Types_icon_trade_types_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          className: \"category-type\",\n          type: \"digitdiff\"\n        })));\n        break;\n\n      case 'even_odd':\n        IconCategory = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n          className: \"category-wrapper\"\n        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Assets_Trading_Types_icon_trade_types_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          className: \"category-type\",\n          type: \"digiteven\"\n        })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n          className: \"category-wrapper\"\n        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Assets_Trading_Types_icon_trade_types_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          className: \"category-type\",\n          type: \"digitodd\"\n        })));\n        break;\n\n      case 'over_under':\n        IconCategory = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n          className: \"category-wrapper\"\n        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Assets_Trading_Types_icon_trade_types_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          className: \"category-type\",\n          type: \"digitover\"\n        })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n          className: \"category-wrapper\"\n        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Assets_Trading_Types_icon_trade_types_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          className: \"category-type\",\n          type: \"digitunder\"\n        })));\n        break;\n\n      case 'touch':\n        IconCategory = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n          className: \"category-wrapper\"\n        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Assets_Trading_Types_icon_trade_types_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          className: \"category-type\",\n          type: \"onetouch\"\n        })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n          className: \"category-wrapper\"\n        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Assets_Trading_Types_icon_trade_types_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          className: \"category-type\",\n          type: \"notouch\"\n        })));\n        break;\n\n      case 'asian':\n        IconCategory = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n          className: \"category-wrapper\"\n        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Assets_Trading_Types_icon_trade_types_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          className: \"category-type\",\n          type: \"asianu\"\n        })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n          className: \"category-wrapper\"\n        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Assets_Trading_Types_icon_trade_types_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          className: \"category-type\",\n          type: \"asiand\"\n        })));\n        break;\n\n      case 'lb_call':\n        IconCategory = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n          className: \"category-wrapper\"\n        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Assets_Trading_Types_icon_trade_types_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          className: \"category-type\",\n          type: \"lbfloatcall\"\n        }));\n        break;\n\n      case 'lb_put':\n        IconCategory = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n          className: \"category-wrapper\"\n        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Assets_Trading_Types_icon_trade_types_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          className: \"category-type\",\n          type: \"lbfloatput\"\n        }));\n        break;\n\n      case 'lb_high_low':\n        IconCategory = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n          className: \"category-wrapper\"\n        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Assets_Trading_Types_icon_trade_types_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          className: \"category-type\",\n          type: \"lbhighlow\"\n        }));\n        break;\n\n      default:\n        IconCategory = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n          className: \"category-wrapper\"\n        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Assets_Trading_Types_icon_trade_types_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          className: \"category-type\",\n          type: \"unknown\"\n        }));\n        break;\n    }\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('categories-container', className)\n  }, IconCategory);\n};\n\nIconTradeCategory.propTypes = {\n  category: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (IconTradeCategory);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Bc3NldHMvVHJhZGluZy9DYXRlZ29yaWVzL2ljb24tdHJhZGUtY2F0ZWdvcmllcy5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9Bc3NldHMvVHJhZGluZy9DYXRlZ29yaWVzL2ljb24tdHJhZGUtY2F0ZWdvcmllcy5qc3g/ZDA2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NOYW1lcyAgICBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBQcm9wVHlwZXMgICAgIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0ICAgICAgICAgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEljb25UcmFkZVR5cGUgZnJvbSAnQXNzZXRzL1RyYWRpbmcvVHlwZXMvaWNvbi10cmFkZS10eXBlcy5qc3gnO1xuXG5jb25zdCBJY29uVHJhZGVDYXRlZ29yeSA9ICh7IGNhdGVnb3J5LCBjbGFzc05hbWUgfSkgPT4ge1xuICAgIGxldCBJY29uQ2F0ZWdvcnk7XG4gICAgaWYgKGNhdGVnb3J5KSB7XG4gICAgICAgIHN3aXRjaCAoY2F0ZWdvcnkpIHtcbiAgICAgICAgICAgIGNhc2UgJ3Jpc2VfZmFsbCc6XG4gICAgICAgICAgICAgICAgSWNvbkNhdGVnb3J5ID0gKFxuICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2F0ZWdvcnktd3JhcHBlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25UcmFkZVR5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjYXRlZ29yeS10eXBlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdjYWxsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXRlZ29yeS13cmFwcGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblRyYWRlVHlwZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2NhdGVnb3J5LXR5cGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3B1dCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3Jpc2VfZmFsbF9lcXVhbCc6XG4gICAgICAgICAgICAgICAgSWNvbkNhdGVnb3J5ID0gKFxuICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2F0ZWdvcnktd3JhcHBlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25UcmFkZVR5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjYXRlZ29yeS10eXBlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdjYWxsZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2F0ZWdvcnktd3JhcHBlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25UcmFkZVR5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nY2F0ZWdvcnktdHlwZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0ncHV0ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2hpZ2hfbG93JzpcbiAgICAgICAgICAgICAgICBJY29uQ2F0ZWdvcnkgPSAoXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXRlZ29yeS13cmFwcGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblRyYWRlVHlwZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2NhdGVnb3J5LXR5cGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J2NhbGxfYmFycmllcidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2F0ZWdvcnktd3JhcHBlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25UcmFkZVR5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjYXRlZ29yeS10eXBlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdwdXRfYmFycmllcidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgICAgSWNvbkNhdGVnb3J5ID0gKFxuICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2F0ZWdvcnktd3JhcHBlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25UcmFkZVR5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjYXRlZ29yeS10eXBlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdleHBpcnltaXNzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXRlZ29yeS13cmFwcGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblRyYWRlVHlwZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2NhdGVnb3J5LXR5cGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J2V4cGlyeXJhbmdlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc3RheSc6XG4gICAgICAgICAgICAgICAgSWNvbkNhdGVnb3J5ID0gKFxuICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2F0ZWdvcnktd3JhcHBlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25UcmFkZVR5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjYXRlZ29yeS10eXBlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdyYW5nZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2F0ZWdvcnktd3JhcHBlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25UcmFkZVR5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjYXRlZ29yeS10eXBlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSd1cG9yZG93bidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ21hdGNoX2RpZmYnOlxuICAgICAgICAgICAgICAgIEljb25DYXRlZ29yeSA9IChcbiAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhdGVnb3J5LXdyYXBwZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uVHJhZGVUeXBlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nY2F0ZWdvcnktdHlwZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nZGlnaXRtYXRjaCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2F0ZWdvcnktd3JhcHBlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25UcmFkZVR5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjYXRlZ29yeS10eXBlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdkaWdpdGRpZmYnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdldmVuX29kZCc6XG4gICAgICAgICAgICAgICAgSWNvbkNhdGVnb3J5ID0gKFxuICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2F0ZWdvcnktd3JhcHBlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25UcmFkZVR5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjYXRlZ29yeS10eXBlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdkaWdpdGV2ZW4nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhdGVnb3J5LXdyYXBwZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uVHJhZGVUeXBlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nY2F0ZWdvcnktdHlwZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nZGlnaXRvZGQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdvdmVyX3VuZGVyJzpcbiAgICAgICAgICAgICAgICBJY29uQ2F0ZWdvcnkgPSAoXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXRlZ29yeS13cmFwcGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblRyYWRlVHlwZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2NhdGVnb3J5LXR5cGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J2RpZ2l0b3ZlcidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2F0ZWdvcnktd3JhcHBlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25UcmFkZVR5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjYXRlZ29yeS10eXBlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdkaWdpdHVuZGVyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndG91Y2gnOlxuICAgICAgICAgICAgICAgIEljb25DYXRlZ29yeSA9IChcbiAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhdGVnb3J5LXdyYXBwZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uVHJhZGVUeXBlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nY2F0ZWdvcnktdHlwZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nb25ldG91Y2gnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhdGVnb3J5LXdyYXBwZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uVHJhZGVUeXBlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nY2F0ZWdvcnktdHlwZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nbm90b3VjaCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2FzaWFuJzpcbiAgICAgICAgICAgICAgICBJY29uQ2F0ZWdvcnkgPSAoXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXRlZ29yeS13cmFwcGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblRyYWRlVHlwZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2NhdGVnb3J5LXR5cGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J2FzaWFudSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2F0ZWdvcnktd3JhcHBlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25UcmFkZVR5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjYXRlZ29yeS10eXBlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdhc2lhbmQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdsYl9jYWxsJzpcbiAgICAgICAgICAgICAgICBJY29uQ2F0ZWdvcnkgPSAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXRlZ29yeS13cmFwcGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uVHJhZGVUeXBlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjYXRlZ29yeS10eXBlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J2xiZmxvYXRjYWxsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2xiX3B1dCc6XG4gICAgICAgICAgICAgICAgSWNvbkNhdGVnb3J5ID0gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2F0ZWdvcnktd3JhcHBlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvblRyYWRlVHlwZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nY2F0ZWdvcnktdHlwZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdsYmZsb2F0cHV0J1xuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2xiX2hpZ2hfbG93JzpcbiAgICAgICAgICAgICAgICBJY29uQ2F0ZWdvcnkgPSAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXRlZ29yeS13cmFwcGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uVHJhZGVUeXBlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjYXRlZ29yeS10eXBlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J2xiaGlnaGxvdydcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIEljb25DYXRlZ29yeSA9IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhdGVnb3J5LXdyYXBwZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25UcmFkZVR5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2NhdGVnb3J5LXR5cGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0ndW5rbm93bidcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ2NhdGVnb3JpZXMtY29udGFpbmVyJywgY2xhc3NOYW1lKX0+XG4gICAgICAgICAgICB7SWNvbkNhdGVnb3J5fVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuSWNvblRyYWRlQ2F0ZWdvcnkucHJvcFR5cGVzID0ge1xuICAgIGNhdGVnb3J5IDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJY29uVHJhZGVDYXRlZ29yeTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQUE7QUFHQTtBQUNBO0FBSEE7QUFRQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQU1BO0FBN05BO0FBK05BO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Assets/Trading/Categories/icon-trade-categories.jsx\n");

/***/ })

}]);