"use strict";(self.webpackChunksds_archive_website=self.webpackChunksds_archive_website||[]).push([[8654,2413],{4653:function(e,t,n){var a=n(5900),l=n.n(a),r=n(257),i=n(5697),o=n.n(i),c=n(1312);const s={type:o().string,tooltip:o().bool,as:o().elementType},m=r.forwardRef(((e,t)=>{let{as:n="div",className:a,type:r="valid",tooltip:i=!1,...o}=e;return(0,c.tZ)(n,{...o,ref:t,className:l()(a,`${r}-${i?"tooltip":"feedback"}`)})}));m.displayName="Feedback",m.propTypes=s,t.Z=m},4709:function(e,t,n){var a=n(5900),l=n.n(a),r=n(257),i=n(8788),o=n(9541),c=n(1312);const s=r.forwardRef(((e,t)=>{let{id:n,bsPrefix:a,className:s,type:m="checkbox",isValid:u=!1,isInvalid:p=!1,as:d="input",...g}=e;const{controlId:E}=(0,r.useContext)(i.Z);return a=(0,o.vE)(a,"form-check-input"),(0,c.tZ)(d,{...g,ref:t,type:m,id:n||E,className:l()(s,a,u&&"is-valid",p&&"is-invalid")})}));s.displayName="FormCheckInput",t.Z=s},8788:function(e,t,n){const a=n(257).createContext({});t.Z=a},1760:function(e,t,n){var a=n(5900),l=n.n(a),r=n(257),i=(n(2473),n(4653)),o=n(8788),c=n(9541),s=n(1312);const m=r.forwardRef(((e,t)=>{let{bsPrefix:n,type:a,size:i,htmlSize:m,id:u,className:p,isValid:d=!1,isInvalid:g=!1,plaintext:E,readOnly:f,as:v="input",...h}=e;const{controlId:y}=(0,r.useContext)(o.Z);let b;return n=(0,c.vE)(n,"form-control"),b=E?{[`${n}-plaintext`]:!0}:{[n]:!0,[`${n}-${i}`]:i},(0,s.tZ)(v,{...h,type:a,size:m,ref:t,readOnly:f,id:u||y,className:l()(p,b,d&&"is-valid",g&&"is-invalid","color"===a&&`${n}-color`)})}));m.displayName="FormControl",t.Z=Object.assign(m,{Feedback:i.Z})},6353:function(e,t,n){var a=n(257),l=n(5019),r=n(6187),i=n(2984);t.Z=e=>{let{title:t,titleStyle:n}=e;const{t:o}=(0,l.$)();return a.createElement("div",{className:"contact-footer overflow-hidden text-center d-flex align-items-center justify-content-center flex-column"},a.createElement(r.Z,{className:"col-sm-12 col-xs-12 mx-auto"},a.createElement("div",{className:"d-flex justify-content-center"},a.createElement("div",{className:"contact-footer-container"},a.createElement("div",{className:"contact-footer-content"},a.createElement("div",{className:n?`${n} contact-footer-title`:"contact-footer-title",dangerouslySetInnerHTML:{__html:t||o("inventoryManagement.StillUnsureAbout")}}),a.createElement("div",{className:"contact-footer-subtitle",dangerouslySetInnerHTML:{__html:o("inventoryManagement.ContactUsNowFor")}})),a.createElement(i.Z,{to:"/contact-us/",title:"contact us"}," ",o("inventoryManagement.ContactUs")," ")))))}},6722:function(e,t,n){var a=n(257),l=n(7408),r=n(6187),i=n(994),o=n(2984),c=n(5019),s=n(2216),m=n(4627),u=n(9874),p=n(7018),d=n(8304),g=n(4070),E=n.n(g);const f=(0,a.lazy)((()=>n.e(2885).then(n.t.bind(n,3720,23)))),v=e=>{let{links:t,title:n}=e;const{t:l}=(0,c.$)(),r={SdsManager:[{label:l("footer.footerText")}],company:[{label:l("About Us"),url:"/about-us/"},{label:l("Partner Program"),url:"/partner-program/"},{label:l("contactUs"),url:"/contact-us/"}],solution:[{label:l("SdsInventoryManagement"),url:"/"},{label:l("retailers_ecommerce"),url:"/retail-ecommerce/"},{label:l("authoring_creation"),url:"/sds-author/"},{label:l("data_extraction_parsing"),url:"/sds-parser-api/"},{label:l("safety_data_sheet_database"),url:"/search/"}],contact:[{label:l("contactUs"),url:"/contact-us/"},{label:l("footer.footerCompany")},{label:l("footer.footerAddress")}]};return a.createElement("div",{className:"col-inner"},a.createElement("p",{className:"col-heading"},n),a.createElement("ul",null,r[t].map(((e,t)=>e.url?a.createElement("li",{key:t},a.createElement(o.Z,{to:e.url,title:e.label},e.label)):a.createElement("li",{key:t}," ",e.label," ")))))};t.Z=()=>{const{t:e}=(0,c.$)(),[t,n]=a.useState(!1),{country:g}=(0,p.l)();return a.useEffect((()=>{var e;(n(!0),(0,m.yF)())||(fetch(d.xz+"/us/",{mode:"cors"}).then((function(e){const t=e.headers.get("x-country-code");t&&window.localStorage.setItem("x-country-code",(0,m.gK)(t.toLowerCase()))})).catch((()=>{})),E().init(),console.log("Sbjs: ",null===E()||void 0===E()||null===(e=E().get)||void 0===e?void 0:e.current))}),[]),a.createElement("div",{className:"footer-section-v2"},a.createElement(r.Z,null,a.createElement(i.Z,{className:"footer-inner"},a.createElement(l.Z,{xs:12,sm:12,md:4,className:"left-logo-container footer-right-col"},a.createElement("div",{className:"d-flex footer-info"},a.createElement(s.LazyLoadImage,{className:"logo",alt:"logo",height:93,src:"/images/logo/logo-down-yellow-white.svg",width:59}),a.createElement(v,{title:e("SdsMangerAs"),links:"SdsManager"}))),a.createElement(l.Z,{xs:12,sm:12,md:4,className:"footer-right-col"},a.createElement(v,{title:e("Solutions"),links:"solution"})),a.createElement(l.Z,{xs:12,sm:12,md:4,className:"footer-right-col"},a.createElement(v,{title:e("Company"),links:"company"}),a.createElement("div",{className:"col-inner"},a.createElement("p",{className:"col-heading",style:{marginBottom:10,color:"var(--yellow)"}},e("Address")),a.createElement("span",{style:{fontSize:14}},e("footer.footerAddress")),"us"===g?a.createElement("p",{className:"phonenumber-text"},a.createElement(s.LazyLoadImage,{alt:"  phonenumber",height:13,src:"/icons/phone-icon.png",width:13,style:{margin:0,marginRight:"5px"}}),a.createElement("a",{href:"tel:+12523709657",style:{color:"white",textDecoration:"none"}},"+1 252 370 9657")):"no"===g?a.createElement("p",{className:"phonenumber-text"},a.createElement(s.LazyLoadImage,{alt:"  phonenumber",height:13,src:"/icons/phone-icon.png",width:13,style:{margin:0,marginRight:"5px"}}),a.createElement("a",{href:"tel:+4723507478",style:{color:"white",textDecoration:"none"}},"+47 23 50 74 78")):-1!==["uk","eu"].indexOf(g)?a.createElement("p",{className:"phonenumber-text"},a.createElement(s.LazyLoadImage,{alt:"phonenumber",height:13,src:"/icons/phone-icon.png",width:13,style:{margin:0,marginRight:"5px"}}),a.createElement("a",{href:"tel:+442039361240",style:{color:"white",textDecoration:"none"}},"+44 20 3936 1240")):null)))),a.createElement("div",{className:"bottom-footer"},a.createElement(r.Z,null,a.createElement("div",{className:"bottom-footer-inner"},a.createElement("div",{className:"col-left"},a.createElement(o.Z,{className:"link-item",to:"/privacy-policy/",title:"Privacy Policy"}," ",e("Privacy Policy")," "),a.createElement(o.Z,{className:"link-item",to:"/terms-and-conditions/",title:"Terms and Conditions"}," ",e("Terms and Conditions")," ")),a.createElement("div",{className:"social-link"},a.createElement("a",{target:"_blank",href:"https://www.facebook.com/sdsmanager/",title:"SDS manager facebook"},a.createElement(s.LazyLoadImage,{alt:"facebook",height:50,src:"/icons/facebook-icon.webp",width:50})),a.createElement("a",{target:"_blank",href:"https://twitter.com/Sds_Manager_com",title:"SDS manager twitter"},a.createElement(s.LazyLoadImage,{alt:"twitter",height:50,src:"/icons/twitter-icon.webp",width:50})),a.createElement("a",{target:"_blank",href:"https://www.linkedin.com/company/sds-manager",title:"SDS manager linkedin"},a.createElement(s.LazyLoadImage,{alt:"linkedin",height:50,src:"/icons/linkedin-icon.webp",width:50}))),a.createElement("div",null,a.createElement("span",{className:"copyright-text"},"©2022 SDS Manager | ",e("All right reserved")))))),t&&!(0,m.tq)()&&a.createElement(u.Z,null,a.createElement("div",{className:"cookie-consent"},a.createElement(f,{location:"bottom",buttonText:e("Accept"),cookieName:"sdsManagerCookies",style:{background:"var(--dark-grey)",fontSize:"13px"},buttonStyle:{background:"var(--yellow)",color:"var(--black)",fontSize:"13px",fontWeight:500,marginLeft:15,marginBottom:15}},e("Accept Cookies")))))}},5818:function(e,t,n){var a=n(257),l=n(5019),r=n(6187);t.Z=e=>{let{headline:t,headlineStyle:n="",title:i,titleStyle:o="",content:c,contentStyle:s="",containerStyle:m="",style:u="",readMoreUrl:p}=e;const{t:d}=(0,l.$)();return a.createElement("div",{className:`page-header-section overflow-hidden text-center d-flex align-items-center justify-content-center flex-column ${u}`},a.createElement(r.Z,{className:`col-md-10 col-xs-12 mx-auto page-header-content ${m}`},a.createElement("p",{className:`lead ${n}`}," ",t," "),a.createElement("h1",{dangerouslySetInnerHTML:{__html:i},className:`page-header-title ${o}`}),a.createElement("div",{dangerouslySetInnerHTML:{__html:c},className:`page-header-text ${s}`}),p&&a.createElement("a",{className:"btn yellow-btn page-header-btn",href:"#"}," ",d("Read More")," ")))}},7825:function(e,t,n){var a=n(257),l=n(5414),r=n(9178),i=n(6722),o=n(1648);t.Z=e=>{let{children:t,version:n="v6"}=e;const c={title:"SdsManager",description:"Safety Data Sheet management for Users of chemicals, Retailers, Webshops and Manufacturers",keywords:"SdsManager, Safety Data Sheet management"};return a.createElement(o.Z,null,a.createElement(l.q,{titleTemplate:`%s - ${c.title}`,defaultTitle:c.title,meta:[{name:"description",content:c.description},{name:"keywords",content:c.keywords}]}),a.createElement(r.Z,{version:n}),a.createElement("main",null,t),a.createElement(i.Z,null))}},3009:function(e,t,n){n.r(t);var a=n(257),l=n(5019),r=n(3932),i=n(8203),o=n(6594),c=n(3114),s=n(3586),m=n(4329),u=n(4627),p=n(8427),d=n(7018),g=n(8304),E=n(395),f=n(2216);t.default=e=>{let{plan:t,show:n,onCancel:v,email:h=null,custom_type:y=null,sds_count:b,service:N,redirect_url:_,pageRef:C,needCompanyWebsite:S=!0,isDemo:w=!1,defaultToken:k=null,defaultFullName:x=null,defaultCompanyName:U=null,isTrialPeriodProp:M=!0}=e;const{t:Z}=(0,l.$)(),{geoCountry:F,changeGeoCountry:$,country:L}=(0,d.l)(),[I,T]=a.useState(""),[V,D]=a.useState(""),[A,R]=a.useState(""),[P,O]=a.useState(""),[H,B]=a.useState(""),[z,W]=a.useState(!1),[K,Y]=a.useState(s.ZP.language),[j,q]=a.useState(null),[G,J]=a.useState(t||null),[X,Q]=a.useState(N||null),[ee,te]=a.useState(y||null),[ne,ae]=a.useState({}),[le,re]=a.useState(!1),[ie,oe]=a.useState(null),[ce,se]=a.useState(null),[me,ue]=a.useState(null),[pe,de]=a.useState(null),[ge,Ee]=a.useState(null),[fe,ve]=a.useState(!1),[he,ye]=a.useState(M);a.useEffect((()=>{if("undefined"==typeof window)return;const e=new URLSearchParams(window.location.search),t=e.get("email"),n=e.get("name"),a=e.get("language"),l=e.get("subscription_plan"),r=e.get("service"),i=e.get("custom_type"),o="true"===e.get("is_trial_period"),c={};for(let[s,m]of e.entries())"email"!==s&&"name"!==s&&"language"!==s&&"subscription_plan"!==s&&"service"!==s&&"custom_type"!==s&&"ref"!==s&&"popup"!==s&&"sds_count"!==s&&(c[s]=m);ae(c),t&&(T(t),W(!0)),n&&D(n),o&&ye(o),a&&Y(a),l&&J(l),r&&Q(r),i&&te(i),i&&te(i)}),[]);const be=()=>{T(""),D(""),R(""),B(""),W(!1),re(!1),v&&v()},Ne=e=>{e.preventDefault();const t=(0,u.gK)(V),n=(0,u.gK)(A),l=(0,u.gK)(P);if(0===t.length)return void se(Z("signUpModal.FullNameCannotBeEmpty"));if(se(null),0===l.length)return void ue(Z("signUpModal.PhoneNumberCanNotBeEmpty"));if(l.length>1&&isNaN(Number(l)))return void ue(Z("signUpModal.PhoneNumberIsInvalid"));if(ue(null),0===n.length)return void de(Z("signUpModal.CompanyNameCannotBeEmpty"));if(de(null),S){if(0===(0,u.gK)(H).length)return void Ee(Z("signUpModal.CompanyWebsiteCannotBeEmpty"));if(-1===H.indexOf("."))return void Ee(Z("signUpModal.CompanyWebsiteIsInvalid"));Ee(null)}if(!G)return void q(a.createElement(p.default,{title:Z("Error"),content:Z("signUpModal.FormIsInvalid"),onConfirm:()=>q(null),onCancel:()=>q(null)}));ve(!0);const r=V.split(" "),i=r[0];r.splice(0,1);let o="-";r.length>0&&(o=r.join(" "));const c=g.RE;let s={email:h?h.toLowerCase():I.toLowerCase(),first_name:(0,u.gK)(i),last_name:(0,u.gK)(o),service:X,company:n,country:(0,u.Th)("no"),default_language:K,subscription_plan:g.Uq[G],company_website:S?H:"",phone_number:l,password:null,ref:"signup_form__"+G};Object.entries(ne).map((e=>{let[t,n]=e;s[t]=n})),ee&&(s.custom_type=ee),b&&(s.sds_count=b),(0,m.h)(c,"post",s).then((e=>{if("sds_inventory"===X){let e=1;switch(g.Uq[G]){case 2:e=500;break;case 4:e=1e3;break;case 6:e=1500}(0,u.CR)("fp9RCPeS9KkDEOyx5uED")}ve(!1),re(!0),e.login_token_link&&(window.location.href=e.login_token_link)})).catch((e=>{ve(!1);let t="";if("AUTHENTICATION_SIGNUP_EMAIL_ADDRESS_HAS_ALREADY"===e.error_code)return t=Z("value_already_exist",{value:s.email}),void q(a.createElement(p.default,{title:Z("Error"),content:t,onConfirm:()=>{window.location.href=`${g.rB}/login?lang=${K}&email=${I}`},onCancel:()=>{q(null)}}));t||void 0===e.error_message||(t=e.error_message.errors.join(", ")),t||"string"!=typeof e||(t=e),q(a.createElement(p.default,{title:Z("Error"),content:t,onConfirm:()=>q(null),onCancel:()=>q(null)}))}))};return le?a.createElement(a.Fragment,null,a.createElement(i.Z,{centered:!0,show:n,onHide:be,backdrop:"static"},a.createElement(i.Z.Header,{className:"signup-modal-success-header",closeButton:!0}),a.createElement("div",{className:"signup-modal-container signup-modal-success"},a.createElement(f.LazyLoadImage,{alt:"logo",height:167,src:"/images/logo/logo-full-yellow-light.svg",width:500}),a.createElement("div",{className:"signup-modal-title"},Z("signUpModal.AlmostDone")),a.createElement("div",{className:"signup-modal-sub-title"},Z("signUpModal.YourAccountIsAlmostReady")," ",h?h.toLowerCase():I.toLowerCase()))),j):null!=h||z?j||a.createElement(i.Z,{centered:!0,show:n,onHide:be,backdrop:"static"},a.createElement(i.Z.Header,{className:"signup-modal-success-header",closeButton:!0}),a.createElement("div",{className:"signup-modal-container"},w?null:a.createElement(a.Fragment,null,a.createElement("div",{className:"signup-modal-title"},Z("signUpModal.SetupYourAccount")),a.createElement("div",{className:"signup-modal-sub-title"},Z("signUpModal.FillInYourProfileDetails"))),a.createElement(r.Z,{onSubmit:Ne},a.createElement(r.Z.Label,{className:"signup-modal-label"}," ",Z("signUpModal.FullName"),"*"," "),a.createElement(E.Z,{placeHolder:Z("signUpModal.EnterYourFullName"),type:"text",value:V,onChange:e=>{D(e)},errorText:ce,inputClass:"signup-modal-input",containerClass:"signup-modal-input-container",maxLength:100}),a.createElement(r.Z.Label,{className:"signup-modal-label"}," ",Z("signUpModal.PhoneNumber"),"*"," "),a.createElement(E.Z,{placeHolder:Z("signUpModal.EnterYourPhoneNumber"),type:"text",value:P,onChange:e=>{O(e)},errorText:me,inputClass:"signup-modal-input",containerClass:"signup-modal-input-container",maxLength:50}),a.createElement(r.Z.Label,{className:"signup-modal-label"}," ",Z("signUpModal.CompanyName"),"*"," "),a.createElement(E.Z,{placeHolder:Z("signUpModal.EnterYourCompanyName"),type:"text",value:A,onChange:e=>{R(e)},errorText:pe,inputClass:"signup-modal-input",containerClass:"signup-modal-input-container",maxLength:100}),S?a.createElement(a.Fragment,null,a.createElement(r.Z.Label,{className:"signup-modal-label"}," ",Z("signUpModal.CompanyWebsite")," "),a.createElement(E.Z,{placeHolder:Z("signUpModal.EnterYourCompanyWebsite"),type:"text",value:H,onChange:e=>{B(e)},errorText:ge,inputClass:"signup-modal-input",containerClass:"signup-modal-input-container",maxLength:100})):null,w?a.createElement("div",{className:"signup-modal-input-container signup-modal-input signup-modal-agreement",dangerouslySetInnerHTML:{__html:Z("signUpModal.ByContinuingYouAgree")}}):a.createElement("div",{className:"signup-modal-input-container signup-modal-input signup-modal-agreement",dangerouslySetInnerHTML:{__html:Z("signUpModal.BySigningUpYouAgreeTo")}}),fe?a.createElement(o.Z,{disabled:!0,type:"submit",className:"signup-modal-continue-button"},Z(w?"signUpModal.Continue":"signUpModal.CreateAccount"),a.createElement(c.default,{style:{width:16,height:16,marginLeft:10},animation:"border"})):a.createElement(o.Z,{type:"submit",className:"signup-modal-continue-button"},Z(w?"signUpModal.Continue":"signUpModal.CreateAccount")),null==h?a.createElement(o.Z,{onClick:()=>{W(!1)},className:"signup-modal-back-button"},Z("Back")):null))):a.createElement(a.Fragment,null,a.createElement(i.Z,{centered:!0,show:n,onHide:be,backdrop:"static"},a.createElement(i.Z.Header,{className:"signup-modal-success-header trung",closeButton:!0}),a.createElement("div",{className:"signup-modal-container"},a.createElement("div",{className:"signup-modal-title"},Z("signUpModal.CreateAccount")),a.createElement("div",{className:"signup-modal-sub-title"},Z("signUpModal.LetGetStartedWithAFew")),a.createElement(r.Z,{onSubmit:e=>{e.preventDefault(),0!=(0,u.gK)(I).length?(0,u.oH)(I)?(oe(null),W(!0)):oe(Z("EmailIsInvalid")):oe(Z("EmailCanNotBeEmpty"))}},a.createElement(r.Z.Label,{className:"signup-modal-label"}," ",Z("signUpModal.EnterEmail"),"*"," "),a.createElement(E.Z,{placeHolder:Z("signUpModal.name@company.com"),type:"text",value:I,onChange:e=>{T(e)},errorText:ie,inputClass:"signup-modal-input",containerClass:"signup-modal-input-container",maxLength:100}),a.createElement(o.Z,{type:"submit",className:"signup-modal-continue-button"}," ",Z("signUpModal.CreateAccount")," ")),a.createElement("div",{className:"signup-modal-or"}," ",Z("signUpModal.Or")," "),a.createElement("a",{href:(()=>{if(console.log("isTrialPeriod",he),(0,u.tm)(_)){const e="en"===s.ZP.language?"":"/no";return`${g.Up}?redirect_url=${g.xz+e}${_}%3Fpopup=setup-account%26subscription_plan=${t}${b?"%26sds_count="+b:""}%26service=${N}${y?"%26custom_type="+y:""}%26ref=${C}%26is_trial_period=${he}`}return`${g.Up}?redirect_url=${g.xz}/${L}${_}%3Fpopup=setup-account%26subscription_plan=${t}${b?"%26sds_count="+b:""}%26service=${N}${y?"%26custom_type="+y:""}%26ref=${C}%26is_trial_period=${he}`})(),className:"signup-modal-google-button",title:"google login"},a.createElement("img",{src:"/icons/GoogleLogo.png",alt:"Google Logo Icon"}),Z("signUpModal.ContinueWithGoogle")),a.createElement("div",{className:"signup-modal-footer"},a.createElement("div",null," ",Z("signUpModal.AlreadyHaveAnAccount")," "),a.createElement("a",{href:`${g.rB}/login/?lang=${K}`,title:"Login"}," ",Z("signUpModal.LogIn")," ")))),j)}},7236:function(e,t,n){n.d(t,{N:function(){return _}});var a=n(257),l=n(5019),r=n(7018),i=n(3009),o=n(1220),c=n(3932),s=n(5900),m=n.n(s),u=n(9541),p=n(6594),d=n(1312);const g=()=>{},E=a.forwardRef(((e,t)=>{let{bsPrefix:n,name:a,className:l,checked:r,type:i,onChange:o,value:c,disabled:s,id:E,inputRef:f,...v}=e;return n=(0,u.vE)(n,"btn-check"),(0,d.BX)(d.HY,{children:[(0,d.tZ)("input",{className:n,name:a,type:i,value:c,ref:f,autoComplete:"off",checked:!!r,disabled:!!s,onChange:o||g,id:E}),(0,d.tZ)(p.Z,{...v,ref:t,className:m()(l,s&&"disabled"),type:void 0,role:void 0,as:"label",htmlFor:E})]})}));E.displayName="ToggleButton";var f=E,v=n(4627),h=n(4329),y=n(8304);const b=e=>{let{onChange:t,value:n,sdsNumberRange:l}=e;return a.createElement(c.Z.Group,{className:"sds-number-selector",controlId:"industry"},a.createElement(c.Z.Select,{onChange:e=>{let n=parseInt(e.target.value);t&&t(n)},required:!0,className:"form-input-text",value:n},l.map(((e,t)=>a.createElement("option",{value:e,key:t}," ",(0,v.x6)(e)," SDS")))))},N="eu";var _=e=>{let{ver:t="v6"}=e;const{t:n}=(0,l.$)(),[c,s]=a.useState(!1),[m,u]=a.useState("free"),p={uk:"£",eu:"€",us:"$",no:"kr.",au:"AUD",nz:"NZ$",ca:"CAD",dk:"DKK",se:"SEK"},{country:d}=(0,r.l)(),g=[{name:n("pricingV2.priceSubUnit2"),value:"monthly"},{name:n("pricingV2.priceSubUnit"),value:"annually"}],[E,_]=a.useState("annually"),C="undefined"==typeof window;let S={free:10,basic:100,premium:100,pro:100};if(!C){const e=new URLSearchParams(window.location.search),t=e.get("subscription_plan"),n=e.get("sds_count");t&&n&&(S[t]=n)}const[w,k]=a.useState(S),[x,U]=a.useState({free:0,basic:0,premium:0,pro:0}),M=[100,200,400,600,800,1e3,1500,2e3,4e3,6e3,8e3,1e4,2e4,3e4,4e4,5e4,1e5],[Z,F]=a.useState(null),$=[{order:1,title:n("pricingV2.price1Title"),user:n("pricingV2.price1User"),unit:n("pricingV2.priceUnit1"),isRecommended:!1,feature:[n("pricingV2.price1Feature1"),n("pricingV2.price1Feature3"),n("pricingV2.price1Feature4")],btn:{title:n("pricingV2.btnTitle1"),onClick:()=>{(0,v.CR)("MvOTCMWI45sDEOyx5uED"),s(!0),u("free")}},plan:"free",total:0},{order:2,title:n("pricingV2.price2Title"),user:n("pricingV2.price2User"),unit:n("pricingV2.priceUnit2"),isRecommended:!1,feature:[n("pricingV2.price2Feature2"),n("pricingV2.price2Feature3"),n("pricingV2.price2Feature4"),n("pricingV2.price2Feature5")],btn:{title:n("pricingV2.StartFreeTrial"),onClick:()=>{(0,v.CR)("MvOTCMWI45sDEOyx5uED"),s(!0),u("basic")}},plan:"basic"},{order:3,title:n("pricingV2.price3Title"),user:n("pricingV2.price3User"),unit:n("pricingV2.priceUnit3"),isRecommended:!0,feature:[n("pricingV2.price4Feature2"),n("pricingV2.price4Feature4"),n("pricingV2.price3Feature2"),n("pricingV2.price3Feature3"),n("pricingV2.price3Feature4")],btn:{title:n("pricingV2.StartFreeTrial"),onClick:()=>{(0,v.CR)("MvOTCMWI45sDEOyx5uED"),s(!0),u("premium")}},plan:"premium"},{order:4,title:n("pricingV2.price4Title"),user:n("pricingV2.price4User"),unit:n("pricingV2.priceUnit4"),feature:[n("pricingV2.price4Feature3"),n("pricingV2.price4Feature5"),n("pricingV2.price4Feature6"),n("pricingV2.price3Feature5")],btn:{title:n("pricingV2.StartFreeTrial"),onClick:()=>{(0,v.CR)("MvOTCMWI45sDEOyx5uED"),s(!0),u("pro")}},plan:"pro"}],L={us:"US$",uk:"£",no:"NOK",eu:"€",nz:"NZ$",ca:"CAD",au:"AUD",dk:"DKK",se:"SEK"},I=(e,t)=>{let n=e.filter((e=>e.subscription_plan===t)),a={};for(let l in L){let e,t=n.find((e=>e.currency.sign===L[l])),r={},i=parseFloat(t.price_annual)/12,o=parseFloat(t.price_per_sds);for(let n=0;n<M.length;n++){let a=M[n],l=0;a<600&&(l=0),a>=600&&M[n]<1e3&&(l=parseFloat(t.discount_06_1k)),a>=1e3&&a<2e3&&(l=parseFloat(t.discount_1k_2k)),a>=2e3&&a<1e4&&(l=parseFloat(t.discount_2k_10k)),a>=1e4&&(l=parseFloat(t.discount_10k));let c=0,s=0;e?(c=o*(1-e.discount),s=(c*(a-e.number)+12*e.annually_total)/12):(c=o,s=i);let m=1.2*parseFloat(s.toFixed());e={discount:l,price_per_sds:c,annually_total:s,number:a},r[a]={discount:l,annually_total:s.toFixed(),monthly_total:m.toFixed()}}a[l]={ranges:r,price_annual:i,price_per_sds:t.price_per_sds}}return a},T=()=>{(0,h.h)("https://admin55.sdsmanager.com/api/subscriptions/pricinglist/","get").then((e=>{let t={basic:{},premium:{},pro:{}};t.basic=I(e,y.Uq.basic),t.premium=I(e,y.Uq.premium),t.pro=I(e,y.Uq.pro);const n=new Date;let a=n.getMonth()+1,l=a<10?`0${a}`:a;window.localStorage.setItem("DATA_PLAN_SOURCE",JSON.stringify({ttl:n.getFullYear()+"-"+l+"-"+n.getDate(),data:t})),F(t)})).catch((e=>{console.log("err",e)}))};a.useEffect((()=>{if(C)return;const e=new URLSearchParams(window.location.search),t=e.get("popup"),n=e.get("subscription_plan"),a=e.get("ref");n&&u(n),"setup-account"===t&&"pricing"===a&&s(!0);let l=window.localStorage.getItem("DATA_PLAN_SOURCE");if(l){const e=JSON.parse(l);let t=e.ttl;t=new Date(t),t.setHours(0,0,0,0);let n=new Date;return n.setHours(0,0,0,0),t<n?void T():void F(e.data)}T()}),[]),a.useEffect((()=>{Z&&(()=>{let e={...x};for(let t of Object.keys(e)){if("free"===t)continue;let n=V(t,w[t]);e[t]=n,U(e)}})()}),[Z,w]),a.useEffect((()=>{k(S)}),[E]);const V=(e,t)=>{var n;if(!Z)return 0;const a={...Z};let l=(null!==(n=a[e][d])&&void 0!==n?n:a[e].eu).ranges[t];return"annually"===E?parseFloat(l.annually_total):parseFloat(l.monthly_total)};return a.createElement("section",{id:"pricing",className:"pricing-plan-v2  section-padding"},a.createElement("div",{className:"pricing-plan-v2-toggle-container"},g.map(((e,t)=>a.createElement(f,{key:t,id:`radio-${t}`,type:"radio",name:"radio",className:"pricing-plan-v2-toggle-btn",value:e.value,checked:E===e.value,onChange:e=>_(e.currentTarget.value)},e.name)))),a.createElement("div",{className:"container pricing-plan-v2-content"},a.createElement("div",{className:"row text-center"},$.map(((e,t)=>{var l,r;return a.createElement("div",{key:t,className:"col-lg-3 col-md-6 col-sm-12 col-xs-12"},a.createElement("div",{className:`${e.isRecommended?"pricing-plan-v2-card pricing-plan-v2-card-recommended":"pricing-plan-v2-card"}${"no"===d?" pricing-plan-v2-card-no":""}`},e.isRecommended?a.createElement("div",{className:"pricing-plan-v2-recommended-tag"},n("pricingV2.Recommended")):null,a.createElement("div",{className:e.isRecommended?"pricing-plan-v2-recommended-body":""},a.createElement("div",{className:`${e.isRecommended?"pricing-plan-v2-card-header pricing-plan-v2-card-header-recommended":"pricing-plan-v2-card-header"}${"no"===d?" pricing-plan-v2-card-header-no":""}`},a.createElement("div",{className:"pricing-plan-v2-card-title"},e.title),a.createElement("div",{className:"pricing-plan-v2-card-user"},e.user),"free"===e.plan&&a.createElement("p",{className:"sds-number"},"10 SDS"),"free"!==e.plan&&a.createElement(b,{value:w[e.plan],sdsNumberRange:M,onChange:e=>{let t={...w};for(let n in t)"free"!==n&&(t[n]=e);k(t)}}),a.createElement("div",{className:"pricing-plan-v2-card-price"},a.createElement("span",{className:`pricing-plan-v2-card-price-unit unit-${p[d]?d:N}`},null!==(l=p[d])&&void 0!==l?l:p.eu),(0,v.x6)(x[e.plan]),"free"!==e.plan&&a.createElement("div",{className:"pricing-plan-v2-card-month"},a.createElement("span",null,"/mo"))),a.createElement("div",{className:"pricing-plan-v2-card-sub-unit"})),a.createElement("div",{className:"no"===d?"pricing-plan-v2-card-body pricing-plan-v2-card-body-no":"pricing-plan-v2-card-body"},e.order>1?a.createElement("div",{className:"pricing-plan-v2-card-feature-inherit"},n("pricingV2.allFeatureFrom"),' "',$[t-1].title,'" ',a.createElement("img",{alt:"Plus Icon",src:"/icons/Plus.png"})):a.createElement("div",{className:"pricing-plan-v2-card-feature-inherit"},n("pricingV2.Features")),a.createElement("ul",null,e.feature.map(((e,t)=>a.createElement("li",{key:t,className:"pricing-plan-v2-card-feature"},a.createElement("img",{alt:"Bullet Icon",className:"bullet-icon",src:"/icons/Bullet.png"}),e)))),a.createElement("div",{className:"pricing-plan-v2-btn-position"},a.createElement("span",{onClick:e.btn.onClick,className:"pricing-plan-v2-btn"},null===(r=e.btn)||void 0===r?void 0:r.title))))))}))),a.createElement("div",{className:"pricing-plan-v2-vat"}," ",n("pricingV2.PricesShownWithoutVat")," ")),c&&("v5"===t?a.createElement(i.default,{plan:m,show:c,onCancel:()=>{s(!1)},needCompanyWebsite:!1,service:"sds_inventory",custom_type:y.BV.WELCOME_NEW_USER,pageRef:"pricing",redirect_url:"/v5/pricing/",sds_count:w[m]}):a.createElement(o.default,{plan:m,show:c,onCancel:()=>{s(!1)},needCompanyWebsite:!1,service:"sds_inventory",custom_type:y.BV.WELCOME_NEW_USER,pageRef:"pricing",redirect_url:"/pricing/",sds_count:w[m]})))}}}]);