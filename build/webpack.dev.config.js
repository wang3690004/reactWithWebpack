const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config');
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')


module.exports = merge(baseConfig,{
  mode:'development',
  output:{
    filename:'js/[name].[hash:16].js'
  },
  devtool:'inline-source-map',
  plugins:[
    new HtmlWebpackPlugin({
      template:'src/index.html',
      inject:'body',
      minify:{
        html5:true
      },
      hash:false
    }),
    new webpack.HotModuleReplacementPlugin()   
  ],
  devServer: {   //关于devserver的一些配置还需要了解
    contentBase:path.join(__dirname, '../src'),
    clientLogLevel:'error',
    hot:true,
    compress:true, 
    historyApiFallback:true, //让所有404页面定位到index.html
    open:true,   //关于热更新问题 还仍然残留 不知道配置的到底对不对，
    noInfo:true,
    proxy:{
    },
    port:3001
  }
})