<template>
	<div>
		<div class="ads border-topbottom">
			<div class="ads-item border-right" v-for="(item,index) in ads" :key="index + '_ads_item'">
				<img class="ads-img" :src="item.imgUrl" />
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				
			}
		},
		props: ["ads"]
	}
</script>


<style scoped>
	.ads {
		display: flex;
		background: white;
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
