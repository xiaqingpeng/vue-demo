<template>
   <div id="film">
    <MzBanner></MzBanner>
    <MzTabs></MzTabs>
   
    <ul class="tag-li">
     <router-link tag="li" to="/detail/100">流浪地球</router-link>
     <router-link tag="li" to="/detail/200">喜剧之王</router-link>
     <router-link tag="li" to="/detail/300">木府风云</router-link>
    </ul>
    
    <MzFooter></MzFooter>
  </div>
</template>

 


<script>
import MzBanner from '../components/MzBanner/Index';
import MzTabs from '../components/MzTabs/Index';
import MzFooter from '../components/MzFooter/Index';

export default {
  // 局部注册组件
  components: {
    MzBanner,
    MzTabs,
    MzFooter
 
  }
 
}
</script>
<style lang="less">
   #film{
     .tag-li{
       display: flex;
       justify-content: center;
       align-items: center;
       flex-direction: column;
       li{
         font-size: 50px;
         margin: 10px 0;
         color: red
       }
     }

     
   }
</style>
