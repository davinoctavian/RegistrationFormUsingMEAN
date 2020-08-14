(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"example-card\">\r\n  <mat-card-header>\r\n    <mat-card-title>Login</mat-card-title>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <form class=\"example-form\">\r\n      <table cellspacing=\"0\">\r\n        <tr>\r\n          <td>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Email\" [(ngModel)]=\"email\" name=\"email\" required>\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Password\" [(ngModel)]=\"password\" type=\"password\" name=\"password\" required>\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </form>\r\n  </mat-card-content>\r\n  <mat-card-actions>\r\n    <button mat-raised-button (click)=\"login()\" color=\"primary\">Login</button>\r\n    <span>Don't have an account ? <a [routerLink]=\"['/auth/register']\" >register</a> here</span>\r\n  </mat-card-actions>\r\n</mat-card>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card [ngClass]=\"{'example-card': isRegistered==false, 'example-card-disable': isRegistered==true}\">\r\n  <mat-card-title>Registration</mat-card-title>\r\n  <mat-card-content>\r\n    <form class=\"example-form\" [formGroup]=\"userForm\">\r\n      <div class=\"regContainer\">\r\n          <div *ngIf=\"mobilenumber.invalid && mobilenumber.hasError('validPhone')\" class=\"errorContaoner\"><label class=\"errorMessage\">Invalid mobilenumber</label></div>\r\n          <input class=\"regField\" placeholder=\"Mobile number\" formControlName=\"mobilenumber\" name=\"mobilenumber\" required>\r\n      </div>\r\n      <div class=\"regContainer\">\r\n          <div *ngIf=\"firstname.invalid\" class=\"errorContaoner\"><label class=\"errorMessage\">Invalid firstname</label></div>\r\n          <input class=\"regField\" placeholder=\"Firstname\" formControlName=\"firstname\" name=\"firstname\" required>\r\n      </div>\r\n      <div class=\"regContainer\">\r\n          <div *ngIf=\"lastname.invalid\" class=\"errorContaoner\"><label class=\"errorMessage\">Invalid lastname</label></div>\r\n          <input class=\"regField\" placeholder=\"Lastname\" formControlName=\"lastname\" name=\"lastname\" required>\r\n      </div>\r\n      <div class=\"regContainer\">\r\n          <label>Date of Birth</label>\r\n          <div>\r\n            <select formControlName=\"month\" name=\"month\" style=\"margin-right: 10px;\">\r\n                <option value=\"\">Month</option>\r\n                <option value=\"1\">Jan</option>\r\n                <option value=\"2\">Feb</option>\r\n                <option value=\"3\">Mar</option>\r\n                <option value=\"4\">Apr</option>\r\n                <option value=\"5\">May</option>\r\n                <option value=\"6\">Jun</option>\r\n                <option value=\"7\">Jul</option>\r\n                <option value=\"8\">Aug</option>\r\n                <option value=\"9\">Sep</option>\r\n                <option value=\"10\">oct</option>\r\n                <option value=\"11\">Nov</option>\r\n                <option value=\"12\">Dec</option>\r\n            </select>\r\n            <select formControlName=\"day\" name=\"day\" style=\"margin-right: 10px;\"></select>\r\n            <select formControlName=\"year\" name=\"year\"></select>\r\n          </div>\r\n      </div>\r\n      <div class=\"regContainer\">\r\n        <label style=\"margin-right: 10px\"><input type=\"radio\" formControlName=\"gender\" name=\"gender\" value=\"Male\"/>Male</label>\r\n        <label><input type=\"radio\" formControlName=\"gender\" name=\"gender\" value=\"Female\"/>Female</label>\r\n      </div>\r\n      <div class=\"regContainer\">\r\n          <div *ngIf=\"email.invalid || email.hasError('email')\" class=\"errorContaoner\"><label class=\"errorMessage\">Invalid email address</label></div>\r\n          <input class=\"regField\" placeholder=\"Email\" formControlName=\"email\" name=\"email\" required>\r\n      </div>\r\n      <div class=\"regContainer\">\r\n          <input type=\"button\" name=\"register\" (click)=\"register()\" value=\"Register\" class=\"regButton\"/>\r\n      </div>\r\n      <!--<table cellspacing=\"0\" [formGroup]=\"userForm\">\r\n        <tr>\r\n          <td>\r\n            \r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            <mat-form-field>\r\n              \r\n              <mat-error *ngIf=\"email.invalid && email.hasError('email')\">Invalid email address</mat-error>\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            <mat-form-field>\r\n              \r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            <mat-form-field>\r\n              \r\n              <mat-error *ngIf=\"repeatPassword.invalid && repeatPassword.hasError('passwordMatch')\">Password mismatch</mat-error>\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n      </table>-->\r\n    </form>\r\n  </mat-card-content>\r\n  <!--<mat-card-actions>\r\n    <button mat-raised-button (click)=\"register()\" color=\"primary\">Register</button>\r\n    <span>Allrady have an account ? <a [routerLink]=\"['/auth/login']\">login</a> here</span>\r\n  </mat-card-actions>-->\r\n  \r\n</mat-card>\r\n<mat-card class=\"example-card\">\r\n    <div *ngIf=\"isRegistered == false\" class=\"regFooter\">\r\n        <label style=\"flex: auto; align-self: center;\">Footer</label>\r\n    </div>\r\n    <div *ngIf=\"isRegistered == true\" class=\"regContainer\">\r\n        <input type=\"button\" name=\"login\" (click)=\"login()\" value=\"Login\" class=\"regButton\"/>\r\n    </div>\r\n</mat-card>\r\n");

