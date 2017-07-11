<template>
<div class="nav">
	<div class="primary-nav border-topbottom">
		<div class="primary-item border-right " @click="allClassClick">
			<span>全部分类</span>
			<span  class="triangle-show" ></span>
			<span  class="triangle-hide" ></span>
		</div>
		<div class="primary-item" @click="handleOrderClick">
			<span>推荐排序</span>	
			<span  class="triangle-show"></span>
			<span  class="triangle-hide"></span>
		</div>		
	</div>	
	<div id="wrapper"  v-show="show">
		<div class="subnav"   id="scroller" >
			<div :class='{"sub-items":true,  "border-bottom":true, "checked":check[index]}'  v-for="(item,index) in subnavInfo" @click="handleSubnavItemClick(index)" >
				<img class="subnav-item-icon" src="http://img1.qunarzz.com/piao/fusion/1608/3e/72d2396d47131702.png">
				{{item.title}}	
				<span class="count">
					{{item.visitedNum}}
				</span>
			</div>
		
		</div>
	</div>	
	<div id="order-wrapper" v-show="orderShow">
		<div id="order-scroller">
			<div class="order border-bottom" :class='{"order-checked":orderCheck[0]}' @click="handleOrderCheckeda">推荐排序</div>
			<div class="order border-bottom" :class='{"order-checked":orderCheck[1]}' @click="handleOrderCheckedb">离我最近</div>
			<div class="order border-bottom" :class='{"order-checked":orderCheck[2]}' @click="handleOrderCheckedc">人气最高</div>
		</div>
	</div>
	<div class="mask"  @touchstart="handleMaskClick" v-show="showMask">
	</div>

	<threenav :threeInfo="threeInfo" :show="show"></threenav>


</div>

</template>

<script>

import threenav from "./threenav";
import "./iscroll.js";

export default {
	updated(){
		new IScroll("#wrapper",{scrollX:false,scrollY:true,mouseWheel:true});
		new IScroll("#order-wrapper",{scrollX:false,scrollY:true,mouseWheel:true});
	},
	data () {
		return {
			i : 0,
			threeInfo:[],
			check:[], //给每一项都要加一个不同的而不是加的都是一样的
			orderCheck:[]
		}
	},
	props:["subnavInfo","show","orderShow","showMask"],
	methods: {
	  	allClassClick(){
	  		this.$emit("ClassClick");
	  	},
	  	handleOrderClick(){
	  		this.$emit("orderClick");
	  	},
	  	handleSubnavItemClick(index){
	  		this.check = [];
	  		this.check[index] = true;
	  		this.i = index
	  		this.$http.get('/static/list.json').then(response => {
        	this.threeInfo = response.body.data.subnavinfo[this.i].content
	        }, response => {
	             console.log("get index data error")
	        })
		},
	  	handleMaskClick(){
	  		this.$emit("maskClick");
	  	},
	  	handleOrderCheckeda(){
	  		this.orderCheck=[];
	  		this.orderCheck[0]=true;
	  	},
	  	handleOrderCheckedb(){
	  		this.orderCheck=[];
	  		this.orderCheck[1]=true;
	  	},
	  	handleOrderCheckedc(){
	  		this.orderCheck=[];
	  		this.orderCheck[2]=true;
	  	}
	},
	components: {
		"threenav" : threenav
	}
}
</script>


<style scoped>

	.nav{
		position: absolute;
		height:100%;
		width: 100%;
	}
	.primary-nav{
		width:100%;
		height: .8rem;
		line-height: .8rem;
		display: flex;
		font-size: .28rem;
		background: #fff;
	}
	.primary-item{
		flex: 1;
		text-align: center;
		position: relative;
	}
	.triangle-show{
		display:block;
		border: .08rem solid transparent;
		border-top-color: #666;
		position: absolute;
		right: 1.1rem;
    	top: .35rem;
	}
	/*一级导航样式完成*/
	.mask{
		position: absolute;
		width:100%;
		height:100%;
		background: rgba(0,0,0, .35);
		z-index:10;
	}
	/*蒙层*/
	#wrapper{
		width:50%;
		height:4.8rem;
		background: #fff;
		overflow: hidden;
	}
	.subnav{
		width:100%;
		height:9.6rem;
		background: #fff;
		
	}
	.sub-items{
		height: .8rem;
		line-height: .8rem;
	}
	.subnav-item-icon{
		width: .3rem;
	    height: .3rem;
	    vertical-align: middle;
	    margin-right: .1rem;
	    padding-left: .3rem;
	}
	.count{
		float: right;
   		margin-right: .2rem;
    	font-size: .24rem;
    	color: #9e9e9e;
	}
	.checked{
		background: #f1f1f1;
	}
/*左侧二级导航*/
	#order-wrapper{
		width:100%;
		height:2.38rem;
		background: #fff;
		overflow: hidden;
	}
	#order-scroller{
		height:2.4rem;
	}
	.order{
		height:.8rem;
		line-height: .8rem;
		text-align: center;
	}

	.order-checked{
		background: #f1f1f1;
	}



</style>
