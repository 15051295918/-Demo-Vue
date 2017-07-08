<template>
	<div>
		<city-header :cityHot="cityInfo"></city-header>
		<city-hot :cityHot="cityInfo"></city-hot>
		<city-list :cityInfo="cityInfo" :cityLetters="cityLetters"></city-list>
		<city-aside :cityLetters="cityLetters"></city-aside>
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
					this.getCityFirstLetters();
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
				],
				cityLetters: []
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
			},
			getCityFirstLetters: function() {
				this.cityLetters = [];
				for (var i = 0; i < this.cityInfo.length; i++) {
					var letter = this.cityInfo[i].pinyin.charAt(0);
					if (this.cityLetters.indexOf(letter) == -1) {
						this.cityLetters.push(letter);
					}
				}
				this.cityLetters = this.cityLetters.sort()
			}
		}
		
	}
	
</script>

<style scoped>
	
</style>