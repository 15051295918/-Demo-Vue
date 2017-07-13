import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import List from '@/pages/list/index'
import CampaignIndex from '@/pages/campaign/index/index'
import CampaignHelp from '@/pages/campaign/help/index'
import CampaignNewAannounce from '@/pages/campaign/newannounce/index'
import CampaignComputDetails from '@/pages/campaign/comput/index'
import CampaignAnnounceDetails from '@/pages/campaign/announceDetails/index'
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
    },{
        path: "/campaign/help",
        name: "CampaignHelp",
        component: CampaignHelp
    },{
        path: "/campaign/newannounce",
        name: "CampaignNewAannounce",
        component: CampaignNewAannounce
    },{
        path: "/campaign/computDetails/:id",
        name: "CampaignComputDetails",
        component: CampaignComputDetails
    },{
        path: "/campaign/announceDetails/:id",
        name: "CampaignAnnounceDetails",
        component: CampaignAnnounceDetails
    },{       
        path: "/city",
        name: "city",
        component: City
    }]
})
