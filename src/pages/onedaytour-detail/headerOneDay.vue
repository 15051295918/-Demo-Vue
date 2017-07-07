<template>
    <div>
        <div class="mp-header" style="position: fixed; width: 100%; top: 0px; left: 0px; display: block; opacity: 1;">
            <a class="mp-header-left" mp-role="left">
                <</a>
                    <h1 class="mp-header-title" mp-role="title">{{JiHeader.headerTitle}}</h1>
                    <span class="mp-header-right" mp-role="right"></span>
        </div>
        <div class="mp-main" id="mp-main">
            <div class="mp-imgavatar">
                <img class="mp-imgavatar-img" :src="JiHeader.imgavatarImg" :alt="JiHeader.headerTitle">
                <div class="mp-imgavatar-mask"></div>
                <div class="mp-imgavatar-infocon">
                    <span class="mp-imgavatar-left">{{JiHeader.imgavatarLeft}}</span>
                    <span class="mp-imgavatar-right">{{JiHeader.imgavatarRight}}</span>
                </div>
            </div>
        </div>
        <a class="mp-header-back">
            <span class="mp-headerback-bg"></span>
            <span class="mp-headerback-icon">
                <</span>
        </a>
    </div>
</template>

<script>


export default {

    data() {
        return {
            "JiHeader": {
                "headerTitle": "[北京出发]天安门＋故宫【赠送珍宝馆】＋八达岭长城＋鸟巢·水立方一日游",

                "imgavatarImg": "http://img1.qunarzz.com/p/tts1/1603/cb/c30a2a3b06b0def7.jpg_640x360_55f4917e.jpg",

                "imgavatarLeft": "出发地:北京",

                "imgavatarRight": "北京旭冉之旅"
            }
        }
    }
}
</script>


<style scoped>
.mp-header {
    height: .88rem;
    background: #00bcd4;
    z-index: 91;
    color: #212121;
    font-size: .28em;
    line-height: 1;
}

.mp-header-left {
    left: 0;
    top: 0;
    width: .8rem;
    height: .88rem;
    line-height: .88rem;
}

.mp-header-title {
    overflow: hidden;
    margin: 0 1rem;
    line-height: .88rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: .32rem;
    text-align: center;
    color: #fff;
}

.mp-hmp-header-right {
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

.mp-imgavatar {
    overflow: hidden;
    position: relative;
    height: 4rem;
}

.mp-imgavatar-img {
    width: 100%;
    min-height: 4rem;
    vertical-align: middle;
}

.mp-imgavatar-mask {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: .93rem;
    color: #fff;
}

.mp-imgavatar-infocon {
    overflow: hidden;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    font-size: 0;
}

.mp-imgavatar-left {
    margin-left: .2rem;
}

.mp-imgavatar-right {
    margin-right: .2rem;
    float: right;
}

.mp-imgavatar-left,
.mp-imgavatar-right {
    overflow: hidden;
    display: inline-block;
    height: .34rem;
    margin-bottom: .22rem;
    color: #fff;
    font-size: .24rem;
    line-height: .34rem;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.mp-header-back {
    left: .1rem;
    top: .1rem;
    width: .72rem;
    height: .72rem;
    line-height: .72rem;
}

.mp-header-left,
.mp-header-back {
    position: absolute;
    font-size: .36rem;
    color: #fff;
    text-align: center;
}

.mp-headerback-bg {
    display: block;
    width: .72rem;
    height: .72rem;
    background-color: #000;
    opacity: .5;
    border-radius: .36rem;
}

.mp-headerback-icon {
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: .72rem;
    line-height: .72rem;
    text-align: left;
    text-indent: .24rem;
}
</style>