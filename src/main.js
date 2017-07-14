import Vue from 'vue'
import VueExtend from './extend'
import App from './App'
import router from './router'
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

