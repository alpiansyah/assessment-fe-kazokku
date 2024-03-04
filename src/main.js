import Vue from 'vue'
import App from './App.vue'
import store from './store/'
import VueRouter from 'vue-router'

import Home from './page/Home.vue'
import Result from './page/SearchResult.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(VueAxios, axios)
Vue.use(VueRouter)


const routes = [
  { path: '/', component: Home },
  { path: '/result', component: Result }
]


const router = new VueRouter({
  routes 
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
