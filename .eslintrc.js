module.exports = {
  root: true,
  env: {
    node: true,
    mocha: true,
    es6: true,
  },
  extends: [`plugin:vue/vue3-essential`, `eslint:recommended`, `@vue/prettier`],
  parserOptions: {
    parser: `babel-eslint`,
  },
  rules: {
    "no-console": process.env.NODE_ENV === `production` ? `warn` : `off`,
    "no-debugger": process.env.NODE_ENV === `production` ? `warn` : `off`,
    "func-names": `off`,
    "no-underscore-dangle": `off`,
    "consistent-return": `off`,
    "jest/expect-expect": `off`,
    "security/detect-object-injection": `off`,

    "linebreak-style": [`error`, `unix`],
    semi: [`error`, `always`],
    quotes: [`error`, `backtick`],
    indent: [`error`, 2],
    "quote-props": [`error`, `as-needed`],
    strict: 0,
    "comma-dangle": [`error`, `always-multiline`],
    "space-infix-ops": [`error`, { int32Hint: false }],
  },
  overrides: [
    {
      files: [
        `**/__tests__/*.{j,t}s?(x)`,
        `**/tests/unit/**/*.spec.{j,t}s?(x)`,
      ],
      env: {
        mocha: true,
      },
    },
  ],
};
