(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define("BaklavaJSRendererVue", ["vue"], factory);
	else if(typeof exports === 'object')
		exports["BaklavaJSRendererVue"] = factory(require("vue"));
	else
		root["BaklavaJSRendererVue"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8976__) {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 4499:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ DOMRectReadOnly)
/* harmony export */ });
/* harmony import */ var _utils_freeze__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4451);

var DOMRectReadOnly = (function () {
    function DOMRectReadOnly(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.top = this.y;
        this.left = this.x;
        this.bottom = this.top + this.height;
        this.right = this.left + this.width;
        return (0,_utils_freeze__WEBPACK_IMPORTED_MODULE_0__/* .freeze */ .v)(this);
    }
    DOMRectReadOnly.prototype.toJSON = function () {
        var _a = this, x = _a.x, y = _a.y, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left, width = _a.width, height = _a.height;
        return { x: x, y: y, top: top, right: right, bottom: bottom, left: left, width: width, height: height };
    };
    DOMRectReadOnly.fromRect = function (rectangle) {
        return new DOMRectReadOnly(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    };
    return DOMRectReadOnly;
}());



/***/ }),

/***/ 9830:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ ResizeObservation)
/* harmony export */ });
/* harmony import */ var _ResizeObserverBoxOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7338);
/* harmony import */ var _algorithms_calculateBoxSize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4541);
/* harmony import */ var _utils_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1044);



var skipNotifyOnElement = function (target) {
    return !(0,_utils_element__WEBPACK_IMPORTED_MODULE_2__/* .isSVG */ .zd)(target)
        && !(0,_utils_element__WEBPACK_IMPORTED_MODULE_2__/* .isReplacedElement */ .jD)(target)
        && getComputedStyle(target).display === 'inline';
};
var ResizeObservation = (function () {
    function ResizeObservation(target, observedBox) {
        this.target = target;
        this.observedBox = observedBox || _ResizeObserverBoxOptions__WEBPACK_IMPORTED_MODULE_0__/* .ResizeObserverBoxOptions.CONTENT_BOX */ .z.CONTENT_BOX;
        this.lastReportedSize = {
            inlineSize: 0,
            blockSize: 0
        };
    }
    ResizeObservation.prototype.isActive = function () {
        var size = (0,_algorithms_calculateBoxSize__WEBPACK_IMPORTED_MODULE_1__/* .calculateBoxSize */ .Y)(this.target, this.observedBox, true);
        if (skipNotifyOnElement(this.target)) {
            this.lastReportedSize = size;
        }
        if (this.lastReportedSize.inlineSize !== size.inlineSize
            || this.lastReportedSize.blockSize !== size.blockSize) {
            return true;
        }
        return false;
    };
    return ResizeObservation;
}());



/***/ }),

/***/ 1598:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ ResizeObserver)
/* harmony export */ });
/* harmony import */ var _ResizeObserverController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8591);
/* harmony import */ var _utils_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1044);


var ResizeObserver = (function () {
    function ResizeObserver(callback) {
        if (arguments.length === 0) {
            throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
        }
        if (typeof callback !== 'function') {
            throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
        }
        _ResizeObserverController__WEBPACK_IMPORTED_MODULE_0__/* .ResizeObserverController.connect */ .M.connect(this, callback);
    }
    ResizeObserver.prototype.observe = function (target, options) {
        if (arguments.length === 0) {
            throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
        }
        if (!(0,_utils_element__WEBPACK_IMPORTED_MODULE_1__/* .isElement */ .kK)(target)) {
            throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
        }
        _ResizeObserverController__WEBPACK_IMPORTED_MODULE_0__/* .ResizeObserverController.observe */ .M.observe(this, target, options);
    };
    ResizeObserver.prototype.unobserve = function (target) {
        if (arguments.length === 0) {
            throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
        }
        if (!(0,_utils_element__WEBPACK_IMPORTED_MODULE_1__/* .isElement */ .kK)(target)) {
            throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
        }
        _ResizeObserverController__WEBPACK_IMPORTED_MODULE_0__/* .ResizeObserverController.unobserve */ .M.unobserve(this, target);
    };
    ResizeObserver.prototype.disconnect = function () {
        _ResizeObserverController__WEBPACK_IMPORTED_MODULE_0__/* .ResizeObserverController.disconnect */ .M.disconnect(this);
    };
    ResizeObserver.toString = function () {
        return 'function ResizeObserver () { [polyfill code] }';
    };
    return ResizeObserver;
}());



/***/ }),

/***/ 7338:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ ResizeObserverBoxOptions)
/* harmony export */ });
var ResizeObserverBoxOptions;
(function (ResizeObserverBoxOptions) {
    ResizeObserverBoxOptions["BORDER_BOX"] = "border-box";
    ResizeObserverBoxOptions["CONTENT_BOX"] = "content-box";
    ResizeObserverBoxOptions["DEVICE_PIXEL_CONTENT_BOX"] = "device-pixel-content-box";
})(ResizeObserverBoxOptions || (ResizeObserverBoxOptions = {}));



/***/ }),

/***/ 8591:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ ResizeObserverController)
/* harmony export */ });
/* harmony import */ var _utils_scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3324);
/* harmony import */ var _ResizeObservation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9830);
/* harmony import */ var _ResizeObserverDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(464);
/* harmony import */ var _utils_resizeObservers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8810);




var observerMap = new WeakMap();
var getObservationIndex = function (observationTargets, target) {
    for (var i = 0; i < observationTargets.length; i += 1) {
        if (observationTargets[i].target === target) {
            return i;
        }
    }
    return -1;
};
var ResizeObserverController = (function () {
    function ResizeObserverController() {
    }
    ResizeObserverController.connect = function (resizeObserver, callback) {
        var detail = new _ResizeObserverDetail__WEBPACK_IMPORTED_MODULE_2__/* .ResizeObserverDetail */ .r(resizeObserver, callback);
        observerMap.set(resizeObserver, detail);
    };
    ResizeObserverController.observe = function (resizeObserver, target, options) {
        var detail = observerMap.get(resizeObserver);
        var firstObservation = detail.observationTargets.length === 0;
        if (getObservationIndex(detail.observationTargets, target) < 0) {
            firstObservation && _utils_resizeObservers__WEBPACK_IMPORTED_MODULE_3__/* .resizeObservers.push */ .C.push(detail);
            detail.observationTargets.push(new _ResizeObservation__WEBPACK_IMPORTED_MODULE_1__/* .ResizeObservation */ .Q(target, options && options.box));
            (0,_utils_scheduler__WEBPACK_IMPORTED_MODULE_0__/* .updateCount */ .t)(1);
            _utils_scheduler__WEBPACK_IMPORTED_MODULE_0__/* .scheduler.schedule */ .p.schedule();
        }
    };
    ResizeObserverController.unobserve = function (resizeObserver, target) {
        var detail = observerMap.get(resizeObserver);
        var index = getObservationIndex(detail.observationTargets, target);
        var lastObservation = detail.observationTargets.length === 1;
        if (index >= 0) {
            lastObservation && _utils_resizeObservers__WEBPACK_IMPORTED_MODULE_3__/* .resizeObservers.splice */ .C.splice(_utils_resizeObservers__WEBPACK_IMPORTED_MODULE_3__/* .resizeObservers.indexOf */ .C.indexOf(detail), 1);
            detail.observationTargets.splice(index, 1);
            (0,_utils_scheduler__WEBPACK_IMPORTED_MODULE_0__/* .updateCount */ .t)(-1);
        }
    };
    ResizeObserverController.disconnect = function (resizeObserver) {
        var _this = this;
        var detail = observerMap.get(resizeObserver);
        detail.observationTargets.slice().forEach(function (ot) { return _this.unobserve(resizeObserver, ot.target); });
        detail.activeTargets.splice(0, detail.activeTargets.length);
    };
    return ResizeObserverController;
}());



/***/ }),

/***/ 464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ ResizeObserverDetail)
/* harmony export */ });
var ResizeObserverDetail = (function () {
    function ResizeObserverDetail(resizeObserver, callback) {
        this.activeTargets = [];
        this.skippedTargets = [];
        this.observationTargets = [];
        this.observer = resizeObserver;
        this.callback = callback;
    }
    return ResizeObserverDetail;
}());



/***/ }),

/***/ 3106:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ ResizeObserverEntry)
/* harmony export */ });
/* harmony import */ var _algorithms_calculateBoxSize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4541);
/* harmony import */ var _utils_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4451);


var ResizeObserverEntry = (function () {
    function ResizeObserverEntry(target) {
        var boxes = (0,_algorithms_calculateBoxSize__WEBPACK_IMPORTED_MODULE_0__/* .calculateBoxSizes */ .u)(target);
        this.target = target;
        this.contentRect = boxes.contentRect;
        this.borderBoxSize = (0,_utils_freeze__WEBPACK_IMPORTED_MODULE_1__/* .freeze */ .v)([boxes.borderBoxSize]);
        this.contentBoxSize = (0,_utils_freeze__WEBPACK_IMPORTED_MODULE_1__/* .freeze */ .v)([boxes.contentBoxSize]);
        this.devicePixelContentBoxSize = (0,_utils_freeze__WEBPACK_IMPORTED_MODULE_1__/* .freeze */ .v)([boxes.devicePixelContentBoxSize]);
    }
    return ResizeObserverEntry;
}());



/***/ }),

/***/ 1839:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ ResizeObserverSize)
/* harmony export */ });
/* harmony import */ var _utils_freeze__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4451);

var ResizeObserverSize = (function () {
    function ResizeObserverSize(inlineSize, blockSize) {
        this.inlineSize = inlineSize;
        this.blockSize = blockSize;
        (0,_utils_freeze__WEBPACK_IMPORTED_MODULE_0__/* .freeze */ .v)(this);
    }
    return ResizeObserverSize;
}());



/***/ }),

/***/ 101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ broadcastActiveObservations)
/* harmony export */ });
/* harmony import */ var _utils_resizeObservers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8810);
/* harmony import */ var _ResizeObserverEntry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3106);
/* harmony import */ var _calculateDepthForNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6508);
/* harmony import */ var _calculateBoxSize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4541);




var broadcastActiveObservations = function () {
    var shallowestDepth = Infinity;
    var callbacks = [];
    _utils_resizeObservers__WEBPACK_IMPORTED_MODULE_2__/* .resizeObservers.forEach */ .C.forEach(function processObserver(ro) {
        if (ro.activeTargets.length === 0) {
            return;
        }
        var entries = [];
        ro.activeTargets.forEach(function processTarget(ot) {
            var entry = new _ResizeObserverEntry__WEBPACK_IMPORTED_MODULE_0__/* .ResizeObserverEntry */ .A(ot.target);
            var targetDepth = (0,_calculateDepthForNode__WEBPACK_IMPORTED_MODULE_3__/* .calculateDepthForNode */ .D)(ot.target);
            entries.push(entry);
            ot.lastReportedSize = (0,_calculateBoxSize__WEBPACK_IMPORTED_MODULE_1__/* .calculateBoxSize */ .Y)(ot.target, ot.observedBox);
            if (targetDepth < shallowestDepth) {
                shallowestDepth = targetDepth;
            }
        });
        callbacks.push(function resizeObserverCallback() {
            ro.callback.call(ro.observer, entries, ro.observer);
        });
        ro.activeTargets.splice(0, ro.activeTargets.length);
    });
    for (var _i = 0, callbacks_1 = callbacks; _i < callbacks_1.length; _i++) {
        var callback = callbacks_1[_i];
        callback();
    }
    return shallowestDepth;
};



/***/ }),

/***/ 4541:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ calculateBoxSize),
/* harmony export */   "u": () => (/* binding */ calculateBoxSizes)
/* harmony export */ });
/* harmony import */ var _ResizeObserverBoxOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7338);
/* harmony import */ var _ResizeObserverSize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1839);
/* harmony import */ var _DOMRectReadOnly__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4499);
/* harmony import */ var _utils_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1044);
/* harmony import */ var _utils_freeze__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4451);
/* harmony import */ var _utils_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6842);






var cache = new WeakMap();
var scrollRegexp = /auto|scroll/;
var verticalRegexp = /^tb|vertical/;
var IE = (/msie|trident/i).test(_utils_global__WEBPACK_IMPORTED_MODULE_3__/* .global.navigator */ .C.navigator && _utils_global__WEBPACK_IMPORTED_MODULE_3__/* .global.navigator.userAgent */ .C.navigator.userAgent);
var parseDimension = function (pixel) { return parseFloat(pixel || '0'); };
var size = function (inlineSize, blockSize, switchSizes) {
    if (inlineSize === void 0) { inlineSize = 0; }
    if (blockSize === void 0) { blockSize = 0; }
    if (switchSizes === void 0) { switchSizes = false; }
    return new _ResizeObserverSize__WEBPACK_IMPORTED_MODULE_1__/* .ResizeObserverSize */ .D((switchSizes ? blockSize : inlineSize) || 0, (switchSizes ? inlineSize : blockSize) || 0);
};
var zeroBoxes = (0,_utils_freeze__WEBPACK_IMPORTED_MODULE_4__/* .freeze */ .v)({
    devicePixelContentBoxSize: size(),
    borderBoxSize: size(),
    contentBoxSize: size(),
    contentRect: new _DOMRectReadOnly__WEBPACK_IMPORTED_MODULE_2__/* .DOMRectReadOnly */ .N(0, 0, 0, 0)
});
var calculateBoxSizes = function (target, forceRecalculation) {
    if (forceRecalculation === void 0) { forceRecalculation = false; }
    if (cache.has(target) && !forceRecalculation) {
        return cache.get(target);
    }
    if ((0,_utils_element__WEBPACK_IMPORTED_MODULE_5__/* .isHidden */ .xj)(target)) {
        cache.set(target, zeroBoxes);
        return zeroBoxes;
    }
    var cs = getComputedStyle(target);
    var svg = (0,_utils_element__WEBPACK_IMPORTED_MODULE_5__/* .isSVG */ .zd)(target) && target.ownerSVGElement && target.getBBox();
    var removePadding = !IE && cs.boxSizing === 'border-box';
    var switchSizes = verticalRegexp.test(cs.writingMode || '');
    var canScrollVertically = !svg && scrollRegexp.test(cs.overflowY || '');
    var canScrollHorizontally = !svg && scrollRegexp.test(cs.overflowX || '');
    var paddingTop = svg ? 0 : parseDimension(cs.paddingTop);
    var paddingRight = svg ? 0 : parseDimension(cs.paddingRight);
    var paddingBottom = svg ? 0 : parseDimension(cs.paddingBottom);
    var paddingLeft = svg ? 0 : parseDimension(cs.paddingLeft);
    var borderTop = svg ? 0 : parseDimension(cs.borderTopWidth);
    var borderRight = svg ? 0 : parseDimension(cs.borderRightWidth);
    var borderBottom = svg ? 0 : parseDimension(cs.borderBottomWidth);
    var borderLeft = svg ? 0 : parseDimension(cs.borderLeftWidth);
    var horizontalPadding = paddingLeft + paddingRight;
    var verticalPadding = paddingTop + paddingBottom;
    var horizontalBorderArea = borderLeft + borderRight;
    var verticalBorderArea = borderTop + borderBottom;
    var horizontalScrollbarThickness = !canScrollHorizontally ? 0 : target.offsetHeight - verticalBorderArea - target.clientHeight;
    var verticalScrollbarThickness = !canScrollVertically ? 0 : target.offsetWidth - horizontalBorderArea - target.clientWidth;
    var widthReduction = removePadding ? horizontalPadding + horizontalBorderArea : 0;
    var heightReduction = removePadding ? verticalPadding + verticalBorderArea : 0;
    var contentWidth = svg ? svg.width : parseDimension(cs.width) - widthReduction - verticalScrollbarThickness;
    var contentHeight = svg ? svg.height : parseDimension(cs.height) - heightReduction - horizontalScrollbarThickness;
    var borderBoxWidth = contentWidth + horizontalPadding + verticalScrollbarThickness + horizontalBorderArea;
    var borderBoxHeight = contentHeight + verticalPadding + horizontalScrollbarThickness + verticalBorderArea;
    var boxes = (0,_utils_freeze__WEBPACK_IMPORTED_MODULE_4__/* .freeze */ .v)({
        devicePixelContentBoxSize: size(Math.round(contentWidth * devicePixelRatio), Math.round(contentHeight * devicePixelRatio), switchSizes),
        borderBoxSize: size(borderBoxWidth, borderBoxHeight, switchSizes),
        contentBoxSize: size(contentWidth, contentHeight, switchSizes),
        contentRect: new _DOMRectReadOnly__WEBPACK_IMPORTED_MODULE_2__/* .DOMRectReadOnly */ .N(paddingLeft, paddingTop, contentWidth, contentHeight)
    });
    cache.set(target, boxes);
    return boxes;
};
var calculateBoxSize = function (target, observedBox, forceRecalculation) {
    var _a = calculateBoxSizes(target, forceRecalculation), borderBoxSize = _a.borderBoxSize, contentBoxSize = _a.contentBoxSize, devicePixelContentBoxSize = _a.devicePixelContentBoxSize;
    switch (observedBox) {
        case _ResizeObserverBoxOptions__WEBPACK_IMPORTED_MODULE_0__/* .ResizeObserverBoxOptions.DEVICE_PIXEL_CONTENT_BOX */ .z.DEVICE_PIXEL_CONTENT_BOX:
            return devicePixelContentBoxSize;
        case _ResizeObserverBoxOptions__WEBPACK_IMPORTED_MODULE_0__/* .ResizeObserverBoxOptions.BORDER_BOX */ .z.BORDER_BOX:
            return borderBoxSize;
        default:
            return contentBoxSize;
    }
};



/***/ }),

/***/ 6508:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ calculateDepthForNode)
/* harmony export */ });
/* harmony import */ var _utils_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1044);

var calculateDepthForNode = function (node) {
    if ((0,_utils_element__WEBPACK_IMPORTED_MODULE_0__/* .isHidden */ .xj)(node)) {
        return Infinity;
    }
    var depth = 0;
    var parent = node.parentNode;
    while (parent) {
        depth += 1;
        parent = parent.parentNode;
    }
    return depth;
};



/***/ }),

/***/ 1831:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ deliverResizeLoopError)
/* harmony export */ });
var msg = 'ResizeObserver loop completed with undelivered notifications.';
var deliverResizeLoopError = function () {
    var event;
    if (typeof ErrorEvent === 'function') {
        event = new ErrorEvent('error', {
            message: msg
        });
    }
    else {
        event = document.createEvent('Event');
        event.initEvent('error', false, false);
        event.message = msg;
    }
    window.dispatchEvent(event);
};



