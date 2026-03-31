<script setup>
import RSHeader from "~/components/layouts/Header.vue";
import RSSideMenu from "~/components/layouts/sidemenu/index.vue";
</script>

<template>
  <div class="min-h-screen bg-[#f8f9fb]">
    <RSHeader />
    <div class="flex flex-col md:flex-row">
      <RSSideMenu />
      <main class="w-full min-w-0 flex-1 bg-white p-3 transition-all duration-300 ease-in-out md:p-4">
        <slot />
      </main>
    </div>
  </div>
</template>
