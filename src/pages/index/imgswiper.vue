<template>
	<swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="item in swiperInfo">
        	<div class="img-wrapper">
        		<img class="swiper-img" :src="item.imgUrl"/>
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
    	swiperInfo: [{
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
    }
  }
}
</script>


<style scoped>
	.img-wrapper {
		overflow: hidden;
		width: 100%;
		height: 0;
		padding-bottom: 31.25%;
	}
	.swiper-img {
		width: 100%;
	}
</style>
