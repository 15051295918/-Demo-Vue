import Vue from 'vue'
import VueExtend from './extend'
import App from './App'
import router from './router'
<<<<<<< HEAD
=======
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueResource from 'vue-resource'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import VuePaginate from 'vue-paginate'
>>>>>>> 14892c41ea64c0ba91117a5dd1828d7dabb1e96d

// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import VueResource from 'vue-resource'
// import FastClick from 'fastclick'
// import VueLazyload from 'vue-lazyload'
// import VuePaginate from 'vue-paginate'

// FastClick.attach(document.body);

// Vue.config.productionTip = false
// Vue.use(VueAwesomeSwiper)
// Vue.use(VueResource);
// Vue.use(VueLazyload, {
// 	loading: 'http://s.qunarzz.com/piao_topic/image/common/default/140x140.png'
// });
// Vue.use(VuePaginate)

import store from './store'

<<<<<<< HEAD
=======
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(VueResource);
Vue.use(VueLazyload, {
	loading: 'http://s.qunarzz.com/piao_topic/image/common/default/140x140.png'
});
Vue.use(VuePaginate)

import store from './store'
>>>>>>> 14892c41ea64c0ba91117a5dd1828d7dabb1e96d

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})