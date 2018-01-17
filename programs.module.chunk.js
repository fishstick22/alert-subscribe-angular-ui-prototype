webpackJsonp(["programs.module"],{

/***/ "../../../../../src/app/programs/program-actions-popover/program-actions-popover.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template #popContent>\r\n  <div class=\"w-100 outer-popover\"\r\n    (click)=\"onClick($event)\"\r\n    (appClickOutside)=\"onClickedOutside($event, p)\"\r\n    [attachOutsideOnClick]=\"attachOutsideOnClick\"\r\n    [delayClickOutsideInit]=\"delayClickOutsideInit\"\r\n    [clickOutsideEvents]=\"clickOutsideEvents\"\r\n    [exclude]=\"exclude\"\r\n    [excludeBeforeClick]=\"excludeBeforeClick\">\r\n\r\n  <div class=\"float-left inner-popover\">\r\n    <span class=\"badge badge-info clickable\"\r\n         (click)=\"configure(progId, 'edit'); p.close();\"\r\n          title=\"Configure/Edit Program {{progId}}: {{progName}} \">\r\n      Edit</span></div>\r\n  <div class=\"float-left inner-popover\">\r\n    <span class=\"badge badge-info clickable\"\r\n         (click)=\"configure(progId, 'expire'); p.close();\"\r\n          title=\"Expire Program {{progId}}: {{progName}} \">\r\n      Expire</span></div>\r\n  <div class=\"float-left inner-popover\">\r\n    <span class=\"badge badge-info clickable\"\r\n         (click)=\"configure(progId, 'client'); p.close();\"\r\n          title=\"Configure Client Exceptions for Program {{progId}}: {{progName}} \">\r\n      Client<br/>Exceptions</span></div>\r\n  <div class=\"float-right inner-popover\">\r\n    <span class=\"badge badge-info clickable\"\r\n         (click)=\"configure(progId, 'communications'); p.close();\"\r\n          title=\"Configure Communications for Program {{progId}}: {{progName}} \">\r\n      Configure<br/>Communications</span></div>\r\n</div>\r\n</ng-template>\r\n<div [ngbPopover]=\"popContent\"\r\n      #p=\"ngbPopover\"\r\n      popoverTitle=\"\"\r\n      placement=\"left\">\r\n  <ng-content></ng-content>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/programs/program-actions-popover/program-actions-popover.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".outer-popover,\n.inner-popover {\n  display: block; }\n\n.outer-popover {\n  width: 300px;\n  padding: 0; }\n\n.inner-popover {\n  padding: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/programs/program-actions-popover/program-actions-popover.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramActionsPopoverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_model_program__ = __webpack_require__("../../../../../src/app/shared/model/program.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProgramActionsPopoverComponent = (function () {
    function ProgramActionsPopoverComponent() {
        this.attachOutsideOnClick = false;
        this.delayClickOutsideInit = true;
        this.clickOutsideEvents = 'click';
        this.exclude = 'ngbPopover ngb-popover';
        this.excludeBeforeClick = false;
        this.configAction = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    ProgramActionsPopoverComponent.prototype.ngOnInit = function () {
    };
    ProgramActionsPopoverComponent.prototype.configure = function (id, config) {
        console.log('ActionsPopoverComponent configure: ', id, config);
        var progConfigAction = new __WEBPACK_IMPORTED_MODULE_1_app_shared_model_program__["b" /* ProgramConfigAction */](id, config);
        this.configAction.emit(progConfigAction);
    };
    ProgramActionsPopoverComponent.prototype.onClick = function (e) {
        console.log('Clicked inside:', e);
    };
    ProgramActionsPopoverComponent.prototype.onClickedOutside = function (e, p) {
        console.log('Clicked outside:', e);
        p.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ProgramActionsPopoverComponent.prototype, "progId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ProgramActionsPopoverComponent.prototype, "progName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], ProgramActionsPopoverComponent.prototype, "configAction", void 0);
    ProgramActionsPopoverComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-program-actions-popover',
            template: __webpack_require__("../../../../../src/app/programs/program-actions-popover/program-actions-popover.component.html"),
            styles: [__webpack_require__("../../../../../src/app/programs/program-actions-popover/program-actions-popover.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], ProgramActionsPopoverComponent);
    return ProgramActionsPopoverComponent;
}());



/***/ }),

/***/ "../../../../../src/app/programs/program-status/program-status.component.html":
/***/ (function(module, exports) {

module.exports = "<span *ngIf=\"progressVisible\">\r\n    <i class=\"fa fa-refresh fa-pulse \"></i>\r\n</span>\r\n<span *ngIf=\"!progressVisible && program.status\">\r\n  <small>{{program.status.effExpDateText}}</small>\r\n</span>\r\n"

/***/ }),

/***/ "../../../../../src/app/programs/program-status/program-status.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/programs/program-status/program-status.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramStatusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_model_program__ = __webpack_require__("../../../../../src/app/shared/model/program.ts");
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


var ProgramStatusComponent = (function () {
    function ProgramStatusComponent() {
        this.detectChanges = '';
        // @Output() statusUpdate = new EventEmitter<any>();
        this.progressVisible = false;
        this.prevStatus = false;
    }
    ProgramStatusComponent.prototype.ngOnInit = function () {
        console.log('ProgramStatusComponent OnInit', this.program);
        this.program.status = new __WEBPACK_IMPORTED_MODULE_1_app_shared_model_program__["c" /* ProgramStatus */](this.program);
        this.showProgress();
    };
    ProgramStatusComponent.prototype.ngOnChanges = function (changes) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log('ProgramStatusComponent OnChanges', changes);
                // OnChanges happens before OnInit -- just bypass that call here
                if (!this.prevStatus) {
                    return [2 /*return*/];
                }
                else if (changes.detectChanges && changes.detectChanges.currentValue) {
                    console.log(changes.detectChanges);
                    if (changes.detectChanges.currentValue === 'saving' ||
                        changes.detectChanges.currentValue === 'expired' ||
                        changes.detectChanges.currentValue === 'edited') {
                        // this.program.status = new ProgramStatus(this.program);
                        // this.program.status.update(this.program);
                        this.showProgress();
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    ProgramStatusComponent.prototype.showProgress = function () {
        this.progressVisible = true;
        setTimeout(function () {
            // this.statusUpdate.emit(this.program.status);
            this.prevStatus = this.program.status;
            this.progressVisible = false;
        }.bind(this), 1000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_app_shared_model_program__["a" /* Program */])
    ], ProgramStatusComponent.prototype, "program", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ProgramStatusComponent.prototype, "detectChanges", void 0);
    ProgramStatusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-program-status',
            template: __webpack_require__("../../../../../src/app/programs/program-status/program-status.component.html"),
            styles: [__webpack_require__("../../../../../src/app/programs/program-status/program-status.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], ProgramStatusComponent);
    return ProgramStatusComponent;
}());



/***/ }),

/***/ "../../../../../src/app/programs/programs-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routedComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__programs_component__ = __webpack_require__("../../../../../src/app/programs/programs.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__programs_component__["a" /* ProgramsComponent */] }
];
var routedComponents = [__WEBPACK_IMPORTED_MODULE_2__programs_component__["a" /* ProgramsComponent */]];
var ProgramsRoutingModule = (function () {
    function ProgramsRoutingModule() {
    }
    ProgramsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], ProgramsRoutingModule);
    return ProgramsRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/programs/programs.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>Manage Programs</h4>\r\n\r\n<table class=\"table table-responsive table-sm table-striped table-bordered table-hover\">\r\n  <caption>\r\n    Programs define collections of Communications, each with a program-level configuration that \r\n    specify the (default) channel priority, if the comm is mandatory, with an effective and expiration date\r\n  </caption>\r\n  <thead class=\"bg-gradient-dark text-white\">\r\n    <tr>\r\n      <th>ID</th>\r\n      <th>Name</th>\r\n      <th>Description</th>\r\n      <th>Status</th>\r\n      <th>Actions</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let program of programs; let i = index\"\r\n         title=\"\" \r\n        (click)=\"setClickedRow(i)\" \r\n        [class.table-info]=\"i === selectedRow\">\r\n      <th scope=\"row\"><span class=\"badge badge-secondary\">{{program.id}}</span></th>\r\n      <td><span>{{program.name}}</span></td>\r\n      <td><span>{{program.description}}</span></td>\r\n      <td>\r\n        <app-program-status\r\n          [program]=\"program\"\r\n          [detectChanges]=\"program.detectChanges\"></app-program-status>\r\n          <!--(statusUpdate)=\"updateProgramStatus($event, program)\"-->\r\n      </td>\r\n      <td>\r\n        <app-program-actions-popover\r\n          [progId]=\"program.id\"\r\n          [progName]=\"program.name\"\r\n          (configAction)=\"configureProgram($event)\">\r\n          <i class=\"fa fa-pencil-square-o clickable\" \r\n             [ngClass]=\"{'sr-only': program.status.expiredProgram}\"\r\n             aria-hidden=\"true\" title=\"Click to configure Program {{program.name}}\"></i>\r\n        </app-program-actions-popover>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td>\r\n        <i class=\"fa fa-plus-square-o clickable\" aria-hidden=\"true\" \r\n          (click)=\"addProgram()\"title=\"Add New Program\"></i>\r\n      </td>\r\n\r\n    </tr>\r\n  </tbody>\r\n  <tfoot></tfoot>\r\n</table>\r\n"

/***/ }),

