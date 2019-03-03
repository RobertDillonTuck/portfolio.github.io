const path = require('path');
const webpack = require('webpack');

module.export = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
      path: path.resolve(__dirname,'dist'),
      filename: 'index.bundle.js'
    },
  module:  {
    loaders: [{
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env']
        }
      }]
  },
  plugins: [
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      })
  ]
  // resolve: { modulesDirectories: ['node_modules', 'src'], extension: ['', '.js', '.scss'] },
}
