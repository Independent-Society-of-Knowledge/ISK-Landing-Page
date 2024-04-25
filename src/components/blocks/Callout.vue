<template>
  <div class="Callout  pb-0 ">
    <div class="flex-col h-full  bg-[#151415]">
      <div class="pt-[3rem] px-[26px] pb-[26px]">
        <div class="title  flex-col gap-[10px]">
          <div class="the-title text-5xl text-[#575658] ">
            {{ title }}
          </div>
          <div class="sub-title text-sm text-[#575658]">
            {{ subtitle }}
          </div>
        </div>
        <div class="description text-md text-wrap text-justify mt-[1rem]">
          <slot name="default"/>
        </div>
      </div>
    </div>
    <div class="flex h-fit justify-end  bg-[#151415]" v-if="path">
      <router-link :to="path" class="w-fit h-fit justify-end" >
        <cv-button @click="" aria-label="button story" size="lg" kind="secondary">Learn More</cv-button>
      </router-link>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  title: String,
  subtitle: String,
  path: String
})
</script>
<style scoped>

</style>