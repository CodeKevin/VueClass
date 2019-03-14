nrm:
1.install:
npm i nrm -g
2.list
nrm ls
3.use
nrm use *

webpack
usage:webpack 当前路径文件 生成路径文件
1. 处理js文件互相依赖关系
2. 处理js兼容问题，把高级的浏览器不识别的语法转为浏览器能识别的语法
只能处理.js文件，如果处理非js文件，需要手动安装第三方加载器
npm i style-loader css-loader -D
配置loader处理css文件
module: {
        rules: [
            {test:/\.css$/,use:['style-loader','css-loader']}
        ]
    }

配置webpack
const path = require('path')
module.exports = {
    //配置要打包的文件
    entry: path.join(__dirname,'./src/main.js'),
    //配置输出文件
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    }
}

使用webpack-dev-sever实现自动打包
npm i webpack-dev-server
webpack-dev-server依赖于webpack,必须在项目本地安装webpack.
webpack-dev-server打包好的文件并没有在硬盘生成，而是在内存中.

npm run dev
    1."dev": "webpack-dev-server --open --port 3000 --contentBase src --hot"

    2.在webpack.config.js中配置devSever:
    (1)导入webpack
    const webpack = require('webpack')
    (2)devServer:{
        open:true,
        port:3000,
        contentBase:'src',
        hot:true
    },
    (3)plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]
npm i html-webpack-plugin
1.自动在内存中生成html页面
2.自动把打包好的bundle.js追加到页面中去

npm usage:
npm init 生成package.json配置文件
npm i * 项目会生成node_modules文件夹包含npm导入的包
npm i *@3.6.0 @后面版本号