import Vue from 'vue'
import VueExtend from './extend'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueResource from 'vue-resource'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import VuePaginate from 'vue-paginate'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(VueResource);
Vue.use(VueLazyload, {
	loading: 'http://s.qunarzz.com/piao_topic/image/common/default/140x140.png'
});
Vue.use(VuePaginate)

import store from './store'

new Vue({
	beforeCreate: function() {
		var playItem = "";
		var city = '北京';
		try {
			playItem = window.localStorage.playItem ;
			city = window.localStorage.city;
			console.log(playItem)
		} catch(e) {}
		this.$store.commit("changeCity", city);
		this.$store.commit("changePlayItem", playItem);
	},
  	el: '#app',
  	router,
  	store,
  	template: '<App/>',
  	components: { App }
})

