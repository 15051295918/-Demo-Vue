<template>
    <div class="main">
        <detail-header :data="swiperInfo"></detail-header>
       	<download></download>
    </div>
</template>

<script>

import header from './header'
import download from './download'

export default {
	created: function(){
		this.$http.get('static/detail.json').then( response=>{
			this.swiperInfo = response.body.data.swiperInfo;
		},response=>{
			console.log("get index data error")
		});
	},
    data () {
        return {
            swiperInfo:[]
        }
    },
    components: {
        "detail-header": header,
        "download": download
	}
}
</script>


<style scoped>
	.main{
		position: absolute;
		left:0;
		top:0;
		width:100%;
		height:100%;
		min-height: 100%;
		background:#f5f5f5;
	}
</style>
