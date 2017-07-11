<template>
	<div>
		<div class="content">
			<index-tab></index-tab>
			
		</div>
		<index-footer></index-footer>
	</div>
</template>

<script src="https://cdn.jsdelivr.net/npm/vue-resource@1.3.4"></script>
<script>
	
	import indexTab from './tab.vue'
	//import indexContent from './content.vue'
	import footer from './footer.vue'

	export default {
		
	  	data () {
	    	return {
	     		
	    	}
	  	},
	  	components: {
	  		"index-tab": indexTab,
	        
	        "index-footer": footer
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
