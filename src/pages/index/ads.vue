<template>
<<<<<<< HEAD
	<div>
		<div class="ads border-topbottom">
			<div class="ads-item border-right" v-for="(item,index) in ads" :key="index + '_ads_item'">
				<img class="ads-img" :src="item.imgUrl" />
			</div>
=======
	<div class="ads border-topbottom">
		<div class="ads-item border-right" v-for="(item, index) in adsInfo" :key="index + '_ads_item'">
			<img class="ads-img" :src="item.imgUrl">
>>>>>>> origin/master
		</div>
	</div>
</template>

<script>
<<<<<<< HEAD
	export default {
		data () {
			return {
				
			}
		},
		props: ["ads"]
	}
=======
export default {
  data () {
    return {
     	adsInfo:[
     		{
     			imgUrl: "http://img1.qunarzz.com/piao/fusion/1601/29/30427c0e0658b5f7.png",
     			link: ""
     		},{
     			imgUrl: "http://img1.qunarzz.com/piao/fusion/1601/29/30427c0e0658b5f7.png",
     			link: ""
     		}
     	]
    }
  }
}
>>>>>>> origin/master
</script>


<style scoped>
	.ads {
		display: flex;
<<<<<<< HEAD
		background: white;
=======
		background: #fff;
>>>>>>> origin/master
		margin-top: .2rem;
	}
	.ads-item {
		flex: 1;
		height: 0;
		overflow: hidden;
		padding-bottom: 21.5625%;
	}
	.ads-img {
		width: 100%;
	}
</style>
