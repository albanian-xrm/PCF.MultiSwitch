const replace = require('replace-in-file');

const options = {
    files: require.resolve('pcf-scripts/webpackConfig.js'),
    from: "ESBuildMinifyPlugin({ target: 'es2015'})",
    to: "ESBuildMinifyPlugin({ target: 'es2015', sourcemap: true})",
};

console.log(replace.sync(options));