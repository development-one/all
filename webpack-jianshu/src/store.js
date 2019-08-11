/*
* @Author: lenovo
* @Date:   2019-04-03 21:49:28
* @Last Modified by:   lenovo
* @Last Modified time: 2019-04-03 23:26:02
*/
import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

const num = JSON.parse(localStorage.getItem('num') || "[]")
const store = new Vuex.Store({
	state:{
		list: num
	},
	mutations:{
		getlist(state,abc){
			state.list = abc
			localStorage.setItem("num",JSON.stringify(state.list))
		}
	},
	getters:{
		getnum(state){
			const a = []
			state.list.forEach(item=>{
				a[item.id] = item.num1
			})
			return a
		}
	}
})
export default store