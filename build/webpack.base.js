const webpack = require('webpack');
const path = require('path');
const Loaders = require('./webpack.loaders');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const NODE_ENV = process.env.NODE_ENV || 'development';
const cwd = process.cwd();

module.exports = {
  target: 'web',
  entry: path.resolve(cwd, 'node_modules', '@wox/wox/webpack.js'),
  context: cwd,
  module: {
    rules: Loaders(NODE_ENV)
  },
  resolve: {
    alias: {
      '@wox/config': path.resolve(cwd, '.wox.js')
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html'
    }),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV)
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]
}