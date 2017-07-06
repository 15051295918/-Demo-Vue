<template>
	<promotional-tickets :ticketproductInfo = "ticketInfo"></promotional-tickets>
</template>

<script>
import promotionaltickets from "./promotional_tickets"
export default {
	created:function(){
		this.$http.get("/static/sellticket.json").then(response=>{
			this.ticketInfo = response.body.data.ticketproductInfo;
		}, response=>{
			console.log("get index data error")
		});
	},
  data () {
    return {
     ticketInfo: []
    }
  },
  components:{
  	"promotional-tickets":promotionaltickets
  }
}
</script>


<style scoped>
	
</style>
