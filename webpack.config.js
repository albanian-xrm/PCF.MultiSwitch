const webpack = require('webpack');

module.exports = {
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
};
