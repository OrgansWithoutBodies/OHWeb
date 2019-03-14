<template>
  <div class="clock">
     <div class="wrapper">
        <div class="hrs" :style="{transform:hourRotate}"></div>
     </div> 
     <div class="wrapper">
        <div class="mins" :style="{transform:minuteRotate}"></div>
     </div>
     <div class="wrapper" :style="{transform:secondRotate}" v-show="showsec">
        <div class="secs"></div>
     </div>
        <div class="marker" v-for="(m,k) in markers" :style="{transform:markerAngle(k)}">
    <div :class="m"/>
    </div>
    <div class="helpbtn" @click="helpfn">?</div>
  </div>
</template>

<script>
//https://github.com/bestvist/vue-clock2/blob/master/src/vue-clock.vue
export default {
  name: 'TimeClock',
  props: {
  "markers":{},
  "time":{
    required:false
  }, "border":{
    required:false
  }, "showsec":{
    required:false,
    default:true
  }
  },
  computed:{
  },
  beforeMount(){this.times=[]},
  mounted() {
        let scale = this.$el.clientWidth / 120;
        scale = scale > 3 ? 3 : scale;
        this.transform = `scale(${scale})`;
        this.show();
    },
    destroyed() {
        if (this._timer) clearInterval(this._timer);
    },

    watch: {
        time() {
            this.show();
        }
    },
  methods: { 
        helpfn(){
        console.log('test')
        },
        markerAngle(ind){
          var l=this.markers.length
          var ang=ind/l*360
          return 'rotatez('+ang+'deg)'
        },
        show() {
            this.showTime();
            if (this._timer) clearInterval(this._timer);
            if (!this.time) {
                this._timer = setInterval(() => {
                    this.showTime();
                }, 1000);
            }
        },
        showTime() {
            let times;
            if (this.time) {
                //times = this.time.split(":");
                times=[Math.floor(this.time/(60*60))%24,Math.floor(this.time/(60))%60,this.time%60]
            } else {
                const now = new Date();
                times = [now.getHours(), now.getMinutes(), now.getSeconds(),now.getMonth()+1,now.getDate(),now.getFullYear()];
            }
            let hour = +times[0];
            hour = hour > 11 ? hour - 12 : hour;
            let minute = +times[1];
            let second = +times[2] || 0;
            let hourAngle = hour * 30 + minute * 6 / 360 * 30;
            let minuteAngle = minute * 6;
            let secondAngle = second * 6;
            this.hourRotate = `rotatez(${hourAngle}deg)`;
            this.minuteRotate = `rotatez(${minuteAngle}deg)`;
            this.secondRotate = `rotatez(${secondAngle}deg)`;
            this.$emit('time',times)
            this.times=times
        }
      },
  data(){
  return{

            transform: "scale(1)",
    hourRotate: "rotatez(0deg)",
    minuteRotate: "rotatez(0deg)",
    secondRotate: "rotatez(0deg)"
  }
  }
}
</script>

<style scoped lang="scss">
.clock{
 --hrwidth:3.5%;
  --minwidth:3.5%;
  --secwidth:1%;

  --hrheight:25%;
  --minheight:40%;
  --secheight:31%;

  --hroffset:2%;
  --minoffset:2%;
  --secoffset:.5%;
  
  border:30px solid black;
  box-shadow: inset 0 0 10px #aaa;
  background-color:white;
  border-radius:50%;
  width:16em;
  height:16em;
  position:relative;
}
.helpbtn{
  cursor:pointer;
  z-index:100;
  position:relative;
  color:white;
  bottom:-100%;
}
.marker{
    position: absolute;
    top: 0px;
    left: 50%;
    display: block;
    width: 20px;
    height: 50%;
    margin-left: -10px;
    padding-top: 4%;
    font-weight: 400;
    transform-origin: bottom;
    user-select: none;
    box-sizing: border-box;

}
.blackdot{
  background-color:black;
  border-radius:50%;
  width:20px;
  height:20px;
}
.smallblackdot{
  background-color:black;
  border-radius:50%;
  width:5px;
  height:5px;
}
.redtriangle{
position:relative;
left:-10px;
  width: 0; 
  height: 0; 
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 40px solid red;

}
.test{
  z-index:100;
  position:absolute;
}

.wrapper{
	position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index:999;
}

.hrs{
  box-shadow: 3px 0px 10px rgba(0,0,0,.3);
  background: #000;
  border-radius:5px;
  position: absolute;
  transform-origin: 50% calc(100% - 2*var(--hroffset));

  left:calc(50% - (var(--hrwidth)/2));
  width:var(--hrwidth);
  height:var(--hrheight);
  top: calc(50% - var(--hrheight) + var(--hroffset));
}
.mins{
  box-shadow: 3px 0px 10px rgba(0,0,0,.3);
  background: #000;
  border-radius:5px;
  position: absolute;
  transform-origin: 50% calc(100% - 2*var(--minoffset));

  left:calc(50% - (var(--minwidth)/2));
  width:var(--minwidth);
  height:var(--minheight);
  top: calc(50% - var(--minheight) + var(--minoffset))
}
.secs{
  box-shadow: 3px 3px 15px rgba(0,0,0,.3);
  background: red;
  border-radius:2px;
  position: absolute;
  transform-origin: 50% calc(100% - 2*var(--secoffset));

  left:calc(50% - (var(--secwidth)/2));
  width:var(--secwidth);
  height:var(--secheight);
  top: calc(50% - var(--secheight) + var(--secoffset))
}
</style>
