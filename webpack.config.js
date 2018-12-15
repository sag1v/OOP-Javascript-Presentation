/* eslint-disable */

var path = require('path');
var webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: [
    '@babel/polyfill',
    'webpack-hot-middleware/client',
    'react-hot-loader/patch',
    './index'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [{
      test: /\.md$/,
      use: [{
        loader: 'html-loader'
      }, {
        loader: 'markdown-loader',

        options: {
          gfm: false
        }
      }]
    }, {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      include: /prism/,
      use: [{
        loader: 'babel-loader'
      }],
      include: __dirname
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
      include: __dirname,
    }, {
      test: /\.svg$/,
      use: [{
        loader: 'url-loader',

        options: {
          limit: 10000,
          mimetype: 'image/svg+xml'
        }
      }],
      include: path.join(__dirname, 'assets')
    }, {
      test: /\.png$/,
      use: [{
        loader: 'url-loader',

        options: {
          mimetype: 'image/png',
          limit: 100
        }
      }],
      include: path.join(__dirname, 'assets')
    }, {
      test: /\.gif$/,
      use: [{
        loader: 'url-loader',

        options: {
          mimetype: 'image/gif'
        }
      }],
      include: path.join(__dirname, 'assets')
    }, {
      test: /\.(jpg)$/,
      use: [{
        loader: 'url-loader',

        options: {
          mimetype: 'image/jpg'
        }
      }],
      include: path.join(__dirname, 'assets')
    }]
  }
};
