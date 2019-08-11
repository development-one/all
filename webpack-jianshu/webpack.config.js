/*
* @Author: lenovo
* @Date:   2019-03-28 21:48:32
* @Last Modified by:   lenovo
* @Last Modified time: 2019-03-30 20:27:43
*/
const path = require("path")
const html1 = require("html-webpack-plugin")
const vue1 = require("vue-loader/lib/plugin")

const htmlPlugin = new html1({
	template: "./src/index.html",
	filename: "index.html"
})
const vuePlugin = new vue1({

})
module.exports = {
	mode: "development",
	module: {
		rules:[
			{test:/\.css$/, use:["style-loader","css-loader"]},
			{test:/\.scss$/, use:["style-loader","css-loader","sass-loader"]},
			{test:/\.(woff|woff2|eot|tof|ttf)$/, use:"file-loader"},
			{test:/\.(svg|png|jpg|gif)$/, use:"file-loader"},
			{test:/\.js/, use: "babel-loader", exclude:/node_modules/},
			{test:/\.vue/, use: "vue-loader"}
		]
	},
	plugins: [htmlPlugin,vuePlugin],
	resolve:{
		alias:{
			"@": path.resolve(__dirname,"src/")
		}
	}
}