import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import Oneday from '@/pages/oneday/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
    	path: '/onedaytour',
    	name: 'Oneday',
      component: Oneday
    }
  ]
})
