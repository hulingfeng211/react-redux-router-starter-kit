var express = require('express');
var webpack = require('webpack');
var WebpackDevServer = require ('webpack-dev-server');
var webpackDevMiddleware = require("webpack-dev-middleware");
var proxy = require('proxy-middleware');
var url = require('url');

var config =  require('./webpack.config');

var app = express()

app.use('/dist', proxy(url.parse('http://localhost:7070/')));

var compiler = webpack(config);

var server = new WebpackDevServer(compiler, {
	contentBase: config.output.contentBase,
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    noInfo: true
}).listen(7070, 'localhost', function(err, result) {
    if (err) {
        return console.log(err);
    }

    console.log('Listening at http://localhost:7070/');
});

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/index.html');
})

app.listen(8080, function (err, result) {
	if (err) {
        return console.log(err);
    }
  	console.log('Server listening on http://localhost:8080, Ctrl+C to stop')
})
