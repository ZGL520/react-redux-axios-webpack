var webpack = require('webpack')
var autoprefixer = require('autoprefixer')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var DashboardPlugin = require('webpack-dashboard/plugin')
var path = require('path')

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './index.jsx',
    lib: [
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-redux',
      'redux'
    ]
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.less$/,
        exclude: path.resolve(__dirname, './node_modules'),
        loader: 'style-loader!css-loader?modules&camelCase&importLoaders=1&localIdentName=[local]__[hash:base64:6]!postcss-loader!less-loader'
      },
      {
        test: /\.css$/,
        exclude: path.resolve(__dirname, './node_modules'),
        loader: 'style-loader!css-loader?modules&camelCase&importLoaders=1&localIdentName=[local]__[hash:base64:6]!postcss-loader'
      },
      {
        test: /\.less$/,
        include: path.resolve(__dirname, './node_modules'),
        loader: 'style-loader!css-loader!postcss-loader!less-loader'
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, './node_modules'),
        loader: 'style-loader!css-loader!postcss-loader'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot',
          'babel-loader'
        ]
      },
      {test: /\.json$/, loader: 'json-loader'},
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192&name=[name]_[hash:6].[ext]'}
    ]
  },
  resolve: {
    alias: {
      'react': path.join(__dirname, 'node_modules', 'react')
    },
    extensions: ['', '.js', '.jsx']
  },
  postcss: [
    autoprefixer({

      browsers: [ 'Android >= 4', 'iOS > 6', 'last 10 Chrome versions']

    })
  ],
  plugins: [
    new DashboardPlugin(),
    new webpack.optimize.CommonsChunkPlugin('lib', 'lib.js'),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') }
    }),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  devServer: {
    stats: { chunks:false },
    contentBase: './src',
    hot: true
  }
}
