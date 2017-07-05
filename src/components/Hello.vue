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
      msg: 'Hello World'
    }
  },
  computed: {
    dbmsg: function() {
      return this.msg + '' + this.msg;
    }
  }
}
</script>


<style scoped>

</style>
