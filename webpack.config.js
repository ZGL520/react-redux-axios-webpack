var webpack = require('webpack')
var autoprefixer = require('autoprefixer')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var DashboardPlugin = require('webpack-dashboard/plugin')
var path = require('path')

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {  //入口文件配置
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
  output: {  //出口文件配置
    path: path.join(__dirname, './dist'),
    filename: '[name].js'
  },
  module: {//加载配置
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
    alias: {//模块别名定义，方便后续直接引用别名，无须多写长长的地址
      'react': path.join(__dirname, 'node_modules', 'react')
    },
    extensions: ['', '.js', '.jsx']//自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
  },
  postcss: [
    autoprefixer({

      browsers: [ 'Android >= 4', 'iOS > 6', 'last 10 Chrome versions']

    })
  ],
  plugins: [//插件项
    new DashboardPlugin(),//优雅的仪表盘，谁用谁知道
    new webpack.optimize.CommonsChunkPlugin('lib', 'lib.js'),//默认会把所有入口节点的公共代码提取出来,生成一个lib.js
    new webpack.DefinePlugin({//// 接收字符串插入到代码当中,
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') }
    }),
    new HtmlWebpackPlugin({//简化创建服务于 webpack bundle 的 HTML 文件
      template: './index.html'
    })
  ],
  devServer: {
    stats: { chunks:false },
    contentBase: './src',
    hot: true
  }
}
