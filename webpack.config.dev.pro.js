import webpack from 'webpack';
import path from 'path';
//import config from 'webpack';

export default {
  devtool: 'source-map',
  entry: [path.resolve(__dirname, 'src/index')],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  mode: 'development',
  plugins: [
    //Eliminate duplicate packages when generating bundle
    //new webpack.optimize.DedupePlugin(),
    // minify js
    //new config.optimization.minimize,
    new webpack.LoaderOptionsPlugin({
      debug: false,
      noInfo: true
    })
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader'] },
      { test: /\.css$/, loaders: ['style-loader', 'css-loader'] }
    ]
  }
};
