/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/anki-apkg-generator/dist/index.min.js":
/*!************************************************************!*\
  !*** ./node_modules/anki-apkg-generator/dist/index.min.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*! For license information please see index.min.js.LICENSE.txt */
!function(t,e){ true?module.exports=e(__webpack_require__(/*! jszip */ "./node_modules/jszip/dist/jszip.min.js"),__webpack_require__(/*! buffer */ "./node_modules/buffer/index.js")):0}(this,(function(t,e){return(()=>{var n={1027:(t,e,n)=>{var r=n(9509).Buffer,i=n(2830).Transform,o=n(2553).s;function a(t){i.call(this),this.hashMode="string"==typeof t,this.hashMode?this[t]=this._finalOrDigest:this.final=this._finalOrDigest,this._final&&(this.__final=this._final,this._final=null),this._decoder=null,this._encoding=null}n(5717)(a,i),a.prototype.update=function(t,e,n){"string"==typeof t&&(t=r.from(t,e));var i=this._update(t);return this.hashMode?this:(n&&(i=this._toString(i,n)),i)},a.prototype.setAutoPadding=function(){},a.prototype.getAuthTag=function(){throw new Error("trying to get auth tag in unsupported state")},a.prototype.setAuthTag=function(){throw new Error("trying to set auth tag in unsupported state")},a.prototype.setAAD=function(){throw new Error("trying to set aad in unsupported state")},a.prototype._transform=function(t,e,n){var r;try{this.hashMode?this._update(t):this.push(this._update(t))}catch(t){r=t}finally{n(r)}},a.prototype._flush=function(t){var e;try{this.push(this.__final())}catch(t){e=t}t(e)},a.prototype._finalOrDigest=function(t){var e=this.__final()||r.alloc(0);return t&&(e=this._toString(e,t,!0)),e},a.prototype._toString=function(t,e,n){if(this._decoder||(this._decoder=new o(e),this._encoding=e),this._encoding!==e)throw new Error("can't switch encodings");var r=this._decoder.write(t);return n&&(r+=this._decoder.end()),r},t.exports=a},3482:(t,e,n)=>{"use strict";var r=n(5717),i=n(2318),o=n(9785),a=n(9072),s=n(1027);function u(t){s.call(this,"digest"),this._hash=t}r(u,s),u.prototype._update=function(t){this._hash.update(t)},u.prototype._final=function(){return this._hash.digest()},t.exports=function(t){return"md5"===(t=t.toLowerCase())?new i:"rmd160"===t||"ripemd160"===t?new o:new u(a(t))}},7187:t=>{"use strict";var e,n="object"==typeof Reflect?Reflect:null,r=n&&"function"==typeof n.apply?n.apply:function(t,e,n){return Function.prototype.apply.call(t,e,n)};e=n&&"function"==typeof n.ownKeys?n.ownKeys:Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:function(t){return Object.getOwnPropertyNames(t)};var i=Number.isNaN||function(t){return t!=t};function o(){o.init.call(this)}t.exports=o,t.exports.once=function(t,e){return new Promise((function(n,r){function i(n){t.removeListener(e,o),r(n)}function o(){"function"==typeof t.removeListener&&t.removeListener("error",i),n([].slice.call(arguments))}b(t,e,o,{once:!0}),"error"!==e&&function(t,e,n){"function"==typeof t.on&&b(t,"error",e,{once:!0})}(t,i)}))},o.EventEmitter=o,o.prototype._events=void 0,o.prototype._eventsCount=0,o.prototype._maxListeners=void 0;var a=10;function s(t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)}function u(t){return void 0===t._maxListeners?o.defaultMaxListeners:t._maxListeners}function l(t,e,n,r){var i,o,a,l;if(s(n),void 0===(o=t._events)?(o=t._events=Object.create(null),t._eventsCount=0):(void 0!==o.newListener&&(t.emit("newListener",e,n.listener?n.listener:n),o=t._events),a=o[e]),void 0===a)a=o[e]=n,++t._eventsCount;else if("function"==typeof a?a=o[e]=r?[n,a]:[a,n]:r?a.unshift(n):a.push(n),(i=u(t))>0&&a.length>i&&!a.warned){a.warned=!0;var f=new Error("Possible EventEmitter memory leak detected. "+a.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");f.name="MaxListenersExceededWarning",f.emitter=t,f.type=e,f.count=a.length,l=f,console&&console.warn&&console.warn(l)}return t}function f(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function h(t,e,n){var r={fired:!1,wrapFn:void 0,target:t,type:e,listener:n},i=f.bind(r);return i.listener=n,r.wrapFn=i,i}function c(t,e,n){var r=t._events;if(void 0===r)return[];var i=r[e];return void 0===i?[]:"function"==typeof i?n?[i.listener||i]:[i]:n?function(t){for(var e=new Array(t.length),n=0;n<e.length;++n)e[n]=t[n].listener||t[n];return e}(i):p(i,i.length)}function d(t){var e=this._events;if(void 0!==e){var n=e[t];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function p(t,e){for(var n=new Array(e),r=0;r<e;++r)n[r]=t[r];return n}function b(t,e,n,r){if("function"==typeof t.on)r.once?t.once(e,n):t.on(e,n);else{if("function"!=typeof t.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof t);t.addEventListener(e,(function i(o){r.once&&t.removeEventListener(e,i),n(o)}))}}Object.defineProperty(o,"defaultMaxListeners",{enumerable:!0,get:function(){return a},set:function(t){if("number"!=typeof t||t<0||i(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");a=t}}),o.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},o.prototype.setMaxListeners=function(t){if("number"!=typeof t||t<0||i(t))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+t+".");return this._maxListeners=t,this},o.prototype.getMaxListeners=function(){return u(this)},o.prototype.emit=function(t){for(var e=[],n=1;n<arguments.length;n++)e.push(arguments[n]);var i="error"===t,o=this._events;if(void 0!==o)i=i&&void 0===o.error;else if(!i)return!1;if(i){var a;if(e.length>0&&(a=e[0]),a instanceof Error)throw a;var s=new Error("Unhandled error."+(a?" ("+a.message+")":""));throw s.context=a,s}var u=o[t];if(void 0===u)return!1;if("function"==typeof u)r(u,this,e);else{var l=u.length,f=p(u,l);for(n=0;n<l;++n)r(f[n],this,e)}return!0},o.prototype.addListener=function(t,e){return l(this,t,e,!1)},o.prototype.on=o.prototype.addListener,o.prototype.prependListener=function(t,e){return l(this,t,e,!0)},o.prototype.once=function(t,e){return s(e),this.on(t,h(this,t,e)),this},o.prototype.prependOnceListener=function(t,e){return s(e),this.prependListener(t,h(this,t,e)),this},o.prototype.removeListener=function(t,e){var n,r,i,o,a;if(s(e),void 0===(r=this._events))return this;if(void 0===(n=r[t]))return this;if(n===e||n.listener===e)0==--this._eventsCount?this._events=Object.create(null):(delete r[t],r.removeListener&&this.emit("removeListener",t,n.listener||e));else if("function"!=typeof n){for(i=-1,o=n.length-1;o>=0;o--)if(n[o]===e||n[o].listener===e){a=n[o].listener,i=o;break}if(i<0)return this;0===i?n.shift():function(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}(n,i),1===n.length&&(r[t]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",t,a||e)}return this},o.prototype.off=o.prototype.removeListener,o.prototype.removeAllListeners=function(t){var e,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[t]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[t]),this;if(0===arguments.length){var i,o=Object.keys(n);for(r=0;r<o.length;++r)"removeListener"!==(i=o[r])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(e=n[t]))this.removeListener(t,e);else if(void 0!==e)for(r=e.length-1;r>=0;r--)this.removeListener(t,e[r]);return this},o.prototype.listeners=function(t){return c(this,t,!0)},o.prototype.rawListeners=function(t){return c(this,t,!1)},o.listenerCount=function(t,e){return"function"==typeof t.listenerCount?t.listenerCount(e):d.call(t,e)},o.prototype.listenerCount=d,o.prototype.eventNames=function(){return this._eventsCount>0?e(this._events):[]}},3349:(t,e,n)=>{"use strict";var r=n(9509).Buffer,i=n(8473).Transform;function o(t){i.call(this),this._block=r.allocUnsafe(t),this._blockSize=t,this._blockOffset=0,this._length=[0,0,0,0],this._finalized=!1}n(5717)(o,i),o.prototype._transform=function(t,e,n){var r=null;try{this.update(t,e)}catch(t){r=t}n(r)},o.prototype._flush=function(t){var e=null;try{this.push(this.digest())}catch(t){e=t}t(e)},o.prototype.update=function(t,e){if(function(t,e){if(!r.isBuffer(t)&&"string"!=typeof t)throw new TypeError("Data must be a string or a buffer")}(t),this._finalized)throw new Error("Digest already called");r.isBuffer(t)||(t=r.from(t,e));for(var n=this._block,i=0;this._blockOffset+t.length-i>=this._blockSize;){for(var o=this._blockOffset;o<this._blockSize;)n[o++]=t[i++];this._update(),this._blockOffset=0}for(;i<t.length;)n[this._blockOffset++]=t[i++];for(var a=0,s=8*t.length;s>0;++a)this._length[a]+=s,(s=this._length[a]/4294967296|0)>0&&(this._length[a]-=4294967296*s);return this},o.prototype._update=function(){throw new Error("_update is not implemented")},o.prototype.digest=function(t){if(this._finalized)throw new Error("Digest already called");this._finalized=!0;var e=this._digest();void 0!==t&&(e=e.toString(t)),this._block.fill(0),this._blockOffset=0;for(var n=0;n<4;++n)this._length[n]=0;return e},o.prototype._digest=function(){throw new Error("_digest is not implemented")},t.exports=o},5717:t=>{"function"==typeof Object.create?t.exports=function(t,e){e&&(t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}))}:t.exports=function(t,e){if(e){t.super_=e;var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}}},2318:(t,e,n)=>{"use strict";var r=n(5717),i=n(3349),o=n(9509).Buffer,a=new Array(16);function s(){i.call(this,64),this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878}function u(t,e){return t<<e|t>>>32-e}function l(t,e,n,r,i,o,a){return u(t+(e&n|~e&r)+i+o|0,a)+e|0}function f(t,e,n,r,i,o,a){return u(t+(e&r|n&~r)+i+o|0,a)+e|0}function h(t,e,n,r,i,o,a){return u(t+(e^n^r)+i+o|0,a)+e|0}function c(t,e,n,r,i,o,a){return u(t+(n^(e|~r))+i+o|0,a)+e|0}r(s,i),s.prototype._update=function(){for(var t=a,e=0;e<16;++e)t[e]=this._block.readInt32LE(4*e);var n=this._a,r=this._b,i=this._c,o=this._d;n=l(n,r,i,o,t[0],3614090360,7),o=l(o,n,r,i,t[1],3905402710,12),i=l(i,o,n,r,t[2],606105819,17),r=l(r,i,o,n,t[3],3250441966,22),n=l(n,r,i,o,t[4],4118548399,7),o=l(o,n,r,i,t[5],1200080426,12),i=l(i,o,n,r,t[6],2821735955,17),r=l(r,i,o,n,t[7],4249261313,22),n=l(n,r,i,o,t[8],1770035416,7),o=l(o,n,r,i,t[9],2336552879,12),i=l(i,o,n,r,t[10],4294925233,17),r=l(r,i,o,n,t[11],2304563134,22),n=l(n,r,i,o,t[12],1804603682,7),o=l(o,n,r,i,t[13],4254626195,12),i=l(i,o,n,r,t[14],2792965006,17),n=f(n,r=l(r,i,o,n,t[15],1236535329,22),i,o,t[1],4129170786,5),o=f(o,n,r,i,t[6],3225465664,9),i=f(i,o,n,r,t[11],643717713,14),r=f(r,i,o,n,t[0],3921069994,20),n=f(n,r,i,o,t[5],3593408605,5),o=f(o,n,r,i,t[10],38016083,9),i=f(i,o,n,r,t[15],3634488961,14),r=f(r,i,o,n,t[4],3889429448,20),n=f(n,r,i,o,t[9],568446438,5),o=f(o,n,r,i,t[14],3275163606,9),i=f(i,o,n,r,t[3],4107603335,14),r=f(r,i,o,n,t[8],1163531501,20),n=f(n,r,i,o,t[13],2850285829,5),o=f(o,n,r,i,t[2],4243563512,9),i=f(i,o,n,r,t[7],1735328473,14),n=h(n,r=f(r,i,o,n,t[12],2368359562,20),i,o,t[5],4294588738,4),o=h(o,n,r,i,t[8],2272392833,11),i=h(i,o,n,r,t[11],1839030562,16),r=h(r,i,o,n,t[14],4259657740,23),n=h(n,r,i,o,t[1],2763975236,4),o=h(o,n,r,i,t[4],1272893353,11),i=h(i,o,n,r,t[7],4139469664,16),r=h(r,i,o,n,t[10],3200236656,23),n=h(n,r,i,o,t[13],681279174,4),o=h(o,n,r,i,t[0],3936430074,11),i=h(i,o,n,r,t[3],3572445317,16),r=h(r,i,o,n,t[6],76029189,23),n=h(n,r,i,o,t[9],3654602809,4),o=h(o,n,r,i,t[12],3873151461,11),i=h(i,o,n,r,t[15],530742520,16),n=c(n,r=h(r,i,o,n,t[2],3299628645,23),i,o,t[0],4096336452,6),o=c(o,n,r,i,t[7],1126891415,10),i=c(i,o,n,r,t[14],2878612391,15),r=c(r,i,o,n,t[5],4237533241,21),n=c(n,r,i,o,t[12],1700485571,6),o=c(o,n,r,i,t[3],2399980690,10),i=c(i,o,n,r,t[10],4293915773,15),r=c(r,i,o,n,t[1],2240044497,21),n=c(n,r,i,o,t[8],1873313359,6),o=c(o,n,r,i,t[15],4264355552,10),i=c(i,o,n,r,t[6],2734768916,15),r=c(r,i,o,n,t[13],1309151649,21),n=c(n,r,i,o,t[4],4149444226,6),o=c(o,n,r,i,t[11],3174756917,10),i=c(i,o,n,r,t[2],718787259,15),r=c(r,i,o,n,t[9],3951481745,21),this._a=this._a+n|0,this._b=this._b+r|0,this._c=this._c+i|0,this._d=this._d+o|0},s.prototype._digest=function(){this._block[this._blockOffset++]=128,this._blockOffset>56&&(this._block.fill(0,this._blockOffset,64),this._update(),this._blockOffset=0),this._block.fill(0,this._blockOffset,56),this._block.writeUInt32LE(this._length[0],56),this._block.writeUInt32LE(this._length[1],60),this._update();var t=o.allocUnsafe(16);return t.writeInt32LE(this._a,0),t.writeInt32LE(this._b,4),t.writeInt32LE(this._c,8),t.writeInt32LE(this._d,12),t},t.exports=s},4281:t=>{"use strict";var e={};function n(t,n,r){r||(r=Error);var i=function(t){var e,r;function i(e,r,i){return t.call(this,function(t,e,r){return"string"==typeof n?n:n(t,e,r)}(e,r,i))||this}return r=t,(e=i).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,i}(r);i.prototype.name=r.name,i.prototype.code=t,e[t]=i}function r(t,e){if(Array.isArray(t)){var n=t.length;return t=t.map((function(t){return String(t)})),n>2?"one of ".concat(e," ").concat(t.slice(0,n-1).join(", "),", or ")+t[n-1]:2===n?"one of ".concat(e," ").concat(t[0]," or ").concat(t[1]):"of ".concat(e," ").concat(t[0])}return"of ".concat(e," ").concat(String(t))}n("ERR_INVALID_OPT_VALUE",(function(t,e){return'The value "'+e+'" is invalid for option "'+t+'"'}),TypeError),n("ERR_INVALID_ARG_TYPE",(function(t,e,n){var i,o,a,s,u;if("string"==typeof e&&(o="not ",e.substr(0,o.length)===o)?(i="must not be",e=e.replace(/^not /,"")):i="must be",function(t,e,n){return(void 0===n||n>t.length)&&(n=t.length),t.substring(n-e.length,n)===e}(t," argument"))a="The ".concat(t," ").concat(i," ").concat(r(e,"type"));else{var l=("number"!=typeof u&&(u=0),u+".".length>(s=t).length||-1===s.indexOf(".",u)?"argument":"property");a='The "'.concat(t,'" ').concat(l," ").concat(i," ").concat(r(e,"type"))}return a+". Received type ".concat(typeof n)}),TypeError),n("ERR_STREAM_PUSH_AFTER_EOF","stream.push() after EOF"),n("ERR_METHOD_NOT_IMPLEMENTED",(function(t){return"The "+t+" method is not implemented"})),n("ERR_STREAM_PREMATURE_CLOSE","Premature close"),n("ERR_STREAM_DESTROYED",(function(t){return"Cannot call "+t+" after a stream was destroyed"})),n("ERR_MULTIPLE_CALLBACK","Callback called multiple times"),n("ERR_STREAM_CANNOT_PIPE","Cannot pipe, not readable"),n("ERR_STREAM_WRITE_AFTER_END","write after end"),n("ERR_STREAM_NULL_VALUES","May not write null values to stream",TypeError),n("ERR_UNKNOWN_ENCODING",(function(t){return"Unknown encoding: "+t}),TypeError),n("ERR_STREAM_UNSHIFT_AFTER_END_EVENT","stream.unshift() after end event"),t.exports.q=e},6753:(t,e,n)=>{"use strict";var r=Object.keys||function(t){var e=[];for(var n in t)e.push(n);return e};t.exports=l;var i=n(9481),o=n(4229);n(5717)(l,i);for(var a=r(o.prototype),s=0;s<a.length;s++){var u=a[s];l.prototype[u]||(l.prototype[u]=o.prototype[u])}function l(t){if(!(this instanceof l))return new l(t);i.call(this,t),o.call(this,t),this.allowHalfOpen=!0,t&&(!1===t.readable&&(this.readable=!1),!1===t.writable&&(this.writable=!1),!1===t.allowHalfOpen&&(this.allowHalfOpen=!1,this.once("end",f)))}function f(){this._writableState.ended||process.nextTick(h,this)}function h(t){t.end()}Object.defineProperty(l.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),Object.defineProperty(l.prototype,"writableBuffer",{enumerable:!1,get:function(){return this._writableState&&this._writableState.getBuffer()}}),Object.defineProperty(l.prototype,"writableLength",{enumerable:!1,get:function(){return this._writableState.length}}),Object.defineProperty(l.prototype,"destroyed",{enumerable:!1,get:function(){return void 0!==this._readableState&&void 0!==this._writableState&&this._readableState.destroyed&&this._writableState.destroyed},set:function(t){void 0!==this._readableState&&void 0!==this._writableState&&(this._readableState.destroyed=t,this._writableState.destroyed=t)}})},2725:(t,e,n)=>{"use strict";t.exports=i;var r=n(4605);function i(t){if(!(this instanceof i))return new i(t);r.call(this,t)}n(5717)(i,r),i.prototype._transform=function(t,e,n){n(null,t)}},9481:(t,e,n)=>{"use strict";var r;t.exports=k,k.ReadableState=S,n(7187).EventEmitter;var i,o=function(t,e){return t.listeners(e).length},a=n(2503),s=n(9408).Buffer,u=n.g.Uint8Array||function(){},l=n(4616);i=l&&l.debuglog?l.debuglog("stream"):function(){};var f,h,c,d=n(7327),p=n(1195),b=n(2457).getHighWaterMark,_=n(4281).q,m=_.ERR_INVALID_ARG_TYPE,g=_.ERR_STREAM_PUSH_AFTER_EOF,y=_.ERR_METHOD_NOT_IMPLEMENTED,v=_.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;n(5717)(k,a);var w=p.errorOrDestroy,E=["error","close","destroy","pause","resume"];function S(t,e,i){r=r||n(6753),t=t||{},"boolean"!=typeof i&&(i=e instanceof r),this.objectMode=!!t.objectMode,i&&(this.objectMode=this.objectMode||!!t.readableObjectMode),this.highWaterMark=b(this,t,"readableHighWaterMark",i),this.buffer=new d,this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=null,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.resumeScheduled=!1,this.paused=!0,this.emitClose=!1!==t.emitClose,this.autoDestroy=!!t.autoDestroy,this.destroyed=!1,this.defaultEncoding=t.defaultEncoding||"utf8",this.awaitDrain=0,this.readingMore=!1,this.decoder=null,this.encoding=null,t.encoding&&(f||(f=n(2553).s),this.decoder=new f(t.encoding),this.encoding=t.encoding)}function k(t){if(r=r||n(6753),!(this instanceof k))return new k(t);var e=this instanceof r;this._readableState=new S(t,this,e),this.readable=!0,t&&("function"==typeof t.read&&(this._read=t.read),"function"==typeof t.destroy&&(this._destroy=t.destroy)),a.call(this)}function R(t,e,n,r,o){i("readableAddChunk",e);var a,l=t._readableState;if(null===e)l.reading=!1,function(t,e){if(i("onEofChunk"),!e.ended){if(e.decoder){var n=e.decoder.end();n&&n.length&&(e.buffer.push(n),e.length+=e.objectMode?1:n.length)}e.ended=!0,e.sync?L(t):(e.needReadable=!1,e.emittedReadable||(e.emittedReadable=!0,O(t)))}}(t,l);else if(o||(a=function(t,e){var n,r;return r=e,s.isBuffer(r)||r instanceof u||"string"==typeof e||void 0===e||t.objectMode||(n=new m("chunk",["string","Buffer","Uint8Array"],e)),n}(l,e)),a)w(t,a);else if(l.objectMode||e&&e.length>0)if("string"==typeof e||l.objectMode||Object.getPrototypeOf(e)===s.prototype||(e=function(t){return s.from(t)}(e)),r)l.endEmitted?w(t,new v):M(t,l,e,!0);else if(l.ended)w(t,new g);else{if(l.destroyed)return!1;l.reading=!1,l.decoder&&!n?(e=l.decoder.write(e),l.objectMode||0!==e.length?M(t,l,e,!1):A(t,l)):M(t,l,e,!1)}else r||(l.reading=!1,A(t,l));return!l.ended&&(l.length<l.highWaterMark||0===l.length)}function M(t,e,n,r){e.flowing&&0===e.length&&!e.sync?(e.awaitDrain=0,t.emit("data",n)):(e.length+=e.objectMode?1:n.length,r?e.buffer.unshift(n):e.buffer.push(n),e.needReadable&&L(t)),A(t,e)}Object.defineProperty(k.prototype,"destroyed",{enumerable:!1,get:function(){return void 0!==this._readableState&&this._readableState.destroyed},set:function(t){this._readableState&&(this._readableState.destroyed=t)}}),k.prototype.destroy=p.destroy,k.prototype._undestroy=p.undestroy,k.prototype._destroy=function(t,e){e(t)},k.prototype.push=function(t,e){var n,r=this._readableState;return r.objectMode?n=!0:"string"==typeof t&&((e=e||r.defaultEncoding)!==r.encoding&&(t=s.from(t,e),e=""),n=!0),R(this,t,e,!1,n)},k.prototype.unshift=function(t){return R(this,t,null,!0,!1)},k.prototype.isPaused=function(){return!1===this._readableState.flowing},k.prototype.setEncoding=function(t){f||(f=n(2553).s);var e=new f(t);this._readableState.decoder=e,this._readableState.encoding=this._readableState.decoder.encoding;for(var r=this._readableState.buffer.head,i="";null!==r;)i+=e.write(r.data),r=r.next;return this._readableState.buffer.clear(),""!==i&&this._readableState.buffer.push(i),this._readableState.length=i.length,this};var T=1073741824;function x(t,e){return t<=0||0===e.length&&e.ended?0:e.objectMode?1:t!=t?e.flowing&&e.length?e.buffer.head.data.length:e.length:(t>e.highWaterMark&&(e.highWaterMark=function(t){return t>=T?t=T:(t--,t|=t>>>1,t|=t>>>2,t|=t>>>4,t|=t>>>8,t|=t>>>16,t++),t}(t)),t<=e.length?t:e.ended?e.length:(e.needReadable=!0,0))}function L(t){var e=t._readableState;i("emitReadable",e.needReadable,e.emittedReadable),e.needReadable=!1,e.emittedReadable||(i("emitReadable",e.flowing),e.emittedReadable=!0,process.nextTick(O,t))}function O(t){var e=t._readableState;i("emitReadable_",e.destroyed,e.length,e.ended),e.destroyed||!e.length&&!e.ended||(t.emit("readable"),e.emittedReadable=!1),e.needReadable=!e.flowing&&!e.ended&&e.length<=e.highWaterMark,I(t)}function A(t,e){e.readingMore||(e.readingMore=!0,process.nextTick(q,t,e))}function q(t,e){for(;!e.reading&&!e.ended&&(e.length<e.highWaterMark||e.flowing&&0===e.length);){var n=e.length;if(i("maybeReadMore read 0"),t.read(0),n===e.length)break}e.readingMore=!1}function D(t){var e=t._readableState;e.readableListening=t.listenerCount("readable")>0,e.resumeScheduled&&!e.paused?e.flowing=!0:t.listenerCount("data")>0&&t.resume()}function P(t){i("readable nexttick read 0"),t.read(0)}function N(t,e){i("resume",e.reading),e.reading||t.read(0),e.resumeScheduled=!1,t.emit("resume"),I(t),e.flowing&&!e.reading&&t.read(0)}function I(t){var e=t._readableState;for(i("flow",e.flowing);e.flowing&&null!==t.read(););}function j(t,e){return 0===e.length?null:(e.objectMode?n=e.buffer.shift():!t||t>=e.length?(n=e.decoder?e.buffer.join(""):1===e.buffer.length?e.buffer.first():e.buffer.concat(e.length),e.buffer.clear()):n=e.buffer.consume(t,e.decoder),n);var n}function C(t){var e=t._readableState;i("endReadable",e.endEmitted),e.endEmitted||(e.ended=!0,process.nextTick(B,e,t))}function B(t,e){if(i("endReadableNT",t.endEmitted,t.length),!t.endEmitted&&0===t.length&&(t.endEmitted=!0,e.readable=!1,e.emit("end"),t.autoDestroy)){var n=e._writableState;(!n||n.autoDestroy&&n.finished)&&e.destroy()}}function U(t,e){for(var n=0,r=t.length;n<r;n++)if(t[n]===e)return n;return-1}k.prototype.read=function(t){i("read",t),t=parseInt(t,10);var e=this._readableState,n=t;if(0!==t&&(e.emittedReadable=!1),0===t&&e.needReadable&&((0!==e.highWaterMark?e.length>=e.highWaterMark:e.length>0)||e.ended))return i("read: emitReadable",e.length,e.ended),0===e.length&&e.ended?C(this):L(this),null;if(0===(t=x(t,e))&&e.ended)return 0===e.length&&C(this),null;var r,o=e.needReadable;return i("need readable",o),(0===e.length||e.length-t<e.highWaterMark)&&i("length less than watermark",o=!0),e.ended||e.reading?i("reading or ended",o=!1):o&&(i("do read"),e.reading=!0,e.sync=!0,0===e.length&&(e.needReadable=!0),this._read(e.highWaterMark),e.sync=!1,e.reading||(t=x(n,e))),null===(r=t>0?j(t,e):null)?(e.needReadable=e.length<=e.highWaterMark,t=0):(e.length-=t,e.awaitDrain=0),0===e.length&&(e.ended||(e.needReadable=!0),n!==t&&e.ended&&C(this)),null!==r&&this.emit("data",r),r},k.prototype._read=function(t){w(this,new y("_read()"))},k.prototype.pipe=function(t,e){var n=this,r=this._readableState;switch(r.pipesCount){case 0:r.pipes=t;break;case 1:r.pipes=[r.pipes,t];break;default:r.pipes.push(t)}r.pipesCount+=1,i("pipe count=%d opts=%j",r.pipesCount,e);var a=e&&!1===e.end||t===process.stdout||t===process.stderr?p:s;function s(){i("onend"),t.end()}r.endEmitted?process.nextTick(a):n.once("end",a),t.on("unpipe",(function e(o,a){i("onunpipe"),o===n&&a&&!1===a.hasUnpiped&&(a.hasUnpiped=!0,i("cleanup"),t.removeListener("close",c),t.removeListener("finish",d),t.removeListener("drain",u),t.removeListener("error",h),t.removeListener("unpipe",e),n.removeListener("end",s),n.removeListener("end",p),n.removeListener("data",f),l=!0,!r.awaitDrain||t._writableState&&!t._writableState.needDrain||u())}));var u=function(t){return function(){var e=t._readableState;i("pipeOnDrain",e.awaitDrain),e.awaitDrain&&e.awaitDrain--,0===e.awaitDrain&&o(t,"data")&&(e.flowing=!0,I(t))}}(n);t.on("drain",u);var l=!1;function f(e){i("ondata");var o=t.write(e);i("dest.write",o),!1===o&&((1===r.pipesCount&&r.pipes===t||r.pipesCount>1&&-1!==U(r.pipes,t))&&!l&&(i("false write response, pause",r.awaitDrain),r.awaitDrain++),n.pause())}function h(e){i("onerror",e),p(),t.removeListener("error",h),0===o(t,"error")&&w(t,e)}function c(){t.removeListener("finish",d),p()}function d(){i("onfinish"),t.removeListener("close",c),p()}function p(){i("unpipe"),n.unpipe(t)}return n.on("data",f),function(t,e,n){if("function"==typeof t.prependListener)return t.prependListener(e,n);t._events&&t._events.error?Array.isArray(t._events.error)?t._events.error.unshift(n):t._events.error=[n,t._events.error]:t.on(e,n)}(t,"error",h),t.once("close",c),t.once("finish",d),t.emit("pipe",n),r.flowing||(i("pipe resume"),n.resume()),t},k.prototype.unpipe=function(t){var e=this._readableState,n={hasUnpiped:!1};if(0===e.pipesCount)return this;if(1===e.pipesCount)return t&&t!==e.pipes||(t||(t=e.pipes),e.pipes=null,e.pipesCount=0,e.flowing=!1,t&&t.emit("unpipe",this,n)),this;if(!t){var r=e.pipes,i=e.pipesCount;e.pipes=null,e.pipesCount=0,e.flowing=!1;for(var o=0;o<i;o++)r[o].emit("unpipe",this,{hasUnpiped:!1});return this}var a=U(e.pipes,t);return-1===a||(e.pipes.splice(a,1),e.pipesCount-=1,1===e.pipesCount&&(e.pipes=e.pipes[0]),t.emit("unpipe",this,n)),this},k.prototype.on=function(t,e){var n=a.prototype.on.call(this,t,e),r=this._readableState;return"data"===t?(r.readableListening=this.listenerCount("readable")>0,!1!==r.flowing&&this.resume()):"readable"===t&&(r.endEmitted||r.readableListening||(r.readableListening=r.needReadable=!0,r.flowing=!1,r.emittedReadable=!1,i("on readable",r.length,r.reading),r.length?L(this):r.reading||process.nextTick(P,this))),n},k.prototype.addListener=k.prototype.on,k.prototype.removeListener=function(t,e){var n=a.prototype.removeListener.call(this,t,e);return"readable"===t&&process.nextTick(D,this),n},k.prototype.removeAllListeners=function(t){var e=a.prototype.removeAllListeners.apply(this,arguments);return"readable"!==t&&void 0!==t||process.nextTick(D,this),e},k.prototype.resume=function(){var t=this._readableState;return t.flowing||(i("resume"),t.flowing=!t.readableListening,function(t,e){e.resumeScheduled||(e.resumeScheduled=!0,process.nextTick(N,t,e))}(this,t)),t.paused=!1,this},k.prototype.pause=function(){return i("call pause flowing=%j",this._readableState.flowing),!1!==this._readableState.flowing&&(i("pause"),this._readableState.flowing=!1,this.emit("pause")),this._readableState.paused=!0,this},k.prototype.wrap=function(t){var e=this,n=this._readableState,r=!1;for(var o in t.on("end",(function(){if(i("wrapped end"),n.decoder&&!n.ended){var t=n.decoder.end();t&&t.length&&e.push(t)}e.push(null)})),t.on("data",(function(o){i("wrapped data"),n.decoder&&(o=n.decoder.write(o)),n.objectMode&&null==o||(n.objectMode||o&&o.length)&&(e.push(o)||(r=!0,t.pause()))})),t)void 0===this[o]&&"function"==typeof t[o]&&(this[o]=function(e){return function(){return t[e].apply(t,arguments)}}(o));for(var a=0;a<E.length;a++)t.on(E[a],this.emit.bind(this,E[a]));return this._read=function(e){i("wrapped _read",e),r&&(r=!1,t.resume())},this},"function"==typeof Symbol&&(k.prototype[Symbol.asyncIterator]=function(){return void 0===h&&(h=n(5850)),h(this)}),Object.defineProperty(k.prototype,"readableHighWaterMark",{enumerable:!1,get:function(){return this._readableState.highWaterMark}}),Object.defineProperty(k.prototype,"readableBuffer",{enumerable:!1,get:function(){return this._readableState&&this._readableState.buffer}}),Object.defineProperty(k.prototype,"readableFlowing",{enumerable:!1,get:function(){return this._readableState.flowing},set:function(t){this._readableState&&(this._readableState.flowing=t)}}),k._fromList=j,Object.defineProperty(k.prototype,"readableLength",{enumerable:!1,get:function(){return this._readableState.length}}),"function"==typeof Symbol&&(k.from=function(t,e){return void 0===c&&(c=n(5167)),c(k,t,e)})},4605:(t,e,n)=>{"use strict";t.exports=f;var r=n(4281).q,i=r.ERR_METHOD_NOT_IMPLEMENTED,o=r.ERR_MULTIPLE_CALLBACK,a=r.ERR_TRANSFORM_ALREADY_TRANSFORMING,s=r.ERR_TRANSFORM_WITH_LENGTH_0,u=n(6753);function l(t,e){var n=this._transformState;n.transforming=!1;var r=n.writecb;if(null===r)return this.emit("error",new o);n.writechunk=null,n.writecb=null,null!=e&&this.push(e),r(t);var i=this._readableState;i.reading=!1,(i.needReadable||i.length<i.highWaterMark)&&this._read(i.highWaterMark)}function f(t){if(!(this instanceof f))return new f(t);u.call(this,t),this._transformState={afterTransform:l.bind(this),needTransform:!1,transforming:!1,writecb:null,writechunk:null,writeencoding:null},this._readableState.needReadable=!0,this._readableState.sync=!1,t&&("function"==typeof t.transform&&(this._transform=t.transform),"function"==typeof t.flush&&(this._flush=t.flush)),this.on("prefinish",h)}function h(){var t=this;"function"!=typeof this._flush||this._readableState.destroyed?c(this,null,null):this._flush((function(e,n){c(t,e,n)}))}function c(t,e,n){if(e)return t.emit("error",e);if(null!=n&&t.push(n),t._writableState.length)throw new s;if(t._transformState.transforming)throw new a;return t.push(null)}n(5717)(f,u),f.prototype.push=function(t,e){return this._transformState.needTransform=!1,u.prototype.push.call(this,t,e)},f.prototype._transform=function(t,e,n){n(new i("_transform()"))},f.prototype._write=function(t,e,n){var r=this._transformState;if(r.writecb=n,r.writechunk=t,r.writeencoding=e,!r.transforming){var i=this._readableState;(r.needTransform||i.needReadable||i.length<i.highWaterMark)&&this._read(i.highWaterMark)}},f.prototype._read=function(t){var e=this._transformState;null===e.writechunk||e.transforming?e.needTransform=!0:(e.transforming=!0,this._transform(e.writechunk,e.writeencoding,e.afterTransform))},f.prototype._destroy=function(t,e){u.prototype._destroy.call(this,t,(function(t){e(t)}))}},4229:(t,e,n)=>{"use strict";function r(t){var e=this;this.next=null,this.entry=null,this.finish=function(){!function(t,e,n){var r=t.entry;for(t.entry=null;r;){var i=r.callback;e.pendingcb--,i(undefined),r=r.next}e.corkedRequestsFree.next=t}(e,t)}}var i;t.exports=k,k.WritableState=S;var o,a={deprecate:n(4927)},s=n(2503),u=n(9408).Buffer,l=n.g.Uint8Array||function(){},f=n(1195),h=n(2457).getHighWaterMark,c=n(4281).q,d=c.ERR_INVALID_ARG_TYPE,p=c.ERR_METHOD_NOT_IMPLEMENTED,b=c.ERR_MULTIPLE_CALLBACK,_=c.ERR_STREAM_CANNOT_PIPE,m=c.ERR_STREAM_DESTROYED,g=c.ERR_STREAM_NULL_VALUES,y=c.ERR_STREAM_WRITE_AFTER_END,v=c.ERR_UNKNOWN_ENCODING,w=f.errorOrDestroy;function E(){}function S(t,e,o){i=i||n(6753),t=t||{},"boolean"!=typeof o&&(o=e instanceof i),this.objectMode=!!t.objectMode,o&&(this.objectMode=this.objectMode||!!t.writableObjectMode),this.highWaterMark=h(this,t,"writableHighWaterMark",o),this.finalCalled=!1,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1,this.destroyed=!1;var a=!1===t.decodeStrings;this.decodeStrings=!a,this.defaultEncoding=t.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(t){!function(t,e){var n=t._writableState,r=n.sync,i=n.writecb;if("function"!=typeof i)throw new b;if(function(t){t.writing=!1,t.writecb=null,t.length-=t.writelen,t.writelen=0}(n),e)!function(t,e,n,r,i){--e.pendingcb,n?(process.nextTick(i,r),process.nextTick(O,t,e),t._writableState.errorEmitted=!0,w(t,r)):(i(r),t._writableState.errorEmitted=!0,w(t,r),O(t,e))}(t,n,r,e,i);else{var o=x(n)||t.destroyed;o||n.corked||n.bufferProcessing||!n.bufferedRequest||T(t,n),r?process.nextTick(M,t,n,o,i):M(t,n,o,i)}}(e,t)},this.writecb=null,this.writelen=0,this.bufferedRequest=null,this.lastBufferedRequest=null,this.pendingcb=0,this.prefinished=!1,this.errorEmitted=!1,this.emitClose=!1!==t.emitClose,this.autoDestroy=!!t.autoDestroy,this.bufferedRequestCount=0,this.corkedRequestsFree=new r(this)}function k(t){var e=this instanceof(i=i||n(6753));if(!e&&!o.call(k,this))return new k(t);this._writableState=new S(t,this,e),this.writable=!0,t&&("function"==typeof t.write&&(this._write=t.write),"function"==typeof t.writev&&(this._writev=t.writev),"function"==typeof t.destroy&&(this._destroy=t.destroy),"function"==typeof t.final&&(this._final=t.final)),s.call(this)}function R(t,e,n,r,i,o,a){e.writelen=r,e.writecb=a,e.writing=!0,e.sync=!0,e.destroyed?e.onwrite(new m("write")):n?t._writev(i,e.onwrite):t._write(i,o,e.onwrite),e.sync=!1}function M(t,e,n,r){n||function(t,e){0===e.length&&e.needDrain&&(e.needDrain=!1,t.emit("drain"))}(t,e),e.pendingcb--,r(),O(t,e)}function T(t,e){e.bufferProcessing=!0;var n=e.bufferedRequest;if(t._writev&&n&&n.next){var i=e.bufferedRequestCount,o=new Array(i),a=e.corkedRequestsFree;a.entry=n;for(var s=0,u=!0;n;)o[s]=n,n.isBuf||(u=!1),n=n.next,s+=1;o.allBuffers=u,R(t,e,!0,e.length,o,"",a.finish),e.pendingcb++,e.lastBufferedRequest=null,a.next?(e.corkedRequestsFree=a.next,a.next=null):e.corkedRequestsFree=new r(e),e.bufferedRequestCount=0}else{for(;n;){var l=n.chunk,f=n.encoding,h=n.callback;if(R(t,e,!1,e.objectMode?1:l.length,l,f,h),n=n.next,e.bufferedRequestCount--,e.writing)break}null===n&&(e.lastBufferedRequest=null)}e.bufferedRequest=n,e.bufferProcessing=!1}function x(t){return t.ending&&0===t.length&&null===t.bufferedRequest&&!t.finished&&!t.writing}function L(t,e){t._final((function(n){e.pendingcb--,n&&w(t,n),e.prefinished=!0,t.emit("prefinish"),O(t,e)}))}function O(t,e){var n=x(e);if(n&&(function(t,e){e.prefinished||e.finalCalled||("function"!=typeof t._final||e.destroyed?(e.prefinished=!0,t.emit("prefinish")):(e.pendingcb++,e.finalCalled=!0,process.nextTick(L,t,e)))}(t,e),0===e.pendingcb&&(e.finished=!0,t.emit("finish"),e.autoDestroy))){var r=t._readableState;(!r||r.autoDestroy&&r.endEmitted)&&t.destroy()}return n}n(5717)(k,s),S.prototype.getBuffer=function(){for(var t=this.bufferedRequest,e=[];t;)e.push(t),t=t.next;return e},function(){try{Object.defineProperty(S.prototype,"buffer",{get:a.deprecate((function(){return this.getBuffer()}),"_writableState.buffer is deprecated. Use _writableState.getBuffer instead.","DEP0003")})}catch(t){}}(),"function"==typeof Symbol&&Symbol.hasInstance&&"function"==typeof Function.prototype[Symbol.hasInstance]?(o=Function.prototype[Symbol.hasInstance],Object.defineProperty(k,Symbol.hasInstance,{value:function(t){return!!o.call(this,t)||this===k&&t&&t._writableState instanceof S}})):o=function(t){return t instanceof this},k.prototype.pipe=function(){w(this,new _)},k.prototype.write=function(t,e,n){var r,i=this._writableState,o=!1,a=!i.objectMode&&(r=t,u.isBuffer(r)||r instanceof l);return a&&!u.isBuffer(t)&&(t=function(t){return u.from(t)}(t)),"function"==typeof e&&(n=e,e=null),a?e="buffer":e||(e=i.defaultEncoding),"function"!=typeof n&&(n=E),i.ending?function(t,e){var n=new y;w(t,n),process.nextTick(e,n)}(this,n):(a||function(t,e,n,r){var i;return null===n?i=new g:"string"==typeof n||e.objectMode||(i=new d("chunk",["string","Buffer"],n)),!i||(w(t,i),process.nextTick(r,i),!1)}(this,i,t,n))&&(i.pendingcb++,o=function(t,e,n,r,i,o){if(!n){var a=function(t,e,n){return t.objectMode||!1===t.decodeStrings||"string"!=typeof e||(e=u.from(e,n)),e}(e,r,i);r!==a&&(n=!0,i="buffer",r=a)}var s=e.objectMode?1:r.length;e.length+=s;var l=e.length<e.highWaterMark;if(l||(e.needDrain=!0),e.writing||e.corked){var f=e.lastBufferedRequest;e.lastBufferedRequest={chunk:r,encoding:i,isBuf:n,callback:o,next:null},f?f.next=e.lastBufferedRequest:e.bufferedRequest=e.lastBufferedRequest,e.bufferedRequestCount+=1}else R(t,e,!1,s,r,i,o);return l}(this,i,a,t,e,n)),o},k.prototype.cork=function(){this._writableState.corked++},k.prototype.uncork=function(){var t=this._writableState;t.corked&&(t.corked--,t.writing||t.corked||t.bufferProcessing||!t.bufferedRequest||T(this,t))},k.prototype.setDefaultEncoding=function(t){if("string"==typeof t&&(t=t.toLowerCase()),!(["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf16le","utf-16le","raw"].indexOf((t+"").toLowerCase())>-1))throw new v(t);return this._writableState.defaultEncoding=t,this},Object.defineProperty(k.prototype,"writableBuffer",{enumerable:!1,get:function(){return this._writableState&&this._writableState.getBuffer()}}),Object.defineProperty(k.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),k.prototype._write=function(t,e,n){n(new p("_write()"))},k.prototype._writev=null,k.prototype.end=function(t,e,n){var r=this._writableState;return"function"==typeof t?(n=t,t=null,e=null):"function"==typeof e&&(n=e,e=null),null!=t&&this.write(t,e),r.corked&&(r.corked=1,this.uncork()),r.ending||function(t,e,n){e.ending=!0,O(t,e),n&&(e.finished?process.nextTick(n):t.once("finish",n)),e.ended=!0,t.writable=!1}(this,r,n),this},Object.defineProperty(k.prototype,"writableLength",{enumerable:!1,get:function(){return this._writableState.length}}),Object.defineProperty(k.prototype,"destroyed",{enumerable:!1,get:function(){return void 0!==this._writableState&&this._writableState.destroyed},set:function(t){this._writableState&&(this._writableState.destroyed=t)}}),k.prototype.destroy=f.destroy,k.prototype._undestroy=f.undestroy,k.prototype._destroy=function(t,e){e(t)}},5850:(t,e,n)=>{"use strict";var r;function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var o=n(8610),a=Symbol("lastResolve"),s=Symbol("lastReject"),u=Symbol("error"),l=Symbol("ended"),f=Symbol("lastPromise"),h=Symbol("handlePromise"),c=Symbol("stream");function d(t,e){return{value:t,done:e}}function p(t){var e=t[a];if(null!==e){var n=t[c].read();null!==n&&(t[f]=null,t[a]=null,t[s]=null,e(d(n,!1)))}}function b(t){process.nextTick(p,t)}var _=Object.getPrototypeOf((function(){})),m=Object.setPrototypeOf((i(r={get stream(){return this[c]},next:function(){var t=this,e=this[u];if(null!==e)return Promise.reject(e);if(this[l])return Promise.resolve(d(void 0,!0));if(this[c].destroyed)return new Promise((function(e,n){process.nextTick((function(){t[u]?n(t[u]):e(d(void 0,!0))}))}));var n,r=this[f];if(r)n=new Promise(function(t,e){return function(n,r){t.then((function(){e[l]?n(d(void 0,!0)):e[h](n,r)}),r)}}(r,this));else{var i=this[c].read();if(null!==i)return Promise.resolve(d(i,!1));n=new Promise(this[h])}return this[f]=n,n}},Symbol.asyncIterator,(function(){return this})),i(r,"return",(function(){var t=this;return new Promise((function(e,n){t[c].destroy(null,(function(t){t?n(t):e(d(void 0,!0))}))}))})),r),_);t.exports=function(t){var e,n=Object.create(m,(i(e={},c,{value:t,writable:!0}),i(e,a,{value:null,writable:!0}),i(e,s,{value:null,writable:!0}),i(e,u,{value:null,writable:!0}),i(e,l,{value:t._readableState.endEmitted,writable:!0}),i(e,h,{value:function(t,e){var r=n[c].read();r?(n[f]=null,n[a]=null,n[s]=null,t(d(r,!1))):(n[a]=t,n[s]=e)},writable:!0}),e));return n[f]=null,o(t,(function(t){if(t&&"ERR_STREAM_PREMATURE_CLOSE"!==t.code){var e=n[s];return null!==e&&(n[f]=null,n[a]=null,n[s]=null,e(t)),void(n[u]=t)}var r=n[a];null!==r&&(n[f]=null,n[a]=null,n[s]=null,r(d(void 0,!0))),n[l]=!0})),t.on("readable",b.bind(null,n)),n}},7327:(t,e,n)=>{"use strict";function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var a=n(9408).Buffer,s=n(2361).inspect,u=s&&s.custom||"inspect";t.exports=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.head=null,this.tail=null,this.length=0}var e,n;return e=t,n=[{key:"push",value:function(t){var e={data:t,next:null};this.length>0?this.tail.next=e:this.head=e,this.tail=e,++this.length}},{key:"unshift",value:function(t){var e={data:t,next:this.head};0===this.length&&(this.tail=e),this.head=e,++this.length}},{key:"shift",value:function(){if(0!==this.length){var t=this.head.data;return 1===this.length?this.head=this.tail=null:this.head=this.head.next,--this.length,t}}},{key:"clear",value:function(){this.head=this.tail=null,this.length=0}},{key:"join",value:function(t){if(0===this.length)return"";for(var e=this.head,n=""+e.data;e=e.next;)n+=t+e.data;return n}},{key:"concat",value:function(t){if(0===this.length)return a.alloc(0);for(var e,n,r,i=a.allocUnsafe(t>>>0),o=this.head,s=0;o;)e=o.data,n=i,r=s,a.prototype.copy.call(e,n,r),s+=o.data.length,o=o.next;return i}},{key:"consume",value:function(t,e){var n;return t<this.head.data.length?(n=this.head.data.slice(0,t),this.head.data=this.head.data.slice(t)):n=t===this.head.data.length?this.shift():e?this._getString(t):this._getBuffer(t),n}},{key:"first",value:function(){return this.head.data}},{key:"_getString",value:function(t){var e=this.head,n=1,r=e.data;for(t-=r.length;e=e.next;){var i=e.data,o=t>i.length?i.length:t;if(o===i.length?r+=i:r+=i.slice(0,t),0==(t-=o)){o===i.length?(++n,e.next?this.head=e.next:this.head=this.tail=null):(this.head=e,e.data=i.slice(o));break}++n}return this.length-=n,r}},{key:"_getBuffer",value:function(t){var e=a.allocUnsafe(t),n=this.head,r=1;for(n.data.copy(e),t-=n.data.length;n=n.next;){var i=n.data,o=t>i.length?i.length:t;if(i.copy(e,e.length-t,0,o),0==(t-=o)){o===i.length?(++r,n.next?this.head=n.next:this.head=this.tail=null):(this.head=n,n.data=i.slice(o));break}++r}return this.length-=r,e}},{key:u,value:function(t,e){return s(this,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},e,{depth:0,customInspect:!1}))}}],n&&o(e.prototype,n),t}()},1195:t=>{"use strict";function e(t,e){r(t,e),n(t)}function n(t){t._writableState&&!t._writableState.emitClose||t._readableState&&!t._readableState.emitClose||t.emit("close")}function r(t,e){t.emit("error",e)}t.exports={destroy:function(t,i){var o=this,a=this._readableState&&this._readableState.destroyed,s=this._writableState&&this._writableState.destroyed;return a||s?(i?i(t):t&&(this._writableState?this._writableState.errorEmitted||(this._writableState.errorEmitted=!0,process.nextTick(r,this,t)):process.nextTick(r,this,t)),this):(this._readableState&&(this._readableState.destroyed=!0),this._writableState&&(this._writableState.destroyed=!0),this._destroy(t||null,(function(t){!i&&t?o._writableState?o._writableState.errorEmitted?process.nextTick(n,o):(o._writableState.errorEmitted=!0,process.nextTick(e,o,t)):process.nextTick(e,o,t):i?(process.nextTick(n,o),i(t)):process.nextTick(n,o)})),this)},undestroy:function(){this._readableState&&(this._readableState.destroyed=!1,this._readableState.reading=!1,this._readableState.ended=!1,this._readableState.endEmitted=!1),this._writableState&&(this._writableState.destroyed=!1,this._writableState.ended=!1,this._writableState.ending=!1,this._writableState.finalCalled=!1,this._writableState.prefinished=!1,this._writableState.finished=!1,this._writableState.errorEmitted=!1)},errorOrDestroy:function(t,e){var n=t._readableState,r=t._writableState;n&&n.autoDestroy||r&&r.autoDestroy?t.destroy(e):t.emit("error",e)}}},8610:(t,e,n)=>{"use strict";var r=n(4281).q.ERR_STREAM_PREMATURE_CLOSE;function i(){}t.exports=function t(e,n,o){if("function"==typeof n)return t(e,null,n);n||(n={}),o=function(t){var e=!1;return function(){if(!e){e=!0;for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];t.apply(this,r)}}}(o||i);var a=n.readable||!1!==n.readable&&e.readable,s=n.writable||!1!==n.writable&&e.writable,u=function(){e.writable||f()},l=e._writableState&&e._writableState.finished,f=function(){s=!1,l=!0,a||o.call(e)},h=e._readableState&&e._readableState.endEmitted,c=function(){a=!1,h=!0,s||o.call(e)},d=function(t){o.call(e,t)},p=function(){var t;return a&&!h?(e._readableState&&e._readableState.ended||(t=new r),o.call(e,t)):s&&!l?(e._writableState&&e._writableState.ended||(t=new r),o.call(e,t)):void 0},b=function(){e.req.on("finish",f)};return function(t){return t.setHeader&&"function"==typeof t.abort}(e)?(e.on("complete",f),e.on("abort",p),e.req?b():e.on("request",b)):s&&!e._writableState&&(e.on("end",u),e.on("close",u)),e.on("end",c),e.on("finish",f),!1!==n.error&&e.on("error",d),e.on("close",p),function(){e.removeListener("complete",f),e.removeListener("abort",p),e.removeListener("request",b),e.req&&e.req.removeListener("finish",f),e.removeListener("end",u),e.removeListener("close",u),e.removeListener("finish",f),e.removeListener("end",c),e.removeListener("error",d),e.removeListener("close",p)}}},5167:t=>{t.exports=function(){throw new Error("Readable.from is not available in the browser")}},9946:(t,e,n)=>{"use strict";var r,i=n(4281).q,o=i.ERR_MISSING_ARGS,a=i.ERR_STREAM_DESTROYED;function s(t){if(t)throw t}function u(t,e,i,o){o=function(t){var e=!1;return function(){e||(e=!0,t.apply(void 0,arguments))}}(o);var s=!1;t.on("close",(function(){s=!0})),void 0===r&&(r=n(8610)),r(t,{readable:e,writable:i},(function(t){if(t)return o(t);s=!0,o()}));var u=!1;return function(e){if(!s&&!u)return u=!0,function(t){return t.setHeader&&"function"==typeof t.abort}(t)?t.abort():"function"==typeof t.destroy?t.destroy():void o(e||new a("pipe"))}}function l(t){t()}function f(t,e){return t.pipe(e)}function h(t){return t.length?"function"!=typeof t[t.length-1]?s:t.pop():s}t.exports=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var r,i=h(e);if(Array.isArray(e[0])&&(e=e[0]),e.length<2)throw new o("streams");var a=e.map((function(t,n){var o=n<e.length-1;return u(t,o,n>0,(function(t){r||(r=t),t&&a.forEach(l),o||(a.forEach(l),i(r))}))}));return e.reduce(f)}},2457:(t,e,n)=>{"use strict";var r=n(4281).q.ERR_INVALID_OPT_VALUE;t.exports={getHighWaterMark:function(t,e,n,i){var o=function(t,e,n){return null!=t.highWaterMark?t.highWaterMark:e?t[n]:null}(e,i,n);if(null!=o){if(!isFinite(o)||Math.floor(o)!==o||o<0)throw new r(i?n:"highWaterMark",o);return Math.floor(o)}return t.objectMode?16:16384}}},2503:(t,e,n)=>{t.exports=n(7187).EventEmitter},8473:(t,e,n)=>{(e=t.exports=n(9481)).Stream=e,e.Readable=e,e.Writable=n(4229),e.Duplex=n(6753),e.Transform=n(4605),e.PassThrough=n(2725),e.finished=n(8610),e.pipeline=n(9946)},9785:(t,e,n)=>{"use strict";var r=n(9408).Buffer,i=n(5717),o=n(3349),a=new Array(16),s=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13],u=[5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11],l=[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6],f=[8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11],h=[0,1518500249,1859775393,2400959708,2840853838],c=[1352829926,1548603684,1836072691,2053994217,0];function d(){o.call(this,64),this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878,this._e=3285377520}function p(t,e){return t<<e|t>>>32-e}function b(t,e,n,r,i,o,a,s){return p(t+(e^n^r)+o+a|0,s)+i|0}function _(t,e,n,r,i,o,a,s){return p(t+(e&n|~e&r)+o+a|0,s)+i|0}function m(t,e,n,r,i,o,a,s){return p(t+((e|~n)^r)+o+a|0,s)+i|0}function g(t,e,n,r,i,o,a,s){return p(t+(e&r|n&~r)+o+a|0,s)+i|0}function y(t,e,n,r,i,o,a,s){return p(t+(e^(n|~r))+o+a|0,s)+i|0}i(d,o),d.prototype._update=function(){for(var t=a,e=0;e<16;++e)t[e]=this._block.readInt32LE(4*e);for(var n=0|this._a,r=0|this._b,i=0|this._c,o=0|this._d,d=0|this._e,v=0|this._a,w=0|this._b,E=0|this._c,S=0|this._d,k=0|this._e,R=0;R<80;R+=1){var M,T;R<16?(M=b(n,r,i,o,d,t[s[R]],h[0],l[R]),T=y(v,w,E,S,k,t[u[R]],c[0],f[R])):R<32?(M=_(n,r,i,o,d,t[s[R]],h[1],l[R]),T=g(v,w,E,S,k,t[u[R]],c[1],f[R])):R<48?(M=m(n,r,i,o,d,t[s[R]],h[2],l[R]),T=m(v,w,E,S,k,t[u[R]],c[2],f[R])):R<64?(M=g(n,r,i,o,d,t[s[R]],h[3],l[R]),T=_(v,w,E,S,k,t[u[R]],c[3],f[R])):(M=y(n,r,i,o,d,t[s[R]],h[4],l[R]),T=b(v,w,E,S,k,t[u[R]],c[4],f[R])),n=d,d=o,o=p(i,10),i=r,r=M,v=k,k=S,S=p(E,10),E=w,w=T}var x=this._b+i+S|0;this._b=this._c+o+k|0,this._c=this._d+d+v|0,this._d=this._e+n+w|0,this._e=this._a+r+E|0,this._a=x},d.prototype._digest=function(){this._block[this._blockOffset++]=128,this._blockOffset>56&&(this._block.fill(0,this._blockOffset,64),this._update(),this._blockOffset=0),this._block.fill(0,this._blockOffset,56),this._block.writeUInt32LE(this._length[0],56),this._block.writeUInt32LE(this._length[1],60),this._update();var t=r.alloc?r.alloc(20):new r(20);return t.writeInt32LE(this._a,0),t.writeInt32LE(this._b,4),t.writeInt32LE(this._c,8),t.writeInt32LE(this._d,12),t.writeInt32LE(this._e,16),t},t.exports=d},9509:(t,e,n)=>{var r=n(9408),i=r.Buffer;function o(t,e){for(var n in t)e[n]=t[n]}function a(t,e,n){return i(t,e,n)}i.from&&i.alloc&&i.allocUnsafe&&i.allocUnsafeSlow?t.exports=r:(o(r,e),e.Buffer=a),a.prototype=Object.create(i.prototype),o(i,a),a.from=function(t,e,n){if("number"==typeof t)throw new TypeError("Argument must not be a number");return i(t,e,n)},a.alloc=function(t,e,n){if("number"!=typeof t)throw new TypeError("Argument must be a number");var r=i(t);return void 0!==e?"string"==typeof n?r.fill(e,n):r.fill(e):r.fill(0),r},a.allocUnsafe=function(t){if("number"!=typeof t)throw new TypeError("Argument must be a number");return i(t)},a.allocUnsafeSlow=function(t){if("number"!=typeof t)throw new TypeError("Argument must be a number");return r.SlowBuffer(t)}},4189:(t,e,n)=>{var r=n(9509).Buffer;function i(t,e){this._block=r.alloc(t),this._finalSize=e,this._blockSize=t,this._len=0}i.prototype.update=function(t,e){"string"==typeof t&&(e=e||"utf8",t=r.from(t,e));for(var n=this._block,i=this._blockSize,o=t.length,a=this._len,s=0;s<o;){for(var u=a%i,l=Math.min(o-s,i-u),f=0;f<l;f++)n[u+f]=t[s+f];s+=l,(a+=l)%i==0&&this._update(n)}return this._len+=o,this},i.prototype.digest=function(t){var e=this._len%this._blockSize;this._block[e]=128,this._block.fill(0,e+1),e>=this._finalSize&&(this._update(this._block),this._block.fill(0));var n=8*this._len;if(n<=4294967295)this._block.writeUInt32BE(n,this._blockSize-4);else{var r=(4294967295&n)>>>0,i=(n-r)/4294967296;this._block.writeUInt32BE(i,this._blockSize-8),this._block.writeUInt32BE(r,this._blockSize-4)}this._update(this._block);var o=this._hash();return t?o.toString(t):o},i.prototype._update=function(){throw new Error("_update must be implemented by subclass")},t.exports=i},9072:(t,e,n)=>{var r=t.exports=function(t){t=t.toLowerCase();var e=r[t];if(!e)throw new Error(t+" is not supported (we accept pull requests)");return new e};r.sha=n(4448),r.sha1=n(8336),r.sha224=n(8432),r.sha256=n(7499),r.sha384=n(1686),r.sha512=n(7816)},4448:(t,e,n)=>{var r=n(5717),i=n(4189),o=n(9509).Buffer,a=[1518500249,1859775393,-1894007588,-899497514],s=new Array(80);function u(){this.init(),this._w=s,i.call(this,64,56)}function l(t){return t<<30|t>>>2}function f(t,e,n,r){return 0===t?e&n|~e&r:2===t?e&n|e&r|n&r:e^n^r}r(u,i),u.prototype.init=function(){return this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878,this._e=3285377520,this},u.prototype._update=function(t){for(var e,n=this._w,r=0|this._a,i=0|this._b,o=0|this._c,s=0|this._d,u=0|this._e,h=0;h<16;++h)n[h]=t.readInt32BE(4*h);for(;h<80;++h)n[h]=n[h-3]^n[h-8]^n[h-14]^n[h-16];for(var c=0;c<80;++c){var d=~~(c/20),p=0|((e=r)<<5|e>>>27)+f(d,i,o,s)+u+n[c]+a[d];u=s,s=o,o=l(i),i=r,r=p}this._a=r+this._a|0,this._b=i+this._b|0,this._c=o+this._c|0,this._d=s+this._d|0,this._e=u+this._e|0},u.prototype._hash=function(){var t=o.allocUnsafe(20);return t.writeInt32BE(0|this._a,0),t.writeInt32BE(0|this._b,4),t.writeInt32BE(0|this._c,8),t.writeInt32BE(0|this._d,12),t.writeInt32BE(0|this._e,16),t},t.exports=u},8336:(t,e,n)=>{var r=n(5717),i=n(4189),o=n(9509).Buffer,a=[1518500249,1859775393,-1894007588,-899497514],s=new Array(80);function u(){this.init(),this._w=s,i.call(this,64,56)}function l(t){return t<<5|t>>>27}function f(t){return t<<30|t>>>2}function h(t,e,n,r){return 0===t?e&n|~e&r:2===t?e&n|e&r|n&r:e^n^r}r(u,i),u.prototype.init=function(){return this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878,this._e=3285377520,this},u.prototype._update=function(t){for(var e,n=this._w,r=0|this._a,i=0|this._b,o=0|this._c,s=0|this._d,u=0|this._e,c=0;c<16;++c)n[c]=t.readInt32BE(4*c);for(;c<80;++c)n[c]=(e=n[c-3]^n[c-8]^n[c-14]^n[c-16])<<1|e>>>31;for(var d=0;d<80;++d){var p=~~(d/20),b=l(r)+h(p,i,o,s)+u+n[d]+a[p]|0;u=s,s=o,o=f(i),i=r,r=b}this._a=r+this._a|0,this._b=i+this._b|0,this._c=o+this._c|0,this._d=s+this._d|0,this._e=u+this._e|0},u.prototype._hash=function(){var t=o.allocUnsafe(20);return t.writeInt32BE(0|this._a,0),t.writeInt32BE(0|this._b,4),t.writeInt32BE(0|this._c,8),t.writeInt32BE(0|this._d,12),t.writeInt32BE(0|this._e,16),t},t.exports=u},8432:(t,e,n)=>{var r=n(5717),i=n(7499),o=n(4189),a=n(9509).Buffer,s=new Array(64);function u(){this.init(),this._w=s,o.call(this,64,56)}r(u,i),u.prototype.init=function(){return this._a=3238371032,this._b=914150663,this._c=812702999,this._d=4144912697,this._e=4290775857,this._f=1750603025,this._g=1694076839,this._h=3204075428,this},u.prototype._hash=function(){var t=a.allocUnsafe(28);return t.writeInt32BE(this._a,0),t.writeInt32BE(this._b,4),t.writeInt32BE(this._c,8),t.writeInt32BE(this._d,12),t.writeInt32BE(this._e,16),t.writeInt32BE(this._f,20),t.writeInt32BE(this._g,24),t},t.exports=u},7499:(t,e,n)=>{var r=n(5717),i=n(4189),o=n(9509).Buffer,a=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],s=new Array(64);function u(){this.init(),this._w=s,i.call(this,64,56)}function l(t,e,n){return n^t&(e^n)}function f(t,e,n){return t&e|n&(t|e)}function h(t){return(t>>>2|t<<30)^(t>>>13|t<<19)^(t>>>22|t<<10)}function c(t){return(t>>>6|t<<26)^(t>>>11|t<<21)^(t>>>25|t<<7)}function d(t){return(t>>>7|t<<25)^(t>>>18|t<<14)^t>>>3}r(u,i),u.prototype.init=function(){return this._a=1779033703,this._b=3144134277,this._c=1013904242,this._d=2773480762,this._e=1359893119,this._f=2600822924,this._g=528734635,this._h=1541459225,this},u.prototype._update=function(t){for(var e,n=this._w,r=0|this._a,i=0|this._b,o=0|this._c,s=0|this._d,u=0|this._e,p=0|this._f,b=0|this._g,_=0|this._h,m=0;m<16;++m)n[m]=t.readInt32BE(4*m);for(;m<64;++m)n[m]=0|(((e=n[m-2])>>>17|e<<15)^(e>>>19|e<<13)^e>>>10)+n[m-7]+d(n[m-15])+n[m-16];for(var g=0;g<64;++g){var y=_+c(u)+l(u,p,b)+a[g]+n[g]|0,v=h(r)+f(r,i,o)|0;_=b,b=p,p=u,u=s+y|0,s=o,o=i,i=r,r=y+v|0}this._a=r+this._a|0,this._b=i+this._b|0,this._c=o+this._c|0,this._d=s+this._d|0,this._e=u+this._e|0,this._f=p+this._f|0,this._g=b+this._g|0,this._h=_+this._h|0},u.prototype._hash=function(){var t=o.allocUnsafe(32);return t.writeInt32BE(this._a,0),t.writeInt32BE(this._b,4),t.writeInt32BE(this._c,8),t.writeInt32BE(this._d,12),t.writeInt32BE(this._e,16),t.writeInt32BE(this._f,20),t.writeInt32BE(this._g,24),t.writeInt32BE(this._h,28),t},t.exports=u},1686:(t,e,n)=>{var r=n(5717),i=n(7816),o=n(4189),a=n(9509).Buffer,s=new Array(160);function u(){this.init(),this._w=s,o.call(this,128,112)}r(u,i),u.prototype.init=function(){return this._ah=3418070365,this._bh=1654270250,this._ch=2438529370,this._dh=355462360,this._eh=1731405415,this._fh=2394180231,this._gh=3675008525,this._hh=1203062813,this._al=3238371032,this._bl=914150663,this._cl=812702999,this._dl=4144912697,this._el=4290775857,this._fl=1750603025,this._gl=1694076839,this._hl=3204075428,this},u.prototype._hash=function(){var t=a.allocUnsafe(48);function e(e,n,r){t.writeInt32BE(e,r),t.writeInt32BE(n,r+4)}return e(this._ah,this._al,0),e(this._bh,this._bl,8),e(this._ch,this._cl,16),e(this._dh,this._dl,24),e(this._eh,this._el,32),e(this._fh,this._fl,40),t},t.exports=u},7816:(t,e,n)=>{var r=n(5717),i=n(4189),o=n(9509).Buffer,a=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591],s=new Array(160);function u(){this.init(),this._w=s,i.call(this,128,112)}function l(t,e,n){return n^t&(e^n)}function f(t,e,n){return t&e|n&(t|e)}function h(t,e){return(t>>>28|e<<4)^(e>>>2|t<<30)^(e>>>7|t<<25)}function c(t,e){return(t>>>14|e<<18)^(t>>>18|e<<14)^(e>>>9|t<<23)}function d(t,e){return(t>>>1|e<<31)^(t>>>8|e<<24)^t>>>7}function p(t,e){return(t>>>1|e<<31)^(t>>>8|e<<24)^(t>>>7|e<<25)}function b(t,e){return(t>>>19|e<<13)^(e>>>29|t<<3)^t>>>6}function _(t,e){return(t>>>19|e<<13)^(e>>>29|t<<3)^(t>>>6|e<<26)}function m(t,e){return t>>>0<e>>>0?1:0}r(u,i),u.prototype.init=function(){return this._ah=1779033703,this._bh=3144134277,this._ch=1013904242,this._dh=2773480762,this._eh=1359893119,this._fh=2600822924,this._gh=528734635,this._hh=1541459225,this._al=4089235720,this._bl=2227873595,this._cl=4271175723,this._dl=1595750129,this._el=2917565137,this._fl=725511199,this._gl=4215389547,this._hl=327033209,this},u.prototype._update=function(t){for(var e=this._w,n=0|this._ah,r=0|this._bh,i=0|this._ch,o=0|this._dh,s=0|this._eh,u=0|this._fh,g=0|this._gh,y=0|this._hh,v=0|this._al,w=0|this._bl,E=0|this._cl,S=0|this._dl,k=0|this._el,R=0|this._fl,M=0|this._gl,T=0|this._hl,x=0;x<32;x+=2)e[x]=t.readInt32BE(4*x),e[x+1]=t.readInt32BE(4*x+4);for(;x<160;x+=2){var L=e[x-30],O=e[x-30+1],A=d(L,O),q=p(O,L),D=b(L=e[x-4],O=e[x-4+1]),P=_(O,L),N=e[x-14],I=e[x-14+1],j=e[x-32],C=e[x-32+1],B=q+I|0,U=A+N+m(B,q)|0;U=(U=U+D+m(B=B+P|0,P)|0)+j+m(B=B+C|0,C)|0,e[x]=U,e[x+1]=B}for(var F=0;F<160;F+=2){U=e[F],B=e[F+1];var W=f(n,r,i),z=f(v,w,E),H=h(n,v),V=h(v,n),Q=c(s,k),$=c(k,s),G=a[F],Y=a[F+1],X=l(s,u,g),K=l(k,R,M),J=T+$|0,Z=y+Q+m(J,T)|0;Z=(Z=(Z=Z+X+m(J=J+K|0,K)|0)+G+m(J=J+Y|0,Y)|0)+U+m(J=J+B|0,B)|0;var tt=V+z|0,et=H+W+m(tt,V)|0;y=g,T=M,g=u,M=R,u=s,R=k,s=o+Z+m(k=S+J|0,S)|0,o=i,S=E,i=r,E=w,r=n,w=v,n=Z+et+m(v=J+tt|0,J)|0}this._al=this._al+v|0,this._bl=this._bl+w|0,this._cl=this._cl+E|0,this._dl=this._dl+S|0,this._el=this._el+k|0,this._fl=this._fl+R|0,this._gl=this._gl+M|0,this._hl=this._hl+T|0,this._ah=this._ah+n+m(this._al,v)|0,this._bh=this._bh+r+m(this._bl,w)|0,this._ch=this._ch+i+m(this._cl,E)|0,this._dh=this._dh+o+m(this._dl,S)|0,this._eh=this._eh+s+m(this._el,k)|0,this._fh=this._fh+u+m(this._fl,R)|0,this._gh=this._gh+g+m(this._gl,M)|0,this._hh=this._hh+y+m(this._hl,T)|0},u.prototype._hash=function(){var t=o.allocUnsafe(64);function e(e,n,r){t.writeInt32BE(e,r),t.writeInt32BE(n,r+4)}return e(this._ah,this._al,0),e(this._bh,this._bl,8),e(this._ch,this._cl,16),e(this._dh,this._dl,24),e(this._eh,this._el,32),e(this._fh,this._fl,40),e(this._gh,this._gl,48),e(this._hh,this._hl,56),t},t.exports=u},6657:(t,e,n)=>{t=n.nmd(t);var r=void 0,i=function(e){return r||(r=new Promise((function(r,i){var o,a=void 0!==e?e:{},s=a.onAbort;a.onAbort=function(t){i(new Error(t)),s&&s(t)},a.postRun=a.postRun||[],a.postRun.push((function(){r(a)})),t=void 0,o||(o=void 0!==a?a:{}),o.onRuntimeInitialized=function(){function t(t,e){this.Qa=t,this.db=e,this.Oa=1,this.kb=[]}function e(t,e){if(this.db=e,e=H(t)+1,this.cb=Le(e),null===this.cb)throw Error("Unable to allocate memory for the SQL string");z(t,N,this.cb,e),this.ib=this.cb,this.Za=this.ob=null}function n(t){if(this.filename="dbfile_"+(4294967295*Math.random()>>>0),null!=t){var e=this.filename,n=e?ht("//"+e):"/";if(n=$t(n,4095&(void 0!==(e=fe(!0,!0))?e:438)|32768,0),t){if("string"==typeof t){for(var i=Array(t.length),o=0,s=t.length;o<s;++o)i[o]=t.charCodeAt(o);t=i}ee(n,146|e),ue(i=ie(n,577),t,0,t.length,0,void 0),oe(i),ee(n,e)}}this.handleError(a(this.filename,r)),this.db=T(r,"i32"),rt(this.db),this.eb={},this.Wa={}}var r=je(4),i=o.cwrap,a=i("sqlite3_open","number",["string","number"]),s=i("sqlite3_close_v2","number",["number"]),u=i("sqlite3_exec","number",["number","string","number","number","number"]),l=i("sqlite3_changes","number",["number"]),f=i("sqlite3_prepare_v2","number",["number","string","number","number","number"]),h=i("sqlite3_sql","string",["number"]),c=i("sqlite3_normalized_sql","string",["number"]),d=i("sqlite3_prepare_v2","number",["number","number","number","number","number"]),p=i("sqlite3_bind_text","number",["number","number","number","number","number"]),b=i("sqlite3_bind_blob","number",["number","number","number","number","number"]),_=i("sqlite3_bind_double","number",["number","number","number"]),m=i("sqlite3_bind_int","number",["number","number","number"]),g=i("sqlite3_bind_parameter_index","number",["number","string"]),y=i("sqlite3_step","number",["number"]),v=i("sqlite3_errmsg","string",["number"]),w=i("sqlite3_column_count","number",["number"]),S=i("sqlite3_data_count","number",["number"]),x=i("sqlite3_column_double","number",["number","number"]),L=i("sqlite3_column_text","string",["number","number"]),O=i("sqlite3_column_blob","number",["number","number"]),A=i("sqlite3_column_bytes","number",["number","number"]),D=i("sqlite3_column_type","number",["number","number"]),I=i("sqlite3_column_name","string",["number","number"]),j=i("sqlite3_reset","number",["number"]),C=i("sqlite3_clear_bindings","number",["number"]),B=i("sqlite3_finalize","number",["number"]),U=i("sqlite3_create_function_v2","number","number string number number number number number number number".split(" ")),V=i("sqlite3_value_type","number",["number"]),Q=i("sqlite3_value_bytes","number",["number"]),G=i("sqlite3_value_text","string",["number"]),Y=i("sqlite3_value_blob","number",["number"]),X=i("sqlite3_value_double","number",["number"]),K=i("sqlite3_result_double","",["number","number"]),J=i("sqlite3_result_null","",["number"]),Z=i("sqlite3_result_text","",["number","string","number","number"]),tt=i("sqlite3_result_blob","",["number","number","number","number"]),et=i("sqlite3_result_int","",["number","number"]),nt=i("sqlite3_result_error","",["number","string","number"]),rt=i("RegisterExtensionFunctions","number",["number"]);t.prototype.bind=function(t){if(!this.Qa)throw"Statement closed";return this.reset(),Array.isArray(t)?this.Cb(t):null==t||"object"!=typeof t||this.Db(t)},t.prototype.step=function(){if(!this.Qa)throw"Statement closed";this.Oa=1;var t=y(this.Qa);switch(t){case 100:return!0;case 101:return!1;default:throw this.db.handleError(t)}},t.prototype.yb=function(t){return null==t&&(t=this.Oa,this.Oa+=1),x(this.Qa,t)},t.prototype.Gb=function(t){if(null==t&&(t=this.Oa,this.Oa+=1),t=L(this.Qa,t),"function"!=typeof BigInt)throw Error("BigInt is not supported");return BigInt(t)},t.prototype.Hb=function(t){return null==t&&(t=this.Oa,this.Oa+=1),L(this.Qa,t)},t.prototype.getBlob=function(t){null==t&&(t=this.Oa,this.Oa+=1);var e=A(this.Qa,t);t=O(this.Qa,t);for(var n=new Uint8Array(e),r=0;r<e;r+=1)n[r]=P[t+r];return n},t.prototype.get=function(t,e){e=e||{},null!=t&&this.bind(t)&&this.step(),t=[];for(var n=S(this.Qa),r=0;r<n;r+=1)switch(D(this.Qa,r)){case 1:var i=e.useBigInt?this.Gb(r):this.yb(r);t.push(i);break;case 2:t.push(this.yb(r));break;case 3:t.push(this.Hb(r));break;case 4:t.push(this.getBlob(r));break;default:t.push(null)}return t},t.prototype.getColumnNames=function(){for(var t=[],e=w(this.Qa),n=0;n<e;n+=1)t.push(I(this.Qa,n));return t},t.prototype.getAsObject=function(t,e){t=this.get(t,e),e=this.getColumnNames();for(var n={},r=0;r<e.length;r+=1)n[e[r]]=t[r];return n},t.prototype.getSQL=function(){return h(this.Qa)},t.prototype.getNormalizedSQL=function(){return c(this.Qa)},t.prototype.run=function(t){return null!=t&&this.bind(t),this.step(),this.reset()},t.prototype.tb=function(t,e){null==e&&(e=this.Oa,this.Oa+=1);var n=q(t=Me(t));this.kb.push(n),this.db.handleError(p(this.Qa,e,n,t.length-1,0))},t.prototype.Bb=function(t,e){null==e&&(e=this.Oa,this.Oa+=1);var n=q(t);this.kb.push(n),this.db.handleError(b(this.Qa,e,n,t.length,0))},t.prototype.sb=function(t,e){null==e&&(e=this.Oa,this.Oa+=1),this.db.handleError((t===(0|t)?m:_)(this.Qa,e,t))},t.prototype.Eb=function(t){null==t&&(t=this.Oa,this.Oa+=1),b(this.Qa,t,0,0,0)},t.prototype.ub=function(t,e){switch(null==e&&(e=this.Oa,this.Oa+=1),typeof t){case"string":return void this.tb(t,e);case"number":return void this.sb(t,e);case"bigint":return void this.tb(t.toString(),e);case"boolean":return void this.sb(t+0,e);case"object":if(null===t)return void this.Eb(e);if(null!=t.length)return void this.Bb(t,e)}throw"Wrong API use : tried to bind a value of an unknown type ("+t+")."},t.prototype.Db=function(t){var e=this;return Object.keys(t).forEach((function(n){var r=g(e.Qa,n);0!==r&&e.ub(t[n],r)})),!0},t.prototype.Cb=function(t){for(var e=0;e<t.length;e+=1)this.ub(t[e],e+1);return!0},t.prototype.reset=function(){return this.freemem(),0===C(this.Qa)&&0===j(this.Qa)},t.prototype.freemem=function(){for(var t;void 0!==(t=this.kb.pop());)Oe(t)},t.prototype.free=function(){this.freemem();var t=0===B(this.Qa);return delete this.db.eb[this.Qa],this.Qa=0,t},e.prototype.next=function(){if(null===this.cb)return{done:!0};if(null!==this.Za&&(this.Za.free(),this.Za=null),!this.db.db)throw this.mb(),Error("Database closed");var e=Ne(),n=je(4);M(r),M(n);try{this.db.handleError(d(this.db.db,this.ib,-1,r,n)),this.ib=T(n,"i32");var i=T(r,"i32");return 0===i?(this.mb(),{done:!0}):(this.Za=new t(i,this.db),this.db.eb[i]=this.Za,{value:this.Za,done:!1})}catch(t){throw this.ob=W(this.ib),this.mb(),t}finally{Ie(e)}},e.prototype.mb=function(){Oe(this.cb),this.cb=null},e.prototype.getRemainingSQL=function(){return null!==this.ob?this.ob:W(this.ib)},"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator&&(e.prototype[Symbol.iterator]=function(){return this}),n.prototype.run=function(t,e){if(!this.db)throw"Database closed";if(e){t=this.prepare(t,e);try{t.step()}finally{t.free()}}else this.handleError(u(this.db,t,0,0,r));return this},n.prototype.exec=function(e,n,i){if(!this.db)throw"Database closed";var o=Ne(),a=null;try{var s=H(e)+1,u=je(s);z(e,P,u,s);var l=u,f=je(4);for(e=[];0!==T(l,"i8");){M(r),M(f),this.handleError(d(this.db,l,-1,r,f));var h=T(r,"i32");if(l=T(f,"i32"),0!==h){for(s=null,a=new t(h,this),null!=n&&a.bind(n);a.step();)null===s&&(s={columns:a.getColumnNames(),values:[]},e.push(s)),s.values.push(a.get(null,i));a.free()}}return e}catch(t){throw a&&a.free(),t}finally{Ie(o)}},n.prototype.each=function(t,e,n,r,i){"function"==typeof e&&(r=n,n=e,e=void 0),t=this.prepare(t,e);try{for(;t.step();)n(t.getAsObject(null,i))}finally{t.free()}if("function"==typeof r)return r()},n.prototype.prepare=function(e,n){if(M(r),this.handleError(f(this.db,e,-1,r,0)),0===(e=T(r,"i32")))throw"Nothing to prepare";var i=new t(e,this);return null!=n&&i.bind(n),this.eb[e]=i},n.prototype.iterateStatements=function(t){return new e(t,this)},n.prototype.export=function(){Object.values(this.eb).forEach((function(t){t.free()})),Object.values(this.Wa).forEach(R),this.Wa={},this.handleError(s(this.db));var t=function(t){var e={encoding:"binary"};if((e=e||{}).flags=e.flags||0,e.encoding=e.encoding||"binary","utf8"!==e.encoding&&"binary"!==e.encoding)throw Error('Invalid encoding type "'+e.encoding+'"');var n,r=ie(t,e.flags);t=Zt(t).size;var i=new Uint8Array(t);return se(r,i,0,t,0),"utf8"===e.encoding?n=F(i,0):"binary"===e.encoding&&(n=i),oe(r),n}(this.filename);return this.handleError(a(this.filename,r)),this.db=T(r,"i32"),t},n.prototype.close=function(){null!==this.db&&(Object.values(this.eb).forEach((function(t){t.free()})),Object.values(this.Wa).forEach(R),this.Wa={},this.handleError(s(this.db)),Kt("/"+this.filename),this.db=null)},n.prototype.handleError=function(t){if(0===t)return null;throw t=v(this.db),Error(t)},n.prototype.getRowsModified=function(){return l(this.db)},n.prototype.create_function=function(t,e){Object.prototype.hasOwnProperty.call(this.Wa,t)&&(R(this.Wa[t]),delete this.Wa[t]);var n=function(t){if(!E){E=new WeakMap;for(var e=0;e<$.length;e++){var n=$.get(e);n&&E.set(n,e)}}if(E.has(t))t=E.get(t);else{if(k.length)e=k.pop();else{try{$.grow(1)}catch(t){if(!(t instanceof RangeError))throw t;throw"Unable to grow wasm table. Set ALLOW_TABLE_GROWTH."}e=$.length-1}try{$.set(e,t)}catch(o){if(!(o instanceof TypeError))throw o;if("function"==typeof WebAssembly.Function){var r={i:"i32",j:"i64",f:"f32",d:"f64"},i={parameters:[],results:[]};for(n=1;4>n;++n)i.parameters.push(r["viii"[n]]);n=new WebAssembly.Function(i,t)}else{for(i={i:127,j:126,f:125,d:124},(r=[1,0,1,96]).push(3),n=0;3>n;++n)r.push(i["iii"[n]]);r.push(0),r[1]=r.length-2,n=new Uint8Array([0,97,115,109,1,0,0,0].concat(r,[2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0])),n=new WebAssembly.Module(n),n=new WebAssembly.Instance(n,{e:{f:t}}).exports.f}$.set(e,n)}E.set(t,e),t=e}return t}((function(t,n,r){for(var i,o=[],a=0;a<n;a+=1){var s=T(r+4*a,"i32"),u=V(s);if(1===u||2===u)s=X(s);else if(3===u)s=G(s);else if(4===u){s=Q(u=s),u=Y(u);for(var l=new Uint8Array(s),f=0;f<s;f+=1)l[f]=P[u+f];s=l}else s=null;o.push(s)}try{i=e.apply(null,o)}catch(e){return void nt(t,e,-1)}switch(typeof i){case"boolean":et(t,i?1:0);break;case"number":K(t,i);break;case"string":Z(t,i,-1,-1);break;case"object":null===i?J(t):null!=i.length?(n=q(i),tt(t,n,i.length,-1),Oe(n)):nt(t,"Wrong API use : tried to return a value of an unknown type ("+i+").",-1);break;default:J(t)}}));return this.Wa[t]=n,this.handleError(U(this.db,t,e.length,1,0,n,0,0,0)),this},o.Database=n};var u,l={};for(u in o)o.hasOwnProperty(u)&&(l[u]=o[u]);var f,h,c,d,p,b="./this.program",_="object"==typeof window,m="function"==typeof importScripts,g="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,y="";g?(y=m?n(9547).dirname(y)+"/":"//",f=function(t,e){return d||(d=n(803)),p||(p=n(9547)),t=p.normalize(t),d.readFileSync(t,e?null:"utf8")},c=function(t){return(t=f(t,!0)).buffer||(t=new Uint8Array(t)),t.buffer||ot("Assertion failed: undefined"),t},h=function(t,e,r){d||(d=n(803)),p||(p=n(9547)),t=p.normalize(t),d.readFile(t,(function(t,n){t?r(t):e(n.buffer)}))},1<process.argv.length&&(b=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),t.exports=o,o.inspect=function(){return"[Emscripten Module object]"}):(_||m)&&(m?y=self.location.href:"undefined"!=typeof document&&document.currentScript&&(y=document.currentScript.src),y=0!==y.indexOf("blob:")?y.substr(0,y.lastIndexOf("/")+1):"",f=function(t){var e=new XMLHttpRequest;return e.open("GET",t,!1),e.send(null),e.responseText},m&&(c=function(t){var e=new XMLHttpRequest;return e.open("GET",t,!1),e.responseType="arraybuffer",e.send(null),new Uint8Array(e.response)}),h=function(t,e,n){var r=new XMLHttpRequest;r.open("GET",t,!0),r.responseType="arraybuffer",r.onload=function(){200==r.status||0==r.status&&r.response?e(r.response):n()},r.onerror=n,r.send(null)});var v=o.print||console.log.bind(console),w=o.printErr||console.warn.bind(console);for(u in l)l.hasOwnProperty(u)&&(o[u]=l[u]);l=null,o.thisProgram&&(b=o.thisProgram);var E,S,k=[];function R(t){E.delete($.get(t)),k.push(t)}function M(t){var e="i32";switch("*"===e.charAt(e.length-1)&&(e="i32"),e){case"i1":case"i8":P[t>>0]=0;break;case"i16":I[t>>1]=0;break;case"i32":j[t>>2]=0;break;case"i64":tt=[0,(Z=0,1<=+Math.abs(Z)?0<Z?(0|Math.min(+Math.floor(Z/4294967296),4294967295))>>>0:~~+Math.ceil((Z-+(~~Z>>>0))/4294967296)>>>0:0)],j[t>>2]=tt[0],j[t+4>>2]=tt[1];break;case"float":C[t>>2]=0;break;case"double":B[t>>3]=0;break;default:ot("invalid type for setValue: "+e)}}function T(t,e){switch("*"===(e=e||"i8").charAt(e.length-1)&&(e="i32"),e){case"i1":case"i8":return P[t>>0];case"i16":return I[t>>1];case"i32":case"i64":return j[t>>2];case"float":return C[t>>2];case"double":return B[t>>3];default:ot("invalid type for getValue: "+e)}return null}o.wasmBinary&&(S=o.wasmBinary),o.noExitRuntime,"object"!=typeof WebAssembly&&ot("no native wasm support detected");var x,L=!1;function O(t){var e=o["_"+t];return e||ot("Assertion failed: Cannot call unknown function "+t+", make sure it is exported"),e}function A(t,e,n,r){var i={string:function(t){var e=0;if(null!=t&&0!==t){var n=1+(t.length<<2);e=je(n),z(t,N,e,n)}return e},array:function(t){var e=je(t.length);return P.set(t,e),e}};t=O(t);var o,a=[],s=0;if(r)for(var u=0;u<r.length;u++){var l=i[n[u]];l?(0===s&&(s=Ne()),a[u]=l(r[u])):a[u]=r[u]}return o=n=t.apply(null,a),0!==s&&Ie(s),"string"===e?W(o):"boolean"===e?!!o:o}function q(t){var e=Le(t.length);return t.subarray||t.slice?N.set(t,e):N.set(new Uint8Array(t),e),e}var D,P,N,I,j,C,B,U="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function F(t,e,n){var r=e+n;for(n=e;t[n]&&!(n>=r);)++n;if(16<n-e&&t.subarray&&U)return U.decode(t.subarray(e,n));for(r="";e<n;){var i=t[e++];if(128&i){var o=63&t[e++];if(192==(224&i))r+=String.fromCharCode((31&i)<<6|o);else{var a=63&t[e++];65536>(i=224==(240&i)?(15&i)<<12|o<<6|a:(7&i)<<18|o<<12|a<<6|63&t[e++])?r+=String.fromCharCode(i):(i-=65536,r+=String.fromCharCode(55296|i>>10,56320|1023&i))}}else r+=String.fromCharCode(i)}return r}function W(t,e){return t?F(N,t,e):""}function z(t,e,n,r){if(!(0<r))return 0;var i=n;r=n+r-1;for(var o=0;o<t.length;++o){var a=t.charCodeAt(o);if(55296<=a&&57343>=a&&(a=65536+((1023&a)<<10)|1023&t.charCodeAt(++o)),127>=a){if(n>=r)break;e[n++]=a}else{if(2047>=a){if(n+1>=r)break;e[n++]=192|a>>6}else{if(65535>=a){if(n+2>=r)break;e[n++]=224|a>>12}else{if(n+3>=r)break;e[n++]=240|a>>18,e[n++]=128|a>>12&63}e[n++]=128|a>>6&63}e[n++]=128|63&a}}return e[n]=0,n-i}function H(t){for(var e=0,n=0;n<t.length;++n){var r=t.charCodeAt(n);55296<=r&&57343>=r&&(r=65536+((1023&r)<<10)|1023&t.charCodeAt(++n)),127>=r?++e:e=2047>=r?e+2:65535>=r?e+3:e+4}return e}function V(t){var e=H(t)+1,n=Le(e);return n&&z(t,P,n,e),n}function Q(){var t=x.buffer;D=t,o.HEAP8=P=new Int8Array(t),o.HEAP16=I=new Int16Array(t),o.HEAP32=j=new Int32Array(t),o.HEAPU8=N=new Uint8Array(t),o.HEAPU16=new Uint16Array(t),o.HEAPU32=new Uint32Array(t),o.HEAPF32=C=new Float32Array(t),o.HEAPF64=B=new Float64Array(t)}var $,G=[],Y=[],X=[];function K(){var t=o.preRun.shift();G.unshift(t)}var J,Z,tt,et,nt=0,rt=null,it=null;function ot(t){throw o.onAbort&&o.onAbort(t),w(t),L=!0,new WebAssembly.RuntimeError("abort("+t+"). Build with -s ASSERTIONS=1 for more info.")}function at(){return J.startsWith("data:application/octet-stream;base64,")}if(o.preloadedImages={},o.preloadedAudios={},J="sql-wasm.wasm",!at()){var st=J;J=o.locateFile?o.locateFile(st,y):y+st}function ut(){var t=J;try{if(t==J&&S)return new Uint8Array(S);if(c)return c(t);throw"both async and sync fetching of the wasm failed"}catch(t){ot(t)}}function lt(t){for(;0<t.length;){var e=t.shift();if("function"==typeof e)e(o);else{var n=e.Qb;"number"==typeof n?void 0===e.lb?$.get(n)():$.get(n)(e.lb):n(void 0===e.lb?null:e.lb)}}}function ft(t,e){for(var n=0,r=t.length-1;0<=r;r--){var i=t[r];"."===i?t.splice(r,1):".."===i?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n;n--)t.unshift("..");return t}function ht(t){var e="/"===t.charAt(0),n="/"===t.substr(-1);return(t=ft(t.split("/").filter((function(t){return!!t})),!e).join("/"))||e||(t="."),t&&n&&(t+="/"),(e?"/":"")+t}function ct(t){var e=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(t).slice(1);return t=e[0],e=e[1],t||e?(e&&(e=e.substr(0,e.length-1)),t+e):"."}function dt(t){if("/"===t)return"/";var e=(t=(t=ht(t)).replace(/\/$/,"")).lastIndexOf("/");return-1===e?t:t.substr(e+1)}function pt(){for(var t="",e=!1,n=arguments.length-1;-1<=n&&!e;n--){if("string"!=typeof(e=0<=n?arguments[n]:"/"))throw new TypeError("Arguments to path.resolve must be strings");if(!e)return"";t=e+"/"+t,e="/"===e.charAt(0)}return(e?"/":"")+(t=ft(t.split("/").filter((function(t){return!!t})),!e).join("/"))||"."}var bt=[];function _t(t,e){bt[t]={input:[],output:[],bb:e},Vt(t,mt)}var mt={open:function(t){var e=bt[t.node.rdev];if(!e)throw new Lt(43);t.tty=e,t.seekable=!1},close:function(t){t.tty.bb.flush(t.tty)},flush:function(t){t.tty.bb.flush(t.tty)},read:function(t,e,n,r){if(!t.tty||!t.tty.bb.zb)throw new Lt(60);for(var i=0,o=0;o<r;o++){try{var a=t.tty.bb.zb(t.tty)}catch(t){throw new Lt(29)}if(void 0===a&&0===i)throw new Lt(6);if(null==a)break;i++,e[n+o]=a}return i&&(t.node.timestamp=Date.now()),i},write:function(t,e,n,r){if(!t.tty||!t.tty.bb.pb)throw new Lt(60);try{for(var i=0;i<r;i++)t.tty.bb.pb(t.tty,e[n+i])}catch(t){throw new Lt(29)}return r&&(t.node.timestamp=Date.now()),i}},gt={zb:function(t){if(!t.input.length){var e=null;if(g){var n=Buffer.alloc(256),r=0;try{r=d.readSync(process.stdin.fd,n,0,256,null)}catch(t){if(!t.toString().includes("EOF"))throw t;r=0}e=0<r?n.slice(0,r).toString("utf-8"):null}else"undefined"!=typeof window&&"function"==typeof window.prompt?null!==(e=window.prompt("Input: "))&&(e+="\n"):"function"==typeof readline&&null!==(e=readline())&&(e+="\n");if(!e)return null;t.input=Me(e,!0)}return t.input.shift()},pb:function(t,e){null===e||10===e?(v(F(t.output,0)),t.output=[]):0!=e&&t.output.push(e)},flush:function(t){t.output&&0<t.output.length&&(v(F(t.output,0)),t.output=[])}},yt={pb:function(t,e){null===e||10===e?(w(F(t.output,0)),t.output=[]):0!=e&&t.output.push(e)},flush:function(t){t.output&&0<t.output.length&&(w(F(t.output,0)),t.output=[])}};function vt(t){t=65536*Math.ceil(t/65536);var e=Ce(65536,t);return e?(N.fill(0,e,e+t),e):0}var wt={Ua:null,Va:function(){return wt.createNode(null,"/",16895,0)},createNode:function(t,e,n,r){if(24576==(61440&n)||4096==(61440&n))throw new Lt(63);return wt.Ua||(wt.Ua={dir:{node:{Ta:wt.La.Ta,Sa:wt.La.Sa,lookup:wt.La.lookup,fb:wt.La.fb,rename:wt.La.rename,unlink:wt.La.unlink,rmdir:wt.La.rmdir,readdir:wt.La.readdir,symlink:wt.La.symlink},stream:{Ya:wt.Ma.Ya}},file:{node:{Ta:wt.La.Ta,Sa:wt.La.Sa},stream:{Ya:wt.Ma.Ya,read:wt.Ma.read,write:wt.Ma.write,rb:wt.Ma.rb,gb:wt.Ma.gb,hb:wt.Ma.hb}},link:{node:{Ta:wt.La.Ta,Sa:wt.La.Sa,readlink:wt.La.readlink},stream:{}},vb:{node:{Ta:wt.La.Ta,Sa:wt.La.Sa},stream:Ht}}),jt((n=It(t,e,n,r)).mode)?(n.La=wt.Ua.dir.node,n.Ma=wt.Ua.dir.stream,n.Na={}):32768==(61440&n.mode)?(n.La=wt.Ua.file.node,n.Ma=wt.Ua.file.stream,n.Ra=0,n.Na=null):40960==(61440&n.mode)?(n.La=wt.Ua.link.node,n.Ma=wt.Ua.link.stream):8192==(61440&n.mode)&&(n.La=wt.Ua.vb.node,n.Ma=wt.Ua.vb.stream),n.timestamp=Date.now(),t&&(t.Na[e]=n,t.timestamp=n.timestamp),n},Rb:function(t){return t.Na?t.Na.subarray?t.Na.subarray(0,t.Ra):new Uint8Array(t.Na):new Uint8Array(0)},wb:function(t,e){var n=t.Na?t.Na.length:0;n>=e||(e=Math.max(e,n*(1048576>n?2:1.125)>>>0),0!=n&&(e=Math.max(e,256)),n=t.Na,t.Na=new Uint8Array(e),0<t.Ra&&t.Na.set(n.subarray(0,t.Ra),0))},Nb:function(t,e){if(t.Ra!=e)if(0==e)t.Na=null,t.Ra=0;else{var n=t.Na;t.Na=new Uint8Array(e),n&&t.Na.set(n.subarray(0,Math.min(e,t.Ra))),t.Ra=e}},La:{Ta:function(t){var e={};return e.dev=8192==(61440&t.mode)?t.id:1,e.ino=t.id,e.mode=t.mode,e.nlink=1,e.uid=0,e.gid=0,e.rdev=t.rdev,jt(t.mode)?e.size=4096:32768==(61440&t.mode)?e.size=t.Ra:40960==(61440&t.mode)?e.size=t.link.length:e.size=0,e.atime=new Date(t.timestamp),e.mtime=new Date(t.timestamp),e.ctime=new Date(t.timestamp),e.Fb=4096,e.blocks=Math.ceil(e.size/e.Fb),e},Sa:function(t,e){void 0!==e.mode&&(t.mode=e.mode),void 0!==e.timestamp&&(t.timestamp=e.timestamp),void 0!==e.size&&wt.Nb(t,e.size)},lookup:function(){throw Ot[44]},fb:function(t,e,n,r){return wt.createNode(t,e,n,r)},rename:function(t,e,n){if(jt(t.mode)){try{var r=Nt(e,n)}catch(t){}if(r)for(var i in r.Na)throw new Lt(55)}delete t.parent.Na[t.name],t.parent.timestamp=Date.now(),t.name=n,e.Na[n]=t,e.timestamp=t.parent.timestamp,t.parent=e},unlink:function(t,e){delete t.Na[e],t.timestamp=Date.now()},rmdir:function(t,e){var n,r=Nt(t,e);for(n in r.Na)throw new Lt(55);delete t.Na[e],t.timestamp=Date.now()},readdir:function(t){var e,n=[".",".."];for(e in t.Na)t.Na.hasOwnProperty(e)&&n.push(e);return n},symlink:function(t,e,n){return(t=wt.createNode(t,e,41471,0)).link=n,t},readlink:function(t){if(40960!=(61440&t.mode))throw new Lt(28);return t.link}},Ma:{read:function(t,e,n,r,i){var o=t.node.Na;if(i>=t.node.Ra)return 0;if(8<(t=Math.min(t.node.Ra-i,r))&&o.subarray)e.set(o.subarray(i,i+t),n);else for(r=0;r<t;r++)e[n+r]=o[i+r];return t},write:function(t,e,n,r,i,o){if(e.buffer===P.buffer&&(o=!1),!r)return 0;if((t=t.node).timestamp=Date.now(),e.subarray&&(!t.Na||t.Na.subarray)){if(o)return t.Na=e.subarray(n,n+r),t.Ra=r;if(0===t.Ra&&0===i)return t.Na=e.slice(n,n+r),t.Ra=r;if(i+r<=t.Ra)return t.Na.set(e.subarray(n,n+r),i),r}if(wt.wb(t,i+r),t.Na.subarray&&e.subarray)t.Na.set(e.subarray(n,n+r),i);else for(o=0;o<r;o++)t.Na[i+o]=e[n+o];return t.Ra=Math.max(t.Ra,i+r),r},Ya:function(t,e,n){if(1===n?e+=t.position:2===n&&32768==(61440&t.node.mode)&&(e+=t.node.Ra),0>e)throw new Lt(28);return e},rb:function(t,e,n){wt.wb(t.node,e+n),t.node.Ra=Math.max(t.node.Ra,e+n)},gb:function(t,e,n,r,i,o){if(0!==e)throw new Lt(28);if(32768!=(61440&t.node.mode))throw new Lt(43);if(t=t.node.Na,2&o||t.buffer!==D){if((0<r||r+n<t.length)&&(t=t.subarray?t.subarray(r,r+n):Array.prototype.slice.call(t,r,r+n)),r=!0,!(n=vt(n)))throw new Lt(48);P.set(t,n)}else r=!1,n=t.byteOffset;return{Mb:n,jb:r}},hb:function(t,e,n,r,i){if(32768!=(61440&t.node.mode))throw new Lt(43);return 2&i||wt.Ma.write(t,e,0,r,n,!1),0}}},Et=null,St={},kt=[],Rt=1,Mt=null,Tt=!0,xt={},Lt=null,Ot={};function At(t,e){if(e=e||{},!(t=pt("/",t)))return{path:"",node:null};var n,r={xb:!0,qb:0};for(n in r)void 0===e[n]&&(e[n]=r[n]);if(8<e.qb)throw new Lt(32);t=ft(t.split("/").filter((function(t){return!!t})),!1);var i=Et;for(r="/",n=0;n<t.length;n++){var o=n===t.length-1;if(o&&e.parent)break;if(i=Nt(i,t[n]),r=ht(r+"/"+t[n]),i.$a&&(!o||o&&e.xb)&&(i=i.$a.root),!o||e.Xa)for(o=0;40960==(61440&i.mode);)if(i=Jt(r),i=At(r=pt(ct(r),i),{qb:e.qb}).node,40<o++)throw new Lt(32)}return{path:r,node:i}}function qt(t){for(var e;;){if(t===t.parent)return t=t.Va.Ab,e?"/"!==t[t.length-1]?t+"/"+e:t+e:t;e=e?t.name+"/"+e:t.name,t=t.parent}}function Dt(t,e){for(var n=0,r=0;r<e.length;r++)n=(n<<5)-n+e.charCodeAt(r)|0;return(t+n>>>0)%Mt.length}function Pt(t){var e=Dt(t.parent.id,t.name);if(Mt[e]===t)Mt[e]=t.ab;else for(e=Mt[e];e;){if(e.ab===t){e.ab=t.ab;break}e=e.ab}}function Nt(t,e){var n;if(n=(n=Ut(t,"x"))?n:t.La.lookup?0:2)throw new Lt(n,t);for(n=Mt[Dt(t.id,e)];n;n=n.ab){var r=n.name;if(n.parent.id===t.id&&r===e)return n}return t.La.lookup(t,e)}function It(t,e,n,r){return e=Dt((t=new Re(t,e,n,r)).parent.id,t.name),t.ab=Mt[e],Mt[e]=t}function jt(t){return 16384==(61440&t)}var Ct={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090};function Bt(t){var e=["r","w","rw"][3&t];return 512&t&&(e+="w"),e}function Ut(t,e){return Tt?0:!e.includes("r")||292&t.mode?e.includes("w")&&!(146&t.mode)||e.includes("x")&&!(73&t.mode)?2:0:2}function Ft(t,e){try{return Nt(t,e),20}catch(t){}return Ut(t,"wx")}function Wt(t,e,n){try{var r=Nt(t,e)}catch(t){return t.Pa}if(t=Ut(t,"wx"))return t;if(n){if(!jt(r.mode))return 54;if(r===r.parent||"/"===qt(r))return 10}else if(jt(r.mode))return 31;return 0}var zt,Ht={open:function(t){t.Ma=St[t.node.rdev].Ma,t.Ma.open&&t.Ma.open(t)},Ya:function(){throw new Lt(70)}};function Vt(t,e){St[t]={Ma:e}}function Qt(t,e){var n="/"===e,r=!e;if(n&&Et)throw new Lt(10);if(!n&&!r){var i=At(e,{xb:!1});if(e=i.path,(i=i.node).$a)throw new Lt(10);if(!jt(i.mode))throw new Lt(54)}e={type:t,Sb:{},Ab:e,Kb:[]},(t=t.Va(e)).Va=e,e.root=t,n?Et=t:i&&(i.$a=e,i.Va&&i.Va.Kb.push(e))}function $t(t,e,n){var r=At(t,{parent:!0}).node;if(!(t=dt(t))||"."===t||".."===t)throw new Lt(28);var i=Ft(r,t);if(i)throw new Lt(i);if(!r.La.fb)throw new Lt(63);return r.La.fb(r,t,e,n)}function Gt(t,e){return $t(t,1023&(void 0!==e?e:511)|16384,0)}function Yt(t,e,n){void 0===n&&(n=e,e=438),$t(t,8192|e,n)}function Xt(t,e){if(!pt(t))throw new Lt(44);var n=At(e,{parent:!0}).node;if(!n)throw new Lt(44);var r=Ft(n,e=dt(e));if(r)throw new Lt(r);if(!n.La.symlink)throw new Lt(63);n.La.symlink(n,e,t)}function Kt(t){var e=At(t,{parent:!0}).node,n=dt(t),r=Nt(e,n),i=Wt(e,n,!1);if(i)throw new Lt(i);if(!e.La.unlink)throw new Lt(63);if(r.$a)throw new Lt(10);try{xt.willDeletePath&&xt.willDeletePath(t)}catch(e){w("FS.trackingDelegate['willDeletePath']('"+t+"') threw an exception: "+e.message)}e.La.unlink(e,n),Pt(r);try{xt.onDeletePath&&xt.onDeletePath(t)}catch(e){w("FS.trackingDelegate['onDeletePath']('"+t+"') threw an exception: "+e.message)}}function Jt(t){if(!(t=At(t).node))throw new Lt(44);if(!t.La.readlink)throw new Lt(28);return pt(qt(t.parent),t.La.readlink(t))}function Zt(t,e){if(!(t=At(t,{Xa:!e}).node))throw new Lt(44);if(!t.La.Ta)throw new Lt(63);return t.La.Ta(t)}function te(t){return Zt(t,!0)}function ee(t,e){if(!(t="string"==typeof t?At(t,{Xa:!0}).node:t).La.Sa)throw new Lt(63);t.La.Sa(t,{mode:4095&e|-4096&t.mode,timestamp:Date.now()})}function ne(t){if(!(t="string"==typeof t?At(t,{Xa:!0}).node:t).La.Sa)throw new Lt(63);t.La.Sa(t,{timestamp:Date.now()})}function re(t,e){if(0>e)throw new Lt(28);if(!(t="string"==typeof t?At(t,{Xa:!0}).node:t).La.Sa)throw new Lt(63);if(jt(t.mode))throw new Lt(31);if(32768!=(61440&t.mode))throw new Lt(28);var n=Ut(t,"w");if(n)throw new Lt(n);t.La.Sa(t,{size:e,timestamp:Date.now()})}function ie(t,e,n,r){if(""===t)throw new Lt(44);if("string"==typeof e){var i=Ct[e];if(void 0===i)throw Error("Unknown file open mode: "+e);e=i}if(n=64&e?4095&(void 0===n?438:n)|32768:0,"object"==typeof t)var a=t;else{t=ht(t);try{a=At(t,{Xa:!(131072&e)}).node}catch(t){}}if(i=!1,64&e)if(a){if(128&e)throw new Lt(20)}else a=$t(t,n,0),i=!0;if(!a)throw new Lt(44);if(8192==(61440&a.mode)&&(e&=-513),65536&e&&!jt(a.mode))throw new Lt(54);if(!i&&(n=a?40960==(61440&a.mode)?32:jt(a.mode)&&("r"!==Bt(e)||512&e)?31:Ut(a,Bt(e)):44))throw new Lt(n);512&e&&re(a,0),e&=-131713,(r=function(t,e){de||((de=function(){}).prototype={});var n,r=new de;for(n in t)r[n]=t[n];return t=r,e=function(t){for(t=t||0;t<=4096;t++)if(!kt[t])return t;throw new Lt(33)}(e),t.fd=e,kt[e]=t}({node:a,path:qt(a),flags:e,seekable:!0,position:0,Ma:a.Ma,Pb:[],error:!1},r)).Ma.open&&r.Ma.open(r),!o.logReadFiles||1&e||(pe||(pe={}),t in pe||(pe[t]=1,w("FS.trackingDelegate error on read file: "+t)));try{xt.onOpenFile&&(a=0,1!=(2097155&e)&&(a|=1),0!=(2097155&e)&&(a|=2),xt.onOpenFile(t,a))}catch(e){w("FS.trackingDelegate['onOpenFile']('"+t+"', flags) threw an exception: "+e.message)}return r}function oe(t){if(null===t.fd)throw new Lt(8);t.nb&&(t.nb=null);try{t.Ma.close&&t.Ma.close(t)}catch(t){throw t}finally{kt[t.fd]=null}t.fd=null}function ae(t,e,n){if(null===t.fd)throw new Lt(8);if(!t.seekable||!t.Ma.Ya)throw new Lt(70);if(0!=n&&1!=n&&2!=n)throw new Lt(28);t.position=t.Ma.Ya(t,e,n),t.Pb=[]}function se(t,e,n,r,i){if(0>r||0>i)throw new Lt(28);if(null===t.fd)throw new Lt(8);if(1==(2097155&t.flags))throw new Lt(8);if(jt(t.node.mode))throw new Lt(31);if(!t.Ma.read)throw new Lt(28);var o=void 0!==i;if(o){if(!t.seekable)throw new Lt(70)}else i=t.position;return e=t.Ma.read(t,e,n,r,i),o||(t.position+=e),e}function ue(t,e,n,r,i,o){if(0>r||0>i)throw new Lt(28);if(null===t.fd)throw new Lt(8);if(0==(2097155&t.flags))throw new Lt(8);if(jt(t.node.mode))throw new Lt(31);if(!t.Ma.write)throw new Lt(28);t.seekable&&1024&t.flags&&ae(t,0,2);var a=void 0!==i;if(a){if(!t.seekable)throw new Lt(70)}else i=t.position;e=t.Ma.write(t,e,n,r,i,o),a||(t.position+=e);try{t.path&&xt.onWriteToFile&&xt.onWriteToFile(t.path)}catch(e){w("FS.trackingDelegate['onWriteToFile']('"+t.path+"') threw an exception: "+e.message)}return e}function le(){Lt||((Lt=function(t,e){this.node=e,this.Ob=function(t){this.Pa=t},this.Ob(t),this.message="FS error"}).prototype=Error(),Lt.prototype.constructor=Lt,[44].forEach((function(t){Ot[t]=new Lt(t),Ot[t].stack="<generic error, no stack>"})))}function fe(t,e){var n=0;return t&&(n|=365),e&&(n|=146),n}function he(t,e,n){t=ht("/dev/"+t);var r=fe(!!e,!!n);ce||(ce=64);var i=ce++<<8|0;Vt(i,{open:function(t){t.seekable=!1},close:function(){n&&n.buffer&&n.buffer.length&&n(10)},read:function(t,n,r,i){for(var o=0,a=0;a<i;a++){try{var s=e()}catch(t){throw new Lt(29)}if(void 0===s&&0===o)throw new Lt(6);if(null==s)break;o++,n[r+a]=s}return o&&(t.node.timestamp=Date.now()),o},write:function(t,e,r,i){for(var o=0;o<i;o++)try{n(e[r+o])}catch(t){throw new Lt(29)}return i&&(t.node.timestamp=Date.now()),o}}),Yt(t,r,i)}var ce,de,pe,be={},_e={};function me(t,e,n){try{var r=t(e)}catch(t){if(t&&t.node&&ht(e)!==ht(qt(t.node)))return-54;throw t}return j[n>>2]=r.dev,j[n+4>>2]=0,j[n+8>>2]=r.ino,j[n+12>>2]=r.mode,j[n+16>>2]=r.nlink,j[n+20>>2]=r.uid,j[n+24>>2]=r.gid,j[n+28>>2]=r.rdev,j[n+32>>2]=0,tt=[r.size>>>0,(Z=r.size,1<=+Math.abs(Z)?0<Z?(0|Math.min(+Math.floor(Z/4294967296),4294967295))>>>0:~~+Math.ceil((Z-+(~~Z>>>0))/4294967296)>>>0:0)],j[n+40>>2]=tt[0],j[n+44>>2]=tt[1],j[n+48>>2]=4096,j[n+52>>2]=r.blocks,j[n+56>>2]=r.atime.getTime()/1e3|0,j[n+60>>2]=0,j[n+64>>2]=r.mtime.getTime()/1e3|0,j[n+68>>2]=0,j[n+72>>2]=r.ctime.getTime()/1e3|0,j[n+76>>2]=0,tt=[r.ino>>>0,(Z=r.ino,1<=+Math.abs(Z)?0<Z?(0|Math.min(+Math.floor(Z/4294967296),4294967295))>>>0:~~+Math.ceil((Z-+(~~Z>>>0))/4294967296)>>>0:0)],j[n+80>>2]=tt[0],j[n+84>>2]=tt[1],0}var ge,ye=void 0;function ve(){return j[(ye+=4)-4>>2]}function we(t){if(!(t=kt[t]))throw new Lt(8);return t}ge=g?function(){var t=process.hrtime();return 1e3*t[0]+t[1]/1e6}:function(){return performance.now()};var Ee,Se={};function ke(){if(!Ee){var t,e={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:b||"./this.program"};for(t in Se)void 0===Se[t]?delete e[t]:e[t]=Se[t];var n=[];for(t in e)n.push(t+"="+e[t]);Ee=n}return Ee}function Re(t,e,n,r){t||(t=this),this.parent=t,this.Va=t.Va,this.$a=null,this.id=Rt++,this.name=e,this.mode=n,this.La={},this.Ma={},this.rdev=r}function Me(t,e){var n=Array(H(t)+1);return t=z(t,n,0,n.length),e&&(n.length=t),n}Object.defineProperties(Re.prototype,{read:{get:function(){return 365==(365&this.mode)},set:function(t){t?this.mode|=365:this.mode&=-366}},write:{get:function(){return 146==(146&this.mode)},set:function(t){t?this.mode|=146:this.mode&=-147}}}),le(),Mt=Array(4096),Qt(wt,"/"),Gt("/tmp"),Gt("/home"),Gt("/home/web_user"),function(){Gt("/dev"),Vt(259,{read:function(){return 0},write:function(t,e,n,r){return r}}),Yt("/dev/null",259),_t(1280,gt),_t(1536,yt),Yt("/dev/tty",1280),Yt("/dev/tty1",1536);var t=function(){if("object"==typeof crypto&&"function"==typeof crypto.getRandomValues){var t=new Uint8Array(1);return function(){return crypto.getRandomValues(t),t[0]}}if(g)try{var e=n(7607);return function(){return e.randomBytes(1)[0]}}catch(t){}return function(){ot("randomDevice")}}();he("random",t),he("urandom",t),Gt("/dev/shm"),Gt("/dev/shm/tmp")}(),function(){Gt("/proc");var t=Gt("/proc/self");Gt("/proc/self/fd"),Qt({Va:function(){var e=It(t,"fd",16895,73);return e.La={lookup:function(t,e){var n=kt[+e];if(!n)throw new Lt(8);return(t={parent:null,Va:{Ab:"fake"},La:{readlink:function(){return n.path}}}).parent=t}},e}},"/proc/self/fd")}();var Te={a:function(t,e,n,r){ot("Assertion failed: "+W(t)+", at: "+[e?W(e):"unknown filename",n,r?W(r):"unknown function"])},s:function(t,e){et||(et=!0,function(){function t(t){return(t=t.toTimeString().match(/\(([A-Za-z ]+)\)$/))?t[1]:"GMT"}var e=(new Date).getFullYear(),n=new Date(e,0,1),r=new Date(e,6,1);e=n.getTimezoneOffset();var i=r.getTimezoneOffset(),o=Math.max(e,i);j[Pe()>>2]=60*o,j[De()>>2]=Number(e!=i),n=t(n),r=t(r),n=V(n),r=V(r),i<e?(j[qe()>>2]=n,j[qe()+4>>2]=r):(j[qe()>>2]=r,j[qe()+4>>2]=n)}()),t=new Date(1e3*j[t>>2]),j[e>>2]=t.getSeconds(),j[e+4>>2]=t.getMinutes(),j[e+8>>2]=t.getHours(),j[e+12>>2]=t.getDate(),j[e+16>>2]=t.getMonth(),j[e+20>>2]=t.getFullYear()-1900,j[e+24>>2]=t.getDay();var n=new Date(t.getFullYear(),0,1);j[e+28>>2]=(t.getTime()-n.getTime())/864e5|0,j[e+36>>2]=-60*t.getTimezoneOffset();var r=new Date(t.getFullYear(),6,1).getTimezoneOffset();return t=0|(r!=(n=n.getTimezoneOffset())&&t.getTimezoneOffset()==Math.min(n,r)),j[e+32>>2]=t,t=j[qe()+(t?4:0)>>2],j[e+40>>2]=t,e},y:function(t,e){try{var n;if(t=W(t),-8&e)var r=-28;else(n=At(t,{Xa:!0}).node)?(t="",4&e&&(t+="r"),2&e&&(t+="w"),1&e&&(t+="x"),r=t&&Ut(n,t)?-2:0):r=-44;return r}catch(t){return void 0!==be&&t instanceof Lt||ot(t),-t.Pa}},i:function(t,e){try{return ee(t=W(t),e),0}catch(t){return void 0!==be&&t instanceof Lt||ot(t),-t.Pa}},z:function(t){try{return ne(t=W(t)),0}catch(t){return void 0!==be&&t instanceof Lt||ot(t),-t.Pa}},j:function(t,e){try{var n=kt[t];if(!n)throw new Lt(8);return ee(n.node,e),0}catch(t){return void 0!==be&&t instanceof Lt||ot(t),-t.Pa}},A:function(t){try{var e=kt[t];if(!e)throw new Lt(8);return ne(e.node),0}catch(t){return void 0!==be&&t instanceof Lt||ot(t),-t.Pa}},b:function(t,e,n){ye=n;try{var r=we(t);switch(e){case 0:var i=ve();return 0>i?-28:ie(r.path,r.flags,0,i).fd;case 1:case 2:case 13:case 14:return 0;case 3:return r.flags;case 4:return i=ve(),r.flags|=i,0;case 12:return i=ve(),I[i+0>>1]=2,0;case 16:case 8:default:return-28;case 9:return j[xe()>>2]=28,-1}}catch(t){return void 0!==be&&t instanceof Lt||ot(t),-t.Pa}},k:function(t,e){try{return me(Zt,we(t).path,e)}catch(t){return void 0!==be&&t instanceof Lt||ot(t),-t.Pa}},E:function(t,e,n){try{var r=kt[t];if(!r)throw new Lt(8);if(0==(2097155&r.flags))throw new Lt(28);return re(r.node,n),0}catch(t){return void 0!==be&&t instanceof Lt||ot(t),-t.Pa}},D:function(t,e){try{return 0===e?-28:e<H("/")+1?-68:(z("/",N,t,e),t)}catch(t){return void 0!==be&&t instanceof Lt||ot(t),-t.Pa}},v:function(){return 0},d:function(){return 42},h:function(t,e){try{return me(te,t=W(t),e)}catch(t){return void 0!==be&&t instanceof Lt||ot(t),-t.Pa}},l:function(t,e){try{return"/"===(t=ht(t=W(t)))[t.length-1]&&(t=t.substr(0,t.length-1)),Gt(t,e),0}catch(t){return void 0!==be&&t instanceof Lt||ot(t),-t.Pa}},t:function(t,e,n,r,i,o){try{t:{o<<=12;var a=!1;if(0!=(16&r)&&0!=t%65536)var s=-28;else{if(0!=(32&r)){var u=vt(e);if(!u){s=-48;break t}a=!0}else{var l=kt[i];if(!l){s=-8;break t}var f=o;if(0!=(2&n)&&0==(2&r)&&2!=(2097155&l.flags))throw new Lt(2);if(1==(2097155&l.flags))throw new Lt(2);if(!l.Ma.gb)throw new Lt(43);var h=l.Ma.gb(l,t,e,f,n,r);u=h.Mb,a=h.jb}_e[u]={Jb:u,Ib:e,jb:a,fd:i,Lb:n,flags:r,offset:o},s=u}}return s}catch(t){return void 0!==be&&t instanceof Lt||ot(t),-t.Pa}},u:function(t,e){try{var n=_e[t];if(0!==e&&n){if(e===n.Ib){var r=kt[n.fd];if(r&&2&n.Lb){var i=n.flags,o=n.offset,a=N.slice(t,t+e);r&&r.Ma.hb&&r.Ma.hb(r,a,o,e,i)}_e[t]=null,n.jb&&Oe(n.Jb)}var s=0}else s=-28;return s}catch(t){return void 0!==be&&t instanceof Lt||ot(t),-t.Pa}},I:function(t,e,n){ye=n;try{return ie(W(t),e,n?ve():0).fd}catch(t){return void 0!==be&&t instanceof Lt||ot(t),-t.Pa}},F:function(t,e,n){try{if(t=W(t),0>=n)var r=-28;else{var i=Jt(t),o=Math.min(n,H(i)),a=P[e+o];z(i,N,e,n+1),P[e+o]=a,r=o}return r}catch(t){return void 0!==be&&t instanceof Lt||ot(t),-t.Pa}},H:function(t){try{var e=At(t=W(t),{parent:!0}).node,n=dt(t),r=Nt(e,n),i=Wt(e,n,!0);if(i)throw new Lt(i);if(!e.La.rmdir)throw new Lt(63);if(r.$a)throw new Lt(10);try{xt.willDeletePath&&xt.willDeletePath(t)}catch(e){w("FS.trackingDelegate['willDeletePath']('"+t+"') threw an exception: "+e.message)}e.La.rmdir(e,n),Pt(r);try{xt.onDeletePath&&xt.onDeletePath(t)}catch(e){w("FS.trackingDelegate['onDeletePath']('"+t+"') threw an exception: "+e.message)}return 0}catch(t){return void 0!==be&&t instanceof Lt||ot(t),-t.Pa}},e:function(t,e){try{return me(Zt,t=W(t),e)}catch(t){return void 0!==be&&t instanceof Lt||ot(t),-t.Pa}},x:function(t){try{return Kt(t=W(t)),0}catch(t){return void 0!==be&&t instanceof Lt||ot(t),-t.Pa}},J:function(){return 2147483648},n:function(t,e,n){N.copyWithin(t,e,e+n)},c:function(t){var e=N.length;if(2147483648<(t>>>=0))return!1;for(var n=1;4>=n;n*=2){var r=e*(1+.2/n);r=Math.min(r,t+100663296),0<(r=Math.max(t,r))%65536&&(r+=65536-r%65536);t:{try{x.grow(Math.min(2147483648,r)-D.byteLength+65535>>>16),Q();var i=1;break t}catch(t){}i=void 0}if(i)return!0}return!1},r:function(t){for(var e=ge();ge()-e<t;);},p:function(t,e){var n=0;return ke().forEach((function(r,i){var o=e+n;for(i=j[t+4*i>>2]=o,o=0;o<r.length;++o)P[i++>>0]=r.charCodeAt(o);P[i>>0]=0,n+=r.length+1})),0},q:function(t,e){var n=ke();j[t>>2]=n.length;var r=0;return n.forEach((function(t){r+=t.length+1})),j[e>>2]=r,0},f:function(t){try{return oe(we(t)),0}catch(t){return void 0!==be&&t instanceof Lt||ot(t),t.Pa}},o:function(t,e){try{var n=we(t);return P[e>>0]=n.tty?2:jt(n.mode)?3:40960==(61440&n.mode)?7:4,0}catch(t){return void 0!==be&&t instanceof Lt||ot(t),t.Pa}},w:function(t,e,n,r){try{t:{for(var i=we(t),o=t=0;o<n;o++){var a=j[e+(8*o+4)>>2],s=se(i,P,j[e+8*o>>2],a,void 0);if(0>s){var u=-1;break t}if(t+=s,s<a)break}u=t}return j[r>>2]=u,0}catch(t){return void 0!==be&&t instanceof Lt||ot(t),t.Pa}},m:function(t,e,n,r,i){try{var o=we(t);return-9007199254740992>=(t=4294967296*n+(e>>>0))||9007199254740992<=t?-61:(ae(o,t,r),tt=[o.position>>>0,(Z=o.position,1<=+Math.abs(Z)?0<Z?(0|Math.min(+Math.floor(Z/4294967296),4294967295))>>>0:~~+Math.ceil((Z-+(~~Z>>>0))/4294967296)>>>0:0)],j[i>>2]=tt[0],j[i+4>>2]=tt[1],o.nb&&0===t&&0===r&&(o.nb=null),0)}catch(t){return void 0!==be&&t instanceof Lt||ot(t),t.Pa}},G:function(t){try{var e=we(t);return e.Ma&&e.Ma.fsync?-e.Ma.fsync(e):0}catch(t){return void 0!==be&&t instanceof Lt||ot(t),t.Pa}},B:function(t,e,n,r){try{t:{for(var i=we(t),o=t=0;o<n;o++){var a=ue(i,P,j[e+8*o>>2],j[e+(8*o+4)>>2],void 0);if(0>a){var s=-1;break t}t+=a}s=t}return j[r>>2]=s,0}catch(t){return void 0!==be&&t instanceof Lt||ot(t),t.Pa}},g:function(t){var e=Date.now();return j[t>>2]=e/1e3|0,j[t+4>>2]=e%1e3*1e3|0,0},K:function(t){var e=Date.now()/1e3|0;return t&&(j[t>>2]=e),e},C:function(t,e){if(e){var n=e+8;e=1e3*j[n>>2],e+=j[n+4>>2]/1e3}else e=Date.now();t=W(t);try{var r=At(t,{Xa:!0}).node;r.La.Sa(r,{timestamp:Math.max(e,e)});var i=0}catch(t){if(!(t instanceof Lt)){t:{if(!(i=Error()).stack){try{throw Error()}catch(t){i=t}if(!i.stack){i="(no stack trace available)";break t}}i=i.stack.toString()}throw o.extraStackTrace&&(i+="\n"+o.extraStackTrace()),i=function(t){return t.replace(/\b_Z[\w\d_]+/g,(function(t){return t==t?t:t+" ["+t+"]"}))}(i),t+" : "+i}i=t.Pa,j[xe()>>2]=i,i=-1}return i}};!function(){function t(t){o.asm=t.exports,x=o.asm.L,Q(),$=o.asm.Ca,Y.unshift(o.asm.M),nt--,o.monitorRunDependencies&&o.monitorRunDependencies(nt),0==nt&&(null!==rt&&(clearInterval(rt),rt=null),it&&(t=it,it=null,t()))}function e(e){t(e.instance)}function n(t){return function(){if(!S&&(_||m)){if("function"==typeof fetch&&!J.startsWith("file://"))return fetch(J,{credentials:"same-origin"}).then((function(t){if(!t.ok)throw"failed to load wasm binary file at '"+J+"'";return t.arrayBuffer()})).catch((function(){return ut()}));if(h)return new Promise((function(t,e){h(J,(function(e){t(new Uint8Array(e))}),e)}))}return Promise.resolve().then((function(){return ut()}))}().then((function(t){return WebAssembly.instantiate(t,r)})).then((function(t){return t})).then(t,(function(t){w("failed to asynchronously prepare wasm: "+t),ot(t)}))}var r={a:Te};if(nt++,o.monitorRunDependencies&&o.monitorRunDependencies(nt),o.instantiateWasm)try{return o.instantiateWasm(r,t)}catch(t){return w("Module.instantiateWasm callback failed with error: "+t),!1}S||"function"!=typeof WebAssembly.instantiateStreaming||at()||J.startsWith("file://")||"function"!=typeof fetch?n(e):fetch(J,{credentials:"same-origin"}).then((function(t){return WebAssembly.instantiateStreaming(t,r).then(e,(function(t){return w("wasm streaming compile failed: "+t),w("falling back to ArrayBuffer instantiation"),n(e)}))}))}(),o.___wasm_call_ctors=function(){return(o.___wasm_call_ctors=o.asm.M).apply(null,arguments)},o._sqlite3_free=function(){return(o._sqlite3_free=o.asm.N).apply(null,arguments)};var xe=o.___errno_location=function(){return(xe=o.___errno_location=o.asm.O).apply(null,arguments)};o._sqlite3_step=function(){return(o._sqlite3_step=o.asm.P).apply(null,arguments)},o._sqlite3_finalize=function(){return(o._sqlite3_finalize=o.asm.Q).apply(null,arguments)},o._sqlite3_prepare_v2=function(){return(o._sqlite3_prepare_v2=o.asm.R).apply(null,arguments)},o._sqlite3_reset=function(){return(o._sqlite3_reset=o.asm.S).apply(null,arguments)},o._sqlite3_clear_bindings=function(){return(o._sqlite3_clear_bindings=o.asm.T).apply(null,arguments)},o._sqlite3_value_blob=function(){return(o._sqlite3_value_blob=o.asm.U).apply(null,arguments)},o._sqlite3_value_text=function(){return(o._sqlite3_value_text=o.asm.V).apply(null,arguments)},o._sqlite3_value_bytes=function(){return(o._sqlite3_value_bytes=o.asm.W).apply(null,arguments)},o._sqlite3_value_double=function(){return(o._sqlite3_value_double=o.asm.X).apply(null,arguments)},o._sqlite3_value_int=function(){return(o._sqlite3_value_int=o.asm.Y).apply(null,arguments)},o._sqlite3_value_type=function(){return(o._sqlite3_value_type=o.asm.Z).apply(null,arguments)},o._sqlite3_result_blob=function(){return(o._sqlite3_result_blob=o.asm._).apply(null,arguments)},o._sqlite3_result_double=function(){return(o._sqlite3_result_double=o.asm.$).apply(null,arguments)},o._sqlite3_result_error=function(){return(o._sqlite3_result_error=o.asm.aa).apply(null,arguments)},o._sqlite3_result_int=function(){return(o._sqlite3_result_int=o.asm.ba).apply(null,arguments)},o._sqlite3_result_int64=function(){return(o._sqlite3_result_int64=o.asm.ca).apply(null,arguments)},o._sqlite3_result_null=function(){return(o._sqlite3_result_null=o.asm.da).apply(null,arguments)},o._sqlite3_result_text=function(){return(o._sqlite3_result_text=o.asm.ea).apply(null,arguments)},o._sqlite3_column_count=function(){return(o._sqlite3_column_count=o.asm.fa).apply(null,arguments)},o._sqlite3_data_count=function(){return(o._sqlite3_data_count=o.asm.ga).apply(null,arguments)},o._sqlite3_column_blob=function(){return(o._sqlite3_column_blob=o.asm.ha).apply(null,arguments)},o._sqlite3_column_bytes=function(){return(o._sqlite3_column_bytes=o.asm.ia).apply(null,arguments)},o._sqlite3_column_double=function(){return(o._sqlite3_column_double=o.asm.ja).apply(null,arguments)},o._sqlite3_column_text=function(){return(o._sqlite3_column_text=o.asm.ka).apply(null,arguments)},o._sqlite3_column_type=function(){return(o._sqlite3_column_type=o.asm.la).apply(null,arguments)},o._sqlite3_column_name=function(){return(o._sqlite3_column_name=o.asm.ma).apply(null,arguments)},o._sqlite3_bind_blob=function(){return(o._sqlite3_bind_blob=o.asm.na).apply(null,arguments)},o._sqlite3_bind_double=function(){return(o._sqlite3_bind_double=o.asm.oa).apply(null,arguments)},o._sqlite3_bind_int=function(){return(o._sqlite3_bind_int=o.asm.pa).apply(null,arguments)},o._sqlite3_bind_text=function(){return(o._sqlite3_bind_text=o.asm.qa).apply(null,arguments)},o._sqlite3_bind_parameter_index=function(){return(o._sqlite3_bind_parameter_index=o.asm.ra).apply(null,arguments)},o._sqlite3_sql=function(){return(o._sqlite3_sql=o.asm.sa).apply(null,arguments)},o._sqlite3_normalized_sql=function(){return(o._sqlite3_normalized_sql=o.asm.ta).apply(null,arguments)},o._sqlite3_errmsg=function(){return(o._sqlite3_errmsg=o.asm.ua).apply(null,arguments)},o._sqlite3_exec=function(){return(o._sqlite3_exec=o.asm.va).apply(null,arguments)},o._sqlite3_changes=function(){return(o._sqlite3_changes=o.asm.wa).apply(null,arguments)},o._sqlite3_close_v2=function(){return(o._sqlite3_close_v2=o.asm.xa).apply(null,arguments)},o._sqlite3_create_function_v2=function(){return(o._sqlite3_create_function_v2=o.asm.ya).apply(null,arguments)},o._sqlite3_open=function(){return(o._sqlite3_open=o.asm.za).apply(null,arguments)};var Le=o._malloc=function(){return(Le=o._malloc=o.asm.Aa).apply(null,arguments)},Oe=o._free=function(){return(Oe=o._free=o.asm.Ba).apply(null,arguments)};o._RegisterExtensionFunctions=function(){return(o._RegisterExtensionFunctions=o.asm.Da).apply(null,arguments)};var Ae,qe=o.__get_tzname=function(){return(qe=o.__get_tzname=o.asm.Ea).apply(null,arguments)},De=o.__get_daylight=function(){return(De=o.__get_daylight=o.asm.Fa).apply(null,arguments)},Pe=o.__get_timezone=function(){return(Pe=o.__get_timezone=o.asm.Ga).apply(null,arguments)},Ne=o.stackSave=function(){return(Ne=o.stackSave=o.asm.Ha).apply(null,arguments)},Ie=o.stackRestore=function(){return(Ie=o.stackRestore=o.asm.Ia).apply(null,arguments)},je=o.stackAlloc=function(){return(je=o.stackAlloc=o.asm.Ja).apply(null,arguments)},Ce=o._memalign=function(){return(Ce=o._memalign=o.asm.Ka).apply(null,arguments)};function Be(){function t(){if(!Ae&&(Ae=!0,o.calledRun=!0,!L)){if(o.noFSInit||zt||(zt=!0,le(),o.stdin=o.stdin,o.stdout=o.stdout,o.stderr=o.stderr,o.stdin?he("stdin",o.stdin):Xt("/dev/tty","/dev/stdin"),o.stdout?he("stdout",null,o.stdout):Xt("/dev/tty","/dev/stdout"),o.stderr?he("stderr",null,o.stderr):Xt("/dev/tty1","/dev/stderr"),ie("/dev/stdin",0),ie("/dev/stdout",1),ie("/dev/stderr",1)),Tt=!1,lt(Y),o.onRuntimeInitialized&&o.onRuntimeInitialized(),o.postRun)for("function"==typeof o.postRun&&(o.postRun=[o.postRun]);o.postRun.length;){var t=o.postRun.shift();X.unshift(t)}lt(X)}}if(!(0<nt)){if(o.preRun)for("function"==typeof o.preRun&&(o.preRun=[o.preRun]);o.preRun.length;)K();lt(G),0<nt||(o.setStatus?(o.setStatus("Running..."),setTimeout((function(){setTimeout((function(){o.setStatus("")}),1),t()}),1)):t())}}if(o.cwrap=function(t,e,n,r){var i=(n=n||[]).every((function(t){return"number"===t}));return"string"!==e&&i&&!r?O(t):function(){return A(t,e,n,arguments)}},o.UTF8ToString=W,o.stackSave=Ne,o.stackRestore=Ie,o.stackAlloc=je,it=function t(){Ae||Be(),Ae||(it=t)},o.run=Be,o.preInit)for("function"==typeof o.preInit&&(o.preInit=[o.preInit]);0<o.preInit.length;)o.preInit.pop()();return Be(),a})),r)};t.exports=i,t.exports.default=i},2830:(t,e,n)=>{t.exports=i;var r=n(7187).EventEmitter;function i(){r.call(this)}n(5717)(i,r),i.Readable=n(9481),i.Writable=n(4229),i.Duplex=n(6753),i.Transform=n(4605),i.PassThrough=n(2725),i.finished=n(8610),i.pipeline=n(9946),i.Stream=i,i.prototype.pipe=function(t,e){var n=this;function i(e){t.writable&&!1===t.write(e)&&n.pause&&n.pause()}function o(){n.readable&&n.resume&&n.resume()}n.on("data",i),t.on("drain",o),t._isStdio||e&&!1===e.end||(n.on("end",s),n.on("close",u));var a=!1;function s(){a||(a=!0,t.end())}function u(){a||(a=!0,"function"==typeof t.destroy&&t.destroy())}function l(t){if(f(),0===r.listenerCount(this,"error"))throw t}function f(){n.removeListener("data",i),t.removeListener("drain",o),n.removeListener("end",s),n.removeListener("close",u),n.removeListener("error",l),t.removeListener("error",l),n.removeListener("end",f),n.removeListener("close",f),t.removeListener("close",f)}return n.on("error",l),t.on("error",l),n.on("end",f),n.on("close",f),t.on("close",f),t.emit("pipe",n),t}},2553:(t,e,n)=>{"use strict";var r=n(9509).Buffer,i=r.isEncoding||function(t){switch((t=""+t)&&t.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}};function o(t){var e;switch(this.encoding=function(t){var e=function(t){if(!t)return"utf8";for(var e;;)switch(t){case"utf8":case"utf-8":return"utf8";case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return"utf16le";case"latin1":case"binary":return"latin1";case"base64":case"ascii":case"hex":return t;default:if(e)return;t=(""+t).toLowerCase(),e=!0}}(t);if("string"!=typeof e&&(r.isEncoding===i||!i(t)))throw new Error("Unknown encoding: "+t);return e||t}(t),this.encoding){case"utf16le":this.text=u,this.end=l,e=4;break;case"utf8":this.fillLast=s,e=4;break;case"base64":this.text=f,this.end=h,e=3;break;default:return this.write=c,void(this.end=d)}this.lastNeed=0,this.lastTotal=0,this.lastChar=r.allocUnsafe(e)}function a(t){return t<=127?0:t>>5==6?2:t>>4==14?3:t>>3==30?4:t>>6==2?-1:-2}function s(t){var e=this.lastTotal-this.lastNeed,n=function(t,e,n){if(128!=(192&e[0]))return t.lastNeed=0,"�";if(t.lastNeed>1&&e.length>1){if(128!=(192&e[1]))return t.lastNeed=1,"�";if(t.lastNeed>2&&e.length>2&&128!=(192&e[2]))return t.lastNeed=2,"�"}}(this,t);return void 0!==n?n:this.lastNeed<=t.length?(t.copy(this.lastChar,e,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal)):(t.copy(this.lastChar,e,0,t.length),void(this.lastNeed-=t.length))}function u(t,e){if((t.length-e)%2==0){var n=t.toString("utf16le",e);if(n){var r=n.charCodeAt(n.length-1);if(r>=55296&&r<=56319)return this.lastNeed=2,this.lastTotal=4,this.lastChar[0]=t[t.length-2],this.lastChar[1]=t[t.length-1],n.slice(0,-1)}return n}return this.lastNeed=1,this.lastTotal=2,this.lastChar[0]=t[t.length-1],t.toString("utf16le",e,t.length-1)}function l(t){var e=t&&t.length?this.write(t):"";if(this.lastNeed){var n=this.lastTotal-this.lastNeed;return e+this.lastChar.toString("utf16le",0,n)}return e}function f(t,e){var n=(t.length-e)%3;return 0===n?t.toString("base64",e):(this.lastNeed=3-n,this.lastTotal=3,1===n?this.lastChar[0]=t[t.length-1]:(this.lastChar[0]=t[t.length-2],this.lastChar[1]=t[t.length-1]),t.toString("base64",e,t.length-n))}function h(t){var e=t&&t.length?this.write(t):"";return this.lastNeed?e+this.lastChar.toString("base64",0,3-this.lastNeed):e}function c(t){return t.toString(this.encoding)}function d(t){return t&&t.length?this.write(t):""}e.s=o,o.prototype.write=function(t){if(0===t.length)return"";var e,n;if(this.lastNeed){if(void 0===(e=this.fillLast(t)))return"";n=this.lastNeed,this.lastNeed=0}else n=0;return n<t.length?e?e+this.text(t,n):this.text(t,n):e||""},o.prototype.end=function(t){var e=t&&t.length?this.write(t):"";return this.lastNeed?e+"�":e},o.prototype.text=function(t,e){var n=function(t,e,n){var r=e.length-1;if(r<n)return 0;var i=a(e[r]);return i>=0?(i>0&&(t.lastNeed=i-1),i):--r<n||-2===i?0:(i=a(e[r]))>=0?(i>0&&(t.lastNeed=i-2),i):--r<n||-2===i?0:(i=a(e[r]))>=0?(i>0&&(2===i?i=0:t.lastNeed=i-3),i):0}(this,t,e);if(!this.lastNeed)return t.toString("utf8",e);this.lastTotal=n;var r=t.length-(n-this.lastNeed);return t.copy(this.lastChar,0,r),t.toString("utf8",e,r)},o.prototype.fillLast=function(t){if(this.lastNeed<=t.length)return t.copy(this.lastChar,this.lastTotal-this.lastNeed,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal);t.copy(this.lastChar,this.lastTotal-this.lastNeed,0,t.length),this.lastNeed-=t.length}},9673:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=class{css="";templates=[];setCss(t=""){return this.css=t,this}setTemplates(t=[]){return this.templates=t,this}writeToDatabase(t,e,n,r){t.update("insert or replace into cards values(:id,:nid,:did,:ord,:mod,:usn,:type,:queue,:due,:ivl,:factor,:reps,:lapses,:left,:odue,:odid,:flags,:data)",{":id":t.getCardId(n,r),":nid":n,":did":e,":ord":0,":mod":t.getId("cards","mod",r),":usn":-1,":type":0,":queue":0,":due":179,":ivl":0,":factor":0,":reps":0,":lapses":0,":left":0,":odue":0,":odid":0,":flags":0,":data":""})}}},9471:function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const i=r(n(3482));e.default=class{db;constructor(t,e){this.db=new t.Database,this.db.run(e)}update(t,e){this.db.prepare(t).getAsObject(e)}getInitialRowValue(t,e="id"){const n=`select ${e} from ${t}`;return this._getFirstVal(n)}getLastItem=t=>{const e=Object.keys(t);return t[e[e.length-1]]};_getFirstVal(t){return JSON.parse(this.db.exec(t)[0].values[0][0])}getId(t,e,n){const r=`SELECT ${e} from ${t} WHERE ${e} >= :ts ORDER BY ${e} DESC LIMIT 1`,i=this.db.prepare(r).getAsObject({":ts":n});return i[e]?Number(i[e])+1:n}getNoteId(t,e){const n=this.db.prepare("SELECT id from notes WHERE guid = :guid ORDER BY id DESC LIMIT 1").getAsObject({":guid":t});return Number(n.id)||this.getId("notes","id",e)}generateGuid(t,e){return(0,i.default)("sha1").update(`${t}${e}`).digest("utf8")}getCardId(t,e){return this.db.prepare("SELECT id from cards WHERE nid = :note_id ORDER BY id DESC LIMIT 1").getAsObject({":note_id":t}).id||this.getId("cards","id",e)}}},3157:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=class{id;name;description;notes;constructor(t,e=""){this.name=t,this.description=e,this.id=Date.now(),this.notes=[]}setId(t){return this.id=t,this}addNote(t){return this.notes.push(t),this}writeToDatabase(t){const{id:e,description:n,name:r}=this,i=t.getId("cards","did",e),o=t.getInitialRowValue("col","decks"),a=t.getLastItem(o);o[`${i}`]={...a,id:i,desc:n,name:r},t.update("update col set decks=:decks where id=1",{":decks":JSON.stringify(o)});const s=t.getInitialRowValue("col","models");this.notes.forEach((n=>{s[n.model.id]=n.model.toJSON(e),n.writeToDatabase(t,e)})),t.update("update col set models=:models where id=1",{":models":JSON.stringify(s)})}}},8940:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=class{ord=0;name;font="Arial";size=12;constructor(t=""){this.name=t}setOrd(t=0){return this.ord=t,this}setFont(t="Arial"){return this.font=t,this}setSize(t=12){return this.size=t,this}}},3607:function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.Media=e.Card=e.Field=e.ModelKinds=e.Model=e.Note=e.Deck=e.Package=void 0;var i=n(9889);Object.defineProperty(e,"Package",{enumerable:!0,get:function(){return r(i).default}});var o=n(3157);Object.defineProperty(e,"Deck",{enumerable:!0,get:function(){return r(o).default}});var a=n(1835);Object.defineProperty(e,"Note",{enumerable:!0,get:function(){return r(a).default}});var s=n(3134);Object.defineProperty(e,"Model",{enumerable:!0,get:function(){return r(s).default}}),Object.defineProperty(e,"ModelKinds",{enumerable:!0,get:function(){return s.ModelKinds}});var u=n(8940);Object.defineProperty(e,"Field",{enumerable:!0,get:function(){return r(u).default}});var l=n(9673);Object.defineProperty(e,"Card",{enumerable:!0,get:function(){return r(l).default}});var f=n(2390);Object.defineProperty(e,"Media",{enumerable:!0,get:function(){return r(f).default}})},2390:function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const i=r(n(3482));e.default=class{filename;data;constructor(t,e=""){this.filename=e,this.data=t}setFilename(t){return this.filename=t,this}get checksum(){const t=new TextDecoder("utf-8");return(0,i.default)("md5").update(t.decode(this.data)).digest("hex")}}},3134:(t,e)=>{"use strict";var n;Object.defineProperty(e,"__esModule",{value:!0}),e.ModelKinds=void 0,function(t){t[t.Standard=0]="Standard",t[t.Close=1]="Close"}(n=e.ModelKinds||(e.ModelKinds={})),e.default=class{id;name="";sticky=!1;rtl=!1;fields;sortIndex=0;kind=n.Standard;card;latexPre="\\documentclass[12pt]{article}\n\\special{papersize=3in,5in}\n\\usepackage[utf8]{inputenc}\n\\usepackage{amssymb,amsmath}\n\\pagestyle{empty}\n\\setlength{\\parindent}{0in}\n\\begin{document}\n";latexPost="\\end{document}";latexsvg=!1;constructor(t){this.fields=[],this.id=Date.now(),this.card=t}setName(t){return this.name=t,this}setId(t){return this.id=t,this}setFields(t){return this.fields=t,this}setSortIndex(t){return this.sortIndex=t,this}setRtl(t){return this.rtl=t,this}setSticky(t){return this.sticky=t,this}setLatexPre(t){return this.latexPre=t,this}setLatexPost(t){return this.latexPost=t,this}setLatexsvg(t){return this.latexsvg=t,this}setKind(t){return this.kind=t,this}toJSON(t){return{id:this.id,name:this.name,did:t,type:this.kind,mod:Date.now(),usn:-1,flds:this.fields.map(((t,e)=>({...t,sticky:1===e,rtl:this.rtl}))),sortf:this.sortIndex,tmpls:this.card.templates,css:this.card.css,latexPre:this.latexPre,latexPost:this.latexPost,latexsvg:this.latexsvg}}}},1835:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=class{id;model;fieldsValue;tags;name="";constructor(t){this.id=Date.now(),this.fieldsValue=[],this.tags=[],this.model=t}setName(t){return this.name=t,this}setId(t){return this.id=t,this}setFieldsValue(t=[]){return this.fieldsValue=t,this}setTags(t=[]){return this.tags=t,this}_checkNumberModelFieldsMatchesNumFields(){if(this.model.fields.length!==this.fieldsValue.length)throw new Error(`\n                length of fields in Model does not match length of fieldsValue in Note: ${this.model.name} has ${this.model.fields.length} fields, but note has ${this.fieldsValue.length} fieldsValue\n            `);if(0===this.model.fields.length)throw new Error("fields can not be empty")}writeToDatabase(t,e){this._checkNumberModelFieldsMatchesNumFields();const n=Date.now(),r=t.generateGuid(e,this.name),i=t.getNoteId(r,this.id);t.update("insert or replace into notes values(:id,:guid,:mid,:mod,:usn,:tags,:flds,:sfld,:csum,:flags,:data)",{":id":i,":guid":r,":mid":this.model.id,":mod":t.getId("notes","mod",n),":usn":-1,":tags":` ${this.tags.join(" ")} `,":flds":this.fieldsValue.join(""),":sfld":this.fieldsValue[0],":csum":0,":flags":0,":data":""}),this.model.card.writeToDatabase(t,e,i,n)}}},9889:function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const i=r(n(4547)),o=r(n(6657)),a=r(n(9471)),s=r(n(704));e.default=class{db;zip;decks=[];medias;constructor(t,e=[]){this.decks=this.decks.concat(t),this.zip=new i.default,this.medias=e}_initSql(){return(0,o.default)({locateFile:t=>`https://cdn.jsdelivr.net/npm/anki-apkg-generator/wasm/${t}`}).then((t=>{this.db=new a.default(t,(0,s.default)())}))}_writeToDatabase(){for(const t of this.decks)t.writeToDatabase(this.db)}async writeToFile(t){await this._initSql();const{zip:e,db:n,medias:r}=this;this._writeToDatabase();const i=n.db.export(),o=r.reduce(((t,e,n)=>(t[n]=e.filename,t)),{});return e.file("collection.anki2",i),e.file("media",JSON.stringify(o)),r.forEach(((t,n)=>e.file(String(n),t.data))),e.generateAsync({type:"blob",...t})}}},704:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return`\n    PRAGMA foreign_keys=OFF;\n    BEGIN TRANSACTION;\n    CREATE TABLE col (\n        id              integer primary key,\n        crt             integer not null,\n        mod             integer not null,\n        scm             integer not null,\n        ver             integer not null,\n        dty             integer not null,\n        usn             integer not null,\n        ls              integer not null,\n        conf            text not null,\n        models          text not null,\n        decks           text not null,\n        dconf           text not null,\n        tags            text not null\n    );\n    INSERT INTO "col" VALUES(\n      1,\n      1388548800,\n      1435645724219,\n      1435645724215,\n      11,\n      0,\n      0,\n      0,\n      '${JSON.stringify({nextPos:1,estTimes:!0,activeDecks:[1],sortType:"noteFld",timeLim:0,sortBackwards:!1,addToCur:!0,curDeck:1,newBury:!0,newSpread:0,dueCounts:!0,curModel:"1435645724216",collapseTime:1200})}',\n      '{}',\n      '${JSON.stringify({1:{desc:"",name:"Default",extendRev:50,usn:0,collapsed:!1,newToday:[0,0],timeToday:[0,0],dyn:0,extendNew:10,conf:1,revToday:[0,0],lrnToday:[0,0],id:1,mod:1435645724},1435588830424:{desc:"",name:"Template",extendRev:50,usn:-1,collapsed:!1,newToday:[545,0],timeToday:[545,0],dyn:0,extendNew:10,conf:1,revToday:[545,0],lrnToday:[545,0],id:1435588830424,mod:1435588830}})}',\n      '${JSON.stringify({1:{name:"Default",replayq:!0,lapse:{leechFails:8,minInt:1,delays:[10],leechAction:0,mult:0},rev:{perDay:100,fuzz:.05,ivlFct:1,maxIvl:36500,ease4:1.3,bury:!0,minSpace:1},timer:0,maxTaken:60,usn:0,new:{perDay:20,delays:[1,10],separate:!0,ints:[1,4,7],initialFactor:2500,bury:!0,order:1},mod:0,id:1,autoplay:!0}})}',\n      '{}'\n    );\n    CREATE TABLE notes (\n        id              integer primary key,   /* 0 */\n        guid            text not null,         /* 1 */\n        mid             integer not null,      /* 2 */\n        mod             integer not null,      /* 3 */\n        usn             integer not null,      /* 4 */\n        tags            text not null,         /* 5 */\n        flds            text not null,         /* 6 */\n        sfld            integer not null,      /* 7 */\n        csum            integer not null,      /* 8 */\n        flags           integer not null,      /* 9 */\n        data            text not null          /* 10 */\n    );\n    CREATE TABLE cards (\n        id              integer primary key,   /* 0 */\n        nid             integer not null,      /* 1 */\n        did             integer not null,      /* 2 */\n        ord             integer not null,      /* 3 */\n        mod             integer not null,      /* 4 */\n        usn             integer not null,      /* 5 */\n        type            integer not null,      /* 6 */\n        queue           integer not null,      /* 7 */\n        due             integer not null,      /* 8 */\n        ivl             integer not null,      /* 9 */\n        factor          integer not null,      /* 10 */\n        reps            integer not null,      /* 11 */\n        lapses          integer not null,      /* 12 */\n        left            integer not null,      /* 13 */\n        odue            integer not null,      /* 14 */\n        odid            integer not null,      /* 15 */\n        flags           integer not null,      /* 16 */\n        data            text not null          /* 17 */\n    );\n    CREATE TABLE revlog (\n        id              integer primary key,\n        cid             integer not null,\n        usn             integer not null,\n        ease            integer not null,\n        ivl             integer not null,\n        lastIvl         integer not null,\n        factor          integer not null,\n        time            integer not null,\n        type            integer not null\n    );\n    CREATE TABLE graves (\n        usn             integer not null,\n        oid             integer not null,\n        type            integer not null\n    );\n    ANALYZE sqlite_master;\n    INSERT INTO "sqlite_stat1" VALUES('col',NULL,'1');\n    CREATE INDEX ix_notes_usn on notes (usn);\n    CREATE INDEX ix_cards_usn on cards (usn);\n    CREATE INDEX ix_revlog_usn on revlog (usn);\n    CREATE INDEX ix_cards_nid on cards (nid);\n    CREATE INDEX ix_cards_sched on cards (did, queue, due);\n    CREATE INDEX ix_revlog_cid on revlog (cid);\n    CREATE INDEX ix_notes_csum on notes (csum);\n    COMMIT;\n  `}},4927:(t,e,n)=>{function r(t){try{if(!n.g.localStorage)return!1}catch(t){return!1}var e=n.g.localStorage[t];return null!=e&&"true"===String(e).toLowerCase()}t.exports=function(t,e){if(r("noDeprecation"))return t;var n=!1;return function(){if(!n){if(r("throwDeprecation"))throw new Error(e);r("traceDeprecation")?console.trace(e):console.warn(e),n=!0}return t.apply(this,arguments)}}},9408:t=>{"use strict";t.exports=e},4547:e=>{"use strict";e.exports=t},2361:()=>{},4616:()=>{},7607:()=>{},803:()=>{},9547:()=>{}},r={};function i(t){var e=r[t];if(void 0!==e)return e.exports;var o=r[t]={id:t,loaded:!1,exports:{}};return n[t].call(o.exports,o,o.exports,i),o.loaded=!0,o.exports}return i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),i.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),i(3607)})()}));

/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



const base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js")
const ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js")
const customInspectSymbol =
  (typeof Symbol === 'function' && typeof Symbol['for'] === 'function') // eslint-disable-line dot-notation
    ? Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
    : null

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

const K_MAX_LENGTH = 0x7fffffff
exports.kMaxLength = K_MAX_LENGTH

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */
Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()

if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
    typeof console.error === 'function') {
  console.error(
    'This browser lacks typed array (Uint8Array) support which is required by ' +
    '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
  )
}

function typedArraySupport () {
  // Can typed array instances can be augmented?
  try {
    const arr = new Uint8Array(1)
    const proto = { foo: function () { return 42 } }
    Object.setPrototypeOf(proto, Uint8Array.prototype)
    Object.setPrototypeOf(arr, proto)
    return arr.foo() === 42
  } catch (e) {
    return false
  }
}

Object.defineProperty(Buffer.prototype, 'parent', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.buffer
  }
})

Object.defineProperty(Buffer.prototype, 'offset', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.byteOffset
  }
})

function createBuffer (length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('The value "' + length + '" is invalid for option "size"')
  }
  // Return an augmented `Uint8Array` instance
  const buf = new Uint8Array(length)
  Object.setPrototypeOf(buf, Buffer.prototype)
  return buf
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new TypeError(
        'The "string" argument must be of type string. Received type number'
      )
    }
    return allocUnsafe(arg)
  }
  return from(arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

function from (value, encodingOrOffset, length) {
  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  if (ArrayBuffer.isView(value)) {
    return fromArrayView(value)
  }

  if (value == null) {
    throw new TypeError(
      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
      'or Array-like Object. Received type ' + (typeof value)
    )
  }

  if (isInstance(value, ArrayBuffer) ||
      (value && isInstance(value.buffer, ArrayBuffer))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof SharedArrayBuffer !== 'undefined' &&
      (isInstance(value, SharedArrayBuffer) ||
      (value && isInstance(value.buffer, SharedArrayBuffer)))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'number') {
    throw new TypeError(
      'The "value" argument must not be of type number. Received type number'
    )
  }

  const valueOf = value.valueOf && value.valueOf()
  if (valueOf != null && valueOf !== value) {
    return Buffer.from(valueOf, encodingOrOffset, length)
  }

  const b = fromObject(value)
  if (b) return b

  if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null &&
      typeof value[Symbol.toPrimitive] === 'function') {
    return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length)
  }

  throw new TypeError(
    'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
    'or Array-like Object. Received type ' + (typeof value)
  )
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length)
}

// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype)
Object.setPrototypeOf(Buffer, Uint8Array)

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be of type number')
  } else if (size < 0) {
    throw new RangeError('The value "' + size + '" is invalid for option "size"')
  }
}

function alloc (size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(size).fill(fill, encoding)
      : createBuffer(size).fill(fill)
  }
  return createBuffer(size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(size, fill, encoding)
}

function allocUnsafe (size) {
  assertSize(size)
  return createBuffer(size < 0 ? 0 : checked(size) | 0)
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(size)
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('Unknown encoding: ' + encoding)
  }

  const length = byteLength(string, encoding) | 0
  let buf = createBuffer(length)

  const actual = buf.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual)
  }

  return buf
}

function fromArrayLike (array) {
  const length = array.length < 0 ? 0 : checked(array.length) | 0
  const buf = createBuffer(length)
  for (let i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}

function fromArrayView (arrayView) {
  if (isInstance(arrayView, Uint8Array)) {
    const copy = new Uint8Array(arrayView)
    return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength)
  }
  return fromArrayLike(arrayView)
}

function fromArrayBuffer (array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('"offset" is outside of buffer bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('"length" is outside of buffer bounds')
  }

  let buf
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array)
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }

  // Return an augmented `Uint8Array` instance
  Object.setPrototypeOf(buf, Buffer.prototype)

  return buf
}

