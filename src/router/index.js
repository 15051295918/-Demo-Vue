import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import List from '@/pages/list/index'
import sigthotelIndex from "@/pages/sighthotel/index/index" 
import sighthotelDetail from "@/pages/sighthotel/index/detail" 

Vue.use(Router)

export default new Router({
  routes: [
    {
    	path: '/',
    	name: 'index',
    	component: Index
    }, {
    	path: "/list",
    	name: "list",
    	component: List
    },{
        path: "/sighthotel",
        name: "sigthotelIndex",
        component: sigthotelIndex
    },{
        path: "/sighthotelDetail",
        name: "sighthotelDetail",
        component: sighthotelDetail
    }
  ]
})
