<template>
    <div class="main">
        <index-header :data="swiperInfo" :headercity="recommendInfo"></index-header>
        <icons-classify :classify="recommendInfo"></icons-classify>
        <index-spot :spot="recommendInfo"></index-spot>
        <city-classify :cityclassify="cityclassify"></city-classify>
        <index-recommend :recommend="recommendInfo"></index-recommend>
        <view-spot :viewspot="recommendInfo"></view-spot>
    </div>
</template>

<script>

import header from './header'
import spot from './spot'
import recommend from './recommend'
import iconsclassify from './iconsclassify'
import cityclassify from './cityclassify'
import viewspot from './viewspot'

export default {
	created: function(){
        this.getWeekendData()
   	},
    data () {
        return {
            swiperInfo: [],
            recommendInfo: [],
		    cityclassify: [],
			headercity: "",
			currentCitys:""
        }
    },
    methods:{
    	getWeekendData: function() {
	  		this.$http.get('/static/oneday.json').then(response => {
	  			this.getWeekendDataSucc(response)
			},response => {
			  	console.log("get data Error")
			 })
	  	},
	  	getWeekendDataSucc: function(response) {
	  		this.currentCity = this.$store.state.city;
	        if(!response.body.data[this.currentCity]){
	          this.currentCity="北京";
	        }
	        this.swiperInfo = response.body.data.swiperInfo;
            this.recommendInfo = response.body.data[this.currentCity];
		    this.cityclassify = response.body.data.cityInfo;
	  	}
    },
    components: {
        "index-header": header,
        "index-spot" : spot,
        "index-recommend" : recommend,
        "icons-classify": iconsclassify,
	    "city-classify": cityclassify,
	    "view-spot": viewspot
    }
}
</script>


<style scoped>
  .main{
  	min-height: 100%;
  	background: #f5f5f5;
  }

</style>
