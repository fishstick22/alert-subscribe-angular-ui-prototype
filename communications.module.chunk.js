webpackJsonp(["communications.module"],{

/***/ "../../../../../src/app/communications/communications-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routedComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunicationsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__communications_component__ = __webpack_require__("../../../../../src/app/communications/communications.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__communications_component__["a" /* CommunicationsComponent */] }
];
var routedComponents = [__WEBPACK_IMPORTED_MODULE_2__communications_component__["a" /* CommunicationsComponent */]];
var CommunicationsRoutingModule = (function () {
    function CommunicationsRoutingModule() {
    }
    CommunicationsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], CommunicationsRoutingModule);
    return CommunicationsRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/communications/communications.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>Manage Communications</h4>\r\n<app-comm-action-table \r\n  [communications]=\"communications\"\r\n  [displayComm]=\"displayComm\"\r\n  [displayCommStartEmpty]=\"false\"\r\n  [showCommId]=\"true\"\r\n  [showCommName]=\"true\"\r\n  [showCommDesc]=\"true\"\r\n  [showStatus]=\"true\"\r\n  [showAction]=\"true\"\r\n  (selRowOut)=\"setClickedRow($event)\"\r\n  (commConfigAction)=\"configureCommunication($event)\">\r\n</app-comm-action-table>\r\n<!-- TODO this can probably get moved into the component -->"

/***/ }),

/***/ "../../../../../src/app/communications/communications.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/communications/communications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunicationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_services_data_api_service__ = __webpack_require__("../../../../../src/app/shared/services/data-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_program_configurations_prog_configs_by_comm_modal_service__ = __webpack_require__("../../../../../src/app/communications/services/program-configurations/prog-configs-by-comm-modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_client_configurations_client_configs_by_comm_modal_service__ = __webpack_require__("../../../../../src/app/communications/services/client-configurations/client-configs-by-comm-modal.service.ts");
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




var CommunicationsComponent = (function () {
    function CommunicationsComponent(dataApiService, programConfigurationService, clientConfigsByCommModalService) {
        this.dataApiService = dataApiService;
        this.programConfigurationService = programConfigurationService;
        this.clientConfigsByCommModalService = clientConfigsByCommModalService;
    }
    CommunicationsComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCommunications()];
                    case 1:
                        _a.sent();
                        this.displayCommStartEmpty = false;
                        this.displayComm = this.communications;
                        console.log('CommunicationComponent ngOnInit', this.communications);
                        return [2 /*return*/];
                }
            });
        });
    };
    CommunicationsComponent.prototype.configureCommunication = function (commConfigAction) {
        if (commConfigAction.configType === 'clients') {
            this.configureCommunicationForClient(commConfigAction.commId);
        }
        if (commConfigAction.configType === 'program') {
            this.configureCommunicationForProgram(commConfigAction.commId);
        }
        this.setClickedRow(null);
    };
    CommunicationsComponent.prototype.configureCommunicationForClient = function (commId) {
        // invoke service to manage a modal dialog allowing user to
        // configure the client-level communication configurations
        var communication = this.findCommunication(commId);
        this.clientConfigsByCommModalService.configureClientModal(communication);
    };
    CommunicationsComponent.prototype.configureCommunicationForProgram = function (commId) {
        // invoke service to manage a modal dialog allowing user to
        // configure the program-level communication configurations
        var communication = this.findCommunication(commId);
        this.programConfigurationService.configureProgramModal(communication);
    };
    CommunicationsComponent.prototype.findCommunication = function (id) {
        return this.communications.find(function (c) { return c.id === id; });
    };
    CommunicationsComponent.prototype.getCommunications = function () {
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
    CommunicationsComponent.prototype.setClickedRow = function (index) {
        this.selectedRow = index;
    };
    CommunicationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-communications',
            template: __webpack_require__("../../../../../src/app/communications/communications.component.html"),
            styles: [__webpack_require__("../../../../../src/app/communications/communications.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_shared_services_data_api_service__["a" /* DataApiService */],
            __WEBPACK_IMPORTED_MODULE_2__services_program_configurations_prog_configs_by_comm_modal_service__["a" /* ProgramConfigsByCommModalService */],
            __WEBPACK_IMPORTED_MODULE_3__services_client_configurations_client_configs_by_comm_modal_service__["a" /* ClientConfigsByCommModalService */]])
    ], CommunicationsComponent);
    return CommunicationsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/communications/communications.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicationsModule", function() { return CommunicationsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__communications_routing_module__ = __webpack_require__("../../../../../src/app/communications/communications-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_client_configurations_client_configs_by_comm_modal_component__ = __webpack_require__("../../../../../src/app/communications/services/client-configurations/client-configs-by-comm-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_program_configurations_prog_configs_by_comm_modal_component__ = __webpack_require__("../../../../../src/app/communications/services/program-configurations/prog-configs-by-comm-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_client_configurations_client_configs_by_comm_modal_service__ = __webpack_require__("../../../../../src/app/communications/services/client-configurations/client-configs-by-comm-modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_program_configurations_prog_configs_by_comm_modal_service__ = __webpack_require__("../../../../../src/app/communications/services/program-configurations/prog-configs-by-comm-modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Communications feature Module
//

// import { CommonModule } from '@angular/common';





// shared

var CommunicationsModule = (function () {
    function CommunicationsModule() {
    }
    CommunicationsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                /// CommonModule, // gets provided by shared module
                __WEBPACK_IMPORTED_MODULE_1__communications_routing_module__["a" /* CommunicationsRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6_app_shared_shared_module__["SharedModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__communications_routing_module__["b" /* routedComponents */],
                __WEBPACK_IMPORTED_MODULE_2__services_client_configurations_client_configs_by_comm_modal_component__["a" /* ClientConfigsByCommModalComponent */],
                __WEBPACK_IMPORTED_MODULE_3__services_program_configurations_prog_configs_by_comm_modal_component__["a" /* ProgramConfigsByCommModalComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__services_client_configurations_client_configs_by_comm_modal_component__["a" /* ClientConfigsByCommModalComponent */],
                __WEBPACK_IMPORTED_MODULE_3__services_program_configurations_prog_configs_by_comm_modal_component__["a" /* ProgramConfigsByCommModalComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__services_client_configurations_client_configs_by_comm_modal_service__["a" /* ClientConfigsByCommModalService */],
                __WEBPACK_IMPORTED_MODULE_5__services_program_configurations_prog_configs_by_comm_modal_service__["a" /* ProgramConfigsByCommModalService */]
            ]
        })
    ], CommunicationsModule);
    return CommunicationsModule;
}());



