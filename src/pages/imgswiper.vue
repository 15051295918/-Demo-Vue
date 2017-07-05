<template>
 <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="item in swiperInfo"><div>
        	<img :src="item.imgUrl">
        </div></swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'imgswiper',
  data () {
    return {
    	swiperInfo:[{
    		imgUrl:'http://img1.qunarzz.com/piao/fusion/1704/fe/8e9fb9b5f4ec402.jpg_640x200_72215135.jpg',
    		link:''
    	},
    	{
    		imgUrl:'http://img1.qunarzz.com/piao/fusion/1609/15/630b82d932a3c402.jpg_640x200_862e836b.jpg',
    		link:''
    	},
    	{
    		imgUrl:'http://img1.qunarzz.com/piao/fusion/1705/4b/50f24bd241383e02.jpg_640x200_f8c673da.jpg',
    		link:''
    	},
    	{
    		imgUrl:'https://img1.qunarzz.com/piao/fusion/1706/1c/b760623a69a5af02.jpg_640x200_2c6972e5.jpg',
    		link:''
    	}
    	],
    	swiperOption: {
             autoplay: 2000,
             direction : 'horizontal',
             autoHeight: true,
             pagination : '.swiper-pagination',
             paginationClickable :true,
             loop:true
          }
    }
  }
}
</script>

</style>
