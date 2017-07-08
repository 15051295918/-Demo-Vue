<template>
    <div class="mp-prdcard-con" mp-role="productCardCon">
        <h3 class="mp-prdcard-name">{{JiCardCon.prdcardName}}</h3>
        <div class="mp-prdcard-pricecon">
            <em class="mp-prdcard-priceicon">{{JiCardCon.prdcardPriceicon}}</em>
            <span class="mp-prdcard-pricetext">{{JiCardCon.prdcardPricetext}}</span>
            <span class="mp-prdcard-gray">{{JiCardCon.prdcardGray}}</span>
            <span class="mp-bookingahead-text">{{JiCardCon.bookingAheadText}}</span>
            <span class="mp-prdcard-supplier">{{JiCardCon.prdcardSupplier}}</span>
        </div>
        
        <div class="mp-prdcard-tagcon">
            <div class="mp-prdcard-tag-item" v-for="item in JiPrdcardTagItem">
                <span class="mp-prdcard-tag-icon mpg-iconfont">{{item.icon}}</span>
                <span class="mp-prdcard-tag-desc">{{item.tagDesc}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

        data() {
            return {
                JiCardCon: {
                    "prdcardName": "[北京出发]天安门＋故宫【赠送珍宝馆】＋八达岭长城＋鸟巢·水立方一日游",
                    "prdcardPriceicon": "¥",
                    "prdcardPricetext": "228",
                    "prdcardGray": "起",
                    "bookingAheadText": "可订明日",
                    "prdcardSupplier": "已售:488"
                },
                JiPrdcardTagItem: [{
                    "icon": "",
                    "tagDesc": "条件退"
                }, {
                    "icon": "",
                    "tagDesc": "铁定成团"
                }, {
                    "icon": "",
                    "tagDesc": "无自费"
                }, {
                    "icon": "",
                    "tagDesc": "无购物"
                }]
            }
        }
    }
</script>


<style scoped>
    .mp-prdcard-con {
        position: relative;
        margin-top: -.1rem;
        padding: .2rem .2rem 0 .2rem;
        background: #fff;
        border-radius: .1rem .1rem 0 0;
    }
    
    .mp-prdcard-name {
        overflow: hidden;
        display: -webkit-box;
        color: #212121;
        font-size: .36rem;
        line-height: .44rem;
        text-overflow: ellipsis;
    }
    
    .mp-prdcard-pricecon {
        overflow: hidden;
        margin: .16rem 0;
        height: .48rem;
        font-size: 0;
    }
    
    .mp-prdcard-priceicon {
        color: #ff8300;
        font-size: .24rem;
    }
    
    .mp-prdcard-pricetext {
        color: #ff8300;
        font-size: .48rem;
    }
    
    .mp-prdcard-gray {
        color: #9e9e9e;
        font-size: .24rem;
    }
    
    .mp-bookingahead-text {
        color: #616161;
        font-size: .24rem;
        margin-left: .2rem;
    }
    
    .mp-prdcard-supplier {
        color: #616161;
        float: right;
        height: .24rem;
        margin-top: .2rem;
    }
    
    .mp-prdcard-tagcon {
        overflow: hidden;
        padding-bottom: .2rem;
        font-size: 0;
    }
    
    .mp-prdcard-tag-item:not(:last-child) {
        margin-right: .2rem;
    }
    
    .mp-prdcard-tag-item {
        float: left;
        height: .34rem;
        font-size: .24rem;
        line-height: .34rem;
    }
    
    .mp-prdcard-tag-icon {
        margin-right: .04rem;
        color: #00afc7;
        font-size: .28rem;
        vertical-align: -.02rem;
    }
    
    .mp-prdcard-tag-desc {
        color: #616161;
    }
</style>