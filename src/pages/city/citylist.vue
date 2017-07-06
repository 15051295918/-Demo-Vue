<template>
	<ul class="city-menu border-leftright">
		<li class="city-list" v-for="item in cityIndex">
			<dl>
				<dt class="city-index border-bottom">{{item}}</dt>
				<dd class="city-item border-bottom" v-for="value in cityDatas">{{value.name}}</dd>
			</dl>
		</li>
	</ul>
</template>

<script>
	

	export default {
		beforeMount: function() {
			// this.cityMessage = [];
			// this.cityIndex.map(value => {
			// 	this.cityMessage.push(cityDataFilter(this.cityInfo, value));
			// })
			// console.log(this.cityMessage);
		},

		data () {
			return {
				cityIndex: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
				cityMessage: []
			}
		},
		props: ["cityInfo"],
		computed: {
			//函数实现功能：输入json数据、字母字符串，返回城市名称
			cityDatas: function() {
				var msg = this.cityInfo;
				var words = "a";

				words = words.toString().toLowerCase();
				words.toString().split("").map((word, num) => {
					msg = msg.filter((value, index) => {
						var str = value.pinyin.charAt(num).toLowerCase();
						return word == str;
					})
				})
				return msg;
			}
		}
	}

</script>

<style scoped>
	.city-menu {
		background: #f5f5f5;
	}
	.city-index {
		line-height: .54rem;
		padding-left: .3rem;
		color: #616161;
		font-size: .26rem;
	}
	.city-item {
		line-height: .76rem;
		padding-left: .2rem;
		font-size: .28rem;
		color: #212121;
		background: #fff;
	}
</style>