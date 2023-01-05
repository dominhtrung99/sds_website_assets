"use strict";(self.webpackChunksds_archive_website=self.webpackChunksds_archive_website||[]).push([[2757,2413,8427],{4653:function(e,t,a){var l=a(5900),n=a.n(l),r=a(257),o=a(5697),s=a.n(o),c=a(1312);const i={type:s().string,tooltip:s().bool,as:s().elementType},m=r.forwardRef(((e,t)=>{let{as:a="div",className:l,type:r="valid",tooltip:o=!1,...s}=e;return(0,c.tZ)(a,{...s,ref:t,className:n()(l,`${r}-${o?"tooltip":"feedback"}`)})}));m.displayName="Feedback",m.propTypes=i,t.Z=m},3932:function(e,t,a){a.d(t,{Z:function(){return $}});var l=a(5900),n=a.n(l),r=a(5697),o=a.n(r),s=a(257),c=a(4653),i=a(4709),m=a(8788),d=a(9541),u=a(1312);const f=s.forwardRef(((e,t)=>{let{bsPrefix:a,className:l,htmlFor:r,...o}=e;const{controlId:c}=(0,s.useContext)(m.Z);return a=(0,d.vE)(a,"form-check-label"),(0,u.tZ)("label",{...o,ref:t,htmlFor:r||c,className:n()(l,a)})}));f.displayName="FormCheckLabel";var p=f;const h=s.forwardRef(((e,t)=>{let{id:a,bsPrefix:l,bsSwitchPrefix:r,inline:o=!1,reverse:f=!1,disabled:h=!1,isValid:b=!1,isInvalid:g=!1,feedbackTooltip:v=!1,feedback:y,feedbackType:E,className:N,style:Z,title:w="",type:k="checkbox",label:x,children:S,as:C="input",...I}=e;l=(0,d.vE)(l,"form-check"),r=(0,d.vE)(r,"form-switch");const{controlId:L}=(0,s.useContext)(m.Z),P=(0,s.useMemo)((()=>({controlId:a||L})),[L,a]),F=!S&&null!=x&&!1!==x||function(e,t){return s.Children.toArray(e).some((e=>s.isValidElement(e)&&e.type===t))}(S,p),R=(0,u.tZ)(i.Z,{...I,type:"switch"===k?"checkbox":k,ref:t,isValid:b,isInvalid:g,disabled:h,as:C});return(0,u.tZ)(m.Z.Provider,{value:P,children:(0,u.tZ)("div",{style:Z,className:n()(N,F&&l,o&&`${l}-inline`,f&&`${l}-reverse`,"switch"===k&&r),children:S||(0,u.BX)(u.HY,{children:[R,F&&(0,u.tZ)(p,{title:w,children:x}),y&&(0,u.tZ)(c.Z,{type:E,tooltip:v,children:y})]})})})}));h.displayName="FormCheck";var b=Object.assign(h,{Input:i.Z,Label:p}),g=a(1760),v=(0,a(8870).Z)("form-floating");const y=s.forwardRef(((e,t)=>{let{controlId:a,as:l="div",...n}=e;const r=(0,s.useMemo)((()=>({controlId:a})),[a]);return(0,u.tZ)(m.Z.Provider,{value:r,children:(0,u.tZ)(l,{...n,ref:t})})}));y.displayName="FormGroup";var E=y,N=(a(2473),a(7408));const Z=s.forwardRef(((e,t)=>{let{as:a="label",bsPrefix:l,column:r,visuallyHidden:o,className:c,htmlFor:i,...f}=e;const{controlId:p}=(0,s.useContext)(m.Z);l=(0,d.vE)(l,"form-label");let h="col-form-label";"string"==typeof r&&(h=`${h} ${h}-${r}`);const b=n()(c,l,o&&"visually-hidden",r&&h);return i=i||p,r?(0,u.tZ)(N.Z,{ref:t,as:"label",className:b,htmlFor:i,...f}):(0,u.tZ)(a,{ref:t,className:b,htmlFor:i,...f})}));Z.displayName="FormLabel",Z.defaultProps={column:!1,visuallyHidden:!1};var w=Z;const k=s.forwardRef(((e,t)=>{let{bsPrefix:a,className:l,id:r,...o}=e;const{controlId:c}=(0,s.useContext)(m.Z);return a=(0,d.vE)(a,"form-range"),(0,u.tZ)("input",{...o,type:"range",ref:t,className:n()(l,a),id:r||c})}));k.displayName="FormRange";var x=k;const S=s.forwardRef(((e,t)=>{let{bsPrefix:a,size:l,htmlSize:r,className:o,isValid:c=!1,isInvalid:i=!1,id:f,...p}=e;const{controlId:h}=(0,s.useContext)(m.Z);return a=(0,d.vE)(a,"form-select"),(0,u.tZ)("select",{...p,size:r,ref:t,className:n()(o,a,l&&`${a}-${l}`,c&&"is-valid",i&&"is-invalid"),id:f||h})}));S.displayName="FormSelect";var C=S;const I=s.forwardRef(((e,t)=>{let{bsPrefix:a,className:l,as:r="small",muted:o,...s}=e;return a=(0,d.vE)(a,"form-text"),(0,u.tZ)(r,{...s,ref:t,className:n()(l,a,o&&"text-muted")})}));I.displayName="FormText";var L=I;const P=s.forwardRef(((e,t)=>(0,u.tZ)(b,{...e,ref:t,type:"switch"})));P.displayName="Switch";var F=Object.assign(P,{Input:b.Input,Label:b.Label});const R=s.forwardRef(((e,t)=>{let{bsPrefix:a,className:l,children:r,controlId:o,label:s,...c}=e;return a=(0,d.vE)(a,"form-floating"),(0,u.BX)(E,{ref:t,className:n()(l,a),controlId:o,...c,children:[r,(0,u.tZ)("label",{htmlFor:o,children:s})]})}));R.displayName="FloatingLabel";var _=R;const z={_ref:o().any,validated:o().bool,as:o().elementType},T=s.forwardRef(((e,t)=>{let{className:a,validated:l,as:r="form",...o}=e;return(0,u.tZ)(r,{...o,ref:t,className:n()(a,l&&"was-validated")})}));T.displayName="Form",T.propTypes=z;var $=Object.assign(T,{Group:E,Control:g.Z,Floating:v,Check:b,Switch:F,Label:w,Text:L,Range:x,Select:C,FloatingLabel:_})},4709:function(e,t,a){var l=a(5900),n=a.n(l),r=a(257),o=a(8788),s=a(9541),c=a(1312);const i=r.forwardRef(((e,t)=>{let{id:a,bsPrefix:l,className:i,type:m="checkbox",isValid:d=!1,isInvalid:u=!1,as:f="input",...p}=e;const{controlId:h}=(0,r.useContext)(o.Z);return l=(0,s.vE)(l,"form-check-input"),(0,c.tZ)(f,{...p,ref:t,type:m,id:a||h,className:n()(i,l,d&&"is-valid",u&&"is-invalid")})}));i.displayName="FormCheckInput",t.Z=i},8788:function(e,t,a){const l=a(257).createContext({});t.Z=l},1760:function(e,t,a){var l=a(5900),n=a.n(l),r=a(257),o=(a(2473),a(4653)),s=a(8788),c=a(9541),i=a(1312);const m=r.forwardRef(((e,t)=>{let{bsPrefix:a,type:l,size:o,htmlSize:m,id:d,className:u,isValid:f=!1,isInvalid:p=!1,plaintext:h,readOnly:b,as:g="input",...v}=e;const{controlId:y}=(0,r.useContext)(s.Z);let E;return a=(0,c.vE)(a,"form-control"),E=h?{[`${a}-plaintext`]:!0}:{[a]:!0,[`${a}-${o}`]:o},(0,i.tZ)(g,{...v,type:l,size:m,ref:t,readOnly:b,id:d||y,className:n()(u,E,f&&"is-valid",p&&"is-invalid","color"===l&&`${a}-color`)})}));m.displayName="FormControl",t.Z=Object.assign(m,{Feedback:o.Z})},8427:function(e,t,a){a.r(t);var l=a(257),n=a(8203),r=a(6594),o=a(5019);t.default=e=>{let{title:t="",content:a,onConfirm:s,onCancel:c,cancelButtonTitle:i=""}=e;const{t:m}=(0,o.$)();return l.createElement(n.Z,{dialogClassName:"alert-modal",show:!0,centered:!0,onHide:c},l.createElement("div",{className:"alert-modal-container"},t&&l.createElement("div",{className:"alert-modal-title"}," ",t," "),a&&l.createElement("div",{className:"alert-modal-content"}," ",a," "),null!=s?l.createElement("div",{style:{display:"flex",gap:10}},l.createElement(r.Z,{className:"alert-modal-back-button",onClick:c}," ",m("Back")," "),l.createElement(r.Z,{className:"alert-modal-confirm-button",onClick:s}," ",m("Yes")," ")):l.createElement(r.Z,{className:"alert-modal-back-button",onClick:c}," ",i||m("Back")," ")))}},6722:function(e,t,a){var l=a(257),n=a(7408),r=a(6187),o=a(994),s=a(2984),c=a(5019),i=a(2216),m=a(4627),d=a(9874),u=a(7018),f=a(8304),p=a(4070),h=a.n(p);const b=(0,l.lazy)((()=>a.e(2885).then(a.t.bind(a,3720,23)))),g=e=>{let{links:t,title:a}=e;const{t:n}=(0,c.$)(),r={SdsManager:[{label:n("footer.footerText")}],company:[{label:n("About Us"),url:"/about-us/"},{label:n("Partner Program"),url:"/partner-program/"},{label:n("contactUs"),url:"/contact-us/"}],solution:[{label:n("SdsInventoryManagement"),url:"/"},{label:n("retailers_ecommerce"),url:"/retail-ecommerce/"},{label:n("authoring_creation"),url:"/sds-author/"},{label:n("data_extraction_parsing"),url:"/sds-parser-api/"},{label:n("safety_data_sheet_database"),url:"/search/"}],contact:[{label:n("contactUs"),url:"/contact-us/"},{label:n("footer.footerCompany")},{label:n("footer.footerAddress")}]};return l.createElement("div",{className:"col-inner"},l.createElement("p",{className:"col-heading"},a),l.createElement("ul",null,r[t].map(((e,t)=>e.url?l.createElement("li",{key:t},l.createElement(s.Z,{to:e.url,title:e.label},e.label)):l.createElement("li",{key:t}," ",e.label," ")))))};t.Z=()=>{const{t:e}=(0,c.$)(),[t,a]=l.useState(!1),{country:p}=(0,u.l)();return l.useEffect((()=>{var e;(a(!0),(0,m.yF)())||(fetch(f.xz+"/us/",{mode:"cors"}).then((function(e){const t=e.headers.get("x-country-code");t&&window.localStorage.setItem("x-country-code",(0,m.gK)(t.toLowerCase()))})).catch((()=>{})),h().init(),console.log("Sbjs: ",null===h()||void 0===h()||null===(e=h().get)||void 0===e?void 0:e.current))}),[]),l.createElement("div",{className:"footer-section-v2"},l.createElement(r.Z,null,l.createElement(o.Z,{className:"footer-inner"},l.createElement(n.Z,{xs:12,sm:12,md:4,className:"left-logo-container footer-right-col"},l.createElement("div",{className:"d-flex footer-info"},l.createElement(i.LazyLoadImage,{className:"logo",alt:"logo",height:93,src:"/images/logo/logo-down-yellow-white.svg",width:59}),l.createElement(g,{title:e("SdsMangerAs"),links:"SdsManager"}))),l.createElement(n.Z,{xs:12,sm:12,md:4,className:"footer-right-col"},l.createElement(g,{title:e("Solutions"),links:"solution"})),l.createElement(n.Z,{xs:12,sm:12,md:4,className:"footer-right-col"},l.createElement(g,{title:e("Company"),links:"company"}),l.createElement("div",{className:"col-inner"},l.createElement("p",{className:"col-heading",style:{marginBottom:10,color:"var(--yellow)"}},e("Address")),l.createElement("span",{style:{fontSize:14}},e("footer.footerAddress")),"us"===p?l.createElement("p",{className:"phonenumber-text"},l.createElement(i.LazyLoadImage,{alt:"  phonenumber",height:13,src:"/icons/phone-icon.png",width:13,style:{margin:0,marginRight:"5px"}}),l.createElement("a",{href:"tel:+12523709657",style:{color:"white",textDecoration:"none"}},"+1 252 370 9657")):"no"===p?l.createElement("p",{className:"phonenumber-text"},l.createElement(i.LazyLoadImage,{alt:"  phonenumber",height:13,src:"/icons/phone-icon.png",width:13,style:{margin:0,marginRight:"5px"}}),l.createElement("a",{href:"tel:+4723507478",style:{color:"white",textDecoration:"none"}},"+47 23 50 74 78")):-1!==["uk","eu"].indexOf(p)?l.createElement("p",{className:"phonenumber-text"},l.createElement(i.LazyLoadImage,{alt:"phonenumber",height:13,src:"/icons/phone-icon.png",width:13,style:{margin:0,marginRight:"5px"}}),l.createElement("a",{href:"tel:+442039361240",style:{color:"white",textDecoration:"none"}},"+44 20 3936 1240")):null)))),l.createElement("div",{className:"bottom-footer"},l.createElement(r.Z,null,l.createElement("div",{className:"bottom-footer-inner"},l.createElement("div",{className:"col-left"},l.createElement(s.Z,{className:"link-item",to:"/privacy-policy/",title:"Privacy Policy"}," ",e("Privacy Policy")," "),l.createElement(s.Z,{className:"link-item",to:"/terms-and-conditions/",title:"Terms and Conditions"}," ",e("Terms and Conditions")," ")),l.createElement("div",{className:"social-link"},l.createElement("a",{target:"_blank",href:"https://www.facebook.com/sdsmanager/",title:"SDS manager facebook"},l.createElement(i.LazyLoadImage,{alt:"facebook",height:50,src:"/icons/facebook-icon.webp",width:50})),l.createElement("a",{target:"_blank",href:"https://twitter.com/Sds_Manager_com",title:"SDS manager twitter"},l.createElement(i.LazyLoadImage,{alt:"twitter",height:50,src:"/icons/twitter-icon.webp",width:50})),l.createElement("a",{target:"_blank",href:"https://www.linkedin.com/company/sds-manager",title:"SDS manager linkedin"},l.createElement(i.LazyLoadImage,{alt:"linkedin",height:50,src:"/icons/linkedin-icon.webp",width:50}))),l.createElement("div",null,l.createElement("span",{className:"copyright-text"},"©2022 SDS Manager | ",e("All right reserved")))))),t&&!(0,m.tq)()&&l.createElement(d.Z,null,l.createElement("div",{className:"cookie-consent"},l.createElement(b,{location:"bottom",buttonText:e("Accept"),cookieName:"sdsManagerCookies",style:{background:"var(--dark-grey)",fontSize:"13px"},buttonStyle:{background:"var(--yellow)",color:"var(--black)",fontSize:"13px",fontWeight:500,marginLeft:15,marginBottom:15}},e("Accept Cookies")))))}},7825:function(e,t,a){var l=a(257),n=a(5414),r=a(9178),o=a(6722),s=a(1648);t.Z=e=>{let{children:t,version:a="v6"}=e;const c={title:"SdsManager",description:"Safety Data Sheet management for Users of chemicals, Retailers, Webshops and Manufacturers",keywords:"SdsManager, Safety Data Sheet management"};return l.createElement(s.Z,null,l.createElement(n.q,{titleTemplate:`%s - ${c.title}`,defaultTitle:c.title,meta:[{name:"description",content:c.description},{name:"keywords",content:c.keywords}]}),l.createElement(r.Z,{version:a}),l.createElement("main",null,t),l.createElement(o.Z,null))}},176:function(e,t,a){a.r(t);var l=a(257),n=a(7700),r=a(7825),o=a(5019),s=a(6187),c=a(3932),i=a(7408),m=a(6594),d=a(5133),u=a(4329),f=a(8427),p=a(2224);t.default=e=>{const{t:t,i18n:a}=(0,o.$)(),[h,b]=l.useState(null),[g,v]=l.useState("");let y=e.pageContext.dir;return["us","no"].includes(y)||(y=p.nr),l.createElement(r.Z,null,l.createElement(n.Z,{title:t("Unavailable"),canonicalUrl:y+e.pageContext.originalPath}),l.createElement("div",{className:"unavailable-page"},l.createElement(s.Z,null,l.createElement("div",{className:"unavailable-page-card"},l.createElement("h1",null,t("unavailable.Sorry")),l.createElement("h2",null,t("unavailable.ThisProductIsCurrently")),l.createElement("h3",null,t("unavailable.PleaseSubmitYourEmail")),l.createElement(c.Z,{className:"unavailable-page-form",onSubmit:e=>{e.preventDefault();(e=>{let a={}.TEST_API_URL;a+="users/test";const n={...e,language:d.ZP.language};(0,u.h)(a,"post",n).then((e=>{b(l.createElement(f.default,{title:t("success"),content:e.message,onCancel:()=>{b(null)}})),v("")})).catch((e=>{b(l.createElement(f.default,{title:"Error",content:e.message?e.message:e,onCancel:()=>b(null)}))}))})({email:g})}},l.createElement(c.Z.Group,{as:i.Z,controlId:"email"},l.createElement(c.Z.Label,{className:"unavailable-page-label",sm:"2"}," ",t("unavailable.email")," "),l.createElement(c.Z.Control,{maxLength:100,onChange:e=>{v(e.target.value)},value:g,className:"unavailable-page-input",type:"email",required:!0,placeholder:t("unavailable.enterYourEmail")})),l.createElement(m.Z,{className:"unavailable-page-btn",type:"submit"},t("unavailable.Submit"))))),h))}}}]);