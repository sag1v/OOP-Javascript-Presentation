const TerserPlugin = require('terser-webpack-plugin')
/* eslint-disable */

var path = require('path');
var webpack = require('webpack');
const fileLimit = 99999;

module.exports = {
  mode: 'production',
  entry: [
    '@babel/polyfill',
    './index'
  ],

  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/'
  },

  plugins: [new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  })],

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
      use: [{
        loader: 'babel-loader'
      }]
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
      include: __dirname,
    }, {
      test: /\.(png|jpg|gif)$/,
      use: [{
        loader: 'url-loader',

        options: {
          limit: fileLimit
        }
      }]
    }, {
      test: /\.svg$/,
      use: [{
        loader: 'url-loader',

        options: {
          limit: fileLimit,
          mimetype: 'image/svg+xml'
        }
      }]
    }]
  },

  optimization: {
    minimize: true,

    minimizer: [new TerserPlugin({
      parallel: true,
      terserOptions: {
        ecma: 6,
      },
    })]
  }
};
