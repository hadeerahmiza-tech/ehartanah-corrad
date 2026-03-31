<script setup>
useHead({
  title: "corradUI - NuxtJS Admin Dashboard Template",
  description: "Home page",
  htmlAttrs: {
    lang: "en",
  },
});

const loading = ref(true);

onMounted(async () => {
  // Hide loading indicator if not hydrating
  setTimeout(() => {
    loading.value = false;
  }, 1000);

  // Get theme from localStorage
  let theme = localStorage.getItem("theme") || "default";
  document.documentElement.setAttribute("data-theme", theme);

  // Apply accent theme color from persisted layout store
  const { useLayoutStore } = await import("~/stores/layout");
  const layoutStore = useLayoutStore();
  document.documentElement.setAttribute("data-theme-color", layoutStore.themeColor || "violet");
});
</script>

<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <Loading v-if="loading" />
      <NuxtPage :key="$route.fullPath" v-else />
    </NuxtLayout>
  </div>
</template>
