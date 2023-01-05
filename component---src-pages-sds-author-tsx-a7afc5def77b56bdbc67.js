"use strict";(self.webpackChunksds_archive_website=self.webpackChunksds_archive_website||[]).push([[3811],{1994:function(e,t,a){var l=a(257),n=a(7408),r=a(3639),o=a(994),c=a(6679),s=a(5019),i=a(2216),m=a(370),d=a(2850),u=a(1514),g=a(2986),h=a(4070),E=a.n(h);const p=(0,l.lazy)((()=>a.e(2885).then(a.t.bind(a,3720,23)))),b=e=>{let{links:t,title:a}=e;const{t:n}=(0,s.$)(),r={SdsManager:[{label:n("footer.footerText")}],company:[{label:n("About Us"),url:"/about-us/"},{label:n("Partner Program"),url:"/partner-program/"},{label:n("contactUs"),url:"/contact-us/"}],solution:[{label:n("SdsInventoryManagement"),url:"/"},{label:n("retailers_ecommerce"),url:"/retail-ecommerce/"},{label:n("authoring_creation"),url:"/sds-author/"},{label:n("data_extraction_parsing"),url:"/sds-parser-api/"},{label:n("safety_data_sheet_database"),url:"/search/"}],contact:[{label:n("contactUs"),url:"/contact-us/"},{label:n("footer.footerCompany")},{label:n("footer.footerAddress")}]};return l.createElement("div",{className:"col-inner"},l.createElement("p",{className:"col-heading"},a),l.createElement("ul",null,r[t].map(((e,t)=>e.url?l.createElement("li",{key:t},l.createElement(c.Z,{to:e.url,title:e.label},e.label)):l.createElement("li",{key:t}," ",e.label," ")))))};t.Z=()=>{const{t:e}=(0,s.$)(),[t,a]=l.useState(!1),{country:h}=(0,u.l)();return l.useEffect((()=>{var e;(a(!0),(0,m.yF)())||(fetch(g.xz+"/us/",{mode:"cors"}).then((function(e){const t=e.headers.get("x-country-code");t&&window.localStorage.setItem("x-country-code",(0,m.gK)(t.toLowerCase()))})).catch((()=>{})),E().init(),console.log("Sbjs: ",null===E()||void 0===E()||null===(e=E().get)||void 0===e?void 0:e.current))}),[]),l.createElement("div",{className:"footer-section-v2"},l.createElement(r.Z,null,l.createElement(o.Z,{className:"footer-inner"},l.createElement(n.Z,{xs:12,sm:12,md:4,className:"left-logo-container footer-right-col"},l.createElement("div",{className:"d-flex footer-info"},l.createElement(i.LazyLoadImage,{className:"logo",alt:"logo",height:93,src:"/images/logo/logo-down-yellow-white.svg",width:59}),l.createElement(b,{title:e("SdsMangerAs"),links:"SdsManager"}))),l.createElement(n.Z,{xs:12,sm:12,md:4,className:"footer-right-col"},l.createElement(b,{title:e("Solutions"),links:"solution"})),l.createElement(n.Z,{xs:12,sm:12,md:4,className:"footer-right-col"},l.createElement(b,{title:e("Company"),links:"company"}),l.createElement("div",{className:"col-inner"},l.createElement("p",{className:"col-heading",style:{marginBottom:10,color:"var(--yellow)"}},e("Address")),l.createElement("span",{style:{fontSize:14}},e("footer.footerAddress")),"us"===h?l.createElement("p",{className:"phonenumber-text"},l.createElement(i.LazyLoadImage,{alt:"  phonenumber",height:13,src:"/icons/phone-icon.png",width:13,style:{margin:0,marginRight:"5px"}}),l.createElement("a",{href:"tel:+12523709657",style:{color:"white",textDecoration:"none"}},"+1 252 370 9657")):"no"===h?l.createElement("p",{className:"phonenumber-text"},l.createElement(i.LazyLoadImage,{alt:"  phonenumber",height:13,src:"/icons/phone-icon.png",width:13,style:{margin:0,marginRight:"5px"}}),l.createElement("a",{href:"tel:+4723507478",style:{color:"white",textDecoration:"none"}},"+47 23 50 74 78")):-1!==["uk","eu"].indexOf(h)?l.createElement("p",{className:"phonenumber-text"},l.createElement(i.LazyLoadImage,{alt:"phonenumber",height:13,src:"/icons/phone-icon.png",width:13,style:{margin:0,marginRight:"5px"}}),l.createElement("a",{href:"tel:+442039361240",style:{color:"white",textDecoration:"none"}},"+44 20 3936 1240")):null)))),l.createElement("div",{className:"bottom-footer"},l.createElement(r.Z,null,l.createElement("div",{className:"bottom-footer-inner"},l.createElement("div",{className:"col-left"},l.createElement(c.Z,{className:"link-item",to:"/privacy-policy/",title:"Privacy Policy"}," ",e("Privacy Policy")," "),l.createElement(c.Z,{className:"link-item",to:"/terms-and-conditions/",title:"Terms and Conditions"}," ",e("Terms and Conditions")," ")),l.createElement("div",{className:"social-link"},l.createElement("a",{target:"_blank",href:"https://www.facebook.com/sdsmanager/",title:"SDS manager facebook"},l.createElement(i.LazyLoadImage,{alt:"facebook",height:50,src:"/icons/facebook-icon.webp",width:50})),l.createElement("a",{target:"_blank",href:"https://twitter.com/Sds_Manager_com",title:"SDS manager twitter"},l.createElement(i.LazyLoadImage,{alt:"twitter",height:50,src:"/icons/twitter-icon.webp",width:50})),l.createElement("a",{target:"_blank",href:"https://www.linkedin.com/company/sds-manager",title:"SDS manager linkedin"},l.createElement(i.LazyLoadImage,{alt:"linkedin",height:50,src:"/icons/linkedin-icon.webp",width:50}))),l.createElement("div",null,l.createElement("span",{className:"copyright-text"},"©2022 SDS Manager | ",e("All right reserved")))))),t&&!(0,m.tq)()&&l.createElement(d.Z,null,l.createElement("div",{className:"cookie-consent"},l.createElement(p,{location:"bottom",buttonText:e("Accept"),cookieName:"sdsManagerCookies",style:{background:"var(--dark-grey)",fontSize:"13px"},buttonStyle:{background:"var(--yellow)",color:"var(--black)",fontSize:"13px",fontWeight:500,marginLeft:15,marginBottom:15}},e("Accept Cookies")))))}},4842:function(e,t,a){var l=a(257),n=a(5414),r=a(3963),o=a(1994),c=a(1648);t.Z=e=>{let{children:t,version:a="v6"}=e;const s={title:"SdsManager",description:"Safety Data Sheet management for Users of chemicals, Retailers, Webshops and Manufacturers",keywords:"SdsManager, Safety Data Sheet management"};return l.createElement(c.Z,null,l.createElement(n.q,{titleTemplate:`%s - ${s.title}`,defaultTitle:s.title,meta:[{name:"description",content:s.description},{name:"keywords",content:s.keywords}]}),l.createElement(r.Z,{version:a}),l.createElement("main",null,t),l.createElement(o.Z,null))}},9422:function(e,t,a){a.r(t);var l=a(257),n=a(4001),r=a(4842),o=a(5019),c=a(3639),s=a(6679),i=a(7365);t.default=e=>{const{t:t}=(0,o.$)(),[a,m]=l.useState(null);let d=e.pageContext.dir;return["us","no"].includes(d)||(d=i.nr),l.createElement(r.Z,null,l.createElement(n.Z,{title:t("seo.sdsAuthor.title"),canonicalUrl:d+e.pageContext.originalPath}),l.createElement("div",{className:"unavailable-page"},l.createElement(c.Z,null,l.createElement("div",{className:"unavailable-page-card"},l.createElement("h1",null,t("unavailable.Sorry")),l.createElement("h2",{style:{marginTop:8}},t("unavailable.ThisProductIsCurrently")),l.createElement("h3",null,t("unavailable.PleaseSubmitYourEmail")),l.createElement("div",{className:"unavailable-page-form"},l.createElement(s.Z,{to:"/contact-us/",className:"unavailable-page-btn"},t("contactUs"))))),a))}}}]);