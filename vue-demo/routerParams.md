 ## 路由组件传参
     1. 在路由配置文件中，将props 选项设置为true
     2.  在具体组件中，定义上props，就能直接拿到对应的路由参数
     3.  组件中 就可以使用id 这个prop ，它的值就是 路由参数传递过来的值
##  路由三种方式传参
     -  Boolean  router.js  定义 props：true
     -  对象模式  router.js   定义props:{name:"张三",age:13}
     -  函数方式  router.js   定义props：(router)=>{return {sex:route.query.sex}}


     