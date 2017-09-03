const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

const prodConfig = {
  devtool: 'source-map',
  output: {
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ],
        }),
        include: path.resolve(__dirname, 'src', 'styles'),
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      '__API_HOST__': JSON.stringify('http://www.example.com'),
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
    new ExtractTextPlugin('styles.css'),
    new UglifyJSPlugin({
      include: path.resolve(__dirname, 'src'),
      sourceMap: true,
    }),
  ],
};

module.exports = merge(common, prodConfig);
