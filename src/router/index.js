import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import List from '@/pages/list/index'
import CommentWeekend from '@/pages/commentweekend/index'
import TicketRmb from '@/pages/ticket9yuan/index'


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
      path: '/onedaytour/comment',
      name: 'commentWeekend',
      component: CommentWeekend
    }, {
      path: '/ticket_9yuan',
      name: 'ticket_9yuan',
      component: TicketRmb
    }
  ]
})