/***/ "../../../../../src/app/programs/programs.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flex-justify-left {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: left;\n      -ms-flex-align: left;\n          align-items: left;\n  padding: 0 0 0 10px; }\n\n.flex-justify-center {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.flex-justify-right {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: right;\n      -ms-flex-align: right;\n          align-items: right; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/programs/programs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_model_program__ = __webpack_require__("../../../../../src/app/shared/model/program.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_services_data_api_service__ = __webpack_require__("../../../../../src/app/shared/services/data-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_program_client_exceptions_program_client_exceptions_modal_service__ = __webpack_require__("../../../../../src/app/programs/services/program-client-exceptions/program-client-exceptions-modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_program_configurations_program_configurations_modal_service__ = __webpack_require__("../../../../../src/app/programs/services/program-configurations/program-configurations-modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_programs_maintenance_programs_maintenance_modal_service__ = __webpack_require__("../../../../../src/app/programs/services/programs-maintenance/programs-maintenance-modal.service.ts");
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






var ProgramsComponent = (function () {
    function ProgramsComponent(dataApiService, programClientExcService, programConfigService, programsMaintService) {
        this.dataApiService = dataApiService;
        this.programClientExcService = programClientExcService;
        this.programConfigService = programConfigService;
        this.programsMaintService = programsMaintService;
        this.detectChanges = '';
    }
    ProgramsComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // console.log('ProgramComponent ngOnInit...');
                    return [4 /*yield*/, this.getPrograms()];
                    case 1:
                        // console.log('ProgramComponent ngOnInit...');
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProgramsComponent.prototype.getPrograms = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, i, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        _a = this;
                        return [4 /*yield*/, this.dataApiService.getPrograms()];
                    case 1:
                        _a.programs = _b.sent();
                        return [4 /*yield*/, this.getProgramProfiles()];
                    case 2:
                        _b.sent();
                        for (i = 0; i < this.programs.length; i++) {
                            this.findEffectiveProgramProfile(this.programs[i]);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _b.sent();
                        console.log('getPrograms error: ', error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProgramsComponent.prototype.getProgramProfiles = function () {
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
                        return [2 /*return*/, this.programProfiles];
                    case 2:
                        error_2 = _b.sent();
                        console.log('getPrograms error: ', error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProgramsComponent.prototype.findEffectiveProgramProfile = function (program) {
        if (program && program.programProfile) {
            var profiles = program.programProfile;
            if (profiles.length !== 0 && typeof profiles[profiles.length - 1].expiration !== 'undefined') {
                return; // do nothing, everything is cool
            }
            if (profiles.length === 0 ||
                (profiles.length !== 0 && typeof profiles[profiles.length - 1] === 'number')) {
                // really only happens in the in-memory-api exception case
                profiles = this.findProgramProfiles(program);
                // yes, this is a side-effect
                program.programProfile = profiles;
                if (program.status) {
                    program.status.update(program);
                }
            }
        }
    };
    ProgramsComponent.prototype.findProgramProfiles = function (selectedProgram) {
        return this.programProfiles.filter(function (pp) {
            if (typeof (pp.program) === 'number') {
                if (pp.program === selectedProgram.id) {
                    return true;
                }
                else {
                    return false;
                }
            }
        });
    };
    ProgramsComponent.prototype.setClickedRow = function (index) {
        this.selectedRow = (this.selectedRow === index) ? null : index;
    };
    ProgramsComponent.prototype.addProgram = function () {
        return __awaiter(this, void 0, void 0, function () {
            var nextProgramId, addResult, addedProgram;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        nextProgramId = this.programs[this.programs.length - 1].id + 1;
                        return [4 /*yield*/, this.programsMaintService.maintainProgram('add', nextProgramId)];
                    case 1:
                        addResult = _a.sent();
                        addedProgram = addResult.modalOutput.resultProgram;
                        console.log('ProgramsComponent addProgram:', addResult, addedProgram);
                        if (addedProgram && !addedProgram.status) {
                            addedProgram.status = new __WEBPACK_IMPORTED_MODULE_1_app_shared_model_program__["c" /* ProgramStatus */](addedProgram);
                        }
                        else {
                            addedProgram.status.update(addedProgram);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ProgramsComponent.prototype.configureProgram = function (progConfigAction) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var expireResult, modalOutput, expireProgram, clientResult, clientResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (progConfigAction.configType === 'edit') {
                            this.editProgram(progConfigAction.progId).then(function (editResult) { return __awaiter(_this, void 0, void 0, function () {
                                var modalOutput, editProgram;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            console.log('ProgramsComponent editProgram:', editResult);
                                            if (!editResult.success) return [3 /*break*/, 2];
                                            modalOutput = editResult.modalOutput;
                                            editProgram = modalOutput.resultProgram;
                                            return [4 /*yield*/, this.replaceUpdatedProgram(editProgram)];
                                        case 1:
                                            _a.sent();
                                            _a.label = 2;
                                        case 2: return [2 /*return*/];
                                    }
                                });
                            }); });
                        }
                        if (!(progConfigAction.configType === 'expire')) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.expireProgram(progConfigAction.progId)];
                    case 1:
                        expireResult = _a.sent();
                        if (!expireResult.success) return [3 /*break*/, 3];
                        modalOutput = expireResult.modalOutput;
                        expireProgram = modalOutput.resultProgram;
                        return [4 /*yield*/, this.replaceUpdatedProgram(expireProgram)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        if (!(progConfigAction.configType === 'client')) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.configureProgramClientExceptions(progConfigAction.progId)];
                    case 4:
                        clientResult = _a.sent();
                        _a.label = 5;
                    case 5:
                        if (!(progConfigAction.configType === 'communications')) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.configureProgramCommunications(progConfigAction.progId)];
                    case 6:
                        clientResult = _a.sent();
                        _a.label = 7;
                    case 7:
                        this.setClickedRow(null);
                        return [2 /*return*/];
                }
            });
        });
    };
    ProgramsComponent.prototype.editProgram = function (progId) {
        return __awaiter(this, void 0, void 0, function () {
            var updateProgram, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        updateProgram = this.findProgram(progId);
                        return [4 /*yield*/, this.programsMaintService.maintainProgram('edit', null, updateProgram)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    ProgramsComponent.prototype.expireProgram = function (progId) {
        return __awaiter(this, void 0, void 0, function () {
            var expireProgram, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        expireProgram = this.findProgram(progId);
                        return [4 /*yield*/, this.programsMaintService.maintainProgram('expire', null, expireProgram)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    ProgramsComponent.prototype.configureProgramClientExceptions = function (progId) {
        return __awaiter(this, void 0, void 0, function () {
            var program, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        program = this.findProgram(progId);
                        return [4 /*yield*/, this.programClientExcService.configureProgramClientExceptions(program)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    ProgramsComponent.prototype.configureProgramCommunications = function (progId) {
        return __awaiter(this, void 0, void 0, function () {
            var program, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        program = this.findProgram(progId);
                        return [4 /*yield*/, this.programConfigService.configureProgram(program)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    ProgramsComponent.prototype.findProgram = function (id) {
        return this.programs.find(function (p) { return p.id === id; });
    };
    ProgramsComponent.prototype.replaceUpdatedProgram = function (updatedProgram) {
        // Angular change detection should be taking care of this
        // must be missing something...
        var replaceProgram = this.findProgram(updatedProgram.id);
        // replaceProgram = null;
        replaceProgram.name = updatedProgram.name;
        replaceProgram.description = updatedProgram.description;
        replaceProgram.programProfile = updatedProgram.programProfile;
        replaceProgram.detectChanges = 'edited';
        if (replaceProgram && !replaceProgram.status) {
            replaceProgram.status = new __WEBPACK_IMPORTED_MODULE_1_app_shared_model_program__["c" /* ProgramStatus */](replaceProgram);
        }
        else {
            replaceProgram.status.update(replaceProgram);
        }
    };
    ProgramsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-programs',
            template: __webpack_require__("../../../../../src/app/programs/programs.component.html"),
            styles: [__webpack_require__("../../../../../src/app/programs/programs.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_app_shared_services_data_api_service__["a" /* DataApiService */],
            __WEBPACK_IMPORTED_MODULE_3__services_program_client_exceptions_program_client_exceptions_modal_service__["a" /* ProgramClientExceptionsModalService */],
            __WEBPACK_IMPORTED_MODULE_4__services_program_configurations_program_configurations_modal_service__["a" /* ProgramConfigurationsModalService */],
            __WEBPACK_IMPORTED_MODULE_5__services_programs_maintenance_programs_maintenance_modal_service__["a" /* ProgramsMaintenanceModalService */]])
    ], ProgramsComponent);
    return ProgramsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/programs/programs.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramsModule", function() { return ProgramsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__programs_routing_module__ = __webpack_require__("../../../../../src/app/programs/programs-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__program_actions_popover_program_actions_popover_component__ = __webpack_require__("../../../../../src/app/programs/program-actions-popover/program-actions-popover.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__program_status_program_status_component__ = __webpack_require__("../../../../../src/app/programs/program-status/program-status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_program_client_exceptions_program_client_exceptions_modal_component__ = __webpack_require__("../../../../../src/app/programs/services/program-client-exceptions/program-client-exceptions-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_program_client_exceptions_program_client_exceptions_modal_service__ = __webpack_require__("../../../../../src/app/programs/services/program-client-exceptions/program-client-exceptions-modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_program_configurations_program_configurations_modal_component__ = __webpack_require__("../../../../../src/app/programs/services/program-configurations/program-configurations-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_program_configurations_program_configurations_modal_service__ = __webpack_require__("../../../../../src/app/programs/services/program-configurations/program-configurations-modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_programs_maintenance_programs_maintenance_modal_component__ = __webpack_require__("../../../../../src/app/programs/services/programs-maintenance/programs-maintenance-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_programs_maintenance_programs_maintenance_modal_service__ = __webpack_require__("../../../../../src/app/programs/services/programs-maintenance/programs-maintenance-modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Programs feature Module
//











// shared

var ProgramsModule = (function () {
    function ProgramsModule() {
    }
    ProgramsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                // CommonModule, // gets provided by shared module
                __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["d" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__programs_routing_module__["a" /* ProgramsRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_11_app_shared_shared_module__["SharedModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__programs_routing_module__["b" /* routedComponents */],
                __WEBPACK_IMPORTED_MODULE_3__program_actions_popover_program_actions_popover_component__["a" /* ProgramActionsPopoverComponent */],
                __WEBPACK_IMPORTED_MODULE_5__services_program_client_exceptions_program_client_exceptions_modal_component__["a" /* ProgramClientExceptionsModalComponent */],
                __WEBPACK_IMPORTED_MODULE_7__services_program_configurations_program_configurations_modal_component__["a" /* ProgramConfigurationsModalComponent */],
                __WEBPACK_IMPORTED_MODULE_9__services_programs_maintenance_programs_maintenance_modal_component__["a" /* ProgramsMaintenanceModalComponent */],
                __WEBPACK_IMPORTED_MODULE_4__program_status_program_status_component__["a" /* ProgramStatusComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__services_program_client_exceptions_program_client_exceptions_modal_component__["a" /* ProgramClientExceptionsModalComponent */],
                __WEBPACK_IMPORTED_MODULE_7__services_program_configurations_program_configurations_modal_component__["a" /* ProgramConfigurationsModalComponent */],
                __WEBPACK_IMPORTED_MODULE_9__services_programs_maintenance_programs_maintenance_modal_component__["a" /* ProgramsMaintenanceModalComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__services_program_client_exceptions_program_client_exceptions_modal_service__["a" /* ProgramClientExceptionsModalService */],
                __WEBPACK_IMPORTED_MODULE_8__services_program_configurations_program_configurations_modal_service__["a" /* ProgramConfigurationsModalService */],
                __WEBPACK_IMPORTED_MODULE_10__services_programs_maintenance_programs_maintenance_modal_service__["a" /* ProgramsMaintenanceModalService */],
            ],
        })
    ], ProgramsModule);
    return ProgramsModule;
}());



/***/ }),

/***/ "../../../../../src/app/programs/services/program-client-exceptions/program-client-exceptions-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<form #programClientExceptionForm=\"ngForm\" \r\n(ngSubmit)=\"saveProgramClientExceptions()\" >\r\n\r\n<div class=\"modal-header bg-gradient-dark\">\r\n<h4 class=\"modal-title text-white\">\r\n  Configure Client Exceptions\r\n  <small>for ProgramId {{program.id}}: {{program.name}}</small>\r\n</h4>\r\n<button type=\"button\" class=\"close text-white\" aria-label=\"Close\" (click)=\"configureProgramClientExcModal.dismiss('Cross click')\">\r\n<span aria-hidden=\"true\">&times;</span>\r\n</button>\r\n</div>\r\n\r\n<div class=\"modal-body\">\r\n  <div id=\"configuredClients\">\r\n    <table class=\"table table-responsive table-sm table-striped table-bordered table-hover\">\r\n      <caption></caption>\r\n      <thead class=\"bg-gradient-light\">\r\n        <tr>\r\n          <th><small>ID</small></th>\r\n          <th><small>Code</small></th>\r\n          <th><small>Name</small></th>\r\n          <th *ngFor=\"let ppo of programProfileOptions\">\r\n            <small title=\"{{ppo.title}}\">{{ppo.label}}</small>\r\n          </th>\r\n          <th><small>Effective</small></th>\r\n          <th><small>Expiration</small></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let pce of programClientExceptions; let i = index\">\r\n          <td>\r\n              <span *ngIf=\"pce.client.id\" class=\"badge badge-secondary\">{{pce.client.id}}</span>\r\n          </td>\r\n          <td><span >{{pce.client.code}}</span></td>\r\n          <td width=\"18%\"><span >{{pce.client.name}}</span></td>\r\n\r\n          <td *ngFor=\"let ppo of programProfileOptions\">\r\n            <app-select-profile-option \r\n              [name]=\"ppo.property\" [label]=\"ppo.label\"\r\n              [(ngModel)]=\"pce[ppo.property]\"\r\n              [staticValue]=\"pce[ppo.property]\"\r\n              [showHeader]=\"false\"\r\n              [staticReadOnly]=\"i === 0 && !newProgram\"\r\n              [dynamicPicker]=\"i !== 0 || newProgram\"\r\n              [profileOpts]=\"ppo.opts\"></app-select-profile-option>\r\n          </td>\r\n\r\n          <td>\r\n            <app-date-picker-popup [dateValue]=\"pce.effective\"\r\n              (newDateValue)=\"updateDateValue($event, profile, 'effective')\"></app-date-picker-popup>    \r\n          </td>\r\n          <td>\r\n            <input class=\"form-control form-control-sm date-eff-exp-input\" value=\"{{pce.expiration}}\" readonly>\r\n          </td>\r\n          \r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n  \r\n<div class=\"modal-footer\">\r\n  <div class=\"w-100\">\r\n    <span class=\"float-left\">Some instructional content or condition message goes here: </span>\r\n    <div class=\"float-right\">\r\n        <button type=\"submit\" class=\"btn btn-outline-dark\" [disabled]=\"!programClientExceptionForm.valid\">Save</button>\r\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"configureProgramClientExcModal.close('Close click')\">Cancel</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n</form> "

/***/ }),

/***/ "../../../../../src/app/programs/services/program-client-exceptions/program-client-exceptions-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/programs/services/program-client-exceptions/program-client-exceptions-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ProgramClientExceptionsModalResult */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramClientExceptionsModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_app_constants__ = __webpack_require__("../../../../../src/app/app-constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_model_program__ = __webpack_require__("../../../../../src/app/shared/model/program.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProgramClientExceptionsModalResult = (function () {
    function ProgramClientExceptionsModalResult() {
    }
    return ProgramClientExceptionsModalResult;
}());

var ProgramClientExceptionsModalComponent = (function () {
    function ProgramClientExceptionsModalComponent(configureProgramClientExcModal) {
        this.configureProgramClientExcModal = configureProgramClientExcModal;
        this.configType = '';
        this.program = new __WEBPACK_IMPORTED_MODULE_3_app_shared_model_program__["a" /* Program */](); // just becasue service inits whenever
        this.programProfileOptions = __WEBPACK_IMPORTED_MODULE_2_app_app_constants__["a" /* AppConstants */].PROGRAMPROFILEOPTIONS;
        this.addProfile = false;
        this.newProgram = false;
        this.expireProgram = false;
        this.today = new Date();
        this.tomorrow = new Date();
    }
    ProgramClientExceptionsModalComponent.prototype.ngOnInit = function () {
    };
    ProgramClientExceptionsModalComponent.prototype.modalInit = function () {
        console.log(this.programClientExceptions);
    };
    ProgramClientExceptionsModalComponent.prototype.saveProgramClientExceptions = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ProgramClientExceptionsModalComponent.prototype, "configType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_app_shared_model_program__["a" /* Program */])
    ], ProgramClientExceptionsModalComponent.prototype, "program", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], ProgramClientExceptionsModalComponent.prototype, "programClientExceptions", void 0);
    ProgramClientExceptionsModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-program-client-exceptions-modal',
            template: __webpack_require__("../../../../../src/app/programs/services/program-client-exceptions/program-client-exceptions-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/programs/services/program-client-exceptions/program-client-exceptions-modal.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */]])
    ], ProgramClientExceptionsModalComponent);
    return ProgramClientExceptionsModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/programs/services/program-client-exceptions/program-client-exceptions-modal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramClientExceptionsModalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_app_constants__ = __webpack_require__("../../../../../src/app/app-constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__program_client_exceptions_modal_component__ = __webpack_require__("../../../../../src/app/programs/services/program-client-exceptions/program-client-exceptions-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_services_data_api_service__ = __webpack_require__("../../../../../src/app/shared/services/data-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_shared_classes_modal_helpers__ = __webpack_require__("../../../../../src/app/shared/classes/modal-helpers.ts");
/* unused harmony reexport ProgramClientExceptionsModalResult */
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







var ProgramClientExceptionsModalService = (function () {
    function ProgramClientExceptionsModalService(dataApiService, modalService) {
        this.dataApiService = dataApiService;
        this.modalService = modalService;
    }
    ProgramClientExceptionsModalService.prototype.configureProgramClientExceptions = function (program) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var modalResult, promise;
            return __generator(this, function (_a) {
                modalResult = new __WEBPACK_IMPORTED_MODULE_5_app_shared_classes_modal_helpers__["a" /* ModalResult */]();
                promise = new Promise(function (resolve, reject) {
                    _this.configureProgramClientExcModal(program)
                        .then(function (result) { return __awaiter(_this, void 0, void 0, function () {
                        var _a, error_1;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    if (!(result.resultTxt === __WEBPACK_IMPORTED_MODULE_2_app_app_constants__["a" /* AppConstants */].SAVESUCCESS)) return [3 /*break*/, 5];
                                    _b.label = 1;
                                case 1:
                                    _b.trys.push([1, 3, , 4]);
                                    // if (program && program.status) {
                                    //   program.detectChanges = 'saving';
                                    //   program.status.update(program);
                                    // }
                                    _a = modalResult;
                                    return [4 /*yield*/, this.fulfillProgramClientExceptionConfiguration(result)];
                                case 2:
                                    // if (program && program.status) {
                                    //   program.detectChanges = 'saving';
                                    //   program.status.update(program);
                                    // }
                                    _a.modalOutput = _b.sent();
                                    modalResult.success = true;
                                    return [3 /*break*/, 4];
                                case 3:
                                    error_1 = _b.sent();
                                    return [3 /*break*/, 4];
                                case 4:
                                    modalResult.closeResult = "Closed with: " + result.resultTxt;
                                    return [3 /*break*/, 6];
                                case 5:
                                    modalResult.closeResult = "Closed with: " + result;
                                    _b.label = 6;
                                case 6:
                                    console.log('maintainProgram', modalResult);
                                    resolve(modalResult);
                                    return [2 /*return*/];
                            }
                        });
                    }); }, function (reason) {
                        modalResult.closeResult = "Dismissed " + __WEBPACK_IMPORTED_MODULE_5_app_shared_classes_modal_helpers__["b" /* ModalStaticHelper */].getDismissReason(reason);
                        reject(modalResult);
                    }).catch(function (error) {
                        console.log('maintainProgram', error);
                        reject(error);
                    });
                });
                return [2 /*return*/, promise];
            });
        });
    };
    ProgramClientExceptionsModalService.prototype.fulfillProgramClientExceptionConfiguration = function (result) {
        return __awaiter(this, void 0, void 0, function () {
            var modalResult;
            return __generator(this, function (_a) {
                modalResult = result.modalResult;
                return [2 /*return*/, modalResult];
            });
        });
    };
    ProgramClientExceptionsModalService.prototype.configureProgramClientExcModal = function (program) {
        return __awaiter(this, void 0, void 0, function () {
            var modalOpts, modalRef, modalComp, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        modalOpts = {
                            size: 'lg'
                        };
                        modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_3__program_client_exceptions_modal_component__["a" /* ProgramClientExceptionsModalComponent */], modalOpts);
                        modalComp = modalRef.componentInstance;
                        modalComp.program = program;
                        _a = modalComp;
                        return [4 /*yield*/, this.findClientExceptions(program)];
                    case 1:
                        _a.programClientExceptions = _b.sent();
                        // OnInit has likely fired previously, invoke some initialization code
                        modalComp.modalInit();
                        return [2 /*return*/, modalRef.result];
                }
            });
        });
    };
    // async configureProgramClientExcModalOld(program: Program) {
    //   const modalOpts: NgbModalOptions = {
    //     size: 'lg'
    //   };
    //   const modalRef = this.modalService.open(ProgramClientExceptionsModalComponent, modalOpts);
    //   const modalComp: ProgramClientExceptionsModalComponent  = modalRef.componentInstance;
    //   modalComp.program = program;
    //   modalComp.programClientExceptions = await this.findClientExceptions(program);
    //   modalComp.modalInit();
    //   modalRef.result.then( async (result) => {
    //     if (result.resultTxt === AppConstants.SAVESUCCESS) {
    //     }
    //   }, (reason) => {
    //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    //     // this.setClickedRow(null);
    //     console.log('configureProgramModal result: ', this.closeResult);
    //     return this.closeResult;
    //   });
    // }
    ProgramClientExceptionsModalService.prototype.findClientExceptions = function (program) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // TODO well, here's where we want to go get one at a time or
                    // a query that gets them by program id in the API...
                    return [4 /*yield*/, this.getProgramProfileClientExceptions()];
                    case 1:
                        // TODO well, here's where we want to go get one at a time or
                        // a query that gets them by program id in the API...
                        _a.sent();
                        return [2 /*return*/, this.programProfileClientExceptions.filter(function (ppce) { return ppce.program === program.id; })];
                }
            });
        });
    };
    ProgramClientExceptionsModalService.prototype.getProgramProfileClientExceptions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, error_2;
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
                        error_2 = _b.sent();
                        console.log('getPrograms error: ', error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProgramClientExceptionsModalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_app_shared_services_data_api_service__["a" /* DataApiService */],
            __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]])
    ], ProgramClientExceptionsModalService);
    return ProgramClientExceptionsModalService;
}());



