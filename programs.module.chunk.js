webpackJsonp(["programs.module"],{

/***/ "../../../../../src/app/programs/program-actions-popover/program-actions-popover.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template #popContent>\n  <div class=\"w-100 outer-popover\"\n    (click)=\"onClick($event)\"\n    (appClickOutside)=\"onClickedOutside($event, p)\"\n    [attachOutsideOnClick]=\"attachOutsideOnClick\"\n    [delayClickOutsideInit]=\"delayClickOutsideInit\"\n    [clickOutsideEvents]=\"clickOutsideEvents\"\n    [exclude]=\"exclude\"\n    [excludeBeforeClick]=\"excludeBeforeClick\">\n\n  <div class=\"float-left inner-popover\">\n    <span class=\"badge badge-success clickable\"\n         (click)=\"configure(progId, 'edit'); p.close();\"\n          title=\"Configure/Edit Program {{progId}}: {{progName}} \">\n      Edit</span></div>\n  <div class=\"float-left inner-popover\">\n    <span class=\"badge badge-success clickable\"\n         (click)=\"configure(progId, 'expire'); p.close();\"\n          title=\"Expire Program {{progId}}: {{progName}} \">\n      Expire</span></div>\n  <div class=\"float-right inner-popover\">\n    <span class=\"badge badge-success clickable\"\n         (click)=\"configure(progId, 'communications'); p.close();\"\n          title=\"Configure Communications for Program {{progId}}: {{progName}} \">\n      Communications</span></div>\n</div>\n</ng-template>\n<div [ngbPopover]=\"popContent\"\n      #p=\"ngbPopover\"\n      popoverTitle=\"\"\n      placement=\"left\">\n  <ng-content></ng-content>\n</div>"

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

module.exports = "<span *ngIf=\"progressVisible\">\n    <i class=\"fa fa-refresh fa-pulse \"></i>\n</span>\n<span *ngIf=\"!progressVisible && lastProfile && lastProfile.expiration && expiredProgram\">\n  <small>exp {{lastProfile.expiration}}</small>\n</span>\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_model_program_profile__ = __webpack_require__("../../../../../src/app/shared/model/program-profile.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProgramStatusComponent = (function () {
    function ProgramStatusComponent() {
        this.detectChanges = '';
        this.statusUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.UNEXPIRED = '9999-12-31';
        this.progressVisible = false;
        this.expiredProgram = false;
        this.lastStatus = {};
    }
    ProgramStatusComponent.prototype.ngOnInit = function () {
        // if (this.program.programProfile) {
        //   this.lastProfile = this.program.programProfile[this.program.programProfile.length - 1];
        //   this.expiredProgram = (this.lastProfile.expiration !== this.UNEXPIRED);
        // } else {
        //   this.lastProfile =  new ProgramProfile(null);
        //   this.lastProfile.expiration = '';
        // }
    };
    ProgramStatusComponent.prototype.ngOnChanges = function (changes) {
        console.log(changes);
        if (this.program.programProfile && this.program.programProfile.length > 0) {
            this.lastProfile = this.program.programProfile[this.program.programProfile.length - 1];
            this.expiredProgram = (this.lastProfile.expiration !== this.UNEXPIRED);
            this.program.status = this.expiredProgram ? 'expired' : 'active';
        }
        else {
            this.lastProfile = new __WEBPACK_IMPORTED_MODULE_2_app_shared_model_program_profile__["a" /* ProgramProfile */](null);
            this.lastProfile.expiration = '';
            this.program.status = '';
        }
        if (this.program.status && this.lastStatus !== this.program.status) {
            this.showProgress();
            this.lastStatus = this.program.status;
        }
    };
    ProgramStatusComponent.prototype.showProgress = function () {
        this.progressVisible = true;
        setTimeout(function () {
            this.statusUpdate.emit(this.program.status);
            this.progressVisible = false;
        }.bind(this), 3000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_app_shared_model_program__["a" /* Program */])
    ], ProgramStatusComponent.prototype, "program", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ProgramStatusComponent.prototype, "detectChanges", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], ProgramStatusComponent.prototype, "statusUpdate", void 0);
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
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], ProgramsRoutingModule);
    return ProgramsRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/programs/programs.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>Manage Programs</h4>\n\n<table class=\"table table-responsive table-sm table-striped table-bordered table-hover\">\n  <caption>\n    Programs define collections of Communications, each with a program-level configuration that \n    specify the (default) channel priority, if the comm is mandatory, with an effective and expiration date\n  </caption>\n  <thead class=\"bg-gradient-dark text-white\">\n    <tr>\n      <th>ID</th>\n      <th>Name</th>\n      <th>Description</th>\n      <th>Status</th>\n      <th>Actions</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let program of programs; let i = index\"\n         title=\"\" \n        (click)=\"setClickedRow(i)\" \n        [class.table-success]=\"i === selectedRow\">\n      <th scope=\"row\"><span class=\"badge badge-secondary\">{{program.id}}</span></th>\n      <td><span>{{program.name}}</span></td>\n      <td><span>{{program.description}}</span></td>\n      <td>\n        <app-program-status\n          [program]=\"program\"\n          [detectChanges]=\"detectChanges\"\n          (statusUpdate)=\"updateProgramStatus($event, program)\"></app-program-status>\n      </td>\n      <td>\n        <app-program-actions-popover\n          [progId]=\"program.id\"\n          [progName]=\"program.name\"\n          (configAction)=\"configureProgram($event)\">\n          <i class=\"fa fa-pencil-square-o clickable\" \n             [ngClass]=\"{'sr-only': program.status === 'expired'}\"\n             aria-hidden=\"true\" title=\"Click to configure Program {{program.name}}\"></i>\n        </app-program-actions-popover>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <i class=\"fa fa-plus-square-o clickable\" aria-hidden=\"true\" \n          (click)=\"addProgram()\"title=\"Add New Program\"></i>\n      </td>\n\n    </tr>\n  </tbody>\n  <tfoot></tfoot>\n</table>\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_services_data_api_service__ = __webpack_require__("../../../../../src/app/shared/services/data-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_program_configurations_program_configurations_modal_service__ = __webpack_require__("../../../../../src/app/programs/services/program-configurations/program-configurations-modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_programs_maintenance_programs_maintenance_modal_service__ = __webpack_require__("../../../../../src/app/programs/services/programs-maintenance/programs-maintenance-modal.service.ts");
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
    function ProgramsComponent(dataApiService, programConfigService, programsMaintService) {
        this.dataApiService = dataApiService;
        this.programConfigService = programConfigService;
        this.programsMaintService = programsMaintService;
        this.detectChanges = '';
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
                        return [4 /*yield*/, this.getProgramProfiles()];
                    case 2:
                        _a.sent();
                        console.log('ProgramComponent ', this.programs, this.programProfiles);
                        return [2 /*return*/];
                }
            });
        });
    };
    ProgramsComponent.prototype.getProgramProfiles = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, error_1;
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
                        error_1 = _b.sent();
                        console.log('getPrograms error: ', error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProgramsComponent.prototype.getPrograms = function () {
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
    ProgramsComponent.prototype.setClickedRow = function (index) {
        if (this.selectedRow === index || this.selectedRow === null) {
            this.selectedRow = null;
        }
        else {
            this.selectedRow = index;
        }
        // this.detectChanges = index;
    };
    ProgramsComponent.prototype.updateProgramStatus = function (status, program) {
        program.status = status;
    };
    ProgramsComponent.prototype.configureProgram = function (progConfigAction) {
        if (progConfigAction.configType === 'edit') {
            this.editProgram(progConfigAction.progId);
        }
        if (progConfigAction.configType === 'expire') {
            this.expireProgram(progConfigAction.progId);
        }
        if (progConfigAction.configType === 'communications') {
            this.configureProgramCommunications(progConfigAction.progId);
        }
        this.setClickedRow(null);
    };
    ProgramsComponent.prototype.addProgram = function () {
        return __awaiter(this, void 0, void 0, function () {
            var nextProgramId, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        nextProgramId = this.programs.length + 1;
                        _a = this;
                        return [4 /*yield*/, this.programsMaintService.maintainProgramModal('add', nextProgramId)];
                    case 1:
                        _a.detectChanges = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProgramsComponent.prototype.editProgram = function (progId) {
        return __awaiter(this, void 0, void 0, function () {
            var program, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        program = this.findProgram(progId);
                        _a = this;
                        return [4 /*yield*/, this.programsMaintService.maintainProgramModal('edit', null, program)];
                    case 1:
                        _a.detectChanges = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProgramsComponent.prototype.expireProgram = function (progId) {
        return __awaiter(this, void 0, void 0, function () {
            var program, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        program = this.findProgram(progId);
                        _a = this;
                        return [4 /*yield*/, this.programsMaintService.maintainProgramModal('expire', null, program)];
                    case 1:
                        _a.detectChanges = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProgramsComponent.prototype.configureProgramCommunications = function (progId) {
        // invoke service to manage a modal dialog allowing user to
        // configure the program-level communication configurations
        var program = this.findProgram(progId);
        this.programConfigService.configureProgramModal(program);
        this.detectChanges = 'communications';
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
            __WEBPACK_IMPORTED_MODULE_2__services_program_configurations_program_configurations_modal_service__["a" /* ProgramConfigurationsModalService */],
            __WEBPACK_IMPORTED_MODULE_3__services_programs_maintenance_programs_maintenance_modal_service__["a" /* ProgramsMaintenanceModalService */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_program_configurations_program_configurations_modal_service__ = __webpack_require__("../../../../../src/app/programs/services/program-configurations/program-configurations-modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_program_configurations_program_configurations_modal_component__ = __webpack_require__("../../../../../src/app/programs/services/program-configurations/program-configurations-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_programs_maintenance_programs_maintenance_modal_component__ = __webpack_require__("../../../../../src/app/programs/services/programs-maintenance/programs-maintenance-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_programs_maintenance_programs_maintenance_modal_service__ = __webpack_require__("../../../../../src/app/programs/services/programs-maintenance/programs-maintenance-modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
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
                __WEBPACK_IMPORTED_MODULE_9_app_shared_shared_module__["SharedModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__programs_routing_module__["b" /* routedComponents */],
                __WEBPACK_IMPORTED_MODULE_3__program_actions_popover_program_actions_popover_component__["a" /* ProgramActionsPopoverComponent */],
                __WEBPACK_IMPORTED_MODULE_6__services_program_configurations_program_configurations_modal_component__["a" /* ProgramConfigurationsModalComponent */],
                __WEBPACK_IMPORTED_MODULE_7__services_programs_maintenance_programs_maintenance_modal_component__["a" /* ProgramsMaintenanceModalComponent */],
                __WEBPACK_IMPORTED_MODULE_4__program_status_program_status_component__["a" /* ProgramStatusComponent */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_6__services_program_configurations_program_configurations_modal_component__["a" /* ProgramConfigurationsModalComponent */], __WEBPACK_IMPORTED_MODULE_7__services_programs_maintenance_programs_maintenance_modal_component__["a" /* ProgramsMaintenanceModalComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_program_configurations_program_configurations_modal_service__["a" /* ProgramConfigurationsModalService */], __WEBPACK_IMPORTED_MODULE_8__services_programs_maintenance_programs_maintenance_modal_service__["a" /* ProgramsMaintenanceModalService */]],
        })
    ], ProgramsModule);
    return ProgramsModule;
}());



/***/ }),

/***/ "../../../../../src/app/programs/services/program-configurations/program-configurations-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<form #programConfigurationForm=\"ngForm\" \n(ngSubmit)=\"saveProgramConfiguration()\" >\n\n  <div class=\"modal-header bg-gradient-dark\">\n    <h4 class=\"modal-title text-white\">\n      Configure Communication(s)\n      <small>for ProgramId {{program.id}}: {{program.name}}</small>\n    </h4>\n    <button type=\"button\" class=\"close text-white\" aria-label=\"Close\" (click)=\"configureProgramModal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n    \n  <div class=\"modal-body\">\n      <div id=\"configuredPrograms\">\n  \n        <table class=\"table table-responsive table-sm table-striped table-bordered table-hover\">\n          <caption></caption>\n          <thead class=\"bg-gradient-dark text-white\">\n            <tr>\n              <th>ID</th>\n              <th>N<small>ame</small></th>\n              <th>E<small>mail</small></th>\n              <th>IVR</th>\n              <th>SMS</th>\n              <th>M<small>ail</small></th>\n              <th>M<small>obile</small></th>\n              <th>M<small>andatory</small></th>\n              <th>E<small>ffective</small></th>\n              <th>E<small>xpiration</small></th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr appDroppable *ngFor=\"let cc of programConfigurations; let i = index\"\n                [dragOverClass]=\"'drag-target-border'\" [dragHintClass]=\"'drag-hint'\"\n                [dropEnabled]=\"i === lastProgramConfigRow && !cc.communication.id\"\n                \n                (onDrop)=\"communicationDrop($event)\"\n                [class.table-info]=\"i == lastProgramConfigRow\"> \n              \n              <td>\n                <span *ngIf=\"i !== lastProgramConfigRow\" class=\"badge badge-secondary\">{{cc.communication.id}}</span>\n                <span *ngIf=\"i === lastProgramConfigRow && !cc.communication.id\">\n                  <i class=\"fa fa-file-o clickable\" aria-hidden=\"true\" \n                      title=\"Pick Communication to configure for {{program.name}}\"></i></span>\n                <span *ngIf=\"i === lastProgramConfigRow && cc.communication.id\" class=\"badge badge-primary\">{{cc.communication.id}}</span>\n              </td>\n              <td width=\"20%\"><small>{{cc.communication.name}}</small></td>\n              <td><app-select-channel-priority \n                    id=\"chanEmailPriority\" name=\"chanEmailPriority\" \n                    [(ngModel)]=\"cc.chanEmailPriority\"\n                    [actualStaticValue]=\"cc.chanEmailPriority\"\n                    [lastConfigRow]=\"i === lastProgramConfigRow\" ></app-select-channel-priority></td>\n              <td><app-select-channel-priority \n                    id=\"chanIvrPriority\" name=\"chanIvrPriority\" \n                    [(ngModel)]=\"cc.chanIvrPriority\"\n                    [actualStaticValue]=\"cc.chanIvrPriority\"\n                    [lastConfigRow]=\"i === lastProgramConfigRow\" ></app-select-channel-priority></td>\n              <td><app-select-channel-priority \n                    id=\"chanSmsPriority\" name=\"chanSmsPriority\" \n                    [(ngModel)]=\"cc.chanSmsPriority\"\n                    [actualStaticValue]=\"cc.chanSmsPriority\"\n                    [lastConfigRow]=\"i === lastProgramConfigRow\" ></app-select-channel-priority></td>  \n              <td><app-select-channel-priority \n                    id=\"chanMailPriority\" name=\"chanMailPriority\" \n                    [(ngModel)]=\"cc.chanMailPriority\"\n                    [actualStaticValue]=\"cc.chanMailPriority\"\n                    [lastConfigRow]=\"i === lastProgramConfigRow\" ></app-select-channel-priority></td> \n              <td><app-select-channel-priority \n                    id=\"chanMobilePriority\" name=\"chanMobilePriority\" \n                    [(ngModel)]=\"cc.chanMobilePriority\"\n                    [actualStaticValue]=\"cc.chanMobilePriority\"\n                    [lastConfigRow]=\"i === lastProgramConfigRow\" ></app-select-channel-priority></td> \n              <td><app-select-channel-mandatory\n                    id=\"chanMandatory\" name=\"chanMandatory\" \n                    [(ngModel)]=\"cc.chanMandatory\"\n                    [actualStaticValue]=\"cc.chanMandatory\"\n                    [lastConfigRow]=\"i === lastProgramConfigRow\" ></app-select-channel-mandatory></td>\n              <td><app-date-eff-exp\n                    dateType=\"effective\" [commConfig]=\"cc\"\n                    [lastConfigRow]=\"i === lastProgramConfigRow\"\n                    (newDateValue)=\"updateDateValue($event, cc, 'effective')\"></app-date-eff-exp></td>\n              <td><app-date-eff-exp\n                    dateType=\"expiration\" [commConfig]=\"cc\"\n                    [lastConfigRow]=\"i === lastProgramConfigRow\"\n                    (newDateValue)=\"updateDateValue($event, cc, 'expiration')\"></app-date-eff-exp></td>\n            </tr>\n            <tr *ngIf=\"configureState === 'start' || configureState === 'continue'\">\n              <td>\n                <i class=\"fa fa-plus-square-o clickable\" aria-hidden=\"true\" \n                  (click)=\"addProgramConfig()\" title=\"Add New Communication to {{program.name}} Configurations\"></i>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n  \n      </div>\n  \n    </div>\n  \n  <div class=\"modal-footer\">\n    <div class=\"w-100\">\n      <span class=\"float-left\">Some instructional content or condition message goes here: </span>\n      <div class=\"float-right\">\n          <button type=\"submit\" class=\"btn btn-outline-dark\" [disabled]=\"!programConfigurationForm.valid\">Save</button>\n          <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"configureProgramModal.close('Close click')\">Cancel</button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"modal-footer\">\n      <div class=\"w-100\">\n        <app-comm-action-table *ngIf=\"configureState === 'pick' || configureState === 'continue'\" \n          [configureState]=\"configureState\"\n          [communications]=\"communications\"\n          [displayComm]=\"displayComm\"\n          [supressComm]=\"supressComm\"\n          [displayCommStartEmpty]=\"true\"\n          [displayProgram]=\"program.name\"\n          [showCommId]=\"true\"\n          [showCommName]=\"true\"\n          [showCommDesc]=\"true\"\n          [showStatus]=\"false\"\n          [showAction]=\"false\"\n          (selRowOut)=\"setClickedRow($event)\"\n          (selectedCommunication)=\"addProgramConfig($event)\"\n          (commConfigAction)=\"configureCommunication($event)\">\n        </app-comm-action-table>\n      </div>\n    </div>\n  \n</form>   "

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

/***/ "../../../../../src/app/programs/services/programs-maintenance/programs-maintenance-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<form #programMaintenanceForm=\"ngForm\" \n      (ngSubmit)=\"saveProgram()\" >\n\n  <div class=\"modal-header bg-gradient-dark\">\n    <h4 class=\"modal-title text-white\">\n      <span *ngIf=\"configType === 'edit'\">\n        Edit Program <small>{{program.name}} (ProgramId: {{program.id}}) profile</small></span>\n      <span *ngIf=\"configType === 'add'\">\n        Add New Program</span>\n    </h4>\n    <button type=\"button\" class=\"close text-white\" aria-label=\"Close\" (click)=\"maintainProgramModal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n    \n  <div class=\"modal-body\">\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-4\">\n        <label for=\"programName\" class=\"text-white bg-gradient-dark flex-justify-left rounded\">\n          Program Name</label>\n        <input type=\"text\" class=\"form-control\"\n               [(ngModel)]=\"program.name\" id=\"programName\" name=\"name\" required\n               aria-describedby=\"programNameHelp\" placeholder=\"Enter Program Name\">\n        <small id=\"programNameHelp\" class=\"form-text text-muted\">Short Name of the Program.</small>\n      </div>\n      <div class=\"form-group col-md-8\">\n        <label for=\"programDescription\" class=\"text-white bg-gradient-dark flex-justify-left rounded\">\n          Program Description</label>\n        <input type=\"text\" class=\"form-control\" \n               [(ngModel)]=\"program.description\" id=\"programDescription\" name=\"description\" required\n               aria-describedby=\"programDescriptionlHelp\" placeholder=\"Enter Program Description\">\n        <small id=\"programDescriptionlHelp\" class=\"form-text text-muted\">Brief Description of the Program.</small>\n      </div>\n    </div>\n        \n    <span *ngIf=\"programProfiles\">\n      <div class=\"form-row\" *ngFor=\"let profile of programProfiles; let i = index\">\n\n        <div class=\"form-group col-md-1\">\n            <app-select-profile-option \n              id=\"defaultOptIn\" name=\"defaultOptIn\" label=\"Opt In\"\n              [(ngModel)]=\"profile.defaultOptIn\"\n              [staticValue]=\"profile.defaultOptIn\"\n              [showHeader]=\"i === 0\"\n              [staticReadOnly]=\"i === 0 && !newProgram\"\n              [dynamicPicker]=\"i !== 0 || newProgram\"></app-select-profile-option>\n        </div>\n          \n        <div class=\"form-group col-md-1\">\n          <app-select-profile-option \n            id=\"visibleInUi\" name=\"visibleInUi\" label=\"UI\"\n            [(ngModel)]=\"profile.visibleInUi\"\n            [staticValue]=\"profile.visibleInUi\"\n            [showHeader]=\"i === 0\"\n            [staticReadOnly]=\"i === 0 && !newProgram\"\n            [dynamicPicker]=\"i !== 0 || newProgram\"></app-select-profile-option>\n        </div>\n\n        <div class=\"form-group col-md-1\">\n          <app-select-profile-option \n            id=\"chanEmail\" name=\"chanEmail\" label=\"Email\"\n            [(ngModel)]=\"profile.chanEmail\"\n            [staticValue]=\"profile.chanEmail\"\n            [showHeader]=\"i === 0\"\n            [staticReadOnly]=\"i === 0 && !newProgram\"\n            [dynamicPicker]=\"i !== 0 || newProgram\"></app-select-profile-option>\n        </div>\n\n        <div class=\"form-group col-md-1\">\n          <app-select-profile-option \n            id=\"chanIvr\" name=\"chanIvr\" label=\"IVR\"\n            [(ngModel)]=\"profile.chanIvr\"\n            [staticValue]=\"profile.chanIvr\"\n            [showHeader]=\"i === 0\"\n            [staticReadOnly]=\"i === 0 && !newProgram\"\n            [dynamicPicker]=\"i !== 0 || newProgram\"></app-select-profile-option>\n        </div>\n\n        <div class=\"form-group col-md-1\">\n          <app-select-profile-option \n            id=\"chanSms\" name=\"chanSms\" label=\"SMS\"\n            [(ngModel)]=\"profile.chanSms\"\n            [staticValue]=\"profile.chanSms\"\n            [showHeader]=\"i === 0\"\n            [staticReadOnly]=\"i === 0 && !newProgram\"\n            [dynamicPicker]=\"i !== 0 || newProgram\"></app-select-profile-option>\n        </div>\n\n        <div class=\"form-group col-md-1\">\n          <app-select-profile-option \n            id=\"chanSecure\" name=\"chanSecure\" label=\"Secure\"\n            [(ngModel)]=\"profile.chanSecure\"\n            [staticValue]=\"profile.chanSecure\"\n            [showHeader]=\"i === 0\"\n            [staticReadOnly]=\"i === 0 && !newProgram\"\n            [dynamicPicker]=\"i !== 0 || newProgram\"></app-select-profile-option>\n        </div>\n\n        <div class=\"form-group col-md-1\">\n          <app-select-profile-option \n            id=\"chanMail\" name=\"chanMail\" label=\"Mail\"\n            [(ngModel)]=\"profile.chanMail\"\n            [staticValue]=\"profile.chanMail\"\n            [showHeader]=\"i === 0\"\n            [staticReadOnly]=\"i === 0 && !newProgram\"\n            [dynamicPicker]=\"i !== 0 || newProgram\"></app-select-profile-option>\n        </div>\n\n        <div class=\"form-group col-md-1\">\n          <app-select-profile-option \n            id=\"chanMobile\" name=\"chanMobile\" label=\"Mobile\"\n            [(ngModel)]=\"profile.chanMobile\"\n            [staticValue]=\"profile.chanMobile\"\n            [showHeader]=\"i === 0\"\n            [staticReadOnly]=\"i === 0 && !newProgram\"\n            [dynamicPicker]=\"i !== 0 || newProgram\"></app-select-profile-option>\n        </div>\n\n        <!-- move these into a component, the current eff/exp component only works on configs -->\n        <div class=\"form-group col-md-2\">\n          <span *ngIf=\"i === 0 && !newProgram\">\n            <label for=\"effective\" class=\"text-white bg-gradient-dark flex-justify-center rounded\">\n                Effective</label>\n            <!-- the effective date of the current effective row -->\n            <input class=\"form-control form-control-sm date-eff-exp-input\" value=\"{{profile.effective}}\" readonly>\n          </span>\n          <span *ngIf=\"newProgram || i !== 0\">\n            <label for=\"effective\" class=\"text-white bg-gradient-dark flex-justify-center rounded\"\n              [ngClass]=\"{'sr-only': !newProgram}\">\n              Effective</label>\n            <!-- set the effective date for the new row -->\n            <app-date-picker-popup [dateValue]=\"profile.effective\"\n              (newDateValue)=\"updateDateValue($event, profile, 'effective')\"></app-date-picker-popup>           \n          </span>\n        </div>\n\n        <div class=\"form-group col-md-2\">\n          <span *ngIf=\"i === 0 && expireProgram\">\n            <label for=\"expiration\" class=\"text-white bg-gradient-dark flex-justify-center rounded\">\n              Expiration</label>\n            <!-- the expiration date of the current/previous row -->\n            <app-date-picker-popup [dateValue]=\"profile.expiration\"\n              (newDateValue)=\"updateDateValue($event, profile, 'expiration')\"></app-date-picker-popup> \n          </span>\n          <span *ngIf=\"i === 0 && !expireProgram\">\n            <label for=\"expiration\" class=\"text-white bg-gradient-dark flex-justify-center rounded\">\n              Expiration</label>\n            <!-- the expiration date of the current/previous row -->\n            <input class=\"form-control form-control-sm date-eff-exp-input\" value=\"{{profile.expiration}}\" readonly\n              (click)=\"changeProfile(profile)\" >\n          </span>\n          <span *ngIf=\"i !== 0\">\n            <label for=\"expiration\" class=\"text-white bg-gradient-dark flex-justify-center rounded sr-only\">\n              Expiration</label>\n            <!-- the expiration date of the current/previous row -->\n            <input class=\"form-control form-control-sm date-eff-exp-input\" value=\"{{profile.expiration}}\" readonly>\n          </span>\n        </div>\n\n        <div class=\"form-row\" *ngIf=\"addProfile\">\n          <div class=\"form-group col-md-1\">\n            <i class=\"fa fa-plus-square-o clickable\" aria-hidden=\"true\" \n              (click)=\"changeProfile(profile)\" title=\"Modify Program Profile\"></i>\n          </div>\n        </div>\n\n      </div>\n    </span>\n  </div>\n    \n  <div class=\"modal-footer\">\n    <div class=\"w-100\">\n      <span class=\"float-left\">Some instructional content or condition message goes here: </span>\n      <div class=\"float-right\">\n          <button type=\"submit\" class=\"btn btn-outline-dark\" [disabled]=\"!programMaintenanceForm.valid\">Save</button>\n          <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"maintainProgramModal.close('Close click')\">Cancel</button>\n      </div>\n    </div>\n  </div>\n\n</form>      "

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramsMaintenanceModalComponent; });
/* unused harmony export ProgramsMaintModalResult */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_model_program__ = __webpack_require__("../../../../../src/app/shared/model/program.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_model_program_profile__ = __webpack_require__("../../../../../src/app/shared/model/program-profile.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProgramsMaintenanceModalComponent = (function () {
    function ProgramsMaintenanceModalComponent(maintainProgramModal) {
        this.maintainProgramModal = maintainProgramModal;
        this.configType = '';
        this.program = new __WEBPACK_IMPORTED_MODULE_2_app_shared_model_program__["a" /* Program */](); // just becasue service inits whenever
        this.programProfiles = [];
        this.SAVESUCCESS = 'Close on succesful save';
        this.UNEXPIRED = '9999-12-31';
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
        console.log(this.program);
        this.tomorrow.setDate(this.today.getDate() + 1);
        if (this.configType === 'add') {
            this.programProfiles = [new __WEBPACK_IMPORTED_MODULE_3_app_shared_model_program_profile__["a" /* ProgramProfile */](this.program.id)];
            this.programProfiles[0].effective =
                this.tomorrow.getFullYear() + '-' +
                    (this.tomorrow.getMonth() + 1) + '-' +
                    this.tomorrow.getDate();
            this.programProfiles[0].expiration = this.UNEXPIRED;
            this.newProgram = true;
        }
        if (this.configType === 'edit') {
            // editing a program actually means creating a new row from
            // the current row, setting expiration on current
            // show only the current effective Profile row
            this.programProfiles = [];
            this.programProfiles = this.getCurrentEffectiveProfile(this.program);
            this.addProfile = true;
        }
        if (this.configType === 'expire') {
            this.programProfiles = [];
            this.programProfiles = this.getCurrentEffectiveProfile(this.program);
            this.programProfiles[0].expiration =
                this.tomorrow.getFullYear() + '-' +
                    (this.tomorrow.getMonth() + 1) + '-' +
                    this.tomorrow.getDate();
            this.expireProgram = true;
        }
    };
    ProgramsMaintenanceModalComponent.prototype.getCurrentEffectiveProfile = function (program) {
        var _this = this;
        return this.program.programProfile.filter(function (pp) {
            if (pp.expiration === _this.UNEXPIRED) {
                return true;
            }
        });
    };
    ProgramsMaintenanceModalComponent.prototype.changeProfile = function (currProfile) {
        if (this.addProfile) {
            // expire the current profile row
            currProfile.expiration =
                this.today.getFullYear() + '-' +
                    (this.today.getMonth() + 1) + '-' +
                    this.today.getDate();
            // insert a new profile row with tommorow effective
            var newProfile = new __WEBPACK_IMPORTED_MODULE_3_app_shared_model_program_profile__["a" /* ProgramProfile */](this.program.id, currProfile);
            newProfile.effective =
                this.tomorrow.getFullYear() + '-' +
                    (this.tomorrow.getMonth() + 1) + '-' +
                    this.tomorrow.getDate();
            newProfile.expiration = this.UNEXPIRED;
            this.programProfiles.push(newProfile);
        }
        this.addProfile = false;
    };
    ProgramsMaintenanceModalComponent.prototype.saveProgram = function () {
        var modalResult = new ProgramsMaintModalResult();
        if (this.configType === 'add') {
            if (this.programProfiles.length === 1 &&
                this.programProfiles[0].expiration === this.UNEXPIRED) {
                modalResult.insertProgramProfile = this.programProfiles[0];
            }
            modalResult.insertProgram = this.program;
        }
        if (this.configType === 'edit') {
            // if profile changed (added), first update previous, add new
            // then go ahead and update the program
            if (this.programProfiles.length === 2) {
                console.log(this.programProfiles);
                console.log(this.program);
                if (this.programProfiles[0].expiration !== this.UNEXPIRED) {
                    modalResult.updateProgramProfile = this.programProfiles[0];
                } // else something went wrong, report error, abort save
                if (this.programProfiles[1].expiration === this.UNEXPIRED) {
                    modalResult.insertProgramProfile = this.programProfiles[1];
                    this.program.programProfile.push(this.programProfiles[1]);
                } // else something went wrong, report error, abort save
                modalResult.updateProgram = this.program;
            }
        }
        if (this.configType === 'expire') {
            if (this.programProfiles.length === 1 &&
                this.programProfiles[0].expiration !== this.UNEXPIRED) {
                modalResult.updateProgramProfile = this.programProfiles[0];
            } // else something went wrong, report error, abort save
            modalResult.updateProgram = this.program;
        }
        this.maintainProgramModal.close({ resultTxt: this.SAVESUCCESS, modalResult: modalResult });
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
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_app_shared_model_program__["a" /* Program */])
    ], ProgramsMaintenanceModalComponent.prototype, "program", void 0);
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

var ProgramsMaintModalResult = (function () {
    function ProgramsMaintModalResult() {
    }
    return ProgramsMaintModalResult;
}());



/***/ }),

/***/ "../../../../../src/app/programs/services/programs-maintenance/programs-maintenance-modal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramsMaintenanceModalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_model_program__ = __webpack_require__("../../../../../src/app/shared/model/program.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_model_program_profile__ = __webpack_require__("../../../../../src/app/shared/model/program-profile.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__programs_maintenance_modal_component__ = __webpack_require__("../../../../../src/app/programs/services/programs-maintenance/programs-maintenance-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_shared_services_data_api_service__ = __webpack_require__("../../../../../src/app/shared/services/data-api.service.ts");
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
    ProgramsMaintenanceModalService.prototype.maintainProgramModal = function (configType, nextId, program) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var modalOpts, modalRef, modalComp, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        modalOpts = {
                            size: 'lg'
                        };
                        modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_4__programs_maintenance_modal_component__["a" /* ProgramsMaintenanceModalComponent */], modalOpts);
                        modalComp = modalRef.componentInstance;
                        modalComp.configType = configType;
                        if (configType === 'add' && nextId) {
                            modalComp.program = new __WEBPACK_IMPORTED_MODULE_2_app_shared_model_program__["a" /* Program */](nextId, '');
                        }
                        if (!(configType === 'edit' || configType === 'expire')) return [3 /*break*/, 2];
                        modalComp.program = program;
                        if (!(!program.programProfile || program.programProfile.length === 0)) return [3 /*break*/, 2];
                        // hey, it could happen!
                        _a = program;
                        return [4 /*yield*/, this.findProgramProfiles(program)];
                    case 1:
                        // hey, it could happen!
                        _a.programProfile = _b.sent();
                        console.log(program);
                        if (program.programProfile.length === 0) {
                            // but if it still doesn't have one (shouldn't happen)
                            program.programProfile = [new __WEBPACK_IMPORTED_MODULE_3_app_shared_model_program_profile__["a" /* ProgramProfile */](program.id)];
                            program.programProfile[0].expiration = '9999-12-31';
                        }
                        _b.label = 2;
                    case 2:
                        modalComp.modalInit();
                        // so up until now using @JsonIdentityReference(alwaysAsId = true) on related entites in the JPA
                        // so the json coming back doesn't have full related objects, just id references
                        // but with Program/ProgramProfile didn't so code is dealing with responses that include the Profile
                        // and the requests back to store can be Program with Profile inside
                        // or, separate requests for the Profiles
                        // but not both -- have to decide to stick with the original approach, which works fine for
                        // everything else, or do this differently by saving the Program entirely which
                        // then can include additions and updates to Profile related entities
                        modalRef.result.then(function (result) {
                            if (result.resultTxt === modalComp.SAVESUCCESS) {
                                console.log('configureProgramModal result: ', result.modalResult);
                                _this.closeResult = "Closed with: " + result.resultTxt;
                                if (result.modalResult) {
                                    var modalResult = result.modalResult;
                                    // if (modalResult.updateProgramProfile) {
                                    //   this.updateProgramProfile(modalResult.updateProgramProfile);
                                    // }
                                    // if (modalResult.insertProgramProfile) {
                                    //   this.addProgramProfile(modalResult.insertProgramProfile);
                                    // }
                                    if (configType === 'add' && modalResult.insertProgram) {
                                        // except for a new add, the Profile creates an unresolved forward reference
                                        // the Program must be saved first, then the Profile will reference a valid entity
                                        // this.addProgram(modalResult.insertProgram);
                                        // this.addProgramProfile(modalResult.insertProgramProfile);
                                        _this.addProgramAndProfile(modalResult.insertProgram, modalResult.insertProgramProfile);
                                    }
                                    if (configType === 'edit' && modalResult.updateProgram) {
                                        _this.updateProgram(modalResult.updateProgram);
                                    }
                                    if (configType === 'expire' && modalResult.updateProgram) {
                                        _this.updateProgram(modalResult.updateProgram);
                                    }
                                    return configType;
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
    ProgramsMaintenanceModalService.prototype.addProgramAndProfile = function (program, programProfile) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, pp, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        _a = this;
                        return [4 /*yield*/, this.dataApiService.createProgram(program)];
                    case 1:
                        _a.program = _b.sent();
                        return [4 /*yield*/, this.dataApiService.createProgramProfile(programProfile)];
                    case 2:
                        pp = _b.sent();
                        this.program.programProfile = [pp];
                        console.log('addProgramAndProfile:', program, this.program);
                        return [2 /*return*/, this.program];
                    case 3:
                        error_1 = _b.sent();
                        console.log('addProgramAndProfile error: ', error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProgramsMaintenanceModalService.prototype.addProgramProfile = function (programProfile) {
        return __awaiter(this, void 0, void 0, function () {
            var error_2;
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
                        error_2 = _a.sent();
                        console.log('addProgramProfile error: ', error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProgramsMaintenanceModalService.prototype.addProgram = function (program) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, error_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.dataApiService.createProgram(program)];
                    case 1:
                        _a.program = _b.sent();
                        console.log('addProgram:', program, this.program);
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _b.sent();
                        console.log('addProgram error: ', error_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProgramsMaintenanceModalService.prototype.updateProgram = function (program) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, error_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.dataApiService.updateProgram(program)];
                    case 1:
                        _a.program = _b.sent();
                        console.log('updateProgram:', program, this.program);
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _b.sent();
                        console.log('updateProgram error: ', error_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProgramsMaintenanceModalService.prototype.updateProgramProfile = function (programProfile) {
        return __awaiter(this, void 0, void 0, function () {
            var error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.dataApiService.updateProgramProfile(programProfile)];
                    case 1:
                        _a.sent();
                        console.log('updateProgramProfile:', programProfile, this.programProfiles);
                        return [3 /*break*/, 3];
                    case 2:
                        error_5 = _a.sent();
                        console.log('updateProgramProfile error: ', error_5);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProgramsMaintenanceModalService.prototype.getProgramProfiles = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, error_6;
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
                        error_6 = _b.sent();
                        console.log('getPrograms error: ', error_6);
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
                                        // pc.program = selectedProgram;
                                        // if (typeof(pc.communication) === 'number') {
                                        //   pc.communication = this.findCommunication(<number>pc.communication);
                                        // }
                                        return true;
                                    }
                                    else {
                                        return false;
                                    }
                                } // else if (pp.program.id === selectedProgram.id) {
                                //   if (typeof(pc.communication) === 'number') {
                                //     pc.communication = this.findCommunication(<number>pc.communication);
                                //   }
                                //   return true;
                                // }
                            })];
                }
            });
        });
    };
    ProgramsMaintenanceModalService.prototype.getDismissReason = function (reason) {
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
    ProgramsMaintenanceModalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_app_shared_services_data_api_service__["a" /* DataApiService */],
            __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]])
    ], ProgramsMaintenanceModalService);
    return ProgramsMaintenanceModalService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/model/program-profile.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramProfile; });
