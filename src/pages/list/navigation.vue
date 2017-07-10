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
		<div class="subnav-container">
			<div class="subnav-items subnav-title" >
			
				<div class="subnav-item  border-bottom" v-for="(subItem, index) in subnavinfo" @click="handleSubnavClick(index)" :index= "index" v-model="index">
					<img class="subnav-item-icon" src="http://img1.qunarzz.com/piao/fusion/1608/3e/72d2396d47131702.png">
						{{subItem.title}}
					<span class="count">
						{{subItem.visitedNum}}
					</span>
					<div class="three-items subnav-content" v-for="threeItem in threeNavInfo">
						<div class="three-nav ">{{threeItem.itemtitle}}<span class="count">555</span></div>
					</div>
				</div>				
			</div>
		</div>
		<div class="mask-div"  @touchstart="maskClick" v-model="show">
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
	props:["subnavinfo","threeNavInfo"],
	methods: {
	  	allClassClick(){
	  		return this.show = !this.show
	  	},
	  	maskClick(){
	  		return this.show = false
	  	},
	  	handleSubnavClick(index){

	  		this.$emit("getIndex", index);
	  		
	  		
	  	
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
		z-index:100;
		height: 100%;
		width: 100%;	
	}
	.subnav-container{
		position:absolute;
		width:100%;
		/*display: flex;*/
		height:4.8rem;
		overflow: hidden;
		background: #fff;
		z-index:99;
	}
	.mask-div{
		position: absolute;
		width:100%;
		height:100%;
		background: rgba(0,0,0, .35);
		z-index:90;
	}
	.subnav-items {
		width: 100%;
		height:100%;
		
	}
	.subnav-item{
		width:50%;
		position: relative;
		height: .8rem;
		line-height: .8rem;
	} 
	.three-items{
		width:100%;
		position: absolute;
		top:0;
		right:-100%;
		background: #f1f1f1;
		height: .8rem;
		line-height: .8rem;
	}
	.subnav-item-icon{
		width: .3rem;
	    height: .3rem;
	    vertical-align: middle;
	    margin-right: .1rem;
	}
	.count{
		float: right;
   		margin-right: .2rem;
    	font-size: .24rem;
    	color: #9e9e9e;

	}
	.three-nav-icon {
	    width: .3rem;
	    height: .3rem;
	    vertical-align: middle;
	    margin-right: .1rem;
	}
</style>
