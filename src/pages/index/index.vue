<template>
  <div class="main">
    <index-header></index-header>
    <imgs-wiper></imgs-wiper>
    <icons-swiper></icons-swiper>
  </div>
</template>

<script>

import  header from './header'
import  imgswiper from './imgswiper'
import  iconswiper from './iconswiper'

export default {
  data () {

    return {
      
    }
  },
  components: {
    "index-header": header,
    "imgs-wiper": imgswiper,
    "icons-swiper": iconswiper
  }

}
</script>


<style scoped>

</style>
