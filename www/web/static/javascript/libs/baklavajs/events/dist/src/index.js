"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequentialHook = exports.Hook = exports.PreventableBaklavaEvent = exports.BaklavaEvent = void 0;
var tslib_1 = require("tslib");
/** Main event class for Baklava */
var BaklavaEvent = /** @class */ (function () {
    function BaklavaEvent() {
        this.listeners = new Map();
    }
    /**
     * Subscribe to the event
     * @param token A token that can be used to unsubscribe from the event later on
     * @param listener A callback that will be invoked when the event occurs
     */
    BaklavaEvent.prototype.addListener = function (token, listener) {
        this.listeners.set(token, listener);
    };
    /**
     * Remove a listener
     * @param token The token that was specified when subscribing to the listener.
     * An invalid token does not result in an error.
     */
    BaklavaEvent.prototype.removeListener = function (token) {
        if (this.listeners.has(token)) {
            this.listeners.delete(token);
        }
    };
    /**
     * Invoke all listeners
     * @param data The data to invoke the listeners with.
     */
    BaklavaEvent.prototype.emit = function (data) {
        this.listeners.forEach(function (l) { return l(data); });
    };
    return BaklavaEvent;
}());
exports.BaklavaEvent = BaklavaEvent;
/** Extension for the [[BaklavaEvent]] class. A listener can return `false` to prevent
 * this event from happening.
 */
var PreventableBaklavaEvent = /** @class */ (function (_super) {
    tslib_1.__extends(PreventableBaklavaEvent, _super);
    function PreventableBaklavaEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Invoke all listeners.
     * @param data The data to invoke all listeners with
     * @returns `true` when one of the listeners requested to prevent the event, otherwise `false`
     */
    PreventableBaklavaEvent.prototype.emit = function (data) {
        var e_1, _a;
        try {
            for (var _b = tslib_1.__values(Array.from(this.listeners.values())), _c = _b.next(); !_c.done; _c = _b.next()) {
                var l = _c.value;
                if (l(data) === false) {
                    return true;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return false;
    };
    return PreventableBaklavaEvent;
}(BaklavaEvent));
exports.PreventableBaklavaEvent = PreventableBaklavaEvent;
/** Base class for hooks in Baklava */
var Hook = /** @class */ (function () {
    function Hook() {
        this.tapMap = new Map();
        this.taps = [];
    }
    Hook.prototype.tap = function (token, tapFn) {
        if (this.tapMap.has(token)) {
            this.untap(token);
        }
        this.tapMap.set(token, tapFn);
        this.taps.push(tapFn);
    };
    Hook.prototype.untap = function (token) {
        if (this.tapMap.has(token)) {
            var tapFn = this.tapMap.get(token);
            this.tapMap.delete(token);
            var i = this.taps.indexOf(tapFn);
            if (i >= 0) {
                this.taps.splice(i, 1);
            }
        }
    };
    return Hook;
}());
exports.Hook = Hook;
/** This class will run the taps one after each other and pass the data from every tap to another. */
var SequentialHook = /** @class */ (function (_super) {
    tslib_1.__extends(SequentialHook, _super);
    function SequentialHook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SequentialHook.prototype.execute = function (data) {
        var e_2, _a;
        var currentValue = data;
        try {
            for (var _b = tslib_1.__values(this.taps), _c = _b.next(); !_c.done; _c = _b.next()) {
                var tapFn = _c.value;
                currentValue = tapFn(currentValue);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return currentValue;
    };
    return SequentialHook;
}(Hook));
exports.SequentialHook = SequentialHook;
