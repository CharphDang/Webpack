const webpack = require('webpack');
const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const devConfig = {
  mode: 'development', // * 当前的模式： dev模式还是prod模式
  devtool: 'eval-cheap-module-source-map',
  module: {
    rules: [
      // * 第二： 其次给自己的less/sass等样式等配置loader
      {
        test: /\.(less|css)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
      }
    ]
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  // 本地服务启动， 会不生成实际的dist，只存在于缓存中， hot是热更新功能
  devServer: {
    open: true,
    compress: true,
    historyApiFallback: false,
    hot: true,
    static: {
      directory: path.join(__dirname, 'dist')
    },

    // proxy: {
    //   "/api": {
    //     target: "http://localhost:9092"
    //   }
    // }
  },
  // 缓存机制， webpack5自身支持，不用hardSource
  cache: {
    type: 'filesystem',
    store: 'pack' // 当编译器空闲时，将所有缓存项的数据存储在单个文件中
  },
  optimization: {
    minimize: false,
    runtimeChunk: 'single',
    chunkIds: 'named',
    moduleIds: 'named'
  }
};

module.exports = devConfig;
