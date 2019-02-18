<template>
  <div id="app">
    <punch-clock msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import PunchClock from './components/PunchClock.vue'

export default {
  name: 'app',
  components: {
    PunchClock
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
