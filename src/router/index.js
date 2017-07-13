import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import List from '@/pages/list/index'
import OneDayTourDetail from '@/pages/onedaytour-detail/index'
import Comment from '@/pages/comment/index'
import Promote from '@/pages/promote/index'
import City from '@/pages/city/index'


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
      path: '/comment',
      name: 'comment',
      component: Comment
    }, {
      path: '/promote',
      name: 'promote',
      component: Promote
    },{  
        path: "/city",
        name: "city",
        component: City
    }, {
			path: "/onedaytour/detail/pid/:pid",
			name: "one-day-tour-detail",
			component: OneDayTourDetail
		}]

})
