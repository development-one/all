<template>
	<div class="article">
		 <div class="content">
				<h1>{{list.title}}</h1>
				<div class="info">
					<img :src="list.img" alt="">
					<div class="info2">
						<div class="name">
							<span>{{list.name}}</span>
							<span>+关注</span>
						</div>
						<div class="info3">
							喜欢：<span>{{$store.getters.getnum[this.id]}}</span>
						</div>
					</div>
				</div>
				<div class="content2">
					<p>{{list.content}}</p>
					<p>{{list.content1}}</p>
					<p>{{list.content2}}</p>
				</div>
				  <el-button type="danger" round plain icon="el-icon-star-on">喜欢</el-button>
				<comment :id="id"></comment>
		 </div>
		 
	</div>
</template>
<style lang="scss" scoped>
	.article{
		width: 80%;
		min-width: 980px;
		margin: 30px auto;	
		height: 1111px;
		.content{
			margin: 0 auto;
			width: 55%;
			padding-top: 30px;
			box-sizing: border-box;
			h1{
				margin-bottom: 30px;
			}
			.info{
				display: flex;
				justify-content: flex-start;
				img{
					border-radius: 50%;
					width: 60px;
					height: 60px;
				}
				.info2{
					margin-left: 20px;
					line-height: 30px;
					.name{
						span{
							&:nth-child(2){
								background: lightgreen;
								border-radius: 10px;
								padding: 5px;
								display: inline-block;
								height: 10px;
								line-height: 10px;
								font-size: 14px;
							}
						}
					}
				}
			}
		}
	}
</style>
<script>
import comment from "./public/comments.vue"
export default{
	data(){
		return{
			list: {},
			commentList: [],
			id: this.$route.params.id
		}
	},
	created(){
		this.getlist()
	},
	methods:{
		getlist(){
			this.axios.get("../../public/api/home/article/articleinfo/"+this.id+".json").then(result=>{
				this.list = result.data.message[0]
			})
		}
	},
	components:{
		comment
	}
}
</script>