import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import List from '@/pages/list/index'
import City from '@/pages/city/index'
import Detail from '@/pages/detail/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
    	path: '/',
    	name: 'index',
<<<<<<< HEAD
=======
        alias: '/index',
>>>>>>> origin/master
    	component: Index
    }, {
    	path: "/list",
    	name: "list",
    	component: List
    }, {
        path: "/city",
        name: "city",
        component: City
    }
    , {
        path: "/detail",
        name: "detail",
        component: Detail
     }

  ]
})
