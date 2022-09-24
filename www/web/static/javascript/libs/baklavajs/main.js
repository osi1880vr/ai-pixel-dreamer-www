(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define("BaklavaJS", ["vue"], factory);
	else if(typeof exports === 'object')
		exports["BaklavaJS"] = factory(require("vue"));
	else
		root["BaklavaJS"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__976__) {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 976:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__976__;

/***/ }),

/***/ 197:
/***/ ((__unused_webpack_module, exports) => {

/*! For license information please see index.cjs.LICENSE.txt */
(()=>{"use strict";var e={163:(e,t,n)=>{n.r(t),n.d(t,{__assign:()=>i,__asyncDelegator:()=>g,__asyncGenerator:()=>_,__asyncValues:()=>O,__await:()=>b,__awaiter:()=>f,__classPrivateFieldGet:()=>P,__classPrivateFieldSet:()=>j,__createBinding:()=>l,__decorate:()=>s,__exportStar:()=>d,__extends:()=>r,__generator:()=>p,__importDefault:()=>E,__importStar:()=>x,__makeTemplateObject:()=>I,__metadata:()=>u,__param:()=>c,__read:()=>v,__rest:()=>a,__spread:()=>y,__spreadArray:()=>w,__spreadArrays:()=>m,__values:()=>h});var o=function(e,t){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},o(e,t)};function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var i=function(){return i=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},i.apply(this,arguments)};function a(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n}function s(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}function c(e,t){return function(n,o){t(n,o,e)}}function u(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function f(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{c(o.next(e))}catch(e){i(e)}}function s(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((o=o.apply(e,t||[])).next())}))}function p(e,t){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}var l=Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]};function d(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||l(t,e,n)}function h(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],o=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&o>=e.length&&(e=void 0),{value:e&&e[o++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function v(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var o,r,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(o=i.next()).done;)a.push(o.value)}catch(e){r={error:e}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}return a}function y(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(v(arguments[t]));return e}function m(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var o=Array(e),r=0;for(t=0;t<n;t++)for(var i=arguments[t],a=0,s=i.length;a<s;a++,r++)o[r]=i[a];return o}function w(e,t,n){if(n||2===arguments.length)for(var o,r=0,i=t.length;r<i;r++)!o&&r in t||(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}function b(e){return this instanceof b?(this.v=e,this):new b(e)}function _(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o,r=n.apply(e,t||[]),i=[];return o={},a("next"),a("throw"),a("return"),o[Symbol.asyncIterator]=function(){return this},o;function a(e){r[e]&&(o[e]=function(t){return new Promise((function(n,o){i.push([e,t,n,o])>1||s(e,t)}))})}function s(e,t){try{(n=r[e](t)).value instanceof b?Promise.resolve(n.value.v).then(c,u):f(i[0][2],n)}catch(e){f(i[0][3],e)}var n}function c(e){s("next",e)}function u(e){s("throw",e)}function f(e,t){e(t),i.shift(),i.length&&s(i[0][0],i[0][1])}}function g(e){var t,n;return t={},o("next"),o("throw",(function(e){throw e})),o("return"),t[Symbol.iterator]=function(){return this},t;function o(o,r){t[o]=e[o]?function(t){return(n=!n)?{value:b(e[o](t)),done:"return"===o}:r?r(t):t}:r}}function O(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=h(e),t={},o("next"),o("throw"),o("return"),t[Symbol.asyncIterator]=function(){return this},t);function o(n){t[n]=e[n]&&function(t){return new Promise((function(o,r){!function(e,t,n,o){Promise.resolve(o).then((function(t){e({value:t,done:n})}),t)}(o,r,(t=e[n](t)).done,t.value)}))}}}function I(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var C=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function x(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&l(t,e,n);return C(t,e),t}function E(e){return e&&e.__esModule?e:{default:e}}function P(e,t,n,o){if("a"===n&&!o)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?o:"a"===n?o.call(e):o?o.value:t.get(e)}function j(e,t,n,o,r){if("m"===o)throw new TypeError("Private method is not writable");if("a"===o&&!r)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===o?r.call(e,n):r?r.value=n:t.set(e,n),n}},749:(e,t,n)=>{t.p$=t.wD=t.EZ=void 0;var o=n(163),r=function(){function e(){this.listeners=new Map}return e.prototype.addListener=function(e,t){this.listeners.set(e,t)},e.prototype.removeListener=function(e){this.listeners.has(e)&&this.listeners.delete(e)},e.prototype.emit=function(e){this.listeners.forEach((function(t){return t(e)}))},e}();t.EZ=r;var i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o.__extends(t,e),t.prototype.emit=function(e){var t,n;try{for(var r=o.__values(Array.from(this.listeners.values())),i=r.next();!i.done;i=r.next())if(!1===(0,i.value)(e))return!0}catch(e){t={error:e}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}return!1},t}(r);t.wD=i;var a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o.__extends(t,e),t.prototype.execute=function(e){var t,n,r=e;try{for(var i=o.__values(this.taps),a=i.next();!a.done;a=i.next())r=(0,a.value)(r)}catch(e){t={error:e}}finally{try{a&&!a.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}return r},t}(function(){function e(){this.tapMap=new Map,this.taps=[]}return e.prototype.tap=function(e,t){this.tapMap.has(e)&&this.untap(e),this.tapMap.set(e,t),this.taps.push(t)},e.prototype.untap=function(e){if(this.tapMap.has(e)){var t=this.tapMap.get(e);this.tapMap.delete(e);var n=this.taps.indexOf(t);n>=0&&this.taps.splice(n,1)}},e}());t.p$=a}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};(()=>{n.r(o),n.d(o,{Connection:()=>i,DummyConnection:()=>a,Editor:()=>c,Node:()=>p,NodeBuilder:()=>d,NodeInterface:()=>u,NodeOption:()=>f});var e=0;function t(){return Date.now().toString()+(e++).toString()}var r=n(749),i=function(){function e(e,n){if(this.isInDanger=!1,this.destructed=!1,this.events={destruct:new r.EZ},!e||!n)throw new Error("Cannot initialize connection with null/undefined for 'from' or 'to' values");this.id=t(),this.from=e,this.to=n,this.from.connectionCount++,this.to.connectionCount++}return e.prototype.destruct=function(){this.events.destruct.emit(),this.from.connectionCount--,this.to.connectionCount--,this.destructed=!0},e}(),a=function(e,n){if(!e||!n)throw new Error("Cannot initialize connection with null/undefined for 'from' or 'to' values");this.id=t(),this.from=e,this.to=n},s=n(163),c=function(){function e(){this._plugins=new Set,this._nodes=[],this._connections=[],this._nodeTypes=new Map,this._nodeCategories=new Map([["default",[]]]),this._loading=!1,this.events={beforeRegisterNodeType:new r.wD,registerNodeType:new r.EZ,beforeAddNode:new r.wD,addNode:new r.EZ,beforeRemoveNode:new r.wD,removeNode:new r.EZ,beforeAddConnection:new r.wD,addConnection:new r.EZ,checkConnection:new r.wD,beforeRemoveConnection:new r.wD,removeConnection:new r.EZ,beforeUsePlugin:new r.wD,usePlugin:new r.EZ},this.hooks={save:new r.p$,load:new r.p$}}return Object.defineProperty(e.prototype,"nodes",{get:function(){return this._nodes},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"connections",{get:function(){return this._connections},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"nodeTypes",{get:function(){return this._nodeTypes},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"nodeCategories",{get:function(){return this._nodeCategories},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"plugins",{get:function(){return this._plugins},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"loading",{get:function(){return this._loading},enumerable:!1,configurable:!0}),e.prototype.registerNodeType=function(e,t,n){void 0===n&&(n="default"),this.events.beforeRegisterNodeType.emit({typeName:e,type:t,category:n})||(this._nodeTypes.set(e,t),this.nodeCategories.has(n)||this._nodeCategories.set(n,[]),this.nodeCategories.get(n).push(e),this.events.registerNodeType.emit({typeName:e,type:t,category:n}))},e.prototype.addNode=function(e){if(!this.events.beforeAddNode.emit(e))return e.registerEditor(this),this._nodes.push(e),this.events.addNode.emit(e),e},e.prototype.removeNode=function(e){var t=this;if(this.nodes.includes(e)){if(this.events.beforeRemoveNode.emit(e))return;this.connections.filter((function(t){return t.from.parent===e||t.to.parent===e})).forEach((function(e){return t.removeConnection(e)})),this._nodes.splice(this.nodes.indexOf(e),1),this.events.removeNode.emit(e)}},e.prototype.addConnection=function(e,t){var n=this.checkConnection(e,t);if(n&&!this.events.beforeAddConnection.emit({from:e,to:t})){var o=new i(n.from,n.to);return this._connections.push(o),this.events.addConnection.emit(o),o}},e.prototype.removeConnection=function(e){if(this.connections.includes(e)){if(this.events.beforeRemoveConnection.emit(e))return;e.destruct(),this._connections.splice(this.connections.indexOf(e),1),this.events.removeConnection.emit(e)}},e.prototype.checkConnection=function(e,t){if(!e||!t)return!1;if(e.parent===t.parent)return!1;if(e.isInput&&!t.isInput){var n=e;e=t,t=n}return!(e.isInput||!t.isInput)&&!this.connections.some((function(n){return n.from===e&&n.to===t}))&&!this.events.checkConnection.emit({from:e,to:t})&&new a(e,t)},e.prototype.load=function(e){var t,n,o,r;try{this._loading=!0;for(var i=[],a=this.connections.length-1;a>=0;a--)this.removeConnection(this.connections[a]);for(a=this.nodes.length-1;a>=0;a--)this.removeNode(this.nodes[a]);try{for(var c=(0,s.__values)(e.nodes),u=c.next();!u.done;u=c.next()){var f=u.value,p=this.nodeTypes.get(f.type);if(p){var l=new p;this.addNode(l),l.load(f)}else i.push("Node type ".concat(f.type," is not registered"))}}catch(e){t={error:e}}finally{try{u&&!u.done&&(n=c.return)&&n.call(c)}finally{if(t)throw t.error}}try{for(var d=(0,s.__values)(e.connections),h=d.next();!h.done;h=d.next()){var v=h.value,y=this.findNodeInterface(v.from),m=this.findNodeInterface(v.to);if(y)if(m){var w=this.addConnection(y,m);w?w.id=v.id:i.push("Unable to create connection from ".concat(v.from," to ").concat(v.to))}else i.push("Could not find interface with id ".concat(v.to));else i.push("Could not find interface with id ".concat(v.from))}}catch(e){o={error:e}}finally{try{h&&!h.done&&(r=d.return)&&r.call(d)}finally{if(o)throw o.error}}return this.hooks.load.execute(e),i.forEach((function(e){return console.warn(e)})),i}finally{this._loading=!1}},e.prototype.save=function(){var e={nodes:this.nodes.map((function(e){return e.save()})),connections:this.connections.map((function(e){return{id:e.id,from:e.from.id,to:e.to.id}}))};return this.hooks.save.execute(e)},e.prototype.use=function(e){return!this.events.beforeUsePlugin.emit(e)&&(this._plugins.add(e),e.register(this),this.events.usePlugin.emit(e),!0)},e.prototype.generateId=function(e){return void 0===e&&(e=""),e+t()},e.prototype.findNodeInterface=function(e){var t,n,o,r;try{for(var i=(0,s.__values)(this.nodes),a=i.next();!a.done;a=i.next()){var c=a.value;try{for(var u=(o=void 0,(0,s.__values)(c.interfaces.keys())),f=u.next();!f.done;f=u.next()){var p=f.value;if(c.interfaces.get(p).id===e)return c.interfaces.get(p)}}catch(e){o={error:e}}finally{try{f&&!f.done&&(r=u.return)&&r.call(u)}finally{if(o)throw o.error}}}}catch(e){t={error:e}}finally{try{a&&!a.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}},e}(),u=function(){function e(e,n){this.events={setConnectionCount:new r.EZ,beforeSetValue:new r.wD,setValue:new r.EZ,updated:new r.EZ},this.hooks={load:new r.p$,save:new r.p$},this._connectionCount=0,this._value=null,this.parent=e,this.isInput=n,this.id="ni_"+t()}return Object.defineProperty(e.prototype,"connectionCount",{get:function(){return this._connectionCount},set:function(e){this._connectionCount=e,this.events.setConnectionCount.emit(e)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"value",{get:function(){return this._value},set:function(e){this.events.beforeSetValue.emit(e)||(this._value=e,this.events.setValue.emit(e))},enumerable:!1,configurable:!0}),e.prototype.load=function(e){this.id=e.id,this.value=e.value,this.hooks.load.execute(e)},e.prototype.save=function(){var e={id:this.id,value:this.value};return this.hooks.save.execute(e)},e}(),f=function(){function e(e,t,n){this.events={beforeSetValue:new r.wD,setValue:new r.EZ,updated:new r.EZ},this.optionComponent=e,this.sidebarComponent=n,this._value=t}return Object.defineProperty(e.prototype,"value",{get:function(){return this._value},set:function(e){this.events.beforeSetValue.emit(e)||(this._value=e,this.events.setValue.emit(e))},enumerable:!1,configurable:!0}),e}(),p=function(){function e(){this.id="node_"+t(),this.interfaces=new Map,this.options=new Map,this.state={},this.events={beforeAddInterface:new r.wD,addInterface:new r.EZ,beforeRemoveInterface:new r.wD,removeInterface:new r.EZ,beforeAddOption:new r.wD,addOption:new r.EZ,beforeRemoveOption:new r.wD,removeOption:new r.EZ,update:new r.EZ},this.hooks={load:new r.p$,save:new r.p$}}return Object.defineProperty(e.prototype,"inputInterfaces",{get:function(){var e={};return this.interfaces.forEach((function(t,n){t.isInput&&(e[n]=t)})),e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"outputInterfaces",{get:function(){var e={};return this.interfaces.forEach((function(t,n){t.isInput||(e[n]=t)})),e},enumerable:!1,configurable:!0}),e.prototype.load=function(e){var t=this;this.id=e.id,this.name=e.name,this.state=e.state,e.options.forEach((function(e){var n=(0,s.__read)(e,2),o=n[0],r=n[1];t.options.has(o)&&(t.options.get(o).value=r)})),e.interfaces.forEach((function(e){var n=(0,s.__read)(e,2),o=n[0],r=n[1];t.interfaces.has(o)&&t.interfaces.get(o).load(r)})),this.hooks.load.execute(e)},e.prototype.save=function(){var e={type:this.type,id:this.id,name:this.name,options:Array.from(this.options.entries()).map((function(e){var t=(0,s.__read)(e,2);return[t[0],t[1].value]})),state:this.state,interfaces:Array.from(this.interfaces.entries()).map((function(e){var t=(0,s.__read)(e,2);return[t[0],t[1].save()]}))};return this.hooks.save.execute(e)},e.prototype.calculate=function(e){},e.prototype.addInputInterface=function(e,t,n,o){var r=this;if(void 0===n&&(n=null),!this.events.beforeAddInterface.emit({name:e,isInput:!0,option:t,defaultValue:n})){var i=this.addInterface(!0,e,t);return i.events.setValue.addListener(this,(function(){return r.events.update.emit({name:e,interface:i})})),i.value=n,Object.entries(o||{}).forEach((function(e){var t=(0,s.__read)(e,2),n=t[0],o=t[1];i[n]=o})),this.events.addInterface.emit(i),i}},e.prototype.addOutputInterface=function(e,t){if(!this.events.beforeAddInterface.emit({name:e,isInput:!1})){var n=this.addInterface(!1,e);return Object.entries(t||{}).forEach((function(e){var t=(0,s.__read)(e,2),o=t[0],r=t[1];n[o]=r})),this.events.addInterface.emit(n),n}},e.prototype.removeInterface=function(e){var t=this,n=this.getInterface(e);if(n){if(this.events.beforeRemoveInterface.emit(n))return;if(n.connectionCount>0){if(!this.editorInstance)throw new Error("Interface is connected, but no editor instance is specified. Unable to delete interface");this.editorInstance.connections.filter((function(e){return e.from===n||e.to===n})).forEach((function(e){t.editorInstance.removeConnection(e)}))}this.interfaces.delete(e),this.events.removeInterface.emit(n)}},e.prototype.addOption=function(e,t,n,o,r){var i=this;if(void 0===n&&(n=null),!this.events.beforeAddOption.emit({name:e,component:t,defaultValue:n,sidebarComponent:o})){var a=new f(t,n,o);return Object.entries(r||{}).forEach((function(e){var t=(0,s.__read)(e,2),n=t[0],o=t[1];a[n]=o})),a.events.setValue.addListener(this,(function(){i.events.update.emit({name:e,option:a})})),this.options.set(e,a),this.events.addOption.emit({name:e,option:a}),a}},e.prototype.removeOption=function(e){if(this.options.has(e)){var t=this.options.get(e);if(this.events.beforeRemoveOption.emit({name:e,option:t}))return;this.options.delete(e),this.events.removeOption.emit({name:e,option:t})}},e.prototype.getInterface=function(e){if(!this.interfaces.has(e))throw new Error("No interface named '".concat(e,"'"));return this.interfaces.get(e)},e.prototype.getOptionValue=function(e){if(!this.options.has(e))throw new Error("No option named '".concat(e,"'"));return this.options.get(e).value},e.prototype.setOptionValue=function(e,t){if(!this.options.has(e))throw new Error("No option named '".concat(e,"'"));this.options.get(e).value=t},e.prototype.registerEditor=function(e){this.editorInstance=e},e.prototype.addInterface=function(e,t,n){var o=new u(this,e);return o.option=n,this.interfaces.set(t,o),o},e}();function l(e){return"function"==typeof e?e():e}var d=function(){function e(e,t){this.type="",this.name="",this.intfs=[],this.options=new Map,this.type=e,this.name=e,this.additionalProperties=t}return e.prototype.build=function(){return e=this.type,t=this.name,n=this.additionalProperties,o=this.intfs,r=this.options,i=this.calcFunction,function(a){function c(){var i,c,u=a.call(this)||this;u.type=e,u.name=t,n&&Object.assign(u,n);try{for(var f=(0,s.__values)(o),p=f.next();!p.done;p=f.next()){var d=p.value;d.isInput?u.addInputInterface(d.name,d.option,l(d.defaultValue),d.additionalProperties):u.addOutputInterface(d.name,d.additionalProperties)}}catch(e){i={error:e}}finally{try{p&&!p.done&&(c=f.return)&&c.call(f)}finally{if(i)throw i.error}}return Array.from(r.entries()).forEach((function(e){var t=(0,s.__read)(e,2),n=t[0],o=t[1];u.addOption(n,o.optionComponent,l(o.value),o.sidebarComponent,o.additionalProperties)})),u}return(0,s.__extends)(c,a),c.prototype.calculate=function(e){if(i)return i.call(this,this,e)},c}(p);var e,t,n,o,r,i},e.prototype.setName=function(e){return this.name=e,this},e.prototype.addInputInterface=function(e,t,n,o){return void 0===n&&(n=null),this.checkDefaultValue(n),this.intfs.push({isInput:!0,name:e,option:t,defaultValue:n,additionalProperties:o}),this},e.prototype.addOutputInterface=function(e,t){return this.intfs.push({isInput:!1,name:e,additionalProperties:t}),this},e.prototype.addOption=function(e,t,n,o,r){return void 0===n&&(n=null),this.checkDefaultValue(n),this.options.set(e,{value:n,optionComponent:t,sidebarComponent:o,additionalProperties:r}),this},e.prototype.onCalculate=function(e){return this.calcFunction=e,this},e.prototype.checkDefaultValue=function(e){if("object"==typeof e&&null!==e)throw new Error("If the default value is an object, provide a generator function instead of the object")},e}()})(),exports.Connection=o.Connection,exports.DummyConnection=o.DummyConnection,exports.Editor=o.Editor,exports.Node=o.Node,exports.NodeBuilder=o.NodeBuilder,exports.NodeInterface=o.NodeInterface,exports.NodeOption=o.NodeOption,Object.defineProperty(exports, "__esModule", ({value:!0}))})();

/***/ }),

/***/ 39:
/***/ ((__unused_webpack_module, exports) => {

/*! For license information please see index.cjs.LICENSE.txt */
(()=>{"use strict";var e={163:(e,t,r)=>{r.r(t),r.d(t,{__assign:()=>i,__asyncDelegator:()=>g,__asyncGenerator:()=>b,__asyncValues:()=>O,__await:()=>m,__awaiter:()=>l,__classPrivateFieldGet:()=>C,__classPrivateFieldSet:()=>S,__createBinding:()=>h,__decorate:()=>c,__exportStar:()=>d,__extends:()=>o,__generator:()=>f,__importDefault:()=>j,__importStar:()=>E,__makeTemplateObject:()=>P,__metadata:()=>u,__param:()=>s,__read:()=>y,__rest:()=>a,__spread:()=>v,__spreadArray:()=>w,__spreadArrays:()=>_,__values:()=>p});var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var i=function(){return i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)};function a(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function c(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a}function s(e,t){return function(r,n){t(r,n,e)}}function u(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function l(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{s(n.next(e))}catch(e){i(e)}}function c(e){try{s(n.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,c)}s((n=n.apply(e,t||[])).next())}))}function f(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}var h=Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]};function d(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||h(t,e,r)}function p(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function y(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a}function v(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(y(arguments[t]));return e}function _(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var i=arguments[t],a=0,c=i.length;a<c;a++,o++)n[o]=i[a];return n}function w(e,t,r){if(r||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}function m(e){return this instanceof m?(this.v=e,this):new m(e)}function b(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(e,t||[]),i=[];return n={},a("next"),a("throw"),a("return"),n[Symbol.asyncIterator]=function(){return this},n;function a(e){o[e]&&(n[e]=function(t){return new Promise((function(r,n){i.push([e,t,r,n])>1||c(e,t)}))})}function c(e,t){try{(r=o[e](t)).value instanceof m?Promise.resolve(r.value.v).then(s,u):l(i[0][2],r)}catch(e){l(i[0][3],e)}var r}function s(e){c("next",e)}function u(e){c("throw",e)}function l(e,t){e(t),i.shift(),i.length&&c(i[0][0],i[0][1])}}function g(e){var t,r;return t={},n("next"),n("throw",(function(e){throw e})),n("return"),t[Symbol.iterator]=function(){return this},t;function n(n,o){t[n]=e[n]?function(t){return(r=!r)?{value:m(e[n](t)),done:"return"===n}:o?o(t):t}:o}}function O(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=p(e),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise((function(n,o){!function(e,t,r,n){Promise.resolve(n).then((function(t){e({value:t,done:r})}),t)}(n,o,(t=e[r](t)).done,t.value)}))}}}function P(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var x=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function E(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&h(t,e,r);return x(t,e),t}function j(e){return e&&e.__esModule?e:{default:e}}function C(e,t,r,n){if("a"===r&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?n:"a"===r?n.call(e):n?n.value:t.get(e)}function S(e,t,r,n,o){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?o.call(e,r):o?o.value=r:t.set(e,r),r}},749:(e,t,r)=>{t.p$=t.wD=t.EZ=void 0;var n=r(163),o=function(){function e(){this.listeners=new Map}return e.prototype.addListener=function(e,t){this.listeners.set(e,t)},e.prototype.removeListener=function(e){this.listeners.has(e)&&this.listeners.delete(e)},e.prototype.emit=function(e){this.listeners.forEach((function(t){return t(e)}))},e}();t.EZ=o;var i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(t,e),t.prototype.emit=function(e){var t,r;try{for(var o=n.__values(Array.from(this.listeners.values())),i=o.next();!i.done;i=o.next())if(!1===(0,i.value)(e))return!0}catch(e){t={error:e}}finally{try{i&&!i.done&&(r=o.return)&&r.call(o)}finally{if(t)throw t.error}}return!1},t}(o);t.wD=i;var a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(t,e),t.prototype.execute=function(e){var t,r,o=e;try{for(var i=n.__values(this.taps),a=i.next();!a.done;a=i.next())o=(0,a.value)(o)}catch(e){t={error:e}}finally{try{a&&!a.done&&(r=i.return)&&r.call(i)}finally{if(t)throw t.error}}return o},t}(function(){function e(){this.tapMap=new Map,this.taps=[]}return e.prototype.tap=function(e,t){this.tapMap.has(e)&&this.untap(e),this.tapMap.set(e,t),this.taps.push(t)},e.prototype.untap=function(e){if(this.tapMap.has(e)){var t=this.tapMap.get(e);this.tapMap.delete(e);var r=this.taps.indexOf(t);r>=0&&this.taps.splice(r,1)}},e}());t.p$=a}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};(()=>{r.r(n),r.d(n,{Engine:()=>f,calculateOrder:()=>s,containsCycle:()=>l});var e=r(163),t=r(749);new Error("timeout while waiting for mutex to become available"),new Error("mutex already locked");const o=new Error("request for lock canceled");var i=function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{s(n.next(e))}catch(e){i(e)}}function c(e){try{s(n.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,c)}s((n=n.apply(e,t||[])).next())}))};class a{constructor(e,t=o){if(this._maxConcurrency=e,this._cancelError=t,this._queue=[],this._waiters=[],e<=0)throw new Error("semaphore must be initialized to a positive value");this._value=e}acquire(){const e=this.isLocked(),t=new Promise(((e,t)=>this._queue.push({resolve:e,reject:t})));return e||this._dispatch(),t}runExclusive(e){return i(this,void 0,void 0,(function*(){const[t,r]=yield this.acquire();try{return yield e(t)}finally{r()}}))}waitForUnlock(){return i(this,void 0,void 0,(function*(){return this.isLocked()?new Promise((e=>this._waiters.push({resolve:e}))):Promise.resolve()}))}isLocked(){return this._value<=0}release(){if(this._maxConcurrency>1)throw new Error("this method is unavailable on semaphores with concurrency > 1; use the scoped release returned by acquire instead");if(this._currentReleaser){const e=this._currentReleaser;this._currentReleaser=void 0,e()}}cancel(){this._queue.forEach((e=>e.reject(this._cancelError))),this._queue=[]}_dispatch(){const e=this._queue.shift();if(!e)return;let t=!1;this._currentReleaser=()=>{t||(t=!0,this._value++,this._resolveWaiters(),this._dispatch())},e.resolve([this._value--,this._currentReleaser])}_resolveWaiters(){this._waiters.forEach((e=>e.resolve())),this._waiters=[]}}class c{constructor(e){this._semaphore=new a(1,e)}acquire(){return e=this,t=void 0,n=function*(){const[,e]=yield this._semaphore.acquire();return e},new((r=void 0)||(r=Promise))((function(o,i){function a(e){try{s(n.next(e))}catch(e){i(e)}}function c(e){try{s(n.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,c)}s((n=n.apply(e,t||[])).next())}));var e,t,r,n}runExclusive(e){return this._semaphore.runExclusive((()=>e()))}isLocked(){return this._semaphore.isLocked()}waitForUnlock(){return this._semaphore.waitForUnlock()}release(){this._semaphore.release()}cancel(){return this._semaphore.cancel()}}function s(e,t,r){var n=new Map;e.forEach((function(e){n.set(e,t.filter((function(t){return t.to&&t.to.parent===e})).map((function(e){return e.from.parent})))}));var o=r||e.filter((function(e){return t=e.outputInterfaces,[Object,Array].includes((t||{}).constructor)&&!Object.entries(t||{}).length;var t})),i={children:o.map((function(e){return{n:e,children:[]}}))};u(i,[],n);var a=[],c=[];for(a.push(i);a.length>0;)a.shift().children.forEach((function(e){c.push(e.n),a.push(e)}));for(var s=[];c.length>0;){var l=c.pop();s.includes(l)||s.push(l)}return{calculationOrder:s,rootNodes:o}}function u(t,r,n){var o,i;try{for(var a=(0,e.__values)(t.children),c=a.next();!c.done;c=a.next()){var s=c.value;if(r.includes(s.n))throw new Error("Cycle detected");r.unshift(s.n),s.children=s.children.concat(n.get(s.n).map((function(e){return{n:e,children:new Array}}))),u(s,r,n),r.shift()}}catch(e){o={error:e}}finally{try{c&&!c.done&&(i=a.return)&&i.call(a)}finally{if(o)throw o.error}}}function l(e,t){try{return s(e,t),!0}catch(e){return!1}}var f=function(){function r(e){void 0===e&&(e=!1),this.type="EnginePlugin",this.events={beforeCalculate:new t.wD,calculated:new t.EZ},this.hooks={gatherCalculationData:new t.p$},this.nodeCalculationOrder=[],this.actualRootNodes=[],this.connectionsPerNode=new Map,this.recalculateOrder=!1,this.calculateOnChange=!1,this.calculationInProgress=!1,this.mutex=new c,this._rootNodes=void 0,this.interfaceTypePlugins=[],this.calculateOnChange=e}return Object.defineProperty(r.prototype,"rootNodes",{get:function(){return this._rootNodes},set:function(e){this._rootNodes=e,this.recalculateOrder=!0},enumerable:!1,configurable:!0}),r.prototype.register=function(e){var t=this;this.editor=e,this.editor.plugins.forEach((function(e){"InterfaceTypePlugin"===e.type&&t.interfaceTypePlugins.push(e)})),this.editor.events.usePlugin.addListener(this,(function(e){"InterfaceTypePlugin"===e.type&&t.interfaceTypePlugins.push(e)})),this.editor.events.addNode.addListener(this,(function(e){e.events.update.addListener(t,(function(e){(e.interface&&0===e.interface.connectionCount||e.option)&&t.onChange(!1)})),t.onChange(!0)})),this.editor.events.removeNode.addListener(this,(function(e){e.events.update.removeListener(t)})),this.editor.events.checkConnection.addListener(this,(function(e){if(!t.checkConnection(e.from,e.to))return!1})),this.editor.events.addConnection.addListener(this,(function(e){t.editor.connections.filter((function(t){return t.id!==e.id&&t.to===e.to})).forEach((function(e){return t.editor.removeConnection(e)})),t.onChange(!0)})),this.editor.events.removeConnection.addListener(this,(function(){t.onChange(!0)}))},r.prototype.calculate=function(t){return(0,e.__awaiter)(this,void 0,void 0,(function(){var r=this;return(0,e.__generator)(this,(function(n){switch(n.label){case 0:return[4,this.mutex.runExclusive((function(){return(0,e.__awaiter)(r,void 0,void 0,(function(){return(0,e.__generator)(this,(function(e){switch(e.label){case 0:return[4,this.internalCalculate(t)];case 1:return[2,e.sent()]}}))}))}))];case 1:return[2,n.sent()]}}))}))},r.prototype.calculateOrder=function(){this.calculateNodeTree(),this.recalculateOrder=!1},r.prototype.internalCalculate=function(t){return(0,e.__awaiter)(this,void 0,void 0,(function(){var r,n,o,i,a,c,s,u,l=this;return(0,e.__generator)(this,(function(f){switch(f.label){case 0:if(this.events.beforeCalculate.emit(t))return[2,null];t=this.hooks.gatherCalculationData.execute(t),this.calculationInProgress=!0,this.recalculateOrder&&this.calculateOrder(),r=new Map,f.label=1;case 1:f.trys.push([1,6,7,8]),n=(0,e.__values)(this.nodeCalculationOrder),o=n.next(),f.label=2;case 2:return o.done?[3,5]:[4,(i=o.value).calculate(t)];case 3:a=f.sent(),this.actualRootNodes.includes(i)&&r.set(i,a),this.connectionsPerNode.has(i)&&this.connectionsPerNode.get(i).forEach((function(e){var t=l.interfaceTypePlugins.find((function(t){return t.canConvert(e.from.type,e.to.type)}));e.to.value=t?t.convert(e.from.type,e.to.type,e.from.value):e.from.value})),f.label=4;case 4:return o=n.next(),[3,2];case 5:return[3,8];case 6:return c=f.sent(),s={error:c},[3,8];case 7:try{o&&!o.done&&(u=n.return)&&u.call(n)}finally{if(s)throw s.error}return[7];case 8:return this.calculationInProgress=!1,this.events.calculated.emit(r),[2,r]}}))}))},r.prototype.checkConnection=function(e,t){var r={from:e,to:t,id:"dc",destructed:!1,isInDanger:!1},n=this.editor.connections.concat([r]);return n.filter((function(e){return e.to!==t})),l(this.editor.nodes,n)},r.prototype.onChange=function(e){this.recalculateOrder=this.recalculateOrder||e,this.calculateOnChange&&!this.calculationInProgress&&this.calculate()},r.prototype.calculateNodeTree=function(){var e=this,t=s(this.editor.nodes,this.editor.connections,this.rootNodes),r=t.calculationOrder,n=t.rootNodes;this.nodeCalculationOrder=r,this.actualRootNodes=n,this.connectionsPerNode.clear(),this.editor.nodes.forEach((function(t){e.connectionsPerNode.set(t,e.editor.connections.filter((function(e){return e.from.parent===t})))}))},r}()})(),exports.Engine=n.Engine,exports.calculateOrder=n.calculateOrder,exports.containsCycle=n.containsCycle,Object.defineProperty(exports, "__esModule", ({value:!0}))})();

