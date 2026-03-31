<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { useLayoutStore } from "~/stores/layout";
import { useUserStore } from "~/stores/user";
import { useAdminToast } from "~/composables/useAdminToast";

const layoutStore = useLayoutStore();
const userStore = useUserStore();
const { toasts } = useAdminToast();

const settingsOpen = ref(false);
const settingsDropdownRef = ref(null);

const themeChoices = [
  { label: "Violet", value: "violet", dot: "bg-violet-500" },
  { label: "Blue", value: "blue", dot: "bg-blue-500" },
  { label: "Green", value: "green", dot: "bg-emerald-500" },
  { label: "Red", value: "red", dot: "bg-rose-500" },
  { label: "B&W", value: "black-white", dot: "bg-slate-900" },
  { label: "Grey", value: "grey", dot: "bg-neutral-500" },
];

const userInitials = computed(() => {
  const name = userStore.user?.name || "Admin";
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
});

const userName = computed(() => {
  const name = userStore.user?.name || "Admin";
  return name.length > 20 ? name.slice(0, 20) + "..." : name;
});

const userRole = computed(() => userStore.user?.role || "Administrator");

const latestToast = computed(() => toasts.value.at(-1) ?? null);

function toastVariantClass(variant) {
  if (variant === "success")
    return "bg-gradient-to-br from-emerald-200 to-emerald-100 text-emerald-950";
  if (variant === "error")
    return "bg-gradient-to-br from-rose-200 to-rose-100 text-rose-950";
  return "bg-gradient-to-br from-blue-200 to-blue-100 text-blue-950";
}

function toastIconClass(variant) {
  if (variant === "success") return "bg-emerald-200 text-emerald-800";
  if (variant === "error") return "bg-rose-200 text-rose-800";
  return "bg-blue-200 text-blue-800";
}

function handleDocumentClick(event) {
  if (!settingsOpen.value) return;
  if (!settingsDropdownRef.value) return;
  if (settingsDropdownRef.value.contains(event.target)) return;
  settingsOpen.value = false;
}

function handleEscape(event) {
  if (event.key === "Escape") settingsOpen.value = false;
}

onMounted(() => {
  document.addEventListener("click", handleDocumentClick);
  document.addEventListener("keydown", handleEscape);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleDocumentClick);
  document.removeEventListener("keydown", handleEscape);
});
</script>

<template>
  <header
    class="sticky top-0 z-40 flex h-10 items-center justify-between border-b border-slate-200 bg-white px-5"
  >
    <!-- Left: site icon -->
    <div class="flex items-center gap-1">
      <div
        class="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-[var(--accent-600)] to-[var(--accent-500)]"
      >
        <Icon name="ic:outline-shield" class="h-[11px] w-[11px] text-white" size="11px" />
      </div>
    </div>

    <!-- Right: toast + user + settings + bell + logout -->
    <div class="flex items-center self-stretch">
      <!-- Toast region -->
      <div class="flex h-full max-w-[22rem] items-stretch gap-2 overflow-hidden py-0">
        <Transition
          enter-active-class="transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
          enter-from-class="translate-x-[110%]"
          enter-to-class="translate-x-0"
          leave-active-class="transition-transform duration-[1500ms] ease-[cubic-bezier(0.4,0,1,1)]"
          leave-from-class="translate-x-0"
          leave-to-class="translate-x-[110%]"
        >
          <div
            v-if="latestToast"
            :key="latestToast.id"
            class="relative flex h-full min-w-[14rem] items-center overflow-hidden px-2 py-1 shadow-sm will-change-transform"
            :class="toastVariantClass(latestToast.variant)"
          >
            <div class="flex items-center gap-2">
              <div class="rounded-full p-0.5" :class="toastIconClass(latestToast.variant)">
                <Icon
                  v-if="latestToast.variant === 'success'"
                  name="ic:outline-check-circle"
                  size="14px"
                  class="shrink-0"
                />
                <Icon
                  v-else-if="latestToast.variant === 'error'"
                  name="ic:outline-cancel"
                  size="14px"
                  class="shrink-0"
                />
                <Icon v-else name="ic:outline-info" size="14px" class="shrink-0" />
              </div>
              <div class="min-w-0 flex-1">
                <p class="truncate text-[10px] font-semibold uppercase leading-none tracking-[0.11em] opacity-70">
                  {{ latestToast.variant }}
                </p>
                <p class="mt-[2px] truncate text-xs font-semibold leading-tight">
                  {{ latestToast.title
                  }}<span v-if="latestToast.message" class="font-normal opacity-90">
                    - {{ latestToast.message }}</span
                  >
                </p>
              </div>
            </div>
          </div>
        </Transition>
      </div>

      <span class="h-full w-px bg-slate-200" />

      <!-- User profile -->
      <div
        class="group relative flex h-full items-center gap-2 px-4 transition-colors hover:bg-[var(--accent-600)] cursor-pointer"
      >
        <div
          class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent-600)] to-[var(--accent-500)] text-[10px] font-semibold text-white"
        >
          {{ userInitials }}
        </div>
        <div class="leading-tight">
          <p class="text-sm font-medium text-slate-700 group-hover:text-white">{{ userName }}</p>
          <p class="text-[11px] text-slate-500 group-hover:text-white/80">{{ userRole }}</p>
        </div>
        <span
          class="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-900 px-2 py-1 text-xs text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100"
        >Profile</span>
      </div>

      <span class="h-full w-px bg-slate-200" />

      <!-- Settings dropdown -->
      <div ref="settingsDropdownRef" class="relative flex h-full items-stretch">
        <button
          class="group relative flex h-full items-center px-4 text-slate-500 transition-colors hover:bg-[var(--accent-600)] hover:text-white"
          @click.stop="settingsOpen = !settingsOpen"
        >
          <Icon name="ic:outline-settings" size="16px" />
          <span
            class="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-900 px-2 py-1 text-xs text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100"
          >Settings</span>
        </button>

        <div
          v-if="settingsOpen"
          class="absolute right-0 top-full z-50 mt-2 w-56 rounded-lg border border-slate-200 bg-white p-3 shadow-lg"
        >
          <p class="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
            Theme color
          </p>
          <div class="grid grid-cols-2 gap-2">
            <button
              v-for="theme in themeChoices"
              :key="theme.value"
              class="flex items-center justify-between rounded-md border px-2.5 py-2 text-xs font-medium transition-colors"
              :class="
                layoutStore.themeColor === theme.value
                  ? 'border-[var(--accent-500)] bg-[var(--accent-50)] text-[var(--accent-700)]'
                  : 'border-slate-200 text-slate-600 hover:border-[var(--accent-ring)] hover:text-slate-900'
              "
              @click="layoutStore.setThemeColor(theme.value)"
            >
              <span class="flex items-center gap-2">
                <span class="h-2.5 w-2.5 rounded-full" :class="theme.dot" />
                {{ theme.label }}
              </span>
              <Icon
                v-if="layoutStore.themeColor === theme.value"
                name="ic:outline-check"
                size="14px"
              />
            </button>
          </div>

          <div class="mt-3 border-t border-slate-200 pt-3">
            <button
              class="flex w-full items-center justify-between rounded-md border border-slate-200 px-2.5 py-2 text-xs font-medium text-slate-700 transition-colors hover:border-[var(--accent-ring)]"
              @click="layoutStore.toggleCompact()"
            >
              <span>Compact sidebar</span>
              <span
                class="relative inline-flex h-4 w-7 items-center rounded-full transition-colors"
                :class="layoutStore.isCompact ? 'bg-[var(--accent-600)]' : 'bg-slate-300'"
              >
                <span
                  class="inline-block h-3 w-3 transform rounded-full bg-white transition"
                  :class="layoutStore.isCompact ? 'translate-x-3.5' : 'translate-x-0.5'"
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      <span class="h-full w-px bg-slate-200" />

      <!-- Notifications -->
      <button
        class="group relative flex h-full items-center px-4 text-slate-500 transition-colors hover:bg-[var(--accent-600)] hover:text-white"
      >
        <Icon name="ic:round-notifications-none" size="16px" />
        <span class="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-white" />
        <span
          class="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-900 px-2 py-1 text-xs text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100"
        >Notifications</span>
      </button>

      <span class="h-full w-px bg-slate-200" />

      <!-- Logout -->
      <NuxtLink
        to="/auth/login-v1"
        class="group relative flex h-full items-center px-4 text-slate-500 transition-colors hover:bg-[var(--accent-600)] hover:text-white"
      >
        <Icon name="ic:outline-logout" size="16px" />
        <span
          class="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-900 px-2 py-1 text-xs text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100"
        >Logout</span>
      </NuxtLink>
    </div>
  </header>
</template>
