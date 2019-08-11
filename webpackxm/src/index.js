/*
* @Author: lenovo
* @Date:   2019-07-27 16:32:52
* @Last Modified by:   lenovo
* @Last Modified time: 2019-08-01 03:55:34
*/
import Vue from "vue"
import app from "@/app.vue"
import rout from "@/router.js"
import store from "@/store.js"


import MintUI from "mint-ui"
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
//导入axios
import axios from "axios"
import VueAxios from "vue-axios"
Vue.use(VueAxios,axios)
import qs from "qs"

//使用全局过滤器moment
import moment from "moment"
Vue.filter("dateFormat",function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
	return moment(dataStr).format(pattern)
})

import VuePreview from "vue-preview"
Vue.use(VuePreview)

// 按需导入vant组件
/*import {Button, Image, NavBar, Icon, Tabbar, TabbarItem, Lazyload, Swipe, SwipeItem, Grid, GridItem, List, Cell, CellGroup, Tag, Panel} from 'vant';
Vue.use(Image).use(Button).use(NavBar).use(Icon).use(Tabbar).use(TabbarItem).use(Lazyload).use(Swipe).use(SwipeItem).use(Grid).use(GridItem).use(List).use(Cell).use(CellGroup).use(Tag).use(Panel);*/
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);


var vm = new Vue({
	el: "#xm1",
	render: c=>c(app),
	router: rout,
	store
})