/***/ }),

/***/ "../../../../../src/app/communications/services/client-configurations/client-configs-by-comm-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<form #clientConfigurationByCommunicationForm=\"ngForm\" \r\n(ngSubmit)=\"saveClientConfiguration()\" >\r\n\r\n  <div class=\"modal-header bg-gradient-dark\">\r\n    <h4 class=\"modal-title text-white\">\r\n      Configure Clients(s)\r\n      <small>for CommId {{communication.id}}: {{communication.name}}</small>\r\n    </h4>\r\n    <button type=\"button\" class=\"close text-white\" aria-label=\"Close\" (click)=\"configureClientModal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n    \r\n  <div class=\"modal-body\">\r\n    <div id=\"configuredClients\">\r\n        <table class=\"table table-responsive table-sm table-striped table-bordered table-hover\">\r\n            <caption></caption>\r\n            <thead class=\"bg-gradient-dark text-white\">\r\n              <tr>\r\n                <th>ID</th>\r\n                <th>C<small>ode</small></th>\r\n                <th>N<small>ame</small></th>\r\n                <th>E<small>mail</small></th>\r\n                <th>IVR</th>\r\n                <th>SMS</th>\r\n                <th>M<small>ail</small></th>\r\n                <th>M<small>obile</small></th>\r\n                <th>M<small>andatory</small></th>\r\n                <th>E<small>ffective</small></th>\r\n                <th>E<small>xpiration</small></th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr appDroppable *ngFor=\"let cc of clientConfigurations; let i = index\"\r\n                  [dragOverClass]=\"'drag-target-border'\" [dragHintClass]=\"'drag-hint'\"\r\n                  [dropEnabled]=\"i === lastClientConfigRow && !cc.client.id\"\r\n                  \r\n                  (onDrop)=\"clientDrop($event)\"\r\n                  [class.table-info]=\"i == lastClientConfigRow\"> \r\n                \r\n                <td>\r\n                  <span *ngIf=\"i !== lastClientConfigRow\" class=\"badge badge-secondary\">{{cc.client.id}}</span>\r\n                  <span *ngIf=\"i === lastClientConfigRow && !cc.client.id\">\r\n                    <i class=\"fa fa-file-o clickable\" aria-hidden=\"true\" \r\n                       title=\"New Client configuration for {{communication.name}}\"></i></span>\r\n                  <span *ngIf=\"i === lastClientConfigRow && cc.client.id\" class=\"badge badge-primary\">{{cc.client.id}}</span>\r\n                </td>\r\n                <td><span >{{cc.client.code}}</span></td>\r\n                <td width=\"18%\"><span >{{cc.client.name}}</span></td>\r\n                <td><app-select-channel-priority \r\n                      id=\"chanEmailPriority\" name=\"chanEmailPriority\" \r\n                      [(ngModel)]=\"cc.chanEmailPriority\"\r\n                      [actualStaticValue]=\"cc.chanEmailPriority\"\r\n                      [lastConfigRow]=\"i === lastClientConfigRow\" ></app-select-channel-priority></td>\r\n                <td><app-select-channel-priority \r\n                      id=\"chanIvrPriority\" name=\"chanIvrPriority\" \r\n                      [(ngModel)]=\"cc.chanIvrPriority\"\r\n                      [actualStaticValue]=\"cc.chanIvrPriority\"\r\n                      [lastConfigRow]=\"i === lastClientConfigRow\" ></app-select-channel-priority></td>\r\n                <td><app-select-channel-priority \r\n                      id=\"chanSmsPriority\" name=\"chanSmsPriority\" \r\n                      [(ngModel)]=\"cc.chanSmsPriority\"\r\n                      [actualStaticValue]=\"cc.chanSmsPriority\"\r\n                      [lastConfigRow]=\"i === lastClientConfigRow\" ></app-select-channel-priority></td>  \r\n                <td><app-select-channel-priority \r\n                      id=\"chanMailPriority\" name=\"chanMailPriority\" \r\n                      [(ngModel)]=\"cc.chanMailPriority\"\r\n                      [actualStaticValue]=\"cc.chanMailPriority\"\r\n                      [lastConfigRow]=\"i === lastClientConfigRow\" ></app-select-channel-priority></td> \r\n                <td><app-select-channel-priority \r\n                      id=\"chanMobilePriority\" name=\"chanMobilePriority\" \r\n                      [(ngModel)]=\"cc.chanMobilePriority\"\r\n                      [actualStaticValue]=\"cc.chanMobilePriority\"\r\n                      [lastConfigRow]=\"i === lastClientConfigRow\" ></app-select-channel-priority></td> \r\n                <td><app-select-channel-mandatory\r\n                      id=\"chanMandatory\" name=\"chanMandatory\" \r\n                      [(ngModel)]=\"cc.chanMandatory\"\r\n                      [actualStaticValue]=\"cc.chanMandatory\"\r\n                      [lastConfigRow]=\"i === lastClientConfigRow\" ></app-select-channel-mandatory></td>\r\n                <td><app-date-eff-exp\r\n                      dateType=\"effective\" [commConfig]=\"cc\"\r\n                      [lastConfigRow]=\"i === lastClientConfigRow\"\r\n                      (newDateValue)=\"updateDateValue($event, cc, 'effective')\"></app-date-eff-exp></td>\r\n                <td><app-date-eff-exp\r\n                      dateType=\"expiration\" [commConfig]=\"cc\"\r\n                      [lastConfigRow]=\"i === lastClientConfigRow\"\r\n                      (newDateValue)=\"updateDateValue($event, cc, 'expiration')\"></app-date-eff-exp></td>\r\n              </tr>\r\n              <tr *ngIf=\"configureState === 'start' || configureState === 'continue'\">\r\n                <td>\r\n                  <i class=\"fa fa-plus-square-o clickable\" aria-hidden=\"true\" \r\n                    (click)=\"addClientConfig()\" title=\"Add New Client Configuration to {{communication.name}}\"></i>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n    </div><!--configuredClients-->  \r\n  </div>\r\n      \r\n  <div class=\"modal-footer\">\r\n    <div class=\"w-100\">\r\n      <span class=\"float-left\">Some instructional content or condition message goes here: </span>\r\n      <div class=\"float-right\">\r\n          <button type=\"submit\" class=\"btn btn-outline-dark\" [disabled]=\"!clientConfigurationByCommunicationForm.valid\">Save</button>\r\n          <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"configureClientModal.close('Close click')\">Cancel</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"modal-footer\">\r\n    <div id=ActionTable>\r\n      <app-client-action-table  *ngIf=\"configureState === 'pick' || configureState === 'continue'\"\r\n        [configureState]=\"configureState\"  \r\n        [clients]=\"clients\"\r\n        [displayClient]=\"displayClient\"\r\n        [supressClient]=\"supressClient\"\r\n        [displayClientStartEmpty]=\"displayClientStartEmpty\"\r\n        [displayCommunication]=\"communication.name\"\r\n        [showClientId]=\"true\"\r\n        [showClientCode]=\"true\"\r\n        [showClientName]=\"true\"\r\n        [showStatus]=\"false\"\r\n        [showAction]=\"false\"\r\n        (selRowOut)=\"setClickedRow($event)\"\r\n        (clientConfigAction)=\"configureClient($event)\"\r\n        (selectedClient)=\"addClientConfig($event)\">\r\n      </app-client-action-table>\r\n    </div>\r\n  </div>\r\n</form> "

