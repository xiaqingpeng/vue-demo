<template>
  <div id="detail">
    <p>我是详情页</p>
    <br>
    <h1>当前数据id： {{$route.params.id}}</h1>
  </div>
</template>
<script>
export default {
  props: {
    id:Number,
    sex:String   
  },
  create() {
    console.log(this.$route);
    console.log(this.$router);
  }
};
</script>
<style lang="less">
#detail {
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    color: blueviolet;
    font-size: 50px;
  }
  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>

