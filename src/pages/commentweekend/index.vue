<template>
  	<div>
  		<div class="comment-header">
	  		<a href="" class="comment-header-return"></a>
	  		<h1 class="comment-header-h">点评</h1>
  		</div>
		<div class="comment-headerbottom"></div>
		<div class="comment-coninfo">
			<ul class="comment-ulcon" v-for="(list, index) in lists" :key="index + '_comment_list'">
		  		<li class="comment-list border-top" v-for="item in list">
		  			<div class="comment-list-head">
			  			<span class="star">{{item.iconfont}}</span>
			  			<span v-html="item.time" class="comment-time">{{item.time}}</span>
		  			</div>
		  			<div class="comment-descr">
			  			<p class="comment-p">
			  				{{item.txt}}
			  			</p>
			  			<div class="comment-descmore"><span class="comment-jiantou"></span></div>
		  			</div>
		  			<div class="comment-img">
		  				<img v-for="(itemimg, index) in item.img" :src="itemimg" alt="" >		
		  			</div>
		  		</li>
	  		</ul>
  			<div class="comment-addmore">查看更多</div>
		</div>
		
  	</div>	
</template>

<script>

import detect from '@/utils/detect.js'

export default {
    created: function(){
        this.$http.get('/static/commentweekend.json').then(response => {
            this.commentlistInfo = response.body.data.indexInfo;            
        }, response => {
            console.log("get list data error")
        });
    },

    data () {
	    return {
	        commentlistInfo: []  
	    }
    },
  	computed: {
        lists: function() {
            var lists = [];
            for (var i = 0; i < this.commentlistInfo.length; i++) {
                var list = Math.floor(i / 10); 
                if (!lists[list]) { 
                    lists[list] = [] 
                }
                lists[list].push(this.commentlistInfo[i]);
            }
            return lists;
        }
    }
  
}
</script>


<style scoped>
	.comment-header{
		position: relative;
		display: flex;
		flex-flow: row;
	    height: .88rem;
	    background: #00bcd4;
	    z-index: 91;
	}
	.comment-header-h{
		line-height: .88rem;
		color:#fff;
		text-align: center;
		width: 100%;
		font-size: .32rem;
	}
	.comment-header-return{
		display: inline-block;
		transform: rotateZ(45deg);
		width: .22rem;
		height: .22rem;
		border-left: .04rem solid #fff;
		border-bottom: .04rem solid #fff;
		position: absolute;
		left: .4rem;
		top: .28rem;
	}
	.comment-headerbottom{
		height: .2rem;
	    background: #f5f5f5;
	}
	.comment-coninfo{
		position: relative;
	}
	.comment-ulcon{
		padding-bottom: .88rem; 
	}
	.comment-list::before{
		border-color: #999;
	}
	.comment-list{
		position: relative;
		overflow: hidden;
		color: #212121;
    	font-size: .28em;
    	padding: 0 .2rem .25rem .55rem ;
    	font-family: Arial,"Microsoft Yahei","Helvetica Neue",Helvetica,sans-serif;
	}
	.comment-list-head{
		display: flex;
		justify-content: space-between;
		flex-flow: row;
		padding: .25rem 0;
	}
	 .star{
	 	color:red;
	 	display: block;	 
	 }
	.comment-time{		
		color: #999;
	    font-size: .26rem;
	    display: block;	   	     
	}
	.comment-p{
	    display: block;
	    overflow: hidden;
	    color: #999;
	    font-size: .28rem;
	    padding-right: .06rem;
	    line-height: .42rem;
	    height: 1.6rem;
	}
	.comment-img{
		padding-top: .2rem;
		overflow: hidden;
		width: 90%;
	}
	.comment-img img{
		width: 1.05rem;
	    height: 1.05rem;
	    -webkit-border-radius: .06rem;
	    -moz-border-radius: .06rem;
	    border-radius: .06rem;
	    position: relative;
	    float: left;
	    margin: .1rem .2rem 0 0;
	}
	.comment-descmore {
	    height: .4rem;
	    text-align: center;
	    position: relative;
	}
	.comment-jiantou {
	    transform: rotateZ(45deg);
		width: .18rem;
		height: .18rem;
		border-right: .02rem solid #999;
		border-bottom: .02rem solid #999;
		position: absolute;
		left: 48%;
		top: .18rem;
	}
	.comment-addmore{
		height: .88rem;
		position: absolute;
		bottom: 0;
		background: #fff;
		text-align: center;
		font-size: .32rem;
		width: 100%;
		border-top: .02rem dashed #999;
		line-height: .88rem;
	}
</style>