/***/ }),

/***/ 4227:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ gatherActiveObservationsAtDepth)
/* harmony export */ });
/* harmony import */ var _utils_resizeObservers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8810);
/* harmony import */ var _calculateDepthForNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6508);


var gatherActiveObservationsAtDepth = function (depth) {
    _utils_resizeObservers__WEBPACK_IMPORTED_MODULE_0__/* .resizeObservers.forEach */ .C.forEach(function processObserver(ro) {
        ro.activeTargets.splice(0, ro.activeTargets.length);
        ro.skippedTargets.splice(0, ro.skippedTargets.length);
        ro.observationTargets.forEach(function processTarget(ot) {
            if (ot.isActive()) {
                if ((0,_calculateDepthForNode__WEBPACK_IMPORTED_MODULE_1__/* .calculateDepthForNode */ .D)(ot.target) > depth) {
                    ro.activeTargets.push(ot);
                }
                else {
                    ro.skippedTargets.push(ot);
                }
            }
        });
    });
};



/***/ }),

/***/ 8542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ hasActiveObservations)
/* harmony export */ });
/* harmony import */ var _utils_resizeObservers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8810);

var hasActiveObservations = function () {
    return _utils_resizeObservers__WEBPACK_IMPORTED_MODULE_0__/* .resizeObservers.some */ .C.some(function (ro) { return ro.activeTargets.length > 0; });
};



/***/ }),

/***/ 7912:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ hasSkippedObservations)
/* harmony export */ });
/* harmony import */ var _utils_resizeObservers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8810);

var hasSkippedObservations = function () {
    return _utils_resizeObservers__WEBPACK_IMPORTED_MODULE_0__/* .resizeObservers.some */ .C.some(function (ro) { return ro.skippedTargets.length > 0; });
};



/***/ }),

/***/ 1283:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "do": () => (/* reexport safe */ _ResizeObserver__WEBPACK_IMPORTED_MODULE_0__.d)
/* harmony export */ });
/* harmony import */ var _ResizeObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1598);
/* harmony import */ var _ResizeObserverEntry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3106);
/* harmony import */ var _ResizeObserverSize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1839);





/***/ }),

/***/ 1044:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "jD": () => (/* binding */ isReplacedElement),
/* harmony export */   "kK": () => (/* binding */ isElement),
/* harmony export */   "xj": () => (/* binding */ isHidden),
/* harmony export */   "zd": () => (/* binding */ isSVG)
/* harmony export */ });
var isSVG = function (target) { return target instanceof SVGElement && 'getBBox' in target; };
var isHidden = function (target) {
    if (isSVG(target)) {
        var _a = target.getBBox(), width = _a.width, height = _a.height;
        return !width && !height;
    }
    var _b = target, offsetWidth = _b.offsetWidth, offsetHeight = _b.offsetHeight;
    return !(offsetWidth || offsetHeight || target.getClientRects().length);
};
var isElement = function (obj) {
    var _a, _b;
    if (obj instanceof Element) {
        return true;
    }
    var scope = (_b = (_a = obj) === null || _a === void 0 ? void 0 : _a.ownerDocument) === null || _b === void 0 ? void 0 : _b.defaultView;
    return !!(scope && obj instanceof scope.Element);
};
var isReplacedElement = function (target) {
    switch (target.tagName) {
        case 'INPUT':
            if (target.type !== 'image') {
                break;
            }
        case 'VIDEO':
        case 'AUDIO':
        case 'EMBED':
        case 'OBJECT':
        case 'CANVAS':
        case 'IFRAME':
        case 'IMG':
            return true;
    }
    return false;
};



/***/ }),

/***/ 4451:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ freeze)
/* harmony export */ });
var freeze = function (obj) { return Object.freeze(obj); };


/***/ }),

/***/ 6842:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ global)
/* harmony export */ });
var global = typeof window !== 'undefined' ? window : {};


/***/ }),

/***/ 4521:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ process)
/* harmony export */ });
/* harmony import */ var _algorithms_hasActiveObservations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8542);
/* harmony import */ var _algorithms_hasSkippedObservations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7912);
/* harmony import */ var _algorithms_deliverResizeLoopError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1831);
/* harmony import */ var _algorithms_broadcastActiveObservations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(101);
/* harmony import */ var _algorithms_gatherActiveObservationsAtDepth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4227);





var process = function () {
    var depth = 0;
    (0,_algorithms_gatherActiveObservationsAtDepth__WEBPACK_IMPORTED_MODULE_1__/* .gatherActiveObservationsAtDepth */ .T)(depth);
    while ((0,_algorithms_hasActiveObservations__WEBPACK_IMPORTED_MODULE_2__/* .hasActiveObservations */ .m)()) {
        depth = (0,_algorithms_broadcastActiveObservations__WEBPACK_IMPORTED_MODULE_0__/* .broadcastActiveObservations */ .L)();
        (0,_algorithms_gatherActiveObservationsAtDepth__WEBPACK_IMPORTED_MODULE_1__/* .gatherActiveObservationsAtDepth */ .T)(depth);
    }
    if ((0,_algorithms_hasSkippedObservations__WEBPACK_IMPORTED_MODULE_3__/* .hasSkippedObservations */ .H)()) {
        (0,_algorithms_deliverResizeLoopError__WEBPACK_IMPORTED_MODULE_4__/* .deliverResizeLoopError */ .L)();
    }
    return depth > 0;
};



/***/ }),

/***/ 3677:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ queueMicroTask)
/* harmony export */ });
var trigger;
var callbacks = [];
var notify = function () { return callbacks.splice(0).forEach(function (cb) { return cb(); }); };
var queueMicroTask = function (callback) {
    if (!trigger) {
        var toggle_1 = 0;
        var el_1 = document.createTextNode('');
        var config = { characterData: true };
        new MutationObserver(function () { return notify(); }).observe(el_1, config);
        trigger = function () { el_1.textContent = "" + (toggle_1 ? toggle_1-- : toggle_1++); };
    }
    callbacks.push(callback);
    trigger();
};



/***/ }),

/***/ 7745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ queueResizeObserver)
/* harmony export */ });
/* harmony import */ var _queueMicroTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3677);

var queueResizeObserver = function (cb) {
    (0,_queueMicroTask__WEBPACK_IMPORTED_MODULE_0__/* .queueMicroTask */ .G)(function ResizeObserver() {
        requestAnimationFrame(cb);
    });
};



/***/ }),

/***/ 8810:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ resizeObservers)
/* harmony export */ });
var resizeObservers = [];



/***/ }),

/***/ 3324:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ scheduler),
/* harmony export */   "t": () => (/* binding */ updateCount)
/* harmony export */ });
/* harmony import */ var _process__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4521);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6842);
/* harmony import */ var _queueResizeObserver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7745);



var watching = 0;
var isWatching = function () { return !!watching; };
var CATCH_PERIOD = 250;
var observerConfig = { attributes: true, characterData: true, childList: true, subtree: true };
var events = [
    'resize',
    'load',
    'transitionend',
    'animationend',
    'animationstart',
    'animationiteration',
    'keyup',
    'keydown',
    'mouseup',
    'mousedown',
    'mouseover',
    'mouseout',
    'blur',
    'focus'
];
var time = function (timeout) {
    if (timeout === void 0) { timeout = 0; }
    return Date.now() + timeout;
};
var scheduled = false;
var Scheduler = (function () {
    function Scheduler() {
        var _this = this;
        this.stopped = true;
        this.listener = function () { return _this.schedule(); };
    }
    Scheduler.prototype.run = function (timeout) {
        var _this = this;
        if (timeout === void 0) { timeout = CATCH_PERIOD; }
        if (scheduled) {
            return;
        }
        scheduled = true;
        var until = time(timeout);
        (0,_queueResizeObserver__WEBPACK_IMPORTED_MODULE_2__/* .queueResizeObserver */ .p)(function () {
            var elementsHaveResized = false;
            try {
                elementsHaveResized = (0,_process__WEBPACK_IMPORTED_MODULE_0__/* .process */ .N)();
            }
            finally {
                scheduled = false;
                timeout = until - time();
                if (!isWatching()) {
                    return;
                }
                if (elementsHaveResized) {
                    _this.run(1000);
                }
                else if (timeout > 0) {
                    _this.run(timeout);
                }
                else {
                    _this.start();
                }
            }
        });
    };
    Scheduler.prototype.schedule = function () {
        this.stop();
        this.run();
    };
    Scheduler.prototype.observe = function () {
        var _this = this;
        var cb = function () { return _this.observer && _this.observer.observe(document.body, observerConfig); };
        document.body ? cb() : _global__WEBPACK_IMPORTED_MODULE_1__/* .global.addEventListener */ .C.addEventListener('DOMContentLoaded', cb);
    };
    Scheduler.prototype.start = function () {
        var _this = this;
        if (this.stopped) {
            this.stopped = false;
            this.observer = new MutationObserver(this.listener);
            this.observe();
            events.forEach(function (name) { return _global__WEBPACK_IMPORTED_MODULE_1__/* .global.addEventListener */ .C.addEventListener(name, _this.listener, true); });
        }
    };
    Scheduler.prototype.stop = function () {
        var _this = this;
        if (!this.stopped) {
            this.observer && this.observer.disconnect();
            events.forEach(function (name) { return _global__WEBPACK_IMPORTED_MODULE_1__/* .global.removeEventListener */ .C.removeEventListener(name, _this.listener, true); });
            this.stopped = true;
        }
    };
    return Scheduler;
}());
var scheduler = new Scheduler();
var updateCount = function (n) {
    !watching && n > 0 && scheduler.start();
    watching += n;
    !watching && scheduler.stop();
};



/***/ }),

/***/ 1383:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;

 /*! 
  * portal-vue © Thorsten Lünborg, 2019 
  * 
  * Version: 2.1.7
  * 
  * LICENCE: MIT 
  * 
  * https://github.com/linusborg/portal-vue
  * 
 */



__webpack_unused_export__ = ({ value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Vue = _interopDefault(__webpack_require__(8976));

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var inBrowser = typeof window !== 'undefined';
function freeze(item) {
  if (Array.isArray(item) || _typeof(item) === 'object') {
    return Object.freeze(item);
  }

  return item;
}
function combinePassengers(transports) {
  var slotProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return transports.reduce(function (passengers, transport) {
    var temp = transport.passengers[0];
    var newPassengers = typeof temp === 'function' ? temp(slotProps) : transport.passengers;
    return passengers.concat(newPassengers);
  }, []);
}
function stableSort(array, compareFn) {
  return array.map(function (v, idx) {
    return [idx, v];
  }).sort(function (a, b) {
    return compareFn(a[1], b[1]) || a[0] - b[0];
  }).map(function (c) {
    return c[1];
  });
}
function pick(obj, keys) {
  return keys.reduce(function (acc, key) {
    if (obj.hasOwnProperty(key)) {
      acc[key] = obj[key];
    }

    return acc;
  }, {});
}

var transports = {};
var targets = {};
var sources = {};
var Wormhole = Vue.extend({
  data: function data() {
    return {
      transports: transports,
      targets: targets,
      sources: sources,
      trackInstances: inBrowser
    };
  },
  methods: {
    open: function open(transport) {
      if (!inBrowser) return;
      var to = transport.to,
          from = transport.from,
          passengers = transport.passengers,
          _transport$order = transport.order,
          order = _transport$order === void 0 ? Infinity : _transport$order;
      if (!to || !from || !passengers) return;
      var newTransport = {
        to: to,
        from: from,
        passengers: freeze(passengers),
        order: order
      };
      var keys = Object.keys(this.transports);

      if (keys.indexOf(to) === -1) {
        Vue.set(this.transports, to, []);
      }

      var currentIndex = this.$_getTransportIndex(newTransport); // Copying the array here so that the PortalTarget change event will actually contain two distinct arrays

      var newTransports = this.transports[to].slice(0);

      if (currentIndex === -1) {
        newTransports.push(newTransport);
      } else {
        newTransports[currentIndex] = newTransport;
      }

      this.transports[to] = stableSort(newTransports, function (a, b) {
        return a.order - b.order;
      });
    },
    close: function close(transport) {
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var to = transport.to,
          from = transport.from;
      if (!to || !from && force === false) return;

      if (!this.transports[to]) {
        return;
      }

      if (force) {
        this.transports[to] = [];
      } else {
        var index = this.$_getTransportIndex(transport);

        if (index >= 0) {
          // Copying the array here so that the PortalTarget change event will actually contain two distinct arrays
          var newTransports = this.transports[to].slice(0);
          newTransports.splice(index, 1);
          this.transports[to] = newTransports;
        }
      }
    },
    registerTarget: function registerTarget(target, vm, force) {
      if (!inBrowser) return;

      if (this.trackInstances && !force && this.targets[target]) {
        console.warn("[portal-vue]: Target ".concat(target, " already exists"));
      }

      this.$set(this.targets, target, Object.freeze([vm]));
    },
    unregisterTarget: function unregisterTarget(target) {
      this.$delete(this.targets, target);
    },
    registerSource: function registerSource(source, vm, force) {
      if (!inBrowser) return;

      if (this.trackInstances && !force && this.sources[source]) {
        console.warn("[portal-vue]: source ".concat(source, " already exists"));
      }

      this.$set(this.sources, source, Object.freeze([vm]));
    },
    unregisterSource: function unregisterSource(source) {
      this.$delete(this.sources, source);
    },
    hasTarget: function hasTarget(to) {
      return !!(this.targets[to] && this.targets[to][0]);
    },
    hasSource: function hasSource(to) {
      return !!(this.sources[to] && this.sources[to][0]);
    },
    hasContentFor: function hasContentFor(to) {
      return !!this.transports[to] && !!this.transports[to].length;
    },
    // Internal
    $_getTransportIndex: function $_getTransportIndex(_ref) {
      var to = _ref.to,
          from = _ref.from;

      for (var i in this.transports[to]) {
        if (this.transports[to][i].from === from) {
          return +i;
        }
      }

      return -1;
    }
  }
});
var wormhole = new Wormhole(transports);

var _id = 1;
var Portal = Vue.extend({
  name: 'portal',
  props: {
    disabled: {
      type: Boolean
    },
    name: {
      type: String,
      default: function _default() {
        return String(_id++);
      }
    },
    order: {
      type: Number,
      default: 0
    },
    slim: {
      type: Boolean
    },
    slotProps: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    tag: {
      type: String,
      default: 'DIV'
    },
    to: {
      type: String,
      default: function _default() {
        return String(Math.round(Math.random() * 10000000));
      }
    }
  },
  created: function created() {
    var _this = this;

    this.$nextTick(function () {
      wormhole.registerSource(_this.name, _this);
    });
  },
  mounted: function mounted() {
    if (!this.disabled) {
      this.sendUpdate();
    }
  },
  updated: function updated() {
    if (this.disabled) {
      this.clear();
    } else {
      this.sendUpdate();
    }
  },
  beforeDestroy: function beforeDestroy() {
    wormhole.unregisterSource(this.name);
    this.clear();
  },
  watch: {
    to: function to(newValue, oldValue) {
      oldValue && oldValue !== newValue && this.clear(oldValue);
      this.sendUpdate();
    }
  },
  methods: {
    clear: function clear(target) {
      var closer = {
        from: this.name,
        to: target || this.to
      };
      wormhole.close(closer);
    },
    normalizeSlots: function normalizeSlots() {
      return this.$scopedSlots.default ? [this.$scopedSlots.default] : this.$slots.default;
    },
    normalizeOwnChildren: function normalizeOwnChildren(children) {
      return typeof children === 'function' ? children(this.slotProps) : children;
    },
    sendUpdate: function sendUpdate() {
      var slotContent = this.normalizeSlots();

      if (slotContent) {
        var transport = {
          from: this.name,
          to: this.to,
          passengers: _toConsumableArray(slotContent),
          order: this.order
        };
        wormhole.open(transport);
      } else {
        this.clear();
      }
    }
  },
  render: function render(h) {
    var children = this.$slots.default || this.$scopedSlots.default || [];
    var Tag = this.tag;

    if (children && this.disabled) {
      return children.length <= 1 && this.slim ? this.normalizeOwnChildren(children)[0] : h(Tag, [this.normalizeOwnChildren(children)]);
    } else {
      return this.slim ? h() : h(Tag, {
        class: {
          'v-portal': true
        },
        style: {
          display: 'none'
        },
        key: 'v-portal-placeholder'
      });
    }
  }
});

var PortalTarget = Vue.extend({
  name: 'portalTarget',
  props: {
    multiple: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      required: true
    },
    slim: {
      type: Boolean,
      default: false
    },
    slotProps: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    tag: {
      type: String,
      default: 'div'
    },
    transition: {
      type: [String, Object, Function]
    }
  },
  data: function data() {
    return {
      transports: wormhole.transports,
      firstRender: true
    };
  },
  created: function created() {
    var _this = this;

    this.$nextTick(function () {
      wormhole.registerTarget(_this.name, _this);
    });
  },
  watch: {
    ownTransports: function ownTransports() {
      this.$emit('change', this.children().length > 0);
    },
    name: function name(newVal, oldVal) {
      /**
       * TODO
       * This should warn as well ...
       */
      wormhole.unregisterTarget(oldVal);
      wormhole.registerTarget(newVal, this);
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    if (this.transition) {
      this.$nextTick(function () {
        // only when we have a transition, because it causes a re-render
        _this2.firstRender = false;
      });
    }
  },
  beforeDestroy: function beforeDestroy() {
    wormhole.unregisterTarget(this.name);
  },
  computed: {
    ownTransports: function ownTransports() {
      var transports = this.transports[this.name] || [];

      if (this.multiple) {
        return transports;
      }

      return transports.length === 0 ? [] : [transports[transports.length - 1]];
    },
    passengers: function passengers() {
      return combinePassengers(this.ownTransports, this.slotProps);
    }
  },
  methods: {
    // can't be a computed prop because it has to "react" to $slot changes.
    children: function children() {
      return this.passengers.length !== 0 ? this.passengers : this.$scopedSlots.default ? this.$scopedSlots.default(this.slotProps) : this.$slots.default || [];
    },
    // can't be a computed prop because it has to "react" to this.children().
    noWrapper: function noWrapper() {
      var noWrapper = this.slim && !this.transition;

      if (noWrapper && this.children().length > 1) {
        console.warn('[portal-vue]: PortalTarget with `slim` option received more than one child element.');
      }

      return noWrapper;
    }
  },
  render: function render(h) {
    var noWrapper = this.noWrapper();
    var children = this.children();
    var Tag = this.transition || this.tag;
    return noWrapper ? children[0] : this.slim && !Tag ? h() : h(Tag, {
      props: {
        // if we have a transition component, pass the tag if it exists
        tag: this.transition && this.tag ? this.tag : undefined
      },
      class: {
        'vue-portal-target': true
      }
    }, children);
  }
});

var _id$1 = 0;
var portalProps = ['disabled', 'name', 'order', 'slim', 'slotProps', 'tag', 'to'];
var targetProps = ['multiple', 'transition'];
var MountingPortal = Vue.extend({
  name: 'MountingPortal',
  inheritAttrs: false,
  props: {
    append: {
      type: [Boolean, String]
    },
    bail: {
      type: Boolean
    },
    mountTo: {
      type: String,
      required: true
    },
    // Portal
    disabled: {
      type: Boolean
    },
    // name for the portal
    name: {
      type: String,
      default: function _default() {
        return 'mounted_' + String(_id$1++);
      }
    },
    order: {
      type: Number,
      default: 0
    },
    slim: {
      type: Boolean
    },
    slotProps: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    tag: {
      type: String,
      default: 'DIV'
    },
    // name for the target
    to: {
      type: String,
      default: function _default() {
        return String(Math.round(Math.random() * 10000000));
      }
    },
    // Target
    multiple: {
      type: Boolean,
      default: false
    },
    targetSlim: {
      type: Boolean
    },
    targetSlotProps: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    targetTag: {
      type: String,
      default: 'div'
    },
    transition: {
      type: [String, Object, Function]
    }
  },
  created: function created() {
    if (typeof document === 'undefined') return;
    var el = document.querySelector(this.mountTo);

    if (!el) {
      console.error("[portal-vue]: Mount Point '".concat(this.mountTo, "' not found in document"));
      return;
    }

    var props = this.$props; // Target already exists

    if (wormhole.targets[props.name]) {
      if (props.bail) {
        console.warn("[portal-vue]: Target ".concat(props.name, " is already mounted.\n        Aborting because 'bail: true' is set"));
      } else {
        this.portalTarget = wormhole.targets[props.name];
      }

      return;
    }

    var append = props.append;

    if (append) {
      var type = typeof append === 'string' ? append : 'DIV';
      var mountEl = document.createElement(type);
      el.appendChild(mountEl);
      el = mountEl;
    } // get props for target from $props
    // we have to rename a few of them


    var _props = pick(this.$props, targetProps);

    _props.slim = this.targetSlim;
    _props.tag = this.targetTag;
    _props.slotProps = this.targetSlotProps;
    _props.name = this.to;
    this.portalTarget = new PortalTarget({
      el: el,
      parent: this.$parent || this,
      propsData: _props
    });
  },
  beforeDestroy: function beforeDestroy() {
    var target = this.portalTarget;

    if (this.append) {
      var el = target.$el;
      el.parentNode.removeChild(el);
    }

    target.$destroy();
  },
  render: function render(h) {
    if (!this.portalTarget) {
      console.warn("[portal-vue] Target wasn't mounted");
      return h();
    } // if there's no "manual" scoped slot, so we create a <Portal> ourselves


    if (!this.$scopedSlots.manual) {
      var props = pick(this.$props, portalProps);
      return h(Portal, {
        props: props,
        attrs: this.$attrs,
        on: this.$listeners,
        scopedSlots: this.$scopedSlots
      }, this.$slots.default);
    } // else, we render the scoped slot


    var content = this.$scopedSlots.manual({
      to: this.to
    }); // if user used <template> for the scoped slot
    // content will be an array

    if (Array.isArray(content)) {
      content = content[0];
    }

    if (!content) return h();
    return content;
  }
});

function install(Vue$$1) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  Vue$$1.component(options.portalName || 'Portal', Portal);
  Vue$$1.component(options.portalTargetName || 'PortalTarget', PortalTarget);
  Vue$$1.component(options.MountingPortalName || 'MountingPortal', MountingPortal);
}

var index = {
  install: install
};

exports.ZP = index;
__webpack_unused_export__ = Portal;
__webpack_unused_export__ = PortalTarget;
__webpack_unused_export__ = MountingPortal;
__webpack_unused_export__ = wormhole;
//# sourceMappingURL=portal-vue.common.js.map


/***/ }),

