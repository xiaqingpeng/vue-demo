 
<template>
  <div class="mz-home">
    <!-- 这里得要有个坑，去显示  film cinema center -->
    <transition appear mode="out-in" enter-active-class="animated bounceInUp"  leave-active-class="animated bounceOutDown">
      <router-view></router-view>
    </transition>

    <mz-footer></mz-footer>
  </div>
</template>

<script>
import MzFooter from "@/components/MzFooter/Index.vue";

export default {
  components: {
    "mz-footer": MzFooter
  }
};
</script>
