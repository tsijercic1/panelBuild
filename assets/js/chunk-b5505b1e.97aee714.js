(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b5505b1e","chunk-3c343bda"],{"2b71":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-card",[s("v-card-title",[e._v("Game statistics")]),s("GeneralStatistics")],1)},r=[],n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-card",[s("v-card-title",[e._v("General")]),s("v-row",[s("v-col",{attrs:{cols:"6"}},[s("v-card-subtitle",[e._v(" Number of players: ")])],1),s("v-col",{attrs:{cols:"6"}},[s("v-card-subtitle",[e._v(" "+e._s(e.players)+" ")])],1),s("v-col",{attrs:{cols:"6"}},[s("v-card-subtitle",[e._v(" Number of power ups in the game: ")])],1),s("v-col",{attrs:{cols:"6"}},[s("v-card-subtitle",[e._v(" "+e._s(e.powerUpsInGame)+" ")])],1),s("v-col",{attrs:{cols:"6"}},[s("v-card-subtitle",[e._v(" Number of used power ups in the game: ")])],1),s("v-col",{attrs:{cols:"6"}},[s("v-card-subtitle",[e._v(" "+e._s(e.usedPowerUps)+" ")])],1),s("v-col",{attrs:{cols:"6"}},[s("v-card-subtitle",[e._v(" Number of unused power ups in the game: ")])],1),s("v-col",{attrs:{cols:"6"}},[s("v-card-subtitle",[e._v(" "+e._s(e.unusedPowerUps)+" ")])],1)],1),s("v-simple-table",{scopedSlots:e._u([{key:"default",fn:function(){return[s("thead",[s("tr",[s("th",{staticClass:"text-left"},[e._v(" Name ")]),s("th",{staticClass:"text-left"},[e._v(" Points ")])])]),s("tbody",e._l(e.bestStudents,(function(t){return s("tr",{key:t.username},[s("td",[e._v(e._s(t.realName))]),s("td",[e._v(e._s(t.points))])])})),0)]},proxy:!0}])})],1)},i=[],l=(s("96cf"),s("1da1")),d=s("dde5"),c={name:"GeneralStatistics",data:function(){return{players:0,powerUpsInGame:0,usedPowerUps:0,unusedPowerUps:0,bestStudents:[]}},mounted:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,d["d"].getGeneral();case 2:s=t.sent,!0===s.success&&(e.players=s.data.players,e.powerUpsInGame=s.data.powerupsInGame,e.usedPowerUps=s.data.usedPowerups,e.unusedPowerUps=s.data.unusedPowerups,e.bestStudents=s.data.bestStudents);case 4:case"end":return t.stop()}}),t)})))()}},u=c,o=s("2877"),p=s("6544"),v=s.n(p),m=s("b0af"),b=s("99d9"),h=s("62ad"),f=s("0fd9"),_=(s("a9e3"),s("5530")),w=(s("8b37"),s("80d2")),g=s("7560"),G=s("58df"),x=Object(G["a"])(g["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(_["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(w["g"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(e){return e("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}}),S=Object(o["a"])(u,n,i,!1,null,"c763a594",null),C=S.exports;v()(S,{VCard:m["a"],VCardSubtitle:b["b"],VCardTitle:b["d"],VCol:h["a"],VRow:f["a"],VSimpleTable:x});var y={name:"GameStatistics",components:{GeneralStatistics:C}},$=y,V=Object(o["a"])($,a,r,!1,null,"3280b29c",null);t["default"]=V.exports;v()(V,{VCard:m["a"],VCardTitle:b["d"]})},"7d36":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-card",[s("v-card-title",[e._v("Game")]),s("GameStatistics"),e.isAdmin?s("GameBuilder"):e._e()],1)},r=[],n=(s("caad"),s("2532"),s("2b71")),i=s("03f5"),l={name:"Game",components:{GameBuilder:i["default"],GameStatistics:n["default"]},data:function(){return{isAdmin:!1}},mounted:function(){this.isAdmin=this.$store.getters.roles.includes("admin")||this.$store.getters.roles.includes("sysadmin")}},d=l,c=s("2877"),u=s("6544"),o=s.n(u),p=s("b0af"),v=s("99d9"),m=Object(c["a"])(d,a,r,!1,null,"075b3799",null);t["default"]=m.exports;o()(m,{VCard:p["a"],VCardTitle:v["d"]})},"8b37":function(e,t,s){}}]);
//# sourceMappingURL=chunk-b5505b1e.97aee714.js.map