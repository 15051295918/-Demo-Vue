<template>
    <div class="main">
        <index-header></index-header>
        <imgs-wiper :data="swiperInfo"></imgs-wiper>
        <icons-swiper :icons="iconInfo" :recommends="recommendIfo"></icons-swiper>
        <ads :ads="adsInfo"></ads>
    </div>
</template>

<script>

import header from './header'
import imgswiper from './imgswiper'
import ads from './ads'
import iconswiper from './iconswiper'
import detect from '@/utils/detect'

console.log(detect);

    export default {
        data () {
            return {
                swiperInfo: [],
                iconInfo: [],
                recommendIfo: [],
                adsInfo: []
            }
        },
        created: function() {
            this.$http.get('/static/index.json').then(response => {
            this.swiperInfo = response.body.data.swiperInfo;
            this.iconInfo = response.body.data.iconInfo;
            this.recommendIfo = response.body.data.recommendIfo;
            this.adsInfo = response.body.data.adsInfo;
            }, response => {
                console.log(" get index data error")
            });
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
