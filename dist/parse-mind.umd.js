!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((n="undefined"!=typeof globalThis?globalThis:n||self)["parse-mind"]={})}(this,(function(n){"use strict";function e(n,e,t,i){return new(t||(t=Promise))((function(o,r){function c(n){try{d(i.next(n))}catch(n){r(n)}}function f(n){try{d(i.throw(n))}catch(n){r(n)}}function d(n){var e;n.done?o(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(c,f)}d((i=i.apply(n,e||[])).next())}))}var t;!function(n){n[n.left=0]="left",n[n.right=1]="right"}(t||(t={}));const i=["xmind"];function o(n){return new Promise(((e,t)=>{const o=n.name.split(".").pop();-1===i.indexOf(o)&&t(new Error(`仅支持${i.join(" ")}文件的解析！`));const r=new FileReader;r.readAsText(n),r.onloadend=function(){const n=r.result;e(n)},r.onerror=function(){t(new Error("文件解析错误！"))}}))}function r(n){let e=n.indexOf("content.json"),t=n.indexOf("content.xml"),o=n.slice(e,t);if(-1===e||-1===t)throw new Error(`仅支持${i.join(" ")}文件的解析！`);o=o.replace("content.json","");let r=o.lastIndexOf("]");return o=o.slice(0,r+1),JSON.parse(o)}n.parseXindFileToJsmind=function(n){return e(this,void 0,void 0,(function*(){return function(n){return function n(e){let t={};if(e.children&&e.children.attached.length>0){let i=e.children.attached.map((e=>n(e)));t.children=i}return t.id=e.id,t.topic=e.title,t}(n[0].rootTopic)}(r(yield o(n)))}))},n.parseXmindFileToJson=function(n){return e(this,void 0,void 0,(function*(){return r(yield o(n))}))},Object.defineProperty(n,"__esModule",{value:!0})}));
