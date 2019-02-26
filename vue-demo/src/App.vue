<template>
  <div>
    <transition
      appear
      mode="out-in"
      enter-active-class="animated bounceInUp"
      leave-active-class="animated bounceOutDown"
    >
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import MzFooter from "@/components/MzFooter/Index";
export default {
  components: {
    MzFooter
  }
};
</script>
