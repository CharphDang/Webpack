/*
 * @Author: Charph
 * @Description: 遍历文件目录
 * @Date: 2021-03-24 16:54:35
 * @LastEditors: Charph
 * @LastEditTime: 2021-03-24 16:54:58
 */

// kkb-general
// * 生成html文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// * 利用glob， npm i glob -D
const glob = require('glob');

const setMultiPage = filepath => {
    const entry = {};
    const htmlWebpackPlugins = [];

    // 具体实现
    const entryFiles = glob.sync(filepath);
    entryFiles.map((item, index) => {
        console.log(item, index);
        const entryFile = entryFiles[index];
        const match = entryFile.match(/src\/page\/(.*)\/index\.js$/);
        const pageName = match && match[1];
        const entryKey = `${pageName}\/${pageName}`;
        entry[entryKey] = entryFile;
        htmlWebpackPlugins.push(
            new HtmlWebpackPlugin({
                title: pageName,
                template: entryFile.replace('.js', '.html'),
                filename: `${entryKey}.html`,
                chunks: [entryKey],
                inject: true
            })
        );
    });
    return { entry, htmlWebpackPlugins };
};

module.exports = {
    setMultiPage
};
