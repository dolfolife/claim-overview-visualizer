const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './index.html',
  filename: 'index.html',
  inject: 'body'
});

const CopyWebpackPluginConfig = new CopyWebpackPlugin([
  {from: "resources", to: path.resolve("dist") }
], {copyUnmodified: true});

module.exports = {
  entry: './index.js',
  context: path.join(__dirname, 'src'),
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.json$/, use: 'json-loader'}
    ]
  },
  plugins: [HtmlWebpackPluginConfig, CopyWebpackPluginConfig]
}
