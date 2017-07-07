<template>
    <div class="main">
        <index-header></index-header>
        <index-spot></index-spot>
    </div>
</template>

<script>

import header from './header'
import spot from './spot'

export default {
    data () {
        return {
            
        }
    },
    components: {
        "index-header": header,
        "index-spot" : spot
    }
}
</script>


<style scoped>
  .main{
  	min-height: 100%;
  	background: #f5f5f5;
  }

</style>
