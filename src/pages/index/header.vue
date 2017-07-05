<template>
  <header class="mp-header">
		<a class="mp-header-back"><</a>
		<div class="mp-header-search" >
			<a  title="北京" href="#">
				<span>输入城市/景点/游玩主题</span>
			</a>
		</div>
		<div class="mp-header-chosecity" >
			<a href="#" title="城市选择" class="mp-linkarea">
				<span class="mp-nav-city">
					北京 <i></i>
				</span>
			</a>
		</div>
		<div style="clear: both;"></div>
	</header>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      msg: 'header'
    }
  }
}
</script>

<style scoped lang="scss">
	.mp-header{
		padding: 5px;
		background: #00bcd4;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
	 a{
		color: white;
	}
	}
	.mp-header-back{
	}
	.mp-header-search{
		box-sizing: border-box;
		width: 4.2rem;
		border-radius: 5px;
		background: white;
		height: 0.6rem;
		color: #e4e7ea;
		text-align: center;
		a{
			color: #e4e7ea;
			line-height: 0.6rem;
		}
	}
 </style>