/***/ 5163:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArray": () => (/* binding */ __spreadArray),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__values": () => (/* binding */ __values)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ }),

/***/ 3570:
/***/ (function(module) {

!function(e,n){ true?module.exports=n():0}(this,function(){var e="undefined"!=typeof window,n="undefined"!=typeof navigator,t=e&&("ontouchstart"in window||n&&navigator.msMaxTouchPoints>0)?["touchstart"]:["click"];function i(e){var n=e.event,t=e.handler;(0,e.middleware)(n)&&t(n)}function r(e,n){var r=function(e){var n="function"==typeof e;if(!n&&"object"!=typeof e)throw new Error("v-click-outside: Binding value must be a function or an object");return{handler:n?e:e.handler,middleware:e.middleware||function(e){return e},events:e.events||t,isActive:!(!1===e.isActive),detectIframe:!(!1===e.detectIframe)}}(n.value),d=r.handler,o=r.middleware,a=r.detectIframe;if(r.isActive){if(e["__v-click-outside"]=r.events.map(function(n){return{event:n,srcTarget:document.documentElement,handler:function(n){return function(e){var n=e.el,t=e.event,r=e.handler,d=e.middleware,o=t.path||t.composedPath&&t.composedPath();(o?o.indexOf(n)<0:!n.contains(t.target))&&i({event:t,handler:r,middleware:d})}({el:e,event:n,handler:d,middleware:o})}}}),a){var c={event:"blur",srcTarget:window,handler:function(n){return function(e){var n=e.el,t=e.event,r=e.handler,d=e.middleware;setTimeout(function(){var e=document.activeElement;e&&"IFRAME"===e.tagName&&!n.contains(e)&&i({event:t,handler:r,middleware:d})},0)}({el:e,event:n,handler:d,middleware:o})}};e["__v-click-outside"]=[].concat(e["__v-click-outside"],[c])}e["__v-click-outside"].forEach(function(n){var t=n.event,i=n.srcTarget,r=n.handler;return setTimeout(function(){e["__v-click-outside"]&&i.addEventListener(t,r,!1)},0)})}}function d(e){(e["__v-click-outside"]||[]).forEach(function(e){return e.srcTarget.removeEventListener(e.event,e.handler,!1)}),delete e["__v-click-outside"]}var o=e?{bind:r,update:function(e,n){var t=n.value,i=n.oldValue;JSON.stringify(t)!==JSON.stringify(i)&&(d(e),r(e,{value:t}))},unbind:d}:{};return{install:function(e){e.directive("click-outside",o)},directive:o}});
//# sourceMappingURL=v-click-outside.umd.js.map


/***/ }),

/***/ 5925:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "yh": () => (/* binding */ createDecorator)
/* harmony export */ });
/* unused harmony export mixins */
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8976);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/**
  * vue-class-component v7.2.6
  * (c) 2015-present Evan You
  * @license MIT
  */


function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

// The rational behind the verbose Reflect-feature check below is the fact that there are polyfills
// which add an implementation for Reflect.defineMetadata but not for Reflect.getOwnMetadataKeys.
// Without this check consumers will encounter hard to track down runtime errors.
function reflectionIsSupported() {
  return typeof Reflect !== 'undefined' && Reflect.defineMetadata && Reflect.getOwnMetadataKeys;
}
function copyReflectionMetadata(to, from) {
  forwardMetadata(to, from);
  Object.getOwnPropertyNames(from.prototype).forEach(function (key) {
    forwardMetadata(to.prototype, from.prototype, key);
  });
  Object.getOwnPropertyNames(from).forEach(function (key) {
    forwardMetadata(to, from, key);
  });
}

function forwardMetadata(to, from, propertyKey) {
  var metaKeys = propertyKey ? Reflect.getOwnMetadataKeys(from, propertyKey) : Reflect.getOwnMetadataKeys(from);
  metaKeys.forEach(function (metaKey) {
    var metadata = propertyKey ? Reflect.getOwnMetadata(metaKey, from, propertyKey) : Reflect.getOwnMetadata(metaKey, from);

    if (propertyKey) {
      Reflect.defineMetadata(metaKey, metadata, to, propertyKey);
    } else {
      Reflect.defineMetadata(metaKey, metadata, to);
    }
  });
}

var fakeArray = {
  __proto__: []
};
var hasProto = fakeArray instanceof Array;
function createDecorator(factory) {
  return function (target, key, index) {
    var Ctor = typeof target === 'function' ? target : target.constructor;

    if (!Ctor.__decorators__) {
      Ctor.__decorators__ = [];
    }

    if (typeof index !== 'number') {
      index = undefined;
    }

    Ctor.__decorators__.push(function (options) {
      return factory(options, key, index);
    });
  };
}
function mixins() {
  for (var _len = arguments.length, Ctors = new Array(_len), _key = 0; _key < _len; _key++) {
    Ctors[_key] = arguments[_key];
  }

  return Vue.extend({
    mixins: Ctors
  });
}
function isPrimitive(value) {
  var type = _typeof(value);

  return value == null || type !== 'object' && type !== 'function';
}
function warn(message) {
  if (typeof console !== 'undefined') {
    console.warn('[vue-class-component] ' + message);
  }
}

function collectDataFromConstructor(vm, Component) {
  // override _init to prevent to init as Vue instance
  var originalInit = Component.prototype._init;

  Component.prototype._init = function () {
    var _this = this;

    // proxy to actual vm
    var keys = Object.getOwnPropertyNames(vm); // 2.2.0 compat (props are no longer exposed as self properties)

    if (vm.$options.props) {
      for (var key in vm.$options.props) {
        if (!vm.hasOwnProperty(key)) {
          keys.push(key);
        }
      }
    }

    keys.forEach(function (key) {
      Object.defineProperty(_this, key, {
        get: function get() {
          return vm[key];
        },
        set: function set(value) {
          vm[key] = value;
        },
        configurable: true
      });
    });
  }; // should be acquired class property values


  var data = new Component(); // restore original _init to avoid memory leak (#209)

  Component.prototype._init = originalInit; // create plain data object

  var plainData = {};
  Object.keys(data).forEach(function (key) {
    if (data[key] !== undefined) {
      plainData[key] = data[key];
    }
  });

  if (false) {}

  return plainData;
}

var $internalHooks = ['data', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeDestroy', 'destroyed', 'beforeUpdate', 'updated', 'activated', 'deactivated', 'render', 'errorCaptured', 'serverPrefetch' // 2.6
];
function componentFactory(Component) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  options.name = options.name || Component._componentTag || Component.name; // prototype props.

  var proto = Component.prototype;
  Object.getOwnPropertyNames(proto).forEach(function (key) {
    if (key === 'constructor') {
      return;
    } // hooks


    if ($internalHooks.indexOf(key) > -1) {
      options[key] = proto[key];
      return;
    }

    var descriptor = Object.getOwnPropertyDescriptor(proto, key);

    if (descriptor.value !== void 0) {
      // methods
      if (typeof descriptor.value === 'function') {
        (options.methods || (options.methods = {}))[key] = descriptor.value;
      } else {
        // typescript decorated data
        (options.mixins || (options.mixins = [])).push({
          data: function data() {
            return _defineProperty({}, key, descriptor.value);
          }
        });
      }
    } else if (descriptor.get || descriptor.set) {
      // computed properties
      (options.computed || (options.computed = {}))[key] = {
        get: descriptor.get,
        set: descriptor.set
      };
    }
  });
  (options.mixins || (options.mixins = [])).push({
    data: function data() {
      return collectDataFromConstructor(this, Component);
    }
  }); // decorate options

  var decorators = Component.__decorators__;

  if (decorators) {
    decorators.forEach(function (fn) {
      return fn(options);
    });
    delete Component.__decorators__;
  } // find super


  var superProto = Object.getPrototypeOf(Component.prototype);
  var Super = superProto instanceof (vue__WEBPACK_IMPORTED_MODULE_0___default()) ? superProto.constructor : (vue__WEBPACK_IMPORTED_MODULE_0___default());
  var Extended = Super.extend(options);
  forwardStaticMembers(Extended, Component, Super);

  if (reflectionIsSupported()) {
    copyReflectionMetadata(Extended, Component);
  }

  return Extended;
}
var reservedPropertyNames = (/* unused pure expression or super */ null && ([// Unique id
'cid', // Super Vue constructor
'super', // Component options that will be used by the component
'options', 'superOptions', 'extendOptions', 'sealedOptions', // Private assets
'component', 'directive', 'filter']));
var shouldIgnore = {
  prototype: true,
  arguments: true,
  callee: true,
  caller: true
};

function forwardStaticMembers(Extended, Original, Super) {
  // We have to use getOwnPropertyNames since Babel registers methods as non-enumerable
  Object.getOwnPropertyNames(Original).forEach(function (key) {
    // Skip the properties that should not be overwritten
    if (shouldIgnore[key]) {
      return;
    } // Some browsers does not allow reconfigure built-in properties


    var extendedDescriptor = Object.getOwnPropertyDescriptor(Extended, key);

    if (extendedDescriptor && !extendedDescriptor.configurable) {
      return;
    }

    var descriptor = Object.getOwnPropertyDescriptor(Original, key); // If the user agent does not support `__proto__` or its family (IE <= 10),
    // the sub class properties may be inherited properties from the super class in TypeScript.
    // We need to exclude such properties to prevent to overwrite
    // the component options object which stored on the extended constructor (See #192).
    // If the value is a referenced value (object or function),
    // we can check equality of them and exclude it if they have the same reference.
    // If it is a primitive value, it will be forwarded for safety.

    if (!hasProto) {
      // Only `cid` is explicitly exluded from property forwarding
      // because we cannot detect whether it is a inherited property or not
      // on the no `__proto__` environment even though the property is reserved.
      if (key === 'cid') {
        return;
      }

      var superDescriptor = Object.getOwnPropertyDescriptor(Super, key);

      if (!isPrimitive(descriptor.value) && superDescriptor && superDescriptor.value === descriptor.value) {
        return;
      }
    } // Warn if the users manually declare reserved properties


    if (false) {}

    Object.defineProperty(Extended, key, descriptor);
  });
}

function Component(options) {
  if (typeof options === 'function') {
    return componentFactory(options);
  }

  return function (Component) {
    return componentFactory(Component, options);
  };
}

Component.registerHooks = function registerHooks(keys) {
  $internalHooks.push.apply($internalHooks, _toConsumableArray(keys));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Component);



/***/ }),

/***/ 394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ContextMenu_vue_vue_type_template_id_2cd1f2a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8773);
/* harmony import */ var _ContextMenu_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9264);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5440);





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(
  _ContextMenu_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
  _ContextMenu_vue_vue_type_template_id_2cd1f2a4___WEBPACK_IMPORTED_MODULE_0__/* .render */ .s,
  _ContextMenu_vue_vue_type_template_id_2cd1f2a4___WEBPACK_IMPORTED_MODULE_0__/* .staticRenderFns */ .x,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/ContextMenu.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ 5749:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Editor_vue_vue_type_template_id_e18b6dc6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1239);
/* harmony import */ var _Editor_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8325);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5440);





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(
  _Editor_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
  _Editor_vue_vue_type_template_id_e18b6dc6___WEBPACK_IMPORTED_MODULE_0__/* .render */ .s,
  _Editor_vue_vue_type_template_id_e18b6dc6___WEBPACK_IMPORTED_MODULE_0__/* .staticRenderFns */ .x,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Editor.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ 4890:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Minimap_vue_vue_type_template_id_a00135b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2380);
/* harmony import */ var _Minimap_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6808);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5440);





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(
  _Minimap_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
  _Minimap_vue_vue_type_template_id_a00135b6___WEBPACK_IMPORTED_MODULE_0__/* .render */ .s,
  _Minimap_vue_vue_type_template_id_a00135b6___WEBPACK_IMPORTED_MODULE_0__/* .staticRenderFns */ .x,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Minimap.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ 6566:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Sidebar_vue_vue_type_template_id_7d622f5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6102);
/* harmony import */ var _Sidebar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7221);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5440);





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(
  _Sidebar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
  _Sidebar_vue_vue_type_template_id_7d622f5c___WEBPACK_IMPORTED_MODULE_0__/* .render */ .s,
  _Sidebar_vue_vue_type_template_id_7d622f5c___WEBPACK_IMPORTED_MODULE_0__/* .staticRenderFns */ .x,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Sidebar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ 4609:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ConnectionView_vue_vue_type_template_id_34929434___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(439);
/* harmony import */ var _ConnectionView_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4605);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5440);





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(
  _ConnectionView_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
  _ConnectionView_vue_vue_type_template_id_34929434___WEBPACK_IMPORTED_MODULE_0__/* .render */ .s,
  _ConnectionView_vue_vue_type_template_id_34929434___WEBPACK_IMPORTED_MODULE_0__/* .staticRenderFns */ .x,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/connection/ConnectionView.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ 241:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ConnectionWrapper_vue_vue_type_template_id_76e3acd4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3257);
/* harmony import */ var _ConnectionWrapper_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2052);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5440);





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(
  _ConnectionWrapper_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
  _ConnectionWrapper_vue_vue_type_template_id_76e3acd4___WEBPACK_IMPORTED_MODULE_0__/* .render */ .s,
  _ConnectionWrapper_vue_vue_type_template_id_76e3acd4___WEBPACK_IMPORTED_MODULE_0__/* .staticRenderFns */ .x,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/connection/ConnectionWrapper.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ 9844:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TemporaryConnection_vue_vue_type_template_id_3b64824e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1740);
/* harmony import */ var _TemporaryConnection_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4762);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5440);





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(
  _TemporaryConnection_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
  _TemporaryConnection_vue_vue_type_template_id_3b64824e___WEBPACK_IMPORTED_MODULE_0__/* .render */ .s,
  _TemporaryConnection_vue_vue_type_template_id_3b64824e___WEBPACK_IMPORTED_MODULE_0__/* .staticRenderFns */ .x,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/connection/TemporaryConnection.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ 8731:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Node_vue_vue_type_template_id_fecb42a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3581);
