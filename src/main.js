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
			if(playItem == undefined) {
				playItem = "全部分类";
			}else {
				playItem = window.localStorage.playItem ;
			}
			city = window.localStorage.city;
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

