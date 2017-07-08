import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import List from '@/pages/list/index'
import CampaignIndex from '@/pages/campaign/index/index'
import CampaignHelp from '@/pages/campaign/help/index'
import CampaignNewAannounce from '@/pages/campaign/newannounce/index'
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
    }, {
        path: "/campaign",
        name: "CampaignIndex",
        component: CampaignIndex
    },{
        path: "/campaign/help",
        name: "CampaignHelp",
        component: CampaignHelp
    },{
        path: "/campaign/newannounce",
        name: "CampaignNewAannounce",
        component: CampaignNewAannounce
    }             
  ]
})
