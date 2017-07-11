<template>
	<div class="fagfilter">
		<h3 class="fagfilter-title" v-if="show">游玩景点<span>(可多选)</span></h3>
		<div class="fagfilter-list" :class="{'tagfilter-unfold':isClass}" id="wrapper">
			<ul class="fagfilter-items" :style="{width:getWidth}">
				<li class="fagfilter-item" :class="{'tagfilter-select':showCheck[index]===index}" v-for="(item,index) in items" @click="handleClickCheck(index)">
					<span class="fagfilter-name" :class="{'border':showCheck[index]===index}" :key="index+item">{{item}}</span>
					<span class="tagfilter-check iconfont" v-if="index===showCheck[index]">&#xe6f1;</span>
				</li>
			</ul>
		</div>
		<div class="fagfilter-expand iconfont" v-html="getIcon" @click="handleChangeState"></div>
	</div>
</template>

<script>
import '@/utils/iscroll-lite.js';


export default {
	data () {
		return {
			items:["东方明珠","南京路步行街","外滩","上海城隍庙","上海迪士尼乐园","上海迪士尼《狮子王》音乐剧","姑苏水上游","西湖","黄浦江游船","寒山寺","上海历史发展陈列馆","南京路步行街","外滩","上海城隍庙","上海迪士尼乐园","上海迪士尼《狮子王》音乐剧","南京路步行街","外滩","上海城隍庙","上海迪士尼乐园","上海迪士尼《狮子王》音乐剧","南京路步行街","外滩","上海城隍庙","上海迪士尼乐园","上海迪士尼《狮子王》音乐剧"],
			isWidth:true,
			width:"",
			icon:true,
			show:false,
			isClass:false,
			myScroll:true,
			showCheck:[]
		}
	},
	mounted() {
		var oLi=document.getElementsByClassName("fagfilter-item");
		var sumWidth=0,len=oLi.length;
		for(var i=0;i<len;i++){
			sumWidth+=oLi[i].offsetWidth+2
		}
		this.width=sumWidth+"px";
		console.log(sumWidth)
		this.getScroll
		document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	},
	computed:{
		getIcon() {
			return this.icon ? '&#xe667;' : '&#xe64b;'
		},
		getWidth() {
			return this.isWidth ? this.width : "100%";
		},
		getScroll() {
			return new IScroll('#wrapper', { scrollX: this.myScroll, scrollY: !this.myScroll, mouseWheel: true })
		}
	},
	updated() {
		this.getScroll.refresh()
	},
	methods:{

		handleChangeState() {
			this.icon=!this.icon;
			this.show=!this.show;
			this.isClass=!this.isClass;
			this.myScroll=!this.myScroll;
			this.isWidth=!this.isWidth
		},
		handleClickCheck(index) {
			console.log(this.showCheck)
			if(this.showCheck[index]===index){
				console.log(this.showCheck[index])
				this.showCheck[index]="";
			}else{
				this.showCheck[index]=index
			}
		}
	}
}


</script>


<style scoped>
	.fagfilter{
		position: relative;
		background: #e5e7e8;
	}
	.fagfilter-title{
		line-height: .8rem;
		color: #212121;
		font-size: .28rem;
		text-indent: .2rem;
	}
	.fagfilter-list{
		width: 100%;
		padding: .08rem .12rem;
		margin-right: .6rem;
		max-height: 5rem;
		overflow: hidden;
		background: #e5e7e8;
	}
	.fagfilter-items{
		overflow: hidden;
	}
	.tagfilter-unfold{
		position: absolute;
		left: 0;
		top: .8rem;
	}
	.tagfilter-unfold .fagfilter-items{
		width: 100%;
	}
	.fagfilter-item{
		float: left;
		position: relative;
		box-sizing: border-box;
		padding: .04rem .08rem;
	}
	.fagfilter-name{
		display: block;
		padding: 0 .22rem;
		min-width: .26rem;
		background: #fff;
		line-height: .56rem;
		font-size: .26rem;
		border-radius: .04rem;
	}
	.fagfilter-expand{
		position: absolute;
		top: 0;
		right: 0;
		width: .8rem;
		height: .78rem;
		background: #e5e7e8;
		line-height: .78rem;
		text-align: center;
	}
	.tagfilter-select{
		color: #28a9b9;
	}
	.border::before{
		border-color: #28a9b9;
	}
	.tagfilter-check{
		display: block;
		font-size: 0.44rem;
		position: absolute;
		bottom: 0.04rem;
		right: 0.08rem;
	}
</style>