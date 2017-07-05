import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'

Vue.use(Router)
//vue-router显示当前路由下的所有内容
//加载hello组件
//alisa 意思是别名
//@是src文件夹的绝对路径
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})
