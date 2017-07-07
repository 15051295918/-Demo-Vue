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
}
.pinterest-titleicon{
		display: inline-block;
		width: .06rem;
		height: .25rem;
		background: #1ba9ba;
		margin-right: .15rem;		
}

</style>
