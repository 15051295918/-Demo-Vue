<template>
    <div class="main">

        <div class="header" :style="style" >
            <a class="header-left iconfont" role="left" v-html="JiHeader.headerLeft"></a>
            <h1 class="header-title" role="title">{{JiHeader.headerTitle}}</h1>
            <span class="header-right" role="right"></span>
        </div>
               
        <!--老纪-->
        <index-header :scrollTop="scrollTop"></index-header>
        <user-reviews></user-reviews>

        <!--武鹤-->
        <index-tabs :scrollTop="scrollTop"></index-tabs>

        <!--国辉-->
        <index-footer></index-footer>

        <!--坤勇-->
        <booking-ticket></booking-ticket>

    </div>
</template>

<script>
    import Header from './header/header';
    import UserReviews from './header/user-reviews';
    import Tabs from './tabs/tabs';
    import Footer from './footer/footer';
    import BookingTicket from './booking-ticket/booking-ticket';

    export default {

        data() {
            return {
                scrollTop: 0,
                "JiHeader": {
                    "headerLeft": "&#xe685;",

                    "headerTitle": "[北京出发]天安门＋故宫【赠送珍宝馆】＋八达岭长城＋鸟巢·水立方一日游"
                }
            }
        },
        components: {
            "index-header": Header,
            "user-reviews": UserReviews,
            "index-tabs": Tabs,
            "index-footer": Footer,
            "booking-ticket": BookingTicket
        },
        mounted() {
            var this_ = this;
            window.addEventListener('scroll', function() {
                this_.scrollTop = document.body.scrollTop;
                // console.log(document.body.scrollTop)
            }, false);
        },
        computed: {
            style: function() {
                return "opacity:" + this.scrollTop / 150
            }
        }
    }
</script>


<style scoped>
    .main {
        background: #f5f5f5;
    }
    
    .header {
        height: .88rem;
        background: #00bcd4;
        z-index: 1000;
        color: #212121;
        font-size: .28em;
        line-height: 1;
        position: fixed;
        width: 100%;
        top: 0px;
        left: 0px;
        display: block;
    }
    
    .header-left {
        left: 0;
        top: 0;
        width: .8rem;
        height: .88rem;
        line-height: .88rem;
    }
    
    .header-left {
        position: absolute;
        font-size: .36rem;
        color: #fff;
        text-align: center;
    }
    
    .header-title {
        overflow: hidden;
        margin: 0 1rem;
        line-height: .88rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: .32rem;
        text-align: center;
        color: #fff;
    }
    
    .header-right {
        position: absolute;
        top: 0;
        right: 0;
        width: .8rem;
        height: .88rem;
        line-height: .88rem;
        text-align: center;
        font-size: .32rem;
        color: #fff;
    }
</style>