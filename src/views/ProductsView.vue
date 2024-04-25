<script setup>

import StaticContent from "../components/blocks/StaticContent.vue";
</script>

<template>
  <StaticContent title="Products" subtitle="What are we currently working on.">
    <div class="flex flex-col gap-[2rem]">
      <div class="backgroundDeduKt  flex flex-row w-full">
        <div class="max-w-full w-full min-w-0"></div>
        <div class="content flex flex-col bg-black bg-opacity-75 h-full w-full backdrop-blur-[3px]">
          <div class="p-[2rem]">
            <StaticContent title="DeduKt" subtitle="A Framework for Mathematics">
              DeduKt is our humble attempt to advance the frontiers of mathematical leverage by synergy - blending rigor
              with intuition,
              computation with logic, and capability with accessibility through open-source advancement.
              We warmly welcome contributors across specializations to join our mission of further democratizing
              quantitative
              understanding via intelligence and to reshape what mathematical practice means in the 21st century means.
              Please reach out if you would like to get involved and help build the future of mathematics!
            </StaticContent>
          </div>
          <div class="flex h-fit justify-end mt-[1rem]">
            <a href="https://github.com/Independent-Society-of-Knowledge/Dedukt">
              <cv-button kind="secondary" size="lg">
                More
              </cv-button>
            </a>
          </div>
        </div>

      </div>

      <div class="backgroundMoleKule flex flex-row w-full">
        <div class="content flex flex-col bg-black bg-opacity-75 h-full w-full backdrop-blur-[3px]">
          <div class="p-[2rem]">
            <StaticContent title="MoleKule" subtitle="Molecular Dynamics Reformed">
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
          <div class="flex h-fit justify-end mt-[1rem]">
            <a href="https://github.com/Independent-Society-of-Knowledge/MoleKule/">
              <cv-button kind="secondary" size="lg">
                More
              </cv-button>
            </a>
          </div>


        </div>
        <div class="max-w-full w-full min-w-0"></div>

      </div>
    </div>
  </StaticContent>

</template>

<style scoped>
.backgroundDeduKt {
  background-image: url("../assets/deduktproduct.jpg");
  background-size: cover;
}

.backgroundMoleKule {
  background-image: url("../assets/molekuleproduct.jpg");
  background-size: cover;
}
</style>