<template>

<div class="App">
  <div class="App__nav">
    <the-header/>
  </div>
  <div class="flex flex-col transition-transform gap-[8vh] px-[3vw]">
    <div class="App__main ">
      <Transition>
        <router-view/>
      </Transition>
    </div>
    <div class="App__footer">
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


</style>