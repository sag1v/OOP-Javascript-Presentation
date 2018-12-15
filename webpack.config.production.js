const TerserPlugin = require('terser-webpack-plugin')
/* eslint-disable */

var path = require('path');
var webpack = require('webpack');

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
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {
          modules: true,
          localIdentName: '[path][name]__[local]',
        }
      }]
    }, {
      test: /\.(png|jpg|gif)$/,
      use: [{
        loader: 'url-loader',

        options: {
          limit: 8192
        }
      }]
    }, {
      test: /\.svg$/,
      use: [{
        loader: 'url-loader',

        options: {
          limit: 10000,
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
