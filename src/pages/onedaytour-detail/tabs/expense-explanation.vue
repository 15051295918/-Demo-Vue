<template>
    <div class="main">
        <h3 class="prddetail-title border-bottom">{{title}}</h3>
        <div class="prddetail-content">
            <div v-for="item in content.expense">
                <h4 class="prddetail-subtitle">{{item.title}}</h4>
                <ul class="border structure-list">
                    <li class="structure-item border-top" v-for="itemInner in item.list">
                        <h4 class="structure-title border-right">{{itemInner.title}}</h4>
                        <p class="structure-desc">{{itemInner.content}}</p>
                    </li>
                </ul>
            </div>
            <h4 class="prddetail-subtitle">{{content.last.title}}</h4>
            <p class="prddetail-desc" v-html="content.last.content"></p>
        </div>
    </div>
</template>

<script>
    export default {

        data() {
            return {
                "title": "费用及退款说明",
                "content": {
                    "expense": [{
                        "title": "费用包含",
                        "list": [{
                            "title": "门票",
                            "content": "行程中所含的景点首道大门票:故宫（赠送珍宝馆）+八达岭长城"
                        }, {
                            "title": "门票",
                            "content": "行程中所含的景点首道大门票:故宫（赠送珍宝馆）+八达岭长城"
                        }]
                    }, {
                        "title": "费用不含",
                        "list": [{
                            "title": "门票",
                            "content": "行程中所含的景点首道大门票:故宫（赠送珍宝馆）+八达岭长城"
                        }, {
                            "title": "门票",
                            "content": "行程中所含的景点首道大门票:故宫（赠送珍宝馆）+八达岭长城"
                        }]
                    }],
                    "last": {
                        "title": "退款说明",
                        "content": "退款时间：使用日期截止前1天15:00前可以申请退款;<br /> 1）出行前一天15:00之前申请退款无手续费。<br /> 2）出行前一天15:00之后申请退款不退任何费用。"
                    }
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
        padding: 0 .24rem;
        color: #616161;
        font-size: .28rem;
        line-height: .4rem;
    }

    .prddetail-subtitle {
        padding: .24rem 0 .1rem;
        color: #ff8300;
        font-size: .3rem;
        line-height: .42rem;
    }

    .structure-item {
        overflow: hidden;
        position: relative;
        color: #212121;
        background: #f5f5f5;
        font-size: .28rem;
        line-height: .4rem;
    }

    .structure-title {
        position: absolute;
        top: 50%;
        padding: .2rem 0;
        width: 1.8rem;
        text-align: center;
        -webkit-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        -o-transform: translateY(-50%);
        transform: translateY(-50%);
    }

    .border:before {
        z-index: 1;
    }

    .structure-desc {
        margin-left: 1.8rem;
        padding: .2rem;
        background: #fff;
        color: #616161;
    }

    .prddetail-desc {
        padding-bottom: .2rem;
        color: #616161;
        word-wrap: break-word;
        white-space: normal;
        word-break: break-word;
    }
</style>