<template>

	<div class="comment-container border-bottom">
		<h3 class="comment-title">用户评论</h3>
		<div class="comment-list" v-for="(item, index) in data" :key="index + '_imgswiper_item'">
			<div class="comment-item border-top">
				<div class="comment-stardate"><span class="mpf-starlevel">
					<i class="iconfont mpf-starlevel-gain" style="width:100.0%">&#xe6e2;&#xe6e2;&#xe6e2;&#xe6e2;&#xe6e2;</i>
					</span><span class="comment-date">z*9&nbsp;&nbsp;2017-06-23</span>
				</div>
				<p class="comment-content" v-bind:style="styleHeigth" >{{item.commentContent}}
				</p>
				<div :id="index+'0'" class="comment-foldbtn mp-iconfont" data-status="fold" v-on:click="commentFoldBtn">
					<span>∨</span>

				</div>
				<div class="comment-imgs" mp-role="scrollImages">
					<div class="comment-imgouter" v-for="item in dataImg" >
						<div class="comment-imginner">
							<img class="comment-img" mp-role="lazyLoadImg" data-original-src="" data-bigimg="" :src="item.commentImglist" @click="handleClickMask"/>
						</div>
					</div>
					<div class="comment-imgnumtag"><span class="commenttag-bg">
						</span><span class="comment-tagnum">共9张</span>
					</div>
				</div>
			</div>		
		</div>
		<a href="//touch.piao.qunar.com/touch/sight/comment.htm?sightId=38170&amp;cat=from_area%3Dtl_hot_search%26from_value%3D%25E6%2595%2585%25E5%25AE%25AB%26from_index%3D4" mp-role="commentLink">
			<div class="more-refresh border-top">
				查看全部评论
				<span class="mp-iconfont">></span>
			</div>
		</a>
		<div class="mp-imgswipe" v-show="seen">
			<div class="mp-slide-closebutton">
				<span class="iconfont " @click="handleClickClose">&#xe621;</span>
			</div>
			<div class="mp-imgswipe-show js-slider-picture mp-imgswipe-current" style="left: 0px;">
				<div class="mp-imgswipe-img" >
					<img src="" class="mask-img" />
				</div>
			</div>
			<div class="mp-imgswipe-show js-slider-picture-back"></div>
			<div class="mp-imgswipe-bar">
				<div class="mp-imgswipe-note">
					<em class="js-slider-name"></em>
					<span class="js-slider-namesub">(1/1)</span>
				</div>
				<div class="mp-imgswipe-turn mp-imgswipe-prev mp-imgswipe-disabled">
					<span class="mpg-iconfont"><</span>
				</div>
				<div class="mp-imgswipe-turn mp-imgswipe-next mp-imgswipe-disabled">
					<span class="mpg-iconfont">></span>
				</div>
			</div>
		</div>	
	</div>

</template>

<script>


export default {

    data () {
        return {
			styleHeigth:{
				height:"105px",
				overflow:"hidden"
			},
			seen:false
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
		},

		handleClickMask: function(e) {
			this.seen = true;
			document.getElementsByClassName("mask-img")[0].setAttribute("src",e.currentTarget.src)
		},

		handleClickClose:function (){
			this.seen = false;
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
	    position: relative;
	    width: 1.4rem;
	    height: .28rem;
	}

	.mpf-starlevel-gain {
	    z-index: 2;
	    color: #00bcd4;
	    margin-bottom:1rem
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

	.mp-imgswipe {
	    overflow: hidden;
	    position: fixed;
	    z-index: 99;
	    top: 0;
	    bottom: 0;
	    width: 100%;
	    background-color: #000;
	}

	.mp-slide-closebutton {
	    position: absolute;
	    z-index: 3;
	    top: 1.6rem;
	    right: .4rem;
	    width: .4rem;
	    height: .6rem;
	    padding: .2rem;
	    color: #fff;
	    font-size: .6rem;
	    -webkit-border-radius: .3rem;
	    -moz-border-radius: .3rem;
	    border-radius: .3rem;
	}

	.mp-slide-closebutton  span{
		display:inline-block;
		font-size:.56rem;
		text-align:center;
	}

	.mpg-iconfont {
	    font-family: 'mpiconfont';
	    speak: none;
	    font-style: normal;
	    font-weight: normal;
	    font-variant: normal;
	    text-transform: none;
	    line-height: 1;
	    -webkit-font-smoothing: antialiased;
	    -moz-osx-font-smoothing: grayscale;
	}

	.mp-imgswipe-current {
	    z-index: 2;
	}

	.mp-imgswipe-show {
	    position: absolute;
	    z-index: 1;
	    width: 100%;
	    height: 100%;
	   
	}

	.mp-imgswipe-img {
	    height: 100%;
	    width:100%;
	    position: absolute;
	    z-index:100;
	}
	
	.mp-imgswipe-img .mask-img{
		width:100%;
		margin-top:50%;
	}

	.mp-imgswipe-show {
	    position: absolute;
	    z-index: 1;
	    width: 100%;
	    height: 100%;
	    
	}

	.mp-imgswipe-bar {
	    position: absolute;
	    z-index: 9;
	    right: 0;
	    bottom: .4rem;
	    left: 0;
	    color: #fff;
	}

	.mp-imgswipe-note {
	    height: .8rem;
	    font-size: .24rem;
	    line-height: .8rem;
	    text-align: center;
	}

	.mp-imgswipe-disabled {
	    opacity: .5;
	}

	.mp-imgswipe-prev {
	    left: .4rem;
	}

	.mp-imgswipe-turn {
	    position: absolute;
	    top: 0;
	    width: .8rem;
	    height: .8rem;
	    background: rgba(51,51,51,.8);
	    font-weight: bold;
	    font-size: .4rem;
	    text-align: center;
	    vertical-align: middle;
	    -webkit-border-radius: 50%;
	    -moz-border-radius: 50%;
	    border-radius: 50%;
	}

	.mp-imgswipe-turn .mpg-iconfont {
	    line-height: .8rem;
	}

	.mp-imgswipe-disabled {
	    opacity: .5;
	}

	.mp-imgswipe-next {
	    right: .4rem;
	}

	.mp-imgswipe-turn .mpg-iconfont {
	    line-height: .8rem;
	}
</style>