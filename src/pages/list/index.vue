<template>
	<div class="main-list">
		<!-- <list-header></list-header> -->
		<!-- <navigation></navigation> -->
		<list-lists></list-lists>
	</div>
</template>

<script>

	import header from "./header";
	import navigation from './navigation';
	import lists from './lists.vue'

	export default {
		data () {
			return {

			}
		},
		components: {
			"list-header": header,
    		"navigation": navigation,
			"list-lists": lists
		}
	}

</script>
	

<style scoped>
	.main-list{
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		min-height: 100%;
		background: #f5f5f5;
	}
</style>
