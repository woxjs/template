const presets = [
  [
    "@babel/preset-env",
    {
      "modules": 'commonjs',
      "targets": {
        "browsers": ["> 1%", "last 2 versions", "ie >= 8"]
      },
      "useBuiltIns": "usage"
    }
  ]
];

const plugins = [
  "@babel/plugin-transform-async-to-generator",
  "@babel/plugin-transform-object-assign",
  "babel-plugin-transform-vue-jsx",
  ["@babel/plugin-proposal-decorators", {
    "legacy": true
  }],
  ["@babel/plugin-proposal-class-properties", {
    "loose": true
  }],
  "@babel/plugin-syntax-dynamic-import",
  "@babel/plugin-transform-runtime",
];

module.exports = { presets, plugins };
module.exports.plugins = plugins;
module.exports.presets = presets;