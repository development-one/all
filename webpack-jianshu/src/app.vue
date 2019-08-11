<template>
	<div>
		<div class="header">
				<router-link to="/home" class="img">
					<img src="https://cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png" alt="">
				</router-link>
				<div class="menu">
					<div class="left">
						<router-link to="/home">首页</router-link>
						<a href="#" class="onload">下载App</a>
						<input type="text">
						<div class="search">
							<i class="el-icon-search"></i>
						</div>
						<div class="hot clearfix" >
							<div class="triangle"></div>
							<div class="head">
								<div class="left">热门搜索</div>		
								<div class="right">换一批</div>
							</div>
							<ul>
								<li>
								<a href="#">金融</a>
								</li>
								<li>
								<a href="#">金融</a>
								</li>
								<li>
								<a href="#">金融</a>
								</li>
								<li>
								<a href="#">金融</a>
								</li>
								<li>
								<a href="#">金融assa</a>
								</li>
								<li>
								<a href="#">asdsadasd</a>
								</li>
								<li>
								<a href="#">金融</a>
								</li>
							</ul>
						</div>
					</div>
					<div class="right">
						<a href="#">Aa</a>
						<a href="#">登录</a>
						<a href="#" class="register">注册</a>
					</div>
				</div>
				<a href="#" class="write">写文章</a>
		</div>
		<!-- 内容区域 -->
		<router-view></router-view>
		
	</div>
</template>
<style lang="scss" scoped>
	.clearfix:before,
  	.clearfix:after {
    	display: table;
    	content: "";
  	}
  	.clearfix:after {
    	clear: both
  	}

	@mixin clearfix {
  		display: inline-block;
  		&:after {
    		content: ".";
    		display: block;
    		height: 0;
    		clear: both;
    		visibility: hidden;
  		}
  		* html & { height: 1px }
	}
	.header{
		display: flex;
		justify-content: space-between;
		height: 58px;
		border: 1px solid #ccc;
		min-width: 980px;
		.img{
			img{
				width: 100px;
				height: 58px;
			}
		}
		.menu{
			display: flex;
			width: 735px;
			justify-content: space-between;
			font-size: 17px;
			flex: auto;
			height: 58px;
			line-height: 58px;
			margin-left: 80px;
			a{
				padding: 20px;
				box-sizing: border-box;
				text-decoration: none;
				color: black;
			}
			.left{
				position: relative;
				.aabb{
					color: red;
				}
				.onload{
					&:hover{
						background: #ccc;
					}
				}
				input{
						display: inline-block;
						width: 150px;
						height: 35px;
						border: none;
						border-radius: 16px;
						background: rgba(0,0,0,0.1);
						padding: 0 10px 0 10px;
						box-sizing: border-box;
						transition: all 0.5s ease;
						&:focus{
							outline: none;
							width: 200px;
						}
						&:focus+.search{
							background: #ccc;						
						}
						&:focus~.hot{
							display: block
						}
					}
				.search{
					width: 30px;
					height: 30px;
					border-radius: 50%;
					text-align: center;
					line-height: 30px;
					cursor: pointer;
					position: absolute;
					right: 2px;
					top: 16px;
				}
				.hot{
					width: 200px;
					padding: 0 20px 0 20px;
					border: 1px solid #ccc;
					position: absolute;
					left: 192px;
    				top: 70px;
    				box-shadow: 0px -1px 3px #ccc;
    				display: none;
    				z-index: 111;
    				background: white;
					.triangle{
						width:0;
						height:0;
						border-left:12px solid transparent;
						border-right:12px solid transparent;
						border-bottom:20px solid white;
						position: absolute;
						left: 22px;
    					top: -20px;

					}
					.head{
						display: flex;
						justify-content: space-between;
						color: #ccc;
						font-size: 14px;
						height: 30px;
						line-height: 30px;
						margin: 10px 0 10px 0;
					}
					ul{
						margin: 0;
						padding: 0;
						li{
							list-style: none;
							float: left;
							margin-right: 10px;
							height: 26px;
							line-height: 13px;
							border: 1px solid #ccc;
							margin-bottom: 10px;
							padding: 5px;
							box-sizing: border-box;
							font-size: 14px;
							color: #ccc;
							border-radius: 3px;
							a{
								padding: 0;
							}
						}
					}
				}
			}
			.right{
				a{
					color: #999;
				}
				.register{
					float: right;
   					width: 80px;
   					height: 38px;
  					line-height: 0px;
   					margin: 9px 5px 0 15px;
   					border: 1px solid rgba(236,97,73,.7);
   					border-radius: 20px;
   					font-size: 15px;
   					color: #ea6f5a;
   					background-color: transparent;
   					text-align: center;
				}
			}
		}
		.write{
			float: right;
   			width: 100px;
   			height: 40px;
   			line-height: 40px;
   			margin: 8px 15px 0;
   			border-radius: 20px;
   			font-size: 15px;
   			color: #fff;
   			background-color: #ea6f5a;
   			text-align: center;
   			text-decoration: none;
		}
	}
</style>
<script>
export default{
	data(){
		return{

		}
	},
	methods:{

	}
}	
</script>