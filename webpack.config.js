var webpack = require('webpack');
const { resolve, join } = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

var APP_DIR = resolve(__dirname, './src');

module.exports = function (env, options) {
  const isProduction = options.mode === "production";

  const config = {
    context: join(__dirname, "src"),
    entry: "./",
    mode: isProduction ? "production" : "development",
    devtool: isProduction ? "none" : "source-map",

    module: {
      rules: [
        {
          test: /(\.css|.scss)$/,
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
      })
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