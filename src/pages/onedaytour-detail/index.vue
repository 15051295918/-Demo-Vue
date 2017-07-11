<template>
    <div class="main">

        <div class="header" :style="style">
            <a class="header-left iconfont" role="left">&#xe685;</a>
            <h1 class="header-title" role="title">{{headerContent}}</h1>
            <span class="header-right" role="right"></span>
        </div>

        <!--老纪-->
        <index-header :scrollTop="scrollTop"></index-header>
        <user-reviews></user-reviews>

        <!--武鹤-->
        <index-tab :tabInfo="tabInfo" :scrollTop="scrollTop" @openMap="openMap(isBigMapOpen)"></index-tab>

        <!--国辉-->
        <index-footer :footerInfo="footerInfo"></index-footer>

        <!--坤勇-->
        <booking-ticket></booking-ticket>

    </div>
</template>

<script>
    import Header from './header/header';
    import UserReviews from './header/user-reviews';
    import Tab from './tab/tab';
    import Footer from './footer/footer';
    import BookingTicket from './booking-ticket/booking-ticket';

    export default {

        created: function () {
            this.$http.get("/static/onedaytour-detail.json").then(response => {
                if (response.body.ret) {
                    this.headerContent = this.headerTitle = response.body.data.index.headerTitle;
                    this.tabInfo = response.body.data.tab;
                    this.footerInfo = response.body.data.footer;
                } else {
                    console.log("Invalid data!");
                }
            }, response => {
                console.log("get onedaytour-detail data err!");
            });
        },

        data() {
            return {
                headerContent: "",
                scrollTop: 0,
                isBigMapOpen: false,
                "headerTitle": "",
                "tabInfo": {
                    "index": {
                        "tabs": [],
                        "tabOfset": {}
                    },
                    "tourItinerary": {
                        "map": {},
                        "routesum": [],
                        "cardContent": [],
                        "timeLine": []
                    },
                    "instructions": {
                        "title": "",
                        "list": []
                    },
                    "expenseExplanation": {
                        "title": "",
                        "content": {
                            "expense": [
                                {
                                    "title": "",
                                    "list": []
                                },
                                {
                                    "title": "",
                                    "list": []
                                }
                            ],
                            "last": {
                                "title": "",
                                "content": ""
                            }
                        }
                    }
                },
                "footerInfo": {
                    "userComment": {
                        "title": "",
                        "lists": []
                    },
                    "moreQuotation": {
                        "prddetailTitle": "",
                        "lists": []
                    }
                }
            }
        },

        components: {
            "index-header": Header,
            "user-reviews": UserReviews,
            "index-tab": Tab,
            "index-footer": Footer,
            "booking-ticket": BookingTicket
        },

        mounted() {
            var this_ = this;
            window.addEventListener('scroll', function () {
                this_.scrollTop = document.body.scrollTop;
            }, false);
            this.headerContent = this.headerTitle;
        },

        methods: {

            openMap: function () {
                if (!this.isBigMapOpen) {
                    this.headerContent = "景点地图";
                } else {
                    this.headerContent = this.headerTitle;
                }
                this.isBigMapOpen = !this.isBigMapOpen
            }

        },

        computed: {

            style: function () {
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