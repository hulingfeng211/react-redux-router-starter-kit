var path = require("path");
var CommonsChunkPlugin = require("./lib/optimize/CommonsChunkPlugin");

module.exports = {
	entry: {
		main: './src/main'
	},
	output: {
		path: path.join(__dirname, "dist"),
		publicPath: "/dist/",
		filename: '[name].bundle.js'
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
		      test: /\.js$/,
		      exclude: /(node_modules|bower_components)/,
		      loader: 'babel',
		      query: {
		        presets: ['react', 'es2015', 'stage-0']
		      }
		    }
		]
	}
};