/* harmony import */ var _Node_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2093);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5440);





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(
  _Node_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
  _Node_vue_vue_type_template_id_fecb42a2___WEBPACK_IMPORTED_MODULE_0__/* .render */ .s,
  _Node_vue_vue_type_template_id_fecb42a2___WEBPACK_IMPORTED_MODULE_0__/* .staticRenderFns */ .x,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/node/Node.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ 778:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NodeInterface_vue_vue_type_template_id_0871ee0c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(807);
/* harmony import */ var _NodeInterface_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7988);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5440);





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(
  _NodeInterface_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
  _NodeInterface_vue_vue_type_template_id_0871ee0c___WEBPACK_IMPORTED_MODULE_0__/* .render */ .s,
  _NodeInterface_vue_vue_type_template_id_0871ee0c___WEBPACK_IMPORTED_MODULE_0__/* .staticRenderFns */ .x,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/node/NodeInterface.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ 7109:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NodeOption_vue_vue_type_template_id_0b61d384___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2086);
/* harmony import */ var _NodeOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9626);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5440);





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(
  _NodeOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
  _NodeOption_vue_vue_type_template_id_0b61d384___WEBPACK_IMPORTED_MODULE_0__/* .render */ .s,
  _NodeOption_vue_vue_type_template_id_0b61d384___WEBPACK_IMPORTED_MODULE_0__/* .staticRenderFns */ .x,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/node/NodeOption.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ 8773:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_template_id_2cd1f2a4___WEBPACK_IMPORTED_MODULE_0__.s),
/* harmony export */   "x": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_template_id_2cd1f2a4___WEBPACK_IMPORTED_MODULE_0__.x)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_template_id_2cd1f2a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8892);


/***/ }),

/***/ 1239:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_template_id_e18b6dc6___WEBPACK_IMPORTED_MODULE_0__.s),
/* harmony export */   "x": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_template_id_e18b6dc6___WEBPACK_IMPORTED_MODULE_0__.x)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_template_id_e18b6dc6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(839);


/***/ }),

/***/ 2380:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Minimap_vue_vue_type_template_id_a00135b6___WEBPACK_IMPORTED_MODULE_0__.s),
/* harmony export */   "x": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Minimap_vue_vue_type_template_id_a00135b6___WEBPACK_IMPORTED_MODULE_0__.x)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Minimap_vue_vue_type_template_id_a00135b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(617);


/***/ }),

/***/ 6102:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_7d622f5c___WEBPACK_IMPORTED_MODULE_0__.s),
/* harmony export */   "x": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_7d622f5c___WEBPACK_IMPORTED_MODULE_0__.x)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_7d622f5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7896);


/***/ }),

/***/ 439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConnectionView_vue_vue_type_template_id_34929434___WEBPACK_IMPORTED_MODULE_0__.s),
/* harmony export */   "x": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConnectionView_vue_vue_type_template_id_34929434___WEBPACK_IMPORTED_MODULE_0__.x)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConnectionView_vue_vue_type_template_id_34929434___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4707);


/***/ }),

/***/ 3257:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConnectionWrapper_vue_vue_type_template_id_76e3acd4___WEBPACK_IMPORTED_MODULE_0__.s),
/* harmony export */   "x": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConnectionWrapper_vue_vue_type_template_id_76e3acd4___WEBPACK_IMPORTED_MODULE_0__.x)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConnectionWrapper_vue_vue_type_template_id_76e3acd4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1148);


/***/ }),

/***/ 1740:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TemporaryConnection_vue_vue_type_template_id_3b64824e___WEBPACK_IMPORTED_MODULE_0__.s),
/* harmony export */   "x": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TemporaryConnection_vue_vue_type_template_id_3b64824e___WEBPACK_IMPORTED_MODULE_0__.x)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TemporaryConnection_vue_vue_type_template_id_3b64824e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6545);


/***/ }),

/***/ 3581:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Node_vue_vue_type_template_id_fecb42a2___WEBPACK_IMPORTED_MODULE_0__.s),
/* harmony export */   "x": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Node_vue_vue_type_template_id_fecb42a2___WEBPACK_IMPORTED_MODULE_0__.x)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Node_vue_vue_type_template_id_fecb42a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5752);


/***/ }),

/***/ 807:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NodeInterface_vue_vue_type_template_id_0871ee0c___WEBPACK_IMPORTED_MODULE_0__.s),
/* harmony export */   "x": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NodeInterface_vue_vue_type_template_id_0871ee0c___WEBPACK_IMPORTED_MODULE_0__.x)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NodeInterface_vue_vue_type_template_id_0871ee0c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1738);


/***/ }),

/***/ 2086:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NodeOption_vue_vue_type_template_id_0b61d384___WEBPACK_IMPORTED_MODULE_0__.s),
/* harmony export */   "x": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NodeOption_vue_vue_type_template_id_0b61d384___WEBPACK_IMPORTED_MODULE_0__.x)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NodeOption_vue_vue_type_template_id_0b61d384___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2536);


/***/ }),

/***/ 9264:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_3_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9357);
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_ts_loader_index_js_clonedRuleSet_3_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z); 

/***/ }),

/***/ 8325:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_3_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_ts_loader_index_js_clonedRuleSet_3_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z); 

/***/ }),

/***/ 6808:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_3_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Minimap_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7829);
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_ts_loader_index_js_clonedRuleSet_3_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Minimap_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z); 

/***/ }),

/***/ 7221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_3_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5979);
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_ts_loader_index_js_clonedRuleSet_3_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z); 

/***/ }),

/***/ 4605:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_3_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConnectionView_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5541);
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_ts_loader_index_js_clonedRuleSet_3_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConnectionView_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z); 

/***/ }),

/***/ 2052:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_3_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConnectionWrapper_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6890);
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_ts_loader_index_js_clonedRuleSet_3_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConnectionWrapper_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z); 

/***/ }),

/***/ 4762:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_3_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TemporaryConnection_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3107);
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_ts_loader_index_js_clonedRuleSet_3_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TemporaryConnection_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z); 

/***/ }),

/***/ 2093:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_3_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Node_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3598);
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_ts_loader_index_js_clonedRuleSet_3_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Node_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z); 

/***/ }),

/***/ 7988:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_3_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NodeInterface_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7747);
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_ts_loader_index_js_clonedRuleSet_3_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NodeInterface_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z); 

/***/ }),

/***/ 9626:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_3_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NodeOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8695);
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_ts_loader_index_js_clonedRuleSet_3_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NodeOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z); 

/***/ }),

/***/ 8892:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ render),
/* harmony export */   "x": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.value,
          expression: "value"
        },
        {
          name: "click-outside",
          rawName: "v-click-outside",
          value: _vm.onClickOutside,
          expression: "onClickOutside"
        }
      ],
      class: _vm.classes,
      style: _vm.styles
    },
    [
      _vm._l(_vm._items, function(item, index) {
        return [
          item.isDivider
            ? _c("div", { key: index, staticClass: "divider" })
            : _c(
                "div",
                {
                  key: index,
                  staticClass: "d-flex align-items-center",
                  class: {
                    item: true,
                    submenu: !!item.submenu,
                    "--disabled": !!item.disabled
                  },
                  on: {
                    mouseenter: function($event) {
                      return _vm.onMouseEnter($event, index)
                    },
                    mouseleave: function($event) {
                      return _vm.onMouseLeave($event, index)
                    },
                    click: function($event) {
                      $event.stopPropagation()
                      $event.preventDefault()
                      return _vm.onClick(item)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "flex-fill" }, [
                    _vm._v(_vm._s(item.label))
                  ]),
                  _vm._v(" "),
                  item.submenu
                    ? _c(
                        "div",
                        {
                          staticClass: "ml-3",
                          staticStyle: { "line-height": "1em" }
                        },
                        [
                          _c(
                            "svg",
                            {
                              attrs: {
                                width: "13",
                                height: "13",
                                viewBox: "-60 120 250 250"
                              }
                            },
                            [
                              _c("path", {
                                attrs: {
                                  d:
                                    "M160.875 279.5625 L70.875 369.5625 L70.875 189.5625 L160.875 279.5625 Z",
                                  stroke: "none",
                                  fill: "white"
                                }
                              })
                            ]
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  item.submenu
                    ? _c("context-menu", {
                        attrs: {
                          value: _vm.activeMenu === index,
                          items: item.submenu,
                          "is-nested": true,
                          "is-flipped": { x: _vm.flippedX, y: _vm.flippedY },
                          flippable: _vm.flippable
                        },
                        on: { click: _vm.onChildClick }
                      })
                    : _vm._e()
                ],
                1
              )
        ]
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 839:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ render),
/* harmony export */   "x": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      class: [
        "node-editor",
        {
          "ignore-mouse": !!_vm.temporaryConnection,
          "--temporary-connection": !!_vm.temporaryConnection
        }
      ],
      attrs: { tabindex: "-1" },
      on: {
        mousemove: function($event) {
          if ($event.target !== $event.currentTarget) {
            return null
          }
          return _vm.mouseMoveHandler.apply(null, arguments)
        },
        mousedown: _vm.mouseDown,
        mouseup: _vm.mouseUp,
        wheel: function($event) {
          if ($event.target !== $event.currentTarget) {
            return null
          }
          return _vm.mouseWheel.apply(null, arguments)
        },
        keydown: _vm.keyDown,
        keyup: _vm.keyUp,
        contextmenu: function($event) {
          if ($event.target !== $event.currentTarget) {
            return null
          }
          $event.preventDefault()
          return _vm.openContextMenu.apply(null, arguments)
        }
      }
    },
    [
      _c("div", { staticClass: "background", style: _vm.backgroundStyle }),
      _vm._v(" "),
      _c(
        "svg",
        { staticClass: "connections-container" },
        [
          _vm._l(_vm.connections, function(connection) {
            return _c(
              "g",
              { key: connection.id + _vm.counter.toString() },
              [
                _vm._t(
                  "connections",
                  function() {
                    return [
                      _c(_vm.plugin.components.connection, {
                        tag: "component",
                        attrs: { connection: connection }
                      })
                    ]
                  },
                  { connection: connection }
                )
              ],
              2
            )
          }),
          _vm._v(" "),
          _vm.temporaryConnection
            ? _c(_vm.plugin.components.tempConnection, {
                tag: "component",
                attrs: { connection: _vm.temporaryConnection }
              })
            : _vm._e()
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "node-container", style: _vm.styles },
        _vm._l(_vm.nodes, function(node) {
          return _c(_vm.plugin.components.node, {
            key: node.id + _vm.counter.toString(),
            tag: "component",
            attrs: { data: node, selected: _vm.selectedNodes.includes(node) },
            on: {
              select: function($event) {
                return _vm.selectNode(node, $event)
              }
            }
          })
        }),
        1
      ),
      _vm._v(" "),
      _c(_vm.plugin.components.contextMenu, {
        tag: "component",
        attrs: {
          x: _vm.contextMenu.x,
          y: _vm.contextMenu.y,
          items: _vm.contextMenu.items,
          flippable: ""
        },
        on: { click: _vm.onContextMenuClick },
        model: {
          value: _vm.contextMenu.show,
          callback: function($$v) {
            _vm.$set(_vm.contextMenu, "show", $$v)
          },
          expression: "contextMenu.show"
        }
      }),
      _vm._v(" "),
      _c(_vm.plugin.components.sidebar, { tag: "component" }),
      _vm._v(" "),
      _vm.plugin.enableMinimap
        ? _c(_vm.plugin.components.minimap, {
            tag: "component",
            attrs: { nodes: _vm.nodes, connections: _vm.connections }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 617:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ render),
/* harmony export */   "x": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var this$1 = this
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("canvas", {
    ref: "cv",
    staticClass: "minimap",
    on: {
      mouseenter: function($event) {
        _vm.showViewBounds = true
      },
      mouseleave: function() {
        this$1.showViewBounds = false
        this$1.mouseup()
      },
      mousedown: function($event) {
        if ($event.target !== $event.currentTarget) {
          return null
        }
        return _vm.mousedown.apply(null, arguments)
      },
      mousemove: function($event) {
        if ($event.target !== $event.currentTarget) {
          return null
        }
        return _vm.mousemove.apply(null, arguments)
      },
      mouseup: _vm.mouseup
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 7896:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ render),
/* harmony export */   "x": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      class: ["sidebar", { "--open": _vm.plugin.sidebar.visible }],
      style: _vm.styles
    },
    [
      _c("div", {
        staticClass: "__resizer",
        on: { mousedown: _vm.startResize }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "d-flex align-items-center" }, [
        _c(
          "button",
          {
            staticClass: "__close",
            attrs: { tabindex: "-1" },
            on: { click: _vm.close }
          },
          [_vm._v("×")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "ml-2" }, [
          _c("b", [_vm._v(_vm._s(_vm.nodeName))])
        ])
      ]),
      _vm._v(" "),
      _c("portal-target", { attrs: { name: "sidebar" } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 4707:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ render),
/* harmony export */   "x": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("path", { class: _vm.classes, attrs: { d: _vm.d } })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 1148:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ render),
/* harmony export */   "x": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("connection-view", {
    attrs: {
      x1: _vm.d.x1,
      y1: _vm.d.y1,
      x2: _vm.d.x2,
      y2: _vm.d.y2,
      state: _vm.state,
      connection: _vm.connection
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 6545:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ render),
/* harmony export */   "x": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("connection-view", {
    attrs: {
      x1: _vm.d.input[0],
      y1: _vm.d.input[1],
      x2: _vm.d.output[0],
      y2: _vm.d.output[1],
      state: _vm.status,
      connection: _vm.connection,
      "is-temporary": ""
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 5752:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ render),
/* harmony export */   "x": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { class: _vm.classes, style: _vm.styles, attrs: { id: _vm.data.id } },
    [
      _c(
        "div",
        {
          staticClass: "__title",
          on: {
            mousedown: function($event) {
              if ($event.target !== $event.currentTarget) {
                return null
              }
              $event.stopPropagation()
              return _vm.startDrag.apply(null, arguments)
            },
            contextmenu: function($event) {
              if ($event.target !== $event.currentTarget) {
                return null
              }
              $event.preventDefault()
              return _vm.openContextMenu.apply(null, arguments)
            }
          }
        },
        [
          !_vm.renaming
            ? _c("span", [_vm._v(_vm._s(_vm.data.name))])
            : _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.tempName,
                    expression: "tempName"
                  },
                  {
                    name: "click-outside",
                    rawName: "v-click-outside",
                    value: _vm.doneRenaming,
                    expression: "doneRenaming"
                  }
                ],
                staticClass: "dark-input",
                attrs: { type: "text", placeholder: "Node Name" },
                domProps: { value: _vm.tempName },
                on: {
                  keydown: function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                    ) {
                      return null
                    }
                    return _vm.doneRenaming.apply(null, arguments)
                  },
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.tempName = $event.target.value
                  }
                }
              }),
          _vm._v(" "),
          _c(_vm.plugin.components.contextMenu, {
            tag: "component",
            attrs: {
              x: _vm.contextMenu.x,
              y: _vm.contextMenu.y,
              items: _vm.contextMenu.items
            },
            on: { click: _vm.onContextMenu },
            model: {
              value: _vm.contextMenu.show,
              callback: function($$v) {
                _vm.$set(_vm.contextMenu, "show", $$v)
              },
              expression: "contextMenu.show"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "__content" }, [
        _c(
          "div",
          { staticClass: "__outputs" },
          _vm._l(_vm.data.outputInterfaces, function(output, name) {
            return _c(_vm.plugin.components.nodeInterface, {
              key: output.id,
              tag: "component",
              attrs: { name: name, data: output }
            })
          }),
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "__options" },
          [
            _vm._l(_vm.data.options, function(ref) {
              var name = ref[0]
              var option = ref[1]
              return [
                _c(_vm.plugin.components.nodeOption, {
                  key: name,
                  tag: "component",
                  attrs: {
                    name: name,
                    option: option,
                    componentName: option.optionComponent,
                    node: _vm.data
                  },
                  on: {
                    openSidebar: function($event) {
                      return _vm.openSidebar(name)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.plugin.sidebar.nodeId === _vm.data.id &&
                _vm.plugin.sidebar.optionName === name &&
                option.sidebarComponent
                  ? _c(
                      "portal",
                      { key: "sb_" + name, attrs: { to: "sidebar" } },
                      [
                        _c(_vm.plugin.components.nodeOption, {
                          key: _vm.data.id + name,
                          tag: "component",
                          attrs: {
                            name: name,
                            option: option,
                            componentName: option.sidebarComponent,
                            node: _vm.data
                          }
                        })
                      ],
                      1
                    )
                  : _vm._e()
              ]
            })
          ],
          2
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "__inputs" },
          _vm._l(_vm.data.inputInterfaces, function(input, name) {
            return _c(_vm.plugin.components.nodeInterface, {
              key: input.id,
              tag: "component",
              attrs: { name: name, data: input }
            })
          }),
          1
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 1738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ render),
/* harmony export */   "x": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { class: _vm.classes, attrs: { id: _vm.data.id } },
    [
      _c("div", {
        staticClass: "__port",
        on: { mouseover: _vm.startHover, mouseout: _vm.endHover }
      }),
      _vm._v(" "),
      _vm.data.connectionCount > 0 ||
      !_vm.data.option ||
      !_vm.getOptionComponent(_vm.data.option)
        ? _c("span", { staticClass: "align-middle" }, [
            _vm._v("\n        " + _vm._s(_vm.displayName) + "\n    ")
          ])
        : _c(_vm.getOptionComponent(_vm.data.option), {
            tag: "component",
            attrs: {
              option: _vm.data,
              value: _vm.value,
              name: _vm.displayName
            },
            on: {
              input: function($event) {
                _vm.data.value = $event
              }
            }
          })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 2536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ render),
/* harmony export */   "x": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(_vm.component, {
    tag: "component",
    staticClass: "node-option",
    attrs: {
      name: _vm.displayName,
      node: _vm.node,
      value: _vm.value,
      option: _vm.option
    },
    on: {
      input: _vm.updateValue,
      openSidebar: function($event) {
        return _vm.$emit("openSidebar")
      }
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 5440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 4807:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export Emit */
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// Code copied from Vue/src/shared/util.js
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = function (str) { return str.replace(hyphenateRE, '-$1').toLowerCase(); };
/**
 * decorator of an event-emitter function
 * @param  event The name of the event
 * @return MethodDecorator
 */
function Emit(event) {
    return function (_target, propertyKey, descriptor) {
        var key = hyphenate(propertyKey);
        var original = descriptor.value;
        descriptor.value = function emitter() {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var emit = function (returnValue) {
                var emitName = event || key;
                if (returnValue === undefined) {
                    if (args.length === 0) {
                        _this.$emit(emitName);
                    }
                    else if (args.length === 1) {
                        _this.$emit(emitName, args[0]);
                    }
                    else {
                        _this.$emit.apply(_this, __spreadArrays([emitName], args));
                    }
                }
                else {
                    args.unshift(returnValue);
                    _this.$emit.apply(_this, __spreadArrays([emitName], args));
                }
            };
            var returnValue = original.apply(this, args);
            if (isPromise(returnValue)) {
                returnValue.then(emit);
            }
            else {
                emit(returnValue);
            }
            return returnValue;
        };
    };
}
function isPromise(obj) {
    return obj instanceof Promise || (obj && typeof obj.then === 'function');
}


/***/ }),

/***/ 8127:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ Inject)
/* harmony export */ });
/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5925);

/**
 * decorator of an inject
 * @param from key
 * @return PropertyDecorator
 */
function Inject(options) {
    return (0,vue_class_component__WEBPACK_IMPORTED_MODULE_0__/* .createDecorator */ .yh)(function (componentOptions, key) {
        if (typeof componentOptions.inject === 'undefined') {
            componentOptions.inject = {};
        }
        if (!Array.isArray(componentOptions.inject)) {
            componentOptions.inject[key] = options || key;
        }
    });
}


/***/ }),

/***/ 7023:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export Model */
/* harmony import */ var _helpers_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(779);


/**
 * decorator of model
 * @param  event event name
 * @param options options
 * @return PropertyDecorator
 */
function Model(event, options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        applyMetadata(options, target, key);
        createDecorator(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[k] = options;
            componentOptions.model = { prop: k, event: event || k };
        })(target, key);
    };
}


/***/ }),

/***/ 5654:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export ModelSync */
/* harmony import */ var _helpers_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(779);


/**
 * decorator of synced model and prop
 * @param propName the name to interface with from outside, must be different from decorated property
 * @param  event event name
 * @param options options
 * @return PropertyDecorator
 */
function ModelSync(propName, event, options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        applyMetadata(options, target, key);
        createDecorator(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[propName] = options;
            componentOptions.model = { prop: propName, event: event || k };
            (componentOptions.computed || (componentOptions.computed = {}))[k] = {
                get: function () {
                    return this[propName];
                },
                set: function (value) {
                    // @ts-ignore
                    this.$emit(event, value);
                },
            };
        })(target, key);
    };
}


/***/ }),

