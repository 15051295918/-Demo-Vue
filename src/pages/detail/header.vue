<template>
	<div class=detail-wrap>
		<div class="detail-header" @click="handleClick">
			<img class="detailheader-img" src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg" />
			<div class="detailheader-title">
				<span class="title">故宫(AAAAA景区)</span>
			</div>
			<div class="total-img">
				{{data.length}}
			</div>
		</div>
		<!--mask-->
		<div class="detailheader-mask" v-show="seen">
			<div class="swiper-wrap">
				<swiper :options="swiperOption" ref="mySwiper">
			        <swiper-slide v-for="item,index in data" :key="index + 'detail_img'">
			        	<div class="img-wrapper">
			        		<img class="swiper-img" :src="item.imgUrl"/>
			        	</div>
			        </swiper-slide>
	    		</swiper>
			        <div class="swiper-button-prev left-button" slot="button-prev" >＜</div>
    				<div class="swiper-button-next" slot="button-next" >＞</div>
	       	</div>
	       	<div class="mask-close" @click="seen=false">×</div>
	       	<div class="swiper-pagination" slot="pagination"></div>
		</div>
		<!--mask结束-->
	</div>
</template>

<script>
	export default {
		data(){
		 	return{
		 		seen:false,
		 		swiperOption: {
		            autoplay: false,
		            direction : 'horizontal',
		            autoHeight: true,
			        paginationClickable :true,
			        prevButton:'.swiper-button-prev',
			        nextButton:'.swiper-button-next',
			        pagination : ".swiper-pagination",
			        paginationType: 'fraction'
	        	}
		 	}
		 },
		 props:["data"],
		 methods:{
		 	handleClick: function() {
		 		return this.seen = true;
		 	}
		 }
	}
</script>
<style scoped>
	.detail-wrap{
		position:absolute;
		left:0;
		top:0;
		right:0;
		bottom:0;
	}
	.detail-header{
		position: relative;
		overflow: hidden;
		width:100%;
		height:0;
		padding-bottom: 55%;
	}
	.detailheader-img{
		width:100%;
		vertical-align: top;
	}
	.detailheader-title{
		position:absolute;
		bottom:.26rem;
		left:.2rem;
	}
	.title{
		font-size: .32rem;
		color:#fff;
	}
	.total-img{
		position: absolute;
		bottom:.26rem;
		right:.2rem;
		width:1.2rem;
		height:.4rem;
		background:rgba(0,0,0,0.5);
		border-radius: .2rem;
		font-size: .24rem;
		color:#fff;
		text-align: center;
		line-height: .4rem;
	}
	.detailheader-mask{
		position: absolute;
		top:0;
		left: 0;
		right:0;
		bottom:0;
		background:#000;
		color:#fff;
		z-index:99;
	}
	.swiper-wrap{
		width:100%;
		height:100%;
		margin-top:2.9rem;
	}
	.img-wrapper{
		overflow: hidden;
		width:100%;
		height:0;
		padding-bottom:100%;
	}
	.swiper-img{
		width: 100%;
	}
	.mask-close{
		position:absolute;
		top:1.5rem;
		right:.4rem;
		width:.5rem;
		height:.5rem;
		border-radius: 50%;
		text-align: center;
		background: rgba(51,51,51,.8);
		color:#fff;
		line-height: .5rem;
		font-size: .4rem;
	}
	.swiper-wrap .swiper-button-prev,.swiper-wrap .swiper-button-next{
		background:none;
		top:90%;
		width:.8rem;
		height:.8rem;
		border-radius: 50%;
		background:rgba(51,51,51,.8);
		color:#fff;
		text-align: center;
		z-index:100;
		font-size: .6rem;
		line-height: .8rem;
		font-weight: bold;
	}
	.detailheader-mask .swiper-pagination{
		bottom:1.25rem;
		left:0;
	}
</style>
<<<<<<< HEAD

=======
>>>>>>> 751d4b2fd8894321dacf62bf111f0b60e749c5c4
