<template>
	<div class="contain">
			<!-- 区域划分 -->
			<el-row :gutter="40">
				<!-- 区域一 -->
  				<el-col :span="16">
  					<div class="grid-content bg-purple content1">
  						<!-- 轮播图 -->
  						<div class="block">
  							<el-carousel trigger="click" height="280px">
  								<a href="#">
  									<el-carousel-item>
  									<img src="https://upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="">
  								</el-carousel-item>
  								</a>
  								<a href="#">
  									<el-carousel-item>
  									<img src="https://upload.jianshu.io/admin_banners/web_images/4634/164728948a52095cd70453d065ccd9e0a9f1ee8c.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="">
  								</el-carousel-item>
  								</a>
  							</el-carousel>
  						</div>
						<ul>
							<li target="_blank" class="item" v-for="item in list" :key="item.id">
								<router-link :to="'home/article/'+item.id" target="_blank">
									<h3>{{item.title}}</h3>
								</router-link>
								<div class="content">
									<p>{{item.content}}</p>
									<router-link to="/home/article" target="_blank">
										<img :src="item.img" alt="">
									</router-link>		
								</div>
								<div class="bage">
									<span><i class="el-icon-share"></i>{{$store.getters.getnum[item.id]}}</span>
									<span>{{item.name}}</span>
									<span><i class="el-icon-share"></i>{{item.num2}}</span>
									<span><i class="el-icon-share"></i>{{item.num3}}</span>
								</div>
							</li>
						</ul>
						<footer1 @aaa="getmore"></footer1>
  					</div>
  				</el-col>
  				<!-- 区域二 -->
 			 	<el-col :span="8">
 			 		<div class="grid-content bg-purple content2">
 			 			<!-- 图片按钮 -->
 			 			<input type="image" src="https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png" alt="Submit">
 			 			<input type="image" src="https://cdn2.jianshu.io/assets/web/banner-s-3-ddcc844ebdd8edca2d93b7ea5a8de79e.png" alt="Submit">
 			 			<input type="image" src="https://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png" alt="Submit">
 			 			<input type="image" src="https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png" alt="Submit">
 			 			<input type="image" src="https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png" alt="Submit">
 			 			<input type="image" src="https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png" alt="Submit">
 			 			<!-- 二维码 -->
 			 			<div class="qrcode clearfix">
 			 				<img src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt="">
 			 				<div class="content">
 			 					<p>下载简书手机App></p>
 			 					<div>随时发现和创作内容</div>
 			 				</div>
 			 			</div>
 			 			<!-- 广告 -->
 			 			<input type="image"	src="            https://oimagec8.ydstatic.com/image?id=6164396126025825817&product=adpublish&w=1280&h=720&sc=0&rm=2&gsb=0&gsbd=60" class="advertising">
 			 			<div class="box-card">
						  	<div class="head">
						    	<span>推荐作者</span>
						    	<el-button style="float: right; padding: 3px 0" type="text">换一换</el-button>
						  	</div>
						  	<div class="item">
								<img src="https://upload.jianshu.io/users/upload_avatars/2631077/dc99c361412c?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt="">
								<div class="title">
									<h5>小木木</h5>
									<p>写了<span>604.3K</span>字·<span>7.2K</span>喜欢</p>
								</div>
								<a href="#">+关注</a>
						  	</div>
						  	<div class="item">
								<img src="https://upload.jianshu.io/users/upload_avatars/2631077/dc99c361412c?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt="">
								<div class="title">
									<h5>小木木</h5>
									<p>写了<span>604.3K</span>字·<span>7.2K</span>喜欢</p>
								</div>
								<a href="#">+关注</a>
						  	</div>
						  	<div class="item">
								<img src="https://upload.jianshu.io/users/upload_avatars/2631077/dc99c361412c?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt="">
								<div class="title">
									<h5>小木木</h5>
									<p>写了<span>604.3K</span>字·<span>7.2K</span>喜欢</p>
								</div>
								<a href="#">+关注</a>
						  	</div>
						</div>
						<el-button type="info" class="lookall">查看全部&nbsp;></el-button>
						<input type="image"	src="   https://oimagec4.ydstatic.com/image?id=-9117151902575557537&product=adpublish&w=1280&h=720&sc=0&rm=2&gsb=0&gsbd=60" class="advertising">
 			 		</div>
 			 	</el-col>
			</el-row>
	</div>
