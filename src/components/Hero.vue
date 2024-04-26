<template>
  <div class="w-full h-screen  flex flex-row justify-center items-center  hero transition-all">
    <div class="z-10 w-full h-screen">
      <div
          class="
          flex flex-col w-full  gap-10 justify-end p-[3vh] text-wrap text-right backdrop-blur bg-black bg-opacity-50 h-[70vh]  text-white">
        <h1 class="font-bold text-white sm:text-4xl md:text-6xl lg:text-8xl">
          Independent Society of Knowledge
        </h1>
        <h3 class="font-light text-white sm:text-xl md:text-2xl lg:text-3xl ">
          A Decentralized Academia.
        </h3>
      </div>
      <div class=" lg:w-full min-w-0 bg-red-400 sm:w-0"></div>
    </div>
    <div class="video-wrapper ">
      <video playsinline autoplay muted loop >
        <source src="../assets/cover.webm" type="video/webm">
      </video>
    </div>
  </div>

</template>
<script setup>


</script>

<style scoped>

video {
  object-fit: cover;
  @apply w-screen h-screen;

  position: absolute;
  top: 0;
  left: 0;
}

.video-wrapper {
  z-index: 0;
  @apply w-screen h-screen;
  overflow: hidden;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>