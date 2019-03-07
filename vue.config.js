const WoxWebpackRuntimePlugin = require('@wox/loader');
module.exports = {
  publicPath: '',
  pages: {
    app: {
      entry: './webpack.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Wox App',
    }
  },
  transpileDependencies: [
    /@wox/
  ],
  chainWebpack(configs) {
    configs.plugin('wox').use(WoxWebpackRuntimePlugin);
    configs.resolve.alias.set('#', process.cwd());
    return configs;
  }
}