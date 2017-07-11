import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import List from '@/pages/list/index'
<<<<<<< HEAD
import Weekend from '@/pages/weekend/index'
=======
import City from '@/pages/city/index'
>>>>>>> origin/master

Vue.use(Router)

export default new Router({
  routes: [
    {
    	path: '/',
    	name: 'index',
        alias: '/index',
    	component: Index
    }, {
    	path: "/list",
    	name: "list",
    	component: List
    }, {
<<<<<<< HEAD
        path: "/weekend",
        name: "weekend",
        component: Weekend
    }
  ]
=======
        path: "/city",
        name: "city",
        component: City
    }]
>>>>>>> origin/master
})
