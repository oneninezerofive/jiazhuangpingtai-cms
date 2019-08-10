import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Reception from './views/announcement/Reception'
import Backstage from './views/announcement/Backstage'
import onlineWorks from './views/works/onlineWorks'
Vue.use(Router)

const routes = [{
    name: 'Home',
    path: '/Home',
    component: Home,
    // 嵌套路由，先进底部选项卡，再去找首页
    children: [{
      name: 'Reception',
      // 第二层路由的path是没有/
      path: 'Reception',
      component: Reception,
    },
    {
      name: 'Backstage',
      // 第二层路由的path是没有/
      path: 'Backstage',
      component: Backstage,
    },
    {
      name: 'onlineWorks',
      // 第二层路由的path是没有/
      path: 'onlineWorks',
      component: onlineWorks,
    },
  ]
  },
  // 重定向
  {
    path: '/',
    // 别名
    alias: '/main.html',
    redirect: () => {
      // 方法接收 目标路由 作为参数
      // return 重定向的 字符串路径/路径对象
      return '/Home'
    }
  }
]

const router = new Router({
  // 你默认是哈希模式，改为H5 history模式
  // mode: 'history',
  routes // (缩写) 相当于 routes: routes
})

export default router