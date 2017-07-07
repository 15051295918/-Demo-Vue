<template>
    <header class="header">
        <a class="header-left" href="javascript:window.history.back();">
            <div class="return"></div>
        </a>
        <div class="topimg-box">
            <img class="topimg-img" src="//img1.qunarzz.com/sight/p0/1501/eb/ebc33a1d2fe9a682.water.jpg" alt="北京热带雨林风情园温泉酒店+私汤泡池">
            <div class="topimg-info">
                <span class="mpg-iconfont"></span>
                <span>1</span>
                <span>/</span>
                <span>3</span>
            </div>
        </div>
        <div class="prdcard-con mpf-border-bottom">
            <div class="prdcard-infocon mp-prdcard-infocon-touch">
                <h2 class="prdcard-name">北京热带雨林风情园温泉酒店+私汤泡池</h2>
                <div class="prdcard-option"></div>
            </div>
            <div class="prdcard-pricecon">
                <span class="prdcard-priceicon">¥</span>
                <span class="prdcard-pricetext">628</span>
                <span class="prdcard-priceunit">起/份</span>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data () {
        return {

        }
    }
}
</script>


<style scoped>
    .header {
        position: relative;
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: box;
        width: 100%;
        height: 3.6rem;
        background: #ccc;
        text-align: center;
        color: #fff;
    }

    .topimg-box {
        width: 100%;
        height: 0;
        overflow: hidden;
        padding-bottom: 56.25%;
    }

    .topimg-img {
        width: 100%;
    }
    .prdcard-con {
        position: relative;
        margin-top: -.1rem;
        padding: .3rem 0 .3rem .2rem;

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
    }

    .return{
        position: absolute;
        left: .2rem;
        top: 0;
        transform: rotateZ(45deg);
        width: .24rem;
        height: .24rem;
        border-left: .04rem solid #fff;
        border-bottom: .04rem solid #fff;
        margin: .3rem .1rem;
    }
</style>
