(function(t){function e(e){for(var s,o,r=e[0],c=e[1],u=e[2],d=0,m=[];d<r.length;d++)o=r[d],i[o]&&m.push(i[o][0]),i[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);l&&l(e);while(m.length)m.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],s=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(s=!1)}s&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var s={},i={app:0},a=[];function o(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=s,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"12bb":function(t,e,n){"use strict";var s=n("ceaf"),i=n.n(s);i.a},"1b82":function(t,e,n){},"31b8":function(t,e,n){"use strict";var s=n("1b82"),i=n.n(s);i.a},"33fc":function(t,e,n){"use strict";var s=n("3594"),i=n.n(s);i.a},"346c":function(t,e,n){"use strict";var s=n("968d"),i=n.n(s);i.a},3594:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("a026"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("clock-client"),n("clock-admin")],1)},a=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("window-modal",{staticClass:"wind",attrs:{headertitle:t.timeHeader()}},[n("div",{staticClass:"client"},[n("client-settings",{staticClass:"settings"}),n("time-clock",{staticClass:"clock",attrs:{showsec:t.showsec,markers:t.markers},on:{time:t.setTime}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],staticClass:"punchinp",domProps:{value:t.input},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.validate(e)},input:function(e){e.target.composing||(t.input=e.target.value)}}})],1)])},r=[],c=(n("6b54"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"windowwrapper"},[n("div",{staticClass:"headerpane"},[n("div",{staticClass:"headertitle"},[t._v("\n    "+t._s(t.headertitle)+"\n    ")]),t._m(0)]),n("div",{staticClass:"windpane"},[t._t("default")],2)])}),u=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"btnwrapper"},[n("button",[t._v("_")]),n("button",[t._v("□")]),n("button",{staticClass:"xbutton"},[t._v("X")])])}],l={name:"WindowModal",props:{headertitle:{}}},d=l,m=(n("b9bd"),n("2877")),p=Object(m["a"])(d,c,u,!1,null,"e5d7ebae",null),h=p.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"settingswrapper"}},[n("svg",{staticClass:"settingsicon",attrs:{viewBox:"0 0 24 24"},on:{click:t.testfn}},[n("path",{staticClass:"settingspath",attrs:{fill:"#333333",d:"M19.43,12.97L21.54,14.63C21.73,14.78 21.78,15.05 21.66,15.27L19.66,18.73C19.54,18.95 19.27,19.03 19.05,18.95L16.56,17.94C16.04,18.34 15.5,18.67 14.87,18.93L14.5,21.58C14.46,21.82 14.25,22 14,22H10C9.75,22 9.54,21.82 9.5,21.58L9.13,18.93C8.5,18.68 7.96,18.34 7.44,17.94L4.95,18.95C4.73,19.03 4.46,18.95 4.34,18.73L2.34,15.27C2.21,15.05 2.27,14.78 2.46,14.63L4.57,12.97L4.5,12L4.57,11L2.46,9.37C2.27,9.22 2.21,8.95 2.34,8.73L4.34,5.27C4.46,5.05 4.73,4.96 4.95,5.05L7.44,6.05C7.96,5.66 8.5,5.32 9.13,5.07L9.5,2.42C9.54,2.18 9.75,2 10,2H14C14.25,2 14.46,2.18 14.5,2.42L14.87,5.07C15.5,5.32 16.04,5.66 16.56,6.05L19.05,5.05C19.27,4.96 19.54,5.05 19.66,5.27L21.66,8.73C21.78,8.95 21.73,9.22 21.54,9.37L19.43,11L19.5,12L19.43,12.97M6.5,12C6.5,12.58 6.59,13.13 6.75,13.66L4.68,15.36L5.43,16.66L7.95,15.72C8.69,16.53 9.68,17.12 10.8,17.37L11.24,20H12.74L13.18,17.37C14.3,17.13 15.3,16.54 16.05,15.73L18.56,16.67L19.31,15.37L17.24,13.67C17.41,13.14 17.5,12.58 17.5,12C17.5,11.43 17.41,10.87 17.25,10.35L19.31,8.66L18.56,7.36L16.06,8.29C15.31,7.47 14.31,6.88 13.19,6.63L12.75,4H11.25L10.81,6.63C9.69,6.88 8.69,7.47 7.94,8.29L5.44,7.35L4.69,8.65L6.75,10.35C6.59,10.87 6.5,11.43 6.5,12M12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5M12,10.5A1.5,1.5 0 0,0 10.5,12A1.5,1.5 0 0,0 12,13.5A1.5,1.5 0 0,0 13.5,12A1.5,1.5 0 0,0 12,10.5Z"}})]),t.modalvis?n("div",{staticClass:"settingspane"},[n("b",[t._v("Markers:")]),n("div",{staticClass:"setting",attrs:{id:"markers"}},[t._v("\n     [\n      "),t._l(t.settings.markers,function(e,s){return n("span",[n("div",{class:"marker "+e}),s<t.settings.markers.length-1?n("span",[t._v(",")]):t._e()])}),t._v("\n      ]\n      ")],2),n("br"),n("b",[t._v("Show Second Hand:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.settings.showsec,expression:"settings.showsec"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.settings.showsec)?t._i(t.settings.showsec,null)>-1:t.settings.showsec},on:{change:function(e){var n=t.settings.showsec,s=e.target,i=!!s.checked;if(Array.isArray(n)){var a=null,o=t._i(n,a);s.checked?o<0&&t.$set(t.settings,"showsec",n.concat([a])):o>-1&&t.$set(t.settings,"showsec",n.slice(0,o).concat(n.slice(o+1)))}else t.$set(t.settings,"showsec",i)}}})]):t._e()])},v=[],g={name:"ClientSettings",computed:{settings:{get:function(){return this.$store.state.settings},set:function(t){this.$store.dispatch("updateSettings",t)}}},methods:{testfn:function(){this.modalvis=!this.modalvis}},data:function(){return{modalvis:!1}}},_=g,w=(n("12bb"),Object(m["a"])(_,f,v,!1,null,"49c7edc3",null)),C=w.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"clock"},[n("div",{staticClass:"wrapper"},[n("div",{staticClass:"hrs",style:{transform:t.hourRotate}})]),n("div",{staticClass:"wrapper"},[n("div",{staticClass:"mins",style:{transform:t.minuteRotate}})]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showsec,expression:"showsec"}],staticClass:"wrapper",style:{transform:t.secondRotate}},[n("div",{staticClass:"secs"})]),t._l(t.markers,function(e,s){return n("div",{staticClass:"marker",style:{transform:t.markerAngle(s)}},[n("div",{class:e})])}),n("div",{staticClass:"helpbtn",on:{click:t.helpfn}},[t._v("?")])],2)},y=[],k={name:"TimeClock",props:{markers:{},time:{required:!1},border:{required:!1},showsec:{required:!1,default:!0}},computed:{},beforeMount:function(){this.times=[]},mounted:function(){var t=this.$el.clientWidth/120;t=t>3?3:t,this.transform="scale(".concat(t,")"),this.show()},destroyed:function(){this._timer&&clearInterval(this._timer)},watch:{time:function(){this.show()}},methods:{helpfn:function(){console.log("test")},markerAngle:function(t){var e=this.markers.length,n=t/e*360;return"rotatez("+n+"deg)"},show:function(){var t=this;this.showTime(),this._timer&&clearInterval(this._timer),this.time||(this._timer=setInterval(function(){t.showTime()},1e3))},showTime:function(){var t;if(this.time)t=[Math.floor(this.time/3600)%24,Math.floor(this.time/60)%60,this.time%60];else{var e=new Date;t=[e.getHours(),e.getMinutes(),e.getSeconds(),e.getMonth()+1,e.getDate(),e.getFullYear()]}var n=+t[0];n=n>11?n-12:n;var s=+t[1],i=+t[2]||0,a=30*n+6*s/360*30,o=6*s,r=6*i;this.hourRotate="rotatez(".concat(a,"deg)"),this.minuteRotate="rotatez(".concat(o,"deg)"),this.secondRotate="rotatez(".concat(r,"deg)"),this.$emit("time",t),this.times=t}},data:function(){return{transform:"scale(1)",hourRotate:"rotatez(0deg)",minuteRotate:"rotatez(0deg)",secondRotate:"rotatez(0deg)"}}},L=k,S=(n("a884"),Object(m["a"])(L,b,y,!1,null,"1d6417c8",null)),A=S.exports,E={name:"ClockClient",components:{TimeClock:A,ClientSettings:C,WindowModal:h},props:{msg:String},methods:{clean:function(t){return t.trim()},validate:function(){new Date;var t=this.clean(this.input),e=this.$store.state.employees.filter(function(e){return e.passphrase==t});e.length>0?console.log(e[0]["Firstname"]+" "+e[0]["Lastname"]):console.log("Not found!"),this.input=""},zeroPad:function(t){var e=2-t.toString().length+1;return Array(+(e>0&&e)).join("0")+t},timeHeader:function(){if(this.times.length>0){var t=this.zeroPad(this.times[0])+":"+this.zeroPad(this.times[1])+":"+this.zeroPad(this.times[2]),e=this.times[3].toString()+"/"+this.times[4].toString()+"/"+this.times[5].toString();return e+"  "+t}},setTime:function(t){this.times=t}},data:function(){return{markers:this.$store.state.settings.markers,showsec:this.$store.state.settings.showsec,slide:-1,times:[],input:""}}},P=E,T=(n("33fc"),Object(m["a"])(P,o,r,!1,null,"8e29bc4e",null)),$=T.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"admin"},[n("window-modal",{attrs:{headertitle:"Admin Authorization"}},[n("authorize-admin")],1),n("window-modal",[n("add-employee")],1),n("window-modal",[n("employee-list")],1),n("window-modal",[n("print-punches")],1),n("button",[t._v("Add Employee")]),n("button",[t._v("Add Admin")]),n("br"),n("button",[t._v("Add Punch")]),n("button",[t._v("Edit Punch")]),n("button",[t._v("Remove Punch")])],1)},x=[],M=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"adminauth wrapper"},[t._v("\n  Please enter admin password:\n  "),n("input",{staticClass:"authinp",attrs:{type:"password"}})])}],D={name:"AuthorizeAdmin",components:{},props:{msg:String},data:function(){return{punches:this.$store.state.punches}}},z=D,N=(n("9a7f"),Object(m["a"])(z,M,j,!1,null,"d91db7d0",null)),R=N.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("ul",{staticClass:"empcont"},t._l(t.employees,function(e){return n("li",[t._v("\n"+t._s(e.Firstname)+" "+t._s(e.Lastname)+"\n")])}),0)])},I=[],q={name:"EmployeeList",components:{},computed:{employees:{get:function(){return this.$store.state.employees},set:function(t){}}},props:{msg:String}},U=q,W=(n("346c"),Object(m["a"])(U,H,I,!1,null,"6dc18ba2",null)),Y=W.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"punches"})},G=[],J={name:"PrintPunches",components:{},props:{msg:String},data:function(){return{punches:this.$store.state.punches,datetofrom:[]}}},B=J,X=Object(m["a"])(B,F,G,!1,null,"27b05d27",null),Z=X.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[t._v("\nAdd New Employee\n"),t._l(t.fields,function(e){return n("div",[t._v("\n"+t._s(e)+":"),n("input",{staticClass:"field"})])}),n("button",[t._v("Save")])],2)},Q=[],V={name:"AddEmployee",components:{},methods:{checkUnique:function(){}},computed:{},data:function(){return{fields:["Name","Passphrase","etc"]}},props:{msg:String}},tt=V,et=(n("31b8"),Object(m["a"])(tt,K,Q,!1,null,"5f4ee54e",null)),nt=et.exports,st={name:"PunchAdmin",components:{EmployeeList:Y,PrintPunches:Z,AddEmployee:nt,AuthorizeAdmin:R,WindowModal:h},props:{msg:String}},it=st,at=Object(m["a"])(it,O,x,!1,null,"362d75fa",null),ot=at.exports,rt={name:"app",beforeCreate:function(){this.$store.dispatch("loadData")},components:{ClockClient:$,ClockAdmin:ot}},ct=rt,ut=(n("5c0b"),Object(m["a"])(ct,i,a,!1,null,null,null)),lt=ut.exports,dt=n("2f62"),mt=n("bc3a"),pt=n.n(mt),ht=n("a7fe"),ft=n.n(ht);s["a"].use(dt["a"]),s["a"].use(ft.a,pt.a);var vt="http://oh.vsipaddress.com/",gt=vt+"clock/api/",_t=new dt["a"].Store({state:{settings:{markers:["redtriangle","blackdot","blackdot","blackdot"],showsec:!0},admins:[],employees:[],punches:[],actions:[]},getters:{},mutations:{AUTH_ADMIN:function(t,e){t.seldons=e},ADD_EMPLOYEE:function(t,e){t.employees.push(e)},SET_EMPLOYEES:function(t,e){t.employees=e},ADD_ADMIN:function(t,e){t.admins.push(e)},SET_ADMINS:function(t,e){t.admins=e},ADD_PUNCH:function(t,e){t.punches.push(e)},SET_PUNCHES:function(t,e){t.punches=e},ADD_ACTION:function(t,e){t.actions.push(e)},SET_ACTIONS:function(t,e){t.actions=e},SET_SETTINGS:function(t,e){t.settings=e}},actions:{authenticateSession:function(t){t.commit},checkPass:function(){},loadData:function(t){var e=t.commit,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"REST";"REST"==n&&pt.a.get(gt+"employees/").then(function(t){e("SET_EMPLOYEES",t.data)},function(t){console.log(t)})},loadAdminData:function(t){t.commit},updateSettings:function(t,e){var n=t.commit;console.log("test"),n("SET_SETTINGS",e)},postData:function(t,e){t.commit,new Date;pt.a.post(gt+"donors/",e["Donor"],{withCredentials:!1,auth:{username:"admin",password:"1234"},responseType:"json"}).then(function(t){console.log(t)}).catch(function(t){console.log(t)})}}}),wt=_t;s["a"].config.productionTip=!1,new s["a"]({store:wt,render:function(t){return t(lt)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var s=n("5e27"),i=n.n(s);i.a},"5e27":function(t,e,n){},"858d":function(t,e,n){},"968d":function(t,e,n){},"99d8":function(t,e,n){},"9a7f":function(t,e,n){"use strict";var s=n("858d"),i=n.n(s);i.a},a884:function(t,e,n){"use strict";var s=n("e387"),i=n.n(s);i.a},b9bd:function(t,e,n){"use strict";var s=n("99d8"),i=n.n(s);i.a},ceaf:function(t,e,n){},e387:function(t,e,n){}});
//# sourceMappingURL=app.24c945ce.js.map