import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueResource from 'vue-resource'
import FastClick from 'fastclick'
import Vuex from 'vuex';
import VueLazyload from 'vue-lazyload';


Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(VueResource);
Vue.use(Vuex)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'http://simg3.qunarzz.com/piao/images/loading_camel.gif',
  attempt:1,
  listenEvents: [ 'touchmove', 'mousewheel' ]
})

FastClick.attach(document.body);

export default {}