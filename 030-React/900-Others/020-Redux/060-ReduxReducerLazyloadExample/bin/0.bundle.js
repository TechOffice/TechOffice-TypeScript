webpackJsonp([0],{

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(54);\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = Object.setPrototypeOf ||\r\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\n\r\n\r\nvar Test2Component = /** @class */ (function (_super) {\r\n    __extends(Test2Component, _super);\r\n    function Test2Component() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    Test2Component.prototype.render = function () {\r\n        var _this = this;\r\n        return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\"div\", null,\r\n            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\"h1\", null, \"Test 2 Component\"),\r\n            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\"div\", null,\r\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\"button\", { onClick: function () { return _this.props.alert1(); } }, \"alert\"))));\r\n    };\r\n    Test2Component = __decorate([\r\n        Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__[\"b\" /* connect */])(function (state) {\r\n            return state;\r\n        }, function (dispatch) {\r\n            return {\r\n                alert: function () {\r\n                    dispatch({ type: \"alert\" });\r\n                }\r\n            };\r\n        })\r\n    ], Test2Component);\r\n    return Test2Component;\r\n}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Test2Component);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L1Rlc3QyQ29tcG9uZW50LnRzeD8wZjU3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ1k7QUFjdEM7SUFBNEMsa0NBQXlCO0lBQXJFOztJQVlBLENBQUM7SUFWRywrQkFBTSxHQUFOO1FBQUEsaUJBU0M7UUFSRyxNQUFNLENBQUMsQ0FDSDtZQUNJLDJGQUF5QjtZQUN6QjtnQkFDSSx3RUFBUSxPQUFPLEVBQUUsY0FBSSxZQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFuQixDQUFtQixZQUFnQixDQUN0RCxDQUNKLENBQ1QsQ0FBQztJQUNOLENBQUM7SUFYZ0IsY0FBYztRQVpqQyxvRUFBTyxDQUNMLFVBQVMsS0FBVTtZQUNmLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQyxFQUNELFVBQVMsUUFBUTtZQUNiLE1BQU07Z0JBQ0YsS0FBSyxFQUFFO29CQUNILFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUMsQ0FBQyxDQUFDO2dCQUM5QixDQUFDO2FBQ0osQ0FBQztRQUNOLENBQUMsQ0FDSTtPQUNZLGNBQWMsQ0FZbEM7SUFBRCxxQkFBQztDQUFBLENBWjJDLDZDQUFLLENBQUMsU0FBUyxHQVkxRDsrREFab0IsY0FBYyIsImZpbGUiOiIxMjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbkAoY29ubmVjdCggXHJcbiAgICBmdW5jdGlvbihzdGF0ZTogYW55KXtcclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9LFxyXG4gICAgZnVuY3Rpb24oZGlzcGF0Y2gpe1xyXG4gICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgYWxlcnQ6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogXCJhbGVydFwifSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4pIGFzIGFueSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVzdDJDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCBhbnk+e1xyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDE+VGVzdCAyIENvbXBvbmVudDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PnRoaXMucHJvcHMuYWxlcnQxKCl9PmFsZXJ0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnQvVGVzdDJDb21wb25lbnQudHN4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///125\n");

/***/ })

});