var webpack = require('webpack');
var path = require('path');
//css抽离打包
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let config = {
    //页面入口文件配置
    entry: {
        index: path.resolve(__dirname, './src/App.jsx')
    },
    //入口文件输出配置
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    mode: process.env.NODE_ENV,
    module: {
        //加载器配置
        rules: [
            {
              /*  test: /\.js|jsx$/,
                include: path.resolve(__dirname, './src'),
                exclude: path.resolve(__dirname, './node_modules'),
                loaders: ['react-hot-loader', 'babel?presets[]=react,presets[]=es2015,presets[]=stage-0']*/

                test: /\.(jsx|js)$/,
                include: path.resolve(__dirname, './src'),
                exclude: path.resolve(__dirname, './node_modules'),
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ["react", "env"]
                    }
                }]
            },
            {
                test: /\.(css|less)$/,
                exclude: path.resolve(__dirname, './node_modules'),
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },
    devServer: {
        port: 9090,
        overlay: true, //出现错误
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    },
    //插件项
    plugins: [
        // new webpack.HotModuleReplacementPlugin()
        //将js和css分开
        // new ExtractTextPlugin('bundle.css'),
        new ExtractTextPlugin('bundle.less')
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.css'] //后缀名自动补全
    }
};
if(process.env.NODE_ENV === 'development') {
    config.output.publicPath = 'dist';
    config.devtool = 'cheap-module-eval-source-map';
} else {
    config.output.publicPath = './';
    config.module.rules[1].use = ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: [{
            loader: 'css-loader',
            options: {
                minimize: true //css压缩
            }
        }]
    });
}
module.exports = config;