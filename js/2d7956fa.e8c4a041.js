(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d7956fa"],{3959:function(e,t,n){},"4b86":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",[n("q-infinite-scroll",{ref:"infiniteScroll",attrs:{handler:e.loadMore}},[e.arrayNews.length?n("q-list",{attrs:{dark:"",highlight:""}},[n("q-list-header",{staticClass:"bg-header"},[e._v(e._s(e.$t("news")))]),e._l(e.arrayNews,function(t){return n("new-item",{key:t.id,attrs:{"single-new":t},on:{onForward:function(n){e.goNewsDetail(t)}}})})],2):e._e(),n("div",{staticClass:"row justify-center",attrs:{slot:"message"},slot:"message"},[n("div",{staticClass:"col-auto"},[n("q-spinner",{attrs:{size:40,color:"secondary"}})],1)])],1)],1)},i=[];s._withStripped=!0;var r=n("3156"),a=n.n(r),o=(n("96cf"),n("c973")),c=n.n(o),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-item",{staticClass:"dark"},[n("q-item-side",[n("q-item-tile",{attrs:{avatar:""}},[n("img",{attrs:{src:e.singleNew.image}})])],1),n("q-item-main",{attrs:{label:e.title}}),n("q-item-side",{attrs:{right:""}},[n("q-item-tile",{attrs:{icon:"forward",color:"white"},nativeOn:{click:function(t){e.$emit("onForward")}}})],1)],1)},u=[];l._withStripped=!0;var w={name:"NewItemComponent",props:{singleNew:{required:!0,type:Object}},computed:{title:function(){return"".concat(this.singleNew.title.substr(0,30),"...")}}},f=w,h=n("2877"),d=Object(h["a"])(f,l,u,!1,null,null,null);d.options.__file="NewItem.vue";var p=d.exports,m=n("2f62"),g={name:"NewsPage",components:{NewItem:p},mounted:function(){var e=c()(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.setStart(0),this.$q.loading.show(),setTimeout(c()(regeneratorRuntime.mark(function e(){var n,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.paginatedNews();case 3:n=e.sent,s=n.data,t.setNews(s),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.$q.notify({type:"negative",message:error.response.data.message,position:"bottom"});case 11:return e.prev=11,t.$q.loading.hide(),e.finish(11);case 14:case"end":return e.stop()}},e,this,[[0,8,11,14]])})));case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),computed:a()({},Object(m["d"])("news",["news","start","limit","offlineNews"]),Object(m["d"])("app",["isOnline"]),{arrayNews:function(){return this.isOnline?this.news:this.offlineNews}}),watch:{isOnline:function(e){e&&this.$refs.infiniteScroll.resume()}},methods:a()({},Object(m["b"])("news",["paginatedNews"]),Object(m["c"])("news",["setNews","setSingleNew","setStart","setOfflineNews"]),{loadMore:function(e,t){var n=this;this.setStart(this.news.length),this.isOnline?setTimeout(function(){n.paginatedNews().then(function(e){n.setNews(e.data),e.data.length?t():t(!0)})},3e3):setTimeout(function(){t(!0)},1500)},goNewsDetail:function(e){this.setSingleNew(e),this.$router.push({name:"news-detail",params:{id:e.id}})}})},v=g,N=(n("c2ce"),Object(h["a"])(v,s,i,!1,null,null,null));N.options.__file="News.vue";t["default"]=N.exports},c2ce:function(e,t,n){"use strict";var s=n("3959"),i=n.n(s);i.a}}]);