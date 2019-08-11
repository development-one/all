/*
* @Author: lenovo
* @Date:   2019-03-03 20:07:11
* @Last Modified by:   lenovo
* @Last Modified time: 2019-03-05 16:08:11
*/
const path = require('path')
const html = require("html-webpack-plugin")
const vueplugin = require("vue-loader/lib/plugin")

var htmlplugin = new html({
	template: "src/index.html",
	filename: "index.html"
})
var vueplugin1 = new vueplugin()
module.exports = {
  mode: "development",
  plugins: [htmlplugin,vueplugin1],
  module: {
  	rules: [
		{test:/\.css$/,use:["style-loader","css-loader"]},
		{test:/\.scss$/,use:["style-loader","css-loader","sass-loader"]},
    {test:/\.(png|svg|jpg|gif)$/,use:"file-loader"},
    {test:/\.(woff|woff2|eot|ttf|otf)$/,use:"file-loader"},
    {test:/\.js$/, use:"babel-loader",exclude:/node_modules/},
    {test:/\.vue$/,use:"vue-loader"}
  	]
  },
  resolve:{
	alias:{
		'@': path.resolve(__dirname,"src/")
	}
  }
}
