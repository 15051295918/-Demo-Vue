import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import list from '@/pages/list/index'
import City from '@/pages/city/index'
import campaignIndex from '@/pages/campaign/index/index'
import campaignOrder from '@/pages/campaign/order/index'
import campaignShowText from '@/pages/campaign/order/showtext'

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
        	component: list
        }, {
            path: "/city",
            name: "city",
            component: City
        }, {
            path: "/campaign",
            name: "campaignIndex",
            component: campaignIndex
        }, {
            path: "/campaign/detail:id",
            name: "campaignDetail",
            component: campaignIndex
        }, {
        	path: "/campaign/order",
            name: "campaignOrder",
            component: campaignOrder
        }, {
            path: "/campaign/showtext",
            name: "campaignShowText",
            component: campaignShowText
        }            
    ]

})
