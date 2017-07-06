import Vue from 'vue';
// APP.vue 是程序的入口大组件
import App from './App';
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper';


Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);


new Vue({
  el: '#app',
  router: router,
  template: '<App/>',
  components: { App }
})
