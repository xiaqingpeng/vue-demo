//仓库文件
import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex)
//创建仓库
const store = new Vuex.Store({
    //状态-项目中需要复用数据
    state:{
     curCityName:"深圳"
    },
    mutations:{

    }
})
export default  store;
   