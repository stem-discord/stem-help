// vue.config.js

const path = require(`path`);

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "#": path.resolve(__dirname, `src/components`),
      },
    },
  },
};
