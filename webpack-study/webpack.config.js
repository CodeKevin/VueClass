const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    //配置要打包的文件
    entry: path.join(__dirname,'./src/main.js'),
    //配置输出文件
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    devServer:{
        open:true,
        port:3000,
        contentBase:'src',
        hot:true
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template: path.join(__dirname,'./src/index.html'),
            filename: 'index.html'
        })
    ],
    module: {
        rules: [
            {test:/\.css$/,use:['style-loader','css-loader']}
        ]
    }
}