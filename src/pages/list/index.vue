<template>
	<div class="main-list">
		<list-header @headerClick="headerClick"></list-header>
		<navigator :subnavInfo = "subnavInfo" :show="showNav" @ClassClick="ClassClick"
		@maskClick="maskClick"></navigator>
		<!-- <list-lists></list-lists> -->
	</div>
</template>


<script>
	import header from "./header";
	import navigator from "./navigator";
	import lists from './lists.vue';

	export default {
		created(){
	        this.$http.get('/static/list.json').then(response => {
	        	this.subnavInfo = response.body.data.subnavinfo
	        }, response => {
	             console.log("get index data error")
	        });	
	    },
		data () {
			return {
				showNav:false,
				subnavInfo:[]
			}
		},
		components: {
			"list-header": header,
    		"navigator" : navigator,
			"list-lists": lists
		},
		methods:{
			handleGetIndex(index){
				this.i=index;
			},
			ClassClick(){
				 return this.showNav = ! this.showNav
			},
			maskClick(){
				return this.showNav = false
			},
			headerClick(){
				return this.showNav = false
			}

		}
	}
</script>
	

<style scoped>
	.main-list{
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		min-height: 100%;
		background: #f5f5f5;
	}
</style>
