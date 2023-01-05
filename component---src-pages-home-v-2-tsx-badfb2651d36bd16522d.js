/*! For license information please see component---src-pages-home-v-2-tsx-badfb2651d36bd16522d.js.LICENSE.txt */
(self.webpackChunksds_archive_website=self.webpackChunksds_archive_website||[]).push([[4376],{4952:function(e){var t;t=function(){return function(e){var t={};function n(a){if(t[a])return t[a].exports;var s=t[a]={exports:{},id:a,loaded:!1};return e[a].call(s.exports,s,s.exports,n),s.loaded=!0,s.exports}return n.m=e,n.c=t,n.p="",n(0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n(1),r=n(3),i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),s.initializer.load(this,n,t),this.begin()}return a(e,[{key:"toggle",value:function(){this.pause.status?this.start():this.stop()}},{key:"stop",value:function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))}},{key:"start",value:function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))}},{key:"destroy",value:function(){this.reset(!1),this.options.onDestroy(this)}},{key:"reset",value:function(){var e=arguments.length<=0||void 0===arguments[0]||arguments[0];clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,e&&(this.insertCursor(),this.options.onReset(this),this.begin())}},{key:"begin",value:function(){var e=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout((function(){e.currentElContent&&0!==e.currentElContent.length?e.backspace(e.currentElContent,e.currentElContent.length):e.typewrite(e.strings[e.sequence[e.arrayPos]],e.strPos)}),this.startDelay)}},{key:"typewrite",value:function(e,t){var n=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var a=this.humanizer(this.typeSpeed),s=1;!0!==this.pause.status?this.timeout=setTimeout((function(){t=r.htmlParser.typeHtmlChars(e,t,n);var a=0,i=e.substr(t);if("^"===i.charAt(0)&&/^\^\d+/.test(i)){var o=1;o+=(i=/\d+/.exec(i)[0]).length,a=parseInt(i),n.temporaryPause=!0,n.options.onTypingPaused(n.arrayPos,n),e=e.substring(0,t)+e.substring(t+o),n.toggleBlinking(!0)}if("`"===i.charAt(0)){for(;"`"!==e.substr(t+s).charAt(0)&&(s++,!(t+s>e.length)););var l=e.substring(0,t),c=e.substring(l.length+1,t+s),m=e.substring(t+s+1);e=l+c+m,s--}n.timeout=setTimeout((function(){n.toggleBlinking(!1),t>=e.length?n.doneTyping(e,t):n.keepTyping(e,t,s),n.temporaryPause&&(n.temporaryPause=!1,n.options.onTypingResumed(n.arrayPos,n))}),a)}),a):this.setPauseStatus(e,t,!0)}},{key:"keepTyping",value:function(e,t,n){0===t&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this)),t+=n;var a=e.substr(0,t);this.replaceText(a),this.typewrite(e,t)}},{key:"doneTyping",value:function(e,t){var n=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout((function(){n.backspace(e,t)}),this.backDelay))}},{key:"backspace",value:function(e,t){var n=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var a=this.humanizer(this.backSpeed);this.timeout=setTimeout((function(){t=r.htmlParser.backSpaceHtmlChars(e,t,n);var a=e.substr(0,t);if(n.replaceText(a),n.smartBackspace){var s=n.strings[n.arrayPos+1];s&&a===s.substr(0,t)?n.stopNum=t:n.stopNum=0}t>n.stopNum?(t--,n.backspace(e,t)):t<=n.stopNum&&(n.arrayPos++,n.arrayPos===n.strings.length?(n.arrayPos=0,n.options.onLastStringBackspaced(),n.shuffleStringsIfNeeded(),n.begin()):n.typewrite(n.strings[n.sequence[n.arrayPos]],t))}),a)}else this.setPauseStatus(e,t,!1)}},{key:"complete",value:function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0}},{key:"setPauseStatus",value:function(e,t,n){this.pause.typewrite=n,this.pause.curString=e,this.pause.curStrPos=t}},{key:"toggleBlinking",value:function(e){this.cursor&&(this.pause.status||this.cursorBlinking!==e&&(this.cursorBlinking=e,e?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))}},{key:"humanizer",value:function(e){return Math.round(Math.random()*e/2)+e}},{key:"shuffleStringsIfNeeded",value:function(){this.shuffle&&(this.sequence=this.sequence.sort((function(){return Math.random()-.5})))}},{key:"initFadeOut",value:function(){var e=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout((function(){e.arrayPos++,e.replaceText(""),e.strings.length>e.arrayPos?e.typewrite(e.strings[e.sequence[e.arrayPos]],0):(e.typewrite(e.strings[0],0),e.arrayPos=0)}),this.fadeOutDelay)}},{key:"replaceText",value:function(e){this.attr?this.el.setAttribute(this.attr,e):this.isInput?this.el.value=e:"html"===this.contentType?this.el.innerHTML=e:this.el.textContent=e}},{key:"bindFocusEvents",value:function(){var e=this;this.isInput&&(this.el.addEventListener("focus",(function(t){e.stop()})),this.el.addEventListener("blur",(function(t){e.el.value&&0!==e.el.value.length||e.start()})))}},{key:"insertCursor",value:function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))}}]),e}();t.default=i,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(2),o=(a=i)&&a.__esModule?a:{default:a},l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,[{key:"load",value:function(e,t,n){if(e.el="string"==typeof n?document.querySelector(n):n,e.options=s({},o.default,t),e.isInput="input"===e.el.tagName.toLowerCase(),e.attr=e.options.attr,e.bindInputFocusEvents=e.options.bindInputFocusEvents,e.showCursor=!e.isInput&&e.options.showCursor,e.cursorChar=e.options.cursorChar,e.cursorBlinking=!0,e.elContent=e.attr?e.el.getAttribute(e.attr):e.el.textContent,e.contentType=e.options.contentType,e.typeSpeed=e.options.typeSpeed,e.startDelay=e.options.startDelay,e.backSpeed=e.options.backSpeed,e.smartBackspace=e.options.smartBackspace,e.backDelay=e.options.backDelay,e.fadeOut=e.options.fadeOut,e.fadeOutClass=e.options.fadeOutClass,e.fadeOutDelay=e.options.fadeOutDelay,e.isPaused=!1,e.strings=e.options.strings.map((function(e){return e.trim()})),"string"==typeof e.options.stringsElement?e.stringsElement=document.querySelector(e.options.stringsElement):e.stringsElement=e.options.stringsElement,e.stringsElement){e.strings=[],e.stringsElement.style.display="none";var a=Array.prototype.slice.apply(e.stringsElement.children),r=a.length;if(r)for(var i=0;i<r;i+=1){var l=a[i];e.strings.push(l.innerHTML.trim())}}for(var i in e.strPos=0,e.arrayPos=0,e.stopNum=0,e.loop=e.options.loop,e.loopCount=e.options.loopCount,e.curLoop=0,e.shuffle=e.options.shuffle,e.sequence=[],e.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},e.typingComplete=!1,e.strings)e.sequence[i]=i;e.currentElContent=this.getCurrentElContent(e),e.autoInsertCss=e.options.autoInsertCss,this.appendAnimationCss(e)}},{key:"getCurrentElContent",value:function(e){return e.attr?e.el.getAttribute(e.attr):e.isInput?e.el.value:"html"===e.contentType?e.el.innerHTML:e.el.textContent}},{key:"appendAnimationCss",value:function(e){var t="data-typed-js-css";if(e.autoInsertCss&&(e.showCursor||e.fadeOut)&&!document.querySelector("["+t+"]")){var n=document.createElement("style");n.type="text/css",n.setAttribute(t,!0);var a="";e.showCursor&&(a+="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),e.fadeOut&&(a+="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),0!==n.length&&(n.innerHTML=a,document.body.appendChild(n))}}}]),e}();t.default=l;var c=new l;t.initializer=c},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(e){},onComplete:function(e){},preStringTyped:function(e,t){},onStringTyped:function(e,t){},onLastStringBackspaced:function(e){},onTypingPaused:function(e,t){},onTypingResumed:function(e,t){},onReset:function(e){},onStop:function(e,t){},onStart:function(e,t){},onDestroy:function(e){}};t.default=n,e.exports=t.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return n(e,[{key:"typeHtmlChars",value:function(e,t,n){if("html"!==n.contentType)return t;var a=e.substr(t).charAt(0);if("<"===a||"&"===a){var s="";for(s="<"===a?">":";";e.substr(t+1).charAt(0)!==s&&!(1+ ++t>e.length););t++}return t}},{key:"backSpaceHtmlChars",value:function(e,t,n){if("html"!==n.contentType)return t;var a=e.substr(t).charAt(0);if(">"===a||";"===a){var s="";for(s=">"===a?"<":"&";e.substr(t-1).charAt(0)!==s&&!(--t<0););t--}return t}}]),e}();t.default=a;var s=new a;t.htmlParser=s}])},e.exports=t()},6353:function(e,t,n){"use strict";var a=n(257),s=n(5019),r=n(6187),i=n(2984);t.Z=e=>{let{title:t,titleStyle:n}=e;const{t:o}=(0,s.$)();return a.createElement("div",{className:"contact-footer overflow-hidden text-center d-flex align-items-center justify-content-center flex-column"},a.createElement(r.Z,{className:"col-sm-12 col-xs-12 mx-auto"},a.createElement("div",{className:"d-flex justify-content-center"},a.createElement("div",{className:"contact-footer-container"},a.createElement("div",{className:"contact-footer-content"},a.createElement("div",{className:n?`${n} contact-footer-title`:"contact-footer-title",dangerouslySetInnerHTML:{__html:t||o("inventoryManagement.StillUnsureAbout")}}),a.createElement("div",{className:"contact-footer-subtitle",dangerouslySetInnerHTML:{__html:o("inventoryManagement.ContactUsNowFor")}})),a.createElement(i.Z,{to:"/contact-us/",title:"contact us"}," ",o("inventoryManagement.ContactUs")," ")))))}},3948:function(e,t,n){"use strict";var a=n(257),s=n(6187),r=n(994),i=n(7408),o=n(5019),l=n(1804);t.Z=()=>{const{t:e}=(0,o.$)(),t=[{value:e("home.metricsValue1"),title:e("home.metricsContent1")},{value:e("home.metricsValue2"),title:e("home.metricsContent2")},{value:e("home.metricsValue3"),title:e("home.metricsContent3")}];return a.createElement("div",{className:"metrics"},a.createElement(s.Z,{className:"metrics-container"},a.createElement(l.Z,{headline1:!0,white:!0,textStyle:"title"}," ",e("home.metricsTitle")," "),a.createElement("div",{className:"subtitle-content"},a.createElement(l.Z,{body1:!0,white:!0,textStyle:"subtitle"},a.createElement("span",{dangerouslySetInnerHTML:{__html:e("home.metricsSubTitle")}}))),a.createElement(r.Z,{xl:3,sm:2,className:"metrics-statistics g-4"},t.map(((e,t)=>a.createElement(i.Z,{key:t,className:"metrics-item"},a.createElement("div",{className:"metrics-body"},a.createElement("div",{className:"metrics-icon"},a.createElement("img",{src:"/images/MetricsIcon.png",alt:"Metrics Plus Icon"})),a.createElement("div",{className:"metrics-content"},a.createElement(l.Z,{textStyle:"metrics-value"}," ",e.value," "),a.createElement(l.Z,{body1:!0,white:!0,textStyle:"metrics-title"}," ",e.title," ")))))))))}},5818:function(e,t,n){"use strict";var a=n(257),s=n(5019),r=n(6187);t.Z=e=>{let{headline:t,headlineStyle:n="",title:i,titleStyle:o="",content:l,contentStyle:c="",containerStyle:m="",style:u="",readMoreUrl:d}=e;const{t:p}=(0,s.$)();return a.createElement("div",{className:`page-header-section overflow-hidden text-center d-flex align-items-center justify-content-center flex-column ${u}`},a.createElement(r.Z,{className:`col-md-10 col-xs-12 mx-auto page-header-content ${m}`},a.createElement("p",{className:`lead ${n}`}," ",t," "),a.createElement("h1",{dangerouslySetInnerHTML:{__html:i},className:`page-header-title ${o}`}),a.createElement("div",{dangerouslySetInnerHTML:{__html:l},className:`page-header-text ${c}`}),d&&a.createElement("a",{className:"btn yellow-btn page-header-btn",href:"#"}," ",p("Read More")," ")))}},8510:function(e,t,n){"use strict";n.d(t,{Z:function(){return k}});var a=n(257),s=n(3114),r=n(6187),i=n(5019),o=n(1804),l=n(6594),c=n(7459),m=n(8304);const u={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"40px 0px",border:"1px dashed var(--light)",color:"var(--black)"},d={border:"1px dashed var(--yellow)"};var p=e=>{let{onDrop:t,listFile:n}=e;const{t:s}=(0,i.$)(),{isDragAccept:r,getRootProps:p,open:y,getInputProps:g}=(0,c.uI)({maxFiles:m.cM,noKeyboard:!0,onDrop:t}),h=a.useMemo((()=>({...u,...r?d:{}})),[r]);return a.createElement("section",{className:"dropzone-container"},a.createElement("div",Object.assign({},p({style:h}),{className:"dropzone-input-container",onClick:e=>e.stopPropagation()}),a.createElement("div",{className:"dropzone-input"},a.createElement("input",g()),a.createElement(o.Z,{body1:!0,textStyle:"dopzone-input-text"}," ",s("dropzone.inputText")," ")),a.createElement(l.Z,{className:"dropzone-btn",onClick:y},s("dropzone.browseFile")),a.createElement("div",{className:"dropzone-warning"},a.createElement(o.Z,{body1:!0,textStyle:"dopzone-warning-text"},s("dropzone.warningText")))),n&&n.length>0?a.createElement("aside",{className:"dropzone-files"},a.createElement("ul",null,n.map((e=>a.createElement("li",{key:e.path},a.createElement(o.Z,{body1:!0,black:!0,textStyle:"file-item"}," ",e.path," - ",e.size," ",s("dropzone.fileSizeUnit")," ")))))):null)};var y=e=>{let{title:t,content:n,subContent:s,onDrop:r,listFile:i}=e;return a.createElement("div",{className:"box-square-1"},a.createElement("div",{className:"box-square-2"},a.createElement("div",{className:"box-round"},a.createElement("div",{className:"box-content"},a.createElement("div",{className:"box-up-content"},a.createElement(p,{onDrop:r,listFile:i})),a.createElement("div",{className:"box-down-content"},a.createElement("div",{className:"box-description"},a.createElement(o.Z,{body3:!0,black:!0,textStyle:"title"}," ",t," "),a.createElement(o.Z,{body1:!0,black:!0,textStyle:"content"},a.createElement("span",{dangerouslySetInnerHTML:{__html:n}})),s?a.createElement(o.Z,{body1:!0,black:!0,textStyle:"content"},a.createElement("span",{dangerouslySetInnerHTML:{__html:s}})):null))))))},g=n(5305),h=n(8427),f=n(7336),v=(n(2335),n(4329)),b=n(4627),E=n(4070),S=n.n(E);var k=e=>{let{title:t,titleStyle:n="",boxTitle:l,boxContent:c,boxHtmlContent:u}=e;const{t:d,i18n:p}=(0,i.$)(),[E,k]=a.useState(!1),[M,C]=a.useState(null),[N,w]=a.useState(null),[A,T]=a.useState(null),[x,I]=a.useState(!1),[P,O]=a.useState(null),Z=()=>{I(!1),T(null),C([])},D=(e,t)=>{w(a.createElement(h.default,{title:e,content:t,onCancel:()=>w(null)}))},B=e=>{D("Error",e),Z()};return a.createElement(a.Fragment,null,a.createElement("div",{className:"upload-sds"},a.createElement(r.Z,{className:"upload-sds-container"},a.createElement(o.Z,{headline1:!0,black:!0,textStyle:`upload-sds-header ${n}`},a.createElement("span",{dangerouslySetInnerHTML:{__html:t||d("home.benefitHeader")}})),a.createElement("div",{className:"upload-sds-box"},a.createElement(y,{title:l||d("home.benefitTitle"),content:c||d("home.benefitContent"),subContent:u||null,onDrop:(e,t)=>{if((null==e?void 0:e.length)<1)return(null==t?void 0:t.length)>0&&D("Fail","No file received"),void((null==t?void 0:t.length)>m.cM&&B(`Maximum ${m.cM} files uploaded`));for(let n=0;n<e.length;n++){if(!(0,b.D0)(e[n]))return void B("Unsupported file type. Only PDF, ZIP and RAR files can be uploaded");if(e[n].size>m.Qu)return void B(`Maximum ${m.CE} MB file size`)}C(e),k(!0)},listFile:M})))),a.createElement(g.Br,{show:E,isDisabled:x,loadingSpinner:A,onCancel:()=>{k(!1),C(null)},onSubmit:e=>{(e=>{const t=(0,b.Lk)();I(!0),T(a.createElement(s.default,{as:"span",animation:"border",variant:"dark",size:"sm",role:"status","aria-hidden":"true"}));const n=(0,b.IF)(S());let r=new FormData;r.append("email",e),r.append("id",t),r.append("country",(0,b.Th)("no")),r.append("lang",p.languages[0]),r.append("ref","upload_sds"),r.append("origination_referral",n.origination_type),r.append("origination_source",n.origination_source),M.map((e=>r.append("sdsfile",e)));let i=m.CZ+"sds-admin/v2/uploadSDSBinder/";(0,v.h)(i,"post",null,r).then((n=>{k(!1),Z(),n.file_info&&(0,b.Oc)(n.file_info)?O(a.createElement(f.ZP,{email:e,requestUUID:t,show:!0,res:n,onCancel:()=>O(null),onSuccess:()=>{(0,b.CR)("fp9RCPeS9KkDEOyx5uED")}})):D("Fail","No file received")})).catch((e=>{console.log("error",e),B(e.error_message?e.error_message:e),k(!1)}))})(e)}}),P,N)}},3809:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var a=n(257),s=n(7825),r=n(7700),i=n(5019),o=n(6187),l=n(994),c=n(7408),m=n(2566),u=()=>{const{t:e,i18n:t}=(0,i.$)(),[n,s]=a.useState([]),r=[{title:e("inventoryManagement.BenefitsForEmployees"),content:[{key:"0",title:e("inventoryManagement.MobileAccess"),content:e("inventoryManagement.SdsManagerIsAvailableInMobile"),image:a.createElement("img",{src:"/images/benefits/MobileAccess.webp",alt:"Mobile Acces"})},{key:"1",title:e("inventoryManagement.RecordAmount"),content:e("inventoryManagement.YouHaveTheAbilityToStore"),image:a.createElement("img",{src:"/images/benefits/RecordAmount.webp",alt:"Record Amount"})},{key:"2",title:e("inventoryManagement.ViewAndPrintSds"),content:e("inventoryManagement.EmployeesCanEasilyGetAccess"),image:a.createElement("img",{src:"/images/benefits/ViewAndPrintSds.webp",alt:"View and Print SDS"})},{key:"3",title:e("inventoryManagement.AddSds"),content:e("inventoryManagement.WeOfferANumberOfWay"),image:a.createElement("img",{src:"/images/benefits/AddSds.webp",alt:"Add SDS"})},{key:"4",title:e("inventoryManagement.InstantAccessToInfo"),content:e("inventoryManagement.InSdsManagerYouDecide"),image:a.createElement("img",{src:"/images/benefits/InstantAccessToInfo.webp",alt:"Instant Access to Info"})},{key:"5",title:e("inventoryManagement.EasyAccessToSds"),content:e("inventoryManagement.TheGloballyHarmonizedSystem"),image:a.createElement("img",{src:"/images/benefits/EasyAccessToSds.webp",alt:"Easy Access to SDS"})},{key:"6",title:e("inventoryManagement.OfflineAccessToInfo"),content:e("inventoryManagement.WithSdsManagerWeWillAlso"),image:a.createElement("img",{src:"/images/benefits/OfflineAccess.webp",alt:"Offline Access to Info"})},{key:"7",title:e("inventoryManagement.EasyAccessToInherentHazardRating"),content:e("inventoryManagement.SdsManagerAutomaticallyCalculate"),image:a.createElement("img",{src:"/images/benefits/EasyAccessToInherentHazardRating.webp",alt:"Easy Access To Inherent Hazard Rating"})}]},{title:e("inventoryManagement.BenefitsForAdministrators"),content:[{key:"8",title:e("inventoryManagement.EasyToBuildInventory"),content:e("inventoryManagement.DoYouHaveSdsBinders"),image:a.createElement("img",{src:"/images/benefits/EasyToBuildInventory.webp",alt:"Easy to build Inventory"})},{key:"9",title:e("inventoryManagement.SecondaryContainerLabeling"),content:e("inventoryManagement.WhenYouAreMovingChemicals"),image:a.createElement("img",{src:"/images/benefits/SecondaryContainerLabeling.webp",alt:"Secondary Container Labeling"})},{key:"10",title:e("inventoryManagement.FlexibleAccessControl"),content:e("inventoryManagement.MultiLevelLocationHierarchy"),image:a.createElement("img",{src:"/images/benefits/FlexibleAccessControl.webp",alt:"Flexible Access Control"})},{key:"11",title:e("inventoryManagement.RiskAssessment"),content:e("inventoryManagement.InOurRiskAssessmentProcess"),image:a.createElement("img",{src:"/images/benefits/RiskAssessment.webp",alt:"Risk Assessment"})},{key:"12",title:e("inventoryManagement.StayInformedAboutNewRevisionsOfYouSds"),content:e("inventoryManagement.SsdsManagerProvideYouWithWarning"),image:a.createElement("img",{src:"/images/benefits/StayInformedAboutNewRevisions.webp",alt:"Stay Informed about new Revision Of your SDS"})},{key:"13",title:e("inventoryManagement.StayInformedAboutHazardousChemicals"),content:e("inventoryManagement.WithSdsArchiveYouCanGetOverview"),image:a.createElement("img",{src:"/images/benefits/StayInformedAboutHazardousChemicals.webp",alt:"Stay Informed about Hazadous Chemicals"})},{key:"14",title:e("inventoryManagement.WeWillHelpYouFindTheSdsYouNeed"),content:e("inventoryManagement.IfYouNeedAssistanceToSetup"),image:a.createElement("img",{src:"/images/benefits/WeWillHelpYouFindTheSdsYouNeed.webp",alt:"We will help you find the SDS you need"})},{key:"15",title:e("inventoryManagement.AutomatedExtractionOfSdsData"),content:e("inventoryManagement.SdsManagerHaveAWorldClassMethod"),image:a.createElement("img",{src:"/images/benefits/AutomatedExtractionOfSdsData.webp",alt:"Automated extraction of SDS data"})},{key:"16",title:e("inventoryManagement.PreviewEditConfirmSds"),content:e("inventoryManagement.WhenYouAreApprovingSds"),image:a.createElement("img",{src:"/images/benefits/PreviewEditConfirmSds.webp",alt:"Preview and Edit confirm SDS"})},{key:"17",title:e("inventoryManagement.ImportSdsDataToYourERPSystem"),content:e("inventoryManagement.SometimesYourNeedToHaveData"),image:a.createElement("img",{src:"/images/benefits/ImportSdsDataToYourERPSystem.webp",alt:"Import SDS data to your ERP system"})},{key:"18",title:e("inventoryManagement.OverviewOfYourHazardousComponents"),content:e("inventoryManagement.InSdsManagerYouCanSeeWhich"),image:a.createElement("img",{src:"/images/benefits/OverviewOfYourHazardousComponents.webp",alt:"Overview Of Your Hazardous Components"})}]}],u=(e,t)=>{if(e.className.split(" ").indexOf(t)>=0)return e;try{return e.parentNode&&u(e.parentNode,t)}catch(TypeError){return!1}};a.useEffect((()=>{let e=n.slice();if(0===e.length){e=Array(r.length);for(let t=0;t<e.length;t++){e[t]=new Array(r[0].content.length);for(let n=0;n<e[t].length;n++)e[t][n]=!1}}e[0][0]=!0,s(e)}),[]);return a.createElement(o.Z,null,a.createElement("div",{className:"inventory-management-benefit-section"},a.createElement(l.Z,null,r.map(((e,t)=>a.createElement(c.Z,{key:t,className:"inventory-management-benefit-col",lg:6,sm:12,xs:12},a.createElement("div",{className:"text-center"},a.createElement("h2",{className:"inventory-management-benefit-title",dangerouslySetInnerHTML:{__html:e.title}})),a.createElement(m.Z,{defaultActiveKey:"0",className:"inventory-management-benefit-accordion"},e.content.map(((e,i)=>a.createElement(m.Z.Item,{"data-index":i,key:i,eventKey:e.key,className:"inventory-management-benefit-accordion-item"},a.createElement(m.Z.Button,{"data-index":i,"data-column":t,onClick:e=>{(e=>{let t=e.currentTarget,a=parseInt(t.getAttribute("data-index")),i=parseInt(t.getAttribute("data-column")),o=u(t,"inventory-management-benefit-accordion").getElementsByClassName("accordion-item"),l=n.slice();if(0===l.length){l=Array(r.length);for(let e=0;e<l.length;e++){l[e]=new Array(r[0].content.length);for(let t=0;t<l[e].length;t++)l[e][t]=!1}}l[i][a]=!0,s(l);let c=!1;for(let n=0;n<o.length;n++){let e=o[n],t=e.children[0].className.indexOf("collapsed")>-1,s=parseInt(e.getAttribute("data-index"));if(!t&&s<a){c=!0;break}}c?setTimeout((()=>{window.scrollTo(0,t.offsetTop)}),300):-1!=t.className.indexOf("collapsed")&&window.scrollTo(0,e.currentTarget.offsetTop)})(e)}},a.createElement("img",{src:"/icons/CheckCircle.png",className:"check-icon ",alt:"Bullet Icon"}),a.createElement("h3",{dangerouslySetInnerHTML:{__html:e.title}})),a.createElement(m.Z.Body,{className:"inventory-management-benefit-accordion-body"},n.length>0&&n[t][i]?e.image:a.createElement("img",{src:"data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",alt:e.title}),a.createElement("div",{className:"inventory-management-benefit-accordion-content",dangerouslySetInnerHTML:{__html:e.content}}))))))))))))},d=n(5133),p=n(2984);var y=()=>{const{t:e}=(0,i.$)();d.ZP.language;return a.createElement("div",{className:"inventory-management-price"},a.createElement("div",{className:"inventory-management-price-background"},a.createElement(o.Z,null,a.createElement("div",{className:"inventory-management-price-container"},a.createElement("div",{className:"inventory-management-price-content"},a.createElement("div",{className:"inventory-management-price-title"},e("inventoryManagement.WeAreGuaranteeing"),a.createElement(p.Z,{to:"/pricing/"}," ",e("inventoryManagement.LowestPrices")," "),e("inventoryManagement.InYourMarket")),a.createElement(p.Z,{to:"/pricing/",className:"see-price-btn"}," ",e("inventoryManagement.SeePrices")," ")),a.createElement("img",{src:"/images/InventoryManagementBenefitPrize.webp",className:"inventory-management-price-image",alt:"Benefit Prize in Inventory Management Page"})))))},g=n(5818),h=n(4952),f=n.n(h);var v=()=>{const{t:e}=(0,i.$)(),t=a.useRef(null);return a.useEffect((()=>{if("en"==d.ZP.language){const e={stringsElement:"#inventory-management-typed-strings",typeSpeed:60,backSpeed:40,startDelay:100,backDelay:1200,cursorChar:"|",loop:!1,attr:null,onComplete:e=>{e.cursor.remove()}};return t.current=new(f())("#inventory-management-typed",e),()=>{t.current.destroy()}}}),[]),a.createElement(g.Z,{title:e("inventoryManagement.TheOnlySolution"),style:"inventory-management-page-header-v4",containerStyle:"inventory-management-page-header-v4-container",titleStyle:"inventory-management-page-header-v4-title"})};var b=()=>{const{t:e}=(0,i.$)(),t=[{icon:"/icons/FileAdd.svg",title:e("inventoryManagement.CreateYourFirstSdsLibrary"),content:e("inventoryManagement.AllBusinessesUsingChemicals")},{icon:"/icons/Tower.svg",title:e("inventoryManagement.MoveYourFileBasedLibraryOnline"),content:e("inventoryManagement.YouCanImportYourCurrent")},{icon:"/icons/FileReload.svg",title:e("inventoryManagement.SwitchToSdsManager"),content:e("inventoryManagement.StartCostSavingsToday")},{icon:"/icons/UserCheck.svg",title:e("inventoryManagement.HireASafetyDataSheetExpert"),content:e("inventoryManagement.IfYouNeedAssistance")}];return a.createElement("div",{className:"inventory-management-best-path"},a.createElement(o.Z,null,a.createElement("div",{className:"inventory-management-best-path-container"},a.createElement("p",{className:"inventory-management-best-path-title"}," ",e("inventoryManagement.TakeTheBestPathForward")," "),a.createElement(l.Z,{className:"inventory-management-best-path-row"},t.map(((e,t)=>a.createElement(c.Z,{xs:12,sm:12,md:6,xl:3,key:t,className:"inventory-management-best-path-col"},a.createElement("div",{className:"inventory-management-best-path-item"},a.createElement("img",{src:e.icon,alt:`best path icon ${t}`}),a.createElement("div",{className:"inventory-management-best-path-item-title"}," ",e.title," "),a.createElement("p",null," ",e.content," ")))))))))},E=n(756),S=n(5444),k=n(4627),M=n(1804),C=n(7018);var N=e=>{let{title:t}=e;const{country:n}=(0,C.l)();return a.createElement("div",{className:"box"},a.createElement("div",{className:"title-container"},a.createElement(M.Z,{title1:!0,black:!0,textStyle:"title"},t)),a.createElement("div",{className:"bottom-content"},a.createElement("div",{className:"search-box-btn"},a.createElement(E.Z,{onSearch:e=>(e=>{(0,S.c4)((0,k.Gr)(`/search/?q=${e}`,n))})(e)}))))},w=n(8510),A=n(3948),T=n(6353);var x=e=>{const{t:t,i18n:n}=(0,i.$)(),l=[t("inventoryManagement.IfYouNeedASafetyDataSheetFromASupplier"),t("inventoryManagement.IfYouAlreadyAreInPosession"),t("inventoryManagement.IfTheSupplierOfYourProduct"),t("inventoryManagement.IfYouDoNotWantToDeal")];return a.createElement(s.Z,null,a.createElement(r.Z,{title:t("seo.inventoryManagement.title"),description:t("seo.inventoryManagement.description"),canonicalUrl:e.pageContext.dir+e.pageContext.originalPath}),a.createElement("div",{className:"inventory-management-page"},a.createElement(v,null),a.createElement(u,null),a.createElement(y,null),a.createElement(b,null),a.createElement(w.Z,null),a.createElement(A.Z,null),a.createElement("div",{className:"inventory-management-search-box"},a.createElement(o.Z,null,a.createElement("div",{className:"inventory-management-search-box-container"},a.createElement(N,{title:t("inventoryManagement.searchBoxTitle")})))),a.createElement(o.Z,null,a.createElement("div",{className:"inventory-management-cases"},a.createElement(m.Z,{defaultActiveKey:"0"},a.createElement(m.Z.Item,{eventKey:"abc",className:"inventory-management-cases-item"},a.createElement(m.Z.Button,{className:"accordion-header"},a.createElement("span",{dangerouslySetInnerHTML:{__html:t("inventoryManagement.EvenThoughWeHave")}})),a.createElement(m.Z.Body,{className:"inventory-management-cases-accordion-body"},a.createElement("ul",null,l.map(((e,t)=>a.createElement("div",{key:t,className:"inventory-management-cases-content"},a.createElement("img",{className:"bullet-icon",src:"/icons/Bullet.png"}),a.createElement("li",{key:t}," ",e," ")))))))))),a.createElement(T.Z,null)))}}}]);
//# sourceMappingURL=component---src-pages-home-v-2-tsx-badfb2651d36bd16522d.js.map