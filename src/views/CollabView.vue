<template>
  <div class="   justify-center items-center w-full gap-[2rem]">
    <StaticContent title="Collaboration" subtitle="ISK depends on people." class="content">
      <div>
        <p>
          At ISK, we believe in the power of open collaboration to drive innovation and accelerate progress. Our
          projects are open-source, inviting contributors from around the world to join us in our pursuit of knowledge
          and discovery.
        </p>
      </div>

      <div>
        <h2>Join Our Open-Source Projects</h2>
        <p>Our open-source projects span a wide range of disciplines, from cutting-edge scientific research to
          groundbreaking technological developments. By embracing an open and collaborative approach, we tap into the
          collective intelligence of our global community, fostering diverse perspectives and cross-pollination of
          ideas.</p>
        <p>Anyone, regardless of their background or affiliation, is welcome to contribute to our ongoing projects.
          Whether you're a seasoned researcher, a passionate hobbyist, or a curious mind seeking new challenges, we
          encourage you to explore our <a href="/projects">project repository</a> and find an area that aligns with your
          interests and expertise.</p>
      </div>

      <div class="flex flex-col gap-[2rem]">
        <Callout title="Become a Core Contributor" subtitle="">
          <p>While we welcome external contributions, we also understand the value of having dedicated core contributors
            who drive our projects forward with sustained commitment and deep involvement. If you're passionate about
            our mission and would like to become a core contributor to one of our projects, please reach out to us at <a
                href="mailto:contact@iskportal.com">contact@iskportal.com</a>.</p>
        </Callout>

        <Callout title="Propose a New Project" subtitle="">
          <p>Do you have a groundbreaking idea or a novel research concept that you believe could benefit from the
            collective power of our community? We encourage you to propose a new project under the ISK umbrella. By
            doing so, you'll gain access to our resources, collaborative frameworks, and a network of like-minded
            individuals who can help turn your vision into reality.</p>
          <p>To initiate a new project proposal, please contact us at <a href="mailto:ceo@iskportal.com">ceo@iskportal.com</a>
            or <a href="mailto:projects@iskportal.com">projects@iskportal.com</a>, and our team will guide you through
            the process.</p>
        </Callout>



        <Callout title="Join the Movement" subtitle="">
          <p>At ISK, we are more than just an organization; we are a movement driven by the belief that open
            collaboration can unlock boundless possibilities. Join us on this exciting journey, where minds converge,
            ideas flourish, and the boundaries of knowledge are continuously pushed forward.</p>
          <p>Together, we can shape a future where discovery knows no limits, and the pursuit of knowledge is a truly
            collaborative endeavor.</p>
        </Callout>
      </div>
    </StaticContent>
  </div>
</template>
<script setup>
import StaticContent from "../components/blocks/StaticContent.vue";
import Callout from "../components/blocks/Callout.vue";
</script>

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