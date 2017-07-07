import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import List from '@/pages/list/index'
import sigthotelIndex from "@/pages/sighthotel/index/index"
import sigthotelDetail from "@/pages/sighthotel/detail/index"

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
        },{
            path: "/sighthotel",
            name: "sigthotelIndex",
            component: sigthotelIndex
        },{
            path: "/sighthotel/detail",
            name: "sigthotelDetail",
            component: sigthotelDetail
        }
    ]
})
