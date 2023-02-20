const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  devtool: false,
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      // prevent creating split bundles, since the PCF runtime cannot handle chunked bundles
      // neither does the control manifest and our tooling have support to build and package chunked bundles (e.g. no SoPa support)
      maxChunks: 1,
    }),  
    new webpack.SourceMapDevToolPlugin({
      append: '\n//# sourceMappingURL=../[url]',
      fileContext: './',
      filename: '../../albx_/MultiSwitch.PCF/[name].map',
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          sourceMap: true,
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
};
