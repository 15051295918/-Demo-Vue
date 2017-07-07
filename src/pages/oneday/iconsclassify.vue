<template>

		    	<div class="icons-classify">
		    		<div class="icon-wrapper" v-for="(item, index) in classify" :key="'index'+ '_iconsclassify'">
		    			<img class="icon-img" :src="item.imgUrl">
		    			<p class="icon-title">{{item.title}}</p>
		    		</div>
		    	</div>

</template>

<script>

export default {

  data () {
    return {
    	
    	swiperOption: { 

          direction : 'horizontal',
          autoHeight: true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
        }
    }
  },
  props:['classify']

}
</script>

<style scoped>
    .icons-classify{
    	background: white;
        height:2.36rem;
      
    }
	.icon-wrapper{
		padding-top: .4rem;
		overflow:hidden;
		width:20%;
		float:left;
	}
	.icon-img{
		width: 1.1rem;
		display:block;
		margin: 0 auto;
	}
	.icon-title{
		margin-top: .15rem;
		text-align:center;
		color:#212121;
		font-size:.28rem;
	}

</style>
