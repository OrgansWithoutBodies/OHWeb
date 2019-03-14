import Vue from 'vue'

import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex) // only required if you're using modules.
              // We're using modules, so there you go.
Vue.use(VueAxios, axios)
const endpoint = process.env.VUE_APP_ENDPOINT
const dataep = endpoint+'clock/api/'
const store = new Vuex.Store({
//
  state: {
    settings:{
      'markers':['redtriangle','blackdot','blackdot','blackdot'],
     //'markers':['redtriangle','smallblackdot','smallblackdot','blackdot','smallblackdot','smallblackdot','blackdot','smallblackdot','smallblackdot','blackdot','smallblackdot','smallblackdot',],
     'showsec':true,
    },
    admins:[],
    employees:[],
    punches:[],
    actions:[],
  },
//
  getters:{
   
  },
//
  mutations: {
    'AUTH_ADMIN':function(t,e){t.seldons=e},
    'ADD_EMPLOYEE'(state,emp){
      state.employees.push(emp)
    },
    'SET_EMPLOYEES'(state,emps){
        state.employees=emps
    },
    'ADD_ADMIN'(state,adm){
      state.admins.push(adm)
    },
    'SET_ADMINS'(state,adms){
        state.admins=adms
    },
    'ADD_PUNCH'(state,pnch){
      state.punches.push(pnch)
    },
    'SET_PUNCHES'(state,pnchs){
        state.punches=pnchs
    },
    'ADD_ACTION'(state,act){
      state.actions.push(act)
    },
    'SET_ACTIONS'(state,acts){
        state.actions=acts
    },
    'SET_SETTINGS'(state,sets){
      state.settings=sets
    }
  },
//
  actions: {
    // addPunch ({commit},punch) {
    //   axios.post(endpoint+'/punches',punch)
    //   .then(_ => {commit('ADD_PUNCH', punch)
    //   })
    //   .then(response => {})
    //   .catch(e => {
      //   })
      // },
  authenticateSession({commit}){},

  checkPass(){},
  loadData({commit},format="REST")  {
      if(format=="REST"){
        axios.get(dataep+'employees/')
          .then((response)=> {
             commit('SET_EMPLOYEES',response.data)
                        }, (err) => {
          console.log(err)
        })
        }
      },
  loadAdminData({commit}){
    
  },
  updateSettings({commit},settings){
    console.log('test')
    commit('SET_SETTINGS',settings)
  },
  postData({commit},data){
      var dnrid=null
      var donid=null
      var timestamp=new Date()

      axios.post(dataep+'donors/',data['Donor'],{
        withCredentials: false,
        auth: {
        username: 'admin',
        password: '1234'
        },
        responseType: 'json'
      }).then(function(response){console.log(response)}).catch(function(error){console.log(error)})

    }
 }}
)


export default store