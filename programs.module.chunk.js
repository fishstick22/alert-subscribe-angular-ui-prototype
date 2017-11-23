webpackJsonp(["programs.module"],{

/***/ "../../../../../src/app/programs/program-actions-popover/program-actions-popover.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template #popContent>\r\n  <div class=\"w-100 outer-popover\"\r\n    (click)=\"onClick($event)\"\r\n    (appClickOutside)=\"onClickedOutside($event, p)\"\r\n    [attachOutsideOnClick]=\"attachOutsideOnClick\"\r\n    [delayClickOutsideInit]=\"delayClickOutsideInit\"\r\n    [clickOutsideEvents]=\"clickOutsideEvents\"\r\n    [exclude]=\"exclude\"\r\n    [excludeBeforeClick]=\"excludeBeforeClick\">\r\n\r\n  <div class=\"float-left inner-popover\">\r\n    <span class=\"badge badge-success clickable\"\r\n         (click)=\"configure(progId, 'edit'); p.close();\"\r\n          title=\"Configure/Edit Program {{progId}}: {{progName}} \">\r\n      Edit</span></div>\r\n  <div class=\"float-left inner-popover\">\r\n    <span class=\"badge badge-success clickable\"\r\n         (click)=\"configure(progId, 'delete'); p.close();\"\r\n          title=\"Delete Program {{progId}}: {{progName}} \">\r\n      Delete</span></div>\r\n  <div class=\"float-right inner-popover\">\r\n    <span class=\"badge badge-success clickable\"\r\n         (click)=\"configure(progId, 'communications'); p.close();\"\r\n          title=\"Configure Communications for Program {{progId}}: {{progName}} \">\r\n      Communications</span></div>\r\n</div>\r\n</ng-template>\r\n<div [ngbPopover]=\"popContent\"\r\n      #p=\"ngbPopover\"\r\n      popoverTitle=\"\"\r\n      placement=\"left\">\r\n  <ng-content></ng-content>\r\n</div>"

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
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], ProgramsRoutingModule);
    return ProgramsRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/programs/programs.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>Manage Programs</h4>\r\n\r\n<table class=\"table table-responsive table-sm table-striped table-bordered table-hover\">\r\n  <caption>\r\n    Programs define collections of Communications, each with a program-level configuration that \r\n    specify the (default) channel priority, if the comm is mandatory, with an effective and expiration date\r\n  </caption>\r\n  <thead class=\"bg-gradient-dark text-white\">\r\n    <tr>\r\n      <th>ID</th>\r\n      <th>Name</th>\r\n      <th>Description</th>\r\n      <th>Actions</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let program of programs; let i = index\"\r\n         title=\"\" \r\n        (click)=\"setClickedRow(i)\" \r\n        [class.table-success]=\"i === selectedRow\">\r\n      <th scope=\"row\"><span class=\"badge badge-secondary\">{{program.id}}</span></th>\r\n      <td><span>{{program.name}}</span></td>\r\n      <td><span>{{program.description}}</span></td>\r\n      <td>\r\n        <app-program-actions-popover\r\n          [progId]=\"program.id\"\r\n          [progName]=\"program.name\"\r\n          (configAction)=\"configureProgram($event)\">\r\n          <i class=\"fa fa-pencil-square-o clickable\" aria-hidden=\"true\" title=\"Click to configure Program {{program.name}}\"></i>\r\n        </app-program-actions-popover>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td>\r\n        <i class=\"fa fa-plus-square-o clickable\" aria-hidden=\"true\" \r\n          (click)=\"addProgramModal()\"title=\"Add New Program\"></i>\r\n      </td>\r\n      <td></td>\r\n      <td></td>\r\n      <td></td>\r\n    </tr>\r\n  </tbody>\r\n  <tfoot></tfoot>\r\n</table>\r\n"

/***/ }),

