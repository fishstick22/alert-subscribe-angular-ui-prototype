webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./clients/clients.module": [
		"../../../../../src/app/clients/clients.module.ts",
		"clients.module",
		"common"
	],
	"./communications/communications.module": [
		"../../../../../src/app/communications/communications.module.ts",
		"communications.module",
		"common"
	],
	"./dashboard/dashboard.module": [
		"../../../../../src/app/dashboard/dashboard.module.ts",
		"dashboard.module"
	],
	"./programs/programs.module": [
		"../../../../../src/app/programs/programs.module.ts",
		"programs.module",
		"common"
	],
	"./shared/shared.module": [
		"../../../../../src/app/shared/shared.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/core/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_home_home_component__ = __webpack_require__("../../../../../src/app/core/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__core_home_home_component__["a" /* HomeComponent */] },
    { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
    { path: 'communications', loadChildren: './communications/communications.module#CommunicationsModule' },
    { path: 'programs', loadChildren: './programs/programs.module#ProgramsModule' },
    { path: 'clients', loadChildren: './clients/clients.module#ClientsModule' },
    { path: 'shared-test', loadChildren: './shared/shared.module#SharedModule' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__core_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Sarting with basic \"Bootstrap starter\" template\n     https://getbootstrap.com/docs/4.0/examples/starter-template/-->\n  <app-navbar [customLogoTitle]=[title]></app-navbar>   \n     \n  <main role=\"main\" class=\"container\">\n    <div class=\"starter-template\">\n      <router-outlet></router-outlet>\n    </div>\n  </main>\n   \n  <app-footer [customFooterText]=[title]></app-footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

// import { environment } from 'environments/environment';

var AppComponent = (function () {
    function AppComponent(config) {
        this.config = config;
        this.title = 'Alert Subscribe UI Prototype/POC (' + config.envName + ')';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1_app_app_config__["a" /* APP_CONFIG */])),
        __metadata("design:paramtypes", [Object])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AppConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");


// https://github.com/angular/angular-cli/issues/2034
var APP_CONFIG = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* InjectionToken */]('app.config');
// https://stackoverflow.com/questions/34986922/define-global-constants-in-angular-2/40287063#40287063
var AppConfig = {
    apiEndpoint: __WEBPACK_IMPORTED_MODULE_1_environments_environment__["a" /* environment */].apiEndpoint,
    envName: __WEBPACK_IMPORTED_MODULE_1_environments_environment__["a" /* environment */].envName
};


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/core/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_footer_footer_component__ = __webpack_require__("../../../../../src/app/core/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_home_home_component__ = __webpack_require__("../../../../../src/app/core/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/core/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_services_data_api_service__ = __webpack_require__("../../../../../src/app/shared/services/data-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_services_drag_drop_service__ = __webpack_require__("../../../../../src/app/shared/services/drag-drop.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_services_sortable_column_service__ = __webpack_require__("../../../../../src/app/shared/services/sortable-column.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Angular Subscribe User Interface Prototype
//



// AppConfig
// https://stackoverflow.com/questions/34986922/define-global-constants-in-angular-2/40287063#40287063



// application core (basic site sturcture, etc) components




// feature components/modules
// lazy loaded feature modules do not have to be explicity imported
// import { ClientsModule        } from './clients/clients.module';
// import { CommunicationsModule } from './communications/communications.module';
// import { DashboardModule      } from './dashboard/dashboard.module';
// import { ProgramsModule       } from './programs/programs.module';
// shared




var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__core_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__core_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__core_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__core_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["d" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__["SharedModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__shared_services_data_api_service__["a" /* DataApiService */],
                __WEBPACK_IMPORTED_MODULE_12__shared_services_drag_drop_service__["a" /* DragDropService */],
                __WEBPACK_IMPORTED_MODULE_13__shared_services_sortable_column_service__["a" /* SortableColumnService */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* APP_CONFIG */], useValue: __WEBPACK_IMPORTED_MODULE_3__app_config__["b" /* AppConfig */] }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Yes, I totally stole this from Bram Borggreve\n  https://medium.com/@beeman/tutorial-add-bootstrap-to-angular-cli-apps-b0a652f2eb2\n-->\n<footer class=\"footer\">\n  <div class=\"container\">\n    <span class=\"text-muted\">\n      {{customFooterText}} made with \n      <img src=\"assets/images/angular.svg\" style=\"width: 25px;\" title=\"Angular\"/>\n      <img src=\"assets/images/bootstrap-components.svg\" style=\"width: 25px;\" title=\"Bootstrap\"/>\n      <img src=\"assets/images/spring-leaf.png\" style=\"width: 20px;\" title=\"Spring Boot\"/>\n      and \n      <i class=\"fa fa-heart\" aria-hidden=\"true\" style=\"color: red;\"></i> \n      by \n      <a href=\"https://github.com/fishstick22\" target=\"_blank\">\n        <img class=\"rounded\" src=\"assets/images/fishstick22.jpg\" \n          style=\"width: 20px;\" title=\"fishstick22\"/>\n    </a>\n    </span>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/core/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 60px;\n  line-height: 60px;\n  background-color: #f5f5f5;\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], FooterComponent.prototype, "customFooterText", void 0);
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/core/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/footer/footer.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Welcome</h2>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\n<hr>\n"

/***/ }),

/***/ "../../../../../src/app/core/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/core/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/home/home.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-gradient-dark\">\n  <a class=\"navbar-brand\" href=\"/\" title='{{customLogoTitle}}'>\n    <img src='assets/images/cvs.png' alt='{{customLogoTitle}}' width=50>\n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" \n          data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" \n          (click)=\"toggleCollapse()\"\n          aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" [class.show]=\"show\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\" routerLinkActive=\"active\" (click)=\"toggleCollapse()\">\n        <a class=\"nav-link\" routerLink=\"/home\" >Home</a></li>\n      <li class=\"nav-item\" routerLinkActive=\"active\" (click)=\"toggleCollapse()\">\n        <a class=\"nav-link\" routerLink=\"/dashboard\" >Dashboard</a></li>    \n      <li class=\"nav-item\" routerLinkActive=\"active\" (click)=\"toggleCollapse()\">\n        <a class=\"nav-link\" routerLink=\"/communications\" >Communications</a></li>\n      <li class=\"nav-item\" routerLinkActive=\"active\" (click)=\"toggleCollapse()\">\n        <a class=\"nav-link\" routerLink=\"/programs\" >Programs</a></li>\n      <li class=\"nav-item\" routerLinkActive=\"active\" (click)=\"toggleCollapse()\">\n        <a class=\"nav-link\" routerLink=\"/clients\" >Clients</a></li>\n      <li class=\"nav-item\" routerLinkActive=\"active\" (click)=\"toggleCollapse()\">\n        <a class=\"nav-link\" href=\"#\">Contact</a></li>\n    </ul>\n    <ul class=\"nav navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">\n          <i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i>\n          Login\n        </a>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/core/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Remove the navbar's default margin-bottom and rounded borders\r\n.navbar {\r\n    margin-bottom: 0;\r\n    border-radius: 0;\r\n    }\r\n.navbar-brand {\r\n    float: left;\r\n    height: 50px;\r\n    padding: 15px 15px;\r\n    padding-top: 0px;\r\n    padding-right: 15px;\r\n    padding-bottom: 15px;\r\n    padding-left: 5px;\r\n    }\r\n*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// https://angularfirebase.com/lessons/bootstrap-4-collapsable-navbar-work-with-angular/
// huff, the BootStrap 4 Navbar needs a little nudge to work with Angular
var NavbarComponent = (function () {
    function NavbarComponent() {
        this.show = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        // console.log('customLogoTitle: ' + this.customLogoTitle);
    };
    NavbarComponent.prototype.toggleCollapse = function () {
        this.show = !this.show;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], NavbarComponent.prototype, "customLogoTitle", void 0);
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/core/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/navbar/navbar.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>\n  Page Not Found!\n</h2>"

/***/ }),

/***/ "../../../../../src/app/core/page-not-found/page-not-found.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__("../../../../../src/app/core/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/page-not-found/page-not-found.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/client-action-table/client-action-table.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-responsive table-sm table-striped table-bordered table-hover\"\nappSortableTable (sorted)=\"onSorted($event)\">\n<caption><span *ngIf=\"displayClientStartEmpty\">\n  Clients List begins empty: start typing in the search boxes to find Clients  \n</span></caption>\n<thead>\n<tr class=\"bg-gradient-dark text-white\"><!-- column sorting header row -->\n  <th *ngIf=\"showClientId\"><app-sortable-column columnName=\"id\" sortDirection=\"asc\">ID</app-sortable-column></th>\n  <th *ngIf=\"showClientCode\"><app-sortable-column columnName=\"code\">Code</app-sortable-column></th>\n  <th *ngIf=\"showClientName\"><app-sortable-column columnName=\"name\">Name</app-sortable-column></th>\n  <th *ngIf=\"showStatus\">Status</th>\n  <th *ngIf=\"showAction\">Actions</th>\n</tr>\n<tr class=\"thead-light\"><!-- search/filter header row -->\n  <th width=\"10%\" *ngIf=\"showClientId\">\n    <input type=\"text\" id=\"seachClientId\" class=\"form-control form-control-sm\" placeholder=\"search\"\n           name=\"clientId\" [(ngModel)]=\"clientIdSearch\" (keyup)=\"searchClientId()\"/>\n  </th>\n  <th width=\"15%\" *ngIf=\"showClientCode\">\n    <input type=\"text\" id=\"seachDescription\" class=\"form-control form-control-sm\" placeholder=\"search Code\"\n           name=\"clientCode\" [(ngModel)]=\"clientCodeSearch\" (keyup)=\"searchClientCode()\"/>\n  </th>\n  <th *ngIf=\"showClientName\">\n    <input type=\"text\" id=\"seachName\" class=\"form-control form-control-sm\" placeholder=\"search Name\"\n           name=\"clientName\" [(ngModel)]=\"clientNameSearch\" (keyup)=\"searchClientName()\"/>\n  </th>\n  <th *ngIf=\"showStatus\"></th>\n  <th *ngIf=\"showAction\"></th>\n</tr>\n</thead>\n<tbody>\n<tr appDraggable\n    [draggable] *ngFor=\"let client of displayClient; let i = index\"\n    [dragData]=\"client\" [dragClass]=\"'drag-over'\"  \n    (click)=\"setClickedRow(i); \" [class.table-info]=\"i == selectedRow\"\n     title=\"Click or Drag to configure {{client.name}} for Communication {{displayCommunication}}\" >\n  <td *ngIf=\"showClientId\">\n    <span class=\"badge badge-secondary clickable\"\n      (click)=\"selectClient(client)\">{{client.id}}</span></td>\n  <td *ngIf=\"showClientCode\"><span>{{client.code}}</span></td>\n  <td *ngIf=\"showClientName\"><span>{{client.name}}</span></td>\n  <td *ngIf=\"showStatus\"><span *ngIf=\"client.id === 142\"><i class=\"fa fa-check\" aria-hidden=\"true\" title=\"{{client.name}} Configured (Date)\"></i></span></td>\n  <td *ngIf=\"showAction\">\n    <app-client-actions-popover\n      [clientId]=\"client.id\"\n      [clientName]=\"client.name\"\n      (configAction)=\"configureClient($event)\">\n      <i class=\"fa fa-pencil-square-o clickable\" aria-hidden=\"true\" title=\"Click to configure {{client.name}} Communication settings\"></i>\n  </app-client-actions-popover>\n  </td>\n</tr>\n</tbody>\n<tfoot></tfoot>\n</table>"

/***/ }),

/***/ "../../../../../src/app/shared/components/client-action-table/client-action-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.scroll-list {\n  overflow: auto;\n  max-height: 70vh; }\n\n.drag-over {\n  border: #ff525b dashed 2px; }\n\n.drag-hint {\n  border: #ffc100 dashed 2px; }\n\n.drag-target-border {\n  border: #00bfff dashed 2px; }\n\n.drag-target-border-green {\n  border: #3c763d dashed 2px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/client-action-table/client-action-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientActionTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClientActionTableComponent = (function () {
    function ClientActionTableComponent() {
        this.supressClient = [];
        this.displayClientStartEmpty = true;
        this.displayCommunication = 'Communication';
        this.showClientId = true;
        this.showClientCode = true;
        this.showClientName = true;
        this.showStatus = false;
        this.showAction = true;
        this.selRowOut = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.selectedClient = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.clientConfigAction = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.clientIdSearch = '';
        this.clientIdSearchLast = '';
        this.clientNameSearch = '';
        this.clientNameSearchLast = '';
        this.clientCodeSearch = '';
        this.clientCodeSearchLast = '';
    }
    ClientActionTableComponent.prototype.ngOnChanges = function (changes) {
        console.log(changes);
        // https://github.com/angular/angular/issues/2404
        // ngOnChanges can fire before ngOnInit
        // not sure why, but just make sure these are not undefined
        // before calling the search to referesh
        if (this.displayClient && this.clients && this.supressClient) {
            this.searchClientTable();
        }
    };
    ClientActionTableComponent.prototype.ngOnInit = function () {
        console.log('ClientActionTableComponent onInit...', this.clients, this.displayClient);
        if (!this.displayClient) {
            this.displayClient = []; // instead of 'undefined'
        }
    };
    ClientActionTableComponent.prototype.selectClient = function (client) {
        this.selectedClient.emit(client);
    };
    ClientActionTableComponent.prototype.setClickedRow = function (index) {
        if (this.selectedRow === index) {
            this.selectedRow = null;
        }
        else {
            this.selectedRow = index;
        }
        this.selRowOut.emit(index);
    };
    ClientActionTableComponent.prototype.configureClient = function (clientConfigAction) {
        this.clientConfigAction.emit(clientConfigAction);
    };
    ClientActionTableComponent.prototype.onSorted = function ($event) {
        console.log('ClientActionTableComponent onSorted...');
        this.displayClient = this.getClientsSorted($event, this.displayClient);
    };
    ClientActionTableComponent.prototype.getClientsSorted = function (criteria, clientArray) {
        return clientArray
            .sort(function (a, b) {
            if (criteria.sortDirection === 'asc') {
                if (a[criteria.sortColumn] < b[criteria.sortColumn]) {
                    return -1;
                }
                if (a[criteria.sortColumn] > b[criteria.sortColumn]) {
                    return 1;
                }
                return 0;
            }
            else if (criteria.sortDirection === 'desc') {
                if (a[criteria.sortColumn] > b[criteria.sortColumn]) {
                    return -1;
                }
                if (a[criteria.sortColumn] < b[criteria.sortColumn]) {
                    return 1;
                }
                return 0;
            }
            else {
                return 0;
            }
        });
    };
    ClientActionTableComponent.prototype.searchClientId = function () {
        console.log('ClientComponent searchClientId user entered: ', this.clientIdSearch, this.clientIdSearchLast);
        this.searchClientTable();
        this.clientIdSearchLast = this.clientIdSearch;
    };
    ClientActionTableComponent.prototype.searchClientCode = function () {
        console.log('ClientComponent searchClientCode user entered: ', this.clientCodeSearch, this.clientCodeSearchLast);
        // if user enters something then starts backing out, this stops working
        // so need to keep track somehow and add back rows that were previously removed
        this.searchClientTable();
        this.clientCodeSearchLast = this.clientCodeSearch;
    };
    ClientActionTableComponent.prototype.searchClientName = function () {
        console.log('ClientComponent searchClientName user entered: ', this.clientNameSearch, this.clientNameSearchLast);
        this.searchClientTable();
        this.clientNameSearchLast = this.clientNameSearch;
    };
    ClientActionTableComponent.prototype.isSuppressed = function (client) {
        return (this.supressClient.indexOf(client.id) > -1);
    };
    ClientActionTableComponent.prototype.searchClientTable = function () {
        var _this = this;
        // TODO yes this is a monster if-then-else method
        // once the logic is worked out move it into a service and refactor
        // align/chain the filter pattern across all searchable rows
        var clientIdAdded = this.clientIdSearch.indexOf(this.clientIdSearchLast) === 0;
        var clientCodeAdded = this.clientCodeSearch.indexOf(this.clientCodeSearchLast) === 0;
        var clientNameAdded = this.clientNameSearch.indexOf(this.clientNameSearchLast) === 0;
        if (!clientIdAdded || !clientCodeAdded || !clientNameAdded) {
            console.log('user deleting something...');
            if (this.displayClientStartEmpty &&
                this.clientNameSearch === '' &&
                this.clientCodeSearch === '' &&
                this.clientIdSearch === '') {
                this.displayClient = [];
            }
            else {
                // refresh the list, reapply each filter, gonna guess mostly searching on names
                this.displayClient = this.clients.filter(function (client) {
                    return !_this.isSuppressed(client) && _this.containsString(client.name, _this.clientNameSearch);
                });
            }
        }
        else {
            console.log('just adding to what was there');
            if (this.clientNameSearch !== '') {
                // we may be starting empty, if so use the full array first
                if (this.displayClient.length === 0) {
                    this.displayClient = this.clients.filter(function (client) {
                        return !_this.isSuppressed(client) && _this.containsString(client.name, _this.clientNameSearch);
                    });
                }
                else {
                    this.displayClient = this.displayClient.filter(function (client) {
                        return !_this.isSuppressed(client) && _this.containsString(client.name, _this.clientNameSearch);
                    });
                }
            }
        }
        if (this.clientCodeSearch !== '') {
            if (this.displayClient.length === 0) {
                this.displayClient = this.clients.filter(function (client) {
                    return !_this.isSuppressed(client) && _this.containsString(client.code, _this.clientCodeSearch);
                });
            }
            else {
                this.displayClient = this.displayClient.filter(function (client) {
                    return !_this.isSuppressed(client) && _this.containsString(client.code, _this.clientCodeSearch);
                });
            }
        }
        // least likely to search on client id specifically
        if (this.clientIdSearch !== '') {
            if (this.displayClient.length === 0) {
                this.displayClient = this.clients.filter(function (client) {
                    return !_this.isSuppressed(client) && (String(client.id).indexOf(_this.clientIdSearch) !== -1);
                });
            }
            else {
                this.displayClient = this.displayClient.filter(function (client) {
                    return !_this.isSuppressed(client) && (String(client.id).indexOf(_this.clientIdSearch) !== -1);
                });
            }
        }
    };
    ClientActionTableComponent.prototype.containsString = function (columnValue, searchValue) {
        return (columnValue.toLocaleLowerCase().indexOf(searchValue.toLocaleLowerCase()) !== -1);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ClientActionTableComponent.prototype, "configureState", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], ClientActionTableComponent.prototype, "clients", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], ClientActionTableComponent.prototype, "displayClient", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], ClientActionTableComponent.prototype, "supressClient", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ClientActionTableComponent.prototype, "displayClientStartEmpty", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ClientActionTableComponent.prototype, "displayCommunication", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ClientActionTableComponent.prototype, "showClientId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ClientActionTableComponent.prototype, "showClientCode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ClientActionTableComponent.prototype, "showClientName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ClientActionTableComponent.prototype, "showStatus", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ClientActionTableComponent.prototype, "showAction", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], ClientActionTableComponent.prototype, "selRowOut", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], ClientActionTableComponent.prototype, "selectedClient", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], ClientActionTableComponent.prototype, "clientConfigAction", void 0);
    ClientActionTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-client-action-table',
            template: __webpack_require__("../../../../../src/app/shared/components/client-action-table/client-action-table.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/client-action-table/client-action-table.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], ClientActionTableComponent);
    return ClientActionTableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/client-actions-popover/client-actions-popover.component.html":
/***/ (function(module, exports) {

module.exports = "\n<ng-template #popContent>\n  <div class=\"w-100 outer-popover\"\n    (click)=\"onClick($event)\"\n    (appClickOutside)=\"onClickedOutside($event, p)\"\n    [attachOutsideOnClick]=\"attachOutsideOnClick\"\n    [delayClickOutsideInit]=\"delayClickOutsideInit\"\n    [clickOutsideEvents]=\"clickOutsideEvents\"\n    [exclude]=\"exclude\"\n    [excludeBeforeClick]=\"excludeBeforeClick\">\n\n    <div class=\"float-left inner-popover\">\n        <span class=\"badge badge-success clickable\"\n             (click)=\"configure(clientId, 'communications'); p.close();\"\n              title=\"Configure Communications for  {{clientId}}: {{clientName}} \">\n          Communications</span></div>\n  </div>\n</ng-template>\n<div [ngbPopover]=\"popContent\"\n     #p=\"ngbPopover\"\n     popoverTitle=\"\"\n     placement=\"left\">\n  <ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/client-actions-popover/client-actions-popover.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".outer-popover,\n.inner-popover {\n  display: block; }\n\n.outer-popover {\n  width: 300px;\n  padding: 0; }\n\n.inner-popover {\n  padding: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/client-actions-popover/client-actions-popover.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientActionsPopoverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_model_client__ = __webpack_require__("../../../../../src/app/shared/model/client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientActionsPopoverComponent = (function () {
    function ClientActionsPopoverComponent() {
        this.attachOutsideOnClick = false;
        this.delayClickOutsideInit = true;
        this.clickOutsideEvents = 'click';
        this.exclude = 'ngbPopover ngb-popover';
        this.excludeBeforeClick = false;
        this.configAction = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    ClientActionsPopoverComponent.prototype.ngOnInit = function () {
    };
    ClientActionsPopoverComponent.prototype.configure = function (id, config) {
        console.log('ClientActionsPopoverComponent configure: ', id, config);
        var clientConfigAction = new __WEBPACK_IMPORTED_MODULE_1_app_shared_model_client__["b" /* ClientConfigAction */](id, config);
        this.configAction.emit(clientConfigAction);
    };
    ClientActionsPopoverComponent.prototype.onClick = function (e) {
        console.log('Clicked inside:', e);
    };
    ClientActionsPopoverComponent.prototype.onClickedOutside = function (e, p) {
        console.log('Clicked outside:', e);
        p.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ClientActionsPopoverComponent.prototype, "clientId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ClientActionsPopoverComponent.prototype, "clientName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], ClientActionsPopoverComponent.prototype, "configAction", void 0);
    ClientActionsPopoverComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-client-actions-popover',
            template: __webpack_require__("../../../../../src/app/shared/components/client-actions-popover/client-actions-popover.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/client-actions-popover/client-actions-popover.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], ClientActionsPopoverComponent);
    return ClientActionsPopoverComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/comm-action-table/comm-action-table.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-responsive table-sm table-striped table-bordered table-hover\"\r\nappSortableTable (sorted)=\"onSorted($event)\">\r\n<caption><span *ngIf=\"displayCommStartEmpty\">\r\n  Communications List begins empty: start typing in the search boxes to find Communications  \r\n</span></caption>\r\n<thead>\r\n  <tr class=\"bg-gradient-dark text-white\"><!-- column sorting header row -->\r\n    <th *ngIf=\"showCommId\"><app-sortable-column columnName=\"id\" sortDirection=\"asc\">ID</app-sortable-column></th>\r\n    <th *ngIf=\"showCommName\"><app-sortable-column columnName=\"name\">Name</app-sortable-column></th>\r\n    <th *ngIf=\"showCommDesc\"><app-sortable-column columnName=\"description\">Description</app-sortable-column></th>\r\n    <th *ngIf=\"showStatus\">Status</th>\r\n    <th *ngIf=\"showAction\">Actions</th>\r\n  </tr>\r\n  <tr class=\"thead-light\"><!-- search/filter header row -->\r\n    <th width=\"10%\" *ngIf=\"showCommId\">\r\n      <input type=\"text\" id=\"seachCommId\" class=\"form-control form-control-sm\" placeholder=\"search\"\r\n             name=\"commId\" [(ngModel)]=\"commIdSearch\" (keyup)=\"searchCommId()\"/>\r\n    </th>\r\n    <th width=\"23%\" *ngIf=\"showCommName\">\r\n      <input type=\"text\" id=\"seachName\" class=\"form-control form-control-sm\" placeholder=\"search Name\"\r\n             name=\"commName\" [(ngModel)]=\"commNameSearch\" (keyup)=\"searchCommName()\"/>\r\n    </th>\r\n    <th *ngIf=\"showCommDesc\">\r\n      <input type=\"text\" id=\"seachDescription\" class=\"form-control form-control-sm\" placeholder=\"search Description\"\r\n             name=\"commDesc\" [(ngModel)]=\"commDescSearch\" (keyup)=\"searchCommDesc()\"/>\r\n    </th>\r\n    <th *ngIf=\"showStatus\"></th>\r\n    <th *ngIf=\"showAction\"></th>\r\n  </tr>\r\n</thead>\r\n<tbody>\r\n  <tr><td class=\"bg-gradient-light\" border=0 colspan=3></td></tr>\r\n  <tr appDraggable \r\n      [draggable] *ngFor=\"let communication of displayComm; let i = index\"\r\n      [dragData]=\"communication\" [dragClass]=\"'drag-over'\"  \r\n      (click)=\"setClickedRow(i)\" [class.table-info]=\"i === selectedRow\"\r\n      title=\"Click or Drag to configure {{communication.name}} for  {{displayProgram}}{{displayClient}}\">\r\n    <td *ngIf=\"showCommId\">\r\n      <span class=\"badge badge-secondary clickable\"\r\n        (click)=\"selectCommunication(communication)\">{{communication.id}}</span></td>\r\n    <td *ngIf=\"showCommName\"><span>{{communication.name}}</span></td>\r\n    <td *ngIf=\"showCommDesc\"><span>{{communication.description}}</span></td>\r\n    <td *ngIf=\"showStatus\">\r\n      <span *ngIf=\"communication.id === 261\"><i class=\"fa fa-check\" aria-hidden=\"true\" title=\"{{communication.name}} Configured (Date)\"></i></span></td>\r\n    <td *ngIf=\"showAction\">\r\n        <app-comm-actions-popover\r\n          [commId]=\"communication.id\"\r\n          [commName]=\"communication.name\"\r\n          (configAction)=\"configureCommunication($event)\">\r\n          <i class=\"fa fa-pencil-square-o clickable\" aria-hidden=\"true\" title=\"Click to configure {{communication.name}} Program or Client settings\"></i>\r\n        </app-comm-actions-popover>\r\n    </td>\r\n  </tr>\r\n</tbody>\r\n<tfoot></tfoot>\r\n</table>"

/***/ }),

/***/ "../../../../../src/app/shared/components/comm-action-table/comm-action-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.scroll-list {\n  overflow: auto;\n  max-height: 70vh; }\n\n.drag-over {\n  border: #ff525b dashed 2px; }\n\n.drag-hint {\n  border: #ffc100 dashed 2px; }\n\n.drag-target-border {\n  border: #00bfff dashed 2px; }\n\n.drag-target-border-green {\n  border: #3c763d dashed 2px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/comm-action-table/comm-action-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommActionTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommActionTableComponent = (function () {
    function CommActionTableComponent() {
        this.supressComm = [];
        this.displayCommStartEmpty = true;
        this.displayClient = ''; // = 'Client';
        this.displayProgram = ''; // = 'Program';
        this.showCommId = true;
        this.showCommName = true;
        this.showCommDesc = false;
        this.showStatus = false;
        this.showAction = true;
        this.selRowOut = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.selectedCommunication = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.commConfigAction = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.commIdSearch = '';
        this.commIdSearchLast = '';
        this.commNameSearch = '';
        this.commNameSearchLast = '';
        this.commDescSearch = '';
        this.commDescSearchLast = '';
    }
    CommActionTableComponent.prototype.ngOnChanges = function (changes) {
        console.log(changes);
        // https://github.com/angular/angular/issues/2404
        // ngOnChanges can fire before ngOnInit
        // not sure why, but just make sure these are not undefined
        // before calling the search to referesh
        if (this.displayComm && this.communications && this.supressComm) {
            this.searchCommunicatonTable();
        }
    };
    CommActionTableComponent.prototype.ngOnInit = function () {
        console.log('CommActionTableComponent:', this.communications);
    };
    CommActionTableComponent.prototype.selectCommunication = function (communication) {
        this.selectedCommunication.emit(communication);
    };
    CommActionTableComponent.prototype.setClickedRow = function (index) {
        if (this.selectedRow === index) {
            this.selectedRow = null;
        }
        else {
            this.selectedRow = index;
        }
        this.selRowOut.emit(index);
    };
    CommActionTableComponent.prototype.configureCommunication = function (commConfigAction) {
        this.commConfigAction.emit(commConfigAction);
    };
    CommActionTableComponent.prototype.onSorted = function ($event) {
        console.log('CommunicationComponent onSorted...');
        this.displayComm = this.getCommunicationsSorted($event, this.displayComm);
    };
    CommActionTableComponent.prototype.getCommunicationsSorted = function (criteria, commArray) {
        return commArray
            .sort(function (a, b) {
            if (criteria.sortDirection === 'asc') {
                if (a[criteria.sortColumn] < b[criteria.sortColumn]) {
                    return -1;
                }
                if (a[criteria.sortColumn] > b[criteria.sortColumn]) {
                    return 1;
                }
                return 0;
            }
            else if (criteria.sortDirection === 'desc') {
                if (a[criteria.sortColumn] > b[criteria.sortColumn]) {
                    return -1;
                }
                if (a[criteria.sortColumn] < b[criteria.sortColumn]) {
                    return 1;
                }
                return 0;
            }
            else {
                return 0;
            }
        });
    };
    CommActionTableComponent.prototype.searchCommId = function () {
        console.log('CommunicationComponent searchCommId user entered: ', this.commIdSearch, this.commIdSearchLast);
        this.searchCommunicatonTable();
        this.commIdSearchLast = this.commIdSearch;
    };
    CommActionTableComponent.prototype.searchCommName = function () {
        console.log('CommunicationComponent searchCommName user entered: ', this.commNameSearch, this.commNameSearchLast);
        this.searchCommunicatonTable();
        this.commNameSearchLast = this.commNameSearch;
    };
    CommActionTableComponent.prototype.searchCommDesc = function () {
        console.log('CommunicationComponent searchCommDesc user entered: ', this.commDescSearch, this.commDescSearchLast);
        this.searchCommunicatonTable();
        this.commDescSearchLast = this.commDescSearch;
    };
    CommActionTableComponent.prototype.isSuppressed = function (comm) {
        return (this.supressComm.indexOf(comm.id) > -1);
    };
    CommActionTableComponent.prototype.searchCommunicatonTable = function () {
        var _this = this;
        // TODO yes this is a monster if-then-else method
        // once the logic is worked out move it into a service and refactor
        if (!this.displayCommStartEmpty && this.displayComm.length === 0) {
            this.displayComm = this.communications;
        }
        // align/chain the filter pattern across all searchable rows
        var commIdAdded = this.commIdSearch.indexOf(this.commIdSearchLast) === 0;
        var commNameAdded = this.commNameSearch.indexOf(this.commNameSearchLast) === 0;
        var commDescAdded = this.commDescSearch.indexOf(this.commDescSearchLast) === 0;
        if (!commIdAdded || !commNameAdded || !commDescAdded) {
            console.log('user deleting something...');
            if (this.displayCommStartEmpty &&
                this.commNameSearch === '' &&
                this.commDescSearch === '' &&
                this.commIdSearch === '') {
                this.displayComm = [];
            }
            else {
                // refresh the list, reapply each filter, gonna guess mostly searching on names
                this.displayComm = this.communications.filter(function (comm) {
                    return !_this.isSuppressed(comm) && _this.containsString(comm.name, _this.commNameSearch);
                });
            }
        }
        else {
            console.log('just adding to what was there');
            if (this.commNameSearch !== '') {
                // we may be starting empty, if so use the full array first
                if (this.displayComm.length === 0) {
                    this.displayComm = this.communications.filter(function (comm) {
                        return !_this.isSuppressed(comm) && _this.containsString(comm.name, _this.commNameSearch);
                    });
                }
                else {
                    this.displayComm = this.displayComm.filter(function (comm) {
                        return !_this.isSuppressed(comm) && _this.containsString(comm.name, _this.commNameSearch);
                    });
                }
            }
        }
        if (this.commDescSearch !== '') {
            if (this.displayComm.length === 0) {
                this.displayComm = this.communications.filter(function (comm) {
                    return !_this.isSuppressed(comm) && _this.containsString(comm.description, _this.commDescSearch);
                });
            }
            else {
                this.displayComm = this.displayComm.filter(function (comm) {
                    return !_this.isSuppressed(comm) && _this.containsString(comm.description, _this.commDescSearch);
                });
            }
        }
        if (this.commIdSearch !== '') {
            if (this.displayComm.length === 0) {
                this.displayComm = this.communications.filter(function (comm) {
                    return !_this.isSuppressed(comm) && (String(comm.id).indexOf(_this.commIdSearch) !== -1);
                });
            }
            else {
                this.displayComm = this.displayComm.filter(function (comm) {
                    return !_this.isSuppressed(comm) && (String(comm.id).indexOf(_this.commIdSearch) !== -1);
                });
            }
        }
    };
    CommActionTableComponent.prototype.containsString = function (columnValue, searchValue) {
        return (columnValue.toLocaleLowerCase().indexOf(searchValue.toLocaleLowerCase()) !== -1);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], CommActionTableComponent.prototype, "configureState", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], CommActionTableComponent.prototype, "communications", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], CommActionTableComponent.prototype, "displayComm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], CommActionTableComponent.prototype, "supressComm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], CommActionTableComponent.prototype, "displayCommStartEmpty", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], CommActionTableComponent.prototype, "displayClient", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], CommActionTableComponent.prototype, "displayProgram", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], CommActionTableComponent.prototype, "showCommId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], CommActionTableComponent.prototype, "showCommName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], CommActionTableComponent.prototype, "showCommDesc", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], CommActionTableComponent.prototype, "showStatus", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], CommActionTableComponent.prototype, "showAction", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], CommActionTableComponent.prototype, "selRowOut", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], CommActionTableComponent.prototype, "selectedCommunication", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], CommActionTableComponent.prototype, "commConfigAction", void 0);
    CommActionTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-comm-action-table',
            template: __webpack_require__("../../../../../src/app/shared/components/comm-action-table/comm-action-table.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/comm-action-table/comm-action-table.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CommActionTableComponent);
    return CommActionTableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/comm-actions-popover/comm-actions-popover.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<ng-template #popContent>\r\n  <div class=\"w-100 outer-popover\"\r\n    (click)=\"onClick($event)\"\r\n    (appClickOutside)=\"onClickedOutside($event, p)\"\r\n    [attachOutsideOnClick]=\"attachOutsideOnClick\"\r\n    [delayClickOutsideInit]=\"delayClickOutsideInit\"\r\n    [clickOutsideEvents]=\"clickOutsideEvents\"\r\n    [exclude]=\"exclude\"\r\n    [excludeBeforeClick]=\"excludeBeforeClick\">\r\n\r\n    <div class=\"float-left inner-popover\">\r\n        <span class=\"badge badge-success clickable\"\r\n             (click)=\"configure(commId, 'program'); p.close();\"\r\n              title=\"Configure Program for CommId {{commId}}: {{commName}} \">\r\n          Program</span></div>\r\n    <div class=\"float-right inner-popover\">\r\n        <span class=\"badge badge-success clickable\"\r\n             (click)=\"configure(commId, 'clients'); p.close();\"\r\n              title=\"Configure Client(s) for CommId {{commId}}: {{commName}} \">\r\n          Clients</span>\r\n      </div>\r\n  </div>\r\n</ng-template>\r\n<div [ngbPopover]=\"popContent\"\r\n     #p=\"ngbPopover\"\r\n     popoverTitle=\"\"\r\n     placement=\"left\">\r\n  <ng-content></ng-content>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/comm-actions-popover/comm-actions-popover.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".outer-popover,\n.inner-popover {\n  display: block; }\n\n.outer-popover {\n  width: 300px;\n  padding: 0; }\n\n.inner-popover {\n  padding: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/comm-actions-popover/comm-actions-popover.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommActionsPopoverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_model_communication__ = __webpack_require__("../../../../../src/app/shared/model/communication.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// https://ng-bootstrap.github.io/#/components/popover/examples
var CommActionsPopoverComponent = (function () {
    function CommActionsPopoverComponent() {
        this.attachOutsideOnClick = false;
        this.delayClickOutsideInit = true;
        this.clickOutsideEvents = 'click';
        this.exclude = 'ngbPopover ngb-popover';
        this.excludeBeforeClick = false;
        this.configAction = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    CommActionsPopoverComponent.prototype.ngOnInit = function () {
    };
    CommActionsPopoverComponent.prototype.configure = function (id, config) {
        console.log('ActionsPopoverComponent configure: ', id, config);
        var commConfigAction = new __WEBPACK_IMPORTED_MODULE_1_app_shared_model_communication__["b" /* CommunicationConfigAction */](id, config);
        this.configAction.emit(commConfigAction);
    };
    CommActionsPopoverComponent.prototype.onClick = function (e) {
        console.log('Clicked inside:', e);
    };
    CommActionsPopoverComponent.prototype.onClickedOutside = function (e, p) {
        console.log('Clicked outside:', e);
        p.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], CommActionsPopoverComponent.prototype, "commId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], CommActionsPopoverComponent.prototype, "commName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], CommActionsPopoverComponent.prototype, "configAction", void 0);
    CommActionsPopoverComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-comm-actions-popover',
            template: __webpack_require__("../../../../../src/app/shared/components/comm-actions-popover/comm-actions-popover.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/comm-actions-popover/comm-actions-popover.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CommActionsPopoverComponent);
    return CommActionsPopoverComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/date-eff-exp/date-eff-exp.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!lastConfigRow\">\n  <!-- not the last (new) row, this could be the current effective row -->\n\n  <div *ngIf=\"dateType === 'effective'\" class=\"flex-justify-center\">\n    <!-- the effective date of the current effective row -->\n    <input class=\"form-control form-control-sm date-eff-exp-input\" value=\"{{commConfig.effective}}\" readonly>\n  </div>\n\n  <div *ngIf=\"dateType === 'expiration'\" class=\"flex-justify-center\">\n    <!-- the expiration date of the current/previous row -->\n    <input class=\"form-control form-control-sm date-eff-exp-input\" value=\"{{commConfig.expiration}}\" readonly>\n  </div>\n</div>\n\n<div *ngIf=\"lastConfigRow\" >\n  <!-- this _is_ the last (new) row that will be inserted -->\n\n  <div *ngIf=\"dateType === 'effective'\" class=\"flex-justify-center\">\n    <!-- set the effective date for the new row -->\n    <app-date-picker-popup [dateValue]=\"commConfig.effective\"\n      (newDateValue)=\"updateDateValue($event)\"></app-date-picker-popup></div>\n\n  <div *ngIf=\"dateType === 'expiration'\" class=\"flex-justify-center\">\n    <!-- the expiration date of the new row -->\n    <input class=\"form-control form-control-sm date-eff-exp-input\" value=\"{{commConfig.expiration}}\" readonly>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/components/date-eff-exp/date-eff-exp.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flex-justify-left {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: left;\n      -ms-flex-align: left;\n          align-items: left;\n  padding: 0 0 0 10px; }\n\n.flex-justify-center {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.flex-justify-right {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: right;\n      -ms-flex-align: right;\n          align-items: right; }\n\n.date-eff-exp-input {\n  width: 80px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/date-eff-exp/date-eff-exp.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateEffExpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DateEffExpComponent = (function () {
    function DateEffExpComponent() {
        this.newDateValue = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    DateEffExpComponent.prototype.ngOnInit = function () {
    };
    DateEffExpComponent.prototype.updateDateValue = function (newDate) {
        console.log('DateEffExpComponent updateDateValue: ', newDate.newDateValue);
        this.newDateValue.emit(newDate.newDateValue);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], DateEffExpComponent.prototype, "dateType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], DateEffExpComponent.prototype, "commConfig", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], DateEffExpComponent.prototype, "lastConfigRow", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], DateEffExpComponent.prototype, "newDateValue", void 0);
    DateEffExpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-date-eff-exp',
            template: __webpack_require__("../../../../../src/app/shared/components/date-eff-exp/date-eff-exp.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/date-eff-exp/date-eff-exp.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewEncapsulation */].Emulated
        }),
        __metadata("design:paramtypes", [])
    ], DateEffExpComponent);
    return DateEffExpComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/date-picker-popup/date-picker-popup.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"col-xs-2\"\n  (click)=\"onClick($event)\"\n  (appClickOutside)=\"onClickedOutside($event, d)\"\n  [attachOutsideOnClick]=\"attachOutsideOnClick\"\n  [delayClickOutsideInit]=\"delayClickOutsideInit\"\n  [clickOutsideEvents]=\"clickOutsideEvents\"\n  [exclude]=\"exclude\"\n  [excludeBeforeClick]=\"excludeBeforeClick\">\n\n  <input name=\"dp\" [(ngModel)]=\"dateModel\" class=\"form-control form-control-sm date-eff-exp-input\" placeholder=\"yyyy-mm-dd\"\n         (click)=\"d.toggle()\" (ngModelChange)=\"saveDate($event)\" ngbDatepicker #d=\"ngbDatepicker\"\n         [required]=\"required\">\n\n </div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/date-picker-popup/date-picker-popup.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flex-justify-left {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: left;\n      -ms-flex-align: left;\n          align-items: left;\n  padding: 0 0 0 10px; }\n\n.flex-justify-center {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.flex-justify-right {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: right;\n      -ms-flex-align: right;\n          align-items: right; }\n\n.date-eff-exp-input {\n  width: 80px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/date-picker-popup/date-picker-popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatePickerPopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DatePickerPopupComponent = (function () {
    function DatePickerPopupComponent() {
        this.attachOutsideOnClick = true;
        this.delayClickOutsideInit = false;
        this.clickOutsideEvents = 'click';
        this.exclude = 'ngb-datepicker, .btn-light';
        this.excludeBeforeClick = false;
        this.newDateValue = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    DatePickerPopupComponent.prototype.ngOnInit = function () {
        console.log('DatePickerPopup datevalue: ', this.dateValue);
        var inputDate = new Date(this.dateValue);
        this.dateModel = { day: inputDate.getUTCDate(), month: inputDate.getUTCMonth() + 1, year: inputDate.getUTCFullYear() };
    };
    DatePickerPopupComponent.prototype.saveDate = function (newDateValue) {
        var newDate = (newDateValue) ?
            newDateValue.year + '-' + newDateValue.month + '-' + newDateValue.day :
            '';
        console.log('DatepickerPopupComponent saveDate: ', newDate);
        this.newDateValue.emit({
            newDateValue: newDate
        });
    };
    DatePickerPopupComponent.prototype.onClick = function (e) {
        console.log('Clicked inside:', e);
    };
    DatePickerPopupComponent.prototype.onClickedOutside = function (e, d) {
        console.log('Clicked outside:', e);
        d.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], DatePickerPopupComponent.prototype, "dateValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], DatePickerPopupComponent.prototype, "required", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], DatePickerPopupComponent.prototype, "newDateValue", void 0);
    DatePickerPopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-date-picker-popup',
            template: __webpack_require__("../../../../../src/app/shared/components/date-picker-popup/date-picker-popup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/date-picker-popup/date-picker-popup.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], DatePickerPopupComponent);
    return DatePickerPopupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/select-channel-mandatory/select-channel-mandatory.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!lastConfigRow\" class=\"flex-justify-right\">\n  <select id=\"{{id}}_{{name}}\" name=\"{{name}}\" value=\"actualStaticValue\" required\n    class=\"form-control form-control-sm\" readonly>\n    <option value=\"actualStaticValue\">{{actualStaticValue}}</option>\n  </select>\n</div>\n<div *ngIf=\"lastConfigRow\" class=\"flex-justify-right\">\n  <select id=\"{{id}}_{{name}}\" name=\"{{name}}\" [(ngModel)]=\"value\" required\n    class=\"form-control form-control-sm\" (blur)=\"onBlur()\">\n    <option *ngFor=\"let cmo of chanMandatoryOpts\" [ngValue]=\"cmo\">{{cmo}}</option>\n  </select>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/components/select-channel-mandatory/select-channel-mandatory.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flex-justify-left {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: left;\n      -ms-flex-align: left;\n          align-items: left;\n  padding: 0 0 0 10px; }\n\n.flex-justify-center {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.flex-justify-right {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: right;\n      -ms-flex-align: right;\n          align-items: right; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/select-channel-mandatory/select-channel-mandatory.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectChannelMandatoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var noop = function () {
};
/* tslint:disable:no-use-before-declare */
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* forwardRef */])(function () { return SelectChannelMandatoryComponent; }),
    multi: true
};
/* tslint:enable:no-use-before-declare */
var SelectChannelMandatoryComponent = (function () {
    function SelectChannelMandatoryComponent() {
        // Placeholders for the callbacks which are later providesd
        // by the Control Value Accessor
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        this.chanMandatoryOpts = ['No', 'Email', 'IVR', 'SMS'];
        this.innerValue = '';
    }
    SelectChannelMandatoryComponent.prototype.ngOnInit = function () {
        console.log('SelectChannelMandatoryComponent:', this.id, this.name);
    };
    Object.defineProperty(SelectChannelMandatoryComponent.prototype, "value", {
        // get accessor
        get: function () {
            return this.innerValue;
        },
        // set accessor including call the onchange callback
        set: function (v) {
            if (v !== this.innerValue) {
                this.innerValue = v;
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    // Set touched on blur
    SelectChannelMandatoryComponent.prototype.onBlur = function () {
        this.onTouchedCallback();
    };
    // From ControlValueAccessor interface
    SelectChannelMandatoryComponent.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    // From ControlValueAccessor interface
    SelectChannelMandatoryComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    // From ControlValueAccessor interface
    SelectChannelMandatoryComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], SelectChannelMandatoryComponent.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], SelectChannelMandatoryComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], SelectChannelMandatoryComponent.prototype, "actualStaticValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], SelectChannelMandatoryComponent.prototype, "lastConfigRow", void 0);
    SelectChannelMandatoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-select-channel-mandatory',
            template: __webpack_require__("../../../../../src/app/shared/components/select-channel-mandatory/select-channel-mandatory.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/select-channel-mandatory/select-channel-mandatory.component.scss")],
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], SelectChannelMandatoryComponent);
    return SelectChannelMandatoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/select-channel-priority/select-channel-priority.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"lastConfigRow\" class=\"flex-justify-right\">\n  <select id=\"{{id}}\" name=\"{{name}}\" [(ngModel)]=\"value\" required\n    class=\"form-control form-control-sm\" (blur)=\"onBlur()\">\n    <option *ngFor=\"let cpo of channelPriortyOpts\" [ngValue]=\"cpo\">{{cpo}}</option>\n  </select>\n</div>\n<div *ngIf=\"!lastConfigRow\" class=\"flex-justify-right\">\n  <select id=\"{{id}}\" name=\"{{name}}\" value=\"actualStaticValue\" required\n    class=\"form-control form-control-sm\" disabled>\n    <option value=\"actualStaticValue\">{{actualStaticValue}}</option>\n  </select>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/components/select-channel-priority/select-channel-priority.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flex-justify-left {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: left;\n      -ms-flex-align: left;\n          align-items: left;\n  padding: 0 0 0 10px; }\n\n.flex-justify-center {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.flex-justify-right {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: right;\n      -ms-flex-align: right;\n          align-items: right; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/select-channel-priority/select-channel-priority.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectChannelPriorityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var noop = function () {
};
/* tslint:disable:no-use-before-declare */
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* forwardRef */])(function () { return SelectChannelPriorityComponent; }),
    multi: true
};
/* tslint:enable:no-use-before-declare */
var SelectChannelPriorityComponent = (function () {
    function SelectChannelPriorityComponent() {
        // Placeholders for the callbacks which are later providesd
        // by the Control Value Accessor
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        this.channelPriortyOpts = [0, 1, 2, 3];
        // http://almerosteyn.com/2016/04/linkup-custom-control-to-ngcontrol-ngmodel
        // The internal data model
        this.innerValue = '';
    }
    SelectChannelPriorityComponent.prototype.ngOnInit = function () {
        // console.log("SelectChannelPriorityComponent ");
        // console.log("name: ", this.name);
        // console.log("priority: ", this.priority);
        // console.log("i: ", this.i);
        // console.log("lastPgmConfigRow: ", this.lastPgmConfigRow);
    };
    Object.defineProperty(SelectChannelPriorityComponent.prototype, "value", {
        // get accessor
        get: function () {
            return this.innerValue;
        },
        // set accessor including call the onchange callback
        set: function (v) {
            if (v !== this.innerValue) {
                this.innerValue = v;
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    // Set touched on blur
    SelectChannelPriorityComponent.prototype.onBlur = function () {
        this.onTouchedCallback();
    };
    // From ControlValueAccessor interface
    SelectChannelPriorityComponent.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    // From ControlValueAccessor interface
    SelectChannelPriorityComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    // From ControlValueAccessor interface
    SelectChannelPriorityComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], SelectChannelPriorityComponent.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], SelectChannelPriorityComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], SelectChannelPriorityComponent.prototype, "actualStaticValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], SelectChannelPriorityComponent.prototype, "lastConfigRow", void 0);
    SelectChannelPriorityComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-select-channel-priority',
            template: __webpack_require__("../../../../../src/app/shared/components/select-channel-priority/select-channel-priority.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/select-channel-priority/select-channel-priority.component.scss")],
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], SelectChannelPriorityComponent);
    return SelectChannelPriorityComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/select-profile-option/select-profile-option.component.html":
