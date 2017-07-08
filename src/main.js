import Vue from 'vue'
import VueExtend from './extend'
import App from './App'
import router from './router'
import store from './store'

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})