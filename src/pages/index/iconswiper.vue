<template>
<<<<<<< HEAD
    <div class="icon-box">
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide  v-for="(page,index) in pages" :key="index + '_icon_swiper_item'">
                <div class="icon-container">
                    <div class="icon-wrapper" v-for="item in page">
                        <img :src="item.imgUrl" class="icon-img">
                        <p class="icon-title">{{item.title}}</p>
                    </div>
                </div>
=======
    <div>
    	<swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="(page, index) in pages" :key="index + '_icon_swiper_item'">
            	<div class="icon-container">
            		<div class="icon-wrapper" v-for="item in page">
            			<img :src="item.imgUrl" class="icon-img">
            			<p class="icon-title">{{item.title}}</p>
            		</div>
            	</div>
>>>>>>> origin/master
            </swiper-slide>
            <div class="swiper-pagination icon-pagination"  slot="pagination"></div>
        </swiper>
        <div class="recommend border-topbottom">
<<<<<<< HEAD
            <div class="recomend-item" v-for="(item,index) in recommends" :class="{'border-right':index == 0}" >{{item.title}}</div>
        </div>
    </div>

=======
            <div class="recomment-item" v-for="(item, index) in recommends" :class="{'border-right': index == 0}">
                {{item.title}}
            </div>
        </div>
    </div>
>>>>>>> origin/master
</template>

<script>

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    data () {
        return {
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
            for (var i = 0; i < this.icons.length; i++) {
<<<<<<< HEAD
                var page = Math.floor(i / 8);
                if(!pages[page]) {
                    pages[page] = []
                }
                pages[page].push(this.icons[i])
=======
                var page = Math.floor(i / 8); 
                if (!pages[page]) { 
                    pages[page] = [] 
                }
                pages[page].push(this.icons[i]);
>>>>>>> origin/master
            }
            return pages;
        }
    },
<<<<<<< HEAD
    props:["icons","recommends"],
=======
    props: ["icons","recommends"]
>>>>>>> origin/master
}
</script>


<style scoped>
<<<<<<< HEAD
    .icon-box {
        background: white;
    }
=======
>>>>>>> origin/master
	.icon-container {
		overflow: hidden;
		padding-bottom: .4rem;
        height: 2.88rem;
<<<<<<< HEAD
        background: white;
=======
        background: #fff;
>>>>>>> origin/master
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
<<<<<<< HEAD
        height: 1rem;
        display: flex;
        background: white;
    }
    .recomend-item {
        line-height: 1rem;
        text-align: center;
        flex: 1;
    }
   

=======
        display: flex;
        background: #fff;
    }
    .recomment-item {
        flex: 1;
        line-height: 1rem;
        text-align: center;
    }
>>>>>>> origin/master
</style>
