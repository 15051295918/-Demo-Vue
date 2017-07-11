<template>
	<div class="main-list">
		<list-header @headerClick="headerClick"></list-header>
		<navigator :subnavInfo = "subnavInfo" :show="showNav" :showMask="maskShow" :orderShow="showOrder" @ClassClick="ClassClick" @orderClick="indexOrderClick"
		@maskClick="maskClick" @subThreenav="subThreenav" @orderItemClick="orderClickEvent"></navigator>
		<list-lists></list-lists>
	</div>
</template>

<script>
	import header from "./header";
	import navigator from "./navigator";
	import lists from './lists.vue';

	export default {
		created() {
	        this.$http.get('/static/list.json').then(response => {
	        	this.subnavInfo = response.body.data.subnavinfo
	        }, response => {
	             console.log("get index data error")
	        });	
	    },
		data () {
			return {
				showNav: false,
				subnavInfo: [],
				showOrder: false,
				maskShow: false
			}
		},

		components: {
			"list-header": header,
    		"navigator" : navigator,
			"list-lists": lists
		},

		methods:{
			handleGetIndex(index) {
				this.i=index;
			},
			ClassClick() {
				return (this.showNav = ! this.showNav, this.showOrder=false, this.maskShow=this.showNav)
			},
			indexOrderClick() {
				return (this.showOrder = ! this.showOrder, this.showNav=false, this.maskShow=this.showOrder)
			},
			maskClick() {
				return  this.showNav =this.showOrder= this.maskShow= false
			},
			headerClick() {
				return  this.showNav =this.showOrder=this.maskShow= false
			},
			subThreenav() {
				return  this.showNav =this.showOrder=this.maskShow= false
			},
			orderClickEvent() {
				return  this.showNav =this.showOrder=this.maskShow= false
			}
		}
	}
</script>
	
<style scoped>
	.main-list{
		position: absolute;
		top: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		background: #f5f5f5;
	}
</style>
