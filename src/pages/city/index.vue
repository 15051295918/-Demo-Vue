<template>
	<div>
		<city-header></city-header>
		<city-hot :cityHot="domesticCity"></city-hot>
		<city-list :cityInfo="domesticCity"></city-list>
		<city-aside></city-aside>
	</div>
</template>

<script>
	import cityheader from "./cityheader" 
	import cityhot from "./cityhot" 
	import citylist from "./citylist" 
	import cityaside from "./cityaside" 

	export default {
		created: function() {
			this.$http.get("/static/city.json").then(response => {
				if(response.body.ret) {
					this.domesticCity = response.body.data.domestic;
					this.overseasCity = response.body.data.overseas;
				}else {
					console.log("Invalid data!");
				}
			}, response => {
				console.log("get city data err!");
			}); 
		},

		data() {
			return {
				domesticCity: [
					{
						"name": "北京",
						"pinyin": "Beijing"
					}
				],
				overseasCity: [
					{
						"pinyin": "HN",
						"name": "洪都拉斯"
					}
				]
			}
		},
		components: {
			"city-header": cityheader,
			"city-hot": cityhot,
			"city-list": citylist,
			"city-aside": cityaside
		},
		methods: {
			
		}
		
	}
	
</script>

<style scoped>
	
</style>