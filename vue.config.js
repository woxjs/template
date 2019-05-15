const WoxWebpackRuntimePlugin = require('@wox/loader');
const webpackproxy = require('./webpack.proxy');
module.exports = {
  publicPath: '/',
  pages: {
    app: {
      entry: './webpack.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Wox App',
    }
  },
  transpileDependencies: [
    /@wox/,
    /camelcase/
  ],
  chainWebpack(configs) {
    configs.plugin('wox').use(WoxWebpackRuntimePlugin);
    configs.resolve.alias.set('#', process.cwd());
    return configs;
  },
  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
    disableHostCheck: true
  }
}

if (Object.keys(webpackproxy).length) {
  module.exports.devServer.proxy = webpackproxy;
}