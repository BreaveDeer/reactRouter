var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var server = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    contentBase: config.output.path,
    hot: true,
    stats: {
        colors: true
    }
})

server.listen(3000);