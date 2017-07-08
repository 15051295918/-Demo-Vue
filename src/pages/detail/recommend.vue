<template>
	<div class="recommend">
		<div class="recommend-title">来这儿推荐</div>
		<div class="recommend-content border-top" v-for="(item,index) in data" :key="index + 'recomment'">
			<div class="recommentContent-title border-right" >
				<div class="title">{{item.title}}</div>
				<span class="noshpping">{{item.item_one}}</span>
				<span>{{item.item_two}}</span>
			</div>
			<div class="check">
				<button class="check-btn">查看</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props:["data"]
	}
</script>

<style scoped>
	.recommend{
		background:#fff;
		margin-bottom:.2rem;
	}
	.recommend-title{
		height: .88rem;
		line-height: .88rem;
		text-indent: .7rem;
		font-size: .32rem;
	}
	.recommend-content{
		display: flex;
		padding: .2rem .2rem .24rem .24rem;
	}
	.recommentContent-title{
		width:70%;
	}
	.title{
		margin-bottom:.2rem;
		font-size: .32rem;
	}
	.noshpping{
		margin-right:.2rem;
	}
	.check{
		width:30%;
		text-align: center;
	}
	.check-btn{
		width:1.6rem;
		height:0.6rem;
		text-align: center;
		line-height: .6rem;
		background: orange;
		border:none;
		border-radius: .1rem;
		color:#fff;
	}
</style>