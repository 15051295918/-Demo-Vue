<template>
	<div>
		<city-header></city-header>
		<city-hot :citys="cityInfo"></city-hot>
		<city-list></city-list>
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
				this.cityInfo = response.body;
				// console.log(response.body);
			}, response => {
				console.log("get city data err!")
			}); 
		},

		data() {
			return {
				cityInfo: []
			}
		},
		components: {
			"city-header": cityheader,
			"city-hot": cityhot,
			"city-list": citylist,
			"city-aside": cityaside
		}
		
	}
	
</script>

<style scoped>
	
</style>