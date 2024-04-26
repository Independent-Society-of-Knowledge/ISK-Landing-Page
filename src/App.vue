<template>

<div class="App">
  <div class="App__nav">
    <the-header/>
  </div>
  <div class="flex flex-col transition-transform gap-[8vh] limited-width items-center">
    <div class="App__main">
      <Transition>
        <router-view/>
      </Transition>
    </div>
    <div class="App__footer w-full">
      <the-footer/>
    </div>
  </div>
</div>

</template>

<script setup>
import {RouterView} from "vue-router";
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";

</script>
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
