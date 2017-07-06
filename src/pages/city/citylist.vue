<template>
	<ul class="city-menu border-leftright">
		<li class="city-list" v-for="item in cityIndex">
			<dl>
				<dt class="city-index border-bottom">{{item}}</dt>
				<dd class="city-item border-bottom">啦啦啦</dd>
				<dd class="city-item border-bottom">啦啦啦</dd>
				<dd class="city-item border-bottom">啦啦啦</dd>
				<dd class="city-item border-bottom">啦啦啦</dd>
			</dl>
		</li>
	</ul>
</template>

<script>
	
	export default {

		data () {
			return {
				cityIndex: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
			}
		}
	}
</script>

<style scoped>
	.city-menu {
		background: #f5f5f5;
	}
	.city-index {
		line-height: .54rem;
		padding-left: .3rem;
		color: #616161;
		font-size: .26rem;
	}
	.city-item {
		line-height: .76rem;
		padding-left: .2rem;
		font-size: .28rem;
		color: #212121;
		background: #fff;
	}
</style>