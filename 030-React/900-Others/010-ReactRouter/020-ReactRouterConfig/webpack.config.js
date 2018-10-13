const path = require('path');

module.exports = {
	entry: './src/App.tsx',
	output: {
		path: path.resolve(__dirname, 'bin'),
		filename: '[name].bundle.js',
		chunkFilename: '[name].bundle.js'
	},
	devtool: "eval-source-map",
	module: {
		loaders: [
			{
				test: /\.tsx$/,
				loaders: ['babel-loader', 'ts-loader'],
				exclude: [
					/node_modules/
				],
				options: {
					presets: ['es2015'],
					plugins: ["syntax-dynamic-import"]
				}
			}
		]
	},
	resolve: {
		extensions: ['.jsx', '.js', '.tsx'], 
		modules: [ path.resolve(__dirname, 'src'), 'node_modules' ] 
    }
}; 