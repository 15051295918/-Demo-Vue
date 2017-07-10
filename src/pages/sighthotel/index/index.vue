<template>
    <div class="main">
		<index-product :data="productInfo"></index-product>
    </div>
</template>

<script>
import product from "./product"

export default {
     created: function(){
        this.$http.get('/static/sighthotel.json').then(response => {
           this.productInfo = response.body.data.productInfo;
        }, response => {
            console.log("get index data error")
        });
    },
    data() {
      return {
        productInfo: []
      }
    },
    components: {
        "index-product": product,
       
    }
}


</script>


<style scoped>
  	.main {
  		position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        min-height: 100%;
        background: #f5f5f5;
  	}

</style>

