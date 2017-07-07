<template>
	<div class="spot-box">
		<div class="spot-title">
			<span>必选景点推荐</span>
			<a class="spot-right">
				<span class="spot-right-title">全部景点</span>
				<span class="spot-right-arrow"></span>
			</a>
		</div>
		<div class="spot-concent">
			<ul class="spot-concent-ul">
				<li v-for="item in spotInfo" class="spot-concent-li">
					<div class="spot-concent-box"> 
						<div class="spot-concent-img">
							<img :src="item.imgsrc" class="spot-concent-img-child"/>
						</div>
						<div class="spot-concent-line-box">
							<div class="spot-concent-title">{{item.title}}</div>
							<div class="spot-concent-line">有<span class="spot-concent-item-line">{{item.line}}</span>条路线</div>
						</div>
						
					</div>
					
				</li>
			</ul>
		</div>
		
	</div>
</template>

<script>
	
export default {
  data () {
    return {
    	spotInfo: [
    		{
    			title : "水立方",
    			imgsrc : "http://img1.qunarzz.com/sight/p0/1501/40/40b2b6c951b28fdd.water.jpg_195x140_6f1cbf29.jpg",
    			line : "5",
    			link : ""
    		},
    		{
    			title : "水立方",
    			imgsrc : "http://img1.qunarzz.com/sight/p0/1501/40/40b2b6c951b28fdd.water.jpg_195x140_6f1cbf29.jpg",
    			line : "5",
    			link : ""
    		},
    		{
    			title : "水立方",
    			imgsrc : "http://img1.qunarzz.com/sight/p0/1501/40/40b2b6c951b28fdd.water.jpg_195x140_6f1cbf29.jpg",
    			line : "5",
    			link : ""
    		},
    		{
    			title : "水立方",
    			imgsrc : "http://img1.qunarzz.com/sight/p0/1501/40/40b2b6c951b28fdd.water.jpg_195x140_6f1cbf29.jpg",
    			line : "5",
    			link : ""
    		},
    		{
    			title : "水立方",
    			imgsrc : "http://img1.qunarzz.com/sight/p0/1501/40/40b2b6c951b28fdd.water.jpg_195x140_6f1cbf29.jpg",
    			line : "5",
    			link : ""
    		},
    		{
    			title : "水立方",
    			imgsrc : "http://img1.qunarzz.com/sight/p0/1501/40/40b2b6c951b28fdd.water.jpg_195x140_6f1cbf29.jpg",
    			line : "5",
    			link : ""
    		}
    	]
    }
  }
}
</script>


<style scoped>
	.spot-box{
		margin-top: .2rem;
		background: white;
		overflow: hidden;
	}
	.spot-title{
		padding: 0.2rem;
		height: .78rem;
		color: #000;
	    font-weight: normal;
	    font-size: .28rem;
	    line-height: .78rem;
	}
	.spot-right{
		float: right;
	    font-size: .26rem;
    	line-height: .78rem;
    	color: #616161;
    	margin-right: .2rem;
	}
	.spot-right-title{
		float: left;
	}
	.spot-right-arrow{
		float: left;
		margin-top: .28rem;
		margin-left: .1rem;
		transform: rotateZ(-135deg);
		width: .15rem;
		height: .15rem;
		border-left: .04rem solid #616161;
		border-bottom: .04rem solid #616161;
	}
	.spot-concent{
		padding: .2rem;
    	background: #fff;
	}
	.spot-concent-ul{
		overflow: hidden;
    	margin-left: -.1rem;
	}
	.spot-concent-li{
		width: 33.33%;
		float: left;
	}
	.spot-concent-box{
		margin-left: .1rem;
	}
	.spot-concent-line-box{
		height: 1rem;
	}
	.spot-concent-img{
		overflow: hidden;
	    width: 100%;
	    height: 0;
	    padding-bottom: 71.8%;
	}
	.spot-concent-img-child{
		width: 100%;
	}
	.spot-concent-title{
		text-align: center;
		line-height: .36rem;
		margin-top: .14rem;
		font-size: .28rem;
    	color: #212121;
    	
	}
	.spot-concent-line{
		text-align: center;
		height: .34rem;
	    line-height: .34rem;
	    font-size: .24rem;
	    color: #9e9e9e
	}
	.spot-concent-item-line{
		color: #00afc7;
	}
</style>
