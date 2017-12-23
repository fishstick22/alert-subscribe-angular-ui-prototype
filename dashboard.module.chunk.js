webpackJsonp(["dashboard.module"],{

/***/ "../../../../../src/app/dashboard/client-maintenance-panel/program-client-exceptions-maintenance-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-responsive table-sm table-striped table-bordered table-hover\">\r\n    <caption></caption>\r\n    <thead class=\"bg-gradient-light\">\r\n      <tr *ngIf=\"selectedProgramProfileClientExceptions && selectedProgramProfileClientExceptions.length !== 0\">\r\n        <th><small>ID</small></th>\r\n        <th><small>Code</small></th>\r\n        <th><small>Name</small></th>\r\n        <th *ngFor=\"let ppo of programProfileOptions\"><small title=\"{{ppo.title}}\">{{ppo.label}}</small></th>\r\n        <th><small>Effective</small></th>\r\n        <th><small>Expiration</small></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngIf=\"selectedProgramProfileClientExceptions && selectedProgramProfileClientExceptions.length === 0\">\r\n        <td colspan=\"10\">No Client Exceptions for Program</td>\r\n      </tr>\r\n      <tr *ngFor=\"let pce of selectedProgramProfileClientExceptions; let i = index\">\r\n        <td>\r\n            <span *ngIf=\"pce.client.id\" class=\"badge badge-secondary\">{{pce.client.id}}</span>\r\n        </td>\r\n        <td><span >{{pce.client.code}}</span></td>\r\n        <td width=\"18%\"><span >{{pce.client.name}}</span></td>\r\n        <td *ngFor=\"let ppo of programProfileOptions\">\r\n            <app-show-program-profile-options\r\n            [profile]=\"pce\"\r\n            [profileProperty]=\"ppo.property\"\r\n            [profileOptionLabel]=\"ppo.label\"\r\n            [profileOptionLabelHidden]=\"true\"></app-show-program-profile-options>\r\n        </td>\r\n        <td>\r\n          <label for=\"effective\" class=\"sr-only\"><small>Effective</small></label>\r\n          <input class=\"form-control form-control-sm date-eff-exp-input\" value=\"{{pce.effective}}\" readonly></td>\r\n        <td>\r\n          <label for=\"expiration\" class=\"sr-only\"><small>Expiration</small></label>\r\n          <input class=\"form-control form-control-sm date-eff-exp-input\" value=\"{{pce.expiration}}\" readonly></td>\r\n      </tr>\r\n    </tbody>\r\n  </table>"

/***/ }),

