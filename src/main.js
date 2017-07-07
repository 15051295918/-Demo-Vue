import Vue from 'vue'
// APP.vue 是程序的入口大组件
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueResource from 'vue-resource'
import FastClick from 'fastclick'
import AMap from 'vue-amap'

Vue.use(AMap);
AMap.initAMapApiLoader({
  key: '2ff2e5535cd7ae698e7af431e6558948',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
});

FastClick.attach(document.body);

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(VueResource);

new Vue({
  el: '#app',
  router: router,
  template: '<App/>',
  components: { App },
  render: h => h(App)
})
