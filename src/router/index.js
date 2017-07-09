import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import List from '@/pages/list/index'
import Detail from '@/pages/detail/index'

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
    },
    {
<<<<<<< HEAD
			path: "/detail",
			name: "Detail",
			component: Detail
		}
=======
        path: "/detail",
        name: "Detail",
        component: Detail
    }

>>>>>>> 17f4939368a84a6e325377bff0c639753f61af74
  ]
})