/***/ (function(module, exports) {

module.exports = "<span *ngIf=\"showHeader\">\n  <label for=\"{{name}}\" class=\"text-white bg-gradient-dark flex-justify-center rounded\">\n    {{label}}</label>\n</span>\n\n<span *ngIf=\"staticReadOnly\">\n  <select class=\"form-control form-control-sm flex-justify-right\"\n          id=\"{{id}}\" name=\"{{name}}\" value=\"actualStaticValue\" readonly>\n          <option value=\"actualStaticValue\">{{staticReadonlyOption}}</option>\n  </select>\n</span>\n\n<span *ngIf=\"dynamicPicker\">\n  <select class=\"form-control form-control-sm flex-justify-right\"\n          [(ngModel)]=\"value\" id=\"{{id}}\" name=\"{{name}}\" required (blur)=\"onBlur()\">\n    <option *ngFor=\"let po of profileOpts\" [ngValue]=\"po.val\">{{po.opt}}</option>>\n  </select>\n</span>"

/***/ }),

/***/ "../../../../../src/app/shared/components/select-profile-option/select-profile-option.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flex-justify-left {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: left;\n      -ms-flex-align: left;\n          align-items: left;\n  padding: 0 0 0 10px; }\n\n.flex-justify-center {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.flex-justify-right {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: right;\n      -ms-flex-align: right;\n          align-items: right; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/select-profile-option/select-profile-option.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectProfileOptionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var noop = function () {
};
/* tslint:disable:no-use-before-declare */
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* forwardRef */])(function () { return SelectProfileOptionComponent; }),
    multi: true
};
/* tslint:enable:no-use-before-declare */
var SelectProfileOptionComponent = (function () {
    function SelectProfileOptionComponent() {
        // Placeholders for the callbacks which are later providesd
        // by the Control Value Accessor
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        this.profileOpts = [{ opt: 'Y', val: true }, { opt: 'N', val: false }];
        // http://almerosteyn.com/2016/04/linkup-custom-control-to-ngcontrol-ngmodel
        // The internal data model
        this.innerValue = '';
    }
    SelectProfileOptionComponent.prototype.ngOnInit = function () {
        this.staticReadonlyOption = this.staticValue ? 'Y' : 'N';
    };
    Object.defineProperty(SelectProfileOptionComponent.prototype, "value", {
        // get accessor
        get: function () {
            return this.innerValue;
        },
        // set accessor including call the onchange callback
        set: function (v) {
            if (v !== this.innerValue) {
                this.innerValue = v;
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    // Set touched on blur
    SelectProfileOptionComponent.prototype.onBlur = function () {
        this.onTouchedCallback();
    };
    // From ControlValueAccessor interface
    SelectProfileOptionComponent.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    // From ControlValueAccessor interface
    SelectProfileOptionComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    // From ControlValueAccessor interface
    SelectProfileOptionComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], SelectProfileOptionComponent.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], SelectProfileOptionComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], SelectProfileOptionComponent.prototype, "label", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], SelectProfileOptionComponent.prototype, "staticValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], SelectProfileOptionComponent.prototype, "showHeader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], SelectProfileOptionComponent.prototype, "staticReadOnly", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], SelectProfileOptionComponent.prototype, "dynamicPicker", void 0);
    SelectProfileOptionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-select-profile-option',
            template: __webpack_require__("../../../../../src/app/shared/components/select-profile-option/select-profile-option.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/select-profile-option/select-profile-option.component.scss")],
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], SelectProfileOptionComponent);
    return SelectProfileOptionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/sortable-column/sortable-column.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>\r\n<i id=\"chevron\" class=\"fa fa-chevron-up\" *ngIf=\"sortDirection === 'asc'\" title=\"Ascending\"></i>\r\n<i id=\"chevron\" class=\"fa fa-chevron-down\" *ngIf=\"sortDirection === 'desc'\" title=\"Descending\"></i>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/sortable-column/sortable-column.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#chevron {\n  color: #fff;\n  text-shadow: 1px 1px 1px #ccc;\n  font-size: 0.5em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/sortable-column/sortable-column.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortableColumnComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_services_sortable_column_service__ = __webpack_require__("../../../../../src/app/shared/services/sortable-column.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// http://www.carbonatethis.com/sort-table-columns-with-angular-and-typescript/
