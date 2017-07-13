<template>
	<div class="help-page">
		<div class="help-header" v-scroll-show>
			<router-link class="help-header-left" to="/campaign/newannounce"></router-link>
	  		<h1 class="help-header-middle">150元酒店代金劵</h1>
	  	</div>
	  	<activies :index="$route.params.id"></activies>
	</div>
</template>

<script>
	import detailactive from "./active"
	export default {
		data () {
		    return {
		     	
		    }
		},

		components: {
		   "activies": detailactive     
		},

		directives: {
	        scrollShow: {
	            bind: function(el) {
	                window.addEventListener('scroll', function() {
	                	var speed = 0;
	                	var timer = null;
	                    if ( document.body.scrollTop > el.offsetTop ) {
                            timer = setInterval(function() {
                            	speed += 0.2;
                            	el.style.opacity = speed;
                            	if( speed >= 1 ) {
                            		clearInterval(timer)
                            	}
                            }, 30);
	                    }
	                })
	            }
	        }
	    }
	}
</script>

<style scoped>
	.help-header {
	    position: fixed;
	    width: 100%;
	    top: 0;
	    left: 0;
	    z-index: 100;
	    height: .8rem;
	    text-align: center;
	    color: #fff;
	    background: #1ba9ba;
	    border-bottom: #1b7a8b .02rem solid;
	    opacity: 0;
	}

	.help-header-left {
	    position: absolute;
	    left: 0;
	    top: 0;
	    transform: rotateZ(45deg);
	    width: .2rem;
	    height: .2rem;
	    margin: .3rem .4rem;
	    border-left: .03rem solid #fff;
	    border-bottom: .03rem solid #fff;
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
