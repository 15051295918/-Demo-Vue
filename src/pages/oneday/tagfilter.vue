<template>
	<div class="tagfilter">
		<h3 class="tagfilter-title" v-if="show">游玩景点<span>(可多选)</span></h3>
		<div class="tagfilter-list" :class="{'tagfilter-unfold': isClass}" id="wrapper">
			<ul class="tagfilter-items" :style="{width: getWidth}">
				<li class="tagfilter-item" :class="{'tagfilter-select': item.isSelect }
				" v-for="(item,index) in changeItems" @click="handleClickCheck(item)">
					<span class="tagfilter-name" :class="{'border': item.isSelect }" :key="index+'tag'">{{item.name}}</span>
				</li>
				<li class="tagfilter-item" :class="{'tagfilter-select': item.isSelect }
				" v-for="(item,index) in items" @click="handleClickCheck(item)">
					<span class="tagfilter-name" :class="{'border': item.isSelect }" :key="index+'tag'">{{item.name}}</span>
				</li>
			</ul>
		</div>
		<div class="tagfilter-expand iconfont" v-html="getIcon" @click="handleChangeState"></div>
	</div>
</template>

<script>
import '@/utils/iscroll-lite.js';


export default {
	data () {
		return {
			items: [{name:"东方明珠",isSelect:false},{name:"南京路步行街",isSelect:false},{name:"外滩",isSelect:false},{name:"上海城隍庙",isSelect:false},{name:"上海迪士尼乐园",isSelect:false},{name:"上海迪士尼《狮子王》音乐剧",isSelect:false},{name:"姑苏水上游",isSelect:false},{name:"西湖",isSelect:false},{name:"黄浦江游船",isSelect:false},{name:"寒山寺",isSelect:false},{name:"上海历史发展陈列馆",isSelect:false},{name:"南京路步行街",isSelect:false},{name:"外滩",isSelect:false},{name:"上海城隍庙",isSelect:false},{name:"上海迪士尼乐园",isSelect:false},{name:"上海迪士尼《狮子王》音乐剧",isSelect:false},{name:"南京路步行街",isSelect:false},{name:"寒山寺",isSelect:false},{name:"上海历史发展陈列馆",isSelect:false},{name:"南京路步行街",isSelect:false},{name:"外滩",isSelect:false},{name:"上海城隍庙",isSelect:false},{name:"上海迪士尼乐园",isSelect:false},{name:"上海迪士尼《狮子王》音乐剧",isSelect:false},{name:"南京路步行街",isSelect:false}],
			isWidth: true,
			width: "",
			icon: true,
			show: false,
			isClass: false,
			myScroll: true,
			changeItems: []
		}
	},
	mounted() {
		var oLi=document.getElementsByClassName("tagfilter-item");
		var sumWidth=0,len=oLi.length;
		for(var i=0; i<len; i++){
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
		handleClickCheck(item) {
			var changItemsIndex=this.changeItems.indexOf(item)
			var itemsIndex = this.items.indexOf(item)
			if(changItemsIndex!=-1){
				item.isSelect=false;
				this.changeItems.splice(changItemsIndex,1)
				this.items.push(item)
		
			}else{
				item.isSelect=true;
				this.items.splice(itemsIndex,1);
				this.changeItems.push(item)
			}	
		}
	}
}
//关于li的选中问题，此处是写了两个数组，一个changeItem存被选中的数据，一个items存放未被选中的数据
//在挂载时分别循环changeItems和items两个数组的数据

</script>


<style scoped>
	.tagfilter {
		position: relative;
		background: #e5e7e8;
	}
	.tagfilter-title {
		line-height: .8rem;
		color: #212121;
		font-size: .28rem;
		text-indent: .2rem;
	}
	.tagfilter-list {
		width: 100%;
		padding: .08rem .12rem;
		margin-right: .6rem;
		max-height: 5rem;
		overflow: hidden;
		background: #e5e7e8;
	}
	.tagfilter-items {
		overflow: hidden;
	}
	.tagfilter-unfold {
		position: absolute;
		left: 0;
		top: .8rem;
	}
	.tagfilter-unfold .tagfilter-items {
		width: 100%;
	}
	.tagfilter-item {
		float: left;
		position: relative;
		box-sizing: border-box;
		padding: .04rem .08rem;
	}
	.tagfilter-name {
		display: block;
		padding: 0 .22rem;
		min-width: .26rem;
		line-height: .56rem;
		background: #fff;
		font-size: .26rem;
		border-radius: .04rem;
	}
	.tagfilter-expand {
		position: absolute;
		top: 0;
		right: 0;
		width: .8rem;
		height: .78rem;
		line-height: .78rem;
		background: #e5e7e8;
		text-align: center;
	}
	.tagfilter-select {
		color: #28a9b9;
	}
	.border::before {
		border-color: #28a9b9;
	}
	.tagfilter-select::after {
		display: block;
		font-family: "iconfont"; /* 此处将iconfont运用到伪类元素中的方法 */
		content: "\e6f1";
		font-size: 0.44rem;
		position: absolute;
		bottom: 0.04rem;
		right: 0.08rem;
	}
</style>