function fromObject (obj) {
  if (Buffer.isBuffer(obj)) {
    const len = checked(obj.length) | 0
    const buf = createBuffer(len)

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len)
    return buf
  }

  if (obj.length !== undefined) {
    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
      return createBuffer(0)
    }
    return fromArrayLike(obj)
  }

  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
    return fromArrayLike(obj.data)
  }
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return b != null && b._isBuffer === true &&
    b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
}

Buffer.compare = function compare (a, b) {
  if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength)
  if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength)
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError(
      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
    )
  }

  if (a === b) return 0

  let x = a.length
  let y = b.length

  for (let i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  let i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  const buffer = Buffer.allocUnsafe(length)
  let pos = 0
  for (i = 0; i < list.length; ++i) {
    let buf = list[i]
    if (isInstance(buf, Uint8Array)) {
      if (pos + buf.length > buffer.length) {
        if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf)
        buf.copy(buffer, pos)
      } else {
        Uint8Array.prototype.set.call(
          buffer,
          buf,
          pos
        )
      }
    } else if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    } else {
      buf.copy(buffer, pos)
    }
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    throw new TypeError(
      'The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' +
      'Received type ' + typeof string
    )
  }

  const len = string.length
  const mustMatch = (arguments.length > 2 && arguments[2] === true)
  if (!mustMatch && len === 0) return 0

  // Use a for loop to avoid recursion
  let loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) {
          return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
        }
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  let loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  const i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  const len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (let i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  const len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (let i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  const len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (let i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  const length = this.length
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.toLocaleString = Buffer.prototype.toString

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  let str = ''
  const max = exports.INSPECT_MAX_BYTES
  str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim()
  if (this.length > max) str += ' ... '
  return '<Buffer ' + str + '>'
}
if (customInspectSymbol) {
  Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (isInstance(target, Uint8Array)) {
    target = Buffer.from(target, target.offset, target.byteLength)
  }
  if (!Buffer.isBuffer(target)) {
    throw new TypeError(
      'The "target" argument must be one of type Buffer or Uint8Array. ' +
      'Received type ' + (typeof target)
    )
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  let x = thisEnd - thisStart
  let y = end - start
  const len = Math.min(x, y)

  const thisCopy = this.slice(thisStart, thisEnd)
  const targetCopy = target.slice(start, end)

  for (let i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset // Coerce to Number.
  if (numberIsNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  let indexSize = 1
  let arrLength = arr.length
  let valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  let i
  if (dir) {
    let foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      let found = true
      for (let j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  const remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  const strLen = string.length

  if (length > strLen / 2) {
    length = strLen / 2
  }
  let i
  for (i = 0; i < length; ++i) {
    const parsed = parseInt(string.substr(i * 2, 2), 16)
    if (numberIsNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset >>> 0
    if (isFinite(length)) {
      length = length >>> 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  const remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  let loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
      case 'latin1':
      case 'binary':
        return asciiWrite(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  const res = []

  let i = start
  while (i < end) {
    const firstByte = buf[i]
    let codePoint = null
    let bytesPerSequence = (firstByte > 0xEF)
      ? 4
      : (firstByte > 0xDF)
          ? 3
          : (firstByte > 0xBF)
              ? 2
              : 1

    if (i + bytesPerSequence <= end) {
      let secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
const MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  const len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  let res = ''
  let i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  let ret = ''
  end = Math.min(buf.length, end)

  for (let i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  let ret = ''
  end = Math.min(buf.length, end)

  for (let i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  const len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  let out = ''
  for (let i = start; i < end; ++i) {
    out += hexSliceLookupTable[buf[i]]
  }
  return out
}

function utf16leSlice (buf, start, end) {
  const bytes = buf.slice(start, end)
  let res = ''
  // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
  for (let i = 0; i < bytes.length - 1; i += 2) {
    res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  const len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  const newBuf = this.subarray(start, end)
  // Return an augmented `Uint8Array` instance
  Object.setPrototypeOf(newBuf, Buffer.prototype)

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUintLE =
Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  let val = this[offset]
  let mul = 1
  let i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUintBE =
Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  let val = this[offset + --byteLength]
  let mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUint8 =
Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUint16LE =
Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUint16BE =
Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUint32LE =
Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUint32BE =
Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE (offset) {
  offset = offset >>> 0
  validateNumber(offset, 'offset')
  const first = this[offset]
  const last = this[offset + 7]
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8)
  }

  const lo = first +
    this[++offset] * 2 ** 8 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 24

  const hi = this[++offset] +
    this[++offset] * 2 ** 8 +
    this[++offset] * 2 ** 16 +
    last * 2 ** 24

  return BigInt(lo) + (BigInt(hi) << BigInt(32))
})

Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE (offset) {
  offset = offset >>> 0
  validateNumber(offset, 'offset')
  const first = this[offset]
  const last = this[offset + 7]
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8)
  }

  const hi = first * 2 ** 24 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    this[++offset]

  const lo = this[++offset] * 2 ** 24 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    last

  return (BigInt(hi) << BigInt(32)) + BigInt(lo)
})

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  let val = this[offset]
  let mul = 1
  let i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  let i = byteLength
  let mul = 1
  let val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  const val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  const val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE (offset) {
  offset = offset >>> 0
  validateNumber(offset, 'offset')
  const first = this[offset]
  const last = this[offset + 7]
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8)
  }

  const val = this[offset + 4] +
    this[offset + 5] * 2 ** 8 +
    this[offset + 6] * 2 ** 16 +
    (last << 24) // Overflow

  return (BigInt(val) << BigInt(32)) +
    BigInt(first +
    this[++offset] * 2 ** 8 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 24)
})

Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE (offset) {
  offset = offset >>> 0
  validateNumber(offset, 'offset')
  const first = this[offset]
  const last = this[offset + 7]
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8)
  }

  const val = (first << 24) + // Overflow
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    this[++offset]

  return (BigInt(val) << BigInt(32)) +
    BigInt(this[++offset] * 2 ** 24 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    last)
})

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUintLE =
Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    const maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  let mul = 1
  let i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUintBE =
Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    const maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  let i = byteLength - 1
  let mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUint8 =
Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeUint16LE =
Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeUint16BE =
Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeUint32LE =
Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset + 3] = (value >>> 24)
  this[offset + 2] = (value >>> 16)
  this[offset + 1] = (value >>> 8)
  this[offset] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeUint32BE =
Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

function wrtBigUInt64LE (buf, value, offset, min, max) {
  checkIntBI(value, min, max, buf, offset, 7)

  let lo = Number(value & BigInt(0xffffffff))
  buf[offset++] = lo
  lo = lo >> 8
  buf[offset++] = lo
  lo = lo >> 8
  buf[offset++] = lo
  lo = lo >> 8
  buf[offset++] = lo
  let hi = Number(value >> BigInt(32) & BigInt(0xffffffff))
  buf[offset++] = hi
  hi = hi >> 8
  buf[offset++] = hi
  hi = hi >> 8
  buf[offset++] = hi
  hi = hi >> 8
  buf[offset++] = hi
  return offset
}

function wrtBigUInt64BE (buf, value, offset, min, max) {
  checkIntBI(value, min, max, buf, offset, 7)

  let lo = Number(value & BigInt(0xffffffff))
  buf[offset + 7] = lo
  lo = lo >> 8
  buf[offset + 6] = lo
  lo = lo >> 8
  buf[offset + 5] = lo
  lo = lo >> 8
  buf[offset + 4] = lo
  let hi = Number(value >> BigInt(32) & BigInt(0xffffffff))
  buf[offset + 3] = hi
  hi = hi >> 8
  buf[offset + 2] = hi
  hi = hi >> 8
  buf[offset + 1] = hi
  hi = hi >> 8
  buf[offset] = hi
  return offset + 8
}

Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE (value, offset = 0) {
  return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'))
})

Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE (value, offset = 0) {
  return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'))
})

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    const limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  let i = 0
  let mul = 1
  let sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    const limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  let i = byteLength - 1
  let mul = 1
  let sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  this[offset + 2] = (value >>> 16)
  this[offset + 3] = (value >>> 24)
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE (value, offset = 0) {
  return wrtBigUInt64LE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'))
})

Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE (value, offset = 0) {
  return wrtBigUInt64BE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'))
})

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer')
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('Index out of range')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  const len = end - start

  if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
    // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end)
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, end),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
    if (val.length === 1) {
      const code = val.charCodeAt(0)
      if ((encoding === 'utf8' && code < 128) ||
          encoding === 'latin1') {
        // Fast path: If `val` fits into a single byte, use that numeric value.
        val = code
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255
  } else if (typeof val === 'boolean') {
    val = Number(val)
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  let i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    const bytes = Buffer.isBuffer(val)
      ? val
      : Buffer.from(val, encoding)
    const len = bytes.length
    if (len === 0) {
      throw new TypeError('The value "' + val +
        '" is invalid for argument "value"')
    }
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// CUSTOM ERRORS
// =============

// Simplified versions from Node, changed for Buffer-only usage
const errors = {}
function E (sym, getMessage, Base) {
  errors[sym] = class NodeError extends Base {
    constructor () {
      super()

      Object.defineProperty(this, 'message', {
        value: getMessage.apply(this, arguments),
        writable: true,
        configurable: true
      })

      // Add the error code to the name to include it in the stack trace.
      this.name = `${this.name} [${sym}]`
      // Access the stack to generate the error message including the error code
      // from the name.
      this.stack // eslint-disable-line no-unused-expressions
      // Reset the name to the actual name.
      delete this.name
    }

    get code () {
      return sym
    }

    set code (value) {
      Object.defineProperty(this, 'code', {
        configurable: true,
        enumerable: true,
        value,
        writable: true
      })
    }

    toString () {
      return `${this.name} [${sym}]: ${this.message}`
    }
  }
}

E('ERR_BUFFER_OUT_OF_BOUNDS',
  function (name) {
    if (name) {
      return `${name} is outside of buffer bounds`
    }

    return 'Attempt to access memory outside buffer bounds'
  }, RangeError)
E('ERR_INVALID_ARG_TYPE',
  function (name, actual) {
    return `The "${name}" argument must be of type number. Received type ${typeof actual}`
  }, TypeError)
E('ERR_OUT_OF_RANGE',
  function (str, range, input) {
    let msg = `The value of "${str}" is out of range.`
    let received = input
    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
      received = addNumericalSeparator(String(input))
    } else if (typeof input === 'bigint') {
      received = String(input)
      if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
        received = addNumericalSeparator(received)
      }
      received += 'n'
    }
    msg += ` It must be ${range}. Received ${received}`
    return msg
  }, RangeError)

