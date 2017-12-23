webpackJsonp(["common"],{

/***/ "../../../../../src/app/shared/model/client-configuration.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientConfiguration; });
var ClientConfiguration = /** @class */ (function () {
    function ClientConfiguration(clientConfig) {
        if (clientConfig) {
            this.name = clientConfig.name;
            this.chanEmailPriority = clientConfig.chanEmailPriority;
            this.chanIvrPriority = clientConfig.chanIvrPriority;
            this.chanSmsPriority = clientConfig.chanSmsPriority;
            this.chanMailPriority = clientConfig.chanMailPriority;
            this.chanMobilePriority = clientConfig.chanMobilePriority;
            this.chanDefault = clientConfig.chanDefault;
            this.required = clientConfig.required;
            this.mandatory = clientConfig.mandatory;
        }
        else {
            this.chanEmailPriority = 0;
            this.chanIvrPriority = 0;
            this.chanSmsPriority = 0;
            this.chanMailPriority = 0;
            this.chanMobilePriority = 0;
            this.chanDefault = 'No';
            this.required = false;
            this.mandatory = false;
        }
    }
    ClientConfiguration.prototype.clone = function () {
        return new ClientConfiguration(this);
    };
    return ClientConfiguration;
}());



/***/ }),

/***/ "../../../../../src/app/shared/model/program-configuration.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramConfiguration; });
var ProgramConfiguration = /** @class */ (function () {
    // https://stackoverflow.com/questions/4511705/how-to-parse-json-to-receive-a-date-object-in-javascript
    function ProgramConfiguration(programConfig) {
        if (programConfig) {
            this.chanEmailPriority = programConfig.chanEmailPriority;
            this.name = programConfig.name;
            this.chanIvrPriority = programConfig.chanIvrPriority;
            this.chanSmsPriority = programConfig.chanSmsPriority;
            this.chanMailPriority = programConfig.chanMailPriority;
            this.chanMobilePriority = programConfig.chanMobilePriority;
            this.chanDefault = programConfig.chanDefault;
            this.required = programConfig.required;
            this.mandatory = programConfig.mandatory;
        }
        else {
            this.chanEmailPriority = 0;
            this.chanIvrPriority = 0;
            this.chanSmsPriority = 0;
            this.chanMailPriority = 0;
            this.chanMobilePriority = 0;
            this.chanDefault = 'No';
            this.required = false;
            this.mandatory = false;
        }
    }
    ProgramConfiguration.prototype.clone = function () {
        return new ProgramConfiguration(this);
    };
    return ProgramConfiguration;
}());



/***/ }),

/***/ "../../../../../src/app/shared/model/program.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Program; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ProgramConfigAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ProgramStatus; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_app_constants__ = __webpack_require__("../../../../../src/app/app-constants.ts");
// import { IProgramConfig } from 'app/classes/model/iprog-config';

// export class Program implements IProgramConfig {
var Program = /** @class */ (function () {
    function Program(id, name, description, programProfile, programProfileClientException, programConfiguration) {
        if (id === void 0) { id = 0; }
        if (name === void 0) { name = ''; }
        var emptyNum = [];
        this.id = id;
        this.name = name;
        this.description = (description) ? description : '';
        this.programProfile = (programProfile) ? programProfile : [];
        this.programProfileClientException = (programProfileClientException) ? programProfileClientException : emptyNum;
        this.programConfiguration = (programConfiguration) ? programConfiguration : emptyNum;
    }
    Program.prototype.clone = function () {
        return new Program(this.id, this.name, this.description, this.programProfile, this.programProfileClientException, this.programConfiguration);
    };
    return Program;
}());

var ProgramConfigAction = /** @class */ (function () {
    function ProgramConfigAction(id, type) {
        this.progId = id;
        this.configType = type;
    }
    return ProgramConfigAction;
}());

var ProgramStatus = /** @class */ (function () {
    function ProgramStatus(program) {
        this.setStatus(program);
        // program.detectChanges = 'new';
    }
    ProgramStatus.prototype.update = function (program) {
        this.setStatus(program);
    };
    ProgramStatus.prototype.setStatus = function (program) {
        if (program.detectChanges === 'saving') {
            this.effExpDateText = 'saving...';
        }
        else if (program.programProfile && program.programProfile.length > 0) {
            program.programProfile.sort(function (a, b) { return a.id < b.id ? -1 : a.id > b.id ? 1 : 0; });
            this.lastProfile = program.programProfile[program.programProfile.length - 1];
            this.expiredProgram = (this.lastProfile.expiration !== __WEBPACK_IMPORTED_MODULE_0_app_app_constants__["a" /* AppConstants */].UNEXPIRED);
            this.statusText = this.expiredProgram ? 'expired' : 'active';
            this.effExpDateText =
                (this.expiredProgram ? 'exp ' : 'eff ') +
                    (this.expiredProgram ? this.lastProfile.expiration : this.lastProfile.effective);
        }
        else {
            this.statusText = 'undetermined';
            this.effExpDateText = '???';
        }
    };
    return ProgramStatus;
}());



/***/ })

});
//# sourceMappingURL=common.chunk.js.map