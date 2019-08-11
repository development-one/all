/*
* @Author: lenovo
* @Date:   2019-04-17 16:06:29
* @Last Modified by:   lenovo
* @Last Modified time: 2019-04-17 17:12:57
*/
const path = require("path")
const html1 = require("html-webpack-plugin")
const vue1 = require("vue-loader/lib/plugin")

const htmlplugin = new html1({
	template: "./src/index.html",
	filename: "index.html"
})
const vueplugin = new vue1({})
module.exports = {
	mode: "development",
	module: {
		rules: [
			{test: /\.css$/,use: ["style-loader","css-loader"]},
			{test: /\.scss$/,use: ["style-loader","css-loader","sass-loader"]},
			{test: /\.(png|jpg|svg|gif)$/,use:"file-loader"},
			{test: /\.(woff|woff2|tof|eot|ttf)$/,use:"file-loader"},
			{test: /\.js$/,use:"babel-loader",exclude:/node_modules/},
			{test: /\.vue$/,use:"vue-loader"}
		]
	},
	plugins: [htmlplugin,vueplugin],
	resolve: {
		alias: {
			"@": path.resolve(__dirname,"src/")
		}
	}
}