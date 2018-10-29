const WebpackMerge = require('webpack-merge');
const WoxWebpackRuntimePlugin = require('@wox/loader/server');
const BasicConfigs = require('./webpack.base');
const cwd = process.cwd();

module.exports = WebpackMerge(BasicConfigs, {
  mode: 'development',
  devServer: {
    contentBase: cwd,
      compress: true,
      historyApiFallback: false,
      hot: true
  },
  plugins:[
    new WoxWebpackRuntimePlugin(true).loadCommonCase()
  ]
});