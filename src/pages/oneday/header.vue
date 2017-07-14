<template>
	<div class="header">
		<a class="header-left iconfont" @click="handleClickBack">&#xe657;</a>
		<h1 class="header-title">
			<input class="search-input" type="text" placeholder="输入城市或景点">
			<a class="search-delete"></a>
		</h1>
		<span class="header-right">搜索</span>
	</div>
</template>

<script>



export default {
	methods:{
		handleClickBack() {
			this.$router.go(-1)
		}
	}
}

</script>


<style scoped>
	.header{
		display: flex;
		background: #00bcd4;
		height: .88rem;
		text-align: center;
		color: #fff;
	}
	.header-left{
	    display: inline-block;
	    width: .4rem;
	    line-height: .88rem;
	    padding: 0 .2rem;
	    color: #fff;
	    font-size: .36rem;
	    text-align: left;

	}
	.header-title{
		flex: 1;
		position: relative;
		height: .6rem;
		margin: .14rem 0;
		background: #fff;
		line-height: .6rem;
		border-radius: .06rem;
		box-sizing: border-box;
		padding: 0 .6rem 0 .2rem;
	}
	.search-input{
		display: block;
		width: 100%;
		height: .4rem;
		line-height: .4rem;
		padding: .1rem 0;
		border: 0;
		font-family: "Microsoft Yahei",Arial;
		font-size: .28rem;
		border-radius: .06rem;
	}
	.search-delete{
		display: none;
		position: absolute;
		top: .04rem;
		right: 0;
		width: .58rem;
		height: .58rem;
		background-size: 3rem 3rem;
	}
	.header-right{
		display: inline-block;
		width: .74rem;
		margin-right: .04rem;
		color: #fff;
		font-size: .28rem;
		height: .88rem;
		line-height: .88rem;
		padding: 0 .1rem;
	}
</style>