/***/ }),

/***/ 773:
/***/ ((__unused_webpack_module, exports) => {

(()=>{"use strict";var t={d:(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{InterfaceTypePlugin:()=>n});var n=function(){function t(){this.type="InterfaceTypePlugin",this.types=new Map}return t.prototype.register=function(t){var e=this;this.editor=t,this.editor.plugins.forEach((function(t){"ViewPlugin"===t.type&&e.registerView(t)})),this.editor.events.checkConnection.addListener(this,(function(t){var n=t.from,r=t.to,o=n.type,i=r.type;if(o&&i)return!!e.canConvert(o,i)&&void 0})),this.editor.events.usePlugin.addListener(this,(function(t){"ViewPlugin"===t.type&&e.registerView(t)}))},t.prototype.addType=function(t,e){return this.types.set(t,{color:e,conversions:[]}),this},t.prototype.addConversion=function(t,e,n){if(!this.types.has(t))throw new Error('Can not add conversion for unknown type "'.concat(t,'"'));return n||(n=function(t){return t}),this.types.get(t).conversions.push({targetType:e,transformationFunction:n}),this},t.prototype.getConversion=function(t,e){return this.types.has(t)&&this.types.get(t).conversions.find((function(t){return t.targetType===e}))},t.prototype.canConvert=function(t,e){return t===e||this.types.has(t)&&this.types.get(t).conversions.some((function(t){return t.targetType===e}))},t.prototype.convert=function(t,e,n){if(t===e)return n;var r=this.getConversion(t,e);if(r)return r.transformationFunction(n);throw Error('Can not convert from "'.concat(t,'" to "').concat(e,'"'))},t.prototype.registerView=function(t){var e=this;t.hooks.renderInterface.tap(this,(function(t){var n=t.intf||t.data;if(!n)throw new Error("Could not get interface data");if(e.types.has(n.type)){var r=e.types.get(n.type).color,o=t.$el.getElementsByClassName("__port");Array.from(o).forEach((function(t){t.classList.add("__port-"+n.type),t.style.backgroundColor=r,t.title=n.type}))}return t}))},t}();exports.InterfaceTypePlugin=e.InterfaceTypePlugin,Object.defineProperty(exports, "__esModule", ({value:!0}))})();

/***/ }),

/***/ 521:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 5163:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_144__) => {

"use strict";
/* harmony export */ __nested_webpack_require_144__.d(__webpack_exports__, {
/* harmony export */   "CR": () => (/* binding */ __read),
/* harmony export */   "Jh": () => (/* binding */ __generator),
/* harmony export */   "ZT": () => (/* binding */ __extends),
/* harmony export */   "gn": () => (/* binding */ __decorate),
/* harmony export */   "mG": () => (/* binding */ __awaiter),
/* harmony export */   "pi": () => (/* binding */ __assign)
/* harmony export */ });
/* unused harmony exports __rest, __param, __metadata, __createBinding, __exportStar, __values, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
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

!function(e,n){  true?module.exports=n():0}(this,function(){var e="undefined"!=typeof window,n="undefined"!=typeof navigator,t=e&&("ontouchstart"in window||n&&navigator.msMaxTouchPoints>0)?["touchstart"]:["click"];function i(e){var n=e.event,t=e.handler;(0,e.middleware)(n)&&t(n)}function r(e,n){var r=function(e){var n="function"==typeof e;if(!n&&"object"!=typeof e)throw new Error("v-click-outside: Binding value must be a function or an object");return{handler:n?e:e.handler,middleware:e.middleware||function(e){return e},events:e.events||t,isActive:!(!1===e.isActive),detectIframe:!(!1===e.detectIframe)}}(n.value),d=r.handler,o=r.middleware,a=r.detectIframe;if(r.isActive){if(e["__v-click-outside"]=r.events.map(function(n){return{event:n,srcTarget:document.documentElement,handler:function(n){return function(e){var n=e.el,t=e.event,r=e.handler,d=e.middleware,o=t.path||t.composedPath&&t.composedPath();(o?o.indexOf(n)<0:!n.contains(t.target))&&i({event:t,handler:r,middleware:d})}({el:e,event:n,handler:d,middleware:o})}}}),a){var c={event:"blur",srcTarget:window,handler:function(n){return function(e){var n=e.el,t=e.event,r=e.handler,d=e.middleware;setTimeout(function(){var e=document.activeElement;e&&"IFRAME"===e.tagName&&!n.contains(e)&&i({event:t,handler:r,middleware:d})},0)}({el:e,event:n,handler:d,middleware:o})}};e["__v-click-outside"]=[].concat(e["__v-click-outside"],[c])}e["__v-click-outside"].forEach(function(n){var t=n.event,i=n.srcTarget,r=n.handler;return setTimeout(function(){e["__v-click-outside"]&&i.addEventListener(t,r,!1)},0)})}}function d(e){(e["__v-click-outside"]||[]).forEach(function(e){return e.srcTarget.removeEventListener(e.event,e.handler,!1)}),delete e["__v-click-outside"]}var o=e?{bind:r,update:function(e,n){var t=n.value,i=n.oldValue;JSON.stringify(t)!==JSON.stringify(i)&&(d(e),r(e,{value:t}))},unbind:d}:{};return{install:function(e){e.directive("click-outside",o)},directive:o}});
//# sourceMappingURL=v-click-outside.umd.js.map


/***/ }),

