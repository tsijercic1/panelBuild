(function(e){function t(t){for(var r,i,o=t[0],c=t[1],u=t[2],d=0,p=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(p.length)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},s=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/panel/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"04d2":function(e,t,n){},"2b67":function(e,t,n){"use strict";var r=n("04d2"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",["Login"!==this.$router.history.current.name?n("navigation"):e._e(),n("v-content",[n("router-view")],1)],1)},s=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-navigation-drawer",{attrs:{dark:"",app:"","mini-variant":e.mini,permanent:""},on:{"update:miniVariant":function(t){e.mini=t},"update:mini-variant":function(t){e.mini=t}},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list",{staticClass:"py-0",attrs:{dense:"",nav:""}},[n("v-list-item",{staticClass:"px-0",attrs:{"two-line":""}},[n("v-list-item-avatar",[n("v-icon",[e._v(e._s("mdi-alpha-"+(void 0===e.user.username?"x":e.user.username.charAt(0))+"-circle")+" ")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(e.user.realName))]),n("v-list-item-subtitle",[e._v(e._s(e.user.username))])],1),n("v-btn",{attrs:{icon:""},on:{click:function(t){t.stopPropagation(),e.mini=!e.mini}}},[n("v-icon",[e._v("mdi-chevron-left")])],1)],1),n("v-divider"),e._l(e.items,(function(t){return n("v-list-item",{key:t.title,attrs:{to:t.link,link:""}},[n("v-list-item-icon",[n("v-icon",[e._v(e._s(t.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(t.title))])],1)],1)}))],2)],1)},o=[],c={data:function(){return{drawer:!0,items:[{title:"Dashboard",icon:"mdi-view-dashboard",link:"/dashboard"},{title:"Courses",icon:"mdi-school",link:"/courses"},{title:"Usage Statistics",icon:"mdi-chart-areaspline-variant",link:"/statistics"},{title:"About",icon:"mdi-help-box",link:"/about"}],mini:!0,user:{}}},mounted:function(){this.user=this.$store.getters.userProfile}},u=c,l=n("2877"),d=n("6544"),p=n.n(d),m=n("8336"),f=n("ce7e"),v=n("132d"),h=n("8860"),g=n("da13"),b=n("8270"),_=n("5d23"),x=n("34c3"),y=n("f774"),j=Object(l["a"])(u,i,o,!1,null,null,null),w=j.exports;p()(j,{VBtn:m["a"],VDivider:f["a"],VIcon:v["a"],VList:h["a"],VListItem:g["a"],VListItemAvatar:b["a"],VListItemContent:_["a"],VListItemIcon:x["a"],VListItemSubtitle:_["b"],VListItemTitle:_["c"],VNavigationDrawer:y["a"]});var C={components:{Navigation:w}},k=C,V=(n("5c0b"),n("7496")),I=n("a75b"),O=Object(l["a"])(k,a,s,!1,null,null,null),A=O.exports;p()(O,{VApp:V["a"],VContent:I["a"]});n("b0c0");var E=n("8c4f"),T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("h1",[e._v("404")])])},z=[],$=n("a523"),F={},P=Object(l["a"])(F,T,z,!1,null,null,null),U=P.exports;p()(P,{VContainer:$["a"]});var S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("h1",[e._v("Dashboard")])])},R=[],L={name:"Dashboard"},M=L,B=Object(l["a"])(M,S,R,!1,null,null,null),D=B.exports;p()(B,{VContainer:$["a"]});var G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("h1",[e._v("About")])])},q=[],N={},W=Object(l["a"])(N,G,q,!1,null,null,null),H=W.exports;p()(W,{VContainer:$["a"]});var J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-content",{staticClass:"grey darken-4"},[n("v-container",{attrs:{"fill-height":""}},[n("v-layout",{attrs:{"align-center":"","justify-center":""}},[n("v-flex",{attrs:{xs9:"",sm7:"",md5:"",lg4:""}},[n("v-card",{staticClass:"pa-10 text-center",attrs:{light:""}},[n("v-card-title",[e._v("Log in to your account")]),n("v-form",{staticClass:"my-4"},[n("v-text-field",{attrs:{light:"",label:"Username","prepend-icon":"mdi-account"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),n("v-text-field",{attrs:{light:"",type:"password",label:"Password","prepend-icon":"mdi-lock"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),n("v-btn",{staticClass:"mt-6",attrs:{large:"",width:"100%",dark:""},on:{click:e.login}},[e._v(" Log in ")])],1),e.showError?n("v-alert",{attrs:{type:"error"}},[e._v(" "+e._s(e.errorMessage)+" ")]):e._e()],1)],1)],1)],1)],1)],1)},X=[],Z=(n("96cf"),n("1da1")),K={name:"Login",data:function(){return{showError:!1,errorMessage:"",username:void 0,password:void 0}},methods:{login:function(){var e=Object(Z["a"])(regeneratorRuntime.mark((function e(){var t,n,r,a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this.username,n=this.password,e.next=3,this.$store.dispatch("login",{username:t,password:n});case 3:if(r=e.sent,!0!==r.success){e.next=9;break}return e.next=7,this.$router.push({name:"Dashboard"});case 7:e.next=12;break;case 9:this.showError=!0,this.errorMessage=r.message,setTimeout((function(){return a.hideError()}),5e3);case 12:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),hideError:function(){this.showError=!1,this.errorMessage=""}}},Q=K,Y=n("0798"),ee=n("b0af"),te=n("99d9"),ne=n("0e8f"),re=n("4bd4"),ae=n("a722"),se=n("8654"),ie=Object(l["a"])(Q,J,X,!1,null,null,null),oe=ie.exports;p()(ie,{VAlert:Y["a"],VApp:V["a"],VBtn:m["a"],VCard:ee["a"],VCardTitle:te["a"],VContainer:$["a"],VContent:I["a"],VFlex:ne["a"],VForm:re["a"],VLayout:ae["a"],VTextField:se["a"]});var ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("h1",[e._v("Courses")]),n("v-container",e._l(e.courses,(function(e){return n("CourseCard",{key:e.id,attrs:{course:e}})})),1)],1)},ue=[],le=n("5530"),de=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"mb-5",attrs:{"min-width":"240",elevation:"4"}},[n("v-card-title",{staticClass:"title text-sm-center"},[n("router-link",{attrs:{to:e.courseLink(e.course.id)}},[e._v(e._s(e.course.name))])],1),n("v-divider"),n("v-card",[n("v-card-title",{staticClass:"subtitle-1 justify-center"},[e._v("Groups")]),n("v-divider"),n("v-row",{staticClass:"pa-3"},e._l(e.course.groups,(function(t){return n("v-col",{key:t.id,attrs:{cols:"12",sm:"6",md:"4",lg:"3",xl:"2"}},[n("v-card",{staticClass:"pa-3 subtitle-2",attrs:{outlined:"",tile:"",to:e.groupLink(t.id)}},[e._v(" "+e._s(t.name)+" ")])],1)})),1)],1),n("v-expansion-panels",[n("v-expansion-panel",[n("v-expansion-panel-header",[e._v("Assignments")]),n("v-expansion-panel-content",[n("v-row",{staticClass:"pa-3"},e._l(e.assignments,(function(t){return n("v-col",{key:t.id,attrs:{cols:"12",sm:"6",md:"4",lg:"3",xl:"2"}},[n("v-card",{staticClass:"pa-3 subtitle-2",attrs:{outlined:"",tile:"",to:e.assignmentsLink()}},[e._v(" "+e._s(t.name)+" ")])],1)})),1)],1)],1)],1)],1)},pe=[],me=(n("99af"),{name:"CourseCard",props:["course"],methods:{groupLink:function(e){return"".concat(this.courseLink(this.course.id),"/groups/").concat(e)},courseLink:function(e){return"/courses/".concat(e)},assignmentsLink:function(){return"/assignments/".concat(this.course.id)}},mounted:function(){return Object(Z["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},computed:{assignments:function(){return this.$store.getters.assignmentsForCourse(this.course)}}}),fe=me,ve=n("62ad"),he=n("cd55"),ge=n("49e2"),be=n("c865"),_e=n("0393"),xe=n("0fd9"),ye=Object(l["a"])(fe,de,pe,!1,null,null,null),je=ye.exports;p()(ye,{VCard:ee["a"],VCardTitle:te["a"],VCol:ve["a"],VDivider:f["a"],VExpansionPanel:he["a"],VExpansionPanelContent:ge["a"],VExpansionPanelHeader:be["a"],VExpansionPanels:_e["a"],VRow:xe["a"]});var we=n("2f62"),Ce={name:"Courses",components:{CourseCard:je},computed:Object(le["a"])({},Object(we["b"])(["courses"])),mounted:function(){var e=this;return Object(Z["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("refreshCourses");case 2:return t.next=4,e.$store.dispatch("refreshAssignments");case 4:case"end":return t.stop()}}),t)})))()}},ke=Ce,Ve=Object(l["a"])(ke,ce,ue,!1,null,null,null),Ie=Ve.exports;p()(Ve,{VContainer:$["a"]});var Oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("h1",{staticClass:"mb-4"},[e._v(e._s(void 0===e.course.name?"":e.course.name))]),n("v-expansion-panels",{attrs:{accordion:!1,popout:!0,inset:!1,multiple:!1,focusable:!0,disabled:!1,readonly:!1,flat:!1,hover:!0,tile:!1}},e._l(e.groupsForCourseId(e.course.id),(function(t){return n("v-expansion-panel",{key:t.id},[n("v-expansion-panel-header",[e._v(e._s(t.name))]),n("v-expansion-panel-content",[n("v-row",{staticClass:"pa-3"},e._l(Object.keys(e.membersOfGroupByGroupIdAndCourseId(e.course.id,t.id)),(function(r){return n("v-col",{key:r,attrs:{cols:"12",sm:"6",md:"4",lg:"3",xl:"2"}},[n("v-card",{staticClass:"pa-3 subtitle-2",attrs:{outlined:"",tile:""}},[e._v(" "+e._s(t.members[r])+" ")])],1)})),1)],1)],1)})),1)],1)},Ae=[],Ee={computed:Object(le["a"])(Object(le["a"])({},Object(we["b"])(["membersOfGroupByGroupIdAndCourseId","groupsForCourseId"])),{},{course:function(){return this.$store.getters.courseById(this.$route.params.course_id)}}),mounted:function(){this.$store.dispatch("refreshMembers",this.course),console.log(this.course),console.log("This was a course when it was mounted")}},Te=Ee,ze=Object(l["a"])(Te,Oe,Ae,!1,null,null,null),$e=ze.exports;p()(ze,{VCard:ee["a"],VCol:ve["a"],VContainer:$["a"],VExpansionPanel:he["a"],VExpansionPanelContent:ge["a"],VExpansionPanelHeader:be["a"],VExpansionPanels:_e["a"],VRow:xe["a"]});var Fe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("h1",[e._v("Statistics")])])},Pe=[],Ue={},Se=Object(l["a"])(Ue,Fe,Pe,!1,null,null,null),Re=Se.exports;p()(Se,{VContainer:$["a"]});var Le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("h1",[e._v("Group "+e._s(e.$route.params.group_id))])])},Me=[],Be={},De=Be,Ge=Object(l["a"])(De,Le,Me,!1,null,null,null),qe=Ge.exports;p()(Ge,{VContainer:$["a"]});n("d3b7");var Ne={state:{userId:void 0,sessionId:void 0,profile:{}},mutations:{setUserId:function(e,t){e.userId=t},setSessionId:function(e,t){e.sessionId=t},setProfile:function(e,t){e.profile=Object(le["a"])(Object(le["a"])({},e.profile),t)}},getters:{isAuthenticated:function(e){return void 0!==e.sessionId},userProfile:function(e){return e.profile}},actions:{login:function(){var e=Object(Z["a"])(regeneratorRuntime.mark((function e(t,n){var r,a,s,i,o,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=n.username,a=n.password,e.next=3,fetch("/services/auth.php",{method:"post",body:"login=".concat(encodeURIComponent(r),"&password=").concat(encodeURIComponent(a)),headers:{"Content-Type":"application/x-www-form-urlencoded",Accept:"application/json"}});case 3:return s=e.sent,e.next=6,s.json();case 6:if(i=e.sent,!0!==i.success&&"true"!==i.success||"admin"!==i.role&&"sysadmin"!==i.role){e.next=21;break}return t.commit("setUserId",1),t.commit("setSessionId",i["sid"]),t.commit("setProfile",{username:r,realName:""}),e.next=13,fetch("/services/users.php?user=".concat(r),{method:"get",headers:{"Content-Type":"application/x-www-form-urlencoded",Accept:"application/json"}});case 13:return o=e.sent,e.next=16,o.json();case 16:return c=e.sent,!0!==c.success&&"true"!==c.success||t.commit("setProfile",{realName:c.data.realname}),e.abrupt("return",{success:i.success});case 21:return i.success&&"student"===i.role&&(i.message="Nedozvoljen pristup"),e.abrupt("return",{success:!1,message:i.message});case 23:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()}},We=(n("4de4"),n("b85c")),He=n("3835"),Je={state:{courses:[]},mutations:{setCourses:function(e,t){e.courses=t},updateCourse:function(e,t){var n=Object(He["a"])(t,2),r=n[0],a=n[1];console.log(a);var s=e.courses.filter((function(e){return e.id===r}));0!==s.length?(console.log(s),console.log(a),s[0].groups=a.groups):console.log("Cannot update...")}},getters:{courses:function(e){return e.courses},courseById:function(e){return function(t){return e.courses.filter((function(e){return e.id+""===t}))[0]}},groupsForCourseId:function(e){return function(t){return e.courses.filter((function(e){return e.id===t}))[0].groups||[]}},membersOfGroupByGroupIdAndCourseId:function(e){return function(t,n){return e.courses.filter((function(e){return e.id===t}))[0].groups.filter((function(e){return e.id===n}))[0].members||{}}}},actions:{refreshMembers:function(e,t){return Object(Z["a"])(regeneratorRuntime.mark((function n(){var r,a,s,i,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=Object(We["a"])(t.groups),n.prev=1,r.s();case 3:if((a=r.n()).done){n.next=17;break}return s=a.value,n.next=7,fetch("/services/courses.php?course_id=".concat(t.id,"&group_id=").concat(s.id,"&members"),{method:"get",headers:{Accept:"application/json"}});case 7:return i=n.sent,n.next=10,i.json();case 10:if(o=n.sent,console.log(o.success),o.success){n.next=14;break}return n.abrupt("return",!1);case 14:s.members=o.data.members;case 15:n.next=3;break;case 17:n.next=22;break;case 19:n.prev=19,n.t0=n["catch"](1),r.e(n.t0);case 22:return n.prev=22,r.f(),n.finish(22);case 25:e.commit("updateCourse",[t.id,t]);case 26:case"end":return n.stop()}}),n,null,[[1,19,22,25]])})))()},refreshCourses:function(e){return Object(Z["a"])(regeneratorRuntime.mark((function t(){var n,r,a,s,i,o,c,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("/services/courses.php",{method:"get",headers:{Accept:"application/json"}});case 2:return n=t.sent,t.next=5,n.json();case 5:if(r=t.sent,r.success){t.next=8;break}return t.abrupt("return",!1);case 8:a=r.data,s=Object(We["a"])(a),t.prev=10,s.s();case 12:if((i=s.n()).done){t.next=25;break}return o=i.value,t.next=16,fetch("/services/courses.php?course_id=".concat(o.id,"&groups"),{method:"get",headers:{Accept:"application/json"}});case 16:return c=t.sent,t.next=19,c.json();case 19:if(u=t.sent,u.success){t.next=22;break}return t.abrupt("return",!1);case 22:o.groups=u.data.groups;case 23:t.next=12;break;case 25:t.next=30;break;case 27:t.prev=27,t.t0=t["catch"](10),s.e(t.t0);case 30:return t.prev=30,s.f(),t.finish(30);case 33:e.commit("setCourses",a);case 34:case"end":return t.stop()}}),t,null,[[10,27,30,33]])})))()}}},Xe={getFullCourseId:function(e){return(e.external?"X":"")+e.id+"_"+e.year}},Ze={state:{assignments:{}},mutations:{setAssignments:function(e,t){e.assignments=t}},getters:{assignments:function(e){return e.assignments},assignmentById:function(e){return function(t){return e.assignments.filter((function(e){return e.id+""===t}))[0]}},assignmentsForCourse:function(e){return function(t){return e.assignments[Xe.getFullCourseId(t)]}},autotestFile:function(){return{id:56181,name:"Tehnike programiranja (2019/2020), Zadaća 1, zadatak 1",language:"C++",required_compiler:"g++",preferred_compiler:"g++",compiler_features:[],compiler_options:"-std=c++11 -O1 -Wall -Wuninitialized -Winit-self -Wfloat-equal -Wno-sign-compare -Werror=implicit-function-declaration -Werror=vla -pedantic -lm -pass-exit-codes",compiler_options_debug:"-std=c++11 -ggdb -lm -pass-exit-codes",compile:"true",run:"false",test:"true",debug:"true",profile:"true",test_specifications:[{id:108,require_symbols:[],replace_symbols:[],code:"//AT1 - definisanje i testiranje main funkcije (za parametar true)\n//Za sva pitanja vezana za autotestove za ovaj zadatak, javiti se na e-mail bcocalic1@etf.unsa.ba\n\n\n_main();",global_above_main:"",global_top:"",running_params:{timeout:"10",vmem:"1000000",stdin:"14 191 233 43 -313 142 13 121 678 -151 23 -12 727 173 656 1\n"},expected:["Unesite broj elemenata niza: Unesite elemente niza: Unesite parametar (1 ili 0): Izdvojeni elementi su: 121, -151, 656"],expected_exception:"false",expected_crash:"false",ignore_whitespace:"false",regex:"false",substring:"false"},{id:109,require_symbols:[],replace_symbols:[],code:"//AT2 - testiranje main funkcije (za parametar false)\n\n_main();",global_above_main:"",global_top:"",running_params:{timeout:"10",vmem:"1000000",stdin:"15 191 100 233 43 -313 142 13 121 678 -151 23 -12 727 173 656 0\n"},expected:["Unesite broj elemenata niza: Unesite elemente niza: Unesite parametar (1 ili 0): Izdvojeni elementi su: 100, 233, 142, 13, 23, 173"],expected_exception:"false",expected_crash:"false",ignore_whitespace:"false",regex:"false",substring:"false"},{id:110,require_symbols:[],replace_symbols:[],code:"//AT3 - testiranje main funkcije (za parametar true, sa ponavljanjem)\n\n_main();",global_above_main:"",global_top:"",running_params:{timeout:"10",vmem:"1000000",stdin:"17 191 233 14 43 -313 233 142 -12 13 121 678 -151 23 -12 727 173 656 1\n"},expected:["Unesite broj elemenata niza: Unesite elemente niza: Unesite parametar (1 ili 0): Izdvojeni elementi su: 121, -151, 656"],expected_exception:"false",expected_crash:"false",ignore_whitespace:"false",regex:"false",substring:"false"},{id:111,require_symbols:[],replace_symbols:[],code:"//AT4 - testiranje main funkcije (za parametar false, sa ponavljanjem)\n\n_main();",global_above_main:"",global_top:"",running_params:{timeout:"10",vmem:"1000000",stdin:"18 191 100 233 656 43 -313 142 13 121 100 678 -151 23 -12 727 191 173 656 0"},expected:["Unesite broj elemenata niza: Unesite elemente niza: Unesite parametar (1 ili 0): Izdvojeni elementi su: 100, 233, 142, 13, 23, 173"],expected_exception:"false",expected_crash:"false",ignore_whitespace:"false",regex:"false",substring:"false"},{id:112,require_symbols:[],replace_symbols:[],code:"//AT5 - testiranje main funkcije (za parametar true, sa ponavljanjem)\n\n_main();",global_above_main:"",global_top:"",running_params:{timeout:"10",vmem:"1000000",stdin:"20 191 233 14 43 -313 233 142 -12 13 121 678 -151 121 -151 656 23 -12 727 173 656 1"},expected:["Unesite broj elemenata niza: Unesite elemente niza: Unesite parametar (1 ili 0): Izdvojeni elementi su: 121, -151, 656"],expected_exception:"false",expected_crash:"false",ignore_whitespace:"false",regex:"false",substring:"false"},{id:113,require_symbols:[],replace_symbols:[],code:"//AT6 - testiranje main funkcije (za parametar false, sa ponavljanjem)\n\n_main();",global_above_main:"",global_top:"",running_params:{timeout:"10",vmem:"1000000",stdin:"22 191 100 233 656 233 43 -313 142 13 142 121 100 678 13 -151 23 -12 727 23 191 173 656 0\n"},expected:["Unesite broj elemenata niza: Unesite elemente niza: Unesite parametar (1 ili 0): Izdvojeni elementi su: 100, 233, 142, 13, 23, 173"],expected_exception:"false",expected_crash:"false",ignore_whitespace:"false",regex:"false",substring:"false"}]}}},actions:{refreshAssignments:function(e){return Object(Z["a"])(regeneratorRuntime.mark((function t(){var n,r,a,s,i,o,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n={},r=e.getters.courses,a=Object(We["a"])(r),t.prev=3,a.s();case 5:if((s=a.n()).done){t.next=18;break}return i=s.value,t.next=9,fetch("/assignment/ws.php?action=assignments&course=".concat(i.id).concat(i.external?"&X":""),{method:"get",headers:{Accept:"application/json"}});case 9:return o=t.sent,t.next=12,o.json();case 12:if(c=t.sent,c.success){t.next=15;break}return t.abrupt("return",!1);case 15:n[Xe.getFullCourseId(i)]=c.data;case 16:t.next=5;break;case 18:t.next=23;break;case 20:t.prev=20,t.t0=t["catch"](3),a.e(t.t0);case 23:return t.prev=23,a.f(),t.finish(23);case 26:e.commit("setAssignments",n);case 27:case"end":return t.stop()}}),t,null,[[3,20,23,26]])})))()}}};r["a"].use(we["a"]);var Ke=new we["a"].Store({state:{},mutations:{},actions:{},modules:{AuthStore:Ne,CourseStore:Je,AssignmentStore:Ze}}),Qe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("h1",[e._v("Assignments")]),n("v-container",{attrs:{fluid:""}},[n("v-row",[n("v-col",{attrs:{md:"3"}},[n("v-treeview",{attrs:{activatable:"",dense:"",hoverable:"",items:e.assignments,"return-object":"",active:e.active},on:{"update:active":function(t){e.active=t}},scopedSlots:e._u([{key:"prepend",fn:function(t){var r=t.item,a=t.open;return[r.type.includes("File")?n("v-icon",[e._v(" "+e._s(e.fileTypes[e.extensionRegex.exec(r.name)[1]])+" ")]):n("v-icon",[e._v(" "+e._s(a?"mdi-folder-open":"mdi-folder")+" ")])]}}])})],1),n("v-col",{staticClass:"sidebar-container",attrs:{md:"9"}},[n("div",{staticClass:"sticky",attrs:{config:e.sidebarConfig}},["none"===e.editorType2?n("v-card",{staticClass:"inner-tile",attrs:{tile:""}},[n("v-card-title",[e._v("Select a file or an assignment/task")])],1):"html"===e.editorType2.type?n("v-card",{staticClass:"inner-tile",attrs:{tile:""}},[n("v-card-title",[e._v("An html file has been selected")]),n("editor",{ref:"toaster",attrs:{initialValue:e.editorText,options:e.editorOptions}}),n("viewer",{attrs:{initialValue:e.editorText,options:e.editorOptions}})],1):e.rawEditorFileExtensions.includes(e.editorType2.type)?n("v-card",{staticClass:"inner-tile",attrs:{tile:""}},[n("v-card-title",[e._v(e._s(this.active[0].name))]),n("codemirror",{attrs:{options:e.cmOptions},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}})],1):e._e()],1)])],1)],1)],1)},Ye=[],et=(n("4160"),n("caad"),n("ac1f"),n("2532"),n("159b"),n("2909")),tt=(n("a7be"),n("f513"),n("fe5f"),n("4ede")),nt=(n("4ba6"),n("f9d4"),n("b866"),n("7ba3"),n("5514"),n("8f94")),rt=(n("10b2"),{components:{editor:tt["Editor"],viewer:tt["Viewer"],codemirror:nt["codemirror"]},mounted:function(){},data:function(){return{extensionRegex:/(?:\.([^.]+))?$/,fileTypes:{html:"mdi-language-html5",c:"mdi-language-c",cpp:"mdi-language-cpp",js:"mdi-nodejs",json:"mdi-code-json",md:"mdi-language-markdown",pdf:"mdi-file-pdf",png:"mdi-file-image",txt:"mdi-file-document-outline",autotest:"mdi-cog",zadaca:"mdi-arrow-top-right-thick"},globalIdCounter:1,rawEditorFileExtensions:["c","cpp","java","js","mat","php","autotest","zadaca","json","txt"],active:[],editorText:"This is initialValue.",editorOptions:{hideModeSwitch:!1},language:"x-csrc",code:"#include<stdio.h>\n\nint main(){}",cmOptions:{tabSize:4,mode:"text/x-csrc",theme:"idea",lineNumbers:!0,line:!0,autoCloseBrackets:!0}}},computed:{activeSelections:function(){return this.active},assignments:function(){var e=this.$route.params.course_id,t=this.$store.getters.courseById(e),n=this.$store.getters.assignmentsForCourse(t);return this.recursiveTreeArrayConstruction(n,void 0)},editorType2:function(){if(0!==this.active.length){var e=this.active[0];return e.type.includes("File")?{type:this.extensionRegex.exec(e.name)[1]}:"none"}return"none"},sidebarContent:function(e){return e}},watch:{activeSelections:"logActive"},methods:{findInTree:function(e,t){var n=this;if(e.id===t.id&&e.name===t.name)return{name:e.name,success:!0};if(!e.children)return!1;var r=!1;return e.children.forEach((function(a){var s=n.findInTree(a,t);!0===s.success&&(s.path||(s.path=e.path),r=s)})),r},logActive:function(){var e=this;0!==this.activeSelections.length&&this.assignments.forEach((function(t){var n=e.findInTree(t,e.activeSelections[0]);!0===n.success&&console.log(n)}));var t="";this.$refs.toaster&&(t=this.$refs.toaster.invoke("getHtml")),console.log(t)},recursiveTreeArrayConstruction:function(e,t){var n=this,r=[];return void 0===e||e.forEach((function(e){if(e.id){var a,s={id:e.id,type:void 0===e.type?"folder":e.type,name:e.name,path:void 0===e.path?"global":e.path,hidden:void 0!==e.hidden&&e.hidden,children:n.constructHomogeneousArrayFromFilesProperty(e,e.type+"File")};(a=s.children).push.apply(a,Object(et["a"])(n.recursiveTreeArrayConstruction(e.items,e))),r.push(s)}else void 0===t&&(t={id:"global/"+n.globalIdCounter,path:"global",type:"global"},n.globalIdCounter++),"string"===typeof e?r.push({parentId:t.id,id:t.path+"/"+e,type:t.type+"File",name:e,binary:!1,show:!0}):r.push({parentId:t.id,id:t.path+"/"+e.filename,type:t.type+"File",name:e.filename,binary:e.binary,show:e.show})})),r},constructHomogeneousArrayFromFilesProperty:function(e,t){if(e.files){var n=[];return e.files.forEach((function(r){r.filename?n.push({parentId:e.id,id:e.path+"/"+r.filename,type:t,name:r.filename,binary:r.binary,show:r.show}):n.push({parentId:e.id,id:e.path+"/"+r,type:t,name:r,binary:!1,show:!0})})),n}return[]}}}),at=rt,st=(n("2b67"),n("eb2a")),it=Object(l["a"])(at,Qe,Ye,!1,null,null,null),ot=it.exports;p()(it,{VCard:ee["a"],VCardTitle:te["a"],VCol:ve["a"],VContainer:$["a"],VIcon:v["a"],VRow:xe["a"],VTreeview:st["a"]}),r["a"].use(E["a"]);var ct=[{path:"/dashboard",name:"Dashboard",component:D},{path:"/",name:"Dashboard",component:D},{path:"/about",name:"About",component:H},{path:"/login",name:"Login",component:oe},{path:"/courses",name:"Courses",component:Ie},{path:"/courses/:course_id",name:"Course",component:$e},{path:"/courses/:course_id/groups/:group_id",name:"Group",component:qe},{path:"/assignments/:course_id",name:"Assignments",component:ot},{path:"/statistics",name:"Statistics",component:Re},{path:"*",name:"NotFound",component:U}],ut=new E["a"]({mode:"history",base:"/panel/",routes:ct});ut.beforeEach((function(e,t,n){"Login"===e.name||Ke.getters.isAuthenticated?n():n(oe)}));var lt=ut,dt=n("f309");r["a"].use(dt["a"]);var pt=new dt["a"]({});n("d1e78");r["a"].config.productionTip=!1,new r["a"]({router:lt,store:Ke,vuetify:pt,render:function(e){return e(A)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("7694"),a=n.n(r);a.a},7694:function(e,t,n){}});
//# sourceMappingURL=app.feac882c.js.map