<template>
	<div class="footer">
		<el-button type="info" round @click="getmore">阅读更多</el-button>
		<div class="info">
			<ul>
				<li>
					<a href="#">关于简书</a>
				</li><i style="margin-right: 5px">·</i>
				<li>
					<a href="#">联系我们</a>
				</li><i style="margin-right: 5px">·</i>
				<li>
					<a href="#">简书出版</a></li>
				</li><i style="margin-right: 5px">·</i>
				<li>
					<a href="#">品牌与徽标</a>
				</li><i style="margin-right: 5px">·</i>
				<li>
					<a href="#">帮助中心</a>
				</li><i style="margin-right: 5px">·</i>
				<li>
					<a href="#">合作伙伴</a>
				</li>
			</ul>
			<p>
				©2012-2019 上海佰集信息科技有限公司 / 简书 / 沪ICP备11018329号-5/<a href="#"><img src="https://cdn2.jianshu.io/assets/web/smrz-557fa318122c99a66523209bf9753a27.png" alt=""></a><a href="#">沪公网安备31010402002252号/</a>
			</p>
			<p class="p2">
				<a href="#" class="img1"><img src="https://cdn2.jianshu.io/assets/web/wxb-a216456895eb66c17497dbd3da443cf8.png" alt=""></a>
				 举报电话：021-34770013/
				 <a href=""><img src="https://cdn2.jianshu.io/assets/web/zggsrz-5695587dccf490ca3e651f4228f7479e.png" alt=""></a>
			</p>
		</div>	
	</div>
</template>
<style lang="scss">
	.footer{
		border-top: 1px solid #ccc;
		padding-top: 30px;
		.el-button{
			width: 100%;
		}
		.info{
			ul{
				list-style: none;
				margin-top: 100px;
				display: flex;
				justify-content: flex-start;
				padding: 0;
				font-size: 14px;
				li{
					margin-right: 5px;
					:hover{
							color: #666;
						}
					a{
						text-decoration: none;
						color: #ccc;
					}
				}
			}
			p{
				font-size: 12px;
				line-height: 15px;
				color: #ccc;
				margin: 0;
				:hover{
						color: #666;
					}
				a{
					color: #ccc;
					text-decoration: none;	
					img{
					vertical-align: middle;
					}
				}
			}
			.p2{
				margin: 0;
				.img1{
					img{
						width: 40px;
						vertical-align: middle;
					}
				}
				a{
					img{
						width: 20px;
						vertical-align: middle;
					}
				}
			}
		}
	}
</style>
<script>
export default{
	data(){
		return{}
	},
	methods:{
		getmore(){
			this.$emit("aaa")
		}
	}
}
</script>
