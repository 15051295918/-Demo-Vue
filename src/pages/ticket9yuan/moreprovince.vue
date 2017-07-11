<template>
  	<div class="more-province" @click="handleClickOff">
		<div class="more-province-off iconfont">&#xe8e7;</div>
		<div class="more-province-name">
			<ul class="more-provinces">
				<li v-for="(items, index) in moreProvinces" key="index + '_more_provinces'" class="province-items" @click="hanleChangeColor">
					<span class="province-items-border">{{items.name}}</span>
				</li>
			</ul>
		</div>
  	</div>	
</template>

<script>
export default {
	created: function(){
	    this.$http.get('/static/ticketRmb.json').then(response => {
	        this.more = response.body.data.indexInfo.cityItem;
	    }, response => {
	        console.log("get list data error")
	    });
	},
	data () {
	    return {
	     
	    }
	},
	props:["moreProvinces"],
	methods: {
	  	handleClickOff: function() {
	  		this.$emit("moreProvinceOff");
	  	},
	  	hanleChangeColor: function() {
	  		
	  	}
	}
	  
}
</script>


<style scoped>
	.more-province-off {
		position: absolute;
		top: 3.4rem;
		right: 0;
		width: 1rem;
		height: 1rem;
		font-size: .8rem;
		color: #fff;
		text-align: center;
		line-height: 1rem;
	}
	.more-province-name {
		width: 100%;
		height: 4.6rem;
		background: #fff;
		position: absolute;
		top: 4.4rem;
	}
	.more-provinces {
		width: 97%;
		height: 98%;
		margin: 1% 1.5%;
	}
	.province-items {
		float: left;
		width: 25%;
		height: .75rem;
		text-align: center;
		line-height: .75rem;
	}
	.province-items-border {
		display: block;
		width:99%;
		height:70%;
		margin-top:2%;
		border-left: 0.02rem solid #ddd;
	}
	.province-items:nth-child(4n) .province-items-border {
		border-right: 0.02rem solid #ddd;
	}
	.province-items:last-child .province-items-border {
		border-right: 0.02rem solid #ddd;
	}
</style>