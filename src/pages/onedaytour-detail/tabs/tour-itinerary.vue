<template>
    <div class="main">
        <div class="routesum-outter">
            <div class="routesum-inner">
                <h5 v-for="(item, index) in routesum" :class="{'routesum-item':index==0}">
                    <span class="iconfont" v-html="item.icon"></span>
                    <span>{{item.item}}</span> {{item.info}}
                </h5>
            </div>
        </div>
        <div>
            <h1 class="summary-title">行程亮点</h1>
            <div class="card-conten">
                <ul class="card-content">
                    <li v-for="item in cardContent" class="card-content-item"><span>★</span>{{item.content}}</li>
                </ul>
            </div>
        </div>
        <div class="prddetail-group">
            <h1 class="route-headtext">行程安排</h1>
            <ul class="timeline">
                <li class="prddetail-routeitem" v-for="item in timeLine">
                    <span class="prddetail-date">{{item.time}}</span>
                    <div class="prddetail-route">
                        <span class="iconfont timeline-nodeicon" v-html="item.icon"></span>
                        <a href="#" v-if="item.url">{{item.title}}</a>
                        <span v-else class="route-title">{{item.title}}</span>
                        <p class="route-desc">{{item.content}}</p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="card-moreoutter">
            <div class="card-more border-bottom">查看详细产品介绍
                <span class="iconfont">&#xe601;</span>
            </div>
        </div>
        <div class="prddetail-mapcon">
            <el-amap :vid="'amap-vue'"></el-amap>
        </div>
    </div>
</template>

<script>
    export default {

        data() {
            return {
                "routesum": [{
                    "icon": "&#xe601;",
                    "item": "交通",
                    "info": "汽车往返"
                }, {
                    "icon": "&#xe614;",
                    "item": "用餐",
                    "info": "包含餐食"
                }],
                "cardContent": [{
                    "content": "登八达岭长城，逛故宫，一天饱览两大“双遗”景点"
                }, {
                    "content": "登八达岭长城，逛故宫，一天饱览两大“双遗”景点"
                }, {
                    "content": "登八达岭长城，逛故宫，一天饱览两大“双遗”景点"
                }],
                "timeLine": [{
                    "time": "7:30",
                    "icon": "&#xe65b;",
                    "title": "集合地点",
                    "url": "#",
                    "content": "北京市东城区人民英雄纪念碑(天安门广场人民英雄纪念碑的北侧（导游举橘红色“旭冉假期”导游旗）集合)"
                }, {
                    "time": "8:30",
                    "icon": "&#xe63e;",
                    "title": "故宫博物院",
                    "url": "",
                    "content": "前往【故宫博物院】，赠送游览珍宝馆。（游览时间：约2.5小时）配备每人一台无线耳麦，让您能在100米内清晰聆听到导游的讲解，请妥善保管，游览完毕后归还到导游处"
                }, {
                    "time": "11:30",
                    "icon": "&#xe614;",
                    "title": "庆丰包子铺",
                    "url": "",
                    "content": "庆丰包子铺享用庆丰包子，每人三两、9个包子，一碗粥（用餐时间：约1小时）"
                }, {
                    "time": "12:30",
                    "icon": "&#xe63e;",
                    "title": "八达岭长城",
                    "url": "",
                    "content": "乘车赴【八达岭长城】（行程距离：约70公里；行驶时间：约2小时；游览时间：约2小时） 登上八达岭长城，可以看到脚下的长城依山就势，蜿蜒起伏，如一条不见首尾的巨龙在绵绵山岭上翻滚爬动，气势磅礴，雄伟壮观 友情提示： 八达岭缆车往返140元/人或滑车 往返100元/人 （完全自愿自理）"
                }, {
                    "time": "16:30",
                    "icon": "&#xe63e;",
                    "title": "鸟巢、水立方",
                    "url": "",
                    "content": "前往【鸟巢、水立方】外观，自由活动和散团"
                }, {
                    "time": "16:30",
                    "icon": "&#xe606;",
                    "title": "返程",
                    "url": "",
                    "content": "行程结束后将您送回【鸟巢·水立方】自由活动和散团"
                }]
            }
        }
    }

</script>


<style scoped>
    .main {
        padding: 0 .2rem;
    }

    .routesum-outter {
        padding: .24rem 0;
    }

    .routesum-inner {
        background: #f5f5f5;
        border-radius: .1rem;
        padding: .2rem;
    }

    .routesum-item {
        margin-bottom: .2rem;
    }

    .summary-title {
        color: #616161;
        font-size: .4rem;
    }

    .card-conten {
        padding: .24rem 0;
        border-bottom: 1px dashed #dadada;
    }

    .card-content-item {
        color: #212121;
        font-size: .28rem;
        line-height: .44rem;
        max-height: 1.32rem;
        overflow: hidden;
    }

    .prddetail-group {
        padding: .01rem 0;
        background-color: #fff;
    }

    .prddetail-routeitem {
        padding-bottom: .14rem;
    }

    .route-headtext {
        color: #616161;
        font-size: .4rem;
        margin-top: .3rem;
    }

    .prddetail-routeitem {
        padding-bottom: .14rem;
    }

    .timeline {
        padding: .2rem 0;
        overflow: hidden;
        color: #616161;
        font-size: .28rem;
        line-height: .4rem;
    }

    .prddetail-routeitem {
        overflow: hidden;
        min-height: 1%;
        padding-bottom: .14rem;
    }

    .prddetail-date {
        overflow: hidden;
        float: left;
        width: .72rem;
        height: .44rem;
        white-space: nowrap;
        color: #212121;
        font-size: .28rem;
        line-height: .4rem;
    }

    .prddetail-route {
        position: relative;
        margin-left: .76rem;
        padding-left: .7rem;
        font-size: .28rem;
        padding-bottom: .1rem;
        color: #616161;
        line-height: .4rem;
    }

    .prddetail-route::befor {
        content: '';
        position: absolute;
        z-index: 2;
        top: 4px;
        left: .28rem;
        width: 8px;
        height: 12px;
        border-radius: 4px;
        background-color: #fff;
    }

    .timeline-nodeicon {
        position: absolute;
        z-index: 2;
        top: 2px;
        left: .2rem;
        color: #00afc7;
        font-size: .28rem;
    }

    .route-desc {
        color: #616161;
        font-size: .28rem;
    }

    .route-title {
        color: #212121;
    }

    .prddetail-route::after {
        content: '';
        position: absolute;
        bottom: -.4rem;
        left: .04rem;
        width: 1px;
        height: 100%;
        margin-left: .3rem;
        border-radius: 3px;
        background-color: rgba(217, 217, 217, 0.7);
    }

    .card-moreoutter {
        padding: 0 .2rem;
    }

    .card-more {
        height: .8rem;
        color: #616161;
        font-size: .28rem;
        line-height: .8rem;
        text-align: center;
        margin-top: .1rem;
        border-top: 1px dashed #dadada;
    }

    .prddetail-mapcon {
        height: 3.5rem;
        padding: .2rem .2rem .1rem .2rem;
        overflow: hidden;
        margin-bottom: .2rem;
        position: relative;
    }
</style>