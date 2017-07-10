<template>
  	<div class="titket-city">
         <ul class="city">
            <li class="city-items" v-for="(items, index) in cityItmes" :key="index + '_city_itmes'" :class="{active: index==activeIndex}" @click="handleClick(index)">
                <a href="javascript:void(0)" class="city-items-a">{{items.city}}</a>
            </li>
        </ul> 
  	</div>	
</template>

<script>

export default {
  created: function(){
        this.$http.get('/static/ticketRmb.json').then(response => {
            this.commentcityItmes = response.body.data.indexInfo.cityItem;
        }, response => {
            console.log("get list data error")
        });
    },
  data () {
    return {
        commentcityItmes:[],
        activeIndex:1
    }
  },
  computed: {
        cityItmes: function() {
            var cityItmes = [];
            for (var i = 0; i < this.commentcityItmes.length; i++) {
                cityItmes.push(this.commentcityItmes[i]);
            }
            return cityItmes;
        }
  },
  methods: {
        handleClick: function(index) {
            this.activeIndex = index;
            
        }
    }

}
</script>


<style scoped>
	  .titket-city {
      width: 100%;
      height: 1.8rem;   
    }
    .city {
      width:98%;
      height:1.7rem;
      margin: 1%;
    }
    .city-items {
      float: left;
      width: 24%;
      height: .78rem;
      text-align: center;
      line-height: .78rem;

      background: url(//s.qunarzz.com/piao_topic/image/touch/custom/2017/2125perfect03/170704summer/menu_sprite.png) .1rem .1rem/400% 3.44rem no-repeat;
    }
    .city-items-a {
      color: #fff;
    }
    .active{
        background-position: 32.3% 74%;
    }
</style>