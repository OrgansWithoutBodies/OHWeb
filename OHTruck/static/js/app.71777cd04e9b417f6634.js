webpackJsonp([1],{"6pfs":function(t,e){},EkdG:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),s={name:"DonorCard",props:{donor:{type:Object,required:!0}},data:function(){return{donor:donor}}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("b",{staticClass:"name"},[t._v(" "+t._s(t.donor.lastname)+", "+t._s(t.donor.firstname))]),t._v(" "),n("p"),t._v(" "),n("i",{staticClass:"address"},[t._v(" "+t._s(t.donor.address))]),n("p"),t._v(" "),n("u",{staticClass:"phone"},[t._v(" "+t._s(t.donor.phone))]),t._v(" "),n("i",[t._v("Number of Donations from this donor")])])},staticRenderFns:[]};var i=n("VU/8")(s,a,!1,function(t){n("Rew5")},"data-v-15ffc494",null).exports,r={name:"StopCard",props:{stop:{type:Object,required:!0}},data:function(){return{stop:stop}},methods:{showCancel:function(t){this.$modal.show("CancelWarning")},toggleDon:function(t){var e=t.target.id,n=document.getElementById("donorinfo "+e);"none"==n.style.display?n.style.display="inline-block":n.style.display="none"}}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("div",{staticClass:"handle"},[t._v("\n  X\n  ")]),t._v(" "),n("b",{staticClass:"items"},[t._v(" Items:")]),t._v(" "+t._s(t.stop.items)+"\n  "),n("input",{staticClass:"updateitems",attrs:{type:"button",value:"Update Items"}}),n("p"),t._v(" "),n("b",{staticClass:"status"},[t._v(t._s(t.stop.status))]),t._v(" "),n("input",{staticClass:"called",attrs:{type:"button",value:"Mark as Called"}}),n("p"),t._v(" "),t._m(0),t._v(" "),n("input",{staticClass:"hidebtn",attrs:{type:"button",value:"Hide Stop"}}),t._v(" "),n("input",{staticClass:"delbtn",attrs:{type:"button",value:"Cancel Stop"},on:{click:t.showCancel}}),t._v(" "),n("modal",{attrs:{name:"CancelWarning",adaptive:"true"}},[n("div",{attrs:{id:"spacing"}},[n("h1",[t._v("Warning")]),t._v(": This will permanently delete information related to this stop. If you Hide the stop instead then all data will remain in database.\n      "),n("p"),t._v(" "),n("button",{on:{click:t.hideWarning}},[t._v("Keep Stop")]),t._v(" "),n("button",{on:{click:t.heedWarning}},[t._v("Cancel Stop")])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"responsediv"},[e("select",{attrs:{id:"response"}},[e("option",{attrs:{disabled:"",value:""}},[this._v(" Please Select Response Below ")]),this._v(" "),e("option",{attrs:{value:"confirmed"}},[this._v("Confirmed ")]),this._v(" "),e("option",{attrs:{value:"noans"}},[this._v("No Answer")])]),this._v(" "),e("button",[this._v("Save Response")]),e("p")])}]};var l=n("VU/8")(r,d,!1,function(t){n("w8Lt")},"data-v-d19284f6",null).exports,c=n("gRE1"),u=n.n(c),p={name:"mapmodule",data:function(){return{waypoints:[{lon:-121.9486,lat:38.3451},{lon:-121.9696,lat:38.287}],coords:{lon:"",lat:""}}},mounted:function(){},methods:{geocode:function(t){var e=this;this.$store.dispatch("geoCode",t.add).then(function(t){var n=t.data;console.log(n);var o=u()(n);e.coords.lat=o.lat,e.coords.lon=o.lon})},distbetween:function(){this.$store.dispatch("distBetween",[this.waypoints[0].lon,this.waypoints[0].lat],[this.waypoints[1].lon,this.waypoints[1].lat])}}},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\ntesting"),t._v("\n\n  Street Address:"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.coords.add,expression:"coords['add']"}],domProps:{value:t.coords.add},on:{input:function(e){e.target.composing||t.$set(t.coords,"add",e.target.value)}}}),t._v(" "),t._l(["lat","lon"],function(e){return n("input",{directives:[{name:"model",rawName:"v-model",value:t.coords[e],expression:"coords[l]"}],domProps:{value:t.coords[e]},on:{input:function(n){n.target.composing||t.$set(t.coords,e,n.target.value)}}})}),t._v(" "),n("button",{on:{click:function(e){t.geocode(t.coords)}}},[t._v("locate")]),t._v(" "),n("button",{on:{click:function(e){t.waypoints.push({lat:"",lon:""})}}},[t._v("+")]),t._v(" "),n("button",{on:{click:t.distbetween}},[t._v("dist")])],2)},staticRenderFns:[]};var m=n("VU/8")(p,v,!1,function(t){n("baji")},null,null).exports,_=n("DAYN"),f=n.n(_),h={components:{StopCard:l,draggable:f.a,mapModule:m},name:"TripCard",props:{trip:{type:Object,required:!0},triplen:{type:Object,required:!1,default:6}},data:function(){return{seltruck:""}},computed:{emps:{get:function(){return this.$store.state.employees},set:function(){}},trucks:{get:function(){return this.$store.state.trucks}}},methods:{onMove:function(t){var e=t.relatedContext;t.draggedContext;console.log(e.element)},testfn:function(t,e){console.log(t)},toggleFilled:function(t,e){"tripslot empty"==t.target.className?t.target.className="tripslot filled":(t.target.className="tripslot empty",alert(t.detail))},slotdbl:function(t){this.$emit("slotdbl",t.target.id)}}},g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"trip"},[n("b",{staticClass:"tripdate"},[t._v(t._s(t.trip.Date))]),n("p"),t._v(" \n    Truck: "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.seltruck,expression:"seltruck"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.seltruck=e.target.multiple?n:n[0]}}},t._l(t.trucks,function(e){return n("option",{domProps:{value:e}},[t._v(t._s(e.LicensePlate)+" ("+t._s(e.CabSpots)+" seats)")])})),t._v(" "),""!=t.seltruck?n("div",[n("p"),t._v("\n    Employees Assigned to trip:"),t._l(t.seltruck.CabSpots,function(e){return n("select",[n("option",[t._v("None")]),t._v(" "),t._l(t.emps,function(e){return n("option",[t._v(" "+t._s(e.Firstname))])})],2)})],2):t._e(),t._v(" "),n("div",{staticClass:"tripcontent"},[n("div",t._l(t.triplen,function(e){return n("div",{staticClass:"tripgrid"},[n("div",{staticClass:"tripslot empty",attrs:{id:e},on:{dblclick:t.slotdbl,click:function(e){return e.shiftKey?t.toggleFilled(e):null},dragenter:t.toggleFilled}},[n("div",{staticClass:"slotcontents"})])])}))]),t._v(" "),n("map-module"),t._v(" "),n("input",{attrs:{type:"button",value:"Minimize Trip Order by Maptime"}}),n("p"),t._v(" "),n("input",{staticClass:"savebtn",attrs:{type:"button",value:"Save Trip Order"}})],1)},staticRenderFns:[]};var b=n("VU/8")(h,g,!1,function(t){n("c0L6")},"data-v-3b5537d7",null).exports,w={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",[t._v("Add New Donor")]),t._v(" "),n("div",{staticClass:"fieldheader"},[t._v("\n\tDonor Name:")]),n("div",{staticClass:"fielditem"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newdon.firstname,expression:"newdon.firstname"}],attrs:{type:"text",placeholder:"First Name",id:"FirstName"},domProps:{value:t.newdon.firstname},on:{input:function(e){e.target.composing||t.$set(t.newdon,"firstname",e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newdon.lastname,expression:"newdon.lastname"}],attrs:{type:"text",placeholder:"Last Name",id:"LastName"},domProps:{value:t.newdon.lastname},on:{input:function(e){e.target.composing||t.$set(t.newdon,"lastname",e.target.value)}}})]),n("p"),t._v(" "),n("div",{staticClass:"fieldheader"},[t._v("\n\tDonor Address:")]),n("div",{staticClass:"fielditem"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newdon.address,expression:"newdon.address"}],attrs:{type:"text",placeholder:"Address",id:"Address"},domProps:{value:t.newdon.address},on:{input:function(e){e.target.composing||t.$set(t.newdon,"address",e.target.value)}}})]),n("p"),t._v(" "),n("div",{staticClass:"fieldheader"},[t._v("\n\tDonor Phone:")]),n("div",{staticClass:"fielditem"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newdon.phone,expression:"newdon.phone"}],attrs:{type:"tel",placeholder:"Phone Number",id:"Phone"},domProps:{value:t.newdon.phone},on:{input:function(e){e.target.composing||t.$set(t.newdon,"phone",e.target.value)}}})]),n("p"),t._v(" "),n("div",{staticClass:"fieldheader"},[t._v("\n\tDonor Email:")]),n("div",{staticClass:"fielditem"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newdon.email,expression:"newdon.email"}],attrs:{type:"email",placeholder:"Email",id:"Email"},domProps:{value:t.newdon.email},on:{input:function(e){e.target.composing||t.$set(t.newdon,"email",e.target.value)}}})]),n("p"),t._v(" "),n("div",{staticClass:"fieldheader"},[t._v("\n\tOther Info:")]),n("div",{staticClass:"fielditem"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newdon.other,expression:"newdon.other"}],attrs:{rows:"4",cols:"40",id:"Other",placeholder:"Special Instructions for contacting this donor"},domProps:{value:t.newdon.other},on:{input:function(e){e.target.composing||t.$set(t.newdon,"other",e.target.value)}}})])])},staticRenderFns:[]};var S=n("VU/8")({props:{},data:function(){return{newdon:{firstname:"",lastname:"",address:"",phone:"",email:"",other:""},olddon:{phone:"",email:""}}}},w,!1,function(t){n("vhSu")},null,null).exports,k={props:{trip:{type:Object,required:!1},trippos:{type:Object,required:!1}},components:{"new-donor-form":S},computed:{donors:function(){return this.$store.state.data.donors}},data:function(){return{oldDon:!1,newstop:{items:"",donorid:""}}},methods:{testfn:function(){alert("test")},commitStop:function(t){alert(t),this.$store.dispatch(this.$store,t)},toggleDon:function(){var t=document.getElementById("oldDonMenu"),e=document.getElementById("newDonMenu");"none"==t.style.display?(t.style.display="block",e.style.display="none"):(t.style.display="none",e.style.display="block")},validateDonor:function(){var t=document.getElementById("FirstName"),e=document.getElementById("LastName"),n=document.getElementById("Phone"),o=document.getElementById("Address"),s=document.getElementById("Email"),a=document.getElementById("Other"),i={firstname:t.value,lastname:e.value,address:o.value,phone:n.value,email:s.value,other:a.value},r={inputtime:1234,stoptype:"pickup",status:"Unmarked",hidden:"false",items:document.getElementById("Itemdesc"),donor:i};this.$store.dispatch("addStop",this.$store,r),alert(r)}}},y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"title"},[t._v("Add New Stop ")]),t._v(" "),n("form",[t.loc?n("div",{attrs:{id:"window"}},[t._v(t._s(t.loc))]):t._e(),t._v(" "),n("div",{staticClass:"fieldheader"},[t._v("\nDescription of Items:\n")]),t._v(" "),n("div",{staticClass:"fielditem"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newstop.items,expression:"newstop.items"}],attrs:{rows:"4",cols:"50",id:"Itemdesc"},domProps:{value:t.newstop.items},on:{input:function(e){e.target.composing||t.$set(t.newstop,"items",e.target.value)}}})]),n("p"),t._v(" "),n("div",{staticClass:"fieldheader"},[t._v("\nDonor has donated before:\n"),n("div",{staticClass:"fielditem"},[n("button",{attrs:{id:"oldDonor"},on:{click:t.toggleDon}},[t._v("toggle")])])]),n("p"),t._v(" "),n("div",{staticStyle:{display:"none"},attrs:{id:"oldDonMenu"}},[n("h3",[t._v("Lookup Donor by:")]),n("p"),t._v("\nName:\n"),n("div",{attrs:{id:"donorselect"}},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.newstop.donorid,expression:"newstop.donorid"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.newstop,"donorid",e.target.multiple?n:n[0])}}},t._l(t.donors,function(e){return n("option",{domProps:{value:e.id}},[t._v(t._s(e.lastname)+", "+t._s(e.firstname)+" - "+t._s(e.phone))])})),t._v(" "),n("div",{attrs:{id:"addnewdon"},on:{click:t.testfn}},[t._v("+")])]),t._v(" "),n("div",{staticClass:"fieldheader"},[t._v("\n\t\tPhone: ")]),t._v(" "),t._m(0),n("p"),t._v(" "),n("div",{staticClass:"fieldheader"},[t._v("\n\t\tEmail: ")]),t._v(" "),t._m(1),n("p")]),t._v(" "),n("div",{staticStyle:{display:"block"},attrs:{id:"newDonMenu"}},[n("new-donor-form")],1),t._v(" "),n("br"),t._v(" "),n("button",{on:{click:t.validateDonor}},[t._v("Save")]),t._v(" "),n("button",[t._v("Cancel")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"fielditem"},[e("input",{attrs:{type:"tel",placeholder:"phone #"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"fielditem"},[e("input",{attrs:{type:"email",placeholder:"email address"}})])}]};var E=n("VU/8")(k,y,!1,function(t){n("l5g+")},"data-v-5f461b0e",null).exports,C={props:{trip:{type:Object,required:!1},pos:{type:Object,required:!1}},name:"Settings",data:function(){return{backend:"",mapapi:""}},methods:{showRestMenu:function(t){this.$modal.show("REST")},hideRestMenu:function(t){this.$modal.hide("REST")},showJsonMenu:function(t){this.$modal.show("JSON")},hideJsonMenu:function(t){this.$modal.hide("JSON")},showDockerMenu:function(t){this.$modal.show("Docker")},hideDockerMenu:function(t){this.$modal.hide("Docker")},findJSONFile:function(t){}}},N={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Settings"},[n("h1",[t._v("Settings")]),t._v(" "),n("b",{staticClass:"settingsheader"},[t._v("Backend:")]),t._v(" "),n("div",{staticClass:"settingssub"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.backend,expression:"backend"}],staticClass:"backrad",attrs:{type:"radio",id:"json",value:"JSON"},domProps:{checked:t._q(t.backend,"JSON")},on:{click:t.showJsonMenu,change:function(e){t.backend="JSON"}}}),t._v(" "),n("label",{attrs:{for:"json"}},[t._v("JSON File")]),t._v(" "),n("br"),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.backend,expression:"backend"}],staticClass:"backrad",attrs:{type:"radio",id:"rest",value:"REST"},domProps:{checked:t._q(t.backend,"REST")},on:{click:t.showRestMenu,change:function(e){t.backend="REST"}}}),t._v(" "),n("label",{attrs:{for:"rest"}},[t._v("RESTful API")]),t._v(" "),n("br"),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.backend,expression:"backend"}],staticClass:"backrad",attrs:{type:"radio",id:"docker",value:"Docker"},domProps:{checked:t._q(t.backend,"Docker")},on:{click:t.showDockerMenu,change:function(e){t.backend="Docker"}}}),t._v(" "),n("label",{attrs:{for:"rest"}},[t._v("Docker Container")])]),t._v(" "),n("b",{staticClass:"settingsheader"},[t._v("Map API Backend:")]),n("br"),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.mapapi,expression:"mapapi"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.mapapi=e.target.multiple?n:n[0]}}},[n("option",{staticClass:"backrad",attrs:{value:"OSV"}},[t._v("Open Street View")]),t._v(" "),t._m(0)]),t._v(" "),n("modal",{attrs:{name:"REST"}},[n("div",{attrs:{id:"spacing"}},[n("h1",[t._v("RESTful Endpoints:")]),t._v("\n\tIncoming (Stops):"),n("input",{attrs:{type:"url",placeholder:"Incoming endpoint URL"}}),n("p"),t._v("\n\tOutgoing (Trips):"),n("input",{attrs:{type:"url",placeholder:"Outgoing endpoint URL"}}),n("p"),t._v("\n\t(write/update permissions necessary to save to outgoing endpoint!)"),n("p"),t._v(" "),n("button",{on:{click:t.hideRestMenu}},[t._v("save")]),n("button",{on:{click:t.hideRestMenu}},[t._v("cancel")])])]),t._v(" "),n("modal",{attrs:{name:"JSON"}},[n("div",{attrs:{id:"spacing"}},[n("h1",[t._v("Local JSON File:")]),t._v("\n\tCreate Blank File: "),n("button",[t._v("New")]),n("p"),t._v("\n\tUpload Configured File: "),n("button",[t._v("Select")]),n("p"),t._v(" "),n("button",{on:{click:t.hideJsonMenu}},[t._v("save")]),n("button",{on:{click:t.hideJsonMenu}},[t._v("cancel")])])]),t._v(" "),n("modal",{attrs:{name:"Docker"}},[n("div",{attrs:{id:"spacing"}},[n("h1",[t._v("Docker Configuration:")]),t._v(" "),n("button",{on:{click:t.hideDockerMenu}},[t._v("save")]),n("button",{on:{click:t.hideDockerMenu}},[t._v("cancel")])])]),t._v(" "),n("p"),t._v(" "),n("b",[t._v("Help:")]),t._v(" "),t._m(1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("option",{staticClass:"backrad",attrs:{value:"GM"}},[this._v("Google Maps"),e("br")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"settingssub"},[e("a",{attrs:{href:"https://github.com/OrgansWithoutBodies/OHPickupAdmin/wiki/Home"}},[this._v("Link to wiki")])])}]};var D={name:"FrontEnd",mounted:function(){this.$store.dispatch("loadDataFrom")},components:{StopCard:l,DonorCard:i,TripCard:b,AddNewStop:E,Settings:n("VU/8")(C,N,!1,function(t){n("EkdG")},null,null).exports,draggable:f.a},data:function(){return{}},computed:{dragOptions:function(){return{animation:1,ghostClass:"ghost"}},selectedday:{get:function(){return this.$store.state.selday},set:function(t){this.$store.dispatch("changeSelTrip",t)}},donors:{get:function(){return this.$store.state.donors},set:function(t){this.$store.commit("updateStopList",t)}},stoplist:{get:function(){return this.$store.state.stops},set:function(t){this.$store.commit("updateStopList",t)}},trips:function(){return this.$store.state.trips}},methods:{testfn:function(t){},addStopWind:function(t){this.$modal.show("AddNewStop",{pos:t})},commitStop:function(t){this.$store.dispatch(this.$store,t)},showSettings:function(t){this.$modal.show("ShowSettings")},showAbout:function(t){this.$modal.show("aboutPage")},onEnd:function(t){},checkMove:function(t,e){}}},T={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"test"},[n("div",{staticClass:"tripcontrol"},[n("button",[t._v("◀")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedday,expression:"selectedday"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.selectedday=e.target.multiple?n:n[0]}}},t._l(t.trips,function(e){return n("option",{domProps:{value:e.Date}},[t._v(t._s(e.Date))])})),t._v(" "),n("button",[t._v("▶")]),t._v(" "),n("button",[t._v("+")])]),t._v("\n  Donors:"+t._s(t.donors)+"\n  "),n("trip-card",{attrs:{trip:t.trips[0]},on:{slotdbl:t.addStopWind}}),t._v(" "),n("div",{staticClass:"unassignedbin"},[n("b",[t._v("Unassigned Stops Bin")]),t._v(" "),n("draggable",{attrs:{list:t.stops,options:t.dragOptions,move:t.onMove}},t._l(t.stoplist,function(t){return n("div",[n("stop-card",{attrs:{stop:t}})],1)}))],1),t._v(" "),n("button",[t._v(" ... ")]),n("p"),t._v(" "),n("button",{on:{click:t.addStopWind}},[t._v(" Add New Stop ")]),t._v(" "),n("button",[t._v(" Show Hidden Stops")]),n("p"),t._v(" "),n("button",[t._v(" Save Stops for this Trip")]),n("p"),t._v(" "),n("button",{on:{click:t.showSettings}},[t._v(" Show Settings Menu ")]),t._v(" "),n("button",{on:{click:t.showAbout}},[t._v(" About ")]),t._v(" "),n("modal",{staticClass:"newstopwindow",attrs:{name:"AddNewStop",adaptive:"true",height:"auto",scrollable:"true"}},[n("div",{attrs:{id:"spacing"}},[n("AddNewStop")],1)]),t._v(" "),n("modal",{attrs:{name:"ShowSettings",adaptive:"true",height:"auto"}},[n("div",{attrs:{id:"spacing"}},[n("Settings")],1)]),t._v(" "),n("modal",{attrs:{name:"aboutPage"}},[n("div",{attrs:{id:"spacing"}},[t._v("\n      Developed by:\n        V\n        "),n("p"),t._v("\n      Version:\n        0\n        "+t._s(t.version)+"\n    ")])])],1)},staticRenderFns:[]};var O={name:"App",components:{FrontEnd:n("VU/8")(D,T,!1,function(t){n("R+ZQ")},null,null).exports},data:{version:"0.0.2"}},P={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("front-end")],1)},staticRenderFns:[]};var R,$=n("VU/8")(O,P,!1,function(t){n("6pfs")},null,null).exports,I=n("//Fk"),M=n.n(I),A=n("bOdI"),x=n.n(A),F=n("NYxO"),L=n("mtWM"),U=n.n(L),B=n("Rf8U"),J=n.n(B);o.a.use(F.a),o.a.use(J.a,U.a);var j="http://localhost:8000/truck/api",V=new F.a.Store({dbbackend:"REST",endpoint:"http://localhost:8000/",mapbackend:"GM",state:{selday:"11/13/2018",donors:[],stops:[],trips:[],employees:[],trucks:[],latlons:[]},mutations:(R={ADD_EMPLOYEE:function(t,e){t.employees.push(e)},ADD_DONOR:function(t,e){t.donors.push(e)},ADD_STOP:function(t,e){t.stops.push(e)},ADD_TRIP:function(t,e){t.trips.push(e)},NEST_TRIP_IN_STOP:function(t,e,n){e.trip=t.trips.find(function(t){return t.id===n})},NEST_DONOR_IN_STOP:function(t,e,n){e.donor=t.donors.find(function(t){return t.id===n})},NEST_EMPLOYEE_IN_TRIP:function(){}},x()(R,"NEST_EMPLOYEE_IN_TRIP",function(){}),x()(R,"NEST_EMPLOYEE_IN_TRIP",function(){}),x()(R,"SET_DONORS",function(t,e){t.donors=e}),x()(R,"SET_EMPS",function(t,e){t.employees=e}),x()(R,"SET_STOPS",function(t,e){t.stops=e}),x()(R,"SET_TRIPS",function(t,e){t.trips=e}),x()(R,"SET_TRUCKS",function(t,e){t.trucks=e}),x()(R,"UPDATE_STOPLIST_ORDER",function(t,e){t.stops=e}),x()(R,"UPDATE_SEL_TRIP",function(t,e){t.selday=e}),R),actions:{addStop:function(t,e,n){var o=t.commit;U.a.post("http://localhost:8000//stops",n).then(function(t){o("ADD_STOP",n)}).then(function(t){}).catch(function(t){})},changeSelTrip:function(t,e){(0,t.commit)("UPDATE_SEL_TRIP",e)},distBetween:function(t){t.commit;var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[-121.9486,38.3451],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[-121.9696,38.287],o="http://localhost:5000/route/v1/driving/"+e[0]+","+e[1]+";"+n[0]+","+n[1]+"?overview=false";console.log(o);U.a.get(o).then(function(t){return console.log(t.data.routes[0].distance/1e3*.6213712)}).catch(function(t){return console.log(t)})},geoCode:function(t,e){t.commit;return new M.a(function(t,n){var o={method:"GET",url:"http://localhost:8000/truck/geo/"+e.replace(new RegExp(" ","g"),"_")+"/",headers:{}};console.log(o),U()(o).then(function(e){return t(e)}).catch(function(t){return console.log(t)})})},loadDataFrom:function(t){var e=t.commit;"REST"==(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"REST")&&(U.a.get(j+"/donors/").then(function(t){return t.data}).then(function(t){e("SET_DONORS",t)}),U.a.get(j+"/trips/").then(function(t){return t.data}).then(function(t){e("SET_TRIPS",t)}),U.a.get(j+"/donations/").then(function(t){return t.data}).then(function(t){e("SET_DONATIONS",t)}),U.a.get(j+"/trucks/").then(function(t){return t.data}).then(function(t){e("SET_TRUCKS",t)}),U.a.get(j+"/employees/").then(function(t){return t.data}).then(function(t){e("SET_EMPS",t)}),U.a.get(j+"/stops/").then(function(t){return t.data}).then(function(t){e("SET_STOPS",t)}))},loadDonors:function(t){t.commit},updateStopList:function(t,e){var n=t.commit;alert(e),n("UPDATE_STOPLIST_ORDER",e)},postData:function(t,e){t.commit,arguments.length>2&&void 0!==arguments[2]&&arguments[2]}}}),q=n("rifk"),W=n.n(q);o.a.use(W.a),o.a.config.productionTip=!1;new o.a({el:"#app",store:V,components:{App:$},template:"<App/>"})},"R+ZQ":function(t,e){},Rew5:function(t,e){},baji:function(t,e){},c0L6:function(t,e){},"l5g+":function(t,e){},vhSu:function(t,e){},w8Lt:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.71777cd04e9b417f6634.js.map