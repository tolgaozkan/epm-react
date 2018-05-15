const webpack = require('webpack');
const { resolve, join } = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const APP_DIR = resolve(__dirname, './src');

module.exports = function (env, options) {
  const isProduction = options.mode === "production";

  const config = {
    context: join(__dirname, "src"),
    entry: "./",
    // mode: isProduction ? "production" : "development",
    devtool: isProduction ? "none" : "source-map",

    output: {
      filename: '[name].[hash].js',
      path: resolve(__dirname, "dist"),
    },

    module: {
      rules: [
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
        },
        {
          test: /(\.css)$/,
          use: [{
            loader: "style-loader" // creates style nodes from JS strings
          }, {
            loader: "css-loader" // translates CSS into CommonJS
          }, {
            loader: "sass-loader" // compiles Sass to CSS
          }]
        },
        {
          test: /\.tsx?$/,
          loader: "awesome-typescript-loader",
          exclude: /node_modules/,
          options: {
            useCache: true
          }
        },
        {
          test: /\.(jsx|js)?$/,
          use: [{
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              presets: ['react', 'es2015'] // Transpiles JSX and ES6
            }
          }]
        }
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        title: "EPM-REACT",
        hash: true,
        template: resolve(__dirname, "./index.html")
      }),
      new ExtractTextPlugin('style.css')
      //if you want to pass in options, you can do so:
      //new ExtractTextPlugin({
      //  filename: 'style.css'
      //})
    ],

    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      modules: ['node_modules', join('src')]
    },

    devServer: {
      contentBase: "./dist"
    }
  };

  return config;
};