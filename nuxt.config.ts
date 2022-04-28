import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  head: {
    title: `stem-help-frontend`,
    meta: [
      { charset: `utf-8` },
      { name: `viewport`, content: `width=device-width, initial-scale=1` },
      { hid: `description`, name: `description`, content: `` },
      { name: `format-detection`, content: `telephone=no` },
    ],
    link: [{ rel: `icon`, type: `image/x-icon`, href: `/favicon.ico` }],
  },

  css: [
    `vuetify/lib/styles/main.sass`,
    `~/assets/css/main.scss`,
    `~/assets/css/tailwind.css`,
  ],

  nitro: {
    preset: `node-server`,
  },

  runtimeConfig: {
    public: {
      date: {
        format: `Do MMM YYYY`,
      },
      apiBase: `http://localhost:4000`,
      apiVersions: [`v1`],
    },
  },

  ssr: true,

  build: {
    transpile: [`vuetify`],
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },

  modules: [`@pinia/nuxt`],
});
