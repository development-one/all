/*
* @Author: lenovo
* @Date:   2019-03-03 20:03:43
* @Last Modified by:   lenovo
* @Last Modified time: 2019-03-05 15:57:50
*/
/*import'@/css/one.css';
import $ from "jquery"
import"bootstrap/dist/css/bootstrap.css";*/

/*$(function(){
	$("button").click(function(){
  	$("h1").animate({ 
  	  	width: 400,
  	  	height: 600, 
  	}, 1000 );
	});
})

class abc {
	static info = {id:1, name:"你好"}
}
console.log(abc.info.id)*/
import Vue from "vue"
import login from "./aaa.vue"
var vm = new Vue({
	el: "#app",
	data: {},
	render:function(duixiang){
		return duixiang(login)
	}
})