function addNumericalSeparator (val) {
  let res = ''
  let i = val.length
  const start = val[0] === '-' ? 1 : 0
  for (; i >= start + 4; i -= 3) {
    res = `_${val.slice(i - 3, i)}${res}`
  }
  return `${val.slice(0, i)}${res}`
}

// CHECK FUNCTIONS
// ===============

function checkBounds (buf, offset, byteLength) {
  validateNumber(offset, 'offset')
  if (buf[offset] === undefined || buf[offset + byteLength] === undefined) {
    boundsError(offset, buf.length - (byteLength + 1))
  }
}

function checkIntBI (value, min, max, buf, offset, byteLength) {
  if (value > max || value < min) {
    const n = typeof min === 'bigint' ? 'n' : ''
    let range
    if (byteLength > 3) {
      if (min === 0 || min === BigInt(0)) {
        range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`
      } else {
        range = `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and < 2 ** ` +
                `${(byteLength + 1) * 8 - 1}${n}`
      }
    } else {
      range = `>= ${min}${n} and <= ${max}${n}`
    }
    throw new errors.ERR_OUT_OF_RANGE('value', range, value)
  }
  checkBounds(buf, offset, byteLength)
}

function validateNumber (value, name) {
  if (typeof value !== 'number') {
    throw new errors.ERR_INVALID_ARG_TYPE(name, 'number', value)
  }
}

function boundsError (value, length, type) {
  if (Math.floor(value) !== value) {
    validateNumber(value, type)
    throw new errors.ERR_OUT_OF_RANGE(type || 'offset', 'an integer', value)
  }

  if (length < 0) {
    throw new errors.ERR_BUFFER_OUT_OF_BOUNDS()
  }

  throw new errors.ERR_OUT_OF_RANGE(type || 'offset',
                                    `>= ${type ? 1 : 0} and <= ${length}`,
                                    value)
}

// HELPER FUNCTIONS
// ================

const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node takes equal signs as end of the Base64 encoding
  str = str.split('=')[0]
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = str.trim().replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  let codePoint
  const length = string.length
  let leadSurrogate = null
  const bytes = []

  for (let i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  const byteArray = []
  for (let i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  let c, hi, lo
  const byteArray = []
  for (let i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  let i
  for (i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance (obj, type) {
  return obj instanceof type ||
    (obj != null && obj.constructor != null && obj.constructor.name != null &&
      obj.constructor.name === type.name)
}
function numberIsNaN (obj) {
  // For IE11 support
  return obj !== obj // eslint-disable-line no-self-compare
}

// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const hexSliceLookupTable = (function () {
  const alphabet = '0123456789abcdef'
  const table = new Array(256)
  for (let i = 0; i < 16; ++i) {
    const i16 = i * 16
    for (let j = 0; j < 16; ++j) {
      table[i16 + j] = alphabet[i] + alphabet[j]
    }
  }
  return table
})()

// Return not function with Error if BigInt not supported
function defineBigIntMethod (fn) {
  return typeof BigInt === 'undefined' ? BufferBigIntNotDefined : fn
}

function BufferBigIntNotDefined () {
  throw new Error('BigInt not supported')
}


/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/jszip/dist/jszip.min.js":
/*!**********************************************!*\
  !*** ./node_modules/jszip/dist/jszip.min.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/

!function(e){if(true)module.exports=e();else {}}(function(){return function s(a,o,h){function u(r,e){if(!o[r]){if(!a[r]){var t=undefined;if(!e&&t)return require(r,!0);if(l)return l(r,!0);var n=new Error("Cannot find module '"+r+"'");throw n.code="MODULE_NOT_FOUND",n}var i=o[r]={exports:{}};a[r][0].call(i.exports,function(e){var t=a[r][1][e];return u(t||e)},i,i.exports,s,a,o,h)}return o[r].exports}for(var l=undefined,e=0;e<h.length;e++)u(h[e]);return u}({1:[function(e,t,r){"use strict";var d=e("./utils"),c=e("./support"),p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(e){for(var t,r,n,i,s,a,o,h=[],u=0,l=e.length,f=l,c="string"!==d.getTypeOf(e);u<e.length;)f=l-u,n=c?(t=e[u++],r=u<l?e[u++]:0,u<l?e[u++]:0):(t=e.charCodeAt(u++),r=u<l?e.charCodeAt(u++):0,u<l?e.charCodeAt(u++):0),i=t>>2,s=(3&t)<<4|r>>4,a=1<f?(15&r)<<2|n>>6:64,o=2<f?63&n:64,h.push(p.charAt(i)+p.charAt(s)+p.charAt(a)+p.charAt(o));return h.join("")},r.decode=function(e){var t,r,n,i,s,a,o=0,h=0,u="data:";if(e.substr(0,u.length)===u)throw new Error("Invalid base64 input, it looks like a data url.");var l,f=3*(e=e.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(e.charAt(e.length-1)===p.charAt(64)&&f--,e.charAt(e.length-2)===p.charAt(64)&&f--,f%1!=0)throw new Error("Invalid base64 input, bad content length.");for(l=c.uint8array?new Uint8Array(0|f):new Array(0|f);o<e.length;)t=p.indexOf(e.charAt(o++))<<2|(i=p.indexOf(e.charAt(o++)))>>4,r=(15&i)<<4|(s=p.indexOf(e.charAt(o++)))>>2,n=(3&s)<<6|(a=p.indexOf(e.charAt(o++))),l[h++]=t,64!==s&&(l[h++]=r),64!==a&&(l[h++]=n);return l}},{"./support":30,"./utils":32}],2:[function(e,t,r){"use strict";var n=e("./external"),i=e("./stream/DataWorker"),s=e("./stream/Crc32Probe"),a=e("./stream/DataLengthProbe");function o(e,t,r,n,i){this.compressedSize=e,this.uncompressedSize=t,this.crc32=r,this.compression=n,this.compressedContent=i}o.prototype={getContentWorker:function(){var e=new i(n.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new a("data_length")),t=this;return e.on("end",function(){if(this.streamInfo.data_length!==t.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),e},getCompressedWorker:function(){return new i(n.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},o.createWorkerFrom=function(e,t,r){return e.pipe(new s).pipe(new a("uncompressedSize")).pipe(t.compressWorker(r)).pipe(new a("compressedSize")).withStreamInfo("compression",t)},t.exports=o},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,t,r){"use strict";var n=e("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(){return new n("STORE compression")},uncompressWorker:function(){return new n("STORE decompression")}},r.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,t,r){"use strict";var n=e("./utils");var o=function(){for(var e,t=[],r=0;r<256;r++){e=r;for(var n=0;n<8;n++)e=1&e?3988292384^e>>>1:e>>>1;t[r]=e}return t}();t.exports=function(e,t){return void 0!==e&&e.length?"string"!==n.getTypeOf(e)?function(e,t,r,n){var i=o,s=n+r;e^=-1;for(var a=n;a<s;a++)e=e>>>8^i[255&(e^t[a])];return-1^e}(0|t,e,e.length,0):function(e,t,r,n){var i=o,s=n+r;e^=-1;for(var a=n;a<s;a++)e=e>>>8^i[255&(e^t.charCodeAt(a))];return-1^e}(0|t,e,e.length,0):0}},{"./utils":32}],5:[function(e,t,r){"use strict";r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(e,t,r){"use strict";var n=null;n="undefined"!=typeof Promise?Promise:e("lie"),t.exports={Promise:n}},{lie:37}],7:[function(e,t,r){"use strict";var n="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Uint32Array,i=e("pako"),s=e("./utils"),a=e("./stream/GenericWorker"),o=n?"uint8array":"array";function h(e,t){a.call(this,"FlateWorker/"+e),this._pako=null,this._pakoAction=e,this._pakoOptions=t,this.meta={}}r.magic="\b\0",s.inherits(h,a),h.prototype.processChunk=function(e){this.meta=e.meta,null===this._pako&&this._createPako(),this._pako.push(s.transformTo(o,e.data),!1)},h.prototype.flush=function(){a.prototype.flush.call(this),null===this._pako&&this._createPako(),this._pako.push([],!0)},h.prototype.cleanUp=function(){a.prototype.cleanUp.call(this),this._pako=null},h.prototype._createPako=function(){this._pako=new i[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var t=this;this._pako.onData=function(e){t.push({data:e,meta:t.meta})}},r.compressWorker=function(e){return new h("Deflate",e)},r.uncompressWorker=function(){return new h("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,t,r){"use strict";function A(e,t){var r,n="";for(r=0;r<t;r++)n+=String.fromCharCode(255&e),e>>>=8;return n}function n(e,t,r,n,i,s){var a,o,h=e.file,u=e.compression,l=s!==O.utf8encode,f=I.transformTo("string",s(h.name)),c=I.transformTo("string",O.utf8encode(h.name)),d=h.comment,p=I.transformTo("string",s(d)),m=I.transformTo("string",O.utf8encode(d)),_=c.length!==h.name.length,g=m.length!==d.length,b="",v="",y="",w=h.dir,k=h.date,x={crc32:0,compressedSize:0,uncompressedSize:0};t&&!r||(x.crc32=e.crc32,x.compressedSize=e.compressedSize,x.uncompressedSize=e.uncompressedSize);var S=0;t&&(S|=8),l||!_&&!g||(S|=2048);var z=0,C=0;w&&(z|=16),"UNIX"===i?(C=798,z|=function(e,t){var r=e;return e||(r=t?16893:33204),(65535&r)<<16}(h.unixPermissions,w)):(C=20,z|=function(e){return 63&(e||0)}(h.dosPermissions)),a=k.getUTCHours(),a<<=6,a|=k.getUTCMinutes(),a<<=5,a|=k.getUTCSeconds()/2,o=k.getUTCFullYear()-1980,o<<=4,o|=k.getUTCMonth()+1,o<<=5,o|=k.getUTCDate(),_&&(v=A(1,1)+A(B(f),4)+c,b+="up"+A(v.length,2)+v),g&&(y=A(1,1)+A(B(p),4)+m,b+="uc"+A(y.length,2)+y);var E="";return E+="\n\0",E+=A(S,2),E+=u.magic,E+=A(a,2),E+=A(o,2),E+=A(x.crc32,4),E+=A(x.compressedSize,4),E+=A(x.uncompressedSize,4),E+=A(f.length,2),E+=A(b.length,2),{fileRecord:R.LOCAL_FILE_HEADER+E+f+b,dirRecord:R.CENTRAL_FILE_HEADER+A(C,2)+E+A(p.length,2)+"\0\0\0\0"+A(z,4)+A(n,4)+f+b+p}}var I=e("../utils"),i=e("../stream/GenericWorker"),O=e("../utf8"),B=e("../crc32"),R=e("../signature");function s(e,t,r,n){i.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=t,this.zipPlatform=r,this.encodeFileName=n,this.streamFiles=e,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}I.inherits(s,i),s.prototype.push=function(e){var t=e.meta.percent||0,r=this.entriesCount,n=this._sources.length;this.accumulate?this.contentBuffer.push(e):(this.bytesWritten+=e.data.length,i.prototype.push.call(this,{data:e.data,meta:{currentFile:this.currentFile,percent:r?(t+100*(r-n-1))/r:100}}))},s.prototype.openedSource=function(e){this.currentSourceOffset=this.bytesWritten,this.currentFile=e.file.name;var t=this.streamFiles&&!e.file.dir;if(t){var r=n(e,t,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:r.fileRecord,meta:{percent:0}})}else this.accumulate=!0},s.prototype.closedSource=function(e){this.accumulate=!1;var t=this.streamFiles&&!e.file.dir,r=n(e,t,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(r.dirRecord),t)this.push({data:function(e){return R.DATA_DESCRIPTOR+A(e.crc32,4)+A(e.compressedSize,4)+A(e.uncompressedSize,4)}(e),meta:{percent:100}});else for(this.push({data:r.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},s.prototype.flush=function(){for(var e=this.bytesWritten,t=0;t<this.dirRecords.length;t++)this.push({data:this.dirRecords[t],meta:{percent:100}});var r=this.bytesWritten-e,n=function(e,t,r,n,i){var s=I.transformTo("string",i(n));return R.CENTRAL_DIRECTORY_END+"\0\0\0\0"+A(e,2)+A(e,2)+A(t,4)+A(r,4)+A(s.length,2)+s}(this.dirRecords.length,r,e,this.zipComment,this.encodeFileName);this.push({data:n,meta:{percent:100}})},s.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},s.prototype.registerPrevious=function(e){this._sources.push(e);var t=this;return e.on("data",function(e){t.processChunk(e)}),e.on("end",function(){t.closedSource(t.previous.streamInfo),t._sources.length?t.prepareNextSource():t.end()}),e.on("error",function(e){t.error(e)}),this},s.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},s.prototype.error=function(e){var t=this._sources;if(!i.prototype.error.call(this,e))return!1;for(var r=0;r<t.length;r++)try{t[r].error(e)}catch(e){}return!0},s.prototype.lock=function(){i.prototype.lock.call(this);for(var e=this._sources,t=0;t<e.length;t++)e[t].lock()},t.exports=s},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,t,r){"use strict";var u=e("../compressions"),n=e("./ZipFileWorker");r.generateWorker=function(e,a,t){var o=new n(a.streamFiles,t,a.platform,a.encodeFileName),h=0;try{e.forEach(function(e,t){h++;var r=function(e,t){var r=e||t,n=u[r];if(!n)throw new Error(r+" is not a valid compression method !");return n}(t.options.compression,a.compression),n=t.options.compressionOptions||a.compressionOptions||{},i=t.dir,s=t.date;t._compressWorker(r,n).withStreamInfo("file",{name:e,dir:i,date:s,comment:t.comment||"",unixPermissions:t.unixPermissions,dosPermissions:t.dosPermissions}).pipe(o)}),o.entriesCount=h}catch(e){o.error(e)}return o}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,t,r){"use strict";function n(){if(!(this instanceof n))return new n;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var e=new n;for(var t in this)"function"!=typeof this[t]&&(e[t]=this[t]);return e}}(n.prototype=e("./object")).loadAsync=e("./load"),n.support=e("./support"),n.defaults=e("./defaults"),n.version="3.10.1",n.loadAsync=function(e,t){return(new n).loadAsync(e,t)},n.external=e("./external"),t.exports=n},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,t,r){"use strict";var u=e("./utils"),i=e("./external"),n=e("./utf8"),s=e("./zipEntries"),a=e("./stream/Crc32Probe"),l=e("./nodejsUtils");function f(n){return new i.Promise(function(e,t){var r=n.decompressed.getContentWorker().pipe(new a);r.on("error",function(e){t(e)}).on("end",function(){r.streamInfo.crc32!==n.decompressed.crc32?t(new Error("Corrupted zip : CRC32 mismatch")):e()}).resume()})}t.exports=function(e,o){var h=this;return o=u.extend(o||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:n.utf8decode}),l.isNode&&l.isStream(e)?i.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):u.prepareContent("the loaded zip file",e,!0,o.optimizedBinaryString,o.base64).then(function(e){var t=new s(o);return t.load(e),t}).then(function(e){var t=[i.Promise.resolve(e)],r=e.files;if(o.checkCRC32)for(var n=0;n<r.length;n++)t.push(f(r[n]));return i.Promise.all(t)}).then(function(e){for(var t=e.shift(),r=t.files,n=0;n<r.length;n++){var i=r[n],s=i.fileNameStr,a=u.resolve(i.fileNameStr);h.file(a,i.decompressed,{binary:!0,optimizedBinaryString:!0,date:i.date,dir:i.dir,comment:i.fileCommentStr.length?i.fileCommentStr:null,unixPermissions:i.unixPermissions,dosPermissions:i.dosPermissions,createFolders:o.createFolders}),i.dir||(h.file(a).unsafeOriginalName=s)}return t.zipComment.length&&(h.comment=t.zipComment),h})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,t,r){"use strict";var n=e("../utils"),i=e("../stream/GenericWorker");function s(e,t){i.call(this,"Nodejs stream input adapter for "+e),this._upstreamEnded=!1,this._bindStream(t)}n.inherits(s,i),s.prototype._bindStream=function(e){var t=this;(this._stream=e).pause(),e.on("data",function(e){t.push({data:e,meta:{percent:0}})}).on("error",function(e){t.isPaused?this.generatedError=e:t.error(e)}).on("end",function(){t.isPaused?t._upstreamEnded=!0:t.end()})},s.prototype.pause=function(){return!!i.prototype.pause.call(this)&&(this._stream.pause(),!0)},s.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},t.exports=s},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,t,r){"use strict";var i=e("readable-stream").Readable;function n(e,t,r){i.call(this,t),this._helper=e;var n=this;e.on("data",function(e,t){n.push(e)||n._helper.pause(),r&&r(t)}).on("error",function(e){n.emit("error",e)}).on("end",function(){n.push(null)})}e("../utils").inherits(n,i),n.prototype._read=function(){this._helper.resume()},t.exports=n},{"../utils":32,"readable-stream":16}],14:[function(e,t,r){"use strict";t.exports={isNode:"undefined"!=typeof Buffer,newBufferFrom:function(e,t){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(e,t);if("number"==typeof e)throw new Error('The "data" argument must not be a number');return new Buffer(e,t)},allocBuffer:function(e){if(Buffer.alloc)return Buffer.alloc(e);var t=new Buffer(e);return t.fill(0),t},isBuffer:function(e){return Buffer.isBuffer(e)},isStream:function(e){return e&&"function"==typeof e.on&&"function"==typeof e.pause&&"function"==typeof e.resume}}},{}],15:[function(e,t,r){"use strict";function s(e,t,r){var n,i=u.getTypeOf(t),s=u.extend(r||{},f);s.date=s.date||new Date,null!==s.compression&&(s.compression=s.compression.toUpperCase()),"string"==typeof s.unixPermissions&&(s.unixPermissions=parseInt(s.unixPermissions,8)),s.unixPermissions&&16384&s.unixPermissions&&(s.dir=!0),s.dosPermissions&&16&s.dosPermissions&&(s.dir=!0),s.dir&&(e=g(e)),s.createFolders&&(n=_(e))&&b.call(this,n,!0);var a="string"===i&&!1===s.binary&&!1===s.base64;r&&void 0!==r.binary||(s.binary=!a),(t instanceof c&&0===t.uncompressedSize||s.dir||!t||0===t.length)&&(s.base64=!1,s.binary=!0,t="",s.compression="STORE",i="string");var o=null;o=t instanceof c||t instanceof l?t:p.isNode&&p.isStream(t)?new m(e,t):u.prepareContent(e,t,s.binary,s.optimizedBinaryString,s.base64);var h=new d(e,o,s);this.files[e]=h}var i=e("./utf8"),u=e("./utils"),l=e("./stream/GenericWorker"),a=e("./stream/StreamHelper"),f=e("./defaults"),c=e("./compressedObject"),d=e("./zipObject"),o=e("./generate"),p=e("./nodejsUtils"),m=e("./nodejs/NodejsStreamInputAdapter"),_=function(e){"/"===e.slice(-1)&&(e=e.substring(0,e.length-1));var t=e.lastIndexOf("/");return 0<t?e.substring(0,t):""},g=function(e){return"/"!==e.slice(-1)&&(e+="/"),e},b=function(e,t){return t=void 0!==t?t:f.createFolders,e=g(e),this.files[e]||s.call(this,e,null,{dir:!0,createFolders:t}),this.files[e]};function h(e){return"[object RegExp]"===Object.prototype.toString.call(e)}var n={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(e){var t,r,n;for(t in this.files)n=this.files[t],(r=t.slice(this.root.length,t.length))&&t.slice(0,this.root.length)===this.root&&e(r,n)},filter:function(r){var n=[];return this.forEach(function(e,t){r(e,t)&&n.push(t)}),n},file:function(e,t,r){if(1!==arguments.length)return e=this.root+e,s.call(this,e,t,r),this;if(h(e)){var n=e;return this.filter(function(e,t){return!t.dir&&n.test(e)})}var i=this.files[this.root+e];return i&&!i.dir?i:null},folder:function(r){if(!r)return this;if(h(r))return this.filter(function(e,t){return t.dir&&r.test(e)});var e=this.root+r,t=b.call(this,e),n=this.clone();return n.root=t.name,n},remove:function(r){r=this.root+r;var e=this.files[r];if(e||("/"!==r.slice(-1)&&(r+="/"),e=this.files[r]),e&&!e.dir)delete this.files[r];else for(var t=this.filter(function(e,t){return t.name.slice(0,r.length)===r}),n=0;n<t.length;n++)delete this.files[t[n].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(e){var t,r={};try{if((r=u.extend(e||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:i.utf8encode})).type=r.type.toLowerCase(),r.compression=r.compression.toUpperCase(),"binarystring"===r.type&&(r.type="string"),!r.type)throw new Error("No output type specified.");u.checkSupport(r.type),"darwin"!==r.platform&&"freebsd"!==r.platform&&"linux"!==r.platform&&"sunos"!==r.platform||(r.platform="UNIX"),"win32"===r.platform&&(r.platform="DOS");var n=r.comment||this.comment||"";t=o.generateWorker(this,r,n)}catch(e){(t=new l("error")).error(e)}return new a(t,r.type||"string",r.mimeType)},generateAsync:function(e,t){return this.generateInternalStream(e).accumulate(t)},generateNodeStream:function(e,t){return(e=e||{}).type||(e.type="nodebuffer"),this.generateInternalStream(e).toNodejsStream(t)}};t.exports=n},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,t,r){"use strict";t.exports=e("stream")},{stream:void 0}],17:[function(e,t,r){"use strict";var n=e("./DataReader");function i(e){n.call(this,e);for(var t=0;t<this.data.length;t++)e[t]=255&e[t]}e("../utils").inherits(i,n),i.prototype.byteAt=function(e){return this.data[this.zero+e]},i.prototype.lastIndexOfSignature=function(e){for(var t=e.charCodeAt(0),r=e.charCodeAt(1),n=e.charCodeAt(2),i=e.charCodeAt(3),s=this.length-4;0<=s;--s)if(this.data[s]===t&&this.data[s+1]===r&&this.data[s+2]===n&&this.data[s+3]===i)return s-this.zero;return-1},i.prototype.readAndCheckSignature=function(e){var t=e.charCodeAt(0),r=e.charCodeAt(1),n=e.charCodeAt(2),i=e.charCodeAt(3),s=this.readData(4);return t===s[0]&&r===s[1]&&n===s[2]&&i===s[3]},i.prototype.readData=function(e){if(this.checkOffset(e),0===e)return[];var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./DataReader":18}],18:[function(e,t,r){"use strict";var n=e("../utils");function i(e){this.data=e,this.length=e.length,this.index=0,this.zero=0}i.prototype={checkOffset:function(e){this.checkIndex(this.index+e)},checkIndex:function(e){if(this.length<this.zero+e||e<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+e+"). Corrupted zip ?")},setIndex:function(e){this.checkIndex(e),this.index=e},skip:function(e){this.setIndex(this.index+e)},byteAt:function(){},readInt:function(e){var t,r=0;for(this.checkOffset(e),t=this.index+e-1;t>=this.index;t--)r=(r<<8)+this.byteAt(t);return this.index+=e,r},readString:function(e){return n.transformTo("string",this.readData(e))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var e=this.readInt(4);return new Date(Date.UTC(1980+(e>>25&127),(e>>21&15)-1,e>>16&31,e>>11&31,e>>5&63,(31&e)<<1))}},t.exports=i},{"../utils":32}],19:[function(e,t,r){"use strict";var n=e("./Uint8ArrayReader");function i(e){n.call(this,e)}e("../utils").inherits(i,n),i.prototype.readData=function(e){this.checkOffset(e);var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,t,r){"use strict";var n=e("./DataReader");function i(e){n.call(this,e)}e("../utils").inherits(i,n),i.prototype.byteAt=function(e){return this.data.charCodeAt(this.zero+e)},i.prototype.lastIndexOfSignature=function(e){return this.data.lastIndexOf(e)-this.zero},i.prototype.readAndCheckSignature=function(e){return e===this.readData(4)},i.prototype.readData=function(e){this.checkOffset(e);var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./DataReader":18}],21:[function(e,t,r){"use strict";var n=e("./ArrayReader");function i(e){n.call(this,e)}e("../utils").inherits(i,n),i.prototype.readData=function(e){if(this.checkOffset(e),0===e)return new Uint8Array(0);var t=this.data.subarray(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./ArrayReader":17}],22:[function(e,t,r){"use strict";var n=e("../utils"),i=e("../support"),s=e("./ArrayReader"),a=e("./StringReader"),o=e("./NodeBufferReader"),h=e("./Uint8ArrayReader");t.exports=function(e){var t=n.getTypeOf(e);return n.checkSupport(t),"string"!==t||i.uint8array?"nodebuffer"===t?new o(e):i.uint8array?new h(n.transformTo("uint8array",e)):new s(n.transformTo("array",e)):new a(e)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,t,r){"use strict";r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\b"},{}],24:[function(e,t,r){"use strict";var n=e("./GenericWorker"),i=e("../utils");function s(e){n.call(this,"ConvertWorker to "+e),this.destType=e}i.inherits(s,n),s.prototype.processChunk=function(e){this.push({data:i.transformTo(this.destType,e.data),meta:e.meta})},t.exports=s},{"../utils":32,"./GenericWorker":28}],25:[function(e,t,r){"use strict";var n=e("./GenericWorker"),i=e("../crc32");function s(){n.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}e("../utils").inherits(s,n),s.prototype.processChunk=function(e){this.streamInfo.crc32=i(e.data,this.streamInfo.crc32||0),this.push(e)},t.exports=s},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,t,r){"use strict";var n=e("../utils"),i=e("./GenericWorker");function s(e){i.call(this,"DataLengthProbe for "+e),this.propName=e,this.withStreamInfo(e,0)}n.inherits(s,i),s.prototype.processChunk=function(e){if(e){var t=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=t+e.data.length}i.prototype.processChunk.call(this,e)},t.exports=s},{"../utils":32,"./GenericWorker":28}],27:[function(e,t,r){"use strict";var n=e("../utils"),i=e("./GenericWorker");function s(e){i.call(this,"DataWorker");var t=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,e.then(function(e){t.dataIsReady=!0,t.data=e,t.max=e&&e.length||0,t.type=n.getTypeOf(e),t.isPaused||t._tickAndRepeat()},function(e){t.error(e)})}n.inherits(s,i),s.prototype.cleanUp=function(){i.prototype.cleanUp.call(this),this.data=null},s.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,n.delay(this._tickAndRepeat,[],this)),!0)},s.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(n.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},s.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var e=null,t=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":e=this.data.substring(this.index,t);break;case"uint8array":e=this.data.subarray(this.index,t);break;case"array":case"nodebuffer":e=this.data.slice(this.index,t)}return this.index=t,this.push({data:e,meta:{percent:this.max?this.index/this.max*100:0}})},t.exports=s},{"../utils":32,"./GenericWorker":28}],28:[function(e,t,r){"use strict";function n(e){this.name=e||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}n.prototype={push:function(e){this.emit("data",e)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(e){this.emit("error",e)}return!0},error:function(e){return!this.isFinished&&(this.isPaused?this.generatedError=e:(this.isFinished=!0,this.emit("error",e),this.previous&&this.previous.error(e),this.cleanUp()),!0)},on:function(e,t){return this._listeners[e].push(t),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(e,t){if(this._listeners[e])for(var r=0;r<this._listeners[e].length;r++)this._listeners[e][r].call(this,t)},pipe:function(e){return e.registerPrevious(this)},registerPrevious:function(e){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=e.streamInfo,this.mergeStreamInfo(),this.previous=e;var t=this;return e.on("data",function(e){t.processChunk(e)}),e.on("end",function(){t.end()}),e.on("error",function(e){t.error(e)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var e=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),e=!0),this.previous&&this.previous.resume(),!e},flush:function(){},processChunk:function(e){this.push(e)},withStreamInfo:function(e,t){return this.extraStreamInfo[e]=t,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var e in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,e)&&(this.streamInfo[e]=this.extraStreamInfo[e])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var e="Worker "+this.name;return this.previous?this.previous+" -> "+e:e}},t.exports=n},{}],29:[function(e,t,r){"use strict";var h=e("../utils"),i=e("./ConvertWorker"),s=e("./GenericWorker"),u=e("../base64"),n=e("../support"),a=e("../external"),o=null;if(n.nodestream)try{o=e("../nodejs/NodejsStreamOutputAdapter")}catch(e){}function l(e,o){return new a.Promise(function(t,r){var n=[],i=e._internalType,s=e._outputType,a=e._mimeType;e.on("data",function(e,t){n.push(e),o&&o(t)}).on("error",function(e){n=[],r(e)}).on("end",function(){try{var e=function(e,t,r){switch(e){case"blob":return h.newBlob(h.transformTo("arraybuffer",t),r);case"base64":return u.encode(t);default:return h.transformTo(e,t)}}(s,function(e,t){var r,n=0,i=null,s=0;for(r=0;r<t.length;r++)s+=t[r].length;switch(e){case"string":return t.join("");case"array":return Array.prototype.concat.apply([],t);case"uint8array":for(i=new Uint8Array(s),r=0;r<t.length;r++)i.set(t[r],n),n+=t[r].length;return i;case"nodebuffer":return Buffer.concat(t);default:throw new Error("concat : unsupported type '"+e+"'")}}(i,n),a);t(e)}catch(e){r(e)}n=[]}).resume()})}function f(e,t,r){var n=t;switch(t){case"blob":case"arraybuffer":n="uint8array";break;case"base64":n="string"}try{this._internalType=n,this._outputType=t,this._mimeType=r,h.checkSupport(n),this._worker=e.pipe(new i(n)),e.lock()}catch(e){this._worker=new s("error"),this._worker.error(e)}}f.prototype={accumulate:function(e){return l(this,e)},on:function(e,t){var r=this;return"data"===e?this._worker.on(e,function(e){t.call(r,e.data,e.meta)}):this._worker.on(e,function(){h.delay(t,arguments,r)}),this},resume:function(){return h.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(e){if(h.checkSupport("nodestream"),"nodebuffer"!==this._outputType)throw new Error(this._outputType+" is not supported by this method");return new o(this,{objectMode:"nodebuffer"!==this._outputType},e)}},t.exports=f},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,t,r){"use strict";if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array,r.nodebuffer="undefined"!=typeof Buffer,r.uint8array="undefined"!=typeof Uint8Array,"undefined"==typeof ArrayBuffer)r.blob=!1;else{var n=new ArrayBuffer(0);try{r.blob=0===new Blob([n],{type:"application/zip"}).size}catch(e){try{var i=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);i.append(n),r.blob=0===i.getBlob("application/zip").size}catch(e){r.blob=!1}}}try{r.nodestream=!!e("readable-stream").Readable}catch(e){r.nodestream=!1}},{"readable-stream":16}],31:[function(e,t,s){"use strict";for(var o=e("./utils"),h=e("./support"),r=e("./nodejsUtils"),n=e("./stream/GenericWorker"),u=new Array(256),i=0;i<256;i++)u[i]=252<=i?6:248<=i?5:240<=i?4:224<=i?3:192<=i?2:1;u[254]=u[254]=1;function a(){n.call(this,"utf-8 decode"),this.leftOver=null}function l(){n.call(this,"utf-8 encode")}s.utf8encode=function(e){return h.nodebuffer?r.newBufferFrom(e,"utf-8"):function(e){var t,r,n,i,s,a=e.length,o=0;for(i=0;i<a;i++)55296==(64512&(r=e.charCodeAt(i)))&&i+1<a&&56320==(64512&(n=e.charCodeAt(i+1)))&&(r=65536+(r-55296<<10)+(n-56320),i++),o+=r<128?1:r<2048?2:r<65536?3:4;for(t=h.uint8array?new Uint8Array(o):new Array(o),i=s=0;s<o;i++)55296==(64512&(r=e.charCodeAt(i)))&&i+1<a&&56320==(64512&(n=e.charCodeAt(i+1)))&&(r=65536+(r-55296<<10)+(n-56320),i++),r<128?t[s++]=r:(r<2048?t[s++]=192|r>>>6:(r<65536?t[s++]=224|r>>>12:(t[s++]=240|r>>>18,t[s++]=128|r>>>12&63),t[s++]=128|r>>>6&63),t[s++]=128|63&r);return t}(e)},s.utf8decode=function(e){return h.nodebuffer?o.transformTo("nodebuffer",e).toString("utf-8"):function(e){var t,r,n,i,s=e.length,a=new Array(2*s);for(t=r=0;t<s;)if((n=e[t++])<128)a[r++]=n;else if(4<(i=u[n]))a[r++]=65533,t+=i-1;else{for(n&=2===i?31:3===i?15:7;1<i&&t<s;)n=n<<6|63&e[t++],i--;1<i?a[r++]=65533:n<65536?a[r++]=n:(n-=65536,a[r++]=55296|n>>10&1023,a[r++]=56320|1023&n)}return a.length!==r&&(a.subarray?a=a.subarray(0,r):a.length=r),o.applyFromCharCode(a)}(e=o.transformTo(h.uint8array?"uint8array":"array",e))},o.inherits(a,n),a.prototype.processChunk=function(e){var t=o.transformTo(h.uint8array?"uint8array":"array",e.data);if(this.leftOver&&this.leftOver.length){if(h.uint8array){var r=t;(t=new Uint8Array(r.length+this.leftOver.length)).set(this.leftOver,0),t.set(r,this.leftOver.length)}else t=this.leftOver.concat(t);this.leftOver=null}var n=function(e,t){var r;for((t=t||e.length)>e.length&&(t=e.length),r=t-1;0<=r&&128==(192&e[r]);)r--;return r<0?t:0===r?t:r+u[e[r]]>t?r:t}(t),i=t;n!==t.length&&(h.uint8array?(i=t.subarray(0,n),this.leftOver=t.subarray(n,t.length)):(i=t.slice(0,n),this.leftOver=t.slice(n,t.length))),this.push({data:s.utf8decode(i),meta:e.meta})},a.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:s.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},s.Utf8DecodeWorker=a,o.inherits(l,n),l.prototype.processChunk=function(e){this.push({data:s.utf8encode(e.data),meta:e.meta})},s.Utf8EncodeWorker=l},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,t,a){"use strict";var o=e("./support"),h=e("./base64"),r=e("./nodejsUtils"),u=e("./external");function n(e){return e}function l(e,t){for(var r=0;r<e.length;++r)t[r]=255&e.charCodeAt(r);return t}e("setimmediate"),a.newBlob=function(t,r){a.checkSupport("blob");try{return new Blob([t],{type:r})}catch(e){try{var n=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return n.append(t),n.getBlob(r)}catch(e){throw new Error("Bug : can't construct the Blob.")}}};var i={stringifyByChunk:function(e,t,r){var n=[],i=0,s=e.length;if(s<=r)return String.fromCharCode.apply(null,e);for(;i<s;)"array"===t||"nodebuffer"===t?n.push(String.fromCharCode.apply(null,e.slice(i,Math.min(i+r,s)))):n.push(String.fromCharCode.apply(null,e.subarray(i,Math.min(i+r,s)))),i+=r;return n.join("")},stringifyByChar:function(e){for(var t="",r=0;r<e.length;r++)t+=String.fromCharCode(e[r]);return t},applyCanBeUsed:{uint8array:function(){try{return o.uint8array&&1===String.fromCharCode.apply(null,new Uint8Array(1)).length}catch(e){return!1}}(),nodebuffer:function(){try{return o.nodebuffer&&1===String.fromCharCode.apply(null,r.allocBuffer(1)).length}catch(e){return!1}}()}};function s(e){var t=65536,r=a.getTypeOf(e),n=!0;if("uint8array"===r?n=i.applyCanBeUsed.uint8array:"nodebuffer"===r&&(n=i.applyCanBeUsed.nodebuffer),n)for(;1<t;)try{return i.stringifyByChunk(e,r,t)}catch(e){t=Math.floor(t/2)}return i.stringifyByChar(e)}function f(e,t){for(var r=0;r<e.length;r++)t[r]=e[r];return t}a.applyFromCharCode=s;var c={};c.string={string:n,array:function(e){return l(e,new Array(e.length))},arraybuffer:function(e){return c.string.uint8array(e).buffer},uint8array:function(e){return l(e,new Uint8Array(e.length))},nodebuffer:function(e){return l(e,r.allocBuffer(e.length))}},c.array={string:s,array:n,arraybuffer:function(e){return new Uint8Array(e).buffer},uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return r.newBufferFrom(e)}},c.arraybuffer={string:function(e){return s(new Uint8Array(e))},array:function(e){return f(new Uint8Array(e),new Array(e.byteLength))},arraybuffer:n,uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return r.newBufferFrom(new Uint8Array(e))}},c.uint8array={string:s,array:function(e){return f(e,new Array(e.length))},arraybuffer:function(e){return e.buffer},uint8array:n,nodebuffer:function(e){return r.newBufferFrom(e)}},c.nodebuffer={string:s,array:function(e){return f(e,new Array(e.length))},arraybuffer:function(e){return c.nodebuffer.uint8array(e).buffer},uint8array:function(e){return f(e,new Uint8Array(e.length))},nodebuffer:n},a.transformTo=function(e,t){if(t=t||"",!e)return t;a.checkSupport(e);var r=a.getTypeOf(t);return c[r][e](t)},a.resolve=function(e){for(var t=e.split("/"),r=[],n=0;n<t.length;n++){var i=t[n];"."===i||""===i&&0!==n&&n!==t.length-1||(".."===i?r.pop():r.push(i))}return r.join("/")},a.getTypeOf=function(e){return"string"==typeof e?"string":"[object Array]"===Object.prototype.toString.call(e)?"array":o.nodebuffer&&r.isBuffer(e)?"nodebuffer":o.uint8array&&e instanceof Uint8Array?"uint8array":o.arraybuffer&&e instanceof ArrayBuffer?"arraybuffer":void 0},a.checkSupport=function(e){if(!o[e.toLowerCase()])throw new Error(e+" is not supported by this platform")},a.MAX_VALUE_16BITS=65535,a.MAX_VALUE_32BITS=-1,a.pretty=function(e){var t,r,n="";for(r=0;r<(e||"").length;r++)n+="\\x"+((t=e.charCodeAt(r))<16?"0":"")+t.toString(16).toUpperCase();return n},a.delay=function(e,t,r){setImmediate(function(){e.apply(r||null,t||[])})},a.inherits=function(e,t){function r(){}r.prototype=t.prototype,e.prototype=new r},a.extend=function(){var e,t,r={};for(e=0;e<arguments.length;e++)for(t in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],t)&&void 0===r[t]&&(r[t]=arguments[e][t]);return r},a.prepareContent=function(r,e,n,i,s){return u.Promise.resolve(e).then(function(n){return o.blob&&(n instanceof Blob||-1!==["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(n)))&&"undefined"!=typeof FileReader?new u.Promise(function(t,r){var e=new FileReader;e.onload=function(e){t(e.target.result)},e.onerror=function(e){r(e.target.error)},e.readAsArrayBuffer(n)}):n}).then(function(e){var t=a.getTypeOf(e);return t?("arraybuffer"===t?e=a.transformTo("uint8array",e):"string"===t&&(s?e=h.decode(e):n&&!0!==i&&(e=function(e){return l(e,o.uint8array?new Uint8Array(e.length):new Array(e.length))}(e))),e):u.Promise.reject(new Error("Can't read the data of '"+r+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,t,r){"use strict";var n=e("./reader/readerFor"),i=e("./utils"),s=e("./signature"),a=e("./zipEntry"),o=e("./support");function h(e){this.files=[],this.loadOptions=e}h.prototype={checkSignature:function(e){if(!this.reader.readAndCheckSignature(e)){this.reader.index-=4;var t=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+i.pretty(t)+", expected "+i.pretty(e)+")")}},isSignature:function(e,t){var r=this.reader.index;this.reader.setIndex(e);var n=this.reader.readString(4)===t;return this.reader.setIndex(r),n},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var e=this.reader.readData(this.zipCommentLength),t=o.uint8array?"uint8array":"array",r=i.transformTo(t,e);this.zipComment=this.loadOptions.decodeFileName(r)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var e,t,r,n=this.zip64EndOfCentralSize-44;0<n;)e=this.reader.readInt(2),t=this.reader.readInt(4),r=this.reader.readData(t),this.zip64ExtensibleData[e]={id:e,length:t,value:r}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var e,t;for(e=0;e<this.files.length;e++)t=this.files[e],this.reader.setIndex(t.localHeaderOffset),this.checkSignature(s.LOCAL_FILE_HEADER),t.readLocalPart(this.reader),t.handleUTF8(),t.processAttributes()},readCentralDir:function(){var e;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER);)(e=new a({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(e);if(this.centralDirRecords!==this.files.length&&0!==this.centralDirRecords&&0===this.files.length)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var e=this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);if(e<0)throw!this.isSignature(0,s.LOCAL_FILE_HEADER)?new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html"):new Error("Corrupted zip: can't find end of central directory");this.reader.setIndex(e);var t=e;if(this.checkSignature(s.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===i.MAX_VALUE_16BITS||this.diskWithCentralDirStart===i.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===i.MAX_VALUE_16BITS||this.centralDirRecords===i.MAX_VALUE_16BITS||this.centralDirSize===i.MAX_VALUE_32BITS||this.centralDirOffset===i.MAX_VALUE_32BITS){if(this.zip64=!0,(e=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(e),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,s.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var r=this.centralDirOffset+this.centralDirSize;this.zip64&&(r+=20,r+=12+this.zip64EndOfCentralSize);var n=t-r;if(0<n)this.isSignature(t,s.CENTRAL_FILE_HEADER)||(this.reader.zero=n);else if(n<0)throw new Error("Corrupted zip: missing "+Math.abs(n)+" bytes.")},prepareReader:function(e){this.reader=n(e)},load:function(e){this.prepareReader(e),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},t.exports=h},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,t,r){"use strict";var n=e("./reader/readerFor"),s=e("./utils"),i=e("./compressedObject"),a=e("./crc32"),o=e("./utf8"),h=e("./compressions"),u=e("./support");function l(e,t){this.options=e,this.loadOptions=t}l.prototype={isEncrypted:function(){return 1==(1&this.bitFlag)},useUTF8:function(){return 2048==(2048&this.bitFlag)},readLocalPart:function(e){var t,r;if(e.skip(22),this.fileNameLength=e.readInt(2),r=e.readInt(2),this.fileName=e.readData(this.fileNameLength),e.skip(r),-1===this.compressedSize||-1===this.uncompressedSize)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if(null===(t=function(e){for(var t in h)if(Object.prototype.hasOwnProperty.call(h,t)&&h[t].magic===e)return h[t];return null}(this.compressionMethod)))throw new Error("Corrupted zip : compression "+s.pretty(this.compressionMethod)+" unknown (inner file : "+s.transformTo("string",this.fileName)+")");this.decompressed=new i(this.compressedSize,this.uncompressedSize,this.crc32,t,e.readData(this.compressedSize))},readCentralPart:function(e){this.versionMadeBy=e.readInt(2),e.skip(2),this.bitFlag=e.readInt(2),this.compressionMethod=e.readString(2),this.date=e.readDate(),this.crc32=e.readInt(4),this.compressedSize=e.readInt(4),this.uncompressedSize=e.readInt(4);var t=e.readInt(2);if(this.extraFieldsLength=e.readInt(2),this.fileCommentLength=e.readInt(2),this.diskNumberStart=e.readInt(2),this.internalFileAttributes=e.readInt(2),this.externalFileAttributes=e.readInt(4),this.localHeaderOffset=e.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");e.skip(t),this.readExtraFields(e),this.parseZIP64ExtraField(e),this.fileComment=e.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var e=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),0==e&&(this.dosPermissions=63&this.externalFileAttributes),3==e&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||"/"!==this.fileNameStr.slice(-1)||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var e=n(this.extraFields[1].value);this.uncompressedSize===s.MAX_VALUE_32BITS&&(this.uncompressedSize=e.readInt(8)),this.compressedSize===s.MAX_VALUE_32BITS&&(this.compressedSize=e.readInt(8)),this.localHeaderOffset===s.MAX_VALUE_32BITS&&(this.localHeaderOffset=e.readInt(8)),this.diskNumberStart===s.MAX_VALUE_32BITS&&(this.diskNumberStart=e.readInt(4))}},readExtraFields:function(e){var t,r,n,i=e.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});e.index+4<i;)t=e.readInt(2),r=e.readInt(2),n=e.readData(r),this.extraFields[t]={id:t,length:r,value:n};e.setIndex(i)},handleUTF8:function(){var e=u.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=o.utf8decode(this.fileName),this.fileCommentStr=o.utf8decode(this.fileComment);else{var t=this.findExtraFieldUnicodePath();if(null!==t)this.fileNameStr=t;else{var r=s.transformTo(e,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(r)}var n=this.findExtraFieldUnicodeComment();if(null!==n)this.fileCommentStr=n;else{var i=s.transformTo(e,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(i)}}},findExtraFieldUnicodePath:function(){var e=this.extraFields[28789];if(e){var t=n(e.value);return 1!==t.readInt(1)?null:a(this.fileName)!==t.readInt(4)?null:o.utf8decode(t.readData(e.length-5))}return null},findExtraFieldUnicodeComment:function(){var e=this.extraFields[25461];if(e){var t=n(e.value);return 1!==t.readInt(1)?null:a(this.fileComment)!==t.readInt(4)?null:o.utf8decode(t.readData(e.length-5))}return null}},t.exports=l},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,t,r){"use strict";function n(e,t,r){this.name=e,this.dir=r.dir,this.date=r.date,this.comment=r.comment,this.unixPermissions=r.unixPermissions,this.dosPermissions=r.dosPermissions,this._data=t,this._dataBinary=r.binary,this.options={compression:r.compression,compressionOptions:r.compressionOptions}}var s=e("./stream/StreamHelper"),i=e("./stream/DataWorker"),a=e("./utf8"),o=e("./compressedObject"),h=e("./stream/GenericWorker");n.prototype={internalStream:function(e){var t=null,r="string";try{if(!e)throw new Error("No output type specified.");var n="string"===(r=e.toLowerCase())||"text"===r;"binarystring"!==r&&"text"!==r||(r="string"),t=this._decompressWorker();var i=!this._dataBinary;i&&!n&&(t=t.pipe(new a.Utf8EncodeWorker)),!i&&n&&(t=t.pipe(new a.Utf8DecodeWorker))}catch(e){(t=new h("error")).error(e)}return new s(t,r,"")},async:function(e,t){return this.internalStream(e).accumulate(t)},nodeStream:function(e,t){return this.internalStream(e||"nodebuffer").toNodejsStream(t)},_compressWorker:function(e,t){if(this._data instanceof o&&this._data.compression.magic===e.magic)return this._data.getCompressedWorker();var r=this._decompressWorker();return this._dataBinary||(r=r.pipe(new a.Utf8EncodeWorker)),o.createWorkerFrom(r,e,t)},_decompressWorker:function(){return this._data instanceof o?this._data.getContentWorker():this._data instanceof h?this._data:new i(this._data)}};for(var u=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],l=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},f=0;f<u.length;f++)n.prototype[u[f]]=l;t.exports=n},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,l,t){(function(t){"use strict";var r,n,e=t.MutationObserver||t.WebKitMutationObserver;if(e){var i=0,s=new e(u),a=t.document.createTextNode("");s.observe(a,{characterData:!0}),r=function(){a.data=i=++i%2}}else if(t.setImmediate||void 0===t.MessageChannel)r="document"in t&&"onreadystatechange"in t.document.createElement("script")?function(){var e=t.document.createElement("script");e.onreadystatechange=function(){u(),e.onreadystatechange=null,e.parentNode.removeChild(e),e=null},t.document.documentElement.appendChild(e)}:function(){setTimeout(u,0)};else{var o=new t.MessageChannel;o.port1.onmessage=u,r=function(){o.port2.postMessage(0)}}var h=[];function u(){var e,t;n=!0;for(var r=h.length;r;){for(t=h,h=[],e=-1;++e<r;)t[e]();r=h.length}n=!1}l.exports=function(e){1!==h.push(e)||n||r()}}).call(this,"undefined"!=typeof __webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],37:[function(e,t,r){"use strict";var i=e("immediate");function u(){}var l={},s=["REJECTED"],a=["FULFILLED"],n=["PENDING"];function o(e){if("function"!=typeof e)throw new TypeError("resolver must be a function");this.state=n,this.queue=[],this.outcome=void 0,e!==u&&d(this,e)}function h(e,t,r){this.promise=e,"function"==typeof t&&(this.onFulfilled=t,this.callFulfilled=this.otherCallFulfilled),"function"==typeof r&&(this.onRejected=r,this.callRejected=this.otherCallRejected)}function f(t,r,n){i(function(){var e;try{e=r(n)}catch(e){return l.reject(t,e)}e===t?l.reject(t,new TypeError("Cannot resolve promise with itself")):l.resolve(t,e)})}function c(e){var t=e&&e.then;if(e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof t)return function(){t.apply(e,arguments)}}function d(t,e){var r=!1;function n(e){r||(r=!0,l.reject(t,e))}function i(e){r||(r=!0,l.resolve(t,e))}var s=p(function(){e(i,n)});"error"===s.status&&n(s.value)}function p(e,t){var r={};try{r.value=e(t),r.status="success"}catch(e){r.status="error",r.value=e}return r}(t.exports=o).prototype.finally=function(t){if("function"!=typeof t)return this;var r=this.constructor;return this.then(function(e){return r.resolve(t()).then(function(){return e})},function(e){return r.resolve(t()).then(function(){throw e})})},o.prototype.catch=function(e){return this.then(null,e)},o.prototype.then=function(e,t){if("function"!=typeof e&&this.state===a||"function"!=typeof t&&this.state===s)return this;var r=new this.constructor(u);this.state!==n?f(r,this.state===a?e:t,this.outcome):this.queue.push(new h(r,e,t));return r},h.prototype.callFulfilled=function(e){l.resolve(this.promise,e)},h.prototype.otherCallFulfilled=function(e){f(this.promise,this.onFulfilled,e)},h.prototype.callRejected=function(e){l.reject(this.promise,e)},h.prototype.otherCallRejected=function(e){f(this.promise,this.onRejected,e)},l.resolve=function(e,t){var r=p(c,t);if("error"===r.status)return l.reject(e,r.value);var n=r.value;if(n)d(e,n);else{e.state=a,e.outcome=t;for(var i=-1,s=e.queue.length;++i<s;)e.queue[i].callFulfilled(t)}return e},l.reject=function(e,t){e.state=s,e.outcome=t;for(var r=-1,n=e.queue.length;++r<n;)e.queue[r].callRejected(t);return e},o.resolve=function(e){if(e instanceof this)return e;return l.resolve(new this(u),e)},o.reject=function(e){var t=new this(u);return l.reject(t,e)},o.all=function(e){var r=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var n=e.length,i=!1;if(!n)return this.resolve([]);var s=new Array(n),a=0,t=-1,o=new this(u);for(;++t<n;)h(e[t],t);return o;function h(e,t){r.resolve(e).then(function(e){s[t]=e,++a!==n||i||(i=!0,l.resolve(o,s))},function(e){i||(i=!0,l.reject(o,e))})}},o.race=function(e){var t=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var r=e.length,n=!1;if(!r)return this.resolve([]);var i=-1,s=new this(u);for(;++i<r;)a=e[i],t.resolve(a).then(function(e){n||(n=!0,l.resolve(s,e))},function(e){n||(n=!0,l.reject(s,e))});var a;return s}},{immediate:36}],38:[function(e,t,r){"use strict";var n={};(0,e("./lib/utils/common").assign)(n,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),t.exports=n},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,t,r){"use strict";var a=e("./zlib/deflate"),o=e("./utils/common"),h=e("./utils/strings"),i=e("./zlib/messages"),s=e("./zlib/zstream"),u=Object.prototype.toString,l=0,f=-1,c=0,d=8;function p(e){if(!(this instanceof p))return new p(e);this.options=o.assign({level:f,method:d,chunkSize:16384,windowBits:15,memLevel:8,strategy:c,to:""},e||{});var t=this.options;t.raw&&0<t.windowBits?t.windowBits=-t.windowBits:t.gzip&&0<t.windowBits&&t.windowBits<16&&(t.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new s,this.strm.avail_out=0;var r=a.deflateInit2(this.strm,t.level,t.method,t.windowBits,t.memLevel,t.strategy);if(r!==l)throw new Error(i[r]);if(t.header&&a.deflateSetHeader(this.strm,t.header),t.dictionary){var n;if(n="string"==typeof t.dictionary?h.string2buf(t.dictionary):"[object ArrayBuffer]"===u.call(t.dictionary)?new Uint8Array(t.dictionary):t.dictionary,(r=a.deflateSetDictionary(this.strm,n))!==l)throw new Error(i[r]);this._dict_set=!0}}function n(e,t){var r=new p(t);if(r.push(e,!0),r.err)throw r.msg||i[r.err];return r.result}p.prototype.push=function(e,t){var r,n,i=this.strm,s=this.options.chunkSize;if(this.ended)return!1;n=t===~~t?t:!0===t?4:0,"string"==typeof e?i.input=h.string2buf(e):"[object ArrayBuffer]"===u.call(e)?i.input=new Uint8Array(e):i.input=e,i.next_in=0,i.avail_in=i.input.length;do{if(0===i.avail_out&&(i.output=new o.Buf8(s),i.next_out=0,i.avail_out=s),1!==(r=a.deflate(i,n))&&r!==l)return this.onEnd(r),!(this.ended=!0);0!==i.avail_out&&(0!==i.avail_in||4!==n&&2!==n)||("string"===this.options.to?this.onData(h.buf2binstring(o.shrinkBuf(i.output,i.next_out))):this.onData(o.shrinkBuf(i.output,i.next_out)))}while((0<i.avail_in||0===i.avail_out)&&1!==r);return 4===n?(r=a.deflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===l):2!==n||(this.onEnd(l),!(i.avail_out=0))},p.prototype.onData=function(e){this.chunks.push(e)},p.prototype.onEnd=function(e){e===l&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},r.Deflate=p,r.deflate=n,r.deflateRaw=function(e,t){return(t=t||{}).raw=!0,n(e,t)},r.gzip=function(e,t){return(t=t||{}).gzip=!0,n(e,t)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,t,r){"use strict";var c=e("./zlib/inflate"),d=e("./utils/common"),p=e("./utils/strings"),m=e("./zlib/constants"),n=e("./zlib/messages"),i=e("./zlib/zstream"),s=e("./zlib/gzheader"),_=Object.prototype.toString;function a(e){if(!(this instanceof a))return new a(e);this.options=d.assign({chunkSize:16384,windowBits:0,to:""},e||{});var t=this.options;t.raw&&0<=t.windowBits&&t.windowBits<16&&(t.windowBits=-t.windowBits,0===t.windowBits&&(t.windowBits=-15)),!(0<=t.windowBits&&t.windowBits<16)||e&&e.windowBits||(t.windowBits+=32),15<t.windowBits&&t.windowBits<48&&0==(15&t.windowBits)&&(t.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new i,this.strm.avail_out=0;var r=c.inflateInit2(this.strm,t.windowBits);if(r!==m.Z_OK)throw new Error(n[r]);this.header=new s,c.inflateGetHeader(this.strm,this.header)}function o(e,t){var r=new a(t);if(r.push(e,!0),r.err)throw r.msg||n[r.err];return r.result}a.prototype.push=function(e,t){var r,n,i,s,a,o,h=this.strm,u=this.options.chunkSize,l=this.options.dictionary,f=!1;if(this.ended)return!1;n=t===~~t?t:!0===t?m.Z_FINISH:m.Z_NO_FLUSH,"string"==typeof e?h.input=p.binstring2buf(e):"[object ArrayBuffer]"===_.call(e)?h.input=new Uint8Array(e):h.input=e,h.next_in=0,h.avail_in=h.input.length;do{if(0===h.avail_out&&(h.output=new d.Buf8(u),h.next_out=0,h.avail_out=u),(r=c.inflate(h,m.Z_NO_FLUSH))===m.Z_NEED_DICT&&l&&(o="string"==typeof l?p.string2buf(l):"[object ArrayBuffer]"===_.call(l)?new Uint8Array(l):l,r=c.inflateSetDictionary(this.strm,o)),r===m.Z_BUF_ERROR&&!0===f&&(r=m.Z_OK,f=!1),r!==m.Z_STREAM_END&&r!==m.Z_OK)return this.onEnd(r),!(this.ended=!0);h.next_out&&(0!==h.avail_out&&r!==m.Z_STREAM_END&&(0!==h.avail_in||n!==m.Z_FINISH&&n!==m.Z_SYNC_FLUSH)||("string"===this.options.to?(i=p.utf8border(h.output,h.next_out),s=h.next_out-i,a=p.buf2string(h.output,i),h.next_out=s,h.avail_out=u-s,s&&d.arraySet(h.output,h.output,i,s,0),this.onData(a)):this.onData(d.shrinkBuf(h.output,h.next_out)))),0===h.avail_in&&0===h.avail_out&&(f=!0)}while((0<h.avail_in||0===h.avail_out)&&r!==m.Z_STREAM_END);return r===m.Z_STREAM_END&&(n=m.Z_FINISH),n===m.Z_FINISH?(r=c.inflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===m.Z_OK):n!==m.Z_SYNC_FLUSH||(this.onEnd(m.Z_OK),!(h.avail_out=0))},a.prototype.onData=function(e){this.chunks.push(e)},a.prototype.onEnd=function(e){e===m.Z_OK&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=d.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},r.Inflate=a,r.inflate=o,r.inflateRaw=function(e,t){return(t=t||{}).raw=!0,o(e,t)},r.ungzip=o},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,t,r){"use strict";var n="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;r.assign=function(e){for(var t=Array.prototype.slice.call(arguments,1);t.length;){var r=t.shift();if(r){if("object"!=typeof r)throw new TypeError(r+"must be non-object");for(var n in r)r.hasOwnProperty(n)&&(e[n]=r[n])}}return e},r.shrinkBuf=function(e,t){return e.length===t?e:e.subarray?e.subarray(0,t):(e.length=t,e)};var i={arraySet:function(e,t,r,n,i){if(t.subarray&&e.subarray)e.set(t.subarray(r,r+n),i);else for(var s=0;s<n;s++)e[i+s]=t[r+s]},flattenChunks:function(e){var t,r,n,i,s,a;for(t=n=0,r=e.length;t<r;t++)n+=e[t].length;for(a=new Uint8Array(n),t=i=0,r=e.length;t<r;t++)s=e[t],a.set(s,i),i+=s.length;return a}},s={arraySet:function(e,t,r,n,i){for(var s=0;s<n;s++)e[i+s]=t[r+s]},flattenChunks:function(e){return[].concat.apply([],e)}};r.setTyped=function(e){e?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,i)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,s))},r.setTyped(n)},{}],42:[function(e,t,r){"use strict";var h=e("./common"),i=!0,s=!0;try{String.fromCharCode.apply(null,[0])}catch(e){i=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(e){s=!1}for(var u=new h.Buf8(256),n=0;n<256;n++)u[n]=252<=n?6:248<=n?5:240<=n?4:224<=n?3:192<=n?2:1;function l(e,t){if(t<65537&&(e.subarray&&s||!e.subarray&&i))return String.fromCharCode.apply(null,h.shrinkBuf(e,t));for(var r="",n=0;n<t;n++)r+=String.fromCharCode(e[n]);return r}u[254]=u[254]=1,r.string2buf=function(e){var t,r,n,i,s,a=e.length,o=0;for(i=0;i<a;i++)55296==(64512&(r=e.charCodeAt(i)))&&i+1<a&&56320==(64512&(n=e.charCodeAt(i+1)))&&(r=65536+(r-55296<<10)+(n-56320),i++),o+=r<128?1:r<2048?2:r<65536?3:4;for(t=new h.Buf8(o),i=s=0;s<o;i++)55296==(64512&(r=e.charCodeAt(i)))&&i+1<a&&56320==(64512&(n=e.charCodeAt(i+1)))&&(r=65536+(r-55296<<10)+(n-56320),i++),r<128?t[s++]=r:(r<2048?t[s++]=192|r>>>6:(r<65536?t[s++]=224|r>>>12:(t[s++]=240|r>>>18,t[s++]=128|r>>>12&63),t[s++]=128|r>>>6&63),t[s++]=128|63&r);return t},r.buf2binstring=function(e){return l(e,e.length)},r.binstring2buf=function(e){for(var t=new h.Buf8(e.length),r=0,n=t.length;r<n;r++)t[r]=e.charCodeAt(r);return t},r.buf2string=function(e,t){var r,n,i,s,a=t||e.length,o=new Array(2*a);for(r=n=0;r<a;)if((i=e[r++])<128)o[n++]=i;else if(4<(s=u[i]))o[n++]=65533,r+=s-1;else{for(i&=2===s?31:3===s?15:7;1<s&&r<a;)i=i<<6|63&e[r++],s--;1<s?o[n++]=65533:i<65536?o[n++]=i:(i-=65536,o[n++]=55296|i>>10&1023,o[n++]=56320|1023&i)}return l(o,n)},r.utf8border=function(e,t){var r;for((t=t||e.length)>e.length&&(t=e.length),r=t-1;0<=r&&128==(192&e[r]);)r--;return r<0?t:0===r?t:r+u[e[r]]>t?r:t}},{"./common":41}],43:[function(e,t,r){"use strict";t.exports=function(e,t,r,n){for(var i=65535&e|0,s=e>>>16&65535|0,a=0;0!==r;){for(r-=a=2e3<r?2e3:r;s=s+(i=i+t[n++]|0)|0,--a;);i%=65521,s%=65521}return i|s<<16|0}},{}],44:[function(e,t,r){"use strict";t.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,t,r){"use strict";var o=function(){for(var e,t=[],r=0;r<256;r++){e=r;for(var n=0;n<8;n++)e=1&e?3988292384^e>>>1:e>>>1;t[r]=e}return t}();t.exports=function(e,t,r,n){var i=o,s=n+r;e^=-1;for(var a=n;a<s;a++)e=e>>>8^i[255&(e^t[a])];return-1^e}},{}],46:[function(e,t,r){"use strict";var h,c=e("../utils/common"),u=e("./trees"),d=e("./adler32"),p=e("./crc32"),n=e("./messages"),l=0,f=4,m=0,_=-2,g=-1,b=4,i=2,v=8,y=9,s=286,a=30,o=19,w=2*s+1,k=15,x=3,S=258,z=S+x+1,C=42,E=113,A=1,I=2,O=3,B=4;function R(e,t){return e.msg=n[t],t}function T(e){return(e<<1)-(4<e?9:0)}function D(e){for(var t=e.length;0<=--t;)e[t]=0}function F(e){var t=e.state,r=t.pending;r>e.avail_out&&(r=e.avail_out),0!==r&&(c.arraySet(e.output,t.pending_buf,t.pending_out,r,e.next_out),e.next_out+=r,t.pending_out+=r,e.total_out+=r,e.avail_out-=r,t.pending-=r,0===t.pending&&(t.pending_out=0))}function N(e,t){u._tr_flush_block(e,0<=e.block_start?e.block_start:-1,e.strstart-e.block_start,t),e.block_start=e.strstart,F(e.strm)}function U(e,t){e.pending_buf[e.pending++]=t}function P(e,t){e.pending_buf[e.pending++]=t>>>8&255,e.pending_buf[e.pending++]=255&t}function L(e,t){var r,n,i=e.max_chain_length,s=e.strstart,a=e.prev_length,o=e.nice_match,h=e.strstart>e.w_size-z?e.strstart-(e.w_size-z):0,u=e.window,l=e.w_mask,f=e.prev,c=e.strstart+S,d=u[s+a-1],p=u[s+a];e.prev_length>=e.good_match&&(i>>=2),o>e.lookahead&&(o=e.lookahead);do{if(u[(r=t)+a]===p&&u[r+a-1]===d&&u[r]===u[s]&&u[++r]===u[s+1]){s+=2,r++;do{}while(u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&s<c);if(n=S-(c-s),s=c-S,a<n){if(e.match_start=t,o<=(a=n))break;d=u[s+a-1],p=u[s+a]}}}while((t=f[t&l])>h&&0!=--i);return a<=e.lookahead?a:e.lookahead}function j(e){var t,r,n,i,s,a,o,h,u,l,f=e.w_size;do{if(i=e.window_size-e.lookahead-e.strstart,e.strstart>=f+(f-z)){for(c.arraySet(e.window,e.window,f,f,0),e.match_start-=f,e.strstart-=f,e.block_start-=f,t=r=e.hash_size;n=e.head[--t],e.head[t]=f<=n?n-f:0,--r;);for(t=r=f;n=e.prev[--t],e.prev[t]=f<=n?n-f:0,--r;);i+=f}if(0===e.strm.avail_in)break;if(a=e.strm,o=e.window,h=e.strstart+e.lookahead,u=i,l=void 0,l=a.avail_in,u<l&&(l=u),r=0===l?0:(a.avail_in-=l,c.arraySet(o,a.input,a.next_in,l,h),1===a.state.wrap?a.adler=d(a.adler,o,l,h):2===a.state.wrap&&(a.adler=p(a.adler,o,l,h)),a.next_in+=l,a.total_in+=l,l),e.lookahead+=r,e.lookahead+e.insert>=x)for(s=e.strstart-e.insert,e.ins_h=e.window[s],e.ins_h=(e.ins_h<<e.hash_shift^e.window[s+1])&e.hash_mask;e.insert&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[s+x-1])&e.hash_mask,e.prev[s&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=s,s++,e.insert--,!(e.lookahead+e.insert<x)););}while(e.lookahead<z&&0!==e.strm.avail_in)}function Z(e,t){for(var r,n;;){if(e.lookahead<z){if(j(e),e.lookahead<z&&t===l)return A;if(0===e.lookahead)break}if(r=0,e.lookahead>=x&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+x-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),0!==r&&e.strstart-r<=e.w_size-z&&(e.match_length=L(e,r)),e.match_length>=x)if(n=u._tr_tally(e,e.strstart-e.match_start,e.match_length-x),e.lookahead-=e.match_length,e.match_length<=e.max_lazy_match&&e.lookahead>=x){for(e.match_length--;e.strstart++,e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+x-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart,0!=--e.match_length;);e.strstart++}else e.strstart+=e.match_length,e.match_length=0,e.ins_h=e.window[e.strstart],e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+1])&e.hash_mask;else n=u._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++;if(n&&(N(e,!1),0===e.strm.avail_out))return A}return e.insert=e.strstart<x-1?e.strstart:x-1,t===f?(N(e,!0),0===e.strm.avail_out?O:B):e.last_lit&&(N(e,!1),0===e.strm.avail_out)?A:I}function W(e,t){for(var r,n,i;;){if(e.lookahead<z){if(j(e),e.lookahead<z&&t===l)return A;if(0===e.lookahead)break}if(r=0,e.lookahead>=x&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+x-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),e.prev_length=e.match_length,e.prev_match=e.match_start,e.match_length=x-1,0!==r&&e.prev_length<e.max_lazy_match&&e.strstart-r<=e.w_size-z&&(e.match_length=L(e,r),e.match_length<=5&&(1===e.strategy||e.match_length===x&&4096<e.strstart-e.match_start)&&(e.match_length=x-1)),e.prev_length>=x&&e.match_length<=e.prev_length){for(i=e.strstart+e.lookahead-x,n=u._tr_tally(e,e.strstart-1-e.prev_match,e.prev_length-x),e.lookahead-=e.prev_length-1,e.prev_length-=2;++e.strstart<=i&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+x-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),0!=--e.prev_length;);if(e.match_available=0,e.match_length=x-1,e.strstart++,n&&(N(e,!1),0===e.strm.avail_out))return A}else if(e.match_available){if((n=u._tr_tally(e,0,e.window[e.strstart-1]))&&N(e,!1),e.strstart++,e.lookahead--,0===e.strm.avail_out)return A}else e.match_available=1,e.strstart++,e.lookahead--}return e.match_available&&(n=u._tr_tally(e,0,e.window[e.strstart-1]),e.match_available=0),e.insert=e.strstart<x-1?e.strstart:x-1,t===f?(N(e,!0),0===e.strm.avail_out?O:B):e.last_lit&&(N(e,!1),0===e.strm.avail_out)?A:I}function M(e,t,r,n,i){this.good_length=e,this.max_lazy=t,this.nice_length=r,this.max_chain=n,this.func=i}function H(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=v,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new c.Buf16(2*w),this.dyn_dtree=new c.Buf16(2*(2*a+1)),this.bl_tree=new c.Buf16(2*(2*o+1)),D(this.dyn_ltree),D(this.dyn_dtree),D(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new c.Buf16(k+1),this.heap=new c.Buf16(2*s+1),D(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new c.Buf16(2*s+1),D(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function G(e){var t;return e&&e.state?(e.total_in=e.total_out=0,e.data_type=i,(t=e.state).pending=0,t.pending_out=0,t.wrap<0&&(t.wrap=-t.wrap),t.status=t.wrap?C:E,e.adler=2===t.wrap?0:1,t.last_flush=l,u._tr_init(t),m):R(e,_)}function K(e){var t=G(e);return t===m&&function(e){e.window_size=2*e.w_size,D(e.head),e.max_lazy_match=h[e.level].max_lazy,e.good_match=h[e.level].good_length,e.nice_match=h[e.level].nice_length,e.max_chain_length=h[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=x-1,e.match_available=0,e.ins_h=0}(e.state),t}function Y(e,t,r,n,i,s){if(!e)return _;var a=1;if(t===g&&(t=6),n<0?(a=0,n=-n):15<n&&(a=2,n-=16),i<1||y<i||r!==v||n<8||15<n||t<0||9<t||s<0||b<s)return R(e,_);8===n&&(n=9);var o=new H;return(e.state=o).strm=e,o.wrap=a,o.gzhead=null,o.w_bits=n,o.w_size=1<<o.w_bits,o.w_mask=o.w_size-1,o.hash_bits=i+7,o.hash_size=1<<o.hash_bits,o.hash_mask=o.hash_size-1,o.hash_shift=~~((o.hash_bits+x-1)/x),o.window=new c.Buf8(2*o.w_size),o.head=new c.Buf16(o.hash_size),o.prev=new c.Buf16(o.w_size),o.lit_bufsize=1<<i+6,o.pending_buf_size=4*o.lit_bufsize,o.pending_buf=new c.Buf8(o.pending_buf_size),o.d_buf=1*o.lit_bufsize,o.l_buf=3*o.lit_bufsize,o.level=t,o.strategy=s,o.method=r,K(e)}h=[new M(0,0,0,0,function(e,t){var r=65535;for(r>e.pending_buf_size-5&&(r=e.pending_buf_size-5);;){if(e.lookahead<=1){if(j(e),0===e.lookahead&&t===l)return A;if(0===e.lookahead)break}e.strstart+=e.lookahead,e.lookahead=0;var n=e.block_start+r;if((0===e.strstart||e.strstart>=n)&&(e.lookahead=e.strstart-n,e.strstart=n,N(e,!1),0===e.strm.avail_out))return A;if(e.strstart-e.block_start>=e.w_size-z&&(N(e,!1),0===e.strm.avail_out))return A}return e.insert=0,t===f?(N(e,!0),0===e.strm.avail_out?O:B):(e.strstart>e.block_start&&(N(e,!1),e.strm.avail_out),A)}),new M(4,4,8,4,Z),new M(4,5,16,8,Z),new M(4,6,32,32,Z),new M(4,4,16,16,W),new M(8,16,32,32,W),new M(8,16,128,128,W),new M(8,32,128,256,W),new M(32,128,258,1024,W),new M(32,258,258,4096,W)],r.deflateInit=function(e,t){return Y(e,t,v,15,8,0)},r.deflateInit2=Y,r.deflateReset=K,r.deflateResetKeep=G,r.deflateSetHeader=function(e,t){return e&&e.state?2!==e.state.wrap?_:(e.state.gzhead=t,m):_},r.deflate=function(e,t){var r,n,i,s;if(!e||!e.state||5<t||t<0)return e?R(e,_):_;if(n=e.state,!e.output||!e.input&&0!==e.avail_in||666===n.status&&t!==f)return R(e,0===e.avail_out?-5:_);if(n.strm=e,r=n.last_flush,n.last_flush=t,n.status===C)if(2===n.wrap)e.adler=0,U(n,31),U(n,139),U(n,8),n.gzhead?(U(n,(n.gzhead.text?1:0)+(n.gzhead.hcrc?2:0)+(n.gzhead.extra?4:0)+(n.gzhead.name?8:0)+(n.gzhead.comment?16:0)),U(n,255&n.gzhead.time),U(n,n.gzhead.time>>8&255),U(n,n.gzhead.time>>16&255),U(n,n.gzhead.time>>24&255),U(n,9===n.level?2:2<=n.strategy||n.level<2?4:0),U(n,255&n.gzhead.os),n.gzhead.extra&&n.gzhead.extra.length&&(U(n,255&n.gzhead.extra.length),U(n,n.gzhead.extra.length>>8&255)),n.gzhead.hcrc&&(e.adler=p(e.adler,n.pending_buf,n.pending,0)),n.gzindex=0,n.status=69):(U(n,0),U(n,0),U(n,0),U(n,0),U(n,0),U(n,9===n.level?2:2<=n.strategy||n.level<2?4:0),U(n,3),n.status=E);else{var a=v+(n.w_bits-8<<4)<<8;a|=(2<=n.strategy||n.level<2?0:n.level<6?1:6===n.level?2:3)<<6,0!==n.strstart&&(a|=32),a+=31-a%31,n.status=E,P(n,a),0!==n.strstart&&(P(n,e.adler>>>16),P(n,65535&e.adler)),e.adler=1}if(69===n.status)if(n.gzhead.extra){for(i=n.pending;n.gzindex<(65535&n.gzhead.extra.length)&&(n.pending!==n.pending_buf_size||(n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),F(e),i=n.pending,n.pending!==n.pending_buf_size));)U(n,255&n.gzhead.extra[n.gzindex]),n.gzindex++;n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),n.gzindex===n.gzhead.extra.length&&(n.gzindex=0,n.status=73)}else n.status=73;if(73===n.status)if(n.gzhead.name){i=n.pending;do{if(n.pending===n.pending_buf_size&&(n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),F(e),i=n.pending,n.pending===n.pending_buf_size)){s=1;break}s=n.gzindex<n.gzhead.name.length?255&n.gzhead.name.charCodeAt(n.gzindex++):0,U(n,s)}while(0!==s);n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),0===s&&(n.gzindex=0,n.status=91)}else n.status=91;if(91===n.status)if(n.gzhead.comment){i=n.pending;do{if(n.pending===n.pending_buf_size&&(n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),F(e),i=n.pending,n.pending===n.pending_buf_size)){s=1;break}s=n.gzindex<n.gzhead.comment.length?255&n.gzhead.comment.charCodeAt(n.gzindex++):0,U(n,s)}while(0!==s);n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),0===s&&(n.status=103)}else n.status=103;if(103===n.status&&(n.gzhead.hcrc?(n.pending+2>n.pending_buf_size&&F(e),n.pending+2<=n.pending_buf_size&&(U(n,255&e.adler),U(n,e.adler>>8&255),e.adler=0,n.status=E)):n.status=E),0!==n.pending){if(F(e),0===e.avail_out)return n.last_flush=-1,m}else if(0===e.avail_in&&T(t)<=T(r)&&t!==f)return R(e,-5);if(666===n.status&&0!==e.avail_in)return R(e,-5);if(0!==e.avail_in||0!==n.lookahead||t!==l&&666!==n.status){var o=2===n.strategy?function(e,t){for(var r;;){if(0===e.lookahead&&(j(e),0===e.lookahead)){if(t===l)return A;break}if(e.match_length=0,r=u._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++,r&&(N(e,!1),0===e.strm.avail_out))return A}return e.insert=0,t===f?(N(e,!0),0===e.strm.avail_out?O:B):e.last_lit&&(N(e,!1),0===e.strm.avail_out)?A:I}(n,t):3===n.strategy?function(e,t){for(var r,n,i,s,a=e.window;;){if(e.lookahead<=S){if(j(e),e.lookahead<=S&&t===l)return A;if(0===e.lookahead)break}if(e.match_length=0,e.lookahead>=x&&0<e.strstart&&(n=a[i=e.strstart-1])===a[++i]&&n===a[++i]&&n===a[++i]){s=e.strstart+S;do{}while(n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&i<s);e.match_length=S-(s-i),e.match_length>e.lookahead&&(e.match_length=e.lookahead)}if(e.match_length>=x?(r=u._tr_tally(e,1,e.match_length-x),e.lookahead-=e.match_length,e.strstart+=e.match_length,e.match_length=0):(r=u._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++),r&&(N(e,!1),0===e.strm.avail_out))return A}return e.insert=0,t===f?(N(e,!0),0===e.strm.avail_out?O:B):e.last_lit&&(N(e,!1),0===e.strm.avail_out)?A:I}(n,t):h[n.level].func(n,t);if(o!==O&&o!==B||(n.status=666),o===A||o===O)return 0===e.avail_out&&(n.last_flush=-1),m;if(o===I&&(1===t?u._tr_align(n):5!==t&&(u._tr_stored_block(n,0,0,!1),3===t&&(D(n.head),0===n.lookahead&&(n.strstart=0,n.block_start=0,n.insert=0))),F(e),0===e.avail_out))return n.last_flush=-1,m}return t!==f?m:n.wrap<=0?1:(2===n.wrap?(U(n,255&e.adler),U(n,e.adler>>8&255),U(n,e.adler>>16&255),U(n,e.adler>>24&255),U(n,255&e.total_in),U(n,e.total_in>>8&255),U(n,e.total_in>>16&255),U(n,e.total_in>>24&255)):(P(n,e.adler>>>16),P(n,65535&e.adler)),F(e),0<n.wrap&&(n.wrap=-n.wrap),0!==n.pending?m:1)},r.deflateEnd=function(e){var t;return e&&e.state?(t=e.state.status)!==C&&69!==t&&73!==t&&91!==t&&103!==t&&t!==E&&666!==t?R(e,_):(e.state=null,t===E?R(e,-3):m):_},r.deflateSetDictionary=function(e,t){var r,n,i,s,a,o,h,u,l=t.length;if(!e||!e.state)return _;if(2===(s=(r=e.state).wrap)||1===s&&r.status!==C||r.lookahead)return _;for(1===s&&(e.adler=d(e.adler,t,l,0)),r.wrap=0,l>=r.w_size&&(0===s&&(D(r.head),r.strstart=0,r.block_start=0,r.insert=0),u=new c.Buf8(r.w_size),c.arraySet(u,t,l-r.w_size,r.w_size,0),t=u,l=r.w_size),a=e.avail_in,o=e.next_in,h=e.input,e.avail_in=l,e.next_in=0,e.input=t,j(r);r.lookahead>=x;){for(n=r.strstart,i=r.lookahead-(x-1);r.ins_h=(r.ins_h<<r.hash_shift^r.window[n+x-1])&r.hash_mask,r.prev[n&r.w_mask]=r.head[r.ins_h],r.head[r.ins_h]=n,n++,--i;);r.strstart=n,r.lookahead=x-1,j(r)}return r.strstart+=r.lookahead,r.block_start=r.strstart,r.insert=r.lookahead,r.lookahead=0,r.match_length=r.prev_length=x-1,r.match_available=0,e.next_in=o,e.input=h,e.avail_in=a,r.wrap=s,m},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,t,r){"use strict";t.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(e,t,r){"use strict";t.exports=function(e,t){var r,n,i,s,a,o,h,u,l,f,c,d,p,m,_,g,b,v,y,w,k,x,S,z,C;r=e.state,n=e.next_in,z=e.input,i=n+(e.avail_in-5),s=e.next_out,C=e.output,a=s-(t-e.avail_out),o=s+(e.avail_out-257),h=r.dmax,u=r.wsize,l=r.whave,f=r.wnext,c=r.window,d=r.hold,p=r.bits,m=r.lencode,_=r.distcode,g=(1<<r.lenbits)-1,b=(1<<r.distbits)-1;e:do{p<15&&(d+=z[n++]<<p,p+=8,d+=z[n++]<<p,p+=8),v=m[d&g];t:for(;;){if(d>>>=y=v>>>24,p-=y,0===(y=v>>>16&255))C[s++]=65535&v;else{if(!(16&y)){if(0==(64&y)){v=m[(65535&v)+(d&(1<<y)-1)];continue t}if(32&y){r.mode=12;break e}e.msg="invalid literal/length code",r.mode=30;break e}w=65535&v,(y&=15)&&(p<y&&(d+=z[n++]<<p,p+=8),w+=d&(1<<y)-1,d>>>=y,p-=y),p<15&&(d+=z[n++]<<p,p+=8,d+=z[n++]<<p,p+=8),v=_[d&b];r:for(;;){if(d>>>=y=v>>>24,p-=y,!(16&(y=v>>>16&255))){if(0==(64&y)){v=_[(65535&v)+(d&(1<<y)-1)];continue r}e.msg="invalid distance code",r.mode=30;break e}if(k=65535&v,p<(y&=15)&&(d+=z[n++]<<p,(p+=8)<y&&(d+=z[n++]<<p,p+=8)),h<(k+=d&(1<<y)-1)){e.msg="invalid distance too far back",r.mode=30;break e}if(d>>>=y,p-=y,(y=s-a)<k){if(l<(y=k-y)&&r.sane){e.msg="invalid distance too far back",r.mode=30;break e}if(S=c,(x=0)===f){if(x+=u-y,y<w){for(w-=y;C[s++]=c[x++],--y;);x=s-k,S=C}}else if(f<y){if(x+=u+f-y,(y-=f)<w){for(w-=y;C[s++]=c[x++],--y;);if(x=0,f<w){for(w-=y=f;C[s++]=c[x++],--y;);x=s-k,S=C}}}else if(x+=f-y,y<w){for(w-=y;C[s++]=c[x++],--y;);x=s-k,S=C}for(;2<w;)C[s++]=S[x++],C[s++]=S[x++],C[s++]=S[x++],w-=3;w&&(C[s++]=S[x++],1<w&&(C[s++]=S[x++]))}else{for(x=s-k;C[s++]=C[x++],C[s++]=C[x++],C[s++]=C[x++],2<(w-=3););w&&(C[s++]=C[x++],1<w&&(C[s++]=C[x++]))}break}}break}}while(n<i&&s<o);n-=w=p>>3,d&=(1<<(p-=w<<3))-1,e.next_in=n,e.next_out=s,e.avail_in=n<i?i-n+5:5-(n-i),e.avail_out=s<o?o-s+257:257-(s-o),r.hold=d,r.bits=p}},{}],49:[function(e,t,r){"use strict";var I=e("../utils/common"),O=e("./adler32"),B=e("./crc32"),R=e("./inffast"),T=e("./inftrees"),D=1,F=2,N=0,U=-2,P=1,n=852,i=592;function L(e){return(e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24)}function s(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new I.Buf16(320),this.work=new I.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function a(e){var t;return e&&e.state?(t=e.state,e.total_in=e.total_out=t.total=0,e.msg="",t.wrap&&(e.adler=1&t.wrap),t.mode=P,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new I.Buf32(n),t.distcode=t.distdyn=new I.Buf32(i),t.sane=1,t.back=-1,N):U}function o(e){var t;return e&&e.state?((t=e.state).wsize=0,t.whave=0,t.wnext=0,a(e)):U}function h(e,t){var r,n;return e&&e.state?(n=e.state,t<0?(r=0,t=-t):(r=1+(t>>4),t<48&&(t&=15)),t&&(t<8||15<t)?U:(null!==n.window&&n.wbits!==t&&(n.window=null),n.wrap=r,n.wbits=t,o(e))):U}function u(e,t){var r,n;return e?(n=new s,(e.state=n).window=null,(r=h(e,t))!==N&&(e.state=null),r):U}var l,f,c=!0;function j(e){if(c){var t;for(l=new I.Buf32(512),f=new I.Buf32(32),t=0;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(T(D,e.lens,0,288,l,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;T(F,e.lens,0,32,f,0,e.work,{bits:5}),c=!1}e.lencode=l,e.lenbits=9,e.distcode=f,e.distbits=5}function Z(e,t,r,n){var i,s=e.state;return null===s.window&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0,s.window=new I.Buf8(s.wsize)),n>=s.wsize?(I.arraySet(s.window,t,r-s.wsize,s.wsize,0),s.wnext=0,s.whave=s.wsize):(n<(i=s.wsize-s.wnext)&&(i=n),I.arraySet(s.window,t,r-n,i,s.wnext),(n-=i)?(I.arraySet(s.window,t,r-n,n,0),s.wnext=n,s.whave=s.wsize):(s.wnext+=i,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=i))),0}r.inflateReset=o,r.inflateReset2=h,r.inflateResetKeep=a,r.inflateInit=function(e){return u(e,15)},r.inflateInit2=u,r.inflate=function(e,t){var r,n,i,s,a,o,h,u,l,f,c,d,p,m,_,g,b,v,y,w,k,x,S,z,C=0,E=new I.Buf8(4),A=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!e||!e.state||!e.output||!e.input&&0!==e.avail_in)return U;12===(r=e.state).mode&&(r.mode=13),a=e.next_out,i=e.output,h=e.avail_out,s=e.next_in,n=e.input,o=e.avail_in,u=r.hold,l=r.bits,f=o,c=h,x=N;e:for(;;)switch(r.mode){case P:if(0===r.wrap){r.mode=13;break}for(;l<16;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(2&r.wrap&&35615===u){E[r.check=0]=255&u,E[1]=u>>>8&255,r.check=B(r.check,E,2,0),l=u=0,r.mode=2;break}if(r.flags=0,r.head&&(r.head.done=!1),!(1&r.wrap)||(((255&u)<<8)+(u>>8))%31){e.msg="incorrect header check",r.mode=30;break}if(8!=(15&u)){e.msg="unknown compression method",r.mode=30;break}if(l-=4,k=8+(15&(u>>>=4)),0===r.wbits)r.wbits=k;else if(k>r.wbits){e.msg="invalid window size",r.mode=30;break}r.dmax=1<<k,e.adler=r.check=1,r.mode=512&u?10:12,l=u=0;break;case 2:for(;l<16;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(r.flags=u,8!=(255&r.flags)){e.msg="unknown compression method",r.mode=30;break}if(57344&r.flags){e.msg="unknown header flags set",r.mode=30;break}r.head&&(r.head.text=u>>8&1),512&r.flags&&(E[0]=255&u,E[1]=u>>>8&255,r.check=B(r.check,E,2,0)),l=u=0,r.mode=3;case 3:for(;l<32;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}r.head&&(r.head.time=u),512&r.flags&&(E[0]=255&u,E[1]=u>>>8&255,E[2]=u>>>16&255,E[3]=u>>>24&255,r.check=B(r.check,E,4,0)),l=u=0,r.mode=4;case 4:for(;l<16;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}r.head&&(r.head.xflags=255&u,r.head.os=u>>8),512&r.flags&&(E[0]=255&u,E[1]=u>>>8&255,r.check=B(r.check,E,2,0)),l=u=0,r.mode=5;case 5:if(1024&r.flags){for(;l<16;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}r.length=u,r.head&&(r.head.extra_len=u),512&r.flags&&(E[0]=255&u,E[1]=u>>>8&255,r.check=B(r.check,E,2,0)),l=u=0}else r.head&&(r.head.extra=null);r.mode=6;case 6:if(1024&r.flags&&(o<(d=r.length)&&(d=o),d&&(r.head&&(k=r.head.extra_len-r.length,r.head.extra||(r.head.extra=new Array(r.head.extra_len)),I.arraySet(r.head.extra,n,s,d,k)),512&r.flags&&(r.check=B(r.check,n,d,s)),o-=d,s+=d,r.length-=d),r.length))break e;r.length=0,r.mode=7;case 7:if(2048&r.flags){if(0===o)break e;for(d=0;k=n[s+d++],r.head&&k&&r.length<65536&&(r.head.name+=String.fromCharCode(k)),k&&d<o;);if(512&r.flags&&(r.check=B(r.check,n,d,s)),o-=d,s+=d,k)break e}else r.head&&(r.head.name=null);r.length=0,r.mode=8;case 8:if(4096&r.flags){if(0===o)break e;for(d=0;k=n[s+d++],r.head&&k&&r.length<65536&&(r.head.comment+=String.fromCharCode(k)),k&&d<o;);if(512&r.flags&&(r.check=B(r.check,n,d,s)),o-=d,s+=d,k)break e}else r.head&&(r.head.comment=null);r.mode=9;case 9:if(512&r.flags){for(;l<16;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(u!==(65535&r.check)){e.msg="header crc mismatch",r.mode=30;break}l=u=0}r.head&&(r.head.hcrc=r.flags>>9&1,r.head.done=!0),e.adler=r.check=0,r.mode=12;break;case 10:for(;l<32;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}e.adler=r.check=L(u),l=u=0,r.mode=11;case 11:if(0===r.havedict)return e.next_out=a,e.avail_out=h,e.next_in=s,e.avail_in=o,r.hold=u,r.bits=l,2;e.adler=r.check=1,r.mode=12;case 12:if(5===t||6===t)break e;case 13:if(r.last){u>>>=7&l,l-=7&l,r.mode=27;break}for(;l<3;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}switch(r.last=1&u,l-=1,3&(u>>>=1)){case 0:r.mode=14;break;case 1:if(j(r),r.mode=20,6!==t)break;u>>>=2,l-=2;break e;case 2:r.mode=17;break;case 3:e.msg="invalid block type",r.mode=30}u>>>=2,l-=2;break;case 14:for(u>>>=7&l,l-=7&l;l<32;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if((65535&u)!=(u>>>16^65535)){e.msg="invalid stored block lengths",r.mode=30;break}if(r.length=65535&u,l=u=0,r.mode=15,6===t)break e;case 15:r.mode=16;case 16:if(d=r.length){if(o<d&&(d=o),h<d&&(d=h),0===d)break e;I.arraySet(i,n,s,d,a),o-=d,s+=d,h-=d,a+=d,r.length-=d;break}r.mode=12;break;case 17:for(;l<14;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(r.nlen=257+(31&u),u>>>=5,l-=5,r.ndist=1+(31&u),u>>>=5,l-=5,r.ncode=4+(15&u),u>>>=4,l-=4,286<r.nlen||30<r.ndist){e.msg="too many length or distance symbols",r.mode=30;break}r.have=0,r.mode=18;case 18:for(;r.have<r.ncode;){for(;l<3;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}r.lens[A[r.have++]]=7&u,u>>>=3,l-=3}for(;r.have<19;)r.lens[A[r.have++]]=0;if(r.lencode=r.lendyn,r.lenbits=7,S={bits:r.lenbits},x=T(0,r.lens,0,19,r.lencode,0,r.work,S),r.lenbits=S.bits,x){e.msg="invalid code lengths set",r.mode=30;break}r.have=0,r.mode=19;case 19:for(;r.have<r.nlen+r.ndist;){for(;g=(C=r.lencode[u&(1<<r.lenbits)-1])>>>16&255,b=65535&C,!((_=C>>>24)<=l);){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(b<16)u>>>=_,l-=_,r.lens[r.have++]=b;else{if(16===b){for(z=_+2;l<z;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(u>>>=_,l-=_,0===r.have){e.msg="invalid bit length repeat",r.mode=30;break}k=r.lens[r.have-1],d=3+(3&u),u>>>=2,l-=2}else if(17===b){for(z=_+3;l<z;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}l-=_,k=0,d=3+(7&(u>>>=_)),u>>>=3,l-=3}else{for(z=_+7;l<z;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}l-=_,k=0,d=11+(127&(u>>>=_)),u>>>=7,l-=7}if(r.have+d>r.nlen+r.ndist){e.msg="invalid bit length repeat",r.mode=30;break}for(;d--;)r.lens[r.have++]=k}}if(30===r.mode)break;if(0===r.lens[256]){e.msg="invalid code -- missing end-of-block",r.mode=30;break}if(r.lenbits=9,S={bits:r.lenbits},x=T(D,r.lens,0,r.nlen,r.lencode,0,r.work,S),r.lenbits=S.bits,x){e.msg="invalid literal/lengths set",r.mode=30;break}if(r.distbits=6,r.distcode=r.distdyn,S={bits:r.distbits},x=T(F,r.lens,r.nlen,r.ndist,r.distcode,0,r.work,S),r.distbits=S.bits,x){e.msg="invalid distances set",r.mode=30;break}if(r.mode=20,6===t)break e;case 20:r.mode=21;case 21:if(6<=o&&258<=h){e.next_out=a,e.avail_out=h,e.next_in=s,e.avail_in=o,r.hold=u,r.bits=l,R(e,c),a=e.next_out,i=e.output,h=e.avail_out,s=e.next_in,n=e.input,o=e.avail_in,u=r.hold,l=r.bits,12===r.mode&&(r.back=-1);break}for(r.back=0;g=(C=r.lencode[u&(1<<r.lenbits)-1])>>>16&255,b=65535&C,!((_=C>>>24)<=l);){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(g&&0==(240&g)){for(v=_,y=g,w=b;g=(C=r.lencode[w+((u&(1<<v+y)-1)>>v)])>>>16&255,b=65535&C,!(v+(_=C>>>24)<=l);){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}u>>>=v,l-=v,r.back+=v}if(u>>>=_,l-=_,r.back+=_,r.length=b,0===g){r.mode=26;break}if(32&g){r.back=-1,r.mode=12;break}if(64&g){e.msg="invalid literal/length code",r.mode=30;break}r.extra=15&g,r.mode=22;case 22:if(r.extra){for(z=r.extra;l<z;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}r.length+=u&(1<<r.extra)-1,u>>>=r.extra,l-=r.extra,r.back+=r.extra}r.was=r.length,r.mode=23;case 23:for(;g=(C=r.distcode[u&(1<<r.distbits)-1])>>>16&255,b=65535&C,!((_=C>>>24)<=l);){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(0==(240&g)){for(v=_,y=g,w=b;g=(C=r.distcode[w+((u&(1<<v+y)-1)>>v)])>>>16&255,b=65535&C,!(v+(_=C>>>24)<=l);){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}u>>>=v,l-=v,r.back+=v}if(u>>>=_,l-=_,r.back+=_,64&g){e.msg="invalid distance code",r.mode=30;break}r.offset=b,r.extra=15&g,r.mode=24;case 24:if(r.extra){for(z=r.extra;l<z;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}r.offset+=u&(1<<r.extra)-1,u>>>=r.extra,l-=r.extra,r.back+=r.extra}if(r.offset>r.dmax){e.msg="invalid distance too far back",r.mode=30;break}r.mode=25;case 25:if(0===h)break e;if(d=c-h,r.offset>d){if((d=r.offset-d)>r.whave&&r.sane){e.msg="invalid distance too far back",r.mode=30;break}p=d>r.wnext?(d-=r.wnext,r.wsize-d):r.wnext-d,d>r.length&&(d=r.length),m=r.window}else m=i,p=a-r.offset,d=r.length;for(h<d&&(d=h),h-=d,r.length-=d;i[a++]=m[p++],--d;);0===r.length&&(r.mode=21);break;case 26:if(0===h)break e;i[a++]=r.length,h--,r.mode=21;break;case 27:if(r.wrap){for(;l<32;){if(0===o)break e;o--,u|=n[s++]<<l,l+=8}if(c-=h,e.total_out+=c,r.total+=c,c&&(e.adler=r.check=r.flags?B(r.check,i,c,a-c):O(r.check,i,c,a-c)),c=h,(r.flags?u:L(u))!==r.check){e.msg="incorrect data check",r.mode=30;break}l=u=0}r.mode=28;case 28:if(r.wrap&&r.flags){for(;l<32;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(u!==(4294967295&r.total)){e.msg="incorrect length check",r.mode=30;break}l=u=0}r.mode=29;case 29:x=1;break e;case 30:x=-3;break e;case 31:return-4;case 32:default:return U}return e.next_out=a,e.avail_out=h,e.next_in=s,e.avail_in=o,r.hold=u,r.bits=l,(r.wsize||c!==e.avail_out&&r.mode<30&&(r.mode<27||4!==t))&&Z(e,e.output,e.next_out,c-e.avail_out)?(r.mode=31,-4):(f-=e.avail_in,c-=e.avail_out,e.total_in+=f,e.total_out+=c,r.total+=c,r.wrap&&c&&(e.adler=r.check=r.flags?B(r.check,i,c,e.next_out-c):O(r.check,i,c,e.next_out-c)),e.data_type=r.bits+(r.last?64:0)+(12===r.mode?128:0)+(20===r.mode||15===r.mode?256:0),(0==f&&0===c||4===t)&&x===N&&(x=-5),x)},r.inflateEnd=function(e){if(!e||!e.state)return U;var t=e.state;return t.window&&(t.window=null),e.state=null,N},r.inflateGetHeader=function(e,t){var r;return e&&e.state?0==(2&(r=e.state).wrap)?U:((r.head=t).done=!1,N):U},r.inflateSetDictionary=function(e,t){var r,n=t.length;return e&&e.state?0!==(r=e.state).wrap&&11!==r.mode?U:11===r.mode&&O(1,t,n,0)!==r.check?-3:Z(e,t,n,n)?(r.mode=31,-4):(r.havedict=1,N):U},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,t,r){"use strict";var D=e("../utils/common"),F=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],N=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],U=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],P=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];t.exports=function(e,t,r,n,i,s,a,o){var h,u,l,f,c,d,p,m,_,g=o.bits,b=0,v=0,y=0,w=0,k=0,x=0,S=0,z=0,C=0,E=0,A=null,I=0,O=new D.Buf16(16),B=new D.Buf16(16),R=null,T=0;for(b=0;b<=15;b++)O[b]=0;for(v=0;v<n;v++)O[t[r+v]]++;for(k=g,w=15;1<=w&&0===O[w];w--);if(w<k&&(k=w),0===w)return i[s++]=20971520,i[s++]=20971520,o.bits=1,0;for(y=1;y<w&&0===O[y];y++);for(k<y&&(k=y),b=z=1;b<=15;b++)if(z<<=1,(z-=O[b])<0)return-1;if(0<z&&(0===e||1!==w))return-1;for(B[1]=0,b=1;b<15;b++)B[b+1]=B[b]+O[b];for(v=0;v<n;v++)0!==t[r+v]&&(a[B[t[r+v]]++]=v);if(d=0===e?(A=R=a,19):1===e?(A=F,I-=257,R=N,T-=257,256):(A=U,R=P,-1),b=y,c=s,S=v=E=0,l=-1,f=(C=1<<(x=k))-1,1===e&&852<C||2===e&&592<C)return 1;for(;;){for(p=b-S,_=a[v]<d?(m=0,a[v]):a[v]>d?(m=R[T+a[v]],A[I+a[v]]):(m=96,0),h=1<<b-S,y=u=1<<x;i[c+(E>>S)+(u-=h)]=p<<24|m<<16|_|0,0!==u;);for(h=1<<b-1;E&h;)h>>=1;if(0!==h?(E&=h-1,E+=h):E=0,v++,0==--O[b]){if(b===w)break;b=t[r+a[v]]}if(k<b&&(E&f)!==l){for(0===S&&(S=k),c+=y,z=1<<(x=b-S);x+S<w&&!((z-=O[x+S])<=0);)x++,z<<=1;if(C+=1<<x,1===e&&852<C||2===e&&592<C)return 1;i[l=E&f]=k<<24|x<<16|c-s|0}}return 0!==E&&(i[c+E]=b-S<<24|64<<16|0),o.bits=k,0}},{"../utils/common":41}],51:[function(e,t,r){"use strict";t.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,t,r){"use strict";var i=e("../utils/common"),o=0,h=1;function n(e){for(var t=e.length;0<=--t;)e[t]=0}var s=0,a=29,u=256,l=u+1+a,f=30,c=19,_=2*l+1,g=15,d=16,p=7,m=256,b=16,v=17,y=18,w=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],k=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],x=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],S=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],z=new Array(2*(l+2));n(z);var C=new Array(2*f);n(C);var E=new Array(512);n(E);var A=new Array(256);n(A);var I=new Array(a);n(I);var O,B,R,T=new Array(f);function D(e,t,r,n,i){this.static_tree=e,this.extra_bits=t,this.extra_base=r,this.elems=n,this.max_length=i,this.has_stree=e&&e.length}function F(e,t){this.dyn_tree=e,this.max_code=0,this.stat_desc=t}function N(e){return e<256?E[e]:E[256+(e>>>7)]}function U(e,t){e.pending_buf[e.pending++]=255&t,e.pending_buf[e.pending++]=t>>>8&255}function P(e,t,r){e.bi_valid>d-r?(e.bi_buf|=t<<e.bi_valid&65535,U(e,e.bi_buf),e.bi_buf=t>>d-e.bi_valid,e.bi_valid+=r-d):(e.bi_buf|=t<<e.bi_valid&65535,e.bi_valid+=r)}function L(e,t,r){P(e,r[2*t],r[2*t+1])}function j(e,t){for(var r=0;r|=1&e,e>>>=1,r<<=1,0<--t;);return r>>>1}function Z(e,t,r){var n,i,s=new Array(g+1),a=0;for(n=1;n<=g;n++)s[n]=a=a+r[n-1]<<1;for(i=0;i<=t;i++){var o=e[2*i+1];0!==o&&(e[2*i]=j(s[o]++,o))}}function W(e){var t;for(t=0;t<l;t++)e.dyn_ltree[2*t]=0;for(t=0;t<f;t++)e.dyn_dtree[2*t]=0;for(t=0;t<c;t++)e.bl_tree[2*t]=0;e.dyn_ltree[2*m]=1,e.opt_len=e.static_len=0,e.last_lit=e.matches=0}function M(e){8<e.bi_valid?U(e,e.bi_buf):0<e.bi_valid&&(e.pending_buf[e.pending++]=e.bi_buf),e.bi_buf=0,e.bi_valid=0}function H(e,t,r,n){var i=2*t,s=2*r;return e[i]<e[s]||e[i]===e[s]&&n[t]<=n[r]}function G(e,t,r){for(var n=e.heap[r],i=r<<1;i<=e.heap_len&&(i<e.heap_len&&H(t,e.heap[i+1],e.heap[i],e.depth)&&i++,!H(t,n,e.heap[i],e.depth));)e.heap[r]=e.heap[i],r=i,i<<=1;e.heap[r]=n}function K(e,t,r){var n,i,s,a,o=0;if(0!==e.last_lit)for(;n=e.pending_buf[e.d_buf+2*o]<<8|e.pending_buf[e.d_buf+2*o+1],i=e.pending_buf[e.l_buf+o],o++,0===n?L(e,i,t):(L(e,(s=A[i])+u+1,t),0!==(a=w[s])&&P(e,i-=I[s],a),L(e,s=N(--n),r),0!==(a=k[s])&&P(e,n-=T[s],a)),o<e.last_lit;);L(e,m,t)}function Y(e,t){var r,n,i,s=t.dyn_tree,a=t.stat_desc.static_tree,o=t.stat_desc.has_stree,h=t.stat_desc.elems,u=-1;for(e.heap_len=0,e.heap_max=_,r=0;r<h;r++)0!==s[2*r]?(e.heap[++e.heap_len]=u=r,e.depth[r]=0):s[2*r+1]=0;for(;e.heap_len<2;)s[2*(i=e.heap[++e.heap_len]=u<2?++u:0)]=1,e.depth[i]=0,e.opt_len--,o&&(e.static_len-=a[2*i+1]);for(t.max_code=u,r=e.heap_len>>1;1<=r;r--)G(e,s,r);for(i=h;r=e.heap[1],e.heap[1]=e.heap[e.heap_len--],G(e,s,1),n=e.heap[1],e.heap[--e.heap_max]=r,e.heap[--e.heap_max]=n,s[2*i]=s[2*r]+s[2*n],e.depth[i]=(e.depth[r]>=e.depth[n]?e.depth[r]:e.depth[n])+1,s[2*r+1]=s[2*n+1]=i,e.heap[1]=i++,G(e,s,1),2<=e.heap_len;);e.heap[--e.heap_max]=e.heap[1],function(e,t){var r,n,i,s,a,o,h=t.dyn_tree,u=t.max_code,l=t.stat_desc.static_tree,f=t.stat_desc.has_stree,c=t.stat_desc.extra_bits,d=t.stat_desc.extra_base,p=t.stat_desc.max_length,m=0;for(s=0;s<=g;s++)e.bl_count[s]=0;for(h[2*e.heap[e.heap_max]+1]=0,r=e.heap_max+1;r<_;r++)p<(s=h[2*h[2*(n=e.heap[r])+1]+1]+1)&&(s=p,m++),h[2*n+1]=s,u<n||(e.bl_count[s]++,a=0,d<=n&&(a=c[n-d]),o=h[2*n],e.opt_len+=o*(s+a),f&&(e.static_len+=o*(l[2*n+1]+a)));if(0!==m){do{for(s=p-1;0===e.bl_count[s];)s--;e.bl_count[s]--,e.bl_count[s+1]+=2,e.bl_count[p]--,m-=2}while(0<m);for(s=p;0!==s;s--)for(n=e.bl_count[s];0!==n;)u<(i=e.heap[--r])||(h[2*i+1]!==s&&(e.opt_len+=(s-h[2*i+1])*h[2*i],h[2*i+1]=s),n--)}}(e,t),Z(s,u,e.bl_count)}function X(e,t,r){var n,i,s=-1,a=t[1],o=0,h=7,u=4;for(0===a&&(h=138,u=3),t[2*(r+1)+1]=65535,n=0;n<=r;n++)i=a,a=t[2*(n+1)+1],++o<h&&i===a||(o<u?e.bl_tree[2*i]+=o:0!==i?(i!==s&&e.bl_tree[2*i]++,e.bl_tree[2*b]++):o<=10?e.bl_tree[2*v]++:e.bl_tree[2*y]++,s=i,u=(o=0)===a?(h=138,3):i===a?(h=6,3):(h=7,4))}function V(e,t,r){var n,i,s=-1,a=t[1],o=0,h=7,u=4;for(0===a&&(h=138,u=3),n=0;n<=r;n++)if(i=a,a=t[2*(n+1)+1],!(++o<h&&i===a)){if(o<u)for(;L(e,i,e.bl_tree),0!=--o;);else 0!==i?(i!==s&&(L(e,i,e.bl_tree),o--),L(e,b,e.bl_tree),P(e,o-3,2)):o<=10?(L(e,v,e.bl_tree),P(e,o-3,3)):(L(e,y,e.bl_tree),P(e,o-11,7));s=i,u=(o=0)===a?(h=138,3):i===a?(h=6,3):(h=7,4)}}n(T);var q=!1;function J(e,t,r,n){P(e,(s<<1)+(n?1:0),3),function(e,t,r,n){M(e),n&&(U(e,r),U(e,~r)),i.arraySet(e.pending_buf,e.window,t,r,e.pending),e.pending+=r}(e,t,r,!0)}r._tr_init=function(e){q||(function(){var e,t,r,n,i,s=new Array(g+1);for(n=r=0;n<a-1;n++)for(I[n]=r,e=0;e<1<<w[n];e++)A[r++]=n;for(A[r-1]=n,n=i=0;n<16;n++)for(T[n]=i,e=0;e<1<<k[n];e++)E[i++]=n;for(i>>=7;n<f;n++)for(T[n]=i<<7,e=0;e<1<<k[n]-7;e++)E[256+i++]=n;for(t=0;t<=g;t++)s[t]=0;for(e=0;e<=143;)z[2*e+1]=8,e++,s[8]++;for(;e<=255;)z[2*e+1]=9,e++,s[9]++;for(;e<=279;)z[2*e+1]=7,e++,s[7]++;for(;e<=287;)z[2*e+1]=8,e++,s[8]++;for(Z(z,l+1,s),e=0;e<f;e++)C[2*e+1]=5,C[2*e]=j(e,5);O=new D(z,w,u+1,l,g),B=new D(C,k,0,f,g),R=new D(new Array(0),x,0,c,p)}(),q=!0),e.l_desc=new F(e.dyn_ltree,O),e.d_desc=new F(e.dyn_dtree,B),e.bl_desc=new F(e.bl_tree,R),e.bi_buf=0,e.bi_valid=0,W(e)},r._tr_stored_block=J,r._tr_flush_block=function(e,t,r,n){var i,s,a=0;0<e.level?(2===e.strm.data_type&&(e.strm.data_type=function(e){var t,r=4093624447;for(t=0;t<=31;t++,r>>>=1)if(1&r&&0!==e.dyn_ltree[2*t])return o;if(0!==e.dyn_ltree[18]||0!==e.dyn_ltree[20]||0!==e.dyn_ltree[26])return h;for(t=32;t<u;t++)if(0!==e.dyn_ltree[2*t])return h;return o}(e)),Y(e,e.l_desc),Y(e,e.d_desc),a=function(e){var t;for(X(e,e.dyn_ltree,e.l_desc.max_code),X(e,e.dyn_dtree,e.d_desc.max_code),Y(e,e.bl_desc),t=c-1;3<=t&&0===e.bl_tree[2*S[t]+1];t--);return e.opt_len+=3*(t+1)+5+5+4,t}(e),i=e.opt_len+3+7>>>3,(s=e.static_len+3+7>>>3)<=i&&(i=s)):i=s=r+5,r+4<=i&&-1!==t?J(e,t,r,n):4===e.strategy||s===i?(P(e,2+(n?1:0),3),K(e,z,C)):(P(e,4+(n?1:0),3),function(e,t,r,n){var i;for(P(e,t-257,5),P(e,r-1,5),P(e,n-4,4),i=0;i<n;i++)P(e,e.bl_tree[2*S[i]+1],3);V(e,e.dyn_ltree,t-1),V(e,e.dyn_dtree,r-1)}(e,e.l_desc.max_code+1,e.d_desc.max_code+1,a+1),K(e,e.dyn_ltree,e.dyn_dtree)),W(e),n&&M(e)},r._tr_tally=function(e,t,r){return e.pending_buf[e.d_buf+2*e.last_lit]=t>>>8&255,e.pending_buf[e.d_buf+2*e.last_lit+1]=255&t,e.pending_buf[e.l_buf+e.last_lit]=255&r,e.last_lit++,0===t?e.dyn_ltree[2*r]++:(e.matches++,t--,e.dyn_ltree[2*(A[r]+u+1)]++,e.dyn_dtree[2*N(t)]++),e.last_lit===e.lit_bufsize-1},r._tr_align=function(e){P(e,2,3),L(e,m,z),function(e){16===e.bi_valid?(U(e,e.bi_buf),e.bi_buf=0,e.bi_valid=0):8<=e.bi_valid&&(e.pending_buf[e.pending++]=255&e.bi_buf,e.bi_buf>>=8,e.bi_valid-=8)}(e)}},{"../utils/common":41}],53:[function(e,t,r){"use strict";t.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,t,r){(function(e){!function(r,n){"use strict";if(!r.setImmediate){var i,s,t,a,o=1,h={},u=!1,l=r.document,e=Object.getPrototypeOf&&Object.getPrototypeOf(r);e=e&&e.setTimeout?e:r,i="[object process]"==={}.toString.call(r.process)?function(e){process.nextTick(function(){c(e)})}:function(){if(r.postMessage&&!r.importScripts){var e=!0,t=r.onmessage;return r.onmessage=function(){e=!1},r.postMessage("","*"),r.onmessage=t,e}}()?(a="setImmediate$"+Math.random()+"$",r.addEventListener?r.addEventListener("message",d,!1):r.attachEvent("onmessage",d),function(e){r.postMessage(a+e,"*")}):r.MessageChannel?((t=new MessageChannel).port1.onmessage=function(e){c(e.data)},function(e){t.port2.postMessage(e)}):l&&"onreadystatechange"in l.createElement("script")?(s=l.documentElement,function(e){var t=l.createElement("script");t.onreadystatechange=function(){c(e),t.onreadystatechange=null,s.removeChild(t),t=null},s.appendChild(t)}):function(e){setTimeout(c,0,e)},e.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),r=0;r<t.length;r++)t[r]=arguments[r+1];var n={callback:e,args:t};return h[o]=n,i(o),o++},e.clearImmediate=f}function f(e){delete h[e]}function c(e){if(u)setTimeout(c,0,e);else{var t=h[e];if(t){u=!0;try{!function(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r)}}(t)}finally{f(e),u=!1}}}}function d(e){e.source===r&&"string"==typeof e.data&&0===e.data.indexOf(a)&&c(+e.data.slice(a.length))}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,"undefined"!=typeof __webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[10])(10)});

/***/ }),

/***/ "./src/anki.ts":
/*!*********************!*\
  !*** ./src/anki.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Anki: () => (/* binding */ Anki)
/* harmony export */ });
/* harmony import */ var anki_apkg_generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! anki-apkg-generator */ "./node_modules/anki-apkg-generator/dist/index.min.js");
/* harmony import */ var anki_apkg_generator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(anki_apkg_generator__WEBPACK_IMPORTED_MODULE_0__);

class Anki {
    constructor({ kikutanType } = {}) {
        this.kikutanWords = {};
        this.idCount = 0;
        this.idDate = new Date();
        this.audioFiles = [];
        this.reg = /(^|(?<=\/))[^/]*$/;
        this.weekRange = [];
        this.kikutanType = kikutanType;
    }
    async sevenZipWorker(args) {
        return new Promise(async (resolve, reject) => {
            const worker = new Worker(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u("src_worker_ts"), __webpack_require__.b));
            worker.postMessage(args);
            worker.onmessage = (result) => {
                if (result.data instanceof Error) {
                    reject(result.data.message);
                    return;
                }
                if (!(result.data instanceof Array)) {
                    reject("unknown return type");
                    return;
                }
                resolve(result.data);
            };
        });
    }
    async loadApkFile(file) {
        return new Promise(async (resolve, reject) => {
            const unzippedFiles = await this.sevenZipWorker({
                file: file,
                args: ["x", file.name],
                filesToUnzip: [
                    "res/raw/app_redux_json_android_basic.json",
                    "res/raw/app_redux_json_android_advanced.json",
                    "res/raw/app_redux_json_android_super.json"
                ]
            });
            try {
                this.kikutanWords.basic = JSON.parse(await unzippedFiles[0].text()).words;
                this.kikutanWords.advanced = JSON.parse(await unzippedFiles[1].text()).words;
                this.kikutanWords.super = JSON.parse(await unzippedFiles[2].text()).words;
                console.log(`Extracted content`);
                resolve();
            }
            catch (error) {
                reject(`Error extracting content: ${error}`);
            }
            //anki.audioFileFS.nameTable.forEach((e)=>console.log(e.name))
            // 例: 仮想ファイルシステム内のファイルを読み込む
        });
    }
    async loadAudioZipFile(files) {
        return new Promise(async (resolve, reject) => {
            const persistWordsStoreFile = Array.from(files).find((file) => file.name == "persist-wordsStore");
            const audioZipFile = Array.from(files).find((file) => file.name == `${this.kikutanType}.zip`);
            if (typeof audioZipFile == "undefined" || typeof persistWordsStoreFile == "undefined") {
                reject(`"${this.kikutanType}.zip" or "persist-wordsStore" not found`);
                return;
            }
            const persistWordsStore = JSON.parse(JSON.parse(await persistWordsStoreFile.text()).downloadedFiles);
            const unzippedFiles = await this.sevenZipWorker({
                file: audioZipFile,
                args: ["e", audioZipFile.name],
                filesToUnzip: "all"
            });
            const MissingFiles = [];
            Object.values(persistWordsStore).forEach((object, index) => {
                var _a, _b, _c;
                var day = Number((_a = object.local.match(/(?<=day-)[0-9]+(?=-)/)) === null || _a === void 0 ? void 0 : _a[0]);
                if (!(this.weekRange[0] * 7 - 6 <= day && day <= this.weekRange[1] * 7)) {
                    return;
                }
                var localFileName = `${((_b = object.local.match(this.reg)) !== null && _b !== void 0 ? _b : [])[0]}`;
                var remoteFileName = `_${((_c = object.remote.match(this.reg)) !== null && _c !== void 0 ? _c : [])[0]}`;
                var file = unzippedFiles.find((file) => { var _a; return ((_a = file.name.match(this.reg)) !== null && _a !== void 0 ? _a : [])[0] == localFileName; });
                if (typeof file == "undefined") {
                    MissingFiles.push(localFileName);
                    return;
                }
                this.audioFiles.push(new File([file], remoteFileName, { type: file.type }));
                console.log(`${localFileName} > ${remoteFileName}`);
            });
            if (MissingFiles.length > 0) {
                reject(`${this.kikutanType}.zipの中の以下のファイルが不足しています "\n ${MissingFiles.join(",\n")}"`);
                return;
            }
            console.log(persistWordsStore);
            resolve();
        });
    }
    generateID() {
        this.idCount++;
        return this.idDate.getTime() + this.idCount;
    }
    async exportAnkiDeck() {
        return new Promise(async (resolve, reject) => {
            var _a;
            const fields = [
                { name: 'id' },
                { name: 'word' },
                { name: 'meaning' },
                { name: 'pronounce' },
                { name: 'word-audio' },
                { name: 'meaning-audio' },
                { name: 'phrase1-t0' },
                { name: 'phrase1-t1' },
                { name: 'phrase1-t2' },
                { name: 'phrase1-audio' },
                { name: 'phrase1-translated-t0' },
                { name: 'phrase1-translated-t1' },
                { name: 'phrase1-translated-t2' },
                { name: 'phrase2-t0' },
                { name: 'phrase2-t1' },
                { name: 'phrase2-t2' },
                { name: 'phrase2-audio' },
                { name: 'phrase2-translated-t0' },
                { name: 'phrase2-translated-t1' },
                { name: 'phrase2-translated-t2' },
                { name: 'sentence-t0' },
                { name: 'sentence-t1' },
                { name: 'sentence-t2' },
                { name: 'sentence-audio' },
                { name: 'sentence-translated-t0' },
                { name: 'sentence-translated-t1' },
                { name: 'sentence-translated-t2' },
            ];
            const card = new anki_apkg_generator__WEBPACK_IMPORTED_MODULE_0__.Card();
            card.setCss(`
            @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap');
            *{
                font-family: "Noto Sans JP", sans-serif;
                font-optical-sizing: auto;
                font-weight: 400;
                font-style: normal;
            }
            .word{
                margin: 8px 0;
                font-weight: 700;
            }

            `).setTemplates([
                {
                    name: '{{id}}',
                    qfmt: `
                [sound:{{sentence-audio}}] {{sentence-t0}} <span style="color:red">{{sentence-t1}}</span> {{sentence-t2}}`,
                    afmt: `
                {{FrontSide}}
                <hr id="answer">
                {{sentence-translated-t0}}<span style="color:red">{{sentence-translated-t1}}</span>{{sentence-translated-t2}}<br>
                <div class="word">
                {{word}} : {{meaning}}
                </div>
                `
                },
            ]);
            const model = new anki_apkg_generator__WEBPACK_IMPORTED_MODULE_0__.Model(card);
            model
                .setName('キクタン')
                .setSticky(true)
                .setFields(fields.map((f, index) => new anki_apkg_generator__WEBPACK_IMPORTED_MODULE_0__.Field(f.name).setOrd(index)));
            if (typeof this.kikutanWords.advanced == "undefined") {
                return;
            }
            var week = 0;
            const deckList = [];
            if (!this.kikutanType) {
                throw new Error("kikutanType is not set");
            }
            Object.values((_a = this.kikutanWords[this.kikutanType]) !== null && _a !== void 0 ? _a : {}).forEach((word, index) => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
                if (index % 112 == 0) {
                    week++;
                    if (!(this.weekRange[0] <= week && week <= this.weekRange[1])) {
                        return;
                    }
                    const deck = new anki_apkg_generator__WEBPACK_IMPORTED_MODULE_0__.Deck(`week${week}`);
                    deckList.push(deck);
                    deck.name = `キクタン ${this.kikutanType}::week ${week}`;
                    deck.id = this.generateID();
                }
                if (!(this.weekRange[0] <= week && week <= this.weekRange[1])) {
                    return;
                }
                const note = new anki_apkg_generator__WEBPACK_IMPORTED_MODULE_0__.Note(model);
                note
                    .setFieldsValue([
                    word.id,
                    word.word,
                    word.meaning,
                    word.pronounce,
                    "_" + ((_a = (word.audioUrl.match(this.reg))) !== null && _a !== void 0 ? _a : [])[0],
                    "_" + ((_b = (word.translatedAudioUrl.match(this.reg))) !== null && _b !== void 0 ? _b : [])[0],
                    word.phrase.termsArray[0],
                    word.phrase.termsArray[1],
                    word.phrase.termsArray[2],
                    "_" + ((_c = (word.phrase.audioUrl.match(this.reg))) !== null && _c !== void 0 ? _c : [])[0],
                    word.translatedPhrase.termsArray[0],
                    word.translatedPhrase.termsArray[1],
                    word.translatedPhrase.termsArray[2],
                    (_e = (_d = word.phrase2) === null || _d === void 0 ? void 0 : _d.termsArray[0]) !== null && _e !== void 0 ? _e : "",
                    (_g = (_f = word.phrase2) === null || _f === void 0 ? void 0 : _f.termsArray[1]) !== null && _g !== void 0 ? _g : "",
                    (_j = (_h = word.phrase2) === null || _h === void 0 ? void 0 : _h.termsArray[2]) !== null && _j !== void 0 ? _j : "",
                    word.phrase2 ? ("_" + ((_k = (word.phrase2.audioUrl.match(this.reg))) !== null && _k !== void 0 ? _k : [])[0]) : "",
                    (_m = (_l = word.translatedPhrase2) === null || _l === void 0 ? void 0 : _l.termsArray[0]) !== null && _m !== void 0 ? _m : "",
                    (_p = (_o = word.translatedPhrase2) === null || _o === void 0 ? void 0 : _o.termsArray[1]) !== null && _p !== void 0 ? _p : "",
                    (_r = (_q = word.translatedPhrase2) === null || _q === void 0 ? void 0 : _q.termsArray[2]) !== null && _r !== void 0 ? _r : "",
                    word.sentence.termsArray[0],
                    word.sentence.termsArray[1],
                    word.sentence.termsArray[2],
                    "_" + ((_s = (word.sentence.audioUrl.match(this.reg))) !== null && _s !== void 0 ? _s : [])[0],
                    word.translatedSentence.termsArray[0],
                    word.translatedSentence.termsArray[1],
                    word.translatedSentence.termsArray[2],
                ])
                    .setName(word.id)
                    .setId(this.generateID());
                deckList.slice(-1)[0].addNote(note);
                //console.log(`week${week} ${word.word}`)
            });
            const mediaList = [];
            this.audioFiles.forEach(async (file) => {
                console.log(file.name);
                mediaList.push(new anki_apkg_generator__WEBPACK_IMPORTED_MODULE_0__.Media(await file.arrayBuffer(), file.name));
            });
            const pkg = new anki_apkg_generator__WEBPACK_IMPORTED_MODULE_0__.Package(deckList, mediaList);
            console.log(pkg);
            const compressedData = await pkg.writeToFile();
            const blob = new Blob([compressedData], { type: "application/apkg" });
            const file = new File([blob], `キクタン${this.kikutanType}.apkg`, { type: blob.type });
            resolve(file);
        });
    }
    setKikutanType(type) {
        this.kikutanType = type;
        if (typeof this.kikutanWords[type] == "undefined") {
            throw new Error("kikutan words not loaded");
        }
        return Math.ceil((Object.values(this.kikutanWords[type]).length) / 112);
    }
}


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _anki__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anki */ "./src/anki.ts");

const anki = new _anki__WEBPACK_IMPORTED_MODULE_0__.Anki();
window.anki = anki;
window.onload = async () => {
    document.getElementById("apkfile").onchange = async (event) => {
        Array.from(document.querySelectorAll(".status.apk")).forEach((element) => {
            element.classList.remove("displayed");
        });
        const files = document.getElementById("apkfile").files;
        if (files) {
            if (!files[0].name.endsWith(".apk")) {
                alert("APKファイルではありません");
                return;
            }
            document.getElementById("apkLoading").classList.add("displayed");
            anki.loadApkFile(files[0]).then(() => {
                document.getElementById("apkLoading").classList.remove("displayed");
                console.log("APK file loaded successfully.");
                document.getElementById("type").disabled = false;
                document.getElementById("apkSuccess").classList.add("displayed");
                if (document.getElementById("type").value !== "") {
                    document.getElementById("weekStart").disabled = false;
                    document.getElementById("weekEnd").disabled = false;
                    document.getElementById("audioFile").disabled = false;
                    document.getElementById("download").disabled = false;
                    document.getElementById("share").disabled = false;
                }
            }).catch((error) => {
                document.getElementById("apkLoading").classList.remove("displayed");
                console.error("Error loading APK file:", error);
                document.getElementById("type").disabled = true;
                document.getElementById("apkError").classList.add("displayed");
                document.getElementById("apkError").innerText = `エラー : ${error}`;
                document.getElementById("weekStart").disabled = true;
                document.getElementById("weekEnd").disabled = true;
                document.getElementById("audioFile").disabled = true;
                document.getElementById("download").disabled = true;
                document.getElementById("share").disabled = true;
            });
        }
    };
    document.getElementById("download").onclick = async (event) => {
        Array.from(document.querySelectorAll(".status.export")).forEach((element) => {
            element.classList.remove("displayed");
        });
        document.getElementById("exportLoading").classList.add("displayed");
        anki.exportAnkiDeck().then((file) => {
            document.getElementById("exportLoading").classList.remove("displayed");
            document.getElementById("exportSuccess").classList.add("displayed");
            const link = document.createElement("a");
            link.href = URL.createObjectURL(file);
            link.download = `キクタン${document.getElementById("type").value}.apkg`; // ダウンロードするファイル名を指定
            link.click();
            URL.revokeObjectURL(link.href);
            console.log('success');
        }).catch((error) => {
            document.getElementById("exportLoading").classList.remove("displayed");
            document.getElementById("exportError").classList.add("displayed");
            document.getElementById("exportError").innerText = `エラー : ${error}`;
        });
    };
    document.getElementById("share").onclick = async (event) => {
        Array.from(document.querySelectorAll(".status.export")).forEach((element) => {
            element.classList.remove("displayed");
        });
        document.getElementById("exportLoading").classList.add("displayed");
        anki.exportAnkiDeck().then(async (file) => {
            await navigator.share({
                files: [file]
            });
            console.log('success');
            document.getElementById("exportLoading").classList.remove("displayed");
            document.getElementById("exportSuccess").classList.add("displayed");
        }).catch((error) => {
            document.getElementById("exportLoading").classList.remove("displayed");
            document.getElementById("exportError").classList.add("displayed");
            document.getElementById("exportError").innerText = `エラー : ${error}`;
        });
    };
    document.getElementById("type").onchange = async (event) => {
        document.getElementById("optionDefault").disabled = true;
        const type = document.getElementById("type").value;
        const week = anki.setKikutanType(type);
        loadAudioFile(true);
        document.getElementById("weekStart").disabled = false;
        document.getElementById("weekStart").value = "1";
        document.getElementById("weekStart").max = week.toString();
        document.getElementById("weekEnd").disabled = false;
        document.getElementById("weekEnd").value = week.toString();
        document.getElementById("weekEnd").max = week.toString();
        document.getElementById("audioFile").disabled = false;
        document.getElementById("download").disabled = false;
        document.getElementById("share").disabled = false;
        anki.weekRange = [1, week];
    };
    document.getElementById("audioFile").onchange = async (event) => {
        loadAudioFile();
        //document.getElementById("loading")!.style.display = "block"
    };
    Array.from(document.getElementsByClassName("range")).forEach((element) => {
        element.onchange = () => {
            loadAudioFile(true);
            const start = parseInt(document.getElementById("weekStart").value);
            const end = parseInt(document.getElementById("weekEnd").value);
            if (start > end) {
                document.getElementById("weekStart").value = end.toString();
            }
            if (end < start) {
                document.getElementById("weekEnd").value = start.toString();
            }
            anki.weekRange = [start, end];
            console.log(anki.weekRange);
        };
    });
};
function loadAudioFile(disableError = false) {
    const files = document.getElementById("audioFile").files;
    if (files == null)
        return;
    if (files.length == 0)
        return;
    Array.from(document.querySelectorAll(".status.audio")).forEach((element) => {
        element.classList.remove("displayed");
    });
    document.getElementById("audioLoading").classList.add("displayed");
    anki.loadAudioZipFile(files).then(() => {
        document.getElementById("audioLoading").classList.remove("displayed");
        //document.getElementById("apkLoading")!.style.display = "none"
        console.log("audio file loaded successfully.");
        document.getElementById("audioSuccess").classList.add("displayed");
    }).catch((error) => {
        //document.getElementById("apkLoading")!.style.display = "none"
        document.getElementById("audioLoading").classList.remove("displayed");
        console.error("Error loading audio file:", error);
        document.getElementById("audioError").classList.add("displayed");
        document.getElementById("audioError").innerText = `エラー : ${error}`;
    });
}

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map