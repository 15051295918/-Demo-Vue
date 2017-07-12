<template>
    <div>
        <div class="booking-fliter" v-if="show">
            <div class="booking-predetermine">
                <div class="bookings">
                <booking-header @close="handleClose" :fff="handle"></booking-header>
                <booking-content :otherDay="otherDay" @close="handlereveal" @obtain="handleObtain"></booking-content>
                <booking-footer></booking-footer>
                </div>
                <booking-calendar v-show="reveal" @show="handleShow"></booking-calendar>
            </div>
        </div>
        <div class="booking-button">
            <div class="booking-consult">咨询</div>
            <div @click="show = true" class="booking-promplt">立即预定</div>
        </div>
    </div>
</template>
<script>
import header from './booking-header';
import content from './booking-content';
import footer from './booking-footer';
import calendar from './calendar';


export default {
    data() {
        return {
            otherDay:"",
            show: false,
            reveal: false,
            handle: 0
        }
    },
    components: {
        "booking-header": header,
        "booking-content": content,
        "booking-footer": footer,
        "booking-calendar": calendar

    },
    methods: {
        handleClose: function () {
            this.show = false;
        },
        handlereveal: function () {
            this.reveal = true;
        },
        handleShow: function (month, date) {
            this.reveal = false;
            if(month){
                this.otherDay = month + "月" + date + "日";
            }
        },
        handleObtain: function (index) {
            this.handle = index;
        }
    }
}
</script>


<style scoped>
.booking-fliter {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    min-height: 100%;
    background: #f5f5f5;
    background: rgba(127, 127, 127, 0.5);
    z-index: 1001;
}

.booking-predetermine {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    min-height: 10.72rem;
    background: #fff;
}

.booking-button {
    position: fixed;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    border: 0 none;
    background: #ff9800;
    color: #fff;
    z-index: 1000;
}

.booking-consult {
    float: left;
    padding: 0.36rem 0;
    width: 1.02rem;
    text-align: center;
    background: #fff;
    color: #616161;
}

.booking-promplt {
    overflow: hidden;
    height: .98rem;
    background: #ff9800;
    color: #fff;
    font-size: .4rem;
    text-align: center;
    line-height: .98rem;
}
</style>