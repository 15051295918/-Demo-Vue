<template>
	<div class="header">
		<a class="header-left" @click="handleBack">
			<div class="header-return"></div>
		</a>
		<h1 class="header-title">
			<input type="text" placeholder="输入城市或景点" v-model="value" class="search-input" @focus="handleFocus" @keyup="handleKeyup">
			<a class="search-delete" v-show="delInp" @click="handleDelInp">X</a>
		</h1>
		<span class="header-right">
			<a class="search-submit" @click="handleClickSearch">搜索</a>
		</span>
	</div>
</template>

<script>

export default {
	data() { 
		return {
			value: "一日游",
			delInp: false
		}
	},
	methods: {
		handleBack() {
			window.history.back();
		},
		handleFocus() {
			if(this.value != '') {
				this.delInp = true;
			}
		},
		handleKeyup() {
			if(this.value != '') {
				this.delInp = true;
			}else{
				this.delInp = false;
			}
		},
		handleDelInp() {
			this.value = "";
			this.delInp = false;
		},
		handleClickSearch() {
			//window.location.reload();
		}
	}
}

</script>


<style scoped>
	.header {
		position: relative;
	    display: -webkit-box;
	    display: -moz-box;
	    display: -ms-flexbox;
	    display: box;
	    width: 100%;
	    height: .88rem;
	    background: #00bcd4;
	    text-align: center;
	    color: #fff;
	}
	.header-left {
	    display: inline-block;
	    width: .4rem;
	    line-height: .88rem;
	    padding: 0 .2rem;
	    color: #fff;
	    font-size: .36rem;
	    text-align: left;
	}
	.header-return {
		width: .25rem;
		height: .25rem;
		margin: .25rem .1rem;
		border: .03rem solid transparent;
		border-left-color: #fff;
		border-bottom-color: #fff;
		transform: rotate(45deg);
	}
	.header-title {
		padding: 0 .6rem 0 .2rem;
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;
	    box-flex: 1;
	    -webkit-box-flex: 1;
	    -moz-box-flex: 1;
	    -ms-flex: 1;
	    position: relative;
	    height: .6rem;
	    margin: .14rem 0;
	    background: #fff;
	    line-height: .6rem;
	    border-radius: .06rem;
	}
	.search-input {
	    position: relative;
	    display: block;
	    width: 100%;
	    height: .4rem;
	    line-height: .4rem;
	    padding: .1rem 0;
	    border: 0;
	    font-family: "Microsoft Yahei",Arial;
	    font-size: .28rem;
	    border-radius: .06rem
	}
	.search-delete {
	    position: absolute;
	    top: .09rem;
	    right: 0;
		width: .4rem;
		height: .4rem;
		line-height: .38rem;
		border-radius: 100%;
		background: #ddd;
		color: #fff;
		font-size: .4rem;   
		font-weight: 600;                    
	}
	.header-right {
		display: inline-block;
	    height: .88rem;
	    line-height: .88rem;
	    padding: 0 .1rem;
	}
	.search-submit {
		color: #fff;
	}
</style>