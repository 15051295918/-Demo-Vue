<template>
	<transition>
		<div class="otherdate-main" v-show="dateshow">
			<div class="otherdate-header border-bottom">
			<h2 class="header-title iconfont icon-zuo">选择时间</h2>
			<div class="iconfont close-icon"
				 @click="handleCloseDate">&#xe621;
			</div>
		</div>
		<div class="calendar-wrap">
			<div class="calendar-item">
				<table class="calendar">
					<caption class="calendar-caption">2017年7月</caption>
					<thead>
						<tr>
							<th class="calendar-day">日</th>
							<th class="calendar-day">一</th>
							<th class="calendar-day">二</th>
							<th class="calendar-day">三</th>
							<th class="calendar-day">四</th>
							<th class="calendar-day">五</th>
							<th class="calendar-day">六</th>
						</tr>
					</thead>
					<tbody>
						<tr></tr>
					</tbody>
				</table>
			</div>
		</div>
	  </div>
	</transition>
</template>

<script>

export default {
	  props:["dateshow"],
    data() {
      return {
  		
      }
    },
    methods: {
    	handleCloseDate:function() {
    		this.$emit("close")
    	}
    }
}

</script>


<style scoped>
  	.otherdate-main {
  	  position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 20;
      width: 100%;
      height: 454.4px;
      background: #fff;
  	}
  	.otherdate-header {
	  width: 100%;
	  height: 1rem;
    }
    .header-title {
	  line-height: 1rem;
	  font-size: .34rem;
	  text-align: center;
	  color: #212121;
    }
    .icon-zuo::before {
      position:absolute;
      left: 0;
      top: 0;
      width: 0.88rem;
      font-size: .36rem;
      color: #9e9e9e;
    }
    .border-bottom::before {
	  background: #c9cccd;
    }
    .close-icon {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 2;
      width: .88rem;
      height: 1rem;
      color: #9e9e9e;
      font-size: .4rem;
      line-height: 1rem;
      text-align: center;
    }
    .calendar-wrap {
      overflow: auto;
      min-height: 5.4rem;
      max-height: 6.5rem;
      position: relative;
      width: 100%;
      background: orange;
    }
    .calendar-item {
      margin: 0 .2rem;
      background: #fff;
    }
    .calendar {
    	
    }

	  .v-leave-active, .v-leave-active {
      transition: all .6s ease;
    }
    .v-enter-to, .v-leave {
      bottom: 0;
    }
    .v-enter, .v-leave-to {
      bottom: -454.4px;
    }
</style>

