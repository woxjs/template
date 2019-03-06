const WoxWebpackRuntimePlugin = require('@wox/loader');
module.exports = {
  chainWebpack(configs) {
    configs.entry('app').clear().add('./webpack.js');
    configs.plugin('wox').use(WoxWebpackRuntimePlugin);
    configs.resolve.alias.set('#', process.cwd());
    return configs;
  }
}