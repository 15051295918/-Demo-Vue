<template>
    <div>
        <header class="header-box">
            <div class="detail-header" style="display: block; opacity: 1;">
                <a class="header-left return" href="javascript:window.history.back();"></a>
                <h1 class="header-title">北京热带雨林风情园温泉酒店+私汤泡池</h1>
            </div>
            <div class="topimg-box">
                <img class="topimg-img" src="//img1.qunarzz.com/sight/p0/1501/eb/ebc33a1d2fe9a682.water.jpg" alt="北京热带雨林风情园温泉酒店+私汤泡池"/>
                <div class="topimg-info">
                    <span class="mpg-iconfont"></span>
                    <span>1</span>
                    <span>/</span>
                    <span>3</span>
                </div>
            </div>
            <div class="swiper-img">
                <swiper :options="swiperOption" ref="mySwiper" >
                    <swiper-slide class="topimg-box" v-for="(item,index) in headerInfo">
                        <img class="topimg-img" :src="item.imgUrl" alt="itemimgAtl"/>
                    </swiper-slide>
                    <div class="swiper-pagination"  slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </div>
        </header>
        <div class="prdcard-con border-bottom">
            <div class="prdcard-infocon mp-prdcard-infocon-touch">
                <h2 class="prdcard-name">北京热带雨林风情园温泉酒店+私汤泡池</h2>
                <div class="prdcard-option" ></div>
            </div>
            <div class="prdcard-pricecon">
                <span class="prdcard-priceicon">¥</span>
                <span class="prdcard-pricetext">628</span>
                <span class="prdcard-priceunit">起/份</span>
            </div>
        </div>   
    </div>
        
</template>

<script>



export default {
    data () {
        return {
            swiperOption: {
                notNextTick: true,
                direction : 'horizontal',
                autoHeight: true,
                pagination : '.swiper-pagination',
                paginationClickable :true,
                prevButton:'.swiper-button-prev',
                nextButton:'.swiper-button-next',
                paginationType: 'fraction'
            },
            "headerInfo": [{
                "title": "北京热带雨林风情园温泉酒店+私汤泡池",
                "imgUrl": "//img1.qunarzz.com/sight/p0/1501/eb/ebc33a1d2fe9a682.water.jpg_550x250_30f5ed8d.jpg",
                "imgAtl": "北京热带雨林风情园温泉酒店+私汤泡池",
                "id": 1
            },{
                "title": "北京热带雨林风情园温泉酒店+私汤泡池",
                "imgUrl": "//img1.qunarzz.com/sight/p0/1501/67/672d0f8d79bfdad0.water.jpg_550x250_7df500d5.jpg",
                "imgAtl": "北京热带雨林风情园温泉酒店+私汤泡池",
                "id": 2
            },{
                "title": "北京热带雨林风情园温泉酒店+私汤泡池",
                "imgUrl": "//img1.qunarzz.com/sight/p0/201303/19/afb034c3c30d9eb7c8d65eac.jpg_550x250_b7f1f1ca.jpg",
                "imgAtl": "北京热带雨林风情园温泉酒店+私汤泡池",
                "id": 3
            }],
            "prdcard": [{
                "name": "北京热带雨林风情园温泉酒店+私汤泡池",
                 "pricetext": 628

            }]
        }
    }
}
</script>


<style scoped>

    .swiper-img {
        position: fixed;
        z-index: 99;
        top: 0;
        bottom: 0;
        background: #000;
        width: 100%;
    }








    .header-box {
        position: relative;
        width: 100%;
        height: 3.6rem;
        background: #ccc;
        text-align: center;
        color: #fff;
    }
    .detail-header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: .88rem;
        line-height: .88rem;
        z-index: 2;
        background: #00bcd4;
        font-size: .28rem;
    }
    .header-title {
        line-height: .88rem;
        overflow: hidden;
        margin: 0 1rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: .32rem;
        text-align: center;
    }
    /* 返回箭头 */
    .return{
        position: absolute;
        z-index: 10;
        left: .2rem;
        top: 0;
        transform: rotateZ(45deg);
        width: .24rem;
        height: .24rem;
        border-left: .04rem solid #fff;
        border-bottom: .04rem solid #fff;
        margin: .3rem .1rem;
    }

    .topimg-box {
        width: 100%;
        height: 0;
        overflow: hidden;
        padding-bottom: 56.25%;
        position: relative;
    }

    .topimg-img {
        width: 100%;
    }

    .topimg-info {
        overflow: hidden;
        position: absolute;
        right: .2rem;
        bottom: .3rem;
        min-width: 1rem;
        height: .4rem;
        padding: 0 .15rem;
        background: rgba(0,0,0, .3);
        color: #fff;
        font-size: .24rem;
        line-height: .4rem;
        text-align: center;
        border-radius: .2rem;
    }

   
    /* 配图说明 */
    .prdcard-con {
        position: relative;
        margin-top: -.1rem;
        padding: .3rem .2rem;
        background: #fff;
        border-radius: .1rem .1rem 0 0;
    }

    .prdcard-con::before {
        border-color: #dadada;
    }
    
    .prdcard-infocon {
        font-size: .32rem;
        color: #212121;
        line-height: .38rem;
    }

    .prdcard-pricecon {
        overflow: hidden;
        height: .7rem;
    }

    .prdcard-priceicon {
        display: block;
        float: left;
        position: relative;
        top: .26rem;
        color: #ff8300;
        font-size: .4rem;
        transform: scale(.5);
    }

    .prdcard-pricetext {
        display: block;
        float: left;
        position: relative;
        top: .16rem;
        color: #ff8300;
        font-size: .48rem;
    }
    
    .prdcard-priceunit {
        display: block;
        float: left;
        position: relative;
        top: .3rem;
        left: .06rem;
        color: #9e9e9e;
        font-size: .24rem;
    }



</style>
