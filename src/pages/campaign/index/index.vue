<template>
	<div class="campaign-main">
		<index-header></index-header>
		<imgs-swiper :swiper="swiperInfo"></imgs-swiper>
		<category :category="categoryInfo"></category>
		<broadcast :broadcast="broadcastInfo"></broadcast>	
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
	import header from './header'
	import imgswiper from './imgswiper'
	import category from './category'
	import broadcast from './broadcast'
	import indexTab from './tab.vue'
	import indexContent from './content.vue'
	import footer from './footer.vue'
	import VueLazyload from 'vue-lazyload'

	Vue.use(VueLazyload, {
	  	preLoad: 1.3,
	  	error: 'http://simg1.qunarzz.com/piao/images/loading_camel.gif',
	  	loading: 'http://s.qunarzz.com/piao_topic/image/common/default/288x288.png',
	  	attempt: 1,
	  	listenEvents: [ 'scroll' ]
	})

	export default {

		created: function(){

	        this.$http.get('/static/campaign/index.json').then(response => {        	
	            this.swiperInfo = response.body.data.swiperInfo;
	            this.categoryInfo = response.body.data.categoryInfo;
	            this.activityItems = response.body.data.campaignProductDtoList;
	        }, response => {
	            console.log("get index data error")
	        });

	        this.$http.get('/static/campaign/announces.json').then(response => {
	            this.broadcastInfo = response.body.data.announceInfo;
	        }, response => {
	            console.log("get index data error")
	        });
	    },

		data () {
			return {
				swiperInfo: [],
				categoryInfo: [],
				broadcastInfo: [],
				activityItems: []
			}
		},

		components: {
			"index-header": header,
			"imgs-swiper": imgswiper,
			"category": category,
			"broadcast": broadcast,
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
			    	if(response.body.ret) {
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

	.campaign-main {
		background: #F3F3F3;
		overflow: hidden;
		height: flex;
	}

	.content {
        position: relative;
        left: 0;
        top: 0;
        width: 100%;
        min-height: 100%;
        margin-top: .2rem;
        margin-bottom: 1rem;
        background: #f5f5f5;
  	}
  	
</style>
