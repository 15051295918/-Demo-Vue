
import Vue from 'vue'
//APP.vue 是程序的入口大组件
import VueExtend from './extend'
import App from './App'
//router引入router文件夹下面的index.js
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import FastClick from 'fastclick'
import VueResource from 'vue-resource'


FastClick.attach(document.body);

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper);
Vue.use(VueResource);


import store from './store'

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})