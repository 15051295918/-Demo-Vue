<template>
		<header class="header">
			<a class="header-left"><span class="back"></span></a>
			<div class="header-title">
				<a class="linkarea" title="北京" href="#">
					<i class="icon-search"></i>
					<span class="single-line">输入城市/景点/游玩主题</span>
				</a>
			</div>
			<div class="header-right">
				<a href="#" title="城市选择" class="linkarea">
					<span class="nav-city">北京</span>
				</a>
			</div>
		</header>
</template>

<script>
export default {
	data() {
		return {

		}
	}
}
</script>

<style scoped>
.header {
	width:100%;
	height:.44rem;
	background: #00bcd4;	
	font-size: .14rem;
}
.header-left{
	float:left;
	width:.2rem;
	height:100%;
	padding:.15rem .1rem;
}
.back{
	display: block;
	width:.1rem;
	height:.1rem;
	border-left: .02rem solid white;
	border-top: .02rem solid white;
	transform: rotate(-45deg);
}
.header-title{
	box-sizing: border-box;
	float:left;	
	width:3.08rem;
	height:.3rem;
	background: #fff;
	border-radius: .03rem;
	line-height: .3rem;
	margin: .07rem 0;
}
.header-title .linkarea{
	color: #e4e7ea;
}
.header-right{
	float: right;
	height:100%;
	line-height: 100%;
	
}
.header-right .linkarea{
	display: block;
	height:.44rem;
	padding-right: .2rem;
	line-height: .44rem;
	color: #fff;
}
.header-right .linkarea i{
	display: block;
	width:0;
	height:0;
	border-top:1rem solid #fff;
}
</style>
