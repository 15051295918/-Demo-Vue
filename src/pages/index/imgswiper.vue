<template>
	<swiper :options="swiperOption" ref="mySwiper">
<<<<<<< HEAD
      <swiper-slide v-for="item in swiperInfo">
      	<div class="img-wrapper">
      		<img class="swiper-img" :src="item.imgUrl" />
      	</div>
      </swiper-slide>
      
      <div class="swiper-pagination"  slot="pagination"></div>
=======
        <swiper-slide v-for="item in swiperInfo">
        	<div class="img-wrapper">
        		<img class="swiper-img" :src="item.imgUrl"/>
        	</div>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
>>>>>>> origin/master
    </swiper>
</template>

<script>

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  data () {
    return {
    	swiperInfo: [{
<<<<<<< HEAD
    		imgUrl: "http://img1.qunarzz.com/piao/fusion/1706/2e/a437b7306c4a4702.jpg_640x200_6403e07e.jpg",
    		link: ""
    	},{
    		imgUrl: "http://img1.qunarzz.com/piao/fusion/1609/15/630b82d932a3c402.jpg_640x200_862e836b.jpg",
    		link: ""
    	},{
    		imgUrl: "http://img1.qunarzz.com/piao/fusion/1704/fe/8e9fb9b5f4ec402.jpg_640x200_72215135.jpg",
    		link: ""
    	},{
    		imgUrl: "http://img1.qunarzz.com/piao/fusion/1703/51/01864a8a35c20402.jpg_640x200_d16dcbcd.jpg",
    		link: ""
    	}],
        swiperOption: {
          loop: true,
          autoplay: 3000,
          direction : 'horizontal',
          autoHeight: true,
          pagination : '.swiper-pagination',
          paginationClickable :true
      }
=======
    		imgUrl: "http://img1.qunarzz.com/piao/fusion/1706/1c/b760623a69a5af02.jpg_640x200_2c6972e5.jpg",
    		link:""
    	},{
    		imgUrl: "http://img1.qunarzz.com/piao/fusion/1706/24/4e94ef994058c002.jpg_640x200_8ee40266.jpg",
    		link:""
    	},{
    		imgUrl: "http://img1.qunarzz.com/piao/fusion/1707/8a/581caa2e017e202.jpg_640x200_674b3ec7.jpg",
    		link:""
    	},{
    		imgUrl: "http://img1.qunarzz.com/piao/fusion/1705/4b/50f24bd241383e02.jpg_640x200_f8c673da.jpg",
    		link:""
    	}],
     	swiperOption: {
     		loop: true,
            autoplay: 3000,
            direction : 'horizontal',
            autoHeight: true,
            pagination : '.swiper-pagination',
            paginationClickable :true
        }
>>>>>>> origin/master
    }
  }
}
</script>

<<<<<<< HEAD
=======

>>>>>>> origin/master
<style scoped>
	.img-wrapper {
		overflow: hidden;
		width: 100%;
		height: 0;
		padding-bottom: 31.25%;
	}
<<<<<<< HEAD

=======
	.swiper-img {
		width: 100%;
	}
>>>>>>> origin/master
</style>
