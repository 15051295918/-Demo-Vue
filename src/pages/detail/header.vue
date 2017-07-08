<template>
<<<<<<< HEAD
	<header class="header">
  		<a class="header-left">
  			<div class="return"></div>
  		</a>
  		<div class="header-title">
  			<router-link to="/list">
  				<span class="single-line">输入城市/景点/游玩主题</span>
  			</router-link>
  		</div>
  		<div class="header-right">
  			<span class="header-city">北京<i class="header-city-option"></i>
  			</span>  			
  		</div>
  	</header>
</template>

<script>
export default {
  data () {
    return {
     
    }
  }
}
</script>


<style scoped>
	.header {
	    position: relative;
	    display: -webkit-box;
	    display: -moz-box;
	    display: -ms-flexbox;
	    display: box;
	    width: 100%;
	    height: .88rem;
	    background: #00bcd4;
	    text-align: center;
	    color: #fff;
	}
	.header-left {
	    display: inline-block;
	    width: .4rem;
	    line-height: .88rem;
	    padding: 0 .2rem;
	    color: #fff;
	    font-size: .36rem;
	    text-align: left;
	}
	.header-title {
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		box-flex: 1;
		-webkit-box-flex: 1;
		-moz-box-flex: 1;
		-ms-flex: 1;
		position: relative;
		height: .6rem;
		margin: .14rem 0;
		background: #fff;
		line-height: .6rem;
		border-radius: .06rem;
	}
	.single-line {
	    display: inline-block;
	    overflow: hidden;
	    position: absolute;
	    left: .3rem;
	    top: 0;
	    width: 3.6rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    color: #ccc;
	}
	.header-city {
		line-height: .88rem;
    	padding: 0 .25rem;
    	color: #fff;
    	text-align: center;
    }
    .header-city-option{
		height: 0rem;
		width: 0rem;
		border:0.13rem solid transparent;
    	border-top: 0.13rem solid #fff;
    	position: relative;
    	top:0.22rem;  	
	}
    .return{
		transform: rotateZ(45deg);
		width: .24rem;
		height: .24rem;
		border-left: .04rem solid #fff;
		border-bottom: .04rem solid #fff;
		margin: .3rem .1rem;
	}
</style>
=======
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
>>>>>>> e3747f60db793bc72d06920b3a288bd9babf6afe
