<template>
    <div class="contain">
    	<h3 class="comment-title"><span class="title-leftline"></span>{{data.title}}</h3>
        <div class="content-contain border-topbottom">
            <div class="content" v-for="(list, index) in data.lists" :key="index + 'content_'" :class="{'border-bottom' :index == 0}">
            	<div class="content-level">
                        <p class="content-graystar">
                            <span class="iconfont graystar" v-for="item in list.contentStar" v-html="item.icon"></span>
                            
                        </p>
                    <div class="contain-star">   
                		<p class="content-starlevel">
                			<span class="iconfont star" v-for="item in list.contentStar" v-html="item.icon"></span>
                		</p>
                    </div> 
            		<p class="content-date">{{list.name}}&nbsp;&nbsp;{{list.date}}</p>
             	</div>
            	 <p class="content-text">
            	 	{{list.contentText}}
            	 </p>
                <div class="contain-imgs">
                	 <div class="comment-imgs">
            	 		<img class="comment-img" v-for="(item, index) in list.commentImg" :src="item.src" :class="{'comment-img-first' : index == 0}" />
            	 	 
                	 </div>
                 </div>    
            </div>
        </div>    
        <div class="more-comment">
                {{data.last.comment}}
        	<span class="iconfont commet-arrows" v-html="data.last.icon"></span>
        </div>
    </div>
</template>
        
<script>
 export default {
   
    data () {
        return {
        	"ret": true,
             "data": {
                "title": "用户评论",
                "lists": [
                    {
                         "contentStar": [ 
                            {
                                "icon": "&#xe604;"
                            },
                            {
                                "icon": "&#xe604;"
                            },
                            {
                                "icon": "&#xe604;"
                            },
                            {
                                "icon": "&#xe604;"
                            },
                            {
                                "icon": "&#xe604;"
                            }
                         ],
                         "name": "Z*9",  
                         "date": "2017-06-23",  
                        "contentText":  "我是第一次报一天游的，在沒有报前总覺得不好，但旭冉旅遊团的小凡称小格格，真的值得一赞，剛好是北京下暴雨的一天，我們往八达岭长城开去，已經差不多到，才收到全封閉通知，小格格还幫我們全去了幾個售票处问问可以上去长城吗，這点小格格很细心，在讲解途中，很全面很细致，真的值得赞！下次來北京，一定找你小格格做導遊！"
                         ,
                        "commentImg": [
                            {
                             "src": "http://img1.qunarzz.com/piao/fusion/1706/98/19c9b9f677ebf902.jpg_240x240_5dea1774.jpg"
                            },
                            { 
                                "src": "http://img1.qunarzz.com/piao/fusion/1706/98/19c9b9f677ebf902.jpg_240x240_5dea1774.jpg"
                            },
                            { 
                                "src": "http://img1.qunarzz.com/piao/fusion/1706/98/19c9b9f677ebf902.jpg_240x240_5dea1774.jpg"
                            },
                            { 
                                "src": "http://img1.qunarzz.com/piao/fusion/1706/98/19c9b9f677ebf902.jpg_240x240_5dea1774.jpg"
                            },
                            { 
                                "src": "http://img1.qunarzz.com/piao/fusion/1706/98/19c9b9f677ebf902.jpg_240x240_5dea1774.jpg"
                            },
                             {
                                "src": "http://img1.qunarzz.com/piao/fusion/1706/98/19c9b9f677ebf902.jpg_240x240_5dea1774.jpg"
                            },
                            {
                                "src": "http://img1.qunarzz.com/piao/fusion/1706/98/19c9b9f677ebf902.jpg_240x240_5dea1774.jpg"
                            },
                            {    "src": "http://img1.qunarzz.com/piao/fusion/1706/98/19c9b9f677ebf902.jpg_240x240_5dea1774.jpg"
                            }

                        ]
                    },
                   { 
                        "contentStar": [ 
                            {
                                "icon": "&#xe604;"
                            },
                            {
                                "icon": "&#xe604;"
                            },
                            {
                                "icon": "&#xe604;"
                            },
                            {
                                "icon": "&#xe604;"
                            },
                            {
                                "icon": "&#xe604;"
                            }
                         ],
                        "name":   "古*忆" ,
                        "date":  "2017-01-22",  
                        "contentText": "八哥人不错。故宫电子票，学生证不半价，给退的40块钱，我自己半价买的。八达岭的滑车票，是八哥帮大家跑腿买的。整个途中讲解很好，没有乱收费，也没有购物。去的是真长城?。一天去了很多地方，还吃了庆丰包子。虽然时间不长，但很有意思。"
                        ,
                        "commentImg": [
                            {
                                "src": "http://img1.qunarzz.com/piao/fusion/1701/dd/4c9d98923c305602.jpg_240x240_2c78a148.jpg"
                            },
                            { 
                                "src": "http://img1.qunarzz.com/piao/fusion/1701/dd/4c9d98923c305602.jpg_240x240_2c78a148.jpg"
                            },
                            {
                                 "src": "http://img1.qunarzz.com/piao/fusion/1701/dd/4c9d98923c305602.jpg_240x240_2c78a148.jpg"
                            },
                             {
                                "src": "http://img1.qunarzz.com/piao/fusion/1701/dd/4c9d98923c305602.jpg_240x240_2c78a148.jpg"
                            },{ 
                                "src": "http://img1.qunarzz.com/piao/fusion/1701/dd/4c9d98923c305602.jpg_240x240_2c78a148.jpg"
                            },
                            {
                                 "src": "http://img1.qunarzz.com/piao/fusion/1701/dd/4c9d98923c305602.jpg_240x240_2c78a148.jpg"
                            },
                             {
                                "src": "http://img1.qunarzz.com/piao/fusion/1701/dd/4c9d98923c305602.jpg_240x240_2c78a148.jpg"
                            },
                            {
                                "src": "http://img1.qunarzz.com/piao/fusion/1701/dd/4c9d98923c305602.jpg_240x240_2c78a148.jpg"
                            }
                          ]
                    } 
                ],       
             "last": {
                "comment": "查看更多评论",
                "icon": "&#xe768;"
             }
               
         }
           
        }
    },
    components: {
         
    }
}
</script>


<style scoped>
    .contain{
        margin: .2rem 0 .2rem;
        background: #ffffff;
    }
    .comment-title{
        height: .84rem;
        padding-left: .24rem;
        line-height: .84rem;
        font-size: .32rem;
        color: #212121;
    }
    .title-leftline{
        float: left;
        display: block;
        width: .06rem;
        height: .28rem;
        background: #00bcd4;
        margin: .3rem .12rem 0 0;
    }
    .content-contain{
        padding: 0 .24rem;
    }
    .content-contain::before{
        color: #f0f0f0;
    }
    .content{
        padding: .22rem 0 .2rem;
    }
    .content::before{
        border-bottom: 1px dashed #cccccc;
    }
    .content-level{
        position: relative;
        font-size: 0;
        height: .42rem;
    }
    .contain-star{
        position: absolute;
        left: 0;
        top: 0;
        width: 1.54rem;
        height: 0.25rem;
        overflow: hidden;
    }
    .content-starlevel{
         width: 2rem;
         height: .25rem;
    }
    .content-graystar{
         float: left;
    }
    .star{
        font-size: .28rem;
        color: #00bcd4;
    }
    .graystar{
        font-size: .28rem;
        color: #e0e0e0;
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
    .more-comment{
        text-align: center;
        font-size: .28rem;
        color: #616161;
        height: .78rem;
        line-height: .78rem;
    }
    .commet-arrows{
       font-size: .24rem; 
       color: #b9a49e;
    }
</style>
