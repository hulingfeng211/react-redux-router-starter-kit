var express = require('express');
var webpack = require('webpack');
var WebpackDevServer = require ('webpack-dev-server');
var webpackDevMiddleware = require("webpack-dev-middleware");
var proxy = require('proxy-middleware');
var url = require('url');

var config =  require('./webpack.config');

var app = express()

app.use('/m/dist', proxy(url.parse('http://localhost:7070/')));

var compiler = webpack(config);

// webpack-dev-server
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

    console.log('webpack-dev-server at http://localhost:7070/');
});

//m site
app.get('/m', function(req, res) {
  res.sendFile(__dirname + '/public/m.html');
})

app.get('/m/*', function(req, res) {
  res.sendFile(__dirname + '/public/m.html');
})

//onepage demo
app.get('/demo', function(req, res) {
  res.sendFile(__dirname + '/public/demo.html');
})

// node-web-server
app.listen(8080, function (err, result) {
	if (err) {
        return console.log(err);
    }
  	console.log('Node-Web-Server at http://localhost:8080, Ctrl+C to stop')
})
