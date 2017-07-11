import Vue from 'vue'
import VueExtend from './extend'
import App from './App'
import router from './router'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueResource from 'vue-resource'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'

FastClick.attach(document.body);

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(VueResource)
Vue.use(VueLazyload);

import store from './store'


new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})