// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
//app.vue是程序入口大组件

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
}) 

/*
引入app，new 将template, components 

*/