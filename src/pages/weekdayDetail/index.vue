<template>
  <div>{{$route.params.position}}
    <div>{{masg}}</div>
  </div>

</template>

<script>
export default{
   data(){
     return {
       masg:window.localStorage.title
     }
   }
}
</script>


<style scoped>

</style>
