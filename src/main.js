import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper)
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
