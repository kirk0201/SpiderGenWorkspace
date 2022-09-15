import{getApp as e,_getProvider as t,_registerComponent as n,registerVersion as r,SDK_VERSION as s}from"https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";const o=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296==(64512&s)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++r)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const s=e[t],o=t+1<e.length,i=o?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,u=s>>2,h=(3&s)<<4|i>>4;let l=(15&i)<<2|c>>6,d=63&c;a||(d=64,o||(l=64)),r.push(n[u],n[h],n[l],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(o(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=e[n++];t[r++]=String.fromCharCode((31&s)<<6|63&o)}else if(s>239&&s<365){const o=((7&s)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{const o=e[n++],i=e[n++];t[r++]=String.fromCharCode((15&s)<<12|(63&o)<<6|63&i)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const s=n[e.charAt(t++)],o=t<e.length?n[e.charAt(t)]:0;++t;const i=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==s||null==o||null==i||null==a)throw Error();const c=s<<2|o>>4;if(r.push(c),64!==i){const e=o<<4&240|i>>2;if(r.push(e),64!==a){const e=i<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},a=function(e){return function(e){const t=o(e);return i.encodeByteArray(t,!0)}(e).replace(/\./g,"")};class c extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,c.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,u.prototype.create)}}class u{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?function(e,t){return e.replace(h,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(s,n):"Error",i=`${this.serviceName}: ${o} (${r}).`;return new c(r,i,n)}}const h=/\{\$([^}]+)}/g;function l(e){return e&&e._delegate?e._delegate:e}class d{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}class _ extends c{constructor(e,t){super(p(e),`Firebase Storage: ${t} (${p(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,_.prototype)}_codeEquals(e){return p(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function p(e){return"storage/"+e}function f(){return new _("unknown","An unknown error occurred, please check the error payload for server response.")}function g(){return new _("canceled","User canceled the upload/download.")}function m(){return new _("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function b(e){return new _("invalid-argument",e)}function y(){return new _("app-deleted","The Firebase app was deleted.")}function w(e){return new _("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function T(e,t){return new _("invalid-format","String does not match format '"+e+"': "+t)}function k(e){throw new _("internal-error","Internal error: "+e)}class v{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=v.makeFromUrl(e,t)}catch(t){return new v(e,"")}if(""===n.path)return n;throw new _("invalid-default-bucket","Invalid default bucket '"+e+"'.")}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";const s=new RegExp("^gs://"+r+"(/(.*))?$","i");function o(e){e.path_=decodeURIComponent(e.path)}const i=t.replace(/[.]/g,"\\."),a=[{regex:s,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${i}/v[A-Za-z0-9_]+/b/${r}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:o},{regex:new RegExp(`^https?://${"firebasestorage.googleapis.com"===t?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${r}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:o}];for(let t=0;t<a.length;t++){const r=a[t],s=r.regex.exec(e);if(s){const e=s[r.indices.bucket];let t=s[r.indices.path];t||(t=""),n=new v(e,t),r.postModify(n);break}}if(null==n)throw function(e){return new _("invalid-url","Invalid URL '"+e+"'.")}(e);return n}}class R{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}function S(e){return"string"==typeof e||e instanceof String}function C(e){return E()&&e instanceof Blob}function E(){return"undefined"!=typeof Blob}function A(e,t,n,r){if(r<t)throw b(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw b(`Invalid value for '${e}'. Expected ${n} or less.`)}function x(e,t,n){let r=t;return null==n&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function O(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){n=n+(t(r)+"="+t(e[r]))+"&"}return n=n.slice(0,-1),n}var U;!function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"}(U||(U={}));class P{constructor(e,t,n,r,s,o,i,a,c,u,h){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=i,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=(e,t)=>{if(t)return void e(!1,new I(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const t=n.getErrorCode()===U.NO_ERROR,s=n.getStatus();if(!t||this.isRetryStatusCode_(s)){const t=n.getErrorCode()===U.ABORT;return void e(!1,new I(!1,null,t))}const o=-1!==this.successCodes_.indexOf(s);e(!0,new I(o,n))}))},t=(e,t)=>{const n=this.resolve_,r=this.reject_,s=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(s,s.getResponse());void 0!==e?n(e):n()}catch(e){r(e)}else if(null!==s){const e=f();e.serverResponse=s.getErrorText(),this.errorCallback_?r(this.errorCallback_(s,e)):r(e)}else if(t.canceled){r(this.appDelete_?y():g())}else{r(new _("retry-limit-exceeded","Max retry time for operation exceeded, please try again."))}};this.canceled_?t(0,new I(!1,null,!0)):this.backoffId_=function(e,t,n){let r=1,s=null,o=null,i=!1,a=0;function c(){return 2===a}let u=!1;function h(...e){u||(u=!0,t.apply(null,e))}function l(t){s=setTimeout((()=>{s=null,e(_,c())}),t)}function d(){o&&clearTimeout(o)}function _(e,...t){if(u)return void d();if(e)return d(),void h.call(null,e,...t);if(c()||i)return d(),void h.call(null,e,...t);let n;r<64&&(r*=2),1===a?(a=2,n=0):n=1e3*(r+Math.random()),l(n)}let p=!1;function f(e){p||(p=!0,d(),u||(null!==s?(e||(a=2),clearTimeout(s),l(0)):e||(a=1)))}return l(0),o=setTimeout((()=>{i=!0,f(!0)}),n),f}(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const t=e>=500&&e<600,n=-1!==[408,429].indexOf(e),r=-1!==this.additionalRetryCodes_.indexOf(e);return t||n||r}}class I{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function B(){return"undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function M(...e){const t=B();if(void 0!==t){const n=new t;for(let t=0;t<e.length;t++)n.append(e[t]);return n.getBlob()}if(E())return new Blob(e);throw new _("unsupported-environment","This browser doesn't seem to support creating Blobs")}const D={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class N{constructor(e,t){this.data=e,this.contentType=t||null}}function q(e,t){switch(e){case D.RAW:return new N(L(t));case D.BASE64:case D.BASE64URL:return new N(F(e,t));case D.DATA_URL:return new N(function(e){const t=new H(e);return t.base64?F(D.BASE64,t.rest):function(e){let t;try{t=decodeURIComponent(e)}catch(e){throw T(D.DATA_URL,"Malformed data URL.")}return L(t)}(t.rest)}(t),new H(t).contentType)}throw f()}function L(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|63&r);else if(55296==(64512&r)){if(n<e.length-1&&56320==(64512&e.charCodeAt(n+1))){r=65536|(1023&r)<<10|1023&e.charCodeAt(++n),t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else t.push(239,191,189)}else 56320==(64512&r)?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function F(e,t){switch(e){case D.BASE64:{const n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r){throw T(e,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?")}break}case D.BASE64URL:{const n=-1!==t.indexOf("+"),r=-1!==t.indexOf("/");if(n||r){throw T(e,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=atob(t)}catch(t){throw T(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let e=0;e<n.length;e++)r[e]=n.charCodeAt(e);return r}class H{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw T(D.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;null!=n&&(this.base64=function(e,t){if(!(e.length>=t.length))return!1;return e.substring(e.length-t.length)===t}(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=e.substring(e.indexOf(",")+1)}}class z{constructor(e,t){let n=0,r="";C(e)?(this.data_=e,n=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if(C(this.data_)){const n=function(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}(this.data_,e,t);return null===n?null:new z(n)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new z(n,!0)}}static getBlob(...e){if(E()){const t=e.map((e=>e instanceof z?e.data_:e));return new z(M.apply(null,t))}{const t=e.map((e=>S(e)?q(D.RAW,e).data:e.data_));let n=0;t.forEach((e=>{n+=e.byteLength}));const r=new Uint8Array(n);let s=0;return t.forEach((e=>{for(let t=0;t<e.length;t++)r[s++]=e[t]})),new z(r,!0)}}uploadData(){return this.data_}}function W(e){let t;try{t=JSON.parse(e)}catch(e){return null}return"object"!=typeof(n=t)||Array.isArray(n)?null:t;var n}function $(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}function j(e,t){return t}class G{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||j}}let V=null;function X(){if(V)return V;const e=[];e.push(new G("bucket")),e.push(new G("generation")),e.push(new G("metageneration")),e.push(new G("name","fullPath",!0));const t=new G("name");t.xform=function(e,t){return function(e){return!S(e)||e.length<2?e:$(e)}(t)},e.push(t);const n=new G("size");return n.xform=function(e,t){return void 0!==t?Number(t):t},e.push(n),e.push(new G("timeCreated")),e.push(new G("updated")),e.push(new G("md5Hash",null,!0)),e.push(new G("cacheControl",null,!0)),e.push(new G("contentDisposition",null,!0)),e.push(new G("contentEncoding",null,!0)),e.push(new G("contentLanguage",null,!0)),e.push(new G("contentType",null,!0)),e.push(new G("metadata","customMetadata",!0)),V=e,V}function J(e,t,n){const r={type:"file"},s=n.length;for(let e=0;e<s;e++){const s=n[e];r[s.local]=s.xform(r,t[s.server])}return function(e,t){Object.defineProperty(e,"ref",{get:function(){const n=e.bucket,r=e.fullPath,s=new v(n,r);return t._makeStorageReference(s)}})}(r,e),r}function K(e,t,n){const r=W(t);if(null===r)return null;return J(e,r,n)}function Z(e,t){const n={},r=t.length;for(let s=0;s<r;s++){const r=t[s];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}function Y(e,t,n){const r=W(n);if(null===r)return null;return function(e,t,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n.prefixes)for(const s of n.prefixes){const n=s.replace(/\/$/,""),o=e._makeStorageReference(new v(t,n));r.prefixes.push(o)}if(n.items)for(const s of n.items){const n=e._makeStorageReference(new v(t,s.name));r.items.push(n)}return r}(e,t,r)}class Q{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}function ee(e){if(!e)throw f()}function te(e,t){return function(n,r){const s=K(e,r,t);return ee(null!==s),s}}function ne(e,t){return function(n,r){const s=K(e,r,t);return ee(null!==s),function(e,t,n,r){const s=W(t);if(null===s)return null;if(!S(s.downloadTokens))return null;const o=s.downloadTokens;if(0===o.length)return null;const i=encodeURIComponent;return o.split(",").map((t=>{const s=e.bucket,o=e.fullPath;return x("/b/"+i(s)+"/o/"+i(o),n,r)+O({alt:"media",token:t})}))[0]}(s,r,e.host,e._protocol)}}function re(e){return function(t,n){let r;var s,o;return 401===t.getStatus()?r=t.getErrorText().includes("Firebase App Check token is invalid")?new _("unauthorized-app","This app does not have permission to access Firebase Storage on this project."):new _("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(o=e.bucket,r=new _("quota-exceeded","Quota for bucket '"+o+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(s=e.path,r=new _("unauthorized","User does not have permission to access '"+s+"'.")):r=n,r.serverResponse=n.serverResponse,r}}function se(e){const t=re(e);return function(n,r){let s=t(n,r);var o;return 404===n.getStatus()&&(o=e.path,s=new _("object-not-found","Object '"+o+"' does not exist.")),s.serverResponse=r.serverResponse,s}}function oe(e,t,n){const r=x(t.fullServerUrl(),e.host,e._protocol),s=e.maxOperationRetryTime,o=new Q(r,"GET",te(e,n),s);return o.errorHandler=se(t),o}function ie(e,t,n,r,s){const o={};t.isRoot?o.prefix="":o.prefix=t.path+"/",n&&n.length>0&&(o.delimiter=n),r&&(o.pageToken=r),s&&(o.maxResults=s);const i=x(t.bucketOnlyServerUrl(),e.host,e._protocol),a=e.maxOperationRetryTime,c=new Q(i,"GET",function(e,t){return function(n,r){const s=Y(e,t,r);return ee(null!==s),s}}(e,t.bucket),a);return c.urlParams=o,c.errorHandler=re(t),c}function ae(e,t,n){const r=x(t.fullServerUrl(),e.host,e._protocol)+"?alt=media",s=e.maxOperationRetryTime,o=new Q(r,"GET",((e,t)=>t),s);return o.errorHandler=se(t),void 0!==n&&(o.headers.Range=`bytes=0-${n}`,o.successCodes=[200,206]),o}function ce(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=function(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}(null,t)),r}function ue(e,t,n,r,s){const o=t.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"};const a=function(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();i["Content-Type"]="multipart/related; boundary="+a;const c=ce(t,r,s),u="--"+a+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+Z(c,n)+"\r\n--"+a+"\r\nContent-Type: "+c.contentType+"\r\n\r\n",h="\r\n--"+a+"--",l=z.getBlob(u,r,h);if(null===l)throw m();const d={name:c.fullPath},_=x(o,e.host,e._protocol),p=e.maxUploadRetryTime,f=new Q(_,"POST",te(e,n),p);return f.urlParams=d,f.headers=i,f.body=l.uploadData(),f.errorHandler=re(t),f}class he{constructor(e,t,n,r){this.current=e,this.total=t,this.finalized=!!n,this.metadata=r||null}}function le(e,t){let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch(e){ee(!1)}return ee(!!n&&-1!==(t||["active"]).indexOf(n)),n}function de(e,t,n,r,s,o,i,a){const c=new he(0,0);if(i?(c.current=i.current,c.total=i.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw new _("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.");const u=c.total-c.current;let h=u;s>0&&(h=Math.min(h,s));const l=c.current,d=l+h,p={"X-Goog-Upload-Command":h===u?"upload, finalize":"upload","X-Goog-Upload-Offset":`${c.current}`},f=r.slice(l,d);if(null===f)throw m();const g=t.maxUploadRetryTime,b=new Q(n,"POST",(function(e,n){const s=le(e,["active","final"]),i=c.current+h,a=r.size();let u;return u="final"===s?te(t,o)(e,n):null,new he(i,a,"final"===s,u)}),g);return b.headers=p,b.body=f.uploadData(),b.progressCallback=a||null,b.errorHandler=re(e),b}const _e={STATE_CHANGED:"state_changed"},pe={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function fe(e){switch(e){case"running":case"pausing":case"canceling":return pe.RUNNING;case"paused":return pe.PAUSED;case"success":return pe.SUCCESS;case"canceled":return pe.CANCELED;default:return pe.ERROR}}class ge{constructor(e,t,n){if("function"==typeof e||null!=t||null!=n)this.next=e,this.error=null!=t?t:void 0,this.complete=null!=n?n:void 0;else{const t=e;this.next=t.next,this.error=t.error,this.complete=t.complete}}}function me(e){return(...t)=>{Promise.resolve().then((()=>e(...t)))}}class be{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=U.NO_ERROR,this.sendPromise_=new Promise((e=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=U.ABORT,e()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=U.NETWORK_ERROR,e()})),this.xhr_.addEventListener("load",(()=>{e()}))}))}send(e,t,n,r){if(this.sent_)throw k("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(const e in r)r.hasOwnProperty(e)&&this.xhr_.setRequestHeader(e,r[e].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw k("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw k("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw k("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw k("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class ye extends be{initXhr(){this.xhr_.responseType="text"}}function we(){return new ye}class Te extends be{initXhr(){this.xhr_.responseType="arraybuffer"}}function ke(){return new Te}class ve extends be{initXhr(){this.xhr_.responseType="blob"}}function Re(){return new ve}class Se{constructor(e,t,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=n,this._mappings=X(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=e=>{this._request=void 0,this._chunkMultiplier=1,e._codeEquals("canceled")?(this._needToFetchStatus=!0,this.completeTransitions_()):(this._error=e,this._transition("error"))},this._metadataErrorHandler=e=>{this._request=void 0,e._codeEquals("canceled")?this.completeTransitions_():(this._error=e,this._transition("error"))},this._promise=new Promise(((e,t)=>{this._resolve=e,this._reject=t,this._start()})),this._promise.then(null,(()=>{}))}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then((([t,n])=>{switch(this._state){case"running":e(t,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused")}}))}_createResumable(){this._resolveToken(((e,t)=>{const n=function(e,t,n,r,s){const o=t.bucketOnlyServerUrl(),i=ce(t,r,s),a={name:i.fullPath},c=x(o,e.host,e._protocol),u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":i.contentType,"Content-Type":"application/json; charset=utf-8"},h=Z(i,n),l=e.maxUploadRetryTime,d=new Q(c,"POST",(function(e){let t;le(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(e){ee(!1)}return ee(S(t)),t}),l);return d.urlParams=a,d.headers=u,d.body=h,d.errorHandler=re(t),d}(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,we,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._uploadUrl=e,this._needToFetchStatus=!1,this.completeTransitions_()}),this._errorHandler)}))}_fetchStatus(){const e=this._uploadUrl;this._resolveToken(((t,n)=>{const r=function(e,t,n,r){const s=e.maxUploadRetryTime,o=new Q(n,"POST",(function(e){const t=le(e,["active","final"]);let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(e){ee(!1)}n||ee(!1);const s=Number(n);return ee(!isNaN(s)),new he(s,r.size(),"final"===t)}),s);return o.headers={"X-Goog-Upload-Command":"query"},o.errorHandler=re(t),o}(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(r,we,t,n);this._request=s,s.getPromise().then((e=>{e=e,this._request=void 0,this._updateProgress(e.current),this._needToFetchStatus=!1,e.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()}),this._errorHandler)}))}_continueUpload(){const e=262144*this._chunkMultiplier,t=new he(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken(((r,s)=>{let o;try{o=de(this._ref._location,this._ref.storage,n,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(e){return this._error=e,void this._transition("error")}const i=this._ref.storage._makeRequest(o,we,r,s);this._request=i,i.getPromise().then((e=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(e.current),e.finalized?(this._metadata=e.metadata,this._transition("success")):this.completeTransitions_()}),this._errorHandler)}))}_increaseMultiplier(){262144*this._chunkMultiplier<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken(((e,t)=>{const n=oe(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(n,we,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._metadata=e,this._transition("success")}),this._metadataErrorHandler)}))}_oneShotUpload(){this._resolveToken(((e,t)=>{const n=ue(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,we,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._metadata=e,this._updateProgress(this._blob.size()),this._transition("success")}),this._errorHandler)}))}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,void 0!==this._request&&this._request.cancel();break;case"running":const t="paused"===this._state;this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":case"error":case"success":this._state=e,this._notifyObservers();break;case"canceled":this._error=g(),this._state=e,this._notifyObservers()}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start()}}get snapshot(){const e=fe(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,n,r){const s=new ge(t||void 0,n||void 0,r||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);-1!==t&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise();this._observers.slice().forEach((e=>{this._notifyObserver(e)}))}_finishPromise(){if(void 0!==this._resolve){let e=!0;switch(fe(this._state)){case pe.SUCCESS:me(this._resolve.bind(null,this.snapshot))();break;case pe.CANCELED:case pe.ERROR:me(this._reject.bind(null,this._error))();break;default:e=!1}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(fe(this._state)){case pe.RUNNING:case pe.PAUSED:e.next&&me(e.next.bind(e,this.snapshot))();break;case pe.SUCCESS:e.complete&&me(e.complete.bind(e))();break;default:e.error&&me(e.error.bind(e,this._error))()}}resume(){const e="paused"===this._state||"pausing"===this._state;return e&&this._transition("running"),e}pause(){const e="running"===this._state;return e&&this._transition("pausing"),e}cancel(){const e="running"===this._state||"pausing"===this._state;return e&&this._transition("canceling"),e}}class Ce{constructor(e,t){this._service=e,this._location=t instanceof v?t:v.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Ce(e,t)}get root(){const e=new v(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return $(this._location.path)}get storage(){return this._service}get parent(){const e=function(e){if(0===e.length)return null;const t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this._location.path);if(null===e)return null;const t=new v(this._location.bucket,e);return new Ce(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw w(e)}}function Ee(e,t,n){e._throwIfRoot("uploadBytes");const r=ue(e.storage,e._location,X(),new z(t,!0),n);return e.storage.makeRequestWithTokens(r,we).then((t=>({metadata:t,ref:e})))}function Ae(e){const t={prefixes:[],items:[]};return xe(e,t).then((()=>t))}async function xe(e,t,n){const r={pageToken:n},s=await Oe(e,r);t.prefixes.push(...s.prefixes),t.items.push(...s.items),null!=s.nextPageToken&&await xe(e,t,s.nextPageToken)}function Oe(e,t){null!=t&&"number"==typeof t.maxResults&&A("options.maxResults",1,1e3,t.maxResults);const n=t||{},r=ie(e.storage,e._location,"/",n.pageToken,n.maxResults);return e.storage.makeRequestWithTokens(r,we)}function Ue(e,t){e._throwIfRoot("updateMetadata");const n=function(e,t,n,r){const s=x(t.fullServerUrl(),e.host,e._protocol),o=Z(n,r),i=e.maxOperationRetryTime,a=new Q(s,"PATCH",te(e,r),i);return a.headers={"Content-Type":"application/json; charset=utf-8"},a.body=o,a.errorHandler=se(t),a}(e.storage,e._location,t,X());return e.storage.makeRequestWithTokens(n,we)}function Pe(e){e._throwIfRoot("getDownloadURL");const t=function(e,t,n){const r=x(t.fullServerUrl(),e.host,e._protocol),s=e.maxOperationRetryTime,o=new Q(r,"GET",ne(e,n),s);return o.errorHandler=se(t),o}(e.storage,e._location,X());return e.storage.makeRequestWithTokens(t,we).then((e=>{if(null===e)throw new _("no-download-url","The given file does not have any download URLs.");return e}))}function Ie(e){e._throwIfRoot("deleteObject");const t=function(e,t){const n=x(t.fullServerUrl(),e.host,e._protocol),r=e.maxOperationRetryTime,s=new Q(n,"DELETE",(function(e,t){}),r);return s.successCodes=[200,204],s.errorHandler=se(t),s}(e.storage,e._location);return e.storage.makeRequestWithTokens(t,we)}function Be(e,t){const n=function(e,t){const n=t.split("/").filter((e=>e.length>0)).join("/");return 0===e.length?n:e+"/"+n}(e._location.path,t),r=new v(e._location.bucket,n);return new Ce(e.storage,r)}function Me(e,t){if(e instanceof Le){const n=e;if(null==n._bucket)throw new _("no-default-bucket","No default bucket found. Did you set the 'storageBucket' property when initializing the app?");const r=new Ce(n,n._bucket);return null!=t?Me(r,t):r}return void 0!==t?Be(e,t):e}function De(e,t){if(t&&/^[A-Za-z]+:\/\//.test(t)){if(e instanceof Le)return new Ce(e,t);throw b("To use ref(service, url), the first argument must be a Storage instance.")}return Me(e,t)}function Ne(e,t){const n=null==t?void 0:t.storageBucket;return null==n?null:v.makeFromBucketSpec(n,e)}function qe(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:s}=r;s&&(e._overrideAuthToken="string"==typeof s?s:function(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[a(JSON.stringify({alg:"none",type:"JWT"})),a(JSON.stringify(o)),""].join(".")}(s,e.app.options.projectId))}class Le{constructor(e,t,n,r,s){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=s,this._bucket=null,this._host="firebasestorage.googleapis.com",this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=r?v.makeFromBucketSpec(r,this._host):Ne(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=v.makeFromBucketSpec(this._url,e):this._bucket=Ne(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){A("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){A("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){return(await e.getToken()).token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ce(this,e)}_makeRequest(e,t,n,r){if(this._deleted)return new R(y());{const s=function(e,t,n,r,s,o){const i=O(e.urlParams),a=e.url+i,c=Object.assign({},e.headers);return function(e,t){t&&(e["X-Firebase-GMPID"]=t)}(c,t),function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(c,n),function(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!=t?t:"AppManager")}(c,o),function(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}(c,r),new P(a,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,s)}(e,this._appId,n,r,t,this._firebaseVersion);return this._requests.add(s),s.getPromise().then((()=>this._requests.delete(s)),(()=>this._requests.delete(s))),s}}async makeRequestWithTokens(e,t){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}const Fe="@firebase/storage";function He(e,t){return function(e,t){e._throwIfRoot("getBytes");const n=ae(e.storage,e._location,t);return e.storage.makeRequestWithTokens(n,ke).then((e=>void 0!==t?e.slice(0,t):e))}(e=l(e),t)}function ze(e,t,n){return Ee(e=l(e),t,n)}function We(e,t,n,r){return function(e,t,n=D.RAW,r){e._throwIfRoot("uploadString");const s=q(n,t),o=Object.assign({},r);return null==o.contentType&&null!=s.contentType&&(o.contentType=s.contentType),Ee(e,s.data,o)}(e=l(e),t,n,r)}function $e(e,t,n){return function(e,t,n){return e._throwIfRoot("uploadBytesResumable"),new Se(e,new z(t),n)}(e=l(e),t,n)}function je(e){return function(e){e._throwIfRoot("getMetadata");const t=oe(e.storage,e._location,X());return e.storage.makeRequestWithTokens(t,we)}(e=l(e))}function Ge(e,t){return Ue(e=l(e),t)}function Ve(e,t){return Oe(e=l(e),t)}function Xe(e){return Ae(e=l(e))}function Je(e){return Pe(e=l(e))}function Ke(e){return Ie(e=l(e))}function Ze(e,t){return De(e=l(e),t)}function Ye(e,t){return Be(e,t)}function Qe(n=e(),r){n=l(n);return t(n,"storage").getImmediate({identifier:r})}function et(e,t,n,r={}){qe(e,t,n,r)}function tt(e,t){return function(e,t){e._throwIfRoot("getBlob");const n=ae(e.storage,e._location,t);return e.storage.makeRequestWithTokens(n,Re).then((e=>void 0!==t?e.slice(0,t):e))}(e=l(e),t)}function nt(e,t){throw new Error("getStream() is only supported by NodeJS builds")}function rt(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return new Le(n,r,o,t,s)}n(new d("storage",rt,"PUBLIC").setMultipleInstances(!0)),r(Fe,"0.9.9",""),r(Fe,"0.9.9","esm2017");export{D as StringFormat,z as _FbsBlob,v as _Location,_e as _TaskEvent,pe as _TaskState,Se as _UploadTask,q as _dataFromString,Ye as _getChild,b as _invalidArgument,w as _invalidRootOperation,et as connectStorageEmulator,Ke as deleteObject,tt as getBlob,He as getBytes,Je as getDownloadURL,je as getMetadata,Qe as getStorage,nt as getStream,Ve as list,Xe as listAll,Ze as ref,Ge as updateMetadata,ze as uploadBytes,$e as uploadBytesResumable,We as uploadString};

//# sourceMappingURL=firebase-storage.js.map
