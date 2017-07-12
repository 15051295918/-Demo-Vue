
<template>
<transition >
    <div class="calendar">
        <div class="calendar-choose">
            <h1 class="calendar-choose-time">选择时间</h1>
            <div class="single-big" @click="handleShow">
                <span class="header-city iconfont">&#xe61a;</span>
            </div>
        </div>
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide>
                <div class="calendars">
                    <table class="calendar-days" v-for="itme in swiperInfo">
                        <caption class="calendar-caption">{{itme.date}}
                            <span class="iconimg iconfont">&#xe768;</span>
                        </caption>
                        <thead>
                            <tr>
                                <th class="calendar-day" v-for="itme in dates">{{itme.day}}</th>
                            </tr>
                        </thead>
                        
                    </table>
                </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</transition>
</template>

<script>

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {

    data() {
        return {           
            days:[1,2,3,4],
            swiperInfo: [{
                date: "2017年7月"
            }],
            dates: [{
                day: "日"
            }, {
                day: "一"
            }, {
                day: "二"
            }, {
                day: "三"
            }, {
                day: "四"
            }, {
                day: "五"
            }, {
                day: "六"
            }],
            swiperOption: {
                autoplay: false,
                direction: 'horizontal',
                autoHeight: true,
                paginationClickable: true,
                onTransitionStart(swiper) {
                    console.log(swiper)
                },
            }
        }
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.swiper
        }
    },
    methods: {
        handleShow: function () {
            this.$emit("show")
        }

    }
}
</script>


<style scoped>
.calendar-bgc {
    font-size: .3rem;
    display: block;
    padding-top: .1rem;
    line-height: .4rem;
}

.iconimg {
    position: absolute;
    top: 0;
    right: 0.2rem;
    width: .88rem;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    color: #9e9e9e;
    font-size: .3rem;
}

.calendar-disabled {
    color: #9e9e9e;
}

.calendar-unit {
    height: 1rem;
    vertical-align: top;
    width: 14.3%;
    text-align: center;
}

.calendar-day {
    color: #212121;
    font-size: .24rem;
    line-height: .5rem;
    width: 14.3%;
    text-align: center;
}

.calendar-days {
    border-collapse: collapse;
    border-spacing: 0;
    text-align: left;
    width: 100%;
    table-layout: fixed;
    caption-side: top;
}

.calendar-caption {
    color: #212121;
    font-size: .28rem;
    line-height: .92rem;
    text-align: center;
}

.calendars {
    margin: 0 .2rem;
    background: #fff;
}

.calendar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    min-height: 10.72rem;
    background: #fff;
}

.calendar-choose {
    line-height: 1rem;
    font-size: .34rem;
    text-align: center;
    color: #212121;
}

.single-big {
    position: absolute;
    top: 0;
    right: .2rem;
    width: .88rem;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
}

.header-city {
    color: #9e9e9e;
    font-size: .5rem;
}

.v-leave-active {
    transition: all .6s ease;
}

.v-enter-to,
.v-leave {
    bottom: 0;
    transition: all .6s ease;
     
}

.v-enter,
.v-leave-to {
    bottom: -454.4px;
}

</style>
 