<template>
    <div class="main">
        <detail-header :imgswiperInfodata="imgswiperInfo" :productInfodata="productInfo"></detail-header>
        <detail-startGrade ></detail-startGrade>
        <detail-hotmessage ></detail-hotmessage>
        <detail-gightmessage ></detail-gightmessage>
        <detail-commentmessage></detail-commentmessage>
		<detail-destine></detail-destine>
    </div>
</template>

<script>

import header from './header'
import startgrade from './startgrade'
import hotmessage from './hotmessage'
import gightmessage from './gightmessage'
import commentmessage from './commentmessage'
import destine from './destine'

    export default {
        created: function() {
            this.$http.get('/static/sighthoteldetail.json').then(response => {
                this.productInfo = response.body.data.productInfo;
                this.imgswiperInfo = response.body.data.productInfo.imgswiperInfo;
            }, response => {
                console.log("get sighthoteldetail data error")
            });
        },

        data () {
            return {
                productInfo: [],
                imgswiperInfo: []
            }
        },
        components: {
            "detail-header" : header,
            "detail-startGrade" : startgrade,
            "detail-hotmessage" : hotmessage,
            "detail-gightmessage" : gightmessage,
            "detail-commentmessage" : commentmessage,
            "detail-destine" : destine, 
        }

    }
</script>

<style scoped>
     .main {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        min-height: 100%;
        background: #f5f5f5;
        color: #212121;
        font-size: .28em;
    }
</style>

