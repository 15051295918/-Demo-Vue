<template>
	<div class="help-page">
		<div class="help-header" :style="headSeen">
			<router-link to="/campaign/newannounce">
				<a class="help-header-left"></a>
			</router-link>
	  		<h1 class="help-header-middle">50元酒店代金劵</h1>
	  	</div>
	  	<activies></activies>
	</div>
</template>

<script>
	import detailactive from "./active"
	export default {
		data () {
		    return {
		     	headSeen: {
		     		position: "fixed",
		     		width: "100%",
		     		top: " 0",
		     		left: "0",
		     		display: "block",
		     		opacity: "0"
		     	}	
		    }
		},
		components: {
		   "activies": detailactive     
		},
		methods: {
			
		}
	}
</script>

<style scoped>

	.help-header {
	    position: relative;
	    background: #1ba9ba;
	    height: .8rem;
	    text-align: center;
	    color: #fff;
	    border-bottom: #1b7a8b .02rem solid;
	}
	.help-header-left {
	    position: absolute;
	    left: 0;
	    top: 0;
	    width: .8rem;
	    height: .8rem; 
	    background: url(../../../assets/img/campaignIMG/help-header-left.png) center center no-repeat;
	    background-size: .26rem .34rem;
	    z-index: 91;
	}
	.help-header-middle {
		overflow: hidden;
	    margin: 0 1rem;
	    font-weight: normal;
	    font-size: .32rem;
	    height: .8rem;
	    line-height: .8rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	
</style>
