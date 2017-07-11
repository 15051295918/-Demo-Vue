import Vue from 'vue'
import VueExtend from './extend'
import App from './App'
import router from './router'
import store from './store'

new Vue({
	beforeCreate: function() {
		var city = '北京';
		var code = "+86";
		try {
			city = window.localStorage.city;
			code = window.localStorage.code;
		} catch(e) {}
		this.$store.commit("changeCity", city);
		this.$store.commit("changeCode", code);
	},
  	el: '#app',
  	router,
  	store,
  	template: '<App/>',
  	components: { App }
})
