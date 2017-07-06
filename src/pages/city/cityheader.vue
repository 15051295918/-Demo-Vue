<template>
<div>
	<div class="cityheader">
		<div class="cityKey"></div>
		<h1 class="cityheader-tit">
			<div class="city-tab" >
				<span class="header-city">国内</span>
				<span class="header-city" :style="cityActive">海外</span>
			</div>			
		</h1>
		
	</div>
	<div class="header-keyword">
		<input type="text" placeholder="输入城市名或拼音" class="city-keyword" style="text-align: center;">
	</div>
</div>
	
</template>

<script>
export default {
	data() {
		return {
			cityActive : {
					"background" : "#fff",
					'color' : "#00afc7"
				}
		}
	}
}

	
</script>

<style scoped>
.cityheader{
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    height: .88rem;
    width: 100%;
    background: #00afc7;
    color: #fff;
    z-index: 100;
}
.cityKey{
	transform: rotateZ(45deg);
	width: .24rem;
	height: .24rem;
	border-left: .04rem solid #fff;
	border-bottom: .04rem solid #fff;
	margin: .3rem .3rem;
}
.cityheader-tit{
    box-sizing: border-box;
    flex: 1;
    position: relative;
    text-align: center;

}
.header-city{
    display: inline-block;
    width: 2rem;
    height: .56rem;
    line-height: .56rem;
    margin-top: .15rem;
    background: #00afc7;
    font-size: .28rem;
    border: .02rem solid #fff;
}
.header-city:first-of-type {
    border-radius: .06rem 0 0 .06rem;
}
.header-city:last-of-type {
    border-radius: 0 .06rem .06rem 0;
}
.city-tab{
    display: inline-block;
    margin-left: -.42rem;
    font-size: 0;
}
.header-keyword {
    margin-top: .88rem;
    padding: 0 .2rem .1rem .2rem;
    background: #00afc7;
    font-size: .26rem;
    color: #9e9e9e;
}
.city-keyword {
    display: block;
    width: 100%;
    height: .3rem;
    line-height: .3rem;
    padding: .16rem 0 .16rem .1rem;
    background: #fff;
    border: 0;
    -webkit-border-radius: .06rem;
    -moz-border-radius: .06rem;
    border-radius: .06rem;
    text-align: center;
}

</style>