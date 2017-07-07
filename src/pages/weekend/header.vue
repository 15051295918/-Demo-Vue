<template>
	<header class="header">
  		<a class="header-left">
  			<div class="return"></div>
  		</a>
  		<div class="header-right">
  			<span class="header-city">{{city}}<i class="header-city-option"></i>
  			</span>  			
  		</div>
  	</header>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: ["city"]
}
</script>


<style scoped>
	.header {
	    position: relative;
	    display: flex;
	    width: 100%;
	    height: .88rem;
	    background: #00bcd4;
	    text-align: center;
	    color: #fff;
	}
	.header-left {
	    display: inline-block;
	    width: .4rem;
	    line-height: .88rem;
	    padding: 0 .2rem;
	    color: #fff;
	    font-size: .36rem;
	    text-align: left;
	}
	.header-city {
		line-height: .88rem;
    	padding: 0 .25rem;
    	color: #fff;
    	text-align: center;
    	font-size: .32rem;
    }
    .header-city-option{
		height: 0rem;
		width: 0rem;
		border:0.10rem solid transparent;
    	border-top: 0.14rem solid #fff;
    	position: relative;
    	top:0.25rem;
    	left: .14rem;	
	}
    .return{
		transform: rotateZ(45deg);
		width: .24rem;
		height: .24rem;
		border-left: .04rem solid #fff;
		border-bottom: .04rem solid #fff;
		margin: .3rem .1rem;
	}
	.header-right{
		position: absolute;
		left: 50%;
		top: 50%;
		margin-left: -.66rem;
		margin-top: -.44rem;
	}
</style>
