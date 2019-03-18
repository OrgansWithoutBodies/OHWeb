<template>
<modal :name="modalName" classes="test" :draggable="true"  :class="{active:focusedWind==modalName,inactive:focusedWind!=modalName}" :adaptive="true" :clickToClose="false"  height="auto" class="windowwrapper">
  <div class="headerpane" @click="focusIn">
    <div class="headertitle">
    {{headertitle}}
    </div>
    <div class="btnwrapper" slot="top-right">
      <button>_</button><button>□</button>
      <button @click="$modal.hide(modalName)" class="xbutton">X</button>
    </div>
  </div>
  <div class="windpane" @click="focusIn">
<slot class="slot"></slot>
</div>
</modal>
</template>
<script>
//https://stackoverflow.com/questions/4375255/windows-os-button-style-css
//https://openclipart.org/detail/169031/windows-7-window-buttons
export default{
	name:'WindowModal',
  computed:{
    focusedWind:{
      get:function(){return this.$store.state.focusedWind},
      set:function(wind){this.$store.dispatch('focusWind',wind)}
    }
  },
  props:{
  "headertitle":{
  },
  "modalName":{}
  },
  methods:{
  focusIn:function(){
  this.focusedWind=this.modalName
  },
  },
  data(){
  return{
    z:1000,
    focus:false
  }
  }
}
</script>
<style scoped>
.active{
  z-index:1000 !important;
}
.v--modal-overlay {
  background: transparent;
}
.inactive{
  z-index:999 !important;
}
.test{
  background:green
}
.headertitle{
  justify-self:start;
}
.windpane{
  border:3px solid gray;
  background-color:black;
}
.headerpane{
padding:7px;
user-select:none;
background-color:lightblue;
display:grid;
grid-template-columns:1fr 1fr;
  border:3px solid gray;
}
.windowwrapper{
--btn-glow_hover:#0f95af;
--btn-inset_hover:#fff;
--btn-shine_hover:#2cb1ea;
--btn-bg_hover:#259dd1;

--btn-bg:#999;
--btn-shine:#888;
--btn-inset:#eee;

--btn-inset_click:#fff;
--btn-glow_click:#0f95af;
--btn-shine_click:#2cb1ea;
--btn-bg_click:#259dd1;
z-index:9999;
width:fit-content;
padding:5px;
}
.xbutton{
--btn-glow_hover:#ed6104;
--btn-inset_hover:#fff;
--btn-shine_hover:#d35c0c;
--btn-bg_hover:#e26c1d;

--btn-bg:#d85945;
--btn-shine:#d63c24;
--btn-inset:#eee;
}

button{
  user-select:none;
  cursor:pointer; 
  border: 1px solid #707070;
  background-color: var(--btn-bg);
  box-shadow: inset 0 1px 2px var(--btn-inset), inset 0 -0.7em var(--btn-shine);
  padding: 3px 6px;
} 

button:first-child {
   border-bottom-left-radius:4px;
}
button:last-child {
   border-bottom-right-radius:4px;
}
button:hover {
  cursor:pointer;
  background-color: var(--btn-bg_hover);
  border: 1px solid #3C7FB1;
  box-shadow: inset 0 1px 2px var(--btn-inset_hover), inset 0 -0.7em var(--btn-shine_hover), 0 0 3px var(--btn-glow_hover);
}

button:active{
  background-color: var(--btn-bg_click);
  border: 1px solid #3C7FB1;
  box-shadow: inset 0 1px 2px var(--btn-inset_click), inset 0 -0.7em var(--btn-shine_click), 0 0 7px var(--btn-glow_click);
}
button[disabled], button[disabled]:hover{
  border: 1px solid #ADB2B5;
  text-shadow: 1px 1px #fff;
  cursor:default;
  background-color: #F4F4F4;
  box-shadow: inset 0 1px 2px #fff;
  -o-box-shadow: inset 0 1px 2px #fff;
  -webkit-box-shadow: inset 0 1px 2px #fff;
  -moz-box-shadow: inset 0 1px 2px #fff;
}

button:not(:last-child) {
  border-right: none;
}
.btnwrapper {
justify-self:end;
   cursor:pointer;
   letter-spacing:1px;
   font-size:12px;
}

</style>