/***/ 5925:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_14691__) => {

"use strict";
/* harmony export */ __nested_webpack_require_14691__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "yh": () => (/* binding */ createDecorator)
/* harmony export */ });
/* unused harmony export mixins */
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_14691__(4056);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_14691__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
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
var reservedPropertyNames = (/* unused pure expression or super */ null && (0));
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

/***/ 6311:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_24756__) => {

"use strict";
/* harmony export */ __nested_webpack_require_24756__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Arrow_vue_vue_type_template_id_d85cb940___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_24756__(8517);
/* harmony import */ var _Arrow_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_24756__(6561);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_24756__(5440);





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(
  _Arrow_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
  _Arrow_vue_vue_type_template_id_d85cb940___WEBPACK_IMPORTED_MODULE_0__/* .render */ .s,
  _Arrow_vue_vue_type_template_id_d85cb940___WEBPACK_IMPORTED_MODULE_0__/* .staticRenderFns */ .x,
  false,
  null,
  null,
  null

)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/Arrow.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ 5721:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_26063__) => {

"use strict";
/* harmony export */ __nested_webpack_require_26063__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ButtonOption_vue_vue_type_template_id_6c6f3180___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_26063__(3167);
/* harmony import */ var _ButtonOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_26063__(8681);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_26063__(5440);





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(
  _ButtonOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
  _ButtonOption_vue_vue_type_template_id_6c6f3180___WEBPACK_IMPORTED_MODULE_0__/* .render */ .s,
  _ButtonOption_vue_vue_type_template_id_6c6f3180___WEBPACK_IMPORTED_MODULE_0__/* .staticRenderFns */ .x,
  false,
  null,
  null,
  null

)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/ButtonOption.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ 158:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_27411__) => {

"use strict";
/* harmony export */ __nested_webpack_require_27411__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CheckboxOption_vue_vue_type_template_id_0a60a651___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_27411__(4412);
/* harmony import */ var _CheckboxOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_27411__(2341);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_27411__(5440);





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(
  _CheckboxOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
  _CheckboxOption_vue_vue_type_template_id_0a60a651___WEBPACK_IMPORTED_MODULE_0__/* .render */ .s,
  _CheckboxOption_vue_vue_type_template_id_0a60a651___WEBPACK_IMPORTED_MODULE_0__/* .staticRenderFns */ .x,
  false,
  null,
  null,
  null

)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/CheckboxOption.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ 5975:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_28772__) => {

"use strict";
/* harmony export */ __nested_webpack_require_28772__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InputOption_vue_vue_type_template_id_2e1ef5f6___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_28772__(8062);
/* harmony import */ var _InputOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_28772__(5079);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_28772__(5440);





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(
  _InputOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
  _InputOption_vue_vue_type_template_id_2e1ef5f6___WEBPACK_IMPORTED_MODULE_0__/* .render */ .s,
  _InputOption_vue_vue_type_template_id_2e1ef5f6___WEBPACK_IMPORTED_MODULE_0__/* .staticRenderFns */ .x,
  false,
  null,
  null,
  null

)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/InputOption.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ 5247:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_30115__) => {

"use strict";
/* harmony export */ __nested_webpack_require_30115__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IntegerOption_vue_vue_type_template_id_4eb35aaa___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_30115__(2481);
/* harmony import */ var _IntegerOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_30115__(449);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_30115__(5440);





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(
  _IntegerOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
  _IntegerOption_vue_vue_type_template_id_4eb35aaa___WEBPACK_IMPORTED_MODULE_0__/* .render */ .s,
  _IntegerOption_vue_vue_type_template_id_4eb35aaa___WEBPACK_IMPORTED_MODULE_0__/* .staticRenderFns */ .x,
  false,
  null,
  null,
  null

)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/IntegerOption.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ 249:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_31468__) => {

"use strict";
/* harmony export */ __nested_webpack_require_31468__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NumberOption_vue_vue_type_template_id_70fa2a97___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_31468__(8814);
/* harmony import */ var _NumberOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_31468__(9968);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_31468__(5440);





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(
  _NumberOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
  _NumberOption_vue_vue_type_template_id_70fa2a97___WEBPACK_IMPORTED_MODULE_0__/* .render */ .s,
  _NumberOption_vue_vue_type_template_id_70fa2a97___WEBPACK_IMPORTED_MODULE_0__/* .staticRenderFns */ .x,
  false,
  null,
  null,
  null

)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/NumberOption.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ 2215:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_32817__) => {

"use strict";
/* harmony export */ __nested_webpack_require_32817__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SelectOption_vue_vue_type_template_id_3f2e408a___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_32817__(9045);
/* harmony import */ var _SelectOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_32817__(8348);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_32817__(5440);





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(
  _SelectOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
  _SelectOption_vue_vue_type_template_id_3f2e408a___WEBPACK_IMPORTED_MODULE_0__/* .render */ .s,
  _SelectOption_vue_vue_type_template_id_3f2e408a___WEBPACK_IMPORTED_MODULE_0__/* .staticRenderFns */ .x,
  false,
  null,
  null,
  null

)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/SelectOption.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ 7125:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_34166__) => {

"use strict";
/* harmony export */ __nested_webpack_require_34166__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SliderOption_vue_vue_type_template_id_05abaa2f___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_34166__(5017);
/* harmony import */ var _SliderOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_34166__(2985);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_34166__(5440);





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(
  _SliderOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
  _SliderOption_vue_vue_type_template_id_05abaa2f___WEBPACK_IMPORTED_MODULE_0__/* .render */ .s,
  _SliderOption_vue_vue_type_template_id_05abaa2f___WEBPACK_IMPORTED_MODULE_0__/* .staticRenderFns */ .x,
  false,
  null,
  null,
  null

)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/SliderOption.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ 4916:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_35515__) => {

"use strict";
/* harmony export */ __nested_webpack_require_35515__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TextOption_vue_vue_type_template_id_ee5ee88a___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_35515__(9924);
/* harmony import */ var _TextOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_35515__(4917);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_35515__(5440);





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(
  _TextOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
  _TextOption_vue_vue_type_template_id_ee5ee88a___WEBPACK_IMPORTED_MODULE_0__/* .render */ .s,
  _TextOption_vue_vue_type_template_id_ee5ee88a___WEBPACK_IMPORTED_MODULE_0__/* .staticRenderFns */ .x,
  false,
  null,
  null,
  null

)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/TextOption.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ 8517:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_36852__) => {

"use strict";
/* harmony export */ __nested_webpack_require_36852__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Arrow_vue_vue_type_template_id_d85cb940___WEBPACK_IMPORTED_MODULE_0__.s),
/* harmony export */   "x": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Arrow_vue_vue_type_template_id_d85cb940___WEBPACK_IMPORTED_MODULE_0__.x)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Arrow_vue_vue_type_template_id_d85cb940___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_36852__(2313);