var ProgramProfile = (function () {
    function ProgramProfile(programId, programProfile) {
        if (programProfile) {
            this.program = programId;
            this.defaultOptIn = programProfile.defaultOptIn;
            this.visibleInUi = programProfile.visibleInUi;
            this.chanEmail = programProfile.chanEmail;
            this.chanIvr = programProfile.chanIvr;
            this.chanSms = programProfile.chanSms;
            this.chanSecure = programProfile.chanSecure;
            this.chanMail = programProfile.chanMail;
            this.chanMobile = programProfile.chanMobile;
        }
        else {
            this.program = programId;
            this.defaultOptIn = false;
            this.visibleInUi = false;
            this.chanEmail = false;
            this.chanIvr = false;
            this.chanSms = false;
            this.chanSecure = false;
            this.chanMail = false;
            this.chanMobile = false;
        }
    }
    ProgramProfile.prototype.clone = function () {
        return new ProgramProfile(this.program, this);
    };
    return ProgramProfile;
}());



/***/ }),

/***/ "../../../../../src/app/shared/model/program.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Program; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ProgramConfigAction; });
// export class Program implements IProgramConfig {
var Program = (function () {
    function Program(id, name, description, programProfile, programConfiguration) {
        if (id === void 0) { id = 0; }
        if (name === void 0) { name = ''; }
        var emptyNum = [];
        this.id = id;
        this.name = name;
        this.description = (description) ? description : '';
        this.programProfile = (programProfile) ? programProfile : [];
        this.programConfiguration = (programConfiguration) ? programConfiguration : emptyNum;
    }
    Program.prototype.clone = function () {
        return new Program(this.id, this.name, this.description, this.programProfile, this.programConfiguration);
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