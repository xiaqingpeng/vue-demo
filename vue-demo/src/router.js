import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import Vue from 'vue'
import Router from 'vue-router'
// import Film from './views/Film.vue'
// import Cinema from './views/Cinema.vue'
// import Center from './views/Center.vue'
// import City from './views/City/Index.vue'
// import Home from './views/Home.vue'
// import Detail from './views/Detail.vue'
// import Login from './views/Login.vue'
// import Card from './views/Card.vue'
// import Money from './views/Money.vue'
// import System from './views/System.vue'

Vue.use(Router)
let router = new Router({
  mode: 'hash',
  routes: [{
      path: '/',
      component: () => import('./views/Home/Index.vue'),
      children: [
        // PS: 不是一级路由的话，path路径前面不要加 /
        // PS: 二级或二级以上的路由，他们的url地址，是会从一级路由开始一直做追加的。
        // localhost:8080/#/films
        {
          path: 'films', // 就是url路径
          component: () => import('./views/Home/Film/Index.vue')
        },
        // localhost:8080/#/cinemas
        {
          path: 'cinemas',
          component: () => import('./views/Home/Cinema/Index.vue')
        },
        // localhost:8080/#/center
        {
          path: 'center',
          component: () => import('./views/Home/Center/Index.vue')
        },
        // 空的儿子
        // localhost:8080/#/  ->  localhost:8080/#/films
        {
          path: '',
          // component: Film
          redirect: '/films'
        }
      ]
    },
    {
      // 城市选择页
      name: 'hhh',
      path: '/city',
      component: () => import('./views/City/Index.vue')
    },
    {
      // 详情页
      path: '/detail/:id',
      component: () => import('./views/Detail/Index.vue')
    },
    {
      path: '/card',
      component: () => import('./views/Card/Index.vue')
    },
    {
      path: '/money',
      component: () => import('./views/Money/Index.vue')
    },
    {
      path: '/system',
      component: () => import('./views/System/Index.vue')
    },
    {
      path: '/login',
      component: () => import('./views/Login/Index.vue')
    },
    // 设置一个 通配符的 一级路由，当url地址无法与上面的规则匹配的时候，就会跟我匹配。
    {
      path: '*',
      redirect: '/films'
    }
  ],
  //滚动行为
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})
//router.beforeEach((to, from, next) => {
//to  将要去的路由的路由对象
// from  从哪里去的路由的路由对象
//next  是否允许去 next(false)/next(true)
//console.log(to, from);

//})
//全局前置守卫
router.beforeEach((to, from, next) => {
  Nprogress.start();
  let list = ['/card', '/money', '/system'];
  if (list.indexOf(to.path) > -1) {
    next({
      path: '/login',
      query: {
        redirect: to.fullPath
      },
    })
  } else {
    next()
  };

})
//全局后置守卫
router.afterEach((to, from) => {
  Nprogress.done()
})
export default router;
