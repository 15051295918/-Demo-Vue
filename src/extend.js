import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueResource from 'vue-resource'
import FastClick from 'fastclick'
import Vuex from 'vuex';
import AMap from 'vue-amap'

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper)
Vue.use(VueResource);
Vue.use(Vuex);
Vue.use(AMap);
AMap.initAMapApiLoader({
  key: '2ff2e5535cd7ae698e7af431e6558948',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
});

FastClick.attach(document.body);

export default {}