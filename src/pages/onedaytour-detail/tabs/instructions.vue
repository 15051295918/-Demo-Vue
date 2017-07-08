<template>
    <div class="main">
        <h3 class="prddetail-title border-bottom">{{title}}</h3>
        <ul :class='{"prddetail-content": true, "prddetail-content-more":hasMore}'>
            <li class="prddetail-content-item" v-for="item in list">
                <h4 class="prddetail-subtitle">{{item.title}}</h4>
                <p class="prddetail-desc">{{item.content}}</p>
            </li>
        </ul>
        <div :class='{"prddetail-more":true,"hasmore": hasMore}' @click="handlePrddetailMore">
            <span>{{button.content}}</span>
            <span class="iconfont" v-html="button.icon"></span>
        </div>
    </div>
</template>

<script>
    export default {

        data() {
            return {
                "hasMore": true,
                "button":{
                    "content":"更多使用说明",
                    "icon":"&#xe64b;"
                },
                "title": "使用说明",
                "list": [{
                    "title": "出团信息",
                    "content": "商家会在出游前1天的20点前与您确认出团信息。若您在超过此时间预订，商家会在您预订成功后10分钟内与您确认出团信息。"
                }, {
                    "title": "预订须知",
                    "content": "（故宫实行实名制购票，参观故宫的成人游客请带好身份证，1.2米以上的儿童请携带户口本，方便购票；成人无证件不可参观，请理解；暑期及节假日外，故宫景点每周一闭馆)。"
                }, {
                    "title": "使用说明",
                    "content": "无需咨询，请直接提交订单，网上支付，我社以我社以系统订单为准，统一给导游派发游客名单，无需纸质凭证， 导游会在提前一天17:00-20:00以电话或短信的形式和您联系，请保持预定时手机畅通，如未接到出行通知，请致电去哪客服"
                }, {
                    "title": "注意事项",
                    "content": "周六日、节假日、暑期，八达岭高速经常遇有堵车，请游客耐心等候，如因堵车原因，无法正点到达景区游览，游览时间往后顺延，敬请谅解！如因堵车原因，造成景区无法游览，我们只能抱歉的退还未产生的费用，比如：门票或餐费，敬请谅解！"
                },]
            }
        },

        methods: {
            handlePrddetailMore: function() {
                if( this.hasMore ){
                    this.hasMore = false;
                    this.button = {
                        content:"收起使用说明",
                        icon:"&#xe667;"
                    };
                }else{
                    this.hasMore = true;
                    this.button = {
                        content:"更多使用说明",
                        icon:"&#xe64b;"
                    };
                }
            }
        }
    }

</script>


<style scoped>
    .main {
        margin-top: .2rem;
        padding: .01rem 0;
        background-color: #fff;
    }

    .prddetail-title {
        overflow: hidden;
        position: relative;
        height: .84rem;
        padding: 0 .2rem;
        color: #212121;
        font-size: .32rem;
        line-height: .84rem;
        text-indent: .16rem;
    }

    .prddetail-title::after {
        content: "\0020";
        position: absolute;
        top: .28rem;
        left: .2rem;
        width: .06rem;
        height: .28rem;
        background: #00bcd4;
        -webkit-border-radius: .06rem;
        -moz-border-radius: .06rem;
        border-radius: .06rem;
    }

    .prddetail-content {
        overflow: hidden;
        padding: 0 .24rem .2rem .24rem;
        color: #616161;
        font-size: .28rem;
        line-height: .4rem;
    }

    .prddetail-content-more{
        height:4.84rem;
    }
    .prddetail-subtitle {
        padding: .24rem 0 .1rem;
        color: #ff8300;
        font-size: .3rem;
        line-height: .42rem;
    }

    .prddetail-desc {
        color: #616161;
        word-wrap: break-word;
        white-space: normal;
        word-break: break-word;
    }

    .prddetail-more {
        position: relative;
        padding: .24rem 0 .3rem;
        height: .4rem;
        color: #616161;
        font-size: .28rem;
        line-height: .4rem;
        text-align: center;
    }

    .hasmore::before {
        content: '';
        position: absolute;
        left: 0;
        top: -.6rem;
        width: 100%;
        height: .6rem;
        background-image: -webkit-gradient(linear, top, bottom, from(rgba(255, 255, 255, 1)), to(rgba(255, 255, 255, .2)));
        background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 1), rgba(255, 255, 255, .2));
        background-image: -moz-linear-gradient(top, rgba(255, 255, 255, 1), rgba(255, 255, 255, .2));
        background-image: -o-linear-gradient(top, rgba(255, 255, 255, 1), rgba(255, 255, 255, .2));
        background: linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, .2));
    }
</style>