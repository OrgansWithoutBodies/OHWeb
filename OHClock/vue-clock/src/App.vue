<template>
  <div id="app">
    <clock-client/>
    <clock-admin/>
  </div>
</template>

<script>
import ClockClient from './components/Client/ClockClient.vue'
import ClockAdmin from './components/Admin/ClockAdmin.vue'

export default {
  name: 'app',
  beforeCreate(){
  this.$store.dispatch('loadData')
  },
  components: {
    ClockClient,
    ClockAdmin
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
