<template>
    <div class="header">
    	<div class="header-title">
  			<span class="single-line">[北京出发]天安门＋故宫【赠送珍宝馆】...</span>
  			<span class="header-city">x</span>
  		</div>
  		<div class="header-price"><i class="header-money"><em class="header-fuhao">￥</em>228</i>
  			<span class="header-pt">起/份 <em class="header-font">票面价268</em></span>
  		</div>
    </div>
</template>

<script>


export default {
   
    data () {
        return {
             
        }
    },
    components: {
        
    }
}
</script>


<style scoped>
.header-title{
	  padding: .3rem 0 .1rem 0;
	  font-size: .34rem;
	  line-height: .4rem;
	}
.single-line{
	margin-left:.15rem;
	font-size: .34rem;
	}
.header-city{
	width:.3rem;
	height:.3rem;
	border-radius:50%;
	border:.04rem solid #ccc;
    position: absolute;
    top:.3rem;
    right:.3rem;
    color: #a4a4a4;
    font-size: .3rem;
    line-height:.28rem;
    text-align: center;
	}
.header-price{
	padding:0 .2rem;
}
.header-money{
	color:#ff8300;
	margin-left: .06rem;
    font-size: .36rem;
}
.header-fuhao{
	font-size:.24rem;
}
.header-pt{
	color: #9e9e9e;
    font-size: .24rem;
}
.header-font{
	text-decoration: line-through;
}

	
</style>