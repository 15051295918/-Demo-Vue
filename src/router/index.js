import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import List from '@/pages/list/index'
import CampaignIndex from '@/pages/campaign/index/index'
import CampaignMineindex from '@/pages/campaign/mine/index'
import CampaignMineRegister from '@/pages/campaign/mine/register'
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
        path: "/campaign",
        name: "CampaignIndex",
        component: CampaignIndex
    }, {
        path: "/campaign/mine",
        name: "CampaignMineindex",
        component: CampaignMineindex
    },
    {
        path: "/campaign/mine/register",
        name: "CampaignMineRegister",
        component: CampaignMineRegister
    },
    {
        path: "/city",
        name: "city",
        component: City
    }    
  ]
})
