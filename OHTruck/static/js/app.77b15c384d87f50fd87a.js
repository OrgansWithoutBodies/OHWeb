webpackJsonp([1],{"3BET":function(t,e){},"6pfs":function(t,e){},EYnv:function(t,e){},EkdG:function(t,e){},GUxT:function(t,e){},Leje:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),s={name:"DonorCard",props:{donor:{type:Object,required:!0}},data:function(){return{donor:donor}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("b",{staticClass:"name"},[t._v(" "+t._s(t.donor.lastname)+", "+t._s(t.donor.firstname))]),t._v(" "),n("p"),t._v(" "),n("i",{staticClass:"address"},[t._v(" "+t._s(t.donor.address))]),n("p"),t._v(" "),n("u",{staticClass:"phone"},[t._v(" "+t._s(t.donor.phone))]),t._v(" "),n("i",[t._v("Number of Donations from this donor")])])},staticRenderFns:[]};var a=n("VU/8")(s,i,!1,function(t){n("Rew5")},"data-v-15ffc494",null).exports,r={name:"StopCard",props:{stop:{type:Object,required:!0}},data:function(){return{stop:stop}},methods:{showCancel:function(t){this.$modal.show("CancelWarning")},toggleDon:function(t){var e=document.getElementById("donorinfo "+t);"none"==e.style.display?e.style.display="inline-block":e.style.display="none"}}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.stop.ScheduledTrip,expression:"stop.ScheduledTrip"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.stop,"ScheduledTrip",e.target.multiple?n:n[0])}}},[n("option",{domProps:{value:null}},[t._v("Unscheduled")]),t._v(" "),t._l(t.$store.state.trips,function(e){return n("option",{domProps:{value:e.id}},[t._v(t._s(e.Date))])})],2),t._v(" "),null!=t.stop.ScheduledTrip?n("div",[n("button",{on:{click:function(e){t.chOrd(t.pt,-1)}}},[t._v("▲")]),n("button",[t._v("▼")]),t._v("\n      "+t._s(t.stop.ScheduledOrder)+"\n      "+t._s(t.stop.Donor.Firstname)+"\n      "),n("div",{staticClass:"handle"},[t._v("\n      X\n      ")])]):n("div",[t.stop.Donor?n("div",[n("button",{staticClass:"donor",attrs:{id:t.stop.inputtime},on:{click:function(e){t.toggleDon(t.stop.Donor.id)}}},[t._v(" "+t._s(t.stop.Donor.Firstname)+", "+t._s(t.stop.Donor.Lastname))]),n("p"),t._v(" "),n("div",{staticClass:"donorinfo",staticStyle:{display:"inline-block"},attrs:{id:"donorinfo "+t.stop.Donor.id}},[n("i",{staticClass:"address"},[t._v(t._s(t.stop.Donor.Address))]),n("p"),t._v(" "),n("u",{staticClass:"phone"},[t._v(" "+t._s(t.stop.Donor.Phone))]),n("p")]),n("p")]):t._e()]),t._v(" "),n("b",{staticClass:"items"},[t._v(" Items:")]),t._v(" "+t._s(t.stop.items)+"\n    "),n("input",{staticClass:"updateitems",attrs:{type:"button",value:"Update Items"}}),n("p"),t._v(" "),n("b",{staticClass:"status"},[t._v(t._s(t.stop.status))]),t._v(" "),n("input",{staticClass:"called",attrs:{type:"button",value:"Mark as Called"}}),n("p"),t._v(" "),t._m(0),t._v(" "),n("modal",{attrs:{name:"CancelWarning",adaptive:"true"}},[n("div",{attrs:{id:"spacing"}},[n("h1",[t._v("Warning")]),t._v(": This will permanently delete information related to this stop. If you Hide the stop instead then all data will remain in database.\n        "),n("p"),t._v(" "),n("button",{on:{click:t.hideWarning}},[t._v("Keep Stop")]),t._v(" "),n("button",{on:{click:t.heedWarning}},[t._v("Cancel Stop")])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"responsediv"},[e("select",{attrs:{id:"response"}},[e("option",{attrs:{disabled:"",value:""}},[this._v(" Please Select Response Below ")]),this._v(" "),e("option",{attrs:{value:"confirmed"}},[this._v("Confirmed ")]),this._v(" "),e("option",{attrs:{value:"noans"}},[this._v("No Answer")])]),this._v(" "),e("button",[this._v("Save Response")]),e("p")])}]};var l=n("VU/8")(r,d,!1,function(t){n("fxJU")},"data-v-77b58ce9",null).exports,c=n("gRE1"),u=n.n(c),p=n("Gu7T"),v=n.n(p),m=n("MdIv"),f={name:"mapmodule",props:{waypoints:{type:Array,required:!1}},components:{LMap:m.LMap,LTileLayer:m.LTileLayer,LMarker:m.LMarker,LTooltip:m.LTooltip,LPolyline:m.LPolyline},data:function(){return{ohlatlon:{lat:38.353184,lng:-121.975337},shelterlatlon:[38.366197,-121.976714],mapdata:{url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png",zoom:13,attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'},mintime:null,routes:null,tripgeoms:[]}},mounted:function(){},computed:{orderedwaypoints:function(){if(null!=this.mintime){var t=[{pos:this.ohlatlon}].concat(v()(this.waypoints)),e=[];for(var n in this.mintime)e.push(t[this.mintime[n]].pos);return e.push(e[0]),e}return[]}},methods:{chOrd:function(t,e){},geocode:function(t){var e=this.waypoints[t];this.$store.dispatch("geoCode",e.add).then(function(t){var n=t.data,o=u()(n)[0];e.pos.lat=o.lat,e.pos.lng=o.lng})},getlatlons:function(t){},mindist:function(t){var e=this,n=[this.ohlatlon];for(var o in this.waypoints)n.push(this.waypoints[o].pos);this.$store.dispatch("minDist",n).then(function(t){var n=[],o=t.waypts;for(var s in o){var i=o[s].waypoint_index;n.push(i)}var a=[];for(var r in t.trips){var d=t.trips[r].geometry.coordinates;for(var l in d)a.push({lng:d[l][0],lat:d[l][1]});e.waypoints[r].dist=t.trips[r].distance}e.tripgeoms=a,e.mintime=n})}}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mapwrapper"},[n("div",[n("l-map",{staticClass:"map",attrs:{zoom:t.mapdata.zoom,center:t.ohlatlon}},[n("l-tile-layer",{attrs:{url:t.mapdata.url,attribution:t.mapdata.attribution}}),t._v(" "),n("l-marker",{attrs:{"lat-lng":t.ohlatlon}},[n("l-tooltip",{attrs:{content:"Thrift Store"}})],1),t._v(" "),t._l(t.waypoints,function(e){return n("l-marker",{attrs:{"lat-lng":e.pos},on:{"update:latLng":function(n){t.$set(e,"pos",n)}}},[n("l-tooltip",{attrs:{content:e.add}})],1)}),t._v(" "),n("l-polyline",{attrs:{"lat-lngs":t.tripgeoms,color:"orange",fillOpacity:"0"}})],2)],1),t._v(" "),n("input",{attrs:{type:"button",value:"Order Route by minimum trip time"},on:{click:t.mindist}}),n("p")])},staticRenderFns:[]};var g=n("VU/8")(f,h,!1,function(t){n("3BET")},"data-v-29bbf44a",null).exports,_=n("DAYN"),b=n.n(_),k={components:{StopCard:l,draggable:b.a,MapModule:g},name:"TripCard",mounted:function(){this.loadcodes(),console.log(this.waypoints)},updated:function(){this.loadcodes()},props:{trip:{type:Object,required:!0},triplen:{type:Object,required:!1,default:6}},data:function(){return{}},computed:{adds:function(){var t={};for(var e in this.stops){var n=this.stops[e];t[e]=n.Donor.Address}return t},seltruck:{get:function(){return this.trip.Truck},set:function(t){this.trip.Truck=t}},emps:{get:function(){return this.$store.state.employees},set:function(){}},stops:function(){return this.filterStops()},geocodes:{get:function(){return this.$store.state.geocodes},set:function(){}},waypoints:function(){var t=[];for(var e in this.stops){var n=this.adds[e],o=this.geocodes[n];t.push({add:n,pos:o,ord:stop.ScheduledOrder})}return t},trucks:{get:function(){return this.$store.state.trucks}}},methods:{loadcodes:function(){this.filterStops(),this.$store.dispatch("loadGeoCodes",this.waypoints)},filterStops:function(t){var e=this;return this.$store.state.stops.filter(function(t){return t.ScheduledTrip==e.trip.id})},onMove:function(t){var e=t.relatedContext;t.draggedContext;console.log(e.element)},testfn:function(t,e){},toggleFilled:function(t,e){console.log(t),"tripslot empty"==t.target.className?t.target.className="tripslot filled":(t.target.className="tripslot empty",console.log(t.detail))},slotdbl:function(t){this.$emit("slotdbl",t.target.id)}}},w={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"trip"},[n("b",{staticClass:"tripdate"},[t._v(t._s(t.trip.Date))]),n("p"),t._v(" "),n("div",{staticClass:"triptruck"},[t._v("\n      Truck: "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.seltruck,expression:"seltruck"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.seltruck=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"null"}},[t._v("None")]),t._v(" "),t._l(t.trucks,function(e){return n("option",{domProps:{value:e}},[t._v(t._s(e.LicensePlate)+" ("+t._s(e.CabSpots)+" seats)")])})],2),t._v(" "),null!=t.seltruck?n("div",{staticClass:"tripemps"},[n("p"),t._v("\n        Employees Assigned to trip:\n        "),t._l(t.seltruck.CabSpots,function(e){return n("select",[n("option",{attrs:{value:"Null"}},[t._v("None")]),t._v(" "),t._l(t.emps,function(e){return n("option",[t._v(" "+t._s(e.Firstname)+" "),e.Driverstatus?n("span",[t._v(" (DRIVER)")]):t._e()])})],2)}),t._v(" "),n("button",[t._v("Add New Employee")])],2):t._e(),t._v(" "),n("button",[t._v("Add New Truck")])]),t._v(" "),n("div",{staticClass:"tripcontent"},[n("draggable",{attrs:{list:t.trip,move:t.toggleFilled}},[t._l(t.stops,function(t){return n("stop-card",{attrs:{stop:t}})}),t._v(" "),t._l(t.triplen-t.stops.length,function(e){return n("div",{staticClass:"tripgrid"},[n("div",{staticClass:"tripslot empty",attrs:{id:e},on:{dblclick:t.slotdbl,click:function(e){return e.shiftKey?t.toggleFilled(e):null}}},[n("div",{staticClass:"slotcontents"})])])})],2)],1),t._v(" "),n("map-module",{staticClass:"tripmap",attrs:{waypoints:t.waypoints}}),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tripbtns"},[e("input",{staticClass:"savebtn",attrs:{type:"button",value:"Save Trip Order"}})])}]};var S=n("VU/8")(k,w,!1,function(t){n("Leje")},"data-v-f1cab81e",null).exports,A={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",[t._v("Add New Donor")]),t._v(" "),n("div",{staticClass:"fieldheader"},[t._v("\n\tDonor Name:")]),n("div",{staticClass:"fielditem"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newdon.firstname,expression:"newdon.firstname"}],attrs:{type:"text",placeholder:"First Name",id:"FirstName"},domProps:{value:t.newdon.firstname},on:{input:function(e){e.target.composing||t.$set(t.newdon,"firstname",e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newdon.lastname,expression:"newdon.lastname"}],attrs:{type:"text",placeholder:"Last Name",id:"LastName"},domProps:{value:t.newdon.lastname},on:{input:function(e){e.target.composing||t.$set(t.newdon,"lastname",e.target.value)}}})]),n("p"),t._v(" "),n("div",{staticClass:"fieldheader"},[t._v("\n\tDonor Address:")]),n("div",{staticClass:"fielditem"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newdon.address,expression:"newdon.address"}],attrs:{type:"text",placeholder:"Address",id:"Address"},domProps:{value:t.newdon.address},on:{input:function(e){e.target.composing||t.$set(t.newdon,"address",e.target.value)}}})]),n("p"),t._v(" "),n("div",{staticClass:"fieldheader"},[t._v("\n\tDonor Phone:")]),n("div",{staticClass:"fielditem"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newdon.phone,expression:"newdon.phone"}],attrs:{type:"tel",placeholder:"Phone Number",id:"Phone"},domProps:{value:t.newdon.phone},on:{input:function(e){e.target.composing||t.$set(t.newdon,"phone",e.target.value)}}})]),n("p"),t._v(" "),n("div",{staticClass:"fieldheader"},[t._v("\n\tDonor Email:")]),n("div",{staticClass:"fielditem"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newdon.email,expression:"newdon.email"}],attrs:{type:"email",placeholder:"Email",id:"Email"},domProps:{value:t.newdon.email},on:{input:function(e){e.target.composing||t.$set(t.newdon,"email",e.target.value)}}})]),n("p"),t._v(" "),n("div",{staticClass:"fieldheader"},[t._v("\n\tOther Info:")]),n("div",{staticClass:"fielditem"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newdon.other,expression:"newdon.other"}],attrs:{rows:"4",cols:"40",id:"Other",placeholder:"Special Instructions for contacting this donor"},domProps:{value:t.newdon.other},on:{input:function(e){e.target.composing||t.$set(t.newdon,"other",e.target.value)}}})])])},staticRenderFns:[]};var E=n("VU/8")({props:{},data:function(){return{newdon:{firstname:"",lastname:"",address:"",phone:"",email:"",other:""},olddon:{phone:"",email:""}}}},A,!1,function(t){n("vhSu")},null,null).exports,y={props:{trip:{type:Object,required:!1},trippos:{type:Object,required:!1}},components:{"new-donor-form":E},computed:{donors:function(){return this.$store.state.data.donors}},data:function(){return{oldDon:!1,newstop:{items:"",donorid:""}}},methods:{testfn:function(){alert("test")},commitStop:function(t){alert(t),this.$store.dispatch(this.$store,t)},toggleDon:function(){var t=document.getElementById("oldDonMenu"),e=document.getElementById("newDonMenu");"none"==t.style.display?(t.style.display="block",e.style.display="none"):(t.style.display="none",e.style.display="block")},validateDonor:function(){var t=document.getElementById("FirstName"),e=document.getElementById("LastName"),n=document.getElementById("Phone"),o=document.getElementById("Address"),s=document.getElementById("Email"),i=document.getElementById("Other"),a={firstname:t.value,lastname:e.value,address:o.value,phone:n.value,email:s.value,other:i.value},r={inputtime:1234,stoptype:"pickup",status:"Unmarked",hidden:"false",items:document.getElementById("Itemdesc"),donor:a};this.$store.dispatch("addStop",this.$store,r),alert(r)}}},C={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"title"},[t._v("Add New Stop ")]),t._v(" "),n("form",[t.loc?n("div",{attrs:{id:"window"}},[t._v(t._s(t.loc))]):t._e(),t._v(" "),n("div",{staticClass:"fieldheader"},[t._v("\nDescription of Items:\n")]),t._v(" "),n("div",{staticClass:"fielditem"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newstop.items,expression:"newstop.items"}],attrs:{rows:"4",cols:"50",id:"Itemdesc"},domProps:{value:t.newstop.items},on:{input:function(e){e.target.composing||t.$set(t.newstop,"items",e.target.value)}}})]),n("p"),t._v(" "),n("div",{staticClass:"fieldheader"},[t._v("\nDonor has donated before:\n"),n("div",{staticClass:"fielditem"},[n("button",{attrs:{id:"oldDonor"},on:{click:t.toggleDon}},[t._v("toggle")])])]),n("p"),t._v(" "),n("div",{staticStyle:{display:"none"},attrs:{id:"oldDonMenu"}},[n("h3",[t._v("Lookup Donor by:")]),n("p"),t._v("\nName:\n"),n("div",{attrs:{id:"donorselect"}},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.newstop.donorid,expression:"newstop.donorid"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.newstop,"donorid",e.target.multiple?n:n[0])}}},t._l(t.donors,function(e){return n("option",{domProps:{value:e.id}},[t._v(t._s(e.lastname)+", "+t._s(e.firstname)+" - "+t._s(e.phone))])})),t._v(" "),n("div",{attrs:{id:"addnewdon"},on:{click:t.testfn}},[t._v("+")])]),t._v(" "),n("div",{staticClass:"fieldheader"},[t._v("\n\t\tPhone: ")]),t._v(" "),t._m(0),n("p"),t._v(" "),n("div",{staticClass:"fieldheader"},[t._v("\n\t\tEmail: ")]),t._v(" "),t._m(1),n("p")]),t._v(" "),n("div",{staticStyle:{display:"block"},attrs:{id:"newDonMenu"}},[n("new-donor-form")],1),t._v(" "),n("br"),t._v(" "),n("button",{on:{click:t.validateDonor}},[t._v("Save")]),t._v(" "),n("button",[t._v("Cancel")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"fielditem"},[e("input",{attrs:{type:"tel",placeholder:"phone #"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"fielditem"},[e("input",{attrs:{type:"email",placeholder:"email address"}})])}]};var N=n("VU/8")(y,C,!1,function(t){n("l5g+")},"data-v-5f461b0e",null).exports,T={props:{trip:{type:Object,required:!1},pos:{type:Object,required:!1}},name:"Settings",data:function(){return{backend:"",mapapi:""}},methods:{showRestMenu:function(t){this.$modal.show("REST")},hideRestMenu:function(t){this.$modal.hide("REST")},showJsonMenu:function(t){this.$modal.show("JSON")},hideJsonMenu:function(t){this.$modal.hide("JSON")},showDockerMenu:function(t){this.$modal.show("Docker")},hideDockerMenu:function(t){this.$modal.hide("Docker")},findJSONFile:function(t){}}},D={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Settings"},[n("h1",[t._v("Settings")]),t._v(" "),n("b",{staticClass:"settingsheader"},[t._v("Backend:")]),t._v(" "),n("div",{staticClass:"settingssub"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.backend,expression:"backend"}],staticClass:"backrad",attrs:{type:"radio",id:"json",value:"JSON"},domProps:{checked:t._q(t.backend,"JSON")},on:{click:t.showJsonMenu,change:function(e){t.backend="JSON"}}}),t._v(" "),n("label",{attrs:{for:"json"}},[t._v("JSON File")]),t._v(" "),n("br"),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.backend,expression:"backend"}],staticClass:"backrad",attrs:{type:"radio",id:"rest",value:"REST"},domProps:{checked:t._q(t.backend,"REST")},on:{click:t.showRestMenu,change:function(e){t.backend="REST"}}}),t._v(" "),n("label",{attrs:{for:"rest"}},[t._v("RESTful API")]),t._v(" "),n("br"),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.backend,expression:"backend"}],staticClass:"backrad",attrs:{type:"radio",id:"docker",value:"Docker"},domProps:{checked:t._q(t.backend,"Docker")},on:{click:t.showDockerMenu,change:function(e){t.backend="Docker"}}}),t._v(" "),n("label",{attrs:{for:"rest"}},[t._v("Docker Container")])]),t._v(" "),n("b",{staticClass:"settingsheader"},[t._v("Map API Backend:")]),n("br"),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.mapapi,expression:"mapapi"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.mapapi=e.target.multiple?n:n[0]}}},[n("option",{staticClass:"backrad",attrs:{value:"OSV"}},[t._v("Open Street View")]),t._v(" "),t._m(0)]),t._v(" "),n("modal",{attrs:{name:"REST"}},[n("div",{attrs:{id:"spacing"}},[n("h1",[t._v("RESTful Endpoints:")]),t._v("\n\tIncoming (Stops):"),n("input",{attrs:{type:"url",placeholder:"Incoming endpoint URL"}}),n("p"),t._v("\n\tOutgoing (Trips):"),n("input",{attrs:{type:"url",placeholder:"Outgoing endpoint URL"}}),n("p"),t._v("\n\t(write/update permissions necessary to save to outgoing endpoint!)"),n("p"),t._v(" "),n("button",{on:{click:t.hideRestMenu}},[t._v("save")]),n("button",{on:{click:t.hideRestMenu}},[t._v("cancel")])])]),t._v(" "),n("modal",{attrs:{name:"JSON"}},[n("div",{attrs:{id:"spacing"}},[n("h1",[t._v("Local JSON File:")]),t._v("\n\tCreate Blank File: "),n("button",[t._v("New")]),n("p"),t._v("\n\tUpload Configured File: "),n("button",[t._v("Select")]),n("p"),t._v(" "),n("button",{on:{click:t.hideJsonMenu}},[t._v("save")]),n("button",{on:{click:t.hideJsonMenu}},[t._v("cancel")])])]),t._v(" "),n("modal",{attrs:{name:"Docker"}},[n("div",{attrs:{id:"spacing"}},[n("h1",[t._v("Docker Configuration:")]),t._v(" "),n("button",{on:{click:t.hideDockerMenu}},[t._v("save")]),n("button",{on:{click:t.hideDockerMenu}},[t._v("cancel")])])]),t._v(" "),n("p"),t._v(" "),n("b",[t._v("Help:")]),t._v(" "),t._m(1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("option",{staticClass:"backrad",attrs:{value:"GM"}},[this._v("Google Maps"),e("br")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"settingssub"},[e("a",{attrs:{href:"https://github.com/OrgansWithoutBodies/OHPickupAdmin/wiki/Home"}},[this._v("Link to wiki")])])}]};var O={name:"FrontEnd",mounted:function(){this.$store.dispatch("loadDataFrom")},components:{StopCard:l,DonorCard:a,TripCard:S,AddNewStop:N,Settings:n("VU/8")(T,D,!1,function(t){n("EkdG")},null,null).exports,draggable:b.a},data:function(){return{}},computed:{dragOptions:function(){return{animation:1,ghostClass:"ghost"}},seltrip:function(){var t=this;return this.trips.filter(function(e){return e.Date==t.selectedday})[0]},selectedday:{get:function(){return this.$store.state.selday},set:function(t){this.$store.dispatch("changeSelTrip",t)}},donors:{get:function(){return this.$store.state.donors},set:function(t){this.$store.dispatch("updateStopList",t)}},stoplist:{get:function(){return this.$store.state.stops},set:function(t){this.$store.dispatch("updateStopList",t)}},trips:function(){return this.$store.state.trips}},methods:{testfn:function(t){},addStopWind:function(t){this.$modal.show("AddNewStop",{pos:t})},commitStop:function(t){this.$store.dispatch(this.$store,t)},showSettings:function(t){this.$modal.show("ShowSettings")},showAbout:function(t){this.$modal.show("aboutPage")},onEnd:function(t){},onMove:function(t){console.log(t.draggedContext.element.id)}}},x={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"test"},[n("div",{staticClass:"tripcontrol"},[n("button",[t._v("◀")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedday,expression:"selectedday"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.selectedday=e.target.multiple?n:n[0]}}},t._l(t.trips,function(e){return n("option",{domProps:{value:e.Date}},[t._v(t._s(e.Date))])})),t._v(" "),n("button",[t._v("▶")]),t._v(" "),n("button",[t._v("+")])]),t._v(" "),n("trip-card",{attrs:{trip:t.seltrip},on:{slotdbl:t.addStopWind}}),t._v(" "),n("div",{staticClass:"unassignedbin"},[n("b",[t._v("Unassigned Stops Bin")]),t._v(" "),n("draggable",{staticClass:"bin",attrs:{options:t.dragOptions,list:t.trip,move:t.onMove},model:{value:t.stoplist,callback:function(e){t.stoplist=e},expression:"stoplist"}},t._l(t.stoplist,function(e){return null==e.ScheduledTrip?n("div",[n("stop-card",{attrs:{stop:e}})],1):t._e()}))],1),t._v(" "),n("button",[t._v(" ... ")]),n("p"),t._v(" "),n("button",{on:{click:t.addStopWind}},[t._v(" Add New Stop ")]),t._v(" "),n("button",[t._v(" Show Hidden Stops")]),n("p"),t._v(" "),n("button",[t._v(" Save Stops for this Trip")]),n("p"),t._v(" "),n("button",{on:{click:t.showSettings}},[t._v(" Show Settings Menu ")]),t._v(" "),n("button",{on:{click:t.showAbout}},[t._v(" About ")]),t._v(" "),n("modal",{staticClass:"newstopwindow",attrs:{name:"AddNewStop",adaptive:"true",height:"auto",scrollable:"true"}},[n("div",{attrs:{id:"spacing"}},[n("AddNewStop")],1)]),t._v(" "),n("modal",{attrs:{name:"ShowSettings",adaptive:"true",height:"auto"}},[n("div",{attrs:{id:"spacing"}},[n("Settings")],1)]),t._v(" "),n("modal",{attrs:{name:"aboutPage"}},[n("div",{attrs:{id:"spacing"}},[t._v("\n    Developed by:\n      V\n      "),n("p"),t._v("\n    Version:\n      0\n      "+t._s(t.version)+"\n  ")])])],1)},staticRenderFns:[]};var M={name:"App",components:{FrontEnd:n("VU/8")(O,x,!1,function(t){n("GUxT")},null,null).exports},data:{version:"0.0.2"}},R={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("front-end")],1)},staticRenderFns:[]};var I,U=n("VU/8")(M,R,!1,function(t){n("6pfs")},null,null).exports,L=n("//Fk"),P=n.n(L),B=n("bOdI"),J=n.n(B),z=n("NYxO"),F=n("mtWM"),H=n.n(F),V=n("Rf8U"),j=n.n(V);o.a.use(z.a),o.a.use(j.a,H.a);var q="http://localhost:8000/",K=q+"truck/api",Y=new z.a.Store({dbbackend:"REST",endpoint:q,mapbackend:"GM",state:{selday:"2018-11-13",donors:[],stops:[],trips:[],employees:[],trucks:[],geocodes:{}},mutations:(I={ADD_EMPLOYEE:function(t,e){t.employees.push(e)},ADD_DONOR:function(t,e){t.donors.push(e)},ADD_GEOCODES:function(t,e){for(var n in e)n in t.geocodes?console.log(t.geocodes):t.geocodes[n]=e[n];t.geocodes},ADD_STOP:function(t,e){t.stops.push(e)},ADD_TRIP:function(t,e){t.trips.push(e)},NEST_TRIP_IN_STOP:function(t,e,n){e.trip=t.trips.find(function(t){return t.id===n})},NEST_DONOR_IN_STOP:function(t,e,n){e.donor=t.donors.find(function(t){return t.id===n})},NEST_EMPLOYEE_IN_TRIP:function(){}},J()(I,"NEST_EMPLOYEE_IN_TRIP",function(){}),J()(I,"NEST_EMPLOYEE_IN_TRIP",function(){}),J()(I,"SET_DONORS",function(t,e){t.donors=e}),J()(I,"SET_EMPS",function(t,e){t.employees=e}),J()(I,"SET_STOPS",function(t,e){var n=[];for(var o in e){var s=e[o];s.Donor=t.donors.find(function(t){return t.id===s.RequesterId}),n.push(s)}t.stops=n}),J()(I,"SET_TRIPS",function(t,e){t.trips=e}),J()(I,"SET_TRUCKS",function(t,e){t.trucks=e}),J()(I,"UPDATE_STOPLIST_ORDER",function(t,e){t.stops=e}),J()(I,"UPDATE_SEL_TRIP",function(t,e){t.selday=e}),I),actions:{changeSelTrip:function(t,e){(0,t.commit)("UPDATE_SEL_TRIP",e)},geoCode:function(t,e){t.commit;return new P.a(function(t,n){var o=e.replace(new RegExp(" ","g"),"_"),s={method:"GET",url:q+"truck/geo/"+o+"/"};H()(s).then(function(e){return t(e)}).catch(function(t){return console.log(t)})})},loadGeoCodes:function(t,e){var n=t.commit,o=t.dispatch;for(var s in e){o("geoCode",e[s].add).then(function(t){n("ADD_GEOCODES",t.data)})}},loadDataFrom:function(t){var e=t.commit;"REST"==(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"REST")&&(H.a.get(K+"/donors/").then(function(t){return t.data}).then(function(t){e("SET_DONORS",t)}),H.a.get(K+"/trips/").then(function(t){return t.data}).then(function(t){e("SET_TRIPS",t)}),H.a.get(K+"/donations/").then(function(t){return t.data}).then(function(t){e("SET_DONATIONS",t)}),H.a.get(K+"/trucks/").then(function(t){return t.data}).then(function(t){e("SET_TRUCKS",t)}),H.a.get(K+"/employees/").then(function(t){return t.data}).then(function(t){e("SET_EMPS",t)}),H.a.get(K+"/stops/").then(function(t){return t.data}).then(function(t){e("SET_STOPS",t)}))},loadDonors:function(t){t.commit},minDist:function(t,e){t.commit;return new P.a(function(t,n){var o=[];for(var s in e){var i=e[s];o.push([i.lng,i.lat].join(","))}var a=o.join(";"),r=q+"truck/min/"+a+"/";console.log(r);var d={method:"GET",url:r};H()(d).then(function(t){return t.data}).then(function(e){return t(e)}).catch(function(t){return console.log(t)})})},updateStopList:function(t,e){(0,t.commit)("UPDATE_STOPLIST_ORDER",e)},postData:function(t,e){t.commit,arguments.length>2&&void 0!==arguments[2]&&arguments[2]}}}),X=n("rifk"),W=n.n(X);n("EYnv");o.a.use(W.a),o.a.config.productionTip=!1;delete m.L.Icon.Default.prototype._getIconUrl,m.L.Icon.Default.mergeOptions({iconRetinaUrl:n("qXhe"),iconUrl:n("TJ5S"),shadowUrl:n("wkq0")}),new o.a({el:"#app",store:Y,components:{App:U},template:"<App/>"})},Rew5:function(t,e){},TJ5S:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII="},fxJU:function(t,e){},"l5g+":function(t,e){},qXhe:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABSCAMAAAAhFXfZAAAC91BMVEVMaXEzeak2f7I4g7g3g7cua5gzeKg8hJo3grY4g7c3grU0gLI2frE0daAubJc2gbQwd6QzeKk2gLMtd5sxdKIua5g1frA2f7IydaM0e6w2fq41fK01eqo3grgubJgta5cxdKI1f7AydaQydaMxc6EubJgvbJkwcZ4ubZkwcJwubZgubJcydqUydKIxapgubJctbJcubZcubJcvbJYubJcvbZkubJctbJctbZcubJg2f7AubJcrbZcubJcubJcua5g3grY0fq8ubJcubJdEkdEwhsw6i88vhswuhcsuhMtBjMgthMsrg8srgss6is8qgcs8i9A9iMYtg8spgcoogMo7hcMngMonf8olfso4gr8kfck5iM8jfMk4iM8he8k1fro7itAgesk2hs8eecgzfLcofssdeMg0hc4cd8g2hcsxeLQbdsgZdcgxeLImfcszhM0vda4xgckzhM4xg84wf8Yxgs4udKsvfcQucqhUndROmdM1fK0wcZ8vb5w0eqpQm9MzeKhXoNVcpdYydKNWn9VZotVKltJFjsIwcJ1Rms9OlslLmtH///8+kc9epdYzd6dbo9VHkMM2f7FHmNBClM8ydqVcpNY9hro3gLM9hLczealQmcw3fa46f7A8gLMxc6I3eagyc6FIldJMl9JSnNRSntNNl9JPnNJFi75UnM9ZodVKksg8kM45jc09e6ZHltFBk883gbRBh7pDk9EwcaBzn784g7dKkcY2i81Om9M7j85Llc81is09g7Q4grY/j9A0eqxKmdFFltBEjcXf6fFImdBCiLxJl9FGlNFBi78yiMxVndEvbpo6js74+vx+psPP3+o/ks5HkcpGmNCjwdZCkNDM3ehYoNJEls+lxNkxh8xHks0+jdC1zd5Lg6r+/v/H2ufz9/o3jM3t8/edvdM/k89Th61OiLBSjbZklbaTt9BfptdjmL1AicBHj8hGk9FAgK1dkLNTjLRekrdClc/k7fM0icy0y9tgp9c4jc2NtM9Dlc8zicxeXZn3AAAAQ3RSTlMAHDdTb4yPA+LtnEQmC4L2EmHqB7XA0d0sr478x4/Yd5i1zOfyPkf1sLVq4Nh3FvjxopQ2/STNuFzUwFIwxKaejILpIBEV9wAABhVJREFUeF6s1NdyFEcY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"},vhSu:function(t,e){},wkq0:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAQAAAACach9AAACMUlEQVR4Ae3ShY7jQBAE0Aoz/f9/HTMzhg1zrdKUrJbdx+Kd2nD8VNudfsL/Th///dyQN2TH6f3y/BGpC379rV+S+qqetBOxImNQXL8JCAr2V4iMQXHGNJxeCfZXhSRBcQMfvkOWUdtfzlLgAENmZDcmo2TVmt8OSM2eXxBp3DjHSMFutqS7SbmemzBiR+xpKCNUIRkdkkYxhAkyGoBvyQFEJEefwSmmvBfJuJ6aKqKWnAkvGZOaZXTUgFqYULWNSHUckZuR1HIIimUExutRxwzOLROIG4vKmCKQt364mIlhSyzAf1m9lHZHJZrlAOMMztRRiKimp/rpdJDc9Awry5xTZCte7FHtuS8wJgeYGrex28xNTd086Dik7vUMscQOa8y4DoGtCCSkAKlNwpgNtphjrC6MIHUkR6YWxxs6Sc5xqn222mmCRFzIt8lEdKx+ikCtg91qS2WpwVfBelJCiQJwvzixfI9cxZQWgiSJelKnwBElKYtDOb2MFbhmUigbReQBV0Cg4+qMXSxXSyGUn4UbF8l+7qdSGnTC0XLCmahIgUHLhLOhpVCtw4CzYXvLQWQbJNmxoCsOKAxSgBJno75avolkRw8iIAFcsdc02e9iyCd8tHwmeSSoKTowIgvscSGZUOA7PuCN5b2BX9mQM7S0wYhMNU74zgsPBj3HU7wguAfnxxjFQGBE6pwN+GjME9zHY7zGp8wVxMShYX9NXvEWD3HbwJf4giO4CFIQxXScH1/TM+04kkBiAAAAAElFTkSuQmCC"}},["NHnr"]);
//# sourceMappingURL=app.77b15c384d87f50fd87a.js.map