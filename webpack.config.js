var webpack = require('webpack');
const {resolve, join} = require('path');

var BUILD_DIR = resolve(__dirname, './dist');
var APP_DIR = resolve(__dirname, './src');

const config = {
   entry: {
     main: APP_DIR + '/index.js'
   },
   output: {
     filename: 'bundle.js',
     path: BUILD_DIR,
   },
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
      test: /\.html$/,
      loader: 'html-loader'
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
  resolve: {
    modules: ['node_modules', join('src')]
  },
};

module.exports = config;