/*
* @Author: lenovo
* @Date:   2019-04-01 22:19:53
* @Last Modified by:   lenovo
* @Last Modified time: 2019-04-03 14:30:45
*/
import VueRouter from "vue-router"
import home from "@/component/home.vue"
import article from "@/component/article.vue"

var rout = new VueRouter({
	routes: [
		{path:"/",redirect:"/home"},
		{path:"/home", component:home},
		{path:"/home/article/:id", component:article}
	],
	linkActiveClass: "aabb"
})

export default rout