/***/ "../../../../../src/app/programs/programs.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/programs/programs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_services_data_api_service__ = __webpack_require__("../../../../../src/app/shared/services/data-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_program_configurations_program_configurations_modal_service__ = __webpack_require__("../../../../../src/app/programs/services/program-configurations/program-configurations-modal.service.ts");
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
    function ProgramsComponent(dataApiService, programConfigService) {
        this.dataApiService = dataApiService;
        this.programConfigService = programConfigService;
    }
    ProgramsComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('ProgramComponent ngOnInit...');
                        return [4 /*yield*/, this.getPrograms()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProgramsComponent.prototype.getPrograms = function () {
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
    ProgramsComponent.prototype.setClickedRow = function (index) {
        if (this.selectedRow === index || this.selectedRow === null) {
            this.selectedRow = null;
        }
        else {
            this.selectedRow = index;
        }
    };
    ProgramsComponent.prototype.configureProgram = function (progConfigAction) {
        if (progConfigAction.configType === 'edit') {
            // this.editProgramModal(progConfigAction.progId);
        }
        if (progConfigAction.configType === 'delete') {
            // this.deleteProgramModal(progConfigAction.progId);
        }
        if (progConfigAction.configType === 'communications') {
            this.configureProgramCommunications(progConfigAction.progId);
        }
        this.setClickedRow(null);
    };
    ProgramsComponent.prototype.configureProgramCommunications = function (progId) {
        // invoke service to manage a modal dialog allowing user to
        // configure the program-level communication configurations
        var program = this.findProgram(progId);
        this.programConfigService.configureProgramModal(program);
    };
    ProgramsComponent.prototype.findProgram = function (id) {
        return this.programs.find(function (p) { return p.id === id; });
    };
    ProgramsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-programs',
            template: __webpack_require__("../../../../../src/app/programs/programs.component.html"),
            styles: [__webpack_require__("../../../../../src/app/programs/programs.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_shared_services_data_api_service__["a" /* DataApiService */],
            __WEBPACK_IMPORTED_MODULE_2__services_program_configurations_program_configurations_modal_service__["a" /* ProgramConfigurationsModalService */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__programs_component__ = __webpack_require__("../../../../../src/app/programs/programs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__program_actions_popover_program_actions_popover_component__ = __webpack_require__("../../../../../src/app/programs/program-actions-popover/program-actions-popover.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_program_configurations_program_configurations_modal_service__ = __webpack_require__("../../../../../src/app/programs/services/program-configurations/program-configurations-modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_program_configurations_program_configurations_modal_component__ = __webpack_require__("../../../../../src/app/programs/services/program-configurations/program-configurations-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import { CommonModule } from '@angular/common';






// shared

var ProgramsModule = (function () {
    function ProgramsModule() {
    }
    ProgramsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                // CommonModule, // supposed to be imported from shared module?
                __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["d" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__programs_routing_module__["a" /* ProgramsRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7_app_shared_shared_module__["SharedModule"],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__programs_routing_module__["b" /* routedComponents */],
                __WEBPACK_IMPORTED_MODULE_3__programs_component__["a" /* ProgramsComponent */],
                __WEBPACK_IMPORTED_MODULE_4__program_actions_popover_program_actions_popover_component__["a" /* ProgramActionsPopoverComponent */],
                __WEBPACK_IMPORTED_MODULE_6__services_program_configurations_program_configurations_modal_component__["a" /* ProgramConfigurationsModalComponent */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_6__services_program_configurations_program_configurations_modal_component__["a" /* ProgramConfigurationsModalComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_program_configurations_program_configurations_modal_service__["a" /* ProgramConfigurationsModalService */]],
        })
    ], ProgramsModule);
    return ProgramsModule;
}());



/***/ }),

/***/ "../../../../../src/app/programs/services/program-configurations/program-configurations-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<form #programConfigurationForm=\"ngForm\" \r\n(ngSubmit)=\"saveProgramConfiguration()\" >\r\n\r\n  <div class=\"modal-header bg-gradient-dark\">\r\n    <h4 class=\"modal-title text-white\">\r\n      Configure Communication(s)\r\n      <small>for ProgramId {{program.id}}: {{program.name}}</small>\r\n    </h4>\r\n    <button type=\"button\" class=\"close text-white\" aria-label=\"Close\" (click)=\"configureProgramModal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n    \r\n  <div class=\"modal-body\">\r\n      <div id=\"configuredPrograms\">\r\n  \r\n        <table class=\"table table-responsive table-sm table-striped table-bordered table-hover\">\r\n          <caption></caption>\r\n          <thead class=\"bg-gradient-dark text-white\">\r\n            <tr>\r\n              <th>ID</th>\r\n              <th>N<small>ame</small></th>\r\n              <th>E<small>mail</small></th>\r\n              <th>IVR</th>\r\n              <th>SMS</th>\r\n              <th>M<small>ail</small></th>\r\n              <th>M<small>obile</small></th>\r\n              <th>M<small>andatory</small></th>\r\n              <th>E<small>ffective</small></th>\r\n              <th>E<small>xpiration</small></th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr appDroppable *ngFor=\"let cc of programConfigurations; let i = index\"\r\n                [dragOverClass]=\"'drag-target-border'\" [dragHintClass]=\"'drag-hint'\"\r\n                [dropEnabled]=\"i === lastProgramConfigRow && !cc.communication.id\"\r\n                \r\n                (onDrop)=\"communicationDrop($event)\"\r\n                [class.table-info]=\"i == lastProgramConfigRow\"> \r\n              \r\n              <td>\r\n                <span *ngIf=\"i !== lastProgramConfigRow\" class=\"badge badge-secondary\">{{cc.communication.id}}</span>\r\n                <span *ngIf=\"i === lastProgramConfigRow && !cc.communication.id\">\r\n                  <i class=\"fa fa-file-o clickable\" aria-hidden=\"true\" \r\n                      title=\"Pick Communication to configure for {{program.name}}\"></i></span>\r\n                <span *ngIf=\"i === lastProgramConfigRow && cc.communication.id\" class=\"badge badge-primary\">{{cc.communication.id}}</span>\r\n              </td>\r\n              <td width=\"20%\"><small>{{cc.communication.name}}</small></td>\r\n              <td><app-select-channel-priority \r\n                    id=\"chanEmailPriority\" name=\"chanEmailPriority\" \r\n                    [(ngModel)]=\"cc.chanEmailPriority\"\r\n                    [actualStaticValue]=\"cc.chanEmailPriority\"\r\n                    [lastConfigRow]=\"i === lastProgramConfigRow\" ></app-select-channel-priority></td>\r\n              <td><app-select-channel-priority \r\n                    id=\"chanIvrPriority\" name=\"chanIvrPriority\" \r\n                    [(ngModel)]=\"cc.chanIvrPriority\"\r\n                    [actualStaticValue]=\"cc.chanIvrPriority\"\r\n                    [lastConfigRow]=\"i === lastProgramConfigRow\" ></app-select-channel-priority></td>\r\n              <td><app-select-channel-priority \r\n                    id=\"chanSmsPriority\" name=\"chanSmsPriority\" \r\n                    [(ngModel)]=\"cc.chanSmsPriority\"\r\n                    [actualStaticValue]=\"cc.chanSmsPriority\"\r\n                    [lastConfigRow]=\"i === lastProgramConfigRow\" ></app-select-channel-priority></td>  \r\n              <td><app-select-channel-priority \r\n                    id=\"chanMailPriority\" name=\"chanMailPriority\" \r\n                    [(ngModel)]=\"cc.chanMailPriority\"\r\n                    [actualStaticValue]=\"cc.chanMailPriority\"\r\n                    [lastConfigRow]=\"i === lastProgramConfigRow\" ></app-select-channel-priority></td> \r\n              <td><app-select-channel-priority \r\n                    id=\"chanMobilePriority\" name=\"chanMobilePriority\" \r\n                    [(ngModel)]=\"cc.chanMobilePriority\"\r\n                    [actualStaticValue]=\"cc.chanMobilePriority\"\r\n                    [lastConfigRow]=\"i === lastProgramConfigRow\" ></app-select-channel-priority></td> \r\n              <td><app-select-channel-mandatory\r\n                    id=\"chanMandatory\" name=\"chanMandatory\" \r\n                    [(ngModel)]=\"cc.chanMandatory\"\r\n                    [actualStaticValue]=\"cc.chanMandatory\"\r\n                    [lastConfigRow]=\"i === lastProgramConfigRow\" ></app-select-channel-mandatory></td>\r\n              <td><app-date-eff-exp\r\n                    dateType=\"effective\" [commConfig]=\"cc\"\r\n                    [lastConfigRow]=\"i === lastProgramConfigRow\"\r\n                    (newDateValue)=\"updateDateValue($event, cc, 'effective')\"></app-date-eff-exp></td>\r\n              <td><app-date-eff-exp\r\n                    dateType=\"expiration\" [commConfig]=\"cc\"\r\n                    [lastConfigRow]=\"i === lastProgramConfigRow\"\r\n                    (newDateValue)=\"updateDateValue($event, cc, 'expiration')\"></app-date-eff-exp></td>\r\n            </tr>\r\n            <tr *ngIf=\"configureState === 'start' || configureState === 'continue'\">\r\n              <td>\r\n                <i class=\"fa fa-plus-square-o clickable\" aria-hidden=\"true\" \r\n                  (click)=\"addProgramConfig()\" title=\"Add New Communication to {{program.name}} Configurations\"></i>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n  \r\n      </div>\r\n  \r\n    </div>\r\n  \r\n  <div class=\"modal-footer\">\r\n    <div class=\"w-100\">\r\n      <span class=\"float-left\">Some instructional content or condition message goes here: </span>\r\n      <div class=\"float-right\">\r\n          <button type=\"submit\" class=\"btn btn-outline-dark\" [disabled]=\"!programConfigurationForm.valid\">Save</button>\r\n          <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"configureProgramModal.close('Close click')\">Cancel</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"modal-footer\">\r\n      <div class=\"w-100\">\r\n        <app-comm-action-table *ngIf=\"configureState === 'pick' || configureState === 'continue'\" \r\n          [configureState]=\"configureState\"\r\n          [communications]=\"communications\"\r\n          [displayComm]=\"displayComm\"\r\n          [supressComm]=\"supressComm\"\r\n          [displayCommStartEmpty]=\"true\"\r\n          [displayProgram]=\"program.name\"\r\n          [showCommId]=\"true\"\r\n          [showCommName]=\"true\"\r\n          [showCommDesc]=\"true\"\r\n          [showStatus]=\"false\"\r\n          [showAction]=\"false\"\r\n          (selRowOut)=\"setClickedRow($event)\"\r\n          (selectedCommunication)=\"addProgramConfig($event)\"\r\n          (commConfigAction)=\"configureCommunication($event)\">\r\n        </app-comm-action-table>\r\n      </div>\r\n    </div>\r\n  \r\n</form>   "

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramConfigurationsModalComponent; });
/* unused harmony export ProgramConfigModalResult */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_model_communication__ = __webpack_require__("../../../../../src/app/shared/model/communication.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_model_program__ = __webpack_require__("../../../../../src/app/shared/model/program.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_model_program_configuration__ = __webpack_require__("../../../../../src/app/shared/model/program-configuration.ts");
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
var ProgramConfigurationsModalComponent = (function () {
    function ProgramConfigurationsModalComponent(
        // private dataApiService: DataApiService,
        configureProgramModal) {
        this.configureProgramModal = configureProgramModal;
        this.program = new __WEBPACK_IMPORTED_MODULE_3_app_shared_model_program__["a" /* Program */](); // just becasue service inits whenever
        this.programConfigurations = [];
        this.SAVESUCCESS = 'Close on succesful save';
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
                this.newProgramConfig = new __WEBPACK_IMPORTED_MODULE_4_app_shared_model_program_configuration__["a" /* ProgramConfiguration */]();
                this.newProgramConfig.effective =
                    this.tomorrow.getFullYear() + '-' +
                        (this.tomorrow.getMonth() + 1) + '-' +
                        this.tomorrow.getDate();
            }
            else {
                // clone setting from previous config row
                this.prevProgramConfig = this.programConfigurations[this.lastProgramConfigRow - 1];
                this.newProgramConfig = new __WEBPACK_IMPORTED_MODULE_4_app_shared_model_program_configuration__["a" /* ProgramConfiguration */](this.prevProgramConfig);
                this.newProgramConfig.effective = this.prevProgramConfig.effective;
            }
            this.programConfigurations[this.programConfigurations.length] = this.newProgramConfig;
            this.newProgramConfigs[this.newProgramConfigs.length] = this.newProgramConfig;
            this.newProgramConfig.expiration = '9999-12-31';
            this.newProgramConfig.program = this.program;
            this.newProgramConfig.communication = new __WEBPACK_IMPORTED_MODULE_2_app_shared_model_communication__["a" /* Communication */]();
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
        this.configureProgramModal.close({ resultTxt: this.SAVESUCCESS, modalResult: modalResult });
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
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_app_shared_model_program__["a" /* Program */])
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

var ProgramConfigModalResult = (function () {
    function ProgramConfigModalResult() {
    }
    return ProgramConfigModalResult;
}());



/***/ }),