/***/ "../../../../../src/app/dashboard/client-maintenance-panel/program-client-exceptions-maintenance-panel.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/client-maintenance-panel/program-client-exceptions-maintenance-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramClientExceptionsMaintenancePanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_app_constants__ = __webpack_require__("../../../../../src/app/app-constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_model_program__ = __webpack_require__("../../../../../src/app/shared/model/program.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_services_data_api_service__ = __webpack_require__("../../../../../src/app/shared/services/data-api.service.ts");
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




var ProgramClientExceptionsMaintenancePanelComponent = /** @class */ (function () {
    function ProgramClientExceptionsMaintenancePanelComponent(dataApiService) {
        this.dataApiService = dataApiService;
        this.programProfileOptions = __WEBPACK_IMPORTED_MODULE_1_app_app_constants__["a" /* AppConstants */].PROGRAMPROFILEOPTIONS;
    }
    ProgramClientExceptionsMaintenancePanelComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getProgramProfileClientExceptions()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProgramClientExceptionsMaintenancePanelComponent.prototype.ngOnChanges = function (changes) {
        console.log('ProgramClientExceptionsMaintenancePanel OnChanges', changes);
        if (changes.selectedProgram && !changes.selectedProgram.firstChange) {
            this.selectedProgramProfileClientExceptions = this.findClientExceptions(this.selectedProgram);
        }
    };
    ProgramClientExceptionsMaintenancePanelComponent.prototype.findClientExceptions = function (program) {
        // TODO well, here's where we want to go get one at a time or
        // a query that gets them by program id in the API...
        return this.programProfileClientExceptions.filter(function (ppce) { return ppce.program === program.id; });
    };
    ProgramClientExceptionsMaintenancePanelComponent.prototype.getProgramProfileClientExceptions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.dataApiService.getProgramProfileClientExceptions()];
                    case 1:
                        _a.programProfileClientExceptions = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        console.log('getPrograms error: ', error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_app_shared_model_program__["a" /* Program */])
    ], ProgramClientExceptionsMaintenancePanelComponent.prototype, "selectedProgram", void 0);
    ProgramClientExceptionsMaintenancePanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-program-client-exceptions-maintenance-panel',
            template: __webpack_require__("../../../../../src/app/dashboard/client-maintenance-panel/program-client-exceptions-maintenance-panel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/client-maintenance-panel/program-client-exceptions-maintenance-panel.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_app_shared_services_data_api_service__["a" /* DataApiService */]])
    ], ProgramClientExceptionsMaintenancePanelComponent);
    return ProgramClientExceptionsMaintenancePanelComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/communications-maintenance-panel/communications-maintenance-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-responsive table-sm table-striped table-bordered table-hover\">\r\n    <caption></caption>\r\n    <thead class=\"bg-gradient-light\">\r\n      <tr *ngIf=\"selectedProgramConfigurations && selectedProgramConfigurations.length !== 0\">\r\n        <th><small>ID</small></th>\r\n        <th><small>Name</small></th>\r\n        <th *ngFor=\"let pco of programConfigurationOptions\"><small title=\"{{pco.title}}\">{{pco.label}}</small></th>\r\n        <th><small>Default</small></th>\r\n        <th><small>Required</small></th>\r\n        <th><small>Mandatory</small></th>\r\n        <th><small>Effective</small></th>\r\n        <th><small>Expiration</small></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngIf=\"selectedProgramConfigurations && selectedProgramConfigurations.length === 0\">\r\n        <td colspan=\"10\">No Communications configured for Program</td>\r\n      </tr>\r\n      <tr *ngFor=\"let progConfig of selectedProgramConfigurations; let i = index\">\r\n        <td>\r\n            <span *ngIf=\"progConfig.communication\" class=\"badge badge-secondary\">{{progConfig.communication.id}}</span>\r\n        </td>\r\n        <td width=\"20%\"><span *ngIf=\"progConfig.communication\">{{progConfig.communication.name}}</span></td>\r\n        <td *ngFor=\"let pco of programConfigurationOptions\">\r\n            <app-show-communication-configuration-options\r\n              [configuration]=\"progConfig\"\r\n              [configurationProperty]=\"pco.property\"\r\n              [configurationOptionLabel]=\"pco.label\"\r\n              [configurationOptionLabelHidden]=\"true\"></app-show-communication-configuration-options>\r\n        </td>\r\n        <td>\r\n        </td>\r\n        <td>\r\n        </td>\r\n        <td>\r\n        </td>\r\n        <td>\r\n          <label for=\"effective\" class=\"sr-only\"><small>Effective</small></label>\r\n          <input class=\"form-control form-control-sm date-eff-exp-input\" value=\"{{progConfig.effective}}\" readonly></td>\r\n        <td>\r\n          <label for=\"expiration\" class=\"sr-only\"><small>Expiration</small></label>\r\n          <input class=\"form-control form-control-sm date-eff-exp-input\" value=\"{{progConfig.expiration}}\" readonly></td>\r\n      </tr>\r\n    </tbody>\r\n  </table>"

/***/ }),

