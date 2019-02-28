<template>
  <div class="hello"> 

    <div class="weekbox">
    <button v-on:click="decreaseWeek"> < </button>
    Week Of {{startdate}}
      <div class="empty"/>
      <!--<div v-for="d in weeklen" class="weekdayheader">
      {{startdate}}
      </div>-->
    </div>
    <button v-on:click="increaseWeek"> > </button>
    <p>
    <daily-view/>
    <input class="customdate">

    <div class="whiteboard">
      <div>
          <div class="team" v-for="t in teams">
          <div class="teamheader">
            <div v-show="t.edit==false"><label @dblclick = "t.edit = true">{{t.title}} Team</label></div>  
            <input v-show="t.edit==true" v-model="t.title"  v-on:blur= "t.edit=false; $emit('update')"
          @keyup.enter = "t.edit=false; $emit('update')" @keyup.esc = "t.edit=false; $emit('update')"></input> 
            <button v-on:click="t.emps.push('test')">+</button>
            </div>
            <div class="employee" v-for="e in t.emps">
              <div class="empheader">

                 <div v-show="e.edit==false"><label @dblclick = "e.edit = true">{{e.title}} Team</label></div>  
            <input v-show="t.edit==true" v-model="t.title"  v-on:blur= "t.edit=false; $emit('update')"
          @keyup.enter = "t.edit=false; $emit('update')" @keyup.esc = "t.edit=false; $emit('update')"></input> 

                {{e}} - [hours]
              </div>
              <div class="day" v-for="d in weeklen">
                <div class="slot" @dblclick="assignShift(d,e)">
                 
                  <span v-show="testfn">
                  {{shifts[e+startdate+d]}}
                  </span>
                  <span v-if="!testfn"><!--not working-->
                    OFF
                  </span>

                </div>
                 <div  v-if="editingshift==e+d" class="shiftselwrapper">
                    Start:<vue-timepicker @change="saveShift($event,d,e)" hide-clear-button/>

                    End:<vue-timepicker @change="saveShift($event,d,e)" hide-clear-button/>
                    <input type="checkbox">Add P?</input>
                    <button>Save Shift</button>
                  </div>
              </div>
              <button v-on:click="t.emps.splice(t.emps.indexOf(e),1)">x</button>
            </div>
          </div>
      </div>
    </div>
    <button>Save Configuration</button>
    <button>Copy schedule from last week</button>
    <button>Export as spreadsheet</button>
    <button>Add new team</button>
  </div>
</template>

<script>
//@TODO - have draggable employees
import EmployeeShiftsCard from './EmployeeShiftsCard'
import DailyView from './DailyView'
import VueTimepicker from 'vue2-timepicker'
//escape timepicker on outside click/esc if no time entered
export default {
  name: 'HelloWorld',
  components:{DailyView,VueTimepicker},
  methods:{
  testfn:function(){return e+startdate+d in Object(shifts).keys()},
    increaseWeek:function(event){
      var newstart=new Date()
      newstart.setTime(this.startdate.getTime()+7*86400000)
      this.startdate=newstart
    },
    decreaseWeek:function(event){
      var newstart=new Date()
      newstart.setTime(this.startdate-7*86400000)
      this.startdate=newstart
    },
    assignShift:function(day,emp){
      this.editingshift=emp+day
    },
    saveShift:function(event,day,emp){
    console.log(event)
      this.shifts[emp+this.startdate+day]=[event.data['HH'],event.data['mm']]

    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      weeklen:7,
      shifts:{},
      startdate:new Date(),
      editingshift:null,
      employees:[{'name':'a'},{'name':'b'}],
      offtimes:[],
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
.shiftselwrapper{
  background-color:#dddddd;
  padding:5px;
}
.whiteboard{
  background-color:#eeeeee;
  color:#ff0000;
  width:1000px;
  height:auto;
  padding:10px;
}
.weekbox{
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
