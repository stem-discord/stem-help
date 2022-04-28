import { defineNuxtPlugin } from '#app';
import { createVuetify } from 'vuetify';

// Import everything
import { VCard, VCardText, VCardTitle, VAvatar } from 'vuetify/components';

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components: {
      VCard,
      VCardText,
      VCardTitle,
      VAvatar,
    },
  });
  nuxtApp.vueApp.use(vuetify);
});
