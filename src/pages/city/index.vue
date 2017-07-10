<template>
	<div>
		<city-header :cityInfo="cityInfo" @isSarching="isSarching" @isAbroad="isAbroad"></city-header>
		<city-hot v-if="isShow" :cityHot="cityInfo"></city-hot>
		<city-list v-if="isShow" :cityInfo="cityInfo"></city-list>
		<city-aside v-if="isShow" :cityInfo="cityInfo" @scrollTop="cityScrollTop" :windowScrollTop="windowScrollTop"></city-aside>
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
				cityInfo:[],
				cityLetters: [],
				windowScrollTop:"",
				isShow:true
			}
		},
		components: {
			"city-header": cityheader,
			"city-hot": cityhot,
			"city-list": citylist,
			"city-aside": cityaside
		},
		methods: {
			isAbroad: function(value) {
				if (value) {
					this.cityInfo = this.domesticCity;
				}else{
					this.cityInfo = this.overseasCity;
				}
				
			},
			cityScrollTop:function(value) {
				document.body.scrollTop=value;
			},
			isSarching : function(isShow) {
				if (isShow) {
					this.isShow=true;
				}else{
					this.isShow=false;
				}
			}
		},
		mounted(){
			window.addEventListener('scroll', function () {//想提高性能，可以加一个定时器
                this.windowScrollTop = document.body.scrollTop;
            }.bind(this), false)
     
		}
	}
	
</script>

<style scoped>
	
</style>