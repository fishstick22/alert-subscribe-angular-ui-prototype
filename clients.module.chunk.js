webpackJsonp(["clients.module"],{

/***/ "../../../../../src/app/clients/clients-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routedComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clients_component__ = __webpack_require__("../../../../../src/app/clients/clients.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__clients_component__["a" /* ClientsComponent */] }
];
var routedComponents = [__WEBPACK_IMPORTED_MODULE_2__clients_component__["a" /* ClientsComponent */]];
var ClientsRoutingModule = (function () {
    function ClientsRoutingModule() {
    }
    ClientsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], ClientsRoutingModule);
    return ClientsRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/clients/clients.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>Manage Clients</h4>\r\n<app-client-action-table \r\n  [clients]=\"clients\"\r\n  [displayClient]=\"displayClient\"\r\n  [showClientId]=\"true\"\r\n  [showClientCode]=\"true\"\r\n  [showClientName]=\"true\"\r\n  [showStatus]=\"true\"\r\n  [showAction]=\"true\"\r\n  (selRowOut)=\"setClickedRow($event)\"\r\n  (clientConfigAction)=\"configureClient($event)\">\r\n</app-client-action-table>\r\n"

/***/ }),

/***/ "../../../../../src/app/clients/clients.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/clients/clients.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_services_data_api_service__ = __webpack_require__("../../../../../src/app/shared/services/data-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_client_configurations_client_configurations_modal_service__ = __webpack_require__("../../../../../src/app/clients/services/client-configurations/client-configurations-modal.service.ts");
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



var ClientsComponent = (function () {
    function ClientsComponent(dataApiService, clientConfigService) {
        this.dataApiService = dataApiService;
        this.clientConfigService = clientConfigService;
    }
    ClientsComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // console.log('ClientComponent ngOnInit...');
                    return [4 /*yield*/, this.getClients()];
                    case 1:
                        // console.log('ClientComponent ngOnInit...');
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ClientsComponent.prototype.getClients = function () {
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
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        console.log('getClients error: ', error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ClientsComponent.prototype.configureClient = function (clientConfigAction) {
        if (clientConfigAction.configType === 'communications') {
            this.configureClientCommunications(clientConfigAction.clientId);
        }
    };
    ClientsComponent.prototype.configureClientCommunications = function (clientId) {
        // invoke service to manage a modal dialog allowing user to
        // configure the client-level communication configurations
        var client = this.findClient(clientId);
        this.clientConfigService.configureClientModal(client);
    };
    ClientsComponent.prototype.findClient = function (id) {
        return this.clients.find(function (c) { return c.id === id; });
    };
    ClientsComponent.prototype.setClickedRow = function (index) {
        if (this.selectedRow === index || this.selectedRow === null) {
            this.selectedRow = null;
        }
        else {
            this.selectedRow = index;
        }
    };
    ClientsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-clients',
            template: __webpack_require__("../../../../../src/app/clients/clients.component.html"),
            styles: [__webpack_require__("../../../../../src/app/clients/clients.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_shared_services_data_api_service__["a" /* DataApiService */],
            __WEBPACK_IMPORTED_MODULE_2__services_client_configurations_client_configurations_modal_service__["a" /* ClientConfigurationsModalService */]])
    ], ClientsComponent);
    return ClientsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/clients/clients.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsModule", function() { return ClientsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clients_routing_module__ = __webpack_require__("../../../../../src/app/clients/clients-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_client_configurations_client_configurations_modal_component__ = __webpack_require__("../../../../../src/app/clients/services/client-configurations/client-configurations-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_client_configurations_client_configurations_modal_service__ = __webpack_require__("../../../../../src/app/clients/services/client-configurations/client-configurations-modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Clients feature Module
//

// import { CommonModule } from '@angular/common';



// shared

var ClientsModule = (function () {
    function ClientsModule() {
    }
    ClientsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                // CommonModule, // gets provided by shared module
                __WEBPACK_IMPORTED_MODULE_1__clients_routing_module__["a" /* ClientsRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4_app_shared_shared_module__["SharedModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__clients_routing_module__["b" /* routedComponents */],
                __WEBPACK_IMPORTED_MODULE_2__services_client_configurations_client_configurations_modal_component__["a" /* ClientConfigurationsModalComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__services_client_configurations_client_configurations_modal_component__["a" /* ClientConfigurationsModalComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_client_configurations_client_configurations_modal_service__["a" /* ClientConfigurationsModalService */]],
        })
    ], ClientsModule);
    return ClientsModule;
}());



