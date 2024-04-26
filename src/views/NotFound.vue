

<template>
  <div class="w-full h-screen  flex flex-row justify-center items-center  hero transition-all">
    <div class="z-10 w-screen h-screen">
      <div
          class="
          flex flex-col w-screen justify-center p-[3vh] text-wrap text-right backdrop-blur-xl bg-black bg-opacity-50 h-full  text-white">
        <h1 class="font-bold text-white sm:text-4xl md:text-6xl lg:text-8xl">
          404 Not Found
        </h1>
        <h3 class="font-light text-white sm:text-xl md:text-2xl lg:text-3xl ">
          The Page you are looking for cannot be found. Get back to <a href="/">home</a>
        </h3>
      </div>

    </div>
    <div class="video-wrapper ">
      <video playsinline autoplay muted loop>
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
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
}

.video-wrapper {
  z-index:9;
  overflow: hidden;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>