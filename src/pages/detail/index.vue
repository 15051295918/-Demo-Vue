<template>

    <div class="main">
        <detail-header :data="swiperInfo"></detail-header>
        <introduction :data="addressInfo"></introduction>
       	<download></download>
        <detail-comment :data="commentInfo" :dataImg="commentImg"></detail-comment>
        <detail-recommended :data="recommendedInfo"></detail-recommended>
        <detail-footer></detail-footer>
    </div>

</template>

<script>
import header from './header'
import download from './download'
import address from './address'
import comment from './comment'
import recommended from './recommended'
import footer from './footer'

export default {
	created: function(){
		this.$http.get('static/detail.json').then( response=>{
			if(response.body.ret){
                console.log(response.body)
				this.swiperInfo = response.body.data.swiperInfo;
				this.addressInfo = response.body.data.addressInfo;
                this.recommendedInfo= response.body.data.recommendedInfo;
                this.commentInfo=response.body.data.commentInfo;
                this.commentImg=response.body.data.commentImg;
                console.log(this.commentImg)
			}
		},response=>{
			console.log("get detail data error")
		});
		
	},
    data () {
        return {
            swiperInfo:[],
            addressInfo:[],
            recommendedInfo:[],
            commentInfo:[],
            commentImg:[]
        }
    },
    components: {
        "detail-header": header,
        "download": download,
        "introduction": address,
        "detail-comment":comment,
        "detail-recommended":recommended,
        "detail-footer": footer
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

