<template>
	<div class="cam-order-main">
		<index-header></index-header>
		<order-content></order-content>
	</div>
</template>

<script>

import header from './header'
import content from './content'

export default {
	created: function(){

    },

	data () {
		return {

		}
	},

	components: {
		"index-header": header,
		"order-content": content
	}
}
</script>


<style scoped>
	.cam-order-main {
		background: #f2f8fb;
		width: 100%;
		min-height: 100%;		
	}

</style>