/***/ "../../../../../src/app/programs/services/program-configurations/program-configurations-modal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramConfigurationsModalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__program_configurations_modal_component__ = __webpack_require__("../../../../../src/app/programs/services/program-configurations/program-configurations-modal.component.ts");
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




var ProgramConfigurationsModalService = (function () {
    function ProgramConfigurationsModalService(dataApiService, modalService) {
        this.dataApiService = dataApiService;
        this.modalService = modalService;
    }
    ProgramConfigurationsModalService.prototype.addProgramConfiguration = function (programConfiguration) {
        var _this = this;
        this.dataApiService.createProgramConfiguration(programConfiguration)
            .then(function (pc) { return console.log('addProgramConfiguration:', programConfiguration, _this.programConfigurations); })
            .catch(function (error) { return console.log('addProgramConfiguration error: ', error); });
    };
    ProgramConfigurationsModalService.prototype.configureProgramModal = function (program) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var modalOpts, modalRef, modalComp, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        modalOpts = {
                            size: 'lg'
                        };
                        modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_2__program_configurations_modal_component__["a" /* ProgramConfigurationsModalComponent */], modalOpts);
                        modalComp = modalRef.componentInstance;
                        _a = modalComp;
                        return [4 /*yield*/, this.getCommunications()];
                    case 1:
                        _a.communications = _c.sent();
                        modalComp.program = program;
                        _b = modalComp;
                        return [4 /*yield*/, this.findProgramConfigurations(program)];
                    case 2:
                        _b.programConfigurations = _c.sent();
                        modalComp.modalInit();
                        modalRef.result.then(function (result) {
                            if (result.resultTxt === modalComp.SAVESUCCESS) {
                                console.log('configureProgramModal result: ', result.modalResult);
                                _this.closeResult = "Closed with: " + result.resultTxt;
                                if (result.modalResult) {
                                    var modalResult = result.modalResult;
                                    // if (modalResult.prevProgConfig) {
                                    //   this.updateProgramConfiguration(modalResult.prevProgConfig);
                                    // }
                                    if (modalResult.newProgramConfigs) {
                                        for (var i = 0; i < modalResult.newProgramConfigs.length; i++) {
                                            _this.addProgramConfiguration(modalResult.newProgramConfigs[i]);
                                        }
                                    }
                                }
                                else {
                                    // this would be some kind of exception
                                    console.log('CommunicationComponent configureProgramModal bad result: ', result.modalResult);
                                }
                            }
                            else {
                                _this.closeResult = "Closed with: " + result;
                            }
                            // this.setClickedRow(null);
                            console.log('configureProgramModal result: ', _this.closeResult);
                        }, function (reason) {
                            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
                            // this.setClickedRow(null);
                            console.log('configureProgramModal result: ', _this.closeResult);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ProgramConfigurationsModalService.prototype.findCommunication = function (id) {
        return this.communications.find(function (c) { return c.id === id; });
    };
    ProgramConfigurationsModalService.prototype.findProgramConfigurations = function (selectedProgram) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getProgramConfigurations()];
                    case 1:
                        _a.sent();
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
                }
            });
        });
    };
    ProgramConfigurationsModalService.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    ProgramConfigurationsModalService.prototype.getCommunications = function () {
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
                        return [2 /*return*/, this.communications];
                    case 2:
                        error_1 = _b.sent();
                        console.log('getCommunications error: ', error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProgramConfigurationsModalService.prototype.getPrograms = function () {
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
                        return [2 /*return*/, this.programs];
                    case 2:
                        error_2 = _b.sent();
                        console.log('getPrograms error: ', error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProgramConfigurationsModalService.prototype.getProgramConfigurations = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, error_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.dataApiService.getProgramConfigurations()];
                    case 1:
                        _a.programConfigurations = _b.sent();
                        return [2 /*return*/, this.programConfigurations];
                    case 2:
                        error_3 = _b.sent();
                        console.log('getProgramConfigurations error: ', error_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProgramConfigurationsModalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_app_shared_services_data_api_service__["a" /* DataApiService */],
            __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]])
    ], ProgramConfigurationsModalService);
    return ProgramConfigurationsModalService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/model/program.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Program; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ProgramConfigAction; });
// import { IProgramConfig } from 'app/classes/model/iprog-config';
// export class Program implements IProgramConfig {
var Program = (function () {
    function Program(id, name, description, programConfiguration) {
        if (id === void 0) { id = 0; }
        if (name === void 0) { name = ''; }
        var emptyNum = [];
        this.id = id;
        this.name = name;
        this.description = (description) ? description : '';
        this.programConfiguration = (programConfiguration) ? programConfiguration : emptyNum;
    }
    Program.prototype.clone = function () {
        return new Program(this.id, this.name, this.description, this.programConfiguration);
    };
    return Program;
}());

var ProgramConfigAction = (function () {
    function ProgramConfigAction(id, type) {
        this.progId = id;
        this.configType = type;
    }
    return ProgramConfigAction;
}());



/***/ })

});
//# sourceMappingURL=programs.module.chunk.js.map