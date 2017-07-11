<template>
	<div class="model" v-if="show">
			<div class="model_con">
			    <div class="model_hidden" v-on:click="show = !show">X</div>
				<div class="model_img_wrap"><img src="./imgs/pbg.png"></div>
				<div class="model_detail_wrap"><p class="model_detail">在蜜蜂王国，可以看到形态大小不同的蜂种和硕大罕见的野生大蜜蜂蜂巢，了解“蜜蜂王国”种种引人入胜的生物学特性和社会性行为的奥秘。</p></div>
			</div>

			<!-- <div class="model_btn_wrap">
				<div class="btn_synopsis">简 介</div>
				<div class="btn_showtime">开放时间</div>
				<div class="btn_map">地 图</div>
			</div> -->
	</div>	
</template>

<script>
		export default {
		  data () {
			    return {
			    	show:true
			    }						
		  },
		  props:["models"],
		  mounted(){
			  	
			  	}
		}
</script>


<style scoped>
   
	.model {
		display: block;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 10;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,0.5);
		
	}

	.model_con {
		position: fixed;
		top: 20%;
		left: 5%;
		width: 90%;
		height: 60%;
		background-color: #fefefe;
		border-radius: 0.1rem;
	}
	.model_hidden{
		position: absolute;
		top: 5px;
		right: 10px;
		color: #fefefe;

	}
	.model_img_wrap {
		width: 100%;
		height: 40%;
		overflow: hidden;
		border-radius: 0.1rem 0.1rem 0 0;
		border-bottom: 1px solid #ccc;
	}

	.model_detail_wrap {
		width: 96%;
		height: 56%;
		padding:2%;
		overflow: hidden; 
	}

	.model_detail {
		text-indent: 36px;
		overflow: hidden;
		line-height: 0.5rem;
	}

	.model_btn_wrap {
		position: fixed;
		bottom: 12%;
		left: 10%;
		width: 80%;
		height: 5%;
	}

    .btn_map,
	.btn_synopsis {
		float: left;
		width: 20%;
		height: 80%;
		color: #fefefe;
		font-size: 0.4rem;
		font-weight: normal;
		text-align: center;
		line-height: 0.6rem;
		border-radius: .3rem;
		border:1px solid #fff;
		box-shadow: 0 0 13px -3px #fff inset;
		
	}

	.btn_synopsis {
		margin-left: 5%;
	}

	.btn_map {
		margin-left: 48%;
	}

</style>
