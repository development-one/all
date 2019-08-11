<template>
<div class="comments">
	<!-- 评论框 -->
	<div class="comment clearfix">
		<textarea name="" id="" cols="0" rows="4" maxlength="50" placeholder="写下你想的小想法吧" v-model="msg">
		</textarea>
		<van-button round hairline plain size="small" type="primary" @click="publish">发表评论</van-button>
	</div>

	<!-- 骨架屏 -->
	<van-skeleton
  		title
  		avatar
  		:row="3"
  		:loading="loading"
	>
	</van-skeleton>
	<!-- 用户评论 -->
	<div class="user-comment" v-for="val in list" :key="val.id">
		<img :src="val.img" alt=""/>
		<div class="user">
			<a class="user-name">{{val.name}}</a>
			<div class="user-content">
				{{val.content}}
			</div>
			<div class="user-info">
				<span>{{val.time | dateFormat}}</span>
				<span><van-icon name="like-o" size="15px"/> 2</span>
				<span>回复</span>
			</div>
		</div>	
	</div>
	<van-button type="primary" plain round size="large" class="more" @click="getmore"> 查看更多</van-button>
</div>
</template>
<style lang="scss" scoped>
.clearfix:after{
	content: ".";
	height: 0;
	visibility: hidden;
	display: block;
	clear: both;
}
.clearfix{
	*zoom: 1;
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
// 用户样式
.user-comment{
	margin-bottom: 20px;
	display: flex;
	padding: 0 10px 0 10px;
	img{
		width: 35px;
		height: 35px;
		border-radius: 50%;
	}
	.user{
		margin-left: 15px;
		flex: 1;
		a{
			color: #888;
		}
		.user-content{
			margin-top: 10px;
		}
		.user-info{
			margin-top: 5px;
			padding-bottom: 10px;
			box-sizing: border-box;
			border-bottom: 1px solid #ccc;
			span{
				margin-right: 30px
			}
		}	
	}
}
.more{
	margin: 10px 0 20px 0;
}
</style>
<script>
export default{
	data(){
		return{
			page: 1,
			list: [],
			loading: true,
			msg: ""
		}
	},
	methods:{
		getlist(){
			this.axios.get("../../../public/api/newsinfo/"+this.userId+"/"+this.page+".json").then(result=>{
				this.list = this.list.concat(result.data.message)
			})
		},
		publish(){
			if(this.msg.trim().length === 0 ){
				return this.$toast({duration:1000,message:"评论不能为空"})
			}
			var userList = {
				img: "http://img1.imgtn.bdimg.com/it/u=1054339324,3234919023&fm=26&gp=0.jpg",
				name: "好香呀",
				content: this.msg.trim(),
				time: new Date()
			}
			this.list.unshift(userList);
			this.msg = ""
		},
		getmore(){
			this.page += 1;
			this.getlist();
		}
	},
	created(){
		this.getlist()
	},
	mounted() {
    	this.loading = false;
  	},
	props: ["userId"]
}
</script>