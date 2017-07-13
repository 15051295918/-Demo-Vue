<template>
	<div class="help-page">
		<div class="help-header">
			<a class="help-header-left" @click="handleBackBtnClick"></a>
	  		<h1 class="help-header-middle">50元酒店代金劵</h1>
	  	</div>
	</div>
</template>

<script>
	export default {
		data () {
		    return {
		     	
		    }
		},
		
		components: {
		        
		},

		methods: {
			handleBackBtnClick: function() {
				this.$router.go(-1)
			}
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
