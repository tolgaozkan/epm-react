const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.config');

const isDevMod = process.env.NODE_ENV === 'development';

module.exports = merge(common, {
  name: 'client',
  target: 'web',

  module: {
    rules: [
      {
        test: /\.css$/,
        include: /src/,
        use: [
          isDevMod ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]-[hash:5]',
            },
          },
        ],
      },
    ],
  },

  entry: [
    isDevMod && 'webpack-hot-middleware/client',
    './src/client.jsx',
  ].filter(Boolean),

  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: true,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    !isDevMod && new CleanWebpackPlugin('./public', { root: path.resolve(__dirname, '../') }),
    isDevMod && new webpack.HotModuleReplacementPlugin(),
  ].filter(Boolean),
});
