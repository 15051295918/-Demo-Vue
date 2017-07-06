<template>
<div>
	<div class="cityheader">
		<div class="cityKey"></div>
		<h1 class="cityheader-tit">
			<div class="city-tab" >
				<span class="header-city" @click="handleCountryChina" :class="{china:bgChina}">国内</span>
				<span class="header-city" @click="handleCountrySea" :class="{sea:bgsea}">海外</span>
			</div>			
		</h1>
		
	</div>
	<div class="header-keyword">
		<input v-model="value" type="text" @focus="handleInputFocus" @blur="handleInputBlur" :placeholder="placeholder" class="city-keyword" :class="{text:textalign}">
	
	</div>
	<ul class="key-city-ul" v-if="list">
		<li class="key-city-list border-bottom">大哥你在家呆着呗</li>
	
	</ul>
</div>
	
</template>

<script>
export default {
	data() {
		return {
			value : "",
			list : false,
			bgChina : true,
			bgsea : false,
			placeholder : "输入城市名或拼音",
			textalign : true
		}
	},
	methods : {
		handleInputFocus : function(){
				this.placeholder = "";
				this.textalign = false;
		},
		handleInputBlur : function(){
			console.log(this.placeholder)
			this.placeholder = "输入城市名或拼音";
			this.textalign = true;
		},
		handleCountryChina : function(){
			this.bgChina = true;
			this.bgsea = false;
		},
		handleCountrySea : function() {
			this.bgChina = false;
			this.bgsea = true;
		}		
	},
	  watch: {
	    value: function () {
	    	if (this.value) {
	    		this.list = true;
	    	}else{
	    		this.list = false;
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
   
}
.text{
	text-align: center;
}
.china{
	background: #fff;
	color: #00afc7;
}
.sea{
	background: #fff;
	color: #00afc7;
}
.key-city-ul{
	background: #fff
}
.key-city-list{
    line-height: .76rem;
    padding-left: .2rem;
    font-size: .28rem;
    color: #212121;
    background: #fff;
}
</style>