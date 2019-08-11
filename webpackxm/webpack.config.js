/*
* @Author: lenovo
* @Date:   2019-07-27 16:36:14
* @Last Modified by:   lenovo
* @Last Modified time: 2019-07-27 18:42:49
*/
const path = require("path");
const html1 = require("html-webpack-plugin");
const vue1 = require("vue-loader/lib/plugin");

const htmlPlugin = new html1({
	template: "./src/index.html",
	filename: "index.html" 
})
const vuePlugin = new vue1({

})

module.exports = {
	mode: "development",
	module:{
		rules:[
			{test:/\.css$/,use:["style-loader","css-loader"]},
			{test:/\.scss$/,use:["style-loader","css-loader","sass-loader"]},
			{test:/\.(png|jpg|jpeg|svg|gif)$/,use:"file-loader"},
			{test:/\.(woff|woff2|eot|eof|ttf)$/,use:"file-loader"},
			{test:/\.js$/,use:"babel-loader",exclude:/node_modules/},
			{test:/\.vue$/,use:"vue-loader"}
		]
	},
	plugins: [htmlPlugin,vuePlugin],
	resolve:{
		alias:{
			"@": path.resolve(__dirname,"src/")
		}
	}
}