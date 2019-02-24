const webpack = require('webpack');
const path = require('path');
const Loaders = require('./webpack.loaders');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const NODE_ENV = process.env.NODE_ENV || 'development';
const cwd = process.cwd();

module.exports = {
  target: 'web',
  entry: {
    app: path.resolve(cwd, 'webpack.js')
  },
  context: cwd,
  module: {
    rules: Loaders(NODE_ENV)
  },
  resolve: {
    alias: {
      '#': cwd
    },
    extensions: ['.js', '.jsx', '.vue', '.json']
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV)
      }
    })
  ]
}