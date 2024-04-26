<template>
  <article ref="el" class="title mt-[1.5vh] px-[3.5vh] prose md:prose-xl lg:prose-2xl prose-white max-w-none">
    <div class="title-bar flex flex-row mb-[3vh] w-full h-fit items-baseline">
      <div class="w-fit">
        <h1 style="margin: 0; height: fit-content">{{ title }}</h1>
        <h4 class="whitespace-nowrap font-light" v-if="subtitle" style="margin: 0; height: fit-content"> {{
            subtitle
          }} </h4>
      </div>
      <button
          v-if="anchorage"
          class="transition-all duration-300 text-5xl text-gray-500 hover:text-white hover:underline"
          @click="()=>{
            const path = $route.fullPath.split('#')[0]
            const route = path + '#' + el?.id
            const absoluteURL = win.origin + route
            clip.copy(absoluteURL)
          }"
      >
        #
      </button>
    </div>
    <slot/>
  </article>
</template>
<script setup lang="ts">

import {onMounted, ref} from "vue";
import {useClipboard} from "@vueuse/core";
import {useRoute} from "vue-router";

const clip = useClipboard()
const win = window
const route = useRoute()
const props = withDefaults(
    defineProps<
        {
          title: string,
          subtitle?: string,
          anchorage?: boolean
        }
    >(),
    {
      anchorage: false
    }
)

const el = ref<HTMLDivElement | null>(null)
onMounted(() => {
  if (props.anchorage && el.value?.id == route.hash?.slice(1)) {
    el.value?.scrollIntoView({behavior: 'smooth'})
  }
})
</script>


<style scoped>

</style>
