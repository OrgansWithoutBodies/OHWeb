<template>
  <div class="adminauth wrapper">
    Please enter admin password:
    <input type="password" class="authinp">
  </div>
</template>

<script>
export default {
  name: 'AuthorizeAdmin',
  components:{},
  props: {
    msg: String
  },
  data(){
  	return{
  		'punches':this.$store.state.punches
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.wrapper{
  background-color:red;
  width:inherit;
  border-radius:10px;
  padding:10px;
  margin:10px;
}

.authinp{
background-color:white;
  border:3px solid black;
  color:black;
  border-radius:4px;

    padding-left: 5px;
}
</style>
