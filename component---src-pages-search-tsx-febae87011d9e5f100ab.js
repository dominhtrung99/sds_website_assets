"use strict";(self.webpackChunksds_archive_website=self.webpackChunksds_archive_website||[]).push([[334,408],{4653:function(e,a,t){var n=t(5900),l=t.n(n),s=t(257),i=t(5697),r=t.n(i),d=t(1312);const c={type:r().string,tooltip:r().bool,as:r().elementType},o=s.forwardRef(((e,a)=>{let{as:t="div",className:n,type:s="valid",tooltip:i=!1,...r}=e;return(0,d.tZ)(t,{...r,ref:a,className:l()(n,`${s}-${i?"tooltip":"feedback"}`)})}));o.displayName="Feedback",o.propTypes=c,a.Z=o},4709:function(e,a,t){var n=t(5900),l=t.n(n),s=t(257),i=t(8788),r=t(9541),d=t(1312);const c=s.forwardRef(((e,a)=>{let{id:t,bsPrefix:n,className:c,type:o="checkbox",isValid:u=!1,isInvalid:m=!1,as:_="input",...h}=e;const{controlId:f}=(0,s.useContext)(i.Z);return n=(0,r.vE)(n,"form-check-input"),(0,d.tZ)(_,{...h,ref:a,type:o,id:t||f,className:l()(c,n,u&&"is-valid",m&&"is-invalid")})}));c.displayName="FormCheckInput",a.Z=c},8788:function(e,a,t){const n=t(257).createContext({});a.Z=n},1760:function(e,a,t){var n=t(5900),l=t.n(n),s=t(257),i=(t(2473),t(4653)),r=t(8788),d=t(9541),c=t(1312);const o=s.forwardRef(((e,a)=>{let{bsPrefix:t,type:n,size:i,htmlSize:o,id:u,className:m,isValid:_=!1,isInvalid:h=!1,plaintext:f,readOnly:p,as:y="input",...g}=e;const{controlId:S}=(0,s.useContext)(r.Z);let v;return t=(0,d.vE)(t,"form-control"),v=f?{[`${t}-plaintext`]:!0}:{[t]:!0,[`${t}-${i}`]:i},(0,c.tZ)(y,{...g,type:n,size:o,ref:a,readOnly:p,id:u||S,className:l()(m,v,_&&"is-valid",h&&"is-invalid","color"===n&&`${t}-color`)})}));o.displayName="FormControl",a.Z=Object.assign(o,{Feedback:i.Z})},9253:function(e,a,t){var n=t(257),l=t(5019),s=t(9874);const i=(0,n.lazy)((()=>t.e(114).then(t.bind(t,3114)))),r=(0,n.lazy)((()=>Promise.all([t.e(351),t.e(727),t.e(12),t.e(286),t.e(107)]).then(t.bind(t,3107))));a.Z=e=>{let{title:a,searchBar:t,searchFooter:d=!0,showTable:c=!1,loading:o=!1,notFound:u=!1,keyword:m="",response:_=null,pdfModal:h=!1,source:f=""}=e;const{t:p}=(0,l.$)();return n.createElement(s.Z,null,n.createElement("div",null,n.createElement("div",{className:"search-box-container"},n.createElement("div",{className:"search-box-header"},n.createElement("div",{dangerouslySetInnerHTML:{__html:a}}),n.createElement("div",{className:"search-box-bar-container"},n.createElement("div",{className:"search-box-bar"},t)),c?!u&&n.createElement("div",{className:"search-box-result-count"}," ",_?_.total:0," ",p("search.result")," "):null),c?m&&n.createElement("div",{className:"search-box-result-table"},o?n.createElement(i,{animation:"border"}):u?n.createElement("div",{className:"not-found-text"},p("search.notFound")):n.createElement(r,{pdfModal:h,response:_,source:f})):null),d?n.createElement("div",{className:"search-box-link"},p("search.PoweredBy"),n.createElement("a",{target:"_blank",href:"https://sdsmanager.com/",title:"SDS manager"},"sdsmanager.com")):null))}},4329:function(e,a,t){function n(e,a,t,n,l){return new Promise(((s,i)=>{const r=new XMLHttpRequest;r.onreadystatechange=()=>{if(4===r.readyState){let a;switch(r.status){case 200:try{a=JSON.parse(r.responseText)}catch(e){a=r.status}s(a);break;case 201:try{a=JSON.parse(r.responseText)}catch(e){a=r.status}s(a);break;case 400:case 401:case 403:case 409:case 290:case 490:case 500:try{a=JSON.parse(r.responseText),a.status=r.status}catch(e){a="Server currently under maintenance, please try again later."}break;default:a="Server currently under maintenance, please try again later."}i(a)}},r.open(a,e,!0),l&&r.setRequestHeader("Authorization","JWT "+l),n?r.send(n):(r.setRequestHeader("Content-Type","application/json;charset=UTF-8"),r.send(JSON.stringify(t)))}))}t.d(a,{h:function(){return n}})},7006:function(e,a,t){t.r(a),t.d(a,{MAX_RESULT:function(){return b},PER_PAGE:function(){return v},default:function(){return w}});var n=t(257),l=t(7700),s=t(756),i=t(6187),r=t(7825),d=t(5019),c=t(4329),o=t(3586),u=t(6222),m=t(9253),_=t(7018),h=t(4627),f=t(9874);var p=[{id:86,name:"Albanian",code:"sq",default_email_sender_alias:null},{id:87,name:"Arabic",code:"ar",default_email_sender_alias:null},{id:107,name:"Armenian",code:"arm",default_email_sender_alias:null},{id:101,name:"Bosnian",code:"bs",default_email_sender_alias:null},{id:85,name:"Bulgarian",code:"bg",default_email_sender_alias:null},{id:66,name:"Chinese",code:"zh",default_email_sender_alias:null},{id:84,name:"Croatian",code:"hr",default_email_sender_alias:null},{id:83,name:"Czech",code:"cs",default_email_sender_alias:null},{id:55,name:"Danish",code:"da",default_email_sender_alias:null},{id:60,name:"Dutch",code:"nl",default_email_sender_alias:null},{id:54,name:"English",code:"en",default_email_sender_alias:"SDS-Archive - responsible for collecting SDS"},{id:82,name:"Estonian",code:"et",default_email_sender_alias:null},{id:81,name:"Finnish",code:"fi",default_email_sender_alias:null},{id:65,name:"French",code:"fr",default_email_sender_alias:null},{id:98,name:"Galician",code:"gl",default_email_sender_alias:null},{id:59,name:"German",code:"de",default_email_sender_alias:null},{id:80,name:"Greek",code:"el",default_email_sender_alias:null},{id:100,name:"Haitian",code:"ht",default_email_sender_alias:null},{id:104,name:"Hebrew",code:"he",default_email_sender_alias:null},{id:64,name:"Hindi",code:"hi",default_email_sender_alias:null},{id:79,name:"Hungarian",code:"hu",default_email_sender_alias:null},{id:78,name:"Icelandic",code:"is",default_email_sender_alias:null},{id:63,name:"Indonesian",code:"id",default_email_sender_alias:null},{id:102,name:"Irish",code:"ga",default_email_sender_alias:null},{id:62,name:"Italian",code:"it",default_email_sender_alias:null},{id:61,name:"Japanese",code:"ja",default_email_sender_alias:null},{id:77,name:"Korean",code:"ko",default_email_sender_alias:null},{id:99,name:"Latin",code:"la",default_email_sender_alias:null},{id:76,name:"Latvian",code:"lv",default_email_sender_alias:null},{id:75,name:"Lithuanian",code:"lt",default_email_sender_alias:null},{id:88,name:"Malay",code:"ms",default_email_sender_alias:null},{id:97,name:"Maltese",code:"mt",default_email_sender_alias:null},{id:1,name:"Norwegian",code:"no",default_email_sender_alias:"SDS-Archive Ansvarlig for innsamling av SDS"},{id:105,name:"Persian",code:"fa",default_email_sender_alias:null},{id:68,name:"Polish",code:"pl",default_email_sender_alias:null},{id:58,name:"Portuguese",code:"pt",default_email_sender_alias:null},{id:74,name:"Romanian",code:"ro",default_email_sender_alias:null},{id:73,name:"Russian",code:"ru",default_email_sender_alias:null},{id:72,name:"Serbian",code:"sr",default_email_sender_alias:null},{id:71,name:"Slovak",code:"sk",default_email_sender_alias:null},{id:70,name:"Slovenian",code:"sl",default_email_sender_alias:null},{id:57,name:"Spanish",code:"es",default_email_sender_alias:null},{id:56,name:"Swedish",code:"sv",default_email_sender_alias:null},{id:69,name:"Thai",code:"th",default_email_sender_alias:null},{id:89,name:"Turkish",code:"tr",default_email_sender_alias:null},{id:90,name:"Ukrainian",code:"uk",default_email_sender_alias:null},{id:67,name:"Vietnamese",code:"vi",default_email_sender_alias:null}],y=t(2566);var g=()=>{const{t:e}=(0,d.$)(),a=[{title:e("search.sds_online"),description:e("search.sds_online_des")},{title:e("search.sds_database"),description:e("search.sds_database_des")},{title:e("search.sds_sheet"),description:e("search.sds_sheet_des")},{title:e("search.msds_sheets"),description:e("search.msds_sheets_des")},{title:e("search.free_sds_sheets"),description:e("search.free_sds_sheets_des")},{title:e("search.sds_search"),description:e("search.sds_search_des")},{title:e("search.printable_PDF"),description:e("search.printable_PDF_des")},{title:e("search.sds_binders"),description:e("search.sds_binders_des")},{title:e("search.safety_data_sheet"),description:e("search.safety_data_sheet_des")},{title:e("search.library_of_SDS"),description:e("search.library_of_SDS_des")},{title:e("search.applicable_regulations"),description:e("search.applicable_regulations_des")}];return n.createElement("div",{className:"search-footer-text"},n.createElement("h2",{className:"search-box-title"},e("search.Therminology")),n.createElement(y.Z,{defaultActiveKey:"0"},a.map(((e,a)=>n.createElement(y.Z.Item,{eventKey:`${a}`},n.createElement(y.Z.Header,null,e.title),n.createElement(y.Z.Body,null,n.createElement("div",{dangerouslySetInnerHTML:{__html:e.description}})))))))},S=t(8304);const v=20,b=50,E=(0,n.lazy)((()=>t.e(427).then(t.bind(t,8427))));var w=e=>{const{country:a}=(0,_.l)(),{t:t}=(0,d.$)(),{0:y,1:v}=(0,n.useState)(null),{0:b,1:w}=(0,n.useState)(!1),{0:k,1:N}=(0,n.useState)(!1),{0:x,1:Z}=(0,n.useState)(0),{0:D,1:A}=(0,n.useState)(o.ZP.language),{0:C,1:P}=(0,n.useState)(null),{0:T,1:F}=(0,n.useState)(""),{0:I,1:$}=(0,n.useState)(p);(0,n.useEffect)((()=>{if("undefined"!=typeof window)try{let e=new URLSearchParams(window.location.search).get("q");e&&(e=e.trim(),F(e),z(e,D))}catch(e){P(n.createElement(f.Z,null,n.createElement(E,{title:"Error",content:"Oops! Something is not working!",onCancel:()=>P(null)})))}}),[]);const z=(e,a)=>{w(!0),v(null);let t=S.Vy;t+=`?search=${e}&language_code=${a}`,(0,c.h)(t,"get").then((e=>{v(e),w(!1)})).catch((e=>{w(!1),P(n.createElement(f.Z,null,n.createElement(E,{content:e.message?e.message:e,onCancel:()=>P(null)}))),(0,c.h)(S.CZ+"/api/report/","post",{url:window.location.href,error_message:"Search SDS API: "+t}).then((()=>{console.log("report success")}))}))},H=(e,t)=>{if(k&&N(!1),x>=4)return N(!0),void Z(0);z(e,t),F(e),history.pushState("","",(0,h.Gr)(`/search/?q=${e}`,a)),Z(x+1)},M=[n.createElement("script",{type:"application/ld+json",key:"0"},JSON.stringify({"@context":"https://schema.org/","@type":"WebSite",name:"SdsManager",url:"https://sdsmanager.com"+e.location.pathname,potentialAction:{"@type":"SearchAction",target:{"@type":"EntryPoint",urlTemplate:"https://sdsmanager.com"+e.location.pathname+"?q={search_term_string}"},"query-input":"required name=search_term_string"}})),n.createElement("script",{type:"application/ld+json",key:"1"},JSON.stringify({"@context":"https://schema.org","@type":"FAQPage",mainEntity:[{"@type":"Question",name:"What is a Safety Data Sheet?",acceptedAnswer:{"@type":"Answer",text:"A safety data sheet (SDS), also named material safety data sheet (MSDS) and product safety data sheet (PSDS) is a document produced in alignment with the UN’s Globally Harmonized System of Classification and Labelling of Chemicals (GHS) that the manufacturer, importer, or distributor of a chemical product is required to provide to downstream users. SDSs contain information about chemical properties, health and environmental hazards, protective measures, as well as safety precautions for storing, handling, and transporting chemicals."}},{"@type":"Question",name:"Who should keep library of SDS?",acceptedAnswer:{"@type":"Answer",text:"Safety Data Sheets are primarily focused on the hazards of working with the material in an occupational setting. Employers must ensure that employees have access to safety data sheets for all of the hazardous chemicals they handle."}}]}))];let R=!y||y&&0===y.results.length,q=e.pageContext.dir;return["us","no"].includes(q)||(q=u.nr),n.createElement(r.Z,null,n.createElement(l.Z,{title:t("seo.search.title"),description:t("seo.search.description"),microData:M,canonicalUrl:q+e.pageContext.originalPath}),n.createElement("div",{className:"search-page-container"},n.createElement(i.Z,null,n.createElement(m.Z,{title:`<h1 class="search-box-title"> ${t("search.title")} </h1>`,searchBar:n.createElement(s.Z,{countryFilter:n.createElement("select",{className:"change-language form-select",value:D,onChange:e=>{A(e.target.value),T&&H(T,e.target.value)}},I.map(((e,a)=>n.createElement("option",{key:a,value:e.code}," ",e.name," ")))),valueInit:T,captcha:k,onSearch:e=>H(e,D)}),loading:b,notFound:R,keyword:T,response:y,showTable:!0,searchFooter:!1,pdfModal:!0,source:"search-save-online"}),R&&T&&!b&&n.createElement("div",{className:"search-recommend-text",dangerouslySetInnerHTML:{__html:t("search.not_finding_what_you_are_looking_for")}}),n.createElement(g,null))),C)}}}]);
//# sourceMappingURL=component---src-pages-search-tsx-febae87011d9e5f100ab.js.map