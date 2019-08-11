<template>
<div class="home">

<!-- 轮播图 -->
<van-swipe :autoplay="3000">
  <van-swipe-item v-for="(image, index) in images" :key="index" >
  	<router-link to="/gem">
  		<img :src="image" alt="">
  	</router-link>
  </van-swipe-item>
</van-swipe>

<!-- 九宫格图 -->
<van-grid :column-num="3"  :gutter="10" :border="false" square>
  <van-grid-item v-for="(val, index) in grid" :key="index" :to="'/home/'+val.url">
  	 <van-image :src="val.img" />
  	 <h4>{{val.text}}</h4>
  </van-grid-item>
</van-grid>

</div>
</template>
<style scoped>
/* 轮播图样式 */
.van-swipe{
	width: 100%;
	height: 200px;
}
.van-swipe img{
		width: 100%;
		height: 100%;
	}

/* 九宫格样式 */
.van-grid{
	margin-top: 30px;
}
.van-grid-item{
  margin-bottom: 30px;
}
.van-grid-item h4{
  margin: 15px 0 0 0;
}
.van-image{
    width: 100%;
    height: 100%; 
}
.van-image>>>img{
  border-radius: 50%;
}

</style>
<script>
export default {
  data() {
    return {
      images: [
        'http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1602/29/c4/18738350_1456751936004.jpg',
        'http://img1.imgtn.bdimg.com/it/u=1648915251,3589689416&fm=26&gp=0.jpg',
      ],
      grid: [
		      {img:'http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1602/29/c4/18738350_1456751936004.jpg',text:"新闻资讯",url:"news"},
           {img:'http://i2.download.fd.pchome.net/t_600x1024/g1/M00/12/1C/oYYBAFbrqWaIdSLtAAFdH32DD-YAAC4FAAbBaAAAV03509.jpg',text:"图片分享",url:"picture"},
           {img:'http://img3.imgtn.bdimg.com/it/u=1219854310,1577932361&fm=26&gp=0.jpg',text:"商品购买",url:"goods"},
           {img:'http://img3.imgtn.bdimg.com/it/u=4043828583,2541263404&fm=26&gp=0.jpg',text:"视频专区",url:"video"},
           {img:'http://img1.imgtn.bdimg.com/it/u=1054339324,3234919023&fm=26&gp=0.jpg',text:"留言反馈",url:"message"},
           {img:'http://img2.imgtn.bdimg.com/it/u=870250499,2400030897&fm=26&gp=0.jpg',text:"联系我们",url:"contact"}
      ]
    }
  },
  methods:{
 
  }
}
</script>