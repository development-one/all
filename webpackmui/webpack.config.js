/*
* @Author: lenovo
* @Date:   2019-03-06 15:19:18
* @Last Modified by:   lenovo
* @Last Modified time: 2019-03-06 17:40:36
*/
const path = require("path")
const html = require("html-webpack-plugin")
const vue1 = require("vue-loader/lib/plugin")

const htmlplugin = new html({
	template: "./src/index.html",
	filename: "index.html"
})
const vueplugin = new vue1({

})
module.exports = {
	mode: "development",
	plugins: [htmlplugin,vueplugin],
	module: {
		rules: [ 
			{test:/\.css$/,use:["style-loader","css-loader"]},
			{test:/\.scss$/,use:["style-loader","css-loader","sass-loader"]},
			{test:/\.(png|jpg|svg|gif)$/,use:"file-loader"},
			{test:/\.(woff|woff2|eot|tof|ttf)$/,use:"file-loader"},
			{test:/\.js$/,use:"babel-loader",exclude:/node_modules/},
			{test:/\.vue$/,use:"vue-loader"}
		]
	},
	resolve:{
		alias: {
			"@": path.resolve(__dirname,"src/")
		}
	}
}