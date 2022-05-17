import { defineStore } from 'pinia';

const DEV_OPTIONS = defineStore(`DEV_OPTIONS`, {
  state: () => {
    return {
      debug: false,
      apiBase: localStorage?.getItem(`DEV_OPTIONS.apiBase`),
    };
  },
});

export { DEV_OPTIONS };
