const path = require('path');

module.exports = {
  entry: {
    application: './source/javascripts/index.js',
  },
  output: {
    path: path.resolve(__dirname + '/.tmp/dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader','css-loader', 'postcss-loader']
      }
    ]
  },
}