var SortableColumnComponent = (function () {
    function SortableColumnComponent(sortService) {
        this.sortService = sortService;
        this.sortDirection = '';
    }
    SortableColumnComponent.prototype.sort = function () {
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
        this.sortService.columnSorted({ sortColumn: this.columnName, sortDirection: this.sortDirection });
    };
    SortableColumnComponent.prototype.ngOnInit = function () {
        var _this = this;
        // subscribe to sort changes so we can react when other columns are sorted
        this.columnSortedSubscription = this.sortService.columnSorted$.subscribe(function (event) {
            // reset this column's sort direction to hide the sort icons
            if (_this.columnName !== event.sortColumn) {
                _this.sortDirection = '';
            }
        });
    };
    SortableColumnComponent.prototype.ngOnDestroy = function () {
        this.columnSortedSubscription.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], SortableColumnComponent.prototype, "columnName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], SortableColumnComponent.prototype, "sortDirection", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SortableColumnComponent.prototype, "sort", null);
    SortableColumnComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sortable-column',
            template: __webpack_require__("../../../../../src/app/shared/components/sortable-column/sortable-column.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/sortable-column/sortable-column.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_shared_services_sortable_column_service__["a" /* SortableColumnService */]])
    ], SortableColumnComponent);
    return SortableColumnComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/test/click-outside/click-outside.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>Click Outside Test</h4>\r\n<div\r\n  (click)=\"onClick($event)\"\r\n  (appClickOutside)=\"onClickedOutside($event)\"\r\n  [attachOutsideOnClick]=\"attachOutsideOnClick\">\r\n  <p>Clicked inside: {{countInside}}</p>\r\n  <p>Clicked outside: {{countOutside}}</p>\r\n\r\n  <label>\r\n    <input type=\"checkbox\" [checked]=\"attachOutsideOnClick\" (click)=\"_toggleAttachOutsideOnClick()\" />\r\n    <span>Attach on click</span>\r\n  </label>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/test/click-outside/click-outside.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0; }\n\nhtml,\nbody {\n  height: 100%;\n  width: 100%; }\n\nbody {\n  background: #f6f6f6;\n  color: #545555;\n  font: 400 1em/1.25 \"Source Sans Pro\", \"Helvetica\", \"Arial\", sans-serif; }\n\n::-moz-selection {\n  background-color: #06d68a;\n  color: #fff; }\n\n::selection {\n  background-color: #06d68a;\n  color: #fff; }\n\na {\n  color: #06d68a;\n  text-decoration: none; }\n  a:hover {\n    border-bottom: 1px dotted #06d68a; }\n\nbody {\n  text-align: center; }\n\nheader {\n  background: #fff;\n  box-shadow: 0 0.15em 2em rgba(153, 153, 153, 0.25);\n  margin-bottom: 2em;\n  padding: 1em; }\n\ndemo {\n  border: 3px solid #06d68a;\n  display: block;\n  margin: 2em auto;\n  max-width: 800px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n      user-select: none; }\n  demo > div {\n    padding: 2em; }\n\na {\n  padding: 0.5em 1em; }\n  a + a {\n    border-left: 1px solid #999; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/test/click-outside/click-outside.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClickOutsideComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClickOutsideComponent = (function () {
    function ClickOutsideComponent() {
        this.countInside = 0;
        this.countOutside = 0;
        this.attachOutsideOnClick = false;
    }
    ClickOutsideComponent.prototype.ngOnInit = function () {
    };
    ClickOutsideComponent.prototype._toggleAttachOutsideOnClick = function () {
        this.attachOutsideOnClick = !this.attachOutsideOnClick;
    };
    ClickOutsideComponent.prototype.onClick = function (e) {
        console.log('Clicked inside:', e);
        this.countInside++;
    };
    ClickOutsideComponent.prototype.onClickedOutside = function (e) {
        console.log('Clicked outside:', e);
        this.countOutside++;
    };
    ClickOutsideComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-click-outside-test',
            template: __webpack_require__("../../../../../src/app/shared/components/test/click-outside/click-outside.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/test/click-outside/click-outside.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ClickOutsideComponent);
    return ClickOutsideComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/test/drag-drop/drag-drop.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>Drag Drop Demo</h4>\r\n<p>This is a complete demo that features drop scopes, custom styling, disable drag/drop & drag handles.</p>\r\n<hr>\r\n\r\n<div class=\"row\">\r\n\r\n    <div class=\"col-sm-3\">\r\n        <div class=\"card card-outline-success mb-3\">\r\n            <div class=\"card-header card-inverse card-success\">\r\n                Draggable Items\r\n            </div>\r\n            <div class=\"card-block scroll-list\">\r\n                <div class=\"list-group\">\r\n                    <li appDraggable class=\"list-group-item list-group-item-action list-group-item-success\" [draggable] *ngFor=\"let item of vegetables\" [dragClass]=\"'active'\"\r\n                        [dragTransitClass]=\"'active'\" [dragData]=\"item\" [dragScope]=\"item.type\" [dragEnabled]=\"dragEnabled\">\r\n                        {{item.name}}\r\n                    </li>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"card-footer\">\r\n                <div class=\"form-check\">\r\n                    <label class=\"form-check-label\">\r\n                        <input class=\"form-check-input\" type=\"checkbox\" value=\"\" title=\"Drag Enabled\" [(ngModel)]=\"dragEnabled\"> Drag Enabled\r\n                    </label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"card card-outline-primary mb-3\">\r\n            <div class=\"card-header card-inverse card-primary\">Draggable Items with Handle</div>\r\n            <div class=\"card-block scroll-list\">\r\n                <ul class=\"list-group text-center\">\r\n                    <li appDraggable *ngFor=\"let item of fruits\" [dragClass]=\"'drag-over'\" [dragData]=\"item\" class=\"list-group-item justify-content-between list-group-item-action\"\r\n                        [dragScope]=\"item.type\" [dragHandle]=\"'.drag-bar'\">\r\n                        {{item.name}}\r\n                        <i #dragHandle class=\"drag-bar fa fa-bars fa-lg\" aria-hidden=\"true\"></i>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-sm-3\">\r\n        <div class=\"card card-outline-primary mb-3\" appDroppable [dragOverClass]=\"'drag-target-border'\" [dropScope]=\"'fruit'\" [dragHintClass]=\"'drag-hint'\"\r\n            (onDrop)=\"onFruitDrop($event)\" [dropEnabled]=\"fruitDropEnabled\">\r\n            <div class=\"card-header card-inverse card-primary\">\r\n                Drop Fruits here\r\n            </div>\r\n            <div class=\"card-block scroll-list\">\r\n                <li *ngFor=\"let item of droppedFruits\" class=\"list-group-item\">{{item.name}}</li>\r\n            </div>\r\n\r\n            <div class=\"card-footer\">\r\n                <div class=\"form-check\">\r\n                    <label class=\"form-check-label\">\r\n                        <input class=\"form-check-input\" type=\"checkbox\" value=\"\" [(ngModel)]=\"fruitDropEnabled\"> Drop Enabled\r\n                    </label>\r\n                </div>\r\n            </div>\r\n\r\n\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"col-sm-3\">\r\n        <div class=\"card card-outline-primary mb-3\" appDroppable [dragOverClass]=\"'drag-target-border-green'\" [dropScope]=\"'vegetable'\"\r\n            [dragHintClass]=\"'drag-hint'\" (onDrop)=\"onVegetableDrop($event)\">\r\n            <div class=\"card-header card-inverse card-primary\">Drop Vegetables here</div>\r\n            <div class=\"card-block scroll-list\">\r\n                <li *ngFor=\"let item of droppedVegetables\" class=\"list-group-item\">{{item.name}}</li>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-sm-3\">\r\n        <div class=\"card card-outline-primary mb-3\" appDroppable [dragOverClass]=\"'drag-target-border'\" [dropScope]=\"['fruit', 'vegetable']\"\r\n            [dragHintClass]=\"'drag-hint'\" (onDrop)=\"onAnyDrop($event)\">\r\n            <div class=\"card-header card-inverse card-primary\">Drop Anything here</div>\r\n            <div class=\"card-block scroll-list\">\r\n                <li *ngFor=\"let item of droppedItems\" class=\"list-group-item\">{{item.name}}</li>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/components/test/drag-drop/drag-drop.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.scroll-list {\n  overflow: auto;\n  max-height: 70vh; }\n\n.drag-over {\n  border: #ff525b dashed 2px; }\n\n.drag-hint {\n  border: #ffc100 dashed 2px; }\n\n.drag-target-border {\n  border: #00bfff dashed 2px; }\n\n.drag-target-border-green {\n  border: #3c763d dashed 2px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/test/drag-drop/drag-drop.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragDropComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DragDropComponent = (function () {
    function DragDropComponent() {
        this.vegetables = [
            { name: 'Carrot', type: 'vegetable' },
            { name: 'Onion', type: 'vegetable' },
            { name: 'Potato', type: 'vegetable' },
            { name: 'Capsicum', type: 'vegetable' }
        ];
        this.fruits = [
            { name: 'Apple', type: 'fruit' },
            { name: 'Orange', type: 'fruit' },
            { name: 'Mango', type: 'fruit' },
            { name: 'Banana', type: 'fruit' }
        ];
        this.droppedFruits = [];
        this.droppedVegetables = [];
        this.droppedItems = [];
        this.fruitDropEnabled = true;
        this.dragEnabled = true;
    }
    DragDropComponent.prototype.ngOnInit = function () {
    };
    DragDropComponent.prototype.onFruitDrop = function (e) {
        this.droppedFruits.push(e.dragData);
        this.removeItem(e.dragData, this.fruits);
    };
    DragDropComponent.prototype.onVegetableDrop = function (e) {
        this.droppedVegetables.push(e.dragData);
        this.removeItem(e.dragData, this.vegetables);
    };
    DragDropComponent.prototype.onAnyDrop = function (e) {
        this.droppedItems.push(e.dragData);
        if (e.dragData.type === 'vegetable') {
            this.removeItem(e.dragData, this.vegetables);
        }
        else {
            this.removeItem(e.dragData, this.fruits);
        }
    };
    DragDropComponent.prototype.removeItem = function (item, list) {
        var index = list.map(function (e) {
            return e.name;
        }).indexOf(item.name);
        list.splice(index, 1);
    };
    DragDropComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-drag-drop-test',
            template: __webpack_require__("../../../../../src/app/shared/components/test/drag-drop/drag-drop.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/test/drag-drop/drag-drop.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DragDropComponent);
    return DragDropComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/directives/click-outside.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClickOutsideDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


// https://github.com/arkon/ng-click-outside
var ClickOutsideDirective = (function () {
    function ClickOutsideDirective(_el, platformId) {
        this._el = _el;
        this.platformId = platformId;
        this.attachOutsideOnClick = false;
        this.delayClickOutsideInit = false;
        this.exclude = '';
        this.excludeBeforeClick = false;
        this.clickOutsideEvents = '';
        this.appClickOutside = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this._nodesExcluded = [];
        this._events = ['click'];
        this._initOnClickBody = this._initOnClickBody.bind(this);
        this._onClickBody = this._onClickBody.bind(this);
    }
    ClickOutsideDirective.prototype.ngOnInit = function () {
        if (!Object(__WEBPACK_IMPORTED_MODULE_1__angular_common__["j" /* isPlatformBrowser */])(this.platformId)) {
            return;
        }
        this._init();
    };
    ClickOutsideDirective.prototype.ngOnDestroy = function () {
        var _this = this;
        if (!Object(__WEBPACK_IMPORTED_MODULE_1__angular_common__["j" /* isPlatformBrowser */])(this.platformId)) {
            return;
        }
        if (this.attachOutsideOnClick) {
            this._events.forEach(function (e) { return _this._el.nativeElement.removeEventListener(e, _this._initOnClickBody); });
        }
        this._events.forEach(function (e) { return document.body.removeEventListener(e, _this._onClickBody); });
    };
    ClickOutsideDirective.prototype.ngOnChanges = function (changes) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_1__angular_common__["j" /* isPlatformBrowser */])(this.platformId)) {
            return;
        }
        if (changes['attachOutsideOnClick'] || changes['exclude']) {
            this._init();
        }
    };
    ClickOutsideDirective.prototype._init = function () {
        var _this = this;
        if (this.clickOutsideEvents !== '') {
            this._events = this.clickOutsideEvents.split(',').map(function (e) { return e.trim(); });
        }
        this._excludeCheck();
        if (this.attachOutsideOnClick) {
            this._events.forEach(function (e) { return _this._el.nativeElement.addEventListener(e, _this._initOnClickBody); });
        }
        else {
            this._initOnClickBody();
        }
    };
    ClickOutsideDirective.prototype._initOnClickBody = function () {
        if (this.delayClickOutsideInit) {
            setTimeout(this._initClickListeners.bind(this));
        }
        else {
            this._initClickListeners();
        }
    };
    ClickOutsideDirective.prototype._initClickListeners = function () {
        var _this = this;
        this._events.forEach(function (e) { return document.body.addEventListener(e, _this._onClickBody); });
    };
    ClickOutsideDirective.prototype._excludeCheck = function () {
        if (this.exclude) {
            try {
                var nodes = Array.from(document.querySelectorAll(this.exclude));
                if (nodes) {
                    this._nodesExcluded = nodes;
                }
            }
            catch (err) {
                console.error('[ng-click-outside] Check your exclude selector syntax.', err);
            }
        }
    };
    ClickOutsideDirective.prototype._onClickBody = function (ev) {
        var _this = this;
        if (this.excludeBeforeClick) {
            this._excludeCheck();
        }
        if (!this._el.nativeElement.contains(ev.target) && !this._shouldExclude(ev.target)) {
            this.appClickOutside.emit(ev);
            if (this.attachOutsideOnClick) {
                this._events.forEach(function (e) { return document.body.removeEventListener(e, _this._onClickBody); });
            }
        }
    };
    ClickOutsideDirective.prototype._shouldExclude = function (target) {
        for (var _i = 0, _a = this._nodesExcluded; _i < _a.length; _i++) {
            var excludedNode = _a[_i];
            if (excludedNode.contains(target)) {
                return true;
            }
        }
        return false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ClickOutsideDirective.prototype, "attachOutsideOnClick", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ClickOutsideDirective.prototype, "delayClickOutsideInit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ClickOutsideDirective.prototype, "exclude", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ClickOutsideDirective.prototype, "excludeBeforeClick", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ClickOutsideDirective.prototype, "clickOutsideEvents", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], ClickOutsideDirective.prototype, "appClickOutside", void 0);
    ClickOutsideDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[appClickOutside]'
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* PLATFORM_ID */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */],
            Object])
    ], ClickOutsideDirective);
    return ClickOutsideDirective;
}());



