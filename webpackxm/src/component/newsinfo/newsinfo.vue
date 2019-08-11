<template>
	<div class="newsinfo">
	<!-- 头部组件 -->
		<div class="header">
			<div class="title">{{list.titile}}</div>
			<div class="title-info">
				<span>发表时间 : {{list.time | dateFormat}}</span>
				<span>点击次数 : {{list.click}}</span>
			</div>
			<hr>
		</div>
		<div class="content">
			{{list.content}}
		</div>
		<hr>
		<!-- 用户评论 -->
		<comment :user-id="id"></comment>
	</div>
</template>
<style lang="scss" scoped>
.newsinfo{
	overflow: hidden;
}
//头部样式
.header{
	padding: 10px;
	.title{
		font-size: 23px;
		font-weight: bold;
		text-align: center
	}
	.title-info{
		display: flex;
		margin: 15px 0 4px 0;
		justify-content: space-between;
	}
}

//内容样式
.content{
	padding: 0 10px 10px 10px;
	font-size: 18px;
	line-height: 30px;
	text-indent: 2em;
	letter-spacing: 0.1em;
}

//评论样式
.comment{
	textarea{
		width: 90%;
		margin: 0 auto;
		display: block;
		padding: 10px;
		box-sizing: border-box;
		resize: none;
		border: 1px solid lightblue;
	}
	button{
		margin: 15px;
		float: right;
	}
}
</style>
<script>
import comment from "@/component/common/comments.vue"
export default{
	data(){
		return{
			id:this.$route.params.id,
			list: {}	
		}
	},
	created(){
		this.getlist()
	},
	methods:{
		getlist(){
			this.axios.get("../../../public/api/newsinfo/"+this.id+".json").then(result=>{
				this.list = result.data.message[0]
			})
		}
	},
	components: {
		comment
	}
}
</script>
