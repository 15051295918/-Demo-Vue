import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import List from '@/pages/list/index'
import Detail from '@/pages/detail/index'
<<<<<<< HEAD

=======
>>>>>>> e3747f60db793bc72d06920b3a288bd9babf6afe
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
<<<<<<< HEAD
    },
    {
        path: "/detail",
        name: "Detail",
        component: Detail
    }
=======
    },{
			path: "/detail",
			name: "Detail",
			component: Detail
		}
>>>>>>> e3747f60db793bc72d06920b3a288bd9babf6afe
  ]
})
