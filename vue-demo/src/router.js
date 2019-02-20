import Vue from 'vue'
import Router from 'vue-router'
import Film from './views/Film.vue'
import Cinema from './views/Cinema.vue'
import Center from './views/Center.vue'
import City from './views/City.vue'

Vue.use(Router)

export default new Router({

  routes: [{
      path: './films',
      component: Film
    },
    {
      path: './cinemas',
      component: Cinema
    },
    {
      path: './center',
      component: Center
    },
    {
      path: './city',
      component: City
    },

  ]
})
