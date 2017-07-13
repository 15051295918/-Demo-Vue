import Vue from 'vue';
import VueLazyload from 'vue-lazyload'
import VueAwesomeSwiper from 'vue-awesome-swiper';
import VueResource from 'vue-resource';
import FastClick from 'fastclick';
import Vuex from 'vuex'; 

Vue.config.productionTip = false;

Vue.use(VueAwesomeSwiper);
Vue.use(VueResource);
Vue.use(Vuex);

FastClick.attach(document.body);

export default {}