/***/ 6070:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ Prop)
/* harmony export */ });
/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5925);
/* harmony import */ var _helpers_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(779);


/**
 * decorator of a prop
 * @param  options the options for the prop
 * @return PropertyDecorator | void
 */
function Prop(options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        (0,_helpers_metadata__WEBPACK_IMPORTED_MODULE_0__/* .applyMetadata */ .l)(options, target, key);
        (0,vue_class_component__WEBPACK_IMPORTED_MODULE_1__/* .createDecorator */ .yh)(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[k] = options;
        })(target, key);
    };
}


/***/ }),

/***/ 8793:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export PropSync */
/* harmony import */ var _helpers_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(779);


/**
 * decorator of a synced prop
 * @param propName the name to interface with from outside, must be different from decorated property
 * @param options the options for the synced prop
 * @return PropertyDecorator | void
 */
function PropSync(propName, options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        applyMetadata(options, target, key);
        createDecorator(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[propName] = options;
            (componentOptions.computed || (componentOptions.computed = {}))[k] = {
                get: function () {
                    return this[propName];
                },
                set: function (value) {
                    this.$emit("update:" + propName, value);
                },
            };
        })(target, key);
    };
}


/***/ }),

/***/ 2997:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ Provide)
/* harmony export */ });
/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5925);
/* harmony import */ var _helpers_provideInject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3331);


/**
 * decorator of a provide
 * @param key key
 * @return PropertyDecorator | void
 */
function Provide(key) {
    return (0,vue_class_component__WEBPACK_IMPORTED_MODULE_0__/* .createDecorator */ .yh)(function (componentOptions, k) {
        var provide = componentOptions.provide;
        (0,_helpers_provideInject__WEBPACK_IMPORTED_MODULE_1__/* .inheritInjected */ .lm)(componentOptions);
        if ((0,_helpers_provideInject__WEBPACK_IMPORTED_MODULE_1__/* .needToProduceProvide */ .ad)(provide)) {
            provide = componentOptions.provide = (0,_helpers_provideInject__WEBPACK_IMPORTED_MODULE_1__/* .produceProvide */ .ZD)(provide);
        }
        provide.managed[k] = key || k;
    });
}


/***/ }),

/***/ 5612:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ Watch)
/* harmony export */ });
/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5925);

/**
 * decorator of a watch function
 * @param  path the path or the expression to observe
 * @param  WatchOption
 * @return MethodDecorator
 */
function Watch(path, options) {
    if (options === void 0) { options = {}; }
    var _a = options.deep, deep = _a === void 0 ? false : _a, _b = options.immediate, immediate = _b === void 0 ? false : _b;
    return (0,vue_class_component__WEBPACK_IMPORTED_MODULE_0__/* .createDecorator */ .yh)(function (componentOptions, handler) {
        if (typeof componentOptions.watch !== 'object') {
            componentOptions.watch = Object.create(null);
        }
        var watch = componentOptions.watch;
        if (typeof watch[path] === 'object' && !Array.isArray(watch[path])) {
            watch[path] = [watch[path]];
        }
        else if (typeof watch[path] === 'undefined') {
            watch[path] = [];
        }
        watch[path].push({ handler: handler, deep: deep, immediate: immediate });
    });
}


/***/ }),

/***/ 779:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ applyMetadata)
/* harmony export */ });
/** @see {@link https://github.com/vuejs/vue-class-component/blob/master/src/reflect.ts} */
var reflectMetadataIsSupported = typeof Reflect !== 'undefined' && typeof Reflect.getMetadata !== 'undefined';
function applyMetadata(options, target, key) {
    if (reflectMetadataIsSupported) {
        if (!Array.isArray(options) &&
            typeof options !== 'function' &&
            !options.hasOwnProperty('type') &&
            typeof options.type === 'undefined') {
            var type = Reflect.getMetadata('design:type', target, key);
            if (type !== Object) {
                options.type = type;
            }
        }
    }
}


/***/ }),

/***/ 3331:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZD": () => (/* binding */ produceProvide),
/* harmony export */   "ad": () => (/* binding */ needToProduceProvide),
/* harmony export */   "lm": () => (/* binding */ inheritInjected)
/* harmony export */ });
/* unused harmony export reactiveInjectKey */
function needToProduceProvide(original) {
    return (typeof original !== 'function' ||
        (!original.managed && !original.managedReactive));
}
function produceProvide(original) {
    var provide = function () {
        var _this = this;
        var rv = typeof original === 'function' ? original.call(this) : original;
        rv = Object.create(rv || null);
        // set reactive services (propagates previous services if necessary)
        rv[reactiveInjectKey] = Object.create(this[reactiveInjectKey] || {});
        for (var i in provide.managed) {
            rv[provide.managed[i]] = this[i];
        }
        var _loop_1 = function (i) {
            rv[provide.managedReactive[i]] = this_1[i]; // Duplicates the behavior of `@Provide`
            Object.defineProperty(rv[reactiveInjectKey], provide.managedReactive[i], {
                enumerable: true,
                configurable: true,
                get: function () { return _this[i]; },
            });
        };
        var this_1 = this;
        for (var i in provide.managedReactive) {
            _loop_1(i);
        }
        return rv;
    };
    provide.managed = {};
    provide.managedReactive = {};
    return provide;
}
/** Used for keying reactive provide/inject properties */
var reactiveInjectKey = '__reactiveInject__';
function inheritInjected(componentOptions) {
    // inject parent reactive services (if any)
    if (!Array.isArray(componentOptions.inject)) {
        componentOptions.inject = componentOptions.inject || {};
        componentOptions.inject[reactiveInjectKey] = {
            from: reactiveInjectKey,
            default: {},
        };
    }
}


/***/ }),

/***/ 2659:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DF": () => (/* reexport safe */ _decorators_Provide__WEBPACK_IMPORTED_MODULE_8__.D),
/* harmony export */   "RL": () => (/* reexport safe */ _decorators_Watch__WEBPACK_IMPORTED_MODULE_9__.R),
/* harmony export */   "fI": () => (/* reexport safe */ _decorators_Prop__WEBPACK_IMPORTED_MODULE_6__.f),
/* harmony export */   "tB": () => (/* reexport safe */ _decorators_Inject__WEBPACK_IMPORTED_MODULE_3__.t),
/* harmony export */   "w3": () => (/* reexport default from dynamic */ vue__WEBPACK_IMPORTED_MODULE_0___default.a),
/* harmony export */   "wA": () => (/* reexport safe */ vue_class_component__WEBPACK_IMPORTED_MODULE_1__.ZP)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8976);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5925);
/* harmony import */ var _decorators_Emit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4807);
/* harmony import */ var _decorators_Inject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8127);
/* harmony import */ var _decorators_Model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7023);
/* harmony import */ var _decorators_ModelSync__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5654);
/* harmony import */ var _decorators_Prop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6070);
/* harmony import */ var _decorators_PropSync__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8793);
/* harmony import */ var _decorators_Provide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2997);
/* harmony import */ var _decorators_Watch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5612);
/** vue-property-decorator verson 9.1.2 MIT LICENSE copyright 2020 kaorun343 */
/// <reference types='reflect-metadata'/>

















/***/ }),

/***/ 9290:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
exports.p$ = __webpack_unused_export__ = exports.wD = exports.EZ = void 0;
var tslib_1 = __webpack_require__(5163);
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
exports.EZ = BaklavaEvent;
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
exports.wD = PreventableBaklavaEvent;
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
__webpack_unused_export__ = Hook;
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
exports.p$ = SequentialHook;


/***/ }),

/***/ 9357:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5163);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2659);
/* harmony import */ var v_click_outside__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3570);
/* harmony import */ var v_click_outside__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(v_click_outside__WEBPACK_IMPORTED_MODULE_1__);


// @ts-ignore

var ContextMenu = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(ContextMenu, _super);
    function ContextMenu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.activeMenu = -1;
        _this.activeMenuResetTimeout = null;
        _this.height = 0;
        _this.rootIsFlipped = { x: false, y: false };
        return _this;
    }
    ContextMenu_1 = ContextMenu;
    Object.defineProperty(ContextMenu.prototype, "styles", {
        get: function () {
            var s = {};
            if (!this.isNested) {
                s.top = (this.flippedY ? this.y - this.height : this.y) + "px";
                s.left = this.x + "px";
            }
            return s;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContextMenu.prototype, "classes", {
        get: function () {
            return {
                "dark-context-menu": true,
                "--flipped-x": this.flippedX,
                "--flipped-y": this.flippedY,
                "--nested": this.isNested,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContextMenu.prototype, "_items", {
        get: function () {
            return this.items.map(function (i) { return ((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, i), { hover: false })); });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContextMenu.prototype, "flippedX", {
        get: function () {
            return this.flippable && (this.rootIsFlipped.x || this.isFlipped.x);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContextMenu.prototype, "flippedY", {
        get: function () {
            return this.flippable && (this.rootIsFlipped.y || this.isFlipped.y);
        },
        enumerable: false,
        configurable: true
    });
    ContextMenu.prototype.onClick = function (item) {
        if (!item.submenu && item.value) {
            this.$emit("click", item.value);
            this.$emit("input", false);
        }
    };
    ContextMenu.prototype.onChildClick = function (value) {
        this.$emit("click", value);
        this.activeMenu = -1;
        if (!this.isNested) {
            this.$emit("input", false);
        }
    };
    ContextMenu.prototype.onClickOutside = function (event) {
        if (this.value) {
            this.$emit("input", false);
        }
    };
    ContextMenu.prototype.onMouseEnter = function (event, index) {
        if (this.items[index].submenu) {
            this.activeMenu = index;
            if (this.activeMenuResetTimeout !== null) {
                clearTimeout(this.activeMenuResetTimeout);
                this.activeMenuResetTimeout = null;
            }
        }
    };
    ContextMenu.prototype.onMouseLeave = function (event, index) {
        var _this = this;
        if (this.items[index].submenu) {
            this.activeMenuResetTimeout = window.setTimeout(function () {
                _this.activeMenu = -1;
                _this.activeMenuResetTimeout = null;
            }, 200);
        }
    };
    ContextMenu.prototype.created = function () {
        if (this.$options.components) {
            this.$options.components["context-menu"] = vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Vue.extend */ .w3.extend(ContextMenu_1);
        }
        else {
            this.$options.components = { "context-menu": vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Vue.extend */ .w3.extend(ContextMenu_1) };
        }
    };
    ContextMenu.prototype.updateFlipped = function () {
        this.height = this.items.length * 30;
        var parentWidth = this.$parent.$el.offsetWidth;
        var parentHeight = this.$parent.$el.offsetHeight;
        this.rootIsFlipped.x = !this.isNested && this.x > parentWidth * 0.75;
        this.rootIsFlipped.y = !this.isNested && this.y + this.height > parentHeight - 20;
    };
    ContextMenu.prototype.updateDisabledValues = function () {
        var _this = this;
        if (this.value) {
            this.items.forEach(function (item) {
                if (item.disabledFunction) {
                    _this.$set(item, "disabled", item.disabledFunction());
                }
            });
        }
    };
    var ContextMenu_1;
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Prop */ .fI)({ type: Boolean, default: false })
    ], ContextMenu.prototype, "value", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Prop */ .fI)({ type: Array, default: function () { return []; } })
    ], ContextMenu.prototype, "items", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Prop */ .fI)({ type: Number, default: 0 })
    ], ContextMenu.prototype, "x", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Prop */ .fI)({ type: Number, default: 0 })
    ], ContextMenu.prototype, "y", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Prop */ .fI)({ type: Boolean, default: false })
    ], ContextMenu.prototype, "isNested", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Prop */ .fI)({ type: Object, default: function () { return ({ x: false, y: false }); } })
    ], ContextMenu.prototype, "isFlipped", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Prop */ .fI)({ type: Boolean, default: false })
    ], ContextMenu.prototype, "flippable", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Watch */ .RL)("y"),
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Watch */ .RL)("items")
    ], ContextMenu.prototype, "updateFlipped", null);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Watch */ .RL)("value", { immediate: true })
    ], ContextMenu.prototype, "updateDisabledValues", null);
    ContextMenu = ContextMenu_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Component */ .wA)({
            directives: {
                ClickOutside: (v_click_outside__WEBPACK_IMPORTED_MODULE_1___default().directive),
            },
        })
    ], ContextMenu);
    return ContextMenu;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Vue */ .w3));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContextMenu);


/***/ }),

/***/ 428:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5163);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2659);
/* harmony import */ var _baklavajs_core_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5060);
/* harmony import */ var _clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2759);
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9798);





