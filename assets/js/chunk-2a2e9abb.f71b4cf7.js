(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a2e9abb"],{"13d9":function(e,t,n){"use strict";var a=n("d93f"),i=n.n(a);i.a},5514:function(e,t,n){},"5e25":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-overlay",{attrs:{value:e.showOverlay}},["Create assignment"===e.overlayAction?[n("CreateAssignment",{attrs:{exit:e.hideOverlay,refresh:e.refreshAssignments,path:e.selectedNode.path,course:e.course}})]:e._e(),"Edit assignment"===e.overlayAction?[n("EditAssignment",{attrs:{exit:e.hideOverlay,refresh:e.refreshAssignments,assignment:e.selectedNode,course:e.course}})]:e._e(),"Delete assignment"===e.overlayAction?[n("DeleteAssignment",{attrs:{exit:e.hideOverlay,refresh:e.refreshAssignments,assignment:e.selectedNode,course:e.course}})]:e._e(),"Create file"===e.overlayAction?[n("CreateFile",{attrs:{exit:e.hideOverlay,refresh:e.refreshAssignments,assignment:e.selectedNode,course:e.course}})]:e._e(),"Delete file"===e.overlayAction?[n("DeleteFile",{attrs:{exit:e.hideOverlay,refresh:e.refreshAssignments,file:e.selectedNode,course:e.course}})]:e._e()],2),n("h1",[e._v(" Assignments "),n("v-icon",{on:{click:function(t){return e.onClick("Create assignment",{path:""})}}},[e._v("mdi-plus")])],1),n("div",[n("vue-context",{ref:"menu",scopedSlots:e._u([{key:"default",fn:function(t){var a=t.data;return[null!==a&&void 0!==a?[n("li",[e.assignmentEligible(a)?n("a",{on:{click:function(t){return t.preventDefault(),e.onClick("Create assignment",a)}}},[e._v(" Create assignment ")]):e._e(),e.fileEligible(a)?n("a",{on:{click:function(t){return t.preventDefault(),e.onClick("Create file",a)}}},[e._v(" Create file ")]):e._e()]),n("li",[a.isDirectory?n("a",{on:{click:function(t){return t.preventDefault(),e.onClick("Edit assignment",a)}}},[e._v(" Edit assignment ")]):e._e()]),n("li",[a.isDirectory?n("a",{on:{click:function(t){return t.preventDefault(),e.onClick("Delete assignment",a)}}},[e._v(" Delete assignment ")]):n("a",{on:{click:function(t){return t.preventDefault(),e.onClick("Delete file",a)}}},[e._v(" Delete file ")])])]:e._e()]}}])})],1),n("v-container",{attrs:{fluid:""}},[n("v-row",[n("v-col",{attrs:{md:"3"}},[n("v-treeview",{attrs:{activatable:"",dense:"",hoverable:"",items:e.assignments,"return-object":"",active:e.active},on:{"update:active":[function(t){e.active=t},function(t){return e.activeChanged(e.active)}]},scopedSlots:e._u([{key:"prepend",fn:function(t){var a=t.item,i=t.open;return[a.isDirectory?n("v-icon",{on:{contextmenu:function(t){return t.preventDefault(),e.$refs.menu.open(t,a)}}},[e._v(" "+e._s(i?"mdi-folder-open":"mdi-folder")+" ")]):n("v-icon",{on:{contextmenu:function(t){return t.preventDefault(),e.$refs.menu.open(t,a)}}},[e._v(" "+e._s(e.fileTypes[e.extensionRegex.exec(a.name)[1]])+" ")])]}},{key:"label",fn:function(t){var a=t.item;return[n("v-list-item-title",{on:{contextmenu:function(t){return t.preventDefault(),e.$refs.menu.open(t,a)}}},[e._v(" "+e._s(a.name)+" "+e._s(!0===a.isDirectory?"("+a.path+")":"")+" ")])]}}])})],1),n("v-col",{attrs:{cols:"9"}},[n("v-card",{staticClass:"sticky",attrs:{tile:"",elevation:"2"}},[n("FileEditor",{ref:"fileEditor",staticClass:"editorWrapper",attrs:{course:e.course}})],1)],1)],1)],1)],1)},i=[],s=(n("4160"),n("b0c0"),n("ac1f"),n("159b"),n("96cf"),n("1da1")),r=n("5530"),o=(n("2791"),n("f513"),n("fe5f"),n("4ba6"),n("f9d4"),n("b866"),n("7ba3"),n("5514"),n("10b2"),n("2f62")),c=n("899b"),l=(n("f89b"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{height:"100%"}},["none"===e.editable.type?n("v-card",{staticClass:"inner-tile",attrs:{tile:""}},[n("v-card-title",[e._v("Select a file")])],1):"html"===e.editable.type?n("v-card",{staticClass:"inner-tile",attrs:{tile:""}},[n("v-card-title",[n("span",{staticClass:"headline"},[e._v(e._s(e.file.name))]),n("v-spacer"),n("v-checkbox",{attrs:{label:"Binary"},model:{value:e.binary,callback:function(t){e.binary=t},expression:"binary"}}),n("v-spacer"),n("v-checkbox",{attrs:{label:"Show"},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}}),n("v-spacer"),n("v-btn",{on:{click:function(t){return e.save()}}},[e._v("Save")])],1),n("div",[n("editor",{ref:"toaster",attrs:{options:e.editorOptions,height:"75vh"}})],1)],1):e.rawEditorFileExtensions.includes(e.editable.type)?n("v-card",{attrs:{tile:""}},[n("v-card-title",[n("span",{staticClass:"headline"},[e._v(e._s(e.file.name))]),n("v-spacer"),n("v-checkbox",{attrs:{label:"Binary"},model:{value:e.binary,callback:function(t){e.binary=t},expression:"binary"}}),n("v-spacer"),n("v-checkbox",{attrs:{label:"Show"},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}}),n("v-spacer"),n("v-btn",{attrs:{disabled:e.isSaving},on:{click:function(t){return e.save()}}},[e._v("Save")])],1),n("div",[n("codemirror",{ref:"mirror",attrs:{options:e.cmOptions,id:"codemirror"},model:{value:e.fileContent,callback:function(t){e.fileContent=t},expression:"fileContent"}})],1)],1):e._e()],1)}),d=[],u=(n("99af"),n("caad"),n("8f94")),m=n("4ede"),p=n("dde5"),f={name:"FileEditor",props:{course:Object},components:{codemirror:u["codemirror"],Editor:m["Editor"]},data:function(){return{binary:!1,show:!0,fileContent:"",file:void 0,extensionRegex:/(?:\.([^.]+))?$/,editorOptions:{hideModeSwitch:!1},modes:{c:"text/x-csrc",cpp:"text/x-c++src",java:"text/x-java",json:"application/json",javascript:"text/javascript",typescript:"text/typescript"},cmOptions:{tabSize:4,mode:"text/x-csrc",theme:"idea",lineNumbers:!0,line:!0,autoCloseBrackets:!0,viewportMargin:1/0},rawEditorFileExtensions:["c","cpp","java","js","mat","php","autotest","zadaca","json","txt","autotest2"],isSaving:!1}},computed:{editable:function(){return this.file&&!this.file.isDirectory?{type:this.extensionRegex.exec(this.file.name)[1]}:{type:"none"}}},methods:{save:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isSaving=!0,n="",e.$refs.toaster?n=e.$refs.toaster.invoke("getHtml"):e.$refs.mirror&&(n=e.fileContent),t.next=5,p["a"].editFile(e.course,{path:e.file.path,content:n,show:e.show,binary:e.binary});case 5:if(a=t.sent,e.isSaving=!1,a.success){t.next=10;break}return e.$notify({type:"bad",group:"main",title:"Save file",text:"".concat(a.message||"An error has occurred.")}),t.abrupt("return",!1);case 10:e.$notify({type:"good",group:"main",title:"Save file",text:"File /".concat(e.file.parent.parent.name,"/").concat(e.file.parent.name,"/").concat(e.file.name," saved.")});case 11:case"end":return t.stop()}}),t)})))()},refresh:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.file=e,t.$refs.toaster&&(t.$refs.toaster.invoke("height","75vh"),t.$refs.toaster.invoke("setHtml","")),t.fileContent="",console.log(e),!t.file||!t.file.parent){n.next=13;break}return n.next=7,p["a"].getFileContent(t.course,{path:t.file.path});case 7:if(a=n.sent,a.success){n.next=10;break}return n.abrupt("return",!1);case 10:t.$refs.toaster?t.$refs.toaster.invoke("setHtml",a.data.content):t.$refs.mirror&&(t.fileContent=a.data.content),t.binary=t.file.binary,t.show=t.file.show;case 13:["autotest","zadaca","json","autotest2"].includes(t.extensionRegex.exec(e.name)[1])?t.cmOptions.mode=t.modes.json:["c"].includes(t.extensionRegex.exec(e.name)[1])?t.cmOptions.mode=t.modes.c:["cpp"].includes(t.extensionRegex.exec(e.name)[1])?t.cmOptions.mode=t.modes.cpp:["java"].includes(t.extensionRegex.exec(e.name)[1])?t.cmOptions.mode=t.modes.java:["js"].includes(t.extensionRegex.exec(e.name)[1])?t.cmOptions.mode=t.modes.javascript:["ts"].includes(t.extensionRegex.exec(e.name)[1])&&(t.cmOptions.mode=t.modes.typescript);case 14:case"end":return n.stop()}}),n)})))()}}},v=f,h=n("2877"),g=n("6544"),b=n.n(g),x=n("8336"),y=n("b0af"),k=n("99d9"),w=n("ac7c"),C=n("2fa4"),_=Object(h["a"])(v,l,d,!1,null,"76f91fee",null),j=_.exports;b()(_,{VBtn:x["a"],VCard:y["a"],VCardTitle:k["d"],VCheckbox:w["a"],VSpacer:C["a"]});var O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"pa-5 px-8",attrs:{dark:""}},[n("h3",{staticClass:"text-center mb-3"},[e._v("Create assignment")]),n("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-text-field",{attrs:{label:"Name",required:"",rules:[e.notEmpty]},model:{value:e.displayName,callback:function(t){e.displayName=t},expression:"displayName"}}),n("v-text-field",{attrs:{label:"Filesystem name",required:"",rules:[e.notEmpty,e.noSpaces]},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),n("v-checkbox",{attrs:{label:"Hidden"},model:{value:e.hidden,callback:function(t){e.hidden=t},expression:"hidden"}}),n("v-select",{attrs:{"return-object":"",items:e.types},model:{value:e.selectedType,callback:function(t){e.selectedType=t},expression:"selectedType"}}),void 0!==e.selectedType&&"homework"===e.selectedType?n("v-text-field",{attrs:{label:"Homework ID"},model:{value:e.homeworkId,callback:function(t){e.homeworkId=t},expression:"homeworkId"}}):e._e(),n("div",{staticClass:"d-flex justify-space-between mt-5"},[n("v-btn",{attrs:{disabled:e.isProcessing},on:{click:e.exit}},[e._v("Cancel")]),n("v-btn",{attrs:{disabled:e.isProcessing},on:{click:e.create}},[e._v("Create")])],1)],1)],1)},V=[],E=(n("c975"),n("53ca")),A={name:"CreateAssignment",props:{path:Object(E["a"])(""),course:Object,refresh:Function,exit:Function},data:function(){return{homeworkId:void 0,hidden:!1,selectedType:"tutorial",types:["tutorial","homework","independent","exam","folder","task"],isProcessing:!1,name:"",displayName:"",valid:!1,notEmpty:function(e){return(e||"").length>0||"This field cannot be empty"},noSpaces:function(e){return(e||"").indexOf(" ")<0||"No spaces are allowed"},positive:function(e){return(e||-1)>0||"Number must not be negative"}}},methods:{create:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log(e.selectedType),console.log(e.name),console.log(e.displayName),console.log(e.homeworkId),console.log(e.hidden),!e.valid){t.next=20;break}return e.isProcessing=!0,console.log(e.path),console.log(e.course),t.next=11,p["a"].createAssignment(e.course,{path:e.path,name:e.name,displayName:e.displayName,type:e.selectedType,hidden:e.hidden,homeworkId:e.homeworkId});case 11:if(n=t.sent,e.isProcessing=!1,n.success){t.next=17;break}return console.log(n),e.$notify({type:"bad",group:"main",title:"Create assignment",text:"".concat(n.message||"An error has occurred.")}),t.abrupt("return",!1);case 17:e.refresh(),e.exit(),e.$notify({type:"good",group:"main",title:"Create assignment",text:"Assignment ".concat(e.displayName," created.")});case 20:case"end":return t.stop()}}),t)})))()}}},D=A,T=n("4bd4"),F=n("b974"),$=n("8654"),N=Object(h["a"])(D,O,V,!1,null,"53cb1eed",null),I=N.exports;b()(N,{VBtn:x["a"],VCard:y["a"],VCheckbox:w["a"],VForm:T["a"],VSelect:F["a"],VTextField:$["a"]});var R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"pa-5 px-8",attrs:{dark:""}},[n("h3",{staticClass:"text-center mb-3"},[e._v("Edit assignment")]),n("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-text-field",{attrs:{label:"Name",required:"",rules:[e.notEmpty]},model:{value:e.displayName,callback:function(t){e.displayName=t},expression:"displayName"}}),n("v-checkbox",{attrs:{label:"Hidden"},model:{value:e.hidden,callback:function(t){e.hidden=t},expression:"hidden"}}),n("v-select",{attrs:{"return-object":"",items:e.types},model:{value:e.selectedType,callback:function(t){e.selectedType=t},expression:"selectedType"}}),void 0!==e.selectedType&&"homework"===e.selectedType?n("v-text-field",{attrs:{label:"Homework ID"},model:{value:e.homeworkId,callback:function(t){e.homeworkId=t},expression:"homeworkId"}}):e._e(),n("div",{staticClass:"d-flex justify-space-between mt-5"},[n("v-btn",{attrs:{disabled:e.isProcessing},on:{click:e.exit}},[e._v("Cancel")]),n("v-btn",{attrs:{disabled:e.isProcessing},on:{click:e.update}},[e._v("Update")])],1)],1)],1)},S=[],P={name:"EditAssignment",props:{assignment:Object,course:Object,refresh:Function,exit:Function},data:function(){return{homeworkId:void 0,hidden:!1,selectedType:"tutorial",types:["tutorial","homework","independent","exam","folder","task"],isProcessing:!1,displayName:"",valid:!1,notEmpty:function(e){return(e||"").length>0||"This field cannot be empty"},noSpaces:function(e){return(e||"").indexOf(" ")<0||"No spaces are allowed"},positive:function(e){return(e||-1)>0||"Number must not be negative"}}},mounted:function(){this.displayName=this.assignment.name,this.selectedType=this.assignment.type,this.hidden=this.assignment.hidden,this.homeworkId=this.assignment.homeworkId},methods:{update:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log(e.selectedType),console.log(e.name),console.log(e.displayName),console.log(e.homeworkId),console.log(e.hidden),!e.valid){t.next=20;break}return e.isProcessing=!0,console.log(e.path),console.log(e.course),t.next=11,p["a"].editAssignment(e.course,{path:e.path,displayName:e.displayName,type:e.selectedType,hidden:e.hidden,homeworkId:e.homeworkId});case 11:if(n=t.sent,e.isProcessing=!1,console.log(n),n.success){t.next=17;break}return e.$notify({type:"bad",group:"main",title:"Edit assignment",text:"".concat(n.message||"An error has occurred.")}),t.abrupt("return",!1);case 17:e.refresh(),e.exit(),e.$notify({type:"good",group:"main",title:"Edit assignment",text:"Assignment ".concat(e.displayName," updated.")});case 20:case"end":return t.stop()}}),t)})))()}}},B=P,H=Object(h["a"])(B,R,S,!1,null,"2d26ef8e",null),z=H.exports;b()(H,{VBtn:x["a"],VCard:y["a"],VCheckbox:w["a"],VForm:T["a"],VSelect:F["a"],VTextField:$["a"]});var M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-card-title",[e._v("Delete assignment")]),n("v-card-subtitle",[e._v(e._s(e.assignment.name)+" ("+e._s(e.assignment.path)+")")]),n("v-card-text",[e._v("Are you sure you want to delete this task?")]),n("v-card-actions",[n("v-btn",{attrs:{disabled:e.isProcessing},on:{click:e.exit}},[e._v("Cancel")]),n("v-btn",{attrs:{disabled:e.isProcessing},on:{click:e.submit}},[e._v("Delete")])],1)],1)},q=[],L={name:"DeleteAssignment",props:{course:Object,assignment:Object,refresh:Function,exit:Function},data:function(){return{isProcessing:!1}},methods:{submit:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isProcessing=!0,t.next=3,p["a"].deleteAssignment(e.course,e.assignment);case 3:if(n=t.sent,e.isProcessing=!1,n.success){t.next=8;break}return e.$notify({type:"bad",group:"main",title:"Delete assignment",text:"".concat(n.message||"An error has occurred.")}),t.abrupt("return",!1);case 8:e.refresh(),e.exit(),e.$notify({type:"good",group:"main",title:"Delete assignment",text:"Assignment ".concat(e.assignment.name," deleted.")});case 11:case"end":return t.stop()}}),t)})))()}}},J=L,U=Object(h["a"])(J,M,q,!1,null,"02b11126",null),W=U.exports;b()(U,{VBtn:x["a"],VCard:y["a"],VCardActions:k["a"],VCardSubtitle:k["b"],VCardText:k["c"],VCardTitle:k["d"]});var G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"pa-5 px-8",attrs:{dark:""}},[n("v-card-title",[e._v("Create file")]),n("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-text-field",{attrs:{label:"Name",rules:[e.notEmpty]},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),n("v-checkbox",{attrs:{label:"Show"},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}}),n("v-checkbox",{attrs:{label:"Binary"},model:{value:e.binary,callback:function(t){e.binary=t},expression:"binary"}})],1),n("v-card-actions",[n("v-btn",{attrs:{disabled:e.isProcessing},on:{click:e.exit}},[e._v("Cancel")]),n("v-btn",{attrs:{disabled:e.isProcessing},on:{click:e.create}},[e._v("Create")])],1)],1)},K=[],Q={name:"CreateFile",props:{exit:Function,refresh:Function,course:Object,assignment:Object},data:function(){return{isProcessing:!1,valid:!1,binary:!1,show:!0,name:"",notEmpty:function(e){return(e||"").length>0||"This field cannot be empty"}}},methods:{create:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.valid){t.next=14;break}return e.isProcessing=!0,console.log("PATH: "+e.path),t.next=5,p["a"].createFile(e.course,{folderPath:e.assignment.path,name:e.name,binary:e.binary,show:e.show,content:""});case 5:if(n=t.sent,e.isProcessing=!1,console.log(n),n.success){t.next=11;break}return e.$notify({type:"bad",group:"main",title:"Create file",text:"".concat(n.message||"An error has occurred.")}),t.abrupt("return",!1);case 11:e.refresh(),e.exit(),e.$notify({type:"good",group:"main",title:"Create file",text:"File ".concat(e.name," created.")});case 14:case"end":return t.stop()}}),t)})))()}}},X=Q,Y=Object(h["a"])(X,G,K,!1,null,"896bd730",null),Z=Y.exports;b()(Y,{VBtn:x["a"],VCard:y["a"],VCardActions:k["a"],VCardTitle:k["d"],VCheckbox:w["a"],VForm:T["a"],VTextField:$["a"]});var ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-card-title",[e._v("Delete file")]),n("v-card-subtitle",[e._v(e._s(e.file.name)+" ("+e._s(e.file.path)+")")]),n("v-card-text",[e._v("Are you sure you want to delete this task?")]),n("v-card-actions",[n("v-btn",{attrs:{disabled:e.isProcessing},on:{click:e.exit}},[e._v("Cancel")]),n("v-btn",{attrs:{disabled:e.isProcessing},on:{click:e.submit}},[e._v("Delete")])],1)],1)},te=[],ne={name:"DeleteFile",props:{course:Object,file:Object,refresh:Function,exit:Function},data:function(){return{isProcessing:!1}},methods:{submit:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isProcessing=!0,t.next=3,p["a"].deleteFile(e.course,e.file);case 3:if(n=t.sent,e.isProcessing=!1,n.success){t.next=8;break}return e.$notify({type:"bad",group:"main",title:"Delete assignment",text:"".concat(n.message||"An error has occurred.")}),t.abrupt("return",!1);case 8:e.refresh(),e.exit(),e.$notify({type:"good",group:"main",title:"Delete assignment",text:"Assignment ".concat(e.assignment.name," deleted.")});case 11:case"end":return t.stop()}}),t)})))()}}},ae=ne,ie=Object(h["a"])(ae,ee,te,!1,null,"22bdca90",null),se=ie.exports;b()(ie,{VBtn:x["a"],VCard:y["a"],VCardActions:k["a"],VCardSubtitle:k["b"],VCardText:k["c"],VCardTitle:k["d"]});var re={components:{DeleteFile:se,CreateFile:Z,DeleteAssignment:W,VueContext:c["a"],FileEditor:j,EditAssignment:z,CreateAssignment:I},mounted:function(){},data:function(){return{selectedNode:void 0,loading:!1,showOverlay:!1,overlayAction:"",extensionRegex:/(?:\.([^.]+))?$/,fileTypes:{html:"mdi-language-html5",c:"mdi-language-c",cpp:"mdi-language-cpp",js:"mdi-nodejs",json:"mdi-code-json",md:"mdi-language-markdown",pdf:"mdi-file-pdf",png:"mdi-file-image",txt:"mdi-file-document-outline",autotest:"mdi-cog",autotest2:"mdi-cog",zadaca:"mdi-arrow-top-right-thick"},globalIdCounter:1,rawEditorFileExtensions:["c","cpp","java","js","mat","php","autotest","zadaca","json","txt","autotest2"],active:[],editorText:"This is initialValue.",editorOptions:{hideModeSwitch:!1},language:"x-csrc",code:"",cmOptions:{tabSize:4,mode:"text/x-csrc",theme:"idea",lineNumbers:!0,line:!0,autoCloseBrackets:!0,viewportMargin:1/0}}},computed:Object(r["a"])(Object(r["a"])({},Object(o["b"])(["courseById","assignmentsForCourse"])),{},{activeSelections:function(){return this.active},course:function(){var e=this.$route.params.course_id;return this.courseById(e)},assignments:function(){var e=this.$route.params.course_id,t=this.courseById(e),n=this.assignmentsForCourse(t);return n=void 0===n?[]:n.children,n},editorType:function(){if(0!==this.active.length){var e=this.active[0];return e.isDirectory?"none":{type:this.extensionRegex.exec(e.name)[1]}}return"none"},sidebarContent:function(e){return e}}),methods:{hideOverlay:function(){this.showOverlay=!1},refreshAssignments:function(){this.$store.dispatch("refreshAssignments")},assignmentEligible:function(e){var t=!0;return e.isDirectory||(t=!1),e.children&&e.children.forEach((function(e){e.isDirectory||(t=!1)})),t},fileEligible:function(e){var t=!0;return e.isDirectory||(t=!1),e.children&&e.children.forEach((function(e){e.isDirectory&&(t=!1)})),t},onClick:function(e,t){this.selectedNode=t,this.loading=!0,this.overlayAction=e,this.showOverlay=!0},activeChanged:function(e){0!==e.length&&this.treeItemClicked(e[0])},treeItemClicked:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var a,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.isDirectory){n.next=9;break}return a=t.$route.params.course_id,i=t.courseById(a),console.log(i),n.next=6,t.$refs.fileEditor.refresh(e);case 6:console.log("FILE: "+e.name),n.next=11;break;case 9:t.editorText="",console.log("FOLDER: "+e.name);case 11:case"end":return n.stop()}}),n)})))()},findInTree:function(e,t){var n=this;if(e.id===t.id&&e.name===t.name)return{name:e.name,success:!0};if(!e.children)return!1;var a=!1;return e.children.forEach((function(i){var s=n.findInTree(i,t);!0===s.success&&(s.path||(s.path=e.path),a=s)})),a}}},oe=re,ce=(n("13d9"),n("62ad")),le=n("a523"),de=n("132d"),ue=n("5d23"),me=n("a797"),pe=n("0fd9"),fe=n("eb2a"),ve=Object(h["a"])(oe,a,i,!1,null,"5d7aa101",null);t["default"]=ve.exports;b()(ve,{VCard:y["a"],VCol:ce["a"],VContainer:le["a"],VIcon:de["a"],VListItemTitle:ue["c"],VOverlay:me["a"],VRow:pe["a"],VTreeview:fe["a"]})},"7ba3":function(e,t,n){},d93f:function(e,t,n){}}]);
//# sourceMappingURL=chunk-2a2e9abb.f71b4cf7.js.map