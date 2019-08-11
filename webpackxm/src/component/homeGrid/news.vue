<template>
<div class="news">
	<van-list
  		v-model="loading"
  		:finished="finished"
  		finished-text="没有更多了"
	>
  		<div v-for="(val,index) in list" :key="val.id">
  			<router-link class="news-item" :to="'/home/news/newsinfo/'+val.id" tag="div">
  				<img :src="val.url" alt="">
  				<div class="content">
  					<h3>{{val.title}}</h3>
  					<div class="content-info">
  						<span>发表时间 : {{val.time}}</span>
  						<span>点击 : {{val.number}}</span>
  					</div>
  				</div>
  			</router-link>
  		</div>
	</van-list>
</div>
</template>
<style lang="scss" scoped>
.news-item{
	padding: 10px;
	box-sizing: border-box;
	border-bottom: 0.5px solid #ccc;
	display: flex;
	&:active{
		background: #cccccc
	}
	.content{
		display:flex;
		flex-direction: column;
		justify-content: space-around; 
		margin-left:20px;
		flex-grow:1;
		h3{
			margin: 0;
		}
		.content-info{
			display:flex;
			justify-content: space-between;
		}
	}

}
.news-item img{
	width: 60px;
	height: 60px;
}
</style>
<script>
export default {
  data() {
    return {
      loading: false,
      finished: false,
	  list: []
    };
  },
 created(){
		this.getlist();
	},
 methods: {
		getlist(){
			this.axios.get("../../../public/api/news.json").then(result=>{
				this.list = result.data.message
			})
			this.finished = true;
		}
	}
}
</script>