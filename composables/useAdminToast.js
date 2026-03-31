import { ref } from "vue";

const toasts = ref([]);
let nextId = 0;

function push(variant, title, message = "") {
  const id = ++nextId;
  toasts.value.push({ id, variant, title, message });
  setTimeout(() => {
    toasts.value = toasts.value.filter((t) => t.id !== id);
  }, 3000);
}

export function useAdminToast() {
  return {
    toasts,
    success: (title, message) => push("success", title, message),
    error: (title, message) => push("error", title, message),
    info: (title, message) => push("info", title, message),
  };
}
