<template>
	<div class="addressInfo">
		<div class="address border-bottom" v-for="item in data">
			<p class="address-txt">{{item.address}}</p>
		</div>
		<div class="address-score"></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props:["data"]
	}
</script>
<style>
	.addressInfo{
		margin-top:4.2rem;
	}
	.address{
		width:100%;
		height:.88rem;
		color:#212121;
		background:#fff;
		line-height: .88rem;
	}
	.address-txt{
		margin-left:0.4rem;
	}
	.address-score{
		width:100%;
		height: .88rem;
		margin-top:.2rem;
		background:#fff;
	}
</style>