var EditorView = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__extends)(EditorView, _super);
    function EditorView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nodeeditor = _this;
        _this.selectedNodeViews = [];
        _this.temporaryConnection = null;
        _this.hoveringOver = null;
        _this.selectedNodes = [];
        _this.ctrlPressed = false;
        _this.draggingStartPoint = null;
        _this.draggingStartPanning = null;
        // Reason: https://github.com/newcat/baklavajs/issues/54
        _this.counter = 0;
        _this.contextMenu = {
            items: [],
            show: false,
            x: 0,
            y: 0,
        };
        return _this;
    }
    Object.defineProperty(EditorView.prototype, "styles", {
        get: function () {
            return {
                "transform-origin": "0 0",
                "transform": "scale(".concat(this.plugin.scaling, ")"),
                "top": this.plugin.scaling * this.plugin.panning.y + "px",
                "left": this.plugin.scaling * this.plugin.panning.x + "px"
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditorView.prototype, "backgroundStyle", {
        get: function () {
            var positionLeft = this.plugin.panning.x * this.plugin.scaling;
            var positionTop = this.plugin.panning.y * this.plugin.scaling;
            var size = this.plugin.scaling * this.plugin.backgroundGrid.gridSize;
            var subSize = size / this.plugin.backgroundGrid.gridDivision;
            var backgroundSize = "".concat(size, "px ").concat(size, "px, ").concat(size, "px ").concat(size, "px");
            var subGridBackgroundSize = this.plugin.scaling > this.plugin.backgroundGrid.subGridVisibleThreshold
                ? ", ".concat(subSize, "px ").concat(subSize, "px, ").concat(subSize, "px ").concat(subSize, "px")
                : "";
            return {
                "background-position": "left ".concat(positionLeft, "px top ").concat(positionTop, "px"),
                "background-size": "".concat(backgroundSize, " ").concat(subGridBackgroundSize),
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditorView.prototype, "nodes", {
        get: function () {
            return this.plugin.editor ? this.plugin.editor.nodes : [];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditorView.prototype, "connections", {
        get: function () {
            return this.plugin.editor ? this.plugin.editor.connections : [];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditorView.prototype, "hasEnginePlugin", {
        get: function () {
            var e_1, _a;
            try {
                for (var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__values)(this.plugin.editor.plugins.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var p = _c.value;
                    if (p.type === "EnginePlugin") {
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
        },
        enumerable: false,
        configurable: true
    });
    EditorView.prototype.mounted = function () {
        var _this = this;
        this.updateContextMenu();
        this.plugin.editor.events.registerNodeType.addListener(this, function () { return _this.updateContextMenu(); });
        this.plugin.editor.hooks.load.tap(this, function (s) {
            _this.counter++;
            return s;
        });
        this.clipboard = new _clipboard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z(this.plugin.editor);
        this.history = new _history__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z(this.plugin);
    };
    EditorView.prototype.updateContextMenu = function () {
        var _this = this;
        var categories = Array.from(this.plugin.editor.nodeCategories.keys())
            .filter(function (c) { return c !== "default"; })
            .map(function (c) {
            var nodes = Array.from(_this.plugin.editor.nodeCategories.get(c)).map(function (n) { return ({
                value: "addNode:" + n,
                label: _this.plugin.nodeTypeAliases[n] || n,
            }); });
            return { label: c, submenu: nodes };
        });
        var defaultNodes = this.plugin.editor.nodeCategories.get("default").map(function (n) { return ({
            value: "addNode:" + n,
            label: _this.plugin.nodeTypeAliases[n] || n,
        }); });
        var addNodeSubmenu = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__read)(categories), false);
        if (categories.length > 0 && defaultNodes.length > 0) {
            addNodeSubmenu.push({ isDivider: true });
        }
        addNodeSubmenu.push.apply(addNodeSubmenu, (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__read)(defaultNodes), false));
        this.contextMenu.items = [
            {
                label: "Add Node",
                submenu: addNodeSubmenu,
            },
            {
                label: "Copy Nodes",
                value: "copy",
                disabledFunction: function () { return _this.selectedNodes.length === 0; },
            },
            {
                label: "Paste Nodes",
                value: "paste",
                disabledFunction: function () { return _this.clipboard.isEmpty; },
            },
        ];
    };
    EditorView.prototype.hoveredOver = function (ni) {
        this.hoveringOver = ni;
        if (ni && this.temporaryConnection) {
            this.temporaryConnection.to = ni;
            this.temporaryConnection.status = this.plugin.editor.checkConnection(this.temporaryConnection.from, this.temporaryConnection.to)
                ? _baklavajs_core_types__WEBPACK_IMPORTED_MODULE_1__/* .TemporaryConnectionState.ALLOWED */ .T.ALLOWED
                : _baklavajs_core_types__WEBPACK_IMPORTED_MODULE_1__/* .TemporaryConnectionState.FORBIDDEN */ .T.FORBIDDEN;
            if (this.hasEnginePlugin) {
                this.connections
                    .filter(function (c) { return c.to === ni; })
                    .forEach(function (c) {
                    c.isInDanger = true;
                });
            }
        }
        else if (!ni && this.temporaryConnection) {
            this.$set(this.temporaryConnection, "to", undefined);
            this.temporaryConnection.status = _baklavajs_core_types__WEBPACK_IMPORTED_MODULE_1__/* .TemporaryConnectionState.NONE */ .T.NONE;
            this.connections.forEach(function (c) {
                c.isInDanger = false;
            });
        }
    };
    EditorView.prototype.mouseMoveHandler = function (ev) {
        if (this.temporaryConnection) {
            this.temporaryConnection.mx = ev.offsetX / this.plugin.scaling - this.plugin.panning.x;
            this.temporaryConnection.my = ev.offsetY / this.plugin.scaling - this.plugin.panning.y;
        }
        else if (this.draggingStartPoint) {
            var dx = ev.screenX - this.draggingStartPoint.x;
            var dy = ev.screenY - this.draggingStartPoint.y;
            this.plugin.panning.x = this.draggingStartPanning.x + dx / this.plugin.scaling;
            this.plugin.panning.y = this.draggingStartPanning.y + dy / this.plugin.scaling;
        }
    };
    EditorView.prototype.mouseDown = function (ev) {
        var _this = this;
        if (ev.button === 0) {
            if (this.hoveringOver) {
                // if this interface is an input and already has a connection
                // to it, remove the connection and make it temporary
                var connection = this.connections.find(function (c) { return c.to === _this.hoveringOver; });
                if (this.hoveringOver.isInput && connection) {
                    this.temporaryConnection = {
                        status: _baklavajs_core_types__WEBPACK_IMPORTED_MODULE_1__/* .TemporaryConnectionState.NONE */ .T.NONE,
                        from: connection.from,
                    };
                    this.plugin.editor.removeConnection(connection);
                }
                else {
                    this.temporaryConnection = {
                        status: _baklavajs_core_types__WEBPACK_IMPORTED_MODULE_1__/* .TemporaryConnectionState.NONE */ .T.NONE,
                        from: this.hoveringOver,
                    };
                }
                this.$set(this.temporaryConnection, "mx", null);
                this.$set(this.temporaryConnection, "my", null);
            }
            else if (ev.target === this.$el) {
                this.unselectAllNodes();
                this.draggingStartPoint = {
                    x: ev.screenX,
                    y: ev.screenY,
                };
                this.draggingStartPanning = {
                    x: this.plugin.panning.x,
                    y: this.plugin.panning.y,
                };
            }
        }
    };
    EditorView.prototype.mouseUp = function () {
        this.draggingStartPoint = null;
        this.draggingStartPanning = null;
        var tc = this.temporaryConnection;
        if (tc && this.hoveringOver) {
            this.plugin.editor.addConnection(tc.from, tc.to);
        }
        this.temporaryConnection = null;
    };
    EditorView.prototype.mouseWheel = function (ev) {
        ev.preventDefault();
        var scrollAmount = ev.deltaY;
        if (ev.deltaMode === 1) {
            scrollAmount *= 32; // Firefox fix, multiplier is trial & error
        }
        var newScale = this.plugin.scaling * (1 - scrollAmount / 3000);
        var currentPoint = [
            ev.offsetX / this.plugin.scaling - this.plugin.panning.x,
            ev.offsetY / this.plugin.scaling - this.plugin.panning.y,
        ];
        var newPoint = [ev.offsetX / newScale - this.plugin.panning.x, ev.offsetY / newScale - this.plugin.panning.y];
        var diff = [newPoint[0] - currentPoint[0], newPoint[1] - currentPoint[1]];
        this.plugin.panning.x += diff[0];
        this.plugin.panning.y += diff[1];
        this.plugin.scaling = newScale;
    };
    EditorView.prototype.keyDown = function (ev) {
        var _this = this;
        if (ev.key === "Delete" && this.selectedNodes.length > 0) {
            this.selectedNodes.forEach(function (n) { return _this.plugin.editor.removeNode(n); });
        }
        else if (ev.key === "Tab") {
            ev.preventDefault();
        }
        else if (ev.key === "Control") {
            this.ctrlPressed = true;
        }
        else if (ev.key === "z" && ev.ctrlKey) {
            this.history.undo();
        }
        else if (ev.key === "y" && ev.ctrlKey) {
            this.history.redo();
        }
    };
    EditorView.prototype.keyUp = function (ev) {
        if (ev.key === "Control") {
            this.ctrlPressed = false;
        }
    };
    EditorView.prototype.selectNode = function (node, nodeView) {
        if (!this.ctrlPressed) {
            this.unselectAllNodes();
        }
        this.selectedNodes.push(node);
        this.selectedNodeViews.push(nodeView);
    };
    EditorView.prototype.unselectAllNodes = function () {
        this.selectedNodes.splice(0, this.selectedNodes.length);
        this.selectedNodeViews.splice(0, this.selectedNodeViews.length);
    };
    EditorView.prototype.openContextMenu = function (event) {
        this.contextMenu.show = true;
        this.contextMenu.x = event.offsetX;
        this.contextMenu.y = event.offsetY;
    };
    EditorView.prototype.onContextMenuClick = function (action) {
        if (action.startsWith("addNode:")) {
            var nodeName = action.substring(action.indexOf(":") + 1);
            var nt = this.plugin.editor.nodeTypes.get(nodeName);
            if (nt) {
                var node = this.plugin.editor.addNode(new nt());
                if (node) {
                    node.position.x = this.contextMenu.x / this.plugin.scaling - this.plugin.panning.x;
                    node.position.y = this.contextMenu.y / this.plugin.scaling - this.plugin.panning.y;
                }
            }
        }
        else if (action === "copy" && this.selectedNodes.length > 0) {
            this.clipboard.copy(this.selectedNodes);
        }
        else if (action === "paste" && !this.clipboard.isEmpty) {
            this.clipboard.paste();
        }
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Prop */ .fI)({ type: Object, required: true }),
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Provide */ .DF)("plugin")
    ], EditorView.prototype, "plugin", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Provide */ .DF)("editor")
    ], EditorView.prototype, "nodeeditor", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Provide */ .DF)("selectedNodeViews")
    ], EditorView.prototype, "selectedNodeViews", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Watch */ .RL)("plugin.nodeTypeAliases")
    ], EditorView.prototype, "updateContextMenu", null);
    EditorView = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Component */ .wA
    ], EditorView);
    return EditorView;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Vue */ .w3));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditorView);


/***/ }),

/***/ 7829:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5163);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2659);
/* harmony import */ var _connection_domResolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5987);
/* harmony import */ var _connection_portCoordinates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8152);




var Minimap = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(Minimap, _super);
    function Minimap() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.intervalHandle = 0;
        _this.showViewBounds = false;
        _this.dragging = false;
        _this.bounds = { x1: 0, y1: 0, x2: 0, y2: 0 };
        return _this;
    }
    Minimap.prototype.mounted = function () {
        var _this = this;
        var _a;
        var canvas = this.$refs.cv;
        this.ctx = (_a = canvas.getContext("2d")) !== null && _a !== void 0 ? _a : undefined;
        if (this.ctx) {
            this.ctx.imageSmoothingQuality = "high";
        }
        this.intervalHandle = setInterval(function () { return _this.updateCanvas(); }, 250);
    };
    Minimap.prototype.beforeDestroy = function () {
        clearInterval(this.intervalHandle);
    };
    Minimap.prototype.updateCanvas = function () {
        var e_1, _a, e_2, _b, e_3, _c, e_4, _d;
        var _e, _f;
        if (!this.ctx) {
            return;
        }
        var nodeCoords = new Map();
        var nodeDomElements = new Map();
        try {
            for (var _g = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__values)(this.nodes), _h = _g.next(); !_h.done; _h = _g.next()) {
                var n = _h.value;
                var domElement = (0,_connection_domResolver__WEBPACK_IMPORTED_MODULE_2__/* .getDomElementOfNode */ .Y)(n);
                var width = (_e = domElement === null || domElement === void 0 ? void 0 : domElement.clientWidth) !== null && _e !== void 0 ? _e : 0;
                var height = (_f = domElement === null || domElement === void 0 ? void 0 : domElement.clientHeight) !== null && _f !== void 0 ? _f : 0;
                nodeCoords.set(n, { x1: n.position.x, y1: n.position.y, x2: n.position.x + width, y2: n.position.y + height });
                nodeDomElements.set(n, domElement);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_h && !_h.done && (_a = _g.return)) _a.call(_g);
            }
            finally { if (e_1) throw e_1.error; }
        }
        // get bound rectangle
        var bounds = {
            x1: Number.MAX_SAFE_INTEGER, y1: Number.MAX_SAFE_INTEGER,
            x2: Number.MIN_SAFE_INTEGER, y2: Number.MIN_SAFE_INTEGER
        };
        try {
            for (var _j = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__values)(nodeCoords.values()), _k = _j.next(); !_k.done; _k = _j.next()) {
                var nc = _k.value;
                if (nc.x1 < bounds.x1) {
                    bounds.x1 = nc.x1;
                }
                if (nc.y1 < bounds.y1) {
                    bounds.y1 = nc.y1;
                }
                if (nc.x2 > bounds.x2) {
                    bounds.x2 = nc.x2;
                }
                if (nc.y2 > bounds.y2) {
                    bounds.y2 = nc.y2;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_k && !_k.done && (_b = _j.return)) _b.call(_j);
            }
            finally { if (e_2) throw e_2.error; }
        }
        // add some padding
        var padding = 50;
        bounds.x1 -= padding;
        bounds.y1 -= padding;
        bounds.x2 += padding;
        bounds.y2 += padding;
        this.bounds = bounds;
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        // draw connections
        this.ctx.strokeStyle = "white";
        try {
            for (var _l = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__values)(this.connections), _m = _l.next(); !_m.done; _m = _l.next()) {
                var c = _m.value;
                var toDom = (0,_connection_domResolver__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(c.to);
                var _o = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)((0,_connection_portCoordinates__WEBPACK_IMPORTED_MODULE_3__/* .getPortCoordinates */ .S)((0,_connection_domResolver__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(c.from)), 2), origX1 = _o[0], origY1 = _o[1];
                var _p = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)((0,_connection_portCoordinates__WEBPACK_IMPORTED_MODULE_3__/* .getPortCoordinates */ .S)((0,_connection_domResolver__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(c.to)), 2), origX2 = _p[0], origY2 = _p[1];
                var _q = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(this.transformCoordinates(origX1, origY1), 2), x1 = _q[0], y1 = _q[1];
                var _r = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(this.transformCoordinates(origX2, origY2), 2), x2 = _r[0], y2 = _r[1];
                this.ctx.beginPath();
                this.ctx.moveTo(x1, y1);
                if (this.plugin.useStraightConnections) {
                    this.ctx.lineTo(x2, y2);
                }
                else {
                    var dx = 0.3 * Math.abs(x1 - x2);
                    this.ctx.bezierCurveTo(x1 + dx, y1, x2 - dx, y2, x2, y2);
                }
                this.ctx.stroke();
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_m && !_m.done && (_c = _l.return)) _c.call(_l);
            }
            finally { if (e_3) throw e_3.error; }
        }
        // draw nodes
        this.ctx.strokeStyle = "lightgray";
        try {
            for (var _s = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__values)(nodeCoords.entries()), _t = _s.next(); !_t.done; _t = _s.next()) {
                var _u = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(_t.value, 2), n = _u[0], nc = _u[1];
                var _v = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(this.transformCoordinates(nc.x1, nc.y1), 2), x1 = _v[0], y1 = _v[1];
                var _w = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(this.transformCoordinates(nc.x2, nc.y2), 2), x2 = _w[0], y2 = _w[1];
                this.ctx.fillStyle = this.getNodeColor(nodeDomElements.get(n));
                this.ctx.beginPath();
                this.ctx.rect(x1, y1, x2 - x1, y2 - y1);
                this.ctx.fill();
                this.ctx.stroke();
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_t && !_t.done && (_d = _s.return)) _d.call(_s);
            }
            finally { if (e_4) throw e_4.error; }
        }
        if (this.showViewBounds) {
            var viewBounds = this.getViewBounds();
            var _x = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(this.transformCoordinates(viewBounds.x1, viewBounds.y1), 2), x1 = _x[0], y1 = _x[1];
            var _y = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(this.transformCoordinates(viewBounds.x2, viewBounds.y2), 2), x2 = _y[0], y2 = _y[1];
            this.ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
            this.ctx.fillRect(x1, y1, x2 - x1, y2 - y1);
        }
    };
    /** Transforms coordinates from editor space to minimap space */
    Minimap.prototype.transformCoordinates = function (origX, origY) {
        return [
            ((origX - this.bounds.x1) / (this.bounds.x2 - this.bounds.x1)) * this.ctx.canvas.clientWidth,
            ((origY - this.bounds.y1) / (this.bounds.y2 - this.bounds.y1)) * this.ctx.canvas.clientHeight
        ];
    };
    /** Transforms coordinates from minimap space to editor space */
    Minimap.prototype.reverseTransform = function (thisX, thisY) {
        return [
            (thisX * (this.bounds.x2 - this.bounds.x1)) / this.ctx.canvas.clientWidth + this.bounds.x1,
            (thisY * (this.bounds.y2 - this.bounds.y1)) / this.ctx.canvas.clientHeight + this.bounds.y1,
        ];
    };
    Minimap.prototype.getNodeColor = function (domElement) {
        if (domElement) {
            var content = domElement.querySelector(".__content");
            if (content) {
                var contentColor = this.getComputedColor(content);
                if (contentColor) {
                    return contentColor;
                }
            }
            var nodeColor = this.getComputedColor(domElement);
            if (nodeColor) {
                return nodeColor;
            }
        }
        return "gray";
    };
    Minimap.prototype.getComputedColor = function (domElement) {
        var c = getComputedStyle(domElement).backgroundColor;
        if (c && c !== "rgba(0, 0, 0, 0)") {
            return c;
        }
    };
    /** Returns view bounds in editor space */
    Minimap.prototype.getViewBounds = function () {
        var parentWidth = this.$parent.$el.offsetWidth;
        var parentHeight = this.$parent.$el.offsetHeight;
        var x2 = (parentWidth / this.plugin.scaling) - this.plugin.panning.x;
        var y2 = (parentHeight / this.plugin.scaling) - this.plugin.panning.y;
        return { x1: -this.plugin.panning.x, y1: -this.plugin.panning.y, x2: x2, y2: y2 };
    };
    Minimap.prototype.mousedown = function (ev) {
        if (ev.button === 0) {
            this.dragging = true;
            this.mousemove(ev);
        }
    };
    Minimap.prototype.mousemove = function (ev) {
        if (this.dragging) {
            // still slightly off when zoomed
            var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(this.reverseTransform(ev.offsetX, ev.offsetY), 2), cx = _a[0], cy = _a[1];
            var viewBounds = this.getViewBounds();
            var dx = (viewBounds.x1 - viewBounds.x2) / 2;
            var dy = (viewBounds.y1 - viewBounds.y2) / 2;
            this.plugin.panning.x = -(cx + dx);
            this.plugin.panning.y = -(cy + dy);
        }
    };
    Minimap.prototype.mouseup = function (ev) {
        this.dragging = false;
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Prop */ .fI)()
    ], Minimap.prototype, "nodes", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Prop */ .fI)()
    ], Minimap.prototype, "connections", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Inject */ .tB)("plugin")
    ], Minimap.prototype, "plugin", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Watch */ .RL)("showViewBounds"),
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Watch */ .RL)("plugin.panning.x"),
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Watch */ .RL)("plugin.panning.y"),
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Watch */ .RL)("plugin.scaling")
    ], Minimap.prototype, "updateCanvas", null);
    Minimap = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Component */ .wA
    ], Minimap);
    return Minimap;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Vue */ .w3));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Minimap);


/***/ }),

/***/ 5979:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5163);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2659);


var Sidebar = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(Sidebar, _super);
    function Sidebar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.width = 300;
        return _this;
    }
    Object.defineProperty(Sidebar.prototype, "nodeName", {
        get: function () {
            var id = this.plugin.sidebar.nodeId;
            var n = this.plugin.editor.nodes.find(function (x) { return x.id === id; });
            return n ? n.name : "";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sidebar.prototype, "styles", {
        get: function () {
            return {
                width: this.width + "px"
            };
        },
        enumerable: false,
        configurable: true
    });
    Sidebar.prototype.close = function () {
        this.plugin.sidebar.visible = false;
    };
    Sidebar.prototype.startResize = function () {
        var _this = this;
        window.addEventListener("mousemove", this.onMouseMove);
        window.addEventListener("mouseup", function () {
            window.removeEventListener("mousemove", _this.onMouseMove);
        }, { once: true });
    };
    Sidebar.prototype.onMouseMove = function (event) {
        var maxwidth = this.$parent.$el.getBoundingClientRect().width;
        this.width -= event.movementX;
        if (this.width < 300) {
            this.width = 300;
        }
        else if (this.width > 0.9 * maxwidth) {
            this.width = 0.9 * maxwidth;
        }
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Inject */ .tB)("plugin")
    ], Sidebar.prototype, "plugin", void 0);
    Sidebar = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Component */ .wA
    ], Sidebar);
    return Sidebar;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Vue */ .w3));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);


/***/ }),

/***/ 5541:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5163);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2659);
/* harmony import */ var _baklavajs_core_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5060);



