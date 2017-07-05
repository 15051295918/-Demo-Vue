<template>
	<div id="mp-img-swiper">
		<swiper :options="swiperOption" ref="mySwiper" >
		    <swiper-slide v-for="(imgData, index) in imgData" :key="index">
		    	<div class="img-wrapper">
			    	<img :src="imgData.srcs" />
		    	</div>
		    </swiper-slide>
		    <div class="swiper-pagination"  slot="pagination"></div>
	  	</swiper>
	</div>  	
</template>

<script>
	
	export default {
	    name: 'carrousel',
	    data() {
	      return {
	      	imgData:[{
	      		srcs: "http://img1.qunarzz.com/piao/fusion/1706/1c/b760623a69a5af02.jpg_640x200_2c6972e5.jpg",
	      		links:"1"
	      	},{
	      		srcs: "http://img1.qunarzz.com/piao/fusion/1609/15/630b82d932a3c402.jpg_640x200_862e836b.jpg",
	      		links:"2"
	      	},{
	      		srcs: "http://img1.qunarzz.com/piao/fusion/1707/c6/511defd1f61e1302.jpg_640x200_959d73b7.jpg",
	      		links:"3"
	      	},{
	      		srcs: "http://img1.qunarzz.com/piao/fusion/1705/4b/50f24bd241383e02.jpg_640x200_f8c673da.jpg",
	      		links:"4"
	      	}],
	        swiperOption: {
	          notNextTick: true,
	          autoplay: 30000,
	          setWrapperSize :true,
	          loop:true,
	          autoHeight: true,
	          pagination : '.swiper-pagination',
	          paginationClickable :true,
	        }
	      }
	    }
	}
</script>

<style scoped>
	.img-wrapper{
		width: 100%;
		height: 0;
		overflow: hidden;
		padding-bottom: 31.25%;
	}
	.swiper-slide img{
		width: 100%;
	}
	 .swiper-container-horizontal > .swiper-pagination-bullets{
	 	bottom: 0;
	 }
	
	 .swiper-pagination-bullets .swiper-pagination-bullet-active{
	 	background: red;
	 }
</style>


