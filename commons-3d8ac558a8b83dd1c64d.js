(self.webpackChunksds_archive_website=self.webpackChunksds_archive_website||[]).push([[351],{7408:function(e,t,r){"use strict";var s=r(5900),a=r.n(s),n=r(257),i=r(9541),o=r(1312);const c=n.forwardRef(((e,t)=>{const[{className:r,...s},{as:n="div",bsPrefix:c,spans:u}]=function(e){let{as:t,bsPrefix:r,className:s,...n}=e;r=(0,i.vE)(r,"col");const o=(0,i.pi)(),c=(0,i.zG)(),u=[],p=[];return o.forEach((e=>{const t=n[e];let s,a,i;delete n[e],"object"==typeof t&&null!=t?({span:s,offset:a,order:i}=t):s=t;const o=e!==c?`-${e}`:"";s&&u.push(!0===s?`${r}${o}`:`${r}${o}-${s}`),null!=i&&p.push(`order${o}-${i}`),null!=a&&p.push(`offset${o}-${a}`)})),[{...n,className:a()(s,...u,...p)},{as:t,bsPrefix:r,spans:u}]}(e);return(0,o.tZ)(n,{...s,ref:t,className:a()(r,!u.length&&c)})}));c.displayName="Col",t.Z=c},7427:function(e,t,r){"use strict";const s=r(257).createContext(null);s.displayName="InputGroupContext",t.Z=s},4070:function(e){e.exports=function e(t,r,s){function a(i,o){if(!r[i]){if(!t[i]){if(n)return n(i,!0);var c=new Error("Cannot find module '"+i+"'");throw c.code="MODULE_NOT_FOUND",c}var u=r[i]={exports:{}};t[i][0].call(u.exports,(function(e){var r=t[i][1][e];return a(r||e)}),u,u.exports,e,t,r,s)}return r[i].exports}for(var n=void 0,i=0;i<s.length;i++)a(s[i]);return a}({1:[function(e,t,r){"use strict";var s=e("./init"),a={init:function(e){this.get=s(e),e&&e.callback&&"function"==typeof e.callback&&e.callback(this.get)}};t.exports=a},{"./init":6}],2:[function(e,t,r){"use strict";var s=e("./terms"),a=e("./helpers/utils"),n={containers:{current:"sbjs_current",current_extra:"sbjs_current_add",first:"sbjs_first",first_extra:"sbjs_first_add",session:"sbjs_session",udata:"sbjs_udata",promocode:"sbjs_promo"},service:{migrations:"sbjs_migrations"},delimiter:"|||",aliases:{main:{type:"typ",source:"src",medium:"mdm",campaign:"cmp",content:"cnt",term:"trm"},extra:{fire_date:"fd",entrance_point:"ep",referer:"rf"},session:{pages_seen:"pgs",current_page:"cpg"},udata:{visits:"vst",ip:"uip",agent:"uag"},promo:"code"},pack:{main:function(e){return n.aliases.main.type+"="+e.type+n.delimiter+n.aliases.main.source+"="+e.source+n.delimiter+n.aliases.main.medium+"="+e.medium+n.delimiter+n.aliases.main.campaign+"="+e.campaign+n.delimiter+n.aliases.main.content+"="+e.content+n.delimiter+n.aliases.main.term+"="+e.term},extra:function(e){return n.aliases.extra.fire_date+"="+a.setDate(new Date,e)+n.delimiter+n.aliases.extra.entrance_point+"="+document.location.href+n.delimiter+n.aliases.extra.referer+"="+(document.referrer||s.none)},user:function(e,t){return n.aliases.udata.visits+"="+e+n.delimiter+n.aliases.udata.ip+"="+t+n.delimiter+n.aliases.udata.agent+"="+navigator.userAgent},session:function(e){return n.aliases.session.pages_seen+"="+e+n.delimiter+n.aliases.session.current_page+"="+document.location.href},promo:function(e){return n.aliases.promo+"="+a.setLeadingZeroToInt(a.randomInt(e.min,e.max),e.max.toString().length)}}};t.exports=n},{"./helpers/utils":5,"./terms":9}],3:[function(e,t,r){"use strict";var s=e("../data").delimiter;t.exports={encodeData:function(e){return encodeURIComponent(e).replace(/\!/g,"%21").replace(/\~/g,"%7E").replace(/\*/g,"%2A").replace(/\'/g,"%27").replace(/\(/g,"%28").replace(/\)/g,"%29")},decodeData:function(e){try{return decodeURIComponent(e).replace(/\%21/g,"!").replace(/\%7E/g,"~").replace(/\%2A/g,"*").replace(/\%27/g,"'").replace(/\%28/g,"(").replace(/\%29/g,")")}catch(t){try{return unescape(e)}catch(r){return""}}},set:function(e,t,r,s,a){var n,i;if(r){var o=new Date;o.setTime(o.getTime()+60*r*1e3),n="; expires="+o.toGMTString()}else n="";i=s&&!a?";domain=."+s:"",document.cookie=this.encodeData(e)+"="+this.encodeData(t)+n+i+"; path=/"},get:function(e){for(var t=this.encodeData(e)+"=",r=document.cookie.split(";"),s=0;s<r.length;s++){for(var a=r[s];" "===a.charAt(0);)a=a.substring(1,a.length);if(0===a.indexOf(t))return this.decodeData(a.substring(t.length,a.length))}return null},destroy:function(e,t,r){this.set(e,"",-1,t,r)},parse:function(e){var t=[],r={};if("string"==typeof e)t.push(e);else for(var a in e)e.hasOwnProperty(a)&&t.push(e[a]);for(var n=0;n<t.length;n++){var i;r[this.unsbjs(t[n])]={},i=this.get(t[n])?this.get(t[n]).split(s):[];for(var o=0;o<i.length;o++){var c=i[o].split("="),u=c.splice(0,1);u.push(c.join("=")),r[this.unsbjs(t[n])][u[0]]=this.decodeData(u[1])}}return r},unsbjs:function(e){return e.replace("sbjs_","")}}},{"../data":2}],4:[function(e,t,r){"use strict";t.exports={parse:function(e){for(var t=this.parseOptions,r=t.parser[t.strictMode?"strict":"loose"].exec(e),s={},a=14;a--;)s[t.key[a]]=r[a]||"";return s[t.q.name]={},s[t.key[12]].replace(t.q.parser,(function(e,r,a){r&&(s[t.q.name][r]=a)})),s},parseOptions:{strictMode:!1,key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}},getParam:function(e){for(var t={},r=(e||window.location.search.substring(1)).split("&"),s=0;s<r.length;s++){var a=r[s].split("=");if(void 0===t[a[0]])t[a[0]]=a[1];else if("string"==typeof t[a[0]]){var n=[t[a[0]],a[1]];t[a[0]]=n}else t[a[0]].push(a[1])}return t},getHost:function(e){return this.parse(e).host.replace("www.","")}}},{}],5:[function(e,t,r){"use strict";t.exports={escapeRegexp:function(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},setDate:function(e,t){var r=e.getTimezoneOffset()/60,s=e.getHours(),a=t||0===t?t:-r;return e.setHours(s+r+a),e.getFullYear()+"-"+this.setLeadingZeroToInt(e.getMonth()+1,2)+"-"+this.setLeadingZeroToInt(e.getDate(),2)+" "+this.setLeadingZeroToInt(e.getHours(),2)+":"+this.setLeadingZeroToInt(e.getMinutes(),2)+":"+this.setLeadingZeroToInt(e.getSeconds(),2)},setLeadingZeroToInt:function(e,t){for(var r=e+"";r.length<t;)r="0"+r;return r},randomInt:function(e,t){return Math.floor(Math.random()*(t-e+1))+e}}},{}],6:[function(e,t,r){"use strict";var s=e("./data"),a=e("./terms"),n=e("./helpers/cookies"),i=e("./helpers/uri"),o=e("./helpers/utils"),c=e("./params"),u=e("./migrations");t.exports=function(e){var t,r,p,l,f,m,g,d,h,v=c.fetch(e),y=i.getParam(),_=v.domain.host,x=v.domain.isolate,b=v.lifetime;function k(){var e;if(void 0!==y.utm_source||void 0!==y.utm_medium||void 0!==y.utm_campaign||void 0!==y.utm_content||void 0!==y.utm_term||void 0!==y.gclid||void 0!==y.yclid||void 0!==y[v.campaign_param])E(),e=w(a.traffic.utm);else if(q(a.traffic.organic))E(),e=w(a.traffic.organic);else if(!n.get(s.containers.session)&&q(a.traffic.referral))E(),e=w(a.traffic.referral);else{if(n.get(s.containers.first)||n.get(s.containers.current))return n.get(s.containers.current);E(),e=w(a.traffic.typein)}return e}function w(e){switch(e){case a.traffic.utm:t=a.traffic.utm,r=void 0!==y.utm_source?y.utm_source:void 0!==y.gclid?"google":void 0!==y.yclid?"yandex":a.none,p=void 0!==y.utm_medium?y.utm_medium:void 0!==y.gclid||void 0!==y.yclid?"cpc":a.none,l=void 0!==y.utm_campaign?y.utm_campaign:void 0!==y[v.campaign_param]?y[v.campaign_param]:void 0!==y.gclid?"google_cpc":void 0!==y.yclid?"yandex_cpc":a.none,f=y.utm_content||a.none,m=I()||a.none;break;case a.traffic.organic:t=a.traffic.organic,r=r||i.getHost(document.referrer),p=a.referer.organic,l=a.none,f=a.none,m=a.none;break;case a.traffic.referral:t=a.traffic.referral,r=r||i.getHost(document.referrer),p=p||a.referer.referral,l=a.none,f=i.parse(document.referrer).path,m=a.none;break;case a.traffic.typein:t=a.traffic.typein,r=v.typein_attributes.source,p=v.typein_attributes.medium,l=a.none,f=a.none,m=a.none;break;default:t=a.oops,r=a.oops,p=a.oops,l=a.oops,f=a.oops,m=a.oops}var n={type:t,source:r,medium:p,campaign:l,content:f,term:m};return s.pack.main(n)}function I(){var e=document.referrer;if(y.utm_term)return y.utm_term;if(!(e&&i.parse(e).host&&i.parse(e).host.match(/^(?:.*\.)?yandex\..{2,9}$/i)))return!1;try{return i.getParam(i.parse(document.referrer).query).text}catch(t){return!1}}function q(e){var t=document.referrer;switch(e){case a.traffic.organic:return!!t&&$(t)&&j(t);case a.traffic.referral:return!!t&&$(t)&&R(t);default:return!1}}function $(e){if(v.domain){if(x)return i.getHost(e)!==i.getHost(_);var t=new RegExp("^(?:.*\\.)?"+o.escapeRegexp(_)+"$","i");return!i.getHost(e).match(t)}return i.getHost(e)!==i.getHost(document.location.href)}function j(e){var t="yandex",s="text",a="google",n=new RegExp("^(?:.*\\.)?"+o.escapeRegexp(t)+"\\..{2,9}$"),c=new RegExp(".*"+o.escapeRegexp(s)+"=.*"),u=new RegExp("^(?:www\\.)?"+o.escapeRegexp(a)+"\\..{2,9}$");if(i.parse(e).query&&i.parse(e).host.match(n)&&i.parse(e).query.match(c))return r=t,!0;if(i.parse(e).host.match(u))return r=a,!0;if(!i.parse(e).query)return!1;for(var p=0;p<v.organics.length;p++){if(i.parse(e).host.match(new RegExp("^(?:.*\\.)?"+o.escapeRegexp(v.organics[p].host)+"$","i"))&&i.parse(e).query.match(new RegExp(".*"+o.escapeRegexp(v.organics[p].param)+"=.*","i")))return r=v.organics[p].display||v.organics[p].host,!0;if(p+1===v.organics.length)return!1}}function R(e){if(!(v.referrals.length>0))return r=i.getHost(e),!0;for(var t=0;t<v.referrals.length;t++){if(i.parse(e).host.match(new RegExp("^(?:.*\\.)?"+o.escapeRegexp(v.referrals[t].host)+"$","i")))return r=v.referrals[t].display||v.referrals[t].host,p=v.referrals[t].medium||a.referer.referral,!0;if(t+1===v.referrals.length)return r=i.getHost(e),!0}}function E(){n.set(s.containers.current_extra,s.pack.extra(v.timezone_offset),b,_,x),n.get(s.containers.first_extra)||n.set(s.containers.first_extra,s.pack.extra(v.timezone_offset),b,_,x)}return u.go(b,_,x),n.set(s.containers.current,k(),b,_,x),n.get(s.containers.first)||n.set(s.containers.first,n.get(s.containers.current),b,_,x),n.get(s.containers.udata)?(g=parseInt(n.parse(s.containers.udata)[n.unsbjs(s.containers.udata)][s.aliases.udata.visits])||1,g=n.get(s.containers.session)?g:g+1,d=s.pack.user(g,v.user_ip)):(g=1,d=s.pack.user(g,v.user_ip)),n.set(s.containers.udata,d,b,_,x),n.get(s.containers.session)?(h=parseInt(n.parse(s.containers.session)[n.unsbjs(s.containers.session)][s.aliases.session.pages_seen])||1,h+=1):h=1,n.set(s.containers.session,s.pack.session(h),v.session_length,_,x),v.promocode&&!n.get(s.containers.promocode)&&n.set(s.containers.promocode,s.pack.promo(v.promocode),b,_,x),n.parse(s.containers)}},{"./data":2,"./helpers/cookies":3,"./helpers/uri":4,"./helpers/utils":5,"./migrations":7,"./params":8,"./terms":9}],7:[function(e,t,r){"use strict";var s=e("./data"),a=e("./helpers/cookies");t.exports={go:function(e,t,r){var n,i=this.migrations,o={l:e,d:t,i:r};if(a.get(s.containers.first)||a.get(s.service.migrations)){if(!a.get(s.service.migrations))for(n=0;n<i.length;n++)i[n].go(i[n].id,o)}else{var c=[];for(n=0;n<i.length;n++)c.push(i[n].id);var u="";for(n=0;n<c.length;n++)u+=c[n]+"=1",n<c.length-1&&(u+=s.delimiter);a.set(s.service.migrations,u,o.l,o.d,o.i)}},migrations:[{id:"1418474375998",version:"1.0.0-beta",go:function(e,t){var r=e+"=1",n=e+"=0",i=function(e,t,r){return t||r?e:s.delimiter};try{var o=[];for(var c in s.containers)s.containers.hasOwnProperty(c)&&o.push(s.containers[c]);for(var u=0;u<o.length;u++)if(a.get(o[u])){var p=a.get(o[u]).replace(/(\|)?\|(\|)?/g,i);a.destroy(o[u],t.d,t.i),a.destroy(o[u],t.d,!t.i),a.set(o[u],p,t.l,t.d,t.i)}a.get(s.containers.session)&&a.set(s.containers.session,s.pack.session(0),t.l,t.d,t.i),a.set(s.service.migrations,r,t.l,t.d,t.i)}catch(l){a.set(s.service.migrations,n,t.l,t.d,t.i)}}}]}},{"./data":2,"./helpers/cookies":3}],8:[function(e,t,r){"use strict";var s=e("./terms"),a=e("./helpers/uri");t.exports={fetch:function(e){var t=e||{},r={};if(r.lifetime=this.validate.checkFloat(t.lifetime)||6,r.lifetime=parseInt(30*r.lifetime*24*60),r.session_length=this.validate.checkInt(t.session_length)||30,r.timezone_offset=this.validate.checkInt(t.timezone_offset),r.campaign_param=t.campaign_param||!1,r.user_ip=t.user_ip||s.none,t.promocode?(r.promocode={},r.promocode.min=parseInt(t.promocode.min)||1e5,r.promocode.max=parseInt(t.promocode.max)||999999):r.promocode=!1,t.typein_attributes&&t.typein_attributes.source&&t.typein_attributes.medium?(r.typein_attributes={},r.typein_attributes.source=t.typein_attributes.source,r.typein_attributes.medium=t.typein_attributes.medium):r.typein_attributes={source:"(direct)",medium:"(none)"},t.domain&&this.validate.isString(t.domain)?r.domain={host:t.domain,isolate:!1}:t.domain&&t.domain.host?r.domain=t.domain:r.domain={host:a.getHost(document.location.hostname),isolate:!1},r.referrals=[],t.referrals&&t.referrals.length>0)for(var n=0;n<t.referrals.length;n++)t.referrals[n].host&&r.referrals.push(t.referrals[n]);if(r.organics=[],t.organics&&t.organics.length>0)for(var i=0;i<t.organics.length;i++)t.organics[i].host&&t.organics[i].param&&r.organics.push(t.organics[i]);return r.organics.push({host:"bing.com",param:"q",display:"bing"}),r.organics.push({host:"yahoo.com",param:"p",display:"yahoo"}),r.organics.push({host:"about.com",param:"q",display:"about"}),r.organics.push({host:"aol.com",param:"q",display:"aol"}),r.organics.push({host:"ask.com",param:"q",display:"ask"}),r.organics.push({host:"globososo.com",param:"q",display:"globo"}),r.organics.push({host:"go.mail.ru",param:"q",display:"go.mail.ru"}),r.organics.push({host:"rambler.ru",param:"query",display:"rambler"}),r.organics.push({host:"tut.by",param:"query",display:"tut.by"}),r.referrals.push({host:"t.co",display:"twitter.com"}),r.referrals.push({host:"plus.url.google.com",display:"plus.google.com"}),r},validate:{checkFloat:function(e){return!(!e||!this.isNumeric(parseFloat(e)))&&parseFloat(e)},checkInt:function(e){return!(!e||!this.isNumeric(parseInt(e)))&&parseInt(e)},isNumeric:function(e){return!isNaN(e)},isString:function(e){return"[object String]"===Object.prototype.toString.call(e)}}}},{"./helpers/uri":4,"./terms":9}],9:[function(e,t,r){"use strict";t.exports={traffic:{utm:"utm",organic:"organic",referral:"referral",typein:"typein"},referer:{referral:"referral",organic:"organic",social:"social"},none:"(none)",oops:"(Houston, we have a problem)"}},{}]},{},[1])(1)},9874:function(e,t,r){"use strict";var s=r(257);t.Z=e=>{let{children:t}=e;return"undefined"==typeof window?s.createElement(s.Fragment,null,t):s.createElement(s.Suspense,{fallback:s.createElement("div",null,"loading...")},t)}},2473:function(e){"use strict";var t=function(){};e.exports=t}}]);
//# sourceMappingURL=commons-3d8ac558a8b83dd1c64d.js.map