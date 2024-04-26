<script setup>


import StaticContent from "../components/blocks/StaticContent.vue";
</script>

<template>
  <div class="justify-center items-center w-full gap-[2rem]">
    <StaticContent title="Terms Of Use" subtitle="Independent Society of Knowledge" class="content">
      <section>
        <h3>Introduction</h3>
        <p>Welcome to the Independent Society of Knowledge website ("the Site"). By accessing or using the Site, you
          agree to be bound by these Terms of Use and our <a href="#">Privacy Policy</a>. If you do not agree to these
          terms, please do not use the products and packages developed by ISK.</p>
      </section>

      <section>
        <h3>Intellectual Property</h3>
        <p>The Site and all its content, including but not limited to text, graphics, logos, and software, are
          the property of Independent Society of Knowledge or its licensors and are protected by copyright, trademark,
          and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works
          from the Site content without our prior written consent.</p>
      </section>

      <section>
        <h3>User Conduct</h3>
        <p>You agree to use the Site only for lawful purposes and in a manner that does not infringe upon the rights of
          others or restrict or inhibit their use and enjoyment of the Site. Prohibited activities include, but are not
          limited to, hacking attempts, harassment, posting illegal content, or distributing malware.</p>
      </section>

      <section>
        <h3>Products and Software</h3>
        <p>Independent Society of Knowledge offers various programming packages and software products through the Site and its github organization page.
          These products are licensed under the <a href="https://www.gnu.org/licenses/gpl-3.0.en.html" target="_blank">GNU
            General Public License v3.0</a>. You may use, modify, and distribute these products in accordance with the
          terms of the GNU GPL v3.0 license.</p>
        <p>While we strive to ensure the quality and functionality of our products, they are provided "as is" without
          warranties of any kind, either express or implied. Independent Society of Knowledge shall not be liable for
          any damages arising from the use or inability to use our products.</p>
      </section>

      <section>
        <h3>Third-Party Links and Content</h3>
        <p>The Site may contain links to third-party websites or resources. We do not endorse or assume any
          responsibility for the content, privacy policies, or practices of any third-party websites or resources. You
          use them at your own risk.</p>
      </section>

      <section>
        <h3>Limitation of Liability</h3>
        <p>The Site is provided "as is" without warranties of any kind, either express or implied. Independent Society
          of Knowledge shall not be liable for any direct, indirect, incidental, consequential, or punitive damages
          arising from the use of the Site or its content.</p>
      </section>

      <section>
        <h3>Governing Law</h3>
        <p>These Terms of Use shall be governed by and construed in accordance with the laws of [Your Jurisdiction]. Any
          legal proceedings arising out of or relating to these Terms of Use or your use of the Site shall be subject to
          the exclusive jurisdiction of the courts located in [Your Jurisdiction].</p>
      </section>

      <section>
        <h3>Modifications</h3>
        <p>Independent Society of Knowledge reserves the right to modify or update these Terms of Use at any time
          without prior notice. Your continued use of the Site after any such changes constitutes your acceptance of the
          new Terms of Use.</p>
      </section>

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