/***/ }),

/***/ 3167:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_37834__) => {

"use strict";
/* harmony export */ __nested_webpack_require_37834__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonOption_vue_vue_type_template_id_6c6f3180___WEBPACK_IMPORTED_MODULE_0__.s),
/* harmony export */   "x": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonOption_vue_vue_type_template_id_6c6f3180___WEBPACK_IMPORTED_MODULE_0__.x)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonOption_vue_vue_type_template_id_6c6f3180___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_37834__(4903);


/***/ }),

/***/ 4412:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_38837__) => {

"use strict";
/* harmony export */ __nested_webpack_require_38837__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckboxOption_vue_vue_type_template_id_0a60a651___WEBPACK_IMPORTED_MODULE_0__.s),
/* harmony export */   "x": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckboxOption_vue_vue_type_template_id_0a60a651___WEBPACK_IMPORTED_MODULE_0__.x)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckboxOption_vue_vue_type_template_id_0a60a651___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_38837__(230);


/***/ }),

/***/ 8062:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_39845__) => {

"use strict";
/* harmony export */ __nested_webpack_require_39845__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputOption_vue_vue_type_template_id_2e1ef5f6___WEBPACK_IMPORTED_MODULE_0__.s),
/* harmony export */   "x": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputOption_vue_vue_type_template_id_2e1ef5f6___WEBPACK_IMPORTED_MODULE_0__.x)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputOption_vue_vue_type_template_id_2e1ef5f6___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_39845__(7391);


/***/ }),

/***/ 2481:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_40845__) => {

"use strict";
/* harmony export */ __nested_webpack_require_40845__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IntegerOption_vue_vue_type_template_id_4eb35aaa___WEBPACK_IMPORTED_MODULE_0__.s),
/* harmony export */   "x": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IntegerOption_vue_vue_type_template_id_4eb35aaa___WEBPACK_IMPORTED_MODULE_0__.x)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IntegerOption_vue_vue_type_template_id_4eb35aaa___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_40845__(289);


/***/ }),

/***/ 8814:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_41850__) => {

"use strict";
/* harmony export */ __nested_webpack_require_41850__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NumberOption_vue_vue_type_template_id_70fa2a97___WEBPACK_IMPORTED_MODULE_0__.s),
/* harmony export */   "x": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NumberOption_vue_vue_type_template_id_70fa2a97___WEBPACK_IMPORTED_MODULE_0__.x)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NumberOption_vue_vue_type_template_id_70fa2a97___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_41850__(1029);


/***/ }),

/***/ 9045:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_42853__) => {

"use strict";
/* harmony export */ __nested_webpack_require_42853__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectOption_vue_vue_type_template_id_3f2e408a___WEBPACK_IMPORTED_MODULE_0__.s),
/* harmony export */   "x": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectOption_vue_vue_type_template_id_3f2e408a___WEBPACK_IMPORTED_MODULE_0__.x)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectOption_vue_vue_type_template_id_3f2e408a___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_42853__(8538);


/***/ }),

/***/ 5017:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_43856__) => {

"use strict";
/* harmony export */ __nested_webpack_require_43856__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SliderOption_vue_vue_type_template_id_05abaa2f___WEBPACK_IMPORTED_MODULE_0__.s),
/* harmony export */   "x": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SliderOption_vue_vue_type_template_id_05abaa2f___WEBPACK_IMPORTED_MODULE_0__.x)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SliderOption_vue_vue_type_template_id_05abaa2f___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_43856__(6461);


/***/ }),

/***/ 9924:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_44859__) => {

"use strict";
/* harmony export */ __nested_webpack_require_44859__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TextOption_vue_vue_type_template_id_ee5ee88a___WEBPACK_IMPORTED_MODULE_0__.s),
/* harmony export */   "x": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TextOption_vue_vue_type_template_id_ee5ee88a___WEBPACK_IMPORTED_MODULE_0__.x)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TextOption_vue_vue_type_template_id_ee5ee88a___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_44859__(6931);


/***/ }),

/***/ 6561:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_45856__) => {

"use strict";
/* harmony export */ __nested_webpack_require_45856__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Arrow_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_45856__(4829);
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Arrow_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

/***/ }),

/***/ 8681:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_46630__) => {

"use strict";
/* harmony export */ __nested_webpack_require_46630__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_46630__(6716);
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

/***/ }),

/***/ 2341:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_47418__) => {

"use strict";
/* harmony export */ __nested_webpack_require_47418__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckboxOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_47418__(4290);
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckboxOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

/***/ }),

/***/ 5079:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_48210__) => {

"use strict";
/* harmony export */ __nested_webpack_require_48210__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_48210__(7415);
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

/***/ }),

/***/ 449:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_48995__) => {

"use strict";
/* harmony export */ __nested_webpack_require_48995__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IntegerOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_48995__(8117);
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IntegerOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

/***/ }),

/***/ 9968:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_49785__) => {

"use strict";
/* harmony export */ __nested_webpack_require_49785__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NumberOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_49785__(9031);
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NumberOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

/***/ }),

/***/ 8348:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_50573__) => {

"use strict";
/* harmony export */ __nested_webpack_require_50573__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_50573__(6366);
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

/***/ }),

/***/ 2985:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_51361__) => {

"use strict";
/* harmony export */ __nested_webpack_require_51361__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SliderOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_51361__(1491);
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SliderOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

/***/ }),

/***/ 4917:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_52149__) => {

"use strict";
/* harmony export */ __nested_webpack_require_52149__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_52149__(6299);
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

/***/ }),

/***/ 2313:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_52933__) => {

"use strict";
/* harmony export */ __nested_webpack_require_52933__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ render),
/* harmony export */   "x": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "svg",
    {
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }
    },
    [
      _c("path", {
        attrs: { d: "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" }
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 4903:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_53728__) => {

"use strict";
/* harmony export */ __nested_webpack_require_53728__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ render),
/* harmony export */   "x": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    {
      staticClass: "dark-button --block",
      on: {
        click: function($event) {
          return _vm.$emit("openSidebar")
        }
      }
    },
    [_vm._v(_vm._s(_vm.name))]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 230:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_54444__) => {

"use strict";
/* harmony export */ __nested_webpack_require_54444__.d(__webpack_exports__, {
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
      class: { "dark-checkbox": true, "--checked": _vm.value },
      on: {
        click: function($event) {
          return _vm.$emit("input", !_vm.value)
        }
      }
    },
    [
      _c("div", { staticClass: "__checkmark-container" }, [
        _c(
          "svg",
          {
            attrs: {
              xmlns: "http://www.w3.org/2000/svg",
              width: "18",
              height: "18",
              viewBox: "0 0 18 18"
            }
          },
          [
            _c("path", {
              staticClass: "__checkmark",
              attrs: {
                d: "M 6 5 L 6 10 L 16 10",
                transform: "rotate(-45 10 10)"
              }
            })
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "ml-2" }, [_vm._v(_vm._s(_vm.name))])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 7391:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_55800__) => {

"use strict";
/* harmony export */ __nested_webpack_require_55800__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ render),
/* harmony export */   "x": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "input",
      _vm._g(
        {
          staticClass: "dark-input",
          attrs: { type: "text", placeholder: _vm.name },
          domProps: { value: _vm.value }
        },
        _vm.listeners
      )
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 289:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_56549__) => {

"use strict";
/* harmony export */ __nested_webpack_require_56549__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ render),
/* harmony export */   "x": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "dark-num-input" }, [
    _c(
      "div",
      { staticClass: "__button --dec", on: { click: _vm.decrement } },
      [_c("i-arrow")],
      1
    ),
    _vm._v(" "),
    !_vm.editMode
      ? _c(
          "div",
          { staticClass: "__content", on: { click: _vm.enterEditMode } },
          [
            _c("div", { staticClass: "__label .text-truncate" }, [
              _vm._v(_vm._s(_vm.name))
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "__value" }, [
              _vm._v(_vm._s(_vm.stringRepresentation))
            ])
          ]
        )
      : _c("div", { staticClass: "__content" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.tempValue,
                expression: "tempValue"
              }
            ],
            ref: "input",
            attrs: { type: "number" },
            domProps: { value: _vm.tempValue },
            on: {
              blur: _vm.leaveEditMode,
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.tempValue = $event.target.value
              }
            }
          })
        ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "__button --inc", on: { click: _vm.increment } },
      [_c("i-arrow")],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 1029:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_58520__) => {

"use strict";
/* harmony export */ __nested_webpack_require_58520__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ render),
/* harmony export */   "x": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "dark-num-input" }, [
    _c(
      "div",
      { staticClass: "__button --dec", on: { click: _vm.decrement } },
      [_c("i-arrow")],
      1
    ),
    _vm._v(" "),
    !_vm.editMode
      ? _c(
          "div",
          { staticClass: "__content", on: { click: _vm.enterEditMode } },
          [
            _c("div", { staticClass: "__label .text-truncate" }, [
              _vm._v(_vm._s(_vm.name))
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "__value" }, [
              _vm._v(_vm._s(_vm.stringRepresentation))
            ])
          ]
        )
      : _c("div", { staticClass: "__content" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.tempValue,
                expression: "tempValue"
              }
            ],
            ref: "input",
            staticClass: "dark-input",
            class: { "--invalid": _vm.invalid },
            staticStyle: { "text-align": "right" },
            attrs: { type: "number" },
            domProps: { value: _vm.tempValue },
            on: {
              blur: _vm.leaveEditMode,
              keydown: function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                ) {
                  return null
                }
                return _vm.leaveEditMode.apply(null, arguments)
              },
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.tempValue = $event.target.value
              }
            }
          })
        ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "__button --inc", on: { click: _vm.increment } },
      [_c("i-arrow")],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 8538:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_60967__) => {

"use strict";
/* harmony export */ __nested_webpack_require_60967__.d(__webpack_exports__, {
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
          name: "click-outside",
          rawName: "v-click-outside",
          value: function() {
            _vm.open = false
          },
          expression: "() => { open = false; }"
        }
      ],
      class: ["dark-select", { "--open": _vm.open }],
      on: {
        click: function($event) {
          _vm.open = !_vm.open
        }
      }
    },
    [
      _c("div", { staticClass: "__selected" }, [
        _c("div", { staticClass: "__text" }, [
          _vm._v(_vm._s(_vm.selectedText))
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "__icon" }, [_c("i-arrow")], 1)
      ]),
      _vm._v(" "),
      _c("transition", { attrs: { name: "slide-fade" } }, [
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.open,
                expression: "open"
              }
            ],
            staticClass: "__dropdown"
          },
          [
            _c("div", { staticClass: "item --header" }, [
              _vm._v(_vm._s(_vm.name))
            ]),
            _vm._v(" "),
            _vm._l(_vm.items, function(item, i) {
              return _c(
                "div",
                {
                  key: i,
                  class: ["item", { "--active": _vm.isSelected(item) }],
                  on: {
                    click: function($event) {
                      return _vm.setSelected(item)
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.isAdvancedMode ? item.text : item))]
              )
            })
          ],
          2
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 6461:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_63228__) => {

"use strict";
/* harmony export */ __nested_webpack_require_63228__.d(__webpack_exports__, {
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
      staticClass: "dark-slider",
      class: { "ignore-mouse": !_vm.editMode },
      on: {
        mousedown: _vm.mousedown,
        mouseup: _vm.mouseup,
        mousemove: _vm.mousemove,
        mouseleave: _vm.mouseleave
      }
    },
    [
      _c("div", {
        staticClass: "__slider",
        style: { width: _vm.percentage + "%" }
      }),
      _vm._v(" "),
      !_vm.editMode
        ? _c("div", { staticClass: "__content" }, [
            _c("div", { staticClass: "__label" }, [_vm._v(_vm._s(_vm.name))]),
            _vm._v(" "),
            _c("div", { staticClass: "__value" }, [
              _vm._v(_vm._s(_vm.stringRepresentation))
            ])
          ])
        : _c("div", { staticClass: "__content" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.tempValue,
                  expression: "tempValue"
                }
              ],
              ref: "input",
              staticClass: "dark-input",
              class: { "--invalid": _vm.invalid },
              staticStyle: { "text-align": "right" },
              attrs: { type: "number" },
              domProps: { value: _vm.tempValue },
              on: {
                blur: _vm.leaveEditMode,
                keydown: function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                  ) {
                    return null
                  }
                  return _vm.leaveEditMode.apply(null, arguments)
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.tempValue = $event.target.value
                }
              }
            })
          ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 6931:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_65694__) => {

"use strict";
/* harmony export */ __nested_webpack_require_65694__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ render),
/* harmony export */   "x": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [_vm._v(_vm._s(_vm.sanitized))])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 5440:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_66240__) => {

"use strict";
/* harmony export */ __nested_webpack_require_66240__.d(__webpack_exports__, {
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
var __spreadArrays = ( false) || function () {
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

/***/ 7023:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_71530__) => {

"use strict";
/* unused harmony export Model */
/* harmony import */ var _helpers_metadata__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_71530__(779);


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
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_72317__) => {

"use strict";
/* unused harmony export ModelSync */
/* harmony import */ var _helpers_metadata__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_72317__(779);


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
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_73588__) => {

"use strict";
/* harmony export */ __nested_webpack_require_73588__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ Prop)
/* harmony export */ });
/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_73588__(5925);
/* harmony import */ var _helpers_metadata__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_73588__(779);


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
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_74634__) => {

"use strict";
/* unused harmony export PropSync */
/* harmony import */ var _helpers_metadata__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_74634__(779);


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

/***/ 5612:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_75796__) => {

"use strict";
/* harmony export */ __nested_webpack_require_75796__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ Watch)
/* harmony export */ });
/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_75796__(5925);

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
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_77130__) => {

"use strict";
/* harmony export */ __nested_webpack_require_77130__.d(__webpack_exports__, {
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

/***/ 2659:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_78051__) => {

"use strict";
/* harmony export */ __nested_webpack_require_78051__.d(__webpack_exports__, {
/* harmony export */   "RL": () => (/* reexport safe */ _decorators_Watch__WEBPACK_IMPORTED_MODULE_7__.R),
/* harmony export */   "fI": () => (/* reexport safe */ _decorators_Prop__WEBPACK_IMPORTED_MODULE_5__.f),
/* harmony export */   "w3": () => (/* reexport default from dynamic */ vue__WEBPACK_IMPORTED_MODULE_0___default.a),
/* harmony export */   "wA": () => (/* reexport safe */ vue_class_component__WEBPACK_IMPORTED_MODULE_1__.ZP)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_78051__(4056);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_78051__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_78051__(5925);
/* harmony import */ var _decorators_Emit__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_78051__(4807);
/* harmony import */ var _decorators_Model__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_78051__(7023);
/* harmony import */ var _decorators_ModelSync__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_78051__(5654);
/* harmony import */ var _decorators_Prop__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_78051__(6070);
/* harmony import */ var _decorators_PropSync__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_78051__(8793);
/* harmony import */ var _decorators_Watch__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_78051__(5612);
/** vue-property-decorator verson 9.1.2 MIT LICENSE copyright 2020 kaorun343 */
/// <reference types='reflect-metadata'/>

















/***/ }),

/***/ 4829:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_79777__) => {

"use strict";
/* harmony export */ __nested_webpack_require_79777__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_79777__(5163);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_79777__(2659);


var Arrow = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__/* .__extends */ .ZT)(Arrow, _super);
    function Arrow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Arrow = (0,tslib__WEBPACK_IMPORTED_MODULE_1__/* .__decorate */ .gn)([
        vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Component */ .wA
    ], Arrow);
    return Arrow;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Vue */ .w3));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Arrow);


