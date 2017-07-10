<template>
    <div class="main">
        <index-header></index-header>
        <imgs-swiper :data="swiperInfo"></imgs-swiper>
        <icons-swiper :icons="iconInfo" :recommends="recommendInfo"></icons-swiper>
        <ads></ads>
        <weekend-trip :weekendtripInfo="weekendtripInfo" :footernavInfo="footernavInfo" 
        :equipmenttype="equipmenttype"></weekend-trip>

    </div>
</template>

<script>

import header from './header'
import imgswiper from './imgswiper'
import iconswiper from './iconswiper'
import ads from './ads'
import detect from '@/utils/detect.js'
import weekendtrip from './weekendtrip'

export default {
    created: function(){
        this.$http.get('/static/index.json').then(response => {
            this.swiperInfo = response.body.data.swiperInfo;
            this.iconInfo = response.body.data.iconInfo;
            this.recommendInfo = response.body.data.recommendInfo;
            this.weekendtripInfo = response.body.data.weekendtripInfo;
            this.footernavInfo = response.body.data.footernavInfo;
            this.equipmenttype = response.body.data.equipmenttype;
        }, response => {
            console.log("get index data error")
        });
    },
    data () {
        return {
            swiperInfo: [],
            iconInfo: [],
            recommendInfo: [],
            weekendtripInfo: [],
            footernavInfo: [],
            equipmenttype: []
        }
    },
    components: {
        "index-header": header,
        "imgs-swiper": imgswiper,
        "icons-swiper": iconswiper,
        "ads": ads,
        "weekend-trip": weekendtrip
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
