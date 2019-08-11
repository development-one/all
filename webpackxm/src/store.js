/*
* @Author: lenovo
* @Date:   2019-07-31 19:12:45
* @Last Modified by:   lenovo
* @Last Modified time: 2019-08-01 05:25:32
*/
import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

var goods = JSON.parse(localStorage.getItem("cmt") || "[]")
export default new Vuex.Store({
	state:{
		car: goods
	},
	mutations:{
		pushcar(state,goodsinfo){
			var flag = false
			state.car.some(item=>{
				if(item.id == goodsinfo.id){
					item.count += parseInt(goodsinfo.count)
					flag = true
					return true;
				}
			})
			if(!flag){
				state.car.push(goodsinfo)
			}
			localStorage.setItem("cmt",JSON.stringify(state.car))
		},
		updatecar(state,goods){
			state.car.some(item=>{
				if(item.id == goods.id){
					item.count = parseInt(goods.count)
					return true
				}
			})
			localStorage.setItem("cmt",JSON.stringify(state.car))
		},
		//删除
		delete(state,id){
			state.car.some((item,i)=>{
				if(item.id == id){
					state.car.splice(i,1)
					return true;
				}
			})
			localStorage.setItem("cmt",JSON.stringify(state.car))
		},
		//选择
		upselect(state,selects){
			state.car.some(item=>{
				if(item.id == selects.id){
					item.select = selects.select
					return true
				}
			})
			localStorage.setItem("cmt",JSON.stringify(state.car))
		},
	},
	getters:{
		getnum(state){
			var c = 0;
			state.car.forEach(item=>{
				c += item.count
			})
			return c;
		},
		getgoodsnum(state){
			var o = {}
			state.car.forEach(item=>{
				o[item.id] = item.count
			})
			return o
		},
		getSelect(state){
			var a = {}
			state.car.forEach(item=>{
				a[item.id] = item.select
			})
			return a
		},
		getPrice(state){
			var a = {
				count: 0,
				price: 0
			};
			state.car.forEach(item=>{
				if(item.select){
					a.count += item.count
					a.price += item.price * item.count
				}
			})
			return a;
		}
	}
})
