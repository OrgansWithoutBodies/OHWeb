<template>
  <div class="clock">
   <canvas ref="canvasclock"></canvas>
	   <div class="wrapper">
	   		<div class="hrs"></div>
	   </div>	
	   <div class="wrapper">
	   		<div class="mins"></div>
	   </div>
	   <div class="wrapper" v-if="showsec">
	   		<div class="secs"></div>
	   </div>
  </div>
</template>

<script>
export default {
  name: 'ClockModule',
  props: {
    time: String
  },
  computed:{
  
  },
  data(){
  return{
  	showsec:true,
  	test:'red'
  }
  }
}
</script>

<style scoped lang="scss">
.clock{
	background-color:gray;
	border-radius:50%;
	width:20em;
	height:20em;
	position:relative;
}

.wrapper{
	position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.hrs{
border:2px solid green;
	height:20%;
	left:48.75%;
	position: absolute;
  top: 30%;
  transform-origin: 50% 100%;
	width:2.5%;
}
</style>
