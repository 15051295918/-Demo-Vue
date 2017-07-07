import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
<<<<<<< HEAD
import List from '@/pages/list/index'
import Weekend from '@/pages/weekend/index'
=======
import Oneday from '@/pages/oneday/index'

>>>>>>> 833f3c32ea7136a379356e68063f66a6cc432836
Vue.use(Router)

export default new Router({
  routes: [
    {
<<<<<<< HEAD
    	path: '/',
    	name: 'Index',
    	component: Index
    }, {
    	path: "/list",
    	name: "List",
    	component: List
    },{
    	path: "/weekend",
    	name: "weekend",
    	component: Weekend
=======
      path: '/',
      name: 'Index',
      component: Index
    },
    {
    	path: '/onedaytour',
    	name: 'Oneday',
      component: Oneday
>>>>>>> 833f3c32ea7136a379356e68063f66a6cc432836
    }
  ]
})
