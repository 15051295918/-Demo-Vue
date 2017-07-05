<template>
	<div class="list-item">
		<div class="itemLeft">定位失败</div>
		<div class="itemRight">9元门票</div>
	</div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
    }
  }
}
</script>
<style type="text/css">
	.list-item{
		height: .98rem;
		width: 100%;
		border-top: .01rem solid #ccc;
	}
	.itemLeft{
		height: .98rem;
		width: 49%;
		text-align: center;
		line-height: .98rem;
		float: left;
		border-right: .01rem solid #ccc;
	}
	.itemRight{
		height: .98rem;
		width: 50%;
		text-align: center;
		line-height: .98rem;
		float: left;
	}
</style>

