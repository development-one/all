<template>
	<div class="container">
		<van-nav-bar title="vue项目练习" :left-text="backMessage" fixed 
		:left-arrow="backVal" @click-left="onLeft"/>
		<router-view></router-view>
	 <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="gem-o" to="/gem">会员</van-tabbar-item>
      <van-tabbar-item icon="cart-o" to="/shopcar" :info="$store.getters.getnum">购物车</van-tabbar-item>
      <van-tabbar-item icon="search" to="/search">搜索</van-tabbar-item>
  </van-tabbar>
	</div>
</template>
<style scoped>
.container{
	width: 100%;
	height: 100%;
	padding: 46px 0 50px 0;
}
.tabbar{
	border-top: 1px solid #ccc;
}	
.van-ellipsis{
	color: #1989fa;
}
</style>
<script>
export default {
  data() {
    return {
      active: 0,
      backMessage: "返回",
      backVal: true
    }
  },
  methods:{
  	onLeft(){
  		this.$router.go(-1)
  	}
  },
  created(){
		this.backMessage = this.$route.path === "/home" ? '' : "返回"
		this.backVal = this.$route.path === "/home" ? false :  true
  },
  watch:{
  	"$route.path":function(newVal){
  		if(newVal === "/home"){
  			this.backMessage = ""
			this.backVal= false
  		}else{
  			this.backMessage = "返回"
			this.backVal= true
  		}
  	}
  }
}
</script>