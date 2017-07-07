<template>
	<div class="letter">
		<ul @touchmove="touchmove($event)">
			<li @click="touchstart">A</li>
			<li>B</li>
			<li>C</li>
			<li>D</li>
			<li>E</li>
			<li>F</li>
			<li>G</li>
			<li>H</li>
			<li>I</li>
			<li>J</li>
			<li>K</li>
			<li>L</li>
			<li>M</li>
			<li>N</li>
			<li>P</li>
			<li>Q</li>
			<li>R</li>
			<li>S</li>
			<li>T</li>
			<li>W</li>
			<li>X</li>
			<li>Y</li>
			<li>Z</li>
		</ul>
	</div>
</template>

<script>
export default {
		data(){
			return{
				
			}
		},
		methods:{
			"touchstart":function(){
				alert()
			},
			"touchmove" :function(e){
				console.log(window)
				console.log(e.touches[0].pageY)
			},
		}
	}
</script>

<style scoped>
	ul{
		position:fixed;
		top:1.8rem;
		right:0;
	}
	li{
		font-size: 0.24rem;
		width: .32rem;
		line-height: .32rem;
		padding-left: .2rem;
		color:#00afc7;
		text-align: center;
		margin-top: .04rem
	}
</style>