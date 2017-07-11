import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import List from '@/pages/list/index'
import sigthotelIndex from "@/pages/sighthotel/index/index"
import sighthotelDetail from "@/pages/sighthotel/index/detail" 
import sigthotelOrderIndex from "@/pages/sighthotel/orders/index"
import phonearea from "@/pages/sighthotel/orders/phonearea"
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
        path: "/sighthotel",
        name: "sigthotelIndex",
        component: sigthotelIndex
    }, {
        path: "/sighthotel/order",
        name: "sigthotelOrderIndex",
        component: sigthotelOrderIndex
    }, {
        path:"/phonearea",
        name:"phonearea",
        component: phonearea
    }, {
        path: "/city",
        name: "city",
        component: City
    }, {
        path: "/sighthotelDetail",
        name: "sighthotelDetail",
        component: sighthotelDetail
    }
  ]
})