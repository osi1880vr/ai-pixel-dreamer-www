/*! For license information please see index.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("BaklavaJSEngine",[],t):"object"==typeof exports?exports.BaklavaJSEngine=t():e.BaklavaJSEngine=t()}("undefined"!=typeof self?self:this,(function(){return(()=>{"use strict";var e={163:(e,t,r)=>{r.r(t),r.d(t,{__assign:()=>i,__asyncDelegator:()=>g,__asyncGenerator:()=>b,__asyncValues:()=>O,__await:()=>m,__awaiter:()=>l,__classPrivateFieldGet:()=>C,__classPrivateFieldSet:()=>S,__createBinding:()=>h,__decorate:()=>c,__exportStar:()=>d,__extends:()=>o,__generator:()=>f,__importDefault:()=>j,__importStar:()=>E,__makeTemplateObject:()=>x,__metadata:()=>s,__param:()=>u,__read:()=>y,__rest:()=>a,__spread:()=>v,__spreadArray:()=>w,__spreadArrays:()=>_,__values:()=>p});var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var i=function(){return i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)};function a(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function c(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a}function u(e,t){return function(r,n){t(r,n,e)}}function s(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function l(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{u(n.next(e))}catch(e){i(e)}}function c(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,c)}u((n=n.apply(e,t||[])).next())}))}function f(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}var h=Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]};function d(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||h(t,e,r)}function p(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function y(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a}function v(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(y(arguments[t]));return e}function _(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var i=arguments[t],a=0,c=i.length;a<c;a++,o++)n[o]=i[a];return n}function w(e,t,r){if(r||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}function m(e){return this instanceof m?(this.v=e,this):new m(e)}function b(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(e,t||[]),i=[];return n={},a("next"),a("throw"),a("return"),n[Symbol.asyncIterator]=function(){return this},n;function a(e){o[e]&&(n[e]=function(t){return new Promise((function(r,n){i.push([e,t,r,n])>1||c(e,t)}))})}function c(e,t){try{(r=o[e](t)).value instanceof m?Promise.resolve(r.value.v).then(u,s):l(i[0][2],r)}catch(e){l(i[0][3],e)}var r}function u(e){c("next",e)}function s(e){c("throw",e)}function l(e,t){e(t),i.shift(),i.length&&c(i[0][0],i[0][1])}}function g(e){var t,r;return t={},n("next"),n("throw",(function(e){throw e})),n("return"),t[Symbol.iterator]=function(){return this},t;function n(n,o){t[n]=e[n]?function(t){return(r=!r)?{value:m(e[n](t)),done:"return"===n}:o?o(t):t}:o}}function O(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=p(e),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise((function(n,o){!function(e,t,r,n){Promise.resolve(n).then((function(t){e({value:t,done:r})}),t)}(n,o,(t=e[r](t)).done,t.value)}))}}}function x(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var P=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function E(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&h(t,e,r);return P(t,e),t}function j(e){return e&&e.__esModule?e:{default:e}}function C(e,t,r,n){if("a"===r&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?n:"a"===r?n.call(e):n?n.value:t.get(e)}function S(e,t,r,n,o){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?o.call(e,r):o?o.value=r:t.set(e,r),r}},749:(e,t,r)=>{t.p$=t.wD=t.EZ=void 0;var n=r(163),o=function(){function e(){this.listeners=new Map}return e.prototype.addListener=function(e,t){this.listeners.set(e,t)},e.prototype.removeListener=function(e){this.listeners.has(e)&&this.listeners.delete(e)},e.prototype.emit=function(e){this.listeners.forEach((function(t){return t(e)}))},e}();t.EZ=o;var i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(t,e),t.prototype.emit=function(e){var t,r;try{for(var o=n.__values(Array.from(this.listeners.values())),i=o.next();!i.done;i=o.next())if(!1===(0,i.value)(e))return!0}catch(e){t={error:e}}finally{try{i&&!i.done&&(r=o.return)&&r.call(o)}finally{if(t)throw t.error}}return!1},t}(o);t.wD=i;var a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(t,e),t.prototype.execute=function(e){var t,r,o=e;try{for(var i=n.__values(this.taps),a=i.next();!a.done;a=i.next())o=(0,a.value)(o)}catch(e){t={error:e}}finally{try{a&&!a.done&&(r=i.return)&&r.call(i)}finally{if(t)throw t.error}}return o},t}(function(){function e(){this.tapMap=new Map,this.taps=[]}return e.prototype.tap=function(e,t){this.tapMap.has(e)&&this.untap(e),this.tapMap.set(e,t),this.taps.push(t)},e.prototype.untap=function(e){if(this.tapMap.has(e)){var t=this.tapMap.get(e);this.tapMap.delete(e);var r=this.taps.indexOf(t);r>=0&&this.taps.splice(r,1)}},e}());t.p$=a}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{r.r(n),r.d(n,{Engine:()=>f,calculateOrder:()=>u,containsCycle:()=>l});var e=r(163),t=r(749);new Error("timeout while waiting for mutex to become available"),new Error("mutex already locked");const o=new Error("request for lock canceled");var i=function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{u(n.next(e))}catch(e){i(e)}}function c(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,c)}u((n=n.apply(e,t||[])).next())}))};class a{constructor(e,t=o){if(this._maxConcurrency=e,this._cancelError=t,this._queue=[],this._waiters=[],e<=0)throw new Error("semaphore must be initialized to a positive value");this._value=e}acquire(){const e=this.isLocked(),t=new Promise(((e,t)=>this._queue.push({resolve:e,reject:t})));return e||this._dispatch(),t}runExclusive(e){return i(this,void 0,void 0,(function*(){const[t,r]=yield this.acquire();try{return yield e(t)}finally{r()}}))}waitForUnlock(){return i(this,void 0,void 0,(function*(){return this.isLocked()?new Promise((e=>this._waiters.push({resolve:e}))):Promise.resolve()}))}isLocked(){return this._value<=0}release(){if(this._maxConcurrency>1)throw new Error("this method is unavailable on semaphores with concurrency > 1; use the scoped release returned by acquire instead");if(this._currentReleaser){const e=this._currentReleaser;this._currentReleaser=void 0,e()}}cancel(){this._queue.forEach((e=>e.reject(this._cancelError))),this._queue=[]}_dispatch(){const e=this._queue.shift();if(!e)return;let t=!1;this._currentReleaser=()=>{t||(t=!0,this._value++,this._resolveWaiters(),this._dispatch())},e.resolve([this._value--,this._currentReleaser])}_resolveWaiters(){this._waiters.forEach((e=>e.resolve())),this._waiters=[]}}class c{constructor(e){this._semaphore=new a(1,e)}acquire(){return e=this,t=void 0,n=function*(){const[,e]=yield this._semaphore.acquire();return e},new((r=void 0)||(r=Promise))((function(o,i){function a(e){try{u(n.next(e))}catch(e){i(e)}}function c(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,c)}u((n=n.apply(e,t||[])).next())}));var e,t,r,n}runExclusive(e){return this._semaphore.runExclusive((()=>e()))}isLocked(){return this._semaphore.isLocked()}waitForUnlock(){return this._semaphore.waitForUnlock()}release(){this._semaphore.release()}cancel(){return this._semaphore.cancel()}}function u(e,t,r){var n=new Map;e.forEach((function(e){n.set(e,t.filter((function(t){return t.to&&t.to.parent===e})).map((function(e){return e.from.parent})))}));var o=r||e.filter((function(e){return t=e.outputInterfaces,[Object,Array].includes((t||{}).constructor)&&!Object.entries(t||{}).length;var t})),i={children:o.map((function(e){return{n:e,children:[]}}))};s(i,[],n);var a=[],c=[];for(a.push(i);a.length>0;)a.shift().children.forEach((function(e){c.push(e.n),a.push(e)}));for(var u=[];c.length>0;){var l=c.pop();u.includes(l)||u.push(l)}return{calculationOrder:u,rootNodes:o}}function s(t,r,n){var o,i;try{for(var a=(0,e.__values)(t.children),c=a.next();!c.done;c=a.next()){var u=c.value;if(r.includes(u.n))throw new Error("Cycle detected");r.unshift(u.n),u.children=u.children.concat(n.get(u.n).map((function(e){return{n:e,children:new Array}}))),s(u,r,n),r.shift()}}catch(e){o={error:e}}finally{try{c&&!c.done&&(i=a.return)&&i.call(a)}finally{if(o)throw o.error}}}function l(e,t){try{return u(e,t),!0}catch(e){return!1}}var f=function(){function r(e){void 0===e&&(e=!1),this.type="EnginePlugin",this.events={beforeCalculate:new t.wD,calculated:new t.EZ},this.hooks={gatherCalculationData:new t.p$},this.nodeCalculationOrder=[],this.actualRootNodes=[],this.connectionsPerNode=new Map,this.recalculateOrder=!1,this.calculateOnChange=!1,this.calculationInProgress=!1,this.mutex=new c,this._rootNodes=void 0,this.interfaceTypePlugins=[],this.calculateOnChange=e}return Object.defineProperty(r.prototype,"rootNodes",{get:function(){return this._rootNodes},set:function(e){this._rootNodes=e,this.recalculateOrder=!0},enumerable:!1,configurable:!0}),r.prototype.register=function(e){var t=this;this.editor=e,this.editor.plugins.forEach((function(e){"InterfaceTypePlugin"===e.type&&t.interfaceTypePlugins.push(e)})),this.editor.events.usePlugin.addListener(this,(function(e){"InterfaceTypePlugin"===e.type&&t.interfaceTypePlugins.push(e)})),this.editor.events.addNode.addListener(this,(function(e){e.events.update.addListener(t,(function(e){(e.interface&&0===e.interface.connectionCount||e.option)&&t.onChange(!1)})),t.onChange(!0)})),this.editor.events.removeNode.addListener(this,(function(e){e.events.update.removeListener(t)})),this.editor.events.checkConnection.addListener(this,(function(e){if(!t.checkConnection(e.from,e.to))return!1})),this.editor.events.addConnection.addListener(this,(function(e){t.editor.connections.filter((function(t){return t.id!==e.id&&t.to===e.to})).forEach((function(e){return t.editor.removeConnection(e)})),t.onChange(!0)})),this.editor.events.removeConnection.addListener(this,(function(){t.onChange(!0)}))},r.prototype.calculate=function(t){return(0,e.__awaiter)(this,void 0,void 0,(function(){var r=this;return(0,e.__generator)(this,(function(n){switch(n.label){case 0:return[4,this.mutex.runExclusive((function(){return(0,e.__awaiter)(r,void 0,void 0,(function(){return(0,e.__generator)(this,(function(e){switch(e.label){case 0:return[4,this.internalCalculate(t)];case 1:return[2,e.sent()]}}))}))}))];case 1:return[2,n.sent()]}}))}))},r.prototype.calculateOrder=function(){this.calculateNodeTree(),this.recalculateOrder=!1},r.prototype.internalCalculate=function(t){return(0,e.__awaiter)(this,void 0,void 0,(function(){var r,n,o,i,a,c,u,s,l=this;return(0,e.__generator)(this,(function(f){switch(f.label){case 0:if(this.events.beforeCalculate.emit(t))return[2,null];t=this.hooks.gatherCalculationData.execute(t),this.calculationInProgress=!0,this.recalculateOrder&&this.calculateOrder(),r=new Map,f.label=1;case 1:f.trys.push([1,6,7,8]),n=(0,e.__values)(this.nodeCalculationOrder),o=n.next(),f.label=2;case 2:return o.done?[3,5]:[4,(i=o.value).calculate(t)];case 3:a=f.sent(),this.actualRootNodes.includes(i)&&r.set(i,a),this.connectionsPerNode.has(i)&&this.connectionsPerNode.get(i).forEach((function(e){var t=l.interfaceTypePlugins.find((function(t){return t.canConvert(e.from.type,e.to.type)}));e.to.value=t?t.convert(e.from.type,e.to.type,e.from.value):e.from.value})),f.label=4;case 4:return o=n.next(),[3,2];case 5:return[3,8];case 6:return c=f.sent(),u={error:c},[3,8];case 7:try{o&&!o.done&&(s=n.return)&&s.call(n)}finally{if(u)throw u.error}return[7];case 8:return this.calculationInProgress=!1,this.events.calculated.emit(r),[2,r]}}))}))},r.prototype.checkConnection=function(e,t){var r={from:e,to:t,id:"dc",destructed:!1,isInDanger:!1},n=this.editor.connections.concat([r]);return n.filter((function(e){return e.to!==t})),l(this.editor.nodes,n)},r.prototype.onChange=function(e){this.recalculateOrder=this.recalculateOrder||e,this.calculateOnChange&&!this.calculationInProgress&&this.calculate()},r.prototype.calculateNodeTree=function(){var e=this,t=u(this.editor.nodes,this.editor.connections,this.rootNodes),r=t.calculationOrder,n=t.rootNodes;this.nodeCalculationOrder=r,this.actualRootNodes=n,this.connectionsPerNode.clear(),this.editor.nodes.forEach((function(t){e.connectionsPerNode.set(t,e.editor.connections.filter((function(e){return e.from.parent===t})))}))},r}()})(),n})()}));