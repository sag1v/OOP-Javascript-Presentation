const TerserPlugin = require('terser-webpack-plugin')
/* eslint-disable */

var path = require('path');
var webpack = require('webpack');
const fileLimit = 9999999;

module.exports = {
  mode: 'production',
  devtool: "source-map",
  entry: [
    '@babel/polyfill',
    './index'
  ],
  output: {
    path: __dirname,
    filename: 'docs/build.js', // for gh-pages
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
          limit: fileLimit,
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
          limit: fileLimit
        }
      }],
      include: path.join(__dirname, 'assets')
    }, {
      test: /\.gif$/,
      use: [{
        loader: 'url-loader',

        options: {
          mimetype: 'image/gif',
          limit: fileLimit
        }
      }],
      include: path.join(__dirname, 'assets')
    }, {
      test: /\.(jpg)$/,
      use: [{
        loader: 'url-loader',

        options: {
          mimetype: 'image/jpg',
          limit: fileLimit
        }
      }],
      include: path.join(__dirname, 'assets')
    }]
  },

  optimization: {
    minimize: true,

    minimizer: [new TerserPlugin({
      parallel: true,
      sourceMap: true,
      terserOptions: {
        ecma: 6,
      },
    })]
  }
};
