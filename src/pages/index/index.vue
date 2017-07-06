<template>
  <div class="main">
    <index-header></index-header>
 	<img-imgswiper></img-imgswiper>
 	<icon-swiper></icon-swiper>
  </div>
</template>

<script>
import header from './header'
import imgswiper from "./imgswiper"
import iconswiper from "./iconswiper"
export default {

  data () {
    return {
    	
    }
  },
  components:{
  	"index-header":header,
  	"img-imgswiper":imgswiper,
  	"icon-swiper":iconswiper
  }
      
      
  }

</script>


<style scoped>

</style>
