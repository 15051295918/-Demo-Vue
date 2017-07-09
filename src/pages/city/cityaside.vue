<template>
	<div class="letter">
		<ul>
			<li v-for="(item,index) in cityLetters" :key="index" @click="jump(city,index,$event)" @touchmove="touchmove($event)">{{item.name}}</li>
		
		</ul>
	</div>
</template>

<script>

export default {
	data(){
		return{
			
		}
	},
	props:["cityLetters"],
	methods:{
		jump:function(a,index,$event){
			//console.log((a[index].num)*0.76)
			//window.scrollTop=(a[index].num)*0.76+"rem";
			//console.log($event)
			alert()
			window.scrollTop=100+"px";
		},
		touchmove:function($event){
			console.log($event.touches[0].clientY)
			if(100<$event.touches[0].clientY<150){
				console.log(1)
			}
			if(150<$event.touches[0].clientY<200){
				console.log(2)
			}
			if(250<$event.touches[0].clientY<300){
				console.log(3)
			}
			if(350<$event.touches[0].clientY<400){
				console.log(4)
			}
			if(450<$event.touches[0].clientY<500){
				console.log(5)
			}
			if(550<$event.touches[0].clientY<600){
				console.log(6)
			}
			if(650<$event.touches[0].clientY<700){
				console.log(7)
			}
			
		}
	},
	
	computed:{
			cityLetters:function(){
			var arr =  this.cityLetters;
			var l   =  arr.length;
			var obj = {};
			var str ="";
			for(var i=0;i<l;i++){
				str = str.concat(arr[i].pinyin[0]);
			}
			var strl = str.length;
			for(var j=0;j<l;j++){
				var chr = str[j];
				if(obj[chr] == undefined){
					obj[chr]=1
				}else{
					obj[chr]=obj[chr]+1;
				}
			}
			var letter=[];
			for( i in obj ){
				var o={"name":i,"num":obj[i]};
				letter.push(o);
			}
			 return (letter)
		}
	}
}
</script>

<style scoped>
	ul{
		position:fixed;
		top:1.8rem;
		right:0;
	}
	li{
		font-size: 0.24rem;
		width: .32rem;
		line-height: .32rem;
		padding-left: .2rem;
		color:#00afc7;
		text-align: center;
		margin-top: .04rem
	}
</style>