/***/ }),

/***/ "../../../../../src/app/communications/services/client-configurations/client-configs-by-comm-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.scroll-list {\n  overflow: auto;\n  max-height: 70vh; }\n\n.drag-over {\n  border: #ff525b dashed 2px; }\n\n.drag-hint {\n  border: #ffc100 dashed 2px; }\n\n.drag-target-border {\n  border: #00bfff dashed 2px; }\n\n.drag-target-border-green {\n  border: #3c763d dashed 2px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/communications/services/client-configurations/client-configs-by-comm-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientConfigsByCommModalComponent; });
/* unused harmony export ClientConfigModalResult */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_model_client__ = __webpack_require__("../../../../../src/app/shared/model/client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_model_client_configuration__ = __webpack_require__("../../../../../src/app/shared/model/client-configuration.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_model_communication__ = __webpack_require__("../../../../../src/app/shared/model/communication.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ClientConfigsByCommModalComponent = (function () {
    function ClientConfigsByCommModalComponent(configureClientModal) {
        this.configureClientModal = configureClientModal;
        this.SAVESUCCESS = 'Close on succesful save';
        this.clientDropEnabled = false;
        this.today = new Date();
        this.tomorrow = new Date();
    }
    ClientConfigsByCommModalComponent.prototype.ngOnInit = function () {
    };
    ClientConfigsByCommModalComponent.prototype.modalInit = function () {
        console.log('ClientConfigsByCommModalComponent init: ');
        console.log(this.communication);
        // get the list of clients to populate the dropdown (covered in @Input() clients: Client[];)
        // check if there are progConfig already (for now just checking for first one, have to check for eff dates)
        this.displayClientStartEmpty = true;
        this.displayClient = [];
        this.newClientConfigs = [];
        this.tomorrow.setDate(this.today.getDate() + 1);
        this.configureState = 'start';
        this.supressClient = this.findExistingConfiguredClients();
    };
    ClientConfigsByCommModalComponent.prototype.addClientConfig = function (client) {
        if (this.newClientConfig && this.configureState === 'pick') {
            this.newClientConfig.client = client;
            this.supressClient.push(client.id);
            this.clientDropEnabled = false;
        }
        if (this.configureState === 'start' || this.configureState === 'continue') {
            // first time through
            this.lastClientConfigRow = this.clientConfigurations.length;
            if (this.lastClientConfigRow === 0) {
                this.newClientConfig = new __WEBPACK_IMPORTED_MODULE_3_app_shared_model_client_configuration__["a" /* ClientConfiguration */]();
                this.newClientConfig.effective =
                    this.tomorrow.getFullYear() + '-' +
                        (this.tomorrow.getMonth() + 1) + '-' +
                        this.tomorrow.getDate();
            }
            else {
                // clone setting from previous config row
                this.prevClientConfig = this.clientConfigurations[this.lastClientConfigRow - 1];
                this.newClientConfig = new __WEBPACK_IMPORTED_MODULE_3_app_shared_model_client_configuration__["a" /* ClientConfiguration */](this.prevClientConfig);
                this.newClientConfig.effective = this.prevClientConfig.effective;
            }
            this.clientConfigurations[this.clientConfigurations.length] = this.newClientConfig;
            this.newClientConfigs[this.newClientConfigs.length] = this.newClientConfig;
            this.newClientConfig.expiration = '9999-12-31';
            this.newClientConfig.communication = this.communication;
            this.newClientConfig.client = new __WEBPACK_IMPORTED_MODULE_2_app_shared_model_client__["a" /* Client */]();
            this.configureState = 'pick';
            this.clientDropEnabled = true;
        }
        else {
            if (this.newClientConfig && this.configureState === 'pick') {
                this.configureState = 'continue';
            }
        }
    };
    ClientConfigsByCommModalComponent.prototype.clientDrop = function (dragEvent) {
        console.log('ClientConfigComponent clientDrop: ', dragEvent);
        if (dragEvent.dragData && typeof (dragEvent.dragData.id) === 'number') {
            this.addClientConfig(this.findClient(dragEvent.dragData.id));
        }
    };
    ClientConfigsByCommModalComponent.prototype.findClient = function (id) {
        return this.clients.find(function (c) { return c.id === id; });
    };
    ClientConfigsByCommModalComponent.prototype.findExistingConfiguredClients = function () {
        var existing = [];
        for (var i = 0; i < this.clientConfigurations.length; i++) {
            existing.push(this.clientConfigurations[i].client.id);
        }
        return existing;
    };
    ClientConfigsByCommModalComponent.prototype.saveClientConfiguration = function () {
        console.log('ClientConfigComponent save');
        console.log(this.newClientConfig, ' communication id: ', this.communication);
        var modalResult = {
            newClientConfigs: this.newClientConfigs
        };
        this.configureClientModal.close({ resultTxt: this.SAVESUCCESS, modalResult: modalResult });
    };
    ClientConfigsByCommModalComponent.prototype.updateDateValue = function (newDateValue, cc, dateType) {
        console.log('ClientConfigComponent updateDateValue: ', newDateValue, cc, dateType);
        if (dateType === 'effective') {
            cc.effective = newDateValue;
        }
        if (dateType === 'expiration') {
            cc.expiration = newDateValue;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_app_shared_model_communication__["a" /* Communication */])
    ], ClientConfigsByCommModalComponent.prototype, "communication", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], ClientConfigsByCommModalComponent.prototype, "clients", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], ClientConfigsByCommModalComponent.prototype, "clientConfigurations", void 0);
    ClientConfigsByCommModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-client-configs-by-comm-modal',
            template: __webpack_require__("../../../../../src/app/communications/services/client-configurations/client-configs-by-comm-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/communications/services/client-configurations/client-configs-by-comm-modal.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */]])
    ], ClientConfigsByCommModalComponent);
    return ClientConfigsByCommModalComponent;
}());

