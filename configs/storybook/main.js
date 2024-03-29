const custom = require('../webpack/shared');

module.exports = {
  "stories": [
    "../../src/**/*.stories.mdx",
    "../../src/stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-a11y",
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "webpackFinal": async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules =  [
      ...config.module.rules,
      ...custom.module.rules,
    ];
    return config;
  },
}