/***/ }),

/***/ "../../../../../src/app/shared/directives/drag-drop/dom-helper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DomHelper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

var DomHelper = (function () {
    function DomHelper() {
    }
    /**
     * Polyfill for element.matches()
     * See: https://developer.mozilla.org/en/docs/Web/API/Element/matches#Polyfill
     * @param element
     * @param selectorName
     */
    DomHelper.matches = function (element, selectorName) {
        var proto = Element.prototype;
        /* tslint:disable:prefer-const */
        var func = proto['matches'] ||
            proto.matchesSelector ||
            proto.mozMatchesSelector ||
            proto.msMatchesSelector ||
            proto.oMatchesSelector ||
            proto.webkitMatchesSelector ||
            function (s) {
                var matches = (this.document || this.ownerDocument).querySelectorAll(s), i = matches.length;
                while (--i >= 0 && matches.item(i) !== this) { }
                return i > -1;
            };
        /* tslint:enable:prefer-const */
        return func.call(element, selectorName);
    };
    /**
     * Applies the specified css class on nativeElement
     * @param elementRef
     * @param className
     */
    DomHelper.addClass = function (elementRef, className) {
        var e = this.getElementWithValidClassList(elementRef);
        if (e) {
            e.classList.add(className);
        }
    };
    /**
     * Removes the specified class from nativeElement
     * @param elementRef
     * @param className
     */
    DomHelper.removeClass = function (elementRef, className) {
        var e = this.getElementWithValidClassList(elementRef);
        if (e) {
            e.classList.remove(className);
        }
    };
    /**
     * Gets element with valid classList
     *
     * @param elementRef
     * @returns ElementRef | null
     */
    DomHelper.getElementWithValidClassList = function (elementRef) {
        var e = elementRef instanceof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] ? elementRef.nativeElement : elementRef;
        if (e.classList !== undefined && e.classList !== null) {
            return e;
        }
        return null;
    };
    return DomHelper;
}());



