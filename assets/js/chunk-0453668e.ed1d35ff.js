(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0453668e"],{"2bfd":function(e,t,n){},5514:function(e,t,n){},"5e25":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-overlay",{attrs:{value:e.showOverlay}},[n("v-card",{ref:"overlayChildRef",attrs:{id:"overlayChildId"}})],1),n("h1",[e._v("Assignments")]),n("div",[n("vue-context",{ref:"menu",scopedSlots:e._u([{key:"default",fn:function(t){var i=t.data;return[null!==i&&void 0!==i?[n("li",[e.assignmentEligible(i)?n("a",{on:{click:function(t){return t.preventDefault(),e.onClick("Create assignment",i)}}},[e._v(" Create assignment ")]):e._e(),e.fileEligible(i)?n("a",{on:{click:function(t){return t.preventDefault(),e.onClick("Create file",i)}}},[e._v(" Create file ")]):e._e()]),n("li",[i.isDirectory?n("a",{on:{click:function(t){return t.preventDefault(),e.onClick("Edit assignment",i)}}},[e._v(" Edit assignment ")]):n("a",{on:{click:function(t){return t.preventDefault(),e.onClick("Edit file",i)}}},[e._v(" Edit file ")])]),n("li",[i.isDirectory?n("a",{on:{click:function(t){return t.preventDefault(),e.onClick("Delete assignment",i)}}},[e._v(" Delete assignment ")]):n("a",{on:{click:function(t){return t.preventDefault(),e.onClick("Delete file",i)}}},[e._v(" Delete file ")])])]:e._e()]}}])})],1),n("v-container",{attrs:{fluid:""}},[n("v-row",[n("v-col",{attrs:{md:"3"}},[n("v-treeview",{attrs:{activatable:"",dense:"",hoverable:"",items:e.assignments,"return-object":"",active:e.active},on:{"update:active":[function(t){e.active=t},function(t){return e.activeChanged(e.active)}]},scopedSlots:e._u([{key:"prepend",fn:function(t){var i=t.item,a=t.open;return[i.isDirectory?n("v-icon",{on:{contextmenu:function(t){return t.preventDefault(),e.$refs.menu.open(t,i)}}},[e._v(" "+e._s(a?"mdi-folder-open":"mdi-folder")+" ")]):n("v-icon",{on:{contextmenu:function(t){return t.preventDefault(),e.$refs.menu.open(t,i)}}},[e._v(" "+e._s(e.fileTypes[e.extensionRegex.exec(i.name)[1]])+" ")])]}},{key:"label",fn:function(t){var i=t.item;return[n("v-list-item-title",{on:{contextmenu:function(t){return t.preventDefault(),e.$refs.menu.open(t,i)}}},[e._v(" "+e._s(i.name)+" ")])]}}])})],1),n("v-col",{attrs:{cols:"9"}},[n("v-card",{staticClass:"sticky",attrs:{tile:"",elevation:"2"}},[n("FileEditor",{ref:"fileEditor",staticClass:"editorWrapper",attrs:{course:e.course}})],1)],1)],1)],1)],1)},a=[],s=(n("4160"),n("b0c0"),n("ac1f"),n("159b"),n("96cf"),n("1da1")),r=n("b85c"),o=n("5530"),c=(n("2791"),n("f513"),n("fe5f"),n("4ba6"),n("f9d4"),n("b866"),n("7ba3"),n("5514"),n("10b2"),n("2f62")),l=n("899b"),u=(n("f89b"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{height:"100%"}},["none"===e.editable.type?n("v-card",{staticClass:"inner-tile",attrs:{tile:""}},[n("v-card-title",[e._v("Select a file")])],1):"html"===e.editable.type?n("v-card",{staticClass:"inner-tile",attrs:{tile:""}},[n("v-card-title",[n("span",{staticClass:"headline"},[e._v(e._s(e.file.name))]),n("v-spacer"),n("v-checkbox",{attrs:{label:"Binary"},model:{value:e.binary,callback:function(t){e.binary=t},expression:"binary"}}),n("v-spacer"),n("v-checkbox",{attrs:{label:"Show"},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}}),n("v-spacer"),n("v-btn",{on:{click:function(t){return e.save()}}},[e._v("Save")])],1),n("div",[n("editor",{ref:"toaster",attrs:{options:e.editorOptions,height:"75vh"}})],1)],1):e.rawEditorFileExtensions.includes(e.editable.type)?n("v-card",{attrs:{tile:""}},[n("v-card-title",[n("span",{staticClass:"headline"},[e._v(e._s(e.file.name))]),n("v-spacer"),n("v-checkbox",{attrs:{label:"Binary"},model:{value:e.binary,callback:function(t){e.binary=t},expression:"binary"}}),n("v-spacer"),n("v-checkbox",{attrs:{label:"Show"},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}}),n("v-spacer"),n("v-btn",{attrs:{disabled:e.isSaving},on:{click:function(t){return e.save()}}},[e._v("Save")])],1),n("div",[n("codemirror",{ref:"mirror",attrs:{options:e.cmOptions,id:"codemirror"},model:{value:e.fileContent,callback:function(t){e.fileContent=t},expression:"fileContent"}})],1)],1):e._e()],1)}),d=[],h=(n("99af"),n("caad"),n("8f94")),p=n("4ede"),m=(n("d3b7"),{getAssignments:function(e,t){return Object(s["a"])(regeneratorRuntime.mark((function n(){var i,a,s,r,o,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=e.id,a=e.external,s=e.year,r=e.name,n.next=3,fetch("/services/assignments.php?action=getAssignments&course_id=".concat(i).concat(a?"&X":"","&year=").concat(s),{method:"get",headers:{Accept:"application/json"}});case 3:return o=n.sent,n.next=6,o.json();case 6:return c=n.sent,c.success||t({type:"bad",group:"main",title:"Getting assignments for ".concat(r),text:"".concat(c.message||"An error has occurred.")}),n.abrupt("return",c.data);case 9:case"end":return n.stop()}}),n)})))()},convertAssignments:function(e,t){return Object(s["a"])(regeneratorRuntime.mark((function n(){var i,a,s,r,o,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=e.id,a=e.external,s=e.year,r=e.name,n.next=3,fetch("/services/assignments.php?action=updateAssignments&course_id=".concat(i).concat(a?"&X":"","&year=").concat(s),{method:"get",headers:{Accept:"application/json"}});case 3:return o=n.sent,n.next=6,o.json();case 6:return c=n.sent,c.success||t({type:"bad",group:"main",title:"Converting assignments for ".concat(r),text:"".concat(c.message||"An error has occurred.")}),n.abrupt("return",c);case 9:case"end":return n.stop()}}),n)})))()},createAssignment:function(e,t,n){return Object(s["a"])(regeneratorRuntime.mark((function i(){var a,s,r,o,c,l,u,d,h,p,m,f,v;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return a=e.id,s=e.external,r=e.year,o=e.name,c=t.path,l=t.name,u=t.displayName,d=t.type,h=t.hidden,p=t.homeworkId,m="/services/assignments.php?action=createAssignment&course_id=".concat(a).concat(s?"&X":"","&year=").concat(r),i.next=5,fetch(m,{method:"post",headers:{Accept:"application/json"},body:JSON.stringify({path:c,name:l,displayName:u,type:d,hidden:h,homeworkId:p})});case 5:return f=i.sent,i.next=8,f.json();case 8:return v=i.sent,!v.success&&n&&n({type:"bad",group:"main",title:"Creating assignment for ".concat(o),text:"".concat(v.message||"An error has occurred.")}),i.abrupt("return",v);case 11:case"end":return i.stop()}}),i)})))()},editAssignment:function(e,t,n){return Object(s["a"])(regeneratorRuntime.mark((function i(){var a,s,r,o,c,l,u,d,h,p,m,f;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return a=e.id,s=e.external,r=e.year,o=e.name,c=t.path,l=t.displayName,u=t.type,d=t.hidden,h=t.homeworkId,p="/services/assignments.php?action=editAssignment&course_id=".concat(a).concat(s?"&X":"","&year=").concat(r),i.next=5,fetch(p,{method:"post",headers:{Accept:"application/json"},body:JSON.stringify({path:c,displayName:l,type:u,hidden:d,homeworkId:h})});case 5:return m=i.sent,i.next=8,m.json();case 8:return f=i.sent,!f.success&&n&&n({type:"bad",group:"main",title:"Editing assignment for ".concat(o),text:"".concat(f.message||"An error has occurred.")}),i.abrupt("return",f);case 11:case"end":return i.stop()}}),i)})))()},deleteAssignment:function(e,t,n){return Object(s["a"])(regeneratorRuntime.mark((function i(){var a,s,r,o,c,l,u,d;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return a=e.id,s=e.external,r=e.year,o=e.name,c=t.path,l="/services/assignments.php?action=deleteAssignment&course_id=".concat(a).concat(s?"&X":"","&year=").concat(r),i.next=5,fetch(l,{method:"post",headers:{Accept:"application/json"},body:JSON.stringify({path:c})});case 5:return u=i.sent,i.next=8,u.json();case 8:return d=i.sent,!d.success&&n&&n({type:"bad",group:"main",title:"Deleting assignment for ".concat(o),text:"".concat(d.message||"An error has occurred.")}),i.abrupt("return",d);case 11:case"end":return i.stop()}}),i)})))()},getFileContent:function(e,t,n){return Object(s["a"])(regeneratorRuntime.mark((function i(){var a,s,r,o,c,l,u;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return a=e.id,s=e.external,r=e.year,o=t.path,c="/services/assignments.php?action=getFileContent&course_id=".concat(a).concat(s?"&X":"","&year=").concat(r),i.next=5,fetch(c,{method:"post",headers:{Accept:"application/json"},body:JSON.stringify({path:o})});case 5:return l=i.sent,i.next=8,l.json();case 8:return u=i.sent,!u.success&&n&&n({type:"bad",group:"main",title:"Getting content of ".concat(o),text:"".concat(u.message||"An error has occurred.")}),i.abrupt("return",u);case 11:case"end":return i.stop()}}),i)})))()},createFile:function(e,t,n){return Object(s["a"])(regeneratorRuntime.mark((function i(){var a,s,r,o,c,l,u,d,h,p,m;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return a=e.id,s=e.external,r=e.year,o=t.folderPath,c=t.name,l=t.show,u=t.binary,d=t.content,h="/services/assignments.php?action=getFileContent&course_id=".concat(a).concat(s?"&X":"","&year=").concat(r),i.next=5,fetch(h,{method:"post",headers:{Accept:"application/json"},body:JSON.stringify({folderPath:o,name:c,show:l,binary:u,content:d})});case 5:return p=i.sent,i.next=8,p.json();case 8:return m=i.sent,!m.success&&n&&n({type:"bad",group:"main",title:"Creating file ".concat(o+"/"+c),text:"".concat(m.message||"An error has occurred.")}),i.abrupt("return",m);case 11:case"end":return i.stop()}}),i)})))()},editFile:function(e,t,n){return Object(s["a"])(regeneratorRuntime.mark((function i(){var a,s,r,o,c,l,u,d,h,p;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return a=e.id,s=e.external,r=e.year,o=t.path,c=t.content,l=t.show,u=t.binary,d="/services/assignments.php?action=editFile&course_id=".concat(a).concat(s?"&X":"","&year=").concat(r),console.log(c),i.next=6,fetch(d,{method:"post",headers:{Accept:"application/json"},body:JSON.stringify({path:o,content:c,show:l,binary:u})});case 6:return h=i.sent,i.next=9,h.json();case 9:return p=i.sent,!p.success&&n&&n({type:"bad",group:"main",title:"Editing content of ".concat(o),text:"".concat(p.message||"An error has occurred.")}),i.abrupt("return",p);case 12:case"end":return i.stop()}}),i)})))()},deleteFile:function(e,t,n){return Object(s["a"])(regeneratorRuntime.mark((function i(){var a,s,r,o,c,l,u;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return a=e.id,s=e.external,r=e.year,o=t.path,c="/services/assignments.php?action=deleteFile&course_id=".concat(a).concat(s?"&X":"","&year=").concat(r),i.next=5,fetch(c,{method:"post",headers:{Accept:"application/json"},body:JSON.stringify({path:o})});case 5:return l=i.sent,i.next=8,l.json();case 8:return u=i.sent,!u.success&&n&&n({type:"bad",group:"main",title:"Deleting file ".concat(o),text:"".concat(u.message||"An error has occurred.")}),i.abrupt("return",u);case 11:case"end":return i.stop()}}),i)})))()}}),f=m,v={name:"FileEditor",props:{course:Object},components:{codemirror:h["codemirror"],Editor:p["Editor"]},data:function(){return{binary:!1,show:!0,fileContent:"",file:void 0,extensionRegex:/(?:\.([^.]+))?$/,editorOptions:{hideModeSwitch:!1},modes:{c:"text/x-csrc",cpp:"text/x-c++src",java:"text/x-java",json:"application/json",javascript:"text/javascript",typescript:"text/typescript"},cmOptions:{tabSize:4,mode:"text/x-csrc",theme:"idea",lineNumbers:!0,line:!0,autoCloseBrackets:!0,viewportMargin:1/0},rawEditorFileExtensions:["c","cpp","java","js","mat","php","autotest","zadaca","json","txt","autotest2"],isSaving:!1}},computed:{editable:function(){return this.file&&!this.file.isDirectory?{type:this.extensionRegex.exec(this.file.name)[1]}:{type:"none"}}},methods:{save:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isSaving=!0,n="",e.$refs.toaster?n=e.$refs.toaster.invoke("getHtml"):e.$refs.mirror&&(n=e.fileContent),t.next=5,f.editFile(e.course,{path:e.file.path,content:n,show:e.show,binary:e.binary});case 5:if(i=t.sent,e.isSaving=!1,i.success){t.next=10;break}return e.$notify({type:"bad",group:"main",title:"Save file",text:"".concat(i.message||"An error has occurred.")}),t.abrupt("return",!1);case 10:e.$notify({type:"good",group:"main",title:"Save file",text:"File /".concat(e.file.parent.parent.name,"/").concat(e.file.parent.name,"/").concat(e.file.name," saved.")});case 11:case"end":return t.stop()}}),t)})))()},refresh:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.file=e,t.$refs.toaster&&(t.$refs.toaster.invoke("height","75vh"),t.$refs.toaster.invoke("setHtml","")),t.fileContent="",console.log(e),!t.file||!t.file.parent){n.next=13;break}return n.next=7,f.getFileContent(t.course,{path:t.file.path});case 7:if(i=n.sent,i.success){n.next=10;break}return n.abrupt("return",!1);case 10:t.$refs.toaster?t.$refs.toaster.invoke("setHtml",i.data.content):t.$refs.mirror&&(t.fileContent=i.data.content),t.binary=t.file.binary,t.show=t.file.show;case 13:["autotest","zadaca","json","autotest2"].includes(t.extensionRegex.exec(e.name)[1])?t.cmOptions.mode=t.modes.json:["c"].includes(t.extensionRegex.exec(e.name)[1])?t.cmOptions.mode=t.modes.c:["cpp"].includes(t.extensionRegex.exec(e.name)[1])?t.cmOptions.mode=t.modes.cpp:["java"].includes(t.extensionRegex.exec(e.name)[1])?t.cmOptions.mode=t.modes.java:["js"].includes(t.extensionRegex.exec(e.name)[1])?t.cmOptions.mode=t.modes.javascript:["ts"].includes(t.extensionRegex.exec(e.name)[1])&&(t.cmOptions.mode=t.modes.typescript);case 14:case"end":return n.stop()}}),n)})))()}}},g=v,x=n("2877"),b=n("6544"),y=n.n(b),I=n("8336"),w=n("b0af"),S=n("99d9"),C=n("ac7c"),k=n("2fa4"),j=Object(x["a"])(g,u,d,!1,null,"3beb48fe",null),D=j.exports;y()(j,{VBtn:I["a"],VCard:w["a"],VCardTitle:S["d"],VCheckbox:C["a"],VSpacer:k["a"]});var O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"pa-5 px-8",attrs:{dark:""}},[n("h3",{staticClass:"text-center mb-3"},[e._v("Create assignment")]),n("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-text-field",{attrs:{label:"Name",required:"",rules:[e.notEmpty]},model:{value:e.displayName,callback:function(t){e.displayName=t},expression:"displayName"}}),n("v-text-field",{attrs:{label:"Filesystem name",required:"",rules:[e.notEmpty,e.noSpaces]},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),n("v-checkbox",{attrs:{label:"Hidden"},model:{value:e.hidden,callback:function(t){e.hidden=t},expression:"hidden"}}),n("v-combobox",{attrs:{label:"Type",clearable:"","hide-selected":"",solo:"","return-object":"",items:e.types},model:{value:e.selectedType,callback:function(t){e.selectedType=t},expression:"selectedType"}}),void 0!==e.selectedType&&"homework"===e.selectedType?n("v-text-field",{attrs:{label:"Homework ID"},model:{value:e.homeworkId,callback:function(t){e.homeworkId=t},expression:"homeworkId"}}):e._e(),n("div",{staticClass:"d-flex justify-space-between mt-5"},[n("v-btn",{attrs:{disabled:e.isProcessing},on:{click:e.exit}},[e._v("Cancel")]),n("v-btn",{attrs:{disabled:e.isProcessing},on:{click:e.create}},[e._v("Create")])],1)],1)],1)},_=[],V=(n("c975"),n("53ca")),A={name:"CreateAssignment",props:{path:Object(V["a"])(""),course:Object,refresh:Function,exit:Function},data:function(){return{homeworkId:void 0,hidden:!1,selectedType:void 0,types:["tutorial","homework","independent","exam","folder"],isProcessing:!1,name:"",displayName:"",valid:!1,notEmpty:function(e){return(e||"").length>0||"This field cannot be empty"},noSpaces:function(e){return(e||"").indexOf(" ")<0||"No spaces are allowed"},positive:function(e){return(e||-1)>0||"Number must not be negative"}}},methods:{create:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log(e.selectedType),console.log(e.name),console.log(e.displayName),console.log(e.homeworkId),console.log(e.hidden);case 5:case"end":return t.stop()}}),t)})))()}}},F=A,E=(n("7db0"),n("fb6a"),n("a434"),n("25f0"),n("8a79"),n("2bfd"),n("b974")),T=(n("4de4"),n("d81d"),n("45fc"),n("498a"),n("8654")),R=n("d9f7"),$=n("80d2"),N=Object(o["a"])(Object(o["a"])({},E["b"]),{},{offsetY:!0,offsetOverflow:!0,transition:!1}),M=E["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(e,t,n){return n.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:E["a"].options.props.menuProps.type,default:function(){return N}},noFilter:Boolean,searchInput:{type:String,default:void 0}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return Object(o["a"])(Object(o["a"])({},E["a"].options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var e=this;return this.selectedItems.map((function(t){return e.getValue(t)}))},hasDisplayedItems:function(){var e=this;return this.hideSelected?this.filteredItems.some((function(t){return!e.hasItem(t)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var e=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(t){return e.filter(t,String(e.internalSearch),String(e.getText(t)))}))},internalSearch:{get:function(){return this.lazySearch},set:function(e){this.lazySearch=e,this.$emit("update:search-input",e)}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var e=E["a"].options.computed.$_menuProps.call(this);return e.contentClass="v-autocomplete__content ".concat(e.contentClass||"").trim(),Object(o["a"])(Object(o["a"])({},N),e)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var e=this;return this.multiple?null:this.selectedItems.find((function(t){return e.valueComparator(e.getValue(t),e.getValue(e.internalValue))}))},listData:function(){var e=E["a"].options.computed.listData.call(this);return e.props=Object(o["a"])(Object(o["a"])({},e.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),e}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.updateSelf())},isMenuActive:function(e){!e&&this.hasSlot&&(this.lazySearch=void 0)},items:function(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput:function(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},methods:{onFilteredItemsChanged:function(e,t){var n=this;e!==t&&(this.setMenuIndex(-1),this.$nextTick((function(){n.internalSearch&&(1===e.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.setMenuIndex(0))})))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(e){this.searchIsDirty||(this.multiple&&e===$["s"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===$["s"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==$["s"].backspace&&e!==$["s"].delete||this.deleteCurrentItem())},deleteCurrentItem:function(){if(!this.readonly){var e=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===e){var t=this.selectedItems[this.selectedIndex];if(!this.getDisabled(t)){var n=this.selectedIndex===e?this.selectedIndex-1:this.selectedItems[this.selectedIndex+1]?this.selectedIndex:-1;-1===n?this.setValue(this.multiple?[]:void 0):this.selectItem(t),this.selectedIndex=n}}else this.selectedIndex=e}},clearableCallback:function(){this.internalSearch=void 0,E["a"].options.methods.clearableCallback.call(this)},genInput:function(){var e=T["a"].options.methods.genInput.call(this);return e.data=Object(R["a"])(e.data,{attrs:{"aria-activedescendant":Object($["m"])(this.$refs.menu,"activeTile.id"),autocomplete:Object($["m"])(e.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),e},genInputSlot:function(){var e=E["a"].options.methods.genInputSlot.call(this);return e.data.attrs.role="combobox",e},genSelections:function(){return this.hasSlot||this.multiple?E["a"].options.methods.genSelections.call(this):[]},onClick:function(e){this.isDisabled||(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput:function(e){if(!(this.selectedIndex>-1)&&e.target){var t=e.target,n=t.value;t.value&&this.activateMenu(),this.internalSearch=n,this.badInput=t.validity&&t.validity.badInput}},onKeyDown:function(e){var t=e.keyCode;E["a"].options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown:function(e){},onTabDown:function(e){E["a"].options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown:function(e){e.preventDefault(),this.activateMenu()},selectItem:function(e){E["a"].options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems:function(){E["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var e=this;this.$nextTick((function(){e.multiple&&e.internalSearch&&e.isMenuActive||(e.internalSearch=!e.selectedItems.length||e.multiple||e.hasSlot?null:e.getText(e.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy:function(e){if(-1!==this.selectedIndex){var t=this.selectedItems[this.selectedIndex],n=this.getText(t);e.clipboardData.setData("text/plain",n),e.clipboardData.setData("text/vnd.vuetify.autocomplete.item+plain",n),e.preventDefault()}}}}),B=M.extend({name:"v-combobox",props:{delimiters:{type:Array,default:function(){return[]}},returnObject:{type:Boolean,default:!0}},data:function(){return{editingIndex:-1}},computed:{computedCounterValue:function(){return this.multiple?this.selectedItems.length:(this.internalSearch||"").toString().length},hasSlot:function(){return E["a"].options.computed.hasSlot.call(this)||this.multiple},isAnyValueAllowed:function(){return!0},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!!this.$slots["no-data"]&&!this.hideNoData)}},methods:{onInternalSearchChanged:function(e){if(e&&this.multiple&&this.delimiters.length){var t=this.delimiters.find((function(t){return e.endsWith(t)}));null!=t&&(this.internalSearch=e.slice(0,e.length-t.length),this.updateTags())}this.updateMenuDimensions()},genInput:function(){var e=M.options.methods.genInput.call(this);return delete e.data.attrs.name,e.data.on.paste=this.onPaste,e},genChipSelection:function(e,t){var n=this,i=E["a"].options.methods.genChipSelection.call(this,e,t);return this.multiple&&(i.componentOptions.listeners=Object(o["a"])(Object(o["a"])({},i.componentOptions.listeners),{},{dblclick:function(){n.editingIndex=t,n.internalSearch=n.getText(e),n.selectedIndex=-1}})),i},onChipInput:function(e){E["a"].options.methods.onChipInput.call(this,e),this.editingIndex=-1},onEnterDown:function(e){e.preventDefault(),this.getMenuIndex()>-1||this.$nextTick(this.updateSelf)},onFilteredItemsChanged:function(e,t){this.autoSelectFirst&&M.options.methods.onFilteredItemsChanged.call(this,e,t)},onKeyDown:function(e){var t=e.keyCode;E["a"].options.methods.onKeyDown.call(this,e),this.multiple&&t===$["s"].left&&0===this.$refs.input.selectionStart?this.updateSelf():t===$["s"].enter&&this.onEnterDown(e),this.changeSelectedIndex(t)},onTabDown:function(e){if(this.multiple&&this.internalSearch&&-1===this.getMenuIndex())return e.preventDefault(),e.stopPropagation(),this.updateTags();M.options.methods.onTabDown.call(this,e)},selectItem:function(e){this.editingIndex>-1?this.updateEditing():M.options.methods.selectItem.call(this,e)},setSelectedItems:function(){null==this.internalValue||""===this.internalValue?this.selectedItems=[]:this.selectedItems=this.multiple?this.internalValue:[this.internalValue]},setValue:function(e){E["a"].options.methods.setValue.call(this,null!=e?e:this.internalSearch)},updateEditing:function(){var e=this.internalValue.slice();e[this.editingIndex]=this.internalSearch,this.setValue(e),this.editingIndex=-1},updateCombobox:function(){var e=Boolean(this.$scopedSlots.selection)||this.hasChips;e&&!this.searchIsDirty||(this.internalSearch!==this.getText(this.internalValue)&&this.setValue(),e&&(this.internalSearch=void 0))},updateSelf:function(){this.multiple?this.updateTags():this.updateCombobox()},updateTags:function(){var e=this.getMenuIndex();if(!(e<0)||this.searchIsDirty){if(this.editingIndex>-1)return this.updateEditing();var t=this.selectedItems.indexOf(this.internalSearch);if(t>-1){var n=this.internalValue.slice();n.splice(t,1),this.setValue(n)}if(e>-1)return this.internalSearch=null;this.selectItem(this.internalSearch),this.internalSearch=null}},onPaste:function(e){if(this.multiple&&!this.searchIsDirty){var t=e.clipboardData.getData("text/vnd.vuetify.autocomplete.item+plain");t&&-1===this.findExistingIndex(t)&&(e.preventDefault(),E["a"].options.methods.selectItem.call(this,t))}}}}),P=n("4bd4"),z=Object(x["a"])(F,O,_,!1,null,"4a361788",null),J=z.exports;y()(z,{VBtn:I["a"],VCard:w["a"],VCheckbox:C["a"],VCombobox:B,VForm:P["a"],VTextField:T["a"]});var L=n("2b0e"),X={components:{VueContext:l["a"],FileEditor:D},mounted:function(){},data:function(){return{loading:!1,showOverlay:!1,overlayAction:"",extensionRegex:/(?:\.([^.]+))?$/,fileTypes:{html:"mdi-language-html5",c:"mdi-language-c",cpp:"mdi-language-cpp",js:"mdi-nodejs",json:"mdi-code-json",md:"mdi-language-markdown",pdf:"mdi-file-pdf",png:"mdi-file-image",txt:"mdi-file-document-outline",autotest:"mdi-cog",autotest2:"mdi-cog",zadaca:"mdi-arrow-top-right-thick"},globalIdCounter:1,rawEditorFileExtensions:["c","cpp","java","js","mat","php","autotest","zadaca","json","txt","autotest2"],active:[],editorText:"This is initialValue.",editorOptions:{hideModeSwitch:!1},language:"x-csrc",code:"",cmOptions:{tabSize:4,mode:"text/x-csrc",theme:"idea",lineNumbers:!0,line:!0,autoCloseBrackets:!0,viewportMargin:1/0}}},computed:Object(o["a"])(Object(o["a"])({},Object(c["b"])(["courseById","assignmentsForCourse"])),{},{activeSelections:function(){return this.active},course:function(){var e=this.$route.params.course_id;return this.courseById(e)},assignments:function(){var e=this.$route.params.course_id,t=this.courseById(e),n=this.assignmentsForCourse(t);return n=void 0===n?[]:n.children,n},editorType:function(){if(0!==this.active.length){var e=this.active[0];return e.isDirectory?"none":{type:this.extensionRegex.exec(e.name)[1]}}return"none"},sidebarContent:function(e){return e}}),methods:{hideOverlay:function(){this.showOverlay=!1;var e,t=document.getElementById("overlayChildId"),n=t.childNodes,i=Object(r["a"])(n);try{for(i.s();!(e=i.n()).done;){var a=e.value;t.removeChild(a)}}catch(s){i.e(s)}finally{i.f()}},insertOverlayChild:function(e){var t=this,n=this.$refs.overlayChildRef;void 0===n?setTimeout((function(){t.insertOverlayChild(e)}),1e3):(n.$el.appendChild(e),this.loading=!1)},refreshAssignments:function(){this.$store.dispatch("refreshAssignments")},assignmentEligible:function(e){var t=!0;return e.isDirectory||(t=!1),e.children&&e.children.forEach((function(e){e.isDirectory||(t=!1)})),t},fileEligible:function(e){var t=!0;return e.isDirectory||(t=!1),e.children&&e.children.forEach((function(e){e.isDirectory&&(t=!1)})),t},onClick:function(e,t){this.loading=!0;var n=this.prepareInstance(e,t);void 0!==n&&this.insertOverlayChild(n),alert('You clicked "'.concat(e,'"!')),console.log(t)},activeChanged:function(e){0!==e.length&&this.treeItemClicked(e[0])},treeItemClicked:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var i,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.isDirectory){n.next=9;break}return i=t.$route.params.course_id,a=t.courseById(i),console.log(a),n.next=6,t.$refs.fileEditor.refresh(e);case 6:console.log("FILE: "+e.name),n.next=11;break;case 9:t.editorText="",console.log("FOLDER: "+e.name);case 11:case"end":return n.stop()}}),n)})))()},findInTree:function(e,t){var n=this;if(e.id===t.id&&e.name===t.name)return{name:e.name,success:!0};if(!e.children)return!1;var i=!1;return e.children.forEach((function(a){var s=n.findInTree(a,t);!0===s.success&&(s.path||(s.path=e.path),i=s)})),i},prepareInstance:function(e,t){if("Create assignment"===e){var n=L["default"].extend(J),i=new n({propsData:{path:t.path,course:this.course,exit:this.hideOverlay,refresh:this.refreshAssignments}});return i.$mount(),i}}}},W=X,H=(n("7cfc"),n("62ad")),K=n("a523"),q=n("132d"),G=n("5d23"),Y=n("a797"),U=n("0fd9"),Q=n("eb2a"),Z=Object(x["a"])(W,i,a,!1,null,"7473343e",null);t["default"]=Z.exports;y()(Z,{VCard:w["a"],VCol:H["a"],VContainer:K["a"],VIcon:q["a"],VListItemTitle:G["c"],VOverlay:Y["a"],VRow:U["a"],VTreeview:Q["a"]})},"7ba3":function(e,t,n){},"7cfc":function(e,t,n){"use strict";var i=n("adcd"),a=n.n(i);a.a},"8a79":function(e,t,n){"use strict";var i=n("23e7"),a=n("06cf").f,s=n("50c4"),r=n("5a34"),o=n("1d80"),c=n("ab13"),l=n("c430"),u="".endsWith,d=Math.min,h=c("endsWith"),p=!l&&!h&&!!function(){var e=a(String.prototype,"endsWith");return e&&!e.writable}();i({target:"String",proto:!0,forced:!p&&!h},{endsWith:function(e){var t=String(o(this));r(e);var n=arguments.length>1?arguments[1]:void 0,i=s(t.length),a=void 0===n?i:d(s(n),i),c=String(e);return u?u.call(t,c,a):t.slice(a-c.length,a)===c}})},adcd:function(e,t,n){}}]);
//# sourceMappingURL=chunk-0453668e.ed1d35ff.js.map