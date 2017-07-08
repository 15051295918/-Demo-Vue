<template>

    <div class="main">
        <detail-header :data="swiperInfo"></detail-header>
        <introduction :data="addressInfo"></introduction>
        <recommend :data="recommendInfo"></recommend>
        <index-footer></index-footer>
       	<download></download>
    </div>
</template>

<script >
	
import header from './detail_header'
import download from './download'
import address from './address'
import recommend from './recommend'
import footer from './footer'

export default {
	created: function(){
		this.$http.get('static/detail.json').then( response=>{
			if(response.body.ret){
				this.swiperInfo = response.body.data.swiperInfo;
				this.addressInfo = response.body.data.addressInfo;
				this.recommendInfo = response.body.data.recommendInfo;
			}
		},response=>{
			console.log("get detail data error")
		});
		
	},
    data () {
        return {
            swiperInfo:[],
            addressInfo:[],
            recommendInfo:[]
        }
    },
    components: {
        "detail-header": header,
        "download": download,
        "introduction": address,
        "recommend": recommend,
        "index-footer": footer
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
