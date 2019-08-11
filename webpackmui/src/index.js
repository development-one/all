/*
* @Author: lenovo
* @Date:   2019-03-06 15:10:03
* @Last Modified by:   lenovo
* @Last Modified time: 2019-03-06 19:02:12
*/
/*import "@/css/one.scss"
console.log("asd")

class abc  {
	static aaa ={id:1,name:"abc"}
}
console.log(abc.aaa)*/
import Vue from "vue"
import login from "./app.vue"
import VueRouter from "vue-router"
import logins from "./router/login.vue"
import register from "./router/register.vue"
import MintUI from "mint-ui"
Vue.use(MintUI)
Vue.use(VueRouter)
var router1 = new VueRouter({
	routes:[
		{path:"/log",component:logins},
		{path:"/reg",component:register}
	]
})
var vm = new Vue({
	el:"#app",
	data:{},
	render: c=>c(login),
	router: router1
})