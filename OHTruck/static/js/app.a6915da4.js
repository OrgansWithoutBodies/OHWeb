(function(t){function n(n){for(var o,r,s=n[0],d=n[1],l=n[2],p=0,u=[];p<s.length;p++)r=s[p],a[r]&&u.push(a[r][0]),a[r]=0;for(o in d)Object.prototype.hasOwnProperty.call(d,o)&&(t[o]=d[o]);c&&c(n);while(u.length)u.shift()();return i.push.apply(i,l||[]),e()}function e(){for(var t,n=0;n<i.length;n++){for(var e=i[n],o=!0,s=1;s<e.length;s++){var d=e[s];0!==a[d]&&(o=!1)}o&&(i.splice(n--,1),t=r(r.s=e[0]))}return t}var o={},a={app:0},i=[];function r(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=o,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var c=d;i.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"120f":function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},"1e91":function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,'\n.order[data-v-cd7aac24]{\n  font-size:30px;\n}\n.card[data-v-cd7aac24]{\nbackground-color:#dddddd;\nborder:10px solid #999999;\nposition:relative;\nmin-width: 100px;\nmax-width: 300px;\n-webkit-box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n-webkit-transition: 0.3s;\ntransition: 0.3s;\nborder-radius: 50px;\nmargin:9px;\npadding:15px 3px;\n}\n.donor[data-v-cd7aac24]{\n  border-radius:5px;\n}\n.phone[data-v-cd7aac24] {\n  color: #42b983;\n}\n.phone[data-v-cd7aac24]:before{\n  content:"";\n  display:inline;\n  width:10px;\n  height:10px;\n  color:#ff0000;\n}\n.donorinfo[data-v-cd7aac24]{\n  padding:10px 50px;\n  background-color:#cdcdcd;\n  display:none;\n  border:1px dashed white;\n  border-radius:8px;\n}\n.hidebtn[data-v-cd7aac24]{\n  background-color:#f2ed4e;\n}\n.delbtn[data-v-cd7aac24]{\n  background-color:#ff0000;\n}\n.responsediv[data-v-cd7aac24]{\n  display:none;\n}\n',""])},"23bf":function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,"\n.window[data-v-5f461b0e]{\n\tmargin:50px;\n}\n.fieldheader[data-v-5f461b0e]{\n\tmargin-left:20px;\n}\n.fielditem[data-v-5f461b0e]{\n\tmargin-left:40px;\n}\n#oldDonMenu[data-v-5f461b0e],#newDonMenu[data-v-5f461b0e]{\n\tbackground-color:#eeeeee;\n\tmargin-left:10px;\n\tpadding:10px;\n}\n#addnewdon[data-v-5f461b0e]{\n\tdisplay:inline-block;\n\twidth:20px;\n\theight:20px;\n\tvertical-align:middle;\n\tbackground-color:red;\n}\n",""])},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("f751"),e("097d");var o=e("a026"),a={name:"DonorCard",props:{donor:{type:Object,required:!0}},data:function(){return{donor:donor}}},i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"card"},[e("b",{staticClass:"name"},[t._v(" "+t._s(t.donor.lastname)+", "+t._s(t.donor.firstname))]),t._v(" "),e("p"),t._v(" "),e("i",{staticClass:"address"},[t._v(" "+t._s(t.donor.address))]),e("p"),t._v(" "),e("u",{staticClass:"phone"},[t._v(" "+t._s(t.donor.phone))]),t._v(" "),e("i",[t._v("Number of Donations from this donor")])])},r=[],s=e("2455");function d(t){e("faa9")}var l=!1,c=d,p="data-v-15ffc494",u=null,v=Object(s["a"])(a,i,r,l,c,p,u),f=v.exports,m=(e("c5f6"),{name:"StopCard",props:{stop:{type:Object,required:!0},order:{type:Number,required:!1}},data:function(){return{stop:stop}},methods:{showCancel:function(t){this.$modal.show("CancelWarning")},toggleDon:function(t){var n=document.getElementById("donorinfo "+t);"none"==n.style.display?n.style.display="inline-block":n.style.display="none"}}}),h=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"card"},[null!=t.order?e("div",{staticClass:"order"},[t._v("#"+t._s(t.order)),e("br")]):t._e(),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.stop.ScheduledTrip,expression:"stop.ScheduledTrip"}],on:{change:function(n){var e=Array.prototype.filter.call(n.target.options,function(t){return t.selected}).map(function(t){var n="_value"in t?t._value:t.value;return n});t.$set(t.stop,"ScheduledTrip",n.target.multiple?e:e[0])}}},[e("option",{domProps:{value:null}},[t._v("Unscheduled")]),t._v(" "),t._l(t.$store.state.trips,function(n){return e("option",{domProps:{value:n.id}},[t._v(t._s(n.Date))])})],2),t._v(" "),null!=t.stop.ScheduledTrip?e("div",[e("button",{on:{click:function(n){return t.chOrd(t.pt,-1)}}},[t._v("▲")]),e("button",[t._v("▼")]),t._v("\n      "+t._s(t.stop.ScheduledOrder)+"\n      "+t._s(t.stop.Donor.Firstname)+"\n      "),e("div",{staticClass:"handle"},[t._v("\n      X\n      ")])]):e("div",[t.stop.Donor?e("div",[e("button",{staticClass:"donor",attrs:{id:t.stop.inputtime},on:{click:function(n){return t.toggleDon(t.stop.Donor.id)}}},[t._v(" "+t._s(t.stop.Donor.Firstname)+", "+t._s(t.stop.Donor.Lastname))]),e("p"),t._v(" "),e("div",{staticClass:"donorinfo",staticStyle:{display:"inline-block"},attrs:{id:"donorinfo "+t.stop.Donor.id}},[e("i",{staticClass:"address"},[t._v(t._s(t.stop.Donor.Address))]),e("p"),t._v(" "),e("u",{staticClass:"phone"},[t._v(" "+t._s(t.stop.Donor.Phone))]),e("p")]),e("p")]):t._e()]),t._v(" "),e("modal",{attrs:{name:"CancelWarning",adaptive:"true"}},[e("div",{attrs:{id:"spacing"}},[e("h1",[t._v("Warning")]),t._v(": This will permanently delete information related to this stop. If you Hide the stop instead then all data will remain in database.\n        "),e("p"),t._v(" "),e("button",{on:{click:t.hideWarning}},[t._v("Keep Stop")]),t._v(" "),e("button",{on:{click:t.heedWarning}},[t._v("Cancel Stop")])])])],1)},g=[];function _(t){e("9ded")}var b=!1,w=_,y="data-v-cd7aac24",x=null,S=Object(s["a"])(m,h,g,b,w,y,x),k=S.exports,O=e("db0c"),E=e.n(O),D=e("75fc"),C=e("2699"),T=e("a40a"),N=e("4e2b"),$=e("31dc"),P=e("635f"),M={name:"mapmodule",props:{waypoints:{type:Array,required:!1}},components:{LMap:C["a"],LTileLayer:T["a"],LMarker:N["a"],LTooltip:$["a"],LPolyline:P["a"]},data:function(){return{ohlatlon:{lat:38.353184,lng:-121.975337},shelterlatlon:[38.366197,-121.976714],mapdata:{url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png",zoom:13,attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'},mintime:null,routes:null,tripgeoms:[]}},mounted:function(){},computed:{orderedwaypoints:function(){if(null!=this.mintime){var t=[{pos:this.ohlatlon}].concat(Object(D["a"])(this.waypoints)),n=[];for(var e in this.mintime)console.log(e),n.push(t[this.mintime[e]]["pos"]);return n.push(n[0]),n}return[]}},methods:{chOrd:function(t,n){},geocode:function(t){var n=this.waypoints[t];this.$store.dispatch("geoCode",n["add"]).then(function(t){var e=t["data"],o=E()(e)[0];n["pos"]["lat"]=o["lat"],n["pos"]["lng"]=o["lng"]})},getlatlons:function(t){},mindist:function(t){var n=this,e=[this.ohlatlon];for(var o in this.waypoints)e.push(this.waypoints[o]["pos"]);this.$store.dispatch("minDist",e).then(function(t){var e=[],o=t["waypts"];for(var a in o){var i=o[a]["waypoint_index"];e.push(i),i>0&&(n.waypoints[i-1]["ord"]=a)}var r=[];for(var s in t["trips"]){var d=t["trips"][s]["geometry"]["coordinates"];for(var l in d)r.push({lng:d[l][0],lat:d[l][1]});n.waypoints[s]["dist"]=t["trips"][s]["distance"]}n.tripgeoms=r,n.mintime=e})}}},I=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"mapwrapper"},[e("div",[e("l-map",{staticClass:"map",attrs:{zoom:t.mapdata.zoom,center:t.ohlatlon}},[e("l-tile-layer",{attrs:{url:t.mapdata.url,attribution:t.mapdata.attribution}}),t._v(" "),e("l-marker",{attrs:{"lat-lng":t.ohlatlon}},[e("l-tooltip",{attrs:{content:"Thrift Store"}})],1),t._v(" "),t._l(t.waypoints,function(n){return e("l-marker",{key:n.id,attrs:{"lat-lng":n["pos"]},on:{"update:latLng":function(e){return t.$set(n,"pos",e)},"update:lat-lng":function(e){return t.$set(n,"pos",e)}}},[e("l-tooltip",{attrs:{content:n["add"]}})],1)}),t._v(" "),e("l-polyline",{attrs:{"lat-lngs":t.tripgeoms,color:"orange",fillOpacity:"0"}})],2)],1),t._v(" "),e("input",{attrs:{type:"button",value:"Order Route by minimum trip time"},on:{click:t.mindist}}),e("p")])},R=[];function A(t){e("fcba")}var j=!1,L=A,F="data-v-e01c98be",J=null,U=Object(s["a"])(M,I,R,j,L,F,J),B=U.exports,q=e("1980"),G=e.n(q),W={components:{StopCard:k,draggable:G.a,MapModule:B},name:"TripCard",mounted:function(){this.loadcodes()},updated:function(){this.loadcodes()},props:{trip:{type:Object,required:!0},triplen:{type:Number,required:!1,default:10}},data:function(){return{}},computed:{adds:function(){var t={};for(var n in this.stops){var e=this.stops[n];t[n]=e.Donor.Address}return t},seltruck:{get:function(){return this.trip.Truck},set:function(t){this.trip.Truck=t}},emps:{get:function(){return this.$store.state.employees},set:function(){}},stops:function(){return this.filterStops()},geocodes:{get:function(){var t=this.$store.state.geocodes;return t},set:function(){}},waypoints:function(){var t=[];for(var n in this.stops){var e=this.adds[n],o=this.geocodes[e];t.push({add:e,pos:o,ord:stop.ScheduledOrder})}return t},trucks:{get:function(){return this.$store.state.trucks}}},methods:{loadcodes:function(){this.filterStops(),this.$store.dispatch("loadGeoCodes",this.waypoints)},filterStops:function(t){var n=this,e=this.$store.state.stops.filter(function(t){return t.ScheduledTrip==n.trip.id});return e},onMove:function(t){var n=t.relatedContext;t.draggedContext;console.log(n.element)},testfn:function(t,n){},toggleFilled:function(t,n){console.log(t),"tripslot empty"==t.target.className?t.target.className="tripslot filled":(t.target.className="tripslot empty",console.log(t.detail))},slotdbl:function(t){this.$emit("slotdbl",t.target.id)}}},z=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"trip"},[e("b",{staticClass:"tripdate"},[t._v(t._s(t.trip.Date))]),e("p"),t._v(" "),e("div",{staticClass:"tripcontent"},[e("draggable",{attrs:{list:t.trip,move:t.toggleFilled}},[t._v("\n      "+t._s(t.waypoints[0][t.ord])+"\n        "),t._l(t.stops,function(n,o){return e("stop-card",{key:n.id,attrs:{stop:n,order:t.waypoints[o]["ord"]}})}),t._v(" "),t._l(t.triplen-t.stops.length,function(n){return e("div",{key:n.id,staticClass:"tripgrid"},[e("div",{staticClass:"tripslot empty",attrs:{id:n},on:{dblclick:t.slotdbl,click:function(n){return n.shiftKey?t.toggleFilled(n):null}}},[e("div",{staticClass:"slotcontents"})])])})],2)],1),t._v(" "),e("map-module",{staticClass:"tripmap",attrs:{waypoints:t.waypoints}}),t._v(" "),t._m(0)],1)},H=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"tripbtns"},[e("input",{staticClass:"savebtn",attrs:{type:"button",value:"Save Trip Order"}})])}];function K(t){e("b618")}var V=!1,Y=K,X="data-v-3a65c3c7",Q=null,Z=Object(s["a"])(W,z,H,V,Y,X,Q),tt=Z.exports,nt={props:{},data:function(){return{newdon:{firstname:"",lastname:"",address:"",phone:"",email:"",other:""},olddon:{phone:"",email:""}}}},et=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h3",[t._v("Add New Donor")]),t._v(" "),e("div",{staticClass:"fieldheader"},[t._v("\n\tDonor Name:")]),e("div",{staticClass:"fielditem"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newdon.firstname,expression:"newdon.firstname"}],attrs:{type:"text",placeholder:"First Name",id:"FirstName"},domProps:{value:t.newdon.firstname},on:{input:function(n){n.target.composing||t.$set(t.newdon,"firstname",n.target.value)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.newdon.lastname,expression:"newdon.lastname"}],attrs:{type:"text",placeholder:"Last Name",id:"LastName"},domProps:{value:t.newdon.lastname},on:{input:function(n){n.target.composing||t.$set(t.newdon,"lastname",n.target.value)}}})]),e("p"),t._v(" "),e("div",{staticClass:"fieldheader"},[t._v("\n\tDonor Address:")]),e("div",{staticClass:"fielditem"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newdon.address,expression:"newdon.address"}],attrs:{type:"text",placeholder:"Address",id:"Address"},domProps:{value:t.newdon.address},on:{input:function(n){n.target.composing||t.$set(t.newdon,"address",n.target.value)}}})]),e("p"),t._v(" "),e("div",{staticClass:"fieldheader"},[t._v("\n\tDonor Phone:")]),e("div",{staticClass:"fielditem"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newdon.phone,expression:"newdon.phone"}],attrs:{type:"tel",placeholder:"Phone Number",id:"Phone"},domProps:{value:t.newdon.phone},on:{input:function(n){n.target.composing||t.$set(t.newdon,"phone",n.target.value)}}})]),e("p"),t._v(" "),e("div",{staticClass:"fieldheader"},[t._v("\n\tDonor Email:")]),e("div",{staticClass:"fielditem"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newdon.email,expression:"newdon.email"}],attrs:{type:"email",placeholder:"Email",id:"Email"},domProps:{value:t.newdon.email},on:{input:function(n){n.target.composing||t.$set(t.newdon,"email",n.target.value)}}})]),e("p"),t._v(" "),e("div",{staticClass:"fieldheader"},[t._v("\n\tOther Info:")]),e("div",{staticClass:"fielditem"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newdon.other,expression:"newdon.other"}],attrs:{rows:"4",cols:"40",id:"Other",placeholder:"Special Instructions for contacting this donor"},domProps:{value:t.newdon.other},on:{input:function(n){n.target.composing||t.$set(t.newdon,"other",n.target.value)}}})])])},ot=[];function at(t){e("c685")}var it=!1,rt=at,st=null,dt=null,lt=Object(s["a"])(nt,et,ot,it,rt,st,dt),ct=lt.exports,pt={props:{trip:{type:Object,required:!1},trippos:{type:Object,required:!1}},components:{"new-donor-form":ct},computed:{donors:function(){return this.$store.state.data.donors}},data:function(){return{oldDon:!1,newstop:{items:"",donorid:""}}},methods:{testfn:function(){alert("test")},commitStop:function(t){alert(t),this.$store.dispatch(this.$store,t)},toggleDon:function(){var t=document.getElementById("oldDonMenu"),n=document.getElementById("newDonMenu");"none"==t.style.display?(t.style.display="block",n.style.display="none"):(t.style.display="none",n.style.display="block")},validateDonor:function(){var t=document.getElementById("FirstName"),n=document.getElementById("LastName"),e=document.getElementById("Phone"),o=document.getElementById("Address"),a=document.getElementById("Email"),i=document.getElementById("Other"),r={firstname:t.value,lastname:n.value,address:o.value,phone:e.value,email:a.value,other:i.value},s=document.getElementById("Itemdesc"),d={inputtime:1234,stoptype:"pickup",status:"Unmarked",hidden:"false",items:s,donor:r};this.$store.dispatch("addStop",this.$store,d),alert(d)}}},ut=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h1",{staticClass:"title"},[t._v("Add New Stop ")]),t._v(" "),e("form",[t.loc?e("div",{attrs:{id:"window"}},[t._v(t._s(t.loc))]):t._e(),t._v(" "),e("div",{staticClass:"fieldheader"},[t._v("\nDescription of Items:\n")]),t._v(" "),e("div",{staticClass:"fielditem"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newstop.items,expression:"newstop.items"}],attrs:{rows:"4",cols:"50",id:"Itemdesc"},domProps:{value:t.newstop.items},on:{input:function(n){n.target.composing||t.$set(t.newstop,"items",n.target.value)}}})]),e("p"),t._v(" "),e("div",{staticClass:"fieldheader"},[t._v("\nDonor has donated before:\n"),e("div",{staticClass:"fielditem"},[e("button",{attrs:{id:"oldDonor"},on:{click:t.toggleDon}},[t._v("toggle")])])]),e("p"),t._v(" "),e("div",{staticStyle:{display:"none"},attrs:{id:"oldDonMenu"}},[e("h3",[t._v("Lookup Donor by:")]),e("p"),t._v("\nName:\n"),e("div",{attrs:{id:"donorselect"}},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.newstop.donorid,expression:"newstop.donorid"}],on:{change:function(n){var e=Array.prototype.filter.call(n.target.options,function(t){return t.selected}).map(function(t){var n="_value"in t?t._value:t.value;return n});t.$set(t.newstop,"donorid",n.target.multiple?e:e[0])}}},t._l(t.donors,function(n){return e("option",{domProps:{value:n.id}},[t._v(t._s(n.lastname)+", "+t._s(n.firstname)+" - "+t._s(n.phone))])}),0),t._v(" "),e("div",{attrs:{id:"addnewdon"},on:{click:t.testfn}},[t._v("+")])]),t._v(" "),e("div",{staticClass:"fieldheader"},[t._v("\n\t\tPhone: ")]),t._v(" "),t._m(0),e("p"),t._v(" "),e("div",{staticClass:"fieldheader"},[t._v("\n\t\tEmail: ")]),t._v(" "),t._m(1),e("p")]),t._v(" "),e("div",{staticStyle:{display:"block"},attrs:{id:"newDonMenu"}},[e("new-donor-form")],1),t._v(" "),e("br"),t._v(" "),e("button",{on:{click:t.validateDonor}},[t._v("Save")]),t._v(" "),e("button",[t._v("Cancel")])])])},vt=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"fielditem"},[e("input",{attrs:{type:"tel",placeholder:"phone #"}})])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"fielditem"},[e("input",{attrs:{type:"email",placeholder:"email address"}})])}];function ft(t){e("80af")}var mt=!1,ht=ft,gt="data-v-5f461b0e",_t=null,bt=Object(s["a"])(pt,ut,vt,mt,ht,gt,_t),wt=bt.exports,yt={props:{trip:{type:Object,required:!1},pos:{type:Object,required:!1}},name:"Settings",data:function(){return{backend:"",mapapi:""}},methods:{showRestMenu:function(t){this.$modal.show("REST")},hideRestMenu:function(t){this.$modal.hide("REST")},showJsonMenu:function(t){this.$modal.show("JSON")},hideJsonMenu:function(t){this.$modal.hide("JSON")},showDockerMenu:function(t){this.$modal.show("Docker")},hideDockerMenu:function(t){this.$modal.hide("Docker")},findJSONFile:function(t){}}},xt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"Settings"},[e("h1",[t._v("Settings")]),t._v(" "),e("b",{staticClass:"settingsheader"},[t._v("Backend:")]),t._v(" "),e("div",{staticClass:"settingssub"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.backend,expression:"backend"}],staticClass:"backrad",attrs:{type:"radio",id:"json",value:"JSON"},domProps:{checked:t._q(t.backend,"JSON")},on:{click:t.showJsonMenu,change:function(n){t.backend="JSON"}}}),t._v(" "),e("label",{attrs:{for:"json"}},[t._v("JSON File")]),t._v(" "),e("br"),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.backend,expression:"backend"}],staticClass:"backrad",attrs:{type:"radio",id:"rest",value:"REST"},domProps:{checked:t._q(t.backend,"REST")},on:{click:t.showRestMenu,change:function(n){t.backend="REST"}}}),t._v(" "),e("label",{attrs:{for:"rest"}},[t._v("RESTful API")]),t._v(" "),e("br"),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.backend,expression:"backend"}],staticClass:"backrad",attrs:{type:"radio",id:"docker",value:"Docker"},domProps:{checked:t._q(t.backend,"Docker")},on:{click:t.showDockerMenu,change:function(n){t.backend="Docker"}}}),t._v(" "),e("label",{attrs:{for:"rest"}},[t._v("Docker Container")])]),t._v(" "),e("b",{staticClass:"settingsheader"},[t._v("Map API Backend:")]),e("br"),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.mapapi,expression:"mapapi"}],on:{change:function(n){var e=Array.prototype.filter.call(n.target.options,function(t){return t.selected}).map(function(t){var n="_value"in t?t._value:t.value;return n});t.mapapi=n.target.multiple?e:e[0]}}},[e("option",{staticClass:"backrad",attrs:{value:"OSV"}},[t._v("Open Street View")]),t._v(" "),t._m(0)]),t._v(" "),e("modal",{attrs:{name:"REST"}},[e("div",{attrs:{id:"spacing"}},[e("h1",[t._v("RESTful Endpoints:")]),t._v("\n\tIncoming (Stops):"),e("input",{attrs:{type:"url",placeholder:"Incoming endpoint URL"}}),e("p"),t._v("\n\tOutgoing (Trips):"),e("input",{attrs:{type:"url",placeholder:"Outgoing endpoint URL"}}),e("p"),t._v("\n\t(write/update permissions necessary to save to outgoing endpoint!)"),e("p"),t._v(" "),e("button",{on:{click:t.hideRestMenu}},[t._v("save")]),e("button",{on:{click:t.hideRestMenu}},[t._v("cancel")])])]),t._v(" "),e("modal",{attrs:{name:"JSON"}},[e("div",{attrs:{id:"spacing"}},[e("h1",[t._v("Local JSON File:")]),t._v("\n\tCreate Blank File: "),e("button",[t._v("New")]),e("p"),t._v("\n\tUpload Configured File: "),e("button",[t._v("Select")]),e("p"),t._v(" "),e("button",{on:{click:t.hideJsonMenu}},[t._v("save")]),e("button",{on:{click:t.hideJsonMenu}},[t._v("cancel")])])]),t._v(" "),e("modal",{attrs:{name:"Docker"}},[e("div",{attrs:{id:"spacing"}},[e("h1",[t._v("Docker Configuration:")]),t._v(" "),e("button",{on:{click:t.hideDockerMenu}},[t._v("save")]),e("button",{on:{click:t.hideDockerMenu}},[t._v("cancel")])])]),t._v(" "),e("p"),t._v(" "),e("b",[t._v("Help:")]),t._v(" "),t._m(1)],1)},St=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("option",{staticClass:"backrad",attrs:{value:"GM"}},[t._v("Google Maps"),e("br")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"settingssub"},[e("a",{attrs:{href:"https://github.com/OrgansWithoutBodies/OHPickupAdmin/wiki/Home"}},[t._v("Link to wiki")])])}];function kt(t){e("e6c7")}var Ot=!1,Et=kt,Dt=null,Ct=null,Tt=Object(s["a"])(yt,xt,St,Ot,Et,Dt,Ct),Nt=Tt.exports,$t={name:"FrontEnd",mounted:function(){this.$store.dispatch("loadDataFrom")},components:{StopCard:k,DonorCard:f,TripCard:tt,AddNewStop:wt,Settings:Nt,draggable:G.a},data:function(){return{}},computed:{dragOptions:function(){return{animation:1,ghostClass:"ghost"}},seltrip:function(){var t=this,n=this.trips.filter(function(n){return n.Date==t.selectedday});return n[0]},selectedday:{get:function(){return this.$store.state.selday},set:function(t){this.$store.dispatch("changeSelTrip",t)}},donors:{get:function(){return this.$store.state.donors},set:function(t){this.$store.dispatch("updateStopList",t)}},stoplist:{get:function(){return this.$store.state.stops},set:function(t){this.$store.dispatch("updateStopList",t)}},trips:function(){return this.$store.state.trips}},methods:{testfn:function(t){},addStopWind:function(t){this.$modal.show("AddNewStop",{pos:t})},commitStop:function(t){this.$store.dispatch(this.$store,t)},showSettings:function(t){this.$modal.show("ShowSettings")},showAbout:function(t){this.$modal.show("aboutPage")},onEnd:function(t){},onMove:function(t){console.log(t.draggedContext.element.id)}}},Pt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"test"},[e("div",{staticClass:"tripcontrol"},[e("button",[t._v("◀")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedday,expression:"selectedday"}],on:{change:function(n){var e=Array.prototype.filter.call(n.target.options,function(t){return t.selected}).map(function(t){var n="_value"in t?t._value:t.value;return n});t.selectedday=n.target.multiple?e:e[0]}}},t._l(t.trips,function(n){return e("option",{domProps:{value:n.Date}},[t._v(t._s(n.Date))])}),0),t._v(" "),e("button",[t._v("▶")]),t._v(" "),e("button",[t._v("+")])]),t._v(" "),e("trip-card",{attrs:{trip:t.seltrip},on:{slotdbl:t.addStopWind}}),t._v(" "),e("div",{staticClass:"unassignedbin"},[e("b",[t._v("Unassigned Stops Bin")]),t._v(" "),e("draggable",{staticClass:"bin",attrs:{options:t.dragOptions,list:t.trip,move:t.onMove},model:{value:t.stoplist,callback:function(n){t.stoplist=n},expression:"stoplist"}},t._l(t.stoplist,function(n){return null==n.ScheduledTrip?e("div",[e("stop-card",{attrs:{stop:n}})],1):t._e()}),0)],1),t._v(" "),e("button",[t._v(" ... ")]),e("p"),t._v(" "),e("button",{on:{click:t.addStopWind}},[t._v(" Add New Stop ")]),t._v(" "),e("button",[t._v(" Show Hidden Stops")]),e("p"),t._v(" "),e("button",[t._v(" Save Stops for this Trip")]),e("p"),t._v(" "),e("button",{on:{click:t.showSettings}},[t._v(" Show Settings Menu ")]),t._v(" "),e("button",{on:{click:t.showAbout}},[t._v(" About ")]),t._v(" "),e("modal",{staticClass:"newstopwindow",attrs:{name:"AddNewStop",adaptive:"true",height:"auto",scrollable:"true"}},[e("div",{attrs:{id:"spacing"}},[e("AddNewStop")],1)]),t._v(" "),e("modal",{attrs:{name:"ShowSettings",adaptive:"true",height:"auto"}},[e("div",{attrs:{id:"spacing"}},[e("Settings")],1)]),t._v(" "),e("modal",{attrs:{name:"aboutPage"}},[e("div",{attrs:{id:"spacing"}},[t._v("\n    Developed by:\n      V\n      "),e("p"),t._v("\n    Version:\n      0\n      "+t._s(t.version)+"\n  ")])])],1)},Mt=[];function It(t){e("a549")}var Rt=!1,At=It,jt=null,Lt=null,Ft=Object(s["a"])($t,Pt,Mt,Rt,At,jt,Lt),Jt=Ft.exports,Ut={name:"App",components:{FrontEnd:Jt},data:function(){return{version:"0.0.2"}}},Bt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("front-end")],1)},qt=[];function Gt(t){e("92d8")}var Wt,zt=!1,Ht=Gt,Kt=null,Vt=null,Yt=Object(s["a"])(Ut,Bt,qt,zt,Ht,Kt,Vt),Xt=Yt.exports,Qt=(e("3b2b"),e("a481"),e("795b")),Zt=e.n(Qt),tn=e("bd86"),nn=(e("7514"),e("2f62")),en=e("bc3a"),on=e.n(en),an=e("a7fe"),rn=e.n(an);o["a"].use(nn["a"]),o["a"].use(rn.a,on.a);var sn="http://oh.vsipaddress.com/",dn=sn+"truck/api";console.log(sn);var ln=new nn["a"].Store({dbbackend:"REST",endpoint:sn,mapbackend:"GM",state:{selday:"2018-11-13",donors:[],stops:[],trips:[],employees:[],trucks:[],geocodes:{}},mutations:(Wt={ADD_EMPLOYEE:function(t,n){t.employees.push(n)},ADD_DONOR:function(t,n){t.donors.push(n)},ADD_GEOCODES:function(t,n){for(var e in n)e in t.geocodes||(t.geocodes[e]=n[e]);t.geocodes},ADD_STOP:function(t,n){t.stops.push(n)},ADD_TRIP:function(t,n){t.trips.push(n)},NEST_TRIP_IN_STOP:function(t,n,e){n.trip=t.trips.find(function(t){return t.id===e})},NEST_DONOR_IN_STOP:function(t,n,e){n.donor=t.donors.find(function(t){return t.id===e})},NEST_EMPLOYEE_IN_TRIP:function(){}},Object(tn["a"])(Wt,"NEST_EMPLOYEE_IN_TRIP",function(){}),Object(tn["a"])(Wt,"NEST_EMPLOYEE_IN_TRIP",function(){}),Object(tn["a"])(Wt,"SET_DONORS",function(t,n){t.donors=n}),Object(tn["a"])(Wt,"SET_EMPS",function(t,n){t.employees=n}),Object(tn["a"])(Wt,"SET_STOPS",function(t,n){var e=[];for(var o in n){var a=n[o];a["Donor"]=t.donors.find(function(t){return t.id===a.RequesterId}),e.push(a)}t.stops=e}),Object(tn["a"])(Wt,"SET_TRIPS",function(t,n){t.trips=n}),Object(tn["a"])(Wt,"SET_TRUCKS",function(t,n){t.trucks=n}),Object(tn["a"])(Wt,"UPDATE_STOPLIST_ORDER",function(t,n){t.stops=n}),Object(tn["a"])(Wt,"UPDATE_SEL_TRIP",function(t,n){t.selday=n}),Wt),actions:{changeSelTrip:function(t,n){var e=t.commit;e("UPDATE_SEL_TRIP",n)},geoCode:function(t,n){t.commit;return new Zt.a(function(t,e){var o=n.replace(new RegExp(" ","g"),"_"),a=sn+"truck/geo/"+o+"/",i={method:"GET",url:a};on()(i).then(function(n){return t(n)}).catch(function(t){return console.log(t)})})},loadGeoCodes:function(t,n){var e=t.commit,o=t.dispatch;for(var a in n){var i=n[a]["add"];o("geoCode",i).then(function(t){e("ADD_GEOCODES",t.data)})}},loadDataFrom:function(t){var n=t.commit,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"REST";"REST"==e&&(on.a.get(dn+"/donors/").then(function(t){return t.data}).then(function(t){n("SET_DONORS",t)}),on.a.get(dn+"/trips/").then(function(t){return t.data}).then(function(t){n("SET_TRIPS",t)}),on.a.get(dn+"/donations/").then(function(t){return t.data}).then(function(t){n("SET_DONATIONS",t)}),on.a.get(dn+"/trucks/").then(function(t){return t.data}).then(function(t){n("SET_TRUCKS",t)}),on.a.get(dn+"/employees/").then(function(t){return t.data}).then(function(t){n("SET_EMPS",t)}),on.a.get(dn+"/stops/").then(function(t){return t.data}).then(function(t){n("SET_STOPS",t)}))},loadDonors:function(t){t.commit},minDist:function(t,n){t.commit;return new Zt.a(function(t,e){var o=[];for(var a in n){var i=n[a];o.push([i["lng"],i["lat"]].join(","))}var r=o.join(";"),s=sn+"truck/min/"+r+"/";console.log(s);var d={method:"GET",url:s};on()(d).then(function(t){return t.data}).then(function(n){return t(n)}).catch(function(t){return console.log(t)})})},updateStopList:function(t,n){var e=t.commit;e("UPDATE_STOPLIST_ORDER",n)},postData:function(t,n){t.commit,arguments.length>2&&void 0!==arguments[2]&&arguments[2]}}}),cn=ln,pn=e("1881"),un=e.n(pn),vn=e("e11e");e("6cc5");o["a"].use(un.a),o["a"].config.productionTip=!1;delete vn["Icon"].Default.prototype._getIconUrl,vn["Icon"].Default.mergeOptions({iconRetinaUrl:e("584d"),iconUrl:e("6397"),shadowUrl:e("e2b9")}),new o["a"]({el:"#app",store:cn,components:{App:Xt},template:"<App/>"})},"66f2":function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,"\nh1, h2 {\n  font-weight: normal;\n}\nul {\n  list-style-type: none;\n  padding: 0;\n}\nli {\n  display: inline-block;\n  margin: 0 10px;\n}\na {\n  color: #42b983;\n}\n.newstopwindow{\n}\n#spacing{\npadding:20px;\nborder-radius:10px;\n}\n.ghost{\n  opacity:0.7;\n  background: #eefbff;\n}\n.bin{\n  display:grid;\n  width:100%;\n  grid-template-columns:repeat(auto-fill,300px);\n  grid-template-rows:1000px;\n}\n\n\n",""])},"80af":function(t,n,e){var o=e("23bf");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=e("2fb2").default;a("4374f9f3",o,!0,{})},"92d8":function(t,n,e){var o=e("98b9");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=e("2fb2").default;a("b2fc37f4",o,!0,{})},"956c":function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,"\n.settingssub{\n\tmargin-left:20px;\n}\n.settingsheader{\n\tmargin-left:5px;\n}\ninput[type=radio](not){\n\twidth:20px;\n}\n.backrad{\n\twidth:20px;\n}\n",""])},"98b9":function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,"\n#app {\n  font-family: 'Avenir', Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-align: center;\n  color: #00FF00;\n  margin-top: 60px;\n}\n",""])},9967:function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,'\n.tripbtns[data-v-3a65c3c7]{\n  grid-area:btns;\n}\n.tripslot[data-v-3a65c3c7]{\n  width:50px;\n  height:50px;\n  border:4px solid black;\n  margin:10px;\n  display:inline-block;\n  border-radius:5px;\n}\n.empty[data-v-3a65c3c7]{\n  background-color:red;\n}\n.filled[data-v-3a65c3c7]{\n  background-color:cyan;\n}\n.tripdate[data-v-3a65c3c7]{\n  font-size:30px;\n  text-decoration:underline;\n  text-transform:capitalize;\n  text-shadow: 2px 3px 10px silver;\n  color:#ff0000;\n  grid-area:lbl;\n}\n.triptruck[data-v-3a65c3c7]{\n  grid-area:truck;\n}\n.tripmap[data-v-3a65c3c7]{\n  grid-area:map;\n}\n.tripgrid[data-v-3a65c3c7]{\n  //display:inline-grid;\n  margin:40px;\n  //grid-template-columns: repeat(3, auto [col-start]);\n}\n.tripcontent[data-v-3a65c3c7]{\n  display:grid;\n  grid-area:stops;\n  grid-template-columns:1fr 1fr;\n}\n.trip[data-v-3a65c3c7]{\n  background-color:#eeeeee;\n  width:1000px;\n  margin:5px;\n  border-radius:20px;\n  display:grid;\n  grid-template-areas:"lbl lbl lbl"\n                      "truck . ."\n                      "stops map map"\n                      "stops map map"\n                      "stops map map"\n                      "btns btns btns";\n}\n.unassignedbin[data-v-3a65c3c7]{\n  background-color:#f9f9f9;\n  border-radius:10px;\n  margin:10px;\n}\n',""])},"9ded":function(t,n,e){var o=e("1e91");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=e("2fb2").default;a("e9597fea",o,!0,{})},a549:function(t,n,e){var o=e("66f2");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=e("2fb2").default;a("ca0b92cc",o,!0,{})},ac81:function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,'\n.card[data-v-15ffc494]{\nbackground-color:#dddddd;\nborder:2px solid #999999;\nposition:relative;\nmin-width: 100px;\nmax-width: 300px;\n-webkit-box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n-webkit-transition: 0.3s;\ntransition: 0.3s;\nborder-radius: 5px;\n}\n.phone[data-v-15ffc494] {\ncolor: #42b983;\n}\n.phone[data-v-15ffc494]:before{\ncontent:"";\ndisplay:inline;\nwidth:10px;\nheight:10px;\ncolor:#ff0000;\n}\n',""])},b618:function(t,n,e){var o=e("9967");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=e("2fb2").default;a("5e126773",o,!0,{})},c685:function(t,n,e){var o=e("120f");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=e("2fb2").default;a("2535af2c",o,!0,{})},e6c7:function(t,n,e){var o=e("956c");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=e("2fb2").default;a("da098608",o,!0,{})},f1d1:function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,"\n.orderbubble[data-v-e01c98be]{\n\tbackground-color:blue;\n\twidth:20px;\n\tdisplay:inline-block;\n\tborder-radius:50%;\n\tcolor:white;\n}\n.mapwrapper[data-v-e01c98be]{\n}\n.map[data-v-e01c98be]{\n\theight:300px;\n\twidth:500px;\n\tborder: 1px solid black;\n}\n",""])},faa9:function(t,n,e){var o=e("ac81");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=e("2fb2").default;a("742c88c0",o,!0,{})},fcba:function(t,n,e){var o=e("f1d1");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=e("2fb2").default;a("6299036f",o,!0,{})}});
//# sourceMappingURL=app.a6915da4.js.map