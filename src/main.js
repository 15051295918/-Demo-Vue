import Vue from 'vue'
import VueExtend from './extend'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import store from './store'


Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'http://simg3.qunarzz.com/piao/images/loading_camel.gif',
  attempt:1,
  listenEvents: [ 'touchmove' ]
})

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})