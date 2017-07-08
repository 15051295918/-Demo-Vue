<template>
<<<<<<< HEAD
	<div>
        <index-footer></index-footer>
	</div>

=======
    <div class="main">
        <detail-header :data="swiperInfo"></detail-header>
        <introduction :data="addressInfo"></introduction>
       	<download></download>
    </div>
>>>>>>> e3747f60db793bc72d06920b3a288bd9babf6afe
</template>

<script>

<<<<<<< HEAD
    import footer from './footer'


    export default {
        created: function(){

        },
        data () {
            return {

            }
        },
        components: {
            "index-footer": footer

        }
    }
</script>

<style scoped>




</style>
=======
import header from './header'
import download from './download'
import address from './address'

export default {
	created: function(){
		this.$http.get('static/detail.json').then( response=>{
			if(response.body.ret){
				this.swiperInfo = response.body.data.swiperInfo;
				this.addressInfo = response.body.data.addressInfo;
			}
		},response=>{
			console.log("get detail data error")
		});
		
	},
    data () {
        return {
            swiperInfo:[],
            addressInfo:[]
        }
    },
    components: {
        "detail-header": header,
        "download": download,
        "introduction": address
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
>>>>>>> e3747f60db793bc72d06920b3a288bd9babf6afe
