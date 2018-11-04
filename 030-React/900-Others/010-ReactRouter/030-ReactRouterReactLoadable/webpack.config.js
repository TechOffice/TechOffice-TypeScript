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
					loader: 'babel-loader',
					options: {
						presets: ['es2015', 'react'],
						plugins: ["syntax-dynamic-import"]
					}
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