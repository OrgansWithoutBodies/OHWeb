(function(e){function t(t){for(var o,s,i=t[0],c=t[1],u=t[2],d=0,p=[];d<i.length;d++)s=i[d],a[s]&&p.push(a[s][0]),a[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);l&&l(t);while(p.length)p.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(o=!1)}o&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},a={app:0},r=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0297":function(e,t,n){"use strict";var o=n("78c2"),a=n.n(o);a.a},"034f":function(e,t,n){"use strict";var o=n("64a9"),a=n.n(o);a.a},"0d07":function(e,t,n){},3767:function(e,t,n){},"4f2b":function(e,t,n){},"56a2":function(e,t,n){"use strict";var o=n("3767"),a=n.n(o);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("front-end",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},r=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[e._v("\n"+e._s(e.dons)+"\n"),n("button",{on:{click:e.testfn}},[e._v("test")]),n("donor-module",{attrs:{id:"donor"}}),n("dump-module",{attrs:{id:"dump"}}),n("print-module",{attrs:{id:"print"}}),n("div",{attrs:{id:"categorywrapper"}},e._l(e.cats,function(e){return n("category-module",{attrs:{category:e}})}),1)],1)},i=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modulewrapper"},[n("div",{staticClass:"category"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],staticClass:"inputcustom",attrs:{type:"number"},domProps:{value:e.selected},on:{input:function(t){t.target.composing||(e.selected=t.target.value)}}}),e._v("x \n    "),n("span",{staticClass:"categorylbl"},[e._v(e._s(e.category))])]),n("div",{staticClass:"inputwrapper"},e._l(e.test,function(t){return n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],staticClass:"inputbtn",attrs:{type:"radio",name:e.category,id:e.category+t},domProps:{value:t-1,checked:e._q(e.selected,t-1)},on:{change:function(n){e.selected=t-1}}}),n("label",{staticClass:"inputlbl",attrs:{for:e.category+t}},[e._v("\n      "+e._s(t-1)+"\n    ")])])}),0)])},u=[],l={name:"categoryModule",props:{msg:String,category:String},data:function(){return{test:6,colors:["red","orange","yellow","green","blue","purple"],selected:0}}},d=l,p=(n("62ef"),n("2877")),m=Object(p["a"])(d,c,u,!1,null,"b0fa933c",null),f=m.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modulewrapper"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],attrs:{type:"text",placeholder:"Enter Existing Donor"},domProps:{value:e.query},on:{input:function(t){t.target.composing||(e.query=t.target.value)}}}),n("Autocomplete",{attrs:{query:e.query},on:{selected:e.testfn}}),n("button",{on:{click:e.togglemodal}},[e._v("Add New Donor")]),n("p"),""!=e.selecteddonor?n("div",[n("button",{staticClass:"seldel",on:{click:e.clearsel}},[e._v("x")]),e._v("\n    "+e._s(e.selecteddonor.name[1])+", "+e._s(e.selecteddonor.name[0])+" donated:\n  ")]):e._e(),e.addingnew?n("add-new-donor-modal"):e._e()],1)},g=[],h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"autocomplete"},e._l(e.matches,function(t){return n("li",{staticClass:"match",attrs:{id:"match-"+t.id},on:{click:function(n){e.selectmatch(t.id)}}},[e._v("\n "+e._s(t.name[0])+" "+e._s(t.name[1])+" - "+e._s(t.phone)+" \n ")])}),0)},_=[],b=(n("7f7f"),n("6762"),n("2fdb"),{name:"Autocomplete",props:{query:String},methods:{selectmatch:function(e){this.$emit("selected",this.donors.filter(function(t){return t["id"]==e})[0])}},computed:{matches:function(){var e=this;if(""==this.query)return[];var t=this.donors.filter(function(t){return t["name"][0].toLowerCase().includes(e.query.toLowerCase())||t["name"][1].toLowerCase().includes(e.query.toLowerCase())||t["phone"].includes(e.query)});return t}},data:function(){return{donors:[{id:0,name:["ab","testerson"],phone:"12345",email:"test@test.com",business:"test"},{id:1,name:["cd","testerson"],phone:"1233",email:"test@tes.com"},{id:2,name:["ef","tost"],phone:"321",email:"t@test.cm"},{id:3,name:["gh","tast"],phone:"4",email:"bbst@test.com"}],highlightedsel:null}}}),y=b,w=(n("8124"),Object(p["a"])(y,h,_,!1,null,"0a8aacd8",null)),C=w.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modulewrapper"},[n("div",{staticClass:"bg"}),n("div",{staticClass:"pagewrapper"},[n("div",{staticClass:"page"},[e._v("\n    New Donor Info\n    "),e._l(e.fields,function(t){return n("div",[e._v("\n    "+e._s(t)+"\n    "),n("input")])}),n("div",{staticClass:"btndiv"},[n("button",{on:{click:e.cancelfn}},[e._v("Cancel")]),n("button",{on:{click:e.savefn}},[e._v("Save")])])],2)])])},O=[],x={name:"addNewDonorModal",components:{Autocomplete:C},mounted:function(){var e=this;document.addEventListener("keydown",function(t){e.$parent.addingnew&&27==t.keyCode&&(e.$parent.addingnew=!1)})},props:{msg:String,category:String},methods:{cancelfn:function(){this.$parent.addingnew=!1},savefn:function(){this.$parent.selecteddonor="test",this.$parent.addingnew=!1}},data:function(){return{test:5,query:"",fields:["First Name","Last Name","Business","Phone Number","Email"],selecteddonor:""}}},E=x,$=(n("56a2"),Object(p["a"])(E,S,O,!1,null,"56013716",null)),N=$.exports,j={name:"donorModule",components:{Autocomplete:C,addNewDonorModal:N},props:{msg:String,category:String},methods:{clearsel:function(){this.selecteddonor=""},testfn:function(e){this.selecteddonor=e,this.query=""},togglemodal:function(){this.addingnew=!this.addingnew}},data:function(){return{test:5,query:"",addingnew:!1,selecteddonor:""}}},k=j,D=(n("c38f"),Object(p["a"])(k,v,g,!1,null,"5c9f92d4",null)),q=D.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modulewrapper"},[n("span",{attrs:{id:"dumplbl"}},[e._v(" Dump Fee")]),n("div",{attrs:{id:"dumpbtns"}},e._l(e.fees,function(t,o){return n("div",{attrs:{id:t}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.selecteddump,expression:"selecteddump"}],staticClass:"dumpradio",attrs:{type:"radio",name:"dump",id:o},domProps:{value:o,checked:e._q(e.selecteddump,o)},on:{change:function(t){e.selecteddump=o}}}),n("label",{staticClass:"dumpbtn",attrs:{for:o}},[e._v(e._s(t)+" \n       "),o>0?n("span",[e._v("\n        ($"+e._s(o)+")\n       ")]):e._e()])])}),0),n("div",{attrs:{id:"customfee"}},[e._v("\n Custom Fee: "),n("span",{attrs:{id:"dollarwrapper"}},[e._v("$"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.selecteddump,expression:"selecteddump"}],attrs:{type:"number",min:"0",step:".1"},domProps:{value:e.selecteddump},on:{input:function(t){t.target.composing||(e.selecteddump=t.target.value)}}})])])])},P=[],T={name:"categoryModule",props:{msg:String,category:String},data:function(){return{selecteddump:0,fees:{0:"No Fee",20:"Small Fee",40:"Large Fee"}}}},A=T,F=(n("6fe2"),Object(p["a"])(A,M,P,!1,null,"665b7dac",null)),L=F.exports,R=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},B=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modulewrapper"},[n("button",[e._v("Save & Print Receipt")]),n("p"),n("button",[e._v("Save without Printing")])])}],I={name:"printModule",props:{msg:String,category:String},data:function(){return{test:5}}},J=I,G=(n("f1b2"),Object(p["a"])(J,R,B,!1,null,"aec3b026",null)),H=G.exports,K={name:"frontEnd",mounted:function(){this.$store.dispatch("loadDataFrom")},components:{categoryModule:f,donorModule:q,dumpModule:L,printModule:H},props:{msg:String},methods:{testfn:function(){console.log(this.$store._mutations)}},data:function(){return{cats:["Books","Furniture","Electronics","Household","Kitchen","Clothes","Toys","Misc."],dons:this.$store.state.donors}}},V=K,W=(n("0297"),Object(p["a"])(V,s,i,!1,null,"63504b20",null)),Y=W.exports,z={name:"app",components:{frontEnd:Y}},Q=z,U=(n("034f"),Object(p["a"])(Q,a,r,!1,null,null,null)),X=U.exports,Z=n("2f62"),ee=n("bc3a"),te=n.n(ee),ne=n("a7fe"),oe=n.n(ne);o["a"].use(Z["a"]),o["a"].use(oe.a,te.a);var ae=" http://localhost:8000/",re=ae+"dock/api/",se=new Z["a"].Store({highlightedtrip:"11/13/2018",dbbackend:"REST",endpoint:ae,mapbackend:"GM",state:{donors:[],data:{donors:[],donations:[],donationlines:[],donationcategories:[],categorymaps:[]}},mutations:{ADD_DONOR:function(e,t){e.employees.push(t)},SET_DONORS:function(e,t){e.donors.push(t)},ADD_DONATION:function(e,t,n){e.data.donations.push(t),e.data.donationlines.push(t)}},actions:{loadDataFrom:function(e){var t=e.commit,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"REST";"REST"==n&&te.a.get(re+"donors/").then(function(e){t("SET_DONORS",e.data)},function(e){console.log(e)})},postData:function(e,t){e.commit,arguments.length>2&&void 0!==arguments[2]&&arguments[2]}}}),ie=se;o["a"].config.productionTip=!1,new o["a"]({store:ie,render:function(e){return e(X)}}).$mount("#app")},"62ef":function(e,t,n){"use strict";var o=n("f606"),a=n.n(o);a.a},"64a9":function(e,t,n){},"6fe2":function(e,t,n){"use strict";var o=n("efa0"),a=n.n(o);a.a},"78c2":function(e,t,n){},8124:function(e,t,n){"use strict";var o=n("0d07"),a=n.n(o);a.a},ba61:function(e,t,n){},c38f:function(e,t,n){"use strict";var o=n("ba61"),a=n.n(o);a.a},efa0:function(e,t,n){},f1b2:function(e,t,n){"use strict";var o=n("4f2b"),a=n.n(o);a.a},f606:function(e,t,n){}});
//# sourceMappingURL=app.9b6b0d74.js.map