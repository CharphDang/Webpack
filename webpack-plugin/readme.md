# webpack plugin

1. 执行`node ./src/index.js`文件，可以打印出来compiler中有哪些同步钩子
    > 先把里面的注释打开

2. [compiler.hooks](https://webpack.docschina.org/api/compiler-hooks/) 这里查看所有的钩子信息，里面包括异步钩子


3. 本篇幅实现自己的list-webpack-plugin插件， 调用了emit hook， 订阅自己的事件， 列出了输出文件的清单。