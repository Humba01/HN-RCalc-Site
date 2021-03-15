const path = require('path');

module.exports = {
  mode: 'development',
  entry: './public/js/index.js',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    publicPath: '/public/',
    liveReload: true,
    compress: true,
    port: 9090,
  },
};
