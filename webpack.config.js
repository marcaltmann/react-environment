const path = require('path');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.jsx',
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['react-hot-loader', 'babel-loader'],
        include: [
          path.resolve(__dirname, 'src'),
        ],
      },
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './dist',
    hot: true,
  },
};
