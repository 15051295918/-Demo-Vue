<template>
	<div class="main">
		<header-component></header-component>
		<sweiper-conponent></sweiper-conponent>
	</div>
</template>

<script>
	import header from "./header";
	import swiper from "./swiper";

	export default {
		data() {
			return {
				
			}
		},
		components: {
			'header-component':header,
			'sweiper-conponent':swiper
		}
	}
</script>

<style scoped>

</style>
