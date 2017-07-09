<template>
    <div class="contain border-leftright">
    	<h3 class="comment-title border-bottom"><span class="title-leftline"></span>用户评论</h3>
        <div class="content">
        	<div class="content-level">
        		<p class="content-starlevel">
        			<span class="iconfont star">&#xe604;</span>
                    <span class="iconfont star">&#xe604;</span>
        			<span class="iconfont star">&#xe604;</span>
        			<span class="iconfont star">&#xe604;</span>
        			<span class="iconfont star">&#xe604;</span>
        		</p>
        		<p class="content-date">Z*9&nbsp;&nbsp;2017-06-23</p>
         	</div>
        	 <p class="content-text">
        	 	我是第一次报一天游的，在沒有报前总覺得不好，但旭冉旅遊团的小凡称小格格，真的值得一赞，剛好是北京下暴雨的一天，我們往八达岭长城开去，已經差不多到
        	 	，才收到全封閉通知，小格格还幫我們全去了幾個售票处问问可以上去长城吗，這点小格格很细心，在讲解途中，很全面很细致，真的值得赞！下次來北京，一定找你小格格做導遊！
        	 </p>
                <div class="contain-imgs">
                	 <div class="comment-imgs">
            	 		<img class="comment-img comment-img-first" src="http://img1.qunarzz.com/piao/fusion/1706/98/19c9b9f677ebf902.jpg_240x240_5dea1774.jpg" />
            	 		<img class="comment-img" src="http://img1.qunarzz.com/piao/fusion/1706/98/19c9b9f677ebf902.jpg_240x240_5dea1774.jpg" />
            	 		<img class="comment-img" src="http://img1.qunarzz.com/piao/fusion/1706/98/19c9b9f677ebf902.jpg_240x240_5dea1774.jpg" />
            	 		<img class="comment-img" src="http://img1.qunarzz.com/piao/fusion/1706/98/19c9b9f677ebf902.jpg_240x240_5dea1774.jpg" />
            	 		<img class="comment-img" src="http://img1.qunarzz.com/piao/fusion/1706/98/19c9b9f677ebf902.jpg_240x240_5dea1774.jpg" />
            	 		<img class="comment-img" src="http://img1.qunarzz.com/piao/fusion/1706/98/19c9b9f677ebf902.jpg_240x240_5dea1774.jpg" />
            	 		<img class="comment-img" src="http://img1.qunarzz.com/piao/fusion/1706/98/19c9b9f677ebf902.jpg_240x240_5dea1774.jpg" />
            	 		<img class="comment-img" src="http://img1.qunarzz.com/piao/fusion/1706/98/19c9b9f677ebf902.jpg_240x240_5dea1774.jpg" />
            	 		<img class="comment-img" src="http://img1.qunarzz.com/piao/fusion/1706/98/19c9b9f677ebf902.jpg_240x240_5dea1774.jpg" />
                	 </div>
                 </div>    
        </div>
        <div class="more-comment">查看更多评论 
        	<span class="iconfont">&#xe768;</span>
        </div>
    </div>
</template>
        
<script>

export default {
   
    data () {
        return {
        	"ret": true,
             "data": {

             }
        }
    },
    components: {
        
    }
}
</script>


<style scoped>
    .contain{
        margin-top: .2rem;
        background: #ffffff;
    }
    .contain::after{
        color: #e3e3e4;
    }
    .comment-title{
        height: .84rem;
        padding-left: .24rem;
        line-height: .84rem;
        font-size: .32rem;
        color: #212121;
    }
    .comment-title::after{
        color: #f0f0f0;
    }
    .title-leftline{
        float: left;
        display: block;
        width: .06rem;
        height: .28rem;
        background: #00bcd4;
        margin: .3rem .12rem 0 0;
    }
    .content{
        padding: 0 .24rem;
    }
    .content-level{
        font-size: 0;
        height: .42rem;
        padding-top: .22rem;

    }
    .content-starlevel{
        float: left;

    }
    .star{
        font-size: .28rem;
        color: #00bcd4;
        margin-right: .04rem;
    }
    .content-date{
        float: right;
        font-size: .2rem;
        color: #616161;
    }
    .content-text{
        font-size: .24rem;
        color: #616161;
        line-height: .4rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        overflow: hidden;
        margin: .06rem 0 .04rem;
    }
    .contain-imgs{
        overflow: hidden;
         width: 100%;
        height: 0;
        padding-bottom: 22.857%;
    }
    .comment-imgs{
        overflow-x: auto;
        white-space: nowrap;
        font-size: 0;
    }
    .comment-img{
        margin-left: .2rem;
        width: 1.6rem;
        height: 1.6rem;
    }
    .comment-img-first{
        margin-left: 0;
    }
</style>
