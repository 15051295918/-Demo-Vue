<template>
	<swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide>
        	<div class="icon-container">
        		<div class="icon-wrapper" v-for="item in swiperInfo.slice(8)">
        			<img :src="item.imgUrl" class="icon-img">
        			<p class="icon-title">{{item.title}}</p>
        		</div>
        	</div>
        </swiper-slide>
        <swiper-slide>
            <div class="icon-container">
                <div class="icon-wrapper" v-for="item in swiperInfo.slice(8)">
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
        		imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
        		title: "故宫",
        		link:""
        	},{
        		imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
        		title: "故宫",
        		link:""
        	},{
        		imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
        		title: "故宫",
        		link:""
        	},{
        		imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
        		title: "故宫",
        		link:""
        	},{
        		imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
        		title: "故宫",
        		link:""
        	},{
        		imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
        		title: "故宫",
        		link:""
        	},{
        		imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
        		title: "故宫",
        		link:""
        	},{
        		imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
        		title: "故宫",
        		link:""
        	},{
        		imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
        		title: "故宫",
        		link:""
        	},{
        		imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
        		title: "故宫",
        		link:""
        	},{
        		imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
        		title: "故宫",
        		link:""
        	},{
        		imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
        		title: "故宫",
        		link:""
        	},{
        		imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
        		title: "故宫",
        		link:""
        	},{
        		imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
        		title: "故宫",
        		link:""
        	},{
        		imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
        		title: "故宫",
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
