<template>
    <div class="main">
        <index-header></index-header>
<<<<<<< HEAD
        <imgs-wiper :data="swiperInfo"></imgs-wiper>
        <icons-swiper :icons="iconInfo" :recommends="recommendIfo"></icons-swiper>
        <ads :ads="adsInfo"></ads>
=======
        <imgs-swiper :data="swiperInfo"></imgs-swiper>
        <icons-swiper :icons="iconInfo" :recommends="recommendInfo"></icons-swiper>
        <ads></ads>
>>>>>>> origin/master
    </div>
</template>

<script>

import header from './header'
import imgswiper from './imgswiper'
<<<<<<< HEAD
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
=======
import iconswiper from './iconswiper'
import ads from './ads'
import detect from '@/utils/detect.js'

console.log(detect);

export default {
    created: function(){
        this.$http.get('/static/index.json').then(response => {
            this.swiperInfo = response.body.data.swiperInfo;
            this.iconInfo = response.body.data.iconInfo;
            this.recommendInfo = response.body.data.recommendInfo;
        }, response => {
            console.log("get index data error")
        });
    },
    data () {
        return {
            swiperInfo: [],
            iconInfo: [],
            recommendInfo: []   
        }
    },
    components: {
        "index-header": header,
        "imgs-swiper": imgswiper,
        "icons-swiper": iconswiper,
        "ads": ads
    }
}
</script>


<style scoped>
  .main {
>>>>>>> origin/master
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        min-height: 100%;
        background: #f5f5f5;
<<<<<<< HEAD
    }
=======
  }


>>>>>>> origin/master
</style>
