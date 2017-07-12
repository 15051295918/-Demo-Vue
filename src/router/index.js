import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import List from '@/pages/list/index'
import campaignIndex from '@/pages/campaign/index/index'
import campaignHelp from '@/pages/campaign/help/index'
import campaignNewAannounce from '@/pages/campaign/newannounce/index'
import campaignComputDetails from '@/pages/campaign/comput/index'
import campaignAnnounceDetails from '@/pages/campaign/announceDetails/index'
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
            name: "campaignIndex",
            component: campaignIndex
        }, {
            path: "/campaign/help",
            name: "campaignHelp",
            component: campaignHelp
        }, {
            path: "/campaign/newannounce",
            name: "campaignNewAannounce",
            component: campaignNewAannounce
        }, {
            path: "/campaign/computDetails",
            name: "campaignComputDetails",
            component: campaignComputDetails
        }, {
            path: "/campaign/announceDetails",
            name: "campaignAnnounceDetails",
            component: campaignAnnounceDetails
        }, {       
            path: "/city",
            name: "city",
            component: City
        }, {
            path: "/campaign/detail:id",
            name: "campaignDetail",
            component: campaignIndex
        }
    ]

})
