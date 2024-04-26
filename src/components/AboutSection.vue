<script setup>

import Callout from "@/components/blocks/Callout.vue";
</script>

<template>
  <div class="lg:flex lg:flex-row md:flex-col sm:flex-col gap-[1vw] sm:flex">
    <Callout title="About" subtitle="What is ISK?" path="about">
      ISK is an authority-free platform where scientists and researchers collaborate on projects they deem important and
      intriguing,
      benefiting society through collective knowledge sharing.
    </Callout>
    <Callout title="Collaboration" subtitle="We need your support." path="collab">
      We actively welcome collaboration from anyone aligned with our values - whether experts, learners, or funders.
      If these principles resonate with you, join our journey. Visit our collaboration page to find opportunities to get
      involved and become part of our growing community.
    </Callout>
    <Callout title="Products" subtitle="What are we currently working on?" path="products">
      ISK firmly believes in a collaborative and transparent approach to science. We vision an environment
      where scientists and researchers can freely share their work, ideas, and findings without restrictive barriers
      or proprietary limitations.
    </Callout>
  </div>
</template>

<style scoped>

</style>