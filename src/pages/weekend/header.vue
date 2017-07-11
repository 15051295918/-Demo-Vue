<template>
	<header class="header">
  		<a class="header-left">
  			<div class="return"></div>
  		</a>
  		<h1 class="header-title">学生最爱的博物馆 {{$route.params.id}}</h1>
  		
  	</header>
  	
</template>

<script>
		export default {
			  data () {
				    return {
				    	show:true
				    }						
			  },
			  props:["models"],
			
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
		position: absolute;
		top:0;
		left:0;
	    display: inline-block;
	    width: .4rem;
	    line-height: .88rem;
	    padding: 0 .2rem;
	    color: #fff;
	    font-size: .36rem;
	    text-align: left;
	}
	.header-title {
		overflow: hidden;
		width:100%;
	    white-space: nowrap;
		text-overflow: ellipsis;
		font-size: .32rem;
		line-height: .88rem;
		text-align: center;
		
	}
	 .return{
		transform: rotateZ(45deg);
		width: .24rem;
		height: .24rem;
		border-left: .04rem solid #fff;
		border-bottom: .04rem solid #fff;
		margin: .3rem .1rem;
	}
</style>
