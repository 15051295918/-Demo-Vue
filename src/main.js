import Vue from 'vue'
import VueExtend from './extend'
import App from './App'
import router from './router'
// 
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueResource from 'vue-resource'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import VuePaginate from 'vue-paginate'


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




Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(VueResource);
Vue.use(VueLazyload, {
	loading: 'http://s.qunarzz.com/piao_topic/image/common/default/140x140.png'
});
Vue.use(VuePaginate)

import store from './store'


new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})