/***/ }),

/***/ "../../../../../src/app/programs/services/program-configurations/program-configurations-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<form #programConfigurationForm=\"ngForm\" \r\n(ngSubmit)=\"saveProgramConfiguration()\" >\r\n\r\n  <div class=\"modal-header bg-gradient-dark\">\r\n    <h4 class=\"modal-title text-white\">\r\n      Configure Communication(s)\r\n      <small>for ProgramId {{program.id}}: {{program.name}}</small>\r\n    </h4>\r\n    <button type=\"button\" class=\"close text-white\" aria-label=\"Close\" (click)=\"configureProgramModal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n    \r\n  <div class=\"modal-body\">\r\n      <div id=\"configuredPrograms\">\r\n  \r\n        <table class=\"table table-responsive table-sm table-striped table-bordered table-hover\">\r\n          <caption></caption>\r\n          <thead class=\"bg-gradient-dark text-white\">\r\n            <tr>\r\n              <th>ID</th>\r\n              <th>N<small>ame</small></th>\r\n              <th>E<small>mail</small></th>\r\n              <th>IVR</th>\r\n              <th>SMS</th>\r\n              <th>M<small>ail</small></th>\r\n              <th>M<small>obile</small></th>\r\n              <th>D<small>efault</small></th>\r\n              <th>E<small>ffective</small></th>\r\n              <th>E<small>xpiration</small></th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr appDroppable *ngFor=\"let cc of programConfigurations; let i = index\"\r\n                [dragOverClass]=\"'drag-target-border'\" [dragHintClass]=\"'drag-hint'\"\r\n                [dropEnabled]=\"i === lastProgramConfigRow && !cc.communication.id\"\r\n                \r\n                (onDrop)=\"communicationDrop($event)\"\r\n                [class.table-info]=\"i == lastProgramConfigRow\"> \r\n              \r\n              <td>\r\n                <span *ngIf=\"i !== lastProgramConfigRow\" class=\"badge badge-secondary\">{{cc.communication.id}}</span>\r\n                <span *ngIf=\"i === lastProgramConfigRow && !cc.communication.id\">\r\n                  <i class=\"fa fa-file-o clickable\" aria-hidden=\"true\" \r\n                      title=\"Pick Communication to configure for {{program.name}}\"></i></span>\r\n                <span *ngIf=\"i === lastProgramConfigRow && cc.communication.id\" class=\"badge badge-primary\">{{cc.communication.id}}</span>\r\n              </td>\r\n              <td width=\"20%\"><small>{{cc.communication.name}}</small></td>\r\n              <td><app-select-channel-priority \r\n                    id=\"chanEmailPriority\" name=\"chanEmailPriority\" \r\n                    [(ngModel)]=\"cc.chanEmailPriority\"\r\n                    [actualStaticValue]=\"cc.chanEmailPriority\"\r\n                    [lastConfigRow]=\"i === lastProgramConfigRow\" ></app-select-channel-priority></td>\r\n              <td><app-select-channel-priority \r\n                    id=\"chanIvrPriority\" name=\"chanIvrPriority\" \r\n                    [(ngModel)]=\"cc.chanIvrPriority\"\r\n                    [actualStaticValue]=\"cc.chanIvrPriority\"\r\n                    [lastConfigRow]=\"i === lastProgramConfigRow\" ></app-select-channel-priority></td>\r\n              <td><app-select-channel-priority \r\n                    id=\"chanSmsPriority\" name=\"chanSmsPriority\" \r\n                    [(ngModel)]=\"cc.chanSmsPriority\"\r\n                    [actualStaticValue]=\"cc.chanSmsPriority\"\r\n                    [lastConfigRow]=\"i === lastProgramConfigRow\" ></app-select-channel-priority></td>  \r\n              <td><app-select-channel-priority \r\n                    id=\"chanMailPriority\" name=\"chanMailPriority\" \r\n                    [(ngModel)]=\"cc.chanMailPriority\"\r\n                    [actualStaticValue]=\"cc.chanMailPriority\"\r\n                    [lastConfigRow]=\"i === lastProgramConfigRow\" ></app-select-channel-priority></td> \r\n              <td><app-select-channel-priority \r\n                    id=\"chanMobilePriority\" name=\"chanMobilePriority\" \r\n                    [(ngModel)]=\"cc.chanMobilePriority\"\r\n                    [actualStaticValue]=\"cc.chanMobilePriority\"\r\n                    [lastConfigRow]=\"i === lastProgramConfigRow\" ></app-select-channel-priority></td> \r\n              <td><app-select-channel-default\r\n                    id=\"chanDefault\" name=\"chanDefault\" \r\n                    [(ngModel)]=\"cc.chanDefault\"\r\n                    [actualStaticValue]=\"cc.chanDefault\"\r\n                    [lastConfigRow]=\"i === lastProgramConfigRow\" ></app-select-channel-default></td>\r\n              <td><app-date-eff-exp\r\n                    dateType=\"effective\" [commConfig]=\"cc\"\r\n                    [lastConfigRow]=\"i === lastProgramConfigRow\"\r\n                    (newDateValue)=\"updateDateValue($event, cc, 'effective')\"></app-date-eff-exp></td>\r\n              <td><app-date-eff-exp\r\n                    dateType=\"expiration\" [commConfig]=\"cc\"\r\n                    [lastConfigRow]=\"i === lastProgramConfigRow\"\r\n                    (newDateValue)=\"updateDateValue($event, cc, 'expiration')\"></app-date-eff-exp></td>\r\n            </tr>\r\n            <tr *ngIf=\"configureState === 'start' || configureState === 'continue'\">\r\n              <td>\r\n                <i class=\"fa fa-plus-square-o clickable\" aria-hidden=\"true\" \r\n                  (click)=\"addProgramConfig()\" title=\"Add New Communication to {{program.name}} Configurations\"></i>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n  \r\n      </div>\r\n  \r\n    </div>\r\n  \r\n  <div class=\"modal-footer\">\r\n    <div class=\"w-100\">\r\n      <span class=\"float-left\">Some instructional content or condition message goes here: </span>\r\n      <div class=\"float-right\">\r\n          <button type=\"submit\" class=\"btn btn-outline-dark\" [disabled]=\"!programConfigurationForm.valid\">Save</button>\r\n          <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"configureProgramModal.close('Close click')\">Cancel</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"modal-footer\">\r\n      <div class=\"w-100\">\r\n        <app-comm-action-table *ngIf=\"configureState === 'pick' || configureState === 'continue'\" \r\n          [configureState]=\"configureState\"\r\n          [communications]=\"communications\"\r\n          [displayComm]=\"displayComm\"\r\n          [supressComm]=\"supressComm\"\r\n          [displayCommStartEmpty]=\"true\"\r\n          [displayProgram]=\"program.name\"\r\n          [showCommId]=\"true\"\r\n          [showCommName]=\"true\"\r\n          [showCommDesc]=\"true\"\r\n          [showStatus]=\"false\"\r\n          [showAction]=\"false\"\r\n          (selRowOut)=\"setClickedRow($event)\"\r\n          (selectedCommunication)=\"addProgramConfig($event)\"\r\n          (commConfigAction)=\"configureCommunication($event)\">\r\n        </app-comm-action-table>\r\n      </div>\r\n    </div>\r\n  \r\n</form>   "

