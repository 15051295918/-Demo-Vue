<template>

	<div class="city-classify">
		<div class="city-top">
			<p class="city-popular"><span></span>热门城市</p><p class="city-total">全部城市 &gt;</p>
		</div>
		<div class="city-wrapper" v-for="(item, index) in cityclassify" :key="'index'+ '_cityclassify'">
			<p class="city-title">{{item.title}}</p>
		</div>
	</div>

</template>

<script>

export default {

  data () {
    return {
    	
    	
    }
  },
  props:['cityclassify']

}
</script>

<style scoped>
    .city-classify{
    	margin-top: .2rem; 
        height:2.56rem;
       background: white;
    }
	.city-wrapper{
		padding-top: .1rem;
		overflow:hidden;
		width:25%;
		float:left;
	}
	
	.city-title{
		display: block;
		margin: .06rem;
		height: .6rem;
		line-height: .6rem;
		font-size: .28rem;
		color: #212121;
		background: #f0fbfd;
		border-radius: 2px; 
		text-align: center;
	}
	.city-top{
		height: .84rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		
	}
	.city-popular{
		margin-left: .2rem; 
	}
	.city-total{
		margin-right: .2rem; 
	}

</style>
