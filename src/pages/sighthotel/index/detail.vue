<template>
    <div class="main">
		<div class="detail-header">
			<a class="detail-header-left" href="">
				<div class="return"></div>
			</a>
			<h1 class="detail-header-title">北京热带雨林风情园温泉酒店+私汤泡池</h1>
		</div>
		<div class="top-img-wrap" @click="handleImgClick">
			<img class="top-img" src="http://img1.qunarzz.com/sight/p0/1501/eb/ebc33a1d2fe9a682.water.jpg" alt="">
		</div>
		<div class="mask" v-show="seen">
			<div class="icon-close" @click="handleImgClick"></div>
			<div class="mask-img">
				
			</div>
		</div>
		<booking></booking>
    </div>
</template>

<script>
import booking from '../booking/booking'

export default {
     
    data() {
      return {
        seen:false
      }
    },
    methods:{
    	handleImgClick() {
    		 this.seen = !this.seen;
    	}
    },
    components:{
    	"booking":booking
    }
}


</script>


<style scoped>
  	.main {
  		position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        min-height: 100%;
        background: #f5f5f5;
  	}
  	.detail-header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 10;
		height: .88rem;
		background: #00bcd4;
		text-align: center;
  	}
  	.detail-header-left {
  		position: absolute;
  		left: 0;
  		top: 0;
	    width: .4rem;
	    line-height: .88rem;
	    padding: 0 .2rem;
	    color: #fff;
	    font-size: .36rem;
	    text-align: left;
  	}
  	.return{
		transform: rotateZ(45deg);
		width: .24rem;
		height: .24rem;
		border-left: .04rem solid #fff;
		border-bottom: .04rem solid #fff;
		margin: .3rem .1rem;
	}
	.detail-header-title{
	    overflow: hidden;
	    margin: 0 1rem;
	    line-height: .88rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    font-size: .32rem;
	    text-align: center;
	    color: #fff;
	}
	.top-img-wrap {
		overflow: hidden;
		height: 0;
		padding-bottom: 56.25%;

	}
	.top-img{
		width: 100%;
		min-height: 2rem;
		vertical-align: top;
	}
	.mask{
		position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        min-height: 100%;
        background: #000;

	}
	.icon-close{
		width: 0.6rem;
		height: 0.6rem;
		background: #fff;
		position: absolute;
		top: 0.88rem;
		right: 0.66rem;
		z-index: 50;

	}


</style>

