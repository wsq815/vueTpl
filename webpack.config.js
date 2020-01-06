const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'eval-source-map', //资源映射开发环境方便跟踪错误，生产环境中不生成 sourcemap，或者如果需要拥有错误上报工具，选择 source-map，否则选择none
    devServer: {
      contentBase: path.join(__dirname, "dist"),//指定本地服务的所需的静态文件
      hot: true, //开启热更新，局部刷新，不刷新整个页面（浏览器刷新）
      compress: true,
      overlay: true,
      open: true,
      port: 5000,
      proxy: {
        "/api": "http://localhost:8081"
      }
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /.vue$/,
                use: 'vue-loader'
            },
            {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", 
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: [require('postcss-preset-env')()]
                        }
                    }, 
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [
                  {
                    loader: "url-loader",
                    options: {
                      limit: 8092,
                      name: "img/[hash:7].[ext]"
                    }
                  }
                ]
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                use: [
                  {
                    loader: "url-loader",
                    options: {
                      limit: 8092,
                      name: "media/[hash:7].[ext]"
                    }
                  }
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: [
                  {
                    loader: "url-loader",
                    options: {
                      limit: 8092,
                      name: "font/[hash:7].[ext]"
                    }
                  }
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            title: "项目模板"
        })
    ]
}