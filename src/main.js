import Vue from 'vue'
// APP.vue 是程序的入口大组件
import App from './App'
import router from './router'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router: router,
  template: '<App/>',
  components: { App }
})
