var webpack  = require('webpack'),
    path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlwebpackPlugin = require('html-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    autoprefixer = require('autoprefixer');


module.exports = {
    devtool: 'source-map',
    entry: {
        index : [
            'webpack-dev-server/client?http://localhost:3000',
            'webpack/hot/only-dev-server',
            path.resolve(__dirname, './app/index.js')
        ],
        vendor: [
            'react',
            'react-dom',
            'react-redux',
            'react-router',
            'redux'
        ]
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].js',
        chunkFilename: '[name]-[id].[chunkhash:8].js', // 代码分割
        publicPath: "http://localhost:3000/build/" //html引用路径，在这里是本地地址。
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                url: false,
                                minimize: true,
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: false,
                                plugins: () => [autoprefixer(
                                    { browsers: ['iOS >= 7', 'Android >= 4.1',
                                        'last 10 Chrome versions', 'last 10 Firefox versions',
                                        'Safari >= 6', 'ie > 8']
                                    }
                                )]
                            }
                        }
                    ]
                })
            },
            {           //bundle-loader必须放在babel-loader之前，不然可能会报错
                test: /\.bundle\.js$/,
                loader: 'bundle-loader',
                options: {
                    lazy: true,
                    name: '[name]'
                }
            },
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
                include: path.join(__dirname, 'app'),
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 5120
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(
            ['./build'],　 //匹配删除的文件
            {
                root: __dirname,       　　　　　　　　　　//根目录
                verbose:  true,        　　　　　　　　　　//开启在控制台输出信息
                dry:      false        　　　　　　　　　　//启用删除文件
            }
        ),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        // 提供公共代码
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: Infinity,
        }), // 默认会把所有入口节点的公共代码提取出来,vendor.js
        new ExtractTextPlugin({ filename: '[name].css'}),
        new HtmlwebpackPlugin({
            filename: './index.html',
            template : './app/index.html',
            hash: false,
            inject : true,
            minify: {
                removeAttributeQuotes: true,
                removeComments:true,
                collapseWhitespace:true
            }
        }),
    ],
    resolve: {
        extensions: ['.js','.jsx','.css']
    }
};