<template>
    <div class="icon-box">
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide  v-for="(page,index) in pages" :key="index + '_icon_swiper_item'">
                <div class="icon-container">
                    <div class="icon-wrapper" v-for="item in page">
                        <img :src="item.imgUrl" class="icon-img">
                        <p class="icon-title">{{item.title}}</p>
                    </div>
                </div>
            </swiper-slide>
            <div class="swiper-pagination icon-pagination"  slot="pagination"></div>
        </swiper>
        <div class="recommend border-topbottom">
            <div class="recomend-item" v-for="(item,index) in recommendIfo" :class="{'border-right':index == 0}" >{{item.title}}</div>
        </div>
    </div>

</template>

<script>

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    data () {
        return {
        	swiperInfo: [{
        		imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/be/a70e61e1f57ee302.png",
        		title: "全部",
        		link:""
        	},{
        		imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
        		title: "景点门票",
        		link:""
        	},{
        		imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png",
        		title: "一日游",
        		link:""
        	},{
        		imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/1c/a8a8d9023a814c02.png",
        		title: "文化古迹",
        		link:""
        	},{
        		imgUrl: "https://img1.qunarzz.com/piao/fusion/1611/d1/1e49d9e4d7fca102.png",
        		title: "厦门观音山",
        		link:""
        	},{
        		imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/12/a16a3980aec17602.png",
        		title: "展馆",
        		link:""
        	},{
        		imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/cd/07f33cc087f18d02.png",
        		title: "自然风光",
        		link:""
        	},{
        		imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/ea/10024e1e382b7e02.png",
        		title: "泡温泉",
        		link:""
        	},{
                imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/be/a70e61e1f57ee302.png",
                title: "全部",
                link:""
            },{
                imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
                title: "景点门票",
                link:""
            },{
                imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png",
                title: "一日游",
                link:""
            },{
                imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/1c/a8a8d9023a814c02.png",
                title: "文化古迹",
                link:""
            },{
                imgUrl: "https://img1.qunarzz.com/piao/fusion/1611/d1/1e49d9e4d7fca102.png",
                title: "厦门观音山",
                link:""
            },{
                imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/12/a16a3980aec17602.png",
                title: "展馆",
                link:""
            },{
                imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/cd/07f33cc087f18d02.png",
                title: "自然风光",
                link:""
            },{
                imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/ea/10024e1e382b7e02.png",
                title: "泡温泉",
                link:""
            }],
            recommendIfo: [{
                title: "机票推荐",
                icon: "",
                link: ""
            },{
                title: "9元门票",
                icon: "",
                link: ""
            }],
         	swiperOption: {
                autoplay: false,
                direction : 'horizontal',
                autoHeight: true,
                pagination : '.swiper-pagination',
                paginationClickable :true
            }
        }
    },
    computed: {
        pages: function() {
            var pages = [];
            for (var i = 0; i < this.swiperInfo.length; i++) {
                var page = Math.floor(i / 8);
                if(!pages[page]) {
                    pages[page] = []
                }
                pages[page].push(this.swiperInfo[i])
            }
            return pages;
        }
    }
}
</script>


<style scoped>
    .icon-box {
        background: white;
    }
	.icon-container {
		overflow: hidden;
		padding-bottom: .4rem;
        height: 2.88rem;
        background: white;
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
    .recommend {
        height: 1rem;
        display: flex;
        background: white;
    }
    .recomend-item {
        line-height: 1rem;
        text-align: center;
        flex: 1;
    }
   

</style>
