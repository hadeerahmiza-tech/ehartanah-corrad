<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useLayoutStore } from "~/stores/layout";
import Menu from "~/navigation/index.js";

const route = useRoute();
const layoutStore = useLayoutStore();

const isCollapsed = computed(() => layoutStore.isCollapsed);
const isCompact = computed(() => layoutStore.isCompact);

const rowBaseClass = computed(() =>
  isCompact.value
    ? "gap-2.5 px-3 py-1 text-[13px] leading-tight"
    : "gap-2.5 px-3 py-1.5 text-sm"
);

const collapsedRowBaseClass = computed(() =>
  isCompact.value
    ? "md:justify-center md:px-0 md:py-1.5 gap-2.5 px-3 py-1"
    : "md:justify-center md:px-0 md:py-2.5 gap-2.5 px-3 py-1.5"
);

// Track open submenus
const openMenus = reactive({});

function toggleMenu(key) {
  openMenus[key] = !openMenus[key];
}

function isActive(path) {
  if (!path) return false;
  if (path === "/") return route.path === "/";
  return route.path.startsWith(path);
}

function itemClass(path) {
  if (isActive(path)) {
    return "border border-[var(--accent-200)] bg-[var(--accent-50)] font-medium text-[var(--accent-700)]";
  }
  return "border border-transparent text-slate-900";
}

function childClass(path) {
  if (route.path === path) {
    return "border border-[var(--accent-200)] bg-[var(--accent-50)] font-medium text-[var(--accent-700)]";
  }
  return "border border-transparent text-slate-600";
}

function isGroupActive(items) {
  if (!items) return false;
  return items.some((item) => {
    if (item.path && isActive(item.path)) return true;
    if (item.child && item.child.length > 0) return isGroupActive(item.child);
    return false;
  });
}

// Auto-open menus for active route
onMounted(() => {
  Menu.forEach((group, gi) => {
    if (!group.child) return;
    group.child.forEach((item, ii) => {
      const key = `${gi}-${ii}`;
      if (item.child && item.child.length > 0 && isGroupActive(item.child)) {
        openMenus[key] = true;
      }
    });
  });
});
</script>

