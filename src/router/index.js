import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import List from '@/pages/list/index'

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
    }
  ]
})
