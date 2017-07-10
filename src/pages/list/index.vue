<template>
	<div class="main-list">
		<list-header></list-header>
		<navigation :subnavinfo="subnavinfo" :threeNavInfo="threeNavInfo" @getIndex="handleGetIndex"></navigation>
		<list-lists></list-lists>
	</div>
</template>

<script>

	import header from "./header";
	import navigation from './navigation';
	import lists from './lists.vue'

	export default {
		created(){
	        this.$http.get('/static/list.json').then(response => {
	        
	            this.subnavinfo  = response.body.data.subnavinfo ;
	            this.threeNavInfo  = response.body.data.subnavinfo[this.i].content ; 
	            console.log(response)
	        }, response => {
	             console.log("get index data error")
	        });	
	    },
		data () {
			return {
				subnavinfo:[],
				threeNavInfo:[],
				i:3
			}
		},
		components: {
			"list-header": header,
    		"navigation": navigation,
			"list-lists": lists
		},
		methods:{
			handleGetIndex(index){
				this.i=index;
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
