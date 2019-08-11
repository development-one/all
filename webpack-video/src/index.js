/*
* @Author: lenovo
* @Date:   2019-04-17 15:58:14
* @Last Modified by:   lenovo
* @Last Modified time: 2019-04-17 17:07:44
*/
import Vue from "vue"
import VueRouter from "vue-router"
import app from "@/app.vue"

var vm = new Vue({
	el: "#app",
	data: {},
	render: c=>c(app)
})