1.import 一个文件的过程中，js json文件可以不用添加后缀 而jsx必须要添加后缀， 解决办法就是在 devconfig 中添加 resolve:{
    extensions:['.js','.jsx','.json'] 添加对jsx后缀名的识别，这样就可以找到了
  },
2. state 中变量初始化过程中 最好不要使用null undefined, 最好先确定类型 使用数字 数组 对象等。 在需要展示的变量中如果使用 null/undefined . xxx 会有报错问题。