/*
* @Author: lenovo
* @Date:   2019-07-27 18:52:13
* @Last Modified by:   lenovo
* @Last Modified time: 2019-07-31 19:11:58
*/
import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

// 底部tabbar路由
import home from "@/component/tabbar/home.vue"
import gem from "@/component/tabbar/gem.vue"
import shopcar from "@/component/tabbar/cart.vue"
import search from "@/component/tabbar/search.vue"

//home主页grid路由
import goods from "@/component/homeGrid/goods.vue"
import message from "@/component/homeGrid/message.vue"
import news from "@/component/homeGrid/news.vue"
import picture from "@/component/homeGrid/picture.vue"
import contact from "@/component/homeGrid/contact.vue"
import video from "@/component/homeGrid/video.vue"

//新闻详情页面路由
import newsinfo from "@/component/newsinfo/newsinfo.vue"

//图片详情页面路由
import pictureInfo from "@/component/picture/pictureInfo.vue"

//商品详情页面路由
import goodsInfo from "@/component/goods/goodsInfo.vue"



const route = new VueRouter({
	routes: [
		{path: "/", redirect: "/home"},
		// 底部tabbar路由
		{path: "/home", component: home},
		{path: "/gem", component: gem},
		{path: "/shopcar", component: shopcar},
		{path: "/search", component: search},
		
		//home主页grid路由
		{path: "/home/goods", component: goods},
		{path: "/home/message", component: message},
		{path: "/home/news", component: news},
		{path: "/home/picture", component: picture},
		{path: "/home/contact", component: contact},
		{path: "/home/video", component: video},

		//新闻详情页面路由
		{path:"/home/news/newsinfo/:id", component: newsinfo},
		//图片详情页面路由
		{path:"/home/picture/pictureInfo/:id", component: pictureInfo},
		//图片详情页面路由
		{path:"/home/goods/goodsInfo/:id", component: goodsInfo}
	]
})
export default route;