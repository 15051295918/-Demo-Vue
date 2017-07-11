<template>
    <div class="header">
    	<div class="header-title">
  			<span class="single-line">{{text}}</span>
  		</div>
		  <div @click="handleClick"  class="single-big">
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
			"text":"[北京出发]天安门＋故宫【赠送珍宝馆】＋八达岭长城＋鸟巢·水立方一日游",
			show:false
        }
    },
    components: {
        
    },
	methods:{
		handleClick: function() {
			this.$emit("close");
		}
	}
}
</script>


<style scoped>
.header{
  padding-bottom:.3rem;
  overflow:hidden;
}
.header-title{
	display: block;
	margin-right: .6rem;
    padding: .3rem 0 .1rem .2rem;
    font-size: .34rem;
    line-height: .4rem;
	}
.single-line{
	display: block;
	width: 320px;
	overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
	font-size: .34rem;
    line-height: .4rem;
	}
.single-big{
	position: absolute;
    top:0;
	right: 0;
	float: right;
	display: block;
	padding: .3rem;
}
.header-city{
	display: block;
	width:.3rem;
	height:.3rem;
	border-radius:50%;
	border:.04rem solid #ccc;
    color: #a4a4a4;
    font-size: .3rem;
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