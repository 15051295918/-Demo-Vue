  <template>
  <swiper :options="swiperOption" ref="mySwiper" class= "imgswiper">
    <!-- slides -->
    <swiper-slide>
      <div class="icon-container">
    	<div class="icon-wrapper" v-for = "item in swiperInfo">
    		<img class="icon-img":src="item.imgurl"/>
        <p class="icon-title">{{item.title}}</p>
    	</div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="icon-container">
      <div class="icon-wrapper" v-for = "item in swiperInfo">
        <img class="icon-img":src="item.imgurl"/>
        <p class="icon-title">{{item.title}}</p>
      </div>
      </div>
    </swiper-slide>
    <div class="swiper-pagination icon-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
 
  data () {
    return {
    	swiperInfo:[{
    		imgurl:"http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
        title:"景点门票",
    		link:""
    	},
    	{
    		imgurl:"http://img1.qunarzz.com/piao/fusion/1611/1a/261d4530330c202.png",
        title:"水上乐园",
        link:""
    	},
    	{
    		imgurl:"http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png",
        title:"一日游",
        link:""
    	},
    	{
    		imgurl:"http://img1.qunarzz.com/piao/fusion/1611/1c/a8a8d9023a814c02.png",
        title:"文化古迹",
        link:""
    	},
      {
        imgurl:"http://img1.qunarzz.com/piao/fusion/1611/ea/8cb1dce519375d02.png",
        title:"古水北镇",
        link:""
      },
      {
        imgurl:"http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png",
        title:"动植物园",
        link:""
      },
      {
        imgurl:"http://img1.qunarzz.com/piao/fusion/1611/45/676b67d7078abc02.png",
        title:"故宫",
        link:""
      },
      {
        imgurl:"http://img1.qunarzz.com/piao/fusion/1611/59/569d3c096e542502.png",
        title:"必游榜单",
        link:""
      }],
    	 swiperOption: {
          autoplay: false,
          direction : 'horizontal',
          autoHeight: true,
          pagination : '.swiper-pagination',
          paginationClickable :true
         
          }
    }
  }
      
      
  }

</script>


<style scoped>
.icon-wrapper{width: 25%;float: left;overflow: hidden;padding-top: .3rem;}
.icon-img{width: .66rem;display: block;margin:0 auto;}
.icon-title{text-align: center;color: #212121;font-size: .28rem;margin-top: .2rem;}
.icon-container{padding-bottom: .4rem;overflow: hidden;}
.icon-pagination{bottom: .1rem;}
</style>
