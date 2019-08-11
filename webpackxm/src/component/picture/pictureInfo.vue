<template>
	<div class="picinfo">
		<div class="body">
			<h3>{{picinfolist.title}}</h3>
			<div class="info">
				<span>发表时间:{{picinfolist.time | dateFormat}}</span>
				<span>点击:{{picinfolist.click}}次</span>
			</div>
			<hr>
			<div class="img">
				<vue-preview :slides="slide1" @close="handleClose" class="hehe"></vue-preview>
			</div>
			<div class="content">
				{{picinfolist.content}}
			</div>
			<com :user-id="id"></com>
		</div>
	</div>
</template>
<style lang="scss">
	.picinfo{
		.body{
			h3{
				color: skyblue;
				font-size: 20px;
				text-align: center;
				margin-top: 20px;
			}
			.info{
				font-size: 14px;
				margin-top: 16px;
				display: flex;
				justify-content: space-between;
				padding: 0 5px 0 5px;
			}
			.content{
				font-size: 16px;
				text-indent: 2em;
			}
			.img{
				text-align: center;
				figure{
					margin: 10px;
					display: inline-block;
					img{
						width: 100px;
						height: 100px;
					}
				}
			}
		}
	}
</style>
<script>
import com1 from "@/component/common/comments.vue"
export default{
	data(){
		return{
			id: this.$route.params.id,
			picinfolist: {},
			slide1: []
		}
	},
	created(){
		this.getlist(),
		this.handleClose()
	},
	methods:{
		getlist(){
			this.axios.get("../../../public/api/picture/pictureinfo/"+this.id+".json").then(result=>{
				this.picinfolist = result.data.message[0]
			})
		},
		handleClose(){
			this.axios.get("../../../public/api/picture/pictureinfo/suolvetu/"+this.id+".json").then(result=>{
				result.data.message.forEach(item=>{
					item.w= 600;
					item.h= 500;
				})
				this.slide1 = result.data.message
			})
		}
	},
	components:{
		"com": com1
	}
}	
</script>