/***/ "../../../../../src/app/dashboard/communications-maintenance-panel/communications-maintenance-panel.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/communications-maintenance-panel/communications-maintenance-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunicationsMaintenancePanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_app_constants__ = __webpack_require__("../../../../../src/app/app-constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_model_program__ = __webpack_require__("../../../../../src/app/shared/model/program.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_services_data_api_service__ = __webpack_require__("../../../../../src/app/shared/services/data-api.service.ts");
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




var CommunicationsMaintenancePanelComponent = /** @class */ (function () {
    function CommunicationsMaintenancePanelComponent(dataApiService) {
        this.dataApiService = dataApiService;
        this.programConfigurationOptions = __WEBPACK_IMPORTED_MODULE_1_app_app_constants__["a" /* AppConstants */].PROGRAMCONFIGURATIONOPTIONS;
    }
    CommunicationsMaintenancePanelComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.getCommunications()];
                    case 1:
                        _a.communications = _c.sent();
                        _b = this;
                        return [4 /*yield*/, this.getProgramConfigurations()];
                    case 2:
                        _b.programConfigurations = _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CommunicationsMaintenancePanelComponent.prototype.ngOnChanges = function (changes) {
        console.log('CommunicationsMaintenancePanelComponent OnChanges', changes);
        if (changes.selectedProgram && !changes.selectedProgram.firstChange) {
            this.selectedProgramConfigurations = this.findProgramConfigurations(this.selectedProgram);
            console.log(this.selectedProgramConfigurations);
        }
    };
    CommunicationsMaintenancePanelComponent.prototype.getCommunications = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.dataApiService.getCommunications()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_1 = _a.sent();
                        console.log('getCommunications error: ', error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CommunicationsMaintenancePanelComponent.prototype.getProgramConfigurations = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.dataApiService.getProgramConfigurations()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_2 = _a.sent();
                        console.log('getProgramConfigurations error: ', error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CommunicationsMaintenancePanelComponent.prototype.findCommunication = function (id) {
        return this.communications.find(function (c) { return c.id === id; });
    };
    CommunicationsMaintenancePanelComponent.prototype.findProgramConfigurations = function (selectedProgram) {
        var _this = this;
        return this.programConfigurations.filter(function (pc) {
            if (typeof (pc.program) === 'number') {
                if (pc.program === selectedProgram.id) {
                    if (typeof (pc.communication) === 'number') {
                        pc.communication = _this.findCommunication(pc.communication);
                    }
                    return __WEBPACK_IMPORTED_MODULE_1_app_app_constants__["a" /* AppConstants */].UNEXPIRED === pc.expiration;
                }
                else {
                    return false;
                }
            }
            else if (pc.program.id === selectedProgram.id) {
                if (typeof (pc.communication) === 'number') {
                    pc.communication = _this.findCommunication(pc.communication);
                }
                return __WEBPACK_IMPORTED_MODULE_1_app_app_constants__["a" /* AppConstants */].UNEXPIRED === pc.expiration;
            }
            return false;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_app_shared_model_program__["a" /* Program */])
    ], CommunicationsMaintenancePanelComponent.prototype, "selectedProgram", void 0);
    CommunicationsMaintenancePanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-communications-maintenance-panel',
            template: __webpack_require__("../../../../../src/app/dashboard/communications-maintenance-panel/communications-maintenance-panel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/communications-maintenance-panel/communications-maintenance-panel.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_app_shared_services_data_api_service__["a" /* DataApiService */]])
    ], CommunicationsMaintenancePanelComponent);
    return CommunicationsMaintenancePanelComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routedComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */] }
];
var routedComponents = [__WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */]];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card text-center border-dark\">\r\n      <h3 class=\"card-header bg-gradient-secondary text-white\">Maintenance Panel</h3>\r\n      <div class=\"card-body\">\r\n        \r\n        <!--<div class=\"card border-secondary mb-3 text-center\"></div>-->\r\n        <app-programs-maintenance-panel\r\n          (programSelected)=\"onProgramSelect($event)\"></app-programs-maintenance-panel>\r\n\r\n        <!--</div>card-->\r\n\r\n        <div class=\"card border-secondary mb-3 text-center\">\r\n          <h5 class=\"card-title bg-gradient-secondary text-white text-center\">\r\n            Program (\r\n            <span *ngIf=\"selectedProgram\">\r\n                {{selectedProgram.id}}</span>\r\n            ) &mdash; Client Exceptions</h5>\r\n          <div class=\"card-body text-center\">\r\n              <app-program-client-exceptions-maintenance-panel\r\n                [selectedProgram]=\"selectedProgram\"></app-program-client-exceptions-maintenance-panel>\r\n          </div>              \r\n        </div>\r\n\r\n        <div class=\"card border-secondary mb-3 text-center\">\r\n          <h5 class=\"card-title bg-gradient-secondary text-white text-center\">\r\n            Program (\r\n              <span *ngIf=\"selectedProgram\">\r\n                  {{selectedProgram.id}}</span>\r\n            ) &mdash; Communication Configurations</h5>\r\n          <div class=\"card-body text-center\">\r\n            <app-communications-maintenance-panel\r\n              [selectedProgram]=\"selectedProgram\"></app-communications-maintenance-panel>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"card border-secondary mb-3 text-center\">\r\n          <h5 class=\"card-title text-center\">Program () &mdash;Client Communication Configurations</h5>\r\n          <div class=\"card-body text-center\">\r\n            <blockquote class=\"card-blockquote\">\r\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\r\n              <footer>Someone famous in <cite title=\"Source Title\">Source Title</cite></footer>\r\n            </blockquote>\r\n          </div>\r\n        </div>\r\n\r\n      </div><!--card-body -->\r\n    </div><!--card (main) -->\r\n  </div><!--col-md-12-->\r\n</div><!--row-->\r\n</div><!--container-->"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flex-justify-left {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: left;\n      -ms-flex-align: left;\n          align-items: left;\n  padding: 0 0 0 10px; }\n\n.flex-justify-center {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.flex-justify-right {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: right;\n      -ms-flex-align: right;\n          align-items: right; }\n\n.date-eff-exp-input {\n  width: 80px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_model_program__ = __webpack_require__("../../../../../src/app/shared/model/program.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_services_data_api_service__ = __webpack_require__("../../../../../src/app/shared/services/data-api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(dataApiService) {
        this.dataApiService = dataApiService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.onProgramSelect = function (program) {
        console.log('onProgramSelect:', program, (program instanceof __WEBPACK_IMPORTED_MODULE_1_app_shared_model_program__["a" /* Program */]));
        this.selectedProgram = program;
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_app_shared_services_data_api_service__["a" /* DataApiService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_routing_module__ = __webpack_require__("../../../../../src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__communications_maintenance_panel_communications_maintenance_panel_component__ = __webpack_require__("../../../../../src/app/dashboard/communications-maintenance-panel/communications-maintenance-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__client_maintenance_panel_program_client_exceptions_maintenance_panel_component__ = __webpack_require__("../../../../../src/app/dashboard/client-maintenance-panel/program-client-exceptions-maintenance-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__programs_maintenance_panel_programs_maintenance_panel_component__ = __webpack_require__("../../../../../src/app/dashboard/programs-maintenance-panel/programs-maintenance-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__show_communication_configuration_options_show_communication_configuration_options_component__ = __webpack_require__("../../../../../src/app/dashboard/show-communication-configuration-options/show-communication-configuration-options.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__show_program_profile_options_show_program_profile_options_component__ = __webpack_require__("../../../../../src/app/dashboard/show-program-profile-options/show-program-profile-options.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Dashboard feature Module
//

// import { CommonModule } from '@angular/common';






// shared

var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                // CommonModule,
                __WEBPACK_IMPORTED_MODULE_1__dashboard_routing_module__["a" /* DashboardRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7_app_shared_shared_module__["SharedModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__dashboard_routing_module__["b" /* routedComponents */],
                __WEBPACK_IMPORTED_MODULE_2__communications_maintenance_panel_communications_maintenance_panel_component__["a" /* CommunicationsMaintenancePanelComponent */],
                __WEBPACK_IMPORTED_MODULE_3__client_maintenance_panel_program_client_exceptions_maintenance_panel_component__["a" /* ProgramClientExceptionsMaintenancePanelComponent */],
                __WEBPACK_IMPORTED_MODULE_4__programs_maintenance_panel_programs_maintenance_panel_component__["a" /* ProgramsMaintenancePanelComponent */],
                __WEBPACK_IMPORTED_MODULE_5__show_communication_configuration_options_show_communication_configuration_options_component__["a" /* ShowCommunicationConfigurationOptionsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__show_program_profile_options_show_program_profile_options_component__["a" /* ShowProgramProfileOptionsComponent */],
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/programs-maintenance-panel/programs-maintenance-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card-title text-center\">\r\n  <div class=\"form-row\">\r\n    <div class=\"form-group col-md-4\">\r\n      <select class=\"form-control form-control-sm\"\r\n        id=\"program\" name=\"program\" [(ngModel)]=\"selectedProgram\"\r\n        (change)=\"onProgramSelect($event)\" required>\r\n        <option *ngFor=\"let p of programs\" [ngValue]=\"p\">Program {{p.id}}: {{p.name}}</option>\r\n      </select>\r\n    </div>\r\n    <h5 class=\"col-md-4\">Program Maintenance</h5>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"card-body\">\r\n    <table *ngIf=\"selectedProgramProfile\" class=\"table table-responsive table-sm table-striped table-bordered table-hover\">\r\n        <caption></caption>\r\n        <thead class=\"bg-gradient-light\">\r\n          <tr>\r\n            <th *ngFor=\"let ppo of programProfileOptions\"><small title=\"{{ppo.title}}\">{{ppo.label}}</small></th>\r\n            <th><small>Effective</small></th>\r\n            <th><small>Expiration</small></th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td *ngFor=\"let ppo of programProfileOptions\">\r\n                <app-show-program-profile-options\r\n                [profile]=\"selectedProgramProfile\"\r\n                [profileProperty]=\"ppo.property\"\r\n                [profileOptionLabel]=\"ppo.label\"\r\n                [profileOptionLabelHidden]=\"true\"></app-show-program-profile-options>\r\n            </td>\r\n            <td>\r\n              <label for=\"effective\" class=\"sr-only\"><small>Effective</small></label>\r\n              <input class=\"form-control form-control-sm date-eff-exp-input\" value=\"{{selectedProgramProfile.effective}}\" readonly></td>\r\n            <td>\r\n              <label for=\"expiration\" class=\"sr-only\"><small>Expiration</small></label>\r\n              <input class=\"form-control form-control-sm date-eff-exp-input\" value=\"{{selectedProgramProfile.expiration}}\" readonly></td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n</div><!--card-body-->"

/***/ }),

/***/ "../../../../../src/app/dashboard/programs-maintenance-panel/programs-maintenance-panel.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/programs-maintenance-panel/programs-maintenance-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramsMaintenancePanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_app_constants__ = __webpack_require__("../../../../../src/app/app-constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_services_data_api_service__ = __webpack_require__("../../../../../src/app/shared/services/data-api.service.ts");
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



var ProgramsMaintenancePanelComponent = /** @class */ (function () {
    function ProgramsMaintenancePanelComponent(dataApiService) {
        this.dataApiService = dataApiService;
        this.programSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.programProfileOptions = __WEBPACK_IMPORTED_MODULE_1_app_app_constants__["a" /* AppConstants */].PROGRAMPROFILEOPTIONS;
    }
    ProgramsMaintenancePanelComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getPrograms()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProgramsMaintenancePanelComponent.prototype.getPrograms = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, error_1;
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
                        error_1 = _b.sent();
                        console.log('getPrograms error: ', error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProgramsMaintenancePanelComponent.prototype.onProgramSelect = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log('onProgramSelect:', this.selectedProgram, event);
                        _a = this;
                        return [4 /*yield*/, this.findEffectiveProgramProfile(this.selectedProgram)];
                    case 1:
                        _a.selectedProgramProfile = _b.sent();
                        this.programSelected.emit(this.selectedProgram);
                        return [2 /*return*/];
                }
            });
        });
    };
    ProgramsMaintenancePanelComponent.prototype.findEffectiveProgramProfile = function (program) {
        return __awaiter(this, void 0, void 0, function () {
            var profiles;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(program && program.programProfile)) return [3 /*break*/, 2];
                        profiles = program.programProfile;
                        if (profiles.length !== 0 && typeof profiles[profiles.length - 1].expiration !== 'undefined') {
                            return [2 /*return*/, profiles[profiles.length - 1]];
                        }
                        if (!(profiles.length === 0 ||
                            (profiles.length !== 0 && typeof profiles[profiles.length - 1] === 'number'))) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.findProgramProfiles(program)];
                    case 1:
                        // really only happens in the in-memory-api exception case
                        profiles = _a.sent();
                        // yes, this is a side-effect
                        program.programProfile = profiles;
                        return [2 /*return*/, profiles[profiles.length - 1]];
                    case 2: 
                    // this should never happen, should throw an exception
                    // but that is a whole different endeavor
                    return [2 /*return*/, null];
                }
            });
        });
    };
    ProgramsMaintenancePanelComponent.prototype.getProgramProfiles = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, error_2;
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
                        error_2 = _b.sent();
                        console.log('getPrograms error: ', error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProgramsMaintenancePanelComponent.prototype.findProgramProfiles = function (selectedProgram) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: // : ProgramProfile[] {
                    return [4 /*yield*/, this.getProgramProfiles()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.programProfiles.filter(function (pp) {
                                if (typeof (pp.program) === 'number') {
                                    if (pp.program === selectedProgram.id) {
                                        return true;
                                    }
                                    else {
                                        return false;
                                    }
                                }
                            })];
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], ProgramsMaintenancePanelComponent.prototype, "programSelected", void 0);
    ProgramsMaintenancePanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-programs-maintenance-panel',
            template: __webpack_require__("../../../../../src/app/dashboard/programs-maintenance-panel/programs-maintenance-panel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/programs-maintenance-panel/programs-maintenance-panel.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_app_shared_services_data_api_service__["a" /* DataApiService */]])
    ], ProgramsMaintenancePanelComponent);
    return ProgramsMaintenancePanelComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/show-communication-configuration-options/show-communication-configuration-options.component.html":
