import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import List from '@/pages/list/index'
import SigthotelIndex from "@/pages/sighthotel/index/index"
import SigthotelDetail from "@/pages/sighthotel/detail/index"
import SigthotelOrderIndex from "@/pages/sighthotel/orders/index"
import Phonearea from "@/pages/sighthotel/orders/phonearea"
import Weekend from '@/pages/weekend/index'
import OneDayTourDetail from '@/pages/onedaydetail/index'
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
      component: Index
    }, {
      path: "/list",
      name: "list",
      component: List
    }, {
      path: "/sighthotel",
      name: "sigthotelIndex",
      component: SigthotelIndex
    }, {
      path: "/sighthotel/detail",
      name: "sigthotelDetail",
      component: SigthotelDetail
    }, {
      path: "/sighthotel/order",
      name: "sigthotelOrderIndex",
      component: SigthotelOrderIndex
    }, {
      path:"/phonearea",
      name:"phonearea",
      component: Phonearea
    }, {
      path: '/comment',
      name: 'comment',
      component: Comment
    }, {
      path: "/weekend/:id/:title",
      name: "weekend",
      component: Weekend
    },{
      path: "/city",
      name: "city",
      component: City
    }, {
      path: '/promote',
      name: 'promote',
      component: Promote
    }, {
      path: "/sales",
      name: "sales",
      component: Sales
    }, {
      path: "/oneday/detail/:pid",
      name: "one-day-detail",
      component: OneDayTourDetail
    }
  ]
})