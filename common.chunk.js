webpackJsonp(["common"],{

/***/ "../../../../../src/app/shared/model/client-configuration.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientConfiguration; });
var ClientConfiguration = (function () {
    function ClientConfiguration(clientConfig) {
        if (clientConfig) {
            this.name = clientConfig.name;
            this.chanEmailPriority = clientConfig.chanEmailPriority;
            this.chanIvrPriority = clientConfig.chanIvrPriority;
            this.chanSmsPriority = clientConfig.chanSmsPriority;
            this.chanMailPriority = clientConfig.chanMailPriority;
            this.chanMobilePriority = clientConfig.chanMobilePriority;
            this.chanMandatory = clientConfig.chanMandatory;
        }
        else {
            this.chanEmailPriority = 0;
            this.chanIvrPriority = 0;
            this.chanSmsPriority = 0;
            this.chanMailPriority = 0;
            this.chanMobilePriority = 0;
            this.chanMandatory = 'No';
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
var ProgramConfiguration = (function () {
    // https://stackoverflow.com/questions/4511705/how-to-parse-json-to-receive-a-date-object-in-javascript
    function ProgramConfiguration(programConfig) {
        if (programConfig) {
            this.chanEmailPriority = programConfig.chanEmailPriority;
            this.name = programConfig.name;
            this.chanIvrPriority = programConfig.chanIvrPriority;
            this.chanSmsPriority = programConfig.chanSmsPriority;
            this.chanMailPriority = programConfig.chanMailPriority;
            this.chanMobilePriority = programConfig.chanMobilePriority;
            this.chanMandatory = programConfig.chanMandatory;
        }
        else {
            this.chanEmailPriority = 0;
            this.chanIvrPriority = 0;
            this.chanSmsPriority = 0;
            this.chanMailPriority = 0;
            this.chanMobilePriority = 0;
            this.chanMandatory = 'No';
        }
    }
    ProgramConfiguration.prototype.clone = function () {
        return new ProgramConfiguration(this);
    };
    return ProgramConfiguration;
}());



/***/ })

});
//# sourceMappingURL=common.chunk.js.map