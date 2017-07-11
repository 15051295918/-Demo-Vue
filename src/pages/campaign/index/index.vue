<template>
	<div>
		<div class="content">
			<index-tab @reqUrl="getUrl"></index-tab>
			<index-content :activityItem="activityItems"></index-content>
		</div>
		<index-footer></index-footer>
	</div>
</template>

<script src="https://unpkg.com/vue-lazyload/vue-lazyload.js"></script>
<script>
	
	import Vue from 'vue'
	import indexTab from './tab.vue'
	import indexContent from './content.vue'
	import footer from './footer.vue'
	import VueLazyload from 'vue-lazyload'
	Vue.use(VueLazyload, {
	  	preLoad: 1.3,
	  	error: 'http://simg1.qunarzz.com/piao/images/loading_camel.gif',
	  	loading: 'http://s.qunarzz.com/piao_topic/image/common/default/288x288.png',
	  	attempt: 2,
	  	listenEvents: [ 'scroll' ]
	})

	export default {

		created: function() {
			this.$http.get('/static/campaign/index.json').then(response => {
		    	if(response.body.ret === true) {
		    		this.activityItems = response.body.data.campaignProductDtoList;
		    	}		    	
		  	}, response => {
		    	console.log("get data error")
		  	});
		},
		
	  	data () {
	    	return {
	     		reqUrl: "",
	     		activityItems: []
	    	}
	  	},

	  	components: {
	  		"index-tab": indexTab,
	        "index-content": indexContent,
	        "index-footer": footer
	    },

	    methods: {
	    	getUrl: function(url) {
	    		this.getData(url);
	    	},
	    	getData: function(url) {
	    		this.$http.get(url).then(response => {
			    	if(response.body.ret === true) {
			    		this.activityItems = response.body.data[0].campaignProductDtoList;
			    	}
			  	}, response => {
			    	console.log("get data error")
			  	});
	    	}
	    }

	}
</script>


<style scoped>
	.content {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        min-height: 100%;
        margin-top: .2rem;
        background: #f5f5f5;
  	}
  	
</style>
