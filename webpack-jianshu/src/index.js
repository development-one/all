/*
* @Author: lenovo
* @Date:   2019-03-28 21:33:28
* @Last Modified by:   lenovo
* @Last Modified time: 2019-04-09 22:54:33
*/
import Vue from "vue"
import app from "@/app.vue"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import VueRouter from "vue-router"
Vue.use(VueRouter)
import axios from "axios"
import VueAxios from "vue-axios"
Vue.use(VueAxios,axios)

import rout from "@/router.js"
import stor from "@/store.js"

import moment from "moment"
import qs from "qs"

Vue.filter("dateFormat",function(datastr,pattern="YYYY-MM-DD HH:mm:ss"){
	return moment(datastr).format(pattern)
})

var vm = new Vue({
	el: "#app",
	render: c=>c(app),
	router: rout,
	store: stor
})