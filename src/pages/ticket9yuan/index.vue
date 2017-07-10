<template>
  	<div class="titket">
		<app></app>
		<titket-header></titket-header>
		<div class="titket-main">
			<div class="titket-ban">
				<img src="//s.qunarzz.com/piao_topic/image/touch/custom/2017/2125perfect03/170704summer/banner.jpg" class="ban-img"/>
			</div>
			<div class="titket-active">
				<div class="active-content">来这app更新至最新版本方可享受本活动优惠</div>
			</div>
			<titket-city></titket-city>
			<titket-scenic :data="nineTicket"></titket-scenic>
			<more-special></more-special>
			<more-product></more-product>
		</div>
		
  	</div>	
</template>

<script>

import app from "./app"
import header from "./header"
import titketcity from "./city"
import titketscenic from "./scenic"
import morespecial from "./morespecial"
import moreproduct from "./moreproduct"

export default {
	created: function() {
      this.$http.get('/static/ticketRmb.json').then(response => { 
      	// console.log(response)
      	this.nineTicket  = response.body.data.indexInfo.nineTicket
      	// console.log(this.nineTicket)  
      }, response => {
        // error callback失败的回调
        console.log(调错了)
      });
    },
    data () {
        return {
     		nineTicket : []
        }
    },
	components: {
	  	"app": app,
	  	"titket-header": header,
	  	"titket-city": titketcity,
	  	"titket-scenic": titketscenic,
	  	"more-special": morespecial,
	  	"more-product": moreproduct
	}  
}
</script>


<style scoped>
	.titket-main {
		width:100%;
		height: auto;
		background: #FFEE99;
	}
	.titket-ban {
		width:100%;
		height: 3.92rem;
	}
	.ban-img {
		width: 100%;
		height: 100%;
	}
	.titket-active {
		width: 100%;
		height: .4rem;
	}
	.active-content {
		width: 80%;
		height: .4rem;
		border-radius: .2rem;
		background: #ffa902;
		margin-left: 10%;
		text-align: center;
		line-height: .4rem;
		color: #fff;
		font-size: .24rem;
	}
</style>