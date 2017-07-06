<template>
	<swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide>
        	<div class="icon-container">
        		<div class="icon-wrapper" v-for="item in swiperInfo">
        			<img :src="item.imgUrl" class="icon-img">
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
    	swiperInfo: [{
    		imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
    		title: "故宫",
    		link:""
    	},{
    		imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/59/569d3c096e542502.png",
    		title: "天坛",
    		link:""

    	},{
    		imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png",
    		title: "长城",
    		link:""
    	},{
    		imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/1c/a8a8d9023a814c02.png",
    		title: "西单",
    		link:""
    	},{
    		imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/ea/8cb1dce519375d02.png",
    		title: "西直门",
    		link:""
    	},{
    		imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/45/676b67d7078abc02.png",
    		title: "北海公园",
    		link:""
    	},{
    		imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png",
    		title: "王府井",
    		link:""
    	},{
    		imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/ea/8cb1dce519375d02.png",
    		title: "天安门",
    		link:""

    	},{
    		imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/59/569d3c096e542502.png",
    		title: "国家博物馆",
    		link:""
    	},{
    		imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/1a/261d4530330c202.png",
    		title: "鸟巢",
    		link:""
    	},{
    		imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/4c/cb6f790552dc3002.png",
    		title: "奥体公园",
    		link:""
    	},{
    		imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/aa/a4cc16ba5e66a702.png",
    		title: "欢乐谷",
    		link:""
    	},{
    		imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/d0/e09575e66f4aa402.png",
    		title: "动物园",
    		link:""
    	},{
    		imgUrl: "https://img1.qunarzz.com/piao/fusion/1611/d1/1e49d9e4d7fca102.png",
    		title: "西单",
    		link:""
    	},{
    		imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/c3/133460666f6f9202.png",
    		title: "望京",
    		link:""
    	},{
    		imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/1a/261d4530330c202.png",
    		title: "香山",
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
	.icon-container {
		overflow: hidden;
		padding-bottom: .4rem;
	}
	.icon-wrapper {
		padding-top: .3rem;
		overflow: hidden;
		width: 25%;
		float: left;
	}
	.icon-img {
		width: .66rem;
		display: block;
		margin: 0 auto;
	}
	.icon-title {
		margin-top: .2rem;
		text-align: center;
		color: #212121;
		font-size: .28rem;
	}
	.icon-pagination {
		bottom: .1rem;
	}
</style>
