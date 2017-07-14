<template>
  <div class="main">
    <header-compontent></header-compontent>
    <tagfilter></tagfilter>
    <content-component :ticketList="contentInfo"></content-component>
  </div>
</template>

<script>
import tagFilter from './tagfilter';
import header from './header';
import content from './content';


export default {
  data () {
    return {
        contentInfo:[]
    }
  },
  created() {
    this.$http.get('/static/shoplist.json').then((response)=>{
      this.contentInfo = response.body.data.ticketList
    }).catch((response)=>{
      console.log(response)
    })
  },
  components:{
   'header-compontent': header,
    tagfilter: tagFilter,
    'content-component': content
  }
}
</script>


<style scoped>
  
</style>