/***/ }),

/***/ 6716:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_80807__) => {

"use strict";
/* harmony export */ __nested_webpack_require_80807__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_80807__(5163);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_80807__(2659);


var ButtonOption = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__/* .__extends */ .ZT)(ButtonOption, _super);
    function ButtonOption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__/* .__decorate */ .gn)([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Prop */ .fI)({ type: String })
    ], ButtonOption.prototype, "name", void 0);
    ButtonOption = (0,tslib__WEBPACK_IMPORTED_MODULE_1__/* .__decorate */ .gn)([
        vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Component */ .wA
    ], ButtonOption);
    return ButtonOption;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Vue */ .w3));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonOption);


/***/ }),

/***/ 4290:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_82097__) => {

"use strict";
/* harmony export */ __nested_webpack_require_82097__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_82097__(5163);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_82097__(2659);


var InputOption = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__/* .__extends */ .ZT)(InputOption, _super);
    function InputOption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__/* .__decorate */ .gn)([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Prop */ .fI)({ type: Boolean })
    ], InputOption.prototype, "value", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__/* .__decorate */ .gn)([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Prop */ .fI)({ type: String })
    ], InputOption.prototype, "name", void 0);
    InputOption = (0,tslib__WEBPACK_IMPORTED_MODULE_1__/* .__decorate */ .gn)([
        vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Component */ .wA
    ], InputOption);
    return InputOption;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Vue */ .w3));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputOption);


/***/ }),

/***/ 7415:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_83591__) => {

"use strict";
/* harmony export */ __nested_webpack_require_83591__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_83591__(5163);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_83591__(2659);


var InputOption = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__/* .__extends */ .ZT)(InputOption, _super);
    function InputOption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(InputOption.prototype, "listeners", {
        get: function () {
            var _this = this;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_1__/* .__assign */ .pi)((0,tslib__WEBPACK_IMPORTED_MODULE_1__/* .__assign */ .pi)({}, this.$listeners), { input: function (ev) { return _this.$emit("input", ev.target.value); } });
        },
        enumerable: false,
        configurable: true
    });
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__/* .__decorate */ .gn)([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Prop */ .fI)({ type: String, default: "" })
    ], InputOption.prototype, "value", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__/* .__decorate */ .gn)([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Prop */ .fI)({ type: String })
    ], InputOption.prototype, "name", void 0);
    InputOption = (0,tslib__WEBPACK_IMPORTED_MODULE_1__/* .__decorate */ .gn)([
        vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Component */ .wA
    ], InputOption);
    return InputOption;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Vue */ .w3));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputOption);


/***/ }),

/***/ 8117:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_85525__) => {

"use strict";
/* harmony export */ __nested_webpack_require_85525__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_85525__(5163);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_85525__(2659);
/* harmony import */ var _Arrow_vue__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_85525__(6311);
/* harmony import */ var _BaseNumericOption__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_85525__(9718);




var IntegerOption = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__extends */ .ZT)(IntegerOption, _super);
    function IntegerOption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(IntegerOption.prototype, "v", {
        get: function () {
            if (typeof (this.value) === "string") {
                return parseInt(this.value, 10);
            }
            else if (typeof (this.value) === "number") {
                return Math.floor(this.value);
            }
            else {
                return 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegerOption.prototype, "stringRepresentation", {
        get: function () {
            var s = this.v.toString();
            return s.length > this.MAX_STRING_LENGTH ?
                this.v.toExponential(this.MAX_STRING_LENGTH - 5) :
                s;
        },
        enumerable: false,
        configurable: true
    });
    IntegerOption.prototype.increment = function () {
        this.setValue(this.v + 1);
    };
    IntegerOption.prototype.decrement = function () {
        this.setValue(this.v - 1);
    };
    IntegerOption.prototype.leaveEditMode = function () {
        var v = parseInt(this.tempValue, 10);
        if (!this.validate(v)) {
            this.invalid = true;
        }
        else {
            this.$emit("input", v);
            this.editMode = false;
        }
    };
    IntegerOption = (0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__decorate */ .gn)([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Component */ .wA)({
            components: {
                "i-arrow": _Arrow_vue__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z
            }
        })
    ], IntegerOption);
    return IntegerOption;
}(_BaseNumericOption__WEBPACK_IMPORTED_MODULE_2__/* .BaseNumericOption */ .F));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IntegerOption);


/***/ }),

/***/ 9031:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_88244__) => {

"use strict";
/* harmony export */ __nested_webpack_require_88244__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_88244__(5163);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_88244__(2659);
/* harmony import */ var _Arrow_vue__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_88244__(6311);
/* harmony import */ var _BaseNumericOption__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_88244__(9718);




var NumberOption = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__extends */ .ZT)(NumberOption, _super);
    function NumberOption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NumberOption.prototype.increment = function () {
        this.setValue(this.v + 0.1);
    };
    NumberOption.prototype.decrement = function () {
        this.setValue(this.v - 0.1);
    };
    NumberOption = (0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__decorate */ .gn)([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Component */ .wA)({
            components: {
                "i-arrow": _Arrow_vue__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z
            }
        })
    ], NumberOption);
    return NumberOption;
}(_BaseNumericOption__WEBPACK_IMPORTED_MODULE_2__/* .BaseNumericOption */ .F));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NumberOption);


/***/ }),

/***/ 6366:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_89868__) => {

"use strict";
/* harmony export */ __nested_webpack_require_89868__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_89868__(5163);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_89868__(2659);
/* harmony import */ var _Arrow_vue__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_89868__(6311);
/* harmony import */ var v_click_outside__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_89868__(3570);
/* harmony import */ var v_click_outside__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__nested_webpack_require_89868__.n(v_click_outside__WEBPACK_IMPORTED_MODULE_2__);



// @ts-ignore

var SelectOption = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__extends */ .ZT)(SelectOption, _super);
    function SelectOption() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.open = false;
        _this.items = [];
        return _this;
    }
    Object.defineProperty(SelectOption.prototype, "isAdvancedMode", {
        get: function () {
            return !this.items.every(function (i) { return typeof (i) === "string"; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SelectOption.prototype, "selectedText", {
        get: function () {
            var _a, _b;
            if (this.isAdvancedMode) {
                return (_b = (_a = this.getItemByValue(this.value)) === null || _a === void 0 ? void 0 : _a.text) !== null && _b !== void 0 ? _b : "";
            }
            else if (this.value) {
                return this.value;
            }
            else {
                return "";
            }
        },
        enumerable: false,
        configurable: true
    });
    SelectOption.prototype.mounted = function () {
        var _this = this;
        // computed property won't work here due to missing reactivity
        this.items = this.option.items || [];
        this.option.events.updated.addListener(this, function () {
            _this.items = _this.option.items || [];
        });
    };
    SelectOption.prototype.beforeDestroy = function () {
        this.option.events.updated.removeListener(this);
    };
    SelectOption.prototype.isSelected = function (item) {
        if (this.isAdvancedMode) {
            return item.value === this.value;
        }
        else {
            return item === this.value;
        }
    };
    SelectOption.prototype.setSelected = function (item) {
        this.$emit("input", this.isAdvancedMode ? item.value : item);
    };
    SelectOption.prototype.getItemByValue = function (value) {
        return this.items.find(function (i) { return i.value === value; });
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__decorate */ .gn)([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Prop */ .fI)({ type: String })
    ], SelectOption.prototype, "name", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__decorate */ .gn)([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Prop */ .fI)()
    ], SelectOption.prototype, "value", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__decorate */ .gn)([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Prop */ .fI)({ type: Object })
    ], SelectOption.prototype, "option", void 0);
    SelectOption = (0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__decorate */ .gn)([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Component */ .wA)({
            components: {
                "i-arrow": _Arrow_vue__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z
            },
            directives: {
                ClickOutside: (v_click_outside__WEBPACK_IMPORTED_MODULE_2___default().directive)
            }
        })
    ], SelectOption);
    return SelectOption;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Vue */ .w3));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectOption);


/***/ }),

/***/ 1491:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_94055__) => {

"use strict";
/* harmony export */ __nested_webpack_require_94055__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_94055__(5163);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_94055__(2659);
/* harmony import */ var _BaseNumericOption__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_94055__(9718);



var SliderOption = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__extends */ .ZT)(SliderOption, _super);
    function SliderOption() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.didSlide = false;
        _this.isMouseDown = false;
        return _this;
    }
    Object.defineProperty(SliderOption.prototype, "min", {
        get: function () {
            return this.option.min || 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SliderOption.prototype, "max", {
        get: function () {
            return this.option.max || 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SliderOption.prototype, "percentage", {
        get: function () {
            return Math.min(100, Math.max(0, ((this.v - this.min) * 100) / (this.max - this.min)));
        },
        enumerable: false,
        configurable: true
    });
    SliderOption.prototype.mousedown = function () {
        if (this.editMode) {
            return;
        }
        this.isMouseDown = true;
    };
    SliderOption.prototype.mouseup = function () {
        if (this.editMode) {
            return;
        }
        if (!this.didSlide) {
            this.enterEditMode();
        }
        this.isMouseDown = false;
        this.didSlide = false;
    };
    SliderOption.prototype.mouseleave = function (ev) {
        if (this.editMode) {
            return;
        }
        if (this.isMouseDown) {
            if (ev.offsetX >= this.$el.clientWidth) {
                this.$emit("input", this.max);
            }
            else if (ev.offsetX <= 0) {
                this.$emit("input", this.min);
            }
        }
        this.isMouseDown = false;
        this.didSlide = false;
    };
    SliderOption.prototype.mousemove = function (ev) {
        if (this.editMode) {
            return;
        }
        var v = Math.max(this.min, Math.min(this.max, (this.max - this.min) * (ev.offsetX / this.$el.clientWidth) + this.min));
        if (this.isMouseDown) {
            this.$emit("input", v);
            this.didSlide = true;
        }
    };
    SliderOption = (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .gn)([
        vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Component */ .wA
    ], SliderOption);
    return SliderOption;
}(_BaseNumericOption__WEBPACK_IMPORTED_MODULE_1__/* .BaseNumericOption */ .F));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SliderOption);


/***/ }),

/***/ 6299:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_97220__) => {

"use strict";
/* harmony export */ __nested_webpack_require_97220__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_97220__(5163);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_97220__(2659);


var TextOption = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__/* .__extends */ .ZT)(TextOption, _super);
    function TextOption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TextOption.prototype, "sanitized", {
        get: function () {
            return String(this.value);
        },
        enumerable: false,
        configurable: true
    });
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__/* .__decorate */ .gn)([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Prop */ .fI)({ default: "" })
    ], TextOption.prototype, "value", void 0);
    TextOption = (0,tslib__WEBPACK_IMPORTED_MODULE_1__/* .__decorate */ .gn)([
        vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Component */ .wA
    ], TextOption);
    return TextOption;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Vue */ .w3));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextOption);


/***/ }),

/***/ 9718:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_98696__) => {

"use strict";
/* harmony export */ __nested_webpack_require_98696__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ BaseNumericOption)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_98696__(5163);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_98696__(2659);


