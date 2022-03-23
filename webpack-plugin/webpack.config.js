const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// self plugin
const ListWebpackPlugin = require('./plugins/list-webpack-plugin');

module.exports = {
    mode: 'production',
    devtool: false,
    target: 'web',
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: '[name].[contenthash:8].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: []
    },
    resolve: {
        extensions: ['.js', '.json', '.ts'],
        alias: {
            '@src': path.resolve(__dirname, 'src')
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            title: 'webpack-plugin' // * 同时，在模板中的title标签中配置模板语法
        }),
        new ListWebpackPlugin({
            filename: 'buildResult.md'
        })
    ]
};
