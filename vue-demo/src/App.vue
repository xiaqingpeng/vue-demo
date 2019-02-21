<template>
  <div>
    <router-view name="top"></router-view>
    <router-view ></router-view>
  </div>
</template>
<script>
import MzFooter from './components/MzFooter/Index';
export default {
    components:{
         MzFooter
    }
}
</script>
