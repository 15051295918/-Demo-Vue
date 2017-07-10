import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import Index from '@/pages/index'
=======
import Index from '@/pages/index/index'
import List from '@/pages/list/index'
>>>>>>> origin/master

Vue.use(Router)

export default new Router({
  routes: [
    {
<<<<<<< HEAD
      path: '/',
      name: 'Index',
      component: Index
=======
    	path: '/',
    	name: 'Index',
    	component: Index
    }, {
    	path: "/list",
    	name: "List",
    	component: List
>>>>>>> origin/master
    }
  ]
})
