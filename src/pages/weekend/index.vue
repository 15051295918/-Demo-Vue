<template>
	<div class="weekendMain">
		<weekend-header :city="city"></weekend-header>
		<weekend-classify :city="city" :classifyInfo="classifyInfo" :nearScapeInfo="nearScapeInfo" :weekendChosenInfo="weekendChosenInfo"></weekend-classify>
	</div>
</template>

<script>
import header from "./header"
import classify from "./classify"
export default {
	created: function() {
		this.$http.get('/static/weekend.json').then(response =>{
			this.classifyInfo = response.body.data.classifyInfo;
			this.nearScapeInfo = response.body.data.nearScapeInfo;
			this.weekendChosenInfo = response.body.data.weekendChosenInfo;
		}),response => {
			console.log("get weekend data error")
		}
	},
	data () {
	    return {
	      	"city": "上海",
	      	"classifyInfo": [],
	       	"nearScapeInfo": [],
	       	"weekendChosenInfo": []
	    }
	},
  	components:{
  		"weekend-header": header,
  		"weekend-classify": classify
  	}
}
</script>

<style scoped>
.weekendMain{
	position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    min-height: 100%;
    background: #f1f5f6;
}
</style>
