const path = require('path');

module.exports = {
	entry: {
		app: 	'./src/App.tsx'
	},
	output: {
		publicPath: 'bin/',		
		path: path.resolve(__dirname, 'bin'),
		filename: '[name].bundle.js',
		chunkFilename: '[name].bundle.js'
	},
	devtool: "eval-source-map",
	module: {
		loaders: [
			{
				test: /\.tsx$/,
				loaders: [{
					loader: 'ts-loader'
				}],
				exclude: [
					/node_modules/
				]
			}
		]
	},
	resolve: {
		extensions: ['.jsx', '.js', '.tsx'], 
		modules: [ path.resolve(__dirname, 'src'), 'node_modules' ] 
    }
}; 