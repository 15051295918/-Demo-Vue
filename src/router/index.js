import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import list from '@/pages/list/index'
import campaignIndex from '@/pages/campaign/index/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
    	path: '/',
    	name: 'Index',
    	component: Index
    }, {
    	path: "/list",
    	name: "list",
    	component: list
    }, {
        path: "/campaign",
        name: "campaignIndex",
        component: campaignIndex
    }, {
        path: "/campaign/detail:id",
        name: "campaignDetail",
        component: campaignIndex
    }        
  ]
})
