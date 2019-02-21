import Vue from 'vue'
import Router from 'vue-router'
import Film from './views/Film.vue'
import Cinema from './views/Cinema.vue'
import Center from './views/Center.vue'
import City from './views/City.vue'
import Home from './views/Home.vue'
import Detail from './views/Detail.vue'
Vue.use(Router)
let router = new Router({

  mode: 'hash',
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
      }, ]
    },
    {
      path: '/detail/:id',
      component: Detail,
      props: true //  路由组件传参时，路由配置文件中，将props选项设置为true;
      /*  props:(router) => {
         return {
           sex: route.query.sex
         }
       } */
    },

    {
      name: "hhh",
      path: '/city',
      //别名
      alias: '/abc',
      components: {
        top: City,
        //设置默认值
        default: Detail
      }
    },
    {
      path: '/card',
      component: {
       render(h){
         return  h("div","卖座卡页面")
       }
      }
    }, {
      path: '/money',
      component: {
        render(h) {
          return h("div", "余额页面")
        }
      }
    }, {
      path: '/system',
      component: {
        render(h) {
          return h("div", "系统设置页面")
        }
      }
    },
    {
      path: '*', //设置通配符
      redirect: '/films'
    }
  ],
})
//router.beforeEach((to, from, next) => {
  //to  将要去的路由的路由对象
  // from  从哪里去的路由的路由对象
  //next  是否允许去 next(false)/next(true)
  //console.log(to, from);

//})
export default router;
