import Vue from 'vue'
// APP.vue 是程序的入口大组件
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper)

<<<<<<< HEAD
/* eslint-disable no-new */
//app.vue是程序入口大组件

=======
>>>>>>> origin/master
new Vue({
  el: '#app',
  router: router,
  template: '<App/>',  
  components: { App }
}) 

/*
引入app，new 将template, components 

*/