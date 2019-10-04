
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // #4
const webpack = require('webpack'); // #3

module.exports = {
	mode: 'production', // #6
	entry: './path/to/my/entry/file.js', // #1
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'my-first-webpack.bundle.js'
	}
	module: {
	    rules: [
	    	{ 	// #2
	    		test: /\.txt$/,
	    		use: 'raw-loader' 
	    	}
	    ]
	},
	plugins: [
	    new HtmlWebpackPlugin({template: './src/index.html'}) // #5
	]
};