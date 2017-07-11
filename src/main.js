import Vue from 'vue'
import VueExtend from './extend'
import App from './App'
import router from './router'
import store from './store'

new Vue({
	beforeCreate: function() {
		var city = '北京';
		try {
			city = window.localStorage.city;
		} catch(e) {}
		this.$store.commit("changeCity", city);

		var province = "查看更多";
		try {
			province = window.localStorage.province
		} catch(e) {}
		this.$store.commit("changeProvince", province)
	},
  	el: '#app',
  	router,
  	store,
  	template: '<App/>',
  	components: { App }
})

