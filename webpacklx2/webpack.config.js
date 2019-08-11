/*
* @Author: lenovo
* @Date:   2019-03-25 15:11:19
* @Last Modified by:   lenovo
* @Last Modified time: 2019-03-25 15:43:14
*/
const path = require("path")
const html = require("html-webpack-plugin")
const vue = require("vue-loader/lib/plugin")

const htmlPlugin = new html({
	template: "./src/index.html",
	filename: "index.html"
})
const vuePlugin = new vue({

})
module.exports = {
	mode: "development",
	module: {
		rules: [
			{test:/\.css$/, use:["style-loader","css-loader"]},
			{test:/\.scss$/, use:["style-loader","css-loader","sass-loader"]},
			{test:/\.(png|jpg|svg|gif)$/, use:"file-loader"},
			{test:/\.(woff|woff2|ttf|eot|tof)$/, use:"file-loader"},
			{test:/\.js$/, use:"babel-loader", exclude:/node_modules/},
			{test:/\.vue$/, use:"vue-loader"}
		]
	},
	plugins: [htmlPlugin,vuePlugin],
	resolve:{
		alias:{
			"@": path.resolve(__dirname,"src/")
		}
	}
}