"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBrowser = void 0;
//     NoFlo - Flow-Based Programming for JavaScript
//     (c) 2014-2017 Flowhub UG
//     NoFlo may be freely distributed under the MIT license
//
// Platform detection method
/* eslint-env browser, node */
function isBrowser() {
    if ((typeof process !== 'undefined') && process.execPath && process.execPath.match(/node|iojs/)) {
        return false;
    }
    return true;
}
exports.isBrowser = isBrowser;
;
//# sourceMappingURL=Platform.js.map