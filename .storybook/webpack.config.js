const webpack = require('webpack');
const path = require('path');

module.exports = {
  resolve: {
    alias: {
      "vue$": "vue/dist/vue.esm.js",
    },
    extensions: [".js", ".json", ".vue"]
  },
  module: {
    rules: [
      {
        test: /\.stories\.jsx?$/,
        loaders: [require.resolve('@storybook/addon-storysource/loader')],
        enforce: 'pre',
      },
      {
        test: /\.(ico|jpg|jpeg|gif|webp)(\?.*)?$/,
        loader: "file-loader",
        query: {
          name: "assets/[name].[hash:8].[ext]",
        },
      },
    ],
  },
};
