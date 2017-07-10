<template>
    <div class="choose-date border-top">
      <div class="note">{{date.title}}</div>
        <div class="datecard">
          <span class="datecard-item border"
                v-for="(item,index) in date.value"
                :key="item.key"
                :style="index==3 && lastItemStyle"
                :class="bgDateClass"
                @click="handleDateClick">
            <em class="datecard-name"
                :style="index==3 && lastNameStyle">{{item.displayName}}</em>
            <b class="datecard-detail">{{index==3 ? '' : item.valueProperties.displayDate}}</b>
          </span>
        </div>
    </div>
</template>

<script>

export default {
    props:["date"],
    data() {
      return {
        lastItemStyle:{
          "margin-right":0
        },
        lastNameStyle:{
          "line-height":".86rem",
          "padding-top":0
        },
        bgDateClass:{
          "datecard-item-active":false
        }
      }
    },
    methods:{
      handleDateClick:function() {
        this.bgDateClass
      }
    }
}


</script>


<style scoped>
    .choose-date {
      margin: .18rem .2rem 0 .2rem;
      position: relative;
    }
    .choose-date.border-top::before {
      border: .02rem dashed #ccc;
    }
    .note {
      padding-top: .1rem;
      line-height: .66rem;
      color: #333;
      font-size: .26rem;
    }
    .datecard {
      display: flex;

    }
    .datecard-item {
      flex:1;
      display: inline-block;
      height: .86rem;
      text-align: center;
      margin-right: .16rem;
    }
    .datecard-name {
      display: block;
      padding-top: .08rem;
      height: .36rem;
      line-height: .36rem;
      font-size:.28rem;
    }
    .datecard-detail {
      display: block;
      height: .32rem;
      line-height: .32rem;
      font-size: .24rem;
      color: #888;
    }
    .border::before {
      border-radius: .3rem;
      border:.02rem solid #bdbdbd;
    }

    .datecard-item-active {
      background:#00bcd4;
    }
    .border::before {
      border-radius: .3rem;
      border:.02rem solid #bdbdbd;
      border-color: #00bcd4;
    }
    
</style>



