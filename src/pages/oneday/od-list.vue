<template>
	<div class="main">
		<ul class="od_list">
			<li class="od_list_item" v-for="item in od_listinfo">
				<img v-bind:src="item.imgUrl" class="od_list_img"/>
				<p class="od-list-bookingtext">{{item.bookingTag}}<span class="od-list-bookingtext-after border-top border-left"></span></p>
				
				<div class="od-list-productinfo border-bottom">
					<h4 class="od-list-productname">{{item.ticketTypeName}}</h4>
					<a href="javascript:;" class="od-tag-item1 border-right">{{item.tags}}</a>
					<p class="od_list-comment"><span>好评：</span><span>{{item.sales}}</span></p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
  	data () {
	    return {     	
	     	od_listinfo:[],
	    }
  	},
  	created () {
  		this.$http.get("./static/oneday-list.json").then(response=>{
  			this.od_listinfo=response.body.data.ticketList;
  		}, response => {
            	console.log("get data error")
           })
  	}
}
</script>


<style scoped>
	.od_list_item{
		display: -webkit-flex;
		position: relative;
	}
	.od_list_img{
		width: 1.6rem;
		height: 1.6rem;
		margin: .2rem;
	}
	.od-list-productinfo{
		padding: .2rem .2rem .2rem 0;
	}
	.od-list-productname{
		line-height: .36rem;
		font-size: .3rem;
	}
	.od-tag-item{
		padding: 0 .1rem;
		font-size: .24rem;
	}
	.od-tag-item1{
		padding-right: .1rem;
		font-size: .24rem;
	}
	.od_list-comment{
		color: #ccc;
		font-size: .24rem;
		position: absolute;
		bottom: .2rem;
		left: 0;
	}
	.od-list-bookingtext{
		position: absolute;
		left: .16rem;
		top: .14rem;
		font-size: .18rem;
		color: #fff;
		background: #00bcd4;
		padding: .04rem;
	}
	.od-list-bookingtext-after{
		position: absolute;
		left: 1.22rem;
		top: .2rem;
		display: inline-block;
		width: .23rem;
		height: .23rem;
		-webkit-transform:rotateZ(45deg) ;
		
	}

</style>