// store.js 

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex) // only required if you're using modules.
              // We're using modules, so there you go.
Vue.use(VueAxios, axios)
const endpoint = " http://localhost:8000/"
const dataep = endpoint+'dock/api/'

const store = new Vuex.Store({
  
//
  state: {
    test:0
  
  },
//
  getters:{
    
  },
//
  mutations: {
    'SET_DONORS'(state,dons){
      dons.map((don) => {
        state.donors.push(don);
        console.log(don)})
    },
  },
//
  actions: {
    // addStop ({commit},store, stop) {
    //   axios.post(endpoint+'/stops',stop)
    //   .then(_ => {commit('ADD_STOP', stop)
    //   })
    //   .then(response => {})
    //   .catch(e => {
    //   })
    // },
clearSels({commit}){
    commit("SET_SELDUMP",0)
    commit("SET_SELDONS",{})
    commit("SET_SELDONOR",null)
},
  loadDataFrom({commit},format="REST")  {
    if(format=="REST"){
      axios.get(dataep+'donors/')
        .then((response)=> {
           commit('SET_DONORS',response.data)
                      }, (err) => {
        console.log(err)
      })
      }
    },

selDons:function(t,e){var n=t.commit;n("SET_SELDONS",e)},
selDump:function(t,e){var n=t.commit;n("SET_SELDUMP",e)},
selDonor:function(t,e){var n=t.commit;n("SET_SELDONOR",e)},
  // updateStopList({commit},stoplist){
  //   alert(stoplist)
  //   commit('UPDATE_STOPLIST_ORDER',stoplist)
  // },
  
  postData({commit},data,format="REST"){
    if(format=="REST"){
      //@todo include authentication
      //axios.post(endpoint,{""}) 
    }
  }
}})


export default store