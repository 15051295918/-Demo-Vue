<template>
  	<div class="titket-9-main">
		<div class="app">
			<div class="app-left">
				<img src="http://source.qunarzz.com/site/images/wap/touch/images/v2/images1x/top-logo.png" class="app-logo"/>
			</div>
			<div class="app-name">
				<h2 class="app-name-title">来这看看吧</h2>
				<p class="app-name-ad">超过<span class="app-name-num">2亿</span>人的智慧选择</p>
			</div>
			<div class="app-app">下载客户端</div>
			<div class="app-off">×</div>
		</div>
  	</div>	
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
	.titket-9-main {
		width: 100%;
		height: 1.2rem;
	}
	.app {
		width: 100%;
		height: 1.2rem;
		background: rgba(0, 0, 0, 1);
		position: fixed;
		left: 0;
		top: 0;
	}
	.app-left {
		float: left;
		height: 1.2rem;
		width: 1.2rem;
	}
	.app-logo {
		display: block;
		width: 75%;
		height: 75%;
		margin: 15% 15%;
	}
	.app-name {
		float: left;
		height:1.2rem;
	}
	.app-name-title {
		font-size: .4rem;
		font-weight: 700;
		color: #25A4BB;
		margin:7% 0 3% 2%;
	}
	.app-name-ad {
		color:#fff;
	}
	.app-name-num {
		line-height: .2rem;
		color: #F4B000;
		font-weight: 700;
	}
	.app-app {
		float: left;
		width: 1.6rem;
		height: .72rem;
		background: #F4B000;
		border-radius: .2rem;
		line-height: .72rem;
		text-align: center;
		color: #fff;
		font-size: .24rem;
		font-weight: 700;
		margin: 3% 0 0 12%;
		box-shadow:  0 0.05rem 0 0.01rem  #e58700 ;
	}
	.app-off {
		float: right;
		width: .6rem;
		height: .6rem;
		color: #fff;
		text-align: center;
		line-height: .6rem;
		font-size: .8rem;
	}
</style>