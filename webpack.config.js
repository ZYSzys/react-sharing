const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: './src/index',

  output: {
    library: 'ReactSharing',
    libraryTarget: 'umd',
    path: __dirname + '/dist/',
    filename: 'react-sharing.min.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loader: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000',
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],

  externals: {
    react: 'react',
  },
};
