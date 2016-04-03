var path = require("path");
var CommonsChunkPlugin = require("./lib/optimize/CommonsChunkPlugin");

module.exports = {
	entry: {
		main: './src/main',
		header: './src/header'
	},
	output: {
		path: path.join(__dirname, "build"),
		publicPath: "/assets/",
		filename: '[name].bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: 'style!css'
			},
			{
		      test: /\.js$/,
		      exclude: /(node_modules|bower_components)/,
		      loader: 'babel', // 'babel-loader' is also a legal name to reference
		      query: {
		        presets: ['react', 'es2015']
		      }
		    }
		]
	}
};
