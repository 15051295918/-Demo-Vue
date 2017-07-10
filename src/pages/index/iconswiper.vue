<template>
    <div class="iconswiper">
    <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class="icon-container">
          <div class="icon-wrapper" v-for="item in page">
            <img :src="item.imgUrl" class="icon-img"/>
            <p class="icon-title">{{item.title}}</p>
          </div>
          
        </div>
    </swiper-slide>

    <div class="swiper-pagination icon-pagination"  slot="pagination"></div>
   
    </swiper>
    <div class="recommend ">
        <div class="recommend-item border-topbottom" v-for="item in recommend"><i class="iconfont icon-piao"></i> {{item.title}}</div>
    </div>
    </div>
</template>

<script>

import { swiper, swiperSlide } from 'vue-awesome-swiper'


export default {
  data () {
  	return {

        swiperOption: {
          autoplay: false,
          direction : 'horizontal',
          autoHeight: true,
          pagination : '.swiper-pagination',
          paginationClickable :true
        }
  		
  	}
  },
    props:["icons", "recommend"],
    computed: {
        pages: function() {
            var pages = [];
            for (var i = 0; i<this.icons.length;i++){
                var page = Math.floor(i / 8);
                if(!pages[page]){
                    pages[page]=[]
                }
                pages[page].push(this.icons[i]);
            }
            return pages;
        }
    }
  
}
</script>

<style scoped>
    .iconswiper{
        background: white;
    }
    .icon-wrapper{
        
        padding-top:.3rem;
        width: 25%;
        float: left;
        overflow: hidden;
    }
    .icon-img{
        width: .66rem;
        display: block;
        margin: 0 auto;

    }
    .icon-title{
        margin-top: .2rem;
        text-align: center;
        color: #212121;
        font-size: .28rem;

    }
    .icon-pagination{
        bottom:.1rem;
    }
    .icon-container{
        height: 3rem;
        padding-bottom: .4rem;
        overflow: hidden;
    }
    .recommend{
        display: flex;
    }
    .recommend-item{
        flex:1;
        line-height: 1rem;
        text-align:center;
        border-top:.02rem solid #e0e0e0;
        border-bottom:.02rem solid #e0e0e0;
    }
    .recommend-item:first-of-type{
        border-right: .02rem solid #e0e0e0;
    }

</style>