var ClientConfigModalResult = (function () {
    function ClientConfigModalResult() {
    }
    return ClientConfigModalResult;
}());



/***/ }),

/***/ "../../../../../src/app/communications/services/client-configurations/client-configs-by-comm-modal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientConfigsByCommModalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__client_configs_by_comm_modal_component__ = __webpack_require__("../../../../../src/app/communications/services/client-configurations/client-configs-by-comm-modal.component.ts");
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




var ClientConfigsByCommModalService = (function () {
    function ClientConfigsByCommModalService(dataApiService, modalService) {
        this.dataApiService = dataApiService;
        this.modalService = modalService;
    }
    ClientConfigsByCommModalService.prototype.addClientConfiguration = function (clientConfiguration) {
        var _this = this;
        this.dataApiService.createClientConfiguration(clientConfiguration)
            .then(function (pc) { return console.log('addClientConfiguration:', clientConfiguration, _this.clientConfigurations); })
            .catch(function (error) { return console.log('addClientConfiguration error: ', error); });
    };
    ClientConfigsByCommModalService.prototype.configureClientModal = function (communication) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var modalOpts, modalRef, modalComp, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        modalOpts = {
                            size: 'lg'
                        };
                        modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_2__client_configs_by_comm_modal_component__["a" /* ClientConfigsByCommModalComponent */], modalOpts);
                        modalComp = modalRef.componentInstance;
                        modalComp.communication = communication;
                        _a = modalComp;
                        return [4 /*yield*/, this.getClients()];
                    case 1:
                        _a.clients = _c.sent();
                        _b = modalComp;
                        return [4 /*yield*/, this.findClientConfigurations(communication)];
                    case 2:
                        _b.clientConfigurations = _c.sent();
                        modalComp.modalInit();
                        modalRef.result.then(function (result) {
                            if (result.resultTxt === modalComp.SAVESUCCESS) {
                                console.log('configureClientModal result: ', result.modalResult);
                                _this.closeResult = "Closed with: " + result.resultTxt;
                                if (result.modalResult) {
                                    var modalResult = result.modalResult;
                                    if (modalResult.newClientConfigs) {
                                        for (var i = 0; i < modalResult.newClientConfigs.length; i++) {
                                            _this.addClientConfiguration(modalResult.newClientConfigs[i]);
                                        }
                                    }
                                }
                                else {
                                    // this would be some kind of exception
                                    console.log('CommunicationComponent configureClientModal bad result: ', result.modalResult);
                                }
                            }
                            else {
                                _this.closeResult = "Closed with: " + result;
                            }
                            // this.setClickedRow(null);
                            console.log('configureClientModal result: ', _this.closeResult);
                        }, function (reason) {
                            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
                            // this.setClickedRow(null);
                            console.log('configureClientModal result: ', _this.closeResult);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ClientConfigsByCommModalService.prototype.findClient = function (id) {
        return this.clients.find(function (c) { return c.id === id; });
    };
    ClientConfigsByCommModalService.prototype.findClientConfigurations = function (selectedComm) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getClientConfigurations()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.clientConfigurations.filter(function (cc) {
                                if (typeof (cc.communication) === 'number') {
                                    if (cc.communication === selectedComm.id) {
                                        cc.communication = selectedComm;
                                        if (typeof (cc.client) === 'number') {
                                            cc.client = _this.findClient(cc.client);
                                        }
                                        return true;
                                    }
                                    else {
                                        return false;
                                    }
                                }
                                else if (cc.communication.id === selectedComm.id) {
                                    if (typeof (cc.client) === 'number') {
                                        cc.client = _this.findClient(cc.client);
                                    }
                                    return true;
                                }
                                return false;
                            })];
                }
            });
        });
    };
    ClientConfigsByCommModalService.prototype.getClients = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.dataApiService.getClients()];
                    case 1:
                        _a.clients = _b.sent();
                        return [2 /*return*/, this.clients];
                    case 2:
                        error_1 = _b.sent();
                        console.log('getClients error: ', error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ClientConfigsByCommModalService.prototype.getClientConfigurations = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.dataApiService.getClientConfigurations()];
                    case 1:
                        _a.clientConfigurations = _b.sent();
                        return [2 /*return*/, this.clientConfigurations];
                    case 2:
                        error_2 = _b.sent();
                        console.log('getClientConfigurations error: ', error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ClientConfigsByCommModalService.prototype.getDismissReason = function (reason) {
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
    ClientConfigsByCommModalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_app_shared_services_data_api_service__["a" /* DataApiService */],
            __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]])
    ], ClientConfigsByCommModalService);
    return ClientConfigsByCommModalService;
}());



