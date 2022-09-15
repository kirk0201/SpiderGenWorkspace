!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("@firebase/app-compat"),require("@firebase/app")):"function"==typeof define&&define.amd?define(["@firebase/app-compat","@firebase/app"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).firebase,e.firebase.INTERNAL.modularAPIs)}(this,function(ye,Ae){"use strict";try{!(function(){function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t,r,n=e(ye);const h={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();var n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_;const a=[];for(let l=0;l<r.length;l+=3){var o=r[l],i=l+1<r.length,s=i?r[l+1]:0,c=l+2<r.length,h=c?r[l+2]:0;let e=(15&s)<<2|h>>6,t=63&h;c||(t=64,i||(e=64)),a.push(n[o>>2],n[(3&o)<<4|s>>4],n[e],n[t])}return a.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(function(t){const r=[];let n=0;for(let a=0;a<t.length;a++){let e=t.charCodeAt(a);e<128?r[n++]=e:(e<2048?r[n++]=e>>6|192:(55296==(64512&e)&&a+1<t.length&&56320==(64512&t.charCodeAt(a+1))?(e=65536+((1023&e)<<10)+(1023&t.charCodeAt(++a)),r[n++]=e>>18|240,r[n++]=e>>12&63|128):r[n++]=e>>12|224,r[n++]=e>>6&63|128),r[n++]=63&e|128)}return r}(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let r=0,n=0;for(;r<e.length;){var a,o,i=e[r++];i<128?t[n++]=String.fromCharCode(i):191<i&&i<224?(a=e[r++],t[n++]=String.fromCharCode((31&i)<<6|63&a)):239<i&&i<365?(o=((7&i)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536,t[n++]=String.fromCharCode(55296+(o>>10)),t[n++]=String.fromCharCode(56320+(1023&o))):(a=e[r++],o=e[r++],t[n++]=String.fromCharCode((15&i)<<12|(63&a)<<6|63&o))}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();var r=t?this.charToByteMapWebSafe_:this.charToByteMap_;const n=[];for(let c=0;c<e.length;){var a=r[e.charAt(c++)],o=c<e.length?r[e.charAt(c)]:0;++c;var i=c<e.length?r[e.charAt(c)]:64;++c;var s=c<e.length?r[e.charAt(c)]:64;if(++c,null==a||null==o||null==i||null==s)throw Error();n.push(a<<2|o>>4),64!==i&&(n.push(o<<4&240|i>>2),64!==s&&n.push(i<<6&192|s))}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},i=function(e){try{return h.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};class o{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(r){return(e,t)=>{e?this.reject(e):this.resolve(t),"function"==typeof r&&(this.promise.catch(()=>{}),1===r.length?r(e):r(e,t))}}}function a(){return"object"==typeof indexedDB}class s extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,s.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,c.prototype.create)}}class c{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){var n,r=t[0]||{},a=`${this.service}/${e}`,o=this.errors[e],o=o?(n=r,o.replace(l,(e,t)=>{var r=n[t];return null!=r?String(r):`<${t}?>`})):"Error",o=`${this.serviceName}: ${o} (${a}).`;return new s(a,o,r)}}const l=/\{\$([^}]+)}/g;function p(e){return JSON.parse(e)}function u(e){const t=function(e){let t={},r={},n={},a="";try{var o=e.split(".");t=p(i(o[0])||""),r=p(i(o[1])||""),a=o[2],n=r.d||{},delete r.d}catch(e){}return{header:t,claims:r,data:n,signature:a}}(e).claims;return"object"==typeof t&&t.hasOwnProperty("iat")?t.iat:null}function d(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{const t=16*Math.random()|0,r="x"===e?t:3&t|8;return r.toString(16)})}const g=144e5,f=.5;class v{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}(r=t=t||{})[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT";const b={debug:t.DEBUG,verbose:t.VERBOSE,info:t.INFO,warn:t.WARN,error:t.ERROR,silent:t.SILENT},E=t.INFO,_={[t.DEBUG]:"log",[t.VERBOSE]:"log",[t.INFO]:"info",[t.WARN]:"warn",[t.ERROR]:"error"},w=(e,t,...r)=>{if(!(t<e.logLevel)){var n=(new Date).toISOString(),a=_[t];if(!a)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[a](`[${n}]  ${e.name}:`,...r)}};const m=new Map,k={activated:!1,tokenObservers:[]},y={initialized:!1,enabled:!1};function A(e){return m.get(e)||k}function T(e,t){m.set(e,t)}const C="https://content-firebaseappcheck.googleapis.com/v1",S="exchangeDebugToken",O={OFFSET_DURATION:3e5,RETRIAL_MIN_WAIT:3e4,RETRIAL_MAX_WAIT:96e4};class R{constructor(e,t,r,n,a){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=r,this.lowerBound=n,this.upperBound=a,this.pending=null,a<(this.nextErrorWaitInterval=n))throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new o,t=this.getNextRun(e),await new Promise(e=>{setTimeout(e,t)}),this.pending.resolve(),await this.pending.promise,this.pending=new o,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(e){this.retryPolicy(e)?this.process(!1).catch(()=>{}):this.stop()}var t}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();var t=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),t}}const P=new c("appCheck","AppCheck",{"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"});function I(e=!1){var t;return e?null===(t=self.grecaptcha)||void 0===t?void 0:t.enterprise:self.grecaptcha}function D(e){if(!A(e).activated)throw P.create("use-before-activation",{appName:e.name})}function x(e){var t=Math.round(e/1e3),r=Math.floor(t/86400),n=Math.floor((t-3600*r*24)/3600),a=Math.floor((t-3600*r*24-3600*n)/60),t=t-3600*r*24-3600*n-60*a;let o="";return r&&(o+=N(r)+"d:"),n&&(o+=N(n)+"h:"),o+=N(a)+"m:"+N(t)+"s",o}function N(e){return 0===e?"00":10<=e?e.toString():"0"+e}async function M({url:e,body:t},r){const n={"Content-Type":"application/json"},a=r.getImmediate({optional:!0});!a||(c=await a.getHeartbeatsHeader())&&(n["X-Firebase-Client"]=c);var o={method:"POST",body:JSON.stringify(t),headers:n};let i;try{i=await fetch(e,o)}catch(e){throw P.create("fetch-network-error",{originalErrorMessage:null===e||void 0===e?void 0:e.message})}if(200!==i.status)throw P.create("fetch-status-error",{httpStatus:i.status});let s;try{s=await i.json()}catch(e){throw P.create("fetch-parse-error",{originalErrorMessage:null===e||void 0===e?void 0:e.message})}var c=s.ttl.match(/^([\d.]+)(s)$/);if(!c||!c[2]||isNaN(Number(c[1])))throw P.create("fetch-parse-error",{originalErrorMessage:"ttl field (timeToLive) is not in standard Protobuf Duration "+`format: ${s.ttl}`});o=1e3*Number(c[1]),c=Date.now();return{token:s.token,expireTimeMillis:c+o,issuedAtTimeMillis:c}}const L="firebase-app-check-database",B=1,j="firebase-app-check-store",H="debug-token";let $=null;function W(){return $||($=new Promise((t,r)=>{try{const e=indexedDB.open(L,B);e.onsuccess=e=>{t(e.target.result)},e.onerror=e=>{var t;r(P.create("storage-open",{originalErrorMessage:null===(t=e.target.error)||void 0===t?void 0:t.message}))},e.onupgradeneeded=e=>{const t=e.target.result;0===e.oldVersion&&t.createObjectStore(j,{keyPath:"compositeKey"})}}catch(e){r(P.create("storage-open",{originalErrorMessage:null===e||void 0===e?void 0:e.message}))}}),$)}async function F(e,t){const r=await W(),n=r.transaction(j,"readwrite"),a=n.objectStore(j),o=a.put({compositeKey:e,value:t});return new Promise((t,r)=>{o.onsuccess=e=>{t()},n.onerror=e=>{var t;r(P.create("storage-set",{originalErrorMessage:null===(t=e.target.error)||void 0===t?void 0:t.message}))}})}async function V(e){const t=await W(),a=t.transaction(j,"readonly"),r=a.objectStore(j),o=r.get(e);return new Promise((r,n)=>{o.onsuccess=e=>{var t=e.target.result;r(t?t.value:void 0)},a.onerror=e=>{var t;n(P.create("storage-get",{originalErrorMessage:null===(t=e.target.error)||void 0===t?void 0:t.message}))}})}function K(e){return`${e.options.appId}-${e.name}`}const z=new class{constructor(e){this.name=e,this._logLevel=E,this._logHandler=w,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in t))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?b[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,t.DEBUG,...e),this._logHandler(this,t.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,t.VERBOSE,...e),this._logHandler(this,t.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,t.INFO,...e),this._logHandler(this,t.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,t.WARN,...e),this._logHandler(this,t.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,t.ERROR,...e),this._logHandler(this,t.ERROR,...e)}}("@firebase/app-check");async function U(t){if(a()){let e=void 0;try{e=await V(K(t))}catch(e){z.warn(`Failed to read token from IndexedDB. Error: ${e}`)}return e}}function q(e,t){return a()?F(K(e),t).catch(e=>{z.warn(`Failed to write token to IndexedDB. Error: ${e}`)}):Promise.resolve()}async function G(){let e=void 0;try{e=await V(H)}catch(e){}if(e)return e;var t,r=d();return t=r,F(H,t).catch(e=>z.warn(`Failed to persist debug token to IndexedDB. Error: ${e}`)),r}function X(){return y.enabled}async function J(){var e=y;if(e.enabled&&e.token)return e.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)}function Y(){var e=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}();const t=y;if(t.initialized=!0,"string"==typeof e.FIREBASE_APPCHECK_DEBUG_TOKEN||!0===e.FIREBASE_APPCHECK_DEBUG_TOKEN){t.enabled=!0;const r=new o;t.token=r,"string"==typeof e.FIREBASE_APPCHECK_DEBUG_TOKEN?r.resolve(e.FIREBASE_APPCHECK_DEBUG_TOKEN):r.resolve(G())}}const Z={error:"UNKNOWN_ERROR"};async function Q(e,t=!1){var r=e.app;D(r);const n=A(r);let a=n.token,o=void 0;if(a||(s=await n.cachedTokenPromise)&&ae(s)&&(a=s),!t&&a&&ae(a))return{token:a.token};let i=!1;if(X()){n.exchangeTokenPromise||(n.exchangeTokenPromise=M(function(e,t){var{projectId:r,appId:n,apiKey:a}=e.options;return{url:`${C}/projects/${r}/apps/${n}:${S}?key=${a}`,body:{debug_token:t}}}(r,await J()),e.heartbeatServiceProvider).then(e=>(n.exchangeTokenPromise=void 0,e)),i=!0);var s=await n.exchangeTokenPromise;return await q(r,s),T(r,Object.assign(Object.assign({},n),{token:s})),{token:s.token}}try{n.exchangeTokenPromise||(n.exchangeTokenPromise=n.provider.getToken().then(e=>(n.exchangeTokenPromise=void 0,e)),i=!0),a=await n.exchangeTokenPromise}catch(e){"appCheck/throttled"===e.code?z.warn(e.message):z.error(e),o=e}let c;return a?(c={token:a.token},T(r,Object.assign(Object.assign({},n),{token:a})),await q(r,a)):c=(e=o,{token:function(e){return h.encodeString(JSON.stringify(e),!1)}(Z),error:e}),i&&ne(r,c),c}function ee(e,t,r,n){var a=e["app"];const o=A(a);var i={next:r,error:n,type:t};if(T(a,Object.assign(Object.assign({},o),{tokenObservers:[...o.tokenObservers,i]})),o.token&&ae(o.token)){const s=o.token;Promise.resolve().then(()=>{r({token:s.token}),re(e)}).catch(()=>{})}o.cachedTokenPromise.then(()=>re(e))}function te(e,t){const r=A(e);var n=r.tokenObservers.filter(e=>e.next!==t);0===n.length&&r.tokenRefresher&&r.tokenRefresher.isRunning()&&r.tokenRefresher.stop(),T(e,Object.assign(Object.assign({},r),{tokenObservers:n}))}function re(e){var t=e["app"],r=A(t);let n=r.tokenRefresher;n||(n=function(r){const n=r["app"];return new R(async()=>{var e=A(n);let t;if(t=e.token?await Q(r,!0):await Q(r),t.error)throw t.error},()=>!0,()=>{var e=A(n);if(e.token){var t=e.token.issuedAtTimeMillis+.5*(e.token.expireTimeMillis-e.token.issuedAtTimeMillis)+3e5,e=e.token.expireTimeMillis-3e5,t=Math.min(t,e);return Math.max(0,t-Date.now())}return 0},O.RETRIAL_MIN_WAIT,O.RETRIAL_MAX_WAIT)}(e),T(t,Object.assign(Object.assign({},r),{tokenRefresher:n}))),!n.isRunning()&&r.isTokenAutoRefreshEnabled&&n.start()}function ne(e,t){for(const r of A(e).tokenObservers)try{"EXTERNAL"===r.type&&null!=t.error?r.error(t.error):r.next(t)}catch(e){}}function ae(e){return 0<e.expireTimeMillis-Date.now()}class oe{constructor(e,t){this.app=e,this.heartbeatServiceProvider=t}_delete(){var e=A(this.app)["tokenObservers"];for(const t of e)te(this.app,t.next);return Promise.resolve()}}const ie="https://www.google.com/recaptcha/api.js",se="https://www.google.com/recaptcha/enterprise.js";function ce(t,r){var e=A(t);const n=new o;T(t,Object.assign(Object.assign({},e),{reCAPTCHAState:{initialized:n}}));const a=pe(t);e=I(!1);return e?le(t,r,e,a,n):function(e){const t=document.createElement("script");t.src=ie,t.onload=e,document.head.appendChild(t)}(()=>{var e=I(!1);if(!e)throw new Error("no recaptcha");le(t,r,e,a,n)}),n.promise}function he(t,r){var e=A(t);const n=new o;T(t,Object.assign(Object.assign({},e),{reCAPTCHAState:{initialized:n}}));const a=pe(t);e=I(!0);return e?le(t,r,e,a,n):function(e){const t=document.createElement("script");t.src=se,t.onload=e,document.head.appendChild(t)}(()=>{var e=I(!0);if(!e)throw new Error("no recaptcha");le(t,r,e,a,n)}),n.promise}function le(n,a,o,i,s){o.ready(()=>{var e,t,r;e=n,t=o.render(i,{sitekey:a,size:"invisible"}),r=A(e),T(e,Object.assign(Object.assign({},r),{reCAPTCHAState:Object.assign(Object.assign({},r.reCAPTCHAState),{widgetId:t})})),s.resolve(o)})}function pe(e){var t=`fire_app_check_${e.name}`;const r=document.createElement("div");return r.id=t,r.style.display="none",document.body.appendChild(r),t}async function ue(n){D(n);const a=await A(n).reCAPTCHAState.initialized.promise;return new Promise((e,t)=>{const r=A(n).reCAPTCHAState;a.ready(()=>{e(a.execute(r.widgetId,{action:"fire_app_check"}))})})}class de{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(){be(this._throttleData);var t=await ue(this._app).catch(e=>{throw P.create("recaptcha-error")});let e;try{e=await M(function(e,t){var{projectId:r,appId:n,apiKey:a}=e.options;return{url:`${C}/projects/${r}/apps/${n}:exchangeRecaptchaV3Token?key=${a}`,body:{recaptcha_v3_token:t}}}(this._app,t),this._heartbeatServiceProvider)}catch(e){throw null!==(t=e.code)&&void 0!==t&&t.includes("fetch-status-error")?(this._throttleData=ve(Number(null===(t=e.customData)||void 0===t?void 0:t.httpStatus),this._throttleData),P.create("throttled",{time:x(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):e}return this._throttleData=null,e}initialize(e){this._app=e,this._heartbeatServiceProvider=Ae._getProvider(e,"heartbeat"),ce(e,this._siteKey).catch(()=>{})}isEqual(e){return e instanceof de&&this._siteKey===e._siteKey}}class ge{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(){be(this._throttleData);var t=await ue(this._app).catch(e=>{throw P.create("recaptcha-error")});let e;try{e=await M(function(e,t){var{projectId:r,appId:n,apiKey:a}=e.options;return{url:`${C}/projects/${r}/apps/${n}:exchangeRecaptchaEnterpriseToken?key=${a}`,body:{recaptcha_enterprise_token:t}}}(this._app,t),this._heartbeatServiceProvider)}catch(e){throw null!==(t=e.code)&&void 0!==t&&t.includes("fetch-status-error")?(this._throttleData=ve(Number(null===(t=e.customData)||void 0===t?void 0:t.httpStatus),this._throttleData),P.create("throttled",{time:x(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):e}return this._throttleData=null,e}initialize(e){this._app=e,this._heartbeatServiceProvider=Ae._getProvider(e,"heartbeat"),he(e,this._siteKey).catch(()=>{})}isEqual(e){return e instanceof ge&&this._siteKey===e._siteKey}}class fe{constructor(e){this._customProviderOptions=e}async getToken(){var e=await this._customProviderOptions.getToken(),t=u(e.token),t=null!==t&&t<Date.now()&&0<t?1e3*t:Date.now();return Object.assign(Object.assign({},e),{issuedAtTimeMillis:t})}initialize(e){this._app=e}isEqual(e){return e instanceof fe&&this._customProviderOptions.getToken.toString()===e._customProviderOptions.getToken.toString()}}function ve(e,t){if(404===e||403===e)return{backoffCount:1,allowRequestsAfter:Date.now()+864e5,httpStatus:e};var r,n,a=t?t.backoffCount:0,n=(t=2,r=1e3*Math.pow(t,a),n=Math.round(f*r*(Math.random()-.5)*2),Math.min(g,r+n));return{backoffCount:a+1,allowRequestsAfter:Date.now()+n,httpStatus:e}}function be(e){if(e&&Date.now()-e.allowRequestsAfter<=0)throw P.create("throttled",{time:x(e.allowRequestsAfter-Date.now()),httpStatus:e.httpStatus})}function Ee(e=Ae.getApp(),t){var r;e=(r=e)&&r._delegate?r._delegate:r;const n=Ae._getProvider(e,"app-check");if(y.initialized||Y(),X()&&J().then(e=>console.log(`App Check debug token: ${e}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`)),n.isInitialized()){var a=n.getImmediate();const o=n.getOptions();if(o.isTokenAutoRefreshEnabled===t.isTokenAutoRefreshEnabled&&o.provider.isEqual(t.provider))return a;throw P.create("already-initialized",{appName:e.name})}a=n.initialize({options:t});return function(t,e,r){const n=A(t),a=Object.assign(Object.assign({},n),{activated:!0});a.provider=e,a.cachedTokenPromise=U(t).then(e=>(e&&ae(e)&&(T(t,Object.assign(Object.assign({},A(t)),{token:e})),ne(t,{token:e.token})),e)),a.isTokenAutoRefreshEnabled=void 0===r?t.automaticDataCollectionEnabled:r,T(t,a),a.provider.initialize(t)}(e,t.provider,t.isTokenAutoRefreshEnabled),A(e).isTokenAutoRefreshEnabled&&ee(a,"INTERNAL",()=>{}),a}const _e="app-check-internal";Ae._registerComponent(new v("app-check",e=>{var t,r=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat");return t=r,e=n,new oe(t,e)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider(_e).initialize()})),Ae._registerComponent(new v(_e,e=>{var t,r=e.getProvider("app-check").getImmediate();return t=r,{getToken:e=>Q(t,e),addTokenListener:e=>ee(t,"INTERNAL",e),removeTokenListener:e=>te(t.app,e)}},"PUBLIC").setInstantiationMode("EXPLICIT")),Ae.registerVersion("@firebase/app-check","0.5.12");const we=new c("appCheck","AppCheck",{"use-before-activation":"App Check is being used before activate() is called for FirebaseApp {$appName}. Call activate() before instantiating other Firebase services."});class me{constructor(e){this.app=e}activate(e,t){let r;r="string"==typeof e?new de(e):e instanceof ge||e instanceof de||e instanceof fe?e:new fe({getToken:e.getToken}),this._delegate=Ee(this.app,{provider:r,isTokenAutoRefreshEnabled:t})}setTokenAutoRefreshEnabled(e){if(!this._delegate)throw we.create("use-before-activation",{appName:this.app.name});!function(e,t){var r=e.app;const n=A(r);n.tokenRefresher&&(!0===t?n.tokenRefresher.start():n.tokenRefresher.stop()),T(r,Object.assign(Object.assign({},n),{isTokenAutoRefreshEnabled:t}))}(this._delegate,e)}getToken(e){if(!this._delegate)throw we.create("use-before-activation",{appName:this.app.name});return async function(e,t){var r=await Q(e,t);if(r.error)throw r.error;return{token:r.token}}(this._delegate,e)}onTokenChanged(e,t,r){if(!this._delegate)throw we.create("use-before-activation",{appName:this.app.name});return function(e,t,r){let n=()=>{},a=()=>{};return n=null!=t.next?t.next.bind(t):t,null!=t.error?a=t.error.bind(t):r&&(a=r),ee(e,"EXTERNAL",n,a),()=>te(e.app,n)}(this._delegate,e,t)}}const ke=e=>{var t=e.getProvider("app-compat").getImmediate();return new me(t)};n.default.INTERNAL.registerComponent(new v("appCheck-compat",ke,"PUBLIC").setServiceProps({ReCaptchaEnterpriseProvider:ge,ReCaptchaV3Provider:de,CustomProvider:fe})),n.default.registerVersion("@firebase/app-check-compat","0.2.12")}).apply(this,arguments)}catch(e){throw console.error(e),new Error("Cannot instantiate firebase-app-check-compat.js - be sure to load firebase-app.js first.")}});
//# sourceMappingURL=firebase-app-check-compat.js.map
