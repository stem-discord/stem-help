import { defineNuxtPlugin } from '#app';

import dayjs, { extend } from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat.js';

extend(advancedFormat);

export default defineNuxtPlugin((_nuxtApp) => {
  const config = useRuntimeConfig().public;
  return {
    provide: {
      formatDate(timestamp?: number | string | null, format?: string) {
        return dayjs(timestamp).format(format ?? config.date.format);
      },
    },
  };
});
