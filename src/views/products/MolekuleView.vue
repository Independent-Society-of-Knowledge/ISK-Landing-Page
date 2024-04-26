<template>
  <div class="min-h-screen flex flex-col pt-5 md:pt-11 overflow-clip">
    <div class="relative z-[2]">
      <StaticContent
          title="Molekule"
          subtitle="Molecular Dynamics Toolkit"
          class="backdrop-blur-[2px] h-screen w-fit"
      >
        A comprehensive toolkit to prepare, visualize, run and post-process
        <span class="font-bold">MD</span> and <span class="font-bold">DFT</span> simulation with an all-in-one process.
        <br/>
        <br/>
        <h2>We didn't <span class="font-bold">re-invent the wheel</span>!</h2>
      </StaticContent>

      <StaticContent id="what-is-molekule" title="What is Molekule?" anchorage>
        MoleKule is an open-source, community-driven objective toolkit that empowers users to procedurally
        generate
        initial configurations for Molecular Dynamics simulations. Leveraging the full power of programming
        languages,
        this versatile toolkit offers unparalleled flexibility, enabling users to configure and extend its
        functionality as needed,
        without being constrained by limited plugins. Despite its robust capabilities, MoleKule boasts a
        remarkably
        user-friendly interface,
        requiring only a quick review of straightforward examples to grasp its core functionality. With its
        reusable
        and modular design,
        users can effortlessly repurpose and build upon existing configurations, fostering a collaborative
        ecosystem
        where airtight, battle-tested,
        and clean code is continuously refined and expanded by the community. Whether you're a seasoned researcher
        or a budding enthusiast,
        MoleKule streamlines the intricate process of setting up Molecular Dynamics simulations, enabling you to
        focus on your scientific
        pursuits while benefiting from the collective wisdom of a thriving open-source community.
      </StaticContent>
    </div>
    <div class="absolute w-full h-screen top-0 left-0 overflow-clip bg-white opacity-30">
      <img src="@/assets/molekuleproduct.jpg"
           class=" transition-transform w-screen h-screen object-cover translate-x-[-20%] md:translate-x-[-50%] mix-blend-hard-light">
    </div>
  </div>
</template>
<script setup lang="ts">

import StaticContent from "@/components/blocks/StaticContent.vue";
</script>
<style scoped>

</style>
