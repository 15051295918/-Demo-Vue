<template>
    <div class="content">
       <div class="content-days">日期选择</div>
       <div class="content-choose">
       		<span class="content-choose-days content-border-dark">
       			<em class="content-dark">今天</em>
       			<strong class="content-day-dark">07月07日</strong>
       		</span>
       		<span class="content-choose-days content-border active">
       			<em class="content-dark">明天</em>
       			<strong class="content-darks">07月08日</strong>
       		</span>
       		<span class="content-choose-days content-border">
       			<em class="content-dark">后天</em>
       			<strong class="content-darks">07月09日</strong>
       		</span>
       		<span class="content-choose-days content-border">
       			<em class="content-other">其他日期</em>
       		</span>
       </div>
       <div class="booking-note">
	       	<span class="booking-select">
	       		<em class="booking-pepole">人群</em>
	       		<i class="booking-combination">
	       			<p class="booking-adult">成人</p>
	       			<p class="booking-adult booking-children">儿童</p>
	       		</i>
	       	</span>
			   	<span class="booking-select">
	       		<em class="booking-pepole">发车时间</em>
	       		<i class="booking-combination">
	       			<p class="booking-adult booking-children">07:30</p>
	       		</i>
	       	</span>
			   	<span class="booking-select">
	       		<em class="booking-pepole">用餐</em>
	       		<i class="booking-combination">
	       			<p class="booking-adult booking-children">含餐</p>
	       		</i>
	       	</span>
			   	<span class="booking-select">
	       		<em class="booking-pepole">服务语言</em>
	       		<i class="booking-combination">
	       			<p class="booking-adult booking-children">中文</p>
	       		</i>
	       	</span>
       </div>
    </div>
</template>
<script>
export default {
    data () {
        return {         
        }
    },
    components: {
        
    }
}
</script>


<style scoped>
.content{
	padding:0 .2rem;
	height: 417.6px;
    overflow: hidden;
}
.content-days{
    line-height: 1rem;
    color: #333;
    font-size: .26rem;
}
.content-choose-days{
	box-sizing: border-box;
    float: left;
    width: 22.5%;
    height: .86rem;
    display: inline-block;
    min-width: 1.2rem;
    min-height: .82rem;
    border: .02rem solid #bdbdbd;
    border-radius: .1rem;
}
.content-dark{
	width:100%;
	display:block;
	text-align: center;
    padding-top: .08rem;
    font-size: .28rem;
    line-height: .36rem;
}
.content-darks{
	width:100%;
	display:block;
	text-align: center;
    font-size: .24rem;
    line-height: .36rem;
    padding-bottom: .08rem;
    color:#888;
}
.content-border{
	margin-left: 3.33%
}
.content-border-dark{
	border-color:#ececec;
	color:#dedede;
}
.content-day-dark{
	width:100%;
	display:block;
	text-align: center;
    font-size: .28rem;
    line-height: .36rem;
    color:#dedede;
    padding-bottom: .08rem;
}
.content-other{
	display:block;
	width:100%;
	height:100%;
	text-align:center;
	line-height: .86rem;
}
.content-choose{
	overflow:hidden;
	padding-bottom: .3rem;
}
.booking-select{
	display: block;
	width: 100%;
	padding-bottom: .25rem;
}
.booking-note{
	overflow: hidden;
}
.booking-pepole{
	padding-top: .1rem;
    line-height: .66rem;
    color: #333;
    font-size: .26rem;
	display: block;
}
.booking-combination{
	display: block;
	overflow: hidden;
	 margin-top: -.15rem;
}
.booking-adult{
	display: inline-block;
    float: left;
    margin-right: .2rem;
    margin-top: .15rem;
    border: .02rem solid #c7ced4;
    padding: 0 .2rem;
    line-height: .53rem;
    background: #fff;
    font-size: .28rem;
	border-radius: .1rem;
}
.booking-children{
	border: .02rem solid #0089a1;
    background: #b2eaf2;
    color: #0089a1;
}
.active{
    position: relative;
    border-color: #00bcd4;
    color: #fff;
    background: #00bcd4;
}
.active .content-darks{
	color: #fff;
}


</style>