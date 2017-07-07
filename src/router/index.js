import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import List from '@/pages/list/index'
<<<<<<< HEAD
import Detail from "@/pages/detail/index"
=======
import Detail from '@/pages/detail/index'
>>>>>>> 8604427a0929e2144ef5b6268ea43cd051bc41c7

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
<<<<<<< HEAD
    	path: '/detail',
    	name: "Detail",
    	component: Detail
    }
=======
			path: "/detail",
			name: "Detail",
			component: Detail
		}
>>>>>>> 8604427a0929e2144ef5b6268ea43cd051bc41c7
  ]
})