/***/ }),

/***/ "../../../../../src/app/shared/directives/drag-drop/draggable.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DraggableDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_services_drag_drop_service__ = __webpack_require__("../../../../../src/app/shared/services/drag-drop.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dom_helper__ = __webpack_require__("../../../../../src/app/shared/directives/drag-drop/dom-helper.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DraggableDirective = (function () {
    function DraggableDirective(el, renderer, ng2DragDropService, zone) {
        this.el = el;
        this.renderer = renderer;
        this.ng2DragDropService = ng2DragDropService;
        this.zone = zone;
        /**
         * Currently not used
         */
        this.dragEffect = 'move';
        /**
         * Defines compatible drag drop pairs. Values must match both in draggable and droppable.dropScope.
         */
        this.dragScope = 'default';
        /**
         * The CSS class applied to a draggable element. If a dragHandle is defined then its applied to that handle
         * element only. By default it is used to change the mouse over pointer.
         */
        this.dragHandleClass = 'drag-handle';
        /**
         * CSS class applied on the source draggable element while being dragged.
         */
        this.dragClass = 'drag-border';
        /**
         * CSS class applied on the drag ghost when being dragged.
         */
        this.dragTransitClass = 'drag-transit';
        /**
         * Event fired when Drag is started
         */
        this.onDragStart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * Event fired while the element is being dragged
         */
        this.onDrag = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * Event fired when drag ends
         */
        this.onDragEnd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * @private
         * Backing field for the dragEnabled property
         */
        this._dragEnabled = true;
    }
    Object.defineProperty(DraggableDirective.prototype, "dragImage", {
        get: function () {
            return this._dragImage;
        },
        /**
         * The url to image that will be used as custom drag image when the draggable is being dragged.
         */
        set: function (value) {
            this._dragImage = value;
            this.dragImageElement = new Image();
            this.dragImageElement.src = this.dragImage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DraggableDirective.prototype, "dragEnabled", {
        get: function () {
            return this._dragEnabled;
        },
        /**
         * Defines if drag is enabled. `true` by default.
         */
        set: function (value) {
            this._dragEnabled = value;
            this.applyDragHandleClass();
        },
        enumerable: true,
        configurable: true
    });
    DraggableDirective.prototype.ngOnInit = function () {
        this.applyDragHandleClass();
    };
    DraggableDirective.prototype.ngOnDestroy = function () {
        this.unbindDragListeners();
    };
    DraggableDirective.prototype.dragStart = function (e) {
        var _this = this;
        if (this.allowDrag()) {
            // This is a kludgy approach to apply CSS to the drag helper element when an image is being dragged.
            __WEBPACK_IMPORTED_MODULE_2__dom_helper__["a" /* DomHelper */].addClass(this.el, this.dragTransitClass);
            setTimeout(function () {
                __WEBPACK_IMPORTED_MODULE_2__dom_helper__["a" /* DomHelper */].addClass(_this.el, _this.dragClass);
                __WEBPACK_IMPORTED_MODULE_2__dom_helper__["a" /* DomHelper */].removeClass(_this.el, _this.dragTransitClass);
            }, 10);
            this.ng2DragDropService.dragData = this.dragData;
            this.ng2DragDropService.scope = this.dragScope;
            // Firefox requires setData() to be called otherwise the drag does not work.
            // We don't use setData() to transfer data anymore so this is just a dummy call.
            if (e.dataTransfer != null) {
                e.dataTransfer.setData('text', '');
            }
            // Set dragImage
            if (this.dragImage) {
                e.dataTransfer.setDragImage(this.dragImageElement, 0, 0);
            }
            e.stopPropagation();
            this.onDragStart.emit(e);
            this.ng2DragDropService.onDragStart.next();
            this.zone.runOutsideAngular(function () {
                _this.unbindDragListener = _this.renderer.listen(_this.el.nativeElement, 'drag', function (dragEvent) {
                    _this.drag(dragEvent);
                });
            });
        }
        else {
            e.preventDefault();
        }
    };
    DraggableDirective.prototype.drag = function (e) {
        this.onDrag.emit(e);
    };
    DraggableDirective.prototype.dragEnd = function (e) {
        this.unbindDragListeners();
        __WEBPACK_IMPORTED_MODULE_2__dom_helper__["a" /* DomHelper */].removeClass(this.el, this.dragClass);
        this.ng2DragDropService.onDragEnd.next();
        this.onDragEnd.emit(e);
        e.stopPropagation();
        e.preventDefault();
    };
    DraggableDirective.prototype.mousedown = function (e) {
        this.mouseDownElement = e.target;
    };
    DraggableDirective.prototype.allowDrag = function () {
        if (this.dragHandle) {
            return __WEBPACK_IMPORTED_MODULE_2__dom_helper__["a" /* DomHelper */].matches(this.mouseDownElement, this.dragHandle) && this.dragEnabled;
        }
        else {
            return this.dragEnabled;
        }
    };
    DraggableDirective.prototype.applyDragHandleClass = function () {
        var dragElement = this.getDragHandleElement();
        if (!dragElement) {
            return;
        }
        if (this.dragEnabled) {
            __WEBPACK_IMPORTED_MODULE_2__dom_helper__["a" /* DomHelper */].addClass(dragElement, this.dragHandleClass);
        }
        else {
            __WEBPACK_IMPORTED_MODULE_2__dom_helper__["a" /* DomHelper */].removeClass(this.el, this.dragHandleClass);
        }
    };
    DraggableDirective.prototype.getDragHandleElement = function () {
        var dragElement = this.el;
        if (this.dragHandle) {
            dragElement = this.el.nativeElement.querySelector(this.dragHandle);
        }
        return dragElement;
    };
    DraggableDirective.prototype.unbindDragListeners = function () {
        if (this.unbindDragListener) {
            this.unbindDragListener();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], DraggableDirective.prototype, "dragData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], DraggableDirective.prototype, "dragHandle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], DraggableDirective.prototype, "dragEffect", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], DraggableDirective.prototype, "dragScope", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], DraggableDirective.prototype, "dragHandleClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], DraggableDirective.prototype, "dragClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], DraggableDirective.prototype, "dragTransitClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], DraggableDirective.prototype, "dragImage", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('draggable'),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], DraggableDirective.prototype, "dragEnabled", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], DraggableDirective.prototype, "onDragStart", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], DraggableDirective.prototype, "onDrag", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], DraggableDirective.prototype, "onDragEnd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('dragstart', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DraggableDirective.prototype, "dragStart", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('dragend', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DraggableDirective.prototype, "dragEnd", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('mousedown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DraggableDirective.prototype, "mousedown", null);
    DraggableDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[appDraggable]'
        })
        /**
         * Makes an element draggable by adding the draggable html attribute
         */
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer2 */],
            __WEBPACK_IMPORTED_MODULE_1_app_shared_services_drag_drop_service__["a" /* DragDropService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* NgZone */]])
    ], DraggableDirective);
    return DraggableDirective;
}());



/***/ }),

