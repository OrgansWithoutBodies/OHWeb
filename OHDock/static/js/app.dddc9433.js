(function(e){function t(t){for(var o,r,i=t[0],c=t[1],u=t[2],d=0,p=[];d<i.length;d++)r=i[d],a[r]&&p.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);l&&l(t);while(p.length)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(o=!1)}o&&(s.splice(t--,1),e=r(r.s=n[0]))}return e}var o={},a={app:0},s=[];function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("64a9"),a=n.n(o);a.a},"112c":function(e,t,n){},"2e17":function(e,t,n){},3325:function(e,t,n){"use strict";var o=n("a05a"),a=n.n(o);a.a},"4f2b":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("front-end",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},s=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("div",{attrs:{id:"titlelbl"}},[e._v("DOCK DONATION TAKER")]),n("donor-module",{attrs:{id:"donor",donors:e.dons}}),n("dump-module",{attrs:{id:"dump"}}),n("print-module",{attrs:{id:"print"}}),n("div",{attrs:{id:"categorywrapper"}},e._l(e.cats,function(e){return n("category-module",{attrs:{category:e}})}),1)],1)},i=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modulewrapper"},[n("div",{staticClass:"category"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],staticClass:"inputcustom",attrs:{type:"number"},domProps:{value:e.selected},on:{input:function(t){t.target.composing||(e.selected=t.target.value)}}}),e._v("x \n    "),n("span",{staticClass:"categorylbl"},[e._v(e._s(e.category))])]),n("div",{staticClass:"inputwrapper"},e._l(e.test,function(t){return n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],staticClass:"inputbtn",attrs:{type:"radio",name:e.category,id:e.category+t},domProps:{value:t-1,checked:e._q(e.selected,t-1)},on:{change:function(n){e.selected=t-1}}}),n("label",{staticClass:"inputlbl",attrs:{for:e.category+t}},[e._v("\n      "+e._s(t-1)+"\n    ")])])}),0)])},u=[],l={name:"categoryModule",props:{msg:String,category:String},data:function(){return{test:6,colors:["red","orange","yellow","green","blue","purple"],selected:0}}},d=l,p=(n("cf07"),n("2877")),f=Object(p["a"])(d,c,u,!1,null,"4747bfc4",null),m=f.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modulewrapper"},[n("button",{staticClass:"adddon",on:{click:e.togglemodal}},[e._v("Add New Donor")]),n("div",{staticClass:"boxwrapper"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],attrs:{type:"text",placeholder:"Enter Existing Donor"},domProps:{value:e.query},on:{input:function(t){t.target.composing||(e.query=t.target.value)}}}),n("Autocomplete",{attrs:{query:e.query},on:{selected:e.testfn}})],1),n("p"),""!=e.selecteddonor?n("div",{staticClass:"seldon"},[n("button",{staticClass:"seldel",on:{click:e.clearsel}},[e._v("x")]),e._v("\n      "+e._s(e.selecteddonor.Firstname)+", "+e._s(e.selecteddonor.Lastname)+" donated:\n  ")]):e._e(),e.addingnew?n("add-new-donor-modal"):e._e()],1)},g=[],h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"autocomplete"},e._l(e.matches,function(t){return n("li",{staticClass:"match",attrs:{id:"match-"+t.id},on:{click:function(n){e.selectmatch(t.id)}}},[e._v("\n "+e._s(t.Firstname)+" "+e._s(t.Lastname)+" \n "),""!=t.Phone?n("span",[e._v("- "+e._s(t.Phone))]):e._e()])}),0)},_=[],b=(n("6762"),n("2fdb"),{name:"Autocomplete",props:{query:String},methods:{selectmatch:function(e){this.$emit("selected",this.donors.filter(function(t){return t["id"]==e})[0])}},computed:{donors:function(){return this.$store.state.donors},matches:function(){var e=this;if(""==this.query)return[];var t=this.donors.filter(function(t){return t["Firstname"].toLowerCase().includes(e.query.toLowerCase())||t["Lastname"].toLowerCase().includes(e.query.toLowerCase())||t["Phone"].includes(e.query)});return t}},data:function(){return{highlightedsel:null}}}),y=b,w=(n("9172"),Object(p["a"])(y,h,_,!1,null,"03dcfcf5",null)),C=w.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modulewrapper"},[n("div",{staticClass:"bg"}),n("div",{staticClass:"pagewrapper"},[n("div",{staticClass:"page"},[e._v("\n    New Donor Info\n    "),e._l(e.fields,function(t,o){return n("label",{attrs:{for:o}},[e._v("\n    "+e._s(o)+"\n    "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.fields[o],expression:"fields[k]"}],attrs:{name:o},domProps:{value:e.fields[o]},on:{input:function(t){t.target.composing||e.$set(e.fields,o,t.target.value)}}})])}),n("div",{staticClass:"btndiv"},[n("button",{on:{click:e.cancelfn}},[e._v("Cancel")]),n("button",{on:{click:e.savefn}},[e._v("Save")])])],2)])])},O=[],x={name:"addNewDonorModal",components:{Autocomplete:C},mounted:function(){var e=this;document.addEventListener("keydown",function(t){e.$parent.addingnew&&27==t.keyCode&&(e.$parent.addingnew=!1)})},props:{msg:String,category:String},methods:{validate:function(){console.log(this.fields["First Name"]);var e={};return e["Firstname"]=this.fields["First Name"],e["Lastname"]=this.fields["Last Name"],e["Phone"]=this.fields["Phone Number"],e["Email"]=this.fields["Email"],e["Business"]=this.fields["Business"],e},cancelfn:function(){this.$parent.addingnew=!1},savefn:function(){var e=this.validate();this.$parent.selecteddonor=e,this.$parent.addingnew=!1}},data:function(){return{test:5,query:"",fields:{"First Name":"","Last Name":"",Business:"","Phone Number":"",Email:""},selecteddonor:""}}},N=x,E=(n("3325"),Object(p["a"])(N,S,O,!1,null,"5350ca7a",null)),$=E.exports,P={name:"donorModule",components:{Autocomplete:C,addNewDonorModal:$},props:{donors:Array,msg:String,category:String},methods:{clearsel:function(){this.selecteddonor=""},testfn:function(e){this.selecteddonor=e,this.query=""},togglemodal:function(){this.addingnew=!this.addingnew}},data:function(){return{test:5,query:"",addingnew:!1,selecteddonor:""}}},D=P,j=(n("7975"),Object(p["a"])(D,v,g,!1,null,"cc39ddc2",null)),k=j.exports,q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modulewrapper"},[n("span",{attrs:{id:"dumplbl"}},[e._v(" Dump Fee")]),n("div",{attrs:{id:"dumpbtns"}},e._l(e.fees,function(t,o){return n("div",{attrs:{id:t}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.selecteddump,expression:"selecteddump"}],staticClass:"dumpradio",attrs:{type:"radio",name:"dump",id:o},domProps:{value:o,checked:e._q(e.selecteddump,o)},on:{change:function(t){e.selecteddump=o}}}),n("label",{staticClass:"dumpbtn",attrs:{for:o}},[e._v(e._s(t)+" \n       "),o>0?n("span",[e._v("\n        ($"+e._s(o)+")\n       ")]):e._e()])])}),0),n("div",{attrs:{id:"customfee"}},[e._v("\n   Custom Fee: "),n("span",{attrs:{id:"dollarwrapper"}},[e._v("$"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.selecteddump,expression:"selecteddump"}],attrs:{type:"number",min:"0",step:".1"},domProps:{value:e.selecteddump},on:{input:function(t){t.target.composing||(e.selecteddump=t.target.value)}}})])])])},M=[],F={name:"categoryModule",props:{msg:String,category:String},data:function(){return{selecteddump:0,fees:{0:"No Fee",20:"Small Fee",40:"Large Fee"}}}},A=F,L=(n("ef98"),Object(p["a"])(A,q,M,!1,null,"0da31ced",null)),T=L.exports,R=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},B=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modulewrapper"},[n("button",[e._v("Save & Print Receipt")]),n("p"),n("button",[e._v("Save without Printing")])])}],I={name:"printModule",props:{msg:String,category:String},data:function(){return{test:5}}},K=I,J=(n("f1b2"),Object(p["a"])(K,R,B,!1,null,"aec3b026",null)),G=J.exports,H={name:"frontEnd",mounted:function(){this.$store.dispatch("loadDataFrom")},components:{categoryModule:m,donorModule:k,dumpModule:T,printModule:G},props:{msg:String},methods:{testfn:function(){console.log(this.$store._mutations)}},data:function(){return{cats:["Books","Furniture","Electronics","Household","Kitchen","Clothes","Toys","Misc."]}}},V=H,W=(n("f864"),Object(p["a"])(V,r,i,!1,null,"2884aead",null)),Y=W.exports,z={name:"app",components:{frontEnd:Y}},Q=z,U=(n("034f"),Object(p["a"])(Q,a,s,!1,null,null,null)),X=U.exports,Z=n("2f62"),ee=n("bc3a"),te=n.n(ee),ne=n("a7fe"),oe=n.n(ne);o["a"].use(Z["a"]),o["a"].use(oe.a,te.a);var ae="http://oh.vsipaddress.com/",se=ae+"dock/api/",re=new Z["a"].Store({highlightedtrip:"11/13/2018",dbbackend:"REST",endpoint:ae,mapbackend:"GM",state:{donors:[],data:{donors:[],donations:[],donationlines:[],donationcategories:[],categorymaps:[]}},mutations:{ADD_DONOR:function(e,t){e.employees.push(t)},SET_DONORS:function(e,t){t.map(function(t){e.donors.push(t),console.log(t)})},ADD_DONATION:function(e,t,n){e.data.donations.push(t),e.data.donationlines.push(t)}},actions:{loadDataFrom:function(e){var t=e.commit,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"REST";"REST"==n&&te.a.get(se+"donors/").then(function(e){t("SET_DONORS",e.data)},function(e){console.log("couldnt set donors (from "+ae+")::"+e)})},postData:function(e,t){e.commit,arguments.length>2&&void 0!==arguments[2]&&arguments[2]}}}),ie=re;o["a"].config.productionTip=!1,new o["a"]({store:ie,render:function(e){return e(X)}}).$mount("#app")},"64a9":function(e,t,n){},7318:function(e,t,n){},7975:function(e,t,n){"use strict";var o=n("2e17"),a=n.n(o);a.a},9172:function(e,t,n){"use strict";var o=n("7318"),a=n.n(o);a.a},a05a:function(e,t,n){},c95e:function(e,t,n){},ccd7:function(e,t,n){},cf07:function(e,t,n){"use strict";var o=n("112c"),a=n.n(o);a.a},ef98:function(e,t,n){"use strict";var o=n("c95e"),a=n.n(o);a.a},f1b2:function(e,t,n){"use strict";var o=n("4f2b"),a=n.n(o);a.a},f864:function(e,t,n){"use strict";var o=n("ccd7"),a=n.n(o);a.a}});
//# sourceMappingURL=app.dddc9433.js.map