(function(e){function n(n){for(var r,o,u=n[0],c=n[1],s=n[2],f=0,l=[];f<u.length;f++)o=u[f],a[o]&&l.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(n);while(l.length)l.shift()();return i.push.apply(i,s||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,o=1;o<t.length;o++){var u=t[o];0!==a[u]&&(r=!1)}r&&(i.splice(n--,1),e=c(c.s=t[0]))}return e}var r={},o={app:0},a={app:0},i=[];function u(e){return c.p+"js/"+({}[e]||e)+"."+{50984092:"8cbddf86","1bdb053e":"893bccaf","4b47640d":"21cfc388","17bac6fc":"eee26092","182d7ffe":"0eca4c73","2b335252":"1dca1e23",a14c0a7a:"962eef9e","735a2fb9":"2047be23"}[e]+".js"}function c(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t={"1bdb053e":1,"182d7ffe":1,"2b335252":1,"735a2fb9":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise(function(n,t){for(var r="css/"+({}[e]||e)+"."+{50984092:"31d6cfe0","1bdb053e":"a7a37ecc","4b47640d":"31d6cfe0","17bac6fc":"31d6cfe0","182d7ffe":"a959cd56","2b335252":"78ace4ca",a14c0a7a:"31d6cfe0","735a2fb9":"a5341954"}[e]+".css",o=c.p+r,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var u=a[i],s=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(s===r||s===o))return n()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){u=f[i],s=u.getAttribute("data-href");if(s===r||s===o)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var r=n&&n.target&&n.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.request=r,t(a)},l.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(l)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)n.push(r[2]);else{var i=new Promise(function(n,t){r=a[e]=[n,t]});n.push(r[2]=i);var s,f=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=u(e),s=function(n){l.onerror=l.onload=null,clearTimeout(d);var t=a[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,t[1](i)}a[e]=void 0}};var d=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,f.appendChild(l)}return Promise.all(n)},c.m=e,c.c=r,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)c.d(t,r,function(n){return e[n]}.bind(null,r));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var d=f;i.push([0,"vendor"]),t()})({0:function(e,n,t){e.exports=t("2f39")},"034f":function(e,n,t){"use strict";var r=t("fb1c"),o=t.n(r);o.a},"1cc0":function(e,n){},"1e5d":function(e,n,t){},"2f39":function(e,n,t){"use strict";t.r(n);var r={};t.r(r),t.d(r,"getToken",function(){return ne});var o={};t.r(o),t.d(o,"setUser",function(){return te}),t.d(o,"setIsLogged",function(){return re}),t.d(o,"setToken",function(){return oe}),t.d(o,"setNotification",function(){return ae});var a={};t.r(a),t.d(a,"login",function(){return ie}),t.d(a,"register",function(){return ue});var i={};t.r(i),t.d(i,"setIsOnline",function(){return le});var u={};t.r(u),t.d(u,"setStart",function(){return ve}),t.d(u,"setLimit",function(){return me}),t.d(u,"setNews",function(){return we}),t.d(u,"setOfflineNews",function(){return ye}),t.d(u,"setSingleNew",function(){return Qe}),t.d(u,"setTokenNews",function(){return ke});var c={};t.r(c),t.d(c,"paginatedNews",function(){return Ne}),t.d(c,"allNews",function(){return Te});t("ac6a"),t("a114"),t("d14b"),t("1e5d"),t("7e6d");var s=t("2b0e"),f=t("e84f"),l=t("7051"),d=t("4487"),p=t("2040"),b=t("cf12"),g=t("46a9"),h=t("32a1"),v=t("f30c"),m=t("ce67"),w=t("482e"),y=t("52b5"),Q=t("1180"),k=t("1e55"),N=t("506f"),T=t("b8d9"),S=t("7d43"),L=t("79e9"),P=t("5d8b"),x=t("c563"),O=t("9413"),_=t("5931"),A=t("9541"),j=t("f7bf"),C=t("b70a"),E=t("7646"),B=t("6580"),I=t("3a08"),M=t("dc23"),$=t("3054"),q=t("bc9b"),V=t("1526"),R=t("133b"),z=t("a9a0");s["a"].use(f["a"],{config:{},components:{QLayout:l["a"],QLayoutFooter:d["a"],QLayoutHeader:p["a"],QLayoutDrawer:b["a"],QPageContainer:g["a"],QPage:h["a"],QToolbar:v["a"],QToolbarTitle:m["a"],QBtn:w["a"],QIcon:y["a"],QList:Q["a"],QListHeader:k["a"],QItem:N["a"],QItemMain:T["a"],QItemSide:S["a"],QField:L["a"],QInput:P["a"],QTabs:x["a"],QRouteTab:O["a"],QSelect:_["a"],QItemTile:A["a"],QInfiniteScroll:j["a"],QSpinner:C["a"],QCard:E["a"],QCardTitle:B["a"],QCardMain:I["a"],QCardMedia:M["a"],QCardSeparator:$["a"],QToggle:q["a"]},directives:{Ripple:V["a"]},plugins:{Notify:R["a"],Loading:z["a"]}});var D=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)},F=[];D._withStripped=!0;var H={name:"App"},J=H,U=(t("034f"),t("2877")),G=Object(U["a"])(J,D,F,!1,null,null,null);G.options.__file="App.vue";var K=G.exports,W=t("2f62"),X=t("bfa9"),Y=t("a002"),Z=t.n(Y),ee={user:null,isLogged:!1,token:null,isNotification:!1},ne=function(e){return e.user.token};function te(e,n){e.user=n}function re(e,n){e.isLogged=n}function oe(e,n){e.token=n}function ae(e,n){e.isNotification=n}function ie(e,n){return s["a"].prototype.$axios.post("api/v1/get_login",n)}function ue(e,n){return s["a"].prototype.$axios.post("api/v1/set_user_add",n)}var ce={namespaced:!0,state:ee,getters:r,mutations:o,actions:a},se={version:0,isOnline:!0},fe=t("fd2d");function le(e,n){e.isOnline=n}var de=t("65ee"),pe={namespaced:!0,state:se,getters:fe,mutations:i,actions:de},be={news:[],offlineNews:[],singleNew:{},start:0,limit:1,token:null},ge=t("1cc0"),he=t("2ef0");function ve(e,n){e.start=n}function me(e,n){e.limit=n}function we(e,n){if(0==e.start)e.news=n;else{var t=e.news.concat(n);e.news=Object(he["uniqBy"])(t,function(e){return e.id})}}function ye(e,n){e.offlineNews=n}function Qe(e,n){e.singleNew=n}function ke(e,n){e.token=n}function Ne(e){var n=e.state;return s["a"].prototype.$axios.defaults.headers.common.Authorization="Bearer ".concat(n.token),s["a"].prototype.$axios.get("api/v1/get_news")}function Te(e,n){return s["a"].prototype.$axios.defaults.headers.common.Authorization="Bearer ".concat(n),s["a"].prototype.$axios.get("api/v1/get_news")}var Se={namespaced:!0,state:be,getters:ge,mutations:u,actions:c};s["a"].use(W["a"]);var Le=new X["a"]({storage:Z.a,key:"news-pwa_app"}),Pe=function(){var e=new W["a"].Store({modules:{auth:ce,app:pe,news:Se},plugins:[Le.plugin]});return e},xe=t("8c4f"),Oe=[{path:"/",component:function(){return Promise.all([t.e("50984092"),t.e("2b335252")]).then(t.bind(null,"f241"))},children:[{path:"",component:function(){return t.e("1bdb053e").then(t.bind(null,"8b24"))}},{path:"login",component:function(){return Promise.all([t.e("50984092"),t.e("17bac6fc")]).then(t.bind(null,"013f"))}},{path:"register",component:function(){return Promise.all([t.e("50984092"),t.e("a14c0a7a")]).then(t.bind(null,"56b4"))}},{path:"news",component:function(){return Promise.all([t.e("50984092"),t.e("182d7ffe")]).then(t.bind(null,"4b86"))},meta:{requiresAuth:!0}},{path:"news/:id",name:"news-detail",component:function(){return t.e("735a2fb9").then(t.bind(null,"3db3"))},meta:{requiresAuth:!0}}]}];Oe.push({path:"*",component:function(){return t.e("4b47640d").then(t.bind(null,"e51e"))}});var _e=Oe;s["a"].use(xe["a"]);var Ae=function(e){var n=e.store,t=(e.ssrContext,new xe["a"]({scrollBehavior:function(){return{y:0}},routes:_e,mode:"hash",base:""}));return t.beforeEach(function(e,t,r){var o=e.matched.some(function(e){return e.meta.requiresAuth}),a=n.state.auth.isLogged;if(!o&&a&&"/login"===e.path)return r("/news");setTimeout(function(){o&&!a?r("/login"):r()},2e3)}),t},je=function(){var e="function"===typeof Pe?Pe():Pe,n="function"===typeof Ae?Ae({store:e}):Ae;e.$router=n;var t={el:"#q-app",router:n,store:e,render:function(e){return e(K)}};return{app:t,store:e,router:n}},Ce=t("9483");Object(Ce["a"])("service-worker.js",{ready:function(){console.log("App is being served from cache by a service worker.")},registered:function(e){console.log("Service worker has been registered.")},cached:function(e){console.log("Content has been cached for offline use.")},updatefound:function(e){console.log("New content is downloading.")},updated:function(e){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var Ee=t("a925"),Be={failed:"Action failed",success:"Action was successful"},Ie={"en-us":Be},Me=function(e){var n=e.app,t=e.Vue;t.use(Ee["a"]),n.i18n=new Ee["a"]({locale:"en-us",fallbackLocale:"en-us",messages:Ie})},$e=t("bc3a"),qe=t.n($e),Ve=function(e){var n=e.Vue,t=null;t="https://apirestnews.appspot.com",n.prototype.$axios=qe.a.create({baseURL:t})},Re=t("1dce"),ze=t.n(Re),De=function(e){var n=e.Vue;n.use(ze.a)},Fe=t("fe3c"),He=t.n(Fe),Je=je(),Ue=Je.app,Ge=Je.store,Ke=Je.router;/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&document.addEventListener("DOMContentLoaded",function(){He.a.attach(document.body)},!1),[Me,Ve,De].forEach(function(e){e({app:Ue,router:Ke,store:Ge,Vue:s["a"],ssrContext:null})}),new s["a"](Ue)},"65ee":function(e,n){},"7e6d":function(e,n,t){},fb1c:function(e,n,t){},fd2d:function(e,n){}});