!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("jszip")):"function"==typeof define&&define.amd?define(["exports","jszip"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self)["parse-mind"]={},e.jszip)}(this,(function(e,t){"use strict";function n(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var i=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,i.get?i:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var i,o=n(t);function r(e,t,n,i){return new(n||(n=Promise))((function(o,r){function c(e){try{f(i.next(e))}catch(e){r(e)}}function u(e){try{f(i.throw(e))}catch(e){r(e)}}function f(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,u)}f((i=i.apply(e,t||[])).next())}))}!function(e){e[e.left=0]="left",e[e.right=1]="right"}(i||(i={}));let c=["manifest.json","content.json","metadata.json"];function u(e){return new Promise(((t,n)=>r(this,void 0,void 0,(function*(){try{const{files:n}=yield o.loadAsync(e);let i=yield n[c[1]].async("string"),r=JSON.parse(i);t(r)}catch(e){n(e)}}))))}e.parseXindFileToJsmind=function(e){return r(this,void 0,void 0,(function*(){return function(e){return function e(t){let n={};if(t.children&&t.children.attached.length>0){let i=t.children.attached.map((t=>e(t)));n.children=i}return n.id=t.id,n.topic=t.title,n}(e[0].rootTopic)}(yield u(e))}))},e.parseXmindFileToJson=function(e){return r(this,void 0,void 0,(function*(){return yield u(e)}))},Object.defineProperty(e,"__esModule",{value:!0})}));
