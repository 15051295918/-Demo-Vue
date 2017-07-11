import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueResource from 'vue-resource'
import FastClick from 'fastclick'
import Vuex from 'vuex';
import { swiper, swiperSlide } from 'vue-awesome-swiper'

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper)
Vue.use(VueResource);
Vue.use(Vuex)

FastClick.attach(document.body);

export default {}



