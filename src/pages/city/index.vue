<template>
	<div>
		<city-header :cityInfo="cityInfo" @onSarching="onSarching" @handleInternal="handleInternal" @handleExternal="handleExternal" @noSarching="noSarching"></city-header>
		<city-hot v-if="isShow" :cityHot="cityInfo"></city-hot>
		<city-list v-if="isShow" :cityInfo="cityInfo" :cityLetters="cityLetters"></city-list>
		<city-aside v-if="isShow" :cityLetters="cityLetters"></city-aside>
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
				cityInfo: [],
				cityLetters: [],
				isShow: true
			}
		},
		components: {
			"city-header": cityheader,
			"city-hot": cityhot,
			"city-list": citylist,
			"city-aside": cityaside
		},
		methods: {
			handleInternal: function() {
				this.cityInfo = this.domesticCity;
			},
			handleExternal: function() {
				this.cityInfo = this.overseasCity;
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
			},
			onSarching: function() {
				this.isShow = false;
			},
			noSarching: function() {
				this.isShow = true;
			}
		}
		
	}
	
</script>

<style scoped>
	
</style>