/***/ }),

/***/ "../../../../../src/app/clients/services/client-configurations/client-configurations-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<form #clientConfigurationForm=\"ngForm\" \r\n(ngSubmit)=\"saveClientConfiguration()\" >\r\n\r\n  <div class=\"modal-header bg-gradient-dark\">\r\n    <h4 class=\"modal-title text-white\">\r\n      Configure Communication(s)\r\n      <small>for ClientId {{client.id}}: {{client.name}}</small>\r\n    </h4>\r\n    <button type=\"button\" class=\"close text-white\" aria-label=\"Close\" (click)=\"configureClientModal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n    \r\n  <div class=\"modal-body\">\r\n    <div id=\"configuredClients\">\r\n      <table class=\"table table-responsive table-sm table-striped table-bordered table-hover\">\r\n        <caption></caption>\r\n        <thead class=\"bg-gradient-dark text-white\">\r\n          <tr>\r\n            <th>ID</th>\r\n            <th>N<small>ame</small></th>\r\n            <th>E<small>mail</small></th>\r\n            <th>IVR</th>\r\n            <th>SMS</th>\r\n            <th>M<small>ail</small></th>\r\n            <th>M<small>obile</small></th>\r\n            <th>D<small>efault</small></th>\r\n            <th>E<small>ffective</small></th>\r\n            <th>E<small>xpiration</small></th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr appDroppable *ngFor=\"let cc of clientConfigurations; let i = index\"\r\n              [dragOverClass]=\"'drag-target-border'\" [dragHintClass]=\"'drag-hint'\"\r\n              [dropEnabled]=\"i === lastClientConfigRow && !cc.communication.id\"\r\n              \r\n              (onDrop)=\"communicationDrop($event)\"\r\n              [class.table-info]=\"i == lastClientConfigRow\"> \r\n            \r\n            <td>\r\n              <span *ngIf=\"i !== lastClientConfigRow\" class=\"badge badge-secondary\">{{cc.communication.id}}</span>\r\n              <span *ngIf=\"i === lastClientConfigRow && !cc.communication.id\">\r\n                <i class=\"fa fa-file-o clickable\" aria-hidden=\"true\" \r\n                    title=\"New Client configuration for {{cc.communication.name}}\"></i></span>\r\n              <span *ngIf=\"i === lastClientConfigRow && cc.communication.id\" class=\"badge badge-primary\">{{cc.communication.id}}</span>\r\n            </td>\r\n            <td width=\"18%\"><span >{{cc.communication.name}}</span></td>\r\n            <td><app-select-channel-priority \r\n                  id=\"chanEmailPriority\" name=\"chanEmailPriority\" \r\n                  [(ngModel)]=\"cc.chanEmailPriority\"\r\n                  [actualStaticValue]=\"cc.chanEmailPriority\"\r\n                  [lastConfigRow]=\"i === lastClientConfigRow\" ></app-select-channel-priority></td>\r\n            <td><app-select-channel-priority \r\n                  id=\"chanIvrPriority\" name=\"chanIvrPriority\" \r\n                  [(ngModel)]=\"cc.chanIvrPriority\"\r\n                  [actualStaticValue]=\"cc.chanIvrPriority\"\r\n                  [lastConfigRow]=\"i === lastClientConfigRow\" ></app-select-channel-priority></td>\r\n            <td><app-select-channel-priority \r\n                  id=\"chanSmsPriority\" name=\"chanSmsPriority\" \r\n                  [(ngModel)]=\"cc.chanSmsPriority\"\r\n                  [actualStaticValue]=\"cc.chanSmsPriority\"\r\n                  [lastConfigRow]=\"i === lastClientConfigRow\" ></app-select-channel-priority></td>  \r\n            <td><app-select-channel-priority \r\n                  id=\"chanMailPriority\" name=\"chanMailPriority\" \r\n                  [(ngModel)]=\"cc.chanMailPriority\"\r\n                  [actualStaticValue]=\"cc.chanMailPriority\"\r\n                  [lastConfigRow]=\"i === lastClientConfigRow\" ></app-select-channel-priority></td> \r\n            <td><app-select-channel-priority \r\n                  id=\"chanMobilePriority\" name=\"chanMobilePriority\" \r\n                  [(ngModel)]=\"cc.chanMobilePriority\"\r\n                  [actualStaticValue]=\"cc.chanMobilePriority\"\r\n                  [lastConfigRow]=\"i === lastClientConfigRow\" ></app-select-channel-priority></td> \r\n            <td><app-select-channel-default\r\n                  id=\"chanDefault\" name=\"chanDefault\" \r\n                  [(ngModel)]=\"cc.chanDefault\"\r\n                  [actualStaticValue]=\"cc.chanDefault\"\r\n                  [lastConfigRow]=\"i === lastClientConfigRow\" ></app-select-channel-default></td>\r\n            <td><app-date-eff-exp\r\n                  dateType=\"effective\" [commConfig]=\"cc\"\r\n                  [lastConfigRow]=\"i === lastClientConfigRow\"\r\n                  (newDateValue)=\"updateDateValue($event, cc, 'effective')\"></app-date-eff-exp></td>\r\n            <td><app-date-eff-exp\r\n                  dateType=\"expiration\" [commConfig]=\"cc\"\r\n                  [lastConfigRow]=\"i === lastClientConfigRow\"\r\n                  (newDateValue)=\"updateDateValue($event, cc, 'expiration')\"></app-date-eff-exp></td>\r\n          </tr>\r\n          <tr *ngIf=\"configureState === 'start' || configureState === 'continue'\">\r\n            <td>\r\n              <i class=\"fa fa-plus-square-o clickable\" aria-hidden=\"true\" \r\n                (click)=\"addClientConfig()\" title=\"Add New Client Configuration to {{client.name}}\"></i>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div><!--configuredClients-->\r\n      \r\n  </div>\r\n      \r\n  <div class=\"modal-footer\">\r\n    <div class=\"w-100\">\r\n      <span class=\"float-left\">Some instructional content or condition message goes here: </span>\r\n      <div class=\"float-right\">\r\n          <button type=\"submit\" class=\"btn btn-outline-dark\" [disabled]=\"!clientConfigurationForm.valid\">Save</button>\r\n          <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"configureClientModal.close('Close click')\">Cancel</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"modal-footer\">\r\n    <div id=ActionTable>\r\n      <app-comm-action-table *ngIf=\"configureState === 'pick' || configureState === 'continue'\"\r\n        [configureState]=\"configureState\"    \r\n        [communications]=\"communications\"\r\n        [displayComm]=\"displayComm\"\r\n        [supressComm]=\"supressComm\"\r\n        [displayCommStartEmpty]=\"true\"\r\n        [displayClient]=\"client.name\"\r\n        [showCommId]=\"true\"\r\n        [showCommName]=\"true\"\r\n        [showCommDesc]=\"true\"\r\n        [showStatus]=\"false\"\r\n        [showAction]=\"false\"\r\n        (selRowOut)=\"setClickedRow($event)\"\r\n        (selectedCommunication)=\"addClientConfig($event)\"\r\n        (commConfigAction)=\"configureCommunication($event)\">\r\n      </app-comm-action-table>\r\n    </div>\r\n  </div>\r\n\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/clients/services/client-configurations/client-configurations-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.scroll-list {\n  overflow: auto;\n  max-height: 70vh; }\n\n.drag-over {\n  border: #ff525b dashed 2px; }\n\n.drag-hint {\n  border: #ffc100 dashed 2px; }\n\n.drag-target-border {\n  border: #00bfff dashed 2px; }\n\n.drag-target-border-green {\n  border: #3c763d dashed 2px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/clients/services/client-configurations/client-configurations-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ClientConfigModalResult */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientConfigurationsModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_app_constants__ = __webpack_require__("../../../../../src/app/app-constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_model_communication__ = __webpack_require__("../../../../../src/app/shared/model/communication.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_model_client__ = __webpack_require__("../../../../../src/app/shared/model/client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_shared_model_client_configuration__ = __webpack_require__("../../../../../src/app/shared/model/client-configuration.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ClientConfigModalResult = (function () {
    function ClientConfigModalResult() {
    }
    return ClientConfigModalResult;
}());

