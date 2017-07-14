import Vue from 'vue'
import VueExtend from './extend'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueResource from 'vue-resource'
import FastClick from 'fastclick'

FastClick.attach(document.body);

import store from './store'
new Vue({
	beforeCreate: function() {
		var city = '北京';
		try {
			city = window.localStorage.city;
		} catch(e) {}
		this.$store.commit("changeCity", city);
	},
  	el: '#app',
  	router,
  	store,
  	template: '<App/>',
  	components: { App }
})

