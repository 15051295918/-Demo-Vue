<template>
<<<<<<< HEAD

    <div class="main">
		<topBar></topBar>
=======
    <div class="main" >
>>>>>>> b16a2c93a0c1fa9808442181c26806963b7665d4
        <detail-header :data="swiperInfo"></detail-header>
        <introduction></introduction>
        <recommend :data="recommendInfo"></recommend>
        <product :data="productInfo"></product>
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
import recommend from './recommend'
import comment from './comment'
import recommended from './recommended'
import footer from './footer'
<<<<<<< HEAD
import topBar from './topBar'
=======
import product from './product'
>>>>>>> b16a2c93a0c1fa9808442181c26806963b7665d4

export default {
	created: function(){
		this.$http.get('static/detail.json').then( response=>{
			if(response.body.ret){
				this.swiperInfo = response.body.data.swiperInfo;
				this.recommendInfo = response.body.data.recommendInfo;
				this.productInfo = response.body.data.productInfo;
                this.recommendedInfo= response.body.data.recommendedInfo;
                this.commentInfo=response.body.data.commentInfo;
                this.commentImg=response.body.data.commentImg;
			}
		},response=>{
			console.log("get detail data error")
		});
		
	},
    data () {
        return {
            swiperInfo:[],
            recommendInfo:[],
            productInfo:[],
            recommendedInfo:[],
            commentInfo:[],
            commentImg:[]
        }
    },
    components: {
        "detail-header": header,
        "download": download,
        "introduction": address,
        "recommend": recommend,
        "product": product,
        "detail-comment":comment,
        "detail-recommended":recommended,
        "detail-footer": footer,
		"topBar": topBar
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

