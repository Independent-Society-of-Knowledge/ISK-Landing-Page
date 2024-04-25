<script setup>

import StaticContent from "../components/blocks/StaticContent.vue";
import Callout from "../components/blocks/Callout.vue";
</script>

<template>
  <div class="justify-center items-center w-full gap-[2rem]">
    <StaticContent title="About Us" subtitle="Getting to Know ISK." class="content">
      <div>
        <h2>
          Mission and Vision
        </h2>
        <p>
          Independent Society of Knowledge is a decentralized institute for research and
          education of science, engineering and philosophy. It is based on three core
          values, Decentralization, Open-Access, and Collaboration. The target audience
          of our products are people who respect these core values. We strive to build
          frameworks, platforms, and engagements that promotes our ideas in academia,
          facilitating knowledge sharing, promoting interdisciplinary collaboration, and
          bridging the gap between academia and industry.
        </p>
      </div>
      <div class="flex flex-row gap-[2rem] mb-[2rem]">
        <Callout title="Decentralization" subtitle="">
          <p>
            Every institute around the globe is being held under
            an authority, governments and big funders, although this had led academia
            to grow, in our opinion there’s a need for an alternative route for academic
            journeys. For ISK to be decentralized means to give researches platforms and
            values that would let them research in the route they deem necessary. In our
            opinion ISK can benefit science beside the traditional academia.
          </p>
        </Callout>
        <Callout title="Collaboration" subtitle="">
          <p>
            Through the age of computers, there are many open-source projects. For ISK collaboration describes the same
            attitude.
            We believe that by providing platforms and frameworks necessary we can bring
            science and engineering community closer. By let them collaborating on the
            same projects we can all benefit from such projects more.
          </p>
        </Callout>
      </div>
       <div class="flex flex-col gap-[2rem] mb-[2rem]">
         <Callout title="Open-Access" subtitle="">
           <p>
             ISK aims to provide people the knowledge at ease. We
             believe by letting people having a collaboration on science, and by letting that
             collaboration open and easy to access, we can help researches in a better way.
             We do not seek to provide access to ones who do not appreciate open-access for
             all.
           </p>
         </Callout>
       </div>

      <Callout title="Vision" subtitle="">
        <p>
          Our vision is to create an institute that grants humanity a
          step forward in solving academia challenges and helps science, engineering and
          philosophy grow more freely. We aim to revolutionize the way knowledge is
          created, disseminated, and utilized, leading to breakthrough discoveries, innovative
          solutions, and sustainable progress for future generations. We seek to establish
          a global network of collaborators, develop cutting-edge tools and resources,
          and catalyze meaningful change at the intersection of academia, industry, and
          society.
        </p>
      </Callout>
      <div class="mt-[2rem]">
        <h2>Join Our Community</h2>
        <p>We invite passionate individuals, organizations, and institutions to join our growing community. Together, we can forge new paths, challenge conventional thinking, and shape a future where knowledge knows no boundaries.
          Explore our <a href="/collab">ongoing projects</a>, participate in our <a href="/events">events and discussions</a>, and learn more about how you can <a href="/get-involved">get involved</a> with ISK.</p>
      </div>
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