/***/ (function(module, exports) {

module.exports = "<label for=\"{{configurationProperty}}\" class=\"flex-justify-left rounded\"\r\n  [ngClass]=\"{'sr-only': configurationOptionLabelHidden}\">\r\n  <small>{{configurationOptionLabel}}</small></label>\r\n<!--<select class=\"form-control form-control-sm flex-justify-right\"\r\n  id=\"{{configurationProperty}}_{{configurationProperty.id}}\" name=\"{{configurationProperty}}\" readonly>\r\n  <option>{{staticReadonlyOption}}</option>-->\r\n<input class=\"form-control form-control-sm flex-justify-right\"\r\n  id=\"{{configurationProperty}}_{{configurationProperty.id}}\" name=\"{{configurationProperty}}\" \r\n  title=\"{{configurationOptionTitle}}\"\r\n  value=\"{{staticReadonlyOption}}\" readonly />"

/***/ }),

/***/ "../../../../../src/app/dashboard/show-communication-configuration-options/show-communication-configuration-options.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/show-communication-configuration-options/show-communication-configuration-options.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowCommunicationConfigurationOptionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_app_constants__ = __webpack_require__("../../../../../src/app/app-constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowCommunicationConfigurationOptionsComponent = /** @class */ (function () {
    function ShowCommunicationConfigurationOptionsComponent() {
        this.configurationOptionLabelHidden = false;
        this.configurationOptionTitle = '';
        this.channelPriortyOpts = __WEBPACK_IMPORTED_MODULE_1_app_app_constants__["a" /* AppConstants */].CHANNELPRIORTYOPTS;
    }
    ShowCommunicationConfigurationOptionsComponent.prototype.ngOnInit = function () {
        this.staticReadonlyOption = this.configuration[this.configurationProperty];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ShowCommunicationConfigurationOptionsComponent.prototype, "configuration", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ShowCommunicationConfigurationOptionsComponent.prototype, "configurationProperty", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ShowCommunicationConfigurationOptionsComponent.prototype, "configurationOptionLabel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ShowCommunicationConfigurationOptionsComponent.prototype, "configurationOptionLabelHidden", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ShowCommunicationConfigurationOptionsComponent.prototype, "configurationOptionTitle", void 0);
    ShowCommunicationConfigurationOptionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-show-communication-configuration-options',
            template: __webpack_require__("../../../../../src/app/dashboard/show-communication-configuration-options/show-communication-configuration-options.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/show-communication-configuration-options/show-communication-configuration-options.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], ShowCommunicationConfigurationOptionsComponent);
    return ShowCommunicationConfigurationOptionsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/show-program-profile-options/show-program-profile-options.component.html":
/***/ (function(module, exports) {

module.exports = "<label for=\"{{profileProperty}}\" class=\"flex-justify-left rounded\"\r\n    [ngClass]=\"{'sr-only': profileOptionLabelHidden}\">\r\n    <small>{{profileOptionLabel}}</small></label>\r\n<!--<select class=\"form-control form-control-sm flex-justify-right\"\r\n    id=\"{{profileProperty}}_{{profileProperty.id}}\" name=\"{{profileProperty}}\" readonly>\r\n    <option>{{staticReadonlyOption}}</option>-->\r\n<input class=\"form-control form-control-sm flex-justify-right\"\r\n    id=\"{{profileProperty}}_{{profileProperty.id}}\" name=\"{{profileProperty}}\" \r\n    title=\"{{profileOptionTitle}}\"\r\n    value=\"{{staticReadonlyOption}}\" readonly />"

/***/ }),

/***/ "../../../../../src/app/dashboard/show-program-profile-options/show-program-profile-options.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/show-program-profile-options/show-program-profile-options.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowProgramProfileOptionsComponent; });
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

var ShowProgramProfileOptionsComponent = /** @class */ (function () {
    function ShowProgramProfileOptionsComponent() {
        this.profileOptionLabelHidden = false;
        this.profileOptionTitle = '';
        this.staticReadonlyOption = '';
    }
    ShowProgramProfileOptionsComponent.prototype.ngOnInit = function () {
        this.staticReadonlyOption = this.profile[this.profileProperty] ? 'Yes' : 'No';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ShowProgramProfileOptionsComponent.prototype, "profile", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ShowProgramProfileOptionsComponent.prototype, "profileProperty", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ShowProgramProfileOptionsComponent.prototype, "profileOptionLabel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ShowProgramProfileOptionsComponent.prototype, "profileOptionLabelHidden", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ShowProgramProfileOptionsComponent.prototype, "profileOptionTitle", void 0);
    ShowProgramProfileOptionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-show-program-profile-options',
            template: __webpack_require__("../../../../../src/app/dashboard/show-program-profile-options/show-program-profile-options.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/show-program-profile-options/show-program-profile-options.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], ShowProgramProfileOptionsComponent);
    return ShowProgramProfileOptionsComponent;
}());



/***/ })

});
//# sourceMappingURL=dashboard.module.chunk.js.map