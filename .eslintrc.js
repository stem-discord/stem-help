module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    `@nuxtjs/eslint-config-typescript`,
    `plugin:nuxt/recommended`,
    `prettier`,
  ],
  plugins: [`prettier`],
  // add your custom rules here
  rules: {
    '@typescript-eslint/no-unused-vars': [
      `warn`,
      { argsIgnorePattern: `^_`, varsIgnorePattern: `^_` },
    ],
    '@typescript-eslint/no-explicit-any': [`warn`, { ignoreRestArgs: true }],

    'quote-props': [`error`, `as-needed`],

    'comma-dangle': [
      `error`,
      {
        arrays: `always-multiline`,
        objects: `always-multiline`,
        imports: `always-multiline`,
        exports: `always-multiline`,
      },
    ],

    'prettier/prettier': `warn`,
    indent: 0,

    'vue/no-multiple-template-root': 0,
    semi: [`error`, `always`],

    quotes: [`error`, `backtick`],
  },
};
