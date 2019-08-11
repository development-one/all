<template>
	<div class="goodsInfo">
		<!-- 商品轮播 -->
		<div class="swipe">
		<van-swipe :autoplay="3000" indicator-color="white">
  			<van-swipe-item v-for="val in lunbolist" :key="val.id" @click="getImg(val.url,val.id)">
  					<img :src="val.url" alt="">
  			</van-swipe-item>
		</van-swipe>
		</div>
		
		<!-- 商品导航 -->
		<div class="content">
			<div class="header">
				{{infolist.title}}
			</div>
			<div class="footer clearfix">
				<div class="price">
					市场价：	<span class="new">￥{{infolist.oldprice}}</span>
					销售价：<span class="old">￥{{infolist.newprice}}</span>
				</div>
				
				<div class="number">
					购买数量：<van-stepper integer :max="infolist.num" :value="value" @change="onChange"/>
					<transition
						@before-enter="barBefore"
						@enter="barEnter"
						@after-enter="barAfter"
						@after-leave = "barLeave"
					>
						<div class="bar" v-show="flag" ref="xq"></div>
					</transition>				
				</div>
				<div class="button">
					<van-button type="danger" plain size="small" @click="clickFlag && shopcar()">加入购物车</van-button>
					<van-button type="primary" plain size="small">立即购买</van-button>
				</div>
				
			</div>
		</div>
		<!-- 商品参数 -->
		<div class="goodsinfo">
			<h2>商品参数</h2>
			<ul>
				<li>商品货号：{{infolist.name}}</li>
				<li>商品数量：{{infolist.num}}件</li>
				<li>上架时间：{{infolist.time | dateFormat}}</li>
			</ul>
			<van-button type="danger" plain size="large">图文介绍</van-button>
			<van-button type="primary" plain size="large">商品评论</van-button>
		</div>
	</div>
</template>
<style lang="scss" scoped>
.clearfix:after{
	content: ".";
	height: 0;
	display: block;
	visibility: hidden;
	clear: both;
}
.goodsInfo{
	padding: 0 20px;
	box-sizng: border-box;
}
.swipe{
	padding: 20px;
	box-sizing: border-box;
}
.van-swipe{
	width: 100%;
	height: 200px;
}
.van-swipe img{
		width: 100%;
		height: 100%;
}
.content{
	box-shadow: 0px 1px 3px #ccc;
	.header{
		font-size: 24px;
		padding:10px;
		border-bottom: 1px solid #ccc;
	}
	.footer{
		padding: 10px;
		.price{
			margin-bottom: 10px;
			.new{
				margin-right: 20px;
				text-decoration: line-through;
			}
			.old{
				color: red;
				font-size: 20px;
			}
		}
		.number{
			display: flex;
			margin-bottom: 10px;
		}
		.button{
			float:right;
		}
	}
}
.goodsinfo{
	box-shadow: 0px 1px 3px #ccc;
	padding: 10px;
	margin: 20px 0;
	h2{
		margin: 0;
		padding-bottom: 10px;
		border-bottom: 1px solid #ccc;
	}
	ul{
		margin-bottom: 20px;
		li{
			margin-top:10px;
		}
	}
	button{
		margin: 15px 0;
	}
}
// 小球动画
.number{
	position: relative;
	.bar{
		width: 20px;
		height: 20px;
		background: red;
		border-radius: 50%;
		position: absolute;
		left: 116px;
		top: 5px;
		z-index: 11;
	}
}
</style>
<script>
import { ImagePreview } from 'vant';
export default{
	data(){
		return{
			id: this.$route.params.id,
			lunbolist: [],
			infolist: {},
			flag: false,
			clickFlag: true,
			value: 1
		}
	},
	created(){
		this.getlunbo();
		this.getinfo()
	},
	methods:{
		getlunbo(){
			this.axios.get("../../../public/api/goods/goodinfo/lunbo.json").then(result=>{
				this.lunbolist = result.data.message
			})
		},
		getImg(image,id){
			ImagePreview({
				images: [image],
  				startPosition: id,
  				onClose() {
  				 console.log(image)
  				}
			});
		},

		//获取页面基础信息
		getinfo(){
			this.axios.get("../../../public/api/goods/goodinfo/"+this.id+".json").then(result=>{
				this.infolist = result.data.message[0]
			})
		},

		//添加到购物车动画
		shopcar(){
			this.flag = !this.flag
			console.log(this.value)
			const carlist = {
				id: this.id,
				count: this.value,
				price: this.infolist.newprice,
				select: false
			}
			//调用vuex里数据
			this.$store.commit("pushcar",carlist)
		},

		//监听计数器的值变化
		onChange(val){
			this.value = val
		},

		// 小球钩子函数动画
		barBefore(el){
			el.style.transform = 'translate(0,0)'
		},
		barEnter(el,done){
			el.offsetWidth;
			// 小球定位优化
			this.clickFlag = false
			const bar = this.$refs.xq.getBoundingClientRect()
			const icon = document.querySelector(".van-info").getBoundingClientRect()

			let top = icon.top-bar.top
			let left = icon.left-bar.left

			el.style.transform = `translate(${left}px,${top}px)`;

			el.style.transition = 'all 1s cubic-bezier(.17,-0.32,1,.06)'
			document.body.parentNode.style.overflow = "hidden"
			done();
		},
		barAfter(){
			this.flag = !this.flag
		},
		// 小球运动时固定页面和停止小球重复运动
		barLeave(){
			this.clickFlag = true
			document.body.parentNode.style.overflow = "auto"
		}
	}

}	
</script>