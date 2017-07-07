<template>
<div class="nav-container">
	<div class="primary-nav border-topbottom">
		<div class="primary-item border-right " @click="allClassClick" v-model="show">
			<span>全部分类</span>
			<span  class="triangle-show" ></span>
			<span  class="triangle-hide" ></span>
		</div>
		<div class="primary-item">
			<span>推荐排序</span>	
			<span  class="triangle-show"></span>
			<span  class="triangle-hide"></span>
		</div>
		
	</div>
	<div class="sub-nav"  v-show="show">
		<div class="subnav-all">
			<div class="subnav-items subnav-title" >
				<div class="three-nav  border-bottom" @click="handleTitle">
					<img class="three-nav-icon" src="http://img1.qunarzz.com/piao/fusion/1608/3e/72d2396d47131702.png">
				全部分类<span class="count">1213</span></div>
				<div class="three-nav  border-bottom" @click="handleTitle">
					<img class="three-nav-icon" src="http://img1.qunarzz.com/piao/fusion/1608/3e/72d2396d47131702.png">
				无极剑圣<span class="count">999</span></div>
				<div class="three-nav  border-bottom" @click="handleTitle">
					<img class="three-nav-icon" src="http://img1.qunarzz.com/piao/fusion/1608/3e/72d2396d47131702.png">
				无极剑圣<span class="count">999</span></div>
				<div class="three-nav  border-bottom" @click="handleTitle">
					<img class="three-nav-icon" src="http://img1.qunarzz.com/piao/fusion/1608/3e/72d2396d47131702.png">
				无极剑圣<span class="count">555</span></div>
				<div class="three-nav  border-bottom" @click="handleTitle">
					<img class="three-nav-icon" src="http://img1.qunarzz.com/piao/fusion/1608/3e/72d2396d47131702.png">
				无极剑圣<span class="count">555</span></div>
				<div class="three-nav  border-bottom" @click="handleTitle">
					<img class="three-nav-icon" src="http://img1.qunarzz.com/piao/fusion/1608/3e/72d2396d47131702.png">
				无极剑圣<span class="count">555</span></div>
				<div class="three-nav  border-bottom" @click="handleTitle">
					<img class="three-nav-icon" src="http://img1.qunarzz.com/piao/fusion/1608/3e/72d2396d47131702.png">
				无极剑圣<span class="count">555</span></div>
				<div class="three-nav  border-bottom" @click="handleTitle">
					<img class="three-nav-icon" src="http://img1.qunarzz.com/piao/fusion/1608/3e/72d2396d47131702.png">
				无极剑圣<span class="count">555</span></div>
			</div>
			<div class="subnav-items subnav-content">
				<div class="three-nav ">无极剑圣<span class="count">555</span></div>
				<div class="three-nav ">无极剑圣<span class="count">555</span></div>
				<div class="three-nav ">无极剑圣<span class="count">555</span></div>
				<div class="three-nav ">无极剑圣<span class="count">555</span></div>
				<div class="three-nav ">无极剑圣<span class="count">555</span></div>
				<div class="three-nav ">无极剑圣<span class="count">555</span></div>
				<div class="three-nav ">无极剑圣<span class="count">555</span></div>
				<div class="three-nav ">无极剑圣<span class="count">555</span></div>
			</div>
		</div>
		<div class="mask-div"  @click="maskClick" v-model="show">

		</div>
	</div>
</div>	
</template>

<script>
export default {
	data () {
		return {
			show:false
		}
	},
	methods:{
	  	allClassClick(){
	  		return this.show = !this.show
	  	},
	  	maskClick(){
	  		return this.show = false
	  	}
	}
}
</script>


<style scoped>
	.nav-container{
		height: 100%;
	}

	.primary-nav{
		display: flex;
		height: .8rem;
		line-height: .8rem;
		font-size: .28rem;
		background: #fff;
	}
	.primary-item{
		flex: 1;
		text-align: center;
		position: relative;
	}
/*	.nav-item::before{
		display: none;
		content: "";
		border:.08rem solid transparent;
		border-bottom-color:#00bcd4;
		position: absolute;
		right: 1.1rem;
    	top: .28rem;
	}
	
	.nav-item::after{
		display:none;
		content: "";
		border:.08rem solid transparent;
		border-top-color:#666;
		position: absolute;
		right: 1.1rem;
    	top: .35rem;
	}*/
	.triangle-show{
		/*display: inline-block;*/
		display: none;
		border: .08rem solid transparent;
		border-top-color: #666;
		position: absolute;
		right: 1.1rem;
    	top: .35rem;
	}
	.triangle-hide{
		/*display: none;*/
		border:.08rem solid transparent;
		border-bottom-color:#00bcd4;
		position: absolute;
		right: 1.1rem;
    	top: .28rem;
	}




	.sub-nav{
		/*display: none;*/
		position: absolute;
		height: 100%;
		width: 100%;
		
		
	}
	.subnav-all{
		display: flex;
		height:4.8rem;
		overflow: hidden;
		background: #fff;
	}
	.mask-div{
		width:100%;
		height:100%;
		background: rgba(0,0,0, .35);
	}
	.subnav-items {
		flex: 1;
		height:100%;

	}
	.three-nav {
		height: .8rem;
		line-height: .8rem;
		padding-left: .3rem;
	    line-height: .8rem;
	    height: .8rem;
	    overflow: hidden;
	    color: #212121;
	}
	.count{
		float: right;
   		margin-right: .2rem;
    	font-size: .24rem;
    	color: #9e9e9e;

	}
	.subnav-content{
		background: #f1f1f1;
	}




.three-nav-icon {
    width: .3rem;
    height: .3rem;
    vertical-align: middle;
    margin-right: .1rem;
}
</style>
