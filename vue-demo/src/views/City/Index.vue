
<template>
  <div id="city">
    <h1>我是城市选择页面</h1>
  </div>
</template>
<script>
import    MzHeader from  '@/components/MzHeader/Index.vue'
import     axios  from   'axios'
export default {
  components:{
   MzHeader
  },
  computed:{
    filterCityDate(){

    },
    curCityname () {
      return  
    }
  },
  methods: {
    getCityData(){
      axios.get('./json/city.json').then(
        (Response)=>{
          let  res=Response.data;
          console.log(res)
        }
      )
    }
  },
  created(){
    this.getCityData()
  }
};
</script>
<style lang="less" >
  @import url('./index.less');
</style>