var path = require("path");
var webpack = require("webpack");
var CommonsChunkPlugin = require("./lib/optimize/CommonsChunkPlugin");

module.exports = {
	entry: {
		main: './src/m/main'
	},
	output: {
		contentBase: path.join(__dirname, "dist"),
		path: path.join(__dirname, "dist"),
		publicPath: "/dist",
		filename: '[name].m.bundle.js'
	},
	plugins: [
        new CommonsChunkPlugin({
            name: "commons",
            chunks: ["main"]
        })
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
		        presets: ['react', 'es2015', 'stage-0']
		      }
		    }
		]
	}
};
