import { defineNuxtPlugin } from '#app';

import { DEV_OPTIONS } from '~/store/index.js';

export default defineNuxtPlugin((_nuxtApp) => {
  const config = useRuntimeConfig().public;
  const options = DEV_OPTIONS();
  return {
    provide: {
      apiBase() {
        return options.apiBase ?? config.apiBase;
      },
    },
  };
});
