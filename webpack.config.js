const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                include: path.resolve("node_modules", "lodash"),
                sideEffects: false
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    {
                        loader: 'style-loader', // 将 JS 字符串生成为 style 节点
                    },
                    {
                        loader: 'css-loader', // 将 CSS 转化成 CommonJS 模块
                    },
                    {
                        loader: 'sass-loader', // 将 Sass 编译成 CSS
                    },
                ],
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader', // 将 JS 字符串生成为 style 节点
                    },
                    {
                        loader: 'css-loader', // 将 CSS 转化成 CommonJS 模块
                    },
                    {
                        loader: 'less-loader', // 将 less 编译成 CSS
                    },
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader'],
            },
        ],
    },
    devtool: 'inline-source-map', //代码错了 会在控制台显示文件位置
    devServer: {
        contentBase: './dist',
        hot: true,
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'My App',
        }),
    ],
};
