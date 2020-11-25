(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_purchase_order_purchase_order_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/purchase-order/purchase-order.component */ "./src/app/components/purchase-order/purchase-order.component.ts");
/* harmony import */ var _components_brand_brand_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/brand/brand.component */ "./src/app/components/brand/brand.component.ts");
/* harmony import */ var _components_department_department_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/department/department.component */ "./src/app/components/department/department.component.ts");
/* harmony import */ var _components_stores_stores_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/stores/stores.component */ "./src/app/components/stores/stores.component.ts");
/* harmony import */ var _components_size_width_size_width_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/size-width/size-width.component */ "./src/app/components/size-width/size-width.component.ts");
/* harmony import */ var _components_create_store_create_store_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/create-store/create-store.component */ "./src/app/components/create-store/create-store.component.ts");
/* harmony import */ var _components_edit_store_edit_store_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/edit-store/edit-store.component */ "./src/app/components/edit-store/edit-store.component.ts");
/* harmony import */ var _components_create_sw_range_create_sw_range_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/create-sw-range/create-sw-range.component */ "./src/app/components/create-sw-range/create-sw-range.component.ts");
/* harmony import */ var _components_action_department_action_department_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/action-department/action-department.component */ "./src/app/components/action-department/action-department.component.ts");
/* harmony import */ var _components_action_brand_action_brand_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/action-brand/action-brand.component */ "./src/app/components/action-brand/action-brand.component.ts");
/* harmony import */ var _components_action_purchase_order_action_purchase_order_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/action-purchase-order/action-purchase-order.component */ "./src/app/components/action-purchase-order/action-purchase-order.component.ts");
/* harmony import */ var _guards_authguard_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./guards/authguard.guard */ "./src/app/guards/authguard.guard.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_export_import_actions_export_import_actions_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/export-import-actions/export-import-actions.component */ "./src/app/components/export-import-actions/export-import-actions.component.ts");


















var routes = [
    {
        path: '',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"]
    },
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"]
    },
    {
        path: 'purchaseOrders',
        component: _components_purchase_order_purchase_order_component__WEBPACK_IMPORTED_MODULE_4__["PurchaseOrderComponent"],
        canActivate: [_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_15__["AuthguardGuard"]]
    },
    {
        path: 'brands',
        component: _components_brand_brand_component__WEBPACK_IMPORTED_MODULE_5__["BrandComponent"],
        pathMatch: 'full',
        canActivate: [_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_15__["AuthguardGuard"]]
    },
    {
        path: 'departments',
        component: _components_department_department_component__WEBPACK_IMPORTED_MODULE_6__["DepartmentComponent"],
        canActivate: [_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_15__["AuthguardGuard"]]
    },
    {
        path: 'stores',
        component: _components_stores_stores_component__WEBPACK_IMPORTED_MODULE_7__["StoresComponent"],
        canActivate: [_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_15__["AuthguardGuard"]]
    },
    {
        path: 'sizeWidthRange',
        component: _components_size_width_size_width_component__WEBPACK_IMPORTED_MODULE_8__["SizeWidthComponent"],
        canActivate: [_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_15__["AuthguardGuard"]]
    },
    {
        path: 'addStore',
        component: _components_create_store_create_store_component__WEBPACK_IMPORTED_MODULE_9__["CreateStoreComponent"],
        canActivate: [_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_15__["AuthguardGuard"]]
    },
    {
        path: 'editStore/:id',
        component: _components_edit_store_edit_store_component__WEBPACK_IMPORTED_MODULE_10__["EditStoreComponent"],
        canActivate: [_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_15__["AuthguardGuard"]]
    },
    {
        path: 'actionSWRange/:action/:id',
        component: _components_create_sw_range_create_sw_range_component__WEBPACK_IMPORTED_MODULE_11__["CreateSwRangeComponent"],
        canActivate: [_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_15__["AuthguardGuard"]]
    },
    {
        path: 'actionBrand/:action/:id',
        component: _components_action_brand_action_brand_component__WEBPACK_IMPORTED_MODULE_13__["ActionBrandComponent"],
        canActivate: [_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_15__["AuthguardGuard"]]
    },
    {
        path: 'actionBrand/:action',
        component: _components_action_brand_action_brand_component__WEBPACK_IMPORTED_MODULE_13__["ActionBrandComponent"],
        canActivate: [_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_15__["AuthguardGuard"]]
    },
    {
        path: 'actionBrand',
        component: _components_action_brand_action_brand_component__WEBPACK_IMPORTED_MODULE_13__["ActionBrandComponent"],
        canActivate: [_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_15__["AuthguardGuard"]]
    },
    {
        path: 'actionPO/:id',
        component: _components_action_purchase_order_action_purchase_order_component__WEBPACK_IMPORTED_MODULE_14__["ActionPurchaseOrderComponent"],
        canActivate: [_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_15__["AuthguardGuard"]]
    },
    {
        path: 'actionPO',
        component: _components_action_purchase_order_action_purchase_order_component__WEBPACK_IMPORTED_MODULE_14__["ActionPurchaseOrderComponent"],
        canActivate: [_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_15__["AuthguardGuard"]]
    },
    {
        path: 'exportImportActions/:id',
        component: _components_export_import_actions_export_import_actions_component__WEBPACK_IMPORTED_MODULE_17__["ExportImportActionsComponent"],
        canActivate: [_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_15__["AuthguardGuard"]]
    },
    {
        path: 'actionDepartment/:action/:id',
        component: _components_action_department_action_department_component__WEBPACK_IMPORTED_MODULE_12__["ActionDepartmentComponent"],
        canActivate: [_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_15__["AuthguardGuard"]]
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, { useHash: true })
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav li .active {\r\n    color:white;\r\n}\r\nnav {\r\n    font-size:14px;\r\n    text-transform: uppercase;\r\n    padding:0px 10px;\r\n}\r\nnav .title {\r\n    margin-right:15px;\r\n    color: darkgoldenrod;\r\n    border-right: 2px solid darkgoldenrod;\r\n    padding-right: 5px;\r\n    font-size:18px;\r\n}\r\nnav li {\r\n    margin-right: 10px;\r\n}\r\nnav a.active {\r\n    color: #039be5;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLHFDQUFxQztJQUNyQyxrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxjQUFjO0VBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXYgbGkgLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufVxyXG5uYXYge1xyXG4gICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgcGFkZGluZzowcHggMTBweDtcclxufVxyXG5uYXYgLnRpdGxlIHtcclxuICAgIG1hcmdpbi1yaWdodDoxNXB4O1xyXG4gICAgY29sb3I6IGRhcmtnb2xkZW5yb2Q7XHJcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBkYXJrZ29sZGVucm9kO1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgZm9udC1zaXplOjE4cHg7XHJcbn1cclxubmF2IGxpIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxubmF2IGEuYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjMDM5YmU1O1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-dark\">\r\n  <div class=\"title\" role=\"alert\">\r\n    PO-EXPORTS\r\n  </div>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\"\r\n    aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n\r\n      <li *ngFor=\"let route of EPORoutes\" class=\"nav-item\" [ngClass]=\"{'active':route.active}\"\r\n        (click)=\"setActive(route.index)\">\r\n        <a *ngIf=\"dataService.isLoggedIn()\" class=\"nav-link\" [routerLink]=\"[route.routelink]\"\r\n          routerLinkActive=\"active\">{{route.title}}</a>\r\n      </li>\r\n      <!-- <li *ngIf=\"!dataService.isLoggedIn()\" class=\"nav-item\">\r\n        <a class=\"nav-link\" *ngIf=\"loginbtn\" routerLink=\"login\" routerLinkActive=\"active\">Login</a>\r\n      </li>\r\n      <li *ngIf=\"dataService.isLoggedIn()\" class=\"nav-item\">\r\n        <button type=\"button\" *ngIf=\"logoutbtn\" class=\"btn btn-danger btn-block\" (click)=\"logout()\">logout</button>\r\n      </li> -->\r\n      <!-- <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink={{vendorLink}}>Vendors</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/departments\">Departments</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/stores\">Stores</a>\r\n      </li>   \r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/sizeWidthRange\">Size/Width-Range</a>\r\n      </li>   -->\r\n    </ul>\r\n    <div class=\"\">\r\n      <div *ngIf=\"!dataService.isLoggedIn()\" class=\"nav-item\">\r\n        <a class=\"nav-link\" *ngIf=\"loginbtn\" routerLink=\"login\" routerLinkActive=\"active\">Login</a>\r\n      </div>\r\n      <div *ngIf=\"dataService.isLoggedIn()\" class=\"nav-item\">\r\n        <button type=\"button\" *ngIf=\"logoutbtn\" class=\"btn btn-danger btn-block\" (click)=\"logout()\">logout</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</nav>\r\n<div class=\"main-container\">\r\n\r\n  <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_dataservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/dataservice.service */ "./src/app/services/dataservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(dataService, router, route) {
        var _this = this;
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.title = 'ExportPO';
        this.EPORoutes = [
            { title: "Purchase Orders", routelink: 'purchaseOrders', active: false, index: 0 },
        ];
        dataService.getLoggedInName.subscribe(function (name) { return _this.changeName(name); });
        if (this.dataService.isLoggedIn()) {
            console.log("loggedin");
            this.loginbtn = false;
            this.logoutbtn = true;
        }
        else {
            this.loginbtn = true;
            this.logoutbtn = false;
        }
    }
    AppComponent.prototype.setActive = function (index) {
        var length = this.EPORoutes.length;
        for (var i = 0; i < length; i++) {
            if (index == this.EPORoutes[i].index) {
                this.EPORoutes[i].active = true;
            }
            else {
                this.EPORoutes[i].active = false;
            }
        }
    };
    AppComponent.prototype.changeName = function (name) {
        this.logoutbtn = name;
        this.loginbtn = !name;
    };
    AppComponent.prototype.logout = function () {
        this.dataService.deleteToken();
        // window.location.href = window.location.href;
        this.router.navigate(['/']);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_dataservice_service__WEBPACK_IMPORTED_MODULE_2__["DataserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ag_grid_angular_main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ag-grid-angular/main */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular_main__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular_main__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_purchase_order_purchase_order_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/purchase-order/purchase-order.component */ "./src/app/components/purchase-order/purchase-order.component.ts");
/* harmony import */ var _components_vendor_vendor_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/vendor/vendor.component */ "./src/app/components/vendor/vendor.component.ts");
/* harmony import */ var _components_department_department_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/department/department.component */ "./src/app/components/department/department.component.ts");
/* harmony import */ var _components_stores_stores_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/stores/stores.component */ "./src/app/components/stores/stores.component.ts");
/* harmony import */ var _components_size_width_size_width_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/size-width/size-width.component */ "./src/app/components/size-width/size-width.component.ts");
/* harmony import */ var _services_stores_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/stores.service */ "./src/app/services/stores.service.ts");
/* harmony import */ var _services_purchase_order_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/purchase-order.service */ "./src/app/services/purchase-order.service.ts");
/* harmony import */ var _services_vendor_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/vendor.service */ "./src/app/services/vendor.service.ts");
/* harmony import */ var _services_department_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/department.service */ "./src/app/services/department.service.ts");
/* harmony import */ var _services_size_width_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/size-width.service */ "./src/app/services/size-width.service.ts");
/* harmony import */ var _helper_components_stores_edit_delete_btn_stores_edit_delete_btn_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./helper-components/stores-edit-delete-btn/stores-edit-delete-btn.component */ "./src/app/helper-components/stores-edit-delete-btn/stores-edit-delete-btn.component.ts");
/* harmony import */ var _components_create_store_create_store_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/create-store/create-store.component */ "./src/app/components/create-store/create-store.component.ts");
/* harmony import */ var _components_edit_store_edit_store_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/edit-store/edit-store.component */ "./src/app/components/edit-store/edit-store.component.ts");
/* harmony import */ var _components_create_sw_range_create_sw_range_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/create-sw-range/create-sw-range.component */ "./src/app/components/create-sw-range/create-sw-range.component.ts");
/* harmony import */ var _helper_components_swrange_edit_delete_btn_swrange_edit_delete_btn_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./helper-components/swrange-edit-delete-btn/swrange-edit-delete-btn.component */ "./src/app/helper-components/swrange-edit-delete-btn/swrange-edit-delete-btn.component.ts");
/* harmony import */ var _helper_components_dept_edit_delete_btn_dept_edit_delete_btn_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./helper-components/dept-edit-delete-btn/dept-edit-delete-btn.component */ "./src/app/helper-components/dept-edit-delete-btn/dept-edit-delete-btn.component.ts");
/* harmony import */ var _components_action_department_action_department_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/action-department/action-department.component */ "./src/app/components/action-department/action-department.component.ts");
/* harmony import */ var _helper_components_type_edit_delete_btn_type_edit_delete_btn_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./helper-components/type-edit-delete-btn/type-edit-delete-btn.component */ "./src/app/helper-components/type-edit-delete-btn/type-edit-delete-btn.component.ts");
/* harmony import */ var _helper_components_sub_type_edit_delete_btn_sub_type_edit_delete_btn_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./helper-components/sub-type-edit-delete-btn/sub-type-edit-delete-btn.component */ "./src/app/helper-components/sub-type-edit-delete-btn/sub-type-edit-delete-btn.component.ts");
/* harmony import */ var _components_brand_brand_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/brand/brand.component */ "./src/app/components/brand/brand.component.ts");
/* harmony import */ var _services_brand_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/brand.service */ "./src/app/services/brand.service.ts");
/* harmony import */ var _services_IO_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/IO.service */ "./src/app/services/IO.service.ts");
/* harmony import */ var _helper_components_brand_edit_delete_btn_brand_edit_delete_btn_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./helper-components/brand-edit-delete-btn/brand-edit-delete-btn.component */ "./src/app/helper-components/brand-edit-delete-btn/brand-edit-delete-btn.component.ts");
/* harmony import */ var _components_action_brand_action_brand_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/action-brand/action-brand.component */ "./src/app/components/action-brand/action-brand.component.ts");
/* harmony import */ var _components_action_purchase_order_action_purchase_order_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/action-purchase-order/action-purchase-order.component */ "./src/app/components/action-purchase-order/action-purchase-order.component.ts");
/* harmony import */ var _helper_components_purchase_order_edit_delete_btn_purchase_order_edit_delete_btn_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./helper-components/purchase-order-edit-delete-btn/purchase-order-edit-delete-btn.component */ "./src/app/helper-components/purchase-order-edit-delete-btn/purchase-order-edit-delete-btn.component.ts");
/* harmony import */ var _helper_components_product_edit_delete_btn_product_edit_delete_btn_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./helper-components/product-edit-delete-btn/product-edit-delete-btn.component */ "./src/app/helper-components/product-edit-delete-btn/product-edit-delete-btn.component.ts");
/* harmony import */ var _helper_components_available_width_cell_renderer_available_width_cell_renderer_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./helper-components/available-width-cell-renderer/available-width-cell-renderer.component */ "./src/app/helper-components/available-width-cell-renderer/available-width-cell-renderer.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_export_import_actions_export_import_actions_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/export-import-actions/export-import-actions.component */ "./src/app/components/export-import-actions/export-import-actions.component.ts");
/* harmony import */ var _services_dataservice_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./services/dataservice.service */ "./src/app/services/dataservice.service.ts");




// import { HttpModule } from '@angular/http';



































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_purchase_order_purchase_order_component__WEBPACK_IMPORTED_MODULE_8__["PurchaseOrderComponent"],
                _components_vendor_vendor_component__WEBPACK_IMPORTED_MODULE_9__["VendorComponent"],
                _components_department_department_component__WEBPACK_IMPORTED_MODULE_10__["DepartmentComponent"],
                _components_stores_stores_component__WEBPACK_IMPORTED_MODULE_11__["StoresComponent"],
                _components_size_width_size_width_component__WEBPACK_IMPORTED_MODULE_12__["SizeWidthComponent"],
                _helper_components_stores_edit_delete_btn_stores_edit_delete_btn_component__WEBPACK_IMPORTED_MODULE_18__["StoresEditDeleteBtnComponent"],
                _components_create_store_create_store_component__WEBPACK_IMPORTED_MODULE_19__["CreateStoreComponent"],
                _components_edit_store_edit_store_component__WEBPACK_IMPORTED_MODULE_20__["EditStoreComponent"],
                _components_create_sw_range_create_sw_range_component__WEBPACK_IMPORTED_MODULE_21__["CreateSwRangeComponent"],
                _helper_components_swrange_edit_delete_btn_swrange_edit_delete_btn_component__WEBPACK_IMPORTED_MODULE_22__["SwrangeEditDeleteBtnComponent"],
                _helper_components_dept_edit_delete_btn_dept_edit_delete_btn_component__WEBPACK_IMPORTED_MODULE_23__["DeptEditDeleteBtnComponent"],
                _components_action_department_action_department_component__WEBPACK_IMPORTED_MODULE_24__["ActionDepartmentComponent"],
                _helper_components_type_edit_delete_btn_type_edit_delete_btn_component__WEBPACK_IMPORTED_MODULE_25__["TypeEditDeleteBtnComponent"],
                _helper_components_sub_type_edit_delete_btn_sub_type_edit_delete_btn_component__WEBPACK_IMPORTED_MODULE_26__["SubTypeEditDeleteBtnComponent"],
                _components_brand_brand_component__WEBPACK_IMPORTED_MODULE_27__["BrandComponent"],
                _helper_components_brand_edit_delete_btn_brand_edit_delete_btn_component__WEBPACK_IMPORTED_MODULE_30__["BrandEditDeleteBtnComponent"],
                _components_action_brand_action_brand_component__WEBPACK_IMPORTED_MODULE_31__["ActionBrandComponent"],
                _components_action_purchase_order_action_purchase_order_component__WEBPACK_IMPORTED_MODULE_32__["ActionPurchaseOrderComponent"],
                _helper_components_purchase_order_edit_delete_btn_purchase_order_edit_delete_btn_component__WEBPACK_IMPORTED_MODULE_33__["PurchaseOrderEditDeleteBtnComponent"],
                _helper_components_product_edit_delete_btn_product_edit_delete_btn_component__WEBPACK_IMPORTED_MODULE_34__["ProductEditDeleteBtnComponent"],
                _helper_components_available_width_cell_renderer_available_width_cell_renderer_component__WEBPACK_IMPORTED_MODULE_35__["AvailableWidthCellRendererComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_36__["LoginComponent"],
                _components_export_import_actions_export_import_actions_component__WEBPACK_IMPORTED_MODULE_37__["ExportImportActionsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                // HttpModule,
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                ag_grid_angular_main__WEBPACK_IMPORTED_MODULE_5__["AgGridModule"].withComponents([
                    _helper_components_stores_edit_delete_btn_stores_edit_delete_btn_component__WEBPACK_IMPORTED_MODULE_18__["StoresEditDeleteBtnComponent"],
                    _helper_components_swrange_edit_delete_btn_swrange_edit_delete_btn_component__WEBPACK_IMPORTED_MODULE_22__["SwrangeEditDeleteBtnComponent"],
                    _helper_components_dept_edit_delete_btn_dept_edit_delete_btn_component__WEBPACK_IMPORTED_MODULE_23__["DeptEditDeleteBtnComponent"],
                    _helper_components_type_edit_delete_btn_type_edit_delete_btn_component__WEBPACK_IMPORTED_MODULE_25__["TypeEditDeleteBtnComponent"],
                    _helper_components_sub_type_edit_delete_btn_sub_type_edit_delete_btn_component__WEBPACK_IMPORTED_MODULE_26__["SubTypeEditDeleteBtnComponent"],
                    _helper_components_brand_edit_delete_btn_brand_edit_delete_btn_component__WEBPACK_IMPORTED_MODULE_30__["BrandEditDeleteBtnComponent"],
                    _helper_components_purchase_order_edit_delete_btn_purchase_order_edit_delete_btn_component__WEBPACK_IMPORTED_MODULE_33__["PurchaseOrderEditDeleteBtnComponent"],
                    _helper_components_product_edit_delete_btn_product_edit_delete_btn_component__WEBPACK_IMPORTED_MODULE_34__["ProductEditDeleteBtnComponent"],
                    _helper_components_available_width_cell_renderer_available_width_cell_renderer_component__WEBPACK_IMPORTED_MODULE_35__["AvailableWidthCellRendererComponent"],
                ])
            ],
            providers: [_services_stores_service__WEBPACK_IMPORTED_MODULE_13__["StoresService"], _services_purchase_order_service__WEBPACK_IMPORTED_MODULE_14__["PurchaseOrderService"], _services_vendor_service__WEBPACK_IMPORTED_MODULE_15__["VendorService"], _services_department_service__WEBPACK_IMPORTED_MODULE_16__["DepartmentService"], _services_size_width_service__WEBPACK_IMPORTED_MODULE_17__["SizeWidthService"], _services_brand_service__WEBPACK_IMPORTED_MODULE_28__["BrandService"], _services_IO_service__WEBPACK_IMPORTED_MODULE_29__["IOService"], _services_dataservice_service__WEBPACK_IMPORTED_MODULE_38__["DataserviceService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/action-brand/action-brand.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/action-brand/action-brand.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.rangeGrid {\r\n    font-size:16px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hY3Rpb24tYnJhbmQvYWN0aW9uLWJyYW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWN0aW9uLWJyYW5kL2FjdGlvbi1icmFuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5yYW5nZUdyaWQge1xyXG4gICAgZm9udC1zaXplOjE2cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/action-brand/action-brand.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/action-brand/action-brand.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-bar\">\r\n    <div *ngIf=\"brandService.isCreateBrand\" class=\"title-bar\">Add New Brand</div>\r\n    <div *ngIf=\"brandService.isEditBrand\" class=\"title-bar\">Edit Brand</div>\r\n    <div *ngIf=\"brandService.isViewBrand\" class=\"title-bar\">Brand Detail</div>\r\n</div>\r\n<div class=\"container\">\r\n    <div [hidden]=\"submitted\">\r\n        <form (ngSubmit)=\"onSubmit()\" #brandForm=\"ngForm\">\r\n            <div *ngIf=\"brandService.isCreateBrand\" class=\"form-group form-check\">\r\n                <label class=\"form-check-label\">\r\n                    <input style=\"min-width: 20px;\" class=\"form-check-input\" id=\"existingVendor\"\r\n                        [(ngModel)]=\"isExistingVendor\" name=\"existingVendor\" (change)=\"onChangeExistingVendor()\"\r\n                        #sisExistingVendor=\"ngModel\" type=\"checkbox\" [value]=\"false\">\r\n                    Choose from exisiting Vendors\r\n                </label>\r\n            </div>\r\n            <div *ngIf=\"!isExistingVendor\" class=\"d-flex flex-row\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"required\" for=\"vendorName\">Vendor Name:</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"vendorName\" required [(ngModel)]=\"brandItem.VendorName\"\r\n                        name=\"vendorName\" #VendorName=\"ngModel\"\r\n                        [disabled]=\"isExistingVendor || brandService.isViewBrand\">\r\n                    <div [hidden]=\"VendorName.valid || VendorName.pristine\" class=\"alert alert-danger\">\r\n                        Vendor Name is required\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"vendorDesc\">Vendor Description:</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"vendorDesc\" [(ngModel)]=\"brandItem.VendorDescription\"\r\n                        name=\"vendorDesc\" #VendorDescription=\"ngModel\"\r\n                        [disabled]=\"isExistingVendor || brandService.isViewBrand\">\r\n                </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"isExistingVendor\" class=\"form-group\">\r\n                <label class=\"required\" for=\"eVendorName\">Vendor Name:</label>\r\n                <select class=\"form-control\" id=\"eVendorName\" required [(ngModel)]=\"brandItem.VendorID\"\r\n                    name=\"eVendorName\" (change)=\"onChangeVendor($event, $event.target.value)\" #brandItem=\"ngModel\"\r\n                    [disabled]=\"!isExistingVendor\">\r\n                    <option *ngFor=\"let ven of vendors\" [value]=\"ven.ID\">{{ven.VendorName}}</option>\r\n                </select>\r\n                <div [hidden]=\"brandItem.valid || brandItem.pristine\" class=\"alert alert-danger\">\r\n                    Vendor Name is required\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"d-flex flex-row\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"required\" for=\"brandName\">Brand Name:</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"brandName\" required [(ngModel)]=\"brandItem.BrandName\"\r\n                        name=\"brandName\" #BrandName=\"ngModel\" [disabled]=\"brandService.isViewBrand\">\r\n                    <div [hidden]=\"BrandName.valid || BrandName.pristine\" class=\"alert alert-danger\">\r\n                        Brand Name is required\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label for=\"brandDesc\">Brand Description:</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"brandDesc\" [(ngModel)]=\"brandItem.BrandDescription\"\r\n                        name=\"brandDesc\" #brandDesc=\"ngModel\" [disabled]=\"brandService.isViewBrand\">\r\n                </div>\r\n                <!-- <div class=\"form-group\">\r\n                    <label class=\"\" for=\"sizeWidthID\">Size-Width Name:</label>\r\n                    <select class=\"form-control\" id=\"sizeWidthID\" \r\n                            \r\n                            [(ngModel)]=\"swrID\" name=\"sizeWidthID\"\r\n                            (change)=\"onChangeSWR($event, $event.target.value)\"\r\n                            #swRange=\"ngModel\"\r\n                            [disabled]=\"brandService.isViewBrand\">\r\n                      <option [value]=0>Select Size-Width</option>          \r\n                      <option *ngFor=\"let swr of swRanges\" [value]=\"swr.ID\">{{swr.SizeWidthName}}</option>\r\n                    </select>\r\n                    \r\n                    \r\n                </div> -->\r\n            </div>\r\n            <!-- <div *ngIf=\"gridDataReady\" [ngClass]=\"brandItem.SizeWidthID>0? '': 'hidden'\" >\r\n                <label class=\"required\" for=\"swRangeType\">Size/Width Availability:</label>\r\n                <div style=\"width: 100%;\" class=\"-range-grid-content\">\r\n                    <ag-grid-angular #agGrid style=\"width: 100%;height:158px;border-bottom:3px solid blue\" id=\"rangeGrid\"\r\n                                class=\"ag-theme-blue rangeGrid\"                     \r\n                                [columnDefs]=\"columnDefs\"\r\n                                [gridOptions]=\"rangeGridOptions\"\r\n                                [singleClickEdit]=\"true\"\r\n                                (gridReady)=\"onGridReady($event)\"\r\n                                (gridSizeChanged)=\"onGridSizeChanged($event)\"\r\n                                (cellClicked)=\"onCellClick($event)\"\r\n                                (cellEditingStarted)=\"onCellClick($event)\"\r\n                                (cellFocused)=\"onCellClick($event)\"\r\n                                \r\n                                [singleClickEdit]=true\r\n                                [stopEditingWhenGridLosesFocus]=\"true\"\r\n                                >\r\n                    </ag-grid-angular>\r\n                </div>\r\n            </div> -->\r\n            <br>\r\n            <button *ngIf=\"brandService.isEditBrand || brandService.isViewBrand\" type=\"button\"\r\n                class=\"btn btn-outline-primary\" (click)=\"close()\">Back to List</button>\r\n            <button *ngIf=\"brandService.isCreateBrand\" class=\"btn btn-outline-primary\" type=\"button\"\r\n                (click)=\"close()\">Cancel</button>\r\n            <button *ngIf=\"isInlineEditBrand\" class=\"btn btn-outline-primary\" (click)=\"cancelEdit()\">Cancel</button>\r\n            <button *ngIf=\"brandService.isCreateBrand\" type=\"submit\" class=\"btn btn-success\"\r\n                [disabled]=\"!brandForm.form.valid\">Save</button>\r\n            <button *ngIf=\"brandService.isEditBrand\" type=\"submit\" class=\"btn btn-success\"\r\n                [disabled]=\"!brandForm.form.valid\">Update</button>\r\n            <button *ngIf=\"brandService.isViewBrand\" type=\"submit\" class=\"btn btn-success\">Edit</button>\r\n        </form>\r\n    </div>\r\n    <div [hidden]=\"!submitted\">\r\n\r\n        <div class=\"card border-success mb-3\">\r\n            <div class=\"card-header\">Confirmation</div>\r\n            <div class=\"card-body text-success\">\r\n                <h4 class=\"card-title\">{{confirmationTitle}}</h4>\r\n                <br>\r\n                <p class=\"card-text\">Brand Name: <b>{{ brandItem.BrandName }}</b></p>\r\n                <p class=\"card-text\">Vendor Name: <b>{{ brandItem.VendorName }}</b></p>\r\n                <p class=\"card-text\">Size-Width Name: <b>{{brandItem.SizeWidthName }}</b></p>\r\n                <br>\r\n                <br>\r\n                <button class=\"btn btn-outline-primary\" (click)=\"close()\">Close</button>\r\n                <button *ngIf=\"brandService.isCreateBrand\" class=\"btn btn-primary\"\r\n                    (click)=\"newBrand(); brandForm.reset()\">Add Another Brand</button>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/action-brand/action-brand.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/action-brand/action-brand.component.ts ***!
  \*******************************************************************/
/*! exports provided: ActionBrandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionBrandComponent", function() { return ActionBrandComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_brand_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/brand.service */ "./src/app/services/brand.service.ts");
/* harmony import */ var _services_size_width_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/size-width.service */ "./src/app/services/size-width.service.ts");
/* harmony import */ var _helpers_brand__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/brand */ "./src/app/helpers/brand.ts");
/* harmony import */ var _helpers_sw_range__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/sw-range */ "./src/app/helpers/sw-range.ts");







var ActionBrandComponent = /** @class */ (function () {
    function ActionBrandComponent(router, route, brandService, swService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.brandService = brandService;
        this.swService = swService;
        this.columnDefs = [];
        this.submitted = false;
        this.confirmationTitle = '';
        this.brandItem = new _helpers_brand__WEBPACK_IMPORTED_MODULE_5__["Brand"]();
        this.vendor = new _helpers_brand__WEBPACK_IMPORTED_MODULE_5__["Vendor"]();
        this.swRange = new _helpers_sw_range__WEBPACK_IMPORTED_MODULE_6__["SwRange"]();
        this.isInlineEditBrand = false;
        this.gridDataReady = false;
        this.swrID = this.brandItem.SizeWidthID;
        this.isExistingVendor = true;
        this.rangeGridOptions = {
            context: {
                componentParent: this
            },
            enableColResize: true,
            headerHeight: 0,
            defaultColDef: {
                width: 150
            }
        };
        this.brandService.getAllVendors().subscribe(function (res) {
            // console.log("response at component is: "+ res);    
            if (res) {
                _this.vendors = res;
                // console.log(this.vendors);
            }
            else {
                // console.log(typeof(res));
                _this.vendors = [];
            }
        });
        // this.swService.getAllSWRange().subscribe(
        //   res => {
        //     // console.log("response at component is: "+ res);    
        //     if (res) {
        //       this.swRanges = res;
        //       // console.log(this.swRanges);
        //     }
        //     else {
        //       // console.log(typeof(res));
        //       this.swRanges = []
        //     }
        //   }
        // );
    }
    ActionBrandComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.brandService.isCreateBrand == false && this.brandService.isEditBrand == false
            && this.brandService.isViewBrand == false) {
            this.brandService.isCreateBrand = true;
        }
        // console.log("init");
        var action = this.route.snapshot.params['action'];
        // console.log(action);
        if (action == 'edit') {
            var id = this.route.snapshot.params['id'];
            this.brandService.getBrand(id).subscribe(function (res) {
                // console.log("response at component is: "+ res);    
                if (res) {
                    _this.brandService.selectedBrand = res[0];
                    _this.brandService.isEditBrand = true;
                    _this.brandService.isCreateBrand = false;
                    _this.brandService.isViewBrand = false;
                    _this.loadData();
                }
                else {
                    //error
                }
            });
        }
        else if (action == 'view') {
            var id = this.route.snapshot.params['id'];
            this.brandService.getBrand(id).subscribe(function (res) {
                // console.log("response at component is: "+ res);    
                if (res) {
                    _this.brandService.selectedBrand = res[0];
                    _this.brandService.isEditBrand = false;
                    _this.brandService.isCreateBrand = false;
                    _this.brandService.isViewBrand = true;
                    _this.loadData();
                }
                else {
                    //error
                }
            });
        }
        else { //action = create or empty - default is create
            this.brandService.isEditBrand = false;
            this.brandService.isCreateBrand = true;
            this.brandService.isViewBrand = false;
            this.loadData();
        }
    };
    ActionBrandComponent.prototype.loadData = function () {
        var head = this.swService.toExcelHeaderArray(20);
        this.columnDefs = [];
        for (var i = 0; i < 20; i++) {
            var obj = { headerName: '', field: '', width: 55, editable: true };
            obj.headerName = head[i];
            obj.field = head[i];
            this.columnDefs.push(obj);
        }
        this.rangeGridOptions.columnDefs = this.columnDefs;
        if (this.brandService.isCreateBrand) {
            this.rangeGridOptions.rowData = this.brandItem.SizeWidthAvailable;
        }
        else if (this.brandService.isEditBrand || this.brandService.isViewBrand) {
            this.brandItem = this.brandService.selectedBrand;
            this.swrID = this.brandItem.SizeWidthID;
            this.brandItem.SizeWidthAvailable = JSON.parse(this.brandItem.SizeWidthAvailable);
            this.rangeGridOptions.rowData = this.brandItem.SizeWidthAvailable;
        }
        this.gridDataReady = true;
        //this.brandItem = this.brandService.selectedBrand;
        //this.swrID = 6;
    };
    ActionBrandComponent.prototype.onChangeExistingVendor = function () {
        //if(this.isExistingVendor){
        this.brandItem.VendorID = 0;
        this.brandItem.VendorName = '';
        this.brandItem.VendorDescription = '';
        // }
    };
    ActionBrandComponent.prototype.onChangeVendor = function (params, obj) {
        // console.log(obj);
        // console.log(this.vendors[params.target.selectedIndex]);
        this.brandItem.VendorID = this.vendors[params.target.selectedIndex].ID;
        this.brandItem.VendorName = this.vendors[params.target.selectedIndex].VendorName;
        this.brandItem.VendorDescription = this.vendors[params.target.selectedIndex].VendorDescription;
        // console.log(this.brandItem.BrandName);
    };
    ActionBrandComponent.prototype.onChangeSWR = function (params, obj) {
        // console.log(params.target.selectedIndex);
        if (params.target.selectedIndex == 0) {
            this.swRange.SizeWidthName = '';
            this.brandItem.SizeWidthName = '';
            this.brandItem.SizeWidthID = 0;
            this.brandItem.RangeType = '';
            this.brandItem.SizeWidthAvailable = [];
            // console.log(ar);
            this.rangeGridOptions.rowData = this.brandItem.SizeWidthAvailable;
            this.rangeGridApi.setRowData(this.brandItem.SizeWidthAvailable);
            return;
        }
        else {
            this.swRange.SizeWidthName = this.swRanges[params.target.selectedIndex - 1].SizeWidthName;
            this.brandItem.SizeWidthName = this.swRanges[params.target.selectedIndex - 1].SizeWidthName;
            this.brandItem.SizeWidthID = this.swRanges[params.target.selectedIndex - 1].ID;
            this.brandItem.SizeWidthAvailable = JSON.parse(this.swRanges[params.target.selectedIndex - 1].SizeWidth);
            this.brandItem.RangeType = this.swRanges[params.target.selectedIndex - 1].RangeType;
            // console.log(ar);
            this.rangeGridOptions.rowData = this.brandItem.SizeWidthAvailable;
            this.rangeGridApi.setRowData(this.brandItem.SizeWidthAvailable);
        }
    };
    ActionBrandComponent.prototype.onSubmit = function () {
        var _this = this;
        // console.log(this.brandItem);
        if (this.brandService.isCreateBrand) {
            // console.log(this.brandItem);
            this.brandService.addBrand(this.brandItem).subscribe(function (res) {
                _this.submitted = true;
                _this.confirmationTitle = "Brand Saved";
            });
        }
        else if (this.brandService.isEditBrand) {
            this.brandService.updateBrand(this.brandItem).subscribe(function (res) {
                _this.submitted = true;
                _this.confirmationTitle = "Brand Updated";
            });
        }
        else if (this.brandService.isViewBrand) {
            this.brandService.isViewBrand = false;
            this.brandService.isEditBrand = true;
            this.isInlineEditBrand = true;
        }
    };
    ActionBrandComponent.prototype.cancelEdit = function () {
        this.brandService.isViewBrand = true;
        this.brandService.isEditBrand = false;
        this.isInlineEditBrand = false;
    };
    ActionBrandComponent.prototype.newBrand = function () {
        var _this = this;
        this.brandService.getAllVendors().subscribe(function (res) {
            // console.log("response at component is: "+ res);    
            if (res) {
                _this.brandItem = new _helpers_brand__WEBPACK_IMPORTED_MODULE_5__["Brand"]();
                _this.submitted = false;
                _this.vendors = res;
                //  console.log(this.vendors);
            }
            else {
                // console.log(typeof(res));
                _this.vendors = [];
            }
        });
    };
    ActionBrandComponent.prototype.close = function () {
        this.router.navigate(['/brands']);
    };
    ActionBrandComponent.prototype.createRangeGrid = function () {
        // if(this.swService.isCreateSWRange){
        //   // this.swRange = new SwRange();
        //   this.rangeGridOptions.rowData = this.swRange.SizeWidth;
        // }
        // else{
        //   this.swRange = this.swService.selectedSWRange;
        //   var ar=[];
        //   ar = JSON.parse(this.swService.selectedSWRange.SizeWidth);
        //   this.swService.selectedSWRange.SizeWidth = ar;
        //   this.rangeGridOptions.rowData = this.swService.selectedSWRange.SizeWidth;
        // }
        //   this.rangeGridOptions.columnDefs = this.columnDefs;
        //   // this.rangeGridOptions.onGridReady();// = this.onGridReady;
        //   //this.isActive = true;
    };
    ActionBrandComponent.prototype.onCellClick = function (params) {
        this.rangeGridApi = params.api;
        // console.log(params.value);
        if (params.rowIndex == 0) {
            this.rangeGridApi.stopEditing();
        }
        if (params.rowIndex > 0 && params.column.colId == 'A') {
            this.rangeGridApi.stopEditing();
        }
        if (params.rowIndex > 0 && this.brandItem.SizeWidthAvailable[0][params.column.colId] == '') {
            this.rangeGridApi.stopEditing();
        }
        if (params.rowIndex > 1 && this.brandItem.SizeWidthAvailable[params.rowIndex]['A'] == '') {
            this.rangeGridApi.stopEditing();
        }
        if (this.brandService.isViewBrand) {
            this.rangeGridApi.stopEditing();
        }
        // console.log(this.brandItem.SizeWidthAvailable);
    };
    ActionBrandComponent.prototype.onGridReady = function (params) {
        this.rangeGridApi = params.api;
        this.rangeGridColumnApi = params.columnApi;
        var col = this.rangeGridColumnApi.getColumn("A");
        var colDef = col.getColDef();
        var component = this;
        colDef.cellClass = function (params) {
            if (params.rowIndex == 0)
                return 'blk-col';
            else
                return "";
        };
        this.rangeGridOptions.api.redrawRows();
        this.rangeGridOptions.api.refreshHeader();
    };
    ActionBrandComponent.prototype.onGridSizeChanged = function (params) {
        var gridWidth = document.getElementById("rangeGrid").offsetWidth;
        var columnsToShow = [];
        var columnsToHide = [];
        var totalColsWidth = 0;
        var allColumns = params.columnApi.getAllColumns();
        for (var i = 0; i < allColumns.length; i++) {
            var column = allColumns[i];
            totalColsWidth += column.getMinWidth();
            if (totalColsWidth > gridWidth) {
                columnsToHide.push(column.colId);
            }
            else {
                columnsToShow.push(column.colId);
            }
        }
        params.columnApi.setColumnsVisible(columnsToShow, true);
        params.columnApi.setColumnsVisible(columnsToHide, false);
        params.api.sizeColumnsToFit();
    };
    ActionBrandComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-action-brand',
            template: __webpack_require__(/*! ./action-brand.component.html */ "./src/app/components/action-brand/action-brand.component.html"),
            styles: [__webpack_require__(/*! ./action-brand.component.css */ "./src/app/components/action-brand/action-brand.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_brand_service__WEBPACK_IMPORTED_MODULE_3__["BrandService"], _services_size_width_service__WEBPACK_IMPORTED_MODULE_4__["SizeWidthService"]])
    ], ActionBrandComponent);
    return ActionBrandComponent;
}());



/***/ }),

/***/ "./src/app/components/action-department/action-department.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/action-department/action-department.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.breadcrumb {\r\n    margin-bottom: 0px;\r\n    padding: 0px;\r\n}\r\n.grid-content {\r\n    height: 270px;\r\n    display: block;\r\n}\r\n.typeGridSection, .subTypeGridSection{\r\n    margin-top:10px;\r\n    /* margin-bottom: 10px; */\r\n}\r\n.deptAlertMsg,typeAlertMsg, subTypeAlertMsg{\r\n    padding:2px;\r\n    font-size:14px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hY3Rpb24tZGVwYXJ0bWVudC9hY3Rpb24tZGVwYXJ0bWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hY3Rpb24tZGVwYXJ0bWVudC9hY3Rpb24tZGVwYXJ0bWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uYnJlYWRjcnVtYiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuLmdyaWQtY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDI3MHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLnR5cGVHcmlkU2VjdGlvbiwgLnN1YlR5cGVHcmlkU2VjdGlvbntcclxuICAgIG1hcmdpbi10b3A6MTBweDtcclxuICAgIC8qIG1hcmdpbi1ib3R0b206IDEwcHg7ICovXHJcbn1cclxuLmRlcHRBbGVydE1zZyx0eXBlQWxlcnRNc2csIHN1YlR5cGVBbGVydE1zZ3tcclxuICAgIHBhZGRpbmc6MnB4O1xyXG4gICAgZm9udC1zaXplOjE0cHg7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/action-department/action-department.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/action-department/action-department.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-bar\">\r\n    <div *ngIf=\"deptService.isCreate\" class=\"title-bar d-inline-block \" >Add New Department</div>\r\n    <div *ngIf=\"deptService.isView\" class=\"title-bar d-inline-block \" >Department Details</div>\r\n    <!-- <button *ngIf=\"!createMode && !editMode\" class=\"d-inline-block btn btn btn-link\" (click)=\"close()\">&lt; Departments List</button>  -->\r\n    <ol class=\"breadcrumb\" *ngIf=\"!createMode && !editMode\">\r\n        <li class=\"breadcrumb-item\" aria-current=\"page\"><button  class=\"d-inline-block btn btn-sm btn-sm btn-link\" (click)=\"close()\">Departments List</button> </li>\r\n        <li *ngIf=\"typeSection || subTypeSection\" class=\"breadcrumb-item\" aria-current=\"page\"><button  class=\"d-inline-block btn btn-sm btn-link\" (click)=\"closeTypeCreate()\">Department Details</button> </li>\r\n        <li *ngIf=\"subTypeSection\" class=\"breadcrumb-item\" aria-current=\"page\"><button  class=\"d-inline-block btn btn-sm btn-link\" (click)=\"closeSubTypeCreate()\">Type Details</button> </li>\r\n      </ol>\r\n</div>\r\n\r\n<div class=\"container\">\r\n    <div *ngIf=\"departmentSection && dept\" class=\"departmentSection\">\r\n  \r\n      <form (ngSubmit)=\"onSubmit()\" #deptForm=\"ngForm\">\r\n        <div class=\"d-flex flex-row\">\r\n          <div class=\"form-group\">\r\n              <label class=\"required\" for=\"deptName\">Department Name:</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"deptName\" required\r\n              [(ngModel)]=\"dept.DepartmentName\" name=\"deptName\"\r\n              #DeptName=\"ngModel\"\r\n              [disabled]=\"deptSubmitted\">\r\n              \r\n          </div>\r\n          <div class=\"form-group\">\r\n              <label for=\"deptDesc\">Department Description:</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"deptDesc\"\r\n              [(ngModel)]=\"dept.DepartmentDesc\" name=\"deptDesc\"\r\n              #deptDesc=\"ngModel\"\r\n              [disabled]=\"deptSubmitted\">\r\n          </div>\r\n          \r\n          <div *ngIf=\"deptSubmitted\" class=\"\" style=\"margin-top:30px\">\r\n              <button *ngIf=\"deptSubmitted\" (click)=\"editDepartmentDetails()\" type=\"button\" class=\"btn btn-success\" >Edit</button>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"createMode\" class=\"d-block\">\r\n            <button *ngIf=\"!editDeptDetails\" class=\"btn btn-outline-primary\" type=\"button\" (click)=\"close()\">Cancel</button>\r\n            <button *ngIf=\"!editDeptDetails\" type=\"submit\" class=\"btn btn-success\" [disabled]=\"!deptForm.form.valid\">Save</button>\r\n            \r\n          </div>\r\n          <div *ngIf=\"editMode\">\r\n              <button *ngIf=\"editDeptDetails\" class=\"btn btn-outline-primary\" type=\"button\" (click)=\"cancelEditDepartmentDetails()\">Cancel</button>\r\n              <button *ngIf=\"editDeptDetails\" type=\"submit\" class=\"btn btn-success\"[disabled]=\"!deptForm.form.valid\" >Update</button>  \r\n          </div>\r\n      </form>\r\n\r\n\r\n\r\n      <div *ngIf=\"deptSubmitted\" class=\"type-grid\">\r\n          <div *ngIf=\"showDeptAlertMsg\" class=\"alert alert-dismissible alert-success fade show deptAlertMsg\" role=\"alert\">\r\n              {{deptAlertMsg}}\r\n          </div>\r\n          <button *ngIf=\"deptSubmitted\" (click)=\"addNewType(dept)\" class=\"btn btn-primary btn-sm\" >Add Type</button>\r\n          \r\n          <div class=\"typeGridSection\">\r\n              <div style=\"width: 100%;\" class=\"grid-content\">\r\n                  <ag-grid-angular #agGrid style=\"width: 100%;height:100%\" id=\"typeGrid\"\r\n                              class=\"ag-theme-material typeGrid\"                     \r\n                              [columnDefs]=\"typeColumnDefs\"\r\n                              [gridOptions]=\"typeGridOptions\"\r\n                              [singleClickEdit]=\"true\"\r\n                              (gridReady)=\"onTypeGridReady($event)\"\r\n                              (gridSizeChanged)=\"onTypeGridSizeChanged($event)\"\r\n                              rowHeight='25'\r\n                              headerHeight='25'\r\n                              >\r\n                  </ag-grid-angular>\r\n              </div>\r\n          </div>\r\n          <button  class=\"d-inline-block btn btn btn-outline-primary btn-sm\" type=\"button\" (click)=\"close()\">Go Back</button>\r\n          <br>\r\n      </div>\r\n\r\n    </div>\r\n    \r\n    <div *ngIf=\"typeSection\" class=\"typeSection\">\r\n        <form (ngSubmit)=\"onSubmitType()\" #typeForm=\"ngForm\">\r\n            <div class=\"d-flex flex-row\">\r\n              <div class=\"form-group\">\r\n                  <label class=\"required\" for=\"typeName\">Type Name:</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"typeName\" required\r\n                  [(ngModel)]=\"dtype.TypeName\" name=\"typeName\"\r\n                  #typeName=\"ngModel\"\r\n                  [disabled]=\"typeSubmitted\">\r\n                  \r\n              </div>\r\n              <div class=\"form-group\">\r\n                  <label for=\"typeDesc\">Type Description:</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"typeDesc\"\r\n                  [(ngModel)]=\"dtype.TypeDesc\" name=\"typeDesc\"\r\n                  #typeDesc=\"ngModel\"\r\n                  [disabled]=\"typeSubmitted\">\r\n              </div>\r\n              \r\n              <div *ngIf=\"typeSubmitted\" class=\"\" style=\"margin-top:30px\">\r\n                  <button *ngIf=\"typeSubmitted\" (click)=\"editDTypeDetails()\" type=\"button\" class=\"btn btn-success\" >Edit</button>\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"createTypeMode\" class=\"d-block\">\r\n                <button *ngIf=\"!editTypeDetails\" class=\"btn btn-outline-primary\" type=\"button\" (click)=\"closeTypeCreate()\">Cancel</button>\r\n                <button *ngIf=\"!editTypeDetails\" type=\"submit\" class=\"btn btn-success\" [disabled]=\"!typeForm.form.valid\">Save</button>\r\n                \r\n              </div>\r\n              <div *ngIf=\"editTypeMode\">\r\n                  <button *ngIf=\"editTypeDetails\" class=\"btn btn-outline-primary\" type=\"button\" (click)=\"cancelEditDTypeDetails()\">Cancel</button>\r\n                  <button *ngIf=\"editTypeDetails\" type=\"submit\" class=\"btn btn-success\" [disabled]=\"!typeForm.form.valid\" >Update</button>  \r\n              </div>\r\n          </form>\r\n    \r\n    \r\n    \r\n          <div *ngIf=\"typeSubmitted\" class=\"type-grid\">\r\n              <div *ngIf=\"showTypeAlertMsg\" class=\"alert alert-dismissible alert-success fade show typeAlertMsg\" role=\"alert\">\r\n                  {{typeAlertMsg}} \r\n              </div>\r\n              <button *ngIf=\"typeSubmitted\" (click)=\"addSubType(dtype)\" class=\"btn btn-primary btn-sm\" >Add Sub-Type</button>\r\n    \r\n              <div class=\"subTypeGridSection\">\r\n                  <div style=\"width: 100%;\" class=\"grid-content\">\r\n                      <ag-grid-angular #agGrid style=\"width: 100%;height:100%\" id=\"subTypeGrid\"\r\n                                  class=\"ag-theme-material subTypeGrid\"                     \r\n                                  [columnDefs]=\"subTypeColumnDefs\"\r\n                                  [gridOptions]=\"subTypeGridOptions\"\r\n                                  [singleClickEdit]=\"true\"\r\n                                  (gridReady)=\"onSubTypeGridReady($event)\"\r\n                                  (gridSizeChanged)=\"onSubTypeGridSizeChanged($event)\"\r\n                                  rowHeight='25'\r\n                                  headerHeight='25'\r\n                                  >\r\n                      </ag-grid-angular>\r\n                  </div>\r\n              </div>\r\n              <button  class=\"d-inline-block btn btn btn-outline-primary btn-sm\" type=\"button\" (click)=\"closeTypeCreate()\">Go Back</button>\r\n              <br>\r\n          </div>\r\n    </div>\r\n    <div *ngIf=\"subTypeSection\" class=\"subTypeSection\">\r\n        <form (ngSubmit)=\"onSubmitSubType()\" #subTypeForm=\"ngForm\">\r\n            <div class=\"d-flex flex-row\">\r\n              <div class=\"form-group\">\r\n                  <label class=\"required\" for=\"subTypeName\">Sub Type Name:</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"subTypeName\" required\r\n                  [(ngModel)]=\"subType.SubTypeName\" name=\"subTypeName\"\r\n                  #subTypeName=\"ngModel\"\r\n                  [disabled]=\"subTypeSubmitted\">\r\n                  \r\n              </div>\r\n              <div class=\"form-group\">\r\n                  <label for=\"subTypeDesc\">Sub Type Description:</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"subTypeDesc\"\r\n                  [(ngModel)]=\"subType.SubTypeDesc\" name=\"subTypeDesc\"\r\n                  #subTypeDesc=\"ngModel\"\r\n                  [disabled]=\"subTypeSubmitted\">\r\n              </div>\r\n              \r\n              <div *ngIf=\"subTypeSubmitted\" class=\"\" style=\"margin-top:30px\">\r\n                  <button *ngIf=\"subTypeSubmitted\" (click)=\"editDSubTypeDetails()\" type=\"button\" class=\"btn btn-success\" >Edit</button>\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"createSubTypeMode\" class=\"d-block\">\r\n                <button *ngIf=\"!editSubTypeDetails\" class=\"btn btn-outline-primary\" type=\"button\" (click)=\"closeSubTypeCreate()\">Cancel</button>\r\n                <button *ngIf=\"!editSubTypeDetails\" type=\"submit\" class=\"btn btn-success\" [disabled]=\"!subTypeForm.form.valid\">Save</button>\r\n                \r\n              </div>\r\n              <div *ngIf=\"editSubTypeMode\">\r\n                  <button *ngIf=\"editSubTypeDetails\" class=\"btn btn-outline-primary\" type=\"button\" (click)=\"cancelEditSubTypeDetails()\">Cancel</button>\r\n                  <button *ngIf=\"editSubTypeDetails\" type=\"submit\" class=\"btn btn-success\" [disabled]=\"!subTypeForm.form.valid\">Update</button>  \r\n              </div>\r\n          </form>\r\n    \r\n    \r\n    \r\n          <div *ngIf=\"subTypeSubmitted\" class=\"type-grid\">\r\n              <div *ngIf=\"showSubTypeAlertMsg\" class=\"alert alert-dismissible alert-success fade show subTypeAlertMsg\" role=\"alert\">\r\n                  {{subTypeAlertMsg}} \r\n              </div>\r\n              \r\n              \r\n              <button  class=\"d-inline-block btn btn btn-outline-primary btn-sm\" type=\"button\" (click)=\"closeSubTypeCreate()\">Go Back</button>&nbsp;&nbsp;\r\n              \r\n              <button *ngIf=\"showViewOnlySubTypeMode\" class=\"d-inline-block btn btn btn-primary btn-sm\" type=\"button\" (click)=\"addSubType(dtype)\">Add Another Sub-Type</button>\r\n          </div>\r\n    </div>\r\n \r\n</div>\r\n\r\n<div class=\"modal modal-delete fade\" id=\"deleteTypeConfirmationModel\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"DeleteConfirmation\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n            <h5 class=\"modal-title\" id=\"exampleModalLabel\">Confirm Delete</h5>                                    \r\n        </div>\r\n        <div class=\"modal-body\">\r\n            Are you sure you want to delete the Type: '{{selectedTypeName}}' and all its SubType?\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" (click)=\"cancelDeleteType()\" class=\"btn btn-secondary\" data-dismiss=\"modal\">No</button>\r\n            <button type=\"button\" (click)=\"confirmDeleteType()\" class=\"btn btn-primary\">Yes</button>\r\n        </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal modal-delete fade\" id=\"deleteSubTypeConfirmationModel\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"DeleteConfirmation\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n            <h5 class=\"modal-title\" id=\"exampleModalLabel\">Confirm Delete</h5>                                    \r\n        </div>\r\n        <div class=\"modal-body\">\r\n            Are you sure you want to delete the Sub Type: {{selectedSubTypeName}}?\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" (click)=\"cancelDeleteSubType()\" class=\"btn btn-secondary\" data-dismiss=\"modal\">No</button>\r\n            <button type=\"button\" (click)=\"confirmDeleteSubType()\" class=\"btn btn-primary\">Yes</button>\r\n        </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/action-department/action-department.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/action-department/action-department.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ActionDepartmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionDepartmentComponent", function() { return ActionDepartmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_department_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/department.service */ "./src/app/services/department.service.ts");
/* harmony import */ var _helpers_department__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/department */ "./src/app/helpers/department.ts");
/* harmony import */ var _helper_components_type_edit_delete_btn_type_edit_delete_btn_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helper-components/type-edit-delete-btn/type-edit-delete-btn.component */ "./src/app/helper-components/type-edit-delete-btn/type-edit-delete-btn.component.ts");
/* harmony import */ var _helper_components_sub_type_edit_delete_btn_sub_type_edit_delete_btn_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helper-components/sub-type-edit-delete-btn/sub-type-edit-delete-btn.component */ "./src/app/helper-components/sub-type-edit-delete-btn/sub-type-edit-delete-btn.component.ts");







var ActionDepartmentComponent = /** @class */ (function () {
    // submitted = false;
    function ActionDepartmentComponent(router, route, deptService) {
        this.router = router;
        this.route = route;
        this.deptService = deptService;
        this.deptAlertMsg = 'Message';
        this.showDeptAlertMsg = false;
        this.typeAlertMsg = 'Message';
        this.showTypeAlertMsg = false;
        this.subTypeAlertMsg = "Message";
        this.showSubTypeAlertMsg = false;
        this.showViewOnlySubTypeMode = false;
        this.selectedTypeID = 0;
        this.selectedSubTypeID = 0;
        this.selectedTypeName = '';
        this.selectedSubTypeName = '';
        this.typeSubmitted = false;
        this.editTypeDetails = false;
        this.editTypeMode = false;
        this.createTypeMode = false;
        this.subTypeSubmitted = false;
        this.editSubTypeDetails = false;
        this.editSubTypeMode = false;
        this.createSubTypeMode = false;
        this.departmentSection = true;
        this.typeSection = false;
        this.subTypeSection = false;
        this.isActive = false;
        // this.selectedStore.StoreName = '';
        /* Type Grid Options and Coldefs */
        this.typeGridOptions = {
            context: {
                componentParent: this
            },
            enableColResize: true,
            enableSorting: true,
            enableFilter: true,
            pagination: true,
            paginationAutoPageSize: true
        };
        this.typeColumnDefs = [
            {
                headerName: "ID",
                field: "ID",
                minWidth: 100,
                maxWidth: 100
            },
            {
                headerName: "Type Name",
                field: "TypeName",
                minWidth: 200,
            },
            {
                headerName: "Type Description",
                field: "TypeDesc",
                minWidth: 200,
            },
            {
                headerName: "Action",
                cellRendererFramework: _helper_components_type_edit_delete_btn_type_edit_delete_btn_component__WEBPACK_IMPORTED_MODULE_5__["TypeEditDeleteBtnComponent"],
                maxWidth: 200
            }
        ];
        /* Type Grid Options and Coldefs */
        this.subTypeGridOptions = {
            context: {
                componentParent: this
            },
            enableColResize: true,
            enableSorting: true,
            enableFilter: true,
            pagination: true,
            paginationAutoPageSize: true
        };
        this.subTypeColumnDefs = [
            {
                headerName: "ID",
                field: "ID",
                minWidth: 100,
                maxWidth: 100
            },
            {
                headerName: "Sub Type Name",
                field: "SubTypeName",
                minWidth: 200,
            },
            {
                headerName: "Sub Type Description",
                field: "SubTypeDesc",
                minWidth: 200,
            },
            {
                headerName: "Action",
                cellRendererFramework: _helper_components_sub_type_edit_delete_btn_sub_type_edit_delete_btn_component__WEBPACK_IMPORTED_MODULE_6__["SubTypeEditDeleteBtnComponent"],
                maxWidth: 200
            }
        ];
    }
    ActionDepartmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.deptService.isCreate == false && this.deptService.isEdit == false
            && this.deptService.isView == false) {
            this.deptService.isCreate = true;
        }
        // console.log("init");
        var action = this.route.snapshot.params['action'];
        var id = this.route.snapshot.params['id'];
        // console.log(action);
        if (action == 'viewEdit') {
            this.deptService.getDepartment(id).subscribe(function (res) {
                var obj;
                // console.log("response at component is: "+ res);    
                if (res) {
                    // console.log(res[0]);
                    obj = res[0];
                    _this.deptService.selectedDepartment.ID = obj.ID;
                    _this.deptService.selectedDepartment.DepartmentName = obj.DepartmentName;
                    _this.deptService.selectedDepartment.DepartmentDesc = obj.DepartmentDesc;
                }
                else {
                    // console.log(typeof(res));
                }
                _this.deptService.isEdit = false;
                _this.deptService.isCreate = false;
                _this.deptService.isView = true;
                _this.deptSubmitted = true;
                _this.editDeptDetails = false;
                _this.editMode = false;
                _this.createMode = false;
                // var component = this;
                _this.deptService.getTypes(id).subscribe(function (res) {
                    // console.log("response at component is: "+ res);    
                    if (res) {
                        // console.log('array');
                        _this.deptService.selectedDepartment.DTypes = res;
                    }
                    else {
                        // console.log(typeof(res));
                        _this.deptService.selectedDepartment.DTypes = [];
                    }
                    _this.dept = _this.deptService.selectedDepartment;
                    _this.typeGridOptions.rowData = _this.dept.DTypes;
                });
            });
        }
        else if (action == 'create') {
            this.deptService.isEdit = false;
            this.deptService.isCreate = true;
            this.deptService.isView = false;
            this.deptSubmitted = false;
            this.editDeptDetails = false;
            this.editMode = false;
            this.createMode = true;
            this.dept = new _helpers_department__WEBPACK_IMPORTED_MODULE_4__["Department"]();
        }
        if (this.deptService.isEdit) {
            this.deptSubmitted = false;
            this.editDeptDetails = true;
            this.editMode = true;
            this.createMode = false;
            this.dept = this.deptService.selectedDepartment;
        }
        else if (this.deptService.isCreate) {
            // this.deptSubmitted=false;
            // this.editDeptDetails=false;
            // this.editMode=false;
            // this.createMode=true;
            // this.dept = new Department();
        }
        else if (this.deptService.isView) {
            // this.deptSubmitted=true;
            // this.editDeptDetails=false;
            // this.editMode=false;
            // this.createMode=false;
            // this.dept = this.deptService.selectedDepartment;
        }
        this.subTypeGridOptions.rowData = [];
    };
    ActionDepartmentComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.editDeptDetails) {
            this.deptService.updateDepartment(this.dept).subscribe(function (res) {
                _this.deptSubmitted = true;
                _this.editDeptDetails = false;
                _this.editMode = false;
                _this.deptAlertMsg = "Department Updated - [ To add 'Type' to this department click 'Add Type' ]";
                _this.showDeptAlertMsg = true;
            });
        }
        else {
            this.deptService.addDepartment(this.dept).subscribe(function (res) {
                // console.log(res);
                _this.dept.ID = res.ID;
                _this.dept.DepartmentName = res.DepartmentName;
                _this.dept.DepartmentDesc = res.DepartmentDesc;
                _this.deptAlertMsg = "Department Saved - [ To add 'Type' to this department click 'Add Type' ]";
                _this.showDeptAlertMsg = true;
                _this.deptSubmitted = true;
                _this.editDeptDetails = false;
                _this.editMode = false;
                _this.createMode = false;
            });
        }
    };
    ActionDepartmentComponent.prototype.onSubmitType = function () {
        var _this = this;
        if (this.editTypeDetails) {
            this.deptService.updateType(this.dtype).subscribe(function (res) {
                _this.typeSubmitted = true;
                _this.editTypeDetails = false;
                _this.editTypeMode = false;
                _this.typeAlertMsg = "Type Updated - [ To add 'Sub-Type' to this Type click 'Add Sub-Type' ]";
                _this.showTypeAlertMsg = true;
                // updates types grid
                _this.loadTypesGrid();
            });
        }
        else {
            this.deptService.addNewType(this.dtype).subscribe(function (res) {
                // console.log(res);
                // this.dtype = res;
                _this.dtype = new _helpers_department__WEBPACK_IMPORTED_MODULE_4__["DType"](_this.dept.ID);
                _this.dtype.ID = res.ID;
                _this.dtype.DepartmentID = res.DepartmentID;
                _this.dtype.TypeName = res.TypeName;
                _this.dtype.TypeDesc = res.TypeDesc;
                _this.loadTypesGrid();
                _this.dept.DTypes.push(res);
                // console.log(this.dept.DTypes);
                _this.typeGridOptions.rowData = _this.dept.DTypes;
                _this.subTypeGridOptions.rowData = _this.dtype.SubTypes;
                _this.typeAlertMsg = "Type Saved - [ To add 'Sub-Type' to this Type click 'Add Sub-Type' ]";
                _this.showTypeAlertMsg = true;
                _this.typeSubmitted = true;
                _this.editTypeDetails = false;
                _this.editTypeMode = false;
                _this.createTypeMode = false;
            });
        }
    };
    ActionDepartmentComponent.prototype.loadTypesGrid = function () {
        var _this = this;
        this.deptService.getTypes(this.dept.ID).subscribe(function (res) {
            // console.log("response at component is: "+ res);    
            if (res) {
                // console.log('array');
                _this.deptService.selectedDepartment.DTypes = res;
                _this.dept.DTypes = _this.deptService.selectedDepartment.DTypes;
                _this.typeGridOptions.rowData = _this.dept.DTypes;
            }
            else {
                // console.log(typeof(res));
                _this.deptService.selectedDepartment.DTypes = [];
                _this.dept.DTypes = _this.deptService.selectedDepartment.DTypes;
                _this.typeGridOptions.rowData = _this.dept.DTypes;
            }
        });
    };
    ActionDepartmentComponent.prototype.onSubmitSubType = function () {
        var _this = this;
        if (this.editSubTypeDetails) {
            this.deptService.updateSubType(this.subType).subscribe(function (res) {
                _this.subTypeSubmitted = true;
                _this.editSubTypeDetails = false;
                _this.editSubTypeMode = false;
                _this.subTypeAlertMsg = "Sub Type Updated";
                _this.showSubTypeAlertMsg = true;
                //update subtypes grid
            });
        }
        else {
            this.deptService.addNewSubType(this.subType).subscribe(function (res) {
                // console.log(res);
                _this.subType = res;
                _this.dtype.SubTypes.push(res);
                // console.log(this.dept.DTypes);
                _this.subTypeGridOptions.rowData = _this.dtype.SubTypes;
                _this.subTypeAlertMsg = "Sub Type Saved";
                _this.showSubTypeAlertMsg = true;
                _this.subTypeSubmitted = true;
                _this.editSubTypeDetails = false;
                _this.editSubTypeMode = false;
                _this.createSubTypeMode = false;
                _this.showViewOnlySubTypeMode = true;
            });
        }
    };
    ActionDepartmentComponent.prototype.editDepartmentDetails = function () {
        this.deptSubmitted = false;
        this.editDeptDetails = true;
        this.editMode = true;
    };
    ActionDepartmentComponent.prototype.editDTypeDetails = function () {
        this.typeSubmitted = false;
        this.editTypeDetails = true;
        this.editTypeMode = true;
    };
    ActionDepartmentComponent.prototype.editDSubTypeDetails = function () {
        this.subTypeSubmitted = false;
        this.editSubTypeDetails = true;
        this.editSubTypeMode = true;
    };
    ActionDepartmentComponent.prototype.cancelEditDepartmentDetails = function () {
        var _this = this;
        this.deptSubmitted = true;
        this.editDeptDetails = false;
        this.editMode = false;
        this.showDeptAlertMsg = false;
        this.deptService.getDepartment(this.dept.ID).subscribe(function (res) {
            var obj;
            // console.log("response at component is: "+ res);    
            if (res) {
                // console.log(res[0]);
                obj = res[0];
                _this.deptService.selectedDepartment.ID = obj.ID;
                _this.deptService.selectedDepartment.DepartmentName = obj.DepartmentName;
                _this.deptService.selectedDepartment.DepartmentDesc = obj.DepartmentDesc;
            }
            else {
                // console.log(typeof(res));
            }
            _this.deptService.isEdit = false;
            _this.deptService.isCreate = false;
            _this.deptService.isView = true;
            _this.deptSubmitted = true;
            _this.editDeptDetails = false;
            _this.editMode = false;
            _this.createMode = false;
            // var component = this;
            _this.deptService.getTypes(_this.dept.ID).subscribe(function (res) {
                // console.log("response at component is: "+ res);    
                if (res) {
                    // console.log('array');
                    _this.deptService.selectedDepartment.DTypes = res;
                }
                else {
                    // console.log(typeof(res));
                    _this.deptService.selectedDepartment.DTypes = [];
                }
                _this.dept = _this.deptService.selectedDepartment;
                _this.typeGridOptions.rowData = _this.dept.DTypes;
            });
        });
    };
    ActionDepartmentComponent.prototype.cancelEditDTypeDetails = function () {
        var _this = this;
        this.typeSubmitted = true;
        this.editTypeDetails = false;
        this.editTypeMode = false;
        this.showTypeAlertMsg = false;
        this.deptService.getType(this.dtype.ID).subscribe(function (res) {
            var obj;
            // console.log("response at component is: "+ res);    
            if (res) {
                // console.log(res[0]);
                obj = res[0];
                // this.dtype.ID = obj.ID;
                // this.dtype.TypeName = obj.TypeName;
                // this.dtype.TypeDesc = obj.TypeDesc;
                _this.viewEditDType(obj);
            }
            else {
                // console.log(typeof(res));
            }
        });
    };
    ActionDepartmentComponent.prototype.cancelEditSubTypeDetails = function () {
        var _this = this;
        this.subTypeSubmitted = true;
        this.editSubTypeDetails = false;
        this.editSubTypeMode = false;
        this.showSubTypeAlertMsg = false;
        this.deptService.getSubType(this.subType.ID).subscribe(function (res) {
            var obj;
            // console.log("response at component is: "+ res);    
            if (res) {
                // console.log(res[0]);
                obj = res[0];
                // this.viewEditSubType(obj);
                _this.showSubTypeAlertMsg = false;
                _this.showTypeAlertMsg = false;
                _this.typeSection = false;
                _this.subTypeSection = true;
                _this.createSubTypeMode = true;
                _this.subType = obj;
                _this.subTypeSubmitted = true;
                _this.editSubTypeDetails = false;
                _this.editSubTypeMode = false;
                _this.createSubTypeMode = false;
                _this.showViewOnlySubTypeMode = false;
                _this.updateSubTypeGridData();
            }
            else {
                // console.log(typeof(res));
            }
        });
    };
    ActionDepartmentComponent.prototype.updateSubTypeGridData = function () {
        var _this = this;
        this.deptService.getSubTypes(this.dtype.ID).subscribe(function (res) {
            if (res) {
                // console.log('array');
                _this.dtype.SubTypes = res;
                // this.router.navigate(['/actionDepartment']);
                _this.subTypeGridOptions.rowData = _this.dtype.SubTypes;
                _this.subTypeGridApi.setRowData(res);
            }
            else {
                // console.log(typeof(res));
                _this.dtype.SubTypes = [];
                // this.router.navigate(['/actionDepartment']);
                _this.subTypeGridOptions.rowData = _this.dtype.SubTypes;
                _this.subTypeGridApi.setRowData(res);
            }
        });
    };
    ActionDepartmentComponent.prototype.newDepartment = function () {
        this.dept = new _helpers_department__WEBPACK_IMPORTED_MODULE_4__["Department"]();
        // this.submitted = false;
    };
    ActionDepartmentComponent.prototype.close = function () {
        this.router.navigate(['/departments']);
    };
    ActionDepartmentComponent.prototype.addNewType = function (dept) {
        this.showDeptAlertMsg = false;
        this.showTypeAlertMsg = false;
        this.departmentSection = false;
        this.typeSection = true;
        this.subTypeSection = false;
        // this.dtype.DepartmentID = this.dept.ID;
        this.createTypeMode = true;
        this.dtype = new _helpers_department__WEBPACK_IMPORTED_MODULE_4__["DType"](this.dept.ID);
        this.typeSubmitted = false;
        this.editTypeDetails = false;
        this.editTypeMode = false;
        this.createTypeMode = true;
    };
    ActionDepartmentComponent.prototype.addSubType = function (dtype) {
        // console.log(dtype);
        this.showSubTypeAlertMsg = false;
        this.showTypeAlertMsg = false;
        this.typeSection = false;
        this.subTypeSection = true;
        this.createSubTypeMode = true;
        this.subType = new _helpers_department__WEBPACK_IMPORTED_MODULE_4__["SubType"](this.dtype.ID);
        this.subTypeSubmitted = false;
        this.editSubTypeDetails = false;
        this.editSubTypeMode = false;
        this.createSubTypeMode = true;
        this.showViewOnlySubTypeMode = true;
    };
    // closeTypeDetails
    ActionDepartmentComponent.prototype.closeTypeCreate = function () {
        this.departmentSection = true;
        this.typeSection = false;
        this.subTypeSection = false;
        this.createTypeMode = false;
        this.showDeptAlertMsg = false;
        this.showTypeAlertMsg = false;
        this.dtype = new _helpers_department__WEBPACK_IMPORTED_MODULE_4__["DType"](this.dept.ID);
    };
    ActionDepartmentComponent.prototype.closeSubTypeCreate = function () {
        var _this = this;
        this.departmentSection = false;
        this.typeSection = true;
        this.subTypeSection = false;
        this.createSubTypeMode = false;
        this.showDeptAlertMsg = false;
        this.showTypeAlertMsg = false;
        this.showSubTypeAlertMsg = false;
        var obj = this.dtype;
        this.deptService.getSubTypes(obj.ID).subscribe(function (res) {
            if (res) {
                // console.log('array');
                _this.dtype.SubTypes = res;
                // this.router.navigate(['/actionDepartment']);
                _this.subTypeGridOptions.rowData = _this.dtype.SubTypes;
                _this.subTypeGridApi.setRowData(res);
            }
            else {
                // console.log(typeof(res));
                _this.dtype.SubTypes = [];
                // this.router.navigate(['/actionDepartment']);
                _this.subTypeGridOptions.rowData = _this.dtype.SubTypes;
                _this.subTypeGridApi.setRowData(res);
            }
        });
    };
    ActionDepartmentComponent.prototype.viewEditDType = function (obj) {
        var _this = this;
        this.deptService.getSubTypes(obj.ID).subscribe(function (res) {
            // console.log("response at component is: "+ res);  
            _this.showTypeAlertMsg = false;
            _this.showTypeAlertMsg = false;
            _this.departmentSection = false;
            _this.typeSection = true;
            _this.dtype = new _helpers_department__WEBPACK_IMPORTED_MODULE_4__["DType"](_this.dept.ID);
            _this.dtype.ID = obj.ID;
            _this.dtype.TypeName = obj.TypeName;
            _this.dtype.TypeDesc = obj.TypeDesc;
            if (res) {
                // console.log('array');
                _this.dtype.SubTypes = res;
                // this.router.navigate(['/actionDepartment']);
                _this.subTypeGridOptions.rowData = _this.dtype.SubTypes;
            }
            else {
                // console.log(typeof(res));
                _this.dtype.SubTypes = [];
                // this.router.navigate(['/actionDepartment']);
                _this.subTypeGridOptions.rowData = _this.dtype.SubTypes;
            }
            _this.typeSubmitted = true;
            _this.editTypeDetails = false;
            _this.editTypeMode = false;
            _this.createTypeMode = false;
        });
    };
    ActionDepartmentComponent.prototype.deleteDType = function (obj) {
        // console.log(obj);
        $('#deleteTypeConfirmationModel').modal('show');
        this.selectedTypeID = obj.ID;
        this.selectedTypeName = obj.TypeName;
    };
    ActionDepartmentComponent.prototype.confirmDeleteType = function () {
        var _this = this;
        //   this.selectedID = 2;
        $('#deleteTypeConfirmationModel').modal('hide');
        this.deptService.deleteType(this.selectedTypeID).subscribe(function (res) {
            if (res) {
                _this.deptService.getTypes(_this.dept.ID).subscribe(function (res) {
                    //  console.log(res);
                    if (res) {
                        _this.typeGridOptions.rowData = res;
                        _this.typeGridApi.setRowData(res);
                    }
                    else {
                        _this.typeGridOptions.rowData = [];
                        _this.typeGridApi.setRowData([]);
                    }
                });
            }
        });
    };
    ActionDepartmentComponent.prototype.cancelDeleteType = function () {
        $('#deleteTypeConfirmationModel').modal('hide');
    };
    ActionDepartmentComponent.prototype.viewEditSubType = function (obj) {
        this.showSubTypeAlertMsg = false;
        this.showTypeAlertMsg = false;
        this.typeSection = false;
        this.subTypeSection = true;
        this.createSubTypeMode = true;
        this.subType = obj;
        this.subTypeSubmitted = true;
        this.editSubTypeDetails = false;
        this.editSubTypeMode = false;
        this.createSubTypeMode = false;
        this.showViewOnlySubTypeMode = false;
    };
    ActionDepartmentComponent.prototype.deleteSubType = function (obj) {
        // console.log(obj);
        $('#deleteSubTypeConfirmationModel').modal('show');
        this.selectedSubTypeID = obj.ID;
        this.selectedSubTypeName = obj.SubTypeName;
    };
    ActionDepartmentComponent.prototype.confirmDeleteSubType = function () {
        var _this = this;
        //   this.selectedID = 2;
        $('#deleteSubTypeConfirmationModel').modal('hide');
        this.deptService.deleteSubType(this.selectedSubTypeID).subscribe(function (res) {
            if (res) {
                _this.deptService.getSubTypes(_this.dtype.ID).subscribe(function (res) {
                    // console.log(res);
                    if (res) {
                        _this.subTypeGridOptions.rowData = res;
                        _this.subTypeGridApi.setRowData(res);
                    }
                    else {
                        _this.subTypeGridOptions.rowData = [];
                        _this.subTypeGridApi.setRowData([]);
                    }
                    // this.storesGridOptions.rowData = res;
                });
            }
        });
    };
    ActionDepartmentComponent.prototype.cancelDeleteSubType = function () {
        $('#deleteConfirmationModel').modal('hide');
    };
    ActionDepartmentComponent.prototype.onTypeGridReady = function (params) {
        this.typeGridApi = params.api;
        this.typeGridColumnApi = params.columnApi;
    };
    ActionDepartmentComponent.prototype.onTypeGridSizeChanged = function (params) {
        var gridWidth = document.getElementById("typeGrid").offsetWidth;
        var columnsToShow = [];
        var columnsToHide = [];
        var totalColsWidth = 0;
        var allColumns = params.columnApi.getAllColumns();
        for (var i = 0; i < allColumns.length; i++) {
            var column = allColumns[i];
            totalColsWidth += column.getMinWidth();
            if (totalColsWidth > gridWidth) {
                columnsToHide.push(column.colId);
            }
            else {
                columnsToShow.push(column.colId);
            }
        }
        params.columnApi.setColumnsVisible(columnsToShow, true);
        params.columnApi.setColumnsVisible(columnsToHide, false);
        params.api.sizeColumnsToFit();
    };
    ActionDepartmentComponent.prototype.onSubTypeGridReady = function (params) {
        this.subTypeGridApi = params.api;
        this.subTypeGridColumnApi = params.columnApi;
    };
    ActionDepartmentComponent.prototype.onSubTypeGridSizeChanged = function (params) {
        var gridWidth = document.getElementById("subTypeGrid").offsetWidth;
        var columnsToShow = [];
        var columnsToHide = [];
        var totalColsWidth = 0;
        var allColumns = params.columnApi.getAllColumns();
        for (var i = 0; i < allColumns.length; i++) {
            var column = allColumns[i];
            totalColsWidth += column.getMinWidth();
            if (totalColsWidth > gridWidth) {
                columnsToHide.push(column.colId);
            }
            else {
                columnsToShow.push(column.colId);
            }
        }
        params.columnApi.setColumnsVisible(columnsToShow, true);
        params.columnApi.setColumnsVisible(columnsToHide, false);
        params.api.sizeColumnsToFit();
    };
    ActionDepartmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-action-department',
            template: __webpack_require__(/*! ./action-department.component.html */ "./src/app/components/action-department/action-department.component.html"),
            styles: [__webpack_require__(/*! ./action-department.component.css */ "./src/app/components/action-department/action-department.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_department_service__WEBPACK_IMPORTED_MODULE_3__["DepartmentService"]])
    ], ActionDepartmentComponent);
    return ActionDepartmentComponent;
}());



/***/ }),

/***/ "./src/app/components/action-purchase-order/action-purchase-order.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/components/action-purchase-order/action-purchase-order.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.breadcrumb {\r\n    margin-bottom: 0px;\r\n    padding: 0px;\r\n}\r\n.grid-content {\r\n    height: 270px;\r\n    display: block;\r\n}\r\n.productGridSection{\r\n    margin-top:10px;\r\n    /* margin-bottom: 10px; */\r\n}\r\n.poAlertMsg, productAlertMsg{\r\n    padding:2px;\r\n    font-size:14px;\r\n}\r\n.alert {\r\n    margin-bottom: 0px;\r\n}\r\n.availableWidthsection {\r\n    border: 1px solid Lightgray;\r\n    padding: 5px;\r\n    margin-bottom: 10px;\r\n    \r\n}\r\ninput[type=\"checkbox\"] { \r\n    zoom: 1.2;\r\n}\r\n.form-check-label {\r\n    font-size:16px;\r\n}\r\n.margin-5 {\r\n    margin: 5px;\r\n}\r\n#upcGrid .ag-row-level-0, #rangeGrid .ag-row-level-0 {\r\n    font-weight: bold !important;\r\n    text-align: center !important;\r\n}\r\n#upcGrid.ag-row.ag-row-no-focus.ag-row-even.ag-row-no-animation.ag-row-level-0 {\r\n    font-weight: bold !important;\r\n    text-align: center !important;\r\n}\r\n.cartCategoryOptions {\r\n    border: 1px solid lightgray;\r\n    padding:10px;\r\n}\r\n.flex-align-end {\r\n    align-items: flex-end;\r\n}\r\n.flex-align-start {\r\n    align-items: flex-start;\r\n}\r\n.additonalInfoField {\r\n    padding: 15px;\r\n    background: lightgray;\r\n    border: 1px solid lightgray;\r\n    max-width: 500px;\r\n}\r\n.bpFields {\r\n    margin: 10px;\r\n    border: 1px solid lightgray;\r\n}\r\n.form-group2x {\r\n    max-width: 500px;\r\n}\r\n.noteMsg {\r\n    font-size: 10px;\r\n    color: orange;\r\n}\r\n.footer {\r\n    position: fixed;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  padding: 5px;\r\n  border-top: 1px solid lightgray;\r\n  background-color: #fbfbfb;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hY3Rpb24tcHVyY2hhc2Utb3JkZXIvYWN0aW9uLXB1cmNoYXNlLW9yZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7SUFDYixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsY0FBYztBQUNsQjtBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLG1CQUFtQjs7QUFFdkI7QUFFQTtJQUNJLFNBQVM7QUFDYjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsNkJBQTZCO0FBQ2pDO0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsNkJBQTZCO0FBQ2pDO0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsWUFBWTtBQUNoQjtBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksWUFBWTtJQUNaLDJCQUEyQjtBQUMvQjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZUFBZTtFQUNqQixPQUFPO0VBQ1AsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osK0JBQStCO0VBQy9CLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWN0aW9uLXB1cmNoYXNlLW9yZGVyL2FjdGlvbi1wdXJjaGFzZS1vcmRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5icmVhZGNydW1iIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG4uZ3JpZC1jb250ZW50IHtcclxuICAgIGhlaWdodDogMjcwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4ucHJvZHVjdEdyaWRTZWN0aW9ue1xyXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xyXG4gICAgLyogbWFyZ2luLWJvdHRvbTogMTBweDsgKi9cclxufVxyXG4ucG9BbGVydE1zZywgcHJvZHVjdEFsZXJ0TXNne1xyXG4gICAgcGFkZGluZzoycHg7XHJcbiAgICBmb250LXNpemU6MTRweDtcclxufVxyXG5cclxuLmFsZXJ0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuLmF2YWlsYWJsZVdpZHRoc2VjdGlvbiB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBMaWdodGdyYXk7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgXHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7IFxyXG4gICAgem9vbTogMS4yO1xyXG59XHJcblxyXG4uZm9ybS1jaGVjay1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6MTZweDtcclxufVxyXG4ubWFyZ2luLTUge1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbn1cclxuI3VwY0dyaWQgLmFnLXJvdy1sZXZlbC0wLCAjcmFuZ2VHcmlkIC5hZy1yb3ctbGV2ZWwtMCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiN1cGNHcmlkLmFnLXJvdy5hZy1yb3ctbm8tZm9jdXMuYWctcm93LWV2ZW4uYWctcm93LW5vLWFuaW1hdGlvbi5hZy1yb3ctbGV2ZWwtMCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXJ0Q2F0ZWdvcnlPcHRpb25zIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIHBhZGRpbmc6MTBweDtcclxufVxyXG5cclxuLmZsZXgtYWxpZ24tZW5kIHtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxufVxyXG4uZmxleC1hbGlnbi1zdGFydCB7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxufVxyXG4uYWRkaXRvbmFsSW5mb0ZpZWxkIHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG59XHJcblxyXG4uYnBGaWVsZHMge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cDJ4IHtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbn1cclxuXHJcbi5ub3RlTXNnIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGNvbG9yOiBvcmFuZ2U7XHJcbn1cclxuLmZvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZmJmYjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/action-purchase-order/action-purchase-order.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/action-purchase-order/action-purchase-order.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-bar\">\r\n    <div class=\"title-bar d-inline-block \">{{title}}</div>\r\n    <div *ngIf=\"showPOAlertMsg && poSubmitted\"\r\n        class=\"d-inline-block alert alert-dismissible alert-success fade show poAlertMsg\" role=\"alert\">\r\n        {{poAlertMsg}}\r\n    </div>\r\n    <div *ngIf=\"(poSection && showExportOption)\" class=\"d-inline-block float-right\">\r\n        <button type=\"button\" (click)=\"exportPurchaseOrder()\" class=\"btn btn-sm btn-warning\">Export / Import\r\n            Options</button>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n    <div *ngIf=\"poSection && dataReady\" class=\"poSection\">\r\n        <form (ngSubmit)=\"onSubmit()\" #poForm=\"ngForm\">\r\n            <div class=\"d-flex flex-row flex-wrap\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"required\" for=\"poType\">PO Type:</label>\r\n                    <select class=\"form-control\" id=\"poType\" required [(ngModel)]=\"po.POType\" name=\"poType\"\r\n                        (change)=\"onChangePOType($event, $event.target.value)\" [disabled]=\"poSubmitted\"\r\n                        #poType=\"ngModel\">\r\n                        <option *ngFor=\"let potype of poTypes\" [value]=\"potype.POType\">{{potype.POType}}</option>\r\n                    </select>\r\n                    <!-- <input type=\"text\" class=\"form-control\" id=\"poType\" required\r\n                    [(ngModel)]=\"po.POType\" name=\"poType\"                   \r\n                    [disabled]=\"poSubmitted\"\r\n                    #poType=\"ngModel\"> -->\r\n                    <div *ngIf=\"!poSubmitted\" [hidden]=\"poType.valid || poType.pristine\" class=\"alert alert-danger\">\r\n                        PO Type is required\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"required\" for=\"orderDate\">Order Date:</label>\r\n                    <input type=\"date\" class=\"form-control\" id=\"orderDate\" required [(ngModel)]=\"oDate\" name=\"orderDate\"\r\n                        (change)=\"onChangeOrderDate($event)\" [disabled]=\"poSubmitted\" #orderDate=\"ngModel\">\r\n                    <div *ngIf=\"!poSubmitted\" [hidden]=\"orderDate.valid || orderDate.pristine\"\r\n                        class=\"alert alert-danger\">\r\n                        Order Date is required\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"required\" for=\"eVendorName\">Vendor Name:</label>\r\n                    <select class=\"form-control\" id=\"eVendorName\" required [(ngModel)]=\"po.VendorID\" name=\"eVendorName\"\r\n                        (change)=\"onChangeVendor($event, $event.target.value)\" [disabled]=\"poSubmitted\"\r\n                        #eVendorName=\"ngModel\">\r\n                        <option *ngFor=\"let ven of vendors\" [value]=\"ven.ID\">{{ven.VendorName}}</option>\r\n                    </select>\r\n                    <div *ngIf=\"!poSubmitted\" [hidden]=\"eVendorName.valid || eVendorName.pristine\"\r\n                        class=\"alert alert-danger\">\r\n                        Vendor Name is required\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"required\" for=\"brandName\">Brand Name:</label>\r\n                    <select class=\"form-control\" id=\"brandName\" required [(ngModel)]=\"po.BrandID\" name=\"brandName\"\r\n                        (change)=\"onChangeBrand($event, $event.target.value)\" [disabled]=\"poSubmitted\"\r\n                        #brandName=\"ngModel\">\r\n                        <option *ngFor=\"let bd of brands\" [value]=\"bd.ID\">{{bd.BrandName}}</option>\r\n                    </select>\r\n                    <div *ngIf=\"!poSubmitted\" [hidden]=\"brandName.valid || brandName.pristine\"\r\n                        class=\"alert alert-danger\">\r\n                        Brand Name is required\r\n                    </div>\r\n                </div>\r\n                <!-- <div class=\"form-group\">\r\n                    <label class=\"required\" for=\"brandName\">Brand Name:</label>\r\n                    <select class=\"form-control\" id=\"brandName\" required [(ngModel)]=\"po.BrandID\" name=\"brandName\"\r\n                        (change)=\"onChangeBrand($event, $event.target.value)\" [disabled]=\"poSubmitted\"\r\n                        #brandName=\"ngModel\">\r\n                        <option *ngFor=\"let bd of brands\" [value]=\"bd.ID\">{{bd.BrandName}}</option>\r\n                    </select>\r\n                    <div *ngIf=\"!poSubmitted\" [hidden]=\"brandName.valid || brandName.pristine\"\r\n                        class=\"alert alert-danger\">\r\n                        Brand Name is required\r\n                    </div>\r\n                </div> -->\r\n                <div class=\"form-group\">\r\n                    <label class=\"required\" for=\"poNumber\">Purchase Order Number(#):</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"poNumber\" required [(ngModel)]=\"po.PurchaseOrderNumber\"\r\n                        name=\"poNumber\" [disabled]=\"poSubmitted\" #poNumber=\"ngModel\">\r\n                    <div *ngIf=\"!poSubmitted\" [hidden]=\"poNumber.valid || poNumber.pristine\" class=\"alert alert-danger\">\r\n                        PO Number is required\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"d-flex flex-row\">\r\n\r\n                <div class=\"form-group\">\r\n                    <label class=\"required\" for=\"storeNumber\">Store Number:</label>\r\n                    <select class=\"form-control\" id=\"storeNumber\" required [(ngModel)]=\"po.StoreNumber\"\r\n                        name=\"storeNumber\" [disabled]=\"poSubmitted\"\r\n                        (change)=\"onChangeStore($event, $event.target.value)\" #storeNumber=\"ngModel\">\r\n                        <option *ngFor=\"let st of stores\" [value]=\"st.StoreNumber\">{{st.StoreNumber}}</option>\r\n                    </select>\r\n                    <div *ngIf=\"!poSubmitted\" [hidden]=\"storeNumber.valid || storeNumber.pristine\"\r\n                        class=\"alert alert-danger\">\r\n                        Store Number is required\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"required\" for=\"shipDate\">Ship Date:</label>\r\n                    <input type=\"date\" class=\"form-control\" id=\"shipDate\" required [(ngModel)]=\"sDate\" name=\"shipDate\"\r\n                        [disabled]=\"poSubmitted\" (change)=\"onChangeShipDate($event)\" #shipDate=\"ngModel\">\r\n                    <div *ngIf=\"!poSubmitted\" [hidden]=\"shipDate.valid || shipDate.pristine\" class=\"alert alert-danger\">\r\n                        Ship Date is required\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"required\" for=\"cancelDate\">Cancel Date:</label>\r\n                    <input type=\"date\" class=\"form-control\" id=\"cancelDate\" required [(ngModel)]=\"cDate\"\r\n                        name=\"cancelDate\" [disabled]=\"poSubmitted\" (change)=\"onChangeCancelDate($event)\"\r\n                        #cancelDate=\"ngModel\">\r\n                    <div *ngIf=\"!poSubmitted\" [hidden]=\"cancelDate.valid || cancelDate.pristine\"\r\n                        class=\"alert alert-danger\">\r\n                        Cancel Date is required\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"notes\">Notes:</label>\r\n                    <textarea class=\"form-control\" id=\"notes\" [(ngModel)]=\"po.Notes\" name=\"notes\"\r\n                        [disabled]=\"poSubmitted\" #notes=\"ngModel\"></textarea>\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"d-flex flex-row\" style=\"margin-top:-20px;\">\r\n                <div *ngIf=\"poSubmitted\">\r\n                    <button *ngIf=\"poSubmitted\" (click)=\"editPODetails()\" type=\"button\"\r\n                        class=\"btn btn-success btn-sm\">Edit Purchase Order Details</button>\r\n                </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"createMode\" class=\"d-block\">\r\n                <button *ngIf=\"!editPoDetails\" class=\"btn btn-outline-primary btn-sm\" type=\"button\"\r\n                    (click)=\"close()\">Cancel</button>\r\n                <button *ngIf=\"!editPoDetails\" type=\"submit\" class=\"btn btn-success btn-sm\"\r\n                    [disabled]=\"!poForm.form.valid\">Save</button>\r\n            </div>\r\n            <div *ngIf=\"editMode\">\r\n                <button *ngIf=\"editPoDetails\" class=\"btn btn-outline-primary btn-sm\" type=\"button\"\r\n                    (click)=\"cancelEditPODetails()\">Cancel</button>\r\n                <button *ngIf=\"editPoDetails\" type=\"submit\" class=\"btn btn-success btn-sm\"\r\n                    [disabled]=\"!poForm.form.valid\">Update</button>\r\n            </div>\r\n        </form>\r\n        <div *ngIf=\"poSubmitted\" class=\"product-grid\" style=\"margin-top:5px;\">\r\n            <!-- <div *ngIf=\"showPOAlertMsg\" class=\"alert alert-dismissible alert-success fade show poAlertMsg\" role=\"alert\">\r\n                  {{poAlertMsg}}\r\n              </div> -->\r\n            <button *ngIf=\"poSubmitted\" (click)=\"addNewProduct(po)\" class=\"btn btn-primary btn-sm\">Add Product</button>\r\n\r\n            <div class=\"productGridSection\" *ngIf=\"po.products\">\r\n                <div style=\"width: 100%;margin-top:5px;\" class=\"grid-content\">\r\n                    <ag-grid-angular #agGrid style=\"width: 100%;height:100%\" id=\"productGrid\"\r\n                        class=\"ag-theme-material productGrid\" [columnDefs]=\"productColumnDefs\"\r\n                        [gridOptions]=\"productGridOptions\" [singleClickEdit]=\"true\"\r\n                        (gridReady)=\"onProductGridReady($event)\" (gridSizeChanged)=\"onProductGridSizeChanged($event)\"\r\n                        rowHeight='25' headerHeight='25'>\r\n                    </ag-grid-angular>\r\n                </div>\r\n            </div>\r\n            <div class=\"footer\">\r\n                <button class=\"d-inline-block btn btn btn-outline-primary btn-sm\" type=\"button\"\r\n                    (click)=\"close()\">Close</button>\r\n            </div>\r\n            <br>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"productSection\" class=\"productSection\">\r\n        <!-- <form [hidden]=\"productSaved\" (ngSubmit)=\"onSubmitProduct()\" #productForm=\"ngForm\">\r\n            <div class=\"d-flex flex-row\">               \r\n            </div>\r\n        </form> -->\r\n\r\n        <div [hidden]=\"!productSaved\">\r\n\r\n            <div class=\"card border-light mb-3\">\r\n                <div class=\"card-header\">Confirmation</div>\r\n                <div class=\"card-body text-success\">\r\n                    <h4 class=\"card-title\">{{confirmationTitle}}</h4>\r\n                    <br>\r\n                    <p class=\"card-text\">Product Type: <b>{{ product.ProductType }}</b></p>\r\n                    <p class=\"card-text\">Style: <b>{{ product.StyleName }}</b></p>\r\n                    <p class=\"card-text\">Color: <b>{{ product.ColorName }}</b></p>\r\n                    <p class=\"card-text\">Starus Product Type: <b>{{ product.StratusProductType }}</b></p>\r\n                    <p class=\"card-text\">Cost: <b>{{ product.Cost }}</b></p>\r\n                    <p class=\"card-text\">Retail: <b>{{ product.Retail }}</b></p>\r\n                    <br>\r\n                    <br>\r\n                    <button class=\"btn btn-outline-primary\" (click)=\"closeProduct()\">Close</button>\r\n                    <button class=\"btn btn-primary\" (click)=\"cloneProduct(product);\">Clone This\r\n                        Product</button>\r\n                    <button class=\"btn btn-primary\" (click)=\"addNewProduct();\">Add New\r\n                        Product</button>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"productSection\" class=\"productSection\">\r\n        <!-- <input (paste)=\"onPaste($event)\"> -->\r\n\r\n        <form [hidden]=\"productSaved\" (ngSubmit)=\"onSubmitProduct()\" #productForm=\"ngForm\">\r\n            <div class=\"d-flex flex-row\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"required\" for=\"productType\">Product Type:</label>\r\n                    <select class=\"form-control\" id=\"productType\" [(ngModel)]=\"product.ProductTypeID\" name=\"productType\"\r\n                        (change)=\"onChangeProductType($event, $event.target.value)\" #productTypeID=\"ngModel\"\r\n                        [disabled]=\"productSubmitted\">\r\n                        <option *ngFor=\"let pt of productTypes\" [value]=\"pt.ID\">{{pt.ProductType}}</option>\r\n                    </select>\r\n                    <div *ngIf=\"!productSubmitted\" [hidden]=\"productTypeID.valid || productTypeID.pristine\"\r\n                        class=\"alert alert-danger\">\r\n                        Product Type is required\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"required\" for=\"pMfgSku\">MFG SKU:</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"pMfgSku\" required [(ngModel)]=\"product.MfgSku\"\r\n                        name=\"pMfgSku\" [disabled]=\"productSubmitted\" #pMfgSku=\"ngModel\">\r\n                    <div *ngIf=\"!productSubmitted\" [hidden]=\"pMfgSku.valid || pMfgSku.pristine\"\r\n                        class=\"alert alert-danger\">\r\n                        MFG SKU is required\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"required\" for=\"pStyle\">Style Name:</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"pStyle\" required [(ngModel)]=\"product.StyleName\"\r\n                        name=\"pStyle\" [disabled]=\"productSubmitted\" #pStyle=\"ngModel\">\r\n                    <div *ngIf=\"!productSubmitted\" [hidden]=\"pStyle.valid || pStyle.pristine\"\r\n                        class=\"alert alert-danger\">\r\n                        Style Name is required\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"required\" for=\"pStyle\">Color Name:</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"pColorName\" required [(ngModel)]=\"product.ColorName\"\r\n                        name=\"pColorName\" [disabled]=\"productSubmitted\" #pColorName=\"ngModel\">\r\n                    <div *ngIf=\"!productSubmitted\" [hidden]=\"pColorName.valid || pColorName.pristine\"\r\n                        class=\"alert alert-danger\">\r\n                        Style Name is required\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"d-flex flex-row\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"required\" for=\"pCost\">Cost:</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"pCost\" required [(ngModel)]=\"product.Cost\" name=\"pCost\"\r\n                        [disabled]=\"productSubmitted\" (change)=\"onChangeCost($event.target.value)\" #pCost=\"ngModel\">\r\n                    <div *ngIf=\"!productSubmitted\" [hidden]=\"pCost.valid || pCost.pristine\" class=\"alert alert-danger\">\r\n                        Cost is required\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"required\" for=\"pRetail\">Retail:</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"pRetail\" required [(ngModel)]=\"product.Retail\"\r\n                        name=\"pRetail\" [disabled]=\"productSubmitted\" (change)=\"onChangeRetail($event.target.value)\"\r\n                        #pRetail=\"ngModel\">\r\n                    <div *ngIf=\"!productSubmitted\" [hidden]=\"pRetail.valid || pRetail.pristine\"\r\n                        class=\"alert alert-danger\">\r\n                        Retail is required\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"d-flex flex-row\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"required\" for=\"colorGroup\">Color Group:</label>\r\n                    <select class=\"form-control\" id=\"colorGroup\" [(ngModel)]=\"product.ColorGroupID\" name=\"colorGroup\"\r\n                        (change)=\"onChangeColorGroup($event, $event.target.value)\" #colorGroup=\"ngModel\"\r\n                        [disabled]=\"productSubmitted\">\r\n                        <option *ngFor=\"let cg of colorGroupOptions\" [value]=\"cg.ID\">{{cg.ColorGroupName}}</option>\r\n                    </select>\r\n                    <div *ngIf=\"!productSubmitted\" [hidden]=\"colorGroup.valid || colorGroup.pristine\"\r\n                        class=\"alert alert-danger\">\r\n                        Color Group is required\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"required\" for=\"weightLbs\">Weights-Lbs:</label>\r\n                    <select class=\"form-control\" id=\"weightLbs\" [(ngModel)]=\"product.WeightLbs\" name=\"weightLbs\"\r\n                        (change)=\"onChangeWeight($event, $event.target.value)\" #weightLbs=\"ngModel\"\r\n                        [disabled]=\"productSubmitted\">\r\n                        <option *ngFor=\"let wght of weightOptions\" [value]=wght>{{wght}}</option>\r\n                    </select>\r\n                    <div *ngIf=\"!productSubmitted\" [hidden]=\"weightLbs.valid || weightLbs.pristine\"\r\n                        class=\"alert alert-danger\">\r\n                        Weight is required\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"d-flex flex-row\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"required\" for=\"srtOptions\">Stratus Product Type:</label>\r\n                    <select class=\"form-control\" id=\"srtOptions\" [(ngModel)]=\"product.StratusProductTypeID\"\r\n                        name=\"srtOptions\" (change)=\"onChangeStratusType($event, $event.target.value)\"\r\n                        #srtOptions=\"ngModel\" [disabled]=\"productSubmitted\">\r\n                        <option [value]=0>Select One</option>\r\n                        <option *ngFor=\"let spt of stratusProducTypeOptions\" [value]=\"spt.ID\">{{spt.StratusType}}\r\n                        </option>\r\n                    </select>\r\n                    <div *ngIf=\"!productSubmitted\" [hidden]=\"srtOptions.valid || srtOptions.pristine\"\r\n                        class=\"alert alert-danger\">\r\n                        Stratus Product Type is required\r\n                    </div>\r\n                </div>\r\n                <!-- sub type 1 and 2 show based on options available -->\r\n                <div *ngIf=\"showStratusType1Options\" class=\"form-group\">\r\n                    <label class=\"required\" for=\"srtSubType1Options\">Stratus Sub Type 1:</label>\r\n                    <select class=\"form-control\" id=\"srtSubType1Options\" [(ngModel)]=\"product.StratusSubType1ID\"\r\n                        name=\"srtSubType1Options\" (change)=\"onChangeStratusSubType1($event, $event.target.value)\"\r\n                        #srtSubType1Options=\"ngModel\" [disabled]=\"productSubmitted\">\r\n                        <option [value]=0>Select One</option>\r\n                        <option *ngFor=\"let srt1 of stratusSubType1Options\" [value]=\"srt1.ID\">{{srt1.StratusSubType1}}\r\n                        </option>\r\n                    </select>\r\n                    <div *ngIf=\"!productSubmitted\" [hidden]=\"srtSubType1Options.valid || srtSubType1Options.pristine\"\r\n                        class=\"alert alert-danger\">\r\n                        Stratus Sub Type 1 is required\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"showStratusType2Options\" class=\"form-group\">\r\n                    <label class=\"required\" for=\"srtSubType2Options\">Stratus Sub Type 2:</label>\r\n                    <select class=\"form-control\" id=\"srtSubType2Options\" [(ngModel)]=\"product.StratusSubType2ID\"\r\n                        name=\"srtSubType2Options\" (change)=\"onChangeStratusSubType2($event, $event.target.value)\"\r\n                        #srtSubType2Options=\"ngModel\" [disabled]=\"productSubmitted\">\r\n                        <option [value]=0>Select One</option>\r\n                        <option *ngFor=\"let srt2 of stratusSubType2Options\" [value]=\"srt2.ID\">{{srt2.StratusSubType2}}\r\n                        </option>\r\n                    </select>\r\n                    <div *ngIf=\"!productSubmitted\" [hidden]=\"srtSubType2Options.valid || srtSubType2Options.pristine\"\r\n                        class=\"alert alert-danger\">\r\n                        Stratus Sub Type 2 is required\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"d-flex flex-row\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"required\" for=\"sizeRangeType\">Size Range Type:</label>\r\n                    <select class=\"form-control\" id=\"sizeRangeType\" [(ngModel)]=\"product.SizeRangeType\"\r\n                        name=\"sizeRangeType\" (change)=\"onChangeSizeRangeType($event, $event.target.value)\"\r\n                        #sizeRangeType=\"ngModel\" [disabled]=\"productSubmitted\">\r\n                        <option *ngFor=\"let srto of sizeRangeTypeOptions\" [value]=\"srto.SizeRangeType\">\r\n                            {{srto.SizeRangeType}}\r\n                        </option>\r\n                    </select>\r\n                    <div *ngIf=\"!productSubmitted\" [hidden]=\"sizeRangeType.valid || sizeRangeType.pristine\"\r\n                        class=\"alert alert-danger\">\r\n                        Size Range Type is required\r\n                    </div>\r\n                </div>\r\n                <!-- Smallest and Largest Check if needed and then display -->\r\n                <div *ngIf=\"showSmallSizeOptions\" class=\"form-group\">\r\n                    <label class=\"required\" for=\"smallSizeOptions\">Smallest Size Avaiable:</label>\r\n                    <select class=\"form-control\" id=\"smallSizeOptions\" [(ngModel)]=\"product.SmallestAvailableSize\"\r\n                        name=\"smallSizeOptions\" (change)=\"onChangeSmallSizeAvailable($event, $event.target.value)\"\r\n                        #smallSizeOptions=\"ngModel\" [disabled]=\"productSubmitted\">\r\n                        <option *ngFor=\"let sma of smallSizeAvailableOptions\" [value]=\"sma.SmallSize\">{{sma.SmallSize}}\r\n                        </option>\r\n                    </select>\r\n                    <div *ngIf=\"!productSubmitted\" [hidden]=\"smallSizeOptions.valid || smallSizeOptions.pristine\"\r\n                        class=\"alert alert-danger\">\r\n                        Smallest Size required\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"showLargeSizeOptions\" class=\"form-group\">\r\n                    <label class=\"required\" for=\"largeSizeOptions\">Largest Size Avaiable:</label>\r\n                    <select class=\"form-control\" id=\"largeSizeOptions\" [(ngModel)]=\"product.LargestAvailableSize\"\r\n                        name=\"largeSizeOptions\" (change)=\"onChangeLargeSizeAvailable($event, $event.target.value)\"\r\n                        #largeSizeOptions=\"ngModel\" [disabled]=\"productSubmitted\">\r\n                        <option *ngFor=\"let lga of largeSizeAvailableOptions\" [value]=\"lga.LargeSize\">{{lga.LargeSize}}\r\n                        </option>\r\n                    </select>\r\n                    <div *ngIf=\"!productSubmitted\" [hidden]=\"largeSizeOptions.valid || largeSizeOptions.pristine\"\r\n                        class=\"alert alert-danger\">\r\n                        Largest Size required\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"d-flex flex-row\" *ngIf=\"showWidthOptions\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"required\" for=\"pwidthOptions\">Widths?:</label>\r\n                    <select class=\"form-control\" id=\"pwidthOptions\" [(ngModel)]=\"product.pWidth\" name=\"pwidthOptions\"\r\n                        (change)=\"onChangeWidth($event, $event.target.value)\" #pwidthOptions=\"ngModel\"\r\n                        [disabled]=\"productSubmitted\">\r\n                        <option *ngFor=\"let w of widthOptions\" [value]=w>{{w}}</option>\r\n                    </select>\r\n                    <div *ngIf=\"!productSubmitted\" [hidden]=\"pwidthOptions.valid || pwidthOptions.pristine\"\r\n                        class=\"alert alert-danger\">\r\n                        Width is required\r\n                    </div>\r\n                </div>\r\n\r\n                <div *ngIf=\"product.pWidth == 'Yes'\" class=\"form-group\">\r\n                    <!-- Only Show if Widths is Yes -->\r\n                    <label class=\"required\" for=\"widthType\">Width Type:</label>\r\n                    <select class=\"form-control\" id=\"widthType\" [(ngModel)]=\"product.WidthType\" name=\"widthType\"\r\n                        (change)=\"onChangeWidthType($event, $event.target.value)\" #widthType=\"ngModel\"\r\n                        [disabled]=\"productSubmitted\">\r\n                        <option *ngFor=\"let wt of widthTypeOptions\" [value]=\"wt.WidthType\">{{wt.WidthType}}\r\n                        </option>\r\n                    </select>\r\n                    <div *ngIf=\"!productSubmitted\" [hidden]=\"widthType.valid || widthType.pristine\"\r\n                        class=\"alert alert-danger\">\r\n                        Width Type required\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n            <div *ngIf=\"product.pWidth == 'Yes'\" class=\"\">\r\n                <label> Check All Widths Available: </label><span *ngIf=\"showUPCGrid\" class=\"noteMsg\">[Editing the width\r\n                    availability at this time will reset any Size Width Data and UPC Data entered]</span>\r\n                <div class=\"availableWidthsection d-flex flex-row flex-wrap\">\r\n                    <div *ngFor=\"let avw of availableWidthOptions\">\r\n                        <div class=\"form-group-sm margin-5\">\r\n                            <label class=\"form-check-label\">\r\n                                <input style=\"min-width: 20px;\" class=\"form-check-input\" name=\"pAvailableWidth\"\r\n                                    (change)=\"onChangeAvailableWidth($event, $event.target.value)\" type=\"checkbox\"\r\n                                    [checked]=\"avw.isAvailable\" [disabled]=\"productSubmitted\" [value]=\"avw.WidthName\">\r\n                                {{avw.WidthName}}\r\n                            </label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div style=\"width:100%\">\r\n                <div>\r\n                    <label class=\"d-inline-block required\" for=\"swRangeType\">Size/Width Availability:</label> <span\r\n                        *ngIf=\"showUPCGrid\" class=\"noteMsg\">[Editing the size width availability at this time will reset\r\n                        the UPC Data\r\n                        entered]</span>\r\n                    <label style=\"float:right\" class=\"d-inline-block\">Quantity: {{product.Quantity}}</label>\r\n                    <div style=\"width: 100%;\" class=\"-range-grid-content\" (paste)=\"onPaste($event)\">\r\n                        <ag-grid-angular #agGrid style=\"width: 100%;height:335px;border-bottom:3px solid blue\"\r\n                            id=\"rangeGrid\" class=\"ag-theme-blue rangeGrid\" [columnDefs]=\"rangeColumnDefs\"\r\n                            [gridOptions]=\"rangeGridOptions\" [singleClickEdit]=\"true\"\r\n                            (gridReady)=\"onRangeGridReady($event)\" (gridSizeChanged)=\"onRangeGridSizeChanged($event)\"\r\n                            (cellClicked)=\"onRangeCellClick($event)\" (cellEditingStarted)=\"onRangeCellClick($event)\"\r\n                            (cellFocused)=\"onRangeCellClick($event)\"\r\n                            (cellEditingStopped)=\"onRangecellEditingStopped($event)\"\r\n                            [stopEditingWhenGridLosesFocus]=\"true\">\r\n                        </ag-grid-angular>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div style=\"margin-bottom: 20px;\"></div>\r\n            <div *ngIf=\"showUPCButton\" class=\"d-flex flex-row\">\r\n                <button class=\"btn btn-outline-primary btn-sm\" type=\"button\" (click)=\"openUPCGrid()\">Enter\r\n                    UPC</button>\r\n            </div>\r\n            <div *ngIf=\"showUPCGrid\" style=\"width:100%\">\r\n                <div>\r\n                    <label class=\"d-inline-block required\" for=\"upcType\">UPC Details:</label>\r\n                    <!-- <label style=\"float:right\" class=\"d-inline-block\">Quantity: {{product.Quantity}}</label> -->\r\n                    <div style=\"width: 100%;\" class=\"-upc-grid-content\" (paste)=\"onPasteUPC($event)\">\r\n                        <ag-grid-angular #agGrid style=\"width: 100%;height:335px;border-bottom:3px solid blue\"\r\n                            id=\"upcGrid\" class=\"ag-theme-blue upcGrid\" [columnDefs]=\"upcColumnDefs\"\r\n                            [gridOptions]=\"upcGridOptions\" [singleClickEdit]=\"true\" (gridReady)=\"onUPCGridReady($event)\"\r\n                            (gridSizeChanged)=\"onUPCGridSizeChanged($event)\" (cellClicked)=\"onUPCCellClick($event)\"\r\n                            (cellEditingStarted)=\"onUPCCellClick($event)\" (cellFocused)=\"onUPCCellClick($event)\"\r\n                            (cellEditingStopped)=\"onUPCcellEditingStopped($event)\"\r\n                            [stopEditingWhenGridLosesFocus]=\"true\">\r\n                        </ag-grid-angular>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div style=\"margin-bottom: 20px;\"></div>\r\n            <div class=\"d-flex flex-row\">\r\n                <div class=\"form-group form-group2x\">\r\n                    <label for=\"longDescription\">Long Description:</label>\r\n                    <textarea class=\"form-control longDesc\" id=\"longDescription\" rows=\"2\" cols=\"500\"\r\n                        [(ngModel)]=\"product.LongDescription\" name=\"longDescription\" [disabled]=\"productSubmitted\"\r\n                        #notes=\"ngModel\"></textarea>\r\n                </div>\r\n            </div>\r\n            <!-- <label>Bullet Points:</label>\r\n            <div class=\"d-flex flex-row flex-wrap bpFields\">\r\n                <div *ngFor=\"let x of product.BulletPoints; let index = index;\">\r\n                    <div class=\"form-group margin-5\">\r\n                        <label>Bullet Point - {{index + 1}}</label> <input type=\"text\" class=\"form-control\"\r\n                            id=\"bp{{index}}\" name=\"bp{{index}}\" [disabled]=\"productSubmitted\" [(ngModel)]=x.text\r\n                            (change)=\"onChangeBpArray($event.target.value, index)\">\r\n                    </div>\r\n                </div>\r\n            </div> -->\r\n\r\n            <div style=\"width:300px\">\r\n                <label class=\"d-inline-block required\" for=\"upcType\">Bullet Points:</label>\r\n                <!-- <label style=\"float:right\" class=\"d-inline-block\">Quantity: {{product.Quantity}}</label> -->\r\n                <div style=\"width: 300px;\" class=\"-bp-grid-content\" (paste)=\"onPasteBP($event)\">\r\n                    <ag-grid-angular #agGrid style=\"width: 100%;height:250px;border-bottom:3px solid blue\" id=\"bpGrid\"\r\n                        class=\"ag-theme-blue bpGrid\" [columnDefs]=\"bpColumnDefs\" [gridOptions]=\"bpGridOptions\"\r\n                        [singleClickEdit]=\"true\" (gridReady)=\"onBPGridReady($event)\"\r\n                        (gridSizeChanged)=\"onBPGridSizeChanged($event)\" (cellClicked)=\"onBPCellClick($event)\"\r\n                        (cellEditingStarted)=\"onBPCellClick($event)\" (cellFocused)=\"onBPCellClick($event)\"\r\n                        (cellEditingStopped)=\"onBPcellEditingStopped($event)\" [stopEditingWhenGridLosesFocus]=\"true\">\r\n                    </ag-grid-angular>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"d-flex flex-row\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"required\" for=\"pColorExistingOptions\">New Color Of Existing Style?:</label>\r\n                    <select class=\"form-control\" id=\"pColorExistingOptions\"\r\n                        [(ngModel)]=\"product.NewColorOfExistingStyle\" name=\"pColorExistingOptions\"\r\n                        (change)=\"onChangeNCES($event, $event.target.value)\" #pColorExistingOptions=\"ngModel\"\r\n                        [disabled]=\"productSubmitted\">\r\n                        <option *ngFor=\"let clr of colorExistingOptions\" [value]=clr>{{clr}}</option>\r\n                    </select>\r\n                    <div *ngIf=\"!productSubmitted\"\r\n                        [hidden]=\"pColorExistingOptions.valid || pColorExistingOptions.pristine\"\r\n                        class=\"alert alert-danger\">\r\n                        New Color Of Existing Style is required\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"product.NewColorOfExistingStyle == 'No'\">\r\n\r\n                <div class=\"cartCategoryOptions d-flex flex-row flex-wrap\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"required\" for=\"brandCategory\">Brand Category:</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"brandCategory\" required\r\n                            (change)=\"onBrandCategory($event, $event.target.value)\"\r\n                            [(ngModel)]=\"product.TDCartExtra_field_2\" name=\"brandCategory\" [disabled]=\"productSubmitted\"\r\n                            #brandCategory=\"ngModel\">\r\n                        <div *ngIf=\"!productSubmitted\" [hidden]=\"brandCategory.valid || brandCategory.pristine\"\r\n                            class=\"alert alert-danger\">\r\n                            Brand Category is required\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"product.NewColorOfExistingStyle == 'No'\">\r\n                <label> Select 3D Cart Categories </label>\r\n                <div class=\"cartCategoryOptions d-flex flex-row flex-wrap\">\r\n                    <div *ngFor=\"let ctg of availableCategories\">\r\n                        <div class=\"form-group margin-5\">\r\n                            <label class=\"form-check-label\">\r\n                                <input style=\"min-width: 20px;\" class=\"form-check-input\" name=\"p3DCartCategory\"\r\n                                    (change)=\"onChange3DCartCategory($event, $event.target.value)\" type=\"checkbox\"\r\n                                    [checked]=\"ctg.isAvailable\" [disabled]=\"productSubmitted\" [value]=ctg.cartCategory>\r\n                                {{ctg.cartCategory}}\r\n                            </label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- <div class=\"form-group\">\r\n                    <label>Formulated Category:</label>\r\n                    <div>{{product.formulatedCategory}}</div>\r\n                </div> -->\r\n            </div>\r\n            <div *ngIf=\"product.NewColorOfExistingStyle == 'Yes'\">\r\n                <!-- Only Show if Widths is Yes -->\r\n                <div class=\"d-flex flex-row flex-align-start\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"required\" for=\"tdCartCategory\">Brand Category:</label>\r\n                        <select class=\"form-control\" id=\"tdCartCategory\" [(ngModel)]=\"product.formulatedCategory\"\r\n                            name=\"tdCartCategory\" (change)=\"onChangeTDCartCategory($event, $event.target.value)\"\r\n                            #tdCartCategory=\"ngModel\" [disabled]=\"productSubmitted\">\r\n                            <option *ngFor=\"let tdc of tdCartCategoryOptions\" [value]=tdc.categories>\r\n                                {{tdc.extra_field_2}}\r\n                            </option>\r\n                        </select>\r\n                        <div *ngIf=\"!productSubmitted\" [hidden]=\"tdCartCategory.valid || tdCartCategory.pristine\"\r\n                            class=\"alert alert-danger\">\r\n                            Brand Category Type required\r\n                        </div>\r\n                    </div>\r\n                    <!-- <div class=\"form-group\">\r\n                        <label>Formulated Category:</label>\r\n                        <div calss=\"additonalInfoField\">{{product.formulatedCategory}}</div>\r\n                    </div> -->\r\n                </div>\r\n            </div>\r\n            <div class=\"d-flex flex-row\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"required\" for=\"pSale\">Sale?:</label>\r\n                    <select class=\"form-control\" id=\"pSale\" [(ngModel)]=\"product.Sale\" name=\"pSale\"\r\n                        (change)=\"onChangeSale($event, $event.target.value)\" #pSale=\"ngModel\"\r\n                        [disabled]=\"productSubmitted\">\r\n                        <option *ngFor=\"let sl of saleOptions\" [value]=sl>{{sl}}</option>\r\n                    </select>\r\n                    <div *ngIf=\"!productSubmitted\" [hidden]=\"pSale.valid || pSale.pristine\" class=\"alert alert-danger\">\r\n                        Sale is required\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div style=\"margin-bottom: 40px;\"></div>\r\n            <!-- <div style=\"margin-bottom: 20px;\"></div> -->\r\n            <div class=\"footer\">\r\n                <div class=\"d-flex flex-row\">\r\n                    <div *ngIf=\"productSubmitted\">\r\n                        <button *ngIf=\"!editProductDetails\" class=\"btn btn-outline-primary btn-sm\" type=\"button\"\r\n                            (click)=\"closeProduct()\">Close</button>\r\n                        <button *ngIf=\"productSubmitted\" (click)=\"onEditProductDetails()\" type=\"button\"\r\n                            class=\"btn btn-success btn-sm\">Edit Product</button>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"createProductMode\" class=\"d-block\">\r\n                    <button *ngIf=\"!editProductDetails\" class=\"btn btn-outline-primary btn-sm\" type=\"button\"\r\n                        (click)=\"closeProduct()\">Cancel Add</button>\r\n                    <button *ngIf=\"!editProductDetails\" type=\"submit\" class=\"btn btn-success btn-sm\"\r\n                        [disabled]=\"!productForm.form.valid\">Save Product</button>\r\n                </div>\r\n                <div *ngIf=\"editProductMode\">\r\n                    <button *ngIf=\"editProductDetails\" class=\"btn btn-outline-primary btn-sm\" type=\"button\"\r\n                        (click)=\"cancelEditProductDetails()\">Cancel Edit</button>\r\n                    <button *ngIf=\"editProductDetails\" type=\"submit\" class=\"btn btn-success btn-sm\"\r\n                        [disabled]=\"!productForm.form.valid\">Update Product</button>\r\n                </div>\r\n            </div>\r\n\r\n        </form>\r\n    </div>\r\n\r\n\r\n    <div class=\"modal modal-delete fade\" id=\"deleteConfirmationModel\" tabindex=\"-1\" role=\"dialog\"\r\n        aria-labelledby=\"DeleteConfirmation\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <h5 class=\"modal-title\" id=\"exampleModalLabel\">Confirm Delete</h5>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    Are you sure you want to delete the Product?\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" (click)=\"cancelDeleteProduct()\" class=\"btn btn-secondary\"\r\n                        data-dismiss=\"modal\">No</button>\r\n                    <button type=\"button\" (click)=\"confirmDeleteProduct()\" class=\"btn btn-primary\">Yes</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/action-purchase-order/action-purchase-order.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/action-purchase-order/action-purchase-order.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ActionPurchaseOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionPurchaseOrderComponent", function() { return ActionPurchaseOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_purchase_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/purchase-order.service */ "./src/app/services/purchase-order.service.ts");
/* harmony import */ var _helpers_purchase_order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/purchase-order */ "./src/app/helpers/purchase-order.ts");
/* harmony import */ var _helpers_brand__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/brand */ "./src/app/helpers/brand.ts");
/* harmony import */ var _services_brand_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/brand.service */ "./src/app/services/brand.service.ts");
/* harmony import */ var _services_po_type_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/po-type.service */ "./src/app/services/po-type.service.ts");
/* harmony import */ var _services_stores_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/stores.service */ "./src/app/services/stores.service.ts");
/* harmony import */ var _services_size_width_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/size-width.service */ "./src/app/services/size-width.service.ts");
/* harmony import */ var _services_department_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/department.service */ "./src/app/services/department.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _helper_components_product_edit_delete_btn_product_edit_delete_btn_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../helper-components/product-edit-delete-btn/product-edit-delete-btn.component */ "./src/app/helper-components/product-edit-delete-btn/product-edit-delete-btn.component.ts");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! numeral */ "./node_modules/numeral/numeral.js");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_13__);














var ActionPurchaseOrderComponent = /** @class */ (function () {
    function ActionPurchaseOrderComponent(router, route, poService, poTypeService, productService, brandService, storesService, swService, deptService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.poService = poService;
        this.poTypeService = poTypeService;
        this.productService = productService;
        this.brandService = brandService;
        this.storesService = storesService;
        this.swService = swService;
        this.deptService = deptService;
        this.poAlertMsg = 'Message';
        this.showPOAlertMsg = false;
        this.productAlertMsg = 'Message';
        this.showProductAlertMsg = false;
        this.rangeColumnDefs = [];
        this.upcColumnDefs = [];
        this.bpColumnDefs = [];
        this.confirmationTitle = '';
        this.title = '';
        this.dataReady = false;
        this.vendor = new _helpers_brand__WEBPACK_IMPORTED_MODULE_5__["Vendor"]();
        this.widthOptions = ['Yes', 'No'];
        this.colorExistingOptions = ['Yes', 'No'];
        this.saleOptions = ['Yes', 'No'];
        this.showUPCButton = true;
        this.showUPCGrid = false;
        this.bpCount = Array(8).fill(0).map(function (x, i) { return i; }); // bullet Point Counts - 8 Default
        // this.bpArray = [{ text: '' }, { text: '' }, { text: '' }, { text: '' }, { text: '' }, { text: '' }, { text: '' }, { text: '' }];
        this.brandService.getAllVendors().subscribe(function (res) {
            //console.log("response at component is: "+ res);    
            if (res) {
                _this.vendors = res;
                //console.log(this.vendors);
            }
            else {
                //console.log(typeof(res));
                _this.vendors = [];
            }
        });
        this.brandService.getAllBrands().subscribe(function (res) {
            //console.log("response at component is: "+ res);    
            if (res) {
                _this.brands = res;
                //console.log(this.vendors);
            }
            else {
                //console.log(typeof(res));          
                _this.brands = [];
            }
        });
        // this.brandService.getAllVendors().subscribe(
        //   res => {
        //     //console.log("response at component is: "+ res);    
        //     if (res) {
        //       this.brands = res;
        //       //console.log(this.vendors);
        //     }
        //     else {
        //       //console.log(typeof(res));
        //       this.brands = []
        //     }
        //   }
        // );
        this.storesService.getAllStores().subscribe(function (res) {
            //console.log("response at component is: "+ res);    
            if (res) {
                //console.log('array');
                _this.stores = res;
            }
            else {
                //console.log(typeof(res));
                _this.stores = [];
            }
        });
        this.productGridOptions = {
            context: {
                componentParent: this
            },
            enableColResize: true,
            enableSorting: true,
            enableFilter: true,
            pagination: true,
            paginationAutoPageSize: true
        };
        this.productColumnDefs = [
            {
                headerName: "ID",
                field: "ID",
                minWidth: 50,
                maxWidth: 50,
                headerHeight: 75,
            },
            {
                headerName: "Product Type",
                field: "ProductType",
                minWidth: 150,
            },
            {
                headerName: "Style Name",
                field: "StyleName",
                minWidth: 150,
            },
            {
                headerName: "Color Name",
                field: "Color",
                minWidth: 150,
            },
            {
                headerName: "MFG SKU",
                field: "MfgSku",
                minWidth: 150,
            },
            {
                headerName: "Brand Category",
                field: "TDCartExtra_field_2",
                minWidth: 150,
            },
            {
                headerName: "Action",
                cellRendererFramework: _helper_components_product_edit_delete_btn_product_edit_delete_btn_component__WEBPACK_IMPORTED_MODULE_12__["ProductEditDeleteBtnComponent"],
                minWidth: 200,
                maxWidth: 200
            }
        ];
        this.rangeGridOptions = {
            context: {
                componentParent: this
            },
            enableColResize: true,
            headerHeight: 0,
            defaultColDef: {
                width: 150,
            }
        };
        this.upcGridOptions = {
            context: {
                componentParent: this
            },
            enableColResize: true,
            headerHeight: 5,
            defaultColDef: {
                width: 150
            }
        };
        this.bpGridOptions = {
            context: {
                componentParent: this
            },
            enableColResize: true,
            headerHeight: 30,
        };
        /* todo change to use id for viewing PO - may be use ngOnInit to fetch and set class variables - something to think about - as contructor makes sense to initialize variables*/
        var id = this.route.snapshot.params['id'];
        // console.log(id);
        if (id == 'undefined' || id < 1 || id == null) {
            console.log("CREATE");
            this.poTypeService.getAllPOTypes().subscribe(function (res) {
                //console.log("response at component is: "+ res);    
                if (res) {
                    _this.poTypes = res;
                    _this.po.POType = "4";
                    _this.po.POTypeID = 4; /* defualt */
                    _this.po.POTypeName = "Futures"; /* defualt */
                    //console.log(this.vendors);
                }
                else {
                    //console.log(typeof(res));
                    _this.poTypes = [];
                }
            });
            this.poService.isCreate = true;
            this.poSubmitted = false;
            this.editPoDetails = false;
            this.editMode = false;
            this.createMode = true;
            this.po = new _helpers_purchase_order__WEBPACK_IMPORTED_MODULE_4__["PurchaseOrder"]();
            var d = new Date();
            this.oDate = this.formatDate(d);
            // console.log(this.oDate);
            // this.po.OrderDate
            this.sDate = '';
            this.cDate = '';
            this.brands = [];
            this.dataReady = true;
            this.productGridOptions.rowData = [];
            this.title = 'Add New Purchase Order';
            this.showExportOption = false;
        }
        else {
            // console.log(id);
            this.showExportOption = true;
            this.poSubmitted = true;
            this.editPoDetails = false;
            this.editMode = false;
            this.createMode = false;
            this.po = new _helpers_purchase_order__WEBPACK_IMPORTED_MODULE_4__["PurchaseOrder"]();
            this.poService.getPurchaseOrder(id).subscribe(function (res) {
                if (res) {
                    // console.log(res);
                    _this.po = res[0];
                    // console.log(this.po);
                    // var x = "12/31/2017";
                    var dv = _this.po.OrderDate.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
                    _this.po.OrderDate = dv[3] + "-" + dv[1] + "-" + dv[2];
                    // this.poService.selectedPO.OrderDate = obj.OrderDate;
                    dv = _this.po.ShipDate.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
                    _this.po.ShipDate = dv[3] + "-" + dv[1] + "-" + dv[2];
                    dv = _this.po.CancelDate.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
                    _this.po.CancelDate = dv[3] + "-" + dv[1] + "-" + dv[2];
                    _this.po.Notes = _this.po.Notes;
                    // var component = this;
                    _this.oDate = _this.po.OrderDate;
                    _this.sDate = _this.po.ShipDate;
                    _this.cDate = _this.po.CancelDate;
                    // this.productGridOptions.rowData = this.po.products;
                    _this.poTypeService.getAllPOTypes().subscribe(function (res) {
                        //console.log("response at component is: "+ res);    
                        if (res) {
                            _this.poTypes = res;
                            //console.log(this.vendors);
                            _this.dataReady = true;
                        }
                        else {
                            //console.log(typeof(res));
                            _this.poTypes = [];
                        }
                    });
                    _this.title = 'Purchase Order Details - #: ' + _this.po.PurchaseOrderNumber;
                    // this.brandService.getAllBrandsForVID(this.po.VendorID).subscribe(
                    //   res => {
                    //     //console.log("response at component is: "+ res);    
                    //     if (res) {
                    //       this.brands = res;
                    //       this.dataReady = true;
                    //     }
                    //     else {
                    //       //console.log(typeof(res));
                    //       this.brands = []
                    //     }
                    //   }
                    // );
                    _this.poService.getProducts(id).subscribe(function (res) {
                        // console.log("response at component is: " + res);
                        if (res) {
                            //console.log('array');
                            _this.po.products = res;
                            _this.productGridOptions.rowData = res;
                            var component = _this;
                            // setTimeout(function () { component.productGridOptions.rowData = component.po.products; }, 1000);
                        }
                        else {
                            //console.log(typeof(res));
                            _this.po.products = [];
                            _this.productGridOptions.rowData = [];
                        }
                        var component = _this;
                        try {
                            _this.productGridOptions.rowData = _this.po.products;
                            setTimeout(function () {
                                component.productGridOptions.rowData = component.po.products;
                                component.productGridApi.setRowData(component.po.products);
                            }, 100);
                        }
                        catch (e) {
                        }
                    });
                }
                else {
                    console.log("NO PO Found Error");
                }
            });
            // this.po = this.poService.selectedPO;
        }
        this.poSection = true;
        this.productSection = false;
        this.productSubmitted = false;
        this.productSaved = false;
        this.editProductDetails = false;
        this.editProductMode = false;
        this.createProductMode = false;
    }
    ActionPurchaseOrderComponent.prototype.formatDate = function (date) {
        var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('-');
    };
    ActionPurchaseOrderComponent.prototype.trackByIndex = function (index, obj) {
        return index;
    };
    ActionPurchaseOrderComponent.prototype.ngOnInit = function () {
        /* todo change to use id for viewing PO - may be use ngOnInit to fetch and set class variables - something to think about - as contructor makes sense to initialize variables*/
        // let id = this.route.snapshot.params['id'];
        // console.log(id);
    };
    ActionPurchaseOrderComponent.prototype.exportPurchaseOrder = function () {
        if (this.po.ID > 0) {
            //window.open("assets/api/exportPO.php/?poID=" + this.po.ID);
            this.router.navigate(['/exportImportActions/' + this.po.ID]);
        }
    };
    ActionPurchaseOrderComponent.prototype.onSubmit = function () {
        var _this = this;
        //console.log(this.po);
        var dv = this.oDate.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
        this.po.OrderDate = dv[2] + "/" + dv[3] + "/" + dv[1];
        dv = this.sDate.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
        this.po.ShipDate = dv[2] + "/" + dv[3] + "/" + dv[1];
        dv = this.cDate.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
        this.po.CancelDate = dv[2] + "/" + dv[3] + "/" + dv[1];
        if (this.editPoDetails) {
            this.poService.updatePurchaseOrder(this.po).subscribe(function (res) {
                _this.poSubmitted = true;
                _this.editPoDetails = false;
                _this.editMode = false;
                _this.poAlertMsg = "Purcahse Order Updated - [ To add 'Product' to Purchase Order click 'Add Product' ]";
                _this.showPOAlertMsg = true;
                _this.title = 'Purchase Order Details - #: ' + _this.po.PurchaseOrderNumber;
            });
        }
        else {
            this.poService.addPurchaseOrder(this.po).subscribe(function (res) {
                //console.log(res);
                _this.po.ID = res.ID;
                // this.po.DepartmentName = res.DepartmentName;
                // this.po.DepartmentDesc = res.DepartmentDesc;
                _this.poAlertMsg = "Purcahse Order Saved - [ To add 'Product' to Purchase Order click 'Add Product' ]";
                _this.showPOAlertMsg = true;
                _this.title = 'Purchase Order Details - #: ' + _this.po.PurchaseOrderNumber;
                _this.poSubmitted = true;
                _this.editPoDetails = false;
                _this.editMode = false;
                _this.createMode = false;
            });
            this.showExportOption = true;
        }
    };
    ActionPurchaseOrderComponent.prototype.onChangeOrderDate = function (event) {
        // //console.log(event);
        // console.log(this.po.OrderDate);
        // var value = event.target.value;
        // var dateValue = value.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
        // if (dateValue)
        //     console.log(dateValue[2] + "/" + dateValue[3] + "/" + dateValue[1]);
        // this.po.OrderDate = dateValue[2] + "/" + dateValue[3] + "/" + dateValue[1]
    };
    ActionPurchaseOrderComponent.prototype.onChangeShipDate = function (event) {
        // var value = event.target.value;
        // var dateValue = value.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
        // if (dateValue)
        //     console.log(dateValue[2] + "/" + dateValue[3] + "/" + dateValue[1]);
        // this.po.ShipDate = dateValue[2] + "/" + dateValue[3] + "/" + dateValue[1];
    };
    ActionPurchaseOrderComponent.prototype.onChangeCancelDate = function (event) {
        // var value = event.target.value;
        // var dateValue = value.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
        // if (dateValue)
        //     console.log(dateValue[2] + "/" + dateValue[3] + "/" + dateValue[1]);
        // this.po.CancelDate = dateValue[2] + "/" + dateValue[3] + "/" + dateValue[1];
    };
    ActionPurchaseOrderComponent.prototype.onChangePOType = function (params, id) {
        this.po.POTypeID = this.poTypes[params.target.selectedIndex].ID;
        // this.po.POTypeName = this.poTypes[params.target.selectedIndex].POType;
        console.log(this.po.POTypeID + "----" + this.po.POType);
    };
    ActionPurchaseOrderComponent.prototype.onChangeVendor = function (params, id) {
        this.po.VendorID = this.vendors[params.target.selectedIndex].ID;
        this.po.VendorName = this.vendors[params.target.selectedIndex].VendorName;
        // this.po.VendorDescription = this.vendors[params.target.selectedIndex].VendorDescription;
        // console.log(this.brandItem.BrandName);
        // this.po.BrandID = null;
        // this.brands = [];
        // this.brandService.getAllBrandsForVID(id).subscribe(
        //   res => {
        //     //console.log("response at component is: "+ res);    
        //     if (res) {
        //       this.brands = res;
        //       //console.log(this.brands);
        //     }
        //     else {
        //       //console.log(typeof(res));
        //       this.brands = []
        //     }
        //   }
        // );
    };
    ActionPurchaseOrderComponent.prototype.onChangeBrand = function (params, id) {
        this.po.BrandID = this.brands[params.target.selectedIndex].ID;
        this.po.BrandName = this.brands[params.target.selectedIndex].BrandName;
    };
    ActionPurchaseOrderComponent.prototype.onChangeStore = function (params, id) {
        this.po.StoreID = this.stores[params.target.selectedIndex].ID;
        // this.po.StoreName = this.stores[params.target.selectedIndex].StoreName;
        this.po.StoreNumber = this.stores[params.target.selectedIndex].StoreNumber;
    };
    ActionPurchaseOrderComponent.prototype.close = function () {
        this.router.navigate(['/purchaseOrders']);
    };
    ActionPurchaseOrderComponent.prototype.editPODetails = function () {
        this.poSubmitted = false;
        this.editPoDetails = true;
        this.editMode = true;
        this.showPOAlertMsg = false;
        this.title = 'Edit Purchase Order - #: ' + this.po.PurchaseOrderNumber;
    };
    ActionPurchaseOrderComponent.prototype.cancelEditPODetails = function () {
        this.poSubmitted = true;
        this.editPoDetails = false;
        this.editMode = false;
        this.showPOAlertMsg = false;
    };
    /* PRODUCT RELATED METHODS */
    ActionPurchaseOrderComponent.prototype.closeProduct = function () {
        this.title = 'Purchase Order Details - #: ' + this.po.PurchaseOrderNumber;
        this.poSection = true;
        this.productSection = false;
        this.createProductMode = false;
        this.showPOAlertMsg = false;
        this.showProductAlertMsg = false;
        this.product = new _helpers_purchase_order__WEBPACK_IMPORTED_MODULE_4__["Product"](this.po.ID);
    };
    ActionPurchaseOrderComponent.prototype.addNewProduct = function (po) {
        this.title = "Add New Product -  Purchase Order #:" + this.po.PurchaseOrderNumber;
        this.showPOAlertMsg = false;
        // this.showTypeAlertMsg = false;
        this.poSection = false;
        this.productSection = true;
        this.createProductMode = true;
        this.product = new _helpers_purchase_order__WEBPACK_IMPORTED_MODULE_4__["Product"](this.po.ID);
        this.productSubmitted = false;
        this.productSaved = false;
        this.editProductDetails = false;
        this.editProductMode = false;
        this.createProductMode = true;
        this.product = new _helpers_purchase_order__WEBPACK_IMPORTED_MODULE_4__["Product"](this.po.ID);
        this.loadProductDataFields();
    };
    ActionPurchaseOrderComponent.prototype.loadProductDataFields = function () {
        var _this = this;
        this.swReady = false;
        this.deptReady = false;
        this.dtypes = [];
        this.subTypes = [];
        this.productTypes = [];
        this.productTypeID = this.product.ProductTypeID;
        this.showStratusType1Options = false;
        this.showStratusType2Options = false;
        this.swrID = this.product.SizeWidthID;
        this.deptID = this.product.DepartmentID;
        this.dtypeID = this.product.TypeID;
        this.subtypeID = this.product.SubTypeID;
        this.product.NewColorOfExistingStyle = 'No';
        var head = this.swService.toExcelHeaderArray(26);
        this.rangeColumnDefs = [];
        for (var i = 0; i < 27; i++) {
            var obj = { headerName: '', field: '', width: 70, editable: true };
            if (i == 0) {
                obj.width = 100;
            }
            obj.headerName = head[i];
            obj.field = head[i];
            this.rangeColumnDefs.push(obj);
        }
        this.rangeGridOptions.columnDefs = this.rangeColumnDefs;
        this.rangeGridOptions.rowData = this.product.SizeWidthValues;
        this.productService.getAllProductTypes().subscribe(function (res) {
            if (res) {
                _this.productTypes = res;
                console.log(_this.productTypes);
                _this.product.ProductTypeID = _this.productTypes[0].ID;
                _this.product.ProductType = _this.productTypes[0].ProductType;
                _this.product.SizeRangeType = _this.productTypes[0].DefaultSizeRangeType; // defualt initial state is Womens shoes
                // the default should now trigger the change to other dependent fields like Stratus Types and Size Range and its defaults and dependent fields inturn
                _this.SetAllProductTypeDependents();
            }
            else {
                _this.productTypes = [];
            }
        });
        this.productService.getAllColorGroups().subscribe(function (res) {
            if (res) {
                _this.colorGroupOptions = res;
                console.log(_this.colorGroupOptions);
                _this.product.ColorGroupName = "Black";
                _this.product.ColorGroupID = "1"; /* defualt */
            }
            else {
                _this.colorGroupOptions = [];
            }
        });
        this.weightOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // static options 
        this.product.WeightLbs = 2;
        // this.swService.getAllSWRangeForBrand(this.po.BrandID).subscribe(
        //   res => {
        //     if (res) {
        //       this.swRanges = res;
        //       this.swrID = this.swRanges[0].ID;
        //       this.product.SizeWidthValues = JSON.parse(this.swRanges[0].SizeWidth);
        //       this.rangeGridOptions.rowData = this.product.SizeWidthValues;
        //       console.log(this.product.SizeWidthValues);
        //       this.product.SizeWidthID = this.swRanges[0].ID;
        //       this.product.RangeType = this.swRanges[0].RangeType;
        //       this.product.SizeWidthName = this.swRanges[0].SizeWidthName;
        //     }
        //     else {
        //       this.swRanges = []
        //     }
        //     this.swReady = true;
        //   }
        // );
        // this.deptService.getAllDepartments().subscribe(
        //   res => {
        //     if (res) {
        //       this.departments = res;
        //       this.deptReady = true;
        //     }
        //     else {
        //       // this.deptGridOptions.rowData = [];
        //     }
        //   }
        // );
        this.productService.get3DCartCategories().subscribe(function (res) {
            if (res) {
                console.log(res);
                _this.availableCategories = res;
                _this.product.selectedCategories = []; // reset             
            }
            else {
                _this.availableCategories = [];
                _this.product.selectedCategories = []; // reset  
            }
            _this.generateCategory();
        });
        this.bpColumnDefs = [
            {
                headerName: "Enter Bullet Points Below",
                field: "text",
                minWidth: 200,
                maxWidth: 300,
                headerHeight: 75,
                editable: true,
            },
        ];
        this.bpGridOptions.columnDefs = this.bpColumnDefs;
        this.bpGridOptions.rowData = this.product.BulletPoints;
        try {
            this.bpGridApi.setRowData(this.product.BulletPoints);
        }
        catch (e) {
        }
    };
    ActionPurchaseOrderComponent.prototype.SetAllProductTypeDependents = function () {
        var _this = this;
        if (this.product.ProductType === 'Accessories' || this.product.ProductType === "Socks" || this.product.ProductType === "Wellness") {
            this.showWidthOptions = false;
            this.product.pWidth = "No";
        }
        else {
            this.showWidthOptions = true;
        }
        this.productService.getStratusTypesForProduct(this.product.ProductTypeID).subscribe(function (res) {
            if (res) {
                _this.stratusProducTypeOptions = res;
                // console.log(this.stratusProducTypeOptions);
                _this.product.StratusProductTypeID = 0;
            }
            else {
                _this.stratusProducTypeOptions = [];
            }
        });
        this.productService.getSizeRangeTypeForProduct(this.product.ProductTypeID).subscribe(function (res) {
            if (res) {
                _this.sizeRangeTypeOptions = res;
                // set all SizeRangeType Dependents
                // this.product.SizeRangeType = this.productTypes[0].DefaultSizeRangeType;
                console.log(_this.product.SizeRangeType);
                for (var iC = 0; iC < _this.sizeRangeTypeOptions.length; iC++) {
                    if (_this.sizeRangeTypeOptions[iC].SizeRangeType === _this.product.SizeRangeType) {
                        console.log(_this.sizeRangeTypeOptions[iC]);
                        _this.product.SizeRangeTypeID = _this.sizeRangeTypeOptions[iC].ID;
                        _this.product.SmallestAvailableSize = _this.sizeRangeTypeOptions[iC].DefaultSmall;
                        _this.product.LargestAvailableSize = _this.sizeRangeTypeOptions[iC].DefaultLarge;
                    }
                }
                _this.SetAllSizeRangeTypeDependents();
                // console.log(this.sizeRangeTypeOptions);
            }
            else {
                _this.sizeRangeTypeOptions = [];
            }
        });
    };
    ActionPurchaseOrderComponent.prototype.SetAllSizeRangeTypeDependents = function () {
        var _this = this;
        this.showSmallSizeOptions = false;
        this.showLargeSizeOptions = false;
        this.productService.getAllSizesForSizeRange(this.product.SizeRangeTypeID).subscribe(function (res) {
            if (res) {
                _this.allSizeOptions = res;
                // console.log(this.allSizeOptions);
            }
            else {
                _this.allSizeOptions = [];
            }
            _this.productService.getSmallSizeForSizeRange(_this.product.SizeRangeTypeID).subscribe(function (res) {
                if (res) {
                    _this.smallSizeAvailableOptions = res;
                    // console.log(this.smallSizeAvailableOptions);
                    _this.showSmallSizeOptions = true;
                }
                else {
                    _this.smallSizeAvailableOptions = [];
                    _this.showSmallSizeOptions = false;
                }
                _this.productService.getLargeSizeForSizeRange(_this.product.SizeRangeTypeID).subscribe(function (res) {
                    if (res) {
                        _this.largeSizeAvailableOptions = res;
                        // console.log(this.largeSizeAvailableOptions);
                        _this.showLargeSizeOptions = true;
                    }
                    else {
                        _this.largeSizeAvailableOptions = [];
                        _this.showLargeSizeOptions = false;
                    }
                    _this.product.pWidth = 'No';
                    _this.product.selectedAvailableWidths = ['M']; // default
                    _this.updateSizeRangeGrid();
                });
            });
        });
    };
    ActionPurchaseOrderComponent.prototype.updateSizeRangeGrid = function () {
        // build the default grid here 
        this.showUPCGrid = false;
        this.showUPCButton = true;
        this.product.selectedSizes = [];
        var iS = 0;
        // console.log(this.product.SmallestAvailableSize);
        // console.log(this.product.LargestAvailableSize);
        if (this.product.SmallestAvailableSize == null) {
            this.product.SmallestAvailableSize = this.allSizeOptions[0].Size;
        }
        if (this.product.LargestAvailableSize == null) {
            this.product.LargestAvailableSize = this.allSizeOptions[this.allSizeOptions.length - 1].Size;
        }
        for (var iC = 0; iC < this.allSizeOptions.length; iC++) {
            if (this.product.SmallestAvailableSize == this.allSizeOptions[iC].Size) {
                this.product.SmallestAvailableSizeID = parseInt(this.allSizeOptions[iC].ID);
            }
            if (this.product.LargestAvailableSize == this.allSizeOptions[iC].Size) {
                this.product.LargestAvailableSizeID = parseInt(this.allSizeOptions[iC].ID);
            }
        }
        // console.log(this.product.SmallestAvailableSizeID);
        // console.log(this.product.LargestAvailableSizeID);
        if (this.showSmallSizeOptions) {
            if (this.showLargeSizeOptions) { // both true set selected sizes between small and large selected
                for (var iC = 0; iC < this.allSizeOptions.length; iC++) {
                    if (parseInt(this.allSizeOptions[iC].ID) >= this.product.SmallestAvailableSizeID && parseInt(this.allSizeOptions[iC].ID) <= this.product.LargestAvailableSizeID) {
                        this.product.selectedSizes[iS] = this.allSizeOptions[iC].Size;
                        iS++;
                    }
                }
            }
            else { // only small option avaiable to select - set from small selected to max in all-sizes options
                for (var iC = 0; iC < this.allSizeOptions.length; iC++) {
                    if (parseInt(this.allSizeOptions[iC].ID) >= this.product.SmallestAvailableSizeID) {
                        this.product.selectedSizes[iS] = this.allSizeOptions[iC].Size;
                        iS++;
                    }
                }
            }
        }
        else if (this.showLargeSizeOptions) { // set from first available size in all-sizes to large size selected      
            for (var iC = 0; iC < this.allSizeOptions.length; iC++) {
                if (parseInt(this.allSizeOptions[iC].ID) <= this.product.LargestAvailableSizeID) {
                    this.product.selectedSizes[iS] = this.allSizeOptions[iC].Size;
                    iS++;
                }
            }
        }
        else {
            // both not available for eg US CHILD - set all sizes as selected;
            for (var iC = 0; iC < this.allSizeOptions.length; iC++) {
                this.product.selectedSizes[iS] = this.allSizeOptions[iC].Size;
                iS++;
            }
        }
        // console.log("Selected Size =" + this.product.selectedSizes);
        // this.SizeWidth = [];
        var header = this.swService.toExcelHeaderArray(26);
        var iSel = 0;
        this.sizeWidthRangeData = [];
        for (var iRow = 0; iRow < this.product.selectedAvailableWidths.length + 1; iRow++) { // default is M for available widths // first row is only the size values
            var rowObj = header.reduce(function (a, b) { return (a[b] = '', a); }, {});
            iSel = 0;
            for (var iCol = 0; iCol < this.product.selectedSizes.length + 1; iCol++) {
                if (iRow > 0 && iCol == 0) {
                    rowObj[header[iCol]] = this.product.selectedAvailableWidths[iRow - 1];
                }
                if (iCol == 0 && iRow == 0) {
                    rowObj[header[iCol]] = "--";
                }
                else if (iRow == 0) {
                    if (isNaN(this.product.selectedSizes[iSel])) {
                        rowObj[header[iCol]] = this.product.selectedSizes[iSel];
                    }
                    else {
                        var x = this.product.selectedSizes[iSel];
                        rowObj[header[iCol]] = parseFloat(x).toFixed(1);
                    }
                    iSel++;
                }
            }
            this.sizeWidthRangeData.push(rowObj);
            // console.log(rowObj);
        }
        // console.log(this.sizeWidthRangeData);
        this.product.SizeWidthValues = this.sizeWidthRangeData;
        this.rangeGridOptions.rowData = this.product.SizeWidthValues;
        this.rangeGridApi.setRowData(this.product.SizeWidthValues);
    };
    ActionPurchaseOrderComponent.prototype.onChangeProductType = function (params, obj) {
        // console.log("Change Product type");
        this.stratusProducTypeOptions = [];
        this.stratusSubType1Options = [];
        this.stratusSubType2Options = [];
        this.product.StratusProductTypeID = 0;
        this.product.StratusProductType = '';
        this.product.StratusSubType1ID = 0;
        this.product.StratusSubType1 = '';
        this.product.StratusSubType2ID = 0;
        this.product.StratusSubType2 = '';
        this.product.SizeRangeTypeID = 1;
        this.product.SizeRangeType = '';
        this.product.pWidth = 'No';
        // reset all the other dependent and sub-dependent fields
        if (params.target.selectedIndex == -1) { // should never come in here - default is Index 0 - Womens Shoes
            this.product.ProductTypeID = 0;
            this.product.ProductType = '';
        }
        else {
            this.product.ProductTypeID = this.productTypes[params.target.selectedIndex].ID;
            this.product.ProductType = this.productTypes[params.target.selectedIndex].ProductType;
            // console.log(this.productTypes[params.target.selectedIndex].DefaultSizeRangeType);
            this.product.SizeRangeType = this.productTypes[params.target.selectedIndex].DefaultSizeRangeType;
            // set Startus Types
            this.SetAllProductTypeDependents();
            // this.SetWidthDependentFields();
            this.generateCategory();
            // this.productService.getStratusTypesForProduct(this.product.ProductTypeID).subscribe(
            //   res => {
            //     if (res) {
            //       this.stratusProducTypeOptions = res;
            //       console.log(this.stratusProducTypeOptions);
            //     }
            //     else {
            //       this.stratusProducTypeOptions = [];
            //     }
            //   }
            // );
            // this.productService.getSizeRangeTypeForProduct(this.product.ProductTypeID).subscribe(
            //   res => {
            //     if (res) {
            //       this.sizeRangeTypeOptions = res;
            //       console.log(this.sizeRangeTypeOptions);
            //     }
            //     else {
            //       this.sizeRangeTypeOptions = [];
            //     }
            //   }
            // );
        }
    };
    ActionPurchaseOrderComponent.prototype.onChangeColorGroup = function (params, obj) {
        this.product.ColorGroupName = this.colorGroupOptions[params.target.selectedIndex].ColorGroupName;
    };
    ActionPurchaseOrderComponent.prototype.onChangeWeight = function (params, obj) {
    };
    ActionPurchaseOrderComponent.prototype.onChangeStratusType = function (params, obj) {
        var _this = this;
        this.stratusSubType1Options = [];
        this.stratusSubType2Options = [];
        this.product.StratusSubType1ID = 0;
        this.product.StratusSubType1 = '';
        this.product.StratusSubType2ID = 0;
        this.product.StratusSubType2 = '';
        this.showStratusType1Options = false;
        this.showStratusType2Options = false;
        // console.log(params.target.selectedIndex);
        if (params.target.selectedIndex === 0) {
            this.product.StratusProductTypeID = 0;
            this.product.StratusProductType = '';
        }
        else {
            this.product.StratusProductTypeID = this.stratusProducTypeOptions[params.target.selectedIndex - 1].ID;
            this.product.StratusProductType = this.stratusProducTypeOptions[params.target.selectedIndex - 1].StratusType;
            this.productService.getStratusSubType1ForST(this.product.StratusProductTypeID).subscribe(function (res) {
                // console.log("response at component is: " + res);
                if (res) {
                    _this.stratusSubType1Options = res;
                    // console.log(this.stratusSubType1Options);
                    _this.product.StratusSubType1ID = 0; /* defualt - Select One*/
                    _this.showStratusType1Options = true;
                }
                else {
                    _this.stratusSubType1Options = [];
                    _this.showStratusType1Options = false;
                    _this.showStratusType2Options = false;
                }
            });
        }
    };
    ActionPurchaseOrderComponent.prototype.onChangeStratusSubType1 = function (params, obj) {
        var _this = this;
        this.stratusSubType2Options = [];
        this.product.StratusSubType2ID = 0; /* defualt - Select One*/
        this.product.StratusSubType2 = '';
        this.showStratusType2Options = false;
        if (params.target.selectedIndex === 0) {
            this.product.StratusSubType1ID = 0;
            this.product.StratusSubType1 = '';
        }
        else {
            this.product.StratusSubType1ID = this.stratusSubType1Options[params.target.selectedIndex - 1].ID;
            this.product.StratusSubType1 = this.stratusSubType1Options[params.target.selectedIndex - 1].StratusSubType1;
            this.productService.getStratusSubType2ForType1(this.product.StratusSubType1ID).subscribe(function (res) {
                if (res) {
                    _this.stratusSubType2Options = res;
                    // console.log(this.stratusSubType2Options);
                    _this.showStratusType2Options = true;
                }
                else {
                    _this.stratusSubType2Options = [];
                    _this.showStratusType2Options = false;
                }
            });
        }
    };
    ActionPurchaseOrderComponent.prototype.onChangeStratusSubType2 = function (params, obj) {
        if (params.target.selectedIndex == 0) {
            this.product.StratusSubType2ID = 0;
            this.product.StratusSubType2 = '';
        }
        else {
            this.product.StratusSubType2ID = this.stratusSubType2Options[params.target.selectedIndex - 1].ID;
            this.product.StratusSubType2 = this.stratusSubType2Options[params.target.selectedIndex - 1].StratusSubType2;
        }
    };
    ActionPurchaseOrderComponent.prototype.onChangeSizeRangeType = function (params, obj) {
        // if (params.target.selectedIndex == 0) {
        //   this.product.SizeRangeTypeID = 0;
        //   this.product.SizeRangeType = '';
        //   this.smallSizeAvailableOptions = [];
        //   this.largeSizeAvailableOptions = [];
        //   this.product.SmallestAvailableSize = '';
        //   this.product.LargestAvailableSize = '';
        // }
        // else
        {
            this.product.SizeRangeTypeID = this.sizeRangeTypeOptions[params.target.selectedIndex].ID;
            this.product.SizeRangeType = this.sizeRangeTypeOptions[params.target.selectedIndex].SizeRangeType;
            this.product.SmallestAvailableSize = this.sizeRangeTypeOptions[params.target.selectedIndex].DefaultSmall;
            this.product.LargestAvailableSize = this.sizeRangeTypeOptions[params.target.selectedIndex].DefaultLarge;
            this.SetAllSizeRangeTypeDependents();
            // this.productService.getSmallSizeForSizeRange(this.product.SizeRangeTypeID).subscribe(
            //   res => {
            //     if (res) {
            //       this.smallSizeAvailableOptions = res;
            //       console.log(this.smallSizeAvailableOptions);
            //     }
            //     else {
            //       this.smallSizeAvailableOptions = [];
            //     }
            //   }
            // );
            // this.productService.getLargeSizeForSizeRange(this.product.SizeRangeTypeID).subscribe(
            //   res => {
            //     if (res) {
            //       this.largeSizeAvailableOptions = res;
            //       console.log(this.largeSizeAvailableOptions);
            //     }
            //     else {
            //       this.largeSizeAvailableOptions = [];
            //     }
            //   }
            // );
            // this.productService.getAllSizesForSizeRange(this.product.SizeRangeTypeID).subscribe(
            //   res => {
            //     if (res) {
            //       this.allSizeOptions = res;
            //       console.log(this.allSizeOptions);
            //     }
            //     else {
            //       this.allSizeOptions = [];
            //     }
            //   }
            // );
        }
    };
    ActionPurchaseOrderComponent.prototype.onChangeSmallSizeAvailable = function (params, obj) {
        this.updateSizeRangeGrid();
    };
    ActionPurchaseOrderComponent.prototype.onChangeLargeSizeAvailable = function (params, obj) {
        this.updateSizeRangeGrid();
    };
    ActionPurchaseOrderComponent.prototype.onChangeWidth = function (params, obj) {
        var _this = this;
        // console.log(obj);
        // console.log(this.product.pWidth);
        if (obj == 'Yes') {
            this.productService.getWidthTypeOptions().subscribe(function (res) {
                if (res) {
                    _this.widthTypeOptions = res;
                    // console.log(this.widthTypeOptions);
                    _this.product.WidthTypeID = _this.widthTypeOptions[0].ID;
                    _this.product.WidthType = _this.widthTypeOptions[0].WidthType;
                    _this.product.selectedAvailableWidths = []; // reset 
                    _this.SetWidthDependentFields();
                }
                else {
                    _this.widthTypeOptions = [];
                }
            });
        }
        else {
            this.product.selectedAvailableWidths = ['M']; //deffault for No;
            this.SetWidthDependentFields();
        }
    };
    ActionPurchaseOrderComponent.prototype.SetWidthDependentFields = function () {
        var _this = this;
        this.productService.getAvailableWidthsForWidthType(this.product.WidthTypeID).subscribe(function (res) {
            if (res) {
                _this.availableWidthOptions = res;
                // console.log(this.availableWidthOptions);
            }
            else {
                _this.availableWidthOptions = [];
            }
            _this.updateSizeRangeGrid();
        });
    };
    ActionPurchaseOrderComponent.prototype.onChangeWidthType = function (params, obj) {
        this.product.WidthTypeID = this.widthTypeOptions[params.target.selectedIndex].ID;
        this.product.WidthType = this.widthTypeOptions[params.target.selectedIndex].WidthType;
        // console.log(this.product.WidthTypeID);
        this.product.selectedAvailableWidths = [];
        this.SetWidthDependentFields();
    };
    ActionPurchaseOrderComponent.prototype.onChangeAvailableWidth = function (params, obj) {
        // console.log(obj);
        // console.log(params.target.value);
        // console.log(params.target.checked);
        for (var iC = 0; iC < this.availableWidthOptions.length; iC++) {
            if (obj == this.availableWidthOptions[iC].WidthName) {
                if (params.target.checked) {
                    this.availableWidthOptions[iC].isAvailable = true;
                    break;
                }
                else {
                    this.availableWidthOptions[iC].isAvailable = false;
                    break;
                }
            }
        }
        var iS = 0;
        this.product.selectedAvailableWidths = [];
        for (var iC = 0; iC < this.availableWidthOptions.length; iC++) {
            if (this.availableWidthOptions[iC].isAvailable) {
                this.product.selectedAvailableWidths[iS] = this.availableWidthOptions[iC].WidthName;
                iS++;
            }
        }
        this.updateSizeRangeGrid();
    };
    ActionPurchaseOrderComponent.prototype.onChangeNCES = function (params, obj) {
        var _this = this;
        // console.log(obj);
        // console.log(this.product.NewColorOfExistingStyle);
        this.product.TDCartCategory = '';
        this.product.formulatedCategory = '';
        this.product.TDCartExtra_field_2 = '';
        if (obj === 'Yes') {
            this.productService.getCategoriesFrom3DCartInventory(this.po.VendorName).subscribe(function (res) {
                if (res) {
                    console.log(res);
                    _this.tdCartCategoryOptions = res;
                }
                else {
                    _this.tdCartCategoryOptions = [];
                }
            });
        }
        else {
            this.productService.get3DCartCategories().subscribe(function (res) {
                if (res) {
                    // console.log(res);
                    _this.availableCategories = res;
                    _this.product.selectedCategories = []; // reset             
                }
                else {
                    _this.availableCategories = [];
                    _this.product.selectedCategories = []; // reset  
                }
                _this.generateCategory();
            });
        }
    };
    ActionPurchaseOrderComponent.prototype.onChange3DCartCategory = function (params, obj) {
        // console.log(obj);
        // console.log(params.target.value);
        // console.log(params.target.checked);
        for (var iC = 0; iC < this.availableCategories.length; iC++) {
            if (obj == this.availableCategories[iC].cartCategory) {
                if (params.target.checked) {
                    this.availableCategories[iC].isAvailable = true;
                    break;
                }
                else {
                    this.availableCategories[iC].isAvailable = false;
                    break;
                }
            }
        }
        var iS = 0;
        this.product.selectedCategories = [];
        for (var iC = 0; iC < this.availableCategories.length; iC++) {
            if (this.availableCategories[iC].isAvailable) {
                this.product.selectedCategories[iS] = this.availableCategories[iC].cartCategory;
                iS++;
            }
        }
        this.generateCategory();
    };
    ActionPurchaseOrderComponent.prototype.generateCategory = function () {
        var formatedCategory = '';
        var viewAllStr = "View All";
        var delimiter = "@";
        var separator = '/';
        var shoeCategoryStr = "Shoe Categories";
        var brands = 'Brands';
        var latestArrivalStr = "Latest Arrivals";
        formatedCategory = viewAllStr;
        for (var iC = 0; iC < this.product.selectedCategories.length; iC++) {
            var catStr = delimiter + viewAllStr + separator + shoeCategoryStr + separator + this.product.selectedCategories[iC];
            formatedCategory = formatedCategory + catStr;
        }
        var brandName = this.po.BrandName;
        var brandCategory = this.product.TDCartExtra_field_2;
        var brandStr = delimiter + viewAllStr + separator + brands + separator + brandName;
        var brandcatStr = '';
        if (brandCategory != '') {
            brandcatStr = delimiter + viewAllStr + separator + brands + separator + brandName + separator + brandCategory;
        }
        var genderStr = '';
        if (this.product.ProductType === "Womens Shoes") {
            genderStr = delimiter + viewAllStr + "Gender" + separator + "Women's";
        }
        else if (this.product.ProductType === "Mens Shoes") {
            var genderStr = delimiter + viewAllStr + "Gender" + separator + "Men's";
        }
        else if (this.product.ProductType === "Kids Shoes") {
            var genderStr = delimiter + viewAllStr + separator + "Gender" + separator + "Kid's";
        }
        formatedCategory = formatedCategory + brandStr + brandcatStr + genderStr + delimiter + latestArrivalStr;
        console.log(formatedCategory);
        this.product.formulatedCategory = formatedCategory;
    };
    ActionPurchaseOrderComponent.prototype.onChangeTDCartCategory = function (params, obj) {
        // console.log(obj);
        // console.log(params);
        this.product.TDCartExtra_field_2 = this.tdCartCategoryOptions[params.target.selectedIndex].extra_field_2;
        // console.log(this.product.TDCartExtra_field_2);
        var strTemp = obj;
        if (strTemp.includes("@Latest Arrivals")) {
            this.product.formulatedCategory = obj;
        }
        else {
            this.product.formulatedCategory = obj + "@Latest Arrivals";
        }
        this.product.TDCartCategory = obj;
    };
    ActionPurchaseOrderComponent.prototype.onBrandCategory = function (params, obj) {
        this.generateCategory();
    };
    ActionPurchaseOrderComponent.prototype.onChangeSale = function (params, obj) {
        // console.log(obj);
    };
    ActionPurchaseOrderComponent.prototype.openUPCGrid = function () {
        this.showUPCGrid = true;
        var header = this.swService.toExcelHeaderArray(this.product.selectedAvailableWidths.length + 1);
        this.upcColumnDefs = [];
        for (var i = 0; i < this.product.selectedAvailableWidths.length + 1; i++) {
            var obj = { headerName: '', field: '', minWidth: 80, maxWidth: 100, width: 100, editable: true, cellStyle: { 'white-space': 'normal' }, cellClass: 'cell-wrap-text' };
            if (i == 0) {
                obj.width = 80;
                obj.minWidth = 80;
            }
            else {
                obj.maxWidth = 500;
            }
            obj.headerName = header[i];
            obj.field = header[i];
            this.upcColumnDefs.push(obj);
        }
        this.upcGridOptions.columnDefs = this.upcColumnDefs;
        this.upcDefaultColumnDef = {
            flex: 1,
            cellClass: 'cell-wrap-text',
            autoHeight: true,
            sortable: true,
            resizable: true,
        };
        this.upcGridOptions.defaultColDef = this.upcDefaultColumnDef;
        this.upcGridOptions.rowData = [];
        //   this.upcGridApi.setRowData([]);
        this.upcData = [];
        this.showUPCButton = false;
        var iSel = 0;
        var iSaw = 0;
        // console.log(this.product.selectedAvailableWidths);
        // console.log(this.product.selectedAvailableWidths.length);
        // console.log(this.product.SizeWidthValues);
        var sawHeader = this.swService.toExcelHeaderArray(this.product.selectedSizes.length + 1);
        for (var iRow = 0; iRow < this.product.selectedSizes.length + 1; iRow++) {
            var rowObj = header.reduce(function (a, b) { return (a[b] = '', a); }, {});
            iSel = 0;
            for (var iCol = 0; iCol < (this.product.selectedAvailableWidths.length + 1); iCol++) {
                if (iRow > 0 && iCol == 0) {
                    if (isNaN(this.product.selectedSizes[iSel])) {
                        rowObj[header[iCol]] = this.product.selectedSizes[iRow - 1];
                    }
                    else {
                        var x = this.product.selectedSizes[iRow - 1];
                        rowObj[header[iCol]] = parseFloat(x).toFixed(1);
                    }
                }
                else if (iRow > 0 && iCol > 0) {
                    // console.log("Row - " + iRow + " Col - " + iCol);
                    // console.log("Row = " + iRow + "---" + "header[iCol] - " + header[iCol]);
                    // console.log("selctedWith - Row - " + iCol + " Col - " + sawHeader[iSaw]);
                    // console.log(sawHeader[iSaw]);
                    // console.log(this.product.SizeWidthValues[iCol][sawHeader[iSaw]]);
                    var sObj = '';
                    sObj = this.product.SizeWidthValues[iCol][sawHeader[iSaw]];
                    if (sObj == 'X' || sObj == 'x') {
                        rowObj[header[iCol]] = '--';
                    }
                }
                else if (iCol == 0 && iRow == 0) {
                    rowObj[header[iCol]] = "--";
                }
                else if (iRow == 0) {
                    rowObj[header[iCol]] = this.product.selectedAvailableWidths[iSel];
                    iSel++;
                }
            }
            iSaw++;
            this.upcData.push(rowObj);
        }
        // console.log(this.upcData);
        this.product.UPCValues = this.upcData;
        this.upcGridOptions.rowData = this.product.UPCValues;
        try {
            this.upcGridApi.setRowData(this.product.UPCValues);
        }
        catch (e) {
        }
    };
    ActionPurchaseOrderComponent.prototype.onChangeBpArray = function (val, index) {
        console.log(val + "---" + index);
        // this.product.BulletPoints[index].text = val;
        console.log(this.product.BulletPoints);
    };
    ActionPurchaseOrderComponent.prototype.onChangeSWR = function (params, obj) {
        // console.log(params.target.selectedIndex);
        if (params.target.selectedIndex == 0) {
            // this.swRange.SizeWidthName = '';
            this.product.SizeWidthName = '';
            this.product.SizeWidthID = 0;
            this.product.RangeType = '';
            this.product.SizeWidthValues = [];
            // console.log(ar);
            this.rangeGridOptions.rowData = this.product.SizeWidthValues;
            this.rangeGridApi.setRowData(this.product.SizeWidthValues);
            return;
        }
        else {
            // this.swRange.SizeWidthName = this.swRanges[params.target.selectedIndex-1].SizeWidthName;
            this.product.SizeWidthName = this.swRanges[params.target.selectedIndex - 1].SizeWidthName;
            this.product.SizeWidthID = this.swRanges[params.target.selectedIndex - 1].ID;
            this.product.RangeType = this.swRanges[params.target.selectedIndex - 1].RangeType;
            this.product.SizeWidthValues = JSON.parse(this.swRanges[params.target.selectedIndex - 1].SizeWidth);
            // console.log(ar);
            this.rangeGridOptions.rowData = this.product.SizeWidthValues;
            this.rangeGridApi.setRowData(this.product.SizeWidthValues);
        }
    };
    ActionPurchaseOrderComponent.prototype.onChangeDepartment = function (params, id) {
        var _this = this;
        if (params.target.selectedIndex == 0) {
            this.dtypes = [];
            this.subTypes = [];
            this.product.DepartmentID = 0;
            this.product.DepartmentName = '';
            this.product.TypeID = 0;
            this.product.TypeName = '';
            this.product.SubTypeID = 0;
            this.product.SubTypeName = '';
        }
        else {
            this.product.DepartmentID = this.departments[params.target.selectedIndex - 1].ID;
            this.product.DepartmentName = this.departments[params.target.selectedIndex - 1].DepartmentName;
            this.product.TypeID = 0;
            this.product.SubTypeID = 0;
            this.dtypes = [];
            this.subTypes = [];
            this.deptService.getTypes(id).subscribe(function (res) {
                // console.log("response at component is: "+ res);    
                if (res) {
                    _this.dtypes = res;
                }
                else {
                    //console.log(typeof(res));
                    _this.dtypes = [];
                }
            });
        }
    };
    ActionPurchaseOrderComponent.prototype.onChangeDType = function (params, id) {
        var _this = this;
        if (params.target.selectedIndex == 0) {
            // this.dtypes=[];
            this.subTypes = [];
            // this.product.DepartmentID = 0;
            // this.product.DepartmentName ='';
            this.product.TypeID = 0;
            this.product.TypeName = '';
            this.product.SubTypeID = 0;
            this.product.SubTypeName = '';
        }
        else {
            this.product.TypeID = this.dtypes[params.target.selectedIndex - 1].ID;
            this.product.TypeName = this.dtypes[params.target.selectedIndex - 1].TypeName;
            this.product.SubTypeID = 0;
            this.subTypes = [];
            this.deptService.getSubTypes(id).subscribe(function (res) {
                //console.log("response at component is: "+ res);    
                if (res) {
                    _this.subTypes = res;
                }
                else {
                    //console.log(typeof(res));
                    _this.subTypes = [];
                }
            });
        }
    };
    ActionPurchaseOrderComponent.prototype.onChangeSubType = function (params, id) {
        if (params.target.selectedIndex == 0) {
            this.product.SubTypeID = 0;
            this.product.SubTypeName = '';
        }
        else {
            this.product.SubTypeID = this.subTypes[params.target.selectedIndex - 1].ID;
            this.product.SubTypeName = this.subTypes[params.target.selectedIndex - 1].SubTypeName;
        }
    };
    ActionPurchaseOrderComponent.prototype.onChangeCost = function (value) {
        var val = numeral__WEBPACK_IMPORTED_MODULE_13__(value).format('0,0.00');
        this.product.Cost = val;
    };
    ActionPurchaseOrderComponent.prototype.onChangeRetail = function (value) {
        var val = numeral__WEBPACK_IMPORTED_MODULE_13__(value).format('0,0.00');
        this.product.Retail = val;
    };
    ActionPurchaseOrderComponent.prototype.onSubmitProduct = function () {
        var _this = this;
        console.log(this.product);
        this.showProductAlertMsg = true;
        if (this.editProductDetails) {
            this.poService.updateProduct(this.product).subscribe(function (res) {
                _this.productSubmitted = true;
                _this.productSaved = true;
                _this.editProductDetails = false;
                _this.editProductMode = false;
                _this.confirmationTitle = "Product Updated";
                _this.showProductAlertMsg = true;
                //update products grid too.
                _this.loadProductsGrid();
            });
        }
        else {
            this.poService.addProduct(this.product).subscribe(function (res) {
                console.log(res);
                if (res.status == "success") {
                    // this.product.ID = res.ID;
                    _this.confirmationTitle = "Product Saved";
                    _this.showProductAlertMsg = true;
                    // // this.product = new Product(this.po.ID);
                    // // this.po.products.push(res);
                    // // this.productGridOptions.rowData = this.po.products;
                    _this.loadProductsGrid();
                    _this.productSubmitted = true;
                    _this.productSaved = true;
                    _this.editProductDetails = false;
                    _this.editProductMode = false;
                    _this.createProductMode = false;
                }
                else if (res.status == "error") {
                    alert(res.message);
                }
            });
        }
    };
    ActionPurchaseOrderComponent.prototype.loadProductsGrid = function () {
        var _this = this;
        this.poService.getProducts(this.po.ID).subscribe(function (res) {
            //console.log("response at component is: "+ res);    
            if (res) {
                //console.log('array');
                _this.poService.selectedPO.products = res;
                _this.po.products = res;
                _this.productGridOptions.rowData = _this.po.products;
            }
            else {
                //console.log(typeof(res));
                _this.poService.selectedPO.products = [];
                _this.po.products = [];
                _this.productGridOptions.rowData = _this.po.products;
            }
            try {
                _this.productGridApi.setRowData(_this.po.products);
            }
            catch (e) {
            }
        });
    };
    ActionPurchaseOrderComponent.prototype.viewEditProduct = function (prod) {
        var _this = this;
        // this.product = new Product(this.po.ID);
        this.title = "Product Details -  Purchase Order #:" + this.po.PurchaseOrderNumber;
        this.poService.getProduct(prod.ID).subscribe(function (res) {
            //console.log("response at component is: "+ res);    
            if (res) {
                //console.log('array');
                _this.product = res[0];
                _this.productSection = true;
                _this.poSection = false;
                _this.viewProductMode = true;
                _this.productSubmitted = true;
                _this.productSaved = false;
                _this.editProductDetails = false;
                _this.editProductMode = false;
                _this.createProductMode = false;
                _this.showStratusType1Options = false;
                _this.showStratusType2Options = false;
                _this.showUPCGrid = true;
                _this.showUPCButton = false;
                _this.product.selectedSizes = JSON.parse(res[0].selectedSizes);
                _this.product.selectedAvailableWidths = JSON.parse(res[0].selectedAvailableWidths);
                _this.product.SizeWidthValues = JSON.parse(res[0].SizeWidthValues);
                _this.product.selectedCategories = JSON.parse(res[0].selectedCategories);
                _this.product.BulletPoints = JSON.parse(res[0].BulletPoints);
                _this.product.UPCValues = JSON.parse(res[0].UPCValues);
                // console.log(this.product.UPCValues);
                _this.weightOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // static options 
                /* SWR GRID */
                _this.rangeGridOptions = {
                    context: {
                        componentParent: _this
                    },
                    enableColResize: true,
                    headerHeight: 0,
                    defaultColDef: {
                        width: 150,
                    }
                };
                var head = _this.swService.toExcelHeaderArray(26);
                _this.rangeColumnDefs = [];
                for (var i = 0; i < 27; i++) {
                    var obj = { headerName: '', field: '', width: 70, editable: true };
                    if (i == 0) {
                        obj.width = 100;
                    }
                    obj.headerName = head[i];
                    obj.field = head[i];
                    _this.rangeColumnDefs.push(obj);
                }
                _this.rangeGridOptions.columnDefs = _this.rangeColumnDefs;
                // console.log("--------" + this.product.SizeWidthValues); // need to check the below stmt
                _this.rangeGridOptions.rowData = _this.product.SizeWidthValues;
                // this.rangeGridApi.setRowData(this.product.SizeWidthValues);
                try {
                    _this.rangeGridApi.setRowData(_this.product.SizeWidthValues);
                }
                catch (e) {
                }
                /* END SWR GRID */
                /* UPC GRID */
                _this.upcGridOptions = {
                    context: {
                        componentParent: _this
                    },
                    enableColResize: true,
                    headerHeight: 5,
                    defaultColDef: {
                        width: 150
                    }
                };
                var header = _this.swService.toExcelHeaderArray(_this.product.selectedAvailableWidths.length + 1);
                _this.upcColumnDefs = [];
                for (var i = 0; i < _this.product.selectedAvailableWidths.length + 1; i++) {
                    var upcObj = { headerName: '', field: '', minWidth: 80, maxWidth: 100, width: 100, editable: true, cellStyle: { 'white-space': 'normal' }, cellClass: 'cell-wrap-text' };
                    if (i == 0) {
                        upcObj.width = 80;
                        upcObj.minWidth = 80;
                    }
                    else {
                        upcObj.maxWidth = 500;
                    }
                    upcObj.headerName = header[i];
                    upcObj.field = header[i];
                    _this.upcColumnDefs.push(upcObj);
                }
                _this.upcGridOptions.columnDefs = _this.upcColumnDefs;
                _this.upcDefaultColumnDef = {
                    flex: 1,
                    cellClass: 'cell-wrap-text',
                    autoHeight: true,
                    sortable: true,
                    resizable: true,
                };
                _this.upcGridOptions.defaultColDef = _this.upcDefaultColumnDef;
                _this.upcGridOptions.rowData = _this.product.UPCValues;
                try {
                    _this.upcGridApi.setRowData(_this.product.UPCValues);
                }
                catch (e) {
                }
                /* END UPC GRID */
                _this.bpColumnDefs = [
                    {
                        headerName: "Enter Bullet Points Below",
                        field: "text",
                        minWidth: 200,
                        maxWidth: 300,
                        headerHeight: 75,
                        editable: true,
                    },
                ];
                _this.bpGridOptions.columnDefs = _this.bpColumnDefs;
                _this.bpGridOptions.rowData = _this.product.BulletPoints;
                try {
                    _this.bpGridApi.setRowData(_this.product.BulletPoints);
                }
                catch (e) {
                }
                _this.productService.getAllProductTypes().subscribe(function (res) {
                    if (res) {
                        _this.productTypes = res;
                        // this.SetAllProductTypeDependents();
                    }
                    else {
                        _this.productTypes = [];
                    }
                });
                _this.productService.getAllColorGroups().subscribe(function (res) {
                    if (res) {
                        _this.colorGroupOptions = res;
                    }
                    else {
                        _this.colorGroupOptions = [];
                    }
                });
                _this.productService.getStratusTypesForProduct(_this.product.ProductTypeID).subscribe(function (res) {
                    if (res) {
                        _this.stratusProducTypeOptions = res;
                    }
                    else {
                        _this.stratusProducTypeOptions = [];
                    }
                });
                if (_this.product.StratusSubType1ID > 0) {
                    _this.productService.getStratusSubType1ForST(_this.product.StratusProductTypeID).subscribe(function (res) {
                        // console.log("response at component is: " + res);
                        if (res) {
                            _this.stratusSubType1Options = res;
                            // console.log(this.stratusSubType1Options);
                            // this.product.StratusSubType1ID = 0; /* defualt - Select One*/
                            _this.showStratusType1Options = true;
                        }
                        else {
                            _this.stratusSubType1Options = [];
                            _this.showStratusType1Options = false;
                            _this.showStratusType2Options = false;
                        }
                    });
                }
                if (_this.product.StratusSubType2ID > 0) {
                    _this.productService.getStratusSubType2ForType1(_this.product.StratusSubType1ID).subscribe(function (res) {
                        if (res) {
                            _this.stratusSubType2Options = res;
                            // console.log(this.stratusSubType2Options);
                            _this.showStratusType2Options = true;
                        }
                        else {
                            _this.stratusSubType2Options = [];
                            _this.showStratusType2Options = false;
                        }
                    });
                }
                _this.productService.getSizeRangeTypeForProduct(_this.product.ProductTypeID).subscribe(function (res) {
                    if (res) {
                        _this.sizeRangeTypeOptions = res;
                        // this.SetAllSizeRangeTypeDependents();
                        // console.log(this.sizeRangeTypeOptions);
                    }
                    else {
                        _this.sizeRangeTypeOptions = [];
                    }
                });
                _this.showSmallSizeOptions = false;
                _this.showLargeSizeOptions = false;
                _this.productService.getAllSizesForSizeRange(_this.product.SizeRangeTypeID).subscribe(function (res) {
                    if (res) {
                        _this.allSizeOptions = res;
                        // console.log(this.allSizeOptions);
                    }
                    else {
                        _this.allSizeOptions = [];
                    }
                    _this.productService.getSmallSizeForSizeRange(_this.product.SizeRangeTypeID).subscribe(function (res) {
                        if (res) {
                            _this.smallSizeAvailableOptions = res;
                            // console.log(this.smallSizeAvailableOptions);
                            _this.showSmallSizeOptions = true;
                        }
                        else {
                            _this.smallSizeAvailableOptions = [];
                            _this.showSmallSizeOptions = false;
                        }
                        _this.productService.getLargeSizeForSizeRange(_this.product.SizeRangeTypeID).subscribe(function (res) {
                            if (res) {
                                _this.largeSizeAvailableOptions = res;
                                // console.log(this.largeSizeAvailableOptions);
                                _this.showLargeSizeOptions = true;
                            }
                            else {
                                _this.largeSizeAvailableOptions = [];
                                _this.showLargeSizeOptions = false;
                            }
                            // this.product.pWidth = 'No';
                            // this.product.selectedAvailableWidths = ['M']; // default
                            // this.updateSizeRangeGrid();
                        });
                    });
                });
                if (_this.product.ProductType === 'Accessories' || _this.product.ProductType === "Socks" || _this.product.ProductType === "Wellness") {
                    _this.showWidthOptions = false;
                    _this.product.pWidth = "No";
                }
                else {
                    _this.showWidthOptions = true;
                }
                if (_this.product.pWidth === 'Yes') {
                    _this.productService.getWidthTypeOptions().subscribe(function (res) {
                        if (res) {
                            _this.widthTypeOptions = res;
                            // console.log(this.widthTypeOptions);
                        }
                        else {
                            _this.widthTypeOptions = [];
                        }
                    });
                    _this.productService.getAvailableWidthsForWidthType(_this.product.WidthTypeID).subscribe(function (res) {
                        if (res) {
                            _this.availableWidthOptions = res;
                            // console.log(this.availableWidthOptions);
                            var iJ = 0;
                            for (var iC = 0; iC < _this.availableWidthOptions.length; iC++) {
                                if (_this.product.selectedAvailableWidths[iJ] === _this.availableWidthOptions[iC].WidthName) {
                                    _this.availableWidthOptions[iC].isAvailable = true;
                                    iJ++;
                                }
                                else {
                                    _this.availableWidthOptions[iC].isAvailable = false;
                                }
                            }
                        }
                        else {
                            _this.availableWidthOptions = [];
                        }
                    });
                }
                if (_this.product.NewColorOfExistingStyle === 'Yes') {
                    _this.productService.getCategoriesFrom3DCartInventory(_this.po.VendorName).subscribe(function (res) {
                        if (res) {
                            // console.log(res);
                            _this.tdCartCategoryOptions = res;
                        }
                        else {
                            _this.tdCartCategoryOptions = [];
                        }
                    });
                }
                else {
                    _this.productService.get3DCartCategories().subscribe(function (res) {
                        if (res) {
                            // console.log(res);
                            _this.availableCategories = res;
                            var iD = 0;
                            for (var iC = 0; iC < _this.availableCategories.length; iC++) {
                                if (_this.product.selectedCategories[iD] == _this.availableCategories[iC].cartCategory) {
                                    _this.availableCategories[iC].isAvailable = true;
                                    iD++;
                                }
                                else {
                                    _this.availableCategories[iC].isAvailable = false;
                                }
                            }
                        }
                        else {
                            _this.availableCategories = [];
                        }
                        // this.generateCategory();
                    });
                }
            }
            else {
                //error - return back to 
            }
        });
        // this.productSection = true;
        // this.poSection = false;
        // this.viewProductMode = true;
        // // this.swReady = false;
        // // this.deptReady = false;
        // // this.dtypes = [];
        // // this.subTypes = [];
        // // this.swrID = this.product.SizeWidthID;
        // // this.deptID = this.product.DepartmentID;
        // // this.dtypeID = this.product.TypeID;
        // // this.subtypeID = this.product.SubTypeID;
        // this.productSubmitted = true;
        // this.productSaved = false;
        // this.editProductDetails = false;
        // this.editProductMode = false;
        // this.createProductMode = false;    
    };
    ActionPurchaseOrderComponent.prototype.cloneProduct = function (prod) {
        // console.log(prod);
        this.showPOAlertMsg = false;
        // this.showTypeAlertMsg = false;
        this.product.ColorName = '';
        this.product.ColorGroupName = "Black";
        this.product.ColorGroupID = "1"; /* defualt */
        this.product.MfgSku = '';
        this.product.UPCValues = [];
        this.poSection = false;
        this.productSection = true;
        this.createProductMode = true;
        this.productSubmitted = false;
        this.productSaved = false;
        this.editProductDetails = false;
        this.editProductMode = false;
        this.createProductMode = true;
        this.title = "Add New Product -  Purchase Order #:" + this.po.PurchaseOrderNumber;
        this.updateSizeRangeGrid();
        this.showUPCButton = true;
        this.showUPCGrid = false;
    };
    ActionPurchaseOrderComponent.prototype.viewEditProductOld = function (prod) {
        var _this = this;
        this.product = prod;
        this.title = "Product Details -  Purchase Order #:" + this.po.PurchaseOrderNumber;
        this.poService.getProduct(this.product.ID).subscribe(function (res) {
            //console.log("response at component is: "+ res);    
            if (res) {
                //console.log('array');
                _this.product = res[0];
            }
            else {
                //error
            }
        });
        this.productSection = true;
        this.poSection = false;
        this.viewProductMode = true;
        this.swReady = false;
        this.deptReady = false;
        this.dtypes = [];
        this.subTypes = [];
        this.swrID = this.product.SizeWidthID;
        this.deptID = this.product.DepartmentID;
        this.dtypeID = this.product.TypeID;
        this.subtypeID = this.product.SubTypeID;
        this.productSubmitted = true;
        this.productSaved = false;
        this.editProductDetails = false;
        this.editProductMode = false;
        this.createProductMode = false;
        var head = this.swService.toExcelHeaderArray(26);
        this.rangeColumnDefs = [];
        for (var i = 0; i < 27; i++) {
            var obj = { headerName: '', field: '', width: 70, editable: true };
            if (i == 0) {
                obj.width = 100;
            }
            obj.headerName = head[i];
            obj.field = head[i];
            this.rangeColumnDefs.push(obj);
        }
        this.rangeGridOptions.columnDefs = this.rangeColumnDefs;
        // console.log("--------" + this.product.SizeWidthValues); // need to check the below stmt
        this.rangeGridOptions.rowData = []; // this.product.SizeWidthValues;
        this.swService.getAllSWRangeFromProduct(this.product.ID).subscribe(function (res) {
            // console.log(res);
            if (res) {
                _this.swRanges = res;
                _this.swrID = _this.swRanges[0].ID;
                _this.product.SizeWidthValues = JSON.parse(_this.swRanges[0].SizeWidth);
                _this.rangeGridOptions.rowData = _this.product.SizeWidthValues;
                _this.product.SizeWidthID = _this.swRanges[0].ID;
                _this.product.RangeType = _this.swRanges[0].RangeType;
                _this.product.SizeWidthName = _this.swRanges[0].SizeWidthName;
            }
            else {
                _this.swRanges = [];
                //this.rangeGridOptions.rowData =[];
            }
            _this.swReady = true;
            // console.log(this.swReady);
            // this.refreshPageReadData();
            _this.rangeGridApi.setRowData(_this.product.SizeWidthValues);
        });
        this.deptService.getAllDepartments().subscribe(function (res) {
            //console.log("response at component is: "+ res);    
            if (res) {
                //console.log('array');
                _this.departments = res;
                _this.deptReady = true;
            }
            else {
                //console.log(typeof(res));
            }
        });
        if (this.product.DepartmentID > 0) {
            this.deptService.getTypes(this.product.DepartmentID).subscribe(function (res) {
                //console.log("response at component is: "+ res);    
                if (res) {
                    _this.dtypes = res;
                }
                else {
                    //console.log(typeof(res));
                    _this.dtypes = [];
                }
            });
            if (this.product.TypeID > 0) {
                this.deptService.getSubTypes(this.product.TypeID).subscribe(function (res) {
                    //console.log("response at component is: "+ res);    
                    if (res) {
                        _this.subTypes = res;
                    }
                    else {
                        //console.log(typeof(res));
                        _this.subTypes = [];
                    }
                });
            }
        }
    };
    ActionPurchaseOrderComponent.prototype.onEditProductDetails = function () {
        this.title = "Edit Product -  Purchase Order #:" + this.po.PurchaseOrderNumber;
        this.productSubmitted = false;
        this.productSaved = false;
        this.editProductDetails = true;
        this.editProductMode = true;
    };
    ActionPurchaseOrderComponent.prototype.cancelEditProductDetails = function () {
        this.title = "Product Details -  Purchase Order #:" + this.po.PurchaseOrderNumber;
        this.showUPCButton = true;
        this.showUPCGrid = false;
        this.viewEditProduct(this.product);
    };
    ActionPurchaseOrderComponent.prototype.deleteProduct = function (obj) {
        //console.log(obj);
        $('#deleteConfirmationModel').modal('show');
        this.selectedProduct = obj;
    };
    ActionPurchaseOrderComponent.prototype.confirmDeleteProduct = function () {
        var _this = this;
        // this.selectedID = 2;
        $('#deleteConfirmationModel').modal('hide');
        this.poService.deleteProduct(this.selectedProduct).subscribe(function (res) {
            if (res) {
                _this.poService.getProducts(_this.po.ID).subscribe(function (res) {
                    //console.log(res);
                    if (res) {
                        _this.po.products = res;
                        _this.productGridOptions.rowData = res;
                        _this.productGridApi.setRowData(res);
                    }
                    else {
                        _this.po.products = [];
                        _this.productGridOptions.rowData = [];
                        _this.productGridApi.setRowData([]);
                    }
                    // this.storesGridOptions.rowData = res;
                    try {
                        _this.productGridApi.setRowData(_this.po.products);
                    }
                    catch (e) {
                    }
                });
            }
        });
    };
    ActionPurchaseOrderComponent.prototype.cancelDeleteProduct = function () {
        $('#deleteConfirmationModel').modal('hide');
    };
    ActionPurchaseOrderComponent.prototype.onProductGridReady = function (params) {
        this.productGridApi = params.api;
        this.productGridApi.setRowData(this.po.products);
        this.productGridColumnApi = params.columnApi;
        // this.productGridApi.api.redrawRows();
        // this.productGridApi.api.refreshHeader();
    };
    ActionPurchaseOrderComponent.prototype.onProductGridSizeChanged = function (params) {
        var gridWidth = document.getElementById("productGrid").offsetWidth;
        var columnsToShow = [];
        var columnsToHide = [];
        var totalColsWidth = 0;
        var allColumns = params.columnApi.getAllColumns();
        for (var i = 0; i < allColumns.length; i++) {
            var column = allColumns[i];
            totalColsWidth += column.getMinWidth();
            // if (totalColsWidth > gridWidth) {
            //columnsToHide.push(column.colId);
            // } else {
            columnsToShow.push(column.colId);
            //}
        }
        params.columnApi.setColumnsVisible(columnsToShow, true);
        params.columnApi.setColumnsVisible(columnsToHide, false);
        params.api.sizeColumnsToFit();
    };
    ActionPurchaseOrderComponent.prototype.onPaste = function (event) {
        // let pastedText = event.clipboardData.getData('text');
        // let rows = pastedText.split("\n");
        // console.log("pasted text = " + rows[1]);
        // console.log(this.selParams);
        // this.rangeGridApi.stopEditing();
        // var rowNode = this.rangeGridApi.getRowNode(this.selParams.rowIndex);
        // console.log(rowNode);
        // rowNode.setDataValue(this.selParams.colDef.field, rows[0]);
        // let x = parseInt(this.selParams.rowIndex) + 1;
        // rowNode = this.rangeGridApi.getRowNode(x);
        // rowNode.setDataValue(this.selParams.colDef.field, rows[1]);
        // console.log(rowNode);
    };
    ActionPurchaseOrderComponent.prototype.onPasteUPC = function (event) {
        var pastedText = event.clipboardData.getData('text');
        var rows = pastedText.split("\n");
        // console.log("pasted text = " + rows[1]);
        // console.log(this.selParams);
        this.upcGridApi.stopEditing();
        // var rowIndex=this.selParams.rowIndex;
        // var rowNode = this.upcGridApi.getRowNode(this.selParams.rowIndex);
        // console.log(rowNode);
        // rowNode.setDataValue(this.selParams.colDef.field, rows[0]);
        var loopCount = rows.length;
        if (rows.length == 1) {
            loopCount = rows.length;
        }
        else {
            loopCount = rows.length - 1;
        }
        for (var iCount = 0; iCount < loopCount; iCount++) {
            var rowIndex = parseInt(this.selParams.rowIndex) + iCount;
            var rowNode = this.upcGridApi.getRowNode(rowIndex);
            if (rowNode === undefined) {
                break;
            }
            // console.log(rowNode);
            if (rowNode.data[this.selParams.colDef.field] == '--') {
                //skip paste
                break;
            }
            else {
                rowNode.setDataValue(this.selParams.colDef.field, rows[iCount].trim());
            }
        }
        // let x = parseInt(this.selParams.rowIndex) + 1;
        // rowNode = this.upcGridApi.getRowNode(x);
        // console.log(rowNode.data[this.selParams.colDef.field]);
        // if (rowNode.data[this.selParams.colDef.field] == '--') {
        //   //skip paste
        // }
        // else {
        //   rowNode.setDataValue(this.selParams.colDef.field, rows[1]);
        // }
        // console.log(rowNode);
    };
    ActionPurchaseOrderComponent.prototype.onPasteBP = function (event) {
        var pastedText = event.clipboardData.getData('text');
        // console.log("pasted text = " + pastedText);
        var rows = pastedText.split("\n");
        // console.log("pasted text = " + rows[0]);
        // console.log(rows.length);
        // console.log(this.selParams);
        this.bpGridApi.stopEditing();
        var loopCount = rows.length;
        if (rows.length == 1) {
            loopCount = rows.length;
        }
        else {
            loopCount = rows.length - 1;
        }
        for (var iCount = 0; iCount < loopCount; iCount++) {
            var rowIndex = parseInt(this.selParams.rowIndex) + iCount;
            var rowNode = this.bpGridApi.getRowNode(rowIndex);
            if (rowNode === undefined) {
                break;
            }
            // console.log(rowNode);
            {
                rowNode.setDataValue(this.selParams.colDef.field, rows[iCount].trim());
            }
        }
    };
    ActionPurchaseOrderComponent.prototype.onRangecellEditingStopped = function (params) {
        // console.log(" stop - " + this.selectedCellValue);
        if (this.selectedCellValue === params.value) {
            this.selectedCellValue = '';
            return;
        }
        if (this.selectedCellValue === 'X' || this.selectedCellValue === 'x') {
            if (params.value === 'X' || params.value === 'x') {
                // do nothing
            }
            else { // meaning X changes to some value
                this.showUPCGrid = false;
                this.showUPCButton = true;
            }
        }
        else if (params.value === 'X' || params.value === 'x') {
            this.showUPCGrid = false;
            this.showUPCButton = true;
        }
        // console.log(this.product.UPCValues);
        if (this.product.UPCValues.length === 0) {
            this.showUPCGrid = false;
            this.showUPCButton = true;
        }
        this.selectedCellValue = '';
        // console.log(params.value);
        var count = this.rangeGridApi.getDisplayedRowCount();
        //console.log("## printAllDisplayedRows");
        var quantity = 0;
        for (var i = 1; i < count; i++) {
            var rowNode = this.rangeGridApi.getDisplayedRowAtIndex(i);
            // console.log("row " + i + " is " + rowNode.data.A);
            // console.log(rowNode.data);
            var head = this.swService.toExcelHeaderArray(26);
            // this.rangeColumnDefs=[];
            for (var j = 0; j < 27; j++) {
                var x = head[j];
                //console.log(rowNode.data[x]);
                if (rowNode.data[x] != 'X' && rowNode.data[x] != '') {
                    if (isNaN(rowNode.data[x])) {
                    }
                    else {
                        quantity = quantity + parseInt(rowNode.data[x]);
                    }
                }
                // this.rangeColumnDefs.push(obj);
            }
        }
        this.product.Quantity = quantity;
        //console.log(quantity);
    };
    ActionPurchaseOrderComponent.prototype.onRangeCellClick = function (params) {
        // console.log(" click - " + this.selectedCellValue);
        this.rangeGridApi = params.api;
        this.selParams = params; // used for paste function
        // console.log(params);
        this.selectedCellValue = params.value;
        // console.log(" click 2 - " + this.selectedCellValue);
        if (params.rowIndex == 0) {
            this.rangeGridApi.stopEditing();
        }
        if (params.rowIndex > 0 && params.column.colId == 'A') {
            this.rangeGridApi.stopEditing();
        }
        if (params.rowIndex > 0 && this.product.SizeWidthValues[0][params.column.colId] == '') {
            this.rangeGridApi.stopEditing();
        }
        if (params.rowIndex > 1 && this.product.SizeWidthValues[params.rowIndex]['A'] == '') {
            this.rangeGridApi.stopEditing();
        }
        if (this.productSubmitted) {
            this.rangeGridApi.stopEditing();
        }
        // console.log(this.brandItem.SizeWidthAvailable);
    };
    ActionPurchaseOrderComponent.prototype.onRangeGridReady = function (params) {
        this.rangeGridApi = params.api;
        this.rangeGridApi.setRowData(this.product.SizeWidthValues);
        this.rangeGridColumnApi = params.columnApi;
        var col = this.rangeGridColumnApi.getColumn("A");
        var colDef = col.getColDef();
        var component = this;
        colDef.cellClass = function (params) {
            if (params.rowIndex == 0)
                return 'blk-col';
            else
                return "";
        };
        this.rangeGridOptions.api.redrawRows();
        this.rangeGridOptions.api.refreshHeader();
    };
    ActionPurchaseOrderComponent.prototype.onRangeGridSizeChanged = function (params) {
        var gridWidth = document.getElementById("rangeGrid").offsetWidth;
        var columnsToShow = [];
        var columnsToHide = [];
        var totalColsWidth = 0;
        var allColumns = params.columnApi.getAllColumns();
        for (var i = 0; i < allColumns.length; i++) {
            var column = allColumns[i];
            totalColsWidth += column.getMinWidth();
            if (totalColsWidth > gridWidth) {
                columnsToHide.push(column.colId);
            }
            else {
                columnsToShow.push(column.colId);
            }
        }
        params.columnApi.setColumnsVisible(columnsToShow, true);
        params.columnApi.setColumnsVisible(columnsToHide, false);
        params.api.sizeColumnsToFit();
    };
    ActionPurchaseOrderComponent.prototype.onUPCcellEditingStopped = function (params) {
        console.log(params.value);
        if (isNaN(params.value)) {
            params.value = '';
        }
        var count = this.upcGridApi.getDisplayedRowCount();
        //console.log("## printAllDisplayedRows");
        // var quantity = 0;
        // for (var i = 1; i < count; i++) {
        //   var rowNode = this.upcGridApi.getDisplayedRowAtIndex(i);
        //   // console.log("row " + i + " is " + rowNode.data.A);
        //   // console.log(rowNode.data);
        //   var head = this.swService.toExcelHeaderArray(this.availableWidthOptions.length);
        //   // this.rangeColumnDefs=[];
        //   for (var j = 0; j < this.availableWidthOptions.length + 1; j++) {
        //     var x = head[j];
        //     //console.log(rowNode.data[x]);
        //     if (rowNode.data[x] != 'X' && rowNode.data[x] != '') {
        //       if (isNaN(rowNode.data[x])) {
        //       } else {
        //         quantity = quantity + parseInt(rowNode.data[x]);
        //       }
        //     }
        //     // this.rangeColumnDefs.push(obj);
        //   }
        // }
        // this.product.Quantity = quantity;
        //console.log(quantity);
    };
    ActionPurchaseOrderComponent.prototype.onUPCCellClick = function (params) {
        this.upcGridApi = params.api;
        // console.log(params.value);
        if (params.value == '--') {
            this.upcGridApi.stopEditing();
        }
        else {
            this.selParams = params;
        }
        if (params.rowIndex == 0) {
            this.upcGridApi.stopEditing();
        }
        if (params.rowIndex > 0 && params.column.colId == 'A') {
            this.upcGridApi.stopEditing();
        }
        if (params.rowIndex > 0 && this.product.UPCValues[0][params.column.colId] == '') {
            this.upcGridApi.stopEditing();
        }
        if (params.rowIndex > 1 && this.product.UPCValues[params.rowIndex]['A'] == '') {
            this.upcGridApi.stopEditing();
        }
        if (this.productSubmitted) {
            this.upcGridApi.stopEditing();
        }
        // console.log(this.brandItem.SizeWidthAvailable);
    };
    ActionPurchaseOrderComponent.prototype.onUPCGridReady = function (params) {
        this.upcGridApi = params.api;
        this.upcGridApi.setRowData(this.product.UPCValues);
        this.upcGridColumnApi = params.columnApi;
        var col = this.upcGridColumnApi.getColumn("A");
        var colDef = col.getColDef();
        var component = this;
        // console.log(colDef);
        colDef.cellClass = function (params) {
            // console.log(params);
            if (params.rowIndex == 0)
                return 'blk-col';
            else
                return "";
        };
        var header = this.swService.toExcelHeaderArray(this.product.selectedAvailableWidths.length + 1);
        for (var iC = 1; iC < this.product.selectedAvailableWidths.length + 1; iC++) {
            col = this.upcGridColumnApi.getColumn([header[iC]]);
            colDef = col.getColDef();
            // console.log(colDef);
            colDef.cellClass = function (params) {
                // console.log(params);
                if (params.value == '--')
                    return 'gray-col';
                else
                    return "";
            };
        }
        this.upcGridOptions.api.redrawRows();
        this.upcGridOptions.api.refreshHeader();
    };
    ActionPurchaseOrderComponent.prototype.onUPCGridSizeChanged = function (params) {
        var gridWidth = document.getElementById("upcGrid").offsetWidth;
        var columnsToShow = [];
        var columnsToHide = [];
        var totalColsWidth = 0;
        var allColumns = params.columnApi.getAllColumns();
        for (var i = 0; i < allColumns.length; i++) {
            var column = allColumns[i];
            totalColsWidth += column.getMinWidth();
            if (totalColsWidth > gridWidth) {
                columnsToHide.push(column.colId);
            }
            else {
                columnsToShow.push(column.colId);
            }
        }
        params.columnApi.setColumnsVisible(columnsToShow, true);
        params.columnApi.setColumnsVisible(columnsToHide, false);
        params.api.sizeColumnsToFit();
    };
    ActionPurchaseOrderComponent.prototype.onBPcellEditingStopped = function (params) {
        // console.log(params.value);
        if (isNaN(params.value)) {
            params.value = '';
        }
        var count = this.bpGridApi.getDisplayedRowCount();
    };
    ActionPurchaseOrderComponent.prototype.onBPCellClick = function (params) {
        this.bpGridApi = params.api;
        this.selParams = params;
        if (this.productSubmitted) {
            this.bpGridApi.stopEditing();
            // console.log("stop editing");
        }
    };
    ActionPurchaseOrderComponent.prototype.onBPGridReady = function (params) {
        this.bpGridApi = params.api;
        this.bpGridApi.setRowData(this.product.BulletPoints);
        this.bpGridColumnApi = params.columnApi;
        this.bpGridOptions.api.redrawRows();
        this.bpGridOptions.api.refreshHeader();
    };
    ActionPurchaseOrderComponent.prototype.onBPGridSizeChanged = function (params) {
        var gridWidth = document.getElementById("bpGrid").offsetWidth;
        var columnsToShow = [];
        var columnsToHide = [];
        var totalColsWidth = 0;
        var allColumns = params.columnApi.getAllColumns();
        for (var i = 0; i < allColumns.length; i++) {
            var column = allColumns[i];
            totalColsWidth += column.getMinWidth();
            if (totalColsWidth > gridWidth) {
                columnsToHide.push(column.colId);
            }
            else {
                columnsToShow.push(column.colId);
            }
        }
        params.columnApi.setColumnsVisible(columnsToShow, true);
        params.columnApi.setColumnsVisible(columnsToHide, false);
        params.api.sizeColumnsToFit();
    };
    ActionPurchaseOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-action-purchase-order',
            template: __webpack_require__(/*! ./action-purchase-order.component.html */ "./src/app/components/action-purchase-order/action-purchase-order.component.html"),
            styles: [__webpack_require__(/*! ./action-purchase-order.component.css */ "./src/app/components/action-purchase-order/action-purchase-order.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_purchase_order_service__WEBPACK_IMPORTED_MODULE_3__["PurchaseOrderService"], _services_po_type_service__WEBPACK_IMPORTED_MODULE_7__["PoTypeService"], _services_product_service__WEBPACK_IMPORTED_MODULE_11__["ProductService"],
            _services_brand_service__WEBPACK_IMPORTED_MODULE_6__["BrandService"], _services_stores_service__WEBPACK_IMPORTED_MODULE_8__["StoresService"],
            _services_size_width_service__WEBPACK_IMPORTED_MODULE_9__["SizeWidthService"], _services_department_service__WEBPACK_IMPORTED_MODULE_10__["DepartmentService"]])
    ], ActionPurchaseOrderComponent);
    return ActionPurchaseOrderComponent;
}());



/***/ }),

/***/ "./src/app/components/brand/brand.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/brand/brand.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYnJhbmQvYnJhbmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/brand/brand.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/brand/brand.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-bar\">\r\n    <button type=\"button\" (click)=\"addNewBrand()\" class=\"btn btn-dark\">Add New Brand</button>\r\n</div>\r\n<div class=\"title-bar\">All Brands</div>\r\n\r\n<div *ngIf =\"isActive\" style=\"width: 100%;\" class=\"grid-content\">\r\n        <ag-grid-angular #agGrid style=\"width: 100%;height:100%\" id=\"brandGrid\"\r\n                    class=\"ag-theme-material brandGrid\"                     \r\n                    [columnDefs]=\"columnDefs\"\r\n                    [gridOptions]=\"brandGridOptions\"\r\n                    [singleClickEdit]=\"true\"\r\n                    (gridReady)=\"onGridReady($event)\"\r\n                    (gridSizeChanged)=\"onGridSizeChanged($event)\"\r\n                    rowHeight='25'\r\n                    \r\n                    >\r\n        </ag-grid-angular>\r\n</div>\r\n\r\n<div class=\"modal modal-delete fade\" id=\"deleteConfirmationModel\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"DeleteConfirmation\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n            <h5 class=\"modal-title\" id=\"exampleModalLabel\">Confirm Delete</h5>                                    \r\n        </div>\r\n        <div class=\"modal-body\">\r\n            Are you sure you want to delete the Brand {{selectedBrand.BrandName}}?\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" (click)=\"cancelDeleteBrand()\" class=\"btn btn-secondary\" data-dismiss=\"modal\">No</button>\r\n            <button type=\"button\" (click)=\"confirmDeleteBrand()\" class=\"btn btn-primary\">Yes</button>\r\n        </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/brand/brand.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/brand/brand.component.ts ***!
  \*****************************************************/
/*! exports provided: BrandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandComponent", function() { return BrandComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helper_components_brand_edit_delete_btn_brand_edit_delete_btn_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helper-components/brand-edit-delete-btn/brand-edit-delete-btn.component */ "./src/app/helper-components/brand-edit-delete-btn/brand-edit-delete-btn.component.ts");
/* harmony import */ var _helpers_brand__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/brand */ "./src/app/helpers/brand.ts");
/* harmony import */ var _services_brand_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/brand.service */ "./src/app/services/brand.service.ts");





// import {SwRange} from '../../helpers/sw-range';

var BrandComponent = /** @class */ (function () {
    // public swRange: SwRange[];
    // public vendors: Vendor[];
    function BrandComponent(router, brandService) {
        this.router = router;
        this.brandService = brandService;
        this.isActive = false;
        this.selectedBrand = new _helpers_brand__WEBPACK_IMPORTED_MODULE_4__["Brand"]();
        // this.swRange = new SwRange();
        this.brandGridOptions = {
            context: {
                componentParent: this
            },
            enableColResize: true,
            enableSorting: true,
            enableFilter: true,
            pagination: true,
            paginationAutoPageSize: true
        };
        this.columnDefs = [
            {
                headerName: "ID",
                field: "ID",
                minWidth: 100,
                maxWidth: 100
            },
            {
                headerName: "Brand Name",
                field: "BrandName",
                minWidth: 150,
            },
            {
                headerName: "Vendor Name",
                field: "VendorName",
                minWidth: 150,
            },
            // {
            //   headerName: "Size-Width Name",
            //   field: "SizeWidthName",
            //   minWidth: 150,
            // },
            {
                headerName: "Action",
                cellRendererFramework: _helper_components_brand_edit_delete_btn_brand_edit_delete_btn_component__WEBPACK_IMPORTED_MODULE_3__["BrandEditDeleteBtnComponent"],
                maxWidth: 250
            }
        ];
    }
    BrandComponent.prototype.ngOnInit = function () {
        this.loadBrands();
    };
    BrandComponent.prototype.loadBrands = function () {
        var _this = this;
        this.brandService.getAllBrands().subscribe(function (res) {
            //console.log("response at component is: "+ res);    
            if (res) {
                //console.log('array returned');
                _this.brandGridOptions.rowData = res;
            }
            else {
                //console.log(typeof(res));
                _this.brandGridOptions.rowData = [];
            }
            // this.swRangeGridOptions.rowData = res;
            _this.isActive = true;
        });
    };
    BrandComponent.prototype.addNewBrand = function () {
        // this.brandService.isEditBrand = false;
        // this.brandService.isCreateBrand = true;
        // this.brandService.isViewBrand=false;
        this.router.navigate(['/actionBrand', 'create']);
    };
    BrandComponent.prototype.viewBrand = function (obj) {
        // console.log(obj);
        // this.brandService.selectedBrand = obj;
        // this.brandService.isEditBrand = false;
        // this.brandService.isCreateBrand = false;
        // this.brandService.isViewBrand=true;
        this.router.navigate(['/actionBrand', 'view', obj.ID]);
    };
    BrandComponent.prototype.editBrand = function (obj) {
        // console.log(obj);
        // this.brandService.selectedBrand = obj;
        // this.brandService.isEditBrand = true;
        // this.brandService.isCreateBrand= false;
        // this.brandService.isViewBrand=false;
        this.router.navigate(['/actionBrand', 'edit', obj.ID]);
    };
    BrandComponent.prototype.deleteBrand = function (obj) {
        //console.log("here-2");
        //console.log(obj);
        this.selectedBrand = obj;
        $('#deleteConfirmationModel').modal('show');
    };
    BrandComponent.prototype.confirmDeleteBrand = function () {
        var _this = this;
        // this.selectedID = 2;
        $('#deleteConfirmationModel').modal('hide');
        this.brandService.deleteBrand(this.selectedBrand).subscribe(function (res) {
            if (res) {
                _this.brandService.getAllBrands().subscribe(function (res) {
                    //console.log(res);
                    if (res) {
                        _this.brandGridApi.setRowData(res);
                    }
                    else {
                        _this.brandGridApi.setRowData([]);
                    }
                    // this.storesGridOptions.rowData = res;
                });
            }
        });
    };
    BrandComponent.prototype.cancelDeleteBrand = function () {
        $('#deleteConfirmationModel').modal('hide');
    };
    BrandComponent.prototype.onGridReady = function (params) {
        this.brandGridApi = params.api;
        this.brandGridColumnApi = params.columnApi;
    };
    BrandComponent.prototype.onGridSizeChanged = function (params) {
        var gridWidth = document.getElementById("brandGrid").offsetWidth;
        var columnsToShow = [];
        var columnsToHide = [];
        var totalColsWidth = 0;
        var allColumns = params.columnApi.getAllColumns();
        for (var i = 0; i < allColumns.length; i++) {
            var column = allColumns[i];
            totalColsWidth += column.getMinWidth();
            if (totalColsWidth > gridWidth) {
                columnsToHide.push(column.colId);
            }
            else {
                columnsToShow.push(column.colId);
            }
        }
        params.columnApi.setColumnsVisible(columnsToShow, true);
        params.columnApi.setColumnsVisible(columnsToHide, false);
        params.api.sizeColumnsToFit();
    };
    BrandComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-brand',
            template: __webpack_require__(/*! ./brand.component.html */ "./src/app/components/brand/brand.component.html"),
            styles: [__webpack_require__(/*! ./brand.component.css */ "./src/app/components/brand/brand.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_brand_service__WEBPACK_IMPORTED_MODULE_5__["BrandService"]])
    ], BrandComponent);
    return BrandComponent;
}());



/***/ }),

/***/ "./src/app/components/create-store/create-store.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/create-store/create-store.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3JlYXRlLXN0b3JlL2NyZWF0ZS1zdG9yZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/create-store/create-store.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/create-store/create-store.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-bar\">\r\n<div class=\"title-bar\">Add New Store</div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n  <div [hidden]=\"submitted\">\r\n    <form (ngSubmit)=\"onSubmit()\" #storeForm=\"ngForm\">\r\n      <div class=\"form-group\">\r\n        <label class=\"required\" for=\"storeName\">Store Name:</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"storeName\" required\r\n        [(ngModel)]=\"store.StoreName\" name=\"storeName\"\r\n        #storeName=\"ngModel\">\r\n        <div [hidden]=\"storeName.valid || storeName.pristine\"\r\n          class=\"alert alert-danger\">\r\n          Store Name is required\r\n        </div>\r\n      </div>\r\n \r\n      <div class=\"form-group\">\r\n        <label class=\"required\" for=\"storeNumber\">Store Number:</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"storeNumber\" required\r\n        [(ngModel)]=\"store.StoreNumber\" name=\"storeNumber\"\r\n        #storeNumber=\"ngModel\">\r\n        <div [hidden]=\"storeNumber.valid || storeNumber.pristine\"\r\n          class=\"alert alert-danger\">\r\n          Store Number is required\r\n        </div>\r\n      </div>\r\n      <br>\r\n      <button class=\"btn btn-outline-primary\" type=\"button\" (click)=\"close()\">Cancel</button>\r\n      <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!storeForm.form.valid\">Save</button>\r\n \r\n    </form>\r\n  </div>\r\n  <div [hidden]=\"!submitted\">\r\n\r\n      <div class=\"card border-success mb-3\" style=\"\">\r\n          <div class=\"card-header\">Confirmation</div>\r\n          <div class=\"card-body text-success\">\r\n            <h4 class=\"card-title\">Store Saved</h4>\r\n            <br>\r\n            <p class=\"card-text\">Store Name: <b>{{ store.StoreName }}</b></p>\r\n            <p class=\"card-text\">Store Number: <b>{{ store.StoreNumber }}</b></p>\r\n            <br>\r\n            <br>\r\n            <button class=\"btn btn-outline-primary\" (click)=\"close()\">Close</button>\r\n            <button class=\"btn btn-primary\" (click)=\"newStore(); storeForm.reset()\">Add Another Store</button>\r\n          </div>\r\n      </div>\r\n\r\n      <!-- <h2>Store Saved</h2>\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-3\">Store Name: </div>\r\n        <div class=\"col-xs-9  pull-left\">{{ store.StoreName }}</div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-3\">Store Number: </div>\r\n        <div class=\"col-xs-9 pull-left\">{{ store.StoreNumber }}</div>\r\n      </div>\r\n      <br>\r\n      <button class=\"btn btn-primary\" (click)=\"close()\">Close</button>\r\n      <button class=\"btn btn-primary\" (click)=\"newStore(); storeForm.reset()\">Add Another Store</button> -->\r\n  </div>\r\n  \r\n</div>"

/***/ }),

/***/ "./src/app/components/create-store/create-store.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/create-store/create-store.component.ts ***!
  \*******************************************************************/
/*! exports provided: CreateStoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateStoreComponent", function() { return CreateStoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/store */ "./src/app/helpers/store.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_stores_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/stores.service */ "./src/app/services/stores.service.ts");





var CreateStoreComponent = /** @class */ (function () {
    function CreateStoreComponent(router, storeService) {
        this.router = router;
        this.storeService = storeService;
        this.store = new _helpers_store__WEBPACK_IMPORTED_MODULE_2__["Store"]();
        this.submitted = false;
    }
    CreateStoreComponent.prototype.onSubmit = function () {
        var _this = this;
        this.storeService.addStore(this.store).subscribe(function (res) {
            _this.submitted = true;
        });
    };
    CreateStoreComponent.prototype.ngOnInit = function () {
    };
    CreateStoreComponent.prototype.newStore = function () {
        this.store = new _helpers_store__WEBPACK_IMPORTED_MODULE_2__["Store"]();
        this.submitted = false;
    };
    CreateStoreComponent.prototype.close = function () {
        this.router.navigate(['/stores']);
    };
    CreateStoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-store',
            template: __webpack_require__(/*! ./create-store.component.html */ "./src/app/components/create-store/create-store.component.html"),
            styles: [__webpack_require__(/*! ./create-store.component.css */ "./src/app/components/create-store/create-store.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_stores_service__WEBPACK_IMPORTED_MODULE_4__["StoresService"]])
    ], CreateStoreComponent);
    return CreateStoreComponent;
}());



/***/ }),

/***/ "./src/app/components/create-sw-range/create-sw-range.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/create-sw-range/create-sw-range.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".rangeGrid {\r\n    font-size:16px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmVhdGUtc3ctcmFuZ2UvY3JlYXRlLXN3LXJhbmdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jcmVhdGUtc3ctcmFuZ2UvY3JlYXRlLXN3LXJhbmdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmFuZ2VHcmlkIHtcclxuICAgIGZvbnQtc2l6ZToxNnB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/create-sw-range/create-sw-range.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/create-sw-range/create-sw-range.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-bar\">\r\n    <div *ngIf=\"swRangeService.isCreateSWRange\" class=\"title-bar\">Add New Size-Width Range</div>\r\n    <div *ngIf=\"swRangeService.isEditSWRange\" class=\"title-bar\">Edit Size-Width Range</div>\r\n    <div *ngIf=\"swRangeService.isViewSWRange\" class=\"title-bar\">Size-Width Range Detail</div>\r\n</div>\r\n<div class=\"container\">\r\n  <div [hidden]=\"submitted\">\r\n\r\n    <form (ngSubmit)=\"onSubmit()\" #swRangeForm=\"ngForm\">\r\n        <div class=\"form-group\">\r\n            <label class=\"required\" for=\"swName\">Size-Width Name:</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"swName\" required\r\n            [(ngModel)]=\"swRange.SizeWidthName\" name=\"swName\"\r\n            #swName=\"ngModel\"\r\n            [disabled]=\"swRangeService.isViewSWRange\">\r\n            <div [hidden]=\"swName.valid || swName.pristine\"\r\n              class=\"alert alert-danger\">\r\n              Size-Width Name is required\r\n            </div>\r\n        </div>\r\n        \r\n        <div class=\"form-group\">\r\n            <label class=\"required\" for=\"swRangeType\">Range Type:</label>\r\n            <select class=\"form-control\" id=\"swRangeType\"\r\n                    required\r\n                    [(ngModel)]=\"swRange.RangeType\" name=\"swRangeType\"\r\n                    #swRangeType=\"ngModel\"\r\n                    [disabled]=\"swRangeService.isViewSWRange\">\r\n              <option *ngFor=\"let type of rangeTypes\" [value]=\"type\">{{type}}</option>\r\n            </select>\r\n            <div [hidden]=\"swRangeType.valid || swRangeType.pristine\" class=\"alert alert-danger\">\r\n              Range Type is required\r\n            </div>\r\n        </div>\r\n        <label class=\"required\" for=\"swRangeType\">Size/Width Range:</label>\r\n        <div *ngIf =\"isActive\" style=\"width: 100%;\" class=\"-range-grid-content\">\r\n            <ag-grid-angular #agGrid style=\"width: 100%;height:158px;border-bottom:3px solid blue\" id=\"rangeGrid\"\r\n                        class=\"ag-theme-blue rangeGrid\"                     \r\n                        [columnDefs]=\"columnDefs\"\r\n                        [gridOptions]=\"rangeGridOptions\"\r\n                        [singleClickEdit]=\"true\"\r\n                        (gridReady)=\"onGridReady($event)\"\r\n                        (gridSizeChanged)=\"onGridSizeChanged($event)\"\r\n                        (cellClicked)=\"onCellClick($event)\"\r\n                        (cellEditingStarted)=\"onCellClick($event)\"\r\n                        (cellFocused)=\"onCellClick($event)\"\r\n                        [rowData] = swRange.SizeWidth\r\n                        [singleClickEdit]=true\r\n                        [stopEditingWhenGridLosesFocus]=\"true\"\r\n\r\n                        >\r\n            </ag-grid-angular>\r\n        </div>\r\n        <br>\r\n        <br>\r\n      <button *ngIf=\"swRangeService.isEditSWRange || swRangeService.isViewSWRange\" class=\"btn btn-outline-primary\" type=\"button\" (click)=\"close()\">Back to List</button>\r\n      <button *ngIf=\"swRangeService.isCreateSWRange\" class=\"btn btn-outline-primary\" type=\"button\" (click)=\"close()\">Cancel</button>\r\n      <button *ngIf=\"isInlineEditSWRange\" class=\"btn btn-outline-primary\" type=\"button\" (click)=\"cancelEdit()\">Cancel</button>\r\n      <button *ngIf=\"swRangeService.isCreateSWRange\" type=\"submit\" class=\"btn btn-success\" [disabled]=\"!swRangeForm.form.valid\">Save</button>\r\n      <button *ngIf=\"swRangeService.isEditSWRange\" type=\"submit\" class=\"btn btn-success\" [disabled]=\"!swRangeForm.form.valid\">Update</button>\r\n      <button *ngIf=\"swRangeService.isViewSWRange\" type=\"submit\" class=\"btn btn-success\">Edit</button>\r\n      \r\n    </form>\r\n  </div>\r\n  <div [hidden]=\"!submitted\">\r\n          \r\n      <div class=\"card border-success mb-3\">\r\n          <div class=\"card-header\">Confirmation</div>\r\n          <div class=\"card-body text-success\">\r\n            <h4 class=\"card-title\">{{confirmationTitle}}</h4>\r\n            <br>\r\n            <p class=\"card-text\">Size/Width Name: <b>{{ swRange.SizeWidthName }}</b></p>\r\n            <p class=\"card-text\">Range Type: <b>{{ swRange.RangeType }}</b></p>\r\n            <br>\r\n            <br>\r\n            <button class=\"btn btn-outline-primary\" (click)=\"close()\">Close</button>\r\n            <button *ngIf=\"swRangeService.isCreateSWRange\" class=\"btn btn-primary\" (click)=\"newSWRange(); swRangeForm.reset()\">Add Another Size-Width Range</button>\r\n          </div>\r\n      </div>\r\n\r\n      \r\n  </div>\r\n  \r\n</div>"

/***/ }),

/***/ "./src/app/components/create-sw-range/create-sw-range.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/create-sw-range/create-sw-range.component.ts ***!
  \*************************************************************************/
/*! exports provided: CreateSwRangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSwRangeComponent", function() { return CreateSwRangeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_sw_range__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/sw-range */ "./src/app/helpers/sw-range.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_size_width_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/size-width.service */ "./src/app/services/size-width.service.ts");





var CreateSwRangeComponent = /** @class */ (function () {
    function CreateSwRangeComponent(router, route, swRangeService) {
        this.router = router;
        this.route = route;
        this.swRangeService = swRangeService;
        this.submitted = false;
        this.columnDefs = [];
        this.isActive = false;
        this.swRange = new _helpers_sw_range__WEBPACK_IMPORTED_MODULE_2__["SwRange"]();
        this.rangeTypes = ['US', 'UK', 'EU', 'Accessory'];
        this.isInlineEditSWRange = false;
        this.confirmationTitle = '';
        this.rangeGridOptions = {
            context: {
                componentParent: this
            },
            enableColResize: true,
            headerHeight: 0,
            defaultColDef: {
                width: 150
            }
        };
    }
    CreateSwRangeComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.swRangeService.isCreateSWRange) {
            this.swRangeService.addSWRange(this.swRange).subscribe(function (res) {
                _this.submitted = true;
                _this.confirmationTitle = "Size-Width Range Saved";
            });
        }
        else if (this.swRangeService.isEditSWRange) {
            this.swRangeService.updateSWRange(this.swRange).subscribe(function (res) {
                _this.submitted = true;
                _this.confirmationTitle = "Size-Width Range Updated";
            });
        }
        else if (this.swRangeService.isViewSWRange) {
            this.swRangeService.isViewSWRange = false;
            this.swRangeService.isEditSWRange = true;
            this.isInlineEditSWRange = true;
        }
    };
    CreateSwRangeComponent.prototype.cancelEdit = function () {
        this.swRangeService.isViewSWRange = true;
        this.swRangeService.isEditSWRange = false;
        this.isInlineEditSWRange = false;
    };
    CreateSwRangeComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.swRangeService.isCreateSWRange == false && this.swRangeService.isEditSWRange == false
            && this.swRangeService.isViewSWRange == false) {
            this.swRangeService.isCreateSWRange = true;
        }
        var action = this.route.snapshot.params['action'];
        var id = this.route.snapshot.params['id'];
        //console.log(action+":"+ id);
        if (action == 'edit') {
            this.swRangeService.getSWRange(id).subscribe(function (res) {
                //console.log("response at component is: "+ res);    
                if (res) {
                    _this.swRangeService.selectedSWRange = res[0];
                    _this.swRangeService.isEditSWRange = true;
                    _this.swRangeService.isCreateSWRange = false;
                    _this.swRangeService.isViewSWRange = false;
                }
                else {
                }
                _this.createRangeGrid();
            });
        }
        else if (action == 'view') {
            this.swRangeService.getSWRange(id).subscribe(function (res) {
                //console.log("response at component is: "+ res);    
                if (res) {
                    _this.swRangeService.selectedSWRange = res[0];
                    _this.swRangeService.isEditSWRange = false;
                    _this.swRangeService.isCreateSWRange = false;
                    _this.swRangeService.isViewSWRange = true;
                }
                else {
                }
                _this.createRangeGrid();
            });
        }
        else if (action == 'create') {
            this.swRangeService.isEditSWRange = false;
            this.swRangeService.isCreateSWRange = true;
            this.swRangeService.isViewSWRange = false;
            this.createRangeGrid();
        }
    };
    CreateSwRangeComponent.prototype.createRangeGrid = function () {
        var head = this.swRangeService.toExcelHeaderArray(20);
        //   console.log(this.swRangeService.toExcelHeaderString(20));
        this.columnDefs = [];
        for (var i = 0; i < 20; i++) {
            var obj = { headerName: '', field: '', width: 55, editable: true };
            obj.headerName = head[i];
            obj.field = head[i];
            // if(this.swRangeService.isViewSWRange){
            //   obj.editable = true;
            // }
            // else { // edit or create mode
            //   obj.editable = true;
            // }
            this.columnDefs.push(obj);
        }
        // this.rangeGridOptions.columnDefs = this.columnDefs;
        if (this.swRangeService.isCreateSWRange) {
            // this.swRange = new SwRange();
            this.rangeGridOptions.rowData = this.swRange.SizeWidth;
        }
        else {
            this.swRange = this.swRangeService.selectedSWRange;
            var ar = [];
            ar = JSON.parse(this.swRangeService.selectedSWRange.SizeWidth);
            this.swRangeService.selectedSWRange.SizeWidth = ar;
            this.rangeGridOptions.rowData = this.swRangeService.selectedSWRange.SizeWidth;
        }
        this.rangeGridOptions.columnDefs = this.columnDefs;
        // this.rangeGridOptions.onGridReady();// = this.onGridReady;
        this.isActive = true;
    };
    CreateSwRangeComponent.prototype.newSWRange = function () {
        this.swRange = new _helpers_sw_range__WEBPACK_IMPORTED_MODULE_2__["SwRange"]();
        this.submitted = false;
    };
    CreateSwRangeComponent.prototype.close = function () {
        this.router.navigate(['/sizeWidthRange']);
    };
    CreateSwRangeComponent.prototype.onCellClick = function (params) {
        this.rangeGridApi = params.api;
        //console.log(params.value);
        if (params.rowIndex == 0 && params.column.colId == 'A') {
            this.rangeGridApi.stopEditing();
        }
        if (params.rowIndex > 0 && params.column.colId != 'A') {
            this.rangeGridApi.stopEditing();
        }
        if (this.swRangeService.isViewSWRange) {
            this.rangeGridApi.stopEditing();
        }
    };
    CreateSwRangeComponent.prototype.onCellEditingStarted = function (params) {
        //console.log(params);
        if (params.rowIndex == 0 && params.column.colId == 'A') {
            this.rangeGridApi.stopEditing();
        }
        if (params.rowIndex > 0 && params.column.colId != 'A') {
            this.rangeGridApi.stopEditing();
        }
        if (this.swRangeService.isViewSWRange) {
            this.rangeGridApi.stopEditing();
        }
        // if(params.value == '--' || this.swRangeService.isViewSWRange){
        //   this.rangeGridApi.stopEditing();
        // }
    };
    CreateSwRangeComponent.prototype.onGridReady = function (params) {
        this.rangeGridApi = params.api;
        this.rangeGridColumnApi = params.columnApi;
        var col = this.rangeGridColumnApi.getColumn("A");
        var colDef = col.getColDef();
        // console.log(params.node.data.A);
        var component = this;
        // colDef.editable = function (params) {
        //   //console.log(params.node.data.A);
        //   if(component.swRangeService.isViewSWRange){
        //     return  false;
        //   }
        //   else{
        //     return  params.node.data.A == '--' ? false: true;
        //   }
        // }
        colDef.cellClass = function (params) {
            return params.node.data.A == '--' ? 'blk-col' : 'remove-blk';
        };
        this.rangeGridOptions.api.redrawRows();
        this.rangeGridOptions.api.refreshHeader();
    };
    CreateSwRangeComponent.prototype.onGridSizeChanged = function (params) {
        var gridWidth = document.getElementById("rangeGrid").offsetWidth;
        var columnsToShow = [];
        var columnsToHide = [];
        var totalColsWidth = 0;
        var allColumns = params.columnApi.getAllColumns();
        for (var i = 0; i < allColumns.length; i++) {
            var column = allColumns[i];
            totalColsWidth += column.getMinWidth();
            if (totalColsWidth > gridWidth) {
                columnsToHide.push(column.colId);
            }
            else {
                columnsToShow.push(column.colId);
            }
        }
        params.columnApi.setColumnsVisible(columnsToShow, true);
        params.columnApi.setColumnsVisible(columnsToHide, false);
        params.api.sizeColumnsToFit();
    };
    CreateSwRangeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-sw-range',
            template: __webpack_require__(/*! ./create-sw-range.component.html */ "./src/app/components/create-sw-range/create-sw-range.component.html"),
            styles: [__webpack_require__(/*! ./create-sw-range.component.css */ "./src/app/components/create-sw-range/create-sw-range.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_size_width_service__WEBPACK_IMPORTED_MODULE_4__["SizeWidthService"]])
    ], CreateSwRangeComponent);
    return CreateSwRangeComponent;
}());



/***/ }),

/***/ "./src/app/components/department/department.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/department/department.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGVwYXJ0bWVudC9kZXBhcnRtZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/department/department.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/department/department.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-bar\">\r\n    <button type=\"button\" class=\"btn btn-dark\" (click)=\"addNewDepartment()  \">Add New Department</button>\r\n</div>\r\n<div class=\"title-bar\">All Departments</div>\r\n\r\n<div *ngIf =\"isActive\" style=\"width: 100%;\" class=\"grid-content\">\r\n        <ag-grid-angular #agGrid style=\"width: 100%;height:100%\" id=\"deptGrid\"\r\n                    class=\"ag-theme-material deptGrid\"                     \r\n                    [columnDefs]=\"columnDefs\"\r\n                    [gridOptions]=\"deptGridOptions\"\r\n                    [singleClickEdit]=\"true\"\r\n                    (gridReady)=\"onGridReady($event)\"\r\n                    (gridSizeChanged)=\"onGridSizeChanged($event)\"\r\n                    rowHeight='25'\r\n                    \r\n                    >\r\n        </ag-grid-angular>\r\n</div>\r\n\r\n<div class=\"modal modal-delete fade\" id=\"deleteConfirmationModel\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"DeleteConfirmation\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n            <h5 class=\"modal-title\" id=\"exampleModalLabel\">Confirm Delete</h5>                                    \r\n        </div>\r\n        <div class=\"modal-body\">\r\n            Are you sure you want to delete the department: '{{selectedDepartment.DepartmentName}}' and all its Types and SubTypes?\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" (click)=\"cancelDeleteDepartment()\" class=\"btn btn-secondary\" data-dismiss=\"modal\">No</button>\r\n            <button type=\"button\" (click)=\"confirmDeleteDepartment()\" class=\"btn btn-primary\">Yes</button>\r\n        </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/department/department.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/department/department.component.ts ***!
  \***************************************************************/
/*! exports provided: DepartmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentComponent", function() { return DepartmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_department__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/department */ "./src/app/helpers/department.ts");
/* harmony import */ var _services_department_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/department.service */ "./src/app/services/department.service.ts");
/* harmony import */ var _helper_components_dept_edit_delete_btn_dept_edit_delete_btn_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helper-components/dept-edit-delete-btn/dept-edit-delete-btn.component */ "./src/app/helper-components/dept-edit-delete-btn/dept-edit-delete-btn.component.ts");






var DepartmentComponent = /** @class */ (function () {
    function DepartmentComponent(router, deptService) {
        this.router = router;
        this.deptService = deptService;
        this.isActive = false;
        this.selectedDepartment = new _helpers_department__WEBPACK_IMPORTED_MODULE_3__["Department"]();
        this.selectedID = 1;
        // this.selectedStore.StoreName = '';
        this.deptGridOptions = {
            context: {
                componentParent: this
            },
            enableColResize: true,
            enableSorting: true,
            enableFilter: true,
            pagination: true,
            paginationAutoPageSize: true
        };
        this.columnDefs = [
            {
                headerName: "ID",
                field: "ID",
                minWidth: 100,
                maxWidth: 100
            },
            {
                headerName: "Department Name",
                field: "DepartmentName",
                minWidth: 200,
            },
            {
                headerName: "Description",
                field: "DepartmentDesc",
                minWidth: 200,
            },
            {
                headerName: "Action",
                cellRendererFramework: _helper_components_dept_edit_delete_btn_dept_edit_delete_btn_component__WEBPACK_IMPORTED_MODULE_5__["DeptEditDeleteBtnComponent"],
                maxWidth: 200
            }
        ];
    }
    DepartmentComponent.prototype.ngOnInit = function () {
        this.loadDepartments();
    };
    DepartmentComponent.prototype.loadDepartments = function () {
        var _this = this;
        this.deptService.getAllDepartments().subscribe(function (res) {
            //console.log("response at component is: "+ res);    
            if (res) {
                //console.log('array');
                _this.deptGridOptions.rowData = res;
            }
            else {
                //console.log(typeof(res));
                _this.deptGridOptions.rowData = [];
            }
            _this.isActive = true;
        });
    };
    DepartmentComponent.prototype.addNewDepartment = function () {
        // this.deptService.isEdit = false;
        // this.deptService.isCreate = true;
        // this.deptService.isView=false;
        this.router.navigate(['/actionDepartment', 'create', '0']);
    };
    DepartmentComponent.prototype.viewEditDepartment = function (obj) {
        this.router.navigate(['/actionDepartment', 'viewEdit', obj.ID]);
        // console.log(obj);
        // this.deptService.isEdit = false;
        // this.deptService.isCreate = false;
        // this.deptService.isView=true;
        // this.deptService.selectedDepartment.ID = obj.ID;
        // this.deptService.selectedDepartment.DepartmentName = obj.DepartmentName;
        // this.deptService.selectedDepartment.DepartmentDesc = obj.DepartmentDesc;
        // // var component = this;
        // this.deptService.getTypes(obj.ID).subscribe(
        //   res => {
        //     console.log("response at component is: "+ res);    
        //     if(res){
        //       console.log('array');
        //       this.deptService.selectedDepartment.DTypes = res;
        //       this.router.navigate(['/actionDepartment','viewEdit', obj.ID]);
        //     }    
        //     else {
        //       console.log(typeof(res));
        //       this.deptService.selectedDepartment.DTypes = [];
        //       this.router.navigate(['/actionDepartment','viewEdit',obj.ID]);
        //     }
        //     this.isActive = true;
        //   }
        // );
        // this.deptService.selectedDepartment = obj;
        // //console.log(this.deptService.selectedDepartment);
    };
    DepartmentComponent.prototype.deleteDepartment = function (obj) {
        //console.log(obj);
        $('#deleteConfirmationModel').modal('show');
        this.selectedDepartment = obj;
    };
    DepartmentComponent.prototype.confirmDeleteDepartment = function () {
        var _this = this;
        this.selectedID = 2;
        $('#deleteConfirmationModel').modal('hide');
        this.deptService.deleteDepartment(this.selectedDepartment).subscribe(function (res) {
            if (res) {
                _this.deptService.getAllDepartments().subscribe(function (res) {
                    //console.log(res);
                    if (res) {
                        _this.deptGridApi.setRowData(res);
                    }
                    else {
                        _this.deptGridApi.setRowData([]);
                    }
                    // this.storesGridOptions.rowData = res;
                });
            }
        });
    };
    DepartmentComponent.prototype.cancelDeleteDepartment = function () {
        $('#deleteConfirmationModel').modal('hide');
    };
    DepartmentComponent.prototype.onGridReady = function (params) {
        this.deptGridApi = params.api;
        this.deptGridColumnApi = params.columnApi;
    };
    DepartmentComponent.prototype.onGridSizeChanged = function (params) {
        var gridWidth = document.getElementById("deptGrid").offsetWidth;
        var columnsToShow = [];
        var columnsToHide = [];
        var totalColsWidth = 0;
        var allColumns = params.columnApi.getAllColumns();
        for (var i = 0; i < allColumns.length; i++) {
            var column = allColumns[i];
            totalColsWidth += column.getMinWidth();
            if (totalColsWidth > gridWidth) {
                columnsToHide.push(column.colId);
            }
            else {
                columnsToShow.push(column.colId);
            }
        }
        params.columnApi.setColumnsVisible(columnsToShow, true);
        params.columnApi.setColumnsVisible(columnsToHide, false);
        params.api.sizeColumnsToFit();
    };
    DepartmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-department',
            template: __webpack_require__(/*! ./department.component.html */ "./src/app/components/department/department.component.html"),
            styles: [__webpack_require__(/*! ./department.component.css */ "./src/app/components/department/department.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_department_service__WEBPACK_IMPORTED_MODULE_4__["DepartmentService"]])
    ], DepartmentComponent);
    return DepartmentComponent;
}());



/***/ }),

/***/ "./src/app/components/edit-store/edit-store.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/edit-store/edit-store.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdC1zdG9yZS9lZGl0LXN0b3JlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/edit-store/edit-store.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/edit-store/edit-store.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"title-bar\">Edit Store</div>\r\n\r\n<div *ngIf=\"store\" class=\"container\">\r\n  <div [hidden]=\"submitted\">\r\n    <form (ngSubmit)=\"onSubmit()\" #storeForm=\"ngForm\">\r\n      <div class=\"form-group\">\r\n        <label class=\"required\" for=\"storeName\">Store Name</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"storeName\" required\r\n        [(ngModel)]=\"store.StoreName\" name=\"storeName\"\r\n        #storeName=\"ngModel\">\r\n        <div [hidden]=\"storeName.valid || storeName.pristine\"\r\n          class=\"alert alert-danger\">\r\n          Store Name is required\r\n        </div>\r\n      </div>\r\n \r\n      <div class=\"form-group\">\r\n        <label class=\"required\" for=\"storeNumber\">Store Number</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"storeNumber\" required\r\n        [(ngModel)]=\"store.StoreNumber\" name=\"storeNumber\"\r\n        #storeNumber=\"ngModel\">\r\n        <div [hidden]=\"storeNumber.valid || storeNumber.pristine\"\r\n          class=\"alert alert-danger\">\r\n          Store Number is required\r\n        </div>\r\n      </div>\r\n      <button class=\"btn btn-outline-primary\" (click)=\"close()\">Cancel</button>\r\n      <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!storeForm.form.valid\">Update</button>\r\n \r\n    </form>\r\n  </div>\r\n  <div [hidden]=\"!submitted\">\r\n\r\n      <div class=\"card border-success mb-3\" style=\"\">\r\n          <div class=\"card-header\">Confirmation</div>\r\n          <div class=\"card-body text-success\">\r\n            <h4 class=\"card-title\">Store Updated</h4>\r\n            <p class=\"card-text\">Store Name: <b>{{ store.StoreName }}</b></p>\r\n            <p class=\"card-text\">Store Number: <b>{{ store.StoreNumber }}</b></p>\r\n            <br>\r\n            <button class=\"btn btn-outline-primary\" (click)=\"close()\">Close</button>\r\n          </div>\r\n      </div>\r\n\r\n      <!-- <h2>Store Updated</h2>\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-3\">Store Name: </div>\r\n        <div class=\"col-xs-9  pull-left\">{{ store.StoreName }}</div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-3\">Store Number: </div>\r\n        <div class=\"col-xs-9 pull-left\">{{ store.StoreNumber }}</div>\r\n      </div>\r\n      <br>\r\n      <button class=\"btn btn-primary\" (click)=\"close()\">Close</button> -->\r\n  </div>\r\n  \r\n</div>"

/***/ }),

/***/ "./src/app/components/edit-store/edit-store.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/edit-store/edit-store.component.ts ***!
  \***************************************************************/
/*! exports provided: EditStoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditStoreComponent", function() { return EditStoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/store */ "./src/app/helpers/store.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_stores_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/stores.service */ "./src/app/services/stores.service.ts");





var EditStoreComponent = /** @class */ (function () {
    // public dataReady = false;
    function EditStoreComponent(router, route, storeService) {
        this.router = router;
        this.route = route;
        this.storeService = storeService;
        this.store = new _helpers_store__WEBPACK_IMPORTED_MODULE_2__["Store"]();
        this.currentStore = new _helpers_store__WEBPACK_IMPORTED_MODULE_2__["Store"]();
        this.submitted = false;
        this.submitted = false;
    }
    EditStoreComponent.prototype.onSubmit = function () {
        var _this = this;
        //console.log(this.storeService.selectedStore);
        this.storeService.updateStore(this.store).subscribe(function (res) {
            _this.submitted = true;
        });
    };
    EditStoreComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params['id'];
        //console.log("id: "+ id);
        this.storeService.getStore(id).subscribe(function (res) {
            //console.log("response at component is: "+ res);    
            if (res) {
                //console.log('array');
                _this.storeService.selectedStore = res[0];
                _this.store = _this.storeService.selectedStore;
                // console.log(this.store);
                _this.currentStore = _this.storeService.selectedStore;
                // this.dataReady=true;
                _this.submitted = false;
            }
            else {
                //console.log(typeof(res));
            }
            // this.isActive = true;
        });
    };
    EditStoreComponent.prototype.close = function () {
        this.router.navigate(['/stores']);
    };
    EditStoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-store',
            template: __webpack_require__(/*! ./edit-store.component.html */ "./src/app/components/edit-store/edit-store.component.html"),
            styles: [__webpack_require__(/*! ./edit-store.component.css */ "./src/app/components/edit-store/edit-store.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_stores_service__WEBPACK_IMPORTED_MODULE_4__["StoresService"]])
    ], EditStoreComponent);
    return EditStoreComponent;
}());



/***/ }),

/***/ "./src/app/components/export-import-actions/export-import-actions.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/components/export-import-actions/export-import-actions.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".uploadSection {\r\n    border: 1px solid lightgray;\r\n    margin: 15px;\r\n    padding: 10px;\r\n}\r\n\r\n.alert {\r\n    padding: 3px;\r\n    font-size:12px;\r\n}\r\n\r\n.footer {\r\n    position: fixed;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  padding: 5px;\r\n  border-top: 1px solid lightgray;\r\n  background-color: #fbfbfb;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9leHBvcnQtaW1wb3J0LWFjdGlvbnMvZXhwb3J0LWltcG9ydC1hY3Rpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7RUFDakIsT0FBTztFQUNQLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLCtCQUErQjtFQUMvQix5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2V4cG9ydC1pbXBvcnQtYWN0aW9ucy9leHBvcnQtaW1wb3J0LWFjdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi51cGxvYWRTZWN0aW9uIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5hbGVydCB7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICBmb250LXNpemU6MTJweDtcclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZmJmYjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/export-import-actions/export-import-actions.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/export-import-actions/export-import-actions.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-bar\">\n  <div class=\"title-bar d-inline-block \">{{title}}</div>\n  <!-- <div *ngIf=\"showPOAlertMsg && poSubmitted\"\n    class=\"d-inline-block alert alert-dismissible alert-success fade show poAlertMsg\" role=\"alert\">\n    {{poAlertMsg}}\n  </div> -->\n</div>\n\n<div class=\"container\">\n\n  <div class=\"d-flex flex-row\">\n    <div class=\"form-group\">\n      <button (click)=\"exportPO()\" class=\"btn btn-warning btn-sm\">Celerant Export </button>\n    </div>\n  </div>\n  <div class=\"d-flex flex-row\">\n    <div class=\"form-group\">\n      <button (click)=\"generate3DCartImportTemplate1()\" class=\"btn btn-warning btn-sm\">Generate 3D Cart Import Template\n        1</button>\n    </div>\n  </div>\n\n\n  <div class=\"d-flex flex-row\">\n    <div class=\"form-group\">\n      <button (click)=\"ShowUploadOptionsFor3DExport1()\" class=\"btn btn-warning btn-sm\">Upload 3D Cart Export\n        1</button>\n    </div>\n  </div>\n  <div class=\"template-one uploadSection\" *ngIf=\"showUploadOptions1\">\n    <div class=\"d-flex flex-row\">\n      <div class=\"form-group\" style=\"min-width: 500px !important\">\n        <!-- <label for=\"file\">Choose File to Import</label>\n      <input type=\"file\" id=\"file\" name=\"file\" (change)=\"handleFileInputType3($event.target.files)\"> -->\n        <form [formGroup]=\"form\" (ngSubmit)=\"upload3DCartExport1()\">\n\n          <input type=\"file\" name=\"inputFile\" (change)=\"handleFileInputTemplate1($event)\" />\n          <br><br>\n          <button class=\"btn btn-warning btn-sm\" style=\"margin-right:5px;\" type=\"submit\">Process File and Download\n            Export Template</button>\n          <button class=\"btn btn-secondary btn-sm\" (click)=\"cancelUpload1()\">Cancel</button>\n        </form>\n      </div>\n    </div>\n    <!-- <div class=\"d-flex flex-row\">\n      <div class=\"form-group\" *ngIf=\"showDownloadOptions1\">\n        <div class=\"alert alert-dismissible alert-success fade show\" role=\"alert\">\n          Upload Successfull, click on below button to generate and download 3D Cart Import Template 2\n        </div>\n        <button (click)=\"download3DCartImportTemplate2()\" class=\"btn btn-warning btn-sm\">Generate 3D Cart Import\n          Template 2</button>\n      </div>\n    </div> -->\n  </div>\n\n  <!-- <div class=\"d-flex flex-row\">\n    <div class=\"form-group\">\n      <button (click)=\"ShowUploadOptionsFor3DExport2()\" class=\"btn btn-warning btn-sm\">Upload 3D Cart Export 2</button>\n    </div>\n  </div>\n  <div class=\"template-one uploadSection\" *ngIf=\"showUploadOptions2\">\n    <div class=\"d-flex flex-row\">\n      <div class=\"form-group\">     \n        <form [formGroup]=\"form\" (ngSubmit)=\"upload3DCartExport2()\">\n\n          <input type=\"file\" name=\"inputFile\" (change)=\"handleFileInputTemplate2($event)\" />\n          <br><br>\n          <button class=\"btn btn-warning btn-sm\" type=\"submit\">Upload</button>\n          <button class=\"btn btn-light btn-sm\" (click)=\"cancelUpload2()\">Cancel</button>\n        </form>\n      </div>\n    </div>\n    <div class=\"d-flex flex-row\">\n      <div class=\"form-group\" *ngIf=\"showDownloadOptions2\">\n        <div class=\"alert alert-dismissible alert-success fade show\" role=\"alert\">\n          Upload Successfull\n        </div>\n        <button (click)=\"download3DCartImportTemplate3()\" class=\"btn btn-warning btn-sm\">Generate 3D Cart Import\n          Template 3</button>\n      </div>\n    </div>\n  </div> -->\n\n\n</div>\n\n<div class=\"footer\">\n  <button class=\"btn btn-primary btn-sm\" type=\"button\" (click)=\"closeExportOptions()\">Close</button>\n</div>"

/***/ }),

/***/ "./src/app/components/export-import-actions/export-import-actions.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/export-import-actions/export-import-actions.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ExportImportActionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportImportActionsComponent", function() { return ExportImportActionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_purchase_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/purchase-order.service */ "./src/app/services/purchase-order.service.ts");
/* harmony import */ var _helpers_purchase_order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/purchase-order */ "./src/app/helpers/purchase-order.ts");
/* harmony import */ var _services_IO_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/IO.service */ "./src/app/services/IO.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_7__);








var MIME_TYPES = {
    pdf: "application/pdf",
    xls: "application/vnd.ms-excel",
    xlsx: "application/vnc.openxmlformats-officedocument.spreadsheetml.sheet"
};
var ExportImportActionsComponent = /** @class */ (function () {
    function ExportImportActionsComponent(formBuilder, router, route, poService, ioService) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.poService = poService;
        this.ioService = ioService;
        this.fileToUpload = null;
        var id = this.route.snapshot.params['id'];
        this.showUploadOptions1 = false;
        this.showUploadOptions2 = false;
        this.showDownloadOptions1 = false;
        this.showDownloadOptions2 = false;
        this.po = new _helpers_purchase_order__WEBPACK_IMPORTED_MODULE_4__["PurchaseOrder"]();
        this.poService.getPurchaseOrder(id).subscribe(function (res) {
            if (res) {
                console.log(res);
                _this.po = res[0];
                console.log(_this.po);
                // var x = "12/31/2017";
                var dv = _this.po.OrderDate.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
                _this.po.OrderDate = dv[3] + "-" + dv[1] + "-" + dv[2];
                // this.poService.selectedPO.OrderDate = obj.OrderDate;
                dv = _this.po.ShipDate.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
                _this.po.ShipDate = dv[3] + "-" + dv[1] + "-" + dv[2];
                dv = _this.po.CancelDate.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
                _this.po.CancelDate = dv[3] + "-" + dv[1] + "-" + dv[2];
                _this.po.Notes = _this.po.Notes;
                // var component = this;
                _this.oDate = _this.po.OrderDate;
                _this.sDate = _this.po.ShipDate;
                _this.cDate = _this.po.CancelDate;
                // this.productGridOptions.rowData = this.po.products;
                _this.title = "Export / Import Options " + 'Purchase Order Details - #: ' + _this.po.PurchaseOrderNumber;
            }
            else {
                console.log("NO PO Found Error");
            }
        });
    }
    ExportImportActionsComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            inputFile: ['']
        });
    };
    ExportImportActionsComponent.prototype.exportPO = function () {
        window.open("assets/api/exportPO.php/?poID=" + this.po.ID);
    };
    ExportImportActionsComponent.prototype.generate3DCartImportTemplate1 = function () {
        window.open("assets/api/exportPOTypeTwo.php/?poID=" + this.po.ID);
    };
    ExportImportActionsComponent.prototype.ShowUploadOptionsFor3DExport1 = function () {
        this.showUploadOptions1 = true;
    };
    ExportImportActionsComponent.prototype.handleFileInputTemplate1 = function (event) {
        if (event.target.files.length > 0) {
            console.log(event.target.files[0]);
            var file = event.target.files[0];
            this.form.get('inputFile').setValue(file);
            var x = this.form.get('inputFile').value;
            console.log(x.name);
        }
    };
    ExportImportActionsComponent.prototype.upload3DCartExport1 = function () {
        var formData = new FormData();
        var x = this.form.get('inputFile').value;
        var filename = "Product_Import_Template_2_" + x.name;
        var EXT = filename.substr(filename.lastIndexOf(".") + 1);
        formData.append('inputFile', this.form.get('inputFile').value);
        formData.append('poID', this.po.ID.toString());
        formData.append('action', "ImportTDCartExportOne");
        this.ioService.uploadTDCartExportOne(formData).subscribe(function (data) {
            // do something, if upload success
            if (data.type === "application/json") {
                // if (data == null || data === undefined || data == "") {
                console.log("Empty Data ----- " + data);
            }
            else {
                Object(file_saver__WEBPACK_IMPORTED_MODULE_7__["saveAs"])(new Blob([data], { type: MIME_TYPES[EXT] }), filename);
            }
        }, function (error) {
            console.log(error);
        });
    };
    ExportImportActionsComponent.prototype.download3DCartImportTemplate2 = function () {
    };
    ExportImportActionsComponent.prototype.cancelUpload1 = function () {
        this.showDownloadOptions1 = false;
        this.showUploadOptions1 = false;
    };
    ExportImportActionsComponent.prototype.ShowUploadOptionsFor3DExport2 = function () {
        this.showUploadOptions2 = true;
    };
    ExportImportActionsComponent.prototype.handleFileInputTemplate2 = function (event) {
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            this.form.get('inputFile').setValue(file);
        }
    };
    ExportImportActionsComponent.prototype.upload3DCartExport2 = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('inputFile', this.form.get('inputFile').value);
        formData.append('poID', this.po.ID.toString());
        formData.append('action', "ImportTDCartExportOne");
        this.ioService.uploadTDCartExportOne(formData).subscribe(function (data) {
            // do something, if upload success
            console.log("Response Data ---" + data);
            _this.showDownloadOptions2 = true;
        }, function (error) {
            console.log(error);
        });
    };
    ExportImportActionsComponent.prototype.download3DCartImportTemplate3 = function () {
    };
    ExportImportActionsComponent.prototype.cancelUpload2 = function () {
        this.showDownloadOptions2 = false;
        this.showUploadOptions2 = false;
    };
    ExportImportActionsComponent.prototype.closeExportOptions = function () {
        this.router.navigate(['/purchaseOrders/']);
    };
    ExportImportActionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-export-import-actions',
            template: __webpack_require__(/*! ./export-import-actions.component.html */ "./src/app/components/export-import-actions/export-import-actions.component.html"),
            styles: [__webpack_require__(/*! ./export-import-actions.component.css */ "./src/app/components/export-import-actions/export-import-actions.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_purchase_order_service__WEBPACK_IMPORTED_MODULE_3__["PurchaseOrderService"], _services_IO_service__WEBPACK_IMPORTED_MODULE_5__["IOService"]])
    ], ExportImportActionsComponent);
    return ExportImportActionsComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center\">Login</h2>\n<div class=\"row\">\n  <div class=\"col-md-3\">\n  </div>\n  <div class=\"col-md-6 col-md-offset-3\">\n    <div class=\"jumbotron\">\n      <form [formGroup]=\"angForm\" (ngSubmit)=\"postdata(angForm)\" autocomplete=\"off\">\n        <div class=\"form-group\">\n          <label for=\"email\">User Name</label>\n          <input type=\"email\" name=\"email\" formControlName=\"email\" autocomplete=\"off\" class=\"form-control input-sm\"\n            placeholder=\"Email Address\">\n\n        </div>\n        <div class=\"form-group\">\n          <label for=\"Password\">Password</label>\n          <input type=\"password\" name=\"Password\" formControlName=\"password\" autocomplete=\"off\"\n            class=\"form-control input-sm\" placeholder=\"Password\">\n\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!angForm.valid\">Login</button>\n      </form>\n    </div>\n  </div>\n  <div class=\"col-md-3\">\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_dataservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/dataservice.service */ "./src/app/services/dataservice.service.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, dataService, router) {
        this.fb = fb;
        this.dataService = dataService;
        this.router = router;
        this.angForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.postdata = function (angForm1) {
        var _this = this;
        console.log("call post");
        this.dataService.userlogin(angForm1.value.email, angForm1.value.password)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            var redirect = _this.dataService.redirectUrl ? _this.dataService.redirectUrl : '/purchaseOrders';
            _this.router.navigate([redirect]);
        }, function (error) {
            alert("User name or password is incorrect");
        });
    };
    Object.defineProperty(LoginComponent.prototype, "email", {
        get: function () { return this.angForm.get('email'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "password", {
        get: function () { return this.angForm.get('password'); },
        enumerable: true,
        configurable: true
    });
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_dataservice_service__WEBPACK_IMPORTED_MODULE_5__["DataserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/purchase-order/purchase-order.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/purchase-order/purchase-order.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHVyY2hhc2Utb3JkZXIvcHVyY2hhc2Utb3JkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/purchase-order/purchase-order.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/purchase-order/purchase-order.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-bar\">\r\n    <button type=\"button\" class=\"btn btn-dark\" (click)=\"addNewPO()\">Add New Purchase Order</button>\r\n</div>\r\n\r\n<div class=\"title-bar\">Purchase Order List</div>\r\n\r\n<div *ngIf=\"isActive\" style=\"width: 100%;\" class=\"grid-content\">\r\n    <ag-grid-angular #agGrid style=\"width: 100%;height:100%\" id=\"poGrid\" class=\"ag-theme-material poGrid\"\r\n        [columnDefs]=\"columnDefs\" [gridOptions]=\"poGridOptions\" [singleClickEdit]=\"true\"\r\n        (gridReady)=\"onGridReady($event)\" (gridSizeChanged)=\"onGridSizeChanged($event)\" rowHeight='25'>\r\n    </ag-grid-angular>\r\n</div>\r\n\r\n<div class=\"modal modal-delete fade\" id=\"deleteConfirmationModel\" tabindex=\"-1\" role=\"dialog\"\r\n    aria-labelledby=\"DeleteConfirmation\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Confirm Delete</h5>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                Are you sure you want to delete the Purchase Order: '{{selectedPO.PurchaseOrderNumber}}' and all its\r\n                Products?\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" (click)=\"cancelDeletePO()\" class=\"btn btn-secondary\"\r\n                    data-dismiss=\"modal\">No</button>\r\n                <button type=\"button\" (click)=\"confirmDeletePO()\" class=\"btn btn-primary\">Yes</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/purchase-order/purchase-order.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/purchase-order/purchase-order.component.ts ***!
  \***********************************************************************/
/*! exports provided: PurchaseOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseOrderComponent", function() { return PurchaseOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_purchase_order__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/purchase-order */ "./src/app/helpers/purchase-order.ts");
/* harmony import */ var _services_purchase_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/purchase-order.service */ "./src/app/services/purchase-order.service.ts");
/* harmony import */ var _helper_components_purchase_order_edit_delete_btn_purchase_order_edit_delete_btn_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helper-components/purchase-order-edit-delete-btn/purchase-order-edit-delete-btn.component */ "./src/app/helper-components/purchase-order-edit-delete-btn/purchase-order-edit-delete-btn.component.ts");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! numeral */ "./node_modules/numeral/numeral.js");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_6__);







var PurchaseOrderComponent = /** @class */ (function () {
    function PurchaseOrderComponent(router, poService) {
        this.router = router;
        this.poService = poService;
        this.isActive = false;
        this.selectedPO = new _helpers_purchase_order__WEBPACK_IMPORTED_MODULE_3__["PurchaseOrder"]();
        this.selectedID = 1;
        // this.selectedStore.StoreName = '';
        this.poGridOptions = {
            context: {
                componentParent: this
            },
            enableColResize: true,
            enableSorting: true,
            enableFilter: true,
            pagination: true,
            paginationAutoPageSize: true,
            suppressHorizontalScroll: false,
        };
        this.columnDefs = [
            {
                headerName: "ID",
                field: "ID",
                filter: 'agNumberColumnFilter',
                minWidth: 50,
                maxWidth: 50,
            },
            {
                headerName: "PO Type",
                field: "POType",
                minWidth: 70,
            },
            {
                headerName: "Order Date",
                field: "OrderDate",
                minWidth: 100,
            },
            {
                headerName: "Brand",
                field: "BrandName",
                minWidth: 100,
            },
            {
                headerName: "Purchase Order #",
                field: "PurchaseOrderNumber",
                minWidth: 150,
            },
            {
                headerName: "Ship Date",
                field: "ShipDate",
                minWidth: 100,
            },
            {
                headerName: "Total Quantity",
                field: "TotalQuantity",
                minWidth: 80,
            },
            {
                headerName: "Total $ Ordered",
                field: "TotalCost",
                valueFormatter: currencyFormatter,
                minWidth: 100,
            },
            {
                headerName: "Action",
                cellRendererFramework: _helper_components_purchase_order_edit_delete_btn_purchase_order_edit_delete_btn_component__WEBPACK_IMPORTED_MODULE_5__["PurchaseOrderEditDeleteBtnComponent"],
                maxWidth: 300,
                minWidth: 300
            }
        ];
    }
    PurchaseOrderComponent.prototype.ngOnInit = function () {
        this.loadPurchaseOrders();
    };
    PurchaseOrderComponent.prototype.loadPurchaseOrders = function () {
        var _this = this;
        this.poService.getAllPurchaseOrders().subscribe(function (res) {
            //console.log("response at component is: "+ res);    
            if (res) {
                //console.log('array');
                _this.poGridOptions.rowData = res;
            }
            else {
                //console.log(typeof(res));
                _this.poGridOptions.rowData = [];
            }
            _this.isActive = true;
            try {
                _this.poGridApi.setRowData(_this.poGridOptions.rowData);
            }
            catch (e) {
            }
        });
    };
    PurchaseOrderComponent.prototype.addNewPO = function () {
        this.poService.isEdit = false;
        this.poService.isCreate = true;
        this.poService.isView = false;
        this.router.navigate(['/actionPO']);
    };
    PurchaseOrderComponent.prototype.viewEditPO = function (obj) {
        var _this = this;
        //console.log(obj);
        this.poService.isEdit = false;
        this.poService.isCreate = false;
        this.poService.isView = true;
        this.poService.selectedPO.ID = obj.ID;
        this.poService.selectedPO.POType = obj.POType;
        this.poService.selectedPO.PurchaseOrderNumber = obj.PurchaseOrderNumber;
        this.poService.selectedPO.VendorID = obj.VendorID;
        this.poService.selectedPO.VendorName = obj.VendorName;
        this.poService.selectedPO.BrandID = obj.BrandID;
        this.poService.selectedPO.BrandName = obj.BrandName;
        this.poService.selectedPO.StoreID = obj.StoreID;
        this.poService.selectedPO.StoreName = obj.StoreName;
        this.poService.selectedPO.StoreNumber = obj.StoreNumber;
        // var x = "12/31/2017";
        var dv = obj.OrderDate.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
        this.poService.selectedPO.OrderDate = dv[3] + "-" + dv[1] + "-" + dv[2];
        // this.poService.selectedPO.OrderDate = obj.OrderDate;
        dv = obj.ShipDate.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
        this.poService.selectedPO.ShipDate = dv[3] + "-" + dv[1] + "-" + dv[2];
        dv = obj.CancelDate.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
        this.poService.selectedPO.CancelDate = dv[3] + "-" + dv[1] + "-" + dv[2];
        this.poService.selectedPO.Notes = obj.Notes;
        // var component = this;
        this.poService.getProducts(obj.ID).subscribe(function (res) {
            //console.log("response at component is: "+ res);    
            if (res) {
                //console.log('array');
                _this.poService.selectedPO.products = res;
                _this.router.navigate(['/actionPO/' + obj.ID]);
            }
            else {
                //console.log(typeof(res));
                _this.poService.selectedPO.products = [];
                _this.router.navigate(['/actionPO/' + obj.ID]);
            }
            _this.isActive = true;
        });
        // this.poService.selectedDepartment = obj;
        //console.log(this.poService.selectedPO);
    };
    PurchaseOrderComponent.prototype.deletePO = function (obj) {
        //console.log(obj);
        $('#deleteConfirmationModel').modal('show');
        this.selectedPO = obj;
    };
    PurchaseOrderComponent.prototype.exportPO = function (obj) {
        // window.open("assets/api/exportPO.php/?poID=" + obj.ID);
        this.router.navigate(['/exportImportActions/' + obj.ID]);
    };
    PurchaseOrderComponent.prototype.confirmDeletePO = function () {
        var _this = this;
        this.selectedID = 2;
        $('#deleteConfirmationModel').modal('hide');
        this.poService.deletePurchaseOrder(this.selectedPO).subscribe(function (res) {
            if (res) {
                _this.poService.getAllPurchaseOrders().subscribe(function (res) {
                    //console.log(res);
                    if (res) {
                        _this.poGridApi.setRowData(res);
                    }
                    else {
                        _this.poGridApi.setRowData([]);
                    }
                    // this.storesGridOptions.rowData = res;
                });
            }
        });
    };
    PurchaseOrderComponent.prototype.cancelDeletePO = function () {
        $('#deleteConfirmationModel').modal('hide');
    };
    PurchaseOrderComponent.prototype.onGridReady = function (params) {
        this.poGridApi = params.api;
        this.poGridColumnApi = params.columnApi;
    };
    PurchaseOrderComponent.prototype.onGridSizeChanged = function (params) {
        var gridWidth = document.getElementById("poGrid").offsetWidth;
        var columnsToShow = [];
        var columnsToHide = [];
        var totalColsWidth = 0;
        var allColumns = params.columnApi.getAllColumns();
        for (var i = 0; i < allColumns.length; i++) {
            var column = allColumns[i];
            totalColsWidth += column.getMinWidth();
            //if (totalColsWidth > gridWidth) 
            {
                //columnsToHide.push(column.colId);
                //} else {
                columnsToShow.push(column.colId);
            }
        }
        params.columnApi.setColumnsVisible(columnsToShow, true);
        params.columnApi.setColumnsVisible(columnsToHide, false);
        params.api.sizeColumnsToFit();
    };
    PurchaseOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-purchase-order',
            template: __webpack_require__(/*! ./purchase-order.component.html */ "./src/app/components/purchase-order/purchase-order.component.html"),
            styles: [__webpack_require__(/*! ./purchase-order.component.css */ "./src/app/components/purchase-order/purchase-order.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_purchase_order_service__WEBPACK_IMPORTED_MODULE_4__["PurchaseOrderService"]])
    ], PurchaseOrderComponent);
    return PurchaseOrderComponent;
}());

function currencyFormatter(params) {
    return formatNumber(params.value);
}
function formatNumber(number) {
    return numeral__WEBPACK_IMPORTED_MODULE_6__(number).format('0,0.00');
}


/***/ }),

/***/ "./src/app/components/size-width/size-width.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/size-width/size-width.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2l6ZS13aWR0aC9zaXplLXdpZHRoLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/size-width/size-width.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/size-width/size-width.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-bar\">\r\n    <button type=\"button\" class=\"btn btn-dark\" (click)=\"addNewSizeWidthRange()\">Add New Size/Width-Range</button>\r\n</div>\r\n\r\n<div class=\"title-bar\">All Size-Width Range</div>\r\n\r\n<div *ngIf =\"isActive\" style=\"width: 100%;\" class=\"grid-content\">\r\n        <ag-grid-angular #agGrid style=\"width: 100%;height:100%\" id=\"swRangeGrid\"\r\n                    class=\"ag-theme-material swRangeGrid\"                     \r\n                    [columnDefs]=\"columnDefs\"\r\n                    [gridOptions]=\"swRangeGridOptions\"\r\n                    [singleClickEdit]=\"true\"\r\n                    \r\n                    (gridReady)=\"onGridReady($event)\"\r\n                    (gridSizeChanged)=\"onGridSizeChanged($event)\"\r\n                    rowHeight='25'\r\n                    \r\n                    >\r\n        </ag-grid-angular>\r\n</div>\r\n\r\n<div class=\"modal modal-delete fade\" id=\"deleteConfirmationModel\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"DeleteConfirmation\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Confirm Delete</h5>                                    \r\n            </div>\r\n            <div class=\"modal-body\">\r\n                Are you sure you want to delete the Size-Width Range:  {{selectedSWRange.SizeWidthName}}?\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" (click)=\"cancelDeleteSWRange()\" class=\"btn btn-secondary\" data-dismiss=\"modal\">No</button>\r\n                <button type=\"button\" (click)=\"confirmDeleteSWRange()\" class=\"btn btn-primary\">Yes</button>\r\n            </div>\r\n            </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/components/size-width/size-width.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/size-width/size-width.component.ts ***!
  \***************************************************************/
/*! exports provided: SizeWidthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SizeWidthComponent", function() { return SizeWidthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_size_width_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/size-width.service */ "./src/app/services/size-width.service.ts");
/* harmony import */ var _helpers_sw_range__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/sw-range */ "./src/app/helpers/sw-range.ts");
/* harmony import */ var _helper_components_swrange_edit_delete_btn_swrange_edit_delete_btn_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helper-components/swrange-edit-delete-btn/swrange-edit-delete-btn.component */ "./src/app/helper-components/swrange-edit-delete-btn/swrange-edit-delete-btn.component.ts");






var SizeWidthComponent = /** @class */ (function () {
    function SizeWidthComponent(router, swRangeService) {
        this.router = router;
        this.swRangeService = swRangeService;
        this.isActive = false;
        this.selectedSWRange = new _helpers_sw_range__WEBPACK_IMPORTED_MODULE_4__["SwRange"]();
        this.swRangeGridOptions = {
            context: {
                componentParent: this
            },
            enableColResize: true,
            enableSorting: true,
            enableFilter: true,
            pagination: true,
            paginationAutoPageSize: true
        };
        this.columnDefs = [
            {
                headerName: "ID",
                field: "ID",
                minWidth: 100,
                maxWidth: 100
            },
            {
                headerName: "Size/Width Range Name",
                field: "SizeWidthName",
                minWidth: 200,
            },
            {
                headerName: "Range Type",
                field: "RangeType",
                minWidth: 200,
            },
            {
                headerName: "Action",
                cellRendererFramework: _helper_components_swrange_edit_delete_btn_swrange_edit_delete_btn_component__WEBPACK_IMPORTED_MODULE_5__["SwrangeEditDeleteBtnComponent"],
                maxWidth: 250
            }
        ];
    } //end of constructor
    SizeWidthComponent.prototype.ngOnInit = function () {
        //this.swRangeSelected = new SwRange();
        // console.log(this.swRangeSelected.SizeWidth[0][0]);
        this.loadSWRanges();
    };
    SizeWidthComponent.prototype.loadSWRanges = function () {
        var _this = this;
        this.swRangeService.getAllSWRange().subscribe(function (res) {
            //console.log("response at component is: "+ res);    
            if (res) {
                //console.log('array returned');
                _this.swRangeGridOptions.rowData = res;
            }
            else {
                //console.log(typeof(res));
                _this.swRangeGridOptions.rowData = [];
            }
            // this.swRangeGridOptions.rowData = res;
            _this.isActive = true;
        });
    };
    SizeWidthComponent.prototype.viewSWRange = function (obj) {
        // console.log(params.node.data);
        // this.swRangeService.selectedSWRange = params.node.data;
        // this.swRangeService.isEditSWRange = false;
        // this.swRangeService.isCreateSWRange = false;
        // this.swRangeService.isViewSWRange=true;
        this.swRangeService.selectedSWRange = obj;
        this.swRangeService.isEditSWRange = false;
        this.swRangeService.isCreateSWRange = false;
        this.swRangeService.isViewSWRange = true;
        this.router.navigate(['/actionSWRange', 'view', obj.ID]);
    };
    SizeWidthComponent.prototype.addNewSizeWidthRange = function () {
        // this.swRangeService.isEditSWRange = false;
        // this.swRangeService.isCreateSWRange = true;
        // this.swRangeService.isViewSWRange=false;
        this.router.navigate(['/actionSWRange', 'create', '0']);
    };
    SizeWidthComponent.prototype.editSWRange = function (obj) {
        // console.log(obj);
        // this.swRangeService.selectedSWRange = obj;
        // this.swRangeService.isEditSWRange = true;
        // this.swRangeService.isCreateSWRange = false;
        // this.swRangeService.isViewSWRange=false;
        this.router.navigate(['/actionSWRange', 'edit', obj.ID]);
    };
    SizeWidthComponent.prototype.deleteSWRange = function (obj) {
        //console.log("here-2");
        //console.log(obj);
        this.selectedSWRange = obj;
        $('#deleteConfirmationModel').modal('show');
    };
    SizeWidthComponent.prototype.confirmDeleteSWRange = function () {
        var _this = this;
        // this.selectedID = 2;
        $('#deleteConfirmationModel').modal('hide');
        this.swRangeService.deleteSWRange(this.selectedSWRange).subscribe(function (res) {
            if (res) {
                _this.swRangeService.getAllSWRange().subscribe(function (res) {
                    //console.log(res);
                    if (res) {
                        _this.swRangeGridApi.setRowData(res);
                    }
                    else {
                        _this.swRangeGridApi.setRowData([]);
                    }
                    // this.storesGridOptions.rowData = res;
                });
            }
        });
    };
    SizeWidthComponent.prototype.cancelDeleteSWRange = function () {
        $('#deleteConfirmationModel').modal('hide');
    };
    SizeWidthComponent.prototype.onGridReady = function (params) {
        this.swRangeGridApi = params.api;
        this.swRangeGridColumnApi = params.columnApi;
    };
    SizeWidthComponent.prototype.onGridSizeChanged = function (params) {
        var gridWidth = document.getElementById("swRangeGrid").offsetWidth;
        var columnsToShow = [];
        var columnsToHide = [];
        var totalColsWidth = 0;
        var allColumns = params.columnApi.getAllColumns();
        for (var i = 0; i < allColumns.length; i++) {
            var column = allColumns[i];
            totalColsWidth += column.getMinWidth();
            if (totalColsWidth > gridWidth) {
                columnsToHide.push(column.colId);
            }
            else {
                columnsToShow.push(column.colId);
            }
        }
        params.columnApi.setColumnsVisible(columnsToShow, true);
        params.columnApi.setColumnsVisible(columnsToHide, false);
        params.api.sizeColumnsToFit();
    };
    SizeWidthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-size-width',
            template: __webpack_require__(/*! ./size-width.component.html */ "./src/app/components/size-width/size-width.component.html"),
            styles: [__webpack_require__(/*! ./size-width.component.css */ "./src/app/components/size-width/size-width.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_size_width_service__WEBPACK_IMPORTED_MODULE_3__["SizeWidthService"]])
    ], SizeWidthComponent);
    return SizeWidthComponent;
}());



/***/ }),

/***/ "./src/app/components/stores/stores.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/stores/stores.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.ag-theme-material .ag-cell-focus {\r\n    border: 0px !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdG9yZXMvc3RvcmVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zdG9yZXMvc3RvcmVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmFnLXRoZW1lLW1hdGVyaWFsIC5hZy1jZWxsLWZvY3VzIHtcclxuICAgIGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/stores/stores.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/stores/stores.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-bar\">\r\n    <button type=\"button\" (click)=\"addNewStore()\" class=\"btn btn-dark\">Add New Store</button>\r\n</div>\r\n<div class=\"title-bar\">All Stores</div>\r\n\r\n<div *ngIf =\"isActive\" style=\"width: 100%;\" class=\"grid-content\">\r\n        <ag-grid-angular #agGrid style=\"width: 100%;height:100%\" id=\"storesGrid\"\r\n                    class=\"ag-theme-material storesGrid\"                     \r\n                    [columnDefs]=\"columnDefs\"\r\n                    [gridOptions]=\"storesGridOptions\"\r\n                    [singleClickEdit]=\"true\"\r\n                    (gridReady)=\"onGridReady($event)\"\r\n                    (gridSizeChanged)=\"onGridSizeChanged($event)\"\r\n                    rowHeight='25'\r\n                    \r\n                    >\r\n        </ag-grid-angular>\r\n</div>\r\n\r\n<div class=\"modal modal-delete fade\" id=\"deleteConfirmationModel\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"DeleteConfirmation\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n            <h5 class=\"modal-title\" id=\"exampleModalLabel\">Confirm Delete</h5>                                    \r\n        </div>\r\n        <div class=\"modal-body\">\r\n            Are you sure you want to delete the Store {{selectedStore.StoreName}}?\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" (click)=\"cancelDeleteStore()\" class=\"btn btn-secondary\" data-dismiss=\"modal\">No</button>\r\n            <button type=\"button\" (click)=\"confirmDeleteStore()\" class=\"btn btn-primary\">Yes</button>\r\n        </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/stores/stores.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/stores/stores.component.ts ***!
  \*******************************************************/
/*! exports provided: StoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoresComponent", function() { return StoresComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_stores_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/stores.service */ "./src/app/services/stores.service.ts");
/* harmony import */ var _helper_components_stores_edit_delete_btn_stores_edit_delete_btn_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helper-components/stores-edit-delete-btn/stores-edit-delete-btn.component */ "./src/app/helper-components/stores-edit-delete-btn/stores-edit-delete-btn.component.ts");
/* harmony import */ var _helpers_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/store */ "./src/app/helpers/store.ts");






var StoresComponent = /** @class */ (function () {
    function StoresComponent(router, storesService) {
        this.router = router;
        this.storesService = storesService;
        this.isActive = false;
        this.selectedStore = new _helpers_store__WEBPACK_IMPORTED_MODULE_5__["Store"]();
        this.selectedID = 1;
        // this.selectedStore.StoreName = '';
        this.storesGridOptions = {
            context: {
                componentParent: this
            },
            enableColResize: true,
            enableSorting: true,
            enableFilter: true,
            pagination: true,
            paginationAutoPageSize: true
        };
        this.columnDefs = [
            {
                headerName: "ID",
                field: "ID",
                minWidth: 100,
                maxWidth: 100
            },
            {
                headerName: "Store Name",
                field: "StoreName",
                minWidth: 200,
            },
            {
                headerName: "Store Number",
                field: "StoreNumber",
                minWidth: 200,
            },
            {
                headerName: "Action",
                cellRendererFramework: _helper_components_stores_edit_delete_btn_stores_edit_delete_btn_component__WEBPACK_IMPORTED_MODULE_4__["StoresEditDeleteBtnComponent"],
                maxWidth: 150
            }
        ];
    } // end of constructor
    StoresComponent.prototype.ngOnInit = function () {
        this.loadStores();
    };
    StoresComponent.prototype.loadStores = function () {
        var _this = this;
        this.storesService.getAllStores().subscribe(function (res) {
            //console.log("response at component is: "+ res);    
            if (res) {
                //console.log('array');
                _this.storesGridOptions.rowData = res;
            }
            else {
                //console.log(typeof(res));
                _this.storesGridOptions.rowData = [];
            }
            _this.isActive = true;
        });
    };
    StoresComponent.prototype.addNewStore = function () {
        this.router.navigate(['/addStore']);
    };
    StoresComponent.prototype.editStore = function (obj) {
        // console.log(obj);
        // this.storesService.selectedStore = obj;
        // console.log(this.storesService.selectedStore);
        this.router.navigate(['/editStore', obj.ID]);
    };
    StoresComponent.prototype.deleteStore = function (obj) {
        //console.log(obj);
        $('#deleteConfirmationModel').modal('show');
        this.selectedStore = obj;
    };
    StoresComponent.prototype.confirmDeleteStore = function () {
        var _this = this;
        this.selectedID = 2;
        $('#deleteConfirmationModel').modal('hide');
        this.storesService.deleteStore(this.selectedStore).subscribe(function (res) {
            if (res) {
                _this.storesService.getAllStores().subscribe(function (res) {
                    //console.log(res);
                    if (res) {
                        _this.storesGridApi.setRowData(res);
                    }
                    else {
                        _this.storesGridApi.setRowData([]);
                    }
                    // this.storesGridOptions.rowData = res;
                });
            }
        });
    };
    StoresComponent.prototype.cancelDeleteStore = function () {
        $('#deleteConfirmationModel').modal('hide');
    };
    StoresComponent.prototype.onGridReady = function (params) {
        this.storesGridApi = params.api;
        this.storesGridColumnApi = params.columnApi;
    };
    StoresComponent.prototype.onGridSizeChanged = function (params) {
        var gridWidth = document.getElementById("storesGrid").offsetWidth;
        var columnsToShow = [];
        var columnsToHide = [];
        var totalColsWidth = 0;
        var allColumns = params.columnApi.getAllColumns();
        for (var i = 0; i < allColumns.length; i++) {
            var column = allColumns[i];
            totalColsWidth += column.getMinWidth();
            if (totalColsWidth > gridWidth) {
                columnsToHide.push(column.colId);
            }
            else {
                columnsToShow.push(column.colId);
            }
        }
        params.columnApi.setColumnsVisible(columnsToShow, true);
        params.columnApi.setColumnsVisible(columnsToHide, false);
        params.api.sizeColumnsToFit();
    };
    StoresComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stores',
            template: __webpack_require__(/*! ./stores.component.html */ "./src/app/components/stores/stores.component.html"),
            styles: [__webpack_require__(/*! ./stores.component.css */ "./src/app/components/stores/stores.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_stores_service__WEBPACK_IMPORTED_MODULE_3__["StoresService"]])
    ], StoresComponent);
    return StoresComponent;
}());



/***/ }),

/***/ "./src/app/components/vendor/vendor.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/vendor/vendor.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmVuZG9yL3ZlbmRvci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/vendor/vendor.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/vendor/vendor.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-bar\">\r\n    <button type=\"button\" class=\"btn btn-dark\">Add New Vendor</button>\r\n    \r\n</div>"

/***/ }),

/***/ "./src/app/components/vendor/vendor.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/vendor/vendor.component.ts ***!
  \*******************************************************/
/*! exports provided: VendorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorComponent", function() { return VendorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VendorComponent = /** @class */ (function () {
    function VendorComponent() {
    }
    VendorComponent.prototype.ngOnInit = function () {
    };
    VendorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vendor',
            template: __webpack_require__(/*! ./vendor.component.html */ "./src/app/components/vendor/vendor.component.html"),
            styles: [__webpack_require__(/*! ./vendor.component.css */ "./src/app/components/vendor/vendor.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VendorComponent);
    return VendorComponent;
}());



/***/ }),

/***/ "./src/app/guards/authguard.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/guards/authguard.guard.ts ***!
  \*******************************************/
/*! exports provided: AuthguardGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthguardGuard", function() { return AuthguardGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_dataservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/dataservice.service */ "./src/app/services/dataservice.service.ts");




var AuthguardGuard = /** @class */ (function () {
    function AuthguardGuard(dataService, router) {
        this.dataService = dataService;
        this.router = router;
    }
    // canActivate(
    //   next: ActivatedRouteSnapshot,
    //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //   return true;
    // }
    AuthguardGuard.prototype.canActivate = function (route, state) {
        var routeurl = state.url;
        return this.isLogin(routeurl);
    };
    AuthguardGuard.prototype.isLogin = function (routeurl) {
        if (this.dataService.isLoggedIn()) {
            return true;
        }
        this.dataService.redirectUrl = routeurl;
        this.router.navigate(['/login'], { queryParams: { returnUrl: routeurl } });
    };
    AuthguardGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_dataservice_service__WEBPACK_IMPORTED_MODULE_3__["DataserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthguardGuard);
    return AuthguardGuard;
}());



/***/ }),

/***/ "./src/app/helper-components/available-width-cell-renderer/available-width-cell-renderer.component.css":
/*!*************************************************************************************************************!*\
  !*** ./src/app/helper-components/available-width-cell-renderer/available-width-cell-renderer.component.css ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlbHBlci1jb21wb25lbnRzL2F2YWlsYWJsZS13aWR0aC1jZWxsLXJlbmRlcmVyL2F2YWlsYWJsZS13aWR0aC1jZWxsLXJlbmRlcmVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/helper-components/available-width-cell-renderer/available-width-cell-renderer.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/helper-components/available-width-cell-renderer/available-width-cell-renderer.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"grid-row-edit-btns\">\r\n    <label class=\"form-check-label\">\r\n        <input style=\"min-width: 20px;\" class=\"form-check-input\" name=\"pAvailableWidth\"\r\n            (change)=\"onChangeAvailableWidth()\" type=\"checkbox\" [value]=\"false\">\r\n        Check If Not Avaiable\r\n    </label>\r\n</span>"

/***/ }),

/***/ "./src/app/helper-components/available-width-cell-renderer/available-width-cell-renderer.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/helper-components/available-width-cell-renderer/available-width-cell-renderer.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: AvailableWidthCellRendererComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvailableWidthCellRendererComponent", function() { return AvailableWidthCellRendererComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AvailableWidthCellRendererComponent = /** @class */ (function () {
    function AvailableWidthCellRendererComponent() {
    }
    AvailableWidthCellRendererComponent.prototype.agInit = function (params) {
        this.params = params;
    };
    AvailableWidthCellRendererComponent.prototype.onChangeAvailableWidth = function () {
        this.params.context.componentParent.onChangeAvailableWidth(this.params.node.data);
    };
    AvailableWidthCellRendererComponent.prototype.refresh = function () {
        return false;
    };
    AvailableWidthCellRendererComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-available-width-cell-renderer',
            template: __webpack_require__(/*! ./available-width-cell-renderer.component.html */ "./src/app/helper-components/available-width-cell-renderer/available-width-cell-renderer.component.html"),
            styles: [__webpack_require__(/*! ./available-width-cell-renderer.component.css */ "./src/app/helper-components/available-width-cell-renderer/available-width-cell-renderer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AvailableWidthCellRendererComponent);
    return AvailableWidthCellRendererComponent;
}());



/***/ }),

/***/ "./src/app/helper-components/brand-edit-delete-btn/brand-edit-delete-btn.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/helper-components/brand-edit-delete-btn/brand-edit-delete-btn.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlbHBlci1jb21wb25lbnRzL2JyYW5kLWVkaXQtZGVsZXRlLWJ0bi9icmFuZC1lZGl0LWRlbGV0ZS1idG4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/helper-components/brand-edit-delete-btn/brand-edit-delete-btn.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/helper-components/brand-edit-delete-btn/brand-edit-delete-btn.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"grid-row-edit-btns\">\r\n    <button  (click)=\"viewBrand()\" class=\"btn btn-info btn-sm\">View</button>\r\n    <button  (click)=\"editBrand()\" class=\"btn btn-info btn-sm\">Edit</button>\r\n    &nbsp;&nbsp;\r\n    <button  (click)=\"deleteBrand()\" class=\"btn btn-info btn-sm\">Delete</button>\r\n</span>"

/***/ }),

/***/ "./src/app/helper-components/brand-edit-delete-btn/brand-edit-delete-btn.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/helper-components/brand-edit-delete-btn/brand-edit-delete-btn.component.ts ***!
  \********************************************************************************************/
/*! exports provided: BrandEditDeleteBtnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandEditDeleteBtnComponent", function() { return BrandEditDeleteBtnComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BrandEditDeleteBtnComponent = /** @class */ (function () {
    function BrandEditDeleteBtnComponent() {
    }
    BrandEditDeleteBtnComponent.prototype.agInit = function (params) {
        this.params = params;
    };
    BrandEditDeleteBtnComponent.prototype.viewBrand = function () {
        this.params.context.componentParent.viewBrand(this.params.node.data);
    };
    BrandEditDeleteBtnComponent.prototype.editBrand = function () {
        this.params.context.componentParent.editBrand(this.params.node.data);
    };
    BrandEditDeleteBtnComponent.prototype.deleteBrand = function () {
        this.params.context.componentParent.deleteBrand(this.params.node.data);
    };
    BrandEditDeleteBtnComponent.prototype.refresh = function () {
        return false;
    };
    BrandEditDeleteBtnComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-brand-edit-delete-btn',
            template: __webpack_require__(/*! ./brand-edit-delete-btn.component.html */ "./src/app/helper-components/brand-edit-delete-btn/brand-edit-delete-btn.component.html"),
            styles: [__webpack_require__(/*! ./brand-edit-delete-btn.component.css */ "./src/app/helper-components/brand-edit-delete-btn/brand-edit-delete-btn.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BrandEditDeleteBtnComponent);
    return BrandEditDeleteBtnComponent;
}());



/***/ }),

/***/ "./src/app/helper-components/dept-edit-delete-btn/dept-edit-delete-btn.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/helper-components/dept-edit-delete-btn/dept-edit-delete-btn.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlbHBlci1jb21wb25lbnRzL2RlcHQtZWRpdC1kZWxldGUtYnRuL2RlcHQtZWRpdC1kZWxldGUtYnRuLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/helper-components/dept-edit-delete-btn/dept-edit-delete-btn.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/helper-components/dept-edit-delete-btn/dept-edit-delete-btn.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"grid-row-edit-btns\">\r\n    <!-- <button  (click)=\"viewDept()\" class=\"btn btn-info btn-sm\">View</button> -->\r\n    <button  (click)=\"viewEditDept()\" class=\"btn btn-info btn-sm\">View/Edit</button>\r\n    &nbsp;&nbsp;\r\n    <button  (click)=\"deleteDept()\" class=\"btn btn-info btn-sm\">Delete</button>\r\n</span>"

/***/ }),

/***/ "./src/app/helper-components/dept-edit-delete-btn/dept-edit-delete-btn.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/helper-components/dept-edit-delete-btn/dept-edit-delete-btn.component.ts ***!
  \******************************************************************************************/
/*! exports provided: DeptEditDeleteBtnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeptEditDeleteBtnComponent", function() { return DeptEditDeleteBtnComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DeptEditDeleteBtnComponent = /** @class */ (function () {
    function DeptEditDeleteBtnComponent() {
    }
    DeptEditDeleteBtnComponent.prototype.agInit = function (params) {
        this.params = params;
    };
    DeptEditDeleteBtnComponent.prototype.viewEditDept = function () {
        this.params.context.componentParent.viewEditDepartment(this.params.node.data);
    };
    DeptEditDeleteBtnComponent.prototype.deleteDept = function () {
        this.params.context.componentParent.deleteDepartment(this.params.node.data);
    };
    DeptEditDeleteBtnComponent.prototype.refresh = function () {
        return false;
    };
    DeptEditDeleteBtnComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dept-edit-delete-btn',
            template: __webpack_require__(/*! ./dept-edit-delete-btn.component.html */ "./src/app/helper-components/dept-edit-delete-btn/dept-edit-delete-btn.component.html"),
            styles: [__webpack_require__(/*! ./dept-edit-delete-btn.component.css */ "./src/app/helper-components/dept-edit-delete-btn/dept-edit-delete-btn.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DeptEditDeleteBtnComponent);
    return DeptEditDeleteBtnComponent;
}());



/***/ }),

/***/ "./src/app/helper-components/product-edit-delete-btn/product-edit-delete-btn.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/helper-components/product-edit-delete-btn/product-edit-delete-btn.component.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlbHBlci1jb21wb25lbnRzL3Byb2R1Y3QtZWRpdC1kZWxldGUtYnRuL3Byb2R1Y3QtZWRpdC1kZWxldGUtYnRuLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/helper-components/product-edit-delete-btn/product-edit-delete-btn.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/helper-components/product-edit-delete-btn/product-edit-delete-btn.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"grid-row-edit-btns\">\r\n    <!-- <button  (click)=\"viewDept()\" class=\"btn btn-info btn-sm\">View</button> -->\r\n    <button  (click)=\"viewEditProduct()\" class=\"btn btn-info btn-sm\">View/Edit</button>\r\n    &nbsp;&nbsp;\r\n    <button  (click)=\"deleteProduct()\" class=\"btn btn-info btn-sm\">Delete</button>\r\n</span>"

/***/ }),

/***/ "./src/app/helper-components/product-edit-delete-btn/product-edit-delete-btn.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/helper-components/product-edit-delete-btn/product-edit-delete-btn.component.ts ***!
  \************************************************************************************************/
/*! exports provided: ProductEditDeleteBtnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEditDeleteBtnComponent", function() { return ProductEditDeleteBtnComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductEditDeleteBtnComponent = /** @class */ (function () {
    function ProductEditDeleteBtnComponent() {
    }
    ProductEditDeleteBtnComponent.prototype.agInit = function (params) {
        this.params = params;
    };
    ProductEditDeleteBtnComponent.prototype.viewEditProduct = function () {
        this.params.context.componentParent.viewEditProduct(this.params.node.data);
    };
    ProductEditDeleteBtnComponent.prototype.deleteProduct = function () {
        this.params.context.componentParent.deleteProduct(this.params.node.data);
    };
    ProductEditDeleteBtnComponent.prototype.refresh = function () {
        return false;
    };
    ProductEditDeleteBtnComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-edit-delete-btn',
            template: __webpack_require__(/*! ./product-edit-delete-btn.component.html */ "./src/app/helper-components/product-edit-delete-btn/product-edit-delete-btn.component.html"),
            styles: [__webpack_require__(/*! ./product-edit-delete-btn.component.css */ "./src/app/helper-components/product-edit-delete-btn/product-edit-delete-btn.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductEditDeleteBtnComponent);
    return ProductEditDeleteBtnComponent;
}());



/***/ }),

/***/ "./src/app/helper-components/purchase-order-edit-delete-btn/purchase-order-edit-delete-btn.component.css":
/*!***************************************************************************************************************!*\
  !*** ./src/app/helper-components/purchase-order-edit-delete-btn/purchase-order-edit-delete-btn.component.css ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlbHBlci1jb21wb25lbnRzL3B1cmNoYXNlLW9yZGVyLWVkaXQtZGVsZXRlLWJ0bi9wdXJjaGFzZS1vcmRlci1lZGl0LWRlbGV0ZS1idG4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/helper-components/purchase-order-edit-delete-btn/purchase-order-edit-delete-btn.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/helper-components/purchase-order-edit-delete-btn/purchase-order-edit-delete-btn.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"grid-row-edit-btns\">\r\n    <!-- <button  (click)=\"viewDept()\" class=\"btn btn-info btn-sm\">View</button> -->\r\n    <button (click)=\"viewEditPO()\" class=\"btn btn-info btn-sm\">View/Edit</button>\r\n    &nbsp;&nbsp;\r\n    <button (click)=\"deletePO()\" class=\"btn btn-info btn-sm\">Delete</button>\r\n    &nbsp;&nbsp;\r\n    <button (click)=\"exportPO()\" class=\"btn btn-warning btn-sm\">Export/Import</button>\r\n</span>"

/***/ }),

/***/ "./src/app/helper-components/purchase-order-edit-delete-btn/purchase-order-edit-delete-btn.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/helper-components/purchase-order-edit-delete-btn/purchase-order-edit-delete-btn.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: PurchaseOrderEditDeleteBtnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseOrderEditDeleteBtnComponent", function() { return PurchaseOrderEditDeleteBtnComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PurchaseOrderEditDeleteBtnComponent = /** @class */ (function () {
    function PurchaseOrderEditDeleteBtnComponent() {
    }
    PurchaseOrderEditDeleteBtnComponent.prototype.agInit = function (params) {
        this.params = params;
    };
    PurchaseOrderEditDeleteBtnComponent.prototype.exportPO = function () {
        this.params.context.componentParent.exportPO(this.params.node.data);
    };
    PurchaseOrderEditDeleteBtnComponent.prototype.viewEditPO = function () {
        this.params.context.componentParent.viewEditPO(this.params.node.data);
    };
    PurchaseOrderEditDeleteBtnComponent.prototype.deletePO = function () {
        this.params.context.componentParent.deletePO(this.params.node.data);
    };
    PurchaseOrderEditDeleteBtnComponent.prototype.refresh = function () {
        return false;
    };
    PurchaseOrderEditDeleteBtnComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-purchase-order-edit-delete-btn',
            template: __webpack_require__(/*! ./purchase-order-edit-delete-btn.component.html */ "./src/app/helper-components/purchase-order-edit-delete-btn/purchase-order-edit-delete-btn.component.html"),
            styles: [__webpack_require__(/*! ./purchase-order-edit-delete-btn.component.css */ "./src/app/helper-components/purchase-order-edit-delete-btn/purchase-order-edit-delete-btn.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PurchaseOrderEditDeleteBtnComponent);
    return PurchaseOrderEditDeleteBtnComponent;
}());



/***/ }),

/***/ "./src/app/helper-components/stores-edit-delete-btn/stores-edit-delete-btn.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/helper-components/stores-edit-delete-btn/stores-edit-delete-btn.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlbHBlci1jb21wb25lbnRzL3N0b3Jlcy1lZGl0LWRlbGV0ZS1idG4vc3RvcmVzLWVkaXQtZGVsZXRlLWJ0bi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/helper-components/stores-edit-delete-btn/stores-edit-delete-btn.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/helper-components/stores-edit-delete-btn/stores-edit-delete-btn.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"grid-row-edit-btns\">\r\n  <button  (click)=\"editStore()\" class=\"btn btn-info btn-sm\">Edit</button>\r\n  <button  (click)=\"deleteStore()\" class=\"btn btn-info btn-sm\">Delete</button>\r\n</span>"

/***/ }),

/***/ "./src/app/helper-components/stores-edit-delete-btn/stores-edit-delete-btn.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/helper-components/stores-edit-delete-btn/stores-edit-delete-btn.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: StoresEditDeleteBtnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoresEditDeleteBtnComponent", function() { return StoresEditDeleteBtnComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StoresEditDeleteBtnComponent = /** @class */ (function () {
    function StoresEditDeleteBtnComponent() {
    }
    StoresEditDeleteBtnComponent.prototype.agInit = function (params) {
        this.params = params;
    };
    StoresEditDeleteBtnComponent.prototype.editStore = function () {
        this.params.context.componentParent.editStore(this.params.node.data);
    };
    StoresEditDeleteBtnComponent.prototype.deleteStore = function () {
        this.params.context.componentParent.deleteStore(this.params.node.data);
    };
    StoresEditDeleteBtnComponent.prototype.refresh = function () {
        return false;
    };
    StoresEditDeleteBtnComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stores-edit-delete-btn',
            template: __webpack_require__(/*! ./stores-edit-delete-btn.component.html */ "./src/app/helper-components/stores-edit-delete-btn/stores-edit-delete-btn.component.html"),
            styles: [__webpack_require__(/*! ./stores-edit-delete-btn.component.css */ "./src/app/helper-components/stores-edit-delete-btn/stores-edit-delete-btn.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StoresEditDeleteBtnComponent);
    return StoresEditDeleteBtnComponent;
}());



/***/ }),

/***/ "./src/app/helper-components/sub-type-edit-delete-btn/sub-type-edit-delete-btn.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/helper-components/sub-type-edit-delete-btn/sub-type-edit-delete-btn.component.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlbHBlci1jb21wb25lbnRzL3N1Yi10eXBlLWVkaXQtZGVsZXRlLWJ0bi9zdWItdHlwZS1lZGl0LWRlbGV0ZS1idG4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/helper-components/sub-type-edit-delete-btn/sub-type-edit-delete-btn.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/helper-components/sub-type-edit-delete-btn/sub-type-edit-delete-btn.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"grid-row-edit-btns\">\r\n    <!-- <button  (click)=\"viewDept()\" class=\"btn btn-info btn-sm\">View</button> -->\r\n    <button  (click)=\"viewEditSubType()\" class=\"btn btn-info btn-sm\">View/Edit</button>\r\n    &nbsp;&nbsp;\r\n    <button  (click)=\"deleteSubType()\" class=\"btn btn-info btn-sm\">Delete</button>\r\n</span>"

/***/ }),

/***/ "./src/app/helper-components/sub-type-edit-delete-btn/sub-type-edit-delete-btn.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/helper-components/sub-type-edit-delete-btn/sub-type-edit-delete-btn.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: SubTypeEditDeleteBtnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubTypeEditDeleteBtnComponent", function() { return SubTypeEditDeleteBtnComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SubTypeEditDeleteBtnComponent = /** @class */ (function () {
    function SubTypeEditDeleteBtnComponent() {
    }
    SubTypeEditDeleteBtnComponent.prototype.agInit = function (params) {
        this.params = params;
    };
    SubTypeEditDeleteBtnComponent.prototype.viewEditSubType = function () {
        this.params.context.componentParent.viewEditSubType(this.params.node.data);
    };
    SubTypeEditDeleteBtnComponent.prototype.deleteSubType = function () {
        this.params.context.componentParent.deleteSubType(this.params.node.data);
    };
    SubTypeEditDeleteBtnComponent.prototype.refresh = function () {
        return false;
    };
    SubTypeEditDeleteBtnComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sub-type-edit-delete-btn',
            template: __webpack_require__(/*! ./sub-type-edit-delete-btn.component.html */ "./src/app/helper-components/sub-type-edit-delete-btn/sub-type-edit-delete-btn.component.html"),
            styles: [__webpack_require__(/*! ./sub-type-edit-delete-btn.component.css */ "./src/app/helper-components/sub-type-edit-delete-btn/sub-type-edit-delete-btn.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SubTypeEditDeleteBtnComponent);
    return SubTypeEditDeleteBtnComponent;
}());



/***/ }),

/***/ "./src/app/helper-components/swrange-edit-delete-btn/swrange-edit-delete-btn.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/helper-components/swrange-edit-delete-btn/swrange-edit-delete-btn.component.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlbHBlci1jb21wb25lbnRzL3N3cmFuZ2UtZWRpdC1kZWxldGUtYnRuL3N3cmFuZ2UtZWRpdC1kZWxldGUtYnRuLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/helper-components/swrange-edit-delete-btn/swrange-edit-delete-btn.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/helper-components/swrange-edit-delete-btn/swrange-edit-delete-btn.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"grid-row-edit-btns\">\r\n    <button  (click)=\"viewSWRange()\" class=\"btn btn-info btn-sm\">View</button>\r\n    <button  (click)=\"editSWRange()\" class=\"btn btn-info btn-sm\">Edit</button>\r\n    &nbsp;&nbsp;\r\n    <button  (click)=\"deleteSWRange()\" class=\"btn btn-info btn-sm\">Delete</button>\r\n</span>"

/***/ }),

/***/ "./src/app/helper-components/swrange-edit-delete-btn/swrange-edit-delete-btn.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/helper-components/swrange-edit-delete-btn/swrange-edit-delete-btn.component.ts ***!
  \************************************************************************************************/
/*! exports provided: SwrangeEditDeleteBtnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwrangeEditDeleteBtnComponent", function() { return SwrangeEditDeleteBtnComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SwrangeEditDeleteBtnComponent = /** @class */ (function () {
    function SwrangeEditDeleteBtnComponent() {
    }
    SwrangeEditDeleteBtnComponent.prototype.agInit = function (params) {
        this.params = params;
    };
    SwrangeEditDeleteBtnComponent.prototype.viewSWRange = function () {
        this.params.context.componentParent.viewSWRange(this.params.node.data);
    };
    SwrangeEditDeleteBtnComponent.prototype.editSWRange = function () {
        this.params.context.componentParent.editSWRange(this.params.node.data);
    };
    SwrangeEditDeleteBtnComponent.prototype.deleteSWRange = function () {
        this.params.context.componentParent.deleteSWRange(this.params.node.data);
    };
    SwrangeEditDeleteBtnComponent.prototype.refresh = function () {
        return false;
    };
    SwrangeEditDeleteBtnComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-swrange-edit-delete-btn',
            template: __webpack_require__(/*! ./swrange-edit-delete-btn.component.html */ "./src/app/helper-components/swrange-edit-delete-btn/swrange-edit-delete-btn.component.html"),
            styles: [__webpack_require__(/*! ./swrange-edit-delete-btn.component.css */ "./src/app/helper-components/swrange-edit-delete-btn/swrange-edit-delete-btn.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SwrangeEditDeleteBtnComponent);
    return SwrangeEditDeleteBtnComponent;
}());



/***/ }),

/***/ "./src/app/helper-components/type-edit-delete-btn/type-edit-delete-btn.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/helper-components/type-edit-delete-btn/type-edit-delete-btn.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlbHBlci1jb21wb25lbnRzL3R5cGUtZWRpdC1kZWxldGUtYnRuL3R5cGUtZWRpdC1kZWxldGUtYnRuLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/helper-components/type-edit-delete-btn/type-edit-delete-btn.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/helper-components/type-edit-delete-btn/type-edit-delete-btn.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"grid-row-edit-btns\">\r\n    <!-- <button  (click)=\"viewDept()\" class=\"btn btn-info btn-sm\">View</button> -->\r\n    <button  (click)=\"viewEditType()\" class=\"btn btn-info btn-sm\">View/Edit</button>\r\n    &nbsp;&nbsp;\r\n    <button  (click)=\"deleteType()\" class=\"btn btn-info btn-sm\">Delete</button>\r\n</span>"

/***/ }),

/***/ "./src/app/helper-components/type-edit-delete-btn/type-edit-delete-btn.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/helper-components/type-edit-delete-btn/type-edit-delete-btn.component.ts ***!
  \******************************************************************************************/
/*! exports provided: TypeEditDeleteBtnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeEditDeleteBtnComponent", function() { return TypeEditDeleteBtnComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TypeEditDeleteBtnComponent = /** @class */ (function () {
    function TypeEditDeleteBtnComponent() {
    }
    TypeEditDeleteBtnComponent.prototype.agInit = function (params) {
        this.params = params;
    };
    TypeEditDeleteBtnComponent.prototype.viewEditType = function () {
        this.params.context.componentParent.viewEditDType(this.params.node.data);
    };
    TypeEditDeleteBtnComponent.prototype.deleteType = function () {
        this.params.context.componentParent.deleteDType(this.params.node.data);
    };
    TypeEditDeleteBtnComponent.prototype.refresh = function () {
        return false;
    };
    TypeEditDeleteBtnComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-type-edit-delete-btn',
            template: __webpack_require__(/*! ./type-edit-delete-btn.component.html */ "./src/app/helper-components/type-edit-delete-btn/type-edit-delete-btn.component.html"),
            styles: [__webpack_require__(/*! ./type-edit-delete-btn.component.css */ "./src/app/helper-components/type-edit-delete-btn/type-edit-delete-btn.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TypeEditDeleteBtnComponent);
    return TypeEditDeleteBtnComponent;
}());



/***/ }),

/***/ "./src/app/helpers/brand.ts":
/*!**********************************!*\
  !*** ./src/app/helpers/brand.ts ***!
  \**********************************/
/*! exports provided: Brand, Vendor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Brand", function() { return Brand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vendor", function() { return Vendor; });
var Brand = /** @class */ (function () {
    function Brand() {
        this.ID = 0;
        this.VendorID = 0;
        this.VendorName = '';
        this.BrandName = '';
        this.VendorDescription = '';
        this.VendorAddress = '';
        this.BrandDescription = '';
        this.SizeWidthAvailable = [];
        this.SizeWidthID = 0;
        this.SizeWidthName = '';
        this.SizeWidth = [];
        this.RangeType = '';
    }
    return Brand;
}());

var Vendor = /** @class */ (function () {
    function Vendor(ID) {
        this.ID = 0;
        this.VendorName = '';
        this.VendorDescription = '';
        this.VendorAddress = '';
    }
    return Vendor;
}());



/***/ }),

/***/ "./src/app/helpers/department.ts":
/*!***************************************!*\
  !*** ./src/app/helpers/department.ts ***!
  \***************************************/
/*! exports provided: Department, DType, SubType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Department", function() { return Department; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DType", function() { return DType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubType", function() { return SubType; });
var Department = /** @class */ (function () {
    function Department(ID, DepartmentName) {
        this.ID = 0;
        this.DepartmentName = '';
        this.DepartmentDesc = '';
        this.DTypes = [];
    }
    return Department;
}());

var DType = /** @class */ (function () {
    function DType(DepartmentID, ID, TypeName) {
        this.ID = 0;
        this.DepartmentID = DepartmentID;
        this.TypeName = '';
        this.TypeDesc = '';
        this.SubTypes = [];
    }
    return DType;
}());

var SubType = /** @class */ (function () {
    function SubType(TypeID, ID, SubTypeName) {
        this.ID = 0;
        this.TypeID = TypeID;
        this.SubTypeName = '';
        this.SubTypeDesc = '';
    }
    return SubType;
}());



/***/ }),

/***/ "./src/app/helpers/poTypes.ts":
/*!************************************!*\
  !*** ./src/app/helpers/poTypes.ts ***!
  \************************************/
/*! exports provided: POTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POTypes", function() { return POTypes; });
var POTypes = /** @class */ (function () {
    function POTypes(ID) {
        this.ID = 0;
        this.POType = '';
    }
    return POTypes;
}());



/***/ }),

/***/ "./src/app/helpers/product.ts":
/*!************************************!*\
  !*** ./src/app/helpers/product.ts ***!
  \************************************/
/*! exports provided: ProductTypes, StratusTypes, StratusSubTypes1, StratusSubTypes2, ColorGroup, SizeRangeTypes, SmallSizes, LargeSizes, WidthTypes, AvailableWidths, AvailableCategories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductTypes", function() { return ProductTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StratusTypes", function() { return StratusTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StratusSubTypes1", function() { return StratusSubTypes1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StratusSubTypes2", function() { return StratusSubTypes2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorGroup", function() { return ColorGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SizeRangeTypes", function() { return SizeRangeTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmallSizes", function() { return SmallSizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LargeSizes", function() { return LargeSizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidthTypes", function() { return WidthTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvailableWidths", function() { return AvailableWidths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvailableCategories", function() { return AvailableCategories; });
var ProductTypes = /** @class */ (function () {
    function ProductTypes(ID) {
        this.ID = 0;
        this.ProductType = '';
        this.DefaultSizeRangeType = '';
    }
    return ProductTypes;
}());

var StratusTypes = /** @class */ (function () {
    function StratusTypes(ID) {
        this.ID = 0;
        this.ProductTypeID = 0;
        this.StratusType = '';
    }
    return StratusTypes;
}());

var StratusSubTypes1 = /** @class */ (function () {
    function StratusSubTypes1(ID) {
        this.ID = 0;
        this.StratusTypeID = 0;
        this.StratusSubType1 = '';
    }
    return StratusSubTypes1;
}());

var StratusSubTypes2 = /** @class */ (function () {
    function StratusSubTypes2(ID) {
        this.ID = 0;
        this.StratusSubType1ID = 0;
        this.StratusSubType2 = '';
    }
    return StratusSubTypes2;
}());

var ColorGroup = /** @class */ (function () {
    function ColorGroup(ID) {
        this.ID = 0;
        this.ColorGroupName = '';
    }
    return ColorGroup;
}());

var SizeRangeTypes = /** @class */ (function () {
    function SizeRangeTypes(ID) {
        this.ID = 0;
        this.SizeRangeType = '';
        this.DefaultSmall = '';
        this.DefaultLarge = '';
    }
    return SizeRangeTypes;
}());

var SmallSizes = /** @class */ (function () {
    function SmallSizes(ID) {
        this.ID = 0;
        this.SmallSize = '';
    }
    return SmallSizes;
}());

var LargeSizes = /** @class */ (function () {
    function LargeSizes(ID) {
        this.ID = 0;
        this.LargeSize = '';
    }
    return LargeSizes;
}());

var WidthTypes = /** @class */ (function () {
    function WidthTypes(ID) {
        this.ID = 0;
        this.WidthType = '';
    }
    return WidthTypes;
}());

var AvailableWidths = /** @class */ (function () {
    function AvailableWidths(ID) {
        this.ID = 0;
        this.WidthTypeID = 0;
        this.WidthName = '';
        this.isAvailable = false;
    }
    return AvailableWidths;
}());

var AvailableCategories = /** @class */ (function () {
    function AvailableCategories(ID) {
        this.ID = 0;
        this.cartCategory = '';
        this.isAvailable = false;
    }
    return AvailableCategories;
}());



/***/ }),

/***/ "./src/app/helpers/purchase-order.ts":
/*!*******************************************!*\
  !*** ./src/app/helpers/purchase-order.ts ***!
  \*******************************************/
/*! exports provided: PurchaseOrder, Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseOrder", function() { return PurchaseOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
var PurchaseOrder = /** @class */ (function () {
    function PurchaseOrder() {
        this.Notes = '';
        this.PurchaseOrderDescription = '';
        this.products = [];
    }
    return PurchaseOrder;
}());

var Product = /** @class */ (function () {
    // public Cost: string;
    // public Retail: string;
    // public Quantity: number;
    function Product(PurchaseOrderID) {
        this.PurchaseOrderID = PurchaseOrderID;
        this.SizeWidthValues = [];
        this.UPCValues = [];
        // this.BPValues = [{ BulletPoint: '' }, { BulletPoint: '' }, { BulletPoint: '' }, { BulletPoint: '' }, { BulletPoint: '' }, { BulletPoint: '' }, { BulletPoint: '' }, { BulletPoint: '' }];
        this.SizeWidthID = 0;
        this.DepartmentID = 0;
        this.TypeID = 0;
        this.SubTypeID = 0;
        this.RangeType = '';
        this.DepartmentName = '';
        this.SizeWidthName = '';
        this.pWidth = 'No';
        this.TypeName = '';
        this.SubTypeName = '';
        this.Cost = null;
        this.Retail = null;
        this.StyleName = '';
        this.ColorName = '';
        this.Quantity = 0;
        this.ProductDescription = '';
        this.Style = '';
        this.ProductTypeID = 1;
        this.StratusProductTypeID = 0;
        this.StratusSubType1ID = 0;
        this.StratusSubType2ID = 0;
        this.Sale = 'No';
        this.selectedAvailableWidths = [];
        this.selectedSizes = [];
        this.selectedCategories = [];
        this.formulatedCategory = '';
        this.TDCartExtra_field_2 = '';
        this.BulletPoints = [{ text: '' }, { text: '' }, { text: '' }, { text: '' }, { text: '' }, { text: '' }, { text: '' }, { text: '' }];
        this.LongDescription = "";
    }
    return Product;
}());



/***/ }),

/***/ "./src/app/helpers/store.ts":
/*!**********************************!*\
  !*** ./src/app/helpers/store.ts ***!
  \**********************************/
/*! exports provided: Store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
var Store = /** @class */ (function () {
    function Store(ID, StoreName) {
        this.ID = 0;
        this.StoreName = '';
        this.StoreNumber = '';
        this.StoreAddress = '';
    }
    return Store;
}());



/***/ }),

/***/ "./src/app/helpers/sw-range.ts":
/*!*************************************!*\
  !*** ./src/app/helpers/sw-range.ts ***!
  \*************************************/
/*! exports provided: SwRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwRange", function() { return SwRange; });
var SwRange = /** @class */ (function () {
    function SwRange(ID, SizeWidthName) {
        this.h = 6;
        this.w = 20;
        this.toExcelHeaderString = function (rows) {
            return this.toExcelHeaderArray(rows).join(",");
        };
        this.toExcelHeaderArray = function (rows) {
            var excelHeaderArr = [];
            for (var index = 1; index <= rows; index++) {
                excelHeaderArr.push(this.toExcelHeader(index));
            }
            return excelHeaderArr;
        };
        this.toExcelHeader = function (index) {
            if (index <= 0) {
                throw new Error("index must be 1 or greater");
            }
            // index--;
            var charCodeOfA = ("a").charCodeAt(0); // you could hard code to 97
            var charCodeOfZ = ("z").charCodeAt(0); // you could hard code to 122
            var excelStr = "";
            var base24Str = (index).toString(charCodeOfZ - charCodeOfA + 1);
            for (var base24StrIndex = 0; base24StrIndex < base24Str.length; base24StrIndex++) {
                var base24Char = base24Str[base24StrIndex];
                var alphabetIndex = (base24Char * 1 == base24Char) ? base24Char : (base24Char.charCodeAt(0) - charCodeOfA + 10);
                // bizarre thing, A==1 in first digit, A==0 in other digits
                if (base24StrIndex == 0) {
                    alphabetIndex -= 1;
                }
                excelStr += String.fromCharCode(charCodeOfA * 1 + alphabetIndex * 1);
            }
            return excelStr.toUpperCase();
        };
        this.ID = 0;
        this.SizeWidthName = '';
        this.SizeWidth = [];
        var header = this.toExcelHeaderArray(20);
        for (var y = 0; y < 6; y++) {
            var objv = '';
            for (var x = 0; x < 20; x++) {
                // var obj = {label:'',size:''};
                if (x == 0) {
                    objv = objv + '{"';
                }
                if (y == 0 && x == 0) {
                    objv = objv + header[x] + '":"--"';
                }
                else {
                    if (x == 0) {
                        objv = objv + header[x] + '":""';
                    }
                    else {
                        objv = objv + ',"' + header[x] + '":""';
                    }
                }
            }
            if (y == 5)
                objv = objv + "}";
            else {
                objv = objv + "}";
            }
            //  console.log(objv);
            var objectValue = JSON.parse(objv);
            // console.log(obj);
            this.SizeWidth.push(objectValue);
        }
        // for(var i=0; i < this.h ;i++){
        //     this.SizeWidth[i] = [];
        //     for(var j=0; j < this.w ;j++){
        //         if( i===1 && j=== 1){
        //             this.SizeWidth[i][j] = "-1";
        //         }
        //         else {
        //             this.SizeWidth[i][j] = '';
        //         }
        //     }
        // }
    }
    return SwRange;
}());



/***/ }),

/***/ "./src/app/services/IO.service.ts":
/*!****************************************!*\
  !*** ./src/app/services/IO.service.ts ***!
  \****************************************/
/*! exports provided: IOService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IOService", function() { return IOService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





// import { json } from 'node_modules_0827/@angular-devkit/core/src';
var IOService = /** @class */ (function () {
    function IOService(httpClient) {
        this.httpClient = httpClient;
        this.uploadURL = 'assets/api/fileIO.php';
    }
    // uploadTDCartExportOne(data): Observable<any> {
    //   return this.httpClient.post(this.uploadURL, data, {
    //     headers: new HttpHeaders().set('enctype', 'multipart/form-data'),
    //     responseType: 'blob' as 'json',
    //     observe: 'response'
    //     // headers: new HttpHeaders().set('enctype', 'multipart/form-data'),
    //     // responseType: 'json',
    //   }).pipe(
    //     map(result => {
    //       console.log(result);
    //       console.log(result.headers.get('Content-Disposition'));
    //       return result;
    //       // var cd = result.headers.get('Content-Disposition');
    //       // if (cd == null) {
    //       //   return "NULL DATA";
    //       // }
    //       // else {
    //       //   return result;
    //       // }
    //     }));
    // }
    IOService.prototype.uploadTDCartExportOne = function (data) {
        return this.httpClient.post(this.uploadURL, data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('enctype', 'multipart/form-data'),
            responseType: 'blob'
            // headers: new HttpHeaders().set('enctype', 'multipart/form-data'),
            // responseType: 'json',
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('exportPO', [])));
    };
    IOService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            //this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    IOService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], IOService);
    return IOService;
}());



/***/ }),

/***/ "./src/app/services/brand.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/brand.service.ts ***!
  \*******************************************/
/*! exports provided: BrandService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandService", function() { return BrandService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _helpers_brand__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/brand */ "./src/app/helpers/brand.ts");






var BrandService = /** @class */ (function () {
    function BrandService(httpClient) {
        this.httpClient = httpClient;
        this.isEditBrand = false;
        this.isCreateBrand = false;
        this.isViewBrand = false;
        this.brandUrl = 'assets/api/brand.php';
        this.selectedBrand = new _helpers_brand__WEBPACK_IMPORTED_MODULE_5__["Brand"]();
    }
    BrandService.prototype.getAllBrands = function () {
        var obj = { 'action': 'getAllBrands', brand: { id: 0 } };
        return this.httpClient.post(this.brandUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
            responseType: 'json',
            params: obj
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getAllBrands', [])));
    };
    BrandService.prototype.getBrand = function (brandID) {
        var obj = { 'action': 'getBrand', brandID: brandID };
        return this.httpClient.post(this.brandUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
            responseType: 'json',
            params: obj
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getBrand', [])));
    };
    BrandService.prototype.getAllBrandsForVID = function (vid) {
        var obj = { 'action': 'getAllBrandsForVID', vid: vid };
        return this.httpClient.post(this.brandUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
            responseType: 'json',
            params: obj
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getAllBrandsForVID', [])));
    };
    BrandService.prototype.getAllVendors = function () {
        var obj = { 'action': 'getAllVendors', vendor: { id: 0 } };
        return this.httpClient.post(this.brandUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
            responseType: 'json',
            params: obj
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getAllBrands', [])));
    };
    BrandService.prototype.addBrand = function (brand) {
        var obj = { 'action': 'addNewBrand', brand: brand };
        return this.httpClient.post(this.brandUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
            responseType: 'json',
            params: obj
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addBrand', [])));
    };
    BrandService.prototype.updateBrand = function (brand) {
        var obj = { 'action': 'updateBrand', brand: brand };
        return this.httpClient.post(this.brandUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
            responseType: 'json',
            params: obj
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('udateBrand', [])));
    };
    BrandService.prototype.deleteBrand = function (brand) {
        var obj = { 'action': 'deleteBrand', brand: brand };
        return this.httpClient.post(this.brandUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
            responseType: 'json',
            params: obj
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteBrand', [])));
    };
    BrandService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            //this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    BrandService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BrandService);
    return BrandService;
}());



/***/ }),

/***/ "./src/app/services/dataservice.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/dataservice.service.ts ***!
  \*************************************************/
/*! exports provided: DataserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataserviceService", function() { return DataserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var DataserviceService = /** @class */ (function () {
    function DataserviceService(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = "assets/api/";
        this.getLoggedInName = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    DataserviceService.prototype.userlogin = function (username, password) {
        var _this = this;
        return this.httpClient.post(this.baseUrl + '/login.php', { username: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Usermodule) {
            _this.setToken(Usermodule[0].name);
            _this.getLoggedInName.emit(true);
            return Usermodule;
        }));
    };
    DataserviceService.prototype.userregistration = function (name, email, pwd, mobile) {
        return this.httpClient.post(this.baseUrl + '/registration.php', { name: name, email: email, pwd: pwd, mobile: mobile })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (Usermodule) {
            return Usermodule;
        }));
    };
    //token
    DataserviceService.prototype.setToken = function (token) {
        localStorage.setItem('token', token);
    };
    DataserviceService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    DataserviceService.prototype.deleteToken = function () {
        localStorage.removeItem('token');
    };
    DataserviceService.prototype.isLoggedIn = function () {
        var usertoken = this.getToken();
        if (usertoken != null) {
            return true;
        }
        return false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], DataserviceService.prototype, "getLoggedInName", void 0);
    DataserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], DataserviceService);
    return DataserviceService;
}());



/***/ }),

/***/ "./src/app/services/department.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/department.service.ts ***!
  \************************************************/
/*! exports provided: DepartmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentService", function() { return DepartmentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _helpers_department__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/department */ "./src/app/helpers/department.ts");






var DepartmentService = /** @class */ (function () {
    function DepartmentService(httpClient) {
        this.httpClient = httpClient;
        this.isEdit = false;
        this.isCreate = false;
        this.isView = false;
        this.departmentUrl = 'assets/api/department.php';
        this.selectedDepartment = new _helpers_department__WEBPACK_IMPORTED_MODULE_5__["Department"]();
    }
    DepartmentService.prototype.getAllDepartments = function () {
        var obj = { 'action': 'getAllDepartments', dept: { id: 0 } };
        return this.httpClient.post(this.departmentUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
            responseType: 'json',
            params: obj
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getAllDepartments', [])));
    };
    DepartmentService.prototype.getDepartment = function (deptID) {
        var obj = { 'action': 'getDepartment', deptID: deptID };
        return this.httpClient.post(this.departmentUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
            responseType: 'json',
            params: obj
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getDepartment', [])));
    };
    DepartmentService.prototype.getTypes = function (deptID) {
        var obj = { 'action': 'getTypes', deptID: deptID };
        return this.httpClient.post(this.departmentUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
            responseType: 'json',
            params: obj
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getTypes', [])));
    };
    DepartmentService.prototype.getType = function (typeID) {
        var obj = { 'action': 'getType', typeID: typeID };
        return this.httpClient.post(this.departmentUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
            responseType: 'json',
            params: obj
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getType', [])));
    };
    DepartmentService.prototype.getSubTypes = function (typeID) {
        var obj = { 'action': 'getSubTypes', typeID: typeID };
        return this.httpClient.post(this.departmentUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
            responseType: 'json',
            params: obj
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getSubTypes', [])));
    };
    DepartmentService.prototype.getSubType = function (subTypeID) {
        var obj = { 'action': 'getSubType', subTypeID: subTypeID };
        return this.httpClient.post(this.departmentUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
            responseType: 'json',
            params: obj
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getSubType', [])));
    };
    DepartmentService.prototype.addDepartment = function (dept) {
        var obj = { 'action': 'addNewDepartment', dept: dept };
        return this.httpClient.post(this.departmentUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
            responseType: 'json',
            params: obj
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addDepartment', [])));
    };
    DepartmentService.prototype.addNewType = function (dtype) {
        var obj = { 'action': 'addNewType', dtype: dtype };
        return this.httpClient.post(this.departmentUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
            responseType: 'json',
            params: obj
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addType', [])));
    };
    DepartmentService.prototype.addNewSubType = function (subType) {
        var obj = { 'action': 'addNewSubType', subType: subType };
        return this.httpClient.post(this.departmentUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
            responseType: 'json',
            params: obj
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addSubType', [])));
    };
    DepartmentService.prototype.updateDepartment = function (dept) {
        var obj = { 'action': 'updateDepartment', dept: dept };
        return this.httpClient.post(this.departmentUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
            responseType: 'json',
            params: obj
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateDepartment', [])));
    };
    DepartmentService.prototype.updateType = function (dtype) {
        var obj = { 'action': 'updateType', dtype: dtype };
        return this.httpClient.post(this.departmentUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
            responseType: 'json',
            params: obj
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateType', [])));
    };
    DepartmentService.prototype.updateSubType = function (subType) {
        var obj = { 'action': 'updateSubType', subType: subType };
        return this.httpClient.post(this.departmentUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
            responseType: 'json',
            params: obj
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateSubType', [])));
    };
    DepartmentService.prototype.deleteDepartment = function (dept) {
        var obj = { 'action': 'deleteDepartment', dept: dept };
        return this.httpClient.post(this.departmentUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
            responseType: 'json',
            params: obj
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteDepartment', [])));
    };
    DepartmentService.prototype.deleteType = function (dtypeID) {
        var obj = { 'action': 'deleteType', dtypeID: dtypeID };
        return this.httpClient.post(this.departmentUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
            responseType: 'json',
            params: obj
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteType', [])));
    };
    DepartmentService.prototype.deleteSubType = function (subTypeID) {
        var obj = { 'action': 'deleteSubType', subTypeID: subTypeID };
        return this.httpClient.post(this.departmentUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
            responseType: 'json',
            params: obj
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteSubType', [])));
    };
    DepartmentService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            //this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    DepartmentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DepartmentService);
    return DepartmentService;
}());



/***/ }),

/***/ "./src/app/services/po-type.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/po-type.service.ts ***!
  \*********************************************/
/*! exports provided: PoTypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoTypeService", function() { return PoTypeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _helpers_poTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/poTypes */ "./src/app/helpers/poTypes.ts");






var PoTypeService = /** @class */ (function () {
    function PoTypeService(httpClient) {
        this.httpClient = httpClient;
        this.isEditPOType = false;
        this.isCreatePOType = false;
        this.isViewPOType = false;
        this.poTypeUrl = 'assets/api/potypes.php';
        this.selectedPOType = new _helpers_poTypes__WEBPACK_IMPORTED_MODULE_5__["POTypes"]();
    }
    PoTypeService.prototype.getAllPOTypes = function () {
        var obj = { 'action': 'getAllPOTypes', potype: { id: 0 } };
        return this.httpClient.post(this.poTypeUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
            responseType: 'json',
            params: obj
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getAllPOTypes', [])));
    };
    PoTypeService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            //this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    PoTypeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PoTypeService);
    return PoTypeService;
}());



/***/ }),

/***/ "./src/app/services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _helpers_product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/product */ "./src/app/helpers/product.ts");






var ProductService = /** @class */ (function () {
    function ProductService(httpClient) {
        this.httpClient = httpClient;
        this.isEditProductType = false;
        this.isCreateProductType = false;
        this.isViewProductType = false;
        this.productUrl = 'assets/api/product.php';
        this.selectedProductType = new _helpers_product__WEBPACK_IMPORTED_MODULE_5__["ProductTypes"]();
    }
    ProductService.prototype.getAllProductTypes = function () {
        var obj = { 'action': 'getAllProductTypes', producttype: { id: 0 } };
        return this.httpClient.post(this.productUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
            responseType: 'json',
            params: obj
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getAllProductTypes', [])));
    };
    ProductService.prototype.getAllColorGroups = function () {
        var obj = { 'action': 'getAllColorGroups', colorGroup: { id: 0 } };
        return this.httpClient.post(this.productUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
            responseType: 'json',
            params: obj
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getAllColorGroups', [])));
    };
    ProductService.prototype.getStratusTypesForProduct = function (productTypeID) {
        var obj = { 'action': 'getStratusTypesForProduct', productTypeID: productTypeID };
        return this.httpClient.post(this.productUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
            responseType: 'json',
            params: obj
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getStratusTypesForProduct', [])));
    };
    ProductService.prototype.getStratusSubType1ForST = function (stratusTypeID) {
        var obj = { 'action': 'getStratusSubType1ForST', stratusTypeID: stratusTypeID };
        return this.httpClient.post(this.productUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
            responseType: 'json',
            params: obj
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getStratusSubType1ForST', [])));
    };
    ProductService.prototype.getStratusSubType2ForType1 = function (stratusSubType1ID) {
        var obj = { 'action': 'getStratusSubType2ForType1', stratusSubType1ID: stratusSubType1ID };
        return this.httpClient.post(this.productUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
            responseType: 'json',
            params: obj
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getStratusSubType2ForType1', [])));
    };
    ProductService.prototype.getSizeRangeTypeForProduct = function (productTypeID) {
        var obj = { 'action': 'getSizeRangeTypeForProduct', productTypeID: productTypeID };
        return this.httpClient.post(this.productUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
            responseType: 'json',
            params: obj
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getSizeRangeTypeForProduct', [])));
    };
    ProductService.prototype.getSmallSizeForSizeRange = function (SizeRangeTypeID) {
        var obj = { 'action': 'getSmallSizeForSizeRange', SizeRangeTypeID: SizeRangeTypeID };
        return this.httpClient.post(this.productUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
            responseType: 'json',
            params: obj
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getSmallSizeForSizeRange', [])));
    };
    ProductService.prototype.getLargeSizeForSizeRange = function (SizeRangeTypeID) {
        var obj = { 'action': 'getLargeSizeForSizeRange', SizeRangeTypeID: SizeRangeTypeID };
        return this.httpClient.post(this.productUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
            responseType: 'json',
            params: obj
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getLargeSizeForSizeRange', [])));
    };
    ProductService.prototype.getAllSizesForSizeRange = function (SizeRangeTypeID) {
        var obj = { 'action': 'getAllSizesForSizeRange', SizeRangeTypeID: SizeRangeTypeID };
        return this.httpClient.post(this.productUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
            responseType: 'json',
            params: obj
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getAllSizesForSizeRange', [])));
    };
    ProductService.prototype.getWidthTypeOptions = function () {
        var obj = { 'action': 'getWidthTypeOptions' };
        return this.httpClient.post(this.productUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
            responseType: 'json',
            params: obj
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getWidthTypeOptions', [])));
    };
    ProductService.prototype.getAvailableWidthsForWidthType = function (WidthTypeID) {
        var obj = { 'action': 'getAvailableWidthsForWidthType', WidthTypeID: WidthTypeID };
        return this.httpClient.post(this.productUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
            responseType: 'json',
            params: obj
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getAvailableWidthsForWidthType', [])));
    };
    ProductService.prototype.getCategoriesFrom3DCartInventory = function (VendorName) {
        var obj = { 'action': 'getCategoriesFrom3DCartInventory', VendorName: VendorName };
        return this.httpClient.post(this.productUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
            responseType: 'json',
            params: obj
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getCategoriesFrom3DCartInventory', [])));
    };
    ProductService.prototype.get3DCartCategories = function () {
        var obj = { 'action': 'get3DCartCategories' };
        return this.httpClient.post(this.productUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
            responseType: 'json',
            params: obj
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('get3DCartCategories', [])));
    };
    ProductService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            //this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/services/purchase-order.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/purchase-order.service.ts ***!
  \****************************************************/
/*! exports provided: PurchaseOrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseOrderService", function() { return PurchaseOrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _helpers_purchase_order__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/purchase-order */ "./src/app/helpers/purchase-order.ts");






var PurchaseOrderService = /** @class */ (function () {
    function PurchaseOrderService(httpClient) {
        this.httpClient = httpClient;
        this.poUrl = 'assets/api/purchaseOrder.php';
        this.exportUrl = 'assets/api/exportPO.php';
        this.isEdit = false;
        this.isCreate = false;
        this.isView = false;
        this.selectedPO = new _helpers_purchase_order__WEBPACK_IMPORTED_MODULE_5__["PurchaseOrder"]();
    }
    PurchaseOrderService.prototype.getAllPurchaseOrders = function () {
        var obj = { 'action': 'getAllPurchaseOrders', po: { id: 0 } };
        return this.httpClient.post(this.poUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
            responseType: 'json',
            params: obj
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getAllPurchaseOrders', [])));
    };
    PurchaseOrderService.prototype.getPurchaseOrder = function (poID) {
        var obj = { 'action': 'getPurchaseOrder', poID: poID };
        return this.httpClient.post(this.poUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
            responseType: 'json',
            params: obj
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getPurchaseOrder', [])));
    };
    PurchaseOrderService.prototype.getProducts = function (poID) {
        var obj = { 'action': 'getProducts', poID: poID };
        return this.httpClient.post(this.poUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
            responseType: 'json',
            params: obj
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getProducts', [])));
    };
    PurchaseOrderService.prototype.getProduct = function (productID) {
        var obj = { 'action': 'getProduct', productID: productID };
        return this.httpClient.post(this.poUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
            responseType: 'json',
            params: obj
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getProduct', [])));
    };
    PurchaseOrderService.prototype.addPurchaseOrder = function (po) {
        var obj = { 'action': 'addNewPurchaseOrder', po: po };
        return this.httpClient.post(this.poUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
            responseType: 'json',
            params: obj
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addPurchaseOrder', [])));
    };
    PurchaseOrderService.prototype.addProduct = function (product) {
        var obj = { 'action': 'addNewProduct', product: product };
        return this.httpClient.post(this.poUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
            responseType: 'json',
            params: obj
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addNewProduct', [])));
    };
    PurchaseOrderService.prototype.updatePurchaseOrder = function (po) {
        var obj = { 'action': 'updatePurchaseOrder', po: po };
        return this.httpClient.post(this.poUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
            responseType: 'json',
            params: obj
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updatePurchaseOrder', [])));
    };
    PurchaseOrderService.prototype.updateProduct = function (product) {
        var obj = { 'action': 'updateProduct', product: product };
        return this.httpClient.post(this.poUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
            responseType: 'json',
            params: obj
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateProduct', [])));
    };
    PurchaseOrderService.prototype.deletePurchaseOrder = function (po) {
        var obj = { 'action': 'deletePurchaseOrder', po: po };
        return this.httpClient.post(this.poUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
            responseType: 'json',
            params: obj
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deletePurchaseOrder', [])));
    };
    PurchaseOrderService.prototype.deleteProduct = function (product) {
        var obj = { 'action': 'deleteProduct', product: product };
        return this.httpClient.post(this.poUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
            responseType: 'json',
            params: obj
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteProduct', [])));
    };
    PurchaseOrderService.prototype.exportPO = function (poID) {
        var obj = { 'action': 'exportPO', poID: poID };
        return this.httpClient.post(this.exportUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'),
            responseType: 'blob',
            params: obj
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('exportPO', [])));
        //   this.httpClient.get(this.exportUrl, {
        //     headers: new HttpHeaders().set('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'),
        //     params:obj 
        // }).pipe(  res => res).subscribe(
        //     (data: any) => {
        //         // oneTimeAccessToken = data.oneTimeToken;
        //         // return 1;
        //     },
        //      error => '', //this.oidcSecurityService.handleError(error),
        //     () => {
        //         // console.log(`open DownloadFile for file ${id}: ${this.actionUrl}${oneTimeAccessToken}/${id}`);
        //         window.open(`${this.exportUrl}`);
        //     });
        //     return;
    };
    PurchaseOrderService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            //this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    PurchaseOrderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PurchaseOrderService);
    return PurchaseOrderService;
}());



/***/ }),

/***/ "./src/app/services/size-width.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/size-width.service.ts ***!
  \************************************************/
/*! exports provided: SizeWidthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SizeWidthService", function() { return SizeWidthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var SizeWidthService = /** @class */ (function () {
    function SizeWidthService(httpClient) {
        this.httpClient = httpClient;
        this.isEditSWRange = false;
        this.isCreateSWRange = false;
        this.isViewSWRange = false;
        this.toExcelHeaderString = function (rows) {
            return this.toExcelHeaderArray(rows).join(",");
        };
        this.toExcelHeaderArray = function (rows) {
            var excelHeaderArr = [];
            for (var index = 1; index <= rows; index++) {
                excelHeaderArr.push(this.toExcelHeader(index));
            }
            return excelHeaderArr;
        };
        this.toExcelHeader = function (index) {
            if (index <= 0) {
                throw new Error("index must be 1 or greater");
            }
            // index--;
            var charCodeOfA = ("a").charCodeAt(0); // you could hard code to 97
            var charCodeOfZ = ("z").charCodeAt(0); // you could hard code to 122
            var excelStr = "";
            var base24Str = (index).toString(charCodeOfZ - charCodeOfA + 1);
            for (var base24StrIndex = 0; base24StrIndex < base24Str.length; base24StrIndex++) {
                var base24Char = base24Str[base24StrIndex];
                var alphabetIndex = (base24Char * 1 == base24Char) ? base24Char : (base24Char.charCodeAt(0) - charCodeOfA + 10);
                // bizarre thing, A==1 in first digit, A==0 in other digits
                if (base24StrIndex == 0) {
                    alphabetIndex -= 1;
                }
                excelStr += String.fromCharCode(charCodeOfA * 1 + alphabetIndex * 1);
            }
            return excelStr.toUpperCase();
        };
        this.swRangeUrl = 'assets/api/swRange.php';
    }
    SizeWidthService.prototype.getAllSWRange = function () {
        var obj = { 'action': 'getAllSWRange', swRange: { id: 1 } };
        return this.httpClient.post(this.swRangeUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
            responseType: 'json',
            params: obj
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getAllSWRange', [])));
    };
    SizeWidthService.prototype.getSWRange = function (swRangeID) {
        var obj = { 'action': 'getSWRange', swRangeID: swRangeID };
        return this.httpClient.post(this.swRangeUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
            responseType: 'json',
            params: obj
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getSWRange', [])));
    };
    SizeWidthService.prototype.getAllSWRangeForBrand = function (brandID) {
        var obj = { 'action': 'getAllSWRangeForBrand', brandID: brandID };
        return this.httpClient.post(this.swRangeUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
            responseType: 'json',
            params: obj
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getAllSWRangeForBrand', [])));
    };
    SizeWidthService.prototype.getAllSWRangeFromProduct = function (productID) {
        var obj = { 'action': 'getAllSWRangeFromProduct', productID: productID };
        return this.httpClient.post(this.swRangeUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
            responseType: 'json',
            params: obj
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getAllSWRangeFromProduct', [])));
    };
    SizeWidthService.prototype.addSWRange = function (swRange) {
        var obj = { 'action': 'addNewSWRange', swRange: swRange };
        return this.httpClient.post(this.swRangeUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
            responseType: 'json',
            params: obj
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addSWRange', [])));
    };
    SizeWidthService.prototype.updateSWRange = function (swRange) {
        var obj = { 'action': 'updateSWRange', swRange: swRange };
        return this.httpClient.post(this.swRangeUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
            responseType: 'json',
            params: obj
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateSWRange', [])));
    };
    SizeWidthService.prototype.deleteSWRange = function (swRange) {
        var obj = { 'action': 'deleteSWRange', swRange: swRange };
        return this.httpClient.post(this.swRangeUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
            responseType: 'json',
            params: obj
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteSWRange', [])));
    };
    SizeWidthService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            //this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    SizeWidthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SizeWidthService);
    return SizeWidthService;
}());



/***/ }),

/***/ "./src/app/services/stores.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/stores.service.ts ***!
  \********************************************/
/*! exports provided: StoresService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoresService", function() { return StoresService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var StoresService = /** @class */ (function () {
    function StoresService(httpClient) {
        this.httpClient = httpClient;
        this.storesUrl = 'assets/api/stores.php';
    }
    StoresService.prototype.getAllStores = function () {
        var obj = { 'action': 'getAllStores', store: { id: 0 } };
        return this.httpClient.post(this.storesUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
            responseType: 'json',
            params: obj
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getAllStores', [])));
    };
    StoresService.prototype.getStore = function (storeID) {
        var obj = { 'action': 'getStore', storeID: storeID };
        return this.httpClient.post(this.storesUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
            responseType: 'json',
            params: obj
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getStore', [])));
    };
    StoresService.prototype.addStore = function (store) {
        var obj = { 'action': 'addNewStore', store: store };
        return this.httpClient.post(this.storesUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
            responseType: 'json',
            params: obj
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addStore', [])));
    };
    StoresService.prototype.updateStore = function (store) {
        var obj = { 'action': 'updateStore', store: store };
        return this.httpClient.post(this.storesUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
            responseType: 'json',
            params: obj
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('udateStore', [])));
    };
    StoresService.prototype.deleteStore = function (store) {
        var obj = { 'action': 'deleteStore', store: store };
        return this.httpClient.post(this.storesUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
            responseType: 'json',
            params: obj
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteStore', [])));
    };
    StoresService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            //this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    StoresService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], StoresService);
    return StoresService;
}());



/***/ }),

/***/ "./src/app/services/vendor.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/vendor.service.ts ***!
  \********************************************/
/*! exports provided: VendorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorService", function() { return VendorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VendorService = /** @class */ (function () {
    function VendorService() {
    }
    VendorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VendorService);
    return VendorService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\GitHUbProjects\EPO\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map