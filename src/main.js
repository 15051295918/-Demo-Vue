import Vue from 'vue'
import VueExtend from './extend'
import App from './App'
import router from './router'
<<<<<<< HEAD
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueResource from 'vue-resource'
import FastClick from 'fastclick'
FastClick.attach(document.body);

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(VueResource);
=======
import store from './store'
>>>>>>> origin/master

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})