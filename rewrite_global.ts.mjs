import fs from 'fs';

const src = `
export const IS_NODE = typeof process !== 'undefined';
export const IN_BROWSER = typeof window !== 'undefined';
if (IS_NODE) process.env ??= Object.create(null);
export const IS_DEBUG = IS_NODE && process.env.DEBUG === 'true';
export const IS_PROD = IS_NODE && process.env.NODE_ENV === 'production';
export const SUPPORTS_INTERSECTION = IN_BROWSER && 'IntersectionObserver' in window;
export const SUPPORTS_TOUCH = IN_BROWSER && ('ontouchstart' in window || window.navigator.maxTouchPoints > 0);
export const SUPPORTS_FOCUS_VISIBLE = IN_BROWSER && CSS.supports('selector(:focus-visible)');
//# sourceMappingURL=globals.mjs.map
`;

fs.writeFileSync(
  `C:/public-projects/stem-help-nuxt3/node_modules/vuetify/lib/util/globals.mjs`,
  src
);
