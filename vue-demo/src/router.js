import Vue from 'vue'
import Router from 'vue-router'
import Film from './views/Film.vue'
import Cinema from './views/Cinema.vue'
import Center from './views/Center.vue'
import City from './views/City.vue'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({

  routes: [{
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
        }, {
          path: '*',//设置通配符
          redirect:'./films'
        }

      ]
    },
    {
      path: '/city',
      component: City
    }


  ]
})
