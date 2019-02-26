- 动画过度
- 自定义指令
- v-model 其实是个语法糖
- px2rem | hotcss.js
- mockJs (假数据)
- vue-cli 2.x 的使用
- 正向代理
- 百度定位
- axios 封装
- jwt
- mongodb 备份与恢复
- 项目上线

# pxtorem

是 postcss 工具的一款 插件，使用步骤

1. 安装
  yarn add postcss-pxtorem -D
  npm install postcss-pxtorem -D

2. 找到项目根目录下的 postcss.config.js 文件

  ```js
  module.exports = {
    plugins: {
      autoprefixer: {},
      'postcss-pxtorem': {
        rootValue: 100
      }
    }
  }
  ```
3. 设置 html 的fontSize 大小为 100PX
4. 引入 hotcss.js 文件，找到里面 85行的代码，将 320 修改你写得页面的基本宽度
5. （自行选择）可以设置  dpr 与  max-width

