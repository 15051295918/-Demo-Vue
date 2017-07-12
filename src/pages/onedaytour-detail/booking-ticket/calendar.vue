<template>
    <transition>
        <div class="calendar">
            <div class="calendar-choose">
                <h1 class="calendar-choose-time">选择时间</h1>
                <div class="single-big" @click="handleShow">
                    <span class="header-city iconfont">&#xe61a;</span>
                </div>
            </div>
            <swiper :options="swiperOption" ref="mySwiper" class="swiper">
                <swiper-slide v-for="(item, monthIndex) in months" :key="monthIndex+'slide'">
                    <div class="calendars">
                        <table class="calendar-days">
                            <caption class="calendar-caption">{{item.title}}</caption>
                            <thead>
                                <tr>
                                    <th class="calendar-day">日</th>
                                    <th class="calendar-day">一</th>
                                    <th class="calendar-day">二</th>
                                    <th class="calendar-day">三</th>
                                    <th class="calendar-day">四</th>
                                    <th class="calendar-day">五</th>
                                    <th class="calendar-day">六</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(itemInner1, trIndex) in item.date" :key="trIndex+'tr'">
                                    <td v-for="(itemInner, tdIndex) in itemInner1" :class="{'calendar-unit':true, 'td-active':monthIndex == dataMonthIndex && trIndex == dataTrIndex && tdIndex ==dataTdIndex }" :key="tdIndex+'td'" @click="handleDateClick(monthIndex, trIndex, tdIndex)">
                                        <p class="calendar-bgc">{{itemInner.date}}</p>
                                        <p class="calendar-data" v-if="itemInner.price">&yen;{{itemInner.price}}
                                            <span class="calendar-sapn">起</span>
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </swiper-slide>
                <div class="swiper-button-prev" id="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
        </div>
    </transition>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {

    data() {
        return {
            dataMonthIndex: 100,
            dataTrIndex: 100,
            dataTdIndex: 100,
            months: [{
                title: "2017年7月",
                month:7,
                firstDay:{
                    tr:1,
                    td:5
                },
                date: [[{
                    date: "",
                    price: ""
                }, {
                    date: "",
                    price: ""
                }, {
                    date: "",
                    price: ""
                }, {
                    date: "",
                    price: ""
                }, {
                    date: "",
                    price: ""
                }, {
                    date: "",
                    price: ""
                }, {
                    date: 1,
                    price: ""
                }], [{
                    date: 2,
                    price: ""
                }, {
                    date: 3,
                    price: ""
                }, {
                    date: 4,
                    price: ""
                }, {
                    date: 5,
                    price: ""
                }, {
                    date: 6,
                    price: ""
                }, {
                    date: "今天",
                    price: ""
                }, {
                    date: 8,
                    price: 218
                }], [{
                    date: 9,
                    price: 218
                }, {
                    date: 10,
                    price: 218
                }, {
                    date: 11,
                    price: 218
                }, {
                    date: 12,
                    price: 218
                }, {
                    date: 13,
                    price: 218
                }, {
                    date: 14,
                    price: 218
                }, {
                    date: 15,
                    price: 218
                }], [{
                    date: 16,
                    price: 218
                }, {
                    date: 17,
                    price: 218
                }, {
                    date: 18,
                    price: 218
                }, {
                    date: 19,
                    price: 218
                }, {
                    date: 20,
                    price: 218
                }, {
                    date: 21,
                    price: 218
                }, {
                    date: 22,
                    price: 218
                }], [{
                    date: 23,
                    price: 218
                }, {
                    date: 24,
                    price: 218
                }, {
                    date: 25,
                    price: 218
                }, {
                    date: 26,
                    price: 218
                }, {
                    date: 27,
                    price: 218
                }, {
                    date: 28,
                    price: 218
                }, {
                    date: 29,
                    price: 218
                }], [{
                    date: 30,
                    price: 218
                }, {
                    date: 31,
                    price: 218
                }]]
            }, {
                title: "2017年8月",
                month:8,
                 firstDay:{
                    tr:0,
                    td:1
                },
                date: [[{
                    date: "",
                    price: ""
                }, {
                    date: "",
                    price: ""
                }, {
                    date: 1,
                    price: 218
                }, {
                    date: 2,
                    price: 218
                }, {
                    date: 3,
                    price: 218
                }, {
                    date: 4,
                    price: 218
                }, {
                    date: 5,
                    price: 218
                }], [{
                    date: 6,
                    price: 218
                }, {
                    date: 7,
                    price: 218
                }, {
                    date: 8,
                    price: 218
                }, {
                    date: 9,
                    price: 218
                }, {
                    date: 10,
                    price: 218
                }, {
                    date: 11,
                    price: 218
                }, {
                    date: 12,
                    price: 218
                }], [{
                    date: 13,
                    price: 218
                }, {
                    date: 14,
                    price: 218
                }, {
                    date: 15,
                    price: 218
                }, {
                    date: 16,
                    price: 218
                }, {
                    date: 17,
                    price: 218
                }, {
                    date: 18,
                    price: 218
                }, {
                    date: 19,
                    price: 218
                }], [{
                    date: 20,
                    price: 218
                }, {
                    date: 21,
                    price: 218
                }, {
                    date: 22,
                    price: 218
                }, {
                    date: 23,
                    price: 218
                }, {
                    date: 24,
                    price: 218
                }, {
                    date: 25,
                    price: 218
                }, {
                    date: 26,
                    price: 218
                }], [{
                    date: 27,
                    price: 218
                }, {
                    date: 28,
                    price: 218
                }, {
                    date: 29,
                    price: 218
                }, {
                    date: 30,
                    price: 218
                }, {
                    date: 31,
                    price: 218
                }]]
            },{
                title: "2017年9月",
                month:9,
                 firstDay:{
                    tr:0,
                    td:1
                },
                date: [[{
                    date: "",
                    price: ""
                }, {
                    date: "",
                    price: ""
                }, {
                    date: 1,
                    price: 218
                }, {
                    date: 2,
                    price: 218
                }, {
                    date: 3,
                    price: 218
                }, {
                    date: 4,
                    price: 218
                }, {
                    date: 5,
                    price: 218
                }], [{
                    date: 6,
                    price: 218
                }, {
                    date: 7,
                    price: 218
                }, {
                    date: 8,
                    price: 218
                }, {
                    date: 9,
                    price: 218
                }, {
                    date: 10,
                    price: 218
                }, {
                    date: 11,
                    price: 218
                }, {
                    date: 12,
                    price: 218
                }], [{
                    date: 13,
                    price: 218
                }, {
                    date: 14,
                    price: 218
                }, {
                    date: 15,
                    price: 218
                }, {
                    date: 16,
                    price: 218
                }, {
                    date: 17,
                    price: 218
                }, {
                    date: 18,
                    price: 218
                }, {
                    date: 19,
                    price: 218
                }], [{
                    date: 20,
                    price: 218
                }, {
                    date: 21,
                    price: 218
                }, {
                    date: 22,
                    price: 218
                }, {
                    date: 23,
                    price: 218
                }, {
                    date: 24,
                    price: 218
                }, {
                    date: 25,
                    price: 218
                }, {
                    date: 26,
                    price: 218
                }], [{
                    date: 27,
                    price: 218
                }, {
                    date: 28,
                    price: 218
                }, {
                    date: 29,
                    price: 218
                }, {
                    date: 30,
                    price: 218
                }, {
                    date: 31,
                    price: 218
                }]]
            }],
            swiperOption: {
                autoplay: false,
                direction: 'horizontal',
                autoHeight: true,
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev'
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
        },

        handleDateClick: function (monthIndex, trIndex, tdIndex) {
            var this_ = this;
            // console.log(trToDay, tdToDay)
            if (trIndex <= this.months[monthIndex].firstDay.tr && tdIndex <= this.months[monthIndex].firstDay.td) {

            }else if(trIndex < this.months[monthIndex].firstDay.tr){
                
            } else{
                this.dataMonthIndex = monthIndex;
                this.dataTrIndex = trIndex;
                this.dataTdIndex = tdIndex;
                setTimeout(function(){
                this_.$emit("show",this_.months[monthIndex].month, this_.months[monthIndex].date[trIndex][tdIndex].date)                    
                },300)
            }

        }

    }
}

</script>


<style scoped>
.calendar-sapn {
    color: #ccc;
}

.calendar-data {
    font-size: .1rem;
    color: orange;
}

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

.swiper-button-next {
    width: .5rem;
    height: .5rem;
    top: .6rem;
}

.swiper-button-prev {
    width: .5rem;
    height: .5rem;
    top: .6rem;
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

.td-active {
    border-radius: .2rem;
    background: #00bcd4;
}

.td-active .calendar-bgc,
.td-active .calendar-data,
.td-active .calendar-sapn {
    color: white;
}
</style>