<template>
  <div class="home-film">
    <mz-banner></mz-banner>
    <mz-tabs></mz-tabs>
    <button @click="gocity">去城市耍耍</button>
  </div>
</template>

 


<script>
import MzBanner from "@/components/MzBanner/Index.vue";
import MzTabs from "@/components/MzTabs/Index.vue";

export default {
  // 局部注册组件
  components: {
    "mz-banner": MzBanner,
    "mz-tabs": MzTabs
  },
  methods: {
    gocity() {
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
