<template>
   <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="(item,index) in data" :key="index+'_img_wrapper'">
            <div class="img-wrapper">
                <img class="swiper-img" :src="item.imgUrl"/>
            </div>
        </swiper-slide>
       
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>

</template>

<script>

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {

    data () {
        return {
            swiperOption: {
                loop: true,
                autoplay: 3000,
                direction : 'horizontal',
                autoHeight: true,
                pagination : '.swiper-pagination',
                paginationClickable :true,
                mousewheelControl : true,
                observeParents:true,
            }
        }
    },
    props: ["data"]

}
</script>
<style>
    .img-wrapper {
        overflow: hidden;
        width: 100%;
        height: 0;
        padding-bottom: 31.25%;
    }

    .swiper-img {
        width: 100%;
    }


</style>
