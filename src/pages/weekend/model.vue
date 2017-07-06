<template>
<div class="con_main">
	
		<div class="con_wrap">
			<div class="con_top">
					<img src="./imgs/pbg.png">
			</div>
			<div class="con_bottom">
				    <p class="con_detail">蜂蜜、王浆、蜂花粉、蜂胶、蜂毒、蜂蜡以至蜂体本身，都是宝贵的天然营养品。在乡间，我们经常能看到一个个小小的蜂箱和全副武装的养蜂人。蜂蜜、王浆、蜂花粉、蜂胶、蜂毒、蜂蜡以至蜂体本身，都是宝贵的天然营养品。在乡间，我们经常能看到一个个小小的蜂箱和全副武装的养蜂人。蜂蜜、王浆、蜂花粉、蜂胶、蜂毒、蜂蜡以至蜂体本身，都是宝贵的天然营养品。在乡间，我们经常能看到一个个小小的蜂箱和全副武装的养蜂人。蜂蜜、王浆、蜂花粉、蜂胶、蜂毒、蜂蜡以至蜂体本身，都是宝贵的天然营养品。在乡间，我们经常能看到一个个小小的蜂箱和全副武装的养蜂人。蜂蜜、王浆、蜂花粉、蜂胶、蜂毒、蜂蜡以至蜂体本身，都是宝贵的天然营养品。在乡间，我们经常能看到一个个小小的蜂箱和全副武装的养蜂人。蜂蜜、王浆、蜂花粉、蜂胶、蜂毒、蜂蜡以至蜂体本身，都是宝贵的天然营养品。在乡间，我们经常能看到一个个小小的蜂箱和全副武装的养蜂人。</p>
			</div>
		</div>
		<div class="con_btn">
			<div class="btn_jianjie">简 介</div>
			<div class="btn_map">地 图</div>
		</div>
	
</div>	
</template>

<script>

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  data () {
    return {
     
    }
  },
}
</script>


<style scoped>
   
	.con_main{
		position: fixed;
		top: 0;
		left: 0;
		z-index: 10;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,0.8);
	}
	.con_wrap{
		position: fixed;
		top: 20%;
		left: 5%;
		width: 90%;
		height: 60%;
		background-color: #fefefe;
		border-radius: 0.1rem;
	}
	.con_top{
		width: 100%;
		height: 40%;
		border-bottom: 1px solid #ccc;
		overflow: hidden;
	}
	.con_bottom{
		width: 96%;
		height: 56%;
		padding:2%; 
	}
	.con_detail{
		line-height: 0.5rem;
		overflow: hidden;
	}

	.con_btn{
		position: fixed;
		bottom: 12%;
		left: 10%;
		width: 80%;
		height: 5%;
	}
	.con_btn>div{
		width: 20%;
		height: 80%;
		border:1px solid #fff;
		float: left;
		border-radius: .3rem;
		box-shadow: 0 0 13px -3px #fff inset;
		color: #fefefe;
		font-size: 0.4rem;
		line-height: 0.6rem;
		text-align: center;
	}
	.btn_jianjie{
		margin-left: 5%;
	}
	.btn_map{
		margin-left: 48%;
	}

</style>
