<<<<<<< HEAD

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
=======
<template>
    <div class="main">
        <index-header></index-header>
        <imgs-swiper :data="swiperInfo"></imgs-swiper>
        <icons-swiper :icons="iconInfo" :recommends="recommendInfo"></icons-swiper>
        <ads></ads>
    </div>
</template>

<script>

import header from './header'
import imgswiper from './imgswiper'
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
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        min-height: 100%;
        background: #f5f5f5;
  }


</style>
>>>>>>> origin/master
