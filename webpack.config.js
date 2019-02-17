var webpack = require('webpack');

/**
 * This is the Webpack configuration file for production.
 */
module.exports = {
  mode: 'production',
  entry: './src/index',

  output: {
    library: 'ReactSharing',
    libraryTarget: 'umd',
    path: __dirname + '/dist/',
    filename: 'react-sharing.min.js'
  },

  module: {
    rules:[
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loader: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      },
      /*
      {
        test: /\.scss$/,
        use: 'style-loader!css-loader' //['style-loader', 'sass-loader'] //["style", "css", "sass"]
      },
      */
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]

  /*
  externals: [{
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }
  }],



  module: {
    rules: [
      {
          test: /\.js$/,
          // exclude: /node_modules/,
          use: 'babel-loader'
      },
      {
        test: /\.jsx?$/,
        // exclude: /node_modules/,
        use: 'babel-loader',
      },
      { test: /\.css$/, exclude: /\.useable\.css$/, use: "style!css" },
      { test: /\.useable\.css$/, use: "style/useable!css" },
      {
        test: /\.css$/,
        use: "style-loader!css-loader"
      },
      {
        test: /\.scss$/,
        use: ["style", "css", "sass"]
      },
      { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use : 'file-loader'
      },
      {
        // I want to uglify with mangling only app files, not thirdparty libs
        test: /.*\/app\/.*\.js$/,
        // exclude: /.spec.js/, // excluding .spec files
        exclude: /node_modules/, // excluding .spec files
        use: "uglify"
      }
    ],
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  }
  */
};
