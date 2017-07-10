<<<<<<< HEAD

import Vue from 'vue'
//APP.vue 是程序的入口大组件
=======
import Vue from 'vue'
import VueExtend from './extend'
>>>>>>> origin/master
import App from './App'
//router引入router文件夹下面的index.js
import router from './router'
<<<<<<< HEAD
import VueAwesomeSwiper from 'vue-awesome-swiper'
import FastClick from 'fastclick'
import VueResource from 'vue-resource'


FastClick.attach(document.body);

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper);
Vue.use(VueResource);


/* eslint-disable no-new */
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