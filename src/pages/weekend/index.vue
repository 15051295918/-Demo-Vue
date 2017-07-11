<template>
	<div id="wrapper">
		<div class="weekend-main"  v-on:touchmove="loadMore">
			<weekend-header :city="currentCity"></weekend-header>
			<weekend-classify :city="currentCity" :classifyInfo="classifyInfo" :nearScapeInfo="nearScapeInfo" :weekendChosenInfo="weekendChosenInfo"></weekend-classify>
			<weekend-pinterest :list="Pinterest" :isloading="isloading"></weekend-pinterest>
		</div>
	</div>
</template>

<script>
import header from "./header"
import classify from "./classify"
import pinterest from './pinterest'
import './iscroll.js'
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
		this.getPinterestData()
	},
	data () {
	    return {
	    	"currentCity": "",
	      	"classifyInfo": [],
	       	"nearScapeInfo": [],
	       	"weekendChosenInfo": [],
	       	"Pinterest": [],
	       	"shouldLoadMore": true,
	       	"initScroll": true,
	       	"isloading": false
	    }
	},
  	components: {
  		"weekend-header": header,
  		"weekend-classify": classify,
  		"weekend-pinterest":pinterest,

  	},
  	methods:{
  		getPinterestData: function() {
  			this.$http.get('/static/weekend.json').then(response=>{
				try{
					if(window.localStorage){
						this.currentCity = window.localStorage.currentCity;//取出本地存储的城市名
					}
				}catch(e){}
				this.classifyInfo = response.body.data.recommend[this.currentCity].classifyInfo;
				this.nearScapeInfo = response.body.data.recommend[this.currentCity].nearScapeInfo;
				this.weekendChosenInfo = response.body.data.recommend[this.currentCity].weekendChosenInfo;
				this.currentCity = response.body.data.recommend[this.currentCity].city;
  				for(var i=0, length=response.body.data.pinterest.length; i<length; i++){
  					this.Pinterest.push(response.body.data.pinterest[i])
  				}
  				this.shouldLoadMore = true;
  				if(this.myScroll){
  					var this_=this;
	  				 setTimeout(function () {
				        this_.myScroll.refresh()
				    }, 0)
  				}
  				this.isloading = false;
		  	},response=>{
		  		console.log("get data Error")
		  	})
  		},
  		loadMore: function(e) {
  			var weekendMain=document.getElementsByClassName("weekend-main")[0]
  			var pageHeight = weekendMain.clientHeight;
  			var screenHeight = document.documentElement.offsetHeight;
  			var scrollTop=-1*parseInt(weekendMain.style.transform.split(" ")[1],10)
  			if(pageHeight-screenHeight-scrollTop <= 200&&this.shouldLoadMore){
  				this.getPinterestData();
  				this.shouldLoadMore = false;
  				this.isloading = true;
  			}
  		}
  	},
  	updated: function() {
  		if(this.initScroll){
  			this.myScroll = new IScroll('#wrapper',{
  				checkDOMChanges:true
  			});
  			this.initScroll = false
  		}
  	}
}
</script>

<style scoped>
	#wrapper{
		position: absolute;
		width: 100%;
		height: 100%;
	}
	.weekend-main{
		position: absolute;
	    left: 0;
	    top: 0;
	    width: 100%;
	    min-height: 100%;
	    background: #f1f5f6;
	}
</style>
