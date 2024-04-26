<script setup>

import StaticContent from "../components/blocks/StaticContent.vue";
</script>

<template>
  <div class="justify-center items-center w-full gap-[2rem]">
    <StaticContent title="Privacy Policy" subtitle="Independent Society of Knowledge" class="content">
        <h3>Introduction</h3>
        <p>Independent Society of Knowledge is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard the information you provide to us through our website.</p>

        <h3>Information We Collect</h3>
        <p>Our website does not collect any personal information from visitors. We do not have any login or signup functionality, and we do not use cookies or other tracking technologies to gather data about our users.</p>

        <h3>Use of Information</h3>
        <p>Since we do not collect any personal information, we do not use or share any user data.</p>

        <h3>External Links</h3>
        <p>Our website may contain links to third-party websites or resources. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party websites you visit.</p>


        <h3>Children's Privacy</h3>
        <p>Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children.</p>



        <h3>Changes to This Privacy Policy</h3>
        <p>We reserve the right to modify or update this Privacy Policy at any time. Any changes will be effective immediately upon posting the revised policy on our website.</p>


        <h3>Contact Us</h3>
        <p>If you have any questions or concerns about this Privacy Policy, please contact us at [email address].</p>


      <footer>
        <p>&copy; Independent Society of Knowledge</p>
      </footer>

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
