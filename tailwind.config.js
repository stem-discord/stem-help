const colors = require(`tailwindcss/colors`);

module.exports = {
  mode: `jit`,
  content: [
    `./app.vue`,
    `./components/**/*.{vue,js}`,
    `./layouts/**/*.vue`,
    `./pages/**/*.vue`,
    `./plugins/**/*.{js,ts}`,
  ],
  colors: {
    transparent: `transparent`,
    current: `currentColor`,
    black: colors.black,
    white: colors.white,
    gray: colors.gray,
    emerald: colors.emerald,
    indigo: colors.indigo,
    yellow: colors.yellow,
  },
  // theme: {
  //   extend: {},
  // },
  // variants: {
  //   extend: {},
  // },
  // plugins: [],
};
