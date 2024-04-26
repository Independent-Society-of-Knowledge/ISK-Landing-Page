<template>
  <div class="header mt-[47px]">
    <cv-header aria-label="Carbon header" class="">
      <cv-header-name href="/" prefix="ISK">
        Portal
      </cv-header-name>
      <cv-header-nav>
        <cv-header-menu-item href="/">
          Home
        </cv-header-menu-item>

        <cv-header-menu title="Products">
          <cv-header-menu-item href="https://github.com/independent-society-of-knowledge/dedukt">
            DeduKt
          </cv-header-menu-item>
          <cv-header-menu-item href="https://github.com/independent-society-of-knowledge/molekule">
            MoleKule
          </cv-header-menu-item>
        </cv-header-menu>
        <cv-header-menu-item href="/about">
          About
        </cv-header-menu-item>
        <cv-header-menu-item href="/collab">
          Collaboration
        </cv-header-menu-item>
      </cv-header-nav>
      <template #header-global>
        <cv-header-global-action label="Github">
          <a class="flex h-full w-full items-center justify-center"
             href="https://github.com/independent-society-of-knowledge">
            <IconGithub width="20px"/>
          </a>
        </cv-header-global-action>
        <cv-header-global-action label="@ISKportal">
          <a class="flex h-full w-full items-center justify-center" href="https://x.com/iskportal">
            <IconX width="20px"/>
          </a>
        </cv-header-global-action>
        <cv-header-global-action label="Linkedin">
          <a class="flex h-full w-full items-center justify-center"
             href="https://www.linkedin.com/company/independent-society-of-knowledge">
            <IconLinkedin width="20px"/>
          </a>
        </cv-header-global-action>
      </template>
    </cv-header>
  </div>
</template>

<script setup>
import IconGithub from '@carbon/icons-vue/es/logo--github/32.js'
import IconX from '@carbon/icons-vue/es/logo--x/32.js'
import IconLinkedin from '@carbon/icons-vue/es/logo--linkedin/32.js'

</script>

<style scoped>

</style>