/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/auth/register/register.component.ts");




const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: '/auth/register',
                pathMatch: 'full',
            },
            {
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
            },
            {
                path: 'register',
                component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"],
            },
        ],
    },
];
const AuthRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/auth/auth.component.scss":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-icon {\n  padding: 0 14px;\n}\n\n.example-spacer {\n  flex: 1 1 auto;\n}\n\n.example-card {\n  width: 80%;\n  margin: 0 10% auto;\n  background-color: #ece7e7;\n}\n\n.example-card-disable {\n  width: 80%;\n  margin: 0 10% auto;\n  background-color: #ece7e7;\n  pointer-events: none;\n  opacity: 0.5;\n}\n\n.mat-card-title {\n  font-size: 20px;\n}\n\n.regField {\n  width: calc(100% - 8px);\n}\n\n.regButton {\n  width: 100%;\n  color: white;\n  background-color: purple;\n  cursor: pointer;\n}\n\n.regContainer {\n  padding: 5px 0;\n  position: relative;\n}\n\n.regFooter {\n  position: absolute;\n  width: 100%;\n  background-color: purple;\n  margin-left: -16px;\n  text-align: center;\n  color: white;\n  font-size: 26px;\n  height: 60px;\n  display: flex;\n}\n\n.errorMessage {\n  color: white;\n  padding: 20px;\n}\n\n.errorContaoner {\n  background-color: red;\n  position: absolute;\n  right: 0;\n  top: -20px;\n  border-radius: 4px;\n}\n\n.errorContaoner:after {\n  content: \"\";\n  position: absolute;\n  right: 50%;\n  bottom: -7px;\n  border-right: 7px solid transparent;\n  border-left: 7px solid transparent;\n  border-top: 7px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9EOlxcbGVhcm5NRUFOXFxtZWFuL3NyY1xcYXBwXFxhdXRoXFxhdXRoLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hdXRoL2F1dGguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ0NGOztBRENBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBR0Esa0JBQUE7QUNFRjs7QURBQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUNBLHlCQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2F1dGguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1pY29uIHtcclxuICBwYWRkaW5nOiAwIDE0cHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLXNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbi5leGFtcGxlLWNhcmQge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luOiAwIDEwJSBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2U3ZTc7XHJcbn1cclxuXHJcbi5leGFtcGxlLWNhcmQtZGlzYWJsZSB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW46IDAgMTAlIGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZTdlNztcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuXHJcbi5tYXQtY2FyZC10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4ucmVnRmllbGR7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDhweCk7XHJcbn1cclxuXHJcbi5yZWdCdXR0b257XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5yZWdDb250YWluZXJ7XHJcbiAgcGFkZGluZzogNXB4IDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ucmVnRm9vdGVye1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAyNnB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uZXJyb3JNZXNzYWdle1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbi5lcnJvckNvbnRhb25lcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogLTIwcHg7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5lcnJvckNvbnRhb25lcjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDUwJTtcclxuICBib3R0b206IC03cHg7XHJcbiAgYm9yZGVyLXJpZ2h0OiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItdG9wOiA3cHggc29saWQgcmVkO1xyXG59IiwiLmV4YW1wbGUtaWNvbiB7XG4gIHBhZGRpbmc6IDAgMTRweDtcbn1cblxuLmV4YW1wbGUtc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi5leGFtcGxlLWNhcmQge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDAgMTAlIGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2U3ZTc7XG59XG5cbi5leGFtcGxlLWNhcmQtZGlzYWJsZSB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMCAxMCUgYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZTdlNztcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLm1hdC1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ucmVnRmllbGQge1xuICB3aWR0aDogY2FsYygxMDAlIC0gOHB4KTtcbn1cblxuLnJlZ0J1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucmVnQ29udGFpbmVyIHtcbiAgcGFkZGluZzogNXB4IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnJlZ0Zvb3RlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcbiAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5lcnJvck1lc3NhZ2Uge1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5lcnJvckNvbnRhb25lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAtMjBweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA0cHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5lcnJvckNvbnRhb25lcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDUwJTtcbiAgYm90dG9tOiAtN3B4O1xuICBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXRvcDogN3B4IHNvbGlkIHJlZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");






