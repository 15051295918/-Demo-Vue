<template>
    <ul class="mp-view-list mp-page">
    	<li class="mp-sight-group border-topbottom" v-for="(item, index) in listCon" :key="'li_item_' + index">
	    	<div class="mp-item-content">
		    	<div class="mp-sight-info">
			    	<a :href="item.url">
				    	<div class="mp-sight-imgcon">
				    		<img class="mp-sight-img" v-lazy="item.img">
				    	</div>
				    	<div class="mp-sight-detail">
					    	<h3 class="mp-sight-name">{{item.name}}</h3>
					    	<span class="mp-tag-word" v-show="item.hot">热</span>
					    	<div class="mp-sight-comments">
					    		<span class="mpf-starlevel">
					    			<span class="mpg-iconfont mpf-starlevel-gain" :style="item.star">★★★★★</span>
					    			<span class="mpg-iconfont mpf-starlevel-total">★★★★★</span>
					    		</span>
					    		<span class="mp-comments-totalnum">{{item.comment}}评论</span>
					    	</div>
					    	<div class="mp-sight-location">
					    		<span class="mp-sight-address">{{item.address}}</span>
					    	</div>
				    	</div>
			    	</a>
		    	</div>
	    	</div>
    	</li>
    </ul>
</template>

<script>

	import lists from './lists.vue'

	export default {
		data () {
			return {
				listCon:[{
					name: "故宫(5A)",
					img: "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_110x110_fac6a6cd.jpg",
					url: "",
					hot: true,
					star: "width:95%",
					comment: 53822,
					address: "北京·东城区"
				},{
					name: "恭王府(5A)",
					img: "http://img1.qunarzz.com/sight/p0/201405/12/51b63883c25f5d87af3c08bb016e2bd7.jpg_110x110_d957be56.jpg",
					url: "",
					hot: false,
					star: "width:90%",
					comment: 3567,
					address: "北京·西城区"
				},{
					name: "颐和园(5A)",
					img: "http://img1.qunarzz.com/sight/p0/1505/d2/d274c92de14c93da.water.jpg_110x110_d9d85877.jpg",
					url: "",
					hot: true,
					star: "width:90%",
					comment: 9940,
					address: "北京·海淀区"
				},{
					name: "八达岭长城(5A)",
					img: "http://img1.qunarzz.com/sight/p0/1604/1b/1b6778deafaf208f90.img.jpg_110x110_1efa2758.jpg",
					url: "",
					hot: false,
					star: "width:90%",
					comment: 9519,
					address: "北京·延庆县"
				},{
					name: "圆明园(4A)",
					img: "http://img1.qunarzz.com/sight/p0/1505/f5/f5f45e1a83537bcb.water.jpg_110x110_4c72dbfd.jpg",
					url: "",
					hot: false,
					star: "width:95%",
					comment: 7812,
					address: "北京·海淀区"
				}]
			}
		}
	}
</script>

<style scoped>
	.mp-page {
		background-color: #f5f5f5;
		height: 100%;
	}
	.mp-sight-group::after {
		border-color: #c9cccd;
	}
	.mp-sight-group::before {
		border-color: #c9cccd;
	}
	.mp-sight-group {
		margin-bottom: .2rem;
    	background: #fff;
    	position: relative;
	}
	.mp-sight-info {
		padding: .2rem;
	}
	.mp-sight-imgcon {
		float: left;
		position: relative;
		width: 1.6rem;
    	height: 1.6rem;
	}
	.mp-sight-img {
		opacity: 1;
		transition: opacity 400ms;
		width: 1.6rem;
    	height: 1.6rem;
	}
	.mp-sight-detail {
		position: relative;
	    overflow: hidden;
	    padding-left: .2rem;
	    height: 1.6rem;
	}
	.mp-sight-name {
		float: left;
		overflow: hidden;
	    max-width: 60%;
	    color: #212121;
	    font-size: .32rem;
	    line-height: .36rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.mp-tag-word {
	    margin-left: .06rem;
	    float: left;
	    margin-top: 2px;
	    width: .3rem;
	    height: .3rem;
	    background: #ff1200;
	    color: #fff;
	    font-size: .24rem;
	    line-height: .3rem;
	    text-align: center;
	}
	.mp-sight-comments {
		margin-top: .38rem;
	    height: .64rem;
	    line-height: .64rem;
	}
	.mpf-starlevel {
		width: 1.2rem;
	    height: .24rem;
	    font-size: .24rem;
        display: inline-block;
    	position: relative;
	}
	.mpf-starlevel-gain, .mpf-starlevel-total {
		overflow: hidden;
	    position: absolute;
	    top: 0;
	    left: 0;
	}
	.mpf-starlevel-gain {
		z-index: 2;
    	color: #00bcd4;
	}
	.mpg-iconfont {
		font-family: monospace;
	    speak: none;
	    font-style: normal;
	    font-weight: normal;
	    font-variant: normal;
	    text-transform: none;
	    line-height: 1;
	    -webkit-font-smoothing: antialiased;
	}
	.mpf-starlevel-total {
		color: #ddd;
		z-index: 1;
	}
	.mp-comments-totalnum {
		position: relative;
	    top: -.04rem;
	    margin-left: .06rem;
	    color: #9e9e9e;
	    font-size: .24rem;
	}
	.mp-sight-location {
		position: absolute;
	    bottom: 0;
	    color: #9e9e9e;
	    font-size: 0;
	    white-space: nowrap;
	}
	.mp-sight-address {
		font-size: .24rem;
	}

</style>