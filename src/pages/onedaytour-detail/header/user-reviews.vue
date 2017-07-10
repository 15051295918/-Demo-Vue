<template>
    <div>
        <div class="commentsinfo-con" style="margin-bottom:0;">
            <a :href="userReviews.borderTop.linkArea" class="mpg-linkarea" role="select-comment" data-click="t_comment_top"></a>
            <span class="commentswell-score">{{userReviews.commentsInfoCon.commentScore}}</span>
            <span class="commentswell-text">{{userReviews.commentsInfoCon.commentText}}</span>
            <span class="comments-tagscore">{{userReviews.commentsInfoCon.commentTag}}</span>
            <span class="comments-totalnum">{{userReviews.commentsInfoCon.commentTotalnum}}
                <span class="iconfont comments-rightarrow" v-html="userReviews.commentsInfoCon.commentRightArrow"></span>
            </span>
        </div>
        
        <div class="border-top" style="padding: .1rem .2rem;background-color: #fff;">
            <a :href="userReviews.borderTop.linkArea" class="mpg-linkarea iconfont" role="select-comment" data-click="t_comment_top"></a>
            <div class="comments-item">
                <div class="content-level">
                    <span class="mpf-starlevel" style="width:1.5rem;font-size:.2rem;">
                        <strong class="iconfont mpf-starlevel-gain" v-html="userReviews.borderTop.starlevelGain" :style="style"></strong>
                        <span class="iconfont mpf-starlevel-total" v-html="userReviews.borderTop.starlevelTotal"></span>
                    </span>
                    <span class="comments-date" v-html="userReviews.borderTop.commentsDate"></span>
                </div>
                <p class="wellcomments-text ellipsis2">{{userReviews.borderTop.wellcommentsText}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

        data() {
            return {
                "userReviews": {

                    "commentsInfoCon": {
                        "linkArea": "http://touch.piao.qunar.com/touch/weekend/comment.htm?spuId=355112&amp;cat=from_area%3Dts_type_nav%26from_index%3D2%26from_value%3D%25E4%25B8%2580%25E6%2597%25A5%25E6%25B8%25B8%26dist_city%3D%25E5%258C%2597%25E4%25BA%25AC",
                        "commentScore": "4.3",
                        "commentText": "分",
                        "commentTag": "非常满意",
                        "commentTotalnum": "用户评论(219)",
                        "commentRightArrow": "&#xe768;"
                    },
                    "borderTop": {
                        "linkArea": "http://touch.piao.qunar.com/touch/weekend/comment.htm?spuId=355112&amp;cat=from_area%3Dts_type_nav%26from_index%3D2%26from_value%3D%25E4%25B8%2580%25E6%2597%25A5%25E6%25B8%25B8%26dist_city%3D%25E5%258C%2597%25E4%25BA%25AC",
                        "starlevelGain": "&#xe603;&#xe603;&#xe603;&#xe603;&#xe603;",
                        "starlevelTotal": "&#xe6d3;&#xe6d3;&#xe6d3;&#xe6d3;&#xe6d3;",
                        "commentsDate": "o*2&nbsp;&nbsp;2017-07-02",
                        "wellcommentsText": "一天的行程很满意，小张导游讲解很仔细，没有额外消费，每个景点都很用心，最后快结束还介绍北京的特色给我们，非常好的导游，必须好评～"
                    }
                }
            }
        },
        computed: {
            style: function() {
                return {
                    width: this.userReviews.commentsInfoCon.commentScore * 20 + "%"
                }
            }
        }
    }
</script>


<style scoped>
    .commentsinfo-con {
        position: relative;
        margin-top: .2rem;
        background-color: #fff;
        height: .8rem;
        line-height: .8rem;
    }
    
    .mpg-linkarea {
        position: absolute;
        color: #00afc7;
        z-index: 2;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    
    .commentswell-score {
        font-size: .4rem;
        color: #00afc7;
        margin-left: .2rem;
    }
    
    .commentswell-text {
        color: #00afc7;
    }
    
    .comments-tagscore {
        display: inline-block;
        margin-left: .1rem;
        color: #616161;
    }
    
    .comments-totalnum {
        float: right;
        position: relative;
        top: .25rem;
        display: inline-block;
        line-height: .28rem;
        font-size: .28rem;
        margin-left: .16rem;
        margin-right: .2rem;
        color: #9e9e9e;
    }
    
    .comments-rightarrow {
        font-family: 'mpiconfont';
        speak: none;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
    }
    
    .border-top {
        position: relative;
    }
    
    .mpg-linkarea {
        position: absolute;
        color: #00afc7;
        z-index: 2;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    
    .comments-item:last-child {
        border-bottom: 0;
    }
    
    .comments-item {
        padding: .2rem 0!important;
        padding-top: 0.2rem;
        padding-right: 0px;
        padding-bottom: 0.2rem;
        padding-left: 0px;
    }
    
    .comments-item {
        color: #616161;
        padding: .2rem 0;
        border-bottom: 1px dashed #ccc;
    }
    
    .mpf-starlevel {
        display: inline-block;
        position: relative;
        width: 1.4rem;
        height: .28rem;
    }
    
    .mpf-starlevel-gain {
        letter-spacing: .06rem;
        z-index: 2;
        color: #00bcd4;
    }
    
    .mpf-starlevel-gain,
    .mpf-starlevel-total {
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
    }
    
    .iconfont {
        font-size: .2rem;
    }
    
    .mpf-starlevel-total {
        color: #e0e0e0;
        z-index: 1;
        letter-spacing: .06rem;
    }
    
    .comments-date {
        float: right;
        margin-left: .2rem;
        color: #616161;
    }
    
    .wellcomments-text {
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    
    .wellcomments-text.ellipsis2 {
        line-height: .4rem;
    }
</style>