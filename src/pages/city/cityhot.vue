<template>
	<div class="cityhot">
	
		<div class="cityarea-group">
			<div class="cityarea-title">您的位置</div>
			<div class="cityarea-content city-now border-topbottom">
				<div class="cityitem-light">
					<router-link to="/">
						<span class="cityitem-name cityitem-current">{{currentPosition}}</span>
					</router-link>
				</div>
			</div>
		</div>

		<div>
			<div class="cityarea-title">热门城市</div>
			<div class="cityarea-content city-now border-topbottom">
				<router-link to="/">
					<div class="cityitem-light" v-for="(item,index) in cityHot" v-show="item.name.length<=5" v-if="index<18" :key="index+'_hotcity'">
						<span class="cityitem-name">{{item.name}}</span>
					</div>
				</router-link>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		beforeCreate() {	
		 	var head = document.getElementsByTagName('head')[0]; 
			var script = document.createElement('script'); 			
			script.src = "http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js"; 			
			script.onload = script.onreadystatechange=function(){ 
				if(!script.readyState || script.readyState === 'loaded' || script.readyState === 'complete') { 
					if(remote_ip_info.ret == '1') {
					 	this.currentPosition = remote_ip_info.city;
			        }
				} 
			}.bind(this) 
			head.appendChild(script);
		},
		props: ["cityHot"],
		data() {
			return {
				currentPosition: "loading..."
			}
		}
	}
</script>

<style scoped>
	.cityhot {
        width: 100%;
        background: #f5f5f5;
	}
	.cityarea-title {
	    line-height: .54rem;
	    padding-left: .3rem;
	    color: #616161;
	    font-size: .26rem;
	}
	.city-now {
	    padding-top: .04rem;
	    padding-bottom: .26rem;
	}
	.cityarea-content {
	    overflow: hidden;
	    padding-right: .5rem;
	    padding-left: .2rem;
	    background: #fff;
	}
	.cityarea-content::before, .cityarea-content::after {
		border-color: #c9cccd;
	}
	.cityitem-light {    
	    box-sizing: border-box;
	    float: left;
	    width: 33.33%;
	    padding: .2rem .14rem 0 .1rem;
	}
	.cityitem-name {
	    display: block;
	    line-height: 28px;
	    text-align: center;
	    color: #212121;
	    border: .02rem solid #c9cccd;
	    border-radius: .06rem;
	}
	.cityitem-current {
		border-color: #00afc7;
	}
</style>