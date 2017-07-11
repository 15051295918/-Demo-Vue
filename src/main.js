import Vue from 'vue'
import VueExtend from './extend'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueResource from 'vue-resource'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import IScrollView from 'vue-iscroll-view'
import IScroll from 'iscroll'

FastClick.attach(document.body);

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(VueResource)
Vue.use(VueLazyload, {
	preLoad: 1.0,
	attempt: 1,
	loading: 'https://gw.alicdn.com/tps/i1/TB147JCLFXXXXc1XVXXxGsw1VXX-112-168.png',
	listenEvents: [ 'scroll' ]
})
Vue.use(IScrollView, IScroll)

import store from './store'
new Vue({
  	el: '#app',
  	router,
  	store,
  	template: '<App/>',
  	components: { App }
})
