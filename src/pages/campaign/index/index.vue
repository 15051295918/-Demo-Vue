<template>
	<div class="campaign-main">
		<index-header></index-header>
		<imgs-swiper :data="swiperInfo"></imgs-swiper>
		<category :category="categoryInfo"></category>
		<broadcast :broadcast="broadcastInfo"></broadcast>	
	</div>
</template>

<script>

import header from './header'
import imgswiper from './imgswiper'
import category from './category'
import broadcast from './broadcast'

export default {

	created: function(){
        this.$http.get('/static/campaign/index.json').then(response => {
            this.swiperInfo = response.body.data.swiperInfo;
            this.categoryInfo = response.body.data.categoryInfo;
        }, response => {
            console.log("get index data error")
        });

        this.$http.get('/static/campaign/announces.json').then(response => {
            this.broadcastInfo = response.body.data.announceInfo;
        }, response => {
            console.log("get index data error")
        });
    },

	data () {
		return {
			swiperInfo: [],
			categoryInfo: [],
			broadcastInfo: []
		}
	},

	components: {
		"index-header": header,
		"imgs-swiper": imgswiper,
		"category": category,
		"broadcast": broadcast
	}

}
</script>


<style scoped>
	.campaign-main {
		background: #F3F3F3;
		overflow: hidden;
		height: flex;
	}

</style>