var BaseNumericOption = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__/* .__extends */ .ZT)(BaseNumericOption, _super);
    function BaseNumericOption() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.MAX_STRING_LENGTH = 9;
        _this.editMode = false;
        _this.invalid = false;
        _this.tempValue = "0";
        return _this;
    }
    Object.defineProperty(BaseNumericOption.prototype, "v", {
        get: function () {
            if (typeof this.value === "string") {
                return parseFloat(this.value);
            }
            else if (typeof this.value === "number") {
                return this.value;
            }
            else {
                return 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseNumericOption.prototype, "stringRepresentation", {
        get: function () {
            var s = this.v.toFixed(3);
            return s.length > this.MAX_STRING_LENGTH ? this.v.toExponential(this.MAX_STRING_LENGTH - 5) : s;
        },
        enumerable: false,
        configurable: true
    });
    BaseNumericOption.prototype.setValue = function (newValue) {
        if (this.validate(newValue)) {
            this.$emit("input", newValue);
        }
    };
    BaseNumericOption.prototype.resetInvalid = function () {
        this.invalid = false;
    };
    BaseNumericOption.prototype.enterEditMode = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__/* .__awaiter */ .mG)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_1__/* .__generator */ .Jh)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.tempValue = this.v.toFixed(3);
                        this.editMode = true;
                        return [4 /*yield*/, this.$nextTick()];
                    case 1:
                        _a.sent();
                        this.$refs.input.focus();
                        return [2 /*return*/];
                }
            });
        });
    };
    BaseNumericOption.prototype.leaveEditMode = function () {
        var v = parseFloat(this.tempValue);
        if (!this.validate(v)) {
            this.invalid = true;
        }
        else {
            this.$emit("input", v);
            this.editMode = false;
        }
    };
    BaseNumericOption.prototype.validate = function (v) {
        if (Number.isNaN(v)) {
            return false;
        }
        else if (typeof this.option.min === "number" && v < this.option.min) {
            return false;
        }
        else if (typeof this.option.max === "number" && v > this.option.max) {
            return false;
        }
        else {
            return true;
        }
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__/* .__decorate */ .gn)([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Prop */ .fI)()
    ], BaseNumericOption.prototype, "value", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__/* .__decorate */ .gn)([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Prop */ .fI)({ type: String })
    ], BaseNumericOption.prototype, "name", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__/* .__decorate */ .gn)([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Prop */ .fI)({ type: Object })
    ], BaseNumericOption.prototype, "option", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__/* .__decorate */ .gn)([
        (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Watch */ .RL)("tempValue")
    ], BaseNumericOption.prototype, "resetInvalid", null);
    BaseNumericOption = (0,tslib__WEBPACK_IMPORTED_MODULE_1__/* .__decorate */ .gn)([
        vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Component */ .wA
    ], BaseNumericOption);
    return BaseNumericOption;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__/* .Vue */ .w3));



/***/ }),

/***/ 5233:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_103187__) => {

"use strict";
/* harmony export */ __nested_webpack_require_103187__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ OptionPlugin)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_103187__(5163);
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_103187__(8441);


var OptionPlugin = /** @class */ (function () {
    function OptionPlugin() {
        this.type = "OptionPlugin";
    }
    OptionPlugin.prototype.register = function (editor) {
        var _this = this;
        editor.events.usePlugin.addListener(this, function (p) {
            if (p.type === "ViewPlugin") {
                _this.registerOptions(p);
            }
        });
        editor.plugins.forEach(function (p) {
            if (p.type === "ViewPlugin") {
                _this.registerOptions(p);
            }
        });
    };
    OptionPlugin.prototype.registerOptions = function (viewPlugin) {
        Object.entries(_options__WEBPACK_IMPORTED_MODULE_0__).forEach(function (_a) {
            var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_1__/* .__read */ .CR)(_a, 2), k = _b[0], v = _b[1];
            viewPlugin.registerOption(k, v);
        });
    };
    return OptionPlugin;
}());



/***/ }),

/***/ 8441:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_104546__) => {

"use strict";
__nested_webpack_require_104546__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_104546__.d(__webpack_exports__, {
/* harmony export */   "ButtonOption": () => (/* reexport safe */ _ButtonOption_vue__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "CheckboxOption": () => (/* reexport safe */ _CheckboxOption_vue__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "InputOption": () => (/* reexport safe */ _InputOption_vue__WEBPACK_IMPORTED_MODULE_2__.Z),
/* harmony export */   "IntegerOption": () => (/* reexport safe */ _IntegerOption_vue__WEBPACK_IMPORTED_MODULE_3__.Z),
/* harmony export */   "NumberOption": () => (/* reexport safe */ _NumberOption_vue__WEBPACK_IMPORTED_MODULE_4__.Z),
/* harmony export */   "SelectOption": () => (/* reexport safe */ _SelectOption_vue__WEBPACK_IMPORTED_MODULE_5__.Z),
/* harmony export */   "SliderOption": () => (/* reexport safe */ _SliderOption_vue__WEBPACK_IMPORTED_MODULE_6__.Z),
/* harmony export */   "TextOption": () => (/* reexport safe */ _TextOption_vue__WEBPACK_IMPORTED_MODULE_7__.Z)
/* harmony export */ });
/* harmony import */ var _ButtonOption_vue__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_104546__(5721);
/* harmony import */ var _CheckboxOption_vue__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_104546__(158);
/* harmony import */ var _InputOption_vue__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_104546__(5975);
/* harmony import */ var _IntegerOption_vue__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_104546__(5247);
/* harmony import */ var _NumberOption_vue__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_104546__(249);
/* harmony import */ var _SelectOption_vue__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_104546__(2215);
/* harmony import */ var _SliderOption_vue__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_104546__(7125);
/* harmony import */ var _TextOption_vue__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_104546__(4916);











/***/ }),

/***/ 4056:
/***/ ((module) => {

"use strict";
module.exports = __webpack_require__(976);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_106796__(moduleId) {
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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_106796__);
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__nested_webpack_require_106796__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__nested_webpack_require_106796__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_106796__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_106796__.o(definition, key) && !__nested_webpack_require_106796__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nested_webpack_require_106796__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_106796__.r = (exports) => {
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
__nested_webpack_require_106796__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_106796__.d(__webpack_exports__, {
/* harmony export */   "ButtonOption": () => (/* reexport safe */ _options__WEBPACK_IMPORTED_MODULE_0__.ButtonOption),
/* harmony export */   "CheckboxOption": () => (/* reexport safe */ _options__WEBPACK_IMPORTED_MODULE_0__.CheckboxOption),
/* harmony export */   "InputOption": () => (/* reexport safe */ _options__WEBPACK_IMPORTED_MODULE_0__.InputOption),
/* harmony export */   "IntegerOption": () => (/* reexport safe */ _options__WEBPACK_IMPORTED_MODULE_0__.IntegerOption),
/* harmony export */   "NumberOption": () => (/* reexport safe */ _options__WEBPACK_IMPORTED_MODULE_0__.NumberOption),
/* harmony export */   "OptionPlugin": () => (/* reexport safe */ _optionPlugin__WEBPACK_IMPORTED_MODULE_1__.C),
/* harmony export */   "SelectOption": () => (/* reexport safe */ _options__WEBPACK_IMPORTED_MODULE_0__.SelectOption),
/* harmony export */   "SliderOption": () => (/* reexport safe */ _options__WEBPACK_IMPORTED_MODULE_0__.SliderOption),
/* harmony export */   "TextOption": () => (/* reexport safe */ _options__WEBPACK_IMPORTED_MODULE_0__.TextOption)
/* harmony export */ });
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_106796__(8441);
/* harmony import */ var _optionPlugin__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_106796__(5233);



})();

exports.ButtonOption = __webpack_exports__.ButtonOption;
exports.CheckboxOption = __webpack_exports__.CheckboxOption;
exports.InputOption = __webpack_exports__.InputOption;
exports.IntegerOption = __webpack_exports__.IntegerOption;
exports.NumberOption = __webpack_exports__.NumberOption;
exports.OptionPlugin = __webpack_exports__.OptionPlugin;
exports.SelectOption = __webpack_exports__.SelectOption;
exports.SliderOption = __webpack_exports__.SliderOption;
exports.TextOption = __webpack_exports__.TextOption;
Object.defineProperty(exports, "__esModule", ({ value: true }));
/******/ })()
;

/***/ }),

/***/ 699:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 4499:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_144__) => {

"use strict";
/* harmony export */ __nested_webpack_require_144__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ DOMRectReadOnly)
/* harmony export */ });
/* harmony import */ var _utils_freeze__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_144__(4451);

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
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_1458__) => {

"use strict";
/* harmony export */ __nested_webpack_require_1458__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ ResizeObservation)
/* harmony export */ });
/* harmony import */ var _ResizeObserverBoxOptions__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_1458__(7338);
/* harmony import */ var _algorithms_calculateBoxSize__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_1458__(4541);
/* harmony import */ var _utils_element__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_1458__(1044);



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
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_3265__) => {

"use strict";
/* harmony export */ __nested_webpack_require_3265__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ ResizeObserver)
/* harmony export */ });
/* harmony import */ var _ResizeObserverController__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_3265__(8591);
/* harmony import */ var _utils_element__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_3265__(1044);


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
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_5860__) => {

"use strict";
/* harmony export */ __nested_webpack_require_5860__.d(__webpack_exports__, {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_6488__) => {

"use strict";
/* harmony export */ __nested_webpack_require_6488__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ ResizeObserverController)
/* harmony export */ });
/* harmony import */ var _utils_scheduler__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_6488__(3324);
/* harmony import */ var _ResizeObservation__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_6488__(9830);
/* harmony import */ var _ResizeObserverDetail__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_6488__(464);
/* harmony import */ var _utils_resizeObservers__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_6488__(8810);




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
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_9672__) => {

"use strict";
/* harmony export */ __nested_webpack_require_9672__.d(__webpack_exports__, {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_10283__) => {

"use strict";
/* harmony export */ __nested_webpack_require_10283__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ ResizeObserverEntry)
/* harmony export */ });
/* harmony import */ var _algorithms_calculateBoxSize__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_10283__(4541);
/* harmony import */ var _utils_freeze__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_10283__(4451);


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
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_11472__) => {

"use strict";
/* harmony export */ __nested_webpack_require_11472__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ ResizeObserverSize)
/* harmony export */ });
/* harmony import */ var _utils_freeze__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_11472__(4451);

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
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_12142__) => {

"use strict";
/* harmony export */ __nested_webpack_require_12142__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ broadcastActiveObservations)
/* harmony export */ });
/* harmony import */ var _utils_resizeObservers__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_12142__(8810);
/* harmony import */ var _ResizeObserverEntry__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_12142__(3106);
/* harmony import */ var _calculateDepthForNode__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_12142__(6508);
/* harmony import */ var _calculateBoxSize__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_12142__(4541);




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
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_14175__) => {

"use strict";
/* harmony export */ __nested_webpack_require_14175__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ calculateBoxSize),
/* harmony export */   "u": () => (/* binding */ calculateBoxSizes)
/* harmony export */ });
/* harmony import */ var _ResizeObserverBoxOptions__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_14175__(7338);
/* harmony import */ var _ResizeObserverSize__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_14175__(1839);
/* harmony import */ var _DOMRectReadOnly__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_14175__(4499);
/* harmony import */ var _utils_element__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_14175__(1044);
/* harmony import */ var _utils_freeze__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_14175__(4451);
/* harmony import */ var _utils_global__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_14175__(6842);






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
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_19976__) => {

"use strict";
/* harmony export */ __nested_webpack_require_19976__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ calculateDepthForNode)
/* harmony export */ });
/* harmony import */ var _utils_element__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_19976__(1044);

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
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_20677__) => {

"use strict";
/* harmony export */ __nested_webpack_require_20677__.d(__webpack_exports__, {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_21401__) => {

"use strict";
/* harmony export */ __nested_webpack_require_21401__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ gatherActiveObservationsAtDepth)
/* harmony export */ });
/* harmony import */ var _utils_resizeObservers__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_21401__(8810);
/* harmony import */ var _calculateDepthForNode__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_21401__(6508);


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
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_22638__) => {

"use strict";
/* harmony export */ __nested_webpack_require_22638__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ hasActiveObservations)
/* harmony export */ });
/* harmony import */ var _utils_resizeObservers__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_22638__(8810);

var hasActiveObservations = function () {
    return _utils_resizeObservers__WEBPACK_IMPORTED_MODULE_0__/* .resizeObservers.some */ .C.some(function (ro) { return ro.activeTargets.length > 0; });
};



/***/ }),

/***/ 7912:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_23228__) => {

"use strict";
/* harmony export */ __nested_webpack_require_23228__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ hasSkippedObservations)
/* harmony export */ });
/* harmony import */ var _utils_resizeObservers__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_23228__(8810);

var hasSkippedObservations = function () {
    return _utils_resizeObservers__WEBPACK_IMPORTED_MODULE_0__/* .resizeObservers.some */ .C.some(function (ro) { return ro.skippedTargets.length > 0; });
};



/***/ }),

/***/ 1283:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_23821__) => {

"use strict";
/* harmony export */ __nested_webpack_require_23821__.d(__webpack_exports__, {
/* harmony export */   "do": () => (/* reexport safe */ _ResizeObserver__WEBPACK_IMPORTED_MODULE_0__.d)
/* harmony export */ });
/* harmony import */ var _ResizeObserver__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_23821__(1598);
/* harmony import */ var _ResizeObserverEntry__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_23821__(3106);
/* harmony import */ var _ResizeObserverSize__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_23821__(1839);





/***/ }),

/***/ 1044:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_24445__) => {

"use strict";
/* harmony export */ __nested_webpack_require_24445__.d(__webpack_exports__, {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_26029__) => {

"use strict";
/* harmony export */ __nested_webpack_require_26029__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ freeze)
/* harmony export */ });
var freeze = function (obj) { return Object.freeze(obj); };


/***/ }),

/***/ 6842:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_26357__) => {

"use strict";
/* harmony export */ __nested_webpack_require_26357__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ global)
/* harmony export */ });
var global = typeof window !== 'undefined' ? window : {};


/***/ }),

/***/ 4521:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_26683__) => {

"use strict";
/* harmony export */ __nested_webpack_require_26683__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ process)
/* harmony export */ });
/* harmony import */ var _algorithms_hasActiveObservations__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_26683__(8542);
/* harmony import */ var _algorithms_hasSkippedObservations__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_26683__(7912);
/* harmony import */ var _algorithms_deliverResizeLoopError__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_26683__(1831);
/* harmony import */ var _algorithms_broadcastActiveObservations__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_26683__(101);
/* harmony import */ var _algorithms_gatherActiveObservationsAtDepth__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_26683__(4227);





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
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_28375__) => {

"use strict";
/* harmony export */ __nested_webpack_require_28375__.d(__webpack_exports__, {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_29203__) => {

"use strict";
/* harmony export */ __nested_webpack_require_29203__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ queueResizeObserver)
/* harmony export */ });
/* harmony import */ var _queueMicroTask__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_29203__(3677);

var queueResizeObserver = function (cb) {
    (0,_queueMicroTask__WEBPACK_IMPORTED_MODULE_0__/* .queueMicroTask */ .G)(function ResizeObserver() {
        requestAnimationFrame(cb);
    });
};



/***/ }),

/***/ 8810:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_29778__) => {

"use strict";
/* harmony export */ __nested_webpack_require_29778__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ resizeObservers)
/* harmony export */ });
var resizeObservers = [];



/***/ }),

