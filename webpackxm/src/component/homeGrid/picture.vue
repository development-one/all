<template>
<div class="picture">
	<van-tabs title-active-color="lightgreen" color="lightgreen" @change="getContent" class="tabs-bar" sticky :offset-top="46">
  		<van-tab v-for="val in tablist" :title="val.titile" :name="val.id" :key="val.id">
  			<div class="img-content">
  				<router-link class="img-list" v-for="val in contentList" :key="val.id" :to="'/home/picture/pictureInfo/'+val.id">
  					<img :src="val.url" alt="">
  					<div class="content-info">
  						<div class="info-title">{{val.title}}</div>
  						<div class="info-content">{{val.zhayao}}</div>
  					</div>
  				</router-link>	
  			</div>
  		</van-tab>
	</van-tabs>
</div>
</template>
<style lang="scss" scoped>
.picture{
	overflow: hidden;
	.img-content{
		padding: 10px;
		.img-list{
			position: relative;
			box-sizing: border-box;
			margin-bottom: 10px;
			img{
				width: 100%;
				max-height: 400px;
			}
			.content-info{
				padding: 10px;
				box-sizing: border-box;
				width: 100%;
				position: absolute;
				left: 0;
				bottom: 0;
				background: rgba(0,0,0,0.2);
				color: white;	
				
				.info-title{
					font-size: 20px;
				}
				.info-content{
					line-height: 26px;
					font-size: 16px;
					letter-spacing: 0.1em;
					max-height: 72px;	
				}
			}
		}
		
	}
}
</style>
<script>
export default {
  data() {
    return {
    	tablist: [],
    	contentList: []
    }
  },
  created(){
	this.getTablist();
	this.getContent(0)
  },
  methods:{
 	getTablist(){
 		this.axios.get("../../../public/api/newsinfo/picture.json").then(result=>{
 			this.tablist = result.data.message
 		})
 	},
 	getContent(name){
 		this.axios.get("../../../public/api/picture/"+name+".json").then(result=>{
 			this.contentList = result.data.message
 		})
 	}
  }
 
}
</script>