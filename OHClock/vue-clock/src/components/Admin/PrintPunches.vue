<template>
  <div class="punches">
  </div>
</template>

<script>
export default {
  name: 'PrintPunches',
  components:{},
  props: {
    msg: String
  },
  data(){
  	return{
  		'punches':this.$store.state.punches,
  		'datetofrom':[]
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
