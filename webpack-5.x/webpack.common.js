const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const devConfig = require('./webpack.dev');
const prodConfig = require('./webpack.prod');

// 获取entry文件入口

const commonConfig = {
  // 入口， 推荐使用对象
  entry: {
    vendors: ['react', 'react-dom'],
    main: path.join(__dirname, 'webapp/src/main.jsx')
  },
  // 输出配置
  output: {
    clean: {
      keep: /\/WEB-INF/ // 保留WEB-INF文件夹不清除
    },
    filename: '[name].[contenthash:8].js',
    path: path.resolve(__dirname, 'dist') // * 必须是绝对路径
    // publicPath: 'www.baidu.com/' // * 一般在prod可能会根据所需设置此属性，它会在所有路径下添加前缀 www.baidu.com 来请求资源
  },

  // 模块处理
  module: {
    rules: [
      // * 第一： 最重要的是给自己的js、ts、jsx等配置loader,babel,polyfill
      {
        test: /\.(js|jsx)$/,
        use: [
          'thread-loader', // 其后loader开启独立worker池
          {
            loader: 'babel-loader?cacheDirectory' // 开启babel-loader缓存
          }
        ],
        exclude: [path.resolve(__dirname, 'node_modules')]
      },

      // * 第四： 给img配置loader处理
      {
        test: /\.(png|jpe?g|gif)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 1024 * 15
          }
        },
        generator: {
          filename: 'static/images/[name].[contenthash:6][ext]'
        }
      },

      // * 最后： 给字体图标资源配置loader处理
      {
        // 处理引入字体图标资源所需loader安装指令：npm install file-loader -D
        test: /(\.(ttf|woff|eot)$|iconfont\.svg)/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 1024 * 8
          }
        },
        generator: {
          filename: 'static/fonts/[name].[contenthash:6][ext]'
        },
        exclude: [path.resolve(__dirname, 'webapp/src/icons')]
      },
      {
        test: /\.(svg)$/,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              symbolId: 'icon-[name]'
            }
          },
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                {
                  name: 'removeAttrs',
                  params: {
                    attrs: '(fill|stroke)'
                  }
                }
              ]
            }
          }
        ],
        include: [path.resolve(__dirname, 'webapp/src/icons')]
      }
    ]
  },
  // webpack 插件
  plugins: [
    new webpack.ProgressPlugin(),
    // copy 迁移静态资源
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'webapp', 'public'),
          to: path.resolve(__dirname, 'dist', 'public')
        }
      ]
    }),
    new HtmlWebpackPlugin({
      title: 'custom title',
      template: path.join(__dirname, 'webapp/public/index.html'),
      filename: 'index.html',
      inject: true
    })
  ],
  resolve: {
    extensions: ['.jsx', '.js'],
    alias: {
      '@component': path.resolve(__dirname, 'webapp/src/components')
    }
  },
  // 优化属性
  optimization: {
    // tree shaking,将没有引用的代码摇掉，在package.json 中设置，将不需要树摇的列举出来
    // sideEffects:[ "*.css", "*.less", "iconfont.js", "*/*/icons/index.js"]
    usedExports: true,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        defaultVendors: {
          filename: 'js/chunk.[name].[contenthash:8].js'
        }
      }
    }
  }
};

module.exports = env => {
  console.log('mode:', env.production);
  // webpack5 target 默认不是web
  commonConfig.target = env.production ? 'browserslist' : 'web';

  let config = env.production ? merge(commonConfig, prodConfig) : merge(commonConfig, devConfig);

  // 添加分析
  if (env.analyze) {
    const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
    config.plugins.push(new BundleAnalyzerPlugin());
  }
  return config;
};