</template>
<style lang="scss" scoped>
.contain{
		width: 70%;
		min-width: 980px;
		margin: 30px auto;
		.el-row {
    		margin-bottom: 20px;
    		&:last-child {
      		margin-bottom: 0;
    		}
  		}
  		.el-col {
  		  	border-radius: 4px;	
  		  	.el-carousel__item{
  		  		border-radius: 4px;
  				img{
  					width: 100%;
  					height: 100%;
  				}
  			}
  		}
  		.bg-purple {
  		  	background: white;
  		}
  		.content1 {
  		 	border-radius: 4px;
  		  	min-height: 36px;
  		  	ul{
  		  		margin-top: 30px;
  		  		list-style: none;
  		  		padding: 0;
  		  		.item{
					border-top: 1px solid #ccc;
					padding: 20px 0 20px 0;
					a{
						text-decoration: none;
						color: black;
						h3{
						margin: 0;
						font-size: 18px;
						}
					}
					.content{
						max-height: 80px;
						display: flex;
						justify-content: space-between;
						p{
							margin: 10px 0 10px 0;
							font-size: 14px;
							color: #ccc;
							line-height: 20px;
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 3;
							overflow: hidden;
						}
						img{
							width: 140px;
							height: 100px;
							margin-left: 30px;
							border-radius: 4px;
						}
					}
					.bage{
						span{
							margin-right: 15px;
							font-size: 13px;
							color: #ccc;
							&:nth-child(1){
								color: red;
							}
							i{
								margin-right: 2px;
							}
						}
					}
  		  		}
  		  	}
  		}
  		.content2{
  			input{
  				width: 100%;
				margin-bottom: 3px;
				outline: none;
  			}
  			.qrcode{
  				border: 1px solid #ccc;
  				border-radius: 3px;
  				margin: 5px 0 10px 0;
  				text-align: center;
  				padding: 10px 5px 10px 5px;
  				box-sizing: border-box;
  				line-height: 0;
  				display: flex;
  				justify-content: space-around;
  				img{
  					width: 80px;
  					height: 80px;
  				}
  				.content{
  					margin: 0;
  					line-height: 0;
  					text-align: left;
  					p{
						font-size: 16px;
						margin: 25px 0 30px 0;
  					}
  					div{
  						color: #ccc;
  						font-size: 14px;
  					}
  				}
  			}
  			.advertising{
  				border-radius: 3px;
  			}
  			.box-card{
  				margin: 10px 0 10px 0;
  				.item{
  					margin-top: 5px;
  					width: 100%;
  					height: 70px;
  					display: flex;
  					justify-content: space-between;
  					line-height: 0;
  					img{
  						width: 50px;
  						height: 50px;
  						border-radius: 50%;
  						margin-top: 10px;
  					}
  					.title{
  						margin-left: -50px;
  						h5{
  							font-size:14px;
  						}
  						p{
  							font-size: 12px;
  							color: #ccc;
  						}
  					}
  					a{
  						text-decoration: none;
  						margin-top: 20px;
  						color: green;
  					}
  				}
  			}
  			.lookall{
  				width: 100%;
  				margin: 5px 0 20px 0;
  			}
  		}
}
</style>
<script>
import footer1 from "@/component/homeFooter.vue"
export default{
	data(){
		return{
      list: [],
      page: 1
		}
	},
  created(){
    this.getlist()
  },
	methods:{
    getlist(){
    this.axios.get("../../public/api/home/article/"+this.page+".json").then(result => {
        this.list = this.list.concat(result.data.message)
        
        this.$store.commit("getlist",this.list)
      }).catch(error => {
        console.log(error)
      })
    },
    getmore(){
      this.page++,
      this.getlist()
    }
	},
	components: {footer1}
}
</script>