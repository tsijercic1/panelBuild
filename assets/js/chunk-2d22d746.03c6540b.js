(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22d746"],{f820:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"3"}},[n("v-btn",{on:{click:t.checkIfExists}},[t._v("Check")])],1),n("v-col",{attrs:{cols:"9"}},[n("v-card",{attrs:{tile:""}},[n("iframe",{attrs:{id:"generator-frame",src:t.autotestSrc,width:"100%",height:"100%"}})])],1)],1)],1)},r=[],a={name:"About",components:{},data:function(){return{autotestSrc:window.location.origin+"/panel/assets/autotestGenerator/html/index.html"}},beforeCreate:function(){window.localStorage.setItem(".autotest-content",JSON.stringify({}))},mounted:function(){document.getElementById("generator-frame").contentWindow.localStorage.setItem(".autotest-content",JSON.stringify({})),this.registerListener()},methods:{registerListener:function(){var t=this,e=document.getElementById("generator-frame").contentWindow.document.getElementById("export-button");null===e?setTimeout((function(){t.registerListener()}),1e3):(e.addEventListener("click",(function(){t.saveClicked()})),console.log("successfully registered"))},saveClicked:function(){console.log("Save clicked");var t=document.getElementById("generator-frame").contentWindow.localStorage.getItem(".autotest-content");console.log(JSON.stringify(t))}}},c=a,i=n("2877"),s=n("6544"),l=n.n(s),u=n("8336"),d=n("b0af"),f=n("62ad"),g=n("a523"),m=n("0fd9"),w=Object(i["a"])(c,o,r,!1,null,null,null);e["default"]=w.exports;l()(w,{VBtn:u["a"],VCard:d["a"],VCol:f["a"],VContainer:g["a"],VRow:m["a"]})}}]);
//# sourceMappingURL=chunk-2d22d746.03c6540b.js.map