var ClientConfigurationsModalComponent = (function () {
    function ClientConfigurationsModalComponent(configureClientModal) {
        this.configureClientModal = configureClientModal;
        this.client = new __WEBPACK_IMPORTED_MODULE_4_app_shared_model_client__["a" /* Client */](); // just becasue service inits whenever
        this.clientConfigurations = [];
        this.clientDropEnabled = false;
        this.today = new Date();
        this.tomorrow = new Date();
    }
    ClientConfigurationsModalComponent.prototype.ngOnInit = function () {
    };
    ClientConfigurationsModalComponent.prototype.modalInit = function () {
        // console.log('ClientConfigComponent init: ');
        // console.log(this.client);
        // get the list of clients to populate the dropdown (covered in @Input() clients: Client[];)
        // check if there are progConfig already (for now just checking for first one, have to check for eff dates)
        this.displayCommStartEmpty = true;
        this.displayComm = [];
        this.newClientConfigs = [];
        this.tomorrow.setDate(this.today.getDate() + 1);
        this.configureState = 'start';
        this.supressComm = this.findExistingConfiguredComms();
    };
    ClientConfigurationsModalComponent.prototype.addClientConfig = function (communication) {
        if (this.newClientConfig && this.configureState === 'pick') {
            this.newClientConfig.communication = communication;
            this.supressComm.push(communication.id);
            this.clientDropEnabled = false;
        }
        if (this.configureState === 'start' || this.configureState === 'continue') {
            // first time through
            this.lastClientConfigRow = this.clientConfigurations.length;
            if (this.lastClientConfigRow === 0) {
                this.newClientConfig = new __WEBPACK_IMPORTED_MODULE_5_app_shared_model_client_configuration__["a" /* ClientConfiguration */]();
                this.newClientConfig.effective =
                    this.tomorrow.getFullYear() + '-' +
                        (this.tomorrow.getMonth() + 1) + '-' +
                        this.tomorrow.getDate();
            }
            else {
                // clone setting from previous config row
                this.prevClientConfig = this.clientConfigurations[this.lastClientConfigRow - 1];
                this.newClientConfig = new __WEBPACK_IMPORTED_MODULE_5_app_shared_model_client_configuration__["a" /* ClientConfiguration */](this.prevClientConfig);
                this.newClientConfig.effective = this.prevClientConfig.effective;
            }
            this.clientConfigurations[this.clientConfigurations.length] = this.newClientConfig;
            this.newClientConfigs[this.newClientConfigs.length] = this.newClientConfig;
            this.newClientConfig.expiration = __WEBPACK_IMPORTED_MODULE_2_app_app_constants__["a" /* AppConstants */].UNEXPIRED;
            this.newClientConfig.client = this.client;
            this.newClientConfig.communication = new __WEBPACK_IMPORTED_MODULE_3_app_shared_model_communication__["a" /* Communication */]();
            this.configureState = 'pick';
            this.clientDropEnabled = true;
        }
        else {
            if (this.newClientConfig && this.configureState === 'pick') {
                this.configureState = 'continue';
            }
        }
    };
    ClientConfigurationsModalComponent.prototype.communicationDrop = function (dragEvent) {
        console.log('ClientConfigComponent communicationDrop: ', dragEvent);
        if (dragEvent.dragData && typeof (dragEvent.dragData.id) === 'number') {
            this.addClientConfig(this.findCommunication(dragEvent.dragData.id));
        }
    };
    ClientConfigurationsModalComponent.prototype.findCommunication = function (id) {
        return this.communications.find(function (c) { return c.id === id; });
    };
    ClientConfigurationsModalComponent.prototype.findExistingConfiguredComms = function () {
        var existing = [];
        for (var i = 0; i < this.clientConfigurations.length; i++) {
            existing.push(this.clientConfigurations[i].communication.id);
        }
        return existing;
    };
    ClientConfigurationsModalComponent.prototype.saveClientConfiguration = function () {
        console.log('ClientConfigComponent save');
        console.log(this.newClientConfig, ' client id: ', this.client);
        var modalResult = {
            newClientConfigs: this.newClientConfigs
        };
        this.configureClientModal.close({ resultTxt: __WEBPACK_IMPORTED_MODULE_2_app_app_constants__["a" /* AppConstants */].SAVESUCCESS, modalResult: modalResult });
    };
    ClientConfigurationsModalComponent.prototype.updateDateValue = function (newDateValue, cc, dateType) {
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
        __metadata("design:type", Array)
    ], ClientConfigurationsModalComponent.prototype, "communications", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_app_shared_model_client__["a" /* Client */])
    ], ClientConfigurationsModalComponent.prototype, "client", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], ClientConfigurationsModalComponent.prototype, "clientConfigurations", void 0);
    ClientConfigurationsModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-client-configurations-modal',
            template: __webpack_require__("../../../../../src/app/clients/services/client-configurations/client-configurations-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/clients/services/client-configurations/client-configurations-modal.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */]])
    ], ClientConfigurationsModalComponent);
    return ClientConfigurationsModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/clients/services/client-configurations/client-configurations-modal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientConfigurationsModalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_app_constants__ = __webpack_require__("../../../../../src/app/app-constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__client_configurations_modal_component__ = __webpack_require__("../../../../../src/app/clients/services/client-configurations/client-configurations-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_services_data_api_service__ = __webpack_require__("../../../../../src/app/shared/services/data-api.service.ts");
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





var ClientConfigurationsModalService = (function () {
    function ClientConfigurationsModalService(dataApiService, modalService) {
        this.dataApiService = dataApiService;
        this.modalService = modalService;
    }
    ClientConfigurationsModalService.prototype.addClientConfiguration = function (clientConfiguration) {
        var _this = this;
        this.dataApiService.createClientConfiguration(clientConfiguration)
            .then(function (pc) { return console.log('addClientConfiguration:', clientConfiguration, _this.clientConfigurations); })
            .catch(function (error) { return console.log('addClientConfiguration error: ', error); });
    };
    ClientConfigurationsModalService.prototype.configureClientModal = function (client) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var modalOpts, modalRef, modalComp, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        modalOpts = {
                            size: 'lg'
                        };
                        modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_3__client_configurations_modal_component__["a" /* ClientConfigurationsModalComponent */], modalOpts);
                        modalComp = modalRef.componentInstance;
                        _a = modalComp;
                        return [4 /*yield*/, this.getCommunications()];
                    case 1:
                        _a.communications = _c.sent();
                        modalComp.client = client;
                        _b = modalComp;
                        return [4 /*yield*/, this.findClientConfigurations(client)];
                    case 2:
                        _b.clientConfigurations = _c.sent();
                        modalComp.modalInit();
                        modalRef.result.then(function (result) {
                            if (result.resultTxt === __WEBPACK_IMPORTED_MODULE_2_app_app_constants__["a" /* AppConstants */].SAVESUCCESS) {
                                console.log('configureClientModal result: ', result.modalResult);
                                _this.closeResult = "Closed with: " + result.resultTxt;
                                if (result.modalResult) {
                                    var modalResult = result.modalResult;
                                    // if (modalResult.prevProgConfig) {
                                    //   this.updateClientConfiguration(modalResult.prevProgConfig);
                                    // }
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
    ClientConfigurationsModalService.prototype.findCommunication = function (id) {
        return this.communications.find(function (c) { return c.id === id; });
    };
    ClientConfigurationsModalService.prototype.findClientConfigurations = function (selectedClient) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getClientConfigurations()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.clientConfigurations.filter(function (pc) {
                                if (typeof (pc.client) === 'number') {
                                    if (pc.client === selectedClient.id) {
                                        pc.client = selectedClient;
                                        if (typeof (pc.communication) === 'number') {
                                            pc.communication = _this.findCommunication(pc.communication);
                                        }
                                        return true;
                                    }
                                    else {
                                        return false;
                                    }
                                }
                                else if (pc.client.id === selectedClient.id) {
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
    ClientConfigurationsModalService.prototype.getDismissReason = function (reason) {
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
    ClientConfigurationsModalService.prototype.getCommunications = function () {
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
    ClientConfigurationsModalService.prototype.getClients = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, error_2;
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
                        error_2 = _b.sent();
                        console.log('getClients error: ', error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ClientConfigurationsModalService.prototype.getClientConfigurations = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, error_3;
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
                        error_3 = _b.sent();
                        console.log('getClientConfigurations error: ', error_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ClientConfigurationsModalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_app_shared_services_data_api_service__["a" /* DataApiService */],
            __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]])
    ], ClientConfigurationsModalService);
    return ClientConfigurationsModalService;
}());



/***/ })

});
//# sourceMappingURL=clients.module.chunk.js.map