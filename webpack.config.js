const path = require('path');

module.exports = {
  mode: 'development',
  entry: './public/js/htmls/loader.js',
  devServer: {
    port: 9001,
    liveReload: true,
    compress: true,
    watchContentBase: true,
    contentBase: './public',
  },
};
