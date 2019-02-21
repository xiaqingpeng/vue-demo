import Vue from 'vue'
import Router from 'vue-router'
import Film from './views/Film.vue'
import Cinema from './views/Cinema.vue'
import Center from './views/Center.vue'
import City from './views/City.vue'
import Home from './views/Home.vue'
import Detail from './views/Detail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
    path: '/',
    component: Home,
    children: [{
      path: 'films',
      component: Film
    }, {
      path: 'cinemas',
      component: Cinema
    }, {
      path: 'center',
      component: Center
    },
    ]
  },
  {
    path:'/detail/:id',
    component: Detail
  },
  {  name:"hhh",
    path: '/city',
    component: City
  },

  {
    path: '*', //设置通配符
    redirect: '/films'
  }
  ]
})
