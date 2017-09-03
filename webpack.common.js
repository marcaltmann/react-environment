const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const outputPath = path.resolve(__dirname, 'dist');
const appVersion = require(path.resolve(__dirname, 'package.json')).version;

const config = {
  entry: './src/index.js',
  output: {
    path: outputPath,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        include: path.resolve(__dirname, 'src'),
      },
      {
        test: /\.(png|jpe?g|svg)$/,
        use: 'file-loader',
      },
      {
        test: /\.(woff|woff2)$/,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(outputPath),
    new HtmlWebpackPlugin({
      title: 'App Title',
      template: path.resolve(__dirname, 'src', 'index.ejs'),
    }),
    new webpack.DefinePlugin({
      '__VERSION__': JSON.stringify(appVersion),
    }),
  ],
};

module.exports = config;
