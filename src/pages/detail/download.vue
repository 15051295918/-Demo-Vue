<template>
	<a class="app-download" ref="app" @click="downloadapp"></a>
</template>

<script>



import scroll from '@/utils/scroll.js'
import detect from '@/utils/detect.js'





export default {
  mounted () {
    scroll.scroll(this.$refs.app)　
  },
  methods:{
    downloadapp : function (event) {
      if( detect.os == 'iOS'){
        Location.href = "https://itunes.apple.com/cn/app/id395096736";
      }else if(detect.os == 'Android'){
        Location.href = "https://play.google.com/store/apps/details?id=com.Qunar&hl=zh";
      }else if(detect.os != 'iOS' || 'Android'){
        location.href = "http://touch.qunar.com/"
      }
    }
  },
  data () {
    return {
     
    }
  }
  
}
</script>


<style scoped>
	.app-download{
        display: none;
        position: fixed;
        top: 7.5rem;
        left: 0;
        width: 1.36rem;
        height: 1.15rem;
        z-index: 98;
        background: #00afc7;
        background-size: 1.36rem 1.36rem;
        border-radius: 100%;
    }
</style>