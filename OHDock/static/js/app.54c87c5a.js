(function(t){function e(e){for(var o,r,i=e[0],c=e[1],l=e[2],d=0,p=[];d<i.length;d++)r=i[d],s[r]&&p.push(s[r][0]),s[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,i=1;i<n.length;i++){var c=n[i];0!==s[c]&&(o=!1)}o&&(a.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},s={app:0},a=[];function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"01e3":function(t,e,n){"use strict";var o=n("d38d"),s=n.n(o);s.a},"034f":function(t,e,n){"use strict";var o=n("64a9"),s=n.n(o);s.a},"111d":function(t,e,n){},"2f8f":function(t,e,n){"use strict";var o=n("5147"),s=n.n(o);s.a},"40a3":function(t,e,n){"use strict";var o=n("4b66"),s=n.n(o);s.a},"4b61":function(t,e,n){"use strict";var o=n("cf86"),s=n.n(o);s.a},"4b66":function(t,e,n){},5147:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("front-end",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},a=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("div",{attrs:{id:"titlelbl"}},[t._v("DOCK DONATION TAKER")]),n("donor-module",{attrs:{id:"donor",donors:t.dons}}),n("dump-module",{attrs:{id:"dump"}}),n("print-module",{attrs:{id:"print"}}),n("donation-module",{attrs:{id:"don",cats:t.cats}})],1)},i=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modulewrapper"},[n("div",{attrs:{id:"categorywrapper"}},t._l(t.cats,function(t){return n("category",{attrs:{category:t}})}),1)])},l=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"catwrapper"},[n("div",{staticClass:"category"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],staticClass:"inputcustom",attrs:{type:"number"},domProps:{value:t.selected},on:{input:function(e){e.target.composing||(t.selected=e.target.value)}}}),t._v("x \n    "),n("span",{staticClass:"categorylbl"},[t._v(t._s(t.category))])]),n("div",{staticClass:"inputwrapper"},t._l(t.test,function(e){return n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],staticClass:"inputbtn",attrs:{type:"radio",name:t.category,id:t.category+e},domProps:{value:e-1,checked:t._q(t.selected,e-1)},on:{change:function(n){t.selected=e-1}}}),n("label",{staticClass:"inputlbl",attrs:{for:t.category+e}},[t._v("\n      "+t._s(e-1)+"\n    ")])])}),0)])},d=[],p={name:"categoryModule",props:{msg:String,category:String},data:function(){return{test:6,colors:["red","orange","yellow","green","blue","purple"],selected:0}}},m=p,f=(n("01e3"),n("2877")),v=Object(f["a"])(m,u,d,!1,null,"39c8d404",null),h=v.exports,g={name:"donationModule",computed:{donation:function(){}},components:{Category:h},props:{cats:Array}},_=g,b=(n("d8e5"),Object(f["a"])(_,c,l,!1,null,"8b1c27a8",null)),y=b.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modulewrapper"},[n("button",{staticClass:"adddon",on:{click:t.togglemodal}},[t._v("Add New Donor")]),n("Autocomplete",{staticClass:"auto",on:{selected:t.setsel}}),n("p"),t.isblank?t._e():n("div",{staticClass:"seldon"},[n("button",{staticClass:"seldel",on:{click:t.clearsel}},[t._v("x")]),t._v("\n      "+t._s(t.selecteddonor.Firstname)+", "+t._s(t.selecteddonor.Lastname)+" donated:\n  ")]),t.addingnew?n("add-new-donor-modal",{on:{sel:t.confsel,close:t.togglemodal}}):t._e()],1)},S=[],C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"boxwrapper"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],attrs:{type:"text",placeholder:"Enter Existing Donor"},domProps:{value:t.query},on:{keyup:[function(e){return"button"in e||!t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?t.matchup(e):null},function(e){return"button"in e||!t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?t.matchdown(e):null}],input:function(e){e.target.composing||(t.query=e.target.value)}}}),""!=t.query?n("ul",{staticClass:"autocomplete"},t._l(t.matches,function(e){return n("li",{staticClass:"match",attrs:{id:"match-"+e.id},on:{click:function(n){t.selectmatch(e.id)}}},[t._v("\n   "+t._s(e.Firstname)+" "+t._s(e.Lastname)+" \n   "),""!=e.Phone?n("span",[t._v("- "+t._s(e.Phone))]):t._e()])}),0):t._e()])},E=[],O=(n("6762"),n("2fdb"),{name:"Autocomplete",props:{},methods:{selectmatch:function(t){this.$emit("selected",this.donors.filter(function(e){return e["id"]==t})[0]),this.query=""},changematch:function(t){var e;e=null==this.highsel?0:this.highsel+t,this.highsel=e,this.matches[e]["id"],alert(this.highsel)},matchup:function(){this.changematch(1)},matchdown:function(){this.changematch(-1)}},computed:{donors:{get:function(){return this.$store.state.donors},set:function(){}},matches:function(){var t=this;if(""==this.query)return[];var e=this.donors.filter(function(e){return e["Firstname"].toLowerCase().includes(t.query.toLowerCase())||e["Lastname"].toLowerCase().includes(t.query.toLowerCase())||e["Phone"].includes(t.query)});return e}},data:function(){return{query:"",highsel:null,numspots:10}}}),D=O,N=(n("2f8f"),Object(f["a"])(D,C,E,!1,null,"46c62705",null)),$=N.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modulewrapper"},[n("div",{staticClass:"bg"}),n("div",{staticClass:"pagewrapper"},[n("div",{staticClass:"page"},[t._v("\n    New Donor Info\n    "),t._l(t.fields,function(e,o){return n("label",{attrs:{for:o}},[t._v("\n    "+t._s(o)+"\n    "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fields[o],expression:"fields[k]"}],attrs:{name:o},domProps:{value:t.fields[o]},on:{input:function(e){e.target.composing||t.$set(t.fields,o,e.target.value)}}})])}),n("div",{staticClass:"btndiv"},[n("button",{on:{click:t.cancelfn}},[t._v("Cancel")]),n("button",{on:{click:t.savefn}},[t._v("Save")])])],2)])])},x=[],P={name:"addNewDonorModal",components:{Autocomplete:$},mounted:function(){var t=this;document.addEventListener("keydown",function(e){t.$parent.addingnew&&27==e.keyCode&&t.cancelfn()})},props:{msg:String,category:String},methods:{validate:function(){console.log(this.fields["First Name"]);var t={};return t["Firstname"]=this.fields["First Name"],t["Lastname"]=this.fields["Last Name"],t["Phone"]=this.fields["Phone Number"],t["Email"]=this.fields["Email"],t["Business"]=this.fields["Business"],t},cancelfn:function(){this.$emit("close")},savefn:function(){var t=this.validate();this.$emit("sel",t)}},data:function(){return{test:5,query:"",fields:{"First Name":"","Last Name":"",Business:"","Phone Number":"",Email:""},selecteddonor:""}}},j=P,L=(n("a8e7"),Object(f["a"])(j,k,x,!1,null,"27fa414e",null)),M=L.exports,T={name:"donorModule",components:{Autocomplete:$,addNewDonorModal:M},props:{donors:Array,msg:String,category:String},methods:{clearsel:function(){this.selecteddonor=null},confsel:function(t){this.setsel(t),this.togglemodal()},setsel:function(t){this.selecteddonor=t},togglemodal:function(){this.addingnew=!this.addingnew}},computed:{isblank:function(){return null==this.selecteddonor},selecteddonor:{get:function(){return this.$store.state.seldonor},set:function(t){this.$store.dispatch("selDonor",t)}}},data:function(){return{test:5,addingnew:!1}}},A=T,F=(n("4b61"),Object(f["a"])(A,w,S,!1,null,"97a1a418",null)),q=F.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modulewrapper"},[n("span",{attrs:{id:"dumplbl"}},[t._v(" Dump Fee")]),n("div",{attrs:{id:"dumpbtns"}},t._l(t.fees,function(e,o){return n("div",{attrs:{id:e}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.selecteddump,expression:"selecteddump"}],staticClass:"dumpradio",attrs:{type:"radio",name:"dump",id:o},domProps:{value:o,checked:t._q(t.selecteddump,o)},on:{change:function(e){t.selecteddump=o}}}),n("label",{staticClass:"dumpbtn",attrs:{for:o}},[t._v(t._s(e)+" \n       "),o>0?n("span",[t._v("\n        ($"+t._s(o)+")\n       ")]):t._e()])])}),0),n("div",{attrs:{id:"customfee"}},[t._v("\n   Custom Fee: "),n("span",{attrs:{id:"dollarwrapper"}},[t._v("$"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.selecteddump,expression:"selecteddump"}],attrs:{type:"number",min:"0",step:".1"},domProps:{value:t.selecteddump},on:{input:function(e){e.target.composing||(t.selecteddump=e.target.value)}}})])])])},B=[],U={name:"dumpModule",computed:{selecteddump:{get:function(){return this.$store.state.seldump},set:function(t){this.$store.dispatch("selDump",t)}}},props:{msg:String,category:String},data:function(){return{fees:{0:"No Fee",20:"Small Fee",40:"Large Fee"}}}},I=U,K=(n("6907"),Object(f["a"])(I,R,B,!1,null,"6d343404",null)),J=K.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modulewrapper"},[n("button",{staticClass:"btn",on:{click:t.print}},[t._v("Save & Print Receipt")]),n("p"),n("button",{staticClass:"btn",on:{click:t.save}},[t._v("Save without Printing")])])},V=[],W={name:"printModule",props:{msg:String,category:String},methods:{print:function(){this.save()},save:function(){var t={dump:this.$store.state.seldump,donor:this.$store.state.seldonor,dons:this.$store.state.seldons};console.log(t)}},data:function(){return{test:5}}},Y=W,z=(n("61cc"),Object(f["a"])(Y,H,V,!1,null,"3a394fa0",null)),G=z.exports,Q={name:"frontEnd",mounted:function(){this.$store.dispatch("loadDataFrom")},components:{donationModule:y,donorModule:q,dumpModule:J,printModule:G},props:{msg:String},methods:{testfn:function(){console.log(this.$store._mutations)}},data:function(){return{cats:["Books","Furniture","Electronics","Household","Kitchen","Clothes","Toys","Misc."]}}},X=Q,Z=(n("40a3"),Object(f["a"])(X,r,i,!1,null,null,null)),tt=Z.exports,et={name:"app",components:{frontEnd:tt}},nt=et,ot=(n("034f"),Object(f["a"])(nt,s,a,!1,null,null,null)),st=ot.exports,at=n("2f62"),rt=n("bc3a"),it=n.n(rt),ct=n("a7fe"),lt=n.n(ct);o["a"].use(at["a"]),o["a"].use(lt.a,it.a);var ut="http://oh.vsipaddress.com/",dt=ut+"dock/api/",pt=dt+"donors/",mt=new at["a"].Store({state:{seldump:0,seldons:{},seldonor:null,donors:[],data:{donors:[],donations:[],donationlines:[],donationcategories:[],categorymaps:[]}},mutations:{ADD_DONOR:function(t,e){t.employees.push(e)},SET_DONORS:function(t,e){e.map(function(e){t.donors.push(e),console.log(e)})},SET_SELDONS:function(t,e){t.seldons=e},SET_SELDUMP:function(t,e){t.seldump=e},SET_SELDONOR:function(t,e){t.seldonor=e},ADD_DONATION:function(t,e,n){t.data.donations.push(e),t.data.donationlines.push(e)}},actions:{loadDataFrom:function(t){var e=t.commit,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"REST";"REST"==n&&it.a.get(pt).then(function(t){e("SET_DONORS",t.data)},function(t){console.log("couldnt set donors (from "+pt+"):: "+t)})},postData:function(t,e){t.commit,arguments.length>2&&void 0!==arguments[2]&&arguments[2]},selDons:function(t,e){var n=t.commit;n("SET_SELDONS",e)},selDump:function(t,e){var n=t.commit;n("SET_SELDUMP",e)},selDonor:function(t,e){var n=t.commit;n("SET_SELDONOR",e)}}}),ft=mt;o["a"].config.productionTip=!1,new o["a"]({store:ft,render:function(t){return t(st)}}).$mount("#app")},"61cc":function(t,e,n){"use strict";var o=n("70d6"),s=n.n(o);s.a},"64a9":function(t,e,n){},6907:function(t,e,n){"use strict";var o=n("111d"),s=n.n(o);s.a},"70d6":function(t,e,n){},a8e7:function(t,e,n){"use strict";var o=n("c6db"),s=n.n(o);s.a},c6db:function(t,e,n){},cf86:function(t,e,n){},d38d:function(t,e,n){},d8e5:function(t,e,n){"use strict";var o=n("da4e"),s=n.n(o);s.a},da4e:function(t,e,n){}});
//# sourceMappingURL=app.54c87c5a.js.map