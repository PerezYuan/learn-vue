var path = require('path'); //node自带的path模块
var config = {
  entry: path.join(__dirname, 'src', 'main'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['','.js', '.vue'],
    alias: {
      vue: 'vue/dist/vue.js'
    }
  }
}

module.exports = config