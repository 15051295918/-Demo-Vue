<template>
	<div class="weekend-main">
		<weekend-header :city="currentCity"></weekend-header>
		<weekend-classify :city="currentCity" :classifyInfo="classifyInfo" :nearScapeInfo="nearScapeInfo" :weekendChosenInfo="weekendChosenInfo"></weekend-classify>
		<weekend-pinterest :list="Pinterest"></weekend-pinterest>
	</div>
</template>

<script>
import header from "./header"
import classify from "./classify"
import pinterest from './pinterest'
export default {
	beforeCreate: function() {//模拟localStorage存储的城市名(汉语拼音形式)
		var currentCitys = "beijing";
		try{
			if(window.localStorage){
				window.localStorage.currentCity = currentCitys;
			}
		}catch(e){}
	},
	created: function() {
		this.$http.get('/static/weekend.json').then(response =>{
			try{
				if(window.localStorage){
					this.currentCity = window.localStorage.currentCity;//取出本地存储的城市名
				}
			}catch(e){}
			this.classifyInfo = response.body.data[this.currentCity].classifyInfo;
			this.nearScapeInfo = response.body.data[this.currentCity].nearScapeInfo;
			this.weekendChosenInfo = response.body.data[this.currentCity].weekendChosenInfo;
			this.currentCity = response.body.data[this.currentCity].city;
		}),response => {
			console.log("get weekend data error")
		}
		this.$http.get('/static/weekend1.json').then(response=>{
  			this.Pinterest=response.body.data.pinterest;
	  	},response=>{
	  		console.log("get data Error")
	  	})
	},
	data () {
	    return {
	    	"currentCity":"",
	      	"classifyInfo": [],
	       	"nearScapeInfo": [],
	       	"weekendChosenInfo": [],
	       	 "Pinterest":[]
	    }
	},
  	components: {
  		"weekend-header": header,
  		"weekend-classify": classify,
  		"weekend-pinterest":pinterest
  	}
}
</script>

<style scoped>
	.weekend-main{
		position: absolute;
	    left: 0;
	    top: 0;
	    width: 100%;
	    min-height: 100%;
	    background: #f1f5f6;
	}
</style>
