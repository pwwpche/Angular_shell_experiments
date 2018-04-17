/* global __dirname */
/* global require */

var webpack = require('webpack');
var path = require('path');
var buildPath = path.resolve(__dirname, './build');
var nodeModulesPath = path.resolve(__dirname, './node_modules');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const WebpackNameModuleIdPlugin = require('webpack-name-moduleId-plugin');

var config = {
  entry: {
    bundle: ['./src/main.ts'],
    vendor: [
    "reflect-metadata",
    "zone.js",
    "rxjs",
    "moment",
    "@angular/common",
    "@angular/compiler",
    "@angular/core",
    "@angular/forms",
    "@angular/http",
    "@angular/platform-browser",
    "@angular/platform-browser-dynamic",
    "@angular/router"
    ]
  },
  output: {
    path: buildPath,
    chunkFilename: '[name]-chunk.js',
    filename: '[name].js',
  },
  externals: {},
  module: {
    rules: [
        {
        test: /\.ts$/,
        loaders: ['ts-loader','angular-router-loader?debug=true', 'angular2-template-loader'],
        exclude: /main\.aot\.ts$/
      },
      {
        test: /\.html$/,
        loader: 'raw-loader',
      },
      {test: /\.less$/, use: ['raw-loader', 'less-loader']},
      {test: /\.css$/, use: ['raw-loader', 'css-loader']},
    ]
  },
  resolve: {extensions: prepend(['.ts', '.js', '.json', '.css', '.html'])},
  plugins: [
      new HtmlWebpackPlugin(
          {
              filename: 'index.html',
              template: './src/index.html',
          }),
    new WebpackNameModuleIdPlugin(),
    new webpack.HotModuleReplacementPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
          name: "vendor",
          filename: 'vendor.bundle.js'
      }),
    new webpack.ContextReplacementPlugin(
        /angular(\\|\/)core/, path.resolve(__dirname, '../src')),
    new webpack.LoaderOptionsPlugin({
      debug: true,
      htmlLoader: {
        minimize: false,
        removeAttributeQuotes: false,
        caseSensitive: true,
        customAttrSurround: [[/#/, /(?:)/], [/\*/, /(?:)/], [/\[?\(?/, /(?:)/]],
        customAttrAssign: [/\)?\]?=/]
      },
      tslint: {emitErrors: false, failOnHint: false}
    }),
    // new BundleAnalyzerPlugin(),
  ]
};

module.exports = config;
// For every prefix in args will concat a new array copy of extensions with the
// prefix as prefix.
function prepend(extensions, args) {
  args = args || [];
  if (!Array.isArray(args)) {
    args = [args]
  }
  return extensions.reduce(function(memo, val) {
    return memo.concat(val, args.map(function(prefix) {
      return prefix + val
    }));
  }, []);
}