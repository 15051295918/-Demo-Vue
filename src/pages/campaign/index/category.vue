<template>
  	<div class="category border-bottom">
		<div class="category-item" v-for="(item, index) in category" :key="index + '_category_item'">
			<img class="category-icon" :src="item.imageUrl" />
			<p class="category-font">{{item.title}}</p>
		</div>
	</div>
</template>

<script>

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
	data () {
		return {
			
		}	
	},
	props: ["category"]
}
</script>


<style scoped>
	.category {
		display: flex;
		background: #fff;
		overflow: hidden;
		border-bottom: 0.01rem solid #eaeaea;
		justify-content: space-around;
		align-items: center;
		height:1.92rem;
	}

	.category-item {
		flex: 1;
		text-align: center;
	    padding: .3rem 0;
	}
	
	.category-icon {
		width: .9rem;
		height: .9rem;
		display: inline-block;
	}

	.category-font {
		margin-top: .2rem;
		text-align: center;
		color: #212121;
	}
</style>
