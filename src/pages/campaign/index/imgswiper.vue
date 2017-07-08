<template>
  	<swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(item, index) in data" :key="index + '_imgswiper_item'">
        	<div class="cm-img-wrapper">
        		<img class="cm-swiper-img" :src="item.imageUrl"/>
        	</div>
        </swiper-slide>
        <div class="swiper-pagination cm-swiper-pagination"  slot="pagination"></div>
    </swiper>
</template>

<script>

export default {
	data () {
		return {
			swiperOption: {
	     		loop: true,
	            autoplay: 3000,
	            direction : 'horizontal',
	            autoHeight: true,
	            pagination : '.swiper-pagination',
	            paginationClickable :true
	        }
		}	
	},
	
	props:["data"]
}
</script>


<style scoped>
	.cm-img-wrapper {
		overflow: hidden;
		width: 100%;
		height: 0;
		padding-bottom: 36%;
	}
	.cm-swiper-img {
		width: 100%;
		height: 2.7rem;
	}
	.cm-swiper-pagination {
		bottom: .22rem;
	}
</style>
