<template>
	<div>
		<city-header @handleInternal="domesticCity" @handleExternal="overseasCity"></city-header>
		<city-hot :cityHot="cityInfo"></city-hot>
		<city-list :cityInfo="cityInfo"></city-list>
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
					this.cityInfo = response.body.data.domestic;
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
				domesticCity: [],
				overseasCity: [],
				cityInfo: [
					{
						"name": "北京",
						"pinyin": "Beijing"
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
			domesticCity: function() {
				alert(123);
				// this.cityInfo = this.domesticCity;
			},
			overseasCity: function() {
				// this.cityInfo = this.overseasCity;
			}
		}
		
	}
	
</script>

<style scoped>
	
</style>