/***/ }),

/***/ "../../../../../src/app/programs/services/program-configurations/program-configurations-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/programs/services/program-configurations/program-configurations-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ProgramConfigModalResult */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramConfigurationsModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_app_constants__ = __webpack_require__("../../../../../src/app/app-constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_model_communication__ = __webpack_require__("../../../../../src/app/shared/model/communication.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_model_program__ = __webpack_require__("../../../../../src/app/shared/model/program.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_shared_model_program_configuration__ = __webpack_require__("../../../../../src/app/shared/model/program-configuration.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//
var ProgramConfigModalResult = (function () {
    function ProgramConfigModalResult() {
    }
    return ProgramConfigModalResult;
}());

var ProgramConfigurationsModalComponent = (function () {
    function ProgramConfigurationsModalComponent(
        // private dataApiService: DataApiService,
        configureProgramModal) {
        this.configureProgramModal = configureProgramModal;
        this.program = new __WEBPACK_IMPORTED_MODULE_4_app_shared_model_program__["a" /* Program */](); // just becasue service inits whenever
        this.programConfigurations = [];
        this.programDropEnabled = false;
        this.today = new Date();
        this.tomorrow = new Date();
    }
    ProgramConfigurationsModalComponent.prototype.ngOnInit = function () {
    };
    ProgramConfigurationsModalComponent.prototype.modalInit = function () {
        console.log('ProgramConfigByCommComponent init: ');
        console.log(this.program);
        // console.log(this.programConfigurations);
        // get the list of programs to populate the dropdown (covered in @Input() programs: Program[];)
        // check if there are progConfig already (for now just checking for first one, have to check for eff dates)
        this.displayCommStartEmpty = true;
        this.displayComm = [];
        this.newProgramConfigs = [];
        this.tomorrow.setDate(this.today.getDate() + 1);
        this.configureState = 'start';
        this.supressComm = this.findExistingConfiguredComms();
    };
    ProgramConfigurationsModalComponent.prototype.addProgramConfig = function (communication) {
        if (this.newProgramConfig && this.configureState === 'pick') {
            this.newProgramConfig.communication = communication;
            // this.newProgramConfigs[this.newProgramConfigs.length] = this.newProgramConfig;
            this.supressComm.push(communication.id);
            // this.configureState = 'continue';
            // this.newProgramConfig = null;
            this.programDropEnabled = false;
        }
        if (this.configureState === 'start' || this.configureState === 'continue') {
            // first time through
            this.lastProgramConfigRow = this.programConfigurations.length;
            if (this.lastProgramConfigRow === 0) {
                this.newProgramConfig = new __WEBPACK_IMPORTED_MODULE_5_app_shared_model_program_configuration__["a" /* ProgramConfiguration */]();
                this.newProgramConfig.effective =
                    this.tomorrow.getFullYear() + '-' +
                        (this.tomorrow.getMonth() + 1) + '-' +
                        this.tomorrow.getDate();
            }
            else {
                // clone setting from previous config row
                this.prevProgramConfig = this.programConfigurations[this.lastProgramConfigRow - 1];
                this.newProgramConfig = new __WEBPACK_IMPORTED_MODULE_5_app_shared_model_program_configuration__["a" /* ProgramConfiguration */](this.prevProgramConfig);
                this.newProgramConfig.effective = this.prevProgramConfig.effective;
            }
            this.programConfigurations[this.programConfigurations.length] = this.newProgramConfig;
            this.newProgramConfigs[this.newProgramConfigs.length] = this.newProgramConfig;
            this.newProgramConfig.expiration = __WEBPACK_IMPORTED_MODULE_2_app_app_constants__["a" /* AppConstants */].UNEXPIRED;
            this.newProgramConfig.program = this.program;
            this.newProgramConfig.communication = new __WEBPACK_IMPORTED_MODULE_3_app_shared_model_communication__["a" /* Communication */]();
            this.configureState = 'pick';
            this.programDropEnabled = true;
        }
        else {
            if (this.newProgramConfig && this.configureState === 'pick') {
                this.configureState = 'continue';
            }
        }
    };
    ProgramConfigurationsModalComponent.prototype.communicationDrop = function (dragEvent) {
        console.log('ProgramConfigComponent communicationDrop: ', dragEvent);
        if (dragEvent.dragData && typeof (dragEvent.dragData.id) === 'number') {
            this.addProgramConfig(this.findCommunication(dragEvent.dragData.id));
        }
    };
    ProgramConfigurationsModalComponent.prototype.findCommunication = function (id) {
        return this.communications.find(function (c) { return c.id === id; });
    };
    ProgramConfigurationsModalComponent.prototype.findExistingConfiguredComms = function () {
        var existing = [];
        for (var i = 0; i < this.programConfigurations.length; i++) {
            existing.push(this.programConfigurations[i].communication.id);
        }
        return existing;
    };
    ProgramConfigurationsModalComponent.prototype.saveProgramConfiguration = function () {
        console.log('ProgramConfigComponent save');
        console.log(this.newProgramConfig, ' program id: ', this.program);
        var modalResult = {
            newProgramConfigs: this.newProgramConfigs
        };
        this.configureProgramModal.close({ resultTxt: __WEBPACK_IMPORTED_MODULE_2_app_app_constants__["a" /* AppConstants */].SAVESUCCESS, modalResult: modalResult });
    };
    ProgramConfigurationsModalComponent.prototype.updateDateValue = function (newDateValue, pc, dateType) {
        console.log('ProgramConfigByCommComponent updateDateValue: ', newDateValue, pc, dateType);
        if (dateType === 'effective') {
            pc.effective = newDateValue;
        }
        if (dateType === 'expiration') {
            pc.expiration = newDateValue;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], ProgramConfigurationsModalComponent.prototype, "communications", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_app_shared_model_program__["a" /* Program */])
    ], ProgramConfigurationsModalComponent.prototype, "program", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], ProgramConfigurationsModalComponent.prototype, "programConfigurations", void 0);
    ProgramConfigurationsModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-program-configurations-modal',
            template: __webpack_require__("../../../../../src/app/programs/services/program-configurations/program-configurations-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/programs/services/program-configurations/program-configurations-modal.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */]])
    ], ProgramConfigurationsModalComponent);
    return ProgramConfigurationsModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/programs/services/program-configurations/program-configurations-modal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramConfigurationsModalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_app_constants__ = __webpack_require__("../../../../../src/app/app-constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__program_configurations_modal_component__ = __webpack_require__("../../../../../src/app/programs/services/program-configurations/program-configurations-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_services_data_api_service__ = __webpack_require__("../../../../../src/app/shared/services/data-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_shared_classes_modal_helpers__ = __webpack_require__("../../../../../src/app/shared/classes/modal-helpers.ts");
/* unused harmony reexport ProgramConfigModalResult */
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







var ProgramConfigurationsModalService = (function () {
    function ProgramConfigurationsModalService(dataApiService, modalService) {
        this.dataApiService = dataApiService;
        this.modalService = modalService;
    }
    ProgramConfigurationsModalService.prototype.configureProgram = function (program) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var modalResult, promise;
            return __generator(this, function (_a) {
                modalResult = new __WEBPACK_IMPORTED_MODULE_5_app_shared_classes_modal_helpers__["a" /* ModalResult */]();
                promise = new Promise(function (resolve, reject) {
                    _this.configureProgramModal(program)
                        .then(function (result) { return __awaiter(_this, void 0, void 0, function () {
                        var _a, error_1;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    if (!(result.resultTxt === __WEBPACK_IMPORTED_MODULE_2_app_app_constants__["a" /* AppConstants */].SAVESUCCESS)) return [3 /*break*/, 5];
                                    _b.label = 1;
                                case 1:
                                    _b.trys.push([1, 3, , 4]);
                                    // if (program && program.status) {
                                    //   program.detectChanges = 'saving';
                                    //   program.status.update(program);
                                    // }
                                    _a = modalResult;
                                    return [4 /*yield*/, this.fulfillProgramConfiguration(result)];
                                case 2:
                                    // if (program && program.status) {
                                    //   program.detectChanges = 'saving';
                                    //   program.status.update(program);
                                    // }
                                    _a.modalOutput = _b.sent();
                                    modalResult.success = true;
                                    return [3 /*break*/, 4];
                                case 3:
                                    error_1 = _b.sent();
                                    return [3 /*break*/, 4];
                                case 4:
                                    modalResult.closeResult = "Closed with: " + result.resultTxt;
                                    return [3 /*break*/, 6];
                                case 5:
                                    modalResult.closeResult = "Closed with: " + result;
                                    _b.label = 6;
                                case 6:
                                    console.log('maintainProgram', modalResult);
                                    resolve(modalResult);
                                    return [2 /*return*/];
                            }
                        });
                    }); }, function (reason) {
                        modalResult.closeResult = "Dismissed " + __WEBPACK_IMPORTED_MODULE_5_app_shared_classes_modal_helpers__["b" /* ModalStaticHelper */].getDismissReason(reason);
                        reject(modalResult);
                    }).catch(function (error) {
                        console.log('maintainProgram', error);
                        reject(error);
                    });
                });
                return [2 /*return*/, promise];
            });
        });
    };
    ProgramConfigurationsModalService.prototype.fulfillProgramConfiguration = function (result) {
        return __awaiter(this, void 0, void 0, function () {
            var modalResult, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        modalResult = result.modalResult;
                        if (!modalResult.newProgramConfigs) return [3 /*break*/, 5];
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < modalResult.newProgramConfigs.length)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.addProgramConfiguration(modalResult.newProgramConfigs[i])];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        // TODO this would be some kind of exception
                        console.log('ProgramConfigurationsModalService fulfillProgramConfiguration bad result: ', result.modalResult);
                        _a.label = 6;
                    case 6: return [2 /*return*/, modalResult];
                }
            });
        });
    };
    ProgramConfigurationsModalService.prototype.addProgramConfiguration = function (programConfiguration) {
        return __awaiter(this, void 0, void 0, function () {
            var error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.dataApiService.createProgramConfiguration(programConfiguration)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.log('addProgramConfiguration error: ', error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProgramConfigurationsModalService.prototype.configureProgramModal = function (program) {
        return __awaiter(this, void 0, void 0, function () {
            var modalOpts, modalRef, modalComp, _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        modalOpts = {
                            size: 'lg'
                        };
                        modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_3__program_configurations_modal_component__["a" /* ProgramConfigurationsModalComponent */], modalOpts);
                        modalComp = modalRef.componentInstance;
                        _a = this;
                        return [4 /*yield*/, this.getCommunications()];
                    case 1:
                        _a.communications = _d.sent();
                        _b = this;
                        return [4 /*yield*/, this.getProgramConfigurations()];
                    case 2:
                        _b.programConfigurations = _d.sent();
                        modalComp.communications = this.communications;
                        modalComp.program = program;
                        _c = modalComp;
                        return [4 /*yield*/, this.findProgramConfigurations(program)];
                    case 3:
                        _c.programConfigurations = _d.sent();
                        // OnInit has likely fired previously, invoke some initialization code
                        modalComp.modalInit();
                        return [2 /*return*/, modalRef.result];
                }
            });
        });
    };
    ProgramConfigurationsModalService.prototype.getCommunications = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.dataApiService.getCommunications()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_3 = _a.sent();
                        console.log('getCommunications error: ', error_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProgramConfigurationsModalService.prototype.findProgramConfigurations = function (selectedProgram) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.programConfigurations.filter(function (pc) {
                        if (typeof (pc.program) === 'number') {
                            if (pc.program === selectedProgram.id) {
                                pc.program = selectedProgram;
                                if (typeof (pc.communication) === 'number') {
                                    pc.communication = _this.findCommunication(pc.communication);
                                }
                                return true;
                            }
                            else {
                                return false;
                            }
                        }
                        else if (pc.program.id === selectedProgram.id) {
                            if (typeof (pc.communication) === 'number') {
                                pc.communication = _this.findCommunication(pc.communication);
                            }
                            return true;
                        }
                    })];
            });
        });
    };
    ProgramConfigurationsModalService.prototype.getProgramConfigurations = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.dataApiService.getProgramConfigurations()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_4 = _a.sent();
                        console.log('getProgramConfigurations error: ', error_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProgramConfigurationsModalService.prototype.findCommunication = function (id) {
        return this.communications.find(function (c) { return c.id === id; });
    };
    ProgramConfigurationsModalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_app_shared_services_data_api_service__["a" /* DataApiService */],
            __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]])
    ], ProgramConfigurationsModalService);
    return ProgramConfigurationsModalService;
}());



