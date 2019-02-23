
<template>
  <div id="center">
    <h1>我是个人中心页</h1>
    <ul>
      <router-link tag="li" to="/card">卖座卡</router-link>
      <router-link tag="li" to="/money">余额</router-link>
      <router-link tag="li" to="/system">系统设置</router-link>
    </ul>
  </div>
</template>

<script>
export default {
 
}
</script>
<style lang="less" >
   #center{
     color: cyan;
     font-size: 40px;
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
     h1{
       font-size: 30px;
       color:black
     }
     ul{
       display: flex;
       justify-content: center;align-items: center;
       flex-direction: column
     }
   }
</style>
