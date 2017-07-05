import Vue from 'vue'
// APP.vue  是程序的入口大组件
import App from './App'
import router from './router'

Vue.config.productionTip = false

new Vue({//实例
  //挂载到aap上
  el: '#app',
  //路由 router文件夹里的内容
  //router: router的简写
  router,
  //引入模板是app 
  template: '<App/>',
  //new实例的时候 外部引入一个app组件
  components: { App }
})
