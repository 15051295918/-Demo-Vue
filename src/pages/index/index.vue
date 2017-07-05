
<template>
  <div class="main">
  	<index-header></index-header>
  	<img-swiper></img-swiper>
  	<menu-swiper></menu-swiper>
  	
    <h1>{{ msg }}</h1>
  </div>
</template>


<script>
import header from "./header";
import imgSwiper from "./imgSwiper";
import menuSwiper from "./menuSwiper";


export default {
  name: 'index',
  data () {
    return {
      msg: 'main'
    }
  },
  components: {
  	"index-header" : header,
  	"img-swiper" : imgSwiper,
  	"menu-swiper" : menuSwiper
  }
}
</script>

<style scoped> </style>
