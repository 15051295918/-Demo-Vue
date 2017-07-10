<template>
	<div class="ads">
		<div class="ads-item" v-for="(item, index) in adsInfo" :key="index"><img class="ads-img " :src="item.imgUrl"></div>
	</div>
</template>

<script>
export default {
  data () {
  	return {
  		adsInfo:[{
  			imgUrl: "http://img1.qunarzz.com/piao/fusion/1601/29/30427c0e0658b5f7.png",
  			link: ""
  		},{
  			imgUrl: "http://img1.qunarzz.com/piao/fusion/1601/29/30427c0e0658b5f7.png",
  			link: ""
  		}]
  	}
  }
}
</script>

<style scoped>
	.ads{
		display: flex;
		background: #fff;
		margin-top: .2rem;
	}
	.ads-item{
		flex: 1;
		height: 0;
		padding-bottom: 21.5625%;
		overflow: hidden;
	}
	.ads-img{
		width: 100%;
	}
	.ads-item:nth-child(1){
		border-right: .02rem solid #e0e0e0;
	}
</style>
