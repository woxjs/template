const WoxWebpackRuntimePlugin = require('@wox/loader');
const path = require('path');
module.exports = {
  chainWebpack(configs) {
    configs.entry('app').clear().add('./webpack.js');
    configs.plugin('wox').use(WoxWebpackRuntimePlugin);
    configs.resolve.alias.set('#', process.cwd());
    configs.module.rule('js')
      .exclude.clear()
        .add(/@vue\/cli-service/)
        .end()
      .include
        .add(path.resolve(__dirname, 'app'))
        .add(/@wox/)
        .end();
    return configs;
  }
}