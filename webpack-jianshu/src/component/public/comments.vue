<template>
	<div class="comments">
		<div class="publish">
			<img src="https://cdn2.jianshu.io/assets/default_avatar/avatar_default-78d4d1f68984cd6d4379508dd94b4210.png" alt="">
			<textarea name="" id="" cols="0" rows="5" maxlength="150" placeholder="说点啥子嘛..." v-model="msg"></textarea>
		</div>
		<el-button type="success" plain round @click="publish">发表评论</el-button>
		<div class="content">
			<div class="info">
				<h4>7条评论</h4>
				<span>只看作者</span>
			</div>
			<div class="content1" v-for="(item,i) in list" :key="item.i">
				<div class="comment">
				<img :src="item.img" alt="">
				<div class="message">
					<p>{{item.name}}</p>
					<div class="info-message">
						<span>{{i+1}}楼</span>
						<i>·</i>
						<span>{{item.time | dateFormat}}</span>
					</div>	
				</div>
				</div>
				<div class="content2">
					<p>{{item.title}}</p>
					<span><i class="el-icon-share"></i>赞</span>
					<span><i class="el-icon-edit"></i>回复</span>
				</div>
			</div>				
		</div>
		<el-pagination
  			background
  			layout="prev, pager, next"
  			:total="30"
  			@current-change="currentChange">
		</el-pagination>
	</div>
</template>
<style lang="scss" scoped>
	.comments{
		.publish{
			margin-top: 20px;
			width: 100%;
			display: flex;
			justify-content: space-between;
			img{
				width: 8%;
				height: 8%;
				border-radius: 50%;
			}
			textarea{
				width: 85%;
				font-size: 14px;
				padding: 5px 10px 5px 10px;
				resize: none;
			}
		}
		.el-button{
			margin-top: 10px;
			float: right;
		}	
		.content{
			margin-top: 60px;
			.info{
				display: flex;
				h4{
					margin: 0;
					font-weight: bold;
					font-size: 18px;
				}
				span{
					border: 1px solid #ccc;
					border-radius: 10px;
					padding: 3px 10px 3px 10px;
					box-sizing: border-box;
					color: #ccc;
					margin-left: 20px;
					font-size: 14px;
				}
			}
			.content1{
				border-top: 1px solid #ccc;
				padding-top: 20px;
				box-sizing: border-box;
				margin-top: 20px;
				.comment{
				display: flex;
				img{
					border-radius: 50%;
					width: 50px;
					height: 50px;
				}
				.message{
					margin-left: 10px;
					line-height: 25px;
					p{
						font-weight: bold;
						margin: 0;
					}
					.info-message{
						color: #ccc;
						i{
							margin: 0 5px 0 5px;
						}
					}
				}
			}
			.content2{
				span{
					margin-right: 20px;
					color: #ccc;
					cursor: pointer;
					&:hover{
						color: black;
					}
					i{
						margin-right: 10px;
					}
				}
			}
			}
		}
		.el-pagination{
			margin: 40px 0 40px 0;
			padding: 0;
		}
	}
</style>
<script>
import qs from "qs"
export default{
	data(){
		return{
			list: [],
			msg: "",
			id1: this.id
		}
	},
	created(){
		this.getlist()
	},
	methods:{
		getlist(){
			this.axios.get("../../../public/api/comment/"+this.id1+".json").then(result=>{
				this.list = result.data.message
			})
		},
		publish(){
			    if(this.msg.trim().length === 0 ){
					return 0;
				}
				var cmt = {
					name: "匿名用户",
					time: Date.now(),
					title: this.msg.trim(),
					img: "http://p4.qhimg.com/t01f50f7e75e718e3c2.jpg"
				}
				this.list.unshift(cmt)
				this.msg = ''	
 		},
 		currentChange(str){
			this.id1 = str
			this.getlist()
 		}
	},
	props: ['id']
}	
</script>