var Connection = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(Connection, _super);
    function Connection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Connection.prototype.mounted = function () {
        this.plugin.hooks.renderConnection.execute(this);
    };
    Connection.prototype.updated = function () {
        this.plugin.hooks.renderConnection.execute(this);
    };
    Object.defineProperty(Connection.prototype, "d", {
        get: function () {
            var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__read)(this.transform(this.x1, this.y1), 2), tx1 = _a[0], ty1 = _a[1];
            var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__read)(this.transform(this.x2, this.y2), 2), tx2 = _b[0], ty2 = _b[1];
            if (this.plugin.useStraightConnections) {
                return "M ".concat(tx1, " ").concat(ty1, " L ").concat(tx2, " ").concat(ty2);
            }
            else {
                var dx = 0.3 * Math.abs(tx1 - tx2);
                return "M ".concat(tx1, " ").concat(ty1, " C ").concat(tx1 + dx, " ").concat(ty1, ", ").concat(tx2 - dx, " ").concat(ty2, ", ").concat(tx2, " ").concat(ty2);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Connection.prototype, "classes", {
        get: function () {
            return {
                "connection": true,
                "--temporary": this.isTemporary,
                "--allowed": this.state === _baklavajs_core_types__WEBPACK_IMPORTED_MODULE_1__/* .TemporaryConnectionState.ALLOWED */ .T.ALLOWED,
                "--forbidden": this.state === _baklavajs_core_types__WEBPACK_IMPORTED_MODULE_1__/* .TemporaryConnectionState.FORBIDDEN */ .T.FORBIDDEN
            };
        },
        enumerable: false,
        configurable: true
    });
    Connection.prototype.transform = function (x, y) {
        var tx = (x + this.plugin.panning.x) * this.plugin.scaling;
        var ty = (y + this.plugin.panning.y) * this.plugin.scaling;
        return [tx, ty];
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Prop */ .fI)({ type: Number })
    ], Connection.prototype, "x1", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Prop */ .fI)({ type: Number })
    ], Connection.prototype, "y1", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Prop */ .fI)({ type: Number })
    ], Connection.prototype, "x2", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Prop */ .fI)({ type: Number })
    ], Connection.prototype, "y2", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Prop */ .fI)({ type: Number, default: _baklavajs_core_types__WEBPACK_IMPORTED_MODULE_1__/* .TemporaryConnectionState.NONE */ .T.NONE })
    ], Connection.prototype, "state", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Prop */ .fI)({ type: Boolean, default: false })
    ], Connection.prototype, "isTemporary", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Prop */ .fI)({ type: Object })
    ], Connection.prototype, "connection", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Inject */ .tB)("plugin")
    ], Connection.prototype, "plugin", void 0);
    Connection = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Component */ .wA
    ], Connection);
    return Connection;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Vue */ .w3));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Connection);


/***/ }),

/***/ 6890:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5163);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2659);
/* harmony import */ var _juggle_resize_observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1283);
/* harmony import */ var _ConnectionView_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4609);
/* harmony import */ var _domResolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5987);
/* harmony import */ var _baklavajs_core_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5060);






var ResizeObserver = window.ResizeObserver || _juggle_resize_observer__WEBPACK_IMPORTED_MODULE_1__/* .ResizeObserver */ ["do"];
var ConnectionWrapper = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__extends)(ConnectionWrapper, _super);
    function ConnectionWrapper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.d = { x1: 0, y1: 0, x2: 0, y2: 0 };
        return _this;
    }
    Object.defineProperty(ConnectionWrapper.prototype, "state", {
        get: function () {
            return this.connection.isInDanger ?
                _baklavajs_core_types__WEBPACK_IMPORTED_MODULE_3__/* .TemporaryConnectionState.FORBIDDEN */ .T.FORBIDDEN :
                _baklavajs_core_types__WEBPACK_IMPORTED_MODULE_3__/* .TemporaryConnectionState.NONE */ .T.NONE;
        },
        enumerable: false,
        configurable: true
    });
    ConnectionWrapper.prototype.mounted = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.$nextTick()];
                    case 1:
                        _a.sent();
                        this.updateCoords();
                        return [2 /*return*/];
                }
            });
        });
    };
    ConnectionWrapper.prototype.beforeDestroy = function () {
        this.resizeObserver.disconnect();
    };
    ConnectionWrapper.prototype.updateCoords = function () {
        var _this = this;
        var from = (0,_domResolver__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(this.connection.from);
        var to = (0,_domResolver__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(this.connection.to);
        if (from.node && to.node) {
            if (!this.resizeObserver) {
                this.resizeObserver = new ResizeObserver(function () { _this.updateCoords(); });
                this.resizeObserver.observe(from.node);
                this.resizeObserver.observe(to.node);
            }
        }
        var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__read)(this.getPortCoordinates(from), 2), x1 = _a[0], y1 = _a[1];
        var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__read)(this.getPortCoordinates(to), 2), x2 = _b[0], y2 = _b[1];
        this.d = { x1: x1, y1: y1, x2: x2, y2: y2 };
    };
    ConnectionWrapper.prototype.getPortCoordinates = function (resolved) {
        if (resolved.node && resolved.interface && resolved.port) {
            return [
                resolved.node.offsetLeft + resolved.interface.offsetLeft + resolved.port.offsetLeft + resolved.port.clientWidth / 2,
                resolved.node.offsetTop + resolved.interface.offsetTop + resolved.port.offsetTop + resolved.port.clientHeight / 2
            ];
        }
        else {
            return [0, 0];
        }
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Prop */ .fI)({ type: Object })
    ], ConnectionWrapper.prototype, "connection", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Watch */ .RL)("connection.from.parent.position", { deep: true }),
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Watch */ .RL)("connection.to.parent.position", { deep: true })
    ], ConnectionWrapper.prototype, "updateCoords", null);
    ConnectionWrapper = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Component */ .wA)({
            components: {
                "connection-view": _ConnectionView_vue__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z
            }
        })
    ], ConnectionWrapper);
    return ConnectionWrapper;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Vue */ .w3));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConnectionWrapper);


/***/ }),

/***/ 3107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5163);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2659);
/* harmony import */ var _ConnectionView_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4609);
/* harmony import */ var _baklavajs_core_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5060);
/* harmony import */ var _domResolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5987);
/* harmony import */ var _portCoordinates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8152);






var TemporaryConnection = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(TemporaryConnection, _super);
    function TemporaryConnection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TemporaryConnection.prototype, "status", {
        get: function () {
            return this.connection ? this.connection.status : _baklavajs_core_types__WEBPACK_IMPORTED_MODULE_2__/* .TemporaryConnectionState.NONE */ .T.NONE;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TemporaryConnection.prototype, "d", {
        get: function () {
            if (!this.connection) {
                return {
                    input: [0, 0],
                    output: [0, 0]
                };
            }
            var start = (0,_portCoordinates__WEBPACK_IMPORTED_MODULE_4__/* .getPortCoordinates */ .S)((0,_domResolver__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(this.connection.from));
            var end = this.connection.to ?
                (0,_portCoordinates__WEBPACK_IMPORTED_MODULE_4__/* .getPortCoordinates */ .S)((0,_domResolver__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(this.connection.to)) :
                [this.connection.mx || start[0], this.connection.my || start[1]];
            if (this.connection.from.isInput) {
                return {
                    input: end,
                    output: start
                };
            }
            else {
                return {
                    input: start,
                    output: end
                };
            }
        },
        enumerable: false,
        configurable: true
    });
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Prop */ .fI)({ type: Object })
    ], TemporaryConnection.prototype, "connection", void 0);
    TemporaryConnection = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Component */ .wA)({
            components: {
                "connection-view": _ConnectionView_vue__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z
            }
        })
    ], TemporaryConnection);
    return TemporaryConnection;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Vue */ .w3));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TemporaryConnection);


/***/ }),

/***/ 3598:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5163);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2659);
/* harmony import */ var v_click_outside__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3570);
/* harmony import */ var v_click_outside__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(v_click_outside__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utility_cssNames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9714);


// @ts-ignore


var NodeView = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(NodeView, _super);
    function NodeView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.draggingStartPosition = null;
        _this.draggingStartPoint = null;
        _this.renaming = false;
        _this.tempName = "";
        _this.contextMenu = {
            show: false,
            x: 0,
            y: 0,
            items: [
                { value: "rename", label: "Rename" },
                { value: "delete", label: "Delete" }
            ]
        };
        return _this;
    }
    Object.defineProperty(NodeView.prototype, "classes", {
        get: function () {
            var _a;
            return _a = {
                    "node": true,
                    "--selected": this.selected,
                    "--dragging": !!this.draggingStartPoint,
                    "--two-column": !!this.data.twoColumn
                },
                _a["--type-".concat((0,_utility_cssNames__WEBPACK_IMPORTED_MODULE_3__/* .sanitizeName */ .q)(this.data.type))] = true,
                _a[this.data.customClasses] = true,
                _a;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NodeView.prototype, "styles", {
        get: function () {
            return {
                top: "".concat(this.data.position.y, "px"),
                left: "".concat(this.data.position.x, "px"),
                width: "".concat(this.data.width, "px")
            };
        },
        enumerable: false,
        configurable: true
    });
    NodeView.prototype.mounted = function () {
        var _this = this;
        this.data.events.addInterface.addListener(this, function () { return _this.update(); });
        this.data.events.removeInterface.addListener(this, function () { return _this.update(); });
        this.data.events.addOption.addListener(this, function () { return _this.update(); });
        this.data.events.removeOption.addListener(this, function () { return _this.update(); });
        this.plugin.hooks.renderNode.execute(this);
    };
    NodeView.prototype.updated = function () {
        this.plugin.hooks.renderNode.execute(this);
    };
    NodeView.prototype.beforeDestroy = function () {
        this.data.events.addInterface.removeListener(this);
        this.data.events.removeInterface.removeListener(this);
        this.data.events.addOption.removeListener(this);
        this.data.events.removeOption.removeListener(this);
    };
    NodeView.prototype.update = function () {
        this.$forceUpdate();
    };
    NodeView.prototype.startDrag = function (ev) {
        this.select();
        if (this.selectedNodeViews.length === 0 || this.selectedNodeViews[0] === undefined) {
            this.selectedNodeViews.splice(0, this.selectedNodeViews.length);
            this.selectedNodeViews.push(this);
        }
        this.selectedNodeViews.forEach(function (elem) {
            elem.draggingStartPoint = {
                x: ev.screenX,
                y: ev.screenY
            };
            elem.draggingStartPosition = {
                x: elem.data.position.x,
                y: elem.data.position.y
            };
            document.addEventListener("mousemove", elem.handleMove);
            document.addEventListener("mouseup", elem.stopDrag);
        });
    };
    NodeView.prototype.select = function () {
        this.$emit("select", this);
    };
    NodeView.prototype.stopDrag = function () {
        this.selectedNodeViews.forEach(function (elem) {
            elem.draggingStartPoint = null;
            elem.draggingStartPosition = null;
            document.removeEventListener("mousemove", elem.handleMove);
            document.removeEventListener("mouseup", elem.stopDrag);
        });
    };
    NodeView.prototype.handleMove = function (ev) {
        if (this.draggingStartPoint) {
            var dx = ev.screenX - this.draggingStartPoint.x;
            var dy = ev.screenY - this.draggingStartPoint.y;
            var _a = this.plugin.snappingProvider(this.draggingStartPosition.x + dx / this.plugin.scaling, this.draggingStartPosition.y + dy / this.plugin.scaling), newX = _a.x, newY = _a.y;
            var eventData = {
                nodeView: this,
                newPosition: { x: newX, y: newY }
            };
            if (this.plugin.events.beforeNodeMove.emit(eventData)) {
                return;
            }
            this.data.position.x = newX;
            this.data.position.y = newY;
            this.plugin.events.nodeMove.emit(eventData);
        }
    };
    NodeView.prototype.openContextMenu = function (ev) {
        this.contextMenu.show = true;
        this.contextMenu.x = ev.offsetX;
        this.contextMenu.y = ev.offsetY;
    };
    NodeView.prototype.onContextMenu = function (action) {
        switch (action) {
            case "delete":
                this.plugin.editor.removeNode(this.data);
                break;
            case "rename":
                this.tempName = this.data.name;
                this.renaming = true;
        }
    };
    NodeView.prototype.doneRenaming = function () {
        this.data.name = this.tempName;
        this.renaming = false;
    };
    NodeView.prototype.openSidebar = function (optionName) {
        this.plugin.sidebar.nodeId = this.data.id;
        this.plugin.sidebar.optionName = optionName;
        this.plugin.sidebar.visible = true;
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Prop */ .fI)({ type: Object })
    ], NodeView.prototype, "data", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Prop */ .fI)({ type: Boolean, default: false })
    ], NodeView.prototype, "selected", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Inject */ .tB)("plugin")
    ], NodeView.prototype, "plugin", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Inject */ .tB)("selectedNodeViews")
    ], NodeView.prototype, "selectedNodeViews", void 0);
    NodeView = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Component */ .wA)({
            directives: {
                ClickOutside: (v_click_outside__WEBPACK_IMPORTED_MODULE_1___default().directive)
            }
        })
    ], NodeView);
    return NodeView;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Vue */ .w3));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NodeView);


/***/ }),

/***/ 7747:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5163);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2659);


var NodeInterfaceView = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(NodeInterfaceView, _super);
    function NodeInterfaceView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.value = null;
        _this.isConnected = false;
        return _this;
    }
    Object.defineProperty(NodeInterfaceView.prototype, "classes", {
        get: function () {
            return {
                "node-interface": true,
                "--input": this.data.isInput,
                "--output": !this.data.isInput,
                "--connected": this.isConnected
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NodeInterfaceView.prototype, "displayName", {
        get: function () {
            return this.data.displayName || this.name;
        },
        enumerable: false,
        configurable: true
    });
    NodeInterfaceView.prototype.beforeMount = function () {
        var _this = this;
        this.value = this.data.value;
        this.data.events.setValue.addListener(this, function (v) { _this.value = v; });
        this.data.events.setConnectionCount.addListener(this, function (c) {
            _this.$forceUpdate();
            _this.isConnected = c > 0;
        });
        this.data.events.updated.addListener(this, function (v) { _this.$forceUpdate(); });
        this.isConnected = this.data.connectionCount > 0;
    };
    NodeInterfaceView.prototype.mounted = function () {
        this.plugin.hooks.renderInterface.execute(this);
    };
    NodeInterfaceView.prototype.updated = function () {
        this.plugin.hooks.renderInterface.execute(this);
    };
    NodeInterfaceView.prototype.beforeDestroy = function () {
        this.data.events.setValue.removeListener(this);
        this.data.events.setConnectionCount.removeListener(this);
        this.data.events.updated.removeListener(this);
    };
    NodeInterfaceView.prototype.startHover = function () {
        this.editor.hoveredOver(this.data);
    };
    NodeInterfaceView.prototype.endHover = function () {
        this.editor.hoveredOver(undefined);
    };
    NodeInterfaceView.prototype.getOptionComponent = function (name) {
        if (!name || !this.plugin.options) {
            return;
        }
        return this.plugin.options[name];
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Prop */ .fI)({ type: Object, default: function () { return ({}); } })
    ], NodeInterfaceView.prototype, "data", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Prop */ .fI)({ type: String, default: "" })
    ], NodeInterfaceView.prototype, "name", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Inject */ .tB)("plugin")
    ], NodeInterfaceView.prototype, "plugin", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Inject */ .tB)("editor")
    ], NodeInterfaceView.prototype, "editor", void 0);
    NodeInterfaceView = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Component */ .wA
    ], NodeInterfaceView);
    return NodeInterfaceView;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Vue */ .w3));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NodeInterfaceView);


/***/ }),

/***/ 8695:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5163);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2659);


var NodeOptionView = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(NodeOptionView, _super);
    function NodeOptionView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.value = null;
        return _this;
    }
    Object.defineProperty(NodeOptionView.prototype, "component", {
        get: function () {
            if (!this.plugin.options || !this.componentName) {
                return;
            }
            return this.plugin.options[this.componentName];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NodeOptionView.prototype, "displayName", {
        get: function () {
            return this.option.displayName || this.name;
        },
        enumerable: false,
        configurable: true
    });
    NodeOptionView.prototype.beforeMount = function () {
        var _this = this;
        this.value = this.option.value;
        this.option.events.setValue.addListener(this, function (v) { _this.value = v; });
    };
    NodeOptionView.prototype.mounted = function () {
        this.plugin.hooks.renderOption.execute(this);
    };
    NodeOptionView.prototype.updated = function () {
        this.plugin.hooks.renderOption.execute(this);
    };
    NodeOptionView.prototype.beforeDestroy = function () {
        this.option.events.setValue.removeListener(this);
    };
    NodeOptionView.prototype.updateValue = function (v) {
        this.option.value = v;
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Prop */ .fI)()
    ], NodeOptionView.prototype, "name", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Prop */ .fI)()
    ], NodeOptionView.prototype, "option", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Prop */ .fI)()
    ], NodeOptionView.prototype, "componentName", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Prop */ .fI)()
    ], NodeOptionView.prototype, "node", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Inject */ .tB)("plugin")
    ], NodeOptionView.prototype, "plugin", void 0);
    NodeOptionView = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Component */ .wA
    ], NodeOptionView);
    return NodeOptionView;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Vue */ .w3));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NodeOptionView);


/***/ }),

/***/ 9785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ TemporaryConnectionState)
/* harmony export */ });
var TemporaryConnectionState;
(function (TemporaryConnectionState) {
    TemporaryConnectionState[TemporaryConnectionState["NONE"] = 0] = "NONE";
    TemporaryConnectionState[TemporaryConnectionState["ALLOWED"] = 1] = "ALLOWED";
    TemporaryConnectionState[TemporaryConnectionState["FORBIDDEN"] = 2] = "FORBIDDEN";
})(TemporaryConnectionState || (TemporaryConnectionState = {}));


/***/ }),

/***/ 5060:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* reexport safe */ _connection__WEBPACK_IMPORTED_MODULE_0__.T)
/* harmony export */ });
/* harmony import */ var _connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9785);










/***/ }),

/***/ 2167:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ BaklavaVuePlugin)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8976);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Editor_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5749);
/* harmony import */ var portal_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1383);


// @ts-ignore

var Baklava = {
    install: function (Vue, args) {
        if ((vue__WEBPACK_IMPORTED_MODULE_0___default()) !== Vue) {
            // tslint:disable-next-line:no-console
            console.error("Multiple instances of Vue detected\n" +
                "See https://github.com/vuetifyjs/vuetify/issues/4068\n\n" +
                'If you\'re seeing "$attrs is readonly", it\'s caused by this');
        }
        Vue.use(portal_vue__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP);
        Vue.component("baklava-editor", _components_Editor_vue__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
    }
};
var BaklavaVuePlugin = Baklava;


/***/ }),

