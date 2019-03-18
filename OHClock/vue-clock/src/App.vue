<template>
  <div id="app">
    <button @click="$modal.show('ClockModal')">Show Clock</button>
    <button @click="$modal.show('AuthModal')">Show Admin</button>
    <button @click="$modal.show('EmpListModal')">Show Emps</button>
    <button @click="$modal.show('AddEmpModal')">Add Emp</button>
    <button @click="$modal.show('PrintPunchModal')">Print Punches</button>
    
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
