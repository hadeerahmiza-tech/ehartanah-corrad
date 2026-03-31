import { defineStore } from "pinia";

export const useLayoutStore = defineStore({
  id: "layout",
  state: () => ({
    layoutType: "vertical",
    mobileWidth: "1024",
    isCollapsed: false,
    isCompact: false,
    themeColor: "violet",
  }),
  actions: {
    setLayoutType(layoutType) {
      this.layoutType = layoutType;
    },
    toggleCollapsed() {
      this.isCollapsed = !this.isCollapsed;
    },
    toggleCompact() {
      this.isCompact = !this.isCompact;
    },
    setThemeColor(color) {
      this.themeColor = color;
      if (typeof document !== "undefined") {
        document.documentElement.setAttribute("data-theme-color", color);
      }
    },
  },
  persist: true,
});
