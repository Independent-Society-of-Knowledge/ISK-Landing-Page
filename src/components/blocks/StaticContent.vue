<template>
  <div class="title  mt-[1.5vh] px-[3.5vh]">
    <div class="title-bar  flex flex-row mb-[3vh] w-full h-fit">
      <div class="w-fit">
        <h1 class="text-7xl font-bold">{{ title }}</h1>
        <h2 class="flex text-ls justify-end font-light"> {{ subtitle }} </h2>
      </div>
    </div>
    <div class="content text-justify text-lg">
      <slot/>
    </div>
  </div>
</template>
<script setup>

const props = defineProps({
  title: String,
  subtitle: String,
})
</script>


<style scoped>

</style>