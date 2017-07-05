<template>
    <div class="main">
        <index-header></index-header>
        <imgs-swiper></imgs-swiper>
        <icons-swiper></icons-swiper>
    </div>
</template>

<script>

import header from './header'
import imgswiper from './imgswiper'
import iconswiper from './iconswiper'

export default {
    data () {
        return {
            
        }
    },
    components: {
        "index-header": header,
        "imgs-swiper": imgswiper,
        "icons-swiper": iconswiper
    }
}
</script>


<style scoped>
  

</style>
