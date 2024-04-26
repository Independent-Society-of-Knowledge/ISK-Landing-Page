<template>
  <div class="footer px-[16px]">
    <div class="flex md:flex-row sm:flex-col justify-center items-center">
      <div class="flex flex-col w-full">
        <div class="flex flex-col w-auto gap-[3vh]">
          <div class="flex flex-row gap-[2vh] items-center">
            <IconCollab/>
            <a href="/collab">Collaboration</a>
          </div>
<!--          <div class="flex flex-row gap-[2vh] items-center">-->
<!--            <IconDonation/>-->
<!--            <div>Donations</div>-->
<!--          </div>-->
<!--          <div class="flex flex-row gap-[2vh] items-center">-->
<!--            <IconPartners/>-->
<!--            <div>Partners</div>-->
<!--          </div>-->

<!--          <div class="w-[70%] bg-white h-[2px] opacity-25 my-[1rem]"></div>-->

          <div class="flex flex-row gap-[2vh] items-center">
            <IconTerms/>
            <a href="/terms-of-use">Terms of Use</a>
          </div>
          <div class="flex flex-row gap-[2vh] items-center">
            <IconPrivacy/>
            <a href="/privacy-policy">Privacy Policy</a>
          </div>

        </div>
      </div>
      <div class="">
        <h1 class="font-bold text-white sm:text-3xl md:text-3xl lg:text-5xl lg:text-right md:text-right sm:text-center">
          Independent<br/>Society of<br/>Knowledge
        </h1>
      </div>
    </div>
    <div class="w-full text-[#88A8BF] flex items-center justify-center my-[4vh]">All rights reserved for the Independent Society of Knowledge - 2024</div>
  </div>
</template>
<script setup>
import IconCollab from "../assets/icons/collab.svg";
import IconTerms from "../assets/icons/termsOfUse.svg"
import IconPrivacy from "../assets/icons/privacy.svg"

</script>
<style scoped>

</style>