/***/ 3324:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_30082__) => {

"use strict";
/* harmony export */ __nested_webpack_require_30082__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ scheduler),
/* harmony export */   "t": () => (/* binding */ updateCount)
/* harmony export */ });
/* harmony import */ var _process__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_30082__(4521);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_30082__(6842);
/* harmony import */ var _queueResizeObserver__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_30082__(7745);



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
/***/ ((__unused_webpack_module, exports, __nested_webpack_require_33911__) => {

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

var Vue = _interopDefault(__nested_webpack_require_33911__(4056));

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
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_49846__) => {

"use strict";
__nested_webpack_require_49846__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_49846__.d(__webpack_exports__, {
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

!function(e,n){  true?module.exports=n():0}(this,function(){var e="undefined"!=typeof window,n="undefined"!=typeof navigator,t=e&&("ontouchstart"in window||n&&navigator.msMaxTouchPoints>0)?["touchstart"]:["click"];function i(e){var n=e.event,t=e.handler;(0,e.middleware)(n)&&t(n)}function r(e,n){var r=function(e){var n="function"==typeof e;if(!n&&"object"!=typeof e)throw new Error("v-click-outside: Binding value must be a function or an object");return{handler:n?e:e.handler,middleware:e.middleware||function(e){return e},events:e.events||t,isActive:!(!1===e.isActive),detectIframe:!(!1===e.detectIframe)}}(n.value),d=r.handler,o=r.middleware,a=r.detectIframe;if(r.isActive){if(e["__v-click-outside"]=r.events.map(function(n){return{event:n,srcTarget:document.documentElement,handler:function(n){return function(e){var n=e.el,t=e.event,r=e.handler,d=e.middleware,o=t.path||t.composedPath&&t.composedPath();(o?o.indexOf(n)<0:!n.contains(t.target))&&i({event:t,handler:r,middleware:d})}({el:e,event:n,handler:d,middleware:o})}}}),a){var c={event:"blur",srcTarget:window,handler:function(n){return function(e){var n=e.el,t=e.event,r=e.handler,d=e.middleware;setTimeout(function(){var e=document.activeElement;e&&"IFRAME"===e.tagName&&!n.contains(e)&&i({event:t,handler:r,middleware:d})},0)}({el:e,event:n,handler:d,middleware:o})}};e["__v-click-outside"]=[].concat(e["__v-click-outside"],[c])}e["__v-click-outside"].forEach(function(n){var t=n.event,i=n.srcTarget,r=n.handler;return setTimeout(function(){e["__v-click-outside"]&&i.addEventListener(t,r,!1)},0)})}}function d(e){(e["__v-click-outside"]||[]).forEach(function(e){return e.srcTarget.removeEventListener(e.event,e.handler,!1)}),delete e["__v-click-outside"]}var o=e?{bind:r,update:function(e,n){var t=n.value,i=n.oldValue;JSON.stringify(t)!==JSON.stringify(i)&&(d(e),r(e,{value:t}))},unbind:d}:{};return{install:function(e){e.directive("click-outside",o)},directive:o}});
//# sourceMappingURL=v-click-outside.umd.js.map


/***/ }),

/***/ 5925:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_65568__) => {

"use strict";
/* harmony export */ __nested_webpack_require_65568__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "yh": () => (/* binding */ createDecorator)
/* harmony export */ });
/* unused harmony export mixins */
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_65568__(4056);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_65568__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
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
var reservedPropertyNames = (/* unused pure expression or super */ null && (0));
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
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_75632__) => {

"use strict";
/* harmony export */ __nested_webpack_require_75632__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ContextMenu_vue_vue_type_template_id_2cd1f2a4___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_75632__(8773);
/* harmony import */ var _ContextMenu_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_75632__(328);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_75632__(5440);





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
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_76985__) => {

"use strict";
/* harmony export */ __nested_webpack_require_76985__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Editor_vue_vue_type_template_id_e18b6dc6___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_76985__(1239);
/* harmony import */ var _Editor_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_76985__(774);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_76985__(5440);





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
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_78308__) => {

"use strict";
/* harmony export */ __nested_webpack_require_78308__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Minimap_vue_vue_type_template_id_a00135b6___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_78308__(2380);
/* harmony import */ var _Minimap_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_78308__(2390);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_78308__(5440);





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
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_79638__) => {

"use strict";
/* harmony export */ __nested_webpack_require_79638__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Sidebar_vue_vue_type_template_id_7d622f5c___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_79638__(6102);
/* harmony import */ var _Sidebar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_79638__(5212);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_79638__(5440);





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
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_80968__) => {

"use strict";
/* harmony export */ __nested_webpack_require_80968__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ConnectionView_vue_vue_type_template_id_34929434___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_80968__(439);
/* harmony import */ var _ConnectionView_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_80968__(3980);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_80968__(5440);





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
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_82349__) => {

"use strict";
/* harmony export */ __nested_webpack_require_82349__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ConnectionWrapper_vue_vue_type_template_id_76e3acd4___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_82349__(3257);
/* harmony import */ var _ConnectionWrapper_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_82349__(2841);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_82349__(5440);





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
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_83750__) => {

"use strict";
/* harmony export */ __nested_webpack_require_83750__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TemporaryConnection_vue_vue_type_template_id_3b64824e___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_83750__(1740);
/* harmony import */ var _TemporaryConnection_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_83750__(5722);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_83750__(5440);





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
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_85163__) => {

"use strict";
/* harmony export */ __nested_webpack_require_85163__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Node_vue_vue_type_template_id_fecb42a2___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_85163__(3581);
/* harmony import */ var _Node_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_85163__(3938);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_85163__(5440);





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
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_86479__) => {

"use strict";
/* harmony export */ __nested_webpack_require_86479__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NodeInterface_vue_vue_type_template_id_0871ee0c___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_86479__(807);
/* harmony import */ var _NodeInterface_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_86479__(2663);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_86479__(5440);





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
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_87849__) => {

"use strict";
/* harmony export */ __nested_webpack_require_87849__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NodeOption_vue_vue_type_template_id_0b61d384___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_87849__(2086);
/* harmony import */ var _NodeOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_87849__(1918);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_87849__(5440);





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
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_89202__) => {

"use strict";
/* harmony export */ __nested_webpack_require_89202__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_template_id_2cd1f2a4___WEBPACK_IMPORTED_MODULE_0__.s),
/* harmony export */   "x": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_template_id_2cd1f2a4___WEBPACK_IMPORTED_MODULE_0__.x)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_template_id_2cd1f2a4___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_89202__(8892);


/***/ }),

/***/ 1239:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_90202__) => {

"use strict";
/* harmony export */ __nested_webpack_require_90202__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_template_id_e18b6dc6___WEBPACK_IMPORTED_MODULE_0__.s),
/* harmony export */   "x": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_template_id_e18b6dc6___WEBPACK_IMPORTED_MODULE_0__.x)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_template_id_e18b6dc6___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_90202__(839);


/***/ }),

/***/ 2380:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_91186__) => {

"use strict";
/* harmony export */ __nested_webpack_require_91186__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Minimap_vue_vue_type_template_id_a00135b6___WEBPACK_IMPORTED_MODULE_0__.s),
/* harmony export */   "x": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Minimap_vue_vue_type_template_id_a00135b6___WEBPACK_IMPORTED_MODULE_0__.x)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Minimap_vue_vue_type_template_id_a00135b6___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_91186__(617);


/***/ }),

/***/ 6102:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_92173__) => {

"use strict";
/* harmony export */ __nested_webpack_require_92173__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_7d622f5c___WEBPACK_IMPORTED_MODULE_0__.s),
/* harmony export */   "x": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_7d622f5c___WEBPACK_IMPORTED_MODULE_0__.x)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_7d622f5c___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_92173__(7896);


/***/ }),

/***/ 439:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_93160__) => {

"use strict";
/* harmony export */ __nested_webpack_require_93160__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConnectionView_vue_vue_type_template_id_34929434___WEBPACK_IMPORTED_MODULE_0__.s),
/* harmony export */   "x": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConnectionView_vue_vue_type_template_id_34929434___WEBPACK_IMPORTED_MODULE_0__.x)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConnectionView_vue_vue_type_template_id_34929434___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_93160__(4707);


/***/ }),

/***/ 3257:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_94169__) => {

"use strict";
/* harmony export */ __nested_webpack_require_94169__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConnectionWrapper_vue_vue_type_template_id_76e3acd4___WEBPACK_IMPORTED_MODULE_0__.s),
/* harmony export */   "x": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConnectionWrapper_vue_vue_type_template_id_76e3acd4___WEBPACK_IMPORTED_MODULE_0__.x)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConnectionWrapper_vue_vue_type_template_id_76e3acd4___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_94169__(1148);


/***/ }),

/***/ 1740:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_95187__) => {

"use strict";
/* harmony export */ __nested_webpack_require_95187__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TemporaryConnection_vue_vue_type_template_id_3b64824e___WEBPACK_IMPORTED_MODULE_0__.s),
/* harmony export */   "x": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TemporaryConnection_vue_vue_type_template_id_3b64824e___WEBPACK_IMPORTED_MODULE_0__.x)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TemporaryConnection_vue_vue_type_template_id_3b64824e___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_95187__(6545);


/***/ }),

/***/ 3581:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_96211__) => {

"use strict";
/* harmony export */ __nested_webpack_require_96211__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Node_vue_vue_type_template_id_fecb42a2___WEBPACK_IMPORTED_MODULE_0__.s),
/* harmony export */   "x": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Node_vue_vue_type_template_id_fecb42a2___WEBPACK_IMPORTED_MODULE_0__.x)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Node_vue_vue_type_template_id_fecb42a2___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_96211__(5752);


/***/ }),

/***/ 807:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_97189__) => {

"use strict";
/* harmony export */ __nested_webpack_require_97189__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NodeInterface_vue_vue_type_template_id_0871ee0c___WEBPACK_IMPORTED_MODULE_0__.s),
/* harmony export */   "x": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NodeInterface_vue_vue_type_template_id_0871ee0c___WEBPACK_IMPORTED_MODULE_0__.x)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NodeInterface_vue_vue_type_template_id_0871ee0c___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_97189__(1738);


/***/ }),

/***/ 2086:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_98195__) => {

"use strict";
/* harmony export */ __nested_webpack_require_98195__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NodeOption_vue_vue_type_template_id_0b61d384___WEBPACK_IMPORTED_MODULE_0__.s),
/* harmony export */   "x": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NodeOption_vue_vue_type_template_id_0b61d384___WEBPACK_IMPORTED_MODULE_0__.x)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NodeOption_vue_vue_type_template_id_0b61d384___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_98195__(2536);


/***/ }),

/***/ 328:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_99191__) => {

"use strict";
/* harmony export */ __nested_webpack_require_99191__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_99191__(4642);
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

/***/ }),

/***/ 774:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_99976__) => {

"use strict";
/* harmony export */ __nested_webpack_require_99976__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_99976__(9272);
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

/***/ }),

/***/ 2390:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_100752__) => {

"use strict";
/* harmony export */ __nested_webpack_require_100752__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Minimap_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_100752__(7231);
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Minimap_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

/***/ }),

/***/ 5212:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_101530__) => {

"use strict";
/* harmony export */ __nested_webpack_require_101530__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_101530__(5549);
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

/***/ }),

/***/ 3980:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_102308__) => {

"use strict";
/* harmony export */ __nested_webpack_require_102308__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConnectionView_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_102308__(1581);
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConnectionView_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

/***/ }),

/***/ 2841:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_103100__) => {

"use strict";
/* harmony export */ __nested_webpack_require_103100__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConnectionWrapper_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_103100__(3744);
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConnectionWrapper_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

/***/ }),

/***/ 5722:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_103898__) => {

"use strict";
/* harmony export */ __nested_webpack_require_103898__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TemporaryConnection_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_103898__(375);
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TemporaryConnection_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

/***/ }),

/***/ 3938:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_104699__) => {

"use strict";
/* harmony export */ __nested_webpack_require_104699__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Node_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_104699__(8785);
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Node_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

/***/ }),

/***/ 2663:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_105471__) => {

"use strict";
/* harmony export */ __nested_webpack_require_105471__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NodeInterface_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_105471__(865);
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NodeInterface_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

/***/ }),

/***/ 1918:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_106260__) => {

"use strict";
/* harmony export */ __nested_webpack_require_106260__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NodeOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_106260__(4290);
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_ts_loader_index_js_clonedRuleSet_1_0_rules_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NodeOption_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

/***/ }),

