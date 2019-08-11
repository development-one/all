<template>
<div class="goods">
	<div class="container">
		<router-link class="goodlist" v-for="val in list" :key="val.id" tag="div" :to="'/home/goods/goodsInfo/'+val.id">
			<van-image
  				:src="val.img"
			/>
			<div class="title">{{val.title}}</div>
			<div class="content">
				<div class="price">
					<span class="new">￥{{val.newprice}}</span>
					<span class="old">￥{{val.oldprice}}</span>
				</div>
				<div class="info">
					<span>热卖中</span>
					<span>剩{{val.number}}件</span>
				</div>
			</div>
		</router-link>	
	</div>
</div>
</template>
<style lang="scss" scoped>
.container{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding: 0 10px;
	text-align: left;
	.goodlist{
		padding: 5px;
		box-sizing: border-box;
		width: 49%;
		margin-bottom: 10px;
		box-shadow: 0 0 6px 1px #ccc;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		.van-image{		
			width: 100%;
			max-height: 200px;	
			min-height: 150px;
			overflow: hidden;
			display: block;
		}
		.title{
			margin: 5px 0;
			font-size: 18px;
			font-weight: bold;
			text-align: left;
			max-height: 72px;
			overflow: hidden;
		}
		.content{
			text-align: left;
			.price{
				margin-top: 10px;
				.new{
					font-size: 20px;
					font-weight: bold;
					color: red;
				}
				.old{
					font-size: 16px;
					margin-left: 20px;
					color: lightblue;
				}
			}
			.info{
				margin: 5px auto;
				display: flex;
				justify-content: space-between;
				font-size: 14px;
				
			}
		}
	}
}

</style>
<script>
export default {
  data() {
    return {
    	list: []
    }
  },
  created(){
	this.getlist()
  },
  methods:{
 	getlist(){
 		this.axios.get("../../../public/api/goods/goods.json").then(result=>{
			this.list = result.data.message
 		})
 	}
  }
 
}
</script>