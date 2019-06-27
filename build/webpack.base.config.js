const path = require('path')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')

module.exports = {
  entry:{
    app:'./src/index.js',             //多个入口，至于这个每个对象起的名字有什么作用 后续还要在看， 下面使用数组的情况，是将开启多个入口，后面打包的时候将他们合并到一个文件里面,毕竟他们彼此没什么依赖关系，要通过数组的方法打包在一块
    framework:['react','react-dom']},  //这里主要是用来抽取非业务代码的选项的 后续理论应该抽取react-router redux antd 等
  output:{
    filename:'bundle.js',
    path:path.resolve(__dirname,'../dist')
  },
  module:{
    rules:[
      // {
      //   test: /\.css$/,
      //   use:['style-loader','css-loader']
      // },
      {
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
    // new BundleAnalyzerPlugin()
  ]
}