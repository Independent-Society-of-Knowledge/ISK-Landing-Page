<template>
  <div class="header mt-[47px]">
    <cv-header aria-label="Carbon header" class="">
      <cv-header-name href="/" prefix="ISK">
        Portal
      </cv-header-name>
      <cv-header-nav>
        <cv-header-menu-item>
          Home
        </cv-header-menu-item>
        <cv-header-menu title="Products">
          <cv-header-menu-item>
            DeduKt
          </cv-header-menu-item>
          <cv-header-menu-item>
            MoleKule
          </cv-header-menu-item>
        </cv-header-menu>
        <cv-header-menu-item>
          Timeline
        </cv-header-menu-item>
      </cv-header-nav>
    </cv-header>
  </div>
</template>

<script setup>
</script>

<style scoped>
.headerComponent {
  :deep(header) {

    position: fixed !important;

  }
}

</style>
