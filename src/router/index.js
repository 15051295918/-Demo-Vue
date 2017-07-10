import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import List from '@/pages/list/index'
import sigthotelIndex from "@/pages/sighthotel/index/index"
import  sigthotelOrderIndex from "@/pages/sighthotel/orders/index"

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
        path: "/sighthotel/order",
        name: "sigthotelOrderIndex",
        component: sigthotelOrderIndex
    }
  ]
})