/***/ }),

/***/ "../../../../../src/app/programs/services/programs-maintenance/programs-maintenance-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<form #programMaintenanceForm=\"ngForm\" \r\n      (ngSubmit)=\"saveProgram()\" >\r\n\r\n  <div class=\"modal-header bg-gradient-dark\">\r\n    <h4 class=\"modal-title text-white\">\r\n      <span *ngIf=\"configType === 'edit'\">\r\n        Edit Program <small>{{program.name}} (ProgramId: {{program.id}}) profile</small></span>\r\n      <span *ngIf=\"configType === 'add'\">\r\n        Add New Program</span>\r\n    </h4>\r\n    <button type=\"button\" class=\"close text-white\" aria-label=\"Close\" (click)=\"maintainProgramModal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n    \r\n  <div class=\"modal-body\">\r\n\r\n    <table class=\"table table-responsive table-sm table-striped table-bordered table-hover\">\r\n      <caption></caption>\r\n      <thead class=\"bg-gradient-light\">\r\n        <tr>\r\n          <th width=\"20%\">Program Name</th>\r\n          <th width=\"80%\">Program Description</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td class=\"form-group\">\r\n\r\n              <label for=\"programName\" class=\"text-white bg-gradient-dark flex-justify-left rounded sr-only\">\r\n                Program Name</label>\r\n              <input type=\"text\" class=\"form-control\"\r\n                      [(ngModel)]=\"programForForm.name\" id=\"programName\" name=\"name\" required\r\n                      aria-describedby=\"programNameHelp\" placeholder=\"Enter Program Name\">\r\n              <small id=\"programNameHelp\" class=\"form-text text-muted\">Short Name of the Program.</small>\r\n\r\n          </td>\r\n          <td class=\"form-group\">\r\n\r\n              <label for=\"programDescription\" class=\"text-white bg-gradient-dark flex-justify-left rounded sr-only\">\r\n                Program Description</label>\r\n              <input type=\"text\" class=\"form-control\" \r\n                      [(ngModel)]=\"programForForm.description\" id=\"programDescription\" name=\"description\" required\r\n                      aria-describedby=\"programDescriptionHelp\" placeholder=\"Enter Program Description\">\r\n              <small id=\"programDescriptionHelp\" class=\"form-text text-muted\">Brief Description of the Program.</small>\r\n\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n    <table *ngIf=\"programProfiles\" class=\"table table-responsive table-sm table-striped table-bordered table-hover\">\r\n      <caption></caption>\r\n      <thead class=\"bg-gradient-light\">\r\n        <tr>\r\n          <th *ngFor=\"let ppo of programProfileOptions\">\r\n            <small title=\"{{ppo.title}}\">{{ppo.label}}</small>\r\n          </th>\r\n          <th><small>Effective</small></th>\r\n          <th><small>Expiration</small></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let profile of programProfiles; let i = index\">\r\n          <td *ngFor=\"let ppo of programProfileOptions\">\r\n\r\n            <app-select-profile-option \r\n              [name]=\"ppo.property\" [label]=\"ppo.label\"\r\n              [(ngModel)]=\"profile[ppo.property]\"\r\n              [staticValue]=\"profile[ppo.property]\"\r\n              [showHeader]=\"false\"\r\n              [staticReadOnly]=\"i === 0 && !newProgram\"\r\n              [dynamicPicker]=\"i !== 0 || newProgram\"\r\n              [profileOpts]=\"ppo.opts\"></app-select-profile-option>\r\n          </td>\r\n          <td><!--TODO move these to a common component -->\r\n              <span *ngIf=\"i === 0 && !newProgram\">\r\n                  <label for=\"effective\" class=\"text-white bg-gradient-dark flex-justify-center rounded sr-only\">\r\n                      Effective</label>\r\n                  <!-- the effective date of the current effective row -->\r\n                  <input class=\"form-control form-control-sm date-eff-exp-input\" value=\"{{profile.effective}}\" readonly>\r\n                </span>\r\n                <span *ngIf=\"newProgram || i !== 0\">\r\n                  <label for=\"effective\" class=\"text-white bg-gradient-dark flex-justify-center rounded sr-only\">\r\n                    Effective</label>\r\n                  <!-- set the effective date for the new row -->\r\n                  <app-date-picker-popup [dateValue]=\"profile.effective\"\r\n                    (newDateValue)=\"updateDateValue($event, profile, 'effective')\"></app-date-picker-popup>           \r\n                </span>\r\n          </td>\r\n          <td>\r\n              <span *ngIf=\"i === 0 && expireProgram\">\r\n                  <label for=\"expiration\" class=\"text-white bg-gradient-dark flex-justify-center rounded sr-only\">\r\n                    Expiration</label>\r\n                  <!-- the expiration date of the current/previous row -->\r\n                  <app-date-picker-popup [dateValue]=\"profile.expiration\"\r\n                    (newDateValue)=\"updateDateValue($event, profile, 'expiration')\"></app-date-picker-popup> \r\n                </span>\r\n                <span *ngIf=\"i === 0 && !expireProgram\">\r\n                  <label for=\"expiration\" class=\"text-white bg-gradient-dark flex-justify-center rounded sr-only\">\r\n                    Expiration</label>\r\n                  <!-- the expiration date of the current/previous row -->\r\n                  <input class=\"form-control form-control-sm date-eff-exp-input\" value=\"{{profile.expiration}}\" readonly\r\n                    (click)=\"changeProfile(profile)\" >\r\n                </span>\r\n                <span *ngIf=\"i !== 0\">\r\n                  <label for=\"expiration\" class=\"text-white bg-gradient-dark flex-justify-center rounded sr-only\">\r\n                    Expiration</label>\r\n                  <!-- the expiration date of the current/previous row -->\r\n                  <input class=\"form-control form-control-sm date-eff-exp-input\" value=\"{{profile.expiration}}\" readonly>\r\n                </span>\r\n          </td>\r\n        </tr>\r\n\r\n        <tr *ngIf=\"addProfile\">\r\n          <td colspan=\"10\">\r\n              <i class=\"fa fa-plus-square-o clickable\" aria-hidden=\"true\" \r\n                (click)=\"changeProfile(profile)\" title=\"Modify Program Profile\"></i>\r\n          </td>\r\n        </tr>\r\n\r\n      </tbody>\r\n    </table>\r\n\r\n  </div>\r\n    \r\n  <div class=\"modal-footer\">\r\n    <div class=\"w-100\">\r\n      <span class=\"float-left\">Some instructional content or condition message goes here: </span>\r\n      <div class=\"float-right\">\r\n          <button type=\"submit\" class=\"btn btn-outline-dark\" [disabled]=\"!programMaintenanceForm.valid\">Save</button>\r\n          <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"maintainProgramModal.close('Close click')\">Cancel</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</form>      "

