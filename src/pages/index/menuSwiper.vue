<template>
	<div id="mp-menu-swiper" class="border-bottom">
		<swiper :options="swiperOption" ref="mySwiper" >
		    <swiper-slide  >
					<a href="#" class="mp-menu-item" :title="menuData.menuName" v-for="(menuData, index) in menuData1" :key="index" >
						<div >
							<img :src="menuData.imgSrc" alt="menuData.menuName" >
						</div>
						<div class="keywords">{{menuData.menuName}}</div>
					</a>
		    </swiper-slide>
		     <swiper-slide  >
					<a href="#" class="mp-menu-item" :title="menuData.menuName" v-for="(menuData, index) in menuData2" :key="index" >
						<div >
							<img :src="menuData.imgSrc" alt="menuData.menuName" >
						</div>
						<div class="keywords">{{menuData.menuName}}</div>
					</a>
		    </swiper-slide>
		    <div class="swiper-pagination"  slot="pagination"></div>
	  	</swiper>
	</div>  	
</template>

<script>
	const menuData1 = [{
		imgSrc :'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
		menuName : '景点门票'
	},{
		imgSrc :'http://img1.qunarzz.com/piao/fusion/1611/1a/261d4530330c202.png',
		menuName : '水上乐园'
	},{
		imgSrc :'http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png',
		menuName : '一日游'
	},{
		imgSrc :'http://img1.qunarzz.com/piao/fusion/1611/ea/8cb1dce519375d02.png',
		menuName : '古北水镇'
	},{
		imgSrc :'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
		menuName : '动植物园'
	},{
		imgSrc :'http://img1.qunarzz.com/piao/fusion/1611/45/676b67d7078abc02.png',
		menuName : '故宫'
	},{
		imgSrc :'http://img1.qunarzz.com/piao/fusion/1611/59/569d3c096e542502.png',
		menuName : '必游榜单'
	},{
		imgSrc :'http://img1.qunarzz.com/piao/fusion/1611/1c/a8a8d9023a814c02.png',
		menuName : '文化古迹'
	}]
	
	const menuData2 = [{
		imgSrc :'http://img1.qunarzz.com/piao/fusion/1611/59/569d3c096e542502.png',
		menuName : '公园'
	},{
		imgSrc :'http://img1.qunarzz.com/piao/fusion/1611/4c/cb6f790552dc3002.png',
		menuName : '农村度假'
	},{
		imgSrc :'http://img1.qunarzz.com/piao/fusion/1611/aa/a4cc16ba5e66a702.png',
		menuName : '亲子游'
	},{
		imgSrc :'http://img1.qunarzz.com/piao/fusion/1611/d0/e09575e66f4aa402.png',
		menuName : '游乐场'
	},{
		imgSrc :'https://img1.qunarzz.com/piao/fusion/1611/d1/1e49d9e4d7fca102.png',
		menuName : '暑期大促'
	},{
		imgSrc :'http://img1.qunarzz.com/piao/fusion/1611/c3/133460666f6f9202.png',
		menuName : '室内娱乐'
	},{
		imgSrc :'http://img1.qunarzz.com/piao/fusion/1611/1a/261d4530330c202.png',
		menuName : '水上玩乐'
	},{
		imgSrc :'http://img1.qunarzz.com/piao/fusion/1611/be/a70e61e1f57ee302.png',
		menuName : '全部'
	}]
	
	export default {
	    name: 'carrousel',
	    data() {
	      return {
	      	menuData1,
	      	menuData2,
	        swiperOption: {
	          notNextTick: true,
	          setWrapperSize :true,
	          autoHeight: true,
	          pagination : '.swiper-pagination',
	          paginationClickable :true,
	        }
	      }
	    }
	}
</script>

<style type="text/css" scoped >
	
	.mp-menu-item {
		float: left;
		width: 25%;
		text-align: center;
		padding-top: 0.3rem;
		height:1.6rem;
	}
	.mp-menu-item img{
		width: 0.66rem;
	}
	.mp-menu-item .keywords{
		width: 100%;
		text-align: center;
		padding-top: 0.2rem;
		color: black;
	}
	.swiper-container{
		padding-bottom: 0.28rem;
	}
 
</style>