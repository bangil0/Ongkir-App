const { resolve } = require('path')
const { existsSync } = require('fs')
const webpack = require('webpack')
const { WebpackLogCompiler } = require('./addons/webpack.log')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'development',
	output: {
		filename: '[name].bundle.js',
		chunkFilename: '[id].chunk.js'
	},
	module: {
		rules: [
			{
				test: /\.(css|scss|sass)$/,
				use: [
					'css-hot-loader',
					{
						loader: 'style-loader',
						options: { injectType: 'singletonStyleTag' }
					},
					{
						loader: 'css-loader',
						options: {
							localsConvention: 'camelCase',
							sourceMap: true
						}
					}
				]
			},
			{
				test: /\.(jp?g|png|svg|gif|raw|webp)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							limit: 10240
						}
					}
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							limit: 10240
						}
					}
				]
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development')
		}),
		new HtmlWebpackPlugin({
			template: resolve(process.cwd(), 'public/index.html'),
			scriptLoading: 'defer'
		}),
		new WebpackLogCompiler({
			env: 'development',
			message: 'Starting the development server...'
		})
	],
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					name: 'vendors',
					test: /\.js$/,
					chunks: 'all',
					enforce: true,
					reuseExistingChunk: false
				},
				styles: {
					name: 'styles',
					test: /\.(css|sass|scss)$/,
					chunks: 'all',
					enforce: true,
					reuseExistingChunk: false
				}
			}
		}
	},
	devServer: {
		open: true,
		compress: true,
		hot: true,
		inline: true,
		watchContentBase: true,
		contentBase: resolve(process.cwd(), 'build'),
		historyApiFallback: true,
		before: (app, server, compiler) => {
			const fileExist = existsSync('./src/setupProxyx.js')
			if(fileExist) {
			 const pathProxy = resolve(process.cwd(), 'src/setupProxy')
			 return require(`${pathProxy}`)(app)
	   }
		},
		port: process.env.PORT || 3000,
		liveReload: false
	},
	devtool: 'inline-source-map'
}
