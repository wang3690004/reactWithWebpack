const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')

module.exports = {
  entry:'./src/index.js',
  output:{
    filename:'bundle.[hash].js',
    path:path.join(__dirname,'/dist')
  },
  module:{
    rules:[
      {
        test: /\.css$/,
        use:['style-loader','css-loader']
      },{
        test:/\.js[x]?$/,
        use:'babel-loader',
        exclude: /node_modules/
      },
      {
        test:/\.less$/,
        use:['style-loader',{loader:'css-loader',options:{importLoaders:1}}, 'less-loader'],
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'../src/index.html'
    }),
    new CleanWebpackPlugin(),
    new BundleAnalyzerPlugin()
  ]
}