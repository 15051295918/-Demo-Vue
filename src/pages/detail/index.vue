<template>
<<<<<<< HEAD
    <div class="main">
        <detail-header :data="swiperInfo"></detail-header>
       
    </div>
</template>

<script>

import header from './header'

export default {
	created: function(){
		this.$http.get('static/detail.json').then( response=>{
			this.swiperInfo = response.body.data.swiperInfo;
		},response=>{
			console.log("get index data error")
		});
	},
    data () {
        return {
            swiperInfo:[]
        }
    },
    components: {
        "detail-header": header,
=======
	<download></download>
</template>

<script>
import download from './download'

export default {
  data () {
    return {
     
    }
  },
  components: {
        "download": download,
>>>>>>> 8604427a0929e2144ef5b6268ea43cd051bc41c7
        
    }
}
</script>


<style scoped>
<<<<<<< HEAD
	.main{
		position: absolute;
		left:0;
		top:0;
		width:100%;
		height:100%;
		min-height: 100%;
		background:#f5f5f5;
	}
</style>
=======
	
</style>
>>>>>>> 8604427a0929e2144ef5b6268ea43cd051bc41c7
