<template>
    <div class="main">
		<index-header></index-header>
		 <imgs-swiper :data="swiperInfo"></imgs-swiper>
        <icons-swiper :icons="iconInfo" :recommends="recommendInfo"></icons-swiper>	
    </div>
</template>

<script>

import header from './header'
import imgswiper from './imgswiper'
import iconswiper from './iconswiper'


export default{
	created: function(){
        this.$http.get('/static/index.json').then(response => {
            this.swiperInfo = response.body.data.swiperInfo;
            this.iconInfo = response.body.data.iconInfo;
            this.recommendInfo = response.body.data.recommendInfo;
        }, response => {
            console.log("get index data error")
        });
    },
	data(){
		return{
			swiperInfo: [],
            iconInfo: [],
            recommendInfo: []  
		}
	},
	components:{
		"index-header":header,
		"imgs-swiper": imgswiper,
        "icons-swiper": iconswiper
	}
}



</script>


<style scoped>
  

</style>

