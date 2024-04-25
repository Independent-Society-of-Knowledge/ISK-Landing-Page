<template>

  <div class="flex h-fit relative">
    <the-header/>
    <div class="h-full flex"></div>
  </div>
  <div class="flex  flex-col justify-center px-[15vh]">
    <div class="flex flex-col justify-center">
      <router-view/>
    </div>
    <div>
      <the-footer/>
    </div>
  </div>


</template>

<script setup>
import {RouterView} from "vue-router";
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
</script>
<style scoped>
.headerComponent {
  position: fixed !important;
}
</style>