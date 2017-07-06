<template>
<div>
	<promotional-tickets :ticketproductInfo = "ticketInfo"></promotional-tickets>
	 <hot-recommendation :dataInfo="hotTitleName" :hotproductInfo="hotProductName"></hot-recommendation>
</div>
</template>

<script>
import promotionaltickets from "./promotional_tickets";
import hotrecommendation from './hotrecommendation';
export default {
	created:function(){
		this.$http.get("/static/sellticket.json").then(response=>{
		    console.log(response.bodyText.data)
			this.ticketInfo = response.body.data.ticketproductInfo;
			this.hotTitleName = response.body.data.hotTitleName;
            this.hotProductName = response.body.data.hotTicketInfo;
		}, response=>{
			console.log("get index data error")
		});
	},
  data () {
    return {
     ticketInfo: [],
	 hotTitleName: [],
     hotProductName: []
    }
  },
  components:{
  	"promotional-tickets":promotionaltickets,
	"hot-recommendation": hotrecommendation
  }
}
</script>


<style scoped>
	
</style>
