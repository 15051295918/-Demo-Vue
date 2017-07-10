<template>
<div id="wrapper-three" v-show="show">
	<div class="threenav"  id="scroller-three">
		<div class="three-items" v-for="item in threeInfo" >
			{{item.itemtitle}}
			<span class="three-items-count">
				{{item.visitedNum}}
			</span>
		</div>

	</div>
</div>
</template>

<script>

import "./iscroll.js";

export default {
	updated(){
		new IScroll("#wrapper-three",{scrollX:false,scrollY:true,mouseWheel:true});
	},
	data () {
		return {
			
		}
	},
	props:["threeInfo","show"],
	methods: {
	  
	}
	
}
</script>


<style scoped>
	#wrapper-three{
		width:50%;
		height:4.8rem;
		background: #f1f1f1;
		overflow: hidden;
		position: absolute;
		right:0;
		top:.8rem;
	}
	.threenav{
		width:100%;
		height:7.6rem;
		background: #f1f1f1;
	}
	.three-items{
		height: .8rem;
		line-height: .8rem;
		padding-left:.3rem;
		color:#212121;
	}
	.three-items-count{
		float:right;
	    margin-right: .2rem;
	    color: #9e9e9e
	}
</style>
