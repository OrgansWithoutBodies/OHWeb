<template>
  <div class="wrapper">
  <ul class="empcont">
  <li v-for="e in employees">
{{e.Firstname}} {{e.Lastname}}
</li>
</ul>
  </div>
</template>

<script>
export default {
  name: 'EmployeeList',
  components:{},
  computed:{
  	employees:{
  		get:function(){return this.$store.state.employees},
  		set:function(emp){}
  	}
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.wrapper{
  background-color:red;
  width:fit-content;
  border-radius:10px;
  padding:10px;
  margin:10px;
}

.empcont{
border:2px solid black;
width:fit-content;
  height:50px;
  overflow:hidden; 
  overflow-y:scroll;
  background-color:white;
  border-radius:8px;
  list-style:none;
}
</style>
