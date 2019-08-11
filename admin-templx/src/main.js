import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mock from "./assets/mock/index.js"

Vue.config.productionTip = false
import axios from "axios"
Vue.prototype.$http = axios


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
