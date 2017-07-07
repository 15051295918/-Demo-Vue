<template>
    <div class="main">
        <index-header></index-header>
        <imgs-wiper></imgs-wiper>
        <icons-swiper></icons-swiper>
        <ads></ads>
    </div>

</template>

<script>

import header from './header'
import imgswiper from './imgswiper'
import ads from './ads'
import iconswiper from './iconswiper'


    export default {
        data () {
            return {
                
            }
        },
        components: {
            "index-header": header,
            "imgs-wiper": imgswiper,
            "icons-swiper": iconswiper,
            "ads": ads
        }
    }
</script>
<style>
    .main {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        min-height: 100%;
        background: #f5f5f5;
    }
</style>
