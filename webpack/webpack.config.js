const webpack = require('webpack');
const path = require('path');

const isDevMod = process.env.NODE_ENV === 'development';

module.exports = {
  mode: process.env.NODE_ENV,
  output: {
    filename: 'js/[name].js',
    path: path.resolve('./public'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)?$/,
        use: [{
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: ['react', 'stage-3', 'es2015'], // Transpiles JSX and ES6
          },
        }],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    isDevMod ? new webpack.NamedModulesPlugin() : new webpack.HashedModuleIdsPlugin(),
  ],
};
