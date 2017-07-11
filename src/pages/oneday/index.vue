<template>
    <div class="main">
        <index-header :data="swiperInfo" :headercity="headercity"></index-header>
        <icons-classify :classify="iconsclassify"></icons-classify>
        <index-spot :spot="spotInfo"></index-spot>
        <city-classify :cityclassify="cityclassify"></city-classify> 
        <index-recommend :recommend="recommendInfo"></index-recommend>
        <view-spot :viewspot="viewspot"></view-spot>  
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
	beforeCreate: function() {
		var currentCitys = "beijing";
		try{
			if(window.localStorage){
				window.localStorage.currentCity = currentCitys;
			}
		}catch(e){}
	},
	created: function(){
        this.$http.get('/static/oneday.json').then(response => {
        	try{
				if(window.localStorage){
					this.currentCity = window.localStorage.currentCity;
				}
			}catch(e){}
            this.swiperInfo = response.body.data.swiperInfo;
            this.spotInfo = response.body.data[this.currentCity].spotInfo;
            this.recommendInfo = response.body.data[this.currentCity].recommendInfo;
            this.iconsclassify = response.body.data.classifyInfo;
		    this.cityclassify = response.body.data.cityInfo;
		    this.viewspot = response.body.data[this.currentCity].viewspotInfo;
		    this.headercity = response.body.data[this.currentCity];
        }, response => {
            console.log("get index data error")
        });
    },
    data () {
        return {
            swiperInfo:[],
            spotInfo:[],
            recommendInfo:[],
            iconsclassify: [],
		    cityclassify: [],
		    viewspot: [],
			headercity: ""
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
