// The Vue build version to load with the `import` command
// https://code.daypilot.org/69423/vue-js-scheduler-build-a-reservation-application-in-5-minut
// https://codeburst.io/create-a-micro-calendar-with-vuejs-and-good-old-bootstrap-in-a-breeze-8d33bd5ae814
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 
import Vue from 'vue'
import App from './App'
import router from './router'

import store from './store/store.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	store:store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
