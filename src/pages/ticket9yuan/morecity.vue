<template>
  	<div class="more-city" ref="moreCityOff" @click="handleClickOff">
		<div class="more-city-off">×</div>
		<div class="more-city-name">
			<ul>
				<li></li>
			</ul>
		</div>
  	</div>	
</template>

<script>
export default {
  data () {
    return {
     
    }
  },
  methods: {
  	handleClickOff: function() {
  		this.$refs.moreCityOff.style = "display:none"
  	}
  }
  
}
</script>


<style scoped>
	.more-city-off {
		position: absolute;
		top: 3.4rem;
		right: 0;
		width: 1rem;
		height: 1rem;
		font-size: .8rem;
		color: #fff;
		text-align: center;
		line-height: 1rem;
	}
	.more-city-name {
		width: 100%;
		height: 4.6rem;
		background: #fff;
		position: absolute;
		top: 4.4rem;
	}
</style>