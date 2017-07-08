<template>
	<div class="weekend-main">
		<weekend-header :city="city"></weekend-header>
		<weekend-classify :city="city" :classifyInfo="classifyInfo" :nearScapeInfo="nearScapeInfo" :weekendChosenInfo="weekendChosenInfo"></weekend-classify>
		<weekend-pinterest :list="Pinterest"></weekend-pinterest>
	</div>
</template>

<script>
import header from "./header"
import classify from "./classify"
import pinterest from './pinterest'
export default {
	created: function() {
		this.$http.get('/static/weekend.json').then(response =>{
			this.classifyInfo = response.body.data.classifyInfo;
			this.nearScapeInfo = response.body.data.nearScapeInfo;
			this.weekendChosenInfo = response.body.data.weekendChosenInfo;
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
	      	"city": "上海",
	      	"classifyInfo": [],
	       	"nearScapeInfo": [],
	       	"weekendChosenInfo": [],
	       	 Pinterest:[]
	    }
	},
  	components:{
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
