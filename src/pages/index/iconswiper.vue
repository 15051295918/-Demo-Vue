<template>
    <div>
    	<swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="page in pages">
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
            <div class="recomment-item" v-for="(item, index) in recommendInfo" :class="{'border-right': index == 0}">
                {{item.title}}
            </div>
        </div>
    </div>
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
            }],
            recommendInfo: [{
                icon: "",
                title: "机票推荐",
                link:""
            }, {
                icon: "",
                title: "9元门票",
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
    },
    computed: {
        pages: function() {
            var pages = [];
            for (var i = 0; i < this.swiperInfo.length; i++) {
                var page = Math.floor(i / 8); 
                if (!pages[page]) { 
                    pages[page] = [] 
                }
                pages[page].push(this.swiperInfo[i]);
            }
            return pages;
        }
    }
}
</script>


<style scoped>
	.icon-container {
		overflow: hidden;
		padding-bottom: .4rem;
        height: 2.88rem;
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
        display: flex;
    }
    .recomment-item {
        flex: 1;
        line-height: 1rem;
        text-align: center;
    }
 

</style>
