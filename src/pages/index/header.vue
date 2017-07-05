<template>
	<header class="header">
  		<a class="header-left"><</a>
  		<div class="header-title">
  			<span class="single-line">输入城市/景点/游玩主题</span>
  		</div>
  		<div class="header-right">
  			<span class="header-city">北京</span>
  		</div>
  	</header>
</template>

<script>



export default {
	data () {
		return {

		}
	}
  
}
</script>


<style scoped>
	.header {
	    position: relative;
	    display: -webkit-box;
	    display: -moz-box;
	    display: -ms-flexbox;
	    display: box;
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
	.header-title {
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		box-flex: 1;
		-webkit-box-flex: 1;
		-moz-box-flex: 1;
		-ms-flex: 1;
		position: relative;
		height: .6rem;
		margin: .14rem 0;
		background: #fff;
		line-height: .6rem;
		border-radius: .06rem;
	}
	.single-line {
	    display: inline-block;
	    overflow: hidden;
	    position: absolute;
	    left: .3rem;
	    top: 0;
	    width: 3.6rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    color: #ccc;
	}
	.header-city {
		line-height: .88rem;
    	padding: 0 .22rem;
    	color: #fff;
	}
</style>
