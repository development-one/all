<template>
<div class="cart">
	<!-- 商品信息 -->
	<div class="goodsinfo" v-for="(val,index) in list" :key="val.id">
		<van-card
  		:thumb="val.img"
		>
		<div slot="title" style="font-size:20px;font-weight:bold;padding:5px">
    		{{val.title}}
  		</div>	
  		<div slot="price" style="font-size:18px;font-weight:bold;padding:5px">
    		{{val.price}}
  		</div>
		<!-- 数量选择 -->
  			<div slot="num">
   				<van-stepper v-model="$store.getters.getgoodsnum[val.id]" integer max="8" @change="onChange(val.id)"/>
 			</div>

  			<div slot="footer">
  				<van-switch 
					v-model="$store.getters.getSelect[val.id]"
   				 	@change="onSelect(val.id,$store.getters.getSelect[val.id])"/>
   				<van-button size="small" type="danger" @click="del(val.id,index)">删除</van-button>
  			</div>
		</van-card>
	</div>
	
	<!-- 提交订单 -->
	<van-submit-bar
  		:price="$store.getters.getPrice.price*100"
  		button-text="提交订单"
  		@submit="onSubmit"
	>
  		<van-checkbox v-model="checked" style="margin-left:20px">全选</van-checkbox>
	</van-submit-bar>
</div>
</template>
<style scoped>
.goodsinfo{
	padding: 10px;
}	
</style>
<script>
export default {
	data() {
		return {
			checked:true,
			list: []
		}
	},
	created(){
		this.getlist()
	},
	methods:{
		onSubmit(){

		},
		getlist(){
			var idArr = [];
			this.$store.state.car.forEach(item=> idArr.push(item.id));

			if(idArr.length <= 0){
				return;
			}			
			this.axios.get("../../../public/api/goods/gowuche/"+idArr.join(",")+".json").then(result=>{
				this.list = result.data.message
			})

		},

		//购物车同步商品数量
		onChange(id){
			let carlist = {
				id: id,
				count: this.$store.getters.getgoodsnum[id]
			}
			this.$store.commit("updatecar",carlist)
		},
		//删除购物车
		del(id,i){
			this.list.splice(i,1);
			this.$store.commit("delete",id);
		},

		onSelect(str,val){
			console.log(val)
			this.$store.commit("upselect",{id:str,select:val})
		}
	}
}	
</script>