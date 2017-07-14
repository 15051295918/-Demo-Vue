import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import List from '@/pages/list/index'
import sigthotelIndex from "@/pages/sighthotel/index/index"
import sigthotelDetail from "@/pages/sighthotel/detail/index"
import sigthotelOrderIndex from "@/pages/sighthotel/orders/index"
import phonearea from "@/pages/sighthotel/orders/phonearea"
import Sales from '@/pages/sales/index'
import Comment from '@/pages/comment/index'
import Promote from '@/pages/promote/index'
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
      path: '/comment',
      name: 'comment',
      component: Comment
    }, { 
      path: '/promote',
      name: 'promote',
      component: Promote
    }, {  
      path: "/city",
      name: "city",
      component: City
    }, {
      path: "/sales",
      name: "sales",
      component: Sales
    }, {
      path: "/sighthotel",
      name: "sigthotelIndex",
      component: sigthotelIndex
    }, {
      path: "/sighthotel/detail",
      name: "sigthotelDetail",
      component: sigthotelDetail
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
    }
  ]
})