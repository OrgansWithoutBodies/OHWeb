<template>
  <div class="admin">
  {{focus}}
      <window-modal modalName="AuthModal" headertitle="Admin Authorization">
  <authorize-admin/>
  </window-modal>
  
  <window-modal modalName="AddEmpModal">
    <add-employee/>
  </window-modal>
  <window-modal modalName="EmpListModal">
    <employee-list/>
  </window-modal>
    <window-modal modalName="PrintPunchModal">
    <print-punches/>
</window-modal>
  
<!--
	  <button>Add Employee</button>
    <button>Add Admin</button>
<br>
    <button>Add Punch</button>
    <button>Edit Punch</button>
    <button>Remove Punch</button>
    -->
  </div>
</template>

<script>
import AuthorizeAdmin from './AuthorizeAdmin'
import EmployeeList from './EmployeeList'
import PrintPunches from './PrintPunches'
import AddEmployee from './AddEmployee'
import WindowModal from './WindowModal'
export default {
  name: 'PunchAdmin',
  components:{EmployeeList,PrintPunches,AddEmployee,AuthorizeAdmin,WindowModal},
  props: {
    msg: String
  }
  ,data(){return{
    focus:this.$store.state.focusedWind
  }}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
