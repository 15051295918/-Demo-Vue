<template>
<<<<<<< HEAD
    <div class="main" >
        <detail-header :data="swiperInfo"></detail-header>
        <introduction></introduction>
        <recommend :data="recommendInfo"></recommend>
        <product :data="productInfo"></product>
        <index-footer></index-footer>
=======

    <div class="main">
        <detail-header :data="swiperInfo"></detail-header>
        <introduction :data="addressInfo"></introduction>
>>>>>>> 17f4939368a84a6e325377bff0c639753f61af74
       	<download></download>
        <detail-comment :data="commentInfo" :dataImg="commentImg"></detail-comment>
        <detail-recommended :data="recommendedInfo"></detail-recommended>
        <detail-footer></detail-footer>
    </div>

</template>
<script >
	
import header from './detail_header'
import download from './download'
import address from './address'
<<<<<<< HEAD
import recommend from './recommend'
=======
import comment from './comment'
import recommended from './recommended'
>>>>>>> 17f4939368a84a6e325377bff0c639753f61af74
import footer from './footer'
import product from './product'

export default {
	created: function(){
		this.$http.get('static/detail.json').then( response=>{
			if(response.body.ret){
                console.log(response.body)
				this.swiperInfo = response.body.data.swiperInfo;
<<<<<<< HEAD
				this.recommendInfo = response.body.data.recommendInfo;
				this.productInfo = response.body.data.productInfo;
=======
				this.addressInfo = response.body.data.addressInfo;
                this.recommendedInfo= response.body.data.recommendedInfo;
                this.commentInfo=response.body.data.commentInfo;
                this.commentImg=response.body.data.commentImg;
                console.log(this.commentImg)
>>>>>>> 17f4939368a84a6e325377bff0c639753f61af74
			}
		},response=>{
			console.log("get detail data error")
		});
		
	},
    data () {
        return {
            swiperInfo:[],
<<<<<<< HEAD
            recommendInfo:[],
            productInfo:[]
=======
            addressInfo:[],
            recommendedInfo:[],
            commentInfo:[],
            commentImg:[]
>>>>>>> 17f4939368a84a6e325377bff0c639753f61af74
        }
    },
    components: {
        "detail-header": header,
        "download": download,
        "introduction": address,
<<<<<<< HEAD
        "recommend": recommend,
        "index-footer": footer,
        "product": product
=======
        "detail-comment":comment,
        "detail-recommended":recommended,
        "detail-footer": footer
>>>>>>> 17f4939368a84a6e325377bff0c639753f61af74
	}
}
</script>


<style scoped>
	.main{
		position: absolute;
		left:0;
		top:0;
		width:100%;
		min-height: 100%;
		background:#f5f5f5;
	}
</style>

