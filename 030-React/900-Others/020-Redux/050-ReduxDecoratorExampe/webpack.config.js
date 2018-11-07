const path = require('path');

module.exports = {
	entry: './src/App.tsx',
	output: {
		path: path.resolve(__dirname, 'bin'),
		filename: 'app.bundle.js'
	},
	devtool: "eval-source-map",
	module: {
		loaders: [
			{
				test: /\.tsx$/,
				loaders: [{
					loader: 'babel-loader'
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