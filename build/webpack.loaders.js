const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BabelrcConfigs = require('../.babelrc');
module.exports = env => {
  const isPro = env === 'production';
  return [
    {
      test: /\.js(x)?$/i,
      loader: 'babel-loader',
      options: { plugins: BabelrcConfigs.plugins }
    },
    {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          less: isPro ? [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            'less-loader'
          ] : [
            'vue-style-loader',
            'css-loader',
            'postcss-loader',
            'less-loader'
          ]
        }
      }
    },
    {
      test: /\.css$/,
      use: isPro ? [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader'
      ] : [
        'vue-style-loader',
        'css-loader',
        'postcss-loader'
      ]
    },
    {
      test: /\.less$/,
      use: isPro ? [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader',
        'less-loader'
      ] : [
        'vue-style-loader',
        'css-loader',
        'postcss-loader',
        'less-loader'
      ]
    },
    {
      test: /\.(png|jpg|gif|eot|svg|ttf|woff|woff2)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[hash:10].[ext]',
          outputPath: 'assets/'
        }
      }]
    }
  ]
}