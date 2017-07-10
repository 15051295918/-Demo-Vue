import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import List from '@/pages/list/index'

Vue.use(Router)
/*
	在main.js中引入了 router/router 指的就是 router下面的index.js(也就是当前文件)
	然后main.js的中又引入了 App 模块 和 App组件 指的就是 App.vue
	App.vue中引入了 <router-view></router-view> 显示当前路由下面的所有内容

	所以创建下面的path: "/List"; 指的是访问index.js 下面的list页面
*/

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
    }
  ]
})
 