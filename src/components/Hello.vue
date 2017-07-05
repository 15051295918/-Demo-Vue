<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ dbmsg }}</h1>
    
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'laizhe'
    }
  },
  computed:{
    dbmsg:function(){
      return this.msg + "" + this.msg;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
