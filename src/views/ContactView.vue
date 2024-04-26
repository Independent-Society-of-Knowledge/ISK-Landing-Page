<script setup>

import StaticContent from "../components/blocks/StaticContent.vue";

</script>

<template>
  <div class="justify-center items-center w-full gap-[2rem]">
    <StaticContent title="Contact" subtitle="Making a Connection" class="content">
      <p>We welcome all inquiries and feedback from our community. Whether you have a question, seek collaboration
        opportunities, or want to get involved with our initiatives, we're here to assist you.</p>
      <h2>Contact Methods</h2>
      <p>To ensure your message reaches the appropriate team, please use the following email addresses based on your
        inquiry type:</p>
      <h3>Projects and Collaborations</h3>
      <p>For inquiries related to ongoing projects, new project proposals, or potential collaborations, please contact
        us at:</p>
      <p><a href="mailto:projects@iskportal.com">projects@iskportal.com</a></p>
      <h3>General Inquiries</h3>
      <p>For general questions, comments, or feedback about ISK and our activities, feel free to reach out to:</p>
      <p><a href="mailto:contact@iskportal.com">contact@iskportal.com</a></p>
      <h3>Executive Team</h3>
      <p>If you need to directly communicate with the ISK executive team or CEO, you can email:</p>
      <p><a href="mailto:ceo@iskportal.com">ceo@iskportal.com</a></p>
      <p>We strive to respond to all inquiries within 2-3 business days. For urgent matters, please indicate the level
        of urgency in your message.</p>
      <p>Thank you for your interest in the Independent Society of Knowledge. We look forward to hearing from you!</p>
    </StaticContent>
  </div>
</template>

<style scoped>
.content {

  h2 {
    @apply text-3xl pb-[2rem];
  }

  h3 {
    @apply text-2xl pb-[1.5rem];
  }

  p {
    @apply text-lg  pb-[2rem];
  }

}
</style>