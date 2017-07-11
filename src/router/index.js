import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import List from '@/pages/list/index'
import OneDayTourDetail from '@/pages/onedaytour-detail/index'
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
			path: "/city",
			name: "city",
			component: City
		}, {
			path: "/onedaytour/detail",
			name: "one-day-tour-detail",
			component: OneDayTourDetail
		}]
})
