##  pxtorem  (postcss工具的一款插件)
    1. 安装   yarn  add   postcss—pxtorem -D
             npm   insatll   postcss—pxtorem -D
    2. 在postcss.config.js 配置
       module.exports = {
       plugins: {
       autoprefixer: {},
       'postcss-pxtorem': {
       // html的fontSize 大小
       rootValue: 100,
       // 大概是小数的四舍五入
       unitPrecision: 5,
       // 需要转换的css属性
       propList: ['*'],
       // 设置不需要转换的 css 选择器
       selectorBlackList: [],
       // 是否替换
       replace: true,
       // 是否对媒体查询的样式做转换
       mediaQuery: false,
       // 设置要进行转换的最小px值。
       minPixelValue: 0
       }
       }
       }

     3. 设置 html 的fontSize 大小为 100PX
     4. 引入 hotcss.js 文件，找到里面 85行的代码，将 320 修改你写得页面的基本宽度
     5. （自行选择）可以设置  dpr 与  max-width  
