<template>
    <div>
        <div class="mp-commentsinfo-con" style="margin-bottom:0;">
            <a href="http://touch.piao.qunar.com/touch/weekend/comment.htm?spuId=355112&amp;cat=from_area%3Dts_type_nav%26from_index%3D2%26from_value%3D%25E4%25B8%2580%25E6%2597%25A5%25E6%25B8%25B8%26dist_city%3D%25E5%258C%2597%25E4%25BA%25AC" class="mpg-linkarea" mp-role="mp-select-comment" data-click="t_comment_top"></a>
            <span class="mp-commentswell-score">4.9</span>
            <span class="mp-commentswell-text">分</span>
            <span class="mp-comments-tagscore">非常满意</span>
            <span class="mp-comments-totalnum">用户评论(219)&nbsp;
                <span class="mp-iconfont mp-comments-rightarrow">F</span>
            </span>
        </div>
        
        <div class="mp-border-top" style="padding: .1rem .2rem;background-color: #fff;">
            <a href="http://touch.piao.qunar.com/touch/weekend/comment.htm?spuId=355112&amp;cat=from_area%3Dts_type_nav%26from_index%3D2%26from_value%3D%25E4%25B8%2580%25E6%2597%25A5%25E6%25B8%25B8%26dist_city%3D%25E5%258C%2597%25E4%25BA%25AC" class="mpg-linkarea" mp-role="mp-select-comment" data-click="t_comment_top"></a>
            <div class="mp-comments-item">
                <div class="mp-content-level">
                    <span class="mpf-starlevel" style="width:1.5rem;font-size:.2rem;">
                        <strong class="mpg-iconfont mpf-starlevel-gain" style="width:100%">BBBBB</strong>
                        <span class="mpg-iconfont mpf-starlevel-total">BBBBB</span>
                    </span>
                    <span class="mp-comments-date">o*2&nbsp;&nbsp;2017-07-02</span>
                </div>
                <p class="mp-wellcomments-text mp-ellipsis2">一天的行程很满意，小张导游讲解很仔细，没有额外消费，每个景点都很用心，最后快结束还介绍北京的特色给我们，非常好的导游，必须好评～</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

        data() {
            return {

            }
        },
        components: {

        }
    }
</script>


<style scoped>
    .mp-commentsinfo-con {
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
    
    .mp-commentswell-score {
        font-size: .4rem;
        color: #00afc7;
        margin-left: .2rem;
    }
    
    .mp-commentswell-text {
        color: #00afc7;
    }
    
    .mp-comments-tagscore {
        display: inline-block;
        margin-left: .1rem;
        color: #616161;
    }
    
    .mp-comments-totalnum {
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
    
    .mp-comments-rightarrow {
        font-family: 'mpiconfont';
        speak: none;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
    }
    
    .mp-border-top {
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
    
    .mp-comments-item:last-child {
        border-bottom: 0;
    }
    
    .mp-comments-item {
        padding: .2rem 0!important;
        padding-top: 0.2rem;
        padding-right: 0px;
        padding-bottom: 0.2rem;
        padding-left: 0px;
    }
    
    .mp-comments-item {
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
    
    .mpf-starlevel-total {
        color: #e0e0e0;
        z-index: 1;
        letter-spacing: .06rem;
    }
    
    .mp-comments-date {
        float: right;
        margin-left: .2rem;
        color: #616161;
    }
    
    .mp-wellcomments-text {
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    
    .mp-wellcomments-text.mp-ellipsis2 {
        line-height: .4rem;
    }
</style>