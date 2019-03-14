<template>
<window-modal :headertitle="timeHeader()" class="wind">
  <div class="client">
    <client-settings class="settings"/>
    <time-clock @time="setTime" :showsec="showsec" :markers="markers" class="clock"/>
    <input class="punchinp"   v-model="input" @keyup.enter="validate"/>
  </div>
  </window-modal>
</template>

<script>
import WindowModal from './WindowModal'
import ClientSettings from './ClientSettings'
import TimeClock from './TimeClock'
export default {
  name: 'ClockClient',
  components:{TimeClock,ClientSettings,WindowModal},
  props: {
    msg: String
  },
  methods:{
   clean(inp){
    return inp.trim()
   },
   validate(){
    var timestamp=new Date() 
    var clin=this.clean(this.input)
    var valid=this.$store.state.employees.filter(emp => emp.passphrase==clin)
    if (valid.length>0){
      console.log(valid[0]['Firstname']+' '+valid[0]['Lastname'])
    }
    else{
      console.log('Not found!')
    }
    this.input=''
   },
   zeroPad(num){
          var zero=2-num.toString().length+1
          return Array(+(zero > 0 && zero)).join("0") + num;
        },
    timeHeader(){
      if(this.times.length>0){
      var time=this.zeroPad(this.times[0])+':'+this.zeroPad(this.times[1])+':'+this.zeroPad(this.times[2])
      var date=this.times[3].toString()+'/'+this.times[4].toString()+'/'+ this.times[5].toString()
        return date+'  '+time
      }
    },
    setTime(times){
      this.times=times
    }
  },
  data(){
  return{
  'markers':this.$store.state.settings.markers,
  'showsec':this.$store.state.settings.showsec,
  'slide':-1,
  'times':[],
  'input':''
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.wind{
  background-color:black;
}
.clock{
grid-area:clock;
}
.settings{
  grid-area:settings;
}
.client{

  margin:10px;
  border-radius:20px;
  display:grid;
  grid-template-areas:". . settings" 
    "clock clock clock"
    "punch punch punch";
    
    grid-template-rows:  1fr 8fr 1fr;
  grid-template-columns: 1fr 8fr 1fr;;
  grid-row-gap:10px;
  justify-items: center;

  background-color:red;
  padding:10px;
}
.punchinp{
  grid-area:punch;
  color:black;
    padding-left: 10px;
  background-color:white;
  border:9px solid black;
  border-radius:20px;
  width:70%
}
.counter{
  position:absolute;
  top:9%;
}
.slider{
  width:100%;
}
</style>
