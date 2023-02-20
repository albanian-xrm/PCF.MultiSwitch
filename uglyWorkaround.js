const replace = require('replace-in-file');

const options = {
    files: require.resolve('pcf-scripts/webpackConfig.js'),
    from: /ESBuildMinifyPlugin\s*\({\s*target:\s*'es2015'\s*}\s*\)/g,
    to: "ESBuildMinifyPlugin({ target: 'es2015', sourcemap: true})",
};

replace.sync(options);