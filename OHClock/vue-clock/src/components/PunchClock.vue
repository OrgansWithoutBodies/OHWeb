<template>
  <div class="punch">
    <clock-module/>
    <input >
  </div>
</template>

<script>
import ClockModule from './ClockModule'
export default {
  name: 'PunchClock',
  components:{ClockModule},
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.punch{
  width:500px;
  background-color:red;
}
</style>
