// * prod 的时候， css，less需要重新配置压缩单独提取
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const prodConfig = {
    mode: 'production',
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            // * 第二： 其次给自己的less/sass等样式等配置loader
            {
                test: /\.(less|css)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    'css-loader',
                    'postcss-loader',
                    'less-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/index.[contenthash:8].css'
        })
    ]
};

module.exports = prodConfig;
