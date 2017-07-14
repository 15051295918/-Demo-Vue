<template>
	<div class="fagfilter">
		<h3 class="fagfilter-title" v-if="show">游玩景点<span>(可多选)</span></h3>
		<div class="fagfilter-list" :class="{'tagfilter-unfold': isClass}" id="wrapper">
			<ul class="fagfilter-items" :style="{width: getWidth}">
				<li class="fagfilter-item" :class="{'tagfilter-select': true }" v-for="(item,index) in changeItems" @click="handleClickCheck(item)">
					<span class="fagfilter-name" :class="{'border': true }" :key="index+'tag'">{{item}}</span>
				</li>
				<li class="fagfilter-item" :class="{'tagfilter-select': false}" v-for="(item,index) in items" @click="handleClickCheck(item)">
					<span class="fagfilter-name" :class="{'border': false}" :key="index+'tag'">{{item}}</span>
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
			items: ["东方明珠","南京路步行街","外滩","上海城隍庙","姑苏水上游","黄浦江游船","上海迪士尼乐园","寒山寺","上海迪士尼《狮子王》音乐剧","西湖","上海历史发展陈列馆","乌镇","拙政园","狮子林","上海人民广场","西塘古镇","周庄","无锡三国城","虎丘","上海中心大厦","上海博物馆","乌镇东栅","乌镇西栅","陆家嘴","黄浦江游览(十六铺码头)","七里山塘","杭州黄龙洞","豫园","鼋头渚","乌镇一日游","唐寅园","宋城千古情","无锡水浒城","灵山大佛","盘门","黄浦江观光区","上海杜莎夫人蜡像馆","四季周庄","城隍庙旅游区","西塘本地玩乐","西湖游船","西溪湿地（周家村入口）","上海历史博物馆","上海大观园","上海新天地","上海海洋水族馆","上海风采浦江游览","东方明珠公园","中国杭州丝绸博物馆","中山陵"],
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
		var oLi=document.getElementsByClassName("fagfilter-item");
		var sumWidth=0,len=oLi.length;
		for(var i=0; i<len; i++){
			sumWidth+=oLi[i].offsetWidth
		}
		this.width=sumWidth+60+"px";
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
				this.changeItems.splice(changItemsIndex,1)
				this.items.push(item)
		
			}else{
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
	.fagfilter {
		position: relative;
		background: #e5e7e8;
		z-index: 5;
	}
	.fagfilter-title {
		line-height: .8rem;
		color: #212121;
		font-size: .28rem;
		text-indent: .2rem;
	}
	.fagfilter-list {
		width: 100%;
		padding: .08rem .12rem;
		margin-right: .6rem;
		max-height: 5rem;
		overflow: hidden;
		background: #e5e7e8;
	}
	.fagfilter-items {
		overflow: hidden;
	}
	.tagfilter-unfold {
		position: absolute;
		left: 0;
		top: .8rem;
	}
	.tagfilter-unfold .fagfilter-items {
		width: 100%;
	}
	.fagfilter-item {
		float: left;
		position: relative;
		box-sizing: border-box;
		padding: .04rem .08rem;
	}
	.fagfilter-name {
		display: block;
		padding: 0 .22rem;
		min-width: .26rem;
		line-height: .56rem;
		background: #fff;
		font-size: .26rem;
		border-radius: .04rem;
	}
	.fagfilter-expand {
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