(function(t){function e(e){for(var r,a,i=e[0],o=e[1],u=e[2],p=0,f=[];p<i.length;p++)a=i[p],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&f.push(s[a][0]),s[a]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);l&&l(e);while(f.length)f.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,i=1;i<n.length;i++){var o=n[i];0!==s[o]&&(r=!1)}r&&(c.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},s={app:0},c=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=o;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",[n("h2",{staticClass:"heading"},[t._v("Gates")]),n("div",{staticClass:"img-block"},[t.src1?n("div",{staticClass:"img-wrapper"},[n("img",{attrs:{src:"https://picsum.photos/id/237/500/400",alt:"gate"}})]):t._e(),t.src2?n("div",{staticClass:"img-wrapper"},[n("img",{attrs:{src:"https://picsum.photos/id/238/500/400",alt:"gate"}})]):t._e(),t.src3?n("div",{staticClass:"img-wrapper"},[n("img",{attrs:{src:"https://picsum.photos/id/239/500/400",alt:"gate"}})]):t._e()]),n("h4",[t._v("Which image do you need?")]),n("div",{staticClass:"button-block"},[n("span",{staticClass:"active",class:{"non-active":t.src1},on:{click:t.change1}},[t._v("Image 1")]),n("span",{staticClass:"active",class:{"non-active":t.src2},on:{click:t.change2}},[t._v("Image 2")]),n("span",{staticClass:"active",class:{"non-active":t.src3},on:{click:t.change3}},[t._v("Image 3")])])]),n("gate")],1)},c=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"gate"})},i=[],o={name:"gate"},u=o,l=n("2877"),p=Object(l["a"])(u,a,i,!1,null,"e697b4a8",null),f=p.exports,d={name:"App",data:function(){return{src1:!0,src2:!1,src3:!1}},components:{Gate:f},methods:{change1:function(){this.src1=!0,this.src2=!1,this.src3=!1},change2:function(){this.src1=!1,this.src2=!0,this.src3=!1},change3:function(){this.src1=!1,this.src2=!1,this.src3=!0}}},h=d,v=(n("8c57"),Object(l["a"])(h,s,c,!1,null,"1a6d0288",null)),g=v.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(g)}}).$mount("#app")},"8c57":function(t,e,n){"use strict";n("df45")},df45:function(t,e,n){}});
//# sourceMappingURL=app.bcb73d38.js.map