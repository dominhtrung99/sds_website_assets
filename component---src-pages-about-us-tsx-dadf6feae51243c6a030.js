"use strict";(self.webpackChunksds_archive_website=self.webpackChunksds_archive_website||[]).push([[158,413],{4653:function(e,t,a){var n=a(5900),l=a.n(n),r=a(257),o=a(5697),c=a.n(o),s=a(1312);const i={type:c().string,tooltip:c().bool,as:c().elementType},m=r.forwardRef(((e,t)=>{let{as:a="div",className:n,type:r="valid",tooltip:o=!1,...c}=e;return(0,s.tZ)(a,{...c,ref:t,className:l()(n,`${r}-${o?"tooltip":"feedback"}`)})}));m.displayName="Feedback",m.propTypes=i,t.Z=m},4709:function(e,t,a){var n=a(5900),l=a.n(n),r=a(257),o=a(8788),c=a(9541),s=a(1312);const i=r.forwardRef(((e,t)=>{let{id:a,bsPrefix:n,className:i,type:m="checkbox",isValid:d=!1,isInvalid:u=!1,as:p="input",...g}=e;const{controlId:b}=(0,r.useContext)(o.Z);return n=(0,c.vE)(n,"form-check-input"),(0,s.tZ)(p,{...g,ref:t,type:m,id:a||b,className:l()(i,n,d&&"is-valid",u&&"is-invalid")})}));i.displayName="FormCheckInput",t.Z=i},8788:function(e,t,a){const n=a(257).createContext({});t.Z=n},1760:function(e,t,a){var n=a(5900),l=a.n(n),r=a(257),o=(a(2473),a(4653)),c=a(8788),s=a(9541),i=a(1312);const m=r.forwardRef(((e,t)=>{let{bsPrefix:a,type:n,size:o,htmlSize:m,id:d,className:u,isValid:p=!1,isInvalid:g=!1,plaintext:b,readOnly:h,as:E="input",...f}=e;const{controlId:y}=(0,r.useContext)(c.Z);let v;return a=(0,s.vE)(a,"form-control"),v=b?{[`${a}-plaintext`]:!0}:{[a]:!0,[`${a}-${o}`]:o},(0,i.tZ)(E,{...f,type:n,size:m,ref:t,readOnly:h,id:d||y,className:l()(u,v,p&&"is-valid",g&&"is-invalid","color"===n&&`${a}-color`)})}));m.displayName="FormControl",t.Z=Object.assign(m,{Feedback:o.Z})},6722:function(e,t,a){var n=a(257),l=a(7408),r=a(6187),o=a(994),c=a(2984),s=a(5019),i=a(2216),m=a(4627),d=a(9874),u=a(7018),p=a(8304),g=a(4070),b=a.n(g);const h=(0,n.lazy)((()=>a.e(885).then(a.t.bind(a,3720,23)))),E=e=>{let{links:t,title:a}=e;const{t:l}=(0,s.$)(),r={SdsManager:[{label:l("footer.footerText")}],company:[{label:l("About Us"),url:"/about-us/"},{label:l("Partner Program"),url:"/partner-program/"},{label:l("contactUs"),url:"/contact-us/"}],solution:[{label:l("SdsInventoryManagement"),url:"/"},{label:l("retailers_ecommerce"),url:"/retail-ecommerce/"},{label:l("authoring_creation"),url:"/sds-author/"},{label:l("data_extraction_parsing"),url:"/sds-parser-api/"},{label:l("safety_data_sheet_database"),url:"/search/"}],contact:[{label:l("contactUs"),url:"/contact-us/"},{label:l("footer.footerCompany")},{label:l("footer.footerAddress")}]};return n.createElement("div",{className:"col-inner"},n.createElement("p",{className:"col-heading"},a),n.createElement("ul",null,r[t].map(((e,t)=>e.url?n.createElement("li",{key:t},n.createElement(c.Z,{to:e.url,title:e.label},e.label)):n.createElement("li",{key:t}," ",e.label," ")))))};t.Z=()=>{const{t:e}=(0,s.$)(),[t,a]=n.useState(!1),{country:g}=(0,u.l)();return n.useEffect((()=>{var e;(a(!0),(0,m.yF)())||(fetch(p.xz+"/us/",{mode:"cors"}).then((function(e){const t=e.headers.get("x-country-code");t&&window.localStorage.setItem("x-country-code",(0,m.gK)(t.toLowerCase()))})).catch((()=>{})),b().init(),console.log("Sbjs: ",null===b()||void 0===b()||null===(e=b().get)||void 0===e?void 0:e.current))}),[]),n.createElement("div",{className:"footer-section-v2"},n.createElement(r.Z,null,n.createElement(o.Z,{className:"footer-inner"},n.createElement(l.Z,{xs:12,sm:12,md:4,className:"left-logo-container footer-right-col"},n.createElement("div",{className:"d-flex footer-info"},n.createElement(i.LazyLoadImage,{className:"logo",alt:"logo",height:93,src:"/images/logo/logo-down-yellow-white.svg",width:59}),n.createElement(E,{title:e("SdsMangerAs"),links:"SdsManager"}))),n.createElement(l.Z,{xs:12,sm:12,md:4,className:"footer-right-col"},n.createElement(E,{title:e("Solutions"),links:"solution"})),n.createElement(l.Z,{xs:12,sm:12,md:4,className:"footer-right-col"},n.createElement(E,{title:e("Company"),links:"company"}),n.createElement("div",{className:"col-inner"},n.createElement("p",{className:"col-heading",style:{marginBottom:10,color:"var(--yellow)"}},e("Address")),n.createElement("span",{style:{fontSize:14}},e("footer.footerAddress")),"us"===g?n.createElement("p",{className:"phonenumber-text"},n.createElement(i.LazyLoadImage,{alt:"  phonenumber",height:13,src:"/icons/phone-icon.png",width:13,style:{margin:0,marginRight:"5px"}}),n.createElement("a",{href:"tel:+12523709657",style:{color:"white",textDecoration:"none"}},"+1 252 370 9657")):"no"===g?n.createElement("p",{className:"phonenumber-text"},n.createElement(i.LazyLoadImage,{alt:"  phonenumber",height:13,src:"/icons/phone-icon.png",width:13,style:{margin:0,marginRight:"5px"}}),n.createElement("a",{href:"tel:+4723507478",style:{color:"white",textDecoration:"none"}},"+47 23 50 74 78")):-1!==["uk","eu"].indexOf(g)?n.createElement("p",{className:"phonenumber-text"},n.createElement(i.LazyLoadImage,{alt:"phonenumber",height:13,src:"/icons/phone-icon.png",width:13,style:{margin:0,marginRight:"5px"}}),n.createElement("a",{href:"tel:+442039361240",style:{color:"white",textDecoration:"none"}},"+44 20 3936 1240")):null)))),n.createElement("div",{className:"bottom-footer"},n.createElement(r.Z,null,n.createElement("div",{className:"bottom-footer-inner"},n.createElement("div",{className:"col-left"},n.createElement(c.Z,{className:"link-item",to:"/privacy-policy/",title:"Privacy Policy"}," ",e("Privacy Policy")," "),n.createElement(c.Z,{className:"link-item",to:"/terms-and-conditions/",title:"Terms and Conditions"}," ",e("Terms and Conditions")," ")),n.createElement("div",{className:"social-link"},n.createElement("a",{target:"_blank",href:"https://www.facebook.com/sdsmanager/",title:"SDS manager facebook"},n.createElement(i.LazyLoadImage,{alt:"facebook",height:50,src:"/icons/facebook-icon.webp",width:50})),n.createElement("a",{target:"_blank",href:"https://twitter.com/Sds_Manager_com",title:"SDS manager twitter"},n.createElement(i.LazyLoadImage,{alt:"twitter",height:50,src:"/icons/twitter-icon.webp",width:50})),n.createElement("a",{target:"_blank",href:"https://www.linkedin.com/company/sds-manager",title:"SDS manager linkedin"},n.createElement(i.LazyLoadImage,{alt:"linkedin",height:50,src:"/icons/linkedin-icon.webp",width:50}))),n.createElement("div",null,n.createElement("span",{className:"copyright-text"},"©2022 SDS Manager | ",e("All right reserved")))))),t&&!(0,m.tq)()&&n.createElement(d.Z,null,n.createElement("div",{className:"cookie-consent"},n.createElement(h,{location:"bottom",buttonText:e("Accept"),cookieName:"sdsManagerCookies",style:{background:"var(--dark-grey)",fontSize:"13px"},buttonStyle:{background:"var(--yellow)",color:"var(--black)",fontSize:"13px",fontWeight:500,marginLeft:15,marginBottom:15}},e("Accept Cookies")))))}},6707:function(e,t,a){var n=a(257),l=a(5019),r=a(6187),o=a(5305),c=a(7018),s=a(8304);t.Z=()=>{const{originalPath:e}=(0,c.l)(),{t:t}=(0,l.$)(),[a,i]=n.useState(!1),[m,d]=n.useState(null);return n.useEffect((()=>{if("undefined"==typeof window)return;const e=new URLSearchParams(window.location.search),t=e.get("popup"),a=e.get("subscription_plan"),n=e.get("ref");a&&d(a),"setup-account"===t&&"get-free-access"===n&&i(!0)}),[]),n.createElement(n.Fragment,null,n.createElement("div",{className:"get-free-trial-section overflow-hidden text-center d-flex align-items-center justify-content-center flex-column"},n.createElement(r.Z,{className:"col-sm-12 col-xs-12 mx-auto"},n.createElement("h2",{className:"display-4 get-your-free-trial"},t("Get Your Free Trial Today")),n.createElement("a",{className:"btn yellow-btn",href:"#",onClick:()=>{d("free"),i(!0)}},t("Get Free Access")))),a&&n.createElement(o.XL,{plan:m,show:a,onCancel:()=>{i(!1)},needCompanyWebsite:!1,service:"sds_inventory",custom_type:s.BV.WELCOME_NEW_USER,redirect_url:e,pageRef:"get-free-access"}))}},5818:function(e,t,a){var n=a(257),l=a(5019),r=a(6187);t.Z=e=>{let{headline:t,headlineStyle:a="",title:o,titleStyle:c="",content:s,contentStyle:i="",containerStyle:m="",style:d="",readMoreUrl:u}=e;const{t:p}=(0,l.$)();return n.createElement("div",{className:`page-header-section overflow-hidden text-center d-flex align-items-center justify-content-center flex-column ${d}`},n.createElement(r.Z,{className:`col-md-10 col-xs-12 mx-auto page-header-content ${m}`},n.createElement("p",{className:`lead ${a}`}," ",t," "),n.createElement("h1",{dangerouslySetInnerHTML:{__html:o},className:`page-header-title ${c}`}),n.createElement("div",{dangerouslySetInnerHTML:{__html:s},className:`page-header-text ${i}`}),u&&n.createElement("a",{className:"btn yellow-btn page-header-btn",href:"#"}," ",p("Read More")," ")))}},7825:function(e,t,a){var n=a(257),l=a(5414),r=a(9178),o=a(6722),c=a(1648);t.Z=e=>{let{children:t,version:a="v6"}=e;const s={title:"SdsManager",description:"Safety Data Sheet management for Users of chemicals, Retailers, Webshops and Manufacturers",keywords:"SdsManager, Safety Data Sheet management"};return n.createElement(c.Z,null,n.createElement(l.q,{titleTemplate:`%s - ${s.title}`,defaultTitle:s.title,meta:[{name:"description",content:s.description},{name:"keywords",content:s.keywords}]}),n.createElement(r.Z,{version:a}),n.createElement("main",null,t),n.createElement(o.Z,null))}},9675:function(e,t,a){a.r(t),a.d(t,{default:function(){return E}});var n=a(257),l=a(7700),r=a(5818),o=a(5019);const c=e=>{let{title:t,subtitle:a,text:l}=e;return n.createElement("div",{className:"col-xl-4 col-md-6 col-sm-12 col-12 about-feature-item-box mb-5"},n.createElement("div",{className:"card"},n.createElement("div",{className:"card-body pt-4 pb-4"},n.createElement("div",{className:"text-center"},n.createElement("h2",{className:"purple-color box-title"},t),n.createElement("p",{className:"box-subtitle"},a),n.createElement("p",{className:"card-text box-text"},l)))))};var s=()=>{const{t:e,i18n:t}=(0,o.$)();return n.createElement("div",{className:"about-us-feature-section"},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement(c,{title:e("home.metricsValue1"),subtitle:e("aboutUs.featureCardSubTitle1"),text:e("aboutUs.featureCardText1")}),n.createElement(c,{title:e("home.metricsValue2"),subtitle:e("aboutUs.featureCardSubTitle2"),text:e("aboutUs.featureCardText2")}),n.createElement(c,{title:e("home.metricsValue3"),subtitle:e("aboutUs.featureCardSubTitle3"),text:e("aboutUs.featureCardText3")}))))},i=a(3586),m=a(6187),d=a(4627);var u=()=>{const{t:e}=(0,o.$)(),t=i.ZP.language;return n.createElement("div",{className:"page-description"},n.createElement(m.Z,null,n.createElement("div",{className:"page-heading-inner"},n.createElement("p",{className:"heading-text"}," ",e("aboutUs.aboutDescriptionTitle1")," ")),n.createElement("div",{dangerouslySetInnerHTML:{__html:e("aboutUs.aboutDescriptionText1")}}),n.createElement("div",{className:"text-center image-inner"},n.createElement("img",{src:"/images/about-4.webp",alt:"About Us 4 Image"})),n.createElement("h3",null," ",e("aboutUs.aboutDescriptionTitle2")," "),n.createElement("div",{dangerouslySetInnerHTML:{__html:e("aboutUs.aboutDescriptionText2")}}),n.createElement("h3",null," ",e("aboutUs.aboutDescriptionTitle3")," "),n.createElement("div",{dangerouslySetInnerHTML:{__html:e("aboutUs.aboutDescriptionText3")}}),n.createElement("div",null,n.createElement("p",null,e("aboutUs.aboutDescriptionText4"),n.createElement("span",{onClick:()=>{(0,d.c4)("/partner-program/",t)}}," ",e("Partner Program")," "),e("aboutUs.aboutDescriptionText5"))),n.createElement("div",{className:"text-center image-inner"},n.createElement("img",{src:"/images/about-3.webp",alt:"About Us 3 Image"}))))},p=a(6707),g=a(7825),b=a(6222),h=a(2216);var E=e=>{const{t:t}=(0,o.$)(),a=[n.createElement("script",{type:"application/ld+json",key:"0"},JSON.stringify({"@context":"https://schema.org","@type":"AboutPage",name:"SdsManager -About Us",url:"https://sdsmanager.com"+e.location.pathname}))];let c=e.pageContext.dir;return["en","no","de","nl","pt","fi","pl","el","dk","se","it","fr","es"].includes(c)||(c=b.nr),n.createElement(g.Z,null,n.createElement(l.Z,{title:t("About Us"),microData:a,canonicalUrl:c+e.pageContext.originalPath}),n.createElement("div",{className:"about-us-page"},n.createElement(r.Z,{headline:t("aboutUs.subHeader"),title:t("aboutUs.headerTitle"),content:t("aboutUs.headerContent")}),n.createElement(s,null),n.createElement(u,null),n.createElement(h.LazyLoadComponent,null,n.createElement(p.Z,null))))}}}]);