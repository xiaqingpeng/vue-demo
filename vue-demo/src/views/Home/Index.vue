 
<template>
  <div class="mz-home">
    <!-- 这里得要有个坑，去显示  film cinema center -->
    <router-view></router-view>
    <mz-footer></mz-footer>
  </div>
</template>

<script>
import MzFooter from "@/components/MzFooter/Index.vue";

export default {
  components: {
   "mz-footer":MzFooter
  }
};
</script>
