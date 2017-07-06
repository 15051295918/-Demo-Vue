<template>
	<swiper :options="swiperOption" ref="mySwiper">
		<!-- slides -->
		<swiper-slide>I'm Slide 1</swiper-slide>
		<swiper-slide>I'm Slide 2</swiper-slide>
		<swiper-slide>I'm Slide 3</swiper-slide>
		<swiper-slide>I'm Slide 4</swiper-slide>
		<!-- Optional controls -->
		<div class="swiper-pagination" slot="pagination"></div>
	</swiper>
</template>

<script>
// swiper options example:
export default {
	name: 'carrousel',
	data() {
		return {
			swiperOption: {
				autoplay: 3000,
				autoHeight: true,
				pagination: '.swiper-pagination'
			},
			swiperInfo:[{}]
		}
	},
	// you can find current swiper instance object like this, while the notNextTick property value must be true
	// 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
	computed: {
		swiper() {
			return this.$refs.mySwiper.swiper
		}
	},
	mounted() {
		// you can use current swiper instance object to do something(swiper methods)
		// 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
		console.log('this is current swiper instance object', this.swiper)
		this.swiper.slideTo(3, 1000, false)
	}
}
</script>

<style>

</style>
