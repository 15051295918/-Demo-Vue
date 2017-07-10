<template>
    <div>

        <div class="main" id="main">
            <div class="imgavatar">
                <img class="imgavatar-img" :src="JiHeader.imgavatarImg" :alt="JiHeader.headerTitle">
                <div class="imgavatar-mask"></div>
                <div class="imgavatar-infocon">
                    <span class="imgavatar-left">{{JiHeader.imgavatarLeft}}</span>
                    <span class="imgavatar-right">{{JiHeader.imgavatarRight}}</span>
                </div>
            </div>
        </div>
        
    </div>
    
</template>

<script>
    export default {

        data() {
            return {
                "JiHeader": {
                    "headerLeft": "&#xe685;",

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
    .imgavatar {
        overflow: hidden;
        position: relative;
        height: 4rem;
    }
    
    .imgavatar-img {
        width: 100%;
        min-height: 4rem;
        vertical-align: middle;
    }
    
    .imgavatar-mask {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: .93rem;
        color: #fff;
    }
    
    .imgavatar-infocon {
        overflow: hidden;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        font-size: 0;
    }
    
    .imgavatar-left {
        margin-left: .2rem;
    }
    
    .imgavatar-right {
        margin-right: .2rem;
        float: right;
    }
    
    .imgavatar-left,
    .imgavatar-right {
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
</style>