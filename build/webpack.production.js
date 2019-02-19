const path = require('path');
const WebpackMerge = require('webpack-merge');
const WoxWebpackRuntimePlugin = require('@wox/loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BasicConfigs = require('./webpack.base');
const cwd = process.cwd();

module.exports = WebpackMerge(BasicConfigs, {
  mode: 'production',
  output: {
    filename: '[name].[hash:10].js',
    path: path.resolve(cwd, 'dist'),
    publicPath: ''
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ],
    splitChunks: {
      chunks: 'async',
      minSize: 100000,
      minChunks: 2,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      cacheGroups: {
        commons: {
          name: "commons",
          chunks: "async",
          minChunks: 1
        }
      }
    }
  },
  plugins:[
    new WoxWebpackRuntimePlugin(),
    new HtmlWebpackPlugin({
      chunks: ['app'],
      filename: 'index.html',
      template: path.resolve(__dirname, '../templates/index.production.html'),
      title: 'Wox Application - Production'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.[hash:10].css',
      chunkFilename: "[id].[hash:10].css"
    })
  ]
})