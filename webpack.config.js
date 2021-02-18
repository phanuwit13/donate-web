const path = require('path')
const rmdir = require('rmdir')
const webpack = require('webpack')
const merge = require('webpack-merge')
const autoprefixer = require('autoprefixer')

const NODE_ENV = process.env.NODE_ENV ? true : false
const FILES = NODE_ENV ? require('./config/webpack/prod') : require('./config/webpack/dev')
rmdir('./dist')

const resolve = dir => path.join(__dirname, '', dir)

module.exports = merge(FILES, {
  devtool: NODE_ENV ? 'cheap-module-source-map' : '#cheap-module-eval-source-map',
  entry: [
    './src/theme/scss/index.scss',
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: path.join('static', 'js/[name].[hash].js')
    // chunkFilename: path.join('static', 'js/[id].[hash].js')
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    alias: {
      '@': resolve('src')
    },
    modules: [path.join(__dirname, 'src'), 'node_modules']
    // modules: [path.resolve('./src'), path.resolve('./node_modules'), 'node_modules'],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js?$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/,
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }, {
        test: /\.png$/,
        loader: 'url-loader',
        query: {mimetype: 'image/png'}
      }, {

        test: /\.gif$/,
        loader: 'url-loader',
        query: {mimetype: 'image/gif'}
      }, {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff'
      }, {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }
    ]
  },
  devServer: {
    // hot: true,
    // inline: false,
    // historyApiFallback: true,
    disableHostCheck: true,
    proxy: {
      '/api/*': {
        target: 'https://octopus-unify.digipay.dev/'
      }
    }
  },
  node: {
    net: 'empty',
    dns: 'empty'
  }
})
