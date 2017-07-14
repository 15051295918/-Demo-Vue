<template>
	<div class="content">
		<ul class="list">
			<li class="list-item" v-for="item in ticketList">
				<div class="list-imgcon">
					<img class="list-productimg" :src="item.imgUrl">
					<span class="list-bookingflag"><span class="list-bokkingtext">{{item.bookingTag}}</span></span>
				</div>
				<div class="list-productinfo  border-bottom">
					<h4 class="list-productname">{{item.ticketTypeName}}</h4>
					<div class="list-taglist" >
						<span class="list-tagitem border-right">{{item.tags[0]}}</span>
						<span class="list-tagitem border-right">{{item.tags[1]}}</span>
						<span class="list-tagitem">{{item.tags[2]}}</span>
					</div>
					<div class="list-priceinfo">
						<span class="list-qunarprice">¥<i>{{item.qunarPrice}}</i></span>
						<span class="list-priceflag">起</span>
					</div>
					<div class="list-moreinfo">
						<span class="list-text">已售{{item.sales}}</span>
						<div class="list-marketprice ">
							票面价
							<span class="price-notused">{{item.marketPrice}}</span>
						</div>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>

export default {
	props:["ticketList"]
}

</script>


<style scoped>
	.list-item{
		width: 100%;
		display: flex;
		position: relative;
	}
	.list-imgcon{
		margin: .2rem;
		position: relative;
		width: 1.6rem;
		height: 1.6rem;
		background: red;
	}
	.list-productimg{
		width: 1.6rem;
		height: 1.6rem;
	}
	.list-bookingflag{
		
		position: absolute;
		left: -.04rem;
		top: -.04rem;
		height: .24rem;
		line-height: .24rem;
		padding: .02rem;
		background: #00bcd4;
		color: #fff;
	}
	.list-bokkingtext{
		display: block;
		font-size: .24rem;
		-webkit-transform: scale(.83);
		-moz-transform: scale(.83);
		-ms-transform: scale(.83);
		-o-transform: scale(.83);
		transform: scale(.83);
	}
	.list-bookingflag::after{
		content: "";
		position: absolute;
		top: 0;
		right: -.1rem;
		width: 0;
		height: 0;
		border-top: .14rem solid #1ba9ba;
		border-bottom: .14rem solid #1ba9ba;
		border-right: .1rem solid transparent;
	}
	.list-productinfo{
		position: relative;
		padding: .2rem .2rem .2rem 0;
		height: 1.6rem;
		overflow: hidden;
		flex: 1;
	}
	.list-productname{
		line-height: .36rem;
		font-size: .3rem;
		display: -webkit-box;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.list-taglist{
		position: relative;
		overflow: hidden;
		max-height: .58rem;
		padding-top: .06rem;
		line-height: .24rem;
		font-size: 0;
	}
	.list-tagitem{
		padding: 0 .1rem;
		font-size: .24rem;
		color: #00afc7;
	}
	.list-tagitem:first-of-type{
		padding-left: 0; 
	}
	.list-priceinfo{
		position: absolute;
		right: .2rem;
		bottom: .48rem;
		height: .32rem;
		line-height: .32rem;
		color: #9e9e9e;
		text-align: center;
	}
	.list-qunarprice{
		font-size: .22rem;
		font-weight: bold;
		color: #ff8300;
	}
	.list-qunarprice i{
		font-style: normal;
		font-size: .32rem;
		padding-left: .04rem;
	}
	.list-priceflag{
		font-size: .24rem;
		padding-left: .02rem;
	}
	.list-moreinfo{
		position: absolute;
		left: -.1rem;
		bottom: .2rem;
		width: 100%;
		font-size: 0;
		color: #9e9e9e;
	}
	.list-text{
		padding: 0 .1rem;
		font-size: .22rem;
	}
	.list-marketprice{
		position: absolute;
		right: .1rem;
		bottom: 0;
		font-size: .24rem;
	}
	.price-notused{
		text-decoration: line-through;
	}
</style>