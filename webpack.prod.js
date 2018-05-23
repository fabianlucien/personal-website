const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = () =>
  merge(common, {
    plugins: [
      new ProgressBarPlugin(),
      new CopyWebpackPlugin([{ from: "./src/images/favicon.ico", to: "./" }])
    ]
  });
