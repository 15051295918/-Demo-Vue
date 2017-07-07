<template>  
	<weekend-pinterest :list="Pinterest"></weekend-pinterest>
</template>

<script>
	import pinterest from './pinterest'
export default {
  created:function(){
  	this.$http.get('/static/weekend1.json').then(response=>{
  		
  		this.Pinterest=response.body.data.pinterest;
  		
  	},response=>{
  		console.log("get data Error")
  	})
  },
  data () {
    return {
         Pinterest:[]
    }
    
  },
  components:{
  	"weekend-pinterest":pinterest
  }
}

</script>


<style scoped>
	
</style>