/***/ "../../../../../src/app/shared/directives/drag-drop/drop-event.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropEvent; });
var DropEvent = (function () {
    function DropEvent(event, data) {
        this.nativeEvent = event;
        this.dragData = data;
    }
    return DropEvent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/directives/drag-drop/droppable.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DroppableDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drop_event_model__ = __webpack_require__("../../../../../src/app/shared/directives/drag-drop/drop-event.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_services_drag_drop_service__ = __webpack_require__("../../../../../src/app/shared/services/drag-drop.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dom_helper__ = __webpack_require__("../../../../../src/app/shared/directives/drag-drop/dom-helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DroppableDirective = (function () {
    function DroppableDirective(el, renderer, ng2DragDropService, zone) {
        this.el = el;
        this.renderer = renderer;
        this.ng2DragDropService = ng2DragDropService;
        this.zone = zone;
        /**
         *  Event fired when Drag dragged element enters a valid drop target.
         */
        this.onDragEnter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * Event fired when an element is being dragged over a valid drop target
         */
        this.onDragOver = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * Event fired when a dragged element leaves a valid drop target.
         */
        this.onDragLeave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * Event fired when an element is dropped on a valid drop target.
         */
        this.onDrop = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * CSS class that is applied when a compatible draggable is being dragged over this droppable.
         */
        this.dragOverClass = 'drag-over-border';
        /**
         * CSS class applied on this droppable when a compatible draggable item is being dragged.
         * This can be used to visually show allowed drop zones.
         */
        this.dragHintClass = 'drag-hint-border';
        /**
         * Defines compatible drag drop pairs. Values must match both in draggable and droppable.dropScope.
         */
        this.dropScope = 'default';
        /**
         * @private
         * Backing field for the dropEnabled property
         */
        this._dropEnabled = true;
        /**
         * @private
         * Field for tracking drag state. Helps when
         * drag stop event occurs before the allowDrop()
         * can be calculated (async).
         */
        this._isDragActive = false;
        /**
         * @private
         * Field for tracking if service is subscribed.
         * Avoids creating multiple subscriptions of service.
         */
        this._isServiceActive = false;
    }
    Object.defineProperty(DroppableDirective.prototype, "dropEnabled", {
        get: function () {
            return this._dropEnabled;
        },
        /**
         * Defines if drop is enabled. `true` by default.
         */
        set: function (value) {
            this._dropEnabled = value;
            if (this._dropEnabled === true) {
                this.subscribeService();
            }
            else {
                this.unsubscribeService();
            }
        },
        enumerable: true,
        configurable: true
    });
    DroppableDirective.prototype.ngOnInit = function () {
        if (this.dropEnabled === true) {
            this.subscribeService();
        }
    };
    DroppableDirective.prototype.ngOnDestroy = function () {
        this.unsubscribeService();
        this.unbindDragListeners();
    };
    DroppableDirective.prototype.dragEnter = function (e) {
        e.preventDefault();
        e.stopPropagation();
        this.onDragEnter.emit(e);
    };
    DroppableDirective.prototype.dragOver = function (e, result) {
        if (result) {
            __WEBPACK_IMPORTED_MODULE_3__dom_helper__["a" /* DomHelper */].addClass(this.el, this.dragOverClass);
            e.preventDefault();
            this.onDragOver.emit(e);
        }
    };
    DroppableDirective.prototype.dragLeave = function (e) {
        __WEBPACK_IMPORTED_MODULE_3__dom_helper__["a" /* DomHelper */].removeClass(this.el, this.dragOverClass);
        e.preventDefault();
        this.onDragLeave.emit(e);
    };
    DroppableDirective.prototype.drop = function (e) {
        __WEBPACK_IMPORTED_MODULE_3__dom_helper__["a" /* DomHelper */].removeClass(this.el, this.dragOverClass);
        e.preventDefault();
        e.stopPropagation();
        this.ng2DragDropService.onDragEnd.next();
        this.onDrop.emit(new __WEBPACK_IMPORTED_MODULE_1__drop_event_model__["a" /* DropEvent */](e, this.ng2DragDropService.dragData));
        this.ng2DragDropService.dragData = null;
        this.ng2DragDropService.scope = null;
    };
    DroppableDirective.prototype.allowDrop = function () {
        var _this = this;
        var allowed = false;
        /* tslint:disable:curly */
        /* tslint:disable:one-line */
        if (typeof this.dropScope === 'string') {
            if (typeof this.ng2DragDropService.scope === 'string')
                allowed = this.ng2DragDropService.scope === this.dropScope;
            else if (this.ng2DragDropService.scope instanceof Array)
                allowed = this.ng2DragDropService.scope.indexOf(this.dropScope) > -1;
        }
        else if (this.dropScope instanceof Array) {
            if (typeof this.ng2DragDropService.scope === 'string')
                allowed = this.dropScope.indexOf(this.ng2DragDropService.scope) > -1;
            else if (this.ng2DragDropService.scope instanceof Array)
                allowed = this.dropScope.filter(function (item) {
                    return _this.ng2DragDropService.scope.indexOf(item) !== -1;
                }).length > 0;
        }
        else if (typeof this.dropScope === 'function') {
            allowed = this.dropScope(this.ng2DragDropService.dragData);
            if (allowed instanceof __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */]) {
                return allowed.map(function (result) { return result && _this.dropEnabled; });
            }
        }
        /* tslint:enable:curly */
        /* tslint:disable:one-line */
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].of(allowed && this.dropEnabled);
    };
    DroppableDirective.prototype.subscribeService = function () {
        var _this = this;
        if (this._isServiceActive === true) {
            return;
        }
        this._isServiceActive = true;
        this.dragStartSubscription = this.ng2DragDropService.onDragStart.subscribe(function () {
            _this._isDragActive = true;
            _this.allowDrop().subscribe(function (result) {
                if (result && _this._isDragActive) {
                    __WEBPACK_IMPORTED_MODULE_3__dom_helper__["a" /* DomHelper */].addClass(_this.el, _this.dragHintClass);
                    _this.zone.runOutsideAngular(function () {
                        _this.unbindDragEnterListener = _this.renderer.listen(_this.el.nativeElement, 'dragenter', function (dragEvent) {
                            _this.dragEnter(dragEvent);
                        });
                        _this.unbindDragOverListener = _this.renderer.listen(_this.el.nativeElement, 'dragover', function (dragEvent) {
                            _this.dragOver(dragEvent, result);
                        });
                        _this.unbindDragLeaveListener = _this.renderer.listen(_this.el.nativeElement, 'dragleave', function (dragEvent) {
                            _this.dragLeave(dragEvent);
                        });
                    });
                }
            });
        });
        this.dragEndSubscription = this.ng2DragDropService.onDragEnd.subscribe(function () {
            _this._isDragActive = false;
            __WEBPACK_IMPORTED_MODULE_3__dom_helper__["a" /* DomHelper */].removeClass(_this.el, _this.dragHintClass);
            _this.unbindDragListeners();
        });
    };
    DroppableDirective.prototype.unsubscribeService = function () {
        this._isServiceActive = false;
        if (this.dragStartSubscription) {
            this.dragStartSubscription.unsubscribe();
        }
        if (this.dragEndSubscription) {
            this.dragEndSubscription.unsubscribe();
        }
    };
    DroppableDirective.prototype.unbindDragListeners = function () {
        if (this.unbindDragEnterListener) {
            this.unbindDragEnterListener();
        }
        if (this.unbindDragOverListener) {
            this.unbindDragOverListener();
        }
        if (this.unbindDragLeaveListener) {
            this.unbindDragLeaveListener();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], DroppableDirective.prototype, "onDragEnter", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], DroppableDirective.prototype, "onDragOver", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], DroppableDirective.prototype, "onDragLeave", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], DroppableDirective.prototype, "onDrop", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], DroppableDirective.prototype, "dragOverClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], DroppableDirective.prototype, "dragHintClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], DroppableDirective.prototype, "dropScope", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], DroppableDirective.prototype, "dropEnabled", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('drop', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DroppableDirective.prototype, "drop", null);
    DroppableDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[appDroppable]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer2 */],
            __WEBPACK_IMPORTED_MODULE_2_app_shared_services_drag_drop_service__["a" /* DragDropService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* NgZone */]])
    ], DroppableDirective);
    return DroppableDirective;
}());



/***/ }),

/***/ "../../../../../src/app/shared/directives/sortable-table.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortableTableDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_services_sortable_column_service__ = __webpack_require__("../../../../../src/app/shared/services/sortable-column.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// http://www.carbonatethis.com/sort-table-columns-with-angular-and-typescript/
var SortableTableDirective = (function () {
    function SortableTableDirective(sortService) {
        this.sortService = sortService;
        this.sorted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    SortableTableDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.columnSortedSubscription = this.sortService.columnSorted$.subscribe(function (event) {
            _this.sorted.emit(event);
        });
    };
    SortableTableDirective.prototype.ngOnDestroy = function () {
        this.columnSortedSubscription.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], SortableTableDirective.prototype, "sorted", void 0);
    SortableTableDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[appSortableTable]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_shared_services_sortable_column_service__["a" /* SortableColumnService */]])
    ], SortableTableDirective);
    return SortableTableDirective;
}());



/***/ }),

/***/ "../../../../../src/app/shared/model/client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Client; });
/* unused harmony export ClientSortCriteria */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ClientConfigAction; });
// import { IClientConfig } from 'app/classes/model/iclient-config';
var Client = (function () {
    function Client(id, code, name, clientConfiguration) {
        if (id === void 0) { id = 0; }
        if (code === void 0) { code = ''; }
        if (name === void 0) { name = ''; }
        var emptyNum = [];
        this.id = id;
        this.code = code;
        this.name = name;
        this.clientConfiguration = (clientConfiguration) ? clientConfiguration : emptyNum;
    }
    Client.prototype.clone = function () {
        return new Client(this.id, this.code, this.name, this.clientConfiguration);
    };
    return Client;
}());

var ClientSortCriteria = (function () {
    function ClientSortCriteria() {
    }
    return ClientSortCriteria;
}());

var ClientConfigAction = (function () {
    function ClientConfigAction(id, type) {
        this.clientId = id;
        this.configType = type;
    }
    return ClientConfigAction;
}());



/***/ }),

/***/ "../../../../../src/app/shared/model/communication.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Communication; });
/* unused harmony export CommunicationSortCriteria */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CommunicationConfigAction; });
var Communication = (function () {
    function Communication(id, name, description, programConfiguration, clientConfiguration) {
        if (id === void 0) { id = 0; }
        if (name === void 0) { name = ''; }
        var emptyNum = [];
        this.id = id;
        this.name = name;
        this.description = (description) ? description : '';
        this.programConfiguration = (programConfiguration) ? programConfiguration : emptyNum;
        this.clientConfiguration = (clientConfiguration) ? clientConfiguration : emptyNum;
    }
    Communication.prototype.clone = function () {
        return new Communication(this.id, this.name, this.description, this.programConfiguration, this.clientConfiguration);
    };
    return Communication;
}());

var CommunicationSortCriteria = (function () {
    function CommunicationSortCriteria() {
    }
    return CommunicationSortCriteria;
}());

var CommunicationConfigAction = (function () {
    function CommunicationConfigAction(id, type) {
        this.commId = id;
        this.configType = type;
    }
    return CommunicationConfigAction;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/client-configurations/client-configurations.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientConfigurationsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var ClientConfigurationsService = (function () {
    function ClientConfigurationsService(config, http) {
        this.config = config;
        this.http = http;
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.clientConfigApiEndpoint = this.config.apiEndpoint + 'api/clientconfiguration'; // URL to web api
    }
    ClientConfigurationsService.prototype.getClientConfigurationsThruApi = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.http.get(this.clientConfigApiEndpoint).toPromise()];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                    case 2:
                        error_1 = _a.sent();
                        this.handleError(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ClientConfigurationsService.prototype.createClientConfigurationThruApi = function (clientConfiguration) {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.http.post(this.clientConfigApiEndpoint, clientConfiguration).toPromise()];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                    case 2:
                        error_2 = _a.sent();
                        this.handleError(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ClientConfigurationsService.prototype.updateClientConfigurationThruApi = function (clientConfiguration) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        url = this.clientConfigApiEndpoint + "/" + clientConfiguration.id;
                        return [4 /*yield*/, this.http.put(url, clientConfiguration).toPromise()];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                    case 2:
                        error_3 = _a.sent();
                        this.handleError(error_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ClientConfigurationsService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ClientConfigurationsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2_app_app_config__["a" /* APP_CONFIG */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ClientConfigurationsService);
    return ClientConfigurationsService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/clients/clients.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

// import { HttpModule } from '@angular/http';



var ClientsService = (function () {
    function ClientsService(config, http) {
        this.config = config;
        this.http = http;
        this.clientApiEndpoint = this.config.apiEndpoint + 'api/client'; // URL to web api
    }
    ClientsService.prototype.getClientsThruApi = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.http.get(this.clientApiEndpoint).toPromise()];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                    case 2:
                        error_1 = _a.sent();
                        this.handleError(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ClientsService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ClientsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2_app_app_config__["a" /* APP_CONFIG */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ClientsService);
    return ClientsService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/communications/communications.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunicationsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var CommunicationsService = (function () {
    function CommunicationsService(config, http) {
        this.config = config;
        this.http = http;
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.commApiEndpoint = this.config.apiEndpoint + 'api/communication'; // URL to web api
    }
    CommunicationsService.prototype.getCommunicationsThruApi = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.http.get(this.commApiEndpoint).toPromise()];
                    case 1:
                        response = _a.sent();
                        // return response.json() as Communication[];
                        return [2 /*return*/, response];
                    case 2:
                        error_1 = _a.sent();
                        this.handleError(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CommunicationsService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    CommunicationsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2_app_app_config__["a" /* APP_CONFIG */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], CommunicationsService);
    return CommunicationsService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/data-api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_services_clients_clients_service__ = __webpack_require__("../../../../../src/app/shared/services/clients/clients.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_services_client_configurations_client_configurations_service__ = __webpack_require__("../../../../../src/app/shared/services/client-configurations/client-configurations.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_services_communications_communications_service__ = __webpack_require__("../../../../../src/app/shared/services/communications/communications.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_services_programs_programs_service__ = __webpack_require__("../../../../../src/app/shared/services/programs/programs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_shared_services_program_profiles_program_profiles_service__ = __webpack_require__("../../../../../src/app/shared/services/program-profiles/program-profiles.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_shared_services_program_configurations_program_configurations_service__ = __webpack_require__("../../../../../src/app/shared/services/program-configurations/program-configurations.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var DataApiService = (function () {
    function DataApiService(communicationsService, clientsService, clientConfigurationsService, programsService, programProfileService, programConfigurationService) {
        this.communicationsService = communicationsService;
        this.clientsService = clientsService;
        this.clientConfigurationsService = clientConfigurationsService;
        this.programsService = programsService;
        this.programProfileService = programProfileService;
        this.programConfigurationService = programConfigurationService;
    }
    DataApiService.prototype.getCommunications = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.communications) return [3 /*break*/, 1];
                        return [2 /*return*/, this.communications];
                    case 1:
                        _a = this;
                        return [4 /*yield*/, this.communicationsService.getCommunicationsThruApi()];
                    case 2:
                        _a.communications = _b.sent();
                        // return this.removeProgramConfigurationCruft(this.communications);
                        return [2 /*return*/, this.communications];
                }
            });
        });
    };
    DataApiService.prototype.getClients = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.clients) return [3 /*break*/, 1];
                        return [2 /*return*/, this.clients];
                    case 1:
                        _a = this;
                        return [4 /*yield*/, this.clientsService.getClientsThruApi()];
                    case 2:
                        _a.clients = _b.sent();
                        // return this.removeClientConfigurationCruft(this.clients);
                        return [2 /*return*/, this.clients];
                }
            });
        });
    };
    DataApiService.prototype.getClientConfigurations = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.clientConfigurations) return [3 /*break*/, 1];
                        return [2 /*return*/, this.clientConfigurations];
                    case 1:
                        _a = this;
                        return [4 /*yield*/, this.clientConfigurationsService.getClientConfigurationsThruApi()];
                    case 2:
                        _a.clientConfigurations = _b.sent();
                        return [2 /*return*/, this.clientConfigurations];
                }
            });
        });
    };
    DataApiService.prototype.createClientConfiguration = function (clientConfiguration) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clientConfigurationsService.createClientConfigurationThruApi(clientConfiguration)];
                    case 1:
                        clientConfiguration = _a.sent();
                        this.insertClientConfiguration(clientConfiguration);
                        return [2 /*return*/, clientConfiguration];
                }
            });
        });
    };
    DataApiService.prototype.updateClientConfiguration = function (clientConfiguration) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clientConfigurationsService.updateClientConfigurationThruApi(clientConfiguration)];
                    case 1:
                        clientConfiguration = _a.sent();
                        return [2 /*return*/, clientConfiguration];
                }
            });
        });
    };
    DataApiService.prototype.getPrograms = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.programs) return [3 /*break*/, 1];
                        return [2 /*return*/, this.programs];
                    case 1:
                        _a = this;
                        return [4 /*yield*/, this.programsService.getProgramsThruApi()];
                    case 2:
                        _a.programs = _b.sent();
                        return [2 /*return*/, this.programs];
                }
            });
        });
    };
    DataApiService.prototype.createProgram = function (program) {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.programsService.createProgramThruApi(program)];
                    case 1:
                        program = _a.sent();
                        this.insertProgram(program);
                        return [2 /*return*/, program];
                    case 2:
                        error_1 = _a.sent();
                        return [2 /*return*/, Promise.reject(error_1.message || error_1)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DataApiService.prototype.updateProgram = function (program) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.programsService.updateProgramThruApi(program)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, program];
                }
            });
        });
    };
    // public async deleteProgram(program: Program): Promise<Program> {
    //   await this.programService.deleteProgramThruApi(program);
    //   this.removeProgram(program);
    //   program = null;
    //   return program;
    // }
    DataApiService.prototype.getProgramConfigurations = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.programConfigurations) return [3 /*break*/, 1];
                        return [2 /*return*/, this.programConfigurations];
                    case 1:
                        _a = this;
                        return [4 /*yield*/, this.programConfigurationService.getProgramConfigurationsThruApi()];
                    case 2:
                        _a.programConfigurations = _b.sent();
                        return [2 /*return*/, this.programConfigurations];
                }
            });
        });
    };
    DataApiService.prototype.createProgramConfiguration = function (programConfiguration) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.programConfigurationService.createProgramConfigurationThruApi(programConfiguration)];
                    case 1:
                        programConfiguration = _a.sent();
                        this.insertProgramConfiguration(programConfiguration);
                        return [2 /*return*/, programConfiguration];
                }
            });
        });
    };
    DataApiService.prototype.updateProgramConfiguration = function (programConfiguration) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.programConfigurationService.updateProgramConfigurationThruApi(programConfiguration)];
                    case 1:
                        programConfiguration = _a.sent();
                        return [2 /*return*/, programConfiguration];
                }
            });
        });
    };
    //
    DataApiService.prototype.getProgramProfiles = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.programProfiles) return [3 /*break*/, 1];
                        return [2 /*return*/, this.programProfiles];
                    case 1:
                        _a = this;
                        return [4 /*yield*/, this.programProfileService.getProgramProfilesThruApi()];
                    case 2:
                        _a.programProfiles = _b.sent();
                        return [2 /*return*/, this.programProfiles];
                }
            });
        });
    };
    DataApiService.prototype.createProgramProfile = function (programProfile) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.programProfileService.createProgramProfileThruApi(programProfile)];
                    case 1:
                        programProfile = _a.sent();
                        this.insertProgramProfile(programProfile);
                        return [2 /*return*/, programProfile];
                }
            });
        });
    };
    DataApiService.prototype.updateProgramProfile = function (programProfile) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.programProfileService.updateProgramProfileThruApi(programProfile)];
                    case 1:
                        programProfile = _a.sent();
                        return [2 /*return*/, programProfile];
                }
            });
        });
    };
    /*
    */
    DataApiService.prototype.insertProgram = function (program) {
        if (program && this.programs) {
            this.programs.push(program);
        }
    };
    // private removeProgram(program: Program): void {
    //   const index = this.programs.indexOf(program);
    //   if (index > -1) {
    //     this.programs.splice(index, 1);
    //   }
    // }
    DataApiService.prototype.insertProgramConfiguration = function (programConfiguration) {
        this.programConfigurations.push(programConfiguration);
    };
    // private removeProgramConfigurationCruft(progConfigableObjs: IProgramConfig[]): any[] {
    //   // some reason spring rest is giving empty array objects of programConfiguration property
    //   // get rid of them all
    //   for (let i = 0, len = progConfigableObjs.length; i < len; i++) {
    //     if (progConfigableObjs[i].programConfiguration && progConfigableObjs[i].programConfiguration.length) {
    //       progConfigableObjs[i].programConfiguration = [];
    //     }
    //   }
    //   return progConfigableObjs;
    // }
    DataApiService.prototype.insertClientConfiguration = function (clientConfiguration) {
        this.clientConfigurations.push(clientConfiguration);
    };
    // private removeClientConfigurationCruft(clients: Client[]): Client[] {
    //   // some reason spring rest is giving empty array objects of programConfiguration property
    //   // get rid of them all
    //   // for (let i = 0, len = clients.length; i < len; i++) {
    //   //   if (clients[i].programConfiguration && clients[i].programConfiguration.length) {
    //   //     clients[i].programConfiguration = [];
    //   //   }
    //   // }
    //   return clients;
    // }
    DataApiService.prototype.insertProgramProfile = function (programProfile) {
        this.programProfiles.push(programProfile);
    };
    DataApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_app_shared_services_communications_communications_service__["a" /* CommunicationsService */],
            __WEBPACK_IMPORTED_MODULE_1_app_shared_services_clients_clients_service__["a" /* ClientsService */],
            __WEBPACK_IMPORTED_MODULE_2_app_shared_services_client_configurations_client_configurations_service__["a" /* ClientConfigurationsService */],
            __WEBPACK_IMPORTED_MODULE_4_app_shared_services_programs_programs_service__["a" /* ProgramsService */],
            __WEBPACK_IMPORTED_MODULE_5_app_shared_services_program_profiles_program_profiles_service__["a" /* ProgramProfilesService */],
            __WEBPACK_IMPORTED_MODULE_6_app_shared_services_program_configurations_program_configurations_service__["a" /* ProgramConfigurationsService */]])
    ], DataApiService);
    return DataApiService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/drag-drop.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragDropService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// forked from https://github.com/ObaidUrRehman/ng-drag-drop
var DragDropService = (function () {
    function DragDropService() {
        this.onDragStart = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.onDragEnd = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    DragDropService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DragDropService);
    return DragDropService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/in-memory-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InMemoryDataService; });
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var communication = [
            { 'id': 260, 'name': 'Refill Available Notice',
                'description': 'Notifies a member when one or more of their Rx\'s is eligible for refill',
                'programConfiguration': [] },
            { 'id': 261, 'name': 'Order Received',
                'description': 'Notifies a member when their order is received',
                'programConfiguration': [1] },
            { 'id': 263, 'name': 'Refill Expiring Notice',
                'description': 'Notifies a member when one or more of their Rx\'s is about to expire but has at least 1 refill left',
                'programConfiguration': [] },
            { 'id': 264, 'name': 'Order Shipped',
                'description': 'Notifies a member when their order is shipped',
                'programConfiguration': [] },
            { 'id': 1229, 'name': 'Zero Refills Notice',
                'description': 'Notifies a member when one or more of their Rx\s has no more refills available',
                'programConfiguration': [] },
            { 'id': 1230, 'name': 'RFM Auto Renewal ',
                'description': 'Notifies a member when we will be reaching out to their Dr. to get a new RX',
                'programConfiguration': [] },
            { 'id': 1231, 'name': 'RFM Auto Refill ',
                'description': 'Notifies a member when we will be automatically refilling their Rx',
                'programConfiguration': [] },
            { 'id': 1232, 'name': 'RFM MD Denied ',
                'description': 'Notifies a member when their Dr. Denied our request for a new Rx',
                'programConfiguration': [] },
            { 'id': 1233, 'name': 'RFM MD Unresponsive ',
                'description': 'Notifies a member when their Dr. was unresponsive to our request for a new Rx',
                'programConfiguration': [] },
            { 'id': 1341, 'name': 'RTP (Return to Participant) w/ MD Contact',
                'description': 'Notifies a member when their order cannot be filled and we tried to contact their Doctor',
                'programConfiguration': [] },
            { 'id': 1342, 'name': 'RTP (Return to Participant) w/o MD Contact',
                'description': 'Notifies a member when their order cannot be filled but we did not reach out to their doctor',
                'programConfiguration': [] },
            { 'id': 1343, 'name': 'Future Fill Held ',
                'description': 'Notifies a member when their order is held due to refill too soon',
                'programConfiguration': [] },
            { 'id': 1344, 'name': 'Future Fill Split ',
                'description': 'Notifies a member when part of their order is held due to refill too soon',
                'programConfiguration': [] },
            { 'id': 1859, 'name': 'Doctor Hold',
                'description': 'Notifies member when Order is Held by Doctor.',
                'programConfiguration': [] },
            { 'id': 1861, 'name': 'Cannot Fill',
                'description': 'Notifies member when Order cannot be filled (previously RTP)',
                'programConfiguration': [] },
            { 'id': 1904, 'name': 'Ship Consent Initial',
                'description': 'Initial consent from member',
                'programConfiguration': [] },
            { 'id': 1905, 'name': 'Ship Consent Followup',
                'description': 'Followup consent from member',
                'programConfiguration': [] },
            { 'id': 1906, 'name': 'Ship Consent Final',
                'description': 'Final followup consent from member',
                'programConfiguration': [] },
            { 'id': 1907, 'name': 'Future Fill Release Reminder',
                'description': 'Notifies a member when a prescription is released from future fill',
                'programConfiguration': [] },
            { 'id': 2514, 'name': 'Refill Available Reminder',
                'description': 'Notifies a member when one or more of their Rx\'s is eligible for refill',
                'programConfiguration': [] },
            { 'id': 2515, 'name': 'Refill Available Warning',
                'description': 'Notifies a member when one or more of their Rx\'s is eligible for refill',
                'programConfiguration': [] },
            { 'id': 2516, 'name': 'Refill Expiring Reminder',
                'description': 'Notifies a member when one or more of their Rx\'s is about to expire but has at least 1 refill left',
                'programConfiguration': [] },
            { 'id': 2517, 'name': 'Refill Expiring Warning',
                'description': 'Notifies a member when one or more of their Rx\'s is about to expire but has at least 1 refill left',
                'programConfiguration': [] },
            { 'id': 2518, 'name': 'Zero Refills Reminder',
                'description': 'Notifies a member when one or more of their Rx\'s has no more refills available',
                'programConfiguration': [] },
            { 'id': 2519, 'name': 'Zero Refills Warning',
                'description': 'Notifies a member when one or more of their Rx\'s has no more refills available',
                'programConfiguration': [] }
        ];
        var program = [
            { 'id': 1, 'name': 'Prescription Alerts',
                'description': 'PBM Communications including Order Status and Refill Reminder alerts'
            },
            { 'id': 2, 'name': 'Non-Prescription Alerts', 'description': 'tired of adding a new program just to test deleting it',
                'programProfile': [
                    { 'id': 2, 'defaultOptIn': true, 'visibleInUi': true,
                        'chanEmail': true, 'chanIvr': true, 'chanSms': true, 'chanSecure': true, 'chanMail': false, 'chanMobile': false,
                        'effective': '2017-01-01', 'expiration': '9999-12-31', 'program': 2
                    }
                ]
            }
        ];
        var programprofile = [
            { 'id': 1,
                'defaultOptIn': true,
                'visibleInUi': true,
                'chanEmail': true,
                'chanIvr': true,
                'chanSms': true,
                'chanSecure': true,
                'chanMail': false,
                'chanMobile': false,
                'effective': '2017-01-01',
                'expiration': '9999-12-31',
                'program': 1
            }
        ];
        var programconfiguration = [
            { 'id': 1,
                'name': 'Prescription Alerts Order Status',
                'description': 'Order Status Program-level Configuration',
                'chanEmailPriority': 2,
                'chanIvrPriority': 3,
                'chanSmsPriority': 1,
                'chanMailPriority': 0,
                'chanMobilePriority': 0,
                'chanMandatory': 'Email',
                'effective': '2017-1-1',
                'expiration': '9999-12-31',
                'program': { 'id': 1,
                    'name': 'Prescription Alerts',
                    'description': 'PBM Communications including Order Status and Refill Reminder alerts',
                    'programConfiguration': [1]
                },
                'communication': { 'id': 261,
                    'name': 'Order Received',
                    'description': 'Notifies a member when their order is received',
                    'programConfiguration': [1]
                }
            },
            { 'id': 2,
                'name': 'Prescription Alerts Order Status',
                'description': 'Order Status Program-level Configuration',
                'chanEmailPriority': 2,
                'chanIvrPriority': 3,
                'chanSmsPriority': 1,
                'chanMailPriority': 0,
                'chanMobilePriority': 0,
                'chanMandatory': 'Email',
                'effective': '2017-1-1',
                'expiration': '9999-12-31',
                'program': 1,
                'communication': 264
            }
        ];
        var client = [
            { 'id': 142, 'code': 'AMD', 'name': 'AT&T INC.' },
            { 'id': 259, 'code': 'BCC', 'name': 'BLUE CROSS OF CONNECTICUT' },
            { 'id': 339, 'code': 'BCAL', 'name': 'BLUE CROSS OF ALABAMA' },
            { 'id': 428, 'code': 'BOH', 'name': 'BLUE CROSS OF OHIO' },
            { 'id': 10203, 'code': 'BCBSN', 'name': 'BLUE CROSS BLUE SHIELD OF NC' },
            { 'id': 11254, 'code': 'BCOGA', 'name': 'BLUE CROSS/BLUE SHIELD GEORGIA' },
            { 'id': 11614, 'code': 'BCCAL', 'name': 'BLUE CROSS/BS OF CALIFORNIA' },
            { 'id': 11643, 'code': 'BCOMI', 'name': 'BLUE CROSS OF MICHIGAN' },
            { 'id': 12130, 'code': 'BCBSA', 'name': 'BLUE CROSS BLUE SHIELD ASSOC.' },
            { 'id': 12675, 'code': 'BCORO', 'name': 'BLUE CROSS OF ROCHESTER' },
            { 'id': 14481, 'code': 'ZC342', 'name': 'BLUE CROSS IDAHO-HMO' },
            { 'id': 14482, 'code': 'ZC343', 'name': 'BLUE CROSS IDAHO-PPO' },
            { 'id': 14606, 'code': 'ZCC01', 'name': 'BLUE CROSS BLUE SHIELD OF TENN' },
            { 'id': 22912, 'code': 'X7700', 'name': 'AETNA-PPO' },
            { 'id': 22913, 'code': 'X7705', 'name': 'AETNA-SRC' },
            { 'id': 22914, 'code': 'X7710', 'name': 'AETNA-AGB' },
            { 'id': 22915, 'code': 'X7715', 'name': 'AETNA-DISCOUNT CARE' },
            { 'id': 22916, 'code': 'X7720', 'name': 'AETNA-ASH' },
            { 'id': 22917, 'code': 'X7730', 'name': 'AETNA-HMO' },
            { 'id': 22918, 'code': 'X7750', 'name': 'AETNA-MCPP - MEDICAL BNFT' },
            { 'id': 22919, 'code': 'X7760', 'name': 'AETNA-HNO' },
            { 'id': 22920, 'code': 'X7770', 'name': 'AETNA-MED-D PDP S5810' },
            { 'id': 22921, 'code': 'X7771', 'name': 'AETNA-MED-D MAPD H0318' },
            { 'id': 22922, 'code': 'X7772', 'name': 'AETNA-MED-D MAPD H0523' }
        ];
        var clientconfiguration = [
            { 'id': 1,
                'name': 'Prescription Alerts Order Status',
                'description': 'Order Status Client-level Configuration',
                'chanEmailPriority': 2,
                'chanIvrPriority': 3,
                'chanSmsPriority': 1,
                'chanMailPriority': 0,
                'chanMobilePriority': 0,
                'chanMandatory': 'Email',
                'effective': '2017-01-01',
                'expiration': '9999-12-31',
                'client': { 'id': 142,
                    'code': 'AMD',
                    'name': 'AT&T INC.'
                },
                'communication': { 'id': 261,
                    'name': 'Order Received ',
                    'description': 'Notifies a member when their order is received',
                    'programConfiguration': [1]
                }
            },
            { 'id': 2,
                'name': 'Prescription Alerts Order Status',
                'description': 'Order Status Client-level Configuration',
                'chanEmailPriority': 3,
                'chanIvrPriority': 1,
                'chanSmsPriority': 2,
                'chanMailPriority': 0,
                'chanMobilePriority': 0,
                'chanMandatory': 'No',
                'effective': '2017-01-01',
                'expiration': '9999-12-31',
                'client': 259,
                'communication': 261
            }
        ];
        return {
            communication: communication,
            program: program,
            programprofile: programprofile,
            programconfiguration: programconfiguration,
            client: client,
            clientconfiguration: clientconfiguration
        };
    };
    return InMemoryDataService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/program-configurations/program-configurations.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramConfigurationsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

