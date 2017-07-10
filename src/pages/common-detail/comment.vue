<template>

	<div class="comment-container border-bottom">
		<h3 class="comment-title">用户评论</h3>
		<div class="comment-list" v-for="(item, index) in data" :key="index + '_imgswiper_item'">
			<div class="comment-item border-top">
				<div class="comment-stardate"><span class="mpf-starlevel"><i class="mp-iconfont mpf-starlevel-gain" style="width:100.0%">BBBBB</i></span><span class="comment-date">z*9&nbsp;&nbsp;2017-06-23</span>
				</div>
				<p class="comment-content" v-bind:style="styleHeigth" >{{item.commentContent}}
				</p>
				<div :id="index" class="comment-foldbtn mp-iconfont" data-status="fold" v-on:click="commentFoldBtn">
					<span>∨</span>

				</div>
				<div class="comment-imgs" mp-role="scrollImages">
					<div class="comment-imgouter" v-for="item in dataImg">
						<div class="comment-imginner">
							<img class="comment-img" mp-role="lazyLoadImg" data-original-src="" data-bigimg="" :src="item.commentImglist" />
						</div>
					</div>
					<div class="comment-imgnumtag"><span class="commenttag-bg"></span><span class="comment-tagnum">共9张</span>
					</div>
				</div>
			</div>		
		</div>
		<a href="//touch.piao.qunar.com/touch/sight/comment.htm?sightId=38170&amp;cat=from_area%3Dtl_hot_search%26from_value%3D%25E6%2595%2585%25E5%25AE%25AB%26from_index%3D4" mp-role="commentLink">
			<div class="more-refresh border-top">
				查看全部评论
				<span class="mp-iconfont">F</span>
			</div>
		</a>
	</div>

</template>

<script>


export default {

    data () {
        return {
			styleHeigth:{
				height:"105px",
				overflow:"hidden"
			}
        }
    },
    methods:{
		commentFoldBtn:function (e){
			//操作dom
			var id=e.currentTarget.id
			var height=document.getElementById(id).previousSibling
			var loadMore=document.getElementById(id).firstChild
			if(height.previousSibling.style.height=="105px"){
				height.previousSibling.style.height="auto";
				height.previousSibling.style.overflow="auto";
				loadMore.innerHTML="∧"
			}else{
				height.previousSibling.style.height="105px";
				height.previousSibling.style.overflow="hidden";
				loadMore.innerHTML="∨"
			}
		}
    },
    props:["data","dataImg"]
	
}
</script>


<style scoped>
	.comment-container {
	    margin-top: .2rem;
	}

	.comment-title {
	    padding: 0 .2rem;
	    height: .88rem;
	    background: #fff;
	    color: #333;
	    font-size: .3rem;
	    line-height: .88rem;
	    text-indent: .2rem;
	}

	.comment-list {
	    background: #fff;
	}

	.comment-item {
	    padding: .1rem .2rem .3rem .2rem;
	}

	.comment-stardate {
	    margin-top: .1rem;
	    line-height: .6rem;
	}

	.mpf-starlevel {
		vertical-align: middle;
	    display: inline-block;
	    position: relative;
	    width: 1.4rem;
	    height: .28rem;
	}

	.mpf-starlevel-gain {
	    z-index: 2;
	    color: #00bcd4;
	}

	.comment-date {
	    position: relative;
	    float: right;
	    top: .16rem;
	    margin-left: .2rem;
	    line-height: .28rem;
	    font-size: .24rem;
	    vertical-align: middle;
	    color: #212121;
	}

	.comment-content {
	    word-break: break-all;
	    word-wrap: break-word;
	    line-height: .42rem;
	    font-size: .26rem;
	    color: #616161;
	}

	.comment-foldbtn {
	    height: .48rem;
	    line-height: .48rem;
	    text-align: center;
	    font-size: .26rem;
	    color: #9e9e9e;
	}

	.comment-imgs {
	    margin: .2rem 0 .1rem 0;
	    position: relative;
	    zoom: 1;
	    overflow: hidden;
	}

	.comment-imginner {
	    margin-left: .07rem;
	    margin-right: .07rem;
	}

	.comment-imgouter {
	    float: left;
	    width: 33.33%;
	    margin-bottom: .1rem;
	}

	.comment-img {
	    width: 100%;
	    background: url(//s.qunarzz.com/piao_topic/image/common/default/140x140.png);
	    background-size: contain;
	}

	a {
	    color: #00afc7;
	    text-decoration: none;
	}

	.more-refresh {
	    position: relative;
	    margin-top: -.02rem;
	    height: .8rem;
	    background: #fff;
	    color: #616161;
	    line-height: .8rem;
	    text-align: center;
	    z-index: 2;
	}

	.more-refresh .mp-iconfont {
	    margin-left: .1rem;
	    color: #616161;
	    font-size: .2rem;
	}
</style>