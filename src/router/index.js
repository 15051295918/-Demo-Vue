import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import List from '@/pages/list/index'
import Weekend from '@/pages/weekend/index'
import Oneday from '@/pages/oneday/index'
import Detail from '@/pages/weekdayDetail/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
    	path: '/',
    	name: 'Index',
    	component: Index
    }, {
    	path: "/list",
    	name: "List",
    	component: List
    },{
        path: "/weekend",
        name: "Weekend",
        component: Weekend
    },{
    	path: '/onedaytour',
    	name: 'Oneday',
      component: Oneday
    },{
      path:'/weekend/list/:position',
      name:'weekendList',
      component:Detail
    }
  ]
})