let AuthModule = class AuthModule {
};
AuthModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthRoutingModule"]],
        declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]],
    })
], AuthModule);



/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/services */ "./src/app/shared/services/index.ts");




let LoginComponent = class LoginComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.email = null;
        this.password = null;
    }
    login() {
        this.authService.login(this.email, this.password).subscribe(() => {
            this.router.navigateByUrl('/');
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _app_shared_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../auth.component.scss */ "./src/app/auth/auth.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _app_shared_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_shared_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/services */ "./src/app/shared/services/index.ts");





let RegisterComponent = class RegisterComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.isRegistered = false;
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            mobilenumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8), this.validatePhone]),
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1)]),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1)]),
            day: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', []),
            month: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', []),
            year: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', []),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('Male', []),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]),
        });
    }
    ngOnInit() {
        let ysel = document.getElementsByName("year")[0], msel = document.getElementsByName("month")[0], dsel = document.getElementsByName("day")[0];
        let dtnow = Number(new Date().getFullYear());
        var opty = new Option();
        opty.value = "";
        opty.text = "Year";
        ysel.appendChild(opty);
        for (var i = dtnow; i >= 1900; i--) {
            var opt = new Option();
            opt.value = opt.text = i.toString();
            ysel.appendChild(opt);
        }
        ysel.addEventListener("change", validate_date);
        msel.addEventListener("change", validate_date);
        function validate_date() {
            var y = +ysel.value, m = Number(msel.value), d = dsel.value;
            var mlength;
            if (m === 2) {
                let a = (!(y & 3) && ((y % 100) !== 0 || !(y & 15)));
                mlength = 28 + Number(a);
            }
            else {
                mlength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][m - 1];
            }
            dsel.innerHTML = "";
            var optd = new Option();
            optd.value = "";
            optd.text = "Date";
            dsel.appendChild(optd);
            for (var i = 1; i <= mlength; i++) {
                var opt = new Option();
                opt.value = opt.text = i.toString();
                if (i.toString() == d)
                    opt.selected = true;
                dsel.appendChild(opt);
            }
        }
        validate_date();
    }
    validatePhone(control) {
        let regEx = /^(^\+62\s?|^0)(\d{3,4}-?){2}\d{3,4}$/g;
        if (control.value && control.value.match(regEx)) {
            return null;
        }
        else {
            return { validPhone: true };
        }
        //return control.value && control.value.minLength > 1?{ names: true}: null;
    }
    get mobilenumber() {
        return this.userForm.get('mobilenumber');
    }
    get firstname() {
        return this.userForm.get('firstname');
    }
    get lastname() {
        return this.userForm.get('lastname');
    }
    get day() {
        return this.userForm.get('day');
    }
    get month() {
        return this.userForm.get('month');
    }
    get year() {
        return this.userForm.get('year');
    }
    get email() {
        return this.userForm.get('email');
    }
    get gender() {
        return this.userForm.get('gender');
    }
    login() {
        this.router.navigate(['']);
    }
    register() {
        if (this.userForm.invalid) {
            return;
        }
        const { mobilenumber, firstname, lastname, day, month, year, gender, email } = this.userForm.getRawValue();
        this.authService.register(mobilenumber, firstname, lastname, day, month, year, gender, email).subscribe(data => {
            //this.router.navigate(['']);
            this.isRegistered = true;
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _app_shared_services__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../auth.component.scss */ "./src/app/auth/auth.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _app_shared_services__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
], RegisterComponent);



/***/ })

}]);
//# sourceMappingURL=auth-auth-module.js.map