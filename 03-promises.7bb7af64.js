parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"GyVV":[function(require,module,exports) {
const e=document.querySelector('[name="delay"]'),t=document.querySelector('[name="step"]'),n=document.querySelector('[name="amount"]'),l=document.querySelector("form");let o=null;function u(t){t.preventDefault();let l=0;o=setInterval(()=>{(l+=1)>=n.value&&clearInterval(o),r("0",e.value)},e.value)}function r(e,t){Math.random()>.3?console.log(`✅ Fulfilled promise ${e} in ${t}ms`):console.log(`❌ Rejected promise ${e} in ${t}ms`)}l.addEventListener("submit",u);
},{}]},{},["GyVV"], null)
//# sourceMappingURL=/goit-js-hw-09/03-promises.7bb7af64.js.map