/***/ 2759:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5163);

var Clipboard = /** @class */ (function () {
    function Clipboard(editor) {
        this.nodeBuffer = "";
        this.connectionBuffer = "";
        this.editor = editor;
    }
    Object.defineProperty(Clipboard.prototype, "isEmpty", {
        get: function () {
            return !this.nodeBuffer;
        },
        enumerable: false,
        configurable: true
    });
    Clipboard.prototype.clear = function () {
        this.nodeBuffer = "";
        this.connectionBuffer = "";
    };
    Clipboard.prototype.copy = function (selectedNodes) {
        this.connectionBuffer = JSON.stringify(this.editor.connections
            .filter(function (conn) { return selectedNodes.includes(conn.from.parent) && selectedNodes.includes(conn.to.parent); })
            .map(function (conn) { return ({ from: conn.from.id, to: conn.to.id }); }));
        this.nodeBuffer = JSON.stringify(selectedNodes.map(function (n) { return n.save(); }));
    };
    Clipboard.prototype.paste = function () {
        var e_1, _a, e_2, _b;
        var _this = this;
        // Map old IDs to new IDs
        var idmap = new Map();
        // TODO: What is this?
        var intfmap = new Map();
        var parsedNodeBuffer = JSON.parse(this.nodeBuffer);
        var parsedConnectionBuffer = JSON.parse(this.connectionBuffer);
        var _loop_1 = function (n) {
            var nodeType = this_1.editor.nodeTypes.get(n.type);
            if (!nodeType) {
                // tslint:disable-next-line: no-console
                console.warn("Node type ".concat(n.type, " not registered"));
                return { value: void 0 };
            }
            var copiedNode = new nodeType();
            var generatedId = copiedNode.id;
            copiedNode.interfaces.forEach(function (intf) {
                intf.hooks.load.tap(_this, function (intfState) {
                    var newIntfId = _this.editor.generateId("ni");
                    idmap.set(intfState.id, newIntfId);
                    intfmap.set(intfState.id, generatedId);
                    intf.id = newIntfId;
                    intf.hooks.load.untap(_this);
                    return intfState;
                });
            });
            copiedNode.hooks.load.tap(this_1, function (nodeState) {
                var ns = nodeState;
                if (ns.position) {
                    ns.position.x += 10;
                    ns.position.y += 10;
                }
                return ns;
            });
            this_1.editor.addNode(copiedNode);
            copiedNode.load(n);
            copiedNode.id = generatedId;
            idmap.set(n.id, generatedId);
        };
        var this_1 = this;
        try {
            for (var parsedNodeBuffer_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(parsedNodeBuffer), parsedNodeBuffer_1_1 = parsedNodeBuffer_1.next(); !parsedNodeBuffer_1_1.done; parsedNodeBuffer_1_1 = parsedNodeBuffer_1.next()) {
                var n = parsedNodeBuffer_1_1.value;
                var state_1 = _loop_1(n);
                if (typeof state_1 === "object")
                    return state_1.value;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (parsedNodeBuffer_1_1 && !parsedNodeBuffer_1_1.done && (_a = parsedNodeBuffer_1.return)) _a.call(parsedNodeBuffer_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var _loop_2 = function (c) {
            var fromNode = this_2.editor.nodes.find(function (n) { return n.id === intfmap.get(c.from); });
            var toNode = this_2.editor.nodes.find(function (n) { return n.id === intfmap.get(c.to); });
            if (!fromNode || !toNode) {
                return "continue";
            }
            var fromIntf = Array.from(fromNode.interfaces.values()).find(function (intf) { return intf.id === idmap.get(c.from); });
            var toIntf = Array.from(toNode.interfaces.values()).find(function (intf) { return intf.id === idmap.get(c.to); });
            if (!fromIntf || !toIntf) {
                return "continue";
            }
            this_2.editor.addConnection(fromIntf, toIntf);
        };
        var this_2 = this;
        try {
            for (var parsedConnectionBuffer_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(parsedConnectionBuffer), parsedConnectionBuffer_1_1 = parsedConnectionBuffer_1.next(); !parsedConnectionBuffer_1_1.done; parsedConnectionBuffer_1_1 = parsedConnectionBuffer_1.next()) {
                var c = parsedConnectionBuffer_1_1.value;
                _loop_2(c);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (parsedConnectionBuffer_1_1 && !parsedConnectionBuffer_1_1.done && (_b = parsedConnectionBuffer_1.return)) _b.call(parsedConnectionBuffer_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    return Clipboard;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Clipboard);


/***/ }),

/***/ 5987:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ getDomElementOfNode),
/* harmony export */   "Z": () => (/* binding */ getDomElements)
/* harmony export */ });
function getDomElementOfNode(node) {
    return document.getElementById(node.id);
}
function getDomElements(ni) {
    var nodeDOM = document.getElementById(ni.parent.id);
    var interfaceDOM = document.getElementById(ni.id);
    var portDOM = interfaceDOM === null || interfaceDOM === void 0 ? void 0 : interfaceDOM.getElementsByClassName("__port");
    return {
        node: nodeDOM,
        interface: interfaceDOM,
        port: (portDOM && portDOM.length > 0) ? portDOM[0] : null
    };
}


/***/ }),

/***/ 8152:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ getPortCoordinates)
/* harmony export */ });
function getPortCoordinates(resolved) {
    if (resolved.node && resolved.interface && resolved.port) {
        return [
            resolved.node.offsetLeft + resolved.interface.offsetLeft + resolved.port.offsetLeft + resolved.port.clientWidth / 2,
            resolved.node.offsetTop + resolved.interface.offsetTop + resolved.port.offsetTop + resolved.port.clientHeight / 2
        ];
    }
    else {
        return [0, 0];
    }
}


/***/ }),

/***/ 9100:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var ConnectionStep = /** @class */ (function () {
    function ConnectionStep(type, data) {
        this.type = type;
        if (type === "addConnection") {
            this.connectionId = data;
        }
        else {
            var d = data;
            this.connectionState = {
                id: d.id,
                from: d.from.id,
                to: d.to.id
            };
        }
    }
    ConnectionStep.prototype.undo = function (editor) {
        if (this.type === "addConnection") {
            this.removeConnection(editor);
        }
        else {
            this.addConnection(editor);
        }
    };
    ConnectionStep.prototype.redo = function (editor) {
        if (this.type === "addConnection" && this.connectionState) {
            this.addConnection(editor);
        }
        else if (this.type === "removeConnection" && this.connectionId) {
            this.removeConnection(editor);
        }
    };
    ConnectionStep.prototype.addConnection = function (editor) {
        var fromIntf = editor.findNodeInterface(this.connectionState.from);
        var toIntf = editor.findNodeInterface(this.connectionState.to);
        if (!fromIntf || !toIntf) {
            return;
        }
        editor.addConnection(fromIntf, toIntf);
    };
    ConnectionStep.prototype.removeConnection = function (editor) {
        var _this = this;
        var connection = editor.connections.find(function (c) { return c.id === _this.connectionId; });
        if (!connection) {
            return;
        }
        this.connectionState = {
            id: connection.id,
            from: connection.from.id,
            to: connection.to.id
        };
        editor.removeConnection(connection);
    };
    return ConnectionStep;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConnectionStep);


/***/ }),

/***/ 9798:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nodeStep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6006);
/* harmony import */ var _connectionStep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9100);


var History = /** @class */ (function () {
    function History(viewPlugin) {
        var _this = this;
        this.maxSteps = 200;
        this.steps = [];
        this.changeBySelf = false;
        this.currentIndex = -1;
        this.activeTransaction = false;
        this.transactionSteps = [];
        this.viewPlugin = viewPlugin;
        this.viewPlugin.editor.events.addNode.addListener(this, function (node) {
            _this.addStep(new _nodeStep__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z("addNode", node.id));
        });
        this.viewPlugin.editor.events.removeNode.addListener(this, function (node) {
            _this.addStep(new _nodeStep__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z("removeNode", node.save()));
        });
        this.viewPlugin.editor.events.addConnection.addListener(this, function (conn) {
            _this.addStep(new _connectionStep__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z("addConnection", conn.id));
        });
        this.viewPlugin.editor.events.removeConnection.addListener(this, function (conn) {
            _this.addStep(new _connectionStep__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z("removeConnection", conn));
        });
    }
    History.prototype.startTransaction = function () {
        this.activeTransaction = true;
    };
    History.prototype.commitTransaction = function () {
        this.activeTransaction = false;
    };
    History.prototype.undo = function () {
        if (this.steps.length === 0 || this.currentIndex === -1) {
            return;
        }
        this.changeBySelf = true;
        this.steps[this.currentIndex--].undo(this.viewPlugin.editor);
        this.changeBySelf = false;
    };
    History.prototype.redo = function () {
        if (this.steps.length === 0 || this.currentIndex >= this.steps.length - 1) {
            return;
        }
        this.changeBySelf = true;
        this.steps[++this.currentIndex].redo(this.viewPlugin.editor);
        this.changeBySelf = false;
    };
    History.prototype.addStep = function (step) {
        if (this.changeBySelf) {
            return;
        }
        if (this.activeTransaction) {
            this.transactionSteps.push(step);
        }
        else {
            if (this.currentIndex !== this.steps.length - 1) {
                this.steps = this.steps.slice(0, this.currentIndex + 1);
            }
            this.steps.push(step);
            this.currentIndex++;
            while (this.steps.length > this.maxSteps) {
                this.steps.shift();
            }
        }
    };
    return History;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (History);


/***/ }),

/***/ 6006:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var NodeStep = /** @class */ (function () {
    function NodeStep(type, data) {
        this.type = type;
        if (type === "addNode") {
            this.nodeId = data;
        }
        else {
            this.nodeState = data;
        }
    }
    NodeStep.prototype.undo = function (editor) {
        if (this.type === "addNode") {
            this.removeNode(editor);
        }
        else {
            this.addNode(editor);
        }
    };
    NodeStep.prototype.redo = function (editor) {
        if (this.type === "addNode" && this.nodeState) {
            this.addNode(editor);
        }
        else if (this.type === "removeNode" && this.nodeId) {
            this.removeNode(editor);
        }
    };
    NodeStep.prototype.addNode = function (editor) {
        var nodeType = editor.nodeTypes.get(this.nodeState.type);
        if (!nodeType) {
            return;
        }
        var n = new nodeType();
        editor.addNode(n);
        n.load(this.nodeState);
        this.nodeId = n.id;
    };
    NodeStep.prototype.removeNode = function (editor) {
        var _this = this;
        var node = editor.nodes.find(function (n) { return n.id === _this.nodeId; });
        if (!node) {
            return;
        }
        this.nodeState = node.save();
        editor.removeNode(node);
    };
    return NodeStep;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NodeStep);


/***/ }),

/***/ 3154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ createSimpleSnappingProvider)
/* harmony export */ });
function createSimpleSnappingProvider(xGrid, yGrid) {
    return function (x, y) { return ({
        x: Math.round(x / xGrid) * xGrid,
        y: Math.round(y / yGrid) * yGrid
    }); };
}


/***/ }),

/***/ 9714:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ sanitizeName)
/* harmony export */ });
function sanitizeName(name) {
    return name.replace(" ", "-");
}


/***/ }),

/***/ 4900:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ ViewPlugin)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8976);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baklavajs_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9290);
/* harmony import */ var _snapping__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3154);
/* harmony import */ var _components_node_Node_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8731);
/* harmony import */ var _components_node_NodeOption_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7109);
/* harmony import */ var _components_node_NodeInterface_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(778);
/* harmony import */ var _components_connection_ConnectionWrapper_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(241);
/* harmony import */ var _components_connection_TemporaryConnection_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9844);
/* harmony import */ var _components_ContextMenu_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(394);
/* harmony import */ var _components_Sidebar_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6566);
/* harmony import */ var _components_Minimap_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4890);











var ViewPlugin = /** @class */ (function () {
    function ViewPlugin() {
        this.type = "ViewPlugin";
        this.panning = { x: 0, y: 0 };
        this.scaling = 1;
        this.sidebar = { visible: false, nodeId: "", optionName: "" };
        /** Use straight connections instead of bezier curves */
        this.useStraightConnections = false;
        /** Show a minimap */
        this.enableMinimap = false;
        /** Background configuration */
        this.backgroundGrid = {
            gridSize: 100,
            gridDivision: 5,
            subGridVisibleThreshold: 0.6
        };
        /**
         * Set this property to your own SnappingProvider to implement custom snapping logic.
         * You can also use the "createSimpleSnappingProvider" with custom xGrid and yGrid values.
        */
        this.snappingProvider = (0,_snapping__WEBPACK_IMPORTED_MODULE_10__/* .createSimpleSnappingProvider */ .a)(1, 1);
        this.options = {};
        this.nodeTypeAliases = {};
        this.hooks = {
            /** Called whenever a node is rendered */
            renderNode: new _baklavajs_events__WEBPACK_IMPORTED_MODULE_1__/* .SequentialHook */ .p$(),
            /** Called whenever an option is rendered */
            renderOption: new _baklavajs_events__WEBPACK_IMPORTED_MODULE_1__/* .SequentialHook */ .p$(),
            /** Called whenever an interface is rendered */
            renderInterface: new _baklavajs_events__WEBPACK_IMPORTED_MODULE_1__/* .SequentialHook */ .p$(),
            /** Called whenever a connection is rendered */
            renderConnection: new _baklavajs_events__WEBPACK_IMPORTED_MODULE_1__/* .SequentialHook */ .p$()
        };
        this.events = {
            beforeNodeMove: new _baklavajs_events__WEBPACK_IMPORTED_MODULE_1__/* .PreventableBaklavaEvent */ .wD(),
            nodeMove: new _baklavajs_events__WEBPACK_IMPORTED_MODULE_1__/* .BaklavaEvent */ .EZ()
        };
        /** Use this property to provide custom components,
         * which will be used when rendering the respective entities
         */
        this.components = {
            node: _components_node_Node_vue__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
            nodeOption: _components_node_NodeOption_vue__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
            nodeInterface: _components_node_NodeInterface_vue__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
            connection: _components_connection_ConnectionWrapper_vue__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
            tempConnection: _components_connection_TemporaryConnection_vue__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
            contextMenu: _components_ContextMenu_vue__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
            sidebar: _components_Sidebar_vue__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
            minimap: _components_Minimap_vue__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z
        };
    }
    ViewPlugin.prototype.register = function (editor) {
        var _this = this;
        this.editor = editor;
        this.editor.hooks.load.tap(this, function (d) {
            _this.panning = d.panning;
            _this.scaling = d.scaling;
            return d;
        });
        this.editor.hooks.save.tap(this, function (d) {
            d.panning = _this.panning;
            d.scaling = _this.scaling;
            return d;
        });
        this.editor.events.beforeAddNode.addListener(this, function (node) {
            var n = node;
            n.position = { x: 0, y: 0 };
            n.disablePointerEvents = false;
            n.twoColumn = n.twoColumn || false;
            n.width = n.width || 200;
            n.customClasses = n.customClasses || "";
            node.hooks.save.tap(_this, function (state) {
                state.position = n.position;
                state.width = n.width;
                state.twoColumn = n.twoColumn;
                state.customClasses = n.customClasses;
                return state;
            });
            node.hooks.load.tap(_this, function (state) {
                // default values for savefiles from older versions
                n.position = state.position || { x: 0, y: 0 };
                n.width = state.width || 200;
                n.twoColumn = state.twoColumn || false;
                return state;
            });
        });
    };
    /**
     * Register a node option
     * @param name Name of the node option as used when defining nodes
     * @param component Component that will be rendered for the option
     */
    ViewPlugin.prototype.registerOption = function (name, component) {
        vue__WEBPACK_IMPORTED_MODULE_0___default().set(this.options, name, component);
    };
    /**
     * Add an alias for a node type that is displayed in the "Add Node" context menu instead of
     * the raw node type name
     * @param nodeType Node type
     * @param alias Alias that will be displayed in the context menu. When this value is `null`, an existing alias is removed
     */
    ViewPlugin.prototype.setNodeTypeAlias = function (nodeType, alias) {
        if (alias) {
            vue__WEBPACK_IMPORTED_MODULE_0___default().set(this.nodeTypeAliases, nodeType, alias);
        }
        else if (this.nodeTypeAliases[nodeType]) {
            vue__WEBPACK_IMPORTED_MODULE_0___default()["delete"](this.nodeTypeAliases, nodeType);
        }
    };
    return ViewPlugin;
}());



/***/ }),

/***/ 8976:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__8976__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaklavaVuePlugin": () => (/* reexport safe */ _baklavaVuePlugin__WEBPACK_IMPORTED_MODULE_10__.q),
/* harmony export */   "Components": () => (/* binding */ Components),
/* harmony export */   "Editor": () => (/* reexport safe */ _components_Editor_vue__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "ViewPlugin": () => (/* reexport safe */ _viewPlugin__WEBPACK_IMPORTED_MODULE_12__.l),
/* harmony export */   "createSimpleSnappingProvider": () => (/* reexport safe */ _snapping__WEBPACK_IMPORTED_MODULE_11__.a)
/* harmony export */ });
/* harmony import */ var _components_Editor_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5749);
/* harmony import */ var _components_connection_ConnectionView_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4609);
/* harmony import */ var _components_connection_ConnectionWrapper_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(241);
/* harmony import */ var _components_connection_TemporaryConnection_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9844);
/* harmony import */ var _components_node_Node_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8731);
/* harmony import */ var _components_node_NodeInterface_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(778);
/* harmony import */ var _components_node_NodeOption_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7109);
/* harmony import */ var _components_ContextMenu_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(394);
/* harmony import */ var _components_Sidebar_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6566);
/* harmony import */ var _components_Minimap_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4890);
/* harmony import */ var _baklavaVuePlugin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2167);
/* harmony import */ var _snapping__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3154);
/* harmony import */ var _viewPlugin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4900);










var Components = {
    Connection: _components_connection_ConnectionView_vue__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
    ConnectionWrapper: _components_connection_ConnectionWrapper_vue__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
    TemporaryConnection: _components_connection_TemporaryConnection_vue__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
    Node: _components_node_Node_vue__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
    NodeInterface: _components_node_NodeInterface_vue__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
    NodeOption: _components_node_NodeOption_vue__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
    ContextMenu: _components_ContextMenu_vue__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
    Sidebar: _components_Sidebar_vue__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
    Minimap: _components_Minimap_vue__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z
};




})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});