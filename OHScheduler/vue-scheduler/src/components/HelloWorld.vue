<template>
  <div class="hello"> 
    <button v-on:click="decreaseWeek"><</button>
    <button v-on:click="increaseWeek">></button>
    <div class="whiteboard">
      <div>
        <div class="weekheader">
        Week Of {{startdate}}
          <div class="empty"/>
          <!--<div v-for="d in weeklen" class="weekdayheader">
          {{startdate}}
          </div>-->
        </div>
          <div class="team" v-for="t in teams">
          <div class="teamheader">
            <div v-show="t.edit==false"><label @dblclick = "t.edit = true">{{t.title}} Team</label></div>  
            <input v-show="t.edit==true" v-model="t.title"  v-on:blur= "t.edit=false; $emit('update')"
          @keyup.enter = "t.edit=false; $emit('update')" @keyup.esc = "t.edit=false; $emit('update')"></input> 
            <button v-on:click="t.emps.push('test')">+</button>
            </div>
            <div class="employee" v-for="e in t.emps">
              <div class="empheader">
                {{e}} - [hours]
              </div>
              <div class="day" v-for="d in weeklen">
                <div class="slot"></div>
              </div>
              <button v-on:click="t.emps.splice(t.emps.indexOf(e),1)">x</button>
            </div>
          </div>
      </div>
    </div>
    <button>Copy schedule from last week</button>
    <button>Save as spreadsheet</button>
    <button>Add new team</button>
  </div>
</template>

<script>
import EmployeeShiftsCard from './EmployeeShiftsCard'
export default {
  name: 'HelloWorld',
  methods:{
    increaseWeek:function(event){
      var newstart=new Date()
      newstart.setTime(this.startdate.getTime()+7*86400000)
      this.startdate=newstart
    },
    decreaseWeek:function(event){
      var newstart=new Date()
      newstart.setTime(this.startdate-7*86400000)
      this.startdate=newstart
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      weeklen:7,
      startdate:new Date(),
      employees:[{'name':'a'},{'name':'b'}],
      teams:[{'title':'Management','edit':false,'emps':['Laurie','Ruth','Mark']},
            {'title':'Cashier/Processing','edit':false,'emps':['AliSara','Ebony','Lori','Candi','Skila','Tammi','Evette','Uriel']},
            {'title':'Ebay','edit':false,'emps':['Sarah']},
            {'title':'Clothing','edit':false,'emps':['Maria','Meghan']},
            {'title':'Dock/Receiving','edit':false,'emps':['Charly','Jimmy','John','Tony','V']},
            {'title':'Pricing','edit':false,'emps':['CJ','Francine','Teresa']},
            {'title':'Sales Floor','edit':false,'emps':['Aleesha']},
            {'title':'Volunteer Associates','edit':false,'emps':['Laurie','Ruth','Mark']},]
    }
  },
  computed(){
  return{
  }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.whiteboard{
  background-color:#eeeeee;
  color:#ff0000;
  width:1000px;
  height:auto;
  padding:10px;
}
.weekheader{
  display:grid;
  grid-template-columns:repeat(11,100px);
}
.weekdayheader{
  width:80px; 
}
.employee{
  
  display:grid;
  grid-template-columns:repeat(11,100px);
}
.slot{
  width:80px;
  height:30px;
  border:1px solid gray;
  background-color:#00ff00;
}
</style>