/***/ }),

/***/ "../../../../../src/app/communications/services/program-configurations/prog-configs-by-comm-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<form #programConfigurationViaCommunicationForm=\"ngForm\" \r\n(ngSubmit)=\"saveProgramConfiguration()\" >\r\n\r\n<div class=\"modal-header bg-gradient-dark\">\r\n  <h4 class=\"modal-title text-white\">\r\n    Configure Program <!-- -->\r\n    <small>for CommId {{communication.id}}: {{communication.name}}</small> \r\n  </h4>\r\n  <button type=\"button\" class=\"close text-white\" aria-label=\"Close\" (click)=\"configureProgramModal.dismiss('Cross click')\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <table class=\"table table-responsive table-sm table-striped table-bordered table-hover\">\r\n    <caption></caption>\r\n    <thead class=\"bg-gradient-dark text-white\">\r\n      <tr>\r\n        <th>ID</th>\r\n        <th>N<small>ame</small></th>\r\n        <th>E<small>mail</small></th>\r\n        <th>IVR</th>\r\n        <th>SMS</th>\r\n        <th>M<small>ail</small></th>\r\n        <th>M<small>obile</small></th>\r\n        <th>M<small>andatory</small></th>\r\n        <th>E<small>ffective</small></th>\r\n        <th>E<small>xpiration</small></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let pc of programConfigurations; let i = index\" \r\n          [class.table-info]=\"i == lastPgmConfigRow\">\r\n        <td>\r\n          <span *ngIf=\"i !== lastPgmConfigRow\" class=\"badge badge-secondary\">{{pc.id}}</span>\r\n          <span *ngIf=\"i === lastPgmConfigRow\">\r\n              <i class=\"fa fa-file-o clickable\" aria-hidden=\"true\" \r\n                 title=\"New Program configuration for {{communication.name}}\"></i></span></td>\r\n        <td>\r\n          <span *ngIf=\"i !== lastPgmConfigRow\">\r\n            <input type=\"text\" class=\"form-control form-control-sm\" name=\"name\" [(ngModel)]=\"pc.name\" readonly\r\n                   id=\"pgmConfigName\" aria-describedby=\"pgmConfigNameHelp\" placeholder=\"Enter Program Configuration Name\"></span>\r\n          <span *ngIf=\"i === lastPgmConfigRow\">\r\n            <input type=\"text\" class=\"form-control form-control-sm\" name=\"name\" [(ngModel)]=\"pc.name\" required\r\n                   id=\"pgmConfigName\" aria-describedby=\"pgmConfigNameHelp\" placeholder=\"Enter Program Configuration Name\"></span></td>\r\n        <td><app-select-channel-priority id=\"chanEmailPriority\" name=\"chanEmailPriority\" \r\n              [(ngModel)]=\"pc.chanEmailPriority\"\r\n              [actualStaticValue]=\"pc.chanEmailPriority\"\r\n              [lastConfigRow]=\"i === lastPgmConfigRow\" ></app-select-channel-priority></td>\r\n        <td><app-select-channel-priority id=\"chanIvrPriority\" name=\"chanIvrPriority\" \r\n              [(ngModel)]=\"pc.chanIvrPriority\"\r\n              [actualStaticValue]=\"pc.chanIvrPriority\"\r\n              [lastConfigRow]=\"i === lastPgmConfigRow\" ></app-select-channel-priority></td>\r\n        <td><app-select-channel-priority id=\"chanSmsPriority\" name=\"chanSmsPriority\" \r\n              [(ngModel)]=\"pc.chanSmsPriority\"\r\n              [actualStaticValue]=\"pc.chanSmsPriority\"\r\n              [lastConfigRow]=\"i === lastPgmConfigRow\" ></app-select-channel-priority></td>  \r\n        <td><app-select-channel-priority id=\"chanMailPriority\" name=\"chanMailPriority\" \r\n              [(ngModel)]=\"pc.chanMailPriority\"\r\n              [actualStaticValue]=\"pc.chanMailPriority\"\r\n              [lastConfigRow]=\"i === lastPgmConfigRow\" ></app-select-channel-priority></td> \r\n        <td><app-select-channel-priority id=\"chanMobilePriority\" name=\"chanMobilePriority\" \r\n              [(ngModel)]=\"pc.chanMobilePriority\"\r\n              [actualStaticValue]=\"pc.chanMobilePriority\"\r\n              [lastConfigRow]=\"i === lastPgmConfigRow\" ></app-select-channel-priority></td> \r\n        <td><app-select-channel-mandatory id=\"chanMandatory\" name=\"chanMandatory\" \r\n              [(ngModel)]=\"pc.chanMandatory\"\r\n              [actualStaticValue]=\"pc.chanMandatory\"\r\n              [lastConfigRow]=\"i === lastPgmConfigRow\" ></app-select-channel-mandatory></td>\r\n        <td><app-date-eff-exp\r\n              dateType=\"effective\" [commConfig]=\"pc\"\r\n              [lastConfigRow]=\"i === lastPgmConfigRow\"\r\n              (newDateValue)=\"updateDateValue($event, pc, 'effective')\"></app-date-eff-exp></td>\r\n        <td><app-date-eff-exp\r\n              dateType=\"expiration\" [commConfig]=\"pc\"\r\n              [lastConfigRow]=\"i === lastPgmConfigRow\"\r\n              (newDateValue)=\"updateDateValue($event, pc, 'expiration')\"></app-date-eff-exp></td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <div class=\"form-group\">\r\n    <label for=\"programName\">Choose Program</label>\r\n    <select id=\"program\" name=\"program\" [(ngModel)]=\"selectedProgram\" required>\r\n      <option *ngFor=\"let p of programs\" [ngValue]=\"p.id\">{{p.name}}</option>\r\n    </select>\r\n  </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <!-- https://github.com/twbs/bootstrap/issues/24413 -->\r\n  <!--span class=\"mr-auto\">Some instructional content or condition message goes here: {{newPgmConfig.effective}}</span-->\r\n  <div class=\"w-100\">\r\n    <span class=\"float-left\">Some instructional content or condition message goes here:<!-- {{newPgmConfig.effective}}--></span>\r\n    <div class=\"float-right\">\r\n        <button type=\"submit\" class=\"btn btn-outline-dark\" [disabled]=\"!programConfigurationViaCommunicationForm.valid\">Save</button>\r\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"configureProgramModal.close('Close click')\">Cancel</button>\r\n    </div>\r\n  </div>\r\n  \r\n</div>\r\n\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/communications/services/program-configurations/prog-configs-by-comm-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/communications/services/program-configurations/prog-configs-by-comm-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramConfigsByCommModalComponent; });
/* unused harmony export ProgramConfigModalResult */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_model_communication__ = __webpack_require__("../../../../../src/app/shared/model/communication.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_model_program_configuration__ = __webpack_require__("../../../../../src/app/shared/model/program-configuration.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProgramConfigsByCommModalComponent = (function () {
    function ProgramConfigsByCommModalComponent(configureProgramModal) {
        this.configureProgramModal = configureProgramModal;
        this.communication = new __WEBPACK_IMPORTED_MODULE_2_app_shared_model_communication__["a" /* Communication */](); // wtf;
        this.SAVESUCCESS = 'Close on succesful save';
    }
    ProgramConfigsByCommModalComponent.prototype.ngOnInit = function () {
        console.log('ProgramConfigurationsModalComponent ngOnInit: ', this.programs);
    };
    ProgramConfigsByCommModalComponent.prototype.modalInit = function () {
        console.log('ProgramConfigByCommComponent init: ');
        console.log(this.communication);
        console.log(this.programConfigurations);
        // get the list of programs to populate the dropdown (covered in @Input() programs: Program[];)
        // check if there are progConfig already (for now just checking for first one, have to check for eff dates)
        if (this.programConfigurations.length === 0) {
            this.addProgramConfig();
        }
        else {
            var indxOfLast = this.programConfigurations.length - 1;
            if (this.programConfigurations[indxOfLast] && this.programConfigurations[indxOfLast].program) {
                // why? this shows up as Object when it is ProgramConfiguration
                this.prevPgmConfig = this.programConfigurations[indxOfLast];
                this.selectedProgram = this.prevPgmConfig.program.id;
                this.addProgramConfig(this.programConfigurations[indxOfLast]);
            }
        }
    };
    ProgramConfigsByCommModalComponent.prototype.addProgramConfig = function (lastPgmConfig) {
        var today = new Date();
        var tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1);
        if (lastPgmConfig) {
            // adding a new row, expiring the previous, copying the previous values
            lastPgmConfig.expiration = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
            this.newPgmConfig = new __WEBPACK_IMPORTED_MODULE_3_app_shared_model_program_configuration__["a" /* ProgramConfiguration */](lastPgmConfig);
        }
        else {
            // this is a first-time row for this communication, set some defaults
            this.newPgmConfig = new __WEBPACK_IMPORTED_MODULE_3_app_shared_model_program_configuration__["a" /* ProgramConfiguration */]();
        }
        this.newPgmConfig.effective = tomorrow.getFullYear() + '-' + (tomorrow.getMonth() + 1) + '-' + tomorrow.getDate();
        this.newPgmConfig.expiration = '9999-12-31';
        this.lastPgmConfigRow = this.programConfigurations.length;
        this.programConfigurations[this.programConfigurations.length] = this.newPgmConfig;
    };
    ProgramConfigsByCommModalComponent.prototype.findProgram = function (id) {
        return this.programs.find(function (p) { return p.id === id; });
    };
    ProgramConfigsByCommModalComponent.prototype.saveProgramConfiguration = function () {
        console.log('ProgramConfigByCommComponent save');
        console.log(this.newPgmConfig, ' program id: ', this.selectedProgram);
        this.newPgmConfig.program = this.findProgram(this.selectedProgram);
        this.newPgmConfig.communication = this.communication;
        var modalResult = {
            prevProgConfig: this.prevPgmConfig,
            newProgConfig: this.newPgmConfig
        };
        this.configureProgramModal.close({ resultTxt: this.SAVESUCCESS, modalResult: modalResult });
    };
    ProgramConfigsByCommModalComponent.prototype.updateDateValue = function (newDateValue, pc, dateType) {
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
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_app_shared_model_communication__["a" /* Communication */])
    ], ProgramConfigsByCommModalComponent.prototype, "communication", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], ProgramConfigsByCommModalComponent.prototype, "programs", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], ProgramConfigsByCommModalComponent.prototype, "programConfigurations", void 0);
    ProgramConfigsByCommModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/communications/services/program-configurations/prog-configs-by-comm-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/communications/services/program-configurations/prog-configs-by-comm-modal.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */]])
    ], ProgramConfigsByCommModalComponent);
    return ProgramConfigsByCommModalComponent;
}());

