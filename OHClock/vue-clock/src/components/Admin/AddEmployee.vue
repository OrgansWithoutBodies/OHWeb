<template>
  <div class="wrapper">
  Add New Employee
  <div v-for="f in fields">
  {{f}}:<input class="field">
  </div>
  <button>Save</button>
  </div>
</template>

<script>
export default {
  name: 'AddEmployee',
  components:{},
  methods:{
    checkUnique(){}
  },
  computed:{
  },
  data(){return{
    fields:['Name','Passphrase','etc']
  }},
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
  margin:10px;
  padding:10px;
}
.field{
  background-color:white;
  border:3px solid black;
  color:black;
  border-radius:4px;

    padding-left: 5px;
}
</style>
