import Vuex from 'vuex';

var city = "上海";

try {
	if (window.localStorage && window.localStorate.city) {
		city = window.localStorage.city
	}
}catch(e){}

export default new Vuex.Store({
	state: {
   		city: city
	}
})