/***/ 8892:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_107044__) => {

"use strict";
/* harmony export */ __nested_webpack_require_107044__.d(__webpack_exports__, {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_110994__) => {

"use strict";
/* harmony export */ __nested_webpack_require_110994__.d(__webpack_exports__, {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_115006__) => {

"use strict";
/* harmony export */ __nested_webpack_require_115006__.d(__webpack_exports__, {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_116184__) => {

"use strict";
/* harmony export */ __nested_webpack_require_116184__.d(__webpack_exports__, {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_117436__) => {

"use strict";
/* harmony export */ __nested_webpack_require_117436__.d(__webpack_exports__, {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_117995__) => {

"use strict";
/* harmony export */ __nested_webpack_require_117995__.d(__webpack_exports__, {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_118683__) => {

"use strict";
/* harmony export */ __nested_webpack_require_118683__.d(__webpack_exports__, {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_119424__) => {

"use strict";
/* harmony export */ __nested_webpack_require_119424__.d(__webpack_exports__, {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_125173__) => {

"use strict";
/* harmony export */ __nested_webpack_require_125173__.d(__webpack_exports__, {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_126527__) => {

"use strict";
/* harmony export */ __nested_webpack_require_126527__.d(__webpack_exports__, {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_127361__) => {

"use strict";
/* harmony export */ __nested_webpack_require_127361__.d(__webpack_exports__, {
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
var __spreadArrays = ( false) || function () {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_132651__) => {

"use strict";
/* harmony export */ __nested_webpack_require_132651__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ Inject)
/* harmony export */ });
/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_132651__(5925);

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
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_133505__) => {

"use strict";
/* unused harmony export Model */
/* harmony import */ var _helpers_metadata__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_133505__(779);


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
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_134292__) => {

"use strict";
/* unused harmony export ModelSync */
/* harmony import */ var _helpers_metadata__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_134292__(779);


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
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_135563__) => {

"use strict";
/* harmony export */ __nested_webpack_require_135563__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ Prop)
/* harmony export */ });
/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_135563__(5925);
/* harmony import */ var _helpers_metadata__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_135563__(779);


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
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_136609__) => {

"use strict";
/* unused harmony export PropSync */
/* harmony import */ var _helpers_metadata__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_136609__(779);


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
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_137771__) => {

"use strict";
/* harmony export */ __nested_webpack_require_137771__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ Provide)
/* harmony export */ });
/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_137771__(5925);
/* harmony import */ var _helpers_provideInject__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_137771__(3331);


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
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_138953__) => {

"use strict";
/* harmony export */ __nested_webpack_require_138953__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ Watch)
/* harmony export */ });
/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_138953__(5925);

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
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_140287__) => {

"use strict";
/* harmony export */ __nested_webpack_require_140287__.d(__webpack_exports__, {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_141208__) => {

"use strict";
/* harmony export */ __nested_webpack_require_141208__.d(__webpack_exports__, {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_143329__) => {

"use strict";
/* harmony export */ __nested_webpack_require_143329__.d(__webpack_exports__, {
/* harmony export */   "DF": () => (/* reexport safe */ _decorators_Provide__WEBPACK_IMPORTED_MODULE_8__.D),
/* harmony export */   "RL": () => (/* reexport safe */ _decorators_Watch__WEBPACK_IMPORTED_MODULE_9__.R),
/* harmony export */   "fI": () => (/* reexport safe */ _decorators_Prop__WEBPACK_IMPORTED_MODULE_6__.f),
/* harmony export */   "tB": () => (/* reexport safe */ _decorators_Inject__WEBPACK_IMPORTED_MODULE_3__.t),
/* harmony export */   "w3": () => (/* reexport default from dynamic */ vue__WEBPACK_IMPORTED_MODULE_0___default.a),
/* harmony export */   "wA": () => (/* reexport safe */ vue_class_component__WEBPACK_IMPORTED_MODULE_1__.ZP)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_143329__(4056);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_143329__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_143329__(5925);
/* harmony import */ var _decorators_Emit__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_143329__(4807);
/* harmony import */ var _decorators_Inject__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_143329__(8127);
/* harmony import */ var _decorators_Model__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_143329__(7023);
/* harmony import */ var _decorators_ModelSync__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_143329__(5654);
/* harmony import */ var _decorators_Prop__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_143329__(6070);
/* harmony import */ var _decorators_PropSync__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_143329__(8793);
/* harmony import */ var _decorators_Provide__WEBPACK_IMPORTED_MODULE_8__ = __nested_webpack_require_143329__(2997);
/* harmony import */ var _decorators_Watch__WEBPACK_IMPORTED_MODULE_9__ = __nested_webpack_require_143329__(5612);
/** vue-property-decorator verson 9.1.2 MIT LICENSE copyright 2020 kaorun343 */
/// <reference types='reflect-metadata'/>

















/***/ }),

/***/ 9290:
/***/ ((__unused_webpack_module, exports, __nested_webpack_require_145465__) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
exports.p$ = __webpack_unused_export__ = exports.wD = exports.EZ = void 0;
var tslib_1 = __nested_webpack_require_145465__(5163);
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

/***/ 4642:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_149903__) => {

"use strict";
/* harmony export */ __nested_webpack_require_149903__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_149903__(5163);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_149903__(2659);
/* harmony import */ var v_click_outside__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_149903__(3570);
/* harmony import */ var v_click_outside__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_149903__.n(v_click_outside__WEBPACK_IMPORTED_MODULE_1__);


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

/***/ 9272:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_157722__) => {

"use strict";
/* harmony export */ __nested_webpack_require_157722__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_157722__(5163);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_157722__(2659);
/* harmony import */ var _baklavajs_core_types__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_157722__(5447);
/* harmony import */ var _clipboard__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_157722__(8738);
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_157722__(9047);





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

/***/ 7231:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_172673__) => {

"use strict";
/* harmony export */ __nested_webpack_require_172673__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_172673__(5163);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_172673__(2659);
/* harmony import */ var _connection_domResolver__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_172673__(307);
/* harmony import */ var _connection_portCoordinates__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_172673__(623);




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

/***/ 5549:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_184568__) => {

"use strict";
/* harmony export */ __nested_webpack_require_184568__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_184568__(5163);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_184568__(2659);


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

/***/ 1581:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_187148__) => {

"use strict";
/* harmony export */ __nested_webpack_require_187148__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_187148__(5163);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_187148__(2659);
/* harmony import */ var _baklavajs_core_types__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_187148__(5447);



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

/***/ 3744:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_191883__) => {

"use strict";
/* harmony export */ __nested_webpack_require_191883__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_191883__(5163);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_191883__(2659);
/* harmony import */ var _juggle_resize_observer__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_191883__(1283);
/* harmony import */ var _ConnectionView_vue__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_191883__(4609);
/* harmony import */ var _domResolver__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_191883__(307);
/* harmony import */ var _baklavajs_core_types__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_191883__(5447);






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

/***/ 375:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_196883__) => {

"use strict";
/* harmony export */ __nested_webpack_require_196883__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_196883__(5163);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_196883__(2659);
/* harmony import */ var _ConnectionView_vue__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_196883__(4609);
/* harmony import */ var _baklavajs_core_types__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_196883__(5447);
/* harmony import */ var _domResolver__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_196883__(307);
/* harmony import */ var _portCoordinates__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_196883__(623);






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

/***/ 8785:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_200242__) => {

"use strict";
/* harmony export */ __nested_webpack_require_200242__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_200242__(5163);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_200242__(2659);
/* harmony import */ var v_click_outside__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_200242__(3570);
/* harmony import */ var v_click_outside__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_200242__.n(v_click_outside__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utility_cssNames__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_200242__(7566);


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

/***/ 865:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_207914__) => {

"use strict";
/* harmony export */ __nested_webpack_require_207914__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_207914__(5163);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_207914__(2659);


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

/***/ 4290:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_212009__) => {

"use strict";
/* harmony export */ __nested_webpack_require_212009__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_212009__(5163);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_212009__(2659);


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

/***/ 3855:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_215317__) => {

"use strict";
/* harmony export */ __nested_webpack_require_215317__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ TemporaryConnectionState)
/* harmony export */ });
var TemporaryConnectionState;
(function (TemporaryConnectionState) {
    TemporaryConnectionState[TemporaryConnectionState["NONE"] = 0] = "NONE";
    TemporaryConnectionState[TemporaryConnectionState["ALLOWED"] = 1] = "ALLOWED";
    TemporaryConnectionState[TemporaryConnectionState["FORBIDDEN"] = 2] = "FORBIDDEN";
})(TemporaryConnectionState || (TemporaryConnectionState = {}));


/***/ }),

/***/ 5447:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_215984__) => {

"use strict";
/* harmony export */ __nested_webpack_require_215984__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* reexport safe */ _connection__WEBPACK_IMPORTED_MODULE_0__.T)
/* harmony export */ });
/* harmony import */ var _connection__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_215984__(3855);










/***/ }),

/***/ 1205:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_216397__) => {

"use strict";
/* harmony export */ __nested_webpack_require_216397__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ BaklavaVuePlugin)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_216397__(4056);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_216397__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Editor_vue__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_216397__(5749);
/* harmony import */ var portal_vue__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_216397__(1383);


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

/***/ 8738:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_217757__) => {

"use strict";
/* harmony export */ __nested_webpack_require_217757__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_217757__(5163);

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

/***/ 307:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_223180__) => {

"use strict";
/* harmony export */ __nested_webpack_require_223180__.d(__webpack_exports__, {
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

/***/ 623:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_224021__) => {

"use strict";
/* harmony export */ __nested_webpack_require_224021__.d(__webpack_exports__, {
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

/***/ 2976:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_224736__) => {

"use strict";
/* harmony export */ __nested_webpack_require_224736__.d(__webpack_exports__, {
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

/***/ 9047:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_226849__) => {

"use strict";
/* harmony export */ __nested_webpack_require_226849__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nodeStep__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_226849__(1691);
/* harmony import */ var _connectionStep__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_226849__(2976);


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

/***/ 1691:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_229989__) => {

"use strict";
/* harmony export */ __nested_webpack_require_229989__.d(__webpack_exports__, {
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

/***/ 8399:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_231680__) => {

"use strict";
/* harmony export */ __nested_webpack_require_231680__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ createSimpleSnappingProvider)
/* harmony export */ });
function createSimpleSnappingProvider(xGrid, yGrid) {
    return function (x, y) { return ({
        x: Math.round(x / xGrid) * xGrid,
        y: Math.round(y / yGrid) * yGrid
    }); };
}


/***/ }),

/***/ 7566:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_232159__) => {

"use strict";
/* harmony export */ __nested_webpack_require_232159__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ sanitizeName)
/* harmony export */ });
function sanitizeName(name) {
    return name.replace(" ", "-");
}


/***/ }),

/***/ 9349:
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_232500__) => {

"use strict";
/* harmony export */ __nested_webpack_require_232500__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ ViewPlugin)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_232500__(4056);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_232500__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baklavajs_events__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_232500__(9290);
/* harmony import */ var _snapping__WEBPACK_IMPORTED_MODULE_10__ = __nested_webpack_require_232500__(8399);
/* harmony import */ var _components_node_Node_vue__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_232500__(8731);
/* harmony import */ var _components_node_NodeOption_vue__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_232500__(7109);
/* harmony import */ var _components_node_NodeInterface_vue__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_232500__(778);
/* harmony import */ var _components_connection_ConnectionWrapper_vue__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_232500__(241);
/* harmony import */ var _components_connection_TemporaryConnection_vue__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_232500__(9844);
/* harmony import */ var _components_ContextMenu_vue__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_232500__(394);
/* harmony import */ var _components_Sidebar_vue__WEBPACK_IMPORTED_MODULE_8__ = __nested_webpack_require_232500__(6566);
/* harmony import */ var _components_Minimap_vue__WEBPACK_IMPORTED_MODULE_9__ = __nested_webpack_require_232500__(4890);











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

/***/ 4056:
/***/ ((module) => {

"use strict";
module.exports = __webpack_require__(976);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_239815__(moduleId) {
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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_239815__);
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__nested_webpack_require_239815__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__nested_webpack_require_239815__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_239815__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_239815__.o(definition, key) && !__nested_webpack_require_239815__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nested_webpack_require_239815__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_239815__.r = (exports) => {
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
__nested_webpack_require_239815__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_239815__.d(__webpack_exports__, {
/* harmony export */   "BaklavaVuePlugin": () => (/* reexport safe */ _baklavaVuePlugin__WEBPACK_IMPORTED_MODULE_10__.q),
/* harmony export */   "Components": () => (/* binding */ Components),
/* harmony export */   "Editor": () => (/* reexport safe */ _components_Editor_vue__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "ViewPlugin": () => (/* reexport safe */ _viewPlugin__WEBPACK_IMPORTED_MODULE_12__.l),
/* harmony export */   "createSimpleSnappingProvider": () => (/* reexport safe */ _snapping__WEBPACK_IMPORTED_MODULE_11__.a)
/* harmony export */ });
/* harmony import */ var _components_Editor_vue__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_239815__(5749);
/* harmony import */ var _components_connection_ConnectionView_vue__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_239815__(4609);
/* harmony import */ var _components_connection_ConnectionWrapper_vue__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_239815__(241);
/* harmony import */ var _components_connection_TemporaryConnection_vue__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_239815__(9844);
/* harmony import */ var _components_node_Node_vue__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_239815__(8731);
/* harmony import */ var _components_node_NodeInterface_vue__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_239815__(778);
/* harmony import */ var _components_node_NodeOption_vue__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_239815__(7109);
/* harmony import */ var _components_ContextMenu_vue__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_239815__(394);
/* harmony import */ var _components_Sidebar_vue__WEBPACK_IMPORTED_MODULE_8__ = __nested_webpack_require_239815__(6566);
/* harmony import */ var _components_Minimap_vue__WEBPACK_IMPORTED_MODULE_9__ = __nested_webpack_require_239815__(4890);
/* harmony import */ var _baklavaVuePlugin__WEBPACK_IMPORTED_MODULE_10__ = __nested_webpack_require_239815__(1205);
/* harmony import */ var _snapping__WEBPACK_IMPORTED_MODULE_11__ = __nested_webpack_require_239815__(8399);
/* harmony import */ var _viewPlugin__WEBPACK_IMPORTED_MODULE_12__ = __nested_webpack_require_239815__(9349);










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

exports.BaklavaVuePlugin = __webpack_exports__.BaklavaVuePlugin;
exports.Components = __webpack_exports__.Components;
exports.Editor = __webpack_exports__.Editor;
exports.ViewPlugin = __webpack_exports__.ViewPlugin;
exports.createSimpleSnappingProvider = __webpack_exports__.createSimpleSnappingProvider;
Object.defineProperty(exports, "__esModule", ({ value: true }));
/******/ })()
;

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/* harmony export */   "Core": () => (/* reexport module object */ _baklavajs_core__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   "PluginEngine": () => (/* reexport module object */ _baklavajs_plugin_engine__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "PluginInterfaceTypes": () => (/* reexport module object */ _baklavajs_plugin_interface_types__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   "PluginOptionsVue": () => (/* reexport module object */ _baklavajs_plugin_options_vue__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   "PluginRendererVue": () => (/* reexport module object */ _baklavajs_plugin_renderer_vue__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   "createBaklava": () => (/* binding */ createBaklava)
/* harmony export */ });
/* harmony import */ var _baklavajs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(197);
/* harmony import */ var _baklavajs_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_baklavajs_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baklavajs_plugin_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39);
/* harmony import */ var _baklavajs_plugin_engine__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baklavajs_plugin_engine__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _baklavajs_plugin_interface_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(773);
/* harmony import */ var _baklavajs_plugin_interface_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_baklavajs_plugin_interface_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _baklavajs_plugin_options_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(521);
/* harmony import */ var _baklavajs_plugin_options_vue__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_baklavajs_plugin_options_vue__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _baklavajs_plugin_renderer_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(699);
/* harmony import */ var _baklavajs_plugin_renderer_vue__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_baklavajs_plugin_renderer_vue__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(976);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_5__);







function createBaklava(element) {
    vue__WEBPACK_IMPORTED_MODULE_5___default().use(_baklavajs_plugin_renderer_vue__WEBPACK_IMPORTED_MODULE_4__.BaklavaVuePlugin);
    var editor = new _baklavajs_core__WEBPACK_IMPORTED_MODULE_0__.Editor();
    var plugin = new _baklavajs_plugin_renderer_vue__WEBPACK_IMPORTED_MODULE_4__.ViewPlugin();
    editor.use(plugin);
    new (vue__WEBPACK_IMPORTED_MODULE_5___default())({
        data: function () {
            return {
                plugin: plugin
            };
        },
        render: function (createElement) {
            return createElement("baklava-editor", {
                props: {
                    plugin: this.plugin
                }
            });
        }
    }).$mount(element);
    return plugin;
}


})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});