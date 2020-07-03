const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'none',
  entry: './hello.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'test'),
    },
  },
  devServer: {
    port: 9000,
    hot: true,
  },
  devtool:'cheap-eval-source-map',
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }],
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        template: 'index.html',
      }
    ),
  ]
}