// import { HttpModule } from '@angular/http';



var ProgramConfigurationsService = (function () {
    function ProgramConfigurationsService(config, http) {
        this.config = config;
        this.http = http;
        this.progConfigApiEndpoint = this.config.apiEndpoint + 'api/programconfiguration'; // URL to web api
    }
    ProgramConfigurationsService.prototype.getProgramConfigurationsThruApi = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.http.get(this.progConfigApiEndpoint).toPromise()];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                    case 2:
                        error_1 = _a.sent();
                        this.handleError(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProgramConfigurationsService.prototype.createProgramConfigurationThruApi = function (programConfiguration) {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.http.post(this.progConfigApiEndpoint, programConfiguration).toPromise()];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                    case 2:
                        error_2 = _a.sent();
                        this.handleError(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProgramConfigurationsService.prototype.updateProgramConfigurationThruApi = function (programConfiguration) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        url = this.progConfigApiEndpoint + "/" + programConfiguration.id;
                        return [4 /*yield*/, this.http.put(url, programConfiguration).toPromise()];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                    case 2:
                        error_3 = _a.sent();
                        this.handleError(error_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProgramConfigurationsService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ProgramConfigurationsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2_app_app_config__["a" /* APP_CONFIG */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ProgramConfigurationsService);
    return ProgramConfigurationsService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/program-profiles/program-profiles.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramProfilesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var ProgramProfilesService = (function () {
    function ProgramProfilesService(config, http) {
        this.config = config;
        this.http = http;
        this.progProfileApiEndpoint = this.config.apiEndpoint + 'api/programprofile'; // URL to web api
    }
    ProgramProfilesService.prototype.getProgramProfilesThruApi = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.http.get(this.progProfileApiEndpoint).toPromise()];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                    case 2:
                        error_1 = _a.sent();
                        this.handleError(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProgramProfilesService.prototype.createProgramProfileThruApi = function (programProfile) {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.http.post(this.progProfileApiEndpoint, programProfile).toPromise()];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                    case 2:
                        error_2 = _a.sent();
                        this.handleError(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProgramProfilesService.prototype.updateProgramProfileThruApi = function (programProfile) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        url = this.progProfileApiEndpoint + "/" + programProfile.id;
                        return [4 /*yield*/, this.http.put(url, programProfile).toPromise()];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                    case 2:
                        error_3 = _a.sent();
                        this.handleError(error_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProgramProfilesService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ProgramProfilesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2_app_app_config__["a" /* APP_CONFIG */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ProgramProfilesService);
    return ProgramProfilesService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/programs/programs.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var ProgramsService = (function () {
    function ProgramsService(config, http) {
        this.config = config;
        this.http = http;
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.progApiEndpoint = this.config.apiEndpoint + 'api/program'; // URL to web api
    }
    ProgramsService.prototype.getProgramsThruApi = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.http.get(this.progApiEndpoint).toPromise()];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                    case 2:
                        error_1 = _a.sent();
                        this.handleError(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProgramsService.prototype.createProgramThruApi = function (program) {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.http.post(this.progApiEndpoint, program).toPromise()];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                    case 2:
                        error_2 = _a.sent();
                        this.handleError(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProgramsService.prototype.updateProgramThruApi = function (program) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.progApiEndpoint + "/" + program.id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.http.put(url, program).toPromise()];
                    case 2:
                        response = _a.sent();
                        return [2 /*return*/, response];
                    case 3:
                        error_3 = _a.sent();
                        this.handleError(error_3);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // async deleteProgramThruApi(program: Program): Promise<Program> {
    //   const url = `${this.progApiEndpoint}/${program.id}`;
    //   try {
    //     const response = await this.http.delete(url, {headers: this.headers}).toPromise();
    //     return response as Program;
    //   } catch (error) {
    //     this.handleError(error);
    //   }
    // }
    ProgramsService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ProgramsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2_app_app_config__["a" /* APP_CONFIG */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ProgramsService);
    return ProgramsService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/sortable-column.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortableColumnService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SortableColumnService = (function () {
    function SortableColumnService() {
        this.columnSortedSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.columnSorted$ = this.columnSortedSource.asObservable();
    }
    SortableColumnService.prototype.columnSorted = function (event) {
        this.columnSortedSource.next(event);
    };
    SortableColumnService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SortableColumnService);
    return SortableColumnService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/shared-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routedComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_component__ = __webpack_require__("../../../../../src/app/shared/shared.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__shared_component__["a" /* SharedComponent */] }
];
var routedComponents = [__WEBPACK_IMPORTED_MODULE_2__shared_component__["a" /* SharedComponent */]];
var SharedRoutingModule = (function () {
    function SharedRoutingModule() {
    }
    SharedRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], SharedRoutingModule);
    return SharedRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/shared.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Shared Module Tests</h2>\n<!-- this stuff can all go once refactoring is complete\n     mostly just for showing features off -->\n<app-drag-drop-test></app-drag-drop-test>\n<app-click-outside-test></app-click-outside-test>\n\n<h4>Programs</h4>\n<span *ngIf=\"programs\">\n  <ul *ngFor=\"let p of programs\">\n    <li>{{p | json}}</li> \n  </ul>\n</span>\n<h4>Program Profiles</h4>\n<span *ngIf=\"programProfiles\">\n  <ul *ngFor=\"let pp of programProfiles\">\n    <li>{{pp | json}}</li> \n  </ul>\n</span>\n\n<h4>Manage Communications</h4>\n<app-comm-action-table \n  [communications]=\"communications\"\n  [displayComm]=\"displayComm\"\n  [displayCommStartEmpty]=\"false\"\n  [showCommId]=\"true\"\n  [showCommName]=\"true\"\n  [showCommDesc]=\"true\"\n  [showStatus]=\"true\"\n  [showAction]=\"true\"\n  (selRowOut)=\"setClickedRow($event)\"\n  (commConfigAction)=\"configureCommunication($event)\">\n</app-comm-action-table>"

/***/ }),

/***/ "../../../../../src/app/shared/shared.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/shared.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_services_data_api_service__ = __webpack_require__("../../../../../src/app/shared/services/data-api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var SharedComponent = (function () {
    function SharedComponent(dataApiService) {
        this.dataApiService = dataApiService;
    }
    SharedComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCommunications()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getPrograms()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.getProgramProfiles()];
                    case 3:
                        _a.sent();
                        console.log('SharedComponent ngOnInit', this.communications, this.programs, this.programProfiles);
                        return [2 /*return*/];
                }
            });
        });
    };
    SharedComponent.prototype.getCommunications = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.dataApiService.getCommunications()];
                    case 1:
                        _a.communications = _b.sent();
                        this.displayComm = this.communications;
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        console.log('getCommunications error: ', error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SharedComponent.prototype.getPrograms = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.dataApiService.getPrograms()];
                    case 1:
                        _a.programs = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _b.sent();
                        console.log('getPrograms error: ', error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SharedComponent.prototype.getProgramProfiles = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, error_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.dataApiService.getProgramProfiles()];
                    case 1:
                        _a.programProfiles = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _b.sent();
                        console.log('getPrograms error: ', error_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SharedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-shared',
            template: __webpack_require__("../../../../../src/app/shared/shared.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/shared.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_shared_services_data_api_service__["a" /* DataApiService */]])
    ], SharedComponent);
    return SharedComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_routing_module__ = __webpack_require__("../../../../../src/app/shared/shared-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_in_memory_web_api__ = __webpack_require__("../../../../angular-in-memory-web-api/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_shared_services_in_memory_data_service__ = __webpack_require__("../../../../../src/app/shared/services/in-memory-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_client_configurations_client_configurations_service__ = __webpack_require__("../../../../../src/app/shared/services/client-configurations/client-configurations.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_clients_clients_service__ = __webpack_require__("../../../../../src/app/shared/services/clients/clients.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_communications_communications_service__ = __webpack_require__("../../../../../src/app/shared/services/communications/communications.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_program_configurations_program_configurations_service__ = __webpack_require__("../../../../../src/app/shared/services/program-configurations/program-configurations.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_program_profiles_program_profiles_service__ = __webpack_require__("../../../../../src/app/shared/services/program-profiles/program-profiles.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_programs_programs_service__ = __webpack_require__("../../../../../src/app/shared/services/programs/programs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_test_click_outside_click_outside_component__ = __webpack_require__("../../../../../src/app/shared/components/test/click-outside/click-outside.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_test_drag_drop_drag_drop_component__ = __webpack_require__("../../../../../src/app/shared/components/test/drag-drop/drag-drop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_client_actions_popover_client_actions_popover_component__ = __webpack_require__("../../../../../src/app/shared/components/client-actions-popover/client-actions-popover.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_client_action_table_client_action_table_component__ = __webpack_require__("../../../../../src/app/shared/components/client-action-table/client-action-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_comm_actions_popover_comm_actions_popover_component__ = __webpack_require__("../../../../../src/app/shared/components/comm-actions-popover/comm-actions-popover.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_comm_action_table_comm_action_table_component__ = __webpack_require__("../../../../../src/app/shared/components/comm-action-table/comm-action-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_date_eff_exp_date_eff_exp_component__ = __webpack_require__("../../../../../src/app/shared/components/date-eff-exp/date-eff-exp.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_date_picker_popup_date_picker_popup_component__ = __webpack_require__("../../../../../src/app/shared/components/date-picker-popup/date-picker-popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_select_channel_mandatory_select_channel_mandatory_component__ = __webpack_require__("../../../../../src/app/shared/components/select-channel-mandatory/select-channel-mandatory.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_select_channel_priority_select_channel_priority_component__ = __webpack_require__("../../../../../src/app/shared/components/select-channel-priority/select-channel-priority.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_select_profile_option_select_profile_option_component__ = __webpack_require__("../../../../../src/app/shared/components/select-profile-option/select-profile-option.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_sortable_column_sortable_column_component__ = __webpack_require__("../../../../../src/app/shared/components/sortable-column/sortable-column.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__directives_click_outside_directive__ = __webpack_require__("../../../../../src/app/shared/directives/click-outside.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__directives_drag_drop_draggable_directive__ = __webpack_require__("../../../../../src/app/shared/directives/drag-drop/draggable.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__directives_drag_drop_droppable_directive__ = __webpack_require__("../../../../../src/app/shared/directives/drag-drop/droppable.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__directives_sortable_table_directive__ = __webpack_require__("../../../../../src/app/shared/directives/sortable-table.directive.ts");
// Angular Style Guide https://angular.io/guide/styleguide#import-line-spacing
// Compromise, one space between bracket and from, but align the brackets
// and put each imported item on separate line when coming from single source
// Alphabetizing symbols within import type (group components, services, directives)
// Use relative imports when going down the tree
// Use absolute when resolving up and/or across
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// Imports for loading & configuring the in-memory web api
// this way can turn it on and off without commenting out code
// https://stackoverflow.com/questions/40214211/disable-angular2-in-memory-web-api-for-production



// import { DataApiService } from './services/data-api.service';






// testing within shared module


// exported components










// exported directives




var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["d" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__shared_routing_module__["a" /* SharedRoutingModule */],
                (__WEBPACK_IMPORTED_MODULE_8_environments_environment__["a" /* environment */].inMemAPI) ? __WEBPACK_IMPORTED_MODULE_6_angular_in_memory_web_api__["a" /* InMemoryWebApiModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7_app_shared_services_in_memory_data_service__["a" /* InMemoryDataService */]) : []
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__shared_routing_module__["b" /* routedComponents */],
                // exported components
                __WEBPACK_IMPORTED_MODULE_17__components_client_actions_popover_client_actions_popover_component__["a" /* ClientActionsPopoverComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_client_action_table_client_action_table_component__["a" /* ClientActionTableComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_comm_actions_popover_comm_actions_popover_component__["a" /* CommActionsPopoverComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_comm_action_table_comm_action_table_component__["a" /* CommActionTableComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_date_eff_exp_date_eff_exp_component__["a" /* DateEffExpComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_date_picker_popup_date_picker_popup_component__["a" /* DatePickerPopupComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_select_channel_mandatory_select_channel_mandatory_component__["a" /* SelectChannelMandatoryComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_select_channel_priority_select_channel_priority_component__["a" /* SelectChannelPriorityComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_select_profile_option_select_profile_option_component__["a" /* SelectProfileOptionComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_sortable_column_sortable_column_component__["a" /* SortableColumnComponent */],
                // local testing components
                __WEBPACK_IMPORTED_MODULE_15__components_test_click_outside_click_outside_component__["a" /* ClickOutsideComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_test_drag_drop_drag_drop_component__["a" /* DragDropComponent */],
                // exported directives
                __WEBPACK_IMPORTED_MODULE_27__directives_click_outside_directive__["a" /* ClickOutsideDirective */],
                __WEBPACK_IMPORTED_MODULE_28__directives_drag_drop_draggable_directive__["a" /* DraggableDirective */],
                __WEBPACK_IMPORTED_MODULE_29__directives_drag_drop_droppable_directive__["a" /* DroppableDirective */],
                __WEBPACK_IMPORTED_MODULE_30__directives_sortable_table_directive__["a" /* SortableTableDirective */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */],
                // services used by DataApiService
                __WEBPACK_IMPORTED_MODULE_9__services_client_configurations_client_configurations_service__["a" /* ClientConfigurationsService */],
                __WEBPACK_IMPORTED_MODULE_10__services_clients_clients_service__["a" /* ClientsService */],
                __WEBPACK_IMPORTED_MODULE_11__services_communications_communications_service__["a" /* CommunicationsService */],
                __WEBPACK_IMPORTED_MODULE_12__services_program_configurations_program_configurations_service__["a" /* ProgramConfigurationsService */],
                __WEBPACK_IMPORTED_MODULE_13__services_program_profiles_program_profiles_service__["a" /* ProgramProfilesService */],
                __WEBPACK_IMPORTED_MODULE_14__services_programs_programs_service__["a" /* ProgramsService */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */],
                // shared components
                __WEBPACK_IMPORTED_MODULE_17__components_client_actions_popover_client_actions_popover_component__["a" /* ClientActionsPopoverComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_client_action_table_client_action_table_component__["a" /* ClientActionTableComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_comm_actions_popover_comm_actions_popover_component__["a" /* CommActionsPopoverComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_comm_action_table_comm_action_table_component__["a" /* CommActionTableComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_date_eff_exp_date_eff_exp_component__["a" /* DateEffExpComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_date_picker_popup_date_picker_popup_component__["a" /* DatePickerPopupComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_select_channel_mandatory_select_channel_mandatory_component__["a" /* SelectChannelMandatoryComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_select_channel_priority_select_channel_priority_component__["a" /* SelectChannelPriorityComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_select_profile_option_select_profile_option_component__["a" /* SelectProfileOptionComponent */],
                // directives
                __WEBPACK_IMPORTED_MODULE_27__directives_click_outside_directive__["a" /* ClickOutsideDirective */],
                __WEBPACK_IMPORTED_MODULE_28__directives_drag_drop_draggable_directive__["a" /* DraggableDirective */],
                __WEBPACK_IMPORTED_MODULE_29__directives_drag_drop_droppable_directive__["a" /* DroppableDirective */],
                __WEBPACK_IMPORTED_MODULE_30__directives_sortable_table_directive__["a" /* SortableTableDirective */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    envName: 'GitHub Pages',
    inMemAPI: true,
    apiEndpoint: ''
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map