<template>
  <aside
    class="relative flex flex-col border-r border-slate-200 bg-slate-50/50 transition-[width] duration-300 ease-in-out md:min-h-[calc(100vh-40px)]"
    :class="isCollapsed ? 'w-full md:w-14' : 'w-full md:w-64'"
  >
    <!-- Collapse toggle button -->
    <button
      class="absolute -right-3.5 top-10 z-40 hidden h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-[var(--accent-600)] text-white shadow-md transition-all hover:bg-[var(--accent-700)] hover:shadow-lg md:flex"
      :title="isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'"
      @click="layoutStore.toggleCollapsed()"
    >
      <Icon
        name="ic:outline-keyboard-arrow-down"
        size="16px"
        class="transition-transform duration-200"
        :class="isCollapsed ? '-rotate-90' : 'rotate-90'"
      />
    </button>

    <!-- Logo -->
    <div
      class="border-b border-slate-200 bg-white px-3 py-3"
      :class="isCollapsed ? 'md:hidden' : ''"
    >
      <NuxtLink to="/" class="flex h-10 items-center justify-center overflow-hidden">
        <img
          class="h-8 block"
          src="@/assets/img/logo/logo-word-black-ui.svg"
          alt="Logo"
        />
      </NuxtLink>
    </div>

    <!-- Navigation -->
    <nav class="flex-1 p-3" :class="isCollapsed ? 'md:overflow-visible md:px-0 md:py-2' : ''">
      <div v-for="(group, gi) in Menu" :key="gi">
        <!-- Group label -->
        <p
          v-if="group.header"
          class="px-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400"
          :class="[gi === 0 ? 'mb-1' : 'mb-1 mt-4', isCollapsed ? 'md:hidden' : '']"
        >
          {{ group.header }}
        </p>

        <!-- Group items -->
        <div
          v-for="(item, ii) in group.child"
          :key="ii"
          class="mb-0.5"
        >
          <!-- Item with children (expandable) -->
          <button
            v-if="item.child && item.child.length > 0"
            type="button"
            class="group relative flex w-full items-center rounded-lg text-left font-medium transition-all hover:bg-[var(--accent-50)]"
            :class="[
              isCollapsed ? collapsedRowBaseClass : rowBaseClass,
              isCollapsed && isGroupActive(item.child)
                ? 'md:border md:border-[var(--accent-200)] md:bg-[var(--accent-50)] md:text-[var(--accent-700)] text-slate-900'
                : 'text-slate-900',
              !isCollapsed ? (isGroupActive(item.child) ? 'border border-[var(--accent-200)] bg-[var(--accent-50)] text-[var(--accent-700)]' : 'border border-transparent') : '',
            ]"
            @click="isCollapsed ? layoutStore.toggleCollapsed() : toggleMenu(`${gi}-${ii}`)"
          >
            <Icon
              v-if="item.icon"
              :name="item.icon"
              size="16px"
              class="shrink-0 transition-colors"
              :class="[
                isCollapsed ? 'md:h-5 md:w-5 h-4 w-4' : 'h-4 w-4',
                isGroupActive(item.child)
                  ? 'text-[var(--accent-700)]'
                  : 'text-slate-400 group-hover:text-[var(--accent-600)]',
              ]"
            />
            <span class="flex-1" :class="isCollapsed ? 'md:hidden' : ''">{{ item.title }}</span>
            <Icon
              name="ic:outline-keyboard-arrow-down"
              size="16px"
              class="text-slate-400 transition-transform duration-200"
              :class="[
                { '-rotate-90': !openMenus[`${gi}-${ii}`] },
                isCollapsed ? 'md:hidden' : '',
              ]"
            />
            <!-- Tooltip when collapsed -->
            <span
              v-if="isCollapsed"
              class="pointer-events-none absolute left-full z-50 ml-2 hidden whitespace-nowrap rounded-md bg-slate-900 px-2 py-1 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 md:block"
            >
              {{ item.title }}
            </span>
          </button>

          <!-- Item without children (direct link) -->
          <NuxtLink
            v-else
            :to="item.path || '/'"
            class="group relative flex items-center rounded-lg font-medium transition-all hover:bg-[var(--accent-50)]"
            :class="[
              isCollapsed ? collapsedRowBaseClass : rowBaseClass,
              isCollapsed && isActive(item.path)
                ? 'md:border md:border-[var(--accent-200)] md:bg-[var(--accent-50)] md:text-[var(--accent-700)] text-slate-900'
                : '',
              !isCollapsed ? itemClass(item.path) : '',
            ]"
          >
            <Icon
              v-if="item.icon"
              :name="item.icon"
              size="16px"
              class="shrink-0 transition-colors"
              :class="[
                isCollapsed ? 'md:h-5 md:w-5 h-4 w-4' : 'h-4 w-4',
                isActive(item.path)
                  ? 'text-[var(--accent-700)]'
                  : 'text-slate-400 group-hover:text-[var(--accent-600)]',
              ]"
            />
            <span class="flex-1" :class="isCollapsed ? 'md:hidden' : ''">{{ item.title }}</span>
            <!-- Tooltip when collapsed -->
            <span
              v-if="isCollapsed"
              class="pointer-events-none absolute left-full z-50 ml-2 hidden whitespace-nowrap rounded-md bg-slate-900 px-2 py-1 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 md:block"
            >
              {{ item.title }}
            </span>
          </NuxtLink>

          <!-- Children submenu -->
          <div
            v-if="item.child && item.child.length > 0 && openMenus[`${gi}-${ii}`] && !isCollapsed"
            class="ml-5 mt-1 space-y-0.5 border-l-2 border-slate-200 pl-4"
          >
            <template v-for="(child, ci) in item.child" :key="ci">
              <!-- Child with grandchildren -->
              <button
                v-if="child.child && child.child.length > 0"
                type="button"
                class="flex w-full items-center rounded-md text-left transition-all hover:bg-[var(--accent-50)]"
                :class="[
                  isCompact
                    ? 'px-3 py-0.5 text-[13px] leading-tight'
                    : 'px-3 py-1 text-sm',
                  isGroupActive(child.child)
                    ? 'border border-[var(--accent-200)] bg-[var(--accent-50)] font-medium text-[var(--accent-700)]'
                    : 'border border-transparent text-slate-600',
                ]"
                @click="toggleMenu(`${gi}-${ii}-${ci}`)"
              >
                <span class="flex-1">{{ child.title }}</span>
                <Icon
                  name="ic:outline-keyboard-arrow-down"
                  size="14px"
                  class="text-slate-400 transition-transform duration-200"
                  :class="{ '-rotate-90': !openMenus[`${gi}-${ii}-${ci}`] }"
                />
              </button>

              <!-- Child direct link -->
              <NuxtLink
                v-else
                :to="child.path || '/'"
                class="block rounded-md transition-all hover:bg-[var(--accent-50)]"
                :class="[
                  isCompact
                    ? 'px-3 py-0.5 text-[13px] leading-tight'
                    : 'px-3 py-1 text-sm',
                  childClass(child.path),
                ]"
              >
                {{ child.title }}
              </NuxtLink>

              <!-- Grandchildren -->
              <div
                v-if="child.child && child.child.length > 0 && openMenus[`${gi}-${ii}-${ci}`]"
                class="ml-4 mt-1 space-y-0.5 border-l border-slate-200 pl-3"
              >
                <NuxtLink
                  v-for="(grandchild, gci) in child.child"
                  :key="gci"
                  :to="grandchild.path || '/'"
                  class="block rounded-md transition-all hover:bg-[var(--accent-50)]"
                  :class="[
                    isCompact
                      ? 'px-3 py-0.5 text-[13px] leading-tight'
                      : 'px-3 py-1 text-sm',
                    childClass(grandchild.path),
                  ]"
                >
                  {{ grandchild.title }}
                </NuxtLink>
              </div>
            </template>
          </div>
        </div>
      </div>
    </nav>
  </aside>
</template>