var ProgramConfigModalResult = (function () {
    function ProgramConfigModalResult() {
    }
    return ProgramConfigModalResult;
}());



/***/ }),

/***/ "../../../../../src/app/communications/services/program-configurations/prog-configs-by-comm-modal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramConfigsByCommModalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prog_configs_by_comm_modal_component__ = __webpack_require__("../../../../../src/app/communications/services/program-configurations/prog-configs-by-comm-modal.component.ts");
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




var ProgramConfigsByCommModalService = (function () {
    function ProgramConfigsByCommModalService(dataApiService, modalService) {
        this.dataApiService = dataApiService;
        this.modalService = modalService;
    }
    ProgramConfigsByCommModalService.prototype.configureProgramModal = function (communication) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var modalOpts, modalRef, modalComp, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        modalOpts = {
                            size: 'lg'
                        };
                        modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_2__prog_configs_by_comm_modal_component__["a" /* ProgramConfigsByCommModalComponent */], modalOpts);
                        modalComp = modalRef.componentInstance;
                        // this.programs = await this.getPrograms();
                        // this.programConfigurations = await this.getProgramConfigurations();
                        // modalComp.name = 'Configure Program';
                        modalComp.communication = communication;
                        _a = modalComp;
                        return [4 /*yield*/, this.getPrograms()];
                    case 1:
                        _a.programs = _c.sent();
                        _b = modalComp;
                        return [4 /*yield*/, this.findProgramConfigurations(communication)];
                    case 2:
                        _b.programConfigurations = _c.sent();
                        modalComp.modalInit();
                        modalRef.result.then(function (result) {
                            if (result.resultTxt === modalComp.SAVESUCCESS) {
                                console.log('configureProgramModal result: ', result.modalResult);
                                _this.closeResult = "Closed with: " + result.resultTxt;
                                if (result.modalResult) {
                                    var modalResult = result.modalResult;
                                    if (modalResult.prevProgConfig) {
                                        _this.updateProgramConfiguration(modalResult.prevProgConfig);
                                    }
                                    if (modalResult.newProgConfig) {
                                        _this.addProgramConfiguration(modalResult.newProgConfig);
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
    ProgramConfigsByCommModalService.prototype.addProgramConfiguration = function (programConfiguration) {
        var _this = this;
        this.dataApiService.createProgramConfiguration(programConfiguration)
            .then(function (pc) { return console.log('addProgramConfiguration:', programConfiguration, _this.programConfigurations); })
            .catch(function (error) { return console.log('addProgramConfiguration error: ', error); });
    };
    ProgramConfigsByCommModalService.prototype.updateProgramConfiguration = function (programConfiguration) {
        var _this = this;
        this.dataApiService.updateProgramConfiguration(programConfiguration)
            .then(function (pc) { return console.log('updateProgramConfiguration:', programConfiguration, _this.programConfigurations); })
            .catch(function (error) { return console.log('updateProgramConfiguration error: ', error); });
    };
    ProgramConfigsByCommModalService.prototype.getDismissReason = function (reason) {
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
    ProgramConfigsByCommModalService.prototype.findProgram = function (id) {
        return this.programs.find(function (p) { return p.id === id; });
    };
    ProgramConfigsByCommModalService.prototype.findProgramConfigurations = function (selectedComm) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getProgramConfigurations()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.programConfigurations.filter(function (pc) {
                                if (typeof (pc.communication) === 'number') {
                                    if (pc.communication === selectedComm.id) {
                                        pc.communication = selectedComm;
                                        if (typeof (pc.program) === 'number') {
                                            pc.program = _this.findProgram(pc.program);
                                        }
                                        return true;
                                    }
                                    else {
                                        return false;
                                    }
                                }
                                else if (pc.communication.id === selectedComm.id) {
                                    if (typeof (pc.program) === 'number') {
                                        pc.program = _this.findProgram(pc.program);
                                    }
                                    return true;
                                }
                                return false;
                            })];
                }
            });
        });
    };
    ProgramConfigsByCommModalService.prototype.getPrograms = function () {
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
                        return [2 /*return*/, this.programs];
                    case 2:
                        error_1 = _b.sent();
                        console.log('getPrograms error: ', error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProgramConfigsByCommModalService.prototype.getProgramConfigurations = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, error_2;
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
                        error_2 = _b.sent();
                        console.log('getProgramConfigurations error: ', error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProgramConfigsByCommModalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_app_shared_services_data_api_service__["a" /* DataApiService */],
            __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]])
    ], ProgramConfigsByCommModalService);
    return ProgramConfigsByCommModalService;
}());



/***/ })

});
//# sourceMappingURL=communications.module.chunk.js.map