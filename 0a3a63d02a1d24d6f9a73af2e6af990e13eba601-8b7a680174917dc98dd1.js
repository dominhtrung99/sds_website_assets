"use strict";(self.webpackChunksds_archive_website=self.webpackChunksds_archive_website||[]).push([[14,413],{9661:function(e,t){t.Z=function(e,t){if(e&&t){var n=Array.isArray(t)?t:t.split(","),r=e.name||"",a=(e.type||"").toLowerCase(),i=a.replace(/\/.*$/,"");return n.some((function(e){var t=e.trim().toLowerCase();return"."===t.charAt(0)?r.toLowerCase().endsWith(t):t.endsWith("/*")?i===t.replace(/\/.*$/,""):a===t}))}return!0}},4653:function(e,t,n){var r=n(5900),a=n.n(r),i=n(257),o=n(5697),l=n.n(o),c=n(1312);const s={type:l().string,tooltip:l().bool,as:l().elementType},u=i.forwardRef(((e,t)=>{let{as:n="div",className:r,type:i="valid",tooltip:o=!1,...l}=e;return(0,c.tZ)(n,{...l,ref:t,className:a()(r,`${i}-${o?"tooltip":"feedback"}`)})}));u.displayName="Feedback",u.propTypes=s,t.Z=u},4709:function(e,t,n){var r=n(5900),a=n.n(r),i=n(257),o=n(8788),l=n(9541),c=n(1312);const s=i.forwardRef(((e,t)=>{let{id:n,bsPrefix:r,className:s,type:u="checkbox",isValid:f=!1,isInvalid:d=!1,as:p="input",...m}=e;const{controlId:g}=(0,i.useContext)(o.Z);return r=(0,l.vE)(r,"form-check-input"),(0,c.tZ)(p,{...m,ref:t,type:u,id:n||g,className:a()(s,r,f&&"is-valid",d&&"is-invalid")})}));s.displayName="FormCheckInput",t.Z=s},8788:function(e,t,n){const r=n(257).createContext({});t.Z=r},1760:function(e,t,n){var r=n(5900),a=n.n(r),i=n(257),o=(n(2473),n(4653)),l=n(8788),c=n(9541),s=n(1312);const u=i.forwardRef(((e,t)=>{let{bsPrefix:n,type:r,size:o,htmlSize:u,id:f,className:d,isValid:p=!1,isInvalid:m=!1,plaintext:g,readOnly:v,as:y="input",...b}=e;const{controlId:h}=(0,i.useContext)(l.Z);let x;return n=(0,c.vE)(n,"form-control"),x=g?{[`${n}-plaintext`]:!0}:{[n]:!0,[`${n}-${o}`]:o},(0,s.tZ)(y,{...b,type:r,size:u,ref:t,readOnly:v,id:f||h,className:a()(d,x,p&&"is-valid",m&&"is-invalid","color"===r&&`${n}-color`)})}));u.displayName="FormControl",t.Z=Object.assign(u,{Feedback:o.Z})},8427:function(e,t,n){n.d(t,{uI:function(){return ue}});var r=n(257);function a(e,t,n,r){return new(n||(n=Promise))((function(a,i){function o(e){try{c(r.next(e))}catch(t){i(t)}}function l(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}c((r=r.apply(e,t||[])).next())}))}function i(e,t){var n,r,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(a=2&i[0]?r.return:i[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;switch(r=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,r=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(a=o.trys,(a=a.length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){o.label=i[1];break}if(6===i[0]&&o.label<a[1]){o.label=a[1],a=i;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(i);break}a[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(l){i=[6,l],r=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}}Object.create;function o(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,i=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)o.push(r.value)}catch(l){a={error:l}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(a)throw a.error}}return o}Object.create;var l=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function c(e,t){var n=function(e){var t=e.name;if(t&&-1!==t.lastIndexOf(".")&&!e.type){var n=t.split(".").pop().toLowerCase(),r=l.get(n);r&&Object.defineProperty(e,"type",{value:r,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!=typeof n.path){var r=e.webkitRelativePath;Object.defineProperty(n,"path",{value:"string"==typeof t?t:"string"==typeof r&&r.length>0?r:e.name,writable:!1,configurable:!1,enumerable:!0})}return n}var s=[".DS_Store","Thumbs.db"];function u(e){return"object"==typeof e&&null!==e}function f(e){return g(e.target.files).map((function(e){return c(e)}))}function d(e){return a(this,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:return[4,Promise.all(e.map((function(e){return e.getFile()})))];case 1:return[2,t.sent().map((function(e){return c(e)}))]}}))}))}function p(e,t){return a(this,void 0,void 0,(function(){var n;return i(this,(function(r){switch(r.label){case 0:return null===e?[2,[]]:e.items?(n=g(e.items).filter((function(e){return"file"===e.kind})),"drop"!==t?[2,n]:[4,Promise.all(n.map(v))]):[3,2];case 1:return[2,m(y(r.sent()))];case 2:return[2,m(g(e.files).map((function(e){return c(e)})))]}}))}))}function m(e){return e.filter((function(e){return-1===s.indexOf(e.name)}))}function g(e){if(null===e)return[];for(var t=[],n=0;n<e.length;n++){var r=e[n];t.push(r)}return t}function v(e){if("function"!=typeof e.webkitGetAsEntry)return b(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?x(t):b(e)}function y(e){return e.reduce((function(e,t){return function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(o(arguments[t]));return e}(e,Array.isArray(t)?y(t):[t])}),[])}function b(e){var t=e.getAsFile();if(!t)return Promise.reject(e+" is not a File");var n=c(t);return Promise.resolve(n)}function h(e){return a(this,void 0,void 0,(function(){return i(this,(function(t){return[2,e.isDirectory?x(e):E(e)]}))}))}function x(e){var t=e.createReader();return new Promise((function(e,n){var r=[];!function o(){var l=this;t.readEntries((function(t){return a(l,void 0,void 0,(function(){var a,l,c;return i(this,(function(i){switch(i.label){case 0:if(t.length)return[3,5];i.label=1;case 1:return i.trys.push([1,3,,4]),[4,Promise.all(r)];case 2:return a=i.sent(),e(a),[3,4];case 3:return l=i.sent(),n(l),[3,4];case 4:return[3,6];case 5:c=Promise.all(t.map(h)),r.push(c),o(),i.label=6;case 6:return[2]}}))}))}),(function(e){n(e)}))}()}))}function E(e){return a(this,void 0,void 0,(function(){return i(this,(function(t){return[2,new Promise((function(t,n){e.file((function(n){var r=c(n,e.fullPath);t(r)}),(function(e){n(e)}))}))]}))}))}var w=n(9661);function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){D(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,i=[],o=!0,l=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);o=!0);}catch(c){l=!0,a=c}finally{try{o||null==n.return||n.return()}finally{if(l)throw a}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return k(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var F="file-invalid-type",j="file-too-large",A="file-too-small",C="too-many-files",P=function(e){e=Array.isArray(e)&&1===e.length?e[0]:e;var t=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:F,message:"File type must be ".concat(t)}},I=function(e){return{code:j,message:"File is larger than ".concat(e," ").concat(1===e?"byte":"bytes")}},M=function(e){return{code:A,message:"File is smaller than ".concat(e," ").concat(1===e?"byte":"bytes")}},z={code:C,message:"Too many files"};function Z(e,t){var n="application/x-moz-file"===e.type||(0,w.Z)(e,t);return[n,n?null:P(t)]}function L(e,t,n){if(_(e.size))if(_(t)&&_(n)){if(e.size>n)return[!1,I(n)];if(e.size<t)return[!1,M(t)]}else{if(_(t)&&e.size<t)return[!1,M(t)];if(_(n)&&e.size>n)return[!1,I(n)]}return[!0,null]}function _(e){return null!=e}function R(e){var t=e.files,n=e.accept,r=e.minSize,a=e.maxSize,i=e.multiple,o=e.maxFiles;return!(!i&&t.length>1||i&&o>=1&&t.length>o)&&t.every((function(e){var t=O(Z(e,n),1)[0],i=O(L(e,r,a),1)[0];return t&&i}))}function T(e){return"function"==typeof e.isPropagationStopped?e.isPropagationStopped():void 0!==e.cancelBubble&&e.cancelBubble}function H(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function $(e){e.preventDefault()}function G(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}function B(e){return-1!==e.indexOf("Edge/")}function K(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return G(e)||B(e)}function W(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return t.some((function(t){return!T(e)&&t&&t.apply(void 0,[e].concat(r)),T(e)}))}}function U(){return"showOpenFilePicker"in window}function q(e){return e="string"==typeof e?e.split(","):e,[{description:"everything",accept:Array.isArray(e)?e.filter((function(e){return"audio/*"===e||"video/*"===e||"image/*"===e||"text/*"===e||/\w+\/[-+.\w]+/g.test(e)})).reduce((function(e,t){return S(S({},e),{},D({},t,[]))}),{}):{}}]}var Y=["children"],V=["open"],J=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],Q=["refKey","onChange","onClick"];function X(e){return function(e){if(Array.isArray(e))return ne(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||te(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ee(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,i=[],o=!0,l=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);o=!0);}catch(c){l=!0,a=c}finally{try{o||null==n.return||n.return()}finally{if(l)throw a}}return i}(e,t)||te(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function te(e,t){if(e){if("string"==typeof e)return ne(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ne(e,t):void 0}}function ne(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?re(Object(n),!0).forEach((function(t){ie(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):re(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function oe(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var le=(0,r.forwardRef)((function(e,t){var n=e.children,a=ue(oe(e,Y)),i=a.open,o=oe(a,V);return(0,r.useImperativeHandle)(t,(function(){return{open:i}}),[i]),r.default.createElement(r.Fragment,null,n(ae(ae({},o),{},{open:i})))}));le.displayName="Dropzone";var ce={disabled:!1,getFilesFromEvent:function(e){return a(this,void 0,void 0,(function(){return i(this,(function(t){return u(e)&&u(e.dataTransfer)?[2,p(e.dataTransfer,e.type)]:function(e){return u(e)&&u(e.target)}(e)?[2,f(e)]:Array.isArray(e)&&e.every((function(e){return"getFile"in e&&"function"==typeof e.getFile}))?[2,d(e)]:[2,[]]}))}))},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!1};le.defaultProps=ce;var se={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,draggedFiles:[],acceptedFiles:[],fileRejections:[]};function ue(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=ae(ae({},ce),e),n=t.accept,a=t.disabled,i=t.getFilesFromEvent,o=t.maxSize,l=t.minSize,c=t.multiple,s=t.maxFiles,u=t.onDragEnter,f=t.onDragLeave,d=t.onDragOver,p=t.onDrop,m=t.onDropAccepted,g=t.onDropRejected,v=t.onFileDialogCancel,y=t.onFileDialogOpen,b=t.useFsAccessApi,h=t.preventDropOnDocument,x=t.noClick,E=t.noKeyboard,w=t.noDrag,N=t.noDragEventsBubbling,S=t.validator,D=(0,r.useMemo)((function(){return"function"==typeof y?y:de}),[y]),O=(0,r.useMemo)((function(){return"function"==typeof v?v:de}),[v]),k=(0,r.useRef)(null),F=(0,r.useRef)(null),j=(0,r.useReducer)(fe,se),A=ee(j,2),C=A[0],P=A[1],I=C.isFocused,M=C.isFileDialogActive,_=C.draggedFiles,G=function(){M&&setTimeout((function(){F.current&&(F.current.files.length||(P({type:"closeDialog"}),O()))}),300)};(0,r.useEffect)((function(){return b&&U()?function(){}:(window.addEventListener("focus",G,!1),function(){window.removeEventListener("focus",G,!1)})}),[F,M,O,b]);var B=(0,r.useRef)([]),Y=function(e){k.current&&k.current.contains(e.target)||(e.preventDefault(),B.current=[])};(0,r.useEffect)((function(){return h&&(document.addEventListener("dragover",$,!1),document.addEventListener("drop",Y,!1)),function(){h&&(document.removeEventListener("dragover",$),document.removeEventListener("drop",Y))}}),[k,h]);var V=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),xe(e),B.current=[].concat(X(B.current),[e.target]),H(e)&&Promise.resolve(i(e)).then((function(t){T(e)&&!N||(P({draggedFiles:t,isDragActive:!0,type:"setDraggedFiles"}),u&&u(e))}))}),[i,u,N]),te=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),xe(e);var t=H(e);if(t&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(n){}return t&&d&&d(e),!1}),[d,N]),ne=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),xe(e);var t=B.current.filter((function(e){return k.current&&k.current.contains(e)})),n=t.indexOf(e.target);-1!==n&&t.splice(n,1),B.current=t,t.length>0||(P({isDragActive:!1,type:"setDraggedFiles",draggedFiles:[]}),H(e)&&f&&f(e))}),[k,f,N]),re=(0,r.useCallback)((function(e,t){var r=[],a=[];e.forEach((function(e){var t=ee(Z(e,n),2),i=t[0],c=t[1],s=ee(L(e,l,o),2),u=s[0],f=s[1],d=S?S(e):null;if(i&&u&&!d)r.push(e);else{var p=[c,f];d&&(p=p.concat(d)),a.push({file:e,errors:p.filter((function(e){return e}))})}})),(!c&&r.length>1||c&&s>=1&&r.length>s)&&(r.forEach((function(e){a.push({file:e,errors:[z]})})),r.splice(0)),P({acceptedFiles:r,fileRejections:a,type:"setFiles"}),p&&p(r,a,t),a.length>0&&g&&g(a,t),r.length>0&&m&&m(r,t)}),[P,c,n,l,o,s,p,m,g,S]),le=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),xe(e),B.current=[],H(e)&&Promise.resolve(i(e)).then((function(t){T(e)&&!N||re(t,e)})),P({type:"reset"})}),[i,re,N]),ue=(0,r.useCallback)((function(){if(b&&U()){P({type:"openDialog"}),D();var e={multiple:c,types:q(n)};window.showOpenFilePicker(e).then((function(e){return i(e)})).then((function(e){return re(e,null)})).catch((function(e){return O(e)})).finally((function(){return P({type:"closeDialog"})}))}else F.current&&(P({type:"openDialog"}),D(),F.current.value=null,F.current.click())}),[P,D,O,b,re,n,c]),pe=(0,r.useCallback)((function(e){k.current&&k.current.isEqualNode(e.target)&&(32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),ue()))}),[k,F,ue]),me=(0,r.useCallback)((function(){P({type:"focus"})}),[]),ge=(0,r.useCallback)((function(){P({type:"blur"})}),[]),ve=(0,r.useCallback)((function(){x||(K()?setTimeout(ue,0):ue())}),[F,x,ue]),ye=function(e){return a?null:e},be=function(e){return E?null:ye(e)},he=function(e){return w?null:ye(e)},xe=function(e){N&&e.stopPropagation()},Ee=(0,r.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=void 0===t?"ref":t,r=e.role,i=e.onKeyDown,o=e.onFocus,l=e.onBlur,c=e.onClick,s=e.onDragEnter,u=e.onDragOver,f=e.onDragLeave,d=e.onDrop,p=oe(e,J);return ae(ae(ie({onKeyDown:be(W(i,pe)),onFocus:be(W(o,me)),onBlur:be(W(l,ge)),onClick:ye(W(c,ve)),onDragEnter:he(W(s,V)),onDragOver:he(W(u,te)),onDragLeave:he(W(f,ne)),onDrop:he(W(d,le)),role:"string"==typeof r&&""!==r?r:"button"},n,k),a||E?{}:{tabIndex:0}),p)}}),[k,pe,me,ge,ve,V,te,ne,le,E,w,a]),we=(0,r.useCallback)((function(e){e.stopPropagation()}),[]),Ne=(0,r.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,r=void 0===t?"ref":t,a=e.onChange,i=e.onClick,o=oe(e,Q),l=ie({accept:n,multiple:c,type:"file",style:{display:"none"},onChange:ye(W(a,le)),onClick:ye(W(i,we)),autoComplete:"off",tabIndex:-1},r,F);return ae(ae({},l),o)}}),[F,n,c,le,a]),Se=_.length,De=Se>0&&R({files:_,accept:n,minSize:l,maxSize:o,multiple:c,maxFiles:s}),Oe=Se>0&&!De;return ae(ae({},C),{},{isDragAccept:De,isDragReject:Oe,isFocused:I&&!a,getRootProps:Ee,getInputProps:Ne,rootRef:k,inputRef:F,open:ye(ue)})}function fe(e,t){switch(t.type){case"focus":return ae(ae({},e),{},{isFocused:!0});case"blur":return ae(ae({},e),{},{isFocused:!1});case"openDialog":return ae(ae({},se),{},{isFileDialogActive:!0});case"closeDialog":return ae(ae({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":var n=t.isDragActive,r=t.draggedFiles;return ae(ae({},e),{},{draggedFiles:r,isDragActive:n});case"setFiles":return ae(ae({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return ae({},se);default:return e}}function de(){}},6339:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(257),a=n(8203),i=n(8169),o=n(6594),l=n(847),c=n(4513),s=n(5019);var u=e=>{let{fileName:t,status:n,progress:a}=e;return r.createElement("div",{className:"file-upload-process-modal-content"},r.createElement("img",{src:"/icons/File.svg",alt:"File Upload Icon"}),r.createElement("div",{className:"file-upload-process-modal-status"},r.createElement("div",{className:"file-upload-process-modal-data"},r.createElement("p",null," ",t," "),"processed"===n&&r.createElement("p",{className:"percentage"}," ",a,"% "),"success"===n&&r.createElement("div",{className:"upload-ok-chip"},"OK"),"fail"===n&&r.createElement("div",{className:"upload-failed-chip"},"Failed")),"processed"===n&&r.createElement("div",{className:"progress file-upload-process-modal-progress"},r.createElement("div",{className:"progress-bar progress-bar-animated file-upload-process-modal-progress-bar",role:"progressbar",style:{width:`${a}%`}}))))};var f=e=>{const{t:t}=(0,s.$)(),[n,a]=r.useState([]);return r.useEffect((()=>{const t=e.files_info,n=Object.getOwnPropertyNames(t);if(null==n||null==n)return;const i=[];for(let e of n){const n=t[e];if(null==n||null==n)continue;const a=n.progress,o=n.status;o&&i.push(r.createElement(u,{key:e,fileName:e,status:o,progress:a}))}a(i)}),[e]),r.createElement("div",{className:"file-upload-process-modal-container"},r.createElement("div",{className:"file-upload-process-modal-title"},t("fileExtractModal.UploadingAndAnalyzing")),n)},d=n(2986);const p=e=>{let{onCancel:t,success:n}=e;const{t:i}=(0,s.$)();return r.createElement(a.Z,{dialogClassName:"file-extract-success-modal",size:"lg",show:!0,centered:!0,onHide:t},r.createElement(a.Z.Header,{className:"file-extract-modal-header",closeButton:!0}),r.createElement("div",{className:"file-extract-success-modal-container"},n?r.createElement("img",{src:"/icons/Success.png",alt:"File Extract Warning Icon"}):r.createElement("img",{src:"/icons/Error.png",alt:"File Extract Warning Icon"}),n?r.createElement("p",{dangerouslySetInnerHTML:{__html:i("fileExtractModal.YourSdsAreSuccessfully")}}):r.createElement("p",{dangerouslySetInnerHTML:{__html:i("fileExtractModal.ExtractFailed")}})))};var m=e=>{let{show:t,email:n,requestUUID:u,res:m,onCancel:g,onSuccess:v}=e;const{t:y}=(0,s.$)(),[b,h]=r.useState(null),[x,E]=r.useState([]),[w,N]=r.useState(0),[S,D]=r.useState({}),[O,k]=r.useState([]),[F,j]=r.useState(0),[A,C]=r.useState(0),[P,I]=r.useState(0),[M,z]=r.useState(0),[Z,L]=r.useState(!1),_={GHS01:"/images/InventoryManagementLabel1.png",GHS02:"/images/InventoryManagementLabel2.png",GHS03:"/images/InventoryManagementLabel3.png",GHS04:"/images/InventoryManagementLabel4.png",GHS05:"/images/InventoryManagementLabel5.png",GHS06:"/images/InventoryManagementLabel6.png",GHS07:"/images/InventoryManagementLabel7.png",GHS08:"/images/InventoryManagementLabel8.png",GHS09:"/images/InventoryManagementLabel9.png"};r.useEffect((()=>{if(x.length>w){const e=document.getElementById("file-extract-modal-scroller");document.querySelector("#file-extract-modal-scroller")&&e.scrollTo(0,document.querySelector("#file-extract-modal-scroller").scrollHeight),N(x.length)}}),[x]),r.useEffect((()=>{const e=d.CZ+`sds-admin/getExtractionStatus/?email=${n}&id=${u}`,t=setInterval((()=>{(0,l.h)(e,"get").then((e=>{let n=null;if(e.files_info){D(e.files_info);const t=function(e,t){void 0===t&&(t=!1);const n=Object.getOwnPropertyNames(e);if(null==n||null==n)return;let r=0,a=0,i=0;for(let o of n){const n=e[o];if(!n)continue;r++;const l=n.status;"success"===l&&i++,"fail"===l&&a++,t&&"processed"===l&&a++}return C(r),I(i),z(a),i>0}(e.files_info,e.done);n=r.createElement(p,{onCancel:()=>{h(null)},success:t})}if(e.progress&&j(e.progress),e.sdss&&e.sdss.length>0){E(e.sdss);let t=[];for(let n=0;n<e.sdss.length;n++)e.sdss[n].hazard_chemical&&t.push(T(e.sdss[n].product,e.sdss[n].hazard_chemical.listings,e.sdss[n].hazard_chemical.chemical_name,t.length+1)),e.sdss[n].newer_version&&t.push(R(e.sdss[n].product,e.sdss[n].newer_version,t.length+1));k(t)}null!=e.done&&null!=e.done&&(clearInterval(t),L(!0),h(n))}))}),5e3);return()=>{clearInterval(t)}}),[]);const R=(e,t,n)=>r.createElement("div",{key:n,className:"file-extract-new-version-box"},r.createElement("img",{className:"file-extract-new-version-icon",src:"/icons/FileExtractWarning.png",alt:"File Extract Warning Icon"}),r.createElement("div",{className:"file-extract-new-version-content"},r.createElement("div",{className:"file-extract-new-version-text"},y("fileExtractModal.YourSdsfor")," ",r.createElement("span",{className:"file-extract-new-version-title"}," ",e," ")," ",y("fileExtractModal.IsOutdated")),r.createElement("div",{className:"file-extract-new-version-date"},t))),T=(e,t,n,a)=>r.createElement("div",{key:a,className:"file-extract-new-version-box"},r.createElement("img",{className:"file-extract-new-version-icon",src:"/icons/FileExtractWarning.png",alt:"File Extract Warning Icon"}),r.createElement("div",{className:"file-extract-new-version-content"},r.createElement("div",{className:"file-extract-new-version-text"},y("fileExtractModal.WarningYourSDS")," ",r.createElement("span",{className:"file-extract-new-version-title"}," ",e," "),y("fileExtractModal.ContainsSubstance"),n.map(((e,t)=>r.createElement("div",{key:t,className:"file-extract-new-version-date"},e,t<n.length-1?",":""))),y("fileExtractModal.ThatRegistered"),t.map(((e,n)=>r.createElement("div",{key:n,className:"file-extract-new-version-date"},e,n<t.length-1?",":""))),y("fileExtractModal.CheckForSubstitute"))));return r.createElement(r.Fragment,null,Z&&r.createElement(a.Z,{dialogClassName:b?"file-extract-modal file-extract-modal-fade":"file-extract-modal",show:t,backdrop:"static",centered:!0,onHide:g},r.createElement(a.Z.Header,{className:"file-extract-modal-header",closeButton:!0},r.createElement("div",{className:"file-extract-modal-header-container"},r.createElement(c.Z,{headline1:!0,black:!0}," ",y("fileExtractModal.ExtractingSDSData")," "),r.createElement("div",{className:"file-extract-modal-status"},r.createElement("div",{className:"file-extract-modal-percentage"},r.createElement("p",null," ",P+M,"/",A," "),r.createElement("p",{className:"percentage"}," ",F,"% ")),r.createElement("div",{className:"progress file-extract-modal-progress"},r.createElement("div",{className:"progress-bar progress-bar-animated file-extract-modal-progress-bar",role:"progressbar",style:{width:100*F+"%"}}))))),r.createElement("div",{className:"file-extract-modal-container"},r.createElement("div",{className:"file-extract-modal-table-header"},r.createElement(c.Z,{body1:!0,"dark-grey":!0},y("fileExtractModal.SdsExtracted")," ",P),r.createElement(c.Z,{body1:!0,"dark-grey":!0},y("fileExtractModal.SdsRejected")," ",M)),r.createElement("div",{id:"file-extract-modal-scroller",className:"file-extract-modal-content"},r.createElement("div",{className:"file-extract-modal-content-container"},r.createElement("div",{className:"file-extract-data"},r.createElement(i.Z,{responsive:!0},r.createElement("thead",{className:O.length>0?"file-extract-data-table-header":"file-extract-data-table-header file-extract-data-table-full"},r.createElement("tr",{className:"file-extract-data-row file-extract-data-title"},r.createElement("td",{className:"file-extract-data-id-column"},"#"),r.createElement("td",{className:"file-extract-data-product-column"}," ",y("fileExtractModal.ProductName")," "),r.createElement("td",{className:"file-extract-data-supplier-column"}," ",y("fileExtractModal.Supplier")," "),r.createElement("td",{className:"file-extract-data-revision-column"}," ",y("fileExtractModal.Revision")," "),r.createElement("td",{className:"file-extract-data-column"}," ",y("fileExtractModal.SignalWord")," "),r.createElement("td",{className:"file-extract-data-column"}," ",y("fileExtractModal.GhsPictogram")," "))),r.createElement("tbody",{className:"file-extract-data-table-body"},x&&x.length>0?x.map(((e,t)=>{let n=null!=e.pictograms?e.pictograms:"";return n=n.split(",").map((e=>(e=>e&&""!=e?`<img src="${_[e]}" alt="${e}"/>`:"")(e))).join(""),r.createElement(r.Fragment,{key:t},r.createElement("tr",{id:`file-extract-data-${t}`,className:"file-extract-data-row file-extract-data-info"},r.createElement("td",{className:"file-extract-data-id-column"},e.n?e.n:""),r.createElement("td",{className:"file-extract-data-product-column"},e.product?e.product:""),r.createElement("td",{className:"file-extract-data-supplier-column"},e.supplier?e.supplier:""),r.createElement("td",{className:"file-extract-data-revision-column"},e.revision?e.revision:""),r.createElement("td",{className:"file-extract-data-column"},e.signal_word?e.signal_word:""),r.createElement("td",{className:"file-extract-data-column",dangerouslySetInnerHTML:{__html:n}})),e.other_data.map(((e,t)=>r.createElement("tr",{key:t,className:"file-extract-data-other file-extract-data-row"},r.createElement("td",{className:"file-extract-data-id-column"},""),r.createElement("td",{className:"file-extract-data-product-column"},e.literal?e.literal:""),r.createElement("td",{className:"file-extract-data-other-column"},e.value?e.value:"")))))})):null))),O.length>0?r.createElement("div",{className:"file-extract-new-version-container"},r.createElement("div",{className:"file-extract-new-version-top-space"}),r.createElement("div",{className:"file-extract-new-version"},O.map(((e,t)=>t<O.length-2?e:null)),O.length>0?r.createElement("div",{className:"file-extracted-fixed-box"},O[O.length-1],O.length>1?O[O.length-2]:null):null)):null))),r.createElement(a.Z.Footer,{className:"file-extract-modal-footer"},r.createElement(o.Z,{className:"file-extract-modal-footer-btn",onClick:()=>L(!1)},y("fileExtractModal.HideDetails")))),!Z&&r.createElement(a.Z,{dialogClassName:"file-upload-process-modal",size:"lg",show:t,backdrop:"static",centered:!0,onHide:g},r.createElement(a.Z.Header,{className:"file-extract-modal-header",closeButton:!0},r.createElement(c.Z,{headline1:!0,black:!0}," ",y("fileExtractModal.UploadProcess")," ")),r.createElement(f,{files_info:S}),r.createElement(a.Z.Footer,{className:"file-extract-modal-footer"},r.createElement(o.Z,{className:"file-extract-modal-footer-btn",onClick:()=>L(!0)},y("fileExtractModal.ShowDetails")),r.createElement(o.Z,{className:"file-extract-modal-footer-btn",onClick:g},y("fileExtractModal.Close")))),b)}}}]);