/***/ }),

/***/ "../../../../../src/app/programs/services/programs-maintenance/programs-maintenance-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flex-justify-left {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: left;\n      -ms-flex-align: left;\n          align-items: left;\n  padding: 0 0 0 10px; }\n\n.flex-justify-center {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.flex-justify-right {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: right;\n      -ms-flex-align: right;\n          align-items: right; }\n\n.date-eff-exp-input {\n  width: 80px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/programs/services/programs-maintenance/programs-maintenance-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ProgramsMaintModalResult */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramsMaintenanceModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_app_constants__ = __webpack_require__("../../../../../src/app/app-constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_model_program__ = __webpack_require__("../../../../../src/app/shared/model/program.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_model_program_profile__ = __webpack_require__("../../../../../src/app/shared/model/program-profile.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProgramsMaintModalResult = (function () {
    function ProgramsMaintModalResult() {
    }
    return ProgramsMaintModalResult;
}());

var ProgramsMaintenanceModalComponent = (function () {
    function ProgramsMaintenanceModalComponent(maintainProgramModal) {
        this.maintainProgramModal = maintainProgramModal;
        this.configType = '';
        this.program = new __WEBPACK_IMPORTED_MODULE_3_app_shared_model_program__["a" /* Program */]();
        this.programForForm = new __WEBPACK_IMPORTED_MODULE_3_app_shared_model_program__["a" /* Program */](); // just becasue service inits whenever
        this.programProfiles = [];
        this.programProfileOptions = __WEBPACK_IMPORTED_MODULE_2_app_app_constants__["a" /* AppConstants */].PROGRAMPROFILEOPTIONS;
        this.addProfile = false;
        this.newProgram = false;
        this.expireProgram = false;
        this.today = new Date();
        this.tomorrow = new Date();
    }
    ProgramsMaintenanceModalComponent.prototype.ngOnInit = function () {
    };
    ProgramsMaintenanceModalComponent.prototype.modalInit = function () {
        console.log('ProgramsMaintenanceModalComponent init: ');
        console.log(this.programForForm);
        this.tomorrow.setDate(this.today.getDate() + 1);
        if (this.configType === 'add') {
            this.programProfiles = [new __WEBPACK_IMPORTED_MODULE_4_app_shared_model_program_profile__["a" /* ProgramProfile */](this.programForForm.id)];
            this.programProfiles[0].effective =
                this.tomorrow.getFullYear() + '-' +
                    (this.tomorrow.getMonth() + 1) + '-' +
                    this.tomorrow.getDate();
            this.programProfiles[0].expiration = __WEBPACK_IMPORTED_MODULE_2_app_app_constants__["a" /* AppConstants */].UNEXPIRED;
            this.newProgram = true;
        }
        if (this.configType === 'edit') {
            // editing a program actually means creating a new row from
            // the current row, setting expiration on current
            // show only the current effective Profile row
            this.programProfiles = [];
            var currentEffectiveProfile = this.getCurrentEffectiveProfile(this.programForForm)[0];
            this.effectiveProfile = new __WEBPACK_IMPORTED_MODULE_4_app_shared_model_program_profile__["a" /* ProgramProfile */](this.programForForm.id, currentEffectiveProfile, true);
            this.programProfiles = [this.effectiveProfile];
            this.addProfile = true;
        }
        if (this.configType === 'expire') {
            this.programProfiles = [];
            var currentEffectiveProfile = this.getCurrentEffectiveProfile(this.programForForm)[0];
            this.programProfiles = [new __WEBPACK_IMPORTED_MODULE_4_app_shared_model_program_profile__["a" /* ProgramProfile */](this.programForForm.id, currentEffectiveProfile, true)];
            this.programProfiles[0].expiration =
                this.tomorrow.getFullYear() + '-' +
                    (this.tomorrow.getMonth() + 1) + '-' +
                    this.tomorrow.getDate();
            this.expireProgram = true;
        }
    };
    ProgramsMaintenanceModalComponent.prototype.getCurrentEffectiveProfile = function (program) {
        return program.programProfile.filter(function (pp) {
            if (pp.expiration === __WEBPACK_IMPORTED_MODULE_2_app_app_constants__["a" /* AppConstants */].UNEXPIRED) {
                return true;
            }
        });
    };
    ProgramsMaintenanceModalComponent.prototype.changeProfile = function (currProfile) {
        // somehow this is coming in null from template?
        if (!currProfile) {
            currProfile = this.effectiveProfile;
        }
        if (this.addProfile) {
            // expire the current profile row
            currProfile.expiration =
                this.today.getFullYear() + '-' +
                    (this.today.getMonth() + 1) + '-' +
                    this.today.getDate();
            // insert a new profile row with tommorow effective
            var newProfile = new __WEBPACK_IMPORTED_MODULE_4_app_shared_model_program_profile__["a" /* ProgramProfile */](this.programForForm.id, currProfile);
            newProfile.effective =
                this.tomorrow.getFullYear() + '-' +
                    (this.tomorrow.getMonth() + 1) + '-' +
                    this.tomorrow.getDate();
            newProfile.expiration = __WEBPACK_IMPORTED_MODULE_2_app_app_constants__["a" /* AppConstants */].UNEXPIRED;
            this.programProfiles.push(newProfile);
        }
        this.addProfile = false;
    };
    ProgramsMaintenanceModalComponent.prototype.saveProgram = function () {
        var modalResult = new ProgramsMaintModalResult();
        if (this.configType === 'add') {
            if (this.programProfiles.length === 1 &&
                this.programProfiles[0].expiration === __WEBPACK_IMPORTED_MODULE_2_app_app_constants__["a" /* AppConstants */].UNEXPIRED) {
                modalResult.insertProgramProfile = this.programProfiles[0];
            }
            modalResult.insertProgram = this.programForForm;
        }
        if (this.configType === 'edit') {
            modalResult.updateProgram = this.programForForm;
            if (this.programProfiles.length === 2) {
                if (this.programProfiles[0].expiration !== __WEBPACK_IMPORTED_MODULE_2_app_app_constants__["a" /* AppConstants */].UNEXPIRED) {
                    modalResult.updateProgramProfile = this.programProfiles[0];
                } // else something went wrong, report error, abort save
                if (this.programProfiles[1].expiration === __WEBPACK_IMPORTED_MODULE_2_app_app_constants__["a" /* AppConstants */].UNEXPIRED) {
                    modalResult.insertProgramProfile = this.programProfiles[1];
                } // else something went wrong, report error, abort save
            }
        }
        if (this.configType === 'expire') {
            modalResult.updateProgram = this.programForForm;
            if (this.programProfiles.length === 1 &&
                this.programProfiles[0].expiration !== __WEBPACK_IMPORTED_MODULE_2_app_app_constants__["a" /* AppConstants */].UNEXPIRED) {
                modalResult.updateProgramProfile = this.programProfiles[0];
            } // else something went wrong, report error, abort save
        }
        this.maintainProgramModal.close({ resultTxt: __WEBPACK_IMPORTED_MODULE_2_app_app_constants__["a" /* AppConstants */].SAVESUCCESS, modalResult: modalResult });
    };
    ProgramsMaintenanceModalComponent.prototype.updateDateValue = function (newDate, pp, dateType) {
        console.log('ProgramsMaintenanceModalComponent updateDateValue: ', newDate, pp, dateType);
        if (dateType === 'effective') {
            pp.effective = newDate.newDateValue;
            // TODO adjust the expiration date of previous row if applicable
        }
        if (dateType === 'expiration') {
            pp.expiration = newDate.newDateValue;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ProgramsMaintenanceModalComponent.prototype, "configType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_app_shared_model_program__["a" /* Program */])
    ], ProgramsMaintenanceModalComponent.prototype, "program", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_app_shared_model_program__["a" /* Program */])
    ], ProgramsMaintenanceModalComponent.prototype, "programForForm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], ProgramsMaintenanceModalComponent.prototype, "programProfiles", void 0);
    ProgramsMaintenanceModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-programs-maintenance-modal',
            template: __webpack_require__("../../../../../src/app/programs/services/programs-maintenance/programs-maintenance-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/programs/services/programs-maintenance/programs-maintenance-modal.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */]])
    ], ProgramsMaintenanceModalComponent);
    return ProgramsMaintenanceModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/programs/services/programs-maintenance/programs-maintenance-modal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramsMaintenanceModalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_app_constants__ = __webpack_require__("../../../../../src/app/app-constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_model_program__ = __webpack_require__("../../../../../src/app/shared/model/program.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__programs_maintenance_modal_component__ = __webpack_require__("../../../../../src/app/programs/services/programs-maintenance/programs-maintenance-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_shared_services_data_api_service__ = __webpack_require__("../../../../../src/app/shared/services/data-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_shared_classes_modal_helpers__ = __webpack_require__("../../../../../src/app/shared/classes/modal-helpers.ts");
/* unused harmony reexport ProgramsMaintModalResult */
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








var ProgramsMaintenanceModalService = (function () {
    function ProgramsMaintenanceModalService(dataApiService, modalService) {
        this.dataApiService = dataApiService;
        this.modalService = modalService;
    }
    ProgramsMaintenanceModalService.prototype.maintainProgram = function (configType, nextId, program) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var modalResult, promise;
            return __generator(this, function (_a) {
                modalResult = new __WEBPACK_IMPORTED_MODULE_6_app_shared_classes_modal_helpers__["a" /* ModalResult */]();
                promise = new Promise(function (resolve, reject) {
                    _this.maintainProgramModal(configType, nextId, program)
                        .then(function (result) { return __awaiter(_this, void 0, void 0, function () {
                        var _a, error_1;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    if (!(result.resultTxt === __WEBPACK_IMPORTED_MODULE_2_app_app_constants__["a" /* AppConstants */].SAVESUCCESS)) return [3 /*break*/, 5];
                                    _b.label = 1;
                                case 1:
                                    _b.trys.push([1, 3, , 4]);
                                    if (program && program.status) {
                                        program.detectChanges = 'saving';
                                        program.status.update(program);
                                    }
                                    _a = modalResult;
                                    return [4 /*yield*/, this.fulfillProgramMaintenance(result, configType)];
                                case 2:
                                    _a.modalOutput = _b.sent();
                                    modalResult.success = true;
                                    return [3 /*break*/, 4];
                                case 3:
                                    error_1 = _b.sent();
                                    return [3 /*break*/, 4];
                                case 4:
                                    modalResult.closeResult = "Closed with: " + result.resultTxt;
                                    return [3 /*break*/, 6];
                                case 5:
                                    modalResult.closeResult = "Closed with: " + result;
                                    _b.label = 6;
                                case 6:
                                    console.log('maintainProgram', modalResult);
                                    resolve(modalResult);
                                    return [2 /*return*/];
                            }
                        });
                    }); }, function (reason) {
                        modalResult.closeResult = "Dismissed " + __WEBPACK_IMPORTED_MODULE_6_app_shared_classes_modal_helpers__["b" /* ModalStaticHelper */].getDismissReason(reason);
                        reject(modalResult);
                    }).catch(function (error) {
                        console.log('maintainProgram', error);
                        reject(error);
                    });
                });
                return [2 /*return*/, promise];
            });
        });
    };
    ProgramsMaintenanceModalService.prototype.fulfillProgramMaintenance = function (result, configType) {
        return __awaiter(this, void 0, void 0, function () {
            var modalResult, newProgram, _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        modalResult = result.modalResult;
                        if (!(configType === 'add' && modalResult.insertProgram)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.addProgramAndProfile(modalResult.insertProgram, modalResult.insertProgramProfile)];
                    case 1:
                        newProgram = _d.sent();
                        console.log('fulfillProgramMaintenance add', newProgram);
                        modalResult.resultProgram = newProgram;
                        _d.label = 2;
                    case 2:
                        if (!(configType === 'edit' && modalResult.updateProgram)) return [3 /*break*/, 6];
                        if (!(modalResult.updateProgramProfile || modalResult.insertProgramProfile)) return [3 /*break*/, 4];
                        // means a new profile was added (prev one expired)
                        _a = modalResult;
                        return [4 /*yield*/, this.updateProgramAndProfiles(modalResult.updateProgram, modalResult.updateProgramProfile, modalResult.insertProgramProfile)];
                    case 3:
                        // means a new profile was added (prev one expired)
                        _a.resultProgram =
                            _d.sent();
                        return [3 /*break*/, 6];
                    case 4:
                        _b = modalResult;
                        return [4 /*yield*/, this.updateProgram(modalResult.updateProgram)];
                    case 5:
                        _b.resultProgram = _d.sent();
                        _d.label = 6;
                    case 6:
                        if (!(configType === 'expire' && modalResult.updateProgram)) return [3 /*break*/, 8];
                        _c = modalResult;
                        return [4 /*yield*/, this.updateProgramAndProfiles(modalResult.updateProgram, modalResult.updateProgramProfile)];
                    case 7:
                        _c.resultProgram =
                            _d.sent();
                        _d.label = 8;
                    case 8: return [2 /*return*/, modalResult];
                }
            });
        });
    };
    ProgramsMaintenanceModalService.prototype.addProgramAndProfile = function (program, programProfile) {
        return __awaiter(this, void 0, void 0, function () {
            var pp, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, this.dataApiService.createProgram(program)];
                    case 1:
                        program = _a.sent();
                        return [4 /*yield*/, this.dataApiService.createProgramProfile(programProfile)];
                    case 2:
                        pp = _a.sent();
                        return [4 /*yield*/, (program.programProfile = [pp])];
                    case 3:
                        _a.sent();
                        console.log('addProgramAndProfile:', program);
                        return [2 /*return*/, program];
                    case 4:
                        error_2 = _a.sent();
                        console.log('addProgramAndProfile error: ', error_2);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ProgramsMaintenanceModalService.prototype.updateProgramAndProfiles = function (updateProgram, updateProgramProfile, insertProgramProfile) {
        return __awaiter(this, void 0, void 0, function () {
            var ppc, pu, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        if (!updateProgramProfile) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.dataApiService.updateProgramProfile(updateProgramProfile)
                                .then(function (ppu) {
                                for (var i = 0; i < updateProgram.programProfile.length; i++) {
                                    if (updateProgram.programProfile[i].id === ppu.id) {
                                        updateProgram.programProfile[i] = ppu;
                                    }
                                }
                            })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!insertProgramProfile) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.dataApiService.createProgramProfile(insertProgramProfile)];
                    case 3:
                        ppc = _a.sent();
                        updateProgram.programProfile.push(ppc);
                        _a.label = 4;
                    case 4: return [4 /*yield*/, this.dataApiService.updateProgram(updateProgram)];
                    case 5:
                        pu = _a.sent();
                        console.log('addProgramAndProfile:', updateProgram);
                        return [2 /*return*/, updateProgram];
                    case 6:
                        error_3 = _a.sent();
                        console.log('addProgramAndProfile error: ', error_3);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    ProgramsMaintenanceModalService.prototype.maintainProgramModal = function (configType, nextId, program) {
        return __awaiter(this, void 0, void 0, function () {
            var modalOpts, modalRef, modalComp, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        modalOpts = {
                            size: 'lg'
                        };
                        modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_4__programs_maintenance_modal_component__["a" /* ProgramsMaintenanceModalComponent */], modalOpts);
                        modalComp = modalRef.componentInstance;
                        // initialize all the @Inputs to the component
                        modalComp.configType = configType;
                        modalComp.program = (program) ? new __WEBPACK_IMPORTED_MODULE_3_app_shared_model_program__["a" /* Program */](program.id, program.name) : new __WEBPACK_IMPORTED_MODULE_3_app_shared_model_program__["a" /* Program */](); // shallow copy just to display
                        _a = modalComp;
                        return [4 /*yield*/, this.setupProgramForForm(configType, nextId, program)];
                    case 1:
                        _a.programForForm = _b.sent();
                        // OnInit has likely fired previously, invoke some initialization code
                        modalComp.modalInit();
                        return [2 /*return*/, modalRef.result];
                }
            });
        });
    };
    ProgramsMaintenanceModalService.prototype.setupProgramForForm = function (configType, nextId, program) {
        return __awaiter(this, void 0, void 0, function () {
            var programForForm, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (configType === 'add' && nextId) {
                            return [2 /*return*/, new __WEBPACK_IMPORTED_MODULE_3_app_shared_model_program__["a" /* Program */](nextId, '')];
                        }
                        if (!(program && (configType === 'edit' || configType === 'expire'))) return [3 /*break*/, 2];
                        programForForm = new __WEBPACK_IMPORTED_MODULE_3_app_shared_model_program__["a" /* Program */](program.id, program.name, program.description);
                        // don't use references from existing program
                        _a = programForForm;
                        return [4 /*yield*/, this.findProgramProfiles(program)];
                    case 1:
                        // don't use references from existing program
                        _a.programProfile = _b.sent();
                        // but ok for these...
                        programForForm.programConfiguration = program.programConfiguration;
                        programForForm.programProfileClientException = program.programProfileClientException;
                        return [2 /*return*/, programForForm];
                    case 2: return [2 /*return*/, null];
                }
            });
        });
    };
    ProgramsMaintenanceModalService.prototype.addProgramProfile = function (programProfile) {
        return __awaiter(this, void 0, void 0, function () {
            var error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.dataApiService.createProgramProfile(programProfile)];
                    case 1:
                        _a.sent();
                        console.log('addProgramProfile:', programProfile, this.programProfiles);
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _a.sent();
                        console.log('addProgramProfile error: ', error_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProgramsMaintenanceModalService.prototype.addProgram = function (program) {
        return __awaiter(this, void 0, void 0, function () {
            var error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.dataApiService.createProgram(program)];
                    case 1:
                        program = _a.sent();
                        console.log('addProgram:', program);
                        return [3 /*break*/, 3];
                    case 2:
                        error_5 = _a.sent();
                        console.log('addProgram error: ', error_5);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProgramsMaintenanceModalService.prototype.getProgramById = function (programId) {
        return __awaiter(this, void 0, void 0, function () {
            var program, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.dataApiService.getProgramById(programId)];
                    case 1:
                        program = _a.sent();
                        console.log('getProgramById:', program);
                        return [2 /*return*/, program];
                    case 2:
                        error_6 = _a.sent();
                        console.log('getProgramById error: ', error_6);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProgramsMaintenanceModalService.prototype.updateProgram = function (program) {
        return __awaiter(this, void 0, void 0, function () {
            var updateProgram, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.dataApiService.updateProgram(program)];
                    case 1:
                        updateProgram = _a.sent();
                        console.log('updateProgram:', program);
                        return [2 /*return*/, updateProgram];
                    case 2:
                        error_7 = _a.sent();
                        console.log('updateProgram error: ', error_7);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProgramsMaintenanceModalService.prototype.updateProgramProfile = function (programProfile) {
        return __awaiter(this, void 0, void 0, function () {
            var updateProgramProfile, error_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.dataApiService.updateProgramProfile(programProfile)];
                    case 1:
                        updateProgramProfile = _a.sent();
                        console.log('updateProgramProfile:', programProfile, this.programProfiles);
                        return [2 /*return*/, updateProgramProfile];
                    case 2:
                        error_8 = _a.sent();
                        console.log('updateProgramProfile error: ', error_8);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProgramsMaintenanceModalService.prototype.getProgramProfiles = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, error_9;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.dataApiService.getProgramProfiles()];
                    case 1:
                        _a.programProfiles = _b.sent();
                        return [2 /*return*/, this.programProfiles];
                    case 2:
                        error_9 = _b.sent();
                        console.log('getPrograms error: ', error_9);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProgramsMaintenanceModalService.prototype.findProgramProfiles = function (selectedProgram) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getProgramProfiles()];
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
    ProgramsMaintenanceModalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_app_shared_services_data_api_service__["a" /* DataApiService */],
            __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]])
    ], ProgramsMaintenanceModalService);
    return ProgramsMaintenanceModalService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/classes/modal-helpers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ModalStaticHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalResult; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");

var ModalStaticHelper = (function () {
    function ModalStaticHelper() {
    }
    ModalStaticHelper.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_0__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_0__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    return ModalStaticHelper;
}());

var ModalResult = (function () {
    function ModalResult() {
        this.success = false;
    }
    return ModalResult;
}());



/***/ }),

/***/ "../../../../../src/app/shared/model/program-profile.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramProfile; });
var ProgramProfile = (function () {
    function ProgramProfile(programId, programProfile, inclId) {
        if (programProfile) {
            // this.id = inclId ? programProfile.id : undefined;
            if (inclId) {
                this.id = programProfile.id;
            }
            this.defaultOptIn = programProfile.defaultOptIn;
            this.visibleInUi = programProfile.visibleInUi;
            this.chanEmail = programProfile.chanEmail;
            this.chanIvr = programProfile.chanIvr;
            this.chanSms = programProfile.chanSms;
            this.chanSecure = programProfile.chanSecure;
            this.chanMail = programProfile.chanMail;
            this.chanMobile = programProfile.chanMobile;
            this.effective = programProfile.effective;
            this.expiration = programProfile.expiration;
            this.program = programId;
        }
        else {
            this.defaultOptIn = 'N';
            this.visibleInUi = 'N';
            this.chanEmail = 'N';
            this.chanIvr = 'N';
            this.chanSms = 'N';
            this.chanSecure = 'N';
            this.chanMail = 'N';
            this.chanMobile = 'N';
            this.program = programId;
        }
    }
    ProgramProfile.prototype.clone = function () {
        return new ProgramProfile(this.program, this, true);
    };
    return ProgramProfile;
}());



/***/ })

});
//# sourceMappingURL=programs.module.chunk.js.map