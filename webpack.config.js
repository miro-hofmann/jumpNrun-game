const path = require('path');
const webpack = require('webpack');
const file = require('create-file-webpack');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: '/',
    clean: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    hot: true,

    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new file({
      path: path.resolve(__dirname, './dist'),
      fileName: 'index.html',
      content:
        '<!DOCTYPE html><html><head><meta charset="utf-8" /><title>Jump & Run Sandbox</title></head><body><div id="app"></div><script src="/bundle.js"></script></body></html>',
    }),
  ],
};
