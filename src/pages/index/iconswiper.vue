<template>
	<swiper :options="swiperOption" ref="mySwiper">
<<<<<<< HEAD
      <swiper-slide v-for="item in swiperInfo">
      	<div>
      		<div class="icon-wrapper" v-for="item in swiperInfo">
      			<img :src="item.imgUrl" class="icon-img"/>
      			<p class="icon-title">{{item.title}}</p>
      		</div>
      	</div>
      </swiper-slide>
      
      <div class="swiper-pagination"  slot="pagination"></div>
=======
        <swiper-slide>
        	<div class="icon-container">
        		<div class="icon-wrapper" v-for="item in swiperInfo">
        			<img :src="item.imgUrl" class="icon-img">
        			<p class="icon-title">{{item.title}}</p>
        		</div>
        	</div>
        </swiper-slide>
        <div class="swiper-pagination icon-pagination"  slot="pagination"></div>
>>>>>>> origin/master
    </swiper>
</template>

<script>

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  data () {
    return {
    	swiperInfo: [{
<<<<<<< HEAD
    		imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/45/676b67d7078abc02.png",
			title: "故宫",
    		link: ""
    	},{
    		imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/45/676b67d7078abc02.png",
    		title: "故宫",
    		link: ""
    	},{
			imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/45/676b67d7078abc02.png",
    		title: "故宫",
    		link: ""
    	},{
			imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/45/676b67d7078abc02.png",
    		title: "故宫",
    		link: ""
    	},{
    		imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/45/676b67d7078abc02.png",
    		title: "故宫",
    		link: ""
    	},{
    		imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/45/676b67d7078abc02.png",
    		title: "故宫",
    		link: ""
    	},{
			imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/45/676b67d7078abc02.png",
    		title: "故宫",
    		link: ""
    	},{
			imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/45/676b67d7078abc02.png",
    		title: "故宫",
    		link: ""
    	}],
    	
        swiperOption: {
          autoplay: false,
          direction : 'horizontal',
          autoHeight: true,
          pagination : '.swiper-pagination',
          paginationClickable :true
      }
=======
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
>>>>>>> origin/master
    }
  }
}
</script>

<<<<<<< HEAD
<style scoped>
	.icon-wrapper {
		padding-top: .3rem;
		overflow:hidden;
		width: 25%;
		float:left;
	}

=======

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
>>>>>>> origin/master
	.icon-img {
		width: .66rem;
		display: block;
		margin: 0 auto;
	}
<<<<<<< HEAD

=======
>>>>>>> origin/master
	.icon-title {
		margin-top: .2rem;
		text-align: center;
		color: #212121;
		font-size: .28rem;
	}
<<<<<<< HEAD

=======
	.icon-pagination {
		bottom: .1rem;
	}
>>>>>>> origin/master
</style>
