const path = require('path');
const WebpackMerge = require('webpack-merge');
const WoxWebpackRuntimePlugin = require('@wox/loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BasicConfigs = require('./webpack.base');
const WebpackProxy = require('./webpack.proxy');
const cwd = process.cwd();

module.exports = WebpackMerge(BasicConfigs, {
  mode: 'development',
  devtool: "source-map",
  devServer: {
    contentBase: cwd,
    compress: true,
    historyApiFallback: false,
    hot: true,
    host: '0.0.0.0',
    proxy: WebpackProxy
  },
  plugins:[
    new WoxWebpackRuntimePlugin(true),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../templates/index.development.html'),
      title: 'Wox Application - Development',
      chunks: ['app']
    })
  ]
});