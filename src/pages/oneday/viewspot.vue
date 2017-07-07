<template>

	<div class="view-spot">
		<div class="view-top">
			<p class="city-popular">热门城市</p>
		</div>
		<div class="feature" v-for="(item, index) in viewspot" :key="'index'+ '_viewspot'">
			<div class="view-left">
				<span class="view-bookingtime">{{item.booktime}}</span>
				<img class="view-img" :src="item.imgUrl">
			</div>
			<div class="view-right">
				<p class="view-ticket">{{item.title}}</p>
				<p class="view-cinema">{{item.cinema}}</p>
				<p class="view-comment">{{item.comment}}</p>
				<p class="view-address">{{item.address}}</p>
				<p class="view-price"><span class="view-yuan">&yen;</span><span class="view-p">{{item.price}}</span><span class="view-qi">起</span></p>
			</div>
			
		</div>
		<a class="recommend-a">
			查看全部景点
			<span class="recommend-a-span"></span>
		</a>
	</div>

</template>

<script>

export default {

  data () {
    return {
    	
    	
    }
  },
  props:['viewspot']

}
</script>

<style scoped>
    .view-spot{
    	margin-top: .2rem; 
        height:auto;
       background: white;
    }
	
	.view-top{
		height: .96rem;
		display: flex;
		justify-content: center;
		align-items: center;
		border-bottom: 0.02rem solid #f5f5f5; 
		
		
	}
	.city-popular{
		position: relative;
		margin-left: .2rem; 
		font-size: .36rem;
	}

	.city-popular::before {
		left: -.4rem;
	    position: absolute;
	    top: .18rem;
	    content: "";
	    width: .2rem;
	    height: .02rem;
	    background: #9e9e9e;
	}

	.city-popular::after {
		right: -.4rem;
	    position: absolute;
	    top: .18rem;
	    content: "";
	    width: .2rem;
	    height: .02rem;
	    background: #9e9e9e;
	}
	
	.city-total{
		margin-right: .2rem; 
	}

	.feature {
    overflow: hidden;
    position: relative;
    height: 2rem;
    padding-bottom: .2rem;
	padding-left: .2rem;
	padding-right: .2rem;
	padding-top: .2rem;
	display: flex;
	justify-content: space-between;
	border-bottom: 0.02rem solid #f5f5f5;
   }
   .view-left {
   		position: relative;
   }

   .view-bookingtime {
   		position: absolute;
   		top: .1rem;
   		left: -.1rem;
   		width: 1.4rem;
   		height:  .4rem;
   		background: #00afc7;
   		color: white;
   		text-align: center;
   		line-height:  .4rem;
   		
   }
   .view-right {
   		position: relative;
   		
   		width:5.6rem;
   		height: 2rem;

   }

   .view-cinema {
   		position: absolute;
   		top: .5rem;

   		color: #00afc7;
   		font-size: .16rem;
   }

   .view-address {
   		position: absolute;
   		bottom: 0;
   		color: #9e9e9e;
   		font-size: .14rem;
   }
   .view-comment {
   		position: absolute;
   		bottom: .5rem;
   		color: #9e9e9e;
   		font-size: .14rem;
   }
   .view-price {
   		position: absolute;
   		bottom: 0;
   		right: .1rem;
   }
   .view-ticket {
   		font-size: .33rem;
   }
	.view-left {
		width: 2rem;
		height: 2rem;
	}
	.view-img {
		width: 100%;
	}

	.view-yuan {
		font-size: .14rem;
		color: #ff8300;
	}

	.view-p {
		font-size: .44rem;
		color: #ff8300;
		font-weight: bold;
	}

	.view-qi {
		color: #9e9e9e;
   		font-size: .14rem;
	}
	.recommend-a{
		position: relative;
		display: block;
	    color: #616161;
	    font-size: .3rem;
	    line-height: .9rem;
	    text-align: center;
	    background: #fff;
	}
	.recommend-a-span{
		display: block;
		position: absolute;
		top: 0.35rem;
		right: 32%;
		transform: rotateZ(-135deg);
		width: .15rem;
		height: .15rem;
		border-left: .04rem solid #9e9e9e;
		border-bottom: .04rem solid #9e9e9e;
	}
</style>
