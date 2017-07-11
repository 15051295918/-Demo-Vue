<template>
	<div class="main">
		<div>
		  <ul class="pager">
		    <li class="previous-page"><a href="#">上一页</a></li>
		    <li class="pageinfo"><span>1</span>/<span>11</span></li>
		    <li class="next-page"><a href="#">下一页</a></li>
		  </ul>
		</div>
	</div>
</template>

<script>
export default {
	
}
</script>


<style scoped>
	.pager{
		height: 2rem;
		display: -webkit-flex;
		justify-content: center;
		align-items: center;
	}
	.previous-page,.next-page{
		width: 1.4rem;
		height: .6rem;
		line-height: .6rem;
		text-align: center;
		border: .02rem solid #00B7FF;
		border-radius:.06rem;
	}
	.pageinfo{
		margin: .2rem;
		font-size: .3rem;
	}
</style>