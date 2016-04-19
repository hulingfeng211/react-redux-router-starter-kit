var gulp = require('gulp');
var gutil = require("gulp-util");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var del = require('del');
var runSequence = require('run-sequence');

var webpackConfig = require("./webpack.config.js");

//css
gulp.task('style', function(){
	gulp.src('./src/style/*.css')
		.pipe(gulp.dest('./dist/style/'))
});

//amazeui style
gulp.task('amazeui-to-dist', function(){
	gulp.src('./src/style/amazeui/**/*')
		.pipe(gulp.dest('./dist/style/amazeui/'))
	gulp.src('./src/style/amazeui-touch/**/*')
		.pipe(gulp.dest('./dist/style/amazeui-touch/'))
});

//mock data
gulp.task('mock-data', function(){
	gulp.src('./src/mock/getData.json')
		.pipe(gulp.dest('./dist/'))
});

// 监视源文件变化自动编译
gulp.task('watch', () => {
  gulp.watch('./src/style/*.css', ['style'], function(){
  	gutil.log('file watching...')
  });
});

//js, http server
gulp.task("webpack-dev-server", function(callback) {
    // Start a webpack-dev-server
    var compiler = webpack(webpackConfig);

    new WebpackDevServer(compiler, {
    	publicPath: webpackConfig.output.publicPath,
    	stats: { colors: true },
		noInfo:true
    }).listen(8080, "localhost", function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        // Server listening
        gutil.log("[webpack-dev-server]", "http://localhost:8080/");

        // keep the server alive or continue?
        // callback();
    });
});

gulp.task("webpack:build", function(callback) {
	// modify some webpack config options
	var myConfig = Object.create(webpackConfig);
	myConfig.plugins = myConfig.plugins.concat(
		new webpack.DefinePlugin({
			"process.env": {
				// This has effect on the react lib size
				"NODE_ENV": JSON.stringify("production")
			}
		}),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin()
	);

	// run webpack
	webpack(myConfig, function(err, stats) {
		if(err) throw new gutil.PluginError("webpack:build", err);
		gutil.log("[webpack:build]", stats.toString({
			colors: true
		}));
		callback();
	});
});

// 洗刷刷
gulp.task('clean', () => {
  return del(['dist/*']);
});


//默认
gulp.task('default', (cb) => {
	runSequence('clean', ['webpack-dev-server', 'style', 'amazeui-to-dist', 'mock-data', 'watch'], cb);
});

// Production build
gulp.task("build", (cb) => {
	runSequence('clean', ['webpack:build', 'style', 'amazeui-to-dist', 'mock-data'], cb);
});
