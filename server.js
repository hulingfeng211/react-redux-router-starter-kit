var express = require('express');
var compression = require('compression')
var webpack = require('webpack');
var WebpackDevServer = require ('webpack-dev-server');
var webpackDevMiddleware = require("webpack-dev-middleware");
var proxy = require('proxy-middleware');
var url = require('url');

var webpackDevConfig = require('./webpack.dev.config');
var ENV = process.env.NODE_ENV;
var app = express()


if(ENV === 'dev') {

  app.use('/m/dist', proxy(url.parse('http://localhost:7070/')));

  // webpack-dev-server
  var compiler = webpack(webpackDevConfig);

  var server = new WebpackDevServer(compiler, {
    contentBase: webpackDevConfig.output.contentBase,
      publicPath: webpackDevConfig.output.publicPath,
      hot: true,
      historyApiFallback: true,
      noInfo: true
  }).listen(7070, 'localhost', function(err, result) {
      if (err) {
          return console.log(err);
      }

      console.log('webpack-dev-server at http://localhost:7070');
  });

} else {

  app.use(compression());

  app.use('/m/dist', express.static(__dirname + '/dist'));
}

//m site
app.get('/m', function(req, res) {
  res.sendFile(__dirname + '/public/m.html');
})

app.get('/m/*', function(req, res) {
  res.sendFile(__dirname + '/public/m.html');
})

// node-web-server
app.listen(8080, function (err, result) {
	if (err) {
        return console.log(err);
    }
  	console.log('Node-Web-Server at http://localhost:8080, Ctrl+C to stop')
})


