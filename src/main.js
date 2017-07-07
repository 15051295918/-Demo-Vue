import Vue from 'vue'
// APP.vue 是程序的入口大组件
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueResource from 'vue-resource'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'

FastClick.attach(document.body);

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(VueResource);
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'http://img01.sogoucdn.com/app/a/100520024/6fe7a1bab8fbbd8891af68f083ea894e',
  attempt:1,
  listenEvents: [ 'touchmove' ]
})
new Vue({
  el: '#app',
  router: router,
  template: '<App/>',
  components: { App }
})
