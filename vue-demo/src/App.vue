<template>
  <div>
    <Film></Film>
    <router-view></router-view>
  
  </div>
</template>

<script>
import  Film   from   './views/Film.vue'
export default {
  components:{
    Film 
  }
}
</script>
