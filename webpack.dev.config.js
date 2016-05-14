var path = require("path");
var webpack = require("webpack");
var CommonsChunkPlugin = require("./lib/optimize/CommonsChunkPlugin");

module.exports = {
	entry: {
		main: [
			'webpack-dev-server/client?http://localhost:7070',
			'webpack/hot/only-dev-server', 
			'./src/m/main'
	    ],
	    'demo/main': [
			'webpack-dev-server/client?http://localhost:7070',
			'webpack/hot/only-dev-server', 
			'./src/demo/main'
	    ],
	},
	output: {
		contentBase: path.join(__dirname, "dist"),
		path: path.join(__dirname, "dist"),
		publicPath: "http://localhost:7070/",
		filename: '[name].m.bundle.js'
	},
	plugins: [
        new CommonsChunkPlugin({
            name: "commons",
            chunks: ["main"]
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: 'style!css'
			},
			{
		      test: /\.jsx?$/,
		      exclude: /(node_modules|bower_components)/,
		      loader: 'react-hot'
		    },
			{
		      test: /\.jsx?$/,
		      exclude: /(node_modules|bower_components)/,
		      loader: 'babel',
		      query: {
		        presets: ['react', 'es2015', 'stage-0'],
		        cacheDirectory: true,
		        plugins: ["antd", {}]
		      }
		    }
		]
	}
};
