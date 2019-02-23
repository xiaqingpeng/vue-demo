<template>
  <div id="film">
    <MzBanner></MzBanner>
    <MzTabs></MzTabs>
    <button @click="changecity">城市选择</button>
    <ul class="tag-li">
      <router-link tag="li" to="/detail/100">流浪地球</router-link>
      <router-link tag="li" to="/detail/200">喜剧之王</router-link>
      <router-link tag="li" to="/detail/300">木府风云</router-link>
    </ul>
    <div style="height:2000px">  </div>
    <MzFooter></MzFooter>
  </div>
</template>

 


<script>
import MzBanner from "../components/MzBanner/Index";
import MzTabs from "../components/MzTabs/Index";
import MzFooter from "../components/MzFooter/Index";

export default {
  // 局部注册组件
  components: {
    MzBanner,
    MzTabs,
    MzFooter
  },
  methods: {
    changecity() {
      //字符串跳转
      //this.$router.push("/city");
      //对象方式
      /* this.$router.push({
        path: "/city"
      }); */
      // query 方式
      this.$router.push({
        // query:{
        //   id:10 //url ?传参
        // },
        //命名路由
        name: "hhh"
      });
    }
  }
};
</script>
<style lang="less">
 .commom {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
};
#film {
 
  .tag-li {
    li {
       .commom;
      font-size: 50px;
      margin: 10px 0;
      color: red;
    }
  }
}
</style>
