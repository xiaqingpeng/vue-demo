##  动态路由
    看上去两个或者多个URL，都能匹配同一规则
    localhost:8080/#/detail/100
    localhost:8080/#/detail/200
    localhost:8080/#/detail/300

    {
        path:'/detail/:id'
    }
##  $route(当前路由对象) 组件的对象里面
    $router (路由器对象，new VueRouter 的实例化对象)