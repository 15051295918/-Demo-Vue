import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueResource from 'vue-resource'
import FastClick from 'fastclick'
import Vuex from 'vuex';
import VueLazyload from 'vue-lazyload';
import VuePaginate from 'vue-paginate'

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper);
Vue.use(VueResource);
Vue.use(Vuex);
Vue.use(VuePaginate)
Vue.use(VueLazyload, {
  preLoad: 3,
  loading: 'http://s.qunarzz.com/piao_topic/image/common/default/288x288.png',
  attempt: 1
})


Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper)
Vue.use(VueResource);
Vue.use(Vuex)

FastClick.attach(document.body);

export default {}