<template>
	<div>
		<div class="classify">
	  		<a v-for="(item, index) in classifyInfo" :key="index+'classifyItem'" class="classifyItem" :href="item.link">
		  		<img class="classifyPic" :src="item.imgUrl">
		  		<p class="classifyTitle">{{item.title}}</p>
	  		</a>
	  	</div>
	  	<div class="nearCity border-top" v-if="nearScapeInfo.length>5">
	  		<a class="nearScapeItem border-rightbottom" v-for="(item, index) in nearScapeInfo" :key="index+'nearScapeInfo'" :href="item.link">{{item.title}}</a>
	  	</div>
	  	<div class="weekendChosen border-topbottom">
	  		<p class="weekendChosenTitle"><span class="pinterest-titleicon"></span>周末精选</p>
	  		<div class="weekendChosenItem" v-for="(item, index) in weekendChosenInfo" :key="item+'weekendChosen'">
	  			<img class="weekend-chosenPic" :src="item.imgUrl"/>
	  		</div>
	  	</div>
  	</div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: ["classifyInfo", "nearScapeInfo", "weekendChosenInfo"]
}
</script>


<style scoped>
.classify{
	display: flex;
	background: #fff;
}
.classifyItem{
	display:block;
	width: 25%;
	padding-top: .4rem;
	padding-bottom: .5rem;
	text-align: center;
}
.classifyPic{
	width: 56.25%;
	min-width: .9rem;
}
.classifyTitle{
	margin-top: .16rem;
	color: #212121;
	font-size: .26rem;
}
.nearCity{
	width: 100%;
	display: flex;
	flex-flow: row wrap; 
	background: #fff;
}
.nearScapeItem{
	display: inline-block;
	box-sizing: border-box;
	width: 33.333%;
	height: .84rem;
	line-height: .84rem;
	text-align: center;
	font-size: .28rem;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	color: #616161;

}
.weekendChosen{
	width: 100%;
	margin-top: .2rem;
	background: #ccc;
	padding: 0 .2rem .08rem;
	box-sizing: border-box;
	background: #fff;
}
.weekendChosenTitle{
	width: 100%;
	height: .88rem;
	line-height: .88rem;
}
.weekend-chosenPic{
	width: 100%;
	min-height: 2rem;
	margin-bottom: .2rem;
	background-color: #F0F0F0;
	background: url(data:image/gif;base64,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);

}
.pinterest-titleicon{
	display: inline-block;
	width: .06rem;
	height: .25rem;
	background: #1ba9ba;
	margin-right: .15rem;		
}
</style>
