const { resolve } = require('path');

function pathResolve(dir) {
  return resolve(__dirname, '../', dir);
}
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: 'storybook-builder-vite',
  },
  async viteFinal(config) {
    // Set relative base path to support deployment on path like /storybook
    // config.base = '../';
    config.resolve.alias = [
      {
        find: /@\//,
        replacement: pathResolve('src') + '/',
      },
    ];
    return config;
  },
};
