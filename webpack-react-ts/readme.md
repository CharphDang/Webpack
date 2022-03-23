# webapck + react 搭建

1. webpack基础搭建

2. 针对jsx进行loader配置
    > npm i @babel/preset-react -D 并且在.babelrc中引入
    ```ASN.1
    "presets": ["@babel/preset-env", "@babel/preset-react"],
    ```

3. 填充API垫片此处使用的垫片填充没有用@bable-polyfill, 而使用的@babel/plugin-transform-runtime，就不会污染全局。
    > npm i @babel/runtime @babel/plugin-transform-runtime -D;  npm i @babel/runtime-corejs3 -S
    ```ASN.1
    // 组件库的polyfill加载，使用runtime插件： 
    // note: 默认配置corejs为false;
    
    // npm i  @babel/plugin-transform-runtime -D; 
    // npm i  @babel/runtime @babel/runtime-corejs3 -S
    
    "plugins": [
        [
            "@babel/plugin-transform-runtime",
            {
                // 配置corejs为3，需要预先安装@babel/runtime-corejs3
                // 配置corejs为2，需要预先安装@babel/runtime-corejs2
                // 配置corejs为false，需要预先安装@babel/runtime
                "corejs": 3
            }
        ]
    ]
    
    // 一般app的polyfill直接使用垫片： 
    // npm i @babel/polyfill  core-js@3 -S
    "presets": [
    	[
             "@babel/preset-env",
             {
                 "targets": {
                     "edge": "17",
                     "firefox": "60",
                     "chrome": "67",
                     "safari": "11.1",
                     "Android":"6.0"
                 },
                 "corejs": 3,
                 "useBuiltIns": "usage", //按需注入
             }
    	]
     ]
    ```
4. @babel/plugin-proposal-decorators 用来编译解析装饰器

5. @babel/plugin-proposal-class-properties 用来编译解析class中的静态属性。从Babel v7开始，所有的stage预设都已经弃用了。想要转换预设提案语法，就得安装必要的plugin

6. Img 组件中，使用了【代理模式】，没有直接调用img标签，而是交给Img组件，它自己会在图片加载完成之前，先展示loading组件，当img请求加载好了, 转换为base64， 赋值给src，展示img标签。

7. iconfont 引入：
    - 如果使用Font class引入，则可以在less中直接引入iconfont.css 或者 当成静态资源，在html中引入
    - 如果使用Symbol方式引入， 则可以将iconfont.js 当成静态资源，在html中引入。
    - 如果在index.js 中引入iconfont.js 并且开启了treeshaking功能，则一定要在package.json中sideEffects中配置， 标明iconfont.js有副作用，不能进行treeshaking


8. react 热更新支持
    - npm install react-hot-loader @hot-loader/react-dom -D
    ```js
    // App.js
    import React from 'react';
    import { hot } from 'react-hot-loader';

    const App = () => <div>Hello world!</div>;

    export default hot(module)(App);

    // main.js (index.js)
    import React from 'react';
    import ReactDOM from 'react-dom';
    import App from './containers/App';

    ReactDOM.render(<App />, document.getElementById('root'));

    // .babelrc
    "plugins": ["react-hot-loader/babel"]
    ```

9. ts支持使用@babel/typescript来支撑，不推荐ts-loader，因为打包效率来说，统一使用babel一套会更快。

    > @babel/typescript 插件只支持语法转换， 不支持类型校验。 配置tsconfig.json，vscode会根据tsconfig的规则进行类型校验。


10. webpack-merge， 不会覆盖相同规则的rule，只会新增一条规则，所以，对less/css文件的处理，必须分成dev和prod中去配置，common中不配置。 如果在common中配置，那么common中定义过的loader一定会被执行，哪怕dev/prod中其他配置有通过webpack-merge来合并进相同的规则。

11. 对react的相关知识进行练习，react-redux 建议使用redex-toolkit模式。

12. `import { createPortal } from 'react-dom';` 当要实现DOM渲染到指定节点位置的时候，使用`createPortal`。比如： Dialog， messageToast 等组件。

13. component 中 实现自己的`rc-form`(antd3 form) 和 `rc-field-form` (antd4 form)组件
