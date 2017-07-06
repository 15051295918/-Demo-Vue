  <template>
  <swiper :options="swiperOption" ref="mySwiper" class= "imgswiper">
    <!-- slides -->
    <swiper-slide v-for = "item in swiperInfo">
    	<div class="img-wrapper" >
    		<img class="swiper-img":src="item.imgurl"/>
    	</div>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
 
  data () {
    return {
    	swiperInfo:[{
    		imgurl:"http://img1.qunarzz.com/piao/fusion/1703/51/01864a8a35c20402.jpg_640x200_d16dcbcd.jpg",
    		link:""
    	},
    	{
    		imgurl:"http://img1.qunarzz.com/piao/fusion/1706/2e/a437b7306c4a4702.jpg_640x200_6403e07e.jpg",
    		link:""
    	},
    	{
    		imgurl:"http://img1.qunarzz.com/piao/fusion/1704/fe/8e9fb9b5f4ec402.jpg_640x200_72215135.jpg",
    		link:""
    	},
    	{
    		imgurl:"http://img1.qunarzz.com/piao/fusion/1707/c6/511defd1f61e1302.jpg_640x200_959d73b7.jpg",
    		link:""
    	}],
    	 swiperOption: {
          loop:true,
          autoplay: 3000,
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
.img-wrapper{overflow: hidden;width: 100%;height: 0;padding-bottom:31.25%;}
.swiper-img{width: 100%;}
</style>
