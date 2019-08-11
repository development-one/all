/*
* @Author: lenovo
* @Date:   2019-03-06 00:28:24
* @Last Modified by:   lenovo
* @Last Modified time: 2019-03-06 12:10:03
*/
/*import "./css/one.css"
console.log("ok")

class abc {
	static aa = {id:1,name:"xixi"}
}
console.log(abc.aa.id)*/

import Vue from "vue"
import login from "./lx1.vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)
import account from "./main/account.vue"
import register from "./main/register.vue"
import account2 from "./main/account2.vue"
import register2 from "./main/register2.vue"

var router111 = new VueRouter({
	routes: [
		{path:"/",redirect:"/acc"},
		{path:"/acc",component:account,
			children: [
			{path:"/acc2",component:account2},
			{path:"/reg2",component:register2}
			]
		},
		{path:"/reg",component:register}
	]
})
var vm = new Vue({
	el: "#app",
	data: {},
	render:function(el){
		return el(login)
	},
	router: router111
})