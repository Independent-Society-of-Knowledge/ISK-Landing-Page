<template>
  <div class="flex justify-center mt-[4rem] mb-[4rem] opacity-25">
    <div class="flex justify-center items-center w-[50%] h-[2px] bg-white "></div>
  </div>
  <div class="footer ">

    <div class="flex flex-row">
      <div class="flex flex-col w-full">
        <div class="flex flex-col w-full gap-5">
          <div class="flex flex-row gap-[15px] items-center">
            <IconCollab/>
            <div>Collaboration</div>
          </div>
          <div class="flex flex-row gap-[15px] items-center">
            <IconDonation/>
            <div>Donations</div>
          </div>
          <div class="flex flex-row gap-[15px] items-center">
            <IconPartners/>
            <div>Partners</div>
          </div>

          <div class="w-[70%] bg-white h-[2px] opacity-25 my-[1rem]"></div>

          <div class="flex flex-row gap-[15px] items-center">
            <IconTerms/>
            <div>Terms of Use</div>
          </div>
          <div class="flex flex-row gap-[15px] items-center">
            <IconPrivacy/>
            <div>Privacy Policy</div>
          </div>

        </div>
      </div>
      <div class="logo">
        <Logo color="white"/>
      </div>
    </div>
    <div class="w-full text-[#88A8BF] flex items-center justify-center my-[29px]">All rights reserved for the Independent Society of Knowledge - 2024</div>
  </div>
</template>
<script setup>

import Logo from "@/components/blocks/Logo.vue";
import IconCollab from "@/assets/icons/collab.svg";
import IconPartners from "@/assets/icons/partners.svg"
import IconDonation from "@/assets/icons/donation.svg"
import IconTerms from "@/assets/icons/termsOfUse.svg"
import IconPrivacy from "@/assets/icons/privacy.svg"

</script>
<style scoped>

</style>