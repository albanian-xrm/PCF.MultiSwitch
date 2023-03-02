const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const webpack = require('webpack');

const config = {
  "stories": ["../stories/**/*.stories.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  "framework": {
    name: "@storybook/react-webpack5",
    options: {}
  },
  webpackFinal: async config => {
    config.devtool = false;
    config.resolve.fallback = config.resolve.fallback || {};
    config.resolve.fallback.fs = false;
    config.resolve.plugins = config.resolve.plugins || [];
    config.resolve.plugins.push(new TsconfigPathsPlugin());
    config.module.rules.forEach(rule => {
      if ("a.tsx".match(rule.test)) {
        //console.log(rule.use);
        rule.use = [{
          loader: 'esbuild-loader',
          options: {
            loader: 'tsx',
            // Or 'ts' if you don't need tsx
            target: 'es2015'
          }
        }];
      }
    });
    config.plugins.push(new webpack.SourceMapDevToolPlugin({
      append: '\n//# sourceMappingURL=[url]',
      fileContext: './',
      filename: '[file].map',
    }));
    return config;
  },
  features: {
    interactionsDebugger: true, // 👈 Enable playback controls
    storyStoreV7: true,
  }
};

export default config;