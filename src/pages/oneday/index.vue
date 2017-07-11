<template>
	<div>
		<od-list></od-list>
		<list-page></list-page>
	</div>
</template>
<script>
import odlist from './od-list'
import odlistpage from './od-listpage'
export default {
  data () {
    return {
     
    }
  },
  components:{
  	"od-list":odlist,
  	"list-page":odlistpage
  }
}
</script>


<style scoped>
	
</style>