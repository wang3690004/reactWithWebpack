const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') //打包css成一个统一的文件
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin') //压缩css



module.exports = merge(baseConfig,{
  mode:'production',
  output:{
    filename:'js/[name].[chunkhash:16].js' //使用hash 16位 避免使用浏览器缓存
  },
  optimization:{
    minimizer:[
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions:true ? { map:{inline:false}} :{}
      })
    ],
    splitChunks:{
      chunks:'all', //默认 all    有三个配置  initial all async
      minChunks:1, //默认最小chunk 1 
      minSize:0,  //默认最小尺寸 0
      cacheGroups:{ //关于代码分割的这一块感觉是一个非常重要的优化点
        vendor:{
          test:'framework',
          name:'framework',
          chunks: 'all'
        }
      }
    }
  }, 
  module:{
    rules:[{
        test: /\.(css)$/,
        use: [
            MiniCssExtractPlugin.loader,
            {
                loader:'css-loader',
                options:{
                    // importLoaders: 1,
                    modules: true,
                    // localIdentName: '[local]__[hash:7]',
                }  
            }  //不知道为什么一配置这个options就报错
        ]
    }]
  },
  plugins:[
      new HtmlWebpackPlugin({
        template:'src/index.html',  //使用自己指定的模板 来生成特定的html文件
        inject:'body',
        minify:{
          collapseWhitespace:true,  //压缩html 无用的空格去掉
          removeComments:true,
          removeAttributeQuotes:true
        } //这个配置到底是用来干什么用的？  这个插件的作用是打包的时候把相对应的html文件同时加进去 这样原本我用来实验的 index.html 就毫无用处了 可以删除了
    }),
    new CleanWebpackPlugin(), //默认还删除 output里面的filenmae
    new MiniCssExtractPlugin({
      filename:'css/[name].[hash].css',
      chunkFilename:'css/[id].[hash].css'
    })
  ]
})


//我们粗暴得将第三方库一起打包可行吗? 当然是有问题的,因为将第三方库一块打包,只要有一个库我们升级或者引入一个新库,这个 chunk 就会变动,那么这个chunk 的变动性会很高,并不适合长期缓存,还有一点,我们要提高首页加载速度,第一要务是减少首页加载依赖的代码量,请问像 react vue reudx 这种整个应用的基础库我们是首页必须要依赖的之外,像 d3.js three.js这种特定页面才会出现的特殊库是没必要在首屏加载的,